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
        "name": "f1",
        "optional": false,
        "typeAnnotation": null,
        "start": 9,
        "end": 11
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "a",
          "optional": true,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSBooleanKeyword",
              "start": 16,
              "end": 23
            },
            "start": 14,
            "end": 23
          },
          "start": 12,
          "end": 23
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSVoidKeyword",
          "start": 26,
          "end": 30
        },
        "start": 24,
        "end": 30
      },
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "??=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null,
                "start": 37,
                "end": 38
              },
              "right": {
                "type": "Literal",
                "value": true,
                "raw": "true",
                "start": 43,
                "end": 47
              },
              "start": 37,
              "end": 47
            },
            "directive": null,
            "start": 37,
            "end": 48
          },
          {
            "type": "IfStatement",
            "test": {
              "type": "BinaryExpression",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null,
                "start": 58,
                "end": 59
              },
              "operator": "===",
              "right": {
                "type": "Literal",
                "value": false,
                "raw": "false",
                "start": 64,
                "end": 69
              },
              "start": 58,
              "end": 69
            },
            "consequent": {
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
                        "start": 81,
                        "end": 88
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "log",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 89,
                        "end": 92
                      },
                      "optional": false,
                      "computed": false,
                      "start": 81,
                      "end": 92
                    },
                    "typeArguments": null,
                    "arguments": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "a",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 93,
                        "end": 94
                      }
                    ],
                    "optional": false,
                    "start": 81,
                    "end": 95
                  },
                  "directive": null,
                  "start": 81,
                  "end": 96
                }
              ],
              "start": 71,
              "end": 102
            },
            "alternate": null,
            "start": 54,
            "end": 102
          }
        ],
        "start": 31,
        "end": 104
      },
      "expression": false,
      "start": 0,
      "end": 104
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "f1",
          "optional": false,
          "typeAnnotation": null,
          "start": 105,
          "end": 107
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "value": false,
            "raw": "false",
            "start": 108,
            "end": 113
          }
        ],
        "optional": false,
        "start": 105,
        "end": 114
      },
      "directive": null,
      "start": 105,
      "end": 115
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f2",
        "optional": false,
        "typeAnnotation": null,
        "start": 126,
        "end": 128
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
            "type": "VariableDeclaration",
            "kind": "let",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSUnionType",
                      "types": [
                        {
                          "type": "TSLiteralType",
                          "literal": {
                            "type": "Literal",
                            "value": 0,
                            "raw": "0",
                            "start": 144,
                            "end": 145
                          },
                          "start": 144,
                          "end": 145
                        },
                        {
                          "type": "TSLiteralType",
                          "literal": {
                            "type": "Literal",
                            "value": 1,
                            "raw": "1",
                            "start": 148,
                            "end": 149
                          },
                          "start": 148,
                          "end": 149
                        },
                        {
                          "type": "TSLiteralType",
                          "literal": {
                            "type": "Literal",
                            "value": 2,
                            "raw": "2",
                            "start": 152,
                            "end": 153
                          },
                          "start": 152,
                          "end": 153
                        },
                        {
                          "type": "TSLiteralType",
                          "literal": {
                            "type": "Literal",
                            "value": 3,
                            "raw": "3",
                            "start": 156,
                            "end": 157
                          },
                          "start": 156,
                          "end": 157
                        }
                      ],
                      "start": 144,
                      "end": 157
                    },
                    "start": 142,
                    "end": 157
                  },
                  "start": 141,
                  "end": 157
                },
                "init": {
                  "type": "TSAsExpression",
                  "expression": {
                    "type": "Literal",
                    "value": 0,
                    "raw": "0",
                    "start": 160,
                    "end": 161
                  },
                  "typeAnnotation": {
                    "type": "TSAnyKeyword",
                    "start": 165,
                    "end": 168
                  },
                  "start": 160,
                  "end": 168
                },
                "definite": false,
                "start": 141,
                "end": 168
              }
            ],
            "declare": false,
            "start": 137,
            "end": 169
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "??=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 174,
                "end": 175
              },
              "right": {
                "type": "Literal",
                "value": 1,
                "raw": "1",
                "start": 180,
                "end": 181
              },
              "start": 174,
              "end": 181
            },
            "directive": null,
            "start": 174,
            "end": 182
          },
          {
            "type": "IfStatement",
            "test": {
              "type": "BinaryExpression",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 191,
                "end": 192
              },
              "operator": "===",
              "right": {
                "type": "Literal",
                "value": 0,
                "raw": "0",
                "start": 197,
                "end": 198
              },
              "start": 191,
              "end": 198
            },
            "consequent": {
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
                        "start": 210,
                        "end": 217
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "log",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 218,
                        "end": 221
                      },
                      "optional": false,
                      "computed": false,
                      "start": 210,
                      "end": 221
                    },
                    "typeArguments": null,
                    "arguments": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 222,
                        "end": 223
                      }
                    ],
                    "optional": false,
                    "start": 210,
                    "end": 224
                  },
                  "directive": null,
                  "start": 210,
                  "end": 225
                }
              ],
              "start": 200,
              "end": 231
            },
            "alternate": null,
            "start": 187,
            "end": 231
          }
        ],
        "start": 131,
        "end": 233
      },
      "expression": false,
      "start": 117,
      "end": 233
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 233
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
    "value": "f1",
    "start": 9,
    "end": 11
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 11,
    "end": 12
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 12,
    "end": 13
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 13,
    "end": 14
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 14,
    "end": 15
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 16,
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
    "value": ":",
    "start": 24,
    "end": 25
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 26,
    "end": 30
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 31,
    "end": 32
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 37,
    "end": 38
  },
  {
    "type": "Punctuator",
    "value": "??=",
    "start": 39,
    "end": 42
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 43,
    "end": 47
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 47,
    "end": 48
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 54,
    "end": 56
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 57,
    "end": 58
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 58,
    "end": 59
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 60,
    "end": 63
  },
  {
    "type": "Boolean",
    "value": "false",
    "start": 64,
    "end": 69
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 69,
    "end": 70
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 71,
    "end": 72
  },
  {
    "type": "Identifier",
    "value": "console",
    "start": 81,
    "end": 88
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 88,
    "end": 89
  },
  {
    "type": "Identifier",
    "value": "log",
    "start": 89,
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
    "value": "a",
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
    "value": ";",
    "start": 95,
    "end": 96
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 101,
    "end": 102
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 103,
    "end": 104
  },
  {
    "type": "Identifier",
    "value": "f1",
    "start": 105,
    "end": 107
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 107,
    "end": 108
  },
  {
    "type": "Boolean",
    "value": "false",
    "start": 108,
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
    "value": ";",
    "start": 114,
    "end": 115
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 117,
    "end": 125
  },
  {
    "type": "Identifier",
    "value": "f2",
    "start": 126,
    "end": 128
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 128,
    "end": 129
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 129,
    "end": 130
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 131,
    "end": 132
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 137,
    "end": 140
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 141,
    "end": 142
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 142,
    "end": 143
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 144,
    "end": 145
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 146,
    "end": 147
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 148,
    "end": 149
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 150,
    "end": 151
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 152,
    "end": 153
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 154,
    "end": 155
  },
  {
    "type": "Numeric",
    "value": "3",
    "start": 156,
    "end": 157
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 158,
    "end": 159
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 160,
    "end": 161
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 162,
    "end": 164
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 165,
    "end": 168
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 168,
    "end": 169
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 174,
    "end": 175
  },
  {
    "type": "Punctuator",
    "value": "??=",
    "start": 176,
    "end": 179
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 180,
    "end": 181
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 181,
    "end": 182
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 187,
    "end": 189
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 190,
    "end": 191
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 191,
    "end": 192
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 193,
    "end": 196
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 197,
    "end": 198
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 198,
    "end": 199
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 200,
    "end": 201
  },
  {
    "type": "Identifier",
    "value": "console",
    "start": 210,
    "end": 217
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 217,
    "end": 218
  },
  {
    "type": "Identifier",
    "value": "log",
    "start": 218,
    "end": 221
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 221,
    "end": 222
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 222,
    "end": 223
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 223,
    "end": 224
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 224,
    "end": 225
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 230,
    "end": 231
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 232,
    "end": 233
  }
]
```
