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
        "name": "f0",
        "optional": false,
        "typeAnnotation": null,
        "start": 9,
        "end": 11
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
          "typeAnnotation": null,
          "start": 12,
          "end": 13
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSNumberKeyword",
          "start": 16,
          "end": 22
        },
        "start": 14,
        "end": 22
      },
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "WhileStatement",
            "test": {
              "type": "Literal",
              "value": true,
              "raw": "true",
              "start": 36,
              "end": 40
            },
            "body": {
              "type": "EmptyStatement",
              "start": 41,
              "end": 42
            },
            "start": 29,
            "end": 42
          }
        ],
        "start": 23,
        "end": 44
      },
      "expression": false,
      "start": 0,
      "end": 44
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f1",
        "optional": false,
        "typeAnnotation": null,
        "start": 55,
        "end": 57
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
          "typeAnnotation": null,
          "start": 58,
          "end": 59
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSNumberKeyword",
          "start": 62,
          "end": 68
        },
        "start": 60,
        "end": 68
      },
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
              "start": 79,
              "end": 80
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ReturnStatement",
                  "argument": {
                    "type": "Literal",
                    "value": 1,
                    "raw": "1",
                    "start": 99,
                    "end": 100
                  },
                  "start": 92,
                  "end": 100
                }
              ],
              "start": 82,
              "end": 106
            },
            "alternate": null,
            "start": 75,
            "end": 106
          }
        ],
        "start": 69,
        "end": 108
      },
      "expression": false,
      "start": 46,
      "end": 108
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f2",
        "optional": false,
        "typeAnnotation": null,
        "start": 119,
        "end": 121
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
          "typeAnnotation": null,
          "start": 122,
          "end": 123
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSNumberKeyword",
          "start": 126,
          "end": 132
        },
        "start": 124,
        "end": 132
      },
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "WhileStatement",
            "test": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 146,
              "end": 147
            },
            "body": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ThrowStatement",
                  "argument": {
                    "type": "NewExpression",
                    "callee": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Error",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 169,
                      "end": 174
                    },
                    "typeArguments": null,
                    "arguments": [],
                    "start": 165,
                    "end": 176
                  },
                  "start": 159,
                  "end": 177
                }
              ],
              "start": 149,
              "end": 183
            },
            "start": 139,
            "end": 183
          },
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "Literal",
              "value": 1,
              "raw": "1",
              "start": 195,
              "end": 196
            },
            "start": 188,
            "end": 197
          }
        ],
        "start": 133,
        "end": 199
      },
      "expression": false,
      "start": 110,
      "end": 199
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f3",
        "optional": false,
        "typeAnnotation": null,
        "start": 210,
        "end": 212
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
          "typeAnnotation": null,
          "start": 213,
          "end": 214
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSNumberKeyword",
          "start": 217,
          "end": 223
        },
        "start": 215,
        "end": 223
      },
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "WhileStatement",
            "test": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 237,
              "end": 238
            },
            "body": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ThrowStatement",
                  "argument": {
                    "type": "NewExpression",
                    "callee": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Error",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 260,
                      "end": 265
                    },
                    "typeArguments": null,
                    "arguments": [],
                    "start": 256,
                    "end": 267
                  },
                  "start": 250,
                  "end": 268
                }
              ],
              "start": 240,
              "end": 274
            },
            "start": 230,
            "end": 274
          }
        ],
        "start": 224,
        "end": 276
      },
      "expression": false,
      "start": 201,
      "end": 276
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f3_1",
        "optional": false,
        "typeAnnotation": null,
        "start": 287,
        "end": 291
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
          "typeAnnotation": null,
          "start": 293,
          "end": 294
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSNumberKeyword",
          "start": 297,
          "end": 303
        },
        "start": 295,
        "end": 303
      },
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "WhileStatement",
            "test": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 317,
              "end": 318
            },
            "body": {
              "type": "BlockStatement",
              "body": [],
              "start": 320,
              "end": 327
            },
            "start": 310,
            "end": 327
          },
          {
            "type": "ThrowStatement",
            "argument": {
              "type": "NewExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "Error",
                "optional": false,
                "typeAnnotation": null,
                "start": 342,
                "end": 347
              },
              "typeArguments": null,
              "arguments": [],
              "start": 338,
              "end": 349
            },
            "start": 332,
            "end": 350
          }
        ],
        "start": 304,
        "end": 352
      },
      "expression": false,
      "start": 278,
      "end": 352
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f4",
        "optional": false,
        "typeAnnotation": null,
        "start": 363,
        "end": 365
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
          "typeAnnotation": null,
          "start": 366,
          "end": 367
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSNumberKeyword",
          "start": 370,
          "end": 376
        },
        "start": 368,
        "end": 376
      },
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
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 401,
                    "end": 402
                  },
                  "consequent": {
                    "type": "BlockStatement",
                    "body": [
                      {
                        "type": "ReturnStatement",
                        "argument": {
                          "type": "Literal",
                          "value": 1,
                          "raw": "1",
                          "start": 425,
                          "end": 426
                        },
                        "start": 418,
                        "end": 427
                      }
                    ],
                    "start": 404,
                    "end": 437
                  },
                  "alternate": null,
                  "start": 397,
                  "end": 437
                }
              ],
              "start": 387,
              "end": 443
            },
            "handler": {
              "type": "CatchClause",
              "param": {
                "type": "Identifier",
                "decorators": [],
                "name": "e",
                "optional": false,
                "typeAnnotation": null,
                "start": 455,
                "end": 456
              },
              "body": {
                "type": "BlockStatement",
                "body": [],
                "start": 458,
                "end": 465
              },
              "start": 448,
              "end": 465
            },
            "finalizer": null,
            "start": 383,
            "end": 465
          }
        ],
        "start": 377,
        "end": 467
      },
      "expression": false,
      "start": 354,
      "end": 467
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f5",
        "optional": false,
        "typeAnnotation": null,
        "start": 478,
        "end": 480
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
          "typeAnnotation": null,
          "start": 481,
          "end": 482
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSNumberKeyword",
          "start": 485,
          "end": 491
        },
        "start": 483,
        "end": 491
      },
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
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 516,
                    "end": 517
                  },
                  "consequent": {
                    "type": "BlockStatement",
                    "body": [
                      {
                        "type": "ReturnStatement",
                        "argument": {
                          "type": "Literal",
                          "value": 1,
                          "raw": "1",
                          "start": 540,
                          "end": 541
                        },
                        "start": 533,
                        "end": 542
                      }
                    ],
                    "start": 519,
                    "end": 552
                  },
                  "alternate": null,
                  "start": 512,
                  "end": 552
                }
              ],
              "start": 502,
              "end": 558
            },
            "handler": {
              "type": "CatchClause",
              "param": {
                "type": "Identifier",
                "decorators": [],
                "name": "e",
                "optional": false,
                "typeAnnotation": null,
                "start": 570,
                "end": 571
              },
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "Literal",
                      "value": 2,
                      "raw": "2",
                      "start": 590,
                      "end": 591
                    },
                    "start": 583,
                    "end": 592
                  }
                ],
                "start": 573,
                "end": 598
              },
              "start": 563,
              "end": 598
            },
            "finalizer": null,
            "start": 498,
            "end": 598
          }
        ],
        "start": 492,
        "end": 600
      },
      "expression": false,
      "start": 469,
      "end": 600
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f6",
        "optional": false,
        "typeAnnotation": null,
        "start": 611,
        "end": 613
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
          "typeAnnotation": null,
          "start": 614,
          "end": 615
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSNumberKeyword",
          "start": 618,
          "end": 624
        },
        "start": 616,
        "end": 624
      },
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
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 649,
                    "end": 650
                  },
                  "consequent": {
                    "type": "BlockStatement",
                    "body": [
                      {
                        "type": "ReturnStatement",
                        "argument": {
                          "type": "Literal",
                          "value": 1,
                          "raw": "1",
                          "start": 673,
                          "end": 674
                        },
                        "start": 666,
                        "end": 675
                      }
                    ],
                    "start": 652,
                    "end": 685
                  },
                  "alternate": {
                    "type": "BlockStatement",
                    "body": [
                      {
                        "type": "ThrowStatement",
                        "argument": {
                          "type": "NewExpression",
                          "callee": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "Error",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 732,
                            "end": 737
                          },
                          "typeArguments": null,
                          "arguments": [],
                          "start": 728,
                          "end": 739
                        },
                        "start": 722,
                        "end": 740
                      }
                    ],
                    "start": 708,
                    "end": 750
                  },
                  "start": 645,
                  "end": 750
                }
              ],
              "start": 635,
              "end": 756
            },
            "handler": {
              "type": "CatchClause",
              "param": {
                "type": "Identifier",
                "decorators": [],
                "name": "e",
                "optional": false,
                "typeAnnotation": null,
                "start": 768,
                "end": 769
              },
              "body": {
                "type": "BlockStatement",
                "body": [],
                "start": 771,
                "end": 778
              },
              "start": 761,
              "end": 778
            },
            "finalizer": null,
            "start": 631,
            "end": 778
          }
        ],
        "start": 625,
        "end": 780
      },
      "expression": false,
      "start": 602,
      "end": 780
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f7",
        "optional": false,
        "typeAnnotation": null,
        "start": 791,
        "end": 793
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
          "typeAnnotation": null,
          "start": 794,
          "end": 795
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSNumberKeyword",
          "start": 798,
          "end": 804
        },
        "start": 796,
        "end": 804
      },
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
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 829,
                    "end": 830
                  },
                  "consequent": {
                    "type": "BlockStatement",
                    "body": [
                      {
                        "type": "ReturnStatement",
                        "argument": {
                          "type": "Literal",
                          "value": 1,
                          "raw": "1",
                          "start": 853,
                          "end": 854
                        },
                        "start": 846,
                        "end": 855
                      }
                    ],
                    "start": 832,
                    "end": 865
                  },
                  "alternate": {
                    "type": "BlockStatement",
                    "body": [
                      {
                        "type": "ThrowStatement",
                        "argument": {
                          "type": "NewExpression",
                          "callee": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "Error",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 903,
                            "end": 908
                          },
                          "typeArguments": null,
                          "arguments": [],
                          "start": 899,
                          "end": 910
                        },
                        "start": 893,
                        "end": 911
                      }
                    ],
                    "start": 879,
                    "end": 921
                  },
                  "start": 825,
                  "end": 921
                }
              ],
              "start": 815,
              "end": 927
            },
            "handler": {
              "type": "CatchClause",
              "param": {
                "type": "Identifier",
                "decorators": [],
                "name": "e",
                "optional": false,
                "typeAnnotation": null,
                "start": 939,
                "end": 940
              },
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "Literal",
                      "value": 1,
                      "raw": "1",
                      "start": 959,
                      "end": 960
                    },
                    "start": 952,
                    "end": 961
                  }
                ],
                "start": 942,
                "end": 967
              },
              "start": 932,
              "end": 967
            },
            "finalizer": null,
            "start": 811,
            "end": 967
          }
        ],
        "start": 805,
        "end": 969
      },
      "expression": false,
      "start": 782,
      "end": 969
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f8",
        "optional": false,
        "typeAnnotation": null,
        "start": 980,
        "end": 982
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
          "typeAnnotation": null,
          "start": 983,
          "end": 984
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSNumberKeyword",
          "start": 987,
          "end": 993
        },
        "start": 985,
        "end": 993
      },
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
                    "type": "Literal",
                    "value": true,
                    "raw": "true",
                    "start": 1018,
                    "end": 1022
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
                            "name": "x",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1038,
                            "end": 1039
                          },
                          "start": 1038,
                          "end": 1041
                        },
                        "directive": null,
                        "start": 1038,
                        "end": 1042
                      }
                    ],
                    "start": 1024,
                    "end": 1052
                  },
                  "alternate": {
                    "type": "BlockStatement",
                    "body": [
                      {
                        "type": "ReturnStatement",
                        "argument": {
                          "type": "Literal",
                          "value": 1,
                          "raw": "1",
                          "start": 1087,
                          "end": 1088
                        },
                        "start": 1080,
                        "end": 1089
                      }
                    ],
                    "start": 1066,
                    "end": 1099
                  },
                  "start": 1014,
                  "end": 1099
                }
              ],
              "start": 1004,
              "end": 1105
            },
            "handler": {
              "type": "CatchClause",
              "param": {
                "type": "Identifier",
                "decorators": [],
                "name": "e",
                "optional": false,
                "typeAnnotation": null,
                "start": 1117,
                "end": 1118
              },
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "Literal",
                      "value": 1,
                      "raw": "1",
                      "start": 1137,
                      "end": 1138
                    },
                    "start": 1130,
                    "end": 1139
                  }
                ],
                "start": 1120,
                "end": 1145
              },
              "start": 1110,
              "end": 1145
            },
            "finalizer": null,
            "start": 1000,
            "end": 1145
          }
        ],
        "start": 994,
        "end": 1147
      },
      "expression": false,
      "start": 971,
      "end": 1147
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f9",
        "optional": false,
        "typeAnnotation": null,
        "start": 1158,
        "end": 1160
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
          "typeAnnotation": null,
          "start": 1161,
          "end": 1162
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSNumberKeyword",
          "start": 1165,
          "end": 1171
        },
        "start": 1163,
        "end": 1171
      },
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "TryStatement",
            "block": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "WhileStatement",
                  "test": {
                    "type": "Literal",
                    "value": false,
                    "raw": "false",
                    "start": 1199,
                    "end": 1204
                  },
                  "body": {
                    "type": "BlockStatement",
                    "body": [
                      {
                        "type": "ReturnStatement",
                        "argument": {
                          "type": "Literal",
                          "value": 1,
                          "raw": "1",
                          "start": 1227,
                          "end": 1228
                        },
                        "start": 1220,
                        "end": 1229
                      }
                    ],
                    "start": 1206,
                    "end": 1239
                  },
                  "start": 1192,
                  "end": 1239
                }
              ],
              "start": 1182,
              "end": 1245
            },
            "handler": {
              "type": "CatchClause",
              "param": {
                "type": "Identifier",
                "decorators": [],
                "name": "e",
                "optional": false,
                "typeAnnotation": null,
                "start": 1257,
                "end": 1258
              },
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "Literal",
                      "value": 1,
                      "raw": "1",
                      "start": 1277,
                      "end": 1278
                    },
                    "start": 1270,
                    "end": 1279
                  }
                ],
                "start": 1260,
                "end": 1285
              },
              "start": 1250,
              "end": 1285
            },
            "finalizer": null,
            "start": 1178,
            "end": 1285
          }
        ],
        "start": 1172,
        "end": 1287
      },
      "expression": false,
      "start": 1149,
      "end": 1287
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f10",
        "optional": false,
        "typeAnnotation": null,
        "start": 1298,
        "end": 1301
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
          "typeAnnotation": null,
          "start": 1302,
          "end": 1303
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSNumberKeyword",
          "start": 1306,
          "end": 1312
        },
        "start": 1304,
        "end": 1312
      },
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "TryStatement",
            "block": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "DoWhileStatement",
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
                            "start": 1350,
                            "end": 1351
                          },
                          "start": 1350,
                          "end": 1353
                        },
                        "directive": null,
                        "start": 1350,
                        "end": 1354
                      }
                    ],
                    "start": 1336,
                    "end": 1364
                  },
                  "test": {
                    "type": "Literal",
                    "value": true,
                    "raw": "true",
                    "start": 1372,
                    "end": 1376
                  },
                  "start": 1333,
                  "end": 1378
                }
              ],
              "start": 1323,
              "end": 1384
            },
            "handler": {
              "type": "CatchClause",
              "param": {
                "type": "Identifier",
                "decorators": [],
                "name": "e",
                "optional": false,
                "typeAnnotation": null,
                "start": 1396,
                "end": 1397
              },
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "Literal",
                      "value": 1,
                      "raw": "1",
                      "start": 1416,
                      "end": 1417
                    },
                    "start": 1409,
                    "end": 1418
                  }
                ],
                "start": 1399,
                "end": 1424
              },
              "start": 1389,
              "end": 1424
            },
            "finalizer": null,
            "start": 1319,
            "end": 1424
          }
        ],
        "start": 1313,
        "end": 1426
      },
      "expression": false,
      "start": 1289,
      "end": 1426
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f11",
        "optional": false,
        "typeAnnotation": null,
        "start": 1437,
        "end": 1440
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
          "typeAnnotation": null,
          "start": 1441,
          "end": 1442
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSNumberKeyword",
          "start": 1445,
          "end": 1451
        },
        "start": 1443,
        "end": 1451
      },
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "LabeledStatement",
            "label": {
              "type": "Identifier",
              "decorators": [],
              "name": "test",
              "optional": false,
              "typeAnnotation": null,
              "start": 1458,
              "end": 1462
            },
            "body": {
              "type": "TryStatement",
              "block": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "DoWhileStatement",
                    "body": {
                      "type": "BlockStatement",
                      "body": [
                        {
                          "type": "DoWhileStatement",
                          "body": {
                            "type": "BlockStatement",
                            "body": [
                              {
                                "type": "BreakStatement",
                                "label": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "test",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 1526,
                                  "end": 1530
                                },
                                "start": 1520,
                                "end": 1531
                              }
                            ],
                            "start": 1502,
                            "end": 1545
                          },
                          "test": {
                            "type": "Literal",
                            "value": true,
                            "raw": "true",
                            "start": 1553,
                            "end": 1557
                          },
                          "start": 1499,
                          "end": 1559
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
                              "name": "x",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 1572,
                              "end": 1573
                            },
                            "start": 1572,
                            "end": 1575
                          },
                          "directive": null,
                          "start": 1572,
                          "end": 1576
                        }
                      ],
                      "start": 1485,
                      "end": 1586
                    },
                    "test": {
                      "type": "Literal",
                      "value": true,
                      "raw": "true",
                      "start": 1594,
                      "end": 1598
                    },
                    "start": 1482,
                    "end": 1600
                  }
                ],
                "start": 1472,
                "end": 1606
              },
              "handler": {
                "type": "CatchClause",
                "param": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "e",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1618,
                  "end": 1619
                },
                "body": {
                  "type": "BlockStatement",
                  "body": [
                    {
                      "type": "ReturnStatement",
                      "argument": {
                        "type": "Literal",
                        "value": 1,
                        "raw": "1",
                        "start": 1638,
                        "end": 1639
                      },
                      "start": 1631,
                      "end": 1640
                    }
                  ],
                  "start": 1621,
                  "end": 1646
                },
                "start": 1611,
                "end": 1646
              },
              "finalizer": null,
              "start": 1468,
              "end": 1646
            },
            "start": 1458,
            "end": 1646
          }
        ],
        "start": 1452,
        "end": 1648
      },
      "expression": false,
      "start": 1428,
      "end": 1648
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 1648
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
    "value": "f0",
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
    "type": "Identifier",
    "value": "x",
    "start": 12,
    "end": 13
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 13,
    "end": 14
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 14,
    "end": 15
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 16,
    "end": 22
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 23,
    "end": 24
  },
  {
    "type": "Keyword",
    "value": "while",
    "start": 29,
    "end": 34
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 35,
    "end": 36
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 36,
    "end": 40
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 40,
    "end": 41
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 41,
    "end": 42
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 43,
    "end": 44
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 46,
    "end": 54
  },
  {
    "type": "Identifier",
    "value": "f1",
    "start": 55,
    "end": 57
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 57,
    "end": 58
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 58,
    "end": 59
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 59,
    "end": 60
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 60,
    "end": 61
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 62,
    "end": 68
  },
  {
    "type": "Punctuator",
    "value": "{",
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
    "value": ")",
    "start": 80,
    "end": 81
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 82,
    "end": 83
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 92,
    "end": 98
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 99,
    "end": 100
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 105,
    "end": 106
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 107,
    "end": 108
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 110,
    "end": 118
  },
  {
    "type": "Identifier",
    "value": "f2",
    "start": 119,
    "end": 121
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 121,
    "end": 122
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 122,
    "end": 123
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 123,
    "end": 124
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 124,
    "end": 125
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 126,
    "end": 132
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 133,
    "end": 134
  },
  {
    "type": "Keyword",
    "value": "while",
    "start": 139,
    "end": 144
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 145,
    "end": 146
  },
  {
    "type": "Identifier",
    "value": "x",
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
    "value": "throw",
    "start": 159,
    "end": 164
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 165,
    "end": 168
  },
  {
    "type": "Identifier",
    "value": "Error",
    "start": 169,
    "end": 174
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 174,
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
    "type": "Punctuator",
    "value": "}",
    "start": 182,
    "end": 183
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 188,
    "end": 194
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 195,
    "end": 196
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 196,
    "end": 197
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 198,
    "end": 199
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 201,
    "end": 209
  },
  {
    "type": "Identifier",
    "value": "f3",
    "start": 210,
    "end": 212
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 212,
    "end": 213
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 213,
    "end": 214
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 214,
    "end": 215
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 215,
    "end": 216
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 217,
    "end": 223
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 224,
    "end": 225
  },
  {
    "type": "Keyword",
    "value": "while",
    "start": 230,
    "end": 235
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 236,
    "end": 237
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 237,
    "end": 238
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 238,
    "end": 239
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 240,
    "end": 241
  },
  {
    "type": "Keyword",
    "value": "throw",
    "start": 250,
    "end": 255
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 256,
    "end": 259
  },
  {
    "type": "Identifier",
    "value": "Error",
    "start": 260,
    "end": 265
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 265,
    "end": 266
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 266,
    "end": 267
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 267,
    "end": 268
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 273,
    "end": 274
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 275,
    "end": 276
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 278,
    "end": 286
  },
  {
    "type": "Identifier",
    "value": "f3_1",
    "start": 287,
    "end": 291
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 292,
    "end": 293
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 293,
    "end": 294
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 294,
    "end": 295
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 295,
    "end": 296
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 297,
    "end": 303
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 304,
    "end": 305
  },
  {
    "type": "Keyword",
    "value": "while",
    "start": 310,
    "end": 315
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 316,
    "end": 317
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 317,
    "end": 318
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 318,
    "end": 319
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 320,
    "end": 321
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 326,
    "end": 327
  },
  {
    "type": "Keyword",
    "value": "throw",
    "start": 332,
    "end": 337
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 338,
    "end": 341
  },
  {
    "type": "Identifier",
    "value": "Error",
    "start": 342,
    "end": 347
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 347,
    "end": 348
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 348,
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
    "start": 351,
    "end": 352
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 354,
    "end": 362
  },
  {
    "type": "Identifier",
    "value": "f4",
    "start": 363,
    "end": 365
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 365,
    "end": 366
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 366,
    "end": 367
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 367,
    "end": 368
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 368,
    "end": 369
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 370,
    "end": 376
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 377,
    "end": 378
  },
  {
    "type": "Keyword",
    "value": "try",
    "start": 383,
    "end": 386
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 387,
    "end": 388
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 397,
    "end": 399
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 400,
    "end": 401
  },
  {
    "type": "Identifier",
    "value": "x",
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
    "type": "Keyword",
    "value": "return",
    "start": 418,
    "end": 424
  },
  {
    "type": "Numeric",
    "value": "1",
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
    "start": 436,
    "end": 437
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 442,
    "end": 443
  },
  {
    "type": "Keyword",
    "value": "catch",
    "start": 448,
    "end": 453
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 454,
    "end": 455
  },
  {
    "type": "Identifier",
    "value": "e",
    "start": 455,
    "end": 456
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 456,
    "end": 457
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 458,
    "end": 459
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 464,
    "end": 465
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 466,
    "end": 467
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 469,
    "end": 477
  },
  {
    "type": "Identifier",
    "value": "f5",
    "start": 478,
    "end": 480
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 480,
    "end": 481
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 481,
    "end": 482
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 482,
    "end": 483
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 483,
    "end": 484
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 485,
    "end": 491
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 492,
    "end": 493
  },
  {
    "type": "Keyword",
    "value": "try",
    "start": 498,
    "end": 501
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 502,
    "end": 503
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 512,
    "end": 514
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 515,
    "end": 516
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 516,
    "end": 517
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 517,
    "end": 518
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 519,
    "end": 520
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 533,
    "end": 539
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 540,
    "end": 541
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 541,
    "end": 542
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 551,
    "end": 552
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 557,
    "end": 558
  },
  {
    "type": "Keyword",
    "value": "catch",
    "start": 563,
    "end": 568
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 569,
    "end": 570
  },
  {
    "type": "Identifier",
    "value": "e",
    "start": 570,
    "end": 571
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 571,
    "end": 572
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 573,
    "end": 574
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 583,
    "end": 589
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 590,
    "end": 591
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 591,
    "end": 592
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
    "start": 599,
    "end": 600
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 602,
    "end": 610
  },
  {
    "type": "Identifier",
    "value": "f6",
    "start": 611,
    "end": 613
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 613,
    "end": 614
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 614,
    "end": 615
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 615,
    "end": 616
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 616,
    "end": 617
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 618,
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
    "value": "try",
    "start": 631,
    "end": 634
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 635,
    "end": 636
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 645,
    "end": 647
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 648,
    "end": 649
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 649,
    "end": 650
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 650,
    "end": 651
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 652,
    "end": 653
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 666,
    "end": 672
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 673,
    "end": 674
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 674,
    "end": 675
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 684,
    "end": 685
  },
  {
    "type": "Keyword",
    "value": "else",
    "start": 694,
    "end": 698
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 708,
    "end": 709
  },
  {
    "type": "Keyword",
    "value": "throw",
    "start": 722,
    "end": 727
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 728,
    "end": 731
  },
  {
    "type": "Identifier",
    "value": "Error",
    "start": 732,
    "end": 737
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 737,
    "end": 738
  },
  {
    "type": "Punctuator",
    "value": ")",
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
    "type": "Punctuator",
    "value": "}",
    "start": 749,
    "end": 750
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 755,
    "end": 756
  },
  {
    "type": "Keyword",
    "value": "catch",
    "start": 761,
    "end": 766
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 767,
    "end": 768
  },
  {
    "type": "Identifier",
    "value": "e",
    "start": 768,
    "end": 769
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 769,
    "end": 770
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 771,
    "end": 772
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 777,
    "end": 778
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 779,
    "end": 780
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 782,
    "end": 790
  },
  {
    "type": "Identifier",
    "value": "f7",
    "start": 791,
    "end": 793
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 793,
    "end": 794
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 794,
    "end": 795
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 795,
    "end": 796
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 796,
    "end": 797
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 798,
    "end": 804
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 805,
    "end": 806
  },
  {
    "type": "Keyword",
    "value": "try",
    "start": 811,
    "end": 814
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 815,
    "end": 816
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 825,
    "end": 827
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 828,
    "end": 829
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 829,
    "end": 830
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 830,
    "end": 831
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 832,
    "end": 833
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 846,
    "end": 852
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 853,
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
    "start": 864,
    "end": 865
  },
  {
    "type": "Keyword",
    "value": "else",
    "start": 874,
    "end": 878
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 879,
    "end": 880
  },
  {
    "type": "Keyword",
    "value": "throw",
    "start": 893,
    "end": 898
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 899,
    "end": 902
  },
  {
    "type": "Identifier",
    "value": "Error",
    "start": 903,
    "end": 908
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 908,
    "end": 909
  },
  {
    "type": "Punctuator",
    "value": ")",
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
    "type": "Punctuator",
    "value": "}",
    "start": 920,
    "end": 921
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 926,
    "end": 927
  },
  {
    "type": "Keyword",
    "value": "catch",
    "start": 932,
    "end": 937
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 938,
    "end": 939
  },
  {
    "type": "Identifier",
    "value": "e",
    "start": 939,
    "end": 940
  },
  {
    "type": "Punctuator",
    "value": ")",
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
    "value": "return",
    "start": 952,
    "end": 958
  },
  {
    "type": "Numeric",
    "value": "1",
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
    "start": 966,
    "end": 967
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 968,
    "end": 969
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 971,
    "end": 979
  },
  {
    "type": "Identifier",
    "value": "f8",
    "start": 980,
    "end": 982
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 982,
    "end": 983
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 983,
    "end": 984
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 984,
    "end": 985
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 985,
    "end": 986
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 987,
    "end": 993
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 994,
    "end": 995
  },
  {
    "type": "Keyword",
    "value": "try",
    "start": 1000,
    "end": 1003
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1004,
    "end": 1005
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 1014,
    "end": 1016
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1017,
    "end": 1018
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 1018,
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
    "start": 1038,
    "end": 1039
  },
  {
    "type": "Punctuator",
    "value": "++",
    "start": 1039,
    "end": 1041
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1041,
    "end": 1042
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1051,
    "end": 1052
  },
  {
    "type": "Keyword",
    "value": "else",
    "start": 1061,
    "end": 1065
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1066,
    "end": 1067
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 1080,
    "end": 1086
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 1087,
    "end": 1088
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1088,
    "end": 1089
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1098,
    "end": 1099
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1104,
    "end": 1105
  },
  {
    "type": "Keyword",
    "value": "catch",
    "start": 1110,
    "end": 1115
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1116,
    "end": 1117
  },
  {
    "type": "Identifier",
    "value": "e",
    "start": 1117,
    "end": 1118
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1118,
    "end": 1119
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1120,
    "end": 1121
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 1130,
    "end": 1136
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 1137,
    "end": 1138
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1138,
    "end": 1139
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1144,
    "end": 1145
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1146,
    "end": 1147
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1149,
    "end": 1157
  },
  {
    "type": "Identifier",
    "value": "f9",
    "start": 1158,
    "end": 1160
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
    "value": ":",
    "start": 1163,
    "end": 1164
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1165,
    "end": 1171
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1172,
    "end": 1173
  },
  {
    "type": "Keyword",
    "value": "try",
    "start": 1178,
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
    "value": "while",
    "start": 1192,
    "end": 1197
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1198,
    "end": 1199
  },
  {
    "type": "Boolean",
    "value": "false",
    "start": 1199,
    "end": 1204
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1204,
    "end": 1205
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1206,
    "end": 1207
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 1220,
    "end": 1226
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 1227,
    "end": 1228
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1228,
    "end": 1229
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1238,
    "end": 1239
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1244,
    "end": 1245
  },
  {
    "type": "Keyword",
    "value": "catch",
    "start": 1250,
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
    "value": "e",
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
    "type": "Keyword",
    "value": "return",
    "start": 1270,
    "end": 1276
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 1277,
    "end": 1278
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1278,
    "end": 1279
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1284,
    "end": 1285
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1286,
    "end": 1287
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1289,
    "end": 1297
  },
  {
    "type": "Identifier",
    "value": "f10",
    "start": 1298,
    "end": 1301
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1301,
    "end": 1302
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1302,
    "end": 1303
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1303,
    "end": 1304
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1304,
    "end": 1305
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1306,
    "end": 1312
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1313,
    "end": 1314
  },
  {
    "type": "Keyword",
    "value": "try",
    "start": 1319,
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
    "value": "do",
    "start": 1333,
    "end": 1335
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1336,
    "end": 1337
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1350,
    "end": 1351
  },
  {
    "type": "Punctuator",
    "value": "++",
    "start": 1351,
    "end": 1353
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1353,
    "end": 1354
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1363,
    "end": 1364
  },
  {
    "type": "Keyword",
    "value": "while",
    "start": 1365,
    "end": 1370
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1371,
    "end": 1372
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 1372,
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
    "value": ";",
    "start": 1377,
    "end": 1378
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1383,
    "end": 1384
  },
  {
    "type": "Keyword",
    "value": "catch",
    "start": 1389,
    "end": 1394
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1395,
    "end": 1396
  },
  {
    "type": "Identifier",
    "value": "e",
    "start": 1396,
    "end": 1397
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1397,
    "end": 1398
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1399,
    "end": 1400
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 1409,
    "end": 1415
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 1416,
    "end": 1417
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1417,
    "end": 1418
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1423,
    "end": 1424
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1425,
    "end": 1426
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1428,
    "end": 1436
  },
  {
    "type": "Identifier",
    "value": "f11",
    "start": 1437,
    "end": 1440
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1440,
    "end": 1441
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1441,
    "end": 1442
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1442,
    "end": 1443
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1443,
    "end": 1444
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1445,
    "end": 1451
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1452,
    "end": 1453
  },
  {
    "type": "Identifier",
    "value": "test",
    "start": 1458,
    "end": 1462
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1462,
    "end": 1463
  },
  {
    "type": "Keyword",
    "value": "try",
    "start": 1468,
    "end": 1471
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1472,
    "end": 1473
  },
  {
    "type": "Keyword",
    "value": "do",
    "start": 1482,
    "end": 1484
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1485,
    "end": 1486
  },
  {
    "type": "Keyword",
    "value": "do",
    "start": 1499,
    "end": 1501
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1502,
    "end": 1503
  },
  {
    "type": "Keyword",
    "value": "break",
    "start": 1520,
    "end": 1525
  },
  {
    "type": "Identifier",
    "value": "test",
    "start": 1526,
    "end": 1530
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1530,
    "end": 1531
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1544,
    "end": 1545
  },
  {
    "type": "Keyword",
    "value": "while",
    "start": 1546,
    "end": 1551
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1552,
    "end": 1553
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 1553,
    "end": 1557
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1557,
    "end": 1558
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1558,
    "end": 1559
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1572,
    "end": 1573
  },
  {
    "type": "Punctuator",
    "value": "++",
    "start": 1573,
    "end": 1575
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1575,
    "end": 1576
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1585,
    "end": 1586
  },
  {
    "type": "Keyword",
    "value": "while",
    "start": 1587,
    "end": 1592
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1593,
    "end": 1594
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 1594,
    "end": 1598
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1598,
    "end": 1599
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1599,
    "end": 1600
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1605,
    "end": 1606
  },
  {
    "type": "Keyword",
    "value": "catch",
    "start": 1611,
    "end": 1616
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1617,
    "end": 1618
  },
  {
    "type": "Identifier",
    "value": "e",
    "start": 1618,
    "end": 1619
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1619,
    "end": 1620
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1621,
    "end": 1622
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 1631,
    "end": 1637
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 1638,
    "end": 1639
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1639,
    "end": 1640
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1645,
    "end": 1646
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1647,
    "end": 1648
  }
]
```
