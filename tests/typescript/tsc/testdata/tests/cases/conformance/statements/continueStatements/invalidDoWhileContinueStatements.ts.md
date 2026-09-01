__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ContinueStatement",
      "label": null,
      "start": 45,
      "end": 54
    },
    {
      "type": "LabeledStatement",
      "label": {
        "type": "Identifier",
        "decorators": [],
        "name": "ONE",
        "optional": false,
        "typeAnnotation": null,
        "start": 78,
        "end": 81
      },
      "body": {
        "type": "DoWhileStatement",
        "body": {
          "type": "ContinueStatement",
          "label": {
            "type": "Identifier",
            "decorators": [],
            "name": "TWO",
            "optional": false,
            "typeAnnotation": null,
            "start": 95,
            "end": 98
          },
          "start": 86,
          "end": 99
        },
        "test": {
          "type": "Literal",
          "value": true,
          "raw": "true",
          "start": 107,
          "end": 111
        },
        "start": 83,
        "end": 112
      },
      "start": 78,
      "end": 112
    },
    {
      "type": "LabeledStatement",
      "label": {
        "type": "Identifier",
        "decorators": [],
        "name": "TWO",
        "optional": false,
        "typeAnnotation": null,
        "start": 147,
        "end": 150
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
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 165,
                    "end": 166
                  },
                  "init": {
                    "type": "ArrowFunctionExpression",
                    "expression": false,
                    "async": false,
                    "typeParameters": null,
                    "params": [],
                    "returnType": null,
                    "body": {
                      "type": "BlockStatement",
                      "body": [
                        {
                          "type": "ContinueStatement",
                          "label": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "TWO",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 194,
                            "end": 197
                          },
                          "start": 185,
                          "end": 198
                        }
                      ],
                      "start": 175,
                      "end": 204
                    },
                    "id": null,
                    "generator": false,
                    "start": 169,
                    "end": 204
                  },
                  "definite": false,
                  "start": 165,
                  "end": 204
                }
              ],
              "declare": false,
              "start": 161,
              "end": 204
            }
          ],
          "start": 155,
          "end": 206
        },
        "test": {
          "type": "Literal",
          "value": true,
          "raw": "true",
          "start": 213,
          "end": 217
        },
        "start": 152,
        "end": 218
      },
      "start": 147,
      "end": 218
    },
    {
      "type": "LabeledStatement",
      "label": {
        "type": "Identifier",
        "decorators": [],
        "name": "THREE",
        "optional": false,
        "typeAnnotation": null,
        "start": 220,
        "end": 225
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
                    "start": 240,
                    "end": 242
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
                      "body": [
                        {
                          "type": "ContinueStatement",
                          "label": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "THREE",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 276,
                            "end": 281
                          },
                          "start": 267,
                          "end": 282
                        }
                      ],
                      "start": 257,
                      "end": 288
                    },
                    "expression": false,
                    "start": 245,
                    "end": 288
                  },
                  "definite": false,
                  "start": 240,
                  "end": 288
                }
              ],
              "declare": false,
              "start": 236,
              "end": 288
            }
          ],
          "start": 230,
          "end": 290
        },
        "test": {
          "type": "Literal",
          "value": true,
          "raw": "true",
          "start": 297,
          "end": 301
        },
        "start": 227,
        "end": 302
      },
      "start": 220,
      "end": 302
    },
    {
      "type": "DoWhileStatement",
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ContinueStatement",
            "label": {
              "type": "Identifier",
              "decorators": [],
              "name": "FIVE",
              "optional": false,
              "typeAnnotation": null,
              "start": 342,
              "end": 346
            },
            "start": 333,
            "end": 347
          },
          {
            "type": "LabeledStatement",
            "label": {
              "type": "Identifier",
              "decorators": [],
              "name": "FIVE",
              "optional": false,
              "typeAnnotation": null,
              "start": 352,
              "end": 356
            },
            "body": {
              "type": "DoWhileStatement",
              "body": {
                "type": "BlockStatement",
                "body": [],
                "start": 365,
                "end": 368
              },
              "test": {
                "type": "Literal",
                "value": true,
                "raw": "true",
                "start": 376,
                "end": 380
              },
              "start": 362,
              "end": 381
            },
            "start": 352,
            "end": 381
          }
        ],
        "start": 327,
        "end": 383
      },
      "test": {
        "type": "Literal",
        "value": true,
        "raw": "true",
        "start": 390,
        "end": 394
      },
      "start": 324,
      "end": 395
    },
    {
      "type": "LabeledStatement",
      "label": {
        "type": "Identifier",
        "decorators": [],
        "name": "NINE",
        "optional": false,
        "typeAnnotation": null,
        "start": 428,
        "end": 432
      },
      "body": {
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
              "start": 438,
              "end": 439
            },
            "init": {
              "type": "Literal",
              "value": 12,
              "raw": "12",
              "start": 442,
              "end": 444
            },
            "definite": false,
            "start": 438,
            "end": 444
          }
        ],
        "declare": false,
        "start": 434,
        "end": 445
      },
      "start": 428,
      "end": 445
    },
    {
      "type": "DoWhileStatement",
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ContinueStatement",
            "label": {
              "type": "Identifier",
              "decorators": [],
              "name": "NINE",
              "optional": false,
              "typeAnnotation": null,
              "start": 465,
              "end": 469
            },
            "start": 456,
            "end": 470
          }
        ],
        "start": 450,
        "end": 472
      },
      "test": {
        "type": "Literal",
        "value": true,
        "raw": "true",
        "start": 479,
        "end": 483
      },
      "start": 447,
      "end": 484
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 45,
  "end": 484
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "continue",
    "start": 45,
    "end": 53
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 53,
    "end": 54
  },
  {
    "type": "Identifier",
    "value": "ONE",
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
    "type": "Keyword",
    "value": "do",
    "start": 83,
    "end": 85
  },
  {
    "type": "Keyword",
    "value": "continue",
    "start": 86,
    "end": 94
  },
  {
    "type": "Identifier",
    "value": "TWO",
    "start": 95,
    "end": 98
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 98,
    "end": 99
  },
  {
    "type": "Keyword",
    "value": "while",
    "start": 100,
    "end": 105
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 106,
    "end": 107
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 107,
    "end": 111
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 111,
    "end": 112
  },
  {
    "type": "Identifier",
    "value": "TWO",
    "start": 147,
    "end": 150
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 150,
    "end": 151
  },
  {
    "type": "Keyword",
    "value": "do",
    "start": 152,
    "end": 154
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 155,
    "end": 156
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 161,
    "end": 164
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 165,
    "end": 166
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 167,
    "end": 168
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 169,
    "end": 170
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 170,
    "end": 171
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 172,
    "end": 174
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 175,
    "end": 176
  },
  {
    "type": "Keyword",
    "value": "continue",
    "start": 185,
    "end": 193
  },
  {
    "type": "Identifier",
    "value": "TWO",
    "start": 194,
    "end": 197
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 197,
    "end": 198
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 203,
    "end": 204
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 205,
    "end": 206
  },
  {
    "type": "Keyword",
    "value": "while",
    "start": 206,
    "end": 211
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 212,
    "end": 213
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 213,
    "end": 217
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 217,
    "end": 218
  },
  {
    "type": "Identifier",
    "value": "THREE",
    "start": 220,
    "end": 225
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 225,
    "end": 226
  },
  {
    "type": "Keyword",
    "value": "do",
    "start": 227,
    "end": 229
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 230,
    "end": 231
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 236,
    "end": 239
  },
  {
    "type": "Identifier",
    "value": "fn",
    "start": 240,
    "end": 242
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 243,
    "end": 244
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 245,
    "end": 253
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 254,
    "end": 255
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 255,
    "end": 256
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 257,
    "end": 258
  },
  {
    "type": "Keyword",
    "value": "continue",
    "start": 267,
    "end": 275
  },
  {
    "type": "Identifier",
    "value": "THREE",
    "start": 276,
    "end": 281
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 281,
    "end": 282
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 287,
    "end": 288
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 289,
    "end": 290
  },
  {
    "type": "Keyword",
    "value": "while",
    "start": 290,
    "end": 295
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 296,
    "end": 297
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 297,
    "end": 301
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 301,
    "end": 302
  },
  {
    "type": "Keyword",
    "value": "do",
    "start": 324,
    "end": 326
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 327,
    "end": 328
  },
  {
    "type": "Keyword",
    "value": "continue",
    "start": 333,
    "end": 341
  },
  {
    "type": "Identifier",
    "value": "FIVE",
    "start": 342,
    "end": 346
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 346,
    "end": 347
  },
  {
    "type": "Identifier",
    "value": "FIVE",
    "start": 352,
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
    "start": 362,
    "end": 364
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 365,
    "end": 366
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 367,
    "end": 368
  },
  {
    "type": "Keyword",
    "value": "while",
    "start": 369,
    "end": 374
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 375,
    "end": 376
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 376,
    "end": 380
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 380,
    "end": 381
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 382,
    "end": 383
  },
  {
    "type": "Keyword",
    "value": "while",
    "start": 383,
    "end": 388
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 389,
    "end": 390
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 390,
    "end": 394
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 394,
    "end": 395
  },
  {
    "type": "Identifier",
    "value": "NINE",
    "start": 428,
    "end": 432
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 432,
    "end": 433
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 434,
    "end": 437
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 438,
    "end": 439
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 440,
    "end": 441
  },
  {
    "type": "Numeric",
    "value": "12",
    "start": 442,
    "end": 444
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 444,
    "end": 445
  },
  {
    "type": "Keyword",
    "value": "do",
    "start": 447,
    "end": 449
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 450,
    "end": 451
  },
  {
    "type": "Keyword",
    "value": "continue",
    "start": 456,
    "end": 464
  },
  {
    "type": "Identifier",
    "value": "NINE",
    "start": 465,
    "end": 469
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 469,
    "end": 470
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 471,
    "end": 472
  },
  {
    "type": "Keyword",
    "value": "while",
    "start": 472,
    "end": 477
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 478,
    "end": 479
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 479,
    "end": 483
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 483,
    "end": 484
  }
]
```
