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
        "name": "User",
        "optional": false,
        "typeAnnotation": null,
        "start": 6,
        "end": 10
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
              "name": "sayHello",
              "optional": false,
              "typeAnnotation": null,
              "start": 17,
              "end": 25
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
                "start": 28,
                "end": 35
              },
              "expression": false,
              "start": 25,
              "end": 35
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 17,
            "end": 35
          }
        ],
        "start": 11,
        "end": 37
      },
      "abstract": false,
      "declare": false,
      "start": 0,
      "end": 37
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "RegisteredUser",
        "optional": false,
        "typeAnnotation": null,
        "start": 45,
        "end": 59
      },
      "typeParameters": null,
      "superClass": {
        "type": "Identifier",
        "decorators": [],
        "name": "User",
        "optional": false,
        "typeAnnotation": null,
        "start": 68,
        "end": 72
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
              "name": "f",
              "optional": false,
              "typeAnnotation": null,
              "start": 79,
              "end": 80
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
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "ArrowFunctionExpression",
                      "expression": false,
                      "async": false,
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
                              "name": "inner",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 122,
                              "end": 127
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
                                  "type": "ExpressionStatement",
                                  "expression": {
                                    "type": "CallExpression",
                                    "callee": {
                                      "type": "MemberExpression",
                                      "object": {
                                        "type": "Super",
                                        "start": 148,
                                        "end": 153
                                      },
                                      "property": {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "sayHello",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 154,
                                        "end": 162
                                      },
                                      "optional": false,
                                      "computed": false,
                                      "start": 148,
                                      "end": 162
                                    },
                                    "typeArguments": null,
                                    "arguments": [],
                                    "optional": false,
                                    "start": 148,
                                    "end": 164
                                  },
                                  "directive": null,
                                  "start": 148,
                                  "end": 165
                                }
                              ],
                              "start": 130,
                              "end": 179
                            },
                            "expression": false,
                            "start": 113,
                            "end": 179
                          }
                        ],
                        "start": 99,
                        "end": 189
                      },
                      "id": null,
                      "generator": false,
                      "start": 93,
                      "end": 189
                    },
                    "directive": null,
                    "start": 93,
                    "end": 190
                  }
                ],
                "start": 83,
                "end": 196
              },
              "expression": false,
              "start": 80,
              "end": 196
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 79,
            "end": 196
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "g",
              "optional": false,
              "typeAnnotation": null,
              "start": 201,
              "end": 202
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
                      "name": "inner",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 224,
                      "end": 229
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
                          "type": "ExpressionStatement",
                          "expression": {
                            "type": "ArrowFunctionExpression",
                            "expression": false,
                            "async": false,
                            "typeParameters": null,
                            "params": [],
                            "returnType": null,
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
                                        "type": "Super",
                                        "start": 270,
                                        "end": 275
                                      },
                                      "property": {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "sayHello",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 276,
                                        "end": 284
                                      },
                                      "optional": false,
                                      "computed": false,
                                      "start": 270,
                                      "end": 284
                                    },
                                    "typeArguments": null,
                                    "arguments": [],
                                    "optional": false,
                                    "start": 270,
                                    "end": 286
                                  },
                                  "directive": null,
                                  "start": 270,
                                  "end": 287
                                }
                              ],
                              "start": 252,
                              "end": 301
                            },
                            "id": null,
                            "generator": false,
                            "start": 246,
                            "end": 301
                          },
                          "directive": null,
                          "start": 246,
                          "end": 301
                        }
                      ],
                      "start": 232,
                      "end": 311
                    },
                    "expression": false,
                    "start": 215,
                    "end": 311
                  }
                ],
                "start": 205,
                "end": 317
              },
              "expression": false,
              "start": 202,
              "end": 317
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 201,
            "end": 317
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "h",
              "optional": false,
              "typeAnnotation": null,
              "start": 322,
              "end": 323
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
                      "name": "inner",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 345,
                      "end": 350
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
                          "type": "ExpressionStatement",
                          "expression": {
                            "type": "CallExpression",
                            "callee": {
                              "type": "MemberExpression",
                              "object": {
                                "type": "Super",
                                "start": 367,
                                "end": 372
                              },
                              "property": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "sayHello",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 373,
                                "end": 381
                              },
                              "optional": false,
                              "computed": false,
                              "start": 367,
                              "end": 381
                            },
                            "typeArguments": null,
                            "arguments": [],
                            "optional": false,
                            "start": 367,
                            "end": 383
                          },
                          "directive": null,
                          "start": 367,
                          "end": 384
                        }
                      ],
                      "start": 353,
                      "end": 394
                    },
                    "expression": false,
                    "start": 336,
                    "end": 394
                  }
                ],
                "start": 326,
                "end": 400
              },
              "expression": false,
              "start": 323,
              "end": 400
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 322,
            "end": 400
          }
        ],
        "start": 73,
        "end": 402
      },
      "abstract": false,
      "declare": false,
      "start": 39,
      "end": 402
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 402
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
    "value": "User",
    "start": 6,
    "end": 10
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 11,
    "end": 12
  },
  {
    "type": "Identifier",
    "value": "sayHello",
    "start": 17,
    "end": 25
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 25,
    "end": 26
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 26,
    "end": 27
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 28,
    "end": 29
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 34,
    "end": 35
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 36,
    "end": 37
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 39,
    "end": 44
  },
  {
    "type": "Identifier",
    "value": "RegisteredUser",
    "start": 45,
    "end": 59
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 60,
    "end": 67
  },
  {
    "type": "Identifier",
    "value": "User",
    "start": 68,
    "end": 72
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 73,
    "end": 74
  },
  {
    "type": "Identifier",
    "value": "f",
    "start": 79,
    "end": 80
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 80,
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
    "type": "Punctuator",
    "value": "(",
    "start": 93,
    "end": 94
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 94,
    "end": 95
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 96,
    "end": 98
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 99,
    "end": 100
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 113,
    "end": 121
  },
  {
    "type": "Identifier",
    "value": "inner",
    "start": 122,
    "end": 127
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 127,
    "end": 128
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 128,
    "end": 129
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 130,
    "end": 131
  },
  {
    "type": "Keyword",
    "value": "super",
    "start": 148,
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
    "value": "sayHello",
    "start": 154,
    "end": 162
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 162,
    "end": 163
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 163,
    "end": 164
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 164,
    "end": 165
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 178,
    "end": 179
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 188,
    "end": 189
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 189,
    "end": 190
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 195,
    "end": 196
  },
  {
    "type": "Identifier",
    "value": "g",
    "start": 201,
    "end": 202
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 202,
    "end": 203
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 203,
    "end": 204
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 205,
    "end": 206
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 215,
    "end": 223
  },
  {
    "type": "Identifier",
    "value": "inner",
    "start": 224,
    "end": 229
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 229,
    "end": 230
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 230,
    "end": 231
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 232,
    "end": 233
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 246,
    "end": 247
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 247,
    "end": 248
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 249,
    "end": 251
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 252,
    "end": 253
  },
  {
    "type": "Keyword",
    "value": "super",
    "start": 270,
    "end": 275
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 275,
    "end": 276
  },
  {
    "type": "Identifier",
    "value": "sayHello",
    "start": 276,
    "end": 284
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 284,
    "end": 285
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 285,
    "end": 286
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 286,
    "end": 287
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 300,
    "end": 301
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 310,
    "end": 311
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 316,
    "end": 317
  },
  {
    "type": "Identifier",
    "value": "h",
    "start": 322,
    "end": 323
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 323,
    "end": 324
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 324,
    "end": 325
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 326,
    "end": 327
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 336,
    "end": 344
  },
  {
    "type": "Identifier",
    "value": "inner",
    "start": 345,
    "end": 350
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 350,
    "end": 351
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 351,
    "end": 352
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 353,
    "end": 354
  },
  {
    "type": "Keyword",
    "value": "super",
    "start": 367,
    "end": 372
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 372,
    "end": 373
  },
  {
    "type": "Identifier",
    "value": "sayHello",
    "start": 373,
    "end": 381
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 381,
    "end": 382
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 382,
    "end": 383
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 383,
    "end": 384
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 393,
    "end": 394
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 399,
    "end": 400
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 401,
    "end": 402
  }
]
```
