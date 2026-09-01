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
            "name": "x",
            "optional": false,
            "typeAnnotation": null,
            "start": 12,
            "end": 13
          },
          "init": null,
          "definite": false,
          "start": 12,
          "end": 13
        },
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "y",
            "optional": false,
            "typeAnnotation": null,
            "start": 15,
            "end": 16
          },
          "init": null,
          "definite": false,
          "start": 15,
          "end": 16
        },
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "z",
            "optional": false,
            "typeAnnotation": null,
            "start": 18,
            "end": 19
          },
          "init": null,
          "definite": false,
          "start": 18,
          "end": 19
        },
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": null,
            "start": 21,
            "end": 22
          },
          "init": null,
          "definite": false,
          "start": 21,
          "end": 22
        },
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "b",
            "optional": false,
            "typeAnnotation": null,
            "start": 24,
            "end": 25
          },
          "init": null,
          "definite": false,
          "start": 24,
          "end": 25
        },
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "c",
            "optional": false,
            "typeAnnotation": null,
            "start": 27,
            "end": 28
          },
          "init": null,
          "definite": false,
          "start": 27,
          "end": 28
        }
      ],
      "declare": true,
      "start": 0,
      "end": 29
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "whileStatement0",
        "optional": false,
        "typeAnnotation": null,
        "start": 46,
        "end": 61
      },
      "generator": false,
      "async": true,
      "declare": false,
      "typeParameters": null,
      "params": [],
      "returnType": null,
      "body": {
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
              "start": 77,
              "end": 78
            },
            "body": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "y",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 82,
                    "end": 83
                  },
                  "directive": null,
                  "start": 82,
                  "end": 84
                }
              ],
              "start": 80,
              "end": 86
            },
            "start": 70,
            "end": 86
          }
        ],
        "start": 64,
        "end": 88
      },
      "expression": false,
      "start": 31,
      "end": 88
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "whileStatement1",
        "optional": false,
        "typeAnnotation": null,
        "start": 105,
        "end": 120
      },
      "generator": false,
      "async": true,
      "declare": false,
      "typeParameters": null,
      "params": [],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "WhileStatement",
            "test": {
              "type": "AwaitExpression",
              "argument": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 142,
                "end": 143
              },
              "start": 136,
              "end": 143
            },
            "body": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "y",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 147,
                    "end": 148
                  },
                  "directive": null,
                  "start": 147,
                  "end": 149
                }
              ],
              "start": 145,
              "end": 151
            },
            "start": 129,
            "end": 151
          }
        ],
        "start": 123,
        "end": 153
      },
      "expression": false,
      "start": 90,
      "end": 153
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "whileStatement2",
        "optional": false,
        "typeAnnotation": null,
        "start": 170,
        "end": 185
      },
      "generator": false,
      "async": true,
      "declare": false,
      "typeParameters": null,
      "params": [],
      "returnType": null,
      "body": {
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
              "start": 201,
              "end": 202
            },
            "body": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "AwaitExpression",
                    "argument": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "y",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 212,
                      "end": 213
                    },
                    "start": 206,
                    "end": 213
                  },
                  "directive": null,
                  "start": 206,
                  "end": 214
                }
              ],
              "start": 204,
              "end": 216
            },
            "start": 194,
            "end": 216
          }
        ],
        "start": 188,
        "end": 218
      },
      "expression": false,
      "start": 155,
      "end": 218
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "whileStatement3",
        "optional": false,
        "typeAnnotation": null,
        "start": 235,
        "end": 250
      },
      "generator": false,
      "async": true,
      "declare": false,
      "typeParameters": null,
      "params": [],
      "returnType": null,
      "body": {
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
              "start": 266,
              "end": 267
            },
            "body": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ContinueStatement",
                  "label": null,
                  "start": 271,
                  "end": 280
                }
              ],
              "start": 269,
              "end": 282
            },
            "start": 259,
            "end": 282
          }
        ],
        "start": 253,
        "end": 284
      },
      "expression": false,
      "start": 220,
      "end": 284
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "whileStatement4",
        "optional": false,
        "typeAnnotation": null,
        "start": 301,
        "end": 316
      },
      "generator": false,
      "async": true,
      "declare": false,
      "typeParameters": null,
      "params": [],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "WhileStatement",
            "test": {
              "type": "AwaitExpression",
              "argument": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 338,
                "end": 339
              },
              "start": 332,
              "end": 339
            },
            "body": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ContinueStatement",
                  "label": null,
                  "start": 343,
                  "end": 352
                }
              ],
              "start": 341,
              "end": 354
            },
            "start": 325,
            "end": 354
          }
        ],
        "start": 319,
        "end": 356
      },
      "expression": false,
      "start": 286,
      "end": 356
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "whileStatement5",
        "optional": false,
        "typeAnnotation": null,
        "start": 373,
        "end": 388
      },
      "generator": false,
      "async": true,
      "declare": false,
      "typeParameters": null,
      "params": [],
      "returnType": null,
      "body": {
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
              "start": 404,
              "end": 405
            },
            "body": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "AwaitExpression",
                    "argument": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "y",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 415,
                      "end": 416
                    },
                    "start": 409,
                    "end": 416
                  },
                  "directive": null,
                  "start": 409,
                  "end": 417
                },
                {
                  "type": "ContinueStatement",
                  "label": null,
                  "start": 418,
                  "end": 427
                }
              ],
              "start": 407,
              "end": 429
            },
            "start": 397,
            "end": 429
          }
        ],
        "start": 391,
        "end": 431
      },
      "expression": false,
      "start": 358,
      "end": 431
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "whileStatement6",
        "optional": false,
        "typeAnnotation": null,
        "start": 448,
        "end": 463
      },
      "generator": false,
      "async": true,
      "declare": false,
      "typeParameters": null,
      "params": [],
      "returnType": null,
      "body": {
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
              "start": 479,
              "end": 480
            },
            "body": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "IfStatement",
                  "test": {
                    "type": "Literal",
                    "value": 1,
                    "raw": "1",
                    "start": 488,
                    "end": 489
                  },
                  "consequent": {
                    "type": "ContinueStatement",
                    "label": null,
                    "start": 491,
                    "end": 500
                  },
                  "alternate": null,
                  "start": 484,
                  "end": 500
                },
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "AwaitExpression",
                    "argument": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "y",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 507,
                      "end": 508
                    },
                    "start": 501,
                    "end": 508
                  },
                  "directive": null,
                  "start": 501,
                  "end": 509
                }
              ],
              "start": 482,
              "end": 511
            },
            "start": 472,
            "end": 511
          }
        ],
        "start": 466,
        "end": 513
      },
      "expression": false,
      "start": 433,
      "end": 513
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "whileStatement7",
        "optional": false,
        "typeAnnotation": null,
        "start": 530,
        "end": 545
      },
      "generator": false,
      "async": true,
      "declare": false,
      "typeParameters": null,
      "params": [],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "LabeledStatement",
            "label": {
              "type": "Identifier",
              "decorators": [],
              "name": "A",
              "optional": false,
              "typeAnnotation": null,
              "start": 554,
              "end": 555
            },
            "body": {
              "type": "WhileStatement",
              "test": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 564,
                "end": 565
              },
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ContinueStatement",
                    "label": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "A",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 578,
                      "end": 579
                    },
                    "start": 569,
                    "end": 580
                  }
                ],
                "start": 567,
                "end": 582
              },
              "start": 557,
              "end": 582
            },
            "start": 554,
            "end": 582
          }
        ],
        "start": 548,
        "end": 584
      },
      "expression": false,
      "start": 515,
      "end": 584
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "whileStatement8",
        "optional": false,
        "typeAnnotation": null,
        "start": 601,
        "end": 616
      },
      "generator": false,
      "async": true,
      "declare": false,
      "typeParameters": null,
      "params": [],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "LabeledStatement",
            "label": {
              "type": "Identifier",
              "decorators": [],
              "name": "B",
              "optional": false,
              "typeAnnotation": null,
              "start": 625,
              "end": 626
            },
            "body": {
              "type": "WhileStatement",
              "test": {
                "type": "AwaitExpression",
                "argument": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 641,
                  "end": 642
                },
                "start": 635,
                "end": 642
              },
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ContinueStatement",
                    "label": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "B",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 655,
                      "end": 656
                    },
                    "start": 646,
                    "end": 657
                  }
                ],
                "start": 644,
                "end": 659
              },
              "start": 628,
              "end": 659
            },
            "start": 625,
            "end": 659
          }
        ],
        "start": 619,
        "end": 661
      },
      "expression": false,
      "start": 586,
      "end": 661
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "whileStatement9",
        "optional": false,
        "typeAnnotation": null,
        "start": 678,
        "end": 693
      },
      "generator": false,
      "async": true,
      "declare": false,
      "typeParameters": null,
      "params": [],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "LabeledStatement",
            "label": {
              "type": "Identifier",
              "decorators": [],
              "name": "C",
              "optional": false,
              "typeAnnotation": null,
              "start": 702,
              "end": 703
            },
            "body": {
              "type": "WhileStatement",
              "test": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 712,
                "end": 713
              },
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "AwaitExpression",
                      "argument": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "y",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 723,
                        "end": 724
                      },
                      "start": 717,
                      "end": 724
                    },
                    "directive": null,
                    "start": 717,
                    "end": 725
                  },
                  {
                    "type": "ContinueStatement",
                    "label": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "C",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 735,
                      "end": 736
                    },
                    "start": 726,
                    "end": 737
                  }
                ],
                "start": 715,
                "end": 739
              },
              "start": 705,
              "end": 739
            },
            "start": 702,
            "end": 739
          }
        ],
        "start": 696,
        "end": 741
      },
      "expression": false,
      "start": 663,
      "end": 741
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "whileStatement10",
        "optional": false,
        "typeAnnotation": null,
        "start": 758,
        "end": 774
      },
      "generator": false,
      "async": true,
      "declare": false,
      "typeParameters": null,
      "params": [],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "LabeledStatement",
            "label": {
              "type": "Identifier",
              "decorators": [],
              "name": "D",
              "optional": false,
              "typeAnnotation": null,
              "start": 783,
              "end": 784
            },
            "body": {
              "type": "WhileStatement",
              "test": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 793,
                "end": 794
              },
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "IfStatement",
                    "test": {
                      "type": "Literal",
                      "value": 1,
                      "raw": "1",
                      "start": 802,
                      "end": 803
                    },
                    "consequent": {
                      "type": "ContinueStatement",
                      "label": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "D",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 814,
                        "end": 815
                      },
                      "start": 805,
                      "end": 816
                    },
                    "alternate": null,
                    "start": 798,
                    "end": 816
                  },
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "AwaitExpression",
                      "argument": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "y",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 823,
                        "end": 824
                      },
                      "start": 817,
                      "end": 824
                    },
                    "directive": null,
                    "start": 817,
                    "end": 825
                  }
                ],
                "start": 796,
                "end": 827
              },
              "start": 786,
              "end": 827
            },
            "start": 783,
            "end": 827
          }
        ],
        "start": 777,
        "end": 829
      },
      "expression": false,
      "start": 743,
      "end": 829
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "whileStatement11",
        "optional": false,
        "typeAnnotation": null,
        "start": 846,
        "end": 862
      },
      "generator": false,
      "async": true,
      "declare": false,
      "typeParameters": null,
      "params": [],
      "returnType": null,
      "body": {
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
              "start": 878,
              "end": 879
            },
            "body": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "BreakStatement",
                  "label": null,
                  "start": 883,
                  "end": 889
                }
              ],
              "start": 881,
              "end": 891
            },
            "start": 871,
            "end": 891
          }
        ],
        "start": 865,
        "end": 893
      },
      "expression": false,
      "start": 831,
      "end": 893
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "whileStatement12",
        "optional": false,
        "typeAnnotation": null,
        "start": 910,
        "end": 926
      },
      "generator": false,
      "async": true,
      "declare": false,
      "typeParameters": null,
      "params": [],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "WhileStatement",
            "test": {
              "type": "AwaitExpression",
              "argument": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 948,
                "end": 949
              },
              "start": 942,
              "end": 949
            },
            "body": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "BreakStatement",
                  "label": null,
                  "start": 953,
                  "end": 959
                }
              ],
              "start": 951,
              "end": 961
            },
            "start": 935,
            "end": 961
          }
        ],
        "start": 929,
        "end": 963
      },
      "expression": false,
      "start": 895,
      "end": 963
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "whileStatement13",
        "optional": false,
        "typeAnnotation": null,
        "start": 980,
        "end": 996
      },
      "generator": false,
      "async": true,
      "declare": false,
      "typeParameters": null,
      "params": [],
      "returnType": null,
      "body": {
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
              "start": 1012,
              "end": 1013
            },
            "body": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "AwaitExpression",
                    "argument": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "y",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1023,
                      "end": 1024
                    },
                    "start": 1017,
                    "end": 1024
                  },
                  "directive": null,
                  "start": 1017,
                  "end": 1025
                },
                {
                  "type": "BreakStatement",
                  "label": null,
                  "start": 1026,
                  "end": 1032
                }
              ],
              "start": 1015,
              "end": 1034
            },
            "start": 1005,
            "end": 1034
          }
        ],
        "start": 999,
        "end": 1036
      },
      "expression": false,
      "start": 965,
      "end": 1036
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "whileStatement14",
        "optional": false,
        "typeAnnotation": null,
        "start": 1053,
        "end": 1069
      },
      "generator": false,
      "async": true,
      "declare": false,
      "typeParameters": null,
      "params": [],
      "returnType": null,
      "body": {
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
              "start": 1085,
              "end": 1086
            },
            "body": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "IfStatement",
                  "test": {
                    "type": "Literal",
                    "value": 1,
                    "raw": "1",
                    "start": 1094,
                    "end": 1095
                  },
                  "consequent": {
                    "type": "BreakStatement",
                    "label": null,
                    "start": 1097,
                    "end": 1103
                  },
                  "alternate": null,
                  "start": 1090,
                  "end": 1103
                },
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "AwaitExpression",
                    "argument": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "y",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1110,
                      "end": 1111
                    },
                    "start": 1104,
                    "end": 1111
                  },
                  "directive": null,
                  "start": 1104,
                  "end": 1112
                }
              ],
              "start": 1088,
              "end": 1114
            },
            "start": 1078,
            "end": 1114
          }
        ],
        "start": 1072,
        "end": 1116
      },
      "expression": false,
      "start": 1038,
      "end": 1116
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "whileStatement15",
        "optional": false,
        "typeAnnotation": null,
        "start": 1133,
        "end": 1149
      },
      "generator": false,
      "async": true,
      "declare": false,
      "typeParameters": null,
      "params": [],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "LabeledStatement",
            "label": {
              "type": "Identifier",
              "decorators": [],
              "name": "E",
              "optional": false,
              "typeAnnotation": null,
              "start": 1158,
              "end": 1159
            },
            "body": {
              "type": "WhileStatement",
              "test": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 1168,
                "end": 1169
              },
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "BreakStatement",
                    "label": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "E",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1179,
                      "end": 1180
                    },
                    "start": 1173,
                    "end": 1181
                  }
                ],
                "start": 1171,
                "end": 1183
              },
              "start": 1161,
              "end": 1183
            },
            "start": 1158,
            "end": 1183
          }
        ],
        "start": 1152,
        "end": 1185
      },
      "expression": false,
      "start": 1118,
      "end": 1185
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "whileStatement16",
        "optional": false,
        "typeAnnotation": null,
        "start": 1202,
        "end": 1218
      },
      "generator": false,
      "async": true,
      "declare": false,
      "typeParameters": null,
      "params": [],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "LabeledStatement",
            "label": {
              "type": "Identifier",
              "decorators": [],
              "name": "F",
              "optional": false,
              "typeAnnotation": null,
              "start": 1227,
              "end": 1228
            },
            "body": {
              "type": "WhileStatement",
              "test": {
                "type": "AwaitExpression",
                "argument": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1243,
                  "end": 1244
                },
                "start": 1237,
                "end": 1244
              },
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "BreakStatement",
                    "label": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "F",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1254,
                      "end": 1255
                    },
                    "start": 1248,
                    "end": 1256
                  }
                ],
                "start": 1246,
                "end": 1258
              },
              "start": 1230,
              "end": 1258
            },
            "start": 1227,
            "end": 1258
          }
        ],
        "start": 1221,
        "end": 1260
      },
      "expression": false,
      "start": 1187,
      "end": 1260
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "whileStatement17",
        "optional": false,
        "typeAnnotation": null,
        "start": 1277,
        "end": 1293
      },
      "generator": false,
      "async": true,
      "declare": false,
      "typeParameters": null,
      "params": [],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "LabeledStatement",
            "label": {
              "type": "Identifier",
              "decorators": [],
              "name": "G",
              "optional": false,
              "typeAnnotation": null,
              "start": 1302,
              "end": 1303
            },
            "body": {
              "type": "WhileStatement",
              "test": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 1312,
                "end": 1313
              },
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "AwaitExpression",
                      "argument": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "y",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1323,
                        "end": 1324
                      },
                      "start": 1317,
                      "end": 1324
                    },
                    "directive": null,
                    "start": 1317,
                    "end": 1325
                  },
                  {
                    "type": "BreakStatement",
                    "label": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "G",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1332,
                      "end": 1333
                    },
                    "start": 1326,
                    "end": 1334
                  }
                ],
                "start": 1315,
                "end": 1336
              },
              "start": 1305,
              "end": 1336
            },
            "start": 1302,
            "end": 1336
          }
        ],
        "start": 1296,
        "end": 1338
      },
      "expression": false,
      "start": 1262,
      "end": 1338
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "whileStatement18",
        "optional": false,
        "typeAnnotation": null,
        "start": 1355,
        "end": 1371
      },
      "generator": false,
      "async": true,
      "declare": false,
      "typeParameters": null,
      "params": [],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "LabeledStatement",
            "label": {
              "type": "Identifier",
              "decorators": [],
              "name": "H",
              "optional": false,
              "typeAnnotation": null,
              "start": 1380,
              "end": 1381
            },
            "body": {
              "type": "WhileStatement",
              "test": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 1390,
                "end": 1391
              },
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "IfStatement",
                    "test": {
                      "type": "Literal",
                      "value": 1,
                      "raw": "1",
                      "start": 1399,
                      "end": 1400
                    },
                    "consequent": {
                      "type": "BreakStatement",
                      "label": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "H",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1408,
                        "end": 1409
                      },
                      "start": 1402,
                      "end": 1410
                    },
                    "alternate": null,
                    "start": 1395,
                    "end": 1410
                  },
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "AwaitExpression",
                      "argument": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "y",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1417,
                        "end": 1418
                      },
                      "start": 1411,
                      "end": 1418
                    },
                    "directive": null,
                    "start": 1411,
                    "end": 1419
                  }
                ],
                "start": 1393,
                "end": 1421
              },
              "start": 1383,
              "end": 1421
            },
            "start": 1380,
            "end": 1421
          }
        ],
        "start": 1374,
        "end": 1423
      },
      "expression": false,
      "start": 1340,
      "end": 1423
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 1423
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
    "value": "var",
    "start": 8,
    "end": 11
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 12,
    "end": 13
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 13,
    "end": 14
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 15,
    "end": 16
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 16,
    "end": 17
  },
  {
    "type": "Identifier",
    "value": "z",
    "start": 18,
    "end": 19
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 19,
    "end": 20
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 21,
    "end": 22
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 22,
    "end": 23
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 24,
    "end": 25
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 25,
    "end": 26
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 27,
    "end": 28
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 28,
    "end": 29
  },
  {
    "type": "Identifier",
    "value": "async",
    "start": 31,
    "end": 36
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 37,
    "end": 45
  },
  {
    "type": "Identifier",
    "value": "whileStatement0",
    "start": 46,
    "end": 61
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 61,
    "end": 62
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 62,
    "end": 63
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 64,
    "end": 65
  },
  {
    "type": "Keyword",
    "value": "while",
    "start": 70,
    "end": 75
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 76,
    "end": 77
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 77,
    "end": 78
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 78,
    "end": 79
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 80,
    "end": 81
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 82,
    "end": 83
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 83,
    "end": 84
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 85,
    "end": 86
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 87,
    "end": 88
  },
  {
    "type": "Identifier",
    "value": "async",
    "start": 90,
    "end": 95
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 96,
    "end": 104
  },
  {
    "type": "Identifier",
    "value": "whileStatement1",
    "start": 105,
    "end": 120
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 120,
    "end": 121
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 121,
    "end": 122
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 123,
    "end": 124
  },
  {
    "type": "Keyword",
    "value": "while",
    "start": 129,
    "end": 134
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 135,
    "end": 136
  },
  {
    "type": "Identifier",
    "value": "await",
    "start": 136,
    "end": 141
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 142,
    "end": 143
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 143,
    "end": 144
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 145,
    "end": 146
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 147,
    "end": 148
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 148,
    "end": 149
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 150,
    "end": 151
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 152,
    "end": 153
  },
  {
    "type": "Identifier",
    "value": "async",
    "start": 155,
    "end": 160
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 161,
    "end": 169
  },
  {
    "type": "Identifier",
    "value": "whileStatement2",
    "start": 170,
    "end": 185
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 185,
    "end": 186
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 186,
    "end": 187
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 188,
    "end": 189
  },
  {
    "type": "Keyword",
    "value": "while",
    "start": 194,
    "end": 199
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 200,
    "end": 201
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 201,
    "end": 202
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 202,
    "end": 203
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 204,
    "end": 205
  },
  {
    "type": "Identifier",
    "value": "await",
    "start": 206,
    "end": 211
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 212,
    "end": 213
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 213,
    "end": 214
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 215,
    "end": 216
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 217,
    "end": 218
  },
  {
    "type": "Identifier",
    "value": "async",
    "start": 220,
    "end": 225
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 226,
    "end": 234
  },
  {
    "type": "Identifier",
    "value": "whileStatement3",
    "start": 235,
    "end": 250
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 250,
    "end": 251
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 251,
    "end": 252
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 253,
    "end": 254
  },
  {
    "type": "Keyword",
    "value": "while",
    "start": 259,
    "end": 264
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 265,
    "end": 266
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 266,
    "end": 267
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 267,
    "end": 268
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 269,
    "end": 270
  },
  {
    "type": "Keyword",
    "value": "continue",
    "start": 271,
    "end": 279
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 279,
    "end": 280
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 281,
    "end": 282
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 283,
    "end": 284
  },
  {
    "type": "Identifier",
    "value": "async",
    "start": 286,
    "end": 291
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 292,
    "end": 300
  },
  {
    "type": "Identifier",
    "value": "whileStatement4",
    "start": 301,
    "end": 316
  },
  {
    "type": "Punctuator",
    "value": "(",
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
    "value": "{",
    "start": 319,
    "end": 320
  },
  {
    "type": "Keyword",
    "value": "while",
    "start": 325,
    "end": 330
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 331,
    "end": 332
  },
  {
    "type": "Identifier",
    "value": "await",
    "start": 332,
    "end": 337
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 338,
    "end": 339
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 339,
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
    "value": "continue",
    "start": 343,
    "end": 351
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 351,
    "end": 352
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 353,
    "end": 354
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 355,
    "end": 356
  },
  {
    "type": "Identifier",
    "value": "async",
    "start": 358,
    "end": 363
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 364,
    "end": 372
  },
  {
    "type": "Identifier",
    "value": "whileStatement5",
    "start": 373,
    "end": 388
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 388,
    "end": 389
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 389,
    "end": 390
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 391,
    "end": 392
  },
  {
    "type": "Keyword",
    "value": "while",
    "start": 397,
    "end": 402
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 403,
    "end": 404
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 404,
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
    "value": "{",
    "start": 407,
    "end": 408
  },
  {
    "type": "Identifier",
    "value": "await",
    "start": 409,
    "end": 414
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 415,
    "end": 416
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 416,
    "end": 417
  },
  {
    "type": "Keyword",
    "value": "continue",
    "start": 418,
    "end": 426
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 426,
    "end": 427
  },
  {
    "type": "Punctuator",
    "value": "}",
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
    "type": "Identifier",
    "value": "async",
    "start": 433,
    "end": 438
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 439,
    "end": 447
  },
  {
    "type": "Identifier",
    "value": "whileStatement6",
    "start": 448,
    "end": 463
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 463,
    "end": 464
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 464,
    "end": 465
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 466,
    "end": 467
  },
  {
    "type": "Keyword",
    "value": "while",
    "start": 472,
    "end": 477
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 478,
    "end": 479
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 479,
    "end": 480
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 480,
    "end": 481
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 482,
    "end": 483
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 484,
    "end": 486
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 487,
    "end": 488
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 488,
    "end": 489
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 489,
    "end": 490
  },
  {
    "type": "Keyword",
    "value": "continue",
    "start": 491,
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
    "value": "await",
    "start": 501,
    "end": 506
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 507,
    "end": 508
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 508,
    "end": 509
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 510,
    "end": 511
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 512,
    "end": 513
  },
  {
    "type": "Identifier",
    "value": "async",
    "start": 515,
    "end": 520
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 521,
    "end": 529
  },
  {
    "type": "Identifier",
    "value": "whileStatement7",
    "start": 530,
    "end": 545
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 545,
    "end": 546
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 546,
    "end": 547
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 548,
    "end": 549
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 554,
    "end": 555
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 555,
    "end": 556
  },
  {
    "type": "Keyword",
    "value": "while",
    "start": 557,
    "end": 562
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 563,
    "end": 564
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 564,
    "end": 565
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 565,
    "end": 566
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 567,
    "end": 568
  },
  {
    "type": "Keyword",
    "value": "continue",
    "start": 569,
    "end": 577
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 578,
    "end": 579
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 579,
    "end": 580
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 581,
    "end": 582
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 583,
    "end": 584
  },
  {
    "type": "Identifier",
    "value": "async",
    "start": 586,
    "end": 591
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 592,
    "end": 600
  },
  {
    "type": "Identifier",
    "value": "whileStatement8",
    "start": 601,
    "end": 616
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 616,
    "end": 617
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 617,
    "end": 618
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 619,
    "end": 620
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 625,
    "end": 626
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 626,
    "end": 627
  },
  {
    "type": "Keyword",
    "value": "while",
    "start": 628,
    "end": 633
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 634,
    "end": 635
  },
  {
    "type": "Identifier",
    "value": "await",
    "start": 635,
    "end": 640
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 641,
    "end": 642
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 642,
    "end": 643
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 644,
    "end": 645
  },
  {
    "type": "Keyword",
    "value": "continue",
    "start": 646,
    "end": 654
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 655,
    "end": 656
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 656,
    "end": 657
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 658,
    "end": 659
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 660,
    "end": 661
  },
  {
    "type": "Identifier",
    "value": "async",
    "start": 663,
    "end": 668
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 669,
    "end": 677
  },
  {
    "type": "Identifier",
    "value": "whileStatement9",
    "start": 678,
    "end": 693
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 693,
    "end": 694
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 694,
    "end": 695
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 696,
    "end": 697
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 702,
    "end": 703
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 703,
    "end": 704
  },
  {
    "type": "Keyword",
    "value": "while",
    "start": 705,
    "end": 710
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 711,
    "end": 712
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 712,
    "end": 713
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 713,
    "end": 714
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 715,
    "end": 716
  },
  {
    "type": "Identifier",
    "value": "await",
    "start": 717,
    "end": 722
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 723,
    "end": 724
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 724,
    "end": 725
  },
  {
    "type": "Keyword",
    "value": "continue",
    "start": 726,
    "end": 734
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 735,
    "end": 736
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 736,
    "end": 737
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 738,
    "end": 739
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 740,
    "end": 741
  },
  {
    "type": "Identifier",
    "value": "async",
    "start": 743,
    "end": 748
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 749,
    "end": 757
  },
  {
    "type": "Identifier",
    "value": "whileStatement10",
    "start": 758,
    "end": 774
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 774,
    "end": 775
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 775,
    "end": 776
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 777,
    "end": 778
  },
  {
    "type": "Identifier",
    "value": "D",
    "start": 783,
    "end": 784
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 784,
    "end": 785
  },
  {
    "type": "Keyword",
    "value": "while",
    "start": 786,
    "end": 791
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 792,
    "end": 793
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 793,
    "end": 794
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 794,
    "end": 795
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 796,
    "end": 797
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 798,
    "end": 800
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 801,
    "end": 802
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 802,
    "end": 803
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 803,
    "end": 804
  },
  {
    "type": "Keyword",
    "value": "continue",
    "start": 805,
    "end": 813
  },
  {
    "type": "Identifier",
    "value": "D",
    "start": 814,
    "end": 815
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 815,
    "end": 816
  },
  {
    "type": "Identifier",
    "value": "await",
    "start": 817,
    "end": 822
  },
  {
    "type": "Identifier",
    "value": "y",
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
    "value": "}",
    "start": 826,
    "end": 827
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 828,
    "end": 829
  },
  {
    "type": "Identifier",
    "value": "async",
    "start": 831,
    "end": 836
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 837,
    "end": 845
  },
  {
    "type": "Identifier",
    "value": "whileStatement11",
    "start": 846,
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
    "value": ")",
    "start": 863,
    "end": 864
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 865,
    "end": 866
  },
  {
    "type": "Keyword",
    "value": "while",
    "start": 871,
    "end": 876
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 877,
    "end": 878
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
    "value": "{",
    "start": 881,
    "end": 882
  },
  {
    "type": "Keyword",
    "value": "break",
    "start": 883,
    "end": 888
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 888,
    "end": 889
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 890,
    "end": 891
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 892,
    "end": 893
  },
  {
    "type": "Identifier",
    "value": "async",
    "start": 895,
    "end": 900
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 901,
    "end": 909
  },
  {
    "type": "Identifier",
    "value": "whileStatement12",
    "start": 910,
    "end": 926
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 926,
    "end": 927
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 927,
    "end": 928
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 929,
    "end": 930
  },
  {
    "type": "Keyword",
    "value": "while",
    "start": 935,
    "end": 940
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 941,
    "end": 942
  },
  {
    "type": "Identifier",
    "value": "await",
    "start": 942,
    "end": 947
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 948,
    "end": 949
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 949,
    "end": 950
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 951,
    "end": 952
  },
  {
    "type": "Keyword",
    "value": "break",
    "start": 953,
    "end": 958
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 958,
    "end": 959
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 960,
    "end": 961
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 962,
    "end": 963
  },
  {
    "type": "Identifier",
    "value": "async",
    "start": 965,
    "end": 970
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 971,
    "end": 979
  },
  {
    "type": "Identifier",
    "value": "whileStatement13",
    "start": 980,
    "end": 996
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 996,
    "end": 997
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 997,
    "end": 998
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 999,
    "end": 1000
  },
  {
    "type": "Keyword",
    "value": "while",
    "start": 1005,
    "end": 1010
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1011,
    "end": 1012
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1012,
    "end": 1013
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1013,
    "end": 1014
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1015,
    "end": 1016
  },
  {
    "type": "Identifier",
    "value": "await",
    "start": 1017,
    "end": 1022
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 1023,
    "end": 1024
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1024,
    "end": 1025
  },
  {
    "type": "Keyword",
    "value": "break",
    "start": 1026,
    "end": 1031
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1031,
    "end": 1032
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1033,
    "end": 1034
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1035,
    "end": 1036
  },
  {
    "type": "Identifier",
    "value": "async",
    "start": 1038,
    "end": 1043
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1044,
    "end": 1052
  },
  {
    "type": "Identifier",
    "value": "whileStatement14",
    "start": 1053,
    "end": 1069
  },
  {
    "type": "Punctuator",
    "value": "(",
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
    "value": "while",
    "start": 1078,
    "end": 1083
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1084,
    "end": 1085
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1085,
    "end": 1086
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1086,
    "end": 1087
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1088,
    "end": 1089
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 1090,
    "end": 1092
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1093,
    "end": 1094
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
    "type": "Keyword",
    "value": "break",
    "start": 1097,
    "end": 1102
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1102,
    "end": 1103
  },
  {
    "type": "Identifier",
    "value": "await",
    "start": 1104,
    "end": 1109
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 1110,
    "end": 1111
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1111,
    "end": 1112
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1113,
    "end": 1114
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1115,
    "end": 1116
  },
  {
    "type": "Identifier",
    "value": "async",
    "start": 1118,
    "end": 1123
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1124,
    "end": 1132
  },
  {
    "type": "Identifier",
    "value": "whileStatement15",
    "start": 1133,
    "end": 1149
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1149,
    "end": 1150
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1150,
    "end": 1151
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1152,
    "end": 1153
  },
  {
    "type": "Identifier",
    "value": "E",
    "start": 1158,
    "end": 1159
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1159,
    "end": 1160
  },
  {
    "type": "Keyword",
    "value": "while",
    "start": 1161,
    "end": 1166
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1167,
    "end": 1168
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1168,
    "end": 1169
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1169,
    "end": 1170
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1171,
    "end": 1172
  },
  {
    "type": "Keyword",
    "value": "break",
    "start": 1173,
    "end": 1178
  },
  {
    "type": "Identifier",
    "value": "E",
    "start": 1179,
    "end": 1180
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1180,
    "end": 1181
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1182,
    "end": 1183
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1184,
    "end": 1185
  },
  {
    "type": "Identifier",
    "value": "async",
    "start": 1187,
    "end": 1192
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1193,
    "end": 1201
  },
  {
    "type": "Identifier",
    "value": "whileStatement16",
    "start": 1202,
    "end": 1218
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1218,
    "end": 1219
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1219,
    "end": 1220
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1221,
    "end": 1222
  },
  {
    "type": "Identifier",
    "value": "F",
    "start": 1227,
    "end": 1228
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1228,
    "end": 1229
  },
  {
    "type": "Keyword",
    "value": "while",
    "start": 1230,
    "end": 1235
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1236,
    "end": 1237
  },
  {
    "type": "Identifier",
    "value": "await",
    "start": 1237,
    "end": 1242
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1243,
    "end": 1244
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1244,
    "end": 1245
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1246,
    "end": 1247
  },
  {
    "type": "Keyword",
    "value": "break",
    "start": 1248,
    "end": 1253
  },
  {
    "type": "Identifier",
    "value": "F",
    "start": 1254,
    "end": 1255
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1255,
    "end": 1256
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1257,
    "end": 1258
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1259,
    "end": 1260
  },
  {
    "type": "Identifier",
    "value": "async",
    "start": 1262,
    "end": 1267
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1268,
    "end": 1276
  },
  {
    "type": "Identifier",
    "value": "whileStatement17",
    "start": 1277,
    "end": 1293
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1293,
    "end": 1294
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1294,
    "end": 1295
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1296,
    "end": 1297
  },
  {
    "type": "Identifier",
    "value": "G",
    "start": 1302,
    "end": 1303
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1303,
    "end": 1304
  },
  {
    "type": "Keyword",
    "value": "while",
    "start": 1305,
    "end": 1310
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1311,
    "end": 1312
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1312,
    "end": 1313
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1313,
    "end": 1314
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1315,
    "end": 1316
  },
  {
    "type": "Identifier",
    "value": "await",
    "start": 1317,
    "end": 1322
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 1323,
    "end": 1324
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1324,
    "end": 1325
  },
  {
    "type": "Keyword",
    "value": "break",
    "start": 1326,
    "end": 1331
  },
  {
    "type": "Identifier",
    "value": "G",
    "start": 1332,
    "end": 1333
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1333,
    "end": 1334
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1335,
    "end": 1336
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1337,
    "end": 1338
  },
  {
    "type": "Identifier",
    "value": "async",
    "start": 1340,
    "end": 1345
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1346,
    "end": 1354
  },
  {
    "type": "Identifier",
    "value": "whileStatement18",
    "start": 1355,
    "end": 1371
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1371,
    "end": 1372
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1372,
    "end": 1373
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1374,
    "end": 1375
  },
  {
    "type": "Identifier",
    "value": "H",
    "start": 1380,
    "end": 1381
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1381,
    "end": 1382
  },
  {
    "type": "Keyword",
    "value": "while",
    "start": 1383,
    "end": 1388
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1389,
    "end": 1390
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1390,
    "end": 1391
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1391,
    "end": 1392
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1393,
    "end": 1394
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 1395,
    "end": 1397
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1398,
    "end": 1399
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 1399,
    "end": 1400
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1400,
    "end": 1401
  },
  {
    "type": "Keyword",
    "value": "break",
    "start": 1402,
    "end": 1407
  },
  {
    "type": "Identifier",
    "value": "H",
    "start": 1408,
    "end": 1409
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1409,
    "end": 1410
  },
  {
    "type": "Identifier",
    "value": "await",
    "start": 1411,
    "end": 1416
  },
  {
    "type": "Identifier",
    "value": "y",
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
    "value": "}",
    "start": 1420,
    "end": 1421
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1422,
    "end": 1423
  }
]
```
