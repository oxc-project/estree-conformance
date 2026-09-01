__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
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
        "type": "ArrayExpression",
        "elements": [],
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
                "start": 84,
                "end": 85
              },
              "operator": "==",
              "right": {
                "type": "Literal",
                "value": 1,
                "raw": "1",
                "start": 89,
                "end": 90
              },
              "start": 84,
              "end": 90
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "BreakStatement",
                  "label": null,
                  "start": 102,
                  "end": 108
                }
              ],
              "start": 92,
              "end": 114
            },
            "alternate": null,
            "start": 80,
            "end": 114
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
                "start": 123,
                "end": 124
              },
              "operator": "==",
              "right": {
                "type": "Literal",
                "value": 2,
                "raw": "2",
                "start": 128,
                "end": 129
              },
              "start": 123,
              "end": 129
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ContinueStatement",
                  "label": null,
                  "start": 141,
                  "end": 150
                }
              ],
              "start": 131,
              "end": 156
            },
            "alternate": null,
            "start": 119,
            "end": 156
          }
        ],
        "start": 29,
        "end": 158
      },
      "start": 11,
      "end": 158
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
              "start": 169,
              "end": 170
            },
            "init": null,
            "definite": false,
            "start": 169,
            "end": 170
          }
        ],
        "declare": false,
        "start": 165,
        "end": 170
      },
      "right": {
        "type": "ArrayExpression",
        "elements": [],
        "start": 174,
        "end": 176
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
                      "start": 205,
                      "end": 206
                    },
                    "start": 198,
                    "end": 206
                  }
                ],
                "start": 196,
                "end": 207
              },
              "expression": false,
              "start": 185,
              "end": 207
            },
            "directive": null,
            "start": 184,
            "end": 209
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
                "start": 221,
                "end": 222
              },
              "id": null,
              "generator": false,
              "start": 215,
              "end": 222
            },
            "directive": null,
            "start": 214,
            "end": 224
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
                "start": 233,
                "end": 234
              },
              "operator": "==",
              "right": {
                "type": "Literal",
                "value": "1",
                "raw": "\"1\"",
                "start": 238,
                "end": 241
              },
              "start": 233,
              "end": 241
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "BreakStatement",
                  "label": null,
                  "start": 253,
                  "end": 259
                }
              ],
              "start": 243,
              "end": 265
            },
            "alternate": null,
            "start": 229,
            "end": 265
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
                "start": 274,
                "end": 275
              },
              "operator": "==",
              "right": {
                "type": "Literal",
                "value": "2",
                "raw": "\"2\"",
                "start": 279,
                "end": 282
              },
              "start": 274,
              "end": 282
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ContinueStatement",
                  "label": null,
                  "start": 294,
                  "end": 303
                }
              ],
              "start": 284,
              "end": 309
            },
            "alternate": null,
            "start": 270,
            "end": 309
          }
        ],
        "start": 178,
        "end": 311
      },
      "start": 160,
      "end": 311
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
              "start": 323,
              "end": 324
            },
            "init": {
              "type": "Literal",
              "value": 0,
              "raw": "0",
              "start": 327,
              "end": 328
            },
            "definite": false,
            "start": 323,
            "end": 328
          }
        ],
        "declare": false,
        "start": 319,
        "end": 328
      },
      "test": {
        "type": "BinaryExpression",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": null,
          "start": 330,
          "end": 331
        },
        "operator": "<",
        "right": {
          "type": "Literal",
          "value": 1,
          "raw": "1",
          "start": 334,
          "end": 335
        },
        "start": 330,
        "end": 335
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
          "start": 339,
          "end": 340
        },
        "start": 337,
        "end": 340
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
                      "start": 369,
                      "end": 370
                    },
                    "start": 362,
                    "end": 370
                  }
                ],
                "start": 360,
                "end": 371
              },
              "expression": false,
              "start": 349,
              "end": 371
            },
            "directive": null,
            "start": 348,
            "end": 373
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
                "start": 385,
                "end": 386
              },
              "id": null,
              "generator": false,
              "start": 379,
              "end": 386
            },
            "directive": null,
            "start": 378,
            "end": 388
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
                "start": 397,
                "end": 398
              },
              "operator": "==",
              "right": {
                "type": "Literal",
                "value": 1,
                "raw": "1",
                "start": 402,
                "end": 403
              },
              "start": 397,
              "end": 403
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "BreakStatement",
                  "label": null,
                  "start": 415,
                  "end": 421
                }
              ],
              "start": 405,
              "end": 427
            },
            "alternate": null,
            "start": 393,
            "end": 427
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
                "start": 436,
                "end": 437
              },
              "operator": "==",
              "right": {
                "type": "Literal",
                "value": 2,
                "raw": "2",
                "start": 441,
                "end": 442
              },
              "start": 436,
              "end": 442
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ContinueStatement",
                  "label": null,
                  "start": 454,
                  "end": 463
                }
              ],
              "start": 444,
              "end": 469
            },
            "alternate": null,
            "start": 432,
            "end": 469
          }
        ],
        "start": 342,
        "end": 471
      },
      "start": 314,
      "end": 471
    },
    {
      "type": "WhileStatement",
      "test": {
        "type": "BinaryExpression",
        "left": {
          "type": "Literal",
          "value": 1,
          "raw": "1",
          "start": 480,
          "end": 481
        },
        "operator": "===",
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
                  "start": 499,
                  "end": 500
                },
                "init": null,
                "definite": false,
                "start": 499,
                "end": 500
              }
            ],
            "declare": false,
            "start": 495,
            "end": 501
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
                      "start": 527,
                      "end": 528
                    },
                    "start": 520,
                    "end": 528
                  }
                ],
                "start": 518,
                "end": 529
              },
              "expression": false,
              "start": 507,
              "end": 529
            },
            "directive": null,
            "start": 506,
            "end": 531
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
                "start": 543,
                "end": 544
              },
              "id": null,
              "generator": false,
              "start": 537,
              "end": 544
            },
            "directive": null,
            "start": 536,
            "end": 546
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
                "start": 555,
                "end": 556
              },
              "operator": "==",
              "right": {
                "type": "Literal",
                "value": 1,
                "raw": "1",
                "start": 560,
                "end": 561
              },
              "start": 555,
              "end": 561
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "BreakStatement",
                  "label": null,
                  "start": 573,
                  "end": 579
                }
              ],
              "start": 563,
              "end": 585
            },
            "alternate": null,
            "start": 551,
            "end": 585
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
                "start": 594,
                "end": 595
              },
              "operator": "==",
              "right": {
                "type": "Literal",
                "value": 2,
                "raw": "2",
                "start": 599,
                "end": 600
              },
              "start": 594,
              "end": 600
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ContinueStatement",
                  "label": null,
                  "start": 612,
                  "end": 621
                }
              ],
              "start": 602,
              "end": 627
            },
            "alternate": null,
            "start": 590,
            "end": 627
          }
        ],
        "start": 489,
        "end": 629
      },
      "start": 473,
      "end": 629
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
                  "start": 644,
                  "end": 645
                },
                "init": null,
                "definite": false,
                "start": 644,
                "end": 645
              }
            ],
            "declare": false,
            "start": 640,
            "end": 646
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
                      "start": 672,
                      "end": 673
                    },
                    "start": 665,
                    "end": 673
                  }
                ],
                "start": 663,
                "end": 674
              },
              "expression": false,
              "start": 652,
              "end": 674
            },
            "directive": null,
            "start": 651,
            "end": 676
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
                "start": 688,
                "end": 689
              },
              "id": null,
              "generator": false,
              "start": 682,
              "end": 689
            },
            "directive": null,
            "start": 681,
            "end": 691
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
                "start": 700,
                "end": 701
              },
              "operator": "==",
              "right": {
                "type": "Literal",
                "value": 1,
                "raw": "1",
                "start": 705,
                "end": 706
              },
              "start": 700,
              "end": 706
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "BreakStatement",
                  "label": null,
                  "start": 718,
                  "end": 724
                }
              ],
              "start": 708,
              "end": 730
            },
            "alternate": null,
            "start": 696,
            "end": 730
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
                "start": 739,
                "end": 740
              },
              "operator": "==",
              "right": {
                "type": "Literal",
                "value": 2,
                "raw": "2",
                "start": 744,
                "end": 745
              },
              "start": 739,
              "end": 745
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ContinueStatement",
                  "label": null,
                  "start": 757,
                  "end": 766
                }
              ],
              "start": 747,
              "end": 772
            },
            "alternate": null,
            "start": 735,
            "end": 772
          }
        ],
        "start": 634,
        "end": 774
      },
      "test": {
        "type": "BinaryExpression",
        "left": {
          "type": "Literal",
          "value": 1,
          "raw": "1",
          "start": 782,
          "end": 783
        },
        "operator": "===",
        "right": {
          "type": "Literal",
          "value": 1,
          "raw": "1",
          "start": 788,
          "end": 789
        },
        "start": 782,
        "end": 789
      },
      "start": 631,
      "end": 790
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
              "start": 801,
              "end": 802
            },
            "init": {
              "type": "Literal",
              "value": 0,
              "raw": "0",
              "start": 805,
              "end": 806
            },
            "definite": false,
            "start": 801,
            "end": 806
          }
        ],
        "declare": false,
        "start": 797,
        "end": 806
      },
      "test": {
        "type": "BinaryExpression",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "y",
          "optional": false,
          "typeAnnotation": null,
          "start": 808,
          "end": 809
        },
        "operator": "<",
        "right": {
          "type": "Literal",
          "value": 1,
          "raw": "1",
          "start": 812,
          "end": 813
        },
        "start": 808,
        "end": 813
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
          "start": 817,
          "end": 818
        },
        "start": 815,
        "end": 818
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
                  "start": 830,
                  "end": 831
                },
                "init": {
                  "type": "Literal",
                  "value": 1,
                  "raw": "1",
                  "start": 834,
                  "end": 835
                },
                "definite": false,
                "start": 830,
                "end": 835
              }
            ],
            "declare": false,
            "start": 826,
            "end": 836
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
                      "start": 862,
                      "end": 863
                    },
                    "start": 855,
                    "end": 863
                  }
                ],
                "start": 853,
                "end": 864
              },
              "expression": false,
              "start": 842,
              "end": 864
            },
            "directive": null,
            "start": 841,
            "end": 866
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
                "start": 878,
                "end": 879
              },
              "id": null,
              "generator": false,
              "start": 872,
              "end": 879
            },
            "directive": null,
            "start": 871,
            "end": 881
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
                "start": 890,
                "end": 891
              },
              "operator": "==",
              "right": {
                "type": "Literal",
                "value": 1,
                "raw": "1",
                "start": 895,
                "end": 896
              },
              "start": 890,
              "end": 896
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "BreakStatement",
                  "label": null,
                  "start": 908,
                  "end": 914
                }
              ],
              "start": 898,
              "end": 920
            },
            "alternate": null,
            "start": 886,
            "end": 920
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
                "start": 929,
                "end": 930
              },
              "operator": "==",
              "right": {
                "type": "Literal",
                "value": 2,
                "raw": "2",
                "start": 934,
                "end": 935
              },
              "start": 929,
              "end": 935
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ContinueStatement",
                  "label": null,
                  "start": 947,
                  "end": 956
                }
              ],
              "start": 937,
              "end": 962
            },
            "alternate": null,
            "start": 925,
            "end": 962
          }
        ],
        "start": 820,
        "end": 964
      },
      "start": 792,
      "end": 964
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
              "start": 975,
              "end": 976
            },
            "init": {
              "type": "Literal",
              "value": 0,
              "raw": "0",
              "start": 979,
              "end": 980
            },
            "definite": false,
            "start": 975,
            "end": 980
          },
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "y",
              "optional": false,
              "typeAnnotation": null,
              "start": 982,
              "end": 983
            },
            "init": {
              "type": "Literal",
              "value": 1,
              "raw": "1",
              "start": 986,
              "end": 987
            },
            "definite": false,
            "start": 982,
            "end": 987
          }
        ],
        "declare": false,
        "start": 971,
        "end": 987
      },
      "test": {
        "type": "BinaryExpression",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": null,
          "start": 989,
          "end": 990
        },
        "operator": "<",
        "right": {
          "type": "Literal",
          "value": 1,
          "raw": "1",
          "start": 993,
          "end": 994
        },
        "start": 989,
        "end": 994
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
          "start": 998,
          "end": 999
        },
        "start": 996,
        "end": 999
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
                        "start": 1028,
                        "end": 1029
                      },
                      "operator": "+",
                      "right": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "y",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1032,
                        "end": 1033
                      },
                      "start": 1028,
                      "end": 1033
                    },
                    "start": 1021,
                    "end": 1033
                  }
                ],
                "start": 1019,
                "end": 1034
              },
              "expression": false,
              "start": 1008,
              "end": 1034
            },
            "directive": null,
            "start": 1007,
            "end": 1036
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
                  "start": 1048,
                  "end": 1049
                },
                "operator": "+",
                "right": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "y",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1052,
                  "end": 1053
                },
                "start": 1048,
                "end": 1053
              },
              "id": null,
              "generator": false,
              "start": 1042,
              "end": 1053
            },
            "directive": null,
            "start": 1041,
            "end": 1055
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
                "start": 1064,
                "end": 1065
              },
              "operator": "==",
              "right": {
                "type": "Literal",
                "value": 1,
                "raw": "1",
                "start": 1069,
                "end": 1070
              },
              "start": 1064,
              "end": 1070
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "BreakStatement",
                  "label": null,
                  "start": 1082,
                  "end": 1088
                }
              ],
              "start": 1072,
              "end": 1094
            },
            "alternate": null,
            "start": 1060,
            "end": 1094
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
                "start": 1103,
                "end": 1104
              },
              "operator": "==",
              "right": {
                "type": "Literal",
                "value": 2,
                "raw": "2",
                "start": 1108,
                "end": 1109
              },
              "start": 1103,
              "end": 1109
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ContinueStatement",
                  "label": null,
                  "start": 1121,
                  "end": 1130
                }
              ],
              "start": 1111,
              "end": 1136
            },
            "alternate": null,
            "start": 1099,
            "end": 1136
          }
        ],
        "start": 1001,
        "end": 1138
      },
      "start": 966,
      "end": 1138
    },
    {
      "type": "WhileStatement",
      "test": {
        "type": "BinaryExpression",
        "left": {
          "type": "Literal",
          "value": 1,
          "raw": "1",
          "start": 1147,
          "end": 1148
        },
        "operator": "===",
        "right": {
          "type": "Literal",
          "value": 1,
          "raw": "1",
          "start": 1153,
          "end": 1154
        },
        "start": 1147,
        "end": 1154
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
                  "start": 1166,
                  "end": 1167
                },
                "init": null,
                "definite": false,
                "start": 1166,
                "end": 1167
              },
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "y",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1169,
                  "end": 1170
                },
                "init": null,
                "definite": false,
                "start": 1169,
                "end": 1170
              }
            ],
            "declare": false,
            "start": 1162,
            "end": 1171
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
                        "start": 1197,
                        "end": 1198
                      },
                      "operator": "+",
                      "right": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "y",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1201,
                        "end": 1202
                      },
                      "start": 1197,
                      "end": 1202
                    },
                    "start": 1190,
                    "end": 1202
                  }
                ],
                "start": 1188,
                "end": 1203
              },
              "expression": false,
              "start": 1177,
              "end": 1203
            },
            "directive": null,
            "start": 1176,
            "end": 1205
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
                  "start": 1217,
                  "end": 1218
                },
                "operator": "+",
                "right": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "y",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1221,
                  "end": 1222
                },
                "start": 1217,
                "end": 1222
              },
              "id": null,
              "generator": false,
              "start": 1211,
              "end": 1222
            },
            "directive": null,
            "start": 1210,
            "end": 1224
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
                "start": 1233,
                "end": 1234
              },
              "operator": "==",
              "right": {
                "type": "Literal",
                "value": 1,
                "raw": "1",
                "start": 1238,
                "end": 1239
              },
              "start": 1233,
              "end": 1239
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "BreakStatement",
                  "label": null,
                  "start": 1251,
                  "end": 1257
                }
              ],
              "start": 1241,
              "end": 1263
            },
            "alternate": null,
            "start": 1229,
            "end": 1263
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
                "start": 1272,
                "end": 1273
              },
              "operator": "==",
              "right": {
                "type": "Literal",
                "value": 2,
                "raw": "2",
                "start": 1277,
                "end": 1278
              },
              "start": 1272,
              "end": 1278
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ContinueStatement",
                  "label": null,
                  "start": 1290,
                  "end": 1299
                }
              ],
              "start": 1280,
              "end": 1305
            },
            "alternate": null,
            "start": 1268,
            "end": 1305
          }
        ],
        "start": 1156,
        "end": 1307
      },
      "start": 1140,
      "end": 1307
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
                  "start": 1322,
                  "end": 1323
                },
                "init": null,
                "definite": false,
                "start": 1322,
                "end": 1323
              },
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "y",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1325,
                  "end": 1326
                },
                "init": null,
                "definite": false,
                "start": 1325,
                "end": 1326
              }
            ],
            "declare": false,
            "start": 1318,
            "end": 1327
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
                        "start": 1353,
                        "end": 1354
                      },
                      "operator": "+",
                      "right": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "y",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1357,
                        "end": 1358
                      },
                      "start": 1353,
                      "end": 1358
                    },
                    "start": 1346,
                    "end": 1358
                  }
                ],
                "start": 1344,
                "end": 1359
              },
              "expression": false,
              "start": 1333,
              "end": 1359
            },
            "directive": null,
            "start": 1332,
            "end": 1361
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
                  "start": 1373,
                  "end": 1374
                },
                "operator": "+",
                "right": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "y",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1377,
                  "end": 1378
                },
                "start": 1373,
                "end": 1378
              },
              "id": null,
              "generator": false,
              "start": 1367,
              "end": 1378
            },
            "directive": null,
            "start": 1366,
            "end": 1380
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
                "start": 1389,
                "end": 1390
              },
              "operator": "==",
              "right": {
                "type": "Literal",
                "value": 1,
                "raw": "1",
                "start": 1394,
                "end": 1395
              },
              "start": 1389,
              "end": 1395
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "BreakStatement",
                  "label": null,
                  "start": 1407,
                  "end": 1413
                }
              ],
              "start": 1397,
              "end": 1419
            },
            "alternate": null,
            "start": 1385,
            "end": 1419
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
                "start": 1428,
                "end": 1429
              },
              "operator": "==",
              "right": {
                "type": "Literal",
                "value": 2,
                "raw": "2",
                "start": 1433,
                "end": 1434
              },
              "start": 1428,
              "end": 1434
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ContinueStatement",
                  "label": null,
                  "start": 1446,
                  "end": 1455
                }
              ],
              "start": 1436,
              "end": 1461
            },
            "alternate": null,
            "start": 1424,
            "end": 1461
          }
        ],
        "start": 1312,
        "end": 1463
      },
      "test": {
        "type": "BinaryExpression",
        "left": {
          "type": "Literal",
          "value": 1,
          "raw": "1",
          "start": 1471,
          "end": 1472
        },
        "operator": "===",
        "right": {
          "type": "Literal",
          "value": 1,
          "raw": "1",
          "start": 1477,
          "end": 1478
        },
        "start": 1471,
        "end": 1478
      },
      "start": 1309,
      "end": 1479
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
              "start": 1490,
              "end": 1491
            },
            "init": {
              "type": "Literal",
              "value": 0,
              "raw": "0",
              "start": 1494,
              "end": 1495
            },
            "definite": false,
            "start": 1490,
            "end": 1495
          }
        ],
        "declare": false,
        "start": 1486,
        "end": 1495
      },
      "test": {
        "type": "BinaryExpression",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "y",
          "optional": false,
          "typeAnnotation": null,
          "start": 1497,
          "end": 1498
        },
        "operator": "<",
        "right": {
          "type": "Literal",
          "value": 1,
          "raw": "1",
          "start": 1501,
          "end": 1502
        },
        "start": 1497,
        "end": 1502
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
          "start": 1506,
          "end": 1507
        },
        "start": 1504,
        "end": 1507
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
                  "start": 1519,
                  "end": 1520
                },
                "init": {
                  "type": "Literal",
                  "value": 1,
                  "raw": "1",
                  "start": 1523,
                  "end": 1524
                },
                "definite": false,
                "start": 1519,
                "end": 1524
              }
            ],
            "declare": false,
            "start": 1515,
            "end": 1525
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
                        "start": 1551,
                        "end": 1552
                      },
                      "operator": "+",
                      "right": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "y",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1555,
                        "end": 1556
                      },
                      "start": 1551,
                      "end": 1556
                    },
                    "start": 1544,
                    "end": 1556
                  }
                ],
                "start": 1542,
                "end": 1557
              },
              "expression": false,
              "start": 1531,
              "end": 1557
            },
            "directive": null,
            "start": 1530,
            "end": 1559
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
                  "start": 1571,
                  "end": 1572
                },
                "operator": "+",
                "right": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "y",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1575,
                  "end": 1576
                },
                "start": 1571,
                "end": 1576
              },
              "id": null,
              "generator": false,
              "start": 1565,
              "end": 1576
            },
            "directive": null,
            "start": 1564,
            "end": 1578
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
                "start": 1587,
                "end": 1588
              },
              "operator": "==",
              "right": {
                "type": "Literal",
                "value": 1,
                "raw": "1",
                "start": 1592,
                "end": 1593
              },
              "start": 1587,
              "end": 1593
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "BreakStatement",
                  "label": null,
                  "start": 1605,
                  "end": 1611
                }
              ],
              "start": 1595,
              "end": 1617
            },
            "alternate": null,
            "start": 1583,
            "end": 1617
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
                "start": 1626,
                "end": 1627
              },
              "operator": "==",
              "right": {
                "type": "Literal",
                "value": 2,
                "raw": "2",
                "start": 1631,
                "end": 1632
              },
              "start": 1626,
              "end": 1632
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ContinueStatement",
                  "label": null,
                  "start": 1644,
                  "end": 1653
                }
              ],
              "start": 1634,
              "end": 1659
            },
            "alternate": null,
            "start": 1622,
            "end": 1659
          }
        ],
        "start": 1509,
        "end": 1661
      },
      "start": 1481,
      "end": 1661
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
              "start": 1688,
              "end": 1689
            },
            "init": null,
            "definite": false,
            "start": 1688,
            "end": 1689
          }
        ],
        "declare": false,
        "start": 1682,
        "end": 1689
      },
      "right": {
        "type": "ArrayExpression",
        "elements": [],
        "start": 1693,
        "end": 1695
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
                      "start": 1724,
                      "end": 1725
                    },
                    "start": 1717,
                    "end": 1725
                  }
                ],
                "start": 1715,
                "end": 1726
              },
              "expression": false,
              "start": 1704,
              "end": 1726
            },
            "directive": null,
            "start": 1703,
            "end": 1728
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
                "start": 1740,
                "end": 1741
              },
              "id": null,
              "generator": false,
              "start": 1734,
              "end": 1741
            },
            "directive": null,
            "start": 1733,
            "end": 1743
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
                "start": 1752,
                "end": 1753
              },
              "operator": "==",
              "right": {
                "type": "Literal",
                "value": 1,
                "raw": "1",
                "start": 1757,
                "end": 1758
              },
              "start": 1752,
              "end": 1758
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "BreakStatement",
                  "label": null,
                  "start": 1770,
                  "end": 1776
                }
              ],
              "start": 1760,
              "end": 1782
            },
            "alternate": null,
            "start": 1748,
            "end": 1782
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
                "start": 1791,
                "end": 1792
              },
              "operator": "==",
              "right": {
                "type": "Literal",
                "value": 2,
                "raw": "2",
                "start": 1796,
                "end": 1797
              },
              "start": 1791,
              "end": 1797
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ContinueStatement",
                  "label": null,
                  "start": 1809,
                  "end": 1818
                }
              ],
              "start": 1799,
              "end": 1824
            },
            "alternate": null,
            "start": 1787,
            "end": 1824
          }
        ],
        "start": 1697,
        "end": 1826
      },
      "start": 1677,
      "end": 1826
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
              "start": 1839,
              "end": 1840
            },
            "init": null,
            "definite": false,
            "start": 1839,
            "end": 1840
          }
        ],
        "declare": false,
        "start": 1833,
        "end": 1840
      },
      "right": {
        "type": "ArrayExpression",
        "elements": [],
        "start": 1844,
        "end": 1846
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
                      "start": 1875,
                      "end": 1876
                    },
                    "start": 1868,
                    "end": 1876
                  }
                ],
                "start": 1866,
                "end": 1877
              },
              "expression": false,
              "start": 1855,
              "end": 1877
            },
            "directive": null,
            "start": 1854,
            "end": 1879
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
                "start": 1891,
                "end": 1892
              },
              "id": null,
              "generator": false,
              "start": 1885,
              "end": 1892
            },
            "directive": null,
            "start": 1884,
            "end": 1894
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
                "start": 1903,
                "end": 1904
              },
              "operator": "==",
              "right": {
                "type": "Literal",
                "value": "1",
                "raw": "\"1\"",
                "start": 1908,
                "end": 1911
              },
              "start": 1903,
              "end": 1911
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "BreakStatement",
                  "label": null,
                  "start": 1923,
                  "end": 1929
                }
              ],
              "start": 1913,
              "end": 1935
            },
            "alternate": null,
            "start": 1899,
            "end": 1935
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
                "start": 1944,
                "end": 1945
              },
              "operator": "==",
              "right": {
                "type": "Literal",
                "value": "2",
                "raw": "\"2\"",
                "start": 1949,
                "end": 1952
              },
              "start": 1944,
              "end": 1952
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ContinueStatement",
                  "label": null,
                  "start": 1964,
                  "end": 1973
                }
              ],
              "start": 1954,
              "end": 1979
            },
            "alternate": null,
            "start": 1940,
            "end": 1979
          }
        ],
        "start": 1848,
        "end": 1981
      },
      "start": 1828,
      "end": 1981
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
              "start": 1995,
              "end": 1996
            },
            "init": {
              "type": "Literal",
              "value": 0,
              "raw": "0",
              "start": 1999,
              "end": 2000
            },
            "definite": false,
            "start": 1995,
            "end": 2000
          }
        ],
        "declare": false,
        "start": 1989,
        "end": 2000
      },
      "test": {
        "type": "BinaryExpression",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": null,
          "start": 2002,
          "end": 2003
        },
        "operator": "<",
        "right": {
          "type": "Literal",
          "value": 1,
          "raw": "1",
          "start": 2006,
          "end": 2007
        },
        "start": 2002,
        "end": 2007
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
                      "start": 2037,
                      "end": 2038
                    },
                    "start": 2030,
                    "end": 2038
                  }
                ],
                "start": 2028,
                "end": 2039
              },
              "expression": false,
              "start": 2017,
              "end": 2039
            },
            "directive": null,
            "start": 2016,
            "end": 2041
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
                "start": 2053,
                "end": 2054
              },
              "id": null,
              "generator": false,
              "start": 2047,
              "end": 2054
            },
            "directive": null,
            "start": 2046,
            "end": 2056
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
                "start": 2065,
                "end": 2066
              },
              "operator": "==",
              "right": {
                "type": "Literal",
                "value": 1,
                "raw": "1",
                "start": 2070,
                "end": 2071
              },
              "start": 2065,
              "end": 2071
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "BreakStatement",
                  "label": null,
                  "start": 2083,
                  "end": 2089
                }
              ],
              "start": 2073,
              "end": 2095
            },
            "alternate": null,
            "start": 2061,
            "end": 2095
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
                "start": 2104,
                "end": 2105
              },
              "operator": "==",
              "right": {
                "type": "Literal",
                "value": 2,
                "raw": "2",
                "start": 2109,
                "end": 2110
              },
              "start": 2104,
              "end": 2110
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ContinueStatement",
                  "label": null,
                  "start": 2122,
                  "end": 2131
                }
              ],
              "start": 2112,
              "end": 2137
            },
            "alternate": null,
            "start": 2100,
            "end": 2137
          }
        ],
        "start": 2010,
        "end": 2139
      },
      "start": 1984,
      "end": 2139
    },
    {
      "type": "WhileStatement",
      "test": {
        "type": "BinaryExpression",
        "left": {
          "type": "Literal",
          "value": 1,
          "raw": "1",
          "start": 2148,
          "end": 2149
        },
        "operator": "===",
        "right": {
          "type": "Literal",
          "value": 1,
          "raw": "1",
          "start": 2154,
          "end": 2155
        },
        "start": 2148,
        "end": 2155
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
                  "start": 2169,
                  "end": 2170
                },
                "init": {
                  "type": "Literal",
                  "value": 1,
                  "raw": "1",
                  "start": 2173,
                  "end": 2174
                },
                "definite": false,
                "start": 2169,
                "end": 2174
              }
            ],
            "declare": false,
            "start": 2163,
            "end": 2175
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
                      "start": 2201,
                      "end": 2202
                    },
                    "start": 2194,
                    "end": 2202
                  }
                ],
                "start": 2192,
                "end": 2203
              },
              "expression": false,
              "start": 2181,
              "end": 2203
            },
            "directive": null,
            "start": 2180,
            "end": 2205
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
                "start": 2217,
                "end": 2218
              },
              "id": null,
              "generator": false,
              "start": 2211,
              "end": 2218
            },
            "directive": null,
            "start": 2210,
            "end": 2220
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
                "start": 2229,
                "end": 2230
              },
              "operator": "==",
              "right": {
                "type": "Literal",
                "value": 1,
                "raw": "1",
                "start": 2234,
                "end": 2235
              },
              "start": 2229,
              "end": 2235
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "BreakStatement",
                  "label": null,
                  "start": 2247,
                  "end": 2253
                }
              ],
              "start": 2237,
              "end": 2259
            },
            "alternate": null,
            "start": 2225,
            "end": 2259
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
                "start": 2268,
                "end": 2269
              },
              "operator": "==",
              "right": {
                "type": "Literal",
                "value": 2,
                "raw": "2",
                "start": 2273,
                "end": 2274
              },
              "start": 2268,
              "end": 2274
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ContinueStatement",
                  "label": null,
                  "start": 2286,
                  "end": 2295
                }
              ],
              "start": 2276,
              "end": 2301
            },
            "alternate": null,
            "start": 2264,
            "end": 2301
          }
        ],
        "start": 2157,
        "end": 2303
      },
      "start": 2141,
      "end": 2303
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
                  "start": 2320,
                  "end": 2321
                },
                "init": {
                  "type": "Literal",
                  "value": 1,
                  "raw": "1",
                  "start": 2324,
                  "end": 2325
                },
                "definite": false,
                "start": 2320,
                "end": 2325
              }
            ],
            "declare": false,
            "start": 2314,
            "end": 2326
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
                      "start": 2352,
                      "end": 2353
                    },
                    "start": 2345,
                    "end": 2353
                  }
                ],
                "start": 2343,
                "end": 2354
              },
              "expression": false,
              "start": 2332,
              "end": 2354
            },
            "directive": null,
            "start": 2331,
            "end": 2356
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
                "start": 2368,
                "end": 2369
              },
              "id": null,
              "generator": false,
              "start": 2362,
              "end": 2369
            },
            "directive": null,
            "start": 2361,
            "end": 2371
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
                "start": 2380,
                "end": 2381
              },
              "operator": "==",
              "right": {
                "type": "Literal",
                "value": 1,
                "raw": "1",
                "start": 2385,
                "end": 2386
              },
              "start": 2380,
              "end": 2386
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "BreakStatement",
                  "label": null,
                  "start": 2398,
                  "end": 2404
                }
              ],
              "start": 2388,
              "end": 2410
            },
            "alternate": null,
            "start": 2376,
            "end": 2410
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
                "start": 2419,
                "end": 2420
              },
              "operator": "==",
              "right": {
                "type": "Literal",
                "value": 2,
                "raw": "2",
                "start": 2424,
                "end": 2425
              },
              "start": 2419,
              "end": 2425
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ContinueStatement",
                  "label": null,
                  "start": 2437,
                  "end": 2446
                }
              ],
              "start": 2427,
              "end": 2452
            },
            "alternate": null,
            "start": 2415,
            "end": 2452
          }
        ],
        "start": 2308,
        "end": 2454
      },
      "test": {
        "type": "BinaryExpression",
        "left": {
          "type": "Literal",
          "value": 1,
          "raw": "1",
          "start": 2462,
          "end": 2463
        },
        "operator": "===",
        "right": {
          "type": "Literal",
          "value": 1,
          "raw": "1",
          "start": 2468,
          "end": 2469
        },
        "start": 2462,
        "end": 2469
      },
      "start": 2305,
      "end": 2470
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
              "start": 2483,
              "end": 2484
            },
            "init": {
              "type": "Literal",
              "value": 0,
              "raw": "0",
              "start": 2487,
              "end": 2488
            },
            "definite": false,
            "start": 2483,
            "end": 2488
          }
        ],
        "declare": false,
        "start": 2477,
        "end": 2488
      },
      "test": {
        "type": "BinaryExpression",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "y",
          "optional": false,
          "typeAnnotation": null,
          "start": 2490,
          "end": 2491
        },
        "operator": "<",
        "right": {
          "type": "Literal",
          "value": 1,
          "raw": "1",
          "start": 2494,
          "end": 2495
        },
        "start": 2490,
        "end": 2495
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
                  "start": 2510,
                  "end": 2511
                },
                "init": {
                  "type": "Literal",
                  "value": 1,
                  "raw": "1",
                  "start": 2514,
                  "end": 2515
                },
                "definite": false,
                "start": 2510,
                "end": 2515
              }
            ],
            "declare": false,
            "start": 2504,
            "end": 2516
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
                      "start": 2542,
                      "end": 2543
                    },
                    "start": 2535,
                    "end": 2543
                  }
                ],
                "start": 2533,
                "end": 2544
              },
              "expression": false,
              "start": 2522,
              "end": 2544
            },
            "directive": null,
            "start": 2521,
            "end": 2546
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
                "start": 2558,
                "end": 2559
              },
              "id": null,
              "generator": false,
              "start": 2552,
              "end": 2559
            },
            "directive": null,
            "start": 2551,
            "end": 2561
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
                "start": 2570,
                "end": 2571
              },
              "operator": "==",
              "right": {
                "type": "Literal",
                "value": 1,
                "raw": "1",
                "start": 2575,
                "end": 2576
              },
              "start": 2570,
              "end": 2576
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "BreakStatement",
                  "label": null,
                  "start": 2588,
                  "end": 2594
                }
              ],
              "start": 2578,
              "end": 2600
            },
            "alternate": null,
            "start": 2566,
            "end": 2600
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
                "start": 2609,
                "end": 2610
              },
              "operator": "==",
              "right": {
                "type": "Literal",
                "value": 2,
                "raw": "2",
                "start": 2614,
                "end": 2615
              },
              "start": 2609,
              "end": 2615
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ContinueStatement",
                  "label": null,
                  "start": 2627,
                  "end": 2636
                }
              ],
              "start": 2617,
              "end": 2642
            },
            "alternate": null,
            "start": 2605,
            "end": 2642
          }
        ],
        "start": 2498,
        "end": 2644
      },
      "start": 2472,
      "end": 2644
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
              "start": 2657,
              "end": 2658
            },
            "init": {
              "type": "Literal",
              "value": 0,
              "raw": "0",
              "start": 2661,
              "end": 2662
            },
            "definite": false,
            "start": 2657,
            "end": 2662
          },
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "y",
              "optional": false,
              "typeAnnotation": null,
              "start": 2664,
              "end": 2665
            },
            "init": {
              "type": "Literal",
              "value": 1,
              "raw": "1",
              "start": 2668,
              "end": 2669
            },
            "definite": false,
            "start": 2664,
            "end": 2669
          }
        ],
        "declare": false,
        "start": 2651,
        "end": 2669
      },
      "test": {
        "type": "BinaryExpression",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": null,
          "start": 2671,
          "end": 2672
        },
        "operator": "<",
        "right": {
          "type": "Literal",
          "value": 1,
          "raw": "1",
          "start": 2675,
          "end": 2676
        },
        "start": 2671,
        "end": 2676
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
                        "start": 2706,
                        "end": 2707
                      },
                      "operator": "+",
                      "right": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "y",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2710,
                        "end": 2711
                      },
                      "start": 2706,
                      "end": 2711
                    },
                    "start": 2699,
                    "end": 2711
                  }
                ],
                "start": 2697,
                "end": 2712
              },
              "expression": false,
              "start": 2686,
              "end": 2712
            },
            "directive": null,
            "start": 2685,
            "end": 2714
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
                  "start": 2726,
                  "end": 2727
                },
                "operator": "+",
                "right": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "y",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2730,
                  "end": 2731
                },
                "start": 2726,
                "end": 2731
              },
              "id": null,
              "generator": false,
              "start": 2720,
              "end": 2731
            },
            "directive": null,
            "start": 2719,
            "end": 2733
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
                "start": 2742,
                "end": 2743
              },
              "operator": "==",
              "right": {
                "type": "Literal",
                "value": 1,
                "raw": "1",
                "start": 2747,
                "end": 2748
              },
              "start": 2742,
              "end": 2748
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "BreakStatement",
                  "label": null,
                  "start": 2760,
                  "end": 2766
                }
              ],
              "start": 2750,
              "end": 2772
            },
            "alternate": null,
            "start": 2738,
            "end": 2772
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
                "start": 2781,
                "end": 2782
              },
              "operator": "==",
              "right": {
                "type": "Literal",
                "value": 2,
                "raw": "2",
                "start": 2786,
                "end": 2787
              },
              "start": 2781,
              "end": 2787
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ContinueStatement",
                  "label": null,
                  "start": 2799,
                  "end": 2808
                }
              ],
              "start": 2789,
              "end": 2814
            },
            "alternate": null,
            "start": 2777,
            "end": 2814
          }
        ],
        "start": 2679,
        "end": 2816
      },
      "start": 2646,
      "end": 2816
    },
    {
      "type": "WhileStatement",
      "test": {
        "type": "BinaryExpression",
        "left": {
          "type": "Literal",
          "value": 1,
          "raw": "1",
          "start": 2825,
          "end": 2826
        },
        "operator": "===",
        "right": {
          "type": "Literal",
          "value": 1,
          "raw": "1",
          "start": 2831,
          "end": 2832
        },
        "start": 2825,
        "end": 2832
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
                  "start": 2846,
                  "end": 2847
                },
                "init": {
                  "type": "Literal",
                  "value": 1,
                  "raw": "1",
                  "start": 2850,
                  "end": 2851
                },
                "definite": false,
                "start": 2846,
                "end": 2851
              },
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "y",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2853,
                  "end": 2854
                },
                "init": {
                  "type": "Literal",
                  "value": 1,
                  "raw": "1",
                  "start": 2857,
                  "end": 2858
                },
                "definite": false,
                "start": 2853,
                "end": 2858
              }
            ],
            "declare": false,
            "start": 2840,
            "end": 2859
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
                        "start": 2885,
                        "end": 2886
                      },
                      "operator": "+",
                      "right": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "y",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2889,
                        "end": 2890
                      },
                      "start": 2885,
                      "end": 2890
                    },
                    "start": 2878,
                    "end": 2890
                  }
                ],
                "start": 2876,
                "end": 2891
              },
              "expression": false,
              "start": 2865,
              "end": 2891
            },
            "directive": null,
            "start": 2864,
            "end": 2893
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
                  "start": 2905,
                  "end": 2906
                },
                "operator": "+",
                "right": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "y",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2909,
                  "end": 2910
                },
                "start": 2905,
                "end": 2910
              },
              "id": null,
              "generator": false,
              "start": 2899,
              "end": 2910
            },
            "directive": null,
            "start": 2898,
            "end": 2912
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
                "start": 2921,
                "end": 2922
              },
              "operator": "==",
              "right": {
                "type": "Literal",
                "value": 1,
                "raw": "1",
                "start": 2926,
                "end": 2927
              },
              "start": 2921,
              "end": 2927
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "BreakStatement",
                  "label": null,
                  "start": 2939,
                  "end": 2945
                }
              ],
              "start": 2929,
              "end": 2951
            },
            "alternate": null,
            "start": 2917,
            "end": 2951
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
                "start": 2960,
                "end": 2961
              },
              "operator": "==",
              "right": {
                "type": "Literal",
                "value": 2,
                "raw": "2",
                "start": 2965,
                "end": 2966
              },
              "start": 2960,
              "end": 2966
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ContinueStatement",
                  "label": null,
                  "start": 2978,
                  "end": 2987
                }
              ],
              "start": 2968,
              "end": 2993
            },
            "alternate": null,
            "start": 2956,
            "end": 2993
          }
        ],
        "start": 2834,
        "end": 2995
      },
      "start": 2818,
      "end": 2995
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
                  "start": 3012,
                  "end": 3013
                },
                "init": {
                  "type": "Literal",
                  "value": 1,
                  "raw": "1",
                  "start": 3016,
                  "end": 3017
                },
                "definite": false,
                "start": 3012,
                "end": 3017
              },
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "y",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 3019,
                  "end": 3020
                },
                "init": {
                  "type": "Literal",
                  "value": 1,
                  "raw": "1",
                  "start": 3023,
                  "end": 3024
                },
                "definite": false,
                "start": 3019,
                "end": 3024
              }
            ],
            "declare": false,
            "start": 3006,
            "end": 3025
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
                        "start": 3051,
                        "end": 3052
                      },
                      "operator": "+",
                      "right": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "y",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 3055,
                        "end": 3056
                      },
                      "start": 3051,
                      "end": 3056
                    },
                    "start": 3044,
                    "end": 3056
                  }
                ],
                "start": 3042,
                "end": 3057
              },
              "expression": false,
              "start": 3031,
              "end": 3057
            },
            "directive": null,
            "start": 3030,
            "end": 3059
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
                  "start": 3071,
                  "end": 3072
                },
                "operator": "+",
                "right": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "y",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 3075,
                  "end": 3076
                },
                "start": 3071,
                "end": 3076
              },
              "id": null,
              "generator": false,
              "start": 3065,
              "end": 3076
            },
            "directive": null,
            "start": 3064,
            "end": 3078
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
                "start": 3087,
                "end": 3088
              },
              "operator": "==",
              "right": {
                "type": "Literal",
                "value": 1,
                "raw": "1",
                "start": 3092,
                "end": 3093
              },
              "start": 3087,
              "end": 3093
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "BreakStatement",
                  "label": null,
                  "start": 3105,
                  "end": 3111
                }
              ],
              "start": 3095,
              "end": 3117
            },
            "alternate": null,
            "start": 3083,
            "end": 3117
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
                "start": 3126,
                "end": 3127
              },
              "operator": "==",
              "right": {
                "type": "Literal",
                "value": 2,
                "raw": "2",
                "start": 3131,
                "end": 3132
              },
              "start": 3126,
              "end": 3132
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ContinueStatement",
                  "label": null,
                  "start": 3144,
                  "end": 3153
                }
              ],
              "start": 3134,
              "end": 3159
            },
            "alternate": null,
            "start": 3122,
            "end": 3159
          }
        ],
        "start": 3000,
        "end": 3161
      },
      "test": {
        "type": "BinaryExpression",
        "left": {
          "type": "Literal",
          "value": 1,
          "raw": "1",
          "start": 3169,
          "end": 3170
        },
        "operator": "===",
        "right": {
          "type": "Literal",
          "value": 1,
          "raw": "1",
          "start": 3175,
          "end": 3176
        },
        "start": 3169,
        "end": 3176
      },
      "start": 2997,
      "end": 3177
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
              "start": 3190,
              "end": 3191
            },
            "init": {
              "type": "Literal",
              "value": 0,
              "raw": "0",
              "start": 3194,
              "end": 3195
            },
            "definite": false,
            "start": 3190,
            "end": 3195
          }
        ],
        "declare": false,
        "start": 3184,
        "end": 3195
      },
      "test": {
        "type": "BinaryExpression",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "y",
          "optional": false,
          "typeAnnotation": null,
          "start": 3197,
          "end": 3198
        },
        "operator": "<",
        "right": {
          "type": "Literal",
          "value": 1,
          "raw": "1",
          "start": 3201,
          "end": 3202
        },
        "start": 3197,
        "end": 3202
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
                  "start": 3217,
                  "end": 3218
                },
                "init": {
                  "type": "Literal",
                  "value": 1,
                  "raw": "1",
                  "start": 3221,
                  "end": 3222
                },
                "definite": false,
                "start": 3217,
                "end": 3222
              }
            ],
            "declare": false,
            "start": 3211,
            "end": 3223
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
                        "start": 3249,
                        "end": 3250
                      },
                      "operator": "+",
                      "right": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "y",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 3253,
                        "end": 3254
                      },
                      "start": 3249,
                      "end": 3254
                    },
                    "start": 3242,
                    "end": 3254
                  }
                ],
                "start": 3240,
                "end": 3255
              },
              "expression": false,
              "start": 3229,
              "end": 3255
            },
            "directive": null,
            "start": 3228,
            "end": 3257
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
                  "start": 3269,
                  "end": 3270
                },
                "operator": "+",
                "right": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "y",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 3273,
                  "end": 3274
                },
                "start": 3269,
                "end": 3274
              },
              "id": null,
              "generator": false,
              "start": 3263,
              "end": 3274
            },
            "directive": null,
            "start": 3262,
            "end": 3276
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
                "start": 3285,
                "end": 3286
              },
              "operator": "==",
              "right": {
                "type": "Literal",
                "value": 1,
                "raw": "1",
                "start": 3290,
                "end": 3291
              },
              "start": 3285,
              "end": 3291
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "BreakStatement",
                  "label": null,
                  "start": 3303,
                  "end": 3309
                }
              ],
              "start": 3293,
              "end": 3315
            },
            "alternate": null,
            "start": 3281,
            "end": 3315
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
                "start": 3324,
                "end": 3325
              },
              "operator": "==",
              "right": {
                "type": "Literal",
                "value": 2,
                "raw": "2",
                "start": 3329,
                "end": 3330
              },
              "start": 3324,
              "end": 3330
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ContinueStatement",
                  "label": null,
                  "start": 3342,
                  "end": 3351
                }
              ],
              "start": 3332,
              "end": 3357
            },
            "alternate": null,
            "start": 3320,
            "end": 3357
          }
        ],
        "start": 3205,
        "end": 3359
      },
      "start": 3179,
      "end": 3359
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 11,
  "end": 3360
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
    "type": "Identifier",
    "value": "of",
    "start": 22,
    "end": 24
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 25,
    "end": 26
  },
  {
    "type": "Punctuator",
    "value": "]",
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
    "type": "Keyword",
    "value": "if",
    "start": 80,
    "end": 82
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 83,
    "end": 84
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 84,
    "end": 85
  },
  {
    "type": "Punctuator",
    "value": "==",
    "start": 86,
    "end": 88
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 89,
    "end": 90
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 90,
    "end": 91
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 92,
    "end": 93
  },
  {
    "type": "Keyword",
    "value": "break",
    "start": 102,
    "end": 107
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 107,
    "end": 108
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 113,
    "end": 114
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 119,
    "end": 121
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 122,
    "end": 123
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 123,
    "end": 124
  },
  {
    "type": "Punctuator",
    "value": "==",
    "start": 125,
    "end": 127
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 128,
    "end": 129
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 129,
    "end": 130
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 131,
    "end": 132
  },
  {
    "type": "Keyword",
    "value": "continue",
    "start": 141,
    "end": 149
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 149,
    "end": 150
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 155,
    "end": 156
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 157,
    "end": 158
  },
  {
    "type": "Keyword",
    "value": "for",
    "start": 160,
    "end": 163
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 164,
    "end": 165
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 165,
    "end": 168
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 169,
    "end": 170
  },
  {
    "type": "Keyword",
    "value": "in",
    "start": 171,
    "end": 173
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 174,
    "end": 175
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 175,
    "end": 176
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 176,
    "end": 177
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 178,
    "end": 179
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 184,
    "end": 185
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 185,
    "end": 193
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 193,
    "end": 194
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 194,
    "end": 195
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 196,
    "end": 197
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 198,
    "end": 204
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 205,
    "end": 206
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 206,
    "end": 207
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 207,
    "end": 208
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 208,
    "end": 209
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 214,
    "end": 215
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 215,
    "end": 216
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 216,
    "end": 217
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 218,
    "end": 220
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 221,
    "end": 222
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 222,
    "end": 223
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 223,
    "end": 224
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 229,
    "end": 231
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 232,
    "end": 233
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 233,
    "end": 234
  },
  {
    "type": "Punctuator",
    "value": "==",
    "start": 235,
    "end": 237
  },
  {
    "type": "String",
    "value": "\"1\"",
    "start": 238,
    "end": 241
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 241,
    "end": 242
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 243,
    "end": 244
  },
  {
    "type": "Keyword",
    "value": "break",
    "start": 253,
    "end": 258
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 258,
    "end": 259
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 264,
    "end": 265
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 270,
    "end": 272
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 273,
    "end": 274
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 274,
    "end": 275
  },
  {
    "type": "Punctuator",
    "value": "==",
    "start": 276,
    "end": 278
  },
  {
    "type": "String",
    "value": "\"2\"",
    "start": 279,
    "end": 282
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 282,
    "end": 283
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 284,
    "end": 285
  },
  {
    "type": "Keyword",
    "value": "continue",
    "start": 294,
    "end": 302
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 302,
    "end": 303
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 308,
    "end": 309
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 310,
    "end": 311
  },
  {
    "type": "Keyword",
    "value": "for",
    "start": 314,
    "end": 317
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 318,
    "end": 319
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 319,
    "end": 322
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 323,
    "end": 324
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 325,
    "end": 326
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 327,
    "end": 328
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 328,
    "end": 329
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 330,
    "end": 331
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 332,
    "end": 333
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 334,
    "end": 335
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 335,
    "end": 336
  },
  {
    "type": "Punctuator",
    "value": "++",
    "start": 337,
    "end": 339
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 339,
    "end": 340
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 340,
    "end": 341
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 342,
    "end": 343
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 348,
    "end": 349
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 349,
    "end": 357
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
    "value": "{",
    "start": 360,
    "end": 361
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 362,
    "end": 368
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 369,
    "end": 370
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 370,
    "end": 371
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 371,
    "end": 372
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 372,
    "end": 373
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 378,
    "end": 379
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 379,
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
    "value": "=>",
    "start": 382,
    "end": 384
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 385,
    "end": 386
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 386,
    "end": 387
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 387,
    "end": 388
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 393,
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
    "value": "==",
    "start": 399,
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
    "value": ")",
    "start": 403,
    "end": 404
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 405,
    "end": 406
  },
  {
    "type": "Keyword",
    "value": "break",
    "start": 415,
    "end": 420
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 420,
    "end": 421
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 426,
    "end": 427
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 432,
    "end": 434
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 435,
    "end": 436
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 436,
    "end": 437
  },
  {
    "type": "Punctuator",
    "value": "==",
    "start": 438,
    "end": 440
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 441,
    "end": 442
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 442,
    "end": 443
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 444,
    "end": 445
  },
  {
    "type": "Keyword",
    "value": "continue",
    "start": 454,
    "end": 462
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 462,
    "end": 463
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 468,
    "end": 469
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 470,
    "end": 471
  },
  {
    "type": "Keyword",
    "value": "while",
    "start": 473,
    "end": 478
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 479,
    "end": 480
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 480,
    "end": 481
  },
  {
    "type": "Punctuator",
    "value": "===",
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
    "type": "Keyword",
    "value": "let",
    "start": 495,
    "end": 498
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 499,
    "end": 500
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 500,
    "end": 501
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 506,
    "end": 507
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 507,
    "end": 515
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 515,
    "end": 516
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 516,
    "end": 517
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 518,
    "end": 519
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 520,
    "end": 526
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 527,
    "end": 528
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 528,
    "end": 529
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 529,
    "end": 530
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 530,
    "end": 531
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 536,
    "end": 537
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 537,
    "end": 538
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 538,
    "end": 539
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 540,
    "end": 542
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
    "value": ";",
    "start": 545,
    "end": 546
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 551,
    "end": 553
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 554,
    "end": 555
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 555,
    "end": 556
  },
  {
    "type": "Punctuator",
    "value": "==",
    "start": 557,
    "end": 559
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 560,
    "end": 561
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 561,
    "end": 562
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 563,
    "end": 564
  },
  {
    "type": "Keyword",
    "value": "break",
    "start": 573,
    "end": 578
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 578,
    "end": 579
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 584,
    "end": 585
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 590,
    "end": 592
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 593,
    "end": 594
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 594,
    "end": 595
  },
  {
    "type": "Punctuator",
    "value": "==",
    "start": 596,
    "end": 598
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 599,
    "end": 600
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 600,
    "end": 601
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 602,
    "end": 603
  },
  {
    "type": "Keyword",
    "value": "continue",
    "start": 612,
    "end": 620
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 620,
    "end": 621
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 626,
    "end": 627
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 628,
    "end": 629
  },
  {
    "type": "Keyword",
    "value": "do",
    "start": 631,
    "end": 633
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 634,
    "end": 635
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 640,
    "end": 643
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 644,
    "end": 645
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 645,
    "end": 646
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 651,
    "end": 652
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 652,
    "end": 660
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 660,
    "end": 661
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 661,
    "end": 662
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 663,
    "end": 664
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 665,
    "end": 671
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 672,
    "end": 673
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 673,
    "end": 674
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 674,
    "end": 675
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 675,
    "end": 676
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 681,
    "end": 682
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 682,
    "end": 683
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 683,
    "end": 684
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 685,
    "end": 687
  },
  {
    "type": "Identifier",
    "value": "x",
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
    "value": ";",
    "start": 690,
    "end": 691
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 696,
    "end": 698
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 699,
    "end": 700
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 700,
    "end": 701
  },
  {
    "type": "Punctuator",
    "value": "==",
    "start": 702,
    "end": 704
  },
  {
    "type": "Numeric",
    "value": "1",
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
    "value": "{",
    "start": 708,
    "end": 709
  },
  {
    "type": "Keyword",
    "value": "break",
    "start": 718,
    "end": 723
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 723,
    "end": 724
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 729,
    "end": 730
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 735,
    "end": 737
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 738,
    "end": 739
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 739,
    "end": 740
  },
  {
    "type": "Punctuator",
    "value": "==",
    "start": 741,
    "end": 743
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 744,
    "end": 745
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 745,
    "end": 746
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 747,
    "end": 748
  },
  {
    "type": "Keyword",
    "value": "continue",
    "start": 757,
    "end": 765
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 765,
    "end": 766
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 771,
    "end": 772
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 773,
    "end": 774
  },
  {
    "type": "Keyword",
    "value": "while",
    "start": 775,
    "end": 780
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 781,
    "end": 782
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 782,
    "end": 783
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 784,
    "end": 787
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 788,
    "end": 789
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 789,
    "end": 790
  },
  {
    "type": "Keyword",
    "value": "for",
    "start": 792,
    "end": 795
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 796,
    "end": 797
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 797,
    "end": 800
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 801,
    "end": 802
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 803,
    "end": 804
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 805,
    "end": 806
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 806,
    "end": 807
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 808,
    "end": 809
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 810,
    "end": 811
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 812,
    "end": 813
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 813,
    "end": 814
  },
  {
    "type": "Punctuator",
    "value": "++",
    "start": 815,
    "end": 817
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 817,
    "end": 818
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 818,
    "end": 819
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 820,
    "end": 821
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 826,
    "end": 829
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 830,
    "end": 831
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 832,
    "end": 833
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 834,
    "end": 835
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 835,
    "end": 836
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 841,
    "end": 842
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 842,
    "end": 850
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 850,
    "end": 851
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 851,
    "end": 852
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 853,
    "end": 854
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 855,
    "end": 861
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 862,
    "end": 863
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 863,
    "end": 864
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 864,
    "end": 865
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 865,
    "end": 866
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 871,
    "end": 872
  },
  {
    "type": "Punctuator",
    "value": "(",
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
    "value": "=>",
    "start": 875,
    "end": 877
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 878,
    "end": 879
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 879,
    "end": 880
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 880,
    "end": 881
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 886,
    "end": 888
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 889,
    "end": 890
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 890,
    "end": 891
  },
  {
    "type": "Punctuator",
    "value": "==",
    "start": 892,
    "end": 894
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 895,
    "end": 896
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 896,
    "end": 897
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 898,
    "end": 899
  },
  {
    "type": "Keyword",
    "value": "break",
    "start": 908,
    "end": 913
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 913,
    "end": 914
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 919,
    "end": 920
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 925,
    "end": 927
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 928,
    "end": 929
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 929,
    "end": 930
  },
  {
    "type": "Punctuator",
    "value": "==",
    "start": 931,
    "end": 933
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 934,
    "end": 935
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 935,
    "end": 936
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 937,
    "end": 938
  },
  {
    "type": "Keyword",
    "value": "continue",
    "start": 947,
    "end": 955
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 955,
    "end": 956
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 961,
    "end": 962
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 963,
    "end": 964
  },
  {
    "type": "Keyword",
    "value": "for",
    "start": 966,
    "end": 969
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 970,
    "end": 971
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 971,
    "end": 974
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 975,
    "end": 976
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 977,
    "end": 978
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 979,
    "end": 980
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 980,
    "end": 981
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 982,
    "end": 983
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 984,
    "end": 985
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 986,
    "end": 987
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 987,
    "end": 988
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 989,
    "end": 990
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 991,
    "end": 992
  },
  {
    "type": "Numeric",
    "value": "1",
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
    "type": "Punctuator",
    "value": "++",
    "start": 996,
    "end": 998
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
    "value": "{",
    "start": 1001,
    "end": 1002
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1007,
    "end": 1008
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1008,
    "end": 1016
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1016,
    "end": 1017
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1017,
    "end": 1018
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1019,
    "end": 1020
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 1021,
    "end": 1027
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1028,
    "end": 1029
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 1030,
    "end": 1031
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 1032,
    "end": 1033
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1033,
    "end": 1034
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1034,
    "end": 1035
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1035,
    "end": 1036
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1041,
    "end": 1042
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1042,
    "end": 1043
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1043,
    "end": 1044
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1045,
    "end": 1047
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1048,
    "end": 1049
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 1050,
    "end": 1051
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 1052,
    "end": 1053
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1053,
    "end": 1054
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1054,
    "end": 1055
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 1060,
    "end": 1062
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1063,
    "end": 1064
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1064,
    "end": 1065
  },
  {
    "type": "Punctuator",
    "value": "==",
    "start": 1066,
    "end": 1068
  },
  {
    "type": "Numeric",
    "value": "1",
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
    "value": "{",
    "start": 1072,
    "end": 1073
  },
  {
    "type": "Keyword",
    "value": "break",
    "start": 1082,
    "end": 1087
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1087,
    "end": 1088
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1093,
    "end": 1094
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 1099,
    "end": 1101
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1102,
    "end": 1103
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1103,
    "end": 1104
  },
  {
    "type": "Punctuator",
    "value": "==",
    "start": 1105,
    "end": 1107
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 1108,
    "end": 1109
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1109,
    "end": 1110
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1111,
    "end": 1112
  },
  {
    "type": "Keyword",
    "value": "continue",
    "start": 1121,
    "end": 1129
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1129,
    "end": 1130
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1135,
    "end": 1136
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1137,
    "end": 1138
  },
  {
    "type": "Keyword",
    "value": "while",
    "start": 1140,
    "end": 1145
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1146,
    "end": 1147
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 1147,
    "end": 1148
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 1149,
    "end": 1152
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 1153,
    "end": 1154
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1154,
    "end": 1155
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1156,
    "end": 1157
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 1162,
    "end": 1165
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1166,
    "end": 1167
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1167,
    "end": 1168
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 1169,
    "end": 1170
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1170,
    "end": 1171
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1176,
    "end": 1177
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1177,
    "end": 1185
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1185,
    "end": 1186
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1186,
    "end": 1187
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1188,
    "end": 1189
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 1190,
    "end": 1196
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1197,
    "end": 1198
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 1199,
    "end": 1200
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 1201,
    "end": 1202
  },
  {
    "type": "Punctuator",
    "value": "}",
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
    "value": "(",
    "start": 1210,
    "end": 1211
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1211,
    "end": 1212
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1212,
    "end": 1213
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1214,
    "end": 1216
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1217,
    "end": 1218
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 1219,
    "end": 1220
  },
  {
    "type": "Identifier",
    "value": "y",
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
    "value": ";",
    "start": 1223,
    "end": 1224
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 1229,
    "end": 1231
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1232,
    "end": 1233
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1233,
    "end": 1234
  },
  {
    "type": "Punctuator",
    "value": "==",
    "start": 1235,
    "end": 1237
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 1238,
    "end": 1239
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1239,
    "end": 1240
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1241,
    "end": 1242
  },
  {
    "type": "Keyword",
    "value": "break",
    "start": 1251,
    "end": 1256
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1256,
    "end": 1257
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1262,
    "end": 1263
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 1268,
    "end": 1270
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1271,
    "end": 1272
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1272,
    "end": 1273
  },
  {
    "type": "Punctuator",
    "value": "==",
    "start": 1274,
    "end": 1276
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 1277,
    "end": 1278
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1278,
    "end": 1279
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1280,
    "end": 1281
  },
  {
    "type": "Keyword",
    "value": "continue",
    "start": 1290,
    "end": 1298
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1298,
    "end": 1299
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1304,
    "end": 1305
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1306,
    "end": 1307
  },
  {
    "type": "Keyword",
    "value": "do",
    "start": 1309,
    "end": 1311
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1312,
    "end": 1313
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 1318,
    "end": 1321
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1322,
    "end": 1323
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1323,
    "end": 1324
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 1325,
    "end": 1326
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1326,
    "end": 1327
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1332,
    "end": 1333
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1333,
    "end": 1341
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1341,
    "end": 1342
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1342,
    "end": 1343
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1344,
    "end": 1345
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 1346,
    "end": 1352
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1353,
    "end": 1354
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 1355,
    "end": 1356
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 1357,
    "end": 1358
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1358,
    "end": 1359
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1359,
    "end": 1360
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1360,
    "end": 1361
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1366,
    "end": 1367
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1367,
    "end": 1368
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1368,
    "end": 1369
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1370,
    "end": 1372
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1373,
    "end": 1374
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 1375,
    "end": 1376
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 1377,
    "end": 1378
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1378,
    "end": 1379
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1379,
    "end": 1380
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 1385,
    "end": 1387
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1388,
    "end": 1389
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1389,
    "end": 1390
  },
  {
    "type": "Punctuator",
    "value": "==",
    "start": 1391,
    "end": 1393
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 1394,
    "end": 1395
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1395,
    "end": 1396
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1397,
    "end": 1398
  },
  {
    "type": "Keyword",
    "value": "break",
    "start": 1407,
    "end": 1412
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1412,
    "end": 1413
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1418,
    "end": 1419
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 1424,
    "end": 1426
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1427,
    "end": 1428
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1428,
    "end": 1429
  },
  {
    "type": "Punctuator",
    "value": "==",
    "start": 1430,
    "end": 1432
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 1433,
    "end": 1434
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1434,
    "end": 1435
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1436,
    "end": 1437
  },
  {
    "type": "Keyword",
    "value": "continue",
    "start": 1446,
    "end": 1454
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1454,
    "end": 1455
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1460,
    "end": 1461
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1462,
    "end": 1463
  },
  {
    "type": "Keyword",
    "value": "while",
    "start": 1464,
    "end": 1469
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1470,
    "end": 1471
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 1471,
    "end": 1472
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 1473,
    "end": 1476
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 1477,
    "end": 1478
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1478,
    "end": 1479
  },
  {
    "type": "Keyword",
    "value": "for",
    "start": 1481,
    "end": 1484
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1485,
    "end": 1486
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 1486,
    "end": 1489
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 1490,
    "end": 1491
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1492,
    "end": 1493
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 1494,
    "end": 1495
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1495,
    "end": 1496
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 1497,
    "end": 1498
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1499,
    "end": 1500
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 1501,
    "end": 1502
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1502,
    "end": 1503
  },
  {
    "type": "Punctuator",
    "value": "++",
    "start": 1504,
    "end": 1506
  },
  {
    "type": "Identifier",
    "value": "y",
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
    "value": "{",
    "start": 1509,
    "end": 1510
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 1515,
    "end": 1518
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1519,
    "end": 1520
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1521,
    "end": 1522
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 1523,
    "end": 1524
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1524,
    "end": 1525
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1530,
    "end": 1531
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1531,
    "end": 1539
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1539,
    "end": 1540
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1540,
    "end": 1541
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1542,
    "end": 1543
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 1544,
    "end": 1550
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1551,
    "end": 1552
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 1553,
    "end": 1554
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 1555,
    "end": 1556
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1556,
    "end": 1557
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1557,
    "end": 1558
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1558,
    "end": 1559
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1564,
    "end": 1565
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1565,
    "end": 1566
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1566,
    "end": 1567
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1568,
    "end": 1570
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1571,
    "end": 1572
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 1573,
    "end": 1574
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 1575,
    "end": 1576
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1576,
    "end": 1577
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1577,
    "end": 1578
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 1583,
    "end": 1585
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1586,
    "end": 1587
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1587,
    "end": 1588
  },
  {
    "type": "Punctuator",
    "value": "==",
    "start": 1589,
    "end": 1591
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 1592,
    "end": 1593
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1593,
    "end": 1594
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1595,
    "end": 1596
  },
  {
    "type": "Keyword",
    "value": "break",
    "start": 1605,
    "end": 1610
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1610,
    "end": 1611
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1616,
    "end": 1617
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 1622,
    "end": 1624
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1625,
    "end": 1626
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1626,
    "end": 1627
  },
  {
    "type": "Punctuator",
    "value": "==",
    "start": 1628,
    "end": 1630
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 1631,
    "end": 1632
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1632,
    "end": 1633
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1634,
    "end": 1635
  },
  {
    "type": "Keyword",
    "value": "continue",
    "start": 1644,
    "end": 1652
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1652,
    "end": 1653
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1658,
    "end": 1659
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1660,
    "end": 1661
  },
  {
    "type": "Keyword",
    "value": "for",
    "start": 1677,
    "end": 1680
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1681,
    "end": 1682
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 1682,
    "end": 1687
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1688,
    "end": 1689
  },
  {
    "type": "Identifier",
    "value": "of",
    "start": 1690,
    "end": 1692
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1693,
    "end": 1694
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1694,
    "end": 1695
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1695,
    "end": 1696
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1697,
    "end": 1698
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1703,
    "end": 1704
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1704,
    "end": 1712
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1712,
    "end": 1713
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1713,
    "end": 1714
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1715,
    "end": 1716
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 1717,
    "end": 1723
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1724,
    "end": 1725
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1725,
    "end": 1726
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1726,
    "end": 1727
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1727,
    "end": 1728
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1733,
    "end": 1734
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1734,
    "end": 1735
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1735,
    "end": 1736
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1737,
    "end": 1739
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1740,
    "end": 1741
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1741,
    "end": 1742
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1742,
    "end": 1743
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 1748,
    "end": 1750
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1751,
    "end": 1752
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1752,
    "end": 1753
  },
  {
    "type": "Punctuator",
    "value": "==",
    "start": 1754,
    "end": 1756
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 1757,
    "end": 1758
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1758,
    "end": 1759
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1760,
    "end": 1761
  },
  {
    "type": "Keyword",
    "value": "break",
    "start": 1770,
    "end": 1775
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1775,
    "end": 1776
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1781,
    "end": 1782
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 1787,
    "end": 1789
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1790,
    "end": 1791
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1791,
    "end": 1792
  },
  {
    "type": "Punctuator",
    "value": "==",
    "start": 1793,
    "end": 1795
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 1796,
    "end": 1797
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1797,
    "end": 1798
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1799,
    "end": 1800
  },
  {
    "type": "Keyword",
    "value": "continue",
    "start": 1809,
    "end": 1817
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1817,
    "end": 1818
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1823,
    "end": 1824
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1825,
    "end": 1826
  },
  {
    "type": "Keyword",
    "value": "for",
    "start": 1828,
    "end": 1831
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1832,
    "end": 1833
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 1833,
    "end": 1838
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1839,
    "end": 1840
  },
  {
    "type": "Keyword",
    "value": "in",
    "start": 1841,
    "end": 1843
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1844,
    "end": 1845
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1845,
    "end": 1846
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1846,
    "end": 1847
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1848,
    "end": 1849
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1854,
    "end": 1855
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1855,
    "end": 1863
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1863,
    "end": 1864
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1864,
    "end": 1865
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1866,
    "end": 1867
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 1868,
    "end": 1874
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1875,
    "end": 1876
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1876,
    "end": 1877
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1877,
    "end": 1878
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1878,
    "end": 1879
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1884,
    "end": 1885
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1885,
    "end": 1886
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1886,
    "end": 1887
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1888,
    "end": 1890
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1891,
    "end": 1892
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1892,
    "end": 1893
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1893,
    "end": 1894
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 1899,
    "end": 1901
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1902,
    "end": 1903
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1903,
    "end": 1904
  },
  {
    "type": "Punctuator",
    "value": "==",
    "start": 1905,
    "end": 1907
  },
  {
    "type": "String",
    "value": "\"1\"",
    "start": 1908,
    "end": 1911
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1911,
    "end": 1912
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1913,
    "end": 1914
  },
  {
    "type": "Keyword",
    "value": "break",
    "start": 1923,
    "end": 1928
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1928,
    "end": 1929
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1934,
    "end": 1935
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 1940,
    "end": 1942
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1943,
    "end": 1944
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1944,
    "end": 1945
  },
  {
    "type": "Punctuator",
    "value": "==",
    "start": 1946,
    "end": 1948
  },
  {
    "type": "String",
    "value": "\"2\"",
    "start": 1949,
    "end": 1952
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1952,
    "end": 1953
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1954,
    "end": 1955
  },
  {
    "type": "Keyword",
    "value": "continue",
    "start": 1964,
    "end": 1972
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1972,
    "end": 1973
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1978,
    "end": 1979
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1980,
    "end": 1981
  },
  {
    "type": "Keyword",
    "value": "for",
    "start": 1984,
    "end": 1987
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1988,
    "end": 1989
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 1989,
    "end": 1994
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1995,
    "end": 1996
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1997,
    "end": 1998
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 1999,
    "end": 2000
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2000,
    "end": 2001
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2002,
    "end": 2003
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2004,
    "end": 2005
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 2006,
    "end": 2007
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2007,
    "end": 2008
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2008,
    "end": 2009
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2010,
    "end": 2011
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2016,
    "end": 2017
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 2017,
    "end": 2025
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2025,
    "end": 2026
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2026,
    "end": 2027
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2028,
    "end": 2029
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 2030,
    "end": 2036
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2037,
    "end": 2038
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2038,
    "end": 2039
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2039,
    "end": 2040
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2040,
    "end": 2041
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2046,
    "end": 2047
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2047,
    "end": 2048
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2048,
    "end": 2049
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 2050,
    "end": 2052
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2053,
    "end": 2054
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2054,
    "end": 2055
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2055,
    "end": 2056
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 2061,
    "end": 2063
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2064,
    "end": 2065
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2065,
    "end": 2066
  },
  {
    "type": "Punctuator",
    "value": "==",
    "start": 2067,
    "end": 2069
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 2070,
    "end": 2071
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2071,
    "end": 2072
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2073,
    "end": 2074
  },
  {
    "type": "Keyword",
    "value": "break",
    "start": 2083,
    "end": 2088
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2088,
    "end": 2089
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2094,
    "end": 2095
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 2100,
    "end": 2102
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2103,
    "end": 2104
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2104,
    "end": 2105
  },
  {
    "type": "Punctuator",
    "value": "==",
    "start": 2106,
    "end": 2108
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 2109,
    "end": 2110
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2110,
    "end": 2111
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2112,
    "end": 2113
  },
  {
    "type": "Keyword",
    "value": "continue",
    "start": 2122,
    "end": 2130
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2130,
    "end": 2131
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2136,
    "end": 2137
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2138,
    "end": 2139
  },
  {
    "type": "Keyword",
    "value": "while",
    "start": 2141,
    "end": 2146
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2147,
    "end": 2148
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 2148,
    "end": 2149
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 2150,
    "end": 2153
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 2154,
    "end": 2155
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2155,
    "end": 2156
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2157,
    "end": 2158
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 2163,
    "end": 2168
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2169,
    "end": 2170
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2171,
    "end": 2172
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 2173,
    "end": 2174
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2174,
    "end": 2175
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2180,
    "end": 2181
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 2181,
    "end": 2189
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2189,
    "end": 2190
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2190,
    "end": 2191
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2192,
    "end": 2193
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 2194,
    "end": 2200
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2201,
    "end": 2202
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2202,
    "end": 2203
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2203,
    "end": 2204
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2204,
    "end": 2205
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2210,
    "end": 2211
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2211,
    "end": 2212
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2212,
    "end": 2213
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 2214,
    "end": 2216
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2217,
    "end": 2218
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2218,
    "end": 2219
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2219,
    "end": 2220
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 2225,
    "end": 2227
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2228,
    "end": 2229
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2229,
    "end": 2230
  },
  {
    "type": "Punctuator",
    "value": "==",
    "start": 2231,
    "end": 2233
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 2234,
    "end": 2235
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2235,
    "end": 2236
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2237,
    "end": 2238
  },
  {
    "type": "Keyword",
    "value": "break",
    "start": 2247,
    "end": 2252
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2252,
    "end": 2253
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2258,
    "end": 2259
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 2264,
    "end": 2266
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2267,
    "end": 2268
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2268,
    "end": 2269
  },
  {
    "type": "Punctuator",
    "value": "==",
    "start": 2270,
    "end": 2272
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 2273,
    "end": 2274
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2274,
    "end": 2275
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2276,
    "end": 2277
  },
  {
    "type": "Keyword",
    "value": "continue",
    "start": 2286,
    "end": 2294
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2294,
    "end": 2295
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2300,
    "end": 2301
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2302,
    "end": 2303
  },
  {
    "type": "Keyword",
    "value": "do",
    "start": 2305,
    "end": 2307
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2308,
    "end": 2309
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 2314,
    "end": 2319
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2320,
    "end": 2321
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2322,
    "end": 2323
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 2324,
    "end": 2325
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2325,
    "end": 2326
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2331,
    "end": 2332
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 2332,
    "end": 2340
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2340,
    "end": 2341
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2341,
    "end": 2342
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2343,
    "end": 2344
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 2345,
    "end": 2351
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2352,
    "end": 2353
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2353,
    "end": 2354
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2354,
    "end": 2355
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2355,
    "end": 2356
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2361,
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
    "value": ")",
    "start": 2363,
    "end": 2364
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 2365,
    "end": 2367
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2368,
    "end": 2369
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2369,
    "end": 2370
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2370,
    "end": 2371
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 2376,
    "end": 2378
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2379,
    "end": 2380
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2380,
    "end": 2381
  },
  {
    "type": "Punctuator",
    "value": "==",
    "start": 2382,
    "end": 2384
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 2385,
    "end": 2386
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2386,
    "end": 2387
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2388,
    "end": 2389
  },
  {
    "type": "Keyword",
    "value": "break",
    "start": 2398,
    "end": 2403
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2403,
    "end": 2404
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2409,
    "end": 2410
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 2415,
    "end": 2417
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2418,
    "end": 2419
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2419,
    "end": 2420
  },
  {
    "type": "Punctuator",
    "value": "==",
    "start": 2421,
    "end": 2423
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 2424,
    "end": 2425
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2425,
    "end": 2426
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2427,
    "end": 2428
  },
  {
    "type": "Keyword",
    "value": "continue",
    "start": 2437,
    "end": 2445
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2445,
    "end": 2446
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2451,
    "end": 2452
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2453,
    "end": 2454
  },
  {
    "type": "Keyword",
    "value": "while",
    "start": 2455,
    "end": 2460
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2461,
    "end": 2462
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 2462,
    "end": 2463
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 2464,
    "end": 2467
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 2468,
    "end": 2469
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2469,
    "end": 2470
  },
  {
    "type": "Keyword",
    "value": "for",
    "start": 2472,
    "end": 2475
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2476,
    "end": 2477
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 2477,
    "end": 2482
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 2483,
    "end": 2484
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2485,
    "end": 2486
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 2487,
    "end": 2488
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2488,
    "end": 2489
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 2490,
    "end": 2491
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2492,
    "end": 2493
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 2494,
    "end": 2495
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2495,
    "end": 2496
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2496,
    "end": 2497
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2498,
    "end": 2499
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 2504,
    "end": 2509
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2510,
    "end": 2511
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2512,
    "end": 2513
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 2514,
    "end": 2515
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2515,
    "end": 2516
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2521,
    "end": 2522
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 2522,
    "end": 2530
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2530,
    "end": 2531
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2531,
    "end": 2532
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2533,
    "end": 2534
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 2535,
    "end": 2541
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2542,
    "end": 2543
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2543,
    "end": 2544
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2544,
    "end": 2545
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2545,
    "end": 2546
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2551,
    "end": 2552
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2552,
    "end": 2553
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2553,
    "end": 2554
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 2555,
    "end": 2557
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2558,
    "end": 2559
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2559,
    "end": 2560
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2560,
    "end": 2561
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 2566,
    "end": 2568
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2569,
    "end": 2570
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2570,
    "end": 2571
  },
  {
    "type": "Punctuator",
    "value": "==",
    "start": 2572,
    "end": 2574
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 2575,
    "end": 2576
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2576,
    "end": 2577
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2578,
    "end": 2579
  },
  {
    "type": "Keyword",
    "value": "break",
    "start": 2588,
    "end": 2593
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2593,
    "end": 2594
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2599,
    "end": 2600
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 2605,
    "end": 2607
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2608,
    "end": 2609
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2609,
    "end": 2610
  },
  {
    "type": "Punctuator",
    "value": "==",
    "start": 2611,
    "end": 2613
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 2614,
    "end": 2615
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2615,
    "end": 2616
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2617,
    "end": 2618
  },
  {
    "type": "Keyword",
    "value": "continue",
    "start": 2627,
    "end": 2635
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2635,
    "end": 2636
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2641,
    "end": 2642
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2643,
    "end": 2644
  },
  {
    "type": "Keyword",
    "value": "for",
    "start": 2646,
    "end": 2649
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2650,
    "end": 2651
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 2651,
    "end": 2656
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2657,
    "end": 2658
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2659,
    "end": 2660
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 2661,
    "end": 2662
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2662,
    "end": 2663
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 2664,
    "end": 2665
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2666,
    "end": 2667
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 2668,
    "end": 2669
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2669,
    "end": 2670
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2671,
    "end": 2672
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2673,
    "end": 2674
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 2675,
    "end": 2676
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2676,
    "end": 2677
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2677,
    "end": 2678
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2679,
    "end": 2680
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2685,
    "end": 2686
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 2686,
    "end": 2694
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2694,
    "end": 2695
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2695,
    "end": 2696
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2697,
    "end": 2698
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 2699,
    "end": 2705
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2706,
    "end": 2707
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 2708,
    "end": 2709
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 2710,
    "end": 2711
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2711,
    "end": 2712
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2712,
    "end": 2713
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2713,
    "end": 2714
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2719,
    "end": 2720
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2720,
    "end": 2721
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2721,
    "end": 2722
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 2723,
    "end": 2725
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2726,
    "end": 2727
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 2728,
    "end": 2729
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 2730,
    "end": 2731
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2731,
    "end": 2732
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2732,
    "end": 2733
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 2738,
    "end": 2740
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2741,
    "end": 2742
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2742,
    "end": 2743
  },
  {
    "type": "Punctuator",
    "value": "==",
    "start": 2744,
    "end": 2746
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 2747,
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
    "value": "{",
    "start": 2750,
    "end": 2751
  },
  {
    "type": "Keyword",
    "value": "break",
    "start": 2760,
    "end": 2765
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2765,
    "end": 2766
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2771,
    "end": 2772
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 2777,
    "end": 2779
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2780,
    "end": 2781
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2781,
    "end": 2782
  },
  {
    "type": "Punctuator",
    "value": "==",
    "start": 2783,
    "end": 2785
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 2786,
    "end": 2787
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2787,
    "end": 2788
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2789,
    "end": 2790
  },
  {
    "type": "Keyword",
    "value": "continue",
    "start": 2799,
    "end": 2807
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2807,
    "end": 2808
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2813,
    "end": 2814
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2815,
    "end": 2816
  },
  {
    "type": "Keyword",
    "value": "while",
    "start": 2818,
    "end": 2823
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2824,
    "end": 2825
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 2825,
    "end": 2826
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 2827,
    "end": 2830
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 2831,
    "end": 2832
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2832,
    "end": 2833
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2834,
    "end": 2835
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 2840,
    "end": 2845
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2846,
    "end": 2847
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2848,
    "end": 2849
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 2850,
    "end": 2851
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2851,
    "end": 2852
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 2853,
    "end": 2854
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2855,
    "end": 2856
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 2857,
    "end": 2858
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2858,
    "end": 2859
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2864,
    "end": 2865
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 2865,
    "end": 2873
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2873,
    "end": 2874
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2874,
    "end": 2875
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2876,
    "end": 2877
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 2878,
    "end": 2884
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2885,
    "end": 2886
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 2887,
    "end": 2888
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 2889,
    "end": 2890
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2890,
    "end": 2891
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2891,
    "end": 2892
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2892,
    "end": 2893
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2898,
    "end": 2899
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2899,
    "end": 2900
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2900,
    "end": 2901
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 2902,
    "end": 2904
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2905,
    "end": 2906
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 2907,
    "end": 2908
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 2909,
    "end": 2910
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2910,
    "end": 2911
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2911,
    "end": 2912
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 2917,
    "end": 2919
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2920,
    "end": 2921
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2921,
    "end": 2922
  },
  {
    "type": "Punctuator",
    "value": "==",
    "start": 2923,
    "end": 2925
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 2926,
    "end": 2927
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2927,
    "end": 2928
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2929,
    "end": 2930
  },
  {
    "type": "Keyword",
    "value": "break",
    "start": 2939,
    "end": 2944
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2944,
    "end": 2945
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2950,
    "end": 2951
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 2956,
    "end": 2958
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2959,
    "end": 2960
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2960,
    "end": 2961
  },
  {
    "type": "Punctuator",
    "value": "==",
    "start": 2962,
    "end": 2964
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 2965,
    "end": 2966
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2966,
    "end": 2967
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2968,
    "end": 2969
  },
  {
    "type": "Keyword",
    "value": "continue",
    "start": 2978,
    "end": 2986
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2986,
    "end": 2987
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2992,
    "end": 2993
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2994,
    "end": 2995
  },
  {
    "type": "Keyword",
    "value": "do",
    "start": 2997,
    "end": 2999
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3000,
    "end": 3001
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 3006,
    "end": 3011
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 3012,
    "end": 3013
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3014,
    "end": 3015
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 3016,
    "end": 3017
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3017,
    "end": 3018
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 3019,
    "end": 3020
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3021,
    "end": 3022
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 3023,
    "end": 3024
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3024,
    "end": 3025
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3030,
    "end": 3031
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 3031,
    "end": 3039
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3039,
    "end": 3040
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3040,
    "end": 3041
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3042,
    "end": 3043
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 3044,
    "end": 3050
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 3051,
    "end": 3052
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 3053,
    "end": 3054
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 3055,
    "end": 3056
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3056,
    "end": 3057
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3057,
    "end": 3058
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3058,
    "end": 3059
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3064,
    "end": 3065
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3065,
    "end": 3066
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3066,
    "end": 3067
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 3068,
    "end": 3070
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 3071,
    "end": 3072
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 3073,
    "end": 3074
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 3075,
    "end": 3076
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3076,
    "end": 3077
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3077,
    "end": 3078
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 3083,
    "end": 3085
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3086,
    "end": 3087
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 3087,
    "end": 3088
  },
  {
    "type": "Punctuator",
    "value": "==",
    "start": 3089,
    "end": 3091
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 3092,
    "end": 3093
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3093,
    "end": 3094
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3095,
    "end": 3096
  },
  {
    "type": "Keyword",
    "value": "break",
    "start": 3105,
    "end": 3110
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3110,
    "end": 3111
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3116,
    "end": 3117
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 3122,
    "end": 3124
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3125,
    "end": 3126
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 3126,
    "end": 3127
  },
  {
    "type": "Punctuator",
    "value": "==",
    "start": 3128,
    "end": 3130
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 3131,
    "end": 3132
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3132,
    "end": 3133
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3134,
    "end": 3135
  },
  {
    "type": "Keyword",
    "value": "continue",
    "start": 3144,
    "end": 3152
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3152,
    "end": 3153
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3158,
    "end": 3159
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3160,
    "end": 3161
  },
  {
    "type": "Keyword",
    "value": "while",
    "start": 3162,
    "end": 3167
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3168,
    "end": 3169
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 3169,
    "end": 3170
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 3171,
    "end": 3174
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 3175,
    "end": 3176
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3176,
    "end": 3177
  },
  {
    "type": "Keyword",
    "value": "for",
    "start": 3179,
    "end": 3182
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3183,
    "end": 3184
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 3184,
    "end": 3189
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 3190,
    "end": 3191
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3192,
    "end": 3193
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 3194,
    "end": 3195
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3195,
    "end": 3196
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 3197,
    "end": 3198
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 3199,
    "end": 3200
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 3201,
    "end": 3202
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3202,
    "end": 3203
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3203,
    "end": 3204
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3205,
    "end": 3206
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 3211,
    "end": 3216
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 3217,
    "end": 3218
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3219,
    "end": 3220
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 3221,
    "end": 3222
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3222,
    "end": 3223
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3228,
    "end": 3229
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 3229,
    "end": 3237
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3237,
    "end": 3238
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3238,
    "end": 3239
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3240,
    "end": 3241
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 3242,
    "end": 3248
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 3249,
    "end": 3250
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 3251,
    "end": 3252
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 3253,
    "end": 3254
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3254,
    "end": 3255
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3255,
    "end": 3256
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3256,
    "end": 3257
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3262,
    "end": 3263
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3263,
    "end": 3264
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3264,
    "end": 3265
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 3266,
    "end": 3268
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 3269,
    "end": 3270
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 3271,
    "end": 3272
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 3273,
    "end": 3274
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3274,
    "end": 3275
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3275,
    "end": 3276
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 3281,
    "end": 3283
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3284,
    "end": 3285
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 3285,
    "end": 3286
  },
  {
    "type": "Punctuator",
    "value": "==",
    "start": 3287,
    "end": 3289
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 3290,
    "end": 3291
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3291,
    "end": 3292
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3293,
    "end": 3294
  },
  {
    "type": "Keyword",
    "value": "break",
    "start": 3303,
    "end": 3308
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3308,
    "end": 3309
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3314,
    "end": 3315
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 3320,
    "end": 3322
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3323,
    "end": 3324
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 3324,
    "end": 3325
  },
  {
    "type": "Punctuator",
    "value": "==",
    "start": 3326,
    "end": 3328
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 3329,
    "end": 3330
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3330,
    "end": 3331
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3332,
    "end": 3333
  },
  {
    "type": "Keyword",
    "value": "continue",
    "start": 3342,
    "end": 3350
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3350,
    "end": 3351
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3356,
    "end": 3357
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3358,
    "end": 3359
  }
]
```
