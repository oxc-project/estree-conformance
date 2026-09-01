__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "IfStatement",
      "test": {
        "type": "Literal",
        "value": true,
        "raw": "true",
        "start": 52,
        "end": 56
      },
      "consequent": {
        "type": "VariableDeclaration",
        "kind": "const",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "c1",
              "optional": false,
              "typeAnnotation": null,
              "start": 69,
              "end": 71
            },
            "init": {
              "type": "Literal",
              "value": 0,
              "raw": "0",
              "start": 74,
              "end": 75
            },
            "definite": false,
            "start": 69,
            "end": 75
          }
        ],
        "declare": false,
        "start": 63,
        "end": 76
      },
      "alternate": {
        "type": "VariableDeclaration",
        "kind": "const",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "c2",
              "optional": false,
              "typeAnnotation": null,
              "start": 93,
              "end": 95
            },
            "init": {
              "type": "Literal",
              "value": 0,
              "raw": "0",
              "start": 98,
              "end": 99
            },
            "definite": false,
            "start": 93,
            "end": 99
          }
        ],
        "declare": false,
        "start": 87,
        "end": 100
      },
      "start": 48,
      "end": 100
    },
    {
      "type": "WhileStatement",
      "test": {
        "type": "Literal",
        "value": true,
        "raw": "true",
        "start": 109,
        "end": 113
      },
      "body": {
        "type": "VariableDeclaration",
        "kind": "const",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "c3",
              "optional": false,
              "typeAnnotation": null,
              "start": 126,
              "end": 128
            },
            "init": {
              "type": "Literal",
              "value": 0,
              "raw": "0",
              "start": 131,
              "end": 132
            },
            "definite": false,
            "start": 126,
            "end": 132
          }
        ],
        "declare": false,
        "start": 120,
        "end": 133
      },
      "start": 102,
      "end": 133
    },
    {
      "type": "DoWhileStatement",
      "body": {
        "type": "VariableDeclaration",
        "kind": "const",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "c4",
              "optional": false,
              "typeAnnotation": null,
              "start": 149,
              "end": 151
            },
            "init": {
              "type": "Literal",
              "value": 0,
              "raw": "0",
              "start": 154,
              "end": 155
            },
            "definite": false,
            "start": 149,
            "end": 155
          }
        ],
        "declare": false,
        "start": 143,
        "end": 156
      },
      "test": {
        "type": "Literal",
        "value": true,
        "raw": "true",
        "start": 164,
        "end": 168
      },
      "start": 135,
      "end": 170
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
            "name": "obj",
            "optional": false,
            "typeAnnotation": null,
            "start": 176,
            "end": 179
          },
          "init": null,
          "definite": false,
          "start": 176,
          "end": 179
        }
      ],
      "declare": false,
      "start": 172,
      "end": 180
    },
    {
      "type": "WithStatement",
      "object": {
        "type": "Identifier",
        "decorators": [],
        "name": "obj",
        "optional": false,
        "typeAnnotation": null,
        "start": 187,
        "end": 190
      },
      "body": {
        "type": "VariableDeclaration",
        "kind": "const",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "c5",
              "optional": false,
              "typeAnnotation": null,
              "start": 203,
              "end": 205
            },
            "init": {
              "type": "Literal",
              "value": 0,
              "raw": "0",
              "start": 208,
              "end": 209
            },
            "definite": false,
            "start": 203,
            "end": 209
          }
        ],
        "declare": false,
        "start": 197,
        "end": 210
      },
      "start": 181,
      "end": 210
    },
    {
      "type": "ForStatement",
      "init": {
        "type": "VariableDeclaration",
        "kind": "var",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "i",
              "optional": false,
              "typeAnnotation": null,
              "start": 293,
              "end": 294
            },
            "init": {
              "type": "Literal",
              "value": 0,
              "raw": "0",
              "start": 297,
              "end": 298
            },
            "definite": false,
            "start": 293,
            "end": 298
          }
        ],
        "declare": false,
        "start": 289,
        "end": 298
      },
      "test": {
        "type": "BinaryExpression",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "i",
          "optional": false,
          "typeAnnotation": null,
          "start": 300,
          "end": 301
        },
        "operator": "<",
        "right": {
          "type": "Literal",
          "value": 10,
          "raw": "10",
          "start": 304,
          "end": 306
        },
        "start": 300,
        "end": 306
      },
      "update": {
        "type": "UpdateExpression",
        "operator": "++",
        "prefix": false,
        "argument": {
          "type": "Identifier",
          "decorators": [],
          "name": "i",
          "optional": false,
          "typeAnnotation": null,
          "start": 308,
          "end": 309
        },
        "start": 308,
        "end": 311
      },
      "body": {
        "type": "VariableDeclaration",
        "kind": "const",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "c6",
              "optional": false,
              "typeAnnotation": null,
              "start": 323,
              "end": 325
            },
            "init": {
              "type": "Literal",
              "value": 0,
              "raw": "0",
              "start": 328,
              "end": 329
            },
            "definite": false,
            "start": 323,
            "end": 329
          }
        ],
        "declare": false,
        "start": 317,
        "end": 330
      },
      "start": 284,
      "end": 330
    },
    {
      "type": "ForInStatement",
      "left": {
        "type": "VariableDeclaration",
        "kind": "var",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "i2",
              "optional": false,
              "typeAnnotation": null,
              "start": 341,
              "end": 343
            },
            "init": null,
            "definite": false,
            "start": 341,
            "end": 343
          }
        ],
        "declare": false,
        "start": 337,
        "end": 343
      },
      "right": {
        "type": "ObjectExpression",
        "properties": [],
        "start": 347,
        "end": 349
      },
      "body": {
        "type": "VariableDeclaration",
        "kind": "const",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "c7",
              "optional": false,
              "typeAnnotation": null,
              "start": 362,
              "end": 364
            },
            "init": {
              "type": "Literal",
              "value": 0,
              "raw": "0",
              "start": 367,
              "end": 368
            },
            "definite": false,
            "start": 362,
            "end": 368
          }
        ],
        "declare": false,
        "start": 356,
        "end": 369
      },
      "start": 332,
      "end": 369
    },
    {
      "type": "IfStatement",
      "test": {
        "type": "Literal",
        "value": true,
        "raw": "true",
        "start": 375,
        "end": 379
      },
      "consequent": {
        "type": "LabeledStatement",
        "label": {
          "type": "Identifier",
          "decorators": [],
          "name": "label",
          "optional": false,
          "typeAnnotation": null,
          "start": 386,
          "end": 391
        },
        "body": {
          "type": "VariableDeclaration",
          "kind": "const",
          "declarations": [
            {
              "type": "VariableDeclarator",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "c8",
                "optional": false,
                "typeAnnotation": null,
                "start": 399,
                "end": 401
              },
              "init": {
                "type": "Literal",
                "value": 0,
                "raw": "0",
                "start": 404,
                "end": 405
              },
              "definite": false,
              "start": 399,
              "end": 405
            }
          ],
          "declare": false,
          "start": 393,
          "end": 406
        },
        "start": 386,
        "end": 406
      },
      "alternate": null,
      "start": 371,
      "end": 406
    },
    {
      "type": "WhileStatement",
      "test": {
        "type": "Literal",
        "value": false,
        "raw": "false",
        "start": 415,
        "end": 420
      },
      "body": {
        "type": "LabeledStatement",
        "label": {
          "type": "Identifier",
          "decorators": [],
          "name": "label2",
          "optional": false,
          "typeAnnotation": null,
          "start": 426,
          "end": 432
        },
        "body": {
          "type": "LabeledStatement",
          "label": {
            "type": "Identifier",
            "decorators": [],
            "name": "label3",
            "optional": false,
            "typeAnnotation": null,
            "start": 434,
            "end": 440
          },
          "body": {
            "type": "LabeledStatement",
            "label": {
              "type": "Identifier",
              "decorators": [],
              "name": "label4",
              "optional": false,
              "typeAnnotation": null,
              "start": 442,
              "end": 448
            },
            "body": {
              "type": "VariableDeclaration",
              "kind": "const",
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "id": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "c9",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 456,
                    "end": 458
                  },
                  "init": {
                    "type": "Literal",
                    "value": 0,
                    "raw": "0",
                    "start": 461,
                    "end": 462
                  },
                  "definite": false,
                  "start": 456,
                  "end": 462
                }
              ],
              "declare": false,
              "start": 450,
              "end": 463
            },
            "start": 442,
            "end": 463
          },
          "start": 434,
          "end": 463
        },
        "start": 426,
        "end": 463
      },
      "start": 408,
      "end": 463
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 48,
  "end": 466
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "if",
    "start": 48,
    "end": 50
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 51,
    "end": 52
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 52,
    "end": 56
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 56,
    "end": 57
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 63,
    "end": 68
  },
  {
    "type": "Identifier",
    "value": "c1",
    "start": 69,
    "end": 71
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 72,
    "end": 73
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 74,
    "end": 75
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 75,
    "end": 76
  },
  {
    "type": "Keyword",
    "value": "else",
    "start": 77,
    "end": 81
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 87,
    "end": 92
  },
  {
    "type": "Identifier",
    "value": "c2",
    "start": 93,
    "end": 95
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 96,
    "end": 97
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 98,
    "end": 99
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 99,
    "end": 100
  },
  {
    "type": "Keyword",
    "value": "while",
    "start": 102,
    "end": 107
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 108,
    "end": 109
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 109,
    "end": 113
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 113,
    "end": 114
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 120,
    "end": 125
  },
  {
    "type": "Identifier",
    "value": "c3",
    "start": 126,
    "end": 128
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 129,
    "end": 130
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 131,
    "end": 132
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 132,
    "end": 133
  },
  {
    "type": "Keyword",
    "value": "do",
    "start": 135,
    "end": 137
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 143,
    "end": 148
  },
  {
    "type": "Identifier",
    "value": "c4",
    "start": 149,
    "end": 151
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 152,
    "end": 153
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 154,
    "end": 155
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 155,
    "end": 156
  },
  {
    "type": "Keyword",
    "value": "while",
    "start": 157,
    "end": 162
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 163,
    "end": 164
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 164,
    "end": 168
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 168,
    "end": 169
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 169,
    "end": 170
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 172,
    "end": 175
  },
  {
    "type": "Identifier",
    "value": "obj",
    "start": 176,
    "end": 179
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 179,
    "end": 180
  },
  {
    "type": "Keyword",
    "value": "with",
    "start": 181,
    "end": 185
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 186,
    "end": 187
  },
  {
    "type": "Identifier",
    "value": "obj",
    "start": 187,
    "end": 190
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 190,
    "end": 191
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 197,
    "end": 202
  },
  {
    "type": "Identifier",
    "value": "c5",
    "start": 203,
    "end": 205
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 206,
    "end": 207
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 208,
    "end": 209
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 209,
    "end": 210
  },
  {
    "type": "Keyword",
    "value": "for",
    "start": 284,
    "end": 287
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 288,
    "end": 289
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 289,
    "end": 292
  },
  {
    "type": "Identifier",
    "value": "i",
    "start": 293,
    "end": 294
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 295,
    "end": 296
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 297,
    "end": 298
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 298,
    "end": 299
  },
  {
    "type": "Identifier",
    "value": "i",
    "start": 300,
    "end": 301
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 302,
    "end": 303
  },
  {
    "type": "Numeric",
    "value": "10",
    "start": 304,
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
    "value": "i",
    "start": 308,
    "end": 309
  },
  {
    "type": "Punctuator",
    "value": "++",
    "start": 309,
    "end": 311
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 311,
    "end": 312
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 317,
    "end": 322
  },
  {
    "type": "Identifier",
    "value": "c6",
    "start": 323,
    "end": 325
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 326,
    "end": 327
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 328,
    "end": 329
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 329,
    "end": 330
  },
  {
    "type": "Keyword",
    "value": "for",
    "start": 332,
    "end": 335
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 336,
    "end": 337
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 337,
    "end": 340
  },
  {
    "type": "Identifier",
    "value": "i2",
    "start": 341,
    "end": 343
  },
  {
    "type": "Keyword",
    "value": "in",
    "start": 344,
    "end": 346
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 347,
    "end": 348
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 348,
    "end": 349
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 349,
    "end": 350
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 356,
    "end": 361
  },
  {
    "type": "Identifier",
    "value": "c7",
    "start": 362,
    "end": 364
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 365,
    "end": 366
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 367,
    "end": 368
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 368,
    "end": 369
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 371,
    "end": 373
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 374,
    "end": 375
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 375,
    "end": 379
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 379,
    "end": 380
  },
  {
    "type": "Identifier",
    "value": "label",
    "start": 386,
    "end": 391
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 391,
    "end": 392
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 393,
    "end": 398
  },
  {
    "type": "Identifier",
    "value": "c8",
    "start": 399,
    "end": 401
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 402,
    "end": 403
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 404,
    "end": 405
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 405,
    "end": 406
  },
  {
    "type": "Keyword",
    "value": "while",
    "start": 408,
    "end": 413
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 414,
    "end": 415
  },
  {
    "type": "Boolean",
    "value": "false",
    "start": 415,
    "end": 420
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 420,
    "end": 421
  },
  {
    "type": "Identifier",
    "value": "label2",
    "start": 426,
    "end": 432
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 432,
    "end": 433
  },
  {
    "type": "Identifier",
    "value": "label3",
    "start": 434,
    "end": 440
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 440,
    "end": 441
  },
  {
    "type": "Identifier",
    "value": "label4",
    "start": 442,
    "end": 448
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 448,
    "end": 449
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 450,
    "end": 455
  },
  {
    "type": "Identifier",
    "value": "c9",
    "start": 456,
    "end": 458
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 459,
    "end": 460
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 461,
    "end": 462
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 462,
    "end": 463
  }
]
```
