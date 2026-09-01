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
        "name": "B",
        "optional": false,
        "typeAnnotation": null,
        "start": 6,
        "end": 7
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
              "start": 15,
              "end": 26
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
                    "type": "FunctionDeclaration",
                    "id": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "foo",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 48,
                      "end": 51
                    },
                    "generator": false,
                    "async": false,
                    "declare": false,
                    "typeParameters": null,
                    "params": [],
                    "returnType": null,
                    "body": {
                      "type": "BlockStatement",
                      "body": [],
                      "start": 54,
                      "end": 58
                    },
                    "expression": false,
                    "start": 39,
                    "end": 58
                  },
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "CallExpression",
                      "callee": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "foo",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 68,
                        "end": 71
                      },
                      "typeArguments": null,
                      "arguments": [],
                      "optional": false,
                      "start": 68,
                      "end": 73
                    },
                    "directive": null,
                    "start": 68,
                    "end": 74
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
                          "name": "a",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 88,
                          "end": 89
                        },
                        "init": {
                          "type": "Literal",
                          "value": 0,
                          "raw": "0",
                          "start": 92,
                          "end": 93
                        },
                        "definite": false,
                        "start": 88,
                        "end": 93
                      }
                    ],
                    "declare": false,
                    "start": 84,
                    "end": 94
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
                          "name": "inner",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSAnyKeyword",
                              "start": 114,
                              "end": 117
                            },
                            "start": 112,
                            "end": 117
                          },
                          "start": 107,
                          "end": 117
                        },
                        "init": {
                          "type": "CallExpression",
                          "callee": {
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
                                  "kind": "var",
                                  "declarations": [
                                    {
                                      "type": "VariableDeclarator",
                                      "id": {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "CScriptIO",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 150,
                                        "end": 159
                                      },
                                      "init": {
                                        "type": "CallExpression",
                                        "callee": {
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
                                                "kind": "var",
                                                "declarations": [
                                                  {
                                                    "type": "VariableDeclarator",
                                                    "id": {
                                                      "type": "Identifier",
                                                      "decorators": [],
                                                      "name": "fso",
                                                      "optional": false,
                                                      "typeAnnotation": null,
                                                      "start": 196,
                                                      "end": 199
                                                    },
                                                    "init": {
                                                      "type": "Literal",
                                                      "value": 0,
                                                      "raw": "0",
                                                      "start": 202,
                                                      "end": 203
                                                    },
                                                    "definite": false,
                                                    "start": 196,
                                                    "end": 203
                                                  }
                                                ],
                                                "declare": false,
                                                "start": 192,
                                                "end": 203
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
                                                        "name": "readFile",
                                                        "optional": false,
                                                        "typeAnnotation": null,
                                                        "start": 250,
                                                        "end": 258
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
                                                            "name": "path",
                                                            "optional": false,
                                                            "typeAnnotation": {
                                                              "type": "TSTypeAnnotation",
                                                              "typeAnnotation": {
                                                                "type": "TSStringKeyword",
                                                                "start": 275,
                                                                "end": 281
                                                              },
                                                              "start": 273,
                                                              "end": 281
                                                            },
                                                            "start": 269,
                                                            "end": 281
                                                          }
                                                        ],
                                                        "returnType": {
                                                          "type": "TSTypeAnnotation",
                                                          "typeAnnotation": {
                                                            "type": "TSStringKeyword",
                                                            "start": 284,
                                                            "end": 290
                                                          },
                                                          "start": 282,
                                                          "end": 290
                                                        },
                                                        "body": {
                                                          "type": "BlockStatement",
                                                          "body": [
                                                            {
                                                              "type": "ReturnStatement",
                                                              "argument": {
                                                                "type": "CallExpression",
                                                                "callee": {
                                                                  "type": "MemberExpression",
                                                                  "object": {
                                                                    "type": "Identifier",
                                                                    "decorators": [],
                                                                    "name": "fso",
                                                                    "optional": false,
                                                                    "typeAnnotation": null,
                                                                    "start": 324,
                                                                    "end": 327
                                                                  },
                                                                  "property": {
                                                                    "type": "Identifier",
                                                                    "decorators": [],
                                                                    "name": "toString",
                                                                    "optional": false,
                                                                    "typeAnnotation": null,
                                                                    "start": 328,
                                                                    "end": 336
                                                                  },
                                                                  "optional": false,
                                                                  "computed": false,
                                                                  "start": 324,
                                                                  "end": 336
                                                                },
                                                                "typeArguments": null,
                                                                "arguments": [],
                                                                "optional": false,
                                                                "start": 324,
                                                                "end": 338
                                                              },
                                                              "start": 317,
                                                              "end": 339
                                                            }
                                                          ],
                                                          "start": 291,
                                                          "end": 361
                                                        },
                                                        "expression": false,
                                                        "start": 260,
                                                        "end": 361
                                                      },
                                                      "method": false,
                                                      "shorthand": false,
                                                      "computed": false,
                                                      "optional": false,
                                                      "start": 250,
                                                      "end": 361
                                                    }
                                                  ],
                                                  "start": 228,
                                                  "end": 379
                                                },
                                                "start": 221,
                                                "end": 379
                                              }
                                            ],
                                            "start": 174,
                                            "end": 393
                                          },
                                          "expression": false,
                                          "start": 163,
                                          "end": 393
                                        },
                                        "typeArguments": null,
                                        "arguments": [],
                                        "optional": false,
                                        "start": 162,
                                        "end": 396
                                      },
                                      "definite": false,
                                      "start": 150,
                                      "end": 396
                                    }
                                  ],
                                  "declare": false,
                                  "start": 146,
                                  "end": 397
                                },
                                {
                                  "type": "ReturnStatement",
                                  "argument": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "inner",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 417,
                                    "end": 422
                                  },
                                  "start": 410,
                                  "end": 423
                                }
                              ],
                              "start": 132,
                              "end": 433
                            },
                            "expression": false,
                            "start": 121,
                            "end": 433
                          },
                          "typeArguments": null,
                          "arguments": [],
                          "optional": false,
                          "start": 120,
                          "end": 436
                        },
                        "definite": false,
                        "start": 107,
                        "end": 436
                      }
                    ],
                    "declare": false,
                    "start": 103,
                    "end": 437
                  }
                ],
                "start": 29,
                "end": 443
              },
              "expression": false,
              "start": 26,
              "end": 443
            },
            "kind": "constructor",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 15,
            "end": 443
          }
        ],
        "start": 8,
        "end": 445
      },
      "abstract": false,
      "declare": false,
      "start": 0,
      "end": 445
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
            "name": "b",
            "optional": false,
            "typeAnnotation": null,
            "start": 451,
            "end": 452
          },
          "init": {
            "type": "NewExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "B",
              "optional": false,
              "typeAnnotation": null,
              "start": 459,
              "end": 460
            },
            "typeArguments": null,
            "arguments": [],
            "start": 455,
            "end": 462
          },
          "definite": false,
          "start": 451,
          "end": 462
        }
      ],
      "declare": false,
      "start": 447,
      "end": 463
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
            "name": "b",
            "optional": false,
            "typeAnnotation": null,
            "start": 465,
            "end": 466
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "foo",
            "optional": false,
            "typeAnnotation": null,
            "start": 467,
            "end": 470
          },
          "optional": false,
          "computed": false,
          "start": 465,
          "end": 470
        },
        "typeArguments": null,
        "arguments": [],
        "optional": false,
        "start": 465,
        "end": 472
      },
      "directive": null,
      "start": 465,
      "end": 473
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 476
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
    "value": "B",
    "start": 6,
    "end": 7
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 8,
    "end": 9
  },
  {
    "type": "Identifier",
    "value": "constructor",
    "start": 15,
    "end": 26
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 26,
    "end": 27
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 27,
    "end": 28
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 29,
    "end": 30
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 39,
    "end": 47
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 48,
    "end": 51
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 51,
    "end": 52
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 52,
    "end": 53
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 54,
    "end": 55
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 57,
    "end": 58
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 68,
    "end": 71
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 71,
    "end": 72
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 72,
    "end": 73
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 73,
    "end": 74
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 84,
    "end": 87
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 88,
    "end": 89
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 90,
    "end": 91
  },
  {
    "type": "Numeric",
    "value": "0",
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
    "value": "var",
    "start": 103,
    "end": 106
  },
  {
    "type": "Identifier",
    "value": "inner",
    "start": 107,
    "end": 112
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 112,
    "end": 113
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 114,
    "end": 117
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 118,
    "end": 119
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 120,
    "end": 121
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 121,
    "end": 129
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 129,
    "end": 130
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 130,
    "end": 131
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 132,
    "end": 133
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 146,
    "end": 149
  },
  {
    "type": "Identifier",
    "value": "CScriptIO",
    "start": 150,
    "end": 159
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 160,
    "end": 161
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 162,
    "end": 163
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 163,
    "end": 171
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 171,
    "end": 172
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 172,
    "end": 173
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 174,
    "end": 175
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 192,
    "end": 195
  },
  {
    "type": "Identifier",
    "value": "fso",
    "start": 196,
    "end": 199
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 200,
    "end": 201
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 202,
    "end": 203
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 221,
    "end": 227
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 228,
    "end": 229
  },
  {
    "type": "Identifier",
    "value": "readFile",
    "start": 250,
    "end": 258
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 258,
    "end": 259
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 260,
    "end": 268
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 268,
    "end": 269
  },
  {
    "type": "Identifier",
    "value": "path",
    "start": 269,
    "end": 273
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 273,
    "end": 274
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 275,
    "end": 281
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 281,
    "end": 282
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 282,
    "end": 283
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 284,
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
    "value": "return",
    "start": 317,
    "end": 323
  },
  {
    "type": "Identifier",
    "value": "fso",
    "start": 324,
    "end": 327
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 327,
    "end": 328
  },
  {
    "type": "Identifier",
    "value": "toString",
    "start": 328,
    "end": 336
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 336,
    "end": 337
  },
  {
    "type": "Punctuator",
    "value": ")",
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
    "type": "Punctuator",
    "value": "}",
    "start": 360,
    "end": 361
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 378,
    "end": 379
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 392,
    "end": 393
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 393,
    "end": 394
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 394,
    "end": 395
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 395,
    "end": 396
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 396,
    "end": 397
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 410,
    "end": 416
  },
  {
    "type": "Identifier",
    "value": "inner",
    "start": 417,
    "end": 422
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 422,
    "end": 423
  },
  {
    "type": "Punctuator",
    "value": "}",
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
    "type": "Punctuator",
    "value": "(",
    "start": 434,
    "end": 435
  },
  {
    "type": "Punctuator",
    "value": ")",
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
    "start": 442,
    "end": 443
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 444,
    "end": 445
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 447,
    "end": 450
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 451,
    "end": 452
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 453,
    "end": 454
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 455,
    "end": 458
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 459,
    "end": 460
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 460,
    "end": 461
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 461,
    "end": 462
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 462,
    "end": 463
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 465,
    "end": 466
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 466,
    "end": 467
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 467,
    "end": 470
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 470,
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
    "value": ";",
    "start": 472,
    "end": 473
  }
]
```
