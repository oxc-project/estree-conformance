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
        "name": "f",
        "optional": false,
        "typeAnnotation": null,
        "start": 277,
        "end": 278
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSBooleanKeyword",
              "start": 282,
              "end": 289
            },
            "start": 280,
            "end": 289
          },
          "start": 279,
          "end": 289
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "y",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSBooleanKeyword",
              "start": 294,
              "end": 301
            },
            "start": 292,
            "end": 301
          },
          "start": 291,
          "end": 301
        }
      ],
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
                  "name": "value_def",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSUnionType",
                      "types": [
                        {
                          "type": "TSTypeLiteral",
                          "members": [
                            {
                              "type": "TSPropertySignature",
                              "computed": false,
                              "optional": false,
                              "readonly": false,
                              "key": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "last_ref",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 326,
                                "end": 334
                              },
                              "typeAnnotation": {
                                "type": "TSTypeAnnotation",
                                "typeAnnotation": {
                                  "type": "TSBooleanKeyword",
                                  "start": 336,
                                  "end": 343
                                },
                                "start": 334,
                                "end": 343
                              },
                              "accessibility": null,
                              "static": false,
                              "start": 326,
                              "end": 343
                            }
                          ],
                          "start": 324,
                          "end": 345
                        },
                        {
                          "type": "TSNullKeyword",
                          "start": 348,
                          "end": 352
                        }
                      ],
                      "start": 324,
                      "end": 352
                    },
                    "start": 322,
                    "end": 352
                  },
                  "start": 313,
                  "end": 352
                },
                "init": {
                  "type": "Literal",
                  "value": null,
                  "raw": "null",
                  "start": 355,
                  "end": 359
                },
                "definite": false,
                "start": 313,
                "end": 359
              }
            ],
            "declare": false,
            "start": 309,
            "end": 360
          },
          {
            "type": "IfStatement",
            "test": {
              "type": "Identifier",
              "decorators": [],
              "name": "value_def",
              "optional": false,
              "typeAnnotation": null,
              "start": 369,
              "end": 378
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "WhileStatement",
                  "test": {
                    "type": "LogicalExpression",
                    "left": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 397,
                      "end": 398
                    },
                    "operator": "&&",
                    "right": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "y",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 402,
                      "end": 403
                    },
                    "start": 397,
                    "end": 403
                  },
                  "body": {
                    "type": "EmptyStatement",
                    "start": 404,
                    "end": 405
                  },
                  "start": 390,
                  "end": 405
                },
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "AssignmentExpression",
                    "operator": "=",
                    "left": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "value_def",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 414,
                        "end": 423
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "last_ref",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 424,
                        "end": 432
                      },
                      "optional": false,
                      "computed": false,
                      "start": 414,
                      "end": 432
                    },
                    "right": {
                      "type": "Literal",
                      "value": false,
                      "raw": "false",
                      "start": 435,
                      "end": 440
                    },
                    "start": 414,
                    "end": 440
                  },
                  "directive": null,
                  "start": 414,
                  "end": 441
                }
              ],
              "start": 380,
              "end": 447
            },
            "alternate": null,
            "start": 365,
            "end": 447
          }
        ],
        "start": 303,
        "end": 449
      },
      "expression": false,
      "start": 268,
      "end": 449
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "g",
        "optional": false,
        "typeAnnotation": null,
        "start": 460,
        "end": 461
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSBooleanKeyword",
              "start": 465,
              "end": 472
            },
            "start": 463,
            "end": 472
          },
          "start": 462,
          "end": 472
        }
      ],
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
                  "name": "value_def",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSUnionType",
                      "types": [
                        {
                          "type": "TSTypeLiteral",
                          "members": [
                            {
                              "type": "TSPropertySignature",
                              "computed": false,
                              "optional": false,
                              "readonly": false,
                              "key": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "last_ref",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 497,
                                "end": 505
                              },
                              "typeAnnotation": {
                                "type": "TSTypeAnnotation",
                                "typeAnnotation": {
                                  "type": "TSBooleanKeyword",
                                  "start": 507,
                                  "end": 514
                                },
                                "start": 505,
                                "end": 514
                              },
                              "accessibility": null,
                              "static": false,
                              "start": 497,
                              "end": 514
                            }
                          ],
                          "start": 495,
                          "end": 516
                        },
                        {
                          "type": "TSNullKeyword",
                          "start": 519,
                          "end": 523
                        }
                      ],
                      "start": 495,
                      "end": 523
                    },
                    "start": 493,
                    "end": 523
                  },
                  "start": 484,
                  "end": 523
                },
                "init": {
                  "type": "Literal",
                  "value": null,
                  "raw": "null",
                  "start": 526,
                  "end": 530
                },
                "definite": false,
                "start": 484,
                "end": 530
              }
            ],
            "declare": false,
            "start": 480,
            "end": 531
          },
          {
            "type": "IfStatement",
            "test": {
              "type": "Identifier",
              "decorators": [],
              "name": "value_def",
              "optional": false,
              "typeAnnotation": null,
              "start": 540,
              "end": 549
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "WhileStatement",
                  "test": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 568,
                    "end": 569
                  },
                  "body": {
                    "type": "EmptyStatement",
                    "start": 570,
                    "end": 571
                  },
                  "start": 561,
                  "end": 571
                },
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "AssignmentExpression",
                    "operator": "=",
                    "left": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "value_def",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 580,
                        "end": 589
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "last_ref",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 590,
                        "end": 598
                      },
                      "optional": false,
                      "computed": false,
                      "start": 580,
                      "end": 598
                    },
                    "right": {
                      "type": "Literal",
                      "value": false,
                      "raw": "false",
                      "start": 601,
                      "end": 606
                    },
                    "start": 580,
                    "end": 606
                  },
                  "directive": null,
                  "start": 580,
                  "end": 607
                }
              ],
              "start": 551,
              "end": 613
            },
            "alternate": null,
            "start": 536,
            "end": 613
          }
        ],
        "start": 474,
        "end": 615
      },
      "expression": false,
      "start": 451,
      "end": 615
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 615
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "function",
    "start": 268,
    "end": 276
  },
  {
    "type": "Identifier",
    "value": "f",
    "start": 277,
    "end": 278
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 278,
    "end": 279
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 279,
    "end": 280
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 280,
    "end": 281
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 282,
    "end": 289
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 289,
    "end": 290
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 291,
    "end": 292
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 292,
    "end": 293
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 294,
    "end": 301
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 301,
    "end": 302
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 303,
    "end": 304
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 309,
    "end": 312
  },
  {
    "type": "Identifier",
    "value": "value_def",
    "start": 313,
    "end": 322
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 322,
    "end": 323
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 324,
    "end": 325
  },
  {
    "type": "Identifier",
    "value": "last_ref",
    "start": 326,
    "end": 334
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 334,
    "end": 335
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 336,
    "end": 343
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 344,
    "end": 345
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 346,
    "end": 347
  },
  {
    "type": "Null",
    "value": "null",
    "start": 348,
    "end": 352
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 353,
    "end": 354
  },
  {
    "type": "Null",
    "value": "null",
    "start": 355,
    "end": 359
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 359,
    "end": 360
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 365,
    "end": 367
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 368,
    "end": 369
  },
  {
    "type": "Identifier",
    "value": "value_def",
    "start": 369,
    "end": 378
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 378,
    "end": 379
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 380,
    "end": 381
  },
  {
    "type": "Keyword",
    "value": "while",
    "start": 390,
    "end": 395
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 396,
    "end": 397
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 397,
    "end": 398
  },
  {
    "type": "Punctuator",
    "value": "&&",
    "start": 399,
    "end": 401
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 402,
    "end": 403
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 403,
    "end": 404
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 404,
    "end": 405
  },
  {
    "type": "Identifier",
    "value": "value_def",
    "start": 414,
    "end": 423
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 423,
    "end": 424
  },
  {
    "type": "Identifier",
    "value": "last_ref",
    "start": 424,
    "end": 432
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 433,
    "end": 434
  },
  {
    "type": "Boolean",
    "value": "false",
    "start": 435,
    "end": 440
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 440,
    "end": 441
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 446,
    "end": 447
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 448,
    "end": 449
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 451,
    "end": 459
  },
  {
    "type": "Identifier",
    "value": "g",
    "start": 460,
    "end": 461
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 461,
    "end": 462
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 462,
    "end": 463
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 463,
    "end": 464
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 465,
    "end": 472
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 472,
    "end": 473
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 474,
    "end": 475
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 480,
    "end": 483
  },
  {
    "type": "Identifier",
    "value": "value_def",
    "start": 484,
    "end": 493
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 493,
    "end": 494
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 495,
    "end": 496
  },
  {
    "type": "Identifier",
    "value": "last_ref",
    "start": 497,
    "end": 505
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 505,
    "end": 506
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 507,
    "end": 514
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 515,
    "end": 516
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 517,
    "end": 518
  },
  {
    "type": "Null",
    "value": "null",
    "start": 519,
    "end": 523
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 524,
    "end": 525
  },
  {
    "type": "Null",
    "value": "null",
    "start": 526,
    "end": 530
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 530,
    "end": 531
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 536,
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
    "value": "value_def",
    "start": 540,
    "end": 549
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 549,
    "end": 550
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 551,
    "end": 552
  },
  {
    "type": "Keyword",
    "value": "while",
    "start": 561,
    "end": 566
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 567,
    "end": 568
  },
  {
    "type": "Identifier",
    "value": "x",
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
    "value": ";",
    "start": 570,
    "end": 571
  },
  {
    "type": "Identifier",
    "value": "value_def",
    "start": 580,
    "end": 589
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 589,
    "end": 590
  },
  {
    "type": "Identifier",
    "value": "last_ref",
    "start": 590,
    "end": 598
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 599,
    "end": 600
  },
  {
    "type": "Boolean",
    "value": "false",
    "start": 601,
    "end": 606
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 606,
    "end": 607
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 612,
    "end": 613
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 614,
    "end": 615
  }
]
```
