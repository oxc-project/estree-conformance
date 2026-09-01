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
        "name": "TypeScript",
        "optional": false,
        "typeAnnotation": null,
        "start": 18,
        "end": 28
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "TSInterfaceDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "IIndexable",
              "optional": false,
              "typeAnnotation": null,
              "start": 45,
              "end": 55
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
                    "start": 56,
                    "end": 57
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 56,
                  "end": 57
                }
              ],
              "start": 55,
              "end": 58
            },
            "extends": [],
            "body": {
              "type": "TSInterfaceBody",
              "body": [
                {
                  "type": "TSIndexSignature",
                  "parameters": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "s",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSStringKeyword",
                          "start": 73,
                          "end": 79
                        },
                        "start": 71,
                        "end": 79
                      },
                      "start": 70,
                      "end": 79
                    }
                  ],
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
                        "start": 82,
                        "end": 83
                      },
                      "typeArguments": null,
                      "start": 82,
                      "end": 83
                    },
                    "start": 80,
                    "end": 83
                  },
                  "readonly": false,
                  "static": false,
                  "accessibility": null,
                  "start": 69,
                  "end": 84
                }
              ],
              "start": 59,
              "end": 90
            },
            "declare": false,
            "start": 35,
            "end": 90
          },
          {
            "type": "TSDeclareFunction",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "createIntrinsicsObject",
              "optional": false,
              "typeAnnotation": null,
              "start": 104,
              "end": 126
            },
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
                    "name": "T",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 127,
                    "end": 128
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 127,
                  "end": 128
                }
              ],
              "start": 126,
              "end": 129
            },
            "params": [],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "IIndexable",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 133,
                  "end": 143
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
                        "start": 144,
                        "end": 145
                      },
                      "typeArguments": null,
                      "start": 144,
                      "end": 145
                    }
                  ],
                  "start": 143,
                  "end": 146
                },
                "start": 133,
                "end": 146
              },
              "start": 131,
              "end": 146
            },
            "body": null,
            "expression": false,
            "start": 95,
            "end": 147
          },
          {
            "type": "TSInterfaceDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "IHashTable",
              "optional": false,
              "typeAnnotation": null,
              "start": 162,
              "end": 172
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
                    "start": 173,
                    "end": 174
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 173,
                  "end": 174
                }
              ],
              "start": 172,
              "end": 175
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
                    "name": "getAllKeys",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 186,
                    "end": 196
                  },
                  "computed": false,
                  "optional": false,
                  "kind": "method",
                  "typeParameters": null,
                  "params": [],
                  "returnType": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSArrayType",
                      "elementType": {
                        "type": "TSStringKeyword",
                        "start": 200,
                        "end": 206
                      },
                      "start": 200,
                      "end": 208
                    },
                    "start": 198,
                    "end": 208
                  },
                  "accessibility": null,
                  "readonly": false,
                  "static": false,
                  "start": 186,
                  "end": 209
                },
                {
                  "type": "TSMethodSignature",
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "add",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 218,
                    "end": 221
                  },
                  "computed": false,
                  "optional": false,
                  "kind": "method",
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
                          "type": "TSStringKeyword",
                          "start": 227,
                          "end": 233
                        },
                        "start": 225,
                        "end": 233
                      },
                      "start": 222,
                      "end": 233
                    },
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "data",
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
                            "start": 241,
                            "end": 242
                          },
                          "typeArguments": null,
                          "start": 241,
                          "end": 242
                        },
                        "start": 239,
                        "end": 242
                      },
                      "start": 235,
                      "end": 242
                    }
                  ],
                  "returnType": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSBooleanKeyword",
                      "start": 245,
                      "end": 252
                    },
                    "start": 243,
                    "end": 252
                  },
                  "accessibility": null,
                  "readonly": false,
                  "static": false,
                  "start": 218,
                  "end": 253
                },
                {
                  "type": "TSMethodSignature",
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "addOrUpdate",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 262,
                    "end": 273
                  },
                  "computed": false,
                  "optional": false,
                  "kind": "method",
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
                          "type": "TSStringKeyword",
                          "start": 279,
                          "end": 285
                        },
                        "start": 277,
                        "end": 285
                      },
                      "start": 274,
                      "end": 285
                    },
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "data",
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
                      "start": 287,
                      "end": 294
                    }
                  ],
                  "returnType": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSBooleanKeyword",
                      "start": 297,
                      "end": 304
                    },
                    "start": 295,
                    "end": 304
                  },
                  "accessibility": null,
                  "readonly": false,
                  "static": false,
                  "start": 262,
                  "end": 305
                },
                {
                  "type": "TSMethodSignature",
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "map",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 314,
                    "end": 317
                  },
                  "computed": false,
                  "optional": false,
                  "kind": "method",
                  "typeParameters": null,
                  "params": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "fn",
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
                              "name": "k",
                              "optional": false,
                              "typeAnnotation": {
                                "type": "TSTypeAnnotation",
                                "typeAnnotation": {
                                  "type": "TSStringKeyword",
                                  "start": 326,
                                  "end": 332
                                },
                                "start": 324,
                                "end": 332
                              },
                              "start": 323,
                              "end": 332
                            },
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
                                    "start": 341,
                                    "end": 342
                                  },
                                  "typeArguments": null,
                                  "start": 341,
                                  "end": 342
                                },
                                "start": 339,
                                "end": 342
                              },
                              "start": 334,
                              "end": 342
                            },
                            {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "context",
                              "optional": false,
                              "typeAnnotation": {
                                "type": "TSTypeAnnotation",
                                "typeAnnotation": {
                                  "type": "TSAnyKeyword",
                                  "start": 353,
                                  "end": 356
                                },
                                "start": 351,
                                "end": 356
                              },
                              "start": 344,
                              "end": 356
                            }
                          ],
                          "returnType": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSVoidKeyword",
                              "start": 361,
                              "end": 365
                            },
                            "start": 358,
                            "end": 365
                          },
                          "start": 322,
                          "end": 365
                        },
                        "start": 320,
                        "end": 365
                      },
                      "start": 318,
                      "end": 365
                    },
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "context",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSAnyKeyword",
                          "start": 376,
                          "end": 379
                        },
                        "start": 374,
                        "end": 379
                      },
                      "start": 367,
                      "end": 379
                    }
                  ],
                  "returnType": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSVoidKeyword",
                      "start": 382,
                      "end": 386
                    },
                    "start": 380,
                    "end": 386
                  },
                  "accessibility": null,
                  "readonly": false,
                  "static": false,
                  "start": 314,
                  "end": 387
                },
                {
                  "type": "TSMethodSignature",
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "every",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 396,
                    "end": 401
                  },
                  "computed": false,
                  "optional": false,
                  "kind": "method",
                  "typeParameters": null,
                  "params": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "fn",
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
                              "name": "k",
                              "optional": false,
                              "typeAnnotation": {
                                "type": "TSTypeAnnotation",
                                "typeAnnotation": {
                                  "type": "TSStringKeyword",
                                  "start": 410,
                                  "end": 416
                                },
                                "start": 408,
                                "end": 416
                              },
                              "start": 407,
                              "end": 416
                            },
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
                                    "start": 425,
                                    "end": 426
                                  },
                                  "typeArguments": null,
                                  "start": 425,
                                  "end": 426
                                },
                                "start": 423,
                                "end": 426
                              },
                              "start": 418,
                              "end": 426
                            },
                            {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "context",
                              "optional": false,
                              "typeAnnotation": {
                                "type": "TSTypeAnnotation",
                                "typeAnnotation": {
                                  "type": "TSAnyKeyword",
                                  "start": 437,
                                  "end": 440
                                },
                                "start": 435,
                                "end": 440
                              },
                              "start": 428,
                              "end": 440
                            }
                          ],
                          "returnType": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSVoidKeyword",
                              "start": 445,
                              "end": 449
                            },
                            "start": 442,
                            "end": 449
                          },
                          "start": 406,
                          "end": 449
                        },
                        "start": 404,
                        "end": 449
                      },
                      "start": 402,
                      "end": 449
                    },
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "context",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSAnyKeyword",
                          "start": 460,
                          "end": 463
                        },
                        "start": 458,
                        "end": 463
                      },
                      "start": 451,
                      "end": 463
                    }
                  ],
                  "returnType": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSBooleanKeyword",
                      "start": 466,
                      "end": 473
                    },
                    "start": 464,
                    "end": 473
                  },
                  "accessibility": null,
                  "readonly": false,
                  "static": false,
                  "start": 396,
                  "end": 474
                },
                {
                  "type": "TSMethodSignature",
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "some",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 483,
                    "end": 487
                  },
                  "computed": false,
                  "optional": false,
                  "kind": "method",
                  "typeParameters": null,
                  "params": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "fn",
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
                              "name": "k",
                              "optional": false,
                              "typeAnnotation": {
                                "type": "TSTypeAnnotation",
                                "typeAnnotation": {
                                  "type": "TSStringKeyword",
                                  "start": 496,
                                  "end": 502
                                },
                                "start": 494,
                                "end": 502
                              },
                              "start": 493,
                              "end": 502
                            },
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
                                    "start": 511,
                                    "end": 512
                                  },
                                  "typeArguments": null,
                                  "start": 511,
                                  "end": 512
                                },
                                "start": 509,
                                "end": 512
                              },
                              "start": 504,
                              "end": 512
                            },
                            {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "context",
                              "optional": false,
                              "typeAnnotation": {
                                "type": "TSTypeAnnotation",
                                "typeAnnotation": {
                                  "type": "TSAnyKeyword",
                                  "start": 523,
                                  "end": 526
                                },
                                "start": 521,
                                "end": 526
                              },
                              "start": 514,
                              "end": 526
                            }
                          ],
                          "returnType": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSVoidKeyword",
                              "start": 531,
                              "end": 535
                            },
                            "start": 528,
                            "end": 535
                          },
                          "start": 492,
                          "end": 535
                        },
                        "start": 490,
                        "end": 535
                      },
                      "start": 488,
                      "end": 535
                    },
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "context",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSAnyKeyword",
                          "start": 546,
                          "end": 549
                        },
                        "start": 544,
                        "end": 549
                      },
                      "start": 537,
                      "end": 549
                    }
                  ],
                  "returnType": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSBooleanKeyword",
                      "start": 552,
                      "end": 559
                    },
                    "start": 550,
                    "end": 559
                  },
                  "accessibility": null,
                  "readonly": false,
                  "static": false,
                  "start": 483,
                  "end": 560
                },
                {
                  "type": "TSMethodSignature",
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "count",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 569,
                    "end": 574
                  },
                  "computed": false,
                  "optional": false,
                  "kind": "method",
                  "typeParameters": null,
                  "params": [],
                  "returnType": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 578,
                      "end": 584
                    },
                    "start": 576,
                    "end": 584
                  },
                  "accessibility": null,
                  "readonly": false,
                  "static": false,
                  "start": 569,
                  "end": 585
                },
                {
                  "type": "TSMethodSignature",
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "lookup",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 594,
                    "end": 600
                  },
                  "computed": false,
                  "optional": false,
                  "kind": "method",
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
                          "type": "TSStringKeyword",
                          "start": 606,
                          "end": 612
                        },
                        "start": 604,
                        "end": 612
                      },
                      "start": 601,
                      "end": 612
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
                        "start": 615,
                        "end": 616
                      },
                      "typeArguments": null,
                      "start": 615,
                      "end": 616
                    },
                    "start": 613,
                    "end": 616
                  },
                  "accessibility": null,
                  "readonly": false,
                  "static": false,
                  "start": 594,
                  "end": 617
                }
              ],
              "start": 176,
              "end": 623
            },
            "declare": false,
            "start": 152,
            "end": 623
          },
          {
            "type": "ClassDeclaration",
            "decorators": [],
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "StringHashTable",
              "optional": false,
              "typeAnnotation": null,
              "start": 634,
              "end": 649
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
                    "start": 650,
                    "end": 651
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 650,
                  "end": 651
                }
              ],
              "start": 649,
              "end": 652
            },
            "superClass": null,
            "superTypeArguments": null,
            "implements": [
              {
                "type": "TSClassImplements",
                "expression": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "IHashTable",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 664,
                  "end": 674
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
                        "start": 675,
                        "end": 676
                      },
                      "typeArguments": null,
                      "start": 675,
                      "end": 676
                    }
                  ],
                  "start": 674,
                  "end": 677
                },
                "start": 664,
                "end": 677
              }
            ],
            "body": {
              "type": "ClassBody",
              "body": [
                {
                  "type": "PropertyDefinition",
                  "decorators": [],
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "itemCount",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 696,
                    "end": 705
                  },
                  "typeAnnotation": null,
                  "value": null,
                  "computed": false,
                  "static": false,
                  "declare": false,
                  "override": false,
                  "optional": false,
                  "definite": false,
                  "readonly": false,
                  "accessibility": "private",
                  "start": 688,
                  "end": 706
                },
                {
                  "type": "PropertyDefinition",
                  "decorators": [],
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "table",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 723,
                    "end": 728
                  },
                  "typeAnnotation": null,
                  "value": null,
                  "computed": false,
                  "static": false,
                  "declare": false,
                  "override": false,
                  "optional": false,
                  "definite": false,
                  "readonly": false,
                  "accessibility": "private",
                  "start": 715,
                  "end": 729
                },
                {
                  "type": "MethodDefinition",
                  "decorators": [],
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "getAllKeys",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 745,
                    "end": 755
                  },
                  "value": {
                    "type": "TSEmptyBodyFunctionExpression",
                    "id": null,
                    "generator": false,
                    "async": false,
                    "declare": false,
                    "typeParameters": null,
                    "params": [],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSArrayType",
                        "elementType": {
                          "type": "TSStringKeyword",
                          "start": 759,
                          "end": 765
                        },
                        "start": 759,
                        "end": 767
                      },
                      "start": 757,
                      "end": 767
                    },
                    "body": null,
                    "expression": false,
                    "start": 755,
                    "end": 768
                  },
                  "kind": "method",
                  "computed": false,
                  "static": false,
                  "override": false,
                  "optional": false,
                  "accessibility": "public",
                  "start": 738,
                  "end": 768
                },
                {
                  "type": "MethodDefinition",
                  "decorators": [],
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "add",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 784,
                    "end": 787
                  },
                  "value": {
                    "type": "TSEmptyBodyFunctionExpression",
                    "id": null,
                    "generator": false,
                    "async": false,
                    "declare": false,
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
                            "type": "TSStringKeyword",
                            "start": 793,
                            "end": 799
                          },
                          "start": 791,
                          "end": 799
                        },
                        "start": 788,
                        "end": 799
                      },
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "data",
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
                              "start": 807,
                              "end": 808
                            },
                            "typeArguments": null,
                            "start": 807,
                            "end": 808
                          },
                          "start": 805,
                          "end": 808
                        },
                        "start": 801,
                        "end": 808
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSBooleanKeyword",
                        "start": 811,
                        "end": 818
                      },
                      "start": 809,
                      "end": 818
                    },
                    "body": null,
                    "expression": false,
                    "start": 787,
                    "end": 819
                  },
                  "kind": "method",
                  "computed": false,
                  "static": false,
                  "override": false,
                  "optional": false,
                  "accessibility": "public",
                  "start": 777,
                  "end": 819
                },
                {
                  "type": "MethodDefinition",
                  "decorators": [],
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "addOrUpdate",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 835,
                    "end": 846
                  },
                  "value": {
                    "type": "TSEmptyBodyFunctionExpression",
                    "id": null,
                    "generator": false,
                    "async": false,
                    "declare": false,
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
                            "type": "TSStringKeyword",
                            "start": 852,
                            "end": 858
                          },
                          "start": 850,
                          "end": 858
                        },
                        "start": 847,
                        "end": 858
                      },
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "data",
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
                              "start": 866,
                              "end": 867
                            },
                            "typeArguments": null,
                            "start": 866,
                            "end": 867
                          },
                          "start": 864,
                          "end": 867
                        },
                        "start": 860,
                        "end": 867
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSBooleanKeyword",
                        "start": 870,
                        "end": 877
                      },
                      "start": 868,
                      "end": 877
                    },
                    "body": null,
                    "expression": false,
                    "start": 846,
                    "end": 878
                  },
                  "kind": "method",
                  "computed": false,
                  "static": false,
                  "override": false,
                  "optional": false,
                  "accessibility": "public",
                  "start": 828,
                  "end": 878
                },
                {
                  "type": "MethodDefinition",
                  "decorators": [],
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "map",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 894,
                    "end": 897
                  },
                  "value": {
                    "type": "TSEmptyBodyFunctionExpression",
                    "id": null,
                    "generator": false,
                    "async": false,
                    "declare": false,
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "fn",
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
                                "name": "k",
                                "optional": false,
                                "typeAnnotation": {
                                  "type": "TSTypeAnnotation",
                                  "typeAnnotation": {
                                    "type": "TSStringKeyword",
                                    "start": 906,
                                    "end": 912
                                  },
                                  "start": 904,
                                  "end": 912
                                },
                                "start": 903,
                                "end": 912
                              },
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
                                "start": 914,
                                "end": 922
                              },
                              {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "context",
                                "optional": false,
                                "typeAnnotation": {
                                  "type": "TSTypeAnnotation",
                                  "typeAnnotation": {
                                    "type": "TSAnyKeyword",
                                    "start": 933,
                                    "end": 936
                                  },
                                  "start": 931,
                                  "end": 936
                                },
                                "start": 924,
                                "end": 936
                              }
                            ],
                            "returnType": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSVoidKeyword",
                                "start": 941,
                                "end": 945
                              },
                              "start": 938,
                              "end": 945
                            },
                            "start": 902,
                            "end": 945
                          },
                          "start": 900,
                          "end": 945
                        },
                        "start": 898,
                        "end": 945
                      },
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "context",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSAnyKeyword",
                            "start": 956,
                            "end": 959
                          },
                          "start": 954,
                          "end": 959
                        },
                        "start": 947,
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
                    "body": null,
                    "expression": false,
                    "start": 897,
                    "end": 967
                  },
                  "kind": "method",
                  "computed": false,
                  "static": false,
                  "override": false,
                  "optional": false,
                  "accessibility": "public",
                  "start": 887,
                  "end": 967
                },
                {
                  "type": "MethodDefinition",
                  "decorators": [],
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "every",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 983,
                    "end": 988
                  },
                  "value": {
                    "type": "TSEmptyBodyFunctionExpression",
                    "id": null,
                    "generator": false,
                    "async": false,
                    "declare": false,
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "fn",
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
                                "name": "k",
                                "optional": false,
                                "typeAnnotation": {
                                  "type": "TSTypeAnnotation",
                                  "typeAnnotation": {
                                    "type": "TSStringKeyword",
                                    "start": 997,
                                    "end": 1003
                                  },
                                  "start": 995,
                                  "end": 1003
                                },
                                "start": 994,
                                "end": 1003
                              },
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
                                      "start": 1012,
                                      "end": 1013
                                    },
                                    "typeArguments": null,
                                    "start": 1012,
                                    "end": 1013
                                  },
                                  "start": 1010,
                                  "end": 1013
                                },
                                "start": 1005,
                                "end": 1013
                              },
                              {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "context",
                                "optional": false,
                                "typeAnnotation": {
                                  "type": "TSTypeAnnotation",
                                  "typeAnnotation": {
                                    "type": "TSAnyKeyword",
                                    "start": 1024,
                                    "end": 1027
                                  },
                                  "start": 1022,
                                  "end": 1027
                                },
                                "start": 1015,
                                "end": 1027
                              }
                            ],
                            "returnType": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSVoidKeyword",
                                "start": 1032,
                                "end": 1036
                              },
                              "start": 1029,
                              "end": 1036
                            },
                            "start": 993,
                            "end": 1036
                          },
                          "start": 991,
                          "end": 1036
                        },
                        "start": 989,
                        "end": 1036
                      },
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "context",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSAnyKeyword",
                            "start": 1047,
                            "end": 1050
                          },
                          "start": 1045,
                          "end": 1050
                        },
                        "start": 1038,
                        "end": 1050
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSBooleanKeyword",
                        "start": 1053,
                        "end": 1060
                      },
                      "start": 1051,
                      "end": 1060
                    },
                    "body": null,
                    "expression": false,
                    "start": 988,
                    "end": 1061
                  },
                  "kind": "method",
                  "computed": false,
                  "static": false,
                  "override": false,
                  "optional": false,
                  "accessibility": "public",
                  "start": 976,
                  "end": 1061
                },
                {
                  "type": "MethodDefinition",
                  "decorators": [],
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "some",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1077,
                    "end": 1081
                  },
                  "value": {
                    "type": "TSEmptyBodyFunctionExpression",
                    "id": null,
                    "generator": false,
                    "async": false,
                    "declare": false,
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "fn",
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
                                "name": "k",
                                "optional": false,
                                "typeAnnotation": {
                                  "type": "TSTypeAnnotation",
                                  "typeAnnotation": {
                                    "type": "TSStringKeyword",
                                    "start": 1090,
                                    "end": 1096
                                  },
                                  "start": 1088,
                                  "end": 1096
                                },
                                "start": 1087,
                                "end": 1096
                              },
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
                                      "start": 1105,
                                      "end": 1106
                                    },
                                    "typeArguments": null,
                                    "start": 1105,
                                    "end": 1106
                                  },
                                  "start": 1103,
                                  "end": 1106
                                },
                                "start": 1098,
                                "end": 1106
                              },
                              {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "context",
                                "optional": false,
                                "typeAnnotation": {
                                  "type": "TSTypeAnnotation",
                                  "typeAnnotation": {
                                    "type": "TSAnyKeyword",
                                    "start": 1117,
                                    "end": 1120
                                  },
                                  "start": 1115,
                                  "end": 1120
                                },
                                "start": 1108,
                                "end": 1120
                              }
                            ],
                            "returnType": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSVoidKeyword",
                                "start": 1125,
                                "end": 1129
                              },
                              "start": 1122,
                              "end": 1129
                            },
                            "start": 1086,
                            "end": 1129
                          },
                          "start": 1084,
                          "end": 1129
                        },
                        "start": 1082,
                        "end": 1129
                      },
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "context",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSAnyKeyword",
                            "start": 1140,
                            "end": 1143
                          },
                          "start": 1138,
                          "end": 1143
                        },
                        "start": 1131,
                        "end": 1143
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSBooleanKeyword",
                        "start": 1146,
                        "end": 1153
                      },
                      "start": 1144,
                      "end": 1153
                    },
                    "body": null,
                    "expression": false,
                    "start": 1081,
                    "end": 1154
                  },
                  "kind": "method",
                  "computed": false,
                  "static": false,
                  "override": false,
                  "optional": false,
                  "accessibility": "public",
                  "start": 1070,
                  "end": 1154
                },
                {
                  "type": "MethodDefinition",
                  "decorators": [],
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "count",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1170,
                    "end": 1175
                  },
                  "value": {
                    "type": "TSEmptyBodyFunctionExpression",
                    "id": null,
                    "generator": false,
                    "async": false,
                    "declare": false,
                    "typeParameters": null,
                    "params": [],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 1179,
                        "end": 1185
                      },
                      "start": 1177,
                      "end": 1185
                    },
                    "body": null,
                    "expression": false,
                    "start": 1175,
                    "end": 1186
                  },
                  "kind": "method",
                  "computed": false,
                  "static": false,
                  "override": false,
                  "optional": false,
                  "accessibility": "public",
                  "start": 1163,
                  "end": 1186
                },
                {
                  "type": "MethodDefinition",
                  "decorators": [],
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "lookup",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1202,
                    "end": 1208
                  },
                  "value": {
                    "type": "TSEmptyBodyFunctionExpression",
                    "id": null,
                    "generator": false,
                    "async": false,
                    "declare": false,
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
                            "type": "TSStringKeyword",
                            "start": 1214,
                            "end": 1220
                          },
                          "start": 1212,
                          "end": 1220
                        },
                        "start": 1209,
                        "end": 1220
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
                          "start": 1223,
                          "end": 1224
                        },
                        "typeArguments": null,
                        "start": 1223,
                        "end": 1224
                      },
                      "start": 1221,
                      "end": 1224
                    },
                    "body": null,
                    "expression": false,
                    "start": 1208,
                    "end": 1225
                  },
                  "kind": "method",
                  "computed": false,
                  "static": false,
                  "override": false,
                  "optional": false,
                  "accessibility": "public",
                  "start": 1195,
                  "end": 1225
                },
                {
                  "type": "MethodDefinition",
                  "decorators": [],
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "remove",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1241,
                    "end": 1247
                  },
                  "value": {
                    "type": "TSEmptyBodyFunctionExpression",
                    "id": null,
                    "generator": false,
                    "async": false,
                    "declare": false,
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
                            "type": "TSStringKeyword",
                            "start": 1253,
                            "end": 1259
                          },
                          "start": 1251,
                          "end": 1259
                        },
                        "start": 1248,
                        "end": 1259
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSVoidKeyword",
                        "start": 1262,
                        "end": 1266
                      },
                      "start": 1260,
                      "end": 1266
                    },
                    "body": null,
                    "expression": false,
                    "start": 1247,
                    "end": 1267
                  },
                  "kind": "method",
                  "computed": false,
                  "static": false,
                  "override": false,
                  "optional": false,
                  "accessibility": "public",
                  "start": 1234,
                  "end": 1267
                }
              ],
              "start": 678,
              "end": 1273
            },
            "abstract": false,
            "declare": false,
            "start": 628,
            "end": 1273
          },
          {
            "type": "ClassDeclaration",
            "decorators": [],
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "IdentifierNameHashTable",
              "optional": false,
              "typeAnnotation": null,
              "start": 1284,
              "end": 1307
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
                    "start": 1308,
                    "end": 1309
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 1308,
                  "end": 1309
                }
              ],
              "start": 1307,
              "end": 1310
            },
            "superClass": {
              "type": "Identifier",
              "decorators": [],
              "name": "StringHashTable",
              "optional": false,
              "typeAnnotation": null,
              "start": 1319,
              "end": 1334
            },
            "superTypeArguments": {
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
                    "start": 1335,
                    "end": 1336
                  },
                  "typeArguments": null,
                  "start": 1335,
                  "end": 1336
                }
              ],
              "start": 1334,
              "end": 1337
            },
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
                    "name": "getAllKeys",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1355,
                    "end": 1365
                  },
                  "value": {
                    "type": "TSEmptyBodyFunctionExpression",
                    "id": null,
                    "generator": false,
                    "async": false,
                    "declare": false,
                    "typeParameters": null,
                    "params": [],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSArrayType",
                        "elementType": {
                          "type": "TSStringKeyword",
                          "start": 1369,
                          "end": 1375
                        },
                        "start": 1369,
                        "end": 1377
                      },
                      "start": 1367,
                      "end": 1377
                    },
                    "body": null,
                    "expression": false,
                    "start": 1365,
                    "end": 1378
                  },
                  "kind": "method",
                  "computed": false,
                  "static": false,
                  "override": false,
                  "optional": false,
                  "accessibility": "public",
                  "start": 1348,
                  "end": 1378
                },
                {
                  "type": "MethodDefinition",
                  "decorators": [],
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "add",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1394,
                    "end": 1397
                  },
                  "value": {
                    "type": "TSEmptyBodyFunctionExpression",
                    "id": null,
                    "generator": false,
                    "async": false,
                    "declare": false,
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
                            "type": "TSStringKeyword",
                            "start": 1403,
                            "end": 1409
                          },
                          "start": 1401,
                          "end": 1409
                        },
                        "start": 1398,
                        "end": 1409
                      },
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "data",
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
                              "start": 1417,
                              "end": 1418
                            },
                            "typeArguments": null,
                            "start": 1417,
                            "end": 1418
                          },
                          "start": 1415,
                          "end": 1418
                        },
                        "start": 1411,
                        "end": 1418
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSBooleanKeyword",
                        "start": 1421,
                        "end": 1428
                      },
                      "start": 1419,
                      "end": 1428
                    },
                    "body": null,
                    "expression": false,
                    "start": 1397,
                    "end": 1429
                  },
                  "kind": "method",
                  "computed": false,
                  "static": false,
                  "override": false,
                  "optional": false,
                  "accessibility": "public",
                  "start": 1387,
                  "end": 1429
                },
                {
                  "type": "MethodDefinition",
                  "decorators": [],
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "addOrUpdate",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1445,
                    "end": 1456
                  },
                  "value": {
                    "type": "TSEmptyBodyFunctionExpression",
                    "id": null,
                    "generator": false,
                    "async": false,
                    "declare": false,
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
                            "type": "TSStringKeyword",
                            "start": 1462,
                            "end": 1468
                          },
                          "start": 1460,
                          "end": 1468
                        },
                        "start": 1457,
                        "end": 1468
                      },
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "data",
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
                              "start": 1476,
                              "end": 1477
                            },
                            "typeArguments": null,
                            "start": 1476,
                            "end": 1477
                          },
                          "start": 1474,
                          "end": 1477
                        },
                        "start": 1470,
                        "end": 1477
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSBooleanKeyword",
                        "start": 1480,
                        "end": 1487
                      },
                      "start": 1478,
                      "end": 1487
                    },
                    "body": null,
                    "expression": false,
                    "start": 1456,
                    "end": 1488
                  },
                  "kind": "method",
                  "computed": false,
                  "static": false,
                  "override": false,
                  "optional": false,
                  "accessibility": "public",
                  "start": 1438,
                  "end": 1488
                },
                {
                  "type": "MethodDefinition",
                  "decorators": [],
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "map",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1504,
                    "end": 1507
                  },
                  "value": {
                    "type": "TSEmptyBodyFunctionExpression",
                    "id": null,
                    "generator": false,
                    "async": false,
                    "declare": false,
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "fn",
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
                                "name": "k",
                                "optional": false,
                                "typeAnnotation": {
                                  "type": "TSTypeAnnotation",
                                  "typeAnnotation": {
                                    "type": "TSStringKeyword",
                                    "start": 1516,
                                    "end": 1522
                                  },
                                  "start": 1514,
                                  "end": 1522
                                },
                                "start": 1513,
                                "end": 1522
                              },
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
                                      "start": 1531,
                                      "end": 1532
                                    },
                                    "typeArguments": null,
                                    "start": 1531,
                                    "end": 1532
                                  },
                                  "start": 1529,
                                  "end": 1532
                                },
                                "start": 1524,
                                "end": 1532
                              },
                              {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "context",
                                "optional": false,
                                "typeAnnotation": {
                                  "type": "TSTypeAnnotation",
                                  "typeAnnotation": {
                                    "type": "TSAnyKeyword",
                                    "start": 1543,
                                    "end": 1546
                                  },
                                  "start": 1541,
                                  "end": 1546
                                },
                                "start": 1534,
                                "end": 1546
                              }
                            ],
                            "returnType": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSVoidKeyword",
                                "start": 1551,
                                "end": 1555
                              },
                              "start": 1548,
                              "end": 1555
                            },
                            "start": 1512,
                            "end": 1555
                          },
                          "start": 1510,
                          "end": 1555
                        },
                        "start": 1508,
                        "end": 1555
                      },
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "context",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSAnyKeyword",
                            "start": 1566,
                            "end": 1569
                          },
                          "start": 1564,
                          "end": 1569
                        },
                        "start": 1557,
                        "end": 1569
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSVoidKeyword",
                        "start": 1572,
                        "end": 1576
                      },
                      "start": 1570,
                      "end": 1576
                    },
                    "body": null,
                    "expression": false,
                    "start": 1507,
                    "end": 1577
                  },
                  "kind": "method",
                  "computed": false,
                  "static": false,
                  "override": false,
                  "optional": false,
                  "accessibility": "public",
                  "start": 1497,
                  "end": 1577
                },
                {
                  "type": "MethodDefinition",
                  "decorators": [],
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "every",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1593,
                    "end": 1598
                  },
                  "value": {
                    "type": "TSEmptyBodyFunctionExpression",
                    "id": null,
                    "generator": false,
                    "async": false,
                    "declare": false,
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "fn",
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
                                "name": "k",
                                "optional": false,
                                "typeAnnotation": {
                                  "type": "TSTypeAnnotation",
                                  "typeAnnotation": {
                                    "type": "TSStringKeyword",
                                    "start": 1607,
                                    "end": 1613
                                  },
                                  "start": 1605,
                                  "end": 1613
                                },
                                "start": 1604,
                                "end": 1613
                              },
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
                                      "start": 1622,
                                      "end": 1623
                                    },
                                    "typeArguments": null,
                                    "start": 1622,
                                    "end": 1623
                                  },
                                  "start": 1620,
                                  "end": 1623
                                },
                                "start": 1615,
                                "end": 1623
                              },
                              {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "context",
                                "optional": false,
                                "typeAnnotation": {
                                  "type": "TSTypeAnnotation",
                                  "typeAnnotation": {
                                    "type": "TSAnyKeyword",
                                    "start": 1634,
                                    "end": 1637
                                  },
                                  "start": 1632,
                                  "end": 1637
                                },
                                "start": 1625,
                                "end": 1637
                              }
                            ],
                            "returnType": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSVoidKeyword",
                                "start": 1642,
                                "end": 1646
                              },
                              "start": 1639,
                              "end": 1646
                            },
                            "start": 1603,
                            "end": 1646
                          },
                          "start": 1601,
                          "end": 1646
                        },
                        "start": 1599,
                        "end": 1646
                      },
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "context",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSAnyKeyword",
                            "start": 1657,
                            "end": 1660
                          },
                          "start": 1655,
                          "end": 1660
                        },
                        "start": 1648,
                        "end": 1660
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSBooleanKeyword",
                        "start": 1663,
                        "end": 1670
                      },
                      "start": 1661,
                      "end": 1670
                    },
                    "body": null,
                    "expression": false,
                    "start": 1598,
                    "end": 1671
                  },
                  "kind": "method",
                  "computed": false,
                  "static": false,
                  "override": false,
                  "optional": false,
                  "accessibility": "public",
                  "start": 1586,
                  "end": 1671
                },
                {
                  "type": "MethodDefinition",
                  "decorators": [],
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "some",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1687,
                    "end": 1691
                  },
                  "value": {
                    "type": "TSEmptyBodyFunctionExpression",
                    "id": null,
                    "generator": false,
                    "async": false,
                    "declare": false,
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "fn",
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
                                "name": "k",
                                "optional": false,
                                "typeAnnotation": {
                                  "type": "TSTypeAnnotation",
                                  "typeAnnotation": {
                                    "type": "TSStringKeyword",
                                    "start": 1700,
                                    "end": 1706
                                  },
                                  "start": 1698,
                                  "end": 1706
                                },
                                "start": 1697,
                                "end": 1706
                              },
                              {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "value",
                                "optional": false,
                                "typeAnnotation": {
                                  "type": "TSTypeAnnotation",
                                  "typeAnnotation": {
                                    "type": "TSAnyKeyword",
                                    "start": 1715,
                                    "end": 1718
                                  },
                                  "start": 1713,
                                  "end": 1718
                                },
                                "start": 1708,
                                "end": 1718
                              },
                              {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "context",
                                "optional": false,
                                "typeAnnotation": {
                                  "type": "TSTypeAnnotation",
                                  "typeAnnotation": {
                                    "type": "TSAnyKeyword",
                                    "start": 1729,
                                    "end": 1732
                                  },
                                  "start": 1727,
                                  "end": 1732
                                },
                                "start": 1720,
                                "end": 1732
                              }
                            ],
                            "returnType": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSVoidKeyword",
                                "start": 1737,
                                "end": 1741
                              },
                              "start": 1734,
                              "end": 1741
                            },
                            "start": 1696,
                            "end": 1741
                          },
                          "start": 1694,
                          "end": 1741
                        },
                        "start": 1692,
                        "end": 1741
                      },
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "context",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSAnyKeyword",
                            "start": 1752,
                            "end": 1755
                          },
                          "start": 1750,
                          "end": 1755
                        },
                        "start": 1743,
                        "end": 1755
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSBooleanKeyword",
                        "start": 1758,
                        "end": 1765
                      },
                      "start": 1756,
                      "end": 1765
                    },
                    "body": null,
                    "expression": false,
                    "start": 1691,
                    "end": 1766
                  },
                  "kind": "method",
                  "computed": false,
                  "static": false,
                  "override": false,
                  "optional": false,
                  "accessibility": "public",
                  "start": 1680,
                  "end": 1766
                },
                {
                  "type": "MethodDefinition",
                  "decorators": [],
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "lookup",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1782,
                    "end": 1788
                  },
                  "value": {
                    "type": "TSEmptyBodyFunctionExpression",
                    "id": null,
                    "generator": false,
                    "async": false,
                    "declare": false,
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
                            "type": "TSStringKeyword",
                            "start": 1794,
                            "end": 1800
                          },
                          "start": 1792,
                          "end": 1800
                        },
                        "start": 1789,
                        "end": 1800
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
                          "start": 1803,
                          "end": 1804
                        },
                        "typeArguments": null,
                        "start": 1803,
                        "end": 1804
                      },
                      "start": 1801,
                      "end": 1804
                    },
                    "body": null,
                    "expression": false,
                    "start": 1788,
                    "end": 1805
                  },
                  "kind": "method",
                  "computed": false,
                  "static": false,
                  "override": false,
                  "optional": false,
                  "accessibility": "public",
                  "start": 1775,
                  "end": 1805
                }
              ],
              "start": 1338,
              "end": 1811
            },
            "abstract": false,
            "declare": false,
            "start": 1278,
            "end": 1811
          }
        ],
        "start": 29,
        "end": 1813
      },
      "kind": "namespace",
      "declare": true,
      "global": false,
      "start": 0,
      "end": 1813
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "TypeScript",
        "optional": false,
        "typeAnnotation": null,
        "start": 1833,
        "end": 1843
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "TSInterfaceDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "IIndexable",
              "optional": false,
              "typeAnnotation": null,
              "start": 1860,
              "end": 1870
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
                    "start": 1871,
                    "end": 1872
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 1871,
                  "end": 1872
                }
              ],
              "start": 1870,
              "end": 1873
            },
            "extends": [],
            "body": {
              "type": "TSInterfaceBody",
              "body": [
                {
                  "type": "TSIndexSignature",
                  "parameters": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "s",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSStringKeyword",
                          "start": 1888,
                          "end": 1894
                        },
                        "start": 1886,
                        "end": 1894
                      },
                      "start": 1885,
                      "end": 1894
                    }
                  ],
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
                        "start": 1897,
                        "end": 1898
                      },
                      "typeArguments": null,
                      "start": 1897,
                      "end": 1898
                    },
                    "start": 1895,
                    "end": 1898
                  },
                  "readonly": false,
                  "static": false,
                  "accessibility": null,
                  "start": 1884,
                  "end": 1899
                }
              ],
              "start": 1874,
              "end": 1905
            },
            "declare": false,
            "start": 1850,
            "end": 1905
          },
          {
            "type": "TSDeclareFunction",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "createIntrinsicsObject",
              "optional": false,
              "typeAnnotation": null,
              "start": 1919,
              "end": 1941
            },
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
                    "name": "T",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1942,
                    "end": 1943
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 1942,
                  "end": 1943
                }
              ],
              "start": 1941,
              "end": 1944
            },
            "params": [],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "IIndexable",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1948,
                  "end": 1958
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
                        "start": 1959,
                        "end": 1960
                      },
                      "typeArguments": null,
                      "start": 1959,
                      "end": 1960
                    }
                  ],
                  "start": 1958,
                  "end": 1961
                },
                "start": 1948,
                "end": 1961
              },
              "start": 1946,
              "end": 1961
            },
            "body": null,
            "expression": false,
            "start": 1910,
            "end": 1962
          },
          {
            "type": "TSInterfaceDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "IHashTable",
              "optional": false,
              "typeAnnotation": null,
              "start": 1977,
              "end": 1987
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
                    "start": 1988,
                    "end": 1989
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 1988,
                  "end": 1989
                }
              ],
              "start": 1987,
              "end": 1990
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
                    "name": "getAllKeys",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2001,
                    "end": 2011
                  },
                  "computed": false,
                  "optional": false,
                  "kind": "method",
                  "typeParameters": null,
                  "params": [],
                  "returnType": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSArrayType",
                      "elementType": {
                        "type": "TSStringKeyword",
                        "start": 2015,
                        "end": 2021
                      },
                      "start": 2015,
                      "end": 2023
                    },
                    "start": 2013,
                    "end": 2023
                  },
                  "accessibility": null,
                  "readonly": false,
                  "static": false,
                  "start": 2001,
                  "end": 2024
                },
                {
                  "type": "TSMethodSignature",
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "add",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2033,
                    "end": 2036
                  },
                  "computed": false,
                  "optional": false,
                  "kind": "method",
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
                          "type": "TSStringKeyword",
                          "start": 2042,
                          "end": 2048
                        },
                        "start": 2040,
                        "end": 2048
                      },
                      "start": 2037,
                      "end": 2048
                    },
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "data",
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
                            "start": 2056,
                            "end": 2057
                          },
                          "typeArguments": null,
                          "start": 2056,
                          "end": 2057
                        },
                        "start": 2054,
                        "end": 2057
                      },
                      "start": 2050,
                      "end": 2057
                    }
                  ],
                  "returnType": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSBooleanKeyword",
                      "start": 2060,
                      "end": 2067
                    },
                    "start": 2058,
                    "end": 2067
                  },
                  "accessibility": null,
                  "readonly": false,
                  "static": false,
                  "start": 2033,
                  "end": 2068
                },
                {
                  "type": "TSMethodSignature",
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "addOrUpdate",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2077,
                    "end": 2088
                  },
                  "computed": false,
                  "optional": false,
                  "kind": "method",
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
                          "type": "TSStringKeyword",
                          "start": 2094,
                          "end": 2100
                        },
                        "start": 2092,
                        "end": 2100
                      },
                      "start": 2089,
                      "end": 2100
                    },
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "data",
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
                            "start": 2108,
                            "end": 2109
                          },
                          "typeArguments": null,
                          "start": 2108,
                          "end": 2109
                        },
                        "start": 2106,
                        "end": 2109
                      },
                      "start": 2102,
                      "end": 2109
                    }
                  ],
                  "returnType": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSBooleanKeyword",
                      "start": 2112,
                      "end": 2119
                    },
                    "start": 2110,
                    "end": 2119
                  },
                  "accessibility": null,
                  "readonly": false,
                  "static": false,
                  "start": 2077,
                  "end": 2120
                },
                {
                  "type": "TSMethodSignature",
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "map",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2129,
                    "end": 2132
                  },
                  "computed": false,
                  "optional": false,
                  "kind": "method",
                  "typeParameters": null,
                  "params": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "fn",
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
                              "name": "k",
                              "optional": false,
                              "typeAnnotation": {
                                "type": "TSTypeAnnotation",
                                "typeAnnotation": {
                                  "type": "TSStringKeyword",
                                  "start": 2141,
                                  "end": 2147
                                },
                                "start": 2139,
                                "end": 2147
                              },
                              "start": 2138,
                              "end": 2147
                            },
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
                                    "start": 2156,
                                    "end": 2157
                                  },
                                  "typeArguments": null,
                                  "start": 2156,
                                  "end": 2157
                                },
                                "start": 2154,
                                "end": 2157
                              },
                              "start": 2149,
                              "end": 2157
                            },
                            {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "context",
                              "optional": false,
                              "typeAnnotation": {
                                "type": "TSTypeAnnotation",
                                "typeAnnotation": {
                                  "type": "TSAnyKeyword",
                                  "start": 2168,
                                  "end": 2171
                                },
                                "start": 2166,
                                "end": 2171
                              },
                              "start": 2159,
                              "end": 2171
                            }
                          ],
                          "returnType": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSVoidKeyword",
                              "start": 2176,
                              "end": 2180
                            },
                            "start": 2173,
                            "end": 2180
                          },
                          "start": 2137,
                          "end": 2180
                        },
                        "start": 2135,
                        "end": 2180
                      },
                      "start": 2133,
                      "end": 2180
                    },
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "context",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSAnyKeyword",
                          "start": 2191,
                          "end": 2194
                        },
                        "start": 2189,
                        "end": 2194
                      },
                      "start": 2182,
                      "end": 2194
                    }
                  ],
                  "returnType": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSVoidKeyword",
                      "start": 2197,
                      "end": 2201
                    },
                    "start": 2195,
                    "end": 2201
                  },
                  "accessibility": null,
                  "readonly": false,
                  "static": false,
                  "start": 2129,
                  "end": 2202
                },
                {
                  "type": "TSMethodSignature",
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "every",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2211,
                    "end": 2216
                  },
                  "computed": false,
                  "optional": false,
                  "kind": "method",
                  "typeParameters": null,
                  "params": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "fn",
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
                              "name": "k",
                              "optional": false,
                              "typeAnnotation": {
                                "type": "TSTypeAnnotation",
                                "typeAnnotation": {
                                  "type": "TSStringKeyword",
                                  "start": 2225,
                                  "end": 2231
                                },
                                "start": 2223,
                                "end": 2231
                              },
                              "start": 2222,
                              "end": 2231
                            },
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
                                    "start": 2240,
                                    "end": 2241
                                  },
                                  "typeArguments": null,
                                  "start": 2240,
                                  "end": 2241
                                },
                                "start": 2238,
                                "end": 2241
                              },
                              "start": 2233,
                              "end": 2241
                            },
                            {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "context",
                              "optional": false,
                              "typeAnnotation": {
                                "type": "TSTypeAnnotation",
                                "typeAnnotation": {
                                  "type": "TSAnyKeyword",
                                  "start": 2252,
                                  "end": 2255
                                },
                                "start": 2250,
                                "end": 2255
                              },
                              "start": 2243,
                              "end": 2255
                            }
                          ],
                          "returnType": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSVoidKeyword",
                              "start": 2260,
                              "end": 2264
                            },
                            "start": 2257,
                            "end": 2264
                          },
                          "start": 2221,
                          "end": 2264
                        },
                        "start": 2219,
                        "end": 2264
                      },
                      "start": 2217,
                      "end": 2264
                    },
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "context",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSAnyKeyword",
                          "start": 2275,
                          "end": 2278
                        },
                        "start": 2273,
                        "end": 2278
                      },
                      "start": 2266,
                      "end": 2278
                    }
                  ],
                  "returnType": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSBooleanKeyword",
                      "start": 2281,
                      "end": 2288
                    },
                    "start": 2279,
                    "end": 2288
                  },
                  "accessibility": null,
                  "readonly": false,
                  "static": false,
                  "start": 2211,
                  "end": 2289
                },
                {
                  "type": "TSMethodSignature",
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "some",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2298,
                    "end": 2302
                  },
                  "computed": false,
                  "optional": false,
                  "kind": "method",
                  "typeParameters": null,
                  "params": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "fn",
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
                              "name": "k",
                              "optional": false,
                              "typeAnnotation": {
                                "type": "TSTypeAnnotation",
                                "typeAnnotation": {
                                  "type": "TSStringKeyword",
                                  "start": 2311,
                                  "end": 2317
                                },
                                "start": 2309,
                                "end": 2317
                              },
                              "start": 2308,
                              "end": 2317
                            },
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
                                    "start": 2326,
                                    "end": 2327
                                  },
                                  "typeArguments": null,
                                  "start": 2326,
                                  "end": 2327
                                },
                                "start": 2324,
                                "end": 2327
                              },
                              "start": 2319,
                              "end": 2327
                            },
                            {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "context",
                              "optional": false,
                              "typeAnnotation": {
                                "type": "TSTypeAnnotation",
                                "typeAnnotation": {
                                  "type": "TSAnyKeyword",
                                  "start": 2338,
                                  "end": 2341
                                },
                                "start": 2336,
                                "end": 2341
                              },
                              "start": 2329,
                              "end": 2341
                            }
                          ],
                          "returnType": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSVoidKeyword",
                              "start": 2346,
                              "end": 2350
                            },
                            "start": 2343,
                            "end": 2350
                          },
                          "start": 2307,
                          "end": 2350
                        },
                        "start": 2305,
                        "end": 2350
                      },
                      "start": 2303,
                      "end": 2350
                    },
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "context",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSAnyKeyword",
                          "start": 2361,
                          "end": 2364
                        },
                        "start": 2359,
                        "end": 2364
                      },
                      "start": 2352,
                      "end": 2364
                    }
                  ],
                  "returnType": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSBooleanKeyword",
                      "start": 2367,
                      "end": 2374
                    },
                    "start": 2365,
                    "end": 2374
                  },
                  "accessibility": null,
                  "readonly": false,
                  "static": false,
                  "start": 2298,
                  "end": 2375
                },
                {
                  "type": "TSMethodSignature",
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "count",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2384,
                    "end": 2389
                  },
                  "computed": false,
                  "optional": false,
                  "kind": "method",
                  "typeParameters": null,
                  "params": [],
                  "returnType": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 2393,
                      "end": 2399
                    },
                    "start": 2391,
                    "end": 2399
                  },
                  "accessibility": null,
                  "readonly": false,
                  "static": false,
                  "start": 2384,
                  "end": 2400
                },
                {
                  "type": "TSMethodSignature",
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "lookup",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2409,
                    "end": 2415
                  },
                  "computed": false,
                  "optional": false,
                  "kind": "method",
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
                          "type": "TSStringKeyword",
                          "start": 2421,
                          "end": 2427
                        },
                        "start": 2419,
                        "end": 2427
                      },
                      "start": 2416,
                      "end": 2427
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
                        "start": 2430,
                        "end": 2431
                      },
                      "typeArguments": null,
                      "start": 2430,
                      "end": 2431
                    },
                    "start": 2428,
                    "end": 2431
                  },
                  "accessibility": null,
                  "readonly": false,
                  "static": false,
                  "start": 2409,
                  "end": 2432
                }
              ],
              "start": 1991,
              "end": 2438
            },
            "declare": false,
            "start": 1967,
            "end": 2438
          },
          {
            "type": "ClassDeclaration",
            "decorators": [],
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "StringHashTable",
              "optional": false,
              "typeAnnotation": null,
              "start": 2449,
              "end": 2464
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
                    "start": 2465,
                    "end": 2466
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 2465,
                  "end": 2466
                }
              ],
              "start": 2464,
              "end": 2467
            },
            "superClass": null,
            "superTypeArguments": null,
            "implements": [
              {
                "type": "TSClassImplements",
                "expression": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "IHashTable",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2479,
                  "end": 2489
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
                        "start": 2490,
                        "end": 2491
                      },
                      "typeArguments": null,
                      "start": 2490,
                      "end": 2491
                    }
                  ],
                  "start": 2489,
                  "end": 2492
                },
                "start": 2479,
                "end": 2492
              }
            ],
            "body": {
              "type": "ClassBody",
              "body": [
                {
                  "type": "PropertyDefinition",
                  "decorators": [],
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "itemCount",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2511,
                    "end": 2520
                  },
                  "typeAnnotation": null,
                  "value": null,
                  "computed": false,
                  "static": false,
                  "declare": false,
                  "override": false,
                  "optional": false,
                  "definite": false,
                  "readonly": false,
                  "accessibility": "private",
                  "start": 2503,
                  "end": 2521
                },
                {
                  "type": "PropertyDefinition",
                  "decorators": [],
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "table",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2538,
                    "end": 2543
                  },
                  "typeAnnotation": null,
                  "value": null,
                  "computed": false,
                  "static": false,
                  "declare": false,
                  "override": false,
                  "optional": false,
                  "definite": false,
                  "readonly": false,
                  "accessibility": "private",
                  "start": 2530,
                  "end": 2544
                },
                {
                  "type": "MethodDefinition",
                  "decorators": [],
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "getAllKeys",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2560,
                    "end": 2570
                  },
                  "value": {
                    "type": "TSEmptyBodyFunctionExpression",
                    "id": null,
                    "generator": false,
                    "async": false,
                    "declare": false,
                    "typeParameters": null,
                    "params": [],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSArrayType",
                        "elementType": {
                          "type": "TSStringKeyword",
                          "start": 2574,
                          "end": 2580
                        },
                        "start": 2574,
                        "end": 2582
                      },
                      "start": 2572,
                      "end": 2582
                    },
                    "body": null,
                    "expression": false,
                    "start": 2570,
                    "end": 2583
                  },
                  "kind": "method",
                  "computed": false,
                  "static": false,
                  "override": false,
                  "optional": false,
                  "accessibility": "public",
                  "start": 2553,
                  "end": 2583
                },
                {
                  "type": "MethodDefinition",
                  "decorators": [],
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "add",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2599,
                    "end": 2602
                  },
                  "value": {
                    "type": "TSEmptyBodyFunctionExpression",
                    "id": null,
                    "generator": false,
                    "async": false,
                    "declare": false,
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
                            "type": "TSStringKeyword",
                            "start": 2608,
                            "end": 2614
                          },
                          "start": 2606,
                          "end": 2614
                        },
                        "start": 2603,
                        "end": 2614
                      },
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "data",
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
                              "start": 2622,
                              "end": 2623
                            },
                            "typeArguments": null,
                            "start": 2622,
                            "end": 2623
                          },
                          "start": 2620,
                          "end": 2623
                        },
                        "start": 2616,
                        "end": 2623
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSBooleanKeyword",
                        "start": 2626,
                        "end": 2633
                      },
                      "start": 2624,
                      "end": 2633
                    },
                    "body": null,
                    "expression": false,
                    "start": 2602,
                    "end": 2634
                  },
                  "kind": "method",
                  "computed": false,
                  "static": false,
                  "override": false,
                  "optional": false,
                  "accessibility": "public",
                  "start": 2592,
                  "end": 2634
                },
                {
                  "type": "MethodDefinition",
                  "decorators": [],
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "addOrUpdate",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2650,
                    "end": 2661
                  },
                  "value": {
                    "type": "TSEmptyBodyFunctionExpression",
                    "id": null,
                    "generator": false,
                    "async": false,
                    "declare": false,
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
                            "type": "TSStringKeyword",
                            "start": 2667,
                            "end": 2673
                          },
                          "start": 2665,
                          "end": 2673
                        },
                        "start": 2662,
                        "end": 2673
                      },
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "data",
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
                              "start": 2681,
                              "end": 2682
                            },
                            "typeArguments": null,
                            "start": 2681,
                            "end": 2682
                          },
                          "start": 2679,
                          "end": 2682
                        },
                        "start": 2675,
                        "end": 2682
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSBooleanKeyword",
                        "start": 2685,
                        "end": 2692
                      },
                      "start": 2683,
                      "end": 2692
                    },
                    "body": null,
                    "expression": false,
                    "start": 2661,
                    "end": 2693
                  },
                  "kind": "method",
                  "computed": false,
                  "static": false,
                  "override": false,
                  "optional": false,
                  "accessibility": "public",
                  "start": 2643,
                  "end": 2693
                },
                {
                  "type": "MethodDefinition",
                  "decorators": [],
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "map",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2709,
                    "end": 2712
                  },
                  "value": {
                    "type": "TSEmptyBodyFunctionExpression",
                    "id": null,
                    "generator": false,
                    "async": false,
                    "declare": false,
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "fn",
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
                                "name": "k",
                                "optional": false,
                                "typeAnnotation": {
                                  "type": "TSTypeAnnotation",
                                  "typeAnnotation": {
                                    "type": "TSStringKeyword",
                                    "start": 2721,
                                    "end": 2727
                                  },
                                  "start": 2719,
                                  "end": 2727
                                },
                                "start": 2718,
                                "end": 2727
                              },
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
                                      "start": 2736,
                                      "end": 2737
                                    },
                                    "typeArguments": null,
                                    "start": 2736,
                                    "end": 2737
                                  },
                                  "start": 2734,
                                  "end": 2737
                                },
                                "start": 2729,
                                "end": 2737
                              },
                              {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "context",
                                "optional": false,
                                "typeAnnotation": {
                                  "type": "TSTypeAnnotation",
                                  "typeAnnotation": {
                                    "type": "TSAnyKeyword",
                                    "start": 2748,
                                    "end": 2751
                                  },
                                  "start": 2746,
                                  "end": 2751
                                },
                                "start": 2739,
                                "end": 2751
                              }
                            ],
                            "returnType": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSVoidKeyword",
                                "start": 2756,
                                "end": 2760
                              },
                              "start": 2753,
                              "end": 2760
                            },
                            "start": 2717,
                            "end": 2760
                          },
                          "start": 2715,
                          "end": 2760
                        },
                        "start": 2713,
                        "end": 2760
                      },
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "context",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSAnyKeyword",
                            "start": 2771,
                            "end": 2774
                          },
                          "start": 2769,
                          "end": 2774
                        },
                        "start": 2762,
                        "end": 2774
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSVoidKeyword",
                        "start": 2777,
                        "end": 2781
                      },
                      "start": 2775,
                      "end": 2781
                    },
                    "body": null,
                    "expression": false,
                    "start": 2712,
                    "end": 2782
                  },
                  "kind": "method",
                  "computed": false,
                  "static": false,
                  "override": false,
                  "optional": false,
                  "accessibility": "public",
                  "start": 2702,
                  "end": 2782
                },
                {
                  "type": "MethodDefinition",
                  "decorators": [],
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "every",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2798,
                    "end": 2803
                  },
                  "value": {
                    "type": "TSEmptyBodyFunctionExpression",
                    "id": null,
                    "generator": false,
                    "async": false,
                    "declare": false,
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "fn",
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
                                "name": "k",
                                "optional": false,
                                "typeAnnotation": {
                                  "type": "TSTypeAnnotation",
                                  "typeAnnotation": {
                                    "type": "TSStringKeyword",
                                    "start": 2812,
                                    "end": 2818
                                  },
                                  "start": 2810,
                                  "end": 2818
                                },
                                "start": 2809,
                                "end": 2818
                              },
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
                                      "start": 2827,
                                      "end": 2828
                                    },
                                    "typeArguments": null,
                                    "start": 2827,
                                    "end": 2828
                                  },
                                  "start": 2825,
                                  "end": 2828
                                },
                                "start": 2820,
                                "end": 2828
                              },
                              {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "context",
                                "optional": false,
                                "typeAnnotation": {
                                  "type": "TSTypeAnnotation",
                                  "typeAnnotation": {
                                    "type": "TSAnyKeyword",
                                    "start": 2839,
                                    "end": 2842
                                  },
                                  "start": 2837,
                                  "end": 2842
                                },
                                "start": 2830,
                                "end": 2842
                              }
                            ],
                            "returnType": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSVoidKeyword",
                                "start": 2847,
                                "end": 2851
                              },
                              "start": 2844,
                              "end": 2851
                            },
                            "start": 2808,
                            "end": 2851
                          },
                          "start": 2806,
                          "end": 2851
                        },
                        "start": 2804,
                        "end": 2851
                      },
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "context",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSAnyKeyword",
                            "start": 2862,
                            "end": 2865
                          },
                          "start": 2860,
                          "end": 2865
                        },
                        "start": 2853,
                        "end": 2865
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSBooleanKeyword",
                        "start": 2868,
                        "end": 2875
                      },
                      "start": 2866,
                      "end": 2875
                    },
                    "body": null,
                    "expression": false,
                    "start": 2803,
                    "end": 2876
                  },
                  "kind": "method",
                  "computed": false,
                  "static": false,
                  "override": false,
                  "optional": false,
                  "accessibility": "public",
                  "start": 2791,
                  "end": 2876
                },
                {
                  "type": "MethodDefinition",
                  "decorators": [],
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "some",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2892,
                    "end": 2896
                  },
                  "value": {
                    "type": "TSEmptyBodyFunctionExpression",
                    "id": null,
                    "generator": false,
                    "async": false,
                    "declare": false,
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "fn",
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
                                "name": "k",
                                "optional": false,
                                "typeAnnotation": {
                                  "type": "TSTypeAnnotation",
                                  "typeAnnotation": {
                                    "type": "TSStringKeyword",
                                    "start": 2905,
                                    "end": 2911
                                  },
                                  "start": 2903,
                                  "end": 2911
                                },
                                "start": 2902,
                                "end": 2911
                              },
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
                                "start": 2913,
                                "end": 2921
                              },
                              {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "context",
                                "optional": false,
                                "typeAnnotation": {
                                  "type": "TSTypeAnnotation",
                                  "typeAnnotation": {
                                    "type": "TSAnyKeyword",
                                    "start": 2932,
                                    "end": 2935
                                  },
                                  "start": 2930,
                                  "end": 2935
                                },
                                "start": 2923,
                                "end": 2935
                              }
                            ],
                            "returnType": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSVoidKeyword",
                                "start": 2940,
                                "end": 2944
                              },
                              "start": 2937,
                              "end": 2944
                            },
                            "start": 2901,
                            "end": 2944
                          },
                          "start": 2899,
                          "end": 2944
                        },
                        "start": 2897,
                        "end": 2944
                      },
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "context",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSAnyKeyword",
                            "start": 2955,
                            "end": 2958
                          },
                          "start": 2953,
                          "end": 2958
                        },
                        "start": 2946,
                        "end": 2958
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSBooleanKeyword",
                        "start": 2961,
                        "end": 2968
                      },
                      "start": 2959,
                      "end": 2968
                    },
                    "body": null,
                    "expression": false,
                    "start": 2896,
                    "end": 2969
                  },
                  "kind": "method",
                  "computed": false,
                  "static": false,
                  "override": false,
                  "optional": false,
                  "accessibility": "public",
                  "start": 2885,
                  "end": 2969
                },
                {
                  "type": "MethodDefinition",
                  "decorators": [],
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "count",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2985,
                    "end": 2990
                  },
                  "value": {
                    "type": "TSEmptyBodyFunctionExpression",
                    "id": null,
                    "generator": false,
                    "async": false,
                    "declare": false,
                    "typeParameters": null,
                    "params": [],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 2994,
                        "end": 3000
                      },
                      "start": 2992,
                      "end": 3000
                    },
                    "body": null,
                    "expression": false,
                    "start": 2990,
                    "end": 3001
                  },
                  "kind": "method",
                  "computed": false,
                  "static": false,
                  "override": false,
                  "optional": false,
                  "accessibility": "public",
                  "start": 2978,
                  "end": 3001
                },
                {
                  "type": "MethodDefinition",
                  "decorators": [],
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "lookup",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 3017,
                    "end": 3023
                  },
                  "value": {
                    "type": "TSEmptyBodyFunctionExpression",
                    "id": null,
                    "generator": false,
                    "async": false,
                    "declare": false,
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
                            "type": "TSStringKeyword",
                            "start": 3029,
                            "end": 3035
                          },
                          "start": 3027,
                          "end": 3035
                        },
                        "start": 3024,
                        "end": 3035
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
                          "start": 3038,
                          "end": 3039
                        },
                        "typeArguments": null,
                        "start": 3038,
                        "end": 3039
                      },
                      "start": 3036,
                      "end": 3039
                    },
                    "body": null,
                    "expression": false,
                    "start": 3023,
                    "end": 3040
                  },
                  "kind": "method",
                  "computed": false,
                  "static": false,
                  "override": false,
                  "optional": false,
                  "accessibility": "public",
                  "start": 3010,
                  "end": 3040
                },
                {
                  "type": "MethodDefinition",
                  "decorators": [],
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "remove",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 3056,
                    "end": 3062
                  },
                  "value": {
                    "type": "TSEmptyBodyFunctionExpression",
                    "id": null,
                    "generator": false,
                    "async": false,
                    "declare": false,
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
                            "type": "TSStringKeyword",
                            "start": 3068,
                            "end": 3074
                          },
                          "start": 3066,
                          "end": 3074
                        },
                        "start": 3063,
                        "end": 3074
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSVoidKeyword",
                        "start": 3077,
                        "end": 3081
                      },
                      "start": 3075,
                      "end": 3081
                    },
                    "body": null,
                    "expression": false,
                    "start": 3062,
                    "end": 3082
                  },
                  "kind": "method",
                  "computed": false,
                  "static": false,
                  "override": false,
                  "optional": false,
                  "accessibility": "public",
                  "start": 3049,
                  "end": 3082
                }
              ],
              "start": 2493,
              "end": 3088
            },
            "abstract": false,
            "declare": false,
            "start": 2443,
            "end": 3088
          },
          {
            "type": "ClassDeclaration",
            "decorators": [],
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "IdentifierNameHashTable",
              "optional": false,
              "typeAnnotation": null,
              "start": 3099,
              "end": 3122
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
                    "start": 3123,
                    "end": 3124
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 3123,
                  "end": 3124
                }
              ],
              "start": 3122,
              "end": 3125
            },
            "superClass": {
              "type": "Identifier",
              "decorators": [],
              "name": "StringHashTable",
              "optional": false,
              "typeAnnotation": null,
              "start": 3134,
              "end": 3149
            },
            "superTypeArguments": {
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
                    "start": 3150,
                    "end": 3151
                  },
                  "typeArguments": null,
                  "start": 3150,
                  "end": 3151
                }
              ],
              "start": 3149,
              "end": 3152
            },
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
                    "name": "getAllKeys",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 3170,
                    "end": 3180
                  },
                  "value": {
                    "type": "TSEmptyBodyFunctionExpression",
                    "id": null,
                    "generator": false,
                    "async": false,
                    "declare": false,
                    "typeParameters": null,
                    "params": [],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSArrayType",
                        "elementType": {
                          "type": "TSStringKeyword",
                          "start": 3184,
                          "end": 3190
                        },
                        "start": 3184,
                        "end": 3192
                      },
                      "start": 3182,
                      "end": 3192
                    },
                    "body": null,
                    "expression": false,
                    "start": 3180,
                    "end": 3193
                  },
                  "kind": "method",
                  "computed": false,
                  "static": false,
                  "override": false,
                  "optional": false,
                  "accessibility": "public",
                  "start": 3163,
                  "end": 3193
                },
                {
                  "type": "MethodDefinition",
                  "decorators": [],
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "add",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 3209,
                    "end": 3212
                  },
                  "value": {
                    "type": "TSEmptyBodyFunctionExpression",
                    "id": null,
                    "generator": false,
                    "async": false,
                    "declare": false,
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
                            "type": "TSStringKeyword",
                            "start": 3218,
                            "end": 3224
                          },
                          "start": 3216,
                          "end": 3224
                        },
                        "start": 3213,
                        "end": 3224
                      },
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "data",
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
                              "start": 3232,
                              "end": 3233
                            },
                            "typeArguments": null,
                            "start": 3232,
                            "end": 3233
                          },
                          "start": 3230,
                          "end": 3233
                        },
                        "start": 3226,
                        "end": 3233
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSBooleanKeyword",
                        "start": 3236,
                        "end": 3243
                      },
                      "start": 3234,
                      "end": 3243
                    },
                    "body": null,
                    "expression": false,
                    "start": 3212,
                    "end": 3244
                  },
                  "kind": "method",
                  "computed": false,
                  "static": false,
                  "override": false,
                  "optional": false,
                  "accessibility": "public",
                  "start": 3202,
                  "end": 3244
                },
                {
                  "type": "MethodDefinition",
                  "decorators": [],
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "addOrUpdate",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 3260,
                    "end": 3271
                  },
                  "value": {
                    "type": "TSEmptyBodyFunctionExpression",
                    "id": null,
                    "generator": false,
                    "async": false,
                    "declare": false,
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
                            "type": "TSStringKeyword",
                            "start": 3277,
                            "end": 3283
                          },
                          "start": 3275,
                          "end": 3283
                        },
                        "start": 3272,
                        "end": 3283
                      },
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "data",
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
                              "start": 3291,
                              "end": 3292
                            },
                            "typeArguments": null,
                            "start": 3291,
                            "end": 3292
                          },
                          "start": 3289,
                          "end": 3292
                        },
                        "start": 3285,
                        "end": 3292
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSBooleanKeyword",
                        "start": 3295,
                        "end": 3302
                      },
                      "start": 3293,
                      "end": 3302
                    },
                    "body": null,
                    "expression": false,
                    "start": 3271,
                    "end": 3303
                  },
                  "kind": "method",
                  "computed": false,
                  "static": false,
                  "override": false,
                  "optional": false,
                  "accessibility": "public",
                  "start": 3253,
                  "end": 3303
                },
                {
                  "type": "MethodDefinition",
                  "decorators": [],
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "map",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 3319,
                    "end": 3322
                  },
                  "value": {
                    "type": "TSEmptyBodyFunctionExpression",
                    "id": null,
                    "generator": false,
                    "async": false,
                    "declare": false,
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "fn",
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
                                "name": "k",
                                "optional": false,
                                "typeAnnotation": {
                                  "type": "TSTypeAnnotation",
                                  "typeAnnotation": {
                                    "type": "TSStringKeyword",
                                    "start": 3331,
                                    "end": 3337
                                  },
                                  "start": 3329,
                                  "end": 3337
                                },
                                "start": 3328,
                                "end": 3337
                              },
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
                                      "start": 3346,
                                      "end": 3347
                                    },
                                    "typeArguments": null,
                                    "start": 3346,
                                    "end": 3347
                                  },
                                  "start": 3344,
                                  "end": 3347
                                },
                                "start": 3339,
                                "end": 3347
                              },
                              {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "context",
                                "optional": false,
                                "typeAnnotation": {
                                  "type": "TSTypeAnnotation",
                                  "typeAnnotation": {
                                    "type": "TSAnyKeyword",
                                    "start": 3358,
                                    "end": 3361
                                  },
                                  "start": 3356,
                                  "end": 3361
                                },
                                "start": 3349,
                                "end": 3361
                              }
                            ],
                            "returnType": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSVoidKeyword",
                                "start": 3366,
                                "end": 3370
                              },
                              "start": 3363,
                              "end": 3370
                            },
                            "start": 3327,
                            "end": 3370
                          },
                          "start": 3325,
                          "end": 3370
                        },
                        "start": 3323,
                        "end": 3370
                      },
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "context",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSAnyKeyword",
                            "start": 3381,
                            "end": 3384
                          },
                          "start": 3379,
                          "end": 3384
                        },
                        "start": 3372,
                        "end": 3384
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSVoidKeyword",
                        "start": 3387,
                        "end": 3391
                      },
                      "start": 3385,
                      "end": 3391
                    },
                    "body": null,
                    "expression": false,
                    "start": 3322,
                    "end": 3392
                  },
                  "kind": "method",
                  "computed": false,
                  "static": false,
                  "override": false,
                  "optional": false,
                  "accessibility": "public",
                  "start": 3312,
                  "end": 3392
                },
                {
                  "type": "MethodDefinition",
                  "decorators": [],
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "every",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 3408,
                    "end": 3413
                  },
                  "value": {
                    "type": "TSEmptyBodyFunctionExpression",
                    "id": null,
                    "generator": false,
                    "async": false,
                    "declare": false,
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "fn",
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
                                "name": "k",
                                "optional": false,
                                "typeAnnotation": {
                                  "type": "TSTypeAnnotation",
                                  "typeAnnotation": {
                                    "type": "TSStringKeyword",
                                    "start": 3422,
                                    "end": 3428
                                  },
                                  "start": 3420,
                                  "end": 3428
                                },
                                "start": 3419,
                                "end": 3428
                              },
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
                                      "start": 3437,
                                      "end": 3438
                                    },
                                    "typeArguments": null,
                                    "start": 3437,
                                    "end": 3438
                                  },
                                  "start": 3435,
                                  "end": 3438
                                },
                                "start": 3430,
                                "end": 3438
                              },
                              {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "context",
                                "optional": false,
                                "typeAnnotation": {
                                  "type": "TSTypeAnnotation",
                                  "typeAnnotation": {
                                    "type": "TSAnyKeyword",
                                    "start": 3449,
                                    "end": 3452
                                  },
                                  "start": 3447,
                                  "end": 3452
                                },
                                "start": 3440,
                                "end": 3452
                              }
                            ],
                            "returnType": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSVoidKeyword",
                                "start": 3457,
                                "end": 3461
                              },
                              "start": 3454,
                              "end": 3461
                            },
                            "start": 3418,
                            "end": 3461
                          },
                          "start": 3416,
                          "end": 3461
                        },
                        "start": 3414,
                        "end": 3461
                      },
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "context",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSAnyKeyword",
                            "start": 3472,
                            "end": 3475
                          },
                          "start": 3470,
                          "end": 3475
                        },
                        "start": 3463,
                        "end": 3475
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSBooleanKeyword",
                        "start": 3478,
                        "end": 3485
                      },
                      "start": 3476,
                      "end": 3485
                    },
                    "body": null,
                    "expression": false,
                    "start": 3413,
                    "end": 3486
                  },
                  "kind": "method",
                  "computed": false,
                  "static": false,
                  "override": false,
                  "optional": false,
                  "accessibility": "public",
                  "start": 3401,
                  "end": 3486
                },
                {
                  "type": "MethodDefinition",
                  "decorators": [],
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "some",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 3502,
                    "end": 3506
                  },
                  "value": {
                    "type": "TSEmptyBodyFunctionExpression",
                    "id": null,
                    "generator": false,
                    "async": false,
                    "declare": false,
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "fn",
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
                                "name": "k",
                                "optional": false,
                                "typeAnnotation": {
                                  "type": "TSTypeAnnotation",
                                  "typeAnnotation": {
                                    "type": "TSStringKeyword",
                                    "start": 3515,
                                    "end": 3521
                                  },
                                  "start": 3513,
                                  "end": 3521
                                },
                                "start": 3512,
                                "end": 3521
                              },
                              {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "value",
                                "optional": false,
                                "typeAnnotation": {
                                  "type": "TSTypeAnnotation",
                                  "typeAnnotation": {
                                    "type": "TSAnyKeyword",
                                    "start": 3530,
                                    "end": 3533
                                  },
                                  "start": 3528,
                                  "end": 3533
                                },
                                "start": 3523,
                                "end": 3533
                              },
                              {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "context",
                                "optional": false,
                                "typeAnnotation": {
                                  "type": "TSTypeAnnotation",
                                  "typeAnnotation": {
                                    "type": "TSAnyKeyword",
                                    "start": 3544,
                                    "end": 3547
                                  },
                                  "start": 3542,
                                  "end": 3547
                                },
                                "start": 3535,
                                "end": 3547
                              }
                            ],
                            "returnType": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSVoidKeyword",
                                "start": 3552,
                                "end": 3556
                              },
                              "start": 3549,
                              "end": 3556
                            },
                            "start": 3511,
                            "end": 3556
                          },
                          "start": 3509,
                          "end": 3556
                        },
                        "start": 3507,
                        "end": 3556
                      },
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "context",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSAnyKeyword",
                            "start": 3567,
                            "end": 3570
                          },
                          "start": 3565,
                          "end": 3570
                        },
                        "start": 3558,
                        "end": 3570
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSBooleanKeyword",
                        "start": 3573,
                        "end": 3580
                      },
                      "start": 3571,
                      "end": 3580
                    },
                    "body": null,
                    "expression": false,
                    "start": 3506,
                    "end": 3581
                  },
                  "kind": "method",
                  "computed": false,
                  "static": false,
                  "override": false,
                  "optional": false,
                  "accessibility": "public",
                  "start": 3495,
                  "end": 3581
                },
                {
                  "type": "MethodDefinition",
                  "decorators": [],
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "lookup",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 3597,
                    "end": 3603
                  },
                  "value": {
                    "type": "TSEmptyBodyFunctionExpression",
                    "id": null,
                    "generator": false,
                    "async": false,
                    "declare": false,
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
                            "type": "TSStringKeyword",
                            "start": 3609,
                            "end": 3615
                          },
                          "start": 3607,
                          "end": 3615
                        },
                        "start": 3604,
                        "end": 3615
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
                          "start": 3618,
                          "end": 3619
                        },
                        "typeArguments": null,
                        "start": 3618,
                        "end": 3619
                      },
                      "start": 3616,
                      "end": 3619
                    },
                    "body": null,
                    "expression": false,
                    "start": 3603,
                    "end": 3620
                  },
                  "kind": "method",
                  "computed": false,
                  "static": false,
                  "override": false,
                  "optional": false,
                  "accessibility": "public",
                  "start": 3590,
                  "end": 3620
                }
              ],
              "start": 3153,
              "end": 3626
            },
            "abstract": false,
            "declare": false,
            "start": 3093,
            "end": 3626
          }
        ],
        "start": 1844,
        "end": 3628
      },
      "kind": "namespace",
      "declare": true,
      "global": false,
      "start": 1815,
      "end": 3628
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 3628
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
    "value": "TypeScript",
    "start": 18,
    "end": 28
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 29,
    "end": 30
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 35,
    "end": 44
  },
  {
    "type": "Identifier",
    "value": "IIndexable",
    "start": 45,
    "end": 55
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 55,
    "end": 56
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 56,
    "end": 57
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 57,
    "end": 58
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 59,
    "end": 60
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 69,
    "end": 70
  },
  {
    "type": "Identifier",
    "value": "s",
    "start": 70,
    "end": 71
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 71,
    "end": 72
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 73,
    "end": 79
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 79,
    "end": 80
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 80,
    "end": 81
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 82,
    "end": 83
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 83,
    "end": 84
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 89,
    "end": 90
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 95,
    "end": 103
  },
  {
    "type": "Identifier",
    "value": "createIntrinsicsObject",
    "start": 104,
    "end": 126
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 126,
    "end": 127
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 127,
    "end": 128
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 128,
    "end": 129
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 129,
    "end": 130
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 130,
    "end": 131
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 131,
    "end": 132
  },
  {
    "type": "Identifier",
    "value": "IIndexable",
    "start": 133,
    "end": 143
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 143,
    "end": 144
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 144,
    "end": 145
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 145,
    "end": 146
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 146,
    "end": 147
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 152,
    "end": 161
  },
  {
    "type": "Identifier",
    "value": "IHashTable",
    "start": 162,
    "end": 172
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 172,
    "end": 173
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 173,
    "end": 174
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 174,
    "end": 175
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 176,
    "end": 177
  },
  {
    "type": "Identifier",
    "value": "getAllKeys",
    "start": 186,
    "end": 196
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 196,
    "end": 197
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 197,
    "end": 198
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 198,
    "end": 199
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 200,
    "end": 206
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 206,
    "end": 207
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 207,
    "end": 208
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 208,
    "end": 209
  },
  {
    "type": "Identifier",
    "value": "add",
    "start": 218,
    "end": 221
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 221,
    "end": 222
  },
  {
    "type": "Identifier",
    "value": "key",
    "start": 222,
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
    "value": "string",
    "start": 227,
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
    "value": "data",
    "start": 235,
    "end": 239
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 239,
    "end": 240
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 241,
    "end": 242
  },
  {
    "type": "Punctuator",
    "value": ")",
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
    "type": "Identifier",
    "value": "boolean",
    "start": 245,
    "end": 252
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 252,
    "end": 253
  },
  {
    "type": "Identifier",
    "value": "addOrUpdate",
    "start": 262,
    "end": 273
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 273,
    "end": 274
  },
  {
    "type": "Identifier",
    "value": "key",
    "start": 274,
    "end": 277
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 277,
    "end": 278
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 279,
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
    "value": "data",
    "start": 287,
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
    "value": ")",
    "start": 294,
    "end": 295
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 295,
    "end": 296
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 297,
    "end": 304
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 304,
    "end": 305
  },
  {
    "type": "Identifier",
    "value": "map",
    "start": 314,
    "end": 317
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 317,
    "end": 318
  },
  {
    "type": "Identifier",
    "value": "fn",
    "start": 318,
    "end": 320
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 320,
    "end": 321
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 322,
    "end": 323
  },
  {
    "type": "Identifier",
    "value": "k",
    "start": 323,
    "end": 324
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 324,
    "end": 325
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 326,
    "end": 332
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 332,
    "end": 333
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 334,
    "end": 339
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 339,
    "end": 340
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 341,
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
    "value": "context",
    "start": 344,
    "end": 351
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 351,
    "end": 352
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 353,
    "end": 356
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 356,
    "end": 357
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 358,
    "end": 360
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 361,
    "end": 365
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 365,
    "end": 366
  },
  {
    "type": "Identifier",
    "value": "context",
    "start": 367,
    "end": 374
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 374,
    "end": 375
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 376,
    "end": 379
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 379,
    "end": 380
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 380,
    "end": 381
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 382,
    "end": 386
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 386,
    "end": 387
  },
  {
    "type": "Identifier",
    "value": "every",
    "start": 396,
    "end": 401
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 401,
    "end": 402
  },
  {
    "type": "Identifier",
    "value": "fn",
    "start": 402,
    "end": 404
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 404,
    "end": 405
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 406,
    "end": 407
  },
  {
    "type": "Identifier",
    "value": "k",
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
    "type": "Identifier",
    "value": "string",
    "start": 410,
    "end": 416
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 416,
    "end": 417
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 418,
    "end": 423
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 423,
    "end": 424
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 425,
    "end": 426
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 426,
    "end": 427
  },
  {
    "type": "Identifier",
    "value": "context",
    "start": 428,
    "end": 435
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 435,
    "end": 436
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 437,
    "end": 440
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 440,
    "end": 441
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 442,
    "end": 444
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 445,
    "end": 449
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 449,
    "end": 450
  },
  {
    "type": "Identifier",
    "value": "context",
    "start": 451,
    "end": 458
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 458,
    "end": 459
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 460,
    "end": 463
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 463,
    "end": 464
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 464,
    "end": 465
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 466,
    "end": 473
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 473,
    "end": 474
  },
  {
    "type": "Identifier",
    "value": "some",
    "start": 483,
    "end": 487
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 487,
    "end": 488
  },
  {
    "type": "Identifier",
    "value": "fn",
    "start": 488,
    "end": 490
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 490,
    "end": 491
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 492,
    "end": 493
  },
  {
    "type": "Identifier",
    "value": "k",
    "start": 493,
    "end": 494
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 494,
    "end": 495
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 496,
    "end": 502
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 502,
    "end": 503
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 504,
    "end": 509
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 509,
    "end": 510
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 511,
    "end": 512
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 512,
    "end": 513
  },
  {
    "type": "Identifier",
    "value": "context",
    "start": 514,
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
    "value": "any",
    "start": 523,
    "end": 526
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 526,
    "end": 527
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 528,
    "end": 530
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 531,
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
    "value": "context",
    "start": 537,
    "end": 544
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 544,
    "end": 545
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 546,
    "end": 549
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 549,
    "end": 550
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 550,
    "end": 551
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 552,
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
    "value": "count",
    "start": 569,
    "end": 574
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 574,
    "end": 575
  },
  {
    "type": "Punctuator",
    "value": ")",
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
    "type": "Identifier",
    "value": "number",
    "start": 578,
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
    "value": "lookup",
    "start": 594,
    "end": 600
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 600,
    "end": 601
  },
  {
    "type": "Identifier",
    "value": "key",
    "start": 601,
    "end": 604
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 604,
    "end": 605
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 606,
    "end": 612
  },
  {
    "type": "Punctuator",
    "value": ")",
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
    "type": "Identifier",
    "value": "T",
    "start": 615,
    "end": 616
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 616,
    "end": 617
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 622,
    "end": 623
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 628,
    "end": 633
  },
  {
    "type": "Identifier",
    "value": "StringHashTable",
    "start": 634,
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
    "type": "Keyword",
    "value": "implements",
    "start": 653,
    "end": 663
  },
  {
    "type": "Identifier",
    "value": "IHashTable",
    "start": 664,
    "end": 674
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 674,
    "end": 675
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 675,
    "end": 676
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 676,
    "end": 677
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 678,
    "end": 679
  },
  {
    "type": "Keyword",
    "value": "private",
    "start": 688,
    "end": 695
  },
  {
    "type": "Identifier",
    "value": "itemCount",
    "start": 696,
    "end": 705
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 705,
    "end": 706
  },
  {
    "type": "Keyword",
    "value": "private",
    "start": 715,
    "end": 722
  },
  {
    "type": "Identifier",
    "value": "table",
    "start": 723,
    "end": 728
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 728,
    "end": 729
  },
  {
    "type": "Keyword",
    "value": "public",
    "start": 738,
    "end": 744
  },
  {
    "type": "Identifier",
    "value": "getAllKeys",
    "start": 745,
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
    "type": "Identifier",
    "value": "string",
    "start": 759,
    "end": 765
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 765,
    "end": 766
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 766,
    "end": 767
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 767,
    "end": 768
  },
  {
    "type": "Keyword",
    "value": "public",
    "start": 777,
    "end": 783
  },
  {
    "type": "Identifier",
    "value": "add",
    "start": 784,
    "end": 787
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 787,
    "end": 788
  },
  {
    "type": "Identifier",
    "value": "key",
    "start": 788,
    "end": 791
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 791,
    "end": 792
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 793,
    "end": 799
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 799,
    "end": 800
  },
  {
    "type": "Identifier",
    "value": "data",
    "start": 801,
    "end": 805
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 805,
    "end": 806
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 807,
    "end": 808
  },
  {
    "type": "Punctuator",
    "value": ")",
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
    "value": "boolean",
    "start": 811,
    "end": 818
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 818,
    "end": 819
  },
  {
    "type": "Keyword",
    "value": "public",
    "start": 828,
    "end": 834
  },
  {
    "type": "Identifier",
    "value": "addOrUpdate",
    "start": 835,
    "end": 846
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 846,
    "end": 847
  },
  {
    "type": "Identifier",
    "value": "key",
    "start": 847,
    "end": 850
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 850,
    "end": 851
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 852,
    "end": 858
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 858,
    "end": 859
  },
  {
    "type": "Identifier",
    "value": "data",
    "start": 860,
    "end": 864
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 864,
    "end": 865
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 866,
    "end": 867
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 867,
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
    "value": "boolean",
    "start": 870,
    "end": 877
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 877,
    "end": 878
  },
  {
    "type": "Keyword",
    "value": "public",
    "start": 887,
    "end": 893
  },
  {
    "type": "Identifier",
    "value": "map",
    "start": 894,
    "end": 897
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 897,
    "end": 898
  },
  {
    "type": "Identifier",
    "value": "fn",
    "start": 898,
    "end": 900
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 900,
    "end": 901
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 902,
    "end": 903
  },
  {
    "type": "Identifier",
    "value": "k",
    "start": 903,
    "end": 904
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 904,
    "end": 905
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 906,
    "end": 912
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 912,
    "end": 913
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 914,
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
    "value": ",",
    "start": 922,
    "end": 923
  },
  {
    "type": "Identifier",
    "value": "context",
    "start": 924,
    "end": 931
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 931,
    "end": 932
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 933,
    "end": 936
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 936,
    "end": 937
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 938,
    "end": 940
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 941,
    "end": 945
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 945,
    "end": 946
  },
  {
    "type": "Identifier",
    "value": "context",
    "start": 947,
    "end": 954
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 954,
    "end": 955
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 956,
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
    "type": "Keyword",
    "value": "public",
    "start": 976,
    "end": 982
  },
  {
    "type": "Identifier",
    "value": "every",
    "start": 983,
    "end": 988
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 988,
    "end": 989
  },
  {
    "type": "Identifier",
    "value": "fn",
    "start": 989,
    "end": 991
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 991,
    "end": 992
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 993,
    "end": 994
  },
  {
    "type": "Identifier",
    "value": "k",
    "start": 994,
    "end": 995
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 995,
    "end": 996
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 997,
    "end": 1003
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1003,
    "end": 1004
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 1005,
    "end": 1010
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1010,
    "end": 1011
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1012,
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
    "value": "context",
    "start": 1015,
    "end": 1022
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1022,
    "end": 1023
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 1024,
    "end": 1027
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1027,
    "end": 1028
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1029,
    "end": 1031
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 1032,
    "end": 1036
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1036,
    "end": 1037
  },
  {
    "type": "Identifier",
    "value": "context",
    "start": 1038,
    "end": 1045
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1045,
    "end": 1046
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 1047,
    "end": 1050
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1050,
    "end": 1051
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1051,
    "end": 1052
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 1053,
    "end": 1060
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1060,
    "end": 1061
  },
  {
    "type": "Keyword",
    "value": "public",
    "start": 1070,
    "end": 1076
  },
  {
    "type": "Identifier",
    "value": "some",
    "start": 1077,
    "end": 1081
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1081,
    "end": 1082
  },
  {
    "type": "Identifier",
    "value": "fn",
    "start": 1082,
    "end": 1084
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1084,
    "end": 1085
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1086,
    "end": 1087
  },
  {
    "type": "Identifier",
    "value": "k",
    "start": 1087,
    "end": 1088
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1088,
    "end": 1089
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1090,
    "end": 1096
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1096,
    "end": 1097
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 1098,
    "end": 1103
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1103,
    "end": 1104
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1105,
    "end": 1106
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1106,
    "end": 1107
  },
  {
    "type": "Identifier",
    "value": "context",
    "start": 1108,
    "end": 1115
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1115,
    "end": 1116
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 1117,
    "end": 1120
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1120,
    "end": 1121
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1122,
    "end": 1124
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 1125,
    "end": 1129
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1129,
    "end": 1130
  },
  {
    "type": "Identifier",
    "value": "context",
    "start": 1131,
    "end": 1138
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1138,
    "end": 1139
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 1140,
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
    "value": "boolean",
    "start": 1146,
    "end": 1153
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1153,
    "end": 1154
  },
  {
    "type": "Keyword",
    "value": "public",
    "start": 1163,
    "end": 1169
  },
  {
    "type": "Identifier",
    "value": "count",
    "start": 1170,
    "end": 1175
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1175,
    "end": 1176
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1176,
    "end": 1177
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1177,
    "end": 1178
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1179,
    "end": 1185
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1185,
    "end": 1186
  },
  {
    "type": "Keyword",
    "value": "public",
    "start": 1195,
    "end": 1201
  },
  {
    "type": "Identifier",
    "value": "lookup",
    "start": 1202,
    "end": 1208
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1208,
    "end": 1209
  },
  {
    "type": "Identifier",
    "value": "key",
    "start": 1209,
    "end": 1212
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1212,
    "end": 1213
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1214,
    "end": 1220
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1220,
    "end": 1221
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1221,
    "end": 1222
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1223,
    "end": 1224
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1224,
    "end": 1225
  },
  {
    "type": "Keyword",
    "value": "public",
    "start": 1234,
    "end": 1240
  },
  {
    "type": "Identifier",
    "value": "remove",
    "start": 1241,
    "end": 1247
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1247,
    "end": 1248
  },
  {
    "type": "Identifier",
    "value": "key",
    "start": 1248,
    "end": 1251
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1251,
    "end": 1252
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1253,
    "end": 1259
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1259,
    "end": 1260
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1260,
    "end": 1261
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 1262,
    "end": 1266
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1266,
    "end": 1267
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1272,
    "end": 1273
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 1278,
    "end": 1283
  },
  {
    "type": "Identifier",
    "value": "IdentifierNameHashTable",
    "start": 1284,
    "end": 1307
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1307,
    "end": 1308
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1308,
    "end": 1309
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1309,
    "end": 1310
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 1311,
    "end": 1318
  },
  {
    "type": "Identifier",
    "value": "StringHashTable",
    "start": 1319,
    "end": 1334
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1334,
    "end": 1335
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1335,
    "end": 1336
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1336,
    "end": 1337
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1338,
    "end": 1339
  },
  {
    "type": "Keyword",
    "value": "public",
    "start": 1348,
    "end": 1354
  },
  {
    "type": "Identifier",
    "value": "getAllKeys",
    "start": 1355,
    "end": 1365
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1365,
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
    "value": ":",
    "start": 1367,
    "end": 1368
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1369,
    "end": 1375
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1375,
    "end": 1376
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1376,
    "end": 1377
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1377,
    "end": 1378
  },
  {
    "type": "Keyword",
    "value": "public",
    "start": 1387,
    "end": 1393
  },
  {
    "type": "Identifier",
    "value": "add",
    "start": 1394,
    "end": 1397
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1397,
    "end": 1398
  },
  {
    "type": "Identifier",
    "value": "key",
    "start": 1398,
    "end": 1401
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1401,
    "end": 1402
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1403,
    "end": 1409
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1409,
    "end": 1410
  },
  {
    "type": "Identifier",
    "value": "data",
    "start": 1411,
    "end": 1415
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1415,
    "end": 1416
  },
  {
    "type": "Identifier",
    "value": "T",
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
    "value": "boolean",
    "start": 1421,
    "end": 1428
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1428,
    "end": 1429
  },
  {
    "type": "Keyword",
    "value": "public",
    "start": 1438,
    "end": 1444
  },
  {
    "type": "Identifier",
    "value": "addOrUpdate",
    "start": 1445,
    "end": 1456
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1456,
    "end": 1457
  },
  {
    "type": "Identifier",
    "value": "key",
    "start": 1457,
    "end": 1460
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1460,
    "end": 1461
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1462,
    "end": 1468
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1468,
    "end": 1469
  },
  {
    "type": "Identifier",
    "value": "data",
    "start": 1470,
    "end": 1474
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1474,
    "end": 1475
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1476,
    "end": 1477
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1477,
    "end": 1478
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1478,
    "end": 1479
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 1480,
    "end": 1487
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1487,
    "end": 1488
  },
  {
    "type": "Keyword",
    "value": "public",
    "start": 1497,
    "end": 1503
  },
  {
    "type": "Identifier",
    "value": "map",
    "start": 1504,
    "end": 1507
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1507,
    "end": 1508
  },
  {
    "type": "Identifier",
    "value": "fn",
    "start": 1508,
    "end": 1510
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1510,
    "end": 1511
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1512,
    "end": 1513
  },
  {
    "type": "Identifier",
    "value": "k",
    "start": 1513,
    "end": 1514
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1514,
    "end": 1515
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1516,
    "end": 1522
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1522,
    "end": 1523
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 1524,
    "end": 1529
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1529,
    "end": 1530
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1531,
    "end": 1532
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1532,
    "end": 1533
  },
  {
    "type": "Identifier",
    "value": "context",
    "start": 1534,
    "end": 1541
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1541,
    "end": 1542
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 1543,
    "end": 1546
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1546,
    "end": 1547
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1548,
    "end": 1550
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 1551,
    "end": 1555
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1555,
    "end": 1556
  },
  {
    "type": "Identifier",
    "value": "context",
    "start": 1557,
    "end": 1564
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1564,
    "end": 1565
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 1566,
    "end": 1569
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1569,
    "end": 1570
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1570,
    "end": 1571
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 1572,
    "end": 1576
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1576,
    "end": 1577
  },
  {
    "type": "Keyword",
    "value": "public",
    "start": 1586,
    "end": 1592
  },
  {
    "type": "Identifier",
    "value": "every",
    "start": 1593,
    "end": 1598
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1598,
    "end": 1599
  },
  {
    "type": "Identifier",
    "value": "fn",
    "start": 1599,
    "end": 1601
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1601,
    "end": 1602
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1603,
    "end": 1604
  },
  {
    "type": "Identifier",
    "value": "k",
    "start": 1604,
    "end": 1605
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1605,
    "end": 1606
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1607,
    "end": 1613
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1613,
    "end": 1614
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 1615,
    "end": 1620
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1620,
    "end": 1621
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1622,
    "end": 1623
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1623,
    "end": 1624
  },
  {
    "type": "Identifier",
    "value": "context",
    "start": 1625,
    "end": 1632
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1632,
    "end": 1633
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 1634,
    "end": 1637
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1637,
    "end": 1638
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1639,
    "end": 1641
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 1642,
    "end": 1646
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1646,
    "end": 1647
  },
  {
    "type": "Identifier",
    "value": "context",
    "start": 1648,
    "end": 1655
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1655,
    "end": 1656
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 1657,
    "end": 1660
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1660,
    "end": 1661
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1661,
    "end": 1662
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 1663,
    "end": 1670
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1670,
    "end": 1671
  },
  {
    "type": "Keyword",
    "value": "public",
    "start": 1680,
    "end": 1686
  },
  {
    "type": "Identifier",
    "value": "some",
    "start": 1687,
    "end": 1691
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1691,
    "end": 1692
  },
  {
    "type": "Identifier",
    "value": "fn",
    "start": 1692,
    "end": 1694
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1694,
    "end": 1695
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1696,
    "end": 1697
  },
  {
    "type": "Identifier",
    "value": "k",
    "start": 1697,
    "end": 1698
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1698,
    "end": 1699
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1700,
    "end": 1706
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1706,
    "end": 1707
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 1708,
    "end": 1713
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1713,
    "end": 1714
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 1715,
    "end": 1718
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1718,
    "end": 1719
  },
  {
    "type": "Identifier",
    "value": "context",
    "start": 1720,
    "end": 1727
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1727,
    "end": 1728
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 1729,
    "end": 1732
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1732,
    "end": 1733
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1734,
    "end": 1736
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 1737,
    "end": 1741
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1741,
    "end": 1742
  },
  {
    "type": "Identifier",
    "value": "context",
    "start": 1743,
    "end": 1750
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1750,
    "end": 1751
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 1752,
    "end": 1755
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1755,
    "end": 1756
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1756,
    "end": 1757
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 1758,
    "end": 1765
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1765,
    "end": 1766
  },
  {
    "type": "Keyword",
    "value": "public",
    "start": 1775,
    "end": 1781
  },
  {
    "type": "Identifier",
    "value": "lookup",
    "start": 1782,
    "end": 1788
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1788,
    "end": 1789
  },
  {
    "type": "Identifier",
    "value": "key",
    "start": 1789,
    "end": 1792
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1792,
    "end": 1793
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1794,
    "end": 1800
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1800,
    "end": 1801
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1801,
    "end": 1802
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1803,
    "end": 1804
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1804,
    "end": 1805
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1810,
    "end": 1811
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1812,
    "end": 1813
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 1815,
    "end": 1822
  },
  {
    "type": "Identifier",
    "value": "namespace",
    "start": 1823,
    "end": 1832
  },
  {
    "type": "Identifier",
    "value": "TypeScript",
    "start": 1833,
    "end": 1843
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1844,
    "end": 1845
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 1850,
    "end": 1859
  },
  {
    "type": "Identifier",
    "value": "IIndexable",
    "start": 1860,
    "end": 1870
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1870,
    "end": 1871
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1871,
    "end": 1872
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1872,
    "end": 1873
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1874,
    "end": 1875
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1884,
    "end": 1885
  },
  {
    "type": "Identifier",
    "value": "s",
    "start": 1885,
    "end": 1886
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1886,
    "end": 1887
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1888,
    "end": 1894
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1894,
    "end": 1895
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1895,
    "end": 1896
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1897,
    "end": 1898
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1898,
    "end": 1899
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1904,
    "end": 1905
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1910,
    "end": 1918
  },
  {
    "type": "Identifier",
    "value": "createIntrinsicsObject",
    "start": 1919,
    "end": 1941
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1941,
    "end": 1942
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1942,
    "end": 1943
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1943,
    "end": 1944
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1944,
    "end": 1945
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1945,
    "end": 1946
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1946,
    "end": 1947
  },
  {
    "type": "Identifier",
    "value": "IIndexable",
    "start": 1948,
    "end": 1958
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1958,
    "end": 1959
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1959,
    "end": 1960
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1960,
    "end": 1961
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1961,
    "end": 1962
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 1967,
    "end": 1976
  },
  {
    "type": "Identifier",
    "value": "IHashTable",
    "start": 1977,
    "end": 1987
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1987,
    "end": 1988
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1988,
    "end": 1989
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1989,
    "end": 1990
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1991,
    "end": 1992
  },
  {
    "type": "Identifier",
    "value": "getAllKeys",
    "start": 2001,
    "end": 2011
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2011,
    "end": 2012
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2012,
    "end": 2013
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2013,
    "end": 2014
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 2015,
    "end": 2021
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 2021,
    "end": 2022
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 2022,
    "end": 2023
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2023,
    "end": 2024
  },
  {
    "type": "Identifier",
    "value": "add",
    "start": 2033,
    "end": 2036
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2036,
    "end": 2037
  },
  {
    "type": "Identifier",
    "value": "key",
    "start": 2037,
    "end": 2040
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2040,
    "end": 2041
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 2042,
    "end": 2048
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2048,
    "end": 2049
  },
  {
    "type": "Identifier",
    "value": "data",
    "start": 2050,
    "end": 2054
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2054,
    "end": 2055
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2056,
    "end": 2057
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2057,
    "end": 2058
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2058,
    "end": 2059
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 2060,
    "end": 2067
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2067,
    "end": 2068
  },
  {
    "type": "Identifier",
    "value": "addOrUpdate",
    "start": 2077,
    "end": 2088
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2088,
    "end": 2089
  },
  {
    "type": "Identifier",
    "value": "key",
    "start": 2089,
    "end": 2092
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2092,
    "end": 2093
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 2094,
    "end": 2100
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2100,
    "end": 2101
  },
  {
    "type": "Identifier",
    "value": "data",
    "start": 2102,
    "end": 2106
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2106,
    "end": 2107
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2108,
    "end": 2109
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2109,
    "end": 2110
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2110,
    "end": 2111
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 2112,
    "end": 2119
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2119,
    "end": 2120
  },
  {
    "type": "Identifier",
    "value": "map",
    "start": 2129,
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
    "value": "fn",
    "start": 2133,
    "end": 2135
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2135,
    "end": 2136
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2137,
    "end": 2138
  },
  {
    "type": "Identifier",
    "value": "k",
    "start": 2138,
    "end": 2139
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2139,
    "end": 2140
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 2141,
    "end": 2147
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2147,
    "end": 2148
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 2149,
    "end": 2154
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2154,
    "end": 2155
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2156,
    "end": 2157
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2157,
    "end": 2158
  },
  {
    "type": "Identifier",
    "value": "context",
    "start": 2159,
    "end": 2166
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2166,
    "end": 2167
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 2168,
    "end": 2171
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2171,
    "end": 2172
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 2173,
    "end": 2175
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 2176,
    "end": 2180
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2180,
    "end": 2181
  },
  {
    "type": "Identifier",
    "value": "context",
    "start": 2182,
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
    "value": "any",
    "start": 2191,
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
    "value": ":",
    "start": 2195,
    "end": 2196
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 2197,
    "end": 2201
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2201,
    "end": 2202
  },
  {
    "type": "Identifier",
    "value": "every",
    "start": 2211,
    "end": 2216
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2216,
    "end": 2217
  },
  {
    "type": "Identifier",
    "value": "fn",
    "start": 2217,
    "end": 2219
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2219,
    "end": 2220
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2221,
    "end": 2222
  },
  {
    "type": "Identifier",
    "value": "k",
    "start": 2222,
    "end": 2223
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2223,
    "end": 2224
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 2225,
    "end": 2231
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2231,
    "end": 2232
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 2233,
    "end": 2238
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2238,
    "end": 2239
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2240,
    "end": 2241
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2241,
    "end": 2242
  },
  {
    "type": "Identifier",
    "value": "context",
    "start": 2243,
    "end": 2250
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2250,
    "end": 2251
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 2252,
    "end": 2255
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2255,
    "end": 2256
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 2257,
    "end": 2259
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 2260,
    "end": 2264
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2264,
    "end": 2265
  },
  {
    "type": "Identifier",
    "value": "context",
    "start": 2266,
    "end": 2273
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2273,
    "end": 2274
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 2275,
    "end": 2278
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2278,
    "end": 2279
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2279,
    "end": 2280
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 2281,
    "end": 2288
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2288,
    "end": 2289
  },
  {
    "type": "Identifier",
    "value": "some",
    "start": 2298,
    "end": 2302
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2302,
    "end": 2303
  },
  {
    "type": "Identifier",
    "value": "fn",
    "start": 2303,
    "end": 2305
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2305,
    "end": 2306
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2307,
    "end": 2308
  },
  {
    "type": "Identifier",
    "value": "k",
    "start": 2308,
    "end": 2309
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2309,
    "end": 2310
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 2311,
    "end": 2317
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2317,
    "end": 2318
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 2319,
    "end": 2324
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2324,
    "end": 2325
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2326,
    "end": 2327
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2327,
    "end": 2328
  },
  {
    "type": "Identifier",
    "value": "context",
    "start": 2329,
    "end": 2336
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2336,
    "end": 2337
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 2338,
    "end": 2341
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2341,
    "end": 2342
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 2343,
    "end": 2345
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 2346,
    "end": 2350
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2350,
    "end": 2351
  },
  {
    "type": "Identifier",
    "value": "context",
    "start": 2352,
    "end": 2359
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2359,
    "end": 2360
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 2361,
    "end": 2364
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2364,
    "end": 2365
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2365,
    "end": 2366
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 2367,
    "end": 2374
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2374,
    "end": 2375
  },
  {
    "type": "Identifier",
    "value": "count",
    "start": 2384,
    "end": 2389
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2389,
    "end": 2390
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2390,
    "end": 2391
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2391,
    "end": 2392
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 2393,
    "end": 2399
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2399,
    "end": 2400
  },
  {
    "type": "Identifier",
    "value": "lookup",
    "start": 2409,
    "end": 2415
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2415,
    "end": 2416
  },
  {
    "type": "Identifier",
    "value": "key",
    "start": 2416,
    "end": 2419
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2419,
    "end": 2420
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 2421,
    "end": 2427
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2427,
    "end": 2428
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2428,
    "end": 2429
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2430,
    "end": 2431
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2431,
    "end": 2432
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2437,
    "end": 2438
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 2443,
    "end": 2448
  },
  {
    "type": "Identifier",
    "value": "StringHashTable",
    "start": 2449,
    "end": 2464
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2464,
    "end": 2465
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2465,
    "end": 2466
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2466,
    "end": 2467
  },
  {
    "type": "Keyword",
    "value": "implements",
    "start": 2468,
    "end": 2478
  },
  {
    "type": "Identifier",
    "value": "IHashTable",
    "start": 2479,
    "end": 2489
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2489,
    "end": 2490
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2490,
    "end": 2491
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2491,
    "end": 2492
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2493,
    "end": 2494
  },
  {
    "type": "Keyword",
    "value": "private",
    "start": 2503,
    "end": 2510
  },
  {
    "type": "Identifier",
    "value": "itemCount",
    "start": 2511,
    "end": 2520
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2520,
    "end": 2521
  },
  {
    "type": "Keyword",
    "value": "private",
    "start": 2530,
    "end": 2537
  },
  {
    "type": "Identifier",
    "value": "table",
    "start": 2538,
    "end": 2543
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2543,
    "end": 2544
  },
  {
    "type": "Keyword",
    "value": "public",
    "start": 2553,
    "end": 2559
  },
  {
    "type": "Identifier",
    "value": "getAllKeys",
    "start": 2560,
    "end": 2570
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2570,
    "end": 2571
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2571,
    "end": 2572
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2572,
    "end": 2573
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 2574,
    "end": 2580
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 2580,
    "end": 2581
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 2581,
    "end": 2582
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2582,
    "end": 2583
  },
  {
    "type": "Keyword",
    "value": "public",
    "start": 2592,
    "end": 2598
  },
  {
    "type": "Identifier",
    "value": "add",
    "start": 2599,
    "end": 2602
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2602,
    "end": 2603
  },
  {
    "type": "Identifier",
    "value": "key",
    "start": 2603,
    "end": 2606
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2606,
    "end": 2607
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 2608,
    "end": 2614
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2614,
    "end": 2615
  },
  {
    "type": "Identifier",
    "value": "data",
    "start": 2616,
    "end": 2620
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2620,
    "end": 2621
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2622,
    "end": 2623
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2623,
    "end": 2624
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2624,
    "end": 2625
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 2626,
    "end": 2633
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2633,
    "end": 2634
  },
  {
    "type": "Keyword",
    "value": "public",
    "start": 2643,
    "end": 2649
  },
  {
    "type": "Identifier",
    "value": "addOrUpdate",
    "start": 2650,
    "end": 2661
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2661,
    "end": 2662
  },
  {
    "type": "Identifier",
    "value": "key",
    "start": 2662,
    "end": 2665
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2665,
    "end": 2666
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 2667,
    "end": 2673
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2673,
    "end": 2674
  },
  {
    "type": "Identifier",
    "value": "data",
    "start": 2675,
    "end": 2679
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2679,
    "end": 2680
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2681,
    "end": 2682
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2682,
    "end": 2683
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2683,
    "end": 2684
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 2685,
    "end": 2692
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2692,
    "end": 2693
  },
  {
    "type": "Keyword",
    "value": "public",
    "start": 2702,
    "end": 2708
  },
  {
    "type": "Identifier",
    "value": "map",
    "start": 2709,
    "end": 2712
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2712,
    "end": 2713
  },
  {
    "type": "Identifier",
    "value": "fn",
    "start": 2713,
    "end": 2715
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2715,
    "end": 2716
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2717,
    "end": 2718
  },
  {
    "type": "Identifier",
    "value": "k",
    "start": 2718,
    "end": 2719
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2719,
    "end": 2720
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 2721,
    "end": 2727
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2727,
    "end": 2728
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 2729,
    "end": 2734
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2734,
    "end": 2735
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2736,
    "end": 2737
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2737,
    "end": 2738
  },
  {
    "type": "Identifier",
    "value": "context",
    "start": 2739,
    "end": 2746
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2746,
    "end": 2747
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 2748,
    "end": 2751
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2751,
    "end": 2752
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 2753,
    "end": 2755
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 2756,
    "end": 2760
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2760,
    "end": 2761
  },
  {
    "type": "Identifier",
    "value": "context",
    "start": 2762,
    "end": 2769
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2769,
    "end": 2770
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 2771,
    "end": 2774
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2774,
    "end": 2775
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2775,
    "end": 2776
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 2777,
    "end": 2781
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2781,
    "end": 2782
  },
  {
    "type": "Keyword",
    "value": "public",
    "start": 2791,
    "end": 2797
  },
  {
    "type": "Identifier",
    "value": "every",
    "start": 2798,
    "end": 2803
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2803,
    "end": 2804
  },
  {
    "type": "Identifier",
    "value": "fn",
    "start": 2804,
    "end": 2806
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2806,
    "end": 2807
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2808,
    "end": 2809
  },
  {
    "type": "Identifier",
    "value": "k",
    "start": 2809,
    "end": 2810
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2810,
    "end": 2811
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 2812,
    "end": 2818
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2818,
    "end": 2819
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 2820,
    "end": 2825
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2825,
    "end": 2826
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2827,
    "end": 2828
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2828,
    "end": 2829
  },
  {
    "type": "Identifier",
    "value": "context",
    "start": 2830,
    "end": 2837
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2837,
    "end": 2838
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 2839,
    "end": 2842
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2842,
    "end": 2843
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 2844,
    "end": 2846
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 2847,
    "end": 2851
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2851,
    "end": 2852
  },
  {
    "type": "Identifier",
    "value": "context",
    "start": 2853,
    "end": 2860
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2860,
    "end": 2861
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 2862,
    "end": 2865
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2865,
    "end": 2866
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2866,
    "end": 2867
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 2868,
    "end": 2875
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2875,
    "end": 2876
  },
  {
    "type": "Keyword",
    "value": "public",
    "start": 2885,
    "end": 2891
  },
  {
    "type": "Identifier",
    "value": "some",
    "start": 2892,
    "end": 2896
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2896,
    "end": 2897
  },
  {
    "type": "Identifier",
    "value": "fn",
    "start": 2897,
    "end": 2899
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2899,
    "end": 2900
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2901,
    "end": 2902
  },
  {
    "type": "Identifier",
    "value": "k",
    "start": 2902,
    "end": 2903
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2903,
    "end": 2904
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 2905,
    "end": 2911
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2911,
    "end": 2912
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 2913,
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
    "value": ",",
    "start": 2921,
    "end": 2922
  },
  {
    "type": "Identifier",
    "value": "context",
    "start": 2923,
    "end": 2930
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2930,
    "end": 2931
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 2932,
    "end": 2935
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2935,
    "end": 2936
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 2937,
    "end": 2939
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 2940,
    "end": 2944
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2944,
    "end": 2945
  },
  {
    "type": "Identifier",
    "value": "context",
    "start": 2946,
    "end": 2953
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2953,
    "end": 2954
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 2955,
    "end": 2958
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2958,
    "end": 2959
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2959,
    "end": 2960
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 2961,
    "end": 2968
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2968,
    "end": 2969
  },
  {
    "type": "Keyword",
    "value": "public",
    "start": 2978,
    "end": 2984
  },
  {
    "type": "Identifier",
    "value": "count",
    "start": 2985,
    "end": 2990
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2990,
    "end": 2991
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2991,
    "end": 2992
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2992,
    "end": 2993
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 2994,
    "end": 3000
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3000,
    "end": 3001
  },
  {
    "type": "Keyword",
    "value": "public",
    "start": 3010,
    "end": 3016
  },
  {
    "type": "Identifier",
    "value": "lookup",
    "start": 3017,
    "end": 3023
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3023,
    "end": 3024
  },
  {
    "type": "Identifier",
    "value": "key",
    "start": 3024,
    "end": 3027
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3027,
    "end": 3028
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 3029,
    "end": 3035
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3035,
    "end": 3036
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3036,
    "end": 3037
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 3038,
    "end": 3039
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3039,
    "end": 3040
  },
  {
    "type": "Keyword",
    "value": "public",
    "start": 3049,
    "end": 3055
  },
  {
    "type": "Identifier",
    "value": "remove",
    "start": 3056,
    "end": 3062
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3062,
    "end": 3063
  },
  {
    "type": "Identifier",
    "value": "key",
    "start": 3063,
    "end": 3066
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3066,
    "end": 3067
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 3068,
    "end": 3074
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3074,
    "end": 3075
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3075,
    "end": 3076
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 3077,
    "end": 3081
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3081,
    "end": 3082
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3087,
    "end": 3088
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 3093,
    "end": 3098
  },
  {
    "type": "Identifier",
    "value": "IdentifierNameHashTable",
    "start": 3099,
    "end": 3122
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 3122,
    "end": 3123
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 3123,
    "end": 3124
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 3124,
    "end": 3125
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 3126,
    "end": 3133
  },
  {
    "type": "Identifier",
    "value": "StringHashTable",
    "start": 3134,
    "end": 3149
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 3149,
    "end": 3150
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 3150,
    "end": 3151
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 3151,
    "end": 3152
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3153,
    "end": 3154
  },
  {
    "type": "Keyword",
    "value": "public",
    "start": 3163,
    "end": 3169
  },
  {
    "type": "Identifier",
    "value": "getAllKeys",
    "start": 3170,
    "end": 3180
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3180,
    "end": 3181
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3181,
    "end": 3182
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3182,
    "end": 3183
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 3184,
    "end": 3190
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 3190,
    "end": 3191
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 3191,
    "end": 3192
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3192,
    "end": 3193
  },
  {
    "type": "Keyword",
    "value": "public",
    "start": 3202,
    "end": 3208
  },
  {
    "type": "Identifier",
    "value": "add",
    "start": 3209,
    "end": 3212
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3212,
    "end": 3213
  },
  {
    "type": "Identifier",
    "value": "key",
    "start": 3213,
    "end": 3216
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3216,
    "end": 3217
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 3218,
    "end": 3224
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3224,
    "end": 3225
  },
  {
    "type": "Identifier",
    "value": "data",
    "start": 3226,
    "end": 3230
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3230,
    "end": 3231
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 3232,
    "end": 3233
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3233,
    "end": 3234
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3234,
    "end": 3235
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 3236,
    "end": 3243
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3243,
    "end": 3244
  },
  {
    "type": "Keyword",
    "value": "public",
    "start": 3253,
    "end": 3259
  },
  {
    "type": "Identifier",
    "value": "addOrUpdate",
    "start": 3260,
    "end": 3271
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3271,
    "end": 3272
  },
  {
    "type": "Identifier",
    "value": "key",
    "start": 3272,
    "end": 3275
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3275,
    "end": 3276
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 3277,
    "end": 3283
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3283,
    "end": 3284
  },
  {
    "type": "Identifier",
    "value": "data",
    "start": 3285,
    "end": 3289
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3289,
    "end": 3290
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 3291,
    "end": 3292
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3292,
    "end": 3293
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3293,
    "end": 3294
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 3295,
    "end": 3302
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3302,
    "end": 3303
  },
  {
    "type": "Keyword",
    "value": "public",
    "start": 3312,
    "end": 3318
  },
  {
    "type": "Identifier",
    "value": "map",
    "start": 3319,
    "end": 3322
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3322,
    "end": 3323
  },
  {
    "type": "Identifier",
    "value": "fn",
    "start": 3323,
    "end": 3325
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3325,
    "end": 3326
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3327,
    "end": 3328
  },
  {
    "type": "Identifier",
    "value": "k",
    "start": 3328,
    "end": 3329
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3329,
    "end": 3330
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 3331,
    "end": 3337
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3337,
    "end": 3338
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 3339,
    "end": 3344
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3344,
    "end": 3345
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 3346,
    "end": 3347
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3347,
    "end": 3348
  },
  {
    "type": "Identifier",
    "value": "context",
    "start": 3349,
    "end": 3356
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3356,
    "end": 3357
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 3358,
    "end": 3361
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3361,
    "end": 3362
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 3363,
    "end": 3365
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 3366,
    "end": 3370
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3370,
    "end": 3371
  },
  {
    "type": "Identifier",
    "value": "context",
    "start": 3372,
    "end": 3379
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3379,
    "end": 3380
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 3381,
    "end": 3384
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3384,
    "end": 3385
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3385,
    "end": 3386
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 3387,
    "end": 3391
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3391,
    "end": 3392
  },
  {
    "type": "Keyword",
    "value": "public",
    "start": 3401,
    "end": 3407
  },
  {
    "type": "Identifier",
    "value": "every",
    "start": 3408,
    "end": 3413
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3413,
    "end": 3414
  },
  {
    "type": "Identifier",
    "value": "fn",
    "start": 3414,
    "end": 3416
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3416,
    "end": 3417
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3418,
    "end": 3419
  },
  {
    "type": "Identifier",
    "value": "k",
    "start": 3419,
    "end": 3420
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3420,
    "end": 3421
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 3422,
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
    "value": "value",
    "start": 3430,
    "end": 3435
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3435,
    "end": 3436
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 3437,
    "end": 3438
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3438,
    "end": 3439
  },
  {
    "type": "Identifier",
    "value": "context",
    "start": 3440,
    "end": 3447
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3447,
    "end": 3448
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 3449,
    "end": 3452
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3452,
    "end": 3453
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 3454,
    "end": 3456
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 3457,
    "end": 3461
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3461,
    "end": 3462
  },
  {
    "type": "Identifier",
    "value": "context",
    "start": 3463,
    "end": 3470
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3470,
    "end": 3471
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 3472,
    "end": 3475
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3475,
    "end": 3476
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3476,
    "end": 3477
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 3478,
    "end": 3485
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3485,
    "end": 3486
  },
  {
    "type": "Keyword",
    "value": "public",
    "start": 3495,
    "end": 3501
  },
  {
    "type": "Identifier",
    "value": "some",
    "start": 3502,
    "end": 3506
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3506,
    "end": 3507
  },
  {
    "type": "Identifier",
    "value": "fn",
    "start": 3507,
    "end": 3509
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3509,
    "end": 3510
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3511,
    "end": 3512
  },
  {
    "type": "Identifier",
    "value": "k",
    "start": 3512,
    "end": 3513
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3513,
    "end": 3514
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 3515,
    "end": 3521
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3521,
    "end": 3522
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 3523,
    "end": 3528
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3528,
    "end": 3529
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 3530,
    "end": 3533
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3533,
    "end": 3534
  },
  {
    "type": "Identifier",
    "value": "context",
    "start": 3535,
    "end": 3542
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3542,
    "end": 3543
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 3544,
    "end": 3547
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3547,
    "end": 3548
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 3549,
    "end": 3551
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 3552,
    "end": 3556
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3556,
    "end": 3557
  },
  {
    "type": "Identifier",
    "value": "context",
    "start": 3558,
    "end": 3565
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3565,
    "end": 3566
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 3567,
    "end": 3570
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3570,
    "end": 3571
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3571,
    "end": 3572
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 3573,
    "end": 3580
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3580,
    "end": 3581
  },
  {
    "type": "Keyword",
    "value": "public",
    "start": 3590,
    "end": 3596
  },
  {
    "type": "Identifier",
    "value": "lookup",
    "start": 3597,
    "end": 3603
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3603,
    "end": 3604
  },
  {
    "type": "Identifier",
    "value": "key",
    "start": 3604,
    "end": 3607
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3607,
    "end": 3608
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 3609,
    "end": 3615
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3615,
    "end": 3616
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3616,
    "end": 3617
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 3618,
    "end": 3619
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3619,
    "end": 3620
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3625,
    "end": 3626
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3627,
    "end": 3628
  }
]
```
