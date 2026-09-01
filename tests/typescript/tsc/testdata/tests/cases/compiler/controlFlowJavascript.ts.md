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
            "name": "cond",
            "optional": false,
            "typeAnnotation": null,
            "start": 4,
            "end": 8
          },
          "init": {
            "type": "Literal",
            "value": true,
            "raw": "true",
            "start": 11,
            "end": 15
          },
          "definite": false,
          "start": 4,
          "end": 15
        }
      ],
      "declare": false,
      "start": 0,
      "end": 16
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f1",
        "optional": false,
        "typeAnnotation": null,
        "start": 63,
        "end": 65
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
                  "start": 78,
                  "end": 79
                },
                "init": null,
                "definite": false,
                "start": 78,
                "end": 79
              }
            ],
            "declare": false,
            "start": 74,
            "end": 80
          },
          {
            "type": "IfStatement",
            "test": {
              "type": "Identifier",
              "decorators": [],
              "name": "cond",
              "optional": false,
              "typeAnnotation": null,
              "start": 89,
              "end": 93
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "AssignmentExpression",
                    "operator": "=",
                    "left": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 105,
                      "end": 106
                    },
                    "right": {
                      "type": "Literal",
                      "value": 1,
                      "raw": "1",
                      "start": 109,
                      "end": 110
                    },
                    "start": 105,
                    "end": 110
                  },
                  "directive": null,
                  "start": 105,
                  "end": 111
                }
              ],
              "start": 95,
              "end": 117
            },
            "alternate": null,
            "start": 85,
            "end": 117
          },
          {
            "type": "IfStatement",
            "test": {
              "type": "Identifier",
              "decorators": [],
              "name": "cond",
              "optional": false,
              "typeAnnotation": null,
              "start": 126,
              "end": 130
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "AssignmentExpression",
                    "operator": "=",
                    "left": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 142,
                      "end": 143
                    },
                    "right": {
                      "type": "Literal",
                      "value": "hello",
                      "raw": "\"hello\"",
                      "start": 146,
                      "end": 153
                    },
                    "start": 142,
                    "end": 153
                  },
                  "directive": null,
                  "start": 142,
                  "end": 154
                }
              ],
              "start": 132,
              "end": 160
            },
            "alternate": null,
            "start": 122,
            "end": 160
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
                  "name": "y",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 171,
                  "end": 172
                },
                "init": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 175,
                  "end": 176
                },
                "definite": false,
                "start": 171,
                "end": 176
              }
            ],
            "declare": false,
            "start": 165,
            "end": 177
          }
        ],
        "start": 68,
        "end": 211
      },
      "expression": false,
      "start": 54,
      "end": 211
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f2",
        "optional": false,
        "typeAnnotation": null,
        "start": 267,
        "end": 269
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
                  "start": 282,
                  "end": 283
                },
                "init": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "undefined",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 286,
                  "end": 295
                },
                "definite": false,
                "start": 282,
                "end": 295
              }
            ],
            "declare": false,
            "start": 278,
            "end": 296
          },
          {
            "type": "IfStatement",
            "test": {
              "type": "Identifier",
              "decorators": [],
              "name": "cond",
              "optional": false,
              "typeAnnotation": null,
              "start": 305,
              "end": 309
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "AssignmentExpression",
                    "operator": "=",
                    "left": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 321,
                      "end": 322
                    },
                    "right": {
                      "type": "Literal",
                      "value": 1,
                      "raw": "1",
                      "start": 325,
                      "end": 326
                    },
                    "start": 321,
                    "end": 326
                  },
                  "directive": null,
                  "start": 321,
                  "end": 327
                }
              ],
              "start": 311,
              "end": 333
            },
            "alternate": null,
            "start": 301,
            "end": 333
          },
          {
            "type": "IfStatement",
            "test": {
              "type": "Identifier",
              "decorators": [],
              "name": "cond",
              "optional": false,
              "typeAnnotation": null,
              "start": 342,
              "end": 346
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "AssignmentExpression",
                    "operator": "=",
                    "left": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 358,
                      "end": 359
                    },
                    "right": {
                      "type": "Literal",
                      "value": "hello",
                      "raw": "\"hello\"",
                      "start": 362,
                      "end": 369
                    },
                    "start": 358,
                    "end": 369
                  },
                  "directive": null,
                  "start": 358,
                  "end": 370
                }
              ],
              "start": 348,
              "end": 376
            },
            "alternate": null,
            "start": 338,
            "end": 376
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
                  "name": "y",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 387,
                  "end": 388
                },
                "init": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 391,
                  "end": 392
                },
                "definite": false,
                "start": 387,
                "end": 392
              }
            ],
            "declare": false,
            "start": 381,
            "end": 393
          }
        ],
        "start": 272,
        "end": 427
      },
      "expression": false,
      "start": 258,
      "end": 427
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f3",
        "optional": false,
        "typeAnnotation": null,
        "start": 478,
        "end": 480
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
                  "start": 493,
                  "end": 494
                },
                "init": {
                  "type": "Literal",
                  "value": null,
                  "raw": "null",
                  "start": 497,
                  "end": 501
                },
                "definite": false,
                "start": 493,
                "end": 501
              }
            ],
            "declare": false,
            "start": 489,
            "end": 502
          },
          {
            "type": "IfStatement",
            "test": {
              "type": "Identifier",
              "decorators": [],
              "name": "cond",
              "optional": false,
              "typeAnnotation": null,
              "start": 511,
              "end": 515
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "AssignmentExpression",
                    "operator": "=",
                    "left": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 527,
                      "end": 528
                    },
                    "right": {
                      "type": "Literal",
                      "value": 1,
                      "raw": "1",
                      "start": 531,
                      "end": 532
                    },
                    "start": 527,
                    "end": 532
                  },
                  "directive": null,
                  "start": 527,
                  "end": 533
                }
              ],
              "start": 517,
              "end": 539
            },
            "alternate": null,
            "start": 507,
            "end": 539
          },
          {
            "type": "IfStatement",
            "test": {
              "type": "Identifier",
              "decorators": [],
              "name": "cond",
              "optional": false,
              "typeAnnotation": null,
              "start": 548,
              "end": 552
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "AssignmentExpression",
                    "operator": "=",
                    "left": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 564,
                      "end": 565
                    },
                    "right": {
                      "type": "Literal",
                      "value": "hello",
                      "raw": "\"hello\"",
                      "start": 568,
                      "end": 575
                    },
                    "start": 564,
                    "end": 575
                  },
                  "directive": null,
                  "start": 564,
                  "end": 576
                }
              ],
              "start": 554,
              "end": 582
            },
            "alternate": null,
            "start": 544,
            "end": 582
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
                  "name": "y",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 593,
                  "end": 594
                },
                "init": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 597,
                  "end": 598
                },
                "definite": false,
                "start": 593,
                "end": 598
              }
            ],
            "declare": false,
            "start": 587,
            "end": 599
          }
        ],
        "start": 483,
        "end": 628
      },
      "expression": false,
      "start": 469,
      "end": 628
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f5",
        "optional": false,
        "typeAnnotation": null,
        "start": 676,
        "end": 678
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
                  "start": 691,
                  "end": 692
                },
                "init": null,
                "definite": false,
                "start": 691,
                "end": 692
              }
            ],
            "declare": false,
            "start": 687,
            "end": 693
          },
          {
            "type": "IfStatement",
            "test": {
              "type": "Identifier",
              "decorators": [],
              "name": "cond",
              "optional": false,
              "typeAnnotation": null,
              "start": 702,
              "end": 706
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "AssignmentExpression",
                    "operator": "=",
                    "left": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 718,
                      "end": 719
                    },
                    "right": {
                      "type": "Literal",
                      "value": 1,
                      "raw": "1",
                      "start": 722,
                      "end": 723
                    },
                    "start": 718,
                    "end": 723
                  },
                  "directive": null,
                  "start": 718,
                  "end": 724
                }
              ],
              "start": 708,
              "end": 730
            },
            "alternate": null,
            "start": 698,
            "end": 730
          },
          {
            "type": "IfStatement",
            "test": {
              "type": "Identifier",
              "decorators": [],
              "name": "cond",
              "optional": false,
              "typeAnnotation": null,
              "start": 739,
              "end": 743
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "AssignmentExpression",
                    "operator": "=",
                    "left": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 755,
                      "end": 756
                    },
                    "right": {
                      "type": "Literal",
                      "value": "hello",
                      "raw": "\"hello\"",
                      "start": 759,
                      "end": 766
                    },
                    "start": 755,
                    "end": 766
                  },
                  "directive": null,
                  "start": 755,
                  "end": 767
                }
              ],
              "start": 745,
              "end": 773
            },
            "alternate": null,
            "start": 735,
            "end": 773
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
                  "name": "y",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 784,
                  "end": 785
                },
                "init": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 788,
                  "end": 789
                },
                "definite": false,
                "start": 784,
                "end": 789
              }
            ],
            "declare": false,
            "start": 778,
            "end": 790
          }
        ],
        "start": 681,
        "end": 824
      },
      "expression": false,
      "start": 667,
      "end": 824
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f6",
        "optional": false,
        "typeAnnotation": null,
        "start": 881,
        "end": 883
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
                  "start": 896,
                  "end": 897
                },
                "init": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "undefined",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 900,
                  "end": 909
                },
                "definite": false,
                "start": 896,
                "end": 909
              }
            ],
            "declare": false,
            "start": 892,
            "end": 910
          },
          {
            "type": "IfStatement",
            "test": {
              "type": "Identifier",
              "decorators": [],
              "name": "cond",
              "optional": false,
              "typeAnnotation": null,
              "start": 919,
              "end": 923
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "AssignmentExpression",
                    "operator": "=",
                    "left": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 935,
                      "end": 936
                    },
                    "right": {
                      "type": "Literal",
                      "value": 1,
                      "raw": "1",
                      "start": 939,
                      "end": 940
                    },
                    "start": 935,
                    "end": 940
                  },
                  "directive": null,
                  "start": 935,
                  "end": 941
                }
              ],
              "start": 925,
              "end": 947
            },
            "alternate": null,
            "start": 915,
            "end": 947
          },
          {
            "type": "IfStatement",
            "test": {
              "type": "Identifier",
              "decorators": [],
              "name": "cond",
              "optional": false,
              "typeAnnotation": null,
              "start": 956,
              "end": 960
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "AssignmentExpression",
                    "operator": "=",
                    "left": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 972,
                      "end": 973
                    },
                    "right": {
                      "type": "Literal",
                      "value": "hello",
                      "raw": "\"hello\"",
                      "start": 976,
                      "end": 983
                    },
                    "start": 972,
                    "end": 983
                  },
                  "directive": null,
                  "start": 972,
                  "end": 984
                }
              ],
              "start": 962,
              "end": 990
            },
            "alternate": null,
            "start": 952,
            "end": 990
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
                  "name": "y",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1001,
                  "end": 1002
                },
                "init": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1005,
                  "end": 1006
                },
                "definite": false,
                "start": 1001,
                "end": 1006
              }
            ],
            "declare": false,
            "start": 995,
            "end": 1007
          }
        ],
        "start": 886,
        "end": 1041
      },
      "expression": false,
      "start": 872,
      "end": 1041
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f7",
        "optional": false,
        "typeAnnotation": null,
        "start": 1093,
        "end": 1095
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
                  "start": 1108,
                  "end": 1109
                },
                "init": {
                  "type": "Literal",
                  "value": null,
                  "raw": "null",
                  "start": 1112,
                  "end": 1116
                },
                "definite": false,
                "start": 1108,
                "end": 1116
              }
            ],
            "declare": false,
            "start": 1104,
            "end": 1117
          },
          {
            "type": "IfStatement",
            "test": {
              "type": "Identifier",
              "decorators": [],
              "name": "cond",
              "optional": false,
              "typeAnnotation": null,
              "start": 1126,
              "end": 1130
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "AssignmentExpression",
                    "operator": "=",
                    "left": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1142,
                      "end": 1143
                    },
                    "right": {
                      "type": "Literal",
                      "value": 1,
                      "raw": "1",
                      "start": 1146,
                      "end": 1147
                    },
                    "start": 1142,
                    "end": 1147
                  },
                  "directive": null,
                  "start": 1142,
                  "end": 1148
                }
              ],
              "start": 1132,
              "end": 1154
            },
            "alternate": null,
            "start": 1122,
            "end": 1154
          },
          {
            "type": "IfStatement",
            "test": {
              "type": "Identifier",
              "decorators": [],
              "name": "cond",
              "optional": false,
              "typeAnnotation": null,
              "start": 1163,
              "end": 1167
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "AssignmentExpression",
                    "operator": "=",
                    "left": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1179,
                      "end": 1180
                    },
                    "right": {
                      "type": "Literal",
                      "value": "hello",
                      "raw": "\"hello\"",
                      "start": 1183,
                      "end": 1190
                    },
                    "start": 1179,
                    "end": 1190
                  },
                  "directive": null,
                  "start": 1179,
                  "end": 1191
                }
              ],
              "start": 1169,
              "end": 1197
            },
            "alternate": null,
            "start": 1159,
            "end": 1197
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
                  "name": "y",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1208,
                  "end": 1209
                },
                "init": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1212,
                  "end": 1213
                },
                "definite": false,
                "start": 1208,
                "end": 1213
              }
            ],
            "declare": false,
            "start": 1202,
            "end": 1214
          }
        ],
        "start": 1098,
        "end": 1243
      },
      "expression": false,
      "start": 1084,
      "end": 1243
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f9",
        "optional": false,
        "typeAnnotation": null,
        "start": 1293,
        "end": 1295
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
                  "start": 1308,
                  "end": 1309
                },
                "init": null,
                "definite": false,
                "start": 1308,
                "end": 1309
              }
            ],
            "declare": false,
            "start": 1304,
            "end": 1310
          },
          {
            "type": "IfStatement",
            "test": {
              "type": "Identifier",
              "decorators": [],
              "name": "cond",
              "optional": false,
              "typeAnnotation": null,
              "start": 1319,
              "end": 1323
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "AssignmentExpression",
                    "operator": "=",
                    "left": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1335,
                      "end": 1336
                    },
                    "right": {
                      "type": "Literal",
                      "value": 1,
                      "raw": "1",
                      "start": 1339,
                      "end": 1340
                    },
                    "start": 1335,
                    "end": 1340
                  },
                  "directive": null,
                  "start": 1335,
                  "end": 1341
                }
              ],
              "start": 1325,
              "end": 1347
            },
            "alternate": null,
            "start": 1315,
            "end": 1347
          },
          {
            "type": "IfStatement",
            "test": {
              "type": "Identifier",
              "decorators": [],
              "name": "cond",
              "optional": false,
              "typeAnnotation": null,
              "start": 1356,
              "end": 1360
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "AssignmentExpression",
                    "operator": "=",
                    "left": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1372,
                      "end": 1373
                    },
                    "right": {
                      "type": "Literal",
                      "value": "hello",
                      "raw": "\"hello\"",
                      "start": 1376,
                      "end": 1383
                    },
                    "start": 1372,
                    "end": 1383
                  },
                  "directive": null,
                  "start": 1372,
                  "end": 1384
                }
              ],
              "start": 1362,
              "end": 1390
            },
            "alternate": null,
            "start": 1352,
            "end": 1390
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
                  "name": "y",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1401,
                  "end": 1402
                },
                "init": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1405,
                  "end": 1406
                },
                "definite": false,
                "start": 1401,
                "end": 1406
              }
            ],
            "declare": false,
            "start": 1395,
            "end": 1407
          },
          {
            "type": "FunctionDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "f",
              "optional": false,
              "typeAnnotation": null,
              "start": 1453,
              "end": 1454
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
                  "type": "VariableDeclaration",
                  "kind": "const",
                  "declarations": [
                    {
                      "type": "VariableDeclarator",
                      "id": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "z",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1473,
                        "end": 1474
                      },
                      "init": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1477,
                        "end": 1478
                      },
                      "definite": false,
                      "start": 1473,
                      "end": 1478
                    }
                  ],
                  "declare": false,
                  "start": 1467,
                  "end": 1479
                }
              ],
              "start": 1457,
              "end": 1493
            },
            "expression": false,
            "start": 1444,
            "end": 1493
          }
        ],
        "start": 1298,
        "end": 1495
      },
      "expression": false,
      "start": 1284,
      "end": 1495
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f10",
        "optional": false,
        "typeAnnotation": null,
        "start": 1545,
        "end": 1548
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
                  "start": 1561,
                  "end": 1562
                },
                "init": null,
                "definite": false,
                "start": 1561,
                "end": 1562
              }
            ],
            "declare": false,
            "start": 1557,
            "end": 1563
          },
          {
            "type": "IfStatement",
            "test": {
              "type": "Identifier",
              "decorators": [],
              "name": "cond",
              "optional": false,
              "typeAnnotation": null,
              "start": 1572,
              "end": 1576
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "AssignmentExpression",
                    "operator": "=",
                    "left": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1588,
                      "end": 1589
                    },
                    "right": {
                      "type": "Literal",
                      "value": 1,
                      "raw": "1",
                      "start": 1592,
                      "end": 1593
                    },
                    "start": 1588,
                    "end": 1593
                  },
                  "directive": null,
                  "start": 1588,
                  "end": 1594
                }
              ],
              "start": 1578,
              "end": 1600
            },
            "alternate": null,
            "start": 1568,
            "end": 1600
          },
          {
            "type": "IfStatement",
            "test": {
              "type": "Identifier",
              "decorators": [],
              "name": "cond",
              "optional": false,
              "typeAnnotation": null,
              "start": 1609,
              "end": 1613
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "AssignmentExpression",
                    "operator": "=",
                    "left": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1625,
                      "end": 1626
                    },
                    "right": {
                      "type": "Literal",
                      "value": "hello",
                      "raw": "\"hello\"",
                      "start": 1629,
                      "end": 1636
                    },
                    "start": 1625,
                    "end": 1636
                  },
                  "directive": null,
                  "start": 1625,
                  "end": 1637
                }
              ],
              "start": 1615,
              "end": 1643
            },
            "alternate": null,
            "start": 1605,
            "end": 1643
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
                  "name": "y",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1654,
                  "end": 1655
                },
                "init": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1658,
                  "end": 1659
                },
                "definite": false,
                "start": 1654,
                "end": 1659
              }
            ],
            "declare": false,
            "start": 1648,
            "end": 1660
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
                  "name": "f",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1703,
                  "end": 1704
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
                        "type": "VariableDeclaration",
                        "kind": "const",
                        "declarations": [
                          {
                            "type": "VariableDeclarator",
                            "id": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "z",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 1729,
                              "end": 1730
                            },
                            "init": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "x",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 1733,
                              "end": 1734
                            },
                            "definite": false,
                            "start": 1729,
                            "end": 1734
                          }
                        ],
                        "declare": false,
                        "start": 1723,
                        "end": 1735
                      }
                    ],
                    "start": 1713,
                    "end": 1749
                  },
                  "id": null,
                  "generator": false,
                  "start": 1707,
                  "end": 1749
                },
                "definite": false,
                "start": 1703,
                "end": 1749
              }
            ],
            "declare": false,
            "start": 1697,
            "end": 1750
          }
        ],
        "start": 1551,
        "end": 1752
      },
      "expression": false,
      "start": 1536,
      "end": 1752
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 1752
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "let",
    "start": 0,
    "end": 3
  },
  {
    "type": "Identifier",
    "value": "cond",
    "start": 4,
    "end": 8
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 9,
    "end": 10
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 11,
    "end": 15
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 15,
    "end": 16
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 54,
    "end": 62
  },
  {
    "type": "Identifier",
    "value": "f1",
    "start": 63,
    "end": 65
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 65,
    "end": 66
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 66,
    "end": 67
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 68,
    "end": 69
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 74,
    "end": 77
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 78,
    "end": 79
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 79,
    "end": 80
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 85,
    "end": 87
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 88,
    "end": 89
  },
  {
    "type": "Identifier",
    "value": "cond",
    "start": 89,
    "end": 93
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 93,
    "end": 94
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 95,
    "end": 96
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 105,
    "end": 106
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 107,
    "end": 108
  },
  {
    "type": "Numeric",
    "value": "1",
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
    "start": 116,
    "end": 117
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 122,
    "end": 124
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 125,
    "end": 126
  },
  {
    "type": "Identifier",
    "value": "cond",
    "start": 126,
    "end": 130
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 130,
    "end": 131
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 132,
    "end": 133
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 142,
    "end": 143
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 144,
    "end": 145
  },
  {
    "type": "String",
    "value": "\"hello\"",
    "start": 146,
    "end": 153
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 153,
    "end": 154
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 159,
    "end": 160
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 165,
    "end": 170
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 171,
    "end": 172
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 173,
    "end": 174
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 175,
    "end": 176
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 176,
    "end": 177
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 210,
    "end": 211
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 258,
    "end": 266
  },
  {
    "type": "Identifier",
    "value": "f2",
    "start": 267,
    "end": 269
  },
  {
    "type": "Punctuator",
    "value": "(",
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
    "type": "Keyword",
    "value": "let",
    "start": 278,
    "end": 281
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 282,
    "end": 283
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 284,
    "end": 285
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 286,
    "end": 295
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 295,
    "end": 296
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 301,
    "end": 303
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 304,
    "end": 305
  },
  {
    "type": "Identifier",
    "value": "cond",
    "start": 305,
    "end": 309
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 309,
    "end": 310
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 311,
    "end": 312
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 321,
    "end": 322
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 323,
    "end": 324
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 325,
    "end": 326
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 326,
    "end": 327
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 332,
    "end": 333
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 338,
    "end": 340
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 341,
    "end": 342
  },
  {
    "type": "Identifier",
    "value": "cond",
    "start": 342,
    "end": 346
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 346,
    "end": 347
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 348,
    "end": 349
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 358,
    "end": 359
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 360,
    "end": 361
  },
  {
    "type": "String",
    "value": "\"hello\"",
    "start": 362,
    "end": 369
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 369,
    "end": 370
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 375,
    "end": 376
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 381,
    "end": 386
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 387,
    "end": 388
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 389,
    "end": 390
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 391,
    "end": 392
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 392,
    "end": 393
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 426,
    "end": 427
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 469,
    "end": 477
  },
  {
    "type": "Identifier",
    "value": "f3",
    "start": 478,
    "end": 480
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 480,
    "end": 481
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 481,
    "end": 482
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 483,
    "end": 484
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 489,
    "end": 492
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 493,
    "end": 494
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 495,
    "end": 496
  },
  {
    "type": "Null",
    "value": "null",
    "start": 497,
    "end": 501
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 501,
    "end": 502
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 507,
    "end": 509
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 510,
    "end": 511
  },
  {
    "type": "Identifier",
    "value": "cond",
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
    "value": "{",
    "start": 517,
    "end": 518
  },
  {
    "type": "Identifier",
    "value": "x",
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
    "type": "Punctuator",
    "value": "}",
    "start": 538,
    "end": 539
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 544,
    "end": 546
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 547,
    "end": 548
  },
  {
    "type": "Identifier",
    "value": "cond",
    "start": 548,
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
    "value": "{",
    "start": 554,
    "end": 555
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 564,
    "end": 565
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 566,
    "end": 567
  },
  {
    "type": "String",
    "value": "\"hello\"",
    "start": 568,
    "end": 575
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 575,
    "end": 576
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 581,
    "end": 582
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 587,
    "end": 592
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 593,
    "end": 594
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 595,
    "end": 596
  },
  {
    "type": "Identifier",
    "value": "x",
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
    "value": "}",
    "start": 627,
    "end": 628
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 667,
    "end": 675
  },
  {
    "type": "Identifier",
    "value": "f5",
    "start": 676,
    "end": 678
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 678,
    "end": 679
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 679,
    "end": 680
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 681,
    "end": 682
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 687,
    "end": 690
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 691,
    "end": 692
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 692,
    "end": 693
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 698,
    "end": 700
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 701,
    "end": 702
  },
  {
    "type": "Identifier",
    "value": "cond",
    "start": 702,
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
    "type": "Identifier",
    "value": "x",
    "start": 718,
    "end": 719
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 720,
    "end": 721
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 722,
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
    "value": "cond",
    "start": 739,
    "end": 743
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 743,
    "end": 744
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 745,
    "end": 746
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 755,
    "end": 756
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 757,
    "end": 758
  },
  {
    "type": "String",
    "value": "\"hello\"",
    "start": 759,
    "end": 766
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 766,
    "end": 767
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 772,
    "end": 773
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 778,
    "end": 783
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 784,
    "end": 785
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 786,
    "end": 787
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 788,
    "end": 789
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 789,
    "end": 790
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 823,
    "end": 824
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 872,
    "end": 880
  },
  {
    "type": "Identifier",
    "value": "f6",
    "start": 881,
    "end": 883
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 883,
    "end": 884
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 884,
    "end": 885
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 886,
    "end": 887
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 892,
    "end": 895
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 896,
    "end": 897
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 898,
    "end": 899
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 900,
    "end": 909
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 909,
    "end": 910
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 915,
    "end": 917
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 918,
    "end": 919
  },
  {
    "type": "Identifier",
    "value": "cond",
    "start": 919,
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
    "type": "Identifier",
    "value": "x",
    "start": 935,
    "end": 936
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 937,
    "end": 938
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 939,
    "end": 940
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 940,
    "end": 941
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 946,
    "end": 947
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 952,
    "end": 954
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 955,
    "end": 956
  },
  {
    "type": "Identifier",
    "value": "cond",
    "start": 956,
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
    "value": "{",
    "start": 962,
    "end": 963
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 972,
    "end": 973
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 974,
    "end": 975
  },
  {
    "type": "String",
    "value": "\"hello\"",
    "start": 976,
    "end": 983
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 983,
    "end": 984
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 989,
    "end": 990
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 995,
    "end": 1000
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 1001,
    "end": 1002
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1003,
    "end": 1004
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1005,
    "end": 1006
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1006,
    "end": 1007
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1040,
    "end": 1041
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1084,
    "end": 1092
  },
  {
    "type": "Identifier",
    "value": "f7",
    "start": 1093,
    "end": 1095
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1095,
    "end": 1096
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1096,
    "end": 1097
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1098,
    "end": 1099
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1104,
    "end": 1107
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1108,
    "end": 1109
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1110,
    "end": 1111
  },
  {
    "type": "Null",
    "value": "null",
    "start": 1112,
    "end": 1116
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1116,
    "end": 1117
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 1122,
    "end": 1124
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1125,
    "end": 1126
  },
  {
    "type": "Identifier",
    "value": "cond",
    "start": 1126,
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
    "type": "Identifier",
    "value": "x",
    "start": 1142,
    "end": 1143
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1144,
    "end": 1145
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 1146,
    "end": 1147
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1147,
    "end": 1148
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1153,
    "end": 1154
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 1159,
    "end": 1161
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1162,
    "end": 1163
  },
  {
    "type": "Identifier",
    "value": "cond",
    "start": 1163,
    "end": 1167
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1167,
    "end": 1168
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1169,
    "end": 1170
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
    "type": "String",
    "value": "\"hello\"",
    "start": 1183,
    "end": 1190
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1190,
    "end": 1191
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1196,
    "end": 1197
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 1202,
    "end": 1207
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 1208,
    "end": 1209
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1210,
    "end": 1211
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1212,
    "end": 1213
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1213,
    "end": 1214
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1242,
    "end": 1243
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1284,
    "end": 1292
  },
  {
    "type": "Identifier",
    "value": "f9",
    "start": 1293,
    "end": 1295
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1295,
    "end": 1296
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1296,
    "end": 1297
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1298,
    "end": 1299
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 1304,
    "end": 1307
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1308,
    "end": 1309
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1309,
    "end": 1310
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 1315,
    "end": 1317
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1318,
    "end": 1319
  },
  {
    "type": "Identifier",
    "value": "cond",
    "start": 1319,
    "end": 1323
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1323,
    "end": 1324
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1325,
    "end": 1326
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1335,
    "end": 1336
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1337,
    "end": 1338
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 1339,
    "end": 1340
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1340,
    "end": 1341
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1346,
    "end": 1347
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 1352,
    "end": 1354
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1355,
    "end": 1356
  },
  {
    "type": "Identifier",
    "value": "cond",
    "start": 1356,
    "end": 1360
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1360,
    "end": 1361
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1362,
    "end": 1363
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1372,
    "end": 1373
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1374,
    "end": 1375
  },
  {
    "type": "String",
    "value": "\"hello\"",
    "start": 1376,
    "end": 1383
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1383,
    "end": 1384
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1389,
    "end": 1390
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 1395,
    "end": 1400
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 1401,
    "end": 1402
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1403,
    "end": 1404
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1405,
    "end": 1406
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1406,
    "end": 1407
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1444,
    "end": 1452
  },
  {
    "type": "Identifier",
    "value": "f",
    "start": 1453,
    "end": 1454
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1454,
    "end": 1455
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1455,
    "end": 1456
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1457,
    "end": 1458
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 1467,
    "end": 1472
  },
  {
    "type": "Identifier",
    "value": "z",
    "start": 1473,
    "end": 1474
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1475,
    "end": 1476
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1477,
    "end": 1478
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1478,
    "end": 1479
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1492,
    "end": 1493
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1494,
    "end": 1495
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1536,
    "end": 1544
  },
  {
    "type": "Identifier",
    "value": "f10",
    "start": 1545,
    "end": 1548
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1548,
    "end": 1549
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1549,
    "end": 1550
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1551,
    "end": 1552
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 1557,
    "end": 1560
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1561,
    "end": 1562
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1562,
    "end": 1563
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 1568,
    "end": 1570
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1571,
    "end": 1572
  },
  {
    "type": "Identifier",
    "value": "cond",
    "start": 1572,
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
    "value": "{",
    "start": 1578,
    "end": 1579
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1588,
    "end": 1589
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1590,
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
    "value": ";",
    "start": 1593,
    "end": 1594
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1599,
    "end": 1600
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 1605,
    "end": 1607
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1608,
    "end": 1609
  },
  {
    "type": "Identifier",
    "value": "cond",
    "start": 1609,
    "end": 1613
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1613,
    "end": 1614
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1615,
    "end": 1616
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1625,
    "end": 1626
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1627,
    "end": 1628
  },
  {
    "type": "String",
    "value": "\"hello\"",
    "start": 1629,
    "end": 1636
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1636,
    "end": 1637
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1642,
    "end": 1643
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 1648,
    "end": 1653
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 1654,
    "end": 1655
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1656,
    "end": 1657
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1658,
    "end": 1659
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1659,
    "end": 1660
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 1697,
    "end": 1702
  },
  {
    "type": "Identifier",
    "value": "f",
    "start": 1703,
    "end": 1704
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1705,
    "end": 1706
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1707,
    "end": 1708
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1708,
    "end": 1709
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1710,
    "end": 1712
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1713,
    "end": 1714
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 1723,
    "end": 1728
  },
  {
    "type": "Identifier",
    "value": "z",
    "start": 1729,
    "end": 1730
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1731,
    "end": 1732
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1733,
    "end": 1734
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1734,
    "end": 1735
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1748,
    "end": 1749
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1749,
    "end": 1750
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1751,
    "end": 1752
  }
]
```
