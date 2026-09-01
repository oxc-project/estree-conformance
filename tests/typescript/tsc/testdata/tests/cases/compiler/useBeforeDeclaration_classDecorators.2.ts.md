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
            "name": "dec",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 19,
                "end": 22
              },
              "start": 17,
              "end": 22
            },
            "start": 14,
            "end": 22
          },
          "init": null,
          "definite": false,
          "start": 14,
          "end": 22
        }
      ],
      "declare": true,
      "start": 0,
      "end": 23
    },
    {
      "type": "ClassDeclaration",
      "decorators": [
        {
          "type": "Decorator",
          "expression": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "dec",
              "optional": false,
              "typeAnnotation": null,
              "start": 32,
              "end": 35
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "ArrowFunctionExpression",
                "expression": true,
                "async": false,
                "typeParameters": null,
                "params": [],
                "returnType": null,
                "body": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "C1",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 42,
                  "end": 44
                },
                "id": null,
                "generator": false,
                "start": 36,
                "end": 44
              }
            ],
            "optional": false,
            "start": 32,
            "end": 45
          },
          "start": 31,
          "end": 45
        }
      ],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "C1",
        "optional": false,
        "typeAnnotation": null,
        "start": 52,
        "end": 54
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [],
        "start": 55,
        "end": 58
      },
      "abstract": false,
      "declare": false,
      "start": 31,
      "end": 58
    },
    {
      "type": "ClassDeclaration",
      "decorators": [
        {
          "type": "Decorator",
          "expression": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "dec",
              "optional": false,
              "typeAnnotation": null,
              "start": 70,
              "end": 73
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "C2",
                "optional": false,
                "typeAnnotation": null,
                "start": 74,
                "end": 76
              }
            ],
            "optional": false,
            "start": 70,
            "end": 77
          },
          "start": 69,
          "end": 77
        }
      ],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "C2",
        "optional": false,
        "typeAnnotation": null,
        "start": 84,
        "end": 86
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [],
        "start": 87,
        "end": 90
      },
      "abstract": false,
      "declare": false,
      "start": 69,
      "end": 90
    },
    {
      "type": "ClassDeclaration",
      "decorators": [
        {
          "type": "Decorator",
          "expression": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "dec",
              "optional": false,
              "typeAnnotation": null,
              "start": 102,
              "end": 105
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "CallExpression",
                "callee": {
                  "type": "ArrowFunctionExpression",
                  "expression": true,
                  "async": false,
                  "typeParameters": null,
                  "params": [],
                  "returnType": null,
                  "body": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "C3",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 113,
                    "end": 115
                  },
                  "id": null,
                  "generator": false,
                  "start": 107,
                  "end": 115
                },
                "typeArguments": null,
                "arguments": [],
                "optional": false,
                "start": 106,
                "end": 118
              }
            ],
            "optional": false,
            "start": 102,
            "end": 119
          },
          "start": 101,
          "end": 119
        }
      ],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "C3",
        "optional": false,
        "typeAnnotation": null,
        "start": 126,
        "end": 128
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [],
        "start": 129,
        "end": 132
      },
      "abstract": false,
      "declare": false,
      "start": 101,
      "end": 132
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "C4",
        "optional": false,
        "typeAnnotation": null,
        "start": 146,
        "end": 148
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
            "decorators": [
              {
                "type": "Decorator",
                "expression": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "dec",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 156,
                    "end": 159
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "ArrowFunctionExpression",
                      "expression": true,
                      "async": false,
                      "typeParameters": null,
                      "params": [],
                      "returnType": null,
                      "body": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "C4",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 166,
                        "end": 168
                      },
                      "id": null,
                      "generator": false,
                      "start": 160,
                      "end": 168
                    }
                  ],
                  "optional": false,
                  "start": 156,
                  "end": 169
                },
                "start": 155,
                "end": 169
              }
            ],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "method",
              "optional": false,
              "typeAnnotation": null,
              "start": 177,
              "end": 183
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
                "body": [],
                "start": 186,
                "end": 188
              },
              "expression": false,
              "start": 183,
              "end": 188
            },
            "kind": "method",
            "computed": false,
            "static": true,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 155,
            "end": 188
          },
          {
            "type": "MethodDefinition",
            "decorators": [
              {
                "type": "Decorator",
                "expression": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "dec",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 194,
                    "end": 197
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "ArrowFunctionExpression",
                      "expression": true,
                      "async": false,
                      "typeParameters": null,
                      "params": [],
                      "returnType": null,
                      "body": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "C4",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 204,
                        "end": 206
                      },
                      "id": null,
                      "generator": false,
                      "start": 198,
                      "end": 206
                    }
                  ],
                  "optional": false,
                  "start": 194,
                  "end": 207
                },
                "start": 193,
                "end": 207
              }
            ],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "w",
              "optional": false,
              "typeAnnotation": null,
              "start": 219,
              "end": 220
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
                      "type": "MemberExpression",
                      "object": {
                        "type": "ThisExpression",
                        "start": 232,
                        "end": 236
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "y",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 237,
                        "end": 238
                      },
                      "optional": false,
                      "computed": false,
                      "start": 232,
                      "end": 238
                    },
                    "start": 225,
                    "end": 239
                  }
                ],
                "start": 223,
                "end": 241
              },
              "expression": false,
              "start": 220,
              "end": 241
            },
            "kind": "get",
            "computed": false,
            "static": true,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 193,
            "end": 241
          },
          {
            "type": "MethodDefinition",
            "decorators": [
              {
                "type": "Decorator",
                "expression": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "dec",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 247,
                    "end": 250
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "ArrowFunctionExpression",
                      "expression": true,
                      "async": false,
                      "typeParameters": null,
                      "params": [],
                      "returnType": null,
                      "body": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "C4",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 257,
                        "end": 259
                      },
                      "id": null,
                      "generator": false,
                      "start": 251,
                      "end": 259
                    }
                  ],
                  "optional": false,
                  "start": 247,
                  "end": 260
                },
                "start": 246,
                "end": 260
              }
            ],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 272,
              "end": 273
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
                  "type": "Identifier",
                  "decorators": [],
                  "name": "v",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSAnyKeyword",
                      "start": 277,
                      "end": 280
                    },
                    "start": 275,
                    "end": 280
                  },
                  "start": 274,
                  "end": 280
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [],
                "start": 282,
                "end": 284
              },
              "expression": false,
              "start": 273,
              "end": 284
            },
            "kind": "set",
            "computed": false,
            "static": true,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 246,
            "end": 284
          },
          {
            "type": "PropertyDefinition",
            "decorators": [
              {
                "type": "Decorator",
                "expression": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "dec",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 290,
                    "end": 293
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "ArrowFunctionExpression",
                      "expression": true,
                      "async": false,
                      "typeParameters": null,
                      "params": [],
                      "returnType": null,
                      "body": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "C4",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 300,
                        "end": 302
                      },
                      "id": null,
                      "generator": false,
                      "start": 294,
                      "end": 302
                    }
                  ],
                  "optional": false,
                  "start": 290,
                  "end": 303
                },
                "start": 289,
                "end": 303
              }
            ],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "y",
              "optional": false,
              "typeAnnotation": null,
              "start": 311,
              "end": 312
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 314,
                "end": 317
              },
              "start": 312,
              "end": 317
            },
            "value": null,
            "computed": false,
            "static": true,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 289,
            "end": 318
          },
          {
            "type": "AccessorProperty",
            "decorators": [
              {
                "type": "Decorator",
                "expression": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "dec",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 324,
                    "end": 327
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "ArrowFunctionExpression",
                      "expression": true,
                      "async": false,
                      "typeParameters": null,
                      "params": [],
                      "returnType": null,
                      "body": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "C4",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 334,
                        "end": 336
                      },
                      "id": null,
                      "generator": false,
                      "start": 328,
                      "end": 336
                    }
                  ],
                  "optional": false,
                  "start": 324,
                  "end": 337
                },
                "start": 323,
                "end": 337
              }
            ],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "z",
              "optional": false,
              "typeAnnotation": null,
              "start": 354,
              "end": 355
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 357,
                "end": 360
              },
              "start": 355,
              "end": 360
            },
            "value": null,
            "computed": false,
            "static": true,
            "override": false,
            "definite": false,
            "accessibility": null,
            "declare": false,
            "optional": false,
            "readonly": false,
            "start": 323,
            "end": 361
          },
          {
            "type": "MethodDefinition",
            "decorators": [
              {
                "type": "Decorator",
                "expression": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "dec",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 368,
                    "end": 371
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "ArrowFunctionExpression",
                      "expression": true,
                      "async": false,
                      "typeParameters": null,
                      "params": [],
                      "returnType": null,
                      "body": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "C4",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 378,
                        "end": 380
                      },
                      "id": null,
                      "generator": false,
                      "start": 372,
                      "end": 380
                    }
                  ],
                  "optional": false,
                  "start": 368,
                  "end": 381
                },
                "start": 367,
                "end": 381
              }
            ],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "method",
              "optional": false,
              "typeAnnotation": null,
              "start": 382,
              "end": 388
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
                "body": [],
                "start": 391,
                "end": 393
              },
              "expression": false,
              "start": 388,
              "end": 393
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 367,
            "end": 393
          },
          {
            "type": "MethodDefinition",
            "decorators": [
              {
                "type": "Decorator",
                "expression": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "dec",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 399,
                    "end": 402
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "ArrowFunctionExpression",
                      "expression": true,
                      "async": false,
                      "typeParameters": null,
                      "params": [],
                      "returnType": null,
                      "body": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "C4",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 409,
                        "end": 411
                      },
                      "id": null,
                      "generator": false,
                      "start": 403,
                      "end": 411
                    }
                  ],
                  "optional": false,
                  "start": 399,
                  "end": 412
                },
                "start": 398,
                "end": 412
              }
            ],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "w",
              "optional": false,
              "typeAnnotation": null,
              "start": 417,
              "end": 418
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
                      "type": "MemberExpression",
                      "object": {
                        "type": "ThisExpression",
                        "start": 430,
                        "end": 434
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "y",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 435,
                        "end": 436
                      },
                      "optional": false,
                      "computed": false,
                      "start": 430,
                      "end": 436
                    },
                    "start": 423,
                    "end": 437
                  }
                ],
                "start": 421,
                "end": 439
              },
              "expression": false,
              "start": 418,
              "end": 439
            },
            "kind": "get",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 398,
            "end": 439
          },
          {
            "type": "MethodDefinition",
            "decorators": [
              {
                "type": "Decorator",
                "expression": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "dec",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 445,
                    "end": 448
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "ArrowFunctionExpression",
                      "expression": true,
                      "async": false,
                      "typeParameters": null,
                      "params": [],
                      "returnType": null,
                      "body": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "C4",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 455,
                        "end": 457
                      },
                      "id": null,
                      "generator": false,
                      "start": 449,
                      "end": 457
                    }
                  ],
                  "optional": false,
                  "start": 445,
                  "end": 458
                },
                "start": 444,
                "end": 458
              }
            ],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 463,
              "end": 464
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
                  "type": "Identifier",
                  "decorators": [],
                  "name": "v",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSAnyKeyword",
                      "start": 468,
                      "end": 471
                    },
                    "start": 466,
                    "end": 471
                  },
                  "start": 465,
                  "end": 471
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [],
                "start": 473,
                "end": 475
              },
              "expression": false,
              "start": 464,
              "end": 475
            },
            "kind": "set",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 444,
            "end": 475
          },
          {
            "type": "PropertyDefinition",
            "decorators": [
              {
                "type": "Decorator",
                "expression": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "dec",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 481,
                    "end": 484
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "ArrowFunctionExpression",
                      "expression": true,
                      "async": false,
                      "typeParameters": null,
                      "params": [],
                      "returnType": null,
                      "body": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "C4",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 491,
                        "end": 493
                      },
                      "id": null,
                      "generator": false,
                      "start": 485,
                      "end": 493
                    }
                  ],
                  "optional": false,
                  "start": 481,
                  "end": 494
                },
                "start": 480,
                "end": 494
              }
            ],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "y",
              "optional": false,
              "typeAnnotation": null,
              "start": 495,
              "end": 496
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 498,
                "end": 501
              },
              "start": 496,
              "end": 501
            },
            "value": null,
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 480,
            "end": 502
          },
          {
            "type": "AccessorProperty",
            "decorators": [
              {
                "type": "Decorator",
                "expression": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "dec",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 508,
                    "end": 511
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "ArrowFunctionExpression",
                      "expression": true,
                      "async": false,
                      "typeParameters": null,
                      "params": [],
                      "returnType": null,
                      "body": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "C4",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 518,
                        "end": 520
                      },
                      "id": null,
                      "generator": false,
                      "start": 512,
                      "end": 520
                    }
                  ],
                  "optional": false,
                  "start": 508,
                  "end": 521
                },
                "start": 507,
                "end": 521
              }
            ],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "z",
              "optional": false,
              "typeAnnotation": null,
              "start": 531,
              "end": 532
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 534,
                "end": 537
              },
              "start": 532,
              "end": 537
            },
            "value": null,
            "computed": false,
            "static": false,
            "override": false,
            "definite": false,
            "accessibility": null,
            "declare": false,
            "optional": false,
            "readonly": false,
            "start": 507,
            "end": 538
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "constructor",
              "optional": false,
              "typeAnnotation": null,
              "start": 544,
              "end": 555
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
                  "type": "Identifier",
                  "decorators": [
                    {
                      "type": "Decorator",
                      "expression": {
                        "type": "CallExpression",
                        "callee": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "dec",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 557,
                          "end": 560
                        },
                        "typeArguments": null,
                        "arguments": [
                          {
                            "type": "ArrowFunctionExpression",
                            "expression": true,
                            "async": false,
                            "typeParameters": null,
                            "params": [],
                            "returnType": null,
                            "body": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "C4",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 567,
                              "end": 569
                            },
                            "id": null,
                            "generator": false,
                            "start": 561,
                            "end": 569
                          }
                        ],
                        "optional": false,
                        "start": 557,
                        "end": 570
                      },
                      "start": 556,
                      "end": 570
                    }
                  ],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSAnyKeyword",
                      "start": 574,
                      "end": 577
                    },
                    "start": 572,
                    "end": 577
                  },
                  "start": 571,
                  "end": 577
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [],
                "start": 579,
                "end": 581
              },
              "expression": false,
              "start": 555,
              "end": 581
            },
            "kind": "constructor",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 544,
            "end": 581
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "method2",
              "optional": false,
              "typeAnnotation": null,
              "start": 593,
              "end": 600
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
                  "type": "Identifier",
                  "decorators": [
                    {
                      "type": "Decorator",
                      "expression": {
                        "type": "CallExpression",
                        "callee": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "dec",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 602,
                          "end": 605
                        },
                        "typeArguments": null,
                        "arguments": [
                          {
                            "type": "ArrowFunctionExpression",
                            "expression": true,
                            "async": false,
                            "typeParameters": null,
                            "params": [],
                            "returnType": null,
                            "body": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "C4",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 612,
                              "end": 614
                            },
                            "id": null,
                            "generator": false,
                            "start": 606,
                            "end": 614
                          }
                        ],
                        "optional": false,
                        "start": 602,
                        "end": 615
                      },
                      "start": 601,
                      "end": 615
                    }
                  ],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSAnyKeyword",
                      "start": 619,
                      "end": 622
                    },
                    "start": 617,
                    "end": 622
                  },
                  "start": 616,
                  "end": 622
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [],
                "start": 624,
                "end": 626
              },
              "expression": false,
              "start": 600,
              "end": 626
            },
            "kind": "method",
            "computed": false,
            "static": true,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 586,
            "end": 626
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "method2",
              "optional": false,
              "typeAnnotation": null,
              "start": 631,
              "end": 638
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
                  "type": "Identifier",
                  "decorators": [
                    {
                      "type": "Decorator",
                      "expression": {
                        "type": "CallExpression",
                        "callee": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "dec",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 640,
                          "end": 643
                        },
                        "typeArguments": null,
                        "arguments": [
                          {
                            "type": "ArrowFunctionExpression",
                            "expression": true,
                            "async": false,
                            "typeParameters": null,
                            "params": [],
                            "returnType": null,
                            "body": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "C4",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 650,
                              "end": 652
                            },
                            "id": null,
                            "generator": false,
                            "start": 644,
                            "end": 652
                          }
                        ],
                        "optional": false,
                        "start": 640,
                        "end": 653
                      },
                      "start": 639,
                      "end": 653
                    }
                  ],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSAnyKeyword",
                      "start": 657,
                      "end": 660
                    },
                    "start": 655,
                    "end": 660
                  },
                  "start": 654,
                  "end": 660
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [],
                "start": 662,
                "end": 664
              },
              "expression": false,
              "start": 638,
              "end": 664
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 631,
            "end": 664
          }
        ],
        "start": 149,
        "end": 666
      },
      "abstract": false,
      "declare": false,
      "start": 140,
      "end": 666
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "C5",
        "optional": false,
        "typeAnnotation": null,
        "start": 683,
        "end": 685
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
            "decorators": [
              {
                "type": "Decorator",
                "expression": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "dec",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 693,
                    "end": 696
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "C5",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 697,
                      "end": 699
                    }
                  ],
                  "optional": false,
                  "start": 693,
                  "end": 700
                },
                "start": 692,
                "end": 700
              }
            ],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "method",
              "optional": false,
              "typeAnnotation": null,
              "start": 708,
              "end": 714
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
                "body": [],
                "start": 717,
                "end": 719
              },
              "expression": false,
              "start": 714,
              "end": 719
            },
            "kind": "method",
            "computed": false,
            "static": true,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 692,
            "end": 719
          },
          {
            "type": "MethodDefinition",
            "decorators": [
              {
                "type": "Decorator",
                "expression": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "dec",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 725,
                    "end": 728
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "C5",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 729,
                      "end": 731
                    }
                  ],
                  "optional": false,
                  "start": 725,
                  "end": 732
                },
                "start": 724,
                "end": 732
              }
            ],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "w",
              "optional": false,
              "typeAnnotation": null,
              "start": 744,
              "end": 745
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
                      "type": "MemberExpression",
                      "object": {
                        "type": "ThisExpression",
                        "start": 757,
                        "end": 761
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "y",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 762,
                        "end": 763
                      },
                      "optional": false,
                      "computed": false,
                      "start": 757,
                      "end": 763
                    },
                    "start": 750,
                    "end": 764
                  }
                ],
                "start": 748,
                "end": 766
              },
              "expression": false,
              "start": 745,
              "end": 766
            },
            "kind": "get",
            "computed": false,
            "static": true,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 724,
            "end": 766
          },
          {
            "type": "MethodDefinition",
            "decorators": [
              {
                "type": "Decorator",
                "expression": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "dec",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 772,
                    "end": 775
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "C5",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 776,
                      "end": 778
                    }
                  ],
                  "optional": false,
                  "start": 772,
                  "end": 779
                },
                "start": 771,
                "end": 779
              }
            ],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 791,
              "end": 792
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
                  "type": "Identifier",
                  "decorators": [],
                  "name": "v",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSAnyKeyword",
                      "start": 796,
                      "end": 799
                    },
                    "start": 794,
                    "end": 799
                  },
                  "start": 793,
                  "end": 799
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [],
                "start": 801,
                "end": 803
              },
              "expression": false,
              "start": 792,
              "end": 803
            },
            "kind": "set",
            "computed": false,
            "static": true,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 771,
            "end": 803
          },
          {
            "type": "PropertyDefinition",
            "decorators": [
              {
                "type": "Decorator",
                "expression": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "dec",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 809,
                    "end": 812
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "C5",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 813,
                      "end": 815
                    }
                  ],
                  "optional": false,
                  "start": 809,
                  "end": 816
                },
                "start": 808,
                "end": 816
              }
            ],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "y",
              "optional": false,
              "typeAnnotation": null,
              "start": 824,
              "end": 825
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 827,
                "end": 830
              },
              "start": 825,
              "end": 830
            },
            "value": null,
            "computed": false,
            "static": true,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 808,
            "end": 831
          },
          {
            "type": "AccessorProperty",
            "decorators": [
              {
                "type": "Decorator",
                "expression": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "dec",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 837,
                    "end": 840
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "C5",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 841,
                      "end": 843
                    }
                  ],
                  "optional": false,
                  "start": 837,
                  "end": 844
                },
                "start": 836,
                "end": 844
              }
            ],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "z",
              "optional": false,
              "typeAnnotation": null,
              "start": 861,
              "end": 862
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 864,
                "end": 867
              },
              "start": 862,
              "end": 867
            },
            "value": null,
            "computed": false,
            "static": true,
            "override": false,
            "definite": false,
            "accessibility": null,
            "declare": false,
            "optional": false,
            "readonly": false,
            "start": 836,
            "end": 868
          },
          {
            "type": "MethodDefinition",
            "decorators": [
              {
                "type": "Decorator",
                "expression": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "dec",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 875,
                    "end": 878
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "C5",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 879,
                      "end": 881
                    }
                  ],
                  "optional": false,
                  "start": 875,
                  "end": 882
                },
                "start": 874,
                "end": 882
              }
            ],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "method",
              "optional": false,
              "typeAnnotation": null,
              "start": 883,
              "end": 889
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
                "body": [],
                "start": 892,
                "end": 894
              },
              "expression": false,
              "start": 889,
              "end": 894
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 874,
            "end": 894
          },
          {
            "type": "MethodDefinition",
            "decorators": [
              {
                "type": "Decorator",
                "expression": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "dec",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 900,
                    "end": 903
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "C5",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 904,
                      "end": 906
                    }
                  ],
                  "optional": false,
                  "start": 900,
                  "end": 907
                },
                "start": 899,
                "end": 907
              }
            ],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "w",
              "optional": false,
              "typeAnnotation": null,
              "start": 912,
              "end": 913
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
                      "type": "MemberExpression",
                      "object": {
                        "type": "ThisExpression",
                        "start": 925,
                        "end": 929
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "y",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 930,
                        "end": 931
                      },
                      "optional": false,
                      "computed": false,
                      "start": 925,
                      "end": 931
                    },
                    "start": 918,
                    "end": 932
                  }
                ],
                "start": 916,
                "end": 934
              },
              "expression": false,
              "start": 913,
              "end": 934
            },
            "kind": "get",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 899,
            "end": 934
          },
          {
            "type": "MethodDefinition",
            "decorators": [
              {
                "type": "Decorator",
                "expression": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "dec",
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
                      "name": "C5",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 944,
                      "end": 946
                    }
                  ],
                  "optional": false,
                  "start": 940,
                  "end": 947
                },
                "start": 939,
                "end": 947
              }
            ],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 952,
              "end": 953
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
                  "type": "Identifier",
                  "decorators": [],
                  "name": "v",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSAnyKeyword",
                      "start": 957,
                      "end": 960
                    },
                    "start": 955,
                    "end": 960
                  },
                  "start": 954,
                  "end": 960
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [],
                "start": 962,
                "end": 964
              },
              "expression": false,
              "start": 953,
              "end": 964
            },
            "kind": "set",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 939,
            "end": 964
          },
          {
            "type": "PropertyDefinition",
            "decorators": [
              {
                "type": "Decorator",
                "expression": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "dec",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 970,
                    "end": 973
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "C5",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 974,
                      "end": 976
                    }
                  ],
                  "optional": false,
                  "start": 970,
                  "end": 977
                },
                "start": 969,
                "end": 977
              }
            ],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "y",
              "optional": false,
              "typeAnnotation": null,
              "start": 978,
              "end": 979
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 981,
                "end": 984
              },
              "start": 979,
              "end": 984
            },
            "value": null,
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 969,
            "end": 985
          },
          {
            "type": "AccessorProperty",
            "decorators": [
              {
                "type": "Decorator",
                "expression": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "dec",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 991,
                    "end": 994
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "C5",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 995,
                      "end": 997
                    }
                  ],
                  "optional": false,
                  "start": 991,
                  "end": 998
                },
                "start": 990,
                "end": 998
              }
            ],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "z",
              "optional": false,
              "typeAnnotation": null,
              "start": 1008,
              "end": 1009
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 1011,
                "end": 1014
              },
              "start": 1009,
              "end": 1014
            },
            "value": null,
            "computed": false,
            "static": false,
            "override": false,
            "definite": false,
            "accessibility": null,
            "declare": false,
            "optional": false,
            "readonly": false,
            "start": 990,
            "end": 1015
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "constructor",
              "optional": false,
              "typeAnnotation": null,
              "start": 1022,
              "end": 1033
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
                  "type": "Identifier",
                  "decorators": [
                    {
                      "type": "Decorator",
                      "expression": {
                        "type": "CallExpression",
                        "callee": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "dec",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1035,
                          "end": 1038
                        },
                        "typeArguments": null,
                        "arguments": [
                          {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "C5",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1039,
                            "end": 1041
                          }
                        ],
                        "optional": false,
                        "start": 1035,
                        "end": 1042
                      },
                      "start": 1034,
                      "end": 1042
                    }
                  ],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSAnyKeyword",
                      "start": 1046,
                      "end": 1049
                    },
                    "start": 1044,
                    "end": 1049
                  },
                  "start": 1043,
                  "end": 1049
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [],
                "start": 1051,
                "end": 1053
              },
              "expression": false,
              "start": 1033,
              "end": 1053
            },
            "kind": "constructor",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 1022,
            "end": 1053
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "method2",
              "optional": false,
              "typeAnnotation": null,
              "start": 1065,
              "end": 1072
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
                  "type": "Identifier",
                  "decorators": [
                    {
                      "type": "Decorator",
                      "expression": {
                        "type": "CallExpression",
                        "callee": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "dec",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1074,
                          "end": 1077
                        },
                        "typeArguments": null,
                        "arguments": [
                          {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "C5",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1078,
                            "end": 1080
                          }
                        ],
                        "optional": false,
                        "start": 1074,
                        "end": 1081
                      },
                      "start": 1073,
                      "end": 1081
                    }
                  ],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSAnyKeyword",
                      "start": 1085,
                      "end": 1088
                    },
                    "start": 1083,
                    "end": 1088
                  },
                  "start": 1082,
                  "end": 1088
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [],
                "start": 1090,
                "end": 1092
              },
              "expression": false,
              "start": 1072,
              "end": 1092
            },
            "kind": "method",
            "computed": false,
            "static": true,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 1058,
            "end": 1092
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "method2",
              "optional": false,
              "typeAnnotation": null,
              "start": 1097,
              "end": 1104
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
                  "type": "Identifier",
                  "decorators": [
                    {
                      "type": "Decorator",
                      "expression": {
                        "type": "CallExpression",
                        "callee": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "dec",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1106,
                          "end": 1109
                        },
                        "typeArguments": null,
                        "arguments": [
                          {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "C5",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1110,
                            "end": 1112
                          }
                        ],
                        "optional": false,
                        "start": 1106,
                        "end": 1113
                      },
                      "start": 1105,
                      "end": 1113
                    }
                  ],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSAnyKeyword",
                      "start": 1117,
                      "end": 1120
                    },
                    "start": 1115,
                    "end": 1120
                  },
                  "start": 1114,
                  "end": 1120
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [],
                "start": 1122,
                "end": 1124
              },
              "expression": false,
              "start": 1104,
              "end": 1124
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 1097,
            "end": 1124
          }
        ],
        "start": 686,
        "end": 1126
      },
      "abstract": false,
      "declare": false,
      "start": 677,
      "end": 1126
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "C6",
        "optional": false,
        "typeAnnotation": null,
        "start": 1143,
        "end": 1145
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
            "decorators": [
              {
                "type": "Decorator",
                "expression": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "dec",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1153,
                    "end": 1156
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "CallExpression",
                      "callee": {
                        "type": "ArrowFunctionExpression",
                        "expression": true,
                        "async": false,
                        "typeParameters": null,
                        "params": [],
                        "returnType": null,
                        "body": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "C6",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1164,
                          "end": 1166
                        },
                        "id": null,
                        "generator": false,
                        "start": 1158,
                        "end": 1166
                      },
                      "typeArguments": null,
                      "arguments": [],
                      "optional": false,
                      "start": 1157,
                      "end": 1169
                    }
                  ],
                  "optional": false,
                  "start": 1153,
                  "end": 1170
                },
                "start": 1152,
                "end": 1170
              }
            ],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "method",
              "optional": false,
              "typeAnnotation": null,
              "start": 1178,
              "end": 1184
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
                "body": [],
                "start": 1187,
                "end": 1189
              },
              "expression": false,
              "start": 1184,
              "end": 1189
            },
            "kind": "method",
            "computed": false,
            "static": true,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 1152,
            "end": 1189
          },
          {
            "type": "MethodDefinition",
            "decorators": [
              {
                "type": "Decorator",
                "expression": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "dec",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1195,
                    "end": 1198
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "CallExpression",
                      "callee": {
                        "type": "ArrowFunctionExpression",
                        "expression": true,
                        "async": false,
                        "typeParameters": null,
                        "params": [],
                        "returnType": null,
                        "body": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "C6",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1206,
                          "end": 1208
                        },
                        "id": null,
                        "generator": false,
                        "start": 1200,
                        "end": 1208
                      },
                      "typeArguments": null,
                      "arguments": [],
                      "optional": false,
                      "start": 1199,
                      "end": 1211
                    }
                  ],
                  "optional": false,
                  "start": 1195,
                  "end": 1212
                },
                "start": 1194,
                "end": 1212
              }
            ],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "w",
              "optional": false,
              "typeAnnotation": null,
              "start": 1224,
              "end": 1225
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
                      "type": "MemberExpression",
                      "object": {
                        "type": "ThisExpression",
                        "start": 1237,
                        "end": 1241
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "y",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1242,
                        "end": 1243
                      },
                      "optional": false,
                      "computed": false,
                      "start": 1237,
                      "end": 1243
                    },
                    "start": 1230,
                    "end": 1244
                  }
                ],
                "start": 1228,
                "end": 1246
              },
              "expression": false,
              "start": 1225,
              "end": 1246
            },
            "kind": "get",
            "computed": false,
            "static": true,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 1194,
            "end": 1246
          },
          {
            "type": "MethodDefinition",
            "decorators": [
              {
                "type": "Decorator",
                "expression": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "dec",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1252,
                    "end": 1255
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "CallExpression",
                      "callee": {
                        "type": "ArrowFunctionExpression",
                        "expression": true,
                        "async": false,
                        "typeParameters": null,
                        "params": [],
                        "returnType": null,
                        "body": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "C6",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1263,
                          "end": 1265
                        },
                        "id": null,
                        "generator": false,
                        "start": 1257,
                        "end": 1265
                      },
                      "typeArguments": null,
                      "arguments": [],
                      "optional": false,
                      "start": 1256,
                      "end": 1268
                    }
                  ],
                  "optional": false,
                  "start": 1252,
                  "end": 1269
                },
                "start": 1251,
                "end": 1269
              }
            ],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 1281,
              "end": 1282
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
                  "type": "Identifier",
                  "decorators": [],
                  "name": "v",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSAnyKeyword",
                      "start": 1286,
                      "end": 1289
                    },
                    "start": 1284,
                    "end": 1289
                  },
                  "start": 1283,
                  "end": 1289
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [],
                "start": 1291,
                "end": 1293
              },
              "expression": false,
              "start": 1282,
              "end": 1293
            },
            "kind": "set",
            "computed": false,
            "static": true,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 1251,
            "end": 1293
          },
          {
            "type": "PropertyDefinition",
            "decorators": [
              {
                "type": "Decorator",
                "expression": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "dec",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1299,
                    "end": 1302
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "CallExpression",
                      "callee": {
                        "type": "ArrowFunctionExpression",
                        "expression": true,
                        "async": false,
                        "typeParameters": null,
                        "params": [],
                        "returnType": null,
                        "body": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "C6",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1310,
                          "end": 1312
                        },
                        "id": null,
                        "generator": false,
                        "start": 1304,
                        "end": 1312
                      },
                      "typeArguments": null,
                      "arguments": [],
                      "optional": false,
                      "start": 1303,
                      "end": 1315
                    }
                  ],
                  "optional": false,
                  "start": 1299,
                  "end": 1316
                },
                "start": 1298,
                "end": 1316
              }
            ],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "y",
              "optional": false,
              "typeAnnotation": null,
              "start": 1324,
              "end": 1325
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 1327,
                "end": 1330
              },
              "start": 1325,
              "end": 1330
            },
            "value": null,
            "computed": false,
            "static": true,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 1298,
            "end": 1331
          },
          {
            "type": "AccessorProperty",
            "decorators": [
              {
                "type": "Decorator",
                "expression": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "dec",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1337,
                    "end": 1340
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "CallExpression",
                      "callee": {
                        "type": "ArrowFunctionExpression",
                        "expression": true,
                        "async": false,
                        "typeParameters": null,
                        "params": [],
                        "returnType": null,
                        "body": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "C6",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1348,
                          "end": 1350
                        },
                        "id": null,
                        "generator": false,
                        "start": 1342,
                        "end": 1350
                      },
                      "typeArguments": null,
                      "arguments": [],
                      "optional": false,
                      "start": 1341,
                      "end": 1353
                    }
                  ],
                  "optional": false,
                  "start": 1337,
                  "end": 1354
                },
                "start": 1336,
                "end": 1354
              }
            ],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "z",
              "optional": false,
              "typeAnnotation": null,
              "start": 1371,
              "end": 1372
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 1374,
                "end": 1377
              },
              "start": 1372,
              "end": 1377
            },
            "value": null,
            "computed": false,
            "static": true,
            "override": false,
            "definite": false,
            "accessibility": null,
            "declare": false,
            "optional": false,
            "readonly": false,
            "start": 1336,
            "end": 1378
          },
          {
            "type": "MethodDefinition",
            "decorators": [
              {
                "type": "Decorator",
                "expression": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "dec",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1385,
                    "end": 1388
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "CallExpression",
                      "callee": {
                        "type": "ArrowFunctionExpression",
                        "expression": true,
                        "async": false,
                        "typeParameters": null,
                        "params": [],
                        "returnType": null,
                        "body": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "C6",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1396,
                          "end": 1398
                        },
                        "id": null,
                        "generator": false,
                        "start": 1390,
                        "end": 1398
                      },
                      "typeArguments": null,
                      "arguments": [],
                      "optional": false,
                      "start": 1389,
                      "end": 1401
                    }
                  ],
                  "optional": false,
                  "start": 1385,
                  "end": 1402
                },
                "start": 1384,
                "end": 1402
              }
            ],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "method",
              "optional": false,
              "typeAnnotation": null,
              "start": 1403,
              "end": 1409
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
                "body": [],
                "start": 1412,
                "end": 1414
              },
              "expression": false,
              "start": 1409,
              "end": 1414
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 1384,
            "end": 1414
          },
          {
            "type": "MethodDefinition",
            "decorators": [
              {
                "type": "Decorator",
                "expression": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "dec",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1420,
                    "end": 1423
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "CallExpression",
                      "callee": {
                        "type": "ArrowFunctionExpression",
                        "expression": true,
                        "async": false,
                        "typeParameters": null,
                        "params": [],
                        "returnType": null,
                        "body": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "C6",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1431,
                          "end": 1433
                        },
                        "id": null,
                        "generator": false,
                        "start": 1425,
                        "end": 1433
                      },
                      "typeArguments": null,
                      "arguments": [],
                      "optional": false,
                      "start": 1424,
                      "end": 1436
                    }
                  ],
                  "optional": false,
                  "start": 1420,
                  "end": 1437
                },
                "start": 1419,
                "end": 1437
              }
            ],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "w",
              "optional": false,
              "typeAnnotation": null,
              "start": 1442,
              "end": 1443
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
                      "type": "MemberExpression",
                      "object": {
                        "type": "ThisExpression",
                        "start": 1455,
                        "end": 1459
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "y",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1460,
                        "end": 1461
                      },
                      "optional": false,
                      "computed": false,
                      "start": 1455,
                      "end": 1461
                    },
                    "start": 1448,
                    "end": 1462
                  }
                ],
                "start": 1446,
                "end": 1464
              },
              "expression": false,
              "start": 1443,
              "end": 1464
            },
            "kind": "get",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 1419,
            "end": 1464
          },
          {
            "type": "MethodDefinition",
            "decorators": [
              {
                "type": "Decorator",
                "expression": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "dec",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1470,
                    "end": 1473
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "CallExpression",
                      "callee": {
                        "type": "ArrowFunctionExpression",
                        "expression": true,
                        "async": false,
                        "typeParameters": null,
                        "params": [],
                        "returnType": null,
                        "body": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "C6",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1481,
                          "end": 1483
                        },
                        "id": null,
                        "generator": false,
                        "start": 1475,
                        "end": 1483
                      },
                      "typeArguments": null,
                      "arguments": [],
                      "optional": false,
                      "start": 1474,
                      "end": 1486
                    }
                  ],
                  "optional": false,
                  "start": 1470,
                  "end": 1487
                },
                "start": 1469,
                "end": 1487
              }
            ],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 1492,
              "end": 1493
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
                  "type": "Identifier",
                  "decorators": [],
                  "name": "v",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSAnyKeyword",
                      "start": 1497,
                      "end": 1500
                    },
                    "start": 1495,
                    "end": 1500
                  },
                  "start": 1494,
                  "end": 1500
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [],
                "start": 1502,
                "end": 1504
              },
              "expression": false,
              "start": 1493,
              "end": 1504
            },
            "kind": "set",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 1469,
            "end": 1504
          },
          {
            "type": "PropertyDefinition",
            "decorators": [
              {
                "type": "Decorator",
                "expression": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "dec",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1510,
                    "end": 1513
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "CallExpression",
                      "callee": {
                        "type": "ArrowFunctionExpression",
                        "expression": true,
                        "async": false,
                        "typeParameters": null,
                        "params": [],
                        "returnType": null,
                        "body": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "C6",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1521,
                          "end": 1523
                        },
                        "id": null,
                        "generator": false,
                        "start": 1515,
                        "end": 1523
                      },
                      "typeArguments": null,
                      "arguments": [],
                      "optional": false,
                      "start": 1514,
                      "end": 1526
                    }
                  ],
                  "optional": false,
                  "start": 1510,
                  "end": 1527
                },
                "start": 1509,
                "end": 1527
              }
            ],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "y",
              "optional": false,
              "typeAnnotation": null,
              "start": 1528,
              "end": 1529
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 1531,
                "end": 1534
              },
              "start": 1529,
              "end": 1534
            },
            "value": null,
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 1509,
            "end": 1535
          },
          {
            "type": "AccessorProperty",
            "decorators": [
              {
                "type": "Decorator",
                "expression": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "dec",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1541,
                    "end": 1544
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "CallExpression",
                      "callee": {
                        "type": "ArrowFunctionExpression",
                        "expression": true,
                        "async": false,
                        "typeParameters": null,
                        "params": [],
                        "returnType": null,
                        "body": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "C6",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1552,
                          "end": 1554
                        },
                        "id": null,
                        "generator": false,
                        "start": 1546,
                        "end": 1554
                      },
                      "typeArguments": null,
                      "arguments": [],
                      "optional": false,
                      "start": 1545,
                      "end": 1557
                    }
                  ],
                  "optional": false,
                  "start": 1541,
                  "end": 1558
                },
                "start": 1540,
                "end": 1558
              }
            ],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "z",
              "optional": false,
              "typeAnnotation": null,
              "start": 1568,
              "end": 1569
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 1571,
                "end": 1574
              },
              "start": 1569,
              "end": 1574
            },
            "value": null,
            "computed": false,
            "static": false,
            "override": false,
            "definite": false,
            "accessibility": null,
            "declare": false,
            "optional": false,
            "readonly": false,
            "start": 1540,
            "end": 1575
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "constructor",
              "optional": false,
              "typeAnnotation": null,
              "start": 1582,
              "end": 1593
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
                  "type": "Identifier",
                  "decorators": [
                    {
                      "type": "Decorator",
                      "expression": {
                        "type": "CallExpression",
                        "callee": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "dec",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1595,
                          "end": 1598
                        },
                        "typeArguments": null,
                        "arguments": [
                          {
                            "type": "CallExpression",
                            "callee": {
                              "type": "ArrowFunctionExpression",
                              "expression": true,
                              "async": false,
                              "typeParameters": null,
                              "params": [],
                              "returnType": null,
                              "body": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "C6",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 1606,
                                "end": 1608
                              },
                              "id": null,
                              "generator": false,
                              "start": 1600,
                              "end": 1608
                            },
                            "typeArguments": null,
                            "arguments": [],
                            "optional": false,
                            "start": 1599,
                            "end": 1611
                          }
                        ],
                        "optional": false,
                        "start": 1595,
                        "end": 1612
                      },
                      "start": 1594,
                      "end": 1612
                    }
                  ],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSAnyKeyword",
                      "start": 1616,
                      "end": 1619
                    },
                    "start": 1614,
                    "end": 1619
                  },
                  "start": 1613,
                  "end": 1619
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [],
                "start": 1621,
                "end": 1623
              },
              "expression": false,
              "start": 1593,
              "end": 1623
            },
            "kind": "constructor",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 1582,
            "end": 1623
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "method2",
              "optional": false,
              "typeAnnotation": null,
              "start": 1635,
              "end": 1642
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
                  "type": "Identifier",
                  "decorators": [
                    {
                      "type": "Decorator",
                      "expression": {
                        "type": "CallExpression",
                        "callee": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "dec",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1644,
                          "end": 1647
                        },
                        "typeArguments": null,
                        "arguments": [
                          {
                            "type": "CallExpression",
                            "callee": {
                              "type": "ArrowFunctionExpression",
                              "expression": true,
                              "async": false,
                              "typeParameters": null,
                              "params": [],
                              "returnType": null,
                              "body": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "C6",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 1655,
                                "end": 1657
                              },
                              "id": null,
                              "generator": false,
                              "start": 1649,
                              "end": 1657
                            },
                            "typeArguments": null,
                            "arguments": [],
                            "optional": false,
                            "start": 1648,
                            "end": 1660
                          }
                        ],
                        "optional": false,
                        "start": 1644,
                        "end": 1661
                      },
                      "start": 1643,
                      "end": 1661
                    }
                  ],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSAnyKeyword",
                      "start": 1665,
                      "end": 1668
                    },
                    "start": 1663,
                    "end": 1668
                  },
                  "start": 1662,
                  "end": 1668
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [],
                "start": 1670,
                "end": 1672
              },
              "expression": false,
              "start": 1642,
              "end": 1672
            },
            "kind": "method",
            "computed": false,
            "static": true,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 1628,
            "end": 1672
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "method2",
              "optional": false,
              "typeAnnotation": null,
              "start": 1677,
              "end": 1684
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
                  "type": "Identifier",
                  "decorators": [
                    {
                      "type": "Decorator",
                      "expression": {
                        "type": "CallExpression",
                        "callee": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "dec",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1686,
                          "end": 1689
                        },
                        "typeArguments": null,
                        "arguments": [
                          {
                            "type": "CallExpression",
                            "callee": {
                              "type": "ArrowFunctionExpression",
                              "expression": true,
                              "async": false,
                              "typeParameters": null,
                              "params": [],
                              "returnType": null,
                              "body": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "C6",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 1697,
                                "end": 1699
                              },
                              "id": null,
                              "generator": false,
                              "start": 1691,
                              "end": 1699
                            },
                            "typeArguments": null,
                            "arguments": [],
                            "optional": false,
                            "start": 1690,
                            "end": 1702
                          }
                        ],
                        "optional": false,
                        "start": 1686,
                        "end": 1703
                      },
                      "start": 1685,
                      "end": 1703
                    }
                  ],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSAnyKeyword",
                      "start": 1707,
                      "end": 1710
                    },
                    "start": 1705,
                    "end": 1710
                  },
                  "start": 1704,
                  "end": 1710
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [],
                "start": 1712,
                "end": 1714
              },
              "expression": false,
              "start": 1684,
              "end": 1714
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 1677,
            "end": 1714
          }
        ],
        "start": 1146,
        "end": 1716
      },
      "abstract": false,
      "declare": false,
      "start": 1137,
      "end": 1716
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 1716
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
    "value": "dec",
    "start": 14,
    "end": 17
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 17,
    "end": 18
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 19,
    "end": 22
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 22,
    "end": 23
  },
  {
    "type": "Punctuator",
    "value": "@",
    "start": 31,
    "end": 32
  },
  {
    "type": "Identifier",
    "value": "dec",
    "start": 32,
    "end": 35
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 35,
    "end": 36
  },
  {
    "type": "Punctuator",
    "value": "(",
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
    "value": "=>",
    "start": 39,
    "end": 41
  },
  {
    "type": "Identifier",
    "value": "C1",
    "start": 42,
    "end": 44
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 44,
    "end": 45
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 46,
    "end": 51
  },
  {
    "type": "Identifier",
    "value": "C1",
    "start": 52,
    "end": 54
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 55,
    "end": 56
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 57,
    "end": 58
  },
  {
    "type": "Punctuator",
    "value": "@",
    "start": 69,
    "end": 70
  },
  {
    "type": "Identifier",
    "value": "dec",
    "start": 70,
    "end": 73
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 73,
    "end": 74
  },
  {
    "type": "Identifier",
    "value": "C2",
    "start": 74,
    "end": 76
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 76,
    "end": 77
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 78,
    "end": 83
  },
  {
    "type": "Identifier",
    "value": "C2",
    "start": 84,
    "end": 86
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 87,
    "end": 88
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 89,
    "end": 90
  },
  {
    "type": "Punctuator",
    "value": "@",
    "start": 101,
    "end": 102
  },
  {
    "type": "Identifier",
    "value": "dec",
    "start": 102,
    "end": 105
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 105,
    "end": 106
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 106,
    "end": 107
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 107,
    "end": 108
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 108,
    "end": 109
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 110,
    "end": 112
  },
  {
    "type": "Identifier",
    "value": "C3",
    "start": 113,
    "end": 115
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 115,
    "end": 116
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 116,
    "end": 117
  },
  {
    "type": "Punctuator",
    "value": ")",
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
    "type": "Keyword",
    "value": "class",
    "start": 120,
    "end": 125
  },
  {
    "type": "Identifier",
    "value": "C3",
    "start": 126,
    "end": 128
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 129,
    "end": 130
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 131,
    "end": 132
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 140,
    "end": 145
  },
  {
    "type": "Identifier",
    "value": "C4",
    "start": 146,
    "end": 148
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 149,
    "end": 150
  },
  {
    "type": "Punctuator",
    "value": "@",
    "start": 155,
    "end": 156
  },
  {
    "type": "Identifier",
    "value": "dec",
    "start": 156,
    "end": 159
  },
  {
    "type": "Punctuator",
    "value": "(",
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
    "type": "Punctuator",
    "value": ")",
    "start": 161,
    "end": 162
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 163,
    "end": 165
  },
  {
    "type": "Identifier",
    "value": "C4",
    "start": 166,
    "end": 168
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 168,
    "end": 169
  },
  {
    "type": "Keyword",
    "value": "static",
    "start": 170,
    "end": 176
  },
  {
    "type": "Identifier",
    "value": "method",
    "start": 177,
    "end": 183
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 183,
    "end": 184
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 184,
    "end": 185
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 186,
    "end": 187
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 187,
    "end": 188
  },
  {
    "type": "Punctuator",
    "value": "@",
    "start": 193,
    "end": 194
  },
  {
    "type": "Identifier",
    "value": "dec",
    "start": 194,
    "end": 197
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 197,
    "end": 198
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 198,
    "end": 199
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 199,
    "end": 200
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 201,
    "end": 203
  },
  {
    "type": "Identifier",
    "value": "C4",
    "start": 204,
    "end": 206
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 206,
    "end": 207
  },
  {
    "type": "Keyword",
    "value": "static",
    "start": 208,
    "end": 214
  },
  {
    "type": "Identifier",
    "value": "get",
    "start": 215,
    "end": 218
  },
  {
    "type": "Identifier",
    "value": "w",
    "start": 219,
    "end": 220
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 220,
    "end": 221
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 221,
    "end": 222
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 223,
    "end": 224
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 225,
    "end": 231
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 232,
    "end": 236
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 236,
    "end": 237
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 237,
    "end": 238
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 238,
    "end": 239
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 240,
    "end": 241
  },
  {
    "type": "Punctuator",
    "value": "@",
    "start": 246,
    "end": 247
  },
  {
    "type": "Identifier",
    "value": "dec",
    "start": 247,
    "end": 250
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 250,
    "end": 251
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 251,
    "end": 252
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 252,
    "end": 253
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 254,
    "end": 256
  },
  {
    "type": "Identifier",
    "value": "C4",
    "start": 257,
    "end": 259
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 259,
    "end": 260
  },
  {
    "type": "Keyword",
    "value": "static",
    "start": 261,
    "end": 267
  },
  {
    "type": "Identifier",
    "value": "set",
    "start": 268,
    "end": 271
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 272,
    "end": 273
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 273,
    "end": 274
  },
  {
    "type": "Identifier",
    "value": "v",
    "start": 274,
    "end": 275
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 275,
    "end": 276
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 277,
    "end": 280
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 280,
    "end": 281
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 282,
    "end": 283
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 283,
    "end": 284
  },
  {
    "type": "Punctuator",
    "value": "@",
    "start": 289,
    "end": 290
  },
  {
    "type": "Identifier",
    "value": "dec",
    "start": 290,
    "end": 293
  },
  {
    "type": "Punctuator",
    "value": "(",
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
    "type": "Punctuator",
    "value": ")",
    "start": 295,
    "end": 296
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 297,
    "end": 299
  },
  {
    "type": "Identifier",
    "value": "C4",
    "start": 300,
    "end": 302
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 302,
    "end": 303
  },
  {
    "type": "Keyword",
    "value": "static",
    "start": 304,
    "end": 310
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 311,
    "end": 312
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 312,
    "end": 313
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 314,
    "end": 317
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 317,
    "end": 318
  },
  {
    "type": "Punctuator",
    "value": "@",
    "start": 323,
    "end": 324
  },
  {
    "type": "Identifier",
    "value": "dec",
    "start": 324,
    "end": 327
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 327,
    "end": 328
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 328,
    "end": 329
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 329,
    "end": 330
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 331,
    "end": 333
  },
  {
    "type": "Identifier",
    "value": "C4",
    "start": 334,
    "end": 336
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 336,
    "end": 337
  },
  {
    "type": "Keyword",
    "value": "static",
    "start": 338,
    "end": 344
  },
  {
    "type": "Identifier",
    "value": "accessor",
    "start": 345,
    "end": 353
  },
  {
    "type": "Identifier",
    "value": "z",
    "start": 354,
    "end": 355
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 355,
    "end": 356
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 357,
    "end": 360
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 360,
    "end": 361
  },
  {
    "type": "Punctuator",
    "value": "@",
    "start": 367,
    "end": 368
  },
  {
    "type": "Identifier",
    "value": "dec",
    "start": 368,
    "end": 371
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 371,
    "end": 372
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 372,
    "end": 373
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 373,
    "end": 374
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 375,
    "end": 377
  },
  {
    "type": "Identifier",
    "value": "C4",
    "start": 378,
    "end": 380
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 380,
    "end": 381
  },
  {
    "type": "Identifier",
    "value": "method",
    "start": 382,
    "end": 388
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 388,
    "end": 389
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 389,
    "end": 390
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 391,
    "end": 392
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 392,
    "end": 393
  },
  {
    "type": "Punctuator",
    "value": "@",
    "start": 398,
    "end": 399
  },
  {
    "type": "Identifier",
    "value": "dec",
    "start": 399,
    "end": 402
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 402,
    "end": 403
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 403,
    "end": 404
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 404,
    "end": 405
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 406,
    "end": 408
  },
  {
    "type": "Identifier",
    "value": "C4",
    "start": 409,
    "end": 411
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 411,
    "end": 412
  },
  {
    "type": "Identifier",
    "value": "get",
    "start": 413,
    "end": 416
  },
  {
    "type": "Identifier",
    "value": "w",
    "start": 417,
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
    "value": ")",
    "start": 419,
    "end": 420
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 421,
    "end": 422
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 423,
    "end": 429
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 430,
    "end": 434
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 434,
    "end": 435
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 435,
    "end": 436
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 436,
    "end": 437
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 438,
    "end": 439
  },
  {
    "type": "Punctuator",
    "value": "@",
    "start": 444,
    "end": 445
  },
  {
    "type": "Identifier",
    "value": "dec",
    "start": 445,
    "end": 448
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 448,
    "end": 449
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 449,
    "end": 450
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 450,
    "end": 451
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 452,
    "end": 454
  },
  {
    "type": "Identifier",
    "value": "C4",
    "start": 455,
    "end": 457
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 457,
    "end": 458
  },
  {
    "type": "Identifier",
    "value": "set",
    "start": 459,
    "end": 462
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 463,
    "end": 464
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 464,
    "end": 465
  },
  {
    "type": "Identifier",
    "value": "v",
    "start": 465,
    "end": 466
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 466,
    "end": 467
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 468,
    "end": 471
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 471,
    "end": 472
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 473,
    "end": 474
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 474,
    "end": 475
  },
  {
    "type": "Punctuator",
    "value": "@",
    "start": 480,
    "end": 481
  },
  {
    "type": "Identifier",
    "value": "dec",
    "start": 481,
    "end": 484
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 484,
    "end": 485
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 485,
    "end": 486
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 486,
    "end": 487
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 488,
    "end": 490
  },
  {
    "type": "Identifier",
    "value": "C4",
    "start": 491,
    "end": 493
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 493,
    "end": 494
  },
  {
    "type": "Identifier",
    "value": "y",
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
    "type": "Identifier",
    "value": "any",
    "start": 498,
    "end": 501
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 501,
    "end": 502
  },
  {
    "type": "Punctuator",
    "value": "@",
    "start": 507,
    "end": 508
  },
  {
    "type": "Identifier",
    "value": "dec",
    "start": 508,
    "end": 511
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 511,
    "end": 512
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 512,
    "end": 513
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 513,
    "end": 514
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 515,
    "end": 517
  },
  {
    "type": "Identifier",
    "value": "C4",
    "start": 518,
    "end": 520
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 520,
    "end": 521
  },
  {
    "type": "Identifier",
    "value": "accessor",
    "start": 522,
    "end": 530
  },
  {
    "type": "Identifier",
    "value": "z",
    "start": 531,
    "end": 532
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 532,
    "end": 533
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 534,
    "end": 537
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 537,
    "end": 538
  },
  {
    "type": "Identifier",
    "value": "constructor",
    "start": 544,
    "end": 555
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 555,
    "end": 556
  },
  {
    "type": "Punctuator",
    "value": "@",
    "start": 556,
    "end": 557
  },
  {
    "type": "Identifier",
    "value": "dec",
    "start": 557,
    "end": 560
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 560,
    "end": 561
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 561,
    "end": 562
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 562,
    "end": 563
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 564,
    "end": 566
  },
  {
    "type": "Identifier",
    "value": "C4",
    "start": 567,
    "end": 569
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 569,
    "end": 570
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 571,
    "end": 572
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 572,
    "end": 573
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 574,
    "end": 577
  },
  {
    "type": "Punctuator",
    "value": ")",
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
    "value": "}",
    "start": 580,
    "end": 581
  },
  {
    "type": "Keyword",
    "value": "static",
    "start": 586,
    "end": 592
  },
  {
    "type": "Identifier",
    "value": "method2",
    "start": 593,
    "end": 600
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 600,
    "end": 601
  },
  {
    "type": "Punctuator",
    "value": "@",
    "start": 601,
    "end": 602
  },
  {
    "type": "Identifier",
    "value": "dec",
    "start": 602,
    "end": 605
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 605,
    "end": 606
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 606,
    "end": 607
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 607,
    "end": 608
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 609,
    "end": 611
  },
  {
    "type": "Identifier",
    "value": "C4",
    "start": 612,
    "end": 614
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 614,
    "end": 615
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 616,
    "end": 617
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 617,
    "end": 618
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 619,
    "end": 622
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 622,
    "end": 623
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 624,
    "end": 625
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 625,
    "end": 626
  },
  {
    "type": "Identifier",
    "value": "method2",
    "start": 631,
    "end": 638
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 638,
    "end": 639
  },
  {
    "type": "Punctuator",
    "value": "@",
    "start": 639,
    "end": 640
  },
  {
    "type": "Identifier",
    "value": "dec",
    "start": 640,
    "end": 643
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 643,
    "end": 644
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 644,
    "end": 645
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 645,
    "end": 646
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 647,
    "end": 649
  },
  {
    "type": "Identifier",
    "value": "C4",
    "start": 650,
    "end": 652
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 652,
    "end": 653
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 654,
    "end": 655
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 655,
    "end": 656
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 657,
    "end": 660
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 660,
    "end": 661
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 662,
    "end": 663
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 663,
    "end": 664
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 665,
    "end": 666
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 677,
    "end": 682
  },
  {
    "type": "Identifier",
    "value": "C5",
    "start": 683,
    "end": 685
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 686,
    "end": 687
  },
  {
    "type": "Punctuator",
    "value": "@",
    "start": 692,
    "end": 693
  },
  {
    "type": "Identifier",
    "value": "dec",
    "start": 693,
    "end": 696
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 696,
    "end": 697
  },
  {
    "type": "Identifier",
    "value": "C5",
    "start": 697,
    "end": 699
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 699,
    "end": 700
  },
  {
    "type": "Keyword",
    "value": "static",
    "start": 701,
    "end": 707
  },
  {
    "type": "Identifier",
    "value": "method",
    "start": 708,
    "end": 714
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 714,
    "end": 715
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 715,
    "end": 716
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 717,
    "end": 718
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 718,
    "end": 719
  },
  {
    "type": "Punctuator",
    "value": "@",
    "start": 724,
    "end": 725
  },
  {
    "type": "Identifier",
    "value": "dec",
    "start": 725,
    "end": 728
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 728,
    "end": 729
  },
  {
    "type": "Identifier",
    "value": "C5",
    "start": 729,
    "end": 731
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 731,
    "end": 732
  },
  {
    "type": "Keyword",
    "value": "static",
    "start": 733,
    "end": 739
  },
  {
    "type": "Identifier",
    "value": "get",
    "start": 740,
    "end": 743
  },
  {
    "type": "Identifier",
    "value": "w",
    "start": 744,
    "end": 745
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 745,
    "end": 746
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 746,
    "end": 747
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 748,
    "end": 749
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 750,
    "end": 756
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 757,
    "end": 761
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 761,
    "end": 762
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 762,
    "end": 763
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 763,
    "end": 764
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 765,
    "end": 766
  },
  {
    "type": "Punctuator",
    "value": "@",
    "start": 771,
    "end": 772
  },
  {
    "type": "Identifier",
    "value": "dec",
    "start": 772,
    "end": 775
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 775,
    "end": 776
  },
  {
    "type": "Identifier",
    "value": "C5",
    "start": 776,
    "end": 778
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 778,
    "end": 779
  },
  {
    "type": "Keyword",
    "value": "static",
    "start": 780,
    "end": 786
  },
  {
    "type": "Identifier",
    "value": "set",
    "start": 787,
    "end": 790
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 791,
    "end": 792
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 792,
    "end": 793
  },
  {
    "type": "Identifier",
    "value": "v",
    "start": 793,
    "end": 794
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 794,
    "end": 795
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 796,
    "end": 799
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 799,
    "end": 800
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 801,
    "end": 802
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 802,
    "end": 803
  },
  {
    "type": "Punctuator",
    "value": "@",
    "start": 808,
    "end": 809
  },
  {
    "type": "Identifier",
    "value": "dec",
    "start": 809,
    "end": 812
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 812,
    "end": 813
  },
  {
    "type": "Identifier",
    "value": "C5",
    "start": 813,
    "end": 815
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 815,
    "end": 816
  },
  {
    "type": "Keyword",
    "value": "static",
    "start": 817,
    "end": 823
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 824,
    "end": 825
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 825,
    "end": 826
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 827,
    "end": 830
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 830,
    "end": 831
  },
  {
    "type": "Punctuator",
    "value": "@",
    "start": 836,
    "end": 837
  },
  {
    "type": "Identifier",
    "value": "dec",
    "start": 837,
    "end": 840
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 840,
    "end": 841
  },
  {
    "type": "Identifier",
    "value": "C5",
    "start": 841,
    "end": 843
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 843,
    "end": 844
  },
  {
    "type": "Keyword",
    "value": "static",
    "start": 845,
    "end": 851
  },
  {
    "type": "Identifier",
    "value": "accessor",
    "start": 852,
    "end": 860
  },
  {
    "type": "Identifier",
    "value": "z",
    "start": 861,
    "end": 862
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 862,
    "end": 863
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 864,
    "end": 867
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 867,
    "end": 868
  },
  {
    "type": "Punctuator",
    "value": "@",
    "start": 874,
    "end": 875
  },
  {
    "type": "Identifier",
    "value": "dec",
    "start": 875,
    "end": 878
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 878,
    "end": 879
  },
  {
    "type": "Identifier",
    "value": "C5",
    "start": 879,
    "end": 881
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 881,
    "end": 882
  },
  {
    "type": "Identifier",
    "value": "method",
    "start": 883,
    "end": 889
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 889,
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
    "value": "{",
    "start": 892,
    "end": 893
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 893,
    "end": 894
  },
  {
    "type": "Punctuator",
    "value": "@",
    "start": 899,
    "end": 900
  },
  {
    "type": "Identifier",
    "value": "dec",
    "start": 900,
    "end": 903
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 903,
    "end": 904
  },
  {
    "type": "Identifier",
    "value": "C5",
    "start": 904,
    "end": 906
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 906,
    "end": 907
  },
  {
    "type": "Identifier",
    "value": "get",
    "start": 908,
    "end": 911
  },
  {
    "type": "Identifier",
    "value": "w",
    "start": 912,
    "end": 913
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 913,
    "end": 914
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 914,
    "end": 915
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 916,
    "end": 917
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 918,
    "end": 924
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 925,
    "end": 929
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 929,
    "end": 930
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 930,
    "end": 931
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 931,
    "end": 932
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 933,
    "end": 934
  },
  {
    "type": "Punctuator",
    "value": "@",
    "start": 939,
    "end": 940
  },
  {
    "type": "Identifier",
    "value": "dec",
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
    "value": "C5",
    "start": 944,
    "end": 946
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 946,
    "end": 947
  },
  {
    "type": "Identifier",
    "value": "set",
    "start": 948,
    "end": 951
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 952,
    "end": 953
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 953,
    "end": 954
  },
  {
    "type": "Identifier",
    "value": "v",
    "start": 954,
    "end": 955
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 955,
    "end": 956
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 957,
    "end": 960
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 960,
    "end": 961
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 962,
    "end": 963
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 963,
    "end": 964
  },
  {
    "type": "Punctuator",
    "value": "@",
    "start": 969,
    "end": 970
  },
  {
    "type": "Identifier",
    "value": "dec",
    "start": 970,
    "end": 973
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 973,
    "end": 974
  },
  {
    "type": "Identifier",
    "value": "C5",
    "start": 974,
    "end": 976
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 976,
    "end": 977
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 978,
    "end": 979
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 979,
    "end": 980
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 981,
    "end": 984
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 984,
    "end": 985
  },
  {
    "type": "Punctuator",
    "value": "@",
    "start": 990,
    "end": 991
  },
  {
    "type": "Identifier",
    "value": "dec",
    "start": 991,
    "end": 994
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 994,
    "end": 995
  },
  {
    "type": "Identifier",
    "value": "C5",
    "start": 995,
    "end": 997
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 997,
    "end": 998
  },
  {
    "type": "Identifier",
    "value": "accessor",
    "start": 999,
    "end": 1007
  },
  {
    "type": "Identifier",
    "value": "z",
    "start": 1008,
    "end": 1009
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1009,
    "end": 1010
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 1011,
    "end": 1014
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1014,
    "end": 1015
  },
  {
    "type": "Identifier",
    "value": "constructor",
    "start": 1022,
    "end": 1033
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1033,
    "end": 1034
  },
  {
    "type": "Punctuator",
    "value": "@",
    "start": 1034,
    "end": 1035
  },
  {
    "type": "Identifier",
    "value": "dec",
    "start": 1035,
    "end": 1038
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1038,
    "end": 1039
  },
  {
    "type": "Identifier",
    "value": "C5",
    "start": 1039,
    "end": 1041
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1041,
    "end": 1042
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1043,
    "end": 1044
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1044,
    "end": 1045
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 1046,
    "end": 1049
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1049,
    "end": 1050
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1051,
    "end": 1052
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1052,
    "end": 1053
  },
  {
    "type": "Keyword",
    "value": "static",
    "start": 1058,
    "end": 1064
  },
  {
    "type": "Identifier",
    "value": "method2",
    "start": 1065,
    "end": 1072
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1072,
    "end": 1073
  },
  {
    "type": "Punctuator",
    "value": "@",
    "start": 1073,
    "end": 1074
  },
  {
    "type": "Identifier",
    "value": "dec",
    "start": 1074,
    "end": 1077
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1077,
    "end": 1078
  },
  {
    "type": "Identifier",
    "value": "C5",
    "start": 1078,
    "end": 1080
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1080,
    "end": 1081
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1082,
    "end": 1083
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1083,
    "end": 1084
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 1085,
    "end": 1088
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1088,
    "end": 1089
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1090,
    "end": 1091
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1091,
    "end": 1092
  },
  {
    "type": "Identifier",
    "value": "method2",
    "start": 1097,
    "end": 1104
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1104,
    "end": 1105
  },
  {
    "type": "Punctuator",
    "value": "@",
    "start": 1105,
    "end": 1106
  },
  {
    "type": "Identifier",
    "value": "dec",
    "start": 1106,
    "end": 1109
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1109,
    "end": 1110
  },
  {
    "type": "Identifier",
    "value": "C5",
    "start": 1110,
    "end": 1112
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1112,
    "end": 1113
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1114,
    "end": 1115
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1115,
    "end": 1116
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 1117,
    "end": 1120
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1120,
    "end": 1121
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1122,
    "end": 1123
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1123,
    "end": 1124
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1125,
    "end": 1126
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 1137,
    "end": 1142
  },
  {
    "type": "Identifier",
    "value": "C6",
    "start": 1143,
    "end": 1145
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1146,
    "end": 1147
  },
  {
    "type": "Punctuator",
    "value": "@",
    "start": 1152,
    "end": 1153
  },
  {
    "type": "Identifier",
    "value": "dec",
    "start": 1153,
    "end": 1156
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1156,
    "end": 1157
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1157,
    "end": 1158
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1158,
    "end": 1159
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1159,
    "end": 1160
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1161,
    "end": 1163
  },
  {
    "type": "Identifier",
    "value": "C6",
    "start": 1164,
    "end": 1166
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1166,
    "end": 1167
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1167,
    "end": 1168
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1168,
    "end": 1169
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1169,
    "end": 1170
  },
  {
    "type": "Keyword",
    "value": "static",
    "start": 1171,
    "end": 1177
  },
  {
    "type": "Identifier",
    "value": "method",
    "start": 1178,
    "end": 1184
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1184,
    "end": 1185
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1185,
    "end": 1186
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1187,
    "end": 1188
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1188,
    "end": 1189
  },
  {
    "type": "Punctuator",
    "value": "@",
    "start": 1194,
    "end": 1195
  },
  {
    "type": "Identifier",
    "value": "dec",
    "start": 1195,
    "end": 1198
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1198,
    "end": 1199
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1199,
    "end": 1200
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1200,
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
    "type": "Identifier",
    "value": "C6",
    "start": 1206,
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
    "value": "(",
    "start": 1209,
    "end": 1210
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1210,
    "end": 1211
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1211,
    "end": 1212
  },
  {
    "type": "Keyword",
    "value": "static",
    "start": 1213,
    "end": 1219
  },
  {
    "type": "Identifier",
    "value": "get",
    "start": 1220,
    "end": 1223
  },
  {
    "type": "Identifier",
    "value": "w",
    "start": 1224,
    "end": 1225
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1225,
    "end": 1226
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1226,
    "end": 1227
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1228,
    "end": 1229
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 1230,
    "end": 1236
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 1237,
    "end": 1241
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1241,
    "end": 1242
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 1242,
    "end": 1243
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1243,
    "end": 1244
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1245,
    "end": 1246
  },
  {
    "type": "Punctuator",
    "value": "@",
    "start": 1251,
    "end": 1252
  },
  {
    "type": "Identifier",
    "value": "dec",
    "start": 1252,
    "end": 1255
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1255,
    "end": 1256
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1256,
    "end": 1257
  },
  {
    "type": "Punctuator",
    "value": "(",
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
    "value": "=>",
    "start": 1260,
    "end": 1262
  },
  {
    "type": "Identifier",
    "value": "C6",
    "start": 1263,
    "end": 1265
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1265,
    "end": 1266
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1266,
    "end": 1267
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1267,
    "end": 1268
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1268,
    "end": 1269
  },
  {
    "type": "Keyword",
    "value": "static",
    "start": 1270,
    "end": 1276
  },
  {
    "type": "Identifier",
    "value": "set",
    "start": 1277,
    "end": 1280
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1281,
    "end": 1282
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1282,
    "end": 1283
  },
  {
    "type": "Identifier",
    "value": "v",
    "start": 1283,
    "end": 1284
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1284,
    "end": 1285
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 1286,
    "end": 1289
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1289,
    "end": 1290
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1291,
    "end": 1292
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1292,
    "end": 1293
  },
  {
    "type": "Punctuator",
    "value": "@",
    "start": 1298,
    "end": 1299
  },
  {
    "type": "Identifier",
    "value": "dec",
    "start": 1299,
    "end": 1302
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1302,
    "end": 1303
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1303,
    "end": 1304
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1304,
    "end": 1305
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1305,
    "end": 1306
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1307,
    "end": 1309
  },
  {
    "type": "Identifier",
    "value": "C6",
    "start": 1310,
    "end": 1312
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1312,
    "end": 1313
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1313,
    "end": 1314
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1314,
    "end": 1315
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1315,
    "end": 1316
  },
  {
    "type": "Keyword",
    "value": "static",
    "start": 1317,
    "end": 1323
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 1324,
    "end": 1325
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1325,
    "end": 1326
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 1327,
    "end": 1330
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1330,
    "end": 1331
  },
  {
    "type": "Punctuator",
    "value": "@",
    "start": 1336,
    "end": 1337
  },
  {
    "type": "Identifier",
    "value": "dec",
    "start": 1337,
    "end": 1340
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1340,
    "end": 1341
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1341,
    "end": 1342
  },
  {
    "type": "Punctuator",
    "value": "(",
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
    "value": "=>",
    "start": 1345,
    "end": 1347
  },
  {
    "type": "Identifier",
    "value": "C6",
    "start": 1348,
    "end": 1350
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1350,
    "end": 1351
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1351,
    "end": 1352
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1352,
    "end": 1353
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1353,
    "end": 1354
  },
  {
    "type": "Keyword",
    "value": "static",
    "start": 1355,
    "end": 1361
  },
  {
    "type": "Identifier",
    "value": "accessor",
    "start": 1362,
    "end": 1370
  },
  {
    "type": "Identifier",
    "value": "z",
    "start": 1371,
    "end": 1372
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1372,
    "end": 1373
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 1374,
    "end": 1377
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1377,
    "end": 1378
  },
  {
    "type": "Punctuator",
    "value": "@",
    "start": 1384,
    "end": 1385
  },
  {
    "type": "Identifier",
    "value": "dec",
    "start": 1385,
    "end": 1388
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1388,
    "end": 1389
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1389,
    "end": 1390
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1390,
    "end": 1391
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1391,
    "end": 1392
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1393,
    "end": 1395
  },
  {
    "type": "Identifier",
    "value": "C6",
    "start": 1396,
    "end": 1398
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1398,
    "end": 1399
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1399,
    "end": 1400
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1400,
    "end": 1401
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1401,
    "end": 1402
  },
  {
    "type": "Identifier",
    "value": "method",
    "start": 1403,
    "end": 1409
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1409,
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
    "value": "{",
    "start": 1412,
    "end": 1413
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1413,
    "end": 1414
  },
  {
    "type": "Punctuator",
    "value": "@",
    "start": 1419,
    "end": 1420
  },
  {
    "type": "Identifier",
    "value": "dec",
    "start": 1420,
    "end": 1423
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1423,
    "end": 1424
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1424,
    "end": 1425
  },
  {
    "type": "Punctuator",
    "value": "(",
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
    "value": "=>",
    "start": 1428,
    "end": 1430
  },
  {
    "type": "Identifier",
    "value": "C6",
    "start": 1431,
    "end": 1433
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1433,
    "end": 1434
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1434,
    "end": 1435
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1435,
    "end": 1436
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1436,
    "end": 1437
  },
  {
    "type": "Identifier",
    "value": "get",
    "start": 1438,
    "end": 1441
  },
  {
    "type": "Identifier",
    "value": "w",
    "start": 1442,
    "end": 1443
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1443,
    "end": 1444
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1444,
    "end": 1445
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1446,
    "end": 1447
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 1448,
    "end": 1454
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 1455,
    "end": 1459
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1459,
    "end": 1460
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 1460,
    "end": 1461
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1461,
    "end": 1462
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1463,
    "end": 1464
  },
  {
    "type": "Punctuator",
    "value": "@",
    "start": 1469,
    "end": 1470
  },
  {
    "type": "Identifier",
    "value": "dec",
    "start": 1470,
    "end": 1473
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1473,
    "end": 1474
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1474,
    "end": 1475
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1475,
    "end": 1476
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1476,
    "end": 1477
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1478,
    "end": 1480
  },
  {
    "type": "Identifier",
    "value": "C6",
    "start": 1481,
    "end": 1483
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1483,
    "end": 1484
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1484,
    "end": 1485
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1485,
    "end": 1486
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1486,
    "end": 1487
  },
  {
    "type": "Identifier",
    "value": "set",
    "start": 1488,
    "end": 1491
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1492,
    "end": 1493
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1493,
    "end": 1494
  },
  {
    "type": "Identifier",
    "value": "v",
    "start": 1494,
    "end": 1495
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1495,
    "end": 1496
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 1497,
    "end": 1500
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1500,
    "end": 1501
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1502,
    "end": 1503
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1503,
    "end": 1504
  },
  {
    "type": "Punctuator",
    "value": "@",
    "start": 1509,
    "end": 1510
  },
  {
    "type": "Identifier",
    "value": "dec",
    "start": 1510,
    "end": 1513
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1513,
    "end": 1514
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1514,
    "end": 1515
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1515,
    "end": 1516
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1516,
    "end": 1517
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1518,
    "end": 1520
  },
  {
    "type": "Identifier",
    "value": "C6",
    "start": 1521,
    "end": 1523
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1523,
    "end": 1524
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1524,
    "end": 1525
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1525,
    "end": 1526
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1526,
    "end": 1527
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 1528,
    "end": 1529
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1529,
    "end": 1530
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 1531,
    "end": 1534
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1534,
    "end": 1535
  },
  {
    "type": "Punctuator",
    "value": "@",
    "start": 1540,
    "end": 1541
  },
  {
    "type": "Identifier",
    "value": "dec",
    "start": 1541,
    "end": 1544
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1544,
    "end": 1545
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1545,
    "end": 1546
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1546,
    "end": 1547
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1547,
    "end": 1548
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1549,
    "end": 1551
  },
  {
    "type": "Identifier",
    "value": "C6",
    "start": 1552,
    "end": 1554
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1554,
    "end": 1555
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1555,
    "end": 1556
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1556,
    "end": 1557
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1557,
    "end": 1558
  },
  {
    "type": "Identifier",
    "value": "accessor",
    "start": 1559,
    "end": 1567
  },
  {
    "type": "Identifier",
    "value": "z",
    "start": 1568,
    "end": 1569
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1569,
    "end": 1570
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 1571,
    "end": 1574
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1574,
    "end": 1575
  },
  {
    "type": "Identifier",
    "value": "constructor",
    "start": 1582,
    "end": 1593
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1593,
    "end": 1594
  },
  {
    "type": "Punctuator",
    "value": "@",
    "start": 1594,
    "end": 1595
  },
  {
    "type": "Identifier",
    "value": "dec",
    "start": 1595,
    "end": 1598
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1598,
    "end": 1599
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1599,
    "end": 1600
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1600,
    "end": 1601
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1601,
    "end": 1602
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1603,
    "end": 1605
  },
  {
    "type": "Identifier",
    "value": "C6",
    "start": 1606,
    "end": 1608
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1608,
    "end": 1609
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1609,
    "end": 1610
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1610,
    "end": 1611
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1611,
    "end": 1612
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1613,
    "end": 1614
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1614,
    "end": 1615
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 1616,
    "end": 1619
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1619,
    "end": 1620
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1621,
    "end": 1622
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1622,
    "end": 1623
  },
  {
    "type": "Keyword",
    "value": "static",
    "start": 1628,
    "end": 1634
  },
  {
    "type": "Identifier",
    "value": "method2",
    "start": 1635,
    "end": 1642
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1642,
    "end": 1643
  },
  {
    "type": "Punctuator",
    "value": "@",
    "start": 1643,
    "end": 1644
  },
  {
    "type": "Identifier",
    "value": "dec",
    "start": 1644,
    "end": 1647
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1647,
    "end": 1648
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1648,
    "end": 1649
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1649,
    "end": 1650
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1650,
    "end": 1651
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1652,
    "end": 1654
  },
  {
    "type": "Identifier",
    "value": "C6",
    "start": 1655,
    "end": 1657
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1657,
    "end": 1658
  },
  {
    "type": "Punctuator",
    "value": "(",
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
    "value": ")",
    "start": 1660,
    "end": 1661
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1662,
    "end": 1663
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1663,
    "end": 1664
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 1665,
    "end": 1668
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1668,
    "end": 1669
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1670,
    "end": 1671
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1671,
    "end": 1672
  },
  {
    "type": "Identifier",
    "value": "method2",
    "start": 1677,
    "end": 1684
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1684,
    "end": 1685
  },
  {
    "type": "Punctuator",
    "value": "@",
    "start": 1685,
    "end": 1686
  },
  {
    "type": "Identifier",
    "value": "dec",
    "start": 1686,
    "end": 1689
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1689,
    "end": 1690
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1690,
    "end": 1691
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1691,
    "end": 1692
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1692,
    "end": 1693
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1694,
    "end": 1696
  },
  {
    "type": "Identifier",
    "value": "C6",
    "start": 1697,
    "end": 1699
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1699,
    "end": 1700
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1700,
    "end": 1701
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1701,
    "end": 1702
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1702,
    "end": 1703
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1704,
    "end": 1705
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1705,
    "end": 1706
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 1707,
    "end": 1710
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1710,
    "end": 1711
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1712,
    "end": 1713
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1713,
    "end": 1714
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1715,
    "end": 1716
  }
]
```
