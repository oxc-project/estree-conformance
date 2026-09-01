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
        "name": "f",
        "optional": false,
        "typeAnnotation": null,
        "start": 9,
        "end": 10
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
                  "name": "z",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 23,
                  "end": 24
                },
                "init": null,
                "definite": false,
                "start": 23,
                "end": 24
              }
            ],
            "declare": false,
            "start": 19,
            "end": 25
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
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 34,
                  "end": 35
                },
                "init": {
                  "type": "Literal",
                  "value": 10,
                  "raw": "10",
                  "start": 36,
                  "end": 38
                },
                "definite": false,
                "start": 34,
                "end": 38
              }
            ],
            "declare": false,
            "start": 30,
            "end": 39
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
                  "name": "y",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 48,
                  "end": 49
                },
                "init": {
                  "type": "Literal",
                  "value": 3,
                  "raw": "3",
                  "start": 50,
                  "end": 51
                },
                "definite": false,
                "start": 48,
                "end": 51
              }
            ],
            "declare": false,
            "start": 44,
            "end": 52
          },
          {
            "type": "LabeledStatement",
            "label": {
              "type": "Identifier",
              "decorators": [],
              "name": "L1",
              "optional": false,
              "typeAnnotation": null,
              "start": 58,
              "end": 60
            },
            "body": {
              "type": "ForStatement",
              "init": {
                "type": "VariableDeclaration",
                "kind": "var",
                "declarations": [
                  {
                    "type": "VariableDeclarator",
                    "id": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "i",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 71,
                      "end": 72
                    },
                    "init": {
                      "type": "Literal",
                      "value": 0,
                      "raw": "0",
                      "start": 73,
                      "end": 74
                    },
                    "definite": false,
                    "start": 71,
                    "end": 74
                  }
                ],
                "declare": false,
                "start": 67,
                "end": 74
              },
              "test": {
                "type": "BinaryExpression",
                "left": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "i",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 75,
                  "end": 76
                },
                "operator": "<",
                "right": {
                  "type": "Literal",
                  "value": 19,
                  "raw": "19",
                  "start": 77,
                  "end": 79
                },
                "start": 75,
                "end": 79
              },
              "update": {
                "type": "UpdateExpression",
                "operator": "++",
                "prefix": false,
                "argument": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "i",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 80,
                  "end": 81
                },
                "start": 80,
                "end": 83
              },
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "IfStatement",
                    "test": {
                      "type": "BinaryExpression",
                      "left": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "y",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 99,
                        "end": 100
                      },
                      "operator": "==",
                      "right": {
                        "type": "Literal",
                        "value": 7,
                        "raw": "7",
                        "start": 102,
                        "end": 103
                      },
                      "start": 99,
                      "end": 103
                    },
                    "consequent": {
                      "type": "BlockStatement",
                      "body": [
                        {
                          "type": "ContinueStatement",
                          "label": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "L1",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 128,
                            "end": 130
                          },
                          "start": 119,
                          "end": 131
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
                              "start": 144,
                              "end": 145
                            },
                            "right": {
                              "type": "Literal",
                              "value": 11,
                              "raw": "11",
                              "start": 146,
                              "end": 148
                            },
                            "start": 144,
                            "end": 148
                          },
                          "directive": null,
                          "start": 144,
                          "end": 149
                        }
                      ],
                      "start": 105,
                      "end": 159
                    },
                    "alternate": null,
                    "start": 95,
                    "end": 159
                  },
                  {
                    "type": "IfStatement",
                    "test": {
                      "type": "BinaryExpression",
                      "left": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "y",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 172,
                        "end": 173
                      },
                      "operator": "==",
                      "right": {
                        "type": "Literal",
                        "value": 3,
                        "raw": "3",
                        "start": 175,
                        "end": 176
                      },
                      "start": 172,
                      "end": 176
                    },
                    "consequent": {
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
                              "start": 192,
                              "end": 193
                            },
                            "start": 192,
                            "end": 195
                          },
                          "directive": null,
                          "start": 192,
                          "end": 196
                        }
                      ],
                      "start": 178,
                      "end": 206
                    },
                    "alternate": {
                      "type": "BlockStatement",
                      "body": [
                        {
                          "type": "ExpressionStatement",
                          "expression": {
                            "type": "UpdateExpression",
                            "operator": "--",
                            "prefix": false,
                            "argument": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "y",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 234,
                              "end": 235
                            },
                            "start": 234,
                            "end": 237
                          },
                          "directive": null,
                          "start": 234,
                          "end": 238
                        }
                      ],
                      "start": 220,
                      "end": 248
                    },
                    "start": 168,
                    "end": 248
                  },
                  {
                    "type": "DoWhileStatement",
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
                              "name": "y",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 274,
                              "end": 275
                            },
                            "right": {
                              "type": "Literal",
                              "value": 2,
                              "raw": "2",
                              "start": 277,
                              "end": 278
                            },
                            "start": 274,
                            "end": 278
                          },
                          "directive": null,
                          "start": 274,
                          "end": 279
                        },
                        {
                          "type": "IfStatement",
                          "test": {
                            "type": "BinaryExpression",
                            "left": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "y",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 296,
                              "end": 297
                            },
                            "operator": "==",
                            "right": {
                              "type": "Literal",
                              "value": 20,
                              "raw": "20",
                              "start": 299,
                              "end": 301
                            },
                            "start": 296,
                            "end": 301
                          },
                          "consequent": {
                            "type": "BlockStatement",
                            "body": [
                              {
                                "type": "BreakStatement",
                                "label": null,
                                "start": 321,
                                "end": 327
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
                                    "start": 344,
                                    "end": 345
                                  },
                                  "right": {
                                    "type": "Literal",
                                    "value": 12,
                                    "raw": "12",
                                    "start": 346,
                                    "end": 348
                                  },
                                  "start": 344,
                                  "end": 348
                                },
                                "directive": null,
                                "start": 344,
                                "end": 349
                              }
                            ],
                            "start": 303,
                            "end": 363
                          },
                          "alternate": null,
                          "start": 292,
                          "end": 363
                        }
                      ],
                      "start": 260,
                      "end": 373
                    },
                    "test": {
                      "type": "BinaryExpression",
                      "left": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "y",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 381,
                        "end": 382
                      },
                      "operator": "<",
                      "right": {
                        "type": "Literal",
                        "value": 41,
                        "raw": "41",
                        "start": 383,
                        "end": 385
                      },
                      "start": 381,
                      "end": 385
                    },
                    "start": 257,
                    "end": 387
                  },
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
                        "start": 396,
                        "end": 397
                      },
                      "start": 396,
                      "end": 399
                    },
                    "directive": null,
                    "start": 396,
                    "end": 400
                  }
                ],
                "start": 85,
                "end": 406
              },
              "start": 62,
              "end": 406
            },
            "start": 58,
            "end": 406
          },
          {
            "type": "WhileStatement",
            "test": {
              "type": "BinaryExpression",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "y",
                "optional": false,
                "typeAnnotation": null,
                "start": 418,
                "end": 419
              },
              "operator": ">",
              "right": {
                "type": "Literal",
                "value": 2,
                "raw": "2",
                "start": 420,
                "end": 421
              },
              "start": 418,
              "end": 421
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
                      "name": "y",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 433,
                      "end": 434
                    },
                    "right": {
                      "type": "BinaryExpression",
                      "left": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "y",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 435,
                        "end": 436
                      },
                      "operator": ">>",
                      "right": {
                        "type": "Literal",
                        "value": 1,
                        "raw": "1",
                        "start": 438,
                        "end": 439
                      },
                      "start": 435,
                      "end": 439
                    },
                    "start": 433,
                    "end": 439
                  },
                  "directive": null,
                  "start": 433,
                  "end": 440
                }
              ],
              "start": 423,
              "end": 446
            },
            "start": 411,
            "end": 446
          },
          {
            "type": "LabeledStatement",
            "label": {
              "type": "Identifier",
              "decorators": [],
              "name": "L2",
              "optional": false,
              "typeAnnotation": null,
              "start": 451,
              "end": 453
            },
            "body": {
              "type": "TryStatement",
              "block": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "LabeledStatement",
                    "label": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "L3",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 469,
                      "end": 471
                    },
                    "body": {
                      "type": "IfStatement",
                      "test": {
                        "type": "BinaryExpression",
                        "left": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 477,
                          "end": 478
                        },
                        "operator": "<",
                        "right": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "y",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 479,
                          "end": 480
                        },
                        "start": 477,
                        "end": 480
                      },
                      "consequent": {
                        "type": "BlockStatement",
                        "body": [
                          {
                            "type": "BreakStatement",
                            "label": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "L2",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 502,
                              "end": 504
                            },
                            "start": 496,
                            "end": 505
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
                                "start": 518,
                                "end": 519
                              },
                              "right": {
                                "type": "Literal",
                                "value": 13,
                                "raw": "13",
                                "start": 520,
                                "end": 522
                              },
                              "start": 518,
                              "end": 522
                            },
                            "directive": null,
                            "start": 518,
                            "end": 523
                          }
                        ],
                        "start": 482,
                        "end": 533
                      },
                      "alternate": {
                        "type": "BlockStatement",
                        "body": [
                          {
                            "type": "BreakStatement",
                            "label": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "L3",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 567,
                              "end": 569
                            },
                            "start": 561,
                            "end": 570
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
                                "start": 583,
                                "end": 584
                              },
                              "right": {
                                "type": "Literal",
                                "value": 14,
                                "raw": "14",
                                "start": 585,
                                "end": 587
                              },
                              "start": 583,
                              "end": 587
                            },
                            "directive": null,
                            "start": 583,
                            "end": 588
                          }
                        ],
                        "start": 547,
                        "end": 598
                      },
                      "start": 473,
                      "end": 598
                    },
                    "start": 469,
                    "end": 598
                  }
                ],
                "start": 459,
                "end": 604
              },
              "handler": {
                "type": "CatchClause",
                "param": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "e",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 616,
                  "end": 617
                },
                "body": {
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
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 629,
                          "end": 630
                        },
                        "start": 629,
                        "end": 632
                      },
                      "directive": null,
                      "start": 629,
                      "end": 633
                    }
                  ],
                  "start": 619,
                  "end": 639
                },
                "start": 609,
                "end": 639
              },
              "finalizer": {
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
                        "start": 662,
                        "end": 663
                      },
                      "right": {
                        "type": "Literal",
                        "value": 3,
                        "raw": "3",
                        "start": 665,
                        "end": 666
                      },
                      "start": 662,
                      "end": 666
                    },
                    "directive": null,
                    "start": 662,
                    "end": 667
                  }
                ],
                "start": 652,
                "end": 673
              },
              "start": 455,
              "end": 673
            },
            "start": 451,
            "end": 673
          },
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
                "start": 678,
                "end": 679
              },
              "start": 678,
              "end": 681
            },
            "directive": null,
            "start": 678,
            "end": 682
          },
          {
            "type": "ForStatement",
            "init": {
              "type": "VariableDeclaration",
              "kind": "var",
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "id": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "k",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 696,
                    "end": 697
                  },
                  "init": {
                    "type": "Literal",
                    "value": 0,
                    "raw": "0",
                    "start": 698,
                    "end": 699
                  },
                  "definite": false,
                  "start": 696,
                  "end": 699
                }
              ],
              "declare": false,
              "start": 692,
              "end": 699
            },
            "test": {
              "type": "BinaryExpression",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "k",
                "optional": false,
                "typeAnnotation": null,
                "start": 700,
                "end": 701
              },
              "operator": "<",
              "right": {
                "type": "Literal",
                "value": 10,
                "raw": "10",
                "start": 702,
                "end": 704
              },
              "start": 700,
              "end": 704
            },
            "update": {
              "type": "UpdateExpression",
              "operator": "++",
              "prefix": false,
              "argument": {
                "type": "Identifier",
                "decorators": [],
                "name": "k",
                "optional": false,
                "typeAnnotation": null,
                "start": 705,
                "end": 706
              },
              "start": 705,
              "end": 708
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
                    "start": 720,
                    "end": 721
                  },
                  "directive": null,
                  "start": 720,
                  "end": 722
                },
                {
                  "type": "BreakStatement",
                  "label": null,
                  "start": 731,
                  "end": 737
                }
              ],
              "start": 710,
              "end": 743
            },
            "start": 687,
            "end": 743
          },
          {
            "type": "ForStatement",
            "init": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "k",
                "optional": false,
                "typeAnnotation": null,
                "start": 753,
                "end": 754
              },
              "right": {
                "type": "Literal",
                "value": 0,
                "raw": "0",
                "start": 755,
                "end": 756
              },
              "start": 753,
              "end": 756
            },
            "test": {
              "type": "BinaryExpression",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "k",
                "optional": false,
                "typeAnnotation": null,
                "start": 757,
                "end": 758
              },
              "operator": "<",
              "right": {
                "type": "Literal",
                "value": 10,
                "raw": "10",
                "start": 759,
                "end": 761
              },
              "start": 757,
              "end": 761
            },
            "update": {
              "type": "UpdateExpression",
              "operator": "++",
              "prefix": false,
              "argument": {
                "type": "Identifier",
                "decorators": [],
                "name": "k",
                "optional": false,
                "typeAnnotation": null,
                "start": 762,
                "end": 763
              },
              "start": 762,
              "end": 765
            },
            "body": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "IfStatement",
                  "test": {
                    "type": "BinaryExpression",
                    "left": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "k",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 781,
                      "end": 782
                    },
                    "operator": "==",
                    "right": {
                      "type": "Literal",
                      "value": 6,
                      "raw": "6",
                      "start": 784,
                      "end": 785
                    },
                    "start": 781,
                    "end": 785
                  },
                  "consequent": {
                    "type": "BlockStatement",
                    "body": [
                      {
                        "type": "ContinueStatement",
                        "label": null,
                        "start": 801,
                        "end": 810
                      }
                    ],
                    "start": 787,
                    "end": 820
                  },
                  "alternate": null,
                  "start": 777,
                  "end": 820
                },
                {
                  "type": "BreakStatement",
                  "label": null,
                  "start": 829,
                  "end": 835
                }
              ],
              "start": 767,
              "end": 841
            },
            "start": 748,
            "end": 841
          }
        ],
        "start": 13,
        "end": 843
      },
      "expression": false,
      "start": 0,
      "end": 843
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 843
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
    "value": "f",
    "start": 9,
    "end": 10
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 10,
    "end": 11
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 11,
    "end": 12
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 13,
    "end": 14
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 19,
    "end": 22
  },
  {
    "type": "Identifier",
    "value": "z",
    "start": 23,
    "end": 24
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 24,
    "end": 25
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 30,
    "end": 33
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 34,
    "end": 35
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 35,
    "end": 36
  },
  {
    "type": "Numeric",
    "value": "10",
    "start": 36,
    "end": 38
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 38,
    "end": 39
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 44,
    "end": 47
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 48,
    "end": 49
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 49,
    "end": 50
  },
  {
    "type": "Numeric",
    "value": "3",
    "start": 50,
    "end": 51
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 51,
    "end": 52
  },
  {
    "type": "Identifier",
    "value": "L1",
    "start": 58,
    "end": 60
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 60,
    "end": 61
  },
  {
    "type": "Keyword",
    "value": "for",
    "start": 62,
    "end": 65
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 66,
    "end": 67
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 67,
    "end": 70
  },
  {
    "type": "Identifier",
    "value": "i",
    "start": 71,
    "end": 72
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 72,
    "end": 73
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 73,
    "end": 74
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 74,
    "end": 75
  },
  {
    "type": "Identifier",
    "value": "i",
    "start": 75,
    "end": 76
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 76,
    "end": 77
  },
  {
    "type": "Numeric",
    "value": "19",
    "start": 77,
    "end": 79
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 79,
    "end": 80
  },
  {
    "type": "Identifier",
    "value": "i",
    "start": 80,
    "end": 81
  },
  {
    "type": "Punctuator",
    "value": "++",
    "start": 81,
    "end": 83
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 83,
    "end": 84
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 85,
    "end": 86
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 95,
    "end": 97
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 98,
    "end": 99
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 99,
    "end": 100
  },
  {
    "type": "Punctuator",
    "value": "==",
    "start": 100,
    "end": 102
  },
  {
    "type": "Numeric",
    "value": "7",
    "start": 102,
    "end": 103
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 103,
    "end": 104
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 105,
    "end": 106
  },
  {
    "type": "Keyword",
    "value": "continue",
    "start": 119,
    "end": 127
  },
  {
    "type": "Identifier",
    "value": "L1",
    "start": 128,
    "end": 130
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 130,
    "end": 131
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 144,
    "end": 145
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 145,
    "end": 146
  },
  {
    "type": "Numeric",
    "value": "11",
    "start": 146,
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
    "start": 158,
    "end": 159
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 168,
    "end": 170
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 171,
    "end": 172
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 172,
    "end": 173
  },
  {
    "type": "Punctuator",
    "value": "==",
    "start": 173,
    "end": 175
  },
  {
    "type": "Numeric",
    "value": "3",
    "start": 175,
    "end": 176
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 176,
    "end": 177
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 178,
    "end": 179
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 192,
    "end": 193
  },
  {
    "type": "Punctuator",
    "value": "++",
    "start": 193,
    "end": 195
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 195,
    "end": 196
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 205,
    "end": 206
  },
  {
    "type": "Keyword",
    "value": "else",
    "start": 215,
    "end": 219
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 220,
    "end": 221
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 234,
    "end": 235
  },
  {
    "type": "Punctuator",
    "value": "--",
    "start": 235,
    "end": 237
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 237,
    "end": 238
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 247,
    "end": 248
  },
  {
    "type": "Keyword",
    "value": "do",
    "start": 257,
    "end": 259
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 260,
    "end": 261
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 274,
    "end": 275
  },
  {
    "type": "Punctuator",
    "value": "+=",
    "start": 275,
    "end": 277
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 277,
    "end": 278
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 278,
    "end": 279
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 292,
    "end": 294
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 295,
    "end": 296
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 296,
    "end": 297
  },
  {
    "type": "Punctuator",
    "value": "==",
    "start": 297,
    "end": 299
  },
  {
    "type": "Numeric",
    "value": "20",
    "start": 299,
    "end": 301
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 301,
    "end": 302
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 303,
    "end": 304
  },
  {
    "type": "Keyword",
    "value": "break",
    "start": 321,
    "end": 326
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 326,
    "end": 327
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 344,
    "end": 345
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 345,
    "end": 346
  },
  {
    "type": "Numeric",
    "value": "12",
    "start": 346,
    "end": 348
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 348,
    "end": 349
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 362,
    "end": 363
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 372,
    "end": 373
  },
  {
    "type": "Keyword",
    "value": "while",
    "start": 374,
    "end": 379
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 380,
    "end": 381
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 381,
    "end": 382
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 382,
    "end": 383
  },
  {
    "type": "Numeric",
    "value": "41",
    "start": 383,
    "end": 385
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 385,
    "end": 386
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 386,
    "end": 387
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 396,
    "end": 397
  },
  {
    "type": "Punctuator",
    "value": "++",
    "start": 397,
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
    "start": 405,
    "end": 406
  },
  {
    "type": "Keyword",
    "value": "while",
    "start": 411,
    "end": 416
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 417,
    "end": 418
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 418,
    "end": 419
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 419,
    "end": 420
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 420,
    "end": 421
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 421,
    "end": 422
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 423,
    "end": 424
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 433,
    "end": 434
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 434,
    "end": 435
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 435,
    "end": 436
  },
  {
    "type": "Punctuator",
    "value": ">>",
    "start": 436,
    "end": 438
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 438,
    "end": 439
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 439,
    "end": 440
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 445,
    "end": 446
  },
  {
    "type": "Identifier",
    "value": "L2",
    "start": 451,
    "end": 453
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 453,
    "end": 454
  },
  {
    "type": "Keyword",
    "value": "try",
    "start": 455,
    "end": 458
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 459,
    "end": 460
  },
  {
    "type": "Identifier",
    "value": "L3",
    "start": 469,
    "end": 471
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 471,
    "end": 472
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 473,
    "end": 475
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 476,
    "end": 477
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 477,
    "end": 478
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 478,
    "end": 479
  },
  {
    "type": "Identifier",
    "value": "y",
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
    "value": "break",
    "start": 496,
    "end": 501
  },
  {
    "type": "Identifier",
    "value": "L2",
    "start": 502,
    "end": 504
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 504,
    "end": 505
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 518,
    "end": 519
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 519,
    "end": 520
  },
  {
    "type": "Numeric",
    "value": "13",
    "start": 520,
    "end": 522
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 522,
    "end": 523
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 532,
    "end": 533
  },
  {
    "type": "Keyword",
    "value": "else",
    "start": 542,
    "end": 546
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 547,
    "end": 548
  },
  {
    "type": "Keyword",
    "value": "break",
    "start": 561,
    "end": 566
  },
  {
    "type": "Identifier",
    "value": "L3",
    "start": 567,
    "end": 569
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 569,
    "end": 570
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 583,
    "end": 584
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 584,
    "end": 585
  },
  {
    "type": "Numeric",
    "value": "14",
    "start": 585,
    "end": 587
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 587,
    "end": 588
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 597,
    "end": 598
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 603,
    "end": 604
  },
  {
    "type": "Keyword",
    "value": "catch",
    "start": 609,
    "end": 614
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 615,
    "end": 616
  },
  {
    "type": "Identifier",
    "value": "e",
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
    "value": "x",
    "start": 629,
    "end": 630
  },
  {
    "type": "Punctuator",
    "value": "++",
    "start": 630,
    "end": 632
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 632,
    "end": 633
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 638,
    "end": 639
  },
  {
    "type": "Keyword",
    "value": "finally",
    "start": 644,
    "end": 651
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 652,
    "end": 653
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 662,
    "end": 663
  },
  {
    "type": "Punctuator",
    "value": "+=",
    "start": 663,
    "end": 665
  },
  {
    "type": "Numeric",
    "value": "3",
    "start": 665,
    "end": 666
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 666,
    "end": 667
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 672,
    "end": 673
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 678,
    "end": 679
  },
  {
    "type": "Punctuator",
    "value": "++",
    "start": 679,
    "end": 681
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 681,
    "end": 682
  },
  {
    "type": "Keyword",
    "value": "for",
    "start": 687,
    "end": 690
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 691,
    "end": 692
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 692,
    "end": 695
  },
  {
    "type": "Identifier",
    "value": "k",
    "start": 696,
    "end": 697
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 697,
    "end": 698
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 698,
    "end": 699
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 699,
    "end": 700
  },
  {
    "type": "Identifier",
    "value": "k",
    "start": 700,
    "end": 701
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 701,
    "end": 702
  },
  {
    "type": "Numeric",
    "value": "10",
    "start": 702,
    "end": 704
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 704,
    "end": 705
  },
  {
    "type": "Identifier",
    "value": "k",
    "start": 705,
    "end": 706
  },
  {
    "type": "Punctuator",
    "value": "++",
    "start": 706,
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
    "type": "Identifier",
    "value": "z",
    "start": 720,
    "end": 721
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 721,
    "end": 722
  },
  {
    "type": "Keyword",
    "value": "break",
    "start": 731,
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
    "start": 742,
    "end": 743
  },
  {
    "type": "Keyword",
    "value": "for",
    "start": 748,
    "end": 751
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 752,
    "end": 753
  },
  {
    "type": "Identifier",
    "value": "k",
    "start": 753,
    "end": 754
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 754,
    "end": 755
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 755,
    "end": 756
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 756,
    "end": 757
  },
  {
    "type": "Identifier",
    "value": "k",
    "start": 757,
    "end": 758
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 758,
    "end": 759
  },
  {
    "type": "Numeric",
    "value": "10",
    "start": 759,
    "end": 761
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 761,
    "end": 762
  },
  {
    "type": "Identifier",
    "value": "k",
    "start": 762,
    "end": 763
  },
  {
    "type": "Punctuator",
    "value": "++",
    "start": 763,
    "end": 765
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 765,
    "end": 766
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 767,
    "end": 768
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 777,
    "end": 779
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 780,
    "end": 781
  },
  {
    "type": "Identifier",
    "value": "k",
    "start": 781,
    "end": 782
  },
  {
    "type": "Punctuator",
    "value": "==",
    "start": 782,
    "end": 784
  },
  {
    "type": "Numeric",
    "value": "6",
    "start": 784,
    "end": 785
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 785,
    "end": 786
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 787,
    "end": 788
  },
  {
    "type": "Keyword",
    "value": "continue",
    "start": 801,
    "end": 809
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 809,
    "end": 810
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 819,
    "end": 820
  },
  {
    "type": "Keyword",
    "value": "break",
    "start": 829,
    "end": 834
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 834,
    "end": 835
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 840,
    "end": 841
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 842,
    "end": 843
  }
]
```
