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
        "name": "Foo",
        "optional": false,
        "typeAnnotation": null,
        "start": 71,
        "end": 74
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
              "name": "constructor",
              "optional": false,
              "typeAnnotation": null,
              "start": 81,
              "end": 92
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
                  "name": "shouldThrow",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSBooleanKeyword",
                      "start": 106,
                      "end": 113
                    },
                    "start": 104,
                    "end": 113
                  },
                  "start": 93,
                  "end": 113
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "IfStatement",
                    "test": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "shouldThrow",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 129,
                      "end": 140
                    },
                    "consequent": {
                      "type": "BlockStatement",
                      "body": [
                        {
                          "type": "ThrowStatement",
                          "argument": {
                            "type": "NewExpression",
                            "callee": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "Error",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 166,
                              "end": 171
                            },
                            "typeArguments": null,
                            "arguments": [
                              {
                                "type": "Literal",
                                "value": "Please retry",
                                "raw": "'Please retry'",
                                "start": 172,
                                "end": 186
                              }
                            ],
                            "start": 162,
                            "end": 187
                          },
                          "start": 156,
                          "end": 188
                        }
                      ],
                      "start": 142,
                      "end": 198
                    },
                    "alternate": {
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
                                "name": "console",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 218,
                                "end": 225
                              },
                              "property": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "log",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 226,
                                "end": 229
                              },
                              "optional": false,
                              "computed": false,
                              "start": 218,
                              "end": 229
                            },
                            "typeArguments": null,
                            "arguments": [
                              {
                                "type": "Literal",
                                "value": "OK",
                                "raw": "'OK'",
                                "start": 230,
                                "end": 234
                              }
                            ],
                            "optional": false,
                            "start": 218,
                            "end": 235
                          },
                          "directive": null,
                          "start": 218,
                          "end": 236
                        }
                      ],
                      "start": 204,
                      "end": 246
                    },
                    "start": 125,
                    "end": 246
                  }
                ],
                "start": 115,
                "end": 252
              },
              "expression": false,
              "start": 92,
              "end": 252
            },
            "kind": "constructor",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 81,
            "end": 252
          }
        ],
        "start": 75,
        "end": 254
      },
      "abstract": true,
      "declare": false,
      "start": 56,
      "end": 254
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Bar",
        "optional": false,
        "typeAnnotation": null,
        "start": 262,
        "end": 265
      },
      "typeParameters": null,
      "superClass": {
        "type": "Identifier",
        "decorators": [],
        "name": "Foo",
        "optional": false,
        "typeAnnotation": null,
        "start": 274,
        "end": 277
      },
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
              "start": 284,
              "end": 295
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
                    "type": "TryStatement",
                    "block": {
                      "type": "BlockStatement",
                      "body": [
                        {
                          "type": "ExpressionStatement",
                          "expression": {
                            "type": "CallExpression",
                            "callee": {
                              "type": "Super",
                              "start": 326,
                              "end": 331
                            },
                            "typeArguments": null,
                            "arguments": [
                              {
                                "type": "Literal",
                                "value": true,
                                "raw": "true",
                                "start": 332,
                                "end": 336
                              }
                            ],
                            "optional": false,
                            "start": 326,
                            "end": 337
                          },
                          "directive": null,
                          "start": 326,
                          "end": 338
                        }
                      ],
                      "start": 312,
                      "end": 348
                    },
                    "handler": {
                      "type": "CatchClause",
                      "param": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "e",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSUnknownKeyword",
                            "start": 359,
                            "end": 366
                          },
                          "start": 357,
                          "end": 366
                        },
                        "start": 356,
                        "end": 366
                      },
                      "body": {
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
                                  "name": "console",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 382,
                                  "end": 389
                                },
                                "property": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "log",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 390,
                                  "end": 393
                                },
                                "optional": false,
                                "computed": false,
                                "start": 382,
                                "end": 393
                              },
                              "typeArguments": null,
                              "arguments": [
                                {
                                  "type": "BinaryExpression",
                                  "left": {
                                    "type": "Literal",
                                    "value": "Error: ",
                                    "raw": "'Error: '",
                                    "start": 394,
                                    "end": 403
                                  },
                                  "operator": "+",
                                  "right": {
                                    "type": "MemberExpression",
                                    "object": {
                                      "type": "TSAsExpression",
                                      "expression": {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "e",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 407,
                                        "end": 408
                                      },
                                      "typeAnnotation": {
                                        "type": "TSTypeReference",
                                        "typeName": {
                                          "type": "Identifier",
                                          "decorators": [],
                                          "name": "Error",
                                          "optional": false,
                                          "typeAnnotation": null,
                                          "start": 412,
                                          "end": 417
                                        },
                                        "typeArguments": null,
                                        "start": 412,
                                        "end": 417
                                      },
                                      "start": 407,
                                      "end": 417
                                    },
                                    "property": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "message",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 419,
                                      "end": 426
                                    },
                                    "optional": false,
                                    "computed": false,
                                    "start": 406,
                                    "end": 426
                                  },
                                  "start": 394,
                                  "end": 426
                                }
                              ],
                              "optional": false,
                              "start": 382,
                              "end": 427
                            },
                            "directive": null,
                            "start": 382,
                            "end": 428
                          },
                          {
                            "type": "ExpressionStatement",
                            "expression": {
                              "type": "CallExpression",
                              "callee": {
                                "type": "Super",
                                "start": 462,
                                "end": 467
                              },
                              "typeArguments": null,
                              "arguments": [
                                {
                                  "type": "Literal",
                                  "value": false,
                                  "raw": "false",
                                  "start": 468,
                                  "end": 473
                                }
                              ],
                              "optional": false,
                              "start": 462,
                              "end": 474
                            },
                            "directive": null,
                            "start": 462,
                            "end": 475
                          }
                        ],
                        "start": 368,
                        "end": 485
                      },
                      "start": 349,
                      "end": 485
                    },
                    "finalizer": null,
                    "start": 308,
                    "end": 485
                  }
                ],
                "start": 298,
                "end": 491
              },
              "expression": false,
              "start": 295,
              "end": 491
            },
            "kind": "constructor",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 284,
            "end": 491
          }
        ],
        "start": 278,
        "end": 493
      },
      "abstract": false,
      "declare": false,
      "start": 256,
      "end": 493
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "NewExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "Bar",
          "optional": false,
          "typeAnnotation": null,
          "start": 499,
          "end": 502
        },
        "typeArguments": null,
        "arguments": [],
        "start": 495,
        "end": 504
      },
      "directive": null,
      "start": 495,
      "end": 505
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 56,
  "end": 505
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Identifier",
    "value": "abstract",
    "start": 56,
    "end": 64
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 65,
    "end": 70
  },
  {
    "type": "Identifier",
    "value": "Foo",
    "start": 71,
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
    "value": "constructor",
    "start": 81,
    "end": 92
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 92,
    "end": 93
  },
  {
    "type": "Identifier",
    "value": "shouldThrow",
    "start": 93,
    "end": 104
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 104,
    "end": 105
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 106,
    "end": 113
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 113,
    "end": 114
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 115,
    "end": 116
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 125,
    "end": 127
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 128,
    "end": 129
  },
  {
    "type": "Identifier",
    "value": "shouldThrow",
    "start": 129,
    "end": 140
  },
  {
    "type": "Punctuator",
    "value": ")",
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
    "value": "throw",
    "start": 156,
    "end": 161
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 162,
    "end": 165
  },
  {
    "type": "Identifier",
    "value": "Error",
    "start": 166,
    "end": 171
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 171,
    "end": 172
  },
  {
    "type": "String",
    "value": "'Please retry'",
    "start": 172,
    "end": 186
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 186,
    "end": 187
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 187,
    "end": 188
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 197,
    "end": 198
  },
  {
    "type": "Keyword",
    "value": "else",
    "start": 199,
    "end": 203
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 204,
    "end": 205
  },
  {
    "type": "Identifier",
    "value": "console",
    "start": 218,
    "end": 225
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 225,
    "end": 226
  },
  {
    "type": "Identifier",
    "value": "log",
    "start": 226,
    "end": 229
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 229,
    "end": 230
  },
  {
    "type": "String",
    "value": "'OK'",
    "start": 230,
    "end": 234
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 234,
    "end": 235
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 235,
    "end": 236
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 245,
    "end": 246
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 251,
    "end": 252
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 253,
    "end": 254
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 256,
    "end": 261
  },
  {
    "type": "Identifier",
    "value": "Bar",
    "start": 262,
    "end": 265
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 266,
    "end": 273
  },
  {
    "type": "Identifier",
    "value": "Foo",
    "start": 274,
    "end": 277
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 278,
    "end": 279
  },
  {
    "type": "Identifier",
    "value": "constructor",
    "start": 284,
    "end": 295
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 295,
    "end": 296
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 296,
    "end": 297
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 298,
    "end": 299
  },
  {
    "type": "Keyword",
    "value": "try",
    "start": 308,
    "end": 311
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 312,
    "end": 313
  },
  {
    "type": "Keyword",
    "value": "super",
    "start": 326,
    "end": 331
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 331,
    "end": 332
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 332,
    "end": 336
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 336,
    "end": 337
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 337,
    "end": 338
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 347,
    "end": 348
  },
  {
    "type": "Keyword",
    "value": "catch",
    "start": 349,
    "end": 354
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 355,
    "end": 356
  },
  {
    "type": "Identifier",
    "value": "e",
    "start": 356,
    "end": 357
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 357,
    "end": 358
  },
  {
    "type": "Identifier",
    "value": "unknown",
    "start": 359,
    "end": 366
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 366,
    "end": 367
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 368,
    "end": 369
  },
  {
    "type": "Identifier",
    "value": "console",
    "start": 382,
    "end": 389
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 389,
    "end": 390
  },
  {
    "type": "Identifier",
    "value": "log",
    "start": 390,
    "end": 393
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 393,
    "end": 394
  },
  {
    "type": "String",
    "value": "'Error: '",
    "start": 394,
    "end": 403
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 404,
    "end": 405
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 406,
    "end": 407
  },
  {
    "type": "Identifier",
    "value": "e",
    "start": 407,
    "end": 408
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 409,
    "end": 411
  },
  {
    "type": "Identifier",
    "value": "Error",
    "start": 412,
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
    "value": ".",
    "start": 418,
    "end": 419
  },
  {
    "type": "Identifier",
    "value": "message",
    "start": 419,
    "end": 426
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 426,
    "end": 427
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 427,
    "end": 428
  },
  {
    "type": "Keyword",
    "value": "super",
    "start": 462,
    "end": 467
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 467,
    "end": 468
  },
  {
    "type": "Boolean",
    "value": "false",
    "start": 468,
    "end": 473
  },
  {
    "type": "Punctuator",
    "value": ")",
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
    "type": "Punctuator",
    "value": "}",
    "start": 484,
    "end": 485
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 490,
    "end": 491
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 492,
    "end": 493
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 495,
    "end": 498
  },
  {
    "type": "Identifier",
    "value": "Bar",
    "start": 499,
    "end": 502
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 502,
    "end": 503
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 503,
    "end": 504
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 504,
    "end": 505
  }
]
```
