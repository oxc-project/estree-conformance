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
        "name": "f1",
        "optional": false,
        "typeAnnotation": null,
        "start": 31,
        "end": 33
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
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSUnionType",
                      "types": [
                        {
                          "type": "TSNumberKeyword",
                          "start": 49,
                          "end": 55
                        },
                        {
                          "type": "TSNullKeyword",
                          "start": 58,
                          "end": 62
                        }
                      ],
                      "start": 49,
                      "end": 62
                    },
                    "start": 47,
                    "end": 62
                  },
                  "start": 46,
                  "end": 62
                },
                "init": {
                  "type": "Literal",
                  "value": null,
                  "raw": "null",
                  "start": 65,
                  "end": 69
                },
                "definite": false,
                "start": 46,
                "end": 69
              }
            ],
            "declare": false,
            "start": 42,
            "end": 70
          },
          {
            "type": "TryStatement",
            "block": {
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
                      "name": "a",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 89,
                      "end": 90
                    },
                    "right": {
                      "type": "Literal",
                      "value": 123,
                      "raw": "123",
                      "start": 93,
                      "end": 96
                    },
                    "start": 89,
                    "end": 96
                  },
                  "directive": null,
                  "start": 89,
                  "end": 97
                },
                {
                  "type": "ReturnStatement",
                  "argument": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 113,
                    "end": 114
                  },
                  "start": 106,
                  "end": 115
                }
              ],
              "start": 79,
              "end": 121
            },
            "handler": {
              "type": "CatchClause",
              "param": {
                "type": "Identifier",
                "decorators": [],
                "name": "e",
                "optional": false,
                "typeAnnotation": null,
                "start": 133,
                "end": 134
              },
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ThrowStatement",
                    "argument": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "e",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 152,
                      "end": 153
                    },
                    "start": 146,
                    "end": 154
                  }
                ],
                "start": 136,
                "end": 160
              },
              "start": 126,
              "end": 160
            },
            "finalizer": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "IfStatement",
                  "test": {
                    "type": "LogicalExpression",
                    "left": {
                      "type": "BinaryExpression",
                      "left": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "a",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 187,
                        "end": 188
                      },
                      "operator": "!=",
                      "right": {
                        "type": "Literal",
                        "value": null,
                        "raw": "null",
                        "start": 192,
                        "end": 196
                      },
                      "start": 187,
                      "end": 196
                    },
                    "operator": "&&",
                    "right": {
                      "type": "BinaryExpression",
                      "left": {
                        "type": "CallExpression",
                        "callee": {
                          "type": "MemberExpression",
                          "object": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "a",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 200,
                            "end": 201
                          },
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "toFixed",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 202,
                            "end": 209
                          },
                          "optional": false,
                          "computed": false,
                          "start": 200,
                          "end": 209
                        },
                        "typeArguments": null,
                        "arguments": [
                          {
                            "type": "Literal",
                            "value": 0,
                            "raw": "0",
                            "start": 210,
                            "end": 211
                          }
                        ],
                        "optional": false,
                        "start": 200,
                        "end": 212
                      },
                      "operator": "==",
                      "right": {
                        "type": "Literal",
                        "value": "123",
                        "raw": "\"123\"",
                        "start": 216,
                        "end": 221
                      },
                      "start": 200,
                      "end": 221
                    },
                    "start": 187,
                    "end": 221
                  },
                  "consequent": {
                    "type": "BlockStatement",
                    "body": [],
                    "start": 223,
                    "end": 235
                  },
                  "alternate": null,
                  "start": 183,
                  "end": 235
                }
              ],
              "start": 173,
              "end": 241
            },
            "start": 75,
            "end": 241
          }
        ],
        "start": 36,
        "end": 243
      },
      "expression": false,
      "start": 22,
      "end": 243
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f2",
        "optional": false,
        "typeAnnotation": null,
        "start": 254,
        "end": 256
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
                          "type": "TSLiteralType",
                          "literal": {
                            "type": "Literal",
                            "value": 0,
                            "raw": "0",
                            "start": 272,
                            "end": 273
                          },
                          "start": 272,
                          "end": 273
                        },
                        {
                          "type": "TSLiteralType",
                          "literal": {
                            "type": "Literal",
                            "value": 1,
                            "raw": "1",
                            "start": 276,
                            "end": 277
                          },
                          "start": 276,
                          "end": 277
                        },
                        {
                          "type": "TSLiteralType",
                          "literal": {
                            "type": "Literal",
                            "value": 2,
                            "raw": "2",
                            "start": 280,
                            "end": 281
                          },
                          "start": 280,
                          "end": 281
                        },
                        {
                          "type": "TSLiteralType",
                          "literal": {
                            "type": "Literal",
                            "value": 3,
                            "raw": "3",
                            "start": 284,
                            "end": 285
                          },
                          "start": 284,
                          "end": 285
                        }
                      ],
                      "start": 272,
                      "end": 285
                    },
                    "start": 270,
                    "end": 285
                  },
                  "start": 269,
                  "end": 285
                },
                "init": {
                  "type": "Literal",
                  "value": 0,
                  "raw": "0",
                  "start": 288,
                  "end": 289
                },
                "definite": false,
                "start": 269,
                "end": 289
              }
            ],
            "declare": false,
            "start": 265,
            "end": 290
          },
          {
            "type": "TryStatement",
            "block": {
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
                      "start": 309,
                      "end": 310
                    },
                    "right": {
                      "type": "Literal",
                      "value": 1,
                      "raw": "1",
                      "start": 313,
                      "end": 314
                    },
                    "start": 309,
                    "end": 314
                  },
                  "directive": null,
                  "start": 309,
                  "end": 315
                }
              ],
              "start": 299,
              "end": 321
            },
            "handler": {
              "type": "CatchClause",
              "param": {
                "type": "Identifier",
                "decorators": [],
                "name": "e",
                "optional": false,
                "typeAnnotation": null,
                "start": 333,
                "end": 334
              },
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
                        "start": 346,
                        "end": 347
                      },
                      "right": {
                        "type": "Literal",
                        "value": 2,
                        "raw": "2",
                        "start": 350,
                        "end": 351
                      },
                      "start": 346,
                      "end": 351
                    },
                    "directive": null,
                    "start": 346,
                    "end": 352
                  },
                  {
                    "type": "ThrowStatement",
                    "argument": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "e",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 367,
                      "end": 368
                    },
                    "start": 361,
                    "end": 369
                  }
                ],
                "start": 336,
                "end": 375
              },
              "start": 326,
              "end": 375
            },
            "finalizer": {
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
                    "start": 398,
                    "end": 399
                  },
                  "directive": null,
                  "start": 398,
                  "end": 400
                }
              ],
              "start": 388,
              "end": 420
            },
            "start": 295,
            "end": 420
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 425,
              "end": 426
            },
            "directive": null,
            "start": 425,
            "end": 427
          }
        ],
        "start": 259,
        "end": 435
      },
      "expression": false,
      "start": 245,
      "end": 435
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f3",
        "optional": false,
        "typeAnnotation": null,
        "start": 446,
        "end": 448
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
                          "type": "TSLiteralType",
                          "literal": {
                            "type": "Literal",
                            "value": 0,
                            "raw": "0",
                            "start": 464,
                            "end": 465
                          },
                          "start": 464,
                          "end": 465
                        },
                        {
                          "type": "TSLiteralType",
                          "literal": {
                            "type": "Literal",
                            "value": 1,
                            "raw": "1",
                            "start": 468,
                            "end": 469
                          },
                          "start": 468,
                          "end": 469
                        },
                        {
                          "type": "TSLiteralType",
                          "literal": {
                            "type": "Literal",
                            "value": 2,
                            "raw": "2",
                            "start": 472,
                            "end": 473
                          },
                          "start": 472,
                          "end": 473
                        },
                        {
                          "type": "TSLiteralType",
                          "literal": {
                            "type": "Literal",
                            "value": 3,
                            "raw": "3",
                            "start": 476,
                            "end": 477
                          },
                          "start": 476,
                          "end": 477
                        }
                      ],
                      "start": 464,
                      "end": 477
                    },
                    "start": 462,
                    "end": 477
                  },
                  "start": 461,
                  "end": 477
                },
                "init": {
                  "type": "Literal",
                  "value": 0,
                  "raw": "0",
                  "start": 480,
                  "end": 481
                },
                "definite": false,
                "start": 461,
                "end": 481
              }
            ],
            "declare": false,
            "start": 457,
            "end": 482
          },
          {
            "type": "TryStatement",
            "block": {
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
                      "start": 501,
                      "end": 502
                    },
                    "right": {
                      "type": "Literal",
                      "value": 1,
                      "raw": "1",
                      "start": 505,
                      "end": 506
                    },
                    "start": 501,
                    "end": 506
                  },
                  "directive": null,
                  "start": 501,
                  "end": 507
                }
              ],
              "start": 491,
              "end": 513
            },
            "handler": {
              "type": "CatchClause",
              "param": {
                "type": "Identifier",
                "decorators": [],
                "name": "e",
                "optional": false,
                "typeAnnotation": null,
                "start": 525,
                "end": 526
              },
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
                        "start": 538,
                        "end": 539
                      },
                      "right": {
                        "type": "Literal",
                        "value": 2,
                        "raw": "2",
                        "start": 542,
                        "end": 543
                      },
                      "start": 538,
                      "end": 543
                    },
                    "directive": null,
                    "start": 538,
                    "end": 544
                  },
                  {
                    "type": "ReturnStatement",
                    "argument": null,
                    "start": 553,
                    "end": 560
                  }
                ],
                "start": 528,
                "end": 566
              },
              "start": 518,
              "end": 566
            },
            "finalizer": {
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
                    "start": 589,
                    "end": 590
                  },
                  "directive": null,
                  "start": 589,
                  "end": 591
                }
              ],
              "start": 579,
              "end": 611
            },
            "start": 487,
            "end": 611
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 616,
              "end": 617
            },
            "directive": null,
            "start": 616,
            "end": 618
          }
        ],
        "start": 451,
        "end": 626
      },
      "expression": false,
      "start": 437,
      "end": 626
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f4",
        "optional": false,
        "typeAnnotation": null,
        "start": 637,
        "end": 639
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
                          "type": "TSLiteralType",
                          "literal": {
                            "type": "Literal",
                            "value": 0,
                            "raw": "0",
                            "start": 655,
                            "end": 656
                          },
                          "start": 655,
                          "end": 656
                        },
                        {
                          "type": "TSLiteralType",
                          "literal": {
                            "type": "Literal",
                            "value": 1,
                            "raw": "1",
                            "start": 659,
                            "end": 660
                          },
                          "start": 659,
                          "end": 660
                        },
                        {
                          "type": "TSLiteralType",
                          "literal": {
                            "type": "Literal",
                            "value": 2,
                            "raw": "2",
                            "start": 663,
                            "end": 664
                          },
                          "start": 663,
                          "end": 664
                        },
                        {
                          "type": "TSLiteralType",
                          "literal": {
                            "type": "Literal",
                            "value": 3,
                            "raw": "3",
                            "start": 667,
                            "end": 668
                          },
                          "start": 667,
                          "end": 668
                        }
                      ],
                      "start": 655,
                      "end": 668
                    },
                    "start": 653,
                    "end": 668
                  },
                  "start": 652,
                  "end": 668
                },
                "init": {
                  "type": "Literal",
                  "value": 0,
                  "raw": "0",
                  "start": 671,
                  "end": 672
                },
                "definite": false,
                "start": 652,
                "end": 672
              }
            ],
            "declare": false,
            "start": 648,
            "end": 673
          },
          {
            "type": "TryStatement",
            "block": {
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
                      "start": 692,
                      "end": 693
                    },
                    "right": {
                      "type": "Literal",
                      "value": 1,
                      "raw": "1",
                      "start": 696,
                      "end": 697
                    },
                    "start": 692,
                    "end": 697
                  },
                  "directive": null,
                  "start": 692,
                  "end": 698
                }
              ],
              "start": 682,
              "end": 704
            },
            "handler": {
              "type": "CatchClause",
              "param": {
                "type": "Identifier",
                "decorators": [],
                "name": "e",
                "optional": false,
                "typeAnnotation": null,
                "start": 716,
                "end": 717
              },
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
                        "start": 729,
                        "end": 730
                      },
                      "right": {
                        "type": "Literal",
                        "value": 2,
                        "raw": "2",
                        "start": 733,
                        "end": 734
                      },
                      "start": 729,
                      "end": 734
                    },
                    "directive": null,
                    "start": 729,
                    "end": 735
                  }
                ],
                "start": 719,
                "end": 741
              },
              "start": 709,
              "end": 741
            },
            "finalizer": {
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
                    "start": 764,
                    "end": 765
                  },
                  "directive": null,
                  "start": 764,
                  "end": 766
                }
              ],
              "start": 754,
              "end": 786
            },
            "start": 678,
            "end": 786
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 791,
              "end": 792
            },
            "directive": null,
            "start": 791,
            "end": 793
          }
        ],
        "start": 642,
        "end": 805
      },
      "expression": false,
      "start": 628,
      "end": 805
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f5",
        "optional": false,
        "typeAnnotation": null,
        "start": 816,
        "end": 818
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
                          "type": "TSLiteralType",
                          "literal": {
                            "type": "Literal",
                            "value": 0,
                            "raw": "0",
                            "start": 834,
                            "end": 835
                          },
                          "start": 834,
                          "end": 835
                        },
                        {
                          "type": "TSLiteralType",
                          "literal": {
                            "type": "Literal",
                            "value": 1,
                            "raw": "1",
                            "start": 838,
                            "end": 839
                          },
                          "start": 838,
                          "end": 839
                        },
                        {
                          "type": "TSLiteralType",
                          "literal": {
                            "type": "Literal",
                            "value": 2,
                            "raw": "2",
                            "start": 842,
                            "end": 843
                          },
                          "start": 842,
                          "end": 843
                        },
                        {
                          "type": "TSLiteralType",
                          "literal": {
                            "type": "Literal",
                            "value": 3,
                            "raw": "3",
                            "start": 846,
                            "end": 847
                          },
                          "start": 846,
                          "end": 847
                        }
                      ],
                      "start": 834,
                      "end": 847
                    },
                    "start": 832,
                    "end": 847
                  },
                  "start": 831,
                  "end": 847
                },
                "init": {
                  "type": "Literal",
                  "value": 0,
                  "raw": "0",
                  "start": 850,
                  "end": 851
                },
                "definite": false,
                "start": 831,
                "end": 851
              }
            ],
            "declare": false,
            "start": 827,
            "end": 852
          },
          {
            "type": "TryStatement",
            "block": {
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
                      "start": 871,
                      "end": 872
                    },
                    "right": {
                      "type": "Literal",
                      "value": 1,
                      "raw": "1",
                      "start": 875,
                      "end": 876
                    },
                    "start": 871,
                    "end": 876
                  },
                  "directive": null,
                  "start": 871,
                  "end": 877
                },
                {
                  "type": "ReturnStatement",
                  "argument": null,
                  "start": 886,
                  "end": 893
                }
              ],
              "start": 861,
              "end": 899
            },
            "handler": {
              "type": "CatchClause",
              "param": {
                "type": "Identifier",
                "decorators": [],
                "name": "e",
                "optional": false,
                "typeAnnotation": null,
                "start": 911,
                "end": 912
              },
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
                        "start": 924,
                        "end": 925
                      },
                      "right": {
                        "type": "Literal",
                        "value": 2,
                        "raw": "2",
                        "start": 928,
                        "end": 929
                      },
                      "start": 924,
                      "end": 929
                    },
                    "directive": null,
                    "start": 924,
                    "end": 930
                  }
                ],
                "start": 914,
                "end": 936
              },
              "start": 904,
              "end": 936
            },
            "finalizer": {
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
                    "start": 959,
                    "end": 960
                  },
                  "directive": null,
                  "start": 959,
                  "end": 961
                }
              ],
              "start": 949,
              "end": 981
            },
            "start": 857,
            "end": 981
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 986,
              "end": 987
            },
            "directive": null,
            "start": 986,
            "end": 988
          }
        ],
        "start": 821,
        "end": 996
      },
      "expression": false,
      "start": 807,
      "end": 996
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f6",
        "optional": false,
        "typeAnnotation": null,
        "start": 1007,
        "end": 1009
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
                          "type": "TSLiteralType",
                          "literal": {
                            "type": "Literal",
                            "value": 0,
                            "raw": "0",
                            "start": 1025,
                            "end": 1026
                          },
                          "start": 1025,
                          "end": 1026
                        },
                        {
                          "type": "TSLiteralType",
                          "literal": {
                            "type": "Literal",
                            "value": 1,
                            "raw": "1",
                            "start": 1029,
                            "end": 1030
                          },
                          "start": 1029,
                          "end": 1030
                        },
                        {
                          "type": "TSLiteralType",
                          "literal": {
                            "type": "Literal",
                            "value": 2,
                            "raw": "2",
                            "start": 1033,
                            "end": 1034
                          },
                          "start": 1033,
                          "end": 1034
                        },
                        {
                          "type": "TSLiteralType",
                          "literal": {
                            "type": "Literal",
                            "value": 3,
                            "raw": "3",
                            "start": 1037,
                            "end": 1038
                          },
                          "start": 1037,
                          "end": 1038
                        }
                      ],
                      "start": 1025,
                      "end": 1038
                    },
                    "start": 1023,
                    "end": 1038
                  },
                  "start": 1022,
                  "end": 1038
                },
                "init": {
                  "type": "Literal",
                  "value": 0,
                  "raw": "0",
                  "start": 1041,
                  "end": 1042
                },
                "definite": false,
                "start": 1022,
                "end": 1042
              }
            ],
            "declare": false,
            "start": 1018,
            "end": 1043
          },
          {
            "type": "TryStatement",
            "block": {
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
                      "start": 1062,
                      "end": 1063
                    },
                    "right": {
                      "type": "Literal",
                      "value": 1,
                      "raw": "1",
                      "start": 1066,
                      "end": 1067
                    },
                    "start": 1062,
                    "end": 1067
                  },
                  "directive": null,
                  "start": 1062,
                  "end": 1068
                }
              ],
              "start": 1052,
              "end": 1074
            },
            "handler": {
              "type": "CatchClause",
              "param": {
                "type": "Identifier",
                "decorators": [],
                "name": "e",
                "optional": false,
                "typeAnnotation": null,
                "start": 1086,
                "end": 1087
              },
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
                        "start": 1099,
                        "end": 1100
                      },
                      "right": {
                        "type": "Literal",
                        "value": 2,
                        "raw": "2",
                        "start": 1103,
                        "end": 1104
                      },
                      "start": 1099,
                      "end": 1104
                    },
                    "directive": null,
                    "start": 1099,
                    "end": 1105
                  },
                  {
                    "type": "ReturnStatement",
                    "argument": null,
                    "start": 1114,
                    "end": 1121
                  }
                ],
                "start": 1089,
                "end": 1127
              },
              "start": 1079,
              "end": 1127
            },
            "finalizer": {
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
                    "start": 1150,
                    "end": 1151
                  },
                  "directive": null,
                  "start": 1150,
                  "end": 1152
                }
              ],
              "start": 1140,
              "end": 1172
            },
            "start": 1048,
            "end": 1172
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 1177,
              "end": 1178
            },
            "directive": null,
            "start": 1177,
            "end": 1179
          }
        ],
        "start": 1012,
        "end": 1187
      },
      "expression": false,
      "start": 998,
      "end": 1187
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f7",
        "optional": false,
        "typeAnnotation": null,
        "start": 1198,
        "end": 1200
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
                          "type": "TSLiteralType",
                          "literal": {
                            "type": "Literal",
                            "value": 0,
                            "raw": "0",
                            "start": 1216,
                            "end": 1217
                          },
                          "start": 1216,
                          "end": 1217
                        },
                        {
                          "type": "TSLiteralType",
                          "literal": {
                            "type": "Literal",
                            "value": 1,
                            "raw": "1",
                            "start": 1220,
                            "end": 1221
                          },
                          "start": 1220,
                          "end": 1221
                        },
                        {
                          "type": "TSLiteralType",
                          "literal": {
                            "type": "Literal",
                            "value": 2,
                            "raw": "2",
                            "start": 1224,
                            "end": 1225
                          },
                          "start": 1224,
                          "end": 1225
                        },
                        {
                          "type": "TSLiteralType",
                          "literal": {
                            "type": "Literal",
                            "value": 3,
                            "raw": "3",
                            "start": 1228,
                            "end": 1229
                          },
                          "start": 1228,
                          "end": 1229
                        }
                      ],
                      "start": 1216,
                      "end": 1229
                    },
                    "start": 1214,
                    "end": 1229
                  },
                  "start": 1213,
                  "end": 1229
                },
                "init": {
                  "type": "Literal",
                  "value": 0,
                  "raw": "0",
                  "start": 1232,
                  "end": 1233
                },
                "definite": false,
                "start": 1213,
                "end": 1233
              }
            ],
            "declare": false,
            "start": 1209,
            "end": 1234
          },
          {
            "type": "TryStatement",
            "block": {
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
                      "start": 1253,
                      "end": 1254
                    },
                    "right": {
                      "type": "Literal",
                      "value": 1,
                      "raw": "1",
                      "start": 1257,
                      "end": 1258
                    },
                    "start": 1253,
                    "end": 1258
                  },
                  "directive": null,
                  "start": 1253,
                  "end": 1259
                },
                {
                  "type": "ReturnStatement",
                  "argument": null,
                  "start": 1268,
                  "end": 1275
                }
              ],
              "start": 1243,
              "end": 1281
            },
            "handler": {
              "type": "CatchClause",
              "param": {
                "type": "Identifier",
                "decorators": [],
                "name": "e",
                "optional": false,
                "typeAnnotation": null,
                "start": 1293,
                "end": 1294
              },
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
                        "start": 1306,
                        "end": 1307
                      },
                      "right": {
                        "type": "Literal",
                        "value": 2,
                        "raw": "2",
                        "start": 1310,
                        "end": 1311
                      },
                      "start": 1306,
                      "end": 1311
                    },
                    "directive": null,
                    "start": 1306,
                    "end": 1312
                  },
                  {
                    "type": "ReturnStatement",
                    "argument": null,
                    "start": 1321,
                    "end": 1328
                  }
                ],
                "start": 1296,
                "end": 1334
              },
              "start": 1286,
              "end": 1334
            },
            "finalizer": {
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
                    "start": 1357,
                    "end": 1358
                  },
                  "directive": null,
                  "start": 1357,
                  "end": 1359
                }
              ],
              "start": 1347,
              "end": 1379
            },
            "start": 1239,
            "end": 1379
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 1384,
              "end": 1385
            },
            "directive": null,
            "start": 1384,
            "end": 1386
          }
        ],
        "start": 1203,
        "end": 1404
      },
      "expression": false,
      "start": 1189,
      "end": 1404
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f8",
        "optional": false,
        "typeAnnotation": null,
        "start": 1415,
        "end": 1417
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
                          "type": "TSLiteralType",
                          "literal": {
                            "type": "Literal",
                            "value": 0,
                            "raw": "0",
                            "start": 1433,
                            "end": 1434
                          },
                          "start": 1433,
                          "end": 1434
                        },
                        {
                          "type": "TSLiteralType",
                          "literal": {
                            "type": "Literal",
                            "value": 1,
                            "raw": "1",
                            "start": 1437,
                            "end": 1438
                          },
                          "start": 1437,
                          "end": 1438
                        }
                      ],
                      "start": 1433,
                      "end": 1438
                    },
                    "start": 1431,
                    "end": 1438
                  },
                  "start": 1430,
                  "end": 1438
                },
                "init": {
                  "type": "Literal",
                  "value": 0,
                  "raw": "0",
                  "start": 1441,
                  "end": 1442
                },
                "definite": false,
                "start": 1430,
                "end": 1442
              }
            ],
            "declare": false,
            "start": 1426,
            "end": 1443
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "CallExpression",
              "callee": {
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
                      "type": "TryStatement",
                      "block": {
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
                                "start": 1483,
                                "end": 1484
                              },
                              "right": {
                                "type": "Literal",
                                "value": 1,
                                "raw": "1",
                                "start": 1487,
                                "end": 1488
                              },
                              "start": 1483,
                              "end": 1488
                            },
                            "directive": null,
                            "start": 1483,
                            "end": 1489
                          },
                          {
                            "type": "ReturnStatement",
                            "argument": null,
                            "start": 1502,
                            "end": 1509
                          }
                        ],
                        "start": 1469,
                        "end": 1519
                      },
                      "handler": null,
                      "finalizer": {
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
                              "start": 1550,
                              "end": 1551
                            },
                            "directive": null,
                            "start": 1550,
                            "end": 1552
                          }
                        ],
                        "start": 1536,
                        "end": 1572
                      },
                      "start": 1465,
                      "end": 1572
                    },
                    {
                      "type": "ExpressionStatement",
                      "expression": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1581,
                        "end": 1582
                      },
                      "directive": null,
                      "start": 1581,
                      "end": 1583
                    }
                  ],
                  "start": 1455,
                  "end": 1605
                },
                "id": null,
                "generator": false,
                "start": 1449,
                "end": 1605
              },
              "typeArguments": null,
              "arguments": [],
              "optional": false,
              "start": 1448,
              "end": 1608
            },
            "directive": null,
            "start": 1448,
            "end": 1609
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 1614,
              "end": 1615
            },
            "directive": null,
            "start": 1614,
            "end": 1616
          }
        ],
        "start": 1420,
        "end": 1624
      },
      "expression": false,
      "start": 1406,
      "end": 1624
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f9",
        "optional": false,
        "typeAnnotation": null,
        "start": 1635,
        "end": 1637
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
                          "type": "TSLiteralType",
                          "literal": {
                            "type": "Literal",
                            "value": 0,
                            "raw": "0",
                            "start": 1653,
                            "end": 1654
                          },
                          "start": 1653,
                          "end": 1654
                        },
                        {
                          "type": "TSLiteralType",
                          "literal": {
                            "type": "Literal",
                            "value": 1,
                            "raw": "1",
                            "start": 1657,
                            "end": 1658
                          },
                          "start": 1657,
                          "end": 1658
                        },
                        {
                          "type": "TSLiteralType",
                          "literal": {
                            "type": "Literal",
                            "value": 2,
                            "raw": "2",
                            "start": 1661,
                            "end": 1662
                          },
                          "start": 1661,
                          "end": 1662
                        }
                      ],
                      "start": 1653,
                      "end": 1662
                    },
                    "start": 1651,
                    "end": 1662
                  },
                  "start": 1650,
                  "end": 1662
                },
                "init": {
                  "type": "Literal",
                  "value": 0,
                  "raw": "0",
                  "start": 1665,
                  "end": 1666
                },
                "definite": false,
                "start": 1650,
                "end": 1666
              }
            ],
            "declare": false,
            "start": 1646,
            "end": 1667
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "CallExpression",
              "callee": {
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
                      "type": "TryStatement",
                      "block": {
                        "type": "BlockStatement",
                        "body": [
                          {
                            "type": "IfStatement",
                            "test": {
                              "type": "UnaryExpression",
                              "operator": "!",
                              "argument": {
                                "type": "UnaryExpression",
                                "operator": "!",
                                "argument": {
                                  "type": "Literal",
                                  "value": true,
                                  "raw": "true",
                                  "start": 1713,
                                  "end": 1717
                                },
                                "prefix": true,
                                "start": 1712,
                                "end": 1717
                              },
                              "prefix": true,
                              "start": 1711,
                              "end": 1717
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
                                      "start": 1737,
                                      "end": 1738
                                    },
                                    "right": {
                                      "type": "Literal",
                                      "value": 1,
                                      "raw": "1",
                                      "start": 1741,
                                      "end": 1742
                                    },
                                    "start": 1737,
                                    "end": 1742
                                  },
                                  "directive": null,
                                  "start": 1737,
                                  "end": 1743
                                },
                                {
                                  "type": "ReturnStatement",
                                  "argument": null,
                                  "start": 1760,
                                  "end": 1767
                                }
                              ],
                              "start": 1719,
                              "end": 1781
                            },
                            "alternate": null,
                            "start": 1707,
                            "end": 1781
                          }
                        ],
                        "start": 1693,
                        "end": 1791
                      },
                      "handler": null,
                      "finalizer": {
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
                              "start": 1822,
                              "end": 1823
                            },
                            "directive": null,
                            "start": 1822,
                            "end": 1824
                          }
                        ],
                        "start": 1808,
                        "end": 1844
                      },
                      "start": 1689,
                      "end": 1844
                    },
                    {
                      "type": "ExpressionStatement",
                      "expression": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1853,
                        "end": 1854
                      },
                      "directive": null,
                      "start": 1853,
                      "end": 1855
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
                          "start": 1870,
                          "end": 1871
                        },
                        "right": {
                          "type": "Literal",
                          "value": 2,
                          "raw": "2",
                          "start": 1874,
                          "end": 1875
                        },
                        "start": 1870,
                        "end": 1875
                      },
                      "directive": null,
                      "start": 1870,
                      "end": 1876
                    }
                  ],
                  "start": 1679,
                  "end": 1882
                },
                "id": null,
                "generator": false,
                "start": 1673,
                "end": 1882
              },
              "typeArguments": null,
              "arguments": [],
              "optional": false,
              "start": 1672,
              "end": 1885
            },
            "directive": null,
            "start": 1672,
            "end": 1886
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 1891,
              "end": 1892
            },
            "directive": null,
            "start": 1891,
            "end": 1893
          }
        ],
        "start": 1640,
        "end": 1905
      },
      "expression": false,
      "start": 1626,
      "end": 1905
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f10",
        "optional": false,
        "typeAnnotation": null,
        "start": 1916,
        "end": 1919
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
                          "type": "TSLiteralType",
                          "literal": {
                            "type": "Literal",
                            "value": 0,
                            "raw": "0",
                            "start": 1935,
                            "end": 1936
                          },
                          "start": 1935,
                          "end": 1936
                        },
                        {
                          "type": "TSLiteralType",
                          "literal": {
                            "type": "Literal",
                            "value": 1,
                            "raw": "1",
                            "start": 1939,
                            "end": 1940
                          },
                          "start": 1939,
                          "end": 1940
                        },
                        {
                          "type": "TSLiteralType",
                          "literal": {
                            "type": "Literal",
                            "value": 2,
                            "raw": "2",
                            "start": 1943,
                            "end": 1944
                          },
                          "start": 1943,
                          "end": 1944
                        },
                        {
                          "type": "TSLiteralType",
                          "literal": {
                            "type": "Literal",
                            "value": 3,
                            "raw": "3",
                            "start": 1947,
                            "end": 1948
                          },
                          "start": 1947,
                          "end": 1948
                        }
                      ],
                      "start": 1935,
                      "end": 1948
                    },
                    "start": 1933,
                    "end": 1948
                  },
                  "start": 1932,
                  "end": 1948
                },
                "init": {
                  "type": "Literal",
                  "value": 0,
                  "raw": "0",
                  "start": 1951,
                  "end": 1952
                },
                "definite": false,
                "start": 1932,
                "end": 1952
              }
            ],
            "declare": false,
            "start": 1928,
            "end": 1953
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "CallExpression",
              "callee": {
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
                      "type": "TryStatement",
                      "block": {
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
                                "start": 1993,
                                "end": 1994
                              },
                              "right": {
                                "type": "Literal",
                                "value": 1,
                                "raw": "1",
                                "start": 1997,
                                "end": 1998
                              },
                              "start": 1993,
                              "end": 1998
                            },
                            "directive": null,
                            "start": 1993,
                            "end": 1999
                          },
                          {
                            "type": "ReturnStatement",
                            "argument": null,
                            "start": 2012,
                            "end": 2019
                          }
                        ],
                        "start": 1979,
                        "end": 2029
                      },
                      "handler": {
                        "type": "CatchClause",
                        "param": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "e",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 2045,
                          "end": 2046
                        },
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
                                  "start": 2062,
                                  "end": 2063
                                },
                                "right": {
                                  "type": "Literal",
                                  "value": 2,
                                  "raw": "2",
                                  "start": 2066,
                                  "end": 2067
                                },
                                "start": 2062,
                                "end": 2067
                              },
                              "directive": null,
                              "start": 2062,
                              "end": 2068
                            }
                          ],
                          "start": 2048,
                          "end": 2078
                        },
                        "start": 2038,
                        "end": 2078
                      },
                      "finalizer": {
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
                              "start": 2109,
                              "end": 2110
                            },
                            "directive": null,
                            "start": 2109,
                            "end": 2111
                          }
                        ],
                        "start": 2095,
                        "end": 2135
                      },
                      "start": 1975,
                      "end": 2135
                    },
                    {
                      "type": "ExpressionStatement",
                      "expression": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2144,
                        "end": 2145
                      },
                      "directive": null,
                      "start": 2144,
                      "end": 2146
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
                          "start": 2161,
                          "end": 2162
                        },
                        "right": {
                          "type": "Literal",
                          "value": 3,
                          "raw": "3",
                          "start": 2165,
                          "end": 2166
                        },
                        "start": 2161,
                        "end": 2166
                      },
                      "directive": null,
                      "start": 2161,
                      "end": 2167
                    }
                  ],
                  "start": 1965,
                  "end": 2173
                },
                "id": null,
                "generator": false,
                "start": 1959,
                "end": 2173
              },
              "typeArguments": null,
              "arguments": [],
              "optional": false,
              "start": 1958,
              "end": 2176
            },
            "directive": null,
            "start": 1958,
            "end": 2177
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 2182,
              "end": 2183
            },
            "directive": null,
            "start": 2182,
            "end": 2184
          }
        ],
        "start": 1922,
        "end": 2196
      },
      "expression": false,
      "start": 1907,
      "end": 2196
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f11",
        "optional": false,
        "typeAnnotation": null,
        "start": 2207,
        "end": 2210
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
                          "type": "TSLiteralType",
                          "literal": {
                            "type": "Literal",
                            "value": 0,
                            "raw": "0",
                            "start": 2226,
                            "end": 2227
                          },
                          "start": 2226,
                          "end": 2227
                        },
                        {
                          "type": "TSLiteralType",
                          "literal": {
                            "type": "Literal",
                            "value": 1,
                            "raw": "1",
                            "start": 2230,
                            "end": 2231
                          },
                          "start": 2230,
                          "end": 2231
                        },
                        {
                          "type": "TSLiteralType",
                          "literal": {
                            "type": "Literal",
                            "value": 2,
                            "raw": "2",
                            "start": 2234,
                            "end": 2235
                          },
                          "start": 2234,
                          "end": 2235
                        },
                        {
                          "type": "TSLiteralType",
                          "literal": {
                            "type": "Literal",
                            "value": 3,
                            "raw": "3",
                            "start": 2238,
                            "end": 2239
                          },
                          "start": 2238,
                          "end": 2239
                        },
                        {
                          "type": "TSLiteralType",
                          "literal": {
                            "type": "Literal",
                            "value": 4,
                            "raw": "4",
                            "start": 2242,
                            "end": 2243
                          },
                          "start": 2242,
                          "end": 2243
                        },
                        {
                          "type": "TSLiteralType",
                          "literal": {
                            "type": "Literal",
                            "value": 5,
                            "raw": "5",
                            "start": 2246,
                            "end": 2247
                          },
                          "start": 2246,
                          "end": 2247
                        }
                      ],
                      "start": 2226,
                      "end": 2247
                    },
                    "start": 2224,
                    "end": 2247
                  },
                  "start": 2223,
                  "end": 2247
                },
                "init": {
                  "type": "Literal",
                  "value": 0,
                  "raw": "0",
                  "start": 2250,
                  "end": 2251
                },
                "definite": false,
                "start": 2223,
                "end": 2251
              }
            ],
            "declare": false,
            "start": 2219,
            "end": 2252
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "CallExpression",
              "callee": {
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
                      "type": "TryStatement",
                      "block": {
                        "type": "BlockStatement",
                        "body": [
                          {
                            "type": "IfStatement",
                            "test": {
                              "type": "UnaryExpression",
                              "operator": "!",
                              "argument": {
                                "type": "UnaryExpression",
                                "operator": "!",
                                "argument": {
                                  "type": "Literal",
                                  "value": true,
                                  "raw": "true",
                                  "start": 2298,
                                  "end": 2302
                                },
                                "prefix": true,
                                "start": 2297,
                                "end": 2302
                              },
                              "prefix": true,
                              "start": 2296,
                              "end": 2302
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
                                      "start": 2322,
                                      "end": 2323
                                    },
                                    "right": {
                                      "type": "Literal",
                                      "value": 1,
                                      "raw": "1",
                                      "start": 2326,
                                      "end": 2327
                                    },
                                    "start": 2322,
                                    "end": 2327
                                  },
                                  "directive": null,
                                  "start": 2322,
                                  "end": 2328
                                },
                                {
                                  "type": "ReturnStatement",
                                  "argument": null,
                                  "start": 2345,
                                  "end": 2352
                                }
                              ],
                              "start": 2304,
                              "end": 2366
                            },
                            "alternate": null,
                            "start": 2292,
                            "end": 2366
                          },
                          {
                            "type": "IfStatement",
                            "test": {
                              "type": "UnaryExpression",
                              "operator": "!",
                              "argument": {
                                "type": "UnaryExpression",
                                "operator": "!",
                                "argument": {
                                  "type": "Literal",
                                  "value": true,
                                  "raw": "true",
                                  "start": 2385,
                                  "end": 2389
                                },
                                "prefix": true,
                                "start": 2384,
                                "end": 2389
                              },
                              "prefix": true,
                              "start": 2383,
                              "end": 2389
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
                                      "start": 2409,
                                      "end": 2410
                                    },
                                    "right": {
                                      "type": "Literal",
                                      "value": 2,
                                      "raw": "2",
                                      "start": 2413,
                                      "end": 2414
                                    },
                                    "start": 2409,
                                    "end": 2414
                                  },
                                  "directive": null,
                                  "start": 2409,
                                  "end": 2415
                                },
                                {
                                  "type": "ThrowStatement",
                                  "argument": {
                                    "type": "Literal",
                                    "value": 0,
                                    "raw": "0",
                                    "start": 2438,
                                    "end": 2439
                                  },
                                  "start": 2432,
                                  "end": 2440
                                }
                              ],
                              "start": 2391,
                              "end": 2454
                            },
                            "alternate": null,
                            "start": 2379,
                            "end": 2454
                          }
                        ],
                        "start": 2278,
                        "end": 2464
                      },
                      "handler": {
                        "type": "CatchClause",
                        "param": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "e",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 2480,
                          "end": 2481
                        },
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
                                "start": 2497,
                                "end": 2498
                              },
                              "directive": null,
                              "start": 2497,
                              "end": 2499
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
                                  "start": 2526,
                                  "end": 2527
                                },
                                "right": {
                                  "type": "Literal",
                                  "value": 3,
                                  "raw": "3",
                                  "start": 2530,
                                  "end": 2531
                                },
                                "start": 2526,
                                "end": 2531
                              },
                              "directive": null,
                              "start": 2526,
                              "end": 2532
                            }
                          ],
                          "start": 2483,
                          "end": 2542
                        },
                        "start": 2473,
                        "end": 2542
                      },
                      "finalizer": {
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
                              "start": 2573,
                              "end": 2574
                            },
                            "directive": null,
                            "start": 2573,
                            "end": 2575
                          },
                          {
                            "type": "IfStatement",
                            "test": {
                              "type": "UnaryExpression",
                              "operator": "!",
                              "argument": {
                                "type": "UnaryExpression",
                                "operator": "!",
                                "argument": {
                                  "type": "Literal",
                                  "value": true,
                                  "raw": "true",
                                  "start": 2612,
                                  "end": 2616
                                },
                                "prefix": true,
                                "start": 2611,
                                "end": 2616
                              },
                              "prefix": true,
                              "start": 2610,
                              "end": 2616
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
                                      "start": 2636,
                                      "end": 2637
                                    },
                                    "right": {
                                      "type": "Literal",
                                      "value": 4,
                                      "raw": "4",
                                      "start": 2640,
                                      "end": 2641
                                    },
                                    "start": 2636,
                                    "end": 2641
                                  },
                                  "directive": null,
                                  "start": 2636,
                                  "end": 2642
                                }
                              ],
                              "start": 2618,
                              "end": 2656
                            },
                            "alternate": null,
                            "start": 2606,
                            "end": 2656
                          }
                        ],
                        "start": 2559,
                        "end": 2666
                      },
                      "start": 2274,
                      "end": 2666
                    },
                    {
                      "type": "ExpressionStatement",
                      "expression": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2675,
                        "end": 2676
                      },
                      "directive": null,
                      "start": 2675,
                      "end": 2677
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
                          "start": 2700,
                          "end": 2701
                        },
                        "right": {
                          "type": "Literal",
                          "value": 5,
                          "raw": "5",
                          "start": 2704,
                          "end": 2705
                        },
                        "start": 2700,
                        "end": 2705
                      },
                      "directive": null,
                      "start": 2700,
                      "end": 2706
                    }
                  ],
                  "start": 2264,
                  "end": 2712
                },
                "id": null,
                "generator": false,
                "start": 2258,
                "end": 2712
              },
              "typeArguments": null,
              "arguments": [],
              "optional": false,
              "start": 2257,
              "end": 2715
            },
            "directive": null,
            "start": 2257,
            "end": 2716
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 2721,
              "end": 2722
            },
            "directive": null,
            "start": 2721,
            "end": 2723
          }
        ],
        "start": 2213,
        "end": 2739
      },
      "expression": false,
      "start": 2198,
      "end": 2739
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f12",
        "optional": false,
        "typeAnnotation": null,
        "start": 2750,
        "end": 2753
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
                          "type": "TSLiteralType",
                          "literal": {
                            "type": "Literal",
                            "value": 0,
                            "raw": "0",
                            "start": 2769,
                            "end": 2770
                          },
                          "start": 2769,
                          "end": 2770
                        },
                        {
                          "type": "TSLiteralType",
                          "literal": {
                            "type": "Literal",
                            "value": 1,
                            "raw": "1",
                            "start": 2773,
                            "end": 2774
                          },
                          "start": 2773,
                          "end": 2774
                        },
                        {
                          "type": "TSLiteralType",
                          "literal": {
                            "type": "Literal",
                            "value": 2,
                            "raw": "2",
                            "start": 2777,
                            "end": 2778
                          },
                          "start": 2777,
                          "end": 2778
                        },
                        {
                          "type": "TSLiteralType",
                          "literal": {
                            "type": "Literal",
                            "value": 3,
                            "raw": "3",
                            "start": 2781,
                            "end": 2782
                          },
                          "start": 2781,
                          "end": 2782
                        },
                        {
                          "type": "TSLiteralType",
                          "literal": {
                            "type": "Literal",
                            "value": 4,
                            "raw": "4",
                            "start": 2785,
                            "end": 2786
                          },
                          "start": 2785,
                          "end": 2786
                        },
                        {
                          "type": "TSLiteralType",
                          "literal": {
                            "type": "Literal",
                            "value": 5,
                            "raw": "5",
                            "start": 2789,
                            "end": 2790
                          },
                          "start": 2789,
                          "end": 2790
                        },
                        {
                          "type": "TSLiteralType",
                          "literal": {
                            "type": "Literal",
                            "value": 6,
                            "raw": "6",
                            "start": 2793,
                            "end": 2794
                          },
                          "start": 2793,
                          "end": 2794
                        },
                        {
                          "type": "TSLiteralType",
                          "literal": {
                            "type": "Literal",
                            "value": 7,
                            "raw": "7",
                            "start": 2797,
                            "end": 2798
                          },
                          "start": 2797,
                          "end": 2798
                        }
                      ],
                      "start": 2769,
                      "end": 2798
                    },
                    "start": 2767,
                    "end": 2798
                  },
                  "start": 2766,
                  "end": 2798
                },
                "init": {
                  "type": "Literal",
                  "value": 0,
                  "raw": "0",
                  "start": 2801,
                  "end": 2802
                },
                "definite": false,
                "start": 2766,
                "end": 2802
              }
            ],
            "declare": false,
            "start": 2762,
            "end": 2803
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "CallExpression",
              "callee": {
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
                      "type": "TryStatement",
                      "block": {
                        "type": "BlockStatement",
                        "body": [
                          {
                            "type": "IfStatement",
                            "test": {
                              "type": "UnaryExpression",
                              "operator": "!",
                              "argument": {
                                "type": "UnaryExpression",
                                "operator": "!",
                                "argument": {
                                  "type": "Literal",
                                  "value": true,
                                  "raw": "true",
                                  "start": 2849,
                                  "end": 2853
                                },
                                "prefix": true,
                                "start": 2848,
                                "end": 2853
                              },
                              "prefix": true,
                              "start": 2847,
                              "end": 2853
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
                                      "start": 2873,
                                      "end": 2874
                                    },
                                    "right": {
                                      "type": "Literal",
                                      "value": 1,
                                      "raw": "1",
                                      "start": 2877,
                                      "end": 2878
                                    },
                                    "start": 2873,
                                    "end": 2878
                                  },
                                  "directive": null,
                                  "start": 2873,
                                  "end": 2879
                                },
                                {
                                  "type": "ReturnStatement",
                                  "argument": null,
                                  "start": 2896,
                                  "end": 2903
                                }
                              ],
                              "start": 2855,
                              "end": 2917
                            },
                            "alternate": null,
                            "start": 2843,
                            "end": 2917
                          },
                          {
                            "type": "IfStatement",
                            "test": {
                              "type": "UnaryExpression",
                              "operator": "!",
                              "argument": {
                                "type": "UnaryExpression",
                                "operator": "!",
                                "argument": {
                                  "type": "Literal",
                                  "value": true,
                                  "raw": "true",
                                  "start": 2936,
                                  "end": 2940
                                },
                                "prefix": true,
                                "start": 2935,
                                "end": 2940
                              },
                              "prefix": true,
                              "start": 2934,
                              "end": 2940
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
                                      "start": 2960,
                                      "end": 2961
                                    },
                                    "right": {
                                      "type": "Literal",
                                      "value": 2,
                                      "raw": "2",
                                      "start": 2964,
                                      "end": 2965
                                    },
                                    "start": 2960,
                                    "end": 2965
                                  },
                                  "directive": null,
                                  "start": 2960,
                                  "end": 2966
                                },
                                {
                                  "type": "ThrowStatement",
                                  "argument": {
                                    "type": "Literal",
                                    "value": 0,
                                    "raw": "0",
                                    "start": 2989,
                                    "end": 2990
                                  },
                                  "start": 2983,
                                  "end": 2991
                                }
                              ],
                              "start": 2942,
                              "end": 3005
                            },
                            "alternate": null,
                            "start": 2930,
                            "end": 3005
                          }
                        ],
                        "start": 2829,
                        "end": 3015
                      },
                      "handler": {
                        "type": "CatchClause",
                        "param": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "e",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 3031,
                          "end": 3032
                        },
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
                                "start": 3048,
                                "end": 3049
                              },
                              "directive": null,
                              "start": 3048,
                              "end": 3050
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
                                  "start": 3077,
                                  "end": 3078
                                },
                                "right": {
                                  "type": "Literal",
                                  "value": 3,
                                  "raw": "3",
                                  "start": 3081,
                                  "end": 3082
                                },
                                "start": 3077,
                                "end": 3082
                              },
                              "directive": null,
                              "start": 3077,
                              "end": 3083
                            }
                          ],
                          "start": 3034,
                          "end": 3093
                        },
                        "start": 3024,
                        "end": 3093
                      },
                      "finalizer": {
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
                              "start": 3124,
                              "end": 3125
                            },
                            "directive": null,
                            "start": 3124,
                            "end": 3126
                          },
                          {
                            "type": "IfStatement",
                            "test": {
                              "type": "UnaryExpression",
                              "operator": "!",
                              "argument": {
                                "type": "UnaryExpression",
                                "operator": "!",
                                "argument": {
                                  "type": "Literal",
                                  "value": true,
                                  "raw": "true",
                                  "start": 3163,
                                  "end": 3167
                                },
                                "prefix": true,
                                "start": 3162,
                                "end": 3167
                              },
                              "prefix": true,
                              "start": 3161,
                              "end": 3167
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
                                      "start": 3187,
                                      "end": 3188
                                    },
                                    "right": {
                                      "type": "Literal",
                                      "value": 4,
                                      "raw": "4",
                                      "start": 3191,
                                      "end": 3192
                                    },
                                    "start": 3187,
                                    "end": 3192
                                  },
                                  "directive": null,
                                  "start": 3187,
                                  "end": 3193
                                },
                                {
                                  "type": "ReturnStatement",
                                  "argument": null,
                                  "start": 3210,
                                  "end": 3217
                                }
                              ],
                              "start": 3169,
                              "end": 3231
                            },
                            "alternate": null,
                            "start": 3157,
                            "end": 3231
                          },
                          {
                            "type": "IfStatement",
                            "test": {
                              "type": "UnaryExpression",
                              "operator": "!",
                              "argument": {
                                "type": "UnaryExpression",
                                "operator": "!",
                                "argument": {
                                  "type": "Literal",
                                  "value": true,
                                  "raw": "true",
                                  "start": 3250,
                                  "end": 3254
                                },
                                "prefix": true,
                                "start": 3249,
                                "end": 3254
                              },
                              "prefix": true,
                              "start": 3248,
                              "end": 3254
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
                                      "start": 3274,
                                      "end": 3275
                                    },
                                    "right": {
                                      "type": "Literal",
                                      "value": 5,
                                      "raw": "5",
                                      "start": 3278,
                                      "end": 3279
                                    },
                                    "start": 3274,
                                    "end": 3279
                                  },
                                  "directive": null,
                                  "start": 3274,
                                  "end": 3280
                                },
                                {
                                  "type": "ReturnStatement",
                                  "argument": null,
                                  "start": 3297,
                                  "end": 3304
                                }
                              ],
                              "start": 3256,
                              "end": 3318
                            },
                            "alternate": null,
                            "start": 3244,
                            "end": 3318
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
                                "start": 3331,
                                "end": 3332
                              },
                              "right": {
                                "type": "Literal",
                                "value": 6,
                                "raw": "6",
                                "start": 3335,
                                "end": 3336
                              },
                              "start": 3331,
                              "end": 3336
                            },
                            "directive": null,
                            "start": 3331,
                            "end": 3337
                          },
                          {
                            "type": "ReturnStatement",
                            "argument": null,
                            "start": 3350,
                            "end": 3357
                          },
                          {
                            "type": "ExpressionStatement",
                            "expression": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "x",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 3370,
                              "end": 3371
                            },
                            "directive": null,
                            "start": 3370,
                            "end": 3372
                          }
                        ],
                        "start": 3110,
                        "end": 3397
                      },
                      "start": 2825,
                      "end": 3397
                    },
                    {
                      "type": "ExpressionStatement",
                      "expression": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 3406,
                        "end": 3407
                      },
                      "directive": null,
                      "start": 3406,
                      "end": 3408
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
                          "start": 3432,
                          "end": 3433
                        },
                        "right": {
                          "type": "Literal",
                          "value": 7,
                          "raw": "7",
                          "start": 3436,
                          "end": 3437
                        },
                        "start": 3432,
                        "end": 3437
                      },
                      "directive": null,
                      "start": 3432,
                      "end": 3438
                    }
                  ],
                  "start": 2815,
                  "end": 3457
                },
                "id": null,
                "generator": false,
                "start": 2809,
                "end": 3457
              },
              "typeArguments": null,
              "arguments": [],
              "optional": false,
              "start": 2808,
              "end": 3460
            },
            "directive": null,
            "start": 2808,
            "end": 3461
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 3466,
              "end": 3467
            },
            "directive": null,
            "start": 3466,
            "end": 3468
          }
        ],
        "start": 2756,
        "end": 3484
      },
      "expression": false,
      "start": 2741,
      "end": 3484
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
            "name": "main",
            "optional": false,
            "typeAnnotation": null,
            "start": 3514,
            "end": 3518
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
                  "kind": "let",
                  "declarations": [
                    {
                      "type": "VariableDeclarator",
                      "id": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "hoge",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSUnionType",
                            "types": [
                              {
                                "type": "TSStringKeyword",
                                "start": 3543,
                                "end": 3549
                              },
                              {
                                "type": "TSUndefinedKeyword",
                                "start": 3552,
                                "end": 3561
                              }
                            ],
                            "start": 3543,
                            "end": 3561
                          },
                          "start": 3541,
                          "end": 3561
                        },
                        "start": 3537,
                        "end": 3561
                      },
                      "init": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "undefined",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 3564,
                        "end": 3573
                      },
                      "definite": false,
                      "start": 3537,
                      "end": 3573
                    }
                  ],
                  "declare": false,
                  "start": 3533,
                  "end": 3574
                },
                {
                  "type": "TryStatement",
                  "block": {
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
                            "name": "hoge",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 3593,
                            "end": 3597
                          },
                          "right": {
                            "type": "Literal",
                            "value": "hoge!",
                            "raw": "'hoge!'",
                            "start": 3600,
                            "end": 3607
                          },
                          "start": 3593,
                          "end": 3607
                        },
                        "directive": null,
                        "start": 3593,
                        "end": 3608
                      },
                      {
                        "type": "ReturnStatement",
                        "argument": null,
                        "start": 3617,
                        "end": 3624
                      }
                    ],
                    "start": 3583,
                    "end": 3630
                  },
                  "handler": {
                    "type": "CatchClause",
                    "param": null,
                    "body": {
                      "type": "BlockStatement",
                      "body": [
                        {
                          "type": "ReturnStatement",
                          "argument": null,
                          "start": 3651,
                          "end": 3658
                        }
                      ],
                      "start": 3641,
                      "end": 3664
                    },
                    "start": 3635,
                    "end": 3664
                  },
                  "finalizer": {
                    "type": "BlockStatement",
                    "body": [
                      {
                        "type": "IfStatement",
                        "test": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "hoge",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 3691,
                          "end": 3695
                        },
                        "consequent": {
                          "type": "BlockStatement",
                          "body": [
                            {
                              "type": "ExpressionStatement",
                              "expression": {
                                "type": "MemberExpression",
                                "object": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "hoge",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 3711,
                                  "end": 3715
                                },
                                "property": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "length",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 3716,
                                  "end": 3722
                                },
                                "optional": false,
                                "computed": false,
                                "start": 3711,
                                "end": 3722
                              },
                              "directive": null,
                              "start": 3711,
                              "end": 3723
                            }
                          ],
                          "start": 3697,
                          "end": 3733
                        },
                        "alternate": null,
                        "start": 3687,
                        "end": 3733
                      },
                      {
                        "type": "ReturnStatement",
                        "argument": null,
                        "start": 3742,
                        "end": 3749
                      }
                    ],
                    "start": 3677,
                    "end": 3755
                  },
                  "start": 3579,
                  "end": 3755
                }
              ],
              "start": 3527,
              "end": 3757
            },
            "id": null,
            "generator": false,
            "start": 3521,
            "end": 3757
          },
          "definite": false,
          "start": 3514,
          "end": 3757
        }
      ],
      "declare": false,
      "start": 3508,
      "end": 3757
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "t1",
        "optional": false,
        "typeAnnotation": null,
        "start": 3790,
        "end": 3792
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
                  "start": 3807,
                  "end": 3808
                },
                "init": {
                  "type": "CallExpression",
                  "callee": {
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
                          "type": "TryStatement",
                          "block": {
                            "type": "BlockStatement",
                            "body": [
                              {
                                "type": "ReturnStatement",
                                "argument": {
                                  "type": "Literal",
                                  "value": "x",
                                  "raw": "'x'",
                                  "start": 3853,
                                  "end": 3856
                                },
                                "start": 3846,
                                "end": 3857
                              }
                            ],
                            "start": 3832,
                            "end": 3867
                          },
                          "handler": {
                            "type": "CatchClause",
                            "param": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "e",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 3883,
                              "end": 3884
                            },
                            "body": {
                              "type": "BlockStatement",
                              "body": [
                                {
                                  "type": "ReturnStatement",
                                  "argument": {
                                    "type": "Literal",
                                    "value": null,
                                    "raw": "null",
                                    "start": 3907,
                                    "end": 3911
                                  },
                                  "start": 3900,
                                  "end": 3912
                                }
                              ],
                              "start": 3886,
                              "end": 3922
                            },
                            "start": 3876,
                            "end": 3922
                          },
                          "finalizer": null,
                          "start": 3828,
                          "end": 3922
                        },
                        {
                          "type": "ExpressionStatement",
                          "expression": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "x",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 3931,
                            "end": 3932
                          },
                          "directive": null,
                          "start": 3931,
                          "end": 3933
                        }
                      ],
                      "start": 3818,
                      "end": 3955
                    },
                    "id": null,
                    "generator": false,
                    "start": 3812,
                    "end": 3955
                  },
                  "typeArguments": null,
                  "arguments": [],
                  "optional": false,
                  "start": 3811,
                  "end": 3958
                },
                "definite": false,
                "start": 3807,
                "end": 3958
              }
            ],
            "declare": false,
            "start": 3801,
            "end": 3959
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 3964,
              "end": 3965
            },
            "directive": null,
            "start": 3964,
            "end": 3966
          }
        ],
        "start": 3795,
        "end": 3982
      },
      "expression": false,
      "start": 3781,
      "end": 3982
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "State",
        "optional": false,
        "typeAnnotation": null,
        "start": 4011,
        "end": 4016
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSUnionType",
        "types": [
          {
            "type": "TSTypeLiteral",
            "members": [
              {
                "type": "TSPropertySignature",
                "computed": false,
                "optional": false,
                "readonly": false,
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "tag",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 4021,
                  "end": 4024
                },
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSLiteralType",
                    "literal": {
                      "type": "Literal",
                      "value": "one",
                      "raw": "\"one\"",
                      "start": 4026,
                      "end": 4031
                    },
                    "start": 4026,
                    "end": 4031
                  },
                  "start": 4024,
                  "end": 4031
                },
                "accessibility": null,
                "static": false,
                "start": 4021,
                "end": 4031
              }
            ],
            "start": 4019,
            "end": 4033
          },
          {
            "type": "TSTypeLiteral",
            "members": [
              {
                "type": "TSPropertySignature",
                "computed": false,
                "optional": false,
                "readonly": false,
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "tag",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 4038,
                  "end": 4041
                },
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSLiteralType",
                    "literal": {
                      "type": "Literal",
                      "value": "two",
                      "raw": "\"two\"",
                      "start": 4043,
                      "end": 4048
                    },
                    "start": 4043,
                    "end": 4048
                  },
                  "start": 4041,
                  "end": 4048
                },
                "accessibility": null,
                "static": false,
                "start": 4038,
                "end": 4048
              }
            ],
            "start": 4036,
            "end": 4050
          },
          {
            "type": "TSTypeLiteral",
            "members": [
              {
                "type": "TSPropertySignature",
                "computed": false,
                "optional": false,
                "readonly": false,
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "tag",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 4055,
                  "end": 4058
                },
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSLiteralType",
                    "literal": {
                      "type": "Literal",
                      "value": "three",
                      "raw": "\"three\"",
                      "start": 4060,
                      "end": 4067
                    },
                    "start": 4060,
                    "end": 4067
                  },
                  "start": 4058,
                  "end": 4067
                },
                "accessibility": null,
                "static": false,
                "start": 4055,
                "end": 4067
              }
            ],
            "start": 4053,
            "end": 4069
          }
        ],
        "start": 4019,
        "end": 4069
      },
      "declare": false,
      "start": 4006,
      "end": 4070
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "notallowed",
        "optional": false,
        "typeAnnotation": null,
        "start": 4081,
        "end": 4091
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "arg",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSNumberKeyword",
              "start": 4097,
              "end": 4103
            },
            "start": 4095,
            "end": 4103
          },
          "start": 4092,
          "end": 4103
        }
      ],
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
                  "name": "state",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "State",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 4122,
                        "end": 4127
                      },
                      "typeArguments": null,
                      "start": 4122,
                      "end": 4127
                    },
                    "start": 4120,
                    "end": 4127
                  },
                  "start": 4115,
                  "end": 4127
                },
                "init": {
                  "type": "ObjectExpression",
                  "properties": [
                    {
                      "type": "Property",
                      "kind": "init",
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "tag",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 4132,
                        "end": 4135
                      },
                      "value": {
                        "type": "Literal",
                        "value": "one",
                        "raw": "\"one\"",
                        "start": 4137,
                        "end": 4142
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "optional": false,
                      "start": 4132,
                      "end": 4142
                    }
                  ],
                  "start": 4130,
                  "end": 4144
                },
                "definite": false,
                "start": 4115,
                "end": 4144
              }
            ],
            "declare": false,
            "start": 4111,
            "end": 4145
          },
          {
            "type": "TryStatement",
            "block": {
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
                      "name": "state",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 4164,
                      "end": 4169
                    },
                    "right": {
                      "type": "ObjectExpression",
                      "properties": [
                        {
                          "type": "Property",
                          "kind": "init",
                          "key": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "tag",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 4174,
                            "end": 4177
                          },
                          "value": {
                            "type": "Literal",
                            "value": "two",
                            "raw": "\"two\"",
                            "start": 4179,
                            "end": 4184
                          },
                          "method": false,
                          "shorthand": false,
                          "computed": false,
                          "optional": false,
                          "start": 4174,
                          "end": 4184
                        }
                      ],
                      "start": 4172,
                      "end": 4186
                    },
                    "start": 4164,
                    "end": 4186
                  },
                  "directive": null,
                  "start": 4164,
                  "end": 4187
                },
                {
                  "type": "TryStatement",
                  "block": {
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
                            "name": "state",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 4214,
                            "end": 4219
                          },
                          "right": {
                            "type": "ObjectExpression",
                            "properties": [
                              {
                                "type": "Property",
                                "kind": "init",
                                "key": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "tag",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 4224,
                                  "end": 4227
                                },
                                "value": {
                                  "type": "Literal",
                                  "value": "three",
                                  "raw": "\"three\"",
                                  "start": 4229,
                                  "end": 4236
                                },
                                "method": false,
                                "shorthand": false,
                                "computed": false,
                                "optional": false,
                                "start": 4224,
                                "end": 4236
                              }
                            ],
                            "start": 4222,
                            "end": 4238
                          },
                          "start": 4214,
                          "end": 4238
                        },
                        "directive": null,
                        "start": 4214,
                        "end": 4239
                      }
                    ],
                    "start": 4200,
                    "end": 4249
                  },
                  "handler": null,
                  "finalizer": {
                    "type": "BlockStatement",
                    "body": [],
                    "start": 4266,
                    "end": 4269
                  },
                  "start": 4196,
                  "end": 4269
                }
              ],
              "start": 4154,
              "end": 4275
            },
            "handler": {
              "type": "CatchClause",
              "param": {
                "type": "Identifier",
                "decorators": [],
                "name": "err",
                "optional": false,
                "typeAnnotation": null,
                "start": 4287,
                "end": 4290
              },
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "state",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 4302,
                        "end": 4307
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "tag",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 4308,
                        "end": 4311
                      },
                      "optional": false,
                      "computed": false,
                      "start": 4302,
                      "end": 4311
                    },
                    "directive": null,
                    "start": 4302,
                    "end": 4312
                  },
                  {
                    "type": "IfStatement",
                    "test": {
                      "type": "LogicalExpression",
                      "left": {
                        "type": "BinaryExpression",
                        "left": {
                          "type": "MemberExpression",
                          "object": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "state",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 4325,
                            "end": 4330
                          },
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "tag",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 4331,
                            "end": 4334
                          },
                          "optional": false,
                          "computed": false,
                          "start": 4325,
                          "end": 4334
                        },
                        "operator": "!==",
                        "right": {
                          "type": "Literal",
                          "value": "one",
                          "raw": "\"one\"",
                          "start": 4339,
                          "end": 4344
                        },
                        "start": 4325,
                        "end": 4344
                      },
                      "operator": "&&",
                      "right": {
                        "type": "BinaryExpression",
                        "left": {
                          "type": "MemberExpression",
                          "object": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "state",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 4348,
                            "end": 4353
                          },
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "tag",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 4354,
                            "end": 4357
                          },
                          "optional": false,
                          "computed": false,
                          "start": 4348,
                          "end": 4357
                        },
                        "operator": "!==",
                        "right": {
                          "type": "Literal",
                          "value": "two",
                          "raw": "\"two\"",
                          "start": 4362,
                          "end": 4367
                        },
                        "start": 4348,
                        "end": 4367
                      },
                      "start": 4325,
                      "end": 4367
                    },
                    "consequent": {
                      "type": "BlockStatement",
                      "body": [
                        {
                          "type": "ExpressionStatement",
                          "expression": {
                            "type": "CallExpression",
                            "callee": {
                              "type": "MemberExpression",
                              "object": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "console",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 4383,
                                "end": 4390
                              },
                              "property": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "log",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 4391,
                                "end": 4394
                              },
                              "optional": false,
                              "computed": false,
                              "start": 4383,
                              "end": 4394
                            },
                            "typeArguments": null,
                            "arguments": [
                              {
                                "type": "MemberExpression",
                                "object": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "state",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 4395,
                                  "end": 4400
                                },
                                "property": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "tag",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 4401,
                                  "end": 4404
                                },
                                "optional": false,
                                "computed": false,
                                "start": 4395,
                                "end": 4404
                              }
                            ],
                            "optional": false,
                            "start": 4383,
                            "end": 4405
                          },
                          "directive": null,
                          "start": 4383,
                          "end": 4406
                        }
                      ],
                      "start": 4369,
                      "end": 4416
                    },
                    "alternate": null,
                    "start": 4321,
                    "end": 4416
                  }
                ],
                "start": 4292,
                "end": 4422
              },
              "start": 4280,
              "end": 4422
            },
            "finalizer": null,
            "start": 4150,
            "end": 4422
          }
        ],
        "start": 4105,
        "end": 4424
      },
      "expression": false,
      "start": 4072,
      "end": 4424
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f20",
        "optional": false,
        "typeAnnotation": null,
        "start": 4435,
        "end": 4438
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
                          "type": "TSLiteralType",
                          "literal": {
                            "type": "Literal",
                            "value": 0,
                            "raw": "0",
                            "start": 4454,
                            "end": 4455
                          },
                          "start": 4454,
                          "end": 4455
                        },
                        {
                          "type": "TSLiteralType",
                          "literal": {
                            "type": "Literal",
                            "value": 1,
                            "raw": "1",
                            "start": 4458,
                            "end": 4459
                          },
                          "start": 4458,
                          "end": 4459
                        },
                        {
                          "type": "TSLiteralType",
                          "literal": {
                            "type": "Literal",
                            "value": 2,
                            "raw": "2",
                            "start": 4462,
                            "end": 4463
                          },
                          "start": 4462,
                          "end": 4463
                        },
                        {
                          "type": "TSLiteralType",
                          "literal": {
                            "type": "Literal",
                            "value": 3,
                            "raw": "3",
                            "start": 4466,
                            "end": 4467
                          },
                          "start": 4466,
                          "end": 4467
                        },
                        {
                          "type": "TSLiteralType",
                          "literal": {
                            "type": "Literal",
                            "value": 4,
                            "raw": "4",
                            "start": 4470,
                            "end": 4471
                          },
                          "start": 4470,
                          "end": 4471
                        },
                        {
                          "type": "TSLiteralType",
                          "literal": {
                            "type": "Literal",
                            "value": 5,
                            "raw": "5",
                            "start": 4474,
                            "end": 4475
                          },
                          "start": 4474,
                          "end": 4475
                        },
                        {
                          "type": "TSLiteralType",
                          "literal": {
                            "type": "Literal",
                            "value": 6,
                            "raw": "6",
                            "start": 4478,
                            "end": 4479
                          },
                          "start": 4478,
                          "end": 4479
                        }
                      ],
                      "start": 4454,
                      "end": 4479
                    },
                    "start": 4452,
                    "end": 4479
                  },
                  "start": 4451,
                  "end": 4479
                },
                "init": {
                  "type": "Literal",
                  "value": 0,
                  "raw": "0",
                  "start": 4482,
                  "end": 4483
                },
                "definite": false,
                "start": 4451,
                "end": 4483
              }
            ],
            "declare": false,
            "start": 4447,
            "end": 4484
          },
          {
            "type": "TryStatement",
            "block": {
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
                      "start": 4503,
                      "end": 4504
                    },
                    "right": {
                      "type": "Literal",
                      "value": 1,
                      "raw": "1",
                      "start": 4507,
                      "end": 4508
                    },
                    "start": 4503,
                    "end": 4508
                  },
                  "directive": null,
                  "start": 4503,
                  "end": 4509
                },
                {
                  "type": "TryStatement",
                  "block": {
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
                            "start": 4536,
                            "end": 4537
                          },
                          "right": {
                            "type": "Literal",
                            "value": 2,
                            "raw": "2",
                            "start": 4540,
                            "end": 4541
                          },
                          "start": 4536,
                          "end": 4541
                        },
                        "directive": null,
                        "start": 4536,
                        "end": 4542
                      },
                      {
                        "type": "TryStatement",
                        "block": {
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
                                  "start": 4577,
                                  "end": 4578
                                },
                                "right": {
                                  "type": "Literal",
                                  "value": 3,
                                  "raw": "3",
                                  "start": 4581,
                                  "end": 4582
                                },
                                "start": 4577,
                                "end": 4582
                              },
                              "directive": null,
                              "start": 4577,
                              "end": 4583
                            }
                          ],
                          "start": 4559,
                          "end": 4597
                        },
                        "handler": null,
                        "finalizer": {
                          "type": "BlockStatement",
                          "body": [
                            {
                              "type": "IfStatement",
                              "test": {
                                "type": "UnaryExpression",
                                "operator": "!",
                                "argument": {
                                  "type": "UnaryExpression",
                                  "operator": "!",
                                  "argument": {
                                    "type": "Literal",
                                    "value": true,
                                    "raw": "true",
                                    "start": 4642,
                                    "end": 4646
                                  },
                                  "prefix": true,
                                  "start": 4641,
                                  "end": 4646
                                },
                                "prefix": true,
                                "start": 4640,
                                "end": 4646
                              },
                              "consequent": {
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
                                    "start": 4648,
                                    "end": 4649
                                  },
                                  "right": {
                                    "type": "Literal",
                                    "value": 4,
                                    "raw": "4",
                                    "start": 4652,
                                    "end": 4653
                                  },
                                  "start": 4648,
                                  "end": 4653
                                },
                                "directive": null,
                                "start": 4648,
                                "end": 4654
                              },
                              "alternate": null,
                              "start": 4636,
                              "end": 4654
                            }
                          ],
                          "start": 4618,
                          "end": 4668
                        },
                        "start": 4555,
                        "end": 4668
                      },
                      {
                        "type": "ExpressionStatement",
                        "expression": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 4681,
                          "end": 4682
                        },
                        "directive": null,
                        "start": 4681,
                        "end": 4683
                      }
                    ],
                    "start": 4522,
                    "end": 4703
                  },
                  "handler": null,
                  "finalizer": {
                    "type": "BlockStatement",
                    "body": [
                      {
                        "type": "IfStatement",
                        "test": {
                          "type": "UnaryExpression",
                          "operator": "!",
                          "argument": {
                            "type": "UnaryExpression",
                            "operator": "!",
                            "argument": {
                              "type": "Literal",
                              "value": true,
                              "raw": "true",
                              "start": 4740,
                              "end": 4744
                            },
                            "prefix": true,
                            "start": 4739,
                            "end": 4744
                          },
                          "prefix": true,
                          "start": 4738,
                          "end": 4744
                        },
                        "consequent": {
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
                              "start": 4746,
                              "end": 4747
                            },
                            "right": {
                              "type": "Literal",
                              "value": 5,
                              "raw": "5",
                              "start": 4750,
                              "end": 4751
                            },
                            "start": 4746,
                            "end": 4751
                          },
                          "directive": null,
                          "start": 4746,
                          "end": 4752
                        },
                        "alternate": null,
                        "start": 4734,
                        "end": 4752
                      }
                    ],
                    "start": 4720,
                    "end": 4762
                  },
                  "start": 4518,
                  "end": 4762
                },
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 4771,
                    "end": 4772
                  },
                  "directive": null,
                  "start": 4771,
                  "end": 4773
                }
              ],
              "start": 4493,
              "end": 4793
            },
            "handler": null,
            "finalizer": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "IfStatement",
                  "test": {
                    "type": "UnaryExpression",
                    "operator": "!",
                    "argument": {
                      "type": "UnaryExpression",
                      "operator": "!",
                      "argument": {
                        "type": "Literal",
                        "value": true,
                        "raw": "true",
                        "start": 4822,
                        "end": 4826
                      },
                      "prefix": true,
                      "start": 4821,
                      "end": 4826
                    },
                    "prefix": true,
                    "start": 4820,
                    "end": 4826
                  },
                  "consequent": {
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
                        "start": 4828,
                        "end": 4829
                      },
                      "right": {
                        "type": "Literal",
                        "value": 6,
                        "raw": "6",
                        "start": 4832,
                        "end": 4833
                      },
                      "start": 4828,
                      "end": 4833
                    },
                    "directive": null,
                    "start": 4828,
                    "end": 4834
                  },
                  "alternate": null,
                  "start": 4816,
                  "end": 4834
                }
              ],
              "start": 4806,
              "end": 4840
            },
            "start": 4489,
            "end": 4840
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 4845,
              "end": 4846
            },
            "directive": null,
            "start": 4845,
            "end": 4847
          }
        ],
        "start": 4441,
        "end": 4867
      },
      "expression": false,
      "start": 4426,
      "end": 4867
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f21",
        "optional": false,
        "typeAnnotation": null,
        "start": 4878,
        "end": 4881
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
                          "type": "TSLiteralType",
                          "literal": {
                            "type": "Literal",
                            "value": 0,
                            "raw": "0",
                            "start": 4897,
                            "end": 4898
                          },
                          "start": 4897,
                          "end": 4898
                        },
                        {
                          "type": "TSLiteralType",
                          "literal": {
                            "type": "Literal",
                            "value": 1,
                            "raw": "1",
                            "start": 4901,
                            "end": 4902
                          },
                          "start": 4901,
                          "end": 4902
                        },
                        {
                          "type": "TSLiteralType",
                          "literal": {
                            "type": "Literal",
                            "value": 2,
                            "raw": "2",
                            "start": 4905,
                            "end": 4906
                          },
                          "start": 4905,
                          "end": 4906
                        },
                        {
                          "type": "TSLiteralType",
                          "literal": {
                            "type": "Literal",
                            "value": 3,
                            "raw": "3",
                            "start": 4909,
                            "end": 4910
                          },
                          "start": 4909,
                          "end": 4910
                        },
                        {
                          "type": "TSLiteralType",
                          "literal": {
                            "type": "Literal",
                            "value": 4,
                            "raw": "4",
                            "start": 4913,
                            "end": 4914
                          },
                          "start": 4913,
                          "end": 4914
                        },
                        {
                          "type": "TSLiteralType",
                          "literal": {
                            "type": "Literal",
                            "value": 5,
                            "raw": "5",
                            "start": 4917,
                            "end": 4918
                          },
                          "start": 4917,
                          "end": 4918
                        }
                      ],
                      "start": 4897,
                      "end": 4918
                    },
                    "start": 4895,
                    "end": 4918
                  },
                  "start": 4894,
                  "end": 4918
                },
                "init": {
                  "type": "Literal",
                  "value": 0,
                  "raw": "0",
                  "start": 4921,
                  "end": 4922
                },
                "definite": false,
                "start": 4894,
                "end": 4922
              }
            ],
            "declare": false,
            "start": 4890,
            "end": 4923
          },
          {
            "type": "TryStatement",
            "block": {
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
                      "start": 4942,
                      "end": 4943
                    },
                    "right": {
                      "type": "Literal",
                      "value": 1,
                      "raw": "1",
                      "start": 4946,
                      "end": 4947
                    },
                    "start": 4942,
                    "end": 4947
                  },
                  "directive": null,
                  "start": 4942,
                  "end": 4948
                },
                {
                  "type": "TryStatement",
                  "block": {
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
                            "start": 4975,
                            "end": 4976
                          },
                          "right": {
                            "type": "Literal",
                            "value": 2,
                            "raw": "2",
                            "start": 4979,
                            "end": 4980
                          },
                          "start": 4975,
                          "end": 4980
                        },
                        "directive": null,
                        "start": 4975,
                        "end": 4981
                      },
                      {
                        "type": "TryStatement",
                        "block": {
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
                                  "start": 5016,
                                  "end": 5017
                                },
                                "right": {
                                  "type": "Literal",
                                  "value": 3,
                                  "raw": "3",
                                  "start": 5020,
                                  "end": 5021
                                },
                                "start": 5016,
                                "end": 5021
                              },
                              "directive": null,
                              "start": 5016,
                              "end": 5022
                            }
                          ],
                          "start": 4998,
                          "end": 5036
                        },
                        "handler": null,
                        "finalizer": {
                          "type": "BlockStatement",
                          "body": [
                            {
                              "type": "IfStatement",
                              "test": {
                                "type": "UnaryExpression",
                                "operator": "!",
                                "argument": {
                                  "type": "UnaryExpression",
                                  "operator": "!",
                                  "argument": {
                                    "type": "Literal",
                                    "value": true,
                                    "raw": "true",
                                    "start": 5081,
                                    "end": 5085
                                  },
                                  "prefix": true,
                                  "start": 5080,
                                  "end": 5085
                                },
                                "prefix": true,
                                "start": 5079,
                                "end": 5085
                              },
                              "consequent": {
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
                                    "start": 5087,
                                    "end": 5088
                                  },
                                  "right": {
                                    "type": "Literal",
                                    "value": 4,
                                    "raw": "4",
                                    "start": 5091,
                                    "end": 5092
                                  },
                                  "start": 5087,
                                  "end": 5092
                                },
                                "directive": null,
                                "start": 5087,
                                "end": 5093
                              },
                              "alternate": null,
                              "start": 5075,
                              "end": 5093
                            }
                          ],
                          "start": 5057,
                          "end": 5107
                        },
                        "start": 4994,
                        "end": 5107
                      },
                      {
                        "type": "ExpressionStatement",
                        "expression": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 5120,
                          "end": 5121
                        },
                        "directive": null,
                        "start": 5120,
                        "end": 5122
                      }
                    ],
                    "start": 4961,
                    "end": 5142
                  },
                  "handler": null,
                  "finalizer": {
                    "type": "BlockStatement",
                    "body": [
                      {
                        "type": "IfStatement",
                        "test": {
                          "type": "UnaryExpression",
                          "operator": "!",
                          "argument": {
                            "type": "UnaryExpression",
                            "operator": "!",
                            "argument": {
                              "type": "Literal",
                              "value": true,
                              "raw": "true",
                              "start": 5179,
                              "end": 5183
                            },
                            "prefix": true,
                            "start": 5178,
                            "end": 5183
                          },
                          "prefix": true,
                          "start": 5177,
                          "end": 5183
                        },
                        "consequent": {
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
                              "start": 5185,
                              "end": 5186
                            },
                            "right": {
                              "type": "Literal",
                              "value": 5,
                              "raw": "5",
                              "start": 5189,
                              "end": 5190
                            },
                            "start": 5185,
                            "end": 5190
                          },
                          "directive": null,
                          "start": 5185,
                          "end": 5191
                        },
                        "alternate": null,
                        "start": 5173,
                        "end": 5191
                      }
                    ],
                    "start": 5159,
                    "end": 5201
                  },
                  "start": 4957,
                  "end": 5201
                },
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 5210,
                    "end": 5211
                  },
                  "directive": null,
                  "start": 5210,
                  "end": 5212
                }
              ],
              "start": 4932,
              "end": 5232
            },
            "handler": {
              "type": "CatchClause",
              "param": {
                "type": "Identifier",
                "decorators": [],
                "name": "e",
                "optional": false,
                "typeAnnotation": null,
                "start": 5244,
                "end": 5245
              },
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
                      "start": 5257,
                      "end": 5258
                    },
                    "directive": null,
                    "start": 5257,
                    "end": 5259
                  }
                ],
                "start": 5247,
                "end": 5291
              },
              "start": 5237,
              "end": 5291
            },
            "finalizer": null,
            "start": 4928,
            "end": 5291
          }
        ],
        "start": 4884,
        "end": 5293
      },
      "expression": false,
      "start": 4869,
      "end": 5293
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 22,
  "end": 5293
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "function",
    "start": 22,
    "end": 30
  },
  {
    "type": "Identifier",
    "value": "f1",
    "start": 31,
    "end": 33
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 33,
    "end": 34
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 34,
    "end": 35
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 36,
    "end": 37
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 42,
    "end": 45
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 46,
    "end": 47
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 47,
    "end": 48
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 49,
    "end": 55
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 56,
    "end": 57
  },
  {
    "type": "Null",
    "value": "null",
    "start": 58,
    "end": 62
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 63,
    "end": 64
  },
  {
    "type": "Null",
    "value": "null",
    "start": 65,
    "end": 69
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 69,
    "end": 70
  },
  {
    "type": "Keyword",
    "value": "try",
    "start": 75,
    "end": 78
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 79,
    "end": 80
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 89,
    "end": 90
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 91,
    "end": 92
  },
  {
    "type": "Numeric",
    "value": "123",
    "start": 93,
    "end": 96
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 96,
    "end": 97
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 106,
    "end": 112
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 113,
    "end": 114
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 114,
    "end": 115
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 120,
    "end": 121
  },
  {
    "type": "Keyword",
    "value": "catch",
    "start": 126,
    "end": 131
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 132,
    "end": 133
  },
  {
    "type": "Identifier",
    "value": "e",
    "start": 133,
    "end": 134
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 134,
    "end": 135
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 136,
    "end": 137
  },
  {
    "type": "Keyword",
    "value": "throw",
    "start": 146,
    "end": 151
  },
  {
    "type": "Identifier",
    "value": "e",
    "start": 152,
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
    "value": "finally",
    "start": 165,
    "end": 172
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 173,
    "end": 174
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 183,
    "end": 185
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 186,
    "end": 187
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 187,
    "end": 188
  },
  {
    "type": "Punctuator",
    "value": "!=",
    "start": 189,
    "end": 191
  },
  {
    "type": "Null",
    "value": "null",
    "start": 192,
    "end": 196
  },
  {
    "type": "Punctuator",
    "value": "&&",
    "start": 197,
    "end": 199
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 200,
    "end": 201
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 201,
    "end": 202
  },
  {
    "type": "Identifier",
    "value": "toFixed",
    "start": 202,
    "end": 209
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 209,
    "end": 210
  },
  {
    "type": "Numeric",
    "value": "0",
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
    "value": "==",
    "start": 213,
    "end": 215
  },
  {
    "type": "String",
    "value": "\"123\"",
    "start": 216,
    "end": 221
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 221,
    "end": 222
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 223,
    "end": 224
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 234,
    "end": 235
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 240,
    "end": 241
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 242,
    "end": 243
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 245,
    "end": 253
  },
  {
    "type": "Identifier",
    "value": "f2",
    "start": 254,
    "end": 256
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 256,
    "end": 257
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 257,
    "end": 258
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 259,
    "end": 260
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 265,
    "end": 268
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 269,
    "end": 270
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 270,
    "end": 271
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 272,
    "end": 273
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 274,
    "end": 275
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 276,
    "end": 277
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 278,
    "end": 279
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 280,
    "end": 281
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 282,
    "end": 283
  },
  {
    "type": "Numeric",
    "value": "3",
    "start": 284,
    "end": 285
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 286,
    "end": 287
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 288,
    "end": 289
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 289,
    "end": 290
  },
  {
    "type": "Keyword",
    "value": "try",
    "start": 295,
    "end": 298
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 299,
    "end": 300
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 309,
    "end": 310
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 311,
    "end": 312
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 313,
    "end": 314
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 314,
    "end": 315
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 320,
    "end": 321
  },
  {
    "type": "Keyword",
    "value": "catch",
    "start": 326,
    "end": 331
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 332,
    "end": 333
  },
  {
    "type": "Identifier",
    "value": "e",
    "start": 333,
    "end": 334
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 334,
    "end": 335
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 336,
    "end": 337
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 346,
    "end": 347
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 348,
    "end": 349
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 350,
    "end": 351
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 351,
    "end": 352
  },
  {
    "type": "Keyword",
    "value": "throw",
    "start": 361,
    "end": 366
  },
  {
    "type": "Identifier",
    "value": "e",
    "start": 367,
    "end": 368
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 368,
    "end": 369
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 374,
    "end": 375
  },
  {
    "type": "Keyword",
    "value": "finally",
    "start": 380,
    "end": 387
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 388,
    "end": 389
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 398,
    "end": 399
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 399,
    "end": 400
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 419,
    "end": 420
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 425,
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
    "start": 434,
    "end": 435
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 437,
    "end": 445
  },
  {
    "type": "Identifier",
    "value": "f3",
    "start": 446,
    "end": 448
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 448,
    "end": 449
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 449,
    "end": 450
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 451,
    "end": 452
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 457,
    "end": 460
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 461,
    "end": 462
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 462,
    "end": 463
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 464,
    "end": 465
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 466,
    "end": 467
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 468,
    "end": 469
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 470,
    "end": 471
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 472,
    "end": 473
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 474,
    "end": 475
  },
  {
    "type": "Numeric",
    "value": "3",
    "start": 476,
    "end": 477
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 478,
    "end": 479
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 480,
    "end": 481
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 481,
    "end": 482
  },
  {
    "type": "Keyword",
    "value": "try",
    "start": 487,
    "end": 490
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 491,
    "end": 492
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 501,
    "end": 502
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 503,
    "end": 504
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 505,
    "end": 506
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 506,
    "end": 507
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 512,
    "end": 513
  },
  {
    "type": "Keyword",
    "value": "catch",
    "start": 518,
    "end": 523
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 524,
    "end": 525
  },
  {
    "type": "Identifier",
    "value": "e",
    "start": 525,
    "end": 526
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 526,
    "end": 527
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 528,
    "end": 529
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 538,
    "end": 539
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 540,
    "end": 541
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 542,
    "end": 543
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 543,
    "end": 544
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 553,
    "end": 559
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 559,
    "end": 560
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 565,
    "end": 566
  },
  {
    "type": "Keyword",
    "value": "finally",
    "start": 571,
    "end": 578
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 579,
    "end": 580
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 589,
    "end": 590
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 590,
    "end": 591
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 610,
    "end": 611
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 616,
    "end": 617
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 617,
    "end": 618
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 625,
    "end": 626
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 628,
    "end": 636
  },
  {
    "type": "Identifier",
    "value": "f4",
    "start": 637,
    "end": 639
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 639,
    "end": 640
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 640,
    "end": 641
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 642,
    "end": 643
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 648,
    "end": 651
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 652,
    "end": 653
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 653,
    "end": 654
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 655,
    "end": 656
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 657,
    "end": 658
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 659,
    "end": 660
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 661,
    "end": 662
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 663,
    "end": 664
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 665,
    "end": 666
  },
  {
    "type": "Numeric",
    "value": "3",
    "start": 667,
    "end": 668
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 669,
    "end": 670
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 671,
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
    "value": "try",
    "start": 678,
    "end": 681
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 682,
    "end": 683
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 692,
    "end": 693
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 694,
    "end": 695
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 696,
    "end": 697
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 697,
    "end": 698
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 703,
    "end": 704
  },
  {
    "type": "Keyword",
    "value": "catch",
    "start": 709,
    "end": 714
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 715,
    "end": 716
  },
  {
    "type": "Identifier",
    "value": "e",
    "start": 716,
    "end": 717
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 717,
    "end": 718
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 719,
    "end": 720
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 729,
    "end": 730
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 731,
    "end": 732
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 733,
    "end": 734
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 734,
    "end": 735
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 740,
    "end": 741
  },
  {
    "type": "Keyword",
    "value": "finally",
    "start": 746,
    "end": 753
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 754,
    "end": 755
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 764,
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
    "start": 785,
    "end": 786
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 791,
    "end": 792
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 792,
    "end": 793
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 804,
    "end": 805
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 807,
    "end": 815
  },
  {
    "type": "Identifier",
    "value": "f5",
    "start": 816,
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
    "value": "{",
    "start": 821,
    "end": 822
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 827,
    "end": 830
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 831,
    "end": 832
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 832,
    "end": 833
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 834,
    "end": 835
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 836,
    "end": 837
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 838,
    "end": 839
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 840,
    "end": 841
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 842,
    "end": 843
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 844,
    "end": 845
  },
  {
    "type": "Numeric",
    "value": "3",
    "start": 846,
    "end": 847
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 848,
    "end": 849
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 850,
    "end": 851
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 851,
    "end": 852
  },
  {
    "type": "Keyword",
    "value": "try",
    "start": 857,
    "end": 860
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 861,
    "end": 862
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 871,
    "end": 872
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 873,
    "end": 874
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 875,
    "end": 876
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 876,
    "end": 877
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 886,
    "end": 892
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 892,
    "end": 893
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 898,
    "end": 899
  },
  {
    "type": "Keyword",
    "value": "catch",
    "start": 904,
    "end": 909
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 910,
    "end": 911
  },
  {
    "type": "Identifier",
    "value": "e",
    "start": 911,
    "end": 912
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 912,
    "end": 913
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 914,
    "end": 915
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 924,
    "end": 925
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 926,
    "end": 927
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 928,
    "end": 929
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 929,
    "end": 930
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 935,
    "end": 936
  },
  {
    "type": "Keyword",
    "value": "finally",
    "start": 941,
    "end": 948
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 949,
    "end": 950
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 959,
    "end": 960
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 960,
    "end": 961
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 980,
    "end": 981
  },
  {
    "type": "Identifier",
    "value": "x",
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
    "type": "Punctuator",
    "value": "}",
    "start": 995,
    "end": 996
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 998,
    "end": 1006
  },
  {
    "type": "Identifier",
    "value": "f6",
    "start": 1007,
    "end": 1009
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1009,
    "end": 1010
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1010,
    "end": 1011
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1012,
    "end": 1013
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 1018,
    "end": 1021
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1022,
    "end": 1023
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1023,
    "end": 1024
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 1025,
    "end": 1026
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 1027,
    "end": 1028
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 1029,
    "end": 1030
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 1031,
    "end": 1032
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 1033,
    "end": 1034
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 1035,
    "end": 1036
  },
  {
    "type": "Numeric",
    "value": "3",
    "start": 1037,
    "end": 1038
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1039,
    "end": 1040
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 1041,
    "end": 1042
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1042,
    "end": 1043
  },
  {
    "type": "Keyword",
    "value": "try",
    "start": 1048,
    "end": 1051
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1052,
    "end": 1053
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1062,
    "end": 1063
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1064,
    "end": 1065
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 1066,
    "end": 1067
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1067,
    "end": 1068
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1073,
    "end": 1074
  },
  {
    "type": "Keyword",
    "value": "catch",
    "start": 1079,
    "end": 1084
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1085,
    "end": 1086
  },
  {
    "type": "Identifier",
    "value": "e",
    "start": 1086,
    "end": 1087
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1087,
    "end": 1088
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1089,
    "end": 1090
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1099,
    "end": 1100
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1101,
    "end": 1102
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 1103,
    "end": 1104
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1104,
    "end": 1105
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 1114,
    "end": 1120
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1120,
    "end": 1121
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1126,
    "end": 1127
  },
  {
    "type": "Keyword",
    "value": "finally",
    "start": 1132,
    "end": 1139
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1140,
    "end": 1141
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1150,
    "end": 1151
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1151,
    "end": 1152
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1171,
    "end": 1172
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1177,
    "end": 1178
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1178,
    "end": 1179
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1186,
    "end": 1187
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1189,
    "end": 1197
  },
  {
    "type": "Identifier",
    "value": "f7",
    "start": 1198,
    "end": 1200
  },
  {
    "type": "Punctuator",
    "value": "(",
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
    "value": "let",
    "start": 1209,
    "end": 1212
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1213,
    "end": 1214
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1214,
    "end": 1215
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 1216,
    "end": 1217
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 1218,
    "end": 1219
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 1220,
    "end": 1221
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 1222,
    "end": 1223
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 1224,
    "end": 1225
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 1226,
    "end": 1227
  },
  {
    "type": "Numeric",
    "value": "3",
    "start": 1228,
    "end": 1229
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1230,
    "end": 1231
  },
  {
    "type": "Numeric",
    "value": "0",
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
    "type": "Keyword",
    "value": "try",
    "start": 1239,
    "end": 1242
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1243,
    "end": 1244
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1253,
    "end": 1254
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1255,
    "end": 1256
  },
  {
    "type": "Numeric",
    "value": "1",
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
    "value": "return",
    "start": 1268,
    "end": 1274
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1274,
    "end": 1275
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1280,
    "end": 1281
  },
  {
    "type": "Keyword",
    "value": "catch",
    "start": 1286,
    "end": 1291
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1292,
    "end": 1293
  },
  {
    "type": "Identifier",
    "value": "e",
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
    "value": "x",
    "start": 1306,
    "end": 1307
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1308,
    "end": 1309
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 1310,
    "end": 1311
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1311,
    "end": 1312
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 1321,
    "end": 1327
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1327,
    "end": 1328
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1333,
    "end": 1334
  },
  {
    "type": "Keyword",
    "value": "finally",
    "start": 1339,
    "end": 1346
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1347,
    "end": 1348
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1357,
    "end": 1358
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1358,
    "end": 1359
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1378,
    "end": 1379
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1384,
    "end": 1385
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1385,
    "end": 1386
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1403,
    "end": 1404
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1406,
    "end": 1414
  },
  {
    "type": "Identifier",
    "value": "f8",
    "start": 1415,
    "end": 1417
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1417,
    "end": 1418
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1418,
    "end": 1419
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1420,
    "end": 1421
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 1426,
    "end": 1429
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1430,
    "end": 1431
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1431,
    "end": 1432
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 1433,
    "end": 1434
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 1435,
    "end": 1436
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 1437,
    "end": 1438
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1439,
    "end": 1440
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 1441,
    "end": 1442
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1442,
    "end": 1443
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1448,
    "end": 1449
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1449,
    "end": 1450
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1450,
    "end": 1451
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1452,
    "end": 1454
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1455,
    "end": 1456
  },
  {
    "type": "Keyword",
    "value": "try",
    "start": 1465,
    "end": 1468
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1469,
    "end": 1470
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1483,
    "end": 1484
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1485,
    "end": 1486
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 1487,
    "end": 1488
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1488,
    "end": 1489
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 1502,
    "end": 1508
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1508,
    "end": 1509
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1518,
    "end": 1519
  },
  {
    "type": "Keyword",
    "value": "finally",
    "start": 1528,
    "end": 1535
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1536,
    "end": 1537
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1550,
    "end": 1551
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1551,
    "end": 1552
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1571,
    "end": 1572
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1581,
    "end": 1582
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1582,
    "end": 1583
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1604,
    "end": 1605
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1605,
    "end": 1606
  },
  {
    "type": "Punctuator",
    "value": "(",
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
    "type": "Identifier",
    "value": "x",
    "start": 1614,
    "end": 1615
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1615,
    "end": 1616
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1623,
    "end": 1624
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1626,
    "end": 1634
  },
  {
    "type": "Identifier",
    "value": "f9",
    "start": 1635,
    "end": 1637
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1637,
    "end": 1638
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1638,
    "end": 1639
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1640,
    "end": 1641
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 1646,
    "end": 1649
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1650,
    "end": 1651
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1651,
    "end": 1652
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 1653,
    "end": 1654
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 1655,
    "end": 1656
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 1657,
    "end": 1658
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 1659,
    "end": 1660
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 1661,
    "end": 1662
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1663,
    "end": 1664
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 1665,
    "end": 1666
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1666,
    "end": 1667
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1672,
    "end": 1673
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1673,
    "end": 1674
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1674,
    "end": 1675
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1676,
    "end": 1678
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1679,
    "end": 1680
  },
  {
    "type": "Keyword",
    "value": "try",
    "start": 1689,
    "end": 1692
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1693,
    "end": 1694
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 1707,
    "end": 1709
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1710,
    "end": 1711
  },
  {
    "type": "Punctuator",
    "value": "!",
    "start": 1711,
    "end": 1712
  },
  {
    "type": "Punctuator",
    "value": "!",
    "start": 1712,
    "end": 1713
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 1713,
    "end": 1717
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1717,
    "end": 1718
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1719,
    "end": 1720
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1737,
    "end": 1738
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1739,
    "end": 1740
  },
  {
    "type": "Numeric",
    "value": "1",
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
    "value": "return",
    "start": 1760,
    "end": 1766
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1766,
    "end": 1767
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1780,
    "end": 1781
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1790,
    "end": 1791
  },
  {
    "type": "Keyword",
    "value": "finally",
    "start": 1800,
    "end": 1807
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1808,
    "end": 1809
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1822,
    "end": 1823
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1823,
    "end": 1824
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1843,
    "end": 1844
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1853,
    "end": 1854
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1854,
    "end": 1855
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1870,
    "end": 1871
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1872,
    "end": 1873
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 1874,
    "end": 1875
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1875,
    "end": 1876
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1881,
    "end": 1882
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1882,
    "end": 1883
  },
  {
    "type": "Punctuator",
    "value": "(",
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
    "value": ";",
    "start": 1885,
    "end": 1886
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1891,
    "end": 1892
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1892,
    "end": 1893
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1904,
    "end": 1905
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1907,
    "end": 1915
  },
  {
    "type": "Identifier",
    "value": "f10",
    "start": 1916,
    "end": 1919
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1919,
    "end": 1920
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1920,
    "end": 1921
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1922,
    "end": 1923
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 1928,
    "end": 1931
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1932,
    "end": 1933
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1933,
    "end": 1934
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 1935,
    "end": 1936
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 1937,
    "end": 1938
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 1939,
    "end": 1940
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 1941,
    "end": 1942
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 1943,
    "end": 1944
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 1945,
    "end": 1946
  },
  {
    "type": "Numeric",
    "value": "3",
    "start": 1947,
    "end": 1948
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1949,
    "end": 1950
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 1951,
    "end": 1952
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1952,
    "end": 1953
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1958,
    "end": 1959
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1959,
    "end": 1960
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1960,
    "end": 1961
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1962,
    "end": 1964
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1965,
    "end": 1966
  },
  {
    "type": "Keyword",
    "value": "try",
    "start": 1975,
    "end": 1978
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1979,
    "end": 1980
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1993,
    "end": 1994
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1995,
    "end": 1996
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 1997,
    "end": 1998
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1998,
    "end": 1999
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 2012,
    "end": 2018
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2018,
    "end": 2019
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2028,
    "end": 2029
  },
  {
    "type": "Keyword",
    "value": "catch",
    "start": 2038,
    "end": 2043
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2044,
    "end": 2045
  },
  {
    "type": "Identifier",
    "value": "e",
    "start": 2045,
    "end": 2046
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2046,
    "end": 2047
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2048,
    "end": 2049
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2062,
    "end": 2063
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2064,
    "end": 2065
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 2066,
    "end": 2067
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2067,
    "end": 2068
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2077,
    "end": 2078
  },
  {
    "type": "Keyword",
    "value": "finally",
    "start": 2087,
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
    "start": 2134,
    "end": 2135
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2144,
    "end": 2145
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2145,
    "end": 2146
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2161,
    "end": 2162
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2163,
    "end": 2164
  },
  {
    "type": "Numeric",
    "value": "3",
    "start": 2165,
    "end": 2166
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2166,
    "end": 2167
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2172,
    "end": 2173
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2173,
    "end": 2174
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2174,
    "end": 2175
  },
  {
    "type": "Punctuator",
    "value": ")",
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
    "type": "Identifier",
    "value": "x",
    "start": 2182,
    "end": 2183
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2183,
    "end": 2184
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2195,
    "end": 2196
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 2198,
    "end": 2206
  },
  {
    "type": "Identifier",
    "value": "f11",
    "start": 2207,
    "end": 2210
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2210,
    "end": 2211
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2211,
    "end": 2212
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2213,
    "end": 2214
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 2219,
    "end": 2222
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2223,
    "end": 2224
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2224,
    "end": 2225
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 2226,
    "end": 2227
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 2228,
    "end": 2229
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 2230,
    "end": 2231
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 2232,
    "end": 2233
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 2234,
    "end": 2235
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 2236,
    "end": 2237
  },
  {
    "type": "Numeric",
    "value": "3",
    "start": 2238,
    "end": 2239
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 2240,
    "end": 2241
  },
  {
    "type": "Numeric",
    "value": "4",
    "start": 2242,
    "end": 2243
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 2244,
    "end": 2245
  },
  {
    "type": "Numeric",
    "value": "5",
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
    "type": "Numeric",
    "value": "0",
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
    "value": "(",
    "start": 2257,
    "end": 2258
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2258,
    "end": 2259
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2259,
    "end": 2260
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 2261,
    "end": 2263
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2264,
    "end": 2265
  },
  {
    "type": "Keyword",
    "value": "try",
    "start": 2274,
    "end": 2277
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2278,
    "end": 2279
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 2292,
    "end": 2294
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2295,
    "end": 2296
  },
  {
    "type": "Punctuator",
    "value": "!",
    "start": 2296,
    "end": 2297
  },
  {
    "type": "Punctuator",
    "value": "!",
    "start": 2297,
    "end": 2298
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 2298,
    "end": 2302
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2302,
    "end": 2303
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2304,
    "end": 2305
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2322,
    "end": 2323
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2324,
    "end": 2325
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 2326,
    "end": 2327
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2327,
    "end": 2328
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 2345,
    "end": 2351
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2351,
    "end": 2352
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2365,
    "end": 2366
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 2379,
    "end": 2381
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2382,
    "end": 2383
  },
  {
    "type": "Punctuator",
    "value": "!",
    "start": 2383,
    "end": 2384
  },
  {
    "type": "Punctuator",
    "value": "!",
    "start": 2384,
    "end": 2385
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 2385,
    "end": 2389
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2389,
    "end": 2390
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2391,
    "end": 2392
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2409,
    "end": 2410
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2411,
    "end": 2412
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 2413,
    "end": 2414
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2414,
    "end": 2415
  },
  {
    "type": "Keyword",
    "value": "throw",
    "start": 2432,
    "end": 2437
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 2438,
    "end": 2439
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2439,
    "end": 2440
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2453,
    "end": 2454
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2463,
    "end": 2464
  },
  {
    "type": "Keyword",
    "value": "catch",
    "start": 2473,
    "end": 2478
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2479,
    "end": 2480
  },
  {
    "type": "Identifier",
    "value": "e",
    "start": 2480,
    "end": 2481
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2481,
    "end": 2482
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2483,
    "end": 2484
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2497,
    "end": 2498
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2498,
    "end": 2499
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2526,
    "end": 2527
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2528,
    "end": 2529
  },
  {
    "type": "Numeric",
    "value": "3",
    "start": 2530,
    "end": 2531
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2531,
    "end": 2532
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2541,
    "end": 2542
  },
  {
    "type": "Keyword",
    "value": "finally",
    "start": 2551,
    "end": 2558
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2559,
    "end": 2560
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2573,
    "end": 2574
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2574,
    "end": 2575
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 2606,
    "end": 2608
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2609,
    "end": 2610
  },
  {
    "type": "Punctuator",
    "value": "!",
    "start": 2610,
    "end": 2611
  },
  {
    "type": "Punctuator",
    "value": "!",
    "start": 2611,
    "end": 2612
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 2612,
    "end": 2616
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2616,
    "end": 2617
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2618,
    "end": 2619
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2636,
    "end": 2637
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2638,
    "end": 2639
  },
  {
    "type": "Numeric",
    "value": "4",
    "start": 2640,
    "end": 2641
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2641,
    "end": 2642
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2655,
    "end": 2656
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2665,
    "end": 2666
  },
  {
    "type": "Identifier",
    "value": "x",
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
    "type": "Identifier",
    "value": "x",
    "start": 2700,
    "end": 2701
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2702,
    "end": 2703
  },
  {
    "type": "Numeric",
    "value": "5",
    "start": 2704,
    "end": 2705
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2705,
    "end": 2706
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
    "value": "(",
    "start": 2713,
    "end": 2714
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2714,
    "end": 2715
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2715,
    "end": 2716
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2721,
    "end": 2722
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2722,
    "end": 2723
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2738,
    "end": 2739
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 2741,
    "end": 2749
  },
  {
    "type": "Identifier",
    "value": "f12",
    "start": 2750,
    "end": 2753
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2753,
    "end": 2754
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2754,
    "end": 2755
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2756,
    "end": 2757
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 2762,
    "end": 2765
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2766,
    "end": 2767
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2767,
    "end": 2768
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 2769,
    "end": 2770
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 2771,
    "end": 2772
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 2773,
    "end": 2774
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 2775,
    "end": 2776
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 2777,
    "end": 2778
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 2779,
    "end": 2780
  },
  {
    "type": "Numeric",
    "value": "3",
    "start": 2781,
    "end": 2782
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 2783,
    "end": 2784
  },
  {
    "type": "Numeric",
    "value": "4",
    "start": 2785,
    "end": 2786
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 2787,
    "end": 2788
  },
  {
    "type": "Numeric",
    "value": "5",
    "start": 2789,
    "end": 2790
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 2791,
    "end": 2792
  },
  {
    "type": "Numeric",
    "value": "6",
    "start": 2793,
    "end": 2794
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 2795,
    "end": 2796
  },
  {
    "type": "Numeric",
    "value": "7",
    "start": 2797,
    "end": 2798
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2799,
    "end": 2800
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 2801,
    "end": 2802
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2802,
    "end": 2803
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2808,
    "end": 2809
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2809,
    "end": 2810
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2810,
    "end": 2811
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 2812,
    "end": 2814
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2815,
    "end": 2816
  },
  {
    "type": "Keyword",
    "value": "try",
    "start": 2825,
    "end": 2828
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2829,
    "end": 2830
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 2843,
    "end": 2845
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2846,
    "end": 2847
  },
  {
    "type": "Punctuator",
    "value": "!",
    "start": 2847,
    "end": 2848
  },
  {
    "type": "Punctuator",
    "value": "!",
    "start": 2848,
    "end": 2849
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 2849,
    "end": 2853
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2853,
    "end": 2854
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2855,
    "end": 2856
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2873,
    "end": 2874
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2875,
    "end": 2876
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 2877,
    "end": 2878
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2878,
    "end": 2879
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 2896,
    "end": 2902
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2902,
    "end": 2903
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2916,
    "end": 2917
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 2930,
    "end": 2932
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2933,
    "end": 2934
  },
  {
    "type": "Punctuator",
    "value": "!",
    "start": 2934,
    "end": 2935
  },
  {
    "type": "Punctuator",
    "value": "!",
    "start": 2935,
    "end": 2936
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 2936,
    "end": 2940
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2940,
    "end": 2941
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2942,
    "end": 2943
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2960,
    "end": 2961
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2962,
    "end": 2963
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 2964,
    "end": 2965
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2965,
    "end": 2966
  },
  {
    "type": "Keyword",
    "value": "throw",
    "start": 2983,
    "end": 2988
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 2989,
    "end": 2990
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2990,
    "end": 2991
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3004,
    "end": 3005
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3014,
    "end": 3015
  },
  {
    "type": "Keyword",
    "value": "catch",
    "start": 3024,
    "end": 3029
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3030,
    "end": 3031
  },
  {
    "type": "Identifier",
    "value": "e",
    "start": 3031,
    "end": 3032
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3032,
    "end": 3033
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3034,
    "end": 3035
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 3048,
    "end": 3049
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3049,
    "end": 3050
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 3077,
    "end": 3078
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3079,
    "end": 3080
  },
  {
    "type": "Numeric",
    "value": "3",
    "start": 3081,
    "end": 3082
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3082,
    "end": 3083
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3092,
    "end": 3093
  },
  {
    "type": "Keyword",
    "value": "finally",
    "start": 3102,
    "end": 3109
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3110,
    "end": 3111
  },
  {
    "type": "Identifier",
    "value": "x",
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
    "type": "Keyword",
    "value": "if",
    "start": 3157,
    "end": 3159
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3160,
    "end": 3161
  },
  {
    "type": "Punctuator",
    "value": "!",
    "start": 3161,
    "end": 3162
  },
  {
    "type": "Punctuator",
    "value": "!",
    "start": 3162,
    "end": 3163
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 3163,
    "end": 3167
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3167,
    "end": 3168
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3169,
    "end": 3170
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 3187,
    "end": 3188
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3189,
    "end": 3190
  },
  {
    "type": "Numeric",
    "value": "4",
    "start": 3191,
    "end": 3192
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3192,
    "end": 3193
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 3210,
    "end": 3216
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3216,
    "end": 3217
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3230,
    "end": 3231
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 3244,
    "end": 3246
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3247,
    "end": 3248
  },
  {
    "type": "Punctuator",
    "value": "!",
    "start": 3248,
    "end": 3249
  },
  {
    "type": "Punctuator",
    "value": "!",
    "start": 3249,
    "end": 3250
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 3250,
    "end": 3254
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3254,
    "end": 3255
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3256,
    "end": 3257
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 3274,
    "end": 3275
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3276,
    "end": 3277
  },
  {
    "type": "Numeric",
    "value": "5",
    "start": 3278,
    "end": 3279
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3279,
    "end": 3280
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 3297,
    "end": 3303
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3303,
    "end": 3304
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3317,
    "end": 3318
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 3331,
    "end": 3332
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3333,
    "end": 3334
  },
  {
    "type": "Numeric",
    "value": "6",
    "start": 3335,
    "end": 3336
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3336,
    "end": 3337
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 3350,
    "end": 3356
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3356,
    "end": 3357
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 3370,
    "end": 3371
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3371,
    "end": 3372
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3396,
    "end": 3397
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 3406,
    "end": 3407
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3407,
    "end": 3408
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 3432,
    "end": 3433
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3434,
    "end": 3435
  },
  {
    "type": "Numeric",
    "value": "7",
    "start": 3436,
    "end": 3437
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3437,
    "end": 3438
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3456,
    "end": 3457
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3457,
    "end": 3458
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3458,
    "end": 3459
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3459,
    "end": 3460
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3460,
    "end": 3461
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 3466,
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
    "start": 3483,
    "end": 3484
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 3508,
    "end": 3513
  },
  {
    "type": "Identifier",
    "value": "main",
    "start": 3514,
    "end": 3518
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3519,
    "end": 3520
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3521,
    "end": 3522
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3522,
    "end": 3523
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 3524,
    "end": 3526
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3527,
    "end": 3528
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 3533,
    "end": 3536
  },
  {
    "type": "Identifier",
    "value": "hoge",
    "start": 3537,
    "end": 3541
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3541,
    "end": 3542
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 3543,
    "end": 3549
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 3550,
    "end": 3551
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 3552,
    "end": 3561
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3562,
    "end": 3563
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 3564,
    "end": 3573
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3573,
    "end": 3574
  },
  {
    "type": "Keyword",
    "value": "try",
    "start": 3579,
    "end": 3582
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3583,
    "end": 3584
  },
  {
    "type": "Identifier",
    "value": "hoge",
    "start": 3593,
    "end": 3597
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3598,
    "end": 3599
  },
  {
    "type": "String",
    "value": "'hoge!'",
    "start": 3600,
    "end": 3607
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3607,
    "end": 3608
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 3617,
    "end": 3623
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3623,
    "end": 3624
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3629,
    "end": 3630
  },
  {
    "type": "Keyword",
    "value": "catch",
    "start": 3635,
    "end": 3640
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3641,
    "end": 3642
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 3651,
    "end": 3657
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3657,
    "end": 3658
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3663,
    "end": 3664
  },
  {
    "type": "Keyword",
    "value": "finally",
    "start": 3669,
    "end": 3676
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3677,
    "end": 3678
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 3687,
    "end": 3689
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3690,
    "end": 3691
  },
  {
    "type": "Identifier",
    "value": "hoge",
    "start": 3691,
    "end": 3695
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3695,
    "end": 3696
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3697,
    "end": 3698
  },
  {
    "type": "Identifier",
    "value": "hoge",
    "start": 3711,
    "end": 3715
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 3715,
    "end": 3716
  },
  {
    "type": "Identifier",
    "value": "length",
    "start": 3716,
    "end": 3722
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3722,
    "end": 3723
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3732,
    "end": 3733
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 3742,
    "end": 3748
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3748,
    "end": 3749
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3754,
    "end": 3755
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3756,
    "end": 3757
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 3781,
    "end": 3789
  },
  {
    "type": "Identifier",
    "value": "t1",
    "start": 3790,
    "end": 3792
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3792,
    "end": 3793
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3793,
    "end": 3794
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3795,
    "end": 3796
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 3801,
    "end": 3806
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 3807,
    "end": 3808
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3809,
    "end": 3810
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3811,
    "end": 3812
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3812,
    "end": 3813
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3813,
    "end": 3814
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 3815,
    "end": 3817
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3818,
    "end": 3819
  },
  {
    "type": "Keyword",
    "value": "try",
    "start": 3828,
    "end": 3831
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3832,
    "end": 3833
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 3846,
    "end": 3852
  },
  {
    "type": "String",
    "value": "'x'",
    "start": 3853,
    "end": 3856
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3856,
    "end": 3857
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3866,
    "end": 3867
  },
  {
    "type": "Keyword",
    "value": "catch",
    "start": 3876,
    "end": 3881
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3882,
    "end": 3883
  },
  {
    "type": "Identifier",
    "value": "e",
    "start": 3883,
    "end": 3884
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3884,
    "end": 3885
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3886,
    "end": 3887
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 3900,
    "end": 3906
  },
  {
    "type": "Null",
    "value": "null",
    "start": 3907,
    "end": 3911
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3911,
    "end": 3912
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3921,
    "end": 3922
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 3931,
    "end": 3932
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3932,
    "end": 3933
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3954,
    "end": 3955
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3955,
    "end": 3956
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3956,
    "end": 3957
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3957,
    "end": 3958
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3958,
    "end": 3959
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 3964,
    "end": 3965
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3965,
    "end": 3966
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3981,
    "end": 3982
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 4006,
    "end": 4010
  },
  {
    "type": "Identifier",
    "value": "State",
    "start": 4011,
    "end": 4016
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 4017,
    "end": 4018
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 4019,
    "end": 4020
  },
  {
    "type": "Identifier",
    "value": "tag",
    "start": 4021,
    "end": 4024
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4024,
    "end": 4025
  },
  {
    "type": "String",
    "value": "\"one\"",
    "start": 4026,
    "end": 4031
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 4032,
    "end": 4033
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 4034,
    "end": 4035
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 4036,
    "end": 4037
  },
  {
    "type": "Identifier",
    "value": "tag",
    "start": 4038,
    "end": 4041
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4041,
    "end": 4042
  },
  {
    "type": "String",
    "value": "\"two\"",
    "start": 4043,
    "end": 4048
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 4049,
    "end": 4050
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 4051,
    "end": 4052
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 4053,
    "end": 4054
  },
  {
    "type": "Identifier",
    "value": "tag",
    "start": 4055,
    "end": 4058
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4058,
    "end": 4059
  },
  {
    "type": "String",
    "value": "\"three\"",
    "start": 4060,
    "end": 4067
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 4068,
    "end": 4069
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4069,
    "end": 4070
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 4072,
    "end": 4080
  },
  {
    "type": "Identifier",
    "value": "notallowed",
    "start": 4081,
    "end": 4091
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4091,
    "end": 4092
  },
  {
    "type": "Identifier",
    "value": "arg",
    "start": 4092,
    "end": 4095
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4095,
    "end": 4096
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 4097,
    "end": 4103
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4103,
    "end": 4104
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 4105,
    "end": 4106
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 4111,
    "end": 4114
  },
  {
    "type": "Identifier",
    "value": "state",
    "start": 4115,
    "end": 4120
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4120,
    "end": 4121
  },
  {
    "type": "Identifier",
    "value": "State",
    "start": 4122,
    "end": 4127
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 4128,
    "end": 4129
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 4130,
    "end": 4131
  },
  {
    "type": "Identifier",
    "value": "tag",
    "start": 4132,
    "end": 4135
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4135,
    "end": 4136
  },
  {
    "type": "String",
    "value": "\"one\"",
    "start": 4137,
    "end": 4142
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 4143,
    "end": 4144
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4144,
    "end": 4145
  },
  {
    "type": "Keyword",
    "value": "try",
    "start": 4150,
    "end": 4153
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 4154,
    "end": 4155
  },
  {
    "type": "Identifier",
    "value": "state",
    "start": 4164,
    "end": 4169
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 4170,
    "end": 4171
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 4172,
    "end": 4173
  },
  {
    "type": "Identifier",
    "value": "tag",
    "start": 4174,
    "end": 4177
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4177,
    "end": 4178
  },
  {
    "type": "String",
    "value": "\"two\"",
    "start": 4179,
    "end": 4184
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 4185,
    "end": 4186
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4186,
    "end": 4187
  },
  {
    "type": "Keyword",
    "value": "try",
    "start": 4196,
    "end": 4199
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 4200,
    "end": 4201
  },
  {
    "type": "Identifier",
    "value": "state",
    "start": 4214,
    "end": 4219
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 4220,
    "end": 4221
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 4222,
    "end": 4223
  },
  {
    "type": "Identifier",
    "value": "tag",
    "start": 4224,
    "end": 4227
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4227,
    "end": 4228
  },
  {
    "type": "String",
    "value": "\"three\"",
    "start": 4229,
    "end": 4236
  },
  {
    "type": "Punctuator",
    "value": "}",
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
    "type": "Punctuator",
    "value": "}",
    "start": 4248,
    "end": 4249
  },
  {
    "type": "Keyword",
    "value": "finally",
    "start": 4258,
    "end": 4265
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 4266,
    "end": 4267
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 4268,
    "end": 4269
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 4274,
    "end": 4275
  },
  {
    "type": "Keyword",
    "value": "catch",
    "start": 4280,
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
    "value": "err",
    "start": 4287,
    "end": 4290
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4290,
    "end": 4291
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 4292,
    "end": 4293
  },
  {
    "type": "Identifier",
    "value": "state",
    "start": 4302,
    "end": 4307
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 4307,
    "end": 4308
  },
  {
    "type": "Identifier",
    "value": "tag",
    "start": 4308,
    "end": 4311
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4311,
    "end": 4312
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 4321,
    "end": 4323
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4324,
    "end": 4325
  },
  {
    "type": "Identifier",
    "value": "state",
    "start": 4325,
    "end": 4330
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 4330,
    "end": 4331
  },
  {
    "type": "Identifier",
    "value": "tag",
    "start": 4331,
    "end": 4334
  },
  {
    "type": "Punctuator",
    "value": "!==",
    "start": 4335,
    "end": 4338
  },
  {
    "type": "String",
    "value": "\"one\"",
    "start": 4339,
    "end": 4344
  },
  {
    "type": "Punctuator",
    "value": "&&",
    "start": 4345,
    "end": 4347
  },
  {
    "type": "Identifier",
    "value": "state",
    "start": 4348,
    "end": 4353
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 4353,
    "end": 4354
  },
  {
    "type": "Identifier",
    "value": "tag",
    "start": 4354,
    "end": 4357
  },
  {
    "type": "Punctuator",
    "value": "!==",
    "start": 4358,
    "end": 4361
  },
  {
    "type": "String",
    "value": "\"two\"",
    "start": 4362,
    "end": 4367
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4367,
    "end": 4368
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 4369,
    "end": 4370
  },
  {
    "type": "Identifier",
    "value": "console",
    "start": 4383,
    "end": 4390
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 4390,
    "end": 4391
  },
  {
    "type": "Identifier",
    "value": "log",
    "start": 4391,
    "end": 4394
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4394,
    "end": 4395
  },
  {
    "type": "Identifier",
    "value": "state",
    "start": 4395,
    "end": 4400
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 4400,
    "end": 4401
  },
  {
    "type": "Identifier",
    "value": "tag",
    "start": 4401,
    "end": 4404
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4404,
    "end": 4405
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4405,
    "end": 4406
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 4415,
    "end": 4416
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 4421,
    "end": 4422
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 4423,
    "end": 4424
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 4426,
    "end": 4434
  },
  {
    "type": "Identifier",
    "value": "f20",
    "start": 4435,
    "end": 4438
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4438,
    "end": 4439
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4439,
    "end": 4440
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 4441,
    "end": 4442
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 4447,
    "end": 4450
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 4451,
    "end": 4452
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4452,
    "end": 4453
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 4454,
    "end": 4455
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 4456,
    "end": 4457
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 4458,
    "end": 4459
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 4460,
    "end": 4461
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 4462,
    "end": 4463
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 4464,
    "end": 4465
  },
  {
    "type": "Numeric",
    "value": "3",
    "start": 4466,
    "end": 4467
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 4468,
    "end": 4469
  },
  {
    "type": "Numeric",
    "value": "4",
    "start": 4470,
    "end": 4471
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 4472,
    "end": 4473
  },
  {
    "type": "Numeric",
    "value": "5",
    "start": 4474,
    "end": 4475
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 4476,
    "end": 4477
  },
  {
    "type": "Numeric",
    "value": "6",
    "start": 4478,
    "end": 4479
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 4480,
    "end": 4481
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 4482,
    "end": 4483
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4483,
    "end": 4484
  },
  {
    "type": "Keyword",
    "value": "try",
    "start": 4489,
    "end": 4492
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 4493,
    "end": 4494
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 4503,
    "end": 4504
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 4505,
    "end": 4506
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 4507,
    "end": 4508
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4508,
    "end": 4509
  },
  {
    "type": "Keyword",
    "value": "try",
    "start": 4518,
    "end": 4521
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 4522,
    "end": 4523
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 4536,
    "end": 4537
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 4538,
    "end": 4539
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 4540,
    "end": 4541
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4541,
    "end": 4542
  },
  {
    "type": "Keyword",
    "value": "try",
    "start": 4555,
    "end": 4558
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 4559,
    "end": 4560
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 4577,
    "end": 4578
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 4579,
    "end": 4580
  },
  {
    "type": "Numeric",
    "value": "3",
    "start": 4581,
    "end": 4582
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4582,
    "end": 4583
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 4596,
    "end": 4597
  },
  {
    "type": "Keyword",
    "value": "finally",
    "start": 4610,
    "end": 4617
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 4618,
    "end": 4619
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 4636,
    "end": 4638
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4639,
    "end": 4640
  },
  {
    "type": "Punctuator",
    "value": "!",
    "start": 4640,
    "end": 4641
  },
  {
    "type": "Punctuator",
    "value": "!",
    "start": 4641,
    "end": 4642
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 4642,
    "end": 4646
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4646,
    "end": 4647
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 4648,
    "end": 4649
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 4650,
    "end": 4651
  },
  {
    "type": "Numeric",
    "value": "4",
    "start": 4652,
    "end": 4653
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4653,
    "end": 4654
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 4667,
    "end": 4668
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 4681,
    "end": 4682
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4682,
    "end": 4683
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 4702,
    "end": 4703
  },
  {
    "type": "Keyword",
    "value": "finally",
    "start": 4712,
    "end": 4719
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 4720,
    "end": 4721
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 4734,
    "end": 4736
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4737,
    "end": 4738
  },
  {
    "type": "Punctuator",
    "value": "!",
    "start": 4738,
    "end": 4739
  },
  {
    "type": "Punctuator",
    "value": "!",
    "start": 4739,
    "end": 4740
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 4740,
    "end": 4744
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4744,
    "end": 4745
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 4746,
    "end": 4747
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 4748,
    "end": 4749
  },
  {
    "type": "Numeric",
    "value": "5",
    "start": 4750,
    "end": 4751
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4751,
    "end": 4752
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 4761,
    "end": 4762
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 4771,
    "end": 4772
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4772,
    "end": 4773
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 4792,
    "end": 4793
  },
  {
    "type": "Keyword",
    "value": "finally",
    "start": 4798,
    "end": 4805
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 4806,
    "end": 4807
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 4816,
    "end": 4818
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4819,
    "end": 4820
  },
  {
    "type": "Punctuator",
    "value": "!",
    "start": 4820,
    "end": 4821
  },
  {
    "type": "Punctuator",
    "value": "!",
    "start": 4821,
    "end": 4822
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 4822,
    "end": 4826
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4826,
    "end": 4827
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 4828,
    "end": 4829
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 4830,
    "end": 4831
  },
  {
    "type": "Numeric",
    "value": "6",
    "start": 4832,
    "end": 4833
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4833,
    "end": 4834
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 4839,
    "end": 4840
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 4845,
    "end": 4846
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4846,
    "end": 4847
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 4866,
    "end": 4867
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 4869,
    "end": 4877
  },
  {
    "type": "Identifier",
    "value": "f21",
    "start": 4878,
    "end": 4881
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4881,
    "end": 4882
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4882,
    "end": 4883
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 4884,
    "end": 4885
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 4890,
    "end": 4893
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 4894,
    "end": 4895
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4895,
    "end": 4896
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 4897,
    "end": 4898
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 4899,
    "end": 4900
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 4901,
    "end": 4902
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 4903,
    "end": 4904
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 4905,
    "end": 4906
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 4907,
    "end": 4908
  },
  {
    "type": "Numeric",
    "value": "3",
    "start": 4909,
    "end": 4910
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 4911,
    "end": 4912
  },
  {
    "type": "Numeric",
    "value": "4",
    "start": 4913,
    "end": 4914
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 4915,
    "end": 4916
  },
  {
    "type": "Numeric",
    "value": "5",
    "start": 4917,
    "end": 4918
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 4919,
    "end": 4920
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 4921,
    "end": 4922
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4922,
    "end": 4923
  },
  {
    "type": "Keyword",
    "value": "try",
    "start": 4928,
    "end": 4931
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 4932,
    "end": 4933
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 4942,
    "end": 4943
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 4944,
    "end": 4945
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 4946,
    "end": 4947
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4947,
    "end": 4948
  },
  {
    "type": "Keyword",
    "value": "try",
    "start": 4957,
    "end": 4960
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 4961,
    "end": 4962
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 4975,
    "end": 4976
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 4977,
    "end": 4978
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 4979,
    "end": 4980
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4980,
    "end": 4981
  },
  {
    "type": "Keyword",
    "value": "try",
    "start": 4994,
    "end": 4997
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 4998,
    "end": 4999
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 5016,
    "end": 5017
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 5018,
    "end": 5019
  },
  {
    "type": "Numeric",
    "value": "3",
    "start": 5020,
    "end": 5021
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 5021,
    "end": 5022
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 5035,
    "end": 5036
  },
  {
    "type": "Keyword",
    "value": "finally",
    "start": 5049,
    "end": 5056
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 5057,
    "end": 5058
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 5075,
    "end": 5077
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 5078,
    "end": 5079
  },
  {
    "type": "Punctuator",
    "value": "!",
    "start": 5079,
    "end": 5080
  },
  {
    "type": "Punctuator",
    "value": "!",
    "start": 5080,
    "end": 5081
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 5081,
    "end": 5085
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 5085,
    "end": 5086
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 5087,
    "end": 5088
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 5089,
    "end": 5090
  },
  {
    "type": "Numeric",
    "value": "4",
    "start": 5091,
    "end": 5092
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 5092,
    "end": 5093
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 5106,
    "end": 5107
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 5120,
    "end": 5121
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 5121,
    "end": 5122
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 5141,
    "end": 5142
  },
  {
    "type": "Keyword",
    "value": "finally",
    "start": 5151,
    "end": 5158
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 5159,
    "end": 5160
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 5173,
    "end": 5175
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 5176,
    "end": 5177
  },
  {
    "type": "Punctuator",
    "value": "!",
    "start": 5177,
    "end": 5178
  },
  {
    "type": "Punctuator",
    "value": "!",
    "start": 5178,
    "end": 5179
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 5179,
    "end": 5183
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 5183,
    "end": 5184
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 5185,
    "end": 5186
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 5187,
    "end": 5188
  },
  {
    "type": "Numeric",
    "value": "5",
    "start": 5189,
    "end": 5190
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 5190,
    "end": 5191
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 5200,
    "end": 5201
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 5210,
    "end": 5211
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 5211,
    "end": 5212
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 5231,
    "end": 5232
  },
  {
    "type": "Keyword",
    "value": "catch",
    "start": 5237,
    "end": 5242
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 5243,
    "end": 5244
  },
  {
    "type": "Identifier",
    "value": "e",
    "start": 5244,
    "end": 5245
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 5245,
    "end": 5246
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 5247,
    "end": 5248
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 5257,
    "end": 5258
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 5258,
    "end": 5259
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 5290,
    "end": 5291
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 5292,
    "end": 5293
  }
]
```
