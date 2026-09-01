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
            "kind": "const",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "c1",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 62,
                  "end": 64
                },
                "init": {
                  "type": "Literal",
                  "value": 0,
                  "raw": "0",
                  "start": 67,
                  "end": 68
                },
                "definite": false,
                "start": 62,
                "end": 68
              }
            ],
            "declare": false,
            "start": 56,
            "end": 69
          }
        ],
        "start": 49,
        "end": 71
      },
      "alternate": {
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
                  "name": "c2",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 90,
                  "end": 92
                },
                "init": {
                  "type": "Literal",
                  "value": 0,
                  "raw": "0",
                  "start": 95,
                  "end": 96
                },
                "definite": false,
                "start": 90,
                "end": 96
              }
            ],
            "declare": false,
            "start": 84,
            "end": 97
          }
        ],
        "start": 77,
        "end": 99
      },
      "start": 39,
      "end": 99
    },
    {
      "type": "WhileStatement",
      "test": {
        "type": "Literal",
        "value": true,
        "raw": "true",
        "start": 108,
        "end": 112
      },
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
                  "name": "c3",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 127,
                  "end": 129
                },
                "init": {
                  "type": "Literal",
                  "value": 0,
                  "raw": "0",
                  "start": 132,
                  "end": 133
                },
                "definite": false,
                "start": 127,
                "end": 133
              }
            ],
            "declare": false,
            "start": 121,
            "end": 134
          }
        ],
        "start": 114,
        "end": 136
      },
      "start": 101,
      "end": 136
    },
    {
      "type": "DoWhileStatement",
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
                  "name": "c4",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 154,
                  "end": 156
                },
                "init": {
                  "type": "Literal",
                  "value": 0,
                  "raw": "0",
                  "start": 159,
                  "end": 160
                },
                "definite": false,
                "start": 154,
                "end": 160
              }
            ],
            "declare": false,
            "start": 148,
            "end": 161
          }
        ],
        "start": 141,
        "end": 163
      },
      "test": {
        "type": "Literal",
        "value": true,
        "raw": "true",
        "start": 171,
        "end": 175
      },
      "start": 138,
      "end": 177
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
            "start": 183,
            "end": 186
          },
          "init": null,
          "definite": false,
          "start": 183,
          "end": 186
        }
      ],
      "declare": false,
      "start": 179,
      "end": 187
    },
    {
      "type": "WithStatement",
      "object": {
        "type": "Identifier",
        "decorators": [],
        "name": "obj",
        "optional": false,
        "typeAnnotation": null,
        "start": 194,
        "end": 197
      },
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
                  "name": "c5",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 211,
                  "end": 213
                },
                "init": {
                  "type": "Literal",
                  "value": 0,
                  "raw": "0",
                  "start": 216,
                  "end": 217
                },
                "definite": false,
                "start": 211,
                "end": 217
              }
            ],
            "declare": false,
            "start": 205,
            "end": 218
          }
        ],
        "start": 199,
        "end": 220
      },
      "start": 188,
      "end": 220
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
              "start": 231,
              "end": 232
            },
            "init": {
              "type": "Literal",
              "value": 0,
              "raw": "0",
              "start": 235,
              "end": 236
            },
            "definite": false,
            "start": 231,
            "end": 236
          }
        ],
        "declare": false,
        "start": 227,
        "end": 236
      },
      "test": {
        "type": "BinaryExpression",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "i",
          "optional": false,
          "typeAnnotation": null,
          "start": 238,
          "end": 239
        },
        "operator": "<",
        "right": {
          "type": "Literal",
          "value": 10,
          "raw": "10",
          "start": 242,
          "end": 244
        },
        "start": 238,
        "end": 244
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
          "start": 246,
          "end": 247
        },
        "start": 246,
        "end": 249
      },
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
                  "name": "c6",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 263,
                  "end": 265
                },
                "init": {
                  "type": "Literal",
                  "value": 0,
                  "raw": "0",
                  "start": 268,
                  "end": 269
                },
                "definite": false,
                "start": 263,
                "end": 269
              }
            ],
            "declare": false,
            "start": 257,
            "end": 270
          }
        ],
        "start": 251,
        "end": 272
      },
      "start": 222,
      "end": 272
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
              "start": 283,
              "end": 285
            },
            "init": null,
            "definite": false,
            "start": 283,
            "end": 285
          }
        ],
        "declare": false,
        "start": 279,
        "end": 285
      },
      "right": {
        "type": "ObjectExpression",
        "properties": [],
        "start": 289,
        "end": 291
      },
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
                  "name": "c7",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 305,
                  "end": 307
                },
                "init": {
                  "type": "Literal",
                  "value": 0,
                  "raw": "0",
                  "start": 310,
                  "end": 311
                },
                "definite": false,
                "start": 305,
                "end": 311
              }
            ],
            "declare": false,
            "start": 299,
            "end": 312
          }
        ],
        "start": 293,
        "end": 314
      },
      "start": 274,
      "end": 314
    },
    {
      "type": "IfStatement",
      "test": {
        "type": "Literal",
        "value": true,
        "raw": "true",
        "start": 320,
        "end": 324
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
              "start": 332,
              "end": 337
            },
            "body": {
              "type": "VariableDeclaration",
              "kind": "const",
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "id": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "c8",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 345,
                    "end": 347
                  },
                  "init": {
                    "type": "Literal",
                    "value": 0,
                    "raw": "0",
                    "start": 350,
                    "end": 351
                  },
                  "definite": false,
                  "start": 345,
                  "end": 351
                }
              ],
              "declare": false,
              "start": 339,
              "end": 352
            },
            "start": 332,
            "end": 352
          }
        ],
        "start": 326,
        "end": 354
      },
      "alternate": null,
      "start": 316,
      "end": 354
    },
    {
      "type": "WhileStatement",
      "test": {
        "type": "Literal",
        "value": false,
        "raw": "false",
        "start": 363,
        "end": 368
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
              "start": 376,
              "end": 382
            },
            "body": {
              "type": "LabeledStatement",
              "label": {
                "type": "Identifier",
                "decorators": [],
                "name": "label3",
                "optional": false,
                "typeAnnotation": null,
                "start": 384,
                "end": 390
              },
              "body": {
                "type": "LabeledStatement",
                "label": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "label4",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 392,
                  "end": 398
                },
                "body": {
                  "type": "VariableDeclaration",
                  "kind": "const",
                  "declarations": [
                    {
                      "type": "VariableDeclarator",
                      "id": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "c9",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 406,
                        "end": 408
                      },
                      "init": {
                        "type": "Literal",
                        "value": 0,
                        "raw": "0",
                        "start": 411,
                        "end": 412
                      },
                      "definite": false,
                      "start": 406,
                      "end": 412
                    }
                  ],
                  "declare": false,
                  "start": 400,
                  "end": 413
                },
                "start": 392,
                "end": 413
              },
              "start": 384,
              "end": 413
            },
            "start": 376,
            "end": 413
          }
        ],
        "start": 370,
        "end": 415
      },
      "start": 356,
      "end": 415
    },
    {
      "type": "TryStatement",
      "block": {
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
                  "name": "c10",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 454,
                  "end": 457
                },
                "init": {
                  "type": "Literal",
                  "value": 0,
                  "raw": "0",
                  "start": 460,
                  "end": 461
                },
                "definite": false,
                "start": 454,
                "end": 461
              }
            ],
            "declare": false,
            "start": 448,
            "end": 462
          }
        ],
        "start": 442,
        "end": 464
      },
      "handler": {
        "type": "CatchClause",
        "param": {
          "type": "Identifier",
          "decorators": [],
          "name": "e",
          "optional": false,
          "typeAnnotation": null,
          "start": 472,
          "end": 473
        },
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
                    "name": "c11",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 487,
                    "end": 490
                  },
                  "init": {
                    "type": "Literal",
                    "value": 0,
                    "raw": "0",
                    "start": 493,
                    "end": 494
                  },
                  "definite": false,
                  "start": 487,
                  "end": 494
                }
              ],
              "declare": false,
              "start": 481,
              "end": 495
            }
          ],
          "start": 475,
          "end": 497
        },
        "start": 465,
        "end": 497
      },
      "finalizer": {
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
                  "name": "c12",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 518,
                  "end": 521
                },
                "init": {
                  "type": "Literal",
                  "value": 0,
                  "raw": "0",
                  "start": 524,
                  "end": 525
                },
                "definite": false,
                "start": 518,
                "end": 525
              }
            ],
            "declare": false,
            "start": 512,
            "end": 526
          }
        ],
        "start": 506,
        "end": 528
      },
      "start": 438,
      "end": 528
    },
    {
      "type": "SwitchStatement",
      "discriminant": {
        "type": "Literal",
        "value": 0,
        "raw": "0",
        "start": 548,
        "end": 549
      },
      "cases": [
        {
          "type": "SwitchCase",
          "test": {
            "type": "Literal",
            "value": 0,
            "raw": "0",
            "start": 562,
            "end": 563
          },
          "consequent": [
            {
              "type": "VariableDeclaration",
              "kind": "const",
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "id": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "c13",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 579,
                    "end": 582
                  },
                  "init": {
                    "type": "Literal",
                    "value": 0,
                    "raw": "0",
                    "start": 585,
                    "end": 586
                  },
                  "definite": false,
                  "start": 579,
                  "end": 586
                }
              ],
              "declare": false,
              "start": 573,
              "end": 587
            },
            {
              "type": "BreakStatement",
              "label": null,
              "start": 596,
              "end": 602
            }
          ],
          "start": 557,
          "end": 602
        },
        {
          "type": "SwitchCase",
          "test": null,
          "consequent": [
            {
              "type": "VariableDeclaration",
              "kind": "const",
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "id": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "c14",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 630,
                    "end": 633
                  },
                  "init": {
                    "type": "Literal",
                    "value": 0,
                    "raw": "0",
                    "start": 636,
                    "end": 637
                  },
                  "definite": false,
                  "start": 630,
                  "end": 637
                }
              ],
              "declare": false,
              "start": 624,
              "end": 638
            },
            {
              "type": "BreakStatement",
              "label": null,
              "start": 647,
              "end": 653
            }
          ],
          "start": 607,
          "end": 653
        }
      ],
      "start": 540,
      "end": 655
    },
    {
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
                "name": "c15",
                "optional": false,
                "typeAnnotation": null,
                "start": 679,
                "end": 682
              },
              "init": {
                "type": "Literal",
                "value": 0,
                "raw": "0",
                "start": 685,
                "end": 686
              },
              "definite": false,
              "start": 679,
              "end": 686
            }
          ],
          "declare": false,
          "start": 673,
          "end": 687
        },
        {
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
                    "name": "c16",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 708,
                    "end": 711
                  },
                  "init": {
                    "type": "Literal",
                    "value": 0,
                    "raw": "0",
                    "start": 714,
                    "end": 715
                  },
                  "definite": false,
                  "start": 708,
                  "end": 715
                }
              ],
              "declare": false,
              "start": 702,
              "end": 715
            },
            {
              "type": "LabeledStatement",
              "label": {
                "type": "Identifier",
                "decorators": [],
                "name": "label17",
                "optional": false,
                "typeAnnotation": null,
                "start": 724,
                "end": 731
              },
              "body": {
                "type": "VariableDeclaration",
                "kind": "const",
                "declarations": [
                  {
                    "type": "VariableDeclarator",
                    "id": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "c17",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 739,
                      "end": 742
                    },
                    "init": {
                      "type": "Literal",
                      "value": 0,
                      "raw": "0",
                      "start": 745,
                      "end": 746
                    },
                    "definite": false,
                    "start": 739,
                    "end": 746
                  }
                ],
                "declare": false,
                "start": 733,
                "end": 747
              },
              "start": 724,
              "end": 747
            }
          ],
          "start": 692,
          "end": 753
        }
      ],
      "start": 667,
      "end": 755
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
            "name": "c18",
            "optional": false,
            "typeAnnotation": null,
            "start": 773,
            "end": 776
          },
          "init": {
            "type": "Literal",
            "value": 0,
            "raw": "0",
            "start": 779,
            "end": 780
          },
          "definite": false,
          "start": 773,
          "end": 780
        }
      ],
      "declare": false,
      "start": 767,
      "end": 781
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "F",
        "optional": false,
        "typeAnnotation": null,
        "start": 805,
        "end": 806
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
                  "name": "c19",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 821,
                  "end": 824
                },
                "init": {
                  "type": "Literal",
                  "value": 0,
                  "raw": "0",
                  "start": 827,
                  "end": 828
                },
                "definite": false,
                "start": 821,
                "end": 828
              }
            ],
            "declare": false,
            "start": 815,
            "end": 829
          }
        ],
        "start": 809,
        "end": 831
      },
      "expression": false,
      "start": 796,
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
            "name": "F2",
            "optional": false,
            "typeAnnotation": null,
            "start": 837,
            "end": 839
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
                        "name": "c20",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 860,
                        "end": 863
                      },
                      "init": {
                        "type": "Literal",
                        "value": 0,
                        "raw": "0",
                        "start": 866,
                        "end": 867
                      },
                      "definite": false,
                      "start": 860,
                      "end": 867
                    }
                  ],
                  "declare": false,
                  "start": 854,
                  "end": 868
                }
              ],
              "start": 848,
              "end": 870
            },
            "id": null,
            "generator": false,
            "start": 842,
            "end": 870
          },
          "definite": false,
          "start": 837,
          "end": 870
        }
      ],
      "declare": false,
      "start": 833,
      "end": 871
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
            "start": 877,
            "end": 879
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
                  "kind": "const",
                  "declarations": [
                    {
                      "type": "VariableDeclarator",
                      "id": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "c21",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 906,
                        "end": 909
                      },
                      "init": {
                        "type": "Literal",
                        "value": 0,
                        "raw": "0",
                        "start": 912,
                        "end": 913
                      },
                      "definite": false,
                      "start": 906,
                      "end": 913
                    }
                  ],
                  "declare": false,
                  "start": 900,
                  "end": 914
                }
              ],
              "start": 894,
              "end": 916
            },
            "expression": false,
            "start": 882,
            "end": 916
          },
          "definite": false,
          "start": 877,
          "end": 916
        }
      ],
      "declare": false,
      "start": 873,
      "end": 917
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "m",
        "optional": false,
        "typeAnnotation": null,
        "start": 940,
        "end": 941
      },
      "body": {
        "type": "TSModuleBlock",
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
                  "name": "c22",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 954,
                  "end": 957
                },
                "init": {
                  "type": "Literal",
                  "value": 0,
                  "raw": "0",
                  "start": 960,
                  "end": 961
                },
                "definite": false,
                "start": 954,
                "end": 961
              }
            ],
            "declare": false,
            "start": 948,
            "end": 962
          },
          {
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
                      "name": "c23",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 986,
                      "end": 989
                    },
                    "init": {
                      "type": "Literal",
                      "value": 0,
                      "raw": "0",
                      "start": 992,
                      "end": 993
                    },
                    "definite": false,
                    "start": 986,
                    "end": 993
                  }
                ],
                "declare": false,
                "start": 980,
                "end": 994
              }
            ],
            "start": 968,
            "end": 1000
          }
        ],
        "start": 942,
        "end": 1002
      },
      "kind": "namespace",
      "declare": false,
      "global": false,
      "start": 930,
      "end": 1002
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
        "start": 1021,
        "end": 1022
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
              "start": 1029,
              "end": 1040
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
                    "kind": "const",
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "id": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "c24",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1059,
                          "end": 1062
                        },
                        "init": {
                          "type": "Literal",
                          "value": 0,
                          "raw": "0",
                          "start": 1065,
                          "end": 1066
                        },
                        "definite": false,
                        "start": 1059,
                        "end": 1066
                      }
                    ],
                    "declare": false,
                    "start": 1053,
                    "end": 1067
                  }
                ],
                "start": 1043,
                "end": 1073
              },
              "expression": false,
              "start": 1040,
              "end": 1073
            },
            "kind": "constructor",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 1029,
            "end": 1073
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
              "start": 1079,
              "end": 1085
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
                    "kind": "const",
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "id": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "c25",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1104,
                          "end": 1107
                        },
                        "init": {
                          "type": "Literal",
                          "value": 0,
                          "raw": "0",
                          "start": 1110,
                          "end": 1111
                        },
                        "definite": false,
                        "start": 1104,
                        "end": 1111
                      }
                    ],
                    "declare": false,
                    "start": 1098,
                    "end": 1112
                  }
                ],
                "start": 1088,
                "end": 1118
              },
              "expression": false,
              "start": 1085,
              "end": 1118
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 1079,
            "end": 1118
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
              "start": 1128,
              "end": 1129
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
                    "kind": "const",
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "id": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "c26",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1148,
                          "end": 1151
                        },
                        "init": {
                          "type": "Literal",
                          "value": 0,
                          "raw": "0",
                          "start": 1154,
                          "end": 1155
                        },
                        "definite": false,
                        "start": 1148,
                        "end": 1155
                      }
                    ],
                    "declare": false,
                    "start": 1142,
                    "end": 1156
                  },
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "c26",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1172,
                      "end": 1175
                    },
                    "start": 1165,
                    "end": 1176
                  }
                ],
                "start": 1132,
                "end": 1183
              },
              "expression": false,
              "start": 1129,
              "end": 1183
            },
            "kind": "get",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 1124,
            "end": 1183
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
              "start": 1193,
              "end": 1194
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
                  "start": 1195,
                  "end": 1200
                }
              ],
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
                          "name": "c27",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1218,
                          "end": 1221
                        },
                        "init": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "value",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1224,
                          "end": 1229
                        },
                        "definite": false,
                        "start": 1218,
                        "end": 1229
                      }
                    ],
                    "declare": false,
                    "start": 1212,
                    "end": 1230
                  }
                ],
                "start": 1202,
                "end": 1236
              },
              "expression": false,
              "start": 1194,
              "end": 1236
            },
            "kind": "set",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 1189,
            "end": 1236
          }
        ],
        "start": 1023,
        "end": 1238
      },
      "abstract": false,
      "declare": false,
      "start": 1015,
      "end": 1238
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
            "start": 1263,
            "end": 1264
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
                  "start": 1273,
                  "end": 1274
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
                        "kind": "const",
                        "declarations": [
                          {
                            "type": "VariableDeclarator",
                            "id": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "c28",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 1293,
                              "end": 1296
                            },
                            "init": {
                              "type": "Literal",
                              "value": 0,
                              "raw": "0",
                              "start": 1299,
                              "end": 1300
                            },
                            "definite": false,
                            "start": 1293,
                            "end": 1300
                          }
                        ],
                        "declare": false,
                        "start": 1287,
                        "end": 1301
                      }
                    ],
                    "start": 1277,
                    "end": 1307
                  },
                  "expression": false,
                  "start": 1274,
                  "end": 1307
                },
                "method": true,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 1273,
                "end": 1307
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
                  "start": 1313,
                  "end": 1315
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
                        "kind": "const",
                        "declarations": [
                          {
                            "type": "VariableDeclarator",
                            "id": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "c29",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 1339,
                              "end": 1342
                            },
                            "init": {
                              "type": "Literal",
                              "value": 0,
                              "raw": "0",
                              "start": 1345,
                              "end": 1346
                            },
                            "definite": false,
                            "start": 1339,
                            "end": 1346
                          }
                        ],
                        "declare": false,
                        "start": 1333,
                        "end": 1347
                      }
                    ],
                    "start": 1323,
                    "end": 1353
                  },
                  "id": null,
                  "generator": false,
                  "start": 1317,
                  "end": 1353
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 1313,
                "end": 1353
              }
            ],
            "start": 1267,
            "end": 1355
          },
          "definite": false,
          "start": 1263,
          "end": 1355
        }
      ],
      "declare": false,
      "start": 1259,
      "end": 1355
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 39,
  "end": 1355
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
    "value": "const",
    "start": 56,
    "end": 61
  },
  {
    "type": "Identifier",
    "value": "c1",
    "start": 62,
    "end": 64
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 65,
    "end": 66
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 67,
    "end": 68
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 68,
    "end": 69
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 70,
    "end": 71
  },
  {
    "type": "Keyword",
    "value": "else",
    "start": 72,
    "end": 76
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 77,
    "end": 78
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 84,
    "end": 89
  },
  {
    "type": "Identifier",
    "value": "c2",
    "start": 90,
    "end": 92
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 93,
    "end": 94
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 95,
    "end": 96
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 96,
    "end": 97
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 98,
    "end": 99
  },
  {
    "type": "Keyword",
    "value": "while",
    "start": 101,
    "end": 106
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 107,
    "end": 108
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 108,
    "end": 112
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 112,
    "end": 113
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 114,
    "end": 115
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 121,
    "end": 126
  },
  {
    "type": "Identifier",
    "value": "c3",
    "start": 127,
    "end": 129
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 130,
    "end": 131
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 132,
    "end": 133
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 133,
    "end": 134
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 135,
    "end": 136
  },
  {
    "type": "Keyword",
    "value": "do",
    "start": 138,
    "end": 140
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 141,
    "end": 142
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 148,
    "end": 153
  },
  {
    "type": "Identifier",
    "value": "c4",
    "start": 154,
    "end": 156
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 157,
    "end": 158
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 159,
    "end": 160
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 160,
    "end": 161
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 162,
    "end": 163
  },
  {
    "type": "Keyword",
    "value": "while",
    "start": 164,
    "end": 169
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 170,
    "end": 171
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 171,
    "end": 175
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 175,
    "end": 176
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 176,
    "end": 177
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 179,
    "end": 182
  },
  {
    "type": "Identifier",
    "value": "obj",
    "start": 183,
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
    "value": "with",
    "start": 188,
    "end": 192
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 193,
    "end": 194
  },
  {
    "type": "Identifier",
    "value": "obj",
    "start": 194,
    "end": 197
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 197,
    "end": 198
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 199,
    "end": 200
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 205,
    "end": 210
  },
  {
    "type": "Identifier",
    "value": "c5",
    "start": 211,
    "end": 213
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 214,
    "end": 215
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 216,
    "end": 217
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 217,
    "end": 218
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 219,
    "end": 220
  },
  {
    "type": "Keyword",
    "value": "for",
    "start": 222,
    "end": 225
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 226,
    "end": 227
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 227,
    "end": 230
  },
  {
    "type": "Identifier",
    "value": "i",
    "start": 231,
    "end": 232
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 233,
    "end": 234
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 235,
    "end": 236
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 236,
    "end": 237
  },
  {
    "type": "Identifier",
    "value": "i",
    "start": 238,
    "end": 239
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 240,
    "end": 241
  },
  {
    "type": "Numeric",
    "value": "10",
    "start": 242,
    "end": 244
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 244,
    "end": 245
  },
  {
    "type": "Identifier",
    "value": "i",
    "start": 246,
    "end": 247
  },
  {
    "type": "Punctuator",
    "value": "++",
    "start": 247,
    "end": 249
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 249,
    "end": 250
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 251,
    "end": 252
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 257,
    "end": 262
  },
  {
    "type": "Identifier",
    "value": "c6",
    "start": 263,
    "end": 265
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 266,
    "end": 267
  },
  {
    "type": "Numeric",
    "value": "0",
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
    "type": "Punctuator",
    "value": "}",
    "start": 271,
    "end": 272
  },
  {
    "type": "Keyword",
    "value": "for",
    "start": 274,
    "end": 277
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 278,
    "end": 279
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 279,
    "end": 282
  },
  {
    "type": "Identifier",
    "value": "i2",
    "start": 283,
    "end": 285
  },
  {
    "type": "Keyword",
    "value": "in",
    "start": 286,
    "end": 288
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 289,
    "end": 290
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 290,
    "end": 291
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 291,
    "end": 292
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 293,
    "end": 294
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 299,
    "end": 304
  },
  {
    "type": "Identifier",
    "value": "c7",
    "start": 305,
    "end": 307
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 308,
    "end": 309
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 310,
    "end": 311
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 311,
    "end": 312
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 313,
    "end": 314
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 316,
    "end": 318
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 319,
    "end": 320
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 320,
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
    "value": "{",
    "start": 326,
    "end": 327
  },
  {
    "type": "Identifier",
    "value": "label",
    "start": 332,
    "end": 337
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 337,
    "end": 338
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 339,
    "end": 344
  },
  {
    "type": "Identifier",
    "value": "c8",
    "start": 345,
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
    "value": "0",
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
    "type": "Punctuator",
    "value": "}",
    "start": 353,
    "end": 354
  },
  {
    "type": "Keyword",
    "value": "while",
    "start": 356,
    "end": 361
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 362,
    "end": 363
  },
  {
    "type": "Boolean",
    "value": "false",
    "start": 363,
    "end": 368
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 368,
    "end": 369
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 370,
    "end": 371
  },
  {
    "type": "Identifier",
    "value": "label2",
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
    "type": "Identifier",
    "value": "label3",
    "start": 384,
    "end": 390
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 390,
    "end": 391
  },
  {
    "type": "Identifier",
    "value": "label4",
    "start": 392,
    "end": 398
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 398,
    "end": 399
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 400,
    "end": 405
  },
  {
    "type": "Identifier",
    "value": "c9",
    "start": 406,
    "end": 408
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 409,
    "end": 410
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 411,
    "end": 412
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 412,
    "end": 413
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 414,
    "end": 415
  },
  {
    "type": "Keyword",
    "value": "try",
    "start": 438,
    "end": 441
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 442,
    "end": 443
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 448,
    "end": 453
  },
  {
    "type": "Identifier",
    "value": "c10",
    "start": 454,
    "end": 457
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 458,
    "end": 459
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 460,
    "end": 461
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 461,
    "end": 462
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 463,
    "end": 464
  },
  {
    "type": "Keyword",
    "value": "catch",
    "start": 465,
    "end": 470
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 471,
    "end": 472
  },
  {
    "type": "Identifier",
    "value": "e",
    "start": 472,
    "end": 473
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 473,
    "end": 474
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 475,
    "end": 476
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 481,
    "end": 486
  },
  {
    "type": "Identifier",
    "value": "c11",
    "start": 487,
    "end": 490
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 491,
    "end": 492
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 493,
    "end": 494
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 494,
    "end": 495
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 496,
    "end": 497
  },
  {
    "type": "Keyword",
    "value": "finally",
    "start": 498,
    "end": 505
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 506,
    "end": 507
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 512,
    "end": 517
  },
  {
    "type": "Identifier",
    "value": "c12",
    "start": 518,
    "end": 521
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 522,
    "end": 523
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 524,
    "end": 525
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 525,
    "end": 526
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 527,
    "end": 528
  },
  {
    "type": "Keyword",
    "value": "switch",
    "start": 540,
    "end": 546
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 547,
    "end": 548
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 548,
    "end": 549
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 549,
    "end": 550
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 551,
    "end": 552
  },
  {
    "type": "Keyword",
    "value": "case",
    "start": 557,
    "end": 561
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 562,
    "end": 563
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 563,
    "end": 564
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 573,
    "end": 578
  },
  {
    "type": "Identifier",
    "value": "c13",
    "start": 579,
    "end": 582
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 583,
    "end": 584
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 585,
    "end": 586
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 586,
    "end": 587
  },
  {
    "type": "Keyword",
    "value": "break",
    "start": 596,
    "end": 601
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 601,
    "end": 602
  },
  {
    "type": "Keyword",
    "value": "default",
    "start": 607,
    "end": 614
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 614,
    "end": 615
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 624,
    "end": 629
  },
  {
    "type": "Identifier",
    "value": "c14",
    "start": 630,
    "end": 633
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 634,
    "end": 635
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 636,
    "end": 637
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 637,
    "end": 638
  },
  {
    "type": "Keyword",
    "value": "break",
    "start": 647,
    "end": 652
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 652,
    "end": 653
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 654,
    "end": 655
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 667,
    "end": 668
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 673,
    "end": 678
  },
  {
    "type": "Identifier",
    "value": "c15",
    "start": 679,
    "end": 682
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 683,
    "end": 684
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 685,
    "end": 686
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 686,
    "end": 687
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 692,
    "end": 693
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 702,
    "end": 707
  },
  {
    "type": "Identifier",
    "value": "c16",
    "start": 708,
    "end": 711
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 712,
    "end": 713
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 714,
    "end": 715
  },
  {
    "type": "Identifier",
    "value": "label17",
    "start": 724,
    "end": 731
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 731,
    "end": 732
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 733,
    "end": 738
  },
  {
    "type": "Identifier",
    "value": "c17",
    "start": 739,
    "end": 742
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 743,
    "end": 744
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 745,
    "end": 746
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 746,
    "end": 747
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 752,
    "end": 753
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 754,
    "end": 755
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 767,
    "end": 772
  },
  {
    "type": "Identifier",
    "value": "c18",
    "start": 773,
    "end": 776
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 777,
    "end": 778
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 779,
    "end": 780
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 780,
    "end": 781
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 796,
    "end": 804
  },
  {
    "type": "Identifier",
    "value": "F",
    "start": 805,
    "end": 806
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 806,
    "end": 807
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 807,
    "end": 808
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 809,
    "end": 810
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 815,
    "end": 820
  },
  {
    "type": "Identifier",
    "value": "c19",
    "start": 821,
    "end": 824
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 825,
    "end": 826
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 827,
    "end": 828
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 828,
    "end": 829
  },
  {
    "type": "Punctuator",
    "value": "}",
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
    "value": "F2",
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
    "type": "Punctuator",
    "value": "(",
    "start": 842,
    "end": 843
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 843,
    "end": 844
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 845,
    "end": 847
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 848,
    "end": 849
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 854,
    "end": 859
  },
  {
    "type": "Identifier",
    "value": "c20",
    "start": 860,
    "end": 863
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 864,
    "end": 865
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 866,
    "end": 867
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 867,
    "end": 868
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 869,
    "end": 870
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 870,
    "end": 871
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 873,
    "end": 876
  },
  {
    "type": "Identifier",
    "value": "F3",
    "start": 877,
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
    "value": "function",
    "start": 882,
    "end": 890
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 891,
    "end": 892
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 892,
    "end": 893
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 894,
    "end": 895
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 900,
    "end": 905
  },
  {
    "type": "Identifier",
    "value": "c21",
    "start": 906,
    "end": 909
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 910,
    "end": 911
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 912,
    "end": 913
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 913,
    "end": 914
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 915,
    "end": 916
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 916,
    "end": 917
  },
  {
    "type": "Identifier",
    "value": "namespace",
    "start": 930,
    "end": 939
  },
  {
    "type": "Identifier",
    "value": "m",
    "start": 940,
    "end": 941
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 942,
    "end": 943
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 948,
    "end": 953
  },
  {
    "type": "Identifier",
    "value": "c22",
    "start": 954,
    "end": 957
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 958,
    "end": 959
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 960,
    "end": 961
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 961,
    "end": 962
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 968,
    "end": 969
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 980,
    "end": 985
  },
  {
    "type": "Identifier",
    "value": "c23",
    "start": 986,
    "end": 989
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 990,
    "end": 991
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 992,
    "end": 993
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 993,
    "end": 994
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 999,
    "end": 1000
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1001,
    "end": 1002
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 1015,
    "end": 1020
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 1021,
    "end": 1022
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1023,
    "end": 1024
  },
  {
    "type": "Identifier",
    "value": "constructor",
    "start": 1029,
    "end": 1040
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1040,
    "end": 1041
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1041,
    "end": 1042
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1043,
    "end": 1044
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 1053,
    "end": 1058
  },
  {
    "type": "Identifier",
    "value": "c24",
    "start": 1059,
    "end": 1062
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1063,
    "end": 1064
  },
  {
    "type": "Numeric",
    "value": "0",
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
    "type": "Punctuator",
    "value": "}",
    "start": 1072,
    "end": 1073
  },
  {
    "type": "Identifier",
    "value": "method",
    "start": 1079,
    "end": 1085
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1085,
    "end": 1086
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1086,
    "end": 1087
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1088,
    "end": 1089
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 1098,
    "end": 1103
  },
  {
    "type": "Identifier",
    "value": "c25",
    "start": 1104,
    "end": 1107
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1108,
    "end": 1109
  },
  {
    "type": "Numeric",
    "value": "0",
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
    "start": 1117,
    "end": 1118
  },
  {
    "type": "Identifier",
    "value": "get",
    "start": 1124,
    "end": 1127
  },
  {
    "type": "Identifier",
    "value": "v",
    "start": 1128,
    "end": 1129
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1129,
    "end": 1130
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1130,
    "end": 1131
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1132,
    "end": 1133
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 1142,
    "end": 1147
  },
  {
    "type": "Identifier",
    "value": "c26",
    "start": 1148,
    "end": 1151
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1152,
    "end": 1153
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 1154,
    "end": 1155
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1155,
    "end": 1156
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 1165,
    "end": 1171
  },
  {
    "type": "Identifier",
    "value": "c26",
    "start": 1172,
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
    "start": 1182,
    "end": 1183
  },
  {
    "type": "Identifier",
    "value": "set",
    "start": 1189,
    "end": 1192
  },
  {
    "type": "Identifier",
    "value": "v",
    "start": 1193,
    "end": 1194
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1194,
    "end": 1195
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 1195,
    "end": 1200
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1200,
    "end": 1201
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1202,
    "end": 1203
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 1212,
    "end": 1217
  },
  {
    "type": "Identifier",
    "value": "c27",
    "start": 1218,
    "end": 1221
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1222,
    "end": 1223
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 1224,
    "end": 1229
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1229,
    "end": 1230
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
    "type": "Keyword",
    "value": "var",
    "start": 1259,
    "end": 1262
  },
  {
    "type": "Identifier",
    "value": "o",
    "start": 1263,
    "end": 1264
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1265,
    "end": 1266
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1267,
    "end": 1268
  },
  {
    "type": "Identifier",
    "value": "f",
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
    "type": "Keyword",
    "value": "const",
    "start": 1287,
    "end": 1292
  },
  {
    "type": "Identifier",
    "value": "c28",
    "start": 1293,
    "end": 1296
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1297,
    "end": 1298
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 1299,
    "end": 1300
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1300,
    "end": 1301
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1306,
    "end": 1307
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1307,
    "end": 1308
  },
  {
    "type": "Identifier",
    "value": "f2",
    "start": 1313,
    "end": 1315
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1315,
    "end": 1316
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1317,
    "end": 1318
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1318,
    "end": 1319
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1320,
    "end": 1322
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1323,
    "end": 1324
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 1333,
    "end": 1338
  },
  {
    "type": "Identifier",
    "value": "c29",
    "start": 1339,
    "end": 1342
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1343,
    "end": 1344
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 1345,
    "end": 1346
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1346,
    "end": 1347
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1352,
    "end": 1353
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1354,
    "end": 1355
  }
]
```
