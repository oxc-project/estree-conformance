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
                  "type": "AssignmentPattern",
                  "decorators": [],
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "nameA",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 724,
                    "end": 729
                  },
                  "right": {
                    "type": "Literal",
                    "value": "name",
                    "raw": "\"name\"",
                    "start": 732,
                    "end": 738
                  },
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 724,
                  "end": 738
                }
              ],
              "optional": false,
              "typeAnnotation": null,
              "start": 721,
              "end": 739
            },
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "robotA",
              "optional": false,
              "typeAnnotation": null,
              "start": 742,
              "end": 748
            },
            "start": 721,
            "end": 748
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
              "start": 750,
              "end": 751
            },
            "right": {
              "type": "Literal",
              "value": 0,
              "raw": "0",
              "start": 754,
              "end": 755
            },
            "start": 750,
            "end": 755
          }
        ],
        "start": 721,
        "end": 755
      },
      "test": {
        "type": "BinaryExpression",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "i",
          "optional": false,
          "typeAnnotation": null,
          "start": 757,
          "end": 758
        },
        "operator": "<",
        "right": {
          "type": "Literal",
          "value": 1,
          "raw": "1",
          "start": 761,
          "end": 762
        },
        "start": 757,
        "end": 762
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
          "start": 764,
          "end": 765
        },
        "start": 764,
        "end": 767
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
                  "start": 775,
                  "end": 782
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "log",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 783,
                  "end": 786
                },
                "optional": false,
                "computed": false,
                "start": 775,
                "end": 786
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "nameA",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 787,
                  "end": 792
                }
              ],
              "optional": false,
              "start": 775,
              "end": 793
            },
            "directive": null,
            "start": 775,
            "end": 794
          }
        ],
        "start": 769,
        "end": 796
      },
      "start": 716,
      "end": 796
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
                  "type": "AssignmentPattern",
                  "decorators": [],
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "nameA",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 805,
                    "end": 810
                  },
                  "right": {
                    "type": "Literal",
                    "value": "name",
                    "raw": "\"name\"",
                    "start": 813,
                    "end": 819
                  },
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 805,
                  "end": 819
                }
              ],
              "optional": false,
              "typeAnnotation": null,
              "start": 802,
              "end": 820
            },
            "right": {
              "type": "CallExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "getRobot",
                "optional": false,
                "typeAnnotation": null,
                "start": 823,
                "end": 831
              },
              "typeArguments": null,
              "arguments": [],
              "optional": false,
              "start": 823,
              "end": 833
            },
            "start": 802,
            "end": 833
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
              "start": 835,
              "end": 836
            },
            "right": {
              "type": "Literal",
              "value": 0,
              "raw": "0",
              "start": 839,
              "end": 840
            },
            "start": 835,
            "end": 840
          }
        ],
        "start": 802,
        "end": 840
      },
      "test": {
        "type": "BinaryExpression",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "i",
          "optional": false,
          "typeAnnotation": null,
          "start": 842,
          "end": 843
        },
        "operator": "<",
        "right": {
          "type": "Literal",
          "value": 1,
          "raw": "1",
          "start": 846,
          "end": 847
        },
        "start": 842,
        "end": 847
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
          "start": 849,
          "end": 850
        },
        "start": 849,
        "end": 852
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
                  "start": 860,
                  "end": 867
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "log",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 868,
                  "end": 871
                },
                "optional": false,
                "computed": false,
                "start": 860,
                "end": 871
              },
              "typeArguments": null,
              "arguments": [
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
              "start": 860,
              "end": 878
            },
            "directive": null,
            "start": 860,
            "end": 879
          }
        ],
        "start": 854,
        "end": 881
      },
      "start": 797,
      "end": 881
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
                  "type": "AssignmentPattern",
                  "decorators": [],
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "nameA",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 890,
                    "end": 895
                  },
                  "right": {
                    "type": "Literal",
                    "value": "name",
                    "raw": "\"name\"",
                    "start": 898,
                    "end": 904
                  },
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 890,
                  "end": 904
                }
              ],
              "optional": false,
              "typeAnnotation": null,
              "start": 887,
              "end": 905
            },
            "right": {
              "type": "ArrayExpression",
              "elements": [
                {
                  "type": "Literal",
                  "value": 2,
                  "raw": "2",
                  "start": 909,
                  "end": 910
                },
                {
                  "type": "Literal",
                  "value": "trimmer",
                  "raw": "\"trimmer\"",
                  "start": 912,
                  "end": 921
                },
                {
                  "type": "Literal",
                  "value": "trimming",
                  "raw": "\"trimming\"",
                  "start": 923,
                  "end": 933
                }
              ],
              "start": 908,
              "end": 934
            },
            "start": 887,
            "end": 934
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
              "start": 936,
              "end": 937
            },
            "right": {
              "type": "Literal",
              "value": 0,
              "raw": "0",
              "start": 940,
              "end": 941
            },
            "start": 936,
            "end": 941
          }
        ],
        "start": 887,
        "end": 941
      },
      "test": {
        "type": "BinaryExpression",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "i",
          "optional": false,
          "typeAnnotation": null,
          "start": 943,
          "end": 944
        },
        "operator": "<",
        "right": {
          "type": "Literal",
          "value": 1,
          "raw": "1",
          "start": 947,
          "end": 948
        },
        "start": 943,
        "end": 948
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
          "start": 950,
          "end": 951
        },
        "start": 950,
        "end": 953
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
                  "start": 961,
                  "end": 968
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "log",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 969,
                  "end": 972
                },
                "optional": false,
                "computed": false,
                "start": 961,
                "end": 972
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "nameA",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 973,
                  "end": 978
                }
              ],
              "optional": false,
              "start": 961,
              "end": 979
            },
            "directive": null,
            "start": 961,
            "end": 980
          }
        ],
        "start": 955,
        "end": 982
      },
      "start": 882,
      "end": 982
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
                  "type": "AssignmentPattern",
                  "decorators": [],
                  "left": {
                    "type": "ArrayPattern",
                    "decorators": [],
                    "elements": [
                      {
                        "type": "AssignmentPattern",
                        "decorators": [],
                        "left": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "primarySkillA",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 997,
                          "end": 1010
                        },
                        "right": {
                          "type": "Literal",
                          "value": "primary",
                          "raw": "\"primary\"",
                          "start": 1013,
                          "end": 1022
                        },
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 997,
                        "end": 1022
                      },
                      {
                        "type": "AssignmentPattern",
                        "decorators": [],
                        "left": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "secondarySkillA",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1028,
                          "end": 1043
                        },
                        "right": {
                          "type": "Literal",
                          "value": "secondary",
                          "raw": "\"secondary\"",
                          "start": 1046,
                          "end": 1057
                        },
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1028,
                        "end": 1057
                      }
                    ],
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 991,
                    "end": 1059
                  },
                  "right": {
                    "type": "ArrayExpression",
                    "elements": [
                      {
                        "type": "Literal",
                        "value": "none",
                        "raw": "\"none\"",
                        "start": 1063,
                        "end": 1069
                      },
                      {
                        "type": "Literal",
                        "value": "none",
                        "raw": "\"none\"",
                        "start": 1071,
                        "end": 1077
                      }
                    ],
                    "start": 1062,
                    "end": 1078
                  },
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 991,
                  "end": 1078
                }
              ],
              "optional": false,
              "typeAnnotation": null,
              "start": 988,
              "end": 1079
            },
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "multiRobotA",
              "optional": false,
              "typeAnnotation": null,
              "start": 1082,
              "end": 1093
            },
            "start": 988,
            "end": 1093
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
              "start": 1095,
              "end": 1096
            },
            "right": {
              "type": "Literal",
              "value": 0,
              "raw": "0",
              "start": 1099,
              "end": 1100
            },
            "start": 1095,
            "end": 1100
          }
        ],
        "start": 988,
        "end": 1100
      },
      "test": {
        "type": "BinaryExpression",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "i",
          "optional": false,
          "typeAnnotation": null,
          "start": 1102,
          "end": 1103
        },
        "operator": "<",
        "right": {
          "type": "Literal",
          "value": 1,
          "raw": "1",
          "start": 1106,
          "end": 1107
        },
        "start": 1102,
        "end": 1107
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
          "start": 1109,
          "end": 1110
        },
        "start": 1109,
        "end": 1112
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
                  "start": 1120,
                  "end": 1127
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "log",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1128,
                  "end": 1131
                },
                "optional": false,
                "computed": false,
                "start": 1120,
                "end": 1131
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "primarySkillA",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1132,
                  "end": 1145
                }
              ],
              "optional": false,
              "start": 1120,
              "end": 1146
            },
            "directive": null,
            "start": 1120,
            "end": 1147
          }
        ],
        "start": 1114,
        "end": 1149
      },
      "start": 983,
      "end": 1149
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
                  "type": "AssignmentPattern",
                  "decorators": [],
                  "left": {
                    "type": "ArrayPattern",
                    "decorators": [],
                    "elements": [
                      {
                        "type": "AssignmentPattern",
                        "decorators": [],
                        "left": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "primarySkillA",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1164,
                          "end": 1177
                        },
                        "right": {
                          "type": "Literal",
                          "value": "primary",
                          "raw": "\"primary\"",
                          "start": 1180,
                          "end": 1189
                        },
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1164,
                        "end": 1189
                      },
                      {
                        "type": "AssignmentPattern",
                        "decorators": [],
                        "left": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "secondarySkillA",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1195,
                          "end": 1210
                        },
                        "right": {
                          "type": "Literal",
                          "value": "secondary",
                          "raw": "\"secondary\"",
                          "start": 1213,
                          "end": 1224
                        },
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1195,
                        "end": 1224
                      }
                    ],
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1158,
                    "end": 1226
                  },
                  "right": {
                    "type": "ArrayExpression",
                    "elements": [
                      {
                        "type": "Literal",
                        "value": "none",
                        "raw": "\"none\"",
                        "start": 1230,
                        "end": 1236
                      },
                      {
                        "type": "Literal",
                        "value": "none",
                        "raw": "\"none\"",
                        "start": 1238,
                        "end": 1244
                      }
                    ],
                    "start": 1229,
                    "end": 1245
                  },
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1158,
                  "end": 1245
                }
              ],
              "optional": false,
              "typeAnnotation": null,
              "start": 1155,
              "end": 1246
            },
            "right": {
              "type": "CallExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "getMultiRobot",
                "optional": false,
                "typeAnnotation": null,
                "start": 1249,
                "end": 1262
              },
              "typeArguments": null,
              "arguments": [],
              "optional": false,
              "start": 1249,
              "end": 1264
            },
            "start": 1155,
            "end": 1264
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
              "start": 1266,
              "end": 1267
            },
            "right": {
              "type": "Literal",
              "value": 0,
              "raw": "0",
              "start": 1270,
              "end": 1271
            },
            "start": 1266,
            "end": 1271
          }
        ],
        "start": 1155,
        "end": 1271
      },
      "test": {
        "type": "BinaryExpression",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "i",
          "optional": false,
          "typeAnnotation": null,
          "start": 1273,
          "end": 1274
        },
        "operator": "<",
        "right": {
          "type": "Literal",
          "value": 1,
          "raw": "1",
          "start": 1277,
          "end": 1278
        },
        "start": 1273,
        "end": 1278
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
          "start": 1280,
          "end": 1281
        },
        "start": 1280,
        "end": 1283
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
                  "start": 1291,
                  "end": 1298
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "log",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1299,
                  "end": 1302
                },
                "optional": false,
                "computed": false,
                "start": 1291,
                "end": 1302
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "primarySkillA",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1303,
                  "end": 1316
                }
              ],
              "optional": false,
              "start": 1291,
              "end": 1317
            },
            "directive": null,
            "start": 1291,
            "end": 1318
          }
        ],
        "start": 1285,
        "end": 1320
      },
      "start": 1150,
      "end": 1320
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
                  "type": "AssignmentPattern",
                  "decorators": [],
                  "left": {
                    "type": "ArrayPattern",
                    "decorators": [],
                    "elements": [
                      {
                        "type": "AssignmentPattern",
                        "decorators": [],
                        "left": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "primarySkillA",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1335,
                          "end": 1348
                        },
                        "right": {
                          "type": "Literal",
                          "value": "primary",
                          "raw": "\"primary\"",
                          "start": 1351,
                          "end": 1360
                        },
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1335,
                        "end": 1360
                      },
                      {
                        "type": "AssignmentPattern",
                        "decorators": [],
                        "left": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "secondarySkillA",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1366,
                          "end": 1381
                        },
                        "right": {
                          "type": "Literal",
                          "value": "secondary",
                          "raw": "\"secondary\"",
                          "start": 1384,
                          "end": 1395
                        },
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1366,
                        "end": 1395
                      }
                    ],
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1329,
                    "end": 1397
                  },
                  "right": {
                    "type": "ArrayExpression",
                    "elements": [
                      {
                        "type": "Literal",
                        "value": "none",
                        "raw": "\"none\"",
                        "start": 1401,
                        "end": 1407
                      },
                      {
                        "type": "Literal",
                        "value": "none",
                        "raw": "\"none\"",
                        "start": 1409,
                        "end": 1415
                      }
                    ],
                    "start": 1400,
                    "end": 1416
                  },
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1329,
                  "end": 1416
                }
              ],
              "optional": false,
              "typeAnnotation": null,
              "start": 1326,
              "end": 1417
            },
            "right": {
              "type": "ArrayExpression",
              "elements": [
                {
                  "type": "Literal",
                  "value": "trimmer",
                  "raw": "\"trimmer\"",
                  "start": 1421,
                  "end": 1430
                },
                {
                  "type": "ArrayExpression",
                  "elements": [
                    {
                      "type": "Literal",
                      "value": "trimming",
                      "raw": "\"trimming\"",
                      "start": 1433,
                      "end": 1443
                    },
                    {
                      "type": "Literal",
                      "value": "edging",
                      "raw": "\"edging\"",
                      "start": 1445,
                      "end": 1453
                    }
                  ],
                  "start": 1432,
                  "end": 1454
                }
              ],
              "start": 1420,
              "end": 1455
            },
            "start": 1326,
            "end": 1455
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
              "start": 1457,
              "end": 1458
            },
            "right": {
              "type": "Literal",
              "value": 0,
              "raw": "0",
              "start": 1461,
              "end": 1462
            },
            "start": 1457,
            "end": 1462
          }
        ],
        "start": 1326,
        "end": 1462
      },
      "test": {
        "type": "BinaryExpression",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "i",
          "optional": false,
          "typeAnnotation": null,
          "start": 1464,
          "end": 1465
        },
        "operator": "<",
        "right": {
          "type": "Literal",
          "value": 1,
          "raw": "1",
          "start": 1468,
          "end": 1469
        },
        "start": 1464,
        "end": 1469
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
          "start": 1471,
          "end": 1472
        },
        "start": 1471,
        "end": 1474
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
                  "start": 1482,
                  "end": 1489
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "log",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1490,
                  "end": 1493
                },
                "optional": false,
                "computed": false,
                "start": 1482,
                "end": 1493
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "primarySkillA",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1494,
                  "end": 1507
                }
              ],
              "optional": false,
              "start": 1482,
              "end": 1508
            },
            "directive": null,
            "start": 1482,
            "end": 1509
          }
        ],
        "start": 1476,
        "end": 1511
      },
      "start": 1321,
      "end": 1511
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
                  "type": "AssignmentPattern",
                  "decorators": [],
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "numberB",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1519,
                    "end": 1526
                  },
                  "right": {
                    "type": "UnaryExpression",
                    "operator": "-",
                    "argument": {
                      "type": "Literal",
                      "value": 1,
                      "raw": "1",
                      "start": 1530,
                      "end": 1531
                    },
                    "prefix": true,
                    "start": 1529,
                    "end": 1531
                  },
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1519,
                  "end": 1531
                }
              ],
              "optional": false,
              "typeAnnotation": null,
              "start": 1518,
              "end": 1532
            },
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "robotA",
              "optional": false,
              "typeAnnotation": null,
              "start": 1535,
              "end": 1541
            },
            "start": 1518,
            "end": 1541
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
              "start": 1543,
              "end": 1544
            },
            "right": {
              "type": "Literal",
              "value": 0,
              "raw": "0",
              "start": 1547,
              "end": 1548
            },
            "start": 1543,
            "end": 1548
          }
        ],
        "start": 1518,
        "end": 1548
      },
      "test": {
        "type": "BinaryExpression",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "i",
          "optional": false,
          "typeAnnotation": null,
          "start": 1550,
          "end": 1551
        },
        "operator": "<",
        "right": {
          "type": "Literal",
          "value": 1,
          "raw": "1",
          "start": 1554,
          "end": 1555
        },
        "start": 1550,
        "end": 1555
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
          "start": 1557,
          "end": 1558
        },
        "start": 1557,
        "end": 1560
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
                  "start": 1568,
                  "end": 1575
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "log",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1576,
                  "end": 1579
                },
                "optional": false,
                "computed": false,
                "start": 1568,
                "end": 1579
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "numberB",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1580,
                  "end": 1587
                }
              ],
              "optional": false,
              "start": 1568,
              "end": 1588
            },
            "directive": null,
            "start": 1568,
            "end": 1589
          }
        ],
        "start": 1562,
        "end": 1591
      },
      "start": 1513,
      "end": 1591
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
                  "type": "AssignmentPattern",
                  "decorators": [],
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "numberB",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1598,
                    "end": 1605
                  },
                  "right": {
                    "type": "UnaryExpression",
                    "operator": "-",
                    "argument": {
                      "type": "Literal",
                      "value": 1,
                      "raw": "1",
                      "start": 1609,
                      "end": 1610
                    },
                    "prefix": true,
                    "start": 1608,
                    "end": 1610
                  },
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1598,
                  "end": 1610
                }
              ],
              "optional": false,
              "typeAnnotation": null,
              "start": 1597,
              "end": 1611
            },
            "right": {
              "type": "CallExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "getRobot",
                "optional": false,
                "typeAnnotation": null,
                "start": 1614,
                "end": 1622
              },
              "typeArguments": null,
              "arguments": [],
              "optional": false,
              "start": 1614,
              "end": 1624
            },
            "start": 1597,
            "end": 1624
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
              "start": 1626,
              "end": 1627
            },
            "right": {
              "type": "Literal",
              "value": 0,
              "raw": "0",
              "start": 1630,
              "end": 1631
            },
            "start": 1626,
            "end": 1631
          }
        ],
        "start": 1597,
        "end": 1631
      },
      "test": {
        "type": "BinaryExpression",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "i",
          "optional": false,
          "typeAnnotation": null,
          "start": 1633,
          "end": 1634
        },
        "operator": "<",
        "right": {
          "type": "Literal",
          "value": 1,
          "raw": "1",
          "start": 1637,
          "end": 1638
        },
        "start": 1633,
        "end": 1638
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
          "start": 1640,
          "end": 1641
        },
        "start": 1640,
        "end": 1643
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
                  "start": 1651,
                  "end": 1658
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "log",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1659,
                  "end": 1662
                },
                "optional": false,
                "computed": false,
                "start": 1651,
                "end": 1662
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "numberB",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1663,
                  "end": 1670
                }
              ],
              "optional": false,
              "start": 1651,
              "end": 1671
            },
            "directive": null,
            "start": 1651,
            "end": 1672
          }
        ],
        "start": 1645,
        "end": 1674
      },
      "start": 1592,
      "end": 1674
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
                  "type": "AssignmentPattern",
                  "decorators": [],
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "numberB",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1681,
                    "end": 1688
                  },
                  "right": {
                    "type": "UnaryExpression",
                    "operator": "-",
                    "argument": {
                      "type": "Literal",
                      "value": 1,
                      "raw": "1",
                      "start": 1692,
                      "end": 1693
                    },
                    "prefix": true,
                    "start": 1691,
                    "end": 1693
                  },
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1681,
                  "end": 1693
                }
              ],
              "optional": false,
              "typeAnnotation": null,
              "start": 1680,
              "end": 1694
            },
            "right": {
              "type": "ArrayExpression",
              "elements": [
                {
                  "type": "Literal",
                  "value": 2,
                  "raw": "2",
                  "start": 1698,
                  "end": 1699
                },
                {
                  "type": "Literal",
                  "value": "trimmer",
                  "raw": "\"trimmer\"",
                  "start": 1701,
                  "end": 1710
                },
                {
                  "type": "Literal",
                  "value": "trimming",
                  "raw": "\"trimming\"",
                  "start": 1712,
                  "end": 1722
                }
              ],
              "start": 1697,
              "end": 1723
            },
            "start": 1680,
            "end": 1723
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
              "start": 1725,
              "end": 1726
            },
            "right": {
              "type": "Literal",
              "value": 0,
              "raw": "0",
              "start": 1729,
              "end": 1730
            },
            "start": 1725,
            "end": 1730
          }
        ],
        "start": 1680,
        "end": 1730
      },
      "test": {
        "type": "BinaryExpression",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "i",
          "optional": false,
          "typeAnnotation": null,
          "start": 1732,
          "end": 1733
        },
        "operator": "<",
        "right": {
          "type": "Literal",
          "value": 1,
          "raw": "1",
          "start": 1736,
          "end": 1737
        },
        "start": 1732,
        "end": 1737
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
          "start": 1739,
          "end": 1740
        },
        "start": 1739,
        "end": 1742
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
                  "start": 1750,
                  "end": 1757
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "log",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1758,
                  "end": 1761
                },
                "optional": false,
                "computed": false,
                "start": 1750,
                "end": 1761
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "numberB",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1762,
                  "end": 1769
                }
              ],
              "optional": false,
              "start": 1750,
              "end": 1770
            },
            "directive": null,
            "start": 1750,
            "end": 1771
          }
        ],
        "start": 1744,
        "end": 1773
      },
      "start": 1675,
      "end": 1773
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
                  "type": "AssignmentPattern",
                  "decorators": [],
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "nameB",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1780,
                    "end": 1785
                  },
                  "right": {
                    "type": "Literal",
                    "value": "name",
                    "raw": "\"name\"",
                    "start": 1788,
                    "end": 1794
                  },
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1780,
                  "end": 1794
                }
              ],
              "optional": false,
              "typeAnnotation": null,
              "start": 1779,
              "end": 1795
            },
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "multiRobotA",
              "optional": false,
              "typeAnnotation": null,
              "start": 1798,
              "end": 1809
            },
            "start": 1779,
            "end": 1809
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
              "start": 1811,
              "end": 1812
            },
            "right": {
              "type": "Literal",
              "value": 0,
              "raw": "0",
              "start": 1815,
              "end": 1816
            },
            "start": 1811,
            "end": 1816
          }
        ],
        "start": 1779,
        "end": 1816
      },
      "test": {
        "type": "BinaryExpression",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "i",
          "optional": false,
          "typeAnnotation": null,
          "start": 1818,
          "end": 1819
        },
        "operator": "<",
        "right": {
          "type": "Literal",
          "value": 1,
          "raw": "1",
          "start": 1822,
          "end": 1823
        },
        "start": 1818,
        "end": 1823
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
          "start": 1825,
          "end": 1826
        },
        "start": 1825,
        "end": 1828
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
                  "start": 1836,
                  "end": 1843
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "log",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1844,
                  "end": 1847
                },
                "optional": false,
                "computed": false,
                "start": 1836,
                "end": 1847
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "nameB",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1848,
                  "end": 1853
                }
              ],
              "optional": false,
              "start": 1836,
              "end": 1854
            },
            "directive": null,
            "start": 1836,
            "end": 1855
          }
        ],
        "start": 1830,
        "end": 1857
      },
      "start": 1774,
      "end": 1857
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
                  "type": "AssignmentPattern",
                  "decorators": [],
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "nameB",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1864,
                    "end": 1869
                  },
                  "right": {
                    "type": "Literal",
                    "value": "name",
                    "raw": "\"name\"",
                    "start": 1872,
                    "end": 1878
                  },
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1864,
                  "end": 1878
                }
              ],
              "optional": false,
              "typeAnnotation": null,
              "start": 1863,
              "end": 1879
            },
            "right": {
              "type": "CallExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "getMultiRobot",
                "optional": false,
                "typeAnnotation": null,
                "start": 1882,
                "end": 1895
              },
              "typeArguments": null,
              "arguments": [],
              "optional": false,
              "start": 1882,
              "end": 1897
            },
            "start": 1863,
            "end": 1897
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
              "start": 1899,
              "end": 1900
            },
            "right": {
              "type": "Literal",
              "value": 0,
              "raw": "0",
              "start": 1903,
              "end": 1904
            },
            "start": 1899,
            "end": 1904
          }
        ],
        "start": 1863,
        "end": 1904
      },
      "test": {
        "type": "BinaryExpression",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "i",
          "optional": false,
          "typeAnnotation": null,
          "start": 1906,
          "end": 1907
        },
        "operator": "<",
        "right": {
          "type": "Literal",
          "value": 1,
          "raw": "1",
          "start": 1910,
          "end": 1911
        },
        "start": 1906,
        "end": 1911
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
          "start": 1913,
          "end": 1914
        },
        "start": 1913,
        "end": 1916
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
                  "start": 1924,
                  "end": 1931
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "log",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1932,
                  "end": 1935
                },
                "optional": false,
                "computed": false,
                "start": 1924,
                "end": 1935
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "nameB",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1936,
                  "end": 1941
                }
              ],
              "optional": false,
              "start": 1924,
              "end": 1942
            },
            "directive": null,
            "start": 1924,
            "end": 1943
          }
        ],
        "start": 1918,
        "end": 1945
      },
      "start": 1858,
      "end": 1945
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
                  "type": "AssignmentPattern",
                  "decorators": [],
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "nameB",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1952,
                    "end": 1957
                  },
                  "right": {
                    "type": "Literal",
                    "value": "name",
                    "raw": "\"name\"",
                    "start": 1960,
                    "end": 1966
                  },
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1952,
                  "end": 1966
                }
              ],
              "optional": false,
              "typeAnnotation": null,
              "start": 1951,
              "end": 1967
            },
            "right": {
              "type": "ArrayExpression",
              "elements": [
                {
                  "type": "Literal",
                  "value": "trimmer",
                  "raw": "\"trimmer\"",
                  "start": 1971,
                  "end": 1980
                },
                {
                  "type": "ArrayExpression",
                  "elements": [
                    {
                      "type": "Literal",
                      "value": "trimming",
                      "raw": "\"trimming\"",
                      "start": 1983,
                      "end": 1993
                    },
                    {
                      "type": "Literal",
                      "value": "edging",
                      "raw": "\"edging\"",
                      "start": 1995,
                      "end": 2003
                    }
                  ],
                  "start": 1982,
                  "end": 2004
                }
              ],
              "start": 1970,
              "end": 2005
            },
            "start": 1951,
            "end": 2005
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
              "start": 2007,
              "end": 2008
            },
            "right": {
              "type": "Literal",
              "value": 0,
              "raw": "0",
              "start": 2011,
              "end": 2012
            },
            "start": 2007,
            "end": 2012
          }
        ],
        "start": 1951,
        "end": 2012
      },
      "test": {
        "type": "BinaryExpression",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "i",
          "optional": false,
          "typeAnnotation": null,
          "start": 2014,
          "end": 2015
        },
        "operator": "<",
        "right": {
          "type": "Literal",
          "value": 1,
          "raw": "1",
          "start": 2018,
          "end": 2019
        },
        "start": 2014,
        "end": 2019
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
          "start": 2021,
          "end": 2022
        },
        "start": 2021,
        "end": 2024
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
                  "start": 2032,
                  "end": 2039
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "log",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2040,
                  "end": 2043
                },
                "optional": false,
                "computed": false,
                "start": 2032,
                "end": 2043
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "nameB",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2044,
                  "end": 2049
                }
              ],
              "optional": false,
              "start": 2032,
              "end": 2050
            },
            "directive": null,
            "start": 2032,
            "end": 2051
          }
        ],
        "start": 2026,
        "end": 2053
      },
      "start": 1946,
      "end": 2053
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
                  "type": "AssignmentPattern",
                  "decorators": [],
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "numberA2",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2061,
                    "end": 2069
                  },
                  "right": {
                    "type": "UnaryExpression",
                    "operator": "-",
                    "argument": {
                      "type": "Literal",
                      "value": 1,
                      "raw": "1",
                      "start": 2073,
                      "end": 2074
                    },
                    "prefix": true,
                    "start": 2072,
                    "end": 2074
                  },
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2061,
                  "end": 2074
                },
                {
                  "type": "AssignmentPattern",
                  "decorators": [],
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "nameA2",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2076,
                    "end": 2082
                  },
                  "right": {
                    "type": "Literal",
                    "value": "name",
                    "raw": "\"name\"",
                    "start": 2085,
                    "end": 2091
                  },
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2076,
                  "end": 2091
                },
                {
                  "type": "AssignmentPattern",
                  "decorators": [],
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "skillA2",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2093,
                    "end": 2100
                  },
                  "right": {
                    "type": "Literal",
                    "value": "skill",
                    "raw": "\"skill\"",
                    "start": 2103,
                    "end": 2110
                  },
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2093,
                  "end": 2110
                }
              ],
              "optional": false,
              "typeAnnotation": null,
              "start": 2060,
              "end": 2111
            },
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "robotA",
              "optional": false,
              "typeAnnotation": null,
              "start": 2114,
              "end": 2120
            },
            "start": 2060,
            "end": 2120
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
              "start": 2122,
              "end": 2123
            },
            "right": {
              "type": "Literal",
              "value": 0,
              "raw": "0",
              "start": 2126,
              "end": 2127
            },
            "start": 2122,
            "end": 2127
          }
        ],
        "start": 2060,
        "end": 2127
      },
      "test": {
        "type": "BinaryExpression",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "i",
          "optional": false,
          "typeAnnotation": null,
          "start": 2129,
          "end": 2130
        },
        "operator": "<",
        "right": {
          "type": "Literal",
          "value": 1,
          "raw": "1",
          "start": 2133,
          "end": 2134
        },
        "start": 2129,
        "end": 2134
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
          "start": 2136,
          "end": 2137
        },
        "start": 2136,
        "end": 2139
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
                  "start": 2147,
                  "end": 2154
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "log",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2155,
                  "end": 2158
                },
                "optional": false,
                "computed": false,
                "start": 2147,
                "end": 2158
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "nameA2",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2159,
                  "end": 2165
                }
              ],
              "optional": false,
              "start": 2147,
              "end": 2166
            },
            "directive": null,
            "start": 2147,
            "end": 2167
          }
        ],
        "start": 2141,
        "end": 2169
      },
      "start": 2055,
      "end": 2169
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
                  "type": "AssignmentPattern",
                  "decorators": [],
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "numberA2",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2176,
                    "end": 2184
                  },
                  "right": {
                    "type": "UnaryExpression",
                    "operator": "-",
                    "argument": {
                      "type": "Literal",
                      "value": 1,
                      "raw": "1",
                      "start": 2188,
                      "end": 2189
                    },
                    "prefix": true,
                    "start": 2187,
                    "end": 2189
                  },
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2176,
                  "end": 2189
                },
                {
                  "type": "AssignmentPattern",
                  "decorators": [],
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "nameA2",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2191,
                    "end": 2197
                  },
                  "right": {
                    "type": "Literal",
                    "value": "name",
                    "raw": "\"name\"",
                    "start": 2200,
                    "end": 2206
                  },
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2191,
                  "end": 2206
                },
                {
                  "type": "AssignmentPattern",
                  "decorators": [],
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "skillA2",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2208,
                    "end": 2215
                  },
                  "right": {
                    "type": "Literal",
                    "value": "skill",
                    "raw": "\"skill\"",
                    "start": 2218,
                    "end": 2225
                  },
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2208,
                  "end": 2225
                }
              ],
              "optional": false,
              "typeAnnotation": null,
              "start": 2175,
              "end": 2226
            },
            "right": {
              "type": "CallExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "getRobot",
                "optional": false,
                "typeAnnotation": null,
                "start": 2229,
                "end": 2237
              },
              "typeArguments": null,
              "arguments": [],
              "optional": false,
              "start": 2229,
              "end": 2239
            },
            "start": 2175,
            "end": 2239
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
              "start": 2241,
              "end": 2242
            },
            "right": {
              "type": "Literal",
              "value": 0,
              "raw": "0",
              "start": 2245,
              "end": 2246
            },
            "start": 2241,
            "end": 2246
          }
        ],
        "start": 2175,
        "end": 2246
      },
      "test": {
        "type": "BinaryExpression",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "i",
          "optional": false,
          "typeAnnotation": null,
          "start": 2248,
          "end": 2249
        },
        "operator": "<",
        "right": {
          "type": "Literal",
          "value": 1,
          "raw": "1",
          "start": 2252,
          "end": 2253
        },
        "start": 2248,
        "end": 2253
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
          "start": 2255,
          "end": 2256
        },
        "start": 2255,
        "end": 2258
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
                  "start": 2266,
                  "end": 2273
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "log",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2274,
                  "end": 2277
                },
                "optional": false,
                "computed": false,
                "start": 2266,
                "end": 2277
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "nameA2",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2278,
                  "end": 2284
                }
              ],
              "optional": false,
              "start": 2266,
              "end": 2285
            },
            "directive": null,
            "start": 2266,
            "end": 2286
          }
        ],
        "start": 2260,
        "end": 2288
      },
      "start": 2170,
      "end": 2288
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
                  "type": "AssignmentPattern",
                  "decorators": [],
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "numberA2",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2295,
                    "end": 2303
                  },
                  "right": {
                    "type": "UnaryExpression",
                    "operator": "-",
                    "argument": {
                      "type": "Literal",
                      "value": 1,
                      "raw": "1",
                      "start": 2307,
                      "end": 2308
                    },
                    "prefix": true,
                    "start": 2306,
                    "end": 2308
                  },
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2295,
                  "end": 2308
                },
                {
                  "type": "AssignmentPattern",
                  "decorators": [],
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "nameA2",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2310,
                    "end": 2316
                  },
                  "right": {
                    "type": "Literal",
                    "value": "name",
                    "raw": "\"name\"",
                    "start": 2319,
                    "end": 2325
                  },
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2310,
                  "end": 2325
                },
                {
                  "type": "AssignmentPattern",
                  "decorators": [],
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "skillA2",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2327,
                    "end": 2334
                  },
                  "right": {
                    "type": "Literal",
                    "value": "skill",
                    "raw": "\"skill\"",
                    "start": 2337,
                    "end": 2344
                  },
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2327,
                  "end": 2344
                }
              ],
              "optional": false,
              "typeAnnotation": null,
              "start": 2294,
              "end": 2345
            },
            "right": {
              "type": "ArrayExpression",
              "elements": [
                {
                  "type": "Literal",
                  "value": 2,
                  "raw": "2",
                  "start": 2349,
                  "end": 2350
                },
                {
                  "type": "Literal",
                  "value": "trimmer",
                  "raw": "\"trimmer\"",
                  "start": 2352,
                  "end": 2361
                },
                {
                  "type": "Literal",
                  "value": "trimming",
                  "raw": "\"trimming\"",
                  "start": 2363,
                  "end": 2373
                }
              ],
              "start": 2348,
              "end": 2374
            },
            "start": 2294,
            "end": 2374
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
              "start": 2376,
              "end": 2377
            },
            "right": {
              "type": "Literal",
              "value": 0,
              "raw": "0",
              "start": 2380,
              "end": 2381
            },
            "start": 2376,
            "end": 2381
          }
        ],
        "start": 2294,
        "end": 2381
      },
      "test": {
        "type": "BinaryExpression",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "i",
          "optional": false,
          "typeAnnotation": null,
          "start": 2383,
          "end": 2384
        },
        "operator": "<",
        "right": {
          "type": "Literal",
          "value": 1,
          "raw": "1",
          "start": 2387,
          "end": 2388
        },
        "start": 2383,
        "end": 2388
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
          "start": 2390,
          "end": 2391
        },
        "start": 2390,
        "end": 2393
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
                  "start": 2401,
                  "end": 2408
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "log",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2409,
                  "end": 2412
                },
                "optional": false,
                "computed": false,
                "start": 2401,
                "end": 2412
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "nameA2",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2413,
                  "end": 2419
                }
              ],
              "optional": false,
              "start": 2401,
              "end": 2420
            },
            "directive": null,
            "start": 2401,
            "end": 2421
          }
        ],
        "start": 2395,
        "end": 2423
      },
      "start": 2289,
      "end": 2423
    },
    {
      "type": "ForStatement",
      "init": {
        "type": "VariableDeclaration",
        "kind": "let",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "ArrayPattern",
              "decorators": [],
              "elements": [
                {
                  "type": "AssignmentPattern",
                  "decorators": [],
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "nameMA",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2438,
                    "end": 2444
                  },
                  "right": {
                    "type": "Literal",
                    "value": "noName",
                    "raw": "\"noName\"",
                    "start": 2447,
                    "end": 2455
                  },
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2438,
                  "end": 2455
                },
                {
                  "type": "AssignmentPattern",
                  "decorators": [],
                  "left": {
                    "type": "ArrayPattern",
                    "decorators": [],
                    "elements": [
                      {
                        "type": "AssignmentPattern",
                        "decorators": [],
                        "left": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "primarySkillA",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 2479,
                          "end": 2492
                        },
                        "right": {
                          "type": "Literal",
                          "value": "primary",
                          "raw": "\"primary\"",
                          "start": 2495,
                          "end": 2504
                        },
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2479,
                        "end": 2504
                      },
                      {
                        "type": "AssignmentPattern",
                        "decorators": [],
                        "left": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "secondarySkillA",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 2518,
                          "end": 2533
                        },
                        "right": {
                          "type": "Literal",
                          "value": "secondary",
                          "raw": "\"secondary\"",
                          "start": 2536,
                          "end": 2547
                        },
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2518,
                        "end": 2547
                      }
                    ],
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2465,
                    "end": 2557
                  },
                  "right": {
                    "type": "ArrayExpression",
                    "elements": [
                      {
                        "type": "Literal",
                        "value": "none",
                        "raw": "\"none\"",
                        "start": 2561,
                        "end": 2567
                      },
                      {
                        "type": "Literal",
                        "value": "none",
                        "raw": "\"none\"",
                        "start": 2569,
                        "end": 2575
                      }
                    ],
                    "start": 2560,
                    "end": 2576
                  },
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2465,
                  "end": 2576
                }
              ],
              "optional": false,
              "typeAnnotation": null,
              "start": 2437,
              "end": 2582
            },
            "init": {
              "type": "Identifier",
              "decorators": [],
              "name": "multiRobotA",
              "optional": false,
              "typeAnnotation": null,
              "start": 2585,
              "end": 2596
            },
            "definite": false,
            "start": 2437,
            "end": 2596
          },
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "i",
              "optional": false,
              "typeAnnotation": null,
              "start": 2598,
              "end": 2599
            },
            "init": {
              "type": "Literal",
              "value": 0,
              "raw": "0",
              "start": 2602,
              "end": 2603
            },
            "definite": false,
            "start": 2598,
            "end": 2603
          }
        ],
        "declare": false,
        "start": 2429,
        "end": 2603
      },
      "test": {
        "type": "BinaryExpression",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "i",
          "optional": false,
          "typeAnnotation": null,
          "start": 2605,
          "end": 2606
        },
        "operator": "<",
        "right": {
          "type": "Literal",
          "value": 1,
          "raw": "1",
          "start": 2609,
          "end": 2610
        },
        "start": 2605,
        "end": 2610
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
          "start": 2612,
          "end": 2613
        },
        "start": 2612,
        "end": 2615
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
                  "start": 2623,
                  "end": 2630
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "log",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2631,
                  "end": 2634
                },
                "optional": false,
                "computed": false,
                "start": 2623,
                "end": 2634
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "nameMA",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2635,
                  "end": 2641
                }
              ],
              "optional": false,
              "start": 2623,
              "end": 2642
            },
            "directive": null,
            "start": 2623,
            "end": 2643
          }
        ],
        "start": 2617,
        "end": 2645
      },
      "start": 2424,
      "end": 2645
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
                  "type": "AssignmentPattern",
                  "decorators": [],
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "nameMA",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2652,
                    "end": 2658
                  },
                  "right": {
                    "type": "Literal",
                    "value": "noName",
                    "raw": "\"noName\"",
                    "start": 2661,
                    "end": 2669
                  },
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2652,
                  "end": 2669
                },
                {
                  "type": "AssignmentPattern",
                  "decorators": [],
                  "left": {
                    "type": "ArrayPattern",
                    "decorators": [],
                    "elements": [
                      {
                        "type": "AssignmentPattern",
                        "decorators": [],
                        "left": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "primarySkillA",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 2685,
                          "end": 2698
                        },
                        "right": {
                          "type": "Literal",
                          "value": "primary",
                          "raw": "\"primary\"",
                          "start": 2701,
                          "end": 2710
                        },
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2685,
                        "end": 2710
                      },
                      {
                        "type": "AssignmentPattern",
                        "decorators": [],
                        "left": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "secondarySkillA",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 2720,
                          "end": 2735
                        },
                        "right": {
                          "type": "Literal",
                          "value": "secondary",
                          "raw": "\"secondary\"",
                          "start": 2738,
                          "end": 2749
                        },
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2720,
                        "end": 2749
                      }
                    ],
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2675,
                    "end": 2755
                  },
                  "right": {
                    "type": "ArrayExpression",
                    "elements": [
                      {
                        "type": "Literal",
                        "value": "none",
                        "raw": "\"none\"",
                        "start": 2759,
                        "end": 2765
                      },
                      {
                        "type": "Literal",
                        "value": "none",
                        "raw": "\"none\"",
                        "start": 2767,
                        "end": 2773
                      }
                    ],
                    "start": 2758,
                    "end": 2774
                  },
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2675,
                  "end": 2774
                }
              ],
              "optional": false,
              "typeAnnotation": null,
              "start": 2651,
              "end": 2776
            },
            "right": {
              "type": "CallExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "getMultiRobot",
                "optional": false,
                "typeAnnotation": null,
                "start": 2779,
                "end": 2792
              },
              "typeArguments": null,
              "arguments": [],
              "optional": false,
              "start": 2779,
              "end": 2794
            },
            "start": 2651,
            "end": 2794
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
              "start": 2796,
              "end": 2797
            },
            "right": {
              "type": "Literal",
              "value": 0,
              "raw": "0",
              "start": 2800,
              "end": 2801
            },
            "start": 2796,
            "end": 2801
          }
        ],
        "start": 2651,
        "end": 2801
      },
      "test": {
        "type": "BinaryExpression",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "i",
          "optional": false,
          "typeAnnotation": null,
          "start": 2803,
          "end": 2804
        },
        "operator": "<",
        "right": {
          "type": "Literal",
          "value": 1,
          "raw": "1",
          "start": 2807,
          "end": 2808
        },
        "start": 2803,
        "end": 2808
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
          "start": 2810,
          "end": 2811
        },
        "start": 2810,
        "end": 2813
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
                  "start": 2821,
                  "end": 2828
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "log",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2829,
                  "end": 2832
                },
                "optional": false,
                "computed": false,
                "start": 2821,
                "end": 2832
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "nameMA",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2833,
                  "end": 2839
                }
              ],
              "optional": false,
              "start": 2821,
              "end": 2840
            },
            "directive": null,
            "start": 2821,
            "end": 2841
          }
        ],
        "start": 2815,
        "end": 2843
      },
      "start": 2646,
      "end": 2843
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
                  "type": "AssignmentPattern",
                  "decorators": [],
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "nameMA",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2850,
                    "end": 2856
                  },
                  "right": {
                    "type": "Literal",
                    "value": "noName",
                    "raw": "\"noName\"",
                    "start": 2859,
                    "end": 2867
                  },
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2850,
                  "end": 2867
                },
                {
                  "type": "AssignmentPattern",
                  "decorators": [],
                  "left": {
                    "type": "ArrayPattern",
                    "decorators": [],
                    "elements": [
                      {
                        "type": "AssignmentPattern",
                        "decorators": [],
                        "left": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "primarySkillA",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 2883,
                          "end": 2896
                        },
                        "right": {
                          "type": "Literal",
                          "value": "primary",
                          "raw": "\"primary\"",
                          "start": 2899,
                          "end": 2908
                        },
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2883,
                        "end": 2908
                      },
                      {
                        "type": "AssignmentPattern",
                        "decorators": [],
                        "left": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "secondarySkillA",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 2918,
                          "end": 2933
                        },
                        "right": {
                          "type": "Literal",
                          "value": "secondary",
                          "raw": "\"secondary\"",
                          "start": 2936,
                          "end": 2947
                        },
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2918,
                        "end": 2947
                      }
                    ],
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2873,
                    "end": 2953
                  },
                  "right": {
                    "type": "ArrayExpression",
                    "elements": [
                      {
                        "type": "Literal",
                        "value": "none",
                        "raw": "\"none\"",
                        "start": 2957,
                        "end": 2963
                      },
                      {
                        "type": "Literal",
                        "value": "none",
                        "raw": "\"none\"",
                        "start": 2965,
                        "end": 2971
                      }
                    ],
                    "start": 2956,
                    "end": 2972
                  },
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2873,
                  "end": 2972
                }
              ],
              "optional": false,
              "typeAnnotation": null,
              "start": 2849,
              "end": 2974
            },
            "right": {
              "type": "ArrayExpression",
              "elements": [
                {
                  "type": "Literal",
                  "value": "trimmer",
                  "raw": "\"trimmer\"",
                  "start": 2978,
                  "end": 2987
                },
                {
                  "type": "ArrayExpression",
                  "elements": [
                    {
                      "type": "Literal",
                      "value": "trimming",
                      "raw": "\"trimming\"",
                      "start": 2990,
                      "end": 3000
                    },
                    {
                      "type": "Literal",
                      "value": "edging",
                      "raw": "\"edging\"",
                      "start": 3002,
                      "end": 3010
                    }
                  ],
                  "start": 2989,
                  "end": 3011
                }
              ],
              "start": 2977,
              "end": 3012
            },
            "start": 2849,
            "end": 3012
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
              "start": 3014,
              "end": 3015
            },
            "right": {
              "type": "Literal",
              "value": 0,
              "raw": "0",
              "start": 3018,
              "end": 3019
            },
            "start": 3014,
            "end": 3019
          }
        ],
        "start": 2849,
        "end": 3019
      },
      "test": {
        "type": "BinaryExpression",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "i",
          "optional": false,
          "typeAnnotation": null,
          "start": 3021,
          "end": 3022
        },
        "operator": "<",
        "right": {
          "type": "Literal",
          "value": 1,
          "raw": "1",
          "start": 3025,
          "end": 3026
        },
        "start": 3021,
        "end": 3026
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
          "start": 3028,
          "end": 3029
        },
        "start": 3028,
        "end": 3031
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
                  "start": 3039,
                  "end": 3046
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "log",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 3047,
                  "end": 3050
                },
                "optional": false,
                "computed": false,
                "start": 3039,
                "end": 3050
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "nameMA",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 3051,
                  "end": 3057
                }
              ],
              "optional": false,
              "start": 3039,
              "end": 3058
            },
            "directive": null,
            "start": 3039,
            "end": 3059
          }
        ],
        "start": 3033,
        "end": 3061
      },
      "start": 2844,
      "end": 3061
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
                  "type": "AssignmentPattern",
                  "decorators": [],
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "numberA3",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 3069,
                    "end": 3077
                  },
                  "right": {
                    "type": "UnaryExpression",
                    "operator": "-",
                    "argument": {
                      "type": "Literal",
                      "value": 1,
                      "raw": "1",
                      "start": 3081,
                      "end": 3082
                    },
                    "prefix": true,
                    "start": 3080,
                    "end": 3082
                  },
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 3069,
                  "end": 3082
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
                    "start": 3087,
                    "end": 3097
                  },
                  "optional": false,
                  "typeAnnotation": null,
                  "value": null,
                  "start": 3084,
                  "end": 3097
                }
              ],
              "optional": false,
              "typeAnnotation": null,
              "start": 3068,
              "end": 3098
            },
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "robotA",
              "optional": false,
              "typeAnnotation": null,
              "start": 3101,
              "end": 3107
            },
            "start": 3068,
            "end": 3107
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
              "start": 3109,
              "end": 3110
            },
            "right": {
              "type": "Literal",
              "value": 0,
              "raw": "0",
              "start": 3113,
              "end": 3114
            },
            "start": 3109,
            "end": 3114
          }
        ],
        "start": 3068,
        "end": 3114
      },
      "test": {
        "type": "BinaryExpression",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "i",
          "optional": false,
          "typeAnnotation": null,
          "start": 3116,
          "end": 3117
        },
        "operator": "<",
        "right": {
          "type": "Literal",
          "value": 1,
          "raw": "1",
          "start": 3120,
          "end": 3121
        },
        "start": 3116,
        "end": 3121
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
          "start": 3123,
          "end": 3124
        },
        "start": 3123,
        "end": 3126
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
                  "start": 3134,
                  "end": 3141
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "log",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 3142,
                  "end": 3145
                },
                "optional": false,
                "computed": false,
                "start": 3134,
                "end": 3145
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "numberA3",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 3146,
                  "end": 3154
                }
              ],
              "optional": false,
              "start": 3134,
              "end": 3155
            },
            "directive": null,
            "start": 3134,
            "end": 3156
          }
        ],
        "start": 3128,
        "end": 3158
      },
      "start": 3063,
      "end": 3158
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
                  "type": "AssignmentPattern",
                  "decorators": [],
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "numberA3",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 3165,
                    "end": 3173
                  },
                  "right": {
                    "type": "UnaryExpression",
                    "operator": "-",
                    "argument": {
                      "type": "Literal",
                      "value": 1,
                      "raw": "1",
                      "start": 3177,
                      "end": 3178
                    },
                    "prefix": true,
                    "start": 3176,
                    "end": 3178
                  },
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 3165,
                  "end": 3178
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
                    "start": 3183,
                    "end": 3193
                  },
                  "optional": false,
                  "typeAnnotation": null,
                  "value": null,
                  "start": 3180,
                  "end": 3193
                }
              ],
              "optional": false,
              "typeAnnotation": null,
              "start": 3164,
              "end": 3194
            },
            "right": {
              "type": "CallExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "getRobot",
                "optional": false,
                "typeAnnotation": null,
                "start": 3197,
                "end": 3205
              },
              "typeArguments": null,
              "arguments": [],
              "optional": false,
              "start": 3197,
              "end": 3207
            },
            "start": 3164,
            "end": 3207
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
              "start": 3209,
              "end": 3210
            },
            "right": {
              "type": "Literal",
              "value": 0,
              "raw": "0",
              "start": 3213,
              "end": 3214
            },
            "start": 3209,
            "end": 3214
          }
        ],
        "start": 3164,
        "end": 3214
      },
      "test": {
        "type": "BinaryExpression",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "i",
          "optional": false,
          "typeAnnotation": null,
          "start": 3216,
          "end": 3217
        },
        "operator": "<",
        "right": {
          "type": "Literal",
          "value": 1,
          "raw": "1",
          "start": 3220,
          "end": 3221
        },
        "start": 3216,
        "end": 3221
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
          "start": 3223,
          "end": 3224
        },
        "start": 3223,
        "end": 3226
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
                  "start": 3234,
                  "end": 3241
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "log",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 3242,
                  "end": 3245
                },
                "optional": false,
                "computed": false,
                "start": 3234,
                "end": 3245
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "numberA3",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 3246,
                  "end": 3254
                }
              ],
              "optional": false,
              "start": 3234,
              "end": 3255
            },
            "directive": null,
            "start": 3234,
            "end": 3256
          }
        ],
        "start": 3228,
        "end": 3258
      },
      "start": 3159,
      "end": 3258
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
                  "type": "AssignmentPattern",
                  "decorators": [],
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "numberA3",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 3265,
                    "end": 3273
                  },
                  "right": {
                    "type": "UnaryExpression",
                    "operator": "-",
                    "argument": {
                      "type": "Literal",
                      "value": 1,
                      "raw": "1",
                      "start": 3277,
                      "end": 3278
                    },
                    "prefix": true,
                    "start": 3276,
                    "end": 3278
                  },
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 3265,
                  "end": 3278
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
                    "start": 3283,
                    "end": 3293
                  },
                  "optional": false,
                  "typeAnnotation": null,
                  "value": null,
                  "start": 3280,
                  "end": 3293
                }
              ],
              "optional": false,
              "typeAnnotation": null,
              "start": 3264,
              "end": 3294
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
                  "start": 3298,
                  "end": 3303
                },
                "typeArguments": null,
                "start": 3298,
                "end": 3303
              },
              "expression": {
                "type": "ArrayExpression",
                "elements": [
                  {
                    "type": "Literal",
                    "value": 2,
                    "raw": "2",
                    "start": 3305,
                    "end": 3306
                  },
                  {
                    "type": "Literal",
                    "value": "trimmer",
                    "raw": "\"trimmer\"",
                    "start": 3308,
                    "end": 3317
                  },
                  {
                    "type": "Literal",
                    "value": "trimming",
                    "raw": "\"trimming\"",
                    "start": 3319,
                    "end": 3329
                  }
                ],
                "start": 3304,
                "end": 3330
              },
              "start": 3297,
              "end": 3330
            },
            "start": 3264,
            "end": 3330
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
              "start": 3332,
              "end": 3333
            },
            "right": {
              "type": "Literal",
              "value": 0,
              "raw": "0",
              "start": 3336,
              "end": 3337
            },
            "start": 3332,
            "end": 3337
          }
        ],
        "start": 3264,
        "end": 3337
      },
      "test": {
        "type": "BinaryExpression",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "i",
          "optional": false,
          "typeAnnotation": null,
          "start": 3339,
          "end": 3340
        },
        "operator": "<",
        "right": {
          "type": "Literal",
          "value": 1,
          "raw": "1",
          "start": 3343,
          "end": 3344
        },
        "start": 3339,
        "end": 3344
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
          "start": 3346,
          "end": 3347
        },
        "start": 3346,
        "end": 3349
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
                  "start": 3357,
                  "end": 3364
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "log",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 3365,
                  "end": 3368
                },
                "optional": false,
                "computed": false,
                "start": 3357,
                "end": 3368
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "numberA3",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 3369,
                  "end": 3377
                }
              ],
              "optional": false,
              "start": 3357,
              "end": 3378
            },
            "directive": null,
            "start": 3357,
            "end": 3379
          }
        ],
        "start": 3351,
        "end": 3381
      },
      "start": 3259,
      "end": 3381
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 3381
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
    "value": "=",
    "start": 730,
    "end": 731
  },
  {
    "type": "String",
    "value": "\"name\"",
    "start": 732,
    "end": 738
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 738,
    "end": 739
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 740,
    "end": 741
  },
  {
    "type": "Identifier",
    "value": "robotA",
    "start": 742,
    "end": 748
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 748,
    "end": 749
  },
  {
    "type": "Identifier",
    "value": "i",
    "start": 750,
    "end": 751
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 752,
    "end": 753
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 754,
    "end": 755
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 755,
    "end": 756
  },
  {
    "type": "Identifier",
    "value": "i",
    "start": 757,
    "end": 758
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 759,
    "end": 760
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 761,
    "end": 762
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 762,
    "end": 763
  },
  {
    "type": "Identifier",
    "value": "i",
    "start": 764,
    "end": 765
  },
  {
    "type": "Punctuator",
    "value": "++",
    "start": 765,
    "end": 767
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 767,
    "end": 768
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 769,
    "end": 770
  },
  {
    "type": "Identifier",
    "value": "console",
    "start": 775,
    "end": 782
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 782,
    "end": 783
  },
  {
    "type": "Identifier",
    "value": "log",
    "start": 783,
    "end": 786
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 786,
    "end": 787
  },
  {
    "type": "Identifier",
    "value": "nameA",
    "start": 787,
    "end": 792
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 792,
    "end": 793
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 793,
    "end": 794
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 795,
    "end": 796
  },
  {
    "type": "Keyword",
    "value": "for",
    "start": 797,
    "end": 800
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 801,
    "end": 802
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 802,
    "end": 803
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 803,
    "end": 804
  },
  {
    "type": "Identifier",
    "value": "nameA",
    "start": 805,
    "end": 810
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 811,
    "end": 812
  },
  {
    "type": "String",
    "value": "\"name\"",
    "start": 813,
    "end": 819
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 819,
    "end": 820
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 821,
    "end": 822
  },
  {
    "type": "Identifier",
    "value": "getRobot",
    "start": 823,
    "end": 831
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 831,
    "end": 832
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 832,
    "end": 833
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 833,
    "end": 834
  },
  {
    "type": "Identifier",
    "value": "i",
    "start": 835,
    "end": 836
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 837,
    "end": 838
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 839,
    "end": 840
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 840,
    "end": 841
  },
  {
    "type": "Identifier",
    "value": "i",
    "start": 842,
    "end": 843
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 844,
    "end": 845
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 846,
    "end": 847
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 847,
    "end": 848
  },
  {
    "type": "Identifier",
    "value": "i",
    "start": 849,
    "end": 850
  },
  {
    "type": "Punctuator",
    "value": "++",
    "start": 850,
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
    "type": "Identifier",
    "value": "console",
    "start": 860,
    "end": 867
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 867,
    "end": 868
  },
  {
    "type": "Identifier",
    "value": "log",
    "start": 868,
    "end": 871
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 871,
    "end": 872
  },
  {
    "type": "Identifier",
    "value": "nameA",
    "start": 872,
    "end": 877
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 877,
    "end": 878
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 878,
    "end": 879
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 880,
    "end": 881
  },
  {
    "type": "Keyword",
    "value": "for",
    "start": 882,
    "end": 885
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 886,
    "end": 887
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 887,
    "end": 888
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 888,
    "end": 889
  },
  {
    "type": "Identifier",
    "value": "nameA",
    "start": 890,
    "end": 895
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 896,
    "end": 897
  },
  {
    "type": "String",
    "value": "\"name\"",
    "start": 898,
    "end": 904
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 904,
    "end": 905
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 906,
    "end": 907
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 908,
    "end": 909
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 909,
    "end": 910
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 910,
    "end": 911
  },
  {
    "type": "String",
    "value": "\"trimmer\"",
    "start": 912,
    "end": 921
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 921,
    "end": 922
  },
  {
    "type": "String",
    "value": "\"trimming\"",
    "start": 923,
    "end": 933
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 933,
    "end": 934
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 934,
    "end": 935
  },
  {
    "type": "Identifier",
    "value": "i",
    "start": 936,
    "end": 937
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 938,
    "end": 939
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 940,
    "end": 941
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 941,
    "end": 942
  },
  {
    "type": "Identifier",
    "value": "i",
    "start": 943,
    "end": 944
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 945,
    "end": 946
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 947,
    "end": 948
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 948,
    "end": 949
  },
  {
    "type": "Identifier",
    "value": "i",
    "start": 950,
    "end": 951
  },
  {
    "type": "Punctuator",
    "value": "++",
    "start": 951,
    "end": 953
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 953,
    "end": 954
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 955,
    "end": 956
  },
  {
    "type": "Identifier",
    "value": "console",
    "start": 961,
    "end": 968
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 968,
    "end": 969
  },
  {
    "type": "Identifier",
    "value": "log",
    "start": 969,
    "end": 972
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 972,
    "end": 973
  },
  {
    "type": "Identifier",
    "value": "nameA",
    "start": 973,
    "end": 978
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 978,
    "end": 979
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 979,
    "end": 980
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 981,
    "end": 982
  },
  {
    "type": "Keyword",
    "value": "for",
    "start": 983,
    "end": 986
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 987,
    "end": 988
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 988,
    "end": 989
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 989,
    "end": 990
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 991,
    "end": 992
  },
  {
    "type": "Identifier",
    "value": "primarySkillA",
    "start": 997,
    "end": 1010
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1011,
    "end": 1012
  },
  {
    "type": "String",
    "value": "\"primary\"",
    "start": 1013,
    "end": 1022
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1022,
    "end": 1023
  },
  {
    "type": "Identifier",
    "value": "secondarySkillA",
    "start": 1028,
    "end": 1043
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1044,
    "end": 1045
  },
  {
    "type": "String",
    "value": "\"secondary\"",
    "start": 1046,
    "end": 1057
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1058,
    "end": 1059
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1060,
    "end": 1061
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1062,
    "end": 1063
  },
  {
    "type": "String",
    "value": "\"none\"",
    "start": 1063,
    "end": 1069
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1069,
    "end": 1070
  },
  {
    "type": "String",
    "value": "\"none\"",
    "start": 1071,
    "end": 1077
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1077,
    "end": 1078
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1078,
    "end": 1079
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1080,
    "end": 1081
  },
  {
    "type": "Identifier",
    "value": "multiRobotA",
    "start": 1082,
    "end": 1093
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1093,
    "end": 1094
  },
  {
    "type": "Identifier",
    "value": "i",
    "start": 1095,
    "end": 1096
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1097,
    "end": 1098
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 1099,
    "end": 1100
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1100,
    "end": 1101
  },
  {
    "type": "Identifier",
    "value": "i",
    "start": 1102,
    "end": 1103
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1104,
    "end": 1105
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 1106,
    "end": 1107
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1107,
    "end": 1108
  },
  {
    "type": "Identifier",
    "value": "i",
    "start": 1109,
    "end": 1110
  },
  {
    "type": "Punctuator",
    "value": "++",
    "start": 1110,
    "end": 1112
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1112,
    "end": 1113
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1114,
    "end": 1115
  },
  {
    "type": "Identifier",
    "value": "console",
    "start": 1120,
    "end": 1127
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1127,
    "end": 1128
  },
  {
    "type": "Identifier",
    "value": "log",
    "start": 1128,
    "end": 1131
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1131,
    "end": 1132
  },
  {
    "type": "Identifier",
    "value": "primarySkillA",
    "start": 1132,
    "end": 1145
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1145,
    "end": 1146
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1146,
    "end": 1147
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1148,
    "end": 1149
  },
  {
    "type": "Keyword",
    "value": "for",
    "start": 1150,
    "end": 1153
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1154,
    "end": 1155
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1155,
    "end": 1156
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1156,
    "end": 1157
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1158,
    "end": 1159
  },
  {
    "type": "Identifier",
    "value": "primarySkillA",
    "start": 1164,
    "end": 1177
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1178,
    "end": 1179
  },
  {
    "type": "String",
    "value": "\"primary\"",
    "start": 1180,
    "end": 1189
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1189,
    "end": 1190
  },
  {
    "type": "Identifier",
    "value": "secondarySkillA",
    "start": 1195,
    "end": 1210
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1211,
    "end": 1212
  },
  {
    "type": "String",
    "value": "\"secondary\"",
    "start": 1213,
    "end": 1224
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1225,
    "end": 1226
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1227,
    "end": 1228
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1229,
    "end": 1230
  },
  {
    "type": "String",
    "value": "\"none\"",
    "start": 1230,
    "end": 1236
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1236,
    "end": 1237
  },
  {
    "type": "String",
    "value": "\"none\"",
    "start": 1238,
    "end": 1244
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1244,
    "end": 1245
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1245,
    "end": 1246
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1247,
    "end": 1248
  },
  {
    "type": "Identifier",
    "value": "getMultiRobot",
    "start": 1249,
    "end": 1262
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1262,
    "end": 1263
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1263,
    "end": 1264
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1264,
    "end": 1265
  },
  {
    "type": "Identifier",
    "value": "i",
    "start": 1266,
    "end": 1267
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1268,
    "end": 1269
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 1270,
    "end": 1271
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1271,
    "end": 1272
  },
  {
    "type": "Identifier",
    "value": "i",
    "start": 1273,
    "end": 1274
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1275,
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
    "type": "Identifier",
    "value": "i",
    "start": 1280,
    "end": 1281
  },
  {
    "type": "Punctuator",
    "value": "++",
    "start": 1281,
    "end": 1283
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1283,
    "end": 1284
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1285,
    "end": 1286
  },
  {
    "type": "Identifier",
    "value": "console",
    "start": 1291,
    "end": 1298
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1298,
    "end": 1299
  },
  {
    "type": "Identifier",
    "value": "log",
    "start": 1299,
    "end": 1302
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1302,
    "end": 1303
  },
  {
    "type": "Identifier",
    "value": "primarySkillA",
    "start": 1303,
    "end": 1316
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1316,
    "end": 1317
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1317,
    "end": 1318
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1319,
    "end": 1320
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
    "type": "Punctuator",
    "value": ",",
    "start": 1327,
    "end": 1328
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1329,
    "end": 1330
  },
  {
    "type": "Identifier",
    "value": "primarySkillA",
    "start": 1335,
    "end": 1348
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1349,
    "end": 1350
  },
  {
    "type": "String",
    "value": "\"primary\"",
    "start": 1351,
    "end": 1360
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1360,
    "end": 1361
  },
  {
    "type": "Identifier",
    "value": "secondarySkillA",
    "start": 1366,
    "end": 1381
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1382,
    "end": 1383
  },
  {
    "type": "String",
    "value": "\"secondary\"",
    "start": 1384,
    "end": 1395
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1396,
    "end": 1397
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1398,
    "end": 1399
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1400,
    "end": 1401
  },
  {
    "type": "String",
    "value": "\"none\"",
    "start": 1401,
    "end": 1407
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1407,
    "end": 1408
  },
  {
    "type": "String",
    "value": "\"none\"",
    "start": 1409,
    "end": 1415
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1415,
    "end": 1416
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1416,
    "end": 1417
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1418,
    "end": 1419
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1420,
    "end": 1421
  },
  {
    "type": "String",
    "value": "\"trimmer\"",
    "start": 1421,
    "end": 1430
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1430,
    "end": 1431
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1432,
    "end": 1433
  },
  {
    "type": "String",
    "value": "\"trimming\"",
    "start": 1433,
    "end": 1443
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1443,
    "end": 1444
  },
  {
    "type": "String",
    "value": "\"edging\"",
    "start": 1445,
    "end": 1453
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1453,
    "end": 1454
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1454,
    "end": 1455
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1455,
    "end": 1456
  },
  {
    "type": "Identifier",
    "value": "i",
    "start": 1457,
    "end": 1458
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1459,
    "end": 1460
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 1461,
    "end": 1462
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1462,
    "end": 1463
  },
  {
    "type": "Identifier",
    "value": "i",
    "start": 1464,
    "end": 1465
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1466,
    "end": 1467
  },
  {
    "type": "Numeric",
    "value": "1",
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
    "type": "Identifier",
    "value": "i",
    "start": 1471,
    "end": 1472
  },
  {
    "type": "Punctuator",
    "value": "++",
    "start": 1472,
    "end": 1474
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1474,
    "end": 1475
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1476,
    "end": 1477
  },
  {
    "type": "Identifier",
    "value": "console",
    "start": 1482,
    "end": 1489
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1489,
    "end": 1490
  },
  {
    "type": "Identifier",
    "value": "log",
    "start": 1490,
    "end": 1493
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1493,
    "end": 1494
  },
  {
    "type": "Identifier",
    "value": "primarySkillA",
    "start": 1494,
    "end": 1507
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1507,
    "end": 1508
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1508,
    "end": 1509
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1510,
    "end": 1511
  },
  {
    "type": "Keyword",
    "value": "for",
    "start": 1513,
    "end": 1516
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1517,
    "end": 1518
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1518,
    "end": 1519
  },
  {
    "type": "Identifier",
    "value": "numberB",
    "start": 1519,
    "end": 1526
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1527,
    "end": 1528
  },
  {
    "type": "Punctuator",
    "value": "-",
    "start": 1529,
    "end": 1530
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 1530,
    "end": 1531
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1531,
    "end": 1532
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1533,
    "end": 1534
  },
  {
    "type": "Identifier",
    "value": "robotA",
    "start": 1535,
    "end": 1541
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1541,
    "end": 1542
  },
  {
    "type": "Identifier",
    "value": "i",
    "start": 1543,
    "end": 1544
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1545,
    "end": 1546
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 1547,
    "end": 1548
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1548,
    "end": 1549
  },
  {
    "type": "Identifier",
    "value": "i",
    "start": 1550,
    "end": 1551
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1552,
    "end": 1553
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 1554,
    "end": 1555
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1555,
    "end": 1556
  },
  {
    "type": "Identifier",
    "value": "i",
    "start": 1557,
    "end": 1558
  },
  {
    "type": "Punctuator",
    "value": "++",
    "start": 1558,
    "end": 1560
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1560,
    "end": 1561
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1562,
    "end": 1563
  },
  {
    "type": "Identifier",
    "value": "console",
    "start": 1568,
    "end": 1575
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1575,
    "end": 1576
  },
  {
    "type": "Identifier",
    "value": "log",
    "start": 1576,
    "end": 1579
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1579,
    "end": 1580
  },
  {
    "type": "Identifier",
    "value": "numberB",
    "start": 1580,
    "end": 1587
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1587,
    "end": 1588
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1588,
    "end": 1589
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1590,
    "end": 1591
  },
  {
    "type": "Keyword",
    "value": "for",
    "start": 1592,
    "end": 1595
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1596,
    "end": 1597
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1597,
    "end": 1598
  },
  {
    "type": "Identifier",
    "value": "numberB",
    "start": 1598,
    "end": 1605
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1606,
    "end": 1607
  },
  {
    "type": "Punctuator",
    "value": "-",
    "start": 1608,
    "end": 1609
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 1609,
    "end": 1610
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1610,
    "end": 1611
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1612,
    "end": 1613
  },
  {
    "type": "Identifier",
    "value": "getRobot",
    "start": 1614,
    "end": 1622
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1622,
    "end": 1623
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1623,
    "end": 1624
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1624,
    "end": 1625
  },
  {
    "type": "Identifier",
    "value": "i",
    "start": 1626,
    "end": 1627
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1628,
    "end": 1629
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 1630,
    "end": 1631
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1631,
    "end": 1632
  },
  {
    "type": "Identifier",
    "value": "i",
    "start": 1633,
    "end": 1634
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1635,
    "end": 1636
  },
  {
    "type": "Numeric",
    "value": "1",
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
    "type": "Identifier",
    "value": "i",
    "start": 1640,
    "end": 1641
  },
  {
    "type": "Punctuator",
    "value": "++",
    "start": 1641,
    "end": 1643
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1643,
    "end": 1644
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1645,
    "end": 1646
  },
  {
    "type": "Identifier",
    "value": "console",
    "start": 1651,
    "end": 1658
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1658,
    "end": 1659
  },
  {
    "type": "Identifier",
    "value": "log",
    "start": 1659,
    "end": 1662
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1662,
    "end": 1663
  },
  {
    "type": "Identifier",
    "value": "numberB",
    "start": 1663,
    "end": 1670
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1670,
    "end": 1671
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1671,
    "end": 1672
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1673,
    "end": 1674
  },
  {
    "type": "Keyword",
    "value": "for",
    "start": 1675,
    "end": 1678
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1679,
    "end": 1680
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1680,
    "end": 1681
  },
  {
    "type": "Identifier",
    "value": "numberB",
    "start": 1681,
    "end": 1688
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1689,
    "end": 1690
  },
  {
    "type": "Punctuator",
    "value": "-",
    "start": 1691,
    "end": 1692
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 1692,
    "end": 1693
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1693,
    "end": 1694
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1695,
    "end": 1696
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1697,
    "end": 1698
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 1698,
    "end": 1699
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1699,
    "end": 1700
  },
  {
    "type": "String",
    "value": "\"trimmer\"",
    "start": 1701,
    "end": 1710
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1710,
    "end": 1711
  },
  {
    "type": "String",
    "value": "\"trimming\"",
    "start": 1712,
    "end": 1722
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1722,
    "end": 1723
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1723,
    "end": 1724
  },
  {
    "type": "Identifier",
    "value": "i",
    "start": 1725,
    "end": 1726
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1727,
    "end": 1728
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 1729,
    "end": 1730
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1730,
    "end": 1731
  },
  {
    "type": "Identifier",
    "value": "i",
    "start": 1732,
    "end": 1733
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1734,
    "end": 1735
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 1736,
    "end": 1737
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1737,
    "end": 1738
  },
  {
    "type": "Identifier",
    "value": "i",
    "start": 1739,
    "end": 1740
  },
  {
    "type": "Punctuator",
    "value": "++",
    "start": 1740,
    "end": 1742
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1742,
    "end": 1743
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1744,
    "end": 1745
  },
  {
    "type": "Identifier",
    "value": "console",
    "start": 1750,
    "end": 1757
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1757,
    "end": 1758
  },
  {
    "type": "Identifier",
    "value": "log",
    "start": 1758,
    "end": 1761
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1761,
    "end": 1762
  },
  {
    "type": "Identifier",
    "value": "numberB",
    "start": 1762,
    "end": 1769
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1769,
    "end": 1770
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1770,
    "end": 1771
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1772,
    "end": 1773
  },
  {
    "type": "Keyword",
    "value": "for",
    "start": 1774,
    "end": 1777
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1778,
    "end": 1779
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1779,
    "end": 1780
  },
  {
    "type": "Identifier",
    "value": "nameB",
    "start": 1780,
    "end": 1785
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1786,
    "end": 1787
  },
  {
    "type": "String",
    "value": "\"name\"",
    "start": 1788,
    "end": 1794
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1794,
    "end": 1795
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1796,
    "end": 1797
  },
  {
    "type": "Identifier",
    "value": "multiRobotA",
    "start": 1798,
    "end": 1809
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1809,
    "end": 1810
  },
  {
    "type": "Identifier",
    "value": "i",
    "start": 1811,
    "end": 1812
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1813,
    "end": 1814
  },
  {
    "type": "Numeric",
    "value": "0",
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
    "type": "Identifier",
    "value": "i",
    "start": 1818,
    "end": 1819
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1820,
    "end": 1821
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 1822,
    "end": 1823
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1823,
    "end": 1824
  },
  {
    "type": "Identifier",
    "value": "i",
    "start": 1825,
    "end": 1826
  },
  {
    "type": "Punctuator",
    "value": "++",
    "start": 1826,
    "end": 1828
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1828,
    "end": 1829
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1830,
    "end": 1831
  },
  {
    "type": "Identifier",
    "value": "console",
    "start": 1836,
    "end": 1843
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1843,
    "end": 1844
  },
  {
    "type": "Identifier",
    "value": "log",
    "start": 1844,
    "end": 1847
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1847,
    "end": 1848
  },
  {
    "type": "Identifier",
    "value": "nameB",
    "start": 1848,
    "end": 1853
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1853,
    "end": 1854
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1854,
    "end": 1855
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1856,
    "end": 1857
  },
  {
    "type": "Keyword",
    "value": "for",
    "start": 1858,
    "end": 1861
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1862,
    "end": 1863
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1863,
    "end": 1864
  },
  {
    "type": "Identifier",
    "value": "nameB",
    "start": 1864,
    "end": 1869
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1870,
    "end": 1871
  },
  {
    "type": "String",
    "value": "\"name\"",
    "start": 1872,
    "end": 1878
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1878,
    "end": 1879
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1880,
    "end": 1881
  },
  {
    "type": "Identifier",
    "value": "getMultiRobot",
    "start": 1882,
    "end": 1895
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1895,
    "end": 1896
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1896,
    "end": 1897
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1897,
    "end": 1898
  },
  {
    "type": "Identifier",
    "value": "i",
    "start": 1899,
    "end": 1900
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1901,
    "end": 1902
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 1903,
    "end": 1904
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1904,
    "end": 1905
  },
  {
    "type": "Identifier",
    "value": "i",
    "start": 1906,
    "end": 1907
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1908,
    "end": 1909
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 1910,
    "end": 1911
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1911,
    "end": 1912
  },
  {
    "type": "Identifier",
    "value": "i",
    "start": 1913,
    "end": 1914
  },
  {
    "type": "Punctuator",
    "value": "++",
    "start": 1914,
    "end": 1916
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1916,
    "end": 1917
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1918,
    "end": 1919
  },
  {
    "type": "Identifier",
    "value": "console",
    "start": 1924,
    "end": 1931
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1931,
    "end": 1932
  },
  {
    "type": "Identifier",
    "value": "log",
    "start": 1932,
    "end": 1935
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1935,
    "end": 1936
  },
  {
    "type": "Identifier",
    "value": "nameB",
    "start": 1936,
    "end": 1941
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1941,
    "end": 1942
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1942,
    "end": 1943
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1944,
    "end": 1945
  },
  {
    "type": "Keyword",
    "value": "for",
    "start": 1946,
    "end": 1949
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1950,
    "end": 1951
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1951,
    "end": 1952
  },
  {
    "type": "Identifier",
    "value": "nameB",
    "start": 1952,
    "end": 1957
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1958,
    "end": 1959
  },
  {
    "type": "String",
    "value": "\"name\"",
    "start": 1960,
    "end": 1966
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1966,
    "end": 1967
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1968,
    "end": 1969
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1970,
    "end": 1971
  },
  {
    "type": "String",
    "value": "\"trimmer\"",
    "start": 1971,
    "end": 1980
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1980,
    "end": 1981
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1982,
    "end": 1983
  },
  {
    "type": "String",
    "value": "\"trimming\"",
    "start": 1983,
    "end": 1993
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1993,
    "end": 1994
  },
  {
    "type": "String",
    "value": "\"edging\"",
    "start": 1995,
    "end": 2003
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 2003,
    "end": 2004
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 2004,
    "end": 2005
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2005,
    "end": 2006
  },
  {
    "type": "Identifier",
    "value": "i",
    "start": 2007,
    "end": 2008
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2009,
    "end": 2010
  },
  {
    "type": "Numeric",
    "value": "0",
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
    "value": "i",
    "start": 2014,
    "end": 2015
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2016,
    "end": 2017
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 2018,
    "end": 2019
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2019,
    "end": 2020
  },
  {
    "type": "Identifier",
    "value": "i",
    "start": 2021,
    "end": 2022
  },
  {
    "type": "Punctuator",
    "value": "++",
    "start": 2022,
    "end": 2024
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2024,
    "end": 2025
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2026,
    "end": 2027
  },
  {
    "type": "Identifier",
    "value": "console",
    "start": 2032,
    "end": 2039
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2039,
    "end": 2040
  },
  {
    "type": "Identifier",
    "value": "log",
    "start": 2040,
    "end": 2043
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2043,
    "end": 2044
  },
  {
    "type": "Identifier",
    "value": "nameB",
    "start": 2044,
    "end": 2049
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2049,
    "end": 2050
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2050,
    "end": 2051
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2052,
    "end": 2053
  },
  {
    "type": "Keyword",
    "value": "for",
    "start": 2055,
    "end": 2058
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2059,
    "end": 2060
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 2060,
    "end": 2061
  },
  {
    "type": "Identifier",
    "value": "numberA2",
    "start": 2061,
    "end": 2069
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2070,
    "end": 2071
  },
  {
    "type": "Punctuator",
    "value": "-",
    "start": 2072,
    "end": 2073
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 2073,
    "end": 2074
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2074,
    "end": 2075
  },
  {
    "type": "Identifier",
    "value": "nameA2",
    "start": 2076,
    "end": 2082
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2083,
    "end": 2084
  },
  {
    "type": "String",
    "value": "\"name\"",
    "start": 2085,
    "end": 2091
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2091,
    "end": 2092
  },
  {
    "type": "Identifier",
    "value": "skillA2",
    "start": 2093,
    "end": 2100
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2101,
    "end": 2102
  },
  {
    "type": "String",
    "value": "\"skill\"",
    "start": 2103,
    "end": 2110
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 2110,
    "end": 2111
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2112,
    "end": 2113
  },
  {
    "type": "Identifier",
    "value": "robotA",
    "start": 2114,
    "end": 2120
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2120,
    "end": 2121
  },
  {
    "type": "Identifier",
    "value": "i",
    "start": 2122,
    "end": 2123
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2124,
    "end": 2125
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 2126,
    "end": 2127
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2127,
    "end": 2128
  },
  {
    "type": "Identifier",
    "value": "i",
    "start": 2129,
    "end": 2130
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2131,
    "end": 2132
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 2133,
    "end": 2134
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2134,
    "end": 2135
  },
  {
    "type": "Identifier",
    "value": "i",
    "start": 2136,
    "end": 2137
  },
  {
    "type": "Punctuator",
    "value": "++",
    "start": 2137,
    "end": 2139
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2139,
    "end": 2140
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2141,
    "end": 2142
  },
  {
    "type": "Identifier",
    "value": "console",
    "start": 2147,
    "end": 2154
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2154,
    "end": 2155
  },
  {
    "type": "Identifier",
    "value": "log",
    "start": 2155,
    "end": 2158
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2158,
    "end": 2159
  },
  {
    "type": "Identifier",
    "value": "nameA2",
    "start": 2159,
    "end": 2165
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2165,
    "end": 2166
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2166,
    "end": 2167
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2168,
    "end": 2169
  },
  {
    "type": "Keyword",
    "value": "for",
    "start": 2170,
    "end": 2173
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2174,
    "end": 2175
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 2175,
    "end": 2176
  },
  {
    "type": "Identifier",
    "value": "numberA2",
    "start": 2176,
    "end": 2184
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2185,
    "end": 2186
  },
  {
    "type": "Punctuator",
    "value": "-",
    "start": 2187,
    "end": 2188
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 2188,
    "end": 2189
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2189,
    "end": 2190
  },
  {
    "type": "Identifier",
    "value": "nameA2",
    "start": 2191,
    "end": 2197
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2198,
    "end": 2199
  },
  {
    "type": "String",
    "value": "\"name\"",
    "start": 2200,
    "end": 2206
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2206,
    "end": 2207
  },
  {
    "type": "Identifier",
    "value": "skillA2",
    "start": 2208,
    "end": 2215
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2216,
    "end": 2217
  },
  {
    "type": "String",
    "value": "\"skill\"",
    "start": 2218,
    "end": 2225
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 2225,
    "end": 2226
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2227,
    "end": 2228
  },
  {
    "type": "Identifier",
    "value": "getRobot",
    "start": 2229,
    "end": 2237
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2237,
    "end": 2238
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2238,
    "end": 2239
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2239,
    "end": 2240
  },
  {
    "type": "Identifier",
    "value": "i",
    "start": 2241,
    "end": 2242
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2243,
    "end": 2244
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 2245,
    "end": 2246
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2246,
    "end": 2247
  },
  {
    "type": "Identifier",
    "value": "i",
    "start": 2248,
    "end": 2249
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2250,
    "end": 2251
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 2252,
    "end": 2253
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2253,
    "end": 2254
  },
  {
    "type": "Identifier",
    "value": "i",
    "start": 2255,
    "end": 2256
  },
  {
    "type": "Punctuator",
    "value": "++",
    "start": 2256,
    "end": 2258
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2258,
    "end": 2259
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2260,
    "end": 2261
  },
  {
    "type": "Identifier",
    "value": "console",
    "start": 2266,
    "end": 2273
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2273,
    "end": 2274
  },
  {
    "type": "Identifier",
    "value": "log",
    "start": 2274,
    "end": 2277
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2277,
    "end": 2278
  },
  {
    "type": "Identifier",
    "value": "nameA2",
    "start": 2278,
    "end": 2284
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2284,
    "end": 2285
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2285,
    "end": 2286
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2287,
    "end": 2288
  },
  {
    "type": "Keyword",
    "value": "for",
    "start": 2289,
    "end": 2292
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2293,
    "end": 2294
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 2294,
    "end": 2295
  },
  {
    "type": "Identifier",
    "value": "numberA2",
    "start": 2295,
    "end": 2303
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2304,
    "end": 2305
  },
  {
    "type": "Punctuator",
    "value": "-",
    "start": 2306,
    "end": 2307
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 2307,
    "end": 2308
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2308,
    "end": 2309
  },
  {
    "type": "Identifier",
    "value": "nameA2",
    "start": 2310,
    "end": 2316
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2317,
    "end": 2318
  },
  {
    "type": "String",
    "value": "\"name\"",
    "start": 2319,
    "end": 2325
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2325,
    "end": 2326
  },
  {
    "type": "Identifier",
    "value": "skillA2",
    "start": 2327,
    "end": 2334
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2335,
    "end": 2336
  },
  {
    "type": "String",
    "value": "\"skill\"",
    "start": 2337,
    "end": 2344
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 2344,
    "end": 2345
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2346,
    "end": 2347
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 2348,
    "end": 2349
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 2349,
    "end": 2350
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2350,
    "end": 2351
  },
  {
    "type": "String",
    "value": "\"trimmer\"",
    "start": 2352,
    "end": 2361
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2361,
    "end": 2362
  },
  {
    "type": "String",
    "value": "\"trimming\"",
    "start": 2363,
    "end": 2373
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 2373,
    "end": 2374
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2374,
    "end": 2375
  },
  {
    "type": "Identifier",
    "value": "i",
    "start": 2376,
    "end": 2377
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2378,
    "end": 2379
  },
  {
    "type": "Numeric",
    "value": "0",
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
    "value": "i",
    "start": 2383,
    "end": 2384
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2385,
    "end": 2386
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 2387,
    "end": 2388
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2388,
    "end": 2389
  },
  {
    "type": "Identifier",
    "value": "i",
    "start": 2390,
    "end": 2391
  },
  {
    "type": "Punctuator",
    "value": "++",
    "start": 2391,
    "end": 2393
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2393,
    "end": 2394
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2395,
    "end": 2396
  },
  {
    "type": "Identifier",
    "value": "console",
    "start": 2401,
    "end": 2408
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2408,
    "end": 2409
  },
  {
    "type": "Identifier",
    "value": "log",
    "start": 2409,
    "end": 2412
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2412,
    "end": 2413
  },
  {
    "type": "Identifier",
    "value": "nameA2",
    "start": 2413,
    "end": 2419
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2419,
    "end": 2420
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2420,
    "end": 2421
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2422,
    "end": 2423
  },
  {
    "type": "Keyword",
    "value": "for",
    "start": 2424,
    "end": 2427
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2428,
    "end": 2429
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 2429,
    "end": 2432
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 2437,
    "end": 2438
  },
  {
    "type": "Identifier",
    "value": "nameMA",
    "start": 2438,
    "end": 2444
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2445,
    "end": 2446
  },
  {
    "type": "String",
    "value": "\"noName\"",
    "start": 2447,
    "end": 2455
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2455,
    "end": 2456
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 2465,
    "end": 2466
  },
  {
    "type": "Identifier",
    "value": "primarySkillA",
    "start": 2479,
    "end": 2492
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2493,
    "end": 2494
  },
  {
    "type": "String",
    "value": "\"primary\"",
    "start": 2495,
    "end": 2504
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2504,
    "end": 2505
  },
  {
    "type": "Identifier",
    "value": "secondarySkillA",
    "start": 2518,
    "end": 2533
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2534,
    "end": 2535
  },
  {
    "type": "String",
    "value": "\"secondary\"",
    "start": 2536,
    "end": 2547
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 2556,
    "end": 2557
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2558,
    "end": 2559
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 2560,
    "end": 2561
  },
  {
    "type": "String",
    "value": "\"none\"",
    "start": 2561,
    "end": 2567
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2567,
    "end": 2568
  },
  {
    "type": "String",
    "value": "\"none\"",
    "start": 2569,
    "end": 2575
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 2575,
    "end": 2576
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 2581,
    "end": 2582
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2583,
    "end": 2584
  },
  {
    "type": "Identifier",
    "value": "multiRobotA",
    "start": 2585,
    "end": 2596
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2596,
    "end": 2597
  },
  {
    "type": "Identifier",
    "value": "i",
    "start": 2598,
    "end": 2599
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2600,
    "end": 2601
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 2602,
    "end": 2603
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2603,
    "end": 2604
  },
  {
    "type": "Identifier",
    "value": "i",
    "start": 2605,
    "end": 2606
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2607,
    "end": 2608
  },
  {
    "type": "Numeric",
    "value": "1",
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
    "type": "Identifier",
    "value": "i",
    "start": 2612,
    "end": 2613
  },
  {
    "type": "Punctuator",
    "value": "++",
    "start": 2613,
    "end": 2615
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2615,
    "end": 2616
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2617,
    "end": 2618
  },
  {
    "type": "Identifier",
    "value": "console",
    "start": 2623,
    "end": 2630
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2630,
    "end": 2631
  },
  {
    "type": "Identifier",
    "value": "log",
    "start": 2631,
    "end": 2634
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2634,
    "end": 2635
  },
  {
    "type": "Identifier",
    "value": "nameMA",
    "start": 2635,
    "end": 2641
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2641,
    "end": 2642
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2642,
    "end": 2643
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2644,
    "end": 2645
  },
  {
    "type": "Keyword",
    "value": "for",
    "start": 2646,
    "end": 2649
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2650,
    "end": 2651
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 2651,
    "end": 2652
  },
  {
    "type": "Identifier",
    "value": "nameMA",
    "start": 2652,
    "end": 2658
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2659,
    "end": 2660
  },
  {
    "type": "String",
    "value": "\"noName\"",
    "start": 2661,
    "end": 2669
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2669,
    "end": 2670
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 2675,
    "end": 2676
  },
  {
    "type": "Identifier",
    "value": "primarySkillA",
    "start": 2685,
    "end": 2698
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2699,
    "end": 2700
  },
  {
    "type": "String",
    "value": "\"primary\"",
    "start": 2701,
    "end": 2710
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2710,
    "end": 2711
  },
  {
    "type": "Identifier",
    "value": "secondarySkillA",
    "start": 2720,
    "end": 2735
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2736,
    "end": 2737
  },
  {
    "type": "String",
    "value": "\"secondary\"",
    "start": 2738,
    "end": 2749
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 2754,
    "end": 2755
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2756,
    "end": 2757
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 2758,
    "end": 2759
  },
  {
    "type": "String",
    "value": "\"none\"",
    "start": 2759,
    "end": 2765
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2765,
    "end": 2766
  },
  {
    "type": "String",
    "value": "\"none\"",
    "start": 2767,
    "end": 2773
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 2773,
    "end": 2774
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 2775,
    "end": 2776
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2777,
    "end": 2778
  },
  {
    "type": "Identifier",
    "value": "getMultiRobot",
    "start": 2779,
    "end": 2792
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2792,
    "end": 2793
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2793,
    "end": 2794
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2794,
    "end": 2795
  },
  {
    "type": "Identifier",
    "value": "i",
    "start": 2796,
    "end": 2797
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2798,
    "end": 2799
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 2800,
    "end": 2801
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2801,
    "end": 2802
  },
  {
    "type": "Identifier",
    "value": "i",
    "start": 2803,
    "end": 2804
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2805,
    "end": 2806
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 2807,
    "end": 2808
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2808,
    "end": 2809
  },
  {
    "type": "Identifier",
    "value": "i",
    "start": 2810,
    "end": 2811
  },
  {
    "type": "Punctuator",
    "value": "++",
    "start": 2811,
    "end": 2813
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2813,
    "end": 2814
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2815,
    "end": 2816
  },
  {
    "type": "Identifier",
    "value": "console",
    "start": 2821,
    "end": 2828
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2828,
    "end": 2829
  },
  {
    "type": "Identifier",
    "value": "log",
    "start": 2829,
    "end": 2832
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2832,
    "end": 2833
  },
  {
    "type": "Identifier",
    "value": "nameMA",
    "start": 2833,
    "end": 2839
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2839,
    "end": 2840
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2840,
    "end": 2841
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2842,
    "end": 2843
  },
  {
    "type": "Keyword",
    "value": "for",
    "start": 2844,
    "end": 2847
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2848,
    "end": 2849
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 2849,
    "end": 2850
  },
  {
    "type": "Identifier",
    "value": "nameMA",
    "start": 2850,
    "end": 2856
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2857,
    "end": 2858
  },
  {
    "type": "String",
    "value": "\"noName\"",
    "start": 2859,
    "end": 2867
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2867,
    "end": 2868
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 2873,
    "end": 2874
  },
  {
    "type": "Identifier",
    "value": "primarySkillA",
    "start": 2883,
    "end": 2896
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2897,
    "end": 2898
  },
  {
    "type": "String",
    "value": "\"primary\"",
    "start": 2899,
    "end": 2908
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2908,
    "end": 2909
  },
  {
    "type": "Identifier",
    "value": "secondarySkillA",
    "start": 2918,
    "end": 2933
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2934,
    "end": 2935
  },
  {
    "type": "String",
    "value": "\"secondary\"",
    "start": 2936,
    "end": 2947
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 2952,
    "end": 2953
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2954,
    "end": 2955
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 2956,
    "end": 2957
  },
  {
    "type": "String",
    "value": "\"none\"",
    "start": 2957,
    "end": 2963
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2963,
    "end": 2964
  },
  {
    "type": "String",
    "value": "\"none\"",
    "start": 2965,
    "end": 2971
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 2971,
    "end": 2972
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 2973,
    "end": 2974
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2975,
    "end": 2976
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 2977,
    "end": 2978
  },
  {
    "type": "String",
    "value": "\"trimmer\"",
    "start": 2978,
    "end": 2987
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2987,
    "end": 2988
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 2989,
    "end": 2990
  },
  {
    "type": "String",
    "value": "\"trimming\"",
    "start": 2990,
    "end": 3000
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3000,
    "end": 3001
  },
  {
    "type": "String",
    "value": "\"edging\"",
    "start": 3002,
    "end": 3010
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 3010,
    "end": 3011
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 3011,
    "end": 3012
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3012,
    "end": 3013
  },
  {
    "type": "Identifier",
    "value": "i",
    "start": 3014,
    "end": 3015
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3016,
    "end": 3017
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 3018,
    "end": 3019
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3019,
    "end": 3020
  },
  {
    "type": "Identifier",
    "value": "i",
    "start": 3021,
    "end": 3022
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 3023,
    "end": 3024
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 3025,
    "end": 3026
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3026,
    "end": 3027
  },
  {
    "type": "Identifier",
    "value": "i",
    "start": 3028,
    "end": 3029
  },
  {
    "type": "Punctuator",
    "value": "++",
    "start": 3029,
    "end": 3031
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3031,
    "end": 3032
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3033,
    "end": 3034
  },
  {
    "type": "Identifier",
    "value": "console",
    "start": 3039,
    "end": 3046
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 3046,
    "end": 3047
  },
  {
    "type": "Identifier",
    "value": "log",
    "start": 3047,
    "end": 3050
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3050,
    "end": 3051
  },
  {
    "type": "Identifier",
    "value": "nameMA",
    "start": 3051,
    "end": 3057
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3057,
    "end": 3058
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3058,
    "end": 3059
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3060,
    "end": 3061
  },
  {
    "type": "Keyword",
    "value": "for",
    "start": 3063,
    "end": 3066
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3067,
    "end": 3068
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 3068,
    "end": 3069
  },
  {
    "type": "Identifier",
    "value": "numberA3",
    "start": 3069,
    "end": 3077
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3078,
    "end": 3079
  },
  {
    "type": "Punctuator",
    "value": "-",
    "start": 3080,
    "end": 3081
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 3081,
    "end": 3082
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3082,
    "end": 3083
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 3084,
    "end": 3087
  },
  {
    "type": "Identifier",
    "value": "robotAInfo",
    "start": 3087,
    "end": 3097
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 3097,
    "end": 3098
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3099,
    "end": 3100
  },
  {
    "type": "Identifier",
    "value": "robotA",
    "start": 3101,
    "end": 3107
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3107,
    "end": 3108
  },
  {
    "type": "Identifier",
    "value": "i",
    "start": 3109,
    "end": 3110
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3111,
    "end": 3112
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 3113,
    "end": 3114
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3114,
    "end": 3115
  },
  {
    "type": "Identifier",
    "value": "i",
    "start": 3116,
    "end": 3117
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 3118,
    "end": 3119
  },
  {
    "type": "Numeric",
    "value": "1",
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
    "type": "Identifier",
    "value": "i",
    "start": 3123,
    "end": 3124
  },
  {
    "type": "Punctuator",
    "value": "++",
    "start": 3124,
    "end": 3126
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3126,
    "end": 3127
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3128,
    "end": 3129
  },
  {
    "type": "Identifier",
    "value": "console",
    "start": 3134,
    "end": 3141
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 3141,
    "end": 3142
  },
  {
    "type": "Identifier",
    "value": "log",
    "start": 3142,
    "end": 3145
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3145,
    "end": 3146
  },
  {
    "type": "Identifier",
    "value": "numberA3",
    "start": 3146,
    "end": 3154
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3154,
    "end": 3155
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3155,
    "end": 3156
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3157,
    "end": 3158
  },
  {
    "type": "Keyword",
    "value": "for",
    "start": 3159,
    "end": 3162
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3163,
    "end": 3164
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 3164,
    "end": 3165
  },
  {
    "type": "Identifier",
    "value": "numberA3",
    "start": 3165,
    "end": 3173
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3174,
    "end": 3175
  },
  {
    "type": "Punctuator",
    "value": "-",
    "start": 3176,
    "end": 3177
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 3177,
    "end": 3178
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3178,
    "end": 3179
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 3180,
    "end": 3183
  },
  {
    "type": "Identifier",
    "value": "robotAInfo",
    "start": 3183,
    "end": 3193
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 3193,
    "end": 3194
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3195,
    "end": 3196
  },
  {
    "type": "Identifier",
    "value": "getRobot",
    "start": 3197,
    "end": 3205
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3205,
    "end": 3206
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3206,
    "end": 3207
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3207,
    "end": 3208
  },
  {
    "type": "Identifier",
    "value": "i",
    "start": 3209,
    "end": 3210
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3211,
    "end": 3212
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 3213,
    "end": 3214
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3214,
    "end": 3215
  },
  {
    "type": "Identifier",
    "value": "i",
    "start": 3216,
    "end": 3217
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 3218,
    "end": 3219
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 3220,
    "end": 3221
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3221,
    "end": 3222
  },
  {
    "type": "Identifier",
    "value": "i",
    "start": 3223,
    "end": 3224
  },
  {
    "type": "Punctuator",
    "value": "++",
    "start": 3224,
    "end": 3226
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3226,
    "end": 3227
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3228,
    "end": 3229
  },
  {
    "type": "Identifier",
    "value": "console",
    "start": 3234,
    "end": 3241
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 3241,
    "end": 3242
  },
  {
    "type": "Identifier",
    "value": "log",
    "start": 3242,
    "end": 3245
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3245,
    "end": 3246
  },
  {
    "type": "Identifier",
    "value": "numberA3",
    "start": 3246,
    "end": 3254
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3254,
    "end": 3255
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3255,
    "end": 3256
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3257,
    "end": 3258
  },
  {
    "type": "Keyword",
    "value": "for",
    "start": 3259,
    "end": 3262
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3263,
    "end": 3264
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 3264,
    "end": 3265
  },
  {
    "type": "Identifier",
    "value": "numberA3",
    "start": 3265,
    "end": 3273
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3274,
    "end": 3275
  },
  {
    "type": "Punctuator",
    "value": "-",
    "start": 3276,
    "end": 3277
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 3277,
    "end": 3278
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3278,
    "end": 3279
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 3280,
    "end": 3283
  },
  {
    "type": "Identifier",
    "value": "robotAInfo",
    "start": 3283,
    "end": 3293
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 3293,
    "end": 3294
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3295,
    "end": 3296
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 3297,
    "end": 3298
  },
  {
    "type": "Identifier",
    "value": "Robot",
    "start": 3298,
    "end": 3303
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 3303,
    "end": 3304
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 3304,
    "end": 3305
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 3305,
    "end": 3306
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3306,
    "end": 3307
  },
  {
    "type": "String",
    "value": "\"trimmer\"",
    "start": 3308,
    "end": 3317
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3317,
    "end": 3318
  },
  {
    "type": "String",
    "value": "\"trimming\"",
    "start": 3319,
    "end": 3329
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 3329,
    "end": 3330
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3330,
    "end": 3331
  },
  {
    "type": "Identifier",
    "value": "i",
    "start": 3332,
    "end": 3333
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3334,
    "end": 3335
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 3336,
    "end": 3337
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3337,
    "end": 3338
  },
  {
    "type": "Identifier",
    "value": "i",
    "start": 3339,
    "end": 3340
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 3341,
    "end": 3342
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 3343,
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
    "value": "i",
    "start": 3346,
    "end": 3347
  },
  {
    "type": "Punctuator",
    "value": "++",
    "start": 3347,
    "end": 3349
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3349,
    "end": 3350
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3351,
    "end": 3352
  },
  {
    "type": "Identifier",
    "value": "console",
    "start": 3357,
    "end": 3364
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 3364,
    "end": 3365
  },
  {
    "type": "Identifier",
    "value": "log",
    "start": 3365,
    "end": 3368
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3368,
    "end": 3369
  },
  {
    "type": "Identifier",
    "value": "numberA3",
    "start": 3369,
    "end": 3377
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3377,
    "end": 3378
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3378,
    "end": 3379
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3380,
    "end": 3381
  }
]
```
