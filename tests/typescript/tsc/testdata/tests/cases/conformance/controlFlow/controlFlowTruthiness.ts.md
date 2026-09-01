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
        "name": "foo",
        "optional": false,
        "typeAnnotation": null,
        "start": 17,
        "end": 20
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": null,
      "params": [],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSUnionType",
          "types": [
            {
              "type": "TSStringKeyword",
              "start": 24,
              "end": 30
            },
            {
              "type": "TSUndefinedKeyword",
              "start": 33,
              "end": 42
            }
          ],
          "start": 24,
          "end": 42
        },
        "start": 22,
        "end": 42
      },
      "body": null,
      "expression": false,
      "start": 0,
      "end": 43
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f1",
        "optional": false,
        "typeAnnotation": null,
        "start": 54,
        "end": 56
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
                  "start": 69,
                  "end": 70
                },
                "init": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "foo",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 73,
                    "end": 76
                  },
                  "typeArguments": null,
                  "arguments": [],
                  "optional": false,
                  "start": 73,
                  "end": 78
                },
                "definite": false,
                "start": 69,
                "end": 78
              }
            ],
            "declare": false,
            "start": 65,
            "end": 79
          },
          {
            "type": "IfStatement",
            "test": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 88,
              "end": 89
            },
            "consequent": {
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
                    "start": 101,
                    "end": 102
                  },
                  "directive": null,
                  "start": 101,
                  "end": 103
                }
              ],
              "start": 91,
              "end": 119
            },
            "alternate": {
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
                    "start": 139,
                    "end": 140
                  },
                  "directive": null,
                  "start": 139,
                  "end": 141
                }
              ],
              "start": 129,
              "end": 169
            },
            "start": 84,
            "end": 169
          }
        ],
        "start": 59,
        "end": 171
      },
      "expression": false,
      "start": 45,
      "end": 171
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f2",
        "optional": false,
        "typeAnnotation": null,
        "start": 182,
        "end": 184
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
                      "type": "TSUnionType",
                      "types": [
                        {
                          "type": "TSStringKeyword",
                          "start": 200,
                          "end": 206
                        },
                        {
                          "type": "TSUndefinedKeyword",
                          "start": 209,
                          "end": 218
                        }
                      ],
                      "start": 200,
                      "end": 218
                    },
                    "start": 198,
                    "end": 218
                  },
                  "start": 197,
                  "end": 218
                },
                "init": null,
                "definite": false,
                "start": 197,
                "end": 218
              }
            ],
            "declare": false,
            "start": 193,
            "end": 219
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
                "start": 224,
                "end": 225
              },
              "right": {
                "type": "CallExpression",
                "callee": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "foo",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 228,
                  "end": 231
                },
                "typeArguments": null,
                "arguments": [],
                "optional": false,
                "start": 228,
                "end": 233
              },
              "start": 224,
              "end": 233
            },
            "directive": null,
            "start": 224,
            "end": 234
          },
          {
            "type": "IfStatement",
            "test": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 243,
              "end": 244
            },
            "consequent": {
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
                    "start": 256,
                    "end": 257
                  },
                  "directive": null,
                  "start": 256,
                  "end": 258
                }
              ],
              "start": 246,
              "end": 274
            },
            "alternate": {
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
                    "start": 294,
                    "end": 295
                  },
                  "directive": null,
                  "start": 294,
                  "end": 296
                }
              ],
              "start": 284,
              "end": 324
            },
            "start": 239,
            "end": 324
          }
        ],
        "start": 187,
        "end": 326
      },
      "expression": false,
      "start": 173,
      "end": 326
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f3",
        "optional": false,
        "typeAnnotation": null,
        "start": 337,
        "end": 339
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
                      "type": "TSUnionType",
                      "types": [
                        {
                          "type": "TSStringKeyword",
                          "start": 355,
                          "end": 361
                        },
                        {
                          "type": "TSUndefinedKeyword",
                          "start": 364,
                          "end": 373
                        }
                      ],
                      "start": 355,
                      "end": 373
                    },
                    "start": 353,
                    "end": 373
                  },
                  "start": 352,
                  "end": 373
                },
                "init": null,
                "definite": false,
                "start": 352,
                "end": 373
              }
            ],
            "declare": false,
            "start": 348,
            "end": 374
          },
          {
            "type": "IfStatement",
            "test": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 383,
                "end": 384
              },
              "right": {
                "type": "CallExpression",
                "callee": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "foo",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 387,
                  "end": 390
                },
                "typeArguments": null,
                "arguments": [],
                "optional": false,
                "start": 387,
                "end": 392
              },
              "start": 383,
              "end": 392
            },
            "consequent": {
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
                    "start": 404,
                    "end": 405
                  },
                  "directive": null,
                  "start": 404,
                  "end": 406
                }
              ],
              "start": 394,
              "end": 422
            },
            "alternate": {
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
                    "start": 442,
                    "end": 443
                  },
                  "directive": null,
                  "start": 442,
                  "end": 444
                }
              ],
              "start": 432,
              "end": 472
            },
            "start": 379,
            "end": 472
          }
        ],
        "start": 342,
        "end": 474
      },
      "expression": false,
      "start": 328,
      "end": 474
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f4",
        "optional": false,
        "typeAnnotation": null,
        "start": 485,
        "end": 487
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
                      "type": "TSUnionType",
                      "types": [
                        {
                          "type": "TSStringKeyword",
                          "start": 503,
                          "end": 509
                        },
                        {
                          "type": "TSUndefinedKeyword",
                          "start": 512,
                          "end": 521
                        }
                      ],
                      "start": 503,
                      "end": 521
                    },
                    "start": 501,
                    "end": 521
                  },
                  "start": 500,
                  "end": 521
                },
                "init": null,
                "definite": false,
                "start": 500,
                "end": 521
              }
            ],
            "declare": false,
            "start": 496,
            "end": 522
          },
          {
            "type": "IfStatement",
            "test": {
              "type": "UnaryExpression",
              "operator": "!",
              "argument": {
                "type": "AssignmentExpression",
                "operator": "=",
                "left": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 533,
                  "end": 534
                },
                "right": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "foo",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 537,
                    "end": 540
                  },
                  "typeArguments": null,
                  "arguments": [],
                  "optional": false,
                  "start": 537,
                  "end": 542
                },
                "start": 533,
                "end": 542
              },
              "prefix": true,
              "start": 531,
              "end": 543
            },
            "consequent": {
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
                    "start": 555,
                    "end": 556
                  },
                  "directive": null,
                  "start": 555,
                  "end": 557
                }
              ],
              "start": 545,
              "end": 585
            },
            "alternate": {
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
                    "start": 605,
                    "end": 606
                  },
                  "directive": null,
                  "start": 605,
                  "end": 607
                }
              ],
              "start": 595,
              "end": 623
            },
            "start": 527,
            "end": 623
          }
        ],
        "start": 490,
        "end": 625
      },
      "expression": false,
      "start": 476,
      "end": 625
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f5",
        "optional": false,
        "typeAnnotation": null,
        "start": 636,
        "end": 638
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
                      "type": "TSUnionType",
                      "types": [
                        {
                          "type": "TSStringKeyword",
                          "start": 654,
                          "end": 660
                        },
                        {
                          "type": "TSUndefinedKeyword",
                          "start": 663,
                          "end": 672
                        }
                      ],
                      "start": 654,
                      "end": 672
                    },
                    "start": 652,
                    "end": 672
                  },
                  "start": 651,
                  "end": 672
                },
                "init": null,
                "definite": false,
                "start": 651,
                "end": 672
              }
            ],
            "declare": false,
            "start": 647,
            "end": 673
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
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSUnionType",
                      "types": [
                        {
                          "type": "TSStringKeyword",
                          "start": 685,
                          "end": 691
                        },
                        {
                          "type": "TSUndefinedKeyword",
                          "start": 694,
                          "end": 703
                        }
                      ],
                      "start": 685,
                      "end": 703
                    },
                    "start": 683,
                    "end": 703
                  },
                  "start": 682,
                  "end": 703
                },
                "init": null,
                "definite": false,
                "start": 682,
                "end": 703
              }
            ],
            "declare": false,
            "start": 678,
            "end": 704
          },
          {
            "type": "IfStatement",
            "test": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 713,
                "end": 714
              },
              "right": {
                "type": "AssignmentExpression",
                "operator": "=",
                "left": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "y",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 717,
                  "end": 718
                },
                "right": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "foo",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 721,
                    "end": 724
                  },
                  "typeArguments": null,
                  "arguments": [],
                  "optional": false,
                  "start": 721,
                  "end": 726
                },
                "start": 717,
                "end": 726
              },
              "start": 713,
              "end": 726
            },
            "consequent": {
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
                    "start": 738,
                    "end": 739
                  },
                  "directive": null,
                  "start": 738,
                  "end": 740
                },
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "y",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 759,
                    "end": 760
                  },
                  "directive": null,
                  "start": 759,
                  "end": 761
                }
              ],
              "start": 728,
              "end": 789
            },
            "alternate": {
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
                    "start": 809,
                    "end": 810
                  },
                  "directive": null,
                  "start": 809,
                  "end": 811
                },
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "y",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 842,
                    "end": 843
                  },
                  "directive": null,
                  "start": 842,
                  "end": 844
                }
              ],
              "start": 799,
              "end": 872
            },
            "start": 709,
            "end": 872
          }
        ],
        "start": 641,
        "end": 874
      },
      "expression": false,
      "start": 627,
      "end": 874
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f6",
        "optional": false,
        "typeAnnotation": null,
        "start": 885,
        "end": 887
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
                      "type": "TSUnionType",
                      "types": [
                        {
                          "type": "TSStringKeyword",
                          "start": 903,
                          "end": 909
                        },
                        {
                          "type": "TSUndefinedKeyword",
                          "start": 912,
                          "end": 921
                        }
                      ],
                      "start": 903,
                      "end": 921
                    },
                    "start": 901,
                    "end": 921
                  },
                  "start": 900,
                  "end": 921
                },
                "init": null,
                "definite": false,
                "start": 900,
                "end": 921
              }
            ],
            "declare": false,
            "start": 896,
            "end": 922
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
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSUnionType",
                      "types": [
                        {
                          "type": "TSStringKeyword",
                          "start": 934,
                          "end": 940
                        },
                        {
                          "type": "TSUndefinedKeyword",
                          "start": 943,
                          "end": 952
                        }
                      ],
                      "start": 934,
                      "end": 952
                    },
                    "start": 932,
                    "end": 952
                  },
                  "start": 931,
                  "end": 952
                },
                "init": null,
                "definite": false,
                "start": 931,
                "end": 952
              }
            ],
            "declare": false,
            "start": 927,
            "end": 953
          },
          {
            "type": "IfStatement",
            "test": {
              "type": "SequenceExpression",
              "expressions": [
                {
                  "type": "AssignmentExpression",
                  "operator": "=",
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 962,
                    "end": 963
                  },
                  "right": {
                    "type": "CallExpression",
                    "callee": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "foo",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 966,
                      "end": 969
                    },
                    "typeArguments": null,
                    "arguments": [],
                    "optional": false,
                    "start": 966,
                    "end": 971
                  },
                  "start": 962,
                  "end": 971
                },
                {
                  "type": "AssignmentExpression",
                  "operator": "=",
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "y",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 973,
                    "end": 974
                  },
                  "right": {
                    "type": "CallExpression",
                    "callee": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "foo",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 977,
                      "end": 980
                    },
                    "typeArguments": null,
                    "arguments": [],
                    "optional": false,
                    "start": 977,
                    "end": 982
                  },
                  "start": 973,
                  "end": 982
                }
              ],
              "start": 962,
              "end": 982
            },
            "consequent": {
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
                    "start": 994,
                    "end": 995
                  },
                  "directive": null,
                  "start": 994,
                  "end": 996
                },
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "y",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1027,
                    "end": 1028
                  },
                  "directive": null,
                  "start": 1027,
                  "end": 1029
                }
              ],
              "start": 984,
              "end": 1045
            },
            "alternate": {
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
                    "start": 1065,
                    "end": 1066
                  },
                  "directive": null,
                  "start": 1065,
                  "end": 1067
                },
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "y",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1098,
                    "end": 1099
                  },
                  "directive": null,
                  "start": 1098,
                  "end": 1100
                }
              ],
              "start": 1055,
              "end": 1128
            },
            "start": 958,
            "end": 1128
          }
        ],
        "start": 890,
        "end": 1130
      },
      "expression": false,
      "start": 876,
      "end": 1130
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f7",
        "optional": false,
        "typeAnnotation": null,
        "start": 1141,
        "end": 1143
      },
      "generator": false,
      "async": false,
      "declare": false,
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
              "type": "TSTypeLiteral",
              "members": [],
              "start": 1147,
              "end": 1149
            },
            "start": 1145,
            "end": 1149
          },
          "start": 1144,
          "end": 1149
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "IfStatement",
            "test": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 1161,
              "end": 1162
            },
            "consequent": {
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
                    "start": 1174,
                    "end": 1175
                  },
                  "directive": null,
                  "start": 1174,
                  "end": 1176
                }
              ],
              "start": 1164,
              "end": 1188
            },
            "alternate": {
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
                    "start": 1208,
                    "end": 1209
                  },
                  "directive": null,
                  "start": 1208,
                  "end": 1210
                }
              ],
              "start": 1198,
              "end": 1222
            },
            "start": 1157,
            "end": 1222
          }
        ],
        "start": 1151,
        "end": 1224
      },
      "expression": false,
      "start": 1132,
      "end": 1224
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f8",
        "optional": false,
        "typeAnnotation": null,
        "start": 1235,
        "end": 1237
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null,
              "start": 1238,
              "end": 1239
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 1238,
            "end": 1239
          }
        ],
        "start": 1237,
        "end": 1240
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null,
                "start": 1244,
                "end": 1245
              },
              "typeArguments": null,
              "start": 1244,
              "end": 1245
            },
            "start": 1242,
            "end": 1245
          },
          "start": 1241,
          "end": 1245
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "IfStatement",
            "test": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 1257,
              "end": 1258
            },
            "consequent": {
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
                    "start": 1270,
                    "end": 1271
                  },
                  "directive": null,
                  "start": 1270,
                  "end": 1272
                }
              ],
              "start": 1260,
              "end": 1284
            },
            "alternate": {
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
                    "start": 1304,
                    "end": 1305
                  },
                  "directive": null,
                  "start": 1304,
                  "end": 1306
                }
              ],
              "start": 1294,
              "end": 1318
            },
            "start": 1253,
            "end": 1318
          }
        ],
        "start": 1247,
        "end": 1320
      },
      "expression": false,
      "start": 1226,
      "end": 1320
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f9",
        "optional": false,
        "typeAnnotation": null,
        "start": 1331,
        "end": 1333
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null,
              "start": 1334,
              "end": 1335
            },
            "constraint": {
              "type": "TSObjectKeyword",
              "start": 1344,
              "end": 1350
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 1334,
            "end": 1350
          }
        ],
        "start": 1333,
        "end": 1351
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null,
                "start": 1355,
                "end": 1356
              },
              "typeArguments": null,
              "start": 1355,
              "end": 1356
            },
            "start": 1353,
            "end": 1356
          },
          "start": 1352,
          "end": 1356
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "IfStatement",
            "test": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 1368,
              "end": 1369
            },
            "consequent": {
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
                    "start": 1381,
                    "end": 1382
                  },
                  "directive": null,
                  "start": 1381,
                  "end": 1383
                }
              ],
              "start": 1371,
              "end": 1395
            },
            "alternate": {
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
                    "start": 1415,
                    "end": 1416
                  },
                  "directive": null,
                  "start": 1415,
                  "end": 1417
                }
              ],
              "start": 1405,
              "end": 1432
            },
            "start": 1364,
            "end": 1432
          }
        ],
        "start": 1358,
        "end": 1434
      },
      "expression": false,
      "start": 1322,
      "end": 1434
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 1434
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
    "value": "foo",
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
    "type": "Punctuator",
    "value": ")",
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
    "value": "string",
    "start": 24,
    "end": 30
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 31,
    "end": 32
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 33,
    "end": 42
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 42,
    "end": 43
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 45,
    "end": 53
  },
  {
    "type": "Identifier",
    "value": "f1",
    "start": 54,
    "end": 56
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 56,
    "end": 57
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 57,
    "end": 58
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 59,
    "end": 60
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 65,
    "end": 68
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 69,
    "end": 70
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 71,
    "end": 72
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 73,
    "end": 76
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 76,
    "end": 77
  },
  {
    "type": "Punctuator",
    "value": ")",
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
    "type": "Keyword",
    "value": "if",
    "start": 84,
    "end": 86
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 87,
    "end": 88
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 88,
    "end": 89
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 89,
    "end": 90
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 91,
    "end": 92
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 101,
    "end": 102
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 102,
    "end": 103
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 118,
    "end": 119
  },
  {
    "type": "Keyword",
    "value": "else",
    "start": 124,
    "end": 128
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 129,
    "end": 130
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 139,
    "end": 140
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 140,
    "end": 141
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 168,
    "end": 169
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 170,
    "end": 171
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 173,
    "end": 181
  },
  {
    "type": "Identifier",
    "value": "f2",
    "start": 182,
    "end": 184
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 184,
    "end": 185
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 185,
    "end": 186
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 187,
    "end": 188
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 193,
    "end": 196
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 197,
    "end": 198
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 198,
    "end": 199
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 200,
    "end": 206
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 207,
    "end": 208
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 209,
    "end": 218
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 218,
    "end": 219
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 224,
    "end": 225
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 226,
    "end": 227
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 228,
    "end": 231
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 231,
    "end": 232
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 232,
    "end": 233
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 233,
    "end": 234
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 239,
    "end": 241
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 242,
    "end": 243
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 243,
    "end": 244
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 244,
    "end": 245
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 246,
    "end": 247
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 256,
    "end": 257
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 257,
    "end": 258
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 273,
    "end": 274
  },
  {
    "type": "Keyword",
    "value": "else",
    "start": 279,
    "end": 283
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 284,
    "end": 285
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 294,
    "end": 295
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 295,
    "end": 296
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 323,
    "end": 324
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 325,
    "end": 326
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 328,
    "end": 336
  },
  {
    "type": "Identifier",
    "value": "f3",
    "start": 337,
    "end": 339
  },
  {
    "type": "Punctuator",
    "value": "(",
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
    "type": "Keyword",
    "value": "let",
    "start": 348,
    "end": 351
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 352,
    "end": 353
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 353,
    "end": 354
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 355,
    "end": 361
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 362,
    "end": 363
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 364,
    "end": 373
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 373,
    "end": 374
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 379,
    "end": 381
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 382,
    "end": 383
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 383,
    "end": 384
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 385,
    "end": 386
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 387,
    "end": 390
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 390,
    "end": 391
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 391,
    "end": 392
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 392,
    "end": 393
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 394,
    "end": 395
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 404,
    "end": 405
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 405,
    "end": 406
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 421,
    "end": 422
  },
  {
    "type": "Keyword",
    "value": "else",
    "start": 427,
    "end": 431
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 432,
    "end": 433
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 442,
    "end": 443
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 443,
    "end": 444
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 471,
    "end": 472
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 473,
    "end": 474
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 476,
    "end": 484
  },
  {
    "type": "Identifier",
    "value": "f4",
    "start": 485,
    "end": 487
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 487,
    "end": 488
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 488,
    "end": 489
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 490,
    "end": 491
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 496,
    "end": 499
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 500,
    "end": 501
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 501,
    "end": 502
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 503,
    "end": 509
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 510,
    "end": 511
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 512,
    "end": 521
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 521,
    "end": 522
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 527,
    "end": 529
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 530,
    "end": 531
  },
  {
    "type": "Punctuator",
    "value": "!",
    "start": 531,
    "end": 532
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 532,
    "end": 533
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 533,
    "end": 534
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 535,
    "end": 536
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 537,
    "end": 540
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 540,
    "end": 541
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 541,
    "end": 542
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 542,
    "end": 543
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 543,
    "end": 544
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 545,
    "end": 546
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 555,
    "end": 556
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 556,
    "end": 557
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 584,
    "end": 585
  },
  {
    "type": "Keyword",
    "value": "else",
    "start": 590,
    "end": 594
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 595,
    "end": 596
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 605,
    "end": 606
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 606,
    "end": 607
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 622,
    "end": 623
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 624,
    "end": 625
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 627,
    "end": 635
  },
  {
    "type": "Identifier",
    "value": "f5",
    "start": 636,
    "end": 638
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 638,
    "end": 639
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 639,
    "end": 640
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 641,
    "end": 642
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 647,
    "end": 650
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 651,
    "end": 652
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 652,
    "end": 653
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 654,
    "end": 660
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 661,
    "end": 662
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 663,
    "end": 672
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 672,
    "end": 673
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 678,
    "end": 681
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 682,
    "end": 683
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 683,
    "end": 684
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 685,
    "end": 691
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 692,
    "end": 693
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 694,
    "end": 703
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 703,
    "end": 704
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 709,
    "end": 711
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 712,
    "end": 713
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 713,
    "end": 714
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 715,
    "end": 716
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 717,
    "end": 718
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 719,
    "end": 720
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 721,
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
    "value": ")",
    "start": 726,
    "end": 727
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 728,
    "end": 729
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 738,
    "end": 739
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 739,
    "end": 740
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 759,
    "end": 760
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 760,
    "end": 761
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 788,
    "end": 789
  },
  {
    "type": "Keyword",
    "value": "else",
    "start": 794,
    "end": 798
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 799,
    "end": 800
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 809,
    "end": 810
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 810,
    "end": 811
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 842,
    "end": 843
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 843,
    "end": 844
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 871,
    "end": 872
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 873,
    "end": 874
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 876,
    "end": 884
  },
  {
    "type": "Identifier",
    "value": "f6",
    "start": 885,
    "end": 887
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 887,
    "end": 888
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 888,
    "end": 889
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 890,
    "end": 891
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 896,
    "end": 899
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 900,
    "end": 901
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 901,
    "end": 902
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 903,
    "end": 909
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 910,
    "end": 911
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 912,
    "end": 921
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 921,
    "end": 922
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 927,
    "end": 930
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 931,
    "end": 932
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 932,
    "end": 933
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 934,
    "end": 940
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 941,
    "end": 942
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 943,
    "end": 952
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 952,
    "end": 953
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 958,
    "end": 960
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 961,
    "end": 962
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 962,
    "end": 963
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 964,
    "end": 965
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 966,
    "end": 969
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 969,
    "end": 970
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 970,
    "end": 971
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 971,
    "end": 972
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 973,
    "end": 974
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 975,
    "end": 976
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 977,
    "end": 980
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 980,
    "end": 981
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 981,
    "end": 982
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 982,
    "end": 983
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 984,
    "end": 985
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 994,
    "end": 995
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 995,
    "end": 996
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 1027,
    "end": 1028
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1028,
    "end": 1029
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1044,
    "end": 1045
  },
  {
    "type": "Keyword",
    "value": "else",
    "start": 1050,
    "end": 1054
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1055,
    "end": 1056
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1065,
    "end": 1066
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1066,
    "end": 1067
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 1098,
    "end": 1099
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1099,
    "end": 1100
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1127,
    "end": 1128
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1129,
    "end": 1130
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1132,
    "end": 1140
  },
  {
    "type": "Identifier",
    "value": "f7",
    "start": 1141,
    "end": 1143
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1143,
    "end": 1144
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1144,
    "end": 1145
  },
  {
    "type": "Punctuator",
    "value": ":",
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
    "type": "Punctuator",
    "value": "}",
    "start": 1148,
    "end": 1149
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1149,
    "end": 1150
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1151,
    "end": 1152
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 1157,
    "end": 1159
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1160,
    "end": 1161
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1161,
    "end": 1162
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1162,
    "end": 1163
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1164,
    "end": 1165
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1174,
    "end": 1175
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1175,
    "end": 1176
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1187,
    "end": 1188
  },
  {
    "type": "Keyword",
    "value": "else",
    "start": 1193,
    "end": 1197
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1198,
    "end": 1199
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1208,
    "end": 1209
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1209,
    "end": 1210
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1221,
    "end": 1222
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1223,
    "end": 1224
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1226,
    "end": 1234
  },
  {
    "type": "Identifier",
    "value": "f8",
    "start": 1235,
    "end": 1237
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1237,
    "end": 1238
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1238,
    "end": 1239
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1239,
    "end": 1240
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1240,
    "end": 1241
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1241,
    "end": 1242
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1242,
    "end": 1243
  },
  {
    "type": "Identifier",
    "value": "T",
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
    "value": "if",
    "start": 1253,
    "end": 1255
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1256,
    "end": 1257
  },
  {
    "type": "Identifier",
    "value": "x",
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
    "value": "{",
    "start": 1260,
    "end": 1261
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1270,
    "end": 1271
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1271,
    "end": 1272
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1283,
    "end": 1284
  },
  {
    "type": "Keyword",
    "value": "else",
    "start": 1289,
    "end": 1293
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1294,
    "end": 1295
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1304,
    "end": 1305
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1305,
    "end": 1306
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1317,
    "end": 1318
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1319,
    "end": 1320
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1322,
    "end": 1330
  },
  {
    "type": "Identifier",
    "value": "f9",
    "start": 1331,
    "end": 1333
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1333,
    "end": 1334
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1334,
    "end": 1335
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 1336,
    "end": 1343
  },
  {
    "type": "Identifier",
    "value": "object",
    "start": 1344,
    "end": 1350
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1350,
    "end": 1351
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1351,
    "end": 1352
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1352,
    "end": 1353
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1353,
    "end": 1354
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1355,
    "end": 1356
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1356,
    "end": 1357
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1358,
    "end": 1359
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 1364,
    "end": 1366
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1367,
    "end": 1368
  },
  {
    "type": "Identifier",
    "value": "x",
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
    "type": "Identifier",
    "value": "x",
    "start": 1381,
    "end": 1382
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1382,
    "end": 1383
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1394,
    "end": 1395
  },
  {
    "type": "Keyword",
    "value": "else",
    "start": 1400,
    "end": 1404
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1405,
    "end": 1406
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1415,
    "end": 1416
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1416,
    "end": 1417
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1431,
    "end": 1432
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1433,
    "end": 1434
  }
]
```
