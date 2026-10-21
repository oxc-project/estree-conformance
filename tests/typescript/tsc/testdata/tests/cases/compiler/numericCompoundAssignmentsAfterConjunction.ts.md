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
        "name": "scale",
        "optional": false,
        "typeAnnotation": null,
        "start": 9,
        "end": 14
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "left",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSNumberKeyword",
              "start": 21,
              "end": 27
            },
            "start": 19,
            "end": 27
          },
          "start": 15,
          "end": 27
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "right",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSNumberKeyword",
              "start": 36,
              "end": 42
            },
            "start": 34,
            "end": 42
          },
          "start": 29,
          "end": 42
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
                "type": "BinaryExpression",
                "left": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "left",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 54,
                  "end": 58
                },
                "operator": "!==",
                "right": {
                  "type": "Literal",
                  "value": 0,
                  "raw": "0",
                  "start": 63,
                  "end": 64
                },
                "start": 54,
                "end": 64
              },
              "operator": "&&",
              "right": {
                "type": "BinaryExpression",
                "left": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "right",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 68,
                  "end": 73
                },
                "operator": "!==",
                "right": {
                  "type": "Literal",
                  "value": 0,
                  "raw": "0",
                  "start": 78,
                  "end": 79
                },
                "start": 68,
                "end": 79
              },
              "start": 54,
              "end": 79
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "AssignmentExpression",
                    "operator": "*=",
                    "left": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "left",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 91,
                      "end": 95
                    },
                    "right": {
                      "type": "UnaryExpression",
                      "operator": "-",
                      "argument": {
                        "type": "Literal",
                        "value": 1.5,
                        "raw": "1.5",
                        "start": 100,
                        "end": 103
                      },
                      "prefix": true,
                      "start": 99,
                      "end": 103
                    },
                    "start": 91,
                    "end": 103
                  },
                  "directive": null,
                  "start": 91,
                  "end": 104
                },
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "AssignmentExpression",
                    "operator": "*=",
                    "left": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "right",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 113,
                      "end": 118
                    },
                    "right": {
                      "type": "UnaryExpression",
                      "operator": "-",
                      "argument": {
                        "type": "Literal",
                        "value": 1.5,
                        "raw": "1.5",
                        "start": 123,
                        "end": 126
                      },
                      "prefix": true,
                      "start": 122,
                      "end": 126
                    },
                    "start": 113,
                    "end": 126
                  },
                  "directive": null,
                  "start": 113,
                  "end": 127
                }
              ],
              "start": 81,
              "end": 133
            },
            "alternate": {
              "type": "IfStatement",
              "test": {
                "type": "BinaryExpression",
                "left": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "left",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 143,
                  "end": 147
                },
                "operator": "!==",
                "right": {
                  "type": "Literal",
                  "value": 0,
                  "raw": "0",
                  "start": 152,
                  "end": 153
                },
                "start": 143,
                "end": 153
              },
              "consequent": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "AssignmentExpression",
                      "operator": "*=",
                      "left": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "left",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 165,
                        "end": 169
                      },
                      "right": {
                        "type": "UnaryExpression",
                        "operator": "-",
                        "argument": {
                          "type": "Literal",
                          "value": 2,
                          "raw": "2",
                          "start": 174,
                          "end": 175
                        },
                        "prefix": true,
                        "start": 173,
                        "end": 175
                      },
                      "start": 165,
                      "end": 175
                    },
                    "directive": null,
                    "start": 165,
                    "end": 176
                  }
                ],
                "start": 155,
                "end": 182
              },
              "alternate": {
                "type": "IfStatement",
                "test": {
                  "type": "BinaryExpression",
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "right",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 192,
                    "end": 197
                  },
                  "operator": "!==",
                  "right": {
                    "type": "Literal",
                    "value": 0,
                    "raw": "0",
                    "start": 202,
                    "end": 203
                  },
                  "start": 192,
                  "end": 203
                },
                "consequent": {
                  "type": "BlockStatement",
                  "body": [
                    {
                      "type": "ExpressionStatement",
                      "expression": {
                        "type": "AssignmentExpression",
                        "operator": "*=",
                        "left": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "right",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 215,
                          "end": 220
                        },
                        "right": {
                          "type": "UnaryExpression",
                          "operator": "-",
                          "argument": {
                            "type": "Literal",
                            "value": 2,
                            "raw": "2",
                            "start": 225,
                            "end": 226
                          },
                          "prefix": true,
                          "start": 224,
                          "end": 226
                        },
                        "start": 215,
                        "end": 226
                      },
                      "directive": null,
                      "start": 215,
                      "end": 227
                    }
                  ],
                  "start": 205,
                  "end": 233
                },
                "alternate": null,
                "start": 188,
                "end": 233
              },
              "start": 139,
              "end": 233
            },
            "start": 50,
            "end": 233
          }
        ],
        "start": 44,
        "end": 235
      },
      "expression": false,
      "start": 0,
      "end": 235
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 235
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
    "value": "scale",
    "start": 9,
    "end": 14
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 14,
    "end": 15
  },
  {
    "type": "Identifier",
    "value": "left",
    "start": 15,
    "end": 19
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 19,
    "end": 20
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 21,
    "end": 27
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 27,
    "end": 28
  },
  {
    "type": "Identifier",
    "value": "right",
    "start": 29,
    "end": 34
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 34,
    "end": 35
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 36,
    "end": 42
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 42,
    "end": 43
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 44,
    "end": 45
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 50,
    "end": 52
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 53,
    "end": 54
  },
  {
    "type": "Identifier",
    "value": "left",
    "start": 54,
    "end": 58
  },
  {
    "type": "Punctuator",
    "value": "!==",
    "start": 59,
    "end": 62
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 63,
    "end": 64
  },
  {
    "type": "Punctuator",
    "value": "&&",
    "start": 65,
    "end": 67
  },
  {
    "type": "Identifier",
    "value": "right",
    "start": 68,
    "end": 73
  },
  {
    "type": "Punctuator",
    "value": "!==",
    "start": 74,
    "end": 77
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 78,
    "end": 79
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 79,
    "end": 80
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 81,
    "end": 82
  },
  {
    "type": "Identifier",
    "value": "left",
    "start": 91,
    "end": 95
  },
  {
    "type": "Punctuator",
    "value": "*=",
    "start": 96,
    "end": 98
  },
  {
    "type": "Punctuator",
    "value": "-",
    "start": 99,
    "end": 100
  },
  {
    "type": "Numeric",
    "value": "1.5",
    "start": 100,
    "end": 103
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 103,
    "end": 104
  },
  {
    "type": "Identifier",
    "value": "right",
    "start": 113,
    "end": 118
  },
  {
    "type": "Punctuator",
    "value": "*=",
    "start": 119,
    "end": 121
  },
  {
    "type": "Punctuator",
    "value": "-",
    "start": 122,
    "end": 123
  },
  {
    "type": "Numeric",
    "value": "1.5",
    "start": 123,
    "end": 126
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 126,
    "end": 127
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 132,
    "end": 133
  },
  {
    "type": "Keyword",
    "value": "else",
    "start": 134,
    "end": 138
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 139,
    "end": 141
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 142,
    "end": 143
  },
  {
    "type": "Identifier",
    "value": "left",
    "start": 143,
    "end": 147
  },
  {
    "type": "Punctuator",
    "value": "!==",
    "start": 148,
    "end": 151
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 152,
    "end": 153
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 153,
    "end": 154
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 155,
    "end": 156
  },
  {
    "type": "Identifier",
    "value": "left",
    "start": 165,
    "end": 169
  },
  {
    "type": "Punctuator",
    "value": "*=",
    "start": 170,
    "end": 172
  },
  {
    "type": "Punctuator",
    "value": "-",
    "start": 173,
    "end": 174
  },
  {
    "type": "Numeric",
    "value": "2",
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
    "type": "Punctuator",
    "value": "}",
    "start": 181,
    "end": 182
  },
  {
    "type": "Keyword",
    "value": "else",
    "start": 183,
    "end": 187
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 188,
    "end": 190
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 191,
    "end": 192
  },
  {
    "type": "Identifier",
    "value": "right",
    "start": 192,
    "end": 197
  },
  {
    "type": "Punctuator",
    "value": "!==",
    "start": 198,
    "end": 201
  },
  {
    "type": "Numeric",
    "value": "0",
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
    "type": "Identifier",
    "value": "right",
    "start": 215,
    "end": 220
  },
  {
    "type": "Punctuator",
    "value": "*=",
    "start": 221,
    "end": 223
  },
  {
    "type": "Punctuator",
    "value": "-",
    "start": 224,
    "end": 225
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 225,
    "end": 226
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 226,
    "end": 227
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 232,
    "end": 233
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 234,
    "end": 235
  }
]
```
