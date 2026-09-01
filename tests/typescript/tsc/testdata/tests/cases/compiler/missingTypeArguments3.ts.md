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
        "name": "linq",
        "optional": false,
        "typeAnnotation": null,
        "start": 18,
        "end": 22
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "TSInterfaceDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "Enumerable",
              "optional": false,
              "typeAnnotation": null,
              "start": 40,
              "end": 50
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
                    "start": 51,
                    "end": 52
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 51,
                  "end": 52
                }
              ],
              "start": 50,
              "end": 53
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
                    "name": "OrderByDescending",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 64,
                    "end": 81
                  },
                  "computed": false,
                  "optional": false,
                  "kind": "method",
                  "typeParameters": null,
                  "params": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "keySelector",
                      "optional": true,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSStringKeyword",
                          "start": 96,
                          "end": 102
                        },
                        "start": 94,
                        "end": 102
                      },
                      "start": 82,
                      "end": 102
                    }
                  ],
                  "returnType": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "OrderedEnumerable",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 105,
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
                              "name": "T",
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
                      "start": 105,
                      "end": 125
                    },
                    "start": 103,
                    "end": 125
                  },
                  "accessibility": null,
                  "readonly": false,
                  "static": false,
                  "start": 64,
                  "end": 126
                },
                {
                  "type": "TSMethodSignature",
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "GroupBy",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 135,
                    "end": 142
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
                          "start": 143,
                          "end": 147
                        },
                        "constraint": null,
                        "default": null,
                        "in": false,
                        "out": false,
                        "const": false,
                        "start": 143,
                        "end": 147
                      }
                    ],
                    "start": 142,
                    "end": 148
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
                                    "start": 172,
                                    "end": 173
                                  },
                                  "typeArguments": null,
                                  "start": 172,
                                  "end": 173
                                },
                                "start": 170,
                                "end": 173
                              },
                              "start": 163,
                              "end": 173
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
                                "start": 178,
                                "end": 182
                              },
                              "typeArguments": null,
                              "start": 178,
                              "end": 182
                            },
                            "start": 175,
                            "end": 182
                          },
                          "start": 162,
                          "end": 182
                        },
                        "start": 160,
                        "end": 182
                      },
                      "start": 149,
                      "end": 182
                    }
                  ],
                  "returnType": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Enumerable",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 185,
                        "end": 195
                      },
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "params": [
                          {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "Grouping",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 196,
                              "end": 204
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
                                    "start": 205,
                                    "end": 209
                                  },
                                  "typeArguments": null,
                                  "start": 205,
                                  "end": 209
                                },
                                {
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
                                }
                              ],
                              "start": 204,
                              "end": 213
                            },
                            "start": 196,
                            "end": 213
                          }
                        ],
                        "start": 195,
                        "end": 214
                      },
                      "start": 185,
                      "end": 214
                    },
                    "start": 183,
                    "end": 214
                  },
                  "accessibility": null,
                  "readonly": false,
                  "static": false,
                  "start": 135,
                  "end": 215
                },
                {
                  "type": "TSMethodSignature",
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "GroupBy",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 224,
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
                          "name": "TKey",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 232,
                          "end": 236
                        },
                        "constraint": null,
                        "default": null,
                        "in": false,
                        "out": false,
                        "const": false,
                        "start": 232,
                        "end": 236
                      },
                      {
                        "type": "TSTypeParameter",
                        "name": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "TElement",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 238,
                          "end": 246
                        },
                        "constraint": null,
                        "default": null,
                        "in": false,
                        "out": false,
                        "const": false,
                        "start": 238,
                        "end": 246
                      }
                    ],
                    "start": 231,
                    "end": 247
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
                                    "start": 271,
                                    "end": 272
                                  },
                                  "typeArguments": null,
                                  "start": 271,
                                  "end": 272
                                },
                                "start": 269,
                                "end": 272
                              },
                              "start": 262,
                              "end": 272
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
                                "start": 277,
                                "end": 281
                              },
                              "typeArguments": null,
                              "start": 277,
                              "end": 281
                            },
                            "start": 274,
                            "end": 281
                          },
                          "start": 261,
                          "end": 281
                        },
                        "start": 259,
                        "end": 281
                      },
                      "start": 248,
                      "end": 281
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
                                    "start": 310,
                                    "end": 311
                                  },
                                  "typeArguments": null,
                                  "start": 310,
                                  "end": 311
                                },
                                "start": 308,
                                "end": 311
                              },
                              "start": 301,
                              "end": 311
                            }
                          ],
                          "returnType": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "TElement",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 316,
                                "end": 324
                              },
                              "typeArguments": null,
                              "start": 316,
                              "end": 324
                            },
                            "start": 313,
                            "end": 324
                          },
                          "start": 300,
                          "end": 324
                        },
                        "start": 298,
                        "end": 324
                      },
                      "start": 283,
                      "end": 324
                    }
                  ],
                  "returnType": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Enumerable",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 327,
                        "end": 337
                      },
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "params": [
                          {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "Grouping",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 338,
                              "end": 346
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
                                    "start": 347,
                                    "end": 351
                                  },
                                  "typeArguments": null,
                                  "start": 347,
                                  "end": 351
                                },
                                {
                                  "type": "TSTypeReference",
                                  "typeName": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "TElement",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 353,
                                    "end": 361
                                  },
                                  "typeArguments": null,
                                  "start": 353,
                                  "end": 361
                                }
                              ],
                              "start": 346,
                              "end": 362
                            },
                            "start": 338,
                            "end": 362
                          }
                        ],
                        "start": 337,
                        "end": 363
                      },
                      "start": 327,
                      "end": 363
                    },
                    "start": 325,
                    "end": 363
                  },
                  "accessibility": null,
                  "readonly": false,
                  "static": false,
                  "start": 224,
                  "end": 364
                },
                {
                  "type": "TSMethodSignature",
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "ToDictionary",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 373,
                    "end": 385
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
                          "start": 386,
                          "end": 390
                        },
                        "constraint": null,
                        "default": null,
                        "in": false,
                        "out": false,
                        "const": false,
                        "start": 386,
                        "end": 390
                      }
                    ],
                    "start": 385,
                    "end": 391
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
                                    "start": 415,
                                    "end": 416
                                  },
                                  "typeArguments": null,
                                  "start": 415,
                                  "end": 416
                                },
                                "start": 413,
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
                                "name": "TKey",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 421,
                                "end": 425
                              },
                              "typeArguments": null,
                              "start": 421,
                              "end": 425
                            },
                            "start": 418,
                            "end": 425
                          },
                          "start": 405,
                          "end": 425
                        },
                        "start": 403,
                        "end": 425
                      },
                      "start": 392,
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
                        "name": "Dictionary",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 428,
                        "end": 438
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
                              "start": 439,
                              "end": 443
                            },
                            "typeArguments": null,
                            "start": 439,
                            "end": 443
                          },
                          {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "T",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 445,
                              "end": 446
                            },
                            "typeArguments": null,
                            "start": 445,
                            "end": 446
                          }
                        ],
                        "start": 438,
                        "end": 447
                      },
                      "start": 428,
                      "end": 447
                    },
                    "start": 426,
                    "end": 447
                  },
                  "accessibility": null,
                  "readonly": false,
                  "static": false,
                  "start": 373,
                  "end": 448
                }
              ],
              "start": 54,
              "end": 454
            },
            "declare": false,
            "start": 30,
            "end": 454
          },
          {
            "type": "TSInterfaceDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "OrderedEnumerable",
              "optional": false,
              "typeAnnotation": null,
              "start": 470,
              "end": 487
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
                    "start": 488,
                    "end": 489
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 488,
                  "end": 489
                }
              ],
              "start": 487,
              "end": 490
            },
            "extends": [
              {
                "type": "TSInterfaceHeritage",
                "expression": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Enumerable",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 499,
                  "end": 509
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
                        "start": 510,
                        "end": 511
                      },
                      "typeArguments": null,
                      "start": 510,
                      "end": 511
                    }
                  ],
                  "start": 509,
                  "end": 512
                },
                "start": 499,
                "end": 512
              }
            ],
            "body": {
              "type": "TSInterfaceBody",
              "body": [
                {
                  "type": "TSMethodSignature",
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "ThenBy",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 523,
                    "end": 529
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
                          "start": 530,
                          "end": 538
                        },
                        "constraint": null,
                        "default": null,
                        "in": false,
                        "out": false,
                        "const": false,
                        "start": 530,
                        "end": 538
                      }
                    ],
                    "start": 529,
                    "end": 539
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
                                    "start": 563,
                                    "end": 564
                                  },
                                  "typeArguments": null,
                                  "start": 563,
                                  "end": 564
                                },
                                "start": 561,
                                "end": 564
                              },
                              "start": 554,
                              "end": 564
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
                                "start": 569,
                                "end": 577
                              },
                              "typeArguments": null,
                              "start": 569,
                              "end": 577
                            },
                            "start": 566,
                            "end": 577
                          },
                          "start": 553,
                          "end": 577
                        },
                        "start": 551,
                        "end": 577
                      },
                      "start": 540,
                      "end": 577
                    }
                  ],
                  "returnType": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "OrderedEnumerable",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 580,
                        "end": 597
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
                              "start": 598,
                              "end": 599
                            },
                            "typeArguments": null,
                            "start": 598,
                            "end": 599
                          }
                        ],
                        "start": 597,
                        "end": 600
                      },
                      "start": 580,
                      "end": 600
                    },
                    "start": 578,
                    "end": 600
                  },
                  "accessibility": null,
                  "readonly": false,
                  "static": false,
                  "start": 523,
                  "end": 601
                }
              ],
              "start": 513,
              "end": 669
            },
            "declare": false,
            "start": 460,
            "end": 669
          },
          {
            "type": "TSInterfaceDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "Grouping",
              "optional": false,
              "typeAnnotation": null,
              "start": 685,
              "end": 693
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
                    "start": 694,
                    "end": 698
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 694,
                  "end": 698
                },
                {
                  "type": "TSTypeParameter",
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "TElement",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 700,
                    "end": 708
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 700,
                  "end": 708
                }
              ],
              "start": 693,
              "end": 709
            },
            "extends": [
              {
                "type": "TSInterfaceHeritage",
                "expression": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Enumerable",
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
                        "name": "TElement",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 729,
                        "end": 737
                      },
                      "typeArguments": null,
                      "start": 729,
                      "end": 737
                    }
                  ],
                  "start": 728,
                  "end": 738
                },
                "start": 718,
                "end": 738
              }
            ],
            "body": {
              "type": "TSInterfaceBody",
              "body": [
                {
                  "type": "TSMethodSignature",
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Key",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 749,
                    "end": 752
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
                        "name": "TKey",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 756,
                        "end": 760
                      },
                      "typeArguments": null,
                      "start": 756,
                      "end": 760
                    },
                    "start": 754,
                    "end": 760
                  },
                  "accessibility": null,
                  "readonly": false,
                  "static": false,
                  "start": 749,
                  "end": 761
                }
              ],
              "start": 739,
              "end": 767
            },
            "declare": false,
            "start": 675,
            "end": 767
          },
          {
            "type": "TSInterfaceDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "Lookup",
              "optional": false,
              "typeAnnotation": null,
              "start": 783,
              "end": 789
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
                    "start": 790,
                    "end": 794
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 790,
                  "end": 794
                },
                {
                  "type": "TSTypeParameter",
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "TElement",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 796,
                    "end": 804
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 796,
                  "end": 804
                }
              ],
              "start": 789,
              "end": 805
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
                    "name": "Count",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 816,
                    "end": 821
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
                      "start": 825,
                      "end": 831
                    },
                    "start": 823,
                    "end": 831
                  },
                  "accessibility": null,
                  "readonly": false,
                  "static": false,
                  "start": 816,
                  "end": 832
                },
                {
                  "type": "TSMethodSignature",
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Get",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 841,
                    "end": 844
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
                      "typeAnnotation": null,
                      "start": 845,
                      "end": 848
                    }
                  ],
                  "returnType": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Enumerable",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 851,
                        "end": 861
                      },
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "params": [
                          {
                            "type": "TSAnyKeyword",
                            "start": 862,
                            "end": 865
                          }
                        ],
                        "start": 861,
                        "end": 866
                      },
                      "start": 851,
                      "end": 866
                    },
                    "start": 849,
                    "end": 866
                  },
                  "accessibility": null,
                  "readonly": false,
                  "static": false,
                  "start": 841,
                  "end": 867
                },
                {
                  "type": "TSMethodSignature",
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Contains",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 876,
                    "end": 884
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
                      "typeAnnotation": null,
                      "start": 885,
                      "end": 888
                    }
                  ],
                  "returnType": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSBooleanKeyword",
                      "start": 891,
                      "end": 898
                    },
                    "start": 889,
                    "end": 898
                  },
                  "accessibility": null,
                  "readonly": false,
                  "static": false,
                  "start": 876,
                  "end": 899
                },
                {
                  "type": "TSMethodSignature",
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "ToEnumerable",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 908,
                    "end": 920
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
                        "name": "Enumerable",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 924,
                        "end": 934
                      },
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "params": [
                          {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "Grouping",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 935,
                              "end": 943
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
                                    "start": 944,
                                    "end": 948
                                  },
                                  "typeArguments": null,
                                  "start": 944,
                                  "end": 948
                                },
                                {
                                  "type": "TSAnyKeyword",
                                  "start": 950,
                                  "end": 953
                                }
                              ],
                              "start": 943,
                              "end": 954
                            },
                            "start": 935,
                            "end": 954
                          }
                        ],
                        "start": 934,
                        "end": 955
                      },
                      "start": 924,
                      "end": 955
                    },
                    "start": 922,
                    "end": 955
                  },
                  "accessibility": null,
                  "readonly": false,
                  "static": false,
                  "start": 908,
                  "end": 956
                }
              ],
              "start": 806,
              "end": 962
            },
            "declare": false,
            "start": 773,
            "end": 962
          },
          {
            "type": "TSInterfaceDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "Dictionary",
              "optional": false,
              "typeAnnotation": null,
              "start": 978,
              "end": 988
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
                    "start": 989,
                    "end": 993
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 989,
                  "end": 993
                },
                {
                  "type": "TSTypeParameter",
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "TValue",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 995,
                    "end": 1001
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 995,
                  "end": 1001
                }
              ],
              "start": 988,
              "end": 1002
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
                    "name": "Add",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1013,
                    "end": 1016
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
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "TKey",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1022,
                            "end": 1026
                          },
                          "typeArguments": null,
                          "start": 1022,
                          "end": 1026
                        },
                        "start": 1020,
                        "end": 1026
                      },
                      "start": 1017,
                      "end": 1026
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
                            "name": "TValue",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1035,
                            "end": 1041
                          },
                          "typeArguments": null,
                          "start": 1035,
                          "end": 1041
                        },
                        "start": 1033,
                        "end": 1041
                      },
                      "start": 1028,
                      "end": 1041
                    }
                  ],
                  "returnType": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSVoidKeyword",
                      "start": 1044,
                      "end": 1048
                    },
                    "start": 1042,
                    "end": 1048
                  },
                  "accessibility": null,
                  "readonly": false,
                  "static": false,
                  "start": 1013,
                  "end": 1049
                },
                {
                  "type": "TSMethodSignature",
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Get",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1058,
                    "end": 1061
                  },
                  "computed": false,
                  "optional": false,
                  "kind": "method",
                  "typeParameters": null,
                  "params": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "ke",
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
                            "start": 1066,
                            "end": 1070
                          },
                          "typeArguments": null,
                          "start": 1066,
                          "end": 1070
                        },
                        "start": 1064,
                        "end": 1070
                      },
                      "start": 1062,
                      "end": 1070
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
                        "start": 1073,
                        "end": 1079
                      },
                      "typeArguments": null,
                      "start": 1073,
                      "end": 1079
                    },
                    "start": 1071,
                    "end": 1079
                  },
                  "accessibility": null,
                  "readonly": false,
                  "static": false,
                  "start": 1058,
                  "end": 1080
                },
                {
                  "type": "TSMethodSignature",
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Set",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1089,
                    "end": 1092
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
                        "start": 1096,
                        "end": 1102
                      },
                      "start": 1093,
                      "end": 1102
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
                            "name": "TValue",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1111,
                            "end": 1117
                          },
                          "typeArguments": null,
                          "start": 1111,
                          "end": 1117
                        },
                        "start": 1109,
                        "end": 1117
                      },
                      "start": 1104,
                      "end": 1117
                    }
                  ],
                  "returnType": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSBooleanKeyword",
                      "start": 1120,
                      "end": 1127
                    },
                    "start": 1118,
                    "end": 1127
                  },
                  "accessibility": null,
                  "readonly": false,
                  "static": false,
                  "start": 1089,
                  "end": 1128
                },
                {
                  "type": "TSMethodSignature",
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Contains",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1137,
                    "end": 1145
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
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "TKey",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1151,
                            "end": 1155
                          },
                          "typeArguments": null,
                          "start": 1151,
                          "end": 1155
                        },
                        "start": 1149,
                        "end": 1155
                      },
                      "start": 1146,
                      "end": 1155
                    }
                  ],
                  "returnType": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSBooleanKeyword",
                      "start": 1158,
                      "end": 1165
                    },
                    "start": 1156,
                    "end": 1165
                  },
                  "accessibility": null,
                  "readonly": false,
                  "static": false,
                  "start": 1137,
                  "end": 1166
                },
                {
                  "type": "TSMethodSignature",
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Clear",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1175,
                    "end": 1180
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
                      "start": 1184,
                      "end": 1188
                    },
                    "start": 1182,
                    "end": 1188
                  },
                  "accessibility": null,
                  "readonly": false,
                  "static": false,
                  "start": 1175,
                  "end": 1189
                },
                {
                  "type": "TSMethodSignature",
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Remove",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1198,
                    "end": 1204
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
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "TKey",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1210,
                            "end": 1214
                          },
                          "typeArguments": null,
                          "start": 1210,
                          "end": 1214
                        },
                        "start": 1208,
                        "end": 1214
                      },
                      "start": 1205,
                      "end": 1214
                    }
                  ],
                  "returnType": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSVoidKeyword",
                      "start": 1217,
                      "end": 1221
                    },
                    "start": 1215,
                    "end": 1221
                  },
                  "accessibility": null,
                  "readonly": false,
                  "static": false,
                  "start": 1198,
                  "end": 1222
                },
                {
                  "type": "TSMethodSignature",
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Count",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1231,
                    "end": 1236
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
                      "start": 1240,
                      "end": 1246
                    },
                    "start": 1238,
                    "end": 1246
                  },
                  "accessibility": null,
                  "readonly": false,
                  "static": false,
                  "start": 1231,
                  "end": 1247
                },
                {
                  "type": "TSMethodSignature",
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "ToEnumerable",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1256,
                    "end": 1268
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
                        "name": "Enumerable",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1272,
                        "end": 1282
                      },
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "params": [
                          {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "KeyValuePair",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 1283,
                              "end": 1295
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
                                    "start": 1296,
                                    "end": 1300
                                  },
                                  "typeArguments": null,
                                  "start": 1296,
                                  "end": 1300
                                },
                                {
                                  "type": "TSTypeReference",
                                  "typeName": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "TValue",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 1302,
                                    "end": 1308
                                  },
                                  "typeArguments": null,
                                  "start": 1302,
                                  "end": 1308
                                }
                              ],
                              "start": 1295,
                              "end": 1309
                            },
                            "start": 1283,
                            "end": 1309
                          }
                        ],
                        "start": 1282,
                        "end": 1310
                      },
                      "start": 1272,
                      "end": 1310
                    },
                    "start": 1270,
                    "end": 1310
                  },
                  "accessibility": null,
                  "readonly": false,
                  "static": false,
                  "start": 1256,
                  "end": 1311
                }
              ],
              "start": 1003,
              "end": 1317
            },
            "declare": false,
            "start": 968,
            "end": 1317
          },
          {
            "type": "TSInterfaceDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "KeyValuePair",
              "optional": false,
              "typeAnnotation": null,
              "start": 1333,
              "end": 1345
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
                    "start": 1346,
                    "end": 1350
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 1346,
                  "end": 1350
                },
                {
                  "type": "TSTypeParameter",
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "TValue",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1352,
                    "end": 1358
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 1352,
                  "end": 1358
                }
              ],
              "start": 1345,
              "end": 1359
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
                    "name": "Key",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1370,
                    "end": 1373
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
                        "start": 1375,
                        "end": 1379
                      },
                      "typeArguments": null,
                      "start": 1375,
                      "end": 1379
                    },
                    "start": 1373,
                    "end": 1379
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 1370,
                  "end": 1380
                },
                {
                  "type": "TSPropertySignature",
                  "computed": false,
                  "optional": false,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Value",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1389,
                    "end": 1394
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
                        "start": 1396,
                        "end": 1402
                      },
                      "typeArguments": null,
                      "start": 1396,
                      "end": 1402
                    },
                    "start": 1394,
                    "end": 1402
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 1389,
                  "end": 1403
                }
              ],
              "start": 1360,
              "end": 1409
            },
            "declare": false,
            "start": 1323,
            "end": 1409
          }
        ],
        "start": 23,
        "end": 1411
      },
      "kind": "namespace",
      "declare": true,
      "global": false,
      "start": 0,
      "end": 1411
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 1411
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
    "value": "linq",
    "start": 18,
    "end": 22
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 23,
    "end": 24
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 30,
    "end": 39
  },
  {
    "type": "Identifier",
    "value": "Enumerable",
    "start": 40,
    "end": 50
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 50,
    "end": 51
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 51,
    "end": 52
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 52,
    "end": 53
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 54,
    "end": 55
  },
  {
    "type": "Identifier",
    "value": "OrderByDescending",
    "start": 64,
    "end": 81
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 81,
    "end": 82
  },
  {
    "type": "Identifier",
    "value": "keySelector",
    "start": 82,
    "end": 93
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 93,
    "end": 94
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 94,
    "end": 95
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 96,
    "end": 102
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 102,
    "end": 103
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 103,
    "end": 104
  },
  {
    "type": "Identifier",
    "value": "OrderedEnumerable",
    "start": 105,
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
    "value": "T",
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
    "value": ";",
    "start": 125,
    "end": 126
  },
  {
    "type": "Identifier",
    "value": "GroupBy",
    "start": 135,
    "end": 142
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 142,
    "end": 143
  },
  {
    "type": "Identifier",
    "value": "TKey",
    "start": 143,
    "end": 147
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 147,
    "end": 148
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 148,
    "end": 149
  },
  {
    "type": "Identifier",
    "value": "keySelector",
    "start": 149,
    "end": 160
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 160,
    "end": 161
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 162,
    "end": 163
  },
  {
    "type": "Identifier",
    "value": "element",
    "start": 163,
    "end": 170
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 170,
    "end": 171
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 172,
    "end": 173
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 173,
    "end": 174
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 175,
    "end": 177
  },
  {
    "type": "Identifier",
    "value": "TKey",
    "start": 178,
    "end": 182
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 182,
    "end": 183
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 183,
    "end": 184
  },
  {
    "type": "Identifier",
    "value": "Enumerable",
    "start": 185,
    "end": 195
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 195,
    "end": 196
  },
  {
    "type": "Identifier",
    "value": "Grouping",
    "start": 196,
    "end": 204
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 204,
    "end": 205
  },
  {
    "type": "Identifier",
    "value": "TKey",
    "start": 205,
    "end": 209
  },
  {
    "type": "Punctuator",
    "value": ",",
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
    "value": ">",
    "start": 212,
    "end": 213
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 213,
    "end": 214
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 214,
    "end": 215
  },
  {
    "type": "Identifier",
    "value": "GroupBy",
    "start": 224,
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
    "value": "TKey",
    "start": 232,
    "end": 236
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 236,
    "end": 237
  },
  {
    "type": "Identifier",
    "value": "TElement",
    "start": 238,
    "end": 246
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 246,
    "end": 247
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 247,
    "end": 248
  },
  {
    "type": "Identifier",
    "value": "keySelector",
    "start": 248,
    "end": 259
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 259,
    "end": 260
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 261,
    "end": 262
  },
  {
    "type": "Identifier",
    "value": "element",
    "start": 262,
    "end": 269
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 269,
    "end": 270
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 271,
    "end": 272
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 272,
    "end": 273
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 274,
    "end": 276
  },
  {
    "type": "Identifier",
    "value": "TKey",
    "start": 277,
    "end": 281
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 281,
    "end": 282
  },
  {
    "type": "Identifier",
    "value": "elementSelector",
    "start": 283,
    "end": 298
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 298,
    "end": 299
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 300,
    "end": 301
  },
  {
    "type": "Identifier",
    "value": "element",
    "start": 301,
    "end": 308
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 308,
    "end": 309
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 310,
    "end": 311
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 311,
    "end": 312
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 313,
    "end": 315
  },
  {
    "type": "Identifier",
    "value": "TElement",
    "start": 316,
    "end": 324
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 324,
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
    "value": "Enumerable",
    "start": 327,
    "end": 337
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 337,
    "end": 338
  },
  {
    "type": "Identifier",
    "value": "Grouping",
    "start": 338,
    "end": 346
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 346,
    "end": 347
  },
  {
    "type": "Identifier",
    "value": "TKey",
    "start": 347,
    "end": 351
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 351,
    "end": 352
  },
  {
    "type": "Identifier",
    "value": "TElement",
    "start": 353,
    "end": 361
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 361,
    "end": 362
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 362,
    "end": 363
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 363,
    "end": 364
  },
  {
    "type": "Identifier",
    "value": "ToDictionary",
    "start": 373,
    "end": 385
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 385,
    "end": 386
  },
  {
    "type": "Identifier",
    "value": "TKey",
    "start": 386,
    "end": 390
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 390,
    "end": 391
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 391,
    "end": 392
  },
  {
    "type": "Identifier",
    "value": "keySelector",
    "start": 392,
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
    "value": "element",
    "start": 406,
    "end": 413
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 413,
    "end": 414
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 415,
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
    "value": "TKey",
    "start": 421,
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
    "value": ":",
    "start": 426,
    "end": 427
  },
  {
    "type": "Identifier",
    "value": "Dictionary",
    "start": 428,
    "end": 438
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 438,
    "end": 439
  },
  {
    "type": "Identifier",
    "value": "TKey",
    "start": 439,
    "end": 443
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 443,
    "end": 444
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 445,
    "end": 446
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 446,
    "end": 447
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 447,
    "end": 448
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 453,
    "end": 454
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 460,
    "end": 469
  },
  {
    "type": "Identifier",
    "value": "OrderedEnumerable",
    "start": 470,
    "end": 487
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 487,
    "end": 488
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 488,
    "end": 489
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 489,
    "end": 490
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 491,
    "end": 498
  },
  {
    "type": "Identifier",
    "value": "Enumerable",
    "start": 499,
    "end": 509
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 509,
    "end": 510
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 510,
    "end": 511
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 511,
    "end": 512
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 513,
    "end": 514
  },
  {
    "type": "Identifier",
    "value": "ThenBy",
    "start": 523,
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
    "value": "TCompare",
    "start": 530,
    "end": 538
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 538,
    "end": 539
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 539,
    "end": 540
  },
  {
    "type": "Identifier",
    "value": "keySelector",
    "start": 540,
    "end": 551
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 551,
    "end": 552
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 553,
    "end": 554
  },
  {
    "type": "Identifier",
    "value": "element",
    "start": 554,
    "end": 561
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 561,
    "end": 562
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 563,
    "end": 564
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 564,
    "end": 565
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 566,
    "end": 568
  },
  {
    "type": "Identifier",
    "value": "TCompare",
    "start": 569,
    "end": 577
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 577,
    "end": 578
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 578,
    "end": 579
  },
  {
    "type": "Identifier",
    "value": "OrderedEnumerable",
    "start": 580,
    "end": 597
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 597,
    "end": 598
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 598,
    "end": 599
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 599,
    "end": 600
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 600,
    "end": 601
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 668,
    "end": 669
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 675,
    "end": 684
  },
  {
    "type": "Identifier",
    "value": "Grouping",
    "start": 685,
    "end": 693
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 693,
    "end": 694
  },
  {
    "type": "Identifier",
    "value": "TKey",
    "start": 694,
    "end": 698
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 698,
    "end": 699
  },
  {
    "type": "Identifier",
    "value": "TElement",
    "start": 700,
    "end": 708
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 708,
    "end": 709
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 710,
    "end": 717
  },
  {
    "type": "Identifier",
    "value": "Enumerable",
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
    "value": "TElement",
    "start": 729,
    "end": 737
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 737,
    "end": 738
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 739,
    "end": 740
  },
  {
    "type": "Identifier",
    "value": "Key",
    "start": 749,
    "end": 752
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 752,
    "end": 753
  },
  {
    "type": "Punctuator",
    "value": ")",
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
    "type": "Identifier",
    "value": "TKey",
    "start": 756,
    "end": 760
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 760,
    "end": 761
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 766,
    "end": 767
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 773,
    "end": 782
  },
  {
    "type": "Identifier",
    "value": "Lookup",
    "start": 783,
    "end": 789
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 789,
    "end": 790
  },
  {
    "type": "Identifier",
    "value": "TKey",
    "start": 790,
    "end": 794
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 794,
    "end": 795
  },
  {
    "type": "Identifier",
    "value": "TElement",
    "start": 796,
    "end": 804
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 804,
    "end": 805
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 806,
    "end": 807
  },
  {
    "type": "Identifier",
    "value": "Count",
    "start": 816,
    "end": 821
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 821,
    "end": 822
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 822,
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
    "value": "number",
    "start": 825,
    "end": 831
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 831,
    "end": 832
  },
  {
    "type": "Identifier",
    "value": "Get",
    "start": 841,
    "end": 844
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 844,
    "end": 845
  },
  {
    "type": "Identifier",
    "value": "key",
    "start": 845,
    "end": 848
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 848,
    "end": 849
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 849,
    "end": 850
  },
  {
    "type": "Identifier",
    "value": "Enumerable",
    "start": 851,
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
    "value": "any",
    "start": 862,
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
    "value": ";",
    "start": 866,
    "end": 867
  },
  {
    "type": "Identifier",
    "value": "Contains",
    "start": 876,
    "end": 884
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 884,
    "end": 885
  },
  {
    "type": "Identifier",
    "value": "key",
    "start": 885,
    "end": 888
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 888,
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
    "value": "boolean",
    "start": 891,
    "end": 898
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 898,
    "end": 899
  },
  {
    "type": "Identifier",
    "value": "ToEnumerable",
    "start": 908,
    "end": 920
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 920,
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
    "value": ":",
    "start": 922,
    "end": 923
  },
  {
    "type": "Identifier",
    "value": "Enumerable",
    "start": 924,
    "end": 934
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 934,
    "end": 935
  },
  {
    "type": "Identifier",
    "value": "Grouping",
    "start": 935,
    "end": 943
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 943,
    "end": 944
  },
  {
    "type": "Identifier",
    "value": "TKey",
    "start": 944,
    "end": 948
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 948,
    "end": 949
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 950,
    "end": 953
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 953,
    "end": 954
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 954,
    "end": 955
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 955,
    "end": 956
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 961,
    "end": 962
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 968,
    "end": 977
  },
  {
    "type": "Identifier",
    "value": "Dictionary",
    "start": 978,
    "end": 988
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 988,
    "end": 989
  },
  {
    "type": "Identifier",
    "value": "TKey",
    "start": 989,
    "end": 993
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 993,
    "end": 994
  },
  {
    "type": "Identifier",
    "value": "TValue",
    "start": 995,
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
    "value": "{",
    "start": 1003,
    "end": 1004
  },
  {
    "type": "Identifier",
    "value": "Add",
    "start": 1013,
    "end": 1016
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1016,
    "end": 1017
  },
  {
    "type": "Identifier",
    "value": "key",
    "start": 1017,
    "end": 1020
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1020,
    "end": 1021
  },
  {
    "type": "Identifier",
    "value": "TKey",
    "start": 1022,
    "end": 1026
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1026,
    "end": 1027
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 1028,
    "end": 1033
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1033,
    "end": 1034
  },
  {
    "type": "Identifier",
    "value": "TValue",
    "start": 1035,
    "end": 1041
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1041,
    "end": 1042
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1042,
    "end": 1043
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 1044,
    "end": 1048
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1048,
    "end": 1049
  },
  {
    "type": "Identifier",
    "value": "Get",
    "start": 1058,
    "end": 1061
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1061,
    "end": 1062
  },
  {
    "type": "Identifier",
    "value": "ke",
    "start": 1062,
    "end": 1064
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1064,
    "end": 1065
  },
  {
    "type": "Identifier",
    "value": "TKey",
    "start": 1066,
    "end": 1070
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1070,
    "end": 1071
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1071,
    "end": 1072
  },
  {
    "type": "Identifier",
    "value": "TValue",
    "start": 1073,
    "end": 1079
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1079,
    "end": 1080
  },
  {
    "type": "Identifier",
    "value": "Set",
    "start": 1089,
    "end": 1092
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1092,
    "end": 1093
  },
  {
    "type": "Identifier",
    "value": "key",
    "start": 1093,
    "end": 1096
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1096,
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
    "value": "value",
    "start": 1104,
    "end": 1109
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1109,
    "end": 1110
  },
  {
    "type": "Identifier",
    "value": "TValue",
    "start": 1111,
    "end": 1117
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1117,
    "end": 1118
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1118,
    "end": 1119
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 1120,
    "end": 1127
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1127,
    "end": 1128
  },
  {
    "type": "Identifier",
    "value": "Contains",
    "start": 1137,
    "end": 1145
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1145,
    "end": 1146
  },
  {
    "type": "Identifier",
    "value": "key",
    "start": 1146,
    "end": 1149
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1149,
    "end": 1150
  },
  {
    "type": "Identifier",
    "value": "TKey",
    "start": 1151,
    "end": 1155
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1155,
    "end": 1156
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1156,
    "end": 1157
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 1158,
    "end": 1165
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1165,
    "end": 1166
  },
  {
    "type": "Identifier",
    "value": "Clear",
    "start": 1175,
    "end": 1180
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1180,
    "end": 1181
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1181,
    "end": 1182
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1182,
    "end": 1183
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 1184,
    "end": 1188
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1188,
    "end": 1189
  },
  {
    "type": "Identifier",
    "value": "Remove",
    "start": 1198,
    "end": 1204
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1204,
    "end": 1205
  },
  {
    "type": "Identifier",
    "value": "key",
    "start": 1205,
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
    "value": "TKey",
    "start": 1210,
    "end": 1214
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1214,
    "end": 1215
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1215,
    "end": 1216
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 1217,
    "end": 1221
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1221,
    "end": 1222
  },
  {
    "type": "Identifier",
    "value": "Count",
    "start": 1231,
    "end": 1236
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1236,
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
    "value": "number",
    "start": 1240,
    "end": 1246
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1246,
    "end": 1247
  },
  {
    "type": "Identifier",
    "value": "ToEnumerable",
    "start": 1256,
    "end": 1268
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1268,
    "end": 1269
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1269,
    "end": 1270
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1270,
    "end": 1271
  },
  {
    "type": "Identifier",
    "value": "Enumerable",
    "start": 1272,
    "end": 1282
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1282,
    "end": 1283
  },
  {
    "type": "Identifier",
    "value": "KeyValuePair",
    "start": 1283,
    "end": 1295
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1295,
    "end": 1296
  },
  {
    "type": "Identifier",
    "value": "TKey",
    "start": 1296,
    "end": 1300
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1300,
    "end": 1301
  },
  {
    "type": "Identifier",
    "value": "TValue",
    "start": 1302,
    "end": 1308
  },
  {
    "type": "Punctuator",
    "value": ">",
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
    "type": "Punctuator",
    "value": ";",
    "start": 1310,
    "end": 1311
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1316,
    "end": 1317
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 1323,
    "end": 1332
  },
  {
    "type": "Identifier",
    "value": "KeyValuePair",
    "start": 1333,
    "end": 1345
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1345,
    "end": 1346
  },
  {
    "type": "Identifier",
    "value": "TKey",
    "start": 1346,
    "end": 1350
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1350,
    "end": 1351
  },
  {
    "type": "Identifier",
    "value": "TValue",
    "start": 1352,
    "end": 1358
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1358,
    "end": 1359
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1360,
    "end": 1361
  },
  {
    "type": "Identifier",
    "value": "Key",
    "start": 1370,
    "end": 1373
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1373,
    "end": 1374
  },
  {
    "type": "Identifier",
    "value": "TKey",
    "start": 1375,
    "end": 1379
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1379,
    "end": 1380
  },
  {
    "type": "Identifier",
    "value": "Value",
    "start": 1389,
    "end": 1394
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1394,
    "end": 1395
  },
  {
    "type": "Identifier",
    "value": "TValue",
    "start": 1396,
    "end": 1402
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1402,
    "end": 1403
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1408,
    "end": 1409
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1410,
    "end": 1411
  }
]
```
