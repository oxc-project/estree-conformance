__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
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
              "name": "lambda",
              "optional": false,
              "typeAnnotation": null,
              "start": 1,
              "end": 7
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Enum",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 8,
                  "end": 12
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "No",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 13,
                  "end": 15
                },
                "optional": false,
                "computed": false,
                "start": 8,
                "end": 15
              }
            ],
            "optional": false,
            "start": 1,
            "end": 16
          },
          "start": 0,
          "end": 16
        },
        {
          "type": "Decorator",
          "expression": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "deco",
              "optional": false,
              "typeAnnotation": null,
              "start": 18,
              "end": 22
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Enum",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 23,
                  "end": 27
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "No",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 28,
                  "end": 30
                },
                "optional": false,
                "computed": false,
                "start": 23,
                "end": 30
              }
            ],
            "optional": false,
            "start": 18,
            "end": 31
          },
          "start": 17,
          "end": 31
        }
      ],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Greeter",
        "optional": false,
        "typeAnnotation": null,
        "start": 38,
        "end": 45
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [
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
                    "name": "lambda",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 51,
                    "end": 57
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Enum",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 58,
                        "end": 62
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "No",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 63,
                        "end": 65
                      },
                      "optional": false,
                      "computed": false,
                      "start": 58,
                      "end": 65
                    }
                  ],
                  "optional": false,
                  "start": 51,
                  "end": 66
                },
                "start": 50,
                "end": 66
              },
              {
                "type": "Decorator",
                "expression": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "deco",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 70,
                    "end": 74
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Enum",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 75,
                        "end": 79
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "No",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 80,
                        "end": 82
                      },
                      "optional": false,
                      "computed": false,
                      "start": 75,
                      "end": 82
                    }
                  ],
                  "optional": false,
                  "start": 70,
                  "end": 83
                },
                "start": 69,
                "end": 83
              }
            ],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "greeting",
              "optional": false,
              "typeAnnotation": null,
              "start": 86,
              "end": 94
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 96,
                "end": 102
              },
              "start": 94,
              "end": 102
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
            "start": 50,
            "end": 103
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
              "start": 107,
              "end": 118
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
                  "name": "message",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 128,
                      "end": 134
                    },
                    "start": 126,
                    "end": 134
                  },
                  "start": 119,
                  "end": 134
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "AssignmentExpression",
                      "operator": "=",
                      "left": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "ThisExpression",
                          "start": 142,
                          "end": 146
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "greeting",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 147,
                          "end": 155
                        },
                        "optional": false,
                        "computed": false,
                        "start": 142,
                        "end": 155
                      },
                      "right": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "message",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 158,
                        "end": 165
                      },
                      "start": 142,
                      "end": 165
                    },
                    "directive": null,
                    "start": 142,
                    "end": 166
                  }
                ],
                "start": 136,
                "end": 170
              },
              "expression": false,
              "start": 118,
              "end": 170
            },
            "kind": "constructor",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 107,
            "end": 170
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
                    "name": "lambda",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 175,
                    "end": 181
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Enum",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 182,
                        "end": 186
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "No",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 187,
                        "end": 189
                      },
                      "optional": false,
                      "computed": false,
                      "start": 182,
                      "end": 189
                    }
                  ],
                  "optional": false,
                  "start": 175,
                  "end": 190
                },
                "start": 174,
                "end": 190
              },
              {
                "type": "Decorator",
                "expression": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "deco",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 194,
                    "end": 198
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Enum",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 199,
                        "end": 203
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "No",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 204,
                        "end": 206
                      },
                      "optional": false,
                      "computed": false,
                      "start": 199,
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
              "name": "greet",
              "optional": false,
              "typeAnnotation": null,
              "start": 210,
              "end": 215
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
                      "type": "BinaryExpression",
                      "left": {
                        "type": "Literal",
                        "value": "Hello, ",
                        "raw": "\"Hello, \"",
                        "start": 231,
                        "end": 240
                      },
                      "operator": "+",
                      "right": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "ThisExpression",
                          "start": 243,
                          "end": 247
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "greeting",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 248,
                          "end": 256
                        },
                        "optional": false,
                        "computed": false,
                        "start": 243,
                        "end": 256
                      },
                      "start": 231,
                      "end": 256
                    },
                    "start": 224,
                    "end": 257
                  }
                ],
                "start": 218,
                "end": 261
              },
              "expression": false,
              "start": 215,
              "end": 261
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 174,
            "end": 261
          },
          {
            "type": "MethodDefinition",
            "decorators": [
              {
                "type": "Decorator",
                "expression": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "lambda",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 266,
                  "end": 272
                },
                "start": 265,
                "end": 272
              },
              {
                "type": "Decorator",
                "expression": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "deco",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 276,
                  "end": 280
                },
                "start": 275,
                "end": 280
              }
            ],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "greet1",
              "optional": false,
              "typeAnnotation": null,
              "start": 283,
              "end": 289
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
                      "type": "BinaryExpression",
                      "left": {
                        "type": "Literal",
                        "value": "Hello, ",
                        "raw": "\"Hello, \"",
                        "start": 305,
                        "end": 314
                      },
                      "operator": "+",
                      "right": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "ThisExpression",
                          "start": 317,
                          "end": 321
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "greeting",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 322,
                          "end": 330
                        },
                        "optional": false,
                        "computed": false,
                        "start": 317,
                        "end": 330
                      },
                      "start": 305,
                      "end": 330
                    },
                    "start": 298,
                    "end": 331
                  }
                ],
                "start": 292,
                "end": 335
              },
              "expression": false,
              "start": 289,
              "end": 335
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 265,
            "end": 335
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "greet2",
              "optional": false,
              "typeAnnotation": null,
              "start": 339,
              "end": 345
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
                          "name": "lambda",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 347,
                          "end": 353
                        },
                        "typeArguments": null,
                        "arguments": [
                          {
                            "type": "MemberExpression",
                            "object": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "Enum",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 354,
                              "end": 358
                            },
                            "property": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "No",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 359,
                              "end": 361
                            },
                            "optional": false,
                            "computed": false,
                            "start": 354,
                            "end": 361
                          }
                        ],
                        "optional": false,
                        "start": 347,
                        "end": 362
                      },
                      "start": 346,
                      "end": 362
                    },
                    {
                      "type": "Decorator",
                      "expression": {
                        "type": "CallExpression",
                        "callee": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "deco",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 364,
                          "end": 368
                        },
                        "typeArguments": null,
                        "arguments": [
                          {
                            "type": "MemberExpression",
                            "object": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "Enum",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 369,
                              "end": 373
                            },
                            "property": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "No",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 374,
                              "end": 376
                            },
                            "optional": false,
                            "computed": false,
                            "start": 369,
                            "end": 376
                          }
                        ],
                        "optional": false,
                        "start": 364,
                        "end": 377
                      },
                      "start": 363,
                      "end": 377
                    }
                  ],
                  "name": "param",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 378,
                  "end": 383
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "BinaryExpression",
                      "left": {
                        "type": "Literal",
                        "value": "Hello, ",
                        "raw": "\"Hello, \"",
                        "start": 398,
                        "end": 407
                      },
                      "operator": "+",
                      "right": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "ThisExpression",
                          "start": 410,
                          "end": 414
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "greeting",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 415,
                          "end": 423
                        },
                        "optional": false,
                        "computed": false,
                        "start": 410,
                        "end": 423
                      },
                      "start": 398,
                      "end": 423
                    },
                    "start": 391,
                    "end": 424
                  }
                ],
                "start": 385,
                "end": 428
              },
              "expression": false,
              "start": 345,
              "end": 428
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 339,
            "end": 428
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "greet3",
              "optional": false,
              "typeAnnotation": null,
              "start": 432,
              "end": 438
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
                        "type": "Identifier",
                        "decorators": [],
                        "name": "lambda",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 440,
                        "end": 446
                      },
                      "start": 439,
                      "end": 446
                    },
                    {
                      "type": "Decorator",
                      "expression": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "deco",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 448,
                        "end": 452
                      },
                      "start": 447,
                      "end": 452
                    }
                  ],
                  "name": "param",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 453,
                  "end": 458
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "BinaryExpression",
                      "left": {
                        "type": "Literal",
                        "value": "Hello, ",
                        "raw": "\"Hello, \"",
                        "start": 473,
                        "end": 482
                      },
                      "operator": "+",
                      "right": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "ThisExpression",
                          "start": 485,
                          "end": 489
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "greeting",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 490,
                          "end": 498
                        },
                        "optional": false,
                        "computed": false,
                        "start": 485,
                        "end": 498
                      },
                      "start": 473,
                      "end": 498
                    },
                    "start": 466,
                    "end": 499
                  }
                ],
                "start": 460,
                "end": 503
              },
              "expression": false,
              "start": 438,
              "end": 503
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 432,
            "end": 503
          }
        ],
        "start": 46,
        "end": 505
      },
      "abstract": false,
      "declare": false,
      "start": 0,
      "end": 505
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "deco",
        "optional": false,
        "typeAnnotation": null,
        "start": 516,
        "end": 520
      },
      "generator": false,
      "async": false,
      "declare": false,
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
            "start": 524,
            "end": 528
          },
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSArrayType",
              "elementType": {
                "type": "TSAnyKeyword",
                "start": 530,
                "end": 533
              },
              "start": 530,
              "end": 535
            },
            "start": 528,
            "end": 535
          },
          "value": null,
          "start": 521,
          "end": 535
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSAnyKeyword",
          "start": 538,
          "end": 541
        },
        "start": 536,
        "end": 541
      },
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 542,
        "end": 544
      },
      "expression": false,
      "start": 507,
      "end": 544
    },
    {
      "type": "TSEnumDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Enum",
        "optional": false,
        "typeAnnotation": null,
        "start": 551,
        "end": 555
      },
      "body": {
        "type": "TSEnumBody",
        "members": [
          {
            "type": "TSEnumMember",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "No",
              "optional": false,
              "typeAnnotation": null,
              "start": 560,
              "end": 562
            },
            "initializer": {
              "type": "Literal",
              "value": 0,
              "raw": "0",
              "start": 565,
              "end": 566
            },
            "computed": false,
            "start": 560,
            "end": 566
          },
          {
            "type": "TSEnumMember",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "Yes",
              "optional": false,
              "typeAnnotation": null,
              "start": 570,
              "end": 573
            },
            "initializer": {
              "type": "Literal",
              "value": 1,
              "raw": "1",
              "start": 576,
              "end": 577
            },
            "computed": false,
            "start": 570,
            "end": 577
          }
        ],
        "start": 556,
        "end": 580
      },
      "const": false,
      "declare": false,
      "start": 546,
      "end": 580
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
            "name": "lambda",
            "optional": false,
            "typeAnnotation": null,
            "start": 588,
            "end": 594
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "expression": false,
            "async": false,
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
                  "start": 601,
                  "end": 605
                },
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSArrayType",
                    "elementType": {
                      "type": "TSAnyKeyword",
                      "start": 607,
                      "end": 610
                    },
                    "start": 607,
                    "end": 612
                  },
                  "start": 605,
                  "end": 612
                },
                "value": null,
                "start": 598,
                "end": 612
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 615,
                "end": 618
              },
              "start": 613,
              "end": 618
            },
            "body": {
              "type": "BlockStatement",
              "body": [],
              "start": 622,
              "end": 624
            },
            "id": null,
            "generator": false,
            "start": 597,
            "end": 624
          },
          "definite": false,
          "start": 588,
          "end": 624
        }
      ],
      "declare": false,
      "start": 582,
      "end": 625
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
              "name": "lambda",
              "optional": false,
              "typeAnnotation": null,
              "start": 628,
              "end": 634
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Enum",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 635,
                  "end": 639
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "No",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 640,
                  "end": 642
                },
                "optional": false,
                "computed": false,
                "start": 635,
                "end": 642
              }
            ],
            "optional": false,
            "start": 628,
            "end": 643
          },
          "start": 627,
          "end": 643
        },
        {
          "type": "Decorator",
          "expression": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "deco",
              "optional": false,
              "typeAnnotation": null,
              "start": 645,
              "end": 649
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Enum",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 650,
                  "end": 654
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "No",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 655,
                  "end": 657
                },
                "optional": false,
                "computed": false,
                "start": 650,
                "end": 657
              }
            ],
            "optional": false,
            "start": 645,
            "end": 658
          },
          "start": 644,
          "end": 658
        }
      ],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Greeter1",
        "optional": false,
        "typeAnnotation": null,
        "start": 665,
        "end": 673
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [
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
                    "name": "lambda",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 679,
                    "end": 685
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Enum",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 686,
                        "end": 690
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "No",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 691,
                        "end": 693
                      },
                      "optional": false,
                      "computed": false,
                      "start": 686,
                      "end": 693
                    }
                  ],
                  "optional": false,
                  "start": 679,
                  "end": 694
                },
                "start": 678,
                "end": 694
              },
              {
                "type": "Decorator",
                "expression": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "deco",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 698,
                    "end": 702
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Enum",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 703,
                        "end": 707
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "No",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 708,
                        "end": 710
                      },
                      "optional": false,
                      "computed": false,
                      "start": 703,
                      "end": 710
                    }
                  ],
                  "optional": false,
                  "start": 698,
                  "end": 711
                },
                "start": 697,
                "end": 711
              }
            ],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "greeting",
              "optional": false,
              "typeAnnotation": null,
              "start": 714,
              "end": 722
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 724,
                "end": 730
              },
              "start": 722,
              "end": 730
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
            "start": 678,
            "end": 731
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
              "start": 735,
              "end": 746
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
                  "name": "message",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 756,
                      "end": 762
                    },
                    "start": 754,
                    "end": 762
                  },
                  "start": 747,
                  "end": 762
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "AssignmentExpression",
                      "operator": "=",
                      "left": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "ThisExpression",
                          "start": 770,
                          "end": 774
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "greeting",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 775,
                          "end": 783
                        },
                        "optional": false,
                        "computed": false,
                        "start": 770,
                        "end": 783
                      },
                      "right": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "message",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 786,
                        "end": 793
                      },
                      "start": 770,
                      "end": 793
                    },
                    "directive": null,
                    "start": 770,
                    "end": 794
                  }
                ],
                "start": 764,
                "end": 798
              },
              "expression": false,
              "start": 746,
              "end": 798
            },
            "kind": "constructor",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 735,
            "end": 798
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
                    "name": "lambda",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 803,
                    "end": 809
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Enum",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 810,
                        "end": 814
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "No",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 815,
                        "end": 817
                      },
                      "optional": false,
                      "computed": false,
                      "start": 810,
                      "end": 817
                    }
                  ],
                  "optional": false,
                  "start": 803,
                  "end": 818
                },
                "start": 802,
                "end": 818
              },
              {
                "type": "Decorator",
                "expression": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "deco",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 822,
                    "end": 826
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Enum",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 827,
                        "end": 831
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "No",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 832,
                        "end": 834
                      },
                      "optional": false,
                      "computed": false,
                      "start": 827,
                      "end": 834
                    }
                  ],
                  "optional": false,
                  "start": 822,
                  "end": 835
                },
                "start": 821,
                "end": 835
              }
            ],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "greet",
              "optional": false,
              "typeAnnotation": null,
              "start": 838,
              "end": 843
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
                      "type": "BinaryExpression",
                      "left": {
                        "type": "Literal",
                        "value": "Hello, ",
                        "raw": "\"Hello, \"",
                        "start": 859,
                        "end": 868
                      },
                      "operator": "+",
                      "right": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "ThisExpression",
                          "start": 871,
                          "end": 875
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "greeting",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 876,
                          "end": 884
                        },
                        "optional": false,
                        "computed": false,
                        "start": 871,
                        "end": 884
                      },
                      "start": 859,
                      "end": 884
                    },
                    "start": 852,
                    "end": 885
                  }
                ],
                "start": 846,
                "end": 889
              },
              "expression": false,
              "start": 843,
              "end": 889
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 802,
            "end": 889
          },
          {
            "type": "MethodDefinition",
            "decorators": [
              {
                "type": "Decorator",
                "expression": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "lambda",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 894,
                  "end": 900
                },
                "start": 893,
                "end": 900
              },
              {
                "type": "Decorator",
                "expression": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "deco",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 904,
                  "end": 908
                },
                "start": 903,
                "end": 908
              }
            ],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "greet1",
              "optional": false,
              "typeAnnotation": null,
              "start": 911,
              "end": 917
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
                      "type": "BinaryExpression",
                      "left": {
                        "type": "Literal",
                        "value": "Hello, ",
                        "raw": "\"Hello, \"",
                        "start": 933,
                        "end": 942
                      },
                      "operator": "+",
                      "right": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "ThisExpression",
                          "start": 945,
                          "end": 949
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "greeting",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 950,
                          "end": 958
                        },
                        "optional": false,
                        "computed": false,
                        "start": 945,
                        "end": 958
                      },
                      "start": 933,
                      "end": 958
                    },
                    "start": 926,
                    "end": 959
                  }
                ],
                "start": 920,
                "end": 963
              },
              "expression": false,
              "start": 917,
              "end": 963
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 893,
            "end": 963
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "greet2",
              "optional": false,
              "typeAnnotation": null,
              "start": 967,
              "end": 973
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
                          "name": "lambda",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 975,
                          "end": 981
                        },
                        "typeArguments": null,
                        "arguments": [
                          {
                            "type": "MemberExpression",
                            "object": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "Enum",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 982,
                              "end": 986
                            },
                            "property": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "No",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 987,
                              "end": 989
                            },
                            "optional": false,
                            "computed": false,
                            "start": 982,
                            "end": 989
                          }
                        ],
                        "optional": false,
                        "start": 975,
                        "end": 990
                      },
                      "start": 974,
                      "end": 990
                    },
                    {
                      "type": "Decorator",
                      "expression": {
                        "type": "CallExpression",
                        "callee": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "deco",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 992,
                          "end": 996
                        },
                        "typeArguments": null,
                        "arguments": [
                          {
                            "type": "MemberExpression",
                            "object": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "Enum",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 997,
                              "end": 1001
                            },
                            "property": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "No",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 1002,
                              "end": 1004
                            },
                            "optional": false,
                            "computed": false,
                            "start": 997,
                            "end": 1004
                          }
                        ],
                        "optional": false,
                        "start": 992,
                        "end": 1005
                      },
                      "start": 991,
                      "end": 1005
                    }
                  ],
                  "name": "param",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1006,
                  "end": 1011
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "BinaryExpression",
                      "left": {
                        "type": "Literal",
                        "value": "Hello, ",
                        "raw": "\"Hello, \"",
                        "start": 1026,
                        "end": 1035
                      },
                      "operator": "+",
                      "right": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "ThisExpression",
                          "start": 1038,
                          "end": 1042
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "greeting",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1043,
                          "end": 1051
                        },
                        "optional": false,
                        "computed": false,
                        "start": 1038,
                        "end": 1051
                      },
                      "start": 1026,
                      "end": 1051
                    },
                    "start": 1019,
                    "end": 1052
                  }
                ],
                "start": 1013,
                "end": 1056
              },
              "expression": false,
              "start": 973,
              "end": 1056
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 967,
            "end": 1056
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "greet3",
              "optional": false,
              "typeAnnotation": null,
              "start": 1060,
              "end": 1066
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
                        "type": "Identifier",
                        "decorators": [],
                        "name": "lambda",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1068,
                        "end": 1074
                      },
                      "start": 1067,
                      "end": 1074
                    },
                    {
                      "type": "Decorator",
                      "expression": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "deco",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1076,
                        "end": 1080
                      },
                      "start": 1075,
                      "end": 1080
                    }
                  ],
                  "name": "param",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1081,
                  "end": 1086
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "BinaryExpression",
                      "left": {
                        "type": "Literal",
                        "value": "Hello, ",
                        "raw": "\"Hello, \"",
                        "start": 1101,
                        "end": 1110
                      },
                      "operator": "+",
                      "right": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "ThisExpression",
                          "start": 1113,
                          "end": 1117
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "greeting",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1118,
                          "end": 1126
                        },
                        "optional": false,
                        "computed": false,
                        "start": 1113,
                        "end": 1126
                      },
                      "start": 1101,
                      "end": 1126
                    },
                    "start": 1094,
                    "end": 1127
                  }
                ],
                "start": 1088,
                "end": 1131
              },
              "expression": false,
              "start": 1066,
              "end": 1131
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 1060,
            "end": 1131
          }
        ],
        "start": 674,
        "end": 1133
      },
      "abstract": false,
      "declare": false,
      "start": 627,
      "end": 1133
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 1133
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Punctuator",
    "value": "@",
    "start": 0,
    "end": 1
  },
  {
    "type": "Identifier",
    "value": "lambda",
    "start": 1,
    "end": 7
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 7,
    "end": 8
  },
  {
    "type": "Identifier",
    "value": "Enum",
    "start": 8,
    "end": 12
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 12,
    "end": 13
  },
  {
    "type": "Identifier",
    "value": "No",
    "start": 13,
    "end": 15
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 15,
    "end": 16
  },
  {
    "type": "Punctuator",
    "value": "@",
    "start": 17,
    "end": 18
  },
  {
    "type": "Identifier",
    "value": "deco",
    "start": 18,
    "end": 22
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 22,
    "end": 23
  },
  {
    "type": "Identifier",
    "value": "Enum",
    "start": 23,
    "end": 27
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 27,
    "end": 28
  },
  {
    "type": "Identifier",
    "value": "No",
    "start": 28,
    "end": 30
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 30,
    "end": 31
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 32,
    "end": 37
  },
  {
    "type": "Identifier",
    "value": "Greeter",
    "start": 38,
    "end": 45
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 46,
    "end": 47
  },
  {
    "type": "Punctuator",
    "value": "@",
    "start": 50,
    "end": 51
  },
  {
    "type": "Identifier",
    "value": "lambda",
    "start": 51,
    "end": 57
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 57,
    "end": 58
  },
  {
    "type": "Identifier",
    "value": "Enum",
    "start": 58,
    "end": 62
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 62,
    "end": 63
  },
  {
    "type": "Identifier",
    "value": "No",
    "start": 63,
    "end": 65
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 65,
    "end": 66
  },
  {
    "type": "Punctuator",
    "value": "@",
    "start": 69,
    "end": 70
  },
  {
    "type": "Identifier",
    "value": "deco",
    "start": 70,
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
    "value": "Enum",
    "start": 75,
    "end": 79
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 79,
    "end": 80
  },
  {
    "type": "Identifier",
    "value": "No",
    "start": 80,
    "end": 82
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 82,
    "end": 83
  },
  {
    "type": "Identifier",
    "value": "greeting",
    "start": 86,
    "end": 94
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 94,
    "end": 95
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 96,
    "end": 102
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 102,
    "end": 103
  },
  {
    "type": "Identifier",
    "value": "constructor",
    "start": 107,
    "end": 118
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 118,
    "end": 119
  },
  {
    "type": "Identifier",
    "value": "message",
    "start": 119,
    "end": 126
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 126,
    "end": 127
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 128,
    "end": 134
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 134,
    "end": 135
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 136,
    "end": 137
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 142,
    "end": 146
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 146,
    "end": 147
  },
  {
    "type": "Identifier",
    "value": "greeting",
    "start": 147,
    "end": 155
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 156,
    "end": 157
  },
  {
    "type": "Identifier",
    "value": "message",
    "start": 158,
    "end": 165
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 165,
    "end": 166
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 169,
    "end": 170
  },
  {
    "type": "Punctuator",
    "value": "@",
    "start": 174,
    "end": 175
  },
  {
    "type": "Identifier",
    "value": "lambda",
    "start": 175,
    "end": 181
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 181,
    "end": 182
  },
  {
    "type": "Identifier",
    "value": "Enum",
    "start": 182,
    "end": 186
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 186,
    "end": 187
  },
  {
    "type": "Identifier",
    "value": "No",
    "start": 187,
    "end": 189
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 189,
    "end": 190
  },
  {
    "type": "Punctuator",
    "value": "@",
    "start": 193,
    "end": 194
  },
  {
    "type": "Identifier",
    "value": "deco",
    "start": 194,
    "end": 198
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 198,
    "end": 199
  },
  {
    "type": "Identifier",
    "value": "Enum",
    "start": 199,
    "end": 203
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 203,
    "end": 204
  },
  {
    "type": "Identifier",
    "value": "No",
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
    "type": "Identifier",
    "value": "greet",
    "start": 210,
    "end": 215
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 215,
    "end": 216
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 216,
    "end": 217
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 218,
    "end": 219
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 224,
    "end": 230
  },
  {
    "type": "String",
    "value": "\"Hello, \"",
    "start": 231,
    "end": 240
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 241,
    "end": 242
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 243,
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
    "value": "greeting",
    "start": 248,
    "end": 256
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 256,
    "end": 257
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 260,
    "end": 261
  },
  {
    "type": "Punctuator",
    "value": "@",
    "start": 265,
    "end": 266
  },
  {
    "type": "Identifier",
    "value": "lambda",
    "start": 266,
    "end": 272
  },
  {
    "type": "Punctuator",
    "value": "@",
    "start": 275,
    "end": 276
  },
  {
    "type": "Identifier",
    "value": "deco",
    "start": 276,
    "end": 280
  },
  {
    "type": "Identifier",
    "value": "greet1",
    "start": 283,
    "end": 289
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 289,
    "end": 290
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 290,
    "end": 291
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 292,
    "end": 293
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 298,
    "end": 304
  },
  {
    "type": "String",
    "value": "\"Hello, \"",
    "start": 305,
    "end": 314
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 315,
    "end": 316
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 317,
    "end": 321
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 321,
    "end": 322
  },
  {
    "type": "Identifier",
    "value": "greeting",
    "start": 322,
    "end": 330
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 330,
    "end": 331
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 334,
    "end": 335
  },
  {
    "type": "Identifier",
    "value": "greet2",
    "start": 339,
    "end": 345
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 345,
    "end": 346
  },
  {
    "type": "Punctuator",
    "value": "@",
    "start": 346,
    "end": 347
  },
  {
    "type": "Identifier",
    "value": "lambda",
    "start": 347,
    "end": 353
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 353,
    "end": 354
  },
  {
    "type": "Identifier",
    "value": "Enum",
    "start": 354,
    "end": 358
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 358,
    "end": 359
  },
  {
    "type": "Identifier",
    "value": "No",
    "start": 359,
    "end": 361
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 361,
    "end": 362
  },
  {
    "type": "Punctuator",
    "value": "@",
    "start": 363,
    "end": 364
  },
  {
    "type": "Identifier",
    "value": "deco",
    "start": 364,
    "end": 368
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 368,
    "end": 369
  },
  {
    "type": "Identifier",
    "value": "Enum",
    "start": 369,
    "end": 373
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 373,
    "end": 374
  },
  {
    "type": "Identifier",
    "value": "No",
    "start": 374,
    "end": 376
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 376,
    "end": 377
  },
  {
    "type": "Identifier",
    "value": "param",
    "start": 378,
    "end": 383
  },
  {
    "type": "Punctuator",
    "value": ")",
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
    "type": "Keyword",
    "value": "return",
    "start": 391,
    "end": 397
  },
  {
    "type": "String",
    "value": "\"Hello, \"",
    "start": 398,
    "end": 407
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 408,
    "end": 409
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 410,
    "end": 414
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 414,
    "end": 415
  },
  {
    "type": "Identifier",
    "value": "greeting",
    "start": 415,
    "end": 423
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 423,
    "end": 424
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 427,
    "end": 428
  },
  {
    "type": "Identifier",
    "value": "greet3",
    "start": 432,
    "end": 438
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 438,
    "end": 439
  },
  {
    "type": "Punctuator",
    "value": "@",
    "start": 439,
    "end": 440
  },
  {
    "type": "Identifier",
    "value": "lambda",
    "start": 440,
    "end": 446
  },
  {
    "type": "Punctuator",
    "value": "@",
    "start": 447,
    "end": 448
  },
  {
    "type": "Identifier",
    "value": "deco",
    "start": 448,
    "end": 452
  },
  {
    "type": "Identifier",
    "value": "param",
    "start": 453,
    "end": 458
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 458,
    "end": 459
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 460,
    "end": 461
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 466,
    "end": 472
  },
  {
    "type": "String",
    "value": "\"Hello, \"",
    "start": 473,
    "end": 482
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 483,
    "end": 484
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 485,
    "end": 489
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 489,
    "end": 490
  },
  {
    "type": "Identifier",
    "value": "greeting",
    "start": 490,
    "end": 498
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 498,
    "end": 499
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 502,
    "end": 503
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 504,
    "end": 505
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 507,
    "end": 515
  },
  {
    "type": "Identifier",
    "value": "deco",
    "start": 516,
    "end": 520
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 520,
    "end": 521
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 521,
    "end": 524
  },
  {
    "type": "Identifier",
    "value": "args",
    "start": 524,
    "end": 528
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 528,
    "end": 529
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 530,
    "end": 533
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 533,
    "end": 534
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 534,
    "end": 535
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 535,
    "end": 536
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 536,
    "end": 537
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 538,
    "end": 541
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 542,
    "end": 543
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 543,
    "end": 544
  },
  {
    "type": "Keyword",
    "value": "enum",
    "start": 546,
    "end": 550
  },
  {
    "type": "Identifier",
    "value": "Enum",
    "start": 551,
    "end": 555
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 556,
    "end": 557
  },
  {
    "type": "Identifier",
    "value": "No",
    "start": 560,
    "end": 562
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 563,
    "end": 564
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 565,
    "end": 566
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 566,
    "end": 567
  },
  {
    "type": "Identifier",
    "value": "Yes",
    "start": 570,
    "end": 573
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 574,
    "end": 575
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 576,
    "end": 577
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 577,
    "end": 578
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 579,
    "end": 580
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 582,
    "end": 587
  },
  {
    "type": "Identifier",
    "value": "lambda",
    "start": 588,
    "end": 594
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 595,
    "end": 596
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 597,
    "end": 598
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 598,
    "end": 601
  },
  {
    "type": "Identifier",
    "value": "args",
    "start": 601,
    "end": 605
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 605,
    "end": 606
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 607,
    "end": 610
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 610,
    "end": 611
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 611,
    "end": 612
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 612,
    "end": 613
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 613,
    "end": 614
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 615,
    "end": 618
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 619,
    "end": 621
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 622,
    "end": 623
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 623,
    "end": 624
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 624,
    "end": 625
  },
  {
    "type": "Punctuator",
    "value": "@",
    "start": 627,
    "end": 628
  },
  {
    "type": "Identifier",
    "value": "lambda",
    "start": 628,
    "end": 634
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 634,
    "end": 635
  },
  {
    "type": "Identifier",
    "value": "Enum",
    "start": 635,
    "end": 639
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 639,
    "end": 640
  },
  {
    "type": "Identifier",
    "value": "No",
    "start": 640,
    "end": 642
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 642,
    "end": 643
  },
  {
    "type": "Punctuator",
    "value": "@",
    "start": 644,
    "end": 645
  },
  {
    "type": "Identifier",
    "value": "deco",
    "start": 645,
    "end": 649
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 649,
    "end": 650
  },
  {
    "type": "Identifier",
    "value": "Enum",
    "start": 650,
    "end": 654
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 654,
    "end": 655
  },
  {
    "type": "Identifier",
    "value": "No",
    "start": 655,
    "end": 657
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 657,
    "end": 658
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 659,
    "end": 664
  },
  {
    "type": "Identifier",
    "value": "Greeter1",
    "start": 665,
    "end": 673
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 674,
    "end": 675
  },
  {
    "type": "Punctuator",
    "value": "@",
    "start": 678,
    "end": 679
  },
  {
    "type": "Identifier",
    "value": "lambda",
    "start": 679,
    "end": 685
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 685,
    "end": 686
  },
  {
    "type": "Identifier",
    "value": "Enum",
    "start": 686,
    "end": 690
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 690,
    "end": 691
  },
  {
    "type": "Identifier",
    "value": "No",
    "start": 691,
    "end": 693
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 693,
    "end": 694
  },
  {
    "type": "Punctuator",
    "value": "@",
    "start": 697,
    "end": 698
  },
  {
    "type": "Identifier",
    "value": "deco",
    "start": 698,
    "end": 702
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 702,
    "end": 703
  },
  {
    "type": "Identifier",
    "value": "Enum",
    "start": 703,
    "end": 707
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 707,
    "end": 708
  },
  {
    "type": "Identifier",
    "value": "No",
    "start": 708,
    "end": 710
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 710,
    "end": 711
  },
  {
    "type": "Identifier",
    "value": "greeting",
    "start": 714,
    "end": 722
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 722,
    "end": 723
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 724,
    "end": 730
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 730,
    "end": 731
  },
  {
    "type": "Identifier",
    "value": "constructor",
    "start": 735,
    "end": 746
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 746,
    "end": 747
  },
  {
    "type": "Identifier",
    "value": "message",
    "start": 747,
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
    "value": "string",
    "start": 756,
    "end": 762
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 762,
    "end": 763
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 764,
    "end": 765
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 770,
    "end": 774
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 774,
    "end": 775
  },
  {
    "type": "Identifier",
    "value": "greeting",
    "start": 775,
    "end": 783
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 784,
    "end": 785
  },
  {
    "type": "Identifier",
    "value": "message",
    "start": 786,
    "end": 793
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 793,
    "end": 794
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 797,
    "end": 798
  },
  {
    "type": "Punctuator",
    "value": "@",
    "start": 802,
    "end": 803
  },
  {
    "type": "Identifier",
    "value": "lambda",
    "start": 803,
    "end": 809
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 809,
    "end": 810
  },
  {
    "type": "Identifier",
    "value": "Enum",
    "start": 810,
    "end": 814
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 814,
    "end": 815
  },
  {
    "type": "Identifier",
    "value": "No",
    "start": 815,
    "end": 817
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 817,
    "end": 818
  },
  {
    "type": "Punctuator",
    "value": "@",
    "start": 821,
    "end": 822
  },
  {
    "type": "Identifier",
    "value": "deco",
    "start": 822,
    "end": 826
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 826,
    "end": 827
  },
  {
    "type": "Identifier",
    "value": "Enum",
    "start": 827,
    "end": 831
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 831,
    "end": 832
  },
  {
    "type": "Identifier",
    "value": "No",
    "start": 832,
    "end": 834
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 834,
    "end": 835
  },
  {
    "type": "Identifier",
    "value": "greet",
    "start": 838,
    "end": 843
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 843,
    "end": 844
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 844,
    "end": 845
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 846,
    "end": 847
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 852,
    "end": 858
  },
  {
    "type": "String",
    "value": "\"Hello, \"",
    "start": 859,
    "end": 868
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 869,
    "end": 870
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 871,
    "end": 875
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 875,
    "end": 876
  },
  {
    "type": "Identifier",
    "value": "greeting",
    "start": 876,
    "end": 884
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 884,
    "end": 885
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 888,
    "end": 889
  },
  {
    "type": "Punctuator",
    "value": "@",
    "start": 893,
    "end": 894
  },
  {
    "type": "Identifier",
    "value": "lambda",
    "start": 894,
    "end": 900
  },
  {
    "type": "Punctuator",
    "value": "@",
    "start": 903,
    "end": 904
  },
  {
    "type": "Identifier",
    "value": "deco",
    "start": 904,
    "end": 908
  },
  {
    "type": "Identifier",
    "value": "greet1",
    "start": 911,
    "end": 917
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 917,
    "end": 918
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 918,
    "end": 919
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 920,
    "end": 921
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 926,
    "end": 932
  },
  {
    "type": "String",
    "value": "\"Hello, \"",
    "start": 933,
    "end": 942
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 943,
    "end": 944
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 945,
    "end": 949
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 949,
    "end": 950
  },
  {
    "type": "Identifier",
    "value": "greeting",
    "start": 950,
    "end": 958
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 958,
    "end": 959
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 962,
    "end": 963
  },
  {
    "type": "Identifier",
    "value": "greet2",
    "start": 967,
    "end": 973
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 973,
    "end": 974
  },
  {
    "type": "Punctuator",
    "value": "@",
    "start": 974,
    "end": 975
  },
  {
    "type": "Identifier",
    "value": "lambda",
    "start": 975,
    "end": 981
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 981,
    "end": 982
  },
  {
    "type": "Identifier",
    "value": "Enum",
    "start": 982,
    "end": 986
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 986,
    "end": 987
  },
  {
    "type": "Identifier",
    "value": "No",
    "start": 987,
    "end": 989
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 989,
    "end": 990
  },
  {
    "type": "Punctuator",
    "value": "@",
    "start": 991,
    "end": 992
  },
  {
    "type": "Identifier",
    "value": "deco",
    "start": 992,
    "end": 996
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 996,
    "end": 997
  },
  {
    "type": "Identifier",
    "value": "Enum",
    "start": 997,
    "end": 1001
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1001,
    "end": 1002
  },
  {
    "type": "Identifier",
    "value": "No",
    "start": 1002,
    "end": 1004
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1004,
    "end": 1005
  },
  {
    "type": "Identifier",
    "value": "param",
    "start": 1006,
    "end": 1011
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1011,
    "end": 1012
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1013,
    "end": 1014
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 1019,
    "end": 1025
  },
  {
    "type": "String",
    "value": "\"Hello, \"",
    "start": 1026,
    "end": 1035
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 1036,
    "end": 1037
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 1038,
    "end": 1042
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1042,
    "end": 1043
  },
  {
    "type": "Identifier",
    "value": "greeting",
    "start": 1043,
    "end": 1051
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1051,
    "end": 1052
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1055,
    "end": 1056
  },
  {
    "type": "Identifier",
    "value": "greet3",
    "start": 1060,
    "end": 1066
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1066,
    "end": 1067
  },
  {
    "type": "Punctuator",
    "value": "@",
    "start": 1067,
    "end": 1068
  },
  {
    "type": "Identifier",
    "value": "lambda",
    "start": 1068,
    "end": 1074
  },
  {
    "type": "Punctuator",
    "value": "@",
    "start": 1075,
    "end": 1076
  },
  {
    "type": "Identifier",
    "value": "deco",
    "start": 1076,
    "end": 1080
  },
  {
    "type": "Identifier",
    "value": "param",
    "start": 1081,
    "end": 1086
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1086,
    "end": 1087
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1088,
    "end": 1089
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 1094,
    "end": 1100
  },
  {
    "type": "String",
    "value": "\"Hello, \"",
    "start": 1101,
    "end": 1110
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 1111,
    "end": 1112
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 1113,
    "end": 1117
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1117,
    "end": 1118
  },
  {
    "type": "Identifier",
    "value": "greeting",
    "start": 1118,
    "end": 1126
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1126,
    "end": 1127
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1130,
    "end": 1131
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1132,
    "end": 1133
  }
]
```
