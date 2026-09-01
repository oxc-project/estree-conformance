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
            "name": "globalCounter",
            "optional": false,
            "typeAnnotation": null,
            "start": 4,
            "end": 17
          },
          "init": {
            "type": "Literal",
            "value": 0,
            "raw": "0",
            "start": 20,
            "end": 21
          },
          "definite": false,
          "start": 4,
          "end": 21
        }
      ],
      "declare": false,
      "start": 0,
      "end": 22
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "incrementIdx",
        "optional": false,
        "typeAnnotation": null,
        "start": 32,
        "end": 44
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "max",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSNumberKeyword",
              "start": 50,
              "end": 56
            },
            "start": 48,
            "end": 56
          },
          "start": 45,
          "end": 56
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
              "operator": "+=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "globalCounter",
                "optional": false,
                "typeAnnotation": null,
                "start": 64,
                "end": 77
              },
              "right": {
                "type": "Literal",
                "value": 1,
                "raw": "1",
                "start": 81,
                "end": 82
              },
              "start": 64,
              "end": 82
            },
            "directive": null,
            "start": 64,
            "end": 83
          },
          {
            "type": "VariableDeclaration",
            "kind": "let",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "idx",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 92,
                  "end": 95
                },
                "init": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Math",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 98,
                      "end": 102
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "floor",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 103,
                      "end": 108
                    },
                    "optional": false,
                    "computed": false,
                    "start": 98,
                    "end": 108
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "BinaryExpression",
                      "left": {
                        "type": "CallExpression",
                        "callee": {
                          "type": "MemberExpression",
                          "object": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "Math",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 109,
                            "end": 113
                          },
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "random",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 114,
                            "end": 120
                          },
                          "optional": false,
                          "computed": false,
                          "start": 109,
                          "end": 120
                        },
                        "typeArguments": null,
                        "arguments": [],
                        "optional": false,
                        "start": 109,
                        "end": 122
                      },
                      "operator": "*",
                      "right": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "max",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 125,
                        "end": 128
                      },
                      "start": 109,
                      "end": 128
                    }
                  ],
                  "optional": false,
                  "start": 98,
                  "end": 129
                },
                "definite": false,
                "start": 92,
                "end": 129
              }
            ],
            "declare": false,
            "start": 88,
            "end": 130
          },
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "Identifier",
              "decorators": [],
              "name": "idx",
              "optional": false,
              "typeAnnotation": null,
              "start": 142,
              "end": 145
            },
            "start": 135,
            "end": 146
          }
        ],
        "start": 58,
        "end": 148
      },
      "expression": false,
      "start": 23,
      "end": 148
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
            "name": "array1",
            "optional": false,
            "typeAnnotation": null,
            "start": 154,
            "end": 160
          },
          "init": {
            "type": "ArrayExpression",
            "elements": [
              {
                "type": "Literal",
                "value": 1,
                "raw": "1",
                "start": 164,
                "end": 165
              },
              {
                "type": "Literal",
                "value": 2,
                "raw": "2",
                "start": 167,
                "end": 168
              },
              {
                "type": "Literal",
                "value": 3,
                "raw": "3",
                "start": 170,
                "end": 171
              },
              {
                "type": "Literal",
                "value": 4,
                "raw": "4",
                "start": 173,
                "end": 174
              },
              {
                "type": "Literal",
                "value": 5,
                "raw": "5",
                "start": 176,
                "end": 177
              }
            ],
            "start": 163,
            "end": 178
          },
          "definite": false,
          "start": 154,
          "end": 178
        }
      ],
      "declare": false,
      "start": 150,
      "end": 179
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "**=",
        "left": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "array1",
            "optional": false,
            "typeAnnotation": null,
            "start": 181,
            "end": 187
          },
          "property": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "incrementIdx",
              "optional": false,
              "typeAnnotation": null,
              "start": 188,
              "end": 200
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "array1",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 201,
                  "end": 207
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "length",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 208,
                  "end": 214
                },
                "optional": false,
                "computed": false,
                "start": 201,
                "end": 214
              }
            ],
            "optional": false,
            "start": 188,
            "end": 215
          },
          "optional": false,
          "computed": true,
          "start": 181,
          "end": 216
        },
        "right": {
          "type": "Literal",
          "value": 3,
          "raw": "3",
          "start": 221,
          "end": 222
        },
        "start": 181,
        "end": 222
      },
      "directive": null,
      "start": 181,
      "end": 223
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "**=",
        "left": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "array1",
            "optional": false,
            "typeAnnotation": null,
            "start": 225,
            "end": 231
          },
          "property": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "incrementIdx",
              "optional": false,
              "typeAnnotation": null,
              "start": 232,
              "end": 244
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "array1",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 245,
                  "end": 251
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "length",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 252,
                  "end": 258
                },
                "optional": false,
                "computed": false,
                "start": 245,
                "end": 258
              }
            ],
            "optional": false,
            "start": 232,
            "end": 259
          },
          "optional": false,
          "computed": true,
          "start": 225,
          "end": 260
        },
        "right": {
          "type": "AssignmentExpression",
          "operator": "**=",
          "left": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "array1",
              "optional": false,
              "typeAnnotation": null,
              "start": 265,
              "end": 271
            },
            "property": {
              "type": "CallExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "incrementIdx",
                "optional": false,
                "typeAnnotation": null,
                "start": 272,
                "end": 284
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "array1",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 285,
                    "end": 291
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "length",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 292,
                    "end": 298
                  },
                  "optional": false,
                  "computed": false,
                  "start": 285,
                  "end": 298
                }
              ],
              "optional": false,
              "start": 272,
              "end": 299
            },
            "optional": false,
            "computed": true,
            "start": 265,
            "end": 300
          },
          "right": {
            "type": "Literal",
            "value": 2,
            "raw": "2",
            "start": 305,
            "end": 306
          },
          "start": 265,
          "end": 306
        },
        "start": 225,
        "end": 306
      },
      "directive": null,
      "start": 225,
      "end": 307
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "**=",
        "left": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "array1",
            "optional": false,
            "typeAnnotation": null,
            "start": 309,
            "end": 315
          },
          "property": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "incrementIdx",
              "optional": false,
              "typeAnnotation": null,
              "start": 316,
              "end": 328
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "array1",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 329,
                  "end": 335
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "length",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 336,
                  "end": 342
                },
                "optional": false,
                "computed": false,
                "start": 329,
                "end": 342
              }
            ],
            "optional": false,
            "start": 316,
            "end": 343
          },
          "optional": false,
          "computed": true,
          "start": 309,
          "end": 344
        },
        "right": {
          "type": "BinaryExpression",
          "left": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "array1",
              "optional": false,
              "typeAnnotation": null,
              "start": 349,
              "end": 355
            },
            "property": {
              "type": "CallExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "incrementIdx",
                "optional": false,
                "typeAnnotation": null,
                "start": 356,
                "end": 368
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "array1",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 369,
                    "end": 375
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "length",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 376,
                    "end": 382
                  },
                  "optional": false,
                  "computed": false,
                  "start": 369,
                  "end": 382
                }
              ],
              "optional": false,
              "start": 356,
              "end": 383
            },
            "optional": false,
            "computed": true,
            "start": 349,
            "end": 384
          },
          "operator": "**",
          "right": {
            "type": "Literal",
            "value": 2,
            "raw": "2",
            "start": 388,
            "end": 389
          },
          "start": 349,
          "end": 389
        },
        "start": 309,
        "end": 389
      },
      "directive": null,
      "start": 309,
      "end": 390
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 390
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
    "value": "globalCounter",
    "start": 4,
    "end": 17
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 18,
    "end": 19
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 20,
    "end": 21
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 21,
    "end": 22
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 23,
    "end": 31
  },
  {
    "type": "Identifier",
    "value": "incrementIdx",
    "start": 32,
    "end": 44
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 44,
    "end": 45
  },
  {
    "type": "Identifier",
    "value": "max",
    "start": 45,
    "end": 48
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 48,
    "end": 49
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 50,
    "end": 56
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 56,
    "end": 57
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 58,
    "end": 59
  },
  {
    "type": "Identifier",
    "value": "globalCounter",
    "start": 64,
    "end": 77
  },
  {
    "type": "Punctuator",
    "value": "+=",
    "start": 78,
    "end": 80
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 81,
    "end": 82
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 82,
    "end": 83
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 88,
    "end": 91
  },
  {
    "type": "Identifier",
    "value": "idx",
    "start": 92,
    "end": 95
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 96,
    "end": 97
  },
  {
    "type": "Identifier",
    "value": "Math",
    "start": 98,
    "end": 102
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 102,
    "end": 103
  },
  {
    "type": "Identifier",
    "value": "floor",
    "start": 103,
    "end": 108
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 108,
    "end": 109
  },
  {
    "type": "Identifier",
    "value": "Math",
    "start": 109,
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
    "value": "random",
    "start": 114,
    "end": 120
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 120,
    "end": 121
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 121,
    "end": 122
  },
  {
    "type": "Punctuator",
    "value": "*",
    "start": 123,
    "end": 124
  },
  {
    "type": "Identifier",
    "value": "max",
    "start": 125,
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
    "value": ";",
    "start": 129,
    "end": 130
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 135,
    "end": 141
  },
  {
    "type": "Identifier",
    "value": "idx",
    "start": 142,
    "end": 145
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 145,
    "end": 146
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 147,
    "end": 148
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 150,
    "end": 153
  },
  {
    "type": "Identifier",
    "value": "array1",
    "start": 154,
    "end": 160
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 161,
    "end": 162
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 163,
    "end": 164
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 164,
    "end": 165
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 165,
    "end": 166
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 167,
    "end": 168
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 168,
    "end": 169
  },
  {
    "type": "Numeric",
    "value": "3",
    "start": 170,
    "end": 171
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 171,
    "end": 172
  },
  {
    "type": "Numeric",
    "value": "4",
    "start": 173,
    "end": 174
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 174,
    "end": 175
  },
  {
    "type": "Numeric",
    "value": "5",
    "start": 176,
    "end": 177
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 177,
    "end": 178
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 178,
    "end": 179
  },
  {
    "type": "Identifier",
    "value": "array1",
    "start": 181,
    "end": 187
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 187,
    "end": 188
  },
  {
    "type": "Identifier",
    "value": "incrementIdx",
    "start": 188,
    "end": 200
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 200,
    "end": 201
  },
  {
    "type": "Identifier",
    "value": "array1",
    "start": 201,
    "end": 207
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 207,
    "end": 208
  },
  {
    "type": "Identifier",
    "value": "length",
    "start": 208,
    "end": 214
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 214,
    "end": 215
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 215,
    "end": 216
  },
  {
    "type": "Punctuator",
    "value": "**=",
    "start": 217,
    "end": 220
  },
  {
    "type": "Numeric",
    "value": "3",
    "start": 221,
    "end": 222
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 222,
    "end": 223
  },
  {
    "type": "Identifier",
    "value": "array1",
    "start": 225,
    "end": 231
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 231,
    "end": 232
  },
  {
    "type": "Identifier",
    "value": "incrementIdx",
    "start": 232,
    "end": 244
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 244,
    "end": 245
  },
  {
    "type": "Identifier",
    "value": "array1",
    "start": 245,
    "end": 251
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 251,
    "end": 252
  },
  {
    "type": "Identifier",
    "value": "length",
    "start": 252,
    "end": 258
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 258,
    "end": 259
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 259,
    "end": 260
  },
  {
    "type": "Punctuator",
    "value": "**=",
    "start": 261,
    "end": 264
  },
  {
    "type": "Identifier",
    "value": "array1",
    "start": 265,
    "end": 271
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 271,
    "end": 272
  },
  {
    "type": "Identifier",
    "value": "incrementIdx",
    "start": 272,
    "end": 284
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 284,
    "end": 285
  },
  {
    "type": "Identifier",
    "value": "array1",
    "start": 285,
    "end": 291
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 291,
    "end": 292
  },
  {
    "type": "Identifier",
    "value": "length",
    "start": 292,
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
    "value": "]",
    "start": 299,
    "end": 300
  },
  {
    "type": "Punctuator",
    "value": "**=",
    "start": 301,
    "end": 304
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 305,
    "end": 306
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 306,
    "end": 307
  },
  {
    "type": "Identifier",
    "value": "array1",
    "start": 309,
    "end": 315
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 315,
    "end": 316
  },
  {
    "type": "Identifier",
    "value": "incrementIdx",
    "start": 316,
    "end": 328
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 328,
    "end": 329
  },
  {
    "type": "Identifier",
    "value": "array1",
    "start": 329,
    "end": 335
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 335,
    "end": 336
  },
  {
    "type": "Identifier",
    "value": "length",
    "start": 336,
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
    "value": "]",
    "start": 343,
    "end": 344
  },
  {
    "type": "Punctuator",
    "value": "**=",
    "start": 345,
    "end": 348
  },
  {
    "type": "Identifier",
    "value": "array1",
    "start": 349,
    "end": 355
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 355,
    "end": 356
  },
  {
    "type": "Identifier",
    "value": "incrementIdx",
    "start": 356,
    "end": 368
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 368,
    "end": 369
  },
  {
    "type": "Identifier",
    "value": "array1",
    "start": 369,
    "end": 375
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 375,
    "end": 376
  },
  {
    "type": "Identifier",
    "value": "length",
    "start": 376,
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
    "value": "]",
    "start": 383,
    "end": 384
  },
  {
    "type": "Punctuator",
    "value": "**",
    "start": 385,
    "end": 387
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 388,
    "end": 389
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 389,
    "end": 390
  }
]
```
