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
        "name": "B",
        "optional": false,
        "typeAnnotation": null,
        "start": 27,
        "end": 28
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
              "start": 32,
              "end": 33
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 35,
                "end": 41
              },
              "start": 33,
              "end": 41
            },
            "accessibility": null,
            "static": false,
            "start": 32,
            "end": 41
          }
        ],
        "start": 31,
        "end": 42
      },
      "declare": false,
      "start": 22,
      "end": 42
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
            "name": "flowtypes",
            "optional": false,
            "typeAnnotation": null,
            "start": 50,
            "end": 59
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "expression": false,
            "async": false,
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
                    "start": 63,
                    "end": 64
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 63,
                  "end": 64
                }
              ],
              "start": 62,
              "end": 65
            },
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
                      "start": 69,
                      "end": 70
                    },
                    "typeArguments": null,
                    "start": 69,
                    "end": 70
                  },
                  "start": 67,
                  "end": 70
                },
                "start": 66,
                "end": 70
              }
            ],
            "returnType": null,
            "body": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "TSTypeAliasDeclaration",
                  "id": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Combined",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 84,
                    "end": 92
                  },
                  "typeParameters": null,
                  "typeAnnotation": {
                    "type": "TSIntersectionType",
                    "types": [
                      {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "A",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 95,
                          "end": 96
                        },
                        "typeArguments": null,
                        "start": 95,
                        "end": 96
                      },
                      {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "B",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 99,
                          "end": 100
                        },
                        "typeArguments": null,
                        "start": 99,
                        "end": 100
                      }
                    ],
                    "start": 95,
                    "end": 100
                  },
                  "declare": false,
                  "start": 79,
                  "end": 100
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
                        "name": "combined",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 110,
                        "end": 118
                      },
                      "init": {
                        "type": "ArrowFunctionExpression",
                        "expression": true,
                        "async": false,
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
                                "type": "TSFunctionType",
                                "typeParameters": null,
                                "params": [
                                  {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "combined",
                                    "optional": false,
                                    "typeAnnotation": {
                                      "type": "TSTypeAnnotation",
                                      "typeAnnotation": {
                                        "type": "TSTypeReference",
                                        "typeName": {
                                          "type": "Identifier",
                                          "decorators": [],
                                          "name": "Combined",
                                          "optional": false,
                                          "typeAnnotation": null,
                                          "start": 137,
                                          "end": 145
                                        },
                                        "typeArguments": null,
                                        "start": 137,
                                        "end": 145
                                      },
                                      "start": 135,
                                      "end": 145
                                    },
                                    "start": 127,
                                    "end": 145
                                  }
                                ],
                                "returnType": {
                                  "type": "TSTypeAnnotation",
                                  "typeAnnotation": {
                                    "type": "TSVoidKeyword",
                                    "start": 150,
                                    "end": 154
                                  },
                                  "start": 147,
                                  "end": 154
                                },
                                "start": 126,
                                "end": 154
                              },
                              "start": 124,
                              "end": 154
                            },
                            "start": 122,
                            "end": 154
                          }
                        ],
                        "returnType": null,
                        "body": {
                          "type": "Literal",
                          "value": null,
                          "raw": "null",
                          "start": 159,
                          "end": 163
                        },
                        "id": null,
                        "generator": false,
                        "start": 121,
                        "end": 163
                      },
                      "definite": false,
                      "start": 110,
                      "end": 163
                    }
                  ],
                  "declare": false,
                  "start": 104,
                  "end": 163
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
                        "name": "literal",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 172,
                        "end": 179
                      },
                      "init": {
                        "type": "ArrowFunctionExpression",
                        "expression": true,
                        "async": false,
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
                                "type": "TSFunctionType",
                                "typeParameters": null,
                                "params": [
                                  {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "aPlusB",
                                    "optional": false,
                                    "typeAnnotation": {
                                      "type": "TSTypeAnnotation",
                                      "typeAnnotation": {
                                        "type": "TSIntersectionType",
                                        "types": [
                                          {
                                            "type": "TSTypeReference",
                                            "typeName": {
                                              "type": "Identifier",
                                              "decorators": [],
                                              "name": "A",
                                              "optional": false,
                                              "typeAnnotation": null,
                                              "start": 196,
                                              "end": 197
                                            },
                                            "typeArguments": null,
                                            "start": 196,
                                            "end": 197
                                          },
                                          {
                                            "type": "TSTypeReference",
                                            "typeName": {
                                              "type": "Identifier",
                                              "decorators": [],
                                              "name": "B",
                                              "optional": false,
                                              "typeAnnotation": null,
                                              "start": 200,
                                              "end": 201
                                            },
                                            "typeArguments": null,
                                            "start": 200,
                                            "end": 201
                                          }
                                        ],
                                        "start": 196,
                                        "end": 201
                                      },
                                      "start": 194,
                                      "end": 201
                                    },
                                    "start": 188,
                                    "end": 201
                                  }
                                ],
                                "returnType": {
                                  "type": "TSTypeAnnotation",
                                  "typeAnnotation": {
                                    "type": "TSVoidKeyword",
                                    "start": 206,
                                    "end": 210
                                  },
                                  "start": 203,
                                  "end": 210
                                },
                                "start": 187,
                                "end": 210
                              },
                              "start": 185,
                              "end": 210
                            },
                            "start": 183,
                            "end": 210
                          }
                        ],
                        "returnType": null,
                        "body": {
                          "type": "Literal",
                          "value": null,
                          "raw": "null",
                          "start": 215,
                          "end": 219
                        },
                        "id": null,
                        "generator": false,
                        "start": 182,
                        "end": 219
                      },
                      "definite": false,
                      "start": 172,
                      "end": 219
                    }
                  ],
                  "declare": false,
                  "start": 166,
                  "end": 219
                },
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
                          "name": "combined",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 231,
                          "end": 239
                        },
                        "value": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "combined",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 231,
                          "end": 239
                        },
                        "method": false,
                        "shorthand": true,
                        "computed": false,
                        "optional": false,
                        "start": 231,
                        "end": 239
                      },
                      {
                        "type": "Property",
                        "kind": "init",
                        "key": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "literal",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 241,
                          "end": 248
                        },
                        "value": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "literal",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 241,
                          "end": 248
                        },
                        "method": false,
                        "shorthand": true,
                        "computed": false,
                        "optional": false,
                        "start": 241,
                        "end": 248
                      }
                    ],
                    "start": 230,
                    "end": 249
                  },
                  "start": 223,
                  "end": 249
                }
              ],
              "start": 75,
              "end": 251
            },
            "id": null,
            "generator": false,
            "start": 62,
            "end": 251
          },
          "definite": false,
          "start": 50,
          "end": 251
        }
      ],
      "declare": false,
      "start": 44,
      "end": 251
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
                  "name": "combined",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 260,
                  "end": 268
                },
                "value": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "combined",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 260,
                  "end": 268
                },
                "method": false,
                "shorthand": true,
                "computed": false,
                "optional": false,
                "start": 260,
                "end": 268
              },
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "literal",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 270,
                  "end": 277
                },
                "value": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "literal",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 270,
                  "end": 277
                },
                "method": false,
                "shorthand": true,
                "computed": false,
                "optional": false,
                "start": 270,
                "end": 277
              }
            ],
            "optional": false,
            "typeAnnotation": null,
            "start": 259,
            "end": 278
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "flowtypes",
              "optional": false,
              "typeAnnotation": null,
              "start": 281,
              "end": 290
            },
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "params": [
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
                        "name": "a",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 292,
                        "end": 293
                      },
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSStringKeyword",
                          "start": 295,
                          "end": 301
                        },
                        "start": 293,
                        "end": 301
                      },
                      "accessibility": null,
                      "static": false,
                      "start": 292,
                      "end": 301
                    }
                  ],
                  "start": 291,
                  "end": 302
                }
              ],
              "start": 290,
              "end": 303
            },
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
                      "name": "b",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 305,
                      "end": 306
                    },
                    "value": {
                      "type": "Literal",
                      "value": "b-value",
                      "raw": "'b-value'",
                      "start": 308,
                      "end": 317
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 305,
                    "end": 317
                  }
                ],
                "start": 304,
                "end": 318
              }
            ],
            "optional": false,
            "start": 281,
            "end": 319
          },
          "definite": false,
          "start": 259,
          "end": 319
        }
      ],
      "declare": false,
      "start": 253,
      "end": 319
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "literal",
          "optional": false,
          "typeAnnotation": null,
          "start": 321,
          "end": 328
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "ArrowFunctionExpression",
            "expression": false,
            "async": false,
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "aPlusB",
                "optional": false,
                "typeAnnotation": null,
                "start": 329,
                "end": 335
              }
            ],
            "returnType": null,
            "body": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "aPlusB",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 343,
                      "end": 349
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "b",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 350,
                      "end": 351
                    },
                    "optional": false,
                    "computed": false,
                    "start": 343,
                    "end": 351
                  },
                  "directive": null,
                  "start": 343,
                  "end": 351
                },
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "aPlusB",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 354,
                      "end": 360
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "a",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 361,
                      "end": 362
                    },
                    "optional": false,
                    "computed": false,
                    "start": 354,
                    "end": 362
                  },
                  "directive": null,
                  "start": 354,
                  "end": 362
                }
              ],
              "start": 339,
              "end": 364
            },
            "id": null,
            "generator": false,
            "start": 329,
            "end": 364
          }
        ],
        "optional": false,
        "start": 321,
        "end": 365
      },
      "directive": null,
      "start": 321,
      "end": 365
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "combined",
          "optional": false,
          "typeAnnotation": null,
          "start": 367,
          "end": 375
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "ArrowFunctionExpression",
            "expression": false,
            "async": false,
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "comb",
                "optional": false,
                "typeAnnotation": null,
                "start": 376,
                "end": 380
              }
            ],
            "returnType": null,
            "body": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "comb",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 388,
                      "end": 392
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "b",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 393,
                      "end": 394
                    },
                    "optional": false,
                    "computed": false,
                    "start": 388,
                    "end": 394
                  },
                  "directive": null,
                  "start": 388,
                  "end": 394
                },
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "comb",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 397,
                      "end": 401
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "a",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 402,
                      "end": 403
                    },
                    "optional": false,
                    "computed": false,
                    "start": 397,
                    "end": 403
                  },
                  "directive": null,
                  "start": 397,
                  "end": 403
                }
              ],
              "start": 384,
              "end": 405
            },
            "id": null,
            "generator": false,
            "start": 376,
            "end": 405
          }
        ],
        "optional": false,
        "start": 367,
        "end": 406
      },
      "directive": null,
      "start": 367,
      "end": 406
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f",
        "optional": false,
        "typeAnnotation": null,
        "start": 447,
        "end": 448
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
              "name": "T",
              "optional": false,
              "typeAnnotation": null,
              "start": 449,
              "end": 450
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 449,
            "end": 450
          }
        ],
        "start": 448,
        "end": 451
      },
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
                "name": "T",
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
          "start": 452,
          "end": 456
        }
      ],
      "returnType": {
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
                "name": "a",
                "optional": false,
                "typeAnnotation": null,
                "start": 461,
                "end": 462
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSTypeQuery",
                  "exprName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 471,
                    "end": 472
                  },
                  "typeArguments": null,
                  "start": 464,
                  "end": 472
                },
                "start": 462,
                "end": 472
              },
              "accessibility": null,
              "static": false,
              "start": 461,
              "end": 472
            }
          ],
          "start": 459,
          "end": 474
        },
        "start": 457,
        "end": 474
      },
      "body": null,
      "expression": false,
      "start": 430,
      "end": 475
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
            "name": "n",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 483,
                "end": 489
              },
              "start": 481,
              "end": 489
            },
            "start": 480,
            "end": 489
          },
          "init": {
            "type": "MemberExpression",
            "object": {
              "type": "CallExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "f",
                "optional": false,
                "typeAnnotation": null,
                "start": 492,
                "end": 493
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Literal",
                  "value": 2,
                  "raw": "2",
                  "start": 494,
                  "end": 495
                }
              ],
              "optional": false,
              "start": 492,
              "end": 496
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null,
              "start": 497,
              "end": 498
            },
            "optional": false,
            "computed": false,
            "start": 492,
            "end": 498
          },
          "definite": false,
          "start": 480,
          "end": 498
        }
      ],
      "declare": false,
      "start": 476,
      "end": 499
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 22,
  "end": 499
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
    "value": "B",
    "start": 27,
    "end": 28
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 29,
    "end": 30
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 31,
    "end": 32
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 32,
    "end": 33
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 33,
    "end": 34
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 35,
    "end": 41
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 41,
    "end": 42
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 44,
    "end": 49
  },
  {
    "type": "Identifier",
    "value": "flowtypes",
    "start": 50,
    "end": 59
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 60,
    "end": 61
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 62,
    "end": 63
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 63,
    "end": 64
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 64,
    "end": 65
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 65,
    "end": 66
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 66,
    "end": 67
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 67,
    "end": 68
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 69,
    "end": 70
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 70,
    "end": 71
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 72,
    "end": 74
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 75,
    "end": 76
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 79,
    "end": 83
  },
  {
    "type": "Identifier",
    "value": "Combined",
    "start": 84,
    "end": 92
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 93,
    "end": 94
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 95,
    "end": 96
  },
  {
    "type": "Punctuator",
    "value": "&",
    "start": 97,
    "end": 98
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 99,
    "end": 100
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 104,
    "end": 109
  },
  {
    "type": "Identifier",
    "value": "combined",
    "start": 110,
    "end": 118
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 119,
    "end": 120
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 121,
    "end": 122
  },
  {
    "type": "Identifier",
    "value": "fn",
    "start": 122,
    "end": 124
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 124,
    "end": 125
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 126,
    "end": 127
  },
  {
    "type": "Identifier",
    "value": "combined",
    "start": 127,
    "end": 135
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 135,
    "end": 136
  },
  {
    "type": "Identifier",
    "value": "Combined",
    "start": 137,
    "end": 145
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 145,
    "end": 146
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 147,
    "end": 149
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 150,
    "end": 154
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 154,
    "end": 155
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 156,
    "end": 158
  },
  {
    "type": "Null",
    "value": "null",
    "start": 159,
    "end": 163
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 166,
    "end": 171
  },
  {
    "type": "Identifier",
    "value": "literal",
    "start": 172,
    "end": 179
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 180,
    "end": 181
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 182,
    "end": 183
  },
  {
    "type": "Identifier",
    "value": "fn",
    "start": 183,
    "end": 185
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 185,
    "end": 186
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 187,
    "end": 188
  },
  {
    "type": "Identifier",
    "value": "aPlusB",
    "start": 188,
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
    "value": "A",
    "start": 196,
    "end": 197
  },
  {
    "type": "Punctuator",
    "value": "&",
    "start": 198,
    "end": 199
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 200,
    "end": 201
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 201,
    "end": 202
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 203,
    "end": 205
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 206,
    "end": 210
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 210,
    "end": 211
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 212,
    "end": 214
  },
  {
    "type": "Null",
    "value": "null",
    "start": 215,
    "end": 219
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 223,
    "end": 229
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 230,
    "end": 231
  },
  {
    "type": "Identifier",
    "value": "combined",
    "start": 231,
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
    "value": "literal",
    "start": 241,
    "end": 248
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 248,
    "end": 249
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 250,
    "end": 251
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 253,
    "end": 258
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 259,
    "end": 260
  },
  {
    "type": "Identifier",
    "value": "combined",
    "start": 260,
    "end": 268
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 268,
    "end": 269
  },
  {
    "type": "Identifier",
    "value": "literal",
    "start": 270,
    "end": 277
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 277,
    "end": 278
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 279,
    "end": 280
  },
  {
    "type": "Identifier",
    "value": "flowtypes",
    "start": 281,
    "end": 290
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 290,
    "end": 291
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 291,
    "end": 292
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 292,
    "end": 293
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 293,
    "end": 294
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 295,
    "end": 301
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 301,
    "end": 302
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 302,
    "end": 303
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 303,
    "end": 304
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 304,
    "end": 305
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 305,
    "end": 306
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 306,
    "end": 307
  },
  {
    "type": "String",
    "value": "'b-value'",
    "start": 308,
    "end": 317
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
    "type": "Identifier",
    "value": "literal",
    "start": 321,
    "end": 328
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 328,
    "end": 329
  },
  {
    "type": "Identifier",
    "value": "aPlusB",
    "start": 329,
    "end": 335
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 336,
    "end": 338
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 339,
    "end": 340
  },
  {
    "type": "Identifier",
    "value": "aPlusB",
    "start": 343,
    "end": 349
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 349,
    "end": 350
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 350,
    "end": 351
  },
  {
    "type": "Identifier",
    "value": "aPlusB",
    "start": 354,
    "end": 360
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 360,
    "end": 361
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 361,
    "end": 362
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 363,
    "end": 364
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 364,
    "end": 365
  },
  {
    "type": "Identifier",
    "value": "combined",
    "start": 367,
    "end": 375
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 375,
    "end": 376
  },
  {
    "type": "Identifier",
    "value": "comb",
    "start": 376,
    "end": 380
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 381,
    "end": 383
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 384,
    "end": 385
  },
  {
    "type": "Identifier",
    "value": "comb",
    "start": 388,
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
    "value": "b",
    "start": 393,
    "end": 394
  },
  {
    "type": "Identifier",
    "value": "comb",
    "start": 397,
    "end": 401
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 401,
    "end": 402
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 402,
    "end": 403
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 404,
    "end": 405
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 405,
    "end": 406
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 430,
    "end": 437
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 438,
    "end": 446
  },
  {
    "type": "Identifier",
    "value": "f",
    "start": 447,
    "end": 448
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 448,
    "end": 449
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 449,
    "end": 450
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 450,
    "end": 451
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 451,
    "end": 452
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 452,
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
    "value": "T",
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
    "value": "{",
    "start": 459,
    "end": 460
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 461,
    "end": 462
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 462,
    "end": 463
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 464,
    "end": 470
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 471,
    "end": 472
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 473,
    "end": 474
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 474,
    "end": 475
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 476,
    "end": 479
  },
  {
    "type": "Identifier",
    "value": "n",
    "start": 480,
    "end": 481
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 481,
    "end": 482
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 483,
    "end": 489
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 490,
    "end": 491
  },
  {
    "type": "Identifier",
    "value": "f",
    "start": 492,
    "end": 493
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 493,
    "end": 494
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 494,
    "end": 495
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 495,
    "end": 496
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 496,
    "end": 497
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 497,
    "end": 498
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 498,
    "end": 499
  }
]
```
