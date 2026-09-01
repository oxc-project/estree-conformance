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
        "name": "forOfStatement0",
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
            "type": "ForOfStatement",
            "await": false,
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 75,
              "end": 76
            },
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "y",
              "optional": false,
              "typeAnnotation": null,
              "start": 80,
              "end": 81
            },
            "body": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "z",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 85,
                    "end": 86
                  },
                  "directive": null,
                  "start": 85,
                  "end": 87
                }
              ],
              "start": 83,
              "end": 89
            },
            "start": 70,
            "end": 89
          }
        ],
        "start": 64,
        "end": 91
      },
      "expression": false,
      "start": 31,
      "end": 91
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "forOfStatement1",
        "optional": false,
        "typeAnnotation": null,
        "start": 108,
        "end": 123
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
            "type": "ForOfStatement",
            "await": false,
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 137,
              "end": 138
            },
            "right": {
              "type": "AwaitExpression",
              "argument": {
                "type": "Identifier",
                "decorators": [],
                "name": "y",
                "optional": false,
                "typeAnnotation": null,
                "start": 148,
                "end": 149
              },
              "start": 142,
              "end": 149
            },
            "body": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "z",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 153,
                    "end": 154
                  },
                  "directive": null,
                  "start": 153,
                  "end": 155
                }
              ],
              "start": 151,
              "end": 157
            },
            "start": 132,
            "end": 157
          }
        ],
        "start": 126,
        "end": 159
      },
      "expression": false,
      "start": 93,
      "end": 159
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "forOfStatement2",
        "optional": false,
        "typeAnnotation": null,
        "start": 176,
        "end": 191
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
            "type": "ForOfStatement",
            "await": false,
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 205,
              "end": 206
            },
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "y",
              "optional": false,
              "typeAnnotation": null,
              "start": 210,
              "end": 211
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
                      "name": "z",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 221,
                      "end": 222
                    },
                    "start": 215,
                    "end": 222
                  },
                  "directive": null,
                  "start": 215,
                  "end": 223
                }
              ],
              "start": 213,
              "end": 225
            },
            "start": 200,
            "end": 225
          }
        ],
        "start": 194,
        "end": 227
      },
      "expression": false,
      "start": 161,
      "end": 227
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "forOfStatement3",
        "optional": false,
        "typeAnnotation": null,
        "start": 244,
        "end": 259
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
            "type": "ForOfStatement",
            "await": false,
            "left": {
              "type": "MemberExpression",
              "object": {
                "type": "AwaitExpression",
                "argument": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 280,
                  "end": 281
                },
                "start": 274,
                "end": 281
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null,
                "start": 283,
                "end": 284
              },
              "optional": false,
              "computed": false,
              "start": 273,
              "end": 284
            },
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "y",
              "optional": false,
              "typeAnnotation": null,
              "start": 288,
              "end": 289
            },
            "body": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "z",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 293,
                    "end": 294
                  },
                  "directive": null,
                  "start": 293,
                  "end": 295
                }
              ],
              "start": 291,
              "end": 297
            },
            "start": 268,
            "end": 297
          }
        ],
        "start": 262,
        "end": 299
      },
      "expression": false,
      "start": 229,
      "end": 299
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "forOfStatement4",
        "optional": false,
        "typeAnnotation": null,
        "start": 316,
        "end": 331
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
            "type": "ForOfStatement",
            "await": false,
            "left": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 345,
                "end": 346
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null,
                "start": 347,
                "end": 348
              },
              "optional": false,
              "computed": false,
              "start": 345,
              "end": 348
            },
            "right": {
              "type": "AwaitExpression",
              "argument": {
                "type": "Identifier",
                "decorators": [],
                "name": "y",
                "optional": false,
                "typeAnnotation": null,
                "start": 358,
                "end": 359
              },
              "start": 352,
              "end": 359
            },
            "body": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "z",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 363,
                    "end": 364
                  },
                  "directive": null,
                  "start": 363,
                  "end": 365
                }
              ],
              "start": 361,
              "end": 367
            },
            "start": 340,
            "end": 367
          }
        ],
        "start": 334,
        "end": 369
      },
      "expression": false,
      "start": 301,
      "end": 369
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "forOfStatement5",
        "optional": false,
        "typeAnnotation": null,
        "start": 386,
        "end": 401
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
            "type": "ForOfStatement",
            "await": false,
            "left": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 415,
                "end": 416
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null,
                "start": 417,
                "end": 418
              },
              "optional": false,
              "computed": false,
              "start": 415,
              "end": 418
            },
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "y",
              "optional": false,
              "typeAnnotation": null,
              "start": 422,
              "end": 423
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
                      "name": "z",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 433,
                      "end": 434
                    },
                    "start": 427,
                    "end": 434
                  },
                  "directive": null,
                  "start": 427,
                  "end": 435
                }
              ],
              "start": 425,
              "end": 437
            },
            "start": 410,
            "end": 437
          }
        ],
        "start": 404,
        "end": 439
      },
      "expression": false,
      "start": 371,
      "end": 439
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "forOfStatement6",
        "optional": false,
        "typeAnnotation": null,
        "start": 456,
        "end": 471
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
            "type": "ForOfStatement",
            "await": false,
            "left": {
              "type": "VariableDeclaration",
              "kind": "var",
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "id": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "b",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 489,
                    "end": 490
                  },
                  "init": null,
                  "definite": false,
                  "start": 489,
                  "end": 490
                }
              ],
              "declare": false,
              "start": 485,
              "end": 490
            },
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "y",
              "optional": false,
              "typeAnnotation": null,
              "start": 494,
              "end": 495
            },
            "body": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "z",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 499,
                    "end": 500
                  },
                  "directive": null,
                  "start": 499,
                  "end": 501
                }
              ],
              "start": 497,
              "end": 503
            },
            "start": 480,
            "end": 503
          }
        ],
        "start": 474,
        "end": 505
      },
      "expression": false,
      "start": 441,
      "end": 505
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "forOfStatement7",
        "optional": false,
        "typeAnnotation": null,
        "start": 522,
        "end": 537
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
            "type": "ForOfStatement",
            "await": false,
            "left": {
              "type": "VariableDeclaration",
              "kind": "var",
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "id": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "c",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 555,
                    "end": 556
                  },
                  "init": null,
                  "definite": false,
                  "start": 555,
                  "end": 556
                }
              ],
              "declare": false,
              "start": 551,
              "end": 556
            },
            "right": {
              "type": "AwaitExpression",
              "argument": {
                "type": "Identifier",
                "decorators": [],
                "name": "y",
                "optional": false,
                "typeAnnotation": null,
                "start": 566,
                "end": 567
              },
              "start": 560,
              "end": 567
            },
            "body": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "z",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 571,
                    "end": 572
                  },
                  "directive": null,
                  "start": 571,
                  "end": 573
                }
              ],
              "start": 569,
              "end": 575
            },
            "start": 546,
            "end": 575
          }
        ],
        "start": 540,
        "end": 577
      },
      "expression": false,
      "start": 507,
      "end": 577
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "forOfStatement8",
        "optional": false,
        "typeAnnotation": null,
        "start": 594,
        "end": 609
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
            "type": "ForOfStatement",
            "await": false,
            "left": {
              "type": "VariableDeclaration",
              "kind": "var",
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "id": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "d",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 627,
                    "end": 628
                  },
                  "init": null,
                  "definite": false,
                  "start": 627,
                  "end": 628
                }
              ],
              "declare": false,
              "start": 623,
              "end": 628
            },
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "y",
              "optional": false,
              "typeAnnotation": null,
              "start": 632,
              "end": 633
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
                      "name": "z",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 643,
                      "end": 644
                    },
                    "start": 637,
                    "end": 644
                  },
                  "directive": null,
                  "start": 637,
                  "end": 645
                }
              ],
              "start": 635,
              "end": 647
            },
            "start": 618,
            "end": 647
          }
        ],
        "start": 612,
        "end": 649
      },
      "expression": false,
      "start": 579,
      "end": 649
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "forOfStatement9",
        "optional": false,
        "typeAnnotation": null,
        "start": 666,
        "end": 681
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
            "type": "ForOfStatement",
            "await": false,
            "left": {
              "type": "ArrayPattern",
              "decorators": [],
              "elements": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 696,
                  "end": 697
                }
              ],
              "optional": false,
              "typeAnnotation": null,
              "start": 695,
              "end": 698
            },
            "right": {
              "type": "AwaitExpression",
              "argument": {
                "type": "Identifier",
                "decorators": [],
                "name": "y",
                "optional": false,
                "typeAnnotation": null,
                "start": 708,
                "end": 709
              },
              "start": 702,
              "end": 709
            },
            "body": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "z",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 713,
                    "end": 714
                  },
                  "directive": null,
                  "start": 713,
                  "end": 715
                }
              ],
              "start": 711,
              "end": 717
            },
            "start": 690,
            "end": 717
          }
        ],
        "start": 684,
        "end": 719
      },
      "expression": false,
      "start": 651,
      "end": 719
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "forOfStatement10",
        "optional": false,
        "typeAnnotation": null,
        "start": 736,
        "end": 752
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
            "type": "ForOfStatement",
            "await": false,
            "left": {
              "type": "ArrayPattern",
              "decorators": [],
              "elements": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 767,
                  "end": 768
                }
              ],
              "optional": false,
              "typeAnnotation": null,
              "start": 766,
              "end": 769
            },
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "y",
              "optional": false,
              "typeAnnotation": null,
              "start": 773,
              "end": 774
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
                      "name": "z",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 784,
                      "end": 785
                    },
                    "start": 778,
                    "end": 785
                  },
                  "directive": null,
                  "start": 778,
                  "end": 786
                }
              ],
              "start": 776,
              "end": 788
            },
            "start": 761,
            "end": 788
          }
        ],
        "start": 755,
        "end": 790
      },
      "expression": false,
      "start": 721,
      "end": 790
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "forOfStatement11",
        "optional": false,
        "typeAnnotation": null,
        "start": 807,
        "end": 823
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
            "type": "ForOfStatement",
            "await": false,
            "left": {
              "type": "ArrayPattern",
              "decorators": [],
              "elements": [
                {
                  "type": "AssignmentPattern",
                  "decorators": [],
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 838,
                    "end": 839
                  },
                  "right": {
                    "type": "AwaitExpression",
                    "argument": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "a",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 848,
                      "end": 849
                    },
                    "start": 842,
                    "end": 849
                  },
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 838,
                  "end": 849
                }
              ],
              "optional": false,
              "typeAnnotation": null,
              "start": 837,
              "end": 850
            },
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "y",
              "optional": false,
              "typeAnnotation": null,
              "start": 854,
              "end": 855
            },
            "body": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "z",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 859,
                    "end": 860
                  },
                  "directive": null,
                  "start": 859,
                  "end": 861
                }
              ],
              "start": 857,
              "end": 863
            },
            "start": 832,
            "end": 863
          }
        ],
        "start": 826,
        "end": 865
      },
      "expression": false,
      "start": 792,
      "end": 865
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "forOfStatement12",
        "optional": false,
        "typeAnnotation": null,
        "start": 882,
        "end": 898
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
            "type": "ForOfStatement",
            "await": false,
            "left": {
              "type": "ArrayPattern",
              "decorators": [],
              "elements": [
                {
                  "type": "AssignmentPattern",
                  "decorators": [],
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 913,
                    "end": 914
                  },
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 917,
                    "end": 918
                  },
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 913,
                  "end": 918
                }
              ],
              "optional": false,
              "typeAnnotation": null,
              "start": 912,
              "end": 919
            },
            "right": {
              "type": "AwaitExpression",
              "argument": {
                "type": "Identifier",
                "decorators": [],
                "name": "y",
                "optional": false,
                "typeAnnotation": null,
                "start": 929,
                "end": 930
              },
              "start": 923,
              "end": 930
            },
            "body": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "z",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 934,
                    "end": 935
                  },
                  "directive": null,
                  "start": 934,
                  "end": 936
                }
              ],
              "start": 932,
              "end": 938
            },
            "start": 907,
            "end": 938
          }
        ],
        "start": 901,
        "end": 940
      },
      "expression": false,
      "start": 867,
      "end": 940
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "forOfStatement13",
        "optional": false,
        "typeAnnotation": null,
        "start": 957,
        "end": 973
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
            "type": "ForOfStatement",
            "await": false,
            "left": {
              "type": "ArrayPattern",
              "decorators": [],
              "elements": [
                {
                  "type": "AssignmentPattern",
                  "decorators": [],
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 988,
                    "end": 989
                  },
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 992,
                    "end": 993
                  },
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 988,
                  "end": 993
                }
              ],
              "optional": false,
              "typeAnnotation": null,
              "start": 987,
              "end": 994
            },
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "y",
              "optional": false,
              "typeAnnotation": null,
              "start": 998,
              "end": 999
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
                      "name": "z",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1009,
                      "end": 1010
                    },
                    "start": 1003,
                    "end": 1010
                  },
                  "directive": null,
                  "start": 1003,
                  "end": 1011
                }
              ],
              "start": 1001,
              "end": 1013
            },
            "start": 982,
            "end": 1013
          }
        ],
        "start": 976,
        "end": 1015
      },
      "expression": false,
      "start": 942,
      "end": 1015
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "forOfStatement14",
        "optional": false,
        "typeAnnotation": null,
        "start": 1032,
        "end": 1048
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
            "type": "ForOfStatement",
            "await": false,
            "left": {
              "type": "ObjectPattern",
              "decorators": [],
              "properties": [
                {
                  "type": "Property",
                  "kind": "init",
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1064,
                    "end": 1065
                  },
                  "value": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1064,
                    "end": 1065
                  },
                  "method": false,
                  "shorthand": true,
                  "computed": false,
                  "optional": false,
                  "start": 1064,
                  "end": 1065
                }
              ],
              "optional": false,
              "typeAnnotation": null,
              "start": 1062,
              "end": 1067
            },
            "right": {
              "type": "AwaitExpression",
              "argument": {
                "type": "Identifier",
                "decorators": [],
                "name": "y",
                "optional": false,
                "typeAnnotation": null,
                "start": 1077,
                "end": 1078
              },
              "start": 1071,
              "end": 1078
            },
            "body": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "z",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1082,
                    "end": 1083
                  },
                  "directive": null,
                  "start": 1082,
                  "end": 1084
                }
              ],
              "start": 1080,
              "end": 1086
            },
            "start": 1057,
            "end": 1086
          }
        ],
        "start": 1051,
        "end": 1088
      },
      "expression": false,
      "start": 1017,
      "end": 1088
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "forOfStatement15",
        "optional": false,
        "typeAnnotation": null,
        "start": 1105,
        "end": 1121
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
            "type": "ForOfStatement",
            "await": false,
            "left": {
              "type": "ObjectPattern",
              "decorators": [],
              "properties": [
                {
                  "type": "Property",
                  "kind": "init",
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1137,
                    "end": 1138
                  },
                  "value": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1137,
                    "end": 1138
                  },
                  "method": false,
                  "shorthand": true,
                  "computed": false,
                  "optional": false,
                  "start": 1137,
                  "end": 1138
                }
              ],
              "optional": false,
              "typeAnnotation": null,
              "start": 1135,
              "end": 1140
            },
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "y",
              "optional": false,
              "typeAnnotation": null,
              "start": 1144,
              "end": 1145
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
                      "name": "z",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1155,
                      "end": 1156
                    },
                    "start": 1149,
                    "end": 1156
                  },
                  "directive": null,
                  "start": 1149,
                  "end": 1157
                }
              ],
              "start": 1147,
              "end": 1159
            },
            "start": 1130,
            "end": 1159
          }
        ],
        "start": 1124,
        "end": 1161
      },
      "expression": false,
      "start": 1090,
      "end": 1161
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "forOfStatement16",
        "optional": false,
        "typeAnnotation": null,
        "start": 1178,
        "end": 1194
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
            "type": "ForOfStatement",
            "await": false,
            "left": {
              "type": "ObjectPattern",
              "decorators": [],
              "properties": [
                {
                  "type": "Property",
                  "kind": "init",
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1210,
                    "end": 1211
                  },
                  "value": {
                    "type": "AssignmentPattern",
                    "decorators": [],
                    "left": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1210,
                      "end": 1211
                    },
                    "right": {
                      "type": "AwaitExpression",
                      "argument": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "a",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1220,
                        "end": 1221
                      },
                      "start": 1214,
                      "end": 1221
                    },
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1210,
                    "end": 1221
                  },
                  "method": false,
                  "shorthand": true,
                  "computed": false,
                  "optional": false,
                  "start": 1210,
                  "end": 1221
                }
              ],
              "optional": false,
              "typeAnnotation": null,
              "start": 1208,
              "end": 1223
            },
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "y",
              "optional": false,
              "typeAnnotation": null,
              "start": 1227,
              "end": 1228
            },
            "body": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "z",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1232,
                    "end": 1233
                  },
                  "directive": null,
                  "start": 1232,
                  "end": 1234
                }
              ],
              "start": 1230,
              "end": 1236
            },
            "start": 1203,
            "end": 1236
          }
        ],
        "start": 1197,
        "end": 1238
      },
      "expression": false,
      "start": 1163,
      "end": 1238
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "forOfStatement17",
        "optional": false,
        "typeAnnotation": null,
        "start": 1255,
        "end": 1271
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
            "type": "ForOfStatement",
            "await": false,
            "left": {
              "type": "ObjectPattern",
              "decorators": [],
              "properties": [
                {
                  "type": "Property",
                  "kind": "init",
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1287,
                    "end": 1288
                  },
                  "value": {
                    "type": "AssignmentPattern",
                    "decorators": [],
                    "left": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1287,
                      "end": 1288
                    },
                    "right": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "a",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1291,
                      "end": 1292
                    },
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1287,
                    "end": 1292
                  },
                  "method": false,
                  "shorthand": true,
                  "computed": false,
                  "optional": false,
                  "start": 1287,
                  "end": 1292
                }
              ],
              "optional": false,
              "typeAnnotation": null,
              "start": 1285,
              "end": 1294
            },
            "right": {
              "type": "AwaitExpression",
              "argument": {
                "type": "Identifier",
                "decorators": [],
                "name": "y",
                "optional": false,
                "typeAnnotation": null,
                "start": 1304,
                "end": 1305
              },
              "start": 1298,
              "end": 1305
            },
            "body": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "z",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1309,
                    "end": 1310
                  },
                  "directive": null,
                  "start": 1309,
                  "end": 1311
                }
              ],
              "start": 1307,
              "end": 1313
            },
            "start": 1280,
            "end": 1313
          }
        ],
        "start": 1274,
        "end": 1315
      },
      "expression": false,
      "start": 1240,
      "end": 1315
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "forOfStatement18",
        "optional": false,
        "typeAnnotation": null,
        "start": 1332,
        "end": 1348
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
            "type": "ForOfStatement",
            "await": false,
            "left": {
              "type": "ObjectPattern",
              "decorators": [],
              "properties": [
                {
                  "type": "Property",
                  "kind": "init",
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1364,
                    "end": 1365
                  },
                  "value": {
                    "type": "AssignmentPattern",
                    "decorators": [],
                    "left": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1364,
                      "end": 1365
                    },
                    "right": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "a",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1368,
                      "end": 1369
                    },
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1364,
                    "end": 1369
                  },
                  "method": false,
                  "shorthand": true,
                  "computed": false,
                  "optional": false,
                  "start": 1364,
                  "end": 1369
                }
              ],
              "optional": false,
              "typeAnnotation": null,
              "start": 1362,
              "end": 1371
            },
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "y",
              "optional": false,
              "typeAnnotation": null,
              "start": 1375,
              "end": 1376
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
                      "name": "z",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1386,
                      "end": 1387
                    },
                    "start": 1380,
                    "end": 1387
                  },
                  "directive": null,
                  "start": 1380,
                  "end": 1388
                }
              ],
              "start": 1378,
              "end": 1390
            },
            "start": 1357,
            "end": 1390
          }
        ],
        "start": 1351,
        "end": 1392
      },
      "expression": false,
      "start": 1317,
      "end": 1392
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 1392
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
    "value": "forOfStatement0",
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
    "value": "for",
    "start": 70,
    "end": 73
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 74,
    "end": 75
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 75,
    "end": 76
  },
  {
    "type": "Identifier",
    "value": "of",
    "start": 77,
    "end": 79
  },
  {
    "type": "Identifier",
    "value": "y",
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
    "type": "Identifier",
    "value": "z",
    "start": 85,
    "end": 86
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 86,
    "end": 87
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 88,
    "end": 89
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 90,
    "end": 91
  },
  {
    "type": "Identifier",
    "value": "async",
    "start": 93,
    "end": 98
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 99,
    "end": 107
  },
  {
    "type": "Identifier",
    "value": "forOfStatement1",
    "start": 108,
    "end": 123
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 123,
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
    "type": "Keyword",
    "value": "for",
    "start": 132,
    "end": 135
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 136,
    "end": 137
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 137,
    "end": 138
  },
  {
    "type": "Identifier",
    "value": "of",
    "start": 139,
    "end": 141
  },
  {
    "type": "Identifier",
    "value": "await",
    "start": 142,
    "end": 147
  },
  {
    "type": "Identifier",
    "value": "y",
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
    "type": "Identifier",
    "value": "z",
    "start": 153,
    "end": 154
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 154,
    "end": 155
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 156,
    "end": 157
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 158,
    "end": 159
  },
  {
    "type": "Identifier",
    "value": "async",
    "start": 161,
    "end": 166
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 167,
    "end": 175
  },
  {
    "type": "Identifier",
    "value": "forOfStatement2",
    "start": 176,
    "end": 191
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 191,
    "end": 192
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 192,
    "end": 193
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 194,
    "end": 195
  },
  {
    "type": "Keyword",
    "value": "for",
    "start": 200,
    "end": 203
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 204,
    "end": 205
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 205,
    "end": 206
  },
  {
    "type": "Identifier",
    "value": "of",
    "start": 207,
    "end": 209
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 210,
    "end": 211
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 211,
    "end": 212
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 213,
    "end": 214
  },
  {
    "type": "Identifier",
    "value": "await",
    "start": 215,
    "end": 220
  },
  {
    "type": "Identifier",
    "value": "z",
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
    "type": "Punctuator",
    "value": "}",
    "start": 224,
    "end": 225
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 226,
    "end": 227
  },
  {
    "type": "Identifier",
    "value": "async",
    "start": 229,
    "end": 234
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 235,
    "end": 243
  },
  {
    "type": "Identifier",
    "value": "forOfStatement3",
    "start": 244,
    "end": 259
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 259,
    "end": 260
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 260,
    "end": 261
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 262,
    "end": 263
  },
  {
    "type": "Keyword",
    "value": "for",
    "start": 268,
    "end": 271
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 272,
    "end": 273
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 273,
    "end": 274
  },
  {
    "type": "Identifier",
    "value": "await",
    "start": 274,
    "end": 279
  },
  {
    "type": "Identifier",
    "value": "x",
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
    "value": ".",
    "start": 282,
    "end": 283
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 283,
    "end": 284
  },
  {
    "type": "Identifier",
    "value": "of",
    "start": 285,
    "end": 287
  },
  {
    "type": "Identifier",
    "value": "y",
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
    "type": "Identifier",
    "value": "z",
    "start": 293,
    "end": 294
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 294,
    "end": 295
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 296,
    "end": 297
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 298,
    "end": 299
  },
  {
    "type": "Identifier",
    "value": "async",
    "start": 301,
    "end": 306
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 307,
    "end": 315
  },
  {
    "type": "Identifier",
    "value": "forOfStatement4",
    "start": 316,
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
    "value": "for",
    "start": 340,
    "end": 343
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 344,
    "end": 345
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 345,
    "end": 346
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 346,
    "end": 347
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 347,
    "end": 348
  },
  {
    "type": "Identifier",
    "value": "of",
    "start": 349,
    "end": 351
  },
  {
    "type": "Identifier",
    "value": "await",
    "start": 352,
    "end": 357
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 358,
    "end": 359
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 359,
    "end": 360
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 361,
    "end": 362
  },
  {
    "type": "Identifier",
    "value": "z",
    "start": 363,
    "end": 364
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 364,
    "end": 365
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 366,
    "end": 367
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 368,
    "end": 369
  },
  {
    "type": "Identifier",
    "value": "async",
    "start": 371,
    "end": 376
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 377,
    "end": 385
  },
  {
    "type": "Identifier",
    "value": "forOfStatement5",
    "start": 386,
    "end": 401
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 401,
    "end": 402
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 402,
    "end": 403
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 404,
    "end": 405
  },
  {
    "type": "Keyword",
    "value": "for",
    "start": 410,
    "end": 413
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 414,
    "end": 415
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 415,
    "end": 416
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 416,
    "end": 417
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 417,
    "end": 418
  },
  {
    "type": "Identifier",
    "value": "of",
    "start": 419,
    "end": 421
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 422,
    "end": 423
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 423,
    "end": 424
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 425,
    "end": 426
  },
  {
    "type": "Identifier",
    "value": "await",
    "start": 427,
    "end": 432
  },
  {
    "type": "Identifier",
    "value": "z",
    "start": 433,
    "end": 434
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 434,
    "end": 435
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 436,
    "end": 437
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 438,
    "end": 439
  },
  {
    "type": "Identifier",
    "value": "async",
    "start": 441,
    "end": 446
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 447,
    "end": 455
  },
  {
    "type": "Identifier",
    "value": "forOfStatement6",
    "start": 456,
    "end": 471
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 471,
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
    "value": "for",
    "start": 480,
    "end": 483
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 484,
    "end": 485
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 485,
    "end": 488
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 489,
    "end": 490
  },
  {
    "type": "Identifier",
    "value": "of",
    "start": 491,
    "end": 493
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 494,
    "end": 495
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 495,
    "end": 496
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 497,
    "end": 498
  },
  {
    "type": "Identifier",
    "value": "z",
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
    "value": "}",
    "start": 502,
    "end": 503
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 504,
    "end": 505
  },
  {
    "type": "Identifier",
    "value": "async",
    "start": 507,
    "end": 512
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 513,
    "end": 521
  },
  {
    "type": "Identifier",
    "value": "forOfStatement7",
    "start": 522,
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
    "value": "{",
    "start": 540,
    "end": 541
  },
  {
    "type": "Keyword",
    "value": "for",
    "start": 546,
    "end": 549
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 550,
    "end": 551
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 551,
    "end": 554
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 555,
    "end": 556
  },
  {
    "type": "Identifier",
    "value": "of",
    "start": 557,
    "end": 559
  },
  {
    "type": "Identifier",
    "value": "await",
    "start": 560,
    "end": 565
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 566,
    "end": 567
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 567,
    "end": 568
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 569,
    "end": 570
  },
  {
    "type": "Identifier",
    "value": "z",
    "start": 571,
    "end": 572
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 572,
    "end": 573
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 574,
    "end": 575
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 576,
    "end": 577
  },
  {
    "type": "Identifier",
    "value": "async",
    "start": 579,
    "end": 584
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 585,
    "end": 593
  },
  {
    "type": "Identifier",
    "value": "forOfStatement8",
    "start": 594,
    "end": 609
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 609,
    "end": 610
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 610,
    "end": 611
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 612,
    "end": 613
  },
  {
    "type": "Keyword",
    "value": "for",
    "start": 618,
    "end": 621
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 622,
    "end": 623
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 623,
    "end": 626
  },
  {
    "type": "Identifier",
    "value": "d",
    "start": 627,
    "end": 628
  },
  {
    "type": "Identifier",
    "value": "of",
    "start": 629,
    "end": 631
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 632,
    "end": 633
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 633,
    "end": 634
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 635,
    "end": 636
  },
  {
    "type": "Identifier",
    "value": "await",
    "start": 637,
    "end": 642
  },
  {
    "type": "Identifier",
    "value": "z",
    "start": 643,
    "end": 644
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 644,
    "end": 645
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 646,
    "end": 647
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 648,
    "end": 649
  },
  {
    "type": "Identifier",
    "value": "async",
    "start": 651,
    "end": 656
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 657,
    "end": 665
  },
  {
    "type": "Identifier",
    "value": "forOfStatement9",
    "start": 666,
    "end": 681
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 681,
    "end": 682
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 682,
    "end": 683
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 684,
    "end": 685
  },
  {
    "type": "Keyword",
    "value": "for",
    "start": 690,
    "end": 693
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 694,
    "end": 695
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 695,
    "end": 696
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 696,
    "end": 697
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 697,
    "end": 698
  },
  {
    "type": "Identifier",
    "value": "of",
    "start": 699,
    "end": 701
  },
  {
    "type": "Identifier",
    "value": "await",
    "start": 702,
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
    "value": ")",
    "start": 709,
    "end": 710
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 711,
    "end": 712
  },
  {
    "type": "Identifier",
    "value": "z",
    "start": 713,
    "end": 714
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 714,
    "end": 715
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 716,
    "end": 717
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 718,
    "end": 719
  },
  {
    "type": "Identifier",
    "value": "async",
    "start": 721,
    "end": 726
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 727,
    "end": 735
  },
  {
    "type": "Identifier",
    "value": "forOfStatement10",
    "start": 736,
    "end": 752
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 752,
    "end": 753
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 753,
    "end": 754
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 755,
    "end": 756
  },
  {
    "type": "Keyword",
    "value": "for",
    "start": 761,
    "end": 764
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 765,
    "end": 766
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 766,
    "end": 767
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 767,
    "end": 768
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 768,
    "end": 769
  },
  {
    "type": "Identifier",
    "value": "of",
    "start": 770,
    "end": 772
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 773,
    "end": 774
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 774,
    "end": 775
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 776,
    "end": 777
  },
  {
    "type": "Identifier",
    "value": "await",
    "start": 778,
    "end": 783
  },
  {
    "type": "Identifier",
    "value": "z",
    "start": 784,
    "end": 785
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 785,
    "end": 786
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 787,
    "end": 788
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 789,
    "end": 790
  },
  {
    "type": "Identifier",
    "value": "async",
    "start": 792,
    "end": 797
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 798,
    "end": 806
  },
  {
    "type": "Identifier",
    "value": "forOfStatement11",
    "start": 807,
    "end": 823
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 823,
    "end": 824
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 824,
    "end": 825
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 826,
    "end": 827
  },
  {
    "type": "Keyword",
    "value": "for",
    "start": 832,
    "end": 835
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 836,
    "end": 837
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 837,
    "end": 838
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 838,
    "end": 839
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 840,
    "end": 841
  },
  {
    "type": "Identifier",
    "value": "await",
    "start": 842,
    "end": 847
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 848,
    "end": 849
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 849,
    "end": 850
  },
  {
    "type": "Identifier",
    "value": "of",
    "start": 851,
    "end": 853
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 854,
    "end": 855
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 855,
    "end": 856
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 857,
    "end": 858
  },
  {
    "type": "Identifier",
    "value": "z",
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
    "value": "}",
    "start": 862,
    "end": 863
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 864,
    "end": 865
  },
  {
    "type": "Identifier",
    "value": "async",
    "start": 867,
    "end": 872
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 873,
    "end": 881
  },
  {
    "type": "Identifier",
    "value": "forOfStatement12",
    "start": 882,
    "end": 898
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 898,
    "end": 899
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 899,
    "end": 900
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 901,
    "end": 902
  },
  {
    "type": "Keyword",
    "value": "for",
    "start": 907,
    "end": 910
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 911,
    "end": 912
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 912,
    "end": 913
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 913,
    "end": 914
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 915,
    "end": 916
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 917,
    "end": 918
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 918,
    "end": 919
  },
  {
    "type": "Identifier",
    "value": "of",
    "start": 920,
    "end": 922
  },
  {
    "type": "Identifier",
    "value": "await",
    "start": 923,
    "end": 928
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 929,
    "end": 930
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 930,
    "end": 931
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 932,
    "end": 933
  },
  {
    "type": "Identifier",
    "value": "z",
    "start": 934,
    "end": 935
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 935,
    "end": 936
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 937,
    "end": 938
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 939,
    "end": 940
  },
  {
    "type": "Identifier",
    "value": "async",
    "start": 942,
    "end": 947
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 948,
    "end": 956
  },
  {
    "type": "Identifier",
    "value": "forOfStatement13",
    "start": 957,
    "end": 973
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 973,
    "end": 974
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 974,
    "end": 975
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 976,
    "end": 977
  },
  {
    "type": "Keyword",
    "value": "for",
    "start": 982,
    "end": 985
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 986,
    "end": 987
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 987,
    "end": 988
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 988,
    "end": 989
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 990,
    "end": 991
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 992,
    "end": 993
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 993,
    "end": 994
  },
  {
    "type": "Identifier",
    "value": "of",
    "start": 995,
    "end": 997
  },
  {
    "type": "Identifier",
    "value": "y",
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
    "type": "Identifier",
    "value": "await",
    "start": 1003,
    "end": 1008
  },
  {
    "type": "Identifier",
    "value": "z",
    "start": 1009,
    "end": 1010
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1010,
    "end": 1011
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1012,
    "end": 1013
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1014,
    "end": 1015
  },
  {
    "type": "Identifier",
    "value": "async",
    "start": 1017,
    "end": 1022
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1023,
    "end": 1031
  },
  {
    "type": "Identifier",
    "value": "forOfStatement14",
    "start": 1032,
    "end": 1048
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1048,
    "end": 1049
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1049,
    "end": 1050
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1051,
    "end": 1052
  },
  {
    "type": "Keyword",
    "value": "for",
    "start": 1057,
    "end": 1060
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1061,
    "end": 1062
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1062,
    "end": 1063
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1064,
    "end": 1065
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1066,
    "end": 1067
  },
  {
    "type": "Identifier",
    "value": "of",
    "start": 1068,
    "end": 1070
  },
  {
    "type": "Identifier",
    "value": "await",
    "start": 1071,
    "end": 1076
  },
  {
    "type": "Identifier",
    "value": "y",
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
    "type": "Identifier",
    "value": "z",
    "start": 1082,
    "end": 1083
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1083,
    "end": 1084
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1085,
    "end": 1086
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1087,
    "end": 1088
  },
  {
    "type": "Identifier",
    "value": "async",
    "start": 1090,
    "end": 1095
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1096,
    "end": 1104
  },
  {
    "type": "Identifier",
    "value": "forOfStatement15",
    "start": 1105,
    "end": 1121
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1121,
    "end": 1122
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1122,
    "end": 1123
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1124,
    "end": 1125
  },
  {
    "type": "Keyword",
    "value": "for",
    "start": 1130,
    "end": 1133
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1134,
    "end": 1135
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1135,
    "end": 1136
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1137,
    "end": 1138
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1139,
    "end": 1140
  },
  {
    "type": "Identifier",
    "value": "of",
    "start": 1141,
    "end": 1143
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 1144,
    "end": 1145
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1145,
    "end": 1146
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1147,
    "end": 1148
  },
  {
    "type": "Identifier",
    "value": "await",
    "start": 1149,
    "end": 1154
  },
  {
    "type": "Identifier",
    "value": "z",
    "start": 1155,
    "end": 1156
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1156,
    "end": 1157
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1158,
    "end": 1159
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1160,
    "end": 1161
  },
  {
    "type": "Identifier",
    "value": "async",
    "start": 1163,
    "end": 1168
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1169,
    "end": 1177
  },
  {
    "type": "Identifier",
    "value": "forOfStatement16",
    "start": 1178,
    "end": 1194
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1194,
    "end": 1195
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1195,
    "end": 1196
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1197,
    "end": 1198
  },
  {
    "type": "Keyword",
    "value": "for",
    "start": 1203,
    "end": 1206
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1207,
    "end": 1208
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1208,
    "end": 1209
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1210,
    "end": 1211
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1212,
    "end": 1213
  },
  {
    "type": "Identifier",
    "value": "await",
    "start": 1214,
    "end": 1219
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1220,
    "end": 1221
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1222,
    "end": 1223
  },
  {
    "type": "Identifier",
    "value": "of",
    "start": 1224,
    "end": 1226
  },
  {
    "type": "Identifier",
    "value": "y",
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
    "value": "{",
    "start": 1230,
    "end": 1231
  },
  {
    "type": "Identifier",
    "value": "z",
    "start": 1232,
    "end": 1233
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1233,
    "end": 1234
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1235,
    "end": 1236
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1237,
    "end": 1238
  },
  {
    "type": "Identifier",
    "value": "async",
    "start": 1240,
    "end": 1245
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1246,
    "end": 1254
  },
  {
    "type": "Identifier",
    "value": "forOfStatement17",
    "start": 1255,
    "end": 1271
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1271,
    "end": 1272
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1272,
    "end": 1273
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1274,
    "end": 1275
  },
  {
    "type": "Keyword",
    "value": "for",
    "start": 1280,
    "end": 1283
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1284,
    "end": 1285
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1285,
    "end": 1286
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1287,
    "end": 1288
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1289,
    "end": 1290
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1291,
    "end": 1292
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1293,
    "end": 1294
  },
  {
    "type": "Identifier",
    "value": "of",
    "start": 1295,
    "end": 1297
  },
  {
    "type": "Identifier",
    "value": "await",
    "start": 1298,
    "end": 1303
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 1304,
    "end": 1305
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1305,
    "end": 1306
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1307,
    "end": 1308
  },
  {
    "type": "Identifier",
    "value": "z",
    "start": 1309,
    "end": 1310
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1310,
    "end": 1311
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1312,
    "end": 1313
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1314,
    "end": 1315
  },
  {
    "type": "Identifier",
    "value": "async",
    "start": 1317,
    "end": 1322
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1323,
    "end": 1331
  },
  {
    "type": "Identifier",
    "value": "forOfStatement18",
    "start": 1332,
    "end": 1348
  },
  {
    "type": "Punctuator",
    "value": "(",
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
    "value": "{",
    "start": 1351,
    "end": 1352
  },
  {
    "type": "Keyword",
    "value": "for",
    "start": 1357,
    "end": 1360
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1361,
    "end": 1362
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
    "start": 1364,
    "end": 1365
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1366,
    "end": 1367
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1368,
    "end": 1369
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1370,
    "end": 1371
  },
  {
    "type": "Identifier",
    "value": "of",
    "start": 1372,
    "end": 1374
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 1375,
    "end": 1376
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1376,
    "end": 1377
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1378,
    "end": 1379
  },
  {
    "type": "Identifier",
    "value": "await",
    "start": 1380,
    "end": 1385
  },
  {
    "type": "Identifier",
    "value": "z",
    "start": 1386,
    "end": 1387
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1387,
    "end": 1388
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1389,
    "end": 1390
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1391,
    "end": 1392
  }
]
```
