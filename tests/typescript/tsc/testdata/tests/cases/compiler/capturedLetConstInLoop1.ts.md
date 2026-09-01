__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "use",
        "optional": false,
        "typeAnnotation": null,
        "start": 17,
        "end": 20
      },
      "generator": false,
      "async": false,
      "declare": true,
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
              "type": "TSAnyKeyword",
              "start": 24,
              "end": 27
            },
            "start": 22,
            "end": 27
          },
          "start": 21,
          "end": 27
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSAnyKeyword",
          "start": 30,
          "end": 33
        },
        "start": 28,
        "end": 33
      },
      "body": null,
      "expression": false,
      "start": 0,
      "end": 34
    },
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
              "start": 56,
              "end": 57
            },
            "init": null,
            "definite": false,
            "start": 56,
            "end": 57
          }
        ],
        "declare": false,
        "start": 52,
        "end": 57
      },
      "right": {
        "type": "ObjectExpression",
        "properties": [],
        "start": 61,
        "end": 63
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
                      "start": 92,
                      "end": 93
                    },
                    "start": 85,
                    "end": 93
                  }
                ],
                "start": 83,
                "end": 94
              },
              "expression": false,
              "start": 72,
              "end": 94
            },
            "directive": null,
            "start": 71,
            "end": 96
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
                "start": 108,
                "end": 109
              },
              "id": null,
              "generator": false,
              "start": 102,
              "end": 109
            },
            "directive": null,
            "start": 101,
            "end": 111
          }
        ],
        "start": 65,
        "end": 113
      },
      "start": 47,
      "end": 113
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
              "start": 124,
              "end": 125
            },
            "init": null,
            "definite": false,
            "start": 124,
            "end": 125
          }
        ],
        "declare": false,
        "start": 120,
        "end": 125
      },
      "right": {
        "type": "ArrayExpression",
        "elements": [],
        "start": 129,
        "end": 131
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
                      "start": 160,
                      "end": 161
                    },
                    "start": 153,
                    "end": 161
                  }
                ],
                "start": 151,
                "end": 162
              },
              "expression": false,
              "start": 140,
              "end": 162
            },
            "directive": null,
            "start": 139,
            "end": 164
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
                "start": 176,
                "end": 177
              },
              "id": null,
              "generator": false,
              "start": 170,
              "end": 177
            },
            "directive": null,
            "start": 169,
            "end": 179
          }
        ],
        "start": 133,
        "end": 181
      },
      "start": 115,
      "end": 181
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
              "start": 192,
              "end": 193
            },
            "init": {
              "type": "Literal",
              "value": 0,
              "raw": "0",
              "start": 196,
              "end": 197
            },
            "definite": false,
            "start": 192,
            "end": 197
          }
        ],
        "declare": false,
        "start": 188,
        "end": 197
      },
      "test": {
        "type": "BinaryExpression",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": null,
          "start": 199,
          "end": 200
        },
        "operator": "<",
        "right": {
          "type": "Literal",
          "value": 1,
          "raw": "1",
          "start": 203,
          "end": 204
        },
        "start": 199,
        "end": 204
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
          "start": 208,
          "end": 209
        },
        "start": 206,
        "end": 209
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
                      "start": 238,
                      "end": 239
                    },
                    "start": 231,
                    "end": 239
                  }
                ],
                "start": 229,
                "end": 240
              },
              "expression": false,
              "start": 218,
              "end": 240
            },
            "directive": null,
            "start": 217,
            "end": 242
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
                "start": 254,
                "end": 255
              },
              "id": null,
              "generator": false,
              "start": 248,
              "end": 255
            },
            "directive": null,
            "start": 247,
            "end": 257
          }
        ],
        "start": 211,
        "end": 259
      },
      "start": 183,
      "end": 259
    },
    {
      "type": "WhileStatement",
      "test": {
        "type": "BinaryExpression",
        "left": {
          "type": "Literal",
          "value": 1,
          "raw": "1",
          "start": 268,
          "end": 269
        },
        "operator": "===",
        "right": {
          "type": "Literal",
          "value": 1,
          "raw": "1",
          "start": 274,
          "end": 275
        },
        "start": 268,
        "end": 275
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
                  "start": 287,
                  "end": 288
                },
                "init": null,
                "definite": false,
                "start": 287,
                "end": 288
              }
            ],
            "declare": false,
            "start": 283,
            "end": 289
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
                      "start": 315,
                      "end": 316
                    },
                    "start": 308,
                    "end": 316
                  }
                ],
                "start": 306,
                "end": 317
              },
              "expression": false,
              "start": 295,
              "end": 317
            },
            "directive": null,
            "start": 294,
            "end": 319
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
                "start": 331,
                "end": 332
              },
              "id": null,
              "generator": false,
              "start": 325,
              "end": 332
            },
            "directive": null,
            "start": 324,
            "end": 334
          }
        ],
        "start": 277,
        "end": 336
      },
      "start": 261,
      "end": 336
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
                  "start": 351,
                  "end": 352
                },
                "init": null,
                "definite": false,
                "start": 351,
                "end": 352
              }
            ],
            "declare": false,
            "start": 347,
            "end": 353
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
                      "start": 379,
                      "end": 380
                    },
                    "start": 372,
                    "end": 380
                  }
                ],
                "start": 370,
                "end": 381
              },
              "expression": false,
              "start": 359,
              "end": 381
            },
            "directive": null,
            "start": 358,
            "end": 383
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
                "start": 395,
                "end": 396
              },
              "id": null,
              "generator": false,
              "start": 389,
              "end": 396
            },
            "directive": null,
            "start": 388,
            "end": 398
          }
        ],
        "start": 341,
        "end": 400
      },
      "test": {
        "type": "BinaryExpression",
        "left": {
          "type": "Literal",
          "value": 1,
          "raw": "1",
          "start": 408,
          "end": 409
        },
        "operator": "===",
        "right": {
          "type": "Literal",
          "value": 1,
          "raw": "1",
          "start": 414,
          "end": 415
        },
        "start": 408,
        "end": 415
      },
      "start": 338,
      "end": 416
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
              "start": 427,
              "end": 428
            },
            "init": {
              "type": "Literal",
              "value": 0,
              "raw": "0",
              "start": 431,
              "end": 432
            },
            "definite": false,
            "start": 427,
            "end": 432
          }
        ],
        "declare": false,
        "start": 423,
        "end": 432
      },
      "test": {
        "type": "BinaryExpression",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "y",
          "optional": false,
          "typeAnnotation": null,
          "start": 434,
          "end": 435
        },
        "operator": "<",
        "right": {
          "type": "Literal",
          "value": 1,
          "raw": "1",
          "start": 438,
          "end": 439
        },
        "start": 434,
        "end": 439
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
          "start": 443,
          "end": 444
        },
        "start": 441,
        "end": 444
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
                  "start": 456,
                  "end": 457
                },
                "init": {
                  "type": "Literal",
                  "value": 1,
                  "raw": "1",
                  "start": 460,
                  "end": 461
                },
                "definite": false,
                "start": 456,
                "end": 461
              }
            ],
            "declare": false,
            "start": 452,
            "end": 462
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
                      "start": 488,
                      "end": 489
                    },
                    "start": 481,
                    "end": 489
                  }
                ],
                "start": 479,
                "end": 490
              },
              "expression": false,
              "start": 468,
              "end": 490
            },
            "directive": null,
            "start": 467,
            "end": 492
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
                "start": 504,
                "end": 505
              },
              "id": null,
              "generator": false,
              "start": 498,
              "end": 505
            },
            "directive": null,
            "start": 497,
            "end": 507
          }
        ],
        "start": 446,
        "end": 509
      },
      "start": 418,
      "end": 509
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
              "start": 520,
              "end": 521
            },
            "init": {
              "type": "Literal",
              "value": 0,
              "raw": "0",
              "start": 524,
              "end": 525
            },
            "definite": false,
            "start": 520,
            "end": 525
          },
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "y",
              "optional": false,
              "typeAnnotation": null,
              "start": 527,
              "end": 528
            },
            "init": {
              "type": "Literal",
              "value": 1,
              "raw": "1",
              "start": 531,
              "end": 532
            },
            "definite": false,
            "start": 527,
            "end": 532
          }
        ],
        "declare": false,
        "start": 516,
        "end": 532
      },
      "test": {
        "type": "BinaryExpression",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": null,
          "start": 534,
          "end": 535
        },
        "operator": "<",
        "right": {
          "type": "Literal",
          "value": 1,
          "raw": "1",
          "start": 538,
          "end": 539
        },
        "start": 534,
        "end": 539
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
          "start": 543,
          "end": 544
        },
        "start": 541,
        "end": 544
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
                        "start": 573,
                        "end": 574
                      },
                      "operator": "+",
                      "right": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "y",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 577,
                        "end": 578
                      },
                      "start": 573,
                      "end": 578
                    },
                    "start": 566,
                    "end": 578
                  }
                ],
                "start": 564,
                "end": 579
              },
              "expression": false,
              "start": 553,
              "end": 579
            },
            "directive": null,
            "start": 552,
            "end": 581
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
                  "start": 593,
                  "end": 594
                },
                "operator": "+",
                "right": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "y",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 597,
                  "end": 598
                },
                "start": 593,
                "end": 598
              },
              "id": null,
              "generator": false,
              "start": 587,
              "end": 598
            },
            "directive": null,
            "start": 586,
            "end": 600
          }
        ],
        "start": 546,
        "end": 602
      },
      "start": 511,
      "end": 602
    },
    {
      "type": "WhileStatement",
      "test": {
        "type": "BinaryExpression",
        "left": {
          "type": "Literal",
          "value": 1,
          "raw": "1",
          "start": 611,
          "end": 612
        },
        "operator": "===",
        "right": {
          "type": "Literal",
          "value": 1,
          "raw": "1",
          "start": 617,
          "end": 618
        },
        "start": 611,
        "end": 618
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
                  "start": 630,
                  "end": 631
                },
                "init": null,
                "definite": false,
                "start": 630,
                "end": 631
              },
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "y",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 633,
                  "end": 634
                },
                "init": null,
                "definite": false,
                "start": 633,
                "end": 634
              }
            ],
            "declare": false,
            "start": 626,
            "end": 635
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
                        "start": 661,
                        "end": 662
                      },
                      "operator": "+",
                      "right": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "y",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 665,
                        "end": 666
                      },
                      "start": 661,
                      "end": 666
                    },
                    "start": 654,
                    "end": 666
                  }
                ],
                "start": 652,
                "end": 667
              },
              "expression": false,
              "start": 641,
              "end": 667
            },
            "directive": null,
            "start": 640,
            "end": 669
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
                  "start": 681,
                  "end": 682
                },
                "operator": "+",
                "right": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "y",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 685,
                  "end": 686
                },
                "start": 681,
                "end": 686
              },
              "id": null,
              "generator": false,
              "start": 675,
              "end": 686
            },
            "directive": null,
            "start": 674,
            "end": 688
          }
        ],
        "start": 620,
        "end": 690
      },
      "start": 604,
      "end": 690
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
                  "start": 705,
                  "end": 706
                },
                "init": null,
                "definite": false,
                "start": 705,
                "end": 706
              },
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "y",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 708,
                  "end": 709
                },
                "init": null,
                "definite": false,
                "start": 708,
                "end": 709
              }
            ],
            "declare": false,
            "start": 701,
            "end": 710
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
                        "start": 736,
                        "end": 737
                      },
                      "operator": "+",
                      "right": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "y",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 740,
                        "end": 741
                      },
                      "start": 736,
                      "end": 741
                    },
                    "start": 729,
                    "end": 741
                  }
                ],
                "start": 727,
                "end": 742
              },
              "expression": false,
              "start": 716,
              "end": 742
            },
            "directive": null,
            "start": 715,
            "end": 744
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
                  "start": 756,
                  "end": 757
                },
                "operator": "+",
                "right": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "y",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 760,
                  "end": 761
                },
                "start": 756,
                "end": 761
              },
              "id": null,
              "generator": false,
              "start": 750,
              "end": 761
            },
            "directive": null,
            "start": 749,
            "end": 763
          }
        ],
        "start": 695,
        "end": 765
      },
      "test": {
        "type": "BinaryExpression",
        "left": {
          "type": "Literal",
          "value": 1,
          "raw": "1",
          "start": 773,
          "end": 774
        },
        "operator": "===",
        "right": {
          "type": "Literal",
          "value": 1,
          "raw": "1",
          "start": 779,
          "end": 780
        },
        "start": 773,
        "end": 780
      },
      "start": 692,
      "end": 781
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
              "start": 792,
              "end": 793
            },
            "init": {
              "type": "Literal",
              "value": 0,
              "raw": "0",
              "start": 796,
              "end": 797
            },
            "definite": false,
            "start": 792,
            "end": 797
          }
        ],
        "declare": false,
        "start": 788,
        "end": 797
      },
      "test": {
        "type": "BinaryExpression",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "y",
          "optional": false,
          "typeAnnotation": null,
          "start": 799,
          "end": 800
        },
        "operator": "<",
        "right": {
          "type": "Literal",
          "value": 1,
          "raw": "1",
          "start": 803,
          "end": 804
        },
        "start": 799,
        "end": 804
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
          "start": 808,
          "end": 809
        },
        "start": 806,
        "end": 809
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
                  "start": 821,
                  "end": 822
                },
                "init": {
                  "type": "Literal",
                  "value": 1,
                  "raw": "1",
                  "start": 825,
                  "end": 826
                },
                "definite": false,
                "start": 821,
                "end": 826
              }
            ],
            "declare": false,
            "start": 817,
            "end": 827
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
                        "start": 853,
                        "end": 854
                      },
                      "operator": "+",
                      "right": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "y",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 857,
                        "end": 858
                      },
                      "start": 853,
                      "end": 858
                    },
                    "start": 846,
                    "end": 858
                  }
                ],
                "start": 844,
                "end": 859
              },
              "expression": false,
              "start": 833,
              "end": 859
            },
            "directive": null,
            "start": 832,
            "end": 861
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
                  "start": 873,
                  "end": 874
                },
                "operator": "+",
                "right": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "y",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 877,
                  "end": 878
                },
                "start": 873,
                "end": 878
              },
              "id": null,
              "generator": false,
              "start": 867,
              "end": 878
            },
            "directive": null,
            "start": 866,
            "end": 880
          }
        ],
        "start": 811,
        "end": 882
      },
      "start": 783,
      "end": 882
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
              "start": 893,
              "end": 894
            },
            "init": {
              "type": "SequenceExpression",
              "expressions": [
                {
                  "type": "CallExpression",
                  "callee": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "use",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 898,
                    "end": 901
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "ArrowFunctionExpression",
                      "expression": true,
                      "async": false,
                      "typeParameters": null,
                      "params": [],
                      "returnType": null,
                      "body": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "y",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 908,
                        "end": 909
                      },
                      "id": null,
                      "generator": false,
                      "start": 902,
                      "end": 909
                    }
                  ],
                  "optional": false,
                  "start": 898,
                  "end": 910
                },
                {
                  "type": "Literal",
                  "value": 0,
                  "raw": "0",
                  "start": 912,
                  "end": 913
                }
              ],
              "start": 898,
              "end": 913
            },
            "definite": false,
            "start": 893,
            "end": 914
          }
        ],
        "declare": false,
        "start": 889,
        "end": 914
      },
      "test": {
        "type": "BinaryExpression",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "y",
          "optional": false,
          "typeAnnotation": null,
          "start": 916,
          "end": 917
        },
        "operator": "<",
        "right": {
          "type": "Literal",
          "value": 1,
          "raw": "1",
          "start": 920,
          "end": 921
        },
        "start": 916,
        "end": 921
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
          "start": 925,
          "end": 926
        },
        "start": 923,
        "end": 926
      },
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 928,
        "end": 931
      },
      "start": 884,
      "end": 931
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
              "start": 942,
              "end": 943
            },
            "init": {
              "type": "Literal",
              "value": 0,
              "raw": "0",
              "start": 946,
              "end": 947
            },
            "definite": false,
            "start": 942,
            "end": 947
          }
        ],
        "declare": false,
        "start": 938,
        "end": 947
      },
      "test": {
        "type": "SequenceExpression",
        "expressions": [
          {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "use",
              "optional": false,
              "typeAnnotation": null,
              "start": 949,
              "end": 952
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "ArrowFunctionExpression",
                "expression": true,
                "async": false,
                "typeParameters": null,
                "params": [],
                "returnType": null,
                "body": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "y",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 959,
                  "end": 960
                },
                "id": null,
                "generator": false,
                "start": 953,
                "end": 960
              }
            ],
            "optional": false,
            "start": 949,
            "end": 961
          },
          {
            "type": "BinaryExpression",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "y",
              "optional": false,
              "typeAnnotation": null,
              "start": 963,
              "end": 964
            },
            "operator": "<",
            "right": {
              "type": "Literal",
              "value": 1,
              "raw": "1",
              "start": 967,
              "end": 968
            },
            "start": 963,
            "end": 968
          }
        ],
        "start": 949,
        "end": 968
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
          "start": 972,
          "end": 973
        },
        "start": 970,
        "end": 973
      },
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 975,
        "end": 978
      },
      "start": 933,
      "end": 978
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
              "start": 989,
              "end": 990
            },
            "init": {
              "type": "Literal",
              "value": 0,
              "raw": "0",
              "start": 993,
              "end": 994
            },
            "definite": false,
            "start": 989,
            "end": 994
          }
        ],
        "declare": false,
        "start": 985,
        "end": 994
      },
      "test": {
        "type": "BinaryExpression",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "y",
          "optional": false,
          "typeAnnotation": null,
          "start": 996,
          "end": 997
        },
        "operator": "<",
        "right": {
          "type": "Literal",
          "value": 1,
          "raw": "1",
          "start": 1000,
          "end": 1001
        },
        "start": 996,
        "end": 1001
      },
      "update": {
        "type": "SequenceExpression",
        "expressions": [
          {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "use",
              "optional": false,
              "typeAnnotation": null,
              "start": 1003,
              "end": 1006
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "ArrowFunctionExpression",
                "expression": true,
                "async": false,
                "typeParameters": null,
                "params": [],
                "returnType": null,
                "body": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "y",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1013,
                  "end": 1014
                },
                "id": null,
                "generator": false,
                "start": 1007,
                "end": 1014
              }
            ],
            "optional": false,
            "start": 1003,
            "end": 1015
          },
          {
            "type": "UpdateExpression",
            "operator": "++",
            "prefix": true,
            "argument": {
              "type": "Identifier",
              "decorators": [],
              "name": "y",
              "optional": false,
              "typeAnnotation": null,
              "start": 1019,
              "end": 1020
            },
            "start": 1017,
            "end": 1020
          }
        ],
        "start": 1003,
        "end": 1020
      },
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 1022,
        "end": 1025
      },
      "start": 980,
      "end": 1025
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
              "start": 1036,
              "end": 1037
            },
            "init": {
              "type": "SequenceExpression",
              "expressions": [
                {
                  "type": "CallExpression",
                  "callee": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "use",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1041,
                    "end": 1044
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "ArrowFunctionExpression",
                      "expression": true,
                      "async": false,
                      "typeParameters": null,
                      "params": [],
                      "returnType": null,
                      "body": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "y",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1051,
                        "end": 1052
                      },
                      "id": null,
                      "generator": false,
                      "start": 1045,
                      "end": 1052
                    }
                  ],
                  "optional": false,
                  "start": 1041,
                  "end": 1053
                },
                {
                  "type": "Literal",
                  "value": 0,
                  "raw": "0",
                  "start": 1055,
                  "end": 1056
                }
              ],
              "start": 1041,
              "end": 1056
            },
            "definite": false,
            "start": 1036,
            "end": 1057
          }
        ],
        "declare": false,
        "start": 1032,
        "end": 1057
      },
      "test": {
        "type": "SequenceExpression",
        "expressions": [
          {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "use",
              "optional": false,
              "typeAnnotation": null,
              "start": 1059,
              "end": 1062
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "ArrowFunctionExpression",
                "expression": true,
                "async": false,
                "typeParameters": null,
                "params": [],
                "returnType": null,
                "body": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "y",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1069,
                  "end": 1070
                },
                "id": null,
                "generator": false,
                "start": 1063,
                "end": 1070
              }
            ],
            "optional": false,
            "start": 1059,
            "end": 1071
          },
          {
            "type": "BinaryExpression",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "y",
              "optional": false,
              "typeAnnotation": null,
              "start": 1073,
              "end": 1074
            },
            "operator": "<",
            "right": {
              "type": "Literal",
              "value": 1,
              "raw": "1",
              "start": 1077,
              "end": 1078
            },
            "start": 1073,
            "end": 1078
          }
        ],
        "start": 1059,
        "end": 1078
      },
      "update": {
        "type": "SequenceExpression",
        "expressions": [
          {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "use",
              "optional": false,
              "typeAnnotation": null,
              "start": 1080,
              "end": 1083
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "ArrowFunctionExpression",
                "expression": true,
                "async": false,
                "typeParameters": null,
                "params": [],
                "returnType": null,
                "body": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "y",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1090,
                  "end": 1091
                },
                "id": null,
                "generator": false,
                "start": 1084,
                "end": 1091
              }
            ],
            "optional": false,
            "start": 1080,
            "end": 1092
          },
          {
            "type": "UpdateExpression",
            "operator": "++",
            "prefix": true,
            "argument": {
              "type": "Identifier",
              "decorators": [],
              "name": "y",
              "optional": false,
              "typeAnnotation": null,
              "start": 1096,
              "end": 1097
            },
            "start": 1094,
            "end": 1097
          }
        ],
        "start": 1080,
        "end": 1097
      },
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "CallExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "use",
                "optional": false,
                "typeAnnotation": null,
                "start": 1105,
                "end": 1108
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "ArrowFunctionExpression",
                  "expression": true,
                  "async": false,
                  "typeParameters": null,
                  "params": [],
                  "returnType": null,
                  "body": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "y",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1115,
                    "end": 1116
                  },
                  "id": null,
                  "generator": false,
                  "start": 1109,
                  "end": 1116
                }
              ],
              "optional": false,
              "start": 1105,
              "end": 1117
            },
            "directive": null,
            "start": 1105,
            "end": 1118
          }
        ],
        "start": 1099,
        "end": 1120
      },
      "start": 1027,
      "end": 1120
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
              "start": 1150,
              "end": 1151
            },
            "init": null,
            "definite": false,
            "start": 1150,
            "end": 1151
          }
        ],
        "declare": false,
        "start": 1144,
        "end": 1151
      },
      "right": {
        "type": "ObjectExpression",
        "properties": [],
        "start": 1155,
        "end": 1157
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
                      "start": 1186,
                      "end": 1187
                    },
                    "start": 1179,
                    "end": 1187
                  }
                ],
                "start": 1177,
                "end": 1188
              },
              "expression": false,
              "start": 1166,
              "end": 1188
            },
            "directive": null,
            "start": 1165,
            "end": 1190
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
                "start": 1202,
                "end": 1203
              },
              "id": null,
              "generator": false,
              "start": 1196,
              "end": 1203
            },
            "directive": null,
            "start": 1195,
            "end": 1205
          }
        ],
        "start": 1159,
        "end": 1207
      },
      "start": 1139,
      "end": 1207
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
              "start": 1220,
              "end": 1221
            },
            "init": null,
            "definite": false,
            "start": 1220,
            "end": 1221
          }
        ],
        "declare": false,
        "start": 1214,
        "end": 1221
      },
      "right": {
        "type": "ArrayExpression",
        "elements": [],
        "start": 1225,
        "end": 1227
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
                      "start": 1256,
                      "end": 1257
                    },
                    "start": 1249,
                    "end": 1257
                  }
                ],
                "start": 1247,
                "end": 1258
              },
              "expression": false,
              "start": 1236,
              "end": 1258
            },
            "directive": null,
            "start": 1235,
            "end": 1260
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
                "start": 1272,
                "end": 1273
              },
              "id": null,
              "generator": false,
              "start": 1266,
              "end": 1273
            },
            "directive": null,
            "start": 1265,
            "end": 1275
          }
        ],
        "start": 1229,
        "end": 1277
      },
      "start": 1209,
      "end": 1277
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
              "start": 1290,
              "end": 1291
            },
            "init": {
              "type": "Literal",
              "value": 0,
              "raw": "0",
              "start": 1294,
              "end": 1295
            },
            "definite": false,
            "start": 1290,
            "end": 1295
          }
        ],
        "declare": false,
        "start": 1284,
        "end": 1295
      },
      "test": {
        "type": "BinaryExpression",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": null,
          "start": 1297,
          "end": 1298
        },
        "operator": "<",
        "right": {
          "type": "Literal",
          "value": 1,
          "raw": "1",
          "start": 1301,
          "end": 1302
        },
        "start": 1297,
        "end": 1302
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
                      "start": 1332,
                      "end": 1333
                    },
                    "start": 1325,
                    "end": 1333
                  }
                ],
                "start": 1323,
                "end": 1334
              },
              "expression": false,
              "start": 1312,
              "end": 1334
            },
            "directive": null,
            "start": 1311,
            "end": 1336
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
                "start": 1348,
                "end": 1349
              },
              "id": null,
              "generator": false,
              "start": 1342,
              "end": 1349
            },
            "directive": null,
            "start": 1341,
            "end": 1351
          }
        ],
        "start": 1305,
        "end": 1353
      },
      "start": 1279,
      "end": 1353
    },
    {
      "type": "WhileStatement",
      "test": {
        "type": "BinaryExpression",
        "left": {
          "type": "Literal",
          "value": 1,
          "raw": "1",
          "start": 1362,
          "end": 1363
        },
        "operator": "===",
        "right": {
          "type": "Literal",
          "value": 1,
          "raw": "1",
          "start": 1368,
          "end": 1369
        },
        "start": 1362,
        "end": 1369
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
                  "start": 1383,
                  "end": 1384
                },
                "init": {
                  "type": "Literal",
                  "value": 1,
                  "raw": "1",
                  "start": 1387,
                  "end": 1388
                },
                "definite": false,
                "start": 1383,
                "end": 1388
              }
            ],
            "declare": false,
            "start": 1377,
            "end": 1389
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
                      "start": 1415,
                      "end": 1416
                    },
                    "start": 1408,
                    "end": 1416
                  }
                ],
                "start": 1406,
                "end": 1417
              },
              "expression": false,
              "start": 1395,
              "end": 1417
            },
            "directive": null,
            "start": 1394,
            "end": 1419
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
                "start": 1431,
                "end": 1432
              },
              "id": null,
              "generator": false,
              "start": 1425,
              "end": 1432
            },
            "directive": null,
            "start": 1424,
            "end": 1434
          }
        ],
        "start": 1371,
        "end": 1436
      },
      "start": 1355,
      "end": 1436
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
                  "start": 1453,
                  "end": 1454
                },
                "init": {
                  "type": "Literal",
                  "value": 1,
                  "raw": "1",
                  "start": 1457,
                  "end": 1458
                },
                "definite": false,
                "start": 1453,
                "end": 1458
              }
            ],
            "declare": false,
            "start": 1447,
            "end": 1459
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
                      "start": 1485,
                      "end": 1486
                    },
                    "start": 1478,
                    "end": 1486
                  }
                ],
                "start": 1476,
                "end": 1487
              },
              "expression": false,
              "start": 1465,
              "end": 1487
            },
            "directive": null,
            "start": 1464,
            "end": 1489
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
                "start": 1501,
                "end": 1502
              },
              "id": null,
              "generator": false,
              "start": 1495,
              "end": 1502
            },
            "directive": null,
            "start": 1494,
            "end": 1504
          }
        ],
        "start": 1441,
        "end": 1506
      },
      "test": {
        "type": "BinaryExpression",
        "left": {
          "type": "Literal",
          "value": 1,
          "raw": "1",
          "start": 1514,
          "end": 1515
        },
        "operator": "===",
        "right": {
          "type": "Literal",
          "value": 1,
          "raw": "1",
          "start": 1520,
          "end": 1521
        },
        "start": 1514,
        "end": 1521
      },
      "start": 1438,
      "end": 1522
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
              "start": 1535,
              "end": 1536
            },
            "init": {
              "type": "Literal",
              "value": 0,
              "raw": "0",
              "start": 1539,
              "end": 1540
            },
            "definite": false,
            "start": 1535,
            "end": 1540
          }
        ],
        "declare": false,
        "start": 1529,
        "end": 1540
      },
      "test": {
        "type": "BinaryExpression",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "y",
          "optional": false,
          "typeAnnotation": null,
          "start": 1542,
          "end": 1543
        },
        "operator": "<",
        "right": {
          "type": "Literal",
          "value": 1,
          "raw": "1",
          "start": 1546,
          "end": 1547
        },
        "start": 1542,
        "end": 1547
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
                  "start": 1562,
                  "end": 1563
                },
                "init": {
                  "type": "Literal",
                  "value": 1,
                  "raw": "1",
                  "start": 1566,
                  "end": 1567
                },
                "definite": false,
                "start": 1562,
                "end": 1567
              }
            ],
            "declare": false,
            "start": 1556,
            "end": 1568
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
                      "start": 1594,
                      "end": 1595
                    },
                    "start": 1587,
                    "end": 1595
                  }
                ],
                "start": 1585,
                "end": 1596
              },
              "expression": false,
              "start": 1574,
              "end": 1596
            },
            "directive": null,
            "start": 1573,
            "end": 1598
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
                "start": 1610,
                "end": 1611
              },
              "id": null,
              "generator": false,
              "start": 1604,
              "end": 1611
            },
            "directive": null,
            "start": 1603,
            "end": 1613
          }
        ],
        "start": 1550,
        "end": 1615
      },
      "start": 1524,
      "end": 1615
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
              "start": 1628,
              "end": 1629
            },
            "init": {
              "type": "Literal",
              "value": 0,
              "raw": "0",
              "start": 1632,
              "end": 1633
            },
            "definite": false,
            "start": 1628,
            "end": 1633
          },
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "y",
              "optional": false,
              "typeAnnotation": null,
              "start": 1635,
              "end": 1636
            },
            "init": {
              "type": "Literal",
              "value": 1,
              "raw": "1",
              "start": 1639,
              "end": 1640
            },
            "definite": false,
            "start": 1635,
            "end": 1640
          }
        ],
        "declare": false,
        "start": 1622,
        "end": 1640
      },
      "test": {
        "type": "BinaryExpression",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": null,
          "start": 1642,
          "end": 1643
        },
        "operator": "<",
        "right": {
          "type": "Literal",
          "value": 1,
          "raw": "1",
          "start": 1646,
          "end": 1647
        },
        "start": 1642,
        "end": 1647
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
                        "start": 1677,
                        "end": 1678
                      },
                      "operator": "+",
                      "right": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "y",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1681,
                        "end": 1682
                      },
                      "start": 1677,
                      "end": 1682
                    },
                    "start": 1670,
                    "end": 1682
                  }
                ],
                "start": 1668,
                "end": 1683
              },
              "expression": false,
              "start": 1657,
              "end": 1683
            },
            "directive": null,
            "start": 1656,
            "end": 1685
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
                  "start": 1697,
                  "end": 1698
                },
                "operator": "+",
                "right": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "y",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1701,
                  "end": 1702
                },
                "start": 1697,
                "end": 1702
              },
              "id": null,
              "generator": false,
              "start": 1691,
              "end": 1702
            },
            "directive": null,
            "start": 1690,
            "end": 1704
          }
        ],
        "start": 1650,
        "end": 1706
      },
      "start": 1617,
      "end": 1706
    },
    {
      "type": "WhileStatement",
      "test": {
        "type": "BinaryExpression",
        "left": {
          "type": "Literal",
          "value": 1,
          "raw": "1",
          "start": 1715,
          "end": 1716
        },
        "operator": "===",
        "right": {
          "type": "Literal",
          "value": 1,
          "raw": "1",
          "start": 1721,
          "end": 1722
        },
        "start": 1715,
        "end": 1722
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
                  "start": 1736,
                  "end": 1737
                },
                "init": {
                  "type": "Literal",
                  "value": 1,
                  "raw": "1",
                  "start": 1740,
                  "end": 1741
                },
                "definite": false,
                "start": 1736,
                "end": 1741
              },
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "y",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1743,
                  "end": 1744
                },
                "init": {
                  "type": "Literal",
                  "value": 1,
                  "raw": "1",
                  "start": 1747,
                  "end": 1748
                },
                "definite": false,
                "start": 1743,
                "end": 1748
              }
            ],
            "declare": false,
            "start": 1730,
            "end": 1749
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
                        "start": 1775,
                        "end": 1776
                      },
                      "operator": "+",
                      "right": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "y",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1779,
                        "end": 1780
                      },
                      "start": 1775,
                      "end": 1780
                    },
                    "start": 1768,
                    "end": 1780
                  }
                ],
                "start": 1766,
                "end": 1781
              },
              "expression": false,
              "start": 1755,
              "end": 1781
            },
            "directive": null,
            "start": 1754,
            "end": 1783
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
                  "start": 1795,
                  "end": 1796
                },
                "operator": "+",
                "right": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "y",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1799,
                  "end": 1800
                },
                "start": 1795,
                "end": 1800
              },
              "id": null,
              "generator": false,
              "start": 1789,
              "end": 1800
            },
            "directive": null,
            "start": 1788,
            "end": 1802
          }
        ],
        "start": 1724,
        "end": 1804
      },
      "start": 1708,
      "end": 1804
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
                  "start": 1821,
                  "end": 1822
                },
                "init": {
                  "type": "Literal",
                  "value": 1,
                  "raw": "1",
                  "start": 1825,
                  "end": 1826
                },
                "definite": false,
                "start": 1821,
                "end": 1826
              },
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "y",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1828,
                  "end": 1829
                },
                "init": {
                  "type": "Literal",
                  "value": 1,
                  "raw": "1",
                  "start": 1832,
                  "end": 1833
                },
                "definite": false,
                "start": 1828,
                "end": 1833
              }
            ],
            "declare": false,
            "start": 1815,
            "end": 1834
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
                        "start": 1860,
                        "end": 1861
                      },
                      "operator": "+",
                      "right": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "y",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1864,
                        "end": 1865
                      },
                      "start": 1860,
                      "end": 1865
                    },
                    "start": 1853,
                    "end": 1865
                  }
                ],
                "start": 1851,
                "end": 1866
              },
              "expression": false,
              "start": 1840,
              "end": 1866
            },
            "directive": null,
            "start": 1839,
            "end": 1868
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
                  "start": 1880,
                  "end": 1881
                },
                "operator": "+",
                "right": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "y",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1884,
                  "end": 1885
                },
                "start": 1880,
                "end": 1885
              },
              "id": null,
              "generator": false,
              "start": 1874,
              "end": 1885
            },
            "directive": null,
            "start": 1873,
            "end": 1887
          }
        ],
        "start": 1809,
        "end": 1889
      },
      "test": {
        "type": "BinaryExpression",
        "left": {
          "type": "Literal",
          "value": 1,
          "raw": "1",
          "start": 1897,
          "end": 1898
        },
        "operator": "===",
        "right": {
          "type": "Literal",
          "value": 1,
          "raw": "1",
          "start": 1903,
          "end": 1904
        },
        "start": 1897,
        "end": 1904
      },
      "start": 1806,
      "end": 1905
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
              "start": 1918,
              "end": 1919
            },
            "init": {
              "type": "Literal",
              "value": 0,
              "raw": "0",
              "start": 1922,
              "end": 1923
            },
            "definite": false,
            "start": 1918,
            "end": 1923
          }
        ],
        "declare": false,
        "start": 1912,
        "end": 1923
      },
      "test": {
        "type": "BinaryExpression",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "y",
          "optional": false,
          "typeAnnotation": null,
          "start": 1925,
          "end": 1926
        },
        "operator": "<",
        "right": {
          "type": "Literal",
          "value": 1,
          "raw": "1",
          "start": 1929,
          "end": 1930
        },
        "start": 1925,
        "end": 1930
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
                  "start": 1945,
                  "end": 1946
                },
                "init": {
                  "type": "Literal",
                  "value": 1,
                  "raw": "1",
                  "start": 1949,
                  "end": 1950
                },
                "definite": false,
                "start": 1945,
                "end": 1950
              }
            ],
            "declare": false,
            "start": 1939,
            "end": 1951
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
                        "start": 1977,
                        "end": 1978
                      },
                      "operator": "+",
                      "right": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "y",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1981,
                        "end": 1982
                      },
                      "start": 1977,
                      "end": 1982
                    },
                    "start": 1970,
                    "end": 1982
                  }
                ],
                "start": 1968,
                "end": 1983
              },
              "expression": false,
              "start": 1957,
              "end": 1983
            },
            "directive": null,
            "start": 1956,
            "end": 1985
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
                  "start": 1997,
                  "end": 1998
                },
                "operator": "+",
                "right": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "y",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2001,
                  "end": 2002
                },
                "start": 1997,
                "end": 2002
              },
              "id": null,
              "generator": false,
              "start": 1991,
              "end": 2002
            },
            "directive": null,
            "start": 1990,
            "end": 2004
          }
        ],
        "start": 1933,
        "end": 2006
      },
      "start": 1907,
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
            "name": "sobj",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "members": [
                  {
                    "type": "TSIndexSignature",
                    "parameters": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSStringKeyword",
                            "start": 2090,
                            "end": 2096
                          },
                          "start": 2088,
                          "end": 2096
                        },
                        "start": 2087,
                        "end": 2096
                      }
                    ],
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSAnyKeyword",
                        "start": 2099,
                        "end": 2102
                      },
                      "start": 2097,
                      "end": 2102
                    },
                    "readonly": false,
                    "static": false,
                    "accessibility": null,
                    "start": 2086,
                    "end": 2102
                  }
                ],
                "start": 2084,
                "end": 2104
              },
              "start": 2082,
              "end": 2104
            },
            "start": 2078,
            "end": 2104
          },
          "init": null,
          "definite": false,
          "start": 2078,
          "end": 2104
        }
      ],
      "declare": true,
      "start": 2064,
      "end": 2105
    },
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
              "name": "sx",
              "optional": false,
              "typeAnnotation": null,
              "start": 2115,
              "end": 2117
            },
            "init": null,
            "definite": false,
            "start": 2115,
            "end": 2117
          }
        ],
        "declare": false,
        "start": 2111,
        "end": 2117
      },
      "right": {
        "type": "Identifier",
        "decorators": [],
        "name": "sobj",
        "optional": false,
        "typeAnnotation": null,
        "start": 2121,
        "end": 2125
      },
      "body": {
        "type": "BlockStatement",
        "body": [
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
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "sobj",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2140,
                  "end": 2144
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "sx",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2145,
                  "end": 2147
                },
                "optional": false,
                "computed": true,
                "start": 2140,
                "end": 2148
              },
              "id": null,
              "generator": false,
              "start": 2134,
              "end": 2148
            },
            "directive": null,
            "start": 2133,
            "end": 2150
          }
        ],
        "start": 2127,
        "end": 2152
      },
      "start": 2106,
      "end": 2152
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
            "name": "iobj",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "members": [
                  {
                    "type": "TSIndexSignature",
                    "parameters": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSNumberKeyword",
                            "start": 2179,
                            "end": 2185
                          },
                          "start": 2177,
                          "end": 2185
                        },
                        "start": 2176,
                        "end": 2185
                      }
                    ],
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSAnyKeyword",
                        "start": 2188,
                        "end": 2191
                      },
                      "start": 2186,
                      "end": 2191
                    },
                    "readonly": false,
                    "static": false,
                    "accessibility": null,
                    "start": 2175,
                    "end": 2191
                  }
                ],
                "start": 2173,
                "end": 2193
              },
              "start": 2171,
              "end": 2193
            },
            "start": 2167,
            "end": 2193
          },
          "init": null,
          "definite": false,
          "start": 2167,
          "end": 2193
        }
      ],
      "declare": true,
      "start": 2153,
      "end": 2194
    },
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
              "name": "ix",
              "optional": false,
              "typeAnnotation": null,
              "start": 2204,
              "end": 2206
            },
            "init": null,
            "definite": false,
            "start": 2204,
            "end": 2206
          }
        ],
        "declare": false,
        "start": 2200,
        "end": 2206
      },
      "right": {
        "type": "Identifier",
        "decorators": [],
        "name": "iobj",
        "optional": false,
        "typeAnnotation": null,
        "start": 2210,
        "end": 2214
      },
      "body": {
        "type": "BlockStatement",
        "body": [
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
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "iobj",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2229,
                  "end": 2233
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "ix",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2234,
                  "end": 2236
                },
                "optional": false,
                "computed": true,
                "start": 2229,
                "end": 2237
              },
              "id": null,
              "generator": false,
              "start": 2223,
              "end": 2237
            },
            "directive": null,
            "start": 2222,
            "end": 2239
          }
        ],
        "start": 2216,
        "end": 2241
      },
      "start": 2195,
      "end": 2241
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 2241
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
    "value": "function",
    "start": 8,
    "end": 16
  },
  {
    "type": "Identifier",
    "value": "use",
    "start": 17,
    "end": 20
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 20,
    "end": 21
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 21,
    "end": 22
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 22,
    "end": 23
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 24,
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
    "value": ":",
    "start": 28,
    "end": 29
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 30,
    "end": 33
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 33,
    "end": 34
  },
  {
    "type": "Keyword",
    "value": "for",
    "start": 47,
    "end": 50
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 51,
    "end": 52
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 52,
    "end": 55
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 56,
    "end": 57
  },
  {
    "type": "Keyword",
    "value": "in",
    "start": 58,
    "end": 60
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 61,
    "end": 62
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 62,
    "end": 63
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 63,
    "end": 64
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 65,
    "end": 66
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 71,
    "end": 72
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 72,
    "end": 80
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 80,
    "end": 81
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 81,
    "end": 82
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 83,
    "end": 84
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 85,
    "end": 91
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 92,
    "end": 93
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 93,
    "end": 94
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 94,
    "end": 95
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 95,
    "end": 96
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 101,
    "end": 102
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 102,
    "end": 103
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 103,
    "end": 104
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 105,
    "end": 107
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 108,
    "end": 109
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 109,
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
    "type": "Keyword",
    "value": "for",
    "start": 115,
    "end": 118
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 119,
    "end": 120
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 120,
    "end": 123
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 124,
    "end": 125
  },
  {
    "type": "Identifier",
    "value": "of",
    "start": 126,
    "end": 128
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 129,
    "end": 130
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 130,
    "end": 131
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 131,
    "end": 132
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 133,
    "end": 134
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 139,
    "end": 140
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 140,
    "end": 148
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 148,
    "end": 149
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 149,
    "end": 150
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 151,
    "end": 152
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 153,
    "end": 159
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 160,
    "end": 161
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 161,
    "end": 162
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 162,
    "end": 163
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 163,
    "end": 164
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 169,
    "end": 170
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 170,
    "end": 171
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 171,
    "end": 172
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 173,
    "end": 175
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 176,
    "end": 177
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 177,
    "end": 178
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 178,
    "end": 179
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 180,
    "end": 181
  },
  {
    "type": "Keyword",
    "value": "for",
    "start": 183,
    "end": 186
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 187,
    "end": 188
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 188,
    "end": 191
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 192,
    "end": 193
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 194,
    "end": 195
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 196,
    "end": 197
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 197,
    "end": 198
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 199,
    "end": 200
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 201,
    "end": 202
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 203,
    "end": 204
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 204,
    "end": 205
  },
  {
    "type": "Punctuator",
    "value": "++",
    "start": 206,
    "end": 208
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 208,
    "end": 209
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 209,
    "end": 210
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 211,
    "end": 212
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 217,
    "end": 218
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 218,
    "end": 226
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 226,
    "end": 227
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 227,
    "end": 228
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 229,
    "end": 230
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 231,
    "end": 237
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 238,
    "end": 239
  },
  {
    "type": "Punctuator",
    "value": "}",
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
    "value": ";",
    "start": 241,
    "end": 242
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 247,
    "end": 248
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 248,
    "end": 249
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 249,
    "end": 250
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 251,
    "end": 253
  },
  {
    "type": "Identifier",
    "value": "x",
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
    "value": ";",
    "start": 256,
    "end": 257
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 258,
    "end": 259
  },
  {
    "type": "Keyword",
    "value": "while",
    "start": 261,
    "end": 266
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 267,
    "end": 268
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 268,
    "end": 269
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 270,
    "end": 273
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 274,
    "end": 275
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 275,
    "end": 276
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 277,
    "end": 278
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 283,
    "end": 286
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 287,
    "end": 288
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 288,
    "end": 289
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 294,
    "end": 295
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 295,
    "end": 303
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 303,
    "end": 304
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 304,
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
    "value": "return",
    "start": 308,
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
    "value": "}",
    "start": 316,
    "end": 317
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 317,
    "end": 318
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 318,
    "end": 319
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 324,
    "end": 325
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 325,
    "end": 326
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 326,
    "end": 327
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 328,
    "end": 330
  },
  {
    "type": "Identifier",
    "value": "x",
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
    "value": ";",
    "start": 333,
    "end": 334
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 335,
    "end": 336
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
    "type": "Keyword",
    "value": "let",
    "start": 347,
    "end": 350
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 351,
    "end": 352
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 352,
    "end": 353
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 358,
    "end": 359
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 359,
    "end": 367
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 367,
    "end": 368
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 368,
    "end": 369
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 370,
    "end": 371
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 372,
    "end": 378
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 379,
    "end": 380
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 380,
    "end": 381
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 381,
    "end": 382
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 382,
    "end": 383
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 388,
    "end": 389
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 389,
    "end": 390
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 390,
    "end": 391
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 392,
    "end": 394
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 395,
    "end": 396
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 396,
    "end": 397
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 397,
    "end": 398
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 399,
    "end": 400
  },
  {
    "type": "Keyword",
    "value": "while",
    "start": 401,
    "end": 406
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 407,
    "end": 408
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 408,
    "end": 409
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 410,
    "end": 413
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 414,
    "end": 415
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 415,
    "end": 416
  },
  {
    "type": "Keyword",
    "value": "for",
    "start": 418,
    "end": 421
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 422,
    "end": 423
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 423,
    "end": 426
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 427,
    "end": 428
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 429,
    "end": 430
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 431,
    "end": 432
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 432,
    "end": 433
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 434,
    "end": 435
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 436,
    "end": 437
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 438,
    "end": 439
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 439,
    "end": 440
  },
  {
    "type": "Punctuator",
    "value": "++",
    "start": 441,
    "end": 443
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 443,
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
    "value": "{",
    "start": 446,
    "end": 447
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 452,
    "end": 455
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 456,
    "end": 457
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 458,
    "end": 459
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 460,
    "end": 461
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 461,
    "end": 462
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 467,
    "end": 468
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 468,
    "end": 476
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 476,
    "end": 477
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 477,
    "end": 478
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 479,
    "end": 480
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 481,
    "end": 487
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 488,
    "end": 489
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 489,
    "end": 490
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 490,
    "end": 491
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 491,
    "end": 492
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 497,
    "end": 498
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 498,
    "end": 499
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 499,
    "end": 500
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 501,
    "end": 503
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 504,
    "end": 505
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 505,
    "end": 506
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 506,
    "end": 507
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 508,
    "end": 509
  },
  {
    "type": "Keyword",
    "value": "for",
    "start": 511,
    "end": 514
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 515,
    "end": 516
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 516,
    "end": 519
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 520,
    "end": 521
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 522,
    "end": 523
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 524,
    "end": 525
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 525,
    "end": 526
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 527,
    "end": 528
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 529,
    "end": 530
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 531,
    "end": 532
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 532,
    "end": 533
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 534,
    "end": 535
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 536,
    "end": 537
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 538,
    "end": 539
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 539,
    "end": 540
  },
  {
    "type": "Punctuator",
    "value": "++",
    "start": 541,
    "end": 543
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 543,
    "end": 544
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 544,
    "end": 545
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 546,
    "end": 547
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 552,
    "end": 553
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 553,
    "end": 561
  },
  {
    "type": "Punctuator",
    "value": "(",
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
    "value": "{",
    "start": 564,
    "end": 565
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 566,
    "end": 572
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 573,
    "end": 574
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 575,
    "end": 576
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 577,
    "end": 578
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 578,
    "end": 579
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 579,
    "end": 580
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 580,
    "end": 581
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 586,
    "end": 587
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 587,
    "end": 588
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 588,
    "end": 589
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 590,
    "end": 592
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 593,
    "end": 594
  },
  {
    "type": "Punctuator",
    "value": "+",
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
    "value": ")",
    "start": 598,
    "end": 599
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 599,
    "end": 600
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 601,
    "end": 602
  },
  {
    "type": "Keyword",
    "value": "while",
    "start": 604,
    "end": 609
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 610,
    "end": 611
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 611,
    "end": 612
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 613,
    "end": 616
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 617,
    "end": 618
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 618,
    "end": 619
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 620,
    "end": 621
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 626,
    "end": 629
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 630,
    "end": 631
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 631,
    "end": 632
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 633,
    "end": 634
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 634,
    "end": 635
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 640,
    "end": 641
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 641,
    "end": 649
  },
  {
    "type": "Punctuator",
    "value": "(",
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
    "value": "{",
    "start": 652,
    "end": 653
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 654,
    "end": 660
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 661,
    "end": 662
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 663,
    "end": 664
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 665,
    "end": 666
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 666,
    "end": 667
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 667,
    "end": 668
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 668,
    "end": 669
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 674,
    "end": 675
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 675,
    "end": 676
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 676,
    "end": 677
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 678,
    "end": 680
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 681,
    "end": 682
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 683,
    "end": 684
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 685,
    "end": 686
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 686,
    "end": 687
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 687,
    "end": 688
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 689,
    "end": 690
  },
  {
    "type": "Keyword",
    "value": "do",
    "start": 692,
    "end": 694
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 695,
    "end": 696
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 701,
    "end": 704
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 705,
    "end": 706
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 706,
    "end": 707
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 708,
    "end": 709
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 709,
    "end": 710
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 715,
    "end": 716
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 716,
    "end": 724
  },
  {
    "type": "Punctuator",
    "value": "(",
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
    "value": "{",
    "start": 727,
    "end": 728
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 729,
    "end": 735
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 736,
    "end": 737
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 738,
    "end": 739
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 740,
    "end": 741
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 741,
    "end": 742
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 742,
    "end": 743
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 743,
    "end": 744
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 749,
    "end": 750
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 750,
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
    "value": "=>",
    "start": 753,
    "end": 755
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 756,
    "end": 757
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 758,
    "end": 759
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 760,
    "end": 761
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 761,
    "end": 762
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 762,
    "end": 763
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 764,
    "end": 765
  },
  {
    "type": "Keyword",
    "value": "while",
    "start": 766,
    "end": 771
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 772,
    "end": 773
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 773,
    "end": 774
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 775,
    "end": 778
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 779,
    "end": 780
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 780,
    "end": 781
  },
  {
    "type": "Keyword",
    "value": "for",
    "start": 783,
    "end": 786
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 787,
    "end": 788
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 788,
    "end": 791
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 792,
    "end": 793
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 794,
    "end": 795
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 796,
    "end": 797
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 797,
    "end": 798
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 799,
    "end": 800
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 801,
    "end": 802
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 803,
    "end": 804
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 804,
    "end": 805
  },
  {
    "type": "Punctuator",
    "value": "++",
    "start": 806,
    "end": 808
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 808,
    "end": 809
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 809,
    "end": 810
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 811,
    "end": 812
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 817,
    "end": 820
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 821,
    "end": 822
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 823,
    "end": 824
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 825,
    "end": 826
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 826,
    "end": 827
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 832,
    "end": 833
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 833,
    "end": 841
  },
  {
    "type": "Punctuator",
    "value": "(",
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
    "value": "{",
    "start": 844,
    "end": 845
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 846,
    "end": 852
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 853,
    "end": 854
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 855,
    "end": 856
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 857,
    "end": 858
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 858,
    "end": 859
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 859,
    "end": 860
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 860,
    "end": 861
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 866,
    "end": 867
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 867,
    "end": 868
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 868,
    "end": 869
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 870,
    "end": 872
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 873,
    "end": 874
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 875,
    "end": 876
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 877,
    "end": 878
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 878,
    "end": 879
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 879,
    "end": 880
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 881,
    "end": 882
  },
  {
    "type": "Keyword",
    "value": "for",
    "start": 884,
    "end": 887
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 888,
    "end": 889
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 889,
    "end": 892
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 893,
    "end": 894
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 895,
    "end": 896
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 897,
    "end": 898
  },
  {
    "type": "Identifier",
    "value": "use",
    "start": 898,
    "end": 901
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 901,
    "end": 902
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 902,
    "end": 903
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 903,
    "end": 904
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 905,
    "end": 907
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 908,
    "end": 909
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 909,
    "end": 910
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 910,
    "end": 911
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 912,
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
    "type": "Identifier",
    "value": "y",
    "start": 916,
    "end": 917
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 918,
    "end": 919
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 920,
    "end": 921
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 921,
    "end": 922
  },
  {
    "type": "Punctuator",
    "value": "++",
    "start": 923,
    "end": 925
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 925,
    "end": 926
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 926,
    "end": 927
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 928,
    "end": 929
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 930,
    "end": 931
  },
  {
    "type": "Keyword",
    "value": "for",
    "start": 933,
    "end": 936
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 937,
    "end": 938
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 938,
    "end": 941
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 942,
    "end": 943
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 944,
    "end": 945
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 946,
    "end": 947
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 947,
    "end": 948
  },
  {
    "type": "Identifier",
    "value": "use",
    "start": 949,
    "end": 952
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 952,
    "end": 953
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 953,
    "end": 954
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 954,
    "end": 955
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 956,
    "end": 958
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 959,
    "end": 960
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 960,
    "end": 961
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 961,
    "end": 962
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 963,
    "end": 964
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 965,
    "end": 966
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 967,
    "end": 968
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 968,
    "end": 969
  },
  {
    "type": "Punctuator",
    "value": "++",
    "start": 970,
    "end": 972
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 972,
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
    "value": "{",
    "start": 975,
    "end": 976
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 977,
    "end": 978
  },
  {
    "type": "Keyword",
    "value": "for",
    "start": 980,
    "end": 983
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 984,
    "end": 985
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 985,
    "end": 988
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 989,
    "end": 990
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 991,
    "end": 992
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 993,
    "end": 994
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 994,
    "end": 995
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 996,
    "end": 997
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 998,
    "end": 999
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 1000,
    "end": 1001
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1001,
    "end": 1002
  },
  {
    "type": "Identifier",
    "value": "use",
    "start": 1003,
    "end": 1006
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1006,
    "end": 1007
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1007,
    "end": 1008
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1008,
    "end": 1009
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1010,
    "end": 1012
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 1013,
    "end": 1014
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1014,
    "end": 1015
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1015,
    "end": 1016
  },
  {
    "type": "Punctuator",
    "value": "++",
    "start": 1017,
    "end": 1019
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 1019,
    "end": 1020
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1020,
    "end": 1021
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1022,
    "end": 1023
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1024,
    "end": 1025
  },
  {
    "type": "Keyword",
    "value": "for",
    "start": 1027,
    "end": 1030
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1031,
    "end": 1032
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 1032,
    "end": 1035
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 1036,
    "end": 1037
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1038,
    "end": 1039
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1040,
    "end": 1041
  },
  {
    "type": "Identifier",
    "value": "use",
    "start": 1041,
    "end": 1044
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1044,
    "end": 1045
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1045,
    "end": 1046
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1046,
    "end": 1047
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1048,
    "end": 1050
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 1051,
    "end": 1052
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1052,
    "end": 1053
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1053,
    "end": 1054
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 1055,
    "end": 1056
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1056,
    "end": 1057
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1057,
    "end": 1058
  },
  {
    "type": "Identifier",
    "value": "use",
    "start": 1059,
    "end": 1062
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1062,
    "end": 1063
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1063,
    "end": 1064
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1064,
    "end": 1065
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1066,
    "end": 1068
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 1069,
    "end": 1070
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1070,
    "end": 1071
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1071,
    "end": 1072
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 1073,
    "end": 1074
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1075,
    "end": 1076
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 1077,
    "end": 1078
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1078,
    "end": 1079
  },
  {
    "type": "Identifier",
    "value": "use",
    "start": 1080,
    "end": 1083
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1083,
    "end": 1084
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1084,
    "end": 1085
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1085,
    "end": 1086
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1087,
    "end": 1089
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 1090,
    "end": 1091
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1091,
    "end": 1092
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1092,
    "end": 1093
  },
  {
    "type": "Punctuator",
    "value": "++",
    "start": 1094,
    "end": 1096
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 1096,
    "end": 1097
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1097,
    "end": 1098
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1099,
    "end": 1100
  },
  {
    "type": "Identifier",
    "value": "use",
    "start": 1105,
    "end": 1108
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1108,
    "end": 1109
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1109,
    "end": 1110
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1110,
    "end": 1111
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1112,
    "end": 1114
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 1115,
    "end": 1116
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1116,
    "end": 1117
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1117,
    "end": 1118
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1119,
    "end": 1120
  },
  {
    "type": "Keyword",
    "value": "for",
    "start": 1139,
    "end": 1142
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1143,
    "end": 1144
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 1144,
    "end": 1149
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1150,
    "end": 1151
  },
  {
    "type": "Keyword",
    "value": "in",
    "start": 1152,
    "end": 1154
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1155,
    "end": 1156
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1156,
    "end": 1157
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1157,
    "end": 1158
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1159,
    "end": 1160
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1165,
    "end": 1166
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1166,
    "end": 1174
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1174,
    "end": 1175
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1175,
    "end": 1176
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1177,
    "end": 1178
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 1179,
    "end": 1185
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1186,
    "end": 1187
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1187,
    "end": 1188
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1188,
    "end": 1189
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1189,
    "end": 1190
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1195,
    "end": 1196
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1196,
    "end": 1197
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1197,
    "end": 1198
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1199,
    "end": 1201
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1202,
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
    "type": "Punctuator",
    "value": "}",
    "start": 1206,
    "end": 1207
  },
  {
    "type": "Keyword",
    "value": "for",
    "start": 1209,
    "end": 1212
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1213,
    "end": 1214
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 1214,
    "end": 1219
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1220,
    "end": 1221
  },
  {
    "type": "Identifier",
    "value": "of",
    "start": 1222,
    "end": 1224
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1225,
    "end": 1226
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1226,
    "end": 1227
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1227,
    "end": 1228
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1229,
    "end": 1230
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1235,
    "end": 1236
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1236,
    "end": 1244
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1244,
    "end": 1245
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1245,
    "end": 1246
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1247,
    "end": 1248
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 1249,
    "end": 1255
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1256,
    "end": 1257
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1257,
    "end": 1258
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1258,
    "end": 1259
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1259,
    "end": 1260
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1265,
    "end": 1266
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1266,
    "end": 1267
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1267,
    "end": 1268
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1269,
    "end": 1271
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1272,
    "end": 1273
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1273,
    "end": 1274
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1274,
    "end": 1275
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1276,
    "end": 1277
  },
  {
    "type": "Keyword",
    "value": "for",
    "start": 1279,
    "end": 1282
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1283,
    "end": 1284
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 1284,
    "end": 1289
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1290,
    "end": 1291
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1292,
    "end": 1293
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 1294,
    "end": 1295
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1295,
    "end": 1296
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1297,
    "end": 1298
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1299,
    "end": 1300
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 1301,
    "end": 1302
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1302,
    "end": 1303
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1303,
    "end": 1304
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1305,
    "end": 1306
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1311,
    "end": 1312
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1312,
    "end": 1320
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1320,
    "end": 1321
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1321,
    "end": 1322
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1323,
    "end": 1324
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 1325,
    "end": 1331
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1332,
    "end": 1333
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1333,
    "end": 1334
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1334,
    "end": 1335
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1335,
    "end": 1336
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1341,
    "end": 1342
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1342,
    "end": 1343
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1343,
    "end": 1344
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1345,
    "end": 1347
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1348,
    "end": 1349
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1349,
    "end": 1350
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1350,
    "end": 1351
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1352,
    "end": 1353
  },
  {
    "type": "Keyword",
    "value": "while",
    "start": 1355,
    "end": 1360
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1361,
    "end": 1362
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 1362,
    "end": 1363
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 1364,
    "end": 1367
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 1368,
    "end": 1369
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1369,
    "end": 1370
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1371,
    "end": 1372
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 1377,
    "end": 1382
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1383,
    "end": 1384
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1385,
    "end": 1386
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 1387,
    "end": 1388
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1388,
    "end": 1389
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1394,
    "end": 1395
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1395,
    "end": 1403
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1403,
    "end": 1404
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1404,
    "end": 1405
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1406,
    "end": 1407
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 1408,
    "end": 1414
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1415,
    "end": 1416
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1416,
    "end": 1417
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1417,
    "end": 1418
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1418,
    "end": 1419
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1424,
    "end": 1425
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1425,
    "end": 1426
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1426,
    "end": 1427
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1428,
    "end": 1430
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1431,
    "end": 1432
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1432,
    "end": 1433
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1433,
    "end": 1434
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1435,
    "end": 1436
  },
  {
    "type": "Keyword",
    "value": "do",
    "start": 1438,
    "end": 1440
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1441,
    "end": 1442
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 1447,
    "end": 1452
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1453,
    "end": 1454
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1455,
    "end": 1456
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 1457,
    "end": 1458
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1458,
    "end": 1459
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1464,
    "end": 1465
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1465,
    "end": 1473
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1473,
    "end": 1474
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1474,
    "end": 1475
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1476,
    "end": 1477
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 1478,
    "end": 1484
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1485,
    "end": 1486
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1486,
    "end": 1487
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1487,
    "end": 1488
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1488,
    "end": 1489
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1494,
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
    "value": ")",
    "start": 1496,
    "end": 1497
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1498,
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
    "value": ")",
    "start": 1502,
    "end": 1503
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1503,
    "end": 1504
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1505,
    "end": 1506
  },
  {
    "type": "Keyword",
    "value": "while",
    "start": 1507,
    "end": 1512
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1513,
    "end": 1514
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 1514,
    "end": 1515
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 1516,
    "end": 1519
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 1520,
    "end": 1521
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1521,
    "end": 1522
  },
  {
    "type": "Keyword",
    "value": "for",
    "start": 1524,
    "end": 1527
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1528,
    "end": 1529
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 1529,
    "end": 1534
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 1535,
    "end": 1536
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1537,
    "end": 1538
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 1539,
    "end": 1540
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1540,
    "end": 1541
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 1542,
    "end": 1543
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1544,
    "end": 1545
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 1546,
    "end": 1547
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1547,
    "end": 1548
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1548,
    "end": 1549
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1550,
    "end": 1551
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 1556,
    "end": 1561
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1562,
    "end": 1563
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1564,
    "end": 1565
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 1566,
    "end": 1567
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1567,
    "end": 1568
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1573,
    "end": 1574
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1574,
    "end": 1582
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1582,
    "end": 1583
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1583,
    "end": 1584
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1585,
    "end": 1586
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 1587,
    "end": 1593
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1594,
    "end": 1595
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1595,
    "end": 1596
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1596,
    "end": 1597
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1597,
    "end": 1598
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1603,
    "end": 1604
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1604,
    "end": 1605
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1605,
    "end": 1606
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1607,
    "end": 1609
  },
  {
    "type": "Identifier",
    "value": "x",
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
    "value": "for",
    "start": 1617,
    "end": 1620
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1621,
    "end": 1622
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 1622,
    "end": 1627
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1628,
    "end": 1629
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1630,
    "end": 1631
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 1632,
    "end": 1633
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1633,
    "end": 1634
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 1635,
    "end": 1636
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1637,
    "end": 1638
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 1639,
    "end": 1640
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1640,
    "end": 1641
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1642,
    "end": 1643
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1644,
    "end": 1645
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 1646,
    "end": 1647
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1647,
    "end": 1648
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1648,
    "end": 1649
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1650,
    "end": 1651
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1656,
    "end": 1657
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1657,
    "end": 1665
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1665,
    "end": 1666
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1666,
    "end": 1667
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1668,
    "end": 1669
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 1670,
    "end": 1676
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1677,
    "end": 1678
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 1679,
    "end": 1680
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 1681,
    "end": 1682
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1682,
    "end": 1683
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1683,
    "end": 1684
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1684,
    "end": 1685
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1690,
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
    "value": "=>",
    "start": 1694,
    "end": 1696
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1697,
    "end": 1698
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 1699,
    "end": 1700
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 1701,
    "end": 1702
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1702,
    "end": 1703
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1703,
    "end": 1704
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1705,
    "end": 1706
  },
  {
    "type": "Keyword",
    "value": "while",
    "start": 1708,
    "end": 1713
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1714,
    "end": 1715
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 1715,
    "end": 1716
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 1717,
    "end": 1720
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 1721,
    "end": 1722
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1722,
    "end": 1723
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1724,
    "end": 1725
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 1730,
    "end": 1735
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1736,
    "end": 1737
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1738,
    "end": 1739
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 1740,
    "end": 1741
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1741,
    "end": 1742
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 1743,
    "end": 1744
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1745,
    "end": 1746
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 1747,
    "end": 1748
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1748,
    "end": 1749
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1754,
    "end": 1755
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1755,
    "end": 1763
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1763,
    "end": 1764
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1764,
    "end": 1765
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1766,
    "end": 1767
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 1768,
    "end": 1774
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1775,
    "end": 1776
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 1777,
    "end": 1778
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 1779,
    "end": 1780
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1780,
    "end": 1781
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1781,
    "end": 1782
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1782,
    "end": 1783
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1788,
    "end": 1789
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1789,
    "end": 1790
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1790,
    "end": 1791
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1792,
    "end": 1794
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1795,
    "end": 1796
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 1797,
    "end": 1798
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 1799,
    "end": 1800
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1800,
    "end": 1801
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1801,
    "end": 1802
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1803,
    "end": 1804
  },
  {
    "type": "Keyword",
    "value": "do",
    "start": 1806,
    "end": 1808
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1809,
    "end": 1810
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 1815,
    "end": 1820
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1821,
    "end": 1822
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1823,
    "end": 1824
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 1825,
    "end": 1826
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1826,
    "end": 1827
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 1828,
    "end": 1829
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1830,
    "end": 1831
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 1832,
    "end": 1833
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1833,
    "end": 1834
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1839,
    "end": 1840
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1840,
    "end": 1848
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1848,
    "end": 1849
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1849,
    "end": 1850
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1851,
    "end": 1852
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 1853,
    "end": 1859
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1860,
    "end": 1861
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 1862,
    "end": 1863
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 1864,
    "end": 1865
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1865,
    "end": 1866
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1866,
    "end": 1867
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1867,
    "end": 1868
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1873,
    "end": 1874
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1874,
    "end": 1875
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1875,
    "end": 1876
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1877,
    "end": 1879
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1880,
    "end": 1881
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 1882,
    "end": 1883
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 1884,
    "end": 1885
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1885,
    "end": 1886
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1886,
    "end": 1887
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1888,
    "end": 1889
  },
  {
    "type": "Keyword",
    "value": "while",
    "start": 1890,
    "end": 1895
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1896,
    "end": 1897
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 1897,
    "end": 1898
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 1899,
    "end": 1902
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 1903,
    "end": 1904
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1904,
    "end": 1905
  },
  {
    "type": "Keyword",
    "value": "for",
    "start": 1907,
    "end": 1910
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1911,
    "end": 1912
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 1912,
    "end": 1917
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 1918,
    "end": 1919
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1920,
    "end": 1921
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 1922,
    "end": 1923
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1923,
    "end": 1924
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 1925,
    "end": 1926
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1927,
    "end": 1928
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 1929,
    "end": 1930
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1930,
    "end": 1931
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1931,
    "end": 1932
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1933,
    "end": 1934
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 1939,
    "end": 1944
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1945,
    "end": 1946
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1947,
    "end": 1948
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 1949,
    "end": 1950
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1950,
    "end": 1951
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1956,
    "end": 1957
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1957,
    "end": 1965
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1965,
    "end": 1966
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1966,
    "end": 1967
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1968,
    "end": 1969
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 1970,
    "end": 1976
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1977,
    "end": 1978
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 1979,
    "end": 1980
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 1981,
    "end": 1982
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1982,
    "end": 1983
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1983,
    "end": 1984
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1984,
    "end": 1985
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1990,
    "end": 1991
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1991,
    "end": 1992
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1992,
    "end": 1993
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1994,
    "end": 1996
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1997,
    "end": 1998
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 1999,
    "end": 2000
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 2001,
    "end": 2002
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2002,
    "end": 2003
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2003,
    "end": 2004
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2005,
    "end": 2006
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 2064,
    "end": 2071
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 2072,
    "end": 2077
  },
  {
    "type": "Identifier",
    "value": "sobj",
    "start": 2078,
    "end": 2082
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2082,
    "end": 2083
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2084,
    "end": 2085
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 2086,
    "end": 2087
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2087,
    "end": 2088
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2088,
    "end": 2089
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 2090,
    "end": 2096
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 2096,
    "end": 2097
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2097,
    "end": 2098
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 2099,
    "end": 2102
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2103,
    "end": 2104
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2104,
    "end": 2105
  },
  {
    "type": "Keyword",
    "value": "for",
    "start": 2106,
    "end": 2109
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2110,
    "end": 2111
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 2111,
    "end": 2114
  },
  {
    "type": "Identifier",
    "value": "sx",
    "start": 2115,
    "end": 2117
  },
  {
    "type": "Keyword",
    "value": "in",
    "start": 2118,
    "end": 2120
  },
  {
    "type": "Identifier",
    "value": "sobj",
    "start": 2121,
    "end": 2125
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2125,
    "end": 2126
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2127,
    "end": 2128
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2133,
    "end": 2134
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2134,
    "end": 2135
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2135,
    "end": 2136
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 2137,
    "end": 2139
  },
  {
    "type": "Identifier",
    "value": "sobj",
    "start": 2140,
    "end": 2144
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 2144,
    "end": 2145
  },
  {
    "type": "Identifier",
    "value": "sx",
    "start": 2145,
    "end": 2147
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 2147,
    "end": 2148
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2148,
    "end": 2149
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2149,
    "end": 2150
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2151,
    "end": 2152
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 2153,
    "end": 2160
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 2161,
    "end": 2166
  },
  {
    "type": "Identifier",
    "value": "iobj",
    "start": 2167,
    "end": 2171
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2171,
    "end": 2172
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2173,
    "end": 2174
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 2175,
    "end": 2176
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2176,
    "end": 2177
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2177,
    "end": 2178
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 2179,
    "end": 2185
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 2185,
    "end": 2186
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2186,
    "end": 2187
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 2188,
    "end": 2191
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2192,
    "end": 2193
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2193,
    "end": 2194
  },
  {
    "type": "Keyword",
    "value": "for",
    "start": 2195,
    "end": 2198
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2199,
    "end": 2200
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 2200,
    "end": 2203
  },
  {
    "type": "Identifier",
    "value": "ix",
    "start": 2204,
    "end": 2206
  },
  {
    "type": "Keyword",
    "value": "in",
    "start": 2207,
    "end": 2209
  },
  {
    "type": "Identifier",
    "value": "iobj",
    "start": 2210,
    "end": 2214
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2214,
    "end": 2215
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2216,
    "end": 2217
  },
  {
    "type": "Punctuator",
    "value": "(",
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
    "type": "Punctuator",
    "value": ")",
    "start": 2224,
    "end": 2225
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 2226,
    "end": 2228
  },
  {
    "type": "Identifier",
    "value": "iobj",
    "start": 2229,
    "end": 2233
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 2233,
    "end": 2234
  },
  {
    "type": "Identifier",
    "value": "ix",
    "start": 2234,
    "end": 2236
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 2236,
    "end": 2237
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2237,
    "end": 2238
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2238,
    "end": 2239
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2240,
    "end": 2241
  }
]
```
