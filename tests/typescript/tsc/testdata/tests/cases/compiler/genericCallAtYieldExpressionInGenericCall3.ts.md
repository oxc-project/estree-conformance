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
        "name": "ReadonlyRecord",
        "optional": false,
        "typeAnnotation": null,
        "start": 5,
        "end": 19
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "K",
              "optional": false,
              "typeAnnotation": null,
              "start": 27,
              "end": 28
            },
            "constraint": {
              "type": "TSUnionType",
              "types": [
                {
                  "type": "TSStringKeyword",
                  "start": 37,
                  "end": 43
                },
                {
                  "type": "TSSymbolKeyword",
                  "start": 46,
                  "end": 52
                }
              ],
              "start": 37,
              "end": 52
            },
            "default": null,
            "in": true,
            "out": true,
            "const": false,
            "start": 20,
            "end": 52
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "A",
              "optional": false,
              "typeAnnotation": null,
              "start": 58,
              "end": 59
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": true,
            "const": false,
            "start": 54,
            "end": 59
          }
        ],
        "start": 19,
        "end": 60
      },
      "typeAnnotation": {
        "type": "TSMappedType",
        "key": {
          "type": "Identifier",
          "decorators": [],
          "name": "P",
          "optional": false,
          "typeAnnotation": null,
          "start": 77,
          "end": 78
        },
        "constraint": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "K",
            "optional": false,
            "typeAnnotation": null,
            "start": 82,
            "end": 83
          },
          "typeArguments": null,
          "start": 82,
          "end": 83
        },
        "nameType": null,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "A",
            "optional": false,
            "typeAnnotation": null,
            "start": 86,
            "end": 87
          },
          "typeArguments": null,
          "start": 86,
          "end": 87
        },
        "optional": false,
        "readonly": true,
        "start": 63,
        "end": 90
      },
      "declare": false,
      "start": 0,
      "end": 91
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Success",
        "optional": false,
        "typeAnnotation": null,
        "start": 98,
        "end": 105
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
              "start": 106,
              "end": 107
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 106,
            "end": 107
          }
        ],
        "start": 105,
        "end": 108
      },
      "typeAnnotation": {
        "type": "TSConditionalType",
        "checkType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "T",
            "optional": false,
            "typeAnnotation": null,
            "start": 111,
            "end": 112
          },
          "typeArguments": null,
          "start": 111,
          "end": 112
        },
        "extendsType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "Micro",
            "optional": false,
            "typeAnnotation": null,
            "start": 121,
            "end": 126
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "params": [
              {
                "type": "TSInferType",
                "typeParameter": {
                  "type": "TSTypeParameter",
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "_A",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 133,
                    "end": 135
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 133,
                  "end": 135
                },
                "start": 127,
                "end": 135
              },
              {
                "type": "TSInferType",
                "typeParameter": {
                  "type": "TSTypeParameter",
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "_E",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 143,
                    "end": 145
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 143,
                  "end": 145
                },
                "start": 137,
                "end": 145
              },
              {
                "type": "TSInferType",
                "typeParameter": {
                  "type": "TSTypeParameter",
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "_R",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 153,
                    "end": 155
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 153,
                  "end": 155
                },
                "start": 147,
                "end": 155
              }
            ],
            "start": 126,
            "end": 156
          },
          "start": 121,
          "end": 156
        },
        "trueType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "_A",
            "optional": false,
            "typeAnnotation": null,
            "start": 159,
            "end": 161
          },
          "typeArguments": null,
          "start": 159,
          "end": 161
        },
        "falseType": {
          "type": "TSNeverKeyword",
          "start": 164,
          "end": 169
        },
        "start": 111,
        "end": 169
      },
      "declare": false,
      "start": 93,
      "end": 170
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "MicroIterator",
        "optional": false,
        "typeAnnotation": null,
        "start": 182,
        "end": 195
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
              "start": 196,
              "end": 197
            },
            "constraint": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Micro",
                "optional": false,
                "typeAnnotation": null,
                "start": 206,
                "end": 211
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSAnyKeyword",
                    "start": 212,
                    "end": 215
                  },
                  {
                    "type": "TSAnyKeyword",
                    "start": 217,
                    "end": 220
                  },
                  {
                    "type": "TSAnyKeyword",
                    "start": 222,
                    "end": 225
                  }
                ],
                "start": 211,
                "end": 226
              },
              "start": 206,
              "end": 226
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 196,
            "end": 226
          }
        ],
        "start": 195,
        "end": 227
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
              "name": "next",
              "optional": false,
              "typeAnnotation": null,
              "start": 232,
              "end": 236
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
                  "start": 240,
                  "end": 244
                },
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "ReadonlyArray",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 246,
                      "end": 259
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "params": [
                        {
                          "type": "TSAnyKeyword",
                          "start": 260,
                          "end": 263
                        }
                      ],
                      "start": 259,
                      "end": 264
                    },
                    "start": 246,
                    "end": 264
                  },
                  "start": 244,
                  "end": 264
                },
                "value": null,
                "start": 237,
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
                  "name": "IteratorResult",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 267,
                  "end": 281
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
                        "start": 282,
                        "end": 283
                      },
                      "typeArguments": null,
                      "start": 282,
                      "end": 283
                    },
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Success",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 285,
                        "end": 292
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
                              "start": 293,
                              "end": 294
                            },
                            "typeArguments": null,
                            "start": 293,
                            "end": 294
                          }
                        ],
                        "start": 292,
                        "end": 295
                      },
                      "start": 285,
                      "end": 295
                    }
                  ],
                  "start": 281,
                  "end": 296
                },
                "start": 267,
                "end": 296
              },
              "start": 265,
              "end": 296
            },
            "accessibility": null,
            "readonly": false,
            "static": false,
            "start": 232,
            "end": 297
          }
        ],
        "start": 228,
        "end": 299
      },
      "declare": false,
      "start": 172,
      "end": 299
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Micro",
        "optional": false,
        "typeAnnotation": null,
        "start": 311,
        "end": 316
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "A",
              "optional": false,
              "typeAnnotation": null,
              "start": 321,
              "end": 322
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": true,
            "const": false,
            "start": 317,
            "end": 322
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "E",
              "optional": false,
              "typeAnnotation": null,
              "start": 328,
              "end": 329
            },
            "constraint": null,
            "default": {
              "type": "TSNeverKeyword",
              "start": 332,
              "end": 337
            },
            "in": false,
            "out": true,
            "const": false,
            "start": 324,
            "end": 337
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "R",
              "optional": false,
              "typeAnnotation": null,
              "start": 343,
              "end": 344
            },
            "constraint": null,
            "default": {
              "type": "TSNeverKeyword",
              "start": 347,
              "end": 352
            },
            "in": false,
            "out": true,
            "const": false,
            "start": 339,
            "end": 352
          }
        ],
        "start": 316,
        "end": 353
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
              "name": "_A",
              "optional": false,
              "typeAnnotation": null,
              "start": 358,
              "end": 360
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "A",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 362,
                  "end": 363
                },
                "typeArguments": null,
                "start": 362,
                "end": 363
              },
              "start": 360,
              "end": 363
            },
            "accessibility": null,
            "static": false,
            "start": 358,
            "end": 364
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "_E",
              "optional": false,
              "typeAnnotation": null,
              "start": 367,
              "end": 369
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "E",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 371,
                  "end": 372
                },
                "typeArguments": null,
                "start": 371,
                "end": 372
              },
              "start": 369,
              "end": 372
            },
            "accessibility": null,
            "static": false,
            "start": 367,
            "end": 373
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "_R",
              "optional": false,
              "typeAnnotation": null,
              "start": 376,
              "end": 378
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "R",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 380,
                  "end": 381
                },
                "typeArguments": null,
                "start": 380,
                "end": 381
              },
              "start": 378,
              "end": 381
            },
            "accessibility": null,
            "static": false,
            "start": 376,
            "end": 382
          },
          {
            "type": "TSMethodSignature",
            "key": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "Symbol",
                "optional": false,
                "typeAnnotation": null,
                "start": 386,
                "end": 392
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "iterator",
                "optional": false,
                "typeAnnotation": null,
                "start": 393,
                "end": 401
              },
              "optional": false,
              "computed": false,
              "start": 386,
              "end": 401
            },
            "computed": true,
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
                  "name": "MicroIterator",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 406,
                  "end": 419
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Micro",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 420,
                        "end": 425
                      },
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "params": [
                          {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "A",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 426,
                              "end": 427
                            },
                            "typeArguments": null,
                            "start": 426,
                            "end": 427
                          },
                          {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "E",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 429,
                              "end": 430
                            },
                            "typeArguments": null,
                            "start": 429,
                            "end": 430
                          },
                          {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "R",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 432,
                              "end": 433
                            },
                            "typeArguments": null,
                            "start": 432,
                            "end": 433
                          }
                        ],
                        "start": 425,
                        "end": 434
                      },
                      "start": 420,
                      "end": 434
                    }
                  ],
                  "start": 419,
                  "end": 435
                },
                "start": 406,
                "end": 435
              },
              "start": 404,
              "end": 435
            },
            "accessibility": null,
            "readonly": false,
            "static": false,
            "start": 385,
            "end": 436
          }
        ],
        "start": 354,
        "end": 438
      },
      "declare": false,
      "start": 301,
      "end": 438
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "runPromise",
        "optional": false,
        "typeAnnotation": null,
        "start": 457,
        "end": 467
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
              "name": "A",
              "optional": false,
              "typeAnnotation": null,
              "start": 468,
              "end": 469
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 468,
            "end": 469
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "E",
              "optional": false,
              "typeAnnotation": null,
              "start": 471,
              "end": 472
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 471,
            "end": 472
          }
        ],
        "start": 467,
        "end": 473
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "effect",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Micro",
                "optional": false,
                "typeAnnotation": null,
                "start": 482,
                "end": 487
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "A",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 488,
                      "end": 489
                    },
                    "typeArguments": null,
                    "start": 488,
                    "end": 489
                  },
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "E",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 491,
                      "end": 492
                    },
                    "typeArguments": null,
                    "start": 491,
                    "end": 492
                  }
                ],
                "start": 487,
                "end": 493
              },
              "start": 482,
              "end": 493
            },
            "start": 480,
            "end": 493
          },
          "start": 474,
          "end": 493
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
            "start": 496,
            "end": 503
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "params": [
              {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "A",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 504,
                  "end": 505
                },
                "typeArguments": null,
                "start": 504,
                "end": 505
              }
            ],
            "start": 503,
            "end": 506
          },
          "start": 496,
          "end": 506
        },
        "start": 494,
        "end": 506
      },
      "body": null,
      "expression": false,
      "start": 440,
      "end": 507
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "gen",
        "optional": false,
        "typeAnnotation": null,
        "start": 526,
        "end": 529
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
              "name": "Eff",
              "optional": false,
              "typeAnnotation": null,
              "start": 530,
              "end": 533
            },
            "constraint": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Micro",
                "optional": false,
                "typeAnnotation": null,
                "start": 542,
                "end": 547
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSAnyKeyword",
                    "start": 548,
                    "end": 551
                  },
                  {
                    "type": "TSAnyKeyword",
                    "start": 553,
                    "end": 556
                  },
                  {
                    "type": "TSAnyKeyword",
                    "start": 558,
                    "end": 561
                  }
                ],
                "start": 547,
                "end": 562
              },
              "start": 542,
              "end": 562
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 530,
            "end": 562
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "AEff",
              "optional": false,
              "typeAnnotation": null,
              "start": 564,
              "end": 568
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 564,
            "end": 568
          }
        ],
        "start": 529,
        "end": 569
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "body",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSFunctionType",
              "typeParameters": null,
              "params": [],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Generator",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 585,
                    "end": 594
                  },
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "params": [
                      {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Eff",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 595,
                          "end": 598
                        },
                        "typeArguments": null,
                        "start": 595,
                        "end": 598
                      },
                      {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "AEff",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 600,
                          "end": 604
                        },
                        "typeArguments": null,
                        "start": 600,
                        "end": 604
                      },
                      {
                        "type": "TSNeverKeyword",
                        "start": 606,
                        "end": 611
                      }
                    ],
                    "start": 594,
                    "end": 612
                  },
                  "start": 585,
                  "end": 612
                },
                "start": 582,
                "end": 612
              },
              "start": 579,
              "end": 612
            },
            "start": 577,
            "end": 612
          },
          "start": 573,
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
            "name": "Micro",
            "optional": false,
            "typeAnnotation": null,
            "start": 617,
            "end": 622
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "params": [
              {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "AEff",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 623,
                  "end": 627
                },
                "typeArguments": null,
                "start": 623,
                "end": 627
              },
              {
                "type": "TSAnyKeyword",
                "start": 629,
                "end": 632
              },
              {
                "type": "TSNeverKeyword",
                "start": 634,
                "end": 639
              }
            ],
            "start": 622,
            "end": 640
          },
          "start": 617,
          "end": 640
        },
        "start": 615,
        "end": 640
      },
      "body": null,
      "expression": false,
      "start": 509,
      "end": 641
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "traverse",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "members": [
                  {
                    "type": "TSCallSignatureDeclaration",
                    "typeParameters": {
                      "type": "TSTypeParameterDeclaration",
                      "params": [
                        {
                          "type": "TSTypeParameter",
                          "name": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "A",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 672,
                            "end": 673
                          },
                          "constraint": null,
                          "default": null,
                          "in": false,
                          "out": false,
                          "const": false,
                          "start": 672,
                          "end": 673
                        },
                        {
                          "type": "TSTypeParameter",
                          "name": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "R",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 675,
                            "end": 676
                          },
                          "constraint": null,
                          "default": null,
                          "in": false,
                          "out": false,
                          "const": false,
                          "start": 675,
                          "end": 676
                        },
                        {
                          "type": "TSTypeParameter",
                          "name": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "O",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 678,
                            "end": 679
                          },
                          "constraint": null,
                          "default": null,
                          "in": false,
                          "out": false,
                          "const": false,
                          "start": 678,
                          "end": 679
                        },
                        {
                          "type": "TSTypeParameter",
                          "name": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "E",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 681,
                            "end": 682
                          },
                          "constraint": null,
                          "default": null,
                          "in": false,
                          "out": false,
                          "const": false,
                          "start": 681,
                          "end": 682
                        },
                        {
                          "type": "TSTypeParameter",
                          "name": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "B",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 684,
                            "end": 685
                          },
                          "constraint": null,
                          "default": null,
                          "in": false,
                          "out": false,
                          "const": false,
                          "start": 684,
                          "end": 685
                        }
                      ],
                      "start": 671,
                      "end": 686
                    },
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
                                "name": "a",
                                "optional": false,
                                "typeAnnotation": {
                                  "type": "TSTypeAnnotation",
                                  "typeAnnotation": {
                                    "type": "TSTypeReference",
                                    "typeName": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "A",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 699,
                                      "end": 700
                                    },
                                    "typeArguments": null,
                                    "start": 699,
                                    "end": 700
                                  },
                                  "start": 697,
                                  "end": 700
                                },
                                "start": 696,
                                "end": 700
                              }
                            ],
                            "returnType": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSTypeReference",
                                "typeName": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "Micro",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 705,
                                  "end": 710
                                },
                                "typeArguments": {
                                  "type": "TSTypeParameterInstantiation",
                                  "params": [
                                    {
                                      "type": "TSTypeReference",
                                      "typeName": {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "B",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 711,
                                        "end": 712
                                      },
                                      "typeArguments": null,
                                      "start": 711,
                                      "end": 712
                                    },
                                    {
                                      "type": "TSTypeReference",
                                      "typeName": {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "E",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 714,
                                        "end": 715
                                      },
                                      "typeArguments": null,
                                      "start": 714,
                                      "end": 715
                                    },
                                    {
                                      "type": "TSTypeReference",
                                      "typeName": {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "O",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 717,
                                        "end": 718
                                      },
                                      "typeArguments": null,
                                      "start": 717,
                                      "end": 718
                                    }
                                  ],
                                  "start": 710,
                                  "end": 719
                                },
                                "start": 705,
                                "end": 719
                              },
                              "start": 702,
                              "end": 719
                            },
                            "start": 695,
                            "end": 719
                          },
                          "start": 693,
                          "end": 719
                        },
                        "start": 692,
                        "end": 719
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSFunctionType",
                        "typeParameters": null,
                        "params": [
                          {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "self",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSTypeReference",
                                "typeName": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "ReadonlyRecord",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 738,
                                  "end": 752
                                },
                                "typeArguments": {
                                  "type": "TSTypeParameterInstantiation",
                                  "params": [
                                    {
                                      "type": "TSStringKeyword",
                                      "start": 753,
                                      "end": 759
                                    },
                                    {
                                      "type": "TSTypeReference",
                                      "typeName": {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "A",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 761,
                                        "end": 762
                                      },
                                      "typeArguments": null,
                                      "start": 761,
                                      "end": 762
                                    }
                                  ],
                                  "start": 752,
                                  "end": 763
                                },
                                "start": 738,
                                "end": 763
                              },
                              "start": 736,
                              "end": 763
                            },
                            "start": 732,
                            "end": 763
                          }
                        ],
                        "returnType": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "Micro",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 772,
                              "end": 777
                            },
                            "typeArguments": {
                              "type": "TSTypeParameterInstantiation",
                              "params": [
                                {
                                  "type": "TSTypeReference",
                                  "typeName": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "ReadonlyRecord",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 778,
                                    "end": 792
                                  },
                                  "typeArguments": {
                                    "type": "TSTypeParameterInstantiation",
                                    "params": [
                                      {
                                        "type": "TSStringKeyword",
                                        "start": 793,
                                        "end": 799
                                      },
                                      {
                                        "type": "TSTypeReference",
                                        "typeName": {
                                          "type": "Identifier",
                                          "decorators": [],
                                          "name": "B",
                                          "optional": false,
                                          "typeAnnotation": null,
                                          "start": 801,
                                          "end": 802
                                        },
                                        "typeArguments": null,
                                        "start": 801,
                                        "end": 802
                                      }
                                    ],
                                    "start": 792,
                                    "end": 803
                                  },
                                  "start": 778,
                                  "end": 803
                                },
                                {
                                  "type": "TSTypeReference",
                                  "typeName": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "E",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 805,
                                    "end": 806
                                  },
                                  "typeArguments": null,
                                  "start": 805,
                                  "end": 806
                                },
                                {
                                  "type": "TSTypeReference",
                                  "typeName": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "O",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 808,
                                    "end": 809
                                  },
                                  "typeArguments": null,
                                  "start": 808,
                                  "end": 809
                                }
                              ],
                              "start": 777,
                              "end": 810
                            },
                            "start": 772,
                            "end": 810
                          },
                          "start": 769,
                          "end": 810
                        },
                        "start": 726,
                        "end": 810
                      },
                      "start": 724,
                      "end": 810
                    },
                    "start": 671,
                    "end": 811
                  },
                  {
                    "type": "TSCallSignatureDeclaration",
                    "typeParameters": {
                      "type": "TSTypeParameterDeclaration",
                      "params": [
                        {
                          "type": "TSTypeParameter",
                          "name": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "A",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 815,
                            "end": 816
                          },
                          "constraint": null,
                          "default": null,
                          "in": false,
                          "out": false,
                          "const": false,
                          "start": 815,
                          "end": 816
                        },
                        {
                          "type": "TSTypeParameter",
                          "name": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "O",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 818,
                            "end": 819
                          },
                          "constraint": null,
                          "default": null,
                          "in": false,
                          "out": false,
                          "const": false,
                          "start": 818,
                          "end": 819
                        },
                        {
                          "type": "TSTypeParameter",
                          "name": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "E",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 821,
                            "end": 822
                          },
                          "constraint": null,
                          "default": null,
                          "in": false,
                          "out": false,
                          "const": false,
                          "start": 821,
                          "end": 822
                        },
                        {
                          "type": "TSTypeParameter",
                          "name": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "B",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 824,
                            "end": 825
                          },
                          "constraint": null,
                          "default": null,
                          "in": false,
                          "out": false,
                          "const": false,
                          "start": 824,
                          "end": 825
                        }
                      ],
                      "start": 814,
                      "end": 826
                    },
                    "params": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "self",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "ReadonlyRecord",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 838,
                              "end": 852
                            },
                            "typeArguments": {
                              "type": "TSTypeParameterInstantiation",
                              "params": [
                                {
                                  "type": "TSStringKeyword",
                                  "start": 853,
                                  "end": 859
                                },
                                {
                                  "type": "TSTypeReference",
                                  "typeName": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "A",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 861,
                                    "end": 862
                                  },
                                  "typeArguments": null,
                                  "start": 861,
                                  "end": 862
                                }
                              ],
                              "start": 852,
                              "end": 863
                            },
                            "start": 838,
                            "end": 863
                          },
                          "start": 836,
                          "end": 863
                        },
                        "start": 832,
                        "end": 863
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
                                      "name": "A",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 876,
                                      "end": 877
                                    },
                                    "typeArguments": null,
                                    "start": 876,
                                    "end": 877
                                  },
                                  "start": 874,
                                  "end": 877
                                },
                                "start": 873,
                                "end": 877
                              }
                            ],
                            "returnType": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSTypeReference",
                                "typeName": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "Micro",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 882,
                                  "end": 887
                                },
                                "typeArguments": {
                                  "type": "TSTypeParameterInstantiation",
                                  "params": [
                                    {
                                      "type": "TSTypeReference",
                                      "typeName": {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "B",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 888,
                                        "end": 889
                                      },
                                      "typeArguments": null,
                                      "start": 888,
                                      "end": 889
                                    },
                                    {
                                      "type": "TSTypeReference",
                                      "typeName": {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "E",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 891,
                                        "end": 892
                                      },
                                      "typeArguments": null,
                                      "start": 891,
                                      "end": 892
                                    },
                                    {
                                      "type": "TSTypeReference",
                                      "typeName": {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "O",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 894,
                                        "end": 895
                                      },
                                      "typeArguments": null,
                                      "start": 894,
                                      "end": 895
                                    }
                                  ],
                                  "start": 887,
                                  "end": 896
                                },
                                "start": 882,
                                "end": 896
                              },
                              "start": 879,
                              "end": 896
                            },
                            "start": 872,
                            "end": 896
                          },
                          "start": 870,
                          "end": 896
                        },
                        "start": 869,
                        "end": 896
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Micro",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 903,
                          "end": 908
                        },
                        "typeArguments": {
                          "type": "TSTypeParameterInstantiation",
                          "params": [
                            {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "ReadonlyRecord",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 909,
                                "end": 923
                              },
                              "typeArguments": {
                                "type": "TSTypeParameterInstantiation",
                                "params": [
                                  {
                                    "type": "TSStringKeyword",
                                    "start": 924,
                                    "end": 930
                                  },
                                  {
                                    "type": "TSTypeReference",
                                    "typeName": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "B",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 932,
                                      "end": 933
                                    },
                                    "typeArguments": null,
                                    "start": 932,
                                    "end": 933
                                  }
                                ],
                                "start": 923,
                                "end": 934
                              },
                              "start": 909,
                              "end": 934
                            },
                            {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "E",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 936,
                                "end": 937
                              },
                              "typeArguments": null,
                              "start": 936,
                              "end": 937
                            },
                            {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "O",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 939,
                                "end": 940
                              },
                              "typeArguments": null,
                              "start": 939,
                              "end": 940
                            }
                          ],
                          "start": 908,
                          "end": 941
                        },
                        "start": 903,
                        "end": 941
                      },
                      "start": 901,
                      "end": 941
                    },
                    "start": 814,
                    "end": 942
                  }
                ],
                "start": 667,
                "end": 944
              },
              "start": 665,
              "end": 944
            },
            "start": 657,
            "end": 944
          },
          "init": null,
          "definite": false,
          "start": 657,
          "end": 944
        }
      ],
      "declare": true,
      "start": 643,
      "end": 945
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "runPromise",
          "optional": false,
          "typeAnnotation": null,
          "start": 947,
          "end": 957
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "gen",
              "optional": false,
              "typeAnnotation": null,
              "start": 961,
              "end": 964
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "FunctionExpression",
                "id": null,
                "generator": true,
                "async": false,
                "declare": false,
                "typeParameters": null,
                "params": [],
                "returnType": null,
                "body": {
                  "type": "BlockStatement",
                  "body": [
                    {
                      "type": "ExpressionStatement",
                      "expression": {
                        "type": "YieldExpression",
                        "delegate": true,
                        "argument": {
                          "type": "CallExpression",
                          "callee": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "traverse",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 991,
                            "end": 999
                          },
                          "typeArguments": null,
                          "arguments": [
                            {
                              "type": "ObjectExpression",
                              "properties": [
                                {
                                  "type": "Property",
                                  "kind": "init",
                                  "key": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "a",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 1002,
                                    "end": 1003
                                  },
                                  "value": {
                                    "type": "Literal",
                                    "value": 1,
                                    "raw": "1",
                                    "start": 1005,
                                    "end": 1006
                                  },
                                  "method": false,
                                  "shorthand": false,
                                  "computed": false,
                                  "optional": false,
                                  "start": 1002,
                                  "end": 1006
                                },
                                {
                                  "type": "Property",
                                  "kind": "init",
                                  "key": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "b",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 1008,
                                    "end": 1009
                                  },
                                  "value": {
                                    "type": "Literal",
                                    "value": 2,
                                    "raw": "2",
                                    "start": 1011,
                                    "end": 1012
                                  },
                                  "method": false,
                                  "shorthand": false,
                                  "computed": false,
                                  "optional": false,
                                  "start": 1008,
                                  "end": 1012
                                }
                              ],
                              "start": 1000,
                              "end": 1014
                            },
                            {
                              "type": "ArrowFunctionExpression",
                              "expression": true,
                              "async": false,
                              "typeParameters": null,
                              "params": [
                                {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "n",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 1017,
                                  "end": 1018
                                }
                              ],
                              "returnType": null,
                              "body": {
                                "type": "CallExpression",
                                "callee": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "gen",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 1029,
                                  "end": 1032
                                },
                                "typeArguments": null,
                                "arguments": [
                                  {
                                    "type": "FunctionExpression",
                                    "id": null,
                                    "generator": true,
                                    "async": false,
                                    "declare": false,
                                    "typeParameters": null,
                                    "params": [],
                                    "returnType": null,
                                    "body": {
                                      "type": "BlockStatement",
                                      "body": [
                                        {
                                          "type": "ReturnStatement",
                                          "argument": {
                                            "type": "BinaryExpression",
                                            "left": {
                                              "type": "Identifier",
                                              "decorators": [],
                                              "name": "n",
                                              "optional": false,
                                              "typeAnnotation": null,
                                              "start": 1063,
                                              "end": 1064
                                            },
                                            "operator": "+",
                                            "right": {
                                              "type": "Literal",
                                              "value": 1,
                                              "raw": "1",
                                              "start": 1067,
                                              "end": 1068
                                            },
                                            "start": 1063,
                                            "end": 1068
                                          },
                                          "start": 1056,
                                          "end": 1069
                                        }
                                      ],
                                      "start": 1046,
                                      "end": 1077
                                    },
                                    "expression": false,
                                    "start": 1033,
                                    "end": 1077
                                  }
                                ],
                                "optional": false,
                                "start": 1029,
                                "end": 1078
                              },
                              "id": null,
                              "generator": false,
                              "start": 1016,
                              "end": 1078
                            }
                          ],
                          "optional": false,
                          "start": 991,
                          "end": 1085
                        },
                        "start": 984,
                        "end": 1085
                      },
                      "directive": null,
                      "start": 984,
                      "end": 1086
                    }
                  ],
                  "start": 978,
                  "end": 1090
                },
                "expression": false,
                "start": 965,
                "end": 1090
              }
            ],
            "optional": false,
            "start": 961,
            "end": 1091
          }
        ],
        "optional": false,
        "start": 947,
        "end": 1094
      },
      "directive": null,
      "start": 947,
      "end": 1095
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 1095
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Identifier",
    "value": "type",
    "start": 0,
    "end": 4
  },
  {
    "type": "Identifier",
    "value": "ReadonlyRecord",
    "start": 5,
    "end": 19
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 19,
    "end": 20
  },
  {
    "type": "Keyword",
    "value": "in",
    "start": 20,
    "end": 22
  },
  {
    "type": "Identifier",
    "value": "out",
    "start": 23,
    "end": 26
  },
  {
    "type": "Identifier",
    "value": "K",
    "start": 27,
    "end": 28
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 29,
    "end": 36
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 37,
    "end": 43
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 44,
    "end": 45
  },
  {
    "type": "Identifier",
    "value": "symbol",
    "start": 46,
    "end": 52
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 52,
    "end": 53
  },
  {
    "type": "Identifier",
    "value": "out",
    "start": 54,
    "end": 57
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 58,
    "end": 59
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 59,
    "end": 60
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 61,
    "end": 62
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 63,
    "end": 64
  },
  {
    "type": "Identifier",
    "value": "readonly",
    "start": 67,
    "end": 75
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 76,
    "end": 77
  },
  {
    "type": "Identifier",
    "value": "P",
    "start": 77,
    "end": 78
  },
  {
    "type": "Keyword",
    "value": "in",
    "start": 79,
    "end": 81
  },
  {
    "type": "Identifier",
    "value": "K",
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
    "value": ":",
    "start": 84,
    "end": 85
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 86,
    "end": 87
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 87,
    "end": 88
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 89,
    "end": 90
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 90,
    "end": 91
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 93,
    "end": 97
  },
  {
    "type": "Identifier",
    "value": "Success",
    "start": 98,
    "end": 105
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 105,
    "end": 106
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 106,
    "end": 107
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 107,
    "end": 108
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 109,
    "end": 110
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 111,
    "end": 112
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 113,
    "end": 120
  },
  {
    "type": "Identifier",
    "value": "Micro",
    "start": 121,
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
    "value": "infer",
    "start": 127,
    "end": 132
  },
  {
    "type": "Identifier",
    "value": "_A",
    "start": 133,
    "end": 135
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 135,
    "end": 136
  },
  {
    "type": "Identifier",
    "value": "infer",
    "start": 137,
    "end": 142
  },
  {
    "type": "Identifier",
    "value": "_E",
    "start": 143,
    "end": 145
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 145,
    "end": 146
  },
  {
    "type": "Identifier",
    "value": "infer",
    "start": 147,
    "end": 152
  },
  {
    "type": "Identifier",
    "value": "_R",
    "start": 153,
    "end": 155
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 155,
    "end": 156
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 157,
    "end": 158
  },
  {
    "type": "Identifier",
    "value": "_A",
    "start": 159,
    "end": 161
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 162,
    "end": 163
  },
  {
    "type": "Identifier",
    "value": "never",
    "start": 164,
    "end": 169
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 169,
    "end": 170
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 172,
    "end": 181
  },
  {
    "type": "Identifier",
    "value": "MicroIterator",
    "start": 182,
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
    "value": "T",
    "start": 196,
    "end": 197
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 198,
    "end": 205
  },
  {
    "type": "Identifier",
    "value": "Micro",
    "start": 206,
    "end": 211
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 211,
    "end": 212
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 212,
    "end": 215
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 215,
    "end": 216
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 217,
    "end": 220
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 220,
    "end": 221
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 222,
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
    "value": ">",
    "start": 226,
    "end": 227
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 228,
    "end": 229
  },
  {
    "type": "Identifier",
    "value": "next",
    "start": 232,
    "end": 236
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 236,
    "end": 237
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 237,
    "end": 240
  },
  {
    "type": "Identifier",
    "value": "args",
    "start": 240,
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
    "value": "ReadonlyArray",
    "start": 246,
    "end": 259
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 259,
    "end": 260
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 260,
    "end": 263
  },
  {
    "type": "Punctuator",
    "value": ">",
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
    "value": ":",
    "start": 265,
    "end": 266
  },
  {
    "type": "Identifier",
    "value": "IteratorResult",
    "start": 267,
    "end": 281
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 281,
    "end": 282
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 282,
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
    "value": "Success",
    "start": 285,
    "end": 292
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 292,
    "end": 293
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 293,
    "end": 294
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 294,
    "end": 295
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 295,
    "end": 296
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 296,
    "end": 297
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 298,
    "end": 299
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 301,
    "end": 310
  },
  {
    "type": "Identifier",
    "value": "Micro",
    "start": 311,
    "end": 316
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 316,
    "end": 317
  },
  {
    "type": "Identifier",
    "value": "out",
    "start": 317,
    "end": 320
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 321,
    "end": 322
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 322,
    "end": 323
  },
  {
    "type": "Identifier",
    "value": "out",
    "start": 324,
    "end": 327
  },
  {
    "type": "Identifier",
    "value": "E",
    "start": 328,
    "end": 329
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 330,
    "end": 331
  },
  {
    "type": "Identifier",
    "value": "never",
    "start": 332,
    "end": 337
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 337,
    "end": 338
  },
  {
    "type": "Identifier",
    "value": "out",
    "start": 339,
    "end": 342
  },
  {
    "type": "Identifier",
    "value": "R",
    "start": 343,
    "end": 344
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 345,
    "end": 346
  },
  {
    "type": "Identifier",
    "value": "never",
    "start": 347,
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
    "value": "{",
    "start": 354,
    "end": 355
  },
  {
    "type": "Identifier",
    "value": "_A",
    "start": 358,
    "end": 360
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 360,
    "end": 361
  },
  {
    "type": "Identifier",
    "value": "A",
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
    "value": "_E",
    "start": 367,
    "end": 369
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 369,
    "end": 370
  },
  {
    "type": "Identifier",
    "value": "E",
    "start": 371,
    "end": 372
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 372,
    "end": 373
  },
  {
    "type": "Identifier",
    "value": "_R",
    "start": 376,
    "end": 378
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 378,
    "end": 379
  },
  {
    "type": "Identifier",
    "value": "R",
    "start": 380,
    "end": 381
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 381,
    "end": 382
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 385,
    "end": 386
  },
  {
    "type": "Identifier",
    "value": "Symbol",
    "start": 386,
    "end": 392
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 392,
    "end": 393
  },
  {
    "type": "Identifier",
    "value": "iterator",
    "start": 393,
    "end": 401
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 401,
    "end": 402
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 402,
    "end": 403
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 403,
    "end": 404
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 404,
    "end": 405
  },
  {
    "type": "Identifier",
    "value": "MicroIterator",
    "start": 406,
    "end": 419
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 419,
    "end": 420
  },
  {
    "type": "Identifier",
    "value": "Micro",
    "start": 420,
    "end": 425
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 425,
    "end": 426
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 426,
    "end": 427
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 427,
    "end": 428
  },
  {
    "type": "Identifier",
    "value": "E",
    "start": 429,
    "end": 430
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 430,
    "end": 431
  },
  {
    "type": "Identifier",
    "value": "R",
    "start": 432,
    "end": 433
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 433,
    "end": 434
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 434,
    "end": 435
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 435,
    "end": 436
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 437,
    "end": 438
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 440,
    "end": 447
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 448,
    "end": 456
  },
  {
    "type": "Identifier",
    "value": "runPromise",
    "start": 457,
    "end": 467
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 467,
    "end": 468
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 468,
    "end": 469
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 469,
    "end": 470
  },
  {
    "type": "Identifier",
    "value": "E",
    "start": 471,
    "end": 472
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 472,
    "end": 473
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 473,
    "end": 474
  },
  {
    "type": "Identifier",
    "value": "effect",
    "start": 474,
    "end": 480
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 480,
    "end": 481
  },
  {
    "type": "Identifier",
    "value": "Micro",
    "start": 482,
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
    "value": "A",
    "start": 488,
    "end": 489
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 489,
    "end": 490
  },
  {
    "type": "Identifier",
    "value": "E",
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
    "value": ")",
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
    "value": "Promise",
    "start": 496,
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
    "value": "A",
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
    "value": ";",
    "start": 506,
    "end": 507
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 509,
    "end": 516
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 517,
    "end": 525
  },
  {
    "type": "Identifier",
    "value": "gen",
    "start": 526,
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
    "value": "Eff",
    "start": 530,
    "end": 533
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 534,
    "end": 541
  },
  {
    "type": "Identifier",
    "value": "Micro",
    "start": 542,
    "end": 547
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 547,
    "end": 548
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 548,
    "end": 551
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 551,
    "end": 552
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 553,
    "end": 556
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 556,
    "end": 557
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 558,
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
    "value": ",",
    "start": 562,
    "end": 563
  },
  {
    "type": "Identifier",
    "value": "AEff",
    "start": 564,
    "end": 568
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 568,
    "end": 569
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 569,
    "end": 570
  },
  {
    "type": "Identifier",
    "value": "body",
    "start": 573,
    "end": 577
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 577,
    "end": 578
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 579,
    "end": 580
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 580,
    "end": 581
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 582,
    "end": 584
  },
  {
    "type": "Identifier",
    "value": "Generator",
    "start": 585,
    "end": 594
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 594,
    "end": 595
  },
  {
    "type": "Identifier",
    "value": "Eff",
    "start": 595,
    "end": 598
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 598,
    "end": 599
  },
  {
    "type": "Identifier",
    "value": "AEff",
    "start": 600,
    "end": 604
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 604,
    "end": 605
  },
  {
    "type": "Identifier",
    "value": "never",
    "start": 606,
    "end": 611
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 611,
    "end": 612
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 612,
    "end": 613
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 614,
    "end": 615
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 615,
    "end": 616
  },
  {
    "type": "Identifier",
    "value": "Micro",
    "start": 617,
    "end": 622
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 622,
    "end": 623
  },
  {
    "type": "Identifier",
    "value": "AEff",
    "start": 623,
    "end": 627
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 627,
    "end": 628
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 629,
    "end": 632
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 632,
    "end": 633
  },
  {
    "type": "Identifier",
    "value": "never",
    "start": 634,
    "end": 639
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 639,
    "end": 640
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 640,
    "end": 641
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 643,
    "end": 650
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 651,
    "end": 656
  },
  {
    "type": "Identifier",
    "value": "traverse",
    "start": 657,
    "end": 665
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 665,
    "end": 666
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 667,
    "end": 668
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 671,
    "end": 672
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 672,
    "end": 673
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 673,
    "end": 674
  },
  {
    "type": "Identifier",
    "value": "R",
    "start": 675,
    "end": 676
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 676,
    "end": 677
  },
  {
    "type": "Identifier",
    "value": "O",
    "start": 678,
    "end": 679
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 679,
    "end": 680
  },
  {
    "type": "Identifier",
    "value": "E",
    "start": 681,
    "end": 682
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 682,
    "end": 683
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 684,
    "end": 685
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 685,
    "end": 686
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 686,
    "end": 687
  },
  {
    "type": "Identifier",
    "value": "f",
    "start": 692,
    "end": 693
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 693,
    "end": 694
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 695,
    "end": 696
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 696,
    "end": 697
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 697,
    "end": 698
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 699,
    "end": 700
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 700,
    "end": 701
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 702,
    "end": 704
  },
  {
    "type": "Identifier",
    "value": "Micro",
    "start": 705,
    "end": 710
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 710,
    "end": 711
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 711,
    "end": 712
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 712,
    "end": 713
  },
  {
    "type": "Identifier",
    "value": "E",
    "start": 714,
    "end": 715
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 715,
    "end": 716
  },
  {
    "type": "Identifier",
    "value": "O",
    "start": 717,
    "end": 718
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 718,
    "end": 719
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 719,
    "end": 720
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 723,
    "end": 724
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 724,
    "end": 725
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 726,
    "end": 727
  },
  {
    "type": "Identifier",
    "value": "self",
    "start": 732,
    "end": 736
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 736,
    "end": 737
  },
  {
    "type": "Identifier",
    "value": "ReadonlyRecord",
    "start": 738,
    "end": 752
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 752,
    "end": 753
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 753,
    "end": 759
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 759,
    "end": 760
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 761,
    "end": 762
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 762,
    "end": 763
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 763,
    "end": 764
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 767,
    "end": 768
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 769,
    "end": 771
  },
  {
    "type": "Identifier",
    "value": "Micro",
    "start": 772,
    "end": 777
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 777,
    "end": 778
  },
  {
    "type": "Identifier",
    "value": "ReadonlyRecord",
    "start": 778,
    "end": 792
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 792,
    "end": 793
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
    "value": "B",
    "start": 801,
    "end": 802
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 802,
    "end": 803
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 803,
    "end": 804
  },
  {
    "type": "Identifier",
    "value": "E",
    "start": 805,
    "end": 806
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 806,
    "end": 807
  },
  {
    "type": "Identifier",
    "value": "O",
    "start": 808,
    "end": 809
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 809,
    "end": 810
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 810,
    "end": 811
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 814,
    "end": 815
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 815,
    "end": 816
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 816,
    "end": 817
  },
  {
    "type": "Identifier",
    "value": "O",
    "start": 818,
    "end": 819
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 819,
    "end": 820
  },
  {
    "type": "Identifier",
    "value": "E",
    "start": 821,
    "end": 822
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 822,
    "end": 823
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 824,
    "end": 825
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 825,
    "end": 826
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 826,
    "end": 827
  },
  {
    "type": "Identifier",
    "value": "self",
    "start": 832,
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
    "value": "ReadonlyRecord",
    "start": 838,
    "end": 852
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 852,
    "end": 853
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 853,
    "end": 859
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 859,
    "end": 860
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 861,
    "end": 862
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 862,
    "end": 863
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 863,
    "end": 864
  },
  {
    "type": "Identifier",
    "value": "f",
    "start": 869,
    "end": 870
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 870,
    "end": 871
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 872,
    "end": 873
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 873,
    "end": 874
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 874,
    "end": 875
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 876,
    "end": 877
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 877,
    "end": 878
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 879,
    "end": 881
  },
  {
    "type": "Identifier",
    "value": "Micro",
    "start": 882,
    "end": 887
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 887,
    "end": 888
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 888,
    "end": 889
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 889,
    "end": 890
  },
  {
    "type": "Identifier",
    "value": "E",
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
    "value": "O",
    "start": 894,
    "end": 895
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 895,
    "end": 896
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 896,
    "end": 897
  },
  {
    "type": "Punctuator",
    "value": ")",
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
    "value": "Micro",
    "start": 903,
    "end": 908
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 908,
    "end": 909
  },
  {
    "type": "Identifier",
    "value": "ReadonlyRecord",
    "start": 909,
    "end": 923
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 923,
    "end": 924
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 924,
    "end": 930
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 930,
    "end": 931
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 932,
    "end": 933
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 933,
    "end": 934
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 934,
    "end": 935
  },
  {
    "type": "Identifier",
    "value": "E",
    "start": 936,
    "end": 937
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 937,
    "end": 938
  },
  {
    "type": "Identifier",
    "value": "O",
    "start": 939,
    "end": 940
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 940,
    "end": 941
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 941,
    "end": 942
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 943,
    "end": 944
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 944,
    "end": 945
  },
  {
    "type": "Identifier",
    "value": "runPromise",
    "start": 947,
    "end": 957
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 957,
    "end": 958
  },
  {
    "type": "Identifier",
    "value": "gen",
    "start": 961,
    "end": 964
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 964,
    "end": 965
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 965,
    "end": 973
  },
  {
    "type": "Punctuator",
    "value": "*",
    "start": 973,
    "end": 974
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 975,
    "end": 976
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 976,
    "end": 977
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 978,
    "end": 979
  },
  {
    "type": "Keyword",
    "value": "yield",
    "start": 984,
    "end": 989
  },
  {
    "type": "Punctuator",
    "value": "*",
    "start": 989,
    "end": 990
  },
  {
    "type": "Identifier",
    "value": "traverse",
    "start": 991,
    "end": 999
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 999,
    "end": 1000
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1000,
    "end": 1001
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1002,
    "end": 1003
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1003,
    "end": 1004
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 1005,
    "end": 1006
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1006,
    "end": 1007
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 1008,
    "end": 1009
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1009,
    "end": 1010
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 1011,
    "end": 1012
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1013,
    "end": 1014
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1014,
    "end": 1015
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1016,
    "end": 1017
  },
  {
    "type": "Identifier",
    "value": "n",
    "start": 1017,
    "end": 1018
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1018,
    "end": 1019
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1020,
    "end": 1022
  },
  {
    "type": "Identifier",
    "value": "gen",
    "start": 1029,
    "end": 1032
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1032,
    "end": 1033
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1033,
    "end": 1041
  },
  {
    "type": "Punctuator",
    "value": "*",
    "start": 1041,
    "end": 1042
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1043,
    "end": 1044
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1044,
    "end": 1045
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1046,
    "end": 1047
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 1056,
    "end": 1062
  },
  {
    "type": "Identifier",
    "value": "n",
    "start": 1063,
    "end": 1064
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 1065,
    "end": 1066
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 1067,
    "end": 1068
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1068,
    "end": 1069
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1076,
    "end": 1077
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1077,
    "end": 1078
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1078,
    "end": 1079
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1084,
    "end": 1085
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1085,
    "end": 1086
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1089,
    "end": 1090
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1090,
    "end": 1091
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1091,
    "end": 1092
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1093,
    "end": 1094
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1094,
    "end": 1095
  }
]
```
