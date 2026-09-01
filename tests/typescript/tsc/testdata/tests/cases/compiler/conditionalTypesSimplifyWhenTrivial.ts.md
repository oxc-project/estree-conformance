__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "fn1",
            "optional": false,
            "typeAnnotation": null,
            "start": 6,
            "end": 9
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
                    "name": "Params",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 13,
                    "end": 19
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 13,
                  "end": 19
                }
              ],
              "start": 12,
              "end": 20
            },
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "params",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Pick",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 34,
                      "end": 38
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "params": [
                        {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "Params",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 39,
                            "end": 45
                          },
                          "typeArguments": null,
                          "start": 39,
                          "end": 45
                        },
                        {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "Exclude",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 47,
                            "end": 54
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
                                    "name": "Params",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 61,
                                    "end": 67
                                  },
                                  "typeArguments": null,
                                  "start": 61,
                                  "end": 67
                                },
                                "start": 55,
                                "end": 67
                              },
                              {
                                "type": "TSNeverKeyword",
                                "start": 69,
                                "end": 74
                              }
                            ],
                            "start": 54,
                            "end": 75
                          },
                          "start": 47,
                          "end": 75
                        }
                      ],
                      "start": 38,
                      "end": 76
                    },
                    "start": 34,
                    "end": 76
                  },
                  "start": 32,
                  "end": 76
                },
                "start": 26,
                "end": 76
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Params",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 81,
                  "end": 87
                },
                "typeArguments": null,
                "start": 81,
                "end": 87
              },
              "start": 79,
              "end": 87
            },
            "body": {
              "type": "Identifier",
              "decorators": [],
              "name": "params",
              "optional": false,
              "typeAnnotation": null,
              "start": 91,
              "end": 97
            },
            "id": null,
            "generator": false,
            "start": 12,
            "end": 97
          },
          "definite": false,
          "start": 6,
          "end": 97
        }
      ],
      "declare": false,
      "start": 0,
      "end": 98
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "fn2",
        "optional": false,
        "typeAnnotation": null,
        "start": 109,
        "end": 112
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
              "start": 113,
              "end": 114
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 113,
            "end": 114
          }
        ],
        "start": 112,
        "end": 115
      },
      "params": [
        {
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
                "name": "Exclude",
                "optional": false,
                "typeAnnotation": null,
                "start": 119,
                "end": 126
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
                      "start": 127,
                      "end": 128
                    },
                    "typeArguments": null,
                    "start": 127,
                    "end": 128
                  },
                  {
                    "type": "TSNeverKeyword",
                    "start": 130,
                    "end": 135
                  }
                ],
                "start": 126,
                "end": 136
              },
              "start": 119,
              "end": 136
            },
            "start": 117,
            "end": 136
          },
          "start": 116,
          "end": 136
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "VariableDeclaration",
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "y",
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
                        "start": 151,
                        "end": 152
                      },
                      "typeArguments": null,
                      "start": 151,
                      "end": 152
                    },
                    "start": 149,
                    "end": 152
                  },
                  "start": 148,
                  "end": 152
                },
                "init": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 155,
                  "end": 156
                },
                "definite": false,
                "start": 148,
                "end": 156
              }
            ],
            "declare": false,
            "start": 144,
            "end": 157
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 162,
                "end": 163
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "y",
                "optional": false,
                "typeAnnotation": null,
                "start": 166,
                "end": 167
              },
              "start": 162,
              "end": 167
            },
            "directive": null,
            "start": 162,
            "end": 168
          }
        ],
        "start": 138,
        "end": 170
      },
      "expression": false,
      "start": 100,
      "end": 170
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
            "name": "fn3",
            "optional": false,
            "typeAnnotation": null,
            "start": 178,
            "end": 181
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
                    "name": "Params",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 185,
                    "end": 191
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 185,
                  "end": 191
                }
              ],
              "start": 184,
              "end": 192
            },
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "params",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Pick",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 206,
                      "end": 210
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "params": [
                        {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "Params",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 211,
                            "end": 217
                          },
                          "typeArguments": null,
                          "start": 211,
                          "end": 217
                        },
                        {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "Extract",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 219,
                            "end": 226
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
                                    "name": "Params",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 233,
                                    "end": 239
                                  },
                                  "typeArguments": null,
                                  "start": 233,
                                  "end": 239
                                },
                                "start": 227,
                                "end": 239
                              },
                              {
                                "type": "TSTypeOperator",
                                "operator": "keyof",
                                "typeAnnotation": {
                                  "type": "TSTypeReference",
                                  "typeName": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "Params",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 247,
                                    "end": 253
                                  },
                                  "typeArguments": null,
                                  "start": 247,
                                  "end": 253
                                },
                                "start": 241,
                                "end": 253
                              }
                            ],
                            "start": 226,
                            "end": 254
                          },
                          "start": 219,
                          "end": 254
                        }
                      ],
                      "start": 210,
                      "end": 255
                    },
                    "start": 206,
                    "end": 255
                  },
                  "start": 204,
                  "end": 255
                },
                "start": 198,
                "end": 255
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Params",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 260,
                  "end": 266
                },
                "typeArguments": null,
                "start": 260,
                "end": 266
              },
              "start": 258,
              "end": 266
            },
            "body": {
              "type": "Identifier",
              "decorators": [],
              "name": "params",
              "optional": false,
              "typeAnnotation": null,
              "start": 270,
              "end": 276
            },
            "id": null,
            "generator": false,
            "start": 184,
            "end": 276
          },
          "definite": false,
          "start": 178,
          "end": 276
        }
      ],
      "declare": false,
      "start": 172,
      "end": 277
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "fn4",
        "optional": false,
        "typeAnnotation": null,
        "start": 288,
        "end": 291
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
              "start": 292,
              "end": 293
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 292,
            "end": 293
          }
        ],
        "start": 291,
        "end": 294
      },
      "params": [
        {
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
                "name": "Extract",
                "optional": false,
                "typeAnnotation": null,
                "start": 298,
                "end": 305
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
                      "start": 306,
                      "end": 307
                    },
                    "typeArguments": null,
                    "start": 306,
                    "end": 307
                  },
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "T",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 309,
                      "end": 310
                    },
                    "typeArguments": null,
                    "start": 309,
                    "end": 310
                  }
                ],
                "start": 305,
                "end": 311
              },
              "start": 298,
              "end": 311
            },
            "start": 296,
            "end": 311
          },
          "start": 295,
          "end": 311
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "VariableDeclaration",
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "y",
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
                        "start": 326,
                        "end": 327
                      },
                      "typeArguments": null,
                      "start": 326,
                      "end": 327
                    },
                    "start": 324,
                    "end": 327
                  },
                  "start": 323,
                  "end": 327
                },
                "init": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 330,
                  "end": 331
                },
                "definite": false,
                "start": 323,
                "end": 331
              }
            ],
            "declare": false,
            "start": 319,
            "end": 332
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 337,
                "end": 338
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "y",
                "optional": false,
                "typeAnnotation": null,
                "start": 341,
                "end": 342
              },
              "start": 337,
              "end": 342
            },
            "directive": null,
            "start": 337,
            "end": 343
          }
        ],
        "start": 313,
        "end": 345
      },
      "expression": false,
      "start": 279,
      "end": 345
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
            "name": "x",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Extract",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 362,
                  "end": 369
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSUnionType",
                      "types": [
                        {
                          "type": "TSNumberKeyword",
                          "start": 370,
                          "end": 376
                        },
                        {
                          "type": "TSStringKeyword",
                          "start": 379,
                          "end": 385
                        }
                      ],
                      "start": 370,
                      "end": 385
                    },
                    {
                      "type": "TSAnyKeyword",
                      "start": 387,
                      "end": 390
                    }
                  ],
                  "start": 369,
                  "end": 391
                },
                "start": 362,
                "end": 391
              },
              "start": 360,
              "end": 391
            },
            "start": 359,
            "end": 391
          },
          "init": null,
          "definite": false,
          "start": 359,
          "end": 391
        }
      ],
      "declare": true,
      "start": 347,
      "end": 392
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "ExtractWithDefault",
        "optional": false,
        "typeAnnotation": null,
        "start": 444,
        "end": 462
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
              "start": 463,
              "end": 464
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 463,
            "end": 464
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "U",
              "optional": false,
              "typeAnnotation": null,
              "start": 466,
              "end": 467
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 466,
            "end": 467
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "D",
              "optional": false,
              "typeAnnotation": null,
              "start": 469,
              "end": 470
            },
            "constraint": null,
            "default": {
              "type": "TSNeverKeyword",
              "start": 473,
              "end": 478
            },
            "in": false,
            "out": false,
            "const": false,
            "start": 469,
            "end": 478
          }
        ],
        "start": 462,
        "end": 479
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
            "start": 482,
            "end": 483
          },
          "typeArguments": null,
          "start": 482,
          "end": 483
        },
        "extendsType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "U",
            "optional": false,
            "typeAnnotation": null,
            "start": 492,
            "end": 493
          },
          "typeArguments": null,
          "start": 492,
          "end": 493
        },
        "trueType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "T",
            "optional": false,
            "typeAnnotation": null,
            "start": 496,
            "end": 497
          },
          "typeArguments": null,
          "start": 496,
          "end": 497
        },
        "falseType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "D",
            "optional": false,
            "typeAnnotation": null,
            "start": 500,
            "end": 501
          },
          "typeArguments": null,
          "start": 500,
          "end": 501
        },
        "start": 482,
        "end": 501
      },
      "declare": false,
      "start": 439,
      "end": 502
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "ExcludeWithDefault",
        "optional": false,
        "typeAnnotation": null,
        "start": 509,
        "end": 527
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
              "start": 528,
              "end": 529
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 528,
            "end": 529
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "U",
              "optional": false,
              "typeAnnotation": null,
              "start": 531,
              "end": 532
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 531,
            "end": 532
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "D",
              "optional": false,
              "typeAnnotation": null,
              "start": 534,
              "end": 535
            },
            "constraint": null,
            "default": {
              "type": "TSNeverKeyword",
              "start": 538,
              "end": 543
            },
            "in": false,
            "out": false,
            "const": false,
            "start": 534,
            "end": 543
          }
        ],
        "start": 527,
        "end": 544
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
            "start": 547,
            "end": 548
          },
          "typeArguments": null,
          "start": 547,
          "end": 548
        },
        "extendsType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "U",
            "optional": false,
            "typeAnnotation": null,
            "start": 557,
            "end": 558
          },
          "typeArguments": null,
          "start": 557,
          "end": 558
        },
        "trueType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "D",
            "optional": false,
            "typeAnnotation": null,
            "start": 561,
            "end": 562
          },
          "typeArguments": null,
          "start": 561,
          "end": 562
        },
        "falseType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "T",
            "optional": false,
            "typeAnnotation": null,
            "start": 565,
            "end": 566
          },
          "typeArguments": null,
          "start": 565,
          "end": 566
        },
        "start": 547,
        "end": 566
      },
      "declare": false,
      "start": 504,
      "end": 567
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
            "name": "fn5",
            "optional": false,
            "typeAnnotation": null,
            "start": 575,
            "end": 578
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
                    "name": "Params",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 582,
                    "end": 588
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 582,
                  "end": 588
                }
              ],
              "start": 581,
              "end": 589
            },
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "params",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Pick",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 603,
                      "end": 607
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "params": [
                        {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "Params",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 608,
                            "end": 614
                          },
                          "typeArguments": null,
                          "start": 608,
                          "end": 614
                        },
                        {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "ExcludeWithDefault",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 616,
                            "end": 634
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
                                    "name": "Params",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 641,
                                    "end": 647
                                  },
                                  "typeArguments": null,
                                  "start": 641,
                                  "end": 647
                                },
                                "start": 635,
                                "end": 647
                              },
                              {
                                "type": "TSNeverKeyword",
                                "start": 649,
                                "end": 654
                              }
                            ],
                            "start": 634,
                            "end": 655
                          },
                          "start": 616,
                          "end": 655
                        }
                      ],
                      "start": 607,
                      "end": 656
                    },
                    "start": 603,
                    "end": 656
                  },
                  "start": 601,
                  "end": 656
                },
                "start": 595,
                "end": 656
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Params",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 661,
                  "end": 667
                },
                "typeArguments": null,
                "start": 661,
                "end": 667
              },
              "start": 659,
              "end": 667
            },
            "body": {
              "type": "Identifier",
              "decorators": [],
              "name": "params",
              "optional": false,
              "typeAnnotation": null,
              "start": 671,
              "end": 677
            },
            "id": null,
            "generator": false,
            "start": 581,
            "end": 677
          },
          "definite": false,
          "start": 575,
          "end": 677
        }
      ],
      "declare": false,
      "start": 569,
      "end": 678
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "fn6",
        "optional": false,
        "typeAnnotation": null,
        "start": 689,
        "end": 692
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
              "start": 693,
              "end": 694
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 693,
            "end": 694
          }
        ],
        "start": 692,
        "end": 695
      },
      "params": [
        {
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
                "name": "ExcludeWithDefault",
                "optional": false,
                "typeAnnotation": null,
                "start": 699,
                "end": 717
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
                      "start": 718,
                      "end": 719
                    },
                    "typeArguments": null,
                    "start": 718,
                    "end": 719
                  },
                  {
                    "type": "TSNeverKeyword",
                    "start": 721,
                    "end": 726
                  }
                ],
                "start": 717,
                "end": 727
              },
              "start": 699,
              "end": 727
            },
            "start": 697,
            "end": 727
          },
          "start": 696,
          "end": 727
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "VariableDeclaration",
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "y",
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
                        "start": 742,
                        "end": 743
                      },
                      "typeArguments": null,
                      "start": 742,
                      "end": 743
                    },
                    "start": 740,
                    "end": 743
                  },
                  "start": 739,
                  "end": 743
                },
                "init": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 746,
                  "end": 747
                },
                "definite": false,
                "start": 739,
                "end": 747
              }
            ],
            "declare": false,
            "start": 735,
            "end": 748
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 753,
                "end": 754
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "y",
                "optional": false,
                "typeAnnotation": null,
                "start": 757,
                "end": 758
              },
              "start": 753,
              "end": 758
            },
            "directive": null,
            "start": 753,
            "end": 759
          }
        ],
        "start": 729,
        "end": 761
      },
      "expression": false,
      "start": 680,
      "end": 761
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
            "name": "fn7",
            "optional": false,
            "typeAnnotation": null,
            "start": 769,
            "end": 772
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
                    "name": "Params",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 776,
                    "end": 782
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 776,
                  "end": 782
                }
              ],
              "start": 775,
              "end": 783
            },
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "params",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Pick",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 797,
                      "end": 801
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "params": [
                        {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "Params",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 802,
                            "end": 808
                          },
                          "typeArguments": null,
                          "start": 802,
                          "end": 808
                        },
                        {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "ExtractWithDefault",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 810,
                            "end": 828
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
                                    "name": "Params",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 835,
                                    "end": 841
                                  },
                                  "typeArguments": null,
                                  "start": 835,
                                  "end": 841
                                },
                                "start": 829,
                                "end": 841
                              },
                              {
                                "type": "TSTypeOperator",
                                "operator": "keyof",
                                "typeAnnotation": {
                                  "type": "TSTypeReference",
                                  "typeName": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "Params",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 849,
                                    "end": 855
                                  },
                                  "typeArguments": null,
                                  "start": 849,
                                  "end": 855
                                },
                                "start": 843,
                                "end": 855
                              }
                            ],
                            "start": 828,
                            "end": 856
                          },
                          "start": 810,
                          "end": 856
                        }
                      ],
                      "start": 801,
                      "end": 857
                    },
                    "start": 797,
                    "end": 857
                  },
                  "start": 795,
                  "end": 857
                },
                "start": 789,
                "end": 857
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Params",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 862,
                  "end": 868
                },
                "typeArguments": null,
                "start": 862,
                "end": 868
              },
              "start": 860,
              "end": 868
            },
            "body": {
              "type": "Identifier",
              "decorators": [],
              "name": "params",
              "optional": false,
              "typeAnnotation": null,
              "start": 872,
              "end": 878
            },
            "id": null,
            "generator": false,
            "start": 775,
            "end": 878
          },
          "definite": false,
          "start": 769,
          "end": 878
        }
      ],
      "declare": false,
      "start": 763,
      "end": 879
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "fn8",
        "optional": false,
        "typeAnnotation": null,
        "start": 890,
        "end": 893
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
              "start": 894,
              "end": 895
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 894,
            "end": 895
          }
        ],
        "start": 893,
        "end": 896
      },
      "params": [
        {
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
                "name": "ExtractWithDefault",
                "optional": false,
                "typeAnnotation": null,
                "start": 900,
                "end": 918
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
                      "start": 919,
                      "end": 920
                    },
                    "typeArguments": null,
                    "start": 919,
                    "end": 920
                  },
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "T",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 922,
                      "end": 923
                    },
                    "typeArguments": null,
                    "start": 922,
                    "end": 923
                  }
                ],
                "start": 918,
                "end": 924
              },
              "start": 900,
              "end": 924
            },
            "start": 898,
            "end": 924
          },
          "start": 897,
          "end": 924
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "VariableDeclaration",
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "y",
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
                        "start": 939,
                        "end": 940
                      },
                      "typeArguments": null,
                      "start": 939,
                      "end": 940
                    },
                    "start": 937,
                    "end": 940
                  },
                  "start": 936,
                  "end": 940
                },
                "init": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 943,
                  "end": 944
                },
                "definite": false,
                "start": 936,
                "end": 944
              }
            ],
            "declare": false,
            "start": 932,
            "end": 945
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 950,
                "end": 951
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "y",
                "optional": false,
                "typeAnnotation": null,
                "start": 954,
                "end": 955
              },
              "start": 950,
              "end": 955
            },
            "directive": null,
            "start": 950,
            "end": 956
          }
        ],
        "start": 926,
        "end": 958
      },
      "expression": false,
      "start": 881,
      "end": 958
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "TemplatedConditional",
        "optional": false,
        "typeAnnotation": null,
        "start": 965,
        "end": 985
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "TCheck",
              "optional": false,
              "typeAnnotation": null,
              "start": 986,
              "end": 992
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 986,
            "end": 992
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "TExtends",
              "optional": false,
              "typeAnnotation": null,
              "start": 994,
              "end": 1002
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 994,
            "end": 1002
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "TTrue",
              "optional": false,
              "typeAnnotation": null,
              "start": 1004,
              "end": 1009
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 1004,
            "end": 1009
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "TFalse",
              "optional": false,
              "typeAnnotation": null,
              "start": 1011,
              "end": 1017
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 1011,
            "end": 1017
          }
        ],
        "start": 985,
        "end": 1018
      },
      "typeAnnotation": {
        "type": "TSConditionalType",
        "checkType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "TCheck",
            "optional": false,
            "typeAnnotation": null,
            "start": 1021,
            "end": 1027
          },
          "typeArguments": null,
          "start": 1021,
          "end": 1027
        },
        "extendsType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "TExtends",
            "optional": false,
            "typeAnnotation": null,
            "start": 1036,
            "end": 1044
          },
          "typeArguments": null,
          "start": 1036,
          "end": 1044
        },
        "trueType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "TTrue",
            "optional": false,
            "typeAnnotation": null,
            "start": 1047,
            "end": 1052
          },
          "typeArguments": null,
          "start": 1047,
          "end": 1052
        },
        "falseType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "TFalse",
            "optional": false,
            "typeAnnotation": null,
            "start": 1055,
            "end": 1061
          },
          "typeArguments": null,
          "start": 1055,
          "end": 1061
        },
        "start": 1021,
        "end": 1061
      },
      "declare": false,
      "start": 960,
      "end": 1062
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
            "name": "fn9",
            "optional": false,
            "typeAnnotation": null,
            "start": 1070,
            "end": 1073
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
                    "name": "Params",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1077,
                    "end": 1083
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 1077,
                  "end": 1083
                }
              ],
              "start": 1076,
              "end": 1084
            },
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "params",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Pick",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1098,
                      "end": 1102
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "params": [
                        {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "Params",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1103,
                            "end": 1109
                          },
                          "typeArguments": null,
                          "start": 1103,
                          "end": 1109
                        },
                        {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "TemplatedConditional",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1111,
                            "end": 1131
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
                                    "name": "Params",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 1138,
                                    "end": 1144
                                  },
                                  "typeArguments": null,
                                  "start": 1138,
                                  "end": 1144
                                },
                                "start": 1132,
                                "end": 1144
                              },
                              {
                                "type": "TSNeverKeyword",
                                "start": 1146,
                                "end": 1151
                              },
                              {
                                "type": "TSNeverKeyword",
                                "start": 1153,
                                "end": 1158
                              },
                              {
                                "type": "TSTypeOperator",
                                "operator": "keyof",
                                "typeAnnotation": {
                                  "type": "TSTypeReference",
                                  "typeName": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "Params",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 1166,
                                    "end": 1172
                                  },
                                  "typeArguments": null,
                                  "start": 1166,
                                  "end": 1172
                                },
                                "start": 1160,
                                "end": 1172
                              }
                            ],
                            "start": 1131,
                            "end": 1173
                          },
                          "start": 1111,
                          "end": 1173
                        }
                      ],
                      "start": 1102,
                      "end": 1174
                    },
                    "start": 1098,
                    "end": 1174
                  },
                  "start": 1096,
                  "end": 1174
                },
                "start": 1090,
                "end": 1174
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Params",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1179,
                  "end": 1185
                },
                "typeArguments": null,
                "start": 1179,
                "end": 1185
              },
              "start": 1177,
              "end": 1185
            },
            "body": {
              "type": "Identifier",
              "decorators": [],
              "name": "params",
              "optional": false,
              "typeAnnotation": null,
              "start": 1189,
              "end": 1195
            },
            "id": null,
            "generator": false,
            "start": 1076,
            "end": 1195
          },
          "definite": false,
          "start": 1070,
          "end": 1195
        }
      ],
      "declare": false,
      "start": 1064,
      "end": 1196
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "fn10",
        "optional": false,
        "typeAnnotation": null,
        "start": 1207,
        "end": 1211
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
              "start": 1212,
              "end": 1213
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 1212,
            "end": 1213
          }
        ],
        "start": 1211,
        "end": 1214
      },
      "params": [
        {
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
                "name": "TemplatedConditional",
                "optional": false,
                "typeAnnotation": null,
                "start": 1218,
                "end": 1238
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
                      "start": 1239,
                      "end": 1240
                    },
                    "typeArguments": null,
                    "start": 1239,
                    "end": 1240
                  },
                  {
                    "type": "TSNeverKeyword",
                    "start": 1242,
                    "end": 1247
                  },
                  {
                    "type": "TSNeverKeyword",
                    "start": 1249,
                    "end": 1254
                  },
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "T",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1256,
                      "end": 1257
                    },
                    "typeArguments": null,
                    "start": 1256,
                    "end": 1257
                  }
                ],
                "start": 1238,
                "end": 1258
              },
              "start": 1218,
              "end": 1258
            },
            "start": 1216,
            "end": 1258
          },
          "start": 1215,
          "end": 1258
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "VariableDeclaration",
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "y",
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
                        "start": 1273,
                        "end": 1274
                      },
                      "typeArguments": null,
                      "start": 1273,
                      "end": 1274
                    },
                    "start": 1271,
                    "end": 1274
                  },
                  "start": 1270,
                  "end": 1274
                },
                "init": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1277,
                  "end": 1278
                },
                "definite": false,
                "start": 1270,
                "end": 1278
              }
            ],
            "declare": false,
            "start": 1266,
            "end": 1279
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 1284,
                "end": 1285
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "y",
                "optional": false,
                "typeAnnotation": null,
                "start": 1288,
                "end": 1289
              },
              "start": 1284,
              "end": 1289
            },
            "directive": null,
            "start": 1284,
            "end": 1290
          }
        ],
        "start": 1260,
        "end": 1292
      },
      "expression": false,
      "start": 1198,
      "end": 1292
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
            "name": "fn11",
            "optional": false,
            "typeAnnotation": null,
            "start": 1300,
            "end": 1304
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
                    "name": "Params",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1308,
                    "end": 1314
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 1308,
                  "end": 1314
                }
              ],
              "start": 1307,
              "end": 1315
            },
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "params",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Pick",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1329,
                      "end": 1333
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "params": [
                        {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "Params",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1334,
                            "end": 1340
                          },
                          "typeArguments": null,
                          "start": 1334,
                          "end": 1340
                        },
                        {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "TemplatedConditional",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1342,
                            "end": 1362
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
                                    "name": "Params",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 1369,
                                    "end": 1375
                                  },
                                  "typeArguments": null,
                                  "start": 1369,
                                  "end": 1375
                                },
                                "start": 1363,
                                "end": 1375
                              },
                              {
                                "type": "TSTypeOperator",
                                "operator": "keyof",
                                "typeAnnotation": {
                                  "type": "TSTypeReference",
                                  "typeName": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "Params",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 1383,
                                    "end": 1389
                                  },
                                  "typeArguments": null,
                                  "start": 1383,
                                  "end": 1389
                                },
                                "start": 1377,
                                "end": 1389
                              },
                              {
                                "type": "TSTypeOperator",
                                "operator": "keyof",
                                "typeAnnotation": {
                                  "type": "TSTypeReference",
                                  "typeName": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "Params",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 1397,
                                    "end": 1403
                                  },
                                  "typeArguments": null,
                                  "start": 1397,
                                  "end": 1403
                                },
                                "start": 1391,
                                "end": 1403
                              },
                              {
                                "type": "TSNeverKeyword",
                                "start": 1405,
                                "end": 1410
                              }
                            ],
                            "start": 1362,
                            "end": 1411
                          },
                          "start": 1342,
                          "end": 1411
                        }
                      ],
                      "start": 1333,
                      "end": 1412
                    },
                    "start": 1329,
                    "end": 1412
                  },
                  "start": 1327,
                  "end": 1412
                },
                "start": 1321,
                "end": 1412
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Params",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1417,
                  "end": 1423
                },
                "typeArguments": null,
                "start": 1417,
                "end": 1423
              },
              "start": 1415,
              "end": 1423
            },
            "body": {
              "type": "Identifier",
              "decorators": [],
              "name": "params",
              "optional": false,
              "typeAnnotation": null,
              "start": 1427,
              "end": 1433
            },
            "id": null,
            "generator": false,
            "start": 1307,
            "end": 1433
          },
          "definite": false,
          "start": 1300,
          "end": 1433
        }
      ],
      "declare": false,
      "start": 1294,
      "end": 1434
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "fn12",
        "optional": false,
        "typeAnnotation": null,
        "start": 1445,
        "end": 1449
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
              "start": 1450,
              "end": 1451
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 1450,
            "end": 1451
          }
        ],
        "start": 1449,
        "end": 1452
      },
      "params": [
        {
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
                "name": "TemplatedConditional",
                "optional": false,
                "typeAnnotation": null,
                "start": 1456,
                "end": 1476
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
                      "start": 1477,
                      "end": 1478
                    },
                    "typeArguments": null,
                    "start": 1477,
                    "end": 1478
                  },
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "T",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1480,
                      "end": 1481
                    },
                    "typeArguments": null,
                    "start": 1480,
                    "end": 1481
                  },
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "T",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1483,
                      "end": 1484
                    },
                    "typeArguments": null,
                    "start": 1483,
                    "end": 1484
                  },
                  {
                    "type": "TSNeverKeyword",
                    "start": 1486,
                    "end": 1491
                  }
                ],
                "start": 1476,
                "end": 1492
              },
              "start": 1456,
              "end": 1492
            },
            "start": 1454,
            "end": 1492
          },
          "start": 1453,
          "end": 1492
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "VariableDeclaration",
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "y",
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
                        "start": 1507,
                        "end": 1508
                      },
                      "typeArguments": null,
                      "start": 1507,
                      "end": 1508
                    },
                    "start": 1505,
                    "end": 1508
                  },
                  "start": 1504,
                  "end": 1508
                },
                "init": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1511,
                  "end": 1512
                },
                "definite": false,
                "start": 1504,
                "end": 1512
              }
            ],
            "declare": false,
            "start": 1500,
            "end": 1513
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 1518,
                "end": 1519
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "y",
                "optional": false,
                "typeAnnotation": null,
                "start": 1522,
                "end": 1523
              },
              "start": 1518,
              "end": 1523
            },
            "directive": null,
            "start": 1518,
            "end": 1524
          }
        ],
        "start": 1494,
        "end": 1526
      },
      "expression": false,
      "start": 1436,
      "end": 1526
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
            "name": "z",
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
            "start": 1540,
            "end": 1546
          },
          "init": null,
          "definite": false,
          "start": 1540,
          "end": 1546
        }
      ],
      "declare": true,
      "start": 1528,
      "end": 1547
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
            "name": "zee",
            "optional": false,
            "typeAnnotation": null,
            "start": 1554,
            "end": 1557
          },
          "init": {
            "type": "TSNonNullExpression",
            "expression": {
              "type": "TSNonNullExpression",
              "expression": {
                "type": "TSNonNullExpression",
                "expression": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "z",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1560,
                  "end": 1561
                },
                "start": 1560,
                "end": 1562
              },
              "start": 1560,
              "end": 1563
            },
            "start": 1560,
            "end": 1564
          },
          "definite": false,
          "start": 1554,
          "end": 1564
        }
      ],
      "declare": false,
      "start": 1548,
      "end": 1565
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 1669
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "const",
    "start": 0,
    "end": 5
  },
  {
    "type": "Identifier",
    "value": "fn1",
    "start": 6,
    "end": 9
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 10,
    "end": 11
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 12,
    "end": 13
  },
  {
    "type": "Identifier",
    "value": "Params",
    "start": 13,
    "end": 19
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 19,
    "end": 20
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 20,
    "end": 21
  },
  {
    "type": "Identifier",
    "value": "params",
    "start": 26,
    "end": 32
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 32,
    "end": 33
  },
  {
    "type": "Identifier",
    "value": "Pick",
    "start": 34,
    "end": 38
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 38,
    "end": 39
  },
  {
    "type": "Identifier",
    "value": "Params",
    "start": 39,
    "end": 45
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 45,
    "end": 46
  },
  {
    "type": "Identifier",
    "value": "Exclude",
    "start": 47,
    "end": 54
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 54,
    "end": 55
  },
  {
    "type": "Identifier",
    "value": "keyof",
    "start": 55,
    "end": 60
  },
  {
    "type": "Identifier",
    "value": "Params",
    "start": 61,
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
    "value": "never",
    "start": 69,
    "end": 74
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 74,
    "end": 75
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 75,
    "end": 76
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 76,
    "end": 77
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 78,
    "end": 79
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 79,
    "end": 80
  },
  {
    "type": "Identifier",
    "value": "Params",
    "start": 81,
    "end": 87
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 88,
    "end": 90
  },
  {
    "type": "Identifier",
    "value": "params",
    "start": 91,
    "end": 97
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 97,
    "end": 98
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 100,
    "end": 108
  },
  {
    "type": "Identifier",
    "value": "fn2",
    "start": 109,
    "end": 112
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 112,
    "end": 113
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 113,
    "end": 114
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 114,
    "end": 115
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 115,
    "end": 116
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 116,
    "end": 117
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 117,
    "end": 118
  },
  {
    "type": "Identifier",
    "value": "Exclude",
    "start": 119,
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
    "value": ",",
    "start": 128,
    "end": 129
  },
  {
    "type": "Identifier",
    "value": "never",
    "start": 130,
    "end": 135
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 135,
    "end": 136
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 136,
    "end": 137
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 138,
    "end": 139
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 144,
    "end": 147
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 148,
    "end": 149
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 149,
    "end": 150
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 151,
    "end": 152
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 153,
    "end": 154
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 155,
    "end": 156
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 156,
    "end": 157
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 162,
    "end": 163
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 164,
    "end": 165
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 166,
    "end": 167
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 167,
    "end": 168
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 169,
    "end": 170
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 172,
    "end": 177
  },
  {
    "type": "Identifier",
    "value": "fn3",
    "start": 178,
    "end": 181
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 182,
    "end": 183
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 184,
    "end": 185
  },
  {
    "type": "Identifier",
    "value": "Params",
    "start": 185,
    "end": 191
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 191,
    "end": 192
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 192,
    "end": 193
  },
  {
    "type": "Identifier",
    "value": "params",
    "start": 198,
    "end": 204
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 204,
    "end": 205
  },
  {
    "type": "Identifier",
    "value": "Pick",
    "start": 206,
    "end": 210
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 210,
    "end": 211
  },
  {
    "type": "Identifier",
    "value": "Params",
    "start": 211,
    "end": 217
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 217,
    "end": 218
  },
  {
    "type": "Identifier",
    "value": "Extract",
    "start": 219,
    "end": 226
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 226,
    "end": 227
  },
  {
    "type": "Identifier",
    "value": "keyof",
    "start": 227,
    "end": 232
  },
  {
    "type": "Identifier",
    "value": "Params",
    "start": 233,
    "end": 239
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 239,
    "end": 240
  },
  {
    "type": "Identifier",
    "value": "keyof",
    "start": 241,
    "end": 246
  },
  {
    "type": "Identifier",
    "value": "Params",
    "start": 247,
    "end": 253
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 253,
    "end": 254
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 254,
    "end": 255
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 255,
    "end": 256
  },
  {
    "type": "Punctuator",
    "value": ")",
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
    "type": "Identifier",
    "value": "Params",
    "start": 260,
    "end": 266
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 267,
    "end": 269
  },
  {
    "type": "Identifier",
    "value": "params",
    "start": 270,
    "end": 276
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 276,
    "end": 277
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 279,
    "end": 287
  },
  {
    "type": "Identifier",
    "value": "fn4",
    "start": 288,
    "end": 291
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 291,
    "end": 292
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 292,
    "end": 293
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 293,
    "end": 294
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 294,
    "end": 295
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 295,
    "end": 296
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 296,
    "end": 297
  },
  {
    "type": "Identifier",
    "value": "Extract",
    "start": 298,
    "end": 305
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 305,
    "end": 306
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 306,
    "end": 307
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 307,
    "end": 308
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 309,
    "end": 310
  },
  {
    "type": "Punctuator",
    "value": ">",
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
    "value": "{",
    "start": 313,
    "end": 314
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 319,
    "end": 322
  },
  {
    "type": "Identifier",
    "value": "y",
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
    "value": "T",
    "start": 326,
    "end": 327
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 328,
    "end": 329
  },
  {
    "type": "Identifier",
    "value": "x",
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
    "value": "x",
    "start": 337,
    "end": 338
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 339,
    "end": 340
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 341,
    "end": 342
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 342,
    "end": 343
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 344,
    "end": 345
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 347,
    "end": 354
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 355,
    "end": 358
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 359,
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
    "value": "Extract",
    "start": 362,
    "end": 369
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 369,
    "end": 370
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 370,
    "end": 376
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 377,
    "end": 378
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 379,
    "end": 385
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 385,
    "end": 386
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 387,
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
    "value": ";",
    "start": 391,
    "end": 392
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 439,
    "end": 443
  },
  {
    "type": "Identifier",
    "value": "ExtractWithDefault",
    "start": 444,
    "end": 462
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 462,
    "end": 463
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 463,
    "end": 464
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 464,
    "end": 465
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 466,
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
    "value": "D",
    "start": 469,
    "end": 470
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 471,
    "end": 472
  },
  {
    "type": "Identifier",
    "value": "never",
    "start": 473,
    "end": 478
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 478,
    "end": 479
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 480,
    "end": 481
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 482,
    "end": 483
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 484,
    "end": 491
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 492,
    "end": 493
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 494,
    "end": 495
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 496,
    "end": 497
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 498,
    "end": 499
  },
  {
    "type": "Identifier",
    "value": "D",
    "start": 500,
    "end": 501
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 501,
    "end": 502
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 504,
    "end": 508
  },
  {
    "type": "Identifier",
    "value": "ExcludeWithDefault",
    "start": 509,
    "end": 527
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 527,
    "end": 528
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 528,
    "end": 529
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 529,
    "end": 530
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 531,
    "end": 532
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 532,
    "end": 533
  },
  {
    "type": "Identifier",
    "value": "D",
    "start": 534,
    "end": 535
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 536,
    "end": 537
  },
  {
    "type": "Identifier",
    "value": "never",
    "start": 538,
    "end": 543
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 543,
    "end": 544
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 545,
    "end": 546
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 547,
    "end": 548
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 549,
    "end": 556
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 557,
    "end": 558
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 559,
    "end": 560
  },
  {
    "type": "Identifier",
    "value": "D",
    "start": 561,
    "end": 562
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 563,
    "end": 564
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 565,
    "end": 566
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 566,
    "end": 567
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 569,
    "end": 574
  },
  {
    "type": "Identifier",
    "value": "fn5",
    "start": 575,
    "end": 578
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 579,
    "end": 580
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 581,
    "end": 582
  },
  {
    "type": "Identifier",
    "value": "Params",
    "start": 582,
    "end": 588
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 588,
    "end": 589
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 589,
    "end": 590
  },
  {
    "type": "Identifier",
    "value": "params",
    "start": 595,
    "end": 601
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 601,
    "end": 602
  },
  {
    "type": "Identifier",
    "value": "Pick",
    "start": 603,
    "end": 607
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 607,
    "end": 608
  },
  {
    "type": "Identifier",
    "value": "Params",
    "start": 608,
    "end": 614
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 614,
    "end": 615
  },
  {
    "type": "Identifier",
    "value": "ExcludeWithDefault",
    "start": 616,
    "end": 634
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 634,
    "end": 635
  },
  {
    "type": "Identifier",
    "value": "keyof",
    "start": 635,
    "end": 640
  },
  {
    "type": "Identifier",
    "value": "Params",
    "start": 641,
    "end": 647
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 647,
    "end": 648
  },
  {
    "type": "Identifier",
    "value": "never",
    "start": 649,
    "end": 654
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 654,
    "end": 655
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 655,
    "end": 656
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 656,
    "end": 657
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 658,
    "end": 659
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 659,
    "end": 660
  },
  {
    "type": "Identifier",
    "value": "Params",
    "start": 661,
    "end": 667
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 668,
    "end": 670
  },
  {
    "type": "Identifier",
    "value": "params",
    "start": 671,
    "end": 677
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 677,
    "end": 678
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 680,
    "end": 688
  },
  {
    "type": "Identifier",
    "value": "fn6",
    "start": 689,
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
    "value": "(",
    "start": 695,
    "end": 696
  },
  {
    "type": "Identifier",
    "value": "x",
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
    "value": "ExcludeWithDefault",
    "start": 699,
    "end": 717
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 717,
    "end": 718
  },
  {
    "type": "Identifier",
    "value": "T",
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
    "type": "Identifier",
    "value": "never",
    "start": 721,
    "end": 726
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 726,
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
    "value": "{",
    "start": 729,
    "end": 730
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 735,
    "end": 738
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 739,
    "end": 740
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 740,
    "end": 741
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 742,
    "end": 743
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 744,
    "end": 745
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 746,
    "end": 747
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 747,
    "end": 748
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 753,
    "end": 754
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 755,
    "end": 756
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 757,
    "end": 758
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 758,
    "end": 759
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 760,
    "end": 761
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 763,
    "end": 768
  },
  {
    "type": "Identifier",
    "value": "fn7",
    "start": 769,
    "end": 772
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 773,
    "end": 774
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 775,
    "end": 776
  },
  {
    "type": "Identifier",
    "value": "Params",
    "start": 776,
    "end": 782
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 782,
    "end": 783
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 783,
    "end": 784
  },
  {
    "type": "Identifier",
    "value": "params",
    "start": 789,
    "end": 795
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 795,
    "end": 796
  },
  {
    "type": "Identifier",
    "value": "Pick",
    "start": 797,
    "end": 801
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 801,
    "end": 802
  },
  {
    "type": "Identifier",
    "value": "Params",
    "start": 802,
    "end": 808
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 808,
    "end": 809
  },
  {
    "type": "Identifier",
    "value": "ExtractWithDefault",
    "start": 810,
    "end": 828
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 828,
    "end": 829
  },
  {
    "type": "Identifier",
    "value": "keyof",
    "start": 829,
    "end": 834
  },
  {
    "type": "Identifier",
    "value": "Params",
    "start": 835,
    "end": 841
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 841,
    "end": 842
  },
  {
    "type": "Identifier",
    "value": "keyof",
    "start": 843,
    "end": 848
  },
  {
    "type": "Identifier",
    "value": "Params",
    "start": 849,
    "end": 855
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 855,
    "end": 856
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 856,
    "end": 857
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 857,
    "end": 858
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 859,
    "end": 860
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 860,
    "end": 861
  },
  {
    "type": "Identifier",
    "value": "Params",
    "start": 862,
    "end": 868
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 869,
    "end": 871
  },
  {
    "type": "Identifier",
    "value": "params",
    "start": 872,
    "end": 878
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 878,
    "end": 879
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 881,
    "end": 889
  },
  {
    "type": "Identifier",
    "value": "fn8",
    "start": 890,
    "end": 893
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 893,
    "end": 894
  },
  {
    "type": "Identifier",
    "value": "T",
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
    "value": "(",
    "start": 896,
    "end": 897
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 897,
    "end": 898
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 898,
    "end": 899
  },
  {
    "type": "Identifier",
    "value": "ExtractWithDefault",
    "start": 900,
    "end": 918
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 918,
    "end": 919
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 919,
    "end": 920
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 920,
    "end": 921
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 922,
    "end": 923
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 923,
    "end": 924
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 924,
    "end": 925
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 926,
    "end": 927
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 932,
    "end": 935
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 936,
    "end": 937
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 937,
    "end": 938
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 939,
    "end": 940
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 941,
    "end": 942
  },
  {
    "type": "Identifier",
    "value": "x",
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
    "value": "x",
    "start": 950,
    "end": 951
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 952,
    "end": 953
  },
  {
    "type": "Identifier",
    "value": "y",
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
    "start": 957,
    "end": 958
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 960,
    "end": 964
  },
  {
    "type": "Identifier",
    "value": "TemplatedConditional",
    "start": 965,
    "end": 985
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 985,
    "end": 986
  },
  {
    "type": "Identifier",
    "value": "TCheck",
    "start": 986,
    "end": 992
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 992,
    "end": 993
  },
  {
    "type": "Identifier",
    "value": "TExtends",
    "start": 994,
    "end": 1002
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1002,
    "end": 1003
  },
  {
    "type": "Identifier",
    "value": "TTrue",
    "start": 1004,
    "end": 1009
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1009,
    "end": 1010
  },
  {
    "type": "Identifier",
    "value": "TFalse",
    "start": 1011,
    "end": 1017
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1017,
    "end": 1018
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1019,
    "end": 1020
  },
  {
    "type": "Identifier",
    "value": "TCheck",
    "start": 1021,
    "end": 1027
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 1028,
    "end": 1035
  },
  {
    "type": "Identifier",
    "value": "TExtends",
    "start": 1036,
    "end": 1044
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 1045,
    "end": 1046
  },
  {
    "type": "Identifier",
    "value": "TTrue",
    "start": 1047,
    "end": 1052
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1053,
    "end": 1054
  },
  {
    "type": "Identifier",
    "value": "TFalse",
    "start": 1055,
    "end": 1061
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1061,
    "end": 1062
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 1064,
    "end": 1069
  },
  {
    "type": "Identifier",
    "value": "fn9",
    "start": 1070,
    "end": 1073
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1074,
    "end": 1075
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1076,
    "end": 1077
  },
  {
    "type": "Identifier",
    "value": "Params",
    "start": 1077,
    "end": 1083
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1083,
    "end": 1084
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1084,
    "end": 1085
  },
  {
    "type": "Identifier",
    "value": "params",
    "start": 1090,
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
    "value": "Pick",
    "start": 1098,
    "end": 1102
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1102,
    "end": 1103
  },
  {
    "type": "Identifier",
    "value": "Params",
    "start": 1103,
    "end": 1109
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1109,
    "end": 1110
  },
  {
    "type": "Identifier",
    "value": "TemplatedConditional",
    "start": 1111,
    "end": 1131
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1131,
    "end": 1132
  },
  {
    "type": "Identifier",
    "value": "keyof",
    "start": 1132,
    "end": 1137
  },
  {
    "type": "Identifier",
    "value": "Params",
    "start": 1138,
    "end": 1144
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1144,
    "end": 1145
  },
  {
    "type": "Identifier",
    "value": "never",
    "start": 1146,
    "end": 1151
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1151,
    "end": 1152
  },
  {
    "type": "Identifier",
    "value": "never",
    "start": 1153,
    "end": 1158
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1158,
    "end": 1159
  },
  {
    "type": "Identifier",
    "value": "keyof",
    "start": 1160,
    "end": 1165
  },
  {
    "type": "Identifier",
    "value": "Params",
    "start": 1166,
    "end": 1172
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1172,
    "end": 1173
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1173,
    "end": 1174
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1174,
    "end": 1175
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
    "value": "Params",
    "start": 1179,
    "end": 1185
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1186,
    "end": 1188
  },
  {
    "type": "Identifier",
    "value": "params",
    "start": 1189,
    "end": 1195
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1195,
    "end": 1196
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1198,
    "end": 1206
  },
  {
    "type": "Identifier",
    "value": "fn10",
    "start": 1207,
    "end": 1211
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1211,
    "end": 1212
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1212,
    "end": 1213
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1213,
    "end": 1214
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1214,
    "end": 1215
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1215,
    "end": 1216
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1216,
    "end": 1217
  },
  {
    "type": "Identifier",
    "value": "TemplatedConditional",
    "start": 1218,
    "end": 1238
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1238,
    "end": 1239
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1239,
    "end": 1240
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1240,
    "end": 1241
  },
  {
    "type": "Identifier",
    "value": "never",
    "start": 1242,
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
    "value": "never",
    "start": 1249,
    "end": 1254
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1254,
    "end": 1255
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1256,
    "end": 1257
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1257,
    "end": 1258
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1258,
    "end": 1259
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1260,
    "end": 1261
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1266,
    "end": 1269
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 1270,
    "end": 1271
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1271,
    "end": 1272
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1273,
    "end": 1274
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1275,
    "end": 1276
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1277,
    "end": 1278
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1278,
    "end": 1279
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1284,
    "end": 1285
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1286,
    "end": 1287
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 1288,
    "end": 1289
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1289,
    "end": 1290
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1291,
    "end": 1292
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 1294,
    "end": 1299
  },
  {
    "type": "Identifier",
    "value": "fn11",
    "start": 1300,
    "end": 1304
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1305,
    "end": 1306
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1307,
    "end": 1308
  },
  {
    "type": "Identifier",
    "value": "Params",
    "start": 1308,
    "end": 1314
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1314,
    "end": 1315
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1315,
    "end": 1316
  },
  {
    "type": "Identifier",
    "value": "params",
    "start": 1321,
    "end": 1327
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1327,
    "end": 1328
  },
  {
    "type": "Identifier",
    "value": "Pick",
    "start": 1329,
    "end": 1333
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1333,
    "end": 1334
  },
  {
    "type": "Identifier",
    "value": "Params",
    "start": 1334,
    "end": 1340
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1340,
    "end": 1341
  },
  {
    "type": "Identifier",
    "value": "TemplatedConditional",
    "start": 1342,
    "end": 1362
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1362,
    "end": 1363
  },
  {
    "type": "Identifier",
    "value": "keyof",
    "start": 1363,
    "end": 1368
  },
  {
    "type": "Identifier",
    "value": "Params",
    "start": 1369,
    "end": 1375
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1375,
    "end": 1376
  },
  {
    "type": "Identifier",
    "value": "keyof",
    "start": 1377,
    "end": 1382
  },
  {
    "type": "Identifier",
    "value": "Params",
    "start": 1383,
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
    "value": "keyof",
    "start": 1391,
    "end": 1396
  },
  {
    "type": "Identifier",
    "value": "Params",
    "start": 1397,
    "end": 1403
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1403,
    "end": 1404
  },
  {
    "type": "Identifier",
    "value": "never",
    "start": 1405,
    "end": 1410
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1410,
    "end": 1411
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1411,
    "end": 1412
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1412,
    "end": 1413
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1414,
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
    "value": "Params",
    "start": 1417,
    "end": 1423
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1424,
    "end": 1426
  },
  {
    "type": "Identifier",
    "value": "params",
    "start": 1427,
    "end": 1433
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1433,
    "end": 1434
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1436,
    "end": 1444
  },
  {
    "type": "Identifier",
    "value": "fn12",
    "start": 1445,
    "end": 1449
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1449,
    "end": 1450
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1450,
    "end": 1451
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1451,
    "end": 1452
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1452,
    "end": 1453
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1453,
    "end": 1454
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1454,
    "end": 1455
  },
  {
    "type": "Identifier",
    "value": "TemplatedConditional",
    "start": 1456,
    "end": 1476
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1476,
    "end": 1477
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1477,
    "end": 1478
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1478,
    "end": 1479
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1480,
    "end": 1481
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1481,
    "end": 1482
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1483,
    "end": 1484
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1484,
    "end": 1485
  },
  {
    "type": "Identifier",
    "value": "never",
    "start": 1486,
    "end": 1491
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1491,
    "end": 1492
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1492,
    "end": 1493
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1494,
    "end": 1495
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1500,
    "end": 1503
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 1504,
    "end": 1505
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1505,
    "end": 1506
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1507,
    "end": 1508
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1509,
    "end": 1510
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1511,
    "end": 1512
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1512,
    "end": 1513
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1518,
    "end": 1519
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1520,
    "end": 1521
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 1522,
    "end": 1523
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1523,
    "end": 1524
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1525,
    "end": 1526
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 1528,
    "end": 1535
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1536,
    "end": 1539
  },
  {
    "type": "Identifier",
    "value": "z",
    "start": 1540,
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
    "value": ";",
    "start": 1546,
    "end": 1547
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 1548,
    "end": 1553
  },
  {
    "type": "Identifier",
    "value": "zee",
    "start": 1554,
    "end": 1557
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1558,
    "end": 1559
  },
  {
    "type": "Identifier",
    "value": "z",
    "start": 1560,
    "end": 1561
  },
  {
    "type": "Punctuator",
    "value": "!",
    "start": 1561,
    "end": 1562
  },
  {
    "type": "Punctuator",
    "value": "!",
    "start": 1562,
    "end": 1563
  },
  {
    "type": "Punctuator",
    "value": "!",
    "start": 1563,
    "end": 1564
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1564,
    "end": 1565
  }
]
```
