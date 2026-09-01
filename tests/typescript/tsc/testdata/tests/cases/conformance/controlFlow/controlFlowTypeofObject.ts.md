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
        "name": "obj",
        "optional": false,
        "typeAnnotation": null,
        "start": 17,
        "end": 20
      },
      "generator": false,
      "async": false,
      "declare": true,
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
              "type": "TSObjectKeyword",
              "start": 24,
              "end": 30
            },
            "start": 22,
            "end": 30
          },
          "start": 21,
          "end": 30
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSVoidKeyword",
          "start": 33,
          "end": 37
        },
        "start": 31,
        "end": 37
      },
      "body": null,
      "expression": false,
      "start": 0,
      "end": 38
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f1",
        "optional": false,
        "typeAnnotation": null,
        "start": 49,
        "end": 51
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
              "type": "TSUnknownKeyword",
              "start": 55,
              "end": 62
            },
            "start": 53,
            "end": 62
          },
          "start": 52,
          "end": 62
        }
      ],
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
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 75,
                "end": 76
              },
              "prefix": true,
              "start": 74,
              "end": 76
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ReturnStatement",
                  "argument": null,
                  "start": 88,
                  "end": 95
                }
              ],
              "start": 78,
              "end": 101
            },
            "alternate": null,
            "start": 70,
            "end": 101
          },
          {
            "type": "IfStatement",
            "test": {
              "type": "BinaryExpression",
              "left": {
                "type": "UnaryExpression",
                "operator": "typeof",
                "argument": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 117,
                  "end": 118
                },
                "prefix": true,
                "start": 110,
                "end": 118
              },
              "operator": "===",
              "right": {
                "type": "Literal",
                "value": "object",
                "raw": "'object'",
                "start": 123,
                "end": 131
              },
              "start": 110,
              "end": 131
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "CallExpression",
                    "callee": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "obj",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 143,
                      "end": 146
                    },
                    "typeArguments": null,
                    "arguments": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 147,
                        "end": 148
                      }
                    ],
                    "optional": false,
                    "start": 143,
                    "end": 149
                  },
                  "directive": null,
                  "start": 143,
                  "end": 150
                }
              ],
              "start": 133,
              "end": 156
            },
            "alternate": null,
            "start": 106,
            "end": 156
          }
        ],
        "start": 64,
        "end": 158
      },
      "expression": false,
      "start": 40,
      "end": 158
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f2",
        "optional": false,
        "typeAnnotation": null,
        "start": 169,
        "end": 171
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
              "type": "TSUnknownKeyword",
              "start": 175,
              "end": 182
            },
            "start": 173,
            "end": 182
          },
          "start": 172,
          "end": 182
        }
      ],
      "returnType": null,
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
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 194,
                "end": 195
              },
              "operator": "===",
              "right": {
                "type": "Literal",
                "value": null,
                "raw": "null",
                "start": 200,
                "end": 204
              },
              "start": 194,
              "end": 204
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ReturnStatement",
                  "argument": null,
                  "start": 216,
                  "end": 223
                }
              ],
              "start": 206,
              "end": 229
            },
            "alternate": null,
            "start": 190,
            "end": 229
          },
          {
            "type": "IfStatement",
            "test": {
              "type": "BinaryExpression",
              "left": {
                "type": "UnaryExpression",
                "operator": "typeof",
                "argument": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 245,
                  "end": 246
                },
                "prefix": true,
                "start": 238,
                "end": 246
              },
              "operator": "===",
              "right": {
                "type": "Literal",
                "value": "object",
                "raw": "'object'",
                "start": 251,
                "end": 259
              },
              "start": 238,
              "end": 259
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "CallExpression",
                    "callee": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "obj",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 271,
                      "end": 274
                    },
                    "typeArguments": null,
                    "arguments": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 275,
                        "end": 276
                      }
                    ],
                    "optional": false,
                    "start": 271,
                    "end": 277
                  },
                  "directive": null,
                  "start": 271,
                  "end": 278
                }
              ],
              "start": 261,
              "end": 284
            },
            "alternate": null,
            "start": 234,
            "end": 284
          }
        ],
        "start": 184,
        "end": 286
      },
      "expression": false,
      "start": 160,
      "end": 286
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f3",
        "optional": false,
        "typeAnnotation": null,
        "start": 297,
        "end": 299
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
              "type": "TSUnknownKeyword",
              "start": 303,
              "end": 310
            },
            "start": 301,
            "end": 310
          },
          "start": 300,
          "end": 310
        }
      ],
      "returnType": null,
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
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 322,
                "end": 323
              },
              "operator": "==",
              "right": {
                "type": "Literal",
                "value": null,
                "raw": "null",
                "start": 327,
                "end": 331
              },
              "start": 322,
              "end": 331
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ReturnStatement",
                  "argument": null,
                  "start": 343,
                  "end": 350
                }
              ],
              "start": 333,
              "end": 356
            },
            "alternate": null,
            "start": 318,
            "end": 356
          },
          {
            "type": "IfStatement",
            "test": {
              "type": "BinaryExpression",
              "left": {
                "type": "UnaryExpression",
                "operator": "typeof",
                "argument": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 372,
                  "end": 373
                },
                "prefix": true,
                "start": 365,
                "end": 373
              },
              "operator": "===",
              "right": {
                "type": "Literal",
                "value": "object",
                "raw": "'object'",
                "start": 378,
                "end": 386
              },
              "start": 365,
              "end": 386
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "CallExpression",
                    "callee": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "obj",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 398,
                      "end": 401
                    },
                    "typeArguments": null,
                    "arguments": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 402,
                        "end": 403
                      }
                    ],
                    "optional": false,
                    "start": 398,
                    "end": 404
                  },
                  "directive": null,
                  "start": 398,
                  "end": 405
                }
              ],
              "start": 388,
              "end": 411
            },
            "alternate": null,
            "start": 361,
            "end": 411
          }
        ],
        "start": 312,
        "end": 413
      },
      "expression": false,
      "start": 288,
      "end": 413
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f4",
        "optional": false,
        "typeAnnotation": null,
        "start": 424,
        "end": 426
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
              "type": "TSUnknownKeyword",
              "start": 430,
              "end": 437
            },
            "start": 428,
            "end": 437
          },
          "start": 427,
          "end": 437
        }
      ],
      "returnType": null,
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
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 449,
                "end": 450
              },
              "operator": "==",
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "undefined",
                "optional": false,
                "typeAnnotation": null,
                "start": 454,
                "end": 463
              },
              "start": 449,
              "end": 463
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ReturnStatement",
                  "argument": null,
                  "start": 475,
                  "end": 482
                }
              ],
              "start": 465,
              "end": 488
            },
            "alternate": null,
            "start": 445,
            "end": 488
          },
          {
            "type": "IfStatement",
            "test": {
              "type": "BinaryExpression",
              "left": {
                "type": "UnaryExpression",
                "operator": "typeof",
                "argument": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 504,
                  "end": 505
                },
                "prefix": true,
                "start": 497,
                "end": 505
              },
              "operator": "===",
              "right": {
                "type": "Literal",
                "value": "object",
                "raw": "'object'",
                "start": 510,
                "end": 518
              },
              "start": 497,
              "end": 518
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "CallExpression",
                    "callee": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "obj",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 530,
                      "end": 533
                    },
                    "typeArguments": null,
                    "arguments": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 534,
                        "end": 535
                      }
                    ],
                    "optional": false,
                    "start": 530,
                    "end": 536
                  },
                  "directive": null,
                  "start": 530,
                  "end": 537
                }
              ],
              "start": 520,
              "end": 543
            },
            "alternate": null,
            "start": 493,
            "end": 543
          }
        ],
        "start": 439,
        "end": 545
      },
      "expression": false,
      "start": 415,
      "end": 545
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f5",
        "optional": false,
        "typeAnnotation": null,
        "start": 556,
        "end": 558
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
              "type": "TSUnknownKeyword",
              "start": 562,
              "end": 569
            },
            "start": 560,
            "end": 569
          },
          "start": 559,
          "end": 569
        }
      ],
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
                "type": "UnaryExpression",
                "operator": "!",
                "argument": {
                  "type": "Literal",
                  "value": true,
                  "raw": "true",
                  "start": 583,
                  "end": 587
                },
                "prefix": true,
                "start": 582,
                "end": 587
              },
              "prefix": true,
              "start": 581,
              "end": 587
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "IfStatement",
                  "test": {
                    "type": "UnaryExpression",
                    "operator": "!",
                    "argument": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 604,
                      "end": 605
                    },
                    "prefix": true,
                    "start": 603,
                    "end": 605
                  },
                  "consequent": {
                    "type": "BlockStatement",
                    "body": [
                      {
                        "type": "ReturnStatement",
                        "argument": null,
                        "start": 621,
                        "end": 628
                      }
                    ],
                    "start": 607,
                    "end": 638
                  },
                  "alternate": null,
                  "start": 599,
                  "end": 638
                }
              ],
              "start": 589,
              "end": 644
            },
            "alternate": {
              "type": "BlockStatement",
              "body": [
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
                      "start": 668,
                      "end": 669
                    },
                    "operator": "===",
                    "right": {
                      "type": "Literal",
                      "value": null,
                      "raw": "null",
                      "start": 674,
                      "end": 678
                    },
                    "start": 668,
                    "end": 678
                  },
                  "consequent": {
                    "type": "BlockStatement",
                    "body": [
                      {
                        "type": "ReturnStatement",
                        "argument": null,
                        "start": 694,
                        "end": 701
                      }
                    ],
                    "start": 680,
                    "end": 711
                  },
                  "alternate": null,
                  "start": 664,
                  "end": 711
                }
              ],
              "start": 654,
              "end": 717
            },
            "start": 577,
            "end": 717
          },
          {
            "type": "IfStatement",
            "test": {
              "type": "BinaryExpression",
              "left": {
                "type": "UnaryExpression",
                "operator": "typeof",
                "argument": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 733,
                  "end": 734
                },
                "prefix": true,
                "start": 726,
                "end": 734
              },
              "operator": "===",
              "right": {
                "type": "Literal",
                "value": "object",
                "raw": "'object'",
                "start": 739,
                "end": 747
              },
              "start": 726,
              "end": 747
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "CallExpression",
                    "callee": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "obj",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 759,
                      "end": 762
                    },
                    "typeArguments": null,
                    "arguments": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 763,
                        "end": 764
                      }
                    ],
                    "optional": false,
                    "start": 759,
                    "end": 765
                  },
                  "directive": null,
                  "start": 759,
                  "end": 766
                }
              ],
              "start": 749,
              "end": 772
            },
            "alternate": null,
            "start": 722,
            "end": 772
          }
        ],
        "start": 571,
        "end": 774
      },
      "expression": false,
      "start": 547,
      "end": 774
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f6",
        "optional": false,
        "typeAnnotation": null,
        "start": 785,
        "end": 787
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
              "type": "TSUnknownKeyword",
              "start": 791,
              "end": 798
            },
            "start": 789,
            "end": 798
          },
          "start": 788,
          "end": 798
        }
      ],
      "returnType": null,
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
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 810,
                "end": 811
              },
              "operator": "===",
              "right": {
                "type": "Literal",
                "value": null,
                "raw": "null",
                "start": 816,
                "end": 820
              },
              "start": 810,
              "end": 820
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
                    "start": 832,
                    "end": 833
                  },
                  "directive": null,
                  "start": 832,
                  "end": 834
                }
              ],
              "start": 822,
              "end": 840
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
                    "start": 860,
                    "end": 861
                  },
                  "directive": null,
                  "start": 860,
                  "end": 862
                },
                {
                  "type": "IfStatement",
                  "test": {
                    "type": "BinaryExpression",
                    "left": {
                      "type": "UnaryExpression",
                      "operator": "typeof",
                      "argument": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 882,
                        "end": 883
                      },
                      "prefix": true,
                      "start": 875,
                      "end": 883
                    },
                    "operator": "===",
                    "right": {
                      "type": "Literal",
                      "value": "object",
                      "raw": "'object'",
                      "start": 888,
                      "end": 896
                    },
                    "start": 875,
                    "end": 896
                  },
                  "consequent": {
                    "type": "BlockStatement",
                    "body": [
                      {
                        "type": "ExpressionStatement",
                        "expression": {
                          "type": "CallExpression",
                          "callee": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "obj",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 912,
                            "end": 915
                          },
                          "typeArguments": null,
                          "arguments": [
                            {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "x",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 916,
                              "end": 917
                            }
                          ],
                          "optional": false,
                          "start": 912,
                          "end": 918
                        },
                        "directive": null,
                        "start": 912,
                        "end": 919
                      }
                    ],
                    "start": 898,
                    "end": 929
                  },
                  "alternate": null,
                  "start": 871,
                  "end": 929
                }
              ],
              "start": 850,
              "end": 935
            },
            "start": 806,
            "end": 935
          },
          {
            "type": "IfStatement",
            "test": {
              "type": "BinaryExpression",
              "left": {
                "type": "UnaryExpression",
                "operator": "typeof",
                "argument": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 951,
                  "end": 952
                },
                "prefix": true,
                "start": 944,
                "end": 952
              },
              "operator": "===",
              "right": {
                "type": "Literal",
                "value": "object",
                "raw": "'object'",
                "start": 957,
                "end": 965
              },
              "start": 944,
              "end": 965
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "CallExpression",
                    "callee": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "obj",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 977,
                      "end": 980
                    },
                    "typeArguments": null,
                    "arguments": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 981,
                        "end": 982
                      }
                    ],
                    "optional": false,
                    "start": 977,
                    "end": 983
                  },
                  "directive": null,
                  "start": 977,
                  "end": 984
                }
              ],
              "start": 967,
              "end": 1000
            },
            "alternate": null,
            "start": 940,
            "end": 1000
          }
        ],
        "start": 800,
        "end": 1002
      },
      "expression": false,
      "start": 776,
      "end": 1002
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 1002
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
    "value": "obj",
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
    "type": "Identifier",
    "value": "x",
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
    "value": "object",
    "start": 24,
    "end": 30
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 30,
    "end": 31
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 31,
    "end": 32
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 33,
    "end": 37
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 37,
    "end": 38
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 40,
    "end": 48
  },
  {
    "type": "Identifier",
    "value": "f1",
    "start": 49,
    "end": 51
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 51,
    "end": 52
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 52,
    "end": 53
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 53,
    "end": 54
  },
  {
    "type": "Identifier",
    "value": "unknown",
    "start": 55,
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
    "value": "if",
    "start": 70,
    "end": 72
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 73,
    "end": 74
  },
  {
    "type": "Punctuator",
    "value": "!",
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
    "type": "Punctuator",
    "value": ")",
    "start": 76,
    "end": 77
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 78,
    "end": 79
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 88,
    "end": 94
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 94,
    "end": 95
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 100,
    "end": 101
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 106,
    "end": 108
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 109,
    "end": 110
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 110,
    "end": 116
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 117,
    "end": 118
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 119,
    "end": 122
  },
  {
    "type": "String",
    "value": "'object'",
    "start": 123,
    "end": 131
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 131,
    "end": 132
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 133,
    "end": 134
  },
  {
    "type": "Identifier",
    "value": "obj",
    "start": 143,
    "end": 146
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 146,
    "end": 147
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 147,
    "end": 148
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 148,
    "end": 149
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 149,
    "end": 150
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 155,
    "end": 156
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 157,
    "end": 158
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 160,
    "end": 168
  },
  {
    "type": "Identifier",
    "value": "f2",
    "start": 169,
    "end": 171
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 171,
    "end": 172
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 172,
    "end": 173
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 173,
    "end": 174
  },
  {
    "type": "Identifier",
    "value": "unknown",
    "start": 175,
    "end": 182
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 182,
    "end": 183
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 184,
    "end": 185
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 190,
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
    "value": "x",
    "start": 194,
    "end": 195
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 196,
    "end": 199
  },
  {
    "type": "Null",
    "value": "null",
    "start": 200,
    "end": 204
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 204,
    "end": 205
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 206,
    "end": 207
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 216,
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
    "start": 228,
    "end": 229
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 234,
    "end": 236
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 237,
    "end": 238
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 238,
    "end": 244
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 245,
    "end": 246
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 247,
    "end": 250
  },
  {
    "type": "String",
    "value": "'object'",
    "start": 251,
    "end": 259
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 259,
    "end": 260
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 261,
    "end": 262
  },
  {
    "type": "Identifier",
    "value": "obj",
    "start": 271,
    "end": 274
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 274,
    "end": 275
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 275,
    "end": 276
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 276,
    "end": 277
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 277,
    "end": 278
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 283,
    "end": 284
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 285,
    "end": 286
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 288,
    "end": 296
  },
  {
    "type": "Identifier",
    "value": "f3",
    "start": 297,
    "end": 299
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 299,
    "end": 300
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 300,
    "end": 301
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 301,
    "end": 302
  },
  {
    "type": "Identifier",
    "value": "unknown",
    "start": 303,
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
    "type": "Keyword",
    "value": "if",
    "start": 318,
    "end": 320
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 321,
    "end": 322
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 322,
    "end": 323
  },
  {
    "type": "Punctuator",
    "value": "==",
    "start": 324,
    "end": 326
  },
  {
    "type": "Null",
    "value": "null",
    "start": 327,
    "end": 331
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 331,
    "end": 332
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 333,
    "end": 334
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 343,
    "end": 349
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 349,
    "end": 350
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 355,
    "end": 356
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 361,
    "end": 363
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 364,
    "end": 365
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 365,
    "end": 371
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 372,
    "end": 373
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 374,
    "end": 377
  },
  {
    "type": "String",
    "value": "'object'",
    "start": 378,
    "end": 386
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 386,
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
    "value": "obj",
    "start": 398,
    "end": 401
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 401,
    "end": 402
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 402,
    "end": 403
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 403,
    "end": 404
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 404,
    "end": 405
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 410,
    "end": 411
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 412,
    "end": 413
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 415,
    "end": 423
  },
  {
    "type": "Identifier",
    "value": "f4",
    "start": 424,
    "end": 426
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 426,
    "end": 427
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 427,
    "end": 428
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 428,
    "end": 429
  },
  {
    "type": "Identifier",
    "value": "unknown",
    "start": 430,
    "end": 437
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 437,
    "end": 438
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 439,
    "end": 440
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 445,
    "end": 447
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 448,
    "end": 449
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 449,
    "end": 450
  },
  {
    "type": "Punctuator",
    "value": "==",
    "start": 451,
    "end": 453
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 454,
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
    "type": "Keyword",
    "value": "return",
    "start": 475,
    "end": 481
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 481,
    "end": 482
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 487,
    "end": 488
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 493,
    "end": 495
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 496,
    "end": 497
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 497,
    "end": 503
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 504,
    "end": 505
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 506,
    "end": 509
  },
  {
    "type": "String",
    "value": "'object'",
    "start": 510,
    "end": 518
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 518,
    "end": 519
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 520,
    "end": 521
  },
  {
    "type": "Identifier",
    "value": "obj",
    "start": 530,
    "end": 533
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 533,
    "end": 534
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 534,
    "end": 535
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 535,
    "end": 536
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 536,
    "end": 537
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 542,
    "end": 543
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 544,
    "end": 545
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 547,
    "end": 555
  },
  {
    "type": "Identifier",
    "value": "f5",
    "start": 556,
    "end": 558
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 558,
    "end": 559
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 559,
    "end": 560
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 560,
    "end": 561
  },
  {
    "type": "Identifier",
    "value": "unknown",
    "start": 562,
    "end": 569
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 569,
    "end": 570
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 571,
    "end": 572
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 577,
    "end": 579
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 580,
    "end": 581
  },
  {
    "type": "Punctuator",
    "value": "!",
    "start": 581,
    "end": 582
  },
  {
    "type": "Punctuator",
    "value": "!",
    "start": 582,
    "end": 583
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 583,
    "end": 587
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 587,
    "end": 588
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 589,
    "end": 590
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 599,
    "end": 601
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 602,
    "end": 603
  },
  {
    "type": "Punctuator",
    "value": "!",
    "start": 603,
    "end": 604
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 604,
    "end": 605
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 605,
    "end": 606
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 607,
    "end": 608
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 621,
    "end": 627
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 627,
    "end": 628
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 637,
    "end": 638
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 643,
    "end": 644
  },
  {
    "type": "Keyword",
    "value": "else",
    "start": 649,
    "end": 653
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 654,
    "end": 655
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 664,
    "end": 666
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 667,
    "end": 668
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 668,
    "end": 669
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 670,
    "end": 673
  },
  {
    "type": "Null",
    "value": "null",
    "start": 674,
    "end": 678
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 678,
    "end": 679
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 680,
    "end": 681
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 694,
    "end": 700
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 700,
    "end": 701
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 710,
    "end": 711
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 716,
    "end": 717
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 722,
    "end": 724
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 725,
    "end": 726
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 726,
    "end": 732
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 733,
    "end": 734
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 735,
    "end": 738
  },
  {
    "type": "String",
    "value": "'object'",
    "start": 739,
    "end": 747
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 747,
    "end": 748
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 749,
    "end": 750
  },
  {
    "type": "Identifier",
    "value": "obj",
    "start": 759,
    "end": 762
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 762,
    "end": 763
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 763,
    "end": 764
  },
  {
    "type": "Punctuator",
    "value": ")",
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
    "start": 771,
    "end": 772
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 773,
    "end": 774
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 776,
    "end": 784
  },
  {
    "type": "Identifier",
    "value": "f6",
    "start": 785,
    "end": 787
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 787,
    "end": 788
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 788,
    "end": 789
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 789,
    "end": 790
  },
  {
    "type": "Identifier",
    "value": "unknown",
    "start": 791,
    "end": 798
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 798,
    "end": 799
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 800,
    "end": 801
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 806,
    "end": 808
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 809,
    "end": 810
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 810,
    "end": 811
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 812,
    "end": 815
  },
  {
    "type": "Null",
    "value": "null",
    "start": 816,
    "end": 820
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 820,
    "end": 821
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 822,
    "end": 823
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 832,
    "end": 833
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 833,
    "end": 834
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 839,
    "end": 840
  },
  {
    "type": "Keyword",
    "value": "else",
    "start": 845,
    "end": 849
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 850,
    "end": 851
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 860,
    "end": 861
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 861,
    "end": 862
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 871,
    "end": 873
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 874,
    "end": 875
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 875,
    "end": 881
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 882,
    "end": 883
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 884,
    "end": 887
  },
  {
    "type": "String",
    "value": "'object'",
    "start": 888,
    "end": 896
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 896,
    "end": 897
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 898,
    "end": 899
  },
  {
    "type": "Identifier",
    "value": "obj",
    "start": 912,
    "end": 915
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 915,
    "end": 916
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 916,
    "end": 917
  },
  {
    "type": "Punctuator",
    "value": ")",
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
    "start": 928,
    "end": 929
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 934,
    "end": 935
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 940,
    "end": 942
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 943,
    "end": 944
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 944,
    "end": 950
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 951,
    "end": 952
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 953,
    "end": 956
  },
  {
    "type": "String",
    "value": "'object'",
    "start": 957,
    "end": 965
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 965,
    "end": 966
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 967,
    "end": 968
  },
  {
    "type": "Identifier",
    "value": "obj",
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
    "type": "Identifier",
    "value": "x",
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
    "value": ";",
    "start": 983,
    "end": 984
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
  }
]
```
