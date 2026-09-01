__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "Literal",
        "value": "use strict",
        "raw": "'use strict'",
        "start": 0,
        "end": 12
      },
      "directive": "use strict",
      "start": 0,
      "end": 12
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "use",
        "optional": false,
        "typeAnnotation": null,
        "start": 31,
        "end": 34
      },
      "generator": false,
      "async": false,
      "declare": true,
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
              "type": "TSAnyKeyword",
              "start": 38,
              "end": 41
            },
            "start": 36,
            "end": 41
          },
          "start": 35,
          "end": 41
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 14,
      "end": 43
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
            "typeAnnotation": null,
            "start": 49,
            "end": 50
          },
          "init": {
            "type": "Literal",
            "value": 10,
            "raw": "10",
            "start": 53,
            "end": 55
          },
          "definite": false,
          "start": 49,
          "end": 55
        }
      ],
      "declare": false,
      "start": 45,
      "end": 56
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
            "name": "y",
            "optional": false,
            "typeAnnotation": null,
            "start": 61,
            "end": 62
          },
          "init": null,
          "definite": false,
          "start": 61,
          "end": 62
        }
      ],
      "declare": false,
      "start": 57,
      "end": 63
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
            "typeAnnotation": null,
            "start": 68,
            "end": 69
          },
          "init": null,
          "definite": false,
          "start": 68,
          "end": 69
        }
      ],
      "declare": false,
      "start": 64,
      "end": 70
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "use",
          "optional": false,
          "typeAnnotation": null,
          "start": 71,
          "end": 74
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null,
            "start": 75,
            "end": 76
          }
        ],
        "optional": false,
        "start": 71,
        "end": 77
      },
      "directive": null,
      "start": 71,
      "end": 78
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "use",
          "optional": false,
          "typeAnnotation": null,
          "start": 79,
          "end": 82
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "y",
            "optional": false,
            "typeAnnotation": null,
            "start": 83,
            "end": 84
          }
        ],
        "optional": false,
        "start": 79,
        "end": 85
      },
      "directive": null,
      "start": 79,
      "end": 86
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "use",
          "optional": false,
          "typeAnnotation": null,
          "start": 87,
          "end": 90
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "z",
            "optional": false,
            "typeAnnotation": null,
            "start": 91,
            "end": 92
          }
        ],
        "optional": false,
        "start": 87,
        "end": 93
      },
      "directive": null,
      "start": 87,
      "end": 94
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo1",
        "optional": false,
        "typeAnnotation": null,
        "start": 104,
        "end": 108
      },
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
            "type": "VariableDeclaration",
            "kind": "let",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 121,
                  "end": 122
                },
                "init": {
                  "type": "Literal",
                  "value": 1,
                  "raw": "1",
                  "start": 125,
                  "end": 126
                },
                "definite": false,
                "start": 121,
                "end": 126
              }
            ],
            "declare": false,
            "start": 117,
            "end": 127
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "CallExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "use",
                "optional": false,
                "typeAnnotation": null,
                "start": 132,
                "end": 135
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 136,
                  "end": 137
                }
              ],
              "optional": false,
              "start": 132,
              "end": 138
            },
            "directive": null,
            "start": 132,
            "end": 139
          },
          {
            "type": "VariableDeclaration",
            "kind": "let",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "ArrayPattern",
                  "decorators": [],
                  "elements": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "y",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 149,
                      "end": 150
                    }
                  ],
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 148,
                  "end": 151
                },
                "init": {
                  "type": "ArrayExpression",
                  "elements": [
                    {
                      "type": "Literal",
                      "value": 1,
                      "raw": "1",
                      "start": 155,
                      "end": 156
                    }
                  ],
                  "start": 154,
                  "end": 157
                },
                "definite": false,
                "start": 148,
                "end": 157
              }
            ],
            "declare": false,
            "start": 144,
            "end": 158
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "CallExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "use",
                "optional": false,
                "typeAnnotation": null,
                "start": 163,
                "end": 166
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "y",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 167,
                  "end": 168
                }
              ],
              "optional": false,
              "start": 163,
              "end": 169
            },
            "directive": null,
            "start": 163,
            "end": 170
          },
          {
            "type": "VariableDeclaration",
            "kind": "let",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "ObjectPattern",
                  "decorators": [],
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
                        "start": 180,
                        "end": 181
                      },
                      "value": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "z",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 183,
                        "end": 184
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "optional": false,
                      "start": 180,
                      "end": 184
                    }
                  ],
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 179,
                  "end": 185
                },
                "init": {
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
                        "start": 189,
                        "end": 190
                      },
                      "value": {
                        "type": "Literal",
                        "value": 1,
                        "raw": "1",
                        "start": 192,
                        "end": 193
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "optional": false,
                      "start": 189,
                      "end": 193
                    }
                  ],
                  "start": 188,
                  "end": 194
                },
                "definite": false,
                "start": 179,
                "end": 194
              }
            ],
            "declare": false,
            "start": 175,
            "end": 195
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "CallExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "use",
                "optional": false,
                "typeAnnotation": null,
                "start": 200,
                "end": 203
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "z",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 204,
                  "end": 205
                }
              ],
              "optional": false,
              "start": 200,
              "end": 206
            },
            "directive": null,
            "start": 200,
            "end": 207
          }
        ],
        "start": 111,
        "end": 209
      },
      "expression": false,
      "start": 95,
      "end": 209
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo2",
        "optional": false,
        "typeAnnotation": null,
        "start": 220,
        "end": 224
      },
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
            "type": "BlockStatement",
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
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 247,
                      "end": 248
                    },
                    "init": {
                      "type": "Literal",
                      "value": 1,
                      "raw": "1",
                      "start": 251,
                      "end": 252
                    },
                    "definite": false,
                    "start": 247,
                    "end": 252
                  }
                ],
                "declare": false,
                "start": 243,
                "end": 253
              },
              {
                "type": "ExpressionStatement",
                "expression": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "use",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 262,
                    "end": 265
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 266,
                      "end": 267
                    }
                  ],
                  "optional": false,
                  "start": 262,
                  "end": 268
                },
                "directive": null,
                "start": 262,
                "end": 269
              },
              {
                "type": "VariableDeclaration",
                "kind": "let",
                "declarations": [
                  {
                    "type": "VariableDeclarator",
                    "id": {
                      "type": "ArrayPattern",
                      "decorators": [],
                      "elements": [
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "y",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 283,
                          "end": 284
                        }
                      ],
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 282,
                      "end": 285
                    },
                    "init": {
                      "type": "ArrayExpression",
                      "elements": [
                        {
                          "type": "Literal",
                          "value": 1,
                          "raw": "1",
                          "start": 289,
                          "end": 290
                        }
                      ],
                      "start": 288,
                      "end": 291
                    },
                    "definite": false,
                    "start": 282,
                    "end": 291
                  }
                ],
                "declare": false,
                "start": 278,
                "end": 292
              },
              {
                "type": "ExpressionStatement",
                "expression": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "use",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 301,
                    "end": 304
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "y",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 305,
                      "end": 306
                    }
                  ],
                  "optional": false,
                  "start": 301,
                  "end": 307
                },
                "directive": null,
                "start": 301,
                "end": 308
              },
              {
                "type": "VariableDeclaration",
                "kind": "let",
                "declarations": [
                  {
                    "type": "VariableDeclarator",
                    "id": {
                      "type": "ObjectPattern",
                      "decorators": [],
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
                            "start": 322,
                            "end": 323
                          },
                          "value": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "z",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 325,
                            "end": 326
                          },
                          "method": false,
                          "shorthand": false,
                          "computed": false,
                          "optional": false,
                          "start": 322,
                          "end": 326
                        }
                      ],
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 321,
                      "end": 327
                    },
                    "init": {
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
                            "start": 332,
                            "end": 333
                          },
                          "value": {
                            "type": "Literal",
                            "value": 1,
                            "raw": "1",
                            "start": 335,
                            "end": 336
                          },
                          "method": false,
                          "shorthand": false,
                          "computed": false,
                          "optional": false,
                          "start": 332,
                          "end": 336
                        }
                      ],
                      "start": 330,
                      "end": 338
                    },
                    "definite": false,
                    "start": 321,
                    "end": 338
                  }
                ],
                "declare": false,
                "start": 317,
                "end": 339
              },
              {
                "type": "ExpressionStatement",
                "expression": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "use",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 348,
                    "end": 351
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "z",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 352,
                      "end": 353
                    }
                  ],
                  "optional": false,
                  "start": 348,
                  "end": 354
                },
                "directive": null,
                "start": 348,
                "end": 355
              }
            ],
            "start": 233,
            "end": 361
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "CallExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "use",
                "optional": false,
                "typeAnnotation": null,
                "start": 366,
                "end": 369
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 370,
                  "end": 371
                }
              ],
              "optional": false,
              "start": 366,
              "end": 372
            },
            "directive": null,
            "start": 366,
            "end": 373
          }
        ],
        "start": 227,
        "end": 375
      },
      "expression": false,
      "start": 211,
      "end": 375
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "A",
        "optional": false,
        "typeAnnotation": null,
        "start": 383,
        "end": 384
      },
      "typeParameters": null,
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
              "name": "m1",
              "optional": false,
              "typeAnnotation": null,
              "start": 391,
              "end": 393
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
                    "type": "VariableDeclaration",
                    "kind": "let",
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "id": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 410,
                          "end": 411
                        },
                        "init": {
                          "type": "Literal",
                          "value": 1,
                          "raw": "1",
                          "start": 414,
                          "end": 415
                        },
                        "definite": false,
                        "start": 410,
                        "end": 415
                      }
                    ],
                    "declare": false,
                    "start": 406,
                    "end": 416
                  },
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "CallExpression",
                      "callee": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "use",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 425,
                        "end": 428
                      },
                      "typeArguments": null,
                      "arguments": [
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 429,
                          "end": 430
                        }
                      ],
                      "optional": false,
                      "start": 425,
                      "end": 431
                    },
                    "directive": null,
                    "start": 425,
                    "end": 432
                  },
                  {
                    "type": "VariableDeclaration",
                    "kind": "let",
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "id": {
                          "type": "ArrayPattern",
                          "decorators": [],
                          "elements": [
                            {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "y",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 446,
                              "end": 447
                            }
                          ],
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 445,
                          "end": 448
                        },
                        "init": {
                          "type": "ArrayExpression",
                          "elements": [
                            {
                              "type": "Literal",
                              "value": 1,
                              "raw": "1",
                              "start": 452,
                              "end": 453
                            }
                          ],
                          "start": 451,
                          "end": 454
                        },
                        "definite": false,
                        "start": 445,
                        "end": 454
                      }
                    ],
                    "declare": false,
                    "start": 441,
                    "end": 455
                  },
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "CallExpression",
                      "callee": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "use",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 464,
                        "end": 467
                      },
                      "typeArguments": null,
                      "arguments": [
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "y",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 468,
                          "end": 469
                        }
                      ],
                      "optional": false,
                      "start": 464,
                      "end": 470
                    },
                    "directive": null,
                    "start": 464,
                    "end": 471
                  },
                  {
                    "type": "VariableDeclaration",
                    "kind": "let",
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "id": {
                          "type": "ObjectPattern",
                          "decorators": [],
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
                                "start": 485,
                                "end": 486
                              },
                              "value": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "z",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 488,
                                "end": 489
                              },
                              "method": false,
                              "shorthand": false,
                              "computed": false,
                              "optional": false,
                              "start": 485,
                              "end": 489
                            }
                          ],
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 484,
                          "end": 490
                        },
                        "init": {
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
                                "start": 495,
                                "end": 496
                              },
                              "value": {
                                "type": "Literal",
                                "value": 1,
                                "raw": "1",
                                "start": 498,
                                "end": 499
                              },
                              "method": false,
                              "shorthand": false,
                              "computed": false,
                              "optional": false,
                              "start": 495,
                              "end": 499
                            }
                          ],
                          "start": 493,
                          "end": 501
                        },
                        "definite": false,
                        "start": 484,
                        "end": 501
                      }
                    ],
                    "declare": false,
                    "start": 480,
                    "end": 502
                  },
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "CallExpression",
                      "callee": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "use",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 511,
                        "end": 514
                      },
                      "typeArguments": null,
                      "arguments": [
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "z",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 515,
                          "end": 516
                        }
                      ],
                      "optional": false,
                      "start": 511,
                      "end": 517
                    },
                    "directive": null,
                    "start": 511,
                    "end": 518
                  }
                ],
                "start": 396,
                "end": 524
              },
              "expression": false,
              "start": 393,
              "end": 524
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 391,
            "end": 524
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "m2",
              "optional": false,
              "typeAnnotation": null,
              "start": 529,
              "end": 531
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
                    "type": "BlockStatement",
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
                              "name": "x",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 562,
                              "end": 563
                            },
                            "init": {
                              "type": "Literal",
                              "value": 1,
                              "raw": "1",
                              "start": 566,
                              "end": 567
                            },
                            "definite": false,
                            "start": 562,
                            "end": 567
                          }
                        ],
                        "declare": false,
                        "start": 558,
                        "end": 568
                      },
                      {
                        "type": "ExpressionStatement",
                        "expression": {
                          "type": "CallExpression",
                          "callee": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "use",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 581,
                            "end": 584
                          },
                          "typeArguments": null,
                          "arguments": [
                            {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "x",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 585,
                              "end": 586
                            }
                          ],
                          "optional": false,
                          "start": 581,
                          "end": 587
                        },
                        "directive": null,
                        "start": 581,
                        "end": 588
                      },
                      {
                        "type": "VariableDeclaration",
                        "kind": "let",
                        "declarations": [
                          {
                            "type": "VariableDeclarator",
                            "id": {
                              "type": "ArrayPattern",
                              "decorators": [],
                              "elements": [
                                {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "y",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 606,
                                  "end": 607
                                }
                              ],
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 605,
                              "end": 608
                            },
                            "init": {
                              "type": "ArrayExpression",
                              "elements": [
                                {
                                  "type": "Literal",
                                  "value": 1,
                                  "raw": "1",
                                  "start": 612,
                                  "end": 613
                                }
                              ],
                              "start": 611,
                              "end": 614
                            },
                            "definite": false,
                            "start": 605,
                            "end": 614
                          }
                        ],
                        "declare": false,
                        "start": 601,
                        "end": 615
                      },
                      {
                        "type": "ExpressionStatement",
                        "expression": {
                          "type": "CallExpression",
                          "callee": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "use",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 628,
                            "end": 631
                          },
                          "typeArguments": null,
                          "arguments": [
                            {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "y",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 632,
                              "end": 633
                            }
                          ],
                          "optional": false,
                          "start": 628,
                          "end": 634
                        },
                        "directive": null,
                        "start": 628,
                        "end": 635
                      },
                      {
                        "type": "VariableDeclaration",
                        "kind": "let",
                        "declarations": [
                          {
                            "type": "VariableDeclarator",
                            "id": {
                              "type": "ObjectPattern",
                              "decorators": [],
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
                                    "start": 653,
                                    "end": 654
                                  },
                                  "value": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "z",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 656,
                                    "end": 657
                                  },
                                  "method": false,
                                  "shorthand": false,
                                  "computed": false,
                                  "optional": false,
                                  "start": 653,
                                  "end": 657
                                }
                              ],
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 652,
                              "end": 658
                            },
                            "init": {
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
                                    "start": 663,
                                    "end": 664
                                  },
                                  "value": {
                                    "type": "Literal",
                                    "value": 1,
                                    "raw": "1",
                                    "start": 666,
                                    "end": 667
                                  },
                                  "method": false,
                                  "shorthand": false,
                                  "computed": false,
                                  "optional": false,
                                  "start": 663,
                                  "end": 667
                                }
                              ],
                              "start": 661,
                              "end": 669
                            },
                            "definite": false,
                            "start": 652,
                            "end": 669
                          }
                        ],
                        "declare": false,
                        "start": 648,
                        "end": 670
                      },
                      {
                        "type": "ExpressionStatement",
                        "expression": {
                          "type": "CallExpression",
                          "callee": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "use",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 683,
                            "end": 686
                          },
                          "typeArguments": null,
                          "arguments": [
                            {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "z",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 687,
                              "end": 688
                            }
                          ],
                          "optional": false,
                          "start": 683,
                          "end": 689
                        },
                        "directive": null,
                        "start": 683,
                        "end": 690
                      }
                    ],
                    "start": 544,
                    "end": 700
                  },
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "CallExpression",
                      "callee": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "use",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 709,
                        "end": 712
                      },
                      "typeArguments": null,
                      "arguments": [
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 713,
                          "end": 714
                        }
                      ],
                      "optional": false,
                      "start": 709,
                      "end": 715
                    },
                    "directive": null,
                    "start": 709,
                    "end": 716
                  }
                ],
                "start": 534,
                "end": 722
              },
              "expression": false,
              "start": 531,
              "end": 722
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 529,
            "end": 722
          }
        ],
        "start": 385,
        "end": 725
      },
      "abstract": false,
      "declare": false,
      "start": 377,
      "end": 725
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "B",
        "optional": false,
        "typeAnnotation": null,
        "start": 733,
        "end": 734
      },
      "typeParameters": null,
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
              "name": "m1",
              "optional": false,
              "typeAnnotation": null,
              "start": 741,
              "end": 743
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
                          "start": 762,
                          "end": 763
                        },
                        "init": {
                          "type": "Literal",
                          "value": 1,
                          "raw": "1",
                          "start": 766,
                          "end": 767
                        },
                        "definite": false,
                        "start": 762,
                        "end": 767
                      }
                    ],
                    "declare": false,
                    "start": 756,
                    "end": 768
                  },
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "CallExpression",
                      "callee": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "use",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 777,
                        "end": 780
                      },
                      "typeArguments": null,
                      "arguments": [
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 781,
                          "end": 782
                        }
                      ],
                      "optional": false,
                      "start": 777,
                      "end": 783
                    },
                    "directive": null,
                    "start": 777,
                    "end": 784
                  },
                  {
                    "type": "VariableDeclaration",
                    "kind": "const",
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "id": {
                          "type": "ArrayPattern",
                          "decorators": [],
                          "elements": [
                            {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "y",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 800,
                              "end": 801
                            }
                          ],
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 799,
                          "end": 802
                        },
                        "init": {
                          "type": "ArrayExpression",
                          "elements": [
                            {
                              "type": "Literal",
                              "value": 1,
                              "raw": "1",
                              "start": 806,
                              "end": 807
                            }
                          ],
                          "start": 805,
                          "end": 808
                        },
                        "definite": false,
                        "start": 799,
                        "end": 808
                      }
                    ],
                    "declare": false,
                    "start": 793,
                    "end": 809
                  },
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "CallExpression",
                      "callee": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "use",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 818,
                        "end": 821
                      },
                      "typeArguments": null,
                      "arguments": [
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "y",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 822,
                          "end": 823
                        }
                      ],
                      "optional": false,
                      "start": 818,
                      "end": 824
                    },
                    "directive": null,
                    "start": 818,
                    "end": 825
                  },
                  {
                    "type": "VariableDeclaration",
                    "kind": "const",
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "id": {
                          "type": "ObjectPattern",
                          "decorators": [],
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
                                "start": 841,
                                "end": 842
                              },
                              "value": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "z",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 844,
                                "end": 845
                              },
                              "method": false,
                              "shorthand": false,
                              "computed": false,
                              "optional": false,
                              "start": 841,
                              "end": 845
                            }
                          ],
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 840,
                          "end": 846
                        },
                        "init": {
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
                                "start": 851,
                                "end": 852
                              },
                              "value": {
                                "type": "Literal",
                                "value": 1,
                                "raw": "1",
                                "start": 854,
                                "end": 855
                              },
                              "method": false,
                              "shorthand": false,
                              "computed": false,
                              "optional": false,
                              "start": 851,
                              "end": 855
                            }
                          ],
                          "start": 849,
                          "end": 857
                        },
                        "definite": false,
                        "start": 840,
                        "end": 857
                      }
                    ],
                    "declare": false,
                    "start": 834,
                    "end": 858
                  },
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "CallExpression",
                      "callee": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "use",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 867,
                        "end": 870
                      },
                      "typeArguments": null,
                      "arguments": [
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "z",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 871,
                          "end": 872
                        }
                      ],
                      "optional": false,
                      "start": 867,
                      "end": 873
                    },
                    "directive": null,
                    "start": 867,
                    "end": 874
                  }
                ],
                "start": 746,
                "end": 881
              },
              "expression": false,
              "start": 743,
              "end": 881
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 741,
            "end": 881
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "m2",
              "optional": false,
              "typeAnnotation": null,
              "start": 886,
              "end": 888
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
                              "start": 921,
                              "end": 922
                            },
                            "init": {
                              "type": "Literal",
                              "value": 1,
                              "raw": "1",
                              "start": 925,
                              "end": 926
                            },
                            "definite": false,
                            "start": 921,
                            "end": 926
                          }
                        ],
                        "declare": false,
                        "start": 915,
                        "end": 927
                      },
                      {
                        "type": "ExpressionStatement",
                        "expression": {
                          "type": "CallExpression",
                          "callee": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "use",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 940,
                            "end": 943
                          },
                          "typeArguments": null,
                          "arguments": [
                            {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "x",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 944,
                              "end": 945
                            }
                          ],
                          "optional": false,
                          "start": 940,
                          "end": 946
                        },
                        "directive": null,
                        "start": 940,
                        "end": 947
                      },
                      {
                        "type": "VariableDeclaration",
                        "kind": "const",
                        "declarations": [
                          {
                            "type": "VariableDeclarator",
                            "id": {
                              "type": "ArrayPattern",
                              "decorators": [],
                              "elements": [
                                {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "y",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 967,
                                  "end": 968
                                }
                              ],
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 966,
                              "end": 969
                            },
                            "init": {
                              "type": "ArrayExpression",
                              "elements": [
                                {
                                  "type": "Literal",
                                  "value": 1,
                                  "raw": "1",
                                  "start": 973,
                                  "end": 974
                                }
                              ],
                              "start": 972,
                              "end": 975
                            },
                            "definite": false,
                            "start": 966,
                            "end": 975
                          }
                        ],
                        "declare": false,
                        "start": 960,
                        "end": 976
                      },
                      {
                        "type": "ExpressionStatement",
                        "expression": {
                          "type": "CallExpression",
                          "callee": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "use",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 989,
                            "end": 992
                          },
                          "typeArguments": null,
                          "arguments": [
                            {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "y",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 993,
                              "end": 994
                            }
                          ],
                          "optional": false,
                          "start": 989,
                          "end": 995
                        },
                        "directive": null,
                        "start": 989,
                        "end": 996
                      },
                      {
                        "type": "VariableDeclaration",
                        "kind": "const",
                        "declarations": [
                          {
                            "type": "VariableDeclarator",
                            "id": {
                              "type": "ObjectPattern",
                              "decorators": [],
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
                                    "start": 1016,
                                    "end": 1017
                                  },
                                  "value": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "z",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 1019,
                                    "end": 1020
                                  },
                                  "method": false,
                                  "shorthand": false,
                                  "computed": false,
                                  "optional": false,
                                  "start": 1016,
                                  "end": 1020
                                }
                              ],
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 1015,
                              "end": 1021
                            },
                            "init": {
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
                                    "start": 1026,
                                    "end": 1027
                                  },
                                  "value": {
                                    "type": "Literal",
                                    "value": 1,
                                    "raw": "1",
                                    "start": 1029,
                                    "end": 1030
                                  },
                                  "method": false,
                                  "shorthand": false,
                                  "computed": false,
                                  "optional": false,
                                  "start": 1026,
                                  "end": 1030
                                }
                              ],
                              "start": 1024,
                              "end": 1032
                            },
                            "definite": false,
                            "start": 1015,
                            "end": 1032
                          }
                        ],
                        "declare": false,
                        "start": 1009,
                        "end": 1033
                      },
                      {
                        "type": "ExpressionStatement",
                        "expression": {
                          "type": "CallExpression",
                          "callee": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "use",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1046,
                            "end": 1049
                          },
                          "typeArguments": null,
                          "arguments": [
                            {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "z",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 1050,
                              "end": 1051
                            }
                          ],
                          "optional": false,
                          "start": 1046,
                          "end": 1052
                        },
                        "directive": null,
                        "start": 1046,
                        "end": 1053
                      }
                    ],
                    "start": 901,
                    "end": 1064
                  },
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "CallExpression",
                      "callee": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "use",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1073,
                        "end": 1076
                      },
                      "typeArguments": null,
                      "arguments": [
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1077,
                          "end": 1078
                        }
                      ],
                      "optional": false,
                      "start": 1073,
                      "end": 1079
                    },
                    "directive": null,
                    "start": 1073,
                    "end": 1080
                  }
                ],
                "start": 891,
                "end": 1086
              },
              "expression": false,
              "start": 888,
              "end": 1086
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 886,
            "end": 1086
          }
        ],
        "start": 735,
        "end": 1088
      },
      "abstract": false,
      "declare": false,
      "start": 727,
      "end": 1088
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "bar1",
        "optional": false,
        "typeAnnotation": null,
        "start": 1099,
        "end": 1103
      },
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
                  "start": 1118,
                  "end": 1119
                },
                "init": {
                  "type": "Literal",
                  "value": 1,
                  "raw": "1",
                  "start": 1122,
                  "end": 1123
                },
                "definite": false,
                "start": 1118,
                "end": 1123
              }
            ],
            "declare": false,
            "start": 1112,
            "end": 1124
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "CallExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "use",
                "optional": false,
                "typeAnnotation": null,
                "start": 1129,
                "end": 1132
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1133,
                  "end": 1134
                }
              ],
              "optional": false,
              "start": 1129,
              "end": 1135
            },
            "directive": null,
            "start": 1129,
            "end": 1136
          },
          {
            "type": "VariableDeclaration",
            "kind": "const",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "ArrayPattern",
                  "decorators": [],
                  "elements": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "y",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1148,
                      "end": 1149
                    }
                  ],
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1147,
                  "end": 1150
                },
                "init": {
                  "type": "ArrayExpression",
                  "elements": [
                    {
                      "type": "Literal",
                      "value": 1,
                      "raw": "1",
                      "start": 1154,
                      "end": 1155
                    }
                  ],
                  "start": 1153,
                  "end": 1156
                },
                "definite": false,
                "start": 1147,
                "end": 1156
              }
            ],
            "declare": false,
            "start": 1141,
            "end": 1157
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "CallExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "use",
                "optional": false,
                "typeAnnotation": null,
                "start": 1162,
                "end": 1165
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "y",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1166,
                  "end": 1167
                }
              ],
              "optional": false,
              "start": 1162,
              "end": 1168
            },
            "directive": null,
            "start": 1162,
            "end": 1169
          },
          {
            "type": "VariableDeclaration",
            "kind": "const",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "ObjectPattern",
                  "decorators": [],
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
                        "start": 1181,
                        "end": 1182
                      },
                      "value": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "z",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1184,
                        "end": 1185
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "optional": false,
                      "start": 1181,
                      "end": 1185
                    }
                  ],
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1180,
                  "end": 1186
                },
                "init": {
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
                        "start": 1191,
                        "end": 1192
                      },
                      "value": {
                        "type": "Literal",
                        "value": 1,
                        "raw": "1",
                        "start": 1194,
                        "end": 1195
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "optional": false,
                      "start": 1191,
                      "end": 1195
                    }
                  ],
                  "start": 1189,
                  "end": 1197
                },
                "definite": false,
                "start": 1180,
                "end": 1197
              }
            ],
            "declare": false,
            "start": 1174,
            "end": 1198
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "CallExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "use",
                "optional": false,
                "typeAnnotation": null,
                "start": 1203,
                "end": 1206
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "z",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1207,
                  "end": 1208
                }
              ],
              "optional": false,
              "start": 1203,
              "end": 1209
            },
            "directive": null,
            "start": 1203,
            "end": 1210
          }
        ],
        "start": 1106,
        "end": 1212
      },
      "expression": false,
      "start": 1090,
      "end": 1212
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "bar2",
        "optional": false,
        "typeAnnotation": null,
        "start": 1223,
        "end": 1227
      },
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
                      "start": 1252,
                      "end": 1253
                    },
                    "init": {
                      "type": "Literal",
                      "value": 1,
                      "raw": "1",
                      "start": 1256,
                      "end": 1257
                    },
                    "definite": false,
                    "start": 1252,
                    "end": 1257
                  }
                ],
                "declare": false,
                "start": 1246,
                "end": 1258
              },
              {
                "type": "ExpressionStatement",
                "expression": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "use",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1267,
                    "end": 1270
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1271,
                      "end": 1272
                    }
                  ],
                  "optional": false,
                  "start": 1267,
                  "end": 1273
                },
                "directive": null,
                "start": 1267,
                "end": 1274
              },
              {
                "type": "VariableDeclaration",
                "kind": "const",
                "declarations": [
                  {
                    "type": "VariableDeclarator",
                    "id": {
                      "type": "ArrayPattern",
                      "decorators": [],
                      "elements": [
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "y",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1290,
                          "end": 1291
                        }
                      ],
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1289,
                      "end": 1292
                    },
                    "init": {
                      "type": "ArrayExpression",
                      "elements": [
                        {
                          "type": "Literal",
                          "value": 1,
                          "raw": "1",
                          "start": 1296,
                          "end": 1297
                        }
                      ],
                      "start": 1295,
                      "end": 1298
                    },
                    "definite": false,
                    "start": 1289,
                    "end": 1298
                  }
                ],
                "declare": false,
                "start": 1283,
                "end": 1299
              },
              {
                "type": "ExpressionStatement",
                "expression": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "use",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1308,
                    "end": 1311
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "y",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1312,
                      "end": 1313
                    }
                  ],
                  "optional": false,
                  "start": 1308,
                  "end": 1314
                },
                "directive": null,
                "start": 1308,
                "end": 1315
              },
              {
                "type": "VariableDeclaration",
                "kind": "const",
                "declarations": [
                  {
                    "type": "VariableDeclarator",
                    "id": {
                      "type": "ObjectPattern",
                      "decorators": [],
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
                            "start": 1331,
                            "end": 1332
                          },
                          "value": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "z",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1334,
                            "end": 1335
                          },
                          "method": false,
                          "shorthand": false,
                          "computed": false,
                          "optional": false,
                          "start": 1331,
                          "end": 1335
                        }
                      ],
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1330,
                      "end": 1336
                    },
                    "init": {
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
                            "start": 1341,
                            "end": 1342
                          },
                          "value": {
                            "type": "Literal",
                            "value": 1,
                            "raw": "1",
                            "start": 1344,
                            "end": 1345
                          },
                          "method": false,
                          "shorthand": false,
                          "computed": false,
                          "optional": false,
                          "start": 1341,
                          "end": 1345
                        }
                      ],
                      "start": 1339,
                      "end": 1347
                    },
                    "definite": false,
                    "start": 1330,
                    "end": 1347
                  }
                ],
                "declare": false,
                "start": 1324,
                "end": 1348
              },
              {
                "type": "ExpressionStatement",
                "expression": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "use",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1357,
                    "end": 1360
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "z",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1361,
                      "end": 1362
                    }
                  ],
                  "optional": false,
                  "start": 1357,
                  "end": 1363
                },
                "directive": null,
                "start": 1357,
                "end": 1364
              }
            ],
            "start": 1236,
            "end": 1371
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "CallExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "use",
                "optional": false,
                "typeAnnotation": null,
                "start": 1376,
                "end": 1379
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1380,
                  "end": 1381
                }
              ],
              "optional": false,
              "start": 1376,
              "end": 1382
            },
            "directive": null,
            "start": 1376,
            "end": 1383
          }
        ],
        "start": 1230,
        "end": 1385
      },
      "expression": false,
      "start": 1214,
      "end": 1385
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "M1",
        "optional": false,
        "typeAnnotation": null,
        "start": 1397,
        "end": 1399
      },
      "body": {
        "type": "TSModuleBlock",
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
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1410,
                  "end": 1411
                },
                "init": {
                  "type": "Literal",
                  "value": 1,
                  "raw": "1",
                  "start": 1414,
                  "end": 1415
                },
                "definite": false,
                "start": 1410,
                "end": 1415
              }
            ],
            "declare": false,
            "start": 1406,
            "end": 1416
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "CallExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "use",
                "optional": false,
                "typeAnnotation": null,
                "start": 1421,
                "end": 1424
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1425,
                  "end": 1426
                }
              ],
              "optional": false,
              "start": 1421,
              "end": 1427
            },
            "directive": null,
            "start": 1421,
            "end": 1428
          },
          {
            "type": "VariableDeclaration",
            "kind": "let",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "ArrayPattern",
                  "decorators": [],
                  "elements": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "y",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1438,
                      "end": 1439
                    }
                  ],
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1437,
                  "end": 1440
                },
                "init": {
                  "type": "ArrayExpression",
                  "elements": [
                    {
                      "type": "Literal",
                      "value": 1,
                      "raw": "1",
                      "start": 1444,
                      "end": 1445
                    }
                  ],
                  "start": 1443,
                  "end": 1446
                },
                "definite": false,
                "start": 1437,
                "end": 1446
              }
            ],
            "declare": false,
            "start": 1433,
            "end": 1447
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "CallExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "use",
                "optional": false,
                "typeAnnotation": null,
                "start": 1452,
                "end": 1455
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "y",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1456,
                  "end": 1457
                }
              ],
              "optional": false,
              "start": 1452,
              "end": 1458
            },
            "directive": null,
            "start": 1452,
            "end": 1459
          },
          {
            "type": "VariableDeclaration",
            "kind": "let",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "ObjectPattern",
                  "decorators": [],
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
                        "start": 1469,
                        "end": 1470
                      },
                      "value": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "z",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1472,
                        "end": 1473
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "optional": false,
                      "start": 1469,
                      "end": 1473
                    }
                  ],
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1468,
                  "end": 1474
                },
                "init": {
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
                        "start": 1479,
                        "end": 1480
                      },
                      "value": {
                        "type": "Literal",
                        "value": 1,
                        "raw": "1",
                        "start": 1482,
                        "end": 1483
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "optional": false,
                      "start": 1479,
                      "end": 1483
                    }
                  ],
                  "start": 1477,
                  "end": 1485
                },
                "definite": false,
                "start": 1468,
                "end": 1485
              }
            ],
            "declare": false,
            "start": 1464,
            "end": 1486
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "CallExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "use",
                "optional": false,
                "typeAnnotation": null,
                "start": 1491,
                "end": 1494
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "z",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1495,
                  "end": 1496
                }
              ],
              "optional": false,
              "start": 1491,
              "end": 1497
            },
            "directive": null,
            "start": 1491,
            "end": 1498
          }
        ],
        "start": 1400,
        "end": 1500
      },
      "kind": "namespace",
      "declare": false,
      "global": false,
      "start": 1387,
      "end": 1500
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "M2",
        "optional": false,
        "typeAnnotation": null,
        "start": 1512,
        "end": 1514
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "BlockStatement",
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
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1535,
                      "end": 1536
                    },
                    "init": {
                      "type": "Literal",
                      "value": 1,
                      "raw": "1",
                      "start": 1539,
                      "end": 1540
                    },
                    "definite": false,
                    "start": 1535,
                    "end": 1540
                  }
                ],
                "declare": false,
                "start": 1531,
                "end": 1541
              },
              {
                "type": "ExpressionStatement",
                "expression": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "use",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1550,
                    "end": 1553
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1554,
                      "end": 1555
                    }
                  ],
                  "optional": false,
                  "start": 1550,
                  "end": 1556
                },
                "directive": null,
                "start": 1550,
                "end": 1557
              },
              {
                "type": "VariableDeclaration",
                "kind": "let",
                "declarations": [
                  {
                    "type": "VariableDeclarator",
                    "id": {
                      "type": "ArrayPattern",
                      "decorators": [],
                      "elements": [
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "y",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1571,
                          "end": 1572
                        }
                      ],
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1570,
                      "end": 1573
                    },
                    "init": {
                      "type": "ArrayExpression",
                      "elements": [
                        {
                          "type": "Literal",
                          "value": 1,
                          "raw": "1",
                          "start": 1577,
                          "end": 1578
                        }
                      ],
                      "start": 1576,
                      "end": 1579
                    },
                    "definite": false,
                    "start": 1570,
                    "end": 1579
                  }
                ],
                "declare": false,
                "start": 1566,
                "end": 1580
              },
              {
                "type": "ExpressionStatement",
                "expression": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "use",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1589,
                    "end": 1592
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "y",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1593,
                      "end": 1594
                    }
                  ],
                  "optional": false,
                  "start": 1589,
                  "end": 1595
                },
                "directive": null,
                "start": 1589,
                "end": 1596
              },
              {
                "type": "VariableDeclaration",
                "kind": "let",
                "declarations": [
                  {
                    "type": "VariableDeclarator",
                    "id": {
                      "type": "ObjectPattern",
                      "decorators": [],
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
                            "start": 1610,
                            "end": 1611
                          },
                          "value": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "z",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1613,
                            "end": 1614
                          },
                          "method": false,
                          "shorthand": false,
                          "computed": false,
                          "optional": false,
                          "start": 1610,
                          "end": 1614
                        }
                      ],
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1609,
                      "end": 1615
                    },
                    "init": {
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
                            "start": 1620,
                            "end": 1621
                          },
                          "value": {
                            "type": "Literal",
                            "value": 1,
                            "raw": "1",
                            "start": 1623,
                            "end": 1624
                          },
                          "method": false,
                          "shorthand": false,
                          "computed": false,
                          "optional": false,
                          "start": 1620,
                          "end": 1624
                        }
                      ],
                      "start": 1618,
                      "end": 1626
                    },
                    "definite": false,
                    "start": 1609,
                    "end": 1626
                  }
                ],
                "declare": false,
                "start": 1605,
                "end": 1627
              },
              {
                "type": "ExpressionStatement",
                "expression": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "use",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1636,
                    "end": 1639
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "z",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1640,
                      "end": 1641
                    }
                  ],
                  "optional": false,
                  "start": 1636,
                  "end": 1642
                },
                "directive": null,
                "start": 1636,
                "end": 1643
              }
            ],
            "start": 1521,
            "end": 1649
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "CallExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "use",
                "optional": false,
                "typeAnnotation": null,
                "start": 1654,
                "end": 1657
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1658,
                  "end": 1659
                }
              ],
              "optional": false,
              "start": 1654,
              "end": 1660
            },
            "directive": null,
            "start": 1654,
            "end": 1661
          }
        ],
        "start": 1515,
        "end": 1663
      },
      "kind": "namespace",
      "declare": false,
      "global": false,
      "start": 1502,
      "end": 1663
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "M3",
        "optional": false,
        "typeAnnotation": null,
        "start": 1675,
        "end": 1677
      },
      "body": {
        "type": "TSModuleBlock",
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
                  "start": 1690,
                  "end": 1691
                },
                "init": {
                  "type": "Literal",
                  "value": 1,
                  "raw": "1",
                  "start": 1694,
                  "end": 1695
                },
                "definite": false,
                "start": 1690,
                "end": 1695
              }
            ],
            "declare": false,
            "start": 1684,
            "end": 1696
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "CallExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "use",
                "optional": false,
                "typeAnnotation": null,
                "start": 1701,
                "end": 1704
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1705,
                  "end": 1706
                }
              ],
              "optional": false,
              "start": 1701,
              "end": 1707
            },
            "directive": null,
            "start": 1701,
            "end": 1708
          },
          {
            "type": "VariableDeclaration",
            "kind": "const",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "ArrayPattern",
                  "decorators": [],
                  "elements": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "y",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1720,
                      "end": 1721
                    }
                  ],
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1719,
                  "end": 1722
                },
                "init": {
                  "type": "ArrayExpression",
                  "elements": [
                    {
                      "type": "Literal",
                      "value": 1,
                      "raw": "1",
                      "start": 1726,
                      "end": 1727
                    }
                  ],
                  "start": 1725,
                  "end": 1728
                },
                "definite": false,
                "start": 1719,
                "end": 1728
              }
            ],
            "declare": false,
            "start": 1713,
            "end": 1729
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "CallExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "use",
                "optional": false,
                "typeAnnotation": null,
                "start": 1734,
                "end": 1737
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "y",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1738,
                  "end": 1739
                }
              ],
              "optional": false,
              "start": 1734,
              "end": 1740
            },
            "directive": null,
            "start": 1734,
            "end": 1741
          },
          {
            "type": "VariableDeclaration",
            "kind": "const",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "ObjectPattern",
                  "decorators": [],
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
                        "start": 1753,
                        "end": 1754
                      },
                      "value": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "z",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1756,
                        "end": 1757
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "optional": false,
                      "start": 1753,
                      "end": 1757
                    }
                  ],
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1752,
                  "end": 1758
                },
                "init": {
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
                        "start": 1763,
                        "end": 1764
                      },
                      "value": {
                        "type": "Literal",
                        "value": 1,
                        "raw": "1",
                        "start": 1766,
                        "end": 1767
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "optional": false,
                      "start": 1763,
                      "end": 1767
                    }
                  ],
                  "start": 1761,
                  "end": 1769
                },
                "definite": false,
                "start": 1752,
                "end": 1769
              }
            ],
            "declare": false,
            "start": 1746,
            "end": 1770
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "CallExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "use",
                "optional": false,
                "typeAnnotation": null,
                "start": 1775,
                "end": 1778
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "z",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1779,
                  "end": 1780
                }
              ],
              "optional": false,
              "start": 1775,
              "end": 1781
            },
            "directive": null,
            "start": 1775,
            "end": 1782
          }
        ],
        "start": 1678,
        "end": 1785
      },
      "kind": "namespace",
      "declare": false,
      "global": false,
      "start": 1665,
      "end": 1785
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "M4",
        "optional": false,
        "typeAnnotation": null,
        "start": 1797,
        "end": 1799
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
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
                      "start": 1822,
                      "end": 1823
                    },
                    "init": {
                      "type": "Literal",
                      "value": 1,
                      "raw": "1",
                      "start": 1826,
                      "end": 1827
                    },
                    "definite": false,
                    "start": 1822,
                    "end": 1827
                  }
                ],
                "declare": false,
                "start": 1816,
                "end": 1828
              },
              {
                "type": "ExpressionStatement",
                "expression": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "use",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1837,
                    "end": 1840
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1841,
                      "end": 1842
                    }
                  ],
                  "optional": false,
                  "start": 1837,
                  "end": 1843
                },
                "directive": null,
                "start": 1837,
                "end": 1844
              },
              {
                "type": "VariableDeclaration",
                "kind": "const",
                "declarations": [
                  {
                    "type": "VariableDeclarator",
                    "id": {
                      "type": "ArrayPattern",
                      "decorators": [],
                      "elements": [
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "y",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1860,
                          "end": 1861
                        }
                      ],
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1859,
                      "end": 1862
                    },
                    "init": {
                      "type": "ArrayExpression",
                      "elements": [
                        {
                          "type": "Literal",
                          "value": 1,
                          "raw": "1",
                          "start": 1866,
                          "end": 1867
                        }
                      ],
                      "start": 1865,
                      "end": 1868
                    },
                    "definite": false,
                    "start": 1859,
                    "end": 1868
                  }
                ],
                "declare": false,
                "start": 1853,
                "end": 1869
              },
              {
                "type": "ExpressionStatement",
                "expression": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "use",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1878,
                    "end": 1881
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "y",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1882,
                      "end": 1883
                    }
                  ],
                  "optional": false,
                  "start": 1878,
                  "end": 1884
                },
                "directive": null,
                "start": 1878,
                "end": 1885
              },
              {
                "type": "VariableDeclaration",
                "kind": "const",
                "declarations": [
                  {
                    "type": "VariableDeclarator",
                    "id": {
                      "type": "ObjectPattern",
                      "decorators": [],
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
                            "start": 1901,
                            "end": 1902
                          },
                          "value": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "z",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1904,
                            "end": 1905
                          },
                          "method": false,
                          "shorthand": false,
                          "computed": false,
                          "optional": false,
                          "start": 1901,
                          "end": 1905
                        }
                      ],
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1900,
                      "end": 1906
                    },
                    "init": {
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
                            "start": 1911,
                            "end": 1912
                          },
                          "value": {
                            "type": "Literal",
                            "value": 1,
                            "raw": "1",
                            "start": 1914,
                            "end": 1915
                          },
                          "method": false,
                          "shorthand": false,
                          "computed": false,
                          "optional": false,
                          "start": 1911,
                          "end": 1915
                        }
                      ],
                      "start": 1909,
                      "end": 1917
                    },
                    "definite": false,
                    "start": 1900,
                    "end": 1917
                  }
                ],
                "declare": false,
                "start": 1894,
                "end": 1918
              },
              {
                "type": "ExpressionStatement",
                "expression": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "use",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1927,
                    "end": 1930
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "z",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1931,
                      "end": 1932
                    }
                  ],
                  "optional": false,
                  "start": 1927,
                  "end": 1933
                },
                "directive": null,
                "start": 1927,
                "end": 1934
              }
            ],
            "start": 1806,
            "end": 1941
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "CallExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "use",
                "optional": false,
                "typeAnnotation": null,
                "start": 1946,
                "end": 1949
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1950,
                  "end": 1951
                }
              ],
              "optional": false,
              "start": 1946,
              "end": 1952
            },
            "directive": null,
            "start": 1946,
            "end": 1953
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "CallExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "use",
                "optional": false,
                "typeAnnotation": null,
                "start": 1958,
                "end": 1961
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "y",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1962,
                  "end": 1963
                }
              ],
              "optional": false,
              "start": 1958,
              "end": 1964
            },
            "directive": null,
            "start": 1958,
            "end": 1965
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "CallExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "use",
                "optional": false,
                "typeAnnotation": null,
                "start": 1970,
                "end": 1973
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "z",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1974,
                  "end": 1975
                }
              ],
              "optional": false,
              "start": 1970,
              "end": 1976
            },
            "directive": null,
            "start": 1970,
            "end": 1977
          }
        ],
        "start": 1800,
        "end": 1979
      },
      "kind": "namespace",
      "declare": false,
      "global": false,
      "start": 1787,
      "end": 1979
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo3",
        "optional": false,
        "typeAnnotation": null,
        "start": 1990,
        "end": 1994
      },
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
            "type": "ForStatement",
            "init": {
              "type": "VariableDeclaration",
              "kind": "let",
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "id": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2012,
                    "end": 2013
                  },
                  "init": null,
                  "definite": false,
                  "start": 2012,
                  "end": 2013
                }
              ],
              "declare": false,
              "start": 2008,
              "end": 2013
            },
            "test": null,
            "update": null,
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
                      "name": "use",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2028,
                      "end": 2031
                    },
                    "typeArguments": null,
                    "arguments": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2032,
                        "end": 2033
                      }
                    ],
                    "optional": false,
                    "start": 2028,
                    "end": 2034
                  },
                  "directive": null,
                  "start": 2028,
                  "end": 2035
                }
              ],
              "start": 2018,
              "end": 2041
            },
            "start": 2003,
            "end": 2041
          },
          {
            "type": "ForStatement",
            "init": {
              "type": "VariableDeclaration",
              "kind": "let",
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "id": {
                    "type": "ArrayPattern",
                    "decorators": [],
                    "elements": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "y",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2056,
                        "end": 2057
                      }
                    ],
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2055,
                    "end": 2058
                  },
                  "init": {
                    "type": "ArrayExpression",
                    "elements": [],
                    "start": 2061,
                    "end": 2063
                  },
                  "definite": false,
                  "start": 2055,
                  "end": 2063
                }
              ],
              "declare": false,
              "start": 2051,
              "end": 2063
            },
            "test": null,
            "update": null,
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
                      "name": "use",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2078,
                      "end": 2081
                    },
                    "typeArguments": null,
                    "arguments": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "y",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2082,
                        "end": 2083
                      }
                    ],
                    "optional": false,
                    "start": 2078,
                    "end": 2084
                  },
                  "directive": null,
                  "start": 2078,
                  "end": 2085
                }
              ],
              "start": 2068,
              "end": 2091
            },
            "start": 2046,
            "end": 2091
          },
          {
            "type": "ForStatement",
            "init": {
              "type": "VariableDeclaration",
              "kind": "let",
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "id": {
                    "type": "ObjectPattern",
                    "decorators": [],
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
                          "start": 2106,
                          "end": 2107
                        },
                        "value": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "z",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 2109,
                          "end": 2110
                        },
                        "method": false,
                        "shorthand": false,
                        "computed": false,
                        "optional": false,
                        "start": 2106,
                        "end": 2110
                      }
                    ],
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2105,
                    "end": 2111
                  },
                  "init": {
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
                          "start": 2115,
                          "end": 2116
                        },
                        "value": {
                          "type": "Literal",
                          "value": 1,
                          "raw": "1",
                          "start": 2118,
                          "end": 2119
                        },
                        "method": false,
                        "shorthand": false,
                        "computed": false,
                        "optional": false,
                        "start": 2115,
                        "end": 2119
                      }
                    ],
                    "start": 2114,
                    "end": 2120
                  },
                  "definite": false,
                  "start": 2105,
                  "end": 2120
                }
              ],
              "declare": false,
              "start": 2101,
              "end": 2120
            },
            "test": null,
            "update": null,
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
                      "name": "use",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2135,
                      "end": 2138
                    },
                    "typeArguments": null,
                    "arguments": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "z",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2139,
                        "end": 2140
                      }
                    ],
                    "optional": false,
                    "start": 2135,
                    "end": 2141
                  },
                  "directive": null,
                  "start": 2135,
                  "end": 2142
                }
              ],
              "start": 2125,
              "end": 2148
            },
            "start": 2096,
            "end": 2148
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "CallExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "use",
                "optional": false,
                "typeAnnotation": null,
                "start": 2153,
                "end": 2156
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2157,
                  "end": 2158
                }
              ],
              "optional": false,
              "start": 2153,
              "end": 2159
            },
            "directive": null,
            "start": 2153,
            "end": 2160
          }
        ],
        "start": 1997,
        "end": 2162
      },
      "expression": false,
      "start": 1981,
      "end": 2162
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo4",
        "optional": false,
        "typeAnnotation": null,
        "start": 2173,
        "end": 2177
      },
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
            "type": "ForStatement",
            "init": {
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
                    "start": 2197,
                    "end": 2198
                  },
                  "init": {
                    "type": "Literal",
                    "value": 1,
                    "raw": "1",
                    "start": 2201,
                    "end": 2202
                  },
                  "definite": false,
                  "start": 2197,
                  "end": 2202
                }
              ],
              "declare": false,
              "start": 2191,
              "end": 2202
            },
            "test": null,
            "update": null,
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
                      "name": "use",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2217,
                      "end": 2220
                    },
                    "typeArguments": null,
                    "arguments": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2221,
                        "end": 2222
                      }
                    ],
                    "optional": false,
                    "start": 2217,
                    "end": 2223
                  },
                  "directive": null,
                  "start": 2217,
                  "end": 2224
                }
              ],
              "start": 2207,
              "end": 2230
            },
            "start": 2186,
            "end": 2230
          },
          {
            "type": "ForStatement",
            "init": {
              "type": "VariableDeclaration",
              "kind": "const",
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "id": {
                    "type": "ArrayPattern",
                    "decorators": [],
                    "elements": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "y",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2247,
                        "end": 2248
                      }
                    ],
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2246,
                    "end": 2249
                  },
                  "init": {
                    "type": "ArrayExpression",
                    "elements": [],
                    "start": 2252,
                    "end": 2254
                  },
                  "definite": false,
                  "start": 2246,
                  "end": 2254
                }
              ],
              "declare": false,
              "start": 2240,
              "end": 2254
            },
            "test": null,
            "update": null,
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
                      "name": "use",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2269,
                      "end": 2272
                    },
                    "typeArguments": null,
                    "arguments": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "y",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2273,
                        "end": 2274
                      }
                    ],
                    "optional": false,
                    "start": 2269,
                    "end": 2275
                  },
                  "directive": null,
                  "start": 2269,
                  "end": 2276
                }
              ],
              "start": 2259,
              "end": 2282
            },
            "start": 2235,
            "end": 2282
          },
          {
            "type": "ForStatement",
            "init": {
              "type": "VariableDeclaration",
              "kind": "const",
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "id": {
                    "type": "ObjectPattern",
                    "decorators": [],
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
                          "start": 2299,
                          "end": 2300
                        },
                        "value": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "z",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 2302,
                          "end": 2303
                        },
                        "method": false,
                        "shorthand": false,
                        "computed": false,
                        "optional": false,
                        "start": 2299,
                        "end": 2303
                      }
                    ],
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2298,
                    "end": 2304
                  },
                  "init": {
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
                          "start": 2309,
                          "end": 2310
                        },
                        "value": {
                          "type": "Literal",
                          "value": 1,
                          "raw": "1",
                          "start": 2312,
                          "end": 2313
                        },
                        "method": false,
                        "shorthand": false,
                        "computed": false,
                        "optional": false,
                        "start": 2309,
                        "end": 2313
                      }
                    ],
                    "start": 2307,
                    "end": 2315
                  },
                  "definite": false,
                  "start": 2298,
                  "end": 2315
                }
              ],
              "declare": false,
              "start": 2292,
              "end": 2315
            },
            "test": null,
            "update": null,
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
                      "name": "use",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2330,
                      "end": 2333
                    },
                    "typeArguments": null,
                    "arguments": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "z",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2334,
                        "end": 2335
                      }
                    ],
                    "optional": false,
                    "start": 2330,
                    "end": 2336
                  },
                  "directive": null,
                  "start": 2330,
                  "end": 2337
                }
              ],
              "start": 2320,
              "end": 2343
            },
            "start": 2287,
            "end": 2343
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "CallExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "use",
                "optional": false,
                "typeAnnotation": null,
                "start": 2348,
                "end": 2351
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2352,
                  "end": 2353
                }
              ],
              "optional": false,
              "start": 2348,
              "end": 2354
            },
            "directive": null,
            "start": 2348,
            "end": 2355
          }
        ],
        "start": 2180,
        "end": 2357
      },
      "expression": false,
      "start": 2164,
      "end": 2357
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo5",
        "optional": false,
        "typeAnnotation": null,
        "start": 2368,
        "end": 2372
      },
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
            "type": "ForInStatement",
            "left": {
              "type": "VariableDeclaration",
              "kind": "let",
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "id": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2390,
                    "end": 2391
                  },
                  "init": null,
                  "definite": false,
                  "start": 2390,
                  "end": 2391
                }
              ],
              "declare": false,
              "start": 2386,
              "end": 2391
            },
            "right": {
              "type": "ArrayExpression",
              "elements": [],
              "start": 2395,
              "end": 2397
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
                      "name": "use",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2409,
                      "end": 2412
                    },
                    "typeArguments": null,
                    "arguments": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2413,
                        "end": 2414
                      }
                    ],
                    "optional": false,
                    "start": 2409,
                    "end": 2415
                  },
                  "directive": null,
                  "start": 2409,
                  "end": 2416
                }
              ],
              "start": 2399,
              "end": 2422
            },
            "start": 2381,
            "end": 2422
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "CallExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "use",
                "optional": false,
                "typeAnnotation": null,
                "start": 2427,
                "end": 2430
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2431,
                  "end": 2432
                }
              ],
              "optional": false,
              "start": 2427,
              "end": 2433
            },
            "directive": null,
            "start": 2427,
            "end": 2434
          }
        ],
        "start": 2375,
        "end": 2436
      },
      "expression": false,
      "start": 2359,
      "end": 2436
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo6",
        "optional": false,
        "typeAnnotation": null,
        "start": 2447,
        "end": 2451
      },
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
            "type": "ForInStatement",
            "left": {
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
                    "start": 2471,
                    "end": 2472
                  },
                  "init": null,
                  "definite": false,
                  "start": 2471,
                  "end": 2472
                }
              ],
              "declare": false,
              "start": 2465,
              "end": 2472
            },
            "right": {
              "type": "ArrayExpression",
              "elements": [],
              "start": 2476,
              "end": 2478
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
                      "name": "use",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2490,
                      "end": 2493
                    },
                    "typeArguments": null,
                    "arguments": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2494,
                        "end": 2495
                      }
                    ],
                    "optional": false,
                    "start": 2490,
                    "end": 2496
                  },
                  "directive": null,
                  "start": 2490,
                  "end": 2497
                }
              ],
              "start": 2480,
              "end": 2503
            },
            "start": 2460,
            "end": 2503
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "CallExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "use",
                "optional": false,
                "typeAnnotation": null,
                "start": 2508,
                "end": 2511
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2512,
                  "end": 2513
                }
              ],
              "optional": false,
              "start": 2508,
              "end": 2514
            },
            "directive": null,
            "start": 2508,
            "end": 2515
          }
        ],
        "start": 2454,
        "end": 2517
      },
      "expression": false,
      "start": 2438,
      "end": 2517
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo7",
        "optional": false,
        "typeAnnotation": null,
        "start": 2528,
        "end": 2532
      },
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
            "type": "ForOfStatement",
            "await": false,
            "left": {
              "type": "VariableDeclaration",
              "kind": "let",
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "id": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2550,
                    "end": 2551
                  },
                  "init": null,
                  "definite": false,
                  "start": 2550,
                  "end": 2551
                }
              ],
              "declare": false,
              "start": 2546,
              "end": 2551
            },
            "right": {
              "type": "ArrayExpression",
              "elements": [],
              "start": 2555,
              "end": 2557
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
                      "name": "use",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2569,
                      "end": 2572
                    },
                    "typeArguments": null,
                    "arguments": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2573,
                        "end": 2574
                      }
                    ],
                    "optional": false,
                    "start": 2569,
                    "end": 2575
                  },
                  "directive": null,
                  "start": 2569,
                  "end": 2576
                }
              ],
              "start": 2559,
              "end": 2582
            },
            "start": 2541,
            "end": 2582
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "CallExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "use",
                "optional": false,
                "typeAnnotation": null,
                "start": 2587,
                "end": 2590
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2591,
                  "end": 2592
                }
              ],
              "optional": false,
              "start": 2587,
              "end": 2593
            },
            "directive": null,
            "start": 2587,
            "end": 2594
          }
        ],
        "start": 2535,
        "end": 2596
      },
      "expression": false,
      "start": 2519,
      "end": 2596
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo8",
        "optional": false,
        "typeAnnotation": null,
        "start": 2607,
        "end": 2611
      },
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
            "type": "ForOfStatement",
            "await": false,
            "left": {
              "type": "VariableDeclaration",
              "kind": "let",
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "id": {
                    "type": "ArrayPattern",
                    "decorators": [],
                    "elements": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2630,
                        "end": 2631
                      }
                    ],
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2629,
                    "end": 2632
                  },
                  "init": null,
                  "definite": false,
                  "start": 2629,
                  "end": 2632
                }
              ],
              "declare": false,
              "start": 2625,
              "end": 2632
            },
            "right": {
              "type": "ArrayExpression",
              "elements": [],
              "start": 2636,
              "end": 2638
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
                      "name": "use",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2650,
                      "end": 2653
                    },
                    "typeArguments": null,
                    "arguments": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2654,
                        "end": 2655
                      }
                    ],
                    "optional": false,
                    "start": 2650,
                    "end": 2656
                  },
                  "directive": null,
                  "start": 2650,
                  "end": 2657
                }
              ],
              "start": 2640,
              "end": 2663
            },
            "start": 2620,
            "end": 2663
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "CallExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "use",
                "optional": false,
                "typeAnnotation": null,
                "start": 2668,
                "end": 2671
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2672,
                  "end": 2673
                }
              ],
              "optional": false,
              "start": 2668,
              "end": 2674
            },
            "directive": null,
            "start": 2668,
            "end": 2675
          }
        ],
        "start": 2614,
        "end": 2677
      },
      "expression": false,
      "start": 2598,
      "end": 2677
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo9",
        "optional": false,
        "typeAnnotation": null,
        "start": 2688,
        "end": 2692
      },
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
            "type": "ForOfStatement",
            "await": false,
            "left": {
              "type": "VariableDeclaration",
              "kind": "let",
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "id": {
                    "type": "ObjectPattern",
                    "decorators": [],
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
                          "start": 2711,
                          "end": 2712
                        },
                        "value": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 2714,
                          "end": 2715
                        },
                        "method": false,
                        "shorthand": false,
                        "computed": false,
                        "optional": false,
                        "start": 2711,
                        "end": 2715
                      }
                    ],
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2710,
                    "end": 2716
                  },
                  "init": null,
                  "definite": false,
                  "start": 2710,
                  "end": 2716
                }
              ],
              "declare": false,
              "start": 2706,
              "end": 2716
            },
            "right": {
              "type": "ArrayExpression",
              "elements": [],
              "start": 2720,
              "end": 2722
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
                      "name": "use",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2734,
                      "end": 2737
                    },
                    "typeArguments": null,
                    "arguments": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2738,
                        "end": 2739
                      }
                    ],
                    "optional": false,
                    "start": 2734,
                    "end": 2740
                  },
                  "directive": null,
                  "start": 2734,
                  "end": 2741
                }
              ],
              "start": 2724,
              "end": 2747
            },
            "start": 2701,
            "end": 2747
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "CallExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "use",
                "optional": false,
                "typeAnnotation": null,
                "start": 2752,
                "end": 2755
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2756,
                  "end": 2757
                }
              ],
              "optional": false,
              "start": 2752,
              "end": 2758
            },
            "directive": null,
            "start": 2752,
            "end": 2759
          }
        ],
        "start": 2695,
        "end": 2761
      },
      "expression": false,
      "start": 2679,
      "end": 2761
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo10",
        "optional": false,
        "typeAnnotation": null,
        "start": 2772,
        "end": 2777
      },
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
            "type": "ForOfStatement",
            "await": false,
            "left": {
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
                    "start": 2797,
                    "end": 2798
                  },
                  "init": null,
                  "definite": false,
                  "start": 2797,
                  "end": 2798
                }
              ],
              "declare": false,
              "start": 2791,
              "end": 2798
            },
            "right": {
              "type": "ArrayExpression",
              "elements": [],
              "start": 2802,
              "end": 2804
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
                      "name": "use",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2816,
                      "end": 2819
                    },
                    "typeArguments": null,
                    "arguments": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2820,
                        "end": 2821
                      }
                    ],
                    "optional": false,
                    "start": 2816,
                    "end": 2822
                  },
                  "directive": null,
                  "start": 2816,
                  "end": 2823
                }
              ],
              "start": 2806,
              "end": 2829
            },
            "start": 2786,
            "end": 2829
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "CallExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "use",
                "optional": false,
                "typeAnnotation": null,
                "start": 2834,
                "end": 2837
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2838,
                  "end": 2839
                }
              ],
              "optional": false,
              "start": 2834,
              "end": 2840
            },
            "directive": null,
            "start": 2834,
            "end": 2841
          }
        ],
        "start": 2780,
        "end": 2843
      },
      "expression": false,
      "start": 2763,
      "end": 2843
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo11",
        "optional": false,
        "typeAnnotation": null,
        "start": 2854,
        "end": 2859
      },
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
            "type": "ForOfStatement",
            "await": false,
            "left": {
              "type": "VariableDeclaration",
              "kind": "const",
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "id": {
                    "type": "ArrayPattern",
                    "decorators": [],
                    "elements": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2880,
                        "end": 2881
                      }
                    ],
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2879,
                    "end": 2882
                  },
                  "init": null,
                  "definite": false,
                  "start": 2879,
                  "end": 2882
                }
              ],
              "declare": false,
              "start": 2873,
              "end": 2882
            },
            "right": {
              "type": "ArrayExpression",
              "elements": [],
              "start": 2886,
              "end": 2888
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
                      "name": "use",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2900,
                      "end": 2903
                    },
                    "typeArguments": null,
                    "arguments": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2904,
                        "end": 2905
                      }
                    ],
                    "optional": false,
                    "start": 2900,
                    "end": 2906
                  },
                  "directive": null,
                  "start": 2900,
                  "end": 2907
                }
              ],
              "start": 2890,
              "end": 2913
            },
            "start": 2868,
            "end": 2913
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "CallExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "use",
                "optional": false,
                "typeAnnotation": null,
                "start": 2918,
                "end": 2921
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2922,
                  "end": 2923
                }
              ],
              "optional": false,
              "start": 2918,
              "end": 2924
            },
            "directive": null,
            "start": 2918,
            "end": 2925
          }
        ],
        "start": 2862,
        "end": 2927
      },
      "expression": false,
      "start": 2845,
      "end": 2927
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo12",
        "optional": false,
        "typeAnnotation": null,
        "start": 2938,
        "end": 2943
      },
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
            "type": "ForOfStatement",
            "await": false,
            "left": {
              "type": "VariableDeclaration",
              "kind": "const",
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "id": {
                    "type": "ObjectPattern",
                    "decorators": [],
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
                          "start": 2964,
                          "end": 2965
                        },
                        "value": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 2967,
                          "end": 2968
                        },
                        "method": false,
                        "shorthand": false,
                        "computed": false,
                        "optional": false,
                        "start": 2964,
                        "end": 2968
                      }
                    ],
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2963,
                    "end": 2969
                  },
                  "init": null,
                  "definite": false,
                  "start": 2963,
                  "end": 2969
                }
              ],
              "declare": false,
              "start": 2957,
              "end": 2969
            },
            "right": {
              "type": "ArrayExpression",
              "elements": [],
              "start": 2973,
              "end": 2975
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
                      "name": "use",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2987,
                      "end": 2990
                    },
                    "typeArguments": null,
                    "arguments": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2991,
                        "end": 2992
                      }
                    ],
                    "optional": false,
                    "start": 2987,
                    "end": 2993
                  },
                  "directive": null,
                  "start": 2987,
                  "end": 2994
                }
              ],
              "start": 2977,
              "end": 3000
            },
            "start": 2952,
            "end": 3000
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "CallExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "use",
                "optional": false,
                "typeAnnotation": null,
                "start": 3005,
                "end": 3008
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 3009,
                  "end": 3010
                }
              ],
              "optional": false,
              "start": 3005,
              "end": 3011
            },
            "directive": null,
            "start": 3005,
            "end": 3012
          }
        ],
        "start": 2946,
        "end": 3014
      },
      "expression": false,
      "start": 2929,
      "end": 3014
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 3014
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "String",
    "value": "'use strict'",
    "start": 0,
    "end": 12
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 14,
    "end": 21
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 22,
    "end": 30
  },
  {
    "type": "Identifier",
    "value": "use",
    "start": 31,
    "end": 34
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 34,
    "end": 35
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 35,
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
    "value": "any",
    "start": 38,
    "end": 41
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 41,
    "end": 42
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 42,
    "end": 43
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 45,
    "end": 48
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 49,
    "end": 50
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 51,
    "end": 52
  },
  {
    "type": "Numeric",
    "value": "10",
    "start": 53,
    "end": 55
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 55,
    "end": 56
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 57,
    "end": 60
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 61,
    "end": 62
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 62,
    "end": 63
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 64,
    "end": 67
  },
  {
    "type": "Identifier",
    "value": "z",
    "start": 68,
    "end": 69
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 69,
    "end": 70
  },
  {
    "type": "Identifier",
    "value": "use",
    "start": 71,
    "end": 74
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 74,
    "end": 75
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 75,
    "end": 76
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 76,
    "end": 77
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 77,
    "end": 78
  },
  {
    "type": "Identifier",
    "value": "use",
    "start": 79,
    "end": 82
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 82,
    "end": 83
  },
  {
    "type": "Identifier",
    "value": "y",
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
    "value": ";",
    "start": 85,
    "end": 86
  },
  {
    "type": "Identifier",
    "value": "use",
    "start": 87,
    "end": 90
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 90,
    "end": 91
  },
  {
    "type": "Identifier",
    "value": "z",
    "start": 91,
    "end": 92
  },
  {
    "type": "Punctuator",
    "value": ")",
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
    "type": "Keyword",
    "value": "function",
    "start": 95,
    "end": 103
  },
  {
    "type": "Identifier",
    "value": "foo1",
    "start": 104,
    "end": 108
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 108,
    "end": 109
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 109,
    "end": 110
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 111,
    "end": 112
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 117,
    "end": 120
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 121,
    "end": 122
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 123,
    "end": 124
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 125,
    "end": 126
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 126,
    "end": 127
  },
  {
    "type": "Identifier",
    "value": "use",
    "start": 132,
    "end": 135
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 135,
    "end": 136
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 136,
    "end": 137
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 137,
    "end": 138
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 138,
    "end": 139
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 144,
    "end": 147
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 148,
    "end": 149
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 149,
    "end": 150
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 150,
    "end": 151
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 152,
    "end": 153
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 154,
    "end": 155
  },
  {
    "type": "Numeric",
    "value": "1",
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
    "type": "Punctuator",
    "value": ";",
    "start": 157,
    "end": 158
  },
  {
    "type": "Identifier",
    "value": "use",
    "start": 163,
    "end": 166
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 166,
    "end": 167
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 167,
    "end": 168
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 168,
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
    "value": "let",
    "start": 175,
    "end": 178
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 179,
    "end": 180
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 180,
    "end": 181
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 181,
    "end": 182
  },
  {
    "type": "Identifier",
    "value": "z",
    "start": 183,
    "end": 184
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 184,
    "end": 185
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 186,
    "end": 187
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 188,
    "end": 189
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 189,
    "end": 190
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 190,
    "end": 191
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 192,
    "end": 193
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 193,
    "end": 194
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 194,
    "end": 195
  },
  {
    "type": "Identifier",
    "value": "use",
    "start": 200,
    "end": 203
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 203,
    "end": 204
  },
  {
    "type": "Identifier",
    "value": "z",
    "start": 204,
    "end": 205
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 205,
    "end": 206
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 206,
    "end": 207
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 208,
    "end": 209
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 211,
    "end": 219
  },
  {
    "type": "Identifier",
    "value": "foo2",
    "start": 220,
    "end": 224
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 224,
    "end": 225
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 225,
    "end": 226
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 227,
    "end": 228
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 233,
    "end": 234
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 243,
    "end": 246
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 247,
    "end": 248
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 249,
    "end": 250
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 251,
    "end": 252
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 252,
    "end": 253
  },
  {
    "type": "Identifier",
    "value": "use",
    "start": 262,
    "end": 265
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 265,
    "end": 266
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 266,
    "end": 267
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 267,
    "end": 268
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 268,
    "end": 269
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 278,
    "end": 281
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 282,
    "end": 283
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 283,
    "end": 284
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 284,
    "end": 285
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 286,
    "end": 287
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 288,
    "end": 289
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 289,
    "end": 290
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 290,
    "end": 291
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 291,
    "end": 292
  },
  {
    "type": "Identifier",
    "value": "use",
    "start": 301,
    "end": 304
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 304,
    "end": 305
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 305,
    "end": 306
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 306,
    "end": 307
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 307,
    "end": 308
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 317,
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
    "value": "a",
    "start": 322,
    "end": 323
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 323,
    "end": 324
  },
  {
    "type": "Identifier",
    "value": "z",
    "start": 325,
    "end": 326
  },
  {
    "type": "Punctuator",
    "value": "}",
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
    "type": "Punctuator",
    "value": "{",
    "start": 330,
    "end": 331
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
    "value": "}",
    "start": 337,
    "end": 338
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 338,
    "end": 339
  },
  {
    "type": "Identifier",
    "value": "use",
    "start": 348,
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
    "value": "z",
    "start": 352,
    "end": 353
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 353,
    "end": 354
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 354,
    "end": 355
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 360,
    "end": 361
  },
  {
    "type": "Identifier",
    "value": "use",
    "start": 366,
    "end": 369
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 369,
    "end": 370
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 370,
    "end": 371
  },
  {
    "type": "Punctuator",
    "value": ")",
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
    "type": "Punctuator",
    "value": "}",
    "start": 374,
    "end": 375
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 377,
    "end": 382
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 383,
    "end": 384
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 385,
    "end": 386
  },
  {
    "type": "Identifier",
    "value": "m1",
    "start": 391,
    "end": 393
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 393,
    "end": 394
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 394,
    "end": 395
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 396,
    "end": 397
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 406,
    "end": 409
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 410,
    "end": 411
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 412,
    "end": 413
  },
  {
    "type": "Numeric",
    "value": "1",
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
    "value": "use",
    "start": 425,
    "end": 428
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 428,
    "end": 429
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 429,
    "end": 430
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 430,
    "end": 431
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 431,
    "end": 432
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 441,
    "end": 444
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 445,
    "end": 446
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 446,
    "end": 447
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 447,
    "end": 448
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 449,
    "end": 450
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 451,
    "end": 452
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 452,
    "end": 453
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 453,
    "end": 454
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 454,
    "end": 455
  },
  {
    "type": "Identifier",
    "value": "use",
    "start": 464,
    "end": 467
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 467,
    "end": 468
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 468,
    "end": 469
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 469,
    "end": 470
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 470,
    "end": 471
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 480,
    "end": 483
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 484,
    "end": 485
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 485,
    "end": 486
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 486,
    "end": 487
  },
  {
    "type": "Identifier",
    "value": "z",
    "start": 488,
    "end": 489
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 489,
    "end": 490
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 491,
    "end": 492
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 493,
    "end": 494
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 495,
    "end": 496
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 496,
    "end": 497
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 498,
    "end": 499
  },
  {
    "type": "Punctuator",
    "value": "}",
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
    "value": "use",
    "start": 511,
    "end": 514
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 514,
    "end": 515
  },
  {
    "type": "Identifier",
    "value": "z",
    "start": 515,
    "end": 516
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 516,
    "end": 517
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 517,
    "end": 518
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 523,
    "end": 524
  },
  {
    "type": "Identifier",
    "value": "m2",
    "start": 529,
    "end": 531
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 531,
    "end": 532
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 532,
    "end": 533
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 534,
    "end": 535
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 544,
    "end": 545
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 558,
    "end": 561
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 562,
    "end": 563
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 564,
    "end": 565
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 566,
    "end": 567
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 567,
    "end": 568
  },
  {
    "type": "Identifier",
    "value": "use",
    "start": 581,
    "end": 584
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 584,
    "end": 585
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 585,
    "end": 586
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 586,
    "end": 587
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 587,
    "end": 588
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 601,
    "end": 604
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 605,
    "end": 606
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 606,
    "end": 607
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 607,
    "end": 608
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 609,
    "end": 610
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 611,
    "end": 612
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 612,
    "end": 613
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 613,
    "end": 614
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 614,
    "end": 615
  },
  {
    "type": "Identifier",
    "value": "use",
    "start": 628,
    "end": 631
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 631,
    "end": 632
  },
  {
    "type": "Identifier",
    "value": "y",
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
    "value": ";",
    "start": 634,
    "end": 635
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 648,
    "end": 651
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 652,
    "end": 653
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 653,
    "end": 654
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 654,
    "end": 655
  },
  {
    "type": "Identifier",
    "value": "z",
    "start": 656,
    "end": 657
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 657,
    "end": 658
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 659,
    "end": 660
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 661,
    "end": 662
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 663,
    "end": 664
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 664,
    "end": 665
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 666,
    "end": 667
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 668,
    "end": 669
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 669,
    "end": 670
  },
  {
    "type": "Identifier",
    "value": "use",
    "start": 683,
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
    "value": "z",
    "start": 687,
    "end": 688
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 688,
    "end": 689
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 689,
    "end": 690
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 699,
    "end": 700
  },
  {
    "type": "Identifier",
    "value": "use",
    "start": 709,
    "end": 712
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 712,
    "end": 713
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 713,
    "end": 714
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 714,
    "end": 715
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 715,
    "end": 716
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 721,
    "end": 722
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 724,
    "end": 725
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 727,
    "end": 732
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 733,
    "end": 734
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 735,
    "end": 736
  },
  {
    "type": "Identifier",
    "value": "m1",
    "start": 741,
    "end": 743
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 743,
    "end": 744
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 744,
    "end": 745
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 746,
    "end": 747
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 756,
    "end": 761
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 762,
    "end": 763
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 764,
    "end": 765
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 766,
    "end": 767
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 767,
    "end": 768
  },
  {
    "type": "Identifier",
    "value": "use",
    "start": 777,
    "end": 780
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 780,
    "end": 781
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 781,
    "end": 782
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 782,
    "end": 783
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 783,
    "end": 784
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 793,
    "end": 798
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 799,
    "end": 800
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 800,
    "end": 801
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 801,
    "end": 802
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 803,
    "end": 804
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 805,
    "end": 806
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 806,
    "end": 807
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 807,
    "end": 808
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 808,
    "end": 809
  },
  {
    "type": "Identifier",
    "value": "use",
    "start": 818,
    "end": 821
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 821,
    "end": 822
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 822,
    "end": 823
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 823,
    "end": 824
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 824,
    "end": 825
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 834,
    "end": 839
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 840,
    "end": 841
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 841,
    "end": 842
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 842,
    "end": 843
  },
  {
    "type": "Identifier",
    "value": "z",
    "start": 844,
    "end": 845
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 845,
    "end": 846
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 847,
    "end": 848
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 849,
    "end": 850
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 851,
    "end": 852
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 852,
    "end": 853
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 854,
    "end": 855
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 856,
    "end": 857
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 857,
    "end": 858
  },
  {
    "type": "Identifier",
    "value": "use",
    "start": 867,
    "end": 870
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 870,
    "end": 871
  },
  {
    "type": "Identifier",
    "value": "z",
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
    "type": "Punctuator",
    "value": "}",
    "start": 880,
    "end": 881
  },
  {
    "type": "Identifier",
    "value": "m2",
    "start": 886,
    "end": 888
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 888,
    "end": 889
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 889,
    "end": 890
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 891,
    "end": 892
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 901,
    "end": 902
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 915,
    "end": 920
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 921,
    "end": 922
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 923,
    "end": 924
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 925,
    "end": 926
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 926,
    "end": 927
  },
  {
    "type": "Identifier",
    "value": "use",
    "start": 940,
    "end": 943
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 943,
    "end": 944
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 944,
    "end": 945
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 945,
    "end": 946
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 946,
    "end": 947
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 960,
    "end": 965
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 966,
    "end": 967
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 967,
    "end": 968
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 968,
    "end": 969
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 970,
    "end": 971
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 972,
    "end": 973
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 973,
    "end": 974
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 974,
    "end": 975
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 975,
    "end": 976
  },
  {
    "type": "Identifier",
    "value": "use",
    "start": 989,
    "end": 992
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 992,
    "end": 993
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 993,
    "end": 994
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 994,
    "end": 995
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 995,
    "end": 996
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 1009,
    "end": 1014
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1015,
    "end": 1016
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1016,
    "end": 1017
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1017,
    "end": 1018
  },
  {
    "type": "Identifier",
    "value": "z",
    "start": 1019,
    "end": 1020
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1020,
    "end": 1021
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1022,
    "end": 1023
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1024,
    "end": 1025
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1026,
    "end": 1027
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1027,
    "end": 1028
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 1029,
    "end": 1030
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1031,
    "end": 1032
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1032,
    "end": 1033
  },
  {
    "type": "Identifier",
    "value": "use",
    "start": 1046,
    "end": 1049
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1049,
    "end": 1050
  },
  {
    "type": "Identifier",
    "value": "z",
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
    "value": ";",
    "start": 1052,
    "end": 1053
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1063,
    "end": 1064
  },
  {
    "type": "Identifier",
    "value": "use",
    "start": 1073,
    "end": 1076
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1076,
    "end": 1077
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1077,
    "end": 1078
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1078,
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
    "value": "}",
    "start": 1085,
    "end": 1086
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1087,
    "end": 1088
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1090,
    "end": 1098
  },
  {
    "type": "Identifier",
    "value": "bar1",
    "start": 1099,
    "end": 1103
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1103,
    "end": 1104
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1104,
    "end": 1105
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1106,
    "end": 1107
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 1112,
    "end": 1117
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1118,
    "end": 1119
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1120,
    "end": 1121
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 1122,
    "end": 1123
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1123,
    "end": 1124
  },
  {
    "type": "Identifier",
    "value": "use",
    "start": 1129,
    "end": 1132
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1132,
    "end": 1133
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1133,
    "end": 1134
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1134,
    "end": 1135
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1135,
    "end": 1136
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 1141,
    "end": 1146
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1147,
    "end": 1148
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 1148,
    "end": 1149
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1149,
    "end": 1150
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1151,
    "end": 1152
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1153,
    "end": 1154
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 1154,
    "end": 1155
  },
  {
    "type": "Punctuator",
    "value": "]",
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
    "value": "use",
    "start": 1162,
    "end": 1165
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1165,
    "end": 1166
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 1166,
    "end": 1167
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1167,
    "end": 1168
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1168,
    "end": 1169
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 1174,
    "end": 1179
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1180,
    "end": 1181
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1181,
    "end": 1182
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1182,
    "end": 1183
  },
  {
    "type": "Identifier",
    "value": "z",
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
    "type": "Punctuator",
    "value": "=",
    "start": 1187,
    "end": 1188
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1189,
    "end": 1190
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1191,
    "end": 1192
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1192,
    "end": 1193
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 1194,
    "end": 1195
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1196,
    "end": 1197
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1197,
    "end": 1198
  },
  {
    "type": "Identifier",
    "value": "use",
    "start": 1203,
    "end": 1206
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1206,
    "end": 1207
  },
  {
    "type": "Identifier",
    "value": "z",
    "start": 1207,
    "end": 1208
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1208,
    "end": 1209
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1209,
    "end": 1210
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1211,
    "end": 1212
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1214,
    "end": 1222
  },
  {
    "type": "Identifier",
    "value": "bar2",
    "start": 1223,
    "end": 1227
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1227,
    "end": 1228
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1228,
    "end": 1229
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1230,
    "end": 1231
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1236,
    "end": 1237
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 1246,
    "end": 1251
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1252,
    "end": 1253
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1254,
    "end": 1255
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 1256,
    "end": 1257
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1257,
    "end": 1258
  },
  {
    "type": "Identifier",
    "value": "use",
    "start": 1267,
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
    "value": "x",
    "start": 1271,
    "end": 1272
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1272,
    "end": 1273
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1273,
    "end": 1274
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 1283,
    "end": 1288
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1289,
    "end": 1290
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 1290,
    "end": 1291
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1291,
    "end": 1292
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1293,
    "end": 1294
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1295,
    "end": 1296
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 1296,
    "end": 1297
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1297,
    "end": 1298
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1298,
    "end": 1299
  },
  {
    "type": "Identifier",
    "value": "use",
    "start": 1308,
    "end": 1311
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1311,
    "end": 1312
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 1312,
    "end": 1313
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1313,
    "end": 1314
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1314,
    "end": 1315
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 1324,
    "end": 1329
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1330,
    "end": 1331
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1331,
    "end": 1332
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1332,
    "end": 1333
  },
  {
    "type": "Identifier",
    "value": "z",
    "start": 1334,
    "end": 1335
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1335,
    "end": 1336
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1337,
    "end": 1338
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1339,
    "end": 1340
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1341,
    "end": 1342
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1342,
    "end": 1343
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 1344,
    "end": 1345
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1346,
    "end": 1347
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1347,
    "end": 1348
  },
  {
    "type": "Identifier",
    "value": "use",
    "start": 1357,
    "end": 1360
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1360,
    "end": 1361
  },
  {
    "type": "Identifier",
    "value": "z",
    "start": 1361,
    "end": 1362
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1362,
    "end": 1363
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1363,
    "end": 1364
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1370,
    "end": 1371
  },
  {
    "type": "Identifier",
    "value": "use",
    "start": 1376,
    "end": 1379
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1379,
    "end": 1380
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1380,
    "end": 1381
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1381,
    "end": 1382
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1382,
    "end": 1383
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1384,
    "end": 1385
  },
  {
    "type": "Identifier",
    "value": "namespace",
    "start": 1387,
    "end": 1396
  },
  {
    "type": "Identifier",
    "value": "M1",
    "start": 1397,
    "end": 1399
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1400,
    "end": 1401
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 1406,
    "end": 1409
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1410,
    "end": 1411
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1412,
    "end": 1413
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 1414,
    "end": 1415
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1415,
    "end": 1416
  },
  {
    "type": "Identifier",
    "value": "use",
    "start": 1421,
    "end": 1424
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1424,
    "end": 1425
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1425,
    "end": 1426
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1426,
    "end": 1427
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1427,
    "end": 1428
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 1433,
    "end": 1436
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1437,
    "end": 1438
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 1438,
    "end": 1439
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1439,
    "end": 1440
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1441,
    "end": 1442
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1443,
    "end": 1444
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 1444,
    "end": 1445
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1445,
    "end": 1446
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1446,
    "end": 1447
  },
  {
    "type": "Identifier",
    "value": "use",
    "start": 1452,
    "end": 1455
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1455,
    "end": 1456
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 1456,
    "end": 1457
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1457,
    "end": 1458
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1458,
    "end": 1459
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 1464,
    "end": 1467
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1468,
    "end": 1469
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1469,
    "end": 1470
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1470,
    "end": 1471
  },
  {
    "type": "Identifier",
    "value": "z",
    "start": 1472,
    "end": 1473
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1473,
    "end": 1474
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1475,
    "end": 1476
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1477,
    "end": 1478
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1479,
    "end": 1480
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1480,
    "end": 1481
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 1482,
    "end": 1483
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1484,
    "end": 1485
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1485,
    "end": 1486
  },
  {
    "type": "Identifier",
    "value": "use",
    "start": 1491,
    "end": 1494
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1494,
    "end": 1495
  },
  {
    "type": "Identifier",
    "value": "z",
    "start": 1495,
    "end": 1496
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1496,
    "end": 1497
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1497,
    "end": 1498
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1499,
    "end": 1500
  },
  {
    "type": "Identifier",
    "value": "namespace",
    "start": 1502,
    "end": 1511
  },
  {
    "type": "Identifier",
    "value": "M2",
    "start": 1512,
    "end": 1514
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1515,
    "end": 1516
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1521,
    "end": 1522
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 1531,
    "end": 1534
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1535,
    "end": 1536
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1537,
    "end": 1538
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 1539,
    "end": 1540
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1540,
    "end": 1541
  },
  {
    "type": "Identifier",
    "value": "use",
    "start": 1550,
    "end": 1553
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1553,
    "end": 1554
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1554,
    "end": 1555
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1555,
    "end": 1556
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1556,
    "end": 1557
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 1566,
    "end": 1569
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1570,
    "end": 1571
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 1571,
    "end": 1572
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1572,
    "end": 1573
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1574,
    "end": 1575
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1576,
    "end": 1577
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 1577,
    "end": 1578
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1578,
    "end": 1579
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1579,
    "end": 1580
  },
  {
    "type": "Identifier",
    "value": "use",
    "start": 1589,
    "end": 1592
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1592,
    "end": 1593
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 1593,
    "end": 1594
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1594,
    "end": 1595
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1595,
    "end": 1596
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 1605,
    "end": 1608
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1609,
    "end": 1610
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1610,
    "end": 1611
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1611,
    "end": 1612
  },
  {
    "type": "Identifier",
    "value": "z",
    "start": 1613,
    "end": 1614
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1614,
    "end": 1615
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1616,
    "end": 1617
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1618,
    "end": 1619
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1620,
    "end": 1621
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1621,
    "end": 1622
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 1623,
    "end": 1624
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1625,
    "end": 1626
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1626,
    "end": 1627
  },
  {
    "type": "Identifier",
    "value": "use",
    "start": 1636,
    "end": 1639
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1639,
    "end": 1640
  },
  {
    "type": "Identifier",
    "value": "z",
    "start": 1640,
    "end": 1641
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1641,
    "end": 1642
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1642,
    "end": 1643
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1648,
    "end": 1649
  },
  {
    "type": "Identifier",
    "value": "use",
    "start": 1654,
    "end": 1657
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1657,
    "end": 1658
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1658,
    "end": 1659
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1659,
    "end": 1660
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1660,
    "end": 1661
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1662,
    "end": 1663
  },
  {
    "type": "Identifier",
    "value": "namespace",
    "start": 1665,
    "end": 1674
  },
  {
    "type": "Identifier",
    "value": "M3",
    "start": 1675,
    "end": 1677
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1678,
    "end": 1679
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 1684,
    "end": 1689
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1690,
    "end": 1691
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1692,
    "end": 1693
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 1694,
    "end": 1695
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1695,
    "end": 1696
  },
  {
    "type": "Identifier",
    "value": "use",
    "start": 1701,
    "end": 1704
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1704,
    "end": 1705
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1705,
    "end": 1706
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1706,
    "end": 1707
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1707,
    "end": 1708
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 1713,
    "end": 1718
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1719,
    "end": 1720
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 1720,
    "end": 1721
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1721,
    "end": 1722
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1723,
    "end": 1724
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1725,
    "end": 1726
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 1726,
    "end": 1727
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1727,
    "end": 1728
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1728,
    "end": 1729
  },
  {
    "type": "Identifier",
    "value": "use",
    "start": 1734,
    "end": 1737
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1737,
    "end": 1738
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 1738,
    "end": 1739
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1739,
    "end": 1740
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1740,
    "end": 1741
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 1746,
    "end": 1751
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1752,
    "end": 1753
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1753,
    "end": 1754
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1754,
    "end": 1755
  },
  {
    "type": "Identifier",
    "value": "z",
    "start": 1756,
    "end": 1757
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1757,
    "end": 1758
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1759,
    "end": 1760
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1761,
    "end": 1762
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1763,
    "end": 1764
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1764,
    "end": 1765
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 1766,
    "end": 1767
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1768,
    "end": 1769
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1769,
    "end": 1770
  },
  {
    "type": "Identifier",
    "value": "use",
    "start": 1775,
    "end": 1778
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1778,
    "end": 1779
  },
  {
    "type": "Identifier",
    "value": "z",
    "start": 1779,
    "end": 1780
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1780,
    "end": 1781
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1781,
    "end": 1782
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1784,
    "end": 1785
  },
  {
    "type": "Identifier",
    "value": "namespace",
    "start": 1787,
    "end": 1796
  },
  {
    "type": "Identifier",
    "value": "M4",
    "start": 1797,
    "end": 1799
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1800,
    "end": 1801
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1806,
    "end": 1807
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 1816,
    "end": 1821
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1822,
    "end": 1823
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1824,
    "end": 1825
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 1826,
    "end": 1827
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1827,
    "end": 1828
  },
  {
    "type": "Identifier",
    "value": "use",
    "start": 1837,
    "end": 1840
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1840,
    "end": 1841
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1841,
    "end": 1842
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1842,
    "end": 1843
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1843,
    "end": 1844
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 1853,
    "end": 1858
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1859,
    "end": 1860
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 1860,
    "end": 1861
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1861,
    "end": 1862
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1863,
    "end": 1864
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1865,
    "end": 1866
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 1866,
    "end": 1867
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1867,
    "end": 1868
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1868,
    "end": 1869
  },
  {
    "type": "Identifier",
    "value": "use",
    "start": 1878,
    "end": 1881
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1881,
    "end": 1882
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 1882,
    "end": 1883
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1883,
    "end": 1884
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1884,
    "end": 1885
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 1894,
    "end": 1899
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1900,
    "end": 1901
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1901,
    "end": 1902
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1902,
    "end": 1903
  },
  {
    "type": "Identifier",
    "value": "z",
    "start": 1904,
    "end": 1905
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1905,
    "end": 1906
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1907,
    "end": 1908
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1909,
    "end": 1910
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1911,
    "end": 1912
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1912,
    "end": 1913
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 1914,
    "end": 1915
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1916,
    "end": 1917
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1917,
    "end": 1918
  },
  {
    "type": "Identifier",
    "value": "use",
    "start": 1927,
    "end": 1930
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1930,
    "end": 1931
  },
  {
    "type": "Identifier",
    "value": "z",
    "start": 1931,
    "end": 1932
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1932,
    "end": 1933
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1933,
    "end": 1934
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1940,
    "end": 1941
  },
  {
    "type": "Identifier",
    "value": "use",
    "start": 1946,
    "end": 1949
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1949,
    "end": 1950
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1950,
    "end": 1951
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1951,
    "end": 1952
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1952,
    "end": 1953
  },
  {
    "type": "Identifier",
    "value": "use",
    "start": 1958,
    "end": 1961
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1961,
    "end": 1962
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 1962,
    "end": 1963
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1963,
    "end": 1964
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1964,
    "end": 1965
  },
  {
    "type": "Identifier",
    "value": "use",
    "start": 1970,
    "end": 1973
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1973,
    "end": 1974
  },
  {
    "type": "Identifier",
    "value": "z",
    "start": 1974,
    "end": 1975
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1975,
    "end": 1976
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1976,
    "end": 1977
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1978,
    "end": 1979
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1981,
    "end": 1989
  },
  {
    "type": "Identifier",
    "value": "foo3",
    "start": 1990,
    "end": 1994
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1994,
    "end": 1995
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1995,
    "end": 1996
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1997,
    "end": 1998
  },
  {
    "type": "Keyword",
    "value": "for",
    "start": 2003,
    "end": 2006
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2007,
    "end": 2008
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 2008,
    "end": 2011
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2012,
    "end": 2013
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2013,
    "end": 2014
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2015,
    "end": 2016
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2016,
    "end": 2017
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2018,
    "end": 2019
  },
  {
    "type": "Identifier",
    "value": "use",
    "start": 2028,
    "end": 2031
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2031,
    "end": 2032
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2032,
    "end": 2033
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2033,
    "end": 2034
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2034,
    "end": 2035
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2040,
    "end": 2041
  },
  {
    "type": "Keyword",
    "value": "for",
    "start": 2046,
    "end": 2049
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2050,
    "end": 2051
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 2051,
    "end": 2054
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 2055,
    "end": 2056
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 2056,
    "end": 2057
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 2057,
    "end": 2058
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2059,
    "end": 2060
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 2061,
    "end": 2062
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 2062,
    "end": 2063
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2063,
    "end": 2064
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2065,
    "end": 2066
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2066,
    "end": 2067
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2068,
    "end": 2069
  },
  {
    "type": "Identifier",
    "value": "use",
    "start": 2078,
    "end": 2081
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2081,
    "end": 2082
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 2082,
    "end": 2083
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2083,
    "end": 2084
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2084,
    "end": 2085
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2090,
    "end": 2091
  },
  {
    "type": "Keyword",
    "value": "for",
    "start": 2096,
    "end": 2099
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2100,
    "end": 2101
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 2101,
    "end": 2104
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2105,
    "end": 2106
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 2106,
    "end": 2107
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2107,
    "end": 2108
  },
  {
    "type": "Identifier",
    "value": "z",
    "start": 2109,
    "end": 2110
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2110,
    "end": 2111
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2112,
    "end": 2113
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2114,
    "end": 2115
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 2115,
    "end": 2116
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2116,
    "end": 2117
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 2118,
    "end": 2119
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2119,
    "end": 2120
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2120,
    "end": 2121
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2122,
    "end": 2123
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2123,
    "end": 2124
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2125,
    "end": 2126
  },
  {
    "type": "Identifier",
    "value": "use",
    "start": 2135,
    "end": 2138
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2138,
    "end": 2139
  },
  {
    "type": "Identifier",
    "value": "z",
    "start": 2139,
    "end": 2140
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2140,
    "end": 2141
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2141,
    "end": 2142
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2147,
    "end": 2148
  },
  {
    "type": "Identifier",
    "value": "use",
    "start": 2153,
    "end": 2156
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2156,
    "end": 2157
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2157,
    "end": 2158
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2158,
    "end": 2159
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2159,
    "end": 2160
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2161,
    "end": 2162
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 2164,
    "end": 2172
  },
  {
    "type": "Identifier",
    "value": "foo4",
    "start": 2173,
    "end": 2177
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2177,
    "end": 2178
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2178,
    "end": 2179
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2180,
    "end": 2181
  },
  {
    "type": "Keyword",
    "value": "for",
    "start": 2186,
    "end": 2189
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2190,
    "end": 2191
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 2191,
    "end": 2196
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2197,
    "end": 2198
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2199,
    "end": 2200
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 2201,
    "end": 2202
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2202,
    "end": 2203
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2204,
    "end": 2205
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2205,
    "end": 2206
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2207,
    "end": 2208
  },
  {
    "type": "Identifier",
    "value": "use",
    "start": 2217,
    "end": 2220
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2220,
    "end": 2221
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2221,
    "end": 2222
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2222,
    "end": 2223
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2223,
    "end": 2224
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2229,
    "end": 2230
  },
  {
    "type": "Keyword",
    "value": "for",
    "start": 2235,
    "end": 2238
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2239,
    "end": 2240
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 2240,
    "end": 2245
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 2246,
    "end": 2247
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 2247,
    "end": 2248
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 2248,
    "end": 2249
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2250,
    "end": 2251
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 2252,
    "end": 2253
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 2253,
    "end": 2254
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2254,
    "end": 2255
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2256,
    "end": 2257
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2257,
    "end": 2258
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2259,
    "end": 2260
  },
  {
    "type": "Identifier",
    "value": "use",
    "start": 2269,
    "end": 2272
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2272,
    "end": 2273
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 2273,
    "end": 2274
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2274,
    "end": 2275
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2275,
    "end": 2276
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2281,
    "end": 2282
  },
  {
    "type": "Keyword",
    "value": "for",
    "start": 2287,
    "end": 2290
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2291,
    "end": 2292
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 2292,
    "end": 2297
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2298,
    "end": 2299
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 2299,
    "end": 2300
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2300,
    "end": 2301
  },
  {
    "type": "Identifier",
    "value": "z",
    "start": 2302,
    "end": 2303
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2303,
    "end": 2304
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2305,
    "end": 2306
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2307,
    "end": 2308
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 2309,
    "end": 2310
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2310,
    "end": 2311
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 2312,
    "end": 2313
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2314,
    "end": 2315
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2315,
    "end": 2316
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2317,
    "end": 2318
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2318,
    "end": 2319
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2320,
    "end": 2321
  },
  {
    "type": "Identifier",
    "value": "use",
    "start": 2330,
    "end": 2333
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2333,
    "end": 2334
  },
  {
    "type": "Identifier",
    "value": "z",
    "start": 2334,
    "end": 2335
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2335,
    "end": 2336
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2336,
    "end": 2337
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2342,
    "end": 2343
  },
  {
    "type": "Identifier",
    "value": "use",
    "start": 2348,
    "end": 2351
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2351,
    "end": 2352
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2352,
    "end": 2353
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2353,
    "end": 2354
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2354,
    "end": 2355
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2356,
    "end": 2357
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 2359,
    "end": 2367
  },
  {
    "type": "Identifier",
    "value": "foo5",
    "start": 2368,
    "end": 2372
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2372,
    "end": 2373
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2373,
    "end": 2374
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2375,
    "end": 2376
  },
  {
    "type": "Keyword",
    "value": "for",
    "start": 2381,
    "end": 2384
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2385,
    "end": 2386
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 2386,
    "end": 2389
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2390,
    "end": 2391
  },
  {
    "type": "Keyword",
    "value": "in",
    "start": 2392,
    "end": 2394
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 2395,
    "end": 2396
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 2396,
    "end": 2397
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2397,
    "end": 2398
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2399,
    "end": 2400
  },
  {
    "type": "Identifier",
    "value": "use",
    "start": 2409,
    "end": 2412
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2412,
    "end": 2413
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2413,
    "end": 2414
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2414,
    "end": 2415
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2415,
    "end": 2416
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2421,
    "end": 2422
  },
  {
    "type": "Identifier",
    "value": "use",
    "start": 2427,
    "end": 2430
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2430,
    "end": 2431
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2431,
    "end": 2432
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2432,
    "end": 2433
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2433,
    "end": 2434
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2435,
    "end": 2436
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 2438,
    "end": 2446
  },
  {
    "type": "Identifier",
    "value": "foo6",
    "start": 2447,
    "end": 2451
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2451,
    "end": 2452
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2452,
    "end": 2453
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2454,
    "end": 2455
  },
  {
    "type": "Keyword",
    "value": "for",
    "start": 2460,
    "end": 2463
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2464,
    "end": 2465
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 2465,
    "end": 2470
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2471,
    "end": 2472
  },
  {
    "type": "Keyword",
    "value": "in",
    "start": 2473,
    "end": 2475
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 2476,
    "end": 2477
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 2477,
    "end": 2478
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2478,
    "end": 2479
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2480,
    "end": 2481
  },
  {
    "type": "Identifier",
    "value": "use",
    "start": 2490,
    "end": 2493
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2493,
    "end": 2494
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2494,
    "end": 2495
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2495,
    "end": 2496
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2496,
    "end": 2497
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2502,
    "end": 2503
  },
  {
    "type": "Identifier",
    "value": "use",
    "start": 2508,
    "end": 2511
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2511,
    "end": 2512
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2512,
    "end": 2513
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2513,
    "end": 2514
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2514,
    "end": 2515
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2516,
    "end": 2517
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 2519,
    "end": 2527
  },
  {
    "type": "Identifier",
    "value": "foo7",
    "start": 2528,
    "end": 2532
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2532,
    "end": 2533
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2533,
    "end": 2534
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2535,
    "end": 2536
  },
  {
    "type": "Keyword",
    "value": "for",
    "start": 2541,
    "end": 2544
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2545,
    "end": 2546
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 2546,
    "end": 2549
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2550,
    "end": 2551
  },
  {
    "type": "Identifier",
    "value": "of",
    "start": 2552,
    "end": 2554
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 2555,
    "end": 2556
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 2556,
    "end": 2557
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2557,
    "end": 2558
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2559,
    "end": 2560
  },
  {
    "type": "Identifier",
    "value": "use",
    "start": 2569,
    "end": 2572
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2572,
    "end": 2573
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2573,
    "end": 2574
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2574,
    "end": 2575
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2575,
    "end": 2576
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2581,
    "end": 2582
  },
  {
    "type": "Identifier",
    "value": "use",
    "start": 2587,
    "end": 2590
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2590,
    "end": 2591
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2591,
    "end": 2592
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2592,
    "end": 2593
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2593,
    "end": 2594
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2595,
    "end": 2596
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 2598,
    "end": 2606
  },
  {
    "type": "Identifier",
    "value": "foo8",
    "start": 2607,
    "end": 2611
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2611,
    "end": 2612
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2612,
    "end": 2613
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2614,
    "end": 2615
  },
  {
    "type": "Keyword",
    "value": "for",
    "start": 2620,
    "end": 2623
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2624,
    "end": 2625
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 2625,
    "end": 2628
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 2629,
    "end": 2630
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2630,
    "end": 2631
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 2631,
    "end": 2632
  },
  {
    "type": "Identifier",
    "value": "of",
    "start": 2633,
    "end": 2635
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 2636,
    "end": 2637
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 2637,
    "end": 2638
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2638,
    "end": 2639
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2640,
    "end": 2641
  },
  {
    "type": "Identifier",
    "value": "use",
    "start": 2650,
    "end": 2653
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2653,
    "end": 2654
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2654,
    "end": 2655
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2655,
    "end": 2656
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2656,
    "end": 2657
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2662,
    "end": 2663
  },
  {
    "type": "Identifier",
    "value": "use",
    "start": 2668,
    "end": 2671
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2671,
    "end": 2672
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2672,
    "end": 2673
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2673,
    "end": 2674
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2674,
    "end": 2675
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2676,
    "end": 2677
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 2679,
    "end": 2687
  },
  {
    "type": "Identifier",
    "value": "foo9",
    "start": 2688,
    "end": 2692
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2692,
    "end": 2693
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2693,
    "end": 2694
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2695,
    "end": 2696
  },
  {
    "type": "Keyword",
    "value": "for",
    "start": 2701,
    "end": 2704
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2705,
    "end": 2706
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 2706,
    "end": 2709
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2710,
    "end": 2711
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 2711,
    "end": 2712
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2712,
    "end": 2713
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2714,
    "end": 2715
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2715,
    "end": 2716
  },
  {
    "type": "Identifier",
    "value": "of",
    "start": 2717,
    "end": 2719
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 2720,
    "end": 2721
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 2721,
    "end": 2722
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2722,
    "end": 2723
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2724,
    "end": 2725
  },
  {
    "type": "Identifier",
    "value": "use",
    "start": 2734,
    "end": 2737
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2737,
    "end": 2738
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2738,
    "end": 2739
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2739,
    "end": 2740
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2740,
    "end": 2741
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2746,
    "end": 2747
  },
  {
    "type": "Identifier",
    "value": "use",
    "start": 2752,
    "end": 2755
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2755,
    "end": 2756
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2756,
    "end": 2757
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2757,
    "end": 2758
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2758,
    "end": 2759
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2760,
    "end": 2761
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 2763,
    "end": 2771
  },
  {
    "type": "Identifier",
    "value": "foo10",
    "start": 2772,
    "end": 2777
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2777,
    "end": 2778
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2778,
    "end": 2779
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2780,
    "end": 2781
  },
  {
    "type": "Keyword",
    "value": "for",
    "start": 2786,
    "end": 2789
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2790,
    "end": 2791
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 2791,
    "end": 2796
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2797,
    "end": 2798
  },
  {
    "type": "Identifier",
    "value": "of",
    "start": 2799,
    "end": 2801
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 2802,
    "end": 2803
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 2803,
    "end": 2804
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2804,
    "end": 2805
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2806,
    "end": 2807
  },
  {
    "type": "Identifier",
    "value": "use",
    "start": 2816,
    "end": 2819
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2819,
    "end": 2820
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2820,
    "end": 2821
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2821,
    "end": 2822
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2822,
    "end": 2823
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2828,
    "end": 2829
  },
  {
    "type": "Identifier",
    "value": "use",
    "start": 2834,
    "end": 2837
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2837,
    "end": 2838
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2838,
    "end": 2839
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2839,
    "end": 2840
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2840,
    "end": 2841
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2842,
    "end": 2843
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 2845,
    "end": 2853
  },
  {
    "type": "Identifier",
    "value": "foo11",
    "start": 2854,
    "end": 2859
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2859,
    "end": 2860
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2860,
    "end": 2861
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2862,
    "end": 2863
  },
  {
    "type": "Keyword",
    "value": "for",
    "start": 2868,
    "end": 2871
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2872,
    "end": 2873
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 2873,
    "end": 2878
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 2879,
    "end": 2880
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2880,
    "end": 2881
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 2881,
    "end": 2882
  },
  {
    "type": "Identifier",
    "value": "of",
    "start": 2883,
    "end": 2885
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 2886,
    "end": 2887
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 2887,
    "end": 2888
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2888,
    "end": 2889
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2890,
    "end": 2891
  },
  {
    "type": "Identifier",
    "value": "use",
    "start": 2900,
    "end": 2903
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2903,
    "end": 2904
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2904,
    "end": 2905
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2905,
    "end": 2906
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2906,
    "end": 2907
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2912,
    "end": 2913
  },
  {
    "type": "Identifier",
    "value": "use",
    "start": 2918,
    "end": 2921
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2921,
    "end": 2922
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2922,
    "end": 2923
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2923,
    "end": 2924
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2924,
    "end": 2925
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2926,
    "end": 2927
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 2929,
    "end": 2937
  },
  {
    "type": "Identifier",
    "value": "foo12",
    "start": 2938,
    "end": 2943
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2943,
    "end": 2944
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2944,
    "end": 2945
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2946,
    "end": 2947
  },
  {
    "type": "Keyword",
    "value": "for",
    "start": 2952,
    "end": 2955
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2956,
    "end": 2957
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 2957,
    "end": 2962
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2963,
    "end": 2964
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 2964,
    "end": 2965
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2965,
    "end": 2966
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2967,
    "end": 2968
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2968,
    "end": 2969
  },
  {
    "type": "Identifier",
    "value": "of",
    "start": 2970,
    "end": 2972
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 2973,
    "end": 2974
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 2974,
    "end": 2975
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2975,
    "end": 2976
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2977,
    "end": 2978
  },
  {
    "type": "Identifier",
    "value": "use",
    "start": 2987,
    "end": 2990
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2990,
    "end": 2991
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2991,
    "end": 2992
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2992,
    "end": 2993
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2993,
    "end": 2994
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2999,
    "end": 3000
  },
  {
    "type": "Identifier",
    "value": "use",
    "start": 3005,
    "end": 3008
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3008,
    "end": 3009
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 3009,
    "end": 3010
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3010,
    "end": 3011
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3011,
    "end": 3012
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3013,
    "end": 3014
  }
]
```
