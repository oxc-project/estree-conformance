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
            "name": "PRIVATE_METADATA",
            "optional": false,
            "typeAnnotation": null,
            "start": 6,
            "end": 22
          },
          "init": {
            "type": "NewExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "WeakMap",
              "optional": false,
              "typeAnnotation": null,
              "start": 29,
              "end": 36
            },
            "typeArguments": null,
            "arguments": [],
            "start": 25,
            "end": 38
          },
          "definite": false,
          "start": 6,
          "end": 38
        }
      ],
      "declare": false,
      "start": 0,
      "end": 39
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "meta",
        "optional": false,
        "typeAnnotation": null,
        "start": 50,
        "end": 54
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "key",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSStringKeyword",
              "start": 60,
              "end": 66
            },
            "start": 58,
            "end": 66
          },
          "start": 55,
          "end": 66
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "value",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSStringKeyword",
              "start": 75,
              "end": 81
            },
            "start": 73,
            "end": 81
          },
          "start": 68,
          "end": 81
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
              "expression": false,
              "async": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "_",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 97,
                  "end": 98
                },
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "context",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 100,
                  "end": 107
                }
              ],
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
                          "name": "metadata",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 126,
                          "end": 134
                        },
                        "init": {
                          "type": "CallExpression",
                          "callee": {
                            "type": "MemberExpression",
                            "object": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "PRIVATE_METADATA",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 137,
                              "end": 153
                            },
                            "property": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "get",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 154,
                              "end": 157
                            },
                            "optional": false,
                            "computed": false,
                            "start": 137,
                            "end": 157
                          },
                          "typeArguments": null,
                          "arguments": [
                            {
                              "type": "MemberExpression",
                              "object": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "context",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 158,
                                "end": 165
                              },
                              "property": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "metadata",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 166,
                                "end": 174
                              },
                              "optional": false,
                              "computed": false,
                              "start": 158,
                              "end": 174
                            }
                          ],
                          "optional": false,
                          "start": 137,
                          "end": 175
                        },
                        "definite": false,
                        "start": 126,
                        "end": 175
                      }
                    ],
                    "declare": false,
                    "start": 122,
                    "end": 176
                  },
                  {
                    "type": "IfStatement",
                    "test": {
                      "type": "UnaryExpression",
                      "operator": "!",
                      "argument": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "metadata",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 191,
                        "end": 199
                      },
                      "prefix": true,
                      "start": 190,
                      "end": 199
                    },
                    "consequent": {
                      "type": "BlockStatement",
                      "body": [
                        {
                          "type": "ExpressionStatement",
                          "expression": {
                            "type": "AssignmentExpression",
                            "operator": "=",
                            "left": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "metadata",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 215,
                              "end": 223
                            },
                            "right": {
                              "type": "ObjectExpression",
                              "properties": [],
                              "start": 226,
                              "end": 228
                            },
                            "start": 215,
                            "end": 228
                          },
                          "directive": null,
                          "start": 215,
                          "end": 229
                        },
                        {
                          "type": "ExpressionStatement",
                          "expression": {
                            "type": "CallExpression",
                            "callee": {
                              "type": "MemberExpression",
                              "object": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "PRIVATE_METADATA",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 242,
                                "end": 258
                              },
                              "property": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "set",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 259,
                                "end": 262
                              },
                              "optional": false,
                              "computed": false,
                              "start": 242,
                              "end": 262
                            },
                            "typeArguments": null,
                            "arguments": [
                              {
                                "type": "MemberExpression",
                                "object": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "context",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 263,
                                  "end": 270
                                },
                                "property": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "metadata",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 271,
                                  "end": 279
                                },
                                "optional": false,
                                "computed": false,
                                "start": 263,
                                "end": 279
                              },
                              {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "metadata",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 281,
                                "end": 289
                              }
                            ],
                            "optional": false,
                            "start": 242,
                            "end": 290
                          },
                          "directive": null,
                          "start": 242,
                          "end": 291
                        }
                      ],
                      "start": 201,
                      "end": 301
                    },
                    "alternate": null,
                    "start": 186,
                    "end": 301
                  },
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "AssignmentExpression",
                      "operator": "=",
                      "left": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "metadata",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 311,
                          "end": 319
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "key",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 320,
                          "end": 323
                        },
                        "optional": false,
                        "computed": true,
                        "start": 311,
                        "end": 324
                      },
                      "right": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "value",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 327,
                        "end": 332
                      },
                      "start": 311,
                      "end": 332
                    },
                    "directive": null,
                    "start": 311,
                    "end": 333
                  }
                ],
                "start": 112,
                "end": 339
              },
              "id": null,
              "generator": false,
              "start": 96,
              "end": 339
            },
            "start": 89,
            "end": 340
          }
        ],
        "start": 83,
        "end": 342
      },
      "expression": false,
      "start": 41,
      "end": 342
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
              "name": "meta",
              "optional": false,
              "typeAnnotation": null,
              "start": 345,
              "end": 349
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Literal",
                "value": "a",
                "raw": "'a'",
                "start": 350,
                "end": 353
              },
              {
                "type": "Literal",
                "value": "x",
                "raw": "'x'",
                "start": 355,
                "end": 358
              }
            ],
            "optional": false,
            "start": 345,
            "end": 359
          },
          "start": 344,
          "end": 359
        }
      ],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "C",
        "optional": false,
        "typeAnnotation": null,
        "start": 366,
        "end": 367
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
                    "name": "meta",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 375,
                    "end": 379
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "Literal",
                      "value": "b",
                      "raw": "'b'",
                      "start": 380,
                      "end": 383
                    },
                    {
                      "type": "Literal",
                      "value": "y",
                      "raw": "'y'",
                      "start": 385,
                      "end": 388
                    }
                  ],
                  "optional": false,
                  "start": 375,
                  "end": 389
                },
                "start": 374,
                "end": 389
              }
            ],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "m",
              "optional": false,
              "typeAnnotation": null,
              "start": 394,
              "end": 395
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
                "start": 398,
                "end": 401
              },
              "expression": false,
              "start": 395,
              "end": 401
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 374,
            "end": 401
          }
        ],
        "start": 368,
        "end": 403
      },
      "abstract": false,
      "declare": false,
      "start": 344,
      "end": 403
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "MemberExpression",
        "object": {
          "type": "CallExpression",
          "callee": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "PRIVATE_METADATA",
              "optional": false,
              "typeAnnotation": null,
              "start": 405,
              "end": 421
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "get",
              "optional": false,
              "typeAnnotation": null,
              "start": 422,
              "end": 425
            },
            "optional": false,
            "computed": false,
            "start": 405,
            "end": 425
          },
          "typeArguments": null,
          "arguments": [
            {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "C",
                "optional": false,
                "typeAnnotation": null,
                "start": 426,
                "end": 427
              },
              "property": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Symbol",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 428,
                  "end": 434
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "metadata",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 435,
                  "end": 443
                },
                "optional": false,
                "computed": false,
                "start": 428,
                "end": 443
              },
              "optional": false,
              "computed": true,
              "start": 426,
              "end": 444
            }
          ],
          "optional": false,
          "start": 405,
          "end": 445
        },
        "property": {
          "type": "Identifier",
          "decorators": [],
          "name": "a",
          "optional": false,
          "typeAnnotation": null,
          "start": 446,
          "end": 447
        },
        "optional": false,
        "computed": false,
        "start": 405,
        "end": 447
      },
      "directive": null,
      "start": 405,
      "end": 448
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "MemberExpression",
        "object": {
          "type": "CallExpression",
          "callee": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "PRIVATE_METADATA",
              "optional": false,
              "typeAnnotation": null,
              "start": 456,
              "end": 472
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "get",
              "optional": false,
              "typeAnnotation": null,
              "start": 473,
              "end": 476
            },
            "optional": false,
            "computed": false,
            "start": 456,
            "end": 476
          },
          "typeArguments": null,
          "arguments": [
            {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "C",
                "optional": false,
                "typeAnnotation": null,
                "start": 477,
                "end": 478
              },
              "property": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Symbol",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 479,
                  "end": 485
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "metadata",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 486,
                  "end": 494
                },
                "optional": false,
                "computed": false,
                "start": 479,
                "end": 494
              },
              "optional": false,
              "computed": true,
              "start": 477,
              "end": 495
            }
          ],
          "optional": false,
          "start": 456,
          "end": 496
        },
        "property": {
          "type": "Identifier",
          "decorators": [],
          "name": "b",
          "optional": false,
          "typeAnnotation": null,
          "start": 497,
          "end": 498
        },
        "optional": false,
        "computed": false,
        "start": 456,
        "end": 498
      },
      "directive": null,
      "start": 456,
      "end": 499
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 506
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
    "value": "PRIVATE_METADATA",
    "start": 6,
    "end": 22
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 23,
    "end": 24
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 25,
    "end": 28
  },
  {
    "type": "Identifier",
    "value": "WeakMap",
    "start": 29,
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
    "value": ";",
    "start": 38,
    "end": 39
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 41,
    "end": 49
  },
  {
    "type": "Identifier",
    "value": "meta",
    "start": 50,
    "end": 54
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 54,
    "end": 55
  },
  {
    "type": "Identifier",
    "value": "key",
    "start": 55,
    "end": 58
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 58,
    "end": 59
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 60,
    "end": 66
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 66,
    "end": 67
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 68,
    "end": 73
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 73,
    "end": 74
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 75,
    "end": 81
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 81,
    "end": 82
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 83,
    "end": 84
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 89,
    "end": 95
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 96,
    "end": 97
  },
  {
    "type": "Identifier",
    "value": "_",
    "start": 97,
    "end": 98
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 98,
    "end": 99
  },
  {
    "type": "Identifier",
    "value": "context",
    "start": 100,
    "end": 107
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 107,
    "end": 108
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 109,
    "end": 111
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 112,
    "end": 113
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 122,
    "end": 125
  },
  {
    "type": "Identifier",
    "value": "metadata",
    "start": 126,
    "end": 134
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 135,
    "end": 136
  },
  {
    "type": "Identifier",
    "value": "PRIVATE_METADATA",
    "start": 137,
    "end": 153
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 153,
    "end": 154
  },
  {
    "type": "Identifier",
    "value": "get",
    "start": 154,
    "end": 157
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 157,
    "end": 158
  },
  {
    "type": "Identifier",
    "value": "context",
    "start": 158,
    "end": 165
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 165,
    "end": 166
  },
  {
    "type": "Identifier",
    "value": "metadata",
    "start": 166,
    "end": 174
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 174,
    "end": 175
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 175,
    "end": 176
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 186,
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
    "value": "!",
    "start": 190,
    "end": 191
  },
  {
    "type": "Identifier",
    "value": "metadata",
    "start": 191,
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
    "value": "{",
    "start": 201,
    "end": 202
  },
  {
    "type": "Identifier",
    "value": "metadata",
    "start": 215,
    "end": 223
  },
  {
    "type": "Punctuator",
    "value": "=",
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
    "type": "Punctuator",
    "value": "}",
    "start": 227,
    "end": 228
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 228,
    "end": 229
  },
  {
    "type": "Identifier",
    "value": "PRIVATE_METADATA",
    "start": 242,
    "end": 258
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 258,
    "end": 259
  },
  {
    "type": "Identifier",
    "value": "set",
    "start": 259,
    "end": 262
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 262,
    "end": 263
  },
  {
    "type": "Identifier",
    "value": "context",
    "start": 263,
    "end": 270
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 270,
    "end": 271
  },
  {
    "type": "Identifier",
    "value": "metadata",
    "start": 271,
    "end": 279
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 279,
    "end": 280
  },
  {
    "type": "Identifier",
    "value": "metadata",
    "start": 281,
    "end": 289
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 289,
    "end": 290
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 290,
    "end": 291
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 300,
    "end": 301
  },
  {
    "type": "Identifier",
    "value": "metadata",
    "start": 311,
    "end": 319
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 319,
    "end": 320
  },
  {
    "type": "Identifier",
    "value": "key",
    "start": 320,
    "end": 323
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 323,
    "end": 324
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 325,
    "end": 326
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 327,
    "end": 332
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 332,
    "end": 333
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 338,
    "end": 339
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 339,
    "end": 340
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 341,
    "end": 342
  },
  {
    "type": "Punctuator",
    "value": "@",
    "start": 344,
    "end": 345
  },
  {
    "type": "Identifier",
    "value": "meta",
    "start": 345,
    "end": 349
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 349,
    "end": 350
  },
  {
    "type": "String",
    "value": "'a'",
    "start": 350,
    "end": 353
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 353,
    "end": 354
  },
  {
    "type": "String",
    "value": "'x'",
    "start": 355,
    "end": 358
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 358,
    "end": 359
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 360,
    "end": 365
  },
  {
    "type": "Identifier",
    "value": "C",
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
    "type": "Punctuator",
    "value": "@",
    "start": 374,
    "end": 375
  },
  {
    "type": "Identifier",
    "value": "meta",
    "start": 375,
    "end": 379
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 379,
    "end": 380
  },
  {
    "type": "String",
    "value": "'b'",
    "start": 380,
    "end": 383
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 383,
    "end": 384
  },
  {
    "type": "String",
    "value": "'y'",
    "start": 385,
    "end": 388
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 388,
    "end": 389
  },
  {
    "type": "Identifier",
    "value": "m",
    "start": 394,
    "end": 395
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 395,
    "end": 396
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 396,
    "end": 397
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 398,
    "end": 399
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 400,
    "end": 401
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 402,
    "end": 403
  },
  {
    "type": "Identifier",
    "value": "PRIVATE_METADATA",
    "start": 405,
    "end": 421
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 421,
    "end": 422
  },
  {
    "type": "Identifier",
    "value": "get",
    "start": 422,
    "end": 425
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 425,
    "end": 426
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 426,
    "end": 427
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 427,
    "end": 428
  },
  {
    "type": "Identifier",
    "value": "Symbol",
    "start": 428,
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
    "value": "metadata",
    "start": 435,
    "end": 443
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 443,
    "end": 444
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 444,
    "end": 445
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 445,
    "end": 446
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 446,
    "end": 447
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 447,
    "end": 448
  },
  {
    "type": "Identifier",
    "value": "PRIVATE_METADATA",
    "start": 456,
    "end": 472
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 472,
    "end": 473
  },
  {
    "type": "Identifier",
    "value": "get",
    "start": 473,
    "end": 476
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 476,
    "end": 477
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 477,
    "end": 478
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 478,
    "end": 479
  },
  {
    "type": "Identifier",
    "value": "Symbol",
    "start": 479,
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
    "value": "metadata",
    "start": 486,
    "end": 494
  },
  {
    "type": "Punctuator",
    "value": "]",
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
    "value": "b",
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
