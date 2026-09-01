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
            "name": "lambda",
            "optional": false,
            "typeAnnotation": null,
            "start": 57,
            "end": 63
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
                "name": "l1",
                "optional": false,
                "typeAnnotation": null,
                "start": 67,
                "end": 69
              }
            ],
            "returnType": null,
            "body": {
              "type": "BlockStatement",
              "body": [],
              "start": 74,
              "end": 77
            },
            "id": null,
            "generator": false,
            "start": 66,
            "end": 77
          },
          "definite": false,
          "start": 57,
          "end": 77
        }
      ],
      "declare": false,
      "start": 53,
      "end": 78
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
            "name": "lambd2",
            "optional": false,
            "typeAnnotation": null,
            "start": 106,
            "end": 112
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
                "name": "ll1",
                "optional": false,
                "typeAnnotation": null,
                "start": 116,
                "end": 119
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "ll2",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 126,
                    "end": 132
                  },
                  "start": 124,
                  "end": 132
                },
                "start": 121,
                "end": 132
              }
            ],
            "returnType": null,
            "body": {
              "type": "BlockStatement",
              "body": [],
              "start": 137,
              "end": 140
            },
            "id": null,
            "generator": false,
            "start": 115,
            "end": 140
          },
          "definite": false,
          "start": 106,
          "end": 140
        }
      ],
      "declare": false,
      "start": 102,
      "end": 140
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
            "name": "lamda3",
            "optional": false,
            "typeAnnotation": null,
            "start": 164,
            "end": 170
          },
          "init": {
            "type": "FunctionExpression",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "myLambda3",
              "optional": false,
              "typeAnnotation": null,
              "start": 182,
              "end": 191
            },
            "generator": false,
            "async": false,
            "declare": false,
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "myParam",
                "optional": false,
                "typeAnnotation": null,
                "start": 192,
                "end": 199
              }
            ],
            "returnType": null,
            "body": {
              "type": "BlockStatement",
              "body": [],
              "start": 201,
              "end": 204
            },
            "expression": false,
            "start": 173,
            "end": 204
          },
          "definite": false,
          "start": 164,
          "end": 204
        }
      ],
      "declare": false,
      "start": 160,
      "end": 204
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
            "name": "lamda4",
            "optional": false,
            "typeAnnotation": null,
            "start": 209,
            "end": 215
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
                  "type": "ReturnStatement",
                  "argument": {
                    "type": "Literal",
                    "value": null,
                    "raw": "null",
                    "start": 233,
                    "end": 237
                  },
                  "start": 226,
                  "end": 237
                }
              ],
              "start": 224,
              "end": 239
            },
            "id": null,
            "generator": false,
            "start": 218,
            "end": 239
          },
          "definite": false,
          "start": 209,
          "end": 239
        }
      ],
      "declare": false,
      "start": 205,
      "end": 240
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
            "name": "lambda5",
            "optional": false,
            "typeAnnotation": null,
            "start": 300,
            "end": 307
          },
          "init": {
            "type": "FunctionExpression",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "temp",
              "optional": false,
              "typeAnnotation": null,
              "start": 319,
              "end": 323
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
                  "type": "ReturnStatement",
                  "argument": {
                    "type": "Literal",
                    "value": null,
                    "raw": "null",
                    "start": 335,
                    "end": 339
                  },
                  "start": 328,
                  "end": 340
                }
              ],
              "start": 326,
              "end": 342
            },
            "expression": false,
            "start": 310,
            "end": 342
          },
          "definite": false,
          "start": 300,
          "end": 342
        }
      ],
      "declare": false,
      "start": 296,
      "end": 342
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
            "name": "lambda6",
            "optional": false,
            "typeAnnotation": null,
            "start": 347,
            "end": 354
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
                  "type": "ReturnStatement",
                  "argument": {
                    "type": "Literal",
                    "value": null,
                    "raw": "null",
                    "start": 372,
                    "end": 376
                  },
                  "start": 365,
                  "end": 377
                }
              ],
              "start": 363,
              "end": 379
            },
            "id": null,
            "generator": false,
            "start": 357,
            "end": 379
          },
          "definite": false,
          "start": 347,
          "end": 379
        }
      ],
      "declare": false,
      "start": 343,
      "end": 379
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
            "name": "lambda7",
            "optional": false,
            "typeAnnotation": null,
            "start": 384,
            "end": 391
          },
          "init": {
            "type": "FunctionExpression",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "temp",
              "optional": false,
              "typeAnnotation": null,
              "start": 403,
              "end": 407
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
                  "type": "ReturnStatement",
                  "argument": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "undefined",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 419,
                    "end": 428
                  },
                  "start": 412,
                  "end": 429
                }
              ],
              "start": 410,
              "end": 431
            },
            "expression": false,
            "start": 394,
            "end": 431
          },
          "definite": false,
          "start": 384,
          "end": 431
        }
      ],
      "declare": false,
      "start": 380,
      "end": 431
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
            "name": "lambda8",
            "optional": false,
            "typeAnnotation": null,
            "start": 436,
            "end": 443
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
                  "type": "ReturnStatement",
                  "argument": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "undefined",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 461,
                    "end": 470
                  },
                  "start": 454,
                  "end": 471
                }
              ],
              "start": 452,
              "end": 473
            },
            "id": null,
            "generator": false,
            "start": 446,
            "end": 473
          },
          "definite": false,
          "start": 436,
          "end": 473
        }
      ],
      "declare": false,
      "start": 432,
      "end": 473
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
            "name": "lambda9",
            "optional": false,
            "typeAnnotation": null,
            "start": 509,
            "end": 516
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
                  "type": "ReturnStatement",
                  "argument": {
                    "type": "Literal",
                    "value": 5,
                    "raw": "5",
                    "start": 534,
                    "end": 535
                  },
                  "start": 527,
                  "end": 536
                }
              ],
              "start": 525,
              "end": 538
            },
            "id": null,
            "generator": false,
            "start": 519,
            "end": 538
          },
          "definite": false,
          "start": 509,
          "end": 538
        }
      ],
      "declare": false,
      "start": 505,
      "end": 538
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
            "name": "lambda10",
            "optional": false,
            "typeAnnotation": null,
            "start": 543,
            "end": 551
          },
          "init": {
            "type": "FunctionExpression",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "temp1",
              "optional": false,
              "typeAnnotation": null,
              "start": 563,
              "end": 568
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
                  "type": "ReturnStatement",
                  "argument": {
                    "type": "Literal",
                    "value": 5,
                    "raw": "5",
                    "start": 580,
                    "end": 581
                  },
                  "start": 573,
                  "end": 582
                }
              ],
              "start": 571,
              "end": 584
            },
            "expression": false,
            "start": 554,
            "end": 584
          },
          "definite": false,
          "start": 543,
          "end": 584
        }
      ],
      "declare": false,
      "start": 539,
      "end": 584
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 53,
  "end": 585
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "var",
    "start": 53,
    "end": 56
  },
  {
    "type": "Identifier",
    "value": "lambda",
    "start": 57,
    "end": 63
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 64,
    "end": 65
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 66,
    "end": 67
  },
  {
    "type": "Identifier",
    "value": "l1",
    "start": 67,
    "end": 69
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 69,
    "end": 70
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 71,
    "end": 73
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 74,
    "end": 75
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 76,
    "end": 77
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 77,
    "end": 78
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 102,
    "end": 105
  },
  {
    "type": "Identifier",
    "value": "lambd2",
    "start": 106,
    "end": 112
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 113,
    "end": 114
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 115,
    "end": 116
  },
  {
    "type": "Identifier",
    "value": "ll1",
    "start": 116,
    "end": 119
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 119,
    "end": 120
  },
  {
    "type": "Identifier",
    "value": "ll2",
    "start": 121,
    "end": 124
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 124,
    "end": 125
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 126,
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
    "value": "=>",
    "start": 134,
    "end": 136
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 137,
    "end": 138
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 139,
    "end": 140
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 160,
    "end": 163
  },
  {
    "type": "Identifier",
    "value": "lamda3",
    "start": 164,
    "end": 170
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 171,
    "end": 172
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 173,
    "end": 181
  },
  {
    "type": "Identifier",
    "value": "myLambda3",
    "start": 182,
    "end": 191
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 191,
    "end": 192
  },
  {
    "type": "Identifier",
    "value": "myParam",
    "start": 192,
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
    "value": "{",
    "start": 201,
    "end": 202
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 203,
    "end": 204
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 205,
    "end": 208
  },
  {
    "type": "Identifier",
    "value": "lamda4",
    "start": 209,
    "end": 215
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 216,
    "end": 217
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 218,
    "end": 219
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 219,
    "end": 220
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 221,
    "end": 223
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 224,
    "end": 225
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 226,
    "end": 232
  },
  {
    "type": "Null",
    "value": "null",
    "start": 233,
    "end": 237
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 238,
    "end": 239
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 239,
    "end": 240
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 296,
    "end": 299
  },
  {
    "type": "Identifier",
    "value": "lambda5",
    "start": 300,
    "end": 307
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 308,
    "end": 309
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 310,
    "end": 318
  },
  {
    "type": "Identifier",
    "value": "temp",
    "start": 319,
    "end": 323
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 323,
    "end": 324
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 324,
    "end": 325
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 326,
    "end": 327
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 328,
    "end": 334
  },
  {
    "type": "Null",
    "value": "null",
    "start": 335,
    "end": 339
  },
  {
    "type": "Punctuator",
    "value": ";",
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
    "type": "Keyword",
    "value": "var",
    "start": 343,
    "end": 346
  },
  {
    "type": "Identifier",
    "value": "lambda6",
    "start": 347,
    "end": 354
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 355,
    "end": 356
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 357,
    "end": 358
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 358,
    "end": 359
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 360,
    "end": 362
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 363,
    "end": 364
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 365,
    "end": 371
  },
  {
    "type": "Null",
    "value": "null",
    "start": 372,
    "end": 376
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 376,
    "end": 377
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 378,
    "end": 379
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 380,
    "end": 383
  },
  {
    "type": "Identifier",
    "value": "lambda7",
    "start": 384,
    "end": 391
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 392,
    "end": 393
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 394,
    "end": 402
  },
  {
    "type": "Identifier",
    "value": "temp",
    "start": 403,
    "end": 407
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 407,
    "end": 408
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 408,
    "end": 409
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 410,
    "end": 411
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 412,
    "end": 418
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 419,
    "end": 428
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 428,
    "end": 429
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 430,
    "end": 431
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 432,
    "end": 435
  },
  {
    "type": "Identifier",
    "value": "lambda8",
    "start": 436,
    "end": 443
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 444,
    "end": 445
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 446,
    "end": 447
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 447,
    "end": 448
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 449,
    "end": 451
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 452,
    "end": 453
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 454,
    "end": 460
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 461,
    "end": 470
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 470,
    "end": 471
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 472,
    "end": 473
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 505,
    "end": 508
  },
  {
    "type": "Identifier",
    "value": "lambda9",
    "start": 509,
    "end": 516
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 517,
    "end": 518
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 519,
    "end": 520
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 520,
    "end": 521
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 522,
    "end": 524
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 525,
    "end": 526
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 527,
    "end": 533
  },
  {
    "type": "Numeric",
    "value": "5",
    "start": 534,
    "end": 535
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 535,
    "end": 536
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 537,
    "end": 538
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 539,
    "end": 542
  },
  {
    "type": "Identifier",
    "value": "lambda10",
    "start": 543,
    "end": 551
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 552,
    "end": 553
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 554,
    "end": 562
  },
  {
    "type": "Identifier",
    "value": "temp1",
    "start": 563,
    "end": 568
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 568,
    "end": 569
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 569,
    "end": 570
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 571,
    "end": 572
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 573,
    "end": 579
  },
  {
    "type": "Numeric",
    "value": "5",
    "start": 580,
    "end": 581
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 581,
    "end": 582
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 583,
    "end": 584
  }
]
```
