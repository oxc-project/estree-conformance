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
            "name": "lambda1",
            "optional": false,
            "typeAnnotation": null,
            "start": 4,
            "end": 11
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "expression": false,
            "async": false,
            "typeParameters": null,
            "params": [
              {
                "type": "AssignmentPattern",
                "decorators": [],
                "left": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "y",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 15,
                  "end": 16
                },
                "right": {
                  "type": "Literal",
                  "value": "hello",
                  "raw": "\"hello\"",
                  "start": 19,
                  "end": 26
                },
                "optional": false,
                "typeAnnotation": null,
                "start": 15,
                "end": 26
              }
            ],
            "returnType": null,
            "body": {
              "type": "BlockStatement",
              "body": [],
              "start": 31,
              "end": 34
            },
            "id": null,
            "generator": false,
            "start": 14,
            "end": 34
          },
          "definite": false,
          "start": 4,
          "end": 34
        }
      ],
      "declare": false,
      "start": 0,
      "end": 34
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
            "name": "lambda2",
            "optional": false,
            "typeAnnotation": null,
            "start": 39,
            "end": 46
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "expression": false,
            "async": false,
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 53,
                    "end": 59
                  },
                  "start": 51,
                  "end": 59
                },
                "start": 50,
                "end": 59
              },
              {
                "type": "AssignmentPattern",
                "decorators": [],
                "left": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "y",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 61,
                  "end": 62
                },
                "right": {
                  "type": "Literal",
                  "value": "hello",
                  "raw": "\"hello\"",
                  "start": 65,
                  "end": 72
                },
                "optional": false,
                "typeAnnotation": null,
                "start": 61,
                "end": 72
              }
            ],
            "returnType": null,
            "body": {
              "type": "BlockStatement",
              "body": [],
              "start": 77,
              "end": 80
            },
            "id": null,
            "generator": false,
            "start": 49,
            "end": 80
          },
          "definite": false,
          "start": 39,
          "end": 80
        }
      ],
      "declare": false,
      "start": 35,
      "end": 80
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
            "name": "lambda3",
            "optional": false,
            "typeAnnotation": null,
            "start": 85,
            "end": 92
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "expression": false,
            "async": false,
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 99,
                    "end": 105
                  },
                  "start": 97,
                  "end": 105
                },
                "start": 96,
                "end": 105
              },
              {
                "type": "AssignmentPattern",
                "decorators": [],
                "left": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "y",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 107,
                  "end": 108
                },
                "right": {
                  "type": "Literal",
                  "value": "hello",
                  "raw": "\"hello\"",
                  "start": 111,
                  "end": 118
                },
                "optional": false,
                "typeAnnotation": null,
                "start": 107,
                "end": 118
              },
              {
                "type": "RestElement",
                "decorators": [],
                "argument": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "rest",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 123,
                  "end": 127
                },
                "optional": false,
                "typeAnnotation": null,
                "value": null,
                "start": 120,
                "end": 127
              }
            ],
            "returnType": null,
            "body": {
              "type": "BlockStatement",
              "body": [],
              "start": 132,
              "end": 135
            },
            "id": null,
            "generator": false,
            "start": 95,
            "end": 135
          },
          "definite": false,
          "start": 85,
          "end": 135
        }
      ],
      "declare": false,
      "start": 81,
      "end": 135
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
            "name": "lambda4",
            "optional": false,
            "typeAnnotation": null,
            "start": 140,
            "end": 147
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "expression": false,
            "async": false,
            "typeParameters": null,
            "params": [
              {
                "type": "AssignmentPattern",
                "decorators": [],
                "left": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "y",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 151,
                  "end": 152
                },
                "right": {
                  "type": "Literal",
                  "value": "hello",
                  "raw": "\"hello\"",
                  "start": 155,
                  "end": 162
                },
                "optional": false,
                "typeAnnotation": null,
                "start": 151,
                "end": 162
              },
              {
                "type": "RestElement",
                "decorators": [],
                "argument": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "rest",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 167,
                  "end": 171
                },
                "optional": false,
                "typeAnnotation": null,
                "value": null,
                "start": 164,
                "end": 171
              }
            ],
            "returnType": null,
            "body": {
              "type": "BlockStatement",
              "body": [],
              "start": 176,
              "end": 179
            },
            "id": null,
            "generator": false,
            "start": 150,
            "end": 179
          },
          "definite": false,
          "start": 140,
          "end": 179
        }
      ],
      "declare": false,
      "start": 136,
      "end": 179
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
            "name": "x",
            "optional": false,
            "typeAnnotation": null,
            "start": 185,
            "end": 186
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
                "type": "AssignmentPattern",
                "decorators": [],
                "left": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "str",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 199,
                  "end": 202
                },
                "right": {
                  "type": "Literal",
                  "value": "hello",
                  "raw": "\"hello\"",
                  "start": 205,
                  "end": 212
                },
                "optional": false,
                "typeAnnotation": null,
                "start": 199,
                "end": 212
              },
              {
                "type": "RestElement",
                "decorators": [],
                "argument": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "rest",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 217,
                  "end": 221
                },
                "optional": false,
                "typeAnnotation": null,
                "value": null,
                "start": 214,
                "end": 221
              }
            ],
            "returnType": null,
            "body": {
              "type": "BlockStatement",
              "body": [],
              "start": 223,
              "end": 226
            },
            "expression": false,
            "start": 189,
            "end": 226
          },
          "definite": false,
          "start": 185,
          "end": 226
        }
      ],
      "declare": false,
      "start": 181,
      "end": 226
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
            "name": "y",
            "optional": false,
            "typeAnnotation": null,
            "start": 231,
            "end": 232
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
              "params": [
                {
                  "type": "AssignmentPattern",
                  "decorators": [],
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "num",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 246,
                    "end": 249
                  },
                  "right": {
                    "type": "Literal",
                    "value": 10,
                    "raw": "10",
                    "start": 252,
                    "end": 254
                  },
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 246,
                  "end": 254
                },
                {
                  "type": "AssignmentPattern",
                  "decorators": [],
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "boo",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 256,
                    "end": 259
                  },
                  "right": {
                    "type": "Literal",
                    "value": false,
                    "raw": "false",
                    "start": 262,
                    "end": 267
                  },
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 256,
                  "end": 267
                },
                {
                  "type": "RestElement",
                  "decorators": [],
                  "argument": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "rest",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 272,
                    "end": 276
                  },
                  "optional": false,
                  "typeAnnotation": null,
                  "value": null,
                  "start": 269,
                  "end": 276
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [],
                "start": 278,
                "end": 281
              },
              "expression": false,
              "start": 236,
              "end": 281
            },
            "typeArguments": null,
            "arguments": [],
            "optional": false,
            "start": 235,
            "end": 284
          },
          "definite": false,
          "start": 231,
          "end": 284
        }
      ],
      "declare": false,
      "start": 227,
      "end": 284
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
            "name": "z",
            "optional": false,
            "typeAnnotation": null,
            "start": 289,
            "end": 290
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
              "params": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "num",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 309,
                      "end": 315
                    },
                    "start": 307,
                    "end": 315
                  },
                  "start": 304,
                  "end": 315
                },
                {
                  "type": "AssignmentPattern",
                  "decorators": [],
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "boo",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 317,
                    "end": 320
                  },
                  "right": {
                    "type": "Literal",
                    "value": false,
                    "raw": "false",
                    "start": 323,
                    "end": 328
                  },
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 317,
                  "end": 328
                },
                {
                  "type": "RestElement",
                  "decorators": [],
                  "argument": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "rest",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 333,
                    "end": 337
                  },
                  "optional": false,
                  "typeAnnotation": null,
                  "value": null,
                  "start": 330,
                  "end": 337
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [],
                "start": 339,
                "end": 342
              },
              "expression": false,
              "start": 294,
              "end": 342
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Literal",
                "value": 10,
                "raw": "10",
                "start": 344,
                "end": 346
              }
            ],
            "optional": false,
            "start": 293,
            "end": 347
          },
          "definite": false,
          "start": 289,
          "end": 347
        }
      ],
      "declare": false,
      "start": 285,
      "end": 347
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 347
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
    "value": "lambda1",
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
    "type": "Punctuator",
    "value": "(",
    "start": 14,
    "end": 15
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 15,
    "end": 16
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 17,
    "end": 18
  },
  {
    "type": "String",
    "value": "\"hello\"",
    "start": 19,
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
    "value": "=>",
    "start": 28,
    "end": 30
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 31,
    "end": 32
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 33,
    "end": 34
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 35,
    "end": 38
  },
  {
    "type": "Identifier",
    "value": "lambda2",
    "start": 39,
    "end": 46
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 47,
    "end": 48
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 49,
    "end": 50
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 50,
    "end": 51
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 51,
    "end": 52
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 53,
    "end": 59
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 59,
    "end": 60
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 61,
    "end": 62
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 63,
    "end": 64
  },
  {
    "type": "String",
    "value": "\"hello\"",
    "start": 65,
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
    "value": "=>",
    "start": 74,
    "end": 76
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 77,
    "end": 78
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 79,
    "end": 80
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 81,
    "end": 84
  },
  {
    "type": "Identifier",
    "value": "lambda3",
    "start": 85,
    "end": 92
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 93,
    "end": 94
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 95,
    "end": 96
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 96,
    "end": 97
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 97,
    "end": 98
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 99,
    "end": 105
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 105,
    "end": 106
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 107,
    "end": 108
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 109,
    "end": 110
  },
  {
    "type": "String",
    "value": "\"hello\"",
    "start": 111,
    "end": 118
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 118,
    "end": 119
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 120,
    "end": 123
  },
  {
    "type": "Identifier",
    "value": "rest",
    "start": 123,
    "end": 127
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 127,
    "end": 128
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 129,
    "end": 131
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 132,
    "end": 133
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 134,
    "end": 135
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 136,
    "end": 139
  },
  {
    "type": "Identifier",
    "value": "lambda4",
    "start": 140,
    "end": 147
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 148,
    "end": 149
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 150,
    "end": 151
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 151,
    "end": 152
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 153,
    "end": 154
  },
  {
    "type": "String",
    "value": "\"hello\"",
    "start": 155,
    "end": 162
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 162,
    "end": 163
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 164,
    "end": 167
  },
  {
    "type": "Identifier",
    "value": "rest",
    "start": 167,
    "end": 171
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 171,
    "end": 172
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 173,
    "end": 175
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 176,
    "end": 177
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 178,
    "end": 179
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 181,
    "end": 184
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 185,
    "end": 186
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 187,
    "end": 188
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 189,
    "end": 197
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 198,
    "end": 199
  },
  {
    "type": "Identifier",
    "value": "str",
    "start": 199,
    "end": 202
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 203,
    "end": 204
  },
  {
    "type": "String",
    "value": "\"hello\"",
    "start": 205,
    "end": 212
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 212,
    "end": 213
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 214,
    "end": 217
  },
  {
    "type": "Identifier",
    "value": "rest",
    "start": 217,
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
    "value": "{",
    "start": 223,
    "end": 224
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 225,
    "end": 226
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 227,
    "end": 230
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 231,
    "end": 232
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 233,
    "end": 234
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 235,
    "end": 236
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 236,
    "end": 244
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 245,
    "end": 246
  },
  {
    "type": "Identifier",
    "value": "num",
    "start": 246,
    "end": 249
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 250,
    "end": 251
  },
  {
    "type": "Numeric",
    "value": "10",
    "start": 252,
    "end": 254
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 254,
    "end": 255
  },
  {
    "type": "Identifier",
    "value": "boo",
    "start": 256,
    "end": 259
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 260,
    "end": 261
  },
  {
    "type": "Boolean",
    "value": "false",
    "start": 262,
    "end": 267
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 267,
    "end": 268
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 269,
    "end": 272
  },
  {
    "type": "Identifier",
    "value": "rest",
    "start": 272,
    "end": 276
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 276,
    "end": 277
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 278,
    "end": 279
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 280,
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
    "value": "(",
    "start": 282,
    "end": 283
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 283,
    "end": 284
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 285,
    "end": 288
  },
  {
    "type": "Identifier",
    "value": "z",
    "start": 289,
    "end": 290
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 291,
    "end": 292
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 293,
    "end": 294
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 294,
    "end": 302
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 303,
    "end": 304
  },
  {
    "type": "Identifier",
    "value": "num",
    "start": 304,
    "end": 307
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 307,
    "end": 308
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 309,
    "end": 315
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 315,
    "end": 316
  },
  {
    "type": "Identifier",
    "value": "boo",
    "start": 317,
    "end": 320
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 321,
    "end": 322
  },
  {
    "type": "Boolean",
    "value": "false",
    "start": 323,
    "end": 328
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 328,
    "end": 329
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 330,
    "end": 333
  },
  {
    "type": "Identifier",
    "value": "rest",
    "start": 333,
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
    "value": "{",
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
    "value": ")",
    "start": 342,
    "end": 343
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 343,
    "end": 344
  },
  {
    "type": "Numeric",
    "value": "10",
    "start": 344,
    "end": 346
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 346,
    "end": 347
  }
]
```
