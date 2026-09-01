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
        "name": "binaryPlus0",
        "optional": false,
        "typeAnnotation": null,
        "start": 46,
        "end": 57
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
            "type": "ExpressionStatement",
            "expression": {
              "type": "BinaryExpression",
              "left": {
                "type": "AwaitExpression",
                "argument": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 73,
                  "end": 74
                },
                "start": 67,
                "end": 74
              },
              "operator": "+",
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "y",
                "optional": false,
                "typeAnnotation": null,
                "start": 78,
                "end": 79
              },
              "start": 66,
              "end": 79
            },
            "directive": null,
            "start": 66,
            "end": 80
          }
        ],
        "start": 60,
        "end": 82
      },
      "expression": false,
      "start": 31,
      "end": 82
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "binaryPlus1",
        "optional": false,
        "typeAnnotation": null,
        "start": 99,
        "end": 110
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
            "type": "ExpressionStatement",
            "expression": {
              "type": "BinaryExpression",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 119,
                "end": 120
              },
              "operator": "+",
              "right": {
                "type": "AwaitExpression",
                "argument": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "y",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 129,
                  "end": 130
                },
                "start": 123,
                "end": 130
              },
              "start": 119,
              "end": 130
            },
            "directive": null,
            "start": 119,
            "end": 131
          }
        ],
        "start": 113,
        "end": 133
      },
      "expression": false,
      "start": 84,
      "end": 133
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "binaryLogicalAnd0",
        "optional": false,
        "typeAnnotation": null,
        "start": 150,
        "end": 167
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
            "type": "ExpressionStatement",
            "expression": {
              "type": "LogicalExpression",
              "left": {
                "type": "AwaitExpression",
                "argument": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 183,
                  "end": 184
                },
                "start": 177,
                "end": 184
              },
              "operator": "&&",
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "y",
                "optional": false,
                "typeAnnotation": null,
                "start": 189,
                "end": 190
              },
              "start": 176,
              "end": 190
            },
            "directive": null,
            "start": 176,
            "end": 191
          }
        ],
        "start": 170,
        "end": 193
      },
      "expression": false,
      "start": 135,
      "end": 193
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "binaryLogicalAnd1",
        "optional": false,
        "typeAnnotation": null,
        "start": 210,
        "end": 227
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
            "type": "ExpressionStatement",
            "expression": {
              "type": "LogicalExpression",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 236,
                "end": 237
              },
              "operator": "&&",
              "right": {
                "type": "AwaitExpression",
                "argument": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "y",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 247,
                  "end": 248
                },
                "start": 241,
                "end": 248
              },
              "start": 236,
              "end": 248
            },
            "directive": null,
            "start": 236,
            "end": 249
          }
        ],
        "start": 230,
        "end": 251
      },
      "expression": false,
      "start": 195,
      "end": 251
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "binaryAssignment0",
        "optional": false,
        "typeAnnotation": null,
        "start": 268,
        "end": 285
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
                "start": 294,
                "end": 295
              },
              "right": {
                "type": "AwaitExpression",
                "argument": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "y",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 304,
                  "end": 305
                },
                "start": 298,
                "end": 305
              },
              "start": 294,
              "end": 305
            },
            "directive": null,
            "start": 294,
            "end": 306
          }
        ],
        "start": 288,
        "end": 308
      },
      "expression": false,
      "start": 253,
      "end": 308
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "binaryAssignment1",
        "optional": false,
        "typeAnnotation": null,
        "start": 325,
        "end": 342
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
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 351,
                  "end": 352
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 353,
                  "end": 354
                },
                "optional": false,
                "computed": false,
                "start": 351,
                "end": 354
              },
              "right": {
                "type": "AwaitExpression",
                "argument": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "y",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 363,
                  "end": 364
                },
                "start": 357,
                "end": 364
              },
              "start": 351,
              "end": 364
            },
            "directive": null,
            "start": 351,
            "end": 365
          }
        ],
        "start": 345,
        "end": 367
      },
      "expression": false,
      "start": 310,
      "end": 367
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "binaryAssignment2",
        "optional": false,
        "typeAnnotation": null,
        "start": 384,
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
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "MemberExpression",
                "object": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 410,
                    "end": 411
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 412,
                    "end": 413
                  },
                  "optional": false,
                  "computed": false,
                  "start": 410,
                  "end": 413
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "b",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 414,
                  "end": 415
                },
                "optional": false,
                "computed": false,
                "start": 410,
                "end": 415
              },
              "right": {
                "type": "AwaitExpression",
                "argument": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "y",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 424,
                  "end": 425
                },
                "start": 418,
                "end": 425
              },
              "start": 410,
              "end": 425
            },
            "directive": null,
            "start": 410,
            "end": 426
          }
        ],
        "start": 404,
        "end": 428
      },
      "expression": false,
      "start": 369,
      "end": 428
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "binaryAssignment3",
        "optional": false,
        "typeAnnotation": null,
        "start": 445,
        "end": 462
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
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 471,
                  "end": 472
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "z",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 473,
                  "end": 474
                },
                "optional": false,
                "computed": true,
                "start": 471,
                "end": 475
              },
              "right": {
                "type": "AwaitExpression",
                "argument": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "y",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 484,
                  "end": 485
                },
                "start": 478,
                "end": 485
              },
              "start": 471,
              "end": 485
            },
            "directive": null,
            "start": 471,
            "end": 486
          }
        ],
        "start": 465,
        "end": 488
      },
      "expression": false,
      "start": 430,
      "end": 488
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "binaryAssignment4",
        "optional": false,
        "typeAnnotation": null,
        "start": 505,
        "end": 522
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
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "MemberExpression",
                "object": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 531,
                    "end": 532
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "z",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 533,
                    "end": 534
                  },
                  "optional": false,
                  "computed": true,
                  "start": 531,
                  "end": 535
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "b",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 536,
                  "end": 537
                },
                "optional": false,
                "computed": false,
                "start": 531,
                "end": 537
              },
              "right": {
                "type": "AwaitExpression",
                "argument": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "y",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 546,
                  "end": 547
                },
                "start": 540,
                "end": 547
              },
              "start": 531,
              "end": 547
            },
            "directive": null,
            "start": 531,
            "end": 548
          }
        ],
        "start": 525,
        "end": 550
      },
      "expression": false,
      "start": 490,
      "end": 550
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "binaryAssignment5",
        "optional": false,
        "typeAnnotation": null,
        "start": 567,
        "end": 584
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
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "MemberExpression",
                "object": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 593,
                    "end": 594
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 595,
                    "end": 596
                  },
                  "optional": false,
                  "computed": false,
                  "start": 593,
                  "end": 596
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "z",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 597,
                  "end": 598
                },
                "optional": false,
                "computed": true,
                "start": 593,
                "end": 599
              },
              "right": {
                "type": "AwaitExpression",
                "argument": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "y",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 608,
                  "end": 609
                },
                "start": 602,
                "end": 609
              },
              "start": 593,
              "end": 609
            },
            "directive": null,
            "start": 593,
            "end": 610
          }
        ],
        "start": 587,
        "end": 612
      },
      "expression": false,
      "start": 552,
      "end": 612
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "binaryAssignment6",
        "optional": false,
        "typeAnnotation": null,
        "start": 629,
        "end": 646
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
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
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
                    "start": 662,
                    "end": 663
                  },
                  "start": 656,
                  "end": 663
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 665,
                  "end": 666
                },
                "optional": false,
                "computed": false,
                "start": 655,
                "end": 666
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "y",
                "optional": false,
                "typeAnnotation": null,
                "start": 669,
                "end": 670
              },
              "start": 655,
              "end": 670
            },
            "directive": null,
            "start": 655,
            "end": 671
          }
        ],
        "start": 649,
        "end": 673
      },
      "expression": false,
      "start": 614,
      "end": 673
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "binaryAssignment7",
        "optional": false,
        "typeAnnotation": null,
        "start": 690,
        "end": 707
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
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "MemberExpression",
                "object": {
                  "type": "AwaitExpression",
                  "argument": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 723,
                      "end": 724
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "a",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 725,
                      "end": 726
                    },
                    "optional": false,
                    "computed": false,
                    "start": 723,
                    "end": 726
                  },
                  "start": 717,
                  "end": 726
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "b",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 728,
                  "end": 729
                },
                "optional": false,
                "computed": false,
                "start": 716,
                "end": 729
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "y",
                "optional": false,
                "typeAnnotation": null,
                "start": 732,
                "end": 733
              },
              "start": 716,
              "end": 733
            },
            "directive": null,
            "start": 716,
            "end": 734
          }
        ],
        "start": 710,
        "end": 736
      },
      "expression": false,
      "start": 675,
      "end": 736
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "binaryAssignment8",
        "optional": false,
        "typeAnnotation": null,
        "start": 753,
        "end": 770
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
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
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
                    "start": 786,
                    "end": 787
                  },
                  "start": 780,
                  "end": 787
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "z",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 789,
                  "end": 790
                },
                "optional": false,
                "computed": true,
                "start": 779,
                "end": 791
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "y",
                "optional": false,
                "typeAnnotation": null,
                "start": 794,
                "end": 795
              },
              "start": 779,
              "end": 795
            },
            "directive": null,
            "start": 779,
            "end": 796
          }
        ],
        "start": 773,
        "end": 798
      },
      "expression": false,
      "start": 738,
      "end": 798
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "binaryAssignment9",
        "optional": false,
        "typeAnnotation": null,
        "start": 815,
        "end": 832
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
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 841,
                  "end": 842
                },
                "property": {
                  "type": "AwaitExpression",
                  "argument": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "z",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 849,
                    "end": 850
                  },
                  "start": 843,
                  "end": 850
                },
                "optional": false,
                "computed": true,
                "start": 841,
                "end": 851
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
              "start": 841,
              "end": 855
            },
            "directive": null,
            "start": 841,
            "end": 856
          }
        ],
        "start": 835,
        "end": 858
      },
      "expression": false,
      "start": 800,
      "end": 858
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "binaryAssignment10",
        "optional": false,
        "typeAnnotation": null,
        "start": 875,
        "end": 893
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
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "MemberExpression",
                "object": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 902,
                    "end": 903
                  },
                  "property": {
                    "type": "AwaitExpression",
                    "argument": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "z",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 910,
                      "end": 911
                    },
                    "start": 904,
                    "end": 911
                  },
                  "optional": false,
                  "computed": true,
                  "start": 902,
                  "end": 912
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "b",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 913,
                  "end": 914
                },
                "optional": false,
                "computed": false,
                "start": 902,
                "end": 914
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "y",
                "optional": false,
                "typeAnnotation": null,
                "start": 917,
                "end": 918
              },
              "start": 902,
              "end": 918
            },
            "directive": null,
            "start": 902,
            "end": 919
          }
        ],
        "start": 896,
        "end": 921
      },
      "expression": false,
      "start": 860,
      "end": 921
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "binaryAssignment11",
        "optional": false,
        "typeAnnotation": null,
        "start": 938,
        "end": 956
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
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "MemberExpression",
                "object": {
                  "type": "AwaitExpression",
                  "argument": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 972,
                      "end": 973
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "z",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 974,
                      "end": 975
                    },
                    "optional": false,
                    "computed": true,
                    "start": 972,
                    "end": 976
                  },
                  "start": 966,
                  "end": 976
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "b",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 978,
                  "end": 979
                },
                "optional": false,
                "computed": false,
                "start": 965,
                "end": 979
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "y",
                "optional": false,
                "typeAnnotation": null,
                "start": 982,
                "end": 983
              },
              "start": 965,
              "end": 983
            },
            "directive": null,
            "start": 965,
            "end": 984
          }
        ],
        "start": 959,
        "end": 986
      },
      "expression": false,
      "start": 923,
      "end": 986
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "binaryAssignment12",
        "optional": false,
        "typeAnnotation": null,
        "start": 1003,
        "end": 1021
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
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "MemberExpression",
                "object": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1030,
                    "end": 1031
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1032,
                    "end": 1033
                  },
                  "optional": false,
                  "computed": false,
                  "start": 1030,
                  "end": 1033
                },
                "property": {
                  "type": "AwaitExpression",
                  "argument": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "z",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1040,
                    "end": 1041
                  },
                  "start": 1034,
                  "end": 1041
                },
                "optional": false,
                "computed": true,
                "start": 1030,
                "end": 1042
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "y",
                "optional": false,
                "typeAnnotation": null,
                "start": 1045,
                "end": 1046
              },
              "start": 1030,
              "end": 1046
            },
            "directive": null,
            "start": 1030,
            "end": 1047
          }
        ],
        "start": 1024,
        "end": 1049
      },
      "expression": false,
      "start": 988,
      "end": 1049
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "binaryAssignment13",
        "optional": false,
        "typeAnnotation": null,
        "start": 1066,
        "end": 1084
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
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "MemberExpression",
                "object": {
                  "type": "AwaitExpression",
                  "argument": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1100,
                      "end": 1101
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "a",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1102,
                      "end": 1103
                    },
                    "optional": false,
                    "computed": false,
                    "start": 1100,
                    "end": 1103
                  },
                  "start": 1094,
                  "end": 1103
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "z",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1105,
                  "end": 1106
                },
                "optional": false,
                "computed": true,
                "start": 1093,
                "end": 1107
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "y",
                "optional": false,
                "typeAnnotation": null,
                "start": 1110,
                "end": 1111
              },
              "start": 1093,
              "end": 1111
            },
            "directive": null,
            "start": 1093,
            "end": 1112
          }
        ],
        "start": 1087,
        "end": 1114
      },
      "expression": false,
      "start": 1051,
      "end": 1114
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "binaryCompoundAssignment0",
        "optional": false,
        "typeAnnotation": null,
        "start": 1131,
        "end": 1156
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
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "+=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 1165,
                "end": 1166
              },
              "right": {
                "type": "AwaitExpression",
                "argument": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "y",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1176,
                  "end": 1177
                },
                "start": 1170,
                "end": 1177
              },
              "start": 1165,
              "end": 1177
            },
            "directive": null,
            "start": 1165,
            "end": 1178
          }
        ],
        "start": 1159,
        "end": 1180
      },
      "expression": false,
      "start": 1116,
      "end": 1180
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "binaryCompoundAssignment1",
        "optional": false,
        "typeAnnotation": null,
        "start": 1197,
        "end": 1222
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
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "+=",
              "left": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1231,
                  "end": 1232
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1233,
                  "end": 1234
                },
                "optional": false,
                "computed": false,
                "start": 1231,
                "end": 1234
              },
              "right": {
                "type": "AwaitExpression",
                "argument": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "y",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1244,
                  "end": 1245
                },
                "start": 1238,
                "end": 1245
              },
              "start": 1231,
              "end": 1245
            },
            "directive": null,
            "start": 1231,
            "end": 1246
          }
        ],
        "start": 1225,
        "end": 1248
      },
      "expression": false,
      "start": 1182,
      "end": 1248
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "binaryCompoundAssignment2",
        "optional": false,
        "typeAnnotation": null,
        "start": 1265,
        "end": 1290
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
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "+=",
              "left": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1299,
                  "end": 1300
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1301,
                  "end": 1302
                },
                "optional": false,
                "computed": true,
                "start": 1299,
                "end": 1303
              },
              "right": {
                "type": "AwaitExpression",
                "argument": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "y",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1313,
                  "end": 1314
                },
                "start": 1307,
                "end": 1314
              },
              "start": 1299,
              "end": 1314
            },
            "directive": null,
            "start": 1299,
            "end": 1315
          }
        ],
        "start": 1293,
        "end": 1317
      },
      "expression": false,
      "start": 1250,
      "end": 1317
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "binaryCompoundAssignment3",
        "optional": false,
        "typeAnnotation": null,
        "start": 1334,
        "end": 1359
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
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "+=",
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
                    "start": 1375,
                    "end": 1376
                  },
                  "start": 1369,
                  "end": 1376
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1378,
                  "end": 1379
                },
                "optional": false,
                "computed": false,
                "start": 1368,
                "end": 1379
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "y",
                "optional": false,
                "typeAnnotation": null,
                "start": 1383,
                "end": 1384
              },
              "start": 1368,
              "end": 1384
            },
            "directive": null,
            "start": 1368,
            "end": 1385
          }
        ],
        "start": 1362,
        "end": 1387
      },
      "expression": false,
      "start": 1319,
      "end": 1387
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "binaryCompoundAssignment4",
        "optional": false,
        "typeAnnotation": null,
        "start": 1404,
        "end": 1429
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
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "+=",
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
                    "start": 1445,
                    "end": 1446
                  },
                  "start": 1439,
                  "end": 1446
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1448,
                  "end": 1449
                },
                "optional": false,
                "computed": true,
                "start": 1438,
                "end": 1450
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "y",
                "optional": false,
                "typeAnnotation": null,
                "start": 1454,
                "end": 1455
              },
              "start": 1438,
              "end": 1455
            },
            "directive": null,
            "start": 1438,
            "end": 1456
          }
        ],
        "start": 1432,
        "end": 1458
      },
      "expression": false,
      "start": 1389,
      "end": 1458
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "binaryCompoundAssignment5",
        "optional": false,
        "typeAnnotation": null,
        "start": 1475,
        "end": 1500
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
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "+=",
              "left": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1509,
                  "end": 1510
                },
                "property": {
                  "type": "AwaitExpression",
                  "argument": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1517,
                    "end": 1518
                  },
                  "start": 1511,
                  "end": 1518
                },
                "optional": false,
                "computed": true,
                "start": 1509,
                "end": 1519
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "y",
                "optional": false,
                "typeAnnotation": null,
                "start": 1523,
                "end": 1524
              },
              "start": 1509,
              "end": 1524
            },
            "directive": null,
            "start": 1509,
            "end": 1525
          }
        ],
        "start": 1503,
        "end": 1527
      },
      "expression": false,
      "start": 1460,
      "end": 1527
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "binaryCompoundAssignment6",
        "optional": false,
        "typeAnnotation": null,
        "start": 1544,
        "end": 1569
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
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "+=",
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
                    "start": 1585,
                    "end": 1586
                  },
                  "start": 1579,
                  "end": 1586
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1588,
                  "end": 1589
                },
                "optional": false,
                "computed": false,
                "start": 1578,
                "end": 1589
              },
              "right": {
                "type": "AwaitExpression",
                "argument": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "y",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1599,
                  "end": 1600
                },
                "start": 1593,
                "end": 1600
              },
              "start": 1578,
              "end": 1600
            },
            "directive": null,
            "start": 1578,
            "end": 1601
          }
        ],
        "start": 1572,
        "end": 1603
      },
      "expression": false,
      "start": 1529,
      "end": 1603
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "binaryCompoundAssignment7",
        "optional": false,
        "typeAnnotation": null,
        "start": 1620,
        "end": 1645
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
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "+=",
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
                    "start": 1661,
                    "end": 1662
                  },
                  "start": 1655,
                  "end": 1662
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1664,
                  "end": 1665
                },
                "optional": false,
                "computed": true,
                "start": 1654,
                "end": 1666
              },
              "right": {
                "type": "AwaitExpression",
                "argument": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "y",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1676,
                  "end": 1677
                },
                "start": 1670,
                "end": 1677
              },
              "start": 1654,
              "end": 1677
            },
            "directive": null,
            "start": 1654,
            "end": 1678
          }
        ],
        "start": 1648,
        "end": 1680
      },
      "expression": false,
      "start": 1605,
      "end": 1680
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "binaryCompoundAssignment8",
        "optional": false,
        "typeAnnotation": null,
        "start": 1697,
        "end": 1722
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
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "+=",
              "left": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1731,
                  "end": 1732
                },
                "property": {
                  "type": "AwaitExpression",
                  "argument": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1739,
                    "end": 1740
                  },
                  "start": 1733,
                  "end": 1740
                },
                "optional": false,
                "computed": true,
                "start": 1731,
                "end": 1741
              },
              "right": {
                "type": "AwaitExpression",
                "argument": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "y",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1751,
                  "end": 1752
                },
                "start": 1745,
                "end": 1752
              },
              "start": 1731,
              "end": 1752
            },
            "directive": null,
            "start": 1731,
            "end": 1753
          }
        ],
        "start": 1725,
        "end": 1755
      },
      "expression": false,
      "start": 1682,
      "end": 1755
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "binaryExponentiation",
        "optional": false,
        "typeAnnotation": null,
        "start": 1772,
        "end": 1792
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
            "type": "ExpressionStatement",
            "expression": {
              "type": "BinaryExpression",
              "left": {
                "type": "AwaitExpression",
                "argument": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1808,
                  "end": 1809
                },
                "start": 1802,
                "end": 1809
              },
              "operator": "**",
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "y",
                "optional": false,
                "typeAnnotation": null,
                "start": 1814,
                "end": 1815
              },
              "start": 1801,
              "end": 1815
            },
            "directive": null,
            "start": 1801,
            "end": 1816
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "BinaryExpression",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 1821,
                "end": 1822
              },
              "operator": "**",
              "right": {
                "type": "AwaitExpression",
                "argument": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "y",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1832,
                  "end": 1833
                },
                "start": 1826,
                "end": 1833
              },
              "start": 1821,
              "end": 1833
            },
            "directive": null,
            "start": 1821,
            "end": 1834
          }
        ],
        "start": 1795,
        "end": 1836
      },
      "expression": false,
      "start": 1757,
      "end": 1836
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "binaryComma0",
        "optional": false,
        "typeAnnotation": null,
        "start": 1853,
        "end": 1865
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
            "type": "ReturnStatement",
            "argument": {
              "type": "SequenceExpression",
              "expressions": [
                {
                  "type": "AwaitExpression",
                  "argument": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1888,
                    "end": 1889
                  },
                  "start": 1882,
                  "end": 1889
                },
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "y",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1892,
                  "end": 1893
                }
              ],
              "start": 1881,
              "end": 1893
            },
            "start": 1874,
            "end": 1894
          }
        ],
        "start": 1868,
        "end": 1896
      },
      "expression": false,
      "start": 1838,
      "end": 1896
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "binaryComma1",
        "optional": false,
        "typeAnnotation": null,
        "start": 1913,
        "end": 1925
      },
      "generator": false,
      "async": true,
      "declare": false,
      "typeParameters": null,
      "params": [],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "Promise",
            "optional": false,
            "typeAnnotation": null,
            "start": 1929,
            "end": 1936
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "params": [
              {
                "type": "TSAnyKeyword",
                "start": 1937,
                "end": 1940
              }
            ],
            "start": 1936,
            "end": 1941
          },
          "start": 1929,
          "end": 1941
        },
        "start": 1927,
        "end": 1941
      },
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "SequenceExpression",
              "expressions": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1955,
                  "end": 1956
                },
                {
                  "type": "AwaitExpression",
                  "argument": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "y",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1964,
                    "end": 1965
                  },
                  "start": 1958,
                  "end": 1965
                }
              ],
              "start": 1955,
              "end": 1965
            },
            "start": 1948,
            "end": 1966
          }
        ],
        "start": 1942,
        "end": 1968
      },
      "expression": false,
      "start": 1898,
      "end": 1968
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 1968
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
    "value": "binaryPlus0",
    "start": 46,
    "end": 57
  },
  {
    "type": "Punctuator",
    "value": "(",
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
    "value": "{",
    "start": 60,
    "end": 61
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 66,
    "end": 67
  },
  {
    "type": "Identifier",
    "value": "await",
    "start": 67,
    "end": 72
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 73,
    "end": 74
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 74,
    "end": 75
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 76,
    "end": 77
  },
  {
    "type": "Identifier",
    "value": "y",
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
    "type": "Punctuator",
    "value": "}",
    "start": 81,
    "end": 82
  },
  {
    "type": "Identifier",
    "value": "async",
    "start": 84,
    "end": 89
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 90,
    "end": 98
  },
  {
    "type": "Identifier",
    "value": "binaryPlus1",
    "start": 99,
    "end": 110
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 110,
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
    "value": "{",
    "start": 113,
    "end": 114
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 119,
    "end": 120
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 121,
    "end": 122
  },
  {
    "type": "Identifier",
    "value": "await",
    "start": 123,
    "end": 128
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 129,
    "end": 130
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 130,
    "end": 131
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 132,
    "end": 133
  },
  {
    "type": "Identifier",
    "value": "async",
    "start": 135,
    "end": 140
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 141,
    "end": 149
  },
  {
    "type": "Identifier",
    "value": "binaryLogicalAnd0",
    "start": 150,
    "end": 167
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 167,
    "end": 168
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 168,
    "end": 169
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 170,
    "end": 171
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 176,
    "end": 177
  },
  {
    "type": "Identifier",
    "value": "await",
    "start": 177,
    "end": 182
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 183,
    "end": 184
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 184,
    "end": 185
  },
  {
    "type": "Punctuator",
    "value": "&&",
    "start": 186,
    "end": 188
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 189,
    "end": 190
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 190,
    "end": 191
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 192,
    "end": 193
  },
  {
    "type": "Identifier",
    "value": "async",
    "start": 195,
    "end": 200
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 201,
    "end": 209
  },
  {
    "type": "Identifier",
    "value": "binaryLogicalAnd1",
    "start": 210,
    "end": 227
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 227,
    "end": 228
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 228,
    "end": 229
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 230,
    "end": 231
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 236,
    "end": 237
  },
  {
    "type": "Punctuator",
    "value": "&&",
    "start": 238,
    "end": 240
  },
  {
    "type": "Identifier",
    "value": "await",
    "start": 241,
    "end": 246
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 247,
    "end": 248
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 248,
    "end": 249
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 250,
    "end": 251
  },
  {
    "type": "Identifier",
    "value": "async",
    "start": 253,
    "end": 258
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 259,
    "end": 267
  },
  {
    "type": "Identifier",
    "value": "binaryAssignment0",
    "start": 268,
    "end": 285
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 285,
    "end": 286
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 286,
    "end": 287
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 288,
    "end": 289
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 294,
    "end": 295
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 296,
    "end": 297
  },
  {
    "type": "Identifier",
    "value": "await",
    "start": 298,
    "end": 303
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 304,
    "end": 305
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 305,
    "end": 306
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 307,
    "end": 308
  },
  {
    "type": "Identifier",
    "value": "async",
    "start": 310,
    "end": 315
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 316,
    "end": 324
  },
  {
    "type": "Identifier",
    "value": "binaryAssignment1",
    "start": 325,
    "end": 342
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 342,
    "end": 343
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 343,
    "end": 344
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 345,
    "end": 346
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 351,
    "end": 352
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 352,
    "end": 353
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 353,
    "end": 354
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 355,
    "end": 356
  },
  {
    "type": "Identifier",
    "value": "await",
    "start": 357,
    "end": 362
  },
  {
    "type": "Identifier",
    "value": "y",
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
    "type": "Identifier",
    "value": "async",
    "start": 369,
    "end": 374
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 375,
    "end": 383
  },
  {
    "type": "Identifier",
    "value": "binaryAssignment2",
    "start": 384,
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
    "type": "Identifier",
    "value": "x",
    "start": 410,
    "end": 411
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 411,
    "end": 412
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 412,
    "end": 413
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 413,
    "end": 414
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 414,
    "end": 415
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 416,
    "end": 417
  },
  {
    "type": "Identifier",
    "value": "await",
    "start": 418,
    "end": 423
  },
  {
    "type": "Identifier",
    "value": "y",
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
    "value": "}",
    "start": 427,
    "end": 428
  },
  {
    "type": "Identifier",
    "value": "async",
    "start": 430,
    "end": 435
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 436,
    "end": 444
  },
  {
    "type": "Identifier",
    "value": "binaryAssignment3",
    "start": 445,
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
    "value": "{",
    "start": 465,
    "end": 466
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 471,
    "end": 472
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 472,
    "end": 473
  },
  {
    "type": "Identifier",
    "value": "z",
    "start": 473,
    "end": 474
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 474,
    "end": 475
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 476,
    "end": 477
  },
  {
    "type": "Identifier",
    "value": "await",
    "start": 478,
    "end": 483
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 484,
    "end": 485
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 485,
    "end": 486
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 487,
    "end": 488
  },
  {
    "type": "Identifier",
    "value": "async",
    "start": 490,
    "end": 495
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 496,
    "end": 504
  },
  {
    "type": "Identifier",
    "value": "binaryAssignment4",
    "start": 505,
    "end": 522
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 522,
    "end": 523
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 523,
    "end": 524
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 525,
    "end": 526
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 531,
    "end": 532
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 532,
    "end": 533
  },
  {
    "type": "Identifier",
    "value": "z",
    "start": 533,
    "end": 534
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 534,
    "end": 535
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 535,
    "end": 536
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 536,
    "end": 537
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 538,
    "end": 539
  },
  {
    "type": "Identifier",
    "value": "await",
    "start": 540,
    "end": 545
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 546,
    "end": 547
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 547,
    "end": 548
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 549,
    "end": 550
  },
  {
    "type": "Identifier",
    "value": "async",
    "start": 552,
    "end": 557
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 558,
    "end": 566
  },
  {
    "type": "Identifier",
    "value": "binaryAssignment5",
    "start": 567,
    "end": 584
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 584,
    "end": 585
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 585,
    "end": 586
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 587,
    "end": 588
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 593,
    "end": 594
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 594,
    "end": 595
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 595,
    "end": 596
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 596,
    "end": 597
  },
  {
    "type": "Identifier",
    "value": "z",
    "start": 597,
    "end": 598
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 598,
    "end": 599
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 600,
    "end": 601
  },
  {
    "type": "Identifier",
    "value": "await",
    "start": 602,
    "end": 607
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 608,
    "end": 609
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 609,
    "end": 610
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 611,
    "end": 612
  },
  {
    "type": "Identifier",
    "value": "async",
    "start": 614,
    "end": 619
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 620,
    "end": 628
  },
  {
    "type": "Identifier",
    "value": "binaryAssignment6",
    "start": 629,
    "end": 646
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 646,
    "end": 647
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 647,
    "end": 648
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 649,
    "end": 650
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 655,
    "end": 656
  },
  {
    "type": "Identifier",
    "value": "await",
    "start": 656,
    "end": 661
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 662,
    "end": 663
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 663,
    "end": 664
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 664,
    "end": 665
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 665,
    "end": 666
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 667,
    "end": 668
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 669,
    "end": 670
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 670,
    "end": 671
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 672,
    "end": 673
  },
  {
    "type": "Identifier",
    "value": "async",
    "start": 675,
    "end": 680
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 681,
    "end": 689
  },
  {
    "type": "Identifier",
    "value": "binaryAssignment7",
    "start": 690,
    "end": 707
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 707,
    "end": 708
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 708,
    "end": 709
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 710,
    "end": 711
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 716,
    "end": 717
  },
  {
    "type": "Identifier",
    "value": "await",
    "start": 717,
    "end": 722
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 723,
    "end": 724
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 724,
    "end": 725
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 725,
    "end": 726
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 726,
    "end": 727
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 727,
    "end": 728
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 728,
    "end": 729
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 730,
    "end": 731
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 732,
    "end": 733
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 733,
    "end": 734
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 735,
    "end": 736
  },
  {
    "type": "Identifier",
    "value": "async",
    "start": 738,
    "end": 743
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 744,
    "end": 752
  },
  {
    "type": "Identifier",
    "value": "binaryAssignment8",
    "start": 753,
    "end": 770
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 770,
    "end": 771
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 771,
    "end": 772
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 773,
    "end": 774
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 779,
    "end": 780
  },
  {
    "type": "Identifier",
    "value": "await",
    "start": 780,
    "end": 785
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 786,
    "end": 787
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 787,
    "end": 788
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 788,
    "end": 789
  },
  {
    "type": "Identifier",
    "value": "z",
    "start": 789,
    "end": 790
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 790,
    "end": 791
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 792,
    "end": 793
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 794,
    "end": 795
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 795,
    "end": 796
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 797,
    "end": 798
  },
  {
    "type": "Identifier",
    "value": "async",
    "start": 800,
    "end": 805
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 806,
    "end": 814
  },
  {
    "type": "Identifier",
    "value": "binaryAssignment9",
    "start": 815,
    "end": 832
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 832,
    "end": 833
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 833,
    "end": 834
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 835,
    "end": 836
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 841,
    "end": 842
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 842,
    "end": 843
  },
  {
    "type": "Identifier",
    "value": "await",
    "start": 843,
    "end": 848
  },
  {
    "type": "Identifier",
    "value": "z",
    "start": 849,
    "end": 850
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 850,
    "end": 851
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 852,
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
    "value": ";",
    "start": 855,
    "end": 856
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 857,
    "end": 858
  },
  {
    "type": "Identifier",
    "value": "async",
    "start": 860,
    "end": 865
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 866,
    "end": 874
  },
  {
    "type": "Identifier",
    "value": "binaryAssignment10",
    "start": 875,
    "end": 893
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 893,
    "end": 894
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 894,
    "end": 895
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 896,
    "end": 897
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 902,
    "end": 903
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 903,
    "end": 904
  },
  {
    "type": "Identifier",
    "value": "await",
    "start": 904,
    "end": 909
  },
  {
    "type": "Identifier",
    "value": "z",
    "start": 910,
    "end": 911
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 911,
    "end": 912
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 912,
    "end": 913
  },
  {
    "type": "Identifier",
    "value": "b",
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
    "value": "y",
    "start": 917,
    "end": 918
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 918,
    "end": 919
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 920,
    "end": 921
  },
  {
    "type": "Identifier",
    "value": "async",
    "start": 923,
    "end": 928
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 929,
    "end": 937
  },
  {
    "type": "Identifier",
    "value": "binaryAssignment11",
    "start": 938,
    "end": 956
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 956,
    "end": 957
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 957,
    "end": 958
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 959,
    "end": 960
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 965,
    "end": 966
  },
  {
    "type": "Identifier",
    "value": "await",
    "start": 966,
    "end": 971
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 972,
    "end": 973
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 973,
    "end": 974
  },
  {
    "type": "Identifier",
    "value": "z",
    "start": 974,
    "end": 975
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 975,
    "end": 976
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 976,
    "end": 977
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 977,
    "end": 978
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 978,
    "end": 979
  },
  {
    "type": "Punctuator",
    "value": "=",
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
    "value": ";",
    "start": 983,
    "end": 984
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 985,
    "end": 986
  },
  {
    "type": "Identifier",
    "value": "async",
    "start": 988,
    "end": 993
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 994,
    "end": 1002
  },
  {
    "type": "Identifier",
    "value": "binaryAssignment12",
    "start": 1003,
    "end": 1021
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1021,
    "end": 1022
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1022,
    "end": 1023
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1024,
    "end": 1025
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1030,
    "end": 1031
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1031,
    "end": 1032
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1032,
    "end": 1033
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1033,
    "end": 1034
  },
  {
    "type": "Identifier",
    "value": "await",
    "start": 1034,
    "end": 1039
  },
  {
    "type": "Identifier",
    "value": "z",
    "start": 1040,
    "end": 1041
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1041,
    "end": 1042
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1043,
    "end": 1044
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 1045,
    "end": 1046
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1046,
    "end": 1047
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1048,
    "end": 1049
  },
  {
    "type": "Identifier",
    "value": "async",
    "start": 1051,
    "end": 1056
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1057,
    "end": 1065
  },
  {
    "type": "Identifier",
    "value": "binaryAssignment13",
    "start": 1066,
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
    "value": "{",
    "start": 1087,
    "end": 1088
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1093,
    "end": 1094
  },
  {
    "type": "Identifier",
    "value": "await",
    "start": 1094,
    "end": 1099
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1100,
    "end": 1101
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1101,
    "end": 1102
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1102,
    "end": 1103
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1103,
    "end": 1104
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1104,
    "end": 1105
  },
  {
    "type": "Identifier",
    "value": "z",
    "start": 1105,
    "end": 1106
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1106,
    "end": 1107
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1108,
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
    "type": "Identifier",
    "value": "async",
    "start": 1116,
    "end": 1121
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1122,
    "end": 1130
  },
  {
    "type": "Identifier",
    "value": "binaryCompoundAssignment0",
    "start": 1131,
    "end": 1156
  },
  {
    "type": "Punctuator",
    "value": "(",
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
    "type": "Identifier",
    "value": "x",
    "start": 1165,
    "end": 1166
  },
  {
    "type": "Punctuator",
    "value": "+=",
    "start": 1167,
    "end": 1169
  },
  {
    "type": "Identifier",
    "value": "await",
    "start": 1170,
    "end": 1175
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 1176,
    "end": 1177
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1177,
    "end": 1178
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1179,
    "end": 1180
  },
  {
    "type": "Identifier",
    "value": "async",
    "start": 1182,
    "end": 1187
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1188,
    "end": 1196
  },
  {
    "type": "Identifier",
    "value": "binaryCompoundAssignment1",
    "start": 1197,
    "end": 1222
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1222,
    "end": 1223
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1223,
    "end": 1224
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1225,
    "end": 1226
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1231,
    "end": 1232
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1232,
    "end": 1233
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1233,
    "end": 1234
  },
  {
    "type": "Punctuator",
    "value": "+=",
    "start": 1235,
    "end": 1237
  },
  {
    "type": "Identifier",
    "value": "await",
    "start": 1238,
    "end": 1243
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 1244,
    "end": 1245
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1245,
    "end": 1246
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1247,
    "end": 1248
  },
  {
    "type": "Identifier",
    "value": "async",
    "start": 1250,
    "end": 1255
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1256,
    "end": 1264
  },
  {
    "type": "Identifier",
    "value": "binaryCompoundAssignment2",
    "start": 1265,
    "end": 1290
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1290,
    "end": 1291
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1291,
    "end": 1292
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1293,
    "end": 1294
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1299,
    "end": 1300
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1300,
    "end": 1301
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1301,
    "end": 1302
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1302,
    "end": 1303
  },
  {
    "type": "Punctuator",
    "value": "+=",
    "start": 1304,
    "end": 1306
  },
  {
    "type": "Identifier",
    "value": "await",
    "start": 1307,
    "end": 1312
  },
  {
    "type": "Identifier",
    "value": "y",
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
    "start": 1316,
    "end": 1317
  },
  {
    "type": "Identifier",
    "value": "async",
    "start": 1319,
    "end": 1324
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1325,
    "end": 1333
  },
  {
    "type": "Identifier",
    "value": "binaryCompoundAssignment3",
    "start": 1334,
    "end": 1359
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1359,
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
    "type": "Punctuator",
    "value": "(",
    "start": 1368,
    "end": 1369
  },
  {
    "type": "Identifier",
    "value": "await",
    "start": 1369,
    "end": 1374
  },
  {
    "type": "Identifier",
    "value": "x",
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
    "value": ".",
    "start": 1377,
    "end": 1378
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1378,
    "end": 1379
  },
  {
    "type": "Punctuator",
    "value": "+=",
    "start": 1380,
    "end": 1382
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 1383,
    "end": 1384
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1384,
    "end": 1385
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1386,
    "end": 1387
  },
  {
    "type": "Identifier",
    "value": "async",
    "start": 1389,
    "end": 1394
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1395,
    "end": 1403
  },
  {
    "type": "Identifier",
    "value": "binaryCompoundAssignment4",
    "start": 1404,
    "end": 1429
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1429,
    "end": 1430
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1430,
    "end": 1431
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1432,
    "end": 1433
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1438,
    "end": 1439
  },
  {
    "type": "Identifier",
    "value": "await",
    "start": 1439,
    "end": 1444
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1445,
    "end": 1446
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1446,
    "end": 1447
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1447,
    "end": 1448
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1448,
    "end": 1449
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1449,
    "end": 1450
  },
  {
    "type": "Punctuator",
    "value": "+=",
    "start": 1451,
    "end": 1453
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 1454,
    "end": 1455
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1455,
    "end": 1456
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1457,
    "end": 1458
  },
  {
    "type": "Identifier",
    "value": "async",
    "start": 1460,
    "end": 1465
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1466,
    "end": 1474
  },
  {
    "type": "Identifier",
    "value": "binaryCompoundAssignment5",
    "start": 1475,
    "end": 1500
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1500,
    "end": 1501
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1501,
    "end": 1502
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1503,
    "end": 1504
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1509,
    "end": 1510
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1510,
    "end": 1511
  },
  {
    "type": "Identifier",
    "value": "await",
    "start": 1511,
    "end": 1516
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1517,
    "end": 1518
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1518,
    "end": 1519
  },
  {
    "type": "Punctuator",
    "value": "+=",
    "start": 1520,
    "end": 1522
  },
  {
    "type": "Identifier",
    "value": "y",
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
    "value": "}",
    "start": 1526,
    "end": 1527
  },
  {
    "type": "Identifier",
    "value": "async",
    "start": 1529,
    "end": 1534
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1535,
    "end": 1543
  },
  {
    "type": "Identifier",
    "value": "binaryCompoundAssignment6",
    "start": 1544,
    "end": 1569
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1569,
    "end": 1570
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1570,
    "end": 1571
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1572,
    "end": 1573
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1578,
    "end": 1579
  },
  {
    "type": "Identifier",
    "value": "await",
    "start": 1579,
    "end": 1584
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1585,
    "end": 1586
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1586,
    "end": 1587
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1587,
    "end": 1588
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1588,
    "end": 1589
  },
  {
    "type": "Punctuator",
    "value": "+=",
    "start": 1590,
    "end": 1592
  },
  {
    "type": "Identifier",
    "value": "await",
    "start": 1593,
    "end": 1598
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 1599,
    "end": 1600
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1600,
    "end": 1601
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1602,
    "end": 1603
  },
  {
    "type": "Identifier",
    "value": "async",
    "start": 1605,
    "end": 1610
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1611,
    "end": 1619
  },
  {
    "type": "Identifier",
    "value": "binaryCompoundAssignment7",
    "start": 1620,
    "end": 1645
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1645,
    "end": 1646
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1646,
    "end": 1647
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1648,
    "end": 1649
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1654,
    "end": 1655
  },
  {
    "type": "Identifier",
    "value": "await",
    "start": 1655,
    "end": 1660
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1661,
    "end": 1662
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1662,
    "end": 1663
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1663,
    "end": 1664
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1664,
    "end": 1665
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1665,
    "end": 1666
  },
  {
    "type": "Punctuator",
    "value": "+=",
    "start": 1667,
    "end": 1669
  },
  {
    "type": "Identifier",
    "value": "await",
    "start": 1670,
    "end": 1675
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 1676,
    "end": 1677
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1677,
    "end": 1678
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1679,
    "end": 1680
  },
  {
    "type": "Identifier",
    "value": "async",
    "start": 1682,
    "end": 1687
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1688,
    "end": 1696
  },
  {
    "type": "Identifier",
    "value": "binaryCompoundAssignment8",
    "start": 1697,
    "end": 1722
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1722,
    "end": 1723
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1723,
    "end": 1724
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1725,
    "end": 1726
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1731,
    "end": 1732
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1732,
    "end": 1733
  },
  {
    "type": "Identifier",
    "value": "await",
    "start": 1733,
    "end": 1738
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1739,
    "end": 1740
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1740,
    "end": 1741
  },
  {
    "type": "Punctuator",
    "value": "+=",
    "start": 1742,
    "end": 1744
  },
  {
    "type": "Identifier",
    "value": "await",
    "start": 1745,
    "end": 1750
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 1751,
    "end": 1752
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1752,
    "end": 1753
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1754,
    "end": 1755
  },
  {
    "type": "Identifier",
    "value": "async",
    "start": 1757,
    "end": 1762
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1763,
    "end": 1771
  },
  {
    "type": "Identifier",
    "value": "binaryExponentiation",
    "start": 1772,
    "end": 1792
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1792,
    "end": 1793
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1793,
    "end": 1794
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1795,
    "end": 1796
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1801,
    "end": 1802
  },
  {
    "type": "Identifier",
    "value": "await",
    "start": 1802,
    "end": 1807
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1808,
    "end": 1809
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1809,
    "end": 1810
  },
  {
    "type": "Punctuator",
    "value": "**",
    "start": 1811,
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
    "type": "Identifier",
    "value": "x",
    "start": 1821,
    "end": 1822
  },
  {
    "type": "Punctuator",
    "value": "**",
    "start": 1823,
    "end": 1825
  },
  {
    "type": "Identifier",
    "value": "await",
    "start": 1826,
    "end": 1831
  },
  {
    "type": "Identifier",
    "value": "y",
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
    "value": "}",
    "start": 1835,
    "end": 1836
  },
  {
    "type": "Identifier",
    "value": "async",
    "start": 1838,
    "end": 1843
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1844,
    "end": 1852
  },
  {
    "type": "Identifier",
    "value": "binaryComma0",
    "start": 1853,
    "end": 1865
  },
  {
    "type": "Punctuator",
    "value": "(",
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
    "value": "{",
    "start": 1868,
    "end": 1869
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 1874,
    "end": 1880
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1881,
    "end": 1882
  },
  {
    "type": "Identifier",
    "value": "await",
    "start": 1882,
    "end": 1887
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1888,
    "end": 1889
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1889,
    "end": 1890
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1890,
    "end": 1891
  },
  {
    "type": "Identifier",
    "value": "y",
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
    "type": "Punctuator",
    "value": "}",
    "start": 1895,
    "end": 1896
  },
  {
    "type": "Identifier",
    "value": "async",
    "start": 1898,
    "end": 1903
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1904,
    "end": 1912
  },
  {
    "type": "Identifier",
    "value": "binaryComma1",
    "start": 1913,
    "end": 1925
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1925,
    "end": 1926
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1926,
    "end": 1927
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1927,
    "end": 1928
  },
  {
    "type": "Identifier",
    "value": "Promise",
    "start": 1929,
    "end": 1936
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1936,
    "end": 1937
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 1937,
    "end": 1940
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1940,
    "end": 1941
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1942,
    "end": 1943
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 1948,
    "end": 1954
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1955,
    "end": 1956
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1956,
    "end": 1957
  },
  {
    "type": "Identifier",
    "value": "await",
    "start": 1958,
    "end": 1963
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 1964,
    "end": 1965
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1965,
    "end": 1966
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1967,
    "end": 1968
  }
]
```
