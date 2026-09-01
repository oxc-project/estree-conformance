__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
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
            "name": "console",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "members": [
                  {
                    "type": "TSMethodSignature",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "log",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 27,
                      "end": 30
                    },
                    "computed": false,
                    "optional": false,
                    "kind": "method",
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
                            "type": "TSAnyKeyword",
                            "start": 36,
                            "end": 39
                          },
                          "start": 34,
                          "end": 39
                        },
                        "start": 31,
                        "end": 39
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSVoidKeyword",
                        "start": 42,
                        "end": 46
                      },
                      "start": 40,
                      "end": 46
                    },
                    "accessibility": null,
                    "readonly": false,
                    "static": false,
                    "start": 27,
                    "end": 47
                  }
                ],
                "start": 21,
                "end": 49
              },
              "start": 19,
              "end": 49
            },
            "start": 12,
            "end": 49
          },
          "init": null,
          "definite": false,
          "start": 12,
          "end": 49
        }
      ],
      "declare": true,
      "start": 0,
      "end": 49
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Robot",
        "optional": false,
        "typeAnnotation": null,
        "start": 55,
        "end": 60
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTupleType",
        "elementTypes": [
          {
            "type": "TSNumberKeyword",
            "start": 64,
            "end": 70
          },
          {
            "type": "TSStringKeyword",
            "start": 72,
            "end": 78
          },
          {
            "type": "TSStringKeyword",
            "start": 80,
            "end": 86
          }
        ],
        "start": 63,
        "end": 87
      },
      "declare": false,
      "start": 50,
      "end": 88
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "MultiSkilledRobot",
        "optional": false,
        "typeAnnotation": null,
        "start": 94,
        "end": 111
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTupleType",
        "elementTypes": [
          {
            "type": "TSStringKeyword",
            "start": 115,
            "end": 121
          },
          {
            "type": "TSTupleType",
            "elementTypes": [
              {
                "type": "TSStringKeyword",
                "start": 124,
                "end": 130
              },
              {
                "type": "TSStringKeyword",
                "start": 132,
                "end": 138
              }
            ],
            "start": 123,
            "end": 139
          }
        ],
        "start": 114,
        "end": 140
      },
      "declare": false,
      "start": 89,
      "end": 141
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
            "name": "robotA",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Robot",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 155,
                  "end": 160
                },
                "typeArguments": null,
                "start": 155,
                "end": 160
              },
              "start": 153,
              "end": 160
            },
            "start": 147,
            "end": 160
          },
          "init": {
            "type": "ArrayExpression",
            "elements": [
              {
                "type": "Literal",
                "value": 1,
                "raw": "1",
                "start": 164,
                "end": 165
              },
              {
                "type": "Literal",
                "value": "mower",
                "raw": "\"mower\"",
                "start": 167,
                "end": 174
              },
              {
                "type": "Literal",
                "value": "mowing",
                "raw": "\"mowing\"",
                "start": 176,
                "end": 184
              }
            ],
            "start": 163,
            "end": 185
          },
          "definite": false,
          "start": 147,
          "end": 185
        }
      ],
      "declare": false,
      "start": 143,
      "end": 186
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "getRobot",
        "optional": false,
        "typeAnnotation": null,
        "start": 196,
        "end": 204
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
              "type": "Identifier",
              "decorators": [],
              "name": "robotA",
              "optional": false,
              "typeAnnotation": null,
              "start": 220,
              "end": 226
            },
            "start": 213,
            "end": 227
          }
        ],
        "start": 207,
        "end": 229
      },
      "expression": false,
      "start": 187,
      "end": 229
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
            "name": "multiRobotA",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "MultiSkilledRobot",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 248,
                  "end": 265
                },
                "typeArguments": null,
                "start": 248,
                "end": 265
              },
              "start": 246,
              "end": 265
            },
            "start": 235,
            "end": 265
          },
          "init": {
            "type": "ArrayExpression",
            "elements": [
              {
                "type": "Literal",
                "value": "mower",
                "raw": "\"mower\"",
                "start": 269,
                "end": 276
              },
              {
                "type": "ArrayExpression",
                "elements": [
                  {
                    "type": "Literal",
                    "value": "mowing",
                    "raw": "\"mowing\"",
                    "start": 279,
                    "end": 287
                  },
                  {
                    "type": "Literal",
                    "value": "",
                    "raw": "\"\"",
                    "start": 289,
                    "end": 291
                  }
                ],
                "start": 278,
                "end": 292
              }
            ],
            "start": 268,
            "end": 293
          },
          "definite": false,
          "start": 235,
          "end": 293
        }
      ],
      "declare": false,
      "start": 231,
      "end": 294
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
            "name": "multiRobotB",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "MultiSkilledRobot",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 312,
                  "end": 329
                },
                "typeArguments": null,
                "start": 312,
                "end": 329
              },
              "start": 310,
              "end": 329
            },
            "start": 299,
            "end": 329
          },
          "init": {
            "type": "ArrayExpression",
            "elements": [
              {
                "type": "Literal",
                "value": "trimmer",
                "raw": "\"trimmer\"",
                "start": 333,
                "end": 342
              },
              {
                "type": "ArrayExpression",
                "elements": [
                  {
                    "type": "Literal",
                    "value": "trimming",
                    "raw": "\"trimming\"",
                    "start": 345,
                    "end": 355
                  },
                  {
                    "type": "Literal",
                    "value": "edging",
                    "raw": "\"edging\"",
                    "start": 357,
                    "end": 365
                  }
                ],
                "start": 344,
                "end": 366
              }
            ],
            "start": 332,
            "end": 367
          },
          "definite": false,
          "start": 299,
          "end": 367
        }
      ],
      "declare": false,
      "start": 295,
      "end": 368
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "getMultiRobot",
        "optional": false,
        "typeAnnotation": null,
        "start": 378,
        "end": 391
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
              "type": "Identifier",
              "decorators": [],
              "name": "multiRobotA",
              "optional": false,
              "typeAnnotation": null,
              "start": 407,
              "end": 418
            },
            "start": 400,
            "end": 419
          }
        ],
        "start": 394,
        "end": 421
      },
      "expression": false,
      "start": 369,
      "end": 421
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
            "name": "nameA",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 434,
                "end": 440
              },
              "start": 432,
              "end": 440
            },
            "start": 427,
            "end": 440
          },
          "init": null,
          "definite": false,
          "start": 427,
          "end": 440
        },
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "primarySkillA",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 457,
                "end": 463
              },
              "start": 455,
              "end": 463
            },
            "start": 442,
            "end": 463
          },
          "init": null,
          "definite": false,
          "start": 442,
          "end": 463
        },
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "secondarySkillA",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 482,
                "end": 488
              },
              "start": 480,
              "end": 488
            },
            "start": 465,
            "end": 488
          },
          "init": null,
          "definite": false,
          "start": 465,
          "end": 488
        }
      ],
      "declare": false,
      "start": 423,
      "end": 489
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
            "name": "numberB",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 503,
                "end": 509
              },
              "start": 501,
              "end": 509
            },
            "start": 494,
            "end": 509
          },
          "init": null,
          "definite": false,
          "start": 494,
          "end": 509
        },
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "nameB",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 518,
                "end": 524
              },
              "start": 516,
              "end": 524
            },
            "start": 511,
            "end": 524
          },
          "init": null,
          "definite": false,
          "start": 511,
          "end": 524
        }
      ],
      "declare": false,
      "start": 490,
      "end": 525
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
            "name": "numberA2",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 540,
                "end": 546
              },
              "start": 538,
              "end": 546
            },
            "start": 530,
            "end": 546
          },
          "init": null,
          "definite": false,
          "start": 530,
          "end": 546
        },
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "nameA2",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 556,
                "end": 562
              },
              "start": 554,
              "end": 562
            },
            "start": 548,
            "end": 562
          },
          "init": null,
          "definite": false,
          "start": 548,
          "end": 562
        },
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "skillA2",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 573,
                "end": 579
              },
              "start": 571,
              "end": 579
            },
            "start": 564,
            "end": 579
          },
          "init": null,
          "definite": false,
          "start": 564,
          "end": 579
        },
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "nameMA",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 589,
                "end": 595
              },
              "start": 587,
              "end": 595
            },
            "start": 581,
            "end": 595
          },
          "init": null,
          "definite": false,
          "start": 581,
          "end": 595
        }
      ],
      "declare": false,
      "start": 526,
      "end": 596
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
            "name": "numberA3",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 611,
                "end": 617
              },
              "start": 609,
              "end": 617
            },
            "start": 601,
            "end": 617
          },
          "init": null,
          "definite": false,
          "start": 601,
          "end": 617
        },
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "robotAInfo",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSArrayType",
                "elementType": {
                  "type": "TSUnionType",
                  "types": [
                    {
                      "type": "TSNumberKeyword",
                      "start": 632,
                      "end": 638
                    },
                    {
                      "type": "TSStringKeyword",
                      "start": 641,
                      "end": 647
                    }
                  ],
                  "start": 632,
                  "end": 647
                },
                "start": 631,
                "end": 650
              },
              "start": 629,
              "end": 650
            },
            "start": 619,
            "end": 650
          },
          "init": null,
          "definite": false,
          "start": 619,
          "end": 650
        },
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "multiRobotAInfo",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSArrayType",
                "elementType": {
                  "type": "TSUnionType",
                  "types": [
                    {
                      "type": "TSStringKeyword",
                      "start": 670,
                      "end": 676
                    },
                    {
                      "type": "TSTupleType",
                      "elementTypes": [
                        {
                          "type": "TSStringKeyword",
                          "start": 680,
                          "end": 686
                        },
                        {
                          "type": "TSStringKeyword",
                          "start": 688,
                          "end": 694
                        }
                      ],
                      "start": 679,
                      "end": 695
                    }
                  ],
                  "start": 670,
                  "end": 695
                },
                "start": 669,
                "end": 698
              },
              "start": 667,
              "end": 698
            },
            "start": 652,
            "end": 698
          },
          "init": null,
          "definite": false,
          "start": 652,
          "end": 698
        }
      ],
      "declare": false,
      "start": 597,
      "end": 699
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
            "name": "i",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 707,
                "end": 713
              },
              "start": 705,
              "end": 713
            },
            "start": 704,
            "end": 713
          },
          "init": null,
          "definite": false,
          "start": 704,
          "end": 713
        }
      ],
      "declare": false,
      "start": 700,
      "end": 714
    },
    {
      "type": "ForStatement",
      "init": {
        "type": "SequenceExpression",
        "expressions": [
          {
            "type": "AssignmentExpression",
            "operator": "=",
            "left": {
              "type": "ArrayPattern",
              "decorators": [],
              "elements": [
                null,
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "nameA",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 724,
                  "end": 729
                }
              ],
              "optional": false,
              "typeAnnotation": null,
              "start": 721,
              "end": 730
            },
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "robotA",
              "optional": false,
              "typeAnnotation": null,
              "start": 733,
              "end": 739
            },
            "start": 721,
            "end": 739
          },
          {
            "type": "AssignmentExpression",
            "operator": "=",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "i",
              "optional": false,
              "typeAnnotation": null,
              "start": 741,
              "end": 742
            },
            "right": {
              "type": "Literal",
              "value": 0,
              "raw": "0",
              "start": 745,
              "end": 746
            },
            "start": 741,
            "end": 746
          }
        ],
        "start": 721,
        "end": 746
      },
      "test": {
        "type": "BinaryExpression",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "i",
          "optional": false,
          "typeAnnotation": null,
          "start": 748,
          "end": 749
        },
        "operator": "<",
        "right": {
          "type": "Literal",
          "value": 1,
          "raw": "1",
          "start": 752,
          "end": 753
        },
        "start": 748,
        "end": 753
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
          "start": 755,
          "end": 756
        },
        "start": 755,
        "end": 758
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
                  "type": "Identifier",
                  "decorators": [],
                  "name": "console",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 766,
                  "end": 773
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "log",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 774,
                  "end": 777
                },
                "optional": false,
                "computed": false,
                "start": 766,
                "end": 777
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "nameA",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 778,
                  "end": 783
                }
              ],
              "optional": false,
              "start": 766,
              "end": 784
            },
            "directive": null,
            "start": 766,
            "end": 785
          }
        ],
        "start": 760,
        "end": 787
      },
      "start": 716,
      "end": 787
    },
    {
      "type": "ForStatement",
      "init": {
        "type": "SequenceExpression",
        "expressions": [
          {
            "type": "AssignmentExpression",
            "operator": "=",
            "left": {
              "type": "ArrayPattern",
              "decorators": [],
              "elements": [
                null,
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "nameA",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 796,
                  "end": 801
                }
              ],
              "optional": false,
              "typeAnnotation": null,
              "start": 793,
              "end": 802
            },
            "right": {
              "type": "CallExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "getRobot",
                "optional": false,
                "typeAnnotation": null,
                "start": 805,
                "end": 813
              },
              "typeArguments": null,
              "arguments": [],
              "optional": false,
              "start": 805,
              "end": 815
            },
            "start": 793,
            "end": 815
          },
          {
            "type": "AssignmentExpression",
            "operator": "=",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "i",
              "optional": false,
              "typeAnnotation": null,
              "start": 817,
              "end": 818
            },
            "right": {
              "type": "Literal",
              "value": 0,
              "raw": "0",
              "start": 821,
              "end": 822
            },
            "start": 817,
            "end": 822
          }
        ],
        "start": 793,
        "end": 822
      },
      "test": {
        "type": "BinaryExpression",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "i",
          "optional": false,
          "typeAnnotation": null,
          "start": 824,
          "end": 825
        },
        "operator": "<",
        "right": {
          "type": "Literal",
          "value": 1,
          "raw": "1",
          "start": 828,
          "end": 829
        },
        "start": 824,
        "end": 829
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
          "start": 831,
          "end": 832
        },
        "start": 831,
        "end": 834
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
                  "type": "Identifier",
                  "decorators": [],
                  "name": "console",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 842,
                  "end": 849
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "log",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 850,
                  "end": 853
                },
                "optional": false,
                "computed": false,
                "start": 842,
                "end": 853
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "nameA",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 854,
                  "end": 859
                }
              ],
              "optional": false,
              "start": 842,
              "end": 860
            },
            "directive": null,
            "start": 842,
            "end": 861
          }
        ],
        "start": 836,
        "end": 863
      },
      "start": 788,
      "end": 863
    },
    {
      "type": "ForStatement",
      "init": {
        "type": "SequenceExpression",
        "expressions": [
          {
            "type": "AssignmentExpression",
            "operator": "=",
            "left": {
              "type": "ArrayPattern",
              "decorators": [],
              "elements": [
                null,
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "nameA",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 872,
                  "end": 877
                }
              ],
              "optional": false,
              "typeAnnotation": null,
              "start": 869,
              "end": 878
            },
            "right": {
              "type": "ArrayExpression",
              "elements": [
                {
                  "type": "Literal",
                  "value": 2,
                  "raw": "2",
                  "start": 882,
                  "end": 883
                },
                {
                  "type": "Literal",
                  "value": "trimmer",
                  "raw": "\"trimmer\"",
                  "start": 885,
                  "end": 894
                },
                {
                  "type": "Literal",
                  "value": "trimming",
                  "raw": "\"trimming\"",
                  "start": 896,
                  "end": 906
                }
              ],
              "start": 881,
              "end": 907
            },
            "start": 869,
            "end": 907
          },
          {
            "type": "AssignmentExpression",
            "operator": "=",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "i",
              "optional": false,
              "typeAnnotation": null,
              "start": 909,
              "end": 910
            },
            "right": {
              "type": "Literal",
              "value": 0,
              "raw": "0",
              "start": 913,
              "end": 914
            },
            "start": 909,
            "end": 914
          }
        ],
        "start": 869,
        "end": 914
      },
      "test": {
        "type": "BinaryExpression",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "i",
          "optional": false,
          "typeAnnotation": null,
          "start": 916,
          "end": 917
        },
        "operator": "<",
        "right": {
          "type": "Literal",
          "value": 1,
          "raw": "1",
          "start": 920,
          "end": 921
        },
        "start": 916,
        "end": 921
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
          "start": 923,
          "end": 924
        },
        "start": 923,
        "end": 926
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
                  "type": "Identifier",
                  "decorators": [],
                  "name": "console",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 934,
                  "end": 941
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "log",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 942,
                  "end": 945
                },
                "optional": false,
                "computed": false,
                "start": 934,
                "end": 945
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "nameA",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 946,
                  "end": 951
                }
              ],
              "optional": false,
              "start": 934,
              "end": 952
            },
            "directive": null,
            "start": 934,
            "end": 953
          }
        ],
        "start": 928,
        "end": 955
      },
      "start": 864,
      "end": 955
    },
    {
      "type": "ForStatement",
      "init": {
        "type": "SequenceExpression",
        "expressions": [
          {
            "type": "AssignmentExpression",
            "operator": "=",
            "left": {
              "type": "ArrayPattern",
              "decorators": [],
              "elements": [
                null,
                {
                  "type": "ArrayPattern",
                  "decorators": [],
                  "elements": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "primarySkillA",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 965,
                      "end": 978
                    },
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "secondarySkillA",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 980,
                      "end": 995
                    }
                  ],
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 964,
                  "end": 996
                }
              ],
              "optional": false,
              "typeAnnotation": null,
              "start": 961,
              "end": 997
            },
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "multiRobotA",
              "optional": false,
              "typeAnnotation": null,
              "start": 1000,
              "end": 1011
            },
            "start": 961,
            "end": 1011
          },
          {
            "type": "AssignmentExpression",
            "operator": "=",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "i",
              "optional": false,
              "typeAnnotation": null,
              "start": 1013,
              "end": 1014
            },
            "right": {
              "type": "Literal",
              "value": 0,
              "raw": "0",
              "start": 1017,
              "end": 1018
            },
            "start": 1013,
            "end": 1018
          }
        ],
        "start": 961,
        "end": 1018
      },
      "test": {
        "type": "BinaryExpression",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "i",
          "optional": false,
          "typeAnnotation": null,
          "start": 1020,
          "end": 1021
        },
        "operator": "<",
        "right": {
          "type": "Literal",
          "value": 1,
          "raw": "1",
          "start": 1024,
          "end": 1025
        },
        "start": 1020,
        "end": 1025
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
          "start": 1027,
          "end": 1028
        },
        "start": 1027,
        "end": 1030
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
                  "type": "Identifier",
                  "decorators": [],
                  "name": "console",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1038,
                  "end": 1045
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "log",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1046,
                  "end": 1049
                },
                "optional": false,
                "computed": false,
                "start": 1038,
                "end": 1049
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "primarySkillA",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1050,
                  "end": 1063
                }
              ],
              "optional": false,
              "start": 1038,
              "end": 1064
            },
            "directive": null,
            "start": 1038,
            "end": 1065
          }
        ],
        "start": 1032,
        "end": 1067
      },
      "start": 956,
      "end": 1067
    },
    {
      "type": "ForStatement",
      "init": {
        "type": "SequenceExpression",
        "expressions": [
          {
            "type": "AssignmentExpression",
            "operator": "=",
            "left": {
              "type": "ArrayPattern",
              "decorators": [],
              "elements": [
                null,
                {
                  "type": "ArrayPattern",
                  "decorators": [],
                  "elements": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "primarySkillA",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1077,
                      "end": 1090
                    },
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "secondarySkillA",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1092,
                      "end": 1107
                    }
                  ],
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1076,
                  "end": 1108
                }
              ],
              "optional": false,
              "typeAnnotation": null,
              "start": 1073,
              "end": 1109
            },
            "right": {
              "type": "CallExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "getMultiRobot",
                "optional": false,
                "typeAnnotation": null,
                "start": 1112,
                "end": 1125
              },
              "typeArguments": null,
              "arguments": [],
              "optional": false,
              "start": 1112,
              "end": 1127
            },
            "start": 1073,
            "end": 1127
          },
          {
            "type": "AssignmentExpression",
            "operator": "=",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "i",
              "optional": false,
              "typeAnnotation": null,
              "start": 1129,
              "end": 1130
            },
            "right": {
              "type": "Literal",
              "value": 0,
              "raw": "0",
              "start": 1133,
              "end": 1134
            },
            "start": 1129,
            "end": 1134
          }
        ],
        "start": 1073,
        "end": 1134
      },
      "test": {
        "type": "BinaryExpression",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "i",
          "optional": false,
          "typeAnnotation": null,
          "start": 1136,
          "end": 1137
        },
        "operator": "<",
        "right": {
          "type": "Literal",
          "value": 1,
          "raw": "1",
          "start": 1140,
          "end": 1141
        },
        "start": 1136,
        "end": 1141
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
          "start": 1143,
          "end": 1144
        },
        "start": 1143,
        "end": 1146
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
                  "type": "Identifier",
                  "decorators": [],
                  "name": "console",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1154,
                  "end": 1161
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "log",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1162,
                  "end": 1165
                },
                "optional": false,
                "computed": false,
                "start": 1154,
                "end": 1165
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "primarySkillA",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1166,
                  "end": 1179
                }
              ],
              "optional": false,
              "start": 1154,
              "end": 1180
            },
            "directive": null,
            "start": 1154,
            "end": 1181
          }
        ],
        "start": 1148,
        "end": 1183
      },
      "start": 1068,
      "end": 1183
    },
    {
      "type": "ForStatement",
      "init": {
        "type": "SequenceExpression",
        "expressions": [
          {
            "type": "AssignmentExpression",
            "operator": "=",
            "left": {
              "type": "ArrayPattern",
              "decorators": [],
              "elements": [
                null,
                {
                  "type": "ArrayPattern",
                  "decorators": [],
                  "elements": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "primarySkillA",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1193,
                      "end": 1206
                    },
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "secondarySkillA",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1208,
                      "end": 1223
                    }
                  ],
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1192,
                  "end": 1224
                }
              ],
              "optional": false,
              "typeAnnotation": null,
              "start": 1189,
              "end": 1225
            },
            "right": {
              "type": "ArrayExpression",
              "elements": [
                {
                  "type": "Literal",
                  "value": "trimmer",
                  "raw": "\"trimmer\"",
                  "start": 1229,
                  "end": 1238
                },
                {
                  "type": "ArrayExpression",
                  "elements": [
                    {
                      "type": "Literal",
                      "value": "trimming",
                      "raw": "\"trimming\"",
                      "start": 1241,
                      "end": 1251
                    },
                    {
                      "type": "Literal",
                      "value": "edging",
                      "raw": "\"edging\"",
                      "start": 1253,
                      "end": 1261
                    }
                  ],
                  "start": 1240,
                  "end": 1262
                }
              ],
              "start": 1228,
              "end": 1263
            },
            "start": 1189,
            "end": 1263
          },
          {
            "type": "AssignmentExpression",
            "operator": "=",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "i",
              "optional": false,
              "typeAnnotation": null,
              "start": 1265,
              "end": 1266
            },
            "right": {
              "type": "Literal",
              "value": 0,
              "raw": "0",
              "start": 1269,
              "end": 1270
            },
            "start": 1265,
            "end": 1270
          }
        ],
        "start": 1189,
        "end": 1270
      },
      "test": {
        "type": "BinaryExpression",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "i",
          "optional": false,
          "typeAnnotation": null,
          "start": 1272,
          "end": 1273
        },
        "operator": "<",
        "right": {
          "type": "Literal",
          "value": 1,
          "raw": "1",
          "start": 1276,
          "end": 1277
        },
        "start": 1272,
        "end": 1277
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
          "start": 1279,
          "end": 1280
        },
        "start": 1279,
        "end": 1282
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
                  "type": "Identifier",
                  "decorators": [],
                  "name": "console",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1290,
                  "end": 1297
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "log",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1298,
                  "end": 1301
                },
                "optional": false,
                "computed": false,
                "start": 1290,
                "end": 1301
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "primarySkillA",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1302,
                  "end": 1315
                }
              ],
              "optional": false,
              "start": 1290,
              "end": 1316
            },
            "directive": null,
            "start": 1290,
            "end": 1317
          }
        ],
        "start": 1284,
        "end": 1319
      },
      "start": 1184,
      "end": 1319
    },
    {
      "type": "ForStatement",
      "init": {
        "type": "SequenceExpression",
        "expressions": [
          {
            "type": "AssignmentExpression",
            "operator": "=",
            "left": {
              "type": "ArrayPattern",
              "decorators": [],
              "elements": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "numberB",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1327,
                  "end": 1334
                }
              ],
              "optional": false,
              "typeAnnotation": null,
              "start": 1326,
              "end": 1335
            },
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "robotA",
              "optional": false,
              "typeAnnotation": null,
              "start": 1338,
              "end": 1344
            },
            "start": 1326,
            "end": 1344
          },
          {
            "type": "AssignmentExpression",
            "operator": "=",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "i",
              "optional": false,
              "typeAnnotation": null,
              "start": 1346,
              "end": 1347
            },
            "right": {
              "type": "Literal",
              "value": 0,
              "raw": "0",
              "start": 1350,
              "end": 1351
            },
            "start": 1346,
            "end": 1351
          }
        ],
        "start": 1326,
        "end": 1351
      },
      "test": {
        "type": "BinaryExpression",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "i",
          "optional": false,
          "typeAnnotation": null,
          "start": 1353,
          "end": 1354
        },
        "operator": "<",
        "right": {
          "type": "Literal",
          "value": 1,
          "raw": "1",
          "start": 1357,
          "end": 1358
        },
        "start": 1353,
        "end": 1358
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
          "start": 1360,
          "end": 1361
        },
        "start": 1360,
        "end": 1363
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
                  "type": "Identifier",
                  "decorators": [],
                  "name": "console",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1371,
                  "end": 1378
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "log",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1379,
                  "end": 1382
                },
                "optional": false,
                "computed": false,
                "start": 1371,
                "end": 1382
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "numberB",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1383,
                  "end": 1390
                }
              ],
              "optional": false,
              "start": 1371,
              "end": 1391
            },
            "directive": null,
            "start": 1371,
            "end": 1392
          }
        ],
        "start": 1365,
        "end": 1394
      },
      "start": 1321,
      "end": 1394
    },
    {
      "type": "ForStatement",
      "init": {
        "type": "SequenceExpression",
        "expressions": [
          {
            "type": "AssignmentExpression",
            "operator": "=",
            "left": {
              "type": "ArrayPattern",
              "decorators": [],
              "elements": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "numberB",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1401,
                  "end": 1408
                }
              ],
              "optional": false,
              "typeAnnotation": null,
              "start": 1400,
              "end": 1409
            },
            "right": {
              "type": "CallExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "getRobot",
                "optional": false,
                "typeAnnotation": null,
                "start": 1412,
                "end": 1420
              },
              "typeArguments": null,
              "arguments": [],
              "optional": false,
              "start": 1412,
              "end": 1422
            },
            "start": 1400,
            "end": 1422
          },
          {
            "type": "AssignmentExpression",
            "operator": "=",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "i",
              "optional": false,
              "typeAnnotation": null,
              "start": 1424,
              "end": 1425
            },
            "right": {
              "type": "Literal",
              "value": 0,
              "raw": "0",
              "start": 1428,
              "end": 1429
            },
            "start": 1424,
            "end": 1429
          }
        ],
        "start": 1400,
        "end": 1429
      },
      "test": {
        "type": "BinaryExpression",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "i",
          "optional": false,
          "typeAnnotation": null,
          "start": 1431,
          "end": 1432
        },
        "operator": "<",
        "right": {
          "type": "Literal",
          "value": 1,
          "raw": "1",
          "start": 1435,
          "end": 1436
        },
        "start": 1431,
        "end": 1436
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
          "start": 1438,
          "end": 1439
        },
        "start": 1438,
        "end": 1441
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
                  "type": "Identifier",
                  "decorators": [],
                  "name": "console",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1449,
                  "end": 1456
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "log",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1457,
                  "end": 1460
                },
                "optional": false,
                "computed": false,
                "start": 1449,
                "end": 1460
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "numberB",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1461,
                  "end": 1468
                }
              ],
              "optional": false,
              "start": 1449,
              "end": 1469
            },
            "directive": null,
            "start": 1449,
            "end": 1470
          }
        ],
        "start": 1443,
        "end": 1472
      },
      "start": 1395,
      "end": 1472
    },
    {
      "type": "ForStatement",
      "init": {
        "type": "SequenceExpression",
        "expressions": [
          {
            "type": "AssignmentExpression",
            "operator": "=",
            "left": {
              "type": "ArrayPattern",
              "decorators": [],
              "elements": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "numberB",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1479,
                  "end": 1486
                }
              ],
              "optional": false,
              "typeAnnotation": null,
              "start": 1478,
              "end": 1487
            },
            "right": {
              "type": "ArrayExpression",
              "elements": [
                {
                  "type": "Literal",
                  "value": 2,
                  "raw": "2",
                  "start": 1491,
                  "end": 1492
                },
                {
                  "type": "Literal",
                  "value": "trimmer",
                  "raw": "\"trimmer\"",
                  "start": 1494,
                  "end": 1503
                },
                {
                  "type": "Literal",
                  "value": "trimming",
                  "raw": "\"trimming\"",
                  "start": 1505,
                  "end": 1515
                }
              ],
              "start": 1490,
              "end": 1516
            },
            "start": 1478,
            "end": 1516
          },
          {
            "type": "AssignmentExpression",
            "operator": "=",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "i",
              "optional": false,
              "typeAnnotation": null,
              "start": 1518,
              "end": 1519
            },
            "right": {
              "type": "Literal",
              "value": 0,
              "raw": "0",
              "start": 1522,
              "end": 1523
            },
            "start": 1518,
            "end": 1523
          }
        ],
        "start": 1478,
        "end": 1523
      },
      "test": {
        "type": "BinaryExpression",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "i",
          "optional": false,
          "typeAnnotation": null,
          "start": 1525,
          "end": 1526
        },
        "operator": "<",
        "right": {
          "type": "Literal",
          "value": 1,
          "raw": "1",
          "start": 1529,
          "end": 1530
        },
        "start": 1525,
        "end": 1530
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
          "start": 1532,
          "end": 1533
        },
        "start": 1532,
        "end": 1535
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
                  "type": "Identifier",
                  "decorators": [],
                  "name": "console",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1543,
                  "end": 1550
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "log",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1551,
                  "end": 1554
                },
                "optional": false,
                "computed": false,
                "start": 1543,
                "end": 1554
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "numberB",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1555,
                  "end": 1562
                }
              ],
              "optional": false,
              "start": 1543,
              "end": 1563
            },
            "directive": null,
            "start": 1543,
            "end": 1564
          }
        ],
        "start": 1537,
        "end": 1566
      },
      "start": 1473,
      "end": 1566
    },
    {
      "type": "ForStatement",
      "init": {
        "type": "SequenceExpression",
        "expressions": [
          {
            "type": "AssignmentExpression",
            "operator": "=",
            "left": {
              "type": "ArrayPattern",
              "decorators": [],
              "elements": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "nameB",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1573,
                  "end": 1578
                }
              ],
              "optional": false,
              "typeAnnotation": null,
              "start": 1572,
              "end": 1579
            },
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "multiRobotA",
              "optional": false,
              "typeAnnotation": null,
              "start": 1582,
              "end": 1593
            },
            "start": 1572,
            "end": 1593
          },
          {
            "type": "AssignmentExpression",
            "operator": "=",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "i",
              "optional": false,
              "typeAnnotation": null,
              "start": 1595,
              "end": 1596
            },
            "right": {
              "type": "Literal",
              "value": 0,
              "raw": "0",
              "start": 1599,
              "end": 1600
            },
            "start": 1595,
            "end": 1600
          }
        ],
        "start": 1572,
        "end": 1600
      },
      "test": {
        "type": "BinaryExpression",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "i",
          "optional": false,
          "typeAnnotation": null,
          "start": 1602,
          "end": 1603
        },
        "operator": "<",
        "right": {
          "type": "Literal",
          "value": 1,
          "raw": "1",
          "start": 1606,
          "end": 1607
        },
        "start": 1602,
        "end": 1607
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
          "start": 1609,
          "end": 1610
        },
        "start": 1609,
        "end": 1612
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
                  "type": "Identifier",
                  "decorators": [],
                  "name": "console",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1620,
                  "end": 1627
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "log",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1628,
                  "end": 1631
                },
                "optional": false,
                "computed": false,
                "start": 1620,
                "end": 1631
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "nameB",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1632,
                  "end": 1637
                }
              ],
              "optional": false,
              "start": 1620,
              "end": 1638
            },
            "directive": null,
            "start": 1620,
            "end": 1639
          }
        ],
        "start": 1614,
        "end": 1641
      },
      "start": 1567,
      "end": 1641
    },
    {
      "type": "ForStatement",
      "init": {
        "type": "SequenceExpression",
        "expressions": [
          {
            "type": "AssignmentExpression",
            "operator": "=",
            "left": {
              "type": "ArrayPattern",
              "decorators": [],
              "elements": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "nameB",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1648,
                  "end": 1653
                }
              ],
              "optional": false,
              "typeAnnotation": null,
              "start": 1647,
              "end": 1654
            },
            "right": {
              "type": "CallExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "getMultiRobot",
                "optional": false,
                "typeAnnotation": null,
                "start": 1657,
                "end": 1670
              },
              "typeArguments": null,
              "arguments": [],
              "optional": false,
              "start": 1657,
              "end": 1672
            },
            "start": 1647,
            "end": 1672
          },
          {
            "type": "AssignmentExpression",
            "operator": "=",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "i",
              "optional": false,
              "typeAnnotation": null,
              "start": 1674,
              "end": 1675
            },
            "right": {
              "type": "Literal",
              "value": 0,
              "raw": "0",
              "start": 1678,
              "end": 1679
            },
            "start": 1674,
            "end": 1679
          }
        ],
        "start": 1647,
        "end": 1679
      },
      "test": {
        "type": "BinaryExpression",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "i",
          "optional": false,
          "typeAnnotation": null,
          "start": 1681,
          "end": 1682
        },
        "operator": "<",
        "right": {
          "type": "Literal",
          "value": 1,
          "raw": "1",
          "start": 1685,
          "end": 1686
        },
        "start": 1681,
        "end": 1686
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
          "start": 1688,
          "end": 1689
        },
        "start": 1688,
        "end": 1691
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
                  "type": "Identifier",
                  "decorators": [],
                  "name": "console",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1699,
                  "end": 1706
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "log",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1707,
                  "end": 1710
                },
                "optional": false,
                "computed": false,
                "start": 1699,
                "end": 1710
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "nameB",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1711,
                  "end": 1716
                }
              ],
              "optional": false,
              "start": 1699,
              "end": 1717
            },
            "directive": null,
            "start": 1699,
            "end": 1718
          }
        ],
        "start": 1693,
        "end": 1720
      },
      "start": 1642,
      "end": 1720
    },
    {
      "type": "ForStatement",
      "init": {
        "type": "SequenceExpression",
        "expressions": [
          {
            "type": "AssignmentExpression",
            "operator": "=",
            "left": {
              "type": "ArrayPattern",
              "decorators": [],
              "elements": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "nameB",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1727,
                  "end": 1732
                }
              ],
              "optional": false,
              "typeAnnotation": null,
              "start": 1726,
              "end": 1733
            },
            "right": {
              "type": "ArrayExpression",
              "elements": [
                {
                  "type": "Literal",
                  "value": "trimmer",
                  "raw": "\"trimmer\"",
                  "start": 1737,
                  "end": 1746
                },
                {
                  "type": "ArrayExpression",
                  "elements": [
                    {
                      "type": "Literal",
                      "value": "trimming",
                      "raw": "\"trimming\"",
                      "start": 1749,
                      "end": 1759
                    },
                    {
                      "type": "Literal",
                      "value": "edging",
                      "raw": "\"edging\"",
                      "start": 1761,
                      "end": 1769
                    }
                  ],
                  "start": 1748,
                  "end": 1770
                }
              ],
              "start": 1736,
              "end": 1771
            },
            "start": 1726,
            "end": 1771
          },
          {
            "type": "AssignmentExpression",
            "operator": "=",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "i",
              "optional": false,
              "typeAnnotation": null,
              "start": 1773,
              "end": 1774
            },
            "right": {
              "type": "Literal",
              "value": 0,
              "raw": "0",
              "start": 1777,
              "end": 1778
            },
            "start": 1773,
            "end": 1778
          }
        ],
        "start": 1726,
        "end": 1778
      },
      "test": {
        "type": "BinaryExpression",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "i",
          "optional": false,
          "typeAnnotation": null,
          "start": 1780,
          "end": 1781
        },
        "operator": "<",
        "right": {
          "type": "Literal",
          "value": 1,
          "raw": "1",
          "start": 1784,
          "end": 1785
        },
        "start": 1780,
        "end": 1785
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
          "start": 1787,
          "end": 1788
        },
        "start": 1787,
        "end": 1790
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
                  "type": "Identifier",
                  "decorators": [],
                  "name": "console",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1798,
                  "end": 1805
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "log",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1806,
                  "end": 1809
                },
                "optional": false,
                "computed": false,
                "start": 1798,
                "end": 1809
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "nameB",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1810,
                  "end": 1815
                }
              ],
              "optional": false,
              "start": 1798,
              "end": 1816
            },
            "directive": null,
            "start": 1798,
            "end": 1817
          }
        ],
        "start": 1792,
        "end": 1819
      },
      "start": 1721,
      "end": 1819
    },
    {
      "type": "ForStatement",
      "init": {
        "type": "SequenceExpression",
        "expressions": [
          {
            "type": "AssignmentExpression",
            "operator": "=",
            "left": {
              "type": "ArrayPattern",
              "decorators": [],
              "elements": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "numberA2",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1827,
                  "end": 1835
                },
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "nameA2",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1837,
                  "end": 1843
                },
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "skillA2",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1845,
                  "end": 1852
                }
              ],
              "optional": false,
              "typeAnnotation": null,
              "start": 1826,
              "end": 1853
            },
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "robotA",
              "optional": false,
              "typeAnnotation": null,
              "start": 1856,
              "end": 1862
            },
            "start": 1826,
            "end": 1862
          },
          {
            "type": "AssignmentExpression",
            "operator": "=",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "i",
              "optional": false,
              "typeAnnotation": null,
              "start": 1864,
              "end": 1865
            },
            "right": {
              "type": "Literal",
              "value": 0,
              "raw": "0",
              "start": 1868,
              "end": 1869
            },
            "start": 1864,
            "end": 1869
          }
        ],
        "start": 1826,
        "end": 1869
      },
      "test": {
        "type": "BinaryExpression",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "i",
          "optional": false,
          "typeAnnotation": null,
          "start": 1871,
          "end": 1872
        },
        "operator": "<",
        "right": {
          "type": "Literal",
          "value": 1,
          "raw": "1",
          "start": 1875,
          "end": 1876
        },
        "start": 1871,
        "end": 1876
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
          "start": 1878,
          "end": 1879
        },
        "start": 1878,
        "end": 1881
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
                  "type": "Identifier",
                  "decorators": [],
                  "name": "console",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1889,
                  "end": 1896
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "log",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1897,
                  "end": 1900
                },
                "optional": false,
                "computed": false,
                "start": 1889,
                "end": 1900
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "nameA2",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1901,
                  "end": 1907
                }
              ],
              "optional": false,
              "start": 1889,
              "end": 1908
            },
            "directive": null,
            "start": 1889,
            "end": 1909
          }
        ],
        "start": 1883,
        "end": 1911
      },
      "start": 1821,
      "end": 1911
    },
    {
      "type": "ForStatement",
      "init": {
        "type": "SequenceExpression",
        "expressions": [
          {
            "type": "AssignmentExpression",
            "operator": "=",
            "left": {
              "type": "ArrayPattern",
              "decorators": [],
              "elements": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "numberA2",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1918,
                  "end": 1926
                },
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "nameA2",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1928,
                  "end": 1934
                },
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "skillA2",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1936,
                  "end": 1943
                }
              ],
              "optional": false,
              "typeAnnotation": null,
              "start": 1917,
              "end": 1944
            },
            "right": {
              "type": "CallExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "getRobot",
                "optional": false,
                "typeAnnotation": null,
                "start": 1947,
                "end": 1955
              },
              "typeArguments": null,
              "arguments": [],
              "optional": false,
              "start": 1947,
              "end": 1957
            },
            "start": 1917,
            "end": 1957
          },
          {
            "type": "AssignmentExpression",
            "operator": "=",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "i",
              "optional": false,
              "typeAnnotation": null,
              "start": 1959,
              "end": 1960
            },
            "right": {
              "type": "Literal",
              "value": 0,
              "raw": "0",
              "start": 1963,
              "end": 1964
            },
            "start": 1959,
            "end": 1964
          }
        ],
        "start": 1917,
        "end": 1964
      },
      "test": {
        "type": "BinaryExpression",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "i",
          "optional": false,
          "typeAnnotation": null,
          "start": 1966,
          "end": 1967
        },
        "operator": "<",
        "right": {
          "type": "Literal",
          "value": 1,
          "raw": "1",
          "start": 1970,
          "end": 1971
        },
        "start": 1966,
        "end": 1971
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
          "start": 1973,
          "end": 1974
        },
        "start": 1973,
        "end": 1976
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
                  "type": "Identifier",
                  "decorators": [],
                  "name": "console",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1984,
                  "end": 1991
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "log",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1992,
                  "end": 1995
                },
                "optional": false,
                "computed": false,
                "start": 1984,
                "end": 1995
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "nameA2",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1996,
                  "end": 2002
                }
              ],
              "optional": false,
              "start": 1984,
              "end": 2003
            },
            "directive": null,
            "start": 1984,
            "end": 2004
          }
        ],
        "start": 1978,
        "end": 2006
      },
      "start": 1912,
      "end": 2006
    },
    {
      "type": "ForStatement",
      "init": {
        "type": "SequenceExpression",
        "expressions": [
          {
            "type": "AssignmentExpression",
            "operator": "=",
            "left": {
              "type": "ArrayPattern",
              "decorators": [],
              "elements": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "numberA2",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2013,
                  "end": 2021
                },
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "nameA2",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2023,
                  "end": 2029
                },
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "skillA2",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2031,
                  "end": 2038
                }
              ],
              "optional": false,
              "typeAnnotation": null,
              "start": 2012,
              "end": 2039
            },
            "right": {
              "type": "ArrayExpression",
              "elements": [
                {
                  "type": "Literal",
                  "value": 2,
                  "raw": "2",
                  "start": 2043,
                  "end": 2044
                },
                {
                  "type": "Literal",
                  "value": "trimmer",
                  "raw": "\"trimmer\"",
                  "start": 2046,
                  "end": 2055
                },
                {
                  "type": "Literal",
                  "value": "trimming",
                  "raw": "\"trimming\"",
                  "start": 2057,
                  "end": 2067
                }
              ],
              "start": 2042,
              "end": 2068
            },
            "start": 2012,
            "end": 2068
          },
          {
            "type": "AssignmentExpression",
            "operator": "=",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "i",
              "optional": false,
              "typeAnnotation": null,
              "start": 2070,
              "end": 2071
            },
            "right": {
              "type": "Literal",
              "value": 0,
              "raw": "0",
              "start": 2074,
              "end": 2075
            },
            "start": 2070,
            "end": 2075
          }
        ],
        "start": 2012,
        "end": 2075
      },
      "test": {
        "type": "BinaryExpression",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "i",
          "optional": false,
          "typeAnnotation": null,
          "start": 2077,
          "end": 2078
        },
        "operator": "<",
        "right": {
          "type": "Literal",
          "value": 1,
          "raw": "1",
          "start": 2081,
          "end": 2082
        },
        "start": 2077,
        "end": 2082
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
          "start": 2084,
          "end": 2085
        },
        "start": 2084,
        "end": 2087
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
                  "type": "Identifier",
                  "decorators": [],
                  "name": "console",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2095,
                  "end": 2102
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "log",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2103,
                  "end": 2106
                },
                "optional": false,
                "computed": false,
                "start": 2095,
                "end": 2106
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "nameA2",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2107,
                  "end": 2113
                }
              ],
              "optional": false,
              "start": 2095,
              "end": 2114
            },
            "directive": null,
            "start": 2095,
            "end": 2115
          }
        ],
        "start": 2089,
        "end": 2117
      },
      "start": 2007,
      "end": 2117
    },
    {
      "type": "ForStatement",
      "init": {
        "type": "SequenceExpression",
        "expressions": [
          {
            "type": "AssignmentExpression",
            "operator": "=",
            "left": {
              "type": "ArrayPattern",
              "decorators": [],
              "elements": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "nameMA",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2124,
                  "end": 2130
                },
                {
                  "type": "ArrayPattern",
                  "decorators": [],
                  "elements": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "primarySkillA",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2133,
                      "end": 2146
                    },
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "secondarySkillA",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2148,
                      "end": 2163
                    }
                  ],
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2132,
                  "end": 2164
                }
              ],
              "optional": false,
              "typeAnnotation": null,
              "start": 2123,
              "end": 2165
            },
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "multiRobotA",
              "optional": false,
              "typeAnnotation": null,
              "start": 2168,
              "end": 2179
            },
            "start": 2123,
            "end": 2179
          },
          {
            "type": "AssignmentExpression",
            "operator": "=",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "i",
              "optional": false,
              "typeAnnotation": null,
              "start": 2181,
              "end": 2182
            },
            "right": {
              "type": "Literal",
              "value": 0,
              "raw": "0",
              "start": 2185,
              "end": 2186
            },
            "start": 2181,
            "end": 2186
          }
        ],
        "start": 2123,
        "end": 2186
      },
      "test": {
        "type": "BinaryExpression",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "i",
          "optional": false,
          "typeAnnotation": null,
          "start": 2188,
          "end": 2189
        },
        "operator": "<",
        "right": {
          "type": "Literal",
          "value": 1,
          "raw": "1",
          "start": 2192,
          "end": 2193
        },
        "start": 2188,
        "end": 2193
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
          "start": 2195,
          "end": 2196
        },
        "start": 2195,
        "end": 2198
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
                  "type": "Identifier",
                  "decorators": [],
                  "name": "console",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2206,
                  "end": 2213
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "log",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2214,
                  "end": 2217
                },
                "optional": false,
                "computed": false,
                "start": 2206,
                "end": 2217
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "nameMA",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2218,
                  "end": 2224
                }
              ],
              "optional": false,
              "start": 2206,
              "end": 2225
            },
            "directive": null,
            "start": 2206,
            "end": 2226
          }
        ],
        "start": 2200,
        "end": 2228
      },
      "start": 2118,
      "end": 2228
    },
    {
      "type": "ForStatement",
      "init": {
        "type": "SequenceExpression",
        "expressions": [
          {
            "type": "AssignmentExpression",
            "operator": "=",
            "left": {
              "type": "ArrayPattern",
              "decorators": [],
              "elements": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "nameMA",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2235,
                  "end": 2241
                },
                {
                  "type": "ArrayPattern",
                  "decorators": [],
                  "elements": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "primarySkillA",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2244,
                      "end": 2257
                    },
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "secondarySkillA",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2259,
                      "end": 2274
                    }
                  ],
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2243,
                  "end": 2275
                }
              ],
              "optional": false,
              "typeAnnotation": null,
              "start": 2234,
              "end": 2276
            },
            "right": {
              "type": "CallExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "getMultiRobot",
                "optional": false,
                "typeAnnotation": null,
                "start": 2279,
                "end": 2292
              },
              "typeArguments": null,
              "arguments": [],
              "optional": false,
              "start": 2279,
              "end": 2294
            },
            "start": 2234,
            "end": 2294
          },
          {
            "type": "AssignmentExpression",
            "operator": "=",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "i",
              "optional": false,
              "typeAnnotation": null,
              "start": 2296,
              "end": 2297
            },
            "right": {
              "type": "Literal",
              "value": 0,
              "raw": "0",
              "start": 2300,
              "end": 2301
            },
            "start": 2296,
            "end": 2301
          }
        ],
        "start": 2234,
        "end": 2301
      },
      "test": {
        "type": "BinaryExpression",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "i",
          "optional": false,
          "typeAnnotation": null,
          "start": 2303,
          "end": 2304
        },
        "operator": "<",
        "right": {
          "type": "Literal",
          "value": 1,
          "raw": "1",
          "start": 2307,
          "end": 2308
        },
        "start": 2303,
        "end": 2308
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
          "start": 2310,
          "end": 2311
        },
        "start": 2310,
        "end": 2313
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
                  "type": "Identifier",
                  "decorators": [],
                  "name": "console",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2321,
                  "end": 2328
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "log",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2329,
                  "end": 2332
                },
                "optional": false,
                "computed": false,
                "start": 2321,
                "end": 2332
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "nameMA",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2333,
                  "end": 2339
                }
              ],
              "optional": false,
              "start": 2321,
              "end": 2340
            },
            "directive": null,
            "start": 2321,
            "end": 2341
          }
        ],
        "start": 2315,
        "end": 2343
      },
      "start": 2229,
      "end": 2343
    },
    {
      "type": "ForStatement",
      "init": {
        "type": "SequenceExpression",
        "expressions": [
          {
            "type": "AssignmentExpression",
            "operator": "=",
            "left": {
              "type": "ArrayPattern",
              "decorators": [],
              "elements": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "nameMA",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2350,
                  "end": 2356
                },
                {
                  "type": "ArrayPattern",
                  "decorators": [],
                  "elements": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "primarySkillA",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2359,
                      "end": 2372
                    },
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "secondarySkillA",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2374,
                      "end": 2389
                    }
                  ],
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2358,
                  "end": 2390
                }
              ],
              "optional": false,
              "typeAnnotation": null,
              "start": 2349,
              "end": 2391
            },
            "right": {
              "type": "ArrayExpression",
              "elements": [
                {
                  "type": "Literal",
                  "value": "trimmer",
                  "raw": "\"trimmer\"",
                  "start": 2395,
                  "end": 2404
                },
                {
                  "type": "ArrayExpression",
                  "elements": [
                    {
                      "type": "Literal",
                      "value": "trimming",
                      "raw": "\"trimming\"",
                      "start": 2407,
                      "end": 2417
                    },
                    {
                      "type": "Literal",
                      "value": "edging",
                      "raw": "\"edging\"",
                      "start": 2419,
                      "end": 2427
                    }
                  ],
                  "start": 2406,
                  "end": 2428
                }
              ],
              "start": 2394,
              "end": 2429
            },
            "start": 2349,
            "end": 2429
          },
          {
            "type": "AssignmentExpression",
            "operator": "=",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "i",
              "optional": false,
              "typeAnnotation": null,
              "start": 2431,
              "end": 2432
            },
            "right": {
              "type": "Literal",
              "value": 0,
              "raw": "0",
              "start": 2435,
              "end": 2436
            },
            "start": 2431,
            "end": 2436
          }
        ],
        "start": 2349,
        "end": 2436
      },
      "test": {
        "type": "BinaryExpression",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "i",
          "optional": false,
          "typeAnnotation": null,
          "start": 2438,
          "end": 2439
        },
        "operator": "<",
        "right": {
          "type": "Literal",
          "value": 1,
          "raw": "1",
          "start": 2442,
          "end": 2443
        },
        "start": 2438,
        "end": 2443
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
          "start": 2445,
          "end": 2446
        },
        "start": 2445,
        "end": 2448
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
                  "type": "Identifier",
                  "decorators": [],
                  "name": "console",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2456,
                  "end": 2463
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "log",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2464,
                  "end": 2467
                },
                "optional": false,
                "computed": false,
                "start": 2456,
                "end": 2467
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "nameMA",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2468,
                  "end": 2474
                }
              ],
              "optional": false,
              "start": 2456,
              "end": 2475
            },
            "directive": null,
            "start": 2456,
            "end": 2476
          }
        ],
        "start": 2450,
        "end": 2478
      },
      "start": 2344,
      "end": 2478
    },
    {
      "type": "ForStatement",
      "init": {
        "type": "SequenceExpression",
        "expressions": [
          {
            "type": "AssignmentExpression",
            "operator": "=",
            "left": {
              "type": "ArrayPattern",
              "decorators": [],
              "elements": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "numberA3",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2486,
                  "end": 2494
                },
                {
                  "type": "RestElement",
                  "decorators": [],
                  "argument": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "robotAInfo",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2499,
                    "end": 2509
                  },
                  "optional": false,
                  "typeAnnotation": null,
                  "value": null,
                  "start": 2496,
                  "end": 2509
                }
              ],
              "optional": false,
              "typeAnnotation": null,
              "start": 2485,
              "end": 2510
            },
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "robotA",
              "optional": false,
              "typeAnnotation": null,
              "start": 2513,
              "end": 2519
            },
            "start": 2485,
            "end": 2519
          },
          {
            "type": "AssignmentExpression",
            "operator": "=",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "i",
              "optional": false,
              "typeAnnotation": null,
              "start": 2521,
              "end": 2522
            },
            "right": {
              "type": "Literal",
              "value": 0,
              "raw": "0",
              "start": 2525,
              "end": 2526
            },
            "start": 2521,
            "end": 2526
          }
        ],
        "start": 2485,
        "end": 2526
      },
      "test": {
        "type": "BinaryExpression",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "i",
          "optional": false,
          "typeAnnotation": null,
          "start": 2528,
          "end": 2529
        },
        "operator": "<",
        "right": {
          "type": "Literal",
          "value": 1,
          "raw": "1",
          "start": 2532,
          "end": 2533
        },
        "start": 2528,
        "end": 2533
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
          "start": 2535,
          "end": 2536
        },
        "start": 2535,
        "end": 2538
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
                  "type": "Identifier",
                  "decorators": [],
                  "name": "console",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2546,
                  "end": 2553
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "log",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2554,
                  "end": 2557
                },
                "optional": false,
                "computed": false,
                "start": 2546,
                "end": 2557
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "numberA3",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2558,
                  "end": 2566
                }
              ],
              "optional": false,
              "start": 2546,
              "end": 2567
            },
            "directive": null,
            "start": 2546,
            "end": 2568
          }
        ],
        "start": 2540,
        "end": 2570
      },
      "start": 2480,
      "end": 2570
    },
    {
      "type": "ForStatement",
      "init": {
        "type": "SequenceExpression",
        "expressions": [
          {
            "type": "AssignmentExpression",
            "operator": "=",
            "left": {
              "type": "ArrayPattern",
              "decorators": [],
              "elements": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "numberA3",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2577,
                  "end": 2585
                },
                {
                  "type": "RestElement",
                  "decorators": [],
                  "argument": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "robotAInfo",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2590,
                    "end": 2600
                  },
                  "optional": false,
                  "typeAnnotation": null,
                  "value": null,
                  "start": 2587,
                  "end": 2600
                }
              ],
              "optional": false,
              "typeAnnotation": null,
              "start": 2576,
              "end": 2601
            },
            "right": {
              "type": "CallExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "getRobot",
                "optional": false,
                "typeAnnotation": null,
                "start": 2604,
                "end": 2612
              },
              "typeArguments": null,
              "arguments": [],
              "optional": false,
              "start": 2604,
              "end": 2614
            },
            "start": 2576,
            "end": 2614
          },
          {
            "type": "AssignmentExpression",
            "operator": "=",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "i",
              "optional": false,
              "typeAnnotation": null,
              "start": 2616,
              "end": 2617
            },
            "right": {
              "type": "Literal",
              "value": 0,
              "raw": "0",
              "start": 2620,
              "end": 2621
            },
            "start": 2616,
            "end": 2621
          }
        ],
        "start": 2576,
        "end": 2621
      },
      "test": {
        "type": "BinaryExpression",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "i",
          "optional": false,
          "typeAnnotation": null,
          "start": 2623,
          "end": 2624
        },
        "operator": "<",
        "right": {
          "type": "Literal",
          "value": 1,
          "raw": "1",
          "start": 2627,
          "end": 2628
        },
        "start": 2623,
        "end": 2628
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
          "start": 2630,
          "end": 2631
        },
        "start": 2630,
        "end": 2633
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
                  "type": "Identifier",
                  "decorators": [],
                  "name": "console",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2641,
                  "end": 2648
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "log",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2649,
                  "end": 2652
                },
                "optional": false,
                "computed": false,
                "start": 2641,
                "end": 2652
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "numberA3",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2653,
                  "end": 2661
                }
              ],
              "optional": false,
              "start": 2641,
              "end": 2662
            },
            "directive": null,
            "start": 2641,
            "end": 2663
          }
        ],
        "start": 2635,
        "end": 2665
      },
      "start": 2571,
      "end": 2665
    },
    {
      "type": "ForStatement",
      "init": {
        "type": "SequenceExpression",
        "expressions": [
          {
            "type": "AssignmentExpression",
            "operator": "=",
            "left": {
              "type": "ArrayPattern",
              "decorators": [],
              "elements": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "numberA3",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2672,
                  "end": 2680
                },
                {
                  "type": "RestElement",
                  "decorators": [],
                  "argument": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "robotAInfo",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2685,
                    "end": 2695
                  },
                  "optional": false,
                  "typeAnnotation": null,
                  "value": null,
                  "start": 2682,
                  "end": 2695
                }
              ],
              "optional": false,
              "typeAnnotation": null,
              "start": 2671,
              "end": 2696
            },
            "right": {
              "type": "TSTypeAssertion",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Robot",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2700,
                  "end": 2705
                },
                "typeArguments": null,
                "start": 2700,
                "end": 2705
              },
              "expression": {
                "type": "ArrayExpression",
                "elements": [
                  {
                    "type": "Literal",
                    "value": 2,
                    "raw": "2",
                    "start": 2707,
                    "end": 2708
                  },
                  {
                    "type": "Literal",
                    "value": "trimmer",
                    "raw": "\"trimmer\"",
                    "start": 2710,
                    "end": 2719
                  },
                  {
                    "type": "Literal",
                    "value": "trimming",
                    "raw": "\"trimming\"",
                    "start": 2721,
                    "end": 2731
                  }
                ],
                "start": 2706,
                "end": 2732
              },
              "start": 2699,
              "end": 2732
            },
            "start": 2671,
            "end": 2732
          },
          {
            "type": "AssignmentExpression",
            "operator": "=",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "i",
              "optional": false,
              "typeAnnotation": null,
              "start": 2734,
              "end": 2735
            },
            "right": {
              "type": "Literal",
              "value": 0,
              "raw": "0",
              "start": 2738,
              "end": 2739
            },
            "start": 2734,
            "end": 2739
          }
        ],
        "start": 2671,
        "end": 2739
      },
      "test": {
        "type": "BinaryExpression",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "i",
          "optional": false,
          "typeAnnotation": null,
          "start": 2741,
          "end": 2742
        },
        "operator": "<",
        "right": {
          "type": "Literal",
          "value": 1,
          "raw": "1",
          "start": 2745,
          "end": 2746
        },
        "start": 2741,
        "end": 2746
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
          "start": 2748,
          "end": 2749
        },
        "start": 2748,
        "end": 2751
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
                  "type": "Identifier",
                  "decorators": [],
                  "name": "console",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2759,
                  "end": 2766
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "log",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2767,
                  "end": 2770
                },
                "optional": false,
                "computed": false,
                "start": 2759,
                "end": 2770
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "numberA3",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2771,
                  "end": 2779
                }
              ],
              "optional": false,
              "start": 2759,
              "end": 2780
            },
            "directive": null,
            "start": 2759,
            "end": 2781
          }
        ],
        "start": 2753,
        "end": 2783
      },
      "start": 2666,
      "end": 2783
    },
    {
      "type": "ForStatement",
      "init": {
        "type": "SequenceExpression",
        "expressions": [
          {
            "type": "AssignmentExpression",
            "operator": "=",
            "left": {
              "type": "ArrayPattern",
              "decorators": [],
              "elements": [
                {
                  "type": "RestElement",
                  "decorators": [],
                  "argument": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "multiRobotAInfo",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2793,
                    "end": 2808
                  },
                  "optional": false,
                  "typeAnnotation": null,
                  "value": null,
                  "start": 2790,
                  "end": 2808
                }
              ],
              "optional": false,
              "typeAnnotation": null,
              "start": 2789,
              "end": 2809
            },
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "multiRobotA",
              "optional": false,
              "typeAnnotation": null,
              "start": 2812,
              "end": 2823
            },
            "start": 2789,
            "end": 2823
          },
          {
            "type": "AssignmentExpression",
            "operator": "=",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "i",
              "optional": false,
              "typeAnnotation": null,
              "start": 2825,
              "end": 2826
            },
            "right": {
              "type": "Literal",
              "value": 0,
              "raw": "0",
              "start": 2829,
              "end": 2830
            },
            "start": 2825,
            "end": 2830
          }
        ],
        "start": 2789,
        "end": 2830
      },
      "test": {
        "type": "BinaryExpression",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "i",
          "optional": false,
          "typeAnnotation": null,
          "start": 2832,
          "end": 2833
        },
        "operator": "<",
        "right": {
          "type": "Literal",
          "value": 1,
          "raw": "1",
          "start": 2836,
          "end": 2837
        },
        "start": 2832,
        "end": 2837
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
          "start": 2839,
          "end": 2840
        },
        "start": 2839,
        "end": 2842
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
                  "type": "Identifier",
                  "decorators": [],
                  "name": "console",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2850,
                  "end": 2857
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "log",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2858,
                  "end": 2861
                },
                "optional": false,
                "computed": false,
                "start": 2850,
                "end": 2861
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "multiRobotAInfo",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2862,
                  "end": 2877
                }
              ],
              "optional": false,
              "start": 2850,
              "end": 2878
            },
            "directive": null,
            "start": 2850,
            "end": 2879
          }
        ],
        "start": 2844,
        "end": 2881
      },
      "start": 2784,
      "end": 2881
    },
    {
      "type": "ForStatement",
      "init": {
        "type": "SequenceExpression",
        "expressions": [
          {
            "type": "AssignmentExpression",
            "operator": "=",
            "left": {
              "type": "ArrayPattern",
              "decorators": [],
              "elements": [
                {
                  "type": "RestElement",
                  "decorators": [],
                  "argument": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "multiRobotAInfo",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2891,
                    "end": 2906
                  },
                  "optional": false,
                  "typeAnnotation": null,
                  "value": null,
                  "start": 2888,
                  "end": 2906
                }
              ],
              "optional": false,
              "typeAnnotation": null,
              "start": 2887,
              "end": 2907
            },
            "right": {
              "type": "CallExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "getMultiRobot",
                "optional": false,
                "typeAnnotation": null,
                "start": 2910,
                "end": 2923
              },
              "typeArguments": null,
              "arguments": [],
              "optional": false,
              "start": 2910,
              "end": 2925
            },
            "start": 2887,
            "end": 2925
          },
          {
            "type": "AssignmentExpression",
            "operator": "=",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "i",
              "optional": false,
              "typeAnnotation": null,
              "start": 2927,
              "end": 2928
            },
            "right": {
              "type": "Literal",
              "value": 0,
              "raw": "0",
              "start": 2931,
              "end": 2932
            },
            "start": 2927,
            "end": 2932
          }
        ],
        "start": 2887,
        "end": 2932
      },
      "test": {
        "type": "BinaryExpression",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "i",
          "optional": false,
          "typeAnnotation": null,
          "start": 2934,
          "end": 2935
        },
        "operator": "<",
        "right": {
          "type": "Literal",
          "value": 1,
          "raw": "1",
          "start": 2938,
          "end": 2939
        },
        "start": 2934,
        "end": 2939
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
          "start": 2941,
          "end": 2942
        },
        "start": 2941,
        "end": 2944
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
                  "type": "Identifier",
                  "decorators": [],
                  "name": "console",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2952,
                  "end": 2959
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "log",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2960,
                  "end": 2963
                },
                "optional": false,
                "computed": false,
                "start": 2952,
                "end": 2963
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "multiRobotAInfo",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2964,
                  "end": 2979
                }
              ],
              "optional": false,
              "start": 2952,
              "end": 2980
            },
            "directive": null,
            "start": 2952,
            "end": 2981
          }
        ],
        "start": 2946,
        "end": 2983
      },
      "start": 2882,
      "end": 2983
    },
    {
      "type": "ForStatement",
      "init": {
        "type": "SequenceExpression",
        "expressions": [
          {
            "type": "AssignmentExpression",
            "operator": "=",
            "left": {
              "type": "ArrayPattern",
              "decorators": [],
              "elements": [
                {
                  "type": "RestElement",
                  "decorators": [],
                  "argument": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "multiRobotAInfo",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2993,
                    "end": 3008
                  },
                  "optional": false,
                  "typeAnnotation": null,
                  "value": null,
                  "start": 2990,
                  "end": 3008
                }
              ],
              "optional": false,
              "typeAnnotation": null,
              "start": 2989,
              "end": 3009
            },
            "right": {
              "type": "TSTypeAssertion",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "MultiSkilledRobot",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 3013,
                  "end": 3030
                },
                "typeArguments": null,
                "start": 3013,
                "end": 3030
              },
              "expression": {
                "type": "ArrayExpression",
                "elements": [
                  {
                    "type": "Literal",
                    "value": "trimmer",
                    "raw": "\"trimmer\"",
                    "start": 3032,
                    "end": 3041
                  },
                  {
                    "type": "ArrayExpression",
                    "elements": [
                      {
                        "type": "Literal",
                        "value": "trimming",
                        "raw": "\"trimming\"",
                        "start": 3044,
                        "end": 3054
                      },
                      {
                        "type": "Literal",
                        "value": "edging",
                        "raw": "\"edging\"",
                        "start": 3056,
                        "end": 3064
                      }
                    ],
                    "start": 3043,
                    "end": 3065
                  }
                ],
                "start": 3031,
                "end": 3066
              },
              "start": 3012,
              "end": 3066
            },
            "start": 2989,
            "end": 3066
          },
          {
            "type": "AssignmentExpression",
            "operator": "=",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "i",
              "optional": false,
              "typeAnnotation": null,
              "start": 3068,
              "end": 3069
            },
            "right": {
              "type": "Literal",
              "value": 0,
              "raw": "0",
              "start": 3072,
              "end": 3073
            },
            "start": 3068,
            "end": 3073
          }
        ],
        "start": 2989,
        "end": 3073
      },
      "test": {
        "type": "BinaryExpression",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "i",
          "optional": false,
          "typeAnnotation": null,
          "start": 3075,
          "end": 3076
        },
        "operator": "<",
        "right": {
          "type": "Literal",
          "value": 1,
          "raw": "1",
          "start": 3079,
          "end": 3080
        },
        "start": 3075,
        "end": 3080
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
          "start": 3082,
          "end": 3083
        },
        "start": 3082,
        "end": 3085
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
                  "type": "Identifier",
                  "decorators": [],
                  "name": "console",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 3093,
                  "end": 3100
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "log",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 3101,
                  "end": 3104
                },
                "optional": false,
                "computed": false,
                "start": 3093,
                "end": 3104
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "multiRobotAInfo",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 3105,
                  "end": 3120
                }
              ],
              "optional": false,
              "start": 3093,
              "end": 3121
            },
            "directive": null,
            "start": 3093,
            "end": 3122
          }
        ],
        "start": 3087,
        "end": 3124
      },
      "start": 2984,
      "end": 3124
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 3124
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
    "value": "var",
    "start": 8,
    "end": 11
  },
  {
    "type": "Identifier",
    "value": "console",
    "start": 12,
    "end": 19
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 19,
    "end": 20
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 21,
    "end": 22
  },
  {
    "type": "Identifier",
    "value": "log",
    "start": 27,
    "end": 30
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 30,
    "end": 31
  },
  {
    "type": "Identifier",
    "value": "msg",
    "start": 31,
    "end": 34
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 34,
    "end": 35
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 36,
    "end": 39
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 39,
    "end": 40
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 40,
    "end": 41
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 42,
    "end": 46
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 46,
    "end": 47
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 48,
    "end": 49
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 50,
    "end": 54
  },
  {
    "type": "Identifier",
    "value": "Robot",
    "start": 55,
    "end": 60
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 61,
    "end": 62
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 63,
    "end": 64
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 64,
    "end": 70
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 70,
    "end": 71
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 72,
    "end": 78
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 78,
    "end": 79
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 80,
    "end": 86
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 86,
    "end": 87
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 87,
    "end": 88
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 89,
    "end": 93
  },
  {
    "type": "Identifier",
    "value": "MultiSkilledRobot",
    "start": 94,
    "end": 111
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 112,
    "end": 113
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 114,
    "end": 115
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 115,
    "end": 121
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 121,
    "end": 122
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 123,
    "end": 124
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 124,
    "end": 130
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 130,
    "end": 131
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 132,
    "end": 138
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 138,
    "end": 139
  },
  {
    "type": "Punctuator",
    "value": "]",
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
    "type": "Keyword",
    "value": "let",
    "start": 143,
    "end": 146
  },
  {
    "type": "Identifier",
    "value": "robotA",
    "start": 147,
    "end": 153
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 153,
    "end": 154
  },
  {
    "type": "Identifier",
    "value": "Robot",
    "start": 155,
    "end": 160
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 161,
    "end": 162
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 163,
    "end": 164
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 164,
    "end": 165
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 165,
    "end": 166
  },
  {
    "type": "String",
    "value": "\"mower\"",
    "start": 167,
    "end": 174
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 174,
    "end": 175
  },
  {
    "type": "String",
    "value": "\"mowing\"",
    "start": 176,
    "end": 184
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 184,
    "end": 185
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 185,
    "end": 186
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 187,
    "end": 195
  },
  {
    "type": "Identifier",
    "value": "getRobot",
    "start": 196,
    "end": 204
  },
  {
    "type": "Punctuator",
    "value": "(",
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
    "type": "Keyword",
    "value": "return",
    "start": 213,
    "end": 219
  },
  {
    "type": "Identifier",
    "value": "robotA",
    "start": 220,
    "end": 226
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 226,
    "end": 227
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 228,
    "end": 229
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 231,
    "end": 234
  },
  {
    "type": "Identifier",
    "value": "multiRobotA",
    "start": 235,
    "end": 246
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 246,
    "end": 247
  },
  {
    "type": "Identifier",
    "value": "MultiSkilledRobot",
    "start": 248,
    "end": 265
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 266,
    "end": 267
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 268,
    "end": 269
  },
  {
    "type": "String",
    "value": "\"mower\"",
    "start": 269,
    "end": 276
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 276,
    "end": 277
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 278,
    "end": 279
  },
  {
    "type": "String",
    "value": "\"mowing\"",
    "start": 279,
    "end": 287
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 287,
    "end": 288
  },
  {
    "type": "String",
    "value": "\"\"",
    "start": 289,
    "end": 291
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 291,
    "end": 292
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 292,
    "end": 293
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 293,
    "end": 294
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 295,
    "end": 298
  },
  {
    "type": "Identifier",
    "value": "multiRobotB",
    "start": 299,
    "end": 310
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 310,
    "end": 311
  },
  {
    "type": "Identifier",
    "value": "MultiSkilledRobot",
    "start": 312,
    "end": 329
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 330,
    "end": 331
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 332,
    "end": 333
  },
  {
    "type": "String",
    "value": "\"trimmer\"",
    "start": 333,
    "end": 342
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 342,
    "end": 343
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 344,
    "end": 345
  },
  {
    "type": "String",
    "value": "\"trimming\"",
    "start": 345,
    "end": 355
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 355,
    "end": 356
  },
  {
    "type": "String",
    "value": "\"edging\"",
    "start": 357,
    "end": 365
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 365,
    "end": 366
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 366,
    "end": 367
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 367,
    "end": 368
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 369,
    "end": 377
  },
  {
    "type": "Identifier",
    "value": "getMultiRobot",
    "start": 378,
    "end": 391
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 391,
    "end": 392
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 392,
    "end": 393
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 394,
    "end": 395
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 400,
    "end": 406
  },
  {
    "type": "Identifier",
    "value": "multiRobotA",
    "start": 407,
    "end": 418
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 418,
    "end": 419
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 420,
    "end": 421
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 423,
    "end": 426
  },
  {
    "type": "Identifier",
    "value": "nameA",
    "start": 427,
    "end": 432
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 432,
    "end": 433
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 434,
    "end": 440
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 440,
    "end": 441
  },
  {
    "type": "Identifier",
    "value": "primarySkillA",
    "start": 442,
    "end": 455
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 455,
    "end": 456
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 457,
    "end": 463
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 463,
    "end": 464
  },
  {
    "type": "Identifier",
    "value": "secondarySkillA",
    "start": 465,
    "end": 480
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 480,
    "end": 481
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 482,
    "end": 488
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 488,
    "end": 489
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 490,
    "end": 493
  },
  {
    "type": "Identifier",
    "value": "numberB",
    "start": 494,
    "end": 501
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 501,
    "end": 502
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 503,
    "end": 509
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 509,
    "end": 510
  },
  {
    "type": "Identifier",
    "value": "nameB",
    "start": 511,
    "end": 516
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 516,
    "end": 517
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 518,
    "end": 524
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 524,
    "end": 525
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 526,
    "end": 529
  },
  {
    "type": "Identifier",
    "value": "numberA2",
    "start": 530,
    "end": 538
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 538,
    "end": 539
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 540,
    "end": 546
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 546,
    "end": 547
  },
  {
    "type": "Identifier",
    "value": "nameA2",
    "start": 548,
    "end": 554
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 554,
    "end": 555
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 556,
    "end": 562
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 562,
    "end": 563
  },
  {
    "type": "Identifier",
    "value": "skillA2",
    "start": 564,
    "end": 571
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 571,
    "end": 572
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 573,
    "end": 579
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 579,
    "end": 580
  },
  {
    "type": "Identifier",
    "value": "nameMA",
    "start": 581,
    "end": 587
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 587,
    "end": 588
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 589,
    "end": 595
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 595,
    "end": 596
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 597,
    "end": 600
  },
  {
    "type": "Identifier",
    "value": "numberA3",
    "start": 601,
    "end": 609
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 609,
    "end": 610
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 611,
    "end": 617
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 617,
    "end": 618
  },
  {
    "type": "Identifier",
    "value": "robotAInfo",
    "start": 619,
    "end": 629
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 629,
    "end": 630
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 631,
    "end": 632
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 632,
    "end": 638
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 639,
    "end": 640
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 641,
    "end": 647
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 647,
    "end": 648
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 648,
    "end": 649
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 649,
    "end": 650
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 650,
    "end": 651
  },
  {
    "type": "Identifier",
    "value": "multiRobotAInfo",
    "start": 652,
    "end": 667
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 667,
    "end": 668
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 669,
    "end": 670
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 670,
    "end": 676
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 677,
    "end": 678
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 679,
    "end": 680
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 680,
    "end": 686
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 686,
    "end": 687
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 688,
    "end": 694
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 694,
    "end": 695
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 695,
    "end": 696
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 696,
    "end": 697
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 697,
    "end": 698
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 698,
    "end": 699
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 700,
    "end": 703
  },
  {
    "type": "Identifier",
    "value": "i",
    "start": 704,
    "end": 705
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 705,
    "end": 706
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 707,
    "end": 713
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 713,
    "end": 714
  },
  {
    "type": "Keyword",
    "value": "for",
    "start": 716,
    "end": 719
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 720,
    "end": 721
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 721,
    "end": 722
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 722,
    "end": 723
  },
  {
    "type": "Identifier",
    "value": "nameA",
    "start": 724,
    "end": 729
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 729,
    "end": 730
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 731,
    "end": 732
  },
  {
    "type": "Identifier",
    "value": "robotA",
    "start": 733,
    "end": 739
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 739,
    "end": 740
  },
  {
    "type": "Identifier",
    "value": "i",
    "start": 741,
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
    "type": "Identifier",
    "value": "i",
    "start": 748,
    "end": 749
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 750,
    "end": 751
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 752,
    "end": 753
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 753,
    "end": 754
  },
  {
    "type": "Identifier",
    "value": "i",
    "start": 755,
    "end": 756
  },
  {
    "type": "Punctuator",
    "value": "++",
    "start": 756,
    "end": 758
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 758,
    "end": 759
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 760,
    "end": 761
  },
  {
    "type": "Identifier",
    "value": "console",
    "start": 766,
    "end": 773
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 773,
    "end": 774
  },
  {
    "type": "Identifier",
    "value": "log",
    "start": 774,
    "end": 777
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 777,
    "end": 778
  },
  {
    "type": "Identifier",
    "value": "nameA",
    "start": 778,
    "end": 783
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 783,
    "end": 784
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 784,
    "end": 785
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 786,
    "end": 787
  },
  {
    "type": "Keyword",
    "value": "for",
    "start": 788,
    "end": 791
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 792,
    "end": 793
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 793,
    "end": 794
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 794,
    "end": 795
  },
  {
    "type": "Identifier",
    "value": "nameA",
    "start": 796,
    "end": 801
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 801,
    "end": 802
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 803,
    "end": 804
  },
  {
    "type": "Identifier",
    "value": "getRobot",
    "start": 805,
    "end": 813
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 813,
    "end": 814
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 814,
    "end": 815
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 815,
    "end": 816
  },
  {
    "type": "Identifier",
    "value": "i",
    "start": 817,
    "end": 818
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 819,
    "end": 820
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 821,
    "end": 822
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 822,
    "end": 823
  },
  {
    "type": "Identifier",
    "value": "i",
    "start": 824,
    "end": 825
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 826,
    "end": 827
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 828,
    "end": 829
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 829,
    "end": 830
  },
  {
    "type": "Identifier",
    "value": "i",
    "start": 831,
    "end": 832
  },
  {
    "type": "Punctuator",
    "value": "++",
    "start": 832,
    "end": 834
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 834,
    "end": 835
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 836,
    "end": 837
  },
  {
    "type": "Identifier",
    "value": "console",
    "start": 842,
    "end": 849
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 849,
    "end": 850
  },
  {
    "type": "Identifier",
    "value": "log",
    "start": 850,
    "end": 853
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 853,
    "end": 854
  },
  {
    "type": "Identifier",
    "value": "nameA",
    "start": 854,
    "end": 859
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 859,
    "end": 860
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 860,
    "end": 861
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 862,
    "end": 863
  },
  {
    "type": "Keyword",
    "value": "for",
    "start": 864,
    "end": 867
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 868,
    "end": 869
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 869,
    "end": 870
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 870,
    "end": 871
  },
  {
    "type": "Identifier",
    "value": "nameA",
    "start": 872,
    "end": 877
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 877,
    "end": 878
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 879,
    "end": 880
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 881,
    "end": 882
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 882,
    "end": 883
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 883,
    "end": 884
  },
  {
    "type": "String",
    "value": "\"trimmer\"",
    "start": 885,
    "end": 894
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 894,
    "end": 895
  },
  {
    "type": "String",
    "value": "\"trimming\"",
    "start": 896,
    "end": 906
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 906,
    "end": 907
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 907,
    "end": 908
  },
  {
    "type": "Identifier",
    "value": "i",
    "start": 909,
    "end": 910
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 911,
    "end": 912
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 913,
    "end": 914
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 914,
    "end": 915
  },
  {
    "type": "Identifier",
    "value": "i",
    "start": 916,
    "end": 917
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 918,
    "end": 919
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 920,
    "end": 921
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 921,
    "end": 922
  },
  {
    "type": "Identifier",
    "value": "i",
    "start": 923,
    "end": 924
  },
  {
    "type": "Punctuator",
    "value": "++",
    "start": 924,
    "end": 926
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 926,
    "end": 927
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 928,
    "end": 929
  },
  {
    "type": "Identifier",
    "value": "console",
    "start": 934,
    "end": 941
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 941,
    "end": 942
  },
  {
    "type": "Identifier",
    "value": "log",
    "start": 942,
    "end": 945
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 945,
    "end": 946
  },
  {
    "type": "Identifier",
    "value": "nameA",
    "start": 946,
    "end": 951
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 951,
    "end": 952
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 952,
    "end": 953
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 954,
    "end": 955
  },
  {
    "type": "Keyword",
    "value": "for",
    "start": 956,
    "end": 959
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 960,
    "end": 961
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 961,
    "end": 962
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 962,
    "end": 963
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 964,
    "end": 965
  },
  {
    "type": "Identifier",
    "value": "primarySkillA",
    "start": 965,
    "end": 978
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 978,
    "end": 979
  },
  {
    "type": "Identifier",
    "value": "secondarySkillA",
    "start": 980,
    "end": 995
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 995,
    "end": 996
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 996,
    "end": 997
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 998,
    "end": 999
  },
  {
    "type": "Identifier",
    "value": "multiRobotA",
    "start": 1000,
    "end": 1011
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1011,
    "end": 1012
  },
  {
    "type": "Identifier",
    "value": "i",
    "start": 1013,
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
    "type": "Identifier",
    "value": "i",
    "start": 1020,
    "end": 1021
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1022,
    "end": 1023
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 1024,
    "end": 1025
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1025,
    "end": 1026
  },
  {
    "type": "Identifier",
    "value": "i",
    "start": 1027,
    "end": 1028
  },
  {
    "type": "Punctuator",
    "value": "++",
    "start": 1028,
    "end": 1030
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1030,
    "end": 1031
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1032,
    "end": 1033
  },
  {
    "type": "Identifier",
    "value": "console",
    "start": 1038,
    "end": 1045
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1045,
    "end": 1046
  },
  {
    "type": "Identifier",
    "value": "log",
    "start": 1046,
    "end": 1049
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1049,
    "end": 1050
  },
  {
    "type": "Identifier",
    "value": "primarySkillA",
    "start": 1050,
    "end": 1063
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1063,
    "end": 1064
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1064,
    "end": 1065
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1066,
    "end": 1067
  },
  {
    "type": "Keyword",
    "value": "for",
    "start": 1068,
    "end": 1071
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1072,
    "end": 1073
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1073,
    "end": 1074
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1074,
    "end": 1075
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1076,
    "end": 1077
  },
  {
    "type": "Identifier",
    "value": "primarySkillA",
    "start": 1077,
    "end": 1090
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1090,
    "end": 1091
  },
  {
    "type": "Identifier",
    "value": "secondarySkillA",
    "start": 1092,
    "end": 1107
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1107,
    "end": 1108
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1108,
    "end": 1109
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1110,
    "end": 1111
  },
  {
    "type": "Identifier",
    "value": "getMultiRobot",
    "start": 1112,
    "end": 1125
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1125,
    "end": 1126
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1126,
    "end": 1127
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1127,
    "end": 1128
  },
  {
    "type": "Identifier",
    "value": "i",
    "start": 1129,
    "end": 1130
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1131,
    "end": 1132
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 1133,
    "end": 1134
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1134,
    "end": 1135
  },
  {
    "type": "Identifier",
    "value": "i",
    "start": 1136,
    "end": 1137
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1138,
    "end": 1139
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 1140,
    "end": 1141
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1141,
    "end": 1142
  },
  {
    "type": "Identifier",
    "value": "i",
    "start": 1143,
    "end": 1144
  },
  {
    "type": "Punctuator",
    "value": "++",
    "start": 1144,
    "end": 1146
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1146,
    "end": 1147
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1148,
    "end": 1149
  },
  {
    "type": "Identifier",
    "value": "console",
    "start": 1154,
    "end": 1161
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1161,
    "end": 1162
  },
  {
    "type": "Identifier",
    "value": "log",
    "start": 1162,
    "end": 1165
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1165,
    "end": 1166
  },
  {
    "type": "Identifier",
    "value": "primarySkillA",
    "start": 1166,
    "end": 1179
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1179,
    "end": 1180
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1180,
    "end": 1181
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1182,
    "end": 1183
  },
  {
    "type": "Keyword",
    "value": "for",
    "start": 1184,
    "end": 1187
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1188,
    "end": 1189
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1189,
    "end": 1190
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1190,
    "end": 1191
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1192,
    "end": 1193
  },
  {
    "type": "Identifier",
    "value": "primarySkillA",
    "start": 1193,
    "end": 1206
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1206,
    "end": 1207
  },
  {
    "type": "Identifier",
    "value": "secondarySkillA",
    "start": 1208,
    "end": 1223
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1223,
    "end": 1224
  },
  {
    "type": "Punctuator",
    "value": "]",
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
    "value": "[",
    "start": 1228,
    "end": 1229
  },
  {
    "type": "String",
    "value": "\"trimmer\"",
    "start": 1229,
    "end": 1238
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1238,
    "end": 1239
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1240,
    "end": 1241
  },
  {
    "type": "String",
    "value": "\"trimming\"",
    "start": 1241,
    "end": 1251
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1251,
    "end": 1252
  },
  {
    "type": "String",
    "value": "\"edging\"",
    "start": 1253,
    "end": 1261
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1261,
    "end": 1262
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1262,
    "end": 1263
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1263,
    "end": 1264
  },
  {
    "type": "Identifier",
    "value": "i",
    "start": 1265,
    "end": 1266
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1267,
    "end": 1268
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 1269,
    "end": 1270
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1270,
    "end": 1271
  },
  {
    "type": "Identifier",
    "value": "i",
    "start": 1272,
    "end": 1273
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1274,
    "end": 1275
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 1276,
    "end": 1277
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1277,
    "end": 1278
  },
  {
    "type": "Identifier",
    "value": "i",
    "start": 1279,
    "end": 1280
  },
  {
    "type": "Punctuator",
    "value": "++",
    "start": 1280,
    "end": 1282
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1282,
    "end": 1283
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1284,
    "end": 1285
  },
  {
    "type": "Identifier",
    "value": "console",
    "start": 1290,
    "end": 1297
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1297,
    "end": 1298
  },
  {
    "type": "Identifier",
    "value": "log",
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
    "value": "primarySkillA",
    "start": 1302,
    "end": 1315
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1315,
    "end": 1316
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1316,
    "end": 1317
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1318,
    "end": 1319
  },
  {
    "type": "Keyword",
    "value": "for",
    "start": 1321,
    "end": 1324
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1325,
    "end": 1326
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1326,
    "end": 1327
  },
  {
    "type": "Identifier",
    "value": "numberB",
    "start": 1327,
    "end": 1334
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1334,
    "end": 1335
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1336,
    "end": 1337
  },
  {
    "type": "Identifier",
    "value": "robotA",
    "start": 1338,
    "end": 1344
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1344,
    "end": 1345
  },
  {
    "type": "Identifier",
    "value": "i",
    "start": 1346,
    "end": 1347
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1348,
    "end": 1349
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 1350,
    "end": 1351
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1351,
    "end": 1352
  },
  {
    "type": "Identifier",
    "value": "i",
    "start": 1353,
    "end": 1354
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1355,
    "end": 1356
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 1357,
    "end": 1358
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1358,
    "end": 1359
  },
  {
    "type": "Identifier",
    "value": "i",
    "start": 1360,
    "end": 1361
  },
  {
    "type": "Punctuator",
    "value": "++",
    "start": 1361,
    "end": 1363
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1363,
    "end": 1364
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1365,
    "end": 1366
  },
  {
    "type": "Identifier",
    "value": "console",
    "start": 1371,
    "end": 1378
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1378,
    "end": 1379
  },
  {
    "type": "Identifier",
    "value": "log",
    "start": 1379,
    "end": 1382
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1382,
    "end": 1383
  },
  {
    "type": "Identifier",
    "value": "numberB",
    "start": 1383,
    "end": 1390
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1390,
    "end": 1391
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1391,
    "end": 1392
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1393,
    "end": 1394
  },
  {
    "type": "Keyword",
    "value": "for",
    "start": 1395,
    "end": 1398
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1399,
    "end": 1400
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1400,
    "end": 1401
  },
  {
    "type": "Identifier",
    "value": "numberB",
    "start": 1401,
    "end": 1408
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1408,
    "end": 1409
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1410,
    "end": 1411
  },
  {
    "type": "Identifier",
    "value": "getRobot",
    "start": 1412,
    "end": 1420
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1420,
    "end": 1421
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1421,
    "end": 1422
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1422,
    "end": 1423
  },
  {
    "type": "Identifier",
    "value": "i",
    "start": 1424,
    "end": 1425
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1426,
    "end": 1427
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 1428,
    "end": 1429
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1429,
    "end": 1430
  },
  {
    "type": "Identifier",
    "value": "i",
    "start": 1431,
    "end": 1432
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1433,
    "end": 1434
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 1435,
    "end": 1436
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1436,
    "end": 1437
  },
  {
    "type": "Identifier",
    "value": "i",
    "start": 1438,
    "end": 1439
  },
  {
    "type": "Punctuator",
    "value": "++",
    "start": 1439,
    "end": 1441
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1441,
    "end": 1442
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1443,
    "end": 1444
  },
  {
    "type": "Identifier",
    "value": "console",
    "start": 1449,
    "end": 1456
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1456,
    "end": 1457
  },
  {
    "type": "Identifier",
    "value": "log",
    "start": 1457,
    "end": 1460
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1460,
    "end": 1461
  },
  {
    "type": "Identifier",
    "value": "numberB",
    "start": 1461,
    "end": 1468
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1468,
    "end": 1469
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1469,
    "end": 1470
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1471,
    "end": 1472
  },
  {
    "type": "Keyword",
    "value": "for",
    "start": 1473,
    "end": 1476
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1477,
    "end": 1478
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1478,
    "end": 1479
  },
  {
    "type": "Identifier",
    "value": "numberB",
    "start": 1479,
    "end": 1486
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1486,
    "end": 1487
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1488,
    "end": 1489
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1490,
    "end": 1491
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 1491,
    "end": 1492
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1492,
    "end": 1493
  },
  {
    "type": "String",
    "value": "\"trimmer\"",
    "start": 1494,
    "end": 1503
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1503,
    "end": 1504
  },
  {
    "type": "String",
    "value": "\"trimming\"",
    "start": 1505,
    "end": 1515
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1515,
    "end": 1516
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1516,
    "end": 1517
  },
  {
    "type": "Identifier",
    "value": "i",
    "start": 1518,
    "end": 1519
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1520,
    "end": 1521
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 1522,
    "end": 1523
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1523,
    "end": 1524
  },
  {
    "type": "Identifier",
    "value": "i",
    "start": 1525,
    "end": 1526
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1527,
    "end": 1528
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 1529,
    "end": 1530
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1530,
    "end": 1531
  },
  {
    "type": "Identifier",
    "value": "i",
    "start": 1532,
    "end": 1533
  },
  {
    "type": "Punctuator",
    "value": "++",
    "start": 1533,
    "end": 1535
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1535,
    "end": 1536
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1537,
    "end": 1538
  },
  {
    "type": "Identifier",
    "value": "console",
    "start": 1543,
    "end": 1550
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1550,
    "end": 1551
  },
  {
    "type": "Identifier",
    "value": "log",
    "start": 1551,
    "end": 1554
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1554,
    "end": 1555
  },
  {
    "type": "Identifier",
    "value": "numberB",
    "start": 1555,
    "end": 1562
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1562,
    "end": 1563
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1563,
    "end": 1564
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1565,
    "end": 1566
  },
  {
    "type": "Keyword",
    "value": "for",
    "start": 1567,
    "end": 1570
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1571,
    "end": 1572
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1572,
    "end": 1573
  },
  {
    "type": "Identifier",
    "value": "nameB",
    "start": 1573,
    "end": 1578
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1578,
    "end": 1579
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1580,
    "end": 1581
  },
  {
    "type": "Identifier",
    "value": "multiRobotA",
    "start": 1582,
    "end": 1593
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1593,
    "end": 1594
  },
  {
    "type": "Identifier",
    "value": "i",
    "start": 1595,
    "end": 1596
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1597,
    "end": 1598
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 1599,
    "end": 1600
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1600,
    "end": 1601
  },
  {
    "type": "Identifier",
    "value": "i",
    "start": 1602,
    "end": 1603
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1604,
    "end": 1605
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 1606,
    "end": 1607
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1607,
    "end": 1608
  },
  {
    "type": "Identifier",
    "value": "i",
    "start": 1609,
    "end": 1610
  },
  {
    "type": "Punctuator",
    "value": "++",
    "start": 1610,
    "end": 1612
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1612,
    "end": 1613
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1614,
    "end": 1615
  },
  {
    "type": "Identifier",
    "value": "console",
    "start": 1620,
    "end": 1627
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1627,
    "end": 1628
  },
  {
    "type": "Identifier",
    "value": "log",
    "start": 1628,
    "end": 1631
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1631,
    "end": 1632
  },
  {
    "type": "Identifier",
    "value": "nameB",
    "start": 1632,
    "end": 1637
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1637,
    "end": 1638
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1638,
    "end": 1639
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1640,
    "end": 1641
  },
  {
    "type": "Keyword",
    "value": "for",
    "start": 1642,
    "end": 1645
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1646,
    "end": 1647
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1647,
    "end": 1648
  },
  {
    "type": "Identifier",
    "value": "nameB",
    "start": 1648,
    "end": 1653
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1653,
    "end": 1654
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1655,
    "end": 1656
  },
  {
    "type": "Identifier",
    "value": "getMultiRobot",
    "start": 1657,
    "end": 1670
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1670,
    "end": 1671
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1671,
    "end": 1672
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1672,
    "end": 1673
  },
  {
    "type": "Identifier",
    "value": "i",
    "start": 1674,
    "end": 1675
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1676,
    "end": 1677
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 1678,
    "end": 1679
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1679,
    "end": 1680
  },
  {
    "type": "Identifier",
    "value": "i",
    "start": 1681,
    "end": 1682
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1683,
    "end": 1684
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 1685,
    "end": 1686
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1686,
    "end": 1687
  },
  {
    "type": "Identifier",
    "value": "i",
    "start": 1688,
    "end": 1689
  },
  {
    "type": "Punctuator",
    "value": "++",
    "start": 1689,
    "end": 1691
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1691,
    "end": 1692
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1693,
    "end": 1694
  },
  {
    "type": "Identifier",
    "value": "console",
    "start": 1699,
    "end": 1706
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1706,
    "end": 1707
  },
  {
    "type": "Identifier",
    "value": "log",
    "start": 1707,
    "end": 1710
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1710,
    "end": 1711
  },
  {
    "type": "Identifier",
    "value": "nameB",
    "start": 1711,
    "end": 1716
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1716,
    "end": 1717
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1717,
    "end": 1718
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1719,
    "end": 1720
  },
  {
    "type": "Keyword",
    "value": "for",
    "start": 1721,
    "end": 1724
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1725,
    "end": 1726
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1726,
    "end": 1727
  },
  {
    "type": "Identifier",
    "value": "nameB",
    "start": 1727,
    "end": 1732
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1732,
    "end": 1733
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1734,
    "end": 1735
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1736,
    "end": 1737
  },
  {
    "type": "String",
    "value": "\"trimmer\"",
    "start": 1737,
    "end": 1746
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1746,
    "end": 1747
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1748,
    "end": 1749
  },
  {
    "type": "String",
    "value": "\"trimming\"",
    "start": 1749,
    "end": 1759
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1759,
    "end": 1760
  },
  {
    "type": "String",
    "value": "\"edging\"",
    "start": 1761,
    "end": 1769
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1769,
    "end": 1770
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1770,
    "end": 1771
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1771,
    "end": 1772
  },
  {
    "type": "Identifier",
    "value": "i",
    "start": 1773,
    "end": 1774
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1775,
    "end": 1776
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 1777,
    "end": 1778
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1778,
    "end": 1779
  },
  {
    "type": "Identifier",
    "value": "i",
    "start": 1780,
    "end": 1781
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1782,
    "end": 1783
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 1784,
    "end": 1785
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1785,
    "end": 1786
  },
  {
    "type": "Identifier",
    "value": "i",
    "start": 1787,
    "end": 1788
  },
  {
    "type": "Punctuator",
    "value": "++",
    "start": 1788,
    "end": 1790
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1790,
    "end": 1791
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1792,
    "end": 1793
  },
  {
    "type": "Identifier",
    "value": "console",
    "start": 1798,
    "end": 1805
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1805,
    "end": 1806
  },
  {
    "type": "Identifier",
    "value": "log",
    "start": 1806,
    "end": 1809
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1809,
    "end": 1810
  },
  {
    "type": "Identifier",
    "value": "nameB",
    "start": 1810,
    "end": 1815
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1815,
    "end": 1816
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1816,
    "end": 1817
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1818,
    "end": 1819
  },
  {
    "type": "Keyword",
    "value": "for",
    "start": 1821,
    "end": 1824
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1825,
    "end": 1826
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1826,
    "end": 1827
  },
  {
    "type": "Identifier",
    "value": "numberA2",
    "start": 1827,
    "end": 1835
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1835,
    "end": 1836
  },
  {
    "type": "Identifier",
    "value": "nameA2",
    "start": 1837,
    "end": 1843
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1843,
    "end": 1844
  },
  {
    "type": "Identifier",
    "value": "skillA2",
    "start": 1845,
    "end": 1852
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1852,
    "end": 1853
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1854,
    "end": 1855
  },
  {
    "type": "Identifier",
    "value": "robotA",
    "start": 1856,
    "end": 1862
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1862,
    "end": 1863
  },
  {
    "type": "Identifier",
    "value": "i",
    "start": 1864,
    "end": 1865
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1866,
    "end": 1867
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 1868,
    "end": 1869
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1869,
    "end": 1870
  },
  {
    "type": "Identifier",
    "value": "i",
    "start": 1871,
    "end": 1872
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1873,
    "end": 1874
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 1875,
    "end": 1876
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1876,
    "end": 1877
  },
  {
    "type": "Identifier",
    "value": "i",
    "start": 1878,
    "end": 1879
  },
  {
    "type": "Punctuator",
    "value": "++",
    "start": 1879,
    "end": 1881
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1881,
    "end": 1882
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1883,
    "end": 1884
  },
  {
    "type": "Identifier",
    "value": "console",
    "start": 1889,
    "end": 1896
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1896,
    "end": 1897
  },
  {
    "type": "Identifier",
    "value": "log",
    "start": 1897,
    "end": 1900
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1900,
    "end": 1901
  },
  {
    "type": "Identifier",
    "value": "nameA2",
    "start": 1901,
    "end": 1907
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1907,
    "end": 1908
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1908,
    "end": 1909
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1910,
    "end": 1911
  },
  {
    "type": "Keyword",
    "value": "for",
    "start": 1912,
    "end": 1915
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1916,
    "end": 1917
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1917,
    "end": 1918
  },
  {
    "type": "Identifier",
    "value": "numberA2",
    "start": 1918,
    "end": 1926
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1926,
    "end": 1927
  },
  {
    "type": "Identifier",
    "value": "nameA2",
    "start": 1928,
    "end": 1934
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1934,
    "end": 1935
  },
  {
    "type": "Identifier",
    "value": "skillA2",
    "start": 1936,
    "end": 1943
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1943,
    "end": 1944
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1945,
    "end": 1946
  },
  {
    "type": "Identifier",
    "value": "getRobot",
    "start": 1947,
    "end": 1955
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1955,
    "end": 1956
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1956,
    "end": 1957
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1957,
    "end": 1958
  },
  {
    "type": "Identifier",
    "value": "i",
    "start": 1959,
    "end": 1960
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1961,
    "end": 1962
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 1963,
    "end": 1964
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1964,
    "end": 1965
  },
  {
    "type": "Identifier",
    "value": "i",
    "start": 1966,
    "end": 1967
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1968,
    "end": 1969
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 1970,
    "end": 1971
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1971,
    "end": 1972
  },
  {
    "type": "Identifier",
    "value": "i",
    "start": 1973,
    "end": 1974
  },
  {
    "type": "Punctuator",
    "value": "++",
    "start": 1974,
    "end": 1976
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1976,
    "end": 1977
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1978,
    "end": 1979
  },
  {
    "type": "Identifier",
    "value": "console",
    "start": 1984,
    "end": 1991
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1991,
    "end": 1992
  },
  {
    "type": "Identifier",
    "value": "log",
    "start": 1992,
    "end": 1995
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1995,
    "end": 1996
  },
  {
    "type": "Identifier",
    "value": "nameA2",
    "start": 1996,
    "end": 2002
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2002,
    "end": 2003
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2003,
    "end": 2004
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2005,
    "end": 2006
  },
  {
    "type": "Keyword",
    "value": "for",
    "start": 2007,
    "end": 2010
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2011,
    "end": 2012
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 2012,
    "end": 2013
  },
  {
    "type": "Identifier",
    "value": "numberA2",
    "start": 2013,
    "end": 2021
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2021,
    "end": 2022
  },
  {
    "type": "Identifier",
    "value": "nameA2",
    "start": 2023,
    "end": 2029
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2029,
    "end": 2030
  },
  {
    "type": "Identifier",
    "value": "skillA2",
    "start": 2031,
    "end": 2038
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 2038,
    "end": 2039
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2040,
    "end": 2041
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 2042,
    "end": 2043
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 2043,
    "end": 2044
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2044,
    "end": 2045
  },
  {
    "type": "String",
    "value": "\"trimmer\"",
    "start": 2046,
    "end": 2055
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2055,
    "end": 2056
  },
  {
    "type": "String",
    "value": "\"trimming\"",
    "start": 2057,
    "end": 2067
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 2067,
    "end": 2068
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2068,
    "end": 2069
  },
  {
    "type": "Identifier",
    "value": "i",
    "start": 2070,
    "end": 2071
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2072,
    "end": 2073
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 2074,
    "end": 2075
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2075,
    "end": 2076
  },
  {
    "type": "Identifier",
    "value": "i",
    "start": 2077,
    "end": 2078
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2079,
    "end": 2080
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 2081,
    "end": 2082
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2082,
    "end": 2083
  },
  {
    "type": "Identifier",
    "value": "i",
    "start": 2084,
    "end": 2085
  },
  {
    "type": "Punctuator",
    "value": "++",
    "start": 2085,
    "end": 2087
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2087,
    "end": 2088
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2089,
    "end": 2090
  },
  {
    "type": "Identifier",
    "value": "console",
    "start": 2095,
    "end": 2102
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2102,
    "end": 2103
  },
  {
    "type": "Identifier",
    "value": "log",
    "start": 2103,
    "end": 2106
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2106,
    "end": 2107
  },
  {
    "type": "Identifier",
    "value": "nameA2",
    "start": 2107,
    "end": 2113
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2113,
    "end": 2114
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2114,
    "end": 2115
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2116,
    "end": 2117
  },
  {
    "type": "Keyword",
    "value": "for",
    "start": 2118,
    "end": 2121
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2122,
    "end": 2123
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 2123,
    "end": 2124
  },
  {
    "type": "Identifier",
    "value": "nameMA",
    "start": 2124,
    "end": 2130
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2130,
    "end": 2131
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 2132,
    "end": 2133
  },
  {
    "type": "Identifier",
    "value": "primarySkillA",
    "start": 2133,
    "end": 2146
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2146,
    "end": 2147
  },
  {
    "type": "Identifier",
    "value": "secondarySkillA",
    "start": 2148,
    "end": 2163
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 2163,
    "end": 2164
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 2164,
    "end": 2165
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2166,
    "end": 2167
  },
  {
    "type": "Identifier",
    "value": "multiRobotA",
    "start": 2168,
    "end": 2179
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2179,
    "end": 2180
  },
  {
    "type": "Identifier",
    "value": "i",
    "start": 2181,
    "end": 2182
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2183,
    "end": 2184
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 2185,
    "end": 2186
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2186,
    "end": 2187
  },
  {
    "type": "Identifier",
    "value": "i",
    "start": 2188,
    "end": 2189
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2190,
    "end": 2191
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 2192,
    "end": 2193
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2193,
    "end": 2194
  },
  {
    "type": "Identifier",
    "value": "i",
    "start": 2195,
    "end": 2196
  },
  {
    "type": "Punctuator",
    "value": "++",
    "start": 2196,
    "end": 2198
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2198,
    "end": 2199
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2200,
    "end": 2201
  },
  {
    "type": "Identifier",
    "value": "console",
    "start": 2206,
    "end": 2213
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2213,
    "end": 2214
  },
  {
    "type": "Identifier",
    "value": "log",
    "start": 2214,
    "end": 2217
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2217,
    "end": 2218
  },
  {
    "type": "Identifier",
    "value": "nameMA",
    "start": 2218,
    "end": 2224
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2224,
    "end": 2225
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2225,
    "end": 2226
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2227,
    "end": 2228
  },
  {
    "type": "Keyword",
    "value": "for",
    "start": 2229,
    "end": 2232
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2233,
    "end": 2234
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 2234,
    "end": 2235
  },
  {
    "type": "Identifier",
    "value": "nameMA",
    "start": 2235,
    "end": 2241
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2241,
    "end": 2242
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 2243,
    "end": 2244
  },
  {
    "type": "Identifier",
    "value": "primarySkillA",
    "start": 2244,
    "end": 2257
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2257,
    "end": 2258
  },
  {
    "type": "Identifier",
    "value": "secondarySkillA",
    "start": 2259,
    "end": 2274
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 2274,
    "end": 2275
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 2275,
    "end": 2276
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2277,
    "end": 2278
  },
  {
    "type": "Identifier",
    "value": "getMultiRobot",
    "start": 2279,
    "end": 2292
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2292,
    "end": 2293
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2293,
    "end": 2294
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2294,
    "end": 2295
  },
  {
    "type": "Identifier",
    "value": "i",
    "start": 2296,
    "end": 2297
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2298,
    "end": 2299
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 2300,
    "end": 2301
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2301,
    "end": 2302
  },
  {
    "type": "Identifier",
    "value": "i",
    "start": 2303,
    "end": 2304
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2305,
    "end": 2306
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 2307,
    "end": 2308
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2308,
    "end": 2309
  },
  {
    "type": "Identifier",
    "value": "i",
    "start": 2310,
    "end": 2311
  },
  {
    "type": "Punctuator",
    "value": "++",
    "start": 2311,
    "end": 2313
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2313,
    "end": 2314
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2315,
    "end": 2316
  },
  {
    "type": "Identifier",
    "value": "console",
    "start": 2321,
    "end": 2328
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2328,
    "end": 2329
  },
  {
    "type": "Identifier",
    "value": "log",
    "start": 2329,
    "end": 2332
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2332,
    "end": 2333
  },
  {
    "type": "Identifier",
    "value": "nameMA",
    "start": 2333,
    "end": 2339
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2339,
    "end": 2340
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2340,
    "end": 2341
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2342,
    "end": 2343
  },
  {
    "type": "Keyword",
    "value": "for",
    "start": 2344,
    "end": 2347
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2348,
    "end": 2349
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 2349,
    "end": 2350
  },
  {
    "type": "Identifier",
    "value": "nameMA",
    "start": 2350,
    "end": 2356
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2356,
    "end": 2357
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 2358,
    "end": 2359
  },
  {
    "type": "Identifier",
    "value": "primarySkillA",
    "start": 2359,
    "end": 2372
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2372,
    "end": 2373
  },
  {
    "type": "Identifier",
    "value": "secondarySkillA",
    "start": 2374,
    "end": 2389
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 2389,
    "end": 2390
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 2390,
    "end": 2391
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2392,
    "end": 2393
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 2394,
    "end": 2395
  },
  {
    "type": "String",
    "value": "\"trimmer\"",
    "start": 2395,
    "end": 2404
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2404,
    "end": 2405
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 2406,
    "end": 2407
  },
  {
    "type": "String",
    "value": "\"trimming\"",
    "start": 2407,
    "end": 2417
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2417,
    "end": 2418
  },
  {
    "type": "String",
    "value": "\"edging\"",
    "start": 2419,
    "end": 2427
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 2427,
    "end": 2428
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 2428,
    "end": 2429
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2429,
    "end": 2430
  },
  {
    "type": "Identifier",
    "value": "i",
    "start": 2431,
    "end": 2432
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2433,
    "end": 2434
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 2435,
    "end": 2436
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2436,
    "end": 2437
  },
  {
    "type": "Identifier",
    "value": "i",
    "start": 2438,
    "end": 2439
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2440,
    "end": 2441
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 2442,
    "end": 2443
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2443,
    "end": 2444
  },
  {
    "type": "Identifier",
    "value": "i",
    "start": 2445,
    "end": 2446
  },
  {
    "type": "Punctuator",
    "value": "++",
    "start": 2446,
    "end": 2448
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2448,
    "end": 2449
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2450,
    "end": 2451
  },
  {
    "type": "Identifier",
    "value": "console",
    "start": 2456,
    "end": 2463
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2463,
    "end": 2464
  },
  {
    "type": "Identifier",
    "value": "log",
    "start": 2464,
    "end": 2467
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2467,
    "end": 2468
  },
  {
    "type": "Identifier",
    "value": "nameMA",
    "start": 2468,
    "end": 2474
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2474,
    "end": 2475
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2475,
    "end": 2476
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2477,
    "end": 2478
  },
  {
    "type": "Keyword",
    "value": "for",
    "start": 2480,
    "end": 2483
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2484,
    "end": 2485
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 2485,
    "end": 2486
  },
  {
    "type": "Identifier",
    "value": "numberA3",
    "start": 2486,
    "end": 2494
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2494,
    "end": 2495
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 2496,
    "end": 2499
  },
  {
    "type": "Identifier",
    "value": "robotAInfo",
    "start": 2499,
    "end": 2509
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 2509,
    "end": 2510
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2511,
    "end": 2512
  },
  {
    "type": "Identifier",
    "value": "robotA",
    "start": 2513,
    "end": 2519
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2519,
    "end": 2520
  },
  {
    "type": "Identifier",
    "value": "i",
    "start": 2521,
    "end": 2522
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2523,
    "end": 2524
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 2525,
    "end": 2526
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2526,
    "end": 2527
  },
  {
    "type": "Identifier",
    "value": "i",
    "start": 2528,
    "end": 2529
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2530,
    "end": 2531
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 2532,
    "end": 2533
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2533,
    "end": 2534
  },
  {
    "type": "Identifier",
    "value": "i",
    "start": 2535,
    "end": 2536
  },
  {
    "type": "Punctuator",
    "value": "++",
    "start": 2536,
    "end": 2538
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2538,
    "end": 2539
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2540,
    "end": 2541
  },
  {
    "type": "Identifier",
    "value": "console",
    "start": 2546,
    "end": 2553
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2553,
    "end": 2554
  },
  {
    "type": "Identifier",
    "value": "log",
    "start": 2554,
    "end": 2557
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2557,
    "end": 2558
  },
  {
    "type": "Identifier",
    "value": "numberA3",
    "start": 2558,
    "end": 2566
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2566,
    "end": 2567
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2567,
    "end": 2568
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2569,
    "end": 2570
  },
  {
    "type": "Keyword",
    "value": "for",
    "start": 2571,
    "end": 2574
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2575,
    "end": 2576
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 2576,
    "end": 2577
  },
  {
    "type": "Identifier",
    "value": "numberA3",
    "start": 2577,
    "end": 2585
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2585,
    "end": 2586
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 2587,
    "end": 2590
  },
  {
    "type": "Identifier",
    "value": "robotAInfo",
    "start": 2590,
    "end": 2600
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 2600,
    "end": 2601
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2602,
    "end": 2603
  },
  {
    "type": "Identifier",
    "value": "getRobot",
    "start": 2604,
    "end": 2612
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2612,
    "end": 2613
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2613,
    "end": 2614
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2614,
    "end": 2615
  },
  {
    "type": "Identifier",
    "value": "i",
    "start": 2616,
    "end": 2617
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2618,
    "end": 2619
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 2620,
    "end": 2621
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2621,
    "end": 2622
  },
  {
    "type": "Identifier",
    "value": "i",
    "start": 2623,
    "end": 2624
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2625,
    "end": 2626
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 2627,
    "end": 2628
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2628,
    "end": 2629
  },
  {
    "type": "Identifier",
    "value": "i",
    "start": 2630,
    "end": 2631
  },
  {
    "type": "Punctuator",
    "value": "++",
    "start": 2631,
    "end": 2633
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2633,
    "end": 2634
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2635,
    "end": 2636
  },
  {
    "type": "Identifier",
    "value": "console",
    "start": 2641,
    "end": 2648
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2648,
    "end": 2649
  },
  {
    "type": "Identifier",
    "value": "log",
    "start": 2649,
    "end": 2652
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2652,
    "end": 2653
  },
  {
    "type": "Identifier",
    "value": "numberA3",
    "start": 2653,
    "end": 2661
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2661,
    "end": 2662
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2662,
    "end": 2663
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2664,
    "end": 2665
  },
  {
    "type": "Keyword",
    "value": "for",
    "start": 2666,
    "end": 2669
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2670,
    "end": 2671
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 2671,
    "end": 2672
  },
  {
    "type": "Identifier",
    "value": "numberA3",
    "start": 2672,
    "end": 2680
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2680,
    "end": 2681
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 2682,
    "end": 2685
  },
  {
    "type": "Identifier",
    "value": "robotAInfo",
    "start": 2685,
    "end": 2695
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 2695,
    "end": 2696
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2697,
    "end": 2698
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2699,
    "end": 2700
  },
  {
    "type": "Identifier",
    "value": "Robot",
    "start": 2700,
    "end": 2705
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2705,
    "end": 2706
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 2706,
    "end": 2707
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 2707,
    "end": 2708
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2708,
    "end": 2709
  },
  {
    "type": "String",
    "value": "\"trimmer\"",
    "start": 2710,
    "end": 2719
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2719,
    "end": 2720
  },
  {
    "type": "String",
    "value": "\"trimming\"",
    "start": 2721,
    "end": 2731
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 2731,
    "end": 2732
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2732,
    "end": 2733
  },
  {
    "type": "Identifier",
    "value": "i",
    "start": 2734,
    "end": 2735
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2736,
    "end": 2737
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 2738,
    "end": 2739
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2739,
    "end": 2740
  },
  {
    "type": "Identifier",
    "value": "i",
    "start": 2741,
    "end": 2742
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2743,
    "end": 2744
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 2745,
    "end": 2746
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2746,
    "end": 2747
  },
  {
    "type": "Identifier",
    "value": "i",
    "start": 2748,
    "end": 2749
  },
  {
    "type": "Punctuator",
    "value": "++",
    "start": 2749,
    "end": 2751
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2751,
    "end": 2752
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2753,
    "end": 2754
  },
  {
    "type": "Identifier",
    "value": "console",
    "start": 2759,
    "end": 2766
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2766,
    "end": 2767
  },
  {
    "type": "Identifier",
    "value": "log",
    "start": 2767,
    "end": 2770
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2770,
    "end": 2771
  },
  {
    "type": "Identifier",
    "value": "numberA3",
    "start": 2771,
    "end": 2779
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2779,
    "end": 2780
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2780,
    "end": 2781
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2782,
    "end": 2783
  },
  {
    "type": "Keyword",
    "value": "for",
    "start": 2784,
    "end": 2787
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2788,
    "end": 2789
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 2789,
    "end": 2790
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 2790,
    "end": 2793
  },
  {
    "type": "Identifier",
    "value": "multiRobotAInfo",
    "start": 2793,
    "end": 2808
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 2808,
    "end": 2809
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2810,
    "end": 2811
  },
  {
    "type": "Identifier",
    "value": "multiRobotA",
    "start": 2812,
    "end": 2823
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2823,
    "end": 2824
  },
  {
    "type": "Identifier",
    "value": "i",
    "start": 2825,
    "end": 2826
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2827,
    "end": 2828
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 2829,
    "end": 2830
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2830,
    "end": 2831
  },
  {
    "type": "Identifier",
    "value": "i",
    "start": 2832,
    "end": 2833
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2834,
    "end": 2835
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 2836,
    "end": 2837
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2837,
    "end": 2838
  },
  {
    "type": "Identifier",
    "value": "i",
    "start": 2839,
    "end": 2840
  },
  {
    "type": "Punctuator",
    "value": "++",
    "start": 2840,
    "end": 2842
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2842,
    "end": 2843
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2844,
    "end": 2845
  },
  {
    "type": "Identifier",
    "value": "console",
    "start": 2850,
    "end": 2857
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2857,
    "end": 2858
  },
  {
    "type": "Identifier",
    "value": "log",
    "start": 2858,
    "end": 2861
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2861,
    "end": 2862
  },
  {
    "type": "Identifier",
    "value": "multiRobotAInfo",
    "start": 2862,
    "end": 2877
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2877,
    "end": 2878
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2878,
    "end": 2879
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2880,
    "end": 2881
  },
  {
    "type": "Keyword",
    "value": "for",
    "start": 2882,
    "end": 2885
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2886,
    "end": 2887
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 2887,
    "end": 2888
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 2888,
    "end": 2891
  },
  {
    "type": "Identifier",
    "value": "multiRobotAInfo",
    "start": 2891,
    "end": 2906
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 2906,
    "end": 2907
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2908,
    "end": 2909
  },
  {
    "type": "Identifier",
    "value": "getMultiRobot",
    "start": 2910,
    "end": 2923
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2923,
    "end": 2924
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2924,
    "end": 2925
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2925,
    "end": 2926
  },
  {
    "type": "Identifier",
    "value": "i",
    "start": 2927,
    "end": 2928
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2929,
    "end": 2930
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 2931,
    "end": 2932
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2932,
    "end": 2933
  },
  {
    "type": "Identifier",
    "value": "i",
    "start": 2934,
    "end": 2935
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2936,
    "end": 2937
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 2938,
    "end": 2939
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2939,
    "end": 2940
  },
  {
    "type": "Identifier",
    "value": "i",
    "start": 2941,
    "end": 2942
  },
  {
    "type": "Punctuator",
    "value": "++",
    "start": 2942,
    "end": 2944
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2944,
    "end": 2945
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2946,
    "end": 2947
  },
  {
    "type": "Identifier",
    "value": "console",
    "start": 2952,
    "end": 2959
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2959,
    "end": 2960
  },
  {
    "type": "Identifier",
    "value": "log",
    "start": 2960,
    "end": 2963
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2963,
    "end": 2964
  },
  {
    "type": "Identifier",
    "value": "multiRobotAInfo",
    "start": 2964,
    "end": 2979
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2979,
    "end": 2980
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2980,
    "end": 2981
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2982,
    "end": 2983
  },
  {
    "type": "Keyword",
    "value": "for",
    "start": 2984,
    "end": 2987
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2988,
    "end": 2989
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 2989,
    "end": 2990
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 2990,
    "end": 2993
  },
  {
    "type": "Identifier",
    "value": "multiRobotAInfo",
    "start": 2993,
    "end": 3008
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 3008,
    "end": 3009
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3010,
    "end": 3011
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 3012,
    "end": 3013
  },
  {
    "type": "Identifier",
    "value": "MultiSkilledRobot",
    "start": 3013,
    "end": 3030
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 3030,
    "end": 3031
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 3031,
    "end": 3032
  },
  {
    "type": "String",
    "value": "\"trimmer\"",
    "start": 3032,
    "end": 3041
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3041,
    "end": 3042
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 3043,
    "end": 3044
  },
  {
    "type": "String",
    "value": "\"trimming\"",
    "start": 3044,
    "end": 3054
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3054,
    "end": 3055
  },
  {
    "type": "String",
    "value": "\"edging\"",
    "start": 3056,
    "end": 3064
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 3064,
    "end": 3065
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 3065,
    "end": 3066
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3066,
    "end": 3067
  },
  {
    "type": "Identifier",
    "value": "i",
    "start": 3068,
    "end": 3069
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3070,
    "end": 3071
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 3072,
    "end": 3073
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3073,
    "end": 3074
  },
  {
    "type": "Identifier",
    "value": "i",
    "start": 3075,
    "end": 3076
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 3077,
    "end": 3078
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 3079,
    "end": 3080
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3080,
    "end": 3081
  },
  {
    "type": "Identifier",
    "value": "i",
    "start": 3082,
    "end": 3083
  },
  {
    "type": "Punctuator",
    "value": "++",
    "start": 3083,
    "end": 3085
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3085,
    "end": 3086
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3087,
    "end": 3088
  },
  {
    "type": "Identifier",
    "value": "console",
    "start": 3093,
    "end": 3100
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 3100,
    "end": 3101
  },
  {
    "type": "Identifier",
    "value": "log",
    "start": 3101,
    "end": 3104
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3104,
    "end": 3105
  },
  {
    "type": "Identifier",
    "value": "multiRobotAInfo",
    "start": 3105,
    "end": 3120
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3120,
    "end": 3121
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3121,
    "end": 3122
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3123,
    "end": 3124
  }
]
```
