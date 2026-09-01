__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "WhileStatement",
      "test": {
        "type": "Literal",
        "value": true,
        "raw": "true",
        "start": 6,
        "end": 10
      },
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "BreakStatement",
            "label": null,
            "start": 18,
            "end": 24
          }
        ],
        "start": 12,
        "end": 26
      },
      "start": 0,
      "end": 26
    },
    {
      "type": "LabeledStatement",
      "label": {
        "type": "Identifier",
        "decorators": [],
        "name": "ONE",
        "optional": false,
        "typeAnnotation": null,
        "start": 29,
        "end": 32
      },
      "body": {
        "type": "WhileStatement",
        "test": {
          "type": "Literal",
          "value": true,
          "raw": "true",
          "start": 42,
          "end": 46
        },
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
                "start": 60,
                "end": 63
              },
              "start": 54,
              "end": 64
            }
          ],
          "start": 48,
          "end": 66
        },
        "start": 35,
        "end": 66
      },
      "start": 29,
      "end": 66
    },
    {
      "type": "LabeledStatement",
      "label": {
        "type": "Identifier",
        "decorators": [],
        "name": "TWO",
        "optional": false,
        "typeAnnotation": null,
        "start": 68,
        "end": 71
      },
      "body": {
        "type": "LabeledStatement",
        "label": {
          "type": "Identifier",
          "decorators": [],
          "name": "THREE",
          "optional": false,
          "typeAnnotation": null,
          "start": 73,
          "end": 78
        },
        "body": {
          "type": "WhileStatement",
          "test": {
            "type": "Literal",
            "value": true,
            "raw": "true",
            "start": 87,
            "end": 91
          },
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
                  "start": 105,
                  "end": 110
                },
                "start": 99,
                "end": 111
              }
            ],
            "start": 93,
            "end": 113
          },
          "start": 80,
          "end": 113
        },
        "start": 73,
        "end": 113
      },
      "start": 68,
      "end": 113
    },
    {
      "type": "LabeledStatement",
      "label": {
        "type": "Identifier",
        "decorators": [],
        "name": "FOUR",
        "optional": false,
        "typeAnnotation": null,
        "start": 115,
        "end": 119
      },
      "body": {
        "type": "WhileStatement",
        "test": {
          "type": "Literal",
          "value": true,
          "raw": "true",
          "start": 128,
          "end": 132
        },
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
                "start": 140,
                "end": 144
              },
              "body": {
                "type": "WhileStatement",
                "test": {
                  "type": "Literal",
                  "value": true,
                  "raw": "true",
                  "start": 157,
                  "end": 161
                },
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
                        "start": 179,
                        "end": 183
                      },
                      "start": 173,
                      "end": 184
                    }
                  ],
                  "start": 163,
                  "end": 190
                },
                "start": 150,
                "end": 190
              },
              "start": 140,
              "end": 190
            }
          ],
          "start": 134,
          "end": 192
        },
        "start": 121,
        "end": 192
      },
      "start": 115,
      "end": 192
    },
    {
      "type": "WhileStatement",
      "test": {
        "type": "Literal",
        "value": true,
        "raw": "true",
        "start": 201,
        "end": 205
      },
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
              "type": "WhileStatement",
              "test": {
                "type": "Literal",
                "value": true,
                "raw": "true",
                "start": 229,
                "end": 233
              },
              "body": {
                "type": "BreakStatement",
                "label": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "SIX",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 249,
                  "end": 252
                },
                "start": 243,
                "end": 253
              },
              "start": 222,
              "end": 253
            },
            "start": 213,
            "end": 253
          }
        ],
        "start": 207,
        "end": 255
      },
      "start": 194,
      "end": 255
    },
    {
      "type": "LabeledStatement",
      "label": {
        "type": "Identifier",
        "decorators": [],
        "name": "SEVEN",
        "optional": false,
        "typeAnnotation": null,
        "start": 257,
        "end": 262
      },
      "body": {
        "type": "WhileStatement",
        "test": {
          "type": "Literal",
          "value": true,
          "raw": "true",
          "start": 271,
          "end": 275
        },
        "body": {
          "type": "WhileStatement",
          "test": {
            "type": "Literal",
            "value": true,
            "raw": "true",
            "start": 288,
            "end": 292
          },
          "body": {
            "type": "WhileStatement",
            "test": {
              "type": "Literal",
              "value": true,
              "raw": "true",
              "start": 309,
              "end": 313
            },
            "body": {
              "type": "BreakStatement",
              "label": {
                "type": "Identifier",
                "decorators": [],
                "name": "SEVEN",
                "optional": false,
                "typeAnnotation": null,
                "start": 333,
                "end": 338
              },
              "start": 327,
              "end": 339
            },
            "start": 302,
            "end": 339
          },
          "start": 281,
          "end": 339
        },
        "start": 264,
        "end": 339
      },
      "start": 257,
      "end": 339
    },
    {
      "type": "LabeledStatement",
      "label": {
        "type": "Identifier",
        "decorators": [],
        "name": "EIGHT",
        "optional": false,
        "typeAnnotation": null,
        "start": 341,
        "end": 346
      },
      "body": {
        "type": "WhileStatement",
        "test": {
          "type": "Literal",
          "value": true,
          "raw": "true",
          "start": 355,
          "end": 359
        },
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
                    "start": 371,
                    "end": 373
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
                      "start": 388,
                      "end": 391
                    },
                    "expression": false,
                    "start": 376,
                    "end": 391
                  },
                  "definite": false,
                  "start": 371,
                  "end": 391
                }
              ],
              "declare": false,
              "start": 367,
              "end": 391
            },
            {
              "type": "BreakStatement",
              "label": {
                "type": "Identifier",
                "decorators": [],
                "name": "EIGHT",
                "optional": false,
                "typeAnnotation": null,
                "start": 402,
                "end": 407
              },
              "start": 396,
              "end": 408
            }
          ],
          "start": 361,
          "end": 410
        },
        "start": 348,
        "end": 410
      },
      "start": 341,
      "end": 410
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 410
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "while",
    "start": 0,
    "end": 5
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 5,
    "end": 6
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 6,
    "end": 10
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 10,
    "end": 11
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 12,
    "end": 13
  },
  {
    "type": "Keyword",
    "value": "break",
    "start": 18,
    "end": 23
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 23,
    "end": 24
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 25,
    "end": 26
  },
  {
    "type": "Identifier",
    "value": "ONE",
    "start": 29,
    "end": 32
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 32,
    "end": 33
  },
  {
    "type": "Keyword",
    "value": "while",
    "start": 35,
    "end": 40
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 41,
    "end": 42
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 42,
    "end": 46
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 46,
    "end": 47
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 48,
    "end": 49
  },
  {
    "type": "Keyword",
    "value": "break",
    "start": 54,
    "end": 59
  },
  {
    "type": "Identifier",
    "value": "ONE",
    "start": 60,
    "end": 63
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 63,
    "end": 64
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 65,
    "end": 66
  },
  {
    "type": "Identifier",
    "value": "TWO",
    "start": 68,
    "end": 71
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 71,
    "end": 72
  },
  {
    "type": "Identifier",
    "value": "THREE",
    "start": 73,
    "end": 78
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 78,
    "end": 79
  },
  {
    "type": "Keyword",
    "value": "while",
    "start": 80,
    "end": 85
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 86,
    "end": 87
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 87,
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
    "value": "break",
    "start": 99,
    "end": 104
  },
  {
    "type": "Identifier",
    "value": "THREE",
    "start": 105,
    "end": 110
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 110,
    "end": 111
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 112,
    "end": 113
  },
  {
    "type": "Identifier",
    "value": "FOUR",
    "start": 115,
    "end": 119
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 119,
    "end": 120
  },
  {
    "type": "Keyword",
    "value": "while",
    "start": 121,
    "end": 126
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 127,
    "end": 128
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 128,
    "end": 132
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 132,
    "end": 133
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 134,
    "end": 135
  },
  {
    "type": "Identifier",
    "value": "FIVE",
    "start": 140,
    "end": 144
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 144,
    "end": 145
  },
  {
    "type": "Keyword",
    "value": "while",
    "start": 150,
    "end": 155
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 156,
    "end": 157
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 157,
    "end": 161
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 161,
    "end": 162
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 163,
    "end": 164
  },
  {
    "type": "Keyword",
    "value": "break",
    "start": 173,
    "end": 178
  },
  {
    "type": "Identifier",
    "value": "FOUR",
    "start": 179,
    "end": 183
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 183,
    "end": 184
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 189,
    "end": 190
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 191,
    "end": 192
  },
  {
    "type": "Keyword",
    "value": "while",
    "start": 194,
    "end": 199
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 200,
    "end": 201
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 201,
    "end": 205
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 205,
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
    "value": "while",
    "start": 222,
    "end": 227
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 228,
    "end": 229
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 229,
    "end": 233
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 233,
    "end": 234
  },
  {
    "type": "Keyword",
    "value": "break",
    "start": 243,
    "end": 248
  },
  {
    "type": "Identifier",
    "value": "SIX",
    "start": 249,
    "end": 252
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 252,
    "end": 253
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 254,
    "end": 255
  },
  {
    "type": "Identifier",
    "value": "SEVEN",
    "start": 257,
    "end": 262
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 262,
    "end": 263
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
    "type": "Keyword",
    "value": "while",
    "start": 281,
    "end": 286
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 287,
    "end": 288
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 288,
    "end": 292
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 292,
    "end": 293
  },
  {
    "type": "Keyword",
    "value": "while",
    "start": 302,
    "end": 307
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 308,
    "end": 309
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 309,
    "end": 313
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 313,
    "end": 314
  },
  {
    "type": "Keyword",
    "value": "break",
    "start": 327,
    "end": 332
  },
  {
    "type": "Identifier",
    "value": "SEVEN",
    "start": 333,
    "end": 338
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 338,
    "end": 339
  },
  {
    "type": "Identifier",
    "value": "EIGHT",
    "start": 341,
    "end": 346
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 346,
    "end": 347
  },
  {
    "type": "Keyword",
    "value": "while",
    "start": 348,
    "end": 353
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 354,
    "end": 355
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 355,
    "end": 359
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 359,
    "end": 360
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 361,
    "end": 362
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 367,
    "end": 370
  },
  {
    "type": "Identifier",
    "value": "fn",
    "start": 371,
    "end": 373
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 374,
    "end": 375
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 376,
    "end": 384
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 385,
    "end": 386
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 386,
    "end": 387
  },
  {
    "type": "Punctuator",
    "value": "{",
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
    "value": "break",
    "start": 396,
    "end": 401
  },
  {
    "type": "Identifier",
    "value": "EIGHT",
    "start": 402,
    "end": 407
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 407,
    "end": 408
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 409,
    "end": 410
  }
]
```
