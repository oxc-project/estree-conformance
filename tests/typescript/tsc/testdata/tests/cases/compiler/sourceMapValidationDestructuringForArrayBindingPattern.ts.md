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
                null,
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "nameA",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 435,
                  "end": 440
                }
              ],
              "optional": false,
              "typeAnnotation": null,
              "start": 432,
              "end": 441
            },
            "init": {
              "type": "Identifier",
              "decorators": [],
              "name": "robotA",
              "optional": false,
              "typeAnnotation": null,
              "start": 444,
              "end": 450
            },
            "definite": false,
            "start": 432,
            "end": 450
          },
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "i",
              "optional": false,
              "typeAnnotation": null,
              "start": 452,
              "end": 453
            },
            "init": {
              "type": "Literal",
              "value": 0,
              "raw": "0",
              "start": 456,
              "end": 457
            },
            "definite": false,
            "start": 452,
            "end": 457
          }
        ],
        "declare": false,
        "start": 428,
        "end": 457
      },
      "test": {
        "type": "BinaryExpression",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "i",
          "optional": false,
          "typeAnnotation": null,
          "start": 459,
          "end": 460
        },
        "operator": "<",
        "right": {
          "type": "Literal",
          "value": 1,
          "raw": "1",
          "start": 463,
          "end": 464
        },
        "start": 459,
        "end": 464
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
          "start": 466,
          "end": 467
        },
        "start": 466,
        "end": 469
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
                  "start": 477,
                  "end": 484
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "log",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 485,
                  "end": 488
                },
                "optional": false,
                "computed": false,
                "start": 477,
                "end": 488
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "nameA",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 489,
                  "end": 494
                }
              ],
              "optional": false,
              "start": 477,
              "end": 495
            },
            "directive": null,
            "start": 477,
            "end": 496
          }
        ],
        "start": 471,
        "end": 498
      },
      "start": 423,
      "end": 498
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
                null,
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "nameA",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 511,
                  "end": 516
                }
              ],
              "optional": false,
              "typeAnnotation": null,
              "start": 508,
              "end": 517
            },
            "init": {
              "type": "CallExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "getRobot",
                "optional": false,
                "typeAnnotation": null,
                "start": 520,
                "end": 528
              },
              "typeArguments": null,
              "arguments": [],
              "optional": false,
              "start": 520,
              "end": 530
            },
            "definite": false,
            "start": 508,
            "end": 530
          },
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "i",
              "optional": false,
              "typeAnnotation": null,
              "start": 532,
              "end": 533
            },
            "init": {
              "type": "Literal",
              "value": 0,
              "raw": "0",
              "start": 536,
              "end": 537
            },
            "definite": false,
            "start": 532,
            "end": 537
          }
        ],
        "declare": false,
        "start": 504,
        "end": 537
      },
      "test": {
        "type": "BinaryExpression",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "i",
          "optional": false,
          "typeAnnotation": null,
          "start": 539,
          "end": 540
        },
        "operator": "<",
        "right": {
          "type": "Literal",
          "value": 1,
          "raw": "1",
          "start": 543,
          "end": 544
        },
        "start": 539,
        "end": 544
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
          "start": 546,
          "end": 547
        },
        "start": 546,
        "end": 549
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
                  "start": 557,
                  "end": 564
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "log",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 565,
                  "end": 568
                },
                "optional": false,
                "computed": false,
                "start": 557,
                "end": 568
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "nameA",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 569,
                  "end": 574
                }
              ],
              "optional": false,
              "start": 557,
              "end": 575
            },
            "directive": null,
            "start": 557,
            "end": 576
          }
        ],
        "start": 551,
        "end": 578
      },
      "start": 499,
      "end": 578
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
                null,
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "nameA",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 591,
                  "end": 596
                }
              ],
              "optional": false,
              "typeAnnotation": null,
              "start": 588,
              "end": 597
            },
            "init": {
              "type": "ArrayExpression",
              "elements": [
                {
                  "type": "Literal",
                  "value": 2,
                  "raw": "2",
                  "start": 601,
                  "end": 602
                },
                {
                  "type": "Literal",
                  "value": "trimmer",
                  "raw": "\"trimmer\"",
                  "start": 604,
                  "end": 613
                },
                {
                  "type": "Literal",
                  "value": "trimming",
                  "raw": "\"trimming\"",
                  "start": 615,
                  "end": 625
                }
              ],
              "start": 600,
              "end": 626
            },
            "definite": false,
            "start": 588,
            "end": 626
          },
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "i",
              "optional": false,
              "typeAnnotation": null,
              "start": 628,
              "end": 629
            },
            "init": {
              "type": "Literal",
              "value": 0,
              "raw": "0",
              "start": 632,
              "end": 633
            },
            "definite": false,
            "start": 628,
            "end": 633
          }
        ],
        "declare": false,
        "start": 584,
        "end": 633
      },
      "test": {
        "type": "BinaryExpression",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "i",
          "optional": false,
          "typeAnnotation": null,
          "start": 635,
          "end": 636
        },
        "operator": "<",
        "right": {
          "type": "Literal",
          "value": 1,
          "raw": "1",
          "start": 639,
          "end": 640
        },
        "start": 635,
        "end": 640
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
          "start": 642,
          "end": 643
        },
        "start": 642,
        "end": 645
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
                  "start": 653,
                  "end": 660
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "log",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 661,
                  "end": 664
                },
                "optional": false,
                "computed": false,
                "start": 653,
                "end": 664
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "nameA",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 665,
                  "end": 670
                }
              ],
              "optional": false,
              "start": 653,
              "end": 671
            },
            "directive": null,
            "start": 653,
            "end": 672
          }
        ],
        "start": 647,
        "end": 674
      },
      "start": 579,
      "end": 674
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
                      "start": 688,
                      "end": 701
                    },
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "secondarySkillA",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 703,
                      "end": 718
                    }
                  ],
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 687,
                  "end": 719
                }
              ],
              "optional": false,
              "typeAnnotation": null,
              "start": 684,
              "end": 720
            },
            "init": {
              "type": "Identifier",
              "decorators": [],
              "name": "multiRobotA",
              "optional": false,
              "typeAnnotation": null,
              "start": 723,
              "end": 734
            },
            "definite": false,
            "start": 684,
            "end": 734
          },
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "i",
              "optional": false,
              "typeAnnotation": null,
              "start": 736,
              "end": 737
            },
            "init": {
              "type": "Literal",
              "value": 0,
              "raw": "0",
              "start": 740,
              "end": 741
            },
            "definite": false,
            "start": 736,
            "end": 741
          }
        ],
        "declare": false,
        "start": 680,
        "end": 741
      },
      "test": {
        "type": "BinaryExpression",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "i",
          "optional": false,
          "typeAnnotation": null,
          "start": 743,
          "end": 744
        },
        "operator": "<",
        "right": {
          "type": "Literal",
          "value": 1,
          "raw": "1",
          "start": 747,
          "end": 748
        },
        "start": 743,
        "end": 748
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
          "start": 750,
          "end": 751
        },
        "start": 750,
        "end": 753
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
                  "start": 761,
                  "end": 768
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "log",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 769,
                  "end": 772
                },
                "optional": false,
                "computed": false,
                "start": 761,
                "end": 772
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "primarySkillA",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 773,
                  "end": 786
                }
              ],
              "optional": false,
              "start": 761,
              "end": 787
            },
            "directive": null,
            "start": 761,
            "end": 788
          }
        ],
        "start": 755,
        "end": 790
      },
      "start": 675,
      "end": 790
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
                      "start": 804,
                      "end": 817
                    },
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "secondarySkillA",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 819,
                      "end": 834
                    }
                  ],
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 803,
                  "end": 835
                }
              ],
              "optional": false,
              "typeAnnotation": null,
              "start": 800,
              "end": 836
            },
            "init": {
              "type": "CallExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "getMultiRobot",
                "optional": false,
                "typeAnnotation": null,
                "start": 839,
                "end": 852
              },
              "typeArguments": null,
              "arguments": [],
              "optional": false,
              "start": 839,
              "end": 854
            },
            "definite": false,
            "start": 800,
            "end": 854
          },
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "i",
              "optional": false,
              "typeAnnotation": null,
              "start": 856,
              "end": 857
            },
            "init": {
              "type": "Literal",
              "value": 0,
              "raw": "0",
              "start": 860,
              "end": 861
            },
            "definite": false,
            "start": 856,
            "end": 861
          }
        ],
        "declare": false,
        "start": 796,
        "end": 861
      },
      "test": {
        "type": "BinaryExpression",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "i",
          "optional": false,
          "typeAnnotation": null,
          "start": 863,
          "end": 864
        },
        "operator": "<",
        "right": {
          "type": "Literal",
          "value": 1,
          "raw": "1",
          "start": 867,
          "end": 868
        },
        "start": 863,
        "end": 868
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
          "start": 870,
          "end": 871
        },
        "start": 870,
        "end": 873
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
                  "start": 881,
                  "end": 888
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "log",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 889,
                  "end": 892
                },
                "optional": false,
                "computed": false,
                "start": 881,
                "end": 892
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "primarySkillA",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 893,
                  "end": 906
                }
              ],
              "optional": false,
              "start": 881,
              "end": 907
            },
            "directive": null,
            "start": 881,
            "end": 908
          }
        ],
        "start": 875,
        "end": 910
      },
      "start": 791,
      "end": 910
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
                      "start": 924,
                      "end": 937
                    },
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "secondarySkillA",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 939,
                      "end": 954
                    }
                  ],
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 923,
                  "end": 955
                }
              ],
              "optional": false,
              "typeAnnotation": null,
              "start": 920,
              "end": 956
            },
            "init": {
              "type": "ArrayExpression",
              "elements": [
                {
                  "type": "Literal",
                  "value": "trimmer",
                  "raw": "\"trimmer\"",
                  "start": 960,
                  "end": 969
                },
                {
                  "type": "ArrayExpression",
                  "elements": [
                    {
                      "type": "Literal",
                      "value": "trimming",
                      "raw": "\"trimming\"",
                      "start": 972,
                      "end": 982
                    },
                    {
                      "type": "Literal",
                      "value": "edging",
                      "raw": "\"edging\"",
                      "start": 984,
                      "end": 992
                    }
                  ],
                  "start": 971,
                  "end": 993
                }
              ],
              "start": 959,
              "end": 994
            },
            "definite": false,
            "start": 920,
            "end": 994
          },
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "i",
              "optional": false,
              "typeAnnotation": null,
              "start": 996,
              "end": 997
            },
            "init": {
              "type": "Literal",
              "value": 0,
              "raw": "0",
              "start": 1000,
              "end": 1001
            },
            "definite": false,
            "start": 996,
            "end": 1001
          }
        ],
        "declare": false,
        "start": 916,
        "end": 1001
      },
      "test": {
        "type": "BinaryExpression",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "i",
          "optional": false,
          "typeAnnotation": null,
          "start": 1003,
          "end": 1004
        },
        "operator": "<",
        "right": {
          "type": "Literal",
          "value": 1,
          "raw": "1",
          "start": 1007,
          "end": 1008
        },
        "start": 1003,
        "end": 1008
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
          "start": 1010,
          "end": 1011
        },
        "start": 1010,
        "end": 1013
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
                  "start": 1021,
                  "end": 1028
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "log",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1029,
                  "end": 1032
                },
                "optional": false,
                "computed": false,
                "start": 1021,
                "end": 1032
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "primarySkillA",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1033,
                  "end": 1046
                }
              ],
              "optional": false,
              "start": 1021,
              "end": 1047
            },
            "directive": null,
            "start": 1021,
            "end": 1048
          }
        ],
        "start": 1015,
        "end": 1050
      },
      "start": 911,
      "end": 1050
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
                  "type": "Identifier",
                  "decorators": [],
                  "name": "numberB",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1062,
                  "end": 1069
                }
              ],
              "optional": false,
              "typeAnnotation": null,
              "start": 1061,
              "end": 1070
            },
            "init": {
              "type": "Identifier",
              "decorators": [],
              "name": "robotA",
              "optional": false,
              "typeAnnotation": null,
              "start": 1073,
              "end": 1079
            },
            "definite": false,
            "start": 1061,
            "end": 1079
          },
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "i",
              "optional": false,
              "typeAnnotation": null,
              "start": 1081,
              "end": 1082
            },
            "init": {
              "type": "Literal",
              "value": 0,
              "raw": "0",
              "start": 1085,
              "end": 1086
            },
            "definite": false,
            "start": 1081,
            "end": 1086
          }
        ],
        "declare": false,
        "start": 1057,
        "end": 1086
      },
      "test": {
        "type": "BinaryExpression",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "i",
          "optional": false,
          "typeAnnotation": null,
          "start": 1088,
          "end": 1089
        },
        "operator": "<",
        "right": {
          "type": "Literal",
          "value": 1,
          "raw": "1",
          "start": 1092,
          "end": 1093
        },
        "start": 1088,
        "end": 1093
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
          "start": 1095,
          "end": 1096
        },
        "start": 1095,
        "end": 1098
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
                  "start": 1106,
                  "end": 1113
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "log",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1114,
                  "end": 1117
                },
                "optional": false,
                "computed": false,
                "start": 1106,
                "end": 1117
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "numberB",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1118,
                  "end": 1125
                }
              ],
              "optional": false,
              "start": 1106,
              "end": 1126
            },
            "directive": null,
            "start": 1106,
            "end": 1127
          }
        ],
        "start": 1100,
        "end": 1129
      },
      "start": 1052,
      "end": 1129
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
                  "type": "Identifier",
                  "decorators": [],
                  "name": "numberB",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1140,
                  "end": 1147
                }
              ],
              "optional": false,
              "typeAnnotation": null,
              "start": 1139,
              "end": 1148
            },
            "init": {
              "type": "CallExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "getRobot",
                "optional": false,
                "typeAnnotation": null,
                "start": 1151,
                "end": 1159
              },
              "typeArguments": null,
              "arguments": [],
              "optional": false,
              "start": 1151,
              "end": 1161
            },
            "definite": false,
            "start": 1139,
            "end": 1161
          },
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "i",
              "optional": false,
              "typeAnnotation": null,
              "start": 1163,
              "end": 1164
            },
            "init": {
              "type": "Literal",
              "value": 0,
              "raw": "0",
              "start": 1167,
              "end": 1168
            },
            "definite": false,
            "start": 1163,
            "end": 1168
          }
        ],
        "declare": false,
        "start": 1135,
        "end": 1168
      },
      "test": {
        "type": "BinaryExpression",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "i",
          "optional": false,
          "typeAnnotation": null,
          "start": 1170,
          "end": 1171
        },
        "operator": "<",
        "right": {
          "type": "Literal",
          "value": 1,
          "raw": "1",
          "start": 1174,
          "end": 1175
        },
        "start": 1170,
        "end": 1175
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
          "start": 1177,
          "end": 1178
        },
        "start": 1177,
        "end": 1180
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
                  "start": 1188,
                  "end": 1195
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "log",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1196,
                  "end": 1199
                },
                "optional": false,
                "computed": false,
                "start": 1188,
                "end": 1199
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "numberB",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1200,
                  "end": 1207
                }
              ],
              "optional": false,
              "start": 1188,
              "end": 1208
            },
            "directive": null,
            "start": 1188,
            "end": 1209
          }
        ],
        "start": 1182,
        "end": 1211
      },
      "start": 1130,
      "end": 1211
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
                  "type": "Identifier",
                  "decorators": [],
                  "name": "numberB",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1222,
                  "end": 1229
                }
              ],
              "optional": false,
              "typeAnnotation": null,
              "start": 1221,
              "end": 1230
            },
            "init": {
              "type": "ArrayExpression",
              "elements": [
                {
                  "type": "Literal",
                  "value": 2,
                  "raw": "2",
                  "start": 1234,
                  "end": 1235
                },
                {
                  "type": "Literal",
                  "value": "trimmer",
                  "raw": "\"trimmer\"",
                  "start": 1237,
                  "end": 1246
                },
                {
                  "type": "Literal",
                  "value": "trimming",
                  "raw": "\"trimming\"",
                  "start": 1248,
                  "end": 1258
                }
              ],
              "start": 1233,
              "end": 1259
            },
            "definite": false,
            "start": 1221,
            "end": 1259
          },
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "i",
              "optional": false,
              "typeAnnotation": null,
              "start": 1261,
              "end": 1262
            },
            "init": {
              "type": "Literal",
              "value": 0,
              "raw": "0",
              "start": 1265,
              "end": 1266
            },
            "definite": false,
            "start": 1261,
            "end": 1266
          }
        ],
        "declare": false,
        "start": 1217,
        "end": 1266
      },
      "test": {
        "type": "BinaryExpression",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "i",
          "optional": false,
          "typeAnnotation": null,
          "start": 1268,
          "end": 1269
        },
        "operator": "<",
        "right": {
          "type": "Literal",
          "value": 1,
          "raw": "1",
          "start": 1272,
          "end": 1273
        },
        "start": 1268,
        "end": 1273
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
          "start": 1275,
          "end": 1276
        },
        "start": 1275,
        "end": 1278
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
                  "start": 1286,
                  "end": 1293
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "log",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1294,
                  "end": 1297
                },
                "optional": false,
                "computed": false,
                "start": 1286,
                "end": 1297
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "numberB",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1298,
                  "end": 1305
                }
              ],
              "optional": false,
              "start": 1286,
              "end": 1306
            },
            "directive": null,
            "start": 1286,
            "end": 1307
          }
        ],
        "start": 1280,
        "end": 1309
      },
      "start": 1212,
      "end": 1309
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
                  "type": "Identifier",
                  "decorators": [],
                  "name": "nameB",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1320,
                  "end": 1325
                }
              ],
              "optional": false,
              "typeAnnotation": null,
              "start": 1319,
              "end": 1326
            },
            "init": {
              "type": "Identifier",
              "decorators": [],
              "name": "multiRobotA",
              "optional": false,
              "typeAnnotation": null,
              "start": 1329,
              "end": 1340
            },
            "definite": false,
            "start": 1319,
            "end": 1340
          },
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "i",
              "optional": false,
              "typeAnnotation": null,
              "start": 1342,
              "end": 1343
            },
            "init": {
              "type": "Literal",
              "value": 0,
              "raw": "0",
              "start": 1346,
              "end": 1347
            },
            "definite": false,
            "start": 1342,
            "end": 1347
          }
        ],
        "declare": false,
        "start": 1315,
        "end": 1347
      },
      "test": {
        "type": "BinaryExpression",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "i",
          "optional": false,
          "typeAnnotation": null,
          "start": 1349,
          "end": 1350
        },
        "operator": "<",
        "right": {
          "type": "Literal",
          "value": 1,
          "raw": "1",
          "start": 1353,
          "end": 1354
        },
        "start": 1349,
        "end": 1354
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
          "start": 1356,
          "end": 1357
        },
        "start": 1356,
        "end": 1359
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
                  "start": 1367,
                  "end": 1374
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "log",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1375,
                  "end": 1378
                },
                "optional": false,
                "computed": false,
                "start": 1367,
                "end": 1378
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "nameB",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1379,
                  "end": 1384
                }
              ],
              "optional": false,
              "start": 1367,
              "end": 1385
            },
            "directive": null,
            "start": 1367,
            "end": 1386
          }
        ],
        "start": 1361,
        "end": 1388
      },
      "start": 1310,
      "end": 1388
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
                  "type": "Identifier",
                  "decorators": [],
                  "name": "nameB",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1399,
                  "end": 1404
                }
              ],
              "optional": false,
              "typeAnnotation": null,
              "start": 1398,
              "end": 1405
            },
            "init": {
              "type": "CallExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "getMultiRobot",
                "optional": false,
                "typeAnnotation": null,
                "start": 1408,
                "end": 1421
              },
              "typeArguments": null,
              "arguments": [],
              "optional": false,
              "start": 1408,
              "end": 1423
            },
            "definite": false,
            "start": 1398,
            "end": 1423
          },
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "i",
              "optional": false,
              "typeAnnotation": null,
              "start": 1425,
              "end": 1426
            },
            "init": {
              "type": "Literal",
              "value": 0,
              "raw": "0",
              "start": 1429,
              "end": 1430
            },
            "definite": false,
            "start": 1425,
            "end": 1430
          }
        ],
        "declare": false,
        "start": 1394,
        "end": 1430
      },
      "test": {
        "type": "BinaryExpression",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "i",
          "optional": false,
          "typeAnnotation": null,
          "start": 1432,
          "end": 1433
        },
        "operator": "<",
        "right": {
          "type": "Literal",
          "value": 1,
          "raw": "1",
          "start": 1436,
          "end": 1437
        },
        "start": 1432,
        "end": 1437
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
          "start": 1439,
          "end": 1440
        },
        "start": 1439,
        "end": 1442
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
                  "start": 1450,
                  "end": 1457
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "log",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1458,
                  "end": 1461
                },
                "optional": false,
                "computed": false,
                "start": 1450,
                "end": 1461
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "nameB",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1462,
                  "end": 1467
                }
              ],
              "optional": false,
              "start": 1450,
              "end": 1468
            },
            "directive": null,
            "start": 1450,
            "end": 1469
          }
        ],
        "start": 1444,
        "end": 1471
      },
      "start": 1389,
      "end": 1471
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
                  "type": "Identifier",
                  "decorators": [],
                  "name": "nameB",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1482,
                  "end": 1487
                }
              ],
              "optional": false,
              "typeAnnotation": null,
              "start": 1481,
              "end": 1488
            },
            "init": {
              "type": "ArrayExpression",
              "elements": [
                {
                  "type": "Literal",
                  "value": "trimmer",
                  "raw": "\"trimmer\"",
                  "start": 1492,
                  "end": 1501
                },
                {
                  "type": "ArrayExpression",
                  "elements": [
                    {
                      "type": "Literal",
                      "value": "trimming",
                      "raw": "\"trimming\"",
                      "start": 1504,
                      "end": 1514
                    },
                    {
                      "type": "Literal",
                      "value": "edging",
                      "raw": "\"edging\"",
                      "start": 1516,
                      "end": 1524
                    }
                  ],
                  "start": 1503,
                  "end": 1525
                }
              ],
              "start": 1491,
              "end": 1526
            },
            "definite": false,
            "start": 1481,
            "end": 1526
          },
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "i",
              "optional": false,
              "typeAnnotation": null,
              "start": 1528,
              "end": 1529
            },
            "init": {
              "type": "Literal",
              "value": 0,
              "raw": "0",
              "start": 1532,
              "end": 1533
            },
            "definite": false,
            "start": 1528,
            "end": 1533
          }
        ],
        "declare": false,
        "start": 1477,
        "end": 1533
      },
      "test": {
        "type": "BinaryExpression",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "i",
          "optional": false,
          "typeAnnotation": null,
          "start": 1535,
          "end": 1536
        },
        "operator": "<",
        "right": {
          "type": "Literal",
          "value": 1,
          "raw": "1",
          "start": 1539,
          "end": 1540
        },
        "start": 1535,
        "end": 1540
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
          "start": 1542,
          "end": 1543
        },
        "start": 1542,
        "end": 1545
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
                  "start": 1553,
                  "end": 1560
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "log",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1561,
                  "end": 1564
                },
                "optional": false,
                "computed": false,
                "start": 1553,
                "end": 1564
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "nameB",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1565,
                  "end": 1570
                }
              ],
              "optional": false,
              "start": 1553,
              "end": 1571
            },
            "directive": null,
            "start": 1553,
            "end": 1572
          }
        ],
        "start": 1547,
        "end": 1574
      },
      "start": 1472,
      "end": 1574
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
                  "type": "Identifier",
                  "decorators": [],
                  "name": "numberA2",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1586,
                  "end": 1594
                },
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "nameA2",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1596,
                  "end": 1602
                },
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "skillA2",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1604,
                  "end": 1611
                }
              ],
              "optional": false,
              "typeAnnotation": null,
              "start": 1585,
              "end": 1612
            },
            "init": {
              "type": "Identifier",
              "decorators": [],
              "name": "robotA",
              "optional": false,
              "typeAnnotation": null,
              "start": 1615,
              "end": 1621
            },
            "definite": false,
            "start": 1585,
            "end": 1621
          },
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "i",
              "optional": false,
              "typeAnnotation": null,
              "start": 1623,
              "end": 1624
            },
            "init": {
              "type": "Literal",
              "value": 0,
              "raw": "0",
              "start": 1627,
              "end": 1628
            },
            "definite": false,
            "start": 1623,
            "end": 1628
          }
        ],
        "declare": false,
        "start": 1581,
        "end": 1628
      },
      "test": {
        "type": "BinaryExpression",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "i",
          "optional": false,
          "typeAnnotation": null,
          "start": 1630,
          "end": 1631
        },
        "operator": "<",
        "right": {
          "type": "Literal",
          "value": 1,
          "raw": "1",
          "start": 1634,
          "end": 1635
        },
        "start": 1630,
        "end": 1635
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
          "start": 1637,
          "end": 1638
        },
        "start": 1637,
        "end": 1640
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
                  "start": 1648,
                  "end": 1655
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "log",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1656,
                  "end": 1659
                },
                "optional": false,
                "computed": false,
                "start": 1648,
                "end": 1659
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "nameA2",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1660,
                  "end": 1666
                }
              ],
              "optional": false,
              "start": 1648,
              "end": 1667
            },
            "directive": null,
            "start": 1648,
            "end": 1668
          }
        ],
        "start": 1642,
        "end": 1670
      },
      "start": 1576,
      "end": 1670
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
                  "type": "Identifier",
                  "decorators": [],
                  "name": "numberA2",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1681,
                  "end": 1689
                },
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "nameA2",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1691,
                  "end": 1697
                },
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "skillA2",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1699,
                  "end": 1706
                }
              ],
              "optional": false,
              "typeAnnotation": null,
              "start": 1680,
              "end": 1707
            },
            "init": {
              "type": "CallExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "getRobot",
                "optional": false,
                "typeAnnotation": null,
                "start": 1710,
                "end": 1718
              },
              "typeArguments": null,
              "arguments": [],
              "optional": false,
              "start": 1710,
              "end": 1720
            },
            "definite": false,
            "start": 1680,
            "end": 1720
          },
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "i",
              "optional": false,
              "typeAnnotation": null,
              "start": 1722,
              "end": 1723
            },
            "init": {
              "type": "Literal",
              "value": 0,
              "raw": "0",
              "start": 1726,
              "end": 1727
            },
            "definite": false,
            "start": 1722,
            "end": 1727
          }
        ],
        "declare": false,
        "start": 1676,
        "end": 1727
      },
      "test": {
        "type": "BinaryExpression",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "i",
          "optional": false,
          "typeAnnotation": null,
          "start": 1729,
          "end": 1730
        },
        "operator": "<",
        "right": {
          "type": "Literal",
          "value": 1,
          "raw": "1",
          "start": 1733,
          "end": 1734
        },
        "start": 1729,
        "end": 1734
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
          "start": 1736,
          "end": 1737
        },
        "start": 1736,
        "end": 1739
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
                  "start": 1747,
                  "end": 1754
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "log",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1755,
                  "end": 1758
                },
                "optional": false,
                "computed": false,
                "start": 1747,
                "end": 1758
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "nameA2",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1759,
                  "end": 1765
                }
              ],
              "optional": false,
              "start": 1747,
              "end": 1766
            },
            "directive": null,
            "start": 1747,
            "end": 1767
          }
        ],
        "start": 1741,
        "end": 1769
      },
      "start": 1671,
      "end": 1769
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
                  "type": "Identifier",
                  "decorators": [],
                  "name": "numberA2",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1780,
                  "end": 1788
                },
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "nameA2",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1790,
                  "end": 1796
                },
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "skillA2",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1798,
                  "end": 1805
                }
              ],
              "optional": false,
              "typeAnnotation": null,
              "start": 1779,
              "end": 1806
            },
            "init": {
              "type": "ArrayExpression",
              "elements": [
                {
                  "type": "Literal",
                  "value": 2,
                  "raw": "2",
                  "start": 1810,
                  "end": 1811
                },
                {
                  "type": "Literal",
                  "value": "trimmer",
                  "raw": "\"trimmer\"",
                  "start": 1813,
                  "end": 1822
                },
                {
                  "type": "Literal",
                  "value": "trimming",
                  "raw": "\"trimming\"",
                  "start": 1824,
                  "end": 1834
                }
              ],
              "start": 1809,
              "end": 1835
            },
            "definite": false,
            "start": 1779,
            "end": 1835
          },
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "i",
              "optional": false,
              "typeAnnotation": null,
              "start": 1837,
              "end": 1838
            },
            "init": {
              "type": "Literal",
              "value": 0,
              "raw": "0",
              "start": 1841,
              "end": 1842
            },
            "definite": false,
            "start": 1837,
            "end": 1842
          }
        ],
        "declare": false,
        "start": 1775,
        "end": 1842
      },
      "test": {
        "type": "BinaryExpression",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "i",
          "optional": false,
          "typeAnnotation": null,
          "start": 1844,
          "end": 1845
        },
        "operator": "<",
        "right": {
          "type": "Literal",
          "value": 1,
          "raw": "1",
          "start": 1848,
          "end": 1849
        },
        "start": 1844,
        "end": 1849
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
          "start": 1851,
          "end": 1852
        },
        "start": 1851,
        "end": 1854
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
                  "start": 1862,
                  "end": 1869
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "log",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1870,
                  "end": 1873
                },
                "optional": false,
                "computed": false,
                "start": 1862,
                "end": 1873
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "nameA2",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1874,
                  "end": 1880
                }
              ],
              "optional": false,
              "start": 1862,
              "end": 1881
            },
            "directive": null,
            "start": 1862,
            "end": 1882
          }
        ],
        "start": 1856,
        "end": 1884
      },
      "start": 1770,
      "end": 1884
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
                  "type": "Identifier",
                  "decorators": [],
                  "name": "nameMA",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1895,
                  "end": 1901
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
                      "start": 1904,
                      "end": 1917
                    },
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "secondarySkillA",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1919,
                      "end": 1934
                    }
                  ],
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1903,
                  "end": 1935
                }
              ],
              "optional": false,
              "typeAnnotation": null,
              "start": 1894,
              "end": 1936
            },
            "init": {
              "type": "Identifier",
              "decorators": [],
              "name": "multiRobotA",
              "optional": false,
              "typeAnnotation": null,
              "start": 1939,
              "end": 1950
            },
            "definite": false,
            "start": 1894,
            "end": 1950
          },
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "i",
              "optional": false,
              "typeAnnotation": null,
              "start": 1952,
              "end": 1953
            },
            "init": {
              "type": "Literal",
              "value": 0,
              "raw": "0",
              "start": 1956,
              "end": 1957
            },
            "definite": false,
            "start": 1952,
            "end": 1957
          }
        ],
        "declare": false,
        "start": 1890,
        "end": 1957
      },
      "test": {
        "type": "BinaryExpression",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "i",
          "optional": false,
          "typeAnnotation": null,
          "start": 1959,
          "end": 1960
        },
        "operator": "<",
        "right": {
          "type": "Literal",
          "value": 1,
          "raw": "1",
          "start": 1963,
          "end": 1964
        },
        "start": 1959,
        "end": 1964
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
          "start": 1966,
          "end": 1967
        },
        "start": 1966,
        "end": 1969
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
                  "start": 1977,
                  "end": 1984
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "log",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1985,
                  "end": 1988
                },
                "optional": false,
                "computed": false,
                "start": 1977,
                "end": 1988
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "nameMA",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1989,
                  "end": 1995
                }
              ],
              "optional": false,
              "start": 1977,
              "end": 1996
            },
            "directive": null,
            "start": 1977,
            "end": 1997
          }
        ],
        "start": 1971,
        "end": 1999
      },
      "start": 1885,
      "end": 1999
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
                  "type": "Identifier",
                  "decorators": [],
                  "name": "nameMA",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2010,
                  "end": 2016
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
                      "start": 2019,
                      "end": 2032
                    },
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "secondarySkillA",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2034,
                      "end": 2049
                    }
                  ],
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2018,
                  "end": 2050
                }
              ],
              "optional": false,
              "typeAnnotation": null,
              "start": 2009,
              "end": 2051
            },
            "init": {
              "type": "CallExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "getMultiRobot",
                "optional": false,
                "typeAnnotation": null,
                "start": 2054,
                "end": 2067
              },
              "typeArguments": null,
              "arguments": [],
              "optional": false,
              "start": 2054,
              "end": 2069
            },
            "definite": false,
            "start": 2009,
            "end": 2069
          },
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "i",
              "optional": false,
              "typeAnnotation": null,
              "start": 2071,
              "end": 2072
            },
            "init": {
              "type": "Literal",
              "value": 0,
              "raw": "0",
              "start": 2075,
              "end": 2076
            },
            "definite": false,
            "start": 2071,
            "end": 2076
          }
        ],
        "declare": false,
        "start": 2005,
        "end": 2076
      },
      "test": {
        "type": "BinaryExpression",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "i",
          "optional": false,
          "typeAnnotation": null,
          "start": 2078,
          "end": 2079
        },
        "operator": "<",
        "right": {
          "type": "Literal",
          "value": 1,
          "raw": "1",
          "start": 2082,
          "end": 2083
        },
        "start": 2078,
        "end": 2083
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
          "start": 2085,
          "end": 2086
        },
        "start": 2085,
        "end": 2088
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
                  "start": 2096,
                  "end": 2103
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "log",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2104,
                  "end": 2107
                },
                "optional": false,
                "computed": false,
                "start": 2096,
                "end": 2107
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "nameMA",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2108,
                  "end": 2114
                }
              ],
              "optional": false,
              "start": 2096,
              "end": 2115
            },
            "directive": null,
            "start": 2096,
            "end": 2116
          }
        ],
        "start": 2090,
        "end": 2118
      },
      "start": 2000,
      "end": 2118
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
                  "type": "Identifier",
                  "decorators": [],
                  "name": "nameMA",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2129,
                  "end": 2135
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
                      "start": 2138,
                      "end": 2151
                    },
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "secondarySkillA",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2153,
                      "end": 2168
                    }
                  ],
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2137,
                  "end": 2169
                }
              ],
              "optional": false,
              "typeAnnotation": null,
              "start": 2128,
              "end": 2170
            },
            "init": {
              "type": "ArrayExpression",
              "elements": [
                {
                  "type": "Literal",
                  "value": "trimmer",
                  "raw": "\"trimmer\"",
                  "start": 2174,
                  "end": 2183
                },
                {
                  "type": "ArrayExpression",
                  "elements": [
                    {
                      "type": "Literal",
                      "value": "trimming",
                      "raw": "\"trimming\"",
                      "start": 2186,
                      "end": 2196
                    },
                    {
                      "type": "Literal",
                      "value": "edging",
                      "raw": "\"edging\"",
                      "start": 2198,
                      "end": 2206
                    }
                  ],
                  "start": 2185,
                  "end": 2207
                }
              ],
              "start": 2173,
              "end": 2208
            },
            "definite": false,
            "start": 2128,
            "end": 2208
          },
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "i",
              "optional": false,
              "typeAnnotation": null,
              "start": 2210,
              "end": 2211
            },
            "init": {
              "type": "Literal",
              "value": 0,
              "raw": "0",
              "start": 2214,
              "end": 2215
            },
            "definite": false,
            "start": 2210,
            "end": 2215
          }
        ],
        "declare": false,
        "start": 2124,
        "end": 2215
      },
      "test": {
        "type": "BinaryExpression",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "i",
          "optional": false,
          "typeAnnotation": null,
          "start": 2217,
          "end": 2218
        },
        "operator": "<",
        "right": {
          "type": "Literal",
          "value": 1,
          "raw": "1",
          "start": 2221,
          "end": 2222
        },
        "start": 2217,
        "end": 2222
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
          "start": 2224,
          "end": 2225
        },
        "start": 2224,
        "end": 2227
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
                  "start": 2235,
                  "end": 2242
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "log",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2243,
                  "end": 2246
                },
                "optional": false,
                "computed": false,
                "start": 2235,
                "end": 2246
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "nameMA",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2247,
                  "end": 2253
                }
              ],
              "optional": false,
              "start": 2235,
              "end": 2254
            },
            "directive": null,
            "start": 2235,
            "end": 2255
          }
        ],
        "start": 2229,
        "end": 2257
      },
      "start": 2119,
      "end": 2257
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
                  "type": "Identifier",
                  "decorators": [],
                  "name": "numberA3",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2269,
                  "end": 2277
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
                    "start": 2282,
                    "end": 2292
                  },
                  "optional": false,
                  "typeAnnotation": null,
                  "value": null,
                  "start": 2279,
                  "end": 2292
                }
              ],
              "optional": false,
              "typeAnnotation": null,
              "start": 2268,
              "end": 2293
            },
            "init": {
              "type": "Identifier",
              "decorators": [],
              "name": "robotA",
              "optional": false,
              "typeAnnotation": null,
              "start": 2296,
              "end": 2302
            },
            "definite": false,
            "start": 2268,
            "end": 2302
          },
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "i",
              "optional": false,
              "typeAnnotation": null,
              "start": 2304,
              "end": 2305
            },
            "init": {
              "type": "Literal",
              "value": 0,
              "raw": "0",
              "start": 2308,
              "end": 2309
            },
            "definite": false,
            "start": 2304,
            "end": 2309
          }
        ],
        "declare": false,
        "start": 2264,
        "end": 2309
      },
      "test": {
        "type": "BinaryExpression",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "i",
          "optional": false,
          "typeAnnotation": null,
          "start": 2311,
          "end": 2312
        },
        "operator": "<",
        "right": {
          "type": "Literal",
          "value": 1,
          "raw": "1",
          "start": 2315,
          "end": 2316
        },
        "start": 2311,
        "end": 2316
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
          "start": 2318,
          "end": 2319
        },
        "start": 2318,
        "end": 2321
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
                  "start": 2329,
                  "end": 2336
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "log",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2337,
                  "end": 2340
                },
                "optional": false,
                "computed": false,
                "start": 2329,
                "end": 2340
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "numberA3",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2341,
                  "end": 2349
                }
              ],
              "optional": false,
              "start": 2329,
              "end": 2350
            },
            "directive": null,
            "start": 2329,
            "end": 2351
          }
        ],
        "start": 2323,
        "end": 2353
      },
      "start": 2259,
      "end": 2353
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
                  "type": "Identifier",
                  "decorators": [],
                  "name": "numberA3",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2364,
                  "end": 2372
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
                    "start": 2377,
                    "end": 2387
                  },
                  "optional": false,
                  "typeAnnotation": null,
                  "value": null,
                  "start": 2374,
                  "end": 2387
                }
              ],
              "optional": false,
              "typeAnnotation": null,
              "start": 2363,
              "end": 2388
            },
            "init": {
              "type": "CallExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "getRobot",
                "optional": false,
                "typeAnnotation": null,
                "start": 2391,
                "end": 2399
              },
              "typeArguments": null,
              "arguments": [],
              "optional": false,
              "start": 2391,
              "end": 2401
            },
            "definite": false,
            "start": 2363,
            "end": 2401
          },
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "i",
              "optional": false,
              "typeAnnotation": null,
              "start": 2403,
              "end": 2404
            },
            "init": {
              "type": "Literal",
              "value": 0,
              "raw": "0",
              "start": 2407,
              "end": 2408
            },
            "definite": false,
            "start": 2403,
            "end": 2408
          }
        ],
        "declare": false,
        "start": 2359,
        "end": 2408
      },
      "test": {
        "type": "BinaryExpression",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "i",
          "optional": false,
          "typeAnnotation": null,
          "start": 2410,
          "end": 2411
        },
        "operator": "<",
        "right": {
          "type": "Literal",
          "value": 1,
          "raw": "1",
          "start": 2414,
          "end": 2415
        },
        "start": 2410,
        "end": 2415
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
          "start": 2417,
          "end": 2418
        },
        "start": 2417,
        "end": 2420
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
                  "start": 2428,
                  "end": 2435
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "log",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2436,
                  "end": 2439
                },
                "optional": false,
                "computed": false,
                "start": 2428,
                "end": 2439
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "numberA3",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2440,
                  "end": 2448
                }
              ],
              "optional": false,
              "start": 2428,
              "end": 2449
            },
            "directive": null,
            "start": 2428,
            "end": 2450
          }
        ],
        "start": 2422,
        "end": 2452
      },
      "start": 2354,
      "end": 2452
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
                  "type": "Identifier",
                  "decorators": [],
                  "name": "numberA3",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2463,
                  "end": 2471
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
                    "start": 2476,
                    "end": 2486
                  },
                  "optional": false,
                  "typeAnnotation": null,
                  "value": null,
                  "start": 2473,
                  "end": 2486
                }
              ],
              "optional": false,
              "typeAnnotation": null,
              "start": 2462,
              "end": 2487
            },
            "init": {
              "type": "ArrayExpression",
              "elements": [
                {
                  "type": "Literal",
                  "value": 2,
                  "raw": "2",
                  "start": 2491,
                  "end": 2492
                },
                {
                  "type": "Literal",
                  "value": "trimmer",
                  "raw": "\"trimmer\"",
                  "start": 2494,
                  "end": 2503
                },
                {
                  "type": "Literal",
                  "value": "trimming",
                  "raw": "\"trimming\"",
                  "start": 2505,
                  "end": 2515
                }
              ],
              "start": 2490,
              "end": 2516
            },
            "definite": false,
            "start": 2462,
            "end": 2516
          },
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "i",
              "optional": false,
              "typeAnnotation": null,
              "start": 2518,
              "end": 2519
            },
            "init": {
              "type": "Literal",
              "value": 0,
              "raw": "0",
              "start": 2522,
              "end": 2523
            },
            "definite": false,
            "start": 2518,
            "end": 2523
          }
        ],
        "declare": false,
        "start": 2458,
        "end": 2523
      },
      "test": {
        "type": "BinaryExpression",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "i",
          "optional": false,
          "typeAnnotation": null,
          "start": 2525,
          "end": 2526
        },
        "operator": "<",
        "right": {
          "type": "Literal",
          "value": 1,
          "raw": "1",
          "start": 2529,
          "end": 2530
        },
        "start": 2525,
        "end": 2530
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
          "start": 2532,
          "end": 2533
        },
        "start": 2532,
        "end": 2535
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
                  "start": 2543,
                  "end": 2550
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "log",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2551,
                  "end": 2554
                },
                "optional": false,
                "computed": false,
                "start": 2543,
                "end": 2554
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "numberA3",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2555,
                  "end": 2563
                }
              ],
              "optional": false,
              "start": 2543,
              "end": 2564
            },
            "directive": null,
            "start": 2543,
            "end": 2565
          }
        ],
        "start": 2537,
        "end": 2567
      },
      "start": 2453,
      "end": 2567
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
                  "type": "RestElement",
                  "decorators": [],
                  "argument": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "multiRobotAInfo",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2581,
                    "end": 2596
                  },
                  "optional": false,
                  "typeAnnotation": null,
                  "value": null,
                  "start": 2578,
                  "end": 2596
                }
              ],
              "optional": false,
              "typeAnnotation": null,
              "start": 2577,
              "end": 2597
            },
            "init": {
              "type": "Identifier",
              "decorators": [],
              "name": "multiRobotA",
              "optional": false,
              "typeAnnotation": null,
              "start": 2600,
              "end": 2611
            },
            "definite": false,
            "start": 2577,
            "end": 2611
          },
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "i",
              "optional": false,
              "typeAnnotation": null,
              "start": 2613,
              "end": 2614
            },
            "init": {
              "type": "Literal",
              "value": 0,
              "raw": "0",
              "start": 2617,
              "end": 2618
            },
            "definite": false,
            "start": 2613,
            "end": 2618
          }
        ],
        "declare": false,
        "start": 2573,
        "end": 2618
      },
      "test": {
        "type": "BinaryExpression",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "i",
          "optional": false,
          "typeAnnotation": null,
          "start": 2620,
          "end": 2621
        },
        "operator": "<",
        "right": {
          "type": "Literal",
          "value": 1,
          "raw": "1",
          "start": 2624,
          "end": 2625
        },
        "start": 2620,
        "end": 2625
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
          "start": 2627,
          "end": 2628
        },
        "start": 2627,
        "end": 2630
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
                  "start": 2638,
                  "end": 2645
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "log",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2646,
                  "end": 2649
                },
                "optional": false,
                "computed": false,
                "start": 2638,
                "end": 2649
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "multiRobotAInfo",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2650,
                  "end": 2665
                }
              ],
              "optional": false,
              "start": 2638,
              "end": 2666
            },
            "directive": null,
            "start": 2638,
            "end": 2667
          }
        ],
        "start": 2632,
        "end": 2669
      },
      "start": 2568,
      "end": 2669
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
                  "type": "RestElement",
                  "decorators": [],
                  "argument": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "multiRobotAInfo",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2683,
                    "end": 2698
                  },
                  "optional": false,
                  "typeAnnotation": null,
                  "value": null,
                  "start": 2680,
                  "end": 2698
                }
              ],
              "optional": false,
              "typeAnnotation": null,
              "start": 2679,
              "end": 2699
            },
            "init": {
              "type": "CallExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "getMultiRobot",
                "optional": false,
                "typeAnnotation": null,
                "start": 2702,
                "end": 2715
              },
              "typeArguments": null,
              "arguments": [],
              "optional": false,
              "start": 2702,
              "end": 2717
            },
            "definite": false,
            "start": 2679,
            "end": 2717
          },
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "i",
              "optional": false,
              "typeAnnotation": null,
              "start": 2719,
              "end": 2720
            },
            "init": {
              "type": "Literal",
              "value": 0,
              "raw": "0",
              "start": 2723,
              "end": 2724
            },
            "definite": false,
            "start": 2719,
            "end": 2724
          }
        ],
        "declare": false,
        "start": 2675,
        "end": 2724
      },
      "test": {
        "type": "BinaryExpression",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "i",
          "optional": false,
          "typeAnnotation": null,
          "start": 2726,
          "end": 2727
        },
        "operator": "<",
        "right": {
          "type": "Literal",
          "value": 1,
          "raw": "1",
          "start": 2730,
          "end": 2731
        },
        "start": 2726,
        "end": 2731
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
          "start": 2733,
          "end": 2734
        },
        "start": 2733,
        "end": 2736
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
                  "start": 2744,
                  "end": 2751
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "log",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2752,
                  "end": 2755
                },
                "optional": false,
                "computed": false,
                "start": 2744,
                "end": 2755
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "multiRobotAInfo",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2756,
                  "end": 2771
                }
              ],
              "optional": false,
              "start": 2744,
              "end": 2772
            },
            "directive": null,
            "start": 2744,
            "end": 2773
          }
        ],
        "start": 2738,
        "end": 2775
      },
      "start": 2670,
      "end": 2775
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
                  "type": "RestElement",
                  "decorators": [],
                  "argument": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "multiRobotAInfo",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2789,
                    "end": 2804
                  },
                  "optional": false,
                  "typeAnnotation": null,
                  "value": null,
                  "start": 2786,
                  "end": 2804
                }
              ],
              "optional": false,
              "typeAnnotation": null,
              "start": 2785,
              "end": 2805
            },
            "init": {
              "type": "ArrayExpression",
              "elements": [
                {
                  "type": "Literal",
                  "value": "trimmer",
                  "raw": "\"trimmer\"",
                  "start": 2809,
                  "end": 2818
                },
                {
                  "type": "ArrayExpression",
                  "elements": [
                    {
                      "type": "Literal",
                      "value": "trimming",
                      "raw": "\"trimming\"",
                      "start": 2821,
                      "end": 2831
                    },
                    {
                      "type": "Literal",
                      "value": "edging",
                      "raw": "\"edging\"",
                      "start": 2833,
                      "end": 2841
                    }
                  ],
                  "start": 2820,
                  "end": 2842
                }
              ],
              "start": 2808,
              "end": 2843
            },
            "definite": false,
            "start": 2785,
            "end": 2843
          },
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "i",
              "optional": false,
              "typeAnnotation": null,
              "start": 2845,
              "end": 2846
            },
            "init": {
              "type": "Literal",
              "value": 0,
              "raw": "0",
              "start": 2849,
              "end": 2850
            },
            "definite": false,
            "start": 2845,
            "end": 2850
          }
        ],
        "declare": false,
        "start": 2781,
        "end": 2850
      },
      "test": {
        "type": "BinaryExpression",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "i",
          "optional": false,
          "typeAnnotation": null,
          "start": 2852,
          "end": 2853
        },
        "operator": "<",
        "right": {
          "type": "Literal",
          "value": 1,
          "raw": "1",
          "start": 2856,
          "end": 2857
        },
        "start": 2852,
        "end": 2857
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
          "start": 2859,
          "end": 2860
        },
        "start": 2859,
        "end": 2862
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
                  "start": 2870,
                  "end": 2877
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "log",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2878,
                  "end": 2881
                },
                "optional": false,
                "computed": false,
                "start": 2870,
                "end": 2881
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "multiRobotAInfo",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2882,
                  "end": 2897
                }
              ],
              "optional": false,
              "start": 2870,
              "end": 2898
            },
            "directive": null,
            "start": 2870,
            "end": 2899
          }
        ],
        "start": 2864,
        "end": 2901
      },
      "start": 2776,
      "end": 2901
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 2901
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
    "value": "for",
    "start": 423,
    "end": 426
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 427,
    "end": 428
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 428,
    "end": 431
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 432,
    "end": 433
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 433,
    "end": 434
  },
  {
    "type": "Identifier",
    "value": "nameA",
    "start": 435,
    "end": 440
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 440,
    "end": 441
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 442,
    "end": 443
  },
  {
    "type": "Identifier",
    "value": "robotA",
    "start": 444,
    "end": 450
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 450,
    "end": 451
  },
  {
    "type": "Identifier",
    "value": "i",
    "start": 452,
    "end": 453
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 454,
    "end": 455
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 456,
    "end": 457
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 457,
    "end": 458
  },
  {
    "type": "Identifier",
    "value": "i",
    "start": 459,
    "end": 460
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 461,
    "end": 462
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 463,
    "end": 464
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 464,
    "end": 465
  },
  {
    "type": "Identifier",
    "value": "i",
    "start": 466,
    "end": 467
  },
  {
    "type": "Punctuator",
    "value": "++",
    "start": 467,
    "end": 469
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 469,
    "end": 470
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 471,
    "end": 472
  },
  {
    "type": "Identifier",
    "value": "console",
    "start": 477,
    "end": 484
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 484,
    "end": 485
  },
  {
    "type": "Identifier",
    "value": "log",
    "start": 485,
    "end": 488
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 488,
    "end": 489
  },
  {
    "type": "Identifier",
    "value": "nameA",
    "start": 489,
    "end": 494
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 494,
    "end": 495
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 495,
    "end": 496
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 497,
    "end": 498
  },
  {
    "type": "Keyword",
    "value": "for",
    "start": 499,
    "end": 502
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 503,
    "end": 504
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 504,
    "end": 507
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 508,
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
    "value": "nameA",
    "start": 511,
    "end": 516
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 516,
    "end": 517
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 518,
    "end": 519
  },
  {
    "type": "Identifier",
    "value": "getRobot",
    "start": 520,
    "end": 528
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 528,
    "end": 529
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 529,
    "end": 530
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 530,
    "end": 531
  },
  {
    "type": "Identifier",
    "value": "i",
    "start": 532,
    "end": 533
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 534,
    "end": 535
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 536,
    "end": 537
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 537,
    "end": 538
  },
  {
    "type": "Identifier",
    "value": "i",
    "start": 539,
    "end": 540
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 541,
    "end": 542
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 543,
    "end": 544
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 544,
    "end": 545
  },
  {
    "type": "Identifier",
    "value": "i",
    "start": 546,
    "end": 547
  },
  {
    "type": "Punctuator",
    "value": "++",
    "start": 547,
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
    "type": "Identifier",
    "value": "console",
    "start": 557,
    "end": 564
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 564,
    "end": 565
  },
  {
    "type": "Identifier",
    "value": "log",
    "start": 565,
    "end": 568
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 568,
    "end": 569
  },
  {
    "type": "Identifier",
    "value": "nameA",
    "start": 569,
    "end": 574
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 574,
    "end": 575
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 575,
    "end": 576
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 577,
    "end": 578
  },
  {
    "type": "Keyword",
    "value": "for",
    "start": 579,
    "end": 582
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 583,
    "end": 584
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 584,
    "end": 587
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 588,
    "end": 589
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 589,
    "end": 590
  },
  {
    "type": "Identifier",
    "value": "nameA",
    "start": 591,
    "end": 596
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 596,
    "end": 597
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 598,
    "end": 599
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 600,
    "end": 601
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 601,
    "end": 602
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 602,
    "end": 603
  },
  {
    "type": "String",
    "value": "\"trimmer\"",
    "start": 604,
    "end": 613
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 613,
    "end": 614
  },
  {
    "type": "String",
    "value": "\"trimming\"",
    "start": 615,
    "end": 625
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 625,
    "end": 626
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 626,
    "end": 627
  },
  {
    "type": "Identifier",
    "value": "i",
    "start": 628,
    "end": 629
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 630,
    "end": 631
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 632,
    "end": 633
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 633,
    "end": 634
  },
  {
    "type": "Identifier",
    "value": "i",
    "start": 635,
    "end": 636
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 637,
    "end": 638
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 639,
    "end": 640
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 640,
    "end": 641
  },
  {
    "type": "Identifier",
    "value": "i",
    "start": 642,
    "end": 643
  },
  {
    "type": "Punctuator",
    "value": "++",
    "start": 643,
    "end": 645
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 645,
    "end": 646
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 647,
    "end": 648
  },
  {
    "type": "Identifier",
    "value": "console",
    "start": 653,
    "end": 660
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 660,
    "end": 661
  },
  {
    "type": "Identifier",
    "value": "log",
    "start": 661,
    "end": 664
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 664,
    "end": 665
  },
  {
    "type": "Identifier",
    "value": "nameA",
    "start": 665,
    "end": 670
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 670,
    "end": 671
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 671,
    "end": 672
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 673,
    "end": 674
  },
  {
    "type": "Keyword",
    "value": "for",
    "start": 675,
    "end": 678
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 679,
    "end": 680
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 680,
    "end": 683
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 684,
    "end": 685
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 685,
    "end": 686
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 687,
    "end": 688
  },
  {
    "type": "Identifier",
    "value": "primarySkillA",
    "start": 688,
    "end": 701
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 701,
    "end": 702
  },
  {
    "type": "Identifier",
    "value": "secondarySkillA",
    "start": 703,
    "end": 718
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 718,
    "end": 719
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 719,
    "end": 720
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 721,
    "end": 722
  },
  {
    "type": "Identifier",
    "value": "multiRobotA",
    "start": 723,
    "end": 734
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 734,
    "end": 735
  },
  {
    "type": "Identifier",
    "value": "i",
    "start": 736,
    "end": 737
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 738,
    "end": 739
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 740,
    "end": 741
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 741,
    "end": 742
  },
  {
    "type": "Identifier",
    "value": "i",
    "start": 743,
    "end": 744
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 745,
    "end": 746
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 747,
    "end": 748
  },
  {
    "type": "Punctuator",
    "value": ";",
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
    "value": "++",
    "start": 751,
    "end": 753
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 753,
    "end": 754
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 755,
    "end": 756
  },
  {
    "type": "Identifier",
    "value": "console",
    "start": 761,
    "end": 768
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 768,
    "end": 769
  },
  {
    "type": "Identifier",
    "value": "log",
    "start": 769,
    "end": 772
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 772,
    "end": 773
  },
  {
    "type": "Identifier",
    "value": "primarySkillA",
    "start": 773,
    "end": 786
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 786,
    "end": 787
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 787,
    "end": 788
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 789,
    "end": 790
  },
  {
    "type": "Keyword",
    "value": "for",
    "start": 791,
    "end": 794
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 795,
    "end": 796
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 796,
    "end": 799
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 800,
    "end": 801
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 801,
    "end": 802
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 803,
    "end": 804
  },
  {
    "type": "Identifier",
    "value": "primarySkillA",
    "start": 804,
    "end": 817
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 817,
    "end": 818
  },
  {
    "type": "Identifier",
    "value": "secondarySkillA",
    "start": 819,
    "end": 834
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 834,
    "end": 835
  },
  {
    "type": "Punctuator",
    "value": "]",
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
    "type": "Identifier",
    "value": "getMultiRobot",
    "start": 839,
    "end": 852
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 852,
    "end": 853
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 853,
    "end": 854
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 854,
    "end": 855
  },
  {
    "type": "Identifier",
    "value": "i",
    "start": 856,
    "end": 857
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 858,
    "end": 859
  },
  {
    "type": "Numeric",
    "value": "0",
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
    "type": "Identifier",
    "value": "i",
    "start": 863,
    "end": 864
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 865,
    "end": 866
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 867,
    "end": 868
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 868,
    "end": 869
  },
  {
    "type": "Identifier",
    "value": "i",
    "start": 870,
    "end": 871
  },
  {
    "type": "Punctuator",
    "value": "++",
    "start": 871,
    "end": 873
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 873,
    "end": 874
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 875,
    "end": 876
  },
  {
    "type": "Identifier",
    "value": "console",
    "start": 881,
    "end": 888
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 888,
    "end": 889
  },
  {
    "type": "Identifier",
    "value": "log",
    "start": 889,
    "end": 892
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 892,
    "end": 893
  },
  {
    "type": "Identifier",
    "value": "primarySkillA",
    "start": 893,
    "end": 906
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 906,
    "end": 907
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 907,
    "end": 908
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 909,
    "end": 910
  },
  {
    "type": "Keyword",
    "value": "for",
    "start": 911,
    "end": 914
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 915,
    "end": 916
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 916,
    "end": 919
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 920,
    "end": 921
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 921,
    "end": 922
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 923,
    "end": 924
  },
  {
    "type": "Identifier",
    "value": "primarySkillA",
    "start": 924,
    "end": 937
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 937,
    "end": 938
  },
  {
    "type": "Identifier",
    "value": "secondarySkillA",
    "start": 939,
    "end": 954
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 954,
    "end": 955
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 955,
    "end": 956
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 957,
    "end": 958
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 959,
    "end": 960
  },
  {
    "type": "String",
    "value": "\"trimmer\"",
    "start": 960,
    "end": 969
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 969,
    "end": 970
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 971,
    "end": 972
  },
  {
    "type": "String",
    "value": "\"trimming\"",
    "start": 972,
    "end": 982
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 982,
    "end": 983
  },
  {
    "type": "String",
    "value": "\"edging\"",
    "start": 984,
    "end": 992
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 992,
    "end": 993
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 993,
    "end": 994
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 994,
    "end": 995
  },
  {
    "type": "Identifier",
    "value": "i",
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
    "type": "Numeric",
    "value": "0",
    "start": 1000,
    "end": 1001
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1001,
    "end": 1002
  },
  {
    "type": "Identifier",
    "value": "i",
    "start": 1003,
    "end": 1004
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1005,
    "end": 1006
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 1007,
    "end": 1008
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1008,
    "end": 1009
  },
  {
    "type": "Identifier",
    "value": "i",
    "start": 1010,
    "end": 1011
  },
  {
    "type": "Punctuator",
    "value": "++",
    "start": 1011,
    "end": 1013
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1013,
    "end": 1014
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1015,
    "end": 1016
  },
  {
    "type": "Identifier",
    "value": "console",
    "start": 1021,
    "end": 1028
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1028,
    "end": 1029
  },
  {
    "type": "Identifier",
    "value": "log",
    "start": 1029,
    "end": 1032
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1032,
    "end": 1033
  },
  {
    "type": "Identifier",
    "value": "primarySkillA",
    "start": 1033,
    "end": 1046
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1046,
    "end": 1047
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1047,
    "end": 1048
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1049,
    "end": 1050
  },
  {
    "type": "Keyword",
    "value": "for",
    "start": 1052,
    "end": 1055
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1056,
    "end": 1057
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 1057,
    "end": 1060
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1061,
    "end": 1062
  },
  {
    "type": "Identifier",
    "value": "numberB",
    "start": 1062,
    "end": 1069
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1069,
    "end": 1070
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1071,
    "end": 1072
  },
  {
    "type": "Identifier",
    "value": "robotA",
    "start": 1073,
    "end": 1079
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1079,
    "end": 1080
  },
  {
    "type": "Identifier",
    "value": "i",
    "start": 1081,
    "end": 1082
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1083,
    "end": 1084
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 1085,
    "end": 1086
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1086,
    "end": 1087
  },
  {
    "type": "Identifier",
    "value": "i",
    "start": 1088,
    "end": 1089
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1090,
    "end": 1091
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 1092,
    "end": 1093
  },
  {
    "type": "Punctuator",
    "value": ";",
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
    "value": "++",
    "start": 1096,
    "end": 1098
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1098,
    "end": 1099
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1100,
    "end": 1101
  },
  {
    "type": "Identifier",
    "value": "console",
    "start": 1106,
    "end": 1113
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1113,
    "end": 1114
  },
  {
    "type": "Identifier",
    "value": "log",
    "start": 1114,
    "end": 1117
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1117,
    "end": 1118
  },
  {
    "type": "Identifier",
    "value": "numberB",
    "start": 1118,
    "end": 1125
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1125,
    "end": 1126
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1126,
    "end": 1127
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1128,
    "end": 1129
  },
  {
    "type": "Keyword",
    "value": "for",
    "start": 1130,
    "end": 1133
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1134,
    "end": 1135
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 1135,
    "end": 1138
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1139,
    "end": 1140
  },
  {
    "type": "Identifier",
    "value": "numberB",
    "start": 1140,
    "end": 1147
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1147,
    "end": 1148
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1149,
    "end": 1150
  },
  {
    "type": "Identifier",
    "value": "getRobot",
    "start": 1151,
    "end": 1159
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1159,
    "end": 1160
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1160,
    "end": 1161
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1161,
    "end": 1162
  },
  {
    "type": "Identifier",
    "value": "i",
    "start": 1163,
    "end": 1164
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1165,
    "end": 1166
  },
  {
    "type": "Numeric",
    "value": "0",
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
    "value": "i",
    "start": 1170,
    "end": 1171
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1172,
    "end": 1173
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 1174,
    "end": 1175
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1175,
    "end": 1176
  },
  {
    "type": "Identifier",
    "value": "i",
    "start": 1177,
    "end": 1178
  },
  {
    "type": "Punctuator",
    "value": "++",
    "start": 1178,
    "end": 1180
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1180,
    "end": 1181
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1182,
    "end": 1183
  },
  {
    "type": "Identifier",
    "value": "console",
    "start": 1188,
    "end": 1195
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1195,
    "end": 1196
  },
  {
    "type": "Identifier",
    "value": "log",
    "start": 1196,
    "end": 1199
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1199,
    "end": 1200
  },
  {
    "type": "Identifier",
    "value": "numberB",
    "start": 1200,
    "end": 1207
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1207,
    "end": 1208
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1208,
    "end": 1209
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1210,
    "end": 1211
  },
  {
    "type": "Keyword",
    "value": "for",
    "start": 1212,
    "end": 1215
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1216,
    "end": 1217
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 1217,
    "end": 1220
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1221,
    "end": 1222
  },
  {
    "type": "Identifier",
    "value": "numberB",
    "start": 1222,
    "end": 1229
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1229,
    "end": 1230
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1231,
    "end": 1232
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1233,
    "end": 1234
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 1234,
    "end": 1235
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1235,
    "end": 1236
  },
  {
    "type": "String",
    "value": "\"trimmer\"",
    "start": 1237,
    "end": 1246
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1246,
    "end": 1247
  },
  {
    "type": "String",
    "value": "\"trimming\"",
    "start": 1248,
    "end": 1258
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1258,
    "end": 1259
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1259,
    "end": 1260
  },
  {
    "type": "Identifier",
    "value": "i",
    "start": 1261,
    "end": 1262
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1263,
    "end": 1264
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 1265,
    "end": 1266
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1266,
    "end": 1267
  },
  {
    "type": "Identifier",
    "value": "i",
    "start": 1268,
    "end": 1269
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1270,
    "end": 1271
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 1272,
    "end": 1273
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1273,
    "end": 1274
  },
  {
    "type": "Identifier",
    "value": "i",
    "start": 1275,
    "end": 1276
  },
  {
    "type": "Punctuator",
    "value": "++",
    "start": 1276,
    "end": 1278
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1278,
    "end": 1279
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1280,
    "end": 1281
  },
  {
    "type": "Identifier",
    "value": "console",
    "start": 1286,
    "end": 1293
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1293,
    "end": 1294
  },
  {
    "type": "Identifier",
    "value": "log",
    "start": 1294,
    "end": 1297
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1297,
    "end": 1298
  },
  {
    "type": "Identifier",
    "value": "numberB",
    "start": 1298,
    "end": 1305
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1305,
    "end": 1306
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1306,
    "end": 1307
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1308,
    "end": 1309
  },
  {
    "type": "Keyword",
    "value": "for",
    "start": 1310,
    "end": 1313
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1314,
    "end": 1315
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 1315,
    "end": 1318
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1319,
    "end": 1320
  },
  {
    "type": "Identifier",
    "value": "nameB",
    "start": 1320,
    "end": 1325
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1325,
    "end": 1326
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1327,
    "end": 1328
  },
  {
    "type": "Identifier",
    "value": "multiRobotA",
    "start": 1329,
    "end": 1340
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1340,
    "end": 1341
  },
  {
    "type": "Identifier",
    "value": "i",
    "start": 1342,
    "end": 1343
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1344,
    "end": 1345
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 1346,
    "end": 1347
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1347,
    "end": 1348
  },
  {
    "type": "Identifier",
    "value": "i",
    "start": 1349,
    "end": 1350
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1351,
    "end": 1352
  },
  {
    "type": "Numeric",
    "value": "1",
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
    "type": "Identifier",
    "value": "i",
    "start": 1356,
    "end": 1357
  },
  {
    "type": "Punctuator",
    "value": "++",
    "start": 1357,
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
    "value": "{",
    "start": 1361,
    "end": 1362
  },
  {
    "type": "Identifier",
    "value": "console",
    "start": 1367,
    "end": 1374
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1374,
    "end": 1375
  },
  {
    "type": "Identifier",
    "value": "log",
    "start": 1375,
    "end": 1378
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1378,
    "end": 1379
  },
  {
    "type": "Identifier",
    "value": "nameB",
    "start": 1379,
    "end": 1384
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1384,
    "end": 1385
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1385,
    "end": 1386
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1387,
    "end": 1388
  },
  {
    "type": "Keyword",
    "value": "for",
    "start": 1389,
    "end": 1392
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1393,
    "end": 1394
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 1394,
    "end": 1397
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1398,
    "end": 1399
  },
  {
    "type": "Identifier",
    "value": "nameB",
    "start": 1399,
    "end": 1404
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1404,
    "end": 1405
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1406,
    "end": 1407
  },
  {
    "type": "Identifier",
    "value": "getMultiRobot",
    "start": 1408,
    "end": 1421
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1421,
    "end": 1422
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1422,
    "end": 1423
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1423,
    "end": 1424
  },
  {
    "type": "Identifier",
    "value": "i",
    "start": 1425,
    "end": 1426
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1427,
    "end": 1428
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 1429,
    "end": 1430
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1430,
    "end": 1431
  },
  {
    "type": "Identifier",
    "value": "i",
    "start": 1432,
    "end": 1433
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1434,
    "end": 1435
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 1436,
    "end": 1437
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1437,
    "end": 1438
  },
  {
    "type": "Identifier",
    "value": "i",
    "start": 1439,
    "end": 1440
  },
  {
    "type": "Punctuator",
    "value": "++",
    "start": 1440,
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
    "value": "{",
    "start": 1444,
    "end": 1445
  },
  {
    "type": "Identifier",
    "value": "console",
    "start": 1450,
    "end": 1457
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1457,
    "end": 1458
  },
  {
    "type": "Identifier",
    "value": "log",
    "start": 1458,
    "end": 1461
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1461,
    "end": 1462
  },
  {
    "type": "Identifier",
    "value": "nameB",
    "start": 1462,
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
    "value": ";",
    "start": 1468,
    "end": 1469
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1470,
    "end": 1471
  },
  {
    "type": "Keyword",
    "value": "for",
    "start": 1472,
    "end": 1475
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1476,
    "end": 1477
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 1477,
    "end": 1480
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1481,
    "end": 1482
  },
  {
    "type": "Identifier",
    "value": "nameB",
    "start": 1482,
    "end": 1487
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1487,
    "end": 1488
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1489,
    "end": 1490
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1491,
    "end": 1492
  },
  {
    "type": "String",
    "value": "\"trimmer\"",
    "start": 1492,
    "end": 1501
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1501,
    "end": 1502
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1503,
    "end": 1504
  },
  {
    "type": "String",
    "value": "\"trimming\"",
    "start": 1504,
    "end": 1514
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1514,
    "end": 1515
  },
  {
    "type": "String",
    "value": "\"edging\"",
    "start": 1516,
    "end": 1524
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1524,
    "end": 1525
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1525,
    "end": 1526
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1526,
    "end": 1527
  },
  {
    "type": "Identifier",
    "value": "i",
    "start": 1528,
    "end": 1529
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1530,
    "end": 1531
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 1532,
    "end": 1533
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1533,
    "end": 1534
  },
  {
    "type": "Identifier",
    "value": "i",
    "start": 1535,
    "end": 1536
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1537,
    "end": 1538
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 1539,
    "end": 1540
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1540,
    "end": 1541
  },
  {
    "type": "Identifier",
    "value": "i",
    "start": 1542,
    "end": 1543
  },
  {
    "type": "Punctuator",
    "value": "++",
    "start": 1543,
    "end": 1545
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1545,
    "end": 1546
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1547,
    "end": 1548
  },
  {
    "type": "Identifier",
    "value": "console",
    "start": 1553,
    "end": 1560
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1560,
    "end": 1561
  },
  {
    "type": "Identifier",
    "value": "log",
    "start": 1561,
    "end": 1564
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1564,
    "end": 1565
  },
  {
    "type": "Identifier",
    "value": "nameB",
    "start": 1565,
    "end": 1570
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1570,
    "end": 1571
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1571,
    "end": 1572
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1573,
    "end": 1574
  },
  {
    "type": "Keyword",
    "value": "for",
    "start": 1576,
    "end": 1579
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1580,
    "end": 1581
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 1581,
    "end": 1584
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1585,
    "end": 1586
  },
  {
    "type": "Identifier",
    "value": "numberA2",
    "start": 1586,
    "end": 1594
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1594,
    "end": 1595
  },
  {
    "type": "Identifier",
    "value": "nameA2",
    "start": 1596,
    "end": 1602
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1602,
    "end": 1603
  },
  {
    "type": "Identifier",
    "value": "skillA2",
    "start": 1604,
    "end": 1611
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1611,
    "end": 1612
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1613,
    "end": 1614
  },
  {
    "type": "Identifier",
    "value": "robotA",
    "start": 1615,
    "end": 1621
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1621,
    "end": 1622
  },
  {
    "type": "Identifier",
    "value": "i",
    "start": 1623,
    "end": 1624
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1625,
    "end": 1626
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 1627,
    "end": 1628
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1628,
    "end": 1629
  },
  {
    "type": "Identifier",
    "value": "i",
    "start": 1630,
    "end": 1631
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1632,
    "end": 1633
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 1634,
    "end": 1635
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1635,
    "end": 1636
  },
  {
    "type": "Identifier",
    "value": "i",
    "start": 1637,
    "end": 1638
  },
  {
    "type": "Punctuator",
    "value": "++",
    "start": 1638,
    "end": 1640
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1640,
    "end": 1641
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1642,
    "end": 1643
  },
  {
    "type": "Identifier",
    "value": "console",
    "start": 1648,
    "end": 1655
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1655,
    "end": 1656
  },
  {
    "type": "Identifier",
    "value": "log",
    "start": 1656,
    "end": 1659
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1659,
    "end": 1660
  },
  {
    "type": "Identifier",
    "value": "nameA2",
    "start": 1660,
    "end": 1666
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1666,
    "end": 1667
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1667,
    "end": 1668
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1669,
    "end": 1670
  },
  {
    "type": "Keyword",
    "value": "for",
    "start": 1671,
    "end": 1674
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1675,
    "end": 1676
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 1676,
    "end": 1679
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1680,
    "end": 1681
  },
  {
    "type": "Identifier",
    "value": "numberA2",
    "start": 1681,
    "end": 1689
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1689,
    "end": 1690
  },
  {
    "type": "Identifier",
    "value": "nameA2",
    "start": 1691,
    "end": 1697
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1697,
    "end": 1698
  },
  {
    "type": "Identifier",
    "value": "skillA2",
    "start": 1699,
    "end": 1706
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1706,
    "end": 1707
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1708,
    "end": 1709
  },
  {
    "type": "Identifier",
    "value": "getRobot",
    "start": 1710,
    "end": 1718
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1718,
    "end": 1719
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1719,
    "end": 1720
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1720,
    "end": 1721
  },
  {
    "type": "Identifier",
    "value": "i",
    "start": 1722,
    "end": 1723
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1724,
    "end": 1725
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 1726,
    "end": 1727
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1727,
    "end": 1728
  },
  {
    "type": "Identifier",
    "value": "i",
    "start": 1729,
    "end": 1730
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1731,
    "end": 1732
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 1733,
    "end": 1734
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1734,
    "end": 1735
  },
  {
    "type": "Identifier",
    "value": "i",
    "start": 1736,
    "end": 1737
  },
  {
    "type": "Punctuator",
    "value": "++",
    "start": 1737,
    "end": 1739
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1739,
    "end": 1740
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1741,
    "end": 1742
  },
  {
    "type": "Identifier",
    "value": "console",
    "start": 1747,
    "end": 1754
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1754,
    "end": 1755
  },
  {
    "type": "Identifier",
    "value": "log",
    "start": 1755,
    "end": 1758
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1758,
    "end": 1759
  },
  {
    "type": "Identifier",
    "value": "nameA2",
    "start": 1759,
    "end": 1765
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1765,
    "end": 1766
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1766,
    "end": 1767
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1768,
    "end": 1769
  },
  {
    "type": "Keyword",
    "value": "for",
    "start": 1770,
    "end": 1773
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1774,
    "end": 1775
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 1775,
    "end": 1778
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1779,
    "end": 1780
  },
  {
    "type": "Identifier",
    "value": "numberA2",
    "start": 1780,
    "end": 1788
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1788,
    "end": 1789
  },
  {
    "type": "Identifier",
    "value": "nameA2",
    "start": 1790,
    "end": 1796
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1796,
    "end": 1797
  },
  {
    "type": "Identifier",
    "value": "skillA2",
    "start": 1798,
    "end": 1805
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1805,
    "end": 1806
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1807,
    "end": 1808
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1809,
    "end": 1810
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 1810,
    "end": 1811
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1811,
    "end": 1812
  },
  {
    "type": "String",
    "value": "\"trimmer\"",
    "start": 1813,
    "end": 1822
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1822,
    "end": 1823
  },
  {
    "type": "String",
    "value": "\"trimming\"",
    "start": 1824,
    "end": 1834
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1834,
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
    "value": "i",
    "start": 1837,
    "end": 1838
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1839,
    "end": 1840
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 1841,
    "end": 1842
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1842,
    "end": 1843
  },
  {
    "type": "Identifier",
    "value": "i",
    "start": 1844,
    "end": 1845
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1846,
    "end": 1847
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 1848,
    "end": 1849
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1849,
    "end": 1850
  },
  {
    "type": "Identifier",
    "value": "i",
    "start": 1851,
    "end": 1852
  },
  {
    "type": "Punctuator",
    "value": "++",
    "start": 1852,
    "end": 1854
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1854,
    "end": 1855
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1856,
    "end": 1857
  },
  {
    "type": "Identifier",
    "value": "console",
    "start": 1862,
    "end": 1869
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1869,
    "end": 1870
  },
  {
    "type": "Identifier",
    "value": "log",
    "start": 1870,
    "end": 1873
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1873,
    "end": 1874
  },
  {
    "type": "Identifier",
    "value": "nameA2",
    "start": 1874,
    "end": 1880
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1880,
    "end": 1881
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1881,
    "end": 1882
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1883,
    "end": 1884
  },
  {
    "type": "Keyword",
    "value": "for",
    "start": 1885,
    "end": 1888
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1889,
    "end": 1890
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 1890,
    "end": 1893
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1894,
    "end": 1895
  },
  {
    "type": "Identifier",
    "value": "nameMA",
    "start": 1895,
    "end": 1901
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1901,
    "end": 1902
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1903,
    "end": 1904
  },
  {
    "type": "Identifier",
    "value": "primarySkillA",
    "start": 1904,
    "end": 1917
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1917,
    "end": 1918
  },
  {
    "type": "Identifier",
    "value": "secondarySkillA",
    "start": 1919,
    "end": 1934
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1934,
    "end": 1935
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1935,
    "end": 1936
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1937,
    "end": 1938
  },
  {
    "type": "Identifier",
    "value": "multiRobotA",
    "start": 1939,
    "end": 1950
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1950,
    "end": 1951
  },
  {
    "type": "Identifier",
    "value": "i",
    "start": 1952,
    "end": 1953
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1954,
    "end": 1955
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 1956,
    "end": 1957
  },
  {
    "type": "Punctuator",
    "value": ";",
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
    "value": "<",
    "start": 1961,
    "end": 1962
  },
  {
    "type": "Numeric",
    "value": "1",
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
    "value": "++",
    "start": 1967,
    "end": 1969
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1969,
    "end": 1970
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1971,
    "end": 1972
  },
  {
    "type": "Identifier",
    "value": "console",
    "start": 1977,
    "end": 1984
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1984,
    "end": 1985
  },
  {
    "type": "Identifier",
    "value": "log",
    "start": 1985,
    "end": 1988
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1988,
    "end": 1989
  },
  {
    "type": "Identifier",
    "value": "nameMA",
    "start": 1989,
    "end": 1995
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1995,
    "end": 1996
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1996,
    "end": 1997
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1998,
    "end": 1999
  },
  {
    "type": "Keyword",
    "value": "for",
    "start": 2000,
    "end": 2003
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2004,
    "end": 2005
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 2005,
    "end": 2008
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 2009,
    "end": 2010
  },
  {
    "type": "Identifier",
    "value": "nameMA",
    "start": 2010,
    "end": 2016
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2016,
    "end": 2017
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 2018,
    "end": 2019
  },
  {
    "type": "Identifier",
    "value": "primarySkillA",
    "start": 2019,
    "end": 2032
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2032,
    "end": 2033
  },
  {
    "type": "Identifier",
    "value": "secondarySkillA",
    "start": 2034,
    "end": 2049
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 2049,
    "end": 2050
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 2050,
    "end": 2051
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2052,
    "end": 2053
  },
  {
    "type": "Identifier",
    "value": "getMultiRobot",
    "start": 2054,
    "end": 2067
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2067,
    "end": 2068
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2068,
    "end": 2069
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2069,
    "end": 2070
  },
  {
    "type": "Identifier",
    "value": "i",
    "start": 2071,
    "end": 2072
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2073,
    "end": 2074
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 2075,
    "end": 2076
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2076,
    "end": 2077
  },
  {
    "type": "Identifier",
    "value": "i",
    "start": 2078,
    "end": 2079
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2080,
    "end": 2081
  },
  {
    "type": "Numeric",
    "value": "1",
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
    "value": "i",
    "start": 2085,
    "end": 2086
  },
  {
    "type": "Punctuator",
    "value": "++",
    "start": 2086,
    "end": 2088
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2088,
    "end": 2089
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2090,
    "end": 2091
  },
  {
    "type": "Identifier",
    "value": "console",
    "start": 2096,
    "end": 2103
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2103,
    "end": 2104
  },
  {
    "type": "Identifier",
    "value": "log",
    "start": 2104,
    "end": 2107
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2107,
    "end": 2108
  },
  {
    "type": "Identifier",
    "value": "nameMA",
    "start": 2108,
    "end": 2114
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2114,
    "end": 2115
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2115,
    "end": 2116
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2117,
    "end": 2118
  },
  {
    "type": "Keyword",
    "value": "for",
    "start": 2119,
    "end": 2122
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2123,
    "end": 2124
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 2124,
    "end": 2127
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 2128,
    "end": 2129
  },
  {
    "type": "Identifier",
    "value": "nameMA",
    "start": 2129,
    "end": 2135
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2135,
    "end": 2136
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 2137,
    "end": 2138
  },
  {
    "type": "Identifier",
    "value": "primarySkillA",
    "start": 2138,
    "end": 2151
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2151,
    "end": 2152
  },
  {
    "type": "Identifier",
    "value": "secondarySkillA",
    "start": 2153,
    "end": 2168
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 2168,
    "end": 2169
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 2169,
    "end": 2170
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2171,
    "end": 2172
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 2173,
    "end": 2174
  },
  {
    "type": "String",
    "value": "\"trimmer\"",
    "start": 2174,
    "end": 2183
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2183,
    "end": 2184
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 2185,
    "end": 2186
  },
  {
    "type": "String",
    "value": "\"trimming\"",
    "start": 2186,
    "end": 2196
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2196,
    "end": 2197
  },
  {
    "type": "String",
    "value": "\"edging\"",
    "start": 2198,
    "end": 2206
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 2206,
    "end": 2207
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 2207,
    "end": 2208
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2208,
    "end": 2209
  },
  {
    "type": "Identifier",
    "value": "i",
    "start": 2210,
    "end": 2211
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2212,
    "end": 2213
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 2214,
    "end": 2215
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2215,
    "end": 2216
  },
  {
    "type": "Identifier",
    "value": "i",
    "start": 2217,
    "end": 2218
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2219,
    "end": 2220
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 2221,
    "end": 2222
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2222,
    "end": 2223
  },
  {
    "type": "Identifier",
    "value": "i",
    "start": 2224,
    "end": 2225
  },
  {
    "type": "Punctuator",
    "value": "++",
    "start": 2225,
    "end": 2227
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2227,
    "end": 2228
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2229,
    "end": 2230
  },
  {
    "type": "Identifier",
    "value": "console",
    "start": 2235,
    "end": 2242
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2242,
    "end": 2243
  },
  {
    "type": "Identifier",
    "value": "log",
    "start": 2243,
    "end": 2246
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2246,
    "end": 2247
  },
  {
    "type": "Identifier",
    "value": "nameMA",
    "start": 2247,
    "end": 2253
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2253,
    "end": 2254
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2254,
    "end": 2255
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2256,
    "end": 2257
  },
  {
    "type": "Keyword",
    "value": "for",
    "start": 2259,
    "end": 2262
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2263,
    "end": 2264
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 2264,
    "end": 2267
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 2268,
    "end": 2269
  },
  {
    "type": "Identifier",
    "value": "numberA3",
    "start": 2269,
    "end": 2277
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2277,
    "end": 2278
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 2279,
    "end": 2282
  },
  {
    "type": "Identifier",
    "value": "robotAInfo",
    "start": 2282,
    "end": 2292
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 2292,
    "end": 2293
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2294,
    "end": 2295
  },
  {
    "type": "Identifier",
    "value": "robotA",
    "start": 2296,
    "end": 2302
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2302,
    "end": 2303
  },
  {
    "type": "Identifier",
    "value": "i",
    "start": 2304,
    "end": 2305
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2306,
    "end": 2307
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 2308,
    "end": 2309
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2309,
    "end": 2310
  },
  {
    "type": "Identifier",
    "value": "i",
    "start": 2311,
    "end": 2312
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2313,
    "end": 2314
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 2315,
    "end": 2316
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2316,
    "end": 2317
  },
  {
    "type": "Identifier",
    "value": "i",
    "start": 2318,
    "end": 2319
  },
  {
    "type": "Punctuator",
    "value": "++",
    "start": 2319,
    "end": 2321
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2321,
    "end": 2322
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2323,
    "end": 2324
  },
  {
    "type": "Identifier",
    "value": "console",
    "start": 2329,
    "end": 2336
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2336,
    "end": 2337
  },
  {
    "type": "Identifier",
    "value": "log",
    "start": 2337,
    "end": 2340
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2340,
    "end": 2341
  },
  {
    "type": "Identifier",
    "value": "numberA3",
    "start": 2341,
    "end": 2349
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2349,
    "end": 2350
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2350,
    "end": 2351
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2352,
    "end": 2353
  },
  {
    "type": "Keyword",
    "value": "for",
    "start": 2354,
    "end": 2357
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2358,
    "end": 2359
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 2359,
    "end": 2362
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 2363,
    "end": 2364
  },
  {
    "type": "Identifier",
    "value": "numberA3",
    "start": 2364,
    "end": 2372
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2372,
    "end": 2373
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 2374,
    "end": 2377
  },
  {
    "type": "Identifier",
    "value": "robotAInfo",
    "start": 2377,
    "end": 2387
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 2387,
    "end": 2388
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2389,
    "end": 2390
  },
  {
    "type": "Identifier",
    "value": "getRobot",
    "start": 2391,
    "end": 2399
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2399,
    "end": 2400
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2400,
    "end": 2401
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2401,
    "end": 2402
  },
  {
    "type": "Identifier",
    "value": "i",
    "start": 2403,
    "end": 2404
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2405,
    "end": 2406
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 2407,
    "end": 2408
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2408,
    "end": 2409
  },
  {
    "type": "Identifier",
    "value": "i",
    "start": 2410,
    "end": 2411
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2412,
    "end": 2413
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 2414,
    "end": 2415
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2415,
    "end": 2416
  },
  {
    "type": "Identifier",
    "value": "i",
    "start": 2417,
    "end": 2418
  },
  {
    "type": "Punctuator",
    "value": "++",
    "start": 2418,
    "end": 2420
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2420,
    "end": 2421
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2422,
    "end": 2423
  },
  {
    "type": "Identifier",
    "value": "console",
    "start": 2428,
    "end": 2435
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2435,
    "end": 2436
  },
  {
    "type": "Identifier",
    "value": "log",
    "start": 2436,
    "end": 2439
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2439,
    "end": 2440
  },
  {
    "type": "Identifier",
    "value": "numberA3",
    "start": 2440,
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
    "value": ";",
    "start": 2449,
    "end": 2450
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2451,
    "end": 2452
  },
  {
    "type": "Keyword",
    "value": "for",
    "start": 2453,
    "end": 2456
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2457,
    "end": 2458
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 2458,
    "end": 2461
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 2462,
    "end": 2463
  },
  {
    "type": "Identifier",
    "value": "numberA3",
    "start": 2463,
    "end": 2471
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2471,
    "end": 2472
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 2473,
    "end": 2476
  },
  {
    "type": "Identifier",
    "value": "robotAInfo",
    "start": 2476,
    "end": 2486
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 2486,
    "end": 2487
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2488,
    "end": 2489
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 2490,
    "end": 2491
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 2491,
    "end": 2492
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2492,
    "end": 2493
  },
  {
    "type": "String",
    "value": "\"trimmer\"",
    "start": 2494,
    "end": 2503
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2503,
    "end": 2504
  },
  {
    "type": "String",
    "value": "\"trimming\"",
    "start": 2505,
    "end": 2515
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 2515,
    "end": 2516
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2516,
    "end": 2517
  },
  {
    "type": "Identifier",
    "value": "i",
    "start": 2518,
    "end": 2519
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2520,
    "end": 2521
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 2522,
    "end": 2523
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2523,
    "end": 2524
  },
  {
    "type": "Identifier",
    "value": "i",
    "start": 2525,
    "end": 2526
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2527,
    "end": 2528
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 2529,
    "end": 2530
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2530,
    "end": 2531
  },
  {
    "type": "Identifier",
    "value": "i",
    "start": 2532,
    "end": 2533
  },
  {
    "type": "Punctuator",
    "value": "++",
    "start": 2533,
    "end": 2535
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2535,
    "end": 2536
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2537,
    "end": 2538
  },
  {
    "type": "Identifier",
    "value": "console",
    "start": 2543,
    "end": 2550
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2550,
    "end": 2551
  },
  {
    "type": "Identifier",
    "value": "log",
    "start": 2551,
    "end": 2554
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2554,
    "end": 2555
  },
  {
    "type": "Identifier",
    "value": "numberA3",
    "start": 2555,
    "end": 2563
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2563,
    "end": 2564
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2564,
    "end": 2565
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2566,
    "end": 2567
  },
  {
    "type": "Keyword",
    "value": "for",
    "start": 2568,
    "end": 2571
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2572,
    "end": 2573
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 2573,
    "end": 2576
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 2577,
    "end": 2578
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 2578,
    "end": 2581
  },
  {
    "type": "Identifier",
    "value": "multiRobotAInfo",
    "start": 2581,
    "end": 2596
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 2596,
    "end": 2597
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2598,
    "end": 2599
  },
  {
    "type": "Identifier",
    "value": "multiRobotA",
    "start": 2600,
    "end": 2611
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2611,
    "end": 2612
  },
  {
    "type": "Identifier",
    "value": "i",
    "start": 2613,
    "end": 2614
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2615,
    "end": 2616
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 2617,
    "end": 2618
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2618,
    "end": 2619
  },
  {
    "type": "Identifier",
    "value": "i",
    "start": 2620,
    "end": 2621
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2622,
    "end": 2623
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 2624,
    "end": 2625
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2625,
    "end": 2626
  },
  {
    "type": "Identifier",
    "value": "i",
    "start": 2627,
    "end": 2628
  },
  {
    "type": "Punctuator",
    "value": "++",
    "start": 2628,
    "end": 2630
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2630,
    "end": 2631
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2632,
    "end": 2633
  },
  {
    "type": "Identifier",
    "value": "console",
    "start": 2638,
    "end": 2645
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2645,
    "end": 2646
  },
  {
    "type": "Identifier",
    "value": "log",
    "start": 2646,
    "end": 2649
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2649,
    "end": 2650
  },
  {
    "type": "Identifier",
    "value": "multiRobotAInfo",
    "start": 2650,
    "end": 2665
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2665,
    "end": 2666
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2666,
    "end": 2667
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2668,
    "end": 2669
  },
  {
    "type": "Keyword",
    "value": "for",
    "start": 2670,
    "end": 2673
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2674,
    "end": 2675
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 2675,
    "end": 2678
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 2679,
    "end": 2680
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 2680,
    "end": 2683
  },
  {
    "type": "Identifier",
    "value": "multiRobotAInfo",
    "start": 2683,
    "end": 2698
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 2698,
    "end": 2699
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2700,
    "end": 2701
  },
  {
    "type": "Identifier",
    "value": "getMultiRobot",
    "start": 2702,
    "end": 2715
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2715,
    "end": 2716
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2716,
    "end": 2717
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2717,
    "end": 2718
  },
  {
    "type": "Identifier",
    "value": "i",
    "start": 2719,
    "end": 2720
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2721,
    "end": 2722
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 2723,
    "end": 2724
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2724,
    "end": 2725
  },
  {
    "type": "Identifier",
    "value": "i",
    "start": 2726,
    "end": 2727
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2728,
    "end": 2729
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 2730,
    "end": 2731
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2731,
    "end": 2732
  },
  {
    "type": "Identifier",
    "value": "i",
    "start": 2733,
    "end": 2734
  },
  {
    "type": "Punctuator",
    "value": "++",
    "start": 2734,
    "end": 2736
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2736,
    "end": 2737
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2738,
    "end": 2739
  },
  {
    "type": "Identifier",
    "value": "console",
    "start": 2744,
    "end": 2751
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2751,
    "end": 2752
  },
  {
    "type": "Identifier",
    "value": "log",
    "start": 2752,
    "end": 2755
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2755,
    "end": 2756
  },
  {
    "type": "Identifier",
    "value": "multiRobotAInfo",
    "start": 2756,
    "end": 2771
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2771,
    "end": 2772
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2772,
    "end": 2773
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2774,
    "end": 2775
  },
  {
    "type": "Keyword",
    "value": "for",
    "start": 2776,
    "end": 2779
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2780,
    "end": 2781
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 2781,
    "end": 2784
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 2785,
    "end": 2786
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 2786,
    "end": 2789
  },
  {
    "type": "Identifier",
    "value": "multiRobotAInfo",
    "start": 2789,
    "end": 2804
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 2804,
    "end": 2805
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2806,
    "end": 2807
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 2808,
    "end": 2809
  },
  {
    "type": "String",
    "value": "\"trimmer\"",
    "start": 2809,
    "end": 2818
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2818,
    "end": 2819
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 2820,
    "end": 2821
  },
  {
    "type": "String",
    "value": "\"trimming\"",
    "start": 2821,
    "end": 2831
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2831,
    "end": 2832
  },
  {
    "type": "String",
    "value": "\"edging\"",
    "start": 2833,
    "end": 2841
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 2841,
    "end": 2842
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 2842,
    "end": 2843
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2843,
    "end": 2844
  },
  {
    "type": "Identifier",
    "value": "i",
    "start": 2845,
    "end": 2846
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2847,
    "end": 2848
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 2849,
    "end": 2850
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2850,
    "end": 2851
  },
  {
    "type": "Identifier",
    "value": "i",
    "start": 2852,
    "end": 2853
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2854,
    "end": 2855
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 2856,
    "end": 2857
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2857,
    "end": 2858
  },
  {
    "type": "Identifier",
    "value": "i",
    "start": 2859,
    "end": 2860
  },
  {
    "type": "Punctuator",
    "value": "++",
    "start": 2860,
    "end": 2862
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2862,
    "end": 2863
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2864,
    "end": 2865
  },
  {
    "type": "Identifier",
    "value": "console",
    "start": 2870,
    "end": 2877
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2877,
    "end": 2878
  },
  {
    "type": "Identifier",
    "value": "log",
    "start": 2878,
    "end": 2881
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2881,
    "end": 2882
  },
  {
    "type": "Identifier",
    "value": "multiRobotAInfo",
    "start": 2882,
    "end": 2897
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2897,
    "end": 2898
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2898,
    "end": 2899
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2900,
    "end": 2901
  }
]
```
