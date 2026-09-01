__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "FunctionDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "overloaded",
          "optional": false,
          "typeAnnotation": null,
          "start": 275,
          "end": 285
        },
        "generator": false,
        "async": false,
        "declare": false,
        "typeParameters": null,
        "params": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": null,
            "start": 286,
            "end": 287
          },
          {
            "type": "Identifier",
            "decorators": [],
            "name": "b",
            "optional": false,
            "typeAnnotation": null,
            "start": 288,
            "end": 289
          }
        ],
        "returnType": null,
        "body": {
          "type": "BlockStatement",
          "body": [
            {
              "type": "IfStatement",
              "test": {
                "type": "LogicalExpression",
                "left": {
                  "type": "BinaryExpression",
                  "left": {
                    "type": "UnaryExpression",
                    "operator": "typeof",
                    "argument": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "a",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 306,
                      "end": 307
                    },
                    "prefix": true,
                    "start": 299,
                    "end": 307
                  },
                  "operator": "===",
                  "right": {
                    "type": "Literal",
                    "value": "string",
                    "raw": "\"string\"",
                    "start": 312,
                    "end": 320
                  },
                  "start": 299,
                  "end": 320
                },
                "operator": "&&",
                "right": {
                  "type": "BinaryExpression",
                  "left": {
                    "type": "UnaryExpression",
                    "operator": "typeof",
                    "argument": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "b",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 331,
                      "end": 332
                    },
                    "prefix": true,
                    "start": 324,
                    "end": 332
                  },
                  "operator": "===",
                  "right": {
                    "type": "Literal",
                    "value": "string",
                    "raw": "\"string\"",
                    "start": 337,
                    "end": 345
                  },
                  "start": 324,
                  "end": 345
                },
                "start": 299,
                "end": 345
              },
              "consequent": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "BinaryExpression",
                      "left": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "a",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 360,
                        "end": 361
                      },
                      "operator": "+",
                      "right": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "b",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 364,
                        "end": 365
                      },
                      "start": 360,
                      "end": 365
                    },
                    "start": 353,
                    "end": 366
                  }
                ],
                "start": 347,
                "end": 370
              },
              "alternate": {
                "type": "IfStatement",
                "test": {
                  "type": "LogicalExpression",
                  "left": {
                    "type": "BinaryExpression",
                    "left": {
                      "type": "UnaryExpression",
                      "operator": "typeof",
                      "argument": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "a",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 387,
                        "end": 388
                      },
                      "prefix": true,
                      "start": 380,
                      "end": 388
                    },
                    "operator": "===",
                    "right": {
                      "type": "Literal",
                      "value": "number",
                      "raw": "\"number\"",
                      "start": 393,
                      "end": 401
                    },
                    "start": 380,
                    "end": 401
                  },
                  "operator": "&&",
                  "right": {
                    "type": "BinaryExpression",
                    "left": {
                      "type": "UnaryExpression",
                      "operator": "typeof",
                      "argument": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "b",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 412,
                        "end": 413
                      },
                      "prefix": true,
                      "start": 405,
                      "end": 413
                    },
                    "operator": "===",
                    "right": {
                      "type": "Literal",
                      "value": "number",
                      "raw": "\"number\"",
                      "start": 418,
                      "end": 426
                    },
                    "start": 405,
                    "end": 426
                  },
                  "start": 380,
                  "end": 426
                },
                "consequent": {
                  "type": "BlockStatement",
                  "body": [
                    {
                      "type": "ReturnStatement",
                      "argument": {
                        "type": "BinaryExpression",
                        "left": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "a",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 441,
                          "end": 442
                        },
                        "operator": "+",
                        "right": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "b",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 445,
                          "end": 446
                        },
                        "start": 441,
                        "end": 446
                      },
                      "start": 434,
                      "end": 447
                    }
                  ],
                  "start": 428,
                  "end": 451
                },
                "alternate": null,
                "start": 376,
                "end": 451
              },
              "start": 295,
              "end": 451
            },
            {
              "type": "ThrowStatement",
              "argument": {
                "type": "NewExpression",
                "callee": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Error",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 464,
                  "end": 469
                },
                "typeArguments": null,
                "arguments": [
                  {
                    "type": "Literal",
                    "value": "Invalid arguments",
                    "raw": "\"Invalid arguments\"",
                    "start": 470,
                    "end": 489
                  }
                ],
                "start": 460,
                "end": 490
              },
              "start": 454,
              "end": 491
            }
          ],
          "start": 291,
          "end": 493
        },
        "expression": false,
        "start": 266,
        "end": 493
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 259,
      "end": 493
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
            "name": "o1",
            "optional": false,
            "typeAnnotation": null,
            "start": 498,
            "end": 500
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "overloaded",
              "optional": false,
              "typeAnnotation": null,
              "start": 503,
              "end": 513
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Literal",
                "value": 1,
                "raw": "1",
                "start": 514,
                "end": 515
              },
              {
                "type": "Literal",
                "value": 2,
                "raw": "2",
                "start": 516,
                "end": 517
              }
            ],
            "optional": false,
            "start": 503,
            "end": 518
          },
          "definite": false,
          "start": 498,
          "end": 518
        }
      ],
      "declare": false,
      "start": 494,
      "end": 518
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
            "name": "o2",
            "optional": false,
            "typeAnnotation": null,
            "start": 523,
            "end": 525
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "overloaded",
              "optional": false,
              "typeAnnotation": null,
              "start": 528,
              "end": 538
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Literal",
                "value": "zero",
                "raw": "\"zero\"",
                "start": 539,
                "end": 545
              },
              {
                "type": "Literal",
                "value": "one",
                "raw": "\"one\"",
                "start": 547,
                "end": 552
              }
            ],
            "optional": false,
            "start": 528,
            "end": 553
          },
          "definite": false,
          "start": 523,
          "end": 553
        }
      ],
      "declare": false,
      "start": 519,
      "end": 553
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
            "name": "o3",
            "optional": false,
            "typeAnnotation": null,
            "start": 558,
            "end": 560
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "overloaded",
              "optional": false,
              "typeAnnotation": null,
              "start": 563,
              "end": 573
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Literal",
                "value": "a",
                "raw": "\"a\"",
                "start": 574,
                "end": 577
              },
              {
                "type": "Literal",
                "value": false,
                "raw": "false",
                "start": 578,
                "end": 583
              }
            ],
            "optional": false,
            "start": 563,
            "end": 584
          },
          "definite": false,
          "start": 558,
          "end": 584
        }
      ],
      "declare": false,
      "start": 554,
      "end": 584
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "FunctionDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "uncheckedInternally",
          "optional": false,
          "typeAnnotation": null,
          "start": 766,
          "end": 785
        },
        "generator": false,
        "async": false,
        "declare": false,
        "typeParameters": null,
        "params": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": null,
            "start": 786,
            "end": 787
          },
          {
            "type": "Identifier",
            "decorators": [],
            "name": "b",
            "optional": false,
            "typeAnnotation": null,
            "start": 789,
            "end": 790
          }
        ],
        "returnType": null,
        "body": {
          "type": "BlockStatement",
          "body": [
            {
              "type": "ReturnStatement",
              "argument": {
                "type": "BinaryExpression",
                "left": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 805,
                  "end": 806
                },
                "operator": "+",
                "right": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "b",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 809,
                  "end": 810
                },
                "start": 805,
                "end": 810
              },
              "start": 798,
              "end": 811
            }
          ],
          "start": 792,
          "end": 813
        },
        "expression": false,
        "start": 757,
        "end": 813
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 750,
      "end": 813
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "uncheckedInternally",
          "optional": false,
          "typeAnnotation": null,
          "start": 814,
          "end": 833
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "value": 1,
            "raw": "1",
            "start": 834,
            "end": 835
          },
          {
            "type": "Literal",
            "value": 2,
            "raw": "2",
            "start": 836,
            "end": 837
          }
        ],
        "optional": false,
        "start": 814,
        "end": 838
      },
      "directive": null,
      "start": 814,
      "end": 838
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "uncheckedInternally",
          "optional": false,
          "typeAnnotation": null,
          "start": 839,
          "end": 858
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "value": "zero",
            "raw": "\"zero\"",
            "start": 859,
            "end": 865
          },
          {
            "type": "Literal",
            "value": "one",
            "raw": "\"one\"",
            "start": 867,
            "end": 872
          }
        ],
        "optional": false,
        "start": 839,
        "end": 873
      },
      "directive": null,
      "start": 839,
      "end": 873
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 259,
  "end": 873
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "export",
    "start": 259,
    "end": 265
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 266,
    "end": 274
  },
  {
    "type": "Identifier",
    "value": "overloaded",
    "start": 275,
    "end": 285
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 285,
    "end": 286
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 286,
    "end": 287
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 287,
    "end": 288
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 288,
    "end": 289
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 289,
    "end": 290
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 291,
    "end": 292
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 295,
    "end": 297
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 298,
    "end": 299
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 299,
    "end": 305
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 306,
    "end": 307
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 308,
    "end": 311
  },
  {
    "type": "String",
    "value": "\"string\"",
    "start": 312,
    "end": 320
  },
  {
    "type": "Punctuator",
    "value": "&&",
    "start": 321,
    "end": 323
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 324,
    "end": 330
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 331,
    "end": 332
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 333,
    "end": 336
  },
  {
    "type": "String",
    "value": "\"string\"",
    "start": 337,
    "end": 345
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 345,
    "end": 346
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 347,
    "end": 348
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 353,
    "end": 359
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 360,
    "end": 361
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 362,
    "end": 363
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 364,
    "end": 365
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 365,
    "end": 366
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 369,
    "end": 370
  },
  {
    "type": "Keyword",
    "value": "else",
    "start": 371,
    "end": 375
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 376,
    "end": 378
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 379,
    "end": 380
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 380,
    "end": 386
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 387,
    "end": 388
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 389,
    "end": 392
  },
  {
    "type": "String",
    "value": "\"number\"",
    "start": 393,
    "end": 401
  },
  {
    "type": "Punctuator",
    "value": "&&",
    "start": 402,
    "end": 404
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 405,
    "end": 411
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 412,
    "end": 413
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 414,
    "end": 417
  },
  {
    "type": "String",
    "value": "\"number\"",
    "start": 418,
    "end": 426
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 426,
    "end": 427
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 428,
    "end": 429
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 434,
    "end": 440
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 441,
    "end": 442
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 443,
    "end": 444
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 445,
    "end": 446
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 446,
    "end": 447
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 450,
    "end": 451
  },
  {
    "type": "Keyword",
    "value": "throw",
    "start": 454,
    "end": 459
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 460,
    "end": 463
  },
  {
    "type": "Identifier",
    "value": "Error",
    "start": 464,
    "end": 469
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 469,
    "end": 470
  },
  {
    "type": "String",
    "value": "\"Invalid arguments\"",
    "start": 470,
    "end": 489
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 489,
    "end": 490
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 490,
    "end": 491
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 492,
    "end": 493
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 494,
    "end": 497
  },
  {
    "type": "Identifier",
    "value": "o1",
    "start": 498,
    "end": 500
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 501,
    "end": 502
  },
  {
    "type": "Identifier",
    "value": "overloaded",
    "start": 503,
    "end": 513
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 513,
    "end": 514
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 514,
    "end": 515
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 515,
    "end": 516
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 516,
    "end": 517
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 517,
    "end": 518
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 519,
    "end": 522
  },
  {
    "type": "Identifier",
    "value": "o2",
    "start": 523,
    "end": 525
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 526,
    "end": 527
  },
  {
    "type": "Identifier",
    "value": "overloaded",
    "start": 528,
    "end": 538
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 538,
    "end": 539
  },
  {
    "type": "String",
    "value": "\"zero\"",
    "start": 539,
    "end": 545
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 545,
    "end": 546
  },
  {
    "type": "String",
    "value": "\"one\"",
    "start": 547,
    "end": 552
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 552,
    "end": 553
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 554,
    "end": 557
  },
  {
    "type": "Identifier",
    "value": "o3",
    "start": 558,
    "end": 560
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 561,
    "end": 562
  },
  {
    "type": "Identifier",
    "value": "overloaded",
    "start": 563,
    "end": 573
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 573,
    "end": 574
  },
  {
    "type": "String",
    "value": "\"a\"",
    "start": 574,
    "end": 577
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 577,
    "end": 578
  },
  {
    "type": "Boolean",
    "value": "false",
    "start": 578,
    "end": 583
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 583,
    "end": 584
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 750,
    "end": 756
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 757,
    "end": 765
  },
  {
    "type": "Identifier",
    "value": "uncheckedInternally",
    "start": 766,
    "end": 785
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 785,
    "end": 786
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 786,
    "end": 787
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 787,
    "end": 788
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 789,
    "end": 790
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 790,
    "end": 791
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 792,
    "end": 793
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 798,
    "end": 804
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 805,
    "end": 806
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 807,
    "end": 808
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 809,
    "end": 810
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 810,
    "end": 811
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 812,
    "end": 813
  },
  {
    "type": "Identifier",
    "value": "uncheckedInternally",
    "start": 814,
    "end": 833
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 833,
    "end": 834
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 834,
    "end": 835
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 835,
    "end": 836
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 836,
    "end": 837
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 837,
    "end": 838
  },
  {
    "type": "Identifier",
    "value": "uncheckedInternally",
    "start": 839,
    "end": 858
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 858,
    "end": 859
  },
  {
    "type": "String",
    "value": "\"zero\"",
    "start": 859,
    "end": 865
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 865,
    "end": 866
  },
  {
    "type": "String",
    "value": "\"one\"",
    "start": 867,
    "end": 872
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 872,
    "end": 873
  }
]
```
