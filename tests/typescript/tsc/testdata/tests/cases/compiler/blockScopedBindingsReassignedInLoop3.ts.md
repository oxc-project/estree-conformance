__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
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
              "start": 9,
              "end": 10
            },
            "init": {
              "type": "Literal",
              "value": 1,
              "raw": "1",
              "start": 13,
              "end": 14
            },
            "definite": false,
            "start": 9,
            "end": 14
          },
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "y",
              "optional": false,
              "typeAnnotation": null,
              "start": 16,
              "end": 17
            },
            "init": {
              "type": "Literal",
              "value": 2,
              "raw": "2",
              "start": 20,
              "end": 21
            },
            "definite": false,
            "start": 16,
            "end": 21
          }
        ],
        "declare": false,
        "start": 5,
        "end": 21
      },
      "test": {
        "type": "BinaryExpression",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": null,
          "start": 23,
          "end": 24
        },
        "operator": "<",
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "y",
          "optional": false,
          "typeAnnotation": null,
          "start": 27,
          "end": 28
        },
        "start": 23,
        "end": 28
      },
      "update": {
        "type": "SequenceExpression",
        "expressions": [
          {
            "type": "UpdateExpression",
            "operator": "++",
            "prefix": true,
            "argument": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 32,
              "end": 33
            },
            "start": 30,
            "end": 33
          },
          {
            "type": "UpdateExpression",
            "operator": "--",
            "prefix": true,
            "argument": {
              "type": "Identifier",
              "decorators": [],
              "name": "y",
              "optional": false,
              "typeAnnotation": null,
              "start": 37,
              "end": 38
            },
            "start": 35,
            "end": 38
          }
        ],
        "start": 30,
        "end": 38
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
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 50,
                  "end": 51
                },
                "init": {
                  "type": "ArrowFunctionExpression",
                  "expression": true,
                  "async": false,
                  "typeParameters": null,
                  "params": [],
                  "returnType": null,
                  "body": {
                    "type": "BinaryExpression",
                    "left": {
                      "type": "UpdateExpression",
                      "operator": "++",
                      "prefix": false,
                      "argument": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 60,
                        "end": 61
                      },
                      "start": 60,
                      "end": 63
                    },
                    "operator": "+",
                    "right": {
                      "type": "UpdateExpression",
                      "operator": "++",
                      "prefix": false,
                      "argument": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "y",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 66,
                        "end": 67
                      },
                      "start": 66,
                      "end": 69
                    },
                    "start": 60,
                    "end": 69
                  },
                  "id": null,
                  "generator": false,
                  "start": 54,
                  "end": 69
                },
                "definite": false,
                "start": 50,
                "end": 69
              }
            ],
            "declare": false,
            "start": 46,
            "end": 70
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
                "start": 79,
                "end": 80
              },
              "operator": "==",
              "right": {
                "type": "Literal",
                "value": 1,
                "raw": "1",
                "start": 84,
                "end": 85
              },
              "start": 79,
              "end": 85
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "BreakStatement",
                  "label": null,
                  "start": 97,
                  "end": 103
                }
              ],
              "start": 87,
              "end": 109
            },
            "alternate": {
              "type": "BlockStatement",
              "body": [
                {
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
                          "name": "a",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 138,
                          "end": 139
                        },
                        "init": {
                          "type": "Literal",
                          "value": 1,
                          "raw": "1",
                          "start": 142,
                          "end": 143
                        },
                        "definite": false,
                        "start": 138,
                        "end": 143
                      }
                    ],
                    "declare": false,
                    "start": 134,
                    "end": 143
                  },
                  "test": {
                    "type": "BinaryExpression",
                    "left": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "a",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 145,
                      "end": 146
                    },
                    "operator": "<",
                    "right": {
                      "type": "Literal",
                      "value": 5,
                      "raw": "5",
                      "start": 149,
                      "end": 150
                    },
                    "start": 145,
                    "end": 150
                  },
                  "update": {
                    "type": "UpdateExpression",
                    "operator": "--",
                    "prefix": true,
                    "argument": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "a",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 154,
                      "end": 155
                    },
                    "start": 152,
                    "end": 155
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
                              "name": "f",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 175,
                              "end": 176
                            },
                            "init": {
                              "type": "ArrowFunctionExpression",
                              "expression": true,
                              "async": false,
                              "typeParameters": null,
                              "params": [],
                              "returnType": null,
                              "body": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "a",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 185,
                                "end": 186
                              },
                              "id": null,
                              "generator": false,
                              "start": 179,
                              "end": 186
                            },
                            "definite": false,
                            "start": 175,
                            "end": 186
                          }
                        ],
                        "declare": false,
                        "start": 171,
                        "end": 187
                      },
                      {
                        "type": "IfStatement",
                        "test": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "a",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 204,
                          "end": 205
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
                                  "name": "a",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 225,
                                  "end": 226
                                },
                                "right": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "x",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 229,
                                  "end": 230
                                },
                                "start": 225,
                                "end": 230
                              },
                              "directive": null,
                              "start": 225,
                              "end": 231
                            },
                            {
                              "type": "BreakStatement",
                              "label": null,
                              "start": 248,
                              "end": 254
                            }
                          ],
                          "start": 207,
                          "end": 268
                        },
                        "alternate": {
                          "type": "BlockStatement",
                          "body": [
                            {
                              "type": "ExpressionStatement",
                              "expression": {
                                "type": "UpdateExpression",
                                "operator": "++",
                                "prefix": false,
                                "argument": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "y",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 304,
                                  "end": 305
                                },
                                "start": 304,
                                "end": 307
                              },
                              "directive": null,
                              "start": 304,
                              "end": 308
                            }
                          ],
                          "start": 286,
                          "end": 322
                        },
                        "start": 200,
                        "end": 322
                      }
                    ],
                    "start": 157,
                    "end": 332
                  },
                  "start": 129,
                  "end": 332
                },
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "AssignmentExpression",
                    "operator": "=",
                    "left": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "y",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 350,
                      "end": 351
                    },
                    "right": {
                      "type": "Literal",
                      "value": 5,
                      "raw": "5",
                      "start": 354,
                      "end": 355
                    },
                    "start": 350,
                    "end": 355
                  },
                  "directive": null,
                  "start": 350,
                  "end": 356
                }
              ],
              "start": 119,
              "end": 362
            },
            "start": 75,
            "end": 362
          }
        ],
        "start": 40,
        "end": 364
      },
      "start": 0,
      "end": 364
    },
    {
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
              "start": 376,
              "end": 377
            },
            "init": {
              "type": "Literal",
              "value": 1,
              "raw": "1",
              "start": 380,
              "end": 381
            },
            "definite": false,
            "start": 376,
            "end": 381
          },
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "y",
              "optional": false,
              "typeAnnotation": null,
              "start": 383,
              "end": 384
            },
            "init": {
              "type": "Literal",
              "value": 2,
              "raw": "2",
              "start": 387,
              "end": 388
            },
            "definite": false,
            "start": 383,
            "end": 388
          }
        ],
        "declare": false,
        "start": 372,
        "end": 388
      },
      "test": {
        "type": "BinaryExpression",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": null,
          "start": 390,
          "end": 391
        },
        "operator": "<",
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "y",
          "optional": false,
          "typeAnnotation": null,
          "start": 394,
          "end": 395
        },
        "start": 390,
        "end": 395
      },
      "update": {
        "type": "SequenceExpression",
        "expressions": [
          {
            "type": "UpdateExpression",
            "operator": "++",
            "prefix": true,
            "argument": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 399,
              "end": 400
            },
            "start": 397,
            "end": 400
          },
          {
            "type": "UpdateExpression",
            "operator": "--",
            "prefix": true,
            "argument": {
              "type": "Identifier",
              "decorators": [],
              "name": "y",
              "optional": false,
              "typeAnnotation": null,
              "start": 404,
              "end": 405
            },
            "start": 402,
            "end": 405
          }
        ],
        "start": 397,
        "end": 405
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
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 417,
                  "end": 418
                },
                "init": {
                  "type": "ArrowFunctionExpression",
                  "expression": true,
                  "async": false,
                  "typeParameters": null,
                  "params": [],
                  "returnType": null,
                  "body": {
                    "type": "BinaryExpression",
                    "left": {
                      "type": "UpdateExpression",
                      "operator": "++",
                      "prefix": false,
                      "argument": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 427,
                        "end": 428
                      },
                      "start": 427,
                      "end": 430
                    },
                    "operator": "+",
                    "right": {
                      "type": "UpdateExpression",
                      "operator": "++",
                      "prefix": false,
                      "argument": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "y",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 433,
                        "end": 434
                      },
                      "start": 433,
                      "end": 436
                    },
                    "start": 427,
                    "end": 436
                  },
                  "id": null,
                  "generator": false,
                  "start": 421,
                  "end": 436
                },
                "definite": false,
                "start": 417,
                "end": 436
              }
            ],
            "declare": false,
            "start": 413,
            "end": 437
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
                "start": 446,
                "end": 447
              },
              "operator": "==",
              "right": {
                "type": "Literal",
                "value": 1,
                "raw": "1",
                "start": 451,
                "end": 452
              },
              "start": 446,
              "end": 452
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ContinueStatement",
                  "label": null,
                  "start": 464,
                  "end": 473
                }
              ],
              "start": 454,
              "end": 479
            },
            "alternate": {
              "type": "BlockStatement",
              "body": [
                {
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
                          "name": "a",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 508,
                          "end": 509
                        },
                        "init": {
                          "type": "Literal",
                          "value": 1,
                          "raw": "1",
                          "start": 512,
                          "end": 513
                        },
                        "definite": false,
                        "start": 508,
                        "end": 513
                      }
                    ],
                    "declare": false,
                    "start": 504,
                    "end": 513
                  },
                  "test": {
                    "type": "BinaryExpression",
                    "left": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "a",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 515,
                      "end": 516
                    },
                    "operator": "<",
                    "right": {
                      "type": "Literal",
                      "value": 5,
                      "raw": "5",
                      "start": 519,
                      "end": 520
                    },
                    "start": 515,
                    "end": 520
                  },
                  "update": {
                    "type": "UpdateExpression",
                    "operator": "--",
                    "prefix": true,
                    "argument": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "a",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 524,
                      "end": 525
                    },
                    "start": 522,
                    "end": 525
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
                              "name": "f",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 545,
                              "end": 546
                            },
                            "init": {
                              "type": "ArrowFunctionExpression",
                              "expression": true,
                              "async": false,
                              "typeParameters": null,
                              "params": [],
                              "returnType": null,
                              "body": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "a",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 555,
                                "end": 556
                              },
                              "id": null,
                              "generator": false,
                              "start": 549,
                              "end": 556
                            },
                            "definite": false,
                            "start": 545,
                            "end": 556
                          }
                        ],
                        "declare": false,
                        "start": 541,
                        "end": 557
                      },
                      {
                        "type": "IfStatement",
                        "test": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "a",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 574,
                          "end": 575
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
                                  "name": "a",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 595,
                                  "end": 596
                                },
                                "right": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "x",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 599,
                                  "end": 600
                                },
                                "start": 595,
                                "end": 600
                              },
                              "directive": null,
                              "start": 595,
                              "end": 601
                            },
                            {
                              "type": "ContinueStatement",
                              "label": null,
                              "start": 618,
                              "end": 627
                            }
                          ],
                          "start": 577,
                          "end": 641
                        },
                        "alternate": {
                          "type": "BlockStatement",
                          "body": [
                            {
                              "type": "ExpressionStatement",
                              "expression": {
                                "type": "UpdateExpression",
                                "operator": "++",
                                "prefix": false,
                                "argument": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "y",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 677,
                                  "end": 678
                                },
                                "start": 677,
                                "end": 680
                              },
                              "directive": null,
                              "start": 677,
                              "end": 681
                            }
                          ],
                          "start": 659,
                          "end": 695
                        },
                        "start": 570,
                        "end": 695
                      }
                    ],
                    "start": 527,
                    "end": 705
                  },
                  "start": 499,
                  "end": 705
                },
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "AssignmentExpression",
                    "operator": "=",
                    "left": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "y",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 723,
                      "end": 724
                    },
                    "right": {
                      "type": "Literal",
                      "value": 5,
                      "raw": "5",
                      "start": 727,
                      "end": 728
                    },
                    "start": 723,
                    "end": 728
                  },
                  "directive": null,
                  "start": 723,
                  "end": 729
                }
              ],
              "start": 489,
              "end": 735
            },
            "start": 442,
            "end": 735
          }
        ],
        "start": 407,
        "end": 737
      },
      "start": 367,
      "end": 737
    },
    {
      "type": "LabeledStatement",
      "label": {
        "type": "Identifier",
        "decorators": [],
        "name": "loop2",
        "optional": false,
        "typeAnnotation": null,
        "start": 739,
        "end": 744
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
                "start": 755,
                "end": 756
              },
              "init": {
                "type": "Literal",
                "value": 1,
                "raw": "1",
                "start": 759,
                "end": 760
              },
              "definite": false,
              "start": 755,
              "end": 760
            },
            {
              "type": "VariableDeclarator",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "y",
                "optional": false,
                "typeAnnotation": null,
                "start": 762,
                "end": 763
              },
              "init": {
                "type": "Literal",
                "value": 2,
                "raw": "2",
                "start": 766,
                "end": 767
              },
              "definite": false,
              "start": 762,
              "end": 767
            }
          ],
          "declare": false,
          "start": 751,
          "end": 767
        },
        "test": {
          "type": "BinaryExpression",
          "left": {
            "type": "Identifier",
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null,
            "start": 769,
            "end": 770
          },
          "operator": "<",
          "right": {
            "type": "Identifier",
            "decorators": [],
            "name": "y",
            "optional": false,
            "typeAnnotation": null,
            "start": 773,
            "end": 774
          },
          "start": 769,
          "end": 774
        },
        "update": {
          "type": "SequenceExpression",
          "expressions": [
            {
              "type": "UpdateExpression",
              "operator": "++",
              "prefix": true,
              "argument": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 778,
                "end": 779
              },
              "start": 776,
              "end": 779
            },
            {
              "type": "UpdateExpression",
              "operator": "--",
              "prefix": true,
              "argument": {
                "type": "Identifier",
                "decorators": [],
                "name": "y",
                "optional": false,
                "typeAnnotation": null,
                "start": 783,
                "end": 784
              },
              "start": 781,
              "end": 784
            }
          ],
          "start": 776,
          "end": 784
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
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 796,
                    "end": 797
                  },
                  "init": {
                    "type": "ArrowFunctionExpression",
                    "expression": true,
                    "async": false,
                    "typeParameters": null,
                    "params": [],
                    "returnType": null,
                    "body": {
                      "type": "BinaryExpression",
                      "left": {
                        "type": "UpdateExpression",
                        "operator": "++",
                        "prefix": false,
                        "argument": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 806,
                          "end": 807
                        },
                        "start": 806,
                        "end": 809
                      },
                      "operator": "+",
                      "right": {
                        "type": "UpdateExpression",
                        "operator": "++",
                        "prefix": false,
                        "argument": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "y",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 812,
                          "end": 813
                        },
                        "start": 812,
                        "end": 815
                      },
                      "start": 806,
                      "end": 815
                    },
                    "id": null,
                    "generator": false,
                    "start": 800,
                    "end": 815
                  },
                  "definite": false,
                  "start": 796,
                  "end": 815
                }
              ],
              "declare": false,
              "start": 792,
              "end": 816
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
                  "start": 825,
                  "end": 826
                },
                "operator": "==",
                "right": {
                  "type": "Literal",
                  "value": 1,
                  "raw": "1",
                  "start": 830,
                  "end": 831
                },
                "start": 825,
                "end": 831
              },
              "consequent": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "BreakStatement",
                    "label": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "loop2",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 849,
                      "end": 854
                    },
                    "start": 843,
                    "end": 855
                  }
                ],
                "start": 833,
                "end": 861
              },
              "alternate": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "LabeledStatement",
                    "label": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "loop1",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 881,
                      "end": 886
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
                              "name": "a",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 905,
                              "end": 906
                            },
                            "init": {
                              "type": "Literal",
                              "value": 1,
                              "raw": "1",
                              "start": 909,
                              "end": 910
                            },
                            "definite": false,
                            "start": 905,
                            "end": 910
                          }
                        ],
                        "declare": false,
                        "start": 901,
                        "end": 910
                      },
                      "test": {
                        "type": "BinaryExpression",
                        "left": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "a",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 912,
                          "end": 913
                        },
                        "operator": "<",
                        "right": {
                          "type": "Literal",
                          "value": 5,
                          "raw": "5",
                          "start": 916,
                          "end": 917
                        },
                        "start": 912,
                        "end": 917
                      },
                      "update": {
                        "type": "UpdateExpression",
                        "operator": "--",
                        "prefix": true,
                        "argument": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "a",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 921,
                          "end": 922
                        },
                        "start": 919,
                        "end": 922
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
                                  "name": "f",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 942,
                                  "end": 943
                                },
                                "init": {
                                  "type": "ArrowFunctionExpression",
                                  "expression": true,
                                  "async": false,
                                  "typeParameters": null,
                                  "params": [],
                                  "returnType": null,
                                  "body": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "a",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 952,
                                    "end": 953
                                  },
                                  "id": null,
                                  "generator": false,
                                  "start": 946,
                                  "end": 953
                                },
                                "definite": false,
                                "start": 942,
                                "end": 953
                              }
                            ],
                            "declare": false,
                            "start": 938,
                            "end": 954
                          },
                          {
                            "type": "IfStatement",
                            "test": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "a",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 971,
                              "end": 972
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
                                      "name": "a",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 992,
                                      "end": 993
                                    },
                                    "right": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "x",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 996,
                                      "end": 997
                                    },
                                    "start": 992,
                                    "end": 997
                                  },
                                  "directive": null,
                                  "start": 992,
                                  "end": 998
                                },
                                {
                                  "type": "BreakStatement",
                                  "label": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "loop1",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 1021,
                                    "end": 1026
                                  },
                                  "start": 1015,
                                  "end": 1027
                                }
                              ],
                              "start": 974,
                              "end": 1041
                            },
                            "alternate": {
                              "type": "BlockStatement",
                              "body": [
                                {
                                  "type": "ExpressionStatement",
                                  "expression": {
                                    "type": "UpdateExpression",
                                    "operator": "++",
                                    "prefix": false,
                                    "argument": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "y",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 1077,
                                      "end": 1078
                                    },
                                    "start": 1077,
                                    "end": 1080
                                  },
                                  "directive": null,
                                  "start": 1077,
                                  "end": 1081
                                },
                                {
                                  "type": "BreakStatement",
                                  "label": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "loop2",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 1104,
                                    "end": 1109
                                  },
                                  "start": 1098,
                                  "end": 1109
                                }
                              ],
                              "start": 1059,
                              "end": 1123
                            },
                            "start": 967,
                            "end": 1123
                          }
                        ],
                        "start": 924,
                        "end": 1133
                      },
                      "start": 896,
                      "end": 1133
                    },
                    "start": 881,
                    "end": 1133
                  },
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "AssignmentExpression",
                      "operator": "=",
                      "left": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "y",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1151,
                        "end": 1152
                      },
                      "right": {
                        "type": "Literal",
                        "value": 5,
                        "raw": "5",
                        "start": 1155,
                        "end": 1156
                      },
                      "start": 1151,
                      "end": 1156
                    },
                    "directive": null,
                    "start": 1151,
                    "end": 1157
                  }
                ],
                "start": 871,
                "end": 1163
              },
              "start": 821,
              "end": 1163
            }
          ],
          "start": 786,
          "end": 1165
        },
        "start": 746,
        "end": 1165
      },
      "start": 739,
      "end": 1165
    },
    {
      "type": "LabeledStatement",
      "label": {
        "type": "Identifier",
        "decorators": [],
        "name": "loop2",
        "optional": false,
        "typeAnnotation": null,
        "start": 1167,
        "end": 1172
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
                "start": 1183,
                "end": 1184
              },
              "init": {
                "type": "Literal",
                "value": 1,
                "raw": "1",
                "start": 1187,
                "end": 1188
              },
              "definite": false,
              "start": 1183,
              "end": 1188
            },
            {
              "type": "VariableDeclarator",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "y",
                "optional": false,
                "typeAnnotation": null,
                "start": 1190,
                "end": 1191
              },
              "init": {
                "type": "Literal",
                "value": 2,
                "raw": "2",
                "start": 1194,
                "end": 1195
              },
              "definite": false,
              "start": 1190,
              "end": 1195
            }
          ],
          "declare": false,
          "start": 1179,
          "end": 1195
        },
        "test": {
          "type": "BinaryExpression",
          "left": {
            "type": "Identifier",
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null,
            "start": 1197,
            "end": 1198
          },
          "operator": "<",
          "right": {
            "type": "Identifier",
            "decorators": [],
            "name": "y",
            "optional": false,
            "typeAnnotation": null,
            "start": 1201,
            "end": 1202
          },
          "start": 1197,
          "end": 1202
        },
        "update": {
          "type": "SequenceExpression",
          "expressions": [
            {
              "type": "UpdateExpression",
              "operator": "++",
              "prefix": true,
              "argument": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 1206,
                "end": 1207
              },
              "start": 1204,
              "end": 1207
            },
            {
              "type": "UpdateExpression",
              "operator": "--",
              "prefix": true,
              "argument": {
                "type": "Identifier",
                "decorators": [],
                "name": "y",
                "optional": false,
                "typeAnnotation": null,
                "start": 1211,
                "end": 1212
              },
              "start": 1209,
              "end": 1212
            }
          ],
          "start": 1204,
          "end": 1212
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
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1224,
                    "end": 1225
                  },
                  "init": {
                    "type": "ArrowFunctionExpression",
                    "expression": true,
                    "async": false,
                    "typeParameters": null,
                    "params": [],
                    "returnType": null,
                    "body": {
                      "type": "BinaryExpression",
                      "left": {
                        "type": "UpdateExpression",
                        "operator": "++",
                        "prefix": false,
                        "argument": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1234,
                          "end": 1235
                        },
                        "start": 1234,
                        "end": 1237
                      },
                      "operator": "+",
                      "right": {
                        "type": "UpdateExpression",
                        "operator": "++",
                        "prefix": false,
                        "argument": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "y",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1240,
                          "end": 1241
                        },
                        "start": 1240,
                        "end": 1243
                      },
                      "start": 1234,
                      "end": 1243
                    },
                    "id": null,
                    "generator": false,
                    "start": 1228,
                    "end": 1243
                  },
                  "definite": false,
                  "start": 1224,
                  "end": 1243
                }
              ],
              "declare": false,
              "start": 1220,
              "end": 1244
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
                  "start": 1253,
                  "end": 1254
                },
                "operator": "==",
                "right": {
                  "type": "Literal",
                  "value": 1,
                  "raw": "1",
                  "start": 1258,
                  "end": 1259
                },
                "start": 1253,
                "end": 1259
              },
              "consequent": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ContinueStatement",
                    "label": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "loop2",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1280,
                      "end": 1285
                    },
                    "start": 1271,
                    "end": 1286
                  }
                ],
                "start": 1261,
                "end": 1292
              },
              "alternate": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "LabeledStatement",
                    "label": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "loop1",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1312,
                      "end": 1317
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
                              "name": "a",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 1336,
                              "end": 1337
                            },
                            "init": {
                              "type": "Literal",
                              "value": 1,
                              "raw": "1",
                              "start": 1340,
                              "end": 1341
                            },
                            "definite": false,
                            "start": 1336,
                            "end": 1341
                          }
                        ],
                        "declare": false,
                        "start": 1332,
                        "end": 1341
                      },
                      "test": {
                        "type": "BinaryExpression",
                        "left": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "a",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1343,
                          "end": 1344
                        },
                        "operator": "<",
                        "right": {
                          "type": "Literal",
                          "value": 5,
                          "raw": "5",
                          "start": 1347,
                          "end": 1348
                        },
                        "start": 1343,
                        "end": 1348
                      },
                      "update": {
                        "type": "UpdateExpression",
                        "operator": "--",
                        "prefix": true,
                        "argument": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "a",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1352,
                          "end": 1353
                        },
                        "start": 1350,
                        "end": 1353
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
                                  "name": "f",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 1373,
                                  "end": 1374
                                },
                                "init": {
                                  "type": "ArrowFunctionExpression",
                                  "expression": true,
                                  "async": false,
                                  "typeParameters": null,
                                  "params": [],
                                  "returnType": null,
                                  "body": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "a",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 1383,
                                    "end": 1384
                                  },
                                  "id": null,
                                  "generator": false,
                                  "start": 1377,
                                  "end": 1384
                                },
                                "definite": false,
                                "start": 1373,
                                "end": 1384
                              }
                            ],
                            "declare": false,
                            "start": 1369,
                            "end": 1385
                          },
                          {
                            "type": "IfStatement",
                            "test": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "a",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 1402,
                              "end": 1403
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
                                      "name": "a",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 1423,
                                      "end": 1424
                                    },
                                    "right": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "x",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 1427,
                                      "end": 1428
                                    },
                                    "start": 1423,
                                    "end": 1428
                                  },
                                  "directive": null,
                                  "start": 1423,
                                  "end": 1429
                                },
                                {
                                  "type": "ContinueStatement",
                                  "label": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "loop1",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 1455,
                                    "end": 1460
                                  },
                                  "start": 1446,
                                  "end": 1461
                                }
                              ],
                              "start": 1405,
                              "end": 1475
                            },
                            "alternate": {
                              "type": "BlockStatement",
                              "body": [
                                {
                                  "type": "ExpressionStatement",
                                  "expression": {
                                    "type": "UpdateExpression",
                                    "operator": "++",
                                    "prefix": false,
                                    "argument": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "y",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 1511,
                                      "end": 1512
                                    },
                                    "start": 1511,
                                    "end": 1514
                                  },
                                  "directive": null,
                                  "start": 1511,
                                  "end": 1515
                                },
                                {
                                  "type": "ContinueStatement",
                                  "label": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "loop2",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 1541,
                                    "end": 1546
                                  },
                                  "start": 1532,
                                  "end": 1546
                                }
                              ],
                              "start": 1493,
                              "end": 1560
                            },
                            "start": 1398,
                            "end": 1560
                          }
                        ],
                        "start": 1355,
                        "end": 1570
                      },
                      "start": 1327,
                      "end": 1570
                    },
                    "start": 1312,
                    "end": 1570
                  },
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "AssignmentExpression",
                      "operator": "=",
                      "left": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "y",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1588,
                        "end": 1589
                      },
                      "right": {
                        "type": "Literal",
                        "value": 5,
                        "raw": "5",
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
                "start": 1302,
                "end": 1600
              },
              "start": 1249,
              "end": 1600
            }
          ],
          "start": 1214,
          "end": 1602
        },
        "start": 1174,
        "end": 1602
      },
      "start": 1167,
      "end": 1602
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 1602
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "for",
    "start": 0,
    "end": 3
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4,
    "end": 5
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 5,
    "end": 8
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 9,
    "end": 10
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 11,
    "end": 12
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 13,
    "end": 14
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 14,
    "end": 15
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 16,
    "end": 17
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 18,
    "end": 19
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 20,
    "end": 21
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 21,
    "end": 22
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 23,
    "end": 24
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 25,
    "end": 26
  },
  {
    "type": "Identifier",
    "value": "y",
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
    "type": "Punctuator",
    "value": "++",
    "start": 30,
    "end": 32
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 32,
    "end": 33
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 33,
    "end": 34
  },
  {
    "type": "Punctuator",
    "value": "--",
    "start": 35,
    "end": 37
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 37,
    "end": 38
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 38,
    "end": 39
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 40,
    "end": 41
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 46,
    "end": 49
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 50,
    "end": 51
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 52,
    "end": 53
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 54,
    "end": 55
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 55,
    "end": 56
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 57,
    "end": 59
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 60,
    "end": 61
  },
  {
    "type": "Punctuator",
    "value": "++",
    "start": 61,
    "end": 63
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 64,
    "end": 65
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 66,
    "end": 67
  },
  {
    "type": "Punctuator",
    "value": "++",
    "start": 67,
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
    "value": "if",
    "start": 75,
    "end": 77
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 78,
    "end": 79
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 79,
    "end": 80
  },
  {
    "type": "Punctuator",
    "value": "==",
    "start": 81,
    "end": 83
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 84,
    "end": 85
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 85,
    "end": 86
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 87,
    "end": 88
  },
  {
    "type": "Keyword",
    "value": "break",
    "start": 97,
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
    "start": 108,
    "end": 109
  },
  {
    "type": "Keyword",
    "value": "else",
    "start": 114,
    "end": 118
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 119,
    "end": 120
  },
  {
    "type": "Keyword",
    "value": "for",
    "start": 129,
    "end": 132
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 133,
    "end": 134
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 134,
    "end": 137
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 138,
    "end": 139
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 140,
    "end": 141
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 142,
    "end": 143
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 143,
    "end": 144
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 145,
    "end": 146
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 147,
    "end": 148
  },
  {
    "type": "Numeric",
    "value": "5",
    "start": 149,
    "end": 150
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 150,
    "end": 151
  },
  {
    "type": "Punctuator",
    "value": "--",
    "start": 152,
    "end": 154
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 154,
    "end": 155
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 155,
    "end": 156
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 157,
    "end": 158
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 171,
    "end": 174
  },
  {
    "type": "Identifier",
    "value": "f",
    "start": 175,
    "end": 176
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 177,
    "end": 178
  },
  {
    "type": "Punctuator",
    "value": "(",
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
    "type": "Punctuator",
    "value": "=>",
    "start": 182,
    "end": 184
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 185,
    "end": 186
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 186,
    "end": 187
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 200,
    "end": 202
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 203,
    "end": 204
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 204,
    "end": 205
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 205,
    "end": 206
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 207,
    "end": 208
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 225,
    "end": 226
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 227,
    "end": 228
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 229,
    "end": 230
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 230,
    "end": 231
  },
  {
    "type": "Keyword",
    "value": "break",
    "start": 248,
    "end": 253
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 253,
    "end": 254
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 267,
    "end": 268
  },
  {
    "type": "Keyword",
    "value": "else",
    "start": 281,
    "end": 285
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 286,
    "end": 287
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 304,
    "end": 305
  },
  {
    "type": "Punctuator",
    "value": "++",
    "start": 305,
    "end": 307
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 307,
    "end": 308
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 321,
    "end": 322
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 331,
    "end": 332
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 350,
    "end": 351
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 352,
    "end": 353
  },
  {
    "type": "Numeric",
    "value": "5",
    "start": 354,
    "end": 355
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 355,
    "end": 356
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 361,
    "end": 362
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 363,
    "end": 364
  },
  {
    "type": "Keyword",
    "value": "for",
    "start": 367,
    "end": 370
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 371,
    "end": 372
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 372,
    "end": 375
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
    "value": ",",
    "start": 381,
    "end": 382
  },
  {
    "type": "Identifier",
    "value": "y",
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
    "type": "Numeric",
    "value": "2",
    "start": 387,
    "end": 388
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 388,
    "end": 389
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 390,
    "end": 391
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 392,
    "end": 393
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 394,
    "end": 395
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 395,
    "end": 396
  },
  {
    "type": "Punctuator",
    "value": "++",
    "start": 397,
    "end": 399
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 399,
    "end": 400
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 400,
    "end": 401
  },
  {
    "type": "Punctuator",
    "value": "--",
    "start": 402,
    "end": 404
  },
  {
    "type": "Identifier",
    "value": "y",
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
    "type": "Keyword",
    "value": "let",
    "start": 413,
    "end": 416
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 417,
    "end": 418
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 419,
    "end": 420
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 421,
    "end": 422
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 422,
    "end": 423
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 424,
    "end": 426
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 427,
    "end": 428
  },
  {
    "type": "Punctuator",
    "value": "++",
    "start": 428,
    "end": 430
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 431,
    "end": 432
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 433,
    "end": 434
  },
  {
    "type": "Punctuator",
    "value": "++",
    "start": 434,
    "end": 436
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 436,
    "end": 437
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 442,
    "end": 444
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 445,
    "end": 446
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 446,
    "end": 447
  },
  {
    "type": "Punctuator",
    "value": "==",
    "start": 448,
    "end": 450
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 451,
    "end": 452
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 452,
    "end": 453
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 454,
    "end": 455
  },
  {
    "type": "Keyword",
    "value": "continue",
    "start": 464,
    "end": 472
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 472,
    "end": 473
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 478,
    "end": 479
  },
  {
    "type": "Keyword",
    "value": "else",
    "start": 484,
    "end": 488
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 489,
    "end": 490
  },
  {
    "type": "Keyword",
    "value": "for",
    "start": 499,
    "end": 502
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 503,
    "end": 504
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 504,
    "end": 507
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 508,
    "end": 509
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 510,
    "end": 511
  },
  {
    "type": "Numeric",
    "value": "1",
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
    "type": "Identifier",
    "value": "a",
    "start": 515,
    "end": 516
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 517,
    "end": 518
  },
  {
    "type": "Numeric",
    "value": "5",
    "start": 519,
    "end": 520
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 520,
    "end": 521
  },
  {
    "type": "Punctuator",
    "value": "--",
    "start": 522,
    "end": 524
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 524,
    "end": 525
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 525,
    "end": 526
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 527,
    "end": 528
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 541,
    "end": 544
  },
  {
    "type": "Identifier",
    "value": "f",
    "start": 545,
    "end": 546
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 547,
    "end": 548
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 549,
    "end": 550
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 550,
    "end": 551
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 552,
    "end": 554
  },
  {
    "type": "Identifier",
    "value": "a",
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
    "type": "Keyword",
    "value": "if",
    "start": 570,
    "end": 572
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 573,
    "end": 574
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 574,
    "end": 575
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 575,
    "end": 576
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 577,
    "end": 578
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 595,
    "end": 596
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 597,
    "end": 598
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 599,
    "end": 600
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 600,
    "end": 601
  },
  {
    "type": "Keyword",
    "value": "continue",
    "start": 618,
    "end": 626
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 626,
    "end": 627
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 640,
    "end": 641
  },
  {
    "type": "Keyword",
    "value": "else",
    "start": 654,
    "end": 658
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 659,
    "end": 660
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 677,
    "end": 678
  },
  {
    "type": "Punctuator",
    "value": "++",
    "start": 678,
    "end": 680
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 680,
    "end": 681
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 694,
    "end": 695
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 704,
    "end": 705
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 723,
    "end": 724
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 725,
    "end": 726
  },
  {
    "type": "Numeric",
    "value": "5",
    "start": 727,
    "end": 728
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 728,
    "end": 729
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 734,
    "end": 735
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 736,
    "end": 737
  },
  {
    "type": "Identifier",
    "value": "loop2",
    "start": 739,
    "end": 744
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 744,
    "end": 745
  },
  {
    "type": "Keyword",
    "value": "for",
    "start": 746,
    "end": 749
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 750,
    "end": 751
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 751,
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
    "value": "=",
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
    "value": "y",
    "start": 762,
    "end": 763
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 764,
    "end": 765
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 766,
    "end": 767
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 767,
    "end": 768
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 769,
    "end": 770
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 771,
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
    "value": ";",
    "start": 774,
    "end": 775
  },
  {
    "type": "Punctuator",
    "value": "++",
    "start": 776,
    "end": 778
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 778,
    "end": 779
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 779,
    "end": 780
  },
  {
    "type": "Punctuator",
    "value": "--",
    "start": 781,
    "end": 783
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 783,
    "end": 784
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 784,
    "end": 785
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 786,
    "end": 787
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 792,
    "end": 795
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 796,
    "end": 797
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 798,
    "end": 799
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 800,
    "end": 801
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 801,
    "end": 802
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 803,
    "end": 805
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 806,
    "end": 807
  },
  {
    "type": "Punctuator",
    "value": "++",
    "start": 807,
    "end": 809
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 810,
    "end": 811
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 812,
    "end": 813
  },
  {
    "type": "Punctuator",
    "value": "++",
    "start": 813,
    "end": 815
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 815,
    "end": 816
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 821,
    "end": 823
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 824,
    "end": 825
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 825,
    "end": 826
  },
  {
    "type": "Punctuator",
    "value": "==",
    "start": 827,
    "end": 829
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 830,
    "end": 831
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 831,
    "end": 832
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 833,
    "end": 834
  },
  {
    "type": "Keyword",
    "value": "break",
    "start": 843,
    "end": 848
  },
  {
    "type": "Identifier",
    "value": "loop2",
    "start": 849,
    "end": 854
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 854,
    "end": 855
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 860,
    "end": 861
  },
  {
    "type": "Keyword",
    "value": "else",
    "start": 866,
    "end": 870
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 871,
    "end": 872
  },
  {
    "type": "Identifier",
    "value": "loop1",
    "start": 881,
    "end": 886
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 886,
    "end": 887
  },
  {
    "type": "Keyword",
    "value": "for",
    "start": 896,
    "end": 899
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 900,
    "end": 901
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 901,
    "end": 904
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 905,
    "end": 906
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 907,
    "end": 908
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 909,
    "end": 910
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 910,
    "end": 911
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 912,
    "end": 913
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 914,
    "end": 915
  },
  {
    "type": "Numeric",
    "value": "5",
    "start": 916,
    "end": 917
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 917,
    "end": 918
  },
  {
    "type": "Punctuator",
    "value": "--",
    "start": 919,
    "end": 921
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 921,
    "end": 922
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 922,
    "end": 923
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 924,
    "end": 925
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 938,
    "end": 941
  },
  {
    "type": "Identifier",
    "value": "f",
    "start": 942,
    "end": 943
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 944,
    "end": 945
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 946,
    "end": 947
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 947,
    "end": 948
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 949,
    "end": 951
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 952,
    "end": 953
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 953,
    "end": 954
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 967,
    "end": 969
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 970,
    "end": 971
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 971,
    "end": 972
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 972,
    "end": 973
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 974,
    "end": 975
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 992,
    "end": 993
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 994,
    "end": 995
  },
  {
    "type": "Identifier",
    "value": "x",
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
    "type": "Keyword",
    "value": "break",
    "start": 1015,
    "end": 1020
  },
  {
    "type": "Identifier",
    "value": "loop1",
    "start": 1021,
    "end": 1026
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1026,
    "end": 1027
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1040,
    "end": 1041
  },
  {
    "type": "Keyword",
    "value": "else",
    "start": 1054,
    "end": 1058
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1059,
    "end": 1060
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 1077,
    "end": 1078
  },
  {
    "type": "Punctuator",
    "value": "++",
    "start": 1078,
    "end": 1080
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1080,
    "end": 1081
  },
  {
    "type": "Keyword",
    "value": "break",
    "start": 1098,
    "end": 1103
  },
  {
    "type": "Identifier",
    "value": "loop2",
    "start": 1104,
    "end": 1109
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1122,
    "end": 1123
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1132,
    "end": 1133
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 1151,
    "end": 1152
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1153,
    "end": 1154
  },
  {
    "type": "Numeric",
    "value": "5",
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
    "start": 1162,
    "end": 1163
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1164,
    "end": 1165
  },
  {
    "type": "Identifier",
    "value": "loop2",
    "start": 1167,
    "end": 1172
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1172,
    "end": 1173
  },
  {
    "type": "Keyword",
    "value": "for",
    "start": 1174,
    "end": 1177
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1178,
    "end": 1179
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 1179,
    "end": 1182
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1183,
    "end": 1184
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1185,
    "end": 1186
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 1187,
    "end": 1188
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1188,
    "end": 1189
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 1190,
    "end": 1191
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1192,
    "end": 1193
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 1194,
    "end": 1195
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1195,
    "end": 1196
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1197,
    "end": 1198
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1199,
    "end": 1200
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 1201,
    "end": 1202
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1202,
    "end": 1203
  },
  {
    "type": "Punctuator",
    "value": "++",
    "start": 1204,
    "end": 1206
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1206,
    "end": 1207
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1207,
    "end": 1208
  },
  {
    "type": "Punctuator",
    "value": "--",
    "start": 1209,
    "end": 1211
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 1211,
    "end": 1212
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1212,
    "end": 1213
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1214,
    "end": 1215
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 1220,
    "end": 1223
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1224,
    "end": 1225
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1226,
    "end": 1227
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1228,
    "end": 1229
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1229,
    "end": 1230
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1231,
    "end": 1233
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1234,
    "end": 1235
  },
  {
    "type": "Punctuator",
    "value": "++",
    "start": 1235,
    "end": 1237
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 1238,
    "end": 1239
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 1240,
    "end": 1241
  },
  {
    "type": "Punctuator",
    "value": "++",
    "start": 1241,
    "end": 1243
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1243,
    "end": 1244
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 1249,
    "end": 1251
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1252,
    "end": 1253
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1253,
    "end": 1254
  },
  {
    "type": "Punctuator",
    "value": "==",
    "start": 1255,
    "end": 1257
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 1258,
    "end": 1259
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1259,
    "end": 1260
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1261,
    "end": 1262
  },
  {
    "type": "Keyword",
    "value": "continue",
    "start": 1271,
    "end": 1279
  },
  {
    "type": "Identifier",
    "value": "loop2",
    "start": 1280,
    "end": 1285
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1285,
    "end": 1286
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1291,
    "end": 1292
  },
  {
    "type": "Keyword",
    "value": "else",
    "start": 1297,
    "end": 1301
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1302,
    "end": 1303
  },
  {
    "type": "Identifier",
    "value": "loop1",
    "start": 1312,
    "end": 1317
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1317,
    "end": 1318
  },
  {
    "type": "Keyword",
    "value": "for",
    "start": 1327,
    "end": 1330
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1331,
    "end": 1332
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 1332,
    "end": 1335
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1336,
    "end": 1337
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1338,
    "end": 1339
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 1340,
    "end": 1341
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1341,
    "end": 1342
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1343,
    "end": 1344
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1345,
    "end": 1346
  },
  {
    "type": "Numeric",
    "value": "5",
    "start": 1347,
    "end": 1348
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1348,
    "end": 1349
  },
  {
    "type": "Punctuator",
    "value": "--",
    "start": 1350,
    "end": 1352
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1352,
    "end": 1353
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1353,
    "end": 1354
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1355,
    "end": 1356
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 1369,
    "end": 1372
  },
  {
    "type": "Identifier",
    "value": "f",
    "start": 1373,
    "end": 1374
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1375,
    "end": 1376
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1377,
    "end": 1378
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1378,
    "end": 1379
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1380,
    "end": 1382
  },
  {
    "type": "Identifier",
    "value": "a",
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
    "type": "Keyword",
    "value": "if",
    "start": 1398,
    "end": 1400
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1401,
    "end": 1402
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1402,
    "end": 1403
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1403,
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
    "value": "a",
    "start": 1423,
    "end": 1424
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1425,
    "end": 1426
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1427,
    "end": 1428
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1428,
    "end": 1429
  },
  {
    "type": "Keyword",
    "value": "continue",
    "start": 1446,
    "end": 1454
  },
  {
    "type": "Identifier",
    "value": "loop1",
    "start": 1455,
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
    "start": 1474,
    "end": 1475
  },
  {
    "type": "Keyword",
    "value": "else",
    "start": 1488,
    "end": 1492
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1493,
    "end": 1494
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 1511,
    "end": 1512
  },
  {
    "type": "Punctuator",
    "value": "++",
    "start": 1512,
    "end": 1514
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1514,
    "end": 1515
  },
  {
    "type": "Keyword",
    "value": "continue",
    "start": 1532,
    "end": 1540
  },
  {
    "type": "Identifier",
    "value": "loop2",
    "start": 1541,
    "end": 1546
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1559,
    "end": 1560
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1569,
    "end": 1570
  },
  {
    "type": "Identifier",
    "value": "y",
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
    "value": "5",
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
    "type": "Punctuator",
    "value": "}",
    "start": 1601,
    "end": 1602
  }
]
```
