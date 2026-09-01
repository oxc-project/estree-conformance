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
        "name": "A",
        "optional": false,
        "typeAnnotation": null,
        "start": 72,
        "end": 73
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
              "name": "a",
              "optional": false,
              "typeAnnotation": null,
              "start": 80,
              "end": 81
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSBooleanKeyword",
                "start": 83,
                "end": 90
              },
              "start": 81,
              "end": 90
            },
            "accessibility": null,
            "static": false,
            "start": 80,
            "end": 91
          }
        ],
        "start": 76,
        "end": 93
      },
      "declare": false,
      "start": 67,
      "end": 94
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "B",
        "optional": false,
        "typeAnnotation": null,
        "start": 101,
        "end": 102
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
              "name": "b",
              "optional": false,
              "typeAnnotation": null,
              "start": 109,
              "end": 110
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 112,
                "end": 118
              },
              "start": 110,
              "end": 118
            },
            "accessibility": null,
            "static": false,
            "start": 109,
            "end": 119
          }
        ],
        "start": 105,
        "end": 121
      },
      "declare": false,
      "start": 96,
      "end": 122
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "C",
        "optional": false,
        "typeAnnotation": null,
        "start": 129,
        "end": 130
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
              "name": "c",
              "optional": false,
              "typeAnnotation": null,
              "start": 137,
              "end": 138
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 140,
                "end": 146
              },
              "start": 138,
              "end": 146
            },
            "accessibility": null,
            "static": false,
            "start": 137,
            "end": 147
          }
        ],
        "start": 133,
        "end": 149
      },
      "declare": false,
      "start": 124,
      "end": 150
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Animations",
        "optional": false,
        "typeAnnotation": null,
        "start": 157,
        "end": 167
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeLiteral",
        "members": [
          {
            "type": "TSIndexSignature",
            "parameters": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "key",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 180,
                    "end": 186
                  },
                  "start": 178,
                  "end": 186
                },
                "start": 175,
                "end": 186
              }
            ],
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSIntersectionType",
                "types": [
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
                          "name": "value",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 191,
                          "end": 196
                        },
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSNumberKeyword",
                            "start": 198,
                            "end": 204
                          },
                          "start": 196,
                          "end": 204
                        },
                        "accessibility": null,
                        "static": false,
                        "start": 191,
                        "end": 204
                      }
                    ],
                    "start": 189,
                    "end": 206
                  },
                  {
                    "type": "TSUnionType",
                    "types": [
                      {
                        "type": "TSIntersectionType",
                        "types": [
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
                                  "name": "kind",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 220,
                                  "end": 224
                                },
                                "typeAnnotation": {
                                  "type": "TSTypeAnnotation",
                                  "typeAnnotation": {
                                    "type": "TSLiteralType",
                                    "literal": {
                                      "type": "Literal",
                                      "value": "a",
                                      "raw": "\"a\"",
                                      "start": 226,
                                      "end": 229
                                    },
                                    "start": 226,
                                    "end": 229
                                  },
                                  "start": 224,
                                  "end": 229
                                },
                                "accessibility": null,
                                "static": false,
                                "start": 220,
                                "end": 230
                              },
                              {
                                "type": "TSMethodSignature",
                                "key": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "func",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 231,
                                  "end": 235
                                },
                                "computed": false,
                                "optional": true,
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
                                      "name": "Partial",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 240,
                                      "end": 247
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
                                            "start": 248,
                                            "end": 249
                                          },
                                          "typeArguments": null,
                                          "start": 248,
                                          "end": 249
                                        }
                                      ],
                                      "start": 247,
                                      "end": 250
                                    },
                                    "start": 240,
                                    "end": 250
                                  },
                                  "start": 238,
                                  "end": 250
                                },
                                "accessibility": null,
                                "readonly": false,
                                "static": false,
                                "start": 231,
                                "end": 250
                              }
                            ],
                            "start": 218,
                            "end": 252
                          },
                          {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "A",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 255,
                              "end": 256
                            },
                            "typeArguments": null,
                            "start": 255,
                            "end": 256
                          }
                        ],
                        "start": 218,
                        "end": 256
                      },
                      {
                        "type": "TSIntersectionType",
                        "types": [
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
                                  "name": "kind",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 267,
                                  "end": 271
                                },
                                "typeAnnotation": {
                                  "type": "TSTypeAnnotation",
                                  "typeAnnotation": {
                                    "type": "TSLiteralType",
                                    "literal": {
                                      "type": "Literal",
                                      "value": "b",
                                      "raw": "\"b\"",
                                      "start": 273,
                                      "end": 276
                                    },
                                    "start": 273,
                                    "end": 276
                                  },
                                  "start": 271,
                                  "end": 276
                                },
                                "accessibility": null,
                                "static": false,
                                "start": 267,
                                "end": 277
                              },
                              {
                                "type": "TSMethodSignature",
                                "key": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "func",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 278,
                                  "end": 282
                                },
                                "computed": false,
                                "optional": true,
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
                                      "name": "Partial",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 287,
                                      "end": 294
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
                                            "start": 295,
                                            "end": 296
                                          },
                                          "typeArguments": null,
                                          "start": 295,
                                          "end": 296
                                        }
                                      ],
                                      "start": 294,
                                      "end": 297
                                    },
                                    "start": 287,
                                    "end": 297
                                  },
                                  "start": 285,
                                  "end": 297
                                },
                                "accessibility": null,
                                "readonly": false,
                                "static": false,
                                "start": 278,
                                "end": 297
                              }
                            ],
                            "start": 265,
                            "end": 299
                          },
                          {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "B",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 302,
                              "end": 303
                            },
                            "typeArguments": null,
                            "start": 302,
                            "end": 303
                          }
                        ],
                        "start": 265,
                        "end": 303
                      },
                      {
                        "type": "TSIntersectionType",
                        "types": [
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
                                  "name": "kind",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 314,
                                  "end": 318
                                },
                                "typeAnnotation": {
                                  "type": "TSTypeAnnotation",
                                  "typeAnnotation": {
                                    "type": "TSLiteralType",
                                    "literal": {
                                      "type": "Literal",
                                      "value": "c",
                                      "raw": "\"c\"",
                                      "start": 320,
                                      "end": 323
                                    },
                                    "start": 320,
                                    "end": 323
                                  },
                                  "start": 318,
                                  "end": 323
                                },
                                "accessibility": null,
                                "static": false,
                                "start": 314,
                                "end": 324
                              },
                              {
                                "type": "TSMethodSignature",
                                "key": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "func",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 325,
                                  "end": 329
                                },
                                "computed": false,
                                "optional": true,
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
                                      "name": "Partial",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 334,
                                      "end": 341
                                    },
                                    "typeArguments": {
                                      "type": "TSTypeParameterInstantiation",
                                      "params": [
                                        {
                                          "type": "TSTypeReference",
                                          "typeName": {
                                            "type": "Identifier",
                                            "decorators": [],
                                            "name": "C",
                                            "optional": false,
                                            "typeAnnotation": null,
                                            "start": 342,
                                            "end": 343
                                          },
                                          "typeArguments": null,
                                          "start": 342,
                                          "end": 343
                                        }
                                      ],
                                      "start": 341,
                                      "end": 344
                                    },
                                    "start": 334,
                                    "end": 344
                                  },
                                  "start": 332,
                                  "end": 344
                                },
                                "accessibility": null,
                                "readonly": false,
                                "static": false,
                                "start": 325,
                                "end": 344
                              }
                            ],
                            "start": 312,
                            "end": 346
                          },
                          {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "C",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 349,
                              "end": 350
                            },
                            "typeArguments": null,
                            "start": 349,
                            "end": 350
                          }
                        ],
                        "start": 312,
                        "end": 350
                      }
                    ],
                    "start": 215,
                    "end": 351
                  }
                ],
                "start": 189,
                "end": 355
              },
              "start": 187,
              "end": 355
            },
            "readonly": false,
            "static": false,
            "accessibility": null,
            "start": 174,
            "end": 356
          }
        ],
        "start": 170,
        "end": 358
      },
      "declare": false,
      "start": 152,
      "end": 359
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "StyleParam",
        "optional": false,
        "typeAnnotation": null,
        "start": 366,
        "end": 376
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
              "start": 377,
              "end": 378
            },
            "constraint": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Animations",
                "optional": false,
                "typeAnnotation": null,
                "start": 387,
                "end": 397
              },
              "typeArguments": null,
              "start": 387,
              "end": 397
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 377,
            "end": 397
          }
        ],
        "start": 376,
        "end": 398
      },
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "Record",
          "optional": false,
          "typeAnnotation": null,
          "start": 401,
          "end": 407
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
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
                  "start": 414,
                  "end": 415
                },
                "typeArguments": null,
                "start": 414,
                "end": 415
              },
              "start": 408,
              "end": 415
            },
            {
              "type": "TSStringKeyword",
              "start": 417,
              "end": 423
            }
          ],
          "start": 407,
          "end": 424
        },
        "start": 401,
        "end": 424
      },
      "declare": false,
      "start": 361,
      "end": 425
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "AnimatedViewProps",
        "optional": false,
        "typeAnnotation": null,
        "start": 432,
        "end": 449
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
              "start": 450,
              "end": 451
            },
            "constraint": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Animations",
                "optional": false,
                "typeAnnotation": null,
                "start": 460,
                "end": 470
              },
              "typeArguments": null,
              "start": 460,
              "end": 470
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 450,
            "end": 470
          }
        ],
        "start": 449,
        "end": 471
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
              "name": "style",
              "optional": false,
              "typeAnnotation": null,
              "start": 478,
              "end": 483
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
                    "name": "animationsValues",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "StyleParam",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 504,
                          "end": 514
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
                                "start": 515,
                                "end": 516
                              },
                              "typeArguments": null,
                              "start": 515,
                              "end": 516
                            }
                          ],
                          "start": 514,
                          "end": 517
                        },
                        "start": 504,
                        "end": 517
                      },
                      "start": 502,
                      "end": 517
                    },
                    "start": 486,
                    "end": 517
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 522,
                    "end": 528
                  },
                  "start": 519,
                  "end": 528
                },
                "start": 485,
                "end": 528
              },
              "start": 483,
              "end": 528
            },
            "accessibility": null,
            "static": false,
            "start": 478,
            "end": 529
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "animations",
              "optional": false,
              "typeAnnotation": null,
              "start": 532,
              "end": 542
            },
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
                  "start": 544,
                  "end": 545
                },
                "typeArguments": null,
                "start": 544,
                "end": 545
              },
              "start": 542,
              "end": 545
            },
            "accessibility": null,
            "static": false,
            "start": 532,
            "end": 546
          }
        ],
        "start": 474,
        "end": 548
      },
      "declare": false,
      "start": 427,
      "end": 549
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
            "name": "Component",
            "optional": false,
            "typeAnnotation": null,
            "start": 557,
            "end": 566
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "expression": true,
            "async": false,
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
                    "start": 570,
                    "end": 571
                  },
                  "constraint": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Animations",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 580,
                      "end": 590
                    },
                    "typeArguments": null,
                    "start": 580,
                    "end": 590
                  },
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 570,
                  "end": 590
                }
              ],
              "start": 569,
              "end": 591
            },
            "params": [
              {
                "type": "ObjectPattern",
                "decorators": [],
                "properties": [
                  {
                    "type": "Property",
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "animations",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 596,
                      "end": 606
                    },
                    "value": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "animations",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 596,
                      "end": 606
                    },
                    "method": false,
                    "shorthand": true,
                    "computed": false,
                    "optional": false,
                    "start": 596,
                    "end": 606
                  },
                  {
                    "type": "Property",
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "style",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 610,
                      "end": 615
                    },
                    "value": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "style",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 610,
                      "end": 615
                    },
                    "method": false,
                    "shorthand": true,
                    "computed": false,
                    "optional": false,
                    "start": 610,
                    "end": 615
                  }
                ],
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "AnimatedViewProps",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 620,
                      "end": 637
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
                            "start": 638,
                            "end": 639
                          },
                          "typeArguments": null,
                          "start": 638,
                          "end": 639
                        }
                      ],
                      "start": 637,
                      "end": 640
                    },
                    "start": 620,
                    "end": 640
                  },
                  "start": 618,
                  "end": 640
                },
                "start": 592,
                "end": 640
              }
            ],
            "returnType": null,
            "body": {
              "type": "JSXFragment",
              "openingFragment": {
                "type": "JSXOpeningFragment",
                "start": 645,
                "end": 647
              },
              "children": [],
              "closingFragment": {
                "type": "JSXClosingFragment",
                "start": 647,
                "end": 650
              },
              "start": 645,
              "end": 650
            },
            "id": null,
            "generator": false,
            "start": 569,
            "end": 650
          },
          "definite": false,
          "start": 557,
          "end": 650
        }
      ],
      "declare": false,
      "start": 551,
      "end": 651
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "JSXElement",
        "openingElement": {
          "type": "JSXOpeningElement",
          "name": {
            "type": "JSXIdentifier",
            "name": "Component",
            "start": 654,
            "end": 663
          },
          "typeArguments": null,
          "attributes": [
            {
              "type": "JSXAttribute",
              "name": {
                "type": "JSXIdentifier",
                "name": "animations",
                "start": 666,
                "end": 676
              },
              "value": {
                "type": "JSXExpressionContainer",
                "expression": {
                  "type": "ObjectExpression",
                  "properties": [
                    {
                      "type": "Property",
                      "kind": "init",
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "test",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 684,
                        "end": 688
                      },
                      "value": {
                        "type": "ObjectExpression",
                        "properties": [
                          {
                            "type": "Property",
                            "kind": "init",
                            "key": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "kind",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 698,
                              "end": 702
                            },
                            "value": {
                              "type": "Literal",
                              "value": "a",
                              "raw": "\"a\"",
                              "start": 704,
                              "end": 707
                            },
                            "method": false,
                            "shorthand": false,
                            "computed": false,
                            "optional": false,
                            "start": 698,
                            "end": 707
                          },
                          {
                            "type": "Property",
                            "kind": "init",
                            "key": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "value",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 715,
                              "end": 720
                            },
                            "value": {
                              "type": "Literal",
                              "value": 1,
                              "raw": "1",
                              "start": 722,
                              "end": 723
                            },
                            "method": false,
                            "shorthand": false,
                            "computed": false,
                            "optional": false,
                            "start": 715,
                            "end": 723
                          },
                          {
                            "type": "Property",
                            "kind": "init",
                            "key": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "a",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 731,
                              "end": 732
                            },
                            "value": {
                              "type": "Literal",
                              "value": true,
                              "raw": "true",
                              "start": 734,
                              "end": 738
                            },
                            "method": false,
                            "shorthand": false,
                            "computed": false,
                            "optional": false,
                            "start": 731,
                            "end": 738
                          }
                        ],
                        "start": 690,
                        "end": 745
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "optional": false,
                      "start": 684,
                      "end": 745
                    }
                  ],
                  "start": 678,
                  "end": 750
                },
                "start": 677,
                "end": 751
              },
              "start": 666,
              "end": 751
            },
            {
              "type": "JSXAttribute",
              "name": {
                "type": "JSXIdentifier",
                "name": "style",
                "start": 754,
                "end": 759
              },
              "value": {
                "type": "JSXExpressionContainer",
                "expression": {
                  "type": "ArrowFunctionExpression",
                  "expression": false,
                  "async": false,
                  "typeParameters": null,
                  "params": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "anim",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 762,
                      "end": 766
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
                          "value": "",
                          "raw": "\"\"",
                          "start": 784,
                          "end": 786
                        },
                        "start": 777,
                        "end": 787
                      }
                    ],
                    "start": 771,
                    "end": 791
                  },
                  "id": null,
                  "generator": false,
                  "start": 761,
                  "end": 791
                },
                "start": 760,
                "end": 792
              },
              "start": 754,
              "end": 792
            }
          ],
          "selfClosing": true,
          "start": 653,
          "end": 795
        },
        "children": [],
        "closingElement": null,
        "start": 653,
        "end": 795
      },
      "directive": null,
      "start": 653,
      "end": 796
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "JSXElement",
        "openingElement": {
          "type": "JSXOpeningElement",
          "name": {
            "type": "JSXIdentifier",
            "name": "Component",
            "start": 798,
            "end": 807
          },
          "typeArguments": null,
          "attributes": [
            {
              "type": "JSXAttribute",
              "name": {
                "type": "JSXIdentifier",
                "name": "animations",
                "start": 810,
                "end": 820
              },
              "value": {
                "type": "JSXExpressionContainer",
                "expression": {
                  "type": "ObjectExpression",
                  "properties": [
                    {
                      "type": "Property",
                      "kind": "init",
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "test",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 828,
                        "end": 832
                      },
                      "value": {
                        "type": "ObjectExpression",
                        "properties": [
                          {
                            "type": "Property",
                            "kind": "init",
                            "key": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "kind",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 842,
                              "end": 846
                            },
                            "value": {
                              "type": "Literal",
                              "value": "a",
                              "raw": "\"a\"",
                              "start": 848,
                              "end": 851
                            },
                            "method": false,
                            "shorthand": false,
                            "computed": false,
                            "optional": false,
                            "start": 842,
                            "end": 851
                          },
                          {
                            "type": "Property",
                            "kind": "init",
                            "key": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "value",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 859,
                              "end": 864
                            },
                            "value": {
                              "type": "Literal",
                              "value": 1,
                              "raw": "1",
                              "start": 866,
                              "end": 867
                            },
                            "method": false,
                            "shorthand": false,
                            "computed": false,
                            "optional": false,
                            "start": 859,
                            "end": 867
                          },
                          {
                            "type": "Property",
                            "kind": "init",
                            "key": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "a",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 875,
                              "end": 876
                            },
                            "value": {
                              "type": "Literal",
                              "value": true,
                              "raw": "true",
                              "start": 878,
                              "end": 882
                            },
                            "method": false,
                            "shorthand": false,
                            "computed": false,
                            "optional": false,
                            "start": 875,
                            "end": 882
                          },
                          {
                            "type": "Property",
                            "kind": "init",
                            "key": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "func",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 890,
                              "end": 894
                            },
                            "value": {
                              "type": "FunctionExpression",
                              "id": null,
                              "generator": false,
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
                                            "start": 926,
                                            "end": 927
                                          },
                                          "value": {
                                            "type": "Literal",
                                            "value": true,
                                            "raw": "true",
                                            "start": 929,
                                            "end": 933
                                          },
                                          "method": false,
                                          "shorthand": false,
                                          "computed": false,
                                          "optional": false,
                                          "start": 926,
                                          "end": 933
                                        }
                                      ],
                                      "start": 914,
                                      "end": 944
                                    },
                                    "start": 907,
                                    "end": 945
                                  }
                                ],
                                "start": 897,
                                "end": 953
                              },
                              "expression": false,
                              "start": 894,
                              "end": 953
                            },
                            "method": true,
                            "shorthand": false,
                            "computed": false,
                            "optional": false,
                            "start": 890,
                            "end": 953
                          }
                        ],
                        "start": 834,
                        "end": 960
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "optional": false,
                      "start": 828,
                      "end": 960
                    }
                  ],
                  "start": 822,
                  "end": 965
                },
                "start": 821,
                "end": 966
              },
              "start": 810,
              "end": 966
            },
            {
              "type": "JSXAttribute",
              "name": {
                "type": "JSXIdentifier",
                "name": "style",
                "start": 969,
                "end": 974
              },
              "value": {
                "type": "JSXExpressionContainer",
                "expression": {
                  "type": "ArrowFunctionExpression",
                  "expression": false,
                  "async": false,
                  "typeParameters": null,
                  "params": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "anim",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 977,
                      "end": 981
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
                          "value": "",
                          "raw": "\"\"",
                          "start": 999,
                          "end": 1001
                        },
                        "start": 992,
                        "end": 1002
                      }
                    ],
                    "start": 986,
                    "end": 1006
                  },
                  "id": null,
                  "generator": false,
                  "start": 976,
                  "end": 1006
                },
                "start": 975,
                "end": 1007
              },
              "start": 969,
              "end": 1007
            }
          ],
          "selfClosing": true,
          "start": 797,
          "end": 1010
        },
        "children": [],
        "closingElement": null,
        "start": 797,
        "end": 1010
      },
      "directive": null,
      "start": 797,
      "end": 1011
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "JSXElement",
        "openingElement": {
          "type": "JSXOpeningElement",
          "name": {
            "type": "JSXIdentifier",
            "name": "Component",
            "start": 1013,
            "end": 1022
          },
          "typeArguments": null,
          "attributes": [
            {
              "type": "JSXAttribute",
              "name": {
                "type": "JSXIdentifier",
                "name": "animations",
                "start": 1025,
                "end": 1035
              },
              "value": {
                "type": "JSXExpressionContainer",
                "expression": {
                  "type": "ObjectExpression",
                  "properties": [
                    {
                      "type": "Property",
                      "kind": "init",
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "test",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1043,
                        "end": 1047
                      },
                      "value": {
                        "type": "ObjectExpression",
                        "properties": [
                          {
                            "type": "Property",
                            "kind": "init",
                            "key": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "kind",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 1057,
                              "end": 1061
                            },
                            "value": {
                              "type": "Literal",
                              "value": "a",
                              "raw": "\"a\"",
                              "start": 1063,
                              "end": 1066
                            },
                            "method": false,
                            "shorthand": false,
                            "computed": false,
                            "optional": false,
                            "start": 1057,
                            "end": 1066
                          },
                          {
                            "type": "Property",
                            "kind": "init",
                            "key": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "value",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 1074,
                              "end": 1079
                            },
                            "value": {
                              "type": "Literal",
                              "value": 1,
                              "raw": "1",
                              "start": 1081,
                              "end": 1082
                            },
                            "method": false,
                            "shorthand": false,
                            "computed": false,
                            "optional": false,
                            "start": 1074,
                            "end": 1082
                          },
                          {
                            "type": "Property",
                            "kind": "init",
                            "key": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "a",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 1090,
                              "end": 1091
                            },
                            "value": {
                              "type": "Literal",
                              "value": true,
                              "raw": "true",
                              "start": 1093,
                              "end": 1097
                            },
                            "method": false,
                            "shorthand": false,
                            "computed": false,
                            "optional": false,
                            "start": 1090,
                            "end": 1097
                          },
                          {
                            "type": "Property",
                            "kind": "init",
                            "key": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "func",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 1105,
                              "end": 1109
                            },
                            "value": {
                              "type": "ArrowFunctionExpression",
                              "expression": false,
                              "async": false,
                              "typeParameters": null,
                              "params": [],
                              "returnType": null,
                              "body": {
                                "type": "BlockStatement",
                                "body": [
                                  {
                                    "type": "ReturnStatement",
                                    "argument": {
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
                                            "start": 1146,
                                            "end": 1147
                                          },
                                          "value": {
                                            "type": "Literal",
                                            "value": true,
                                            "raw": "true",
                                            "start": 1149,
                                            "end": 1153
                                          },
                                          "method": false,
                                          "shorthand": false,
                                          "computed": false,
                                          "optional": false,
                                          "start": 1146,
                                          "end": 1153
                                        }
                                      ],
                                      "start": 1134,
                                      "end": 1164
                                    },
                                    "start": 1127,
                                    "end": 1165
                                  }
                                ],
                                "start": 1117,
                                "end": 1173
                              },
                              "id": null,
                              "generator": false,
                              "start": 1111,
                              "end": 1173
                            },
                            "method": false,
                            "shorthand": false,
                            "computed": false,
                            "optional": false,
                            "start": 1105,
                            "end": 1173
                          }
                        ],
                        "start": 1049,
                        "end": 1180
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "optional": false,
                      "start": 1043,
                      "end": 1180
                    }
                  ],
                  "start": 1037,
                  "end": 1185
                },
                "start": 1036,
                "end": 1186
              },
              "start": 1025,
              "end": 1186
            },
            {
              "type": "JSXAttribute",
              "name": {
                "type": "JSXIdentifier",
                "name": "style",
                "start": 1189,
                "end": 1194
              },
              "value": {
                "type": "JSXExpressionContainer",
                "expression": {
                  "type": "ArrowFunctionExpression",
                  "expression": false,
                  "async": false,
                  "typeParameters": null,
                  "params": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "anim",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1197,
                      "end": 1201
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
                          "value": "",
                          "raw": "\"\"",
                          "start": 1219,
                          "end": 1221
                        },
                        "start": 1212,
                        "end": 1222
                      }
                    ],
                    "start": 1206,
                    "end": 1226
                  },
                  "id": null,
                  "generator": false,
                  "start": 1196,
                  "end": 1226
                },
                "start": 1195,
                "end": 1227
              },
              "start": 1189,
              "end": 1227
            }
          ],
          "selfClosing": true,
          "start": 1012,
          "end": 1230
        },
        "children": [],
        "closingElement": null,
        "start": 1012,
        "end": 1230
      },
      "directive": null,
      "start": 1012,
      "end": 1231
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Props",
        "optional": false,
        "typeAnnotation": null,
        "start": 1265,
        "end": 1270
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
              "start": 1271,
              "end": 1272
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 1271,
            "end": 1272
          }
        ],
        "start": 1270,
        "end": 1273
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
              "name": "a",
              "optional": false,
              "typeAnnotation": null,
              "start": 1278,
              "end": 1279
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
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 1285,
                        "end": 1291
                      },
                      "start": 1283,
                      "end": 1291
                    },
                    "start": 1282,
                    "end": 1291
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
                      "start": 1296,
                      "end": 1297
                    },
                    "typeArguments": null,
                    "start": 1296,
                    "end": 1297
                  },
                  "start": 1293,
                  "end": 1297
                },
                "start": 1281,
                "end": 1297
              },
              "start": 1279,
              "end": 1297
            },
            "accessibility": null,
            "static": false,
            "start": 1278,
            "end": 1298
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "b",
              "optional": false,
              "typeAnnotation": null,
              "start": 1301,
              "end": 1302
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
                    "name": "arg",
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
                          "start": 1310,
                          "end": 1311
                        },
                        "typeArguments": null,
                        "start": 1310,
                        "end": 1311
                      },
                      "start": 1308,
                      "end": 1311
                    },
                    "start": 1305,
                    "end": 1311
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSVoidKeyword",
                    "start": 1316,
                    "end": 1320
                  },
                  "start": 1313,
                  "end": 1320
                },
                "start": 1304,
                "end": 1320
              },
              "start": 1302,
              "end": 1320
            },
            "accessibility": null,
            "static": false,
            "start": 1301,
            "end": 1321
          }
        ],
        "start": 1274,
        "end": 1323
      },
      "declare": false,
      "start": 1255,
      "end": 1323
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Foo",
        "optional": false,
        "typeAnnotation": null,
        "start": 1334,
        "end": 1337
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
              "start": 1338,
              "end": 1339
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 1338,
            "end": 1339
          }
        ],
        "start": 1337,
        "end": 1340
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "props",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Props",
                "optional": false,
                "typeAnnotation": null,
                "start": 1348,
                "end": 1353
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
                      "start": 1354,
                      "end": 1355
                    },
                    "typeArguments": null,
                    "start": 1354,
                    "end": 1355
                  }
                ],
                "start": 1353,
                "end": 1356
              },
              "start": 1348,
              "end": 1356
            },
            "start": 1346,
            "end": 1356
          },
          "start": 1341,
          "end": 1356
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "JSXElement",
              "openingElement": {
                "type": "JSXOpeningElement",
                "name": {
                  "type": "JSXIdentifier",
                  "name": "div",
                  "start": 1370,
                  "end": 1373
                },
                "typeArguments": null,
                "attributes": [],
                "selfClosing": true,
                "start": 1369,
                "end": 1376
              },
              "children": [],
              "closingElement": null,
              "start": 1369,
              "end": 1376
            },
            "start": 1362,
            "end": 1377
          }
        ],
        "start": 1358,
        "end": 1379
      },
      "expression": false,
      "start": 1325,
      "end": 1379
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "JSXElement",
        "openingElement": {
          "type": "JSXOpeningElement",
          "name": {
            "type": "JSXIdentifier",
            "name": "Foo",
            "start": 1382,
            "end": 1385
          },
          "typeArguments": null,
          "attributes": [
            {
              "type": "JSXAttribute",
              "name": {
                "type": "JSXIdentifier",
                "name": "a",
                "start": 1388,
                "end": 1389
              },
              "value": {
                "type": "JSXExpressionContainer",
                "expression": {
                  "type": "ArrowFunctionExpression",
                  "expression": true,
                  "async": false,
                  "typeParameters": null,
                  "params": [],
                  "returnType": null,
                  "body": {
                    "type": "Literal",
                    "value": 10,
                    "raw": "10",
                    "start": 1397,
                    "end": 1399
                  },
                  "id": null,
                  "generator": false,
                  "start": 1391,
                  "end": 1399
                },
                "start": 1390,
                "end": 1400
              },
              "start": 1388,
              "end": 1400
            },
            {
              "type": "JSXAttribute",
              "name": {
                "type": "JSXIdentifier",
                "name": "b",
                "start": 1403,
                "end": 1404
              },
              "value": {
                "type": "JSXExpressionContainer",
                "expression": {
                  "type": "ArrowFunctionExpression",
                  "expression": false,
                  "async": false,
                  "typeParameters": null,
                  "params": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "arg",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1407,
                      "end": 1410
                    }
                  ],
                  "returnType": null,
                  "body": {
                    "type": "BlockStatement",
                    "body": [
                      {
                        "type": "ExpressionStatement",
                        "expression": {
                          "type": "CallExpression",
                          "callee": {
                            "type": "MemberExpression",
                            "object": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "arg",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 1417,
                              "end": 1420
                            },
                            "property": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "toString",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 1421,
                              "end": 1429
                            },
                            "optional": false,
                            "computed": false,
                            "start": 1417,
                            "end": 1429
                          },
                          "typeArguments": null,
                          "arguments": [],
                          "optional": false,
                          "start": 1417,
                          "end": 1431
                        },
                        "directive": null,
                        "start": 1417,
                        "end": 1432
                      }
                    ],
                    "start": 1415,
                    "end": 1434
                  },
                  "id": null,
                  "generator": false,
                  "start": 1406,
                  "end": 1434
                },
                "start": 1405,
                "end": 1435
              },
              "start": 1403,
              "end": 1435
            }
          ],
          "selfClosing": true,
          "start": 1381,
          "end": 1438
        },
        "children": [],
        "closingElement": null,
        "start": 1381,
        "end": 1438
      },
      "directive": null,
      "start": 1381,
      "end": 1439
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "JSXElement",
        "openingElement": {
          "type": "JSXOpeningElement",
          "name": {
            "type": "JSXIdentifier",
            "name": "Foo",
            "start": 1442,
            "end": 1445
          },
          "typeArguments": null,
          "attributes": [
            {
              "type": "JSXAttribute",
              "name": {
                "type": "JSXIdentifier",
                "name": "a",
                "start": 1448,
                "end": 1449
              },
              "value": {
                "type": "JSXExpressionContainer",
                "expression": {
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
                      "start": 1452,
                      "end": 1453
                    }
                  ],
                  "returnType": null,
                  "body": {
                    "type": "Literal",
                    "value": 10,
                    "raw": "10",
                    "start": 1458,
                    "end": 1460
                  },
                  "id": null,
                  "generator": false,
                  "start": 1451,
                  "end": 1460
                },
                "start": 1450,
                "end": 1461
              },
              "start": 1448,
              "end": 1461
            },
            {
              "type": "JSXAttribute",
              "name": {
                "type": "JSXIdentifier",
                "name": "b",
                "start": 1464,
                "end": 1465
              },
              "value": {
                "type": "JSXExpressionContainer",
                "expression": {
                  "type": "ArrowFunctionExpression",
                  "expression": false,
                  "async": false,
                  "typeParameters": null,
                  "params": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "arg",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1468,
                      "end": 1471
                    }
                  ],
                  "returnType": null,
                  "body": {
                    "type": "BlockStatement",
                    "body": [
                      {
                        "type": "ExpressionStatement",
                        "expression": {
                          "type": "CallExpression",
                          "callee": {
                            "type": "MemberExpression",
                            "object": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "arg",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 1478,
                              "end": 1481
                            },
                            "property": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "toString",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 1482,
                              "end": 1490
                            },
                            "optional": false,
                            "computed": false,
                            "start": 1478,
                            "end": 1490
                          },
                          "typeArguments": null,
                          "arguments": [],
                          "optional": false,
                          "start": 1478,
                          "end": 1492
                        },
                        "directive": null,
                        "start": 1478,
                        "end": 1493
                      }
                    ],
                    "start": 1476,
                    "end": 1495
                  },
                  "id": null,
                  "generator": false,
                  "start": 1467,
                  "end": 1495
                },
                "start": 1466,
                "end": 1496
              },
              "start": 1464,
              "end": 1496
            }
          ],
          "selfClosing": true,
          "start": 1441,
          "end": 1499
        },
        "children": [],
        "closingElement": null,
        "start": 1441,
        "end": 1499
      },
      "directive": null,
      "start": 1441,
      "end": 1500
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "JSXElement",
        "openingElement": {
          "type": "JSXOpeningElement",
          "name": {
            "type": "JSXIdentifier",
            "name": "Foo",
            "start": 1503,
            "end": 1506
          },
          "typeArguments": null,
          "attributes": [
            {
              "type": "JSXSpreadAttribute",
              "argument": {
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
                      "start": 1515,
                      "end": 1516
                    },
                    "value": {
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
                          "start": 1519,
                          "end": 1520
                        }
                      ],
                      "returnType": null,
                      "body": {
                        "type": "Literal",
                        "value": 10,
                        "raw": "10",
                        "start": 1525,
                        "end": 1527
                      },
                      "id": null,
                      "generator": false,
                      "start": 1518,
                      "end": 1527
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 1515,
                    "end": 1527
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
                      "start": 1531,
                      "end": 1532
                    },
                    "value": {
                      "type": "ArrowFunctionExpression",
                      "expression": false,
                      "async": false,
                      "typeParameters": null,
                      "params": [
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "arg",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1535,
                          "end": 1538
                        }
                      ],
                      "returnType": null,
                      "body": {
                        "type": "BlockStatement",
                        "body": [
                          {
                            "type": "ExpressionStatement",
                            "expression": {
                              "type": "CallExpression",
                              "callee": {
                                "type": "MemberExpression",
                                "object": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "arg",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 1545,
                                  "end": 1548
                                },
                                "property": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "toString",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 1549,
                                  "end": 1557
                                },
                                "optional": false,
                                "computed": false,
                                "start": 1545,
                                "end": 1557
                              },
                              "typeArguments": null,
                              "arguments": [],
                              "optional": false,
                              "start": 1545,
                              "end": 1559
                            },
                            "directive": null,
                            "start": 1545,
                            "end": 1560
                          }
                        ],
                        "start": 1543,
                        "end": 1562
                      },
                      "id": null,
                      "generator": false,
                      "start": 1534,
                      "end": 1562
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 1531,
                    "end": 1562
                  }
                ],
                "start": 1511,
                "end": 1565
              },
              "start": 1507,
              "end": 1566
            }
          ],
          "selfClosing": true,
          "start": 1502,
          "end": 1569
        },
        "children": [],
        "closingElement": null,
        "start": 1502,
        "end": 1569
      },
      "directive": null,
      "start": 1502,
      "end": 1570
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 67,
  "end": 1570
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Identifier",
    "value": "type",
    "start": 67,
    "end": 71
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 72,
    "end": 73
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 74,
    "end": 75
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 76,
    "end": 77
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 80,
    "end": 81
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 81,
    "end": 82
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 83,
    "end": 90
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 90,
    "end": 91
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 92,
    "end": 93
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 93,
    "end": 94
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 96,
    "end": 100
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 101,
    "end": 102
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 103,
    "end": 104
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 105,
    "end": 106
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 109,
    "end": 110
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 110,
    "end": 111
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 112,
    "end": 118
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 118,
    "end": 119
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 120,
    "end": 121
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 121,
    "end": 122
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 124,
    "end": 128
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 129,
    "end": 130
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 131,
    "end": 132
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 133,
    "end": 134
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 137,
    "end": 138
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 138,
    "end": 139
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 140,
    "end": 146
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 146,
    "end": 147
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 148,
    "end": 149
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 149,
    "end": 150
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 152,
    "end": 156
  },
  {
    "type": "Identifier",
    "value": "Animations",
    "start": 157,
    "end": 167
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 168,
    "end": 169
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 170,
    "end": 171
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 174,
    "end": 175
  },
  {
    "type": "Identifier",
    "value": "key",
    "start": 175,
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
    "value": "string",
    "start": 180,
    "end": 186
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 186,
    "end": 187
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 187,
    "end": 188
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 189,
    "end": 190
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 191,
    "end": 196
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 196,
    "end": 197
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 198,
    "end": 204
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 205,
    "end": 206
  },
  {
    "type": "Punctuator",
    "value": "&",
    "start": 207,
    "end": 208
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 209,
    "end": 210
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 215,
    "end": 216
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 217,
    "end": 218
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 218,
    "end": 219
  },
  {
    "type": "Identifier",
    "value": "kind",
    "start": 220,
    "end": 224
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 224,
    "end": 225
  },
  {
    "type": "String",
    "value": "\"a\"",
    "start": 226,
    "end": 229
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 229,
    "end": 230
  },
  {
    "type": "Identifier",
    "value": "func",
    "start": 231,
    "end": 235
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 235,
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
    "value": ")",
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
    "value": "Partial",
    "start": 240,
    "end": 247
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 247,
    "end": 248
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 248,
    "end": 249
  },
  {
    "type": "Punctuator",
    "value": ">",
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
    "type": "Punctuator",
    "value": "&",
    "start": 253,
    "end": 254
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 255,
    "end": 256
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 256,
    "end": 257
  },
  {
    "type": "Punctuator",
    "value": "|",
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
    "type": "Punctuator",
    "value": "{",
    "start": 265,
    "end": 266
  },
  {
    "type": "Identifier",
    "value": "kind",
    "start": 267,
    "end": 271
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 271,
    "end": 272
  },
  {
    "type": "String",
    "value": "\"b\"",
    "start": 273,
    "end": 276
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 276,
    "end": 277
  },
  {
    "type": "Identifier",
    "value": "func",
    "start": 278,
    "end": 282
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 282,
    "end": 283
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 283,
    "end": 284
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 284,
    "end": 285
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 285,
    "end": 286
  },
  {
    "type": "Identifier",
    "value": "Partial",
    "start": 287,
    "end": 294
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 294,
    "end": 295
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 295,
    "end": 296
  },
  {
    "type": "Punctuator",
    "value": ">",
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
    "type": "Punctuator",
    "value": "&",
    "start": 300,
    "end": 301
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 302,
    "end": 303
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 303,
    "end": 304
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 309,
    "end": 310
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 311,
    "end": 312
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 312,
    "end": 313
  },
  {
    "type": "Identifier",
    "value": "kind",
    "start": 314,
    "end": 318
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 318,
    "end": 319
  },
  {
    "type": "String",
    "value": "\"c\"",
    "start": 320,
    "end": 323
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 323,
    "end": 324
  },
  {
    "type": "Identifier",
    "value": "func",
    "start": 325,
    "end": 329
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 329,
    "end": 330
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 330,
    "end": 331
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 331,
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
    "value": "Partial",
    "start": 334,
    "end": 341
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 341,
    "end": 342
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 342,
    "end": 343
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 343,
    "end": 344
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 345,
    "end": 346
  },
  {
    "type": "Punctuator",
    "value": "&",
    "start": 347,
    "end": 348
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 349,
    "end": 350
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 350,
    "end": 351
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 354,
    "end": 355
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 355,
    "end": 356
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 357,
    "end": 358
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 358,
    "end": 359
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 361,
    "end": 365
  },
  {
    "type": "Identifier",
    "value": "StyleParam",
    "start": 366,
    "end": 376
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 376,
    "end": 377
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 377,
    "end": 378
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 379,
    "end": 386
  },
  {
    "type": "Identifier",
    "value": "Animations",
    "start": 387,
    "end": 397
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 397,
    "end": 398
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 399,
    "end": 400
  },
  {
    "type": "Identifier",
    "value": "Record",
    "start": 401,
    "end": 407
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 407,
    "end": 408
  },
  {
    "type": "Identifier",
    "value": "keyof",
    "start": 408,
    "end": 413
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 414,
    "end": 415
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 415,
    "end": 416
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 417,
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
    "type": "Identifier",
    "value": "type",
    "start": 427,
    "end": 431
  },
  {
    "type": "Identifier",
    "value": "AnimatedViewProps",
    "start": 432,
    "end": 449
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 449,
    "end": 450
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 450,
    "end": 451
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 452,
    "end": 459
  },
  {
    "type": "Identifier",
    "value": "Animations",
    "start": 460,
    "end": 470
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 470,
    "end": 471
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 472,
    "end": 473
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 474,
    "end": 475
  },
  {
    "type": "Identifier",
    "value": "style",
    "start": 478,
    "end": 483
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 483,
    "end": 484
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 485,
    "end": 486
  },
  {
    "type": "Identifier",
    "value": "animationsValues",
    "start": 486,
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
    "value": "StyleParam",
    "start": 504,
    "end": 514
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 514,
    "end": 515
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 515,
    "end": 516
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 516,
    "end": 517
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 517,
    "end": 518
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 519,
    "end": 521
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 522,
    "end": 528
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 528,
    "end": 529
  },
  {
    "type": "Identifier",
    "value": "animations",
    "start": 532,
    "end": 542
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 542,
    "end": 543
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 544,
    "end": 545
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 545,
    "end": 546
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 547,
    "end": 548
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 548,
    "end": 549
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 551,
    "end": 556
  },
  {
    "type": "Identifier",
    "value": "Component",
    "start": 557,
    "end": 566
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 567,
    "end": 568
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 569,
    "end": 570
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 570,
    "end": 571
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 572,
    "end": 579
  },
  {
    "type": "Identifier",
    "value": "Animations",
    "start": 580,
    "end": 590
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 590,
    "end": 591
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 591,
    "end": 592
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 592,
    "end": 593
  },
  {
    "type": "Identifier",
    "value": "animations",
    "start": 596,
    "end": 606
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 606,
    "end": 607
  },
  {
    "type": "Identifier",
    "value": "style",
    "start": 610,
    "end": 615
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 615,
    "end": 616
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 617,
    "end": 618
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 618,
    "end": 619
  },
  {
    "type": "Identifier",
    "value": "AnimatedViewProps",
    "start": 620,
    "end": 637
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 637,
    "end": 638
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 638,
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
    "value": ")",
    "start": 640,
    "end": 641
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 642,
    "end": 644
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 645,
    "end": 646
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 646,
    "end": 647
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 647,
    "end": 648
  },
  {
    "type": "Punctuator",
    "value": "/",
    "start": 648,
    "end": 649
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 649,
    "end": 650
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 650,
    "end": 651
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 653,
    "end": 654
  },
  {
    "type": "JSXIdentifier",
    "value": "Component",
    "start": 654,
    "end": 663
  },
  {
    "type": "JSXIdentifier",
    "value": "animations",
    "start": 666,
    "end": 676
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 676,
    "end": 677
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 677,
    "end": 678
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 678,
    "end": 679
  },
  {
    "type": "Identifier",
    "value": "test",
    "start": 684,
    "end": 688
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 688,
    "end": 689
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 690,
    "end": 691
  },
  {
    "type": "Identifier",
    "value": "kind",
    "start": 698,
    "end": 702
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 702,
    "end": 703
  },
  {
    "type": "String",
    "value": "\"a\"",
    "start": 704,
    "end": 707
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 707,
    "end": 708
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 715,
    "end": 720
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 720,
    "end": 721
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 722,
    "end": 723
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 723,
    "end": 724
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 731,
    "end": 732
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 732,
    "end": 733
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 734,
    "end": 738
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 738,
    "end": 739
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 744,
    "end": 745
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 745,
    "end": 746
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 749,
    "end": 750
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 750,
    "end": 751
  },
  {
    "type": "JSXIdentifier",
    "value": "style",
    "start": 754,
    "end": 759
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 759,
    "end": 760
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 760,
    "end": 761
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 761,
    "end": 762
  },
  {
    "type": "Identifier",
    "value": "anim",
    "start": 762,
    "end": 766
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 766,
    "end": 767
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 768,
    "end": 770
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 771,
    "end": 772
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 777,
    "end": 783
  },
  {
    "type": "String",
    "value": "\"\"",
    "start": 784,
    "end": 786
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 786,
    "end": 787
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 790,
    "end": 791
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 791,
    "end": 792
  },
  {
    "type": "Punctuator",
    "value": "/",
    "start": 793,
    "end": 794
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 794,
    "end": 795
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 795,
    "end": 796
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 797,
    "end": 798
  },
  {
    "type": "JSXIdentifier",
    "value": "Component",
    "start": 798,
    "end": 807
  },
  {
    "type": "JSXIdentifier",
    "value": "animations",
    "start": 810,
    "end": 820
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 820,
    "end": 821
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 821,
    "end": 822
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 822,
    "end": 823
  },
  {
    "type": "Identifier",
    "value": "test",
    "start": 828,
    "end": 832
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 832,
    "end": 833
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 834,
    "end": 835
  },
  {
    "type": "Identifier",
    "value": "kind",
    "start": 842,
    "end": 846
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 846,
    "end": 847
  },
  {
    "type": "String",
    "value": "\"a\"",
    "start": 848,
    "end": 851
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 851,
    "end": 852
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 859,
    "end": 864
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 864,
    "end": 865
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 866,
    "end": 867
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 867,
    "end": 868
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 875,
    "end": 876
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 876,
    "end": 877
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 878,
    "end": 882
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 882,
    "end": 883
  },
  {
    "type": "Identifier",
    "value": "func",
    "start": 890,
    "end": 894
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 894,
    "end": 895
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 895,
    "end": 896
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 897,
    "end": 898
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 907,
    "end": 913
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 914,
    "end": 915
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 926,
    "end": 927
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 927,
    "end": 928
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 929,
    "end": 933
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 933,
    "end": 934
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
    "type": "Punctuator",
    "value": "}",
    "start": 952,
    "end": 953
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 953,
    "end": 954
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 959,
    "end": 960
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 960,
    "end": 961
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 964,
    "end": 965
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 965,
    "end": 966
  },
  {
    "type": "JSXIdentifier",
    "value": "style",
    "start": 969,
    "end": 974
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 974,
    "end": 975
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 975,
    "end": 976
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 976,
    "end": 977
  },
  {
    "type": "Identifier",
    "value": "anim",
    "start": 977,
    "end": 981
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 981,
    "end": 982
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 983,
    "end": 985
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 986,
    "end": 987
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 992,
    "end": 998
  },
  {
    "type": "String",
    "value": "\"\"",
    "start": 999,
    "end": 1001
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1001,
    "end": 1002
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1005,
    "end": 1006
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1006,
    "end": 1007
  },
  {
    "type": "Punctuator",
    "value": "/",
    "start": 1008,
    "end": 1009
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1009,
    "end": 1010
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1010,
    "end": 1011
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1012,
    "end": 1013
  },
  {
    "type": "JSXIdentifier",
    "value": "Component",
    "start": 1013,
    "end": 1022
  },
  {
    "type": "JSXIdentifier",
    "value": "animations",
    "start": 1025,
    "end": 1035
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1035,
    "end": 1036
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1036,
    "end": 1037
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1037,
    "end": 1038
  },
  {
    "type": "Identifier",
    "value": "test",
    "start": 1043,
    "end": 1047
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1047,
    "end": 1048
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1049,
    "end": 1050
  },
  {
    "type": "Identifier",
    "value": "kind",
    "start": 1057,
    "end": 1061
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1061,
    "end": 1062
  },
  {
    "type": "String",
    "value": "\"a\"",
    "start": 1063,
    "end": 1066
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1066,
    "end": 1067
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 1074,
    "end": 1079
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1079,
    "end": 1080
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 1081,
    "end": 1082
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1082,
    "end": 1083
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1090,
    "end": 1091
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1091,
    "end": 1092
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 1093,
    "end": 1097
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1097,
    "end": 1098
  },
  {
    "type": "Identifier",
    "value": "func",
    "start": 1105,
    "end": 1109
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1109,
    "end": 1110
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1111,
    "end": 1112
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1112,
    "end": 1113
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1114,
    "end": 1116
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1117,
    "end": 1118
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 1127,
    "end": 1133
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1134,
    "end": 1135
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1146,
    "end": 1147
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1147,
    "end": 1148
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 1149,
    "end": 1153
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1153,
    "end": 1154
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1163,
    "end": 1164
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1164,
    "end": 1165
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1172,
    "end": 1173
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1173,
    "end": 1174
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1179,
    "end": 1180
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1180,
    "end": 1181
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1184,
    "end": 1185
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1185,
    "end": 1186
  },
  {
    "type": "JSXIdentifier",
    "value": "style",
    "start": 1189,
    "end": 1194
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1194,
    "end": 1195
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1195,
    "end": 1196
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1196,
    "end": 1197
  },
  {
    "type": "Identifier",
    "value": "anim",
    "start": 1197,
    "end": 1201
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1201,
    "end": 1202
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1203,
    "end": 1205
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1206,
    "end": 1207
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 1212,
    "end": 1218
  },
  {
    "type": "String",
    "value": "\"\"",
    "start": 1219,
    "end": 1221
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1221,
    "end": 1222
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1225,
    "end": 1226
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1226,
    "end": 1227
  },
  {
    "type": "Punctuator",
    "value": "/",
    "start": 1228,
    "end": 1229
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1229,
    "end": 1230
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1230,
    "end": 1231
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 1255,
    "end": 1264
  },
  {
    "type": "Identifier",
    "value": "Props",
    "start": 1265,
    "end": 1270
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1270,
    "end": 1271
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1271,
    "end": 1272
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1272,
    "end": 1273
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1274,
    "end": 1275
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1278,
    "end": 1279
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1279,
    "end": 1280
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1281,
    "end": 1282
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1282,
    "end": 1283
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1283,
    "end": 1284
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1285,
    "end": 1291
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1291,
    "end": 1292
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1293,
    "end": 1295
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1296,
    "end": 1297
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1297,
    "end": 1298
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 1301,
    "end": 1302
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1302,
    "end": 1303
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1304,
    "end": 1305
  },
  {
    "type": "Identifier",
    "value": "arg",
    "start": 1305,
    "end": 1308
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1308,
    "end": 1309
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1310,
    "end": 1311
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1311,
    "end": 1312
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1313,
    "end": 1315
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 1316,
    "end": 1320
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1320,
    "end": 1321
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1322,
    "end": 1323
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1325,
    "end": 1333
  },
  {
    "type": "Identifier",
    "value": "Foo",
    "start": 1334,
    "end": 1337
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1337,
    "end": 1338
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1338,
    "end": 1339
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1339,
    "end": 1340
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1340,
    "end": 1341
  },
  {
    "type": "Identifier",
    "value": "props",
    "start": 1341,
    "end": 1346
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1346,
    "end": 1347
  },
  {
    "type": "Identifier",
    "value": "Props",
    "start": 1348,
    "end": 1353
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1353,
    "end": 1354
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1354,
    "end": 1355
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1355,
    "end": 1356
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1356,
    "end": 1357
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1358,
    "end": 1359
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 1362,
    "end": 1368
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1369,
    "end": 1370
  },
  {
    "type": "JSXIdentifier",
    "value": "div",
    "start": 1370,
    "end": 1373
  },
  {
    "type": "Punctuator",
    "value": "/",
    "start": 1374,
    "end": 1375
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1375,
    "end": 1376
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1376,
    "end": 1377
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1378,
    "end": 1379
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1381,
    "end": 1382
  },
  {
    "type": "JSXIdentifier",
    "value": "Foo",
    "start": 1382,
    "end": 1385
  },
  {
    "type": "JSXIdentifier",
    "value": "a",
    "start": 1388,
    "end": 1389
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1389,
    "end": 1390
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1390,
    "end": 1391
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1391,
    "end": 1392
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1392,
    "end": 1393
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1394,
    "end": 1396
  },
  {
    "type": "Numeric",
    "value": "10",
    "start": 1397,
    "end": 1399
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1399,
    "end": 1400
  },
  {
    "type": "JSXIdentifier",
    "value": "b",
    "start": 1403,
    "end": 1404
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1404,
    "end": 1405
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1405,
    "end": 1406
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1406,
    "end": 1407
  },
  {
    "type": "Identifier",
    "value": "arg",
    "start": 1407,
    "end": 1410
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1410,
    "end": 1411
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1412,
    "end": 1414
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1415,
    "end": 1416
  },
  {
    "type": "JSXIdentifier",
    "value": "arg",
    "start": 1417,
    "end": 1420
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1420,
    "end": 1421
  },
  {
    "type": "JSXIdentifier",
    "value": "toString",
    "start": 1421,
    "end": 1429
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1429,
    "end": 1430
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1430,
    "end": 1431
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1431,
    "end": 1432
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1433,
    "end": 1434
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1434,
    "end": 1435
  },
  {
    "type": "Punctuator",
    "value": "/",
    "start": 1436,
    "end": 1437
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1437,
    "end": 1438
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1438,
    "end": 1439
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1441,
    "end": 1442
  },
  {
    "type": "JSXIdentifier",
    "value": "Foo",
    "start": 1442,
    "end": 1445
  },
  {
    "type": "JSXIdentifier",
    "value": "a",
    "start": 1448,
    "end": 1449
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1449,
    "end": 1450
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1450,
    "end": 1451
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1451,
    "end": 1452
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1452,
    "end": 1453
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1453,
    "end": 1454
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1455,
    "end": 1457
  },
  {
    "type": "Numeric",
    "value": "10",
    "start": 1458,
    "end": 1460
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1460,
    "end": 1461
  },
  {
    "type": "JSXIdentifier",
    "value": "b",
    "start": 1464,
    "end": 1465
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1465,
    "end": 1466
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1466,
    "end": 1467
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1467,
    "end": 1468
  },
  {
    "type": "Identifier",
    "value": "arg",
    "start": 1468,
    "end": 1471
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1471,
    "end": 1472
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1473,
    "end": 1475
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1476,
    "end": 1477
  },
  {
    "type": "JSXIdentifier",
    "value": "arg",
    "start": 1478,
    "end": 1481
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1481,
    "end": 1482
  },
  {
    "type": "JSXIdentifier",
    "value": "toString",
    "start": 1482,
    "end": 1490
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1490,
    "end": 1491
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1491,
    "end": 1492
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1492,
    "end": 1493
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1494,
    "end": 1495
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1495,
    "end": 1496
  },
  {
    "type": "Punctuator",
    "value": "/",
    "start": 1497,
    "end": 1498
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1498,
    "end": 1499
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1499,
    "end": 1500
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1502,
    "end": 1503
  },
  {
    "type": "JSXIdentifier",
    "value": "Foo",
    "start": 1503,
    "end": 1506
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1507,
    "end": 1508
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 1508,
    "end": 1511
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1511,
    "end": 1512
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1515,
    "end": 1516
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1516,
    "end": 1517
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1518,
    "end": 1519
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1519,
    "end": 1520
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1520,
    "end": 1521
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1522,
    "end": 1524
  },
  {
    "type": "Numeric",
    "value": "10",
    "start": 1525,
    "end": 1527
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1527,
    "end": 1528
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 1531,
    "end": 1532
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1532,
    "end": 1533
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1534,
    "end": 1535
  },
  {
    "type": "Identifier",
    "value": "arg",
    "start": 1535,
    "end": 1538
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1538,
    "end": 1539
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1540,
    "end": 1542
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1543,
    "end": 1544
  },
  {
    "type": "JSXIdentifier",
    "value": "arg",
    "start": 1545,
    "end": 1548
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1548,
    "end": 1549
  },
  {
    "type": "JSXIdentifier",
    "value": "toString",
    "start": 1549,
    "end": 1557
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1557,
    "end": 1558
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1558,
    "end": 1559
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1559,
    "end": 1560
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1561,
    "end": 1562
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1562,
    "end": 1563
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1564,
    "end": 1565
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1565,
    "end": 1566
  },
  {
    "type": "Punctuator",
    "value": "/",
    "start": 1567,
    "end": 1568
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1568,
    "end": 1569
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1569,
    "end": 1570
  }
]
```
