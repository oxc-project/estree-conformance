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
        "name": "Values",
        "optional": false,
        "typeAnnotation": null,
        "start": 62,
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
      "typeAnnotation": {
        "type": "TSIndexedAccessType",
        "objectType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "T",
            "optional": false,
            "typeAnnotation": null,
            "start": 74,
            "end": 75
          },
          "typeArguments": null,
          "start": 74,
          "end": 75
        },
        "indexType": {
          "type": "TSTypeOperator",
          "operator": "keyof",
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
          "start": 76,
          "end": 83
        },
        "start": 74,
        "end": 84
      },
      "declare": false,
      "start": 57,
      "end": 85
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "ProvidedActor",
        "optional": false,
        "typeAnnotation": null,
        "start": 92,
        "end": 105
      },
      "typeParameters": null,
      "typeAnnotation": {
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
              "name": "src",
              "optional": false,
              "typeAnnotation": null,
              "start": 112,
              "end": 115
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 117,
                "end": 123
              },
              "start": 115,
              "end": 123
            },
            "accessibility": null,
            "static": false,
            "start": 112,
            "end": 124
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "logic",
              "optional": false,
              "typeAnnotation": null,
              "start": 127,
              "end": 132
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSUnknownKeyword",
                "start": 134,
                "end": 141
              },
              "start": 132,
              "end": 141
            },
            "accessibility": null,
            "static": false,
            "start": 127,
            "end": 142
          }
        ],
        "start": 108,
        "end": 144
      },
      "declare": false,
      "start": 87,
      "end": 145
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "StateMachineConfig",
        "optional": false,
        "typeAnnotation": null,
        "start": 157,
        "end": 175
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "TActors",
              "optional": false,
              "typeAnnotation": null,
              "start": 176,
              "end": 183
            },
            "constraint": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "ProvidedActor",
                "optional": false,
                "typeAnnotation": null,
                "start": 192,
                "end": 205
              },
              "typeArguments": null,
              "start": 192,
              "end": 205
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 176,
            "end": 205
          }
        ],
        "start": 175,
        "end": 206
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
              "name": "invoke",
              "optional": false,
              "typeAnnotation": null,
              "start": 211,
              "end": 217
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
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
                      "name": "src",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 225,
                      "end": 228
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSIndexedAccessType",
                        "objectType": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "TActors",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 230,
                            "end": 237
                          },
                          "typeArguments": null,
                          "start": 230,
                          "end": 237
                        },
                        "indexType": {
                          "type": "TSLiteralType",
                          "literal": {
                            "type": "Literal",
                            "value": "src",
                            "raw": "\"src\"",
                            "start": 238,
                            "end": 243
                          },
                          "start": 238,
                          "end": 243
                        },
                        "start": 230,
                        "end": 244
                      },
                      "start": 228,
                      "end": 244
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 225,
                    "end": 245
                  }
                ],
                "start": 219,
                "end": 249
              },
              "start": 217,
              "end": 249
            },
            "accessibility": null,
            "static": false,
            "start": 211,
            "end": 250
          }
        ],
        "start": 207,
        "end": 252
      },
      "declare": false,
      "start": 147,
      "end": 252
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "setup",
        "optional": false,
        "typeAnnotation": null,
        "start": 271,
        "end": 276
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
              "name": "TActors",
              "optional": false,
              "typeAnnotation": null,
              "start": 277,
              "end": 284
            },
            "constraint": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Record",
                "optional": false,
                "typeAnnotation": null,
                "start": 293,
                "end": 299
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSStringKeyword",
                    "start": 300,
                    "end": 306
                  },
                  {
                    "type": "TSUnknownKeyword",
                    "start": 308,
                    "end": 315
                  }
                ],
                "start": 299,
                "end": 316
              },
              "start": 293,
              "end": 316
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 277,
            "end": 316
          }
        ],
        "start": 276,
        "end": 317
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "_",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
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
                    "name": "actors",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 325,
                    "end": 331
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSMappedType",
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "K",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 340,
                        "end": 341
                      },
                      "constraint": {
                        "type": "TSTypeOperator",
                        "operator": "keyof",
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "TActors",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 351,
                            "end": 358
                          },
                          "typeArguments": null,
                          "start": 351,
                          "end": 358
                        },
                        "start": 345,
                        "end": 358
                      },
                      "nameType": null,
                      "typeAnnotation": {
                        "type": "TSIndexedAccessType",
                        "objectType": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "TActors",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 361,
                            "end": 368
                          },
                          "typeArguments": null,
                          "start": 361,
                          "end": 368
                        },
                        "indexType": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "K",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 369,
                            "end": 370
                          },
                          "typeArguments": null,
                          "start": 369,
                          "end": 370
                        },
                        "start": 361,
                        "end": 371
                      },
                      "optional": false,
                      "readonly": null,
                      "start": 333,
                      "end": 376
                    },
                    "start": 331,
                    "end": 376
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 325,
                  "end": 377
                }
              ],
              "start": 321,
              "end": 379
            },
            "start": 319,
            "end": 379
          },
          "start": 318,
          "end": 379
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
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
                "name": "createMachine",
                "optional": false,
                "typeAnnotation": null,
                "start": 386,
                "end": 399
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
                      "name": "config",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "StateMachineConfig",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 415,
                            "end": 433
                          },
                          "typeArguments": {
                            "type": "TSTypeParameterInstantiation",
                            "params": [
                              {
                                "type": "TSTypeReference",
                                "typeName": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "Values",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 441,
                                  "end": 447
                                },
                                "typeArguments": {
                                  "type": "TSTypeParameterInstantiation",
                                  "params": [
                                    {
                                      "type": "TSMappedType",
                                      "key": {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "K",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 459,
                                        "end": 460
                                      },
                                      "constraint": {
                                        "type": "TSTypeOperator",
                                        "operator": "keyof",
                                        "typeAnnotation": {
                                          "type": "TSTypeReference",
                                          "typeName": {
                                            "type": "Identifier",
                                            "decorators": [],
                                            "name": "TActors",
                                            "optional": false,
                                            "typeAnnotation": null,
                                            "start": 470,
                                            "end": 477
                                          },
                                          "typeArguments": null,
                                          "start": 470,
                                          "end": 477
                                        },
                                        "start": 464,
                                        "end": 477
                                      },
                                      "nameType": {
                                        "type": "TSIntersectionType",
                                        "types": [
                                          {
                                            "type": "TSTypeReference",
                                            "typeName": {
                                              "type": "Identifier",
                                              "decorators": [],
                                              "name": "K",
                                              "optional": false,
                                              "typeAnnotation": null,
                                              "start": 481,
                                              "end": 482
                                            },
                                            "typeArguments": null,
                                            "start": 481,
                                            "end": 482
                                          },
                                          {
                                            "type": "TSStringKeyword",
                                            "start": 485,
                                            "end": 491
                                          }
                                        ],
                                        "start": 481,
                                        "end": 491
                                      },
                                      "typeAnnotation": {
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
                                              "name": "src",
                                              "optional": false,
                                              "typeAnnotation": null,
                                              "start": 506,
                                              "end": 509
                                            },
                                            "typeAnnotation": {
                                              "type": "TSTypeAnnotation",
                                              "typeAnnotation": {
                                                "type": "TSTypeReference",
                                                "typeName": {
                                                  "type": "Identifier",
                                                  "decorators": [],
                                                  "name": "K",
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
                                            "accessibility": null,
                                            "static": false,
                                            "start": 506,
                                            "end": 513
                                          },
                                          {
                                            "type": "TSPropertySignature",
                                            "computed": false,
                                            "optional": false,
                                            "readonly": false,
                                            "key": {
                                              "type": "Identifier",
                                              "decorators": [],
                                              "name": "logic",
                                              "optional": false,
                                              "typeAnnotation": null,
                                              "start": 524,
                                              "end": 529
                                            },
                                            "typeAnnotation": {
                                              "type": "TSTypeAnnotation",
                                              "typeAnnotation": {
                                                "type": "TSIndexedAccessType",
                                                "objectType": {
                                                  "type": "TSTypeReference",
                                                  "typeName": {
                                                    "type": "Identifier",
                                                    "decorators": [],
                                                    "name": "TActors",
                                                    "optional": false,
                                                    "typeAnnotation": null,
                                                    "start": 531,
                                                    "end": 538
                                                  },
                                                  "typeArguments": null,
                                                  "start": 531,
                                                  "end": 538
                                                },
                                                "indexType": {
                                                  "type": "TSTypeReference",
                                                  "typeName": {
                                                    "type": "Identifier",
                                                    "decorators": [],
                                                    "name": "K",
                                                    "optional": false,
                                                    "typeAnnotation": null,
                                                    "start": 539,
                                                    "end": 540
                                                  },
                                                  "typeArguments": null,
                                                  "start": 539,
                                                  "end": 540
                                                },
                                                "start": 531,
                                                "end": 541
                                              },
                                              "start": 529,
                                              "end": 541
                                            },
                                            "accessibility": null,
                                            "static": false,
                                            "start": 524,
                                            "end": 542
                                          }
                                        ],
                                        "start": 494,
                                        "end": 552
                                      },
                                      "optional": false,
                                      "readonly": null,
                                      "start": 448,
                                      "end": 561
                                    }
                                  ],
                                  "start": 447,
                                  "end": 562
                                },
                                "start": 441,
                                "end": 562
                              }
                            ],
                            "start": 433,
                            "end": 568
                          },
                          "start": 415,
                          "end": 568
                        },
                        "start": 413,
                        "end": 568
                      },
                      "start": 407,
                      "end": 568
                    }
                  ],
                  "returnType": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSVoidKeyword",
                      "start": 577,
                      "end": 581
                    },
                    "start": 574,
                    "end": 581
                  },
                  "start": 401,
                  "end": 581
                },
                "start": 399,
                "end": 581
              },
              "accessibility": null,
              "static": false,
              "start": 386,
              "end": 582
            }
          ],
          "start": 382,
          "end": 584
        },
        "start": 380,
        "end": 584
      },
      "body": null,
      "expression": false,
      "start": 254,
      "end": 585
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 57,
  "end": 585
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Identifier",
    "value": "type",
    "start": 57,
    "end": 61
  },
  {
    "type": "Identifier",
    "value": "Values",
    "start": 62,
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
    "value": "=",
    "start": 72,
    "end": 73
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 74,
    "end": 75
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 75,
    "end": 76
  },
  {
    "type": "Identifier",
    "value": "keyof",
    "start": 76,
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
    "value": "]",
    "start": 83,
    "end": 84
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 84,
    "end": 85
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 87,
    "end": 91
  },
  {
    "type": "Identifier",
    "value": "ProvidedActor",
    "start": 92,
    "end": 105
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 106,
    "end": 107
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 108,
    "end": 109
  },
  {
    "type": "Identifier",
    "value": "src",
    "start": 112,
    "end": 115
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 115,
    "end": 116
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 117,
    "end": 123
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 123,
    "end": 124
  },
  {
    "type": "Identifier",
    "value": "logic",
    "start": 127,
    "end": 132
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 132,
    "end": 133
  },
  {
    "type": "Identifier",
    "value": "unknown",
    "start": 134,
    "end": 141
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 141,
    "end": 142
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 143,
    "end": 144
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 144,
    "end": 145
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 147,
    "end": 156
  },
  {
    "type": "Identifier",
    "value": "StateMachineConfig",
    "start": 157,
    "end": 175
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 175,
    "end": 176
  },
  {
    "type": "Identifier",
    "value": "TActors",
    "start": 176,
    "end": 183
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 184,
    "end": 191
  },
  {
    "type": "Identifier",
    "value": "ProvidedActor",
    "start": 192,
    "end": 205
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 205,
    "end": 206
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 207,
    "end": 208
  },
  {
    "type": "Identifier",
    "value": "invoke",
    "start": 211,
    "end": 217
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 217,
    "end": 218
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 219,
    "end": 220
  },
  {
    "type": "Identifier",
    "value": "src",
    "start": 225,
    "end": 228
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 228,
    "end": 229
  },
  {
    "type": "Identifier",
    "value": "TActors",
    "start": 230,
    "end": 237
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 237,
    "end": 238
  },
  {
    "type": "String",
    "value": "\"src\"",
    "start": 238,
    "end": 243
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 243,
    "end": 244
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 244,
    "end": 245
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 248,
    "end": 249
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 249,
    "end": 250
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 251,
    "end": 252
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 254,
    "end": 261
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 262,
    "end": 270
  },
  {
    "type": "Identifier",
    "value": "setup",
    "start": 271,
    "end": 276
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 276,
    "end": 277
  },
  {
    "type": "Identifier",
    "value": "TActors",
    "start": 277,
    "end": 284
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 285,
    "end": 292
  },
  {
    "type": "Identifier",
    "value": "Record",
    "start": 293,
    "end": 299
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 299,
    "end": 300
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 300,
    "end": 306
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 306,
    "end": 307
  },
  {
    "type": "Identifier",
    "value": "unknown",
    "start": 308,
    "end": 315
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 315,
    "end": 316
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 316,
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
    "value": "_",
    "start": 318,
    "end": 319
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 319,
    "end": 320
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 321,
    "end": 322
  },
  {
    "type": "Identifier",
    "value": "actors",
    "start": 325,
    "end": 331
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 331,
    "end": 332
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 333,
    "end": 334
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 339,
    "end": 340
  },
  {
    "type": "Identifier",
    "value": "K",
    "start": 340,
    "end": 341
  },
  {
    "type": "Keyword",
    "value": "in",
    "start": 342,
    "end": 344
  },
  {
    "type": "Identifier",
    "value": "keyof",
    "start": 345,
    "end": 350
  },
  {
    "type": "Identifier",
    "value": "TActors",
    "start": 351,
    "end": 358
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 358,
    "end": 359
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 359,
    "end": 360
  },
  {
    "type": "Identifier",
    "value": "TActors",
    "start": 361,
    "end": 368
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 368,
    "end": 369
  },
  {
    "type": "Identifier",
    "value": "K",
    "start": 369,
    "end": 370
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 370,
    "end": 371
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 371,
    "end": 372
  },
  {
    "type": "Punctuator",
    "value": "}",
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
    "start": 378,
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
    "type": "Punctuator",
    "value": "{",
    "start": 382,
    "end": 383
  },
  {
    "type": "Identifier",
    "value": "createMachine",
    "start": 386,
    "end": 399
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 399,
    "end": 400
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 401,
    "end": 402
  },
  {
    "type": "Identifier",
    "value": "config",
    "start": 407,
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
    "value": "StateMachineConfig",
    "start": 415,
    "end": 433
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 433,
    "end": 434
  },
  {
    "type": "Identifier",
    "value": "Values",
    "start": 441,
    "end": 447
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 447,
    "end": 448
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 448,
    "end": 449
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 458,
    "end": 459
  },
  {
    "type": "Identifier",
    "value": "K",
    "start": 459,
    "end": 460
  },
  {
    "type": "Keyword",
    "value": "in",
    "start": 461,
    "end": 463
  },
  {
    "type": "Identifier",
    "value": "keyof",
    "start": 464,
    "end": 469
  },
  {
    "type": "Identifier",
    "value": "TActors",
    "start": 470,
    "end": 477
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 478,
    "end": 480
  },
  {
    "type": "Identifier",
    "value": "K",
    "start": 481,
    "end": 482
  },
  {
    "type": "Punctuator",
    "value": "&",
    "start": 483,
    "end": 484
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 485,
    "end": 491
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 491,
    "end": 492
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 492,
    "end": 493
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 494,
    "end": 495
  },
  {
    "type": "Identifier",
    "value": "src",
    "start": 506,
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
    "value": "K",
    "start": 511,
    "end": 512
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 512,
    "end": 513
  },
  {
    "type": "Identifier",
    "value": "logic",
    "start": 524,
    "end": 529
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 529,
    "end": 530
  },
  {
    "type": "Identifier",
    "value": "TActors",
    "start": 531,
    "end": 538
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 538,
    "end": 539
  },
  {
    "type": "Identifier",
    "value": "K",
    "start": 539,
    "end": 540
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 540,
    "end": 541
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 541,
    "end": 542
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 551,
    "end": 552
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 552,
    "end": 553
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 560,
    "end": 561
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 561,
    "end": 562
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 567,
    "end": 568
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 568,
    "end": 569
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 572,
    "end": 573
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 574,
    "end": 576
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 577,
    "end": 581
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 581,
    "end": 582
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 583,
    "end": 584
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 584,
    "end": 585
  }
]
```
