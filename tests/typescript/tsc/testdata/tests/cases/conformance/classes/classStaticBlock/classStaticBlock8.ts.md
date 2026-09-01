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
        "name": "foo",
        "optional": false,
        "typeAnnotation": null,
        "start": 9,
        "end": 12
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "v",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSNumberKeyword",
              "start": 17,
              "end": 23
            },
            "start": 15,
            "end": 23
          },
          "start": 14,
          "end": 23
        }
      ],
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
              "start": 31,
              "end": 36
            },
            "body": {
              "type": "WhileStatement",
              "test": {
                "type": "Identifier",
                "decorators": [],
                "name": "v",
                "optional": false,
                "typeAnnotation": null,
                "start": 45,
                "end": 46
              },
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ClassDeclaration",
                    "decorators": [],
                    "id": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "C",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 64,
                      "end": 65
                    },
                    "typeParameters": null,
                    "superClass": null,
                    "superTypeArguments": null,
                    "implements": [],
                    "body": {
                      "type": "ClassBody",
                      "body": [
                        {
                          "type": "StaticBlock",
                          "body": [
                            {
                              "type": "IfStatement",
                              "test": {
                                "type": "BinaryExpression",
                                "left": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "v",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 109,
                                  "end": 110
                                },
                                "operator": "===",
                                "right": {
                                  "type": "Literal",
                                  "value": 1,
                                  "raw": "1",
                                  "start": 115,
                                  "end": 116
                                },
                                "start": 109,
                                "end": 116
                              },
                              "consequent": {
                                "type": "BlockStatement",
                                "body": [
                                  {
                                    "type": "BreakStatement",
                                    "label": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "label",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 146,
                                      "end": 151
                                    },
                                    "start": 140,
                                    "end": 152
                                  }
                                ],
                                "start": 118,
                                "end": 170
                              },
                              "alternate": null,
                              "start": 105,
                              "end": 170
                            },
                            {
                              "type": "IfStatement",
                              "test": {
                                "type": "BinaryExpression",
                                "left": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "v",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 191,
                                  "end": 192
                                },
                                "operator": "===",
                                "right": {
                                  "type": "Literal",
                                  "value": 2,
                                  "raw": "2",
                                  "start": 197,
                                  "end": 198
                                },
                                "start": 191,
                                "end": 198
                              },
                              "consequent": {
                                "type": "BlockStatement",
                                "body": [
                                  {
                                    "type": "ContinueStatement",
                                    "label": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "label",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 231,
                                      "end": 236
                                    },
                                    "start": 222,
                                    "end": 237
                                  }
                                ],
                                "start": 200,
                                "end": 255
                              },
                              "alternate": null,
                              "start": 187,
                              "end": 255
                            },
                            {
                              "type": "IfStatement",
                              "test": {
                                "type": "BinaryExpression",
                                "left": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "v",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 276,
                                  "end": 277
                                },
                                "operator": "===",
                                "right": {
                                  "type": "Literal",
                                  "value": 3,
                                  "raw": "3",
                                  "start": 282,
                                  "end": 283
                                },
                                "start": 276,
                                "end": 283
                              },
                              "consequent": {
                                "type": "BlockStatement",
                                "body": [
                                  {
                                    "type": "BreakStatement",
                                    "label": null,
                                    "start": 307,
                                    "end": 312
                                  }
                                ],
                                "start": 285,
                                "end": 330
                              },
                              "alternate": null,
                              "start": 272,
                              "end": 330
                            },
                            {
                              "type": "IfStatement",
                              "test": {
                                "type": "BinaryExpression",
                                "left": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "v",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 351,
                                  "end": 352
                                },
                                "operator": "===",
                                "right": {
                                  "type": "Literal",
                                  "value": 4,
                                  "raw": "4",
                                  "start": 357,
                                  "end": 358
                                },
                                "start": 351,
                                "end": 358
                              },
                              "consequent": {
                                "type": "BlockStatement",
                                "body": [
                                  {
                                    "type": "ContinueStatement",
                                    "label": null,
                                    "start": 382,
                                    "end": 390
                                  }
                                ],
                                "start": 360,
                                "end": 408
                              },
                              "alternate": null,
                              "start": 347,
                              "end": 408
                            }
                          ],
                          "start": 80,
                          "end": 422
                        }
                      ],
                      "start": 66,
                      "end": 432
                    },
                    "abstract": false,
                    "declare": false,
                    "start": 58,
                    "end": 432
                  },
                  {
                    "type": "IfStatement",
                    "test": {
                      "type": "BinaryExpression",
                      "left": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "v",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 446,
                        "end": 447
                      },
                      "operator": "===",
                      "right": {
                        "type": "Literal",
                        "value": 5,
                        "raw": "5",
                        "start": 452,
                        "end": 453
                      },
                      "start": 446,
                      "end": 453
                    },
                    "consequent": {
                      "type": "BlockStatement",
                      "body": [
                        {
                          "type": "BreakStatement",
                          "label": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "label",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 475,
                            "end": 480
                          },
                          "start": 469,
                          "end": 481
                        }
                      ],
                      "start": 455,
                      "end": 491
                    },
                    "alternate": null,
                    "start": 442,
                    "end": 491
                  },
                  {
                    "type": "IfStatement",
                    "test": {
                      "type": "BinaryExpression",
                      "left": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "v",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 504,
                        "end": 505
                      },
                      "operator": "===",
                      "right": {
                        "type": "Literal",
                        "value": 6,
                        "raw": "6",
                        "start": 510,
                        "end": 511
                      },
                      "start": 504,
                      "end": 511
                    },
                    "consequent": {
                      "type": "BlockStatement",
                      "body": [
                        {
                          "type": "ContinueStatement",
                          "label": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "label",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 536,
                            "end": 541
                          },
                          "start": 527,
                          "end": 542
                        }
                      ],
                      "start": 513,
                      "end": 552
                    },
                    "alternate": null,
                    "start": 500,
                    "end": 552
                  },
                  {
                    "type": "IfStatement",
                    "test": {
                      "type": "BinaryExpression",
                      "left": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "v",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 565,
                        "end": 566
                      },
                      "operator": "===",
                      "right": {
                        "type": "Literal",
                        "value": 7,
                        "raw": "7",
                        "start": 571,
                        "end": 572
                      },
                      "start": 565,
                      "end": 572
                    },
                    "consequent": {
                      "type": "BlockStatement",
                      "body": [
                        {
                          "type": "BreakStatement",
                          "label": null,
                          "start": 588,
                          "end": 594
                        }
                      ],
                      "start": 574,
                      "end": 604
                    },
                    "alternate": null,
                    "start": 561,
                    "end": 604
                  },
                  {
                    "type": "IfStatement",
                    "test": {
                      "type": "BinaryExpression",
                      "left": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "v",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 617,
                        "end": 618
                      },
                      "operator": "===",
                      "right": {
                        "type": "Literal",
                        "value": 8,
                        "raw": "8",
                        "start": 623,
                        "end": 624
                      },
                      "start": 617,
                      "end": 624
                    },
                    "consequent": {
                      "type": "BlockStatement",
                      "body": [
                        {
                          "type": "ContinueStatement",
                          "label": null,
                          "start": 640,
                          "end": 649
                        }
                      ],
                      "start": 626,
                      "end": 659
                    },
                    "alternate": null,
                    "start": 613,
                    "end": 659
                  }
                ],
                "start": 48,
                "end": 665
              },
              "start": 38,
              "end": 665
            },
            "start": 31,
            "end": 665
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
              "start": 677,
              "end": 678
            },
            "typeParameters": null,
            "superClass": null,
            "superTypeArguments": null,
            "implements": [],
            "body": {
              "type": "ClassBody",
              "body": [
                {
                  "type": "StaticBlock",
                  "body": [
                    {
                      "type": "LabeledStatement",
                      "label": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "outer",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 710,
                        "end": 715
                      },
                      "body": {
                        "type": "BreakStatement",
                        "label": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "outer",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 723,
                          "end": 728
                        },
                        "start": 717,
                        "end": 729
                      },
                      "start": 710,
                      "end": 729
                    },
                    {
                      "type": "LabeledStatement",
                      "label": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "loop",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 751,
                        "end": 755
                      },
                      "body": {
                        "type": "WhileStatement",
                        "test": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "v",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 764,
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
                                  "name": "v",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 789,
                                  "end": 790
                                },
                                "operator": "===",
                                "right": {
                                  "type": "Literal",
                                  "value": 1,
                                  "raw": "1",
                                  "start": 795,
                                  "end": 796
                                },
                                "start": 789,
                                "end": 796
                              },
                              "consequent": {
                                "type": "BreakStatement",
                                "label": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "loop",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 804,
                                  "end": 808
                                },
                                "start": 798,
                                "end": 809
                              },
                              "alternate": null,
                              "start": 785,
                              "end": 809
                            },
                            {
                              "type": "IfStatement",
                              "test": {
                                "type": "BinaryExpression",
                                "left": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "v",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 839,
                                  "end": 840
                                },
                                "operator": "===",
                                "right": {
                                  "type": "Literal",
                                  "value": 2,
                                  "raw": "2",
                                  "start": 845,
                                  "end": 846
                                },
                                "start": 839,
                                "end": 846
                              },
                              "consequent": {
                                "type": "ContinueStatement",
                                "label": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "loop",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 857,
                                  "end": 861
                                },
                                "start": 848,
                                "end": 862
                              },
                              "alternate": null,
                              "start": 835,
                              "end": 862
                            },
                            {
                              "type": "IfStatement",
                              "test": {
                                "type": "BinaryExpression",
                                "left": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "v",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 892,
                                  "end": 893
                                },
                                "operator": "===",
                                "right": {
                                  "type": "Literal",
                                  "value": 3,
                                  "raw": "3",
                                  "start": 898,
                                  "end": 899
                                },
                                "start": 892,
                                "end": 899
                              },
                              "consequent": {
                                "type": "BreakStatement",
                                "label": null,
                                "start": 901,
                                "end": 907
                              },
                              "alternate": null,
                              "start": 888,
                              "end": 907
                            },
                            {
                              "type": "IfStatement",
                              "test": {
                                "type": "BinaryExpression",
                                "left": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "v",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 937,
                                  "end": 938
                                },
                                "operator": "===",
                                "right": {
                                  "type": "Literal",
                                  "value": 4,
                                  "raw": "4",
                                  "start": 943,
                                  "end": 944
                                },
                                "start": 937,
                                "end": 944
                              },
                              "consequent": {
                                "type": "ContinueStatement",
                                "label": null,
                                "start": 946,
                                "end": 955
                              },
                              "alternate": null,
                              "start": 933,
                              "end": 955
                            }
                          ],
                          "start": 767,
                          "end": 978
                        },
                        "start": 757,
                        "end": 978
                      },
                      "start": 751,
                      "end": 978
                    },
                    {
                      "type": "SwitchStatement",
                      "discriminant": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "v",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 999,
                        "end": 1000
                      },
                      "cases": [
                        {
                          "type": "SwitchCase",
                          "test": null,
                          "consequent": [
                            {
                              "type": "BreakStatement",
                              "label": null,
                              "start": 1029,
                              "end": 1035
                            }
                          ],
                          "start": 1020,
                          "end": 1035
                        }
                      ],
                      "start": 991,
                      "end": 1058
                    }
                  ],
                  "start": 689,
                  "end": 1068
                }
              ],
              "start": 679,
              "end": 1074
            },
            "abstract": false,
            "declare": false,
            "start": 671,
            "end": 1074
          }
        ],
        "start": 25,
        "end": 1076
      },
      "expression": false,
      "start": 0,
      "end": 1076
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 1076
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
    "value": "foo",
    "start": 9,
    "end": 12
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 13,
    "end": 14
  },
  {
    "type": "Identifier",
    "value": "v",
    "start": 14,
    "end": 15
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 15,
    "end": 16
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 17,
    "end": 23
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 23,
    "end": 24
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 25,
    "end": 26
  },
  {
    "type": "Identifier",
    "value": "label",
    "start": 31,
    "end": 36
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 36,
    "end": 37
  },
  {
    "type": "Keyword",
    "value": "while",
    "start": 38,
    "end": 43
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 44,
    "end": 45
  },
  {
    "type": "Identifier",
    "value": "v",
    "start": 45,
    "end": 46
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 46,
    "end": 47
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 48,
    "end": 49
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 58,
    "end": 63
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 64,
    "end": 65
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 66,
    "end": 67
  },
  {
    "type": "Keyword",
    "value": "static",
    "start": 80,
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
    "value": "if",
    "start": 105,
    "end": 107
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 108,
    "end": 109
  },
  {
    "type": "Identifier",
    "value": "v",
    "start": 109,
    "end": 110
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 111,
    "end": 114
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 115,
    "end": 116
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 116,
    "end": 117
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 118,
    "end": 119
  },
  {
    "type": "Keyword",
    "value": "break",
    "start": 140,
    "end": 145
  },
  {
    "type": "Identifier",
    "value": "label",
    "start": 146,
    "end": 151
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 151,
    "end": 152
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 169,
    "end": 170
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 187,
    "end": 189
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 190,
    "end": 191
  },
  {
    "type": "Identifier",
    "value": "v",
    "start": 191,
    "end": 192
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 193,
    "end": 196
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 197,
    "end": 198
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 198,
    "end": 199
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 200,
    "end": 201
  },
  {
    "type": "Keyword",
    "value": "continue",
    "start": 222,
    "end": 230
  },
  {
    "type": "Identifier",
    "value": "label",
    "start": 231,
    "end": 236
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 236,
    "end": 237
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 254,
    "end": 255
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 272,
    "end": 274
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 275,
    "end": 276
  },
  {
    "type": "Identifier",
    "value": "v",
    "start": 276,
    "end": 277
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 278,
    "end": 281
  },
  {
    "type": "Numeric",
    "value": "3",
    "start": 282,
    "end": 283
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 283,
    "end": 284
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 285,
    "end": 286
  },
  {
    "type": "Keyword",
    "value": "break",
    "start": 307,
    "end": 312
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 329,
    "end": 330
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 347,
    "end": 349
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 350,
    "end": 351
  },
  {
    "type": "Identifier",
    "value": "v",
    "start": 351,
    "end": 352
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 353,
    "end": 356
  },
  {
    "type": "Numeric",
    "value": "4",
    "start": 357,
    "end": 358
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 358,
    "end": 359
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 360,
    "end": 361
  },
  {
    "type": "Keyword",
    "value": "continue",
    "start": 382,
    "end": 390
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 407,
    "end": 408
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 421,
    "end": 422
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 431,
    "end": 432
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
    "value": "v",
    "start": 446,
    "end": 447
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 448,
    "end": 451
  },
  {
    "type": "Numeric",
    "value": "5",
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
    "value": "break",
    "start": 469,
    "end": 474
  },
  {
    "type": "Identifier",
    "value": "label",
    "start": 475,
    "end": 480
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 480,
    "end": 481
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 490,
    "end": 491
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 500,
    "end": 502
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 503,
    "end": 504
  },
  {
    "type": "Identifier",
    "value": "v",
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
    "type": "Numeric",
    "value": "6",
    "start": 510,
    "end": 511
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 511,
    "end": 512
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 513,
    "end": 514
  },
  {
    "type": "Keyword",
    "value": "continue",
    "start": 527,
    "end": 535
  },
  {
    "type": "Identifier",
    "value": "label",
    "start": 536,
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
    "type": "Keyword",
    "value": "if",
    "start": 561,
    "end": 563
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 564,
    "end": 565
  },
  {
    "type": "Identifier",
    "value": "v",
    "start": 565,
    "end": 566
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 567,
    "end": 570
  },
  {
    "type": "Numeric",
    "value": "7",
    "start": 571,
    "end": 572
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 572,
    "end": 573
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 574,
    "end": 575
  },
  {
    "type": "Keyword",
    "value": "break",
    "start": 588,
    "end": 593
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 593,
    "end": 594
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 603,
    "end": 604
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 613,
    "end": 615
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 616,
    "end": 617
  },
  {
    "type": "Identifier",
    "value": "v",
    "start": 617,
    "end": 618
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 619,
    "end": 622
  },
  {
    "type": "Numeric",
    "value": "8",
    "start": 623,
    "end": 624
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 624,
    "end": 625
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 626,
    "end": 627
  },
  {
    "type": "Keyword",
    "value": "continue",
    "start": 640,
    "end": 648
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 648,
    "end": 649
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 658,
    "end": 659
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 664,
    "end": 665
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 671,
    "end": 676
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 677,
    "end": 678
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 679,
    "end": 680
  },
  {
    "type": "Keyword",
    "value": "static",
    "start": 689,
    "end": 695
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 696,
    "end": 697
  },
  {
    "type": "Identifier",
    "value": "outer",
    "start": 710,
    "end": 715
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 715,
    "end": 716
  },
  {
    "type": "Keyword",
    "value": "break",
    "start": 717,
    "end": 722
  },
  {
    "type": "Identifier",
    "value": "outer",
    "start": 723,
    "end": 728
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 728,
    "end": 729
  },
  {
    "type": "Identifier",
    "value": "loop",
    "start": 751,
    "end": 755
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 755,
    "end": 756
  },
  {
    "type": "Keyword",
    "value": "while",
    "start": 757,
    "end": 762
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 763,
    "end": 764
  },
  {
    "type": "Identifier",
    "value": "v",
    "start": 764,
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
    "start": 785,
    "end": 787
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 788,
    "end": 789
  },
  {
    "type": "Identifier",
    "value": "v",
    "start": 789,
    "end": 790
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 791,
    "end": 794
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 795,
    "end": 796
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 796,
    "end": 797
  },
  {
    "type": "Keyword",
    "value": "break",
    "start": 798,
    "end": 803
  },
  {
    "type": "Identifier",
    "value": "loop",
    "start": 804,
    "end": 808
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 808,
    "end": 809
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 835,
    "end": 837
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 838,
    "end": 839
  },
  {
    "type": "Identifier",
    "value": "v",
    "start": 839,
    "end": 840
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 841,
    "end": 844
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 845,
    "end": 846
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 846,
    "end": 847
  },
  {
    "type": "Keyword",
    "value": "continue",
    "start": 848,
    "end": 856
  },
  {
    "type": "Identifier",
    "value": "loop",
    "start": 857,
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
    "start": 888,
    "end": 890
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 891,
    "end": 892
  },
  {
    "type": "Identifier",
    "value": "v",
    "start": 892,
    "end": 893
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 894,
    "end": 897
  },
  {
    "type": "Numeric",
    "value": "3",
    "start": 898,
    "end": 899
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 899,
    "end": 900
  },
  {
    "type": "Keyword",
    "value": "break",
    "start": 901,
    "end": 906
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 906,
    "end": 907
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 933,
    "end": 935
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 936,
    "end": 937
  },
  {
    "type": "Identifier",
    "value": "v",
    "start": 937,
    "end": 938
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 939,
    "end": 942
  },
  {
    "type": "Numeric",
    "value": "4",
    "start": 943,
    "end": 944
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 944,
    "end": 945
  },
  {
    "type": "Keyword",
    "value": "continue",
    "start": 946,
    "end": 954
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 954,
    "end": 955
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 977,
    "end": 978
  },
  {
    "type": "Keyword",
    "value": "switch",
    "start": 991,
    "end": 997
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 998,
    "end": 999
  },
  {
    "type": "Identifier",
    "value": "v",
    "start": 999,
    "end": 1000
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1000,
    "end": 1001
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1002,
    "end": 1003
  },
  {
    "type": "Keyword",
    "value": "default",
    "start": 1020,
    "end": 1027
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1027,
    "end": 1028
  },
  {
    "type": "Keyword",
    "value": "break",
    "start": 1029,
    "end": 1034
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1034,
    "end": 1035
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1057,
    "end": 1058
  },
  {
    "type": "Punctuator",
    "value": "}",
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
    "type": "Punctuator",
    "value": "}",
    "start": 1075,
    "end": 1076
  }
]
```
