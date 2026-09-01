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
            "name": "C",
            "optional": false,
            "typeAnnotation": null,
            "start": 6,
            "end": 7
          },
          "init": {
            "type": "ClassExpression",
            "decorators": [],
            "id": null,
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
                    "type": "PrivateIdentifier",
                    "name": "bar",
                    "start": 35,
                    "end": 39
                  },
                  "value": {
                    "type": "FunctionExpression",
                    "id": null,
                    "generator": false,
                    "async": true,
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
                            "type": "AwaitExpression",
                            "argument": {
                              "type": "CallExpression",
                              "callee": {
                                "type": "MemberExpression",
                                "object": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "Promise",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 57,
                                  "end": 64
                                },
                                "property": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "resolve",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 65,
                                  "end": 72
                                },
                                "optional": false,
                                "computed": false,
                                "start": 57,
                                "end": 72
                              },
                              "typeArguments": null,
                              "arguments": [
                                {
                                  "type": "Literal",
                                  "value": 42,
                                  "raw": "42",
                                  "start": 73,
                                  "end": 75
                                }
                              ],
                              "optional": false,
                              "start": 57,
                              "end": 76
                            },
                            "start": 51,
                            "end": 76
                          },
                          "start": 44,
                          "end": 77
                        }
                      ],
                      "start": 42,
                      "end": 79
                    },
                    "expression": false,
                    "start": 39,
                    "end": 79
                  },
                  "kind": "method",
                  "computed": false,
                  "static": true,
                  "override": false,
                  "optional": false,
                  "accessibility": null,
                  "start": 22,
                  "end": 79
                },
                {
                  "type": "MethodDefinition",
                  "decorators": [],
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "foo",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 97,
                    "end": 100
                  },
                  "value": {
                    "type": "FunctionExpression",
                    "id": null,
                    "generator": false,
                    "async": true,
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
                                "name": "b",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 119,
                                "end": 120
                              },
                              "init": {
                                "type": "AwaitExpression",
                                "argument": {
                                  "type": "CallExpression",
                                  "callee": {
                                    "type": "MemberExpression",
                                    "object": {
                                      "type": "ThisExpression",
                                      "start": 129,
                                      "end": 133
                                    },
                                    "property": {
                                      "type": "PrivateIdentifier",
                                      "name": "bar",
                                      "start": 134,
                                      "end": 138
                                    },
                                    "optional": false,
                                    "computed": false,
                                    "start": 129,
                                    "end": 138
                                  },
                                  "typeArguments": null,
                                  "arguments": [],
                                  "optional": false,
                                  "start": 129,
                                  "end": 140
                                },
                                "start": 123,
                                "end": 140
                              },
                              "definite": false,
                              "start": 119,
                              "end": 140
                            }
                          ],
                          "declare": false,
                          "start": 113,
                          "end": 141
                        },
                        {
                          "type": "ReturnStatement",
                          "argument": {
                            "type": "BinaryExpression",
                            "left": {
                              "type": "BinaryExpression",
                              "left": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "b",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 157,
                                "end": 158
                              },
                              "operator": "+",
                              "right": {
                                "type": "LogicalExpression",
                                "left": {
                                  "type": "MemberExpression",
                                  "object": {
                                    "type": "CallExpression",
                                    "callee": {
                                      "type": "MemberExpression",
                                      "object": {
                                        "type": "CallExpression",
                                        "callee": {
                                          "type": "MemberExpression",
                                          "object": {
                                            "type": "ThisExpression",
                                            "start": 162,
                                            "end": 166
                                          },
                                          "property": {
                                            "type": "PrivateIdentifier",
                                            "name": "baz",
                                            "start": 167,
                                            "end": 171
                                          },
                                          "optional": false,
                                          "computed": false,
                                          "start": 162,
                                          "end": 171
                                        },
                                        "typeArguments": null,
                                        "arguments": [],
                                        "optional": false,
                                        "start": 162,
                                        "end": 173
                                      },
                                      "property": {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "next",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 174,
                                        "end": 178
                                      },
                                      "optional": false,
                                      "computed": false,
                                      "start": 162,
                                      "end": 178
                                    },
                                    "typeArguments": null,
                                    "arguments": [],
                                    "optional": false,
                                    "start": 162,
                                    "end": 180
                                  },
                                  "property": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "value",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 181,
                                    "end": 186
                                  },
                                  "optional": false,
                                  "computed": false,
                                  "start": 162,
                                  "end": 186
                                },
                                "operator": "||",
                                "right": {
                                  "type": "Literal",
                                  "value": 0,
                                  "raw": "0",
                                  "start": 190,
                                  "end": 191
                                },
                                "start": 162,
                                "end": 191
                              },
                              "start": 157,
                              "end": 192
                            },
                            "operator": "+",
                            "right": {
                              "type": "LogicalExpression",
                              "left": {
                                "type": "MemberExpression",
                                "object": {
                                  "type": "AwaitExpression",
                                  "argument": {
                                    "type": "CallExpression",
                                    "callee": {
                                      "type": "MemberExpression",
                                      "object": {
                                        "type": "CallExpression",
                                        "callee": {
                                          "type": "MemberExpression",
                                          "object": {
                                            "type": "ThisExpression",
                                            "start": 203,
                                            "end": 207
                                          },
                                          "property": {
                                            "type": "PrivateIdentifier",
                                            "name": "qux",
                                            "start": 208,
                                            "end": 212
                                          },
                                          "optional": false,
                                          "computed": false,
                                          "start": 203,
                                          "end": 212
                                        },
                                        "typeArguments": null,
                                        "arguments": [],
                                        "optional": false,
                                        "start": 203,
                                        "end": 214
                                      },
                                      "property": {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "next",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 215,
                                        "end": 219
                                      },
                                      "optional": false,
                                      "computed": false,
                                      "start": 203,
                                      "end": 219
                                    },
                                    "typeArguments": null,
                                    "arguments": [],
                                    "optional": false,
                                    "start": 203,
                                    "end": 221
                                  },
                                  "start": 197,
                                  "end": 221
                                },
                                "property": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "value",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 223,
                                  "end": 228
                                },
                                "optional": false,
                                "computed": false,
                                "start": 196,
                                "end": 228
                              },
                              "operator": "||",
                              "right": {
                                "type": "Literal",
                                "value": 0,
                                "raw": "0",
                                "start": 232,
                                "end": 233
                              },
                              "start": 196,
                              "end": 233
                            },
                            "start": 157,
                            "end": 234
                          },
                          "start": 150,
                          "end": 235
                        }
                      ],
                      "start": 103,
                      "end": 241
                    },
                    "expression": false,
                    "start": 100,
                    "end": 241
                  },
                  "kind": "method",
                  "computed": false,
                  "static": true,
                  "override": false,
                  "optional": false,
                  "accessibility": null,
                  "start": 84,
                  "end": 241
                },
                {
                  "type": "MethodDefinition",
                  "decorators": [],
                  "key": {
                    "type": "PrivateIdentifier",
                    "name": "baz",
                    "start": 254,
                    "end": 258
                  },
                  "value": {
                    "type": "FunctionExpression",
                    "id": null,
                    "generator": true,
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
                            "type": "YieldExpression",
                            "delegate": false,
                            "argument": {
                              "type": "Literal",
                              "value": 42,
                              "raw": "42",
                              "start": 269,
                              "end": 271
                            },
                            "start": 263,
                            "end": 271
                          },
                          "directive": null,
                          "start": 263,
                          "end": 272
                        }
                      ],
                      "start": 261,
                      "end": 274
                    },
                    "expression": false,
                    "start": 258,
                    "end": 274
                  },
                  "kind": "method",
                  "computed": false,
                  "static": true,
                  "override": false,
                  "optional": false,
                  "accessibility": null,
                  "start": 246,
                  "end": 274
                },
                {
                  "type": "MethodDefinition",
                  "decorators": [],
                  "key": {
                    "type": "PrivateIdentifier",
                    "name": "qux",
                    "start": 293,
                    "end": 297
                  },
                  "value": {
                    "type": "FunctionExpression",
                    "id": null,
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
                              "type": "AwaitExpression",
                              "argument": {
                                "type": "CallExpression",
                                "callee": {
                                  "type": "MemberExpression",
                                  "object": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "Promise",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 323,
                                    "end": 330
                                  },
                                  "property": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "resolve",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 331,
                                    "end": 338
                                  },
                                  "optional": false,
                                  "computed": false,
                                  "start": 323,
                                  "end": 338
                                },
                                "typeArguments": null,
                                "arguments": [
                                  {
                                    "type": "Literal",
                                    "value": 42,
                                    "raw": "42",
                                    "start": 339,
                                    "end": 341
                                  }
                                ],
                                "optional": false,
                                "start": 323,
                                "end": 342
                              },
                              "start": 317,
                              "end": 342
                            },
                            "start": 310,
                            "end": 343
                          },
                          "directive": null,
                          "start": 310,
                          "end": 344
                        }
                      ],
                      "start": 300,
                      "end": 350
                    },
                    "expression": false,
                    "start": 297,
                    "end": 350
                  },
                  "kind": "method",
                  "computed": false,
                  "static": true,
                  "override": false,
                  "optional": false,
                  "accessibility": null,
                  "start": 279,
                  "end": 350
                },
                {
                  "type": "MethodDefinition",
                  "decorators": [],
                  "key": {
                    "type": "PrivateIdentifier",
                    "name": "bazBad",
                    "start": 369,
                    "end": 376
                  },
                  "value": {
                    "type": "FunctionExpression",
                    "id": null,
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
                              "value": 42,
                              "raw": "42",
                              "start": 387,
                              "end": 389
                            },
                            "start": 381,
                            "end": 389
                          },
                          "directive": null,
                          "start": 381,
                          "end": 390
                        }
                      ],
                      "start": 379,
                      "end": 392
                    },
                    "expression": false,
                    "start": 376,
                    "end": 392
                  },
                  "kind": "method",
                  "computed": false,
                  "static": true,
                  "override": false,
                  "optional": false,
                  "accessibility": null,
                  "start": 355,
                  "end": 392
                }
              ],
              "start": 16,
              "end": 394
            },
            "abstract": false,
            "declare": false,
            "start": 10,
            "end": 394
          },
          "definite": false,
          "start": 6,
          "end": 394
        }
      ],
      "declare": false,
      "start": 0,
      "end": 394
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 396
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
    "value": "C",
    "start": 6,
    "end": 7
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 8,
    "end": 9
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 10,
    "end": 15
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 16,
    "end": 17
  },
  {
    "type": "Keyword",
    "value": "static",
    "start": 22,
    "end": 28
  },
  {
    "type": "Identifier",
    "value": "async",
    "start": 29,
    "end": 34
  },
  {
    "type": "PrivateIdentifier",
    "value": "bar",
    "start": 35,
    "end": 39
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 39,
    "end": 40
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 40,
    "end": 41
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 42,
    "end": 43
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 44,
    "end": 50
  },
  {
    "type": "Identifier",
    "value": "await",
    "start": 51,
    "end": 56
  },
  {
    "type": "Identifier",
    "value": "Promise",
    "start": 57,
    "end": 64
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 64,
    "end": 65
  },
  {
    "type": "Identifier",
    "value": "resolve",
    "start": 65,
    "end": 72
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 72,
    "end": 73
  },
  {
    "type": "Numeric",
    "value": "42",
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
    "value": ";",
    "start": 76,
    "end": 77
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 78,
    "end": 79
  },
  {
    "type": "Keyword",
    "value": "static",
    "start": 84,
    "end": 90
  },
  {
    "type": "Identifier",
    "value": "async",
    "start": 91,
    "end": 96
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 97,
    "end": 100
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 100,
    "end": 101
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 101,
    "end": 102
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 103,
    "end": 104
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 113,
    "end": 118
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 119,
    "end": 120
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 121,
    "end": 122
  },
  {
    "type": "Identifier",
    "value": "await",
    "start": 123,
    "end": 128
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 129,
    "end": 133
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 133,
    "end": 134
  },
  {
    "type": "PrivateIdentifier",
    "value": "bar",
    "start": 134,
    "end": 138
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 138,
    "end": 139
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 139,
    "end": 140
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 140,
    "end": 141
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 150,
    "end": 156
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 157,
    "end": 158
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 159,
    "end": 160
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 161,
    "end": 162
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 162,
    "end": 166
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 166,
    "end": 167
  },
  {
    "type": "PrivateIdentifier",
    "value": "baz",
    "start": 167,
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
    "value": ".",
    "start": 173,
    "end": 174
  },
  {
    "type": "Identifier",
    "value": "next",
    "start": 174,
    "end": 178
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 178,
    "end": 179
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 179,
    "end": 180
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 180,
    "end": 181
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 181,
    "end": 186
  },
  {
    "type": "Punctuator",
    "value": "||",
    "start": 187,
    "end": 189
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 190,
    "end": 191
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 191,
    "end": 192
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 193,
    "end": 194
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 195,
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
    "value": "await",
    "start": 197,
    "end": 202
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 203,
    "end": 207
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 207,
    "end": 208
  },
  {
    "type": "PrivateIdentifier",
    "value": "qux",
    "start": 208,
    "end": 212
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 212,
    "end": 213
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 213,
    "end": 214
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 214,
    "end": 215
  },
  {
    "type": "Identifier",
    "value": "next",
    "start": 215,
    "end": 219
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 219,
    "end": 220
  },
  {
    "type": "Punctuator",
    "value": ")",
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
    "value": ".",
    "start": 222,
    "end": 223
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 223,
    "end": 228
  },
  {
    "type": "Punctuator",
    "value": "||",
    "start": 229,
    "end": 231
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 232,
    "end": 233
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 233,
    "end": 234
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 234,
    "end": 235
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 240,
    "end": 241
  },
  {
    "type": "Keyword",
    "value": "static",
    "start": 246,
    "end": 252
  },
  {
    "type": "Punctuator",
    "value": "*",
    "start": 253,
    "end": 254
  },
  {
    "type": "PrivateIdentifier",
    "value": "baz",
    "start": 254,
    "end": 258
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 258,
    "end": 259
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 259,
    "end": 260
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 261,
    "end": 262
  },
  {
    "type": "Keyword",
    "value": "yield",
    "start": 263,
    "end": 268
  },
  {
    "type": "Numeric",
    "value": "42",
    "start": 269,
    "end": 271
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 271,
    "end": 272
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 273,
    "end": 274
  },
  {
    "type": "Keyword",
    "value": "static",
    "start": 279,
    "end": 285
  },
  {
    "type": "Identifier",
    "value": "async",
    "start": 286,
    "end": 291
  },
  {
    "type": "Punctuator",
    "value": "*",
    "start": 292,
    "end": 293
  },
  {
    "type": "PrivateIdentifier",
    "value": "qux",
    "start": 293,
    "end": 297
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 297,
    "end": 298
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 298,
    "end": 299
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 300,
    "end": 301
  },
  {
    "type": "Keyword",
    "value": "yield",
    "start": 310,
    "end": 315
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 316,
    "end": 317
  },
  {
    "type": "Identifier",
    "value": "await",
    "start": 317,
    "end": 322
  },
  {
    "type": "Identifier",
    "value": "Promise",
    "start": 323,
    "end": 330
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 330,
    "end": 331
  },
  {
    "type": "Identifier",
    "value": "resolve",
    "start": 331,
    "end": 338
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 338,
    "end": 339
  },
  {
    "type": "Numeric",
    "value": "42",
    "start": 339,
    "end": 341
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 341,
    "end": 342
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 342,
    "end": 343
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 343,
    "end": 344
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 349,
    "end": 350
  },
  {
    "type": "Identifier",
    "value": "async",
    "start": 355,
    "end": 360
  },
  {
    "type": "Keyword",
    "value": "static",
    "start": 361,
    "end": 367
  },
  {
    "type": "Punctuator",
    "value": "*",
    "start": 368,
    "end": 369
  },
  {
    "type": "PrivateIdentifier",
    "value": "bazBad",
    "start": 369,
    "end": 376
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 376,
    "end": 377
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 377,
    "end": 378
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 379,
    "end": 380
  },
  {
    "type": "Keyword",
    "value": "yield",
    "start": 381,
    "end": 386
  },
  {
    "type": "Numeric",
    "value": "42",
    "start": 387,
    "end": 389
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 389,
    "end": 390
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 391,
    "end": 392
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 393,
    "end": 394
  }
]
```
