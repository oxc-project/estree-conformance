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
        "name": "fail",
        "optional": false,
        "typeAnnotation": null,
        "start": 9,
        "end": 13
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "message",
          "optional": true,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSStringKeyword",
              "start": 24,
              "end": 30
            },
            "start": 22,
            "end": 30
          },
          "start": 14,
          "end": 30
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSNeverKeyword",
          "start": 33,
          "end": 38
        },
        "start": 31,
        "end": 38
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
                "start": 55,
                "end": 60
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "message",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 61,
                  "end": 68
                }
              ],
              "start": 51,
              "end": 69
            },
            "start": 45,
            "end": 70
          }
        ],
        "start": 39,
        "end": 72
      },
      "expression": false,
      "start": 0,
      "end": 72
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f01",
        "optional": false,
        "typeAnnotation": null,
        "start": 83,
        "end": 86
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
              "type": "TSUnionType",
              "types": [
                {
                  "type": "TSStringKeyword",
                  "start": 90,
                  "end": 96
                },
                {
                  "type": "TSUndefinedKeyword",
                  "start": 99,
                  "end": 108
                }
              ],
              "start": 90,
              "end": 108
            },
            "start": 88,
            "end": 108
          },
          "start": 87,
          "end": 108
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
                "start": 120,
                "end": 121
              },
              "operator": "===",
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "undefined",
                "optional": false,
                "typeAnnotation": null,
                "start": 126,
                "end": 135
              },
              "start": 120,
              "end": 135
            },
            "consequent": {
              "type": "ExpressionStatement",
              "expression": {
                "type": "CallExpression",
                "callee": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "fail",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 137,
                  "end": 141
                },
                "typeArguments": null,
                "arguments": [
                  {
                    "type": "Literal",
                    "value": "undefined argument",
                    "raw": "\"undefined argument\"",
                    "start": 142,
                    "end": 162
                  }
                ],
                "optional": false,
                "start": 137,
                "end": 163
              },
              "directive": null,
              "start": 137,
              "end": 164
            },
            "alternate": null,
            "start": 116,
            "end": 164
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
                "start": 169,
                "end": 170
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "length",
                "optional": false,
                "typeAnnotation": null,
                "start": 171,
                "end": 177
              },
              "optional": false,
              "computed": false,
              "start": 169,
              "end": 177
            },
            "directive": null,
            "start": 169,
            "end": 178
          }
        ],
        "start": 110,
        "end": 191
      },
      "expression": false,
      "start": 74,
      "end": 191
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f02",
        "optional": false,
        "typeAnnotation": null,
        "start": 202,
        "end": 205
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
              "type": "TSNumberKeyword",
              "start": 209,
              "end": 215
            },
            "start": 207,
            "end": 215
          },
          "start": 206,
          "end": 215
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSNumberKeyword",
          "start": 218,
          "end": 224
        },
        "start": 216,
        "end": 224
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
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 235,
                "end": 236
              },
              "operator": ">=",
              "right": {
                "type": "Literal",
                "value": 0,
                "raw": "0",
                "start": 240,
                "end": 241
              },
              "start": 235,
              "end": 241
            },
            "consequent": {
              "type": "ReturnStatement",
              "argument": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 250,
                "end": 251
              },
              "start": 243,
              "end": 252
            },
            "alternate": null,
            "start": 231,
            "end": 252
          },
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
                "start": 257,
                "end": 261
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Literal",
                  "value": "negative number",
                  "raw": "\"negative number\"",
                  "start": 262,
                  "end": 279
                }
              ],
              "optional": false,
              "start": 257,
              "end": 280
            },
            "directive": null,
            "start": 257,
            "end": 281
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 286,
              "end": 287
            },
            "directive": null,
            "start": 286,
            "end": 288
          }
        ],
        "start": 225,
        "end": 306
      },
      "expression": false,
      "start": 193,
      "end": 306
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f03",
        "optional": false,
        "typeAnnotation": null,
        "start": 317,
        "end": 320
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
              "type": "TSStringKeyword",
              "start": 324,
              "end": 330
            },
            "start": 322,
            "end": 330
          },
          "start": 321,
          "end": 330
        }
      ],
      "returnType": null,
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
              "start": 338,
              "end": 339
            },
            "directive": null,
            "start": 338,
            "end": 340
          },
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
                "start": 356,
                "end": 360
              },
              "typeArguments": null,
              "arguments": [],
              "optional": false,
              "start": 356,
              "end": 362
            },
            "directive": null,
            "start": 356,
            "end": 363
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 368,
              "end": 369
            },
            "directive": null,
            "start": 368,
            "end": 370
          }
        ],
        "start": 332,
        "end": 388
      },
      "expression": false,
      "start": 308,
      "end": 388
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f11",
        "optional": false,
        "typeAnnotation": null,
        "start": 399,
        "end": 402
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
              "type": "TSUnionType",
              "types": [
                {
                  "type": "TSStringKeyword",
                  "start": 406,
                  "end": 412
                },
                {
                  "type": "TSUndefinedKeyword",
                  "start": 415,
                  "end": 424
                }
              ],
              "start": 406,
              "end": 424
            },
            "start": 404,
            "end": 424
          },
          "start": 403,
          "end": 424
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "fail",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSFunctionType",
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "message",
                  "optional": true,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 443,
                      "end": 449
                    },
                    "start": 441,
                    "end": 449
                  },
                  "start": 433,
                  "end": 449
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSNeverKeyword",
                  "start": 454,
                  "end": 459
                },
                "start": 451,
                "end": 459
              },
              "start": 432,
              "end": 459
            },
            "start": 430,
            "end": 459
          },
          "start": 426,
          "end": 459
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
                "start": 471,
                "end": 472
              },
              "operator": "===",
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "undefined",
                "optional": false,
                "typeAnnotation": null,
                "start": 477,
                "end": 486
              },
              "start": 471,
              "end": 486
            },
            "consequent": {
              "type": "ExpressionStatement",
              "expression": {
                "type": "CallExpression",
                "callee": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "fail",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 488,
                  "end": 492
                },
                "typeArguments": null,
                "arguments": [
                  {
                    "type": "Literal",
                    "value": "undefined argument",
                    "raw": "\"undefined argument\"",
                    "start": 493,
                    "end": 513
                  }
                ],
                "optional": false,
                "start": 488,
                "end": 514
              },
              "directive": null,
              "start": 488,
              "end": 515
            },
            "alternate": null,
            "start": 467,
            "end": 515
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
                "start": 520,
                "end": 521
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "length",
                "optional": false,
                "typeAnnotation": null,
                "start": 522,
                "end": 528
              },
              "optional": false,
              "computed": false,
              "start": 520,
              "end": 528
            },
            "directive": null,
            "start": 520,
            "end": 529
          }
        ],
        "start": 461,
        "end": 542
      },
      "expression": false,
      "start": 390,
      "end": 542
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f12",
        "optional": false,
        "typeAnnotation": null,
        "start": 553,
        "end": 556
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
              "type": "TSNumberKeyword",
              "start": 560,
              "end": 566
            },
            "start": 558,
            "end": 566
          },
          "start": 557,
          "end": 566
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "fail",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSFunctionType",
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "message",
                  "optional": true,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 585,
                      "end": 591
                    },
                    "start": 583,
                    "end": 591
                  },
                  "start": 575,
                  "end": 591
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSNeverKeyword",
                  "start": 596,
                  "end": 601
                },
                "start": 593,
                "end": 601
              },
              "start": 574,
              "end": 601
            },
            "start": 572,
            "end": 601
          },
          "start": 568,
          "end": 601
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSNumberKeyword",
          "start": 604,
          "end": 610
        },
        "start": 602,
        "end": 610
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
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 621,
                "end": 622
              },
              "operator": ">=",
              "right": {
                "type": "Literal",
                "value": 0,
                "raw": "0",
                "start": 626,
                "end": 627
              },
              "start": 621,
              "end": 627
            },
            "consequent": {
              "type": "ReturnStatement",
              "argument": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 636,
                "end": 637
              },
              "start": 629,
              "end": 638
            },
            "alternate": null,
            "start": 617,
            "end": 638
          },
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
                "start": 643,
                "end": 647
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Literal",
                  "value": "negative number",
                  "raw": "\"negative number\"",
                  "start": 648,
                  "end": 665
                }
              ],
              "optional": false,
              "start": 643,
              "end": 666
            },
            "directive": null,
            "start": 643,
            "end": 667
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 672,
              "end": 673
            },
            "directive": null,
            "start": 672,
            "end": 674
          }
        ],
        "start": 611,
        "end": 692
      },
      "expression": false,
      "start": 544,
      "end": 692
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f13",
        "optional": false,
        "typeAnnotation": null,
        "start": 703,
        "end": 706
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
              "type": "TSStringKeyword",
              "start": 710,
              "end": 716
            },
            "start": 708,
            "end": 716
          },
          "start": 707,
          "end": 716
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "fail",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSFunctionType",
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "message",
                  "optional": true,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 735,
                      "end": 741
                    },
                    "start": 733,
                    "end": 741
                  },
                  "start": 725,
                  "end": 741
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSNeverKeyword",
                  "start": 746,
                  "end": 751
                },
                "start": 743,
                "end": 751
              },
              "start": 724,
              "end": 751
            },
            "start": 722,
            "end": 751
          },
          "start": 718,
          "end": 751
        }
      ],
      "returnType": null,
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
              "start": 759,
              "end": 760
            },
            "directive": null,
            "start": 759,
            "end": 761
          },
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
                "start": 777,
                "end": 781
              },
              "typeArguments": null,
              "arguments": [],
              "optional": false,
              "start": 777,
              "end": 783
            },
            "directive": null,
            "start": 777,
            "end": 784
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 789,
              "end": 790
            },
            "directive": null,
            "start": 789,
            "end": 791
          }
        ],
        "start": 753,
        "end": 809
      },
      "expression": false,
      "start": 694,
      "end": 809
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Debug",
        "optional": false,
        "typeAnnotation": null,
        "start": 821,
        "end": 826
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "TSDeclareFunction",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "fail",
                "optional": false,
                "typeAnnotation": null,
                "start": 857,
                "end": 861
              },
              "generator": false,
              "async": false,
              "declare": true,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "message",
                  "optional": true,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 872,
                      "end": 878
                    },
                    "start": 870,
                    "end": 878
                  },
                  "start": 862,
                  "end": 878
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSNeverKeyword",
                  "start": 881,
                  "end": 886
                },
                "start": 879,
                "end": 886
              },
              "body": null,
              "expression": false,
              "start": 840,
              "end": 887
            },
            "specifiers": [],
            "source": null,
            "exportKind": "type",
            "attributes": [],
            "start": 833,
            "end": 887
          }
        ],
        "start": 827,
        "end": 889
      },
      "kind": "namespace",
      "declare": false,
      "global": false,
      "start": 811,
      "end": 889
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f21",
        "optional": false,
        "typeAnnotation": null,
        "start": 900,
        "end": 903
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
              "type": "TSUnionType",
              "types": [
                {
                  "type": "TSStringKeyword",
                  "start": 907,
                  "end": 913
                },
                {
                  "type": "TSUndefinedKeyword",
                  "start": 916,
                  "end": 925
                }
              ],
              "start": 907,
              "end": 925
            },
            "start": 905,
            "end": 925
          },
          "start": 904,
          "end": 925
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
                "start": 937,
                "end": 938
              },
              "operator": "===",
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "undefined",
                "optional": false,
                "typeAnnotation": null,
                "start": 943,
                "end": 952
              },
              "start": 937,
              "end": 952
            },
            "consequent": {
              "type": "ExpressionStatement",
              "expression": {
                "type": "CallExpression",
                "callee": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Debug",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 954,
                    "end": 959
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "fail",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 960,
                    "end": 964
                  },
                  "optional": false,
                  "computed": false,
                  "start": 954,
                  "end": 964
                },
                "typeArguments": null,
                "arguments": [
                  {
                    "type": "Literal",
                    "value": "undefined argument",
                    "raw": "\"undefined argument\"",
                    "start": 965,
                    "end": 985
                  }
                ],
                "optional": false,
                "start": 954,
                "end": 986
              },
              "directive": null,
              "start": 954,
              "end": 987
            },
            "alternate": null,
            "start": 933,
            "end": 987
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
                "start": 992,
                "end": 993
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "length",
                "optional": false,
                "typeAnnotation": null,
                "start": 994,
                "end": 1000
              },
              "optional": false,
              "computed": false,
              "start": 992,
              "end": 1000
            },
            "directive": null,
            "start": 992,
            "end": 1001
          }
        ],
        "start": 927,
        "end": 1014
      },
      "expression": false,
      "start": 891,
      "end": 1014
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f22",
        "optional": false,
        "typeAnnotation": null,
        "start": 1025,
        "end": 1028
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
              "type": "TSNumberKeyword",
              "start": 1032,
              "end": 1038
            },
            "start": 1030,
            "end": 1038
          },
          "start": 1029,
          "end": 1038
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSNumberKeyword",
          "start": 1041,
          "end": 1047
        },
        "start": 1039,
        "end": 1047
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
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 1058,
                "end": 1059
              },
              "operator": ">=",
              "right": {
                "type": "Literal",
                "value": 0,
                "raw": "0",
                "start": 1063,
                "end": 1064
              },
              "start": 1058,
              "end": 1064
            },
            "consequent": {
              "type": "ReturnStatement",
              "argument": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 1073,
                "end": 1074
              },
              "start": 1066,
              "end": 1075
            },
            "alternate": null,
            "start": 1054,
            "end": 1075
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "CallExpression",
              "callee": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Debug",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1080,
                  "end": 1085
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "fail",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1086,
                  "end": 1090
                },
                "optional": false,
                "computed": false,
                "start": 1080,
                "end": 1090
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Literal",
                  "value": "negative number",
                  "raw": "\"negative number\"",
                  "start": 1091,
                  "end": 1108
                }
              ],
              "optional": false,
              "start": 1080,
              "end": 1109
            },
            "directive": null,
            "start": 1080,
            "end": 1110
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 1115,
              "end": 1116
            },
            "directive": null,
            "start": 1115,
            "end": 1117
          }
        ],
        "start": 1048,
        "end": 1135
      },
      "expression": false,
      "start": 1016,
      "end": 1135
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f23",
        "optional": false,
        "typeAnnotation": null,
        "start": 1146,
        "end": 1149
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
              "type": "TSStringKeyword",
              "start": 1153,
              "end": 1159
            },
            "start": 1151,
            "end": 1159
          },
          "start": 1150,
          "end": 1159
        }
      ],
      "returnType": null,
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
              "start": 1167,
              "end": 1168
            },
            "directive": null,
            "start": 1167,
            "end": 1169
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "CallExpression",
              "callee": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Debug",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1185,
                  "end": 1190
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "fail",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1191,
                  "end": 1195
                },
                "optional": false,
                "computed": false,
                "start": 1185,
                "end": 1195
              },
              "typeArguments": null,
              "arguments": [],
              "optional": false,
              "start": 1185,
              "end": 1197
            },
            "directive": null,
            "start": 1185,
            "end": 1198
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 1203,
              "end": 1204
            },
            "directive": null,
            "start": 1203,
            "end": 1205
          }
        ],
        "start": 1161,
        "end": 1223
      },
      "expression": false,
      "start": 1137,
      "end": 1223
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f24",
        "optional": false,
        "typeAnnotation": null,
        "start": 1234,
        "end": 1237
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
              "type": "TSStringKeyword",
              "start": 1241,
              "end": 1247
            },
            "start": 1239,
            "end": 1247
          },
          "start": 1238,
          "end": 1247
        }
      ],
      "returnType": null,
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
              "start": 1255,
              "end": 1256
            },
            "directive": null,
            "start": 1255,
            "end": 1257
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "CallExpression",
              "callee": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Debug",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1275,
                  "end": 1280
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "fail",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1282,
                  "end": 1286
                },
                "optional": false,
                "computed": false,
                "start": 1274,
                "end": 1286
              },
              "typeArguments": null,
              "arguments": [],
              "optional": false,
              "start": 1273,
              "end": 1289
            },
            "directive": null,
            "start": 1273,
            "end": 1290
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 1295,
              "end": 1296
            },
            "directive": null,
            "start": 1295,
            "end": 1297
          }
        ],
        "start": 1249,
        "end": 1315
      },
      "expression": false,
      "start": 1225,
      "end": 1315
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Test",
        "optional": false,
        "typeAnnotation": null,
        "start": 1323,
        "end": 1327
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
              "name": "fail",
              "optional": false,
              "typeAnnotation": null,
              "start": 1334,
              "end": 1338
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
                  "name": "message",
                  "optional": true,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 1349,
                      "end": 1355
                    },
                    "start": 1347,
                    "end": 1355
                  },
                  "start": 1339,
                  "end": 1355
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSNeverKeyword",
                  "start": 1358,
                  "end": 1363
                },
                "start": 1356,
                "end": 1363
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
                        "start": 1384,
                        "end": 1389
                      },
                      "typeArguments": null,
                      "arguments": [
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "message",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1390,
                          "end": 1397
                        }
                      ],
                      "start": 1380,
                      "end": 1398
                    },
                    "start": 1374,
                    "end": 1399
                  }
                ],
                "start": 1364,
                "end": 1405
              },
              "expression": false,
              "start": 1338,
              "end": 1405
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 1334,
            "end": 1405
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "f1",
              "optional": false,
              "typeAnnotation": null,
              "start": 1410,
              "end": 1412
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
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSUnionType",
                      "types": [
                        {
                          "type": "TSStringKeyword",
                          "start": 1416,
                          "end": 1422
                        },
                        {
                          "type": "TSUndefinedKeyword",
                          "start": 1425,
                          "end": 1434
                        }
                      ],
                      "start": 1416,
                      "end": 1434
                    },
                    "start": 1414,
                    "end": 1434
                  },
                  "start": 1413,
                  "end": 1434
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
                        "start": 1450,
                        "end": 1451
                      },
                      "operator": "===",
                      "right": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "undefined",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1456,
                        "end": 1465
                      },
                      "start": 1450,
                      "end": 1465
                    },
                    "consequent": {
                      "type": "ExpressionStatement",
                      "expression": {
                        "type": "CallExpression",
                        "callee": {
                          "type": "MemberExpression",
                          "object": {
                            "type": "ThisExpression",
                            "start": 1467,
                            "end": 1471
                          },
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "fail",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1472,
                            "end": 1476
                          },
                          "optional": false,
                          "computed": false,
                          "start": 1467,
                          "end": 1476
                        },
                        "typeArguments": null,
                        "arguments": [
                          {
                            "type": "Literal",
                            "value": "undefined argument",
                            "raw": "\"undefined argument\"",
                            "start": 1477,
                            "end": 1497
                          }
                        ],
                        "optional": false,
                        "start": 1467,
                        "end": 1498
                      },
                      "directive": null,
                      "start": 1467,
                      "end": 1499
                    },
                    "alternate": null,
                    "start": 1446,
                    "end": 1499
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
                        "start": 1508,
                        "end": 1509
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "length",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1510,
                        "end": 1516
                      },
                      "optional": false,
                      "computed": false,
                      "start": 1508,
                      "end": 1516
                    },
                    "directive": null,
                    "start": 1508,
                    "end": 1517
                  }
                ],
                "start": 1436,
                "end": 1534
              },
              "expression": false,
              "start": 1412,
              "end": 1534
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 1410,
            "end": 1534
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "f2",
              "optional": false,
              "typeAnnotation": null,
              "start": 1539,
              "end": 1541
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
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 1545,
                      "end": 1551
                    },
                    "start": 1543,
                    "end": 1551
                  },
                  "start": 1542,
                  "end": 1551
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSNumberKeyword",
                  "start": 1554,
                  "end": 1560
                },
                "start": 1552,
                "end": 1560
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
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1575,
                        "end": 1576
                      },
                      "operator": ">=",
                      "right": {
                        "type": "Literal",
                        "value": 0,
                        "raw": "0",
                        "start": 1580,
                        "end": 1581
                      },
                      "start": 1575,
                      "end": 1581
                    },
                    "consequent": {
                      "type": "ReturnStatement",
                      "argument": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1590,
                        "end": 1591
                      },
                      "start": 1583,
                      "end": 1592
                    },
                    "alternate": null,
                    "start": 1571,
                    "end": 1592
                  },
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "CallExpression",
                      "callee": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "ThisExpression",
                          "start": 1601,
                          "end": 1605
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "fail",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1606,
                          "end": 1610
                        },
                        "optional": false,
                        "computed": false,
                        "start": 1601,
                        "end": 1610
                      },
                      "typeArguments": null,
                      "arguments": [
                        {
                          "type": "Literal",
                          "value": "negative number",
                          "raw": "\"negative number\"",
                          "start": 1611,
                          "end": 1628
                        }
                      ],
                      "optional": false,
                      "start": 1601,
                      "end": 1629
                    },
                    "directive": null,
                    "start": 1601,
                    "end": 1630
                  },
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1639,
                      "end": 1640
                    },
                    "directive": null,
                    "start": 1639,
                    "end": 1641
                  }
                ],
                "start": 1561,
                "end": 1663
              },
              "expression": false,
              "start": 1541,
              "end": 1663
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 1539,
            "end": 1663
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "f3",
              "optional": false,
              "typeAnnotation": null,
              "start": 1668,
              "end": 1670
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
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 1674,
                      "end": 1680
                    },
                    "start": 1672,
                    "end": 1680
                  },
                  "start": 1671,
                  "end": 1680
                }
              ],
              "returnType": null,
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
                      "start": 1692,
                      "end": 1693
                    },
                    "directive": null,
                    "start": 1692,
                    "end": 1694
                  },
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "CallExpression",
                      "callee": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "ThisExpression",
                          "start": 1714,
                          "end": 1718
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "fail",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1719,
                          "end": 1723
                        },
                        "optional": false,
                        "computed": false,
                        "start": 1714,
                        "end": 1723
                      },
                      "typeArguments": null,
                      "arguments": [],
                      "optional": false,
                      "start": 1714,
                      "end": 1725
                    },
                    "directive": null,
                    "start": 1714,
                    "end": 1726
                  },
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1735,
                      "end": 1736
                    },
                    "directive": null,
                    "start": 1735,
                    "end": 1737
                  }
                ],
                "start": 1682,
                "end": 1759
              },
              "expression": false,
              "start": 1670,
              "end": 1759
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 1668,
            "end": 1759
          }
        ],
        "start": 1328,
        "end": 1761
      },
      "abstract": false,
      "declare": false,
      "start": 1317,
      "end": 1761
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f30",
        "optional": false,
        "typeAnnotation": null,
        "start": 1772,
        "end": 1775
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
              "type": "TSUnionType",
              "types": [
                {
                  "type": "TSStringKeyword",
                  "start": 1779,
                  "end": 1785
                },
                {
                  "type": "TSNumberKeyword",
                  "start": 1788,
                  "end": 1794
                },
                {
                  "type": "TSUndefinedKeyword",
                  "start": 1797,
                  "end": 1806
                }
              ],
              "start": 1779,
              "end": 1806
            },
            "start": 1777,
            "end": 1806
          },
          "start": 1776,
          "end": 1806
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
                "type": "UnaryExpression",
                "operator": "typeof",
                "argument": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1825,
                  "end": 1826
                },
                "prefix": true,
                "start": 1818,
                "end": 1826
              },
              "operator": "===",
              "right": {
                "type": "Literal",
                "value": "string",
                "raw": "\"string\"",
                "start": 1831,
                "end": 1839
              },
              "start": 1818,
              "end": 1839
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
                      "start": 1851,
                      "end": 1855
                    },
                    "typeArguments": null,
                    "arguments": [],
                    "optional": false,
                    "start": 1851,
                    "end": 1857
                  },
                  "directive": null,
                  "start": 1851,
                  "end": 1858
                },
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1867,
                    "end": 1868
                  },
                  "directive": null,
                  "start": 1867,
                  "end": 1869
                }
              ],
              "start": 1841,
              "end": 1891
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
                    "start": 1911,
                    "end": 1912
                  },
                  "directive": null,
                  "start": 1911,
                  "end": 1913
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
                      "start": 1949,
                      "end": 1950
                    },
                    "operator": "!==",
                    "right": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "undefined",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1955,
                      "end": 1964
                    },
                    "start": 1949,
                    "end": 1964
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
                          "start": 1980,
                          "end": 1981
                        },
                        "directive": null,
                        "start": 1980,
                        "end": 1982
                      },
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
                            "start": 2006,
                            "end": 2010
                          },
                          "typeArguments": null,
                          "arguments": [],
                          "optional": false,
                          "start": 2006,
                          "end": 2012
                        },
                        "directive": null,
                        "start": 2006,
                        "end": 2013
                      },
                      {
                        "type": "ExpressionStatement",
                        "expression": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 2026,
                          "end": 2027
                        },
                        "directive": null,
                        "start": 2026,
                        "end": 2028
                      }
                    ],
                    "start": 1966,
                    "end": 2054
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
                          "start": 2082,
                          "end": 2083
                        },
                        "directive": null,
                        "start": 2082,
                        "end": 2084
                      },
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
                            "start": 2111,
                            "end": 2115
                          },
                          "typeArguments": null,
                          "arguments": [],
                          "optional": false,
                          "start": 2111,
                          "end": 2117
                        },
                        "directive": null,
                        "start": 2111,
                        "end": 2118
                      },
                      {
                        "type": "ExpressionStatement",
                        "expression": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 2131,
                          "end": 2132
                        },
                        "directive": null,
                        "start": 2131,
                        "end": 2133
                      }
                    ],
                    "start": 2068,
                    "end": 2159
                  },
                  "start": 1945,
                  "end": 2159
                },
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2168,
                    "end": 2169
                  },
                  "directive": null,
                  "start": 2168,
                  "end": 2170
                }
              ],
              "start": 1901,
              "end": 2192
            },
            "start": 1814,
            "end": 2192
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 2197,
              "end": 2198
            },
            "directive": null,
            "start": 2197,
            "end": 2199
          }
        ],
        "start": 1808,
        "end": 2217
      },
      "expression": false,
      "start": 1763,
      "end": 2217
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f31",
        "optional": false,
        "typeAnnotation": null,
        "start": 2228,
        "end": 2231
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
              "members": [
                {
                  "type": "TSPropertySignature",
                  "computed": false,
                  "optional": false,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2237,
                    "end": 2238
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSUnionType",
                      "types": [
                        {
                          "type": "TSStringKeyword",
                          "start": 2240,
                          "end": 2246
                        },
                        {
                          "type": "TSNumberKeyword",
                          "start": 2249,
                          "end": 2255
                        }
                      ],
                      "start": 2240,
                      "end": 2255
                    },
                    "start": 2238,
                    "end": 2255
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 2237,
                  "end": 2255
                }
              ],
              "start": 2235,
              "end": 2257
            },
            "start": 2233,
            "end": 2257
          },
          "start": 2232,
          "end": 2257
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
                "type": "UnaryExpression",
                "operator": "typeof",
                "argument": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2276,
                    "end": 2277
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2278,
                    "end": 2279
                  },
                  "optional": false,
                  "computed": false,
                  "start": 2276,
                  "end": 2279
                },
                "prefix": true,
                "start": 2269,
                "end": 2279
              },
              "operator": "===",
              "right": {
                "type": "Literal",
                "value": "string",
                "raw": "\"string\"",
                "start": 2284,
                "end": 2292
              },
              "start": 2269,
              "end": 2292
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
                      "start": 2304,
                      "end": 2308
                    },
                    "typeArguments": null,
                    "arguments": [],
                    "optional": false,
                    "start": 2304,
                    "end": 2310
                  },
                  "directive": null,
                  "start": 2304,
                  "end": 2311
                },
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2320,
                    "end": 2321
                  },
                  "directive": null,
                  "start": 2320,
                  "end": 2322
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
                      "start": 2349,
                      "end": 2350
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "a",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2351,
                      "end": 2352
                    },
                    "optional": false,
                    "computed": false,
                    "start": 2349,
                    "end": 2352
                  },
                  "directive": null,
                  "start": 2349,
                  "end": 2353
                }
              ],
              "start": 2294,
              "end": 2375
            },
            "alternate": null,
            "start": 2265,
            "end": 2375
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 2380,
              "end": 2381
            },
            "directive": null,
            "start": 2380,
            "end": 2382
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
                "start": 2416,
                "end": 2417
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null,
                "start": 2418,
                "end": 2419
              },
              "optional": false,
              "computed": false,
              "start": 2416,
              "end": 2419
            },
            "directive": null,
            "start": 2416,
            "end": 2420
          }
        ],
        "start": 2259,
        "end": 2433
      },
      "expression": false,
      "start": 2219,
      "end": 2433
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f40",
        "optional": false,
        "typeAnnotation": null,
        "start": 2444,
        "end": 2447
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
              "type": "TSNumberKeyword",
              "start": 2451,
              "end": 2457
            },
            "start": 2449,
            "end": 2457
          },
          "start": 2448,
          "end": 2457
        }
      ],
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
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2479,
                    "end": 2480
                  },
                  "directive": null,
                  "start": 2479,
                  "end": 2481
                },
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
                      "start": 2490,
                      "end": 2494
                    },
                    "typeArguments": null,
                    "arguments": [],
                    "optional": false,
                    "start": 2490,
                    "end": 2496
                  },
                  "directive": null,
                  "start": 2490,
                  "end": 2497
                },
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2506,
                    "end": 2507
                  },
                  "directive": null,
                  "start": 2506,
                  "end": 2508
                }
              ],
              "start": 2469,
              "end": 2530
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
                    "start": 2553,
                    "end": 2554
                  },
                  "directive": null,
                  "start": 2553,
                  "end": 2555
                },
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
                      "start": 2564,
                      "end": 2568
                    },
                    "typeArguments": null,
                    "arguments": [],
                    "optional": false,
                    "start": 2564,
                    "end": 2570
                  },
                  "directive": null,
                  "start": 2564,
                  "end": 2571
                },
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2580,
                    "end": 2581
                  },
                  "directive": null,
                  "start": 2580,
                  "end": 2582
                }
              ],
              "start": 2543,
              "end": 2604
            },
            "start": 2465,
            "end": 2604
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 2609,
              "end": 2610
            },
            "directive": null,
            "start": 2609,
            "end": 2611
          }
        ],
        "start": 2459,
        "end": 2629
      },
      "expression": false,
      "start": 2435,
      "end": 2629
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f41",
        "optional": false,
        "typeAnnotation": null,
        "start": 2640,
        "end": 2643
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
              "type": "TSNumberKeyword",
              "start": 2647,
              "end": 2653
            },
            "start": 2645,
            "end": 2653
          },
          "start": 2644,
          "end": 2653
        }
      ],
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
                }
              ],
              "start": 2665,
              "end": 2683
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
                    "start": 2706,
                    "end": 2707
                  },
                  "directive": null,
                  "start": 2706,
                  "end": 2708
                },
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
                      "start": 2717,
                      "end": 2721
                    },
                    "typeArguments": null,
                    "arguments": [],
                    "optional": false,
                    "start": 2717,
                    "end": 2723
                  },
                  "directive": null,
                  "start": 2717,
                  "end": 2724
                },
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2733,
                    "end": 2734
                  },
                  "directive": null,
                  "start": 2733,
                  "end": 2735
                }
              ],
              "start": 2696,
              "end": 2757
            },
            "start": 2661,
            "end": 2757
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 2762,
              "end": 2763
            },
            "directive": null,
            "start": 2762,
            "end": 2764
          }
        ],
        "start": 2655,
        "end": 2782
      },
      "expression": false,
      "start": 2631,
      "end": 2782
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f42",
        "optional": false,
        "typeAnnotation": null,
        "start": 2793,
        "end": 2796
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
              "type": "TSNumberKeyword",
              "start": 2800,
              "end": 2806
            },
            "start": 2798,
            "end": 2806
          },
          "start": 2797,
          "end": 2806
        }
      ],
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
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2828,
                    "end": 2829
                  },
                  "directive": null,
                  "start": 2828,
                  "end": 2830
                },
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
                      "start": 2839,
                      "end": 2843
                    },
                    "typeArguments": null,
                    "arguments": [],
                    "optional": false,
                    "start": 2839,
                    "end": 2845
                  },
                  "directive": null,
                  "start": 2839,
                  "end": 2846
                },
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2855,
                    "end": 2856
                  },
                  "directive": null,
                  "start": 2855,
                  "end": 2857
                }
              ],
              "start": 2818,
              "end": 2879
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
                    "start": 2902,
                    "end": 2903
                  },
                  "directive": null,
                  "start": 2902,
                  "end": 2904
                }
              ],
              "start": 2892,
              "end": 2910
            },
            "start": 2814,
            "end": 2910
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 2915,
              "end": 2916
            },
            "directive": null,
            "start": 2915,
            "end": 2917
          }
        ],
        "start": 2808,
        "end": 2935
      },
      "expression": false,
      "start": 2784,
      "end": 2935
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f43",
        "optional": false,
        "typeAnnotation": null,
        "start": 2946,
        "end": 2949
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
                  "name": "fail",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2964,
                  "end": 2968
                },
                "init": {
                  "type": "ArrowFunctionExpression",
                  "expression": false,
                  "async": false,
                  "typeParameters": null,
                  "params": [],
                  "returnType": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSNeverKeyword",
                      "start": 2975,
                      "end": 2980
                    },
                    "start": 2973,
                    "end": 2980
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
                            "start": 2996,
                            "end": 3001
                          },
                          "typeArguments": null,
                          "arguments": [],
                          "start": 2992,
                          "end": 3003
                        },
                        "start": 2986,
                        "end": 3004
                      }
                    ],
                    "start": 2984,
                    "end": 3006
                  },
                  "id": null,
                  "generator": false,
                  "start": 2971,
                  "end": 3006
                },
                "definite": false,
                "start": 2964,
                "end": 3006
              }
            ],
            "declare": false,
            "start": 2958,
            "end": 3007
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
                  "name": "f",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 3018,
                  "end": 3019
                },
                "init": {
                  "type": "ArrayExpression",
                  "elements": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "fail",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 3023,
                      "end": 3027
                    }
                  ],
                  "start": 3022,
                  "end": 3028
                },
                "definite": false,
                "start": 3018,
                "end": 3028
              }
            ],
            "declare": false,
            "start": 3012,
            "end": 3029
          },
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
                "start": 3034,
                "end": 3038
              },
              "typeArguments": null,
              "arguments": [],
              "optional": false,
              "start": 3034,
              "end": 3040
            },
            "directive": null,
            "start": 3034,
            "end": 3041
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "CallExpression",
              "callee": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "f",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 3086,
                  "end": 3087
                },
                "property": {
                  "type": "Literal",
                  "value": 0,
                  "raw": "0",
                  "start": 3088,
                  "end": 3089
                },
                "optional": false,
                "computed": true,
                "start": 3086,
                "end": 3090
              },
              "typeArguments": null,
              "arguments": [],
              "optional": false,
              "start": 3086,
              "end": 3092
            },
            "directive": null,
            "start": 3086,
            "end": 3093
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "Identifier",
              "decorators": [],
              "name": "f",
              "optional": false,
              "typeAnnotation": null,
              "start": 3132,
              "end": 3133
            },
            "directive": null,
            "start": 3132,
            "end": 3134
          }
        ],
        "start": 2952,
        "end": 3136
      },
      "expression": false,
      "start": 2937,
      "end": 3136
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSInterfaceDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "Component",
          "optional": false,
          "typeAnnotation": null,
          "start": 3177,
          "end": 3186
        },
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
                "start": 3187,
                "end": 3188
              },
              "constraint": {
                "type": "TSObjectKeyword",
                "start": 3197,
                "end": 3203
              },
              "default": {
                "type": "TSAnyKeyword",
                "start": 3206,
                "end": 3209
              },
              "in": false,
              "out": false,
              "const": false,
              "start": 3187,
              "end": 3209
            }
          ],
          "start": 3186,
          "end": 3210
        },
        "extends": [],
        "body": {
          "type": "TSInterfaceBody",
          "body": [
            {
              "type": "TSPropertySignature",
              "computed": false,
              "optional": true,
              "readonly": false,
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "attrName",
                "optional": false,
                "typeAnnotation": null,
                "start": 3214,
                "end": 3222
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSStringKeyword",
                  "start": 3225,
                  "end": 3231
                },
                "start": 3223,
                "end": 3231
              },
              "accessibility": null,
              "static": false,
              "start": 3214,
              "end": 3232
            },
            {
              "type": "TSPropertySignature",
              "computed": false,
              "optional": false,
              "readonly": false,
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "data",
                "optional": false,
                "typeAnnotation": null,
                "start": 3234,
                "end": 3238
              },
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
                    "start": 3240,
                    "end": 3241
                  },
                  "typeArguments": null,
                  "start": 3240,
                  "end": 3241
                },
                "start": 3238,
                "end": 3241
              },
              "accessibility": null,
              "static": false,
              "start": 3234,
              "end": 3242
            },
            {
              "type": "TSPropertySignature",
              "computed": false,
              "optional": true,
              "readonly": false,
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "dependencies",
                "optional": false,
                "typeAnnotation": null,
                "start": 3244,
                "end": 3256
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSArrayType",
                  "elementType": {
                    "type": "TSStringKeyword",
                    "start": 3259,
                    "end": 3265
                  },
                  "start": 3259,
                  "end": 3267
                },
                "start": 3257,
                "end": 3267
              },
              "accessibility": null,
              "static": false,
              "start": 3244,
              "end": 3268
            },
            {
              "type": "TSPropertySignature",
              "computed": false,
              "optional": false,
              "readonly": false,
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "el",
                "optional": false,
                "typeAnnotation": null,
                "start": 3270,
                "end": 3272
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSAnyKeyword",
                  "start": 3274,
                  "end": 3277
                },
                "start": 3272,
                "end": 3277
              },
              "accessibility": null,
              "static": false,
              "start": 3270,
              "end": 3278
            },
            {
              "type": "TSPropertySignature",
              "computed": false,
              "optional": false,
              "readonly": false,
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "id",
                "optional": false,
                "typeAnnotation": null,
                "start": 3280,
                "end": 3282
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSStringKeyword",
                  "start": 3284,
                  "end": 3290
                },
                "start": 3282,
                "end": 3290
              },
              "accessibility": null,
              "static": false,
              "start": 3280,
              "end": 3291
            },
            {
              "type": "TSPropertySignature",
              "computed": false,
              "optional": true,
              "readonly": false,
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "multiple",
                "optional": false,
                "typeAnnotation": null,
                "start": 3293,
                "end": 3301
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSBooleanKeyword",
                  "start": 3304,
                  "end": 3311
                },
                "start": 3302,
                "end": 3311
              },
              "accessibility": null,
              "static": false,
              "start": 3293,
              "end": 3312
            },
            {
              "type": "TSPropertySignature",
              "computed": false,
              "optional": false,
              "readonly": false,
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "name",
                "optional": false,
                "typeAnnotation": null,
                "start": 3314,
                "end": 3318
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSStringKeyword",
                  "start": 3320,
                  "end": 3326
                },
                "start": 3318,
                "end": 3326
              },
              "accessibility": null,
              "static": false,
              "start": 3314,
              "end": 3327
            },
            {
              "type": "TSPropertySignature",
              "computed": false,
              "optional": false,
              "readonly": false,
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "schema",
                "optional": false,
                "typeAnnotation": null,
                "start": 3329,
                "end": 3335
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSUnknownKeyword",
                  "start": 3337,
                  "end": 3344
                },
                "start": 3335,
                "end": 3344
              },
              "accessibility": null,
              "static": false,
              "start": 3329,
              "end": 3345
            },
            {
              "type": "TSPropertySignature",
              "computed": false,
              "optional": false,
              "readonly": false,
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "system",
                "optional": false,
                "typeAnnotation": null,
                "start": 3347,
                "end": 3353
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSAnyKeyword",
                  "start": 3355,
                  "end": 3358
                },
                "start": 3353,
                "end": 3358
              },
              "accessibility": null,
              "static": false,
              "start": 3347,
              "end": 3359
            },
            {
              "type": "TSMethodSignature",
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "init",
                "optional": false,
                "typeAnnotation": null,
                "start": 3362,
                "end": 3366
              },
              "computed": false,
              "optional": false,
              "kind": "method",
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "data",
                  "optional": true,
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
                        "start": 3374,
                        "end": 3375
                      },
                      "typeArguments": null,
                      "start": 3374,
                      "end": 3375
                    },
                    "start": 3372,
                    "end": 3375
                  },
                  "start": 3367,
                  "end": 3375
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSVoidKeyword",
                  "start": 3378,
                  "end": 3382
                },
                "start": 3376,
                "end": 3382
              },
              "accessibility": null,
              "readonly": false,
              "static": false,
              "start": 3362,
              "end": 3383
            },
            {
              "type": "TSMethodSignature",
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "pause",
                "optional": false,
                "typeAnnotation": null,
                "start": 3385,
                "end": 3390
              },
              "computed": false,
              "optional": false,
              "kind": "method",
              "typeParameters": null,
              "params": [],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSVoidKeyword",
                  "start": 3394,
                  "end": 3398
                },
                "start": 3392,
                "end": 3398
              },
              "accessibility": null,
              "readonly": false,
              "static": false,
              "start": 3385,
              "end": 3399
            },
            {
              "type": "TSMethodSignature",
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "play",
                "optional": false,
                "typeAnnotation": null,
                "start": 3401,
                "end": 3405
              },
              "computed": false,
              "optional": false,
              "kind": "method",
              "typeParameters": null,
              "params": [],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSVoidKeyword",
                  "start": 3409,
                  "end": 3413
                },
                "start": 3407,
                "end": 3413
              },
              "accessibility": null,
              "readonly": false,
              "static": false,
              "start": 3401,
              "end": 3414
            },
            {
              "type": "TSMethodSignature",
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "remove",
                "optional": false,
                "typeAnnotation": null,
                "start": 3416,
                "end": 3422
              },
              "computed": false,
              "optional": false,
              "kind": "method",
              "typeParameters": null,
              "params": [],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSVoidKeyword",
                  "start": 3426,
                  "end": 3430
                },
                "start": 3424,
                "end": 3430
              },
              "accessibility": null,
              "readonly": false,
              "static": false,
              "start": 3416,
              "end": 3431
            },
            {
              "type": "TSMethodSignature",
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "tick",
                "optional": false,
                "typeAnnotation": null,
                "start": 3433,
                "end": 3437
              },
              "computed": false,
              "optional": true,
              "kind": "method",
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "time",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 3445,
                      "end": 3451
                    },
                    "start": 3443,
                    "end": 3451
                  },
                  "start": 3439,
                  "end": 3451
                },
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "timeDelta",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 3464,
                      "end": 3470
                    },
                    "start": 3462,
                    "end": 3470
                  },
                  "start": 3453,
                  "end": 3470
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSVoidKeyword",
                  "start": 3473,
                  "end": 3477
                },
                "start": 3471,
                "end": 3477
              },
              "accessibility": null,
              "readonly": false,
              "static": false,
              "start": 3433,
              "end": 3478
            },
            {
              "type": "TSMethodSignature",
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "update",
                "optional": false,
                "typeAnnotation": null,
                "start": 3480,
                "end": 3486
              },
              "computed": false,
              "optional": false,
              "kind": "method",
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "oldData",
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
                        "start": 3496,
                        "end": 3497
                      },
                      "typeArguments": null,
                      "start": 3496,
                      "end": 3497
                    },
                    "start": 3494,
                    "end": 3497
                  },
                  "start": 3487,
                  "end": 3497
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSVoidKeyword",
                  "start": 3500,
                  "end": 3504
                },
                "start": 3498,
                "end": 3504
              },
              "accessibility": null,
              "readonly": false,
              "static": false,
              "start": 3480,
              "end": 3505
            },
            {
              "type": "TSMethodSignature",
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "updateSchema",
                "optional": false,
                "typeAnnotation": null,
                "start": 3507,
                "end": 3519
              },
              "computed": false,
              "optional": true,
              "kind": "method",
              "typeParameters": null,
              "params": [],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSVoidKeyword",
                  "start": 3524,
                  "end": 3528
                },
                "start": 3522,
                "end": 3528
              },
              "accessibility": null,
              "readonly": false,
              "static": false,
              "start": 3507,
              "end": 3529
            },
            {
              "type": "TSMethodSignature",
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "extendSchema",
                "optional": false,
                "typeAnnotation": null,
                "start": 3532,
                "end": 3544
              },
              "computed": false,
              "optional": false,
              "kind": "method",
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "update",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSUnknownKeyword",
                      "start": 3553,
                      "end": 3560
                    },
                    "start": 3551,
                    "end": 3560
                  },
                  "start": 3545,
                  "end": 3560
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSVoidKeyword",
                  "start": 3563,
                  "end": 3567
                },
                "start": 3561,
                "end": 3567
              },
              "accessibility": null,
              "readonly": false,
              "static": false,
              "start": 3532,
              "end": 3568
            },
            {
              "type": "TSMethodSignature",
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "flushToDOM",
                "optional": false,
                "typeAnnotation": null,
                "start": 3570,
                "end": 3580
              },
              "computed": false,
              "optional": false,
              "kind": "method",
              "typeParameters": null,
              "params": [],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSVoidKeyword",
                  "start": 3584,
                  "end": 3588
                },
                "start": 3582,
                "end": 3588
              },
              "accessibility": null,
              "readonly": false,
              "static": false,
              "start": 3570,
              "end": 3589
            }
          ],
          "start": 3211,
          "end": 3591
        },
        "declare": false,
        "start": 3167,
        "end": 3591
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": [],
      "start": 3160,
      "end": 3591
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSInterfaceDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "ComponentConstructor",
          "optional": false,
          "typeAnnotation": null,
          "start": 3610,
          "end": 3630
        },
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
                "start": 3631,
                "end": 3632
              },
              "constraint": {
                "type": "TSObjectKeyword",
                "start": 3641,
                "end": 3647
              },
              "default": null,
              "in": false,
              "out": false,
              "const": false,
              "start": 3631,
              "end": 3647
            }
          ],
          "start": 3630,
          "end": 3648
        },
        "extends": [],
        "body": {
          "type": "TSInterfaceBody",
          "body": [
            {
              "type": "TSConstructSignatureDeclaration",
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "el",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSUnknownKeyword",
                      "start": 3661,
                      "end": 3668
                    },
                    "start": 3659,
                    "end": 3668
                  },
                  "start": 3657,
                  "end": 3668
                },
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "attrValue",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 3681,
                      "end": 3687
                    },
                    "start": 3679,
                    "end": 3687
                  },
                  "start": 3670,
                  "end": 3687
                },
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "id",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 3693,
                      "end": 3699
                    },
                    "start": 3691,
                    "end": 3699
                  },
                  "start": 3689,
                  "end": 3699
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSIntersectionType",
                  "types": [
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "T",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 3702,
                        "end": 3703
                      },
                      "typeArguments": null,
                      "start": 3702,
                      "end": 3703
                    },
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Component",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 3706,
                        "end": 3715
                      },
                      "typeArguments": null,
                      "start": 3706,
                      "end": 3715
                    }
                  ],
                  "start": 3702,
                  "end": 3715
                },
                "start": 3700,
                "end": 3715
              },
              "start": 3652,
              "end": 3716
            },
            {
              "type": "TSPropertySignature",
              "computed": false,
              "optional": false,
              "readonly": false,
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "prototype",
                "optional": false,
                "typeAnnotation": null,
                "start": 3718,
                "end": 3727
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSIntersectionType",
                  "types": [
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "T",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 3729,
                        "end": 3730
                      },
                      "typeArguments": null,
                      "start": 3729,
                      "end": 3730
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
                            "name": "name",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 3737,
                            "end": 3741
                          },
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSStringKeyword",
                              "start": 3743,
                              "end": 3749
                            },
                            "start": 3741,
                            "end": 3749
                          },
                          "accessibility": null,
                          "static": false,
                          "start": 3737,
                          "end": 3750
                        },
                        {
                          "type": "TSPropertySignature",
                          "computed": false,
                          "optional": false,
                          "readonly": false,
                          "key": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "system",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 3753,
                            "end": 3759
                          },
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSUnknownKeyword",
                              "start": 3761,
                              "end": 3768
                            },
                            "start": 3759,
                            "end": 3768
                          },
                          "accessibility": null,
                          "static": false,
                          "start": 3753,
                          "end": 3769
                        },
                        {
                          "type": "TSMethodSignature",
                          "key": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "play",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 3772,
                            "end": 3776
                          },
                          "computed": false,
                          "optional": false,
                          "kind": "method",
                          "typeParameters": null,
                          "params": [],
                          "returnType": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSVoidKeyword",
                              "start": 3780,
                              "end": 3784
                            },
                            "start": 3778,
                            "end": 3784
                          },
                          "accessibility": null,
                          "readonly": false,
                          "static": false,
                          "start": 3772,
                          "end": 3785
                        },
                        {
                          "type": "TSMethodSignature",
                          "key": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "pause",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 3788,
                            "end": 3793
                          },
                          "computed": false,
                          "optional": false,
                          "kind": "method",
                          "typeParameters": null,
                          "params": [],
                          "returnType": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSVoidKeyword",
                              "start": 3797,
                              "end": 3801
                            },
                            "start": 3795,
                            "end": 3801
                          },
                          "accessibility": null,
                          "readonly": false,
                          "static": false,
                          "start": 3788,
                          "end": 3802
                        }
                      ],
                      "start": 3733,
                      "end": 3805
                    }
                  ],
                  "start": 3729,
                  "end": 3805
                },
                "start": 3727,
                "end": 3805
              },
              "accessibility": null,
              "static": false,
              "start": 3718,
              "end": 3806
            }
          ],
          "start": 3649,
          "end": 3808
        },
        "declare": false,
        "start": 3600,
        "end": 3808
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": [],
      "start": 3593,
      "end": 3808
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "registerComponent",
        "optional": false,
        "typeAnnotation": null,
        "start": 3827,
        "end": 3844
      },
      "generator": false,
      "async": false,
      "declare": true,
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
              "start": 3845,
              "end": 3846
            },
            "constraint": {
              "type": "TSObjectKeyword",
              "start": 3855,
              "end": 3861
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 3845,
            "end": 3861
          }
        ],
        "start": 3844,
        "end": 3862
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "name",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSStringKeyword",
              "start": 3874,
              "end": 3880
            },
            "start": 3872,
            "end": 3880
          },
          "start": 3868,
          "end": 3880
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "component",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "ComponentDefinition",
                "optional": false,
                "typeAnnotation": null,
                "start": 3897,
                "end": 3916
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "T",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 3917,
                      "end": 3918
                    },
                    "typeArguments": null,
                    "start": 3917,
                    "end": 3918
                  }
                ],
                "start": 3916,
                "end": 3919
              },
              "start": 3897,
              "end": 3919
            },
            "start": 3895,
            "end": 3919
          },
          "start": 3886,
          "end": 3919
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "ComponentConstructor",
            "optional": false,
            "typeAnnotation": null,
            "start": 3923,
            "end": 3943
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "params": [
              {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "T",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 3944,
                  "end": 3945
                },
                "typeArguments": null,
                "start": 3944,
                "end": 3945
              }
            ],
            "start": 3943,
            "end": 3946
          },
          "start": 3923,
          "end": 3946
        },
        "start": 3921,
        "end": 3946
      },
      "body": null,
      "expression": false,
      "start": 3810,
      "end": 3947
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSTypeAliasDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "ComponentDefinition",
          "optional": false,
          "typeAnnotation": null,
          "start": 3961,
          "end": 3980
        },
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
                "start": 3981,
                "end": 3982
              },
              "constraint": {
                "type": "TSObjectKeyword",
                "start": 3991,
                "end": 3997
              },
              "default": {
                "type": "TSObjectKeyword",
                "start": 4000,
                "end": 4006
              },
              "in": false,
              "out": false,
              "const": false,
              "start": 3981,
              "end": 4006
            }
          ],
          "start": 3980,
          "end": 4007
        },
        "typeAnnotation": {
          "type": "TSIntersectionType",
          "types": [
            {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null,
                "start": 4010,
                "end": 4011
              },
              "typeArguments": null,
              "start": 4010,
              "end": 4011
            },
            {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Partial",
                "optional": false,
                "typeAnnotation": null,
                "start": 4014,
                "end": 4021
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Component",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 4022,
                      "end": 4031
                    },
                    "typeArguments": null,
                    "start": 4022,
                    "end": 4031
                  }
                ],
                "start": 4021,
                "end": 4032
              },
              "start": 4014,
              "end": 4032
            },
            {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "ThisType",
                "optional": false,
                "typeAnnotation": null,
                "start": 4035,
                "end": 4043
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSIntersectionType",
                    "types": [
                      {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "T",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 4044,
                          "end": 4045
                        },
                        "typeArguments": null,
                        "start": 4044,
                        "end": 4045
                      },
                      {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Component",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 4048,
                          "end": 4057
                        },
                        "typeArguments": null,
                        "start": 4048,
                        "end": 4057
                      }
                    ],
                    "start": 4044,
                    "end": 4057
                  }
                ],
                "start": 4043,
                "end": 4058
              },
              "start": 4035,
              "end": 4058
            }
          ],
          "start": 4010,
          "end": 4058
        },
        "declare": false,
        "start": 3956,
        "end": 4059
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": [],
      "start": 3949,
      "end": 4059
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
            "name": "Component",
            "optional": false,
            "typeAnnotation": null,
            "start": 4067,
            "end": 4076
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "registerComponent",
              "optional": false,
              "typeAnnotation": null,
              "start": 4079,
              "end": 4096
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Literal",
                "value": "test-component",
                "raw": "'test-component'",
                "start": 4097,
                "end": 4113
              },
              {
                "type": "ObjectExpression",
                "properties": [
                  {
                    "type": "Property",
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "schema",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 4118,
                      "end": 4124
                    },
                    "value": {
                      "type": "ObjectExpression",
                      "properties": [
                        {
                          "type": "Property",
                          "kind": "init",
                          "key": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "myProperty",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 4130,
                            "end": 4140
                          },
                          "value": {
                            "type": "ObjectExpression",
                            "properties": [
                              {
                                "type": "Property",
                                "kind": "init",
                                "key": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "default",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 4147,
                                  "end": 4154
                                },
                                "value": {
                                  "type": "ArrayExpression",
                                  "elements": [],
                                  "start": 4156,
                                  "end": 4158
                                },
                                "method": false,
                                "shorthand": false,
                                "computed": false,
                                "optional": false,
                                "start": 4147,
                                "end": 4158
                              },
                              {
                                "type": "Property",
                                "kind": "init",
                                "key": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "parse",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 4163,
                                  "end": 4168
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
                                        "type": "ReturnStatement",
                                        "argument": {
                                          "type": "ArrayExpression",
                                          "elements": [
                                            {
                                              "type": "Literal",
                                              "value": true,
                                              "raw": "true",
                                              "start": 4185,
                                              "end": 4189
                                            }
                                          ],
                                          "start": 4184,
                                          "end": 4190
                                        },
                                        "start": 4177,
                                        "end": 4191
                                      }
                                    ],
                                    "start": 4171,
                                    "end": 4196
                                  },
                                  "expression": false,
                                  "start": 4168,
                                  "end": 4196
                                },
                                "method": true,
                                "shorthand": false,
                                "computed": false,
                                "optional": false,
                                "start": 4163,
                                "end": 4196
                              }
                            ],
                            "start": 4142,
                            "end": 4200
                          },
                          "method": false,
                          "shorthand": false,
                          "computed": false,
                          "optional": false,
                          "start": 4130,
                          "end": 4200
                        },
                        {
                          "type": "Property",
                          "kind": "init",
                          "key": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "string",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 4204,
                            "end": 4210
                          },
                          "value": {
                            "type": "ObjectExpression",
                            "properties": [
                              {
                                "type": "Property",
                                "kind": "init",
                                "key": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "type",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 4214,
                                  "end": 4218
                                },
                                "value": {
                                  "type": "Literal",
                                  "value": "string",
                                  "raw": "'string'",
                                  "start": 4220,
                                  "end": 4228
                                },
                                "method": false,
                                "shorthand": false,
                                "computed": false,
                                "optional": false,
                                "start": 4214,
                                "end": 4228
                              }
                            ],
                            "start": 4212,
                            "end": 4230
                          },
                          "method": false,
                          "shorthand": false,
                          "computed": false,
                          "optional": false,
                          "start": 4204,
                          "end": 4230
                        },
                        {
                          "type": "Property",
                          "kind": "init",
                          "key": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "num",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 4234,
                            "end": 4237
                          },
                          "value": {
                            "type": "Literal",
                            "value": 0,
                            "raw": "0",
                            "start": 4239,
                            "end": 4240
                          },
                          "method": false,
                          "shorthand": false,
                          "computed": false,
                          "optional": false,
                          "start": 4234,
                          "end": 4240
                        }
                      ],
                      "start": 4126,
                      "end": 4243
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 4118,
                    "end": 4243
                  },
                  {
                    "type": "Property",
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "init",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 4246,
                      "end": 4250
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
                            "type": "ExpressionStatement",
                            "expression": {
                              "type": "AssignmentExpression",
                              "operator": "=",
                              "left": {
                                "type": "MemberExpression",
                                "object": {
                                  "type": "MemberExpression",
                                  "object": {
                                    "type": "ThisExpression",
                                    "start": 4257,
                                    "end": 4261
                                  },
                                  "property": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "data",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 4262,
                                    "end": 4266
                                  },
                                  "optional": false,
                                  "computed": false,
                                  "start": 4257,
                                  "end": 4266
                                },
                                "property": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "num",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 4267,
                                  "end": 4270
                                },
                                "optional": false,
                                "computed": false,
                                "start": 4257,
                                "end": 4270
                              },
                              "right": {
                                "type": "Literal",
                                "value": 0,
                                "raw": "0",
                                "start": 4273,
                                "end": 4274
                              },
                              "start": 4257,
                              "end": 4274
                            },
                            "directive": null,
                            "start": 4257,
                            "end": 4275
                          },
                          {
                            "type": "ExpressionStatement",
                            "expression": {
                              "type": "CallExpression",
                              "callee": {
                                "type": "MemberExpression",
                                "object": {
                                  "type": "MemberExpression",
                                  "object": {
                                    "type": "ThisExpression",
                                    "start": 4278,
                                    "end": 4282
                                  },
                                  "property": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "el",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 4283,
                                    "end": 4285
                                  },
                                  "optional": false,
                                  "computed": false,
                                  "start": 4278,
                                  "end": 4285
                                },
                                "property": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "setAttribute",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 4286,
                                  "end": 4298
                                },
                                "optional": false,
                                "computed": false,
                                "start": 4278,
                                "end": 4298
                              },
                              "typeArguments": null,
                              "arguments": [
                                {
                                  "type": "Literal",
                                  "value": "custom-attribute",
                                  "raw": "'custom-attribute'",
                                  "start": 4299,
                                  "end": 4317
                                },
                                {
                                  "type": "Literal",
                                  "value": "custom-value",
                                  "raw": "'custom-value'",
                                  "start": 4319,
                                  "end": 4333
                                }
                              ],
                              "optional": false,
                              "start": 4278,
                              "end": 4334
                            },
                            "directive": null,
                            "start": 4278,
                            "end": 4335
                          }
                        ],
                        "start": 4253,
                        "end": 4338
                      },
                      "expression": false,
                      "start": 4250,
                      "end": 4338
                    },
                    "method": true,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 4246,
                    "end": 4338
                  },
                  {
                    "type": "Property",
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "update",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 4341,
                      "end": 4347
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
                        "body": [],
                        "start": 4350,
                        "end": 4352
                      },
                      "expression": false,
                      "start": 4347,
                      "end": 4352
                    },
                    "method": true,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 4341,
                    "end": 4352
                  },
                  {
                    "type": "Property",
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "tick",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 4355,
                      "end": 4359
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
                        "body": [],
                        "start": 4362,
                        "end": 4364
                      },
                      "expression": false,
                      "start": 4359,
                      "end": 4364
                    },
                    "method": true,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 4355,
                    "end": 4364
                  },
                  {
                    "type": "Property",
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "remove",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 4367,
                      "end": 4373
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
                        "body": [],
                        "start": 4376,
                        "end": 4378
                      },
                      "expression": false,
                      "start": 4373,
                      "end": 4378
                    },
                    "method": true,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 4367,
                    "end": 4378
                  },
                  {
                    "type": "Property",
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "pause",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 4381,
                      "end": 4386
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
                        "body": [],
                        "start": 4389,
                        "end": 4391
                      },
                      "expression": false,
                      "start": 4386,
                      "end": 4391
                    },
                    "method": true,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 4381,
                    "end": 4391
                  },
                  {
                    "type": "Property",
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "play",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 4394,
                      "end": 4398
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
                        "body": [],
                        "start": 4401,
                        "end": 4403
                      },
                      "expression": false,
                      "start": 4398,
                      "end": 4403
                    },
                    "method": true,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 4394,
                    "end": 4403
                  },
                  {
                    "type": "Property",
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "multiply",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 4407,
                      "end": 4415
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
                          "name": "f",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSNumberKeyword",
                              "start": 4419,
                              "end": 4425
                            },
                            "start": 4417,
                            "end": 4425
                          },
                          "start": 4416,
                          "end": 4425
                        }
                      ],
                      "returnType": null,
                      "body": {
                        "type": "BlockStatement",
                        "body": [
                          {
                            "type": "ReturnStatement",
                            "argument": {
                              "type": "BinaryExpression",
                              "left": {
                                "type": "BinaryExpression",
                                "left": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "f",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 4512,
                                  "end": 4513
                                },
                                "operator": "*",
                                "right": {
                                  "type": "MemberExpression",
                                  "object": {
                                    "type": "MemberExpression",
                                    "object": {
                                      "type": "ThisExpression",
                                      "start": 4516,
                                      "end": 4520
                                    },
                                    "property": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "data",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 4521,
                                      "end": 4525
                                    },
                                    "optional": false,
                                    "computed": false,
                                    "start": 4516,
                                    "end": 4525
                                  },
                                  "property": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "num",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 4526,
                                    "end": 4529
                                  },
                                  "optional": false,
                                  "computed": false,
                                  "start": 4516,
                                  "end": 4529
                                },
                                "start": 4512,
                                "end": 4529
                              },
                              "operator": "*",
                              "right": {
                                "type": "MemberExpression",
                                "object": {
                                  "type": "MemberExpression",
                                  "object": {
                                    "type": "TSNonNullExpression",
                                    "expression": {
                                      "type": "MemberExpression",
                                      "object": {
                                        "type": "ThisExpression",
                                        "start": 4532,
                                        "end": 4536
                                      },
                                      "property": {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "system",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 4537,
                                        "end": 4543
                                      },
                                      "optional": false,
                                      "computed": false,
                                      "start": 4532,
                                      "end": 4543
                                    },
                                    "start": 4532,
                                    "end": 4544
                                  },
                                  "property": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "data",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 4545,
                                    "end": 4549
                                  },
                                  "optional": false,
                                  "computed": false,
                                  "start": 4532,
                                  "end": 4549
                                },
                                "property": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "counter",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 4550,
                                  "end": 4557
                                },
                                "optional": false,
                                "computed": false,
                                "start": 4532,
                                "end": 4557
                              },
                              "start": 4512,
                              "end": 4557
                            },
                            "start": 4505,
                            "end": 4558
                          }
                        ],
                        "start": 4427,
                        "end": 4561
                      },
                      "expression": false,
                      "start": 4415,
                      "end": 4561
                    },
                    "method": true,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 4407,
                    "end": 4561
                  }
                ],
                "start": 4115,
                "end": 4563
              }
            ],
            "optional": false,
            "start": 4079,
            "end": 4564
          },
          "definite": false,
          "start": 4067,
          "end": 4564
        }
      ],
      "declare": false,
      "start": 4061,
      "end": 4565
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "MyThrowable",
        "optional": false,
        "typeAnnotation": null,
        "start": 4595,
        "end": 4606
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
              "name": "throw",
              "optional": false,
              "typeAnnotation": null,
              "start": 4613,
              "end": 4618
            },
            "value": {
              "type": "FunctionExpression",
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSNeverKeyword",
                  "start": 4622,
                  "end": 4627
                },
                "start": 4620,
                "end": 4627
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
                        "start": 4648,
                        "end": 4653
                      },
                      "typeArguments": null,
                      "arguments": [],
                      "start": 4644,
                      "end": 4655
                    },
                    "start": 4638,
                    "end": 4656
                  }
                ],
                "start": 4628,
                "end": 4662
              },
              "expression": false,
              "start": 4618,
              "end": 4662
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 4613,
            "end": 4662
          }
        ],
        "start": 4607,
        "end": 4664
      },
      "abstract": false,
      "declare": false,
      "start": 4589,
      "end": 4664
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "SuperThrowable",
        "optional": false,
        "typeAnnotation": null,
        "start": 4672,
        "end": 4686
      },
      "typeParameters": null,
      "superClass": {
        "type": "Identifier",
        "decorators": [],
        "name": "MyThrowable",
        "optional": false,
        "typeAnnotation": null,
        "start": 4695,
        "end": 4706
      },
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
              "name": "err",
              "optional": false,
              "typeAnnotation": null,
              "start": 4713,
              "end": 4716
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
                  "name": "msg",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 4722,
                      "end": 4728
                    },
                    "start": 4720,
                    "end": 4728
                  },
                  "start": 4717,
                  "end": 4728
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSNeverKeyword",
                  "start": 4731,
                  "end": 4736
                },
                "start": 4729,
                "end": 4736
              },
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "CallExpression",
                      "callee": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "Super",
                          "start": 4747,
                          "end": 4752
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "throw",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 4753,
                          "end": 4758
                        },
                        "optional": false,
                        "computed": false,
                        "start": 4747,
                        "end": 4758
                      },
                      "typeArguments": null,
                      "arguments": [],
                      "optional": false,
                      "start": 4747,
                      "end": 4760
                    },
                    "directive": null,
                    "start": 4747,
                    "end": 4760
                  }
                ],
                "start": 4737,
                "end": 4766
              },
              "expression": false,
              "start": 4716,
              "end": 4766
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 4713,
            "end": 4766
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "ok",
              "optional": false,
              "typeAnnotation": null,
              "start": 4771,
              "end": 4773
            },
            "value": {
              "type": "FunctionExpression",
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSNeverKeyword",
                  "start": 4777,
                  "end": 4782
                },
                "start": 4775,
                "end": 4782
              },
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "CallExpression",
                      "callee": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "ThisExpression",
                          "start": 4793,
                          "end": 4797
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "throw",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 4798,
                          "end": 4803
                        },
                        "optional": false,
                        "computed": false,
                        "start": 4793,
                        "end": 4803
                      },
                      "typeArguments": null,
                      "arguments": [],
                      "optional": false,
                      "start": 4793,
                      "end": 4805
                    },
                    "directive": null,
                    "start": 4793,
                    "end": 4805
                  }
                ],
                "start": 4783,
                "end": 4811
              },
              "expression": false,
              "start": 4773,
              "end": 4811
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 4771,
            "end": 4811
          }
        ],
        "start": 4707,
        "end": 4813
      },
      "abstract": false,
      "declare": false,
      "start": 4666,
      "end": 4813
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Services",
        "optional": false,
        "typeAnnotation": null,
        "start": 4847,
        "end": 4855
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSMethodSignature",
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "panic",
              "optional": false,
              "typeAnnotation": null,
              "start": 4862,
              "end": 4867
            },
            "computed": false,
            "optional": false,
            "kind": "method",
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "message",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 4877,
                    "end": 4883
                  },
                  "start": 4875,
                  "end": 4883
                },
                "start": 4868,
                "end": 4883
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNeverKeyword",
                "start": 4886,
                "end": 4891
              },
              "start": 4884,
              "end": 4891
            },
            "accessibility": null,
            "readonly": false,
            "static": false,
            "start": 4862,
            "end": 4892
          }
        ],
        "start": 4856,
        "end": 4894
      },
      "declare": false,
      "start": 4837,
      "end": 4894
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo",
        "optional": false,
        "typeAnnotation": null,
        "start": 4905,
        "end": 4908
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "services",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Readonly",
                "optional": false,
                "typeAnnotation": null,
                "start": 4919,
                "end": 4927
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Services",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 4928,
                      "end": 4936
                    },
                    "typeArguments": null,
                    "start": 4928,
                    "end": 4936
                  }
                ],
                "start": 4927,
                "end": 4937
              },
              "start": 4919,
              "end": 4937
            },
            "start": 4917,
            "end": 4937
          },
          "start": 4909,
          "end": 4937
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "s",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSUnionType",
              "types": [
                {
                  "type": "TSStringKeyword",
                  "start": 4942,
                  "end": 4948
                },
                {
                  "type": "TSNullKeyword",
                  "start": 4951,
                  "end": 4955
                }
              ],
              "start": 4942,
              "end": 4955
            },
            "start": 4940,
            "end": 4955
          },
          "start": 4939,
          "end": 4955
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSStringKeyword",
          "start": 4958,
          "end": 4964
        },
        "start": 4956,
        "end": 4964
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
                "name": "s",
                "optional": false,
                "typeAnnotation": null,
                "start": 4975,
                "end": 4976
              },
              "operator": "===",
              "right": {
                "type": "Literal",
                "value": null,
                "raw": "null",
                "start": 4981,
                "end": 4985
              },
              "start": 4975,
              "end": 4985
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
                        "name": "services",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 4997,
                        "end": 5005
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "panic",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 5006,
                        "end": 5011
                      },
                      "optional": false,
                      "computed": false,
                      "start": 4997,
                      "end": 5011
                    },
                    "typeArguments": null,
                    "arguments": [
                      {
                        "type": "Literal",
                        "value": "ouch",
                        "raw": "\"ouch\"",
                        "start": 5012,
                        "end": 5018
                      }
                    ],
                    "optional": false,
                    "start": 4997,
                    "end": 5019
                  },
                  "directive": null,
                  "start": 4997,
                  "end": 5020
                }
              ],
              "start": 4987,
              "end": 5026
            },
            "alternate": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ReturnStatement",
                  "argument": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "s",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 5049,
                    "end": 5050
                  },
                  "start": 5042,
                  "end": 5051
                }
              ],
              "start": 5032,
              "end": 5057
            },
            "start": 4971,
            "end": 5057
          }
        ],
        "start": 4965,
        "end": 5059
      },
      "expression": false,
      "start": 4896,
      "end": 5059
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 5059
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
    "value": "fail",
    "start": 9,
    "end": 13
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 13,
    "end": 14
  },
  {
    "type": "Identifier",
    "value": "message",
    "start": 14,
    "end": 21
  },
  {
    "type": "Punctuator",
    "value": "?",
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
    "type": "Identifier",
    "value": "never",
    "start": 33,
    "end": 38
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 39,
    "end": 40
  },
  {
    "type": "Keyword",
    "value": "throw",
    "start": 45,
    "end": 50
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 51,
    "end": 54
  },
  {
    "type": "Identifier",
    "value": "Error",
    "start": 55,
    "end": 60
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 60,
    "end": 61
  },
  {
    "type": "Identifier",
    "value": "message",
    "start": 61,
    "end": 68
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 68,
    "end": 69
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 69,
    "end": 70
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 71,
    "end": 72
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 74,
    "end": 82
  },
  {
    "type": "Identifier",
    "value": "f01",
    "start": 83,
    "end": 86
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 86,
    "end": 87
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 87,
    "end": 88
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 88,
    "end": 89
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 90,
    "end": 96
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 97,
    "end": 98
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 99,
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
    "value": "if",
    "start": 116,
    "end": 118
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 119,
    "end": 120
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 120,
    "end": 121
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 122,
    "end": 125
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 126,
    "end": 135
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 135,
    "end": 136
  },
  {
    "type": "Identifier",
    "value": "fail",
    "start": 137,
    "end": 141
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 141,
    "end": 142
  },
  {
    "type": "String",
    "value": "\"undefined argument\"",
    "start": 142,
    "end": 162
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 162,
    "end": 163
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 163,
    "end": 164
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 169,
    "end": 170
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 170,
    "end": 171
  },
  {
    "type": "Identifier",
    "value": "length",
    "start": 171,
    "end": 177
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 177,
    "end": 178
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 190,
    "end": 191
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 193,
    "end": 201
  },
  {
    "type": "Identifier",
    "value": "f02",
    "start": 202,
    "end": 205
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 205,
    "end": 206
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 206,
    "end": 207
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 207,
    "end": 208
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 209,
    "end": 215
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 215,
    "end": 216
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 216,
    "end": 217
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 218,
    "end": 224
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 225,
    "end": 226
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 231,
    "end": 233
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 234,
    "end": 235
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 235,
    "end": 236
  },
  {
    "type": "Punctuator",
    "value": ">=",
    "start": 237,
    "end": 239
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 240,
    "end": 241
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 241,
    "end": 242
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 243,
    "end": 249
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 250,
    "end": 251
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 251,
    "end": 252
  },
  {
    "type": "Identifier",
    "value": "fail",
    "start": 257,
    "end": 261
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 261,
    "end": 262
  },
  {
    "type": "String",
    "value": "\"negative number\"",
    "start": 262,
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
    "value": ";",
    "start": 280,
    "end": 281
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 286,
    "end": 287
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 287,
    "end": 288
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 305,
    "end": 306
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 308,
    "end": 316
  },
  {
    "type": "Identifier",
    "value": "f03",
    "start": 317,
    "end": 320
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 320,
    "end": 321
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 321,
    "end": 322
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 322,
    "end": 323
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 324,
    "end": 330
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 330,
    "end": 331
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 332,
    "end": 333
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 338,
    "end": 339
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 339,
    "end": 340
  },
  {
    "type": "Identifier",
    "value": "fail",
    "start": 356,
    "end": 360
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 360,
    "end": 361
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 361,
    "end": 362
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 362,
    "end": 363
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 368,
    "end": 369
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 369,
    "end": 370
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 387,
    "end": 388
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 390,
    "end": 398
  },
  {
    "type": "Identifier",
    "value": "f11",
    "start": 399,
    "end": 402
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 402,
    "end": 403
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 403,
    "end": 404
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 404,
    "end": 405
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 406,
    "end": 412
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 413,
    "end": 414
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 415,
    "end": 424
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 424,
    "end": 425
  },
  {
    "type": "Identifier",
    "value": "fail",
    "start": 426,
    "end": 430
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 430,
    "end": 431
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 432,
    "end": 433
  },
  {
    "type": "Identifier",
    "value": "message",
    "start": 433,
    "end": 440
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 440,
    "end": 441
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 441,
    "end": 442
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 443,
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
    "value": "=>",
    "start": 451,
    "end": 453
  },
  {
    "type": "Identifier",
    "value": "never",
    "start": 454,
    "end": 459
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 459,
    "end": 460
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 461,
    "end": 462
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 467,
    "end": 469
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 470,
    "end": 471
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 471,
    "end": 472
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 473,
    "end": 476
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 477,
    "end": 486
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 486,
    "end": 487
  },
  {
    "type": "Identifier",
    "value": "fail",
    "start": 488,
    "end": 492
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 492,
    "end": 493
  },
  {
    "type": "String",
    "value": "\"undefined argument\"",
    "start": 493,
    "end": 513
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 513,
    "end": 514
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 514,
    "end": 515
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 520,
    "end": 521
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 521,
    "end": 522
  },
  {
    "type": "Identifier",
    "value": "length",
    "start": 522,
    "end": 528
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 528,
    "end": 529
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 541,
    "end": 542
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 544,
    "end": 552
  },
  {
    "type": "Identifier",
    "value": "f12",
    "start": 553,
    "end": 556
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 556,
    "end": 557
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 557,
    "end": 558
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 558,
    "end": 559
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 560,
    "end": 566
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 566,
    "end": 567
  },
  {
    "type": "Identifier",
    "value": "fail",
    "start": 568,
    "end": 572
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 572,
    "end": 573
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 574,
    "end": 575
  },
  {
    "type": "Identifier",
    "value": "message",
    "start": 575,
    "end": 582
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 582,
    "end": 583
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 583,
    "end": 584
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 585,
    "end": 591
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 591,
    "end": 592
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 593,
    "end": 595
  },
  {
    "type": "Identifier",
    "value": "never",
    "start": 596,
    "end": 601
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 601,
    "end": 602
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 602,
    "end": 603
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 604,
    "end": 610
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 611,
    "end": 612
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 617,
    "end": 619
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 620,
    "end": 621
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 621,
    "end": 622
  },
  {
    "type": "Punctuator",
    "value": ">=",
    "start": 623,
    "end": 625
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 626,
    "end": 627
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 627,
    "end": 628
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 629,
    "end": 635
  },
  {
    "type": "Identifier",
    "value": "x",
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
    "type": "Identifier",
    "value": "fail",
    "start": 643,
    "end": 647
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 647,
    "end": 648
  },
  {
    "type": "String",
    "value": "\"negative number\"",
    "start": 648,
    "end": 665
  },
  {
    "type": "Punctuator",
    "value": ")",
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
    "type": "Identifier",
    "value": "x",
    "start": 672,
    "end": 673
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 673,
    "end": 674
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 691,
    "end": 692
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 694,
    "end": 702
  },
  {
    "type": "Identifier",
    "value": "f13",
    "start": 703,
    "end": 706
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 706,
    "end": 707
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 707,
    "end": 708
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 708,
    "end": 709
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 710,
    "end": 716
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 716,
    "end": 717
  },
  {
    "type": "Identifier",
    "value": "fail",
    "start": 718,
    "end": 722
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 722,
    "end": 723
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 724,
    "end": 725
  },
  {
    "type": "Identifier",
    "value": "message",
    "start": 725,
    "end": 732
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 732,
    "end": 733
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 733,
    "end": 734
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 735,
    "end": 741
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 741,
    "end": 742
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 743,
    "end": 745
  },
  {
    "type": "Identifier",
    "value": "never",
    "start": 746,
    "end": 751
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 751,
    "end": 752
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 753,
    "end": 754
  },
  {
    "type": "Identifier",
    "value": "x",
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
    "type": "Identifier",
    "value": "fail",
    "start": 777,
    "end": 781
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 781,
    "end": 782
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 782,
    "end": 783
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 783,
    "end": 784
  },
  {
    "type": "Identifier",
    "value": "x",
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
    "start": 808,
    "end": 809
  },
  {
    "type": "Identifier",
    "value": "namespace",
    "start": 811,
    "end": 820
  },
  {
    "type": "Identifier",
    "value": "Debug",
    "start": 821,
    "end": 826
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 827,
    "end": 828
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 833,
    "end": 839
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 840,
    "end": 847
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 848,
    "end": 856
  },
  {
    "type": "Identifier",
    "value": "fail",
    "start": 857,
    "end": 861
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 861,
    "end": 862
  },
  {
    "type": "Identifier",
    "value": "message",
    "start": 862,
    "end": 869
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 869,
    "end": 870
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 870,
    "end": 871
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 872,
    "end": 878
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 878,
    "end": 879
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 879,
    "end": 880
  },
  {
    "type": "Identifier",
    "value": "never",
    "start": 881,
    "end": 886
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 886,
    "end": 887
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 888,
    "end": 889
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 891,
    "end": 899
  },
  {
    "type": "Identifier",
    "value": "f21",
    "start": 900,
    "end": 903
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 903,
    "end": 904
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 904,
    "end": 905
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 905,
    "end": 906
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 907,
    "end": 913
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 914,
    "end": 915
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 916,
    "end": 925
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 925,
    "end": 926
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 927,
    "end": 928
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
    "value": "x",
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
    "type": "Identifier",
    "value": "undefined",
    "start": 943,
    "end": 952
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 952,
    "end": 953
  },
  {
    "type": "Identifier",
    "value": "Debug",
    "start": 954,
    "end": 959
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 959,
    "end": 960
  },
  {
    "type": "Identifier",
    "value": "fail",
    "start": 960,
    "end": 964
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 964,
    "end": 965
  },
  {
    "type": "String",
    "value": "\"undefined argument\"",
    "start": 965,
    "end": 985
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 985,
    "end": 986
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 986,
    "end": 987
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 992,
    "end": 993
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 993,
    "end": 994
  },
  {
    "type": "Identifier",
    "value": "length",
    "start": 994,
    "end": 1000
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1000,
    "end": 1001
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1013,
    "end": 1014
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1016,
    "end": 1024
  },
  {
    "type": "Identifier",
    "value": "f22",
    "start": 1025,
    "end": 1028
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1028,
    "end": 1029
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1029,
    "end": 1030
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1030,
    "end": 1031
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1032,
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
    "value": ":",
    "start": 1039,
    "end": 1040
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1041,
    "end": 1047
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1048,
    "end": 1049
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 1054,
    "end": 1056
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1057,
    "end": 1058
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1058,
    "end": 1059
  },
  {
    "type": "Punctuator",
    "value": ">=",
    "start": 1060,
    "end": 1062
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 1063,
    "end": 1064
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1064,
    "end": 1065
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 1066,
    "end": 1072
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1073,
    "end": 1074
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1074,
    "end": 1075
  },
  {
    "type": "Identifier",
    "value": "Debug",
    "start": 1080,
    "end": 1085
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1085,
    "end": 1086
  },
  {
    "type": "Identifier",
    "value": "fail",
    "start": 1086,
    "end": 1090
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1090,
    "end": 1091
  },
  {
    "type": "String",
    "value": "\"negative number\"",
    "start": 1091,
    "end": 1108
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1108,
    "end": 1109
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1109,
    "end": 1110
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1115,
    "end": 1116
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1116,
    "end": 1117
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1134,
    "end": 1135
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1137,
    "end": 1145
  },
  {
    "type": "Identifier",
    "value": "f23",
    "start": 1146,
    "end": 1149
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1149,
    "end": 1150
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1150,
    "end": 1151
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1151,
    "end": 1152
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1153,
    "end": 1159
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1159,
    "end": 1160
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1161,
    "end": 1162
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1167,
    "end": 1168
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1168,
    "end": 1169
  },
  {
    "type": "Identifier",
    "value": "Debug",
    "start": 1185,
    "end": 1190
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1190,
    "end": 1191
  },
  {
    "type": "Identifier",
    "value": "fail",
    "start": 1191,
    "end": 1195
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1195,
    "end": 1196
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1196,
    "end": 1197
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1197,
    "end": 1198
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1203,
    "end": 1204
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1204,
    "end": 1205
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1222,
    "end": 1223
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1225,
    "end": 1233
  },
  {
    "type": "Identifier",
    "value": "f24",
    "start": 1234,
    "end": 1237
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1237,
    "end": 1238
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1238,
    "end": 1239
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1239,
    "end": 1240
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1241,
    "end": 1247
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1247,
    "end": 1248
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1249,
    "end": 1250
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1255,
    "end": 1256
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1256,
    "end": 1257
  },
  {
    "type": "Punctuator",
    "value": "(",
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
    "type": "Identifier",
    "value": "Debug",
    "start": 1275,
    "end": 1280
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1280,
    "end": 1281
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1281,
    "end": 1282
  },
  {
    "type": "Identifier",
    "value": "fail",
    "start": 1282,
    "end": 1286
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1286,
    "end": 1287
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1287,
    "end": 1288
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1288,
    "end": 1289
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1289,
    "end": 1290
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1295,
    "end": 1296
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1296,
    "end": 1297
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1314,
    "end": 1315
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 1317,
    "end": 1322
  },
  {
    "type": "Identifier",
    "value": "Test",
    "start": 1323,
    "end": 1327
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1328,
    "end": 1329
  },
  {
    "type": "Identifier",
    "value": "fail",
    "start": 1334,
    "end": 1338
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1338,
    "end": 1339
  },
  {
    "type": "Identifier",
    "value": "message",
    "start": 1339,
    "end": 1346
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 1346,
    "end": 1347
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1347,
    "end": 1348
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1349,
    "end": 1355
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1355,
    "end": 1356
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1356,
    "end": 1357
  },
  {
    "type": "Identifier",
    "value": "never",
    "start": 1358,
    "end": 1363
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1364,
    "end": 1365
  },
  {
    "type": "Keyword",
    "value": "throw",
    "start": 1374,
    "end": 1379
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 1380,
    "end": 1383
  },
  {
    "type": "Identifier",
    "value": "Error",
    "start": 1384,
    "end": 1389
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1389,
    "end": 1390
  },
  {
    "type": "Identifier",
    "value": "message",
    "start": 1390,
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
    "value": ";",
    "start": 1398,
    "end": 1399
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1404,
    "end": 1405
  },
  {
    "type": "Identifier",
    "value": "f1",
    "start": 1410,
    "end": 1412
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1412,
    "end": 1413
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1413,
    "end": 1414
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1414,
    "end": 1415
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1416,
    "end": 1422
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 1423,
    "end": 1424
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 1425,
    "end": 1434
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1434,
    "end": 1435
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1436,
    "end": 1437
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 1446,
    "end": 1448
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1449,
    "end": 1450
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1450,
    "end": 1451
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 1452,
    "end": 1455
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 1456,
    "end": 1465
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1465,
    "end": 1466
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 1467,
    "end": 1471
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1471,
    "end": 1472
  },
  {
    "type": "Identifier",
    "value": "fail",
    "start": 1472,
    "end": 1476
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1476,
    "end": 1477
  },
  {
    "type": "String",
    "value": "\"undefined argument\"",
    "start": 1477,
    "end": 1497
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1497,
    "end": 1498
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1498,
    "end": 1499
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1508,
    "end": 1509
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1509,
    "end": 1510
  },
  {
    "type": "Identifier",
    "value": "length",
    "start": 1510,
    "end": 1516
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1516,
    "end": 1517
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1533,
    "end": 1534
  },
  {
    "type": "Identifier",
    "value": "f2",
    "start": 1539,
    "end": 1541
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1541,
    "end": 1542
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1542,
    "end": 1543
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1543,
    "end": 1544
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1545,
    "end": 1551
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1551,
    "end": 1552
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1552,
    "end": 1553
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1554,
    "end": 1560
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1561,
    "end": 1562
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 1571,
    "end": 1573
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1574,
    "end": 1575
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1575,
    "end": 1576
  },
  {
    "type": "Punctuator",
    "value": ">=",
    "start": 1577,
    "end": 1579
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 1580,
    "end": 1581
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1581,
    "end": 1582
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 1583,
    "end": 1589
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1590,
    "end": 1591
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1591,
    "end": 1592
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 1601,
    "end": 1605
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1605,
    "end": 1606
  },
  {
    "type": "Identifier",
    "value": "fail",
    "start": 1606,
    "end": 1610
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1610,
    "end": 1611
  },
  {
    "type": "String",
    "value": "\"negative number\"",
    "start": 1611,
    "end": 1628
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1628,
    "end": 1629
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1629,
    "end": 1630
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1639,
    "end": 1640
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1640,
    "end": 1641
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1662,
    "end": 1663
  },
  {
    "type": "Identifier",
    "value": "f3",
    "start": 1668,
    "end": 1670
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1670,
    "end": 1671
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1671,
    "end": 1672
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1672,
    "end": 1673
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1674,
    "end": 1680
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1680,
    "end": 1681
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1682,
    "end": 1683
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1692,
    "end": 1693
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1693,
    "end": 1694
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 1714,
    "end": 1718
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1718,
    "end": 1719
  },
  {
    "type": "Identifier",
    "value": "fail",
    "start": 1719,
    "end": 1723
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1723,
    "end": 1724
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1724,
    "end": 1725
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1725,
    "end": 1726
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1735,
    "end": 1736
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1736,
    "end": 1737
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1758,
    "end": 1759
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1760,
    "end": 1761
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1763,
    "end": 1771
  },
  {
    "type": "Identifier",
    "value": "f30",
    "start": 1772,
    "end": 1775
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1775,
    "end": 1776
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1776,
    "end": 1777
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1777,
    "end": 1778
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1779,
    "end": 1785
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 1786,
    "end": 1787
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1788,
    "end": 1794
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 1795,
    "end": 1796
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 1797,
    "end": 1806
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1806,
    "end": 1807
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1808,
    "end": 1809
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 1814,
    "end": 1816
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1817,
    "end": 1818
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 1818,
    "end": 1824
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1825,
    "end": 1826
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 1827,
    "end": 1830
  },
  {
    "type": "String",
    "value": "\"string\"",
    "start": 1831,
    "end": 1839
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1839,
    "end": 1840
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1841,
    "end": 1842
  },
  {
    "type": "Identifier",
    "value": "fail",
    "start": 1851,
    "end": 1855
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1855,
    "end": 1856
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1856,
    "end": 1857
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1857,
    "end": 1858
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1867,
    "end": 1868
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1868,
    "end": 1869
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1890,
    "end": 1891
  },
  {
    "type": "Keyword",
    "value": "else",
    "start": 1896,
    "end": 1900
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1901,
    "end": 1902
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1911,
    "end": 1912
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1912,
    "end": 1913
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 1945,
    "end": 1947
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1948,
    "end": 1949
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1949,
    "end": 1950
  },
  {
    "type": "Punctuator",
    "value": "!==",
    "start": 1951,
    "end": 1954
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 1955,
    "end": 1964
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1964,
    "end": 1965
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1966,
    "end": 1967
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1980,
    "end": 1981
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1981,
    "end": 1982
  },
  {
    "type": "Identifier",
    "value": "fail",
    "start": 2006,
    "end": 2010
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2010,
    "end": 2011
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2011,
    "end": 2012
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2012,
    "end": 2013
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2026,
    "end": 2027
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2027,
    "end": 2028
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2053,
    "end": 2054
  },
  {
    "type": "Keyword",
    "value": "else",
    "start": 2063,
    "end": 2067
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2068,
    "end": 2069
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2082,
    "end": 2083
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2083,
    "end": 2084
  },
  {
    "type": "Identifier",
    "value": "fail",
    "start": 2111,
    "end": 2115
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2115,
    "end": 2116
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2116,
    "end": 2117
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2117,
    "end": 2118
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2131,
    "end": 2132
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2132,
    "end": 2133
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2158,
    "end": 2159
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2168,
    "end": 2169
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2169,
    "end": 2170
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2191,
    "end": 2192
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2197,
    "end": 2198
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2198,
    "end": 2199
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2216,
    "end": 2217
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 2219,
    "end": 2227
  },
  {
    "type": "Identifier",
    "value": "f31",
    "start": 2228,
    "end": 2231
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2231,
    "end": 2232
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2232,
    "end": 2233
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2233,
    "end": 2234
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2235,
    "end": 2236
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 2237,
    "end": 2238
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2238,
    "end": 2239
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 2240,
    "end": 2246
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 2247,
    "end": 2248
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 2249,
    "end": 2255
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2256,
    "end": 2257
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2257,
    "end": 2258
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2259,
    "end": 2260
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 2265,
    "end": 2267
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2268,
    "end": 2269
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 2269,
    "end": 2275
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2276,
    "end": 2277
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2277,
    "end": 2278
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 2278,
    "end": 2279
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 2280,
    "end": 2283
  },
  {
    "type": "String",
    "value": "\"string\"",
    "start": 2284,
    "end": 2292
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2292,
    "end": 2293
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2294,
    "end": 2295
  },
  {
    "type": "Identifier",
    "value": "fail",
    "start": 2304,
    "end": 2308
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2308,
    "end": 2309
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2309,
    "end": 2310
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2310,
    "end": 2311
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2320,
    "end": 2321
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2321,
    "end": 2322
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2349,
    "end": 2350
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2350,
    "end": 2351
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 2351,
    "end": 2352
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2352,
    "end": 2353
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2374,
    "end": 2375
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2380,
    "end": 2381
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2381,
    "end": 2382
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2416,
    "end": 2417
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2417,
    "end": 2418
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 2418,
    "end": 2419
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2419,
    "end": 2420
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2432,
    "end": 2433
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 2435,
    "end": 2443
  },
  {
    "type": "Identifier",
    "value": "f40",
    "start": 2444,
    "end": 2447
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2447,
    "end": 2448
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2448,
    "end": 2449
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2449,
    "end": 2450
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 2451,
    "end": 2457
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2457,
    "end": 2458
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2459,
    "end": 2460
  },
  {
    "type": "Keyword",
    "value": "try",
    "start": 2465,
    "end": 2468
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2469,
    "end": 2470
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2479,
    "end": 2480
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2480,
    "end": 2481
  },
  {
    "type": "Identifier",
    "value": "fail",
    "start": 2490,
    "end": 2494
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2494,
    "end": 2495
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2495,
    "end": 2496
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2496,
    "end": 2497
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2506,
    "end": 2507
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2507,
    "end": 2508
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2529,
    "end": 2530
  },
  {
    "type": "Keyword",
    "value": "finally",
    "start": 2535,
    "end": 2542
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2543,
    "end": 2544
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2553,
    "end": 2554
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2554,
    "end": 2555
  },
  {
    "type": "Identifier",
    "value": "fail",
    "start": 2564,
    "end": 2568
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2568,
    "end": 2569
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2569,
    "end": 2570
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2570,
    "end": 2571
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2580,
    "end": 2581
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2581,
    "end": 2582
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2603,
    "end": 2604
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2609,
    "end": 2610
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2610,
    "end": 2611
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2628,
    "end": 2629
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 2631,
    "end": 2639
  },
  {
    "type": "Identifier",
    "value": "f41",
    "start": 2640,
    "end": 2643
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2643,
    "end": 2644
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2644,
    "end": 2645
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2645,
    "end": 2646
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 2647,
    "end": 2653
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2653,
    "end": 2654
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2655,
    "end": 2656
  },
  {
    "type": "Keyword",
    "value": "try",
    "start": 2661,
    "end": 2664
  },
  {
    "type": "Punctuator",
    "value": "{",
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
    "type": "Punctuator",
    "value": "}",
    "start": 2682,
    "end": 2683
  },
  {
    "type": "Keyword",
    "value": "finally",
    "start": 2688,
    "end": 2695
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2696,
    "end": 2697
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2706,
    "end": 2707
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2707,
    "end": 2708
  },
  {
    "type": "Identifier",
    "value": "fail",
    "start": 2717,
    "end": 2721
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2721,
    "end": 2722
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2722,
    "end": 2723
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2723,
    "end": 2724
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2733,
    "end": 2734
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2734,
    "end": 2735
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2756,
    "end": 2757
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2762,
    "end": 2763
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2763,
    "end": 2764
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2781,
    "end": 2782
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 2784,
    "end": 2792
  },
  {
    "type": "Identifier",
    "value": "f42",
    "start": 2793,
    "end": 2796
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2796,
    "end": 2797
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2797,
    "end": 2798
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2798,
    "end": 2799
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 2800,
    "end": 2806
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2806,
    "end": 2807
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2808,
    "end": 2809
  },
  {
    "type": "Keyword",
    "value": "try",
    "start": 2814,
    "end": 2817
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2818,
    "end": 2819
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2828,
    "end": 2829
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2829,
    "end": 2830
  },
  {
    "type": "Identifier",
    "value": "fail",
    "start": 2839,
    "end": 2843
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2843,
    "end": 2844
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2844,
    "end": 2845
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2845,
    "end": 2846
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2855,
    "end": 2856
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2856,
    "end": 2857
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2878,
    "end": 2879
  },
  {
    "type": "Keyword",
    "value": "finally",
    "start": 2884,
    "end": 2891
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2892,
    "end": 2893
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2902,
    "end": 2903
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2903,
    "end": 2904
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2909,
    "end": 2910
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2915,
    "end": 2916
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2916,
    "end": 2917
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2934,
    "end": 2935
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 2937,
    "end": 2945
  },
  {
    "type": "Identifier",
    "value": "f43",
    "start": 2946,
    "end": 2949
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2949,
    "end": 2950
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2950,
    "end": 2951
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2952,
    "end": 2953
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 2958,
    "end": 2963
  },
  {
    "type": "Identifier",
    "value": "fail",
    "start": 2964,
    "end": 2968
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2969,
    "end": 2970
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2971,
    "end": 2972
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2972,
    "end": 2973
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2973,
    "end": 2974
  },
  {
    "type": "Identifier",
    "value": "never",
    "start": 2975,
    "end": 2980
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 2981,
    "end": 2983
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2984,
    "end": 2985
  },
  {
    "type": "Keyword",
    "value": "throw",
    "start": 2986,
    "end": 2991
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 2992,
    "end": 2995
  },
  {
    "type": "Identifier",
    "value": "Error",
    "start": 2996,
    "end": 3001
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3001,
    "end": 3002
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3002,
    "end": 3003
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3003,
    "end": 3004
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3005,
    "end": 3006
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3006,
    "end": 3007
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 3012,
    "end": 3017
  },
  {
    "type": "Identifier",
    "value": "f",
    "start": 3018,
    "end": 3019
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3020,
    "end": 3021
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 3022,
    "end": 3023
  },
  {
    "type": "Identifier",
    "value": "fail",
    "start": 3023,
    "end": 3027
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 3027,
    "end": 3028
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3028,
    "end": 3029
  },
  {
    "type": "Identifier",
    "value": "fail",
    "start": 3034,
    "end": 3038
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3038,
    "end": 3039
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3039,
    "end": 3040
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3040,
    "end": 3041
  },
  {
    "type": "Identifier",
    "value": "f",
    "start": 3086,
    "end": 3087
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 3087,
    "end": 3088
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 3088,
    "end": 3089
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 3089,
    "end": 3090
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3090,
    "end": 3091
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3091,
    "end": 3092
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3092,
    "end": 3093
  },
  {
    "type": "Identifier",
    "value": "f",
    "start": 3132,
    "end": 3133
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3133,
    "end": 3134
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3135,
    "end": 3136
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 3160,
    "end": 3166
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 3167,
    "end": 3176
  },
  {
    "type": "Identifier",
    "value": "Component",
    "start": 3177,
    "end": 3186
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 3186,
    "end": 3187
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 3187,
    "end": 3188
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 3189,
    "end": 3196
  },
  {
    "type": "Identifier",
    "value": "object",
    "start": 3197,
    "end": 3203
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3204,
    "end": 3205
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 3206,
    "end": 3209
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 3209,
    "end": 3210
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3211,
    "end": 3212
  },
  {
    "type": "Identifier",
    "value": "attrName",
    "start": 3214,
    "end": 3222
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 3222,
    "end": 3223
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3223,
    "end": 3224
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 3225,
    "end": 3231
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3231,
    "end": 3232
  },
  {
    "type": "Identifier",
    "value": "data",
    "start": 3234,
    "end": 3238
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3238,
    "end": 3239
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 3240,
    "end": 3241
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3241,
    "end": 3242
  },
  {
    "type": "Identifier",
    "value": "dependencies",
    "start": 3244,
    "end": 3256
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 3256,
    "end": 3257
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3257,
    "end": 3258
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 3259,
    "end": 3265
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 3265,
    "end": 3266
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 3266,
    "end": 3267
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3267,
    "end": 3268
  },
  {
    "type": "Identifier",
    "value": "el",
    "start": 3270,
    "end": 3272
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3272,
    "end": 3273
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 3274,
    "end": 3277
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3277,
    "end": 3278
  },
  {
    "type": "Identifier",
    "value": "id",
    "start": 3280,
    "end": 3282
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3282,
    "end": 3283
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 3284,
    "end": 3290
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3290,
    "end": 3291
  },
  {
    "type": "Identifier",
    "value": "multiple",
    "start": 3293,
    "end": 3301
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 3301,
    "end": 3302
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3302,
    "end": 3303
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 3304,
    "end": 3311
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3311,
    "end": 3312
  },
  {
    "type": "Identifier",
    "value": "name",
    "start": 3314,
    "end": 3318
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3318,
    "end": 3319
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 3320,
    "end": 3326
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3326,
    "end": 3327
  },
  {
    "type": "Identifier",
    "value": "schema",
    "start": 3329,
    "end": 3335
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3335,
    "end": 3336
  },
  {
    "type": "Identifier",
    "value": "unknown",
    "start": 3337,
    "end": 3344
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3344,
    "end": 3345
  },
  {
    "type": "Identifier",
    "value": "system",
    "start": 3347,
    "end": 3353
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3353,
    "end": 3354
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 3355,
    "end": 3358
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3358,
    "end": 3359
  },
  {
    "type": "Identifier",
    "value": "init",
    "start": 3362,
    "end": 3366
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3366,
    "end": 3367
  },
  {
    "type": "Identifier",
    "value": "data",
    "start": 3367,
    "end": 3371
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 3371,
    "end": 3372
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3372,
    "end": 3373
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 3374,
    "end": 3375
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3375,
    "end": 3376
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3376,
    "end": 3377
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 3378,
    "end": 3382
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3382,
    "end": 3383
  },
  {
    "type": "Identifier",
    "value": "pause",
    "start": 3385,
    "end": 3390
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3390,
    "end": 3391
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3391,
    "end": 3392
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3392,
    "end": 3393
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 3394,
    "end": 3398
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3398,
    "end": 3399
  },
  {
    "type": "Identifier",
    "value": "play",
    "start": 3401,
    "end": 3405
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3405,
    "end": 3406
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3406,
    "end": 3407
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3407,
    "end": 3408
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 3409,
    "end": 3413
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3413,
    "end": 3414
  },
  {
    "type": "Identifier",
    "value": "remove",
    "start": 3416,
    "end": 3422
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3422,
    "end": 3423
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3423,
    "end": 3424
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3424,
    "end": 3425
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 3426,
    "end": 3430
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3430,
    "end": 3431
  },
  {
    "type": "Identifier",
    "value": "tick",
    "start": 3433,
    "end": 3437
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 3437,
    "end": 3438
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3438,
    "end": 3439
  },
  {
    "type": "Identifier",
    "value": "time",
    "start": 3439,
    "end": 3443
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3443,
    "end": 3444
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 3445,
    "end": 3451
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3451,
    "end": 3452
  },
  {
    "type": "Identifier",
    "value": "timeDelta",
    "start": 3453,
    "end": 3462
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3462,
    "end": 3463
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 3464,
    "end": 3470
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3470,
    "end": 3471
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3471,
    "end": 3472
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 3473,
    "end": 3477
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3477,
    "end": 3478
  },
  {
    "type": "Identifier",
    "value": "update",
    "start": 3480,
    "end": 3486
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3486,
    "end": 3487
  },
  {
    "type": "Identifier",
    "value": "oldData",
    "start": 3487,
    "end": 3494
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3494,
    "end": 3495
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 3496,
    "end": 3497
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3497,
    "end": 3498
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3498,
    "end": 3499
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 3500,
    "end": 3504
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3504,
    "end": 3505
  },
  {
    "type": "Identifier",
    "value": "updateSchema",
    "start": 3507,
    "end": 3519
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 3519,
    "end": 3520
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3520,
    "end": 3521
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3521,
    "end": 3522
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3522,
    "end": 3523
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 3524,
    "end": 3528
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3528,
    "end": 3529
  },
  {
    "type": "Identifier",
    "value": "extendSchema",
    "start": 3532,
    "end": 3544
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3544,
    "end": 3545
  },
  {
    "type": "Identifier",
    "value": "update",
    "start": 3545,
    "end": 3551
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3551,
    "end": 3552
  },
  {
    "type": "Identifier",
    "value": "unknown",
    "start": 3553,
    "end": 3560
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3560,
    "end": 3561
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3561,
    "end": 3562
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 3563,
    "end": 3567
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3567,
    "end": 3568
  },
  {
    "type": "Identifier",
    "value": "flushToDOM",
    "start": 3570,
    "end": 3580
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3580,
    "end": 3581
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3581,
    "end": 3582
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3582,
    "end": 3583
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 3584,
    "end": 3588
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3588,
    "end": 3589
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3590,
    "end": 3591
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 3593,
    "end": 3599
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 3600,
    "end": 3609
  },
  {
    "type": "Identifier",
    "value": "ComponentConstructor",
    "start": 3610,
    "end": 3630
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 3630,
    "end": 3631
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 3631,
    "end": 3632
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 3633,
    "end": 3640
  },
  {
    "type": "Identifier",
    "value": "object",
    "start": 3641,
    "end": 3647
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 3647,
    "end": 3648
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3649,
    "end": 3650
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 3652,
    "end": 3655
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3656,
    "end": 3657
  },
  {
    "type": "Identifier",
    "value": "el",
    "start": 3657,
    "end": 3659
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3659,
    "end": 3660
  },
  {
    "type": "Identifier",
    "value": "unknown",
    "start": 3661,
    "end": 3668
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3668,
    "end": 3669
  },
  {
    "type": "Identifier",
    "value": "attrValue",
    "start": 3670,
    "end": 3679
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3679,
    "end": 3680
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 3681,
    "end": 3687
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3687,
    "end": 3688
  },
  {
    "type": "Identifier",
    "value": "id",
    "start": 3689,
    "end": 3691
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3691,
    "end": 3692
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 3693,
    "end": 3699
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3699,
    "end": 3700
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3700,
    "end": 3701
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 3702,
    "end": 3703
  },
  {
    "type": "Punctuator",
    "value": "&",
    "start": 3704,
    "end": 3705
  },
  {
    "type": "Identifier",
    "value": "Component",
    "start": 3706,
    "end": 3715
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3715,
    "end": 3716
  },
  {
    "type": "Identifier",
    "value": "prototype",
    "start": 3718,
    "end": 3727
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3727,
    "end": 3728
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 3729,
    "end": 3730
  },
  {
    "type": "Punctuator",
    "value": "&",
    "start": 3731,
    "end": 3732
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3733,
    "end": 3734
  },
  {
    "type": "Identifier",
    "value": "name",
    "start": 3737,
    "end": 3741
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3741,
    "end": 3742
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 3743,
    "end": 3749
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3749,
    "end": 3750
  },
  {
    "type": "Identifier",
    "value": "system",
    "start": 3753,
    "end": 3759
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3759,
    "end": 3760
  },
  {
    "type": "Identifier",
    "value": "unknown",
    "start": 3761,
    "end": 3768
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3768,
    "end": 3769
  },
  {
    "type": "Identifier",
    "value": "play",
    "start": 3772,
    "end": 3776
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3776,
    "end": 3777
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3777,
    "end": 3778
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3778,
    "end": 3779
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 3780,
    "end": 3784
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3784,
    "end": 3785
  },
  {
    "type": "Identifier",
    "value": "pause",
    "start": 3788,
    "end": 3793
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3793,
    "end": 3794
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3794,
    "end": 3795
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3795,
    "end": 3796
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 3797,
    "end": 3801
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3801,
    "end": 3802
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3804,
    "end": 3805
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3805,
    "end": 3806
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3807,
    "end": 3808
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 3810,
    "end": 3817
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 3818,
    "end": 3826
  },
  {
    "type": "Identifier",
    "value": "registerComponent",
    "start": 3827,
    "end": 3844
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 3844,
    "end": 3845
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 3845,
    "end": 3846
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 3847,
    "end": 3854
  },
  {
    "type": "Identifier",
    "value": "object",
    "start": 3855,
    "end": 3861
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 3861,
    "end": 3862
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3862,
    "end": 3863
  },
  {
    "type": "Identifier",
    "value": "name",
    "start": 3868,
    "end": 3872
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3872,
    "end": 3873
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 3874,
    "end": 3880
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3880,
    "end": 3881
  },
  {
    "type": "Identifier",
    "value": "component",
    "start": 3886,
    "end": 3895
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3895,
    "end": 3896
  },
  {
    "type": "Identifier",
    "value": "ComponentDefinition",
    "start": 3897,
    "end": 3916
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 3916,
    "end": 3917
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 3917,
    "end": 3918
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 3918,
    "end": 3919
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3920,
    "end": 3921
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3921,
    "end": 3922
  },
  {
    "type": "Identifier",
    "value": "ComponentConstructor",
    "start": 3923,
    "end": 3943
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 3943,
    "end": 3944
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 3944,
    "end": 3945
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 3945,
    "end": 3946
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3946,
    "end": 3947
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 3949,
    "end": 3955
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 3956,
    "end": 3960
  },
  {
    "type": "Identifier",
    "value": "ComponentDefinition",
    "start": 3961,
    "end": 3980
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 3980,
    "end": 3981
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 3981,
    "end": 3982
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 3983,
    "end": 3990
  },
  {
    "type": "Identifier",
    "value": "object",
    "start": 3991,
    "end": 3997
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3998,
    "end": 3999
  },
  {
    "type": "Identifier",
    "value": "object",
    "start": 4000,
    "end": 4006
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 4006,
    "end": 4007
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 4008,
    "end": 4009
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 4010,
    "end": 4011
  },
  {
    "type": "Punctuator",
    "value": "&",
    "start": 4012,
    "end": 4013
  },
  {
    "type": "Identifier",
    "value": "Partial",
    "start": 4014,
    "end": 4021
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 4021,
    "end": 4022
  },
  {
    "type": "Identifier",
    "value": "Component",
    "start": 4022,
    "end": 4031
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 4031,
    "end": 4032
  },
  {
    "type": "Punctuator",
    "value": "&",
    "start": 4033,
    "end": 4034
  },
  {
    "type": "Identifier",
    "value": "ThisType",
    "start": 4035,
    "end": 4043
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 4043,
    "end": 4044
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 4044,
    "end": 4045
  },
  {
    "type": "Punctuator",
    "value": "&",
    "start": 4046,
    "end": 4047
  },
  {
    "type": "Identifier",
    "value": "Component",
    "start": 4048,
    "end": 4057
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 4057,
    "end": 4058
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4058,
    "end": 4059
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 4061,
    "end": 4066
  },
  {
    "type": "Identifier",
    "value": "Component",
    "start": 4067,
    "end": 4076
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 4077,
    "end": 4078
  },
  {
    "type": "Identifier",
    "value": "registerComponent",
    "start": 4079,
    "end": 4096
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4096,
    "end": 4097
  },
  {
    "type": "String",
    "value": "'test-component'",
    "start": 4097,
    "end": 4113
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 4113,
    "end": 4114
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 4115,
    "end": 4116
  },
  {
    "type": "Identifier",
    "value": "schema",
    "start": 4118,
    "end": 4124
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4124,
    "end": 4125
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 4126,
    "end": 4127
  },
  {
    "type": "Identifier",
    "value": "myProperty",
    "start": 4130,
    "end": 4140
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4140,
    "end": 4141
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 4142,
    "end": 4143
  },
  {
    "type": "Identifier",
    "value": "default",
    "start": 4147,
    "end": 4154
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4154,
    "end": 4155
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 4156,
    "end": 4157
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 4157,
    "end": 4158
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 4158,
    "end": 4159
  },
  {
    "type": "Identifier",
    "value": "parse",
    "start": 4163,
    "end": 4168
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4168,
    "end": 4169
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4169,
    "end": 4170
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 4171,
    "end": 4172
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 4177,
    "end": 4183
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 4184,
    "end": 4185
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 4185,
    "end": 4189
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 4189,
    "end": 4190
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4190,
    "end": 4191
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 4195,
    "end": 4196
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 4199,
    "end": 4200
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 4200,
    "end": 4201
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 4204,
    "end": 4210
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4210,
    "end": 4211
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 4212,
    "end": 4213
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 4214,
    "end": 4218
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4218,
    "end": 4219
  },
  {
    "type": "String",
    "value": "'string'",
    "start": 4220,
    "end": 4228
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 4229,
    "end": 4230
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 4230,
    "end": 4231
  },
  {
    "type": "Identifier",
    "value": "num",
    "start": 4234,
    "end": 4237
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4237,
    "end": 4238
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 4239,
    "end": 4240
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 4242,
    "end": 4243
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 4243,
    "end": 4244
  },
  {
    "type": "Identifier",
    "value": "init",
    "start": 4246,
    "end": 4250
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4250,
    "end": 4251
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4251,
    "end": 4252
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 4253,
    "end": 4254
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 4257,
    "end": 4261
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 4261,
    "end": 4262
  },
  {
    "type": "Identifier",
    "value": "data",
    "start": 4262,
    "end": 4266
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 4266,
    "end": 4267
  },
  {
    "type": "Identifier",
    "value": "num",
    "start": 4267,
    "end": 4270
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 4271,
    "end": 4272
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 4273,
    "end": 4274
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4274,
    "end": 4275
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 4278,
    "end": 4282
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 4282,
    "end": 4283
  },
  {
    "type": "Identifier",
    "value": "el",
    "start": 4283,
    "end": 4285
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 4285,
    "end": 4286
  },
  {
    "type": "Identifier",
    "value": "setAttribute",
    "start": 4286,
    "end": 4298
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4298,
    "end": 4299
  },
  {
    "type": "String",
    "value": "'custom-attribute'",
    "start": 4299,
    "end": 4317
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 4317,
    "end": 4318
  },
  {
    "type": "String",
    "value": "'custom-value'",
    "start": 4319,
    "end": 4333
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4333,
    "end": 4334
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4334,
    "end": 4335
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 4337,
    "end": 4338
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 4338,
    "end": 4339
  },
  {
    "type": "Identifier",
    "value": "update",
    "start": 4341,
    "end": 4347
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4347,
    "end": 4348
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4348,
    "end": 4349
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 4350,
    "end": 4351
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 4351,
    "end": 4352
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 4352,
    "end": 4353
  },
  {
    "type": "Identifier",
    "value": "tick",
    "start": 4355,
    "end": 4359
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4359,
    "end": 4360
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4360,
    "end": 4361
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 4362,
    "end": 4363
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 4363,
    "end": 4364
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 4364,
    "end": 4365
  },
  {
    "type": "Identifier",
    "value": "remove",
    "start": 4367,
    "end": 4373
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4373,
    "end": 4374
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4374,
    "end": 4375
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 4376,
    "end": 4377
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 4377,
    "end": 4378
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 4378,
    "end": 4379
  },
  {
    "type": "Identifier",
    "value": "pause",
    "start": 4381,
    "end": 4386
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4386,
    "end": 4387
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4387,
    "end": 4388
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 4389,
    "end": 4390
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 4390,
    "end": 4391
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 4391,
    "end": 4392
  },
  {
    "type": "Identifier",
    "value": "play",
    "start": 4394,
    "end": 4398
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4398,
    "end": 4399
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4399,
    "end": 4400
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 4401,
    "end": 4402
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 4402,
    "end": 4403
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 4403,
    "end": 4404
  },
  {
    "type": "Identifier",
    "value": "multiply",
    "start": 4407,
    "end": 4415
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4415,
    "end": 4416
  },
  {
    "type": "Identifier",
    "value": "f",
    "start": 4416,
    "end": 4417
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4417,
    "end": 4418
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 4419,
    "end": 4425
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4425,
    "end": 4426
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 4427,
    "end": 4428
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 4505,
    "end": 4511
  },
  {
    "type": "Identifier",
    "value": "f",
    "start": 4512,
    "end": 4513
  },
  {
    "type": "Punctuator",
    "value": "*",
    "start": 4514,
    "end": 4515
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 4516,
    "end": 4520
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 4520,
    "end": 4521
  },
  {
    "type": "Identifier",
    "value": "data",
    "start": 4521,
    "end": 4525
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 4525,
    "end": 4526
  },
  {
    "type": "Identifier",
    "value": "num",
    "start": 4526,
    "end": 4529
  },
  {
    "type": "Punctuator",
    "value": "*",
    "start": 4530,
    "end": 4531
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 4532,
    "end": 4536
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 4536,
    "end": 4537
  },
  {
    "type": "Identifier",
    "value": "system",
    "start": 4537,
    "end": 4543
  },
  {
    "type": "Punctuator",
    "value": "!",
    "start": 4543,
    "end": 4544
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 4544,
    "end": 4545
  },
  {
    "type": "Identifier",
    "value": "data",
    "start": 4545,
    "end": 4549
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 4549,
    "end": 4550
  },
  {
    "type": "Identifier",
    "value": "counter",
    "start": 4550,
    "end": 4557
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4557,
    "end": 4558
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 4560,
    "end": 4561
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 4562,
    "end": 4563
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4563,
    "end": 4564
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4564,
    "end": 4565
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 4589,
    "end": 4594
  },
  {
    "type": "Identifier",
    "value": "MyThrowable",
    "start": 4595,
    "end": 4606
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 4607,
    "end": 4608
  },
  {
    "type": "Identifier",
    "value": "throw",
    "start": 4613,
    "end": 4618
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4618,
    "end": 4619
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4619,
    "end": 4620
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4620,
    "end": 4621
  },
  {
    "type": "Identifier",
    "value": "never",
    "start": 4622,
    "end": 4627
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 4628,
    "end": 4629
  },
  {
    "type": "Keyword",
    "value": "throw",
    "start": 4638,
    "end": 4643
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 4644,
    "end": 4647
  },
  {
    "type": "Identifier",
    "value": "Error",
    "start": 4648,
    "end": 4653
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4653,
    "end": 4654
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4654,
    "end": 4655
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4655,
    "end": 4656
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 4661,
    "end": 4662
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 4663,
    "end": 4664
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 4666,
    "end": 4671
  },
  {
    "type": "Identifier",
    "value": "SuperThrowable",
    "start": 4672,
    "end": 4686
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 4687,
    "end": 4694
  },
  {
    "type": "Identifier",
    "value": "MyThrowable",
    "start": 4695,
    "end": 4706
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 4707,
    "end": 4708
  },
  {
    "type": "Identifier",
    "value": "err",
    "start": 4713,
    "end": 4716
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4716,
    "end": 4717
  },
  {
    "type": "Identifier",
    "value": "msg",
    "start": 4717,
    "end": 4720
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4720,
    "end": 4721
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 4722,
    "end": 4728
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4728,
    "end": 4729
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4729,
    "end": 4730
  },
  {
    "type": "Identifier",
    "value": "never",
    "start": 4731,
    "end": 4736
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 4737,
    "end": 4738
  },
  {
    "type": "Keyword",
    "value": "super",
    "start": 4747,
    "end": 4752
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 4752,
    "end": 4753
  },
  {
    "type": "Identifier",
    "value": "throw",
    "start": 4753,
    "end": 4758
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4758,
    "end": 4759
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4759,
    "end": 4760
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 4765,
    "end": 4766
  },
  {
    "type": "Identifier",
    "value": "ok",
    "start": 4771,
    "end": 4773
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4773,
    "end": 4774
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4774,
    "end": 4775
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4775,
    "end": 4776
  },
  {
    "type": "Identifier",
    "value": "never",
    "start": 4777,
    "end": 4782
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 4783,
    "end": 4784
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 4793,
    "end": 4797
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 4797,
    "end": 4798
  },
  {
    "type": "Identifier",
    "value": "throw",
    "start": 4798,
    "end": 4803
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4803,
    "end": 4804
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4804,
    "end": 4805
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 4810,
    "end": 4811
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 4812,
    "end": 4813
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 4837,
    "end": 4846
  },
  {
    "type": "Identifier",
    "value": "Services",
    "start": 4847,
    "end": 4855
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 4856,
    "end": 4857
  },
  {
    "type": "Identifier",
    "value": "panic",
    "start": 4862,
    "end": 4867
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4867,
    "end": 4868
  },
  {
    "type": "Identifier",
    "value": "message",
    "start": 4868,
    "end": 4875
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4875,
    "end": 4876
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 4877,
    "end": 4883
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4883,
    "end": 4884
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4884,
    "end": 4885
  },
  {
    "type": "Identifier",
    "value": "never",
    "start": 4886,
    "end": 4891
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4891,
    "end": 4892
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 4893,
    "end": 4894
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 4896,
    "end": 4904
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 4905,
    "end": 4908
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4908,
    "end": 4909
  },
  {
    "type": "Identifier",
    "value": "services",
    "start": 4909,
    "end": 4917
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4917,
    "end": 4918
  },
  {
    "type": "Identifier",
    "value": "Readonly",
    "start": 4919,
    "end": 4927
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 4927,
    "end": 4928
  },
  {
    "type": "Identifier",
    "value": "Services",
    "start": 4928,
    "end": 4936
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 4936,
    "end": 4937
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 4937,
    "end": 4938
  },
  {
    "type": "Identifier",
    "value": "s",
    "start": 4939,
    "end": 4940
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4940,
    "end": 4941
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 4942,
    "end": 4948
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 4949,
    "end": 4950
  },
  {
    "type": "Null",
    "value": "null",
    "start": 4951,
    "end": 4955
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4955,
    "end": 4956
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4956,
    "end": 4957
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 4958,
    "end": 4964
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 4965,
    "end": 4966
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 4971,
    "end": 4973
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4974,
    "end": 4975
  },
  {
    "type": "Identifier",
    "value": "s",
    "start": 4975,
    "end": 4976
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 4977,
    "end": 4980
  },
  {
    "type": "Null",
    "value": "null",
    "start": 4981,
    "end": 4985
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4985,
    "end": 4986
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 4987,
    "end": 4988
  },
  {
    "type": "Identifier",
    "value": "services",
    "start": 4997,
    "end": 5005
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 5005,
    "end": 5006
  },
  {
    "type": "Identifier",
    "value": "panic",
    "start": 5006,
    "end": 5011
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 5011,
    "end": 5012
  },
  {
    "type": "String",
    "value": "\"ouch\"",
    "start": 5012,
    "end": 5018
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 5018,
    "end": 5019
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 5019,
    "end": 5020
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 5025,
    "end": 5026
  },
  {
    "type": "Keyword",
    "value": "else",
    "start": 5027,
    "end": 5031
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 5032,
    "end": 5033
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 5042,
    "end": 5048
  },
  {
    "type": "Identifier",
    "value": "s",
    "start": 5049,
    "end": 5050
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 5050,
    "end": 5051
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 5056,
    "end": 5057
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 5058,
    "end": 5059
  }
]
```
