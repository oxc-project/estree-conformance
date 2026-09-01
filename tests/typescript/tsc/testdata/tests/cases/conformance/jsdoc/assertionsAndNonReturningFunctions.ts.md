__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
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
            "name": "assert",
            "optional": false,
            "typeAnnotation": null,
            "start": 96,
            "end": 102
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "expression": false,
            "async": false,
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "check",
                "optional": false,
                "typeAnnotation": null,
                "start": 105,
                "end": 110
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
                      "name": "check",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 125,
                      "end": 130
                    },
                    "prefix": true,
                    "start": 124,
                    "end": 130
                  },
                  "consequent": {
                    "type": "ThrowStatement",
                    "argument": {
                      "type": "NewExpression",
                      "callee": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Error",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 142,
                        "end": 147
                      },
                      "typeArguments": null,
                      "arguments": [],
                      "start": 138,
                      "end": 149
                    },
                    "start": 132,
                    "end": 150
                  },
                  "alternate": null,
                  "start": 120,
                  "end": 150
                }
              ],
              "start": 114,
              "end": 152
            },
            "id": null,
            "generator": false,
            "start": 105,
            "end": 152
          },
          "definite": false,
          "start": 96,
          "end": 152
        }
      ],
      "declare": false,
      "start": 90,
      "end": 152
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "assertIsString",
        "optional": false,
        "typeAnnotation": null,
        "start": 215,
        "end": 229
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
          "start": 230,
          "end": 231
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
                    "start": 252,
                    "end": 253
                  },
                  "prefix": true,
                  "start": 245,
                  "end": 253
                },
                "operator": "===",
                "right": {
                  "type": "Literal",
                  "value": "string",
                  "raw": "\"string\"",
                  "start": 258,
                  "end": 266
                },
                "start": 245,
                "end": 266
              },
              "prefix": true,
              "start": 243,
              "end": 267
            },
            "consequent": {
              "type": "ThrowStatement",
              "argument": {
                "type": "NewExpression",
                "callee": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Error",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 279,
                  "end": 284
                },
                "typeArguments": null,
                "arguments": [],
                "start": 275,
                "end": 286
              },
              "start": 269,
              "end": 287
            },
            "alternate": null,
            "start": 239,
            "end": 287
          }
        ],
        "start": 233,
        "end": 289
      },
      "expression": false,
      "start": 206,
      "end": 289
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "assert2",
        "optional": false,
        "typeAnnotation": null,
        "start": 361,
        "end": 368
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "check",
          "optional": false,
          "typeAnnotation": null,
          "start": 369,
          "end": 374
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
                "name": "check",
                "optional": false,
                "typeAnnotation": null,
                "start": 387,
                "end": 392
              },
              "prefix": true,
              "start": 386,
              "end": 392
            },
            "consequent": {
              "type": "ThrowStatement",
              "argument": {
                "type": "NewExpression",
                "callee": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Error",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 404,
                  "end": 409
                },
                "typeArguments": null,
                "arguments": [],
                "start": 400,
                "end": 411
              },
              "start": 394,
              "end": 412
            },
            "alternate": null,
            "start": 382,
            "end": 412
          }
        ],
        "start": 376,
        "end": 414
      },
      "expression": false,
      "start": 352,
      "end": 414
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "fail",
        "optional": false,
        "typeAnnotation": null,
        "start": 453,
        "end": 457
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
            "type": "ThrowStatement",
            "argument": {
              "type": "NewExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "Error",
                "optional": false,
                "typeAnnotation": null,
                "start": 476,
                "end": 481
              },
              "typeArguments": null,
              "arguments": [],
              "start": 472,
              "end": 483
            },
            "start": 466,
            "end": 484
          }
        ],
        "start": 460,
        "end": 486
      },
      "expression": false,
      "start": 444,
      "end": 486
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f1",
        "optional": false,
        "typeAnnotation": null,
        "start": 522,
        "end": 524
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
          "start": 525,
          "end": 526
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
                  "start": 540,
                  "end": 544
                },
                "prefix": true,
                "start": 539,
                "end": 544
              },
              "prefix": true,
              "start": 538,
              "end": 544
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
                      "name": "assert",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 556,
                      "end": 562
                    },
                    "typeArguments": null,
                    "arguments": [
                      {
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
                            "start": 570,
                            "end": 571
                          },
                          "prefix": true,
                          "start": 563,
                          "end": 571
                        },
                        "operator": "===",
                        "right": {
                          "type": "Literal",
                          "value": "string",
                          "raw": "\"string\"",
                          "start": 576,
                          "end": 584
                        },
                        "start": 563,
                        "end": 584
                      }
                    ],
                    "optional": false,
                    "start": 556,
                    "end": 585
                  },
                  "directive": null,
                  "start": 556,
                  "end": 586
                },
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 595,
                      "end": 596
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "length",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 597,
                      "end": 603
                    },
                    "optional": false,
                    "computed": false,
                    "start": 595,
                    "end": 603
                  },
                  "directive": null,
                  "start": 595,
                  "end": 604
                }
              ],
              "start": 546,
              "end": 610
            },
            "alternate": null,
            "start": 534,
            "end": 610
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
                  "start": 621,
                  "end": 625
                },
                "prefix": true,
                "start": 620,
                "end": 625
              },
              "prefix": true,
              "start": 619,
              "end": 625
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
                      "name": "assert2",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 637,
                      "end": 644
                    },
                    "typeArguments": null,
                    "arguments": [
                      {
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
                            "start": 652,
                            "end": 653
                          },
                          "prefix": true,
                          "start": 645,
                          "end": 653
                        },
                        "operator": "===",
                        "right": {
                          "type": "Literal",
                          "value": "string",
                          "raw": "\"string\"",
                          "start": 658,
                          "end": 666
                        },
                        "start": 645,
                        "end": 666
                      }
                    ],
                    "optional": false,
                    "start": 637,
                    "end": 667
                  },
                  "directive": null,
                  "start": 637,
                  "end": 668
                },
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 677,
                      "end": 678
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "length",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 679,
                      "end": 685
                    },
                    "optional": false,
                    "computed": false,
                    "start": 677,
                    "end": 685
                  },
                  "directive": null,
                  "start": 677,
                  "end": 686
                }
              ],
              "start": 627,
              "end": 692
            },
            "alternate": null,
            "start": 615,
            "end": 692
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
                  "start": 703,
                  "end": 707
                },
                "prefix": true,
                "start": 702,
                "end": 707
              },
              "prefix": true,
              "start": 701,
              "end": 707
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
                      "name": "assertIsString",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 719,
                      "end": 733
                    },
                    "typeArguments": null,
                    "arguments": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 734,
                        "end": 735
                      }
                    ],
                    "optional": false,
                    "start": 719,
                    "end": 736
                  },
                  "directive": null,
                  "start": 719,
                  "end": 737
                },
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 746,
                      "end": 747
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "length",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 748,
                      "end": 754
                    },
                    "optional": false,
                    "computed": false,
                    "start": 746,
                    "end": 754
                  },
                  "directive": null,
                  "start": 746,
                  "end": 755
                }
              ],
              "start": 709,
              "end": 761
            },
            "alternate": null,
            "start": 697,
            "end": 761
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
                  "start": 772,
                  "end": 776
                },
                "prefix": true,
                "start": 771,
                "end": 776
              },
              "prefix": true,
              "start": 770,
              "end": 776
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
                      "name": "fail",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 788,
                      "end": 792
                    },
                    "typeArguments": null,
                    "arguments": [],
                    "optional": false,
                    "start": 788,
                    "end": 794
                  },
                  "directive": null,
                  "start": 788,
                  "end": 795
                },
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 804,
                    "end": 805
                  },
                  "directive": null,
                  "start": 804,
                  "end": 806
                }
              ],
              "start": 778,
              "end": 828
            },
            "alternate": null,
            "start": 766,
            "end": 828
          }
        ],
        "start": 528,
        "end": 830
      },
      "expression": false,
      "start": 513,
      "end": 830
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f2",
        "optional": false,
        "typeAnnotation": null,
        "start": 872,
        "end": 874
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "b",
          "optional": false,
          "typeAnnotation": null,
          "start": 875,
          "end": 876
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "SwitchStatement",
            "discriminant": {
              "type": "Identifier",
              "decorators": [],
              "name": "b",
              "optional": false,
              "typeAnnotation": null,
              "start": 892,
              "end": 893
            },
            "cases": [
              {
                "type": "SwitchCase",
                "test": {
                  "type": "Literal",
                  "value": true,
                  "raw": "true",
                  "start": 910,
                  "end": 914
                },
                "consequent": [
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "Literal",
                      "value": 1,
                      "raw": "1",
                      "start": 923,
                      "end": 924
                    },
                    "start": 916,
                    "end": 925
                  }
                ],
                "start": 905,
                "end": 925
              },
              {
                "type": "SwitchCase",
                "test": {
                  "type": "Literal",
                  "value": false,
                  "raw": "false",
                  "start": 939,
                  "end": 944
                },
                "consequent": [
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "Literal",
                      "value": 0,
                      "raw": "0",
                      "start": 953,
                      "end": 954
                    },
                    "start": 946,
                    "end": 955
                  }
                ],
                "start": 934,
                "end": 955
              }
            ],
            "start": 884,
            "end": 961
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "Identifier",
              "decorators": [],
              "name": "b",
              "optional": false,
              "typeAnnotation": null,
              "start": 966,
              "end": 967
            },
            "directive": null,
            "start": 966,
            "end": 968
          }
        ],
        "start": 878,
        "end": 986
      },
      "expression": false,
      "start": 863,
      "end": 986
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 90,
  "end": 986
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "const",
    "start": 90,
    "end": 95
  },
  {
    "type": "Identifier",
    "value": "assert",
    "start": 96,
    "end": 102
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 103,
    "end": 104
  },
  {
    "type": "Identifier",
    "value": "check",
    "start": 105,
    "end": 110
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 111,
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
    "value": "if",
    "start": 120,
    "end": 122
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 123,
    "end": 124
  },
  {
    "type": "Punctuator",
    "value": "!",
    "start": 124,
    "end": 125
  },
  {
    "type": "Identifier",
    "value": "check",
    "start": 125,
    "end": 130
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 130,
    "end": 131
  },
  {
    "type": "Keyword",
    "value": "throw",
    "start": 132,
    "end": 137
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 138,
    "end": 141
  },
  {
    "type": "Identifier",
    "value": "Error",
    "start": 142,
    "end": 147
  },
  {
    "type": "Punctuator",
    "value": "(",
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
    "start": 151,
    "end": 152
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 206,
    "end": 214
  },
  {
    "type": "Identifier",
    "value": "assertIsString",
    "start": 215,
    "end": 229
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 229,
    "end": 230
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 230,
    "end": 231
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 231,
    "end": 232
  },
  {
    "type": "Punctuator",
    "value": "{",
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
    "type": "Punctuator",
    "value": "!",
    "start": 243,
    "end": 244
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 244,
    "end": 245
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 245,
    "end": 251
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 252,
    "end": 253
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 254,
    "end": 257
  },
  {
    "type": "String",
    "value": "\"string\"",
    "start": 258,
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
    "value": ")",
    "start": 267,
    "end": 268
  },
  {
    "type": "Keyword",
    "value": "throw",
    "start": 269,
    "end": 274
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 275,
    "end": 278
  },
  {
    "type": "Identifier",
    "value": "Error",
    "start": 279,
    "end": 284
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 284,
    "end": 285
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 285,
    "end": 286
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 286,
    "end": 287
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 288,
    "end": 289
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 352,
    "end": 360
  },
  {
    "type": "Identifier",
    "value": "assert2",
    "start": 361,
    "end": 368
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 368,
    "end": 369
  },
  {
    "type": "Identifier",
    "value": "check",
    "start": 369,
    "end": 374
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 374,
    "end": 375
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 376,
    "end": 377
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 382,
    "end": 384
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 385,
    "end": 386
  },
  {
    "type": "Punctuator",
    "value": "!",
    "start": 386,
    "end": 387
  },
  {
    "type": "Identifier",
    "value": "check",
    "start": 387,
    "end": 392
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 392,
    "end": 393
  },
  {
    "type": "Keyword",
    "value": "throw",
    "start": 394,
    "end": 399
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 400,
    "end": 403
  },
  {
    "type": "Identifier",
    "value": "Error",
    "start": 404,
    "end": 409
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 409,
    "end": 410
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 410,
    "end": 411
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 411,
    "end": 412
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 413,
    "end": 414
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 444,
    "end": 452
  },
  {
    "type": "Identifier",
    "value": "fail",
    "start": 453,
    "end": 457
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 457,
    "end": 458
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 458,
    "end": 459
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 460,
    "end": 461
  },
  {
    "type": "Keyword",
    "value": "throw",
    "start": 466,
    "end": 471
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 472,
    "end": 475
  },
  {
    "type": "Identifier",
    "value": "Error",
    "start": 476,
    "end": 481
  },
  {
    "type": "Punctuator",
    "value": "(",
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
    "value": ";",
    "start": 483,
    "end": 484
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 485,
    "end": 486
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 513,
    "end": 521
  },
  {
    "type": "Identifier",
    "value": "f1",
    "start": 522,
    "end": 524
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 524,
    "end": 525
  },
  {
    "type": "Identifier",
    "value": "x",
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
    "type": "Keyword",
    "value": "if",
    "start": 534,
    "end": 536
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 537,
    "end": 538
  },
  {
    "type": "Punctuator",
    "value": "!",
    "start": 538,
    "end": 539
  },
  {
    "type": "Punctuator",
    "value": "!",
    "start": 539,
    "end": 540
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 540,
    "end": 544
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 544,
    "end": 545
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 546,
    "end": 547
  },
  {
    "type": "Identifier",
    "value": "assert",
    "start": 556,
    "end": 562
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 562,
    "end": 563
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 563,
    "end": 569
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 570,
    "end": 571
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 572,
    "end": 575
  },
  {
    "type": "String",
    "value": "\"string\"",
    "start": 576,
    "end": 584
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 584,
    "end": 585
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 585,
    "end": 586
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 595,
    "end": 596
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 596,
    "end": 597
  },
  {
    "type": "Identifier",
    "value": "length",
    "start": 597,
    "end": 603
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 603,
    "end": 604
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 609,
    "end": 610
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 615,
    "end": 617
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 618,
    "end": 619
  },
  {
    "type": "Punctuator",
    "value": "!",
    "start": 619,
    "end": 620
  },
  {
    "type": "Punctuator",
    "value": "!",
    "start": 620,
    "end": 621
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 621,
    "end": 625
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 625,
    "end": 626
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 627,
    "end": 628
  },
  {
    "type": "Identifier",
    "value": "assert2",
    "start": 637,
    "end": 644
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 644,
    "end": 645
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 645,
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
    "value": "===",
    "start": 654,
    "end": 657
  },
  {
    "type": "String",
    "value": "\"string\"",
    "start": 658,
    "end": 666
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 666,
    "end": 667
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 667,
    "end": 668
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 677,
    "end": 678
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 678,
    "end": 679
  },
  {
    "type": "Identifier",
    "value": "length",
    "start": 679,
    "end": 685
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 685,
    "end": 686
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 691,
    "end": 692
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 697,
    "end": 699
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 700,
    "end": 701
  },
  {
    "type": "Punctuator",
    "value": "!",
    "start": 701,
    "end": 702
  },
  {
    "type": "Punctuator",
    "value": "!",
    "start": 702,
    "end": 703
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 703,
    "end": 707
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 707,
    "end": 708
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 709,
    "end": 710
  },
  {
    "type": "Identifier",
    "value": "assertIsString",
    "start": 719,
    "end": 733
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 733,
    "end": 734
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 734,
    "end": 735
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 735,
    "end": 736
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 736,
    "end": 737
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 746,
    "end": 747
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 747,
    "end": 748
  },
  {
    "type": "Identifier",
    "value": "length",
    "start": 748,
    "end": 754
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 754,
    "end": 755
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 760,
    "end": 761
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 766,
    "end": 768
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 769,
    "end": 770
  },
  {
    "type": "Punctuator",
    "value": "!",
    "start": 770,
    "end": 771
  },
  {
    "type": "Punctuator",
    "value": "!",
    "start": 771,
    "end": 772
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 772,
    "end": 776
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 776,
    "end": 777
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 778,
    "end": 779
  },
  {
    "type": "Identifier",
    "value": "fail",
    "start": 788,
    "end": 792
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 792,
    "end": 793
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 793,
    "end": 794
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 794,
    "end": 795
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 804,
    "end": 805
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 805,
    "end": 806
  },
  {
    "type": "Punctuator",
    "value": "}",
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
    "type": "Keyword",
    "value": "function",
    "start": 863,
    "end": 871
  },
  {
    "type": "Identifier",
    "value": "f2",
    "start": 872,
    "end": 874
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 874,
    "end": 875
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 875,
    "end": 876
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 876,
    "end": 877
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 878,
    "end": 879
  },
  {
    "type": "Keyword",
    "value": "switch",
    "start": 884,
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
    "value": "b",
    "start": 892,
    "end": 893
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 893,
    "end": 894
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 895,
    "end": 896
  },
  {
    "type": "Keyword",
    "value": "case",
    "start": 905,
    "end": 909
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 910,
    "end": 914
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 914,
    "end": 915
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 916,
    "end": 922
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 923,
    "end": 924
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 924,
    "end": 925
  },
  {
    "type": "Keyword",
    "value": "case",
    "start": 934,
    "end": 938
  },
  {
    "type": "Boolean",
    "value": "false",
    "start": 939,
    "end": 944
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 944,
    "end": 945
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 946,
    "end": 952
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 953,
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
    "start": 960,
    "end": 961
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 966,
    "end": 967
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 967,
    "end": 968
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 985,
    "end": 986
  }
]
```
