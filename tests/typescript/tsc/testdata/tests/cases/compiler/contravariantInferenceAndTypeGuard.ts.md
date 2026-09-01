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
        "name": "ListItem",
        "optional": false,
        "typeAnnotation": null,
        "start": 10,
        "end": 18
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "TData",
              "optional": false,
              "typeAnnotation": null,
              "start": 19,
              "end": 24
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 19,
            "end": 24
          }
        ],
        "start": 18,
        "end": 25
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
              "name": "prev",
              "optional": false,
              "typeAnnotation": null,
              "start": 32,
              "end": 36
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSUnionType",
                "types": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "ListItem",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 38,
                      "end": 46
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "params": [
                        {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "TData",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 47,
                            "end": 52
                          },
                          "typeArguments": null,
                          "start": 47,
                          "end": 52
                        }
                      ],
                      "start": 46,
                      "end": 53
                    },
                    "start": 38,
                    "end": 53
                  },
                  {
                    "type": "TSNullKeyword",
                    "start": 56,
                    "end": 60
                  }
                ],
                "start": 38,
                "end": 60
              },
              "start": 36,
              "end": 60
            },
            "accessibility": null,
            "static": false,
            "start": 32,
            "end": 61
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "next",
              "optional": false,
              "typeAnnotation": null,
              "start": 66,
              "end": 70
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSUnionType",
                "types": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "ListItem",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 72,
                      "end": 80
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "params": [
                        {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "TData",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 81,
                            "end": 86
                          },
                          "typeArguments": null,
                          "start": 81,
                          "end": 86
                        }
                      ],
                      "start": 80,
                      "end": 87
                    },
                    "start": 72,
                    "end": 87
                  },
                  {
                    "type": "TSNullKeyword",
                    "start": 90,
                    "end": 94
                  }
                ],
                "start": 72,
                "end": 94
              },
              "start": 70,
              "end": 94
            },
            "accessibility": null,
            "static": false,
            "start": 66,
            "end": 95
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "data",
              "optional": false,
              "typeAnnotation": null,
              "start": 100,
              "end": 104
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "TData",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 106,
                  "end": 111
                },
                "typeArguments": null,
                "start": 106,
                "end": 111
              },
              "start": 104,
              "end": 111
            },
            "accessibility": null,
            "static": false,
            "start": 100,
            "end": 112
          }
        ],
        "start": 26,
        "end": 114
      },
      "declare": false,
      "start": 0,
      "end": 114
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "IteratorFn",
        "optional": false,
        "typeAnnotation": null,
        "start": 120,
        "end": 130
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "TData",
              "optional": false,
              "typeAnnotation": null,
              "start": 131,
              "end": 136
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 131,
            "end": 136
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "TResult",
              "optional": false,
              "typeAnnotation": null,
              "start": 138,
              "end": 145
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 138,
            "end": 145
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "TContext",
              "optional": false,
              "typeAnnotation": null,
              "start": 147,
              "end": 155
            },
            "constraint": null,
            "default": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "List",
                "optional": false,
                "typeAnnotation": null,
                "start": 158,
                "end": 162
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "TData",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 163,
                      "end": 168
                    },
                    "typeArguments": null,
                    "start": 163,
                    "end": 168
                  }
                ],
                "start": 162,
                "end": 169
              },
              "start": 158,
              "end": 169
            },
            "in": false,
            "out": false,
            "const": false,
            "start": 147,
            "end": 169
          }
        ],
        "start": 130,
        "end": 170
      },
      "typeAnnotation": {
        "type": "TSFunctionType",
        "typeParameters": null,
        "params": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "this",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "TContext",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 180,
                  "end": 188
                },
                "typeArguments": null,
                "start": 180,
                "end": 188
              },
              "start": 178,
              "end": 188
            },
            "start": 174,
            "end": 188
          },
          {
            "type": "Identifier",
            "decorators": [],
            "name": "item",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "TData",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 196,
                  "end": 201
                },
                "typeArguments": null,
                "start": 196,
                "end": 201
              },
              "start": 194,
              "end": 201
            },
            "start": 190,
            "end": 201
          },
          {
            "type": "Identifier",
            "decorators": [],
            "name": "node",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "ListItem",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 209,
                  "end": 217
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "TData",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 218,
                        "end": 223
                      },
                      "typeArguments": null,
                      "start": 218,
                      "end": 223
                    }
                  ],
                  "start": 217,
                  "end": 224
                },
                "start": 209,
                "end": 224
              },
              "start": 207,
              "end": 224
            },
            "start": 203,
            "end": 224
          },
          {
            "type": "Identifier",
            "decorators": [],
            "name": "list",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "List",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 232,
                  "end": 236
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "TData",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 237,
                        "end": 242
                      },
                      "typeArguments": null,
                      "start": 237,
                      "end": 242
                    }
                  ],
                  "start": 236,
                  "end": 243
                },
                "start": 232,
                "end": 243
              },
              "start": 230,
              "end": 243
            },
            "start": 226,
            "end": 243
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
              "start": 248,
              "end": 255
            },
            "typeArguments": null,
            "start": 248,
            "end": 255
          },
          "start": 245,
          "end": 255
        },
        "start": 173,
        "end": 255
      },
      "declare": false,
      "start": 115,
      "end": 256
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "FilterFn",
        "optional": false,
        "typeAnnotation": null,
        "start": 262,
        "end": 270
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "TData",
              "optional": false,
              "typeAnnotation": null,
              "start": 271,
              "end": 276
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 271,
            "end": 276
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "TResult",
              "optional": false,
              "typeAnnotation": null,
              "start": 278,
              "end": 285
            },
            "constraint": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "TData",
                "optional": false,
                "typeAnnotation": null,
                "start": 294,
                "end": 299
              },
              "typeArguments": null,
              "start": 294,
              "end": 299
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 278,
            "end": 299
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "TContext",
              "optional": false,
              "typeAnnotation": null,
              "start": 301,
              "end": 309
            },
            "constraint": null,
            "default": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "List",
                "optional": false,
                "typeAnnotation": null,
                "start": 312,
                "end": 316
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "TData",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 317,
                      "end": 322
                    },
                    "typeArguments": null,
                    "start": 317,
                    "end": 322
                  }
                ],
                "start": 316,
                "end": 323
              },
              "start": 312,
              "end": 323
            },
            "in": false,
            "out": false,
            "const": false,
            "start": 301,
            "end": 323
          }
        ],
        "start": 270,
        "end": 324
      },
      "typeAnnotation": {
        "type": "TSFunctionType",
        "typeParameters": null,
        "params": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "this",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "TContext",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 334,
                  "end": 342
                },
                "typeArguments": null,
                "start": 334,
                "end": 342
              },
              "start": 332,
              "end": 342
            },
            "start": 328,
            "end": 342
          },
          {
            "type": "Identifier",
            "decorators": [],
            "name": "item",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "TData",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 350,
                  "end": 355
                },
                "typeArguments": null,
                "start": 350,
                "end": 355
              },
              "start": 348,
              "end": 355
            },
            "start": 344,
            "end": 355
          },
          {
            "type": "Identifier",
            "decorators": [],
            "name": "node",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "ListItem",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 363,
                  "end": 371
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "TData",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 372,
                        "end": 377
                      },
                      "typeArguments": null,
                      "start": 372,
                      "end": 377
                    }
                  ],
                  "start": 371,
                  "end": 378
                },
                "start": 363,
                "end": 378
              },
              "start": 361,
              "end": 378
            },
            "start": 357,
            "end": 378
          },
          {
            "type": "Identifier",
            "decorators": [],
            "name": "list",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "List",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 386,
                  "end": 390
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "TData",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 391,
                        "end": 396
                      },
                      "typeArguments": null,
                      "start": 391,
                      "end": 396
                    }
                  ],
                  "start": 390,
                  "end": 397
                },
                "start": 386,
                "end": 397
              },
              "start": 384,
              "end": 397
            },
            "start": 380,
            "end": 397
          }
        ],
        "returnType": {
          "type": "TSTypeAnnotation",
          "typeAnnotation": {
            "type": "TSTypePredicate",
            "parameterName": {
              "type": "Identifier",
              "decorators": [],
              "name": "item",
              "optional": false,
              "typeAnnotation": null,
              "start": 402,
              "end": 406
            },
            "asserts": false,
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
                  "start": 410,
                  "end": 417
                },
                "typeArguments": null,
                "start": 410,
                "end": 417
              },
              "start": 410,
              "end": 417
            },
            "start": 402,
            "end": 417
          },
          "start": 399,
          "end": 417
        },
        "start": 327,
        "end": 417
      },
      "declare": false,
      "start": 257,
      "end": 418
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "List",
        "optional": false,
        "typeAnnotation": null,
        "start": 434,
        "end": 438
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "TData",
              "optional": false,
              "typeAnnotation": null,
              "start": 439,
              "end": 444
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 439,
            "end": 444
          }
        ],
        "start": 438,
        "end": 445
      },
      "superClass": null,
      "superTypeArguments": null,
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
              "name": "filter",
              "optional": false,
              "typeAnnotation": null,
              "start": 452,
              "end": 458
            },
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "id": null,
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
                      "name": "TContext",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 459,
                      "end": 467
                    },
                    "constraint": null,
                    "default": null,
                    "in": false,
                    "out": false,
                    "const": false,
                    "start": 459,
                    "end": 467
                  },
                  {
                    "type": "TSTypeParameter",
                    "name": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "TResult",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 469,
                      "end": 476
                    },
                    "constraint": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "TData",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 485,
                        "end": 490
                      },
                      "typeArguments": null,
                      "start": 485,
                      "end": 490
                    },
                    "default": null,
                    "in": false,
                    "out": false,
                    "const": false,
                    "start": 469,
                    "end": 490
                  }
                ],
                "start": 458,
                "end": 491
              },
              "params": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "fn",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "FilterFn",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 496,
                        "end": 504
                      },
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "params": [
                          {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "TData",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 505,
                              "end": 510
                            },
                            "typeArguments": null,
                            "start": 505,
                            "end": 510
                          },
                          {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "TResult",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 512,
                              "end": 519
                            },
                            "typeArguments": null,
                            "start": 512,
                            "end": 519
                          },
                          {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "TContext",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 521,
                              "end": 529
                            },
                            "typeArguments": null,
                            "start": 521,
                            "end": 529
                          }
                        ],
                        "start": 504,
                        "end": 530
                      },
                      "start": 496,
                      "end": 530
                    },
                    "start": 494,
                    "end": 530
                  },
                  "start": 492,
                  "end": 530
                },
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "context",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "TContext",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 541,
                        "end": 549
                      },
                      "typeArguments": null,
                      "start": 541,
                      "end": 549
                    },
                    "start": 539,
                    "end": 549
                  },
                  "start": 532,
                  "end": 549
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "List",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 552,
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
                          "name": "TResult",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 557,
                          "end": 564
                        },
                        "typeArguments": null,
                        "start": 557,
                        "end": 564
                      }
                    ],
                    "start": 556,
                    "end": 565
                  },
                  "start": 552,
                  "end": 565
                },
                "start": 550,
                "end": 565
              },
              "body": null,
              "expression": false,
              "start": 458,
              "end": 566
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 452,
            "end": 566
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "filter",
              "optional": false,
              "typeAnnotation": null,
              "start": 571,
              "end": 577
            },
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "id": null,
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
                      "name": "TResult",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 578,
                      "end": 585
                    },
                    "constraint": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "TData",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 594,
                        "end": 599
                      },
                      "typeArguments": null,
                      "start": 594,
                      "end": 599
                    },
                    "default": null,
                    "in": false,
                    "out": false,
                    "const": false,
                    "start": 578,
                    "end": 599
                  }
                ],
                "start": 577,
                "end": 600
              },
              "params": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "fn",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "FilterFn",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 605,
                        "end": 613
                      },
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "params": [
                          {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "TData",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 614,
                              "end": 619
                            },
                            "typeArguments": null,
                            "start": 614,
                            "end": 619
                          },
                          {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "TResult",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 621,
                              "end": 628
                            },
                            "typeArguments": null,
                            "start": 621,
                            "end": 628
                          }
                        ],
                        "start": 613,
                        "end": 629
                      },
                      "start": 605,
                      "end": 629
                    },
                    "start": 603,
                    "end": 629
                  },
                  "start": 601,
                  "end": 629
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "List",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 632,
                    "end": 636
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
                          "start": 637,
                          "end": 644
                        },
                        "typeArguments": null,
                        "start": 637,
                        "end": 644
                      }
                    ],
                    "start": 636,
                    "end": 645
                  },
                  "start": 632,
                  "end": 645
                },
                "start": 630,
                "end": 645
              },
              "body": null,
              "expression": false,
              "start": 577,
              "end": 646
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 571,
            "end": 646
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "filter",
              "optional": false,
              "typeAnnotation": null,
              "start": 651,
              "end": 657
            },
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "id": null,
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
                      "name": "TContext",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 658,
                      "end": 666
                    },
                    "constraint": null,
                    "default": null,
                    "in": false,
                    "out": false,
                    "const": false,
                    "start": 658,
                    "end": 666
                  }
                ],
                "start": 657,
                "end": 667
              },
              "params": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "fn",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "IteratorFn",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 672,
                        "end": 682
                      },
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "params": [
                          {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "TData",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 683,
                              "end": 688
                            },
                            "typeArguments": null,
                            "start": 683,
                            "end": 688
                          },
                          {
                            "type": "TSBooleanKeyword",
                            "start": 690,
                            "end": 697
                          },
                          {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "TContext",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 699,
                              "end": 707
                            },
                            "typeArguments": null,
                            "start": 699,
                            "end": 707
                          }
                        ],
                        "start": 682,
                        "end": 708
                      },
                      "start": 672,
                      "end": 708
                    },
                    "start": 670,
                    "end": 708
                  },
                  "start": 668,
                  "end": 708
                },
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "context",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "TContext",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 719,
                        "end": 727
                      },
                      "typeArguments": null,
                      "start": 719,
                      "end": 727
                    },
                    "start": 717,
                    "end": 727
                  },
                  "start": 710,
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
                    "name": "List",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 730,
                    "end": 734
                  },
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "params": [
                      {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "TData",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 735,
                          "end": 740
                        },
                        "typeArguments": null,
                        "start": 735,
                        "end": 740
                      }
                    ],
                    "start": 734,
                    "end": 741
                  },
                  "start": 730,
                  "end": 741
                },
                "start": 728,
                "end": 741
              },
              "body": null,
              "expression": false,
              "start": 657,
              "end": 742
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 651,
            "end": 742
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "filter",
              "optional": false,
              "typeAnnotation": null,
              "start": 747,
              "end": 753
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
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "IteratorFn",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 758,
                        "end": 768
                      },
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "params": [
                          {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "TData",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 769,
                              "end": 774
                            },
                            "typeArguments": null,
                            "start": 769,
                            "end": 774
                          },
                          {
                            "type": "TSBooleanKeyword",
                            "start": 776,
                            "end": 783
                          }
                        ],
                        "start": 768,
                        "end": 784
                      },
                      "start": 758,
                      "end": 784
                    },
                    "start": 756,
                    "end": 784
                  },
                  "start": 754,
                  "end": 784
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "List",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 787,
                    "end": 791
                  },
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "params": [
                      {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "TData",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 792,
                          "end": 797
                        },
                        "typeArguments": null,
                        "start": 792,
                        "end": 797
                      }
                    ],
                    "start": 791,
                    "end": 798
                  },
                  "start": 787,
                  "end": 798
                },
                "start": 785,
                "end": 798
              },
              "body": null,
              "expression": false,
              "start": 753,
              "end": 799
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 747,
            "end": 799
          }
        ],
        "start": 446,
        "end": 801
      },
      "abstract": false,
      "declare": true,
      "start": 420,
      "end": 801
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Test",
        "optional": false,
        "typeAnnotation": null,
        "start": 812,
        "end": 816
      },
      "typeParameters": null,
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
              "name": "a",
              "optional": false,
              "typeAnnotation": null,
              "start": 823,
              "end": 824
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 826,
                "end": 832
              },
              "start": 824,
              "end": 832
            },
            "accessibility": null,
            "static": false,
            "start": 823,
            "end": 833
          }
        ],
        "start": 817,
        "end": 835
      },
      "declare": false,
      "start": 802,
      "end": 835
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
            "name": "list2",
            "optional": false,
            "typeAnnotation": null,
            "start": 842,
            "end": 847
          },
          "init": {
            "type": "NewExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "List",
              "optional": false,
              "typeAnnotation": null,
              "start": 854,
              "end": 858
            },
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "params": [
                {
                  "type": "TSUnionType",
                  "types": [
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Test",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 859,
                        "end": 863
                      },
                      "typeArguments": null,
                      "start": 859,
                      "end": 863
                    },
                    {
                      "type": "TSNullKeyword",
                      "start": 866,
                      "end": 870
                    }
                  ],
                  "start": 859,
                  "end": 870
                }
              ],
              "start": 858,
              "end": 871
            },
            "arguments": [],
            "start": 850,
            "end": 873
          },
          "definite": false,
          "start": 842,
          "end": 873
        }
      ],
      "declare": false,
      "start": 836,
      "end": 874
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
            "name": "filter1",
            "optional": false,
            "typeAnnotation": null,
            "start": 881,
            "end": 888
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "list2",
                "optional": false,
                "typeAnnotation": null,
                "start": 891,
                "end": 896
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "filter",
                "optional": false,
                "typeAnnotation": null,
                "start": 897,
                "end": 903
              },
              "optional": false,
              "computed": false,
              "start": 891,
              "end": 903
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
                    "name": "item",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 913,
                    "end": 917
                  },
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "node",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 919,
                    "end": 923
                  },
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "list",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 925,
                    "end": 929
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSTypePredicate",
                    "parameterName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "item",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 932,
                      "end": 936
                    },
                    "asserts": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Test",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 940,
                          "end": 944
                        },
                        "typeArguments": null,
                        "start": 940,
                        "end": 944
                      },
                      "start": 940,
                      "end": 944
                    },
                    "start": 932,
                    "end": 944
                  },
                  "start": 930,
                  "end": 944
                },
                "body": {
                  "type": "BlockStatement",
                  "body": [
                    {
                      "type": "ExpressionStatement",
                      "expression": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "ThisExpression",
                          "start": 951,
                          "end": 955
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "b",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 956,
                          "end": 957
                        },
                        "optional": false,
                        "computed": false,
                        "start": 951,
                        "end": 957
                      },
                      "directive": null,
                      "start": 951,
                      "end": 958
                    },
                    {
                      "type": "ExpressionStatement",
                      "expression": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "item",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 985,
                        "end": 989
                      },
                      "directive": null,
                      "start": 985,
                      "end": 990
                    },
                    {
                      "type": "ExpressionStatement",
                      "expression": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "node",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1022,
                        "end": 1026
                      },
                      "directive": null,
                      "start": 1022,
                      "end": 1027
                    },
                    {
                      "type": "ExpressionStatement",
                      "expression": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "list",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1069,
                        "end": 1073
                      },
                      "directive": null,
                      "start": 1069,
                      "end": 1074
                    },
                    {
                      "type": "ReturnStatement",
                      "argument": {
                        "type": "UnaryExpression",
                        "operator": "!",
                        "argument": {
                          "type": "UnaryExpression",
                          "operator": "!",
                          "argument": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "item",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1121,
                            "end": 1125
                          },
                          "prefix": true,
                          "start": 1120,
                          "end": 1125
                        },
                        "prefix": true,
                        "start": 1119,
                        "end": 1125
                      },
                      "start": 1112,
                      "end": 1126
                    }
                  ],
                  "start": 945,
                  "end": 1128
                },
                "expression": false,
                "start": 904,
                "end": 1128
              },
              {
                "type": "ObjectExpression",
                "properties": [
                  {
                    "type": "Property",
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "b",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1131,
                      "end": 1132
                    },
                    "value": {
                      "type": "Literal",
                      "value": "c",
                      "raw": "'c'",
                      "start": 1134,
                      "end": 1137
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 1131,
                    "end": 1137
                  }
                ],
                "start": 1130,
                "end": 1138
              }
            ],
            "optional": false,
            "start": 891,
            "end": 1139
          },
          "definite": false,
          "start": 881,
          "end": 1139
        }
      ],
      "declare": false,
      "start": 875,
      "end": 1140
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
            "name": "x",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "List",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1150,
                  "end": 1154
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Test",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1155,
                        "end": 1159
                      },
                      "typeArguments": null,
                      "start": 1155,
                      "end": 1159
                    }
                  ],
                  "start": 1154,
                  "end": 1160
                },
                "start": 1150,
                "end": 1160
              },
              "start": 1148,
              "end": 1160
            },
            "start": 1147,
            "end": 1160
          },
          "init": {
            "type": "Identifier",
            "decorators": [],
            "name": "filter1",
            "optional": false,
            "typeAnnotation": null,
            "start": 1163,
            "end": 1170
          },
          "definite": false,
          "start": 1147,
          "end": 1170
        }
      ],
      "declare": false,
      "start": 1141,
      "end": 1171
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 1197
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
    "value": "ListItem",
    "start": 10,
    "end": 18
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 18,
    "end": 19
  },
  {
    "type": "Identifier",
    "value": "TData",
    "start": 19,
    "end": 24
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 24,
    "end": 25
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 26,
    "end": 27
  },
  {
    "type": "Identifier",
    "value": "prev",
    "start": 32,
    "end": 36
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 36,
    "end": 37
  },
  {
    "type": "Identifier",
    "value": "ListItem",
    "start": 38,
    "end": 46
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 46,
    "end": 47
  },
  {
    "type": "Identifier",
    "value": "TData",
    "start": 47,
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
    "value": "|",
    "start": 54,
    "end": 55
  },
  {
    "type": "Null",
    "value": "null",
    "start": 56,
    "end": 60
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 60,
    "end": 61
  },
  {
    "type": "Identifier",
    "value": "next",
    "start": 66,
    "end": 70
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 70,
    "end": 71
  },
  {
    "type": "Identifier",
    "value": "ListItem",
    "start": 72,
    "end": 80
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 80,
    "end": 81
  },
  {
    "type": "Identifier",
    "value": "TData",
    "start": 81,
    "end": 86
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 86,
    "end": 87
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 88,
    "end": 89
  },
  {
    "type": "Null",
    "value": "null",
    "start": 90,
    "end": 94
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 94,
    "end": 95
  },
  {
    "type": "Identifier",
    "value": "data",
    "start": 100,
    "end": 104
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 104,
    "end": 105
  },
  {
    "type": "Identifier",
    "value": "TData",
    "start": 106,
    "end": 111
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 111,
    "end": 112
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 113,
    "end": 114
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 115,
    "end": 119
  },
  {
    "type": "Identifier",
    "value": "IteratorFn",
    "start": 120,
    "end": 130
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 130,
    "end": 131
  },
  {
    "type": "Identifier",
    "value": "TData",
    "start": 131,
    "end": 136
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 136,
    "end": 137
  },
  {
    "type": "Identifier",
    "value": "TResult",
    "start": 138,
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
    "value": "TContext",
    "start": 147,
    "end": 155
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 156,
    "end": 157
  },
  {
    "type": "Identifier",
    "value": "List",
    "start": 158,
    "end": 162
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 162,
    "end": 163
  },
  {
    "type": "Identifier",
    "value": "TData",
    "start": 163,
    "end": 168
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 168,
    "end": 169
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 169,
    "end": 170
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 171,
    "end": 172
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 173,
    "end": 174
  },
  {
    "type": "Identifier",
    "value": "this",
    "start": 174,
    "end": 178
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 178,
    "end": 179
  },
  {
    "type": "Identifier",
    "value": "TContext",
    "start": 180,
    "end": 188
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 188,
    "end": 189
  },
  {
    "type": "Identifier",
    "value": "item",
    "start": 190,
    "end": 194
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 194,
    "end": 195
  },
  {
    "type": "Identifier",
    "value": "TData",
    "start": 196,
    "end": 201
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 201,
    "end": 202
  },
  {
    "type": "Identifier",
    "value": "node",
    "start": 203,
    "end": 207
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 207,
    "end": 208
  },
  {
    "type": "Identifier",
    "value": "ListItem",
    "start": 209,
    "end": 217
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 217,
    "end": 218
  },
  {
    "type": "Identifier",
    "value": "TData",
    "start": 218,
    "end": 223
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 223,
    "end": 224
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 224,
    "end": 225
  },
  {
    "type": "Identifier",
    "value": "list",
    "start": 226,
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
    "value": "List",
    "start": 232,
    "end": 236
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 236,
    "end": 237
  },
  {
    "type": "Identifier",
    "value": "TData",
    "start": 237,
    "end": 242
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 242,
    "end": 243
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 243,
    "end": 244
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 245,
    "end": 247
  },
  {
    "type": "Identifier",
    "value": "TResult",
    "start": 248,
    "end": 255
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 255,
    "end": 256
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 257,
    "end": 261
  },
  {
    "type": "Identifier",
    "value": "FilterFn",
    "start": 262,
    "end": 270
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 270,
    "end": 271
  },
  {
    "type": "Identifier",
    "value": "TData",
    "start": 271,
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
    "value": "TResult",
    "start": 278,
    "end": 285
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 286,
    "end": 293
  },
  {
    "type": "Identifier",
    "value": "TData",
    "start": 294,
    "end": 299
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 299,
    "end": 300
  },
  {
    "type": "Identifier",
    "value": "TContext",
    "start": 301,
    "end": 309
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 310,
    "end": 311
  },
  {
    "type": "Identifier",
    "value": "List",
    "start": 312,
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
    "value": "TData",
    "start": 317,
    "end": 322
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 322,
    "end": 323
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 323,
    "end": 324
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 325,
    "end": 326
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 327,
    "end": 328
  },
  {
    "type": "Identifier",
    "value": "this",
    "start": 328,
    "end": 332
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 332,
    "end": 333
  },
  {
    "type": "Identifier",
    "value": "TContext",
    "start": 334,
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
    "value": "item",
    "start": 344,
    "end": 348
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 348,
    "end": 349
  },
  {
    "type": "Identifier",
    "value": "TData",
    "start": 350,
    "end": 355
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 355,
    "end": 356
  },
  {
    "type": "Identifier",
    "value": "node",
    "start": 357,
    "end": 361
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 361,
    "end": 362
  },
  {
    "type": "Identifier",
    "value": "ListItem",
    "start": 363,
    "end": 371
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 371,
    "end": 372
  },
  {
    "type": "Identifier",
    "value": "TData",
    "start": 372,
    "end": 377
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 377,
    "end": 378
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 378,
    "end": 379
  },
  {
    "type": "Identifier",
    "value": "list",
    "start": 380,
    "end": 384
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 384,
    "end": 385
  },
  {
    "type": "Identifier",
    "value": "List",
    "start": 386,
    "end": 390
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 390,
    "end": 391
  },
  {
    "type": "Identifier",
    "value": "TData",
    "start": 391,
    "end": 396
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 396,
    "end": 397
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 397,
    "end": 398
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 399,
    "end": 401
  },
  {
    "type": "Identifier",
    "value": "item",
    "start": 402,
    "end": 406
  },
  {
    "type": "Identifier",
    "value": "is",
    "start": 407,
    "end": 409
  },
  {
    "type": "Identifier",
    "value": "TResult",
    "start": 410,
    "end": 417
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 417,
    "end": 418
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 420,
    "end": 427
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 428,
    "end": 433
  },
  {
    "type": "Identifier",
    "value": "List",
    "start": 434,
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
    "value": "TData",
    "start": 439,
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
    "value": "{",
    "start": 446,
    "end": 447
  },
  {
    "type": "Identifier",
    "value": "filter",
    "start": 452,
    "end": 458
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 458,
    "end": 459
  },
  {
    "type": "Identifier",
    "value": "TContext",
    "start": 459,
    "end": 467
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 467,
    "end": 468
  },
  {
    "type": "Identifier",
    "value": "TResult",
    "start": 469,
    "end": 476
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 477,
    "end": 484
  },
  {
    "type": "Identifier",
    "value": "TData",
    "start": 485,
    "end": 490
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 490,
    "end": 491
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 491,
    "end": 492
  },
  {
    "type": "Identifier",
    "value": "fn",
    "start": 492,
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
    "value": "FilterFn",
    "start": 496,
    "end": 504
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 504,
    "end": 505
  },
  {
    "type": "Identifier",
    "value": "TData",
    "start": 505,
    "end": 510
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 510,
    "end": 511
  },
  {
    "type": "Identifier",
    "value": "TResult",
    "start": 512,
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
    "value": "TContext",
    "start": 521,
    "end": 529
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 529,
    "end": 530
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 530,
    "end": 531
  },
  {
    "type": "Identifier",
    "value": "context",
    "start": 532,
    "end": 539
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 539,
    "end": 540
  },
  {
    "type": "Identifier",
    "value": "TContext",
    "start": 541,
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
    "value": "List",
    "start": 552,
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
    "value": "TResult",
    "start": 557,
    "end": 564
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 564,
    "end": 565
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 565,
    "end": 566
  },
  {
    "type": "Identifier",
    "value": "filter",
    "start": 571,
    "end": 577
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 577,
    "end": 578
  },
  {
    "type": "Identifier",
    "value": "TResult",
    "start": 578,
    "end": 585
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 586,
    "end": 593
  },
  {
    "type": "Identifier",
    "value": "TData",
    "start": 594,
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
    "value": "(",
    "start": 600,
    "end": 601
  },
  {
    "type": "Identifier",
    "value": "fn",
    "start": 601,
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
    "value": "FilterFn",
    "start": 605,
    "end": 613
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 613,
    "end": 614
  },
  {
    "type": "Identifier",
    "value": "TData",
    "start": 614,
    "end": 619
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 619,
    "end": 620
  },
  {
    "type": "Identifier",
    "value": "TResult",
    "start": 621,
    "end": 628
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 628,
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
    "value": ":",
    "start": 630,
    "end": 631
  },
  {
    "type": "Identifier",
    "value": "List",
    "start": 632,
    "end": 636
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 636,
    "end": 637
  },
  {
    "type": "Identifier",
    "value": "TResult",
    "start": 637,
    "end": 644
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 644,
    "end": 645
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 645,
    "end": 646
  },
  {
    "type": "Identifier",
    "value": "filter",
    "start": 651,
    "end": 657
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 657,
    "end": 658
  },
  {
    "type": "Identifier",
    "value": "TContext",
    "start": 658,
    "end": 666
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 666,
    "end": 667
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 667,
    "end": 668
  },
  {
    "type": "Identifier",
    "value": "fn",
    "start": 668,
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
    "value": "IteratorFn",
    "start": 672,
    "end": 682
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 682,
    "end": 683
  },
  {
    "type": "Identifier",
    "value": "TData",
    "start": 683,
    "end": 688
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 688,
    "end": 689
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 690,
    "end": 697
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 697,
    "end": 698
  },
  {
    "type": "Identifier",
    "value": "TContext",
    "start": 699,
    "end": 707
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 707,
    "end": 708
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 708,
    "end": 709
  },
  {
    "type": "Identifier",
    "value": "context",
    "start": 710,
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
    "value": "TContext",
    "start": 719,
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
    "value": "List",
    "start": 730,
    "end": 734
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 734,
    "end": 735
  },
  {
    "type": "Identifier",
    "value": "TData",
    "start": 735,
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
    "value": "filter",
    "start": 747,
    "end": 753
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 753,
    "end": 754
  },
  {
    "type": "Identifier",
    "value": "fn",
    "start": 754,
    "end": 756
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 756,
    "end": 757
  },
  {
    "type": "Identifier",
    "value": "IteratorFn",
    "start": 758,
    "end": 768
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 768,
    "end": 769
  },
  {
    "type": "Identifier",
    "value": "TData",
    "start": 769,
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
    "value": "boolean",
    "start": 776,
    "end": 783
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 783,
    "end": 784
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 784,
    "end": 785
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 785,
    "end": 786
  },
  {
    "type": "Identifier",
    "value": "List",
    "start": 787,
    "end": 791
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 791,
    "end": 792
  },
  {
    "type": "Identifier",
    "value": "TData",
    "start": 792,
    "end": 797
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 797,
    "end": 798
  },
  {
    "type": "Punctuator",
    "value": ";",
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
    "value": "interface",
    "start": 802,
    "end": 811
  },
  {
    "type": "Identifier",
    "value": "Test",
    "start": 812,
    "end": 816
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 817,
    "end": 818
  },
  {
    "type": "Identifier",
    "value": "a",
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
    "value": "string",
    "start": 826,
    "end": 832
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 832,
    "end": 833
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 834,
    "end": 835
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 836,
    "end": 841
  },
  {
    "type": "Identifier",
    "value": "list2",
    "start": 842,
    "end": 847
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 848,
    "end": 849
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 850,
    "end": 853
  },
  {
    "type": "Identifier",
    "value": "List",
    "start": 854,
    "end": 858
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 858,
    "end": 859
  },
  {
    "type": "Identifier",
    "value": "Test",
    "start": 859,
    "end": 863
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 864,
    "end": 865
  },
  {
    "type": "Null",
    "value": "null",
    "start": 866,
    "end": 870
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 870,
    "end": 871
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 871,
    "end": 872
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 872,
    "end": 873
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 873,
    "end": 874
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 875,
    "end": 880
  },
  {
    "type": "Identifier",
    "value": "filter1",
    "start": 881,
    "end": 888
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 889,
    "end": 890
  },
  {
    "type": "Identifier",
    "value": "list2",
    "start": 891,
    "end": 896
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 896,
    "end": 897
  },
  {
    "type": "Identifier",
    "value": "filter",
    "start": 897,
    "end": 903
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 903,
    "end": 904
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 904,
    "end": 912
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 912,
    "end": 913
  },
  {
    "type": "Identifier",
    "value": "item",
    "start": 913,
    "end": 917
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 917,
    "end": 918
  },
  {
    "type": "Identifier",
    "value": "node",
    "start": 919,
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
    "value": "list",
    "start": 925,
    "end": 929
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 929,
    "end": 930
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 930,
    "end": 931
  },
  {
    "type": "Identifier",
    "value": "item",
    "start": 932,
    "end": 936
  },
  {
    "type": "Identifier",
    "value": "is",
    "start": 937,
    "end": 939
  },
  {
    "type": "Identifier",
    "value": "Test",
    "start": 940,
    "end": 944
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 945,
    "end": 946
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 951,
    "end": 955
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 955,
    "end": 956
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 956,
    "end": 957
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 957,
    "end": 958
  },
  {
    "type": "Identifier",
    "value": "item",
    "start": 985,
    "end": 989
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 989,
    "end": 990
  },
  {
    "type": "Identifier",
    "value": "node",
    "start": 1022,
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
    "value": "list",
    "start": 1069,
    "end": 1073
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1073,
    "end": 1074
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 1112,
    "end": 1118
  },
  {
    "type": "Punctuator",
    "value": "!",
    "start": 1119,
    "end": 1120
  },
  {
    "type": "Punctuator",
    "value": "!",
    "start": 1120,
    "end": 1121
  },
  {
    "type": "Identifier",
    "value": "item",
    "start": 1121,
    "end": 1125
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1125,
    "end": 1126
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1127,
    "end": 1128
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1128,
    "end": 1129
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1130,
    "end": 1131
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 1131,
    "end": 1132
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1132,
    "end": 1133
  },
  {
    "type": "String",
    "value": "'c'",
    "start": 1134,
    "end": 1137
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1137,
    "end": 1138
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1138,
    "end": 1139
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1139,
    "end": 1140
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 1141,
    "end": 1146
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1147,
    "end": 1148
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1148,
    "end": 1149
  },
  {
    "type": "Identifier",
    "value": "List",
    "start": 1150,
    "end": 1154
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1154,
    "end": 1155
  },
  {
    "type": "Identifier",
    "value": "Test",
    "start": 1155,
    "end": 1159
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1159,
    "end": 1160
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1161,
    "end": 1162
  },
  {
    "type": "Identifier",
    "value": "filter1",
    "start": 1163,
    "end": 1170
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1170,
    "end": 1171
  }
]
```
