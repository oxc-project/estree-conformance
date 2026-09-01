__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "compose",
        "optional": false,
        "typeAnnotation": null,
        "start": 50,
        "end": 57
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
              "name": "A",
              "optional": false,
              "typeAnnotation": null,
              "start": 58,
              "end": 59
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 58,
            "end": 59
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "B",
              "optional": false,
              "typeAnnotation": null,
              "start": 61,
              "end": 62
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 61,
            "end": 62
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "C",
              "optional": false,
              "typeAnnotation": null,
              "start": 64,
              "end": 65
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 64,
            "end": 65
          }
        ],
        "start": 57,
        "end": 66
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
                  "name": "b",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "B",
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
                    "end": 75
                  },
                  "start": 71,
                  "end": 75
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "C",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 80,
                    "end": 81
                  },
                  "typeArguments": null,
                  "start": 80,
                  "end": 81
                },
                "start": 77,
                "end": 81
              },
              "start": 70,
              "end": 81
            },
            "start": 68,
            "end": 81
          },
          "start": 67,
          "end": 81
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "g",
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
                        "start": 89,
                        "end": 90
                      },
                      "typeArguments": null,
                      "start": 89,
                      "end": 90
                    },
                    "start": 88,
                    "end": 90
                  },
                  "start": 87,
                  "end": 90
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "B",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 95,
                    "end": 96
                  },
                  "typeArguments": null,
                  "start": 95,
                  "end": 96
                },
                "start": 92,
                "end": 96
              },
              "start": 86,
              "end": 96
            },
            "start": 84,
            "end": 96
          },
          "start": 83,
          "end": 96
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
                    "start": 102,
                    "end": 103
                  },
                  "typeArguments": null,
                  "start": 102,
                  "end": 103
                },
                "start": 101,
                "end": 103
              },
              "start": 100,
              "end": 103
            }
          ],
          "returnType": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "C",
                "optional": false,
                "typeAnnotation": null,
                "start": 108,
                "end": 109
              },
              "typeArguments": null,
              "start": 108,
              "end": 109
            },
            "start": 105,
            "end": 109
          },
          "start": 99,
          "end": 109
        },
        "start": 97,
        "end": 109
      },
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ReturnStatement",
            "argument": {
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
                        "start": 135,
                        "end": 136
                      },
                      "typeArguments": null,
                      "start": 135,
                      "end": 136
                    },
                    "start": 134,
                    "end": 136
                  },
                  "start": 133,
                  "end": 136
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "C",
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
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "CallExpression",
                      "callee": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "f",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 159,
                        "end": 160
                      },
                      "typeArguments": null,
                      "arguments": [
                        {
                          "type": "CallExpression",
                          "callee": {
                            "type": "MemberExpression",
                            "object": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "g",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 161,
                              "end": 162
                            },
                            "property": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "apply",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 163,
                              "end": 168
                            },
                            "optional": false,
                            "computed": false,
                            "start": 161,
                            "end": 168
                          },
                          "typeArguments": null,
                          "arguments": [
                            {
                              "type": "Literal",
                              "value": null,
                              "raw": "null",
                              "start": 169,
                              "end": 173
                            },
                            {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "a",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 175,
                              "end": 176
                            }
                          ],
                          "optional": false,
                          "start": 161,
                          "end": 177
                        }
                      ],
                      "optional": false,
                      "start": 159,
                      "end": 178
                    },
                    "start": 152,
                    "end": 179
                  }
                ],
                "start": 142,
                "end": 185
              },
              "expression": false,
              "start": 123,
              "end": 185
            },
            "start": 116,
            "end": 186
          }
        ],
        "start": 110,
        "end": 188
      },
      "expression": false,
      "start": 41,
      "end": 188
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "forEach",
        "optional": false,
        "typeAnnotation": null,
        "start": 236,
        "end": 243
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
              "name": "A",
              "optional": false,
              "typeAnnotation": null,
              "start": 244,
              "end": 245
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 244,
            "end": 245
          }
        ],
        "start": 243,
        "end": 246
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "list",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSArrayType",
              "elementType": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "A",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 253,
                  "end": 254
                },
                "typeArguments": null,
                "start": 253,
                "end": 254
              },
              "start": 253,
              "end": 256
            },
            "start": 251,
            "end": 256
          },
          "start": 247,
          "end": 256
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
                        "start": 265,
                        "end": 266
                      },
                      "typeArguments": null,
                      "start": 265,
                      "end": 266
                    },
                    "start": 263,
                    "end": 266
                  },
                  "start": 262,
                  "end": 266
                },
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "n",
                  "optional": true,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 272,
                      "end": 278
                    },
                    "start": 270,
                    "end": 278
                  },
                  "start": 268,
                  "end": 278
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSVoidKeyword",
                  "start": 283,
                  "end": 287
                },
                "start": 280,
                "end": 287
              },
              "start": 261,
              "end": 287
            },
            "start": 259,
            "end": 287
          },
          "start": 258,
          "end": 287
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSVoidKeyword",
          "start": 291,
          "end": 295
        },
        "start": 289,
        "end": 295
      },
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ForStatement",
            "init": {
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
                    "typeAnnotation": null,
                    "start": 311,
                    "end": 312
                  },
                  "init": {
                    "type": "Literal",
                    "value": 0,
                    "raw": "0",
                    "start": 315,
                    "end": 316
                  },
                  "definite": false,
                  "start": 311,
                  "end": 316
                }
              ],
              "declare": false,
              "start": 307,
              "end": 316
            },
            "test": {
              "type": "BinaryExpression",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "i",
                "optional": false,
                "typeAnnotation": null,
                "start": 318,
                "end": 319
              },
              "operator": "<",
              "right": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "list",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 322,
                  "end": 326
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "length",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 327,
                  "end": 333
                },
                "optional": false,
                "computed": false,
                "start": 322,
                "end": 333
              },
              "start": 318,
              "end": 333
            },
            "update": {
              "type": "UpdateExpression",
              "operator": "++",
              "prefix": true,
              "argument": {
                "type": "Identifier",
                "decorators": [],
                "name": "i",
                "optional": false,
                "typeAnnotation": null,
                "start": 337,
                "end": 338
              },
              "start": 335,
              "end": 338
            },
            "body": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "CallExpression",
                    "callee": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "f",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 350,
                      "end": 351
                    },
                    "typeArguments": null,
                    "arguments": [
                      {
                        "type": "MemberExpression",
                        "object": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "list",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 352,
                          "end": 356
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "i",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 357,
                          "end": 358
                        },
                        "optional": false,
                        "computed": true,
                        "start": 352,
                        "end": 359
                      },
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "i",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 361,
                        "end": 362
                      }
                    ],
                    "optional": false,
                    "start": 350,
                    "end": 363
                  },
                  "directive": null,
                  "start": 350,
                  "end": 364
                }
              ],
              "start": 340,
              "end": 370
            },
            "start": 302,
            "end": 370
          }
        ],
        "start": 296,
        "end": 372
      },
      "expression": false,
      "start": 227,
      "end": 372
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "filter",
        "optional": false,
        "typeAnnotation": null,
        "start": 420,
        "end": 426
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
              "name": "A",
              "optional": false,
              "typeAnnotation": null,
              "start": 427,
              "end": 428
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 427,
            "end": 428
          }
        ],
        "start": 426,
        "end": 429
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
                        "start": 437,
                        "end": 438
                      },
                      "typeArguments": null,
                      "start": 437,
                      "end": 438
                    },
                    "start": 435,
                    "end": 438
                  },
                  "start": 434,
                  "end": 438
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSBooleanKeyword",
                  "start": 443,
                  "end": 450
                },
                "start": 440,
                "end": 450
              },
              "start": 433,
              "end": 450
            },
            "start": 431,
            "end": 450
          },
          "start": 430,
          "end": 450
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "ar",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSArrayType",
              "elementType": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "A",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 456,
                  "end": 457
                },
                "typeArguments": null,
                "start": 456,
                "end": 457
              },
              "start": 456,
              "end": 459
            },
            "start": 454,
            "end": 459
          },
          "start": 452,
          "end": 459
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSArrayType",
          "elementType": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "A",
              "optional": false,
              "typeAnnotation": null,
              "start": 462,
              "end": 463
            },
            "typeArguments": null,
            "start": 462,
            "end": 463
          },
          "start": 462,
          "end": 465
        },
        "start": 460,
        "end": 465
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
                  "name": "ret",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 476,
                  "end": 479
                },
                "init": {
                  "type": "ArrayExpression",
                  "elements": [],
                  "start": 482,
                  "end": 484
                },
                "definite": false,
                "start": 476,
                "end": 484
              }
            ],
            "declare": false,
            "start": 472,
            "end": 485
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "CallExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "forEach",
                "optional": false,
                "typeAnnotation": null,
                "start": 490,
                "end": 497
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "ar",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 498,
                  "end": 500
                },
                {
                  "type": "ArrowFunctionExpression",
                  "expression": false,
                  "async": false,
                  "typeParameters": null,
                  "params": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "el",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 503,
                      "end": 505
                    }
                  ],
                  "returnType": null,
                  "body": {
                    "type": "BlockStatement",
                    "body": [
                      {
                        "type": "IfStatement",
                        "test": {
                          "type": "CallExpression",
                          "callee": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "f",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 524,
                            "end": 525
                          },
                          "typeArguments": null,
                          "arguments": [
                            {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "el",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 526,
                              "end": 528
                            }
                          ],
                          "optional": false,
                          "start": 524,
                          "end": 529
                        },
                        "consequent": {
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
                                    "name": "ret",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 545,
                                    "end": 548
                                  },
                                  "property": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "push",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 549,
                                    "end": 553
                                  },
                                  "optional": false,
                                  "computed": false,
                                  "start": 545,
                                  "end": 553
                                },
                                "typeArguments": null,
                                "arguments": [
                                  {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "el",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 554,
                                    "end": 556
                                  }
                                ],
                                "optional": false,
                                "start": 545,
                                "end": 557
                              },
                              "directive": null,
                              "start": 545,
                              "end": 558
                            }
                          ],
                          "start": 531,
                          "end": 568
                        },
                        "alternate": null,
                        "start": 520,
                        "end": 568
                      }
                    ],
                    "start": 510,
                    "end": 574
                  },
                  "id": null,
                  "generator": false,
                  "start": 502,
                  "end": 574
                }
              ],
              "optional": false,
              "start": 490,
              "end": 576
            },
            "directive": null,
            "start": 490,
            "end": 577
          },
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "Identifier",
              "decorators": [],
              "name": "ret",
              "optional": false,
              "typeAnnotation": null,
              "start": 590,
              "end": 593
            },
            "start": 583,
            "end": 594
          }
        ],
        "start": 466,
        "end": 596
      },
      "expression": false,
      "start": 411,
      "end": 596
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "length2",
        "optional": false,
        "typeAnnotation": null,
        "start": 631,
        "end": 638
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
              "name": "A",
              "optional": false,
              "typeAnnotation": null,
              "start": 639,
              "end": 640
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 639,
            "end": 640
          }
        ],
        "start": 638,
        "end": 641
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "ar",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSArrayType",
              "elementType": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "A",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 646,
                  "end": 647
                },
                "typeArguments": null,
                "start": 646,
                "end": 647
              },
              "start": 646,
              "end": 649
            },
            "start": 644,
            "end": 649
          },
          "start": 642,
          "end": 649
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSNumberKeyword",
          "start": 652,
          "end": 658
        },
        "start": 650,
        "end": 658
      },
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "ar",
                "optional": false,
                "typeAnnotation": null,
                "start": 672,
                "end": 674
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "length",
                "optional": false,
                "typeAnnotation": null,
                "start": 675,
                "end": 681
              },
              "optional": false,
              "computed": false,
              "start": 672,
              "end": 681
            },
            "start": 665,
            "end": 682
          }
        ],
        "start": 659,
        "end": 684
      },
      "expression": false,
      "start": 622,
      "end": 684
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "curry1",
        "optional": false,
        "typeAnnotation": null,
        "start": 734,
        "end": 740
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
              "name": "A",
              "optional": false,
              "typeAnnotation": null,
              "start": 741,
              "end": 742
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 741,
            "end": 742
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "B",
              "optional": false,
              "typeAnnotation": null,
              "start": 744,
              "end": 745
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 744,
            "end": 745
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "C",
              "optional": false,
              "typeAnnotation": null,
              "start": 747,
              "end": 748
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 747,
            "end": 748
          }
        ],
        "start": 740,
        "end": 749
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
                        "start": 757,
                        "end": 758
                      },
                      "typeArguments": null,
                      "start": 757,
                      "end": 758
                    },
                    "start": 755,
                    "end": 758
                  },
                  "start": 754,
                  "end": 758
                },
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "b",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "B",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 763,
                        "end": 764
                      },
                      "typeArguments": null,
                      "start": 763,
                      "end": 764
                    },
                    "start": 761,
                    "end": 764
                  },
                  "start": 760,
                  "end": 764
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "C",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 769,
                    "end": 770
                  },
                  "typeArguments": null,
                  "start": 769,
                  "end": 770
                },
                "start": 766,
                "end": 770
              },
              "start": 753,
              "end": 770
            },
            "start": 751,
            "end": 770
          },
          "start": 750,
          "end": 770
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
              "name": "ax",
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
                    "start": 778,
                    "end": 779
                  },
                  "typeArguments": null,
                  "start": 778,
                  "end": 779
                },
                "start": 776,
                "end": 779
              },
              "start": 774,
              "end": 779
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
                  "name": "bx",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "B",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 789,
                        "end": 790
                      },
                      "typeArguments": null,
                      "start": 789,
                      "end": 790
                    },
                    "start": 787,
                    "end": 790
                  },
                  "start": 785,
                  "end": 790
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "C",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 795,
                    "end": 796
                  },
                  "typeArguments": null,
                  "start": 795,
                  "end": 796
                },
                "start": 792,
                "end": 796
              },
              "start": 784,
              "end": 796
            },
            "start": 781,
            "end": 796
          },
          "start": 773,
          "end": 796
        },
        "start": 771,
        "end": 796
      },
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ReturnStatement",
            "argument": {
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
                  "name": "ay",
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
                        "start": 824,
                        "end": 825
                      },
                      "typeArguments": null,
                      "start": 824,
                      "end": 825
                    },
                    "start": 822,
                    "end": 825
                  },
                  "start": 820,
                  "end": 825
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ReturnStatement",
                    "argument": {
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
                          "name": "by",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "B",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 858,
                                "end": 859
                              },
                              "typeArguments": null,
                              "start": 858,
                              "end": 859
                            },
                            "start": 856,
                            "end": 859
                          },
                          "start": 854,
                          "end": 859
                        }
                      ],
                      "returnType": null,
                      "body": {
                        "type": "BlockStatement",
                        "body": [
                          {
                            "type": "ReturnStatement",
                            "argument": {
                              "type": "CallExpression",
                              "callee": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "f",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 882,
                                "end": 883
                              },
                              "typeArguments": null,
                              "arguments": [
                                {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "ay",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 884,
                                  "end": 886
                                },
                                {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "by",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 888,
                                  "end": 890
                                }
                              ],
                              "optional": false,
                              "start": 882,
                              "end": 891
                            },
                            "start": 875,
                            "end": 892
                          }
                        ],
                        "start": 861,
                        "end": 902
                      },
                      "expression": false,
                      "start": 844,
                      "end": 902
                    },
                    "start": 837,
                    "end": 903
                  }
                ],
                "start": 827,
                "end": 909
              },
              "expression": false,
              "start": 810,
              "end": 909
            },
            "start": 803,
            "end": 910
          }
        ],
        "start": 797,
        "end": 912
      },
      "expression": false,
      "start": 725,
      "end": 912
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
            "name": "cfilter",
            "optional": false,
            "typeAnnotation": null,
            "start": 918,
            "end": 925
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "curry1",
              "optional": false,
              "typeAnnotation": null,
              "start": 928,
              "end": 934
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "filter",
                "optional": false,
                "typeAnnotation": null,
                "start": 935,
                "end": 941
              }
            ],
            "optional": false,
            "start": 928,
            "end": 942
          },
          "definite": false,
          "start": 918,
          "end": 942
        }
      ],
      "declare": false,
      "start": 914,
      "end": 943
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "countWhere_1",
        "optional": false,
        "typeAnnotation": null,
        "start": 1172,
        "end": 1184
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
              "name": "A",
              "optional": false,
              "typeAnnotation": null,
              "start": 1185,
              "end": 1186
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 1185,
            "end": 1186
          }
        ],
        "start": 1184,
        "end": 1187
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "pred",
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
                        "start": 1198,
                        "end": 1199
                      },
                      "typeArguments": null,
                      "start": 1198,
                      "end": 1199
                    },
                    "start": 1196,
                    "end": 1199
                  },
                  "start": 1195,
                  "end": 1199
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSBooleanKeyword",
                  "start": 1204,
                  "end": 1211
                },
                "start": 1201,
                "end": 1211
              },
              "start": 1194,
              "end": 1211
            },
            "start": 1192,
            "end": 1211
          },
          "start": 1188,
          "end": 1211
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
              "name": "a",
              "optional": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSArrayType",
                  "elementType": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "A",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1218,
                      "end": 1219
                    },
                    "typeArguments": null,
                    "start": 1218,
                    "end": 1219
                  },
                  "start": 1218,
                  "end": 1221
                },
                "start": 1216,
                "end": 1221
              },
              "start": 1215,
              "end": 1221
            }
          ],
          "returnType": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSNumberKeyword",
              "start": 1226,
              "end": 1232
            },
            "start": 1223,
            "end": 1232
          },
          "start": 1214,
          "end": 1232
        },
        "start": 1212,
        "end": 1232
      },
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "CallExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "compose",
                "optional": false,
                "typeAnnotation": null,
                "start": 1246,
                "end": 1253
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "length2",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1254,
                  "end": 1261
                },
                {
                  "type": "CallExpression",
                  "callee": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "cfilter",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1263,
                    "end": 1270
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "pred",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1271,
                      "end": 1275
                    }
                  ],
                  "optional": false,
                  "start": 1263,
                  "end": 1276
                }
              ],
              "optional": false,
              "start": 1246,
              "end": 1277
            },
            "start": 1239,
            "end": 1278
          }
        ],
        "start": 1233,
        "end": 1280
      },
      "expression": false,
      "start": 1163,
      "end": 1280
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "countWhere_2",
        "optional": false,
        "typeAnnotation": null,
        "start": 1291,
        "end": 1303
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
              "name": "A",
              "optional": false,
              "typeAnnotation": null,
              "start": 1304,
              "end": 1305
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 1304,
            "end": 1305
          }
        ],
        "start": 1303,
        "end": 1306
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "pred",
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
                        "start": 1317,
                        "end": 1318
                      },
                      "typeArguments": null,
                      "start": 1317,
                      "end": 1318
                    },
                    "start": 1315,
                    "end": 1318
                  },
                  "start": 1314,
                  "end": 1318
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSBooleanKeyword",
                  "start": 1323,
                  "end": 1330
                },
                "start": 1320,
                "end": 1330
              },
              "start": 1313,
              "end": 1330
            },
            "start": 1311,
            "end": 1330
          },
          "start": 1307,
          "end": 1330
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
              "name": "a",
              "optional": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSArrayType",
                  "elementType": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "A",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1337,
                      "end": 1338
                    },
                    "typeArguments": null,
                    "start": 1337,
                    "end": 1338
                  },
                  "start": 1337,
                  "end": 1340
                },
                "start": 1335,
                "end": 1340
              },
              "start": 1334,
              "end": 1340
            }
          ],
          "returnType": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSNumberKeyword",
              "start": 1345,
              "end": 1351
            },
            "start": 1342,
            "end": 1351
          },
          "start": 1333,
          "end": 1351
        },
        "start": 1331,
        "end": 1351
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
                  "name": "where",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1362,
                  "end": 1367
                },
                "init": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "cfilter",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1370,
                    "end": 1377
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "pred",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1378,
                      "end": 1382
                    }
                  ],
                  "optional": false,
                  "start": 1370,
                  "end": 1383
                },
                "definite": false,
                "start": 1362,
                "end": 1383
              }
            ],
            "declare": false,
            "start": 1358,
            "end": 1384
          },
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "CallExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "compose",
                "optional": false,
                "typeAnnotation": null,
                "start": 1396,
                "end": 1403
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "length2",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1404,
                  "end": 1411
                },
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "where",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1413,
                  "end": 1418
                }
              ],
              "optional": false,
              "start": 1396,
              "end": 1419
            },
            "start": 1389,
            "end": 1420
          }
        ],
        "start": 1352,
        "end": 1422
      },
      "expression": false,
      "start": 1282,
      "end": 1422
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 41,
  "end": 1422
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "function",
    "start": 41,
    "end": 49
  },
  {
    "type": "Identifier",
    "value": "compose",
    "start": 50,
    "end": 57
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 57,
    "end": 58
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 58,
    "end": 59
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 59,
    "end": 60
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 61,
    "end": 62
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 62,
    "end": 63
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 64,
    "end": 65
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 65,
    "end": 66
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 66,
    "end": 67
  },
  {
    "type": "Identifier",
    "value": "f",
    "start": 67,
    "end": 68
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 68,
    "end": 69
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 70,
    "end": 71
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 71,
    "end": 72
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 72,
    "end": 73
  },
  {
    "type": "Identifier",
    "value": "B",
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
    "value": "=>",
    "start": 77,
    "end": 79
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 80,
    "end": 81
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 81,
    "end": 82
  },
  {
    "type": "Identifier",
    "value": "g",
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
    "type": "Punctuator",
    "value": "(",
    "start": 86,
    "end": 87
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 87,
    "end": 88
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 88,
    "end": 89
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 89,
    "end": 90
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 90,
    "end": 91
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 92,
    "end": 94
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 95,
    "end": 96
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 96,
    "end": 97
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 97,
    "end": 98
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 99,
    "end": 100
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 100,
    "end": 101
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 101,
    "end": 102
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 102,
    "end": 103
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 103,
    "end": 104
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 105,
    "end": 107
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 108,
    "end": 109
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 110,
    "end": 111
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 116,
    "end": 122
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 123,
    "end": 131
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 132,
    "end": 133
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 133,
    "end": 134
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 134,
    "end": 135
  },
  {
    "type": "Identifier",
    "value": "A",
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
    "value": ":",
    "start": 138,
    "end": 139
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 140,
    "end": 141
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 142,
    "end": 143
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 152,
    "end": 158
  },
  {
    "type": "Identifier",
    "value": "f",
    "start": 159,
    "end": 160
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 160,
    "end": 161
  },
  {
    "type": "Identifier",
    "value": "g",
    "start": 161,
    "end": 162
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 162,
    "end": 163
  },
  {
    "type": "Identifier",
    "value": "apply",
    "start": 163,
    "end": 168
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 168,
    "end": 169
  },
  {
    "type": "Null",
    "value": "null",
    "start": 169,
    "end": 173
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 173,
    "end": 174
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 175,
    "end": 176
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 176,
    "end": 177
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 177,
    "end": 178
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 178,
    "end": 179
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 184,
    "end": 185
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 185,
    "end": 186
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 187,
    "end": 188
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 227,
    "end": 235
  },
  {
    "type": "Identifier",
    "value": "forEach",
    "start": 236,
    "end": 243
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 243,
    "end": 244
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 244,
    "end": 245
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 245,
    "end": 246
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 246,
    "end": 247
  },
  {
    "type": "Identifier",
    "value": "list",
    "start": 247,
    "end": 251
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 251,
    "end": 252
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 253,
    "end": 254
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 254,
    "end": 255
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 255,
    "end": 256
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 256,
    "end": 257
  },
  {
    "type": "Identifier",
    "value": "f",
    "start": 258,
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
    "value": "a",
    "start": 262,
    "end": 263
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 263,
    "end": 264
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 265,
    "end": 266
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 266,
    "end": 267
  },
  {
    "type": "Identifier",
    "value": "n",
    "start": 268,
    "end": 269
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 269,
    "end": 270
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 270,
    "end": 271
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 272,
    "end": 278
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 278,
    "end": 279
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 280,
    "end": 282
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 283,
    "end": 287
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 288,
    "end": 289
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 289,
    "end": 290
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 291,
    "end": 295
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 296,
    "end": 297
  },
  {
    "type": "Keyword",
    "value": "for",
    "start": 302,
    "end": 305
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 306,
    "end": 307
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 307,
    "end": 310
  },
  {
    "type": "Identifier",
    "value": "i",
    "start": 311,
    "end": 312
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 313,
    "end": 314
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 315,
    "end": 316
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 316,
    "end": 317
  },
  {
    "type": "Identifier",
    "value": "i",
    "start": 318,
    "end": 319
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 320,
    "end": 321
  },
  {
    "type": "Identifier",
    "value": "list",
    "start": 322,
    "end": 326
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 326,
    "end": 327
  },
  {
    "type": "Identifier",
    "value": "length",
    "start": 327,
    "end": 333
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 333,
    "end": 334
  },
  {
    "type": "Punctuator",
    "value": "++",
    "start": 335,
    "end": 337
  },
  {
    "type": "Identifier",
    "value": "i",
    "start": 337,
    "end": 338
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 338,
    "end": 339
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 340,
    "end": 341
  },
  {
    "type": "Identifier",
    "value": "f",
    "start": 350,
    "end": 351
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 351,
    "end": 352
  },
  {
    "type": "Identifier",
    "value": "list",
    "start": 352,
    "end": 356
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 356,
    "end": 357
  },
  {
    "type": "Identifier",
    "value": "i",
    "start": 357,
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
    "value": ",",
    "start": 359,
    "end": 360
  },
  {
    "type": "Identifier",
    "value": "i",
    "start": 361,
    "end": 362
  },
  {
    "type": "Punctuator",
    "value": ")",
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
    "type": "Punctuator",
    "value": "}",
    "start": 369,
    "end": 370
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 371,
    "end": 372
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 411,
    "end": 419
  },
  {
    "type": "Identifier",
    "value": "filter",
    "start": 420,
    "end": 426
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 426,
    "end": 427
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 427,
    "end": 428
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 428,
    "end": 429
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 429,
    "end": 430
  },
  {
    "type": "Identifier",
    "value": "f",
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
    "type": "Punctuator",
    "value": "(",
    "start": 433,
    "end": 434
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 434,
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
    "value": "A",
    "start": 437,
    "end": 438
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 438,
    "end": 439
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 440,
    "end": 442
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 443,
    "end": 450
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 450,
    "end": 451
  },
  {
    "type": "Identifier",
    "value": "ar",
    "start": 452,
    "end": 454
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 454,
    "end": 455
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 456,
    "end": 457
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 457,
    "end": 458
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 458,
    "end": 459
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 459,
    "end": 460
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 460,
    "end": 461
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 462,
    "end": 463
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 463,
    "end": 464
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 464,
    "end": 465
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 466,
    "end": 467
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 472,
    "end": 475
  },
  {
    "type": "Identifier",
    "value": "ret",
    "start": 476,
    "end": 479
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 480,
    "end": 481
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 482,
    "end": 483
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 483,
    "end": 484
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 484,
    "end": 485
  },
  {
    "type": "Identifier",
    "value": "forEach",
    "start": 490,
    "end": 497
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 497,
    "end": 498
  },
  {
    "type": "Identifier",
    "value": "ar",
    "start": 498,
    "end": 500
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 500,
    "end": 501
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 502,
    "end": 503
  },
  {
    "type": "Identifier",
    "value": "el",
    "start": 503,
    "end": 505
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 505,
    "end": 506
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 507,
    "end": 509
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 510,
    "end": 511
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 520,
    "end": 522
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 523,
    "end": 524
  },
  {
    "type": "Identifier",
    "value": "f",
    "start": 524,
    "end": 525
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 525,
    "end": 526
  },
  {
    "type": "Identifier",
    "value": "el",
    "start": 526,
    "end": 528
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 528,
    "end": 529
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 529,
    "end": 530
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 531,
    "end": 532
  },
  {
    "type": "Identifier",
    "value": "ret",
    "start": 545,
    "end": 548
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 548,
    "end": 549
  },
  {
    "type": "Identifier",
    "value": "push",
    "start": 549,
    "end": 553
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 553,
    "end": 554
  },
  {
    "type": "Identifier",
    "value": "el",
    "start": 554,
    "end": 556
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 556,
    "end": 557
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 557,
    "end": 558
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 567,
    "end": 568
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 573,
    "end": 574
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 575,
    "end": 576
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 576,
    "end": 577
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 583,
    "end": 589
  },
  {
    "type": "Identifier",
    "value": "ret",
    "start": 590,
    "end": 593
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 593,
    "end": 594
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 595,
    "end": 596
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 622,
    "end": 630
  },
  {
    "type": "Identifier",
    "value": "length2",
    "start": 631,
    "end": 638
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 638,
    "end": 639
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 639,
    "end": 640
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 640,
    "end": 641
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 641,
    "end": 642
  },
  {
    "type": "Identifier",
    "value": "ar",
    "start": 642,
    "end": 644
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 644,
    "end": 645
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 646,
    "end": 647
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 647,
    "end": 648
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 648,
    "end": 649
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 649,
    "end": 650
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 650,
    "end": 651
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 652,
    "end": 658
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 659,
    "end": 660
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 665,
    "end": 671
  },
  {
    "type": "Identifier",
    "value": "ar",
    "start": 672,
    "end": 674
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 674,
    "end": 675
  },
  {
    "type": "Identifier",
    "value": "length",
    "start": 675,
    "end": 681
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 681,
    "end": 682
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 683,
    "end": 684
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 725,
    "end": 733
  },
  {
    "type": "Identifier",
    "value": "curry1",
    "start": 734,
    "end": 740
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 740,
    "end": 741
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 741,
    "end": 742
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 742,
    "end": 743
  },
  {
    "type": "Identifier",
    "value": "B",
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
    "type": "Identifier",
    "value": "C",
    "start": 747,
    "end": 748
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 748,
    "end": 749
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 749,
    "end": 750
  },
  {
    "type": "Identifier",
    "value": "f",
    "start": 750,
    "end": 751
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 751,
    "end": 752
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 753,
    "end": 754
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 754,
    "end": 755
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 755,
    "end": 756
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 757,
    "end": 758
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 758,
    "end": 759
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 760,
    "end": 761
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 761,
    "end": 762
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 763,
    "end": 764
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 764,
    "end": 765
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 766,
    "end": 768
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 769,
    "end": 770
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 770,
    "end": 771
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 771,
    "end": 772
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 773,
    "end": 774
  },
  {
    "type": "Identifier",
    "value": "ax",
    "start": 774,
    "end": 776
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 776,
    "end": 777
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 778,
    "end": 779
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 779,
    "end": 780
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 781,
    "end": 783
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 784,
    "end": 785
  },
  {
    "type": "Identifier",
    "value": "bx",
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
    "type": "Identifier",
    "value": "B",
    "start": 789,
    "end": 790
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 790,
    "end": 791
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 792,
    "end": 794
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 795,
    "end": 796
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 797,
    "end": 798
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 803,
    "end": 809
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 810,
    "end": 818
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 819,
    "end": 820
  },
  {
    "type": "Identifier",
    "value": "ay",
    "start": 820,
    "end": 822
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 822,
    "end": 823
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 824,
    "end": 825
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 825,
    "end": 826
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 827,
    "end": 828
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 837,
    "end": 843
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 844,
    "end": 852
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 853,
    "end": 854
  },
  {
    "type": "Identifier",
    "value": "by",
    "start": 854,
    "end": 856
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 856,
    "end": 857
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 858,
    "end": 859
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 859,
    "end": 860
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 861,
    "end": 862
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 875,
    "end": 881
  },
  {
    "type": "Identifier",
    "value": "f",
    "start": 882,
    "end": 883
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 883,
    "end": 884
  },
  {
    "type": "Identifier",
    "value": "ay",
    "start": 884,
    "end": 886
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 886,
    "end": 887
  },
  {
    "type": "Identifier",
    "value": "by",
    "start": 888,
    "end": 890
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 890,
    "end": 891
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 891,
    "end": 892
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 901,
    "end": 902
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 902,
    "end": 903
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 908,
    "end": 909
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 909,
    "end": 910
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 911,
    "end": 912
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 914,
    "end": 917
  },
  {
    "type": "Identifier",
    "value": "cfilter",
    "start": 918,
    "end": 925
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 926,
    "end": 927
  },
  {
    "type": "Identifier",
    "value": "curry1",
    "start": 928,
    "end": 934
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 934,
    "end": 935
  },
  {
    "type": "Identifier",
    "value": "filter",
    "start": 935,
    "end": 941
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 941,
    "end": 942
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 942,
    "end": 943
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1163,
    "end": 1171
  },
  {
    "type": "Identifier",
    "value": "countWhere_1",
    "start": 1172,
    "end": 1184
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1184,
    "end": 1185
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 1185,
    "end": 1186
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1186,
    "end": 1187
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1187,
    "end": 1188
  },
  {
    "type": "Identifier",
    "value": "pred",
    "start": 1188,
    "end": 1192
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1192,
    "end": 1193
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1194,
    "end": 1195
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1195,
    "end": 1196
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1196,
    "end": 1197
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 1198,
    "end": 1199
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1199,
    "end": 1200
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1201,
    "end": 1203
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 1204,
    "end": 1211
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1211,
    "end": 1212
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1212,
    "end": 1213
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1214,
    "end": 1215
  },
  {
    "type": "Identifier",
    "value": "a",
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
    "value": "A",
    "start": 1218,
    "end": 1219
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1219,
    "end": 1220
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1220,
    "end": 1221
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1221,
    "end": 1222
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1223,
    "end": 1225
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1226,
    "end": 1232
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1233,
    "end": 1234
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 1239,
    "end": 1245
  },
  {
    "type": "Identifier",
    "value": "compose",
    "start": 1246,
    "end": 1253
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1253,
    "end": 1254
  },
  {
    "type": "Identifier",
    "value": "length2",
    "start": 1254,
    "end": 1261
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1261,
    "end": 1262
  },
  {
    "type": "Identifier",
    "value": "cfilter",
    "start": 1263,
    "end": 1270
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1270,
    "end": 1271
  },
  {
    "type": "Identifier",
    "value": "pred",
    "start": 1271,
    "end": 1275
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1275,
    "end": 1276
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1276,
    "end": 1277
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1277,
    "end": 1278
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1279,
    "end": 1280
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1282,
    "end": 1290
  },
  {
    "type": "Identifier",
    "value": "countWhere_2",
    "start": 1291,
    "end": 1303
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1303,
    "end": 1304
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 1304,
    "end": 1305
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1305,
    "end": 1306
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1306,
    "end": 1307
  },
  {
    "type": "Identifier",
    "value": "pred",
    "start": 1307,
    "end": 1311
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1311,
    "end": 1312
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1313,
    "end": 1314
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1314,
    "end": 1315
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1315,
    "end": 1316
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 1317,
    "end": 1318
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1318,
    "end": 1319
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1320,
    "end": 1322
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 1323,
    "end": 1330
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1330,
    "end": 1331
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1331,
    "end": 1332
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1333,
    "end": 1334
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1334,
    "end": 1335
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1335,
    "end": 1336
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 1337,
    "end": 1338
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1338,
    "end": 1339
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1339,
    "end": 1340
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1340,
    "end": 1341
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1342,
    "end": 1344
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1345,
    "end": 1351
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1352,
    "end": 1353
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1358,
    "end": 1361
  },
  {
    "type": "Identifier",
    "value": "where",
    "start": 1362,
    "end": 1367
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1368,
    "end": 1369
  },
  {
    "type": "Identifier",
    "value": "cfilter",
    "start": 1370,
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
    "value": "pred",
    "start": 1378,
    "end": 1382
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1382,
    "end": 1383
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1383,
    "end": 1384
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 1389,
    "end": 1395
  },
  {
    "type": "Identifier",
    "value": "compose",
    "start": 1396,
    "end": 1403
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1403,
    "end": 1404
  },
  {
    "type": "Identifier",
    "value": "length2",
    "start": 1404,
    "end": 1411
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1411,
    "end": 1412
  },
  {
    "type": "Identifier",
    "value": "where",
    "start": 1413,
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
    "value": ";",
    "start": 1419,
    "end": 1420
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1421,
    "end": 1422
  }
]
```
