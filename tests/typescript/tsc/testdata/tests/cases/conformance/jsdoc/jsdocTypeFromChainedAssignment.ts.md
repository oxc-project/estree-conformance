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
        "name": "A",
        "optional": false,
        "typeAnnotation": null,
        "start": 9,
        "end": 10
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
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "MemberExpression",
                "object": {
                  "type": "ThisExpression",
                  "start": 20,
                  "end": 24
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 25,
                  "end": 26
                },
                "optional": false,
                "computed": false,
                "start": 20,
                "end": 26
              },
              "right": {
                "type": "Literal",
                "value": 1,
                "raw": "1",
                "start": 29,
                "end": 30
              },
              "start": 20,
              "end": 30
            },
            "directive": null,
            "start": 20,
            "end": 30
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "MemberExpression",
                "object": {
                  "type": "ThisExpression",
                  "start": 56,
                  "end": 60
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "first",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 61,
                  "end": 66
                },
                "optional": false,
                "computed": false,
                "start": 56,
                "end": 66
              },
              "right": {
                "type": "AssignmentExpression",
                "operator": "=",
                "left": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "ThisExpression",
                    "start": 69,
                    "end": 73
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "second",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 74,
                    "end": 80
                  },
                  "optional": false,
                  "computed": false,
                  "start": 69,
                  "end": 80
                },
                "right": {
                  "type": "Literal",
                  "value": 1,
                  "raw": "1",
                  "start": 83,
                  "end": 84
                },
                "start": 69,
                "end": 84
              },
              "start": 56,
              "end": 84
            },
            "directive": null,
            "start": 56,
            "end": 84
          }
        ],
        "start": 14,
        "end": 86
      },
      "expression": false,
      "start": 0,
      "end": 86
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "object": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "A",
              "optional": false,
              "typeAnnotation": null,
              "start": 112,
              "end": 113
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "prototype",
              "optional": false,
              "typeAnnotation": null,
              "start": 114,
              "end": 123
            },
            "optional": false,
            "computed": false,
            "start": 112,
            "end": 123
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "y",
            "optional": false,
            "typeAnnotation": null,
            "start": 124,
            "end": 125
          },
          "optional": false,
          "computed": false,
          "start": 112,
          "end": 125
        },
        "right": {
          "type": "AssignmentExpression",
          "operator": "=",
          "left": {
            "type": "MemberExpression",
            "object": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "A",
                "optional": false,
                "typeAnnotation": null,
                "start": 128,
                "end": 129
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "prototype",
                "optional": false,
                "typeAnnotation": null,
                "start": 130,
                "end": 139
              },
              "optional": false,
              "computed": false,
              "start": 128,
              "end": 139
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "z",
              "optional": false,
              "typeAnnotation": null,
              "start": 140,
              "end": 141
            },
            "optional": false,
            "computed": false,
            "start": 128,
            "end": 141
          },
          "right": {
            "type": "FunctionExpression",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "f",
              "optional": false,
              "typeAnnotation": null,
              "start": 153,
              "end": 154
            },
            "generator": false,
            "async": false,
            "declare": false,
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "n",
                "optional": false,
                "typeAnnotation": null,
                "start": 155,
                "end": 156
              }
            ],
            "returnType": null,
            "body": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ReturnStatement",
                  "argument": {
                    "type": "BinaryExpression",
                    "left": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "n",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 171,
                      "end": 172
                    },
                    "operator": "+",
                    "right": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "ThisExpression",
                        "start": 175,
                        "end": 179
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 180,
                        "end": 181
                      },
                      "optional": false,
                      "computed": false,
                      "start": 175,
                      "end": 181
                    },
                    "start": 171,
                    "end": 181
                  },
                  "start": 164,
                  "end": 181
                }
              ],
              "start": 158,
              "end": 183
            },
            "expression": false,
            "start": 144,
            "end": 183
          },
          "start": 128,
          "end": 183
        },
        "start": 112,
        "end": 183
      },
      "directive": null,
      "start": 112,
      "end": 183
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
            "name": "A",
            "optional": false,
            "typeAnnotation": null,
            "start": 209,
            "end": 210
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "s",
            "optional": false,
            "typeAnnotation": null,
            "start": 211,
            "end": 212
          },
          "optional": false,
          "computed": false,
          "start": 209,
          "end": 212
        },
        "right": {
          "type": "AssignmentExpression",
          "operator": "=",
          "left": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "A",
              "optional": false,
              "typeAnnotation": null,
              "start": 215,
              "end": 216
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "t",
              "optional": false,
              "typeAnnotation": null,
              "start": 217,
              "end": 218
            },
            "optional": false,
            "computed": false,
            "start": 215,
            "end": 218
          },
          "right": {
            "type": "FunctionExpression",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "g",
              "optional": false,
              "typeAnnotation": null,
              "start": 230,
              "end": 231
            },
            "generator": false,
            "async": false,
            "declare": false,
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "m",
                "optional": false,
                "typeAnnotation": null,
                "start": 232,
                "end": 233
              }
            ],
            "returnType": null,
            "body": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ReturnStatement",
                  "argument": {
                    "type": "BinaryExpression",
                    "left": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "m",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 248,
                      "end": 249
                    },
                    "operator": "+",
                    "right": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "ThisExpression",
                        "start": 252,
                        "end": 256
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 257,
                        "end": 258
                      },
                      "optional": false,
                      "computed": false,
                      "start": 252,
                      "end": 258
                    },
                    "start": 248,
                    "end": 258
                  },
                  "start": 241,
                  "end": 258
                }
              ],
              "start": 235,
              "end": 260
            },
            "expression": false,
            "start": 221,
            "end": 260
          },
          "start": 215,
          "end": 260
        },
        "start": 209,
        "end": 260
      },
      "directive": null,
      "start": 209,
      "end": 260
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
            "start": 265,
            "end": 266
          },
          "init": {
            "type": "NewExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "A",
              "optional": false,
              "typeAnnotation": null,
              "start": 273,
              "end": 274
            },
            "typeArguments": null,
            "arguments": [],
            "start": 269,
            "end": 276
          },
          "definite": false,
          "start": 265,
          "end": 276
        }
      ],
      "declare": false,
      "start": 261,
      "end": 276
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
            "name": "a",
            "optional": false,
            "typeAnnotation": null,
            "start": 277,
            "end": 278
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "y",
            "optional": false,
            "typeAnnotation": null,
            "start": 279,
            "end": 280
          },
          "optional": false,
          "computed": false,
          "start": 277,
          "end": 280
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "value": "no",
            "raw": "'no'",
            "start": 281,
            "end": 285
          }
        ],
        "optional": false,
        "start": 277,
        "end": 286
      },
      "directive": null,
      "start": 277,
      "end": 286
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
            "name": "a",
            "optional": false,
            "typeAnnotation": null,
            "start": 296,
            "end": 297
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "z",
            "optional": false,
            "typeAnnotation": null,
            "start": 298,
            "end": 299
          },
          "optional": false,
          "computed": false,
          "start": 296,
          "end": 299
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "value": "not really",
            "raw": "'not really'",
            "start": 300,
            "end": 312
          }
        ],
        "optional": false,
        "start": 296,
        "end": 313
      },
      "directive": null,
      "start": 296,
      "end": 313
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
            "name": "A",
            "optional": false,
            "typeAnnotation": null,
            "start": 323,
            "end": 324
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "s",
            "optional": false,
            "typeAnnotation": null,
            "start": 325,
            "end": 326
          },
          "optional": false,
          "computed": false,
          "start": 323,
          "end": 326
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "value": "still no",
            "raw": "'still no'",
            "start": 327,
            "end": 337
          }
        ],
        "optional": false,
        "start": 323,
        "end": 338
      },
      "directive": null,
      "start": 323,
      "end": 338
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
            "name": "A",
            "optional": false,
            "typeAnnotation": null,
            "start": 348,
            "end": 349
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "t",
            "optional": false,
            "typeAnnotation": null,
            "start": 350,
            "end": 351
          },
          "optional": false,
          "computed": false,
          "start": 348,
          "end": 351
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "value": "not here either",
            "raw": "'not here either'",
            "start": 352,
            "end": 369
          }
        ],
        "optional": false,
        "start": 348,
        "end": 370
      },
      "directive": null,
      "start": 348,
      "end": 370
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
            "name": "a",
            "optional": false,
            "typeAnnotation": null,
            "start": 380,
            "end": 381
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "first",
            "optional": false,
            "typeAnnotation": null,
            "start": 382,
            "end": 387
          },
          "optional": false,
          "computed": false,
          "start": 380,
          "end": 387
        },
        "right": {
          "type": "Literal",
          "value": 10,
          "raw": "10",
          "start": 390,
          "end": 392
        },
        "start": 380,
        "end": 392
      },
      "directive": null,
      "start": 380,
      "end": 392
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 431
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
    "value": "A",
    "start": 9,
    "end": 10
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 11,
    "end": 12
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 12,
    "end": 13
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 14,
    "end": 15
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 20,
    "end": 24
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 24,
    "end": 25
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 25,
    "end": 26
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 27,
    "end": 28
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 29,
    "end": 30
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 56,
    "end": 60
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 60,
    "end": 61
  },
  {
    "type": "Identifier",
    "value": "first",
    "start": 61,
    "end": 66
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 67,
    "end": 68
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 69,
    "end": 73
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 73,
    "end": 74
  },
  {
    "type": "Identifier",
    "value": "second",
    "start": 74,
    "end": 80
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 81,
    "end": 82
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 83,
    "end": 84
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 85,
    "end": 86
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 112,
    "end": 113
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 113,
    "end": 114
  },
  {
    "type": "Identifier",
    "value": "prototype",
    "start": 114,
    "end": 123
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 123,
    "end": 124
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 124,
    "end": 125
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 126,
    "end": 127
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 128,
    "end": 129
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 129,
    "end": 130
  },
  {
    "type": "Identifier",
    "value": "prototype",
    "start": 130,
    "end": 139
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 139,
    "end": 140
  },
  {
    "type": "Identifier",
    "value": "z",
    "start": 140,
    "end": 141
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 142,
    "end": 143
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 144,
    "end": 152
  },
  {
    "type": "Identifier",
    "value": "f",
    "start": 153,
    "end": 154
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 154,
    "end": 155
  },
  {
    "type": "Identifier",
    "value": "n",
    "start": 155,
    "end": 156
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 156,
    "end": 157
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 158,
    "end": 159
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 164,
    "end": 170
  },
  {
    "type": "Identifier",
    "value": "n",
    "start": 171,
    "end": 172
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 173,
    "end": 174
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 175,
    "end": 179
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 179,
    "end": 180
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 180,
    "end": 181
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 182,
    "end": 183
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 209,
    "end": 210
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 210,
    "end": 211
  },
  {
    "type": "Identifier",
    "value": "s",
    "start": 211,
    "end": 212
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 213,
    "end": 214
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 215,
    "end": 216
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 216,
    "end": 217
  },
  {
    "type": "Identifier",
    "value": "t",
    "start": 217,
    "end": 218
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 219,
    "end": 220
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 221,
    "end": 229
  },
  {
    "type": "Identifier",
    "value": "g",
    "start": 230,
    "end": 231
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 231,
    "end": 232
  },
  {
    "type": "Identifier",
    "value": "m",
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
    "value": "{",
    "start": 235,
    "end": 236
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 241,
    "end": 247
  },
  {
    "type": "Identifier",
    "value": "m",
    "start": 248,
    "end": 249
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 250,
    "end": 251
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 252,
    "end": 256
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 256,
    "end": 257
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 257,
    "end": 258
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 259,
    "end": 260
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 261,
    "end": 264
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 265,
    "end": 266
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 267,
    "end": 268
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 269,
    "end": 272
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 273,
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
    "type": "Identifier",
    "value": "a",
    "start": 277,
    "end": 278
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 278,
    "end": 279
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 279,
    "end": 280
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 280,
    "end": 281
  },
  {
    "type": "String",
    "value": "'no'",
    "start": 281,
    "end": 285
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 285,
    "end": 286
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 296,
    "end": 297
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 297,
    "end": 298
  },
  {
    "type": "Identifier",
    "value": "z",
    "start": 298,
    "end": 299
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 299,
    "end": 300
  },
  {
    "type": "String",
    "value": "'not really'",
    "start": 300,
    "end": 312
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 312,
    "end": 313
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 323,
    "end": 324
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 324,
    "end": 325
  },
  {
    "type": "Identifier",
    "value": "s",
    "start": 325,
    "end": 326
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 326,
    "end": 327
  },
  {
    "type": "String",
    "value": "'still no'",
    "start": 327,
    "end": 337
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 337,
    "end": 338
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 348,
    "end": 349
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 349,
    "end": 350
  },
  {
    "type": "Identifier",
    "value": "t",
    "start": 350,
    "end": 351
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 351,
    "end": 352
  },
  {
    "type": "String",
    "value": "'not here either'",
    "start": 352,
    "end": 369
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 369,
    "end": 370
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 380,
    "end": 381
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 381,
    "end": 382
  },
  {
    "type": "Identifier",
    "value": "first",
    "start": 382,
    "end": 387
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 388,
    "end": 389
  },
  {
    "type": "Numeric",
    "value": "10",
    "start": 390,
    "end": 392
  }
]
```
