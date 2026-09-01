__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ForInStatement",
      "left": {
        "type": "VariableDeclaration",
        "kind": "let",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 20,
              "end": 21
            },
            "init": null,
            "definite": false,
            "start": 20,
            "end": 21
          }
        ],
        "declare": false,
        "start": 16,
        "end": 21
      },
      "right": {
        "type": "ObjectExpression",
        "properties": [],
        "start": 25,
        "end": 27
      },
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ExpressionStatement",
            "expression": {
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
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 56,
                      "end": 57
                    },
                    "start": 49,
                    "end": 57
                  }
                ],
                "start": 47,
                "end": 58
              },
              "expression": false,
              "start": 36,
              "end": 58
            },
            "directive": null,
            "start": 35,
            "end": 60
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "ArrowFunctionExpression",
              "expression": true,
              "async": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 72,
                "end": 73
              },
              "id": null,
              "generator": false,
              "start": 66,
              "end": 73
            },
            "directive": null,
            "start": 65,
            "end": 75
          }
        ],
        "start": 29,
        "end": 77
      },
      "start": 11,
      "end": 77
    },
    {
      "type": "ForOfStatement",
      "await": false,
      "left": {
        "type": "VariableDeclaration",
        "kind": "let",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 88,
              "end": 89
            },
            "init": null,
            "definite": false,
            "start": 88,
            "end": 89
          }
        ],
        "declare": false,
        "start": 84,
        "end": 89
      },
      "right": {
        "type": "ArrayExpression",
        "elements": [],
        "start": 93,
        "end": 95
      },
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ExpressionStatement",
            "expression": {
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
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 124,
                      "end": 125
                    },
                    "start": 117,
                    "end": 125
                  }
                ],
                "start": 115,
                "end": 126
              },
              "expression": false,
              "start": 104,
              "end": 126
            },
            "directive": null,
            "start": 103,
            "end": 128
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "ArrowFunctionExpression",
              "expression": true,
              "async": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 140,
                "end": 141
              },
              "id": null,
              "generator": false,
              "start": 134,
              "end": 141
            },
            "directive": null,
            "start": 133,
            "end": 143
          }
        ],
        "start": 97,
        "end": 145
      },
      "start": 79,
      "end": 145
    },
    {
      "type": "ForStatement",
      "init": {
        "type": "VariableDeclaration",
        "kind": "let",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 156,
              "end": 157
            },
            "init": {
              "type": "Literal",
              "value": 0,
              "raw": "0",
              "start": 160,
              "end": 161
            },
            "definite": false,
            "start": 156,
            "end": 161
          }
        ],
        "declare": false,
        "start": 152,
        "end": 161
      },
      "test": {
        "type": "BinaryExpression",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": null,
          "start": 163,
          "end": 164
        },
        "operator": "<",
        "right": {
          "type": "Literal",
          "value": 1,
          "raw": "1",
          "start": 167,
          "end": 168
        },
        "start": 163,
        "end": 168
      },
      "update": {
        "type": "UpdateExpression",
        "operator": "++",
        "prefix": true,
        "argument": {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": null,
          "start": 172,
          "end": 173
        },
        "start": 170,
        "end": 173
      },
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ExpressionStatement",
            "expression": {
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
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 202,
                      "end": 203
                    },
                    "start": 195,
                    "end": 203
                  }
                ],
                "start": 193,
                "end": 204
              },
              "expression": false,
              "start": 182,
              "end": 204
            },
            "directive": null,
            "start": 181,
            "end": 206
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "ArrowFunctionExpression",
              "expression": true,
              "async": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 218,
                "end": 219
              },
              "id": null,
              "generator": false,
              "start": 212,
              "end": 219
            },
            "directive": null,
            "start": 211,
            "end": 221
          }
        ],
        "start": 175,
        "end": 223
      },
      "start": 147,
      "end": 223
    },
    {
      "type": "WhileStatement",
      "test": {
        "type": "BinaryExpression",
        "left": {
          "type": "Literal",
          "value": 1,
          "raw": "1",
          "start": 232,
          "end": 233
        },
        "operator": "===",
        "right": {
          "type": "Literal",
          "value": 1,
          "raw": "1",
          "start": 238,
          "end": 239
        },
        "start": 232,
        "end": 239
      },
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
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 251,
                  "end": 252
                },
                "init": null,
                "definite": false,
                "start": 251,
                "end": 252
              }
            ],
            "declare": false,
            "start": 247,
            "end": 253
          },
          {
            "type": "ExpressionStatement",
            "expression": {
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
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 279,
                      "end": 280
                    },
                    "start": 272,
                    "end": 280
                  }
                ],
                "start": 270,
                "end": 281
              },
              "expression": false,
              "start": 259,
              "end": 281
            },
            "directive": null,
            "start": 258,
            "end": 283
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "ArrowFunctionExpression",
              "expression": true,
              "async": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 295,
                "end": 296
              },
              "id": null,
              "generator": false,
              "start": 289,
              "end": 296
            },
            "directive": null,
            "start": 288,
            "end": 298
          }
        ],
        "start": 241,
        "end": 300
      },
      "start": 225,
      "end": 300
    },
    {
      "type": "DoWhileStatement",
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
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 315,
                  "end": 316
                },
                "init": null,
                "definite": false,
                "start": 315,
                "end": 316
              }
            ],
            "declare": false,
            "start": 311,
            "end": 317
          },
          {
            "type": "ExpressionStatement",
            "expression": {
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
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 343,
                      "end": 344
                    },
                    "start": 336,
                    "end": 344
                  }
                ],
                "start": 334,
                "end": 345
              },
              "expression": false,
              "start": 323,
              "end": 345
            },
            "directive": null,
            "start": 322,
            "end": 347
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "ArrowFunctionExpression",
              "expression": true,
              "async": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 359,
                "end": 360
              },
              "id": null,
              "generator": false,
              "start": 353,
              "end": 360
            },
            "directive": null,
            "start": 352,
            "end": 362
          }
        ],
        "start": 305,
        "end": 364
      },
      "test": {
        "type": "BinaryExpression",
        "left": {
          "type": "Literal",
          "value": 1,
          "raw": "1",
          "start": 372,
          "end": 373
        },
        "operator": "===",
        "right": {
          "type": "Literal",
          "value": 1,
          "raw": "1",
          "start": 378,
          "end": 379
        },
        "start": 372,
        "end": 379
      },
      "start": 302,
      "end": 380
    },
    {
      "type": "ForStatement",
      "init": {
        "type": "VariableDeclaration",
        "kind": "let",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "y",
              "optional": false,
              "typeAnnotation": null,
              "start": 391,
              "end": 392
            },
            "init": {
              "type": "Literal",
              "value": 0,
              "raw": "0",
              "start": 395,
              "end": 396
            },
            "definite": false,
            "start": 391,
            "end": 396
          }
        ],
        "declare": false,
        "start": 387,
        "end": 396
      },
      "test": {
        "type": "BinaryExpression",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "y",
          "optional": false,
          "typeAnnotation": null,
          "start": 398,
          "end": 399
        },
        "operator": "<",
        "right": {
          "type": "Literal",
          "value": 1,
          "raw": "1",
          "start": 402,
          "end": 403
        },
        "start": 398,
        "end": 403
      },
      "update": {
        "type": "UpdateExpression",
        "operator": "++",
        "prefix": true,
        "argument": {
          "type": "Identifier",
          "decorators": [],
          "name": "y",
          "optional": false,
          "typeAnnotation": null,
          "start": 407,
          "end": 408
        },
        "start": 405,
        "end": 408
      },
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
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 420,
                  "end": 421
                },
                "init": {
                  "type": "Literal",
                  "value": 1,
                  "raw": "1",
                  "start": 424,
                  "end": 425
                },
                "definite": false,
                "start": 420,
                "end": 425
              }
            ],
            "declare": false,
            "start": 416,
            "end": 426
          },
          {
            "type": "ExpressionStatement",
            "expression": {
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
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 452,
                      "end": 453
                    },
                    "start": 445,
                    "end": 453
                  }
                ],
                "start": 443,
                "end": 454
              },
              "expression": false,
              "start": 432,
              "end": 454
            },
            "directive": null,
            "start": 431,
            "end": 456
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "ArrowFunctionExpression",
              "expression": true,
              "async": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 468,
                "end": 469
              },
              "id": null,
              "generator": false,
              "start": 462,
              "end": 469
            },
            "directive": null,
            "start": 461,
            "end": 471
          }
        ],
        "start": 410,
        "end": 473
      },
      "start": 382,
      "end": 473
    },
    {
      "type": "ForStatement",
      "init": {
        "type": "VariableDeclaration",
        "kind": "let",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 484,
              "end": 485
            },
            "init": {
              "type": "Literal",
              "value": 0,
              "raw": "0",
              "start": 488,
              "end": 489
            },
            "definite": false,
            "start": 484,
            "end": 489
          },
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "y",
              "optional": false,
              "typeAnnotation": null,
              "start": 491,
              "end": 492
            },
            "init": {
              "type": "Literal",
              "value": 1,
              "raw": "1",
              "start": 495,
              "end": 496
            },
            "definite": false,
            "start": 491,
            "end": 496
          }
        ],
        "declare": false,
        "start": 480,
        "end": 496
      },
      "test": {
        "type": "BinaryExpression",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": null,
          "start": 498,
          "end": 499
        },
        "operator": "<",
        "right": {
          "type": "Literal",
          "value": 1,
          "raw": "1",
          "start": 502,
          "end": 503
        },
        "start": 498,
        "end": 503
      },
      "update": {
        "type": "UpdateExpression",
        "operator": "++",
        "prefix": true,
        "argument": {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": null,
          "start": 507,
          "end": 508
        },
        "start": 505,
        "end": 508
      },
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ExpressionStatement",
            "expression": {
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
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "BinaryExpression",
                      "left": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 537,
                        "end": 538
                      },
                      "operator": "+",
                      "right": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "y",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 541,
                        "end": 542
                      },
                      "start": 537,
                      "end": 542
                    },
                    "start": 530,
                    "end": 542
                  }
                ],
                "start": 528,
                "end": 543
              },
              "expression": false,
              "start": 517,
              "end": 543
            },
            "directive": null,
            "start": 516,
            "end": 545
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "ArrowFunctionExpression",
              "expression": true,
              "async": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "BinaryExpression",
                "left": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 557,
                  "end": 558
                },
                "operator": "+",
                "right": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "y",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 561,
                  "end": 562
                },
                "start": 557,
                "end": 562
              },
              "id": null,
              "generator": false,
              "start": 551,
              "end": 562
            },
            "directive": null,
            "start": 550,
            "end": 564
          }
        ],
        "start": 510,
        "end": 566
      },
      "start": 475,
      "end": 566
    },
    {
      "type": "WhileStatement",
      "test": {
        "type": "BinaryExpression",
        "left": {
          "type": "Literal",
          "value": 1,
          "raw": "1",
          "start": 575,
          "end": 576
        },
        "operator": "===",
        "right": {
          "type": "Literal",
          "value": 1,
          "raw": "1",
          "start": 581,
          "end": 582
        },
        "start": 575,
        "end": 582
      },
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
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 594,
                  "end": 595
                },
                "init": null,
                "definite": false,
                "start": 594,
                "end": 595
              },
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "y",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 597,
                  "end": 598
                },
                "init": null,
                "definite": false,
                "start": 597,
                "end": 598
              }
            ],
            "declare": false,
            "start": 590,
            "end": 599
          },
          {
            "type": "ExpressionStatement",
            "expression": {
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
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "BinaryExpression",
                      "left": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 625,
                        "end": 626
                      },
                      "operator": "+",
                      "right": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "y",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 629,
                        "end": 630
                      },
                      "start": 625,
                      "end": 630
                    },
                    "start": 618,
                    "end": 630
                  }
                ],
                "start": 616,
                "end": 631
              },
              "expression": false,
              "start": 605,
              "end": 631
            },
            "directive": null,
            "start": 604,
            "end": 633
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "ArrowFunctionExpression",
              "expression": true,
              "async": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "BinaryExpression",
                "left": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 645,
                  "end": 646
                },
                "operator": "+",
                "right": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "y",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 649,
                  "end": 650
                },
                "start": 645,
                "end": 650
              },
              "id": null,
              "generator": false,
              "start": 639,
              "end": 650
            },
            "directive": null,
            "start": 638,
            "end": 652
          }
        ],
        "start": 584,
        "end": 654
      },
      "start": 568,
      "end": 654
    },
    {
      "type": "DoWhileStatement",
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
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 669,
                  "end": 670
                },
                "init": null,
                "definite": false,
                "start": 669,
                "end": 670
              },
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "y",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 672,
                  "end": 673
                },
                "init": null,
                "definite": false,
                "start": 672,
                "end": 673
              }
            ],
            "declare": false,
            "start": 665,
            "end": 674
          },
          {
            "type": "ExpressionStatement",
            "expression": {
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
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "BinaryExpression",
                      "left": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 700,
                        "end": 701
                      },
                      "operator": "+",
                      "right": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "y",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 704,
                        "end": 705
                      },
                      "start": 700,
                      "end": 705
                    },
                    "start": 693,
                    "end": 705
                  }
                ],
                "start": 691,
                "end": 706
              },
              "expression": false,
              "start": 680,
              "end": 706
            },
            "directive": null,
            "start": 679,
            "end": 708
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "ArrowFunctionExpression",
              "expression": true,
              "async": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "BinaryExpression",
                "left": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 720,
                  "end": 721
                },
                "operator": "+",
                "right": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "y",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 724,
                  "end": 725
                },
                "start": 720,
                "end": 725
              },
              "id": null,
              "generator": false,
              "start": 714,
              "end": 725
            },
            "directive": null,
            "start": 713,
            "end": 727
          }
        ],
        "start": 659,
        "end": 729
      },
      "test": {
        "type": "BinaryExpression",
        "left": {
          "type": "Literal",
          "value": 1,
          "raw": "1",
          "start": 737,
          "end": 738
        },
        "operator": "===",
        "right": {
          "type": "Literal",
          "value": 1,
          "raw": "1",
          "start": 743,
          "end": 744
        },
        "start": 737,
        "end": 744
      },
      "start": 656,
      "end": 745
    },
    {
      "type": "ForStatement",
      "init": {
        "type": "VariableDeclaration",
        "kind": "let",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "y",
              "optional": false,
              "typeAnnotation": null,
              "start": 756,
              "end": 757
            },
            "init": {
              "type": "Literal",
              "value": 0,
              "raw": "0",
              "start": 760,
              "end": 761
            },
            "definite": false,
            "start": 756,
            "end": 761
          }
        ],
        "declare": false,
        "start": 752,
        "end": 761
      },
      "test": {
        "type": "BinaryExpression",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "y",
          "optional": false,
          "typeAnnotation": null,
          "start": 763,
          "end": 764
        },
        "operator": "<",
        "right": {
          "type": "Literal",
          "value": 1,
          "raw": "1",
          "start": 767,
          "end": 768
        },
        "start": 763,
        "end": 768
      },
      "update": {
        "type": "UpdateExpression",
        "operator": "++",
        "prefix": true,
        "argument": {
          "type": "Identifier",
          "decorators": [],
          "name": "y",
          "optional": false,
          "typeAnnotation": null,
          "start": 772,
          "end": 773
        },
        "start": 770,
        "end": 773
      },
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
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 785,
                  "end": 786
                },
                "init": {
                  "type": "Literal",
                  "value": 1,
                  "raw": "1",
                  "start": 789,
                  "end": 790
                },
                "definite": false,
                "start": 785,
                "end": 790
              }
            ],
            "declare": false,
            "start": 781,
            "end": 791
          },
          {
            "type": "ExpressionStatement",
            "expression": {
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
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "BinaryExpression",
                      "left": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 817,
                        "end": 818
                      },
                      "operator": "+",
                      "right": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "y",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 821,
                        "end": 822
                      },
                      "start": 817,
                      "end": 822
                    },
                    "start": 810,
                    "end": 822
                  }
                ],
                "start": 808,
                "end": 823
              },
              "expression": false,
              "start": 797,
              "end": 823
            },
            "directive": null,
            "start": 796,
            "end": 825
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "ArrowFunctionExpression",
              "expression": true,
              "async": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "BinaryExpression",
                "left": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 837,
                  "end": 838
                },
                "operator": "+",
                "right": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "y",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 841,
                  "end": 842
                },
                "start": 837,
                "end": 842
              },
              "id": null,
              "generator": false,
              "start": 831,
              "end": 842
            },
            "directive": null,
            "start": 830,
            "end": 844
          }
        ],
        "start": 775,
        "end": 846
      },
      "start": 747,
      "end": 846
    },
    {
      "type": "ForInStatement",
      "left": {
        "type": "VariableDeclaration",
        "kind": "const",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 876,
              "end": 877
            },
            "init": null,
            "definite": false,
            "start": 876,
            "end": 877
          }
        ],
        "declare": false,
        "start": 870,
        "end": 877
      },
      "right": {
        "type": "ObjectExpression",
        "properties": [],
        "start": 881,
        "end": 883
      },
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ExpressionStatement",
            "expression": {
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
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 912,
                      "end": 913
                    },
                    "start": 905,
                    "end": 913
                  }
                ],
                "start": 903,
                "end": 914
              },
              "expression": false,
              "start": 892,
              "end": 914
            },
            "directive": null,
            "start": 891,
            "end": 916
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "ArrowFunctionExpression",
              "expression": true,
              "async": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 928,
                "end": 929
              },
              "id": null,
              "generator": false,
              "start": 922,
              "end": 929
            },
            "directive": null,
            "start": 921,
            "end": 931
          }
        ],
        "start": 885,
        "end": 933
      },
      "start": 865,
      "end": 933
    },
    {
      "type": "ForOfStatement",
      "await": false,
      "left": {
        "type": "VariableDeclaration",
        "kind": "const",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 946,
              "end": 947
            },
            "init": null,
            "definite": false,
            "start": 946,
            "end": 947
          }
        ],
        "declare": false,
        "start": 940,
        "end": 947
      },
      "right": {
        "type": "ArrayExpression",
        "elements": [],
        "start": 951,
        "end": 953
      },
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ExpressionStatement",
            "expression": {
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
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 982,
                      "end": 983
                    },
                    "start": 975,
                    "end": 983
                  }
                ],
                "start": 973,
                "end": 984
              },
              "expression": false,
              "start": 962,
              "end": 984
            },
            "directive": null,
            "start": 961,
            "end": 986
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "ArrowFunctionExpression",
              "expression": true,
              "async": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 998,
                "end": 999
              },
              "id": null,
              "generator": false,
              "start": 992,
              "end": 999
            },
            "directive": null,
            "start": 991,
            "end": 1001
          }
        ],
        "start": 955,
        "end": 1003
      },
      "start": 935,
      "end": 1003
    },
    {
      "type": "ForStatement",
      "init": {
        "type": "VariableDeclaration",
        "kind": "const",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 1016,
              "end": 1017
            },
            "init": {
              "type": "Literal",
              "value": 0,
              "raw": "0",
              "start": 1020,
              "end": 1021
            },
            "definite": false,
            "start": 1016,
            "end": 1021
          }
        ],
        "declare": false,
        "start": 1010,
        "end": 1021
      },
      "test": {
        "type": "BinaryExpression",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": null,
          "start": 1023,
          "end": 1024
        },
        "operator": "<",
        "right": {
          "type": "Literal",
          "value": 1,
          "raw": "1",
          "start": 1027,
          "end": 1028
        },
        "start": 1023,
        "end": 1028
      },
      "update": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ExpressionStatement",
            "expression": {
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
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1058,
                      "end": 1059
                    },
                    "start": 1051,
                    "end": 1059
                  }
                ],
                "start": 1049,
                "end": 1060
              },
              "expression": false,
              "start": 1038,
              "end": 1060
            },
            "directive": null,
            "start": 1037,
            "end": 1062
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "ArrowFunctionExpression",
              "expression": true,
              "async": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 1074,
                "end": 1075
              },
              "id": null,
              "generator": false,
              "start": 1068,
              "end": 1075
            },
            "directive": null,
            "start": 1067,
            "end": 1077
          }
        ],
        "start": 1031,
        "end": 1079
      },
      "start": 1005,
      "end": 1079
    },
    {
      "type": "WhileStatement",
      "test": {
        "type": "BinaryExpression",
        "left": {
          "type": "Literal",
          "value": 1,
          "raw": "1",
          "start": 1088,
          "end": 1089
        },
        "operator": "===",
        "right": {
          "type": "Literal",
          "value": 1,
          "raw": "1",
          "start": 1094,
          "end": 1095
        },
        "start": 1088,
        "end": 1095
      },
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "VariableDeclaration",
            "kind": "const",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1109,
                  "end": 1110
                },
                "init": {
                  "type": "Literal",
                  "value": 1,
                  "raw": "1",
                  "start": 1113,
                  "end": 1114
                },
                "definite": false,
                "start": 1109,
                "end": 1114
              }
            ],
            "declare": false,
            "start": 1103,
            "end": 1115
          },
          {
            "type": "ExpressionStatement",
            "expression": {
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
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1141,
                      "end": 1142
                    },
                    "start": 1134,
                    "end": 1142
                  }
                ],
                "start": 1132,
                "end": 1143
              },
              "expression": false,
              "start": 1121,
              "end": 1143
            },
            "directive": null,
            "start": 1120,
            "end": 1145
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "ArrowFunctionExpression",
              "expression": true,
              "async": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 1157,
                "end": 1158
              },
              "id": null,
              "generator": false,
              "start": 1151,
              "end": 1158
            },
            "directive": null,
            "start": 1150,
            "end": 1160
          }
        ],
        "start": 1097,
        "end": 1162
      },
      "start": 1081,
      "end": 1162
    },
    {
      "type": "DoWhileStatement",
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "VariableDeclaration",
            "kind": "const",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1179,
                  "end": 1180
                },
                "init": {
                  "type": "Literal",
                  "value": 1,
                  "raw": "1",
                  "start": 1183,
                  "end": 1184
                },
                "definite": false,
                "start": 1179,
                "end": 1184
              }
            ],
            "declare": false,
            "start": 1173,
            "end": 1185
          },
          {
            "type": "ExpressionStatement",
            "expression": {
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
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1211,
                      "end": 1212
                    },
                    "start": 1204,
                    "end": 1212
                  }
                ],
                "start": 1202,
                "end": 1213
              },
              "expression": false,
              "start": 1191,
              "end": 1213
            },
            "directive": null,
            "start": 1190,
            "end": 1215
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "ArrowFunctionExpression",
              "expression": true,
              "async": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 1227,
                "end": 1228
              },
              "id": null,
              "generator": false,
              "start": 1221,
              "end": 1228
            },
            "directive": null,
            "start": 1220,
            "end": 1230
          }
        ],
        "start": 1167,
        "end": 1232
      },
      "test": {
        "type": "BinaryExpression",
        "left": {
          "type": "Literal",
          "value": 1,
          "raw": "1",
          "start": 1240,
          "end": 1241
        },
        "operator": "===",
        "right": {
          "type": "Literal",
          "value": 1,
          "raw": "1",
          "start": 1246,
          "end": 1247
        },
        "start": 1240,
        "end": 1247
      },
      "start": 1164,
      "end": 1248
    },
    {
      "type": "ForStatement",
      "init": {
        "type": "VariableDeclaration",
        "kind": "const",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "y",
              "optional": false,
              "typeAnnotation": null,
              "start": 1261,
              "end": 1262
            },
            "init": {
              "type": "Literal",
              "value": 0,
              "raw": "0",
              "start": 1265,
              "end": 1266
            },
            "definite": false,
            "start": 1261,
            "end": 1266
          }
        ],
        "declare": false,
        "start": 1255,
        "end": 1266
      },
      "test": {
        "type": "BinaryExpression",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "y",
          "optional": false,
          "typeAnnotation": null,
          "start": 1268,
          "end": 1269
        },
        "operator": "<",
        "right": {
          "type": "Literal",
          "value": 1,
          "raw": "1",
          "start": 1272,
          "end": 1273
        },
        "start": 1268,
        "end": 1273
      },
      "update": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "VariableDeclaration",
            "kind": "const",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1288,
                  "end": 1289
                },
                "init": {
                  "type": "Literal",
                  "value": 1,
                  "raw": "1",
                  "start": 1292,
                  "end": 1293
                },
                "definite": false,
                "start": 1288,
                "end": 1293
              }
            ],
            "declare": false,
            "start": 1282,
            "end": 1294
          },
          {
            "type": "ExpressionStatement",
            "expression": {
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
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1320,
                      "end": 1321
                    },
                    "start": 1313,
                    "end": 1321
                  }
                ],
                "start": 1311,
                "end": 1322
              },
              "expression": false,
              "start": 1300,
              "end": 1322
            },
            "directive": null,
            "start": 1299,
            "end": 1324
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "ArrowFunctionExpression",
              "expression": true,
              "async": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 1336,
                "end": 1337
              },
              "id": null,
              "generator": false,
              "start": 1330,
              "end": 1337
            },
            "directive": null,
            "start": 1329,
            "end": 1339
          }
        ],
        "start": 1276,
        "end": 1341
      },
      "start": 1250,
      "end": 1341
    },
    {
      "type": "ForStatement",
      "init": {
        "type": "VariableDeclaration",
        "kind": "const",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 1354,
              "end": 1355
            },
            "init": {
              "type": "Literal",
              "value": 0,
              "raw": "0",
              "start": 1358,
              "end": 1359
            },
            "definite": false,
            "start": 1354,
            "end": 1359
          },
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "y",
              "optional": false,
              "typeAnnotation": null,
              "start": 1361,
              "end": 1362
            },
            "init": {
              "type": "Literal",
              "value": 1,
              "raw": "1",
              "start": 1365,
              "end": 1366
            },
            "definite": false,
            "start": 1361,
            "end": 1366
          }
        ],
        "declare": false,
        "start": 1348,
        "end": 1366
      },
      "test": {
        "type": "BinaryExpression",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": null,
          "start": 1368,
          "end": 1369
        },
        "operator": "<",
        "right": {
          "type": "Literal",
          "value": 1,
          "raw": "1",
          "start": 1372,
          "end": 1373
        },
        "start": 1368,
        "end": 1373
      },
      "update": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ExpressionStatement",
            "expression": {
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
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "BinaryExpression",
                      "left": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1403,
                        "end": 1404
                      },
                      "operator": "+",
                      "right": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "y",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1407,
                        "end": 1408
                      },
                      "start": 1403,
                      "end": 1408
                    },
                    "start": 1396,
                    "end": 1408
                  }
                ],
                "start": 1394,
                "end": 1409
              },
              "expression": false,
              "start": 1383,
              "end": 1409
            },
            "directive": null,
            "start": 1382,
            "end": 1411
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "ArrowFunctionExpression",
              "expression": true,
              "async": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "BinaryExpression",
                "left": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1423,
                  "end": 1424
                },
                "operator": "+",
                "right": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "y",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1427,
                  "end": 1428
                },
                "start": 1423,
                "end": 1428
              },
              "id": null,
              "generator": false,
              "start": 1417,
              "end": 1428
            },
            "directive": null,
            "start": 1416,
            "end": 1430
          }
        ],
        "start": 1376,
        "end": 1432
      },
      "start": 1343,
      "end": 1432
    },
    {
      "type": "WhileStatement",
      "test": {
        "type": "BinaryExpression",
        "left": {
          "type": "Literal",
          "value": 1,
          "raw": "1",
          "start": 1441,
          "end": 1442
        },
        "operator": "===",
        "right": {
          "type": "Literal",
          "value": 1,
          "raw": "1",
          "start": 1447,
          "end": 1448
        },
        "start": 1441,
        "end": 1448
      },
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "VariableDeclaration",
            "kind": "const",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1462,
                  "end": 1463
                },
                "init": {
                  "type": "Literal",
                  "value": 1,
                  "raw": "1",
                  "start": 1466,
                  "end": 1467
                },
                "definite": false,
                "start": 1462,
                "end": 1467
              },
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "y",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1469,
                  "end": 1470
                },
                "init": {
                  "type": "Literal",
                  "value": 1,
                  "raw": "1",
                  "start": 1473,
                  "end": 1474
                },
                "definite": false,
                "start": 1469,
                "end": 1474
              }
            ],
            "declare": false,
            "start": 1456,
            "end": 1475
          },
          {
            "type": "ExpressionStatement",
            "expression": {
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
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "BinaryExpression",
                      "left": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1501,
                        "end": 1502
                      },
                      "operator": "+",
                      "right": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "y",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1505,
                        "end": 1506
                      },
                      "start": 1501,
                      "end": 1506
                    },
                    "start": 1494,
                    "end": 1506
                  }
                ],
                "start": 1492,
                "end": 1507
              },
              "expression": false,
              "start": 1481,
              "end": 1507
            },
            "directive": null,
            "start": 1480,
            "end": 1509
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "ArrowFunctionExpression",
              "expression": true,
              "async": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "BinaryExpression",
                "left": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1521,
                  "end": 1522
                },
                "operator": "+",
                "right": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "y",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1525,
                  "end": 1526
                },
                "start": 1521,
                "end": 1526
              },
              "id": null,
              "generator": false,
              "start": 1515,
              "end": 1526
            },
            "directive": null,
            "start": 1514,
            "end": 1528
          }
        ],
        "start": 1450,
        "end": 1530
      },
      "start": 1434,
      "end": 1530
    },
    {
      "type": "DoWhileStatement",
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "VariableDeclaration",
            "kind": "const",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1547,
                  "end": 1548
                },
                "init": {
                  "type": "Literal",
                  "value": 1,
                  "raw": "1",
                  "start": 1551,
                  "end": 1552
                },
                "definite": false,
                "start": 1547,
                "end": 1552
              },
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "y",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1554,
                  "end": 1555
                },
                "init": {
                  "type": "Literal",
                  "value": 1,
                  "raw": "1",
                  "start": 1558,
                  "end": 1559
                },
                "definite": false,
                "start": 1554,
                "end": 1559
              }
            ],
            "declare": false,
            "start": 1541,
            "end": 1560
          },
          {
            "type": "ExpressionStatement",
            "expression": {
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
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "BinaryExpression",
                      "left": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1586,
                        "end": 1587
                      },
                      "operator": "+",
                      "right": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "y",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1590,
                        "end": 1591
                      },
                      "start": 1586,
                      "end": 1591
                    },
                    "start": 1579,
                    "end": 1591
                  }
                ],
                "start": 1577,
                "end": 1592
              },
              "expression": false,
              "start": 1566,
              "end": 1592
            },
            "directive": null,
            "start": 1565,
            "end": 1594
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "ArrowFunctionExpression",
              "expression": true,
              "async": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "BinaryExpression",
                "left": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1606,
                  "end": 1607
                },
                "operator": "+",
                "right": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "y",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1610,
                  "end": 1611
                },
                "start": 1606,
                "end": 1611
              },
              "id": null,
              "generator": false,
              "start": 1600,
              "end": 1611
            },
            "directive": null,
            "start": 1599,
            "end": 1613
          }
        ],
        "start": 1535,
        "end": 1615
      },
      "test": {
        "type": "BinaryExpression",
        "left": {
          "type": "Literal",
          "value": 1,
          "raw": "1",
          "start": 1623,
          "end": 1624
        },
        "operator": "===",
        "right": {
          "type": "Literal",
          "value": 1,
          "raw": "1",
          "start": 1629,
          "end": 1630
        },
        "start": 1623,
        "end": 1630
      },
      "start": 1532,
      "end": 1631
    },
    {
      "type": "ForStatement",
      "init": {
        "type": "VariableDeclaration",
        "kind": "const",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "y",
              "optional": false,
              "typeAnnotation": null,
              "start": 1644,
              "end": 1645
            },
            "init": {
              "type": "Literal",
              "value": 0,
              "raw": "0",
              "start": 1648,
              "end": 1649
            },
            "definite": false,
            "start": 1644,
            "end": 1649
          }
        ],
        "declare": false,
        "start": 1638,
        "end": 1649
      },
      "test": {
        "type": "BinaryExpression",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "y",
          "optional": false,
          "typeAnnotation": null,
          "start": 1651,
          "end": 1652
        },
        "operator": "<",
        "right": {
          "type": "Literal",
          "value": 1,
          "raw": "1",
          "start": 1655,
          "end": 1656
        },
        "start": 1651,
        "end": 1656
      },
      "update": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "VariableDeclaration",
            "kind": "const",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1671,
                  "end": 1672
                },
                "init": {
                  "type": "Literal",
                  "value": 1,
                  "raw": "1",
                  "start": 1675,
                  "end": 1676
                },
                "definite": false,
                "start": 1671,
                "end": 1676
              }
            ],
            "declare": false,
            "start": 1665,
            "end": 1677
          },
          {
            "type": "ExpressionStatement",
            "expression": {
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
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "BinaryExpression",
                      "left": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1703,
                        "end": 1704
                      },
                      "operator": "+",
                      "right": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "y",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1707,
                        "end": 1708
                      },
                      "start": 1703,
                      "end": 1708
                    },
                    "start": 1696,
                    "end": 1708
                  }
                ],
                "start": 1694,
                "end": 1709
              },
              "expression": false,
              "start": 1683,
              "end": 1709
            },
            "directive": null,
            "start": 1682,
            "end": 1711
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "ArrowFunctionExpression",
              "expression": true,
              "async": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "BinaryExpression",
                "left": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1723,
                  "end": 1724
                },
                "operator": "+",
                "right": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "y",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1727,
                  "end": 1728
                },
                "start": 1723,
                "end": 1728
              },
              "id": null,
              "generator": false,
              "start": 1717,
              "end": 1728
            },
            "directive": null,
            "start": 1716,
            "end": 1730
          }
        ],
        "start": 1659,
        "end": 1732
      },
      "start": 1633,
      "end": 1732
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 11,
  "end": 1732
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "for",
    "start": 11,
    "end": 14
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 15,
    "end": 16
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 16,
    "end": 19
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 20,
    "end": 21
  },
  {
    "type": "Keyword",
    "value": "in",
    "start": 22,
    "end": 24
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 25,
    "end": 26
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 26,
    "end": 27
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 27,
    "end": 28
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 29,
    "end": 30
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 35,
    "end": 36
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 36,
    "end": 44
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 44,
    "end": 45
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 45,
    "end": 46
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 47,
    "end": 48
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 49,
    "end": 55
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 56,
    "end": 57
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 57,
    "end": 58
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 58,
    "end": 59
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 59,
    "end": 60
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 65,
    "end": 66
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 66,
    "end": 67
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 67,
    "end": 68
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 69,
    "end": 71
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 72,
    "end": 73
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 73,
    "end": 74
  },
  {
    "type": "Punctuator",
    "value": ";",
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
    "type": "Keyword",
    "value": "for",
    "start": 79,
    "end": 82
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 83,
    "end": 84
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 84,
    "end": 87
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 88,
    "end": 89
  },
  {
    "type": "Identifier",
    "value": "of",
    "start": 90,
    "end": 92
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 93,
    "end": 94
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 94,
    "end": 95
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 95,
    "end": 96
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 97,
    "end": 98
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 103,
    "end": 104
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 104,
    "end": 112
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 112,
    "end": 113
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 113,
    "end": 114
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 115,
    "end": 116
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 117,
    "end": 123
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 124,
    "end": 125
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 125,
    "end": 126
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 126,
    "end": 127
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 127,
    "end": 128
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 133,
    "end": 134
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 134,
    "end": 135
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 135,
    "end": 136
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 137,
    "end": 139
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 140,
    "end": 141
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 141,
    "end": 142
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 142,
    "end": 143
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 144,
    "end": 145
  },
  {
    "type": "Keyword",
    "value": "for",
    "start": 147,
    "end": 150
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 151,
    "end": 152
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 152,
    "end": 155
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 156,
    "end": 157
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 158,
    "end": 159
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 160,
    "end": 161
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 161,
    "end": 162
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 163,
    "end": 164
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 165,
    "end": 166
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 167,
    "end": 168
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 168,
    "end": 169
  },
  {
    "type": "Punctuator",
    "value": "++",
    "start": 170,
    "end": 172
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 172,
    "end": 173
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 173,
    "end": 174
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 175,
    "end": 176
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 181,
    "end": 182
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 182,
    "end": 190
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 190,
    "end": 191
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 191,
    "end": 192
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 193,
    "end": 194
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 195,
    "end": 201
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 202,
    "end": 203
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 203,
    "end": 204
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 204,
    "end": 205
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 205,
    "end": 206
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 211,
    "end": 212
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 212,
    "end": 213
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 213,
    "end": 214
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 215,
    "end": 217
  },
  {
    "type": "Identifier",
    "value": "x",
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
    "value": ";",
    "start": 220,
    "end": 221
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 222,
    "end": 223
  },
  {
    "type": "Keyword",
    "value": "while",
    "start": 225,
    "end": 230
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 231,
    "end": 232
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 232,
    "end": 233
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 234,
    "end": 237
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 238,
    "end": 239
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 239,
    "end": 240
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 241,
    "end": 242
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 247,
    "end": 250
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 251,
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
    "value": "(",
    "start": 258,
    "end": 259
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 259,
    "end": 267
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 267,
    "end": 268
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 268,
    "end": 269
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 270,
    "end": 271
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 272,
    "end": 278
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 279,
    "end": 280
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 280,
    "end": 281
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 281,
    "end": 282
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 282,
    "end": 283
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 288,
    "end": 289
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 289,
    "end": 290
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 290,
    "end": 291
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 292,
    "end": 294
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 295,
    "end": 296
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 296,
    "end": 297
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 297,
    "end": 298
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 299,
    "end": 300
  },
  {
    "type": "Keyword",
    "value": "do",
    "start": 302,
    "end": 304
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 305,
    "end": 306
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 311,
    "end": 314
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 315,
    "end": 316
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 316,
    "end": 317
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 322,
    "end": 323
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 323,
    "end": 331
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 331,
    "end": 332
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 332,
    "end": 333
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 334,
    "end": 335
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 336,
    "end": 342
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 343,
    "end": 344
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 344,
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
    "value": ";",
    "start": 346,
    "end": 347
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 352,
    "end": 353
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 353,
    "end": 354
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 354,
    "end": 355
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 356,
    "end": 358
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 359,
    "end": 360
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 360,
    "end": 361
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 361,
    "end": 362
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 363,
    "end": 364
  },
  {
    "type": "Keyword",
    "value": "while",
    "start": 365,
    "end": 370
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 371,
    "end": 372
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 372,
    "end": 373
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 374,
    "end": 377
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 378,
    "end": 379
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 379,
    "end": 380
  },
  {
    "type": "Keyword",
    "value": "for",
    "start": 382,
    "end": 385
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 386,
    "end": 387
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 387,
    "end": 390
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 391,
    "end": 392
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 393,
    "end": 394
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 395,
    "end": 396
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 396,
    "end": 397
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 398,
    "end": 399
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 400,
    "end": 401
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 402,
    "end": 403
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 403,
    "end": 404
  },
  {
    "type": "Punctuator",
    "value": "++",
    "start": 405,
    "end": 407
  },
  {
    "type": "Identifier",
    "value": "y",
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
    "value": "let",
    "start": 416,
    "end": 419
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 420,
    "end": 421
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 422,
    "end": 423
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 424,
    "end": 425
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 425,
    "end": 426
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 431,
    "end": 432
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 432,
    "end": 440
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 440,
    "end": 441
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 441,
    "end": 442
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 443,
    "end": 444
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 445,
    "end": 451
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 452,
    "end": 453
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 453,
    "end": 454
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 454,
    "end": 455
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 455,
    "end": 456
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 461,
    "end": 462
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 462,
    "end": 463
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 463,
    "end": 464
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 465,
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
    "value": ")",
    "start": 469,
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
    "value": "for",
    "start": 475,
    "end": 478
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 479,
    "end": 480
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 480,
    "end": 483
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 484,
    "end": 485
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 486,
    "end": 487
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 488,
    "end": 489
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 489,
    "end": 490
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 491,
    "end": 492
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 493,
    "end": 494
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 495,
    "end": 496
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 496,
    "end": 497
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 498,
    "end": 499
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 500,
    "end": 501
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 502,
    "end": 503
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 503,
    "end": 504
  },
  {
    "type": "Punctuator",
    "value": "++",
    "start": 505,
    "end": 507
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 507,
    "end": 508
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 508,
    "end": 509
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 510,
    "end": 511
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 516,
    "end": 517
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 517,
    "end": 525
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 525,
    "end": 526
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 526,
    "end": 527
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 528,
    "end": 529
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 530,
    "end": 536
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 537,
    "end": 538
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 539,
    "end": 540
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 541,
    "end": 542
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 542,
    "end": 543
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 543,
    "end": 544
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 544,
    "end": 545
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 550,
    "end": 551
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 551,
    "end": 552
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 552,
    "end": 553
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 554,
    "end": 556
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 557,
    "end": 558
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 559,
    "end": 560
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 561,
    "end": 562
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 562,
    "end": 563
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 563,
    "end": 564
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 565,
    "end": 566
  },
  {
    "type": "Keyword",
    "value": "while",
    "start": 568,
    "end": 573
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 574,
    "end": 575
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 575,
    "end": 576
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 577,
    "end": 580
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 581,
    "end": 582
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 582,
    "end": 583
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 584,
    "end": 585
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 590,
    "end": 593
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 594,
    "end": 595
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 595,
    "end": 596
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 597,
    "end": 598
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 598,
    "end": 599
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 604,
    "end": 605
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 605,
    "end": 613
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 613,
    "end": 614
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 614,
    "end": 615
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 616,
    "end": 617
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 618,
    "end": 624
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 625,
    "end": 626
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 627,
    "end": 628
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 629,
    "end": 630
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 630,
    "end": 631
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 631,
    "end": 632
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 632,
    "end": 633
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 638,
    "end": 639
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 639,
    "end": 640
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 640,
    "end": 641
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 642,
    "end": 644
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 645,
    "end": 646
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 647,
    "end": 648
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 649,
    "end": 650
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 650,
    "end": 651
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 651,
    "end": 652
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 653,
    "end": 654
  },
  {
    "type": "Keyword",
    "value": "do",
    "start": 656,
    "end": 658
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 659,
    "end": 660
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 665,
    "end": 668
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 669,
    "end": 670
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 670,
    "end": 671
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 672,
    "end": 673
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 673,
    "end": 674
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 679,
    "end": 680
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 680,
    "end": 688
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 688,
    "end": 689
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 689,
    "end": 690
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 691,
    "end": 692
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 693,
    "end": 699
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 700,
    "end": 701
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 702,
    "end": 703
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 704,
    "end": 705
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 705,
    "end": 706
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 706,
    "end": 707
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 707,
    "end": 708
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 713,
    "end": 714
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 714,
    "end": 715
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 715,
    "end": 716
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 717,
    "end": 719
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 720,
    "end": 721
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 722,
    "end": 723
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 724,
    "end": 725
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 725,
    "end": 726
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 726,
    "end": 727
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 728,
    "end": 729
  },
  {
    "type": "Keyword",
    "value": "while",
    "start": 730,
    "end": 735
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 736,
    "end": 737
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 737,
    "end": 738
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 739,
    "end": 742
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 743,
    "end": 744
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 744,
    "end": 745
  },
  {
    "type": "Keyword",
    "value": "for",
    "start": 747,
    "end": 750
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 751,
    "end": 752
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 752,
    "end": 755
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 756,
    "end": 757
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 758,
    "end": 759
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 760,
    "end": 761
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 761,
    "end": 762
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 763,
    "end": 764
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 765,
    "end": 766
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 767,
    "end": 768
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 768,
    "end": 769
  },
  {
    "type": "Punctuator",
    "value": "++",
    "start": 770,
    "end": 772
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 772,
    "end": 773
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 773,
    "end": 774
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 775,
    "end": 776
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 781,
    "end": 784
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 785,
    "end": 786
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 787,
    "end": 788
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 789,
    "end": 790
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 790,
    "end": 791
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 796,
    "end": 797
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 797,
    "end": 805
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 805,
    "end": 806
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 806,
    "end": 807
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 808,
    "end": 809
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 810,
    "end": 816
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 817,
    "end": 818
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 819,
    "end": 820
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 821,
    "end": 822
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 822,
    "end": 823
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 823,
    "end": 824
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 824,
    "end": 825
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 830,
    "end": 831
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 831,
    "end": 832
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 832,
    "end": 833
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 834,
    "end": 836
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 837,
    "end": 838
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 839,
    "end": 840
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 841,
    "end": 842
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 842,
    "end": 843
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 843,
    "end": 844
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 845,
    "end": 846
  },
  {
    "type": "Keyword",
    "value": "for",
    "start": 865,
    "end": 868
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 869,
    "end": 870
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 870,
    "end": 875
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 876,
    "end": 877
  },
  {
    "type": "Keyword",
    "value": "in",
    "start": 878,
    "end": 880
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 881,
    "end": 882
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 882,
    "end": 883
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 883,
    "end": 884
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 885,
    "end": 886
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 891,
    "end": 892
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 892,
    "end": 900
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 900,
    "end": 901
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 901,
    "end": 902
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 903,
    "end": 904
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 905,
    "end": 911
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 912,
    "end": 913
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 913,
    "end": 914
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 914,
    "end": 915
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 915,
    "end": 916
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 921,
    "end": 922
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 922,
    "end": 923
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 923,
    "end": 924
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 925,
    "end": 927
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 928,
    "end": 929
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 929,
    "end": 930
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 930,
    "end": 931
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 932,
    "end": 933
  },
  {
    "type": "Keyword",
    "value": "for",
    "start": 935,
    "end": 938
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 939,
    "end": 940
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 940,
    "end": 945
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 946,
    "end": 947
  },
  {
    "type": "Identifier",
    "value": "of",
    "start": 948,
    "end": 950
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 951,
    "end": 952
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 952,
    "end": 953
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 953,
    "end": 954
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 955,
    "end": 956
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 961,
    "end": 962
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 962,
    "end": 970
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 970,
    "end": 971
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 971,
    "end": 972
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 973,
    "end": 974
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 975,
    "end": 981
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 982,
    "end": 983
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 983,
    "end": 984
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 984,
    "end": 985
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 985,
    "end": 986
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 991,
    "end": 992
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 992,
    "end": 993
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 993,
    "end": 994
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 995,
    "end": 997
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 998,
    "end": 999
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 999,
    "end": 1000
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1000,
    "end": 1001
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1002,
    "end": 1003
  },
  {
    "type": "Keyword",
    "value": "for",
    "start": 1005,
    "end": 1008
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1009,
    "end": 1010
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 1010,
    "end": 1015
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1016,
    "end": 1017
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1018,
    "end": 1019
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 1020,
    "end": 1021
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1021,
    "end": 1022
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1023,
    "end": 1024
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1025,
    "end": 1026
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 1027,
    "end": 1028
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1028,
    "end": 1029
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1029,
    "end": 1030
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1031,
    "end": 1032
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1037,
    "end": 1038
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1038,
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
    "value": "{",
    "start": 1049,
    "end": 1050
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 1051,
    "end": 1057
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1058,
    "end": 1059
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1059,
    "end": 1060
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1060,
    "end": 1061
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1061,
    "end": 1062
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1067,
    "end": 1068
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1068,
    "end": 1069
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1069,
    "end": 1070
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1071,
    "end": 1073
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1074,
    "end": 1075
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1075,
    "end": 1076
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1076,
    "end": 1077
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1078,
    "end": 1079
  },
  {
    "type": "Keyword",
    "value": "while",
    "start": 1081,
    "end": 1086
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1087,
    "end": 1088
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 1088,
    "end": 1089
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 1090,
    "end": 1093
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 1094,
    "end": 1095
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1095,
    "end": 1096
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1097,
    "end": 1098
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 1103,
    "end": 1108
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1109,
    "end": 1110
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1111,
    "end": 1112
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 1113,
    "end": 1114
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1114,
    "end": 1115
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1120,
    "end": 1121
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1121,
    "end": 1129
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1129,
    "end": 1130
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1130,
    "end": 1131
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1132,
    "end": 1133
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 1134,
    "end": 1140
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1141,
    "end": 1142
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1142,
    "end": 1143
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1143,
    "end": 1144
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1144,
    "end": 1145
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1150,
    "end": 1151
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1151,
    "end": 1152
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1152,
    "end": 1153
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1154,
    "end": 1156
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1157,
    "end": 1158
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1158,
    "end": 1159
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1159,
    "end": 1160
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1161,
    "end": 1162
  },
  {
    "type": "Keyword",
    "value": "do",
    "start": 1164,
    "end": 1166
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1167,
    "end": 1168
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 1173,
    "end": 1178
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1179,
    "end": 1180
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1181,
    "end": 1182
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 1183,
    "end": 1184
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1184,
    "end": 1185
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1190,
    "end": 1191
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1191,
    "end": 1199
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1199,
    "end": 1200
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1200,
    "end": 1201
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1202,
    "end": 1203
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 1204,
    "end": 1210
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1211,
    "end": 1212
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1212,
    "end": 1213
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1213,
    "end": 1214
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1214,
    "end": 1215
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1220,
    "end": 1221
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1221,
    "end": 1222
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1222,
    "end": 1223
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1224,
    "end": 1226
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1227,
    "end": 1228
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1228,
    "end": 1229
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1229,
    "end": 1230
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1231,
    "end": 1232
  },
  {
    "type": "Keyword",
    "value": "while",
    "start": 1233,
    "end": 1238
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1239,
    "end": 1240
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 1240,
    "end": 1241
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 1242,
    "end": 1245
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 1246,
    "end": 1247
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1247,
    "end": 1248
  },
  {
    "type": "Keyword",
    "value": "for",
    "start": 1250,
    "end": 1253
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1254,
    "end": 1255
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 1255,
    "end": 1260
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 1261,
    "end": 1262
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1263,
    "end": 1264
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 1265,
    "end": 1266
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1266,
    "end": 1267
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 1268,
    "end": 1269
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1270,
    "end": 1271
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 1272,
    "end": 1273
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1273,
    "end": 1274
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1274,
    "end": 1275
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1276,
    "end": 1277
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 1282,
    "end": 1287
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1288,
    "end": 1289
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1290,
    "end": 1291
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 1292,
    "end": 1293
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1293,
    "end": 1294
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1299,
    "end": 1300
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1300,
    "end": 1308
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1308,
    "end": 1309
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1309,
    "end": 1310
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1311,
    "end": 1312
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 1313,
    "end": 1319
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1320,
    "end": 1321
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1321,
    "end": 1322
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1322,
    "end": 1323
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1323,
    "end": 1324
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1329,
    "end": 1330
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1330,
    "end": 1331
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1331,
    "end": 1332
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1333,
    "end": 1335
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1336,
    "end": 1337
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1337,
    "end": 1338
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1338,
    "end": 1339
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1340,
    "end": 1341
  },
  {
    "type": "Keyword",
    "value": "for",
    "start": 1343,
    "end": 1346
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1347,
    "end": 1348
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 1348,
    "end": 1353
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1354,
    "end": 1355
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1356,
    "end": 1357
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 1358,
    "end": 1359
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1359,
    "end": 1360
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 1361,
    "end": 1362
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1363,
    "end": 1364
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 1365,
    "end": 1366
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1366,
    "end": 1367
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1368,
    "end": 1369
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1370,
    "end": 1371
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 1372,
    "end": 1373
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1373,
    "end": 1374
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1374,
    "end": 1375
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1376,
    "end": 1377
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1382,
    "end": 1383
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1383,
    "end": 1391
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1391,
    "end": 1392
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1392,
    "end": 1393
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1394,
    "end": 1395
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 1396,
    "end": 1402
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1403,
    "end": 1404
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 1405,
    "end": 1406
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 1407,
    "end": 1408
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1408,
    "end": 1409
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1409,
    "end": 1410
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1410,
    "end": 1411
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1416,
    "end": 1417
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1417,
    "end": 1418
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1418,
    "end": 1419
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1420,
    "end": 1422
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1423,
    "end": 1424
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 1425,
    "end": 1426
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 1427,
    "end": 1428
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1428,
    "end": 1429
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1429,
    "end": 1430
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1431,
    "end": 1432
  },
  {
    "type": "Keyword",
    "value": "while",
    "start": 1434,
    "end": 1439
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1440,
    "end": 1441
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 1441,
    "end": 1442
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 1443,
    "end": 1446
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 1447,
    "end": 1448
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1448,
    "end": 1449
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1450,
    "end": 1451
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 1456,
    "end": 1461
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1462,
    "end": 1463
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1464,
    "end": 1465
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 1466,
    "end": 1467
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1467,
    "end": 1468
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 1469,
    "end": 1470
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1471,
    "end": 1472
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 1473,
    "end": 1474
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1474,
    "end": 1475
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1480,
    "end": 1481
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1481,
    "end": 1489
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1489,
    "end": 1490
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1490,
    "end": 1491
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1492,
    "end": 1493
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 1494,
    "end": 1500
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1501,
    "end": 1502
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 1503,
    "end": 1504
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 1505,
    "end": 1506
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1506,
    "end": 1507
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1507,
    "end": 1508
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1508,
    "end": 1509
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1514,
    "end": 1515
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1515,
    "end": 1516
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1516,
    "end": 1517
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1518,
    "end": 1520
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1521,
    "end": 1522
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 1523,
    "end": 1524
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 1525,
    "end": 1526
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1526,
    "end": 1527
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1527,
    "end": 1528
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1529,
    "end": 1530
  },
  {
    "type": "Keyword",
    "value": "do",
    "start": 1532,
    "end": 1534
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1535,
    "end": 1536
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 1541,
    "end": 1546
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1547,
    "end": 1548
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1549,
    "end": 1550
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 1551,
    "end": 1552
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1552,
    "end": 1553
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 1554,
    "end": 1555
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1556,
    "end": 1557
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 1558,
    "end": 1559
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1559,
    "end": 1560
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1565,
    "end": 1566
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1566,
    "end": 1574
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1574,
    "end": 1575
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1575,
    "end": 1576
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1577,
    "end": 1578
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 1579,
    "end": 1585
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1586,
    "end": 1587
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 1588,
    "end": 1589
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 1590,
    "end": 1591
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1591,
    "end": 1592
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1592,
    "end": 1593
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1593,
    "end": 1594
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1599,
    "end": 1600
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1600,
    "end": 1601
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1601,
    "end": 1602
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1603,
    "end": 1605
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1606,
    "end": 1607
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 1608,
    "end": 1609
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 1610,
    "end": 1611
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1611,
    "end": 1612
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1612,
    "end": 1613
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1614,
    "end": 1615
  },
  {
    "type": "Keyword",
    "value": "while",
    "start": 1616,
    "end": 1621
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1622,
    "end": 1623
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 1623,
    "end": 1624
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 1625,
    "end": 1628
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 1629,
    "end": 1630
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1630,
    "end": 1631
  },
  {
    "type": "Keyword",
    "value": "for",
    "start": 1633,
    "end": 1636
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1637,
    "end": 1638
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 1638,
    "end": 1643
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 1644,
    "end": 1645
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1646,
    "end": 1647
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 1648,
    "end": 1649
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1649,
    "end": 1650
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 1651,
    "end": 1652
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1653,
    "end": 1654
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 1655,
    "end": 1656
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1656,
    "end": 1657
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1657,
    "end": 1658
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1659,
    "end": 1660
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 1665,
    "end": 1670
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1671,
    "end": 1672
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1673,
    "end": 1674
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 1675,
    "end": 1676
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1676,
    "end": 1677
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1682,
    "end": 1683
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1683,
    "end": 1691
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1691,
    "end": 1692
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1692,
    "end": 1693
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1694,
    "end": 1695
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 1696,
    "end": 1702
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1703,
    "end": 1704
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 1705,
    "end": 1706
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 1707,
    "end": 1708
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1708,
    "end": 1709
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1709,
    "end": 1710
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1710,
    "end": 1711
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1716,
    "end": 1717
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1717,
    "end": 1718
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1718,
    "end": 1719
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1720,
    "end": 1722
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1723,
    "end": 1724
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 1725,
    "end": 1726
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 1727,
    "end": 1728
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1728,
    "end": 1729
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1729,
    "end": 1730
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1731,
    "end": 1732
  }
]
```
