__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
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
            "name": "f1",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSFunctionType",
                "typeParameters": null,
                "params": [
                  {
                    "type": "RestElement",
                    "decorators": [],
                    "argument": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 20,
                      "end": 21
                    },
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTupleType",
                        "elementTypes": [
                          {
                            "type": "TSNumberKeyword",
                            "start": 24,
                            "end": 30
                          },
                          {
                            "type": "TSStringKeyword",
                            "start": 32,
                            "end": 38
                          },
                          {
                            "type": "TSBooleanKeyword",
                            "start": 40,
                            "end": 47
                          }
                        ],
                        "start": 23,
                        "end": 48
                      },
                      "start": 21,
                      "end": 48
                    },
                    "value": null,
                    "start": 17,
                    "end": 48
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSVoidKeyword",
                    "start": 53,
                    "end": 57
                  },
                  "start": 50,
                  "end": 57
                },
                "start": 16,
                "end": 57
              },
              "start": 14,
              "end": 57
            },
            "start": 12,
            "end": 57
          },
          "init": null,
          "definite": false,
          "start": 12,
          "end": 57
        }
      ],
      "declare": true,
      "start": 0,
      "end": 58
    },
    {
      "type": "VariableDeclaration",
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "f2",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSFunctionType",
                "typeParameters": null,
                "params": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x0",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 80,
                        "end": 86
                      },
                      "start": 78,
                      "end": 86
                    },
                    "start": 76,
                    "end": 86
                  },
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x1",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 92,
                        "end": 98
                      },
                      "start": 90,
                      "end": 98
                    },
                    "start": 88,
                    "end": 98
                  },
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x2",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSBooleanKeyword",
                        "start": 104,
                        "end": 111
                      },
                      "start": 102,
                      "end": 111
                    },
                    "start": 100,
                    "end": 111
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSVoidKeyword",
                    "start": 116,
                    "end": 120
                  },
                  "start": 113,
                  "end": 120
                },
                "start": 75,
                "end": 120
              },
              "start": 73,
              "end": 120
            },
            "start": 71,
            "end": 120
          },
          "init": null,
          "definite": false,
          "start": 71,
          "end": 120
        }
      ],
      "declare": true,
      "start": 59,
      "end": 121
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "f1",
          "optional": false,
          "typeAnnotation": null,
          "start": 123,
          "end": 125
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "f2",
          "optional": false,
          "typeAnnotation": null,
          "start": 128,
          "end": 130
        },
        "start": 123,
        "end": 130
      },
      "directive": null,
      "start": 123,
      "end": 131
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "f2",
          "optional": false,
          "typeAnnotation": null,
          "start": 132,
          "end": 134
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "f1",
          "optional": false,
          "typeAnnotation": null,
          "start": 137,
          "end": 139
        },
        "start": 132,
        "end": 139
      },
      "directive": null,
      "start": 132,
      "end": 140
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "t3",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTupleType",
                "elementTypes": [
                  {
                    "type": "TSNumberKeyword",
                    "start": 161,
                    "end": 167
                  },
                  {
                    "type": "TSStringKeyword",
                    "start": 169,
                    "end": 175
                  },
                  {
                    "type": "TSBooleanKeyword",
                    "start": 177,
                    "end": 184
                  }
                ],
                "start": 160,
                "end": 185
              },
              "start": 158,
              "end": 185
            },
            "start": 156,
            "end": 185
          },
          "init": null,
          "definite": false,
          "start": 156,
          "end": 185
        }
      ],
      "declare": true,
      "start": 142,
      "end": 186
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "t2",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTupleType",
                "elementTypes": [
                  {
                    "type": "TSStringKeyword",
                    "start": 206,
                    "end": 212
                  },
                  {
                    "type": "TSBooleanKeyword",
                    "start": 214,
                    "end": 221
                  }
                ],
                "start": 205,
                "end": 222
              },
              "start": 203,
              "end": 222
            },
            "start": 201,
            "end": 222
          },
          "init": null,
          "definite": false,
          "start": 201,
          "end": 222
        }
      ],
      "declare": true,
      "start": 187,
      "end": 223
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "t1",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTupleType",
                "elementTypes": [
                  {
                    "type": "TSBooleanKeyword",
                    "start": 243,
                    "end": 250
                  }
                ],
                "start": 242,
                "end": 251
              },
              "start": 240,
              "end": 251
            },
            "start": 238,
            "end": 251
          },
          "init": null,
          "definite": false,
          "start": 238,
          "end": 251
        }
      ],
      "declare": true,
      "start": 224,
      "end": 252
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "t0",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTupleType",
                "elementTypes": [],
                "start": 271,
                "end": 273
              },
              "start": 269,
              "end": 273
            },
            "start": 267,
            "end": 273
          },
          "init": null,
          "definite": false,
          "start": 267,
          "end": 273
        }
      ],
      "declare": true,
      "start": 253,
      "end": 274
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "ns",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTupleType",
                "elementTypes": [
                  {
                    "type": "TSNumberKeyword",
                    "start": 295,
                    "end": 301
                  },
                  {
                    "type": "TSStringKeyword",
                    "start": 303,
                    "end": 309
                  }
                ],
                "start": 294,
                "end": 310
              },
              "start": 292,
              "end": 310
            },
            "start": 290,
            "end": 310
          },
          "init": null,
          "definite": false,
          "start": 290,
          "end": 310
        }
      ],
      "declare": true,
      "start": 276,
      "end": 311
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "sn",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTupleType",
                "elementTypes": [
                  {
                    "type": "TSStringKeyword",
                    "start": 331,
                    "end": 337
                  },
                  {
                    "type": "TSNumberKeyword",
                    "start": 339,
                    "end": 345
                  }
                ],
                "start": 330,
                "end": 346
              },
              "start": 328,
              "end": 346
            },
            "start": 326,
            "end": 346
          },
          "init": null,
          "definite": false,
          "start": 326,
          "end": 346
        }
      ],
      "declare": true,
      "start": 312,
      "end": 347
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "f1",
          "optional": false,
          "typeAnnotation": null,
          "start": 349,
          "end": 351
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "value": 42,
            "raw": "42",
            "start": 352,
            "end": 354
          },
          {
            "type": "Literal",
            "value": "hello",
            "raw": "\"hello\"",
            "start": 356,
            "end": 363
          },
          {
            "type": "Literal",
            "value": true,
            "raw": "true",
            "start": 365,
            "end": 369
          }
        ],
        "optional": false,
        "start": 349,
        "end": 370
      },
      "directive": null,
      "start": 349,
      "end": 371
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "f1",
          "optional": false,
          "typeAnnotation": null,
          "start": 372,
          "end": 374
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "t3",
              "optional": false,
              "typeAnnotation": null,
              "start": 375,
              "end": 377
            },
            "property": {
              "type": "Literal",
              "value": 0,
              "raw": "0",
              "start": 378,
              "end": 379
            },
            "optional": false,
            "computed": true,
            "start": 375,
            "end": 380
          },
          {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "t3",
              "optional": false,
              "typeAnnotation": null,
              "start": 382,
              "end": 384
            },
            "property": {
              "type": "Literal",
              "value": 1,
              "raw": "1",
              "start": 385,
              "end": 386
            },
            "optional": false,
            "computed": true,
            "start": 382,
            "end": 387
          },
          {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "t3",
              "optional": false,
              "typeAnnotation": null,
              "start": 389,
              "end": 391
            },
            "property": {
              "type": "Literal",
              "value": 2,
              "raw": "2",
              "start": 392,
              "end": 393
            },
            "optional": false,
            "computed": true,
            "start": 389,
            "end": 394
          }
        ],
        "optional": false,
        "start": 372,
        "end": 395
      },
      "directive": null,
      "start": 372,
      "end": 396
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "f1",
          "optional": false,
          "typeAnnotation": null,
          "start": 397,
          "end": 399
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "SpreadElement",
            "argument": {
              "type": "Identifier",
              "decorators": [],
              "name": "t3",
              "optional": false,
              "typeAnnotation": null,
              "start": 403,
              "end": 405
            },
            "start": 400,
            "end": 405
          }
        ],
        "optional": false,
        "start": 397,
        "end": 406
      },
      "directive": null,
      "start": 397,
      "end": 407
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "f1",
          "optional": false,
          "typeAnnotation": null,
          "start": 408,
          "end": 410
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "value": 42,
            "raw": "42",
            "start": 411,
            "end": 413
          },
          {
            "type": "SpreadElement",
            "argument": {
              "type": "Identifier",
              "decorators": [],
              "name": "t2",
              "optional": false,
              "typeAnnotation": null,
              "start": 418,
              "end": 420
            },
            "start": 415,
            "end": 420
          }
        ],
        "optional": false,
        "start": 408,
        "end": 421
      },
      "directive": null,
      "start": 408,
      "end": 422
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "f1",
          "optional": false,
          "typeAnnotation": null,
          "start": 423,
          "end": 425
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "value": 42,
            "raw": "42",
            "start": 426,
            "end": 428
          },
          {
            "type": "Literal",
            "value": "hello",
            "raw": "\"hello\"",
            "start": 430,
            "end": 437
          },
          {
            "type": "SpreadElement",
            "argument": {
              "type": "Identifier",
              "decorators": [],
              "name": "t1",
              "optional": false,
              "typeAnnotation": null,
              "start": 442,
              "end": 444
            },
            "start": 439,
            "end": 444
          }
        ],
        "optional": false,
        "start": 423,
        "end": 445
      },
      "directive": null,
      "start": 423,
      "end": 446
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "f1",
          "optional": false,
          "typeAnnotation": null,
          "start": 447,
          "end": 449
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "value": 42,
            "raw": "42",
            "start": 450,
            "end": 452
          },
          {
            "type": "Literal",
            "value": "hello",
            "raw": "\"hello\"",
            "start": 454,
            "end": 461
          },
          {
            "type": "Literal",
            "value": true,
            "raw": "true",
            "start": 463,
            "end": 467
          },
          {
            "type": "SpreadElement",
            "argument": {
              "type": "Identifier",
              "decorators": [],
              "name": "t0",
              "optional": false,
              "typeAnnotation": null,
              "start": 472,
              "end": 474
            },
            "start": 469,
            "end": 474
          }
        ],
        "optional": false,
        "start": 447,
        "end": 475
      },
      "directive": null,
      "start": 447,
      "end": 476
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "f1",
          "optional": false,
          "typeAnnotation": null,
          "start": 477,
          "end": 479
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "ns",
              "optional": false,
              "typeAnnotation": null,
              "start": 480,
              "end": 482
            },
            "property": {
              "type": "Literal",
              "value": 0,
              "raw": "0",
              "start": 483,
              "end": 484
            },
            "optional": false,
            "computed": true,
            "start": 480,
            "end": 485
          },
          {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "ns",
              "optional": false,
              "typeAnnotation": null,
              "start": 487,
              "end": 489
            },
            "property": {
              "type": "Literal",
              "value": 1,
              "raw": "1",
              "start": 490,
              "end": 491
            },
            "optional": false,
            "computed": true,
            "start": 487,
            "end": 492
          },
          {
            "type": "Literal",
            "value": true,
            "raw": "true",
            "start": 494,
            "end": 498
          }
        ],
        "optional": false,
        "start": 477,
        "end": 499
      },
      "directive": null,
      "start": 477,
      "end": 500
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "f1",
          "optional": false,
          "typeAnnotation": null,
          "start": 501,
          "end": 503
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "SpreadElement",
            "argument": {
              "type": "Identifier",
              "decorators": [],
              "name": "ns",
              "optional": false,
              "typeAnnotation": null,
              "start": 507,
              "end": 509
            },
            "start": 504,
            "end": 509
          },
          {
            "type": "Literal",
            "value": true,
            "raw": "true",
            "start": 511,
            "end": 515
          }
        ],
        "optional": false,
        "start": 501,
        "end": 516
      },
      "directive": null,
      "start": 501,
      "end": 517
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "f2",
          "optional": false,
          "typeAnnotation": null,
          "start": 585,
          "end": 587
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "value": 42,
            "raw": "42",
            "start": 588,
            "end": 590
          },
          {
            "type": "Literal",
            "value": "hello",
            "raw": "\"hello\"",
            "start": 592,
            "end": 599
          },
          {
            "type": "Literal",
            "value": true,
            "raw": "true",
            "start": 601,
            "end": 605
          }
        ],
        "optional": false,
        "start": 585,
        "end": 606
      },
      "directive": null,
      "start": 585,
      "end": 607
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "f2",
          "optional": false,
          "typeAnnotation": null,
          "start": 608,
          "end": 610
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "t3",
              "optional": false,
              "typeAnnotation": null,
              "start": 611,
              "end": 613
            },
            "property": {
              "type": "Literal",
              "value": 0,
              "raw": "0",
              "start": 614,
              "end": 615
            },
            "optional": false,
            "computed": true,
            "start": 611,
            "end": 616
          },
          {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "t3",
              "optional": false,
              "typeAnnotation": null,
              "start": 618,
              "end": 620
            },
            "property": {
              "type": "Literal",
              "value": 1,
              "raw": "1",
              "start": 621,
              "end": 622
            },
            "optional": false,
            "computed": true,
            "start": 618,
            "end": 623
          },
          {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "t3",
              "optional": false,
              "typeAnnotation": null,
              "start": 625,
              "end": 627
            },
            "property": {
              "type": "Literal",
              "value": 2,
              "raw": "2",
              "start": 628,
              "end": 629
            },
            "optional": false,
            "computed": true,
            "start": 625,
            "end": 630
          }
        ],
        "optional": false,
        "start": 608,
        "end": 631
      },
      "directive": null,
      "start": 608,
      "end": 632
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "f2",
          "optional": false,
          "typeAnnotation": null,
          "start": 633,
          "end": 635
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "SpreadElement",
            "argument": {
              "type": "Identifier",
              "decorators": [],
              "name": "t3",
              "optional": false,
              "typeAnnotation": null,
              "start": 639,
              "end": 641
            },
            "start": 636,
            "end": 641
          }
        ],
        "optional": false,
        "start": 633,
        "end": 642
      },
      "directive": null,
      "start": 633,
      "end": 643
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "f2",
          "optional": false,
          "typeAnnotation": null,
          "start": 644,
          "end": 646
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "value": 42,
            "raw": "42",
            "start": 647,
            "end": 649
          },
          {
            "type": "SpreadElement",
            "argument": {
              "type": "Identifier",
              "decorators": [],
              "name": "t2",
              "optional": false,
              "typeAnnotation": null,
              "start": 654,
              "end": 656
            },
            "start": 651,
            "end": 656
          }
        ],
        "optional": false,
        "start": 644,
        "end": 657
      },
      "directive": null,
      "start": 644,
      "end": 658
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "f2",
          "optional": false,
          "typeAnnotation": null,
          "start": 659,
          "end": 661
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "value": 42,
            "raw": "42",
            "start": 662,
            "end": 664
          },
          {
            "type": "Literal",
            "value": "hello",
            "raw": "\"hello\"",
            "start": 666,
            "end": 673
          },
          {
            "type": "SpreadElement",
            "argument": {
              "type": "Identifier",
              "decorators": [],
              "name": "t1",
              "optional": false,
              "typeAnnotation": null,
              "start": 678,
              "end": 680
            },
            "start": 675,
            "end": 680
          }
        ],
        "optional": false,
        "start": 659,
        "end": 681
      },
      "directive": null,
      "start": 659,
      "end": 682
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "f2",
          "optional": false,
          "typeAnnotation": null,
          "start": 683,
          "end": 685
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "value": 42,
            "raw": "42",
            "start": 686,
            "end": 688
          },
          {
            "type": "Literal",
            "value": "hello",
            "raw": "\"hello\"",
            "start": 690,
            "end": 697
          },
          {
            "type": "Literal",
            "value": true,
            "raw": "true",
            "start": 699,
            "end": 703
          },
          {
            "type": "SpreadElement",
            "argument": {
              "type": "Identifier",
              "decorators": [],
              "name": "t0",
              "optional": false,
              "typeAnnotation": null,
              "start": 708,
              "end": 710
            },
            "start": 705,
            "end": 710
          }
        ],
        "optional": false,
        "start": 683,
        "end": 711
      },
      "directive": null,
      "start": 683,
      "end": 712
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "f2",
          "optional": false,
          "typeAnnotation": null,
          "start": 713,
          "end": 715
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "ns",
              "optional": false,
              "typeAnnotation": null,
              "start": 716,
              "end": 718
            },
            "property": {
              "type": "Literal",
              "value": 0,
              "raw": "0",
              "start": 719,
              "end": 720
            },
            "optional": false,
            "computed": true,
            "start": 716,
            "end": 721
          },
          {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "ns",
              "optional": false,
              "typeAnnotation": null,
              "start": 723,
              "end": 725
            },
            "property": {
              "type": "Literal",
              "value": 1,
              "raw": "1",
              "start": 726,
              "end": 727
            },
            "optional": false,
            "computed": true,
            "start": 723,
            "end": 728
          },
          {
            "type": "Literal",
            "value": true,
            "raw": "true",
            "start": 730,
            "end": 734
          }
        ],
        "optional": false,
        "start": 713,
        "end": 735
      },
      "directive": null,
      "start": 713,
      "end": 736
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "f2",
          "optional": false,
          "typeAnnotation": null,
          "start": 737,
          "end": 739
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "SpreadElement",
            "argument": {
              "type": "Identifier",
              "decorators": [],
              "name": "ns",
              "optional": false,
              "typeAnnotation": null,
              "start": 743,
              "end": 745
            },
            "start": 740,
            "end": 745
          },
          {
            "type": "Literal",
            "value": true,
            "raw": "true",
            "start": 747,
            "end": 751
          }
        ],
        "optional": false,
        "start": 737,
        "end": 752
      },
      "directive": null,
      "start": 737,
      "end": 753
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f10",
        "optional": false,
        "typeAnnotation": null,
        "start": 838,
        "end": 841
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null,
              "start": 842,
              "end": 843
            },
            "constraint": {
              "type": "TSArrayType",
              "elementType": {
                "type": "TSUnknownKeyword",
                "start": 852,
                "end": 859
              },
              "start": 852,
              "end": 861
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 842,
            "end": 861
          }
        ],
        "start": 841,
        "end": 862
      },
      "params": [
        {
          "type": "RestElement",
          "decorators": [],
          "argument": {
            "type": "Identifier",
            "decorators": [],
            "name": "args",
            "optional": false,
            "typeAnnotation": null,
            "start": 866,
            "end": 870
          },
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null,
                "start": 872,
                "end": 873
              },
              "typeArguments": null,
              "start": 872,
              "end": 873
            },
            "start": 870,
            "end": 873
          },
          "value": null,
          "start": 863,
          "end": 873
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "T",
            "optional": false,
            "typeAnnotation": null,
            "start": 876,
            "end": 877
          },
          "typeArguments": null,
          "start": 876,
          "end": 877
        },
        "start": 874,
        "end": 877
      },
      "body": null,
      "expression": false,
      "start": 821,
      "end": 878
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "x10",
            "optional": false,
            "typeAnnotation": null,
            "start": 886,
            "end": 889
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "f10",
              "optional": false,
              "typeAnnotation": null,
              "start": 892,
              "end": 895
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Literal",
                "value": 42,
                "raw": "42",
                "start": 896,
                "end": 898
              },
              {
                "type": "Literal",
                "value": "hello",
                "raw": "\"hello\"",
                "start": 900,
                "end": 907
              },
              {
                "type": "Literal",
                "value": true,
                "raw": "true",
                "start": 909,
                "end": 913
              }
            ],
            "optional": false,
            "start": 892,
            "end": 914
          },
          "definite": false,
          "start": 886,
          "end": 914
        }
      ],
      "declare": false,
      "start": 880,
      "end": 915
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "x11",
            "optional": false,
            "typeAnnotation": null,
            "start": 952,
            "end": 955
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "f10",
              "optional": false,
              "typeAnnotation": null,
              "start": 958,
              "end": 961
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Literal",
                "value": 42,
                "raw": "42",
                "start": 962,
                "end": 964
              },
              {
                "type": "Literal",
                "value": "hello",
                "raw": "\"hello\"",
                "start": 966,
                "end": 973
              }
            ],
            "optional": false,
            "start": 958,
            "end": 974
          },
          "definite": false,
          "start": 952,
          "end": 974
        }
      ],
      "declare": false,
      "start": 946,
      "end": 975
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "x12",
            "optional": false,
            "typeAnnotation": null,
            "start": 1003,
            "end": 1006
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "f10",
              "optional": false,
              "typeAnnotation": null,
              "start": 1009,
              "end": 1012
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Literal",
                "value": 42,
                "raw": "42",
                "start": 1013,
                "end": 1015
              }
            ],
            "optional": false,
            "start": 1009,
            "end": 1016
          },
          "definite": false,
          "start": 1003,
          "end": 1016
        }
      ],
      "declare": false,
      "start": 997,
      "end": 1017
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "x13",
            "optional": false,
            "typeAnnotation": null,
            "start": 1037,
            "end": 1040
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "f10",
              "optional": false,
              "typeAnnotation": null,
              "start": 1043,
              "end": 1046
            },
            "typeArguments": null,
            "arguments": [],
            "optional": false,
            "start": 1043,
            "end": 1048
          },
          "definite": false,
          "start": 1037,
          "end": 1048
        }
      ],
      "declare": false,
      "start": 1031,
      "end": 1049
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "x14",
            "optional": false,
            "typeAnnotation": null,
            "start": 1063,
            "end": 1066
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "f10",
              "optional": false,
              "typeAnnotation": null,
              "start": 1069,
              "end": 1072
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "SpreadElement",
                "argument": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "t3",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1076,
                  "end": 1078
                },
                "start": 1073,
                "end": 1078
              }
            ],
            "optional": false,
            "start": 1069,
            "end": 1079
          },
          "definite": false,
          "start": 1063,
          "end": 1079
        }
      ],
      "declare": false,
      "start": 1057,
      "end": 1080
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "x15",
            "optional": false,
            "typeAnnotation": null,
            "start": 1117,
            "end": 1120
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "f10",
              "optional": false,
              "typeAnnotation": null,
              "start": 1123,
              "end": 1126
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Literal",
                "value": 42,
                "raw": "42",
                "start": 1127,
                "end": 1129
              },
              {
                "type": "SpreadElement",
                "argument": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "t2",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1134,
                  "end": 1136
                },
                "start": 1131,
                "end": 1136
              }
            ],
            "optional": false,
            "start": 1123,
            "end": 1137
          },
          "definite": false,
          "start": 1117,
          "end": 1137
        }
      ],
      "declare": false,
      "start": 1111,
      "end": 1138
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "x16",
            "optional": false,
            "typeAnnotation": null,
            "start": 1175,
            "end": 1178
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "f10",
              "optional": false,
              "typeAnnotation": null,
              "start": 1181,
              "end": 1184
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Literal",
                "value": 42,
                "raw": "42",
                "start": 1185,
                "end": 1187
              },
              {
                "type": "Literal",
                "value": "hello",
                "raw": "\"hello\"",
                "start": 1189,
                "end": 1196
              },
              {
                "type": "SpreadElement",
                "argument": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "t1",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1201,
                  "end": 1203
                },
                "start": 1198,
                "end": 1203
              }
            ],
            "optional": false,
            "start": 1181,
            "end": 1204
          },
          "definite": false,
          "start": 1175,
          "end": 1204
        }
      ],
      "declare": false,
      "start": 1169,
      "end": 1205
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "x17",
            "optional": false,
            "typeAnnotation": null,
            "start": 1242,
            "end": 1245
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "f10",
              "optional": false,
              "typeAnnotation": null,
              "start": 1248,
              "end": 1251
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Literal",
                "value": 42,
                "raw": "42",
                "start": 1252,
                "end": 1254
              },
              {
                "type": "Literal",
                "value": "hello",
                "raw": "\"hello\"",
                "start": 1256,
                "end": 1263
              },
              {
                "type": "Literal",
                "value": true,
                "raw": "true",
                "start": 1265,
                "end": 1269
              },
              {
                "type": "SpreadElement",
                "argument": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "t0",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1274,
                  "end": 1276
                },
                "start": 1271,
                "end": 1276
              }
            ],
            "optional": false,
            "start": 1248,
            "end": 1277
          },
          "definite": false,
          "start": 1242,
          "end": 1277
        }
      ],
      "declare": false,
      "start": 1236,
      "end": 1278
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "x18",
            "optional": false,
            "typeAnnotation": null,
            "start": 1315,
            "end": 1318
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "f10",
              "optional": false,
              "typeAnnotation": null,
              "start": 1321,
              "end": 1324
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "SpreadElement",
                "argument": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "ns",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1328,
                  "end": 1330
                },
                "start": 1325,
                "end": 1330
              },
              {
                "type": "Literal",
                "value": true,
                "raw": "true",
                "start": 1332,
                "end": 1336
              }
            ],
            "optional": false,
            "start": 1321,
            "end": 1337
          },
          "definite": false,
          "start": 1315,
          "end": 1337
        }
      ],
      "declare": false,
      "start": 1309,
      "end": 1338
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "g10",
        "optional": false,
        "typeAnnotation": null,
        "start": 1383,
        "end": 1386
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "U",
              "optional": false,
              "typeAnnotation": null,
              "start": 1387,
              "end": 1388
            },
            "constraint": {
              "type": "TSArrayType",
              "elementType": {
                "type": "TSStringKeyword",
                "start": 1397,
                "end": 1403
              },
              "start": 1397,
              "end": 1405
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 1387,
            "end": 1405
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "V",
              "optional": false,
              "typeAnnotation": null,
              "start": 1407,
              "end": 1408
            },
            "constraint": {
              "type": "TSTupleType",
              "elementTypes": [
                {
                  "type": "TSNumberKeyword",
                  "start": 1418,
                  "end": 1424
                },
                {
                  "type": "TSNumberKeyword",
                  "start": 1426,
                  "end": 1432
                }
              ],
              "start": 1417,
              "end": 1433
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 1407,
            "end": 1433
          }
        ],
        "start": 1386,
        "end": 1434
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "u",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "U",
                "optional": false,
                "typeAnnotation": null,
                "start": 1438,
                "end": 1439
              },
              "typeArguments": null,
              "start": 1438,
              "end": 1439
            },
            "start": 1436,
            "end": 1439
          },
          "start": 1435,
          "end": 1439
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "v",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "V",
                "optional": false,
                "typeAnnotation": null,
                "start": 1444,
                "end": 1445
              },
              "typeArguments": null,
              "start": 1444,
              "end": 1445
            },
            "start": 1442,
            "end": 1445
          },
          "start": 1441,
          "end": 1445
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
                  "name": "x1",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1457,
                  "end": 1459
                },
                "init": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "f10",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1462,
                    "end": 1465
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "SpreadElement",
                      "argument": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "u",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1469,
                        "end": 1470
                      },
                      "start": 1466,
                      "end": 1470
                    }
                  ],
                  "optional": false,
                  "start": 1462,
                  "end": 1471
                },
                "definite": false,
                "start": 1457,
                "end": 1471
              }
            ],
            "declare": false,
            "start": 1453,
            "end": 1472
          },
          {
            "type": "VariableDeclaration",
            "kind": "let",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x2",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1487,
                  "end": 1489
                },
                "init": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "f10",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1492,
                    "end": 1495
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "SpreadElement",
                      "argument": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "v",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1499,
                        "end": 1500
                      },
                      "start": 1496,
                      "end": 1500
                    }
                  ],
                  "optional": false,
                  "start": 1492,
                  "end": 1501
                },
                "definite": false,
                "start": 1487,
                "end": 1501
              }
            ],
            "declare": false,
            "start": 1483,
            "end": 1502
          },
          {
            "type": "VariableDeclaration",
            "kind": "let",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x3",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1517,
                  "end": 1519
                },
                "init": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "f10",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1522,
                    "end": 1525
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "Literal",
                      "value": 1,
                      "raw": "1",
                      "start": 1526,
                      "end": 1527
                    },
                    {
                      "type": "SpreadElement",
                      "argument": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "u",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1532,
                        "end": 1533
                      },
                      "start": 1529,
                      "end": 1533
                    }
                  ],
                  "optional": false,
                  "start": 1522,
                  "end": 1534
                },
                "definite": false,
                "start": 1517,
                "end": 1534
              }
            ],
            "declare": false,
            "start": 1513,
            "end": 1535
          },
          {
            "type": "VariableDeclaration",
            "kind": "let",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x4",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1570,
                  "end": 1572
                },
                "init": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "f10",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1575,
                    "end": 1578
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "SpreadElement",
                      "argument": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "u",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1582,
                        "end": 1583
                      },
                      "start": 1579,
                      "end": 1583
                    },
                    {
                      "type": "SpreadElement",
                      "argument": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "v",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1588,
                        "end": 1589
                      },
                      "start": 1585,
                      "end": 1589
                    }
                  ],
                  "optional": false,
                  "start": 1575,
                  "end": 1590
                },
                "definite": false,
                "start": 1570,
                "end": 1590
              }
            ],
            "declare": false,
            "start": 1566,
            "end": 1591
          }
        ],
        "start": 1447,
        "end": 1617
      },
      "expression": false,
      "start": 1374,
      "end": 1617
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f11",
        "optional": false,
        "typeAnnotation": null,
        "start": 1636,
        "end": 1639
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null,
              "start": 1640,
              "end": 1641
            },
            "constraint": {
              "type": "TSArrayType",
              "elementType": {
                "type": "TSUnionType",
                "types": [
                  {
                    "type": "TSStringKeyword",
                    "start": 1651,
                    "end": 1657
                  },
                  {
                    "type": "TSNumberKeyword",
                    "start": 1660,
                    "end": 1666
                  },
                  {
                    "type": "TSBooleanKeyword",
                    "start": 1669,
                    "end": 1676
                  }
                ],
                "start": 1651,
                "end": 1676
              },
              "start": 1650,
              "end": 1679
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 1640,
            "end": 1679
          }
        ],
        "start": 1639,
        "end": 1680
      },
      "params": [
        {
          "type": "RestElement",
          "decorators": [],
          "argument": {
            "type": "Identifier",
            "decorators": [],
            "name": "args",
            "optional": false,
            "typeAnnotation": null,
            "start": 1684,
            "end": 1688
          },
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null,
                "start": 1690,
                "end": 1691
              },
              "typeArguments": null,
              "start": 1690,
              "end": 1691
            },
            "start": 1688,
            "end": 1691
          },
          "value": null,
          "start": 1681,
          "end": 1691
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "T",
            "optional": false,
            "typeAnnotation": null,
            "start": 1694,
            "end": 1695
          },
          "typeArguments": null,
          "start": 1694,
          "end": 1695
        },
        "start": 1692,
        "end": 1695
      },
      "body": null,
      "expression": false,
      "start": 1619,
      "end": 1696
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "z10",
            "optional": false,
            "typeAnnotation": null,
            "start": 1704,
            "end": 1707
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "f11",
              "optional": false,
              "typeAnnotation": null,
              "start": 1710,
              "end": 1713
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Literal",
                "value": 42,
                "raw": "42",
                "start": 1714,
                "end": 1716
              },
              {
                "type": "Literal",
                "value": "hello",
                "raw": "\"hello\"",
                "start": 1718,
                "end": 1725
              },
              {
                "type": "Literal",
                "value": true,
                "raw": "true",
                "start": 1727,
                "end": 1731
              }
            ],
            "optional": false,
            "start": 1710,
            "end": 1732
          },
          "definite": false,
          "start": 1704,
          "end": 1732
        }
      ],
      "declare": false,
      "start": 1698,
      "end": 1733
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "z11",
            "optional": false,
            "typeAnnotation": null,
            "start": 1764,
            "end": 1767
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "f11",
              "optional": false,
              "typeAnnotation": null,
              "start": 1770,
              "end": 1773
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Literal",
                "value": 42,
                "raw": "42",
                "start": 1774,
                "end": 1776
              },
              {
                "type": "Literal",
                "value": "hello",
                "raw": "\"hello\"",
                "start": 1778,
                "end": 1785
              }
            ],
            "optional": false,
            "start": 1770,
            "end": 1786
          },
          "definite": false,
          "start": 1764,
          "end": 1786
        }
      ],
      "declare": false,
      "start": 1758,
      "end": 1787
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "z12",
            "optional": false,
            "typeAnnotation": null,
            "start": 1812,
            "end": 1815
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "f11",
              "optional": false,
              "typeAnnotation": null,
              "start": 1818,
              "end": 1821
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Literal",
                "value": 42,
                "raw": "42",
                "start": 1822,
                "end": 1824
              }
            ],
            "optional": false,
            "start": 1818,
            "end": 1825
          },
          "definite": false,
          "start": 1812,
          "end": 1825
        }
      ],
      "declare": false,
      "start": 1806,
      "end": 1826
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "z13",
            "optional": false,
            "typeAnnotation": null,
            "start": 1842,
            "end": 1845
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "f11",
              "optional": false,
              "typeAnnotation": null,
              "start": 1848,
              "end": 1851
            },
            "typeArguments": null,
            "arguments": [],
            "optional": false,
            "start": 1848,
            "end": 1853
          },
          "definite": false,
          "start": 1842,
          "end": 1853
        }
      ],
      "declare": false,
      "start": 1836,
      "end": 1854
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "z14",
            "optional": false,
            "typeAnnotation": null,
            "start": 1868,
            "end": 1871
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "f11",
              "optional": false,
              "typeAnnotation": null,
              "start": 1874,
              "end": 1877
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "SpreadElement",
                "argument": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "t3",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1881,
                  "end": 1883
                },
                "start": 1878,
                "end": 1883
              }
            ],
            "optional": false,
            "start": 1874,
            "end": 1884
          },
          "definite": false,
          "start": 1868,
          "end": 1884
        }
      ],
      "declare": false,
      "start": 1862,
      "end": 1885
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "z15",
            "optional": false,
            "typeAnnotation": null,
            "start": 1922,
            "end": 1925
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "f11",
              "optional": false,
              "typeAnnotation": null,
              "start": 1928,
              "end": 1931
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Literal",
                "value": 42,
                "raw": "42",
                "start": 1932,
                "end": 1934
              },
              {
                "type": "SpreadElement",
                "argument": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "t2",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1939,
                  "end": 1941
                },
                "start": 1936,
                "end": 1941
              }
            ],
            "optional": false,
            "start": 1928,
            "end": 1942
          },
          "definite": false,
          "start": 1922,
          "end": 1942
        }
      ],
      "declare": false,
      "start": 1916,
      "end": 1943
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "z16",
            "optional": false,
            "typeAnnotation": null,
            "start": 1976,
            "end": 1979
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "f11",
              "optional": false,
              "typeAnnotation": null,
              "start": 1982,
              "end": 1985
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Literal",
                "value": 42,
                "raw": "42",
                "start": 1986,
                "end": 1988
              },
              {
                "type": "Literal",
                "value": "hello",
                "raw": "\"hello\"",
                "start": 1990,
                "end": 1997
              },
              {
                "type": "SpreadElement",
                "argument": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "t1",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2002,
                  "end": 2004
                },
                "start": 1999,
                "end": 2004
              }
            ],
            "optional": false,
            "start": 1982,
            "end": 2005
          },
          "definite": false,
          "start": 1976,
          "end": 2005
        }
      ],
      "declare": false,
      "start": 1970,
      "end": 2006
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "z17",
            "optional": false,
            "typeAnnotation": null,
            "start": 2040,
            "end": 2043
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "f11",
              "optional": false,
              "typeAnnotation": null,
              "start": 2046,
              "end": 2049
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Literal",
                "value": 42,
                "raw": "42",
                "start": 2050,
                "end": 2052
              },
              {
                "type": "Literal",
                "value": "hello",
                "raw": "\"hello\"",
                "start": 2054,
                "end": 2061
              },
              {
                "type": "Literal",
                "value": true,
                "raw": "true",
                "start": 2063,
                "end": 2067
              },
              {
                "type": "SpreadElement",
                "argument": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "t0",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2072,
                  "end": 2074
                },
                "start": 2069,
                "end": 2074
              }
            ],
            "optional": false,
            "start": 2046,
            "end": 2075
          },
          "definite": false,
          "start": 2040,
          "end": 2075
        }
      ],
      "declare": false,
      "start": 2034,
      "end": 2076
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "z18",
            "optional": false,
            "typeAnnotation": null,
            "start": 2107,
            "end": 2110
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "f11",
              "optional": false,
              "typeAnnotation": null,
              "start": 2113,
              "end": 2116
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "SpreadElement",
                "argument": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "ns",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2120,
                  "end": 2122
                },
                "start": 2117,
                "end": 2122
              },
              {
                "type": "Literal",
                "value": true,
                "raw": "true",
                "start": 2124,
                "end": 2128
              }
            ],
            "optional": false,
            "start": 2113,
            "end": 2129
          },
          "definite": false,
          "start": 2107,
          "end": 2129
        }
      ],
      "declare": false,
      "start": 2101,
      "end": 2130
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "g11",
        "optional": false,
        "typeAnnotation": null,
        "start": 2172,
        "end": 2175
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "U",
              "optional": false,
              "typeAnnotation": null,
              "start": 2176,
              "end": 2177
            },
            "constraint": {
              "type": "TSArrayType",
              "elementType": {
                "type": "TSStringKeyword",
                "start": 2186,
                "end": 2192
              },
              "start": 2186,
              "end": 2194
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 2176,
            "end": 2194
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "V",
              "optional": false,
              "typeAnnotation": null,
              "start": 2196,
              "end": 2197
            },
            "constraint": {
              "type": "TSTupleType",
              "elementTypes": [
                {
                  "type": "TSNumberKeyword",
                  "start": 2207,
                  "end": 2213
                },
                {
                  "type": "TSNumberKeyword",
                  "start": 2215,
                  "end": 2221
                }
              ],
              "start": 2206,
              "end": 2222
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 2196,
            "end": 2222
          }
        ],
        "start": 2175,
        "end": 2223
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "u",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "U",
                "optional": false,
                "typeAnnotation": null,
                "start": 2227,
                "end": 2228
              },
              "typeArguments": null,
              "start": 2227,
              "end": 2228
            },
            "start": 2225,
            "end": 2228
          },
          "start": 2224,
          "end": 2228
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "v",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "V",
                "optional": false,
                "typeAnnotation": null,
                "start": 2233,
                "end": 2234
              },
              "typeArguments": null,
              "start": 2233,
              "end": 2234
            },
            "start": 2231,
            "end": 2234
          },
          "start": 2230,
          "end": 2234
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
                  "name": "x1",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2246,
                  "end": 2248
                },
                "init": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "f11",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2251,
                    "end": 2254
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "SpreadElement",
                      "argument": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "u",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2258,
                        "end": 2259
                      },
                      "start": 2255,
                      "end": 2259
                    }
                  ],
                  "optional": false,
                  "start": 2251,
                  "end": 2260
                },
                "definite": false,
                "start": 2246,
                "end": 2260
              }
            ],
            "declare": false,
            "start": 2242,
            "end": 2261
          },
          {
            "type": "VariableDeclaration",
            "kind": "let",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x2",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2276,
                  "end": 2278
                },
                "init": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "f11",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2281,
                    "end": 2284
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "SpreadElement",
                      "argument": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "v",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2288,
                        "end": 2289
                      },
                      "start": 2285,
                      "end": 2289
                    }
                  ],
                  "optional": false,
                  "start": 2281,
                  "end": 2290
                },
                "definite": false,
                "start": 2276,
                "end": 2290
              }
            ],
            "declare": false,
            "start": 2272,
            "end": 2291
          },
          {
            "type": "VariableDeclaration",
            "kind": "let",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x3",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2306,
                  "end": 2308
                },
                "init": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "f11",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2311,
                    "end": 2314
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "Literal",
                      "value": 1,
                      "raw": "1",
                      "start": 2315,
                      "end": 2316
                    },
                    {
                      "type": "SpreadElement",
                      "argument": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "u",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2321,
                        "end": 2322
                      },
                      "start": 2318,
                      "end": 2322
                    }
                  ],
                  "optional": false,
                  "start": 2311,
                  "end": 2323
                },
                "definite": false,
                "start": 2306,
                "end": 2323
              }
            ],
            "declare": false,
            "start": 2302,
            "end": 2324
          },
          {
            "type": "VariableDeclaration",
            "kind": "let",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x4",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2354,
                  "end": 2356
                },
                "init": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "f11",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2359,
                    "end": 2362
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "SpreadElement",
                      "argument": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "u",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2366,
                        "end": 2367
                      },
                      "start": 2363,
                      "end": 2367
                    },
                    {
                      "type": "SpreadElement",
                      "argument": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "v",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2372,
                        "end": 2373
                      },
                      "start": 2369,
                      "end": 2373
                    }
                  ],
                  "optional": false,
                  "start": 2359,
                  "end": 2374
                },
                "definite": false,
                "start": 2354,
                "end": 2374
              }
            ],
            "declare": false,
            "start": 2350,
            "end": 2375
          }
        ],
        "start": 2236,
        "end": 2401
      },
      "expression": false,
      "start": 2163,
      "end": 2401
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "call",
        "optional": false,
        "typeAnnotation": null,
        "start": 2412,
        "end": 2416
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null,
              "start": 2417,
              "end": 2418
            },
            "constraint": {
              "type": "TSArrayType",
              "elementType": {
                "type": "TSUnknownKeyword",
                "start": 2427,
                "end": 2434
              },
              "start": 2427,
              "end": 2436
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 2417,
            "end": 2436
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "U",
              "optional": false,
              "typeAnnotation": null,
              "start": 2438,
              "end": 2439
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 2438,
            "end": 2439
          }
        ],
        "start": 2416,
        "end": 2440
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "f",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSFunctionType",
              "typeParameters": null,
              "params": [
                {
                  "type": "RestElement",
                  "decorators": [],
                  "argument": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "args",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2448,
                    "end": 2452
                  },
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "T",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2454,
                        "end": 2455
                      },
                      "typeArguments": null,
                      "start": 2454,
                      "end": 2455
                    },
                    "start": 2452,
                    "end": 2455
                  },
                  "value": null,
                  "start": 2445,
                  "end": 2455
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "U",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2460,
                    "end": 2461
                  },
                  "typeArguments": null,
                  "start": 2460,
                  "end": 2461
                },
                "start": 2457,
                "end": 2461
              },
              "start": 2444,
              "end": 2461
            },
            "start": 2442,
            "end": 2461
          },
          "start": 2441,
          "end": 2461
        },
        {
          "type": "RestElement",
          "decorators": [],
          "argument": {
            "type": "Identifier",
            "decorators": [],
            "name": "args",
            "optional": false,
            "typeAnnotation": null,
            "start": 2466,
            "end": 2470
          },
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null,
                "start": 2472,
                "end": 2473
              },
              "typeArguments": null,
              "start": 2472,
              "end": 2473
            },
            "start": 2470,
            "end": 2473
          },
          "value": null,
          "start": 2463,
          "end": 2473
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "CallExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "f",
                "optional": false,
                "typeAnnotation": null,
                "start": 2488,
                "end": 2489
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "SpreadElement",
                  "argument": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "args",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2493,
                    "end": 2497
                  },
                  "start": 2490,
                  "end": 2497
                }
              ],
              "optional": false,
              "start": 2488,
              "end": 2498
            },
            "start": 2481,
            "end": 2499
          }
        ],
        "start": 2475,
        "end": 2501
      },
      "expression": false,
      "start": 2403,
      "end": 2501
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "callr",
        "optional": false,
        "typeAnnotation": null,
        "start": 2512,
        "end": 2517
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null,
              "start": 2518,
              "end": 2519
            },
            "constraint": {
              "type": "TSArrayType",
              "elementType": {
                "type": "TSUnknownKeyword",
                "start": 2528,
                "end": 2535
              },
              "start": 2528,
              "end": 2537
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 2518,
            "end": 2537
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "U",
              "optional": false,
              "typeAnnotation": null,
              "start": 2539,
              "end": 2540
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 2539,
            "end": 2540
          }
        ],
        "start": 2517,
        "end": 2541
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "args",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null,
                "start": 2548,
                "end": 2549
              },
              "typeArguments": null,
              "start": 2548,
              "end": 2549
            },
            "start": 2546,
            "end": 2549
          },
          "start": 2542,
          "end": 2549
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "f",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSFunctionType",
              "typeParameters": null,
              "params": [
                {
                  "type": "RestElement",
                  "decorators": [],
                  "argument": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "args",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2558,
                    "end": 2562
                  },
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "T",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2564,
                        "end": 2565
                      },
                      "typeArguments": null,
                      "start": 2564,
                      "end": 2565
                    },
                    "start": 2562,
                    "end": 2565
                  },
                  "value": null,
                  "start": 2555,
                  "end": 2565
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "U",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2570,
                    "end": 2571
                  },
                  "typeArguments": null,
                  "start": 2570,
                  "end": 2571
                },
                "start": 2567,
                "end": 2571
              },
              "start": 2554,
              "end": 2571
            },
            "start": 2552,
            "end": 2571
          },
          "start": 2551,
          "end": 2571
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "CallExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "f",
                "optional": false,
                "typeAnnotation": null,
                "start": 2586,
                "end": 2587
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "SpreadElement",
                  "argument": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "args",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2591,
                    "end": 2595
                  },
                  "start": 2588,
                  "end": 2595
                }
              ],
              "optional": false,
              "start": 2586,
              "end": 2596
            },
            "start": 2579,
            "end": 2597
          }
        ],
        "start": 2573,
        "end": 2599
      },
      "expression": false,
      "start": 2503,
      "end": 2599
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f15",
        "optional": false,
        "typeAnnotation": null,
        "start": 2618,
        "end": 2621
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "a",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSStringKeyword",
              "start": 2625,
              "end": 2631
            },
            "start": 2623,
            "end": 2631
          },
          "start": 2622,
          "end": 2631
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "b",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSNumberKeyword",
              "start": 2636,
              "end": 2642
            },
            "start": 2634,
            "end": 2642
          },
          "start": 2633,
          "end": 2642
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSUnionType",
          "types": [
            {
              "type": "TSStringKeyword",
              "start": 2645,
              "end": 2651
            },
            {
              "type": "TSNumberKeyword",
              "start": 2654,
              "end": 2660
            }
          ],
          "start": 2645,
          "end": 2660
        },
        "start": 2643,
        "end": 2660
      },
      "body": null,
      "expression": false,
      "start": 2601,
      "end": 2661
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f16",
        "optional": false,
        "typeAnnotation": null,
        "start": 2679,
        "end": 2682
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "A",
              "optional": false,
              "typeAnnotation": null,
              "start": 2683,
              "end": 2684
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 2683,
            "end": 2684
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "B",
              "optional": false,
              "typeAnnotation": null,
              "start": 2686,
              "end": 2687
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 2686,
            "end": 2687
          }
        ],
        "start": 2682,
        "end": 2688
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "a",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "A",
                "optional": false,
                "typeAnnotation": null,
                "start": 2692,
                "end": 2693
              },
              "typeArguments": null,
              "start": 2692,
              "end": 2693
            },
            "start": 2690,
            "end": 2693
          },
          "start": 2689,
          "end": 2693
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "b",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "B",
                "optional": false,
                "typeAnnotation": null,
                "start": 2698,
                "end": 2699
              },
              "typeArguments": null,
              "start": 2698,
              "end": 2699
            },
            "start": 2696,
            "end": 2699
          },
          "start": 2695,
          "end": 2699
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSUnionType",
          "types": [
            {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "A",
                "optional": false,
                "typeAnnotation": null,
                "start": 2702,
                "end": 2703
              },
              "typeArguments": null,
              "start": 2702,
              "end": 2703
            },
            {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "B",
                "optional": false,
                "typeAnnotation": null,
                "start": 2706,
                "end": 2707
              },
              "typeArguments": null,
              "start": 2706,
              "end": 2707
            }
          ],
          "start": 2702,
          "end": 2707
        },
        "start": 2700,
        "end": 2707
      },
      "body": null,
      "expression": false,
      "start": 2662,
      "end": 2708
    },
    {
      "type": "VariableDeclaration",
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "x20",
            "optional": false,
            "typeAnnotation": null,
            "start": 2714,
            "end": 2717
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "call",
              "optional": false,
              "typeAnnotation": null,
              "start": 2720,
              "end": 2724
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "ArrowFunctionExpression",
                "expression": true,
                "async": false,
                "typeParameters": null,
                "params": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2726,
                    "end": 2727
                  },
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "y",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2729,
                    "end": 2730
                  }
                ],
                "returnType": null,
                "body": {
                  "type": "BinaryExpression",
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2735,
                    "end": 2736
                  },
                  "operator": "+",
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "y",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2739,
                    "end": 2740
                  },
                  "start": 2735,
                  "end": 2740
                },
                "id": null,
                "generator": false,
                "start": 2725,
                "end": 2740
              },
              {
                "type": "Literal",
                "value": 10,
                "raw": "10",
                "start": 2742,
                "end": 2744
              },
              {
                "type": "Literal",
                "value": 20,
                "raw": "20",
                "start": 2746,
                "end": 2748
              }
            ],
            "optional": false,
            "start": 2720,
            "end": 2749
          },
          "definite": false,
          "start": 2714,
          "end": 2749
        }
      ],
      "declare": false,
      "start": 2710,
      "end": 2750
    },
    {
      "type": "VariableDeclaration",
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "x21",
            "optional": false,
            "typeAnnotation": null,
            "start": 2766,
            "end": 2769
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "call",
              "optional": false,
              "typeAnnotation": null,
              "start": 2772,
              "end": 2776
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "ArrowFunctionExpression",
                "expression": true,
                "async": false,
                "typeParameters": null,
                "params": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2778,
                    "end": 2779
                  },
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "y",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2781,
                    "end": 2782
                  }
                ],
                "returnType": null,
                "body": {
                  "type": "BinaryExpression",
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2787,
                    "end": 2788
                  },
                  "operator": "+",
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "y",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2791,
                    "end": 2792
                  },
                  "start": 2787,
                  "end": 2792
                },
                "id": null,
                "generator": false,
                "start": 2777,
                "end": 2792
              },
              {
                "type": "Literal",
                "value": 10,
                "raw": "10",
                "start": 2794,
                "end": 2796
              },
              {
                "type": "Literal",
                "value": "hello",
                "raw": "\"hello\"",
                "start": 2798,
                "end": 2805
              }
            ],
            "optional": false,
            "start": 2772,
            "end": 2806
          },
          "definite": false,
          "start": 2766,
          "end": 2806
        }
      ],
      "declare": false,
      "start": 2762,
      "end": 2807
    },
    {
      "type": "VariableDeclaration",
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "x22",
            "optional": false,
            "typeAnnotation": null,
            "start": 2823,
            "end": 2826
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "call",
              "optional": false,
              "typeAnnotation": null,
              "start": 2829,
              "end": 2833
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "f15",
                "optional": false,
                "typeAnnotation": null,
                "start": 2834,
                "end": 2837
              },
              {
                "type": "Literal",
                "value": "hello",
                "raw": "\"hello\"",
                "start": 2839,
                "end": 2846
              },
              {
                "type": "Literal",
                "value": 42,
                "raw": "42",
                "start": 2848,
                "end": 2850
              }
            ],
            "optional": false,
            "start": 2829,
            "end": 2851
          },
          "definite": false,
          "start": 2823,
          "end": 2851
        }
      ],
      "declare": false,
      "start": 2819,
      "end": 2852
    },
    {
      "type": "VariableDeclaration",
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "x23",
            "optional": false,
            "typeAnnotation": null,
            "start": 2877,
            "end": 2880
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "call",
              "optional": false,
              "typeAnnotation": null,
              "start": 2883,
              "end": 2887
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "f16",
                "optional": false,
                "typeAnnotation": null,
                "start": 2888,
                "end": 2891
              },
              {
                "type": "Literal",
                "value": "hello",
                "raw": "\"hello\"",
                "start": 2893,
                "end": 2900
              },
              {
                "type": "Literal",
                "value": 42,
                "raw": "42",
                "start": 2902,
                "end": 2904
              }
            ],
            "optional": false,
            "start": 2883,
            "end": 2905
          },
          "definite": false,
          "start": 2877,
          "end": 2905
        }
      ],
      "declare": false,
      "start": 2873,
      "end": 2906
    },
    {
      "type": "VariableDeclaration",
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "x24",
            "optional": false,
            "typeAnnotation": null,
            "start": 2923,
            "end": 2926
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "call",
              "optional": false,
              "typeAnnotation": null,
              "start": 2929,
              "end": 2933
            },
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "params": [
                {
                  "type": "TSTupleType",
                  "elementTypes": [
                    {
                      "type": "TSStringKeyword",
                      "start": 2935,
                      "end": 2941
                    },
                    {
                      "type": "TSNumberKeyword",
                      "start": 2943,
                      "end": 2949
                    }
                  ],
                  "start": 2934,
                  "end": 2950
                },
                {
                  "type": "TSUnionType",
                  "types": [
                    {
                      "type": "TSStringKeyword",
                      "start": 2952,
                      "end": 2958
                    },
                    {
                      "type": "TSNumberKeyword",
                      "start": 2961,
                      "end": 2967
                    }
                  ],
                  "start": 2952,
                  "end": 2967
                }
              ],
              "start": 2933,
              "end": 2968
            },
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "f16",
                "optional": false,
                "typeAnnotation": null,
                "start": 2969,
                "end": 2972
              },
              {
                "type": "Literal",
                "value": "hello",
                "raw": "\"hello\"",
                "start": 2974,
                "end": 2981
              },
              {
                "type": "Literal",
                "value": 42,
                "raw": "42",
                "start": 2983,
                "end": 2985
              }
            ],
            "optional": false,
            "start": 2929,
            "end": 2986
          },
          "definite": false,
          "start": 2923,
          "end": 2986
        }
      ],
      "declare": false,
      "start": 2919,
      "end": 2987
    },
    {
      "type": "VariableDeclaration",
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "x30",
            "optional": false,
            "typeAnnotation": null,
            "start": 3013,
            "end": 3016
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "callr",
              "optional": false,
              "typeAnnotation": null,
              "start": 3019,
              "end": 3024
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "sn",
                "optional": false,
                "typeAnnotation": null,
                "start": 3025,
                "end": 3027
              },
              {
                "type": "ArrowFunctionExpression",
                "expression": true,
                "async": false,
                "typeParameters": null,
                "params": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 3030,
                    "end": 3031
                  },
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "y",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 3033,
                    "end": 3034
                  }
                ],
                "returnType": null,
                "body": {
                  "type": "BinaryExpression",
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 3039,
                    "end": 3040
                  },
                  "operator": "+",
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "y",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 3043,
                    "end": 3044
                  },
                  "start": 3039,
                  "end": 3044
                },
                "id": null,
                "generator": false,
                "start": 3029,
                "end": 3044
              }
            ],
            "optional": false,
            "start": 3019,
            "end": 3045
          },
          "definite": false,
          "start": 3013,
          "end": 3045
        }
      ],
      "declare": false,
      "start": 3009,
      "end": 3046
    },
    {
      "type": "VariableDeclaration",
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "x31",
            "optional": false,
            "typeAnnotation": null,
            "start": 3062,
            "end": 3065
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "callr",
              "optional": false,
              "typeAnnotation": null,
              "start": 3068,
              "end": 3073
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "sn",
                "optional": false,
                "typeAnnotation": null,
                "start": 3074,
                "end": 3076
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "f15",
                "optional": false,
                "typeAnnotation": null,
                "start": 3078,
                "end": 3081
              }
            ],
            "optional": false,
            "start": 3068,
            "end": 3082
          },
          "definite": false,
          "start": 3062,
          "end": 3082
        }
      ],
      "declare": false,
      "start": 3058,
      "end": 3083
    },
    {
      "type": "VariableDeclaration",
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "x32",
            "optional": false,
            "typeAnnotation": null,
            "start": 3108,
            "end": 3111
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "callr",
              "optional": false,
              "typeAnnotation": null,
              "start": 3114,
              "end": 3119
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "sn",
                "optional": false,
                "typeAnnotation": null,
                "start": 3120,
                "end": 3122
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "f16",
                "optional": false,
                "typeAnnotation": null,
                "start": 3124,
                "end": 3127
              }
            ],
            "optional": false,
            "start": 3114,
            "end": 3128
          },
          "definite": false,
          "start": 3108,
          "end": 3128
        }
      ],
      "declare": false,
      "start": 3104,
      "end": 3129
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "bind",
        "optional": false,
        "typeAnnotation": null,
        "start": 3160,
        "end": 3164
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null,
              "start": 3165,
              "end": 3166
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 3165,
            "end": 3166
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "U",
              "optional": false,
              "typeAnnotation": null,
              "start": 3168,
              "end": 3169
            },
            "constraint": {
              "type": "TSArrayType",
              "elementType": {
                "type": "TSUnknownKeyword",
                "start": 3178,
                "end": 3185
              },
              "start": 3178,
              "end": 3187
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 3168,
            "end": 3187
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "V",
              "optional": false,
              "typeAnnotation": null,
              "start": 3189,
              "end": 3190
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 3189,
            "end": 3190
          }
        ],
        "start": 3164,
        "end": 3191
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "f",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSFunctionType",
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
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "T",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 3199,
                        "end": 3200
                      },
                      "typeArguments": null,
                      "start": 3199,
                      "end": 3200
                    },
                    "start": 3197,
                    "end": 3200
                  },
                  "start": 3196,
                  "end": 3200
                },
                {
                  "type": "RestElement",
                  "decorators": [],
                  "argument": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "rest",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 3205,
                    "end": 3209
                  },
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "U",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 3211,
                        "end": 3212
                      },
                      "typeArguments": null,
                      "start": 3211,
                      "end": 3212
                    },
                    "start": 3209,
                    "end": 3212
                  },
                  "value": null,
                  "start": 3202,
                  "end": 3212
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "V",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 3217,
                    "end": 3218
                  },
                  "typeArguments": null,
                  "start": 3217,
                  "end": 3218
                },
                "start": 3214,
                "end": 3218
              },
              "start": 3195,
              "end": 3218
            },
            "start": 3193,
            "end": 3218
          },
          "start": 3192,
          "end": 3218
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null,
                "start": 3223,
                "end": 3224
              },
              "typeArguments": null,
              "start": 3223,
              "end": 3224
            },
            "start": 3221,
            "end": 3224
          },
          "start": 3220,
          "end": 3224
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "ArrowFunctionExpression",
              "expression": true,
              "async": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "RestElement",
                  "decorators": [],
                  "argument": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "rest",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 3243,
                    "end": 3247
                  },
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "U",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 3249,
                        "end": 3250
                      },
                      "typeArguments": null,
                      "start": 3249,
                      "end": 3250
                    },
                    "start": 3247,
                    "end": 3250
                  },
                  "value": null,
                  "start": 3240,
                  "end": 3250
                }
              ],
              "returnType": null,
              "body": {
                "type": "CallExpression",
                "callee": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "f",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 3255,
                  "end": 3256
                },
                "typeArguments": null,
                "arguments": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 3257,
                    "end": 3258
                  },
                  {
                    "type": "SpreadElement",
                    "argument": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "rest",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 3263,
                      "end": 3267
                    },
                    "start": 3260,
                    "end": 3267
                  }
                ],
                "optional": false,
                "start": 3255,
                "end": 3268
              },
              "id": null,
              "generator": false,
              "start": 3239,
              "end": 3268
            },
            "start": 3232,
            "end": 3269
          }
        ],
        "start": 3226,
        "end": 3271
      },
      "expression": false,
      "start": 3151,
      "end": 3271
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "f20",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSFunctionType",
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
                        "type": "TSNumberKeyword",
                        "start": 3296,
                        "end": 3302
                      },
                      "start": 3294,
                      "end": 3302
                    },
                    "start": 3293,
                    "end": 3302
                  },
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "y",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 3307,
                        "end": 3313
                      },
                      "start": 3305,
                      "end": 3313
                    },
                    "start": 3304,
                    "end": 3313
                  },
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "z",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSBooleanKeyword",
                        "start": 3318,
                        "end": 3325
                      },
                      "start": 3316,
                      "end": 3325
                    },
                    "start": 3315,
                    "end": 3325
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSArrayType",
                    "elementType": {
                      "type": "TSStringKeyword",
                      "start": 3330,
                      "end": 3336
                    },
                    "start": 3330,
                    "end": 3338
                  },
                  "start": 3327,
                  "end": 3338
                },
                "start": 3292,
                "end": 3338
              },
              "start": 3290,
              "end": 3338
            },
            "start": 3287,
            "end": 3338
          },
          "init": null,
          "definite": false,
          "start": 3287,
          "end": 3338
        }
      ],
      "declare": true,
      "start": 3273,
      "end": 3339
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "f21",
            "optional": false,
            "typeAnnotation": null,
            "start": 3347,
            "end": 3350
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "bind",
              "optional": false,
              "typeAnnotation": null,
              "start": 3353,
              "end": 3357
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "f20",
                "optional": false,
                "typeAnnotation": null,
                "start": 3358,
                "end": 3361
              },
              {
                "type": "Literal",
                "value": 42,
                "raw": "42",
                "start": 3363,
                "end": 3365
              }
            ],
            "optional": false,
            "start": 3353,
            "end": 3366
          },
          "definite": false,
          "start": 3347,
          "end": 3366
        }
      ],
      "declare": false,
      "start": 3341,
      "end": 3367
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "f22",
            "optional": false,
            "typeAnnotation": null,
            "start": 3414,
            "end": 3417
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "bind",
              "optional": false,
              "typeAnnotation": null,
              "start": 3420,
              "end": 3424
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "f21",
                "optional": false,
                "typeAnnotation": null,
                "start": 3425,
                "end": 3428
              },
              {
                "type": "Literal",
                "value": "hello",
                "raw": "\"hello\"",
                "start": 3430,
                "end": 3437
              }
            ],
            "optional": false,
            "start": 3420,
            "end": 3438
          },
          "definite": false,
          "start": 3414,
          "end": 3438
        }
      ],
      "declare": false,
      "start": 3408,
      "end": 3439
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "f23",
            "optional": false,
            "typeAnnotation": null,
            "start": 3475,
            "end": 3478
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "bind",
              "optional": false,
              "typeAnnotation": null,
              "start": 3481,
              "end": 3485
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "f22",
                "optional": false,
                "typeAnnotation": null,
                "start": 3486,
                "end": 3489
              },
              {
                "type": "Literal",
                "value": true,
                "raw": "true",
                "start": 3491,
                "end": 3495
              }
            ],
            "optional": false,
            "start": 3481,
            "end": 3496
          },
          "definite": false,
          "start": 3475,
          "end": 3496
        }
      ],
      "declare": false,
      "start": 3469,
      "end": 3497
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "f20",
          "optional": false,
          "typeAnnotation": null,
          "start": 3518,
          "end": 3521
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "value": 42,
            "raw": "42",
            "start": 3522,
            "end": 3524
          },
          {
            "type": "Literal",
            "value": "hello",
            "raw": "\"hello\"",
            "start": 3526,
            "end": 3533
          },
          {
            "type": "Literal",
            "value": true,
            "raw": "true",
            "start": 3535,
            "end": 3539
          }
        ],
        "optional": false,
        "start": 3518,
        "end": 3540
      },
      "directive": null,
      "start": 3518,
      "end": 3541
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "f21",
          "optional": false,
          "typeAnnotation": null,
          "start": 3542,
          "end": 3545
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "value": "hello",
            "raw": "\"hello\"",
            "start": 3546,
            "end": 3553
          },
          {
            "type": "Literal",
            "value": true,
            "raw": "true",
            "start": 3555,
            "end": 3559
          }
        ],
        "optional": false,
        "start": 3542,
        "end": 3560
      },
      "directive": null,
      "start": 3542,
      "end": 3561
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "f22",
          "optional": false,
          "typeAnnotation": null,
          "start": 3562,
          "end": 3565
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "value": true,
            "raw": "true",
            "start": 3566,
            "end": 3570
          }
        ],
        "optional": false,
        "start": 3562,
        "end": 3571
      },
      "directive": null,
      "start": 3562,
      "end": 3572
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "f23",
          "optional": false,
          "typeAnnotation": null,
          "start": 3573,
          "end": 3576
        },
        "typeArguments": null,
        "arguments": [],
        "optional": false,
        "start": 3573,
        "end": 3578
      },
      "directive": null,
      "start": 3573,
      "end": 3579
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "g20",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSFunctionType",
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
                        "type": "TSNumberKeyword",
                        "start": 3604,
                        "end": 3610
                      },
                      "start": 3602,
                      "end": 3610
                    },
                    "start": 3601,
                    "end": 3610
                  },
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "y",
                    "optional": true,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 3616,
                        "end": 3622
                      },
                      "start": 3614,
                      "end": 3622
                    },
                    "start": 3612,
                    "end": 3622
                  },
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "z",
                    "optional": true,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSBooleanKeyword",
                        "start": 3628,
                        "end": 3635
                      },
                      "start": 3626,
                      "end": 3635
                    },
                    "start": 3624,
                    "end": 3635
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSArrayType",
                    "elementType": {
                      "type": "TSStringKeyword",
                      "start": 3640,
                      "end": 3646
                    },
                    "start": 3640,
                    "end": 3648
                  },
                  "start": 3637,
                  "end": 3648
                },
                "start": 3600,
                "end": 3648
              },
              "start": 3598,
              "end": 3648
            },
            "start": 3595,
            "end": 3648
          },
          "init": null,
          "definite": false,
          "start": 3595,
          "end": 3648
        }
      ],
      "declare": true,
      "start": 3581,
      "end": 3649
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "g21",
            "optional": false,
            "typeAnnotation": null,
            "start": 3657,
            "end": 3660
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "bind",
              "optional": false,
              "typeAnnotation": null,
              "start": 3663,
              "end": 3667
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "g20",
                "optional": false,
                "typeAnnotation": null,
                "start": 3668,
                "end": 3671
              },
              {
                "type": "Literal",
                "value": 42,
                "raw": "42",
                "start": 3673,
                "end": 3675
              }
            ],
            "optional": false,
            "start": 3663,
            "end": 3676
          },
          "definite": false,
          "start": 3657,
          "end": 3676
        }
      ],
      "declare": false,
      "start": 3651,
      "end": 3677
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "g22",
            "optional": false,
            "typeAnnotation": null,
            "start": 3724,
            "end": 3727
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "bind",
              "optional": false,
              "typeAnnotation": null,
              "start": 3730,
              "end": 3734
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "g21",
                "optional": false,
                "typeAnnotation": null,
                "start": 3735,
                "end": 3738
              },
              {
                "type": "Literal",
                "value": "hello",
                "raw": "\"hello\"",
                "start": 3740,
                "end": 3747
              }
            ],
            "optional": false,
            "start": 3730,
            "end": 3748
          },
          "definite": false,
          "start": 3724,
          "end": 3748
        }
      ],
      "declare": false,
      "start": 3718,
      "end": 3749
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "g23",
            "optional": false,
            "typeAnnotation": null,
            "start": 3785,
            "end": 3788
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "bind",
              "optional": false,
              "typeAnnotation": null,
              "start": 3791,
              "end": 3795
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "g22",
                "optional": false,
                "typeAnnotation": null,
                "start": 3796,
                "end": 3799
              },
              {
                "type": "Literal",
                "value": true,
                "raw": "true",
                "start": 3801,
                "end": 3805
              }
            ],
            "optional": false,
            "start": 3791,
            "end": 3806
          },
          "definite": false,
          "start": 3785,
          "end": 3806
        }
      ],
      "declare": false,
      "start": 3779,
      "end": 3807
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "g20",
          "optional": false,
          "typeAnnotation": null,
          "start": 3828,
          "end": 3831
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "value": 42,
            "raw": "42",
            "start": 3832,
            "end": 3834
          },
          {
            "type": "Literal",
            "value": "hello",
            "raw": "\"hello\"",
            "start": 3836,
            "end": 3843
          },
          {
            "type": "Literal",
            "value": true,
            "raw": "true",
            "start": 3845,
            "end": 3849
          }
        ],
        "optional": false,
        "start": 3828,
        "end": 3850
      },
      "directive": null,
      "start": 3828,
      "end": 3851
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "g20",
          "optional": false,
          "typeAnnotation": null,
          "start": 3852,
          "end": 3855
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "value": 42,
            "raw": "42",
            "start": 3856,
            "end": 3858
          },
          {
            "type": "Literal",
            "value": "hello",
            "raw": "\"hello\"",
            "start": 3860,
            "end": 3867
          }
        ],
        "optional": false,
        "start": 3852,
        "end": 3868
      },
      "directive": null,
      "start": 3852,
      "end": 3869
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "g20",
          "optional": false,
          "typeAnnotation": null,
          "start": 3870,
          "end": 3873
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "value": 42,
            "raw": "42",
            "start": 3874,
            "end": 3876
          }
        ],
        "optional": false,
        "start": 3870,
        "end": 3877
      },
      "directive": null,
      "start": 3870,
      "end": 3878
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "g21",
          "optional": false,
          "typeAnnotation": null,
          "start": 3879,
          "end": 3882
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "value": "hello",
            "raw": "\"hello\"",
            "start": 3883,
            "end": 3890
          },
          {
            "type": "Literal",
            "value": true,
            "raw": "true",
            "start": 3892,
            "end": 3896
          }
        ],
        "optional": false,
        "start": 3879,
        "end": 3897
      },
      "directive": null,
      "start": 3879,
      "end": 3898
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "g21",
          "optional": false,
          "typeAnnotation": null,
          "start": 3899,
          "end": 3902
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "value": "hello",
            "raw": "\"hello\"",
            "start": 3903,
            "end": 3910
          }
        ],
        "optional": false,
        "start": 3899,
        "end": 3911
      },
      "directive": null,
      "start": 3899,
      "end": 3912
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "g21",
          "optional": false,
          "typeAnnotation": null,
          "start": 3913,
          "end": 3916
        },
        "typeArguments": null,
        "arguments": [],
        "optional": false,
        "start": 3913,
        "end": 3918
      },
      "directive": null,
      "start": 3913,
      "end": 3919
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "g22",
          "optional": false,
          "typeAnnotation": null,
          "start": 3920,
          "end": 3923
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "value": true,
            "raw": "true",
            "start": 3924,
            "end": 3928
          }
        ],
        "optional": false,
        "start": 3920,
        "end": 3929
      },
      "directive": null,
      "start": 3920,
      "end": 3930
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "g22",
          "optional": false,
          "typeAnnotation": null,
          "start": 3931,
          "end": 3934
        },
        "typeArguments": null,
        "arguments": [],
        "optional": false,
        "start": 3931,
        "end": 3936
      },
      "directive": null,
      "start": 3931,
      "end": 3937
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "g23",
          "optional": false,
          "typeAnnotation": null,
          "start": 3938,
          "end": 3941
        },
        "typeArguments": null,
        "arguments": [],
        "optional": false,
        "start": 3938,
        "end": 3943
      },
      "directive": null,
      "start": 3938,
      "end": 3944
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f30",
        "optional": false,
        "typeAnnotation": null,
        "start": 3963,
        "end": 3966
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null,
              "start": 3967,
              "end": 3968
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 3967,
            "end": 3968
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "U",
              "optional": false,
              "typeAnnotation": null,
              "start": 3970,
              "end": 3971
            },
            "constraint": {
              "type": "TSArrayType",
              "elementType": {
                "type": "TSFunctionType",
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
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "T",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 3985,
                          "end": 3986
                        },
                        "typeArguments": null,
                        "start": 3985,
                        "end": 3986
                      },
                      "start": 3983,
                      "end": 3986
                    },
                    "start": 3982,
                    "end": 3986
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSAnyKeyword",
                    "start": 3991,
                    "end": 3994
                  },
                  "start": 3988,
                  "end": 3994
                },
                "start": 3981,
                "end": 3994
              },
              "start": 3980,
              "end": 3997
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 3970,
            "end": 3997
          }
        ],
        "start": 3966,
        "end": 3998
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null,
                "start": 4002,
                "end": 4003
              },
              "typeArguments": null,
              "start": 4002,
              "end": 4003
            },
            "start": 4000,
            "end": 4003
          },
          "start": 3999,
          "end": 4003
        },
        {
          "type": "RestElement",
          "decorators": [],
          "argument": {
            "type": "Identifier",
            "decorators": [],
            "name": "args",
            "optional": false,
            "typeAnnotation": null,
            "start": 4008,
            "end": 4012
          },
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "U",
                "optional": false,
                "typeAnnotation": null,
                "start": 4014,
                "end": 4015
              },
              "typeArguments": null,
              "start": 4014,
              "end": 4015
            },
            "start": 4012,
            "end": 4015
          },
          "value": null,
          "start": 4005,
          "end": 4015
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "U",
            "optional": false,
            "typeAnnotation": null,
            "start": 4018,
            "end": 4019
          },
          "typeArguments": null,
          "start": 4018,
          "end": 4019
        },
        "start": 4016,
        "end": 4019
      },
      "body": null,
      "expression": false,
      "start": 3946,
      "end": 4020
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "c30",
            "optional": false,
            "typeAnnotation": null,
            "start": 4028,
            "end": 4031
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "f30",
              "optional": false,
              "typeAnnotation": null,
              "start": 4034,
              "end": 4037
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Literal",
                "value": 42,
                "raw": "42",
                "start": 4038,
                "end": 4040
              },
              {
                "type": "ArrowFunctionExpression",
                "expression": true,
                "async": false,
                "typeParameters": null,
                "params": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 4042,
                    "end": 4043
                  }
                ],
                "returnType": null,
                "body": {
                  "type": "BinaryExpression",
                  "left": {
                    "type": "Literal",
                    "value": "",
                    "raw": "\"\"",
                    "start": 4047,
                    "end": 4049
                  },
                  "operator": "+",
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 4052,
                    "end": 4053
                  },
                  "start": 4047,
                  "end": 4053
                },
                "id": null,
                "generator": false,
                "start": 4042,
                "end": 4053
              },
              {
                "type": "ArrowFunctionExpression",
                "expression": true,
                "async": false,
                "typeParameters": null,
                "params": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 4055,
                    "end": 4056
                  }
                ],
                "returnType": null,
                "body": {
                  "type": "BinaryExpression",
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 4060,
                    "end": 4061
                  },
                  "operator": "+",
                  "right": {
                    "type": "Literal",
                    "value": 1,
                    "raw": "1",
                    "start": 4064,
                    "end": 4065
                  },
                  "start": 4060,
                  "end": 4065
                },
                "id": null,
                "generator": false,
                "start": 4055,
                "end": 4065
              }
            ],
            "optional": false,
            "start": 4034,
            "end": 4066
          },
          "definite": false,
          "start": 4028,
          "end": 4066
        }
      ],
      "declare": false,
      "start": 4022,
      "end": 4067
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "T01",
        "optional": false,
        "typeAnnotation": null,
        "start": 4125,
        "end": 4128
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "Parameters",
          "optional": false,
          "typeAnnotation": null,
          "start": 4131,
          "end": 4141
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
              "type": "TSFunctionType",
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
                      "type": "TSNumberKeyword",
                      "start": 4146,
                      "end": 4152
                    },
                    "start": 4144,
                    "end": 4152
                  },
                  "start": 4143,
                  "end": 4152
                },
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "y",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 4157,
                      "end": 4163
                    },
                    "start": 4155,
                    "end": 4163
                  },
                  "start": 4154,
                  "end": 4163
                },
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "z",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSBooleanKeyword",
                      "start": 4168,
                      "end": 4175
                    },
                    "start": 4166,
                    "end": 4175
                  },
                  "start": 4165,
                  "end": 4175
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSVoidKeyword",
                  "start": 4180,
                  "end": 4184
                },
                "start": 4177,
                "end": 4184
              },
              "start": 4142,
              "end": 4184
            }
          ],
          "start": 4141,
          "end": 4185
        },
        "start": 4131,
        "end": 4185
      },
      "declare": false,
      "start": 4120,
      "end": 4186
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "T02",
        "optional": false,
        "typeAnnotation": null,
        "start": 4192,
        "end": 4195
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "Parameters",
          "optional": false,
          "typeAnnotation": null,
          "start": 4198,
          "end": 4208
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
              "type": "TSFunctionType",
              "typeParameters": null,
              "params": [
                {
                  "type": "RestElement",
                  "decorators": [],
                  "argument": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "args",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 4213,
                    "end": 4217
                  },
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTupleType",
                      "elementTypes": [
                        {
                          "type": "TSNumberKeyword",
                          "start": 4220,
                          "end": 4226
                        },
                        {
                          "type": "TSStringKeyword",
                          "start": 4228,
                          "end": 4234
                        },
                        {
                          "type": "TSBooleanKeyword",
                          "start": 4236,
                          "end": 4243
                        }
                      ],
                      "start": 4219,
                      "end": 4244
                    },
                    "start": 4217,
                    "end": 4244
                  },
                  "value": null,
                  "start": 4210,
                  "end": 4244
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSVoidKeyword",
                  "start": 4249,
                  "end": 4253
                },
                "start": 4246,
                "end": 4253
              },
              "start": 4209,
              "end": 4253
            }
          ],
          "start": 4208,
          "end": 4254
        },
        "start": 4198,
        "end": 4254
      },
      "declare": false,
      "start": 4187,
      "end": 4255
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "T03",
        "optional": false,
        "typeAnnotation": null,
        "start": 4261,
        "end": 4264
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "ConstructorParameters",
          "optional": false,
          "typeAnnotation": null,
          "start": 4267,
          "end": 4288
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
              "type": "TSConstructorType",
              "abstract": false,
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
                      "type": "TSNumberKeyword",
                      "start": 4297,
                      "end": 4303
                    },
                    "start": 4295,
                    "end": 4303
                  },
                  "start": 4294,
                  "end": 4303
                },
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "y",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 4308,
                      "end": 4314
                    },
                    "start": 4306,
                    "end": 4314
                  },
                  "start": 4305,
                  "end": 4314
                },
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "z",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSBooleanKeyword",
                      "start": 4319,
                      "end": 4326
                    },
                    "start": 4317,
                    "end": 4326
                  },
                  "start": 4316,
                  "end": 4326
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSVoidKeyword",
                  "start": 4331,
                  "end": 4335
                },
                "start": 4328,
                "end": 4335
              },
              "start": 4289,
              "end": 4335
            }
          ],
          "start": 4288,
          "end": 4336
        },
        "start": 4267,
        "end": 4336
      },
      "declare": false,
      "start": 4256,
      "end": 4337
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "T04",
        "optional": false,
        "typeAnnotation": null,
        "start": 4343,
        "end": 4346
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "ConstructorParameters",
          "optional": false,
          "typeAnnotation": null,
          "start": 4349,
          "end": 4370
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
              "type": "TSConstructorType",
              "abstract": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "RestElement",
                  "decorators": [],
                  "argument": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "args",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 4379,
                    "end": 4383
                  },
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTupleType",
                      "elementTypes": [
                        {
                          "type": "TSNumberKeyword",
                          "start": 4386,
                          "end": 4392
                        },
                        {
                          "type": "TSStringKeyword",
                          "start": 4394,
                          "end": 4400
                        },
                        {
                          "type": "TSBooleanKeyword",
                          "start": 4402,
                          "end": 4409
                        }
                      ],
                      "start": 4385,
                      "end": 4410
                    },
                    "start": 4383,
                    "end": 4410
                  },
                  "value": null,
                  "start": 4376,
                  "end": 4410
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSVoidKeyword",
                  "start": 4415,
                  "end": 4419
                },
                "start": 4412,
                "end": 4419
              },
              "start": 4371,
              "end": 4419
            }
          ],
          "start": 4370,
          "end": 4420
        },
        "start": 4349,
        "end": 4420
      },
      "declare": false,
      "start": 4338,
      "end": 4421
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "T05",
        "optional": false,
        "typeAnnotation": null,
        "start": 4427,
        "end": 4430
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null,
              "start": 4431,
              "end": 4432
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 4431,
            "end": 4432
          }
        ],
        "start": 4430,
        "end": 4433
      },
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "Parameters",
          "optional": false,
          "typeAnnotation": null,
          "start": 4436,
          "end": 4446
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
              "type": "TSFunctionType",
              "typeParameters": null,
              "params": [
                {
                  "type": "RestElement",
                  "decorators": [],
                  "argument": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "args",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 4451,
                    "end": 4455
                  },
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSArrayType",
                      "elementType": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "T",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 4457,
                          "end": 4458
                        },
                        "typeArguments": null,
                        "start": 4457,
                        "end": 4458
                      },
                      "start": 4457,
                      "end": 4460
                    },
                    "start": 4455,
                    "end": 4460
                  },
                  "value": null,
                  "start": 4448,
                  "end": 4460
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSVoidKeyword",
                  "start": 4465,
                  "end": 4469
                },
                "start": 4462,
                "end": 4469
              },
              "start": 4447,
              "end": 4469
            }
          ],
          "start": 4446,
          "end": 4470
        },
        "start": 4436,
        "end": 4470
      },
      "declare": false,
      "start": 4422,
      "end": 4471
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "T06",
        "optional": false,
        "typeAnnotation": null,
        "start": 4477,
        "end": 4480
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null,
              "start": 4481,
              "end": 4482
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 4481,
            "end": 4482
          }
        ],
        "start": 4480,
        "end": 4483
      },
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "ConstructorParameters",
          "optional": false,
          "typeAnnotation": null,
          "start": 4486,
          "end": 4507
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
              "type": "TSConstructorType",
              "abstract": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "RestElement",
                  "decorators": [],
                  "argument": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "args",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 4516,
                    "end": 4520
                  },
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTupleType",
                      "elementTypes": [],
                      "start": 4522,
                      "end": 4524
                    },
                    "start": 4520,
                    "end": 4524
                  },
                  "value": null,
                  "start": 4513,
                  "end": 4524
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSVoidKeyword",
                  "start": 4529,
                  "end": 4533
                },
                "start": 4526,
                "end": 4533
              },
              "start": 4508,
              "end": 4533
            }
          ],
          "start": 4507,
          "end": 4534
        },
        "start": 4486,
        "end": 4534
      },
      "declare": false,
      "start": 4472,
      "end": 4535
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "T07",
        "optional": false,
        "typeAnnotation": null,
        "start": 4541,
        "end": 4544
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null,
              "start": 4545,
              "end": 4546
            },
            "constraint": {
              "type": "TSArrayType",
              "elementType": {
                "type": "TSAnyKeyword",
                "start": 4555,
                "end": 4558
              },
              "start": 4555,
              "end": 4560
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 4545,
            "end": 4560
          }
        ],
        "start": 4544,
        "end": 4561
      },
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "Parameters",
          "optional": false,
          "typeAnnotation": null,
          "start": 4564,
          "end": 4574
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
              "type": "TSFunctionType",
              "typeParameters": null,
              "params": [
                {
                  "type": "RestElement",
                  "decorators": [],
                  "argument": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "args",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 4579,
                    "end": 4583
                  },
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "T",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 4585,
                        "end": 4586
                      },
                      "typeArguments": null,
                      "start": 4585,
                      "end": 4586
                    },
                    "start": 4583,
                    "end": 4586
                  },
                  "value": null,
                  "start": 4576,
                  "end": 4586
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSVoidKeyword",
                  "start": 4591,
                  "end": 4595
                },
                "start": 4588,
                "end": 4595
              },
              "start": 4575,
              "end": 4595
            }
          ],
          "start": 4574,
          "end": 4596
        },
        "start": 4564,
        "end": 4596
      },
      "declare": false,
      "start": 4536,
      "end": 4597
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "T08",
        "optional": false,
        "typeAnnotation": null,
        "start": 4603,
        "end": 4606
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null,
              "start": 4607,
              "end": 4608
            },
            "constraint": {
              "type": "TSArrayType",
              "elementType": {
                "type": "TSAnyKeyword",
                "start": 4617,
                "end": 4620
              },
              "start": 4617,
              "end": 4622
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 4607,
            "end": 4622
          }
        ],
        "start": 4606,
        "end": 4623
      },
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "ConstructorParameters",
          "optional": false,
          "typeAnnotation": null,
          "start": 4626,
          "end": 4647
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
              "type": "TSConstructorType",
              "abstract": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "RestElement",
                  "decorators": [],
                  "argument": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "args",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 4656,
                    "end": 4660
                  },
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "T",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 4662,
                        "end": 4663
                      },
                      "typeArguments": null,
                      "start": 4662,
                      "end": 4663
                    },
                    "start": 4660,
                    "end": 4663
                  },
                  "value": null,
                  "start": 4653,
                  "end": 4663
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSVoidKeyword",
                  "start": 4668,
                  "end": 4672
                },
                "start": 4665,
                "end": 4672
              },
              "start": 4648,
              "end": 4672
            }
          ],
          "start": 4647,
          "end": 4673
        },
        "start": 4626,
        "end": 4673
      },
      "declare": false,
      "start": 4598,
      "end": 4674
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "T09",
        "optional": false,
        "typeAnnotation": null,
        "start": 4680,
        "end": 4683
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "Parameters",
          "optional": false,
          "typeAnnotation": null,
          "start": 4686,
          "end": 4696
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Function",
                "optional": false,
                "typeAnnotation": null,
                "start": 4697,
                "end": 4705
              },
              "typeArguments": null,
              "start": 4697,
              "end": 4705
            }
          ],
          "start": 4696,
          "end": 4706
        },
        "start": 4686,
        "end": 4706
      },
      "declare": false,
      "start": 4675,
      "end": 4707
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Record1",
        "optional": false,
        "typeAnnotation": null,
        "start": 4714,
        "end": 4721
      },
      "typeParameters": null,
      "typeAnnotation": {
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
              "name": "move",
              "optional": false,
              "typeAnnotation": null,
              "start": 4728,
              "end": 4732
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTupleType",
                "elementTypes": [
                  {
                    "type": "TSNumberKeyword",
                    "start": 4735,
                    "end": 4741
                  },
                  {
                    "type": "TSUnionType",
                    "types": [
                      {
                        "type": "TSLiteralType",
                        "literal": {
                          "type": "Literal",
                          "value": "left",
                          "raw": "'left'",
                          "start": 4743,
                          "end": 4749
                        },
                        "start": 4743,
                        "end": 4749
                      },
                      {
                        "type": "TSLiteralType",
                        "literal": {
                          "type": "Literal",
                          "value": "right",
                          "raw": "'right'",
                          "start": 4752,
                          "end": 4759
                        },
                        "start": 4752,
                        "end": 4759
                      }
                    ],
                    "start": 4743,
                    "end": 4759
                  }
                ],
                "start": 4734,
                "end": 4760
              },
              "start": 4732,
              "end": 4760
            },
            "accessibility": null,
            "static": false,
            "start": 4728,
            "end": 4761
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "jump",
              "optional": false,
              "typeAnnotation": null,
              "start": 4764,
              "end": 4768
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTupleType",
                "elementTypes": [
                  {
                    "type": "TSNumberKeyword",
                    "start": 4771,
                    "end": 4777
                  },
                  {
                    "type": "TSUnionType",
                    "types": [
                      {
                        "type": "TSLiteralType",
                        "literal": {
                          "type": "Literal",
                          "value": "up",
                          "raw": "'up'",
                          "start": 4779,
                          "end": 4783
                        },
                        "start": 4779,
                        "end": 4783
                      },
                      {
                        "type": "TSLiteralType",
                        "literal": {
                          "type": "Literal",
                          "value": "down",
                          "raw": "'down'",
                          "start": 4786,
                          "end": 4792
                        },
                        "start": 4786,
                        "end": 4792
                      }
                    ],
                    "start": 4779,
                    "end": 4792
                  }
                ],
                "start": 4770,
                "end": 4793
              },
              "start": 4768,
              "end": 4793
            },
            "accessibility": null,
            "static": false,
            "start": 4764,
            "end": 4794
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "stop",
              "optional": false,
              "typeAnnotation": null,
              "start": 4797,
              "end": 4801
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 4803,
                "end": 4809
              },
              "start": 4801,
              "end": 4809
            },
            "accessibility": null,
            "static": false,
            "start": 4797,
            "end": 4810
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "done",
              "optional": false,
              "typeAnnotation": null,
              "start": 4813,
              "end": 4817
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTupleType",
                "elementTypes": [],
                "start": 4819,
                "end": 4821
              },
              "start": 4817,
              "end": 4821
            },
            "accessibility": null,
            "static": false,
            "start": 4813,
            "end": 4822
          }
        ],
        "start": 4724,
        "end": 4824
      },
      "declare": false,
      "start": 4709,
      "end": 4824
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "EventType",
        "optional": false,
        "typeAnnotation": null,
        "start": 4831,
        "end": 4840
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null,
              "start": 4841,
              "end": 4842
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 4841,
            "end": 4842
          }
        ],
        "start": 4840,
        "end": 4843
      },
      "typeAnnotation": {
        "type": "TSTypeLiteral",
        "members": [
          {
            "type": "TSMethodSignature",
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "emit",
              "optional": false,
              "typeAnnotation": null,
              "start": 4850,
              "end": 4854
            },
            "computed": false,
            "optional": false,
            "kind": "method",
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "params": [
                {
                  "type": "TSTypeParameter",
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "K",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 4855,
                    "end": 4856
                  },
                  "constraint": {
                    "type": "TSTypeOperator",
                    "operator": "keyof",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "T",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 4871,
                        "end": 4872
                      },
                      "typeArguments": null,
                      "start": 4871,
                      "end": 4872
                    },
                    "start": 4865,
                    "end": 4872
                  },
                  "default": {
                    "type": "TSTypeOperator",
                    "operator": "keyof",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "T",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 4881,
                        "end": 4882
                      },
                      "typeArguments": null,
                      "start": 4881,
                      "end": 4882
                    },
                    "start": 4875,
                    "end": 4882
                  },
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 4855,
                  "end": 4882
                }
              ],
              "start": 4854,
              "end": 4883
            },
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "e",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "K",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 4887,
                      "end": 4888
                    },
                    "typeArguments": null,
                    "start": 4887,
                    "end": 4888
                  },
                  "start": 4885,
                  "end": 4888
                },
                "start": 4884,
                "end": 4888
              },
              {
                "type": "RestElement",
                "decorators": [],
                "argument": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "payload",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 4893,
                  "end": 4900
                },
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSConditionalType",
                    "checkType": {
                      "type": "TSIndexedAccessType",
                      "objectType": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "T",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 4902,
                          "end": 4903
                        },
                        "typeArguments": null,
                        "start": 4902,
                        "end": 4903
                      },
                      "indexType": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "K",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 4904,
                          "end": 4905
                        },
                        "typeArguments": null,
                        "start": 4904,
                        "end": 4905
                      },
                      "start": 4902,
                      "end": 4906
                    },
                    "extendsType": {
                      "type": "TSArrayType",
                      "elementType": {
                        "type": "TSAnyKeyword",
                        "start": 4915,
                        "end": 4918
                      },
                      "start": 4915,
                      "end": 4920
                    },
                    "trueType": {
                      "type": "TSIndexedAccessType",
                      "objectType": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "T",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 4923,
                          "end": 4924
                        },
                        "typeArguments": null,
                        "start": 4923,
                        "end": 4924
                      },
                      "indexType": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "K",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 4925,
                          "end": 4926
                        },
                        "typeArguments": null,
                        "start": 4925,
                        "end": 4926
                      },
                      "start": 4923,
                      "end": 4927
                    },
                    "falseType": {
                      "type": "TSTupleType",
                      "elementTypes": [
                        {
                          "type": "TSIndexedAccessType",
                          "objectType": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "T",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 4931,
                              "end": 4932
                            },
                            "typeArguments": null,
                            "start": 4931,
                            "end": 4932
                          },
                          "indexType": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "K",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 4933,
                              "end": 4934
                            },
                            "typeArguments": null,
                            "start": 4933,
                            "end": 4934
                          },
                          "start": 4931,
                          "end": 4935
                        }
                      ],
                      "start": 4930,
                      "end": 4936
                    },
                    "start": 4902,
                    "end": 4936
                  },
                  "start": 4900,
                  "end": 4936
                },
                "value": null,
                "start": 4890,
                "end": 4936
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSVoidKeyword",
                "start": 4939,
                "end": 4943
              },
              "start": 4937,
              "end": 4943
            },
            "accessibility": null,
            "readonly": false,
            "static": false,
            "start": 4850,
            "end": 4944
          }
        ],
        "start": 4846,
        "end": 4947
      },
      "declare": false,
      "start": 4826,
      "end": 4947
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
            "name": "events",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "EventType",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 4969,
                  "end": 4978
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Record1",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 4979,
                        "end": 4986
                      },
                      "typeArguments": null,
                      "start": 4979,
                      "end": 4986
                    }
                  ],
                  "start": 4978,
                  "end": 4987
                },
                "start": 4969,
                "end": 4987
              },
              "start": 4967,
              "end": 4987
            },
            "start": 4961,
            "end": 4987
          },
          "init": null,
          "definite": false,
          "start": 4961,
          "end": 4987
        }
      ],
      "declare": true,
      "start": 4949,
      "end": 4988
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "events",
            "optional": false,
            "typeAnnotation": null,
            "start": 4989,
            "end": 4995
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "emit",
            "optional": false,
            "typeAnnotation": null,
            "start": 4996,
            "end": 5000
          },
          "optional": false,
          "computed": false,
          "start": 4989,
          "end": 5000
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "value": "move",
            "raw": "'move'",
            "start": 5001,
            "end": 5007
          },
          {
            "type": "Literal",
            "value": 10,
            "raw": "10",
            "start": 5009,
            "end": 5011
          },
          {
            "type": "Literal",
            "value": "left",
            "raw": "'left'",
            "start": 5013,
            "end": 5019
          }
        ],
        "optional": false,
        "start": 4989,
        "end": 5020
      },
      "directive": null,
      "start": 4989,
      "end": 5021
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "events",
            "optional": false,
            "typeAnnotation": null,
            "start": 5022,
            "end": 5028
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "emit",
            "optional": false,
            "typeAnnotation": null,
            "start": 5029,
            "end": 5033
          },
          "optional": false,
          "computed": false,
          "start": 5022,
          "end": 5033
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "value": "jump",
            "raw": "'jump'",
            "start": 5034,
            "end": 5040
          },
          {
            "type": "Literal",
            "value": 20,
            "raw": "20",
            "start": 5042,
            "end": 5044
          },
          {
            "type": "Literal",
            "value": "up",
            "raw": "'up'",
            "start": 5046,
            "end": 5050
          }
        ],
        "optional": false,
        "start": 5022,
        "end": 5051
      },
      "directive": null,
      "start": 5022,
      "end": 5052
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "events",
            "optional": false,
            "typeAnnotation": null,
            "start": 5053,
            "end": 5059
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "emit",
            "optional": false,
            "typeAnnotation": null,
            "start": 5060,
            "end": 5064
          },
          "optional": false,
          "computed": false,
          "start": 5053,
          "end": 5064
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "value": "stop",
            "raw": "'stop'",
            "start": 5065,
            "end": 5071
          },
          {
            "type": "Literal",
            "value": "Bye!",
            "raw": "'Bye!'",
            "start": 5073,
            "end": 5079
          }
        ],
        "optional": false,
        "start": 5053,
        "end": 5080
      },
      "directive": null,
      "start": 5053,
      "end": 5081
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "events",
            "optional": false,
            "typeAnnotation": null,
            "start": 5082,
            "end": 5088
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "emit",
            "optional": false,
            "typeAnnotation": null,
            "start": 5089,
            "end": 5093
          },
          "optional": false,
          "computed": false,
          "start": 5082,
          "end": 5093
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "value": "done",
            "raw": "'done'",
            "start": 5094,
            "end": 5100
          }
        ],
        "optional": false,
        "start": 5082,
        "end": 5101
      },
      "directive": null,
      "start": 5082,
      "end": 5102
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
            "name": "ff1",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSFunctionType",
                "typeParameters": null,
                "params": [
                  {
                    "type": "RestElement",
                    "decorators": [],
                    "argument": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "args",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 5148,
                      "end": 5152
                    },
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSArrayType",
                        "elementType": {
                          "type": "TSAnyKeyword",
                          "start": 5154,
                          "end": 5157
                        },
                        "start": 5154,
                        "end": 5159
                      },
                      "start": 5152,
                      "end": 5159
                    },
                    "value": null,
                    "start": 5144,
                    "end": 5159
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSVoidKeyword",
                    "start": 5164,
                    "end": 5168
                  },
                  "start": 5161,
                  "end": 5168
                },
                "start": 5143,
                "end": 5168
              },
              "start": 5141,
              "end": 5168
            },
            "start": 5138,
            "end": 5168
          },
          "init": null,
          "definite": false,
          "start": 5138,
          "end": 5168
        }
      ],
      "declare": true,
      "start": 5126,
      "end": 5169
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
            "name": "ff2",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSFunctionType",
                "typeParameters": null,
                "params": [],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSVoidKeyword",
                    "start": 5194,
                    "end": 5198
                  },
                  "start": 5191,
                  "end": 5198
                },
                "start": 5188,
                "end": 5198
              },
              "start": 5186,
              "end": 5198
            },
            "start": 5183,
            "end": 5198
          },
          "init": null,
          "definite": false,
          "start": 5183,
          "end": 5198
        }
      ],
      "declare": true,
      "start": 5171,
      "end": 5199
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
            "name": "ff3",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSFunctionType",
                "typeParameters": null,
                "params": [
                  {
                    "type": "RestElement",
                    "decorators": [],
                    "argument": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "args",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 5221,
                      "end": 5225
                    },
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTupleType",
                        "elementTypes": [],
                        "start": 5227,
                        "end": 5229
                      },
                      "start": 5225,
                      "end": 5229
                    },
                    "value": null,
                    "start": 5218,
                    "end": 5229
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSVoidKeyword",
                    "start": 5234,
                    "end": 5238
                  },
                  "start": 5231,
                  "end": 5238
                },
                "start": 5217,
                "end": 5238
              },
              "start": 5215,
              "end": 5238
            },
            "start": 5212,
            "end": 5238
          },
          "init": null,
          "definite": false,
          "start": 5212,
          "end": 5238
        }
      ],
      "declare": true,
      "start": 5200,
      "end": 5239
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
            "name": "ff4",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSFunctionType",
                "typeParameters": null,
                "params": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSNeverKeyword",
                        "start": 5261,
                        "end": 5266
                      },
                      "start": 5259,
                      "end": 5266
                    },
                    "start": 5258,
                    "end": 5266
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSVoidKeyword",
                    "start": 5271,
                    "end": 5275
                  },
                  "start": 5268,
                  "end": 5275
                },
                "start": 5257,
                "end": 5275
              },
              "start": 5255,
              "end": 5275
            },
            "start": 5252,
            "end": 5275
          },
          "init": null,
          "definite": false,
          "start": 5252,
          "end": 5275
        }
      ],
      "declare": true,
      "start": 5240,
      "end": 5276
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "ff1",
          "optional": false,
          "typeAnnotation": null,
          "start": 5278,
          "end": 5281
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "ff2",
          "optional": false,
          "typeAnnotation": null,
          "start": 5284,
          "end": 5287
        },
        "start": 5278,
        "end": 5287
      },
      "directive": null,
      "start": 5278,
      "end": 5288
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "ff1",
          "optional": false,
          "typeAnnotation": null,
          "start": 5289,
          "end": 5292
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "ff3",
          "optional": false,
          "typeAnnotation": null,
          "start": 5295,
          "end": 5298
        },
        "start": 5289,
        "end": 5298
      },
      "directive": null,
      "start": 5289,
      "end": 5299
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "ff1",
          "optional": false,
          "typeAnnotation": null,
          "start": 5300,
          "end": 5303
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "ff4",
          "optional": false,
          "typeAnnotation": null,
          "start": 5306,
          "end": 5309
        },
        "start": 5300,
        "end": 5309
      },
      "directive": null,
      "start": 5300,
      "end": 5310
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 5320
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Identifier",
    "value": "declare",
    "start": 0,
    "end": 7
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 8,
    "end": 11
  },
  {
    "type": "Identifier",
    "value": "f1",
    "start": 12,
    "end": 14
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 14,
    "end": 15
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 16,
    "end": 17
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 17,
    "end": 20
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 20,
    "end": 21
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 21,
    "end": 22
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 23,
    "end": 24
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 24,
    "end": 30
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 30,
    "end": 31
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 32,
    "end": 38
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 38,
    "end": 39
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 40,
    "end": 47
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 47,
    "end": 48
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 48,
    "end": 49
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 50,
    "end": 52
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 53,
    "end": 57
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 57,
    "end": 58
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 59,
    "end": 66
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 67,
    "end": 70
  },
  {
    "type": "Identifier",
    "value": "f2",
    "start": 71,
    "end": 73
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 73,
    "end": 74
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 75,
    "end": 76
  },
  {
    "type": "Identifier",
    "value": "x0",
    "start": 76,
    "end": 78
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 78,
    "end": 79
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 80,
    "end": 86
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 86,
    "end": 87
  },
  {
    "type": "Identifier",
    "value": "x1",
    "start": 88,
    "end": 90
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 90,
    "end": 91
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 92,
    "end": 98
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 98,
    "end": 99
  },
  {
    "type": "Identifier",
    "value": "x2",
    "start": 100,
    "end": 102
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 102,
    "end": 103
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 104,
    "end": 111
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 111,
    "end": 112
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 113,
    "end": 115
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 116,
    "end": 120
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 120,
    "end": 121
  },
  {
    "type": "Identifier",
    "value": "f1",
    "start": 123,
    "end": 125
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 126,
    "end": 127
  },
  {
    "type": "Identifier",
    "value": "f2",
    "start": 128,
    "end": 130
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 130,
    "end": 131
  },
  {
    "type": "Identifier",
    "value": "f2",
    "start": 132,
    "end": 134
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 135,
    "end": 136
  },
  {
    "type": "Identifier",
    "value": "f1",
    "start": 137,
    "end": 139
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 139,
    "end": 140
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 142,
    "end": 149
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 150,
    "end": 155
  },
  {
    "type": "Identifier",
    "value": "t3",
    "start": 156,
    "end": 158
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 158,
    "end": 159
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 160,
    "end": 161
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 161,
    "end": 167
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 167,
    "end": 168
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 169,
    "end": 175
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 175,
    "end": 176
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 177,
    "end": 184
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 184,
    "end": 185
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 185,
    "end": 186
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 187,
    "end": 194
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 195,
    "end": 200
  },
  {
    "type": "Identifier",
    "value": "t2",
    "start": 201,
    "end": 203
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 203,
    "end": 204
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 205,
    "end": 206
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 206,
    "end": 212
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 212,
    "end": 213
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 214,
    "end": 221
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 221,
    "end": 222
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 222,
    "end": 223
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 224,
    "end": 231
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 232,
    "end": 237
  },
  {
    "type": "Identifier",
    "value": "t1",
    "start": 238,
    "end": 240
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 240,
    "end": 241
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 242,
    "end": 243
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 243,
    "end": 250
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 250,
    "end": 251
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 251,
    "end": 252
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 253,
    "end": 260
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 261,
    "end": 266
  },
  {
    "type": "Identifier",
    "value": "t0",
    "start": 267,
    "end": 269
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 269,
    "end": 270
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 271,
    "end": 272
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 272,
    "end": 273
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 273,
    "end": 274
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 276,
    "end": 283
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 284,
    "end": 289
  },
  {
    "type": "Identifier",
    "value": "ns",
    "start": 290,
    "end": 292
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 292,
    "end": 293
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 294,
    "end": 295
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 295,
    "end": 301
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 301,
    "end": 302
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 303,
    "end": 309
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 309,
    "end": 310
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 310,
    "end": 311
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 312,
    "end": 319
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 320,
    "end": 325
  },
  {
    "type": "Identifier",
    "value": "sn",
    "start": 326,
    "end": 328
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 328,
    "end": 329
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 330,
    "end": 331
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 331,
    "end": 337
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 337,
    "end": 338
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 339,
    "end": 345
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 345,
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
    "value": "f1",
    "start": 349,
    "end": 351
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 351,
    "end": 352
  },
  {
    "type": "Numeric",
    "value": "42",
    "start": 352,
    "end": 354
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 354,
    "end": 355
  },
  {
    "type": "String",
    "value": "\"hello\"",
    "start": 356,
    "end": 363
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 363,
    "end": 364
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 365,
    "end": 369
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 369,
    "end": 370
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 370,
    "end": 371
  },
  {
    "type": "Identifier",
    "value": "f1",
    "start": 372,
    "end": 374
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 374,
    "end": 375
  },
  {
    "type": "Identifier",
    "value": "t3",
    "start": 375,
    "end": 377
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 377,
    "end": 378
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 378,
    "end": 379
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 379,
    "end": 380
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 380,
    "end": 381
  },
  {
    "type": "Identifier",
    "value": "t3",
    "start": 382,
    "end": 384
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 384,
    "end": 385
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 385,
    "end": 386
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 386,
    "end": 387
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 387,
    "end": 388
  },
  {
    "type": "Identifier",
    "value": "t3",
    "start": 389,
    "end": 391
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 391,
    "end": 392
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 392,
    "end": 393
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 393,
    "end": 394
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 394,
    "end": 395
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 395,
    "end": 396
  },
  {
    "type": "Identifier",
    "value": "f1",
    "start": 397,
    "end": 399
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 399,
    "end": 400
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 400,
    "end": 403
  },
  {
    "type": "Identifier",
    "value": "t3",
    "start": 403,
    "end": 405
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 405,
    "end": 406
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 406,
    "end": 407
  },
  {
    "type": "Identifier",
    "value": "f1",
    "start": 408,
    "end": 410
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 410,
    "end": 411
  },
  {
    "type": "Numeric",
    "value": "42",
    "start": 411,
    "end": 413
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 413,
    "end": 414
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 415,
    "end": 418
  },
  {
    "type": "Identifier",
    "value": "t2",
    "start": 418,
    "end": 420
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 420,
    "end": 421
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 421,
    "end": 422
  },
  {
    "type": "Identifier",
    "value": "f1",
    "start": 423,
    "end": 425
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 425,
    "end": 426
  },
  {
    "type": "Numeric",
    "value": "42",
    "start": 426,
    "end": 428
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 428,
    "end": 429
  },
  {
    "type": "String",
    "value": "\"hello\"",
    "start": 430,
    "end": 437
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 437,
    "end": 438
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 439,
    "end": 442
  },
  {
    "type": "Identifier",
    "value": "t1",
    "start": 442,
    "end": 444
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 444,
    "end": 445
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 445,
    "end": 446
  },
  {
    "type": "Identifier",
    "value": "f1",
    "start": 447,
    "end": 449
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 449,
    "end": 450
  },
  {
    "type": "Numeric",
    "value": "42",
    "start": 450,
    "end": 452
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 452,
    "end": 453
  },
  {
    "type": "String",
    "value": "\"hello\"",
    "start": 454,
    "end": 461
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 461,
    "end": 462
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 463,
    "end": 467
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 467,
    "end": 468
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 469,
    "end": 472
  },
  {
    "type": "Identifier",
    "value": "t0",
    "start": 472,
    "end": 474
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 474,
    "end": 475
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 475,
    "end": 476
  },
  {
    "type": "Identifier",
    "value": "f1",
    "start": 477,
    "end": 479
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 479,
    "end": 480
  },
  {
    "type": "Identifier",
    "value": "ns",
    "start": 480,
    "end": 482
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 482,
    "end": 483
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 483,
    "end": 484
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 484,
    "end": 485
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 485,
    "end": 486
  },
  {
    "type": "Identifier",
    "value": "ns",
    "start": 487,
    "end": 489
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 489,
    "end": 490
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 490,
    "end": 491
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 491,
    "end": 492
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 492,
    "end": 493
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 494,
    "end": 498
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 498,
    "end": 499
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 499,
    "end": 500
  },
  {
    "type": "Identifier",
    "value": "f1",
    "start": 501,
    "end": 503
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 503,
    "end": 504
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 504,
    "end": 507
  },
  {
    "type": "Identifier",
    "value": "ns",
    "start": 507,
    "end": 509
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 509,
    "end": 510
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 511,
    "end": 515
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 515,
    "end": 516
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 516,
    "end": 517
  },
  {
    "type": "Identifier",
    "value": "f2",
    "start": 585,
    "end": 587
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 587,
    "end": 588
  },
  {
    "type": "Numeric",
    "value": "42",
    "start": 588,
    "end": 590
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 590,
    "end": 591
  },
  {
    "type": "String",
    "value": "\"hello\"",
    "start": 592,
    "end": 599
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 599,
    "end": 600
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 601,
    "end": 605
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 605,
    "end": 606
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 606,
    "end": 607
  },
  {
    "type": "Identifier",
    "value": "f2",
    "start": 608,
    "end": 610
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 610,
    "end": 611
  },
  {
    "type": "Identifier",
    "value": "t3",
    "start": 611,
    "end": 613
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 613,
    "end": 614
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 614,
    "end": 615
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 615,
    "end": 616
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 616,
    "end": 617
  },
  {
    "type": "Identifier",
    "value": "t3",
    "start": 618,
    "end": 620
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 620,
    "end": 621
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 621,
    "end": 622
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 622,
    "end": 623
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 623,
    "end": 624
  },
  {
    "type": "Identifier",
    "value": "t3",
    "start": 625,
    "end": 627
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 627,
    "end": 628
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 628,
    "end": 629
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 629,
    "end": 630
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 630,
    "end": 631
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 631,
    "end": 632
  },
  {
    "type": "Identifier",
    "value": "f2",
    "start": 633,
    "end": 635
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 635,
    "end": 636
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 636,
    "end": 639
  },
  {
    "type": "Identifier",
    "value": "t3",
    "start": 639,
    "end": 641
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 641,
    "end": 642
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 642,
    "end": 643
  },
  {
    "type": "Identifier",
    "value": "f2",
    "start": 644,
    "end": 646
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 646,
    "end": 647
  },
  {
    "type": "Numeric",
    "value": "42",
    "start": 647,
    "end": 649
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 649,
    "end": 650
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 651,
    "end": 654
  },
  {
    "type": "Identifier",
    "value": "t2",
    "start": 654,
    "end": 656
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 656,
    "end": 657
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 657,
    "end": 658
  },
  {
    "type": "Identifier",
    "value": "f2",
    "start": 659,
    "end": 661
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 661,
    "end": 662
  },
  {
    "type": "Numeric",
    "value": "42",
    "start": 662,
    "end": 664
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 664,
    "end": 665
  },
  {
    "type": "String",
    "value": "\"hello\"",
    "start": 666,
    "end": 673
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 673,
    "end": 674
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 675,
    "end": 678
  },
  {
    "type": "Identifier",
    "value": "t1",
    "start": 678,
    "end": 680
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 680,
    "end": 681
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 681,
    "end": 682
  },
  {
    "type": "Identifier",
    "value": "f2",
    "start": 683,
    "end": 685
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 685,
    "end": 686
  },
  {
    "type": "Numeric",
    "value": "42",
    "start": 686,
    "end": 688
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 688,
    "end": 689
  },
  {
    "type": "String",
    "value": "\"hello\"",
    "start": 690,
    "end": 697
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 697,
    "end": 698
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 699,
    "end": 703
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 703,
    "end": 704
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 705,
    "end": 708
  },
  {
    "type": "Identifier",
    "value": "t0",
    "start": 708,
    "end": 710
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 710,
    "end": 711
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 711,
    "end": 712
  },
  {
    "type": "Identifier",
    "value": "f2",
    "start": 713,
    "end": 715
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 715,
    "end": 716
  },
  {
    "type": "Identifier",
    "value": "ns",
    "start": 716,
    "end": 718
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 718,
    "end": 719
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 719,
    "end": 720
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 720,
    "end": 721
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 721,
    "end": 722
  },
  {
    "type": "Identifier",
    "value": "ns",
    "start": 723,
    "end": 725
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 725,
    "end": 726
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 726,
    "end": 727
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 727,
    "end": 728
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 728,
    "end": 729
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 730,
    "end": 734
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 734,
    "end": 735
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 735,
    "end": 736
  },
  {
    "type": "Identifier",
    "value": "f2",
    "start": 737,
    "end": 739
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 739,
    "end": 740
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 740,
    "end": 743
  },
  {
    "type": "Identifier",
    "value": "ns",
    "start": 743,
    "end": 745
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 745,
    "end": 746
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 747,
    "end": 751
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 751,
    "end": 752
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 752,
    "end": 753
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 821,
    "end": 828
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 829,
    "end": 837
  },
  {
    "type": "Identifier",
    "value": "f10",
    "start": 838,
    "end": 841
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 841,
    "end": 842
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 842,
    "end": 843
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 844,
    "end": 851
  },
  {
    "type": "Identifier",
    "value": "unknown",
    "start": 852,
    "end": 859
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 859,
    "end": 860
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 860,
    "end": 861
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 861,
    "end": 862
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 862,
    "end": 863
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 863,
    "end": 866
  },
  {
    "type": "Identifier",
    "value": "args",
    "start": 866,
    "end": 870
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 870,
    "end": 871
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 872,
    "end": 873
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 873,
    "end": 874
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 874,
    "end": 875
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 876,
    "end": 877
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 877,
    "end": 878
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 880,
    "end": 885
  },
  {
    "type": "Identifier",
    "value": "x10",
    "start": 886,
    "end": 889
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 890,
    "end": 891
  },
  {
    "type": "Identifier",
    "value": "f10",
    "start": 892,
    "end": 895
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 895,
    "end": 896
  },
  {
    "type": "Numeric",
    "value": "42",
    "start": 896,
    "end": 898
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 898,
    "end": 899
  },
  {
    "type": "String",
    "value": "\"hello\"",
    "start": 900,
    "end": 907
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 907,
    "end": 908
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 909,
    "end": 913
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 913,
    "end": 914
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 914,
    "end": 915
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 946,
    "end": 951
  },
  {
    "type": "Identifier",
    "value": "x11",
    "start": 952,
    "end": 955
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 956,
    "end": 957
  },
  {
    "type": "Identifier",
    "value": "f10",
    "start": 958,
    "end": 961
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 961,
    "end": 962
  },
  {
    "type": "Numeric",
    "value": "42",
    "start": 962,
    "end": 964
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 964,
    "end": 965
  },
  {
    "type": "String",
    "value": "\"hello\"",
    "start": 966,
    "end": 973
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 973,
    "end": 974
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 974,
    "end": 975
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 997,
    "end": 1002
  },
  {
    "type": "Identifier",
    "value": "x12",
    "start": 1003,
    "end": 1006
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1007,
    "end": 1008
  },
  {
    "type": "Identifier",
    "value": "f10",
    "start": 1009,
    "end": 1012
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1012,
    "end": 1013
  },
  {
    "type": "Numeric",
    "value": "42",
    "start": 1013,
    "end": 1015
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1015,
    "end": 1016
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1016,
    "end": 1017
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 1031,
    "end": 1036
  },
  {
    "type": "Identifier",
    "value": "x13",
    "start": 1037,
    "end": 1040
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1041,
    "end": 1042
  },
  {
    "type": "Identifier",
    "value": "f10",
    "start": 1043,
    "end": 1046
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1046,
    "end": 1047
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1047,
    "end": 1048
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1048,
    "end": 1049
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 1057,
    "end": 1062
  },
  {
    "type": "Identifier",
    "value": "x14",
    "start": 1063,
    "end": 1066
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1067,
    "end": 1068
  },
  {
    "type": "Identifier",
    "value": "f10",
    "start": 1069,
    "end": 1072
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1072,
    "end": 1073
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 1073,
    "end": 1076
  },
  {
    "type": "Identifier",
    "value": "t3",
    "start": 1076,
    "end": 1078
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1078,
    "end": 1079
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1079,
    "end": 1080
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 1111,
    "end": 1116
  },
  {
    "type": "Identifier",
    "value": "x15",
    "start": 1117,
    "end": 1120
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1121,
    "end": 1122
  },
  {
    "type": "Identifier",
    "value": "f10",
    "start": 1123,
    "end": 1126
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1126,
    "end": 1127
  },
  {
    "type": "Numeric",
    "value": "42",
    "start": 1127,
    "end": 1129
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1129,
    "end": 1130
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 1131,
    "end": 1134
  },
  {
    "type": "Identifier",
    "value": "t2",
    "start": 1134,
    "end": 1136
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1136,
    "end": 1137
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1137,
    "end": 1138
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 1169,
    "end": 1174
  },
  {
    "type": "Identifier",
    "value": "x16",
    "start": 1175,
    "end": 1178
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1179,
    "end": 1180
  },
  {
    "type": "Identifier",
    "value": "f10",
    "start": 1181,
    "end": 1184
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1184,
    "end": 1185
  },
  {
    "type": "Numeric",
    "value": "42",
    "start": 1185,
    "end": 1187
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1187,
    "end": 1188
  },
  {
    "type": "String",
    "value": "\"hello\"",
    "start": 1189,
    "end": 1196
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1196,
    "end": 1197
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 1198,
    "end": 1201
  },
  {
    "type": "Identifier",
    "value": "t1",
    "start": 1201,
    "end": 1203
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1203,
    "end": 1204
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1204,
    "end": 1205
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 1236,
    "end": 1241
  },
  {
    "type": "Identifier",
    "value": "x17",
    "start": 1242,
    "end": 1245
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1246,
    "end": 1247
  },
  {
    "type": "Identifier",
    "value": "f10",
    "start": 1248,
    "end": 1251
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1251,
    "end": 1252
  },
  {
    "type": "Numeric",
    "value": "42",
    "start": 1252,
    "end": 1254
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1254,
    "end": 1255
  },
  {
    "type": "String",
    "value": "\"hello\"",
    "start": 1256,
    "end": 1263
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1263,
    "end": 1264
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 1265,
    "end": 1269
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1269,
    "end": 1270
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 1271,
    "end": 1274
  },
  {
    "type": "Identifier",
    "value": "t0",
    "start": 1274,
    "end": 1276
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1276,
    "end": 1277
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1277,
    "end": 1278
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 1309,
    "end": 1314
  },
  {
    "type": "Identifier",
    "value": "x18",
    "start": 1315,
    "end": 1318
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1319,
    "end": 1320
  },
  {
    "type": "Identifier",
    "value": "f10",
    "start": 1321,
    "end": 1324
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1324,
    "end": 1325
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 1325,
    "end": 1328
  },
  {
    "type": "Identifier",
    "value": "ns",
    "start": 1328,
    "end": 1330
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1330,
    "end": 1331
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 1332,
    "end": 1336
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1336,
    "end": 1337
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1337,
    "end": 1338
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1374,
    "end": 1382
  },
  {
    "type": "Identifier",
    "value": "g10",
    "start": 1383,
    "end": 1386
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1386,
    "end": 1387
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 1387,
    "end": 1388
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 1389,
    "end": 1396
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1397,
    "end": 1403
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1403,
    "end": 1404
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1404,
    "end": 1405
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1405,
    "end": 1406
  },
  {
    "type": "Identifier",
    "value": "V",
    "start": 1407,
    "end": 1408
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 1409,
    "end": 1416
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1417,
    "end": 1418
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1418,
    "end": 1424
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1424,
    "end": 1425
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1426,
    "end": 1432
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1432,
    "end": 1433
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1433,
    "end": 1434
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1434,
    "end": 1435
  },
  {
    "type": "Identifier",
    "value": "u",
    "start": 1435,
    "end": 1436
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1436,
    "end": 1437
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 1438,
    "end": 1439
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1439,
    "end": 1440
  },
  {
    "type": "Identifier",
    "value": "v",
    "start": 1441,
    "end": 1442
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1442,
    "end": 1443
  },
  {
    "type": "Identifier",
    "value": "V",
    "start": 1444,
    "end": 1445
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1445,
    "end": 1446
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1447,
    "end": 1448
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 1453,
    "end": 1456
  },
  {
    "type": "Identifier",
    "value": "x1",
    "start": 1457,
    "end": 1459
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1460,
    "end": 1461
  },
  {
    "type": "Identifier",
    "value": "f10",
    "start": 1462,
    "end": 1465
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1465,
    "end": 1466
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 1466,
    "end": 1469
  },
  {
    "type": "Identifier",
    "value": "u",
    "start": 1469,
    "end": 1470
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1470,
    "end": 1471
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1471,
    "end": 1472
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 1483,
    "end": 1486
  },
  {
    "type": "Identifier",
    "value": "x2",
    "start": 1487,
    "end": 1489
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1490,
    "end": 1491
  },
  {
    "type": "Identifier",
    "value": "f10",
    "start": 1492,
    "end": 1495
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1495,
    "end": 1496
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 1496,
    "end": 1499
  },
  {
    "type": "Identifier",
    "value": "v",
    "start": 1499,
    "end": 1500
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1500,
    "end": 1501
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1501,
    "end": 1502
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 1513,
    "end": 1516
  },
  {
    "type": "Identifier",
    "value": "x3",
    "start": 1517,
    "end": 1519
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1520,
    "end": 1521
  },
  {
    "type": "Identifier",
    "value": "f10",
    "start": 1522,
    "end": 1525
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1525,
    "end": 1526
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 1526,
    "end": 1527
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1527,
    "end": 1528
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 1529,
    "end": 1532
  },
  {
    "type": "Identifier",
    "value": "u",
    "start": 1532,
    "end": 1533
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1533,
    "end": 1534
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1534,
    "end": 1535
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 1566,
    "end": 1569
  },
  {
    "type": "Identifier",
    "value": "x4",
    "start": 1570,
    "end": 1572
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1573,
    "end": 1574
  },
  {
    "type": "Identifier",
    "value": "f10",
    "start": 1575,
    "end": 1578
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1578,
    "end": 1579
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 1579,
    "end": 1582
  },
  {
    "type": "Identifier",
    "value": "u",
    "start": 1582,
    "end": 1583
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1583,
    "end": 1584
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 1585,
    "end": 1588
  },
  {
    "type": "Identifier",
    "value": "v",
    "start": 1588,
    "end": 1589
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1589,
    "end": 1590
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1590,
    "end": 1591
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1616,
    "end": 1617
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 1619,
    "end": 1626
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1627,
    "end": 1635
  },
  {
    "type": "Identifier",
    "value": "f11",
    "start": 1636,
    "end": 1639
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1639,
    "end": 1640
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1640,
    "end": 1641
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 1642,
    "end": 1649
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1650,
    "end": 1651
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1651,
    "end": 1657
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 1658,
    "end": 1659
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1660,
    "end": 1666
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 1667,
    "end": 1668
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 1669,
    "end": 1676
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1676,
    "end": 1677
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1677,
    "end": 1678
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1678,
    "end": 1679
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1679,
    "end": 1680
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1680,
    "end": 1681
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 1681,
    "end": 1684
  },
  {
    "type": "Identifier",
    "value": "args",
    "start": 1684,
    "end": 1688
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1688,
    "end": 1689
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1690,
    "end": 1691
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1691,
    "end": 1692
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1692,
    "end": 1693
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1694,
    "end": 1695
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1695,
    "end": 1696
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 1698,
    "end": 1703
  },
  {
    "type": "Identifier",
    "value": "z10",
    "start": 1704,
    "end": 1707
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1708,
    "end": 1709
  },
  {
    "type": "Identifier",
    "value": "f11",
    "start": 1710,
    "end": 1713
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1713,
    "end": 1714
  },
  {
    "type": "Numeric",
    "value": "42",
    "start": 1714,
    "end": 1716
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1716,
    "end": 1717
  },
  {
    "type": "String",
    "value": "\"hello\"",
    "start": 1718,
    "end": 1725
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1725,
    "end": 1726
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 1727,
    "end": 1731
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1731,
    "end": 1732
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1732,
    "end": 1733
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 1758,
    "end": 1763
  },
  {
    "type": "Identifier",
    "value": "z11",
    "start": 1764,
    "end": 1767
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1768,
    "end": 1769
  },
  {
    "type": "Identifier",
    "value": "f11",
    "start": 1770,
    "end": 1773
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1773,
    "end": 1774
  },
  {
    "type": "Numeric",
    "value": "42",
    "start": 1774,
    "end": 1776
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1776,
    "end": 1777
  },
  {
    "type": "String",
    "value": "\"hello\"",
    "start": 1778,
    "end": 1785
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1785,
    "end": 1786
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1786,
    "end": 1787
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 1806,
    "end": 1811
  },
  {
    "type": "Identifier",
    "value": "z12",
    "start": 1812,
    "end": 1815
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1816,
    "end": 1817
  },
  {
    "type": "Identifier",
    "value": "f11",
    "start": 1818,
    "end": 1821
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1821,
    "end": 1822
  },
  {
    "type": "Numeric",
    "value": "42",
    "start": 1822,
    "end": 1824
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1824,
    "end": 1825
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1825,
    "end": 1826
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 1836,
    "end": 1841
  },
  {
    "type": "Identifier",
    "value": "z13",
    "start": 1842,
    "end": 1845
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1846,
    "end": 1847
  },
  {
    "type": "Identifier",
    "value": "f11",
    "start": 1848,
    "end": 1851
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1851,
    "end": 1852
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1852,
    "end": 1853
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1853,
    "end": 1854
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 1862,
    "end": 1867
  },
  {
    "type": "Identifier",
    "value": "z14",
    "start": 1868,
    "end": 1871
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1872,
    "end": 1873
  },
  {
    "type": "Identifier",
    "value": "f11",
    "start": 1874,
    "end": 1877
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1877,
    "end": 1878
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 1878,
    "end": 1881
  },
  {
    "type": "Identifier",
    "value": "t3",
    "start": 1881,
    "end": 1883
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1883,
    "end": 1884
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1884,
    "end": 1885
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 1916,
    "end": 1921
  },
  {
    "type": "Identifier",
    "value": "z15",
    "start": 1922,
    "end": 1925
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1926,
    "end": 1927
  },
  {
    "type": "Identifier",
    "value": "f11",
    "start": 1928,
    "end": 1931
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1931,
    "end": 1932
  },
  {
    "type": "Numeric",
    "value": "42",
    "start": 1932,
    "end": 1934
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1934,
    "end": 1935
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 1936,
    "end": 1939
  },
  {
    "type": "Identifier",
    "value": "t2",
    "start": 1939,
    "end": 1941
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1941,
    "end": 1942
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1942,
    "end": 1943
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 1970,
    "end": 1975
  },
  {
    "type": "Identifier",
    "value": "z16",
    "start": 1976,
    "end": 1979
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1980,
    "end": 1981
  },
  {
    "type": "Identifier",
    "value": "f11",
    "start": 1982,
    "end": 1985
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1985,
    "end": 1986
  },
  {
    "type": "Numeric",
    "value": "42",
    "start": 1986,
    "end": 1988
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1988,
    "end": 1989
  },
  {
    "type": "String",
    "value": "\"hello\"",
    "start": 1990,
    "end": 1997
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1997,
    "end": 1998
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 1999,
    "end": 2002
  },
  {
    "type": "Identifier",
    "value": "t1",
    "start": 2002,
    "end": 2004
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2004,
    "end": 2005
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2005,
    "end": 2006
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 2034,
    "end": 2039
  },
  {
    "type": "Identifier",
    "value": "z17",
    "start": 2040,
    "end": 2043
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2044,
    "end": 2045
  },
  {
    "type": "Identifier",
    "value": "f11",
    "start": 2046,
    "end": 2049
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2049,
    "end": 2050
  },
  {
    "type": "Numeric",
    "value": "42",
    "start": 2050,
    "end": 2052
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2052,
    "end": 2053
  },
  {
    "type": "String",
    "value": "\"hello\"",
    "start": 2054,
    "end": 2061
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2061,
    "end": 2062
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 2063,
    "end": 2067
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2067,
    "end": 2068
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 2069,
    "end": 2072
  },
  {
    "type": "Identifier",
    "value": "t0",
    "start": 2072,
    "end": 2074
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2074,
    "end": 2075
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2075,
    "end": 2076
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 2101,
    "end": 2106
  },
  {
    "type": "Identifier",
    "value": "z18",
    "start": 2107,
    "end": 2110
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2111,
    "end": 2112
  },
  {
    "type": "Identifier",
    "value": "f11",
    "start": 2113,
    "end": 2116
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2116,
    "end": 2117
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 2117,
    "end": 2120
  },
  {
    "type": "Identifier",
    "value": "ns",
    "start": 2120,
    "end": 2122
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2122,
    "end": 2123
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 2124,
    "end": 2128
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2128,
    "end": 2129
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2129,
    "end": 2130
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 2163,
    "end": 2171
  },
  {
    "type": "Identifier",
    "value": "g11",
    "start": 2172,
    "end": 2175
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2175,
    "end": 2176
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 2176,
    "end": 2177
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 2178,
    "end": 2185
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 2186,
    "end": 2192
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 2192,
    "end": 2193
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 2193,
    "end": 2194
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2194,
    "end": 2195
  },
  {
    "type": "Identifier",
    "value": "V",
    "start": 2196,
    "end": 2197
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 2198,
    "end": 2205
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 2206,
    "end": 2207
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 2207,
    "end": 2213
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2213,
    "end": 2214
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 2215,
    "end": 2221
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 2221,
    "end": 2222
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2222,
    "end": 2223
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2223,
    "end": 2224
  },
  {
    "type": "Identifier",
    "value": "u",
    "start": 2224,
    "end": 2225
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2225,
    "end": 2226
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 2227,
    "end": 2228
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2228,
    "end": 2229
  },
  {
    "type": "Identifier",
    "value": "v",
    "start": 2230,
    "end": 2231
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2231,
    "end": 2232
  },
  {
    "type": "Identifier",
    "value": "V",
    "start": 2233,
    "end": 2234
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2234,
    "end": 2235
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2236,
    "end": 2237
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 2242,
    "end": 2245
  },
  {
    "type": "Identifier",
    "value": "x1",
    "start": 2246,
    "end": 2248
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2249,
    "end": 2250
  },
  {
    "type": "Identifier",
    "value": "f11",
    "start": 2251,
    "end": 2254
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2254,
    "end": 2255
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 2255,
    "end": 2258
  },
  {
    "type": "Identifier",
    "value": "u",
    "start": 2258,
    "end": 2259
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2259,
    "end": 2260
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2260,
    "end": 2261
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 2272,
    "end": 2275
  },
  {
    "type": "Identifier",
    "value": "x2",
    "start": 2276,
    "end": 2278
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2279,
    "end": 2280
  },
  {
    "type": "Identifier",
    "value": "f11",
    "start": 2281,
    "end": 2284
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2284,
    "end": 2285
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 2285,
    "end": 2288
  },
  {
    "type": "Identifier",
    "value": "v",
    "start": 2288,
    "end": 2289
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2289,
    "end": 2290
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2290,
    "end": 2291
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 2302,
    "end": 2305
  },
  {
    "type": "Identifier",
    "value": "x3",
    "start": 2306,
    "end": 2308
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2309,
    "end": 2310
  },
  {
    "type": "Identifier",
    "value": "f11",
    "start": 2311,
    "end": 2314
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2314,
    "end": 2315
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 2315,
    "end": 2316
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2316,
    "end": 2317
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 2318,
    "end": 2321
  },
  {
    "type": "Identifier",
    "value": "u",
    "start": 2321,
    "end": 2322
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2322,
    "end": 2323
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2323,
    "end": 2324
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 2350,
    "end": 2353
  },
  {
    "type": "Identifier",
    "value": "x4",
    "start": 2354,
    "end": 2356
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2357,
    "end": 2358
  },
  {
    "type": "Identifier",
    "value": "f11",
    "start": 2359,
    "end": 2362
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2362,
    "end": 2363
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 2363,
    "end": 2366
  },
  {
    "type": "Identifier",
    "value": "u",
    "start": 2366,
    "end": 2367
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2367,
    "end": 2368
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 2369,
    "end": 2372
  },
  {
    "type": "Identifier",
    "value": "v",
    "start": 2372,
    "end": 2373
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2373,
    "end": 2374
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2374,
    "end": 2375
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2400,
    "end": 2401
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 2403,
    "end": 2411
  },
  {
    "type": "Identifier",
    "value": "call",
    "start": 2412,
    "end": 2416
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2416,
    "end": 2417
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2417,
    "end": 2418
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 2419,
    "end": 2426
  },
  {
    "type": "Identifier",
    "value": "unknown",
    "start": 2427,
    "end": 2434
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 2434,
    "end": 2435
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 2435,
    "end": 2436
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2436,
    "end": 2437
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 2438,
    "end": 2439
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2439,
    "end": 2440
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2440,
    "end": 2441
  },
  {
    "type": "Identifier",
    "value": "f",
    "start": 2441,
    "end": 2442
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2442,
    "end": 2443
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2444,
    "end": 2445
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 2445,
    "end": 2448
  },
  {
    "type": "Identifier",
    "value": "args",
    "start": 2448,
    "end": 2452
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2452,
    "end": 2453
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2454,
    "end": 2455
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2455,
    "end": 2456
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 2457,
    "end": 2459
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 2460,
    "end": 2461
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2461,
    "end": 2462
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 2463,
    "end": 2466
  },
  {
    "type": "Identifier",
    "value": "args",
    "start": 2466,
    "end": 2470
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2470,
    "end": 2471
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2472,
    "end": 2473
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2473,
    "end": 2474
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2475,
    "end": 2476
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 2481,
    "end": 2487
  },
  {
    "type": "Identifier",
    "value": "f",
    "start": 2488,
    "end": 2489
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2489,
    "end": 2490
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 2490,
    "end": 2493
  },
  {
    "type": "Identifier",
    "value": "args",
    "start": 2493,
    "end": 2497
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2497,
    "end": 2498
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2498,
    "end": 2499
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2500,
    "end": 2501
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 2503,
    "end": 2511
  },
  {
    "type": "Identifier",
    "value": "callr",
    "start": 2512,
    "end": 2517
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2517,
    "end": 2518
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2518,
    "end": 2519
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 2520,
    "end": 2527
  },
  {
    "type": "Identifier",
    "value": "unknown",
    "start": 2528,
    "end": 2535
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 2535,
    "end": 2536
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 2536,
    "end": 2537
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2537,
    "end": 2538
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 2539,
    "end": 2540
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2540,
    "end": 2541
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2541,
    "end": 2542
  },
  {
    "type": "Identifier",
    "value": "args",
    "start": 2542,
    "end": 2546
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2546,
    "end": 2547
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2548,
    "end": 2549
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2549,
    "end": 2550
  },
  {
    "type": "Identifier",
    "value": "f",
    "start": 2551,
    "end": 2552
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2552,
    "end": 2553
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2554,
    "end": 2555
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 2555,
    "end": 2558
  },
  {
    "type": "Identifier",
    "value": "args",
    "start": 2558,
    "end": 2562
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2562,
    "end": 2563
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2564,
    "end": 2565
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2565,
    "end": 2566
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 2567,
    "end": 2569
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 2570,
    "end": 2571
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2571,
    "end": 2572
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2573,
    "end": 2574
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 2579,
    "end": 2585
  },
  {
    "type": "Identifier",
    "value": "f",
    "start": 2586,
    "end": 2587
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2587,
    "end": 2588
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 2588,
    "end": 2591
  },
  {
    "type": "Identifier",
    "value": "args",
    "start": 2591,
    "end": 2595
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2595,
    "end": 2596
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2596,
    "end": 2597
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2598,
    "end": 2599
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 2601,
    "end": 2608
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 2609,
    "end": 2617
  },
  {
    "type": "Identifier",
    "value": "f15",
    "start": 2618,
    "end": 2621
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2621,
    "end": 2622
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 2622,
    "end": 2623
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2623,
    "end": 2624
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 2625,
    "end": 2631
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2631,
    "end": 2632
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 2633,
    "end": 2634
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2634,
    "end": 2635
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 2636,
    "end": 2642
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2642,
    "end": 2643
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2643,
    "end": 2644
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 2645,
    "end": 2651
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 2652,
    "end": 2653
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 2654,
    "end": 2660
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2660,
    "end": 2661
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 2662,
    "end": 2669
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 2670,
    "end": 2678
  },
  {
    "type": "Identifier",
    "value": "f16",
    "start": 2679,
    "end": 2682
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2682,
    "end": 2683
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 2683,
    "end": 2684
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2684,
    "end": 2685
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 2686,
    "end": 2687
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2687,
    "end": 2688
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2688,
    "end": 2689
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 2689,
    "end": 2690
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2690,
    "end": 2691
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 2692,
    "end": 2693
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2693,
    "end": 2694
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 2695,
    "end": 2696
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2696,
    "end": 2697
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 2698,
    "end": 2699
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2699,
    "end": 2700
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2700,
    "end": 2701
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 2702,
    "end": 2703
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 2704,
    "end": 2705
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 2706,
    "end": 2707
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2707,
    "end": 2708
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 2710,
    "end": 2713
  },
  {
    "type": "Identifier",
    "value": "x20",
    "start": 2714,
    "end": 2717
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2718,
    "end": 2719
  },
  {
    "type": "Identifier",
    "value": "call",
    "start": 2720,
    "end": 2724
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2724,
    "end": 2725
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2725,
    "end": 2726
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2726,
    "end": 2727
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2727,
    "end": 2728
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 2729,
    "end": 2730
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2730,
    "end": 2731
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 2732,
    "end": 2734
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2735,
    "end": 2736
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 2737,
    "end": 2738
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 2739,
    "end": 2740
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2740,
    "end": 2741
  },
  {
    "type": "Numeric",
    "value": "10",
    "start": 2742,
    "end": 2744
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2744,
    "end": 2745
  },
  {
    "type": "Numeric",
    "value": "20",
    "start": 2746,
    "end": 2748
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2748,
    "end": 2749
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2749,
    "end": 2750
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 2762,
    "end": 2765
  },
  {
    "type": "Identifier",
    "value": "x21",
    "start": 2766,
    "end": 2769
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2770,
    "end": 2771
  },
  {
    "type": "Identifier",
    "value": "call",
    "start": 2772,
    "end": 2776
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2776,
    "end": 2777
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2777,
    "end": 2778
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2778,
    "end": 2779
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2779,
    "end": 2780
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 2781,
    "end": 2782
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2782,
    "end": 2783
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 2784,
    "end": 2786
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2787,
    "end": 2788
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 2789,
    "end": 2790
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 2791,
    "end": 2792
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2792,
    "end": 2793
  },
  {
    "type": "Numeric",
    "value": "10",
    "start": 2794,
    "end": 2796
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2796,
    "end": 2797
  },
  {
    "type": "String",
    "value": "\"hello\"",
    "start": 2798,
    "end": 2805
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2805,
    "end": 2806
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2806,
    "end": 2807
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 2819,
    "end": 2822
  },
  {
    "type": "Identifier",
    "value": "x22",
    "start": 2823,
    "end": 2826
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2827,
    "end": 2828
  },
  {
    "type": "Identifier",
    "value": "call",
    "start": 2829,
    "end": 2833
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2833,
    "end": 2834
  },
  {
    "type": "Identifier",
    "value": "f15",
    "start": 2834,
    "end": 2837
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2837,
    "end": 2838
  },
  {
    "type": "String",
    "value": "\"hello\"",
    "start": 2839,
    "end": 2846
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2846,
    "end": 2847
  },
  {
    "type": "Numeric",
    "value": "42",
    "start": 2848,
    "end": 2850
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2850,
    "end": 2851
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2851,
    "end": 2852
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 2873,
    "end": 2876
  },
  {
    "type": "Identifier",
    "value": "x23",
    "start": 2877,
    "end": 2880
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2881,
    "end": 2882
  },
  {
    "type": "Identifier",
    "value": "call",
    "start": 2883,
    "end": 2887
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2887,
    "end": 2888
  },
  {
    "type": "Identifier",
    "value": "f16",
    "start": 2888,
    "end": 2891
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2891,
    "end": 2892
  },
  {
    "type": "String",
    "value": "\"hello\"",
    "start": 2893,
    "end": 2900
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2900,
    "end": 2901
  },
  {
    "type": "Numeric",
    "value": "42",
    "start": 2902,
    "end": 2904
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2904,
    "end": 2905
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2905,
    "end": 2906
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 2919,
    "end": 2922
  },
  {
    "type": "Identifier",
    "value": "x24",
    "start": 2923,
    "end": 2926
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2927,
    "end": 2928
  },
  {
    "type": "Identifier",
    "value": "call",
    "start": 2929,
    "end": 2933
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2933,
    "end": 2934
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 2934,
    "end": 2935
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 2935,
    "end": 2941
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2941,
    "end": 2942
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 2943,
    "end": 2949
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 2949,
    "end": 2950
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2950,
    "end": 2951
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 2952,
    "end": 2958
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 2959,
    "end": 2960
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 2961,
    "end": 2967
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2967,
    "end": 2968
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2968,
    "end": 2969
  },
  {
    "type": "Identifier",
    "value": "f16",
    "start": 2969,
    "end": 2972
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2972,
    "end": 2973
  },
  {
    "type": "String",
    "value": "\"hello\"",
    "start": 2974,
    "end": 2981
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2981,
    "end": 2982
  },
  {
    "type": "Numeric",
    "value": "42",
    "start": 2983,
    "end": 2985
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2985,
    "end": 2986
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2986,
    "end": 2987
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 3009,
    "end": 3012
  },
  {
    "type": "Identifier",
    "value": "x30",
    "start": 3013,
    "end": 3016
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3017,
    "end": 3018
  },
  {
    "type": "Identifier",
    "value": "callr",
    "start": 3019,
    "end": 3024
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3024,
    "end": 3025
  },
  {
    "type": "Identifier",
    "value": "sn",
    "start": 3025,
    "end": 3027
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3027,
    "end": 3028
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3029,
    "end": 3030
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 3030,
    "end": 3031
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3031,
    "end": 3032
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 3033,
    "end": 3034
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3034,
    "end": 3035
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 3036,
    "end": 3038
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 3039,
    "end": 3040
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 3041,
    "end": 3042
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 3043,
    "end": 3044
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3044,
    "end": 3045
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3045,
    "end": 3046
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 3058,
    "end": 3061
  },
  {
    "type": "Identifier",
    "value": "x31",
    "start": 3062,
    "end": 3065
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3066,
    "end": 3067
  },
  {
    "type": "Identifier",
    "value": "callr",
    "start": 3068,
    "end": 3073
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3073,
    "end": 3074
  },
  {
    "type": "Identifier",
    "value": "sn",
    "start": 3074,
    "end": 3076
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3076,
    "end": 3077
  },
  {
    "type": "Identifier",
    "value": "f15",
    "start": 3078,
    "end": 3081
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3081,
    "end": 3082
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3082,
    "end": 3083
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 3104,
    "end": 3107
  },
  {
    "type": "Identifier",
    "value": "x32",
    "start": 3108,
    "end": 3111
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3112,
    "end": 3113
  },
  {
    "type": "Identifier",
    "value": "callr",
    "start": 3114,
    "end": 3119
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3119,
    "end": 3120
  },
  {
    "type": "Identifier",
    "value": "sn",
    "start": 3120,
    "end": 3122
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3122,
    "end": 3123
  },
  {
    "type": "Identifier",
    "value": "f16",
    "start": 3124,
    "end": 3127
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3127,
    "end": 3128
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3128,
    "end": 3129
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 3151,
    "end": 3159
  },
  {
    "type": "Identifier",
    "value": "bind",
    "start": 3160,
    "end": 3164
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 3164,
    "end": 3165
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 3165,
    "end": 3166
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3166,
    "end": 3167
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 3168,
    "end": 3169
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 3170,
    "end": 3177
  },
  {
    "type": "Identifier",
    "value": "unknown",
    "start": 3178,
    "end": 3185
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 3185,
    "end": 3186
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 3186,
    "end": 3187
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3187,
    "end": 3188
  },
  {
    "type": "Identifier",
    "value": "V",
    "start": 3189,
    "end": 3190
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 3190,
    "end": 3191
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3191,
    "end": 3192
  },
  {
    "type": "Identifier",
    "value": "f",
    "start": 3192,
    "end": 3193
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3193,
    "end": 3194
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3195,
    "end": 3196
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 3196,
    "end": 3197
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3197,
    "end": 3198
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 3199,
    "end": 3200
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3200,
    "end": 3201
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 3202,
    "end": 3205
  },
  {
    "type": "Identifier",
    "value": "rest",
    "start": 3205,
    "end": 3209
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3209,
    "end": 3210
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 3211,
    "end": 3212
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3212,
    "end": 3213
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 3214,
    "end": 3216
  },
  {
    "type": "Identifier",
    "value": "V",
    "start": 3217,
    "end": 3218
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3218,
    "end": 3219
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 3220,
    "end": 3221
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3221,
    "end": 3222
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 3223,
    "end": 3224
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3224,
    "end": 3225
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3226,
    "end": 3227
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 3232,
    "end": 3238
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3239,
    "end": 3240
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 3240,
    "end": 3243
  },
  {
    "type": "Identifier",
    "value": "rest",
    "start": 3243,
    "end": 3247
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3247,
    "end": 3248
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 3249,
    "end": 3250
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3250,
    "end": 3251
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 3252,
    "end": 3254
  },
  {
    "type": "Identifier",
    "value": "f",
    "start": 3255,
    "end": 3256
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3256,
    "end": 3257
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 3257,
    "end": 3258
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3258,
    "end": 3259
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 3260,
    "end": 3263
  },
  {
    "type": "Identifier",
    "value": "rest",
    "start": 3263,
    "end": 3267
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3267,
    "end": 3268
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3268,
    "end": 3269
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3270,
    "end": 3271
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 3273,
    "end": 3280
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 3281,
    "end": 3286
  },
  {
    "type": "Identifier",
    "value": "f20",
    "start": 3287,
    "end": 3290
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3290,
    "end": 3291
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3292,
    "end": 3293
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 3293,
    "end": 3294
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3294,
    "end": 3295
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 3296,
    "end": 3302
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3302,
    "end": 3303
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 3304,
    "end": 3305
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3305,
    "end": 3306
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 3307,
    "end": 3313
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3313,
    "end": 3314
  },
  {
    "type": "Identifier",
    "value": "z",
    "start": 3315,
    "end": 3316
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3316,
    "end": 3317
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 3318,
    "end": 3325
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3325,
    "end": 3326
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 3327,
    "end": 3329
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 3330,
    "end": 3336
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 3336,
    "end": 3337
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 3337,
    "end": 3338
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3338,
    "end": 3339
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 3341,
    "end": 3346
  },
  {
    "type": "Identifier",
    "value": "f21",
    "start": 3347,
    "end": 3350
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3351,
    "end": 3352
  },
  {
    "type": "Identifier",
    "value": "bind",
    "start": 3353,
    "end": 3357
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3357,
    "end": 3358
  },
  {
    "type": "Identifier",
    "value": "f20",
    "start": 3358,
    "end": 3361
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3361,
    "end": 3362
  },
  {
    "type": "Numeric",
    "value": "42",
    "start": 3363,
    "end": 3365
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3365,
    "end": 3366
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3366,
    "end": 3367
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 3408,
    "end": 3413
  },
  {
    "type": "Identifier",
    "value": "f22",
    "start": 3414,
    "end": 3417
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3418,
    "end": 3419
  },
  {
    "type": "Identifier",
    "value": "bind",
    "start": 3420,
    "end": 3424
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3424,
    "end": 3425
  },
  {
    "type": "Identifier",
    "value": "f21",
    "start": 3425,
    "end": 3428
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3428,
    "end": 3429
  },
  {
    "type": "String",
    "value": "\"hello\"",
    "start": 3430,
    "end": 3437
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3437,
    "end": 3438
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3438,
    "end": 3439
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 3469,
    "end": 3474
  },
  {
    "type": "Identifier",
    "value": "f23",
    "start": 3475,
    "end": 3478
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3479,
    "end": 3480
  },
  {
    "type": "Identifier",
    "value": "bind",
    "start": 3481,
    "end": 3485
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3485,
    "end": 3486
  },
  {
    "type": "Identifier",
    "value": "f22",
    "start": 3486,
    "end": 3489
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3489,
    "end": 3490
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 3491,
    "end": 3495
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3495,
    "end": 3496
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3496,
    "end": 3497
  },
  {
    "type": "Identifier",
    "value": "f20",
    "start": 3518,
    "end": 3521
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3521,
    "end": 3522
  },
  {
    "type": "Numeric",
    "value": "42",
    "start": 3522,
    "end": 3524
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3524,
    "end": 3525
  },
  {
    "type": "String",
    "value": "\"hello\"",
    "start": 3526,
    "end": 3533
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3533,
    "end": 3534
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 3535,
    "end": 3539
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3539,
    "end": 3540
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3540,
    "end": 3541
  },
  {
    "type": "Identifier",
    "value": "f21",
    "start": 3542,
    "end": 3545
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3545,
    "end": 3546
  },
  {
    "type": "String",
    "value": "\"hello\"",
    "start": 3546,
    "end": 3553
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3553,
    "end": 3554
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 3555,
    "end": 3559
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3559,
    "end": 3560
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3560,
    "end": 3561
  },
  {
    "type": "Identifier",
    "value": "f22",
    "start": 3562,
    "end": 3565
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3565,
    "end": 3566
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 3566,
    "end": 3570
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3570,
    "end": 3571
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3571,
    "end": 3572
  },
  {
    "type": "Identifier",
    "value": "f23",
    "start": 3573,
    "end": 3576
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3576,
    "end": 3577
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3577,
    "end": 3578
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3578,
    "end": 3579
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 3581,
    "end": 3588
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 3589,
    "end": 3594
  },
  {
    "type": "Identifier",
    "value": "g20",
    "start": 3595,
    "end": 3598
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3598,
    "end": 3599
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3600,
    "end": 3601
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 3601,
    "end": 3602
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3602,
    "end": 3603
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 3604,
    "end": 3610
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3610,
    "end": 3611
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 3612,
    "end": 3613
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 3613,
    "end": 3614
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3614,
    "end": 3615
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 3616,
    "end": 3622
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3622,
    "end": 3623
  },
  {
    "type": "Identifier",
    "value": "z",
    "start": 3624,
    "end": 3625
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 3625,
    "end": 3626
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3626,
    "end": 3627
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 3628,
    "end": 3635
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3635,
    "end": 3636
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 3637,
    "end": 3639
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 3640,
    "end": 3646
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 3646,
    "end": 3647
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 3647,
    "end": 3648
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3648,
    "end": 3649
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 3651,
    "end": 3656
  },
  {
    "type": "Identifier",
    "value": "g21",
    "start": 3657,
    "end": 3660
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3661,
    "end": 3662
  },
  {
    "type": "Identifier",
    "value": "bind",
    "start": 3663,
    "end": 3667
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3667,
    "end": 3668
  },
  {
    "type": "Identifier",
    "value": "g20",
    "start": 3668,
    "end": 3671
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3671,
    "end": 3672
  },
  {
    "type": "Numeric",
    "value": "42",
    "start": 3673,
    "end": 3675
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3675,
    "end": 3676
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3676,
    "end": 3677
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 3718,
    "end": 3723
  },
  {
    "type": "Identifier",
    "value": "g22",
    "start": 3724,
    "end": 3727
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3728,
    "end": 3729
  },
  {
    "type": "Identifier",
    "value": "bind",
    "start": 3730,
    "end": 3734
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3734,
    "end": 3735
  },
  {
    "type": "Identifier",
    "value": "g21",
    "start": 3735,
    "end": 3738
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3738,
    "end": 3739
  },
  {
    "type": "String",
    "value": "\"hello\"",
    "start": 3740,
    "end": 3747
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3747,
    "end": 3748
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3748,
    "end": 3749
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 3779,
    "end": 3784
  },
  {
    "type": "Identifier",
    "value": "g23",
    "start": 3785,
    "end": 3788
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3789,
    "end": 3790
  },
  {
    "type": "Identifier",
    "value": "bind",
    "start": 3791,
    "end": 3795
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3795,
    "end": 3796
  },
  {
    "type": "Identifier",
    "value": "g22",
    "start": 3796,
    "end": 3799
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3799,
    "end": 3800
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 3801,
    "end": 3805
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3805,
    "end": 3806
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3806,
    "end": 3807
  },
  {
    "type": "Identifier",
    "value": "g20",
    "start": 3828,
    "end": 3831
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3831,
    "end": 3832
  },
  {
    "type": "Numeric",
    "value": "42",
    "start": 3832,
    "end": 3834
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3834,
    "end": 3835
  },
  {
    "type": "String",
    "value": "\"hello\"",
    "start": 3836,
    "end": 3843
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3843,
    "end": 3844
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 3845,
    "end": 3849
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3849,
    "end": 3850
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3850,
    "end": 3851
  },
  {
    "type": "Identifier",
    "value": "g20",
    "start": 3852,
    "end": 3855
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3855,
    "end": 3856
  },
  {
    "type": "Numeric",
    "value": "42",
    "start": 3856,
    "end": 3858
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3858,
    "end": 3859
  },
  {
    "type": "String",
    "value": "\"hello\"",
    "start": 3860,
    "end": 3867
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3867,
    "end": 3868
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3868,
    "end": 3869
  },
  {
    "type": "Identifier",
    "value": "g20",
    "start": 3870,
    "end": 3873
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3873,
    "end": 3874
  },
  {
    "type": "Numeric",
    "value": "42",
    "start": 3874,
    "end": 3876
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3876,
    "end": 3877
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3877,
    "end": 3878
  },
  {
    "type": "Identifier",
    "value": "g21",
    "start": 3879,
    "end": 3882
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3882,
    "end": 3883
  },
  {
    "type": "String",
    "value": "\"hello\"",
    "start": 3883,
    "end": 3890
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3890,
    "end": 3891
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 3892,
    "end": 3896
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3896,
    "end": 3897
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3897,
    "end": 3898
  },
  {
    "type": "Identifier",
    "value": "g21",
    "start": 3899,
    "end": 3902
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3902,
    "end": 3903
  },
  {
    "type": "String",
    "value": "\"hello\"",
    "start": 3903,
    "end": 3910
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3910,
    "end": 3911
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3911,
    "end": 3912
  },
  {
    "type": "Identifier",
    "value": "g21",
    "start": 3913,
    "end": 3916
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3916,
    "end": 3917
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3917,
    "end": 3918
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3918,
    "end": 3919
  },
  {
    "type": "Identifier",
    "value": "g22",
    "start": 3920,
    "end": 3923
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3923,
    "end": 3924
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 3924,
    "end": 3928
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3928,
    "end": 3929
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3929,
    "end": 3930
  },
  {
    "type": "Identifier",
    "value": "g22",
    "start": 3931,
    "end": 3934
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3934,
    "end": 3935
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3935,
    "end": 3936
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3936,
    "end": 3937
  },
  {
    "type": "Identifier",
    "value": "g23",
    "start": 3938,
    "end": 3941
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3941,
    "end": 3942
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3942,
    "end": 3943
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3943,
    "end": 3944
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 3946,
    "end": 3953
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 3954,
    "end": 3962
  },
  {
    "type": "Identifier",
    "value": "f30",
    "start": 3963,
    "end": 3966
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 3966,
    "end": 3967
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 3967,
    "end": 3968
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3968,
    "end": 3969
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 3970,
    "end": 3971
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 3972,
    "end": 3979
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3980,
    "end": 3981
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3981,
    "end": 3982
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 3982,
    "end": 3983
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3983,
    "end": 3984
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 3985,
    "end": 3986
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3986,
    "end": 3987
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 3988,
    "end": 3990
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 3991,
    "end": 3994
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3994,
    "end": 3995
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 3995,
    "end": 3996
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 3996,
    "end": 3997
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 3997,
    "end": 3998
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3998,
    "end": 3999
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 3999,
    "end": 4000
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4000,
    "end": 4001
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 4002,
    "end": 4003
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 4003,
    "end": 4004
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 4005,
    "end": 4008
  },
  {
    "type": "Identifier",
    "value": "args",
    "start": 4008,
    "end": 4012
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4012,
    "end": 4013
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 4014,
    "end": 4015
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4015,
    "end": 4016
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4016,
    "end": 4017
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 4018,
    "end": 4019
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4019,
    "end": 4020
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 4022,
    "end": 4027
  },
  {
    "type": "Identifier",
    "value": "c30",
    "start": 4028,
    "end": 4031
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 4032,
    "end": 4033
  },
  {
    "type": "Identifier",
    "value": "f30",
    "start": 4034,
    "end": 4037
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4037,
    "end": 4038
  },
  {
    "type": "Numeric",
    "value": "42",
    "start": 4038,
    "end": 4040
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 4040,
    "end": 4041
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 4042,
    "end": 4043
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 4044,
    "end": 4046
  },
  {
    "type": "String",
    "value": "\"\"",
    "start": 4047,
    "end": 4049
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 4050,
    "end": 4051
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 4052,
    "end": 4053
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 4053,
    "end": 4054
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 4055,
    "end": 4056
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 4057,
    "end": 4059
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 4060,
    "end": 4061
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 4062,
    "end": 4063
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 4064,
    "end": 4065
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4065,
    "end": 4066
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4066,
    "end": 4067
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 4120,
    "end": 4124
  },
  {
    "type": "Identifier",
    "value": "T01",
    "start": 4125,
    "end": 4128
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 4129,
    "end": 4130
  },
  {
    "type": "Identifier",
    "value": "Parameters",
    "start": 4131,
    "end": 4141
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 4141,
    "end": 4142
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4142,
    "end": 4143
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 4143,
    "end": 4144
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4144,
    "end": 4145
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 4146,
    "end": 4152
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 4152,
    "end": 4153
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 4154,
    "end": 4155
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4155,
    "end": 4156
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 4157,
    "end": 4163
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 4163,
    "end": 4164
  },
  {
    "type": "Identifier",
    "value": "z",
    "start": 4165,
    "end": 4166
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4166,
    "end": 4167
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 4168,
    "end": 4175
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4175,
    "end": 4176
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 4177,
    "end": 4179
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 4180,
    "end": 4184
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 4184,
    "end": 4185
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4185,
    "end": 4186
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 4187,
    "end": 4191
  },
  {
    "type": "Identifier",
    "value": "T02",
    "start": 4192,
    "end": 4195
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 4196,
    "end": 4197
  },
  {
    "type": "Identifier",
    "value": "Parameters",
    "start": 4198,
    "end": 4208
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 4208,
    "end": 4209
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4209,
    "end": 4210
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 4210,
    "end": 4213
  },
  {
    "type": "Identifier",
    "value": "args",
    "start": 4213,
    "end": 4217
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4217,
    "end": 4218
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 4219,
    "end": 4220
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 4220,
    "end": 4226
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 4226,
    "end": 4227
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 4228,
    "end": 4234
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 4234,
    "end": 4235
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 4236,
    "end": 4243
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 4243,
    "end": 4244
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4244,
    "end": 4245
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 4246,
    "end": 4248
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 4249,
    "end": 4253
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 4253,
    "end": 4254
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4254,
    "end": 4255
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 4256,
    "end": 4260
  },
  {
    "type": "Identifier",
    "value": "T03",
    "start": 4261,
    "end": 4264
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 4265,
    "end": 4266
  },
  {
    "type": "Identifier",
    "value": "ConstructorParameters",
    "start": 4267,
    "end": 4288
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 4288,
    "end": 4289
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 4289,
    "end": 4292
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4293,
    "end": 4294
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 4294,
    "end": 4295
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4295,
    "end": 4296
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 4297,
    "end": 4303
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 4303,
    "end": 4304
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 4305,
    "end": 4306
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4306,
    "end": 4307
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 4308,
    "end": 4314
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 4314,
    "end": 4315
  },
  {
    "type": "Identifier",
    "value": "z",
    "start": 4316,
    "end": 4317
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4317,
    "end": 4318
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 4319,
    "end": 4326
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4326,
    "end": 4327
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 4328,
    "end": 4330
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 4331,
    "end": 4335
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 4335,
    "end": 4336
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4336,
    "end": 4337
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 4338,
    "end": 4342
  },
  {
    "type": "Identifier",
    "value": "T04",
    "start": 4343,
    "end": 4346
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 4347,
    "end": 4348
  },
  {
    "type": "Identifier",
    "value": "ConstructorParameters",
    "start": 4349,
    "end": 4370
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 4370,
    "end": 4371
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 4371,
    "end": 4374
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4375,
    "end": 4376
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 4376,
    "end": 4379
  },
  {
    "type": "Identifier",
    "value": "args",
    "start": 4379,
    "end": 4383
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4383,
    "end": 4384
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 4385,
    "end": 4386
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 4386,
    "end": 4392
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 4392,
    "end": 4393
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 4394,
    "end": 4400
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 4400,
    "end": 4401
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 4402,
    "end": 4409
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 4409,
    "end": 4410
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4410,
    "end": 4411
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 4412,
    "end": 4414
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 4415,
    "end": 4419
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 4419,
    "end": 4420
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4420,
    "end": 4421
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 4422,
    "end": 4426
  },
  {
    "type": "Identifier",
    "value": "T05",
    "start": 4427,
    "end": 4430
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 4430,
    "end": 4431
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 4431,
    "end": 4432
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 4432,
    "end": 4433
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 4434,
    "end": 4435
  },
  {
    "type": "Identifier",
    "value": "Parameters",
    "start": 4436,
    "end": 4446
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 4446,
    "end": 4447
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4447,
    "end": 4448
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 4448,
    "end": 4451
  },
  {
    "type": "Identifier",
    "value": "args",
    "start": 4451,
    "end": 4455
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4455,
    "end": 4456
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 4457,
    "end": 4458
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 4458,
    "end": 4459
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 4459,
    "end": 4460
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4460,
    "end": 4461
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 4462,
    "end": 4464
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 4465,
    "end": 4469
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 4469,
    "end": 4470
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4470,
    "end": 4471
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 4472,
    "end": 4476
  },
  {
    "type": "Identifier",
    "value": "T06",
    "start": 4477,
    "end": 4480
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 4480,
    "end": 4481
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 4481,
    "end": 4482
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 4482,
    "end": 4483
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 4484,
    "end": 4485
  },
  {
    "type": "Identifier",
    "value": "ConstructorParameters",
    "start": 4486,
    "end": 4507
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 4507,
    "end": 4508
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 4508,
    "end": 4511
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4512,
    "end": 4513
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 4513,
    "end": 4516
  },
  {
    "type": "Identifier",
    "value": "args",
    "start": 4516,
    "end": 4520
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4520,
    "end": 4521
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 4522,
    "end": 4523
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 4523,
    "end": 4524
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4524,
    "end": 4525
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 4526,
    "end": 4528
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 4529,
    "end": 4533
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 4533,
    "end": 4534
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4534,
    "end": 4535
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 4536,
    "end": 4540
  },
  {
    "type": "Identifier",
    "value": "T07",
    "start": 4541,
    "end": 4544
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 4544,
    "end": 4545
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 4545,
    "end": 4546
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 4547,
    "end": 4554
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 4555,
    "end": 4558
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 4558,
    "end": 4559
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 4559,
    "end": 4560
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 4560,
    "end": 4561
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 4562,
    "end": 4563
  },
  {
    "type": "Identifier",
    "value": "Parameters",
    "start": 4564,
    "end": 4574
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 4574,
    "end": 4575
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4575,
    "end": 4576
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 4576,
    "end": 4579
  },
  {
    "type": "Identifier",
    "value": "args",
    "start": 4579,
    "end": 4583
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4583,
    "end": 4584
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 4585,
    "end": 4586
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4586,
    "end": 4587
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 4588,
    "end": 4590
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 4591,
    "end": 4595
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 4595,
    "end": 4596
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4596,
    "end": 4597
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 4598,
    "end": 4602
  },
  {
    "type": "Identifier",
    "value": "T08",
    "start": 4603,
    "end": 4606
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 4606,
    "end": 4607
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 4607,
    "end": 4608
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 4609,
    "end": 4616
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 4617,
    "end": 4620
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 4620,
    "end": 4621
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 4621,
    "end": 4622
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 4622,
    "end": 4623
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 4624,
    "end": 4625
  },
  {
    "type": "Identifier",
    "value": "ConstructorParameters",
    "start": 4626,
    "end": 4647
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 4647,
    "end": 4648
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 4648,
    "end": 4651
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4652,
    "end": 4653
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 4653,
    "end": 4656
  },
  {
    "type": "Identifier",
    "value": "args",
    "start": 4656,
    "end": 4660
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4660,
    "end": 4661
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 4662,
    "end": 4663
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4663,
    "end": 4664
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 4665,
    "end": 4667
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 4668,
    "end": 4672
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 4672,
    "end": 4673
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4673,
    "end": 4674
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 4675,
    "end": 4679
  },
  {
    "type": "Identifier",
    "value": "T09",
    "start": 4680,
    "end": 4683
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 4684,
    "end": 4685
  },
  {
    "type": "Identifier",
    "value": "Parameters",
    "start": 4686,
    "end": 4696
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 4696,
    "end": 4697
  },
  {
    "type": "Identifier",
    "value": "Function",
    "start": 4697,
    "end": 4705
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 4705,
    "end": 4706
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4706,
    "end": 4707
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 4709,
    "end": 4713
  },
  {
    "type": "Identifier",
    "value": "Record1",
    "start": 4714,
    "end": 4721
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 4722,
    "end": 4723
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 4724,
    "end": 4725
  },
  {
    "type": "Identifier",
    "value": "move",
    "start": 4728,
    "end": 4732
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4732,
    "end": 4733
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 4734,
    "end": 4735
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 4735,
    "end": 4741
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 4741,
    "end": 4742
  },
  {
    "type": "String",
    "value": "'left'",
    "start": 4743,
    "end": 4749
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 4750,
    "end": 4751
  },
  {
    "type": "String",
    "value": "'right'",
    "start": 4752,
    "end": 4759
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 4759,
    "end": 4760
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4760,
    "end": 4761
  },
  {
    "type": "Identifier",
    "value": "jump",
    "start": 4764,
    "end": 4768
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4768,
    "end": 4769
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 4770,
    "end": 4771
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 4771,
    "end": 4777
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 4777,
    "end": 4778
  },
  {
    "type": "String",
    "value": "'up'",
    "start": 4779,
    "end": 4783
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 4784,
    "end": 4785
  },
  {
    "type": "String",
    "value": "'down'",
    "start": 4786,
    "end": 4792
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 4792,
    "end": 4793
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4793,
    "end": 4794
  },
  {
    "type": "Identifier",
    "value": "stop",
    "start": 4797,
    "end": 4801
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4801,
    "end": 4802
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 4803,
    "end": 4809
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4809,
    "end": 4810
  },
  {
    "type": "Identifier",
    "value": "done",
    "start": 4813,
    "end": 4817
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4817,
    "end": 4818
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 4819,
    "end": 4820
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 4820,
    "end": 4821
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4821,
    "end": 4822
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 4823,
    "end": 4824
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 4826,
    "end": 4830
  },
  {
    "type": "Identifier",
    "value": "EventType",
    "start": 4831,
    "end": 4840
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 4840,
    "end": 4841
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 4841,
    "end": 4842
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 4842,
    "end": 4843
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 4844,
    "end": 4845
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 4846,
    "end": 4847
  },
  {
    "type": "Identifier",
    "value": "emit",
    "start": 4850,
    "end": 4854
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 4854,
    "end": 4855
  },
  {
    "type": "Identifier",
    "value": "K",
    "start": 4855,
    "end": 4856
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 4857,
    "end": 4864
  },
  {
    "type": "Identifier",
    "value": "keyof",
    "start": 4865,
    "end": 4870
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 4871,
    "end": 4872
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 4873,
    "end": 4874
  },
  {
    "type": "Identifier",
    "value": "keyof",
    "start": 4875,
    "end": 4880
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 4881,
    "end": 4882
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 4882,
    "end": 4883
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4883,
    "end": 4884
  },
  {
    "type": "Identifier",
    "value": "e",
    "start": 4884,
    "end": 4885
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4885,
    "end": 4886
  },
  {
    "type": "Identifier",
    "value": "K",
    "start": 4887,
    "end": 4888
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 4888,
    "end": 4889
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 4890,
    "end": 4893
  },
  {
    "type": "Identifier",
    "value": "payload",
    "start": 4893,
    "end": 4900
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4900,
    "end": 4901
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 4902,
    "end": 4903
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 4903,
    "end": 4904
  },
  {
    "type": "Identifier",
    "value": "K",
    "start": 4904,
    "end": 4905
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 4905,
    "end": 4906
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 4907,
    "end": 4914
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 4915,
    "end": 4918
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 4918,
    "end": 4919
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 4919,
    "end": 4920
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 4921,
    "end": 4922
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 4923,
    "end": 4924
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 4924,
    "end": 4925
  },
  {
    "type": "Identifier",
    "value": "K",
    "start": 4925,
    "end": 4926
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 4926,
    "end": 4927
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4928,
    "end": 4929
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 4930,
    "end": 4931
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 4931,
    "end": 4932
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 4932,
    "end": 4933
  },
  {
    "type": "Identifier",
    "value": "K",
    "start": 4933,
    "end": 4934
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 4934,
    "end": 4935
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 4935,
    "end": 4936
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4936,
    "end": 4937
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4937,
    "end": 4938
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 4939,
    "end": 4943
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4943,
    "end": 4944
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 4946,
    "end": 4947
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 4949,
    "end": 4956
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 4957,
    "end": 4960
  },
  {
    "type": "Identifier",
    "value": "events",
    "start": 4961,
    "end": 4967
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4967,
    "end": 4968
  },
  {
    "type": "Identifier",
    "value": "EventType",
    "start": 4969,
    "end": 4978
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 4978,
    "end": 4979
  },
  {
    "type": "Identifier",
    "value": "Record1",
    "start": 4979,
    "end": 4986
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 4986,
    "end": 4987
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4987,
    "end": 4988
  },
  {
    "type": "Identifier",
    "value": "events",
    "start": 4989,
    "end": 4995
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 4995,
    "end": 4996
  },
  {
    "type": "Identifier",
    "value": "emit",
    "start": 4996,
    "end": 5000
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 5000,
    "end": 5001
  },
  {
    "type": "String",
    "value": "'move'",
    "start": 5001,
    "end": 5007
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 5007,
    "end": 5008
  },
  {
    "type": "Numeric",
    "value": "10",
    "start": 5009,
    "end": 5011
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 5011,
    "end": 5012
  },
  {
    "type": "String",
    "value": "'left'",
    "start": 5013,
    "end": 5019
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 5019,
    "end": 5020
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 5020,
    "end": 5021
  },
  {
    "type": "Identifier",
    "value": "events",
    "start": 5022,
    "end": 5028
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 5028,
    "end": 5029
  },
  {
    "type": "Identifier",
    "value": "emit",
    "start": 5029,
    "end": 5033
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 5033,
    "end": 5034
  },
  {
    "type": "String",
    "value": "'jump'",
    "start": 5034,
    "end": 5040
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 5040,
    "end": 5041
  },
  {
    "type": "Numeric",
    "value": "20",
    "start": 5042,
    "end": 5044
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 5044,
    "end": 5045
  },
  {
    "type": "String",
    "value": "'up'",
    "start": 5046,
    "end": 5050
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 5050,
    "end": 5051
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 5051,
    "end": 5052
  },
  {
    "type": "Identifier",
    "value": "events",
    "start": 5053,
    "end": 5059
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 5059,
    "end": 5060
  },
  {
    "type": "Identifier",
    "value": "emit",
    "start": 5060,
    "end": 5064
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 5064,
    "end": 5065
  },
  {
    "type": "String",
    "value": "'stop'",
    "start": 5065,
    "end": 5071
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 5071,
    "end": 5072
  },
  {
    "type": "String",
    "value": "'Bye!'",
    "start": 5073,
    "end": 5079
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 5079,
    "end": 5080
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 5080,
    "end": 5081
  },
  {
    "type": "Identifier",
    "value": "events",
    "start": 5082,
    "end": 5088
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 5088,
    "end": 5089
  },
  {
    "type": "Identifier",
    "value": "emit",
    "start": 5089,
    "end": 5093
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 5093,
    "end": 5094
  },
  {
    "type": "String",
    "value": "'done'",
    "start": 5094,
    "end": 5100
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 5100,
    "end": 5101
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 5101,
    "end": 5102
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 5126,
    "end": 5133
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 5134,
    "end": 5137
  },
  {
    "type": "Identifier",
    "value": "ff1",
    "start": 5138,
    "end": 5141
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 5141,
    "end": 5142
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 5143,
    "end": 5144
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 5144,
    "end": 5147
  },
  {
    "type": "Identifier",
    "value": "args",
    "start": 5148,
    "end": 5152
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 5152,
    "end": 5153
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 5154,
    "end": 5157
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 5157,
    "end": 5158
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 5158,
    "end": 5159
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 5159,
    "end": 5160
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 5161,
    "end": 5163
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 5164,
    "end": 5168
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 5168,
    "end": 5169
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 5171,
    "end": 5178
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 5179,
    "end": 5182
  },
  {
    "type": "Identifier",
    "value": "ff2",
    "start": 5183,
    "end": 5186
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 5186,
    "end": 5187
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 5188,
    "end": 5189
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 5189,
    "end": 5190
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 5191,
    "end": 5193
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 5194,
    "end": 5198
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 5198,
    "end": 5199
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 5200,
    "end": 5207
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 5208,
    "end": 5211
  },
  {
    "type": "Identifier",
    "value": "ff3",
    "start": 5212,
    "end": 5215
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 5215,
    "end": 5216
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 5217,
    "end": 5218
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 5218,
    "end": 5221
  },
  {
    "type": "Identifier",
    "value": "args",
    "start": 5221,
    "end": 5225
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 5225,
    "end": 5226
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 5227,
    "end": 5228
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 5228,
    "end": 5229
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 5229,
    "end": 5230
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 5231,
    "end": 5233
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 5234,
    "end": 5238
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 5238,
    "end": 5239
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 5240,
    "end": 5247
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 5248,
    "end": 5251
  },
  {
    "type": "Identifier",
    "value": "ff4",
    "start": 5252,
    "end": 5255
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 5255,
    "end": 5256
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 5257,
    "end": 5258
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 5258,
    "end": 5259
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 5259,
    "end": 5260
  },
  {
    "type": "Identifier",
    "value": "never",
    "start": 5261,
    "end": 5266
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 5266,
    "end": 5267
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 5268,
    "end": 5270
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 5271,
    "end": 5275
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 5275,
    "end": 5276
  },
  {
    "type": "Identifier",
    "value": "ff1",
    "start": 5278,
    "end": 5281
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 5282,
    "end": 5283
  },
  {
    "type": "Identifier",
    "value": "ff2",
    "start": 5284,
    "end": 5287
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 5287,
    "end": 5288
  },
  {
    "type": "Identifier",
    "value": "ff1",
    "start": 5289,
    "end": 5292
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 5293,
    "end": 5294
  },
  {
    "type": "Identifier",
    "value": "ff3",
    "start": 5295,
    "end": 5298
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 5298,
    "end": 5299
  },
  {
    "type": "Identifier",
    "value": "ff1",
    "start": 5300,
    "end": 5303
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 5304,
    "end": 5305
  },
  {
    "type": "Identifier",
    "value": "ff4",
    "start": 5306,
    "end": 5309
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 5309,
    "end": 5310
  }
]
```
