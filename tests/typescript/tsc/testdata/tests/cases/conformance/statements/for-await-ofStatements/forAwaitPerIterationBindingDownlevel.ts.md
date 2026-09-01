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
            "name": "sleep",
            "optional": false,
            "typeAnnotation": null,
            "start": 6,
            "end": 11
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
                "name": "tm",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 19,
                    "end": 25
                  },
                  "start": 17,
                  "end": 25
                },
                "start": 15,
                "end": 25
              }
            ],
            "returnType": null,
            "body": {
              "type": "NewExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "Promise",
                "optional": false,
                "typeAnnotation": null,
                "start": 34,
                "end": 41
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
                      "name": "resolve",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 42,
                      "end": 49
                    }
                  ],
                  "returnType": null,
                  "body": {
                    "type": "CallExpression",
                    "callee": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "setTimeout",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 53,
                      "end": 63
                    },
                    "typeArguments": null,
                    "arguments": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "resolve",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 64,
                        "end": 71
                      },
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "tm",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 73,
                        "end": 75
                      }
                    ],
                    "optional": false,
                    "start": 53,
                    "end": 76
                  },
                  "id": null,
                  "generator": false,
                  "start": 42,
                  "end": 76
                }
              ],
              "start": 30,
              "end": 77
            },
            "id": null,
            "generator": false,
            "start": 14,
            "end": 77
          },
          "definite": false,
          "start": 6,
          "end": 77
        }
      ],
      "declare": false,
      "start": 0,
      "end": 78
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "gen",
        "optional": false,
        "typeAnnotation": null,
        "start": 96,
        "end": 99
      },
      "generator": true,
      "async": true,
      "declare": false,
      "typeParameters": null,
      "params": [],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "YieldExpression",
              "delegate": false,
              "argument": {
                "type": "Literal",
                "value": 1,
                "raw": "1",
                "start": 114,
                "end": 115
              },
              "start": 108,
              "end": 115
            },
            "directive": null,
            "start": 108,
            "end": 116
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AwaitExpression",
              "argument": {
                "type": "CallExpression",
                "callee": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "sleep",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 127,
                  "end": 132
                },
                "typeArguments": null,
                "arguments": [
                  {
                    "type": "Literal",
                    "value": 1000,
                    "raw": "1000",
                    "start": 133,
                    "end": 137
                  }
                ],
                "optional": false,
                "start": 127,
                "end": 138
              },
              "start": 121,
              "end": 138
            },
            "directive": null,
            "start": 121,
            "end": 139
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "YieldExpression",
              "delegate": false,
              "argument": {
                "type": "Literal",
                "value": 2,
                "raw": "2",
                "start": 150,
                "end": 151
              },
              "start": 144,
              "end": 151
            },
            "directive": null,
            "start": 144,
            "end": 152
          }
        ],
        "start": 102,
        "end": 154
      },
      "expression": false,
      "start": 80,
      "end": 154
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
            "name": "log",
            "optional": false,
            "typeAnnotation": null,
            "start": 162,
            "end": 165
          },
          "init": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "console",
              "optional": false,
              "typeAnnotation": null,
              "start": 168,
              "end": 175
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "log",
              "optional": false,
              "typeAnnotation": null,
              "start": 176,
              "end": 179
            },
            "optional": false,
            "computed": false,
            "start": 168,
            "end": 179
          },
          "definite": false,
          "start": 162,
          "end": 179
        }
      ],
      "declare": false,
      "start": 156,
      "end": 180
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "ArrowFunctionExpression",
          "expression": false,
          "async": true,
          "typeParameters": null,
          "params": [],
          "returnType": null,
          "body": {
            "type": "BlockStatement",
            "body": [
              {
                "type": "ForOfStatement",
                "await": true,
                "left": {
                  "type": "VariableDeclaration",
                  "kind": "const",
                  "declarations": [
                    {
                      "type": "VariableDeclarator",
                      "id": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "outer",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 218,
                        "end": 223
                      },
                      "init": null,
                      "definite": false,
                      "start": 218,
                      "end": 223
                    }
                  ],
                  "declare": false,
                  "start": 212,
                  "end": 223
                },
                "right": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "gen",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 227,
                    "end": 230
                  },
                  "typeArguments": null,
                  "arguments": [],
                  "optional": false,
                  "start": 227,
                  "end": 232
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
                          "name": "log",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 244,
                          "end": 247
                        },
                        "typeArguments": null,
                        "arguments": [
                          {
                            "type": "TemplateLiteral",
                            "quasis": [
                              {
                                "type": "TemplateElement",
                                "value": {
                                  "raw": "I'm loop ",
                                  "cooked": "I'm loop "
                                },
                                "tail": false,
                                "start": 248,
                                "end": 260
                              },
                              {
                                "type": "TemplateElement",
                                "value": {
                                  "raw": "",
                                  "cooked": ""
                                },
                                "tail": true,
                                "start": 265,
                                "end": 267
                              }
                            ],
                            "expressions": [
                              {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "outer",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 260,
                                "end": 265
                              }
                            ],
                            "start": 248,
                            "end": 267
                          }
                        ],
                        "optional": false,
                        "start": 244,
                        "end": 268
                      },
                      "directive": null,
                      "start": 244,
                      "end": 269
                    },
                    {
                      "type": "ExpressionStatement",
                      "expression": {
                        "type": "CallExpression",
                        "callee": {
                          "type": "ArrowFunctionExpression",
                          "expression": false,
                          "async": true,
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
                                      "name": "inner",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 311,
                                      "end": 316
                                    },
                                    "init": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "outer",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 319,
                                      "end": 324
                                    },
                                    "definite": false,
                                    "start": 311,
                                    "end": 324
                                  }
                                ],
                                "declare": false,
                                "start": 305,
                                "end": 325
                              },
                              {
                                "type": "ExpressionStatement",
                                "expression": {
                                  "type": "AwaitExpression",
                                  "argument": {
                                    "type": "CallExpression",
                                    "callee": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "sleep",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 344,
                                      "end": 349
                                    },
                                    "typeArguments": null,
                                    "arguments": [
                                      {
                                        "type": "Literal",
                                        "value": 2000,
                                        "raw": "2000",
                                        "start": 350,
                                        "end": 354
                                      }
                                    ],
                                    "optional": false,
                                    "start": 344,
                                    "end": 355
                                  },
                                  "start": 338,
                                  "end": 355
                                },
                                "directive": null,
                                "start": 338,
                                "end": 356
                              },
                              {
                                "type": "IfStatement",
                                "test": {
                                  "type": "BinaryExpression",
                                  "left": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "inner",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 373,
                                    "end": 378
                                  },
                                  "operator": "===",
                                  "right": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "outer",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 383,
                                    "end": 388
                                  },
                                  "start": 373,
                                  "end": 388
                                },
                                "consequent": {
                                  "type": "BlockStatement",
                                  "body": [
                                    {
                                      "type": "ExpressionStatement",
                                      "expression": {
                                        "type": "CallExpression",
                                        "callee": {
                                          "type": "Identifier",
                                          "decorators": [],
                                          "name": "log",
                                          "optional": false,
                                          "typeAnnotation": null,
                                          "start": 408,
                                          "end": 411
                                        },
                                        "typeArguments": null,
                                        "arguments": [
                                          {
                                            "type": "TemplateLiteral",
                                            "quasis": [
                                              {
                                                "type": "TemplateElement",
                                                "value": {
                                                  "raw": "I'm loop ",
                                                  "cooked": "I'm loop "
                                                },
                                                "tail": false,
                                                "start": 412,
                                                "end": 424
                                              },
                                              {
                                                "type": "TemplateElement",
                                                "value": {
                                                  "raw": " and I know I'm loop ",
                                                  "cooked": " and I know I'm loop "
                                                },
                                                "tail": false,
                                                "start": 429,
                                                "end": 453
                                              },
                                              {
                                                "type": "TemplateElement",
                                                "value": {
                                                  "raw": "",
                                                  "cooked": ""
                                                },
                                                "tail": true,
                                                "start": 458,
                                                "end": 460
                                              }
                                            ],
                                            "expressions": [
                                              {
                                                "type": "Identifier",
                                                "decorators": [],
                                                "name": "inner",
                                                "optional": false,
                                                "typeAnnotation": null,
                                                "start": 424,
                                                "end": 429
                                              },
                                              {
                                                "type": "Identifier",
                                                "decorators": [],
                                                "name": "outer",
                                                "optional": false,
                                                "typeAnnotation": null,
                                                "start": 453,
                                                "end": 458
                                              }
                                            ],
                                            "start": 412,
                                            "end": 460
                                          }
                                        ],
                                        "optional": false,
                                        "start": 408,
                                        "end": 461
                                      },
                                      "directive": null,
                                      "start": 408,
                                      "end": 462
                                    }
                                  ],
                                  "start": 390,
                                  "end": 476
                                },
                                "alternate": {
                                  "type": "BlockStatement",
                                  "body": [
                                    {
                                      "type": "ExpressionStatement",
                                      "expression": {
                                        "type": "CallExpression",
                                        "callee": {
                                          "type": "Identifier",
                                          "decorators": [],
                                          "name": "log",
                                          "optional": false,
                                          "typeAnnotation": null,
                                          "start": 500,
                                          "end": 503
                                        },
                                        "typeArguments": null,
                                        "arguments": [
                                          {
                                            "type": "TemplateLiteral",
                                            "quasis": [
                                              {
                                                "type": "TemplateElement",
                                                "value": {
                                                  "raw": "I'm loop ",
                                                  "cooked": "I'm loop "
                                                },
                                                "tail": false,
                                                "start": 504,
                                                "end": 516
                                              },
                                              {
                                                "type": "TemplateElement",
                                                "value": {
                                                  "raw": ", but I think I'm loop ",
                                                  "cooked": ", but I think I'm loop "
                                                },
                                                "tail": false,
                                                "start": 521,
                                                "end": 547
                                              },
                                              {
                                                "type": "TemplateElement",
                                                "value": {
                                                  "raw": "",
                                                  "cooked": ""
                                                },
                                                "tail": true,
                                                "start": 552,
                                                "end": 554
                                              }
                                            ],
                                            "expressions": [
                                              {
                                                "type": "Identifier",
                                                "decorators": [],
                                                "name": "inner",
                                                "optional": false,
                                                "typeAnnotation": null,
                                                "start": 516,
                                                "end": 521
                                              },
                                              {
                                                "type": "Identifier",
                                                "decorators": [],
                                                "name": "outer",
                                                "optional": false,
                                                "typeAnnotation": null,
                                                "start": 547,
                                                "end": 552
                                              }
                                            ],
                                            "start": 504,
                                            "end": 554
                                          }
                                        ],
                                        "optional": false,
                                        "start": 500,
                                        "end": 555
                                      },
                                      "directive": null,
                                      "start": 500,
                                      "end": 556
                                    }
                                  ],
                                  "start": 482,
                                  "end": 570
                                },
                                "start": 369,
                                "end": 570
                              }
                            ],
                            "start": 291,
                            "end": 580
                          },
                          "id": null,
                          "generator": false,
                          "start": 279,
                          "end": 580
                        },
                        "typeArguments": null,
                        "arguments": [],
                        "optional": false,
                        "start": 278,
                        "end": 583
                      },
                      "directive": null,
                      "start": 278,
                      "end": 584
                    }
                  ],
                  "start": 234,
                  "end": 590
                },
                "start": 201,
                "end": 590
              }
            ],
            "start": 195,
            "end": 592
          },
          "id": null,
          "generator": false,
          "start": 183,
          "end": 592
        },
        "typeArguments": null,
        "arguments": [],
        "optional": false,
        "start": 182,
        "end": 595
      },
      "directive": null,
      "start": 182,
      "end": 596
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 596
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
    "value": "sleep",
    "start": 6,
    "end": 11
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 12,
    "end": 13
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 14,
    "end": 15
  },
  {
    "type": "Identifier",
    "value": "tm",
    "start": 15,
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
    "value": "number",
    "start": 19,
    "end": 25
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 25,
    "end": 26
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 27,
    "end": 29
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 30,
    "end": 33
  },
  {
    "type": "Identifier",
    "value": "Promise",
    "start": 34,
    "end": 41
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 41,
    "end": 42
  },
  {
    "type": "Identifier",
    "value": "resolve",
    "start": 42,
    "end": 49
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 50,
    "end": 52
  },
  {
    "type": "Identifier",
    "value": "setTimeout",
    "start": 53,
    "end": 63
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 63,
    "end": 64
  },
  {
    "type": "Identifier",
    "value": "resolve",
    "start": 64,
    "end": 71
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 71,
    "end": 72
  },
  {
    "type": "Identifier",
    "value": "tm",
    "start": 73,
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
    "value": "async",
    "start": 80,
    "end": 85
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 86,
    "end": 94
  },
  {
    "type": "Punctuator",
    "value": "*",
    "start": 94,
    "end": 95
  },
  {
    "type": "Identifier",
    "value": "gen",
    "start": 96,
    "end": 99
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
    "value": "{",
    "start": 102,
    "end": 103
  },
  {
    "type": "Keyword",
    "value": "yield",
    "start": 108,
    "end": 113
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 114,
    "end": 115
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 115,
    "end": 116
  },
  {
    "type": "Identifier",
    "value": "await",
    "start": 121,
    "end": 126
  },
  {
    "type": "Identifier",
    "value": "sleep",
    "start": 127,
    "end": 132
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 132,
    "end": 133
  },
  {
    "type": "Numeric",
    "value": "1000",
    "start": 133,
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
    "value": "yield",
    "start": 144,
    "end": 149
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 150,
    "end": 151
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 151,
    "end": 152
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 153,
    "end": 154
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 156,
    "end": 161
  },
  {
    "type": "Identifier",
    "value": "log",
    "start": 162,
    "end": 165
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 166,
    "end": 167
  },
  {
    "type": "Identifier",
    "value": "console",
    "start": 168,
    "end": 175
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 175,
    "end": 176
  },
  {
    "type": "Identifier",
    "value": "log",
    "start": 176,
    "end": 179
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 179,
    "end": 180
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 182,
    "end": 183
  },
  {
    "type": "Identifier",
    "value": "async",
    "start": 183,
    "end": 188
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 189,
    "end": 190
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 190,
    "end": 191
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 192,
    "end": 194
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 195,
    "end": 196
  },
  {
    "type": "Keyword",
    "value": "for",
    "start": 201,
    "end": 204
  },
  {
    "type": "Identifier",
    "value": "await",
    "start": 205,
    "end": 210
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 211,
    "end": 212
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 212,
    "end": 217
  },
  {
    "type": "Identifier",
    "value": "outer",
    "start": 218,
    "end": 223
  },
  {
    "type": "Identifier",
    "value": "of",
    "start": 224,
    "end": 226
  },
  {
    "type": "Identifier",
    "value": "gen",
    "start": 227,
    "end": 230
  },
  {
    "type": "Punctuator",
    "value": "(",
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
    "value": "{",
    "start": 234,
    "end": 235
  },
  {
    "type": "Identifier",
    "value": "log",
    "start": 244,
    "end": 247
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 247,
    "end": 248
  },
  {
    "type": "Template",
    "value": "`I'm loop ${",
    "start": 248,
    "end": 260
  },
  {
    "type": "Identifier",
    "value": "outer",
    "start": 260,
    "end": 265
  },
  {
    "type": "Template",
    "value": "}`",
    "start": 265,
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
    "type": "Punctuator",
    "value": "(",
    "start": 278,
    "end": 279
  },
  {
    "type": "Identifier",
    "value": "async",
    "start": 279,
    "end": 284
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 285,
    "end": 286
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 286,
    "end": 287
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 288,
    "end": 290
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 291,
    "end": 292
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 305,
    "end": 310
  },
  {
    "type": "Identifier",
    "value": "inner",
    "start": 311,
    "end": 316
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 317,
    "end": 318
  },
  {
    "type": "Identifier",
    "value": "outer",
    "start": 319,
    "end": 324
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 324,
    "end": 325
  },
  {
    "type": "Identifier",
    "value": "await",
    "start": 338,
    "end": 343
  },
  {
    "type": "Identifier",
    "value": "sleep",
    "start": 344,
    "end": 349
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 349,
    "end": 350
  },
  {
    "type": "Numeric",
    "value": "2000",
    "start": 350,
    "end": 354
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
    "type": "Keyword",
    "value": "if",
    "start": 369,
    "end": 371
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 372,
    "end": 373
  },
  {
    "type": "Identifier",
    "value": "inner",
    "start": 373,
    "end": 378
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 379,
    "end": 382
  },
  {
    "type": "Identifier",
    "value": "outer",
    "start": 383,
    "end": 388
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 388,
    "end": 389
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 390,
    "end": 391
  },
  {
    "type": "Identifier",
    "value": "log",
    "start": 408,
    "end": 411
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 411,
    "end": 412
  },
  {
    "type": "Template",
    "value": "`I'm loop ${",
    "start": 412,
    "end": 424
  },
  {
    "type": "Identifier",
    "value": "inner",
    "start": 424,
    "end": 429
  },
  {
    "type": "Template",
    "value": "} and I know I'm loop ${",
    "start": 429,
    "end": 453
  },
  {
    "type": "Identifier",
    "value": "outer",
    "start": 453,
    "end": 458
  },
  {
    "type": "Template",
    "value": "}`",
    "start": 458,
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
    "value": "}",
    "start": 475,
    "end": 476
  },
  {
    "type": "Keyword",
    "value": "else",
    "start": 477,
    "end": 481
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 482,
    "end": 483
  },
  {
    "type": "Identifier",
    "value": "log",
    "start": 500,
    "end": 503
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 503,
    "end": 504
  },
  {
    "type": "Template",
    "value": "`I'm loop ${",
    "start": 504,
    "end": 516
  },
  {
    "type": "Identifier",
    "value": "inner",
    "start": 516,
    "end": 521
  },
  {
    "type": "Template",
    "value": "}, but I think I'm loop ${",
    "start": 521,
    "end": 547
  },
  {
    "type": "Identifier",
    "value": "outer",
    "start": 547,
    "end": 552
  },
  {
    "type": "Template",
    "value": "}`",
    "start": 552,
    "end": 554
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 554,
    "end": 555
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 555,
    "end": 556
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 569,
    "end": 570
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 579,
    "end": 580
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 580,
    "end": 581
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 581,
    "end": 582
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 582,
    "end": 583
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 583,
    "end": 584
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 589,
    "end": 590
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 591,
    "end": 592
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 592,
    "end": 593
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 593,
    "end": 594
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 594,
    "end": 595
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 595,
    "end": 596
  }
]
```
