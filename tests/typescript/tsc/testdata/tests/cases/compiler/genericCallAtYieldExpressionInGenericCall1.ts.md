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
            "name": "inner",
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
                            "start": 26,
                            "end": 27
                          },
                          "constraint": null,
                          "default": null,
                          "in": false,
                          "out": false,
                          "const": false,
                          "start": 26,
                          "end": 27
                        }
                      ],
                      "start": 25,
                      "end": 28
                    },
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
                              "name": "A",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 36,
                              "end": 37
                            },
                            "typeArguments": null,
                            "start": 36,
                            "end": 37
                          },
                          "start": 34,
                          "end": 37
                        },
                        "start": 29,
                        "end": 37
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeLiteral",
                        "members": [
                          {
                            "type": "TSCallSignatureDeclaration",
                            "typeParameters": null,
                            "params": [],
                            "returnType": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSTypeReference",
                                "typeName": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "A",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 50,
                                  "end": 51
                                },
                                "typeArguments": null,
                                "start": 50,
                                "end": 51
                              },
                              "start": 48,
                              "end": 51
                            },
                            "start": 46,
                            "end": 52
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
                                "start": 58,
                                "end": 64
                              },
                              "property": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "iterator",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 65,
                                "end": 73
                              },
                              "optional": false,
                              "computed": false,
                              "start": 58,
                              "end": 73
                            },
                            "computed": true,
                            "optional": false,
                            "kind": "method",
                            "typeParameters": null,
                            "params": [],
                            "returnType": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSTypeLiteral",
                                "members": [
                                  {
                                    "type": "TSMethodSignature",
                                    "key": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "next",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 86,
                                      "end": 90
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
                                          "start": 94,
                                          "end": 98
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
                                              "start": 100,
                                              "end": 113
                                            },
                                            "typeArguments": {
                                              "type": "TSTypeParameterInstantiation",
                                              "params": [
                                                {
                                                  "type": "TSAnyKeyword",
                                                  "start": 114,
                                                  "end": 117
                                                }
                                              ],
                                              "start": 113,
                                              "end": 118
                                            },
                                            "start": 100,
                                            "end": 118
                                          },
                                          "start": 98,
                                          "end": 118
                                        },
                                        "value": null,
                                        "start": 91,
                                        "end": 118
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
                                          "start": 121,
                                          "end": 135
                                        },
                                        "typeArguments": {
                                          "type": "TSTypeParameterInstantiation",
                                          "params": [
                                            {
                                              "type": "TSAnyKeyword",
                                              "start": 136,
                                              "end": 139
                                            },
                                            {
                                              "type": "TSTypeReference",
                                              "typeName": {
                                                "type": "Identifier",
                                                "decorators": [],
                                                "name": "A",
                                                "optional": false,
                                                "typeAnnotation": null,
                                                "start": 141,
                                                "end": 142
                                              },
                                              "typeArguments": null,
                                              "start": 141,
                                              "end": 142
                                            }
                                          ],
                                          "start": 135,
                                          "end": 143
                                        },
                                        "start": 121,
                                        "end": 143
                                      },
                                      "start": 119,
                                      "end": 143
                                    },
                                    "accessibility": null,
                                    "readonly": false,
                                    "static": false,
                                    "start": 86,
                                    "end": 144
                                  }
                                ],
                                "start": 78,
                                "end": 150
                              },
                              "start": 76,
                              "end": 150
                            },
                            "accessibility": null,
                            "readonly": false,
                            "static": false,
                            "start": 57,
                            "end": 151
                          }
                        ],
                        "start": 40,
                        "end": 155
                      },
                      "start": 38,
                      "end": 155
                    },
                    "start": 25,
                    "end": 156
                  }
                ],
                "start": 21,
                "end": 158
              },
              "start": 19,
              "end": 158
            },
            "start": 14,
            "end": 158
          },
          "init": null,
          "definite": false,
          "start": 14,
          "end": 158
        }
      ],
      "declare": true,
      "start": 0,
      "end": 159
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "outer",
        "optional": false,
        "typeAnnotation": null,
        "start": 178,
        "end": 183
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
              "start": 184,
              "end": 185
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 184,
            "end": 185
          }
        ],
        "start": 183,
        "end": 186
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
                        "name": "A",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 201,
                        "end": 202
                      },
                      "typeArguments": null,
                      "start": 201,
                      "end": 202
                    },
                    "start": 199,
                    "end": 202
                  },
                  "start": 194,
                  "end": 202
                }
              ],
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
                    "start": 207,
                    "end": 216
                  },
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "params": [
                      {
                        "type": "TSAnyKeyword",
                        "start": 217,
                        "end": 220
                      },
                      {
                        "type": "TSAnyKeyword",
                        "start": 222,
                        "end": 225
                      },
                      {
                        "type": "TSAnyKeyword",
                        "start": 227,
                        "end": 230
                      }
                    ],
                    "start": 216,
                    "end": 231
                  },
                  "start": 207,
                  "end": 231
                },
                "start": 204,
                "end": 231
              },
              "start": 193,
              "end": 231
            },
            "start": 191,
            "end": 231
          },
          "start": 187,
          "end": 231
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSVoidKeyword",
          "start": 234,
          "end": 238
        },
        "start": 232,
        "end": 238
      },
      "body": null,
      "expression": false,
      "start": 161,
      "end": 239
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "outer",
          "optional": false,
          "typeAnnotation": null,
          "start": 241,
          "end": 246
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "FunctionExpression",
            "id": null,
            "generator": true,
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
                    "start": 258,
                    "end": 259
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 258,
                  "end": 259
                }
              ],
              "start": 257,
              "end": 260
            },
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
            "returnType": null,
            "body": {
              "type": "BlockStatement",
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
                        "name": "result",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 281,
                        "end": 287
                      },
                      "init": {
                        "type": "YieldExpression",
                        "delegate": true,
                        "argument": {
                          "type": "CallExpression",
                          "callee": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "inner",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 297,
                            "end": 302
                          },
                          "typeArguments": null,
                          "arguments": [
                            {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "value",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 303,
                              "end": 308
                            }
                          ],
                          "optional": false,
                          "start": 297,
                          "end": 309
                        },
                        "start": 290,
                        "end": 309
                      },
                      "definite": false,
                      "start": 281,
                      "end": 309
                    }
                  ],
                  "declare": false,
                  "start": 275,
                  "end": 310
                }
              ],
              "start": 271,
              "end": 318
            },
            "expression": false,
            "start": 247,
            "end": 318
          }
        ],
        "optional": false,
        "start": 241,
        "end": 319
      },
      "directive": null,
      "start": 241,
      "end": 320
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "outer",
          "optional": false,
          "typeAnnotation": null,
          "start": 322,
          "end": 327
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "FunctionExpression",
            "id": null,
            "generator": true,
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
                    "start": 339,
                    "end": 340
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 339,
                  "end": 340
                }
              ],
              "start": 338,
              "end": 341
            },
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
                      "start": 349,
                      "end": 350
                    },
                    "typeArguments": null,
                    "start": 349,
                    "end": 350
                  },
                  "start": 347,
                  "end": 350
                },
                "start": 342,
                "end": 350
              }
            ],
            "returnType": null,
            "body": {
              "type": "BlockStatement",
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
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 362,
                        "end": 363
                      },
                      "init": {
                        "type": "CallExpression",
                        "callee": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "inner",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 366,
                          "end": 371
                        },
                        "typeArguments": null,
                        "arguments": [
                          {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "value",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 372,
                            "end": 377
                          }
                        ],
                        "optional": false,
                        "start": 366,
                        "end": 378
                      },
                      "definite": false,
                      "start": 362,
                      "end": 378
                    }
                  ],
                  "declare": false,
                  "start": 356,
                  "end": 379
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
                        "name": "result",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 388,
                        "end": 394
                      },
                      "init": {
                        "type": "YieldExpression",
                        "delegate": true,
                        "argument": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 404,
                          "end": 405
                        },
                        "start": 397,
                        "end": 405
                      },
                      "definite": false,
                      "start": 388,
                      "end": 405
                    }
                  ],
                  "declare": false,
                  "start": 382,
                  "end": 406
                }
              ],
              "start": 352,
              "end": 414
            },
            "expression": false,
            "start": 328,
            "end": 414
          }
        ],
        "optional": false,
        "start": 322,
        "end": 415
      },
      "directive": null,
      "start": 322,
      "end": 416
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
            "name": "inner2",
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
                            "start": 445,
                            "end": 446
                          },
                          "constraint": null,
                          "default": null,
                          "in": false,
                          "out": false,
                          "const": false,
                          "start": 445,
                          "end": 446
                        }
                      ],
                      "start": 444,
                      "end": 447
                    },
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
                              "name": "A",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 455,
                              "end": 456
                            },
                            "typeArguments": null,
                            "start": 455,
                            "end": 456
                          },
                          "start": 453,
                          "end": 456
                        },
                        "start": 448,
                        "end": 456
                      }
                    ],
                    "returnType": {
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
                              "name": "A",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 465,
                              "end": 466
                            },
                            "typeArguments": null,
                            "start": 465,
                            "end": 466
                          },
                          "start": 462,
                          "end": 466
                        },
                        "start": 459,
                        "end": 466
                      },
                      "start": 457,
                      "end": 466
                    },
                    "start": 444,
                    "end": 467
                  }
                ],
                "start": 440,
                "end": 469
              },
              "start": 438,
              "end": 469
            },
            "start": 432,
            "end": 469
          },
          "init": null,
          "definite": false,
          "start": 432,
          "end": 469
        }
      ],
      "declare": true,
      "start": 418,
      "end": 470
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "outer",
          "optional": false,
          "typeAnnotation": null,
          "start": 472,
          "end": 477
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "FunctionExpression",
            "id": null,
            "generator": true,
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
                    "start": 489,
                    "end": 490
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 489,
                  "end": 490
                }
              ],
              "start": 488,
              "end": 491
            },
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
                      "start": 499,
                      "end": 500
                    },
                    "typeArguments": null,
                    "start": 499,
                    "end": 500
                  },
                  "start": 497,
                  "end": 500
                },
                "start": 492,
                "end": 500
              }
            ],
            "returnType": null,
            "body": {
              "type": "BlockStatement",
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
                        "name": "result",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 512,
                        "end": 518
                      },
                      "init": {
                        "type": "YieldExpression",
                        "delegate": true,
                        "argument": {
                          "type": "CallExpression",
                          "callee": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "inner2",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 528,
                            "end": 534
                          },
                          "typeArguments": null,
                          "arguments": [
                            {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "value",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 535,
                              "end": 540
                            }
                          ],
                          "optional": false,
                          "start": 528,
                          "end": 541
                        },
                        "start": 521,
                        "end": 541
                      },
                      "definite": false,
                      "start": 512,
                      "end": 541
                    }
                  ],
                  "declare": false,
                  "start": 506,
                  "end": 542
                }
              ],
              "start": 502,
              "end": 553
            },
            "expression": false,
            "start": 478,
            "end": 553
          }
        ],
        "optional": false,
        "start": 472,
        "end": 554
      },
      "directive": null,
      "start": 472,
      "end": 555
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
            "name": "inner3",
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
                            "start": 584,
                            "end": 585
                          },
                          "constraint": null,
                          "default": null,
                          "in": false,
                          "out": false,
                          "const": false,
                          "start": 584,
                          "end": 585
                        }
                      ],
                      "start": 583,
                      "end": 586
                    },
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
                              "name": "A",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 594,
                              "end": 595
                            },
                            "typeArguments": null,
                            "start": 594,
                            "end": 595
                          },
                          "start": 592,
                          "end": 595
                        },
                        "start": 587,
                        "end": 595
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeLiteral",
                        "members": [
                          {
                            "type": "TSCallSignatureDeclaration",
                            "typeParameters": null,
                            "params": [],
                            "returnType": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSTypeReference",
                                "typeName": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "A",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 608,
                                  "end": 609
                                },
                                "typeArguments": null,
                                "start": 608,
                                "end": 609
                              },
                              "start": 606,
                              "end": 609
                            },
                            "start": 604,
                            "end": 610
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
                                "start": 616,
                                "end": 622
                              },
                              "property": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "iterator",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 623,
                                "end": 631
                              },
                              "optional": false,
                              "computed": false,
                              "start": 616,
                              "end": 631
                            },
                            "computed": true,
                            "optional": false,
                            "kind": "method",
                            "typeParameters": null,
                            "params": [],
                            "returnType": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSTypeLiteral",
                                "members": [
                                  {
                                    "type": "TSMethodSignature",
                                    "key": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "next",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 644,
                                      "end": 648
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
                                          "start": 652,
                                          "end": 656
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
                                              "start": 658,
                                              "end": 671
                                            },
                                            "typeArguments": {
                                              "type": "TSTypeParameterInstantiation",
                                              "params": [
                                                {
                                                  "type": "TSAnyKeyword",
                                                  "start": 672,
                                                  "end": 675
                                                }
                                              ],
                                              "start": 671,
                                              "end": 676
                                            },
                                            "start": 658,
                                            "end": 676
                                          },
                                          "start": 656,
                                          "end": 676
                                        },
                                        "value": null,
                                        "start": 649,
                                        "end": 676
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
                                          "start": 679,
                                          "end": 693
                                        },
                                        "typeArguments": {
                                          "type": "TSTypeParameterInstantiation",
                                          "params": [
                                            {
                                              "type": "TSNumberKeyword",
                                              "start": 694,
                                              "end": 700
                                            },
                                            {
                                              "type": "TSTypeReference",
                                              "typeName": {
                                                "type": "Identifier",
                                                "decorators": [],
                                                "name": "A",
                                                "optional": false,
                                                "typeAnnotation": null,
                                                "start": 702,
                                                "end": 703
                                              },
                                              "typeArguments": null,
                                              "start": 702,
                                              "end": 703
                                            }
                                          ],
                                          "start": 693,
                                          "end": 704
                                        },
                                        "start": 679,
                                        "end": 704
                                      },
                                      "start": 677,
                                      "end": 704
                                    },
                                    "accessibility": null,
                                    "readonly": false,
                                    "static": false,
                                    "start": 644,
                                    "end": 705
                                  }
                                ],
                                "start": 636,
                                "end": 711
                              },
                              "start": 634,
                              "end": 711
                            },
                            "accessibility": null,
                            "readonly": false,
                            "static": false,
                            "start": 615,
                            "end": 712
                          }
                        ],
                        "start": 598,
                        "end": 716
                      },
                      "start": 596,
                      "end": 716
                    },
                    "start": 583,
                    "end": 717
                  }
                ],
                "start": 579,
                "end": 719
              },
              "start": 577,
              "end": 719
            },
            "start": 571,
            "end": 719
          },
          "init": null,
          "definite": false,
          "start": 571,
          "end": 719
        }
      ],
      "declare": true,
      "start": 557,
      "end": 720
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "outer2",
        "optional": false,
        "typeAnnotation": null,
        "start": 739,
        "end": 745
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
              "start": 746,
              "end": 747
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 746,
            "end": 747
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "Y",
              "optional": false,
              "typeAnnotation": null,
              "start": 749,
              "end": 750
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 749,
            "end": 750
          }
        ],
        "start": 745,
        "end": 751
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
                        "name": "A",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 766,
                        "end": 767
                      },
                      "typeArguments": null,
                      "start": 766,
                      "end": 767
                    },
                    "start": 764,
                    "end": 767
                  },
                  "start": 759,
                  "end": 767
                }
              ],
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
                    "start": 772,
                    "end": 781
                  },
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "params": [
                      {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Y",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 782,
                          "end": 783
                        },
                        "typeArguments": null,
                        "start": 782,
                        "end": 783
                      },
                      {
                        "type": "TSAnyKeyword",
                        "start": 785,
                        "end": 788
                      },
                      {
                        "type": "TSAnyKeyword",
                        "start": 790,
                        "end": 793
                      }
                    ],
                    "start": 781,
                    "end": 794
                  },
                  "start": 772,
                  "end": 794
                },
                "start": 769,
                "end": 794
              },
              "start": 758,
              "end": 794
            },
            "start": 756,
            "end": 794
          },
          "start": 752,
          "end": 794
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "Y",
            "optional": false,
            "typeAnnotation": null,
            "start": 797,
            "end": 798
          },
          "typeArguments": null,
          "start": 797,
          "end": 798
        },
        "start": 795,
        "end": 798
      },
      "body": null,
      "expression": false,
      "start": 722,
      "end": 799
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
            "name": "result1",
            "optional": false,
            "typeAnnotation": null,
            "start": 817,
            "end": 824
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "outer2",
              "optional": false,
              "typeAnnotation": null,
              "start": 827,
              "end": 833
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "FunctionExpression",
                "id": null,
                "generator": true,
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
                        "start": 845,
                        "end": 846
                      },
                      "constraint": null,
                      "default": null,
                      "in": false,
                      "out": false,
                      "const": false,
                      "start": 845,
                      "end": 846
                    }
                  ],
                  "start": 844,
                  "end": 847
                },
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
                          "start": 855,
                          "end": 856
                        },
                        "typeArguments": null,
                        "start": 855,
                        "end": 856
                      },
                      "start": 853,
                      "end": 856
                    },
                    "start": 848,
                    "end": 856
                  }
                ],
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
                            "name": "inner3",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 869,
                            "end": 875
                          },
                          "typeArguments": null,
                          "arguments": [
                            {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "value",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 876,
                              "end": 881
                            }
                          ],
                          "optional": false,
                          "start": 869,
                          "end": 882
                        },
                        "start": 862,
                        "end": 882
                      },
                      "directive": null,
                      "start": 862,
                      "end": 883
                    }
                  ],
                  "start": 858,
                  "end": 885
                },
                "expression": false,
                "start": 834,
                "end": 885
              }
            ],
            "optional": false,
            "start": 827,
            "end": 886
          },
          "definite": false,
          "start": 817,
          "end": 886
        }
      ],
      "declare": false,
      "start": 811,
      "end": 887
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
            "name": "result2",
            "optional": false,
            "typeAnnotation": null,
            "start": 905,
            "end": 912
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "outer2",
              "optional": false,
              "typeAnnotation": null,
              "start": 915,
              "end": 921
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "FunctionExpression",
                "id": null,
                "generator": true,
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
                        "start": 933,
                        "end": 934
                      },
                      "constraint": null,
                      "default": null,
                      "in": false,
                      "out": false,
                      "const": false,
                      "start": 933,
                      "end": 934
                    }
                  ],
                  "start": 932,
                  "end": 935
                },
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
                          "start": 943,
                          "end": 944
                        },
                        "typeArguments": null,
                        "start": 943,
                        "end": 944
                      },
                      "start": 941,
                      "end": 944
                    },
                    "start": 936,
                    "end": 944
                  }
                ],
                "returnType": null,
                "body": {
                  "type": "BlockStatement",
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
                            "name": "x",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 956,
                            "end": 957
                          },
                          "init": {
                            "type": "CallExpression",
                            "callee": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "inner3",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 960,
                              "end": 966
                            },
                            "typeArguments": null,
                            "arguments": [
                              {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "value",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 967,
                                "end": 972
                              }
                            ],
                            "optional": false,
                            "start": 960,
                            "end": 973
                          },
                          "definite": false,
                          "start": 956,
                          "end": 973
                        }
                      ],
                      "declare": false,
                      "start": 950,
                      "end": 974
                    },
                    {
                      "type": "ExpressionStatement",
                      "expression": {
                        "type": "YieldExpression",
                        "delegate": true,
                        "argument": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 984,
                          "end": 985
                        },
                        "start": 977,
                        "end": 985
                      },
                      "directive": null,
                      "start": 977,
                      "end": 986
                    }
                  ],
                  "start": 946,
                  "end": 988
                },
                "expression": false,
                "start": 922,
                "end": 988
              }
            ],
            "optional": false,
            "start": 915,
            "end": 989
          },
          "definite": false,
          "start": 905,
          "end": 989
        }
      ],
      "declare": false,
      "start": 899,
      "end": 990
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "outer3",
        "optional": false,
        "typeAnnotation": null,
        "start": 1009,
        "end": 1015
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
              "start": 1016,
              "end": 1017
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 1016,
            "end": 1017
          }
        ],
        "start": 1015,
        "end": 1018
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
                        "name": "A",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1036,
                        "end": 1037
                      },
                      "typeArguments": null,
                      "start": 1036,
                      "end": 1037
                    },
                    "start": 1034,
                    "end": 1037
                  },
                  "start": 1029,
                  "end": 1037
                }
              ],
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
                    "start": 1042,
                    "end": 1051
                  },
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "params": [
                      {
                        "type": "TSNeverKeyword",
                        "start": 1052,
                        "end": 1057
                      },
                      {
                        "type": "TSUnknownKeyword",
                        "start": 1059,
                        "end": 1066
                      },
                      {
                        "type": "TSUnknownKeyword",
                        "start": 1068,
                        "end": 1075
                      }
                    ],
                    "start": 1051,
                    "end": 1076
                  },
                  "start": 1042,
                  "end": 1076
                },
                "start": 1039,
                "end": 1076
              },
              "start": 1028,
              "end": 1076
            },
            "start": 1026,
            "end": 1076
          },
          "start": 1022,
          "end": 1076
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSVoidKeyword",
          "start": 1081,
          "end": 1085
        },
        "start": 1079,
        "end": 1085
      },
      "body": null,
      "expression": false,
      "start": 992,
      "end": 1086
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "outer3",
          "optional": false,
          "typeAnnotation": null,
          "start": 1097,
          "end": 1103
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "FunctionExpression",
            "id": null,
            "generator": true,
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
                    "start": 1115,
                    "end": 1116
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 1115,
                  "end": 1116
                }
              ],
              "start": 1114,
              "end": 1117
            },
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
                      "start": 1125,
                      "end": 1126
                    },
                    "typeArguments": null,
                    "start": 1125,
                    "end": 1126
                  },
                  "start": 1123,
                  "end": 1126
                },
                "start": 1118,
                "end": 1126
              }
            ],
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
                        "name": "inner3",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1139,
                        "end": 1145
                      },
                      "typeArguments": null,
                      "arguments": [
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "value",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1146,
                          "end": 1151
                        }
                      ],
                      "optional": false,
                      "start": 1139,
                      "end": 1152
                    },
                    "start": 1132,
                    "end": 1152
                  },
                  "directive": null,
                  "start": 1132,
                  "end": 1153
                }
              ],
              "start": 1128,
              "end": 1155
            },
            "expression": false,
            "start": 1104,
            "end": 1155
          }
        ],
        "optional": false,
        "start": 1097,
        "end": 1156
      },
      "directive": null,
      "start": 1097,
      "end": 1157
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "outer3",
          "optional": false,
          "typeAnnotation": null,
          "start": 1168,
          "end": 1174
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "FunctionExpression",
            "id": null,
            "generator": true,
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
                    "start": 1186,
                    "end": 1187
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 1186,
                  "end": 1187
                }
              ],
              "start": 1185,
              "end": 1188
            },
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
                      "start": 1196,
                      "end": 1197
                    },
                    "typeArguments": null,
                    "start": 1196,
                    "end": 1197
                  },
                  "start": 1194,
                  "end": 1197
                },
                "start": 1189,
                "end": 1197
              }
            ],
            "returnType": null,
            "body": {
              "type": "BlockStatement",
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
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1209,
                        "end": 1210
                      },
                      "init": {
                        "type": "CallExpression",
                        "callee": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "inner3",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1213,
                          "end": 1219
                        },
                        "typeArguments": null,
                        "arguments": [
                          {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "value",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1220,
                            "end": 1225
                          }
                        ],
                        "optional": false,
                        "start": 1213,
                        "end": 1226
                      },
                      "definite": false,
                      "start": 1209,
                      "end": 1226
                    }
                  ],
                  "declare": false,
                  "start": 1203,
                  "end": 1227
                },
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "YieldExpression",
                    "delegate": true,
                    "argument": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1237,
                      "end": 1238
                    },
                    "start": 1230,
                    "end": 1238
                  },
                  "directive": null,
                  "start": 1230,
                  "end": 1239
                }
              ],
              "start": 1199,
              "end": 1241
            },
            "expression": false,
            "start": 1175,
            "end": 1241
          }
        ],
        "optional": false,
        "start": 1168,
        "end": 1242
      },
      "directive": null,
      "start": 1168,
      "end": 1243
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 1243
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
    "type": "Keyword",
    "value": "const",
    "start": 8,
    "end": 13
  },
  {
    "type": "Identifier",
    "value": "inner",
    "start": 14,
    "end": 19
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 19,
    "end": 20
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 21,
    "end": 22
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 25,
    "end": 26
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 26,
    "end": 27
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 27,
    "end": 28
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 28,
    "end": 29
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 29,
    "end": 34
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 34,
    "end": 35
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 36,
    "end": 37
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 37,
    "end": 38
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 38,
    "end": 39
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 40,
    "end": 41
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 46,
    "end": 47
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 47,
    "end": 48
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 48,
    "end": 49
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 50,
    "end": 51
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 51,
    "end": 52
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 57,
    "end": 58
  },
  {
    "type": "Identifier",
    "value": "Symbol",
    "start": 58,
    "end": 64
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 64,
    "end": 65
  },
  {
    "type": "Identifier",
    "value": "iterator",
    "start": 65,
    "end": 73
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 73,
    "end": 74
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 74,
    "end": 75
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 75,
    "end": 76
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 76,
    "end": 77
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 78,
    "end": 79
  },
  {
    "type": "Identifier",
    "value": "next",
    "start": 86,
    "end": 90
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 90,
    "end": 91
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 91,
    "end": 94
  },
  {
    "type": "Identifier",
    "value": "args",
    "start": 94,
    "end": 98
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 98,
    "end": 99
  },
  {
    "type": "Identifier",
    "value": "ReadonlyArray",
    "start": 100,
    "end": 113
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 113,
    "end": 114
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 114,
    "end": 117
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 117,
    "end": 118
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 118,
    "end": 119
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 119,
    "end": 120
  },
  {
    "type": "Identifier",
    "value": "IteratorResult",
    "start": 121,
    "end": 135
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 135,
    "end": 136
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 136,
    "end": 139
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 139,
    "end": 140
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 141,
    "end": 142
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 142,
    "end": 143
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 143,
    "end": 144
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 149,
    "end": 150
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 150,
    "end": 151
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 154,
    "end": 155
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 155,
    "end": 156
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 157,
    "end": 158
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 158,
    "end": 159
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 161,
    "end": 168
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 169,
    "end": 177
  },
  {
    "type": "Identifier",
    "value": "outer",
    "start": 178,
    "end": 183
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 183,
    "end": 184
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 184,
    "end": 185
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 185,
    "end": 186
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 186,
    "end": 187
  },
  {
    "type": "Identifier",
    "value": "body",
    "start": 187,
    "end": 191
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 191,
    "end": 192
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 193,
    "end": 194
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 194,
    "end": 199
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 199,
    "end": 200
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 201,
    "end": 202
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 202,
    "end": 203
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 204,
    "end": 206
  },
  {
    "type": "Identifier",
    "value": "Generator",
    "start": 207,
    "end": 216
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 216,
    "end": 217
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
    "value": ",",
    "start": 225,
    "end": 226
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 227,
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
    "value": ")",
    "start": 231,
    "end": 232
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 232,
    "end": 233
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 234,
    "end": 238
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 238,
    "end": 239
  },
  {
    "type": "Identifier",
    "value": "outer",
    "start": 241,
    "end": 246
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 246,
    "end": 247
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 247,
    "end": 255
  },
  {
    "type": "Punctuator",
    "value": "*",
    "start": 255,
    "end": 256
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 257,
    "end": 258
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 258,
    "end": 259
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 259,
    "end": 260
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
    "value": "{",
    "start": 271,
    "end": 272
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 275,
    "end": 280
  },
  {
    "type": "Identifier",
    "value": "result",
    "start": 281,
    "end": 287
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 288,
    "end": 289
  },
  {
    "type": "Keyword",
    "value": "yield",
    "start": 290,
    "end": 295
  },
  {
    "type": "Punctuator",
    "value": "*",
    "start": 295,
    "end": 296
  },
  {
    "type": "Identifier",
    "value": "inner",
    "start": 297,
    "end": 302
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 302,
    "end": 303
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 303,
    "end": 308
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 308,
    "end": 309
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 309,
    "end": 310
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 317,
    "end": 318
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 318,
    "end": 319
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 319,
    "end": 320
  },
  {
    "type": "Identifier",
    "value": "outer",
    "start": 322,
    "end": 327
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 327,
    "end": 328
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 328,
    "end": 336
  },
  {
    "type": "Punctuator",
    "value": "*",
    "start": 336,
    "end": 337
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 338,
    "end": 339
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 339,
    "end": 340
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 340,
    "end": 341
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 341,
    "end": 342
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 342,
    "end": 347
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 347,
    "end": 348
  },
  {
    "type": "Identifier",
    "value": "T",
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
    "value": "{",
    "start": 352,
    "end": 353
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 356,
    "end": 361
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 362,
    "end": 363
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 364,
    "end": 365
  },
  {
    "type": "Identifier",
    "value": "inner",
    "start": 366,
    "end": 371
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 371,
    "end": 372
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 372,
    "end": 377
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 377,
    "end": 378
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 378,
    "end": 379
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 382,
    "end": 387
  },
  {
    "type": "Identifier",
    "value": "result",
    "start": 388,
    "end": 394
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 395,
    "end": 396
  },
  {
    "type": "Keyword",
    "value": "yield",
    "start": 397,
    "end": 402
  },
  {
    "type": "Punctuator",
    "value": "*",
    "start": 402,
    "end": 403
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 404,
    "end": 405
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 405,
    "end": 406
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 413,
    "end": 414
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 414,
    "end": 415
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 415,
    "end": 416
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 418,
    "end": 425
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 426,
    "end": 431
  },
  {
    "type": "Identifier",
    "value": "inner2",
    "start": 432,
    "end": 438
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 438,
    "end": 439
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 440,
    "end": 441
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 444,
    "end": 445
  },
  {
    "type": "Identifier",
    "value": "A",
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
    "value": "(",
    "start": 447,
    "end": 448
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 448,
    "end": 453
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 453,
    "end": 454
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 455,
    "end": 456
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 456,
    "end": 457
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 457,
    "end": 458
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 459,
    "end": 460
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 460,
    "end": 461
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 462,
    "end": 464
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 465,
    "end": 466
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 466,
    "end": 467
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 468,
    "end": 469
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 469,
    "end": 470
  },
  {
    "type": "Identifier",
    "value": "outer",
    "start": 472,
    "end": 477
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 477,
    "end": 478
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 478,
    "end": 486
  },
  {
    "type": "Punctuator",
    "value": "*",
    "start": 486,
    "end": 487
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 488,
    "end": 489
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 489,
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
    "value": "value",
    "start": 492,
    "end": 497
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 497,
    "end": 498
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 499,
    "end": 500
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 500,
    "end": 501
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 502,
    "end": 503
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 506,
    "end": 511
  },
  {
    "type": "Identifier",
    "value": "result",
    "start": 512,
    "end": 518
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 519,
    "end": 520
  },
  {
    "type": "Keyword",
    "value": "yield",
    "start": 521,
    "end": 526
  },
  {
    "type": "Punctuator",
    "value": "*",
    "start": 526,
    "end": 527
  },
  {
    "type": "Identifier",
    "value": "inner2",
    "start": 528,
    "end": 534
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 534,
    "end": 535
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 535,
    "end": 540
  },
  {
    "type": "Punctuator",
    "value": ")",
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
    "start": 552,
    "end": 553
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 553,
    "end": 554
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 554,
    "end": 555
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 557,
    "end": 564
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 565,
    "end": 570
  },
  {
    "type": "Identifier",
    "value": "inner3",
    "start": 571,
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
    "value": "{",
    "start": 579,
    "end": 580
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 583,
    "end": 584
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 584,
    "end": 585
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 585,
    "end": 586
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 586,
    "end": 587
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 587,
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
    "value": "A",
    "start": 594,
    "end": 595
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 595,
    "end": 596
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 596,
    "end": 597
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 598,
    "end": 599
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 604,
    "end": 605
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 605,
    "end": 606
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 606,
    "end": 607
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 608,
    "end": 609
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 609,
    "end": 610
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 615,
    "end": 616
  },
  {
    "type": "Identifier",
    "value": "Symbol",
    "start": 616,
    "end": 622
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 622,
    "end": 623
  },
  {
    "type": "Identifier",
    "value": "iterator",
    "start": 623,
    "end": 631
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 631,
    "end": 632
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 632,
    "end": 633
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 633,
    "end": 634
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 634,
    "end": 635
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 636,
    "end": 637
  },
  {
    "type": "Identifier",
    "value": "next",
    "start": 644,
    "end": 648
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 648,
    "end": 649
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 649,
    "end": 652
  },
  {
    "type": "Identifier",
    "value": "args",
    "start": 652,
    "end": 656
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 656,
    "end": 657
  },
  {
    "type": "Identifier",
    "value": "ReadonlyArray",
    "start": 658,
    "end": 671
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 671,
    "end": 672
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 672,
    "end": 675
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 675,
    "end": 676
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 676,
    "end": 677
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 677,
    "end": 678
  },
  {
    "type": "Identifier",
    "value": "IteratorResult",
    "start": 679,
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
    "value": "number",
    "start": 694,
    "end": 700
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 700,
    "end": 701
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 702,
    "end": 703
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 703,
    "end": 704
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 704,
    "end": 705
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 710,
    "end": 711
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 711,
    "end": 712
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 715,
    "end": 716
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 716,
    "end": 717
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 718,
    "end": 719
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 719,
    "end": 720
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 722,
    "end": 729
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 730,
    "end": 738
  },
  {
    "type": "Identifier",
    "value": "outer2",
    "start": 739,
    "end": 745
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 745,
    "end": 746
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 746,
    "end": 747
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 747,
    "end": 748
  },
  {
    "type": "Identifier",
    "value": "Y",
    "start": 749,
    "end": 750
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 750,
    "end": 751
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 751,
    "end": 752
  },
  {
    "type": "Identifier",
    "value": "body",
    "start": 752,
    "end": 756
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 756,
    "end": 757
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 758,
    "end": 759
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 759,
    "end": 764
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 764,
    "end": 765
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 766,
    "end": 767
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
    "value": "Generator",
    "start": 772,
    "end": 781
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 781,
    "end": 782
  },
  {
    "type": "Identifier",
    "value": "Y",
    "start": 782,
    "end": 783
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 783,
    "end": 784
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 785,
    "end": 788
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 788,
    "end": 789
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 790,
    "end": 793
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 793,
    "end": 794
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 794,
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
    "value": "Y",
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
    "type": "Keyword",
    "value": "const",
    "start": 811,
    "end": 816
  },
  {
    "type": "Identifier",
    "value": "result1",
    "start": 817,
    "end": 824
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 825,
    "end": 826
  },
  {
    "type": "Identifier",
    "value": "outer2",
    "start": 827,
    "end": 833
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 833,
    "end": 834
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 834,
    "end": 842
  },
  {
    "type": "Punctuator",
    "value": "*",
    "start": 842,
    "end": 843
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 844,
    "end": 845
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 845,
    "end": 846
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 846,
    "end": 847
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 847,
    "end": 848
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 848,
    "end": 853
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 853,
    "end": 854
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 855,
    "end": 856
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 856,
    "end": 857
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 858,
    "end": 859
  },
  {
    "type": "Keyword",
    "value": "yield",
    "start": 862,
    "end": 867
  },
  {
    "type": "Punctuator",
    "value": "*",
    "start": 867,
    "end": 868
  },
  {
    "type": "Identifier",
    "value": "inner3",
    "start": 869,
    "end": 875
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 875,
    "end": 876
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 876,
    "end": 881
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
    "type": "Punctuator",
    "value": "}",
    "start": 884,
    "end": 885
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 885,
    "end": 886
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 886,
    "end": 887
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 899,
    "end": 904
  },
  {
    "type": "Identifier",
    "value": "result2",
    "start": 905,
    "end": 912
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 913,
    "end": 914
  },
  {
    "type": "Identifier",
    "value": "outer2",
    "start": 915,
    "end": 921
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 921,
    "end": 922
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 922,
    "end": 930
  },
  {
    "type": "Punctuator",
    "value": "*",
    "start": 930,
    "end": 931
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 932,
    "end": 933
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 933,
    "end": 934
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 934,
    "end": 935
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 935,
    "end": 936
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 936,
    "end": 941
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 941,
    "end": 942
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 943,
    "end": 944
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 944,
    "end": 945
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 946,
    "end": 947
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 950,
    "end": 955
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 956,
    "end": 957
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 958,
    "end": 959
  },
  {
    "type": "Identifier",
    "value": "inner3",
    "start": 960,
    "end": 966
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 966,
    "end": 967
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 967,
    "end": 972
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 972,
    "end": 973
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 973,
    "end": 974
  },
  {
    "type": "Keyword",
    "value": "yield",
    "start": 977,
    "end": 982
  },
  {
    "type": "Punctuator",
    "value": "*",
    "start": 982,
    "end": 983
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 984,
    "end": 985
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 985,
    "end": 986
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 987,
    "end": 988
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 988,
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
    "value": "declare",
    "start": 992,
    "end": 999
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1000,
    "end": 1008
  },
  {
    "type": "Identifier",
    "value": "outer3",
    "start": 1009,
    "end": 1015
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1015,
    "end": 1016
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 1016,
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
    "value": "(",
    "start": 1018,
    "end": 1019
  },
  {
    "type": "Identifier",
    "value": "body",
    "start": 1022,
    "end": 1026
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1026,
    "end": 1027
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1028,
    "end": 1029
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 1029,
    "end": 1034
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1034,
    "end": 1035
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 1036,
    "end": 1037
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1037,
    "end": 1038
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1039,
    "end": 1041
  },
  {
    "type": "Identifier",
    "value": "Generator",
    "start": 1042,
    "end": 1051
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1051,
    "end": 1052
  },
  {
    "type": "Identifier",
    "value": "never",
    "start": 1052,
    "end": 1057
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1057,
    "end": 1058
  },
  {
    "type": "Identifier",
    "value": "unknown",
    "start": 1059,
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
    "value": "unknown",
    "start": 1068,
    "end": 1075
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1075,
    "end": 1076
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1076,
    "end": 1077
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1078,
    "end": 1079
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1079,
    "end": 1080
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 1081,
    "end": 1085
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1085,
    "end": 1086
  },
  {
    "type": "Identifier",
    "value": "outer3",
    "start": 1097,
    "end": 1103
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1103,
    "end": 1104
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1104,
    "end": 1112
  },
  {
    "type": "Punctuator",
    "value": "*",
    "start": 1112,
    "end": 1113
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1114,
    "end": 1115
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1115,
    "end": 1116
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1116,
    "end": 1117
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1117,
    "end": 1118
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 1118,
    "end": 1123
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1123,
    "end": 1124
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1125,
    "end": 1126
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1126,
    "end": 1127
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1128,
    "end": 1129
  },
  {
    "type": "Keyword",
    "value": "yield",
    "start": 1132,
    "end": 1137
  },
  {
    "type": "Punctuator",
    "value": "*",
    "start": 1137,
    "end": 1138
  },
  {
    "type": "Identifier",
    "value": "inner3",
    "start": 1139,
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
    "value": "value",
    "start": 1146,
    "end": 1151
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1151,
    "end": 1152
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1152,
    "end": 1153
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1154,
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
    "value": ";",
    "start": 1156,
    "end": 1157
  },
  {
    "type": "Identifier",
    "value": "outer3",
    "start": 1168,
    "end": 1174
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1174,
    "end": 1175
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1175,
    "end": 1183
  },
  {
    "type": "Punctuator",
    "value": "*",
    "start": 1183,
    "end": 1184
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1185,
    "end": 1186
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1186,
    "end": 1187
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1187,
    "end": 1188
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1188,
    "end": 1189
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 1189,
    "end": 1194
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1194,
    "end": 1195
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1196,
    "end": 1197
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1197,
    "end": 1198
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1199,
    "end": 1200
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 1203,
    "end": 1208
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1209,
    "end": 1210
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1211,
    "end": 1212
  },
  {
    "type": "Identifier",
    "value": "inner3",
    "start": 1213,
    "end": 1219
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1219,
    "end": 1220
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 1220,
    "end": 1225
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1225,
    "end": 1226
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1226,
    "end": 1227
  },
  {
    "type": "Keyword",
    "value": "yield",
    "start": 1230,
    "end": 1235
  },
  {
    "type": "Punctuator",
    "value": "*",
    "start": 1235,
    "end": 1236
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1237,
    "end": 1238
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1238,
    "end": 1239
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1240,
    "end": 1241
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1241,
    "end": 1242
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1242,
    "end": 1243
  }
]
```
