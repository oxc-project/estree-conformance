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
        "name": "error",
        "optional": false,
        "typeAnnotation": null,
        "start": 9,
        "end": 14
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
          "optional": false,
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
          "start": 15,
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
        "name": "errorVoid",
        "optional": false,
        "typeAnnotation": null,
        "start": 83,
        "end": 92
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
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSStringKeyword",
              "start": 102,
              "end": 108
            },
            "start": 100,
            "end": 108
          },
          "start": 93,
          "end": 108
        }
      ],
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
                "start": 126,
                "end": 131
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "message",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 132,
                  "end": 139
                }
              ],
              "start": 122,
              "end": 140
            },
            "start": 116,
            "end": 141
          }
        ],
        "start": 110,
        "end": 143
      },
      "expression": false,
      "start": 74,
      "end": 143
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "fail",
        "optional": false,
        "typeAnnotation": null,
        "start": 154,
        "end": 158
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
            "type": "ReturnStatement",
            "argument": {
              "type": "CallExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "error",
                "optional": false,
                "typeAnnotation": null,
                "start": 174,
                "end": 179
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Literal",
                  "value": "Something failed",
                  "raw": "\"Something failed\"",
                  "start": 180,
                  "end": 198
                }
              ],
              "optional": false,
              "start": 174,
              "end": 199
            },
            "start": 167,
            "end": 200
          }
        ],
        "start": 161,
        "end": 202
      },
      "expression": false,
      "start": 145,
      "end": 202
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "failOrThrow",
        "optional": false,
        "typeAnnotation": null,
        "start": 213,
        "end": 224
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "shouldFail",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSBooleanKeyword",
              "start": 237,
              "end": 244
            },
            "start": 235,
            "end": 244
          },
          "start": 225,
          "end": 244
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "IfStatement",
            "test": {
              "type": "Identifier",
              "decorators": [],
              "name": "shouldFail",
              "optional": false,
              "typeAnnotation": null,
              "start": 256,
              "end": 266
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ReturnStatement",
                  "argument": {
                    "type": "CallExpression",
                    "callee": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "fail",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 285,
                      "end": 289
                    },
                    "typeArguments": null,
                    "arguments": [],
                    "optional": false,
                    "start": 285,
                    "end": 291
                  },
                  "start": 278,
                  "end": 292
                }
              ],
              "start": 268,
              "end": 298
            },
            "alternate": null,
            "start": 252,
            "end": 298
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
                "start": 313,
                "end": 318
              },
              "typeArguments": null,
              "arguments": [],
              "start": 309,
              "end": 320
            },
            "start": 303,
            "end": 321
          }
        ],
        "start": 246,
        "end": 323
      },
      "expression": false,
      "start": 204,
      "end": 323
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "infiniteLoop1",
        "optional": false,
        "typeAnnotation": null,
        "start": 334,
        "end": 347
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
            "type": "WhileStatement",
            "test": {
              "type": "Literal",
              "value": true,
              "raw": "true",
              "start": 363,
              "end": 367
            },
            "body": {
              "type": "BlockStatement",
              "body": [],
              "start": 369,
              "end": 376
            },
            "start": 356,
            "end": 376
          }
        ],
        "start": 350,
        "end": 378
      },
      "expression": false,
      "start": 325,
      "end": 378
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "infiniteLoop2",
        "optional": false,
        "typeAnnotation": null,
        "start": 389,
        "end": 402
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSNeverKeyword",
          "start": 406,
          "end": 411
        },
        "start": 404,
        "end": 411
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
              "start": 425,
              "end": 429
            },
            "body": {
              "type": "BlockStatement",
              "body": [],
              "start": 431,
              "end": 438
            },
            "start": 418,
            "end": 438
          }
        ],
        "start": 412,
        "end": 440
      },
      "expression": false,
      "start": 380,
      "end": 440
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "move1",
        "optional": false,
        "typeAnnotation": null,
        "start": 451,
        "end": 456
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "direction",
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
                    "value": "up",
                    "raw": "\"up\"",
                    "start": 468,
                    "end": 472
                  },
                  "start": 468,
                  "end": 472
                },
                {
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "Literal",
                    "value": "down",
                    "raw": "\"down\"",
                    "start": 475,
                    "end": 481
                  },
                  "start": 475,
                  "end": 481
                }
              ],
              "start": 468,
              "end": 481
            },
            "start": 466,
            "end": 481
          },
          "start": 457,
          "end": 481
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
              "name": "direction",
              "optional": false,
              "typeAnnotation": null,
              "start": 497,
              "end": 506
            },
            "cases": [
              {
                "type": "SwitchCase",
                "test": {
                  "type": "Literal",
                  "value": "up",
                  "raw": "\"up\"",
                  "start": 523,
                  "end": 527
                },
                "consequent": [
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "Literal",
                      "value": 1,
                      "raw": "1",
                      "start": 548,
                      "end": 549
                    },
                    "start": 541,
                    "end": 550
                  }
                ],
                "start": 518,
                "end": 550
              },
              {
                "type": "SwitchCase",
                "test": {
                  "type": "Literal",
                  "value": "down",
                  "raw": "\"down\"",
                  "start": 564,
                  "end": 570
                },
                "consequent": [
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "UnaryExpression",
                      "operator": "-",
                      "argument": {
                        "type": "Literal",
                        "value": 1,
                        "raw": "1",
                        "start": 592,
                        "end": 593
                      },
                      "prefix": true,
                      "start": 591,
                      "end": 593
                    },
                    "start": 584,
                    "end": 594
                  }
                ],
                "start": 559,
                "end": 594
              }
            ],
            "start": 489,
            "end": 601
          },
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "CallExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "error",
                "optional": false,
                "typeAnnotation": null,
                "start": 613,
                "end": 618
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Literal",
                  "value": "Should never get here",
                  "raw": "\"Should never get here\"",
                  "start": 619,
                  "end": 642
                }
              ],
              "optional": false,
              "start": 613,
              "end": 643
            },
            "start": 606,
            "end": 644
          }
        ],
        "start": 483,
        "end": 646
      },
      "expression": false,
      "start": 442,
      "end": 646
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "move2",
        "optional": false,
        "typeAnnotation": null,
        "start": 657,
        "end": 662
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "direction",
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
                    "value": "up",
                    "raw": "\"up\"",
                    "start": 674,
                    "end": 678
                  },
                  "start": 674,
                  "end": 678
                },
                {
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "Literal",
                    "value": "down",
                    "raw": "\"down\"",
                    "start": 681,
                    "end": 687
                  },
                  "start": 681,
                  "end": 687
                }
              ],
              "start": 674,
              "end": 687
            },
            "start": 672,
            "end": 687
          },
          "start": 663,
          "end": 687
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "ConditionalExpression",
              "test": {
                "type": "BinaryExpression",
                "left": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "direction",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 702,
                  "end": 711
                },
                "operator": "===",
                "right": {
                  "type": "Literal",
                  "value": "up",
                  "raw": "\"up\"",
                  "start": 716,
                  "end": 720
                },
                "start": 702,
                "end": 720
              },
              "consequent": {
                "type": "Literal",
                "value": 1,
                "raw": "1",
                "start": 723,
                "end": 724
              },
              "alternate": {
                "type": "ConditionalExpression",
                "test": {
                  "type": "BinaryExpression",
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "direction",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 735,
                    "end": 744
                  },
                  "operator": "===",
                  "right": {
                    "type": "Literal",
                    "value": "down",
                    "raw": "\"down\"",
                    "start": 749,
                    "end": 755
                  },
                  "start": 735,
                  "end": 755
                },
                "consequent": {
                  "type": "UnaryExpression",
                  "operator": "-",
                  "argument": {
                    "type": "Literal",
                    "value": 1,
                    "raw": "1",
                    "start": 759,
                    "end": 760
                  },
                  "prefix": true,
                  "start": 758,
                  "end": 760
                },
                "alternate": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "error",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 771,
                    "end": 776
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "Literal",
                      "value": "Should never get here",
                      "raw": "\"Should never get here\"",
                      "start": 777,
                      "end": 800
                    }
                  ],
                  "optional": false,
                  "start": 771,
                  "end": 801
                },
                "start": 735,
                "end": 801
              },
              "start": 702,
              "end": 801
            },
            "start": 695,
            "end": 802
          }
        ],
        "start": 689,
        "end": 804
      },
      "expression": false,
      "start": 648,
      "end": 804
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "check",
        "optional": false,
        "typeAnnotation": null,
        "start": 815,
        "end": 820
      },
      "generator": false,
      "async": false,
      "declare": false,
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
              "start": 821,
              "end": 822
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 821,
            "end": 822
          }
        ],
        "start": 820,
        "end": 823
      },
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
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "T",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 827,
                    "end": 828
                  },
                  "typeArguments": null,
                  "start": 827,
                  "end": 828
                },
                {
                  "type": "TSUndefinedKeyword",
                  "start": 831,
                  "end": 840
                }
              ],
              "start": 827,
              "end": 840
            },
            "start": 825,
            "end": 840
          },
          "start": 824,
          "end": 840
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "LogicalExpression",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 855,
                "end": 856
              },
              "operator": "||",
              "right": {
                "type": "CallExpression",
                "callee": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "error",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 860,
                  "end": 865
                },
                "typeArguments": null,
                "arguments": [
                  {
                    "type": "Literal",
                    "value": "Undefined value",
                    "raw": "\"Undefined value\"",
                    "start": 866,
                    "end": 883
                  }
                ],
                "optional": false,
                "start": 860,
                "end": 884
              },
              "start": 855,
              "end": 884
            },
            "start": 848,
            "end": 885
          }
        ],
        "start": 842,
        "end": 887
      },
      "expression": false,
      "start": 806,
      "end": 887
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
        "start": 895,
        "end": 896
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
              "name": "void1",
              "optional": false,
              "typeAnnotation": null,
              "start": 903,
              "end": 908
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
                    "type": "ThrowStatement",
                    "argument": {
                      "type": "NewExpression",
                      "callee": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Error",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 931,
                        "end": 936
                      },
                      "typeArguments": null,
                      "arguments": [],
                      "start": 927,
                      "end": 938
                    },
                    "start": 921,
                    "end": 939
                  }
                ],
                "start": 911,
                "end": 945
              },
              "expression": false,
              "start": 908,
              "end": 945
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 903,
            "end": 945
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "void2",
              "optional": false,
              "typeAnnotation": null,
              "start": 950,
              "end": 955
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
                    "type": "WhileStatement",
                    "test": {
                      "type": "Literal",
                      "value": true,
                      "raw": "true",
                      "start": 975,
                      "end": 979
                    },
                    "body": {
                      "type": "BlockStatement",
                      "body": [],
                      "start": 981,
                      "end": 983
                    },
                    "start": 968,
                    "end": 983
                  }
                ],
                "start": 958,
                "end": 989
              },
              "expression": false,
              "start": 955,
              "end": 989
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 950,
            "end": 989
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "never1",
              "optional": false,
              "typeAnnotation": null,
              "start": 994,
              "end": 1000
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
                  "start": 1004,
                  "end": 1009
                },
                "start": 1002,
                "end": 1009
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
                        "start": 1030,
                        "end": 1035
                      },
                      "typeArguments": null,
                      "arguments": [],
                      "start": 1026,
                      "end": 1037
                    },
                    "start": 1020,
                    "end": 1038
                  }
                ],
                "start": 1010,
                "end": 1044
              },
              "expression": false,
              "start": 1000,
              "end": 1044
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 994,
            "end": 1044
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "never2",
              "optional": false,
              "typeAnnotation": null,
              "start": 1049,
              "end": 1055
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
                  "start": 1059,
                  "end": 1064
                },
                "start": 1057,
                "end": 1064
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
                      "start": 1082,
                      "end": 1086
                    },
                    "body": {
                      "type": "BlockStatement",
                      "body": [],
                      "start": 1088,
                      "end": 1090
                    },
                    "start": 1075,
                    "end": 1090
                  }
                ],
                "start": 1065,
                "end": 1096
              },
              "expression": false,
              "start": 1055,
              "end": 1096
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 1049,
            "end": 1096
          }
        ],
        "start": 897,
        "end": 1098
      },
      "abstract": false,
      "declare": false,
      "start": 889,
      "end": 1098
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f1",
        "optional": false,
        "typeAnnotation": null,
        "start": 1109,
        "end": 1111
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
                  "start": 1115,
                  "end": 1121
                },
                {
                  "type": "TSNumberKeyword",
                  "start": 1124,
                  "end": 1130
                }
              ],
              "start": 1115,
              "end": 1130
            },
            "start": 1113,
            "end": 1130
          },
          "start": 1112,
          "end": 1130
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
                  "start": 1149,
                  "end": 1150
                },
                "prefix": true,
                "start": 1142,
                "end": 1150
              },
              "operator": "===",
              "right": {
                "type": "Literal",
                "value": "boolean",
                "raw": "\"boolean\"",
                "start": 1155,
                "end": 1164
              },
              "start": 1142,
              "end": 1164
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
                    "start": 1176,
                    "end": 1177
                  },
                  "directive": null,
                  "start": 1176,
                  "end": 1178
                }
              ],
              "start": 1166,
              "end": 1194
            },
            "alternate": null,
            "start": 1138,
            "end": 1194
          }
        ],
        "start": 1132,
        "end": 1196
      },
      "expression": false,
      "start": 1100,
      "end": 1196
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f2",
        "optional": false,
        "typeAnnotation": null,
        "start": 1207,
        "end": 1209
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
                  "start": 1213,
                  "end": 1219
                },
                {
                  "type": "TSNumberKeyword",
                  "start": 1222,
                  "end": 1228
                }
              ],
              "start": 1213,
              "end": 1228
            },
            "start": 1211,
            "end": 1228
          },
          "start": 1210,
          "end": 1228
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "WhileStatement",
            "test": {
              "type": "Literal",
              "value": true,
              "raw": "true",
              "start": 1243,
              "end": 1247
            },
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
                        "start": 1270,
                        "end": 1271
                      },
                      "prefix": true,
                      "start": 1263,
                      "end": 1271
                    },
                    "operator": "===",
                    "right": {
                      "type": "Literal",
                      "value": "boolean",
                      "raw": "\"boolean\"",
                      "start": 1276,
                      "end": 1285
                    },
                    "start": 1263,
                    "end": 1285
                  },
                  "consequent": {
                    "type": "BlockStatement",
                    "body": [
                      {
                        "type": "ReturnStatement",
                        "argument": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1308,
                          "end": 1309
                        },
                        "start": 1301,
                        "end": 1310
                      }
                    ],
                    "start": 1287,
                    "end": 1330
                  },
                  "alternate": null,
                  "start": 1259,
                  "end": 1330
                }
              ],
              "start": 1249,
              "end": 1336
            },
            "start": 1236,
            "end": 1336
          }
        ],
        "start": 1230,
        "end": 1338
      },
      "expression": false,
      "start": 1198,
      "end": 1338
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "test",
        "optional": false,
        "typeAnnotation": null,
        "start": 1349,
        "end": 1353
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "cb",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSFunctionType",
              "typeParameters": null,
              "params": [],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSStringKeyword",
                  "start": 1364,
                  "end": 1370
                },
                "start": 1361,
                "end": 1370
              },
              "start": 1358,
              "end": 1370
            },
            "start": 1356,
            "end": 1370
          },
          "start": 1354,
          "end": 1370
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
                  "name": "s",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1382,
                  "end": 1383
                },
                "init": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "cb",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1386,
                    "end": 1388
                  },
                  "typeArguments": null,
                  "arguments": [],
                  "optional": false,
                  "start": 1386,
                  "end": 1390
                },
                "definite": false,
                "start": 1382,
                "end": 1390
              }
            ],
            "declare": false,
            "start": 1378,
            "end": 1391
          },
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "Identifier",
              "decorators": [],
              "name": "s",
              "optional": false,
              "typeAnnotation": null,
              "start": 1403,
              "end": 1404
            },
            "start": 1396,
            "end": 1405
          }
        ],
        "start": 1372,
        "end": 1407
      },
      "expression": false,
      "start": 1340,
      "end": 1407
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
            "name": "errorCallback",
            "optional": false,
            "typeAnnotation": null,
            "start": 1413,
            "end": 1426
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "expression": true,
            "async": false,
            "typeParameters": null,
            "params": [],
            "returnType": null,
            "body": {
              "type": "CallExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "error",
                "optional": false,
                "typeAnnotation": null,
                "start": 1435,
                "end": 1440
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Literal",
                  "value": "Error callback",
                  "raw": "\"Error callback\"",
                  "start": 1441,
                  "end": 1457
                }
              ],
              "optional": false,
              "start": 1435,
              "end": 1458
            },
            "id": null,
            "generator": false,
            "start": 1429,
            "end": 1458
          },
          "definite": false,
          "start": 1413,
          "end": 1458
        }
      ],
      "declare": false,
      "start": 1409,
      "end": 1459
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "test",
          "optional": false,
          "typeAnnotation": null,
          "start": 1461,
          "end": 1465
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "ArrowFunctionExpression",
            "expression": true,
            "async": false,
            "typeParameters": null,
            "params": [],
            "returnType": null,
            "body": {
              "type": "Literal",
              "value": "hello",
              "raw": "\"hello\"",
              "start": 1472,
              "end": 1479
            },
            "id": null,
            "generator": false,
            "start": 1466,
            "end": 1479
          }
        ],
        "optional": false,
        "start": 1461,
        "end": 1480
      },
      "directive": null,
      "start": 1461,
      "end": 1481
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "test",
          "optional": false,
          "typeAnnotation": null,
          "start": 1482,
          "end": 1486
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "ArrowFunctionExpression",
            "expression": true,
            "async": false,
            "typeParameters": null,
            "params": [],
            "returnType": null,
            "body": {
              "type": "CallExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "fail",
                "optional": false,
                "typeAnnotation": null,
                "start": 1493,
                "end": 1497
              },
              "typeArguments": null,
              "arguments": [],
              "optional": false,
              "start": 1493,
              "end": 1499
            },
            "id": null,
            "generator": false,
            "start": 1487,
            "end": 1499
          }
        ],
        "optional": false,
        "start": 1482,
        "end": 1500
      },
      "directive": null,
      "start": 1482,
      "end": 1501
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "test",
          "optional": false,
          "typeAnnotation": null,
          "start": 1502,
          "end": 1506
        },
        "typeArguments": null,
        "arguments": [
          {
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
                  "type": "ThrowStatement",
                  "argument": {
                    "type": "NewExpression",
                    "callee": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Error",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1525,
                      "end": 1530
                    },
                    "typeArguments": null,
                    "arguments": [],
                    "start": 1521,
                    "end": 1532
                  },
                  "start": 1515,
                  "end": 1533
                }
              ],
              "start": 1513,
              "end": 1535
            },
            "id": null,
            "generator": false,
            "start": 1507,
            "end": 1535
          }
        ],
        "optional": false,
        "start": 1502,
        "end": 1536
      },
      "directive": null,
      "start": 1502,
      "end": 1536
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "test",
          "optional": false,
          "typeAnnotation": null,
          "start": 1537,
          "end": 1541
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "errorCallback",
            "optional": false,
            "typeAnnotation": null,
            "start": 1542,
            "end": 1555
          }
        ],
        "optional": false,
        "start": 1537,
        "end": 1556
      },
      "directive": null,
      "start": 1537,
      "end": 1557
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 1557
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
    "value": "error",
    "start": 9,
    "end": 14
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 14,
    "end": 15
  },
  {
    "type": "Identifier",
    "value": "message",
    "start": 15,
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
    "value": "errorVoid",
    "start": 83,
    "end": 92
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 92,
    "end": 93
  },
  {
    "type": "Identifier",
    "value": "message",
    "start": 93,
    "end": 100
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 100,
    "end": 101
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 102,
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
    "value": "throw",
    "start": 116,
    "end": 121
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 122,
    "end": 125
  },
  {
    "type": "Identifier",
    "value": "Error",
    "start": 126,
    "end": 131
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 131,
    "end": 132
  },
  {
    "type": "Identifier",
    "value": "message",
    "start": 132,
    "end": 139
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 139,
    "end": 140
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 140,
    "end": 141
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 142,
    "end": 143
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 145,
    "end": 153
  },
  {
    "type": "Identifier",
    "value": "fail",
    "start": 154,
    "end": 158
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 158,
    "end": 159
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 159,
    "end": 160
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 161,
    "end": 162
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 167,
    "end": 173
  },
  {
    "type": "Identifier",
    "value": "error",
    "start": 174,
    "end": 179
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 179,
    "end": 180
  },
  {
    "type": "String",
    "value": "\"Something failed\"",
    "start": 180,
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
    "value": ";",
    "start": 199,
    "end": 200
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 201,
    "end": 202
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 204,
    "end": 212
  },
  {
    "type": "Identifier",
    "value": "failOrThrow",
    "start": 213,
    "end": 224
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 224,
    "end": 225
  },
  {
    "type": "Identifier",
    "value": "shouldFail",
    "start": 225,
    "end": 235
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 235,
    "end": 236
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 237,
    "end": 244
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 244,
    "end": 245
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 246,
    "end": 247
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 252,
    "end": 254
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 255,
    "end": 256
  },
  {
    "type": "Identifier",
    "value": "shouldFail",
    "start": 256,
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
    "value": "{",
    "start": 268,
    "end": 269
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 278,
    "end": 284
  },
  {
    "type": "Identifier",
    "value": "fail",
    "start": 285,
    "end": 289
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 289,
    "end": 290
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 290,
    "end": 291
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 291,
    "end": 292
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 297,
    "end": 298
  },
  {
    "type": "Keyword",
    "value": "throw",
    "start": 303,
    "end": 308
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 309,
    "end": 312
  },
  {
    "type": "Identifier",
    "value": "Error",
    "start": 313,
    "end": 318
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 318,
    "end": 319
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 319,
    "end": 320
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 320,
    "end": 321
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 322,
    "end": 323
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 325,
    "end": 333
  },
  {
    "type": "Identifier",
    "value": "infiniteLoop1",
    "start": 334,
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
    "value": "{",
    "start": 350,
    "end": 351
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
    "value": "true",
    "start": 363,
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
    "value": "{",
    "start": 369,
    "end": 370
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 375,
    "end": 376
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 377,
    "end": 378
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 380,
    "end": 388
  },
  {
    "type": "Identifier",
    "value": "infiniteLoop2",
    "start": 389,
    "end": 402
  },
  {
    "type": "Punctuator",
    "value": "(",
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
    "value": ":",
    "start": 404,
    "end": 405
  },
  {
    "type": "Identifier",
    "value": "never",
    "start": 406,
    "end": 411
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 412,
    "end": 413
  },
  {
    "type": "Keyword",
    "value": "while",
    "start": 418,
    "end": 423
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 424,
    "end": 425
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 425,
    "end": 429
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 429,
    "end": 430
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 431,
    "end": 432
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 437,
    "end": 438
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 439,
    "end": 440
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 442,
    "end": 450
  },
  {
    "type": "Identifier",
    "value": "move1",
    "start": 451,
    "end": 456
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 456,
    "end": 457
  },
  {
    "type": "Identifier",
    "value": "direction",
    "start": 457,
    "end": 466
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 466,
    "end": 467
  },
  {
    "type": "String",
    "value": "\"up\"",
    "start": 468,
    "end": 472
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 473,
    "end": 474
  },
  {
    "type": "String",
    "value": "\"down\"",
    "start": 475,
    "end": 481
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 481,
    "end": 482
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 483,
    "end": 484
  },
  {
    "type": "Keyword",
    "value": "switch",
    "start": 489,
    "end": 495
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 496,
    "end": 497
  },
  {
    "type": "Identifier",
    "value": "direction",
    "start": 497,
    "end": 506
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 506,
    "end": 507
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 508,
    "end": 509
  },
  {
    "type": "Keyword",
    "value": "case",
    "start": 518,
    "end": 522
  },
  {
    "type": "String",
    "value": "\"up\"",
    "start": 523,
    "end": 527
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 527,
    "end": 528
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 541,
    "end": 547
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 548,
    "end": 549
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 549,
    "end": 550
  },
  {
    "type": "Keyword",
    "value": "case",
    "start": 559,
    "end": 563
  },
  {
    "type": "String",
    "value": "\"down\"",
    "start": 564,
    "end": 570
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 570,
    "end": 571
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 584,
    "end": 590
  },
  {
    "type": "Punctuator",
    "value": "-",
    "start": 591,
    "end": 592
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 592,
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
    "start": 600,
    "end": 601
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 606,
    "end": 612
  },
  {
    "type": "Identifier",
    "value": "error",
    "start": 613,
    "end": 618
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 618,
    "end": 619
  },
  {
    "type": "String",
    "value": "\"Should never get here\"",
    "start": 619,
    "end": 642
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 642,
    "end": 643
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 643,
    "end": 644
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 645,
    "end": 646
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 648,
    "end": 656
  },
  {
    "type": "Identifier",
    "value": "move2",
    "start": 657,
    "end": 662
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 662,
    "end": 663
  },
  {
    "type": "Identifier",
    "value": "direction",
    "start": 663,
    "end": 672
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 672,
    "end": 673
  },
  {
    "type": "String",
    "value": "\"up\"",
    "start": 674,
    "end": 678
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 679,
    "end": 680
  },
  {
    "type": "String",
    "value": "\"down\"",
    "start": 681,
    "end": 687
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 687,
    "end": 688
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 689,
    "end": 690
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 695,
    "end": 701
  },
  {
    "type": "Identifier",
    "value": "direction",
    "start": 702,
    "end": 711
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 712,
    "end": 715
  },
  {
    "type": "String",
    "value": "\"up\"",
    "start": 716,
    "end": 720
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 721,
    "end": 722
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 723,
    "end": 724
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 725,
    "end": 726
  },
  {
    "type": "Identifier",
    "value": "direction",
    "start": 735,
    "end": 744
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 745,
    "end": 748
  },
  {
    "type": "String",
    "value": "\"down\"",
    "start": 749,
    "end": 755
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 756,
    "end": 757
  },
  {
    "type": "Punctuator",
    "value": "-",
    "start": 758,
    "end": 759
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 759,
    "end": 760
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 761,
    "end": 762
  },
  {
    "type": "Identifier",
    "value": "error",
    "start": 771,
    "end": 776
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 776,
    "end": 777
  },
  {
    "type": "String",
    "value": "\"Should never get here\"",
    "start": 777,
    "end": 800
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 800,
    "end": 801
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 801,
    "end": 802
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 803,
    "end": 804
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 806,
    "end": 814
  },
  {
    "type": "Identifier",
    "value": "check",
    "start": 815,
    "end": 820
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 820,
    "end": 821
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 821,
    "end": 822
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 822,
    "end": 823
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 823,
    "end": 824
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 824,
    "end": 825
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 825,
    "end": 826
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 827,
    "end": 828
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 829,
    "end": 830
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 831,
    "end": 840
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 840,
    "end": 841
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 842,
    "end": 843
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 848,
    "end": 854
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 855,
    "end": 856
  },
  {
    "type": "Punctuator",
    "value": "||",
    "start": 857,
    "end": 859
  },
  {
    "type": "Identifier",
    "value": "error",
    "start": 860,
    "end": 865
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 865,
    "end": 866
  },
  {
    "type": "String",
    "value": "\"Undefined value\"",
    "start": 866,
    "end": 883
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 883,
    "end": 884
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 884,
    "end": 885
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 886,
    "end": 887
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 889,
    "end": 894
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 895,
    "end": 896
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 897,
    "end": 898
  },
  {
    "type": "Identifier",
    "value": "void1",
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
    "value": "{",
    "start": 911,
    "end": 912
  },
  {
    "type": "Keyword",
    "value": "throw",
    "start": 921,
    "end": 926
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 927,
    "end": 930
  },
  {
    "type": "Identifier",
    "value": "Error",
    "start": 931,
    "end": 936
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 936,
    "end": 937
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 937,
    "end": 938
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 938,
    "end": 939
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 944,
    "end": 945
  },
  {
    "type": "Identifier",
    "value": "void2",
    "start": 950,
    "end": 955
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 955,
    "end": 956
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 956,
    "end": 957
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 958,
    "end": 959
  },
  {
    "type": "Keyword",
    "value": "while",
    "start": 968,
    "end": 973
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 974,
    "end": 975
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 975,
    "end": 979
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 979,
    "end": 980
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 981,
    "end": 982
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 982,
    "end": 983
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 988,
    "end": 989
  },
  {
    "type": "Identifier",
    "value": "never1",
    "start": 994,
    "end": 1000
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1000,
    "end": 1001
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1001,
    "end": 1002
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1002,
    "end": 1003
  },
  {
    "type": "Identifier",
    "value": "never",
    "start": 1004,
    "end": 1009
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1010,
    "end": 1011
  },
  {
    "type": "Keyword",
    "value": "throw",
    "start": 1020,
    "end": 1025
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 1026,
    "end": 1029
  },
  {
    "type": "Identifier",
    "value": "Error",
    "start": 1030,
    "end": 1035
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1035,
    "end": 1036
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1036,
    "end": 1037
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1037,
    "end": 1038
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1043,
    "end": 1044
  },
  {
    "type": "Identifier",
    "value": "never2",
    "start": 1049,
    "end": 1055
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1055,
    "end": 1056
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1056,
    "end": 1057
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1057,
    "end": 1058
  },
  {
    "type": "Identifier",
    "value": "never",
    "start": 1059,
    "end": 1064
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1065,
    "end": 1066
  },
  {
    "type": "Keyword",
    "value": "while",
    "start": 1075,
    "end": 1080
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1081,
    "end": 1082
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 1082,
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
    "type": "Punctuator",
    "value": "}",
    "start": 1089,
    "end": 1090
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1095,
    "end": 1096
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1097,
    "end": 1098
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1100,
    "end": 1108
  },
  {
    "type": "Identifier",
    "value": "f1",
    "start": 1109,
    "end": 1111
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1111,
    "end": 1112
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1112,
    "end": 1113
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1113,
    "end": 1114
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1115,
    "end": 1121
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 1122,
    "end": 1123
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1124,
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
    "value": "if",
    "start": 1138,
    "end": 1140
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1141,
    "end": 1142
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 1142,
    "end": 1148
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1149,
    "end": 1150
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 1151,
    "end": 1154
  },
  {
    "type": "String",
    "value": "\"boolean\"",
    "start": 1155,
    "end": 1164
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1164,
    "end": 1165
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1166,
    "end": 1167
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1176,
    "end": 1177
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1177,
    "end": 1178
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1193,
    "end": 1194
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1195,
    "end": 1196
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1198,
    "end": 1206
  },
  {
    "type": "Identifier",
    "value": "f2",
    "start": 1207,
    "end": 1209
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1209,
    "end": 1210
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1210,
    "end": 1211
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1211,
    "end": 1212
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1213,
    "end": 1219
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 1220,
    "end": 1221
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1222,
    "end": 1228
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1228,
    "end": 1229
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1230,
    "end": 1231
  },
  {
    "type": "Keyword",
    "value": "while",
    "start": 1236,
    "end": 1241
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1242,
    "end": 1243
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 1243,
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
    "type": "Keyword",
    "value": "if",
    "start": 1259,
    "end": 1261
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1262,
    "end": 1263
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 1263,
    "end": 1269
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1270,
    "end": 1271
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 1272,
    "end": 1275
  },
  {
    "type": "String",
    "value": "\"boolean\"",
    "start": 1276,
    "end": 1285
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1285,
    "end": 1286
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1287,
    "end": 1288
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 1301,
    "end": 1307
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1308,
    "end": 1309
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1309,
    "end": 1310
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1329,
    "end": 1330
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1335,
    "end": 1336
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1337,
    "end": 1338
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1340,
    "end": 1348
  },
  {
    "type": "Identifier",
    "value": "test",
    "start": 1349,
    "end": 1353
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1353,
    "end": 1354
  },
  {
    "type": "Identifier",
    "value": "cb",
    "start": 1354,
    "end": 1356
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1356,
    "end": 1357
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1358,
    "end": 1359
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1359,
    "end": 1360
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1361,
    "end": 1363
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1364,
    "end": 1370
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1370,
    "end": 1371
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1372,
    "end": 1373
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 1378,
    "end": 1381
  },
  {
    "type": "Identifier",
    "value": "s",
    "start": 1382,
    "end": 1383
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1384,
    "end": 1385
  },
  {
    "type": "Identifier",
    "value": "cb",
    "start": 1386,
    "end": 1388
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1388,
    "end": 1389
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1389,
    "end": 1390
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1390,
    "end": 1391
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 1396,
    "end": 1402
  },
  {
    "type": "Identifier",
    "value": "s",
    "start": 1403,
    "end": 1404
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1404,
    "end": 1405
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1406,
    "end": 1407
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 1409,
    "end": 1412
  },
  {
    "type": "Identifier",
    "value": "errorCallback",
    "start": 1413,
    "end": 1426
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1427,
    "end": 1428
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1429,
    "end": 1430
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1430,
    "end": 1431
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1432,
    "end": 1434
  },
  {
    "type": "Identifier",
    "value": "error",
    "start": 1435,
    "end": 1440
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1440,
    "end": 1441
  },
  {
    "type": "String",
    "value": "\"Error callback\"",
    "start": 1441,
    "end": 1457
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1457,
    "end": 1458
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1458,
    "end": 1459
  },
  {
    "type": "Identifier",
    "value": "test",
    "start": 1461,
    "end": 1465
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1465,
    "end": 1466
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1466,
    "end": 1467
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1467,
    "end": 1468
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1469,
    "end": 1471
  },
  {
    "type": "String",
    "value": "\"hello\"",
    "start": 1472,
    "end": 1479
  },
  {
    "type": "Punctuator",
    "value": ")",
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
    "type": "Identifier",
    "value": "test",
    "start": 1482,
    "end": 1486
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1486,
    "end": 1487
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1487,
    "end": 1488
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1488,
    "end": 1489
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1490,
    "end": 1492
  },
  {
    "type": "Identifier",
    "value": "fail",
    "start": 1493,
    "end": 1497
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1497,
    "end": 1498
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1498,
    "end": 1499
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1499,
    "end": 1500
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1500,
    "end": 1501
  },
  {
    "type": "Identifier",
    "value": "test",
    "start": 1502,
    "end": 1506
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1506,
    "end": 1507
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1507,
    "end": 1508
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1508,
    "end": 1509
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1510,
    "end": 1512
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1513,
    "end": 1514
  },
  {
    "type": "Keyword",
    "value": "throw",
    "start": 1515,
    "end": 1520
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 1521,
    "end": 1524
  },
  {
    "type": "Identifier",
    "value": "Error",
    "start": 1525,
    "end": 1530
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1530,
    "end": 1531
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1531,
    "end": 1532
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1532,
    "end": 1533
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1534,
    "end": 1535
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1535,
    "end": 1536
  },
  {
    "type": "Identifier",
    "value": "test",
    "start": 1537,
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
    "value": "errorCallback",
    "start": 1542,
    "end": 1555
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1555,
    "end": 1556
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1556,
    "end": 1557
  }
]
```
