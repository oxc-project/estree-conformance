__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "C1",
        "optional": false,
        "typeAnnotation": null,
        "start": 9,
        "end": 11
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
            "type": "IfStatement",
            "test": {
              "type": "UnaryExpression",
              "operator": "!",
              "argument": {
                "type": "BinaryExpression",
                "left": {
                  "type": "ThisExpression",
                  "start": 26,
                  "end": 30
                },
                "operator": "instanceof",
                "right": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "C1",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 42,
                  "end": 44
                },
                "start": 26,
                "end": 44
              },
              "prefix": true,
              "start": 24,
              "end": 45
            },
            "consequent": {
              "type": "ReturnStatement",
              "argument": {
                "type": "NewExpression",
                "callee": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "C1",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 58,
                  "end": 60
                },
                "typeArguments": null,
                "arguments": [],
                "start": 54,
                "end": 62
              },
              "start": 47,
              "end": 63
            },
            "alternate": null,
            "start": 20,
            "end": 63
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "MemberExpression",
                "object": {
                  "type": "ThisExpression",
                  "start": 68,
                  "end": 72
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 73,
                  "end": 74
                },
                "optional": false,
                "computed": false,
                "start": 68,
                "end": 74
              },
              "right": {
                "type": "Literal",
                "value": 1,
                "raw": "1",
                "start": 77,
                "end": 78
              },
              "start": 68,
              "end": 78
            },
            "directive": null,
            "start": 68,
            "end": 79
          }
        ],
        "start": 14,
        "end": 81
      },
      "expression": false,
      "start": 0,
      "end": 81
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
            "name": "c1_v1",
            "optional": false,
            "typeAnnotation": null,
            "start": 89,
            "end": 94
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "C1",
              "optional": false,
              "typeAnnotation": null,
              "start": 97,
              "end": 99
            },
            "typeArguments": null,
            "arguments": [],
            "optional": false,
            "start": 97,
            "end": 101
          },
          "definite": false,
          "start": 89,
          "end": 101
        }
      ],
      "declare": false,
      "start": 83,
      "end": 102
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
            "name": "c1_v2",
            "optional": false,
            "typeAnnotation": null,
            "start": 109,
            "end": 114
          },
          "init": {
            "type": "NewExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "C1",
              "optional": false,
              "typeAnnotation": null,
              "start": 121,
              "end": 123
            },
            "typeArguments": null,
            "arguments": [],
            "start": 117,
            "end": 125
          },
          "definite": false,
          "start": 109,
          "end": 125
        }
      ],
      "declare": false,
      "start": 103,
      "end": 126
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
            "name": "C2",
            "optional": false,
            "typeAnnotation": null,
            "start": 132,
            "end": 134
          },
          "init": {
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
                  "type": "IfStatement",
                  "test": {
                    "type": "UnaryExpression",
                    "operator": "!",
                    "argument": {
                      "type": "BinaryExpression",
                      "left": {
                        "type": "ThisExpression",
                        "start": 161,
                        "end": 165
                      },
                      "operator": "instanceof",
                      "right": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "C2",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 177,
                        "end": 179
                      },
                      "start": 161,
                      "end": 179
                    },
                    "prefix": true,
                    "start": 159,
                    "end": 180
                  },
                  "consequent": {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "NewExpression",
                      "callee": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "C2",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 193,
                        "end": 195
                      },
                      "typeArguments": null,
                      "arguments": [],
                      "start": 189,
                      "end": 197
                    },
                    "start": 182,
                    "end": 198
                  },
                  "alternate": null,
                  "start": 155,
                  "end": 198
                },
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "AssignmentExpression",
                    "operator": "=",
                    "left": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "ThisExpression",
                        "start": 203,
                        "end": 207
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 208,
                        "end": 209
                      },
                      "optional": false,
                      "computed": false,
                      "start": 203,
                      "end": 209
                    },
                    "right": {
                      "type": "Literal",
                      "value": 1,
                      "raw": "1",
                      "start": 212,
                      "end": 213
                    },
                    "start": 203,
                    "end": 213
                  },
                  "directive": null,
                  "start": 203,
                  "end": 214
                }
              ],
              "start": 149,
              "end": 216
            },
            "expression": false,
            "start": 137,
            "end": 216
          },
          "definite": false,
          "start": 132,
          "end": 216
        }
      ],
      "declare": false,
      "start": 128,
      "end": 217
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
            "name": "c2_v1",
            "optional": false,
            "typeAnnotation": null,
            "start": 225,
            "end": 230
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "C2",
              "optional": false,
              "typeAnnotation": null,
              "start": 233,
              "end": 235
            },
            "typeArguments": null,
            "arguments": [],
            "optional": false,
            "start": 233,
            "end": 237
          },
          "definite": false,
          "start": 225,
          "end": 237
        }
      ],
      "declare": false,
      "start": 219,
      "end": 238
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
            "name": "c2_v2",
            "optional": false,
            "typeAnnotation": null,
            "start": 245,
            "end": 250
          },
          "init": {
            "type": "NewExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "C2",
              "optional": false,
              "typeAnnotation": null,
              "start": 257,
              "end": 259
            },
            "typeArguments": null,
            "arguments": [],
            "start": 253,
            "end": 261
          },
          "definite": false,
          "start": 245,
          "end": 261
        }
      ],
      "declare": false,
      "start": 239,
      "end": 262
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "C3",
        "optional": false,
        "typeAnnotation": null,
        "start": 287,
        "end": 289
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
            "type": "IfStatement",
            "test": {
              "type": "UnaryExpression",
              "operator": "!",
              "argument": {
                "type": "BinaryExpression",
                "left": {
                  "type": "ThisExpression",
                  "start": 304,
                  "end": 308
                },
                "operator": "instanceof",
                "right": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "C3",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 320,
                  "end": 322
                },
                "start": 304,
                "end": 322
              },
              "prefix": true,
              "start": 302,
              "end": 323
            },
            "consequent": {
              "type": "ReturnStatement",
              "argument": {
                "type": "NewExpression",
                "callee": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "C3",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 336,
                  "end": 338
                },
                "typeArguments": null,
                "arguments": [],
                "start": 332,
                "end": 340
              },
              "start": 325,
              "end": 341
            },
            "alternate": null,
            "start": 298,
            "end": 341
          }
        ],
        "start": 292,
        "end": 343
      },
      "expression": false,
      "start": 278,
      "end": 343
    },
    {
      "type": "EmptyStatement",
      "start": 343,
      "end": 344
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
            "name": "c3_v1",
            "optional": false,
            "typeAnnotation": null,
            "start": 352,
            "end": 357
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "C3",
              "optional": false,
              "typeAnnotation": null,
              "start": 360,
              "end": 362
            },
            "typeArguments": null,
            "arguments": [],
            "optional": false,
            "start": 360,
            "end": 364
          },
          "definite": false,
          "start": 352,
          "end": 364
        }
      ],
      "declare": false,
      "start": 346,
      "end": 365
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
            "name": "c3_v2",
            "optional": false,
            "typeAnnotation": null,
            "start": 408,
            "end": 413
          },
          "init": {
            "type": "NewExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "C3",
              "optional": false,
              "typeAnnotation": null,
              "start": 420,
              "end": 422
            },
            "typeArguments": null,
            "arguments": [],
            "start": 416,
            "end": 424
          },
          "definite": false,
          "start": 408,
          "end": 424
        }
      ],
      "declare": false,
      "start": 402,
      "end": 425
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
            "name": "C4",
            "optional": false,
            "typeAnnotation": null,
            "start": 445,
            "end": 447
          },
          "init": {
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
                  "type": "IfStatement",
                  "test": {
                    "type": "UnaryExpression",
                    "operator": "!",
                    "argument": {
                      "type": "BinaryExpression",
                      "left": {
                        "type": "ThisExpression",
                        "start": 474,
                        "end": 478
                      },
                      "operator": "instanceof",
                      "right": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "C4",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 490,
                        "end": 492
                      },
                      "start": 474,
                      "end": 492
                    },
                    "prefix": true,
                    "start": 472,
                    "end": 493
                  },
                  "consequent": {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "NewExpression",
                      "callee": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "C4",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 506,
                        "end": 508
                      },
                      "typeArguments": null,
                      "arguments": [],
                      "start": 502,
                      "end": 510
                    },
                    "start": 495,
                    "end": 511
                  },
                  "alternate": null,
                  "start": 468,
                  "end": 511
                }
              ],
              "start": 462,
              "end": 513
            },
            "expression": false,
            "start": 450,
            "end": 513
          },
          "definite": false,
          "start": 445,
          "end": 513
        }
      ],
      "declare": false,
      "start": 441,
      "end": 514
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
            "name": "c4_v1",
            "optional": false,
            "typeAnnotation": null,
            "start": 522,
            "end": 527
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "C4",
              "optional": false,
              "typeAnnotation": null,
              "start": 530,
              "end": 532
            },
            "typeArguments": null,
            "arguments": [],
            "optional": false,
            "start": 530,
            "end": 534
          },
          "definite": false,
          "start": 522,
          "end": 534
        }
      ],
      "declare": false,
      "start": 516,
      "end": 535
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
            "name": "c4_v2",
            "optional": false,
            "typeAnnotation": null,
            "start": 578,
            "end": 583
          },
          "init": {
            "type": "NewExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "C4",
              "optional": false,
              "typeAnnotation": null,
              "start": 590,
              "end": 592
            },
            "typeArguments": null,
            "arguments": [],
            "start": 586,
            "end": 594
          },
          "definite": false,
          "start": 578,
          "end": 594
        }
      ],
      "declare": false,
      "start": 572,
      "end": 595
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
            "name": "c5_v1",
            "optional": false,
            "typeAnnotation": null,
            "start": 601,
            "end": 606
          },
          "init": null,
          "definite": false,
          "start": 601,
          "end": 606
        }
      ],
      "declare": false,
      "start": 597,
      "end": 607
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "c5_v1",
          "optional": false,
          "typeAnnotation": null,
          "start": 608,
          "end": 613
        },
        "right": {
          "type": "FunctionExpression",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "f",
            "optional": false,
            "typeAnnotation": null,
            "start": 625,
            "end": 626
          },
          "generator": false,
          "async": false,
          "declare": false,
          "typeParameters": null,
          "params": [],
          "returnType": null,
          "body": {
            "type": "BlockStatement",
            "body": [],
            "start": 629,
            "end": 632
          },
          "expression": false,
          "start": 616,
          "end": 632
        },
        "start": 608,
        "end": 632
      },
      "directive": null,
      "start": 608,
      "end": 633
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "NewExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "c5_v1",
          "optional": false,
          "typeAnnotation": null,
          "start": 638,
          "end": 643
        },
        "typeArguments": null,
        "arguments": [],
        "start": 634,
        "end": 645
      },
      "directive": null,
      "start": 634,
      "end": 646
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
            "name": "c5_v2",
            "optional": false,
            "typeAnnotation": null,
            "start": 652,
            "end": 657
          },
          "init": null,
          "definite": false,
          "start": 652,
          "end": 657
        }
      ],
      "declare": false,
      "start": 648,
      "end": 658
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "c5_v2",
          "optional": false,
          "typeAnnotation": null,
          "start": 659,
          "end": 664
        },
        "right": {
          "type": "ClassExpression",
          "decorators": [],
          "id": null,
          "typeParameters": null,
          "superClass": null,
          "superTypeArguments": null,
          "implements": [],
          "body": {
            "type": "ClassBody",
            "body": [],
            "start": 673,
            "end": 676
          },
          "abstract": false,
          "declare": false,
          "start": 667,
          "end": 676
        },
        "start": 659,
        "end": 676
      },
      "directive": null,
      "start": 659,
      "end": 677
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "NewExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "c5_v2",
          "optional": false,
          "typeAnnotation": null,
          "start": 682,
          "end": 687
        },
        "typeArguments": null,
        "arguments": [],
        "start": 678,
        "end": 689
      },
      "directive": null,
      "start": 678,
      "end": 690
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "C6",
        "optional": false,
        "typeAnnotation": null,
        "start": 715,
        "end": 717
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
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "MemberExpression",
                "object": {
                  "type": "ThisExpression",
                  "start": 724,
                  "end": 728
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "functions",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 729,
                  "end": 738
                },
                "optional": false,
                "computed": false,
                "start": 724,
                "end": 738
              },
              "right": {
                "type": "ArrayExpression",
                "elements": [
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
                        "start": 742,
                        "end": 743
                      }
                    ],
                    "returnType": null,
                    "body": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 747,
                      "end": 748
                    },
                    "id": null,
                    "generator": false,
                    "start": 742,
                    "end": 748
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
                        "start": 750,
                        "end": 751
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
                        "start": 755,
                        "end": 756
                      },
                      "operator": "+",
                      "right": {
                        "type": "Literal",
                        "value": 1,
                        "raw": "1",
                        "start": 759,
                        "end": 760
                      },
                      "start": 755,
                      "end": 760
                    },
                    "id": null,
                    "generator": false,
                    "start": 750,
                    "end": 760
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
                        "start": 762,
                        "end": 763
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
                        "start": 767,
                        "end": 768
                      },
                      "operator": "-",
                      "right": {
                        "type": "Literal",
                        "value": 1,
                        "raw": "1",
                        "start": 771,
                        "end": 772
                      },
                      "start": 767,
                      "end": 772
                    },
                    "id": null,
                    "generator": false,
                    "start": 762,
                    "end": 772
                  }
                ],
                "start": 741,
                "end": 773
              },
              "start": 724,
              "end": 773
            },
            "directive": null,
            "start": 724,
            "end": 773
          }
        ],
        "start": 720,
        "end": 775
      },
      "expression": false,
      "start": 706,
      "end": 775
    },
    {
      "type": "EmptyStatement",
      "start": 775,
      "end": 776
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
            "name": "c6_v1",
            "optional": false,
            "typeAnnotation": null,
            "start": 782,
            "end": 787
          },
          "init": {
            "type": "NewExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "C6",
              "optional": false,
              "typeAnnotation": null,
              "start": 794,
              "end": 796
            },
            "typeArguments": null,
            "arguments": [],
            "start": 790,
            "end": 798
          },
          "definite": false,
          "start": 782,
          "end": 798
        }
      ],
      "declare": false,
      "start": 778,
      "end": 799
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "C7",
        "optional": false,
        "typeAnnotation": null,
        "start": 858,
        "end": 860
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "num",
          "optional": false,
          "typeAnnotation": null,
          "start": 861,
          "end": 864
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 866,
        "end": 868
      },
      "expression": false,
      "start": 849,
      "end": 868
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
            "name": "c7_v1",
            "optional": false,
            "typeAnnotation": null,
            "start": 874,
            "end": 879
          },
          "init": {
            "type": "NewExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "C7",
              "optional": false,
              "typeAnnotation": null,
              "start": 886,
              "end": 888
            },
            "typeArguments": null,
            "arguments": [],
            "start": 882,
            "end": 890
          },
          "definite": false,
          "start": 874,
          "end": 890
        }
      ],
      "declare": false,
      "start": 870,
      "end": 891
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 891
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "function",
    "start": 0,
    "end": 8
  },
  {
    "type": "Identifier",
    "value": "C1",
    "start": 9,
    "end": 11
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 11,
    "end": 12
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 12,
    "end": 13
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 14,
    "end": 15
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 20,
    "end": 22
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 23,
    "end": 24
  },
  {
    "type": "Punctuator",
    "value": "!",
    "start": 24,
    "end": 25
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 25,
    "end": 26
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 26,
    "end": 30
  },
  {
    "type": "Keyword",
    "value": "instanceof",
    "start": 31,
    "end": 41
  },
  {
    "type": "Identifier",
    "value": "C1",
    "start": 42,
    "end": 44
  },
  {
    "type": "Punctuator",
    "value": ")",
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
    "type": "Keyword",
    "value": "return",
    "start": 47,
    "end": 53
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 54,
    "end": 57
  },
  {
    "type": "Identifier",
    "value": "C1",
    "start": 58,
    "end": 60
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 60,
    "end": 61
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 61,
    "end": 62
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 62,
    "end": 63
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 68,
    "end": 72
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 72,
    "end": 73
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 73,
    "end": 74
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 75,
    "end": 76
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 77,
    "end": 78
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 78,
    "end": 79
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 80,
    "end": 81
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 83,
    "end": 88
  },
  {
    "type": "Identifier",
    "value": "c1_v1",
    "start": 89,
    "end": 94
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 95,
    "end": 96
  },
  {
    "type": "Identifier",
    "value": "C1",
    "start": 97,
    "end": 99
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 99,
    "end": 100
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 100,
    "end": 101
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 101,
    "end": 102
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 103,
    "end": 108
  },
  {
    "type": "Identifier",
    "value": "c1_v2",
    "start": 109,
    "end": 114
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 115,
    "end": 116
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 117,
    "end": 120
  },
  {
    "type": "Identifier",
    "value": "C1",
    "start": 121,
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
    "value": ";",
    "start": 125,
    "end": 126
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 128,
    "end": 131
  },
  {
    "type": "Identifier",
    "value": "C2",
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
    "type": "Keyword",
    "value": "function",
    "start": 137,
    "end": 145
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 146,
    "end": 147
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 147,
    "end": 148
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 149,
    "end": 150
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 155,
    "end": 157
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 158,
    "end": 159
  },
  {
    "type": "Punctuator",
    "value": "!",
    "start": 159,
    "end": 160
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 160,
    "end": 161
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 161,
    "end": 165
  },
  {
    "type": "Keyword",
    "value": "instanceof",
    "start": 166,
    "end": 176
  },
  {
    "type": "Identifier",
    "value": "C2",
    "start": 177,
    "end": 179
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 179,
    "end": 180
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 180,
    "end": 181
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 182,
    "end": 188
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 189,
    "end": 192
  },
  {
    "type": "Identifier",
    "value": "C2",
    "start": 193,
    "end": 195
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 195,
    "end": 196
  },
  {
    "type": "Punctuator",
    "value": ")",
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
    "type": "Keyword",
    "value": "this",
    "start": 203,
    "end": 207
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 207,
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
    "value": "=",
    "start": 210,
    "end": 211
  },
  {
    "type": "Numeric",
    "value": "1",
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
    "value": ";",
    "start": 216,
    "end": 217
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 219,
    "end": 224
  },
  {
    "type": "Identifier",
    "value": "c2_v1",
    "start": 225,
    "end": 230
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 231,
    "end": 232
  },
  {
    "type": "Identifier",
    "value": "C2",
    "start": 233,
    "end": 235
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 235,
    "end": 236
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 236,
    "end": 237
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 237,
    "end": 238
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 239,
    "end": 244
  },
  {
    "type": "Identifier",
    "value": "c2_v2",
    "start": 245,
    "end": 250
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 251,
    "end": 252
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 253,
    "end": 256
  },
  {
    "type": "Identifier",
    "value": "C2",
    "start": 257,
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
    "value": ";",
    "start": 261,
    "end": 262
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 278,
    "end": 286
  },
  {
    "type": "Identifier",
    "value": "C3",
    "start": 287,
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
    "value": "{",
    "start": 292,
    "end": 293
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 298,
    "end": 300
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 301,
    "end": 302
  },
  {
    "type": "Punctuator",
    "value": "!",
    "start": 302,
    "end": 303
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 303,
    "end": 304
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 304,
    "end": 308
  },
  {
    "type": "Keyword",
    "value": "instanceof",
    "start": 309,
    "end": 319
  },
  {
    "type": "Identifier",
    "value": "C3",
    "start": 320,
    "end": 322
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 322,
    "end": 323
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 323,
    "end": 324
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 325,
    "end": 331
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 332,
    "end": 335
  },
  {
    "type": "Identifier",
    "value": "C3",
    "start": 336,
    "end": 338
  },
  {
    "type": "Punctuator",
    "value": "(",
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
    "value": ";",
    "start": 340,
    "end": 341
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 342,
    "end": 343
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 343,
    "end": 344
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 346,
    "end": 351
  },
  {
    "type": "Identifier",
    "value": "c3_v1",
    "start": 352,
    "end": 357
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 358,
    "end": 359
  },
  {
    "type": "Identifier",
    "value": "C3",
    "start": 360,
    "end": 362
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 362,
    "end": 363
  },
  {
    "type": "Punctuator",
    "value": ")",
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
    "type": "Keyword",
    "value": "const",
    "start": 402,
    "end": 407
  },
  {
    "type": "Identifier",
    "value": "c3_v2",
    "start": 408,
    "end": 413
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 414,
    "end": 415
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 416,
    "end": 419
  },
  {
    "type": "Identifier",
    "value": "C3",
    "start": 420,
    "end": 422
  },
  {
    "type": "Punctuator",
    "value": "(",
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
    "value": ";",
    "start": 424,
    "end": 425
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 441,
    "end": 444
  },
  {
    "type": "Identifier",
    "value": "C4",
    "start": 445,
    "end": 447
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 448,
    "end": 449
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 450,
    "end": 458
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 459,
    "end": 460
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 460,
    "end": 461
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 462,
    "end": 463
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 468,
    "end": 470
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 471,
    "end": 472
  },
  {
    "type": "Punctuator",
    "value": "!",
    "start": 472,
    "end": 473
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 473,
    "end": 474
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 474,
    "end": 478
  },
  {
    "type": "Keyword",
    "value": "instanceof",
    "start": 479,
    "end": 489
  },
  {
    "type": "Identifier",
    "value": "C4",
    "start": 490,
    "end": 492
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 492,
    "end": 493
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 493,
    "end": 494
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 495,
    "end": 501
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 502,
    "end": 505
  },
  {
    "type": "Identifier",
    "value": "C4",
    "start": 506,
    "end": 508
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 508,
    "end": 509
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 509,
    "end": 510
  },
  {
    "type": "Punctuator",
    "value": ";",
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
    "type": "Punctuator",
    "value": ";",
    "start": 513,
    "end": 514
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 516,
    "end": 521
  },
  {
    "type": "Identifier",
    "value": "c4_v1",
    "start": 522,
    "end": 527
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 528,
    "end": 529
  },
  {
    "type": "Identifier",
    "value": "C4",
    "start": 530,
    "end": 532
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 532,
    "end": 533
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 533,
    "end": 534
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 534,
    "end": 535
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 572,
    "end": 577
  },
  {
    "type": "Identifier",
    "value": "c4_v2",
    "start": 578,
    "end": 583
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 584,
    "end": 585
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 586,
    "end": 589
  },
  {
    "type": "Identifier",
    "value": "C4",
    "start": 590,
    "end": 592
  },
  {
    "type": "Punctuator",
    "value": "(",
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
    "value": ";",
    "start": 594,
    "end": 595
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 597,
    "end": 600
  },
  {
    "type": "Identifier",
    "value": "c5_v1",
    "start": 601,
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
    "value": "c5_v1",
    "start": 608,
    "end": 613
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 614,
    "end": 615
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 616,
    "end": 624
  },
  {
    "type": "Identifier",
    "value": "f",
    "start": 625,
    "end": 626
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 626,
    "end": 627
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 627,
    "end": 628
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 629,
    "end": 630
  },
  {
    "type": "Punctuator",
    "value": "}",
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
    "type": "Keyword",
    "value": "new",
    "start": 634,
    "end": 637
  },
  {
    "type": "Identifier",
    "value": "c5_v1",
    "start": 638,
    "end": 643
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 643,
    "end": 644
  },
  {
    "type": "Punctuator",
    "value": ")",
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
    "type": "Keyword",
    "value": "var",
    "start": 648,
    "end": 651
  },
  {
    "type": "Identifier",
    "value": "c5_v2",
    "start": 652,
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
    "value": "c5_v2",
    "start": 659,
    "end": 664
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 665,
    "end": 666
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 667,
    "end": 672
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 673,
    "end": 674
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 675,
    "end": 676
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 676,
    "end": 677
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 678,
    "end": 681
  },
  {
    "type": "Identifier",
    "value": "c5_v2",
    "start": 682,
    "end": 687
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 687,
    "end": 688
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 688,
    "end": 689
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 689,
    "end": 690
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 706,
    "end": 714
  },
  {
    "type": "Identifier",
    "value": "C6",
    "start": 715,
    "end": 717
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 717,
    "end": 718
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 718,
    "end": 719
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 720,
    "end": 721
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 724,
    "end": 728
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 728,
    "end": 729
  },
  {
    "type": "Identifier",
    "value": "functions",
    "start": 729,
    "end": 738
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 739,
    "end": 740
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 741,
    "end": 742
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 742,
    "end": 743
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 744,
    "end": 746
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 747,
    "end": 748
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 748,
    "end": 749
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 750,
    "end": 751
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 752,
    "end": 754
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 755,
    "end": 756
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 757,
    "end": 758
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 759,
    "end": 760
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 760,
    "end": 761
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 762,
    "end": 763
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 764,
    "end": 766
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 767,
    "end": 768
  },
  {
    "type": "Punctuator",
    "value": "-",
    "start": 769,
    "end": 770
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 771,
    "end": 772
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 772,
    "end": 773
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 774,
    "end": 775
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 775,
    "end": 776
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 778,
    "end": 781
  },
  {
    "type": "Identifier",
    "value": "c6_v1",
    "start": 782,
    "end": 787
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 788,
    "end": 789
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 790,
    "end": 793
  },
  {
    "type": "Identifier",
    "value": "C6",
    "start": 794,
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
    "value": ";",
    "start": 798,
    "end": 799
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 849,
    "end": 857
  },
  {
    "type": "Identifier",
    "value": "C7",
    "start": 858,
    "end": 860
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 860,
    "end": 861
  },
  {
    "type": "Identifier",
    "value": "num",
    "start": 861,
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
    "value": "{",
    "start": 866,
    "end": 867
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 867,
    "end": 868
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 870,
    "end": 873
  },
  {
    "type": "Identifier",
    "value": "c7_v1",
    "start": 874,
    "end": 879
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 880,
    "end": 881
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 882,
    "end": 885
  },
  {
    "type": "Identifier",
    "value": "C7",
    "start": 886,
    "end": 888
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 888,
    "end": 889
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 889,
    "end": 890
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 890,
    "end": 891
  }
]
```
