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
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSBooleanKeyword",
                "start": 18,
                "end": 25
              },
              "start": 16,
              "end": 25
            },
            "start": 12,
            "end": 25
          },
          "init": null,
          "definite": false,
          "start": 12,
          "end": 25
        }
      ],
      "declare": true,
      "start": 0,
      "end": 26
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f1",
        "optional": false,
        "typeAnnotation": null,
        "start": 94,
        "end": 96
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
                  "start": 109,
                  "end": 110
                },
                "init": null,
                "definite": false,
                "start": 109,
                "end": 110
              }
            ],
            "declare": false,
            "start": 105,
            "end": 111
          },
          {
            "type": "IfStatement",
            "test": {
              "type": "Identifier",
              "decorators": [],
              "name": "cond",
              "optional": false,
              "typeAnnotation": null,
              "start": 120,
              "end": 124
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
                      "start": 136,
                      "end": 137
                    },
                    "right": {
                      "type": "Literal",
                      "value": 1,
                      "raw": "1",
                      "start": 140,
                      "end": 141
                    },
                    "start": 136,
                    "end": 141
                  },
                  "directive": null,
                  "start": 136,
                  "end": 142
                }
              ],
              "start": 126,
              "end": 148
            },
            "alternate": null,
            "start": 116,
            "end": 148
          },
          {
            "type": "IfStatement",
            "test": {
              "type": "Identifier",
              "decorators": [],
              "name": "cond",
              "optional": false,
              "typeAnnotation": null,
              "start": 157,
              "end": 161
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
                      "start": 173,
                      "end": 174
                    },
                    "right": {
                      "type": "Literal",
                      "value": "hello",
                      "raw": "\"hello\"",
                      "start": 177,
                      "end": 184
                    },
                    "start": 173,
                    "end": 184
                  },
                  "directive": null,
                  "start": 173,
                  "end": 185
                }
              ],
              "start": 163,
              "end": 191
            },
            "alternate": null,
            "start": 153,
            "end": 191
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
                  "start": 202,
                  "end": 203
                },
                "init": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 206,
                  "end": 207
                },
                "definite": false,
                "start": 202,
                "end": 207
              }
            ],
            "declare": false,
            "start": 196,
            "end": 208
          }
        ],
        "start": 99,
        "end": 242
      },
      "expression": false,
      "start": 85,
      "end": 242
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f2",
        "optional": false,
        "typeAnnotation": null,
        "start": 322,
        "end": 324
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
                  "start": 337,
                  "end": 338
                },
                "init": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "undefined",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 341,
                  "end": 350
                },
                "definite": false,
                "start": 337,
                "end": 350
              }
            ],
            "declare": false,
            "start": 333,
            "end": 351
          },
          {
            "type": "IfStatement",
            "test": {
              "type": "Identifier",
              "decorators": [],
              "name": "cond",
              "optional": false,
              "typeAnnotation": null,
              "start": 360,
              "end": 364
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
                      "start": 376,
                      "end": 377
                    },
                    "right": {
                      "type": "Literal",
                      "value": 1,
                      "raw": "1",
                      "start": 380,
                      "end": 381
                    },
                    "start": 376,
                    "end": 381
                  },
                  "directive": null,
                  "start": 376,
                  "end": 382
                }
              ],
              "start": 366,
              "end": 388
            },
            "alternate": null,
            "start": 356,
            "end": 388
          },
          {
            "type": "IfStatement",
            "test": {
              "type": "Identifier",
              "decorators": [],
              "name": "cond",
              "optional": false,
              "typeAnnotation": null,
              "start": 397,
              "end": 401
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
                      "start": 413,
                      "end": 414
                    },
                    "right": {
                      "type": "Literal",
                      "value": "hello",
                      "raw": "\"hello\"",
                      "start": 417,
                      "end": 424
                    },
                    "start": 413,
                    "end": 424
                  },
                  "directive": null,
                  "start": 413,
                  "end": 425
                }
              ],
              "start": 403,
              "end": 431
            },
            "alternate": null,
            "start": 393,
            "end": 431
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
                  "start": 442,
                  "end": 443
                },
                "init": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 446,
                  "end": 447
                },
                "definite": false,
                "start": 442,
                "end": 447
              }
            ],
            "declare": false,
            "start": 436,
            "end": 448
          }
        ],
        "start": 327,
        "end": 482
      },
      "expression": false,
      "start": 313,
      "end": 482
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f3",
        "optional": false,
        "typeAnnotation": null,
        "start": 557,
        "end": 559
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
                  "start": 572,
                  "end": 573
                },
                "init": {
                  "type": "Literal",
                  "value": null,
                  "raw": "null",
                  "start": 576,
                  "end": 580
                },
                "definite": false,
                "start": 572,
                "end": 580
              }
            ],
            "declare": false,
            "start": 568,
            "end": 581
          },
          {
            "type": "IfStatement",
            "test": {
              "type": "Identifier",
              "decorators": [],
              "name": "cond",
              "optional": false,
              "typeAnnotation": null,
              "start": 590,
              "end": 594
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
                      "start": 606,
                      "end": 607
                    },
                    "right": {
                      "type": "Literal",
                      "value": 1,
                      "raw": "1",
                      "start": 610,
                      "end": 611
                    },
                    "start": 606,
                    "end": 611
                  },
                  "directive": null,
                  "start": 606,
                  "end": 612
                }
              ],
              "start": 596,
              "end": 618
            },
            "alternate": null,
            "start": 586,
            "end": 618
          },
          {
            "type": "IfStatement",
            "test": {
              "type": "Identifier",
              "decorators": [],
              "name": "cond",
              "optional": false,
              "typeAnnotation": null,
              "start": 627,
              "end": 631
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
                      "start": 643,
                      "end": 644
                    },
                    "right": {
                      "type": "Literal",
                      "value": "hello",
                      "raw": "\"hello\"",
                      "start": 647,
                      "end": 654
                    },
                    "start": 643,
                    "end": 654
                  },
                  "directive": null,
                  "start": 643,
                  "end": 655
                }
              ],
              "start": 633,
              "end": 661
            },
            "alternate": null,
            "start": 623,
            "end": 661
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
                  "start": 672,
                  "end": 673
                },
                "init": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 676,
                  "end": 677
                },
                "definite": false,
                "start": 672,
                "end": 677
              }
            ],
            "declare": false,
            "start": 666,
            "end": 678
          }
        ],
        "start": 562,
        "end": 707
      },
      "expression": false,
      "start": 548,
      "end": 707
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f4",
        "optional": false,
        "typeAnnotation": null,
        "start": 764,
        "end": 766
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
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSAnyKeyword",
                      "start": 782,
                      "end": 785
                    },
                    "start": 780,
                    "end": 785
                  },
                  "start": 779,
                  "end": 785
                },
                "init": null,
                "definite": false,
                "start": 779,
                "end": 785
              }
            ],
            "declare": false,
            "start": 775,
            "end": 786
          },
          {
            "type": "IfStatement",
            "test": {
              "type": "Identifier",
              "decorators": [],
              "name": "cond",
              "optional": false,
              "typeAnnotation": null,
              "start": 795,
              "end": 799
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
                      "start": 811,
                      "end": 812
                    },
                    "right": {
                      "type": "Literal",
                      "value": 1,
                      "raw": "1",
                      "start": 815,
                      "end": 816
                    },
                    "start": 811,
                    "end": 816
                  },
                  "directive": null,
                  "start": 811,
                  "end": 817
                }
              ],
              "start": 801,
              "end": 823
            },
            "alternate": null,
            "start": 791,
            "end": 823
          },
          {
            "type": "IfStatement",
            "test": {
              "type": "Identifier",
              "decorators": [],
              "name": "cond",
              "optional": false,
              "typeAnnotation": null,
              "start": 832,
              "end": 836
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
                      "start": 848,
                      "end": 849
                    },
                    "right": {
                      "type": "Literal",
                      "value": "hello",
                      "raw": "\"hello\"",
                      "start": 852,
                      "end": 859
                    },
                    "start": 848,
                    "end": 859
                  },
                  "directive": null,
                  "start": 848,
                  "end": 860
                }
              ],
              "start": 838,
              "end": 866
            },
            "alternate": null,
            "start": 828,
            "end": 866
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
                  "start": 877,
                  "end": 878
                },
                "init": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 881,
                  "end": 882
                },
                "definite": false,
                "start": 877,
                "end": 882
              }
            ],
            "declare": false,
            "start": 871,
            "end": 883
          }
        ],
        "start": 769,
        "end": 893
      },
      "expression": false,
      "start": 755,
      "end": 893
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f5",
        "optional": false,
        "typeAnnotation": null,
        "start": 961,
        "end": 963
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
                  "start": 976,
                  "end": 977
                },
                "init": null,
                "definite": false,
                "start": 976,
                "end": 977
              }
            ],
            "declare": false,
            "start": 972,
            "end": 978
          },
          {
            "type": "IfStatement",
            "test": {
              "type": "Identifier",
              "decorators": [],
              "name": "cond",
              "optional": false,
              "typeAnnotation": null,
              "start": 987,
              "end": 991
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
                      "start": 1003,
                      "end": 1004
                    },
                    "right": {
                      "type": "Literal",
                      "value": 1,
                      "raw": "1",
                      "start": 1007,
                      "end": 1008
                    },
                    "start": 1003,
                    "end": 1008
                  },
                  "directive": null,
                  "start": 1003,
                  "end": 1009
                }
              ],
              "start": 993,
              "end": 1015
            },
            "alternate": null,
            "start": 983,
            "end": 1015
          },
          {
            "type": "IfStatement",
            "test": {
              "type": "Identifier",
              "decorators": [],
              "name": "cond",
              "optional": false,
              "typeAnnotation": null,
              "start": 1024,
              "end": 1028
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
                      "start": 1040,
                      "end": 1041
                    },
                    "right": {
                      "type": "Literal",
                      "value": "hello",
                      "raw": "\"hello\"",
                      "start": 1044,
                      "end": 1051
                    },
                    "start": 1040,
                    "end": 1051
                  },
                  "directive": null,
                  "start": 1040,
                  "end": 1052
                }
              ],
              "start": 1030,
              "end": 1058
            },
            "alternate": null,
            "start": 1020,
            "end": 1058
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
                  "start": 1069,
                  "end": 1070
                },
                "init": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1073,
                  "end": 1074
                },
                "definite": false,
                "start": 1069,
                "end": 1074
              }
            ],
            "declare": false,
            "start": 1063,
            "end": 1075
          }
        ],
        "start": 966,
        "end": 1109
      },
      "expression": false,
      "start": 952,
      "end": 1109
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f6",
        "optional": false,
        "typeAnnotation": null,
        "start": 1189,
        "end": 1191
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
                  "start": 1204,
                  "end": 1205
                },
                "init": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "undefined",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1208,
                  "end": 1217
                },
                "definite": false,
                "start": 1204,
                "end": 1217
              }
            ],
            "declare": false,
            "start": 1200,
            "end": 1218
          },
          {
            "type": "IfStatement",
            "test": {
              "type": "Identifier",
              "decorators": [],
              "name": "cond",
              "optional": false,
              "typeAnnotation": null,
              "start": 1227,
              "end": 1231
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
                      "start": 1243,
                      "end": 1244
                    },
                    "right": {
                      "type": "Literal",
                      "value": 1,
                      "raw": "1",
                      "start": 1247,
                      "end": 1248
                    },
                    "start": 1243,
                    "end": 1248
                  },
                  "directive": null,
                  "start": 1243,
                  "end": 1249
                }
              ],
              "start": 1233,
              "end": 1255
            },
            "alternate": null,
            "start": 1223,
            "end": 1255
          },
          {
            "type": "IfStatement",
            "test": {
              "type": "Identifier",
              "decorators": [],
              "name": "cond",
              "optional": false,
              "typeAnnotation": null,
              "start": 1264,
              "end": 1268
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
                      "start": 1280,
                      "end": 1281
                    },
                    "right": {
                      "type": "Literal",
                      "value": "hello",
                      "raw": "\"hello\"",
                      "start": 1284,
                      "end": 1291
                    },
                    "start": 1280,
                    "end": 1291
                  },
                  "directive": null,
                  "start": 1280,
                  "end": 1292
                }
              ],
              "start": 1270,
              "end": 1298
            },
            "alternate": null,
            "start": 1260,
            "end": 1298
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
                  "start": 1309,
                  "end": 1310
                },
                "init": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1313,
                  "end": 1314
                },
                "definite": false,
                "start": 1309,
                "end": 1314
              }
            ],
            "declare": false,
            "start": 1303,
            "end": 1315
          }
        ],
        "start": 1194,
        "end": 1349
      },
      "expression": false,
      "start": 1180,
      "end": 1349
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f7",
        "optional": false,
        "typeAnnotation": null,
        "start": 1424,
        "end": 1426
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
                  "start": 1439,
                  "end": 1440
                },
                "init": {
                  "type": "Literal",
                  "value": null,
                  "raw": "null",
                  "start": 1443,
                  "end": 1447
                },
                "definite": false,
                "start": 1439,
                "end": 1447
              }
            ],
            "declare": false,
            "start": 1435,
            "end": 1448
          },
          {
            "type": "IfStatement",
            "test": {
              "type": "Identifier",
              "decorators": [],
              "name": "cond",
              "optional": false,
              "typeAnnotation": null,
              "start": 1457,
              "end": 1461
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
                      "start": 1473,
                      "end": 1474
                    },
                    "right": {
                      "type": "Literal",
                      "value": 1,
                      "raw": "1",
                      "start": 1477,
                      "end": 1478
                    },
                    "start": 1473,
                    "end": 1478
                  },
                  "directive": null,
                  "start": 1473,
                  "end": 1479
                }
              ],
              "start": 1463,
              "end": 1485
            },
            "alternate": null,
            "start": 1453,
            "end": 1485
          },
          {
            "type": "IfStatement",
            "test": {
              "type": "Identifier",
              "decorators": [],
              "name": "cond",
              "optional": false,
              "typeAnnotation": null,
              "start": 1494,
              "end": 1498
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
                      "start": 1510,
                      "end": 1511
                    },
                    "right": {
                      "type": "Literal",
                      "value": "hello",
                      "raw": "\"hello\"",
                      "start": 1514,
                      "end": 1521
                    },
                    "start": 1510,
                    "end": 1521
                  },
                  "directive": null,
                  "start": 1510,
                  "end": 1522
                }
              ],
              "start": 1500,
              "end": 1528
            },
            "alternate": null,
            "start": 1490,
            "end": 1528
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
                  "start": 1539,
                  "end": 1540
                },
                "init": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1543,
                  "end": 1544
                },
                "definite": false,
                "start": 1539,
                "end": 1544
              }
            ],
            "declare": false,
            "start": 1533,
            "end": 1545
          }
        ],
        "start": 1429,
        "end": 1574
      },
      "expression": false,
      "start": 1415,
      "end": 1574
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f8",
        "optional": false,
        "typeAnnotation": null,
        "start": 1631,
        "end": 1633
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
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSAnyKeyword",
                      "start": 1649,
                      "end": 1652
                    },
                    "start": 1647,
                    "end": 1652
                  },
                  "start": 1646,
                  "end": 1652
                },
                "init": null,
                "definite": false,
                "start": 1646,
                "end": 1652
              }
            ],
            "declare": false,
            "start": 1642,
            "end": 1653
          },
          {
            "type": "IfStatement",
            "test": {
              "type": "Identifier",
              "decorators": [],
              "name": "cond",
              "optional": false,
              "typeAnnotation": null,
              "start": 1662,
              "end": 1666
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
                      "start": 1678,
                      "end": 1679
                    },
                    "right": {
                      "type": "Literal",
                      "value": 1,
                      "raw": "1",
                      "start": 1682,
                      "end": 1683
                    },
                    "start": 1678,
                    "end": 1683
                  },
                  "directive": null,
                  "start": 1678,
                  "end": 1684
                }
              ],
              "start": 1668,
              "end": 1690
            },
            "alternate": null,
            "start": 1658,
            "end": 1690
          },
          {
            "type": "IfStatement",
            "test": {
              "type": "Identifier",
              "decorators": [],
              "name": "cond",
              "optional": false,
              "typeAnnotation": null,
              "start": 1699,
              "end": 1703
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
                      "start": 1715,
                      "end": 1716
                    },
                    "right": {
                      "type": "Literal",
                      "value": "hello",
                      "raw": "\"hello\"",
                      "start": 1719,
                      "end": 1726
                    },
                    "start": 1715,
                    "end": 1726
                  },
                  "directive": null,
                  "start": 1715,
                  "end": 1727
                }
              ],
              "start": 1705,
              "end": 1733
            },
            "alternate": null,
            "start": 1695,
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
                  "name": "y",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1744,
                  "end": 1745
                },
                "init": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1748,
                  "end": 1749
                },
                "definite": false,
                "start": 1744,
                "end": 1749
              }
            ],
            "declare": false,
            "start": 1738,
            "end": 1750
          }
        ],
        "start": 1636,
        "end": 1760
      },
      "expression": false,
      "start": 1622,
      "end": 1760
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f9",
        "optional": false,
        "typeAnnotation": null,
        "start": 1810,
        "end": 1812
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
                  "start": 1825,
                  "end": 1826
                },
                "init": null,
                "definite": false,
                "start": 1825,
                "end": 1826
              }
            ],
            "declare": false,
            "start": 1821,
            "end": 1827
          },
          {
            "type": "IfStatement",
            "test": {
              "type": "Identifier",
              "decorators": [],
              "name": "cond",
              "optional": false,
              "typeAnnotation": null,
              "start": 1836,
              "end": 1840
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
                      "start": 1852,
                      "end": 1853
                    },
                    "right": {
                      "type": "Literal",
                      "value": 1,
                      "raw": "1",
                      "start": 1856,
                      "end": 1857
                    },
                    "start": 1852,
                    "end": 1857
                  },
                  "directive": null,
                  "start": 1852,
                  "end": 1858
                }
              ],
              "start": 1842,
              "end": 1864
            },
            "alternate": null,
            "start": 1832,
            "end": 1864
          },
          {
            "type": "IfStatement",
            "test": {
              "type": "Identifier",
              "decorators": [],
              "name": "cond",
              "optional": false,
              "typeAnnotation": null,
              "start": 1873,
              "end": 1877
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
                      "start": 1889,
                      "end": 1890
                    },
                    "right": {
                      "type": "Literal",
                      "value": "hello",
                      "raw": "\"hello\"",
                      "start": 1893,
                      "end": 1900
                    },
                    "start": 1889,
                    "end": 1900
                  },
                  "directive": null,
                  "start": 1889,
                  "end": 1901
                }
              ],
              "start": 1879,
              "end": 1907
            },
            "alternate": null,
            "start": 1869,
            "end": 1907
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
                  "start": 1918,
                  "end": 1919
                },
                "init": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
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
            "end": 1924
          },
          {
            "type": "FunctionDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "f",
              "optional": false,
              "typeAnnotation": null,
              "start": 1970,
              "end": 1971
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
                        "start": 1990,
                        "end": 1991
                      },
                      "init": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1994,
                        "end": 1995
                      },
                      "definite": false,
                      "start": 1990,
                      "end": 1995
                    }
                  ],
                  "declare": false,
                  "start": 1984,
                  "end": 1996
                }
              ],
              "start": 1974,
              "end": 2010
            },
            "expression": false,
            "start": 1961,
            "end": 2010
          }
        ],
        "start": 1815,
        "end": 2012
      },
      "expression": false,
      "start": 1801,
      "end": 2012
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f10",
        "optional": false,
        "typeAnnotation": null,
        "start": 2062,
        "end": 2065
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
                  "start": 2078,
                  "end": 2079
                },
                "init": null,
                "definite": false,
                "start": 2078,
                "end": 2079
              }
            ],
            "declare": false,
            "start": 2074,
            "end": 2080
          },
          {
            "type": "IfStatement",
            "test": {
              "type": "Identifier",
              "decorators": [],
              "name": "cond",
              "optional": false,
              "typeAnnotation": null,
              "start": 2089,
              "end": 2093
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
                      "start": 2105,
                      "end": 2106
                    },
                    "right": {
                      "type": "Literal",
                      "value": 1,
                      "raw": "1",
                      "start": 2109,
                      "end": 2110
                    },
                    "start": 2105,
                    "end": 2110
                  },
                  "directive": null,
                  "start": 2105,
                  "end": 2111
                }
              ],
              "start": 2095,
              "end": 2117
            },
            "alternate": null,
            "start": 2085,
            "end": 2117
          },
          {
            "type": "IfStatement",
            "test": {
              "type": "Identifier",
              "decorators": [],
              "name": "cond",
              "optional": false,
              "typeAnnotation": null,
              "start": 2126,
              "end": 2130
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
                      "start": 2142,
                      "end": 2143
                    },
                    "right": {
                      "type": "Literal",
                      "value": "hello",
                      "raw": "\"hello\"",
                      "start": 2146,
                      "end": 2153
                    },
                    "start": 2142,
                    "end": 2153
                  },
                  "directive": null,
                  "start": 2142,
                  "end": 2154
                }
              ],
              "start": 2132,
              "end": 2160
            },
            "alternate": null,
            "start": 2122,
            "end": 2160
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
                  "start": 2171,
                  "end": 2172
                },
                "init": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2175,
                  "end": 2176
                },
                "definite": false,
                "start": 2171,
                "end": 2176
              }
            ],
            "declare": false,
            "start": 2165,
            "end": 2177
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
                  "start": 2220,
                  "end": 2221
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
                              "start": 2246,
                              "end": 2247
                            },
                            "init": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "x",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 2250,
                              "end": 2251
                            },
                            "definite": false,
                            "start": 2246,
                            "end": 2251
                          }
                        ],
                        "declare": false,
                        "start": 2240,
                        "end": 2252
                      }
                    ],
                    "start": 2230,
                    "end": 2266
                  },
                  "id": null,
                  "generator": false,
                  "start": 2224,
                  "end": 2266
                },
                "definite": false,
                "start": 2220,
                "end": 2266
              }
            ],
            "declare": false,
            "start": 2214,
            "end": 2267
          }
        ],
        "start": 2068,
        "end": 2269
      },
      "expression": false,
      "start": 2053,
      "end": 2269
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 2269
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
    "value": "cond",
    "start": 12,
    "end": 16
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 16,
    "end": 17
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 18,
    "end": 25
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 25,
    "end": 26
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 85,
    "end": 93
  },
  {
    "type": "Identifier",
    "value": "f1",
    "start": 94,
    "end": 96
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 96,
    "end": 97
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 97,
    "end": 98
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 99,
    "end": 100
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 105,
    "end": 108
  },
  {
    "type": "Identifier",
    "value": "x",
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
    "type": "Keyword",
    "value": "if",
    "start": 116,
    "end": 118
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 119,
    "end": 120
  },
  {
    "type": "Identifier",
    "value": "cond",
    "start": 120,
    "end": 124
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 124,
    "end": 125
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 126,
    "end": 127
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 136,
    "end": 137
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 138,
    "end": 139
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 140,
    "end": 141
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 141,
    "end": 142
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 147,
    "end": 148
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 153,
    "end": 155
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 156,
    "end": 157
  },
  {
    "type": "Identifier",
    "value": "cond",
    "start": 157,
    "end": 161
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 161,
    "end": 162
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 163,
    "end": 164
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 173,
    "end": 174
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 175,
    "end": 176
  },
  {
    "type": "String",
    "value": "\"hello\"",
    "start": 177,
    "end": 184
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 184,
    "end": 185
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 190,
    "end": 191
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 196,
    "end": 201
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 202,
    "end": 203
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 204,
    "end": 205
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 206,
    "end": 207
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 207,
    "end": 208
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 241,
    "end": 242
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 313,
    "end": 321
  },
  {
    "type": "Identifier",
    "value": "f2",
    "start": 322,
    "end": 324
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 324,
    "end": 325
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 325,
    "end": 326
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 327,
    "end": 328
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 333,
    "end": 336
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 337,
    "end": 338
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 339,
    "end": 340
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 341,
    "end": 350
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 350,
    "end": 351
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 356,
    "end": 358
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 359,
    "end": 360
  },
  {
    "type": "Identifier",
    "value": "cond",
    "start": 360,
    "end": 364
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 364,
    "end": 365
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 366,
    "end": 367
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 376,
    "end": 377
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 378,
    "end": 379
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 380,
    "end": 381
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 381,
    "end": 382
  },
  {
    "type": "Punctuator",
    "value": "}",
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
    "value": "cond",
    "start": 397,
    "end": 401
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 401,
    "end": 402
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 403,
    "end": 404
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 413,
    "end": 414
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 415,
    "end": 416
  },
  {
    "type": "String",
    "value": "\"hello\"",
    "start": 417,
    "end": 424
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 424,
    "end": 425
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 430,
    "end": 431
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 436,
    "end": 441
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 442,
    "end": 443
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 444,
    "end": 445
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 446,
    "end": 447
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 447,
    "end": 448
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 481,
    "end": 482
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 548,
    "end": 556
  },
  {
    "type": "Identifier",
    "value": "f3",
    "start": 557,
    "end": 559
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 559,
    "end": 560
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 560,
    "end": 561
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 562,
    "end": 563
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 568,
    "end": 571
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 572,
    "end": 573
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 574,
    "end": 575
  },
  {
    "type": "Null",
    "value": "null",
    "start": 576,
    "end": 580
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 580,
    "end": 581
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 586,
    "end": 588
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 589,
    "end": 590
  },
  {
    "type": "Identifier",
    "value": "cond",
    "start": 590,
    "end": 594
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 594,
    "end": 595
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 596,
    "end": 597
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 606,
    "end": 607
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 608,
    "end": 609
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 610,
    "end": 611
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 611,
    "end": 612
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 617,
    "end": 618
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 623,
    "end": 625
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 626,
    "end": 627
  },
  {
    "type": "Identifier",
    "value": "cond",
    "start": 627,
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
    "value": "{",
    "start": 633,
    "end": 634
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 643,
    "end": 644
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 645,
    "end": 646
  },
  {
    "type": "String",
    "value": "\"hello\"",
    "start": 647,
    "end": 654
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 654,
    "end": 655
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 660,
    "end": 661
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 666,
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
    "value": "=",
    "start": 674,
    "end": 675
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 676,
    "end": 677
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 677,
    "end": 678
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 706,
    "end": 707
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 755,
    "end": 763
  },
  {
    "type": "Identifier",
    "value": "f4",
    "start": 764,
    "end": 766
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 766,
    "end": 767
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 767,
    "end": 768
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 769,
    "end": 770
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 775,
    "end": 778
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 779,
    "end": 780
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 780,
    "end": 781
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 782,
    "end": 785
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 785,
    "end": 786
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 791,
    "end": 793
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 794,
    "end": 795
  },
  {
    "type": "Identifier",
    "value": "cond",
    "start": 795,
    "end": 799
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 799,
    "end": 800
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 801,
    "end": 802
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 811,
    "end": 812
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 813,
    "end": 814
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 815,
    "end": 816
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 816,
    "end": 817
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 822,
    "end": 823
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 828,
    "end": 830
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 831,
    "end": 832
  },
  {
    "type": "Identifier",
    "value": "cond",
    "start": 832,
    "end": 836
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 836,
    "end": 837
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 838,
    "end": 839
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 848,
    "end": 849
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 850,
    "end": 851
  },
  {
    "type": "String",
    "value": "\"hello\"",
    "start": 852,
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
    "value": "const",
    "start": 871,
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
    "value": "=",
    "start": 879,
    "end": 880
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 881,
    "end": 882
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 882,
    "end": 883
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 892,
    "end": 893
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 952,
    "end": 960
  },
  {
    "type": "Identifier",
    "value": "f5",
    "start": 961,
    "end": 963
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 963,
    "end": 964
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 964,
    "end": 965
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 966,
    "end": 967
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 972,
    "end": 975
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 976,
    "end": 977
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 977,
    "end": 978
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 983,
    "end": 985
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 986,
    "end": 987
  },
  {
    "type": "Identifier",
    "value": "cond",
    "start": 987,
    "end": 991
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 991,
    "end": 992
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 993,
    "end": 994
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1003,
    "end": 1004
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1005,
    "end": 1006
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 1007,
    "end": 1008
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1008,
    "end": 1009
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1014,
    "end": 1015
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 1020,
    "end": 1022
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1023,
    "end": 1024
  },
  {
    "type": "Identifier",
    "value": "cond",
    "start": 1024,
    "end": 1028
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1028,
    "end": 1029
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1030,
    "end": 1031
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1040,
    "end": 1041
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1042,
    "end": 1043
  },
  {
    "type": "String",
    "value": "\"hello\"",
    "start": 1044,
    "end": 1051
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1051,
    "end": 1052
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1057,
    "end": 1058
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 1063,
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
    "value": "=",
    "start": 1071,
    "end": 1072
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1073,
    "end": 1074
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1074,
    "end": 1075
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1108,
    "end": 1109
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1180,
    "end": 1188
  },
  {
    "type": "Identifier",
    "value": "f6",
    "start": 1189,
    "end": 1191
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1191,
    "end": 1192
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1192,
    "end": 1193
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1194,
    "end": 1195
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1200,
    "end": 1203
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1204,
    "end": 1205
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1206,
    "end": 1207
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 1208,
    "end": 1217
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1217,
    "end": 1218
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 1223,
    "end": 1225
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1226,
    "end": 1227
  },
  {
    "type": "Identifier",
    "value": "cond",
    "start": 1227,
    "end": 1231
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1231,
    "end": 1232
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1233,
    "end": 1234
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1243,
    "end": 1244
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1245,
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
    "value": ";",
    "start": 1248,
    "end": 1249
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1254,
    "end": 1255
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 1260,
    "end": 1262
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1263,
    "end": 1264
  },
  {
    "type": "Identifier",
    "value": "cond",
    "start": 1264,
    "end": 1268
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1268,
    "end": 1269
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1270,
    "end": 1271
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1280,
    "end": 1281
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1282,
    "end": 1283
  },
  {
    "type": "String",
    "value": "\"hello\"",
    "start": 1284,
    "end": 1291
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1291,
    "end": 1292
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1297,
    "end": 1298
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 1303,
    "end": 1308
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 1309,
    "end": 1310
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1311,
    "end": 1312
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1313,
    "end": 1314
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1314,
    "end": 1315
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1348,
    "end": 1349
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1415,
    "end": 1423
  },
  {
    "type": "Identifier",
    "value": "f7",
    "start": 1424,
    "end": 1426
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1426,
    "end": 1427
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1427,
    "end": 1428
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1429,
    "end": 1430
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1435,
    "end": 1438
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1439,
    "end": 1440
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1441,
    "end": 1442
  },
  {
    "type": "Null",
    "value": "null",
    "start": 1443,
    "end": 1447
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1447,
    "end": 1448
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 1453,
    "end": 1455
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1456,
    "end": 1457
  },
  {
    "type": "Identifier",
    "value": "cond",
    "start": 1457,
    "end": 1461
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1461,
    "end": 1462
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1463,
    "end": 1464
  },
  {
    "type": "Identifier",
    "value": "x",
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
    "type": "Numeric",
    "value": "1",
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
    "start": 1484,
    "end": 1485
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 1490,
    "end": 1492
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1493,
    "end": 1494
  },
  {
    "type": "Identifier",
    "value": "cond",
    "start": 1494,
    "end": 1498
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1498,
    "end": 1499
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1500,
    "end": 1501
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1510,
    "end": 1511
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1512,
    "end": 1513
  },
  {
    "type": "String",
    "value": "\"hello\"",
    "start": 1514,
    "end": 1521
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1521,
    "end": 1522
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1527,
    "end": 1528
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 1533,
    "end": 1538
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 1539,
    "end": 1540
  },
  {
    "type": "Punctuator",
    "value": "=",
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
    "value": ";",
    "start": 1544,
    "end": 1545
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1573,
    "end": 1574
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1622,
    "end": 1630
  },
  {
    "type": "Identifier",
    "value": "f8",
    "start": 1631,
    "end": 1633
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1633,
    "end": 1634
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1634,
    "end": 1635
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1636,
    "end": 1637
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1642,
    "end": 1645
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1646,
    "end": 1647
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1647,
    "end": 1648
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 1649,
    "end": 1652
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1652,
    "end": 1653
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 1658,
    "end": 1660
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1661,
    "end": 1662
  },
  {
    "type": "Identifier",
    "value": "cond",
    "start": 1662,
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
    "type": "Identifier",
    "value": "x",
    "start": 1678,
    "end": 1679
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1680,
    "end": 1681
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 1682,
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
    "value": "cond",
    "start": 1699,
    "end": 1703
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1703,
    "end": 1704
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1705,
    "end": 1706
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1715,
    "end": 1716
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1717,
    "end": 1718
  },
  {
    "type": "String",
    "value": "\"hello\"",
    "start": 1719,
    "end": 1726
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1726,
    "end": 1727
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1732,
    "end": 1733
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 1738,
    "end": 1743
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 1744,
    "end": 1745
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1746,
    "end": 1747
  },
  {
    "type": "Identifier",
    "value": "x",
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
    "start": 1759,
    "end": 1760
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1801,
    "end": 1809
  },
  {
    "type": "Identifier",
    "value": "f9",
    "start": 1810,
    "end": 1812
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1812,
    "end": 1813
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1813,
    "end": 1814
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1815,
    "end": 1816
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 1821,
    "end": 1824
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1825,
    "end": 1826
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1826,
    "end": 1827
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 1832,
    "end": 1834
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1835,
    "end": 1836
  },
  {
    "type": "Identifier",
    "value": "cond",
    "start": 1836,
    "end": 1840
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1840,
    "end": 1841
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1842,
    "end": 1843
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1852,
    "end": 1853
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1854,
    "end": 1855
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 1856,
    "end": 1857
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1857,
    "end": 1858
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1863,
    "end": 1864
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 1869,
    "end": 1871
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1872,
    "end": 1873
  },
  {
    "type": "Identifier",
    "value": "cond",
    "start": 1873,
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
    "value": "{",
    "start": 1879,
    "end": 1880
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1889,
    "end": 1890
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1891,
    "end": 1892
  },
  {
    "type": "String",
    "value": "\"hello\"",
    "start": 1893,
    "end": 1900
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1900,
    "end": 1901
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1906,
    "end": 1907
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
    "type": "Identifier",
    "value": "x",
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
    "type": "Keyword",
    "value": "function",
    "start": 1961,
    "end": 1969
  },
  {
    "type": "Identifier",
    "value": "f",
    "start": 1970,
    "end": 1971
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1971,
    "end": 1972
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1972,
    "end": 1973
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1974,
    "end": 1975
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 1984,
    "end": 1989
  },
  {
    "type": "Identifier",
    "value": "z",
    "start": 1990,
    "end": 1991
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1992,
    "end": 1993
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1994,
    "end": 1995
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1995,
    "end": 1996
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2009,
    "end": 2010
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2011,
    "end": 2012
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 2053,
    "end": 2061
  },
  {
    "type": "Identifier",
    "value": "f10",
    "start": 2062,
    "end": 2065
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2065,
    "end": 2066
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2066,
    "end": 2067
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2068,
    "end": 2069
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 2074,
    "end": 2077
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2078,
    "end": 2079
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2079,
    "end": 2080
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 2085,
    "end": 2087
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2088,
    "end": 2089
  },
  {
    "type": "Identifier",
    "value": "cond",
    "start": 2089,
    "end": 2093
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2093,
    "end": 2094
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2095,
    "end": 2096
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2105,
    "end": 2106
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2107,
    "end": 2108
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 2109,
    "end": 2110
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2110,
    "end": 2111
  },
  {
    "type": "Punctuator",
    "value": "}",
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
    "value": "cond",
    "start": 2126,
    "end": 2130
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2130,
    "end": 2131
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2132,
    "end": 2133
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2142,
    "end": 2143
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2144,
    "end": 2145
  },
  {
    "type": "String",
    "value": "\"hello\"",
    "start": 2146,
    "end": 2153
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2153,
    "end": 2154
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2159,
    "end": 2160
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 2165,
    "end": 2170
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 2171,
    "end": 2172
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2173,
    "end": 2174
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2175,
    "end": 2176
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2176,
    "end": 2177
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 2214,
    "end": 2219
  },
  {
    "type": "Identifier",
    "value": "f",
    "start": 2220,
    "end": 2221
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2222,
    "end": 2223
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2224,
    "end": 2225
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2225,
    "end": 2226
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 2227,
    "end": 2229
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2230,
    "end": 2231
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 2240,
    "end": 2245
  },
  {
    "type": "Identifier",
    "value": "z",
    "start": 2246,
    "end": 2247
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2248,
    "end": 2249
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2250,
    "end": 2251
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2251,
    "end": 2252
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2265,
    "end": 2266
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2266,
    "end": 2267
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2268,
    "end": 2269
  }
]
```
