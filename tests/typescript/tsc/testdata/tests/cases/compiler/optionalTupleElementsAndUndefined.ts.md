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
        "name": "UnNullify",
        "optional": false,
        "typeAnnotation": null,
        "start": 27,
        "end": 36
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
              "start": 37,
              "end": 38
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 37,
            "end": 38
          }
        ],
        "start": 36,
        "end": 39
      },
      "typeAnnotation": {
        "type": "TSMappedType",
        "key": {
          "type": "Identifier",
          "decorators": [],
          "name": "K",
          "optional": false,
          "typeAnnotation": null,
          "start": 45,
          "end": 46
        },
        "constraint": {
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
              "start": 56,
              "end": 57
            },
            "typeArguments": null,
            "start": 56,
            "end": 57
          },
          "start": 50,
          "end": 57
        },
        "nameType": null,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "NonNullable",
            "optional": false,
            "typeAnnotation": null,
            "start": 60,
            "end": 71
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "params": [
              {
                "type": "TSIndexedAccessType",
                "objectType": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "T",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 72,
                    "end": 73
                  },
                  "typeArguments": null,
                  "start": 72,
                  "end": 73
                },
                "indexType": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "K",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 74,
                    "end": 75
                  },
                  "typeArguments": null,
                  "start": 74,
                  "end": 75
                },
                "start": 72,
                "end": 76
              }
            ],
            "start": 71,
            "end": 77
          },
          "start": 60,
          "end": 77
        },
        "optional": false,
        "readonly": null,
        "start": 42,
        "end": 79
      },
      "declare": false,
      "start": 22,
      "end": 80
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Foo",
        "optional": false,
        "typeAnnotation": null,
        "start": 87,
        "end": 90
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "UnNullify",
          "optional": false,
          "typeAnnotation": null,
          "start": 93,
          "end": 102
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
              "type": "TSTupleType",
              "elementTypes": [
                {
                  "type": "TSNamedTupleMember",
                  "label": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 104,
                    "end": 105
                  },
                  "elementType": {
                    "type": "TSLiteralType",
                    "literal": {
                      "type": "Literal",
                      "value": 1,
                      "raw": "1",
                      "start": 107,
                      "end": 108
                    },
                    "start": 107,
                    "end": 108
                  },
                  "optional": false,
                  "start": 104,
                  "end": 108
                },
                {
                  "type": "TSNamedTupleMember",
                  "label": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "b",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 110,
                    "end": 111
                  },
                  "elementType": {
                    "type": "TSUnionType",
                    "types": [
                      {
                        "type": "TSLiteralType",
                        "literal": {
                          "type": "Literal",
                          "value": 2,
                          "raw": "2",
                          "start": 114,
                          "end": 115
                        },
                        "start": 114,
                        "end": 115
                      },
                      {
                        "type": "TSUndefinedKeyword",
                        "start": 118,
                        "end": 127
                      }
                    ],
                    "start": 114,
                    "end": 127
                  },
                  "optional": true,
                  "start": 110,
                  "end": 127
                }
              ],
              "start": 103,
              "end": 128
            }
          ],
          "start": 102,
          "end": 129
        },
        "start": 93,
        "end": 129
      },
      "declare": false,
      "start": 82,
      "end": 130
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Test",
        "optional": false,
        "typeAnnotation": null,
        "start": 137,
        "end": 141
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSConditionalType",
        "checkType": {
          "type": "TSTupleType",
          "elementTypes": [
            {
              "type": "TSNamedTupleMember",
              "label": {
                "type": "Identifier",
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null,
                "start": 145,
                "end": 146
              },
              "elementType": {
                "type": "TSLiteralType",
                "literal": {
                  "type": "Literal",
                  "value": 1,
                  "raw": "1",
                  "start": 148,
                  "end": 149
                },
                "start": 148,
                "end": 149
              },
              "optional": false,
              "start": 145,
              "end": 149
            },
            {
              "type": "TSNamedTupleMember",
              "label": {
                "type": "Identifier",
                "decorators": [],
                "name": "b",
                "optional": false,
                "typeAnnotation": null,
                "start": 151,
                "end": 152
              },
              "elementType": {
                "type": "TSLiteralType",
                "literal": {
                  "type": "Literal",
                  "value": 2,
                  "raw": "2",
                  "start": 155,
                  "end": 156
                },
                "start": 155,
                "end": 156
              },
              "optional": true,
              "start": 151,
              "end": 156
            }
          ],
          "start": 144,
          "end": 157
        },
        "extendsType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "Foo",
            "optional": false,
            "typeAnnotation": null,
            "start": 166,
            "end": 169
          },
          "typeArguments": null,
          "start": 166,
          "end": 169
        },
        "trueType": {
          "type": "TSLiteralType",
          "literal": {
            "type": "Literal",
            "value": true,
            "raw": "true",
            "start": 172,
            "end": 176
          },
          "start": 172,
          "end": 176
        },
        "falseType": {
          "type": "TSLiteralType",
          "literal": {
            "type": "Literal",
            "value": false,
            "raw": "false",
            "start": 179,
            "end": 184
          },
          "start": 179,
          "end": 184
        },
        "start": 144,
        "end": 184
      },
      "declare": false,
      "start": 132,
      "end": 185
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
            "name": "v",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTupleType",
                "elementTypes": [
                  {
                    "type": "TSLiteralType",
                    "literal": {
                      "type": "Literal",
                      "value": 1,
                      "raw": "1",
                      "start": 264,
                      "end": 265
                    },
                    "start": 264,
                    "end": 265
                  },
                  {
                    "type": "TSOptionalType",
                    "typeAnnotation": {
                      "type": "TSLiteralType",
                      "literal": {
                        "type": "Literal",
                        "value": 2,
                        "raw": "2",
                        "start": 267,
                        "end": 268
                      },
                      "start": 267,
                      "end": 268
                    },
                    "start": 267,
                    "end": 269
                  }
                ],
                "start": 263,
                "end": 270
              },
              "start": 261,
              "end": 270
            },
            "start": 260,
            "end": 270
          },
          "init": null,
          "definite": false,
          "start": 260,
          "end": 270
        }
      ],
      "declare": false,
      "start": 256,
      "end": 271
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
            "name": "v",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTupleType",
                "elementTypes": [
                  {
                    "type": "TSLiteralType",
                    "literal": {
                      "type": "Literal",
                      "value": 1,
                      "raw": "1",
                      "start": 280,
                      "end": 281
                    },
                    "start": 280,
                    "end": 281
                  },
                  {
                    "type": "TSOptionalType",
                    "typeAnnotation": {
                      "type": "TSUnionType",
                      "types": [
                        {
                          "type": "TSLiteralType",
                          "literal": {
                            "type": "Literal",
                            "value": 2,
                            "raw": "2",
                            "start": 284,
                            "end": 285
                          },
                          "start": 284,
                          "end": 285
                        },
                        {
                          "type": "TSUndefinedKeyword",
                          "start": 288,
                          "end": 297
                        }
                      ],
                      "start": 284,
                      "end": 297
                    },
                    "start": 283,
                    "end": 299
                  }
                ],
                "start": 279,
                "end": 300
              },
              "start": 277,
              "end": 300
            },
            "start": 276,
            "end": 300
          },
          "init": null,
          "definite": false,
          "start": 276,
          "end": 300
        }
      ],
      "declare": false,
      "start": 272,
      "end": 301
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
            "name": "v",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTupleType",
                "elementTypes": [
                  {
                    "type": "TSNamedTupleMember",
                    "label": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "a",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 310,
                      "end": 311
                    },
                    "elementType": {
                      "type": "TSLiteralType",
                      "literal": {
                        "type": "Literal",
                        "value": 1,
                        "raw": "1",
                        "start": 313,
                        "end": 314
                      },
                      "start": 313,
                      "end": 314
                    },
                    "optional": false,
                    "start": 310,
                    "end": 314
                  },
                  {
                    "type": "TSNamedTupleMember",
                    "label": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "b",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 316,
                      "end": 317
                    },
                    "elementType": {
                      "type": "TSLiteralType",
                      "literal": {
                        "type": "Literal",
                        "value": 2,
                        "raw": "2",
                        "start": 320,
                        "end": 321
                      },
                      "start": 320,
                      "end": 321
                    },
                    "optional": true,
                    "start": 316,
                    "end": 321
                  }
                ],
                "start": 309,
                "end": 322
              },
              "start": 307,
              "end": 322
            },
            "start": 306,
            "end": 322
          },
          "init": null,
          "definite": false,
          "start": 306,
          "end": 322
        }
      ],
      "declare": false,
      "start": 302,
      "end": 323
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
            "name": "v",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTupleType",
                "elementTypes": [
                  {
                    "type": "TSNamedTupleMember",
                    "label": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "a",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 332,
                      "end": 333
                    },
                    "elementType": {
                      "type": "TSLiteralType",
                      "literal": {
                        "type": "Literal",
                        "value": 1,
                        "raw": "1",
                        "start": 335,
                        "end": 336
                      },
                      "start": 335,
                      "end": 336
                    },
                    "optional": false,
                    "start": 332,
                    "end": 336
                  },
                  {
                    "type": "TSNamedTupleMember",
                    "label": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "b",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 338,
                      "end": 339
                    },
                    "elementType": {
                      "type": "TSUnionType",
                      "types": [
                        {
                          "type": "TSLiteralType",
                          "literal": {
                            "type": "Literal",
                            "value": 2,
                            "raw": "2",
                            "start": 342,
                            "end": 343
                          },
                          "start": 342,
                          "end": 343
                        },
                        {
                          "type": "TSUndefinedKeyword",
                          "start": 346,
                          "end": 355
                        }
                      ],
                      "start": 342,
                      "end": 355
                    },
                    "optional": true,
                    "start": 338,
                    "end": 355
                  }
                ],
                "start": 331,
                "end": 356
              },
              "start": 329,
              "end": 356
            },
            "start": 328,
            "end": 356
          },
          "init": null,
          "definite": false,
          "start": 328,
          "end": 356
        }
      ],
      "declare": false,
      "start": 324,
      "end": 357
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
            "name": "v",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "UnNullify",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 365,
                  "end": 374
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSTupleType",
                      "elementTypes": [
                        {
                          "type": "TSLiteralType",
                          "literal": {
                            "type": "Literal",
                            "value": 1,
                            "raw": "1",
                            "start": 376,
                            "end": 377
                          },
                          "start": 376,
                          "end": 377
                        },
                        {
                          "type": "TSOptionalType",
                          "typeAnnotation": {
                            "type": "TSLiteralType",
                            "literal": {
                              "type": "Literal",
                              "value": 2,
                              "raw": "2",
                              "start": 379,
                              "end": 380
                            },
                            "start": 379,
                            "end": 380
                          },
                          "start": 379,
                          "end": 381
                        }
                      ],
                      "start": 375,
                      "end": 382
                    }
                  ],
                  "start": 374,
                  "end": 383
                },
                "start": 365,
                "end": 383
              },
              "start": 363,
              "end": 383
            },
            "start": 362,
            "end": 383
          },
          "init": null,
          "definite": false,
          "start": 362,
          "end": 383
        }
      ],
      "declare": false,
      "start": 358,
      "end": 384
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
            "name": "v",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "UnNullify",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 392,
                  "end": 401
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSTupleType",
                      "elementTypes": [
                        {
                          "type": "TSLiteralType",
                          "literal": {
                            "type": "Literal",
                            "value": 1,
                            "raw": "1",
                            "start": 403,
                            "end": 404
                          },
                          "start": 403,
                          "end": 404
                        },
                        {
                          "type": "TSOptionalType",
                          "typeAnnotation": {
                            "type": "TSUnionType",
                            "types": [
                              {
                                "type": "TSLiteralType",
                                "literal": {
                                  "type": "Literal",
                                  "value": 2,
                                  "raw": "2",
                                  "start": 407,
                                  "end": 408
                                },
                                "start": 407,
                                "end": 408
                              },
                              {
                                "type": "TSUndefinedKeyword",
                                "start": 411,
                                "end": 420
                              }
                            ],
                            "start": 407,
                            "end": 420
                          },
                          "start": 406,
                          "end": 422
                        }
                      ],
                      "start": 402,
                      "end": 423
                    }
                  ],
                  "start": 401,
                  "end": 424
                },
                "start": 392,
                "end": 424
              },
              "start": 390,
              "end": 424
            },
            "start": 389,
            "end": 424
          },
          "init": null,
          "definite": false,
          "start": 389,
          "end": 424
        }
      ],
      "declare": false,
      "start": 385,
      "end": 425
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
            "name": "v",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "UnNullify",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 433,
                  "end": 442
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSTupleType",
                      "elementTypes": [
                        {
                          "type": "TSNamedTupleMember",
                          "label": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "a",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 444,
                            "end": 445
                          },
                          "elementType": {
                            "type": "TSLiteralType",
                            "literal": {
                              "type": "Literal",
                              "value": 1,
                              "raw": "1",
                              "start": 447,
                              "end": 448
                            },
                            "start": 447,
                            "end": 448
                          },
                          "optional": false,
                          "start": 444,
                          "end": 448
                        },
                        {
                          "type": "TSNamedTupleMember",
                          "label": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "b",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 450,
                            "end": 451
                          },
                          "elementType": {
                            "type": "TSLiteralType",
                            "literal": {
                              "type": "Literal",
                              "value": 2,
                              "raw": "2",
                              "start": 454,
                              "end": 455
                            },
                            "start": 454,
                            "end": 455
                          },
                          "optional": true,
                          "start": 450,
                          "end": 455
                        }
                      ],
                      "start": 443,
                      "end": 456
                    }
                  ],
                  "start": 442,
                  "end": 457
                },
                "start": 433,
                "end": 457
              },
              "start": 431,
              "end": 457
            },
            "start": 430,
            "end": 457
          },
          "init": null,
          "definite": false,
          "start": 430,
          "end": 457
        }
      ],
      "declare": false,
      "start": 426,
      "end": 458
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
            "name": "v",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "UnNullify",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 466,
                  "end": 475
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSTupleType",
                      "elementTypes": [
                        {
                          "type": "TSNamedTupleMember",
                          "label": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "a",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 477,
                            "end": 478
                          },
                          "elementType": {
                            "type": "TSLiteralType",
                            "literal": {
                              "type": "Literal",
                              "value": 1,
                              "raw": "1",
                              "start": 480,
                              "end": 481
                            },
                            "start": 480,
                            "end": 481
                          },
                          "optional": false,
                          "start": 477,
                          "end": 481
                        },
                        {
                          "type": "TSNamedTupleMember",
                          "label": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "b",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 483,
                            "end": 484
                          },
                          "elementType": {
                            "type": "TSUnionType",
                            "types": [
                              {
                                "type": "TSLiteralType",
                                "literal": {
                                  "type": "Literal",
                                  "value": 2,
                                  "raw": "2",
                                  "start": 487,
                                  "end": 488
                                },
                                "start": 487,
                                "end": 488
                              },
                              {
                                "type": "TSUndefinedKeyword",
                                "start": 491,
                                "end": 500
                              }
                            ],
                            "start": 487,
                            "end": 500
                          },
                          "optional": true,
                          "start": 483,
                          "end": 500
                        }
                      ],
                      "start": 476,
                      "end": 501
                    }
                  ],
                  "start": 475,
                  "end": 502
                },
                "start": 466,
                "end": 502
              },
              "start": 464,
              "end": 502
            },
            "start": 463,
            "end": 502
          },
          "init": null,
          "definite": false,
          "start": 463,
          "end": 502
        }
      ],
      "declare": false,
      "start": 459,
      "end": 503
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 22,
  "end": 503
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Identifier",
    "value": "type",
    "start": 22,
    "end": 26
  },
  {
    "type": "Identifier",
    "value": "UnNullify",
    "start": 27,
    "end": 36
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 36,
    "end": 37
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 37,
    "end": 38
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 38,
    "end": 39
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 40,
    "end": 41
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 42,
    "end": 43
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 44,
    "end": 45
  },
  {
    "type": "Identifier",
    "value": "K",
    "start": 45,
    "end": 46
  },
  {
    "type": "Keyword",
    "value": "in",
    "start": 47,
    "end": 49
  },
  {
    "type": "Identifier",
    "value": "keyof",
    "start": 50,
    "end": 55
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 56,
    "end": 57
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 57,
    "end": 58
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 58,
    "end": 59
  },
  {
    "type": "Identifier",
    "value": "NonNullable",
    "start": 60,
    "end": 71
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 71,
    "end": 72
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 72,
    "end": 73
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 73,
    "end": 74
  },
  {
    "type": "Identifier",
    "value": "K",
    "start": 74,
    "end": 75
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 75,
    "end": 76
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 76,
    "end": 77
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 78,
    "end": 79
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 79,
    "end": 80
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 82,
    "end": 86
  },
  {
    "type": "Identifier",
    "value": "Foo",
    "start": 87,
    "end": 90
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 91,
    "end": 92
  },
  {
    "type": "Identifier",
    "value": "UnNullify",
    "start": 93,
    "end": 102
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 102,
    "end": 103
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 103,
    "end": 104
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 104,
    "end": 105
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 105,
    "end": 106
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 107,
    "end": 108
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 108,
    "end": 109
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 110,
    "end": 111
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 111,
    "end": 112
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 112,
    "end": 113
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 114,
    "end": 115
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 116,
    "end": 117
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 118,
    "end": 127
  },
  {
    "type": "Punctuator",
    "value": "]",
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
    "value": ";",
    "start": 129,
    "end": 130
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 132,
    "end": 136
  },
  {
    "type": "Identifier",
    "value": "Test",
    "start": 137,
    "end": 141
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 142,
    "end": 143
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 144,
    "end": 145
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 145,
    "end": 146
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 146,
    "end": 147
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 148,
    "end": 149
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 149,
    "end": 150
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 151,
    "end": 152
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 152,
    "end": 153
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 153,
    "end": 154
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 155,
    "end": 156
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 156,
    "end": 157
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 158,
    "end": 165
  },
  {
    "type": "Identifier",
    "value": "Foo",
    "start": 166,
    "end": 169
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 170,
    "end": 171
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 172,
    "end": 176
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 177,
    "end": 178
  },
  {
    "type": "Boolean",
    "value": "false",
    "start": 179,
    "end": 184
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 184,
    "end": 185
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 256,
    "end": 259
  },
  {
    "type": "Identifier",
    "value": "v",
    "start": 260,
    "end": 261
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 261,
    "end": 262
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 263,
    "end": 264
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 264,
    "end": 265
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 265,
    "end": 266
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 267,
    "end": 268
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 268,
    "end": 269
  },
  {
    "type": "Punctuator",
    "value": "]",
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
    "type": "Keyword",
    "value": "var",
    "start": 272,
    "end": 275
  },
  {
    "type": "Identifier",
    "value": "v",
    "start": 276,
    "end": 277
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 277,
    "end": 278
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 279,
    "end": 280
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 280,
    "end": 281
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 281,
    "end": 282
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 283,
    "end": 284
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 284,
    "end": 285
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 286,
    "end": 287
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 288,
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
    "value": "?",
    "start": 298,
    "end": 299
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 299,
    "end": 300
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 300,
    "end": 301
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 302,
    "end": 305
  },
  {
    "type": "Identifier",
    "value": "v",
    "start": 306,
    "end": 307
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 307,
    "end": 308
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 309,
    "end": 310
  },
  {
    "type": "Identifier",
    "value": "a",
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
    "type": "Numeric",
    "value": "1",
    "start": 313,
    "end": 314
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 314,
    "end": 315
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 316,
    "end": 317
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 317,
    "end": 318
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 318,
    "end": 319
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 320,
    "end": 321
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 321,
    "end": 322
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 322,
    "end": 323
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 324,
    "end": 327
  },
  {
    "type": "Identifier",
    "value": "v",
    "start": 328,
    "end": 329
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 329,
    "end": 330
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 331,
    "end": 332
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 332,
    "end": 333
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 333,
    "end": 334
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 335,
    "end": 336
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 336,
    "end": 337
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 338,
    "end": 339
  },
  {
    "type": "Punctuator",
    "value": "?",
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
    "type": "Numeric",
    "value": "2",
    "start": 342,
    "end": 343
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 344,
    "end": 345
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 346,
    "end": 355
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 355,
    "end": 356
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 356,
    "end": 357
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 358,
    "end": 361
  },
  {
    "type": "Identifier",
    "value": "v",
    "start": 362,
    "end": 363
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 363,
    "end": 364
  },
  {
    "type": "Identifier",
    "value": "UnNullify",
    "start": 365,
    "end": 374
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 374,
    "end": 375
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 375,
    "end": 376
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 376,
    "end": 377
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 377,
    "end": 378
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 379,
    "end": 380
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 380,
    "end": 381
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 381,
    "end": 382
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 382,
    "end": 383
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 383,
    "end": 384
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 385,
    "end": 388
  },
  {
    "type": "Identifier",
    "value": "v",
    "start": 389,
    "end": 390
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 390,
    "end": 391
  },
  {
    "type": "Identifier",
    "value": "UnNullify",
    "start": 392,
    "end": 401
  },
  {
    "type": "Punctuator",
    "value": "<",
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
    "type": "Numeric",
    "value": "1",
    "start": 403,
    "end": 404
  },
  {
    "type": "Punctuator",
    "value": ",",
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
    "type": "Numeric",
    "value": "2",
    "start": 407,
    "end": 408
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 409,
    "end": 410
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 411,
    "end": 420
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 420,
    "end": 421
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 421,
    "end": 422
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 422,
    "end": 423
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 423,
    "end": 424
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 424,
    "end": 425
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 426,
    "end": 429
  },
  {
    "type": "Identifier",
    "value": "v",
    "start": 430,
    "end": 431
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 431,
    "end": 432
  },
  {
    "type": "Identifier",
    "value": "UnNullify",
    "start": 433,
    "end": 442
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 442,
    "end": 443
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 443,
    "end": 444
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 444,
    "end": 445
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 445,
    "end": 446
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 447,
    "end": 448
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 448,
    "end": 449
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 450,
    "end": 451
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 451,
    "end": 452
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 452,
    "end": 453
  },
  {
    "type": "Numeric",
    "value": "2",
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
    "value": ">",
    "start": 456,
    "end": 457
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 457,
    "end": 458
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 459,
    "end": 462
  },
  {
    "type": "Identifier",
    "value": "v",
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
    "value": "UnNullify",
    "start": 466,
    "end": 475
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 475,
    "end": 476
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 476,
    "end": 477
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 477,
    "end": 478
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 478,
    "end": 479
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 480,
    "end": 481
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 481,
    "end": 482
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 483,
    "end": 484
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 484,
    "end": 485
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 485,
    "end": 486
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 487,
    "end": 488
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 489,
    "end": 490
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 491,
    "end": 500
  },
  {
    "type": "Punctuator",
    "value": "]",
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
    "value": ";",
    "start": 502,
    "end": 503
  }
]
```
