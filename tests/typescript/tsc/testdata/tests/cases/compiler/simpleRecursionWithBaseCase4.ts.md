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
            "name": "fn2",
            "optional": false,
            "typeAnnotation": null,
            "start": 4,
            "end": 7
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
                "name": "name",
                "optional": false,
                "typeAnnotation": null,
                "start": 19,
                "end": 23
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
                      "type": "Identifier",
                      "decorators": [],
                      "name": "fn2",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 29,
                      "end": 32
                    },
                    "right": {
                      "type": "CallExpression",
                      "callee": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "compose",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 35,
                        "end": 42
                      },
                      "typeArguments": null,
                      "arguments": [
                        {
                          "type": "ThisExpression",
                          "start": 43,
                          "end": 47
                        },
                        {
                          "type": "Literal",
                          "value": 0,
                          "raw": "0",
                          "start": 49,
                          "end": 50
                        },
                        {
                          "type": "Literal",
                          "value": 1,
                          "raw": "1",
                          "start": 52,
                          "end": 53
                        }
                      ],
                      "optional": false,
                      "start": 35,
                      "end": 54
                    },
                    "start": 29,
                    "end": 54
                  },
                  "directive": null,
                  "start": 29,
                  "end": 54
                },
                {
                  "type": "ReturnStatement",
                  "argument": {
                    "type": "CallExpression",
                    "callee": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "fn2",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 64,
                      "end": 67
                    },
                    "typeArguments": null,
                    "arguments": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "name",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 68,
                        "end": 72
                      }
                    ],
                    "optional": false,
                    "start": 64,
                    "end": 73
                  },
                  "start": 57,
                  "end": 73
                },
                {
                  "type": "FunctionDeclaration",
                  "id": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "compose",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 86,
                    "end": 93
                  },
                  "generator": false,
                  "async": false,
                  "declare": false,
                  "typeParameters": null,
                  "params": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "child",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 94,
                      "end": 99
                    },
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "level",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 101,
                      "end": 106
                    },
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "find",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 108,
                      "end": 112
                    }
                  ],
                  "returnType": null,
                  "body": {
                    "type": "BlockStatement",
                    "body": [
                      {
                        "type": "IfStatement",
                        "test": {
                          "type": "BinaryExpression",
                          "left": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "child",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 124,
                            "end": 129
                          },
                          "operator": "===",
                          "right": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "find",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 134,
                            "end": 138
                          },
                          "start": 124,
                          "end": 138
                        },
                        "consequent": {
                          "type": "BlockStatement",
                          "body": [
                            {
                              "type": "ReturnStatement",
                              "argument": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "level",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 155,
                                "end": 160
                              },
                              "start": 148,
                              "end": 160
                            }
                          ],
                          "start": 140,
                          "end": 166
                        },
                        "alternate": null,
                        "start": 120,
                        "end": 166
                      },
                      {
                        "type": "ReturnStatement",
                        "argument": {
                          "type": "CallExpression",
                          "callee": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "compose",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 178,
                            "end": 185
                          },
                          "typeArguments": null,
                          "arguments": [
                            {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "child",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 186,
                              "end": 191
                            },
                            {
                              "type": "BinaryExpression",
                              "left": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "level",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 193,
                                "end": 198
                              },
                              "operator": "+",
                              "right": {
                                "type": "Literal",
                                "value": 1,
                                "raw": "1",
                                "start": 201,
                                "end": 202
                              },
                              "start": 193,
                              "end": 202
                            },
                            {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "find",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 204,
                              "end": 208
                            }
                          ],
                          "optional": false,
                          "start": 178,
                          "end": 209
                        },
                        "start": 171,
                        "end": 209
                      }
                    ],
                    "start": 114,
                    "end": 213
                  },
                  "expression": false,
                  "start": 77,
                  "end": 213
                }
              ],
              "start": 25,
              "end": 215
            },
            "expression": false,
            "start": 10,
            "end": 215
          },
          "definite": false,
          "start": 4,
          "end": 215
        }
      ],
      "declare": false,
      "start": 0,
      "end": 215
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
            "name": "d",
            "optional": false,
            "typeAnnotation": null,
            "start": 221,
            "end": 222
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "fn2",
              "optional": false,
              "typeAnnotation": null,
              "start": 225,
              "end": 228
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Literal",
                "value": 1,
                "raw": "1",
                "start": 229,
                "end": 230
              }
            ],
            "optional": false,
            "start": 225,
            "end": 231
          },
          "definite": false,
          "start": 221,
          "end": 231
        }
      ],
      "declare": false,
      "start": 217,
      "end": 232
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
            "name": "d",
            "optional": false,
            "typeAnnotation": null,
            "start": 243,
            "end": 244
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "redefined",
            "optional": false,
            "typeAnnotation": null,
            "start": 245,
            "end": 254
          },
          "optional": false,
          "computed": false,
          "start": 243,
          "end": 254
        },
        "typeArguments": null,
        "arguments": [],
        "optional": false,
        "start": 243,
        "end": 256
      },
      "directive": null,
      "start": 243,
      "end": 257
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 257
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
    "value": "fn2",
    "start": 4,
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
    "value": "function",
    "start": 10,
    "end": 18
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 18,
    "end": 19
  },
  {
    "type": "Identifier",
    "value": "name",
    "start": 19,
    "end": 23
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 23,
    "end": 24
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 25,
    "end": 26
  },
  {
    "type": "Identifier",
    "value": "fn2",
    "start": 29,
    "end": 32
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 33,
    "end": 34
  },
  {
    "type": "Identifier",
    "value": "compose",
    "start": 35,
    "end": 42
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 42,
    "end": 43
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 43,
    "end": 47
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 47,
    "end": 48
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 49,
    "end": 50
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 50,
    "end": 51
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 52,
    "end": 53
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 53,
    "end": 54
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 57,
    "end": 63
  },
  {
    "type": "Identifier",
    "value": "fn2",
    "start": 64,
    "end": 67
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 67,
    "end": 68
  },
  {
    "type": "Identifier",
    "value": "name",
    "start": 68,
    "end": 72
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 72,
    "end": 73
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 77,
    "end": 85
  },
  {
    "type": "Identifier",
    "value": "compose",
    "start": 86,
    "end": 93
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 93,
    "end": 94
  },
  {
    "type": "Identifier",
    "value": "child",
    "start": 94,
    "end": 99
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 99,
    "end": 100
  },
  {
    "type": "Identifier",
    "value": "level",
    "start": 101,
    "end": 106
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 106,
    "end": 107
  },
  {
    "type": "Identifier",
    "value": "find",
    "start": 108,
    "end": 112
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 112,
    "end": 113
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 114,
    "end": 115
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 120,
    "end": 122
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 123,
    "end": 124
  },
  {
    "type": "Identifier",
    "value": "child",
    "start": 124,
    "end": 129
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 130,
    "end": 133
  },
  {
    "type": "Identifier",
    "value": "find",
    "start": 134,
    "end": 138
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 138,
    "end": 139
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 140,
    "end": 141
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 148,
    "end": 154
  },
  {
    "type": "Identifier",
    "value": "level",
    "start": 155,
    "end": 160
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 165,
    "end": 166
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 171,
    "end": 177
  },
  {
    "type": "Identifier",
    "value": "compose",
    "start": 178,
    "end": 185
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 185,
    "end": 186
  },
  {
    "type": "Identifier",
    "value": "child",
    "start": 186,
    "end": 191
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 191,
    "end": 192
  },
  {
    "type": "Identifier",
    "value": "level",
    "start": 193,
    "end": 198
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 199,
    "end": 200
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 201,
    "end": 202
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 202,
    "end": 203
  },
  {
    "type": "Identifier",
    "value": "find",
    "start": 204,
    "end": 208
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 208,
    "end": 209
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 212,
    "end": 213
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 214,
    "end": 215
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 217,
    "end": 220
  },
  {
    "type": "Identifier",
    "value": "d",
    "start": 221,
    "end": 222
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 223,
    "end": 224
  },
  {
    "type": "Identifier",
    "value": "fn2",
    "start": 225,
    "end": 228
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 228,
    "end": 229
  },
  {
    "type": "Numeric",
    "value": "1",
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
    "value": ";",
    "start": 231,
    "end": 232
  },
  {
    "type": "Identifier",
    "value": "d",
    "start": 243,
    "end": 244
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 244,
    "end": 245
  },
  {
    "type": "Identifier",
    "value": "redefined",
    "start": 245,
    "end": 254
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 254,
    "end": 255
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 255,
    "end": 256
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 256,
    "end": 257
  }
]
```
