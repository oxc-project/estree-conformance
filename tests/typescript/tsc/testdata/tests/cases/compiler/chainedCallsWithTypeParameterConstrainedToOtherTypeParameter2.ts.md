__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Chain",
        "optional": false,
        "typeAnnotation": null,
        "start": 6,
        "end": 11
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
              "start": 12,
              "end": 13
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 12,
            "end": 13
          }
        ],
        "start": 11,
        "end": 14
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
              "name": "constructor",
              "optional": false,
              "typeAnnotation": null,
              "start": 21,
              "end": 32
            },
            "value": {
              "type": "FunctionExpression",
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "TSParameterProperty",
                  "accessibility": "public",
                  "decorators": [],
                  "override": false,
                  "parameter": {
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
                          "start": 47,
                          "end": 48
                        },
                        "typeArguments": null,
                        "start": 47,
                        "end": 48
                      },
                      "start": 45,
                      "end": 48
                    },
                    "start": 40,
                    "end": 48
                  },
                  "readonly": false,
                  "static": false,
                  "start": 33,
                  "end": 48
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [],
                "start": 50,
                "end": 53
              },
              "expression": false,
              "start": 32,
              "end": 53
            },
            "kind": "constructor",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 21,
            "end": 53
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "then",
              "optional": false,
              "typeAnnotation": null,
              "start": 58,
              "end": 62
            },
            "value": {
              "type": "FunctionExpression",
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
                      "name": "S",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 63,
                      "end": 64
                    },
                    "constraint": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "T",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 73,
                        "end": 74
                      },
                      "typeArguments": null,
                      "start": 73,
                      "end": 74
                    },
                    "default": null,
                    "in": false,
                    "out": false,
                    "const": false,
                    "start": 63,
                    "end": 74
                  }
                ],
                "start": 62,
                "end": 75
              },
              "params": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "cb",
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
                          "name": "x",
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
                                "start": 84,
                                "end": 85
                              },
                              "typeArguments": null,
                              "start": 84,
                              "end": 85
                            },
                            "start": 82,
                            "end": 85
                          },
                          "start": 81,
                          "end": 85
                        }
                      ],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "S",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 90,
                            "end": 91
                          },
                          "typeArguments": null,
                          "start": 90,
                          "end": 91
                        },
                        "start": 87,
                        "end": 91
                      },
                      "start": 80,
                      "end": 91
                    },
                    "start": 78,
                    "end": 91
                  },
                  "start": 76,
                  "end": 91
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Chain",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 94,
                    "end": 99
                  },
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "params": [
                      {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "S",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 100,
                          "end": 101
                        },
                        "typeArguments": null,
                        "start": 100,
                        "end": 101
                      }
                    ],
                    "start": 99,
                    "end": 102
                  },
                  "start": 94,
                  "end": 102
                },
                "start": 92,
                "end": 102
              },
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
                          "name": "t",
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
                                "start": 121,
                                "end": 122
                              },
                              "typeArguments": null,
                              "start": 121,
                              "end": 122
                            },
                            "start": 119,
                            "end": 122
                          },
                          "start": 117,
                          "end": 122
                        },
                        "init": null,
                        "definite": true,
                        "start": 117,
                        "end": 122
                      }
                    ],
                    "declare": false,
                    "start": 113,
                    "end": 123
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
                          "name": "s",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "S",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 140,
                                "end": 141
                              },
                              "typeArguments": null,
                              "start": 140,
                              "end": 141
                            },
                            "start": 138,
                            "end": 141
                          },
                          "start": 136,
                          "end": 141
                        },
                        "init": null,
                        "definite": true,
                        "start": 136,
                        "end": 141
                      }
                    ],
                    "declare": false,
                    "start": 132,
                    "end": 142
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
                              "type": "NewExpression",
                              "callee": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "Chain",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 224,
                                "end": 229
                              },
                              "typeArguments": null,
                              "arguments": [
                                {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "t",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 230,
                                  "end": 231
                                }
                              ],
                              "start": 220,
                              "end": 232
                            },
                            "property": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "then",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 234,
                              "end": 238
                            },
                            "optional": false,
                            "computed": false,
                            "start": 219,
                            "end": 238
                          },
                          "typeArguments": null,
                          "arguments": [
                            {
                              "type": "ArrowFunctionExpression",
                              "expression": true,
                              "async": false,
                              "typeParameters": null,
                              "params": [
                                {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "tt",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 239,
                                  "end": 241
                                }
                              ],
                              "returnType": null,
                              "body": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "s",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 245,
                                "end": 246
                              },
                              "id": null,
                              "generator": false,
                              "start": 239,
                              "end": 246
                            }
                          ],
                          "optional": false,
                          "start": 219,
                          "end": 247
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "then",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 248,
                          "end": 252
                        },
                        "optional": false,
                        "computed": false,
                        "start": 219,
                        "end": 252
                      },
                      "typeArguments": null,
                      "arguments": [
                        {
                          "type": "ArrowFunctionExpression",
                          "expression": true,
                          "async": false,
                          "typeParameters": null,
                          "params": [
                            {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "ss",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 253,
                              "end": 255
                            }
                          ],
                          "returnType": null,
                          "body": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "t",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 259,
                            "end": 260
                          },
                          "id": null,
                          "generator": false,
                          "start": 253,
                          "end": 260
                        }
                      ],
                      "optional": false,
                      "start": 219,
                      "end": 261
                    },
                    "directive": null,
                    "start": 219,
                    "end": 262
                  },
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "CallExpression",
                      "callee": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "NewExpression",
                          "callee": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "Chain",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 327,
                            "end": 332
                          },
                          "typeArguments": null,
                          "arguments": [
                            {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "s",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 333,
                              "end": 334
                            }
                          ],
                          "start": 323,
                          "end": 335
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "then",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 337,
                          "end": 341
                        },
                        "optional": false,
                        "computed": false,
                        "start": 322,
                        "end": 341
                      },
                      "typeArguments": null,
                      "arguments": [
                        {
                          "type": "ArrowFunctionExpression",
                          "expression": true,
                          "async": false,
                          "typeParameters": null,
                          "params": [
                            {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "ss",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 342,
                              "end": 344
                            }
                          ],
                          "returnType": null,
                          "body": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "t",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 348,
                            "end": 349
                          },
                          "id": null,
                          "generator": false,
                          "start": 342,
                          "end": 349
                        }
                      ],
                      "optional": false,
                      "start": 322,
                      "end": 350
                    },
                    "directive": null,
                    "start": 322,
                    "end": 351
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
                              "type": "CallExpression",
                              "callee": {
                                "type": "MemberExpression",
                                "object": {
                                  "type": "NewExpression",
                                  "callee": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "Chain",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 410,
                                    "end": 415
                                  },
                                  "typeArguments": null,
                                  "arguments": [
                                    {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "t",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 416,
                                      "end": 417
                                    }
                                  ],
                                  "start": 406,
                                  "end": 418
                                },
                                "property": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "then",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 420,
                                  "end": 424
                                },
                                "optional": false,
                                "computed": false,
                                "start": 405,
                                "end": 424
                              },
                              "typeArguments": null,
                              "arguments": [
                                {
                                  "type": "ArrowFunctionExpression",
                                  "expression": true,
                                  "async": false,
                                  "typeParameters": null,
                                  "params": [
                                    {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "tt",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 425,
                                      "end": 427
                                    }
                                  ],
                                  "returnType": null,
                                  "body": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "t",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 431,
                                    "end": 432
                                  },
                                  "id": null,
                                  "generator": false,
                                  "start": 425,
                                  "end": 432
                                }
                              ],
                              "optional": false,
                              "start": 405,
                              "end": 433
                            },
                            "property": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "then",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 434,
                              "end": 438
                            },
                            "optional": false,
                            "computed": false,
                            "start": 405,
                            "end": 438
                          },
                          "typeArguments": null,
                          "arguments": [
                            {
                              "type": "ArrowFunctionExpression",
                              "expression": true,
                              "async": false,
                              "typeParameters": null,
                              "params": [
                                {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "tt",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 439,
                                  "end": 441
                                }
                              ],
                              "returnType": null,
                              "body": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "t",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 445,
                                "end": 446
                              },
                              "id": null,
                              "generator": false,
                              "start": 439,
                              "end": 446
                            }
                          ],
                          "optional": false,
                          "start": 405,
                          "end": 447
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "then",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 448,
                          "end": 452
                        },
                        "optional": false,
                        "computed": false,
                        "start": 405,
                        "end": 452
                      },
                      "typeArguments": null,
                      "arguments": [
                        {
                          "type": "ArrowFunctionExpression",
                          "expression": true,
                          "async": false,
                          "typeParameters": null,
                          "params": [
                            {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "tt",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 453,
                              "end": 455
                            }
                          ],
                          "returnType": null,
                          "body": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "t",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 459,
                            "end": 460
                          },
                          "id": null,
                          "generator": false,
                          "start": 453,
                          "end": 460
                        }
                      ],
                      "optional": false,
                      "start": 405,
                      "end": 461
                    },
                    "directive": null,
                    "start": 405,
                    "end": 462
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
                              "type": "CallExpression",
                              "callee": {
                                "type": "MemberExpression",
                                "object": {
                                  "type": "NewExpression",
                                  "callee": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "Chain",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 476,
                                    "end": 481
                                  },
                                  "typeArguments": null,
                                  "arguments": [
                                    {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "s",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 482,
                                      "end": 483
                                    }
                                  ],
                                  "start": 472,
                                  "end": 484
                                },
                                "property": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "then",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 486,
                                  "end": 490
                                },
                                "optional": false,
                                "computed": false,
                                "start": 471,
                                "end": 490
                              },
                              "typeArguments": null,
                              "arguments": [
                                {
                                  "type": "ArrowFunctionExpression",
                                  "expression": true,
                                  "async": false,
                                  "typeParameters": null,
                                  "params": [
                                    {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "ss",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 491,
                                      "end": 493
                                    }
                                  ],
                                  "returnType": null,
                                  "body": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "s",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 497,
                                    "end": 498
                                  },
                                  "id": null,
                                  "generator": false,
                                  "start": 491,
                                  "end": 498
                                }
                              ],
                              "optional": false,
                              "start": 471,
                              "end": 499
                            },
                            "property": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "then",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 500,
                              "end": 504
                            },
                            "optional": false,
                            "computed": false,
                            "start": 471,
                            "end": 504
                          },
                          "typeArguments": null,
                          "arguments": [
                            {
                              "type": "ArrowFunctionExpression",
                              "expression": true,
                              "async": false,
                              "typeParameters": null,
                              "params": [
                                {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "ss",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 505,
                                  "end": 507
                                }
                              ],
                              "returnType": null,
                              "body": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "s",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 511,
                                "end": 512
                              },
                              "id": null,
                              "generator": false,
                              "start": 505,
                              "end": 512
                            }
                          ],
                          "optional": false,
                          "start": 471,
                          "end": 513
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "then",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 514,
                          "end": 518
                        },
                        "optional": false,
                        "computed": false,
                        "start": 471,
                        "end": 518
                      },
                      "typeArguments": null,
                      "arguments": [
                        {
                          "type": "ArrowFunctionExpression",
                          "expression": true,
                          "async": false,
                          "typeParameters": null,
                          "params": [
                            {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "ss",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 519,
                              "end": 521
                            }
                          ],
                          "returnType": null,
                          "body": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "s",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 525,
                            "end": 526
                          },
                          "id": null,
                          "generator": false,
                          "start": 519,
                          "end": 526
                        }
                      ],
                      "optional": false,
                      "start": 471,
                      "end": 527
                    },
                    "directive": null,
                    "start": 471,
                    "end": 528
                  },
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "Literal",
                      "value": null,
                      "raw": "null",
                      "start": 545,
                      "end": 549
                    },
                    "start": 538,
                    "end": 550
                  }
                ],
                "start": 103,
                "end": 556
              },
              "expression": false,
              "start": 62,
              "end": 556
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 58,
            "end": 556
          }
        ],
        "start": 15,
        "end": 558
      },
      "abstract": false,
      "declare": false,
      "start": 0,
      "end": 558
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "I",
        "optional": false,
        "typeAnnotation": null,
        "start": 677,
        "end": 678
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
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 685,
              "end": 686
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 688,
                "end": 694
              },
              "start": 686,
              "end": 694
            },
            "accessibility": null,
            "static": false,
            "start": 685,
            "end": 695
          }
        ],
        "start": 679,
        "end": 697
      },
      "declare": false,
      "start": 667,
      "end": 697
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Chain2",
        "optional": false,
        "typeAnnotation": null,
        "start": 704,
        "end": 710
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
              "start": 711,
              "end": 712
            },
            "constraint": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "I",
                "optional": false,
                "typeAnnotation": null,
                "start": 721,
                "end": 722
              },
              "typeArguments": null,
              "start": 721,
              "end": 722
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 711,
            "end": 722
          }
        ],
        "start": 710,
        "end": 723
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
              "name": "constructor",
              "optional": false,
              "typeAnnotation": null,
              "start": 730,
              "end": 741
            },
            "value": {
              "type": "FunctionExpression",
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "TSParameterProperty",
                  "accessibility": "public",
                  "decorators": [],
                  "override": false,
                  "parameter": {
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
                          "start": 756,
                          "end": 757
                        },
                        "typeArguments": null,
                        "start": 756,
                        "end": 757
                      },
                      "start": 754,
                      "end": 757
                    },
                    "start": 749,
                    "end": 757
                  },
                  "readonly": false,
                  "static": false,
                  "start": 742,
                  "end": 757
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [],
                "start": 759,
                "end": 762
              },
              "expression": false,
              "start": 741,
              "end": 762
            },
            "kind": "constructor",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 730,
            "end": 762
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "then",
              "optional": false,
              "typeAnnotation": null,
              "start": 767,
              "end": 771
            },
            "value": {
              "type": "FunctionExpression",
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
                      "name": "S",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 772,
                      "end": 773
                    },
                    "constraint": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "T",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 782,
                        "end": 783
                      },
                      "typeArguments": null,
                      "start": 782,
                      "end": 783
                    },
                    "default": null,
                    "in": false,
                    "out": false,
                    "const": false,
                    "start": 772,
                    "end": 783
                  }
                ],
                "start": 771,
                "end": 784
              },
              "params": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "cb",
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
                          "name": "x",
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
                                "start": 793,
                                "end": 794
                              },
                              "typeArguments": null,
                              "start": 793,
                              "end": 794
                            },
                            "start": 791,
                            "end": 794
                          },
                          "start": 790,
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
                            "name": "S",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 799,
                            "end": 800
                          },
                          "typeArguments": null,
                          "start": 799,
                          "end": 800
                        },
                        "start": 796,
                        "end": 800
                      },
                      "start": 789,
                      "end": 800
                    },
                    "start": 787,
                    "end": 800
                  },
                  "start": 785,
                  "end": 800
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Chain2",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 803,
                    "end": 809
                  },
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "params": [
                      {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "S",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 810,
                          "end": 811
                        },
                        "typeArguments": null,
                        "start": 810,
                        "end": 811
                      }
                    ],
                    "start": 809,
                    "end": 812
                  },
                  "start": 803,
                  "end": 812
                },
                "start": 801,
                "end": 812
              },
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
                          "name": "i",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "I",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 831,
                                "end": 832
                              },
                              "typeArguments": null,
                              "start": 831,
                              "end": 832
                            },
                            "start": 829,
                            "end": 832
                          },
                          "start": 827,
                          "end": 832
                        },
                        "init": null,
                        "definite": true,
                        "start": 827,
                        "end": 832
                      }
                    ],
                    "declare": false,
                    "start": 823,
                    "end": 833
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
                          "name": "t",
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
                                "start": 850,
                                "end": 851
                              },
                              "typeArguments": null,
                              "start": 850,
                              "end": 851
                            },
                            "start": 848,
                            "end": 851
                          },
                          "start": 846,
                          "end": 851
                        },
                        "init": null,
                        "definite": true,
                        "start": 846,
                        "end": 851
                      }
                    ],
                    "declare": false,
                    "start": 842,
                    "end": 852
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
                          "name": "s",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "S",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 869,
                                "end": 870
                              },
                              "typeArguments": null,
                              "start": 869,
                              "end": 870
                            },
                            "start": 867,
                            "end": 870
                          },
                          "start": 865,
                          "end": 870
                        },
                        "init": null,
                        "definite": true,
                        "start": 865,
                        "end": 870
                      }
                    ],
                    "declare": false,
                    "start": 861,
                    "end": 871
                  },
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "AssignmentExpression",
                      "operator": "=",
                      "left": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "MemberExpression",
                          "object": {
                            "type": "CallExpression",
                            "callee": {
                              "type": "MemberExpression",
                              "object": {
                                "type": "CallExpression",
                                "callee": {
                                  "type": "MemberExpression",
                                  "object": {
                                    "type": "NewExpression",
                                    "callee": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "Chain2",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 1028,
                                      "end": 1034
                                    },
                                    "typeArguments": null,
                                    "arguments": [
                                      {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "i",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 1035,
                                        "end": 1036
                                      }
                                    ],
                                    "start": 1024,
                                    "end": 1037
                                  },
                                  "property": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "then",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 1039,
                                    "end": 1043
                                  },
                                  "optional": false,
                                  "computed": false,
                                  "start": 1023,
                                  "end": 1043
                                },
                                "typeArguments": null,
                                "arguments": [
                                  {
                                    "type": "ArrowFunctionExpression",
                                    "expression": true,
                                    "async": false,
                                    "typeParameters": null,
                                    "params": [
                                      {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "ii",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 1044,
                                        "end": 1046
                                      }
                                    ],
                                    "returnType": null,
                                    "body": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "t",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 1050,
                                      "end": 1051
                                    },
                                    "id": null,
                                    "generator": false,
                                    "start": 1044,
                                    "end": 1051
                                  }
                                ],
                                "optional": false,
                                "start": 1023,
                                "end": 1052
                              },
                              "property": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "then",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 1053,
                                "end": 1057
                              },
                              "optional": false,
                              "computed": false,
                              "start": 1023,
                              "end": 1057
                            },
                            "typeArguments": null,
                            "arguments": [
                              {
                                "type": "ArrowFunctionExpression",
                                "expression": true,
                                "async": false,
                                "typeParameters": null,
                                "params": [
                                  {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "tt",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 1058,
                                    "end": 1060
                                  }
                                ],
                                "returnType": null,
                                "body": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "s",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 1064,
                                  "end": 1065
                                },
                                "id": null,
                                "generator": false,
                                "start": 1058,
                                "end": 1065
                              }
                            ],
                            "optional": false,
                            "start": 1023,
                            "end": 1066
                          },
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "value",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1067,
                            "end": 1072
                          },
                          "optional": false,
                          "computed": false,
                          "start": 1023,
                          "end": 1072
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1073,
                          "end": 1074
                        },
                        "optional": false,
                        "computed": false,
                        "start": 1023,
                        "end": 1074
                      },
                      "right": {
                        "type": "Literal",
                        "value": "",
                        "raw": "\"\"",
                        "start": 1077,
                        "end": 1079
                      },
                      "start": 1023,
                      "end": 1079
                    },
                    "directive": null,
                    "start": 1023,
                    "end": 1080
                  },
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "AssignmentExpression",
                      "operator": "=",
                      "left": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "MemberExpression",
                          "object": {
                            "type": "CallExpression",
                            "callee": {
                              "type": "MemberExpression",
                              "object": {
                                "type": "CallExpression",
                                "callee": {
                                  "type": "MemberExpression",
                                  "object": {
                                    "type": "CallExpression",
                                    "callee": {
                                      "type": "MemberExpression",
                                      "object": {
                                        "type": "CallExpression",
                                        "callee": {
                                          "type": "MemberExpression",
                                          "object": {
                                            "type": "NewExpression",
                                            "callee": {
                                              "type": "Identifier",
                                              "decorators": [],
                                              "name": "Chain2",
                                              "optional": false,
                                              "typeAnnotation": null,
                                              "start": 1226,
                                              "end": 1232
                                            },
                                            "typeArguments": null,
                                            "arguments": [
                                              {
                                                "type": "Identifier",
                                                "decorators": [],
                                                "name": "i",
                                                "optional": false,
                                                "typeAnnotation": null,
                                                "start": 1233,
                                                "end": 1234
                                              }
                                            ],
                                            "start": 1222,
                                            "end": 1235
                                          },
                                          "property": {
                                            "type": "Identifier",
                                            "decorators": [],
                                            "name": "then",
                                            "optional": false,
                                            "typeAnnotation": null,
                                            "start": 1237,
                                            "end": 1241
                                          },
                                          "optional": false,
                                          "computed": false,
                                          "start": 1221,
                                          "end": 1241
                                        },
                                        "typeArguments": null,
                                        "arguments": [
                                          {
                                            "type": "ArrowFunctionExpression",
                                            "expression": true,
                                            "async": false,
                                            "typeParameters": null,
                                            "params": [
                                              {
                                                "type": "Identifier",
                                                "decorators": [],
                                                "name": "ii",
                                                "optional": false,
                                                "typeAnnotation": null,
                                                "start": 1242,
                                                "end": 1244
                                              }
                                            ],
                                            "returnType": null,
                                            "body": {
                                              "type": "Identifier",
                                              "decorators": [],
                                              "name": "t",
                                              "optional": false,
                                              "typeAnnotation": null,
                                              "start": 1248,
                                              "end": 1249
                                            },
                                            "id": null,
                                            "generator": false,
                                            "start": 1242,
                                            "end": 1249
                                          }
                                        ],
                                        "optional": false,
                                        "start": 1221,
                                        "end": 1250
                                      },
                                      "property": {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "then",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 1251,
                                        "end": 1255
                                      },
                                      "optional": false,
                                      "computed": false,
                                      "start": 1221,
                                      "end": 1255
                                    },
                                    "typeArguments": null,
                                    "arguments": [
                                      {
                                        "type": "ArrowFunctionExpression",
                                        "expression": true,
                                        "async": false,
                                        "typeParameters": null,
                                        "params": [
                                          {
                                            "type": "Identifier",
                                            "decorators": [],
                                            "name": "tt",
                                            "optional": false,
                                            "typeAnnotation": null,
                                            "start": 1256,
                                            "end": 1258
                                          }
                                        ],
                                        "returnType": null,
                                        "body": {
                                          "type": "Identifier",
                                          "decorators": [],
                                          "name": "t",
                                          "optional": false,
                                          "typeAnnotation": null,
                                          "start": 1262,
                                          "end": 1263
                                        },
                                        "id": null,
                                        "generator": false,
                                        "start": 1256,
                                        "end": 1263
                                      }
                                    ],
                                    "optional": false,
                                    "start": 1221,
                                    "end": 1264
                                  },
                                  "property": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "then",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 1265,
                                    "end": 1269
                                  },
                                  "optional": false,
                                  "computed": false,
                                  "start": 1221,
                                  "end": 1269
                                },
                                "typeArguments": null,
                                "arguments": [
                                  {
                                    "type": "ArrowFunctionExpression",
                                    "expression": true,
                                    "async": false,
                                    "typeParameters": null,
                                    "params": [
                                      {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "tt",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 1270,
                                        "end": 1272
                                      }
                                    ],
                                    "returnType": null,
                                    "body": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "t",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 1276,
                                      "end": 1277
                                    },
                                    "id": null,
                                    "generator": false,
                                    "start": 1270,
                                    "end": 1277
                                  }
                                ],
                                "optional": false,
                                "start": 1221,
                                "end": 1278
                              },
                              "property": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "then",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 1279,
                                "end": 1283
                              },
                              "optional": false,
                              "computed": false,
                              "start": 1221,
                              "end": 1283
                            },
                            "typeArguments": null,
                            "arguments": [
                              {
                                "type": "ArrowFunctionExpression",
                                "expression": true,
                                "async": false,
                                "typeParameters": null,
                                "params": [
                                  {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "tt",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 1284,
                                    "end": 1286
                                  }
                                ],
                                "returnType": null,
                                "body": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "t",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 1290,
                                  "end": 1291
                                },
                                "id": null,
                                "generator": false,
                                "start": 1284,
                                "end": 1291
                              }
                            ],
                            "optional": false,
                            "start": 1221,
                            "end": 1292
                          },
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "value",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1293,
                            "end": 1298
                          },
                          "optional": false,
                          "computed": false,
                          "start": 1221,
                          "end": 1298
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1299,
                          "end": 1300
                        },
                        "optional": false,
                        "computed": false,
                        "start": 1221,
                        "end": 1300
                      },
                      "right": {
                        "type": "Literal",
                        "value": "",
                        "raw": "\"\"",
                        "start": 1303,
                        "end": 1305
                      },
                      "start": 1221,
                      "end": 1305
                    },
                    "directive": null,
                    "start": 1221,
                    "end": 1306
                  },
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "AssignmentExpression",
                      "operator": "=",
                      "left": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "MemberExpression",
                          "object": {
                            "type": "CallExpression",
                            "callee": {
                              "type": "MemberExpression",
                              "object": {
                                "type": "CallExpression",
                                "callee": {
                                  "type": "MemberExpression",
                                  "object": {
                                    "type": "CallExpression",
                                    "callee": {
                                      "type": "MemberExpression",
                                      "object": {
                                        "type": "CallExpression",
                                        "callee": {
                                          "type": "MemberExpression",
                                          "object": {
                                            "type": "NewExpression",
                                            "callee": {
                                              "type": "Identifier",
                                              "decorators": [],
                                              "name": "Chain2",
                                              "optional": false,
                                              "typeAnnotation": null,
                                              "start": 1320,
                                              "end": 1326
                                            },
                                            "typeArguments": null,
                                            "arguments": [
                                              {
                                                "type": "Identifier",
                                                "decorators": [],
                                                "name": "i",
                                                "optional": false,
                                                "typeAnnotation": null,
                                                "start": 1327,
                                                "end": 1328
                                              }
                                            ],
                                            "start": 1316,
                                            "end": 1329
                                          },
                                          "property": {
                                            "type": "Identifier",
                                            "decorators": [],
                                            "name": "then",
                                            "optional": false,
                                            "typeAnnotation": null,
                                            "start": 1331,
                                            "end": 1335
                                          },
                                          "optional": false,
                                          "computed": false,
                                          "start": 1315,
                                          "end": 1335
                                        },
                                        "typeArguments": null,
                                        "arguments": [
                                          {
                                            "type": "ArrowFunctionExpression",
                                            "expression": true,
                                            "async": false,
                                            "typeParameters": null,
                                            "params": [
                                              {
                                                "type": "Identifier",
                                                "decorators": [],
                                                "name": "ii",
                                                "optional": false,
                                                "typeAnnotation": null,
                                                "start": 1336,
                                                "end": 1338
                                              }
                                            ],
                                            "returnType": null,
                                            "body": {
                                              "type": "Identifier",
                                              "decorators": [],
                                              "name": "s",
                                              "optional": false,
                                              "typeAnnotation": null,
                                              "start": 1342,
                                              "end": 1343
                                            },
                                            "id": null,
                                            "generator": false,
                                            "start": 1336,
                                            "end": 1343
                                          }
                                        ],
                                        "optional": false,
                                        "start": 1315,
                                        "end": 1344
                                      },
                                      "property": {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "then",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 1345,
                                        "end": 1349
                                      },
                                      "optional": false,
                                      "computed": false,
                                      "start": 1315,
                                      "end": 1349
                                    },
                                    "typeArguments": null,
                                    "arguments": [
                                      {
                                        "type": "ArrowFunctionExpression",
                                        "expression": true,
                                        "async": false,
                                        "typeParameters": null,
                                        "params": [
                                          {
                                            "type": "Identifier",
                                            "decorators": [],
                                            "name": "ss",
                                            "optional": false,
                                            "typeAnnotation": null,
                                            "start": 1350,
                                            "end": 1352
                                          }
                                        ],
                                        "returnType": null,
                                        "body": {
                                          "type": "Identifier",
                                          "decorators": [],
                                          "name": "s",
                                          "optional": false,
                                          "typeAnnotation": null,
                                          "start": 1356,
                                          "end": 1357
                                        },
                                        "id": null,
                                        "generator": false,
                                        "start": 1350,
                                        "end": 1357
                                      }
                                    ],
                                    "optional": false,
                                    "start": 1315,
                                    "end": 1358
                                  },
                                  "property": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "then",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 1359,
                                    "end": 1363
                                  },
                                  "optional": false,
                                  "computed": false,
                                  "start": 1315,
                                  "end": 1363
                                },
                                "typeArguments": null,
                                "arguments": [
                                  {
                                    "type": "ArrowFunctionExpression",
                                    "expression": true,
                                    "async": false,
                                    "typeParameters": null,
                                    "params": [
                                      {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "ss",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 1364,
                                        "end": 1366
                                      }
                                    ],
                                    "returnType": null,
                                    "body": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "s",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 1370,
                                      "end": 1371
                                    },
                                    "id": null,
                                    "generator": false,
                                    "start": 1364,
                                    "end": 1371
                                  }
                                ],
                                "optional": false,
                                "start": 1315,
                                "end": 1372
                              },
                              "property": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "then",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 1373,
                                "end": 1377
                              },
                              "optional": false,
                              "computed": false,
                              "start": 1315,
                              "end": 1377
                            },
                            "typeArguments": null,
                            "arguments": [
                              {
                                "type": "ArrowFunctionExpression",
                                "expression": true,
                                "async": false,
                                "typeParameters": null,
                                "params": [
                                  {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "ss",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 1378,
                                    "end": 1380
                                  }
                                ],
                                "returnType": null,
                                "body": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "s",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 1384,
                                  "end": 1385
                                },
                                "id": null,
                                "generator": false,
                                "start": 1378,
                                "end": 1385
                              }
                            ],
                            "optional": false,
                            "start": 1315,
                            "end": 1386
                          },
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "value",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1387,
                            "end": 1392
                          },
                          "optional": false,
                          "computed": false,
                          "start": 1315,
                          "end": 1392
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1393,
                          "end": 1394
                        },
                        "optional": false,
                        "computed": false,
                        "start": 1315,
                        "end": 1394
                      },
                      "right": {
                        "type": "Literal",
                        "value": "",
                        "raw": "\"\"",
                        "start": 1397,
                        "end": 1399
                      },
                      "start": 1315,
                      "end": 1399
                    },
                    "directive": null,
                    "start": 1315,
                    "end": 1400
                  },
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "Literal",
                      "value": null,
                      "raw": "null",
                      "start": 1417,
                      "end": 1421
                    },
                    "start": 1410,
                    "end": 1422
                  }
                ],
                "start": 813,
                "end": 1428
              },
              "expression": false,
              "start": 771,
              "end": 1428
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 767,
            "end": 1428
          }
        ],
        "start": 724,
        "end": 1430
      },
      "abstract": false,
      "declare": false,
      "start": 698,
      "end": 1430
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 1430
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "class",
    "start": 0,
    "end": 5
  },
  {
    "type": "Identifier",
    "value": "Chain",
    "start": 6,
    "end": 11
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 11,
    "end": 12
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 12,
    "end": 13
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 13,
    "end": 14
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 15,
    "end": 16
  },
  {
    "type": "Identifier",
    "value": "constructor",
    "start": 21,
    "end": 32
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 32,
    "end": 33
  },
  {
    "type": "Keyword",
    "value": "public",
    "start": 33,
    "end": 39
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 40,
    "end": 45
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 45,
    "end": 46
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 47,
    "end": 48
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 48,
    "end": 49
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 50,
    "end": 51
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 52,
    "end": 53
  },
  {
    "type": "Identifier",
    "value": "then",
    "start": 58,
    "end": 62
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 62,
    "end": 63
  },
  {
    "type": "Identifier",
    "value": "S",
    "start": 63,
    "end": 64
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 65,
    "end": 72
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 73,
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
    "value": "(",
    "start": 75,
    "end": 76
  },
  {
    "type": "Identifier",
    "value": "cb",
    "start": 76,
    "end": 78
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 78,
    "end": 79
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 80,
    "end": 81
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 81,
    "end": 82
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 82,
    "end": 83
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 84,
    "end": 85
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 85,
    "end": 86
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 87,
    "end": 89
  },
  {
    "type": "Identifier",
    "value": "S",
    "start": 90,
    "end": 91
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 91,
    "end": 92
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 92,
    "end": 93
  },
  {
    "type": "Identifier",
    "value": "Chain",
    "start": 94,
    "end": 99
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 99,
    "end": 100
  },
  {
    "type": "Identifier",
    "value": "S",
    "start": 100,
    "end": 101
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 101,
    "end": 102
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 103,
    "end": 104
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 113,
    "end": 116
  },
  {
    "type": "Identifier",
    "value": "t",
    "start": 117,
    "end": 118
  },
  {
    "type": "Punctuator",
    "value": "!",
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
    "value": "T",
    "start": 121,
    "end": 122
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 122,
    "end": 123
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 132,
    "end": 135
  },
  {
    "type": "Identifier",
    "value": "s",
    "start": 136,
    "end": 137
  },
  {
    "type": "Punctuator",
    "value": "!",
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
    "value": "S",
    "start": 140,
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
    "value": "(",
    "start": 219,
    "end": 220
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 220,
    "end": 223
  },
  {
    "type": "Identifier",
    "value": "Chain",
    "start": 224,
    "end": 229
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 229,
    "end": 230
  },
  {
    "type": "Identifier",
    "value": "t",
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
    "value": ")",
    "start": 232,
    "end": 233
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 233,
    "end": 234
  },
  {
    "type": "Identifier",
    "value": "then",
    "start": 234,
    "end": 238
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 238,
    "end": 239
  },
  {
    "type": "Identifier",
    "value": "tt",
    "start": 239,
    "end": 241
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 242,
    "end": 244
  },
  {
    "type": "Identifier",
    "value": "s",
    "start": 245,
    "end": 246
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 246,
    "end": 247
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 247,
    "end": 248
  },
  {
    "type": "Identifier",
    "value": "then",
    "start": 248,
    "end": 252
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 252,
    "end": 253
  },
  {
    "type": "Identifier",
    "value": "ss",
    "start": 253,
    "end": 255
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 256,
    "end": 258
  },
  {
    "type": "Identifier",
    "value": "t",
    "start": 259,
    "end": 260
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 260,
    "end": 261
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 261,
    "end": 262
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 322,
    "end": 323
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 323,
    "end": 326
  },
  {
    "type": "Identifier",
    "value": "Chain",
    "start": 327,
    "end": 332
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 332,
    "end": 333
  },
  {
    "type": "Identifier",
    "value": "s",
    "start": 333,
    "end": 334
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 334,
    "end": 335
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 335,
    "end": 336
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 336,
    "end": 337
  },
  {
    "type": "Identifier",
    "value": "then",
    "start": 337,
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
    "value": "ss",
    "start": 342,
    "end": 344
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 345,
    "end": 347
  },
  {
    "type": "Identifier",
    "value": "t",
    "start": 348,
    "end": 349
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 349,
    "end": 350
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 350,
    "end": 351
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 405,
    "end": 406
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 406,
    "end": 409
  },
  {
    "type": "Identifier",
    "value": "Chain",
    "start": 410,
    "end": 415
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 415,
    "end": 416
  },
  {
    "type": "Identifier",
    "value": "t",
    "start": 416,
    "end": 417
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 417,
    "end": 418
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 418,
    "end": 419
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 419,
    "end": 420
  },
  {
    "type": "Identifier",
    "value": "then",
    "start": 420,
    "end": 424
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 424,
    "end": 425
  },
  {
    "type": "Identifier",
    "value": "tt",
    "start": 425,
    "end": 427
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 428,
    "end": 430
  },
  {
    "type": "Identifier",
    "value": "t",
    "start": 431,
    "end": 432
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 432,
    "end": 433
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 433,
    "end": 434
  },
  {
    "type": "Identifier",
    "value": "then",
    "start": 434,
    "end": 438
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 438,
    "end": 439
  },
  {
    "type": "Identifier",
    "value": "tt",
    "start": 439,
    "end": 441
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 442,
    "end": 444
  },
  {
    "type": "Identifier",
    "value": "t",
    "start": 445,
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
    "value": ".",
    "start": 447,
    "end": 448
  },
  {
    "type": "Identifier",
    "value": "then",
    "start": 448,
    "end": 452
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 452,
    "end": 453
  },
  {
    "type": "Identifier",
    "value": "tt",
    "start": 453,
    "end": 455
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 456,
    "end": 458
  },
  {
    "type": "Identifier",
    "value": "t",
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
    "value": ";",
    "start": 461,
    "end": 462
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 471,
    "end": 472
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 472,
    "end": 475
  },
  {
    "type": "Identifier",
    "value": "Chain",
    "start": 476,
    "end": 481
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 481,
    "end": 482
  },
  {
    "type": "Identifier",
    "value": "s",
    "start": 482,
    "end": 483
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 483,
    "end": 484
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 484,
    "end": 485
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 485,
    "end": 486
  },
  {
    "type": "Identifier",
    "value": "then",
    "start": 486,
    "end": 490
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 490,
    "end": 491
  },
  {
    "type": "Identifier",
    "value": "ss",
    "start": 491,
    "end": 493
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 494,
    "end": 496
  },
  {
    "type": "Identifier",
    "value": "s",
    "start": 497,
    "end": 498
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 498,
    "end": 499
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 499,
    "end": 500
  },
  {
    "type": "Identifier",
    "value": "then",
    "start": 500,
    "end": 504
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 504,
    "end": 505
  },
  {
    "type": "Identifier",
    "value": "ss",
    "start": 505,
    "end": 507
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 508,
    "end": 510
  },
  {
    "type": "Identifier",
    "value": "s",
    "start": 511,
    "end": 512
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 512,
    "end": 513
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 513,
    "end": 514
  },
  {
    "type": "Identifier",
    "value": "then",
    "start": 514,
    "end": 518
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 518,
    "end": 519
  },
  {
    "type": "Identifier",
    "value": "ss",
    "start": 519,
    "end": 521
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 522,
    "end": 524
  },
  {
    "type": "Identifier",
    "value": "s",
    "start": 525,
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
    "value": ";",
    "start": 527,
    "end": 528
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 538,
    "end": 544
  },
  {
    "type": "Null",
    "value": "null",
    "start": 545,
    "end": 549
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 549,
    "end": 550
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 555,
    "end": 556
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 557,
    "end": 558
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 667,
    "end": 676
  },
  {
    "type": "Identifier",
    "value": "I",
    "start": 677,
    "end": 678
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 679,
    "end": 680
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 685,
    "end": 686
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 686,
    "end": 687
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 688,
    "end": 694
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 694,
    "end": 695
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 696,
    "end": 697
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 698,
    "end": 703
  },
  {
    "type": "Identifier",
    "value": "Chain2",
    "start": 704,
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
    "value": "T",
    "start": 711,
    "end": 712
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 713,
    "end": 720
  },
  {
    "type": "Identifier",
    "value": "I",
    "start": 721,
    "end": 722
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 722,
    "end": 723
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 724,
    "end": 725
  },
  {
    "type": "Identifier",
    "value": "constructor",
    "start": 730,
    "end": 741
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 741,
    "end": 742
  },
  {
    "type": "Keyword",
    "value": "public",
    "start": 742,
    "end": 748
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 749,
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
    "value": "T",
    "start": 756,
    "end": 757
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 757,
    "end": 758
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 759,
    "end": 760
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 761,
    "end": 762
  },
  {
    "type": "Identifier",
    "value": "then",
    "start": 767,
    "end": 771
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 771,
    "end": 772
  },
  {
    "type": "Identifier",
    "value": "S",
    "start": 772,
    "end": 773
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 774,
    "end": 781
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 782,
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
    "value": "(",
    "start": 784,
    "end": 785
  },
  {
    "type": "Identifier",
    "value": "cb",
    "start": 785,
    "end": 787
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 787,
    "end": 788
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 789,
    "end": 790
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 790,
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
    "value": "T",
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
    "value": "=>",
    "start": 796,
    "end": 798
  },
  {
    "type": "Identifier",
    "value": "S",
    "start": 799,
    "end": 800
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 800,
    "end": 801
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 801,
    "end": 802
  },
  {
    "type": "Identifier",
    "value": "Chain2",
    "start": 803,
    "end": 809
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 809,
    "end": 810
  },
  {
    "type": "Identifier",
    "value": "S",
    "start": 810,
    "end": 811
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 811,
    "end": 812
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 813,
    "end": 814
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 823,
    "end": 826
  },
  {
    "type": "Identifier",
    "value": "i",
    "start": 827,
    "end": 828
  },
  {
    "type": "Punctuator",
    "value": "!",
    "start": 828,
    "end": 829
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 829,
    "end": 830
  },
  {
    "type": "Identifier",
    "value": "I",
    "start": 831,
    "end": 832
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 832,
    "end": 833
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 842,
    "end": 845
  },
  {
    "type": "Identifier",
    "value": "t",
    "start": 846,
    "end": 847
  },
  {
    "type": "Punctuator",
    "value": "!",
    "start": 847,
    "end": 848
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 848,
    "end": 849
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 850,
    "end": 851
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 851,
    "end": 852
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 861,
    "end": 864
  },
  {
    "type": "Identifier",
    "value": "s",
    "start": 865,
    "end": 866
  },
  {
    "type": "Punctuator",
    "value": "!",
    "start": 866,
    "end": 867
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 867,
    "end": 868
  },
  {
    "type": "Identifier",
    "value": "S",
    "start": 869,
    "end": 870
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 870,
    "end": 871
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1023,
    "end": 1024
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 1024,
    "end": 1027
  },
  {
    "type": "Identifier",
    "value": "Chain2",
    "start": 1028,
    "end": 1034
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1034,
    "end": 1035
  },
  {
    "type": "Identifier",
    "value": "i",
    "start": 1035,
    "end": 1036
  },
  {
    "type": "Punctuator",
    "value": ")",
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
    "value": ".",
    "start": 1038,
    "end": 1039
  },
  {
    "type": "Identifier",
    "value": "then",
    "start": 1039,
    "end": 1043
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1043,
    "end": 1044
  },
  {
    "type": "Identifier",
    "value": "ii",
    "start": 1044,
    "end": 1046
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1047,
    "end": 1049
  },
  {
    "type": "Identifier",
    "value": "t",
    "start": 1050,
    "end": 1051
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1051,
    "end": 1052
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1052,
    "end": 1053
  },
  {
    "type": "Identifier",
    "value": "then",
    "start": 1053,
    "end": 1057
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1057,
    "end": 1058
  },
  {
    "type": "Identifier",
    "value": "tt",
    "start": 1058,
    "end": 1060
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1061,
    "end": 1063
  },
  {
    "type": "Identifier",
    "value": "s",
    "start": 1064,
    "end": 1065
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1065,
    "end": 1066
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1066,
    "end": 1067
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 1067,
    "end": 1072
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1072,
    "end": 1073
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1073,
    "end": 1074
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1075,
    "end": 1076
  },
  {
    "type": "String",
    "value": "\"\"",
    "start": 1077,
    "end": 1079
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1079,
    "end": 1080
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1221,
    "end": 1222
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 1222,
    "end": 1225
  },
  {
    "type": "Identifier",
    "value": "Chain2",
    "start": 1226,
    "end": 1232
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1232,
    "end": 1233
  },
  {
    "type": "Identifier",
    "value": "i",
    "start": 1233,
    "end": 1234
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1234,
    "end": 1235
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1235,
    "end": 1236
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1236,
    "end": 1237
  },
  {
    "type": "Identifier",
    "value": "then",
    "start": 1237,
    "end": 1241
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1241,
    "end": 1242
  },
  {
    "type": "Identifier",
    "value": "ii",
    "start": 1242,
    "end": 1244
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1245,
    "end": 1247
  },
  {
    "type": "Identifier",
    "value": "t",
    "start": 1248,
    "end": 1249
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1249,
    "end": 1250
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1250,
    "end": 1251
  },
  {
    "type": "Identifier",
    "value": "then",
    "start": 1251,
    "end": 1255
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1255,
    "end": 1256
  },
  {
    "type": "Identifier",
    "value": "tt",
    "start": 1256,
    "end": 1258
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1259,
    "end": 1261
  },
  {
    "type": "Identifier",
    "value": "t",
    "start": 1262,
    "end": 1263
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1263,
    "end": 1264
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1264,
    "end": 1265
  },
  {
    "type": "Identifier",
    "value": "then",
    "start": 1265,
    "end": 1269
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1269,
    "end": 1270
  },
  {
    "type": "Identifier",
    "value": "tt",
    "start": 1270,
    "end": 1272
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1273,
    "end": 1275
  },
  {
    "type": "Identifier",
    "value": "t",
    "start": 1276,
    "end": 1277
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1277,
    "end": 1278
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1278,
    "end": 1279
  },
  {
    "type": "Identifier",
    "value": "then",
    "start": 1279,
    "end": 1283
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1283,
    "end": 1284
  },
  {
    "type": "Identifier",
    "value": "tt",
    "start": 1284,
    "end": 1286
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1287,
    "end": 1289
  },
  {
    "type": "Identifier",
    "value": "t",
    "start": 1290,
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
    "value": ".",
    "start": 1292,
    "end": 1293
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 1293,
    "end": 1298
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1298,
    "end": 1299
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1299,
    "end": 1300
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1301,
    "end": 1302
  },
  {
    "type": "String",
    "value": "\"\"",
    "start": 1303,
    "end": 1305
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1305,
    "end": 1306
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1315,
    "end": 1316
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 1316,
    "end": 1319
  },
  {
    "type": "Identifier",
    "value": "Chain2",
    "start": 1320,
    "end": 1326
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1326,
    "end": 1327
  },
  {
    "type": "Identifier",
    "value": "i",
    "start": 1327,
    "end": 1328
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1328,
    "end": 1329
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1329,
    "end": 1330
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1330,
    "end": 1331
  },
  {
    "type": "Identifier",
    "value": "then",
    "start": 1331,
    "end": 1335
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1335,
    "end": 1336
  },
  {
    "type": "Identifier",
    "value": "ii",
    "start": 1336,
    "end": 1338
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1339,
    "end": 1341
  },
  {
    "type": "Identifier",
    "value": "s",
    "start": 1342,
    "end": 1343
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1343,
    "end": 1344
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1344,
    "end": 1345
  },
  {
    "type": "Identifier",
    "value": "then",
    "start": 1345,
    "end": 1349
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1349,
    "end": 1350
  },
  {
    "type": "Identifier",
    "value": "ss",
    "start": 1350,
    "end": 1352
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1353,
    "end": 1355
  },
  {
    "type": "Identifier",
    "value": "s",
    "start": 1356,
    "end": 1357
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1357,
    "end": 1358
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1358,
    "end": 1359
  },
  {
    "type": "Identifier",
    "value": "then",
    "start": 1359,
    "end": 1363
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1363,
    "end": 1364
  },
  {
    "type": "Identifier",
    "value": "ss",
    "start": 1364,
    "end": 1366
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1367,
    "end": 1369
  },
  {
    "type": "Identifier",
    "value": "s",
    "start": 1370,
    "end": 1371
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1371,
    "end": 1372
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1372,
    "end": 1373
  },
  {
    "type": "Identifier",
    "value": "then",
    "start": 1373,
    "end": 1377
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1377,
    "end": 1378
  },
  {
    "type": "Identifier",
    "value": "ss",
    "start": 1378,
    "end": 1380
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1381,
    "end": 1383
  },
  {
    "type": "Identifier",
    "value": "s",
    "start": 1384,
    "end": 1385
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1385,
    "end": 1386
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1386,
    "end": 1387
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 1387,
    "end": 1392
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1392,
    "end": 1393
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1393,
    "end": 1394
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1395,
    "end": 1396
  },
  {
    "type": "String",
    "value": "\"\"",
    "start": 1397,
    "end": 1399
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1399,
    "end": 1400
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 1410,
    "end": 1416
  },
  {
    "type": "Null",
    "value": "null",
    "start": 1417,
    "end": 1421
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1421,
    "end": 1422
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1427,
    "end": 1428
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1429,
    "end": 1430
  }
]
```
