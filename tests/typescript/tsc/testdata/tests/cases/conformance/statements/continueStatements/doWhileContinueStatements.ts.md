__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "DoWhileStatement",
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ContinueStatement",
            "label": null,
            "start": 9,
            "end": 18
          }
        ],
        "start": 3,
        "end": 20
      },
      "test": {
        "type": "Literal",
        "value": true,
        "raw": "true",
        "start": 27,
        "end": 31
      },
      "start": 0,
      "end": 32
    },
    {
      "type": "LabeledStatement",
      "label": {
        "type": "Identifier",
        "decorators": [],
        "name": "ONE",
        "optional": false,
        "typeAnnotation": null,
        "start": 34,
        "end": 37
      },
      "body": {
        "type": "DoWhileStatement",
        "body": {
          "type": "BlockStatement",
          "body": [
            {
              "type": "ContinueStatement",
              "label": {
                "type": "Identifier",
                "decorators": [],
                "name": "ONE",
                "optional": false,
                "typeAnnotation": null,
                "start": 57,
                "end": 60
              },
              "start": 48,
              "end": 61
            }
          ],
          "start": 42,
          "end": 63
        },
        "test": {
          "type": "Literal",
          "value": true,
          "raw": "true",
          "start": 71,
          "end": 75
        },
        "start": 39,
        "end": 76
      },
      "start": 34,
      "end": 76
    },
    {
      "type": "LabeledStatement",
      "label": {
        "type": "Identifier",
        "decorators": [],
        "name": "TWO",
        "optional": false,
        "typeAnnotation": null,
        "start": 78,
        "end": 81
      },
      "body": {
        "type": "LabeledStatement",
        "label": {
          "type": "Identifier",
          "decorators": [],
          "name": "THREE",
          "optional": false,
          "typeAnnotation": null,
          "start": 83,
          "end": 88
        },
        "body": {
          "type": "DoWhileStatement",
          "body": {
            "type": "BlockStatement",
            "body": [
              {
                "type": "ContinueStatement",
                "label": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "THREE",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 108,
                  "end": 113
                },
                "start": 99,
                "end": 114
              }
            ],
            "start": 93,
            "end": 116
          },
          "test": {
            "type": "Literal",
            "value": true,
            "raw": "true",
            "start": 123,
            "end": 127
          },
          "start": 90,
          "end": 128
        },
        "start": 83,
        "end": 128
      },
      "start": 78,
      "end": 128
    },
    {
      "type": "LabeledStatement",
      "label": {
        "type": "Identifier",
        "decorators": [],
        "name": "FOUR",
        "optional": false,
        "typeAnnotation": null,
        "start": 130,
        "end": 134
      },
      "body": {
        "type": "DoWhileStatement",
        "body": {
          "type": "BlockStatement",
          "body": [
            {
              "type": "LabeledStatement",
              "label": {
                "type": "Identifier",
                "decorators": [],
                "name": "FIVE",
                "optional": false,
                "typeAnnotation": null,
                "start": 145,
                "end": 149
              },
              "body": {
                "type": "DoWhileStatement",
                "body": {
                  "type": "BlockStatement",
                  "body": [
                    {
                      "type": "ContinueStatement",
                      "label": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "FOUR",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 177,
                        "end": 181
                      },
                      "start": 168,
                      "end": 182
                    }
                  ],
                  "start": 158,
                  "end": 188
                },
                "test": {
                  "type": "Literal",
                  "value": true,
                  "raw": "true",
                  "start": 195,
                  "end": 199
                },
                "start": 155,
                "end": 200
              },
              "start": 145,
              "end": 200
            }
          ],
          "start": 139,
          "end": 202
        },
        "test": {
          "type": "Literal",
          "value": true,
          "raw": "true",
          "start": 209,
          "end": 213
        },
        "start": 136,
        "end": 214
      },
      "start": 130,
      "end": 214
    },
    {
      "type": "DoWhileStatement",
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "LabeledStatement",
            "label": {
              "type": "Identifier",
              "decorators": [],
              "name": "SIX",
              "optional": false,
              "typeAnnotation": null,
              "start": 225,
              "end": 228
            },
            "body": {
              "type": "DoWhileStatement",
              "body": {
                "type": "ContinueStatement",
                "label": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "SIX",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 246,
                  "end": 249
                },
                "start": 237,
                "end": 250
              },
              "test": {
                "type": "Literal",
                "value": true,
                "raw": "true",
                "start": 257,
                "end": 261
              },
              "start": 234,
              "end": 262
            },
            "start": 225,
            "end": 262
          }
        ],
        "start": 219,
        "end": 264
      },
      "test": {
        "type": "Literal",
        "value": true,
        "raw": "true",
        "start": 271,
        "end": 275
      },
      "start": 216,
      "end": 276
    },
    {
      "type": "LabeledStatement",
      "label": {
        "type": "Identifier",
        "decorators": [],
        "name": "SEVEN",
        "optional": false,
        "typeAnnotation": null,
        "start": 278,
        "end": 283
      },
      "body": {
        "type": "DoWhileStatement",
        "body": {
          "type": "DoWhileStatement",
          "body": {
            "type": "DoWhileStatement",
            "body": {
              "type": "ContinueStatement",
              "label": {
                "type": "Identifier",
                "decorators": [],
                "name": "SEVEN",
                "optional": false,
                "typeAnnotation": null,
                "start": 303,
                "end": 308
              },
              "start": 294,
              "end": 309
            },
            "test": {
              "type": "Literal",
              "value": true,
              "raw": "true",
              "start": 317,
              "end": 321
            },
            "start": 291,
            "end": 322
          },
          "test": {
            "type": "Literal",
            "value": true,
            "raw": "true",
            "start": 330,
            "end": 334
          },
          "start": 288,
          "end": 335
        },
        "test": {
          "type": "Literal",
          "value": true,
          "raw": "true",
          "start": 344,
          "end": 348
        },
        "start": 285,
        "end": 349
      },
      "start": 278,
      "end": 349
    },
    {
      "type": "LabeledStatement",
      "label": {
        "type": "Identifier",
        "decorators": [],
        "name": "EIGHT",
        "optional": false,
        "typeAnnotation": null,
        "start": 351,
        "end": 356
      },
      "body": {
        "type": "DoWhileStatement",
        "body": {
          "type": "BlockStatement",
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
                    "name": "fn",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 370,
                    "end": 372
                  },
                  "init": {
                    "type": "FunctionExpression",
                    "id": null,
                    "generator": false,
                    "async": false,
                    "declare": false,
                    "typeParameters": null,
                    "params": [],
                    "returnType": null,
                    "body": {
                      "type": "BlockStatement",
                      "body": [],
                      "start": 387,
                      "end": 390
                    },
                    "expression": false,
                    "start": 375,
                    "end": 390
                  },
                  "definite": false,
                  "start": 370,
                  "end": 390
                }
              ],
              "declare": false,
              "start": 366,
              "end": 390
            },
            {
              "type": "ContinueStatement",
              "label": {
                "type": "Identifier",
                "decorators": [],
                "name": "EIGHT",
                "optional": false,
                "typeAnnotation": null,
                "start": 404,
                "end": 409
              },
              "start": 395,
              "end": 410
            }
          ],
          "start": 360,
          "end": 412
        },
        "test": {
          "type": "Literal",
          "value": true,
          "raw": "true",
          "start": 418,
          "end": 422
        },
        "start": 358,
        "end": 423
      },
      "start": 351,
      "end": 423
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 423
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "do",
    "start": 0,
    "end": 2
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3,
    "end": 4
  },
  {
    "type": "Keyword",
    "value": "continue",
    "start": 9,
    "end": 17
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 17,
    "end": 18
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 19,
    "end": 20
  },
  {
    "type": "Keyword",
    "value": "while",
    "start": 21,
    "end": 26
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 26,
    "end": 27
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 27,
    "end": 31
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 31,
    "end": 32
  },
  {
    "type": "Identifier",
    "value": "ONE",
    "start": 34,
    "end": 37
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 37,
    "end": 38
  },
  {
    "type": "Keyword",
    "value": "do",
    "start": 39,
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
    "value": "continue",
    "start": 48,
    "end": 56
  },
  {
    "type": "Identifier",
    "value": "ONE",
    "start": 57,
    "end": 60
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 60,
    "end": 61
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 62,
    "end": 63
  },
  {
    "type": "Keyword",
    "value": "while",
    "start": 64,
    "end": 69
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 70,
    "end": 71
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 71,
    "end": 75
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 75,
    "end": 76
  },
  {
    "type": "Identifier",
    "value": "TWO",
    "start": 78,
    "end": 81
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 81,
    "end": 82
  },
  {
    "type": "Identifier",
    "value": "THREE",
    "start": 83,
    "end": 88
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 88,
    "end": 89
  },
  {
    "type": "Keyword",
    "value": "do",
    "start": 90,
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
    "value": "continue",
    "start": 99,
    "end": 107
  },
  {
    "type": "Identifier",
    "value": "THREE",
    "start": 108,
    "end": 113
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 113,
    "end": 114
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 115,
    "end": 116
  },
  {
    "type": "Keyword",
    "value": "while",
    "start": 116,
    "end": 121
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 122,
    "end": 123
  },
  {
    "type": "Boolean",
    "value": "true",
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
    "type": "Identifier",
    "value": "FOUR",
    "start": 130,
    "end": 134
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 134,
    "end": 135
  },
  {
    "type": "Keyword",
    "value": "do",
    "start": 136,
    "end": 138
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 139,
    "end": 140
  },
  {
    "type": "Identifier",
    "value": "FIVE",
    "start": 145,
    "end": 149
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 149,
    "end": 150
  },
  {
    "type": "Keyword",
    "value": "do",
    "start": 155,
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
    "value": "continue",
    "start": 168,
    "end": 176
  },
  {
    "type": "Identifier",
    "value": "FOUR",
    "start": 177,
    "end": 181
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 181,
    "end": 182
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 187,
    "end": 188
  },
  {
    "type": "Keyword",
    "value": "while",
    "start": 188,
    "end": 193
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 194,
    "end": 195
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 195,
    "end": 199
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 199,
    "end": 200
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 201,
    "end": 202
  },
  {
    "type": "Keyword",
    "value": "while",
    "start": 202,
    "end": 207
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 208,
    "end": 209
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 209,
    "end": 213
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 213,
    "end": 214
  },
  {
    "type": "Keyword",
    "value": "do",
    "start": 216,
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
    "value": "SIX",
    "start": 225,
    "end": 228
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 228,
    "end": 229
  },
  {
    "type": "Keyword",
    "value": "do",
    "start": 234,
    "end": 236
  },
  {
    "type": "Keyword",
    "value": "continue",
    "start": 237,
    "end": 245
  },
  {
    "type": "Identifier",
    "value": "SIX",
    "start": 246,
    "end": 249
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 249,
    "end": 250
  },
  {
    "type": "Keyword",
    "value": "while",
    "start": 251,
    "end": 256
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 256,
    "end": 257
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 257,
    "end": 261
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 261,
    "end": 262
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 263,
    "end": 264
  },
  {
    "type": "Keyword",
    "value": "while",
    "start": 264,
    "end": 269
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 270,
    "end": 271
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 271,
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
    "value": "SEVEN",
    "start": 278,
    "end": 283
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 283,
    "end": 284
  },
  {
    "type": "Keyword",
    "value": "do",
    "start": 285,
    "end": 287
  },
  {
    "type": "Keyword",
    "value": "do",
    "start": 288,
    "end": 290
  },
  {
    "type": "Keyword",
    "value": "do",
    "start": 291,
    "end": 293
  },
  {
    "type": "Keyword",
    "value": "continue",
    "start": 294,
    "end": 302
  },
  {
    "type": "Identifier",
    "value": "SEVEN",
    "start": 303,
    "end": 308
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 308,
    "end": 309
  },
  {
    "type": "Keyword",
    "value": "while",
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
    "type": "Boolean",
    "value": "true",
    "start": 317,
    "end": 321
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 321,
    "end": 322
  },
  {
    "type": "Keyword",
    "value": "while",
    "start": 323,
    "end": 328
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 329,
    "end": 330
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 330,
    "end": 334
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 334,
    "end": 335
  },
  {
    "type": "Keyword",
    "value": "while",
    "start": 337,
    "end": 342
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 343,
    "end": 344
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 344,
    "end": 348
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 348,
    "end": 349
  },
  {
    "type": "Identifier",
    "value": "EIGHT",
    "start": 351,
    "end": 356
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 356,
    "end": 357
  },
  {
    "type": "Keyword",
    "value": "do",
    "start": 358,
    "end": 360
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 360,
    "end": 361
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 366,
    "end": 369
  },
  {
    "type": "Identifier",
    "value": "fn",
    "start": 370,
    "end": 372
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 373,
    "end": 374
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 375,
    "end": 383
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 384,
    "end": 385
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 385,
    "end": 386
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 387,
    "end": 388
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 389,
    "end": 390
  },
  {
    "type": "Keyword",
    "value": "continue",
    "start": 395,
    "end": 403
  },
  {
    "type": "Identifier",
    "value": "EIGHT",
    "start": 404,
    "end": 409
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 409,
    "end": 410
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 411,
    "end": 412
  },
  {
    "type": "Keyword",
    "value": "while",
    "start": 412,
    "end": 417
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 417,
    "end": 418
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 418,
    "end": 422
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 422,
    "end": 423
  }
]
```
