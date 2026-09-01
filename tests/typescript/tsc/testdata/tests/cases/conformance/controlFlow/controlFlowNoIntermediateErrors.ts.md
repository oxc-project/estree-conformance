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
        "start": 32,
        "end": 34
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
                  "name": "code",
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
                            "start": 53,
                            "end": 54
                          },
                          "start": 53,
                          "end": 54
                        },
                        {
                          "type": "TSLiteralType",
                          "literal": {
                            "type": "Literal",
                            "value": 1,
                            "raw": "1",
                            "start": 57,
                            "end": 58
                          },
                          "start": 57,
                          "end": 58
                        },
                        {
                          "type": "TSLiteralType",
                          "literal": {
                            "type": "Literal",
                            "value": 2,
                            "raw": "2",
                            "start": 61,
                            "end": 62
                          },
                          "start": 61,
                          "end": 62
                        }
                      ],
                      "start": 53,
                      "end": 62
                    },
                    "start": 51,
                    "end": 62
                  },
                  "start": 47,
                  "end": 62
                },
                "init": {
                  "type": "Literal",
                  "value": 0,
                  "raw": "0",
                  "start": 65,
                  "end": 66
                },
                "definite": false,
                "start": 47,
                "end": 66
              }
            ],
            "declare": false,
            "start": 43,
            "end": 67
          },
          {
            "type": "VariableDeclaration",
            "kind": "const",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "otherCodes",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSArrayType",
                      "elementType": {
                        "type": "TSUnionType",
                        "types": [
                          {
                            "type": "TSLiteralType",
                            "literal": {
                              "type": "Literal",
                              "value": 0,
                              "raw": "0",
                              "start": 91,
                              "end": 92
                            },
                            "start": 91,
                            "end": 92
                          },
                          {
                            "type": "TSLiteralType",
                            "literal": {
                              "type": "Literal",
                              "value": 1,
                              "raw": "1",
                              "start": 95,
                              "end": 96
                            },
                            "start": 95,
                            "end": 96
                          },
                          {
                            "type": "TSLiteralType",
                            "literal": {
                              "type": "Literal",
                              "value": 2,
                              "raw": "2",
                              "start": 99,
                              "end": 100
                            },
                            "start": 99,
                            "end": 100
                          }
                        ],
                        "start": 91,
                        "end": 100
                      },
                      "start": 90,
                      "end": 103
                    },
                    "start": 88,
                    "end": 103
                  },
                  "start": 78,
                  "end": 103
                },
                "init": {
                  "type": "ArrayExpression",
                  "elements": [
                    {
                      "type": "Literal",
                      "value": 2,
                      "raw": "2",
                      "start": 107,
                      "end": 108
                    },
                    {
                      "type": "Literal",
                      "value": 0,
                      "raw": "0",
                      "start": 110,
                      "end": 111
                    },
                    {
                      "type": "Literal",
                      "value": 1,
                      "raw": "1",
                      "start": 113,
                      "end": 114
                    },
                    {
                      "type": "Literal",
                      "value": 0,
                      "raw": "0",
                      "start": 116,
                      "end": 117
                    },
                    {
                      "type": "Literal",
                      "value": 2,
                      "raw": "2",
                      "start": 119,
                      "end": 120
                    },
                    {
                      "type": "Literal",
                      "value": 2,
                      "raw": "2",
                      "start": 122,
                      "end": 123
                    },
                    {
                      "type": "Literal",
                      "value": 2,
                      "raw": "2",
                      "start": 125,
                      "end": 126
                    },
                    {
                      "type": "Literal",
                      "value": 0,
                      "raw": "0",
                      "start": 128,
                      "end": 129
                    },
                    {
                      "type": "Literal",
                      "value": 1,
                      "raw": "1",
                      "start": 131,
                      "end": 132
                    },
                    {
                      "type": "Literal",
                      "value": 0,
                      "raw": "0",
                      "start": 134,
                      "end": 135
                    },
                    {
                      "type": "Literal",
                      "value": 2,
                      "raw": "2",
                      "start": 137,
                      "end": 138
                    },
                    {
                      "type": "Literal",
                      "value": 1,
                      "raw": "1",
                      "start": 140,
                      "end": 141
                    },
                    {
                      "type": "Literal",
                      "value": 1,
                      "raw": "1",
                      "start": 143,
                      "end": 144
                    },
                    {
                      "type": "Literal",
                      "value": 0,
                      "raw": "0",
                      "start": 146,
                      "end": 147
                    },
                    {
                      "type": "Literal",
                      "value": 2,
                      "raw": "2",
                      "start": 149,
                      "end": 150
                    },
                    {
                      "type": "Literal",
                      "value": 1,
                      "raw": "1",
                      "start": 152,
                      "end": 153
                    }
                  ],
                  "start": 106,
                  "end": 154
                },
                "definite": false,
                "start": 78,
                "end": 154
              }
            ],
            "declare": false,
            "start": 72,
            "end": 155
          },
          {
            "type": "ForOfStatement",
            "await": false,
            "left": {
              "type": "VariableDeclaration",
              "kind": "const",
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "id": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "code2",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 171,
                    "end": 176
                  },
                  "init": null,
                  "definite": false,
                  "start": 171,
                  "end": 176
                }
              ],
              "declare": false,
              "start": 165,
              "end": 176
            },
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "otherCodes",
              "optional": false,
              "typeAnnotation": null,
              "start": 180,
              "end": 190
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
                      "name": "code2",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 206,
                      "end": 211
                    },
                    "operator": "===",
                    "right": {
                      "type": "Literal",
                      "value": 0,
                      "raw": "0",
                      "start": 216,
                      "end": 217
                    },
                    "start": 206,
                    "end": 217
                  },
                  "consequent": {
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
                            "name": "code",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 241,
                            "end": 245
                          },
                          "right": {
                            "type": "ConditionalExpression",
                            "test": {
                              "type": "BinaryExpression",
                              "left": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "code",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 248,
                                "end": 252
                              },
                              "operator": "===",
                              "right": {
                                "type": "Literal",
                                "value": 2,
                                "raw": "2",
                                "start": 257,
                                "end": 258
                              },
                              "start": 248,
                              "end": 258
                            },
                            "consequent": {
                              "type": "Literal",
                              "value": 1,
                              "raw": "1",
                              "start": 261,
                              "end": 262
                            },
                            "alternate": {
                              "type": "Literal",
                              "value": 0,
                              "raw": "0",
                              "start": 265,
                              "end": 266
                            },
                            "start": 248,
                            "end": 266
                          },
                          "start": 241,
                          "end": 266
                        },
                        "directive": null,
                        "start": 241,
                        "end": 267
                      }
                    ],
                    "start": 219,
                    "end": 277
                  },
                  "alternate": {
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
                            "name": "code",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 305,
                            "end": 309
                          },
                          "right": {
                            "type": "Literal",
                            "value": 2,
                            "raw": "2",
                            "start": 312,
                            "end": 313
                          },
                          "start": 305,
                          "end": 313
                        },
                        "directive": null,
                        "start": 305,
                        "end": 314
                      }
                    ],
                    "start": 291,
                    "end": 324
                  },
                  "start": 202,
                  "end": 324
                }
              ],
              "start": 192,
              "end": 330
            },
            "start": 160,
            "end": 330
          }
        ],
        "start": 37,
        "end": 332
      },
      "expression": false,
      "start": 23,
      "end": 332
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f2",
        "optional": false,
        "typeAnnotation": null,
        "start": 343,
        "end": 345
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
                  "name": "code",
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
                            "start": 364,
                            "end": 365
                          },
                          "start": 364,
                          "end": 365
                        },
                        {
                          "type": "TSLiteralType",
                          "literal": {
                            "type": "Literal",
                            "value": 1,
                            "raw": "1",
                            "start": 368,
                            "end": 369
                          },
                          "start": 368,
                          "end": 369
                        }
                      ],
                      "start": 364,
                      "end": 369
                    },
                    "start": 362,
                    "end": 369
                  },
                  "start": 358,
                  "end": 369
                },
                "init": {
                  "type": "Literal",
                  "value": 0,
                  "raw": "0",
                  "start": 372,
                  "end": 373
                },
                "definite": false,
                "start": 358,
                "end": 373
              }
            ],
            "declare": false,
            "start": 354,
            "end": 374
          },
          {
            "type": "WhileStatement",
            "test": {
              "type": "Literal",
              "value": true,
              "raw": "true",
              "start": 386,
              "end": 390
            },
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
                      "name": "code",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 402,
                      "end": 406
                    },
                    "right": {
                      "type": "ConditionalExpression",
                      "test": {
                        "type": "BinaryExpression",
                        "left": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "code",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 409,
                          "end": 413
                        },
                        "operator": "===",
                        "right": {
                          "type": "Literal",
                          "value": 1,
                          "raw": "1",
                          "start": 418,
                          "end": 419
                        },
                        "start": 409,
                        "end": 419
                      },
                      "consequent": {
                        "type": "Literal",
                        "value": 0,
                        "raw": "0",
                        "start": 422,
                        "end": 423
                      },
                      "alternate": {
                        "type": "Literal",
                        "value": 1,
                        "raw": "1",
                        "start": 426,
                        "end": 427
                      },
                      "start": 409,
                      "end": 427
                    },
                    "start": 402,
                    "end": 427
                  },
                  "directive": null,
                  "start": 402,
                  "end": 428
                }
              ],
              "start": 392,
              "end": 434
            },
            "start": 379,
            "end": 434
          }
        ],
        "start": 348,
        "end": 436
      },
      "expression": false,
      "start": 334,
      "end": 436
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 23,
  "end": 436
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "function",
    "start": 23,
    "end": 31
  },
  {
    "type": "Identifier",
    "value": "f1",
    "start": 32,
    "end": 34
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 34,
    "end": 35
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 35,
    "end": 36
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 37,
    "end": 38
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 43,
    "end": 46
  },
  {
    "type": "Identifier",
    "value": "code",
    "start": 47,
    "end": 51
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 51,
    "end": 52
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 53,
    "end": 54
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 55,
    "end": 56
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 57,
    "end": 58
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 59,
    "end": 60
  },
  {
    "type": "Numeric",
    "value": "2",
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
    "type": "Numeric",
    "value": "0",
    "start": 65,
    "end": 66
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 66,
    "end": 67
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 72,
    "end": 77
  },
  {
    "type": "Identifier",
    "value": "otherCodes",
    "start": 78,
    "end": 88
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 88,
    "end": 89
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 90,
    "end": 91
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 91,
    "end": 92
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 93,
    "end": 94
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 95,
    "end": 96
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 97,
    "end": 98
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 99,
    "end": 100
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 100,
    "end": 101
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 101,
    "end": 102
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 102,
    "end": 103
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 104,
    "end": 105
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 106,
    "end": 107
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 107,
    "end": 108
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 108,
    "end": 109
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 110,
    "end": 111
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 111,
    "end": 112
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 113,
    "end": 114
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 114,
    "end": 115
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 116,
    "end": 117
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 117,
    "end": 118
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 119,
    "end": 120
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 120,
    "end": 121
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 122,
    "end": 123
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 123,
    "end": 124
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 125,
    "end": 126
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 126,
    "end": 127
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 128,
    "end": 129
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 129,
    "end": 130
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 131,
    "end": 132
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 132,
    "end": 133
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 134,
    "end": 135
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 135,
    "end": 136
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 137,
    "end": 138
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 138,
    "end": 139
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 140,
    "end": 141
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 141,
    "end": 142
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 143,
    "end": 144
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 144,
    "end": 145
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 146,
    "end": 147
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 147,
    "end": 148
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 149,
    "end": 150
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 150,
    "end": 151
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 152,
    "end": 153
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 153,
    "end": 154
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 154,
    "end": 155
  },
  {
    "type": "Keyword",
    "value": "for",
    "start": 160,
    "end": 163
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 164,
    "end": 165
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 165,
    "end": 170
  },
  {
    "type": "Identifier",
    "value": "code2",
    "start": 171,
    "end": 176
  },
  {
    "type": "Identifier",
    "value": "of",
    "start": 177,
    "end": 179
  },
  {
    "type": "Identifier",
    "value": "otherCodes",
    "start": 180,
    "end": 190
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 190,
    "end": 191
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 192,
    "end": 193
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 202,
    "end": 204
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 205,
    "end": 206
  },
  {
    "type": "Identifier",
    "value": "code2",
    "start": 206,
    "end": 211
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 212,
    "end": 215
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 216,
    "end": 217
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 217,
    "end": 218
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 219,
    "end": 220
  },
  {
    "type": "Identifier",
    "value": "code",
    "start": 241,
    "end": 245
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 246,
    "end": 247
  },
  {
    "type": "Identifier",
    "value": "code",
    "start": 248,
    "end": 252
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 253,
    "end": 256
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 257,
    "end": 258
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 259,
    "end": 260
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 261,
    "end": 262
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 263,
    "end": 264
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 265,
    "end": 266
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 266,
    "end": 267
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 276,
    "end": 277
  },
  {
    "type": "Keyword",
    "value": "else",
    "start": 286,
    "end": 290
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 291,
    "end": 292
  },
  {
    "type": "Identifier",
    "value": "code",
    "start": 305,
    "end": 309
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 310,
    "end": 311
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 312,
    "end": 313
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 313,
    "end": 314
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 323,
    "end": 324
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 329,
    "end": 330
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 331,
    "end": 332
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 334,
    "end": 342
  },
  {
    "type": "Identifier",
    "value": "f2",
    "start": 343,
    "end": 345
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 345,
    "end": 346
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 346,
    "end": 347
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 348,
    "end": 349
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 354,
    "end": 357
  },
  {
    "type": "Identifier",
    "value": "code",
    "start": 358,
    "end": 362
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 362,
    "end": 363
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 364,
    "end": 365
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 366,
    "end": 367
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 368,
    "end": 369
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 370,
    "end": 371
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 372,
    "end": 373
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 373,
    "end": 374
  },
  {
    "type": "Keyword",
    "value": "while",
    "start": 379,
    "end": 384
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 385,
    "end": 386
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 386,
    "end": 390
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 390,
    "end": 391
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 392,
    "end": 393
  },
  {
    "type": "Identifier",
    "value": "code",
    "start": 402,
    "end": 406
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 407,
    "end": 408
  },
  {
    "type": "Identifier",
    "value": "code",
    "start": 409,
    "end": 413
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 414,
    "end": 417
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 418,
    "end": 419
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 420,
    "end": 421
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 422,
    "end": 423
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 424,
    "end": 425
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 426,
    "end": 427
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 427,
    "end": 428
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 433,
    "end": 434
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 435,
    "end": 436
  }
]
```
