__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
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
            "name": "promise",
            "optional": false,
            "typeAnnotation": null,
            "start": 4,
            "end": 11
          },
          "init": {
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
                "name": "obj",
                "optional": false,
                "typeAnnotation": null,
                "start": 24,
                "end": 27
              }
            ],
            "returnType": null,
            "body": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "IfStatement",
                  "test": {
                    "type": "LogicalExpression",
                    "left": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "top",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 41,
                      "end": 44
                    },
                    "operator": "&&",
                    "right": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "top",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 48,
                        "end": 51
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "doScroll",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 52,
                        "end": 60
                      },
                      "optional": false,
                      "computed": false,
                      "start": 48,
                      "end": 60
                    },
                    "start": 41,
                    "end": 60
                  },
                  "consequent": {
                    "type": "BlockStatement",
                    "body": [
                      {
                        "type": "ExpressionStatement",
                        "expression": {
                          "type": "CallExpression",
                          "callee": {
                            "type": "FunctionExpression",
                            "id": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "doScrollCheck",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 78,
                              "end": 91
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
                                  "type": "IfStatement",
                                  "test": {
                                    "type": "Literal",
                                    "value": false,
                                    "raw": "false",
                                    "start": 105,
                                    "end": 110
                                  },
                                  "consequent": {
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
                                                  "type": "MemberExpression",
                                                  "object": {
                                                    "type": "Identifier",
                                                    "decorators": [],
                                                    "name": "top",
                                                    "optional": false,
                                                    "typeAnnotation": null,
                                                    "start": 133,
                                                    "end": 136
                                                  },
                                                  "property": {
                                                    "type": "Identifier",
                                                    "decorators": [],
                                                    "name": "doScroll",
                                                    "optional": false,
                                                    "typeAnnotation": null,
                                                    "start": 137,
                                                    "end": 145
                                                  },
                                                  "optional": false,
                                                  "computed": false,
                                                  "start": 133,
                                                  "end": 145
                                                },
                                                "typeArguments": null,
                                                "arguments": [
                                                  {
                                                    "type": "Literal",
                                                    "value": "left",
                                                    "raw": "\"left\"",
                                                    "start": 146,
                                                    "end": 152
                                                  }
                                                ],
                                                "optional": false,
                                                "start": 133,
                                                "end": 153
                                              },
                                              "directive": null,
                                              "start": 133,
                                              "end": 154
                                            }
                                          ],
                                          "start": 125,
                                          "end": 161
                                        },
                                        "handler": {
                                          "type": "CatchClause",
                                          "param": {
                                            "type": "Identifier",
                                            "decorators": [],
                                            "name": "e",
                                            "optional": false,
                                            "typeAnnotation": null,
                                            "start": 168,
                                            "end": 169
                                          },
                                          "body": {
                                            "type": "BlockStatement",
                                            "body": [
                                              {
                                                "type": "ReturnStatement",
                                                "argument": {
                                                  "type": "CallExpression",
                                                  "callee": {
                                                    "type": "Identifier",
                                                    "decorators": [],
                                                    "name": "setTimeout",
                                                    "optional": false,
                                                    "typeAnnotation": null,
                                                    "start": 186,
                                                    "end": 196
                                                  },
                                                  "typeArguments": null,
                                                  "arguments": [
                                                    {
                                                      "type": "Identifier",
                                                      "decorators": [],
                                                      "name": "doScrollCheck",
                                                      "optional": false,
                                                      "typeAnnotation": null,
                                                      "start": 198,
                                                      "end": 211
                                                    },
                                                    {
                                                      "type": "Literal",
                                                      "value": 50,
                                                      "raw": "50",
                                                      "start": 213,
                                                      "end": 215
                                                    }
                                                  ],
                                                  "optional": false,
                                                  "start": 186,
                                                  "end": 217
                                                },
                                                "start": 179,
                                                "end": 218
                                              }
                                            ],
                                            "start": 171,
                                            "end": 225
                                          },
                                          "start": 162,
                                          "end": 225
                                        },
                                        "finalizer": null,
                                        "start": 121,
                                        "end": 225
                                      },
                                      {
                                        "type": "ExpressionStatement",
                                        "expression": {
                                          "type": "CallExpression",
                                          "callee": {
                                            "type": "Identifier",
                                            "decorators": [],
                                            "name": "detach",
                                            "optional": false,
                                            "typeAnnotation": null,
                                            "start": 268,
                                            "end": 274
                                          },
                                          "typeArguments": null,
                                          "arguments": [],
                                          "optional": false,
                                          "start": 268,
                                          "end": 276
                                        },
                                        "directive": null,
                                        "start": 268,
                                        "end": 277
                                      }
                                    ],
                                    "start": 113,
                                    "end": 284
                                  },
                                  "alternate": null,
                                  "start": 100,
                                  "end": 284
                                }
                              ],
                              "start": 94,
                              "end": 289
                            },
                            "expression": false,
                            "start": 69,
                            "end": 289
                          },
                          "typeArguments": null,
                          "arguments": [],
                          "optional": false,
                          "start": 68,
                          "end": 292
                        },
                        "directive": null,
                        "start": 68,
                        "end": 293
                      }
                    ],
                    "start": 63,
                    "end": 297
                  },
                  "alternate": null,
                  "start": 36,
                  "end": 297
                }
              ],
              "start": 30,
              "end": 299
            },
            "expression": false,
            "start": 14,
            "end": 299
          },
          "definite": false,
          "start": 4,
          "end": 299
        }
      ],
      "declare": false,
      "start": 0,
      "end": 300
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 300
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "var",
    "start": 0,
    "end": 3
  },
  {
    "type": "Identifier",
    "value": "promise",
    "start": 4,
    "end": 11
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 12,
    "end": 13
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 14,
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
    "value": "obj",
    "start": 24,
    "end": 27
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 28,
    "end": 29
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 30,
    "end": 31
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 36,
    "end": 38
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 39,
    "end": 40
  },
  {
    "type": "Identifier",
    "value": "top",
    "start": 41,
    "end": 44
  },
  {
    "type": "Punctuator",
    "value": "&&",
    "start": 45,
    "end": 47
  },
  {
    "type": "Identifier",
    "value": "top",
    "start": 48,
    "end": 51
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 51,
    "end": 52
  },
  {
    "type": "Identifier",
    "value": "doScroll",
    "start": 52,
    "end": 60
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 61,
    "end": 62
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 63,
    "end": 64
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 68,
    "end": 69
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 69,
    "end": 77
  },
  {
    "type": "Identifier",
    "value": "doScrollCheck",
    "start": 78,
    "end": 91
  },
  {
    "type": "Punctuator",
    "value": "(",
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
    "value": "{",
    "start": 94,
    "end": 95
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 100,
    "end": 102
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 103,
    "end": 104
  },
  {
    "type": "Boolean",
    "value": "false",
    "start": 105,
    "end": 110
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 111,
    "end": 112
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 113,
    "end": 114
  },
  {
    "type": "Keyword",
    "value": "try",
    "start": 121,
    "end": 124
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 125,
    "end": 126
  },
  {
    "type": "Identifier",
    "value": "top",
    "start": 133,
    "end": 136
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 136,
    "end": 137
  },
  {
    "type": "Identifier",
    "value": "doScroll",
    "start": 137,
    "end": 145
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 145,
    "end": 146
  },
  {
    "type": "String",
    "value": "\"left\"",
    "start": 146,
    "end": 152
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 152,
    "end": 153
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 153,
    "end": 154
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 160,
    "end": 161
  },
  {
    "type": "Keyword",
    "value": "catch",
    "start": 162,
    "end": 167
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 167,
    "end": 168
  },
  {
    "type": "Identifier",
    "value": "e",
    "start": 168,
    "end": 169
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 169,
    "end": 170
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 171,
    "end": 172
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 179,
    "end": 185
  },
  {
    "type": "Identifier",
    "value": "setTimeout",
    "start": 186,
    "end": 196
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 196,
    "end": 197
  },
  {
    "type": "Identifier",
    "value": "doScrollCheck",
    "start": 198,
    "end": 211
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 211,
    "end": 212
  },
  {
    "type": "Numeric",
    "value": "50",
    "start": 213,
    "end": 215
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 216,
    "end": 217
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 217,
    "end": 218
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 224,
    "end": 225
  },
  {
    "type": "Identifier",
    "value": "detach",
    "start": 268,
    "end": 274
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 274,
    "end": 275
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 275,
    "end": 276
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 276,
    "end": 277
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 283,
    "end": 284
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 288,
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
    "value": "(",
    "start": 290,
    "end": 291
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 291,
    "end": 292
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 292,
    "end": 293
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 296,
    "end": 297
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 298,
    "end": 299
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 299,
    "end": 300
  }
]
```
