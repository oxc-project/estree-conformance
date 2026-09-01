__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "IfStatement",
      "test": {
        "type": "Literal",
        "value": true,
        "raw": "true",
        "start": 43,
        "end": 47
      },
      "consequent": {
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
                  "name": "l1",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 60,
                  "end": 62
                },
                "init": {
                  "type": "Literal",
                  "value": 0,
                  "raw": "0",
                  "start": 65,
                  "end": 66
                },
                "definite": false,
                "start": 60,
                "end": 66
              }
            ],
            "declare": false,
            "start": 56,
            "end": 67
          }
        ],
        "start": 49,
        "end": 69
      },
      "alternate": {
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
                  "name": "l2",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 86,
                  "end": 88
                },
                "init": {
                  "type": "Literal",
                  "value": 0,
                  "raw": "0",
                  "start": 91,
                  "end": 92
                },
                "definite": false,
                "start": 86,
                "end": 92
              }
            ],
            "declare": false,
            "start": 82,
            "end": 93
          }
        ],
        "start": 75,
        "end": 95
      },
      "start": 39,
      "end": 95
    },
    {
      "type": "WhileStatement",
      "test": {
        "type": "Literal",
        "value": true,
        "raw": "true",
        "start": 104,
        "end": 108
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
                  "name": "l3",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 121,
                  "end": 123
                },
                "init": {
                  "type": "Literal",
                  "value": 0,
                  "raw": "0",
                  "start": 126,
                  "end": 127
                },
                "definite": false,
                "start": 121,
                "end": 127
              }
            ],
            "declare": false,
            "start": 117,
            "end": 128
          }
        ],
        "start": 110,
        "end": 130
      },
      "start": 97,
      "end": 130
    },
    {
      "type": "DoWhileStatement",
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
                  "name": "l4",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 146,
                  "end": 148
                },
                "init": {
                  "type": "Literal",
                  "value": 0,
                  "raw": "0",
                  "start": 151,
                  "end": 152
                },
                "definite": false,
                "start": 146,
                "end": 152
              }
            ],
            "declare": false,
            "start": 142,
            "end": 153
          }
        ],
        "start": 135,
        "end": 155
      },
      "test": {
        "type": "Literal",
        "value": true,
        "raw": "true",
        "start": 163,
        "end": 167
      },
      "start": 132,
      "end": 169
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
            "name": "obj",
            "optional": false,
            "typeAnnotation": null,
            "start": 175,
            "end": 178
          },
          "init": null,
          "definite": false,
          "start": 175,
          "end": 178
        }
      ],
      "declare": false,
      "start": 171,
      "end": 179
    },
    {
      "type": "WithStatement",
      "object": {
        "type": "Identifier",
        "decorators": [],
        "name": "obj",
        "optional": false,
        "typeAnnotation": null,
        "start": 186,
        "end": 189
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
                  "name": "l5",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 201,
                  "end": 203
                },
                "init": {
                  "type": "Literal",
                  "value": 0,
                  "raw": "0",
                  "start": 206,
                  "end": 207
                },
                "definite": false,
                "start": 201,
                "end": 207
              }
            ],
            "declare": false,
            "start": 197,
            "end": 208
          }
        ],
        "start": 191,
        "end": 210
      },
      "start": 180,
      "end": 210
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
              "name": "i",
              "optional": false,
              "typeAnnotation": null,
              "start": 221,
              "end": 222
            },
            "init": {
              "type": "Literal",
              "value": 0,
              "raw": "0",
              "start": 225,
              "end": 226
            },
            "definite": false,
            "start": 221,
            "end": 226
          }
        ],
        "declare": false,
        "start": 217,
        "end": 226
      },
      "test": {
        "type": "BinaryExpression",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "i",
          "optional": false,
          "typeAnnotation": null,
          "start": 228,
          "end": 229
        },
        "operator": "<",
        "right": {
          "type": "Literal",
          "value": 10,
          "raw": "10",
          "start": 232,
          "end": 234
        },
        "start": 228,
        "end": 234
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
          "start": 236,
          "end": 237
        },
        "start": 236,
        "end": 239
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
                  "name": "l6",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 251,
                  "end": 253
                },
                "init": {
                  "type": "Literal",
                  "value": 0,
                  "raw": "0",
                  "start": 256,
                  "end": 257
                },
                "definite": false,
                "start": 251,
                "end": 257
              }
            ],
            "declare": false,
            "start": 247,
            "end": 258
          }
        ],
        "start": 241,
        "end": 260
      },
      "start": 212,
      "end": 260
    },
    {
      "type": "ForInStatement",
      "left": {
        "type": "VariableDeclaration",
        "kind": "var",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "i2",
              "optional": false,
              "typeAnnotation": null,
              "start": 271,
              "end": 273
            },
            "init": null,
            "definite": false,
            "start": 271,
            "end": 273
          }
        ],
        "declare": false,
        "start": 267,
        "end": 273
      },
      "right": {
        "type": "ObjectExpression",
        "properties": [],
        "start": 277,
        "end": 279
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
                  "name": "l7",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 291,
                  "end": 293
                },
                "init": {
                  "type": "Literal",
                  "value": 0,
                  "raw": "0",
                  "start": 296,
                  "end": 297
                },
                "definite": false,
                "start": 291,
                "end": 297
              }
            ],
            "declare": false,
            "start": 287,
            "end": 298
          }
        ],
        "start": 281,
        "end": 300
      },
      "start": 262,
      "end": 300
    },
    {
      "type": "IfStatement",
      "test": {
        "type": "Literal",
        "value": true,
        "raw": "true",
        "start": 306,
        "end": 310
      },
      "consequent": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "LabeledStatement",
            "label": {
              "type": "Identifier",
              "decorators": [],
              "name": "label",
              "optional": false,
              "typeAnnotation": null,
              "start": 318,
              "end": 323
            },
            "body": {
              "type": "VariableDeclaration",
              "kind": "let",
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "id": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "l8",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 329,
                    "end": 331
                  },
                  "init": {
                    "type": "Literal",
                    "value": 0,
                    "raw": "0",
                    "start": 334,
                    "end": 335
                  },
                  "definite": false,
                  "start": 329,
                  "end": 335
                }
              ],
              "declare": false,
              "start": 325,
              "end": 336
            },
            "start": 318,
            "end": 336
          }
        ],
        "start": 312,
        "end": 338
      },
      "alternate": null,
      "start": 302,
      "end": 338
    },
    {
      "type": "WhileStatement",
      "test": {
        "type": "Literal",
        "value": false,
        "raw": "false",
        "start": 347,
        "end": 352
      },
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "LabeledStatement",
            "label": {
              "type": "Identifier",
              "decorators": [],
              "name": "label2",
              "optional": false,
              "typeAnnotation": null,
              "start": 360,
              "end": 366
            },
            "body": {
              "type": "LabeledStatement",
              "label": {
                "type": "Identifier",
                "decorators": [],
                "name": "label3",
                "optional": false,
                "typeAnnotation": null,
                "start": 368,
                "end": 374
              },
              "body": {
                "type": "LabeledStatement",
                "label": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "label4",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 376,
                  "end": 382
                },
                "body": {
                  "type": "VariableDeclaration",
                  "kind": "let",
                  "declarations": [
                    {
                      "type": "VariableDeclarator",
                      "id": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "l9",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 388,
                        "end": 390
                      },
                      "init": {
                        "type": "Literal",
                        "value": 0,
                        "raw": "0",
                        "start": 393,
                        "end": 394
                      },
                      "definite": false,
                      "start": 388,
                      "end": 394
                    }
                  ],
                  "declare": false,
                  "start": 384,
                  "end": 395
                },
                "start": 376,
                "end": 395
              },
              "start": 368,
              "end": 395
            },
            "start": 360,
            "end": 395
          }
        ],
        "start": 354,
        "end": 397
      },
      "start": 340,
      "end": 397
    },
    {
      "type": "TryStatement",
      "block": {
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
                  "name": "l10",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 434,
                  "end": 437
                },
                "init": {
                  "type": "Literal",
                  "value": 0,
                  "raw": "0",
                  "start": 440,
                  "end": 441
                },
                "definite": false,
                "start": 434,
                "end": 441
              }
            ],
            "declare": false,
            "start": 430,
            "end": 442
          }
        ],
        "start": 424,
        "end": 444
      },
      "handler": {
        "type": "CatchClause",
        "param": {
          "type": "Identifier",
          "decorators": [],
          "name": "e",
          "optional": false,
          "typeAnnotation": null,
          "start": 452,
          "end": 453
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
                    "name": "l11",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 465,
                    "end": 468
                  },
                  "init": {
                    "type": "Literal",
                    "value": 0,
                    "raw": "0",
                    "start": 471,
                    "end": 472
                  },
                  "definite": false,
                  "start": 465,
                  "end": 472
                }
              ],
              "declare": false,
              "start": 461,
              "end": 473
            }
          ],
          "start": 455,
          "end": 475
        },
        "start": 445,
        "end": 475
      },
      "finalizer": {
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
                  "name": "l12",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 494,
                  "end": 497
                },
                "init": {
                  "type": "Literal",
                  "value": 0,
                  "raw": "0",
                  "start": 500,
                  "end": 501
                },
                "definite": false,
                "start": 494,
                "end": 501
              }
            ],
            "declare": false,
            "start": 490,
            "end": 502
          }
        ],
        "start": 484,
        "end": 504
      },
      "start": 420,
      "end": 504
    },
    {
      "type": "SwitchStatement",
      "discriminant": {
        "type": "Literal",
        "value": 0,
        "raw": "0",
        "start": 524,
        "end": 525
      },
      "cases": [
        {
          "type": "SwitchCase",
          "test": {
            "type": "Literal",
            "value": 0,
            "raw": "0",
            "start": 538,
            "end": 539
          },
          "consequent": [
            {
              "type": "VariableDeclaration",
              "kind": "let",
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "id": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "l13",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 553,
                    "end": 556
                  },
                  "init": {
                    "type": "Literal",
                    "value": 0,
                    "raw": "0",
                    "start": 559,
                    "end": 560
                  },
                  "definite": false,
                  "start": 553,
                  "end": 560
                }
              ],
              "declare": false,
              "start": 549,
              "end": 561
            },
            {
              "type": "BreakStatement",
              "label": null,
              "start": 570,
              "end": 576
            }
          ],
          "start": 533,
          "end": 576
        },
        {
          "type": "SwitchCase",
          "test": null,
          "consequent": [
            {
              "type": "VariableDeclaration",
              "kind": "let",
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "id": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "l14",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 602,
                    "end": 605
                  },
                  "init": {
                    "type": "Literal",
                    "value": 0,
                    "raw": "0",
                    "start": 608,
                    "end": 609
                  },
                  "definite": false,
                  "start": 602,
                  "end": 609
                }
              ],
              "declare": false,
              "start": 598,
              "end": 610
            },
            {
              "type": "BreakStatement",
              "label": null,
              "start": 619,
              "end": 625
            }
          ],
          "start": 581,
          "end": 625
        }
      ],
      "start": 516,
      "end": 627
    },
    {
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
                "name": "l15",
                "optional": false,
                "typeAnnotation": null,
                "start": 649,
                "end": 652
              },
              "init": {
                "type": "Literal",
                "value": 0,
                "raw": "0",
                "start": 655,
                "end": 656
              },
              "definite": false,
              "start": 649,
              "end": 656
            }
          ],
          "declare": false,
          "start": 645,
          "end": 657
        },
        {
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
                    "name": "l16",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 676,
                    "end": 679
                  },
                  "init": {
                    "type": "Literal",
                    "value": 0,
                    "raw": "0",
                    "start": 682,
                    "end": 683
                  },
                  "definite": false,
                  "start": 676,
                  "end": 683
                }
              ],
              "declare": false,
              "start": 672,
              "end": 683
            },
            {
              "type": "LabeledStatement",
              "label": {
                "type": "Identifier",
                "decorators": [],
                "name": "label17",
                "optional": false,
                "typeAnnotation": null,
                "start": 692,
                "end": 699
              },
              "body": {
                "type": "VariableDeclaration",
                "kind": "let",
                "declarations": [
                  {
                    "type": "VariableDeclarator",
                    "id": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "l17",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 705,
                      "end": 708
                    },
                    "init": {
                      "type": "Literal",
                      "value": 0,
                      "raw": "0",
                      "start": 711,
                      "end": 712
                    },
                    "definite": false,
                    "start": 705,
                    "end": 712
                  }
                ],
                "declare": false,
                "start": 701,
                "end": 713
              },
              "start": 692,
              "end": 713
            }
          ],
          "start": 662,
          "end": 719
        }
      ],
      "start": 639,
      "end": 721
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
            "name": "l18",
            "optional": false,
            "typeAnnotation": null,
            "start": 737,
            "end": 740
          },
          "init": {
            "type": "Literal",
            "value": 0,
            "raw": "0",
            "start": 743,
            "end": 744
          },
          "definite": false,
          "start": 737,
          "end": 744
        }
      ],
      "declare": false,
      "start": 733,
      "end": 745
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "F",
        "optional": false,
        "typeAnnotation": null,
        "start": 769,
        "end": 770
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
                  "name": "l19",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 783,
                  "end": 786
                },
                "init": {
                  "type": "Literal",
                  "value": 0,
                  "raw": "0",
                  "start": 789,
                  "end": 790
                },
                "definite": false,
                "start": 783,
                "end": 790
              }
            ],
            "declare": false,
            "start": 779,
            "end": 791
          }
        ],
        "start": 773,
        "end": 793
      },
      "expression": false,
      "start": 760,
      "end": 793
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
            "name": "F2",
            "optional": false,
            "typeAnnotation": null,
            "start": 799,
            "end": 801
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
                        "name": "l20",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 820,
                        "end": 823
                      },
                      "init": {
                        "type": "Literal",
                        "value": 0,
                        "raw": "0",
                        "start": 826,
                        "end": 827
                      },
                      "definite": false,
                      "start": 820,
                      "end": 827
                    }
                  ],
                  "declare": false,
                  "start": 816,
                  "end": 828
                }
              ],
              "start": 810,
              "end": 830
            },
            "id": null,
            "generator": false,
            "start": 804,
            "end": 830
          },
          "definite": false,
          "start": 799,
          "end": 830
        }
      ],
      "declare": false,
      "start": 795,
      "end": 831
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
            "name": "F3",
            "optional": false,
            "typeAnnotation": null,
            "start": 837,
            "end": 839
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
                  "type": "VariableDeclaration",
                  "kind": "let",
                  "declarations": [
                    {
                      "type": "VariableDeclarator",
                      "id": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "l21",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 864,
                        "end": 867
                      },
                      "init": {
                        "type": "Literal",
                        "value": 0,
                        "raw": "0",
                        "start": 870,
                        "end": 871
                      },
                      "definite": false,
                      "start": 864,
                      "end": 871
                    }
                  ],
                  "declare": false,
                  "start": 860,
                  "end": 872
                }
              ],
              "start": 854,
              "end": 874
            },
            "expression": false,
            "start": 842,
            "end": 874
          },
          "definite": false,
          "start": 837,
          "end": 874
        }
      ],
      "declare": false,
      "start": 833,
      "end": 875
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "m",
        "optional": false,
        "typeAnnotation": null,
        "start": 898,
        "end": 899
      },
      "body": {
        "type": "TSModuleBlock",
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
                  "name": "l22",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 910,
                  "end": 913
                },
                "init": {
                  "type": "Literal",
                  "value": 0,
                  "raw": "0",
                  "start": 916,
                  "end": 917
                },
                "definite": false,
                "start": 910,
                "end": 917
              }
            ],
            "declare": false,
            "start": 906,
            "end": 918
          },
          {
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
                      "name": "l23",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 940,
                      "end": 943
                    },
                    "init": {
                      "type": "Literal",
                      "value": 0,
                      "raw": "0",
                      "start": 946,
                      "end": 947
                    },
                    "definite": false,
                    "start": 940,
                    "end": 947
                  }
                ],
                "declare": false,
                "start": 936,
                "end": 948
              }
            ],
            "start": 924,
            "end": 954
          }
        ],
        "start": 900,
        "end": 956
      },
      "kind": "namespace",
      "declare": false,
      "global": false,
      "start": 888,
      "end": 956
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "C",
        "optional": false,
        "typeAnnotation": null,
        "start": 975,
        "end": 976
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "constructor",
              "optional": false,
              "typeAnnotation": null,
              "start": 983,
              "end": 994
            },
            "value": {
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
                    "type": "VariableDeclaration",
                    "kind": "let",
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "id": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "l24",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1011,
                          "end": 1014
                        },
                        "init": {
                          "type": "Literal",
                          "value": 0,
                          "raw": "0",
                          "start": 1017,
                          "end": 1018
                        },
                        "definite": false,
                        "start": 1011,
                        "end": 1018
                      }
                    ],
                    "declare": false,
                    "start": 1007,
                    "end": 1019
                  }
                ],
                "start": 997,
                "end": 1025
              },
              "expression": false,
              "start": 994,
              "end": 1025
            },
            "kind": "constructor",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 983,
            "end": 1025
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "method",
              "optional": false,
              "typeAnnotation": null,
              "start": 1031,
              "end": 1037
            },
            "value": {
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
                    "type": "VariableDeclaration",
                    "kind": "let",
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "id": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "l25",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1054,
                          "end": 1057
                        },
                        "init": {
                          "type": "Literal",
                          "value": 0,
                          "raw": "0",
                          "start": 1060,
                          "end": 1061
                        },
                        "definite": false,
                        "start": 1054,
                        "end": 1061
                      }
                    ],
                    "declare": false,
                    "start": 1050,
                    "end": 1062
                  }
                ],
                "start": 1040,
                "end": 1068
              },
              "expression": false,
              "start": 1037,
              "end": 1068
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 1031,
            "end": 1068
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "v",
              "optional": false,
              "typeAnnotation": null,
              "start": 1078,
              "end": 1079
            },
            "value": {
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
                    "type": "VariableDeclaration",
                    "kind": "let",
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "id": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "l26",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1096,
                          "end": 1099
                        },
                        "init": {
                          "type": "Literal",
                          "value": 0,
                          "raw": "0",
                          "start": 1102,
                          "end": 1103
                        },
                        "definite": false,
                        "start": 1096,
                        "end": 1103
                      }
                    ],
                    "declare": false,
                    "start": 1092,
                    "end": 1104
                  },
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "l26",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1120,
                      "end": 1123
                    },
                    "start": 1113,
                    "end": 1124
                  }
                ],
                "start": 1082,
                "end": 1131
              },
              "expression": false,
              "start": 1079,
              "end": 1131
            },
            "kind": "get",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 1074,
            "end": 1131
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "v",
              "optional": false,
              "typeAnnotation": null,
              "start": 1141,
              "end": 1142
            },
            "value": {
              "type": "FunctionExpression",
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "value",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1143,
                  "end": 1148
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
                          "name": "l27",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1164,
                          "end": 1167
                        },
                        "init": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "value",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1170,
                          "end": 1175
                        },
                        "definite": false,
                        "start": 1164,
                        "end": 1175
                      }
                    ],
                    "declare": false,
                    "start": 1160,
                    "end": 1176
                  }
                ],
                "start": 1150,
                "end": 1182
              },
              "expression": false,
              "start": 1142,
              "end": 1182
            },
            "kind": "set",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 1137,
            "end": 1182
          }
        ],
        "start": 977,
        "end": 1184
      },
      "abstract": false,
      "declare": false,
      "start": 969,
      "end": 1184
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
            "name": "o",
            "optional": false,
            "typeAnnotation": null,
            "start": 1209,
            "end": 1210
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
                  "name": "f",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1219,
                  "end": 1220
                },
                "value": {
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
                        "type": "VariableDeclaration",
                        "kind": "let",
                        "declarations": [
                          {
                            "type": "VariableDeclarator",
                            "id": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "l28",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 1237,
                              "end": 1240
                            },
                            "init": {
                              "type": "Literal",
                              "value": 0,
                              "raw": "0",
                              "start": 1243,
                              "end": 1244
                            },
                            "definite": false,
                            "start": 1237,
                            "end": 1244
                          }
                        ],
                        "declare": false,
                        "start": 1233,
                        "end": 1245
                      }
                    ],
                    "start": 1223,
                    "end": 1251
                  },
                  "expression": false,
                  "start": 1220,
                  "end": 1251
                },
                "method": true,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 1219,
                "end": 1251
              },
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "f2",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1257,
                  "end": 1259
                },
                "value": {
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
                              "name": "l29",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 1281,
                              "end": 1284
                            },
                            "init": {
                              "type": "Literal",
                              "value": 0,
                              "raw": "0",
                              "start": 1287,
                              "end": 1288
                            },
                            "definite": false,
                            "start": 1281,
                            "end": 1288
                          }
                        ],
                        "declare": false,
                        "start": 1277,
                        "end": 1289
                      }
                    ],
                    "start": 1267,
                    "end": 1295
                  },
                  "id": null,
                  "generator": false,
                  "start": 1261,
                  "end": 1295
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 1257,
                "end": 1295
              }
            ],
            "start": 1213,
            "end": 1297
          },
          "definite": false,
          "start": 1209,
          "end": 1297
        }
      ],
      "declare": false,
      "start": 1205,
      "end": 1297
    },
    {
      "type": "LabeledStatement",
      "label": {
        "type": "Identifier",
        "decorators": [],
        "name": "label",
        "optional": false,
        "typeAnnotation": null,
        "start": 1309,
        "end": 1314
      },
      "body": {
        "type": "VariableDeclaration",
        "kind": "let",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "l30",
              "optional": false,
              "typeAnnotation": null,
              "start": 1320,
              "end": 1323
            },
            "init": {
              "type": "Literal",
              "value": 0,
              "raw": "0",
              "start": 1326,
              "end": 1327
            },
            "definite": false,
            "start": 1320,
            "end": 1327
          }
        ],
        "declare": false,
        "start": 1316,
        "end": 1328
      },
      "start": 1309,
      "end": 1328
    },
    {
      "type": "BlockStatement",
      "body": [
        {
          "type": "LabeledStatement",
          "label": {
            "type": "Identifier",
            "decorators": [],
            "name": "label2",
            "optional": false,
            "typeAnnotation": null,
            "start": 1335,
            "end": 1341
          },
          "body": {
            "type": "VariableDeclaration",
            "kind": "let",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "l31",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1347,
                  "end": 1350
                },
                "init": {
                  "type": "Literal",
                  "value": 0,
                  "raw": "0",
                  "start": 1353,
                  "end": 1354
                },
                "definite": false,
                "start": 1347,
                "end": 1354
              }
            ],
            "declare": false,
            "start": 1343,
            "end": 1355
          },
          "start": 1335,
          "end": 1355
        }
      ],
      "start": 1329,
      "end": 1357
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f3",
        "optional": false,
        "typeAnnotation": null,
        "start": 1368,
        "end": 1370
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
            "type": "LabeledStatement",
            "label": {
              "type": "Identifier",
              "decorators": [],
              "name": "label",
              "optional": false,
              "typeAnnotation": null,
              "start": 1379,
              "end": 1384
            },
            "body": {
              "type": "VariableDeclaration",
              "kind": "let",
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "id": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "l32",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1390,
                    "end": 1393
                  },
                  "init": {
                    "type": "Literal",
                    "value": 0,
                    "raw": "0",
                    "start": 1396,
                    "end": 1397
                  },
                  "definite": false,
                  "start": 1390,
                  "end": 1397
                }
              ],
              "declare": false,
              "start": 1386,
              "end": 1398
            },
            "start": 1379,
            "end": 1398
          },
          {
            "type": "BlockStatement",
            "body": [
              {
                "type": "LabeledStatement",
                "label": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "label2",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1413,
                  "end": 1419
                },
                "body": {
                  "type": "VariableDeclaration",
                  "kind": "let",
                  "declarations": [
                    {
                      "type": "VariableDeclarator",
                      "id": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "l33",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1425,
                        "end": 1428
                      },
                      "init": {
                        "type": "Literal",
                        "value": 0,
                        "raw": "0",
                        "start": 1431,
                        "end": 1432
                      },
                      "definite": false,
                      "start": 1425,
                      "end": 1432
                    }
                  ],
                  "declare": false,
                  "start": 1421,
                  "end": 1433
                },
                "start": 1413,
                "end": 1433
              }
            ],
            "start": 1403,
            "end": 1439
          }
        ],
        "start": 1373,
        "end": 1441
      },
      "expression": false,
      "start": 1359,
      "end": 1441
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "m3",
        "optional": false,
        "typeAnnotation": null,
        "start": 1453,
        "end": 1455
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "LabeledStatement",
            "label": {
              "type": "Identifier",
              "decorators": [],
              "name": "label",
              "optional": false,
              "typeAnnotation": null,
              "start": 1462,
              "end": 1467
            },
            "body": {
              "type": "VariableDeclaration",
              "kind": "let",
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "id": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "l34",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1473,
                    "end": 1476
                  },
                  "init": {
                    "type": "Literal",
                    "value": 0,
                    "raw": "0",
                    "start": 1479,
                    "end": 1480
                  },
                  "definite": false,
                  "start": 1473,
                  "end": 1480
                }
              ],
              "declare": false,
              "start": 1469,
              "end": 1481
            },
            "start": 1462,
            "end": 1481
          },
          {
            "type": "BlockStatement",
            "body": [
              {
                "type": "LabeledStatement",
                "label": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "label2",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1496,
                  "end": 1502
                },
                "body": {
                  "type": "VariableDeclaration",
                  "kind": "let",
                  "declarations": [
                    {
                      "type": "VariableDeclarator",
                      "id": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "l35",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1508,
                        "end": 1511
                      },
                      "init": {
                        "type": "Literal",
                        "value": 0,
                        "raw": "0",
                        "start": 1514,
                        "end": 1515
                      },
                      "definite": false,
                      "start": 1508,
                      "end": 1515
                    }
                  ],
                  "declare": false,
                  "start": 1504,
                  "end": 1516
                },
                "start": 1496,
                "end": 1516
              }
            ],
            "start": 1486,
            "end": 1522
          }
        ],
        "start": 1456,
        "end": 1524
      },
      "kind": "namespace",
      "declare": false,
      "global": false,
      "start": 1443,
      "end": 1524
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 39,
  "end": 1524
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "if",
    "start": 39,
    "end": 41
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 42,
    "end": 43
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 43,
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
    "start": 56,
    "end": 59
  },
  {
    "type": "Identifier",
    "value": "l1",
    "start": 60,
    "end": 62
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 63,
    "end": 64
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 65,
    "end": 66
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 66,
    "end": 67
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 68,
    "end": 69
  },
  {
    "type": "Keyword",
    "value": "else",
    "start": 70,
    "end": 74
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 75,
    "end": 76
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 82,
    "end": 85
  },
  {
    "type": "Identifier",
    "value": "l2",
    "start": 86,
    "end": 88
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 89,
    "end": 90
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 91,
    "end": 92
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 92,
    "end": 93
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 94,
    "end": 95
  },
  {
    "type": "Keyword",
    "value": "while",
    "start": 97,
    "end": 102
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 103,
    "end": 104
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 104,
    "end": 108
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 108,
    "end": 109
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 110,
    "end": 111
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 117,
    "end": 120
  },
  {
    "type": "Identifier",
    "value": "l3",
    "start": 121,
    "end": 123
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 124,
    "end": 125
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 126,
    "end": 127
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 127,
    "end": 128
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 129,
    "end": 130
  },
  {
    "type": "Keyword",
    "value": "do",
    "start": 132,
    "end": 134
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 135,
    "end": 136
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 142,
    "end": 145
  },
  {
    "type": "Identifier",
    "value": "l4",
    "start": 146,
    "end": 148
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 149,
    "end": 150
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 151,
    "end": 152
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 152,
    "end": 153
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 154,
    "end": 155
  },
  {
    "type": "Keyword",
    "value": "while",
    "start": 156,
    "end": 161
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 162,
    "end": 163
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 163,
    "end": 167
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 167,
    "end": 168
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 168,
    "end": 169
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 171,
    "end": 174
  },
  {
    "type": "Identifier",
    "value": "obj",
    "start": 175,
    "end": 178
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 178,
    "end": 179
  },
  {
    "type": "Keyword",
    "value": "with",
    "start": 180,
    "end": 184
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 185,
    "end": 186
  },
  {
    "type": "Identifier",
    "value": "obj",
    "start": 186,
    "end": 189
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 189,
    "end": 190
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 191,
    "end": 192
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 197,
    "end": 200
  },
  {
    "type": "Identifier",
    "value": "l5",
    "start": 201,
    "end": 203
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 204,
    "end": 205
  },
  {
    "type": "Numeric",
    "value": "0",
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
    "start": 209,
    "end": 210
  },
  {
    "type": "Keyword",
    "value": "for",
    "start": 212,
    "end": 215
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 216,
    "end": 217
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 217,
    "end": 220
  },
  {
    "type": "Identifier",
    "value": "i",
    "start": 221,
    "end": 222
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 223,
    "end": 224
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 225,
    "end": 226
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 226,
    "end": 227
  },
  {
    "type": "Identifier",
    "value": "i",
    "start": 228,
    "end": 229
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 230,
    "end": 231
  },
  {
    "type": "Numeric",
    "value": "10",
    "start": 232,
    "end": 234
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 234,
    "end": 235
  },
  {
    "type": "Identifier",
    "value": "i",
    "start": 236,
    "end": 237
  },
  {
    "type": "Punctuator",
    "value": "++",
    "start": 237,
    "end": 239
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 239,
    "end": 240
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 241,
    "end": 242
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 247,
    "end": 250
  },
  {
    "type": "Identifier",
    "value": "l6",
    "start": 251,
    "end": 253
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 254,
    "end": 255
  },
  {
    "type": "Numeric",
    "value": "0",
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
    "start": 259,
    "end": 260
  },
  {
    "type": "Keyword",
    "value": "for",
    "start": 262,
    "end": 265
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 266,
    "end": 267
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 267,
    "end": 270
  },
  {
    "type": "Identifier",
    "value": "i2",
    "start": 271,
    "end": 273
  },
  {
    "type": "Keyword",
    "value": "in",
    "start": 274,
    "end": 276
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 277,
    "end": 278
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 278,
    "end": 279
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 279,
    "end": 280
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 281,
    "end": 282
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 287,
    "end": 290
  },
  {
    "type": "Identifier",
    "value": "l7",
    "start": 291,
    "end": 293
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 294,
    "end": 295
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 296,
    "end": 297
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 297,
    "end": 298
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 299,
    "end": 300
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 302,
    "end": 304
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 305,
    "end": 306
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 306,
    "end": 310
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 310,
    "end": 311
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 312,
    "end": 313
  },
  {
    "type": "Identifier",
    "value": "label",
    "start": 318,
    "end": 323
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 323,
    "end": 324
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 325,
    "end": 328
  },
  {
    "type": "Identifier",
    "value": "l8",
    "start": 329,
    "end": 331
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 332,
    "end": 333
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 334,
    "end": 335
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 335,
    "end": 336
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 337,
    "end": 338
  },
  {
    "type": "Keyword",
    "value": "while",
    "start": 340,
    "end": 345
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 346,
    "end": 347
  },
  {
    "type": "Boolean",
    "value": "false",
    "start": 347,
    "end": 352
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 352,
    "end": 353
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 354,
    "end": 355
  },
  {
    "type": "Identifier",
    "value": "label2",
    "start": 360,
    "end": 366
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 366,
    "end": 367
  },
  {
    "type": "Identifier",
    "value": "label3",
    "start": 368,
    "end": 374
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 374,
    "end": 375
  },
  {
    "type": "Identifier",
    "value": "label4",
    "start": 376,
    "end": 382
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 382,
    "end": 383
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 384,
    "end": 387
  },
  {
    "type": "Identifier",
    "value": "l9",
    "start": 388,
    "end": 390
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 391,
    "end": 392
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 393,
    "end": 394
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 394,
    "end": 395
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 396,
    "end": 397
  },
  {
    "type": "Keyword",
    "value": "try",
    "start": 420,
    "end": 423
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 424,
    "end": 425
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 430,
    "end": 433
  },
  {
    "type": "Identifier",
    "value": "l10",
    "start": 434,
    "end": 437
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 438,
    "end": 439
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 440,
    "end": 441
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 441,
    "end": 442
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 443,
    "end": 444
  },
  {
    "type": "Keyword",
    "value": "catch",
    "start": 445,
    "end": 450
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 451,
    "end": 452
  },
  {
    "type": "Identifier",
    "value": "e",
    "start": 452,
    "end": 453
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 453,
    "end": 454
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 455,
    "end": 456
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 461,
    "end": 464
  },
  {
    "type": "Identifier",
    "value": "l11",
    "start": 465,
    "end": 468
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 469,
    "end": 470
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 471,
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
    "start": 474,
    "end": 475
  },
  {
    "type": "Keyword",
    "value": "finally",
    "start": 476,
    "end": 483
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 484,
    "end": 485
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 490,
    "end": 493
  },
  {
    "type": "Identifier",
    "value": "l12",
    "start": 494,
    "end": 497
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 498,
    "end": 499
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 500,
    "end": 501
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 501,
    "end": 502
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 503,
    "end": 504
  },
  {
    "type": "Keyword",
    "value": "switch",
    "start": 516,
    "end": 522
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 523,
    "end": 524
  },
  {
    "type": "Numeric",
    "value": "0",
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
    "value": "case",
    "start": 533,
    "end": 537
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 538,
    "end": 539
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 539,
    "end": 540
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 549,
    "end": 552
  },
  {
    "type": "Identifier",
    "value": "l13",
    "start": 553,
    "end": 556
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 557,
    "end": 558
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 559,
    "end": 560
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 560,
    "end": 561
  },
  {
    "type": "Keyword",
    "value": "break",
    "start": 570,
    "end": 575
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 575,
    "end": 576
  },
  {
    "type": "Keyword",
    "value": "default",
    "start": 581,
    "end": 588
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 588,
    "end": 589
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 598,
    "end": 601
  },
  {
    "type": "Identifier",
    "value": "l14",
    "start": 602,
    "end": 605
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 606,
    "end": 607
  },
  {
    "type": "Numeric",
    "value": "0",
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
    "type": "Keyword",
    "value": "break",
    "start": 619,
    "end": 624
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 624,
    "end": 625
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 626,
    "end": 627
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 639,
    "end": 640
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 645,
    "end": 648
  },
  {
    "type": "Identifier",
    "value": "l15",
    "start": 649,
    "end": 652
  },
  {
    "type": "Punctuator",
    "value": "=",
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
    "value": ";",
    "start": 656,
    "end": 657
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 662,
    "end": 663
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 672,
    "end": 675
  },
  {
    "type": "Identifier",
    "value": "l16",
    "start": 676,
    "end": 679
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 680,
    "end": 681
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 682,
    "end": 683
  },
  {
    "type": "Identifier",
    "value": "label17",
    "start": 692,
    "end": 699
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 699,
    "end": 700
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 701,
    "end": 704
  },
  {
    "type": "Identifier",
    "value": "l17",
    "start": 705,
    "end": 708
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 709,
    "end": 710
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 711,
    "end": 712
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 712,
    "end": 713
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 718,
    "end": 719
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 720,
    "end": 721
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 733,
    "end": 736
  },
  {
    "type": "Identifier",
    "value": "l18",
    "start": 737,
    "end": 740
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 741,
    "end": 742
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 743,
    "end": 744
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 744,
    "end": 745
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 760,
    "end": 768
  },
  {
    "type": "Identifier",
    "value": "F",
    "start": 769,
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
    "type": "Keyword",
    "value": "let",
    "start": 779,
    "end": 782
  },
  {
    "type": "Identifier",
    "value": "l19",
    "start": 783,
    "end": 786
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 787,
    "end": 788
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 789,
    "end": 790
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 790,
    "end": 791
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 792,
    "end": 793
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 795,
    "end": 798
  },
  {
    "type": "Identifier",
    "value": "F2",
    "start": 799,
    "end": 801
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 802,
    "end": 803
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 804,
    "end": 805
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 805,
    "end": 806
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 807,
    "end": 809
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 810,
    "end": 811
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 816,
    "end": 819
  },
  {
    "type": "Identifier",
    "value": "l20",
    "start": 820,
    "end": 823
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 824,
    "end": 825
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 826,
    "end": 827
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 827,
    "end": 828
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 829,
    "end": 830
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 830,
    "end": 831
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 833,
    "end": 836
  },
  {
    "type": "Identifier",
    "value": "F3",
    "start": 837,
    "end": 839
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 840,
    "end": 841
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 842,
    "end": 850
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 851,
    "end": 852
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 852,
    "end": 853
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 854,
    "end": 855
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 860,
    "end": 863
  },
  {
    "type": "Identifier",
    "value": "l21",
    "start": 864,
    "end": 867
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 868,
    "end": 869
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 870,
    "end": 871
  },
  {
    "type": "Punctuator",
    "value": ";",
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
    "type": "Punctuator",
    "value": ";",
    "start": 874,
    "end": 875
  },
  {
    "type": "Identifier",
    "value": "namespace",
    "start": 888,
    "end": 897
  },
  {
    "type": "Identifier",
    "value": "m",
    "start": 898,
    "end": 899
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 900,
    "end": 901
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 906,
    "end": 909
  },
  {
    "type": "Identifier",
    "value": "l22",
    "start": 910,
    "end": 913
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 914,
    "end": 915
  },
  {
    "type": "Numeric",
    "value": "0",
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
    "value": "{",
    "start": 924,
    "end": 925
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 936,
    "end": 939
  },
  {
    "type": "Identifier",
    "value": "l23",
    "start": 940,
    "end": 943
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 944,
    "end": 945
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 946,
    "end": 947
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 947,
    "end": 948
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 953,
    "end": 954
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 955,
    "end": 956
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 969,
    "end": 974
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 975,
    "end": 976
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 977,
    "end": 978
  },
  {
    "type": "Identifier",
    "value": "constructor",
    "start": 983,
    "end": 994
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 994,
    "end": 995
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 995,
    "end": 996
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 997,
    "end": 998
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 1007,
    "end": 1010
  },
  {
    "type": "Identifier",
    "value": "l24",
    "start": 1011,
    "end": 1014
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1015,
    "end": 1016
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 1017,
    "end": 1018
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1018,
    "end": 1019
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1024,
    "end": 1025
  },
  {
    "type": "Identifier",
    "value": "method",
    "start": 1031,
    "end": 1037
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1037,
    "end": 1038
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1038,
    "end": 1039
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1040,
    "end": 1041
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 1050,
    "end": 1053
  },
  {
    "type": "Identifier",
    "value": "l25",
    "start": 1054,
    "end": 1057
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1058,
    "end": 1059
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 1060,
    "end": 1061
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1061,
    "end": 1062
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1067,
    "end": 1068
  },
  {
    "type": "Identifier",
    "value": "get",
    "start": 1074,
    "end": 1077
  },
  {
    "type": "Identifier",
    "value": "v",
    "start": 1078,
    "end": 1079
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1079,
    "end": 1080
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1080,
    "end": 1081
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1082,
    "end": 1083
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 1092,
    "end": 1095
  },
  {
    "type": "Identifier",
    "value": "l26",
    "start": 1096,
    "end": 1099
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1100,
    "end": 1101
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 1102,
    "end": 1103
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1103,
    "end": 1104
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 1113,
    "end": 1119
  },
  {
    "type": "Identifier",
    "value": "l26",
    "start": 1120,
    "end": 1123
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1123,
    "end": 1124
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1130,
    "end": 1131
  },
  {
    "type": "Identifier",
    "value": "set",
    "start": 1137,
    "end": 1140
  },
  {
    "type": "Identifier",
    "value": "v",
    "start": 1141,
    "end": 1142
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1142,
    "end": 1143
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 1143,
    "end": 1148
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1148,
    "end": 1149
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1150,
    "end": 1151
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 1160,
    "end": 1163
  },
  {
    "type": "Identifier",
    "value": "l27",
    "start": 1164,
    "end": 1167
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1168,
    "end": 1169
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 1170,
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
    "start": 1181,
    "end": 1182
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1183,
    "end": 1184
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1205,
    "end": 1208
  },
  {
    "type": "Identifier",
    "value": "o",
    "start": 1209,
    "end": 1210
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1211,
    "end": 1212
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1213,
    "end": 1214
  },
  {
    "type": "Identifier",
    "value": "f",
    "start": 1219,
    "end": 1220
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1220,
    "end": 1221
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1221,
    "end": 1222
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1223,
    "end": 1224
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 1233,
    "end": 1236
  },
  {
    "type": "Identifier",
    "value": "l28",
    "start": 1237,
    "end": 1240
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1241,
    "end": 1242
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 1243,
    "end": 1244
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1244,
    "end": 1245
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1250,
    "end": 1251
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1251,
    "end": 1252
  },
  {
    "type": "Identifier",
    "value": "f2",
    "start": 1257,
    "end": 1259
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1259,
    "end": 1260
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1261,
    "end": 1262
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1262,
    "end": 1263
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1264,
    "end": 1266
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1267,
    "end": 1268
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 1277,
    "end": 1280
  },
  {
    "type": "Identifier",
    "value": "l29",
    "start": 1281,
    "end": 1284
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1285,
    "end": 1286
  },
  {
    "type": "Numeric",
    "value": "0",
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
    "start": 1294,
    "end": 1295
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1296,
    "end": 1297
  },
  {
    "type": "Identifier",
    "value": "label",
    "start": 1309,
    "end": 1314
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1314,
    "end": 1315
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 1316,
    "end": 1319
  },
  {
    "type": "Identifier",
    "value": "l30",
    "start": 1320,
    "end": 1323
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1324,
    "end": 1325
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 1326,
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
    "value": "{",
    "start": 1329,
    "end": 1330
  },
  {
    "type": "Identifier",
    "value": "label2",
    "start": 1335,
    "end": 1341
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1341,
    "end": 1342
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 1343,
    "end": 1346
  },
  {
    "type": "Identifier",
    "value": "l31",
    "start": 1347,
    "end": 1350
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1351,
    "end": 1352
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 1353,
    "end": 1354
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1354,
    "end": 1355
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1356,
    "end": 1357
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1359,
    "end": 1367
  },
  {
    "type": "Identifier",
    "value": "f3",
    "start": 1368,
    "end": 1370
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1370,
    "end": 1371
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1371,
    "end": 1372
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1373,
    "end": 1374
  },
  {
    "type": "Identifier",
    "value": "label",
    "start": 1379,
    "end": 1384
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1384,
    "end": 1385
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 1386,
    "end": 1389
  },
  {
    "type": "Identifier",
    "value": "l32",
    "start": 1390,
    "end": 1393
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1394,
    "end": 1395
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 1396,
    "end": 1397
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1397,
    "end": 1398
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1403,
    "end": 1404
  },
  {
    "type": "Identifier",
    "value": "label2",
    "start": 1413,
    "end": 1419
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1419,
    "end": 1420
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 1421,
    "end": 1424
  },
  {
    "type": "Identifier",
    "value": "l33",
    "start": 1425,
    "end": 1428
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1429,
    "end": 1430
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 1431,
    "end": 1432
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1432,
    "end": 1433
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1438,
    "end": 1439
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1440,
    "end": 1441
  },
  {
    "type": "Identifier",
    "value": "namespace",
    "start": 1443,
    "end": 1452
  },
  {
    "type": "Identifier",
    "value": "m3",
    "start": 1453,
    "end": 1455
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1456,
    "end": 1457
  },
  {
    "type": "Identifier",
    "value": "label",
    "start": 1462,
    "end": 1467
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1467,
    "end": 1468
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 1469,
    "end": 1472
  },
  {
    "type": "Identifier",
    "value": "l34",
    "start": 1473,
    "end": 1476
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1477,
    "end": 1478
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 1479,
    "end": 1480
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1480,
    "end": 1481
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1486,
    "end": 1487
  },
  {
    "type": "Identifier",
    "value": "label2",
    "start": 1496,
    "end": 1502
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1502,
    "end": 1503
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 1504,
    "end": 1507
  },
  {
    "type": "Identifier",
    "value": "l35",
    "start": 1508,
    "end": 1511
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1512,
    "end": 1513
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 1514,
    "end": 1515
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1515,
    "end": 1516
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1521,
    "end": 1522
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1523,
    "end": 1524
  }
]
```
