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
            "type": "BreakStatement",
            "label": null,
            "start": 9,
            "end": 15
          }
        ],
        "start": 3,
        "end": 17
      },
      "test": {
        "type": "Literal",
        "value": true,
        "raw": "true",
        "start": 24,
        "end": 28
      },
      "start": 0,
      "end": 29
    },
    {
      "type": "LabeledStatement",
      "label": {
        "type": "Identifier",
        "decorators": [],
        "name": "ONE",
        "optional": false,
        "typeAnnotation": null,
        "start": 31,
        "end": 34
      },
      "body": {
        "type": "DoWhileStatement",
        "body": {
          "type": "BlockStatement",
          "body": [
            {
              "type": "BreakStatement",
              "label": {
                "type": "Identifier",
                "decorators": [],
                "name": "ONE",
                "optional": false,
                "typeAnnotation": null,
                "start": 51,
                "end": 54
              },
              "start": 45,
              "end": 55
            }
          ],
          "start": 39,
          "end": 57
        },
        "test": {
          "type": "Literal",
          "value": true,
          "raw": "true",
          "start": 65,
          "end": 69
        },
        "start": 36,
        "end": 70
      },
      "start": 31,
      "end": 70
    },
    {
      "type": "LabeledStatement",
      "label": {
        "type": "Identifier",
        "decorators": [],
        "name": "TWO",
        "optional": false,
        "typeAnnotation": null,
        "start": 72,
        "end": 75
      },
      "body": {
        "type": "LabeledStatement",
        "label": {
          "type": "Identifier",
          "decorators": [],
          "name": "THREE",
          "optional": false,
          "typeAnnotation": null,
          "start": 77,
          "end": 82
        },
        "body": {
          "type": "DoWhileStatement",
          "body": {
            "type": "BlockStatement",
            "body": [
              {
                "type": "BreakStatement",
                "label": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "THREE",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 99,
                  "end": 104
                },
                "start": 93,
                "end": 105
              }
            ],
            "start": 87,
            "end": 107
          },
          "test": {
            "type": "Literal",
            "value": true,
            "raw": "true",
            "start": 114,
            "end": 118
          },
          "start": 84,
          "end": 119
        },
        "start": 77,
        "end": 119
      },
      "start": 72,
      "end": 119
    },
    {
      "type": "LabeledStatement",
      "label": {
        "type": "Identifier",
        "decorators": [],
        "name": "FOUR",
        "optional": false,
        "typeAnnotation": null,
        "start": 121,
        "end": 125
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
                "start": 136,
                "end": 140
              },
              "body": {
                "type": "DoWhileStatement",
                "body": {
                  "type": "BlockStatement",
                  "body": [
                    {
                      "type": "BreakStatement",
                      "label": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "FOUR",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 165,
                        "end": 169
                      },
                      "start": 159,
                      "end": 170
                    }
                  ],
                  "start": 149,
                  "end": 176
                },
                "test": {
                  "type": "Literal",
                  "value": true,
                  "raw": "true",
                  "start": 183,
                  "end": 187
                },
                "start": 146,
                "end": 188
              },
              "start": 136,
              "end": 188
            }
          ],
          "start": 130,
          "end": 190
        },
        "test": {
          "type": "Literal",
          "value": true,
          "raw": "true",
          "start": 197,
          "end": 201
        },
        "start": 127,
        "end": 202
      },
      "start": 121,
      "end": 202
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
              "start": 213,
              "end": 216
            },
            "body": {
              "type": "DoWhileStatement",
              "body": {
                "type": "BreakStatement",
                "label": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "SIX",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 231,
                  "end": 234
                },
                "start": 225,
                "end": 235
              },
              "test": {
                "type": "Literal",
                "value": true,
                "raw": "true",
                "start": 242,
                "end": 246
              },
              "start": 222,
              "end": 247
            },
            "start": 213,
            "end": 247
          }
        ],
        "start": 207,
        "end": 249
      },
      "test": {
        "type": "Literal",
        "value": true,
        "raw": "true",
        "start": 256,
        "end": 260
      },
      "start": 204,
      "end": 261
    },
    {
      "type": "LabeledStatement",
      "label": {
        "type": "Identifier",
        "decorators": [],
        "name": "SEVEN",
        "optional": false,
        "typeAnnotation": null,
        "start": 263,
        "end": 268
      },
      "body": {
        "type": "DoWhileStatement",
        "body": {
          "type": "DoWhileStatement",
          "body": {
            "type": "DoWhileStatement",
            "body": {
              "type": "BreakStatement",
              "label": {
                "type": "Identifier",
                "decorators": [],
                "name": "SEVEN",
                "optional": false,
                "typeAnnotation": null,
                "start": 285,
                "end": 290
              },
              "start": 279,
              "end": 291
            },
            "test": {
              "type": "Literal",
              "value": true,
              "raw": "true",
              "start": 299,
              "end": 303
            },
            "start": 276,
            "end": 304
          },
          "test": {
            "type": "Literal",
            "value": true,
            "raw": "true",
            "start": 312,
            "end": 316
          },
          "start": 273,
          "end": 317
        },
        "test": {
          "type": "Literal",
          "value": true,
          "raw": "true",
          "start": 326,
          "end": 330
        },
        "start": 270,
        "end": 331
      },
      "start": 263,
      "end": 331
    },
    {
      "type": "LabeledStatement",
      "label": {
        "type": "Identifier",
        "decorators": [],
        "name": "EIGHT",
        "optional": false,
        "typeAnnotation": null,
        "start": 333,
        "end": 338
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
                    "start": 352,
                    "end": 354
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
                      "start": 369,
                      "end": 372
                    },
                    "expression": false,
                    "start": 357,
                    "end": 372
                  },
                  "definite": false,
                  "start": 352,
                  "end": 372
                }
              ],
              "declare": false,
              "start": 348,
              "end": 372
            },
            {
              "type": "BreakStatement",
              "label": {
                "type": "Identifier",
                "decorators": [],
                "name": "EIGHT",
                "optional": false,
                "typeAnnotation": null,
                "start": 383,
                "end": 388
              },
              "start": 377,
              "end": 389
            }
          ],
          "start": 342,
          "end": 391
        },
        "test": {
          "type": "Literal",
          "value": true,
          "raw": "true",
          "start": 397,
          "end": 401
        },
        "start": 340,
        "end": 402
      },
      "start": 333,
      "end": 402
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 402
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
    "value": "break",
    "start": 9,
    "end": 14
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 14,
    "end": 15
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 16,
    "end": 17
  },
  {
    "type": "Keyword",
    "value": "while",
    "start": 18,
    "end": 23
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 23,
    "end": 24
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 24,
    "end": 28
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 28,
    "end": 29
  },
  {
    "type": "Identifier",
    "value": "ONE",
    "start": 31,
    "end": 34
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 34,
    "end": 35
  },
  {
    "type": "Keyword",
    "value": "do",
    "start": 36,
    "end": 38
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 39,
    "end": 40
  },
  {
    "type": "Keyword",
    "value": "break",
    "start": 45,
    "end": 50
  },
  {
    "type": "Identifier",
    "value": "ONE",
    "start": 51,
    "end": 54
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 54,
    "end": 55
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 56,
    "end": 57
  },
  {
    "type": "Keyword",
    "value": "while",
    "start": 58,
    "end": 63
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 64,
    "end": 65
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 65,
    "end": 69
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 69,
    "end": 70
  },
  {
    "type": "Identifier",
    "value": "TWO",
    "start": 72,
    "end": 75
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 75,
    "end": 76
  },
  {
    "type": "Identifier",
    "value": "THREE",
    "start": 77,
    "end": 82
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 82,
    "end": 83
  },
  {
    "type": "Keyword",
    "value": "do",
    "start": 84,
    "end": 86
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 87,
    "end": 88
  },
  {
    "type": "Keyword",
    "value": "break",
    "start": 93,
    "end": 98
  },
  {
    "type": "Identifier",
    "value": "THREE",
    "start": 99,
    "end": 104
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 104,
    "end": 105
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 106,
    "end": 107
  },
  {
    "type": "Keyword",
    "value": "while",
    "start": 107,
    "end": 112
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 113,
    "end": 114
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 114,
    "end": 118
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 118,
    "end": 119
  },
  {
    "type": "Identifier",
    "value": "FOUR",
    "start": 121,
    "end": 125
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 125,
    "end": 126
  },
  {
    "type": "Keyword",
    "value": "do",
    "start": 127,
    "end": 129
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 130,
    "end": 131
  },
  {
    "type": "Identifier",
    "value": "FIVE",
    "start": 136,
    "end": 140
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 140,
    "end": 141
  },
  {
    "type": "Keyword",
    "value": "do",
    "start": 146,
    "end": 148
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 149,
    "end": 150
  },
  {
    "type": "Keyword",
    "value": "break",
    "start": 159,
    "end": 164
  },
  {
    "type": "Identifier",
    "value": "FOUR",
    "start": 165,
    "end": 169
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 169,
    "end": 170
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 175,
    "end": 176
  },
  {
    "type": "Keyword",
    "value": "while",
    "start": 176,
    "end": 181
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 182,
    "end": 183
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 183,
    "end": 187
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 187,
    "end": 188
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 189,
    "end": 190
  },
  {
    "type": "Keyword",
    "value": "while",
    "start": 190,
    "end": 195
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 196,
    "end": 197
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 197,
    "end": 201
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 201,
    "end": 202
  },
  {
    "type": "Keyword",
    "value": "do",
    "start": 204,
    "end": 206
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 207,
    "end": 208
  },
  {
    "type": "Identifier",
    "value": "SIX",
    "start": 213,
    "end": 216
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 216,
    "end": 217
  },
  {
    "type": "Keyword",
    "value": "do",
    "start": 222,
    "end": 224
  },
  {
    "type": "Keyword",
    "value": "break",
    "start": 225,
    "end": 230
  },
  {
    "type": "Identifier",
    "value": "SIX",
    "start": 231,
    "end": 234
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 234,
    "end": 235
  },
  {
    "type": "Keyword",
    "value": "while",
    "start": 236,
    "end": 241
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 241,
    "end": 242
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 242,
    "end": 246
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 246,
    "end": 247
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 248,
    "end": 249
  },
  {
    "type": "Keyword",
    "value": "while",
    "start": 249,
    "end": 254
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 255,
    "end": 256
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 256,
    "end": 260
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 260,
    "end": 261
  },
  {
    "type": "Identifier",
    "value": "SEVEN",
    "start": 263,
    "end": 268
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 268,
    "end": 269
  },
  {
    "type": "Keyword",
    "value": "do",
    "start": 270,
    "end": 272
  },
  {
    "type": "Keyword",
    "value": "do",
    "start": 273,
    "end": 275
  },
  {
    "type": "Keyword",
    "value": "do",
    "start": 276,
    "end": 278
  },
  {
    "type": "Keyword",
    "value": "break",
    "start": 279,
    "end": 284
  },
  {
    "type": "Identifier",
    "value": "SEVEN",
    "start": 285,
    "end": 290
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 290,
    "end": 291
  },
  {
    "type": "Keyword",
    "value": "while",
    "start": 292,
    "end": 297
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 298,
    "end": 299
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 299,
    "end": 303
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 303,
    "end": 304
  },
  {
    "type": "Keyword",
    "value": "while",
    "start": 305,
    "end": 310
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 311,
    "end": 312
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 312,
    "end": 316
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 316,
    "end": 317
  },
  {
    "type": "Keyword",
    "value": "while",
    "start": 319,
    "end": 324
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 325,
    "end": 326
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 326,
    "end": 330
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 330,
    "end": 331
  },
  {
    "type": "Identifier",
    "value": "EIGHT",
    "start": 333,
    "end": 338
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 338,
    "end": 339
  },
  {
    "type": "Keyword",
    "value": "do",
    "start": 340,
    "end": 342
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 342,
    "end": 343
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 348,
    "end": 351
  },
  {
    "type": "Identifier",
    "value": "fn",
    "start": 352,
    "end": 354
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 355,
    "end": 356
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 357,
    "end": 365
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 366,
    "end": 367
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 367,
    "end": 368
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 369,
    "end": 370
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 371,
    "end": 372
  },
  {
    "type": "Keyword",
    "value": "break",
    "start": 377,
    "end": 382
  },
  {
    "type": "Identifier",
    "value": "EIGHT",
    "start": 383,
    "end": 388
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 388,
    "end": 389
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 390,
    "end": 391
  },
  {
    "type": "Keyword",
    "value": "while",
    "start": 391,
    "end": 396
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 396,
    "end": 397
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 397,
    "end": 401
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 401,
    "end": 402
  }
]
```
