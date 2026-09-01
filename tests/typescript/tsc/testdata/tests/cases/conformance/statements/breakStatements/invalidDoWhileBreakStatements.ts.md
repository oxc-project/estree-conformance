__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "BreakStatement",
      "label": null,
      "start": 42,
      "end": 48
    },
    {
      "type": "LabeledStatement",
      "label": {
        "type": "Identifier",
        "decorators": [],
        "name": "ONE",
        "optional": false,
        "typeAnnotation": null,
        "start": 72,
        "end": 75
      },
      "body": {
        "type": "DoWhileStatement",
        "body": {
          "type": "BreakStatement",
          "label": {
            "type": "Identifier",
            "decorators": [],
            "name": "TWO",
            "optional": false,
            "typeAnnotation": null,
            "start": 86,
            "end": 89
          },
          "start": 80,
          "end": 90
        },
        "test": {
          "type": "Literal",
          "value": true,
          "raw": "true",
          "start": 98,
          "end": 102
        },
        "start": 77,
        "end": 103
      },
      "start": 72,
      "end": 103
    },
    {
      "type": "LabeledStatement",
      "label": {
        "type": "Identifier",
        "decorators": [],
        "name": "TWO",
        "optional": false,
        "typeAnnotation": null,
        "start": 135,
        "end": 138
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
                    "start": 153,
                    "end": 154
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
                          "type": "BreakStatement",
                          "label": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "TWO",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 179,
                            "end": 182
                          },
                          "start": 173,
                          "end": 183
                        }
                      ],
                      "start": 163,
                      "end": 189
                    },
                    "id": null,
                    "generator": false,
                    "start": 157,
                    "end": 189
                  },
                  "definite": false,
                  "start": 153,
                  "end": 189
                }
              ],
              "declare": false,
              "start": 149,
              "end": 189
            }
          ],
          "start": 143,
          "end": 191
        },
        "test": {
          "type": "Literal",
          "value": true,
          "raw": "true",
          "start": 198,
          "end": 202
        },
        "start": 140,
        "end": 203
      },
      "start": 135,
      "end": 203
    },
    {
      "type": "LabeledStatement",
      "label": {
        "type": "Identifier",
        "decorators": [],
        "name": "THREE",
        "optional": false,
        "typeAnnotation": null,
        "start": 205,
        "end": 210
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
                    "start": 225,
                    "end": 227
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
                          "type": "BreakStatement",
                          "label": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "THREE",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 258,
                            "end": 263
                          },
                          "start": 252,
                          "end": 264
                        }
                      ],
                      "start": 242,
                      "end": 270
                    },
                    "expression": false,
                    "start": 230,
                    "end": 270
                  },
                  "definite": false,
                  "start": 225,
                  "end": 270
                }
              ],
              "declare": false,
              "start": 221,
              "end": 270
            }
          ],
          "start": 215,
          "end": 272
        },
        "test": {
          "type": "Literal",
          "value": true,
          "raw": "true",
          "start": 279,
          "end": 283
        },
        "start": 212,
        "end": 284
      },
      "start": 205,
      "end": 284
    },
    {
      "type": "DoWhileStatement",
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "BreakStatement",
            "label": {
              "type": "Identifier",
              "decorators": [],
              "name": "FIVE",
              "optional": false,
              "typeAnnotation": null,
              "start": 318,
              "end": 322
            },
            "start": 312,
            "end": 323
          },
          {
            "type": "LabeledStatement",
            "label": {
              "type": "Identifier",
              "decorators": [],
              "name": "FIVE",
              "optional": false,
              "typeAnnotation": null,
              "start": 328,
              "end": 332
            },
            "body": {
              "type": "DoWhileStatement",
              "body": {
                "type": "BlockStatement",
                "body": [],
                "start": 341,
                "end": 344
              },
              "test": {
                "type": "Literal",
                "value": true,
                "raw": "true",
                "start": 352,
                "end": 356
              },
              "start": 338,
              "end": 357
            },
            "start": 328,
            "end": 357
          }
        ],
        "start": 306,
        "end": 359
      },
      "test": {
        "type": "Literal",
        "value": true,
        "raw": "true",
        "start": 366,
        "end": 370
      },
      "start": 303,
      "end": 371
    },
    {
      "type": "LabeledStatement",
      "label": {
        "type": "Identifier",
        "decorators": [],
        "name": "NINE",
        "optional": false,
        "typeAnnotation": null,
        "start": 404,
        "end": 408
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
              "start": 414,
              "end": 415
            },
            "init": {
              "type": "Literal",
              "value": 12,
              "raw": "12",
              "start": 418,
              "end": 420
            },
            "definite": false,
            "start": 414,
            "end": 420
          }
        ],
        "declare": false,
        "start": 410,
        "end": 421
      },
      "start": 404,
      "end": 421
    },
    {
      "type": "DoWhileStatement",
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "BreakStatement",
            "label": {
              "type": "Identifier",
              "decorators": [],
              "name": "NINE",
              "optional": false,
              "typeAnnotation": null,
              "start": 438,
              "end": 442
            },
            "start": 432,
            "end": 443
          }
        ],
        "start": 426,
        "end": 445
      },
      "test": {
        "type": "Literal",
        "value": true,
        "raw": "true",
        "start": 452,
        "end": 456
      },
      "start": 423,
      "end": 457
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 42,
  "end": 457
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "break",
    "start": 42,
    "end": 47
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 47,
    "end": 48
  },
  {
    "type": "Identifier",
    "value": "ONE",
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
    "type": "Keyword",
    "value": "do",
    "start": 77,
    "end": 79
  },
  {
    "type": "Keyword",
    "value": "break",
    "start": 80,
    "end": 85
  },
  {
    "type": "Identifier",
    "value": "TWO",
    "start": 86,
    "end": 89
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 89,
    "end": 90
  },
  {
    "type": "Keyword",
    "value": "while",
    "start": 91,
    "end": 96
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 97,
    "end": 98
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 98,
    "end": 102
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 102,
    "end": 103
  },
  {
    "type": "Identifier",
    "value": "TWO",
    "start": 135,
    "end": 138
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 138,
    "end": 139
  },
  {
    "type": "Keyword",
    "value": "do",
    "start": 140,
    "end": 142
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 143,
    "end": 144
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 149,
    "end": 152
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 153,
    "end": 154
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 155,
    "end": 156
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 157,
    "end": 158
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 158,
    "end": 159
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 160,
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
    "value": "TWO",
    "start": 179,
    "end": 182
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 182,
    "end": 183
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 188,
    "end": 189
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 190,
    "end": 191
  },
  {
    "type": "Keyword",
    "value": "while",
    "start": 191,
    "end": 196
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 197,
    "end": 198
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 198,
    "end": 202
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 202,
    "end": 203
  },
  {
    "type": "Identifier",
    "value": "THREE",
    "start": 205,
    "end": 210
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 210,
    "end": 211
  },
  {
    "type": "Keyword",
    "value": "do",
    "start": 212,
    "end": 214
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 215,
    "end": 216
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 221,
    "end": 224
  },
  {
    "type": "Identifier",
    "value": "fn",
    "start": 225,
    "end": 227
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 228,
    "end": 229
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 230,
    "end": 238
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 239,
    "end": 240
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 240,
    "end": 241
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 242,
    "end": 243
  },
  {
    "type": "Keyword",
    "value": "break",
    "start": 252,
    "end": 257
  },
  {
    "type": "Identifier",
    "value": "THREE",
    "start": 258,
    "end": 263
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 263,
    "end": 264
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 269,
    "end": 270
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 271,
    "end": 272
  },
  {
    "type": "Keyword",
    "value": "while",
    "start": 272,
    "end": 277
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 278,
    "end": 279
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 279,
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
    "value": "do",
    "start": 303,
    "end": 305
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 306,
    "end": 307
  },
  {
    "type": "Keyword",
    "value": "break",
    "start": 312,
    "end": 317
  },
  {
    "type": "Identifier",
    "value": "FIVE",
    "start": 318,
    "end": 322
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 322,
    "end": 323
  },
  {
    "type": "Identifier",
    "value": "FIVE",
    "start": 328,
    "end": 332
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 332,
    "end": 333
  },
  {
    "type": "Keyword",
    "value": "do",
    "start": 338,
    "end": 340
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 341,
    "end": 342
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 343,
    "end": 344
  },
  {
    "type": "Keyword",
    "value": "while",
    "start": 345,
    "end": 350
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 351,
    "end": 352
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 352,
    "end": 356
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 356,
    "end": 357
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 358,
    "end": 359
  },
  {
    "type": "Keyword",
    "value": "while",
    "start": 359,
    "end": 364
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 365,
    "end": 366
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 366,
    "end": 370
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 370,
    "end": 371
  },
  {
    "type": "Identifier",
    "value": "NINE",
    "start": 404,
    "end": 408
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 408,
    "end": 409
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 410,
    "end": 413
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 414,
    "end": 415
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 416,
    "end": 417
  },
  {
    "type": "Numeric",
    "value": "12",
    "start": 418,
    "end": 420
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 420,
    "end": 421
  },
  {
    "type": "Keyword",
    "value": "do",
    "start": 423,
    "end": 425
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 426,
    "end": 427
  },
  {
    "type": "Keyword",
    "value": "break",
    "start": 432,
    "end": 437
  },
  {
    "type": "Identifier",
    "value": "NINE",
    "start": 438,
    "end": 442
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 442,
    "end": 443
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 444,
    "end": 445
  },
  {
    "type": "Keyword",
    "value": "while",
    "start": 445,
    "end": 450
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 451,
    "end": 452
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 452,
    "end": 456
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 456,
    "end": 457
  }
]
```
