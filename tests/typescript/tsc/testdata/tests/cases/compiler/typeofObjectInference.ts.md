__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "VariableDeclaration",
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "val",
            "optional": false,
            "typeAnnotation": null,
            "start": 4,
            "end": 7
          },
          "init": {
            "type": "Literal",
            "value": 1,
            "raw": "1",
            "start": 10,
            "end": 11
          },
          "definite": false,
          "start": 4,
          "end": 11
        }
      ],
      "declare": false,
      "start": 0,
      "end": 11
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "decorateA",
        "optional": false,
        "typeAnnotation": null,
        "start": 22,
        "end": 31
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
              "name": "O",
              "optional": false,
              "typeAnnotation": null,
              "start": 32,
              "end": 33
            },
            "constraint": {
              "type": "TSAnyKeyword",
              "start": 42,
              "end": 45
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 32,
            "end": 45
          }
        ],
        "start": 31,
        "end": 46
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
              "type": "TSFunctionType",
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "first",
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
                            "name": "value",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 60,
                            "end": 65
                          },
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSTypeQuery",
                              "exprName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "val",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 74,
                                "end": 77
                              },
                              "typeArguments": null,
                              "start": 67,
                              "end": 77
                            },
                            "start": 65,
                            "end": 77
                          },
                          "accessibility": null,
                          "static": false,
                          "start": 60,
                          "end": 77
                        }
                      ],
                      "start": 59,
                      "end": 78
                    },
                    "start": 57,
                    "end": 78
                  },
                  "start": 52,
                  "end": 78
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "O",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 83,
                    "end": 84
                  },
                  "typeArguments": null,
                  "start": 83,
                  "end": 84
                },
                "start": 80,
                "end": 84
              },
              "start": 51,
              "end": 84
            },
            "start": 49,
            "end": 84
          },
          "start": 47,
          "end": 84
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "ArrowFunctionExpression",
              "expression": true,
              "async": false,
              "typeParameters": null,
              "params": [],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "O",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 103,
                    "end": 104
                  },
                  "typeArguments": null,
                  "start": 103,
                  "end": 104
                },
                "start": 101,
                "end": 104
              },
              "body": {
                "type": "CallExpression",
                "callee": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "fn",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 108,
                  "end": 110
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
                          "name": "value",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 112,
                          "end": 117
                        },
                        "value": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "val",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 119,
                          "end": 122
                        },
                        "method": false,
                        "shorthand": false,
                        "computed": false,
                        "optional": false,
                        "start": 112,
                        "end": 122
                      }
                    ],
                    "start": 111,
                    "end": 123
                  }
                ],
                "optional": false,
                "start": 108,
                "end": 124
              },
              "id": null,
              "generator": false,
              "start": 99,
              "end": 124
            },
            "start": 92,
            "end": 124
          }
        ],
        "start": 86,
        "end": 126
      },
      "expression": false,
      "start": 13,
      "end": 126
    },
    {
      "type": "VariableDeclaration",
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": null,
            "start": 131,
            "end": 132
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "decorateA",
              "optional": false,
              "typeAnnotation": null,
              "start": 135,
              "end": 144
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
                    "type": "ObjectPattern",
                    "decorators": [],
                    "properties": [
                      {
                        "type": "Property",
                        "kind": "init",
                        "key": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "value",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 147,
                          "end": 152
                        },
                        "value": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "value",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 147,
                          "end": 152
                        },
                        "method": false,
                        "shorthand": true,
                        "computed": false,
                        "optional": false,
                        "start": 147,
                        "end": 152
                      }
                    ],
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 146,
                    "end": 153
                  }
                ],
                "returnType": null,
                "body": {
                  "type": "Literal",
                  "value": 5,
                  "raw": "5",
                  "start": 158,
                  "end": 159
                },
                "id": null,
                "generator": false,
                "start": 145,
                "end": 159
              }
            ],
            "optional": false,
            "start": 135,
            "end": 160
          },
          "definite": false,
          "start": 131,
          "end": 160
        }
      ],
      "declare": false,
      "start": 127,
      "end": 160
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "decorateB",
        "optional": false,
        "typeAnnotation": null,
        "start": 171,
        "end": 180
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
              "name": "O",
              "optional": false,
              "typeAnnotation": null,
              "start": 181,
              "end": 182
            },
            "constraint": {
              "type": "TSAnyKeyword",
              "start": 191,
              "end": 194
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 181,
            "end": 194
          }
        ],
        "start": 180,
        "end": 195
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
              "type": "TSFunctionType",
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "first",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeQuery",
                      "exprName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "val",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 215,
                        "end": 218
                      },
                      "typeArguments": null,
                      "start": 208,
                      "end": 218
                    },
                    "start": 206,
                    "end": 218
                  },
                  "start": 201,
                  "end": 218
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "O",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 223,
                    "end": 224
                  },
                  "typeArguments": null,
                  "start": 223,
                  "end": 224
                },
                "start": 220,
                "end": 224
              },
              "start": 200,
              "end": 224
            },
            "start": 198,
            "end": 224
          },
          "start": 196,
          "end": 224
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "ArrowFunctionExpression",
              "expression": true,
              "async": false,
              "typeParameters": null,
              "params": [],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "O",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 243,
                    "end": 244
                  },
                  "typeArguments": null,
                  "start": 243,
                  "end": 244
                },
                "start": 241,
                "end": 244
              },
              "body": {
                "type": "CallExpression",
                "callee": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "fn",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 248,
                  "end": 250
                },
                "typeArguments": null,
                "arguments": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "val",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 251,
                    "end": 254
                  }
                ],
                "optional": false,
                "start": 248,
                "end": 255
              },
              "id": null,
              "generator": false,
              "start": 239,
              "end": 255
            },
            "start": 232,
            "end": 255
          }
        ],
        "start": 226,
        "end": 257
      },
      "expression": false,
      "start": 162,
      "end": 257
    },
    {
      "type": "VariableDeclaration",
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "b",
            "optional": false,
            "typeAnnotation": null,
            "start": 262,
            "end": 263
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "decorateB",
              "optional": false,
              "typeAnnotation": null,
              "start": 266,
              "end": 275
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
                    "name": "value",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 277,
                    "end": 282
                  }
                ],
                "returnType": null,
                "body": {
                  "type": "Literal",
                  "value": 5,
                  "raw": "5",
                  "start": 287,
                  "end": 288
                },
                "id": null,
                "generator": false,
                "start": 276,
                "end": 288
              }
            ],
            "optional": false,
            "start": 266,
            "end": 289
          },
          "definite": false,
          "start": 262,
          "end": 289
        }
      ],
      "declare": false,
      "start": 258,
      "end": 289
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "decorateC",
        "optional": false,
        "typeAnnotation": null,
        "start": 300,
        "end": 309
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
              "name": "O",
              "optional": false,
              "typeAnnotation": null,
              "start": 310,
              "end": 311
            },
            "constraint": {
              "type": "TSAnyKeyword",
              "start": 320,
              "end": 323
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 310,
            "end": 323
          }
        ],
        "start": 309,
        "end": 324
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
              "type": "TSFunctionType",
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "first",
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
                            "name": "value",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 338,
                            "end": 343
                          },
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSNumberKeyword",
                              "start": 345,
                              "end": 351
                            },
                            "start": 343,
                            "end": 351
                          },
                          "accessibility": null,
                          "static": false,
                          "start": 338,
                          "end": 351
                        }
                      ],
                      "start": 337,
                      "end": 352
                    },
                    "start": 335,
                    "end": 352
                  },
                  "start": 330,
                  "end": 352
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "O",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 357,
                    "end": 358
                  },
                  "typeArguments": null,
                  "start": 357,
                  "end": 358
                },
                "start": 354,
                "end": 358
              },
              "start": 329,
              "end": 358
            },
            "start": 327,
            "end": 358
          },
          "start": 325,
          "end": 358
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "ArrowFunctionExpression",
              "expression": true,
              "async": false,
              "typeParameters": null,
              "params": [],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "O",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 377,
                    "end": 378
                  },
                  "typeArguments": null,
                  "start": 377,
                  "end": 378
                },
                "start": 375,
                "end": 378
              },
              "body": {
                "type": "CallExpression",
                "callee": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "fn",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 382,
                  "end": 384
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
                          "name": "value",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 386,
                          "end": 391
                        },
                        "value": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "val",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 393,
                          "end": 396
                        },
                        "method": false,
                        "shorthand": false,
                        "computed": false,
                        "optional": false,
                        "start": 386,
                        "end": 396
                      }
                    ],
                    "start": 385,
                    "end": 397
                  }
                ],
                "optional": false,
                "start": 382,
                "end": 398
              },
              "id": null,
              "generator": false,
              "start": 373,
              "end": 398
            },
            "start": 366,
            "end": 398
          }
        ],
        "start": 360,
        "end": 400
      },
      "expression": false,
      "start": 291,
      "end": 400
    },
    {
      "type": "VariableDeclaration",
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "c",
            "optional": false,
            "typeAnnotation": null,
            "start": 405,
            "end": 406
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "decorateC",
              "optional": false,
              "typeAnnotation": null,
              "start": 409,
              "end": 418
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
                    "type": "ObjectPattern",
                    "decorators": [],
                    "properties": [
                      {
                        "type": "Property",
                        "kind": "init",
                        "key": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "value",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 421,
                          "end": 426
                        },
                        "value": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "value",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 421,
                          "end": 426
                        },
                        "method": false,
                        "shorthand": true,
                        "computed": false,
                        "optional": false,
                        "start": 421,
                        "end": 426
                      }
                    ],
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 420,
                    "end": 427
                  }
                ],
                "returnType": null,
                "body": {
                  "type": "Literal",
                  "value": 5,
                  "raw": "5",
                  "start": 432,
                  "end": 433
                },
                "id": null,
                "generator": false,
                "start": 419,
                "end": 433
              }
            ],
            "optional": false,
            "start": 409,
            "end": 434
          },
          "definite": false,
          "start": 405,
          "end": 434
        }
      ],
      "declare": false,
      "start": 401,
      "end": 434
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "First",
        "optional": false,
        "typeAnnotation": null,
        "start": 441,
        "end": 446
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
              "name": "value",
              "optional": false,
              "typeAnnotation": null,
              "start": 450,
              "end": 455
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeQuery",
                "exprName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "val",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 464,
                  "end": 467
                },
                "typeArguments": null,
                "start": 457,
                "end": 467
              },
              "start": 455,
              "end": 467
            },
            "accessibility": null,
            "static": false,
            "start": 450,
            "end": 467
          }
        ],
        "start": 449,
        "end": 468
      },
      "declare": false,
      "start": 436,
      "end": 468
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "decorateD",
        "optional": false,
        "typeAnnotation": null,
        "start": 478,
        "end": 487
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
              "name": "O",
              "optional": false,
              "typeAnnotation": null,
              "start": 488,
              "end": 489
            },
            "constraint": {
              "type": "TSAnyKeyword",
              "start": 498,
              "end": 501
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 488,
            "end": 501
          }
        ],
        "start": 487,
        "end": 502
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
              "type": "TSFunctionType",
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "first",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "First",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 515,
                        "end": 520
                      },
                      "typeArguments": null,
                      "start": 515,
                      "end": 520
                    },
                    "start": 513,
                    "end": 520
                  },
                  "start": 508,
                  "end": 520
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "O",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 525,
                    "end": 526
                  },
                  "typeArguments": null,
                  "start": 525,
                  "end": 526
                },
                "start": 522,
                "end": 526
              },
              "start": 507,
              "end": 526
            },
            "start": 505,
            "end": 526
          },
          "start": 503,
          "end": 526
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "ArrowFunctionExpression",
              "expression": true,
              "async": false,
              "typeParameters": null,
              "params": [],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "O",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 545,
                    "end": 546
                  },
                  "typeArguments": null,
                  "start": 545,
                  "end": 546
                },
                "start": 543,
                "end": 546
              },
              "body": {
                "type": "CallExpression",
                "callee": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "fn",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 550,
                  "end": 552
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
                          "name": "value",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 554,
                          "end": 559
                        },
                        "value": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "val",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 561,
                          "end": 564
                        },
                        "method": false,
                        "shorthand": false,
                        "computed": false,
                        "optional": false,
                        "start": 554,
                        "end": 564
                      }
                    ],
                    "start": 553,
                    "end": 565
                  }
                ],
                "optional": false,
                "start": 550,
                "end": 566
              },
              "id": null,
              "generator": false,
              "start": 541,
              "end": 566
            },
            "start": 534,
            "end": 566
          }
        ],
        "start": 528,
        "end": 568
      },
      "expression": false,
      "start": 469,
      "end": 568
    },
    {
      "type": "VariableDeclaration",
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "d",
            "optional": false,
            "typeAnnotation": null,
            "start": 573,
            "end": 574
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "decorateD",
              "optional": false,
              "typeAnnotation": null,
              "start": 577,
              "end": 586
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
                    "type": "ObjectPattern",
                    "decorators": [],
                    "properties": [
                      {
                        "type": "Property",
                        "kind": "init",
                        "key": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "value",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 589,
                          "end": 594
                        },
                        "value": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "value",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 589,
                          "end": 594
                        },
                        "method": false,
                        "shorthand": true,
                        "computed": false,
                        "optional": false,
                        "start": 589,
                        "end": 594
                      }
                    ],
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 588,
                    "end": 595
                  }
                ],
                "returnType": null,
                "body": {
                  "type": "Literal",
                  "value": 5,
                  "raw": "5",
                  "start": 600,
                  "end": 601
                },
                "id": null,
                "generator": false,
                "start": 587,
                "end": 601
              }
            ],
            "optional": false,
            "start": 577,
            "end": 602
          },
          "definite": false,
          "start": 573,
          "end": 602
        }
      ],
      "declare": false,
      "start": 569,
      "end": 602
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 602
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "let",
    "start": 0,
    "end": 3
  },
  {
    "type": "Identifier",
    "value": "val",
    "start": 4,
    "end": 7
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 8,
    "end": 9
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 10,
    "end": 11
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 13,
    "end": 21
  },
  {
    "type": "Identifier",
    "value": "decorateA",
    "start": 22,
    "end": 31
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 31,
    "end": 32
  },
  {
    "type": "Identifier",
    "value": "O",
    "start": 32,
    "end": 33
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 34,
    "end": 41
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 42,
    "end": 45
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 45,
    "end": 46
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 46,
    "end": 47
  },
  {
    "type": "Identifier",
    "value": "fn",
    "start": 47,
    "end": 49
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 49,
    "end": 50
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 51,
    "end": 52
  },
  {
    "type": "Identifier",
    "value": "first",
    "start": 52,
    "end": 57
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 57,
    "end": 58
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 59,
    "end": 60
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 60,
    "end": 65
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 65,
    "end": 66
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 67,
    "end": 73
  },
  {
    "type": "Identifier",
    "value": "val",
    "start": 74,
    "end": 77
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 77,
    "end": 78
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 78,
    "end": 79
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 80,
    "end": 82
  },
  {
    "type": "Identifier",
    "value": "O",
    "start": 83,
    "end": 84
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 84,
    "end": 85
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 86,
    "end": 87
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 92,
    "end": 98
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 99,
    "end": 100
  },
  {
    "type": "Punctuator",
    "value": ")",
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
    "value": "O",
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
    "value": "fn",
    "start": 108,
    "end": 110
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 110,
    "end": 111
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 111,
    "end": 112
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 112,
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
    "value": "val",
    "start": 119,
    "end": 122
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 122,
    "end": 123
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 123,
    "end": 124
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 125,
    "end": 126
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 127,
    "end": 130
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 131,
    "end": 132
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 133,
    "end": 134
  },
  {
    "type": "Identifier",
    "value": "decorateA",
    "start": 135,
    "end": 144
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 144,
    "end": 145
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 145,
    "end": 146
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 146,
    "end": 147
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 147,
    "end": 152
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 152,
    "end": 153
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 153,
    "end": 154
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 155,
    "end": 157
  },
  {
    "type": "Numeric",
    "value": "5",
    "start": 158,
    "end": 159
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 159,
    "end": 160
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 162,
    "end": 170
  },
  {
    "type": "Identifier",
    "value": "decorateB",
    "start": 171,
    "end": 180
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 180,
    "end": 181
  },
  {
    "type": "Identifier",
    "value": "O",
    "start": 181,
    "end": 182
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 183,
    "end": 190
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 191,
    "end": 194
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 194,
    "end": 195
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 195,
    "end": 196
  },
  {
    "type": "Identifier",
    "value": "fn",
    "start": 196,
    "end": 198
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 198,
    "end": 199
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 200,
    "end": 201
  },
  {
    "type": "Identifier",
    "value": "first",
    "start": 201,
    "end": 206
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 206,
    "end": 207
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 208,
    "end": 214
  },
  {
    "type": "Identifier",
    "value": "val",
    "start": 215,
    "end": 218
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 218,
    "end": 219
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 220,
    "end": 222
  },
  {
    "type": "Identifier",
    "value": "O",
    "start": 223,
    "end": 224
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 224,
    "end": 225
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 226,
    "end": 227
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 232,
    "end": 238
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 239,
    "end": 240
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 240,
    "end": 241
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 241,
    "end": 242
  },
  {
    "type": "Identifier",
    "value": "O",
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
    "value": "fn",
    "start": 248,
    "end": 250
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 250,
    "end": 251
  },
  {
    "type": "Identifier",
    "value": "val",
    "start": 251,
    "end": 254
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 254,
    "end": 255
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 256,
    "end": 257
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 258,
    "end": 261
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 262,
    "end": 263
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 264,
    "end": 265
  },
  {
    "type": "Identifier",
    "value": "decorateB",
    "start": 266,
    "end": 275
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 275,
    "end": 276
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 276,
    "end": 277
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 277,
    "end": 282
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 282,
    "end": 283
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 284,
    "end": 286
  },
  {
    "type": "Numeric",
    "value": "5",
    "start": 287,
    "end": 288
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 288,
    "end": 289
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 291,
    "end": 299
  },
  {
    "type": "Identifier",
    "value": "decorateC",
    "start": 300,
    "end": 309
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 309,
    "end": 310
  },
  {
    "type": "Identifier",
    "value": "O",
    "start": 310,
    "end": 311
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 312,
    "end": 319
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 320,
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
    "value": "(",
    "start": 324,
    "end": 325
  },
  {
    "type": "Identifier",
    "value": "fn",
    "start": 325,
    "end": 327
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 327,
    "end": 328
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 329,
    "end": 330
  },
  {
    "type": "Identifier",
    "value": "first",
    "start": 330,
    "end": 335
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 335,
    "end": 336
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 337,
    "end": 338
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 338,
    "end": 343
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 343,
    "end": 344
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 345,
    "end": 351
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 351,
    "end": 352
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 352,
    "end": 353
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 354,
    "end": 356
  },
  {
    "type": "Identifier",
    "value": "O",
    "start": 357,
    "end": 358
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 358,
    "end": 359
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 360,
    "end": 361
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 366,
    "end": 372
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 373,
    "end": 374
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 374,
    "end": 375
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 375,
    "end": 376
  },
  {
    "type": "Identifier",
    "value": "O",
    "start": 377,
    "end": 378
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 379,
    "end": 381
  },
  {
    "type": "Identifier",
    "value": "fn",
    "start": 382,
    "end": 384
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 384,
    "end": 385
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 385,
    "end": 386
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 386,
    "end": 391
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 391,
    "end": 392
  },
  {
    "type": "Identifier",
    "value": "val",
    "start": 393,
    "end": 396
  },
  {
    "type": "Punctuator",
    "value": "}",
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
    "value": "}",
    "start": 399,
    "end": 400
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 401,
    "end": 404
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 405,
    "end": 406
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 407,
    "end": 408
  },
  {
    "type": "Identifier",
    "value": "decorateC",
    "start": 409,
    "end": 418
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 418,
    "end": 419
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 419,
    "end": 420
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 420,
    "end": 421
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 421,
    "end": 426
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 426,
    "end": 427
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 427,
    "end": 428
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 429,
    "end": 431
  },
  {
    "type": "Numeric",
    "value": "5",
    "start": 432,
    "end": 433
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 433,
    "end": 434
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 436,
    "end": 440
  },
  {
    "type": "Identifier",
    "value": "First",
    "start": 441,
    "end": 446
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 447,
    "end": 448
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 449,
    "end": 450
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 450,
    "end": 455
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 455,
    "end": 456
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 457,
    "end": 463
  },
  {
    "type": "Identifier",
    "value": "val",
    "start": 464,
    "end": 467
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 467,
    "end": 468
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 469,
    "end": 477
  },
  {
    "type": "Identifier",
    "value": "decorateD",
    "start": 478,
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
    "value": "O",
    "start": 488,
    "end": 489
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 490,
    "end": 497
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 498,
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
    "value": "(",
    "start": 502,
    "end": 503
  },
  {
    "type": "Identifier",
    "value": "fn",
    "start": 503,
    "end": 505
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 505,
    "end": 506
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 507,
    "end": 508
  },
  {
    "type": "Identifier",
    "value": "first",
    "start": 508,
    "end": 513
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 513,
    "end": 514
  },
  {
    "type": "Identifier",
    "value": "First",
    "start": 515,
    "end": 520
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 520,
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
    "value": "O",
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
    "value": "{",
    "start": 528,
    "end": 529
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 534,
    "end": 540
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 541,
    "end": 542
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 542,
    "end": 543
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 543,
    "end": 544
  },
  {
    "type": "Identifier",
    "value": "O",
    "start": 545,
    "end": 546
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 547,
    "end": 549
  },
  {
    "type": "Identifier",
    "value": "fn",
    "start": 550,
    "end": 552
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 552,
    "end": 553
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 553,
    "end": 554
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 554,
    "end": 559
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 559,
    "end": 560
  },
  {
    "type": "Identifier",
    "value": "val",
    "start": 561,
    "end": 564
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 564,
    "end": 565
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 565,
    "end": 566
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 567,
    "end": 568
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 569,
    "end": 572
  },
  {
    "type": "Identifier",
    "value": "d",
    "start": 573,
    "end": 574
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 575,
    "end": 576
  },
  {
    "type": "Identifier",
    "value": "decorateD",
    "start": 577,
    "end": 586
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 586,
    "end": 587
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 587,
    "end": 588
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 588,
    "end": 589
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 589,
    "end": 594
  },
  {
    "type": "Punctuator",
    "value": "}",
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
    "value": "=>",
    "start": 597,
    "end": 599
  },
  {
    "type": "Numeric",
    "value": "5",
    "start": 600,
    "end": 601
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 601,
    "end": 602
  }
]
```
