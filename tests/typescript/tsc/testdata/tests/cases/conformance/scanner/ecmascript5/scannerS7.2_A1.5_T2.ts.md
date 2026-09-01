__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "eval",
          "optional": false,
          "typeAnnotation": null,
          "start": 319,
          "end": 323
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "value": " var x = 1 ",
            "raw": "\"\\u00A0var x\\u00A0= 1\\u00A0\"",
            "start": 324,
            "end": 352
          }
        ],
        "optional": false,
        "start": 319,
        "end": 353
      },
      "directive": null,
      "start": 319,
      "end": 354
    },
    {
      "type": "IfStatement",
      "test": {
        "type": "BinaryExpression",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": null,
          "start": 359,
          "end": 360
        },
        "operator": "!==",
        "right": {
          "type": "Literal",
          "value": 1,
          "raw": "1",
          "start": 365,
          "end": 366
        },
        "start": 359,
        "end": 366
      },
      "consequent": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "CallExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "$ERROR",
                "optional": false,
                "typeAnnotation": null,
                "start": 372,
                "end": 378
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "BinaryExpression",
                  "left": {
                    "type": "Literal",
                    "value": "#1: eval(\"\\u00A0var x\\u00A0= 1\\u00A0\"); x === 1. Actual: ",
                    "raw": "'#1: eval(\"\\\\u00A0var x\\\\u00A0= 1\\\\u00A0\"); x === 1. Actual: '",
                    "start": 379,
                    "end": 441
                  },
                  "operator": "+",
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 445,
                    "end": 446
                  },
                  "start": 379,
                  "end": 447
                }
              ],
              "optional": false,
              "start": 372,
              "end": 448
            },
            "directive": null,
            "start": 372,
            "end": 449
          }
        ],
        "start": 368,
        "end": 451
      },
      "alternate": null,
      "start": 355,
      "end": 451
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
            "name": "x",
            "optional": false,
            "typeAnnotation": null,
            "start": 468,
            "end": 469
          },
          "init": {
            "type": "Literal",
            "value": 1,
            "raw": "1",
            "start": 472,
            "end": 473
          },
          "definite": false,
          "start": 468,
          "end": 473
        }
      ],
      "declare": false,
      "start": 464,
      "end": 475
    },
    {
      "type": "IfStatement",
      "test": {
        "type": "BinaryExpression",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": null,
          "start": 480,
          "end": 481
        },
        "operator": "!==",
        "right": {
          "type": "Literal",
          "value": 1,
          "raw": "1",
          "start": 486,
          "end": 487
        },
        "start": 480,
        "end": 487
      },
      "consequent": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "CallExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "$ERROR",
                "optional": false,
                "typeAnnotation": null,
                "start": 493,
                "end": 499
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "BinaryExpression",
                  "left": {
                    "type": "Literal",
                    "value": "#2:  var x = 1 ; x === 1. Actual: ",
                    "raw": "'#2:  var x = 1 ; x === 1. Actual: '",
                    "start": 500,
                    "end": 536
                  },
                  "operator": "+",
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 540,
                    "end": 541
                  },
                  "start": 500,
                  "end": 542
                }
              ],
              "optional": false,
              "start": 493,
              "end": 543
            },
            "directive": null,
            "start": 493,
            "end": 544
          }
        ],
        "start": 489,
        "end": 546
      },
      "alternate": null,
      "start": 476,
      "end": 546
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 319,
  "end": 548
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Identifier",
    "value": "eval",
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
    "type": "String",
    "value": "\"\\u00A0var x\\u00A0= 1\\u00A0\"",
    "start": 324,
    "end": 352
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 352,
    "end": 353
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 353,
    "end": 354
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 355,
    "end": 357
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 358,
    "end": 359
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 359,
    "end": 360
  },
  {
    "type": "Punctuator",
    "value": "!==",
    "start": 361,
    "end": 364
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 365,
    "end": 366
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 366,
    "end": 367
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 368,
    "end": 369
  },
  {
    "type": "Identifier",
    "value": "$ERROR",
    "start": 372,
    "end": 378
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 378,
    "end": 379
  },
  {
    "type": "String",
    "value": "'#1: eval(\"\\\\u00A0var x\\\\u00A0= 1\\\\u00A0\"); x === 1. Actual: '",
    "start": 379,
    "end": 441
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 442,
    "end": 443
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 444,
    "end": 445
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 445,
    "end": 446
  },
  {
    "type": "Punctuator",
    "value": ")",
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
    "value": ";",
    "start": 448,
    "end": 449
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 450,
    "end": 451
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 464,
    "end": 467
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 468,
    "end": 469
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 470,
    "end": 471
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 472,
    "end": 473
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 474,
    "end": 475
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 476,
    "end": 478
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 479,
    "end": 480
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 480,
    "end": 481
  },
  {
    "type": "Punctuator",
    "value": "!==",
    "start": 482,
    "end": 485
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 486,
    "end": 487
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 487,
    "end": 488
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 489,
    "end": 490
  },
  {
    "type": "Identifier",
    "value": "$ERROR",
    "start": 493,
    "end": 499
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 499,
    "end": 500
  },
  {
    "type": "String",
    "value": "'#2:  var x = 1 ; x === 1. Actual: '",
    "start": 500,
    "end": 536
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 537,
    "end": 538
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 539,
    "end": 540
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 540,
    "end": 541
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 541,
    "end": 542
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 542,
    "end": 543
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 543,
    "end": 544
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 545,
    "end": 546
  }
]
```
