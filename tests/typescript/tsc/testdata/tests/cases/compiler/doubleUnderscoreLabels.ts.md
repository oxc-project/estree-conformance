__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "doThing",
        "optional": false,
        "typeAnnotation": null,
        "start": 9,
        "end": 16
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
            "type": "LabeledStatement",
            "label": {
              "type": "Identifier",
              "decorators": [],
              "name": "__call",
              "optional": false,
              "typeAnnotation": null,
              "start": 25,
              "end": 31
            },
            "body": {
              "type": "WhileStatement",
              "test": {
                "type": "Literal",
                "value": true,
                "raw": "true",
                "start": 40,
                "end": 44
              },
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "LabeledStatement",
                    "label": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "aLabel",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 56,
                      "end": 62
                    },
                    "body": {
                      "type": "ForStatement",
                      "init": {
                        "type": "VariableDeclaration",
                        "kind": "let",
                        "declarations": [
                          {
                            "type": "VariableDeclarator",
                            "id": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "i",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 73,
                              "end": 74
                            },
                            "init": {
                              "type": "Literal",
                              "value": 0,
                              "raw": "0",
                              "start": 77,
                              "end": 78
                            },
                            "definite": false,
                            "start": 73,
                            "end": 78
                          }
                        ],
                        "declare": false,
                        "start": 69,
                        "end": 78
                      },
                      "test": {
                        "type": "BinaryExpression",
                        "left": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "i",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 80,
                          "end": 81
                        },
                        "operator": "<",
                        "right": {
                          "type": "Literal",
                          "value": 10,
                          "raw": "10",
                          "start": 84,
                          "end": 86
                        },
                        "start": 80,
                        "end": 86
                      },
                      "update": {
                        "type": "UpdateExpression",
                        "operator": "++",
                        "prefix": false,
                        "argument": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "i",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 88,
                          "end": 89
                        },
                        "start": 88,
                        "end": 91
                      },
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
                                "name": "i",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 111,
                                "end": 112
                              },
                              "operator": "===",
                              "right": {
                                "type": "Literal",
                                "value": 3,
                                "raw": "3",
                                "start": 117,
                                "end": 118
                              },
                              "start": 111,
                              "end": 118
                            },
                            "consequent": {
                              "type": "BlockStatement",
                              "body": [
                                {
                                  "type": "BreakStatement",
                                  "label": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "__call",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 144,
                                    "end": 150
                                  },
                                  "start": 138,
                                  "end": 151
                                }
                              ],
                              "start": 120,
                              "end": 165
                            },
                            "alternate": null,
                            "start": 107,
                            "end": 165
                          },
                          {
                            "type": "IfStatement",
                            "test": {
                              "type": "BinaryExpression",
                              "left": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "i",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 182,
                                "end": 183
                              },
                              "operator": "===",
                              "right": {
                                "type": "Literal",
                                "value": 5,
                                "raw": "5",
                                "start": 188,
                                "end": 189
                              },
                              "start": 182,
                              "end": 189
                            },
                            "consequent": {
                              "type": "BlockStatement",
                              "body": [
                                {
                                  "type": "BreakStatement",
                                  "label": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "aLabel",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 215,
                                    "end": 221
                                  },
                                  "start": 209,
                                  "end": 222
                                }
                              ],
                              "start": 191,
                              "end": 236
                            },
                            "alternate": null,
                            "start": 178,
                            "end": 236
                          }
                        ],
                        "start": 93,
                        "end": 246
                      },
                      "start": 64,
                      "end": 246
                    },
                    "start": 56,
                    "end": 246
                  }
                ],
                "start": 46,
                "end": 252
              },
              "start": 33,
              "end": 252
            },
            "start": 25,
            "end": 252
          }
        ],
        "start": 19,
        "end": 254
      },
      "expression": false,
      "start": 0,
      "end": 254
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "doThing",
          "optional": false,
          "typeAnnotation": null,
          "start": 255,
          "end": 262
        },
        "typeArguments": null,
        "arguments": [],
        "optional": false,
        "start": 255,
        "end": 264
      },
      "directive": null,
      "start": 255,
      "end": 265
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 265
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "function",
    "start": 0,
    "end": 8
  },
  {
    "type": "Identifier",
    "value": "doThing",
    "start": 9,
    "end": 16
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 16,
    "end": 17
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 17,
    "end": 18
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 19,
    "end": 20
  },
  {
    "type": "Identifier",
    "value": "__call",
    "start": 25,
    "end": 31
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 31,
    "end": 32
  },
  {
    "type": "Keyword",
    "value": "while",
    "start": 33,
    "end": 38
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 39,
    "end": 40
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 40,
    "end": 44
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 44,
    "end": 45
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 46,
    "end": 47
  },
  {
    "type": "Identifier",
    "value": "aLabel",
    "start": 56,
    "end": 62
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 62,
    "end": 63
  },
  {
    "type": "Keyword",
    "value": "for",
    "start": 64,
    "end": 67
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 68,
    "end": 69
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 69,
    "end": 72
  },
  {
    "type": "Identifier",
    "value": "i",
    "start": 73,
    "end": 74
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 75,
    "end": 76
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 77,
    "end": 78
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 78,
    "end": 79
  },
  {
    "type": "Identifier",
    "value": "i",
    "start": 80,
    "end": 81
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 82,
    "end": 83
  },
  {
    "type": "Numeric",
    "value": "10",
    "start": 84,
    "end": 86
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 86,
    "end": 87
  },
  {
    "type": "Identifier",
    "value": "i",
    "start": 88,
    "end": 89
  },
  {
    "type": "Punctuator",
    "value": "++",
    "start": 89,
    "end": 91
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 91,
    "end": 92
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 93,
    "end": 94
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 107,
    "end": 109
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 110,
    "end": 111
  },
  {
    "type": "Identifier",
    "value": "i",
    "start": 111,
    "end": 112
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 113,
    "end": 116
  },
  {
    "type": "Numeric",
    "value": "3",
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
    "type": "Punctuator",
    "value": "{",
    "start": 120,
    "end": 121
  },
  {
    "type": "Keyword",
    "value": "break",
    "start": 138,
    "end": 143
  },
  {
    "type": "Identifier",
    "value": "__call",
    "start": 144,
    "end": 150
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 150,
    "end": 151
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 164,
    "end": 165
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 178,
    "end": 180
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 181,
    "end": 182
  },
  {
    "type": "Identifier",
    "value": "i",
    "start": 182,
    "end": 183
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 184,
    "end": 187
  },
  {
    "type": "Numeric",
    "value": "5",
    "start": 188,
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
    "value": "{",
    "start": 191,
    "end": 192
  },
  {
    "type": "Keyword",
    "value": "break",
    "start": 209,
    "end": 214
  },
  {
    "type": "Identifier",
    "value": "aLabel",
    "start": 215,
    "end": 221
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 221,
    "end": 222
  },
  {
    "type": "Punctuator",
    "value": "}",
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
    "type": "Identifier",
    "value": "doThing",
    "start": 255,
    "end": 262
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 262,
    "end": 263
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 263,
    "end": 264
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 264,
    "end": 265
  }
]
```
