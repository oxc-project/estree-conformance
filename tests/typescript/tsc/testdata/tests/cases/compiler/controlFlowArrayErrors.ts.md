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
        "name": "cond",
        "optional": false,
        "typeAnnotation": null,
        "start": 17,
        "end": 21
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": null,
      "params": [],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSBooleanKeyword",
          "start": 25,
          "end": 32
        },
        "start": 23,
        "end": 32
      },
      "body": null,
      "expression": false,
      "start": 0,
      "end": 33
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f1",
        "optional": false,
        "typeAnnotation": null,
        "start": 44,
        "end": 46
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
                  "start": 59,
                  "end": 60
                },
                "init": {
                  "type": "ArrayExpression",
                  "elements": [],
                  "start": 63,
                  "end": 65
                },
                "definite": false,
                "start": 59,
                "end": 65
              }
            ],
            "declare": false,
            "start": 55,
            "end": 66
          },
          {
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
                  "start": 118,
                  "end": 119
                },
                "init": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 122,
                  "end": 123
                },
                "definite": false,
                "start": 118,
                "end": 123
              }
            ],
            "declare": false,
            "start": 114,
            "end": 124
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "CallExpression",
              "callee": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 155,
                  "end": 156
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "push",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 157,
                  "end": 161
                },
                "optional": false,
                "computed": false,
                "start": 155,
                "end": 161
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Literal",
                  "value": 5,
                  "raw": "5",
                  "start": 162,
                  "end": 163
                }
              ],
              "optional": false,
              "start": 155,
              "end": 164
            },
            "directive": null,
            "start": 155,
            "end": 165
          },
          {
            "type": "VariableDeclaration",
            "kind": "let",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "z",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 174,
                  "end": 175
                },
                "init": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 178,
                  "end": 179
                },
                "definite": false,
                "start": 174,
                "end": 179
              }
            ],
            "declare": false,
            "start": 170,
            "end": 180
          }
        ],
        "start": 49,
        "end": 182
      },
      "expression": false,
      "start": 35,
      "end": 182
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f2",
        "optional": false,
        "typeAnnotation": null,
        "start": 193,
        "end": 195
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
                  "start": 208,
                  "end": 209
                },
                "init": null,
                "definite": false,
                "start": 208,
                "end": 209
              }
            ],
            "declare": false,
            "start": 204,
            "end": 210
          },
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
                "start": 263,
                "end": 264
              },
              "right": {
                "type": "ArrayExpression",
                "elements": [],
                "start": 267,
                "end": 269
              },
              "start": 263,
              "end": 269
            },
            "directive": null,
            "start": 263,
            "end": 270
          },
          {
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
                  "start": 279,
                  "end": 280
                },
                "init": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 283,
                  "end": 284
                },
                "definite": false,
                "start": 279,
                "end": 284
              }
            ],
            "declare": false,
            "start": 275,
            "end": 285
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "CallExpression",
              "callee": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 316,
                  "end": 317
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "push",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 318,
                  "end": 322
                },
                "optional": false,
                "computed": false,
                "start": 316,
                "end": 322
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Literal",
                  "value": 5,
                  "raw": "5",
                  "start": 323,
                  "end": 324
                }
              ],
              "optional": false,
              "start": 316,
              "end": 325
            },
            "directive": null,
            "start": 316,
            "end": 326
          },
          {
            "type": "VariableDeclaration",
            "kind": "let",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "z",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 335,
                  "end": 336
                },
                "init": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 339,
                  "end": 340
                },
                "definite": false,
                "start": 335,
                "end": 340
              }
            ],
            "declare": false,
            "start": 331,
            "end": 341
          }
        ],
        "start": 198,
        "end": 343
      },
      "expression": false,
      "start": 184,
      "end": 343
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f3",
        "optional": false,
        "typeAnnotation": null,
        "start": 354,
        "end": 356
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
                  "start": 369,
                  "end": 370
                },
                "init": {
                  "type": "ArrayExpression",
                  "elements": [],
                  "start": 373,
                  "end": 375
                },
                "definite": false,
                "start": 369,
                "end": 375
              }
            ],
            "declare": false,
            "start": 365,
            "end": 376
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "CallExpression",
              "callee": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 424,
                  "end": 425
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "push",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 426,
                  "end": 430
                },
                "optional": false,
                "computed": false,
                "start": 424,
                "end": 430
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Literal",
                  "value": 5,
                  "raw": "5",
                  "start": 431,
                  "end": 432
                }
              ],
              "optional": false,
              "start": 424,
              "end": 433
            },
            "directive": null,
            "start": 424,
            "end": 434
          },
          {
            "type": "FunctionDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "g",
              "optional": false,
              "typeAnnotation": null,
              "start": 448,
              "end": 449
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
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 462,
                    "end": 463
                  },
                  "directive": null,
                  "start": 462,
                  "end": 464
                }
              ],
              "start": 452,
              "end": 500
            },
            "expression": false,
            "start": 439,
            "end": 500
          }
        ],
        "start": 359,
        "end": 502
      },
      "expression": false,
      "start": 345,
      "end": 502
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f4",
        "optional": false,
        "typeAnnotation": null,
        "start": 513,
        "end": 515
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
                  "start": 528,
                  "end": 529
                },
                "init": null,
                "definite": false,
                "start": 528,
                "end": 529
              }
            ],
            "declare": false,
            "start": 524,
            "end": 530
          },
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
                "start": 535,
                "end": 536
              },
              "right": {
                "type": "ArrayExpression",
                "elements": [
                  {
                    "type": "Literal",
                    "value": 5,
                    "raw": "5",
                    "start": 540,
                    "end": 541
                  },
                  {
                    "type": "Literal",
                    "value": "hello",
                    "raw": "\"hello\"",
                    "start": 543,
                    "end": 550
                  }
                ],
                "start": 539,
                "end": 551
              },
              "start": 535,
              "end": 551
            },
            "directive": null,
            "start": 535,
            "end": 552
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "CallExpression",
              "callee": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 580,
                  "end": 581
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "push",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 582,
                  "end": 586
                },
                "optional": false,
                "computed": false,
                "start": 580,
                "end": 586
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Literal",
                  "value": true,
                  "raw": "true",
                  "start": 587,
                  "end": 591
                }
              ],
              "optional": false,
              "start": 580,
              "end": 592
            },
            "directive": null,
            "start": 580,
            "end": 593
          }
        ],
        "start": 518,
        "end": 609
      },
      "expression": false,
      "start": 504,
      "end": 609
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f5",
        "optional": false,
        "typeAnnotation": null,
        "start": 620,
        "end": 622
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
                  "start": 635,
                  "end": 636
                },
                "init": {
                  "type": "ArrayExpression",
                  "elements": [
                    {
                      "type": "Literal",
                      "value": 5,
                      "raw": "5",
                      "start": 640,
                      "end": 641
                    },
                    {
                      "type": "Literal",
                      "value": "hello",
                      "raw": "\"hello\"",
                      "start": 643,
                      "end": 650
                    }
                  ],
                  "start": 639,
                  "end": 651
                },
                "definite": false,
                "start": 635,
                "end": 651
              }
            ],
            "declare": false,
            "start": 631,
            "end": 652
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "CallExpression",
              "callee": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 680,
                  "end": 681
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "push",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 682,
                  "end": 686
                },
                "optional": false,
                "computed": false,
                "start": 680,
                "end": 686
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Literal",
                  "value": true,
                  "raw": "true",
                  "start": 687,
                  "end": 691
                }
              ],
              "optional": false,
              "start": 680,
              "end": 692
            },
            "directive": null,
            "start": 680,
            "end": 693
          }
        ],
        "start": 625,
        "end": 713
      },
      "expression": false,
      "start": 611,
      "end": 713
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f6",
        "optional": false,
        "typeAnnotation": null,
        "start": 724,
        "end": 726
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
                  "start": 739,
                  "end": 740
                },
                "init": null,
                "definite": false,
                "start": 739,
                "end": 740
              }
            ],
            "declare": false,
            "start": 735,
            "end": 741
          },
          {
            "type": "IfStatement",
            "test": {
              "type": "CallExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "cond",
                "optional": false,
                "typeAnnotation": null,
                "start": 750,
                "end": 754
              },
              "typeArguments": null,
              "arguments": [],
              "optional": false,
              "start": 750,
              "end": 756
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
                      "start": 768,
                      "end": 769
                    },
                    "right": {
                      "type": "ArrayExpression",
                      "elements": [],
                      "start": 772,
                      "end": 774
                    },
                    "start": 768,
                    "end": 774
                  },
                  "directive": null,
                  "start": 768,
                  "end": 775
                },
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "CallExpression",
                    "callee": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 784,
                        "end": 785
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "push",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 786,
                        "end": 790
                      },
                      "optional": false,
                      "computed": false,
                      "start": 784,
                      "end": 790
                    },
                    "typeArguments": null,
                    "arguments": [
                      {
                        "type": "Literal",
                        "value": 5,
                        "raw": "5",
                        "start": 791,
                        "end": 792
                      }
                    ],
                    "optional": false,
                    "start": 784,
                    "end": 793
                  },
                  "directive": null,
                  "start": 784,
                  "end": 794
                },
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "CallExpression",
                    "callee": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 803,
                        "end": 804
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "push",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 805,
                        "end": 809
                      },
                      "optional": false,
                      "computed": false,
                      "start": 803,
                      "end": 809
                    },
                    "typeArguments": null,
                    "arguments": [
                      {
                        "type": "Literal",
                        "value": "hello",
                        "raw": "\"hello\"",
                        "start": 810,
                        "end": 817
                      }
                    ],
                    "optional": false,
                    "start": 803,
                    "end": 818
                  },
                  "directive": null,
                  "start": 803,
                  "end": 819
                }
              ],
              "start": 758,
              "end": 825
            },
            "alternate": {
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
                      "start": 845,
                      "end": 846
                    },
                    "right": {
                      "type": "ArrayExpression",
                      "elements": [
                        {
                          "type": "Literal",
                          "value": true,
                          "raw": "true",
                          "start": 850,
                          "end": 854
                        }
                      ],
                      "start": 849,
                      "end": 855
                    },
                    "start": 845,
                    "end": 855
                  },
                  "directive": null,
                  "start": 845,
                  "end": 856
                }
              ],
              "start": 835,
              "end": 885
            },
            "start": 746,
            "end": 885
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 890,
              "end": 891
            },
            "directive": null,
            "start": 890,
            "end": 892
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "CallExpression",
              "callee": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 942,
                  "end": 943
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "push",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 944,
                  "end": 948
                },
                "optional": false,
                "computed": false,
                "start": 942,
                "end": 948
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Literal",
                  "value": 99,
                  "raw": "99",
                  "start": 949,
                  "end": 951
                }
              ],
              "optional": false,
              "start": 942,
              "end": 952
            },
            "directive": null,
            "start": 942,
            "end": 953
          }
        ],
        "start": 729,
        "end": 965
      },
      "expression": false,
      "start": 715,
      "end": 965
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f7",
        "optional": false,
        "typeAnnotation": null,
        "start": 976,
        "end": 978
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
                  "start": 991,
                  "end": 992
                },
                "init": {
                  "type": "ArrayExpression",
                  "elements": [],
                  "start": 995,
                  "end": 997
                },
                "definite": false,
                "start": 991,
                "end": 997
              }
            ],
            "declare": false,
            "start": 987,
            "end": 998
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "CallExpression",
              "callee": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1039,
                  "end": 1040
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "push",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1041,
                  "end": 1045
                },
                "optional": false,
                "computed": false,
                "start": 1039,
                "end": 1045
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Literal",
                  "value": 5,
                  "raw": "5",
                  "start": 1046,
                  "end": 1047
                }
              ],
              "optional": false,
              "start": 1039,
              "end": 1048
            },
            "directive": null,
            "start": 1039,
            "end": 1049
          },
          {
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
                  "start": 1058,
                  "end": 1059
                },
                "init": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1062,
                  "end": 1063
                },
                "definite": false,
                "start": 1058,
                "end": 1063
              }
            ],
            "declare": false,
            "start": 1054,
            "end": 1064
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "CallExpression",
              "callee": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1110,
                  "end": 1111
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "push",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1112,
                  "end": 1116
                },
                "optional": false,
                "computed": false,
                "start": 1110,
                "end": 1116
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Literal",
                  "value": "hello",
                  "raw": "\"hello\"",
                  "start": 1117,
                  "end": 1124
                }
              ],
              "optional": false,
              "start": 1110,
              "end": 1125
            },
            "directive": null,
            "start": 1110,
            "end": 1126
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "CallExpression",
              "callee": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "y",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1138,
                  "end": 1139
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "push",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1140,
                  "end": 1144
                },
                "optional": false,
                "computed": false,
                "start": 1138,
                "end": 1144
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Literal",
                  "value": "hello",
                  "raw": "\"hello\"",
                  "start": 1145,
                  "end": 1152
                }
              ],
              "optional": false,
              "start": 1138,
              "end": 1153
            },
            "directive": null,
            "start": 1138,
            "end": 1154
          }
        ],
        "start": 981,
        "end": 1166
      },
      "expression": false,
      "start": 967,
      "end": 1166
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f8",
        "optional": false,
        "typeAnnotation": null,
        "start": 1177,
        "end": 1179
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
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1194,
                  "end": 1195
                },
                "init": {
                  "type": "ArrayExpression",
                  "elements": [],
                  "start": 1198,
                  "end": 1200
                },
                "definite": false,
                "start": 1194,
                "end": 1200
              }
            ],
            "declare": false,
            "start": 1188,
            "end": 1201
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "CallExpression",
              "callee": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1249,
                  "end": 1250
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "push",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1251,
                  "end": 1255
                },
                "optional": false,
                "computed": false,
                "start": 1249,
                "end": 1255
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Literal",
                  "value": 5,
                  "raw": "5",
                  "start": 1256,
                  "end": 1257
                }
              ],
              "optional": false,
              "start": 1249,
              "end": 1258
            },
            "directive": null,
            "start": 1249,
            "end": 1259
          },
          {
            "type": "FunctionDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "g",
              "optional": false,
              "typeAnnotation": null,
              "start": 1273,
              "end": 1274
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
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1287,
                    "end": 1288
                  },
                  "directive": null,
                  "start": 1287,
                  "end": 1289
                }
              ],
              "start": 1277,
              "end": 1320
            },
            "expression": false,
            "start": 1264,
            "end": 1320
          }
        ],
        "start": 1182,
        "end": 1322
      },
      "expression": false,
      "start": 1168,
      "end": 1322
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 1322
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
    "value": "cond",
    "start": 17,
    "end": 21
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 21,
    "end": 22
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 22,
    "end": 23
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 23,
    "end": 24
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 25,
    "end": 32
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 32,
    "end": 33
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 35,
    "end": 43
  },
  {
    "type": "Identifier",
    "value": "f1",
    "start": 44,
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
    "value": "let",
    "start": 55,
    "end": 58
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 59,
    "end": 60
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 61,
    "end": 62
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 63,
    "end": 64
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 64,
    "end": 65
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 65,
    "end": 66
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 114,
    "end": 117
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 118,
    "end": 119
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 120,
    "end": 121
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 122,
    "end": 123
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 123,
    "end": 124
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 155,
    "end": 156
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 156,
    "end": 157
  },
  {
    "type": "Identifier",
    "value": "push",
    "start": 157,
    "end": 161
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 161,
    "end": 162
  },
  {
    "type": "Numeric",
    "value": "5",
    "start": 162,
    "end": 163
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 163,
    "end": 164
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 164,
    "end": 165
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 170,
    "end": 173
  },
  {
    "type": "Identifier",
    "value": "z",
    "start": 174,
    "end": 175
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 176,
    "end": 177
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 178,
    "end": 179
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 179,
    "end": 180
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 181,
    "end": 182
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 184,
    "end": 192
  },
  {
    "type": "Identifier",
    "value": "f2",
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
    "value": "{",
    "start": 198,
    "end": 199
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 204,
    "end": 207
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 208,
    "end": 209
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 209,
    "end": 210
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 263,
    "end": 264
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 265,
    "end": 266
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 267,
    "end": 268
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 268,
    "end": 269
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 269,
    "end": 270
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 275,
    "end": 278
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 279,
    "end": 280
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 281,
    "end": 282
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 283,
    "end": 284
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 284,
    "end": 285
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 316,
    "end": 317
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 317,
    "end": 318
  },
  {
    "type": "Identifier",
    "value": "push",
    "start": 318,
    "end": 322
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 322,
    "end": 323
  },
  {
    "type": "Numeric",
    "value": "5",
    "start": 323,
    "end": 324
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 324,
    "end": 325
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 325,
    "end": 326
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 331,
    "end": 334
  },
  {
    "type": "Identifier",
    "value": "z",
    "start": 335,
    "end": 336
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 337,
    "end": 338
  },
  {
    "type": "Identifier",
    "value": "x",
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
    "type": "Keyword",
    "value": "function",
    "start": 345,
    "end": 353
  },
  {
    "type": "Identifier",
    "value": "f3",
    "start": 354,
    "end": 356
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 356,
    "end": 357
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 357,
    "end": 358
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 359,
    "end": 360
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 365,
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
    "value": "=",
    "start": 371,
    "end": 372
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 373,
    "end": 374
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 374,
    "end": 375
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 375,
    "end": 376
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 424,
    "end": 425
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 425,
    "end": 426
  },
  {
    "type": "Identifier",
    "value": "push",
    "start": 426,
    "end": 430
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 430,
    "end": 431
  },
  {
    "type": "Numeric",
    "value": "5",
    "start": 431,
    "end": 432
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 432,
    "end": 433
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 433,
    "end": 434
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 439,
    "end": 447
  },
  {
    "type": "Identifier",
    "value": "g",
    "start": 448,
    "end": 449
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 449,
    "end": 450
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 450,
    "end": 451
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 452,
    "end": 453
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 462,
    "end": 463
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 463,
    "end": 464
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 499,
    "end": 500
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 501,
    "end": 502
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 504,
    "end": 512
  },
  {
    "type": "Identifier",
    "value": "f4",
    "start": 513,
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
    "value": "let",
    "start": 524,
    "end": 527
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 528,
    "end": 529
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 529,
    "end": 530
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 535,
    "end": 536
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 537,
    "end": 538
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 539,
    "end": 540
  },
  {
    "type": "Numeric",
    "value": "5",
    "start": 540,
    "end": 541
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 541,
    "end": 542
  },
  {
    "type": "String",
    "value": "\"hello\"",
    "start": 543,
    "end": 550
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 550,
    "end": 551
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 551,
    "end": 552
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 580,
    "end": 581
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 581,
    "end": 582
  },
  {
    "type": "Identifier",
    "value": "push",
    "start": 582,
    "end": 586
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 586,
    "end": 587
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 587,
    "end": 591
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 591,
    "end": 592
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 592,
    "end": 593
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 608,
    "end": 609
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 611,
    "end": 619
  },
  {
    "type": "Identifier",
    "value": "f5",
    "start": 620,
    "end": 622
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 622,
    "end": 623
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 623,
    "end": 624
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 625,
    "end": 626
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 631,
    "end": 634
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 635,
    "end": 636
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 637,
    "end": 638
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 639,
    "end": 640
  },
  {
    "type": "Numeric",
    "value": "5",
    "start": 640,
    "end": 641
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 641,
    "end": 642
  },
  {
    "type": "String",
    "value": "\"hello\"",
    "start": 643,
    "end": 650
  },
  {
    "type": "Punctuator",
    "value": "]",
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
    "type": "Identifier",
    "value": "x",
    "start": 680,
    "end": 681
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 681,
    "end": 682
  },
  {
    "type": "Identifier",
    "value": "push",
    "start": 682,
    "end": 686
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 686,
    "end": 687
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 687,
    "end": 691
  },
  {
    "type": "Punctuator",
    "value": ")",
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
    "type": "Punctuator",
    "value": "}",
    "start": 712,
    "end": 713
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 715,
    "end": 723
  },
  {
    "type": "Identifier",
    "value": "f6",
    "start": 724,
    "end": 726
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 726,
    "end": 727
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 727,
    "end": 728
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 729,
    "end": 730
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 735,
    "end": 738
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 739,
    "end": 740
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 740,
    "end": 741
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 746,
    "end": 748
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 749,
    "end": 750
  },
  {
    "type": "Identifier",
    "value": "cond",
    "start": 750,
    "end": 754
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 754,
    "end": 755
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 755,
    "end": 756
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 756,
    "end": 757
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 758,
    "end": 759
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 768,
    "end": 769
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 770,
    "end": 771
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 772,
    "end": 773
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 773,
    "end": 774
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 774,
    "end": 775
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 784,
    "end": 785
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 785,
    "end": 786
  },
  {
    "type": "Identifier",
    "value": "push",
    "start": 786,
    "end": 790
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 790,
    "end": 791
  },
  {
    "type": "Numeric",
    "value": "5",
    "start": 791,
    "end": 792
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 792,
    "end": 793
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 793,
    "end": 794
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 803,
    "end": 804
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 804,
    "end": 805
  },
  {
    "type": "Identifier",
    "value": "push",
    "start": 805,
    "end": 809
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 809,
    "end": 810
  },
  {
    "type": "String",
    "value": "\"hello\"",
    "start": 810,
    "end": 817
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 817,
    "end": 818
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 818,
    "end": 819
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 824,
    "end": 825
  },
  {
    "type": "Keyword",
    "value": "else",
    "start": 830,
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
    "start": 845,
    "end": 846
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 847,
    "end": 848
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 849,
    "end": 850
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 850,
    "end": 854
  },
  {
    "type": "Punctuator",
    "value": "]",
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
    "start": 884,
    "end": 885
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 890,
    "end": 891
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 891,
    "end": 892
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 942,
    "end": 943
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 943,
    "end": 944
  },
  {
    "type": "Identifier",
    "value": "push",
    "start": 944,
    "end": 948
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 948,
    "end": 949
  },
  {
    "type": "Numeric",
    "value": "99",
    "start": 949,
    "end": 951
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 951,
    "end": 952
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 952,
    "end": 953
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 964,
    "end": 965
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 967,
    "end": 975
  },
  {
    "type": "Identifier",
    "value": "f7",
    "start": 976,
    "end": 978
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 978,
    "end": 979
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 979,
    "end": 980
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 981,
    "end": 982
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 987,
    "end": 990
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 991,
    "end": 992
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 993,
    "end": 994
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 995,
    "end": 996
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 996,
    "end": 997
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 997,
    "end": 998
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1039,
    "end": 1040
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1040,
    "end": 1041
  },
  {
    "type": "Identifier",
    "value": "push",
    "start": 1041,
    "end": 1045
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1045,
    "end": 1046
  },
  {
    "type": "Numeric",
    "value": "5",
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
    "value": ";",
    "start": 1048,
    "end": 1049
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 1054,
    "end": 1057
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 1058,
    "end": 1059
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1060,
    "end": 1061
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1062,
    "end": 1063
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1063,
    "end": 1064
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1110,
    "end": 1111
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1111,
    "end": 1112
  },
  {
    "type": "Identifier",
    "value": "push",
    "start": 1112,
    "end": 1116
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1116,
    "end": 1117
  },
  {
    "type": "String",
    "value": "\"hello\"",
    "start": 1117,
    "end": 1124
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1124,
    "end": 1125
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1125,
    "end": 1126
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 1138,
    "end": 1139
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1139,
    "end": 1140
  },
  {
    "type": "Identifier",
    "value": "push",
    "start": 1140,
    "end": 1144
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1144,
    "end": 1145
  },
  {
    "type": "String",
    "value": "\"hello\"",
    "start": 1145,
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
    "value": ";",
    "start": 1153,
    "end": 1154
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1165,
    "end": 1166
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1168,
    "end": 1176
  },
  {
    "type": "Identifier",
    "value": "f8",
    "start": 1177,
    "end": 1179
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1179,
    "end": 1180
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1180,
    "end": 1181
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1182,
    "end": 1183
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 1188,
    "end": 1193
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1194,
    "end": 1195
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1196,
    "end": 1197
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1198,
    "end": 1199
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1199,
    "end": 1200
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1200,
    "end": 1201
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1249,
    "end": 1250
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1250,
    "end": 1251
  },
  {
    "type": "Identifier",
    "value": "push",
    "start": 1251,
    "end": 1255
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1255,
    "end": 1256
  },
  {
    "type": "Numeric",
    "value": "5",
    "start": 1256,
    "end": 1257
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1257,
    "end": 1258
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1258,
    "end": 1259
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1264,
    "end": 1272
  },
  {
    "type": "Identifier",
    "value": "g",
    "start": 1273,
    "end": 1274
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1274,
    "end": 1275
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1275,
    "end": 1276
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1277,
    "end": 1278
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1287,
    "end": 1288
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1288,
    "end": 1289
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1319,
    "end": 1320
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1321,
    "end": 1322
  }
]
```
