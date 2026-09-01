__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "LabeledStatement",
      "label": {
        "type": "Identifier",
        "decorators": [],
        "name": "l0",
        "optional": false,
        "typeAnnotation": null,
        "start": 9,
        "end": 11
      },
      "body": {
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
                "start": 22,
                "end": 23
              },
              "init": null,
              "definite": false,
              "start": 22,
              "end": 23
            }
          ],
          "declare": false,
          "start": 18,
          "end": 23
        },
        "right": {
          "type": "ArrayExpression",
          "elements": [],
          "start": 27,
          "end": 29
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
                        "start": 58,
                        "end": 59
                      },
                      "start": 51,
                      "end": 59
                    }
                  ],
                  "start": 49,
                  "end": 60
                },
                "expression": false,
                "start": 38,
                "end": 60
              },
              "directive": null,
              "start": 37,
              "end": 62
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
                  "start": 74,
                  "end": 75
                },
                "id": null,
                "generator": false,
                "start": 68,
                "end": 75
              },
              "directive": null,
              "start": 67,
              "end": 77
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
                  "start": 86,
                  "end": 87
                },
                "operator": "==",
                "right": {
                  "type": "Literal",
                  "value": 1,
                  "raw": "1",
                  "start": 91,
                  "end": 92
                },
                "start": 86,
                "end": 92
              },
              "consequent": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "BreakStatement",
                    "label": null,
                    "start": 104,
                    "end": 110
                  }
                ],
                "start": 94,
                "end": 116
              },
              "alternate": null,
              "start": 82,
              "end": 116
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
                  "start": 125,
                  "end": 126
                },
                "operator": "==",
                "right": {
                  "type": "Literal",
                  "value": 1,
                  "raw": "1",
                  "start": 130,
                  "end": 131
                },
                "start": 125,
                "end": 131
              },
              "consequent": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "BreakStatement",
                    "label": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "l0",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 149,
                      "end": 151
                    },
                    "start": 143,
                    "end": 152
                  }
                ],
                "start": 133,
                "end": 158
              },
              "alternate": null,
              "start": 121,
              "end": 158
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
                  "start": 167,
                  "end": 168
                },
                "operator": "==",
                "right": {
                  "type": "Literal",
                  "value": 2,
                  "raw": "2",
                  "start": 172,
                  "end": 173
                },
                "start": 167,
                "end": 173
              },
              "consequent": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ContinueStatement",
                    "label": null,
                    "start": 185,
                    "end": 194
                  }
                ],
                "start": 175,
                "end": 200
              },
              "alternate": null,
              "start": 163,
              "end": 200
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
                  "start": 209,
                  "end": 210
                },
                "operator": "==",
                "right": {
                  "type": "Literal",
                  "value": 2,
                  "raw": "2",
                  "start": 214,
                  "end": 215
                },
                "start": 209,
                "end": 215
              },
              "consequent": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ContinueStatement",
                    "label": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "l0",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 236,
                      "end": 238
                    },
                    "start": 227,
                    "end": 239
                  }
                ],
                "start": 217,
                "end": 245
              },
              "alternate": null,
              "start": 205,
              "end": 245
            }
          ],
          "start": 31,
          "end": 247
        },
        "start": 13,
        "end": 247
      },
      "start": 9,
      "end": 247
    },
    {
      "type": "LabeledStatement",
      "label": {
        "type": "Identifier",
        "decorators": [],
        "name": "l00",
        "optional": false,
        "typeAnnotation": null,
        "start": 249,
        "end": 252
      },
      "body": {
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
                "start": 263,
                "end": 264
              },
              "init": null,
              "definite": false,
              "start": 263,
              "end": 264
            }
          ],
          "declare": false,
          "start": 259,
          "end": 264
        },
        "right": {
          "type": "ArrayExpression",
          "elements": [],
          "start": 268,
          "end": 270
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
                        "start": 299,
                        "end": 300
                      },
                      "start": 292,
                      "end": 300
                    }
                  ],
                  "start": 290,
                  "end": 301
                },
                "expression": false,
                "start": 279,
                "end": 301
              },
              "directive": null,
              "start": 278,
              "end": 303
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
                  "start": 315,
                  "end": 316
                },
                "id": null,
                "generator": false,
                "start": 309,
                "end": 316
              },
              "directive": null,
              "start": 308,
              "end": 318
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
                  "start": 327,
                  "end": 328
                },
                "operator": "==",
                "right": {
                  "type": "Literal",
                  "value": "1",
                  "raw": "\"1\"",
                  "start": 332,
                  "end": 335
                },
                "start": 327,
                "end": 335
              },
              "consequent": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "BreakStatement",
                    "label": null,
                    "start": 347,
                    "end": 353
                  }
                ],
                "start": 337,
                "end": 359
              },
              "alternate": null,
              "start": 323,
              "end": 359
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
                  "start": 368,
                  "end": 369
                },
                "operator": "==",
                "right": {
                  "type": "Literal",
                  "value": "1",
                  "raw": "\"1\"",
                  "start": 373,
                  "end": 376
                },
                "start": 368,
                "end": 376
              },
              "consequent": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "BreakStatement",
                    "label": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "l00",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 394,
                      "end": 397
                    },
                    "start": 388,
                    "end": 398
                  }
                ],
                "start": 378,
                "end": 404
              },
              "alternate": null,
              "start": 364,
              "end": 404
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
                  "start": 413,
                  "end": 414
                },
                "operator": "==",
                "right": {
                  "type": "Literal",
                  "value": "2",
                  "raw": "\"2\"",
                  "start": 418,
                  "end": 421
                },
                "start": 413,
                "end": 421
              },
              "consequent": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ContinueStatement",
                    "label": null,
                    "start": 433,
                    "end": 442
                  }
                ],
                "start": 423,
                "end": 448
              },
              "alternate": null,
              "start": 409,
              "end": 448
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
                  "start": 457,
                  "end": 458
                },
                "operator": "==",
                "right": {
                  "type": "Literal",
                  "value": "2",
                  "raw": "\"2\"",
                  "start": 462,
                  "end": 465
                },
                "start": 457,
                "end": 465
              },
              "consequent": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ContinueStatement",
                    "label": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "l00",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 486,
                      "end": 489
                    },
                    "start": 477,
                    "end": 490
                  }
                ],
                "start": 467,
                "end": 496
              },
              "alternate": null,
              "start": 453,
              "end": 496
            }
          ],
          "start": 272,
          "end": 498
        },
        "start": 254,
        "end": 498
      },
      "start": 249,
      "end": 498
    },
    {
      "type": "LabeledStatement",
      "label": {
        "type": "Identifier",
        "decorators": [],
        "name": "l1",
        "optional": false,
        "typeAnnotation": null,
        "start": 500,
        "end": 502
      },
      "body": {
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
                "start": 513,
                "end": 514
              },
              "init": {
                "type": "Literal",
                "value": 0,
                "raw": "0",
                "start": 517,
                "end": 518
              },
              "definite": false,
              "start": 513,
              "end": 518
            }
          ],
          "declare": false,
          "start": 509,
          "end": 518
        },
        "test": {
          "type": "BinaryExpression",
          "left": {
            "type": "Identifier",
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null,
            "start": 520,
            "end": 521
          },
          "operator": "<",
          "right": {
            "type": "Literal",
            "value": 1,
            "raw": "1",
            "start": 524,
            "end": 525
          },
          "start": 520,
          "end": 525
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
            "start": 529,
            "end": 530
          },
          "start": 527,
          "end": 530
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
                        "start": 559,
                        "end": 560
                      },
                      "start": 552,
                      "end": 560
                    }
                  ],
                  "start": 550,
                  "end": 561
                },
                "expression": false,
                "start": 539,
                "end": 561
              },
              "directive": null,
              "start": 538,
              "end": 563
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
                  "start": 575,
                  "end": 576
                },
                "id": null,
                "generator": false,
                "start": 569,
                "end": 576
              },
              "directive": null,
              "start": 568,
              "end": 578
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
                  "start": 587,
                  "end": 588
                },
                "operator": "==",
                "right": {
                  "type": "Literal",
                  "value": 1,
                  "raw": "1",
                  "start": 592,
                  "end": 593
                },
                "start": 587,
                "end": 593
              },
              "consequent": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "BreakStatement",
                    "label": null,
                    "start": 605,
                    "end": 611
                  }
                ],
                "start": 595,
                "end": 617
              },
              "alternate": null,
              "start": 583,
              "end": 617
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
                  "start": 626,
                  "end": 627
                },
                "operator": "==",
                "right": {
                  "type": "Literal",
                  "value": 1,
                  "raw": "1",
                  "start": 631,
                  "end": 632
                },
                "start": 626,
                "end": 632
              },
              "consequent": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "BreakStatement",
                    "label": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "l1",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 650,
                      "end": 652
                    },
                    "start": 644,
                    "end": 653
                  }
                ],
                "start": 634,
                "end": 659
              },
              "alternate": null,
              "start": 622,
              "end": 659
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
                  "start": 668,
                  "end": 669
                },
                "operator": "==",
                "right": {
                  "type": "Literal",
                  "value": 2,
                  "raw": "2",
                  "start": 673,
                  "end": 674
                },
                "start": 668,
                "end": 674
              },
              "consequent": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ContinueStatement",
                    "label": null,
                    "start": 686,
                    "end": 695
                  }
                ],
                "start": 676,
                "end": 701
              },
              "alternate": null,
              "start": 664,
              "end": 701
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
                  "start": 710,
                  "end": 711
                },
                "operator": "==",
                "right": {
                  "type": "Literal",
                  "value": 2,
                  "raw": "2",
                  "start": 715,
                  "end": 716
                },
                "start": 710,
                "end": 716
              },
              "consequent": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ContinueStatement",
                    "label": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "l1",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 737,
                      "end": 739
                    },
                    "start": 728,
                    "end": 740
                  }
                ],
                "start": 718,
                "end": 746
              },
              "alternate": null,
              "start": 706,
              "end": 746
            }
          ],
          "start": 532,
          "end": 748
        },
        "start": 504,
        "end": 748
      },
      "start": 500,
      "end": 748
    },
    {
      "type": "LabeledStatement",
      "label": {
        "type": "Identifier",
        "decorators": [],
        "name": "l2",
        "optional": false,
        "typeAnnotation": null,
        "start": 750,
        "end": 752
      },
      "body": {
        "type": "WhileStatement",
        "test": {
          "type": "BinaryExpression",
          "left": {
            "type": "Literal",
            "value": 1,
            "raw": "1",
            "start": 761,
            "end": 762
          },
          "operator": "===",
          "right": {
            "type": "Literal",
            "value": 1,
            "raw": "1",
            "start": 767,
            "end": 768
          },
          "start": 761,
          "end": 768
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
                    "start": 780,
                    "end": 781
                  },
                  "init": null,
                  "definite": false,
                  "start": 780,
                  "end": 781
                }
              ],
              "declare": false,
              "start": 776,
              "end": 782
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
                        "start": 808,
                        "end": 809
                      },
                      "start": 801,
                      "end": 809
                    }
                  ],
                  "start": 799,
                  "end": 810
                },
                "expression": false,
                "start": 788,
                "end": 810
              },
              "directive": null,
              "start": 787,
              "end": 812
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
                  "start": 824,
                  "end": 825
                },
                "id": null,
                "generator": false,
                "start": 818,
                "end": 825
              },
              "directive": null,
              "start": 817,
              "end": 827
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
                  "start": 836,
                  "end": 837
                },
                "operator": "==",
                "right": {
                  "type": "Literal",
                  "value": 1,
                  "raw": "1",
                  "start": 841,
                  "end": 842
                },
                "start": 836,
                "end": 842
              },
              "consequent": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "BreakStatement",
                    "label": null,
                    "start": 854,
                    "end": 860
                  }
                ],
                "start": 844,
                "end": 866
              },
              "alternate": null,
              "start": 832,
              "end": 866
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
                  "start": 875,
                  "end": 876
                },
                "operator": "==",
                "right": {
                  "type": "Literal",
                  "value": 1,
                  "raw": "1",
                  "start": 880,
                  "end": 881
                },
                "start": 875,
                "end": 881
              },
              "consequent": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "BreakStatement",
                    "label": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "l2",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 899,
                      "end": 901
                    },
                    "start": 893,
                    "end": 902
                  }
                ],
                "start": 883,
                "end": 908
              },
              "alternate": null,
              "start": 871,
              "end": 908
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
                  "start": 917,
                  "end": 918
                },
                "operator": "==",
                "right": {
                  "type": "Literal",
                  "value": 2,
                  "raw": "2",
                  "start": 922,
                  "end": 923
                },
                "start": 917,
                "end": 923
              },
              "consequent": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ContinueStatement",
                    "label": null,
                    "start": 935,
                    "end": 944
                  }
                ],
                "start": 925,
                "end": 950
              },
              "alternate": null,
              "start": 913,
              "end": 950
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
                  "start": 959,
                  "end": 960
                },
                "operator": "==",
                "right": {
                  "type": "Literal",
                  "value": 2,
                  "raw": "2",
                  "start": 964,
                  "end": 965
                },
                "start": 959,
                "end": 965
              },
              "consequent": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ContinueStatement",
                    "label": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "l2",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 986,
                      "end": 988
                    },
                    "start": 977,
                    "end": 989
                  }
                ],
                "start": 967,
                "end": 995
              },
              "alternate": null,
              "start": 955,
              "end": 995
            }
          ],
          "start": 770,
          "end": 997
        },
        "start": 754,
        "end": 997
      },
      "start": 750,
      "end": 997
    },
    {
      "type": "LabeledStatement",
      "label": {
        "type": "Identifier",
        "decorators": [],
        "name": "l3",
        "optional": false,
        "typeAnnotation": null,
        "start": 999,
        "end": 1001
      },
      "body": {
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
                    "start": 1016,
                    "end": 1017
                  },
                  "init": null,
                  "definite": false,
                  "start": 1016,
                  "end": 1017
                }
              ],
              "declare": false,
              "start": 1012,
              "end": 1018
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
                        "start": 1044,
                        "end": 1045
                      },
                      "start": 1037,
                      "end": 1045
                    }
                  ],
                  "start": 1035,
                  "end": 1046
                },
                "expression": false,
                "start": 1024,
                "end": 1046
              },
              "directive": null,
              "start": 1023,
              "end": 1048
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
                  "start": 1060,
                  "end": 1061
                },
                "id": null,
                "generator": false,
                "start": 1054,
                "end": 1061
              },
              "directive": null,
              "start": 1053,
              "end": 1063
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
                  "start": 1072,
                  "end": 1073
                },
                "operator": "==",
                "right": {
                  "type": "Literal",
                  "value": 1,
                  "raw": "1",
                  "start": 1077,
                  "end": 1078
                },
                "start": 1072,
                "end": 1078
              },
              "consequent": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "BreakStatement",
                    "label": null,
                    "start": 1090,
                    "end": 1096
                  }
                ],
                "start": 1080,
                "end": 1102
              },
              "alternate": null,
              "start": 1068,
              "end": 1102
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
                  "start": 1111,
                  "end": 1112
                },
                "operator": "==",
                "right": {
                  "type": "Literal",
                  "value": 1,
                  "raw": "1",
                  "start": 1116,
                  "end": 1117
                },
                "start": 1111,
                "end": 1117
              },
              "consequent": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "BreakStatement",
                    "label": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "l3",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1135,
                      "end": 1137
                    },
                    "start": 1129,
                    "end": 1138
                  }
                ],
                "start": 1119,
                "end": 1144
              },
              "alternate": null,
              "start": 1107,
              "end": 1144
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
                  "start": 1153,
                  "end": 1154
                },
                "operator": "==",
                "right": {
                  "type": "Literal",
                  "value": 2,
                  "raw": "2",
                  "start": 1158,
                  "end": 1159
                },
                "start": 1153,
                "end": 1159
              },
              "consequent": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ContinueStatement",
                    "label": null,
                    "start": 1171,
                    "end": 1180
                  }
                ],
                "start": 1161,
                "end": 1186
              },
              "alternate": null,
              "start": 1149,
              "end": 1186
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
                  "start": 1195,
                  "end": 1196
                },
                "operator": "==",
                "right": {
                  "type": "Literal",
                  "value": 2,
                  "raw": "2",
                  "start": 1200,
                  "end": 1201
                },
                "start": 1195,
                "end": 1201
              },
              "consequent": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ContinueStatement",
                    "label": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "l3",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1222,
                      "end": 1224
                    },
                    "start": 1213,
                    "end": 1225
                  }
                ],
                "start": 1203,
                "end": 1231
              },
              "alternate": null,
              "start": 1191,
              "end": 1231
            }
          ],
          "start": 1006,
          "end": 1233
        },
        "test": {
          "type": "BinaryExpression",
          "left": {
            "type": "Literal",
            "value": 1,
            "raw": "1",
            "start": 1241,
            "end": 1242
          },
          "operator": "===",
          "right": {
            "type": "Literal",
            "value": 1,
            "raw": "1",
            "start": 1247,
            "end": 1248
          },
          "start": 1241,
          "end": 1248
        },
        "start": 1003,
        "end": 1249
      },
      "start": 999,
      "end": 1249
    },
    {
      "type": "LabeledStatement",
      "label": {
        "type": "Identifier",
        "decorators": [],
        "name": "l4",
        "optional": false,
        "typeAnnotation": null,
        "start": 1251,
        "end": 1253
      },
      "body": {
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
                "start": 1264,
                "end": 1265
              },
              "init": {
                "type": "Literal",
                "value": 0,
                "raw": "0",
                "start": 1268,
                "end": 1269
              },
              "definite": false,
              "start": 1264,
              "end": 1269
            }
          ],
          "declare": false,
          "start": 1260,
          "end": 1269
        },
        "test": {
          "type": "BinaryExpression",
          "left": {
            "type": "Identifier",
            "decorators": [],
            "name": "y",
            "optional": false,
            "typeAnnotation": null,
            "start": 1271,
            "end": 1272
          },
          "operator": "<",
          "right": {
            "type": "Literal",
            "value": 1,
            "raw": "1",
            "start": 1275,
            "end": 1276
          },
          "start": 1271,
          "end": 1276
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
            "start": 1280,
            "end": 1281
          },
          "start": 1278,
          "end": 1281
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
                    "start": 1293,
                    "end": 1294
                  },
                  "init": {
                    "type": "Literal",
                    "value": 1,
                    "raw": "1",
                    "start": 1297,
                    "end": 1298
                  },
                  "definite": false,
                  "start": 1293,
                  "end": 1298
                }
              ],
              "declare": false,
              "start": 1289,
              "end": 1299
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
                        "start": 1325,
                        "end": 1326
                      },
                      "start": 1318,
                      "end": 1326
                    }
                  ],
                  "start": 1316,
                  "end": 1327
                },
                "expression": false,
                "start": 1305,
                "end": 1327
              },
              "directive": null,
              "start": 1304,
              "end": 1329
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
                  "start": 1341,
                  "end": 1342
                },
                "id": null,
                "generator": false,
                "start": 1335,
                "end": 1342
              },
              "directive": null,
              "start": 1334,
              "end": 1344
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
                  "start": 1353,
                  "end": 1354
                },
                "operator": "==",
                "right": {
                  "type": "Literal",
                  "value": 1,
                  "raw": "1",
                  "start": 1358,
                  "end": 1359
                },
                "start": 1353,
                "end": 1359
              },
              "consequent": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "BreakStatement",
                    "label": null,
                    "start": 1371,
                    "end": 1377
                  }
                ],
                "start": 1361,
                "end": 1383
              },
              "alternate": null,
              "start": 1349,
              "end": 1383
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
                  "start": 1392,
                  "end": 1393
                },
                "operator": "==",
                "right": {
                  "type": "Literal",
                  "value": 1,
                  "raw": "1",
                  "start": 1397,
                  "end": 1398
                },
                "start": 1392,
                "end": 1398
              },
              "consequent": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "BreakStatement",
                    "label": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "l4",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1416,
                      "end": 1418
                    },
                    "start": 1410,
                    "end": 1419
                  }
                ],
                "start": 1400,
                "end": 1425
              },
              "alternate": null,
              "start": 1388,
              "end": 1425
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
                  "start": 1434,
                  "end": 1435
                },
                "operator": "==",
                "right": {
                  "type": "Literal",
                  "value": 2,
                  "raw": "2",
                  "start": 1439,
                  "end": 1440
                },
                "start": 1434,
                "end": 1440
              },
              "consequent": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ContinueStatement",
                    "label": null,
                    "start": 1452,
                    "end": 1461
                  }
                ],
                "start": 1442,
                "end": 1467
              },
              "alternate": null,
              "start": 1430,
              "end": 1467
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
                  "start": 1476,
                  "end": 1477
                },
                "operator": "==",
                "right": {
                  "type": "Literal",
                  "value": 2,
                  "raw": "2",
                  "start": 1481,
                  "end": 1482
                },
                "start": 1476,
                "end": 1482
              },
              "consequent": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ContinueStatement",
                    "label": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "l4",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1503,
                      "end": 1505
                    },
                    "start": 1494,
                    "end": 1506
                  }
                ],
                "start": 1484,
                "end": 1512
              },
              "alternate": null,
              "start": 1472,
              "end": 1512
            }
          ],
          "start": 1283,
          "end": 1514
        },
        "start": 1255,
        "end": 1514
      },
      "start": 1251,
      "end": 1514
    },
    {
      "type": "LabeledStatement",
      "label": {
        "type": "Identifier",
        "decorators": [],
        "name": "l5",
        "optional": false,
        "typeAnnotation": null,
        "start": 1516,
        "end": 1518
      },
      "body": {
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
                "start": 1529,
                "end": 1530
              },
              "init": {
                "type": "Literal",
                "value": 0,
                "raw": "0",
                "start": 1533,
                "end": 1534
              },
              "definite": false,
              "start": 1529,
              "end": 1534
            },
            {
              "type": "VariableDeclarator",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "y",
                "optional": false,
                "typeAnnotation": null,
                "start": 1536,
                "end": 1537
              },
              "init": {
                "type": "Literal",
                "value": 1,
                "raw": "1",
                "start": 1540,
                "end": 1541
              },
              "definite": false,
              "start": 1536,
              "end": 1541
            }
          ],
          "declare": false,
          "start": 1525,
          "end": 1541
        },
        "test": {
          "type": "BinaryExpression",
          "left": {
            "type": "Identifier",
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null,
            "start": 1543,
            "end": 1544
          },
          "operator": "<",
          "right": {
            "type": "Literal",
            "value": 1,
            "raw": "1",
            "start": 1547,
            "end": 1548
          },
          "start": 1543,
          "end": 1548
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
            "start": 1552,
            "end": 1553
          },
          "start": 1550,
          "end": 1553
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
                          "start": 1582,
                          "end": 1583
                        },
                        "operator": "+",
                        "right": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "y",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1586,
                          "end": 1587
                        },
                        "start": 1582,
                        "end": 1587
                      },
                      "start": 1575,
                      "end": 1587
                    }
                  ],
                  "start": 1573,
                  "end": 1588
                },
                "expression": false,
                "start": 1562,
                "end": 1588
              },
              "directive": null,
              "start": 1561,
              "end": 1590
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
                    "start": 1602,
                    "end": 1603
                  },
                  "operator": "+",
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "y",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1606,
                    "end": 1607
                  },
                  "start": 1602,
                  "end": 1607
                },
                "id": null,
                "generator": false,
                "start": 1596,
                "end": 1607
              },
              "directive": null,
              "start": 1595,
              "end": 1609
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
                  "start": 1618,
                  "end": 1619
                },
                "operator": "==",
                "right": {
                  "type": "Literal",
                  "value": 1,
                  "raw": "1",
                  "start": 1623,
                  "end": 1624
                },
                "start": 1618,
                "end": 1624
              },
              "consequent": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "BreakStatement",
                    "label": null,
                    "start": 1636,
                    "end": 1642
                  }
                ],
                "start": 1626,
                "end": 1648
              },
              "alternate": null,
              "start": 1614,
              "end": 1648
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
                  "start": 1657,
                  "end": 1658
                },
                "operator": "==",
                "right": {
                  "type": "Literal",
                  "value": 1,
                  "raw": "1",
                  "start": 1662,
                  "end": 1663
                },
                "start": 1657,
                "end": 1663
              },
              "consequent": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "BreakStatement",
                    "label": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "l5",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1681,
                      "end": 1683
                    },
                    "start": 1675,
                    "end": 1684
                  }
                ],
                "start": 1665,
                "end": 1690
              },
              "alternate": null,
              "start": 1653,
              "end": 1690
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
                  "start": 1699,
                  "end": 1700
                },
                "operator": "==",
                "right": {
                  "type": "Literal",
                  "value": 2,
                  "raw": "2",
                  "start": 1704,
                  "end": 1705
                },
                "start": 1699,
                "end": 1705
              },
              "consequent": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ContinueStatement",
                    "label": null,
                    "start": 1717,
                    "end": 1726
                  }
                ],
                "start": 1707,
                "end": 1732
              },
              "alternate": null,
              "start": 1695,
              "end": 1732
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
                  "start": 1741,
                  "end": 1742
                },
                "operator": "==",
                "right": {
                  "type": "Literal",
                  "value": 2,
                  "raw": "2",
                  "start": 1746,
                  "end": 1747
                },
                "start": 1741,
                "end": 1747
              },
              "consequent": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ContinueStatement",
                    "label": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "l5",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1768,
                      "end": 1770
                    },
                    "start": 1759,
                    "end": 1771
                  }
                ],
                "start": 1749,
                "end": 1777
              },
              "alternate": null,
              "start": 1737,
              "end": 1777
            }
          ],
          "start": 1555,
          "end": 1779
        },
        "start": 1520,
        "end": 1779
      },
      "start": 1516,
      "end": 1779
    },
    {
      "type": "LabeledStatement",
      "label": {
        "type": "Identifier",
        "decorators": [],
        "name": "l6",
        "optional": false,
        "typeAnnotation": null,
        "start": 1781,
        "end": 1783
      },
      "body": {
        "type": "WhileStatement",
        "test": {
          "type": "BinaryExpression",
          "left": {
            "type": "Literal",
            "value": 1,
            "raw": "1",
            "start": 1792,
            "end": 1793
          },
          "operator": "===",
          "right": {
            "type": "Literal",
            "value": 1,
            "raw": "1",
            "start": 1798,
            "end": 1799
          },
          "start": 1792,
          "end": 1799
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
                    "start": 1811,
                    "end": 1812
                  },
                  "init": null,
                  "definite": false,
                  "start": 1811,
                  "end": 1812
                },
                {
                  "type": "VariableDeclarator",
                  "id": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "y",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1814,
                    "end": 1815
                  },
                  "init": null,
                  "definite": false,
                  "start": 1814,
                  "end": 1815
                }
              ],
              "declare": false,
              "start": 1807,
              "end": 1816
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
                          "start": 1842,
                          "end": 1843
                        },
                        "operator": "+",
                        "right": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "y",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1846,
                          "end": 1847
                        },
                        "start": 1842,
                        "end": 1847
                      },
                      "start": 1835,
                      "end": 1847
                    }
                  ],
                  "start": 1833,
                  "end": 1848
                },
                "expression": false,
                "start": 1822,
                "end": 1848
              },
              "directive": null,
              "start": 1821,
              "end": 1850
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
                    "start": 1862,
                    "end": 1863
                  },
                  "operator": "+",
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "y",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1866,
                    "end": 1867
                  },
                  "start": 1862,
                  "end": 1867
                },
                "id": null,
                "generator": false,
                "start": 1856,
                "end": 1867
              },
              "directive": null,
              "start": 1855,
              "end": 1869
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
                  "start": 1878,
                  "end": 1879
                },
                "operator": "==",
                "right": {
                  "type": "Literal",
                  "value": 1,
                  "raw": "1",
                  "start": 1883,
                  "end": 1884
                },
                "start": 1878,
                "end": 1884
              },
              "consequent": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "BreakStatement",
                    "label": null,
                    "start": 1896,
                    "end": 1902
                  }
                ],
                "start": 1886,
                "end": 1908
              },
              "alternate": null,
              "start": 1874,
              "end": 1908
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
                  "start": 1917,
                  "end": 1918
                },
                "operator": "==",
                "right": {
                  "type": "Literal",
                  "value": 1,
                  "raw": "1",
                  "start": 1922,
                  "end": 1923
                },
                "start": 1917,
                "end": 1923
              },
              "consequent": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "BreakStatement",
                    "label": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "l6",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1941,
                      "end": 1943
                    },
                    "start": 1935,
                    "end": 1944
                  }
                ],
                "start": 1925,
                "end": 1950
              },
              "alternate": null,
              "start": 1913,
              "end": 1950
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
                  "start": 1959,
                  "end": 1960
                },
                "operator": "==",
                "right": {
                  "type": "Literal",
                  "value": 2,
                  "raw": "2",
                  "start": 1964,
                  "end": 1965
                },
                "start": 1959,
                "end": 1965
              },
              "consequent": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ContinueStatement",
                    "label": null,
                    "start": 1977,
                    "end": 1986
                  }
                ],
                "start": 1967,
                "end": 1992
              },
              "alternate": null,
              "start": 1955,
              "end": 1992
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
                  "start": 2001,
                  "end": 2002
                },
                "operator": "==",
                "right": {
                  "type": "Literal",
                  "value": 2,
                  "raw": "2",
                  "start": 2006,
                  "end": 2007
                },
                "start": 2001,
                "end": 2007
              },
              "consequent": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ContinueStatement",
                    "label": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "l6",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2028,
                      "end": 2030
                    },
                    "start": 2019,
                    "end": 2031
                  }
                ],
                "start": 2009,
                "end": 2037
              },
              "alternate": null,
              "start": 1997,
              "end": 2037
            }
          ],
          "start": 1801,
          "end": 2040
        },
        "start": 1785,
        "end": 2040
      },
      "start": 1781,
      "end": 2040
    },
    {
      "type": "LabeledStatement",
      "label": {
        "type": "Identifier",
        "decorators": [],
        "name": "l7",
        "optional": false,
        "typeAnnotation": null,
        "start": 2042,
        "end": 2044
      },
      "body": {
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
                    "start": 2059,
                    "end": 2060
                  },
                  "init": null,
                  "definite": false,
                  "start": 2059,
                  "end": 2060
                },
                {
                  "type": "VariableDeclarator",
                  "id": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "y",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2062,
                    "end": 2063
                  },
                  "init": null,
                  "definite": false,
                  "start": 2062,
                  "end": 2063
                }
              ],
              "declare": false,
              "start": 2055,
              "end": 2064
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
                          "start": 2090,
                          "end": 2091
                        },
                        "operator": "+",
                        "right": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "y",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 2094,
                          "end": 2095
                        },
                        "start": 2090,
                        "end": 2095
                      },
                      "start": 2083,
                      "end": 2095
                    }
                  ],
                  "start": 2081,
                  "end": 2096
                },
                "expression": false,
                "start": 2070,
                "end": 2096
              },
              "directive": null,
              "start": 2069,
              "end": 2098
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
                    "start": 2110,
                    "end": 2111
                  },
                  "operator": "+",
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "y",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2114,
                    "end": 2115
                  },
                  "start": 2110,
                  "end": 2115
                },
                "id": null,
                "generator": false,
                "start": 2104,
                "end": 2115
              },
              "directive": null,
              "start": 2103,
              "end": 2117
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
                  "start": 2126,
                  "end": 2127
                },
                "operator": "==",
                "right": {
                  "type": "Literal",
                  "value": 1,
                  "raw": "1",
                  "start": 2131,
                  "end": 2132
                },
                "start": 2126,
                "end": 2132
              },
              "consequent": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "BreakStatement",
                    "label": null,
                    "start": 2144,
                    "end": 2150
                  }
                ],
                "start": 2134,
                "end": 2156
              },
              "alternate": null,
              "start": 2122,
              "end": 2156
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
                  "start": 2165,
                  "end": 2166
                },
                "operator": "==",
                "right": {
                  "type": "Literal",
                  "value": 1,
                  "raw": "1",
                  "start": 2170,
                  "end": 2171
                },
                "start": 2165,
                "end": 2171
              },
              "consequent": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "BreakStatement",
                    "label": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "l7",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2189,
                      "end": 2191
                    },
                    "start": 2183,
                    "end": 2192
                  }
                ],
                "start": 2173,
                "end": 2198
              },
              "alternate": null,
              "start": 2161,
              "end": 2198
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
                  "start": 2207,
                  "end": 2208
                },
                "operator": "==",
                "right": {
                  "type": "Literal",
                  "value": 2,
                  "raw": "2",
                  "start": 2212,
                  "end": 2213
                },
                "start": 2207,
                "end": 2213
              },
              "consequent": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ContinueStatement",
                    "label": null,
                    "start": 2225,
                    "end": 2234
                  }
                ],
                "start": 2215,
                "end": 2240
              },
              "alternate": null,
              "start": 2203,
              "end": 2240
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
                  "start": 2249,
                  "end": 2250
                },
                "operator": "==",
                "right": {
                  "type": "Literal",
                  "value": 2,
                  "raw": "2",
                  "start": 2254,
                  "end": 2255
                },
                "start": 2249,
                "end": 2255
              },
              "consequent": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ContinueStatement",
                    "label": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "l7",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2276,
                      "end": 2278
                    },
                    "start": 2267,
                    "end": 2279
                  }
                ],
                "start": 2257,
                "end": 2285
              },
              "alternate": null,
              "start": 2245,
              "end": 2285
            }
          ],
          "start": 2049,
          "end": 2287
        },
        "test": {
          "type": "BinaryExpression",
          "left": {
            "type": "Literal",
            "value": 1,
            "raw": "1",
            "start": 2295,
            "end": 2296
          },
          "operator": "===",
          "right": {
            "type": "Literal",
            "value": 1,
            "raw": "1",
            "start": 2301,
            "end": 2302
          },
          "start": 2295,
          "end": 2302
        },
        "start": 2046,
        "end": 2303
      },
      "start": 2042,
      "end": 2303
    },
    {
      "type": "LabeledStatement",
      "label": {
        "type": "Identifier",
        "decorators": [],
        "name": "l8",
        "optional": false,
        "typeAnnotation": null,
        "start": 2305,
        "end": 2307
      },
      "body": {
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
                "start": 2318,
                "end": 2319
              },
              "init": {
                "type": "Literal",
                "value": 0,
                "raw": "0",
                "start": 2322,
                "end": 2323
              },
              "definite": false,
              "start": 2318,
              "end": 2323
            }
          ],
          "declare": false,
          "start": 2314,
          "end": 2323
        },
        "test": {
          "type": "BinaryExpression",
          "left": {
            "type": "Identifier",
            "decorators": [],
            "name": "y",
            "optional": false,
            "typeAnnotation": null,
            "start": 2325,
            "end": 2326
          },
          "operator": "<",
          "right": {
            "type": "Literal",
            "value": 1,
            "raw": "1",
            "start": 2329,
            "end": 2330
          },
          "start": 2325,
          "end": 2330
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
            "start": 2334,
            "end": 2335
          },
          "start": 2332,
          "end": 2335
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
                    "start": 2347,
                    "end": 2348
                  },
                  "init": {
                    "type": "Literal",
                    "value": 1,
                    "raw": "1",
                    "start": 2351,
                    "end": 2352
                  },
                  "definite": false,
                  "start": 2347,
                  "end": 2352
                }
              ],
              "declare": false,
              "start": 2343,
              "end": 2353
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
                          "start": 2379,
                          "end": 2380
                        },
                        "operator": "+",
                        "right": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "y",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 2383,
                          "end": 2384
                        },
                        "start": 2379,
                        "end": 2384
                      },
                      "start": 2372,
                      "end": 2384
                    }
                  ],
                  "start": 2370,
                  "end": 2385
                },
                "expression": false,
                "start": 2359,
                "end": 2385
              },
              "directive": null,
              "start": 2358,
              "end": 2387
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
                    "start": 2399,
                    "end": 2400
                  },
                  "operator": "+",
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "y",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2403,
                    "end": 2404
                  },
                  "start": 2399,
                  "end": 2404
                },
                "id": null,
                "generator": false,
                "start": 2393,
                "end": 2404
              },
              "directive": null,
              "start": 2392,
              "end": 2406
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
                  "start": 2415,
                  "end": 2416
                },
                "operator": "==",
                "right": {
                  "type": "Literal",
                  "value": 1,
                  "raw": "1",
                  "start": 2420,
                  "end": 2421
                },
                "start": 2415,
                "end": 2421
              },
              "consequent": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "BreakStatement",
                    "label": null,
                    "start": 2433,
                    "end": 2439
                  }
                ],
                "start": 2423,
                "end": 2445
              },
              "alternate": null,
              "start": 2411,
              "end": 2445
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
                  "start": 2454,
                  "end": 2455
                },
                "operator": "==",
                "right": {
                  "type": "Literal",
                  "value": 1,
                  "raw": "1",
                  "start": 2459,
                  "end": 2460
                },
                "start": 2454,
                "end": 2460
              },
              "consequent": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "BreakStatement",
                    "label": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "l8",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2478,
                      "end": 2480
                    },
                    "start": 2472,
                    "end": 2481
                  }
                ],
                "start": 2462,
                "end": 2487
              },
              "alternate": null,
              "start": 2450,
              "end": 2487
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
                  "start": 2496,
                  "end": 2497
                },
                "operator": "==",
                "right": {
                  "type": "Literal",
                  "value": 2,
                  "raw": "2",
                  "start": 2501,
                  "end": 2502
                },
                "start": 2496,
                "end": 2502
              },
              "consequent": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ContinueStatement",
                    "label": null,
                    "start": 2514,
                    "end": 2523
                  }
                ],
                "start": 2504,
                "end": 2529
              },
              "alternate": null,
              "start": 2492,
              "end": 2529
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
                  "start": 2538,
                  "end": 2539
                },
                "operator": "==",
                "right": {
                  "type": "Literal",
                  "value": 2,
                  "raw": "2",
                  "start": 2543,
                  "end": 2544
                },
                "start": 2538,
                "end": 2544
              },
              "consequent": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ContinueStatement",
                    "label": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "l8",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2565,
                      "end": 2567
                    },
                    "start": 2556,
                    "end": 2568
                  }
                ],
                "start": 2546,
                "end": 2574
              },
              "alternate": null,
              "start": 2534,
              "end": 2574
            }
          ],
          "start": 2337,
          "end": 2576
        },
        "start": 2309,
        "end": 2576
      },
      "start": 2305,
      "end": 2576
    },
    {
      "type": "LabeledStatement",
      "label": {
        "type": "Identifier",
        "decorators": [],
        "name": "l0_c",
        "optional": false,
        "typeAnnotation": null,
        "start": 2589,
        "end": 2593
      },
      "body": {
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
                "start": 2606,
                "end": 2607
              },
              "init": null,
              "definite": false,
              "start": 2606,
              "end": 2607
            }
          ],
          "declare": false,
          "start": 2600,
          "end": 2607
        },
        "right": {
          "type": "ArrayExpression",
          "elements": [],
          "start": 2611,
          "end": 2613
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
                        "start": 2642,
                        "end": 2643
                      },
                      "start": 2635,
                      "end": 2643
                    }
                  ],
                  "start": 2633,
                  "end": 2644
                },
                "expression": false,
                "start": 2622,
                "end": 2644
              },
              "directive": null,
              "start": 2621,
              "end": 2646
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
                  "start": 2658,
                  "end": 2659
                },
                "id": null,
                "generator": false,
                "start": 2652,
                "end": 2659
              },
              "directive": null,
              "start": 2651,
              "end": 2661
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
                  "start": 2670,
                  "end": 2671
                },
                "operator": "==",
                "right": {
                  "type": "Literal",
                  "value": 1,
                  "raw": "1",
                  "start": 2675,
                  "end": 2676
                },
                "start": 2670,
                "end": 2676
              },
              "consequent": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "BreakStatement",
                    "label": null,
                    "start": 2688,
                    "end": 2694
                  }
                ],
                "start": 2678,
                "end": 2700
              },
              "alternate": null,
              "start": 2666,
              "end": 2700
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
                  "start": 2709,
                  "end": 2710
                },
                "operator": "==",
                "right": {
                  "type": "Literal",
                  "value": 1,
                  "raw": "1",
                  "start": 2714,
                  "end": 2715
                },
                "start": 2709,
                "end": 2715
              },
              "consequent": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "BreakStatement",
                    "label": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "l0_c",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2733,
                      "end": 2737
                    },
                    "start": 2727,
                    "end": 2738
                  }
                ],
                "start": 2717,
                "end": 2744
              },
              "alternate": null,
              "start": 2705,
              "end": 2744
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
                  "start": 2753,
                  "end": 2754
                },
                "operator": "==",
                "right": {
                  "type": "Literal",
                  "value": 2,
                  "raw": "2",
                  "start": 2758,
                  "end": 2759
                },
                "start": 2753,
                "end": 2759
              },
              "consequent": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ContinueStatement",
                    "label": null,
                    "start": 2771,
                    "end": 2780
                  }
                ],
                "start": 2761,
                "end": 2786
              },
              "alternate": null,
              "start": 2749,
              "end": 2786
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
                  "start": 2795,
                  "end": 2796
                },
                "operator": "==",
                "right": {
                  "type": "Literal",
                  "value": 2,
                  "raw": "2",
                  "start": 2800,
                  "end": 2801
                },
                "start": 2795,
                "end": 2801
              },
              "consequent": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ContinueStatement",
                    "label": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "l0_c",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2822,
                      "end": 2826
                    },
                    "start": 2813,
                    "end": 2827
                  }
                ],
                "start": 2803,
                "end": 2833
              },
              "alternate": null,
              "start": 2791,
              "end": 2833
            }
          ],
          "start": 2615,
          "end": 2835
        },
        "start": 2595,
        "end": 2835
      },
      "start": 2589,
      "end": 2835
    },
    {
      "type": "LabeledStatement",
      "label": {
        "type": "Identifier",
        "decorators": [],
        "name": "l00_c",
        "optional": false,
        "typeAnnotation": null,
        "start": 2837,
        "end": 2842
      },
      "body": {
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
                "start": 2855,
                "end": 2856
              },
              "init": null,
              "definite": false,
              "start": 2855,
              "end": 2856
            }
          ],
          "declare": false,
          "start": 2849,
          "end": 2856
        },
        "right": {
          "type": "ArrayExpression",
          "elements": [],
          "start": 2860,
          "end": 2862
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
                        "start": 2891,
                        "end": 2892
                      },
                      "start": 2884,
                      "end": 2892
                    }
                  ],
                  "start": 2882,
                  "end": 2893
                },
                "expression": false,
                "start": 2871,
                "end": 2893
              },
              "directive": null,
              "start": 2870,
              "end": 2895
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
                  "start": 2907,
                  "end": 2908
                },
                "id": null,
                "generator": false,
                "start": 2901,
                "end": 2908
              },
              "directive": null,
              "start": 2900,
              "end": 2910
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
                  "start": 2919,
                  "end": 2920
                },
                "operator": "==",
                "right": {
                  "type": "Literal",
                  "value": "1",
                  "raw": "\"1\"",
                  "start": 2924,
                  "end": 2927
                },
                "start": 2919,
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
              "start": 2915,
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
                  "value": "1",
                  "raw": "\"1\"",
                  "start": 2965,
                  "end": 2968
                },
                "start": 2960,
                "end": 2968
              },
              "consequent": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "BreakStatement",
                    "label": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "l00_c",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2986,
                      "end": 2991
                    },
                    "start": 2980,
                    "end": 2992
                  }
                ],
                "start": 2970,
                "end": 2998
              },
              "alternate": null,
              "start": 2956,
              "end": 2998
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
                  "start": 3007,
                  "end": 3008
                },
                "operator": "==",
                "right": {
                  "type": "Literal",
                  "value": "2",
                  "raw": "\"2\"",
                  "start": 3012,
                  "end": 3015
                },
                "start": 3007,
                "end": 3015
              },
              "consequent": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ContinueStatement",
                    "label": null,
                    "start": 3027,
                    "end": 3036
                  }
                ],
                "start": 3017,
                "end": 3042
              },
              "alternate": null,
              "start": 3003,
              "end": 3042
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
                  "start": 3051,
                  "end": 3052
                },
                "operator": "==",
                "right": {
                  "type": "Literal",
                  "value": "2",
                  "raw": "\"2\"",
                  "start": 3056,
                  "end": 3059
                },
                "start": 3051,
                "end": 3059
              },
              "consequent": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ContinueStatement",
                    "label": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "l00_c",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 3080,
                      "end": 3085
                    },
                    "start": 3071,
                    "end": 3086
                  }
                ],
                "start": 3061,
                "end": 3092
              },
              "alternate": null,
              "start": 3047,
              "end": 3092
            }
          ],
          "start": 2864,
          "end": 3094
        },
        "start": 2844,
        "end": 3094
      },
      "start": 2837,
      "end": 3094
    },
    {
      "type": "LabeledStatement",
      "label": {
        "type": "Identifier",
        "decorators": [],
        "name": "l1_c",
        "optional": false,
        "typeAnnotation": null,
        "start": 3096,
        "end": 3100
      },
      "body": {
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
                "start": 3113,
                "end": 3114
              },
              "init": {
                "type": "Literal",
                "value": 0,
                "raw": "0",
                "start": 3117,
                "end": 3118
              },
              "definite": false,
              "start": 3113,
              "end": 3118
            }
          ],
          "declare": false,
          "start": 3107,
          "end": 3118
        },
        "test": {
          "type": "BinaryExpression",
          "left": {
            "type": "Identifier",
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null,
            "start": 3120,
            "end": 3121
          },
          "operator": "<",
          "right": {
            "type": "Literal",
            "value": 1,
            "raw": "1",
            "start": 3124,
            "end": 3125
          },
          "start": 3120,
          "end": 3125
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
                        "start": 3155,
                        "end": 3156
                      },
                      "start": 3148,
                      "end": 3156
                    }
                  ],
                  "start": 3146,
                  "end": 3157
                },
                "expression": false,
                "start": 3135,
                "end": 3157
              },
              "directive": null,
              "start": 3134,
              "end": 3159
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
                  "start": 3171,
                  "end": 3172
                },
                "id": null,
                "generator": false,
                "start": 3165,
                "end": 3172
              },
              "directive": null,
              "start": 3164,
              "end": 3174
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
                  "start": 3183,
                  "end": 3184
                },
                "operator": "==",
                "right": {
                  "type": "Literal",
                  "value": 1,
                  "raw": "1",
                  "start": 3188,
                  "end": 3189
                },
                "start": 3183,
                "end": 3189
              },
              "consequent": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "BreakStatement",
                    "label": null,
                    "start": 3201,
                    "end": 3207
                  }
                ],
                "start": 3191,
                "end": 3213
              },
              "alternate": null,
              "start": 3179,
              "end": 3213
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
                  "start": 3222,
                  "end": 3223
                },
                "operator": "==",
                "right": {
                  "type": "Literal",
                  "value": 1,
                  "raw": "1",
                  "start": 3227,
                  "end": 3228
                },
                "start": 3222,
                "end": 3228
              },
              "consequent": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "BreakStatement",
                    "label": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "l1_c",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 3246,
                      "end": 3250
                    },
                    "start": 3240,
                    "end": 3251
                  }
                ],
                "start": 3230,
                "end": 3257
              },
              "alternate": null,
              "start": 3218,
              "end": 3257
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
                  "start": 3266,
                  "end": 3267
                },
                "operator": "==",
                "right": {
                  "type": "Literal",
                  "value": 2,
                  "raw": "2",
                  "start": 3271,
                  "end": 3272
                },
                "start": 3266,
                "end": 3272
              },
              "consequent": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ContinueStatement",
                    "label": null,
                    "start": 3284,
                    "end": 3293
                  }
                ],
                "start": 3274,
                "end": 3299
              },
              "alternate": null,
              "start": 3262,
              "end": 3299
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
                  "start": 3308,
                  "end": 3309
                },
                "operator": "==",
                "right": {
                  "type": "Literal",
                  "value": 2,
                  "raw": "2",
                  "start": 3313,
                  "end": 3314
                },
                "start": 3308,
                "end": 3314
              },
              "consequent": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ContinueStatement",
                    "label": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "l1_c",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 3335,
                      "end": 3339
                    },
                    "start": 3326,
                    "end": 3340
                  }
                ],
                "start": 3316,
                "end": 3346
              },
              "alternate": null,
              "start": 3304,
              "end": 3346
            }
          ],
          "start": 3128,
          "end": 3348
        },
        "start": 3102,
        "end": 3348
      },
      "start": 3096,
      "end": 3348
    },
    {
      "type": "LabeledStatement",
      "label": {
        "type": "Identifier",
        "decorators": [],
        "name": "l2_c",
        "optional": false,
        "typeAnnotation": null,
        "start": 3350,
        "end": 3354
      },
      "body": {
        "type": "WhileStatement",
        "test": {
          "type": "BinaryExpression",
          "left": {
            "type": "Literal",
            "value": 1,
            "raw": "1",
            "start": 3363,
            "end": 3364
          },
          "operator": "===",
          "right": {
            "type": "Literal",
            "value": 1,
            "raw": "1",
            "start": 3369,
            "end": 3370
          },
          "start": 3363,
          "end": 3370
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
                    "start": 3384,
                    "end": 3385
                  },
                  "init": {
                    "type": "Literal",
                    "value": 1,
                    "raw": "1",
                    "start": 3388,
                    "end": 3389
                  },
                  "definite": false,
                  "start": 3384,
                  "end": 3389
                }
              ],
              "declare": false,
              "start": 3378,
              "end": 3390
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
                        "start": 3416,
                        "end": 3417
                      },
                      "start": 3409,
                      "end": 3417
                    }
                  ],
                  "start": 3407,
                  "end": 3418
                },
                "expression": false,
                "start": 3396,
                "end": 3418
              },
              "directive": null,
              "start": 3395,
              "end": 3420
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
                  "start": 3432,
                  "end": 3433
                },
                "id": null,
                "generator": false,
                "start": 3426,
                "end": 3433
              },
              "directive": null,
              "start": 3425,
              "end": 3435
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
                  "start": 3444,
                  "end": 3445
                },
                "operator": "==",
                "right": {
                  "type": "Literal",
                  "value": 1,
                  "raw": "1",
                  "start": 3449,
                  "end": 3450
                },
                "start": 3444,
                "end": 3450
              },
              "consequent": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "BreakStatement",
                    "label": null,
                    "start": 3462,
                    "end": 3468
                  }
                ],
                "start": 3452,
                "end": 3474
              },
              "alternate": null,
              "start": 3440,
              "end": 3474
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
                  "start": 3483,
                  "end": 3484
                },
                "operator": "==",
                "right": {
                  "type": "Literal",
                  "value": 1,
                  "raw": "1",
                  "start": 3488,
                  "end": 3489
                },
                "start": 3483,
                "end": 3489
              },
              "consequent": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "BreakStatement",
                    "label": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "l2_c",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 3507,
                      "end": 3511
                    },
                    "start": 3501,
                    "end": 3512
                  }
                ],
                "start": 3491,
                "end": 3518
              },
              "alternate": null,
              "start": 3479,
              "end": 3518
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
                  "start": 3527,
                  "end": 3528
                },
                "operator": "==",
                "right": {
                  "type": "Literal",
                  "value": 2,
                  "raw": "2",
                  "start": 3532,
                  "end": 3533
                },
                "start": 3527,
                "end": 3533
              },
              "consequent": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ContinueStatement",
                    "label": null,
                    "start": 3545,
                    "end": 3554
                  }
                ],
                "start": 3535,
                "end": 3560
              },
              "alternate": null,
              "start": 3523,
              "end": 3560
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
                  "start": 3569,
                  "end": 3570
                },
                "operator": "==",
                "right": {
                  "type": "Literal",
                  "value": 2,
                  "raw": "2",
                  "start": 3574,
                  "end": 3575
                },
                "start": 3569,
                "end": 3575
              },
              "consequent": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ContinueStatement",
                    "label": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "l2_c",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 3596,
                      "end": 3600
                    },
                    "start": 3587,
                    "end": 3601
                  }
                ],
                "start": 3577,
                "end": 3607
              },
              "alternate": null,
              "start": 3565,
              "end": 3607
            }
          ],
          "start": 3372,
          "end": 3609
        },
        "start": 3356,
        "end": 3609
      },
      "start": 3350,
      "end": 3609
    },
    {
      "type": "LabeledStatement",
      "label": {
        "type": "Identifier",
        "decorators": [],
        "name": "l3_c",
        "optional": false,
        "typeAnnotation": null,
        "start": 3611,
        "end": 3615
      },
      "body": {
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
                    "start": 3632,
                    "end": 3633
                  },
                  "init": {
                    "type": "Literal",
                    "value": 1,
                    "raw": "1",
                    "start": 3636,
                    "end": 3637
                  },
                  "definite": false,
                  "start": 3632,
                  "end": 3637
                }
              ],
              "declare": false,
              "start": 3626,
              "end": 3638
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
                        "start": 3664,
                        "end": 3665
                      },
                      "start": 3657,
                      "end": 3665
                    }
                  ],
                  "start": 3655,
                  "end": 3666
                },
                "expression": false,
                "start": 3644,
                "end": 3666
              },
              "directive": null,
              "start": 3643,
              "end": 3668
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
                  "start": 3680,
                  "end": 3681
                },
                "id": null,
                "generator": false,
                "start": 3674,
                "end": 3681
              },
              "directive": null,
              "start": 3673,
              "end": 3683
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
                  "start": 3692,
                  "end": 3693
                },
                "operator": "==",
                "right": {
                  "type": "Literal",
                  "value": 1,
                  "raw": "1",
                  "start": 3697,
                  "end": 3698
                },
                "start": 3692,
                "end": 3698
              },
              "consequent": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "BreakStatement",
                    "label": null,
                    "start": 3710,
                    "end": 3716
                  }
                ],
                "start": 3700,
                "end": 3722
              },
              "alternate": null,
              "start": 3688,
              "end": 3722
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
                  "start": 3731,
                  "end": 3732
                },
                "operator": "==",
                "right": {
                  "type": "Literal",
                  "value": 1,
                  "raw": "1",
                  "start": 3736,
                  "end": 3737
                },
                "start": 3731,
                "end": 3737
              },
              "consequent": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "BreakStatement",
                    "label": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "l3_c",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 3755,
                      "end": 3759
                    },
                    "start": 3749,
                    "end": 3760
                  }
                ],
                "start": 3739,
                "end": 3766
              },
              "alternate": null,
              "start": 3727,
              "end": 3766
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
                  "start": 3775,
                  "end": 3776
                },
                "operator": "==",
                "right": {
                  "type": "Literal",
                  "value": 2,
                  "raw": "2",
                  "start": 3780,
                  "end": 3781
                },
                "start": 3775,
                "end": 3781
              },
              "consequent": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ContinueStatement",
                    "label": null,
                    "start": 3793,
                    "end": 3802
                  }
                ],
                "start": 3783,
                "end": 3808
              },
              "alternate": null,
              "start": 3771,
              "end": 3808
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
                  "start": 3817,
                  "end": 3818
                },
                "operator": "==",
                "right": {
                  "type": "Literal",
                  "value": 2,
                  "raw": "2",
                  "start": 3822,
                  "end": 3823
                },
                "start": 3817,
                "end": 3823
              },
              "consequent": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ContinueStatement",
                    "label": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "l3_c",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 3844,
                      "end": 3848
                    },
                    "start": 3835,
                    "end": 3849
                  }
                ],
                "start": 3825,
                "end": 3855
              },
              "alternate": null,
              "start": 3813,
              "end": 3855
            }
          ],
          "start": 3620,
          "end": 3857
        },
        "test": {
          "type": "BinaryExpression",
          "left": {
            "type": "Literal",
            "value": 1,
            "raw": "1",
            "start": 3865,
            "end": 3866
          },
          "operator": "===",
          "right": {
            "type": "Literal",
            "value": 1,
            "raw": "1",
            "start": 3871,
            "end": 3872
          },
          "start": 3865,
          "end": 3872
        },
        "start": 3617,
        "end": 3873
      },
      "start": 3611,
      "end": 3873
    },
    {
      "type": "LabeledStatement",
      "label": {
        "type": "Identifier",
        "decorators": [],
        "name": "l4_c",
        "optional": false,
        "typeAnnotation": null,
        "start": 3875,
        "end": 3879
      },
      "body": {
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
                "start": 3892,
                "end": 3893
              },
              "init": {
                "type": "Literal",
                "value": 0,
                "raw": "0",
                "start": 3896,
                "end": 3897
              },
              "definite": false,
              "start": 3892,
              "end": 3897
            }
          ],
          "declare": false,
          "start": 3886,
          "end": 3897
        },
        "test": {
          "type": "BinaryExpression",
          "left": {
            "type": "Identifier",
            "decorators": [],
            "name": "y",
            "optional": false,
            "typeAnnotation": null,
            "start": 3899,
            "end": 3900
          },
          "operator": "<",
          "right": {
            "type": "Literal",
            "value": 1,
            "raw": "1",
            "start": 3903,
            "end": 3904
          },
          "start": 3899,
          "end": 3904
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
                    "start": 3919,
                    "end": 3920
                  },
                  "init": {
                    "type": "Literal",
                    "value": 1,
                    "raw": "1",
                    "start": 3923,
                    "end": 3924
                  },
                  "definite": false,
                  "start": 3919,
                  "end": 3924
                }
              ],
              "declare": false,
              "start": 3913,
              "end": 3925
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
                        "start": 3951,
                        "end": 3952
                      },
                      "start": 3944,
                      "end": 3952
                    }
                  ],
                  "start": 3942,
                  "end": 3953
                },
                "expression": false,
                "start": 3931,
                "end": 3953
              },
              "directive": null,
              "start": 3930,
              "end": 3955
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
                  "start": 3967,
                  "end": 3968
                },
                "id": null,
                "generator": false,
                "start": 3961,
                "end": 3968
              },
              "directive": null,
              "start": 3960,
              "end": 3970
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
                  "start": 3979,
                  "end": 3980
                },
                "operator": "==",
                "right": {
                  "type": "Literal",
                  "value": 1,
                  "raw": "1",
                  "start": 3984,
                  "end": 3985
                },
                "start": 3979,
                "end": 3985
              },
              "consequent": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "BreakStatement",
                    "label": null,
                    "start": 3997,
                    "end": 4003
                  }
                ],
                "start": 3987,
                "end": 4009
              },
              "alternate": null,
              "start": 3975,
              "end": 4009
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
                  "start": 4018,
                  "end": 4019
                },
                "operator": "==",
                "right": {
                  "type": "Literal",
                  "value": 1,
                  "raw": "1",
                  "start": 4023,
                  "end": 4024
                },
                "start": 4018,
                "end": 4024
              },
              "consequent": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "BreakStatement",
                    "label": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "l4_c",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 4042,
                      "end": 4046
                    },
                    "start": 4036,
                    "end": 4047
                  }
                ],
                "start": 4026,
                "end": 4053
              },
              "alternate": null,
              "start": 4014,
              "end": 4053
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
                  "start": 4062,
                  "end": 4063
                },
                "operator": "==",
                "right": {
                  "type": "Literal",
                  "value": 2,
                  "raw": "2",
                  "start": 4067,
                  "end": 4068
                },
                "start": 4062,
                "end": 4068
              },
              "consequent": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ContinueStatement",
                    "label": null,
                    "start": 4080,
                    "end": 4089
                  }
                ],
                "start": 4070,
                "end": 4095
              },
              "alternate": null,
              "start": 4058,
              "end": 4095
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
                  "start": 4104,
                  "end": 4105
                },
                "operator": "==",
                "right": {
                  "type": "Literal",
                  "value": 2,
                  "raw": "2",
                  "start": 4109,
                  "end": 4110
                },
                "start": 4104,
                "end": 4110
              },
              "consequent": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ContinueStatement",
                    "label": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "l4_c",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 4131,
                      "end": 4135
                    },
                    "start": 4122,
                    "end": 4136
                  }
                ],
                "start": 4112,
                "end": 4142
              },
              "alternate": null,
              "start": 4100,
              "end": 4142
            }
          ],
          "start": 3907,
          "end": 4144
        },
        "start": 3881,
        "end": 4144
      },
      "start": 3875,
      "end": 4144
    },
    {
      "type": "LabeledStatement",
      "label": {
        "type": "Identifier",
        "decorators": [],
        "name": "l5_c",
        "optional": false,
        "typeAnnotation": null,
        "start": 4146,
        "end": 4150
      },
      "body": {
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
                "start": 4163,
                "end": 4164
              },
              "init": {
                "type": "Literal",
                "value": 0,
                "raw": "0",
                "start": 4167,
                "end": 4168
              },
              "definite": false,
              "start": 4163,
              "end": 4168
            },
            {
              "type": "VariableDeclarator",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "y",
                "optional": false,
                "typeAnnotation": null,
                "start": 4170,
                "end": 4171
              },
              "init": {
                "type": "Literal",
                "value": 1,
                "raw": "1",
                "start": 4174,
                "end": 4175
              },
              "definite": false,
              "start": 4170,
              "end": 4175
            }
          ],
          "declare": false,
          "start": 4157,
          "end": 4175
        },
        "test": {
          "type": "BinaryExpression",
          "left": {
            "type": "Identifier",
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null,
            "start": 4177,
            "end": 4178
          },
          "operator": "<",
          "right": {
            "type": "Literal",
            "value": 1,
            "raw": "1",
            "start": 4181,
            "end": 4182
          },
          "start": 4177,
          "end": 4182
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
                          "start": 4212,
                          "end": 4213
                        },
                        "operator": "+",
                        "right": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "y",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 4216,
                          "end": 4217
                        },
                        "start": 4212,
                        "end": 4217
                      },
                      "start": 4205,
                      "end": 4217
                    }
                  ],
                  "start": 4203,
                  "end": 4218
                },
                "expression": false,
                "start": 4192,
                "end": 4218
              },
              "directive": null,
              "start": 4191,
              "end": 4220
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
                    "start": 4232,
                    "end": 4233
                  },
                  "operator": "+",
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "y",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 4236,
                    "end": 4237
                  },
                  "start": 4232,
                  "end": 4237
                },
                "id": null,
                "generator": false,
                "start": 4226,
                "end": 4237
              },
              "directive": null,
              "start": 4225,
              "end": 4239
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
                  "start": 4248,
                  "end": 4249
                },
                "operator": "==",
                "right": {
                  "type": "Literal",
                  "value": 1,
                  "raw": "1",
                  "start": 4253,
                  "end": 4254
                },
                "start": 4248,
                "end": 4254
              },
              "consequent": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "BreakStatement",
                    "label": null,
                    "start": 4266,
                    "end": 4272
                  }
                ],
                "start": 4256,
                "end": 4278
              },
              "alternate": null,
              "start": 4244,
              "end": 4278
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
                  "start": 4287,
                  "end": 4288
                },
                "operator": "==",
                "right": {
                  "type": "Literal",
                  "value": 1,
                  "raw": "1",
                  "start": 4292,
                  "end": 4293
                },
                "start": 4287,
                "end": 4293
              },
              "consequent": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "BreakStatement",
                    "label": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "l5_c",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 4311,
                      "end": 4315
                    },
                    "start": 4305,
                    "end": 4316
                  }
                ],
                "start": 4295,
                "end": 4322
              },
              "alternate": null,
              "start": 4283,
              "end": 4322
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
                  "start": 4331,
                  "end": 4332
                },
                "operator": "==",
                "right": {
                  "type": "Literal",
                  "value": 2,
                  "raw": "2",
                  "start": 4336,
                  "end": 4337
                },
                "start": 4331,
                "end": 4337
              },
              "consequent": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ContinueStatement",
                    "label": null,
                    "start": 4349,
                    "end": 4358
                  }
                ],
                "start": 4339,
                "end": 4364
              },
              "alternate": null,
              "start": 4327,
              "end": 4364
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
                  "start": 4373,
                  "end": 4374
                },
                "operator": "==",
                "right": {
                  "type": "Literal",
                  "value": 2,
                  "raw": "2",
                  "start": 4378,
                  "end": 4379
                },
                "start": 4373,
                "end": 4379
              },
              "consequent": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ContinueStatement",
                    "label": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "l5_c",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 4400,
                      "end": 4404
                    },
                    "start": 4391,
                    "end": 4405
                  }
                ],
                "start": 4381,
                "end": 4411
              },
              "alternate": null,
              "start": 4369,
              "end": 4411
            }
          ],
          "start": 4185,
          "end": 4413
        },
        "start": 4152,
        "end": 4413
      },
      "start": 4146,
      "end": 4413
    },
    {
      "type": "LabeledStatement",
      "label": {
        "type": "Identifier",
        "decorators": [],
        "name": "l6_c",
        "optional": false,
        "typeAnnotation": null,
        "start": 4415,
        "end": 4419
      },
      "body": {
        "type": "WhileStatement",
        "test": {
          "type": "BinaryExpression",
          "left": {
            "type": "Literal",
            "value": 1,
            "raw": "1",
            "start": 4428,
            "end": 4429
          },
          "operator": "===",
          "right": {
            "type": "Literal",
            "value": 1,
            "raw": "1",
            "start": 4434,
            "end": 4435
          },
          "start": 4428,
          "end": 4435
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
                    "start": 4449,
                    "end": 4450
                  },
                  "init": {
                    "type": "Literal",
                    "value": 1,
                    "raw": "1",
                    "start": 4453,
                    "end": 4454
                  },
                  "definite": false,
                  "start": 4449,
                  "end": 4454
                },
                {
                  "type": "VariableDeclarator",
                  "id": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "y",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 4456,
                    "end": 4457
                  },
                  "init": {
                    "type": "Literal",
                    "value": 1,
                    "raw": "1",
                    "start": 4460,
                    "end": 4461
                  },
                  "definite": false,
                  "start": 4456,
                  "end": 4461
                }
              ],
              "declare": false,
              "start": 4443,
              "end": 4462
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
                          "start": 4488,
                          "end": 4489
                        },
                        "operator": "+",
                        "right": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "y",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 4492,
                          "end": 4493
                        },
                        "start": 4488,
                        "end": 4493
                      },
                      "start": 4481,
                      "end": 4493
                    }
                  ],
                  "start": 4479,
                  "end": 4494
                },
                "expression": false,
                "start": 4468,
                "end": 4494
              },
              "directive": null,
              "start": 4467,
              "end": 4496
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
                    "start": 4508,
                    "end": 4509
                  },
                  "operator": "+",
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "y",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 4512,
                    "end": 4513
                  },
                  "start": 4508,
                  "end": 4513
                },
                "id": null,
                "generator": false,
                "start": 4502,
                "end": 4513
              },
              "directive": null,
              "start": 4501,
              "end": 4515
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
                  "start": 4524,
                  "end": 4525
                },
                "operator": "==",
                "right": {
                  "type": "Literal",
                  "value": 1,
                  "raw": "1",
                  "start": 4529,
                  "end": 4530
                },
                "start": 4524,
                "end": 4530
              },
              "consequent": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "BreakStatement",
                    "label": null,
                    "start": 4542,
                    "end": 4548
                  }
                ],
                "start": 4532,
                "end": 4554
              },
              "alternate": null,
              "start": 4520,
              "end": 4554
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
                  "start": 4563,
                  "end": 4564
                },
                "operator": "==",
                "right": {
                  "type": "Literal",
                  "value": 1,
                  "raw": "1",
                  "start": 4568,
                  "end": 4569
                },
                "start": 4563,
                "end": 4569
              },
              "consequent": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "BreakStatement",
                    "label": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "l6_c",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 4587,
                      "end": 4591
                    },
                    "start": 4581,
                    "end": 4592
                  }
                ],
                "start": 4571,
                "end": 4598
              },
              "alternate": null,
              "start": 4559,
              "end": 4598
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
                  "start": 4607,
                  "end": 4608
                },
                "operator": "==",
                "right": {
                  "type": "Literal",
                  "value": 2,
                  "raw": "2",
                  "start": 4612,
                  "end": 4613
                },
                "start": 4607,
                "end": 4613
              },
              "consequent": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ContinueStatement",
                    "label": null,
                    "start": 4625,
                    "end": 4634
                  }
                ],
                "start": 4615,
                "end": 4640
              },
              "alternate": null,
              "start": 4603,
              "end": 4640
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
                  "start": 4649,
                  "end": 4650
                },
                "operator": "==",
                "right": {
                  "type": "Literal",
                  "value": 2,
                  "raw": "2",
                  "start": 4654,
                  "end": 4655
                },
                "start": 4649,
                "end": 4655
              },
              "consequent": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ContinueStatement",
                    "label": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "l6_c",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 4676,
                      "end": 4680
                    },
                    "start": 4667,
                    "end": 4681
                  }
                ],
                "start": 4657,
                "end": 4687
              },
              "alternate": null,
              "start": 4645,
              "end": 4687
            }
          ],
          "start": 4437,
          "end": 4690
        },
        "start": 4421,
        "end": 4690
      },
      "start": 4415,
      "end": 4690
    },
    {
      "type": "LabeledStatement",
      "label": {
        "type": "Identifier",
        "decorators": [],
        "name": "l7_c",
        "optional": false,
        "typeAnnotation": null,
        "start": 4692,
        "end": 4696
      },
      "body": {
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
                    "start": 4713,
                    "end": 4714
                  },
                  "init": {
                    "type": "Literal",
                    "value": 1,
                    "raw": "1",
                    "start": 4717,
                    "end": 4718
                  },
                  "definite": false,
                  "start": 4713,
                  "end": 4718
                },
                {
                  "type": "VariableDeclarator",
                  "id": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "y",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 4720,
                    "end": 4721
                  },
                  "init": {
                    "type": "Literal",
                    "value": 1,
                    "raw": "1",
                    "start": 4724,
                    "end": 4725
                  },
                  "definite": false,
                  "start": 4720,
                  "end": 4725
                }
              ],
              "declare": false,
              "start": 4707,
              "end": 4726
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
                          "start": 4752,
                          "end": 4753
                        },
                        "operator": "+",
                        "right": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "y",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 4756,
                          "end": 4757
                        },
                        "start": 4752,
                        "end": 4757
                      },
                      "start": 4745,
                      "end": 4757
                    }
                  ],
                  "start": 4743,
                  "end": 4758
                },
                "expression": false,
                "start": 4732,
                "end": 4758
              },
              "directive": null,
              "start": 4731,
              "end": 4760
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
                    "start": 4772,
                    "end": 4773
                  },
                  "operator": "+",
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "y",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 4776,
                    "end": 4777
                  },
                  "start": 4772,
                  "end": 4777
                },
                "id": null,
                "generator": false,
                "start": 4766,
                "end": 4777
              },
              "directive": null,
              "start": 4765,
              "end": 4779
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
                  "start": 4788,
                  "end": 4789
                },
                "operator": "==",
                "right": {
                  "type": "Literal",
                  "value": 1,
                  "raw": "1",
                  "start": 4793,
                  "end": 4794
                },
                "start": 4788,
                "end": 4794
              },
              "consequent": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "BreakStatement",
                    "label": null,
                    "start": 4806,
                    "end": 4812
                  }
                ],
                "start": 4796,
                "end": 4818
              },
              "alternate": null,
              "start": 4784,
              "end": 4818
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
                  "start": 4827,
                  "end": 4828
                },
                "operator": "==",
                "right": {
                  "type": "Literal",
                  "value": 1,
                  "raw": "1",
                  "start": 4832,
                  "end": 4833
                },
                "start": 4827,
                "end": 4833
              },
              "consequent": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "BreakStatement",
                    "label": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "l7_c",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 4851,
                      "end": 4855
                    },
                    "start": 4845,
                    "end": 4856
                  }
                ],
                "start": 4835,
                "end": 4862
              },
              "alternate": null,
              "start": 4823,
              "end": 4862
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
                  "start": 4871,
                  "end": 4872
                },
                "operator": "==",
                "right": {
                  "type": "Literal",
                  "value": 2,
                  "raw": "2",
                  "start": 4876,
                  "end": 4877
                },
                "start": 4871,
                "end": 4877
              },
              "consequent": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ContinueStatement",
                    "label": null,
                    "start": 4889,
                    "end": 4898
                  }
                ],
                "start": 4879,
                "end": 4904
              },
              "alternate": null,
              "start": 4867,
              "end": 4904
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
                  "start": 4913,
                  "end": 4914
                },
                "operator": "==",
                "right": {
                  "type": "Literal",
                  "value": 2,
                  "raw": "2",
                  "start": 4918,
                  "end": 4919
                },
                "start": 4913,
                "end": 4919
              },
              "consequent": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ContinueStatement",
                    "label": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "l7_c",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 4940,
                      "end": 4944
                    },
                    "start": 4931,
                    "end": 4945
                  }
                ],
                "start": 4921,
                "end": 4951
              },
              "alternate": null,
              "start": 4909,
              "end": 4951
            }
          ],
          "start": 4701,
          "end": 4953
        },
        "test": {
          "type": "BinaryExpression",
          "left": {
            "type": "Literal",
            "value": 1,
            "raw": "1",
            "start": 4961,
            "end": 4962
          },
          "operator": "===",
          "right": {
            "type": "Literal",
            "value": 1,
            "raw": "1",
            "start": 4967,
            "end": 4968
          },
          "start": 4961,
          "end": 4968
        },
        "start": 4698,
        "end": 4969
      },
      "start": 4692,
      "end": 4969
    },
    {
      "type": "LabeledStatement",
      "label": {
        "type": "Identifier",
        "decorators": [],
        "name": "l8_c",
        "optional": false,
        "typeAnnotation": null,
        "start": 4971,
        "end": 4975
      },
      "body": {
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
                "start": 4988,
                "end": 4989
              },
              "init": {
                "type": "Literal",
                "value": 0,
                "raw": "0",
                "start": 4992,
                "end": 4993
              },
              "definite": false,
              "start": 4988,
              "end": 4993
            }
          ],
          "declare": false,
          "start": 4982,
          "end": 4993
        },
        "test": {
          "type": "BinaryExpression",
          "left": {
            "type": "Identifier",
            "decorators": [],
            "name": "y",
            "optional": false,
            "typeAnnotation": null,
            "start": 4995,
            "end": 4996
          },
          "operator": "<",
          "right": {
            "type": "Literal",
            "value": 1,
            "raw": "1",
            "start": 4999,
            "end": 5000
          },
          "start": 4995,
          "end": 5000
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
                    "start": 5015,
                    "end": 5016
                  },
                  "init": {
                    "type": "Literal",
                    "value": 1,
                    "raw": "1",
                    "start": 5019,
                    "end": 5020
                  },
                  "definite": false,
                  "start": 5015,
                  "end": 5020
                }
              ],
              "declare": false,
              "start": 5009,
              "end": 5021
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
                          "start": 5047,
                          "end": 5048
                        },
                        "operator": "+",
                        "right": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "y",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 5051,
                          "end": 5052
                        },
                        "start": 5047,
                        "end": 5052
                      },
                      "start": 5040,
                      "end": 5052
                    }
                  ],
                  "start": 5038,
                  "end": 5053
                },
                "expression": false,
                "start": 5027,
                "end": 5053
              },
              "directive": null,
              "start": 5026,
              "end": 5055
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
                    "start": 5067,
                    "end": 5068
                  },
                  "operator": "+",
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "y",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 5071,
                    "end": 5072
                  },
                  "start": 5067,
                  "end": 5072
                },
                "id": null,
                "generator": false,
                "start": 5061,
                "end": 5072
              },
              "directive": null,
              "start": 5060,
              "end": 5074
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
                  "start": 5083,
                  "end": 5084
                },
                "operator": "==",
                "right": {
                  "type": "Literal",
                  "value": 1,
                  "raw": "1",
                  "start": 5088,
                  "end": 5089
                },
                "start": 5083,
                "end": 5089
              },
              "consequent": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "BreakStatement",
                    "label": null,
                    "start": 5101,
                    "end": 5107
                  }
                ],
                "start": 5091,
                "end": 5113
              },
              "alternate": null,
              "start": 5079,
              "end": 5113
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
                  "start": 5122,
                  "end": 5123
                },
                "operator": "==",
                "right": {
                  "type": "Literal",
                  "value": 1,
                  "raw": "1",
                  "start": 5127,
                  "end": 5128
                },
                "start": 5122,
                "end": 5128
              },
              "consequent": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "BreakStatement",
                    "label": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "l8_c",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 5146,
                      "end": 5150
                    },
                    "start": 5140,
                    "end": 5151
                  }
                ],
                "start": 5130,
                "end": 5157
              },
              "alternate": null,
              "start": 5118,
              "end": 5157
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
                  "start": 5166,
                  "end": 5167
                },
                "operator": "==",
                "right": {
                  "type": "Literal",
                  "value": 2,
                  "raw": "2",
                  "start": 5171,
                  "end": 5172
                },
                "start": 5166,
                "end": 5172
              },
              "consequent": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ContinueStatement",
                    "label": null,
                    "start": 5184,
                    "end": 5193
                  }
                ],
                "start": 5174,
                "end": 5199
              },
              "alternate": null,
              "start": 5162,
              "end": 5199
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
                  "start": 5208,
                  "end": 5209
                },
                "operator": "==",
                "right": {
                  "type": "Literal",
                  "value": 2,
                  "raw": "2",
                  "start": 5213,
                  "end": 5214
                },
                "start": 5208,
                "end": 5214
              },
              "consequent": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ContinueStatement",
                    "label": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "l8_c",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 5235,
                      "end": 5239
                    },
                    "start": 5226,
                    "end": 5240
                  }
                ],
                "start": 5216,
                "end": 5246
              },
              "alternate": null,
              "start": 5204,
              "end": 5246
            }
          ],
          "start": 5003,
          "end": 5248
        },
        "start": 4977,
        "end": 5248
      },
      "start": 4971,
      "end": 5248
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 9,
  "end": 5248
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Identifier",
    "value": "l0",
    "start": 9,
    "end": 11
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 11,
    "end": 12
  },
  {
    "type": "Keyword",
    "value": "for",
    "start": 13,
    "end": 16
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 17,
    "end": 18
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 18,
    "end": 21
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 22,
    "end": 23
  },
  {
    "type": "Identifier",
    "value": "of",
    "start": 24,
    "end": 26
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 27,
    "end": 28
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 28,
    "end": 29
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 29,
    "end": 30
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 31,
    "end": 32
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 37,
    "end": 38
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 38,
    "end": 46
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 46,
    "end": 47
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 47,
    "end": 48
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 49,
    "end": 50
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 51,
    "end": 57
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 58,
    "end": 59
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 59,
    "end": 60
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 60,
    "end": 61
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 61,
    "end": 62
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 67,
    "end": 68
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 68,
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
    "type": "Identifier",
    "value": "x",
    "start": 74,
    "end": 75
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 75,
    "end": 76
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 76,
    "end": 77
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 82,
    "end": 84
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 85,
    "end": 86
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 86,
    "end": 87
  },
  {
    "type": "Punctuator",
    "value": "==",
    "start": 88,
    "end": 90
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 91,
    "end": 92
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 92,
    "end": 93
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 94,
    "end": 95
  },
  {
    "type": "Keyword",
    "value": "break",
    "start": 104,
    "end": 109
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 109,
    "end": 110
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 115,
    "end": 116
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 121,
    "end": 123
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 124,
    "end": 125
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 125,
    "end": 126
  },
  {
    "type": "Punctuator",
    "value": "==",
    "start": 127,
    "end": 129
  },
  {
    "type": "Numeric",
    "value": "1",
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
    "type": "Keyword",
    "value": "break",
    "start": 143,
    "end": 148
  },
  {
    "type": "Identifier",
    "value": "l0",
    "start": 149,
    "end": 151
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 151,
    "end": 152
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 157,
    "end": 158
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 163,
    "end": 165
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 166,
    "end": 167
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 167,
    "end": 168
  },
  {
    "type": "Punctuator",
    "value": "==",
    "start": 169,
    "end": 171
  },
  {
    "type": "Numeric",
    "value": "2",
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
    "type": "Keyword",
    "value": "continue",
    "start": 185,
    "end": 193
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 193,
    "end": 194
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 199,
    "end": 200
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 205,
    "end": 207
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 208,
    "end": 209
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 209,
    "end": 210
  },
  {
    "type": "Punctuator",
    "value": "==",
    "start": 211,
    "end": 213
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 214,
    "end": 215
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 215,
    "end": 216
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 217,
    "end": 218
  },
  {
    "type": "Keyword",
    "value": "continue",
    "start": 227,
    "end": 235
  },
  {
    "type": "Identifier",
    "value": "l0",
    "start": 236,
    "end": 238
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 238,
    "end": 239
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 244,
    "end": 245
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 246,
    "end": 247
  },
  {
    "type": "Identifier",
    "value": "l00",
    "start": 249,
    "end": 252
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 252,
    "end": 253
  },
  {
    "type": "Keyword",
    "value": "for",
    "start": 254,
    "end": 257
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 258,
    "end": 259
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 259,
    "end": 262
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 263,
    "end": 264
  },
  {
    "type": "Keyword",
    "value": "in",
    "start": 265,
    "end": 267
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 268,
    "end": 269
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 269,
    "end": 270
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 270,
    "end": 271
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 272,
    "end": 273
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 278,
    "end": 279
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 279,
    "end": 287
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 287,
    "end": 288
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 288,
    "end": 289
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 290,
    "end": 291
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 292,
    "end": 298
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 299,
    "end": 300
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 300,
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
    "value": ";",
    "start": 302,
    "end": 303
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 308,
    "end": 309
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 309,
    "end": 310
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 310,
    "end": 311
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 312,
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
    "value": ")",
    "start": 316,
    "end": 317
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 317,
    "end": 318
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 323,
    "end": 325
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 326,
    "end": 327
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 327,
    "end": 328
  },
  {
    "type": "Punctuator",
    "value": "==",
    "start": 329,
    "end": 331
  },
  {
    "type": "String",
    "value": "\"1\"",
    "start": 332,
    "end": 335
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 335,
    "end": 336
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 337,
    "end": 338
  },
  {
    "type": "Keyword",
    "value": "break",
    "start": 347,
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
    "value": "}",
    "start": 358,
    "end": 359
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 364,
    "end": 366
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 367,
    "end": 368
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 368,
    "end": 369
  },
  {
    "type": "Punctuator",
    "value": "==",
    "start": 370,
    "end": 372
  },
  {
    "type": "String",
    "value": "\"1\"",
    "start": 373,
    "end": 376
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 376,
    "end": 377
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 378,
    "end": 379
  },
  {
    "type": "Keyword",
    "value": "break",
    "start": 388,
    "end": 393
  },
  {
    "type": "Identifier",
    "value": "l00",
    "start": 394,
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
    "start": 403,
    "end": 404
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 409,
    "end": 411
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 412,
    "end": 413
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 413,
    "end": 414
  },
  {
    "type": "Punctuator",
    "value": "==",
    "start": 415,
    "end": 417
  },
  {
    "type": "String",
    "value": "\"2\"",
    "start": 418,
    "end": 421
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 421,
    "end": 422
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 423,
    "end": 424
  },
  {
    "type": "Keyword",
    "value": "continue",
    "start": 433,
    "end": 441
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 441,
    "end": 442
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 447,
    "end": 448
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 453,
    "end": 455
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 456,
    "end": 457
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 457,
    "end": 458
  },
  {
    "type": "Punctuator",
    "value": "==",
    "start": 459,
    "end": 461
  },
  {
    "type": "String",
    "value": "\"2\"",
    "start": 462,
    "end": 465
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 465,
    "end": 466
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 467,
    "end": 468
  },
  {
    "type": "Keyword",
    "value": "continue",
    "start": 477,
    "end": 485
  },
  {
    "type": "Identifier",
    "value": "l00",
    "start": 486,
    "end": 489
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 489,
    "end": 490
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 495,
    "end": 496
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 497,
    "end": 498
  },
  {
    "type": "Identifier",
    "value": "l1",
    "start": 500,
    "end": 502
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 502,
    "end": 503
  },
  {
    "type": "Keyword",
    "value": "for",
    "start": 504,
    "end": 507
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 508,
    "end": 509
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 509,
    "end": 512
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 513,
    "end": 514
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 515,
    "end": 516
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 517,
    "end": 518
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 518,
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
    "value": "<",
    "start": 522,
    "end": 523
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 524,
    "end": 525
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 525,
    "end": 526
  },
  {
    "type": "Punctuator",
    "value": "++",
    "start": 527,
    "end": 529
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 529,
    "end": 530
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 530,
    "end": 531
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 532,
    "end": 533
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 538,
    "end": 539
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 539,
    "end": 547
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 547,
    "end": 548
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 548,
    "end": 549
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 550,
    "end": 551
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 552,
    "end": 558
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 559,
    "end": 560
  },
  {
    "type": "Punctuator",
    "value": "}",
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
    "value": ";",
    "start": 562,
    "end": 563
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 568,
    "end": 569
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 569,
    "end": 570
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 570,
    "end": 571
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 572,
    "end": 574
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 575,
    "end": 576
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 576,
    "end": 577
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 577,
    "end": 578
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 583,
    "end": 585
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 586,
    "end": 587
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 587,
    "end": 588
  },
  {
    "type": "Punctuator",
    "value": "==",
    "start": 589,
    "end": 591
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 592,
    "end": 593
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 593,
    "end": 594
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 595,
    "end": 596
  },
  {
    "type": "Keyword",
    "value": "break",
    "start": 605,
    "end": 610
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 610,
    "end": 611
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 616,
    "end": 617
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 622,
    "end": 624
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 625,
    "end": 626
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 626,
    "end": 627
  },
  {
    "type": "Punctuator",
    "value": "==",
    "start": 628,
    "end": 630
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 631,
    "end": 632
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 632,
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
    "value": "break",
    "start": 644,
    "end": 649
  },
  {
    "type": "Identifier",
    "value": "l1",
    "start": 650,
    "end": 652
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 652,
    "end": 653
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 658,
    "end": 659
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 664,
    "end": 666
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 667,
    "end": 668
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 668,
    "end": 669
  },
  {
    "type": "Punctuator",
    "value": "==",
    "start": 670,
    "end": 672
  },
  {
    "type": "Numeric",
    "value": "2",
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
    "value": "{",
    "start": 676,
    "end": 677
  },
  {
    "type": "Keyword",
    "value": "continue",
    "start": 686,
    "end": 694
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 694,
    "end": 695
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 700,
    "end": 701
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 706,
    "end": 708
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 709,
    "end": 710
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 710,
    "end": 711
  },
  {
    "type": "Punctuator",
    "value": "==",
    "start": 712,
    "end": 714
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 715,
    "end": 716
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 716,
    "end": 717
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 718,
    "end": 719
  },
  {
    "type": "Keyword",
    "value": "continue",
    "start": 728,
    "end": 736
  },
  {
    "type": "Identifier",
    "value": "l1",
    "start": 737,
    "end": 739
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 739,
    "end": 740
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 745,
    "end": 746
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 747,
    "end": 748
  },
  {
    "type": "Identifier",
    "value": "l2",
    "start": 750,
    "end": 752
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 752,
    "end": 753
  },
  {
    "type": "Keyword",
    "value": "while",
    "start": 754,
    "end": 759
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 760,
    "end": 761
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 761,
    "end": 762
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 763,
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
    "value": ")",
    "start": 768,
    "end": 769
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 770,
    "end": 771
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 776,
    "end": 779
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 780,
    "end": 781
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 781,
    "end": 782
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 787,
    "end": 788
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 788,
    "end": 796
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 796,
    "end": 797
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 797,
    "end": 798
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 799,
    "end": 800
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 801,
    "end": 807
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 808,
    "end": 809
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 809,
    "end": 810
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 810,
    "end": 811
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 811,
    "end": 812
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 817,
    "end": 818
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 818,
    "end": 819
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 819,
    "end": 820
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 821,
    "end": 823
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 824,
    "end": 825
  },
  {
    "type": "Punctuator",
    "value": ")",
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
    "type": "Keyword",
    "value": "if",
    "start": 832,
    "end": 834
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 835,
    "end": 836
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 836,
    "end": 837
  },
  {
    "type": "Punctuator",
    "value": "==",
    "start": 838,
    "end": 840
  },
  {
    "type": "Numeric",
    "value": "1",
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
    "value": "break",
    "start": 854,
    "end": 859
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 859,
    "end": 860
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 865,
    "end": 866
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 871,
    "end": 873
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 874,
    "end": 875
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 875,
    "end": 876
  },
  {
    "type": "Punctuator",
    "value": "==",
    "start": 877,
    "end": 879
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 880,
    "end": 881
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 881,
    "end": 882
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 883,
    "end": 884
  },
  {
    "type": "Keyword",
    "value": "break",
    "start": 893,
    "end": 898
  },
  {
    "type": "Identifier",
    "value": "l2",
    "start": 899,
    "end": 901
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 901,
    "end": 902
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 907,
    "end": 908
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 913,
    "end": 915
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 916,
    "end": 917
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 917,
    "end": 918
  },
  {
    "type": "Punctuator",
    "value": "==",
    "start": 919,
    "end": 921
  },
  {
    "type": "Numeric",
    "value": "2",
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
    "value": "{",
    "start": 925,
    "end": 926
  },
  {
    "type": "Keyword",
    "value": "continue",
    "start": 935,
    "end": 943
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 943,
    "end": 944
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 949,
    "end": 950
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 955,
    "end": 957
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 958,
    "end": 959
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 959,
    "end": 960
  },
  {
    "type": "Punctuator",
    "value": "==",
    "start": 961,
    "end": 963
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 964,
    "end": 965
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 965,
    "end": 966
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 967,
    "end": 968
  },
  {
    "type": "Keyword",
    "value": "continue",
    "start": 977,
    "end": 985
  },
  {
    "type": "Identifier",
    "value": "l2",
    "start": 986,
    "end": 988
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 988,
    "end": 989
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 994,
    "end": 995
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 996,
    "end": 997
  },
  {
    "type": "Identifier",
    "value": "l3",
    "start": 999,
    "end": 1001
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1001,
    "end": 1002
  },
  {
    "type": "Keyword",
    "value": "do",
    "start": 1003,
    "end": 1005
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1006,
    "end": 1007
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 1012,
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
    "value": ";",
    "start": 1017,
    "end": 1018
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1023,
    "end": 1024
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1024,
    "end": 1032
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1032,
    "end": 1033
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1033,
    "end": 1034
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1035,
    "end": 1036
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 1037,
    "end": 1043
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1044,
    "end": 1045
  },
  {
    "type": "Punctuator",
    "value": "}",
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
    "value": ";",
    "start": 1047,
    "end": 1048
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1053,
    "end": 1054
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1054,
    "end": 1055
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1055,
    "end": 1056
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1057,
    "end": 1059
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1060,
    "end": 1061
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1061,
    "end": 1062
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1062,
    "end": 1063
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 1068,
    "end": 1070
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1071,
    "end": 1072
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1072,
    "end": 1073
  },
  {
    "type": "Punctuator",
    "value": "==",
    "start": 1074,
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
    "value": ")",
    "start": 1078,
    "end": 1079
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1080,
    "end": 1081
  },
  {
    "type": "Keyword",
    "value": "break",
    "start": 1090,
    "end": 1095
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1095,
    "end": 1096
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1101,
    "end": 1102
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 1107,
    "end": 1109
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1110,
    "end": 1111
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1111,
    "end": 1112
  },
  {
    "type": "Punctuator",
    "value": "==",
    "start": 1113,
    "end": 1115
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 1116,
    "end": 1117
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1117,
    "end": 1118
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1119,
    "end": 1120
  },
  {
    "type": "Keyword",
    "value": "break",
    "start": 1129,
    "end": 1134
  },
  {
    "type": "Identifier",
    "value": "l3",
    "start": 1135,
    "end": 1137
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1137,
    "end": 1138
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1143,
    "end": 1144
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 1149,
    "end": 1151
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1152,
    "end": 1153
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1153,
    "end": 1154
  },
  {
    "type": "Punctuator",
    "value": "==",
    "start": 1155,
    "end": 1157
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 1158,
    "end": 1159
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1159,
    "end": 1160
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1161,
    "end": 1162
  },
  {
    "type": "Keyword",
    "value": "continue",
    "start": 1171,
    "end": 1179
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1179,
    "end": 1180
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1185,
    "end": 1186
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 1191,
    "end": 1193
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1194,
    "end": 1195
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1195,
    "end": 1196
  },
  {
    "type": "Punctuator",
    "value": "==",
    "start": 1197,
    "end": 1199
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 1200,
    "end": 1201
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1201,
    "end": 1202
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1203,
    "end": 1204
  },
  {
    "type": "Keyword",
    "value": "continue",
    "start": 1213,
    "end": 1221
  },
  {
    "type": "Identifier",
    "value": "l3",
    "start": 1222,
    "end": 1224
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1224,
    "end": 1225
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1230,
    "end": 1231
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1232,
    "end": 1233
  },
  {
    "type": "Keyword",
    "value": "while",
    "start": 1234,
    "end": 1239
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1240,
    "end": 1241
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 1241,
    "end": 1242
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 1243,
    "end": 1246
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 1247,
    "end": 1248
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1248,
    "end": 1249
  },
  {
    "type": "Identifier",
    "value": "l4",
    "start": 1251,
    "end": 1253
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1253,
    "end": 1254
  },
  {
    "type": "Keyword",
    "value": "for",
    "start": 1255,
    "end": 1258
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1259,
    "end": 1260
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 1260,
    "end": 1263
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 1264,
    "end": 1265
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1266,
    "end": 1267
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 1268,
    "end": 1269
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1269,
    "end": 1270
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 1271,
    "end": 1272
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1273,
    "end": 1274
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 1275,
    "end": 1276
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1276,
    "end": 1277
  },
  {
    "type": "Punctuator",
    "value": "++",
    "start": 1278,
    "end": 1280
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 1280,
    "end": 1281
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1281,
    "end": 1282
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1283,
    "end": 1284
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 1289,
    "end": 1292
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1293,
    "end": 1294
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1295,
    "end": 1296
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 1297,
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
    "value": "(",
    "start": 1304,
    "end": 1305
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1305,
    "end": 1313
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1313,
    "end": 1314
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1314,
    "end": 1315
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1316,
    "end": 1317
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 1318,
    "end": 1324
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1325,
    "end": 1326
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1326,
    "end": 1327
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1327,
    "end": 1328
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1328,
    "end": 1329
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1334,
    "end": 1335
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1335,
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
    "value": "=>",
    "start": 1338,
    "end": 1340
  },
  {
    "type": "Identifier",
    "value": "x",
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
    "value": ";",
    "start": 1343,
    "end": 1344
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 1349,
    "end": 1351
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1352,
    "end": 1353
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1353,
    "end": 1354
  },
  {
    "type": "Punctuator",
    "value": "==",
    "start": 1355,
    "end": 1357
  },
  {
    "type": "Numeric",
    "value": "1",
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
    "value": "{",
    "start": 1361,
    "end": 1362
  },
  {
    "type": "Keyword",
    "value": "break",
    "start": 1371,
    "end": 1376
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1376,
    "end": 1377
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1382,
    "end": 1383
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 1388,
    "end": 1390
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1391,
    "end": 1392
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1392,
    "end": 1393
  },
  {
    "type": "Punctuator",
    "value": "==",
    "start": 1394,
    "end": 1396
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 1397,
    "end": 1398
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1398,
    "end": 1399
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1400,
    "end": 1401
  },
  {
    "type": "Keyword",
    "value": "break",
    "start": 1410,
    "end": 1415
  },
  {
    "type": "Identifier",
    "value": "l4",
    "start": 1416,
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
    "value": "}",
    "start": 1424,
    "end": 1425
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 1430,
    "end": 1432
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1433,
    "end": 1434
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1434,
    "end": 1435
  },
  {
    "type": "Punctuator",
    "value": "==",
    "start": 1436,
    "end": 1438
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 1439,
    "end": 1440
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1440,
    "end": 1441
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1442,
    "end": 1443
  },
  {
    "type": "Keyword",
    "value": "continue",
    "start": 1452,
    "end": 1460
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1460,
    "end": 1461
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1466,
    "end": 1467
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 1472,
    "end": 1474
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1475,
    "end": 1476
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1476,
    "end": 1477
  },
  {
    "type": "Punctuator",
    "value": "==",
    "start": 1478,
    "end": 1480
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 1481,
    "end": 1482
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1482,
    "end": 1483
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1484,
    "end": 1485
  },
  {
    "type": "Keyword",
    "value": "continue",
    "start": 1494,
    "end": 1502
  },
  {
    "type": "Identifier",
    "value": "l4",
    "start": 1503,
    "end": 1505
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1505,
    "end": 1506
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1511,
    "end": 1512
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1513,
    "end": 1514
  },
  {
    "type": "Identifier",
    "value": "l5",
    "start": 1516,
    "end": 1518
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1518,
    "end": 1519
  },
  {
    "type": "Keyword",
    "value": "for",
    "start": 1520,
    "end": 1523
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1524,
    "end": 1525
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 1525,
    "end": 1528
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1529,
    "end": 1530
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1531,
    "end": 1532
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 1533,
    "end": 1534
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1534,
    "end": 1535
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 1536,
    "end": 1537
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1538,
    "end": 1539
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 1540,
    "end": 1541
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1541,
    "end": 1542
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1543,
    "end": 1544
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1545,
    "end": 1546
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 1547,
    "end": 1548
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1548,
    "end": 1549
  },
  {
    "type": "Punctuator",
    "value": "++",
    "start": 1550,
    "end": 1552
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1552,
    "end": 1553
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1553,
    "end": 1554
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1555,
    "end": 1556
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1561,
    "end": 1562
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1562,
    "end": 1570
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1570,
    "end": 1571
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1571,
    "end": 1572
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1573,
    "end": 1574
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 1575,
    "end": 1581
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1582,
    "end": 1583
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 1584,
    "end": 1585
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 1586,
    "end": 1587
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1587,
    "end": 1588
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1588,
    "end": 1589
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1589,
    "end": 1590
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1595,
    "end": 1596
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1596,
    "end": 1597
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1597,
    "end": 1598
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1599,
    "end": 1601
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1602,
    "end": 1603
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 1604,
    "end": 1605
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 1606,
    "end": 1607
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1607,
    "end": 1608
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1608,
    "end": 1609
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 1614,
    "end": 1616
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1617,
    "end": 1618
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1618,
    "end": 1619
  },
  {
    "type": "Punctuator",
    "value": "==",
    "start": 1620,
    "end": 1622
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 1623,
    "end": 1624
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1624,
    "end": 1625
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1626,
    "end": 1627
  },
  {
    "type": "Keyword",
    "value": "break",
    "start": 1636,
    "end": 1641
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1641,
    "end": 1642
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1647,
    "end": 1648
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 1653,
    "end": 1655
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1656,
    "end": 1657
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1657,
    "end": 1658
  },
  {
    "type": "Punctuator",
    "value": "==",
    "start": 1659,
    "end": 1661
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 1662,
    "end": 1663
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1663,
    "end": 1664
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1665,
    "end": 1666
  },
  {
    "type": "Keyword",
    "value": "break",
    "start": 1675,
    "end": 1680
  },
  {
    "type": "Identifier",
    "value": "l5",
    "start": 1681,
    "end": 1683
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1683,
    "end": 1684
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1689,
    "end": 1690
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 1695,
    "end": 1697
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1698,
    "end": 1699
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1699,
    "end": 1700
  },
  {
    "type": "Punctuator",
    "value": "==",
    "start": 1701,
    "end": 1703
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 1704,
    "end": 1705
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1705,
    "end": 1706
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1707,
    "end": 1708
  },
  {
    "type": "Keyword",
    "value": "continue",
    "start": 1717,
    "end": 1725
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1725,
    "end": 1726
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1731,
    "end": 1732
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 1737,
    "end": 1739
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1740,
    "end": 1741
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1741,
    "end": 1742
  },
  {
    "type": "Punctuator",
    "value": "==",
    "start": 1743,
    "end": 1745
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 1746,
    "end": 1747
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1747,
    "end": 1748
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1749,
    "end": 1750
  },
  {
    "type": "Keyword",
    "value": "continue",
    "start": 1759,
    "end": 1767
  },
  {
    "type": "Identifier",
    "value": "l5",
    "start": 1768,
    "end": 1770
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1770,
    "end": 1771
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1776,
    "end": 1777
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1778,
    "end": 1779
  },
  {
    "type": "Identifier",
    "value": "l6",
    "start": 1781,
    "end": 1783
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1783,
    "end": 1784
  },
  {
    "type": "Keyword",
    "value": "while",
    "start": 1785,
    "end": 1790
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1791,
    "end": 1792
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 1792,
    "end": 1793
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 1794,
    "end": 1797
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 1798,
    "end": 1799
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1799,
    "end": 1800
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1801,
    "end": 1802
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 1807,
    "end": 1810
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1811,
    "end": 1812
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1812,
    "end": 1813
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 1814,
    "end": 1815
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1815,
    "end": 1816
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1821,
    "end": 1822
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1822,
    "end": 1830
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1830,
    "end": 1831
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1831,
    "end": 1832
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1833,
    "end": 1834
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 1835,
    "end": 1841
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1842,
    "end": 1843
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 1844,
    "end": 1845
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 1846,
    "end": 1847
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1847,
    "end": 1848
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1848,
    "end": 1849
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1849,
    "end": 1850
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1855,
    "end": 1856
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1856,
    "end": 1857
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1857,
    "end": 1858
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1859,
    "end": 1861
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1862,
    "end": 1863
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 1864,
    "end": 1865
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 1866,
    "end": 1867
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1867,
    "end": 1868
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1868,
    "end": 1869
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 1874,
    "end": 1876
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1877,
    "end": 1878
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1878,
    "end": 1879
  },
  {
    "type": "Punctuator",
    "value": "==",
    "start": 1880,
    "end": 1882
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 1883,
    "end": 1884
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1884,
    "end": 1885
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1886,
    "end": 1887
  },
  {
    "type": "Keyword",
    "value": "break",
    "start": 1896,
    "end": 1901
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1901,
    "end": 1902
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1907,
    "end": 1908
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 1913,
    "end": 1915
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1916,
    "end": 1917
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1917,
    "end": 1918
  },
  {
    "type": "Punctuator",
    "value": "==",
    "start": 1919,
    "end": 1921
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 1922,
    "end": 1923
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1923,
    "end": 1924
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1925,
    "end": 1926
  },
  {
    "type": "Keyword",
    "value": "break",
    "start": 1935,
    "end": 1940
  },
  {
    "type": "Identifier",
    "value": "l6",
    "start": 1941,
    "end": 1943
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1943,
    "end": 1944
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1949,
    "end": 1950
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 1955,
    "end": 1957
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1958,
    "end": 1959
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1959,
    "end": 1960
  },
  {
    "type": "Punctuator",
    "value": "==",
    "start": 1961,
    "end": 1963
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 1964,
    "end": 1965
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1965,
    "end": 1966
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1967,
    "end": 1968
  },
  {
    "type": "Keyword",
    "value": "continue",
    "start": 1977,
    "end": 1985
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1985,
    "end": 1986
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1991,
    "end": 1992
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 1997,
    "end": 1999
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2000,
    "end": 2001
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2001,
    "end": 2002
  },
  {
    "type": "Punctuator",
    "value": "==",
    "start": 2003,
    "end": 2005
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 2006,
    "end": 2007
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2007,
    "end": 2008
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2009,
    "end": 2010
  },
  {
    "type": "Keyword",
    "value": "continue",
    "start": 2019,
    "end": 2027
  },
  {
    "type": "Identifier",
    "value": "l6",
    "start": 2028,
    "end": 2030
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2030,
    "end": 2031
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2036,
    "end": 2037
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2039,
    "end": 2040
  },
  {
    "type": "Identifier",
    "value": "l7",
    "start": 2042,
    "end": 2044
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2044,
    "end": 2045
  },
  {
    "type": "Keyword",
    "value": "do",
    "start": 2046,
    "end": 2048
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2049,
    "end": 2050
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 2055,
    "end": 2058
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2059,
    "end": 2060
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2060,
    "end": 2061
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 2062,
    "end": 2063
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2063,
    "end": 2064
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2069,
    "end": 2070
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 2070,
    "end": 2078
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2078,
    "end": 2079
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2079,
    "end": 2080
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2081,
    "end": 2082
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 2083,
    "end": 2089
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2090,
    "end": 2091
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 2092,
    "end": 2093
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 2094,
    "end": 2095
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2095,
    "end": 2096
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2096,
    "end": 2097
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2097,
    "end": 2098
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2103,
    "end": 2104
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2104,
    "end": 2105
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2105,
    "end": 2106
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 2107,
    "end": 2109
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2110,
    "end": 2111
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 2112,
    "end": 2113
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 2114,
    "end": 2115
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2115,
    "end": 2116
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2116,
    "end": 2117
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 2122,
    "end": 2124
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2125,
    "end": 2126
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2126,
    "end": 2127
  },
  {
    "type": "Punctuator",
    "value": "==",
    "start": 2128,
    "end": 2130
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 2131,
    "end": 2132
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2132,
    "end": 2133
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2134,
    "end": 2135
  },
  {
    "type": "Keyword",
    "value": "break",
    "start": 2144,
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
    "start": 2155,
    "end": 2156
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 2161,
    "end": 2163
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2164,
    "end": 2165
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2165,
    "end": 2166
  },
  {
    "type": "Punctuator",
    "value": "==",
    "start": 2167,
    "end": 2169
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 2170,
    "end": 2171
  },
  {
    "type": "Punctuator",
    "value": ")",
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
    "type": "Keyword",
    "value": "break",
    "start": 2183,
    "end": 2188
  },
  {
    "type": "Identifier",
    "value": "l7",
    "start": 2189,
    "end": 2191
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2191,
    "end": 2192
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2197,
    "end": 2198
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 2203,
    "end": 2205
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2206,
    "end": 2207
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2207,
    "end": 2208
  },
  {
    "type": "Punctuator",
    "value": "==",
    "start": 2209,
    "end": 2211
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 2212,
    "end": 2213
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2213,
    "end": 2214
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2215,
    "end": 2216
  },
  {
    "type": "Keyword",
    "value": "continue",
    "start": 2225,
    "end": 2233
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2233,
    "end": 2234
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2239,
    "end": 2240
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 2245,
    "end": 2247
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2248,
    "end": 2249
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2249,
    "end": 2250
  },
  {
    "type": "Punctuator",
    "value": "==",
    "start": 2251,
    "end": 2253
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 2254,
    "end": 2255
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2255,
    "end": 2256
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2257,
    "end": 2258
  },
  {
    "type": "Keyword",
    "value": "continue",
    "start": 2267,
    "end": 2275
  },
  {
    "type": "Identifier",
    "value": "l7",
    "start": 2276,
    "end": 2278
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2278,
    "end": 2279
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2284,
    "end": 2285
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2286,
    "end": 2287
  },
  {
    "type": "Keyword",
    "value": "while",
    "start": 2288,
    "end": 2293
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2294,
    "end": 2295
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 2295,
    "end": 2296
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 2297,
    "end": 2300
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 2301,
    "end": 2302
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2302,
    "end": 2303
  },
  {
    "type": "Identifier",
    "value": "l8",
    "start": 2305,
    "end": 2307
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2307,
    "end": 2308
  },
  {
    "type": "Keyword",
    "value": "for",
    "start": 2309,
    "end": 2312
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2313,
    "end": 2314
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 2314,
    "end": 2317
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 2318,
    "end": 2319
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2320,
    "end": 2321
  },
  {
    "type": "Numeric",
    "value": "0",
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
    "type": "Identifier",
    "value": "y",
    "start": 2325,
    "end": 2326
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2327,
    "end": 2328
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 2329,
    "end": 2330
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2330,
    "end": 2331
  },
  {
    "type": "Punctuator",
    "value": "++",
    "start": 2332,
    "end": 2334
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 2334,
    "end": 2335
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2335,
    "end": 2336
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2337,
    "end": 2338
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 2343,
    "end": 2346
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2347,
    "end": 2348
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2349,
    "end": 2350
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 2351,
    "end": 2352
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2352,
    "end": 2353
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2358,
    "end": 2359
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 2359,
    "end": 2367
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2367,
    "end": 2368
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2368,
    "end": 2369
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2370,
    "end": 2371
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 2372,
    "end": 2378
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2379,
    "end": 2380
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 2381,
    "end": 2382
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 2383,
    "end": 2384
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2384,
    "end": 2385
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2385,
    "end": 2386
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2386,
    "end": 2387
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2392,
    "end": 2393
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2393,
    "end": 2394
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2394,
    "end": 2395
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 2396,
    "end": 2398
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2399,
    "end": 2400
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 2401,
    "end": 2402
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 2403,
    "end": 2404
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2404,
    "end": 2405
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2405,
    "end": 2406
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 2411,
    "end": 2413
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2414,
    "end": 2415
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2415,
    "end": 2416
  },
  {
    "type": "Punctuator",
    "value": "==",
    "start": 2417,
    "end": 2419
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 2420,
    "end": 2421
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2421,
    "end": 2422
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2423,
    "end": 2424
  },
  {
    "type": "Keyword",
    "value": "break",
    "start": 2433,
    "end": 2438
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2438,
    "end": 2439
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2444,
    "end": 2445
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 2450,
    "end": 2452
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2453,
    "end": 2454
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2454,
    "end": 2455
  },
  {
    "type": "Punctuator",
    "value": "==",
    "start": 2456,
    "end": 2458
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 2459,
    "end": 2460
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2460,
    "end": 2461
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2462,
    "end": 2463
  },
  {
    "type": "Keyword",
    "value": "break",
    "start": 2472,
    "end": 2477
  },
  {
    "type": "Identifier",
    "value": "l8",
    "start": 2478,
    "end": 2480
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2480,
    "end": 2481
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2486,
    "end": 2487
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 2492,
    "end": 2494
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2495,
    "end": 2496
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2496,
    "end": 2497
  },
  {
    "type": "Punctuator",
    "value": "==",
    "start": 2498,
    "end": 2500
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 2501,
    "end": 2502
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2502,
    "end": 2503
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2504,
    "end": 2505
  },
  {
    "type": "Keyword",
    "value": "continue",
    "start": 2514,
    "end": 2522
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2522,
    "end": 2523
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2528,
    "end": 2529
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 2534,
    "end": 2536
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2537,
    "end": 2538
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2538,
    "end": 2539
  },
  {
    "type": "Punctuator",
    "value": "==",
    "start": 2540,
    "end": 2542
  },
  {
    "type": "Numeric",
    "value": "2",
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
    "value": "{",
    "start": 2546,
    "end": 2547
  },
  {
    "type": "Keyword",
    "value": "continue",
    "start": 2556,
    "end": 2564
  },
  {
    "type": "Identifier",
    "value": "l8",
    "start": 2565,
    "end": 2567
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2567,
    "end": 2568
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2573,
    "end": 2574
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2575,
    "end": 2576
  },
  {
    "type": "Identifier",
    "value": "l0_c",
    "start": 2589,
    "end": 2593
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2593,
    "end": 2594
  },
  {
    "type": "Keyword",
    "value": "for",
    "start": 2595,
    "end": 2598
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2599,
    "end": 2600
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 2600,
    "end": 2605
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2606,
    "end": 2607
  },
  {
    "type": "Identifier",
    "value": "of",
    "start": 2608,
    "end": 2610
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 2611,
    "end": 2612
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 2612,
    "end": 2613
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2613,
    "end": 2614
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2615,
    "end": 2616
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2621,
    "end": 2622
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 2622,
    "end": 2630
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2630,
    "end": 2631
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2631,
    "end": 2632
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2633,
    "end": 2634
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 2635,
    "end": 2641
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2642,
    "end": 2643
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2643,
    "end": 2644
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2644,
    "end": 2645
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2645,
    "end": 2646
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2651,
    "end": 2652
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2652,
    "end": 2653
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2653,
    "end": 2654
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 2655,
    "end": 2657
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2658,
    "end": 2659
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2659,
    "end": 2660
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2660,
    "end": 2661
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 2666,
    "end": 2668
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2669,
    "end": 2670
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2670,
    "end": 2671
  },
  {
    "type": "Punctuator",
    "value": "==",
    "start": 2672,
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
    "value": ")",
    "start": 2676,
    "end": 2677
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2678,
    "end": 2679
  },
  {
    "type": "Keyword",
    "value": "break",
    "start": 2688,
    "end": 2693
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2693,
    "end": 2694
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2699,
    "end": 2700
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 2705,
    "end": 2707
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2708,
    "end": 2709
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2709,
    "end": 2710
  },
  {
    "type": "Punctuator",
    "value": "==",
    "start": 2711,
    "end": 2713
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 2714,
    "end": 2715
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2715,
    "end": 2716
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2717,
    "end": 2718
  },
  {
    "type": "Keyword",
    "value": "break",
    "start": 2727,
    "end": 2732
  },
  {
    "type": "Identifier",
    "value": "l0_c",
    "start": 2733,
    "end": 2737
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2737,
    "end": 2738
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2743,
    "end": 2744
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 2749,
    "end": 2751
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2752,
    "end": 2753
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2753,
    "end": 2754
  },
  {
    "type": "Punctuator",
    "value": "==",
    "start": 2755,
    "end": 2757
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 2758,
    "end": 2759
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2759,
    "end": 2760
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2761,
    "end": 2762
  },
  {
    "type": "Keyword",
    "value": "continue",
    "start": 2771,
    "end": 2779
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2779,
    "end": 2780
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2785,
    "end": 2786
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 2791,
    "end": 2793
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2794,
    "end": 2795
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2795,
    "end": 2796
  },
  {
    "type": "Punctuator",
    "value": "==",
    "start": 2797,
    "end": 2799
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 2800,
    "end": 2801
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2801,
    "end": 2802
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2803,
    "end": 2804
  },
  {
    "type": "Keyword",
    "value": "continue",
    "start": 2813,
    "end": 2821
  },
  {
    "type": "Identifier",
    "value": "l0_c",
    "start": 2822,
    "end": 2826
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2826,
    "end": 2827
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2832,
    "end": 2833
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2834,
    "end": 2835
  },
  {
    "type": "Identifier",
    "value": "l00_c",
    "start": 2837,
    "end": 2842
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2842,
    "end": 2843
  },
  {
    "type": "Keyword",
    "value": "for",
    "start": 2844,
    "end": 2847
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2848,
    "end": 2849
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 2849,
    "end": 2854
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2855,
    "end": 2856
  },
  {
    "type": "Keyword",
    "value": "in",
    "start": 2857,
    "end": 2859
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 2860,
    "end": 2861
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 2861,
    "end": 2862
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2862,
    "end": 2863
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2864,
    "end": 2865
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2870,
    "end": 2871
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 2871,
    "end": 2879
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2879,
    "end": 2880
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2880,
    "end": 2881
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2882,
    "end": 2883
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 2884,
    "end": 2890
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2891,
    "end": 2892
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2892,
    "end": 2893
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2893,
    "end": 2894
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2894,
    "end": 2895
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2900,
    "end": 2901
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2901,
    "end": 2902
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2902,
    "end": 2903
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 2904,
    "end": 2906
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2907,
    "end": 2908
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2908,
    "end": 2909
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2909,
    "end": 2910
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 2915,
    "end": 2917
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2918,
    "end": 2919
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2919,
    "end": 2920
  },
  {
    "type": "Punctuator",
    "value": "==",
    "start": 2921,
    "end": 2923
  },
  {
    "type": "String",
    "value": "\"1\"",
    "start": 2924,
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
    "type": "String",
    "value": "\"1\"",
    "start": 2965,
    "end": 2968
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2968,
    "end": 2969
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2970,
    "end": 2971
  },
  {
    "type": "Keyword",
    "value": "break",
    "start": 2980,
    "end": 2985
  },
  {
    "type": "Identifier",
    "value": "l00_c",
    "start": 2986,
    "end": 2991
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2991,
    "end": 2992
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2997,
    "end": 2998
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 3003,
    "end": 3005
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3006,
    "end": 3007
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 3007,
    "end": 3008
  },
  {
    "type": "Punctuator",
    "value": "==",
    "start": 3009,
    "end": 3011
  },
  {
    "type": "String",
    "value": "\"2\"",
    "start": 3012,
    "end": 3015
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3015,
    "end": 3016
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3017,
    "end": 3018
  },
  {
    "type": "Keyword",
    "value": "continue",
    "start": 3027,
    "end": 3035
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3035,
    "end": 3036
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3041,
    "end": 3042
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 3047,
    "end": 3049
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3050,
    "end": 3051
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 3051,
    "end": 3052
  },
  {
    "type": "Punctuator",
    "value": "==",
    "start": 3053,
    "end": 3055
  },
  {
    "type": "String",
    "value": "\"2\"",
    "start": 3056,
    "end": 3059
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3059,
    "end": 3060
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3061,
    "end": 3062
  },
  {
    "type": "Keyword",
    "value": "continue",
    "start": 3071,
    "end": 3079
  },
  {
    "type": "Identifier",
    "value": "l00_c",
    "start": 3080,
    "end": 3085
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3085,
    "end": 3086
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3091,
    "end": 3092
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3093,
    "end": 3094
  },
  {
    "type": "Identifier",
    "value": "l1_c",
    "start": 3096,
    "end": 3100
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3100,
    "end": 3101
  },
  {
    "type": "Keyword",
    "value": "for",
    "start": 3102,
    "end": 3105
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3106,
    "end": 3107
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 3107,
    "end": 3112
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 3113,
    "end": 3114
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3115,
    "end": 3116
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 3117,
    "end": 3118
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3118,
    "end": 3119
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 3120,
    "end": 3121
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 3122,
    "end": 3123
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 3124,
    "end": 3125
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3125,
    "end": 3126
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3126,
    "end": 3127
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3128,
    "end": 3129
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3134,
    "end": 3135
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 3135,
    "end": 3143
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3143,
    "end": 3144
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3144,
    "end": 3145
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3146,
    "end": 3147
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 3148,
    "end": 3154
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 3155,
    "end": 3156
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3156,
    "end": 3157
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3157,
    "end": 3158
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3158,
    "end": 3159
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3164,
    "end": 3165
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3165,
    "end": 3166
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3166,
    "end": 3167
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 3168,
    "end": 3170
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 3171,
    "end": 3172
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3172,
    "end": 3173
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3173,
    "end": 3174
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 3179,
    "end": 3181
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3182,
    "end": 3183
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 3183,
    "end": 3184
  },
  {
    "type": "Punctuator",
    "value": "==",
    "start": 3185,
    "end": 3187
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 3188,
    "end": 3189
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3189,
    "end": 3190
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3191,
    "end": 3192
  },
  {
    "type": "Keyword",
    "value": "break",
    "start": 3201,
    "end": 3206
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3206,
    "end": 3207
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3212,
    "end": 3213
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 3218,
    "end": 3220
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3221,
    "end": 3222
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 3222,
    "end": 3223
  },
  {
    "type": "Punctuator",
    "value": "==",
    "start": 3224,
    "end": 3226
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 3227,
    "end": 3228
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3228,
    "end": 3229
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3230,
    "end": 3231
  },
  {
    "type": "Keyword",
    "value": "break",
    "start": 3240,
    "end": 3245
  },
  {
    "type": "Identifier",
    "value": "l1_c",
    "start": 3246,
    "end": 3250
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3250,
    "end": 3251
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3256,
    "end": 3257
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 3262,
    "end": 3264
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3265,
    "end": 3266
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 3266,
    "end": 3267
  },
  {
    "type": "Punctuator",
    "value": "==",
    "start": 3268,
    "end": 3270
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 3271,
    "end": 3272
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3272,
    "end": 3273
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3274,
    "end": 3275
  },
  {
    "type": "Keyword",
    "value": "continue",
    "start": 3284,
    "end": 3292
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3292,
    "end": 3293
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3298,
    "end": 3299
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 3304,
    "end": 3306
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3307,
    "end": 3308
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 3308,
    "end": 3309
  },
  {
    "type": "Punctuator",
    "value": "==",
    "start": 3310,
    "end": 3312
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 3313,
    "end": 3314
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3314,
    "end": 3315
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3316,
    "end": 3317
  },
  {
    "type": "Keyword",
    "value": "continue",
    "start": 3326,
    "end": 3334
  },
  {
    "type": "Identifier",
    "value": "l1_c",
    "start": 3335,
    "end": 3339
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3339,
    "end": 3340
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3345,
    "end": 3346
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3347,
    "end": 3348
  },
  {
    "type": "Identifier",
    "value": "l2_c",
    "start": 3350,
    "end": 3354
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3354,
    "end": 3355
  },
  {
    "type": "Keyword",
    "value": "while",
    "start": 3356,
    "end": 3361
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3362,
    "end": 3363
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 3363,
    "end": 3364
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 3365,
    "end": 3368
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 3369,
    "end": 3370
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3370,
    "end": 3371
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3372,
    "end": 3373
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 3378,
    "end": 3383
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 3384,
    "end": 3385
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3386,
    "end": 3387
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 3388,
    "end": 3389
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3389,
    "end": 3390
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3395,
    "end": 3396
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 3396,
    "end": 3404
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3404,
    "end": 3405
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3405,
    "end": 3406
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3407,
    "end": 3408
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 3409,
    "end": 3415
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 3416,
    "end": 3417
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3417,
    "end": 3418
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3418,
    "end": 3419
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3419,
    "end": 3420
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3425,
    "end": 3426
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3426,
    "end": 3427
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3427,
    "end": 3428
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 3429,
    "end": 3431
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 3432,
    "end": 3433
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3433,
    "end": 3434
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3434,
    "end": 3435
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 3440,
    "end": 3442
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3443,
    "end": 3444
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 3444,
    "end": 3445
  },
  {
    "type": "Punctuator",
    "value": "==",
    "start": 3446,
    "end": 3448
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 3449,
    "end": 3450
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3450,
    "end": 3451
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3452,
    "end": 3453
  },
  {
    "type": "Keyword",
    "value": "break",
    "start": 3462,
    "end": 3467
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3467,
    "end": 3468
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3473,
    "end": 3474
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 3479,
    "end": 3481
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3482,
    "end": 3483
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 3483,
    "end": 3484
  },
  {
    "type": "Punctuator",
    "value": "==",
    "start": 3485,
    "end": 3487
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 3488,
    "end": 3489
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3489,
    "end": 3490
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3491,
    "end": 3492
  },
  {
    "type": "Keyword",
    "value": "break",
    "start": 3501,
    "end": 3506
  },
  {
    "type": "Identifier",
    "value": "l2_c",
    "start": 3507,
    "end": 3511
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3511,
    "end": 3512
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3517,
    "end": 3518
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 3523,
    "end": 3525
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3526,
    "end": 3527
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 3527,
    "end": 3528
  },
  {
    "type": "Punctuator",
    "value": "==",
    "start": 3529,
    "end": 3531
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 3532,
    "end": 3533
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3533,
    "end": 3534
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3535,
    "end": 3536
  },
  {
    "type": "Keyword",
    "value": "continue",
    "start": 3545,
    "end": 3553
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3553,
    "end": 3554
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3559,
    "end": 3560
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 3565,
    "end": 3567
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3568,
    "end": 3569
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 3569,
    "end": 3570
  },
  {
    "type": "Punctuator",
    "value": "==",
    "start": 3571,
    "end": 3573
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 3574,
    "end": 3575
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3575,
    "end": 3576
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3577,
    "end": 3578
  },
  {
    "type": "Keyword",
    "value": "continue",
    "start": 3587,
    "end": 3595
  },
  {
    "type": "Identifier",
    "value": "l2_c",
    "start": 3596,
    "end": 3600
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3600,
    "end": 3601
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3606,
    "end": 3607
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3608,
    "end": 3609
  },
  {
    "type": "Identifier",
    "value": "l3_c",
    "start": 3611,
    "end": 3615
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3615,
    "end": 3616
  },
  {
    "type": "Keyword",
    "value": "do",
    "start": 3617,
    "end": 3619
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3620,
    "end": 3621
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 3626,
    "end": 3631
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 3632,
    "end": 3633
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3634,
    "end": 3635
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 3636,
    "end": 3637
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3637,
    "end": 3638
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3643,
    "end": 3644
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 3644,
    "end": 3652
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3652,
    "end": 3653
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3653,
    "end": 3654
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3655,
    "end": 3656
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 3657,
    "end": 3663
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 3664,
    "end": 3665
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3665,
    "end": 3666
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3666,
    "end": 3667
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3667,
    "end": 3668
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3673,
    "end": 3674
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3674,
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
    "value": "=>",
    "start": 3677,
    "end": 3679
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 3680,
    "end": 3681
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3681,
    "end": 3682
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3682,
    "end": 3683
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 3688,
    "end": 3690
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3691,
    "end": 3692
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 3692,
    "end": 3693
  },
  {
    "type": "Punctuator",
    "value": "==",
    "start": 3694,
    "end": 3696
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 3697,
    "end": 3698
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3698,
    "end": 3699
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3700,
    "end": 3701
  },
  {
    "type": "Keyword",
    "value": "break",
    "start": 3710,
    "end": 3715
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3715,
    "end": 3716
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3721,
    "end": 3722
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 3727,
    "end": 3729
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3730,
    "end": 3731
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 3731,
    "end": 3732
  },
  {
    "type": "Punctuator",
    "value": "==",
    "start": 3733,
    "end": 3735
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 3736,
    "end": 3737
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3737,
    "end": 3738
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3739,
    "end": 3740
  },
  {
    "type": "Keyword",
    "value": "break",
    "start": 3749,
    "end": 3754
  },
  {
    "type": "Identifier",
    "value": "l3_c",
    "start": 3755,
    "end": 3759
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3759,
    "end": 3760
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3765,
    "end": 3766
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 3771,
    "end": 3773
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3774,
    "end": 3775
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 3775,
    "end": 3776
  },
  {
    "type": "Punctuator",
    "value": "==",
    "start": 3777,
    "end": 3779
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 3780,
    "end": 3781
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3781,
    "end": 3782
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3783,
    "end": 3784
  },
  {
    "type": "Keyword",
    "value": "continue",
    "start": 3793,
    "end": 3801
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3801,
    "end": 3802
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3807,
    "end": 3808
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 3813,
    "end": 3815
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3816,
    "end": 3817
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 3817,
    "end": 3818
  },
  {
    "type": "Punctuator",
    "value": "==",
    "start": 3819,
    "end": 3821
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 3822,
    "end": 3823
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3823,
    "end": 3824
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3825,
    "end": 3826
  },
  {
    "type": "Keyword",
    "value": "continue",
    "start": 3835,
    "end": 3843
  },
  {
    "type": "Identifier",
    "value": "l3_c",
    "start": 3844,
    "end": 3848
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3848,
    "end": 3849
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3854,
    "end": 3855
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3856,
    "end": 3857
  },
  {
    "type": "Keyword",
    "value": "while",
    "start": 3858,
    "end": 3863
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3864,
    "end": 3865
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 3865,
    "end": 3866
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 3867,
    "end": 3870
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 3871,
    "end": 3872
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3872,
    "end": 3873
  },
  {
    "type": "Identifier",
    "value": "l4_c",
    "start": 3875,
    "end": 3879
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3879,
    "end": 3880
  },
  {
    "type": "Keyword",
    "value": "for",
    "start": 3881,
    "end": 3884
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3885,
    "end": 3886
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 3886,
    "end": 3891
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 3892,
    "end": 3893
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3894,
    "end": 3895
  },
  {
    "type": "Numeric",
    "value": "0",
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
    "value": "y",
    "start": 3899,
    "end": 3900
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 3901,
    "end": 3902
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 3903,
    "end": 3904
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3904,
    "end": 3905
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3905,
    "end": 3906
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3907,
    "end": 3908
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 3913,
    "end": 3918
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 3919,
    "end": 3920
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3921,
    "end": 3922
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 3923,
    "end": 3924
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3924,
    "end": 3925
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3930,
    "end": 3931
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 3931,
    "end": 3939
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3939,
    "end": 3940
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3940,
    "end": 3941
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3942,
    "end": 3943
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 3944,
    "end": 3950
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 3951,
    "end": 3952
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3952,
    "end": 3953
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3953,
    "end": 3954
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3954,
    "end": 3955
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3960,
    "end": 3961
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3961,
    "end": 3962
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3962,
    "end": 3963
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 3964,
    "end": 3966
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 3967,
    "end": 3968
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3968,
    "end": 3969
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3969,
    "end": 3970
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 3975,
    "end": 3977
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3978,
    "end": 3979
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 3979,
    "end": 3980
  },
  {
    "type": "Punctuator",
    "value": "==",
    "start": 3981,
    "end": 3983
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 3984,
    "end": 3985
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3985,
    "end": 3986
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3987,
    "end": 3988
  },
  {
    "type": "Keyword",
    "value": "break",
    "start": 3997,
    "end": 4002
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4002,
    "end": 4003
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 4008,
    "end": 4009
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 4014,
    "end": 4016
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4017,
    "end": 4018
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 4018,
    "end": 4019
  },
  {
    "type": "Punctuator",
    "value": "==",
    "start": 4020,
    "end": 4022
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 4023,
    "end": 4024
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4024,
    "end": 4025
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 4026,
    "end": 4027
  },
  {
    "type": "Keyword",
    "value": "break",
    "start": 4036,
    "end": 4041
  },
  {
    "type": "Identifier",
    "value": "l4_c",
    "start": 4042,
    "end": 4046
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4046,
    "end": 4047
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 4052,
    "end": 4053
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 4058,
    "end": 4060
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4061,
    "end": 4062
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 4062,
    "end": 4063
  },
  {
    "type": "Punctuator",
    "value": "==",
    "start": 4064,
    "end": 4066
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 4067,
    "end": 4068
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4068,
    "end": 4069
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 4070,
    "end": 4071
  },
  {
    "type": "Keyword",
    "value": "continue",
    "start": 4080,
    "end": 4088
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4088,
    "end": 4089
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 4094,
    "end": 4095
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 4100,
    "end": 4102
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4103,
    "end": 4104
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 4104,
    "end": 4105
  },
  {
    "type": "Punctuator",
    "value": "==",
    "start": 4106,
    "end": 4108
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 4109,
    "end": 4110
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4110,
    "end": 4111
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 4112,
    "end": 4113
  },
  {
    "type": "Keyword",
    "value": "continue",
    "start": 4122,
    "end": 4130
  },
  {
    "type": "Identifier",
    "value": "l4_c",
    "start": 4131,
    "end": 4135
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4135,
    "end": 4136
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 4141,
    "end": 4142
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 4143,
    "end": 4144
  },
  {
    "type": "Identifier",
    "value": "l5_c",
    "start": 4146,
    "end": 4150
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4150,
    "end": 4151
  },
  {
    "type": "Keyword",
    "value": "for",
    "start": 4152,
    "end": 4155
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4156,
    "end": 4157
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 4157,
    "end": 4162
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 4163,
    "end": 4164
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 4165,
    "end": 4166
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 4167,
    "end": 4168
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 4168,
    "end": 4169
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 4170,
    "end": 4171
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 4172,
    "end": 4173
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 4174,
    "end": 4175
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4175,
    "end": 4176
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 4177,
    "end": 4178
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 4179,
    "end": 4180
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 4181,
    "end": 4182
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4182,
    "end": 4183
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4183,
    "end": 4184
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 4185,
    "end": 4186
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4191,
    "end": 4192
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 4192,
    "end": 4200
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4200,
    "end": 4201
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4201,
    "end": 4202
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 4203,
    "end": 4204
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 4205,
    "end": 4211
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 4212,
    "end": 4213
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 4214,
    "end": 4215
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 4216,
    "end": 4217
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 4217,
    "end": 4218
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4218,
    "end": 4219
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4219,
    "end": 4220
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4225,
    "end": 4226
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4226,
    "end": 4227
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4227,
    "end": 4228
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 4229,
    "end": 4231
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 4232,
    "end": 4233
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 4234,
    "end": 4235
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 4236,
    "end": 4237
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4237,
    "end": 4238
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4238,
    "end": 4239
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 4244,
    "end": 4246
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4247,
    "end": 4248
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 4248,
    "end": 4249
  },
  {
    "type": "Punctuator",
    "value": "==",
    "start": 4250,
    "end": 4252
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 4253,
    "end": 4254
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4254,
    "end": 4255
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 4256,
    "end": 4257
  },
  {
    "type": "Keyword",
    "value": "break",
    "start": 4266,
    "end": 4271
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4271,
    "end": 4272
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 4277,
    "end": 4278
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 4283,
    "end": 4285
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4286,
    "end": 4287
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 4287,
    "end": 4288
  },
  {
    "type": "Punctuator",
    "value": "==",
    "start": 4289,
    "end": 4291
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 4292,
    "end": 4293
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4293,
    "end": 4294
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 4295,
    "end": 4296
  },
  {
    "type": "Keyword",
    "value": "break",
    "start": 4305,
    "end": 4310
  },
  {
    "type": "Identifier",
    "value": "l5_c",
    "start": 4311,
    "end": 4315
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4315,
    "end": 4316
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 4321,
    "end": 4322
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 4327,
    "end": 4329
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4330,
    "end": 4331
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 4331,
    "end": 4332
  },
  {
    "type": "Punctuator",
    "value": "==",
    "start": 4333,
    "end": 4335
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 4336,
    "end": 4337
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4337,
    "end": 4338
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 4339,
    "end": 4340
  },
  {
    "type": "Keyword",
    "value": "continue",
    "start": 4349,
    "end": 4357
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4357,
    "end": 4358
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 4363,
    "end": 4364
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 4369,
    "end": 4371
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4372,
    "end": 4373
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 4373,
    "end": 4374
  },
  {
    "type": "Punctuator",
    "value": "==",
    "start": 4375,
    "end": 4377
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 4378,
    "end": 4379
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4379,
    "end": 4380
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 4381,
    "end": 4382
  },
  {
    "type": "Keyword",
    "value": "continue",
    "start": 4391,
    "end": 4399
  },
  {
    "type": "Identifier",
    "value": "l5_c",
    "start": 4400,
    "end": 4404
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4404,
    "end": 4405
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 4410,
    "end": 4411
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 4412,
    "end": 4413
  },
  {
    "type": "Identifier",
    "value": "l6_c",
    "start": 4415,
    "end": 4419
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4419,
    "end": 4420
  },
  {
    "type": "Keyword",
    "value": "while",
    "start": 4421,
    "end": 4426
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4427,
    "end": 4428
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 4428,
    "end": 4429
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 4430,
    "end": 4433
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 4434,
    "end": 4435
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4435,
    "end": 4436
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 4437,
    "end": 4438
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 4443,
    "end": 4448
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 4449,
    "end": 4450
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 4451,
    "end": 4452
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 4453,
    "end": 4454
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 4454,
    "end": 4455
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 4456,
    "end": 4457
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 4458,
    "end": 4459
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 4460,
    "end": 4461
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4461,
    "end": 4462
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4467,
    "end": 4468
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 4468,
    "end": 4476
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4476,
    "end": 4477
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4477,
    "end": 4478
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 4479,
    "end": 4480
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 4481,
    "end": 4487
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 4488,
    "end": 4489
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 4490,
    "end": 4491
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 4492,
    "end": 4493
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 4493,
    "end": 4494
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4494,
    "end": 4495
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4495,
    "end": 4496
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4501,
    "end": 4502
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4502,
    "end": 4503
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4503,
    "end": 4504
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 4505,
    "end": 4507
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 4508,
    "end": 4509
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 4510,
    "end": 4511
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 4512,
    "end": 4513
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4513,
    "end": 4514
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4514,
    "end": 4515
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 4520,
    "end": 4522
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4523,
    "end": 4524
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 4524,
    "end": 4525
  },
  {
    "type": "Punctuator",
    "value": "==",
    "start": 4526,
    "end": 4528
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 4529,
    "end": 4530
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4530,
    "end": 4531
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 4532,
    "end": 4533
  },
  {
    "type": "Keyword",
    "value": "break",
    "start": 4542,
    "end": 4547
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4547,
    "end": 4548
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 4553,
    "end": 4554
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 4559,
    "end": 4561
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4562,
    "end": 4563
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 4563,
    "end": 4564
  },
  {
    "type": "Punctuator",
    "value": "==",
    "start": 4565,
    "end": 4567
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 4568,
    "end": 4569
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4569,
    "end": 4570
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 4571,
    "end": 4572
  },
  {
    "type": "Keyword",
    "value": "break",
    "start": 4581,
    "end": 4586
  },
  {
    "type": "Identifier",
    "value": "l6_c",
    "start": 4587,
    "end": 4591
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4591,
    "end": 4592
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 4597,
    "end": 4598
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 4603,
    "end": 4605
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4606,
    "end": 4607
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 4607,
    "end": 4608
  },
  {
    "type": "Punctuator",
    "value": "==",
    "start": 4609,
    "end": 4611
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 4612,
    "end": 4613
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4613,
    "end": 4614
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 4615,
    "end": 4616
  },
  {
    "type": "Keyword",
    "value": "continue",
    "start": 4625,
    "end": 4633
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4633,
    "end": 4634
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 4639,
    "end": 4640
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 4645,
    "end": 4647
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4648,
    "end": 4649
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 4649,
    "end": 4650
  },
  {
    "type": "Punctuator",
    "value": "==",
    "start": 4651,
    "end": 4653
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 4654,
    "end": 4655
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4655,
    "end": 4656
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 4657,
    "end": 4658
  },
  {
    "type": "Keyword",
    "value": "continue",
    "start": 4667,
    "end": 4675
  },
  {
    "type": "Identifier",
    "value": "l6_c",
    "start": 4676,
    "end": 4680
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4680,
    "end": 4681
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 4686,
    "end": 4687
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 4689,
    "end": 4690
  },
  {
    "type": "Identifier",
    "value": "l7_c",
    "start": 4692,
    "end": 4696
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4696,
    "end": 4697
  },
  {
    "type": "Keyword",
    "value": "do",
    "start": 4698,
    "end": 4700
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 4701,
    "end": 4702
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 4707,
    "end": 4712
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 4713,
    "end": 4714
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 4715,
    "end": 4716
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 4717,
    "end": 4718
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 4718,
    "end": 4719
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 4720,
    "end": 4721
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 4722,
    "end": 4723
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 4724,
    "end": 4725
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4725,
    "end": 4726
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4731,
    "end": 4732
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 4732,
    "end": 4740
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4740,
    "end": 4741
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4741,
    "end": 4742
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 4743,
    "end": 4744
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 4745,
    "end": 4751
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 4752,
    "end": 4753
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 4754,
    "end": 4755
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 4756,
    "end": 4757
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 4757,
    "end": 4758
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4758,
    "end": 4759
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4759,
    "end": 4760
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4765,
    "end": 4766
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4766,
    "end": 4767
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4767,
    "end": 4768
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 4769,
    "end": 4771
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 4772,
    "end": 4773
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 4774,
    "end": 4775
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 4776,
    "end": 4777
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4777,
    "end": 4778
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4778,
    "end": 4779
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 4784,
    "end": 4786
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4787,
    "end": 4788
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 4788,
    "end": 4789
  },
  {
    "type": "Punctuator",
    "value": "==",
    "start": 4790,
    "end": 4792
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 4793,
    "end": 4794
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4794,
    "end": 4795
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 4796,
    "end": 4797
  },
  {
    "type": "Keyword",
    "value": "break",
    "start": 4806,
    "end": 4811
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4811,
    "end": 4812
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 4817,
    "end": 4818
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 4823,
    "end": 4825
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4826,
    "end": 4827
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 4827,
    "end": 4828
  },
  {
    "type": "Punctuator",
    "value": "==",
    "start": 4829,
    "end": 4831
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 4832,
    "end": 4833
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4833,
    "end": 4834
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 4835,
    "end": 4836
  },
  {
    "type": "Keyword",
    "value": "break",
    "start": 4845,
    "end": 4850
  },
  {
    "type": "Identifier",
    "value": "l7_c",
    "start": 4851,
    "end": 4855
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4855,
    "end": 4856
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 4861,
    "end": 4862
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 4867,
    "end": 4869
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4870,
    "end": 4871
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 4871,
    "end": 4872
  },
  {
    "type": "Punctuator",
    "value": "==",
    "start": 4873,
    "end": 4875
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 4876,
    "end": 4877
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4877,
    "end": 4878
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 4879,
    "end": 4880
  },
  {
    "type": "Keyword",
    "value": "continue",
    "start": 4889,
    "end": 4897
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4897,
    "end": 4898
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 4903,
    "end": 4904
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 4909,
    "end": 4911
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4912,
    "end": 4913
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 4913,
    "end": 4914
  },
  {
    "type": "Punctuator",
    "value": "==",
    "start": 4915,
    "end": 4917
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 4918,
    "end": 4919
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4919,
    "end": 4920
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 4921,
    "end": 4922
  },
  {
    "type": "Keyword",
    "value": "continue",
    "start": 4931,
    "end": 4939
  },
  {
    "type": "Identifier",
    "value": "l7_c",
    "start": 4940,
    "end": 4944
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4944,
    "end": 4945
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 4950,
    "end": 4951
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 4952,
    "end": 4953
  },
  {
    "type": "Keyword",
    "value": "while",
    "start": 4954,
    "end": 4959
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4960,
    "end": 4961
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 4961,
    "end": 4962
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 4963,
    "end": 4966
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 4967,
    "end": 4968
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4968,
    "end": 4969
  },
  {
    "type": "Identifier",
    "value": "l8_c",
    "start": 4971,
    "end": 4975
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4975,
    "end": 4976
  },
  {
    "type": "Keyword",
    "value": "for",
    "start": 4977,
    "end": 4980
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4981,
    "end": 4982
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 4982,
    "end": 4987
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 4988,
    "end": 4989
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 4990,
    "end": 4991
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 4992,
    "end": 4993
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4993,
    "end": 4994
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 4995,
    "end": 4996
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 4997,
    "end": 4998
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 4999,
    "end": 5000
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 5000,
    "end": 5001
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 5001,
    "end": 5002
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 5003,
    "end": 5004
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 5009,
    "end": 5014
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 5015,
    "end": 5016
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 5017,
    "end": 5018
  },
  {
    "type": "Numeric",
    "value": "1",
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
    "type": "Punctuator",
    "value": "(",
    "start": 5026,
    "end": 5027
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 5027,
    "end": 5035
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 5035,
    "end": 5036
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 5036,
    "end": 5037
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 5038,
    "end": 5039
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 5040,
    "end": 5046
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 5047,
    "end": 5048
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 5049,
    "end": 5050
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 5051,
    "end": 5052
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 5052,
    "end": 5053
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 5053,
    "end": 5054
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 5054,
    "end": 5055
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 5060,
    "end": 5061
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 5061,
    "end": 5062
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 5062,
    "end": 5063
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 5064,
    "end": 5066
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 5067,
    "end": 5068
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 5069,
    "end": 5070
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 5071,
    "end": 5072
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 5072,
    "end": 5073
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 5073,
    "end": 5074
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 5079,
    "end": 5081
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 5082,
    "end": 5083
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 5083,
    "end": 5084
  },
  {
    "type": "Punctuator",
    "value": "==",
    "start": 5085,
    "end": 5087
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 5088,
    "end": 5089
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 5089,
    "end": 5090
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 5091,
    "end": 5092
  },
  {
    "type": "Keyword",
    "value": "break",
    "start": 5101,
    "end": 5106
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 5106,
    "end": 5107
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 5112,
    "end": 5113
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 5118,
    "end": 5120
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 5121,
    "end": 5122
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 5122,
    "end": 5123
  },
  {
    "type": "Punctuator",
    "value": "==",
    "start": 5124,
    "end": 5126
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 5127,
    "end": 5128
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 5128,
    "end": 5129
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 5130,
    "end": 5131
  },
  {
    "type": "Keyword",
    "value": "break",
    "start": 5140,
    "end": 5145
  },
  {
    "type": "Identifier",
    "value": "l8_c",
    "start": 5146,
    "end": 5150
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 5150,
    "end": 5151
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 5156,
    "end": 5157
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 5162,
    "end": 5164
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 5165,
    "end": 5166
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 5166,
    "end": 5167
  },
  {
    "type": "Punctuator",
    "value": "==",
    "start": 5168,
    "end": 5170
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 5171,
    "end": 5172
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 5172,
    "end": 5173
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 5174,
    "end": 5175
  },
  {
    "type": "Keyword",
    "value": "continue",
    "start": 5184,
    "end": 5192
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 5192,
    "end": 5193
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 5198,
    "end": 5199
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 5204,
    "end": 5206
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 5207,
    "end": 5208
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 5208,
    "end": 5209
  },
  {
    "type": "Punctuator",
    "value": "==",
    "start": 5210,
    "end": 5212
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 5213,
    "end": 5214
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 5214,
    "end": 5215
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 5216,
    "end": 5217
  },
  {
    "type": "Keyword",
    "value": "continue",
    "start": 5226,
    "end": 5234
  },
  {
    "type": "Identifier",
    "value": "l8_c",
    "start": 5235,
    "end": 5239
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 5239,
    "end": 5240
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 5245,
    "end": 5246
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 5247,
    "end": 5248
  }
]
```
