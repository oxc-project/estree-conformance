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
            "type": "TSArrayType",
            "elementType": {
              "type": "TSStringKeyword",
              "start": 123,
              "end": 129
            },
            "start": 123,
            "end": 131
          }
        ],
        "start": 114,
        "end": 132
      },
      "declare": false,
      "start": 89,
      "end": 133
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
                  "start": 147,
                  "end": 152
                },
                "typeArguments": null,
                "start": 147,
                "end": 152
              },
              "start": 145,
              "end": 152
            },
            "start": 139,
            "end": 152
          },
          "init": {
            "type": "ArrayExpression",
            "elements": [
              {
                "type": "Literal",
                "value": 1,
                "raw": "1",
                "start": 156,
                "end": 157
              },
              {
                "type": "Literal",
                "value": "mower",
                "raw": "\"mower\"",
                "start": 159,
                "end": 166
              },
              {
                "type": "Literal",
                "value": "mowing",
                "raw": "\"mowing\"",
                "start": 168,
                "end": 176
              }
            ],
            "start": 155,
            "end": 177
          },
          "definite": false,
          "start": 139,
          "end": 177
        }
      ],
      "declare": false,
      "start": 135,
      "end": 178
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "getRobot",
        "optional": false,
        "typeAnnotation": null,
        "start": 188,
        "end": 196
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
              "start": 212,
              "end": 218
            },
            "start": 205,
            "end": 219
          }
        ],
        "start": 199,
        "end": 221
      },
      "expression": false,
      "start": 179,
      "end": 221
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
                  "start": 240,
                  "end": 257
                },
                "typeArguments": null,
                "start": 240,
                "end": 257
              },
              "start": 238,
              "end": 257
            },
            "start": 227,
            "end": 257
          },
          "init": {
            "type": "ArrayExpression",
            "elements": [
              {
                "type": "Literal",
                "value": "mower",
                "raw": "\"mower\"",
                "start": 261,
                "end": 268
              },
              {
                "type": "ArrayExpression",
                "elements": [
                  {
                    "type": "Literal",
                    "value": "mowing",
                    "raw": "\"mowing\"",
                    "start": 271,
                    "end": 279
                  },
                  {
                    "type": "Literal",
                    "value": "",
                    "raw": "\"\"",
                    "start": 281,
                    "end": 283
                  }
                ],
                "start": 270,
                "end": 284
              }
            ],
            "start": 260,
            "end": 285
          },
          "definite": false,
          "start": 227,
          "end": 285
        }
      ],
      "declare": false,
      "start": 223,
      "end": 286
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
                  "start": 304,
                  "end": 321
                },
                "typeArguments": null,
                "start": 304,
                "end": 321
              },
              "start": 302,
              "end": 321
            },
            "start": 291,
            "end": 321
          },
          "init": {
            "type": "ArrayExpression",
            "elements": [
              {
                "type": "Literal",
                "value": "trimmer",
                "raw": "\"trimmer\"",
                "start": 325,
                "end": 334
              },
              {
                "type": "ArrayExpression",
                "elements": [
                  {
                    "type": "Literal",
                    "value": "trimming",
                    "raw": "\"trimming\"",
                    "start": 337,
                    "end": 347
                  },
                  {
                    "type": "Literal",
                    "value": "edging",
                    "raw": "\"edging\"",
                    "start": 349,
                    "end": 357
                  }
                ],
                "start": 336,
                "end": 358
              }
            ],
            "start": 324,
            "end": 359
          },
          "definite": false,
          "start": 291,
          "end": 359
        }
      ],
      "declare": false,
      "start": 287,
      "end": 360
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "getMultiRobot",
        "optional": false,
        "typeAnnotation": null,
        "start": 370,
        "end": 383
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
              "start": 399,
              "end": 410
            },
            "start": 392,
            "end": 411
          }
        ],
        "start": 386,
        "end": 413
      },
      "expression": false,
      "start": 361,
      "end": 413
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
                  "type": "AssignmentPattern",
                  "decorators": [],
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "nameA",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 427,
                    "end": 432
                  },
                  "right": {
                    "type": "Literal",
                    "value": "name",
                    "raw": "\"name\"",
                    "start": 434,
                    "end": 440
                  },
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 427,
                  "end": 440
                }
              ],
              "optional": false,
              "typeAnnotation": null,
              "start": 424,
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
            "start": 424,
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
        "start": 420,
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
      "start": 415,
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
                  "type": "AssignmentPattern",
                  "decorators": [],
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "nameA",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 511,
                    "end": 516
                  },
                  "right": {
                    "type": "Literal",
                    "value": "name",
                    "raw": "\"name\"",
                    "start": 519,
                    "end": 525
                  },
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 511,
                  "end": 525
                }
              ],
              "optional": false,
              "typeAnnotation": null,
              "start": 508,
              "end": 526
            },
            "init": {
              "type": "CallExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "getRobot",
                "optional": false,
                "typeAnnotation": null,
                "start": 529,
                "end": 537
              },
              "typeArguments": null,
              "arguments": [],
              "optional": false,
              "start": 529,
              "end": 539
            },
            "definite": false,
            "start": 508,
            "end": 539
          },
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "i",
              "optional": false,
              "typeAnnotation": null,
              "start": 541,
              "end": 542
            },
            "init": {
              "type": "Literal",
              "value": 0,
              "raw": "0",
              "start": 545,
              "end": 546
            },
            "definite": false,
            "start": 541,
            "end": 546
          }
        ],
        "declare": false,
        "start": 504,
        "end": 546
      },
      "test": {
        "type": "BinaryExpression",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "i",
          "optional": false,
          "typeAnnotation": null,
          "start": 548,
          "end": 549
        },
        "operator": "<",
        "right": {
          "type": "Literal",
          "value": 1,
          "raw": "1",
          "start": 552,
          "end": 553
        },
        "start": 548,
        "end": 553
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
          "start": 555,
          "end": 556
        },
        "start": 555,
        "end": 558
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
                  "start": 566,
                  "end": 573
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "log",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 574,
                  "end": 577
                },
                "optional": false,
                "computed": false,
                "start": 566,
                "end": 577
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "nameA",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 578,
                  "end": 583
                }
              ],
              "optional": false,
              "start": 566,
              "end": 584
            },
            "directive": null,
            "start": 566,
            "end": 585
          }
        ],
        "start": 560,
        "end": 587
      },
      "start": 499,
      "end": 587
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
                  "type": "AssignmentPattern",
                  "decorators": [],
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "nameA",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 600,
                    "end": 605
                  },
                  "right": {
                    "type": "Literal",
                    "value": "name",
                    "raw": "\"name\"",
                    "start": 608,
                    "end": 614
                  },
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 600,
                  "end": 614
                }
              ],
              "optional": false,
              "typeAnnotation": null,
              "start": 597,
              "end": 615
            },
            "init": {
              "type": "ArrayExpression",
              "elements": [
                {
                  "type": "Literal",
                  "value": 2,
                  "raw": "2",
                  "start": 619,
                  "end": 620
                },
                {
                  "type": "Literal",
                  "value": "trimmer",
                  "raw": "\"trimmer\"",
                  "start": 622,
                  "end": 631
                },
                {
                  "type": "Literal",
                  "value": "trimming",
                  "raw": "\"trimming\"",
                  "start": 633,
                  "end": 643
                }
              ],
              "start": 618,
              "end": 644
            },
            "definite": false,
            "start": 597,
            "end": 644
          },
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "i",
              "optional": false,
              "typeAnnotation": null,
              "start": 646,
              "end": 647
            },
            "init": {
              "type": "Literal",
              "value": 0,
              "raw": "0",
              "start": 650,
              "end": 651
            },
            "definite": false,
            "start": 646,
            "end": 651
          }
        ],
        "declare": false,
        "start": 593,
        "end": 651
      },
      "test": {
        "type": "BinaryExpression",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "i",
          "optional": false,
          "typeAnnotation": null,
          "start": 653,
          "end": 654
        },
        "operator": "<",
        "right": {
          "type": "Literal",
          "value": 1,
          "raw": "1",
          "start": 657,
          "end": 658
        },
        "start": 653,
        "end": 658
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
          "start": 660,
          "end": 661
        },
        "start": 660,
        "end": 663
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
                  "start": 671,
                  "end": 678
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "log",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 679,
                  "end": 682
                },
                "optional": false,
                "computed": false,
                "start": 671,
                "end": 682
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "nameA",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 683,
                  "end": 688
                }
              ],
              "optional": false,
              "start": 671,
              "end": 689
            },
            "directive": null,
            "start": 671,
            "end": 690
          }
        ],
        "start": 665,
        "end": 692
      },
      "start": 588,
      "end": 692
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
                          "start": 711,
                          "end": 724
                        },
                        "right": {
                          "type": "Literal",
                          "value": "primary",
                          "raw": "\"primary\"",
                          "start": 727,
                          "end": 736
                        },
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 711,
                        "end": 736
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
                          "start": 742,
                          "end": 757
                        },
                        "right": {
                          "type": "Literal",
                          "value": "secondary",
                          "raw": "\"secondary\"",
                          "start": 760,
                          "end": 771
                        },
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 742,
                        "end": 771
                      }
                    ],
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 705,
                    "end": 773
                  },
                  "right": {
                    "type": "ArrayExpression",
                    "elements": [
                      {
                        "type": "Literal",
                        "value": "none",
                        "raw": "\"none\"",
                        "start": 777,
                        "end": 783
                      },
                      {
                        "type": "Literal",
                        "value": "none",
                        "raw": "\"none\"",
                        "start": 785,
                        "end": 791
                      }
                    ],
                    "start": 776,
                    "end": 792
                  },
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 705,
                  "end": 792
                }
              ],
              "optional": false,
              "typeAnnotation": null,
              "start": 702,
              "end": 793
            },
            "init": {
              "type": "Identifier",
              "decorators": [],
              "name": "multiRobotA",
              "optional": false,
              "typeAnnotation": null,
              "start": 796,
              "end": 807
            },
            "definite": false,
            "start": 702,
            "end": 807
          },
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "i",
              "optional": false,
              "typeAnnotation": null,
              "start": 809,
              "end": 810
            },
            "init": {
              "type": "Literal",
              "value": 0,
              "raw": "0",
              "start": 813,
              "end": 814
            },
            "definite": false,
            "start": 809,
            "end": 814
          }
        ],
        "declare": false,
        "start": 698,
        "end": 814
      },
      "test": {
        "type": "BinaryExpression",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "i",
          "optional": false,
          "typeAnnotation": null,
          "start": 816,
          "end": 817
        },
        "operator": "<",
        "right": {
          "type": "Literal",
          "value": 1,
          "raw": "1",
          "start": 820,
          "end": 821
        },
        "start": 816,
        "end": 821
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
          "start": 823,
          "end": 824
        },
        "start": 823,
        "end": 826
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
                  "start": 834,
                  "end": 841
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "log",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 842,
                  "end": 845
                },
                "optional": false,
                "computed": false,
                "start": 834,
                "end": 845
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "primarySkillA",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 846,
                  "end": 859
                }
              ],
              "optional": false,
              "start": 834,
              "end": 860
            },
            "directive": null,
            "start": 834,
            "end": 861
          }
        ],
        "start": 828,
        "end": 863
      },
      "start": 693,
      "end": 863
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
                          "start": 882,
                          "end": 895
                        },
                        "right": {
                          "type": "Literal",
                          "value": "primary",
                          "raw": "\"primary\"",
                          "start": 898,
                          "end": 907
                        },
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 882,
                        "end": 907
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
                          "start": 913,
                          "end": 928
                        },
                        "right": {
                          "type": "Literal",
                          "value": "secondary",
                          "raw": "\"secondary\"",
                          "start": 931,
                          "end": 942
                        },
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 913,
                        "end": 942
                      }
                    ],
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 876,
                    "end": 944
                  },
                  "right": {
                    "type": "ArrayExpression",
                    "elements": [
                      {
                        "type": "Literal",
                        "value": "none",
                        "raw": "\"none\"",
                        "start": 948,
                        "end": 954
                      },
                      {
                        "type": "Literal",
                        "value": "none",
                        "raw": "\"none\"",
                        "start": 956,
                        "end": 962
                      }
                    ],
                    "start": 947,
                    "end": 963
                  },
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 876,
                  "end": 963
                }
              ],
              "optional": false,
              "typeAnnotation": null,
              "start": 873,
              "end": 964
            },
            "init": {
              "type": "CallExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "getMultiRobot",
                "optional": false,
                "typeAnnotation": null,
                "start": 967,
                "end": 980
              },
              "typeArguments": null,
              "arguments": [],
              "optional": false,
              "start": 967,
              "end": 982
            },
            "definite": false,
            "start": 873,
            "end": 982
          },
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "i",
              "optional": false,
              "typeAnnotation": null,
              "start": 984,
              "end": 985
            },
            "init": {
              "type": "Literal",
              "value": 0,
              "raw": "0",
              "start": 988,
              "end": 989
            },
            "definite": false,
            "start": 984,
            "end": 989
          }
        ],
        "declare": false,
        "start": 869,
        "end": 989
      },
      "test": {
        "type": "BinaryExpression",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "i",
          "optional": false,
          "typeAnnotation": null,
          "start": 991,
          "end": 992
        },
        "operator": "<",
        "right": {
          "type": "Literal",
          "value": 1,
          "raw": "1",
          "start": 995,
          "end": 996
        },
        "start": 991,
        "end": 996
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
          "start": 998,
          "end": 999
        },
        "start": 998,
        "end": 1001
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
                  "start": 1009,
                  "end": 1016
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "log",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1017,
                  "end": 1020
                },
                "optional": false,
                "computed": false,
                "start": 1009,
                "end": 1020
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "primarySkillA",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1021,
                  "end": 1034
                }
              ],
              "optional": false,
              "start": 1009,
              "end": 1035
            },
            "directive": null,
            "start": 1009,
            "end": 1036
          }
        ],
        "start": 1003,
        "end": 1038
      },
      "start": 864,
      "end": 1038
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
                          "start": 1057,
                          "end": 1070
                        },
                        "right": {
                          "type": "Literal",
                          "value": "primary",
                          "raw": "\"primary\"",
                          "start": 1073,
                          "end": 1082
                        },
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1057,
                        "end": 1082
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
                          "start": 1088,
                          "end": 1103
                        },
                        "right": {
                          "type": "Literal",
                          "value": "secondary",
                          "raw": "\"secondary\"",
                          "start": 1106,
                          "end": 1117
                        },
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1088,
                        "end": 1117
                      }
                    ],
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1051,
                    "end": 1119
                  },
                  "right": {
                    "type": "ArrayExpression",
                    "elements": [
                      {
                        "type": "Literal",
                        "value": "none",
                        "raw": "\"none\"",
                        "start": 1123,
                        "end": 1129
                      },
                      {
                        "type": "Literal",
                        "value": "none",
                        "raw": "\"none\"",
                        "start": 1131,
                        "end": 1137
                      }
                    ],
                    "start": 1122,
                    "end": 1138
                  },
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1051,
                  "end": 1138
                }
              ],
              "optional": false,
              "typeAnnotation": null,
              "start": 1048,
              "end": 1139
            },
            "init": {
              "type": "ArrayExpression",
              "elements": [
                {
                  "type": "Literal",
                  "value": "trimmer",
                  "raw": "\"trimmer\"",
                  "start": 1143,
                  "end": 1152
                },
                {
                  "type": "ArrayExpression",
                  "elements": [
                    {
                      "type": "Literal",
                      "value": "trimming",
                      "raw": "\"trimming\"",
                      "start": 1155,
                      "end": 1165
                    },
                    {
                      "type": "Literal",
                      "value": "edging",
                      "raw": "\"edging\"",
                      "start": 1167,
                      "end": 1175
                    }
                  ],
                  "start": 1154,
                  "end": 1176
                }
              ],
              "start": 1142,
              "end": 1177
            },
            "definite": false,
            "start": 1048,
            "end": 1177
          },
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "i",
              "optional": false,
              "typeAnnotation": null,
              "start": 1179,
              "end": 1180
            },
            "init": {
              "type": "Literal",
              "value": 0,
              "raw": "0",
              "start": 1183,
              "end": 1184
            },
            "definite": false,
            "start": 1179,
            "end": 1184
          }
        ],
        "declare": false,
        "start": 1044,
        "end": 1184
      },
      "test": {
        "type": "BinaryExpression",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "i",
          "optional": false,
          "typeAnnotation": null,
          "start": 1186,
          "end": 1187
        },
        "operator": "<",
        "right": {
          "type": "Literal",
          "value": 1,
          "raw": "1",
          "start": 1190,
          "end": 1191
        },
        "start": 1186,
        "end": 1191
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
          "start": 1193,
          "end": 1194
        },
        "start": 1193,
        "end": 1196
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
                  "start": 1204,
                  "end": 1211
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "log",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1212,
                  "end": 1215
                },
                "optional": false,
                "computed": false,
                "start": 1204,
                "end": 1215
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "primarySkillA",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1216,
                  "end": 1229
                }
              ],
              "optional": false,
              "start": 1204,
              "end": 1230
            },
            "directive": null,
            "start": 1204,
            "end": 1231
          }
        ],
        "start": 1198,
        "end": 1233
      },
      "start": 1039,
      "end": 1233
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
                    "name": "numberB",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1245,
                    "end": 1252
                  },
                  "right": {
                    "type": "UnaryExpression",
                    "operator": "-",
                    "argument": {
                      "type": "Literal",
                      "value": 1,
                      "raw": "1",
                      "start": 1256,
                      "end": 1257
                    },
                    "prefix": true,
                    "start": 1255,
                    "end": 1257
                  },
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1245,
                  "end": 1257
                }
              ],
              "optional": false,
              "typeAnnotation": null,
              "start": 1244,
              "end": 1258
            },
            "init": {
              "type": "Identifier",
              "decorators": [],
              "name": "robotA",
              "optional": false,
              "typeAnnotation": null,
              "start": 1261,
              "end": 1267
            },
            "definite": false,
            "start": 1244,
            "end": 1267
          },
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "i",
              "optional": false,
              "typeAnnotation": null,
              "start": 1269,
              "end": 1270
            },
            "init": {
              "type": "Literal",
              "value": 0,
              "raw": "0",
              "start": 1273,
              "end": 1274
            },
            "definite": false,
            "start": 1269,
            "end": 1274
          }
        ],
        "declare": false,
        "start": 1240,
        "end": 1274
      },
      "test": {
        "type": "BinaryExpression",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "i",
          "optional": false,
          "typeAnnotation": null,
          "start": 1276,
          "end": 1277
        },
        "operator": "<",
        "right": {
          "type": "Literal",
          "value": 1,
          "raw": "1",
          "start": 1280,
          "end": 1281
        },
        "start": 1276,
        "end": 1281
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
          "start": 1283,
          "end": 1284
        },
        "start": 1283,
        "end": 1286
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
                  "start": 1294,
                  "end": 1301
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "log",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1302,
                  "end": 1305
                },
                "optional": false,
                "computed": false,
                "start": 1294,
                "end": 1305
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "numberB",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1306,
                  "end": 1313
                }
              ],
              "optional": false,
              "start": 1294,
              "end": 1314
            },
            "directive": null,
            "start": 1294,
            "end": 1315
          }
        ],
        "start": 1288,
        "end": 1317
      },
      "start": 1235,
      "end": 1317
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
                    "name": "numberB",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1328,
                    "end": 1335
                  },
                  "right": {
                    "type": "UnaryExpression",
                    "operator": "-",
                    "argument": {
                      "type": "Literal",
                      "value": 1,
                      "raw": "1",
                      "start": 1339,
                      "end": 1340
                    },
                    "prefix": true,
                    "start": 1338,
                    "end": 1340
                  },
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1328,
                  "end": 1340
                }
              ],
              "optional": false,
              "typeAnnotation": null,
              "start": 1327,
              "end": 1341
            },
            "init": {
              "type": "CallExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "getRobot",
                "optional": false,
                "typeAnnotation": null,
                "start": 1344,
                "end": 1352
              },
              "typeArguments": null,
              "arguments": [],
              "optional": false,
              "start": 1344,
              "end": 1354
            },
            "definite": false,
            "start": 1327,
            "end": 1354
          },
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "i",
              "optional": false,
              "typeAnnotation": null,
              "start": 1356,
              "end": 1357
            },
            "init": {
              "type": "Literal",
              "value": 0,
              "raw": "0",
              "start": 1360,
              "end": 1361
            },
            "definite": false,
            "start": 1356,
            "end": 1361
          }
        ],
        "declare": false,
        "start": 1323,
        "end": 1361
      },
      "test": {
        "type": "BinaryExpression",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "i",
          "optional": false,
          "typeAnnotation": null,
          "start": 1363,
          "end": 1364
        },
        "operator": "<",
        "right": {
          "type": "Literal",
          "value": 1,
          "raw": "1",
          "start": 1367,
          "end": 1368
        },
        "start": 1363,
        "end": 1368
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
          "start": 1370,
          "end": 1371
        },
        "start": 1370,
        "end": 1373
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
                  "start": 1381,
                  "end": 1388
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "log",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1389,
                  "end": 1392
                },
                "optional": false,
                "computed": false,
                "start": 1381,
                "end": 1392
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "numberB",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1393,
                  "end": 1400
                }
              ],
              "optional": false,
              "start": 1381,
              "end": 1401
            },
            "directive": null,
            "start": 1381,
            "end": 1402
          }
        ],
        "start": 1375,
        "end": 1404
      },
      "start": 1318,
      "end": 1404
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
                    "name": "numberB",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1415,
                    "end": 1422
                  },
                  "right": {
                    "type": "UnaryExpression",
                    "operator": "-",
                    "argument": {
                      "type": "Literal",
                      "value": 1,
                      "raw": "1",
                      "start": 1426,
                      "end": 1427
                    },
                    "prefix": true,
                    "start": 1425,
                    "end": 1427
                  },
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1415,
                  "end": 1427
                }
              ],
              "optional": false,
              "typeAnnotation": null,
              "start": 1414,
              "end": 1428
            },
            "init": {
              "type": "ArrayExpression",
              "elements": [
                {
                  "type": "Literal",
                  "value": 2,
                  "raw": "2",
                  "start": 1432,
                  "end": 1433
                },
                {
                  "type": "Literal",
                  "value": "trimmer",
                  "raw": "\"trimmer\"",
                  "start": 1435,
                  "end": 1444
                },
                {
                  "type": "Literal",
                  "value": "trimming",
                  "raw": "\"trimming\"",
                  "start": 1446,
                  "end": 1456
                }
              ],
              "start": 1431,
              "end": 1457
            },
            "definite": false,
            "start": 1414,
            "end": 1457
          },
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "i",
              "optional": false,
              "typeAnnotation": null,
              "start": 1459,
              "end": 1460
            },
            "init": {
              "type": "Literal",
              "value": 0,
              "raw": "0",
              "start": 1463,
              "end": 1464
            },
            "definite": false,
            "start": 1459,
            "end": 1464
          }
        ],
        "declare": false,
        "start": 1410,
        "end": 1464
      },
      "test": {
        "type": "BinaryExpression",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "i",
          "optional": false,
          "typeAnnotation": null,
          "start": 1466,
          "end": 1467
        },
        "operator": "<",
        "right": {
          "type": "Literal",
          "value": 1,
          "raw": "1",
          "start": 1470,
          "end": 1471
        },
        "start": 1466,
        "end": 1471
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
          "start": 1473,
          "end": 1474
        },
        "start": 1473,
        "end": 1476
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
                  "start": 1484,
                  "end": 1491
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "log",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1492,
                  "end": 1495
                },
                "optional": false,
                "computed": false,
                "start": 1484,
                "end": 1495
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "numberB",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1496,
                  "end": 1503
                }
              ],
              "optional": false,
              "start": 1484,
              "end": 1504
            },
            "directive": null,
            "start": 1484,
            "end": 1505
          }
        ],
        "start": 1478,
        "end": 1507
      },
      "start": 1405,
      "end": 1507
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
                    "name": "nameB",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1518,
                    "end": 1523
                  },
                  "right": {
                    "type": "Literal",
                    "value": "name",
                    "raw": "\"name\"",
                    "start": 1526,
                    "end": 1532
                  },
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1518,
                  "end": 1532
                }
              ],
              "optional": false,
              "typeAnnotation": null,
              "start": 1517,
              "end": 1533
            },
            "init": {
              "type": "Identifier",
              "decorators": [],
              "name": "multiRobotA",
              "optional": false,
              "typeAnnotation": null,
              "start": 1536,
              "end": 1547
            },
            "definite": false,
            "start": 1517,
            "end": 1547
          },
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "i",
              "optional": false,
              "typeAnnotation": null,
              "start": 1549,
              "end": 1550
            },
            "init": {
              "type": "Literal",
              "value": 0,
              "raw": "0",
              "start": 1553,
              "end": 1554
            },
            "definite": false,
            "start": 1549,
            "end": 1554
          }
        ],
        "declare": false,
        "start": 1513,
        "end": 1554
      },
      "test": {
        "type": "BinaryExpression",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "i",
          "optional": false,
          "typeAnnotation": null,
          "start": 1556,
          "end": 1557
        },
        "operator": "<",
        "right": {
          "type": "Literal",
          "value": 1,
          "raw": "1",
          "start": 1560,
          "end": 1561
        },
        "start": 1556,
        "end": 1561
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
          "start": 1563,
          "end": 1564
        },
        "start": 1563,
        "end": 1566
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
                  "start": 1574,
                  "end": 1581
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "log",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1582,
                  "end": 1585
                },
                "optional": false,
                "computed": false,
                "start": 1574,
                "end": 1585
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "nameB",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1586,
                  "end": 1591
                }
              ],
              "optional": false,
              "start": 1574,
              "end": 1592
            },
            "directive": null,
            "start": 1574,
            "end": 1593
          }
        ],
        "start": 1568,
        "end": 1595
      },
      "start": 1508,
      "end": 1595
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
                    "name": "nameB",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1606,
                    "end": 1611
                  },
                  "right": {
                    "type": "Literal",
                    "value": "name",
                    "raw": "\"name\"",
                    "start": 1614,
                    "end": 1620
                  },
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1606,
                  "end": 1620
                }
              ],
              "optional": false,
              "typeAnnotation": null,
              "start": 1605,
              "end": 1621
            },
            "init": {
              "type": "CallExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "getMultiRobot",
                "optional": false,
                "typeAnnotation": null,
                "start": 1624,
                "end": 1637
              },
              "typeArguments": null,
              "arguments": [],
              "optional": false,
              "start": 1624,
              "end": 1639
            },
            "definite": false,
            "start": 1605,
            "end": 1639
          },
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "i",
              "optional": false,
              "typeAnnotation": null,
              "start": 1641,
              "end": 1642
            },
            "init": {
              "type": "Literal",
              "value": 0,
              "raw": "0",
              "start": 1645,
              "end": 1646
            },
            "definite": false,
            "start": 1641,
            "end": 1646
          }
        ],
        "declare": false,
        "start": 1601,
        "end": 1646
      },
      "test": {
        "type": "BinaryExpression",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "i",
          "optional": false,
          "typeAnnotation": null,
          "start": 1648,
          "end": 1649
        },
        "operator": "<",
        "right": {
          "type": "Literal",
          "value": 1,
          "raw": "1",
          "start": 1652,
          "end": 1653
        },
        "start": 1648,
        "end": 1653
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
          "start": 1655,
          "end": 1656
        },
        "start": 1655,
        "end": 1658
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
                  "start": 1666,
                  "end": 1673
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "log",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1674,
                  "end": 1677
                },
                "optional": false,
                "computed": false,
                "start": 1666,
                "end": 1677
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "nameB",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1678,
                  "end": 1683
                }
              ],
              "optional": false,
              "start": 1666,
              "end": 1684
            },
            "directive": null,
            "start": 1666,
            "end": 1685
          }
        ],
        "start": 1660,
        "end": 1687
      },
      "start": 1596,
      "end": 1687
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
                    "name": "nameB",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1698,
                    "end": 1703
                  },
                  "right": {
                    "type": "Literal",
                    "value": "name",
                    "raw": "\"name\"",
                    "start": 1706,
                    "end": 1712
                  },
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1698,
                  "end": 1712
                }
              ],
              "optional": false,
              "typeAnnotation": null,
              "start": 1697,
              "end": 1713
            },
            "init": {
              "type": "ArrayExpression",
              "elements": [
                {
                  "type": "Literal",
                  "value": "trimmer",
                  "raw": "\"trimmer\"",
                  "start": 1717,
                  "end": 1726
                },
                {
                  "type": "ArrayExpression",
                  "elements": [
                    {
                      "type": "Literal",
                      "value": "trimming",
                      "raw": "\"trimming\"",
                      "start": 1729,
                      "end": 1739
                    },
                    {
                      "type": "Literal",
                      "value": "edging",
                      "raw": "\"edging\"",
                      "start": 1741,
                      "end": 1749
                    }
                  ],
                  "start": 1728,
                  "end": 1750
                }
              ],
              "start": 1716,
              "end": 1751
            },
            "definite": false,
            "start": 1697,
            "end": 1751
          },
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "i",
              "optional": false,
              "typeAnnotation": null,
              "start": 1753,
              "end": 1754
            },
            "init": {
              "type": "Literal",
              "value": 0,
              "raw": "0",
              "start": 1757,
              "end": 1758
            },
            "definite": false,
            "start": 1753,
            "end": 1758
          }
        ],
        "declare": false,
        "start": 1693,
        "end": 1758
      },
      "test": {
        "type": "BinaryExpression",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "i",
          "optional": false,
          "typeAnnotation": null,
          "start": 1760,
          "end": 1761
        },
        "operator": "<",
        "right": {
          "type": "Literal",
          "value": 1,
          "raw": "1",
          "start": 1764,
          "end": 1765
        },
        "start": 1760,
        "end": 1765
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
          "start": 1767,
          "end": 1768
        },
        "start": 1767,
        "end": 1770
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
                  "start": 1778,
                  "end": 1785
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "log",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1786,
                  "end": 1789
                },
                "optional": false,
                "computed": false,
                "start": 1778,
                "end": 1789
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "nameB",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1790,
                  "end": 1795
                }
              ],
              "optional": false,
              "start": 1778,
              "end": 1796
            },
            "directive": null,
            "start": 1778,
            "end": 1797
          }
        ],
        "start": 1772,
        "end": 1799
      },
      "start": 1688,
      "end": 1799
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
                    "name": "numberA2",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1811,
                    "end": 1819
                  },
                  "right": {
                    "type": "UnaryExpression",
                    "operator": "-",
                    "argument": {
                      "type": "Literal",
                      "value": 1,
                      "raw": "1",
                      "start": 1823,
                      "end": 1824
                    },
                    "prefix": true,
                    "start": 1822,
                    "end": 1824
                  },
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1811,
                  "end": 1824
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
                    "start": 1826,
                    "end": 1832
                  },
                  "right": {
                    "type": "Literal",
                    "value": "name",
                    "raw": "\"name\"",
                    "start": 1835,
                    "end": 1841
                  },
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1826,
                  "end": 1841
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
                    "start": 1843,
                    "end": 1850
                  },
                  "right": {
                    "type": "Literal",
                    "value": "skill",
                    "raw": "\"skill\"",
                    "start": 1853,
                    "end": 1860
                  },
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1843,
                  "end": 1860
                }
              ],
              "optional": false,
              "typeAnnotation": null,
              "start": 1810,
              "end": 1861
            },
            "init": {
              "type": "Identifier",
              "decorators": [],
              "name": "robotA",
              "optional": false,
              "typeAnnotation": null,
              "start": 1864,
              "end": 1870
            },
            "definite": false,
            "start": 1810,
            "end": 1870
          },
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "i",
              "optional": false,
              "typeAnnotation": null,
              "start": 1872,
              "end": 1873
            },
            "init": {
              "type": "Literal",
              "value": 0,
              "raw": "0",
              "start": 1876,
              "end": 1877
            },
            "definite": false,
            "start": 1872,
            "end": 1877
          }
        ],
        "declare": false,
        "start": 1806,
        "end": 1877
      },
      "test": {
        "type": "BinaryExpression",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "i",
          "optional": false,
          "typeAnnotation": null,
          "start": 1879,
          "end": 1880
        },
        "operator": "<",
        "right": {
          "type": "Literal",
          "value": 1,
          "raw": "1",
          "start": 1883,
          "end": 1884
        },
        "start": 1879,
        "end": 1884
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
          "start": 1886,
          "end": 1887
        },
        "start": 1886,
        "end": 1889
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
                  "start": 1897,
                  "end": 1904
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "log",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1905,
                  "end": 1908
                },
                "optional": false,
                "computed": false,
                "start": 1897,
                "end": 1908
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "nameA2",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1909,
                  "end": 1915
                }
              ],
              "optional": false,
              "start": 1897,
              "end": 1916
            },
            "directive": null,
            "start": 1897,
            "end": 1917
          }
        ],
        "start": 1891,
        "end": 1919
      },
      "start": 1801,
      "end": 1919
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
                    "name": "numberA2",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1930,
                    "end": 1938
                  },
                  "right": {
                    "type": "UnaryExpression",
                    "operator": "-",
                    "argument": {
                      "type": "Literal",
                      "value": 1,
                      "raw": "1",
                      "start": 1942,
                      "end": 1943
                    },
                    "prefix": true,
                    "start": 1941,
                    "end": 1943
                  },
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1930,
                  "end": 1943
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
                    "start": 1945,
                    "end": 1951
                  },
                  "right": {
                    "type": "Literal",
                    "value": "name",
                    "raw": "\"name\"",
                    "start": 1954,
                    "end": 1960
                  },
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1945,
                  "end": 1960
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
                    "start": 1962,
                    "end": 1969
                  },
                  "right": {
                    "type": "Literal",
                    "value": "skill",
                    "raw": "\"skill\"",
                    "start": 1972,
                    "end": 1979
                  },
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1962,
                  "end": 1979
                }
              ],
              "optional": false,
              "typeAnnotation": null,
              "start": 1929,
              "end": 1980
            },
            "init": {
              "type": "CallExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "getRobot",
                "optional": false,
                "typeAnnotation": null,
                "start": 1983,
                "end": 1991
              },
              "typeArguments": null,
              "arguments": [],
              "optional": false,
              "start": 1983,
              "end": 1993
            },
            "definite": false,
            "start": 1929,
            "end": 1993
          },
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "i",
              "optional": false,
              "typeAnnotation": null,
              "start": 1995,
              "end": 1996
            },
            "init": {
              "type": "Literal",
              "value": 0,
              "raw": "0",
              "start": 1999,
              "end": 2000
            },
            "definite": false,
            "start": 1995,
            "end": 2000
          }
        ],
        "declare": false,
        "start": 1925,
        "end": 2000
      },
      "test": {
        "type": "BinaryExpression",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "i",
          "optional": false,
          "typeAnnotation": null,
          "start": 2002,
          "end": 2003
        },
        "operator": "<",
        "right": {
          "type": "Literal",
          "value": 1,
          "raw": "1",
          "start": 2006,
          "end": 2007
        },
        "start": 2002,
        "end": 2007
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
          "start": 2009,
          "end": 2010
        },
        "start": 2009,
        "end": 2012
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
                  "start": 2020,
                  "end": 2027
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "log",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2028,
                  "end": 2031
                },
                "optional": false,
                "computed": false,
                "start": 2020,
                "end": 2031
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "nameA2",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2032,
                  "end": 2038
                }
              ],
              "optional": false,
              "start": 2020,
              "end": 2039
            },
            "directive": null,
            "start": 2020,
            "end": 2040
          }
        ],
        "start": 2014,
        "end": 2042
      },
      "start": 1920,
      "end": 2042
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
                    "name": "numberA2",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2053,
                    "end": 2061
                  },
                  "right": {
                    "type": "UnaryExpression",
                    "operator": "-",
                    "argument": {
                      "type": "Literal",
                      "value": 1,
                      "raw": "1",
                      "start": 2065,
                      "end": 2066
                    },
                    "prefix": true,
                    "start": 2064,
                    "end": 2066
                  },
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2053,
                  "end": 2066
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
                    "start": 2068,
                    "end": 2074
                  },
                  "right": {
                    "type": "Literal",
                    "value": "name",
                    "raw": "\"name\"",
                    "start": 2077,
                    "end": 2083
                  },
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2068,
                  "end": 2083
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
                    "start": 2085,
                    "end": 2092
                  },
                  "right": {
                    "type": "Literal",
                    "value": "skill",
                    "raw": "\"skill\"",
                    "start": 2095,
                    "end": 2102
                  },
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2085,
                  "end": 2102
                }
              ],
              "optional": false,
              "typeAnnotation": null,
              "start": 2052,
              "end": 2103
            },
            "init": {
              "type": "ArrayExpression",
              "elements": [
                {
                  "type": "Literal",
                  "value": 2,
                  "raw": "2",
                  "start": 2107,
                  "end": 2108
                },
                {
                  "type": "Literal",
                  "value": "trimmer",
                  "raw": "\"trimmer\"",
                  "start": 2110,
                  "end": 2119
                },
                {
                  "type": "Literal",
                  "value": "trimming",
                  "raw": "\"trimming\"",
                  "start": 2121,
                  "end": 2131
                }
              ],
              "start": 2106,
              "end": 2132
            },
            "definite": false,
            "start": 2052,
            "end": 2132
          },
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "i",
              "optional": false,
              "typeAnnotation": null,
              "start": 2134,
              "end": 2135
            },
            "init": {
              "type": "Literal",
              "value": 0,
              "raw": "0",
              "start": 2138,
              "end": 2139
            },
            "definite": false,
            "start": 2134,
            "end": 2139
          }
        ],
        "declare": false,
        "start": 2048,
        "end": 2139
      },
      "test": {
        "type": "BinaryExpression",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "i",
          "optional": false,
          "typeAnnotation": null,
          "start": 2141,
          "end": 2142
        },
        "operator": "<",
        "right": {
          "type": "Literal",
          "value": 1,
          "raw": "1",
          "start": 2145,
          "end": 2146
        },
        "start": 2141,
        "end": 2146
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
          "start": 2148,
          "end": 2149
        },
        "start": 2148,
        "end": 2151
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
                  "start": 2159,
                  "end": 2166
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "log",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2167,
                  "end": 2170
                },
                "optional": false,
                "computed": false,
                "start": 2159,
                "end": 2170
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "nameA2",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2171,
                  "end": 2177
                }
              ],
              "optional": false,
              "start": 2159,
              "end": 2178
            },
            "directive": null,
            "start": 2159,
            "end": 2179
          }
        ],
        "start": 2153,
        "end": 2181
      },
      "start": 2043,
      "end": 2181
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
                    "start": 2196,
                    "end": 2202
                  },
                  "right": {
                    "type": "Literal",
                    "value": "noName",
                    "raw": "\"noName\"",
                    "start": 2205,
                    "end": 2213
                  },
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2196,
                  "end": 2213
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
                          "start": 2237,
                          "end": 2250
                        },
                        "right": {
                          "type": "Literal",
                          "value": "primary",
                          "raw": "\"primary\"",
                          "start": 2253,
                          "end": 2262
                        },
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2237,
                        "end": 2262
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
                          "start": 2276,
                          "end": 2291
                        },
                        "right": {
                          "type": "Literal",
                          "value": "secondary",
                          "raw": "\"secondary\"",
                          "start": 2294,
                          "end": 2305
                        },
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2276,
                        "end": 2305
                      }
                    ],
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2223,
                    "end": 2315
                  },
                  "right": {
                    "type": "ArrayExpression",
                    "elements": [
                      {
                        "type": "Literal",
                        "value": "none",
                        "raw": "\"none\"",
                        "start": 2319,
                        "end": 2325
                      },
                      {
                        "type": "Literal",
                        "value": "none",
                        "raw": "\"none\"",
                        "start": 2327,
                        "end": 2333
                      }
                    ],
                    "start": 2318,
                    "end": 2334
                  },
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2223,
                  "end": 2334
                }
              ],
              "optional": false,
              "typeAnnotation": null,
              "start": 2195,
              "end": 2340
            },
            "init": {
              "type": "Identifier",
              "decorators": [],
              "name": "multiRobotA",
              "optional": false,
              "typeAnnotation": null,
              "start": 2343,
              "end": 2354
            },
            "definite": false,
            "start": 2195,
            "end": 2354
          },
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "i",
              "optional": false,
              "typeAnnotation": null,
              "start": 2356,
              "end": 2357
            },
            "init": {
              "type": "Literal",
              "value": 0,
              "raw": "0",
              "start": 2360,
              "end": 2361
            },
            "definite": false,
            "start": 2356,
            "end": 2361
          }
        ],
        "declare": false,
        "start": 2187,
        "end": 2361
      },
      "test": {
        "type": "BinaryExpression",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "i",
          "optional": false,
          "typeAnnotation": null,
          "start": 2363,
          "end": 2364
        },
        "operator": "<",
        "right": {
          "type": "Literal",
          "value": 1,
          "raw": "1",
          "start": 2367,
          "end": 2368
        },
        "start": 2363,
        "end": 2368
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
          "start": 2370,
          "end": 2371
        },
        "start": 2370,
        "end": 2373
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
                  "start": 2381,
                  "end": 2388
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "log",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2389,
                  "end": 2392
                },
                "optional": false,
                "computed": false,
                "start": 2381,
                "end": 2392
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "nameMA",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2393,
                  "end": 2399
                }
              ],
              "optional": false,
              "start": 2381,
              "end": 2400
            },
            "directive": null,
            "start": 2381,
            "end": 2401
          }
        ],
        "start": 2375,
        "end": 2403
      },
      "start": 2182,
      "end": 2403
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
                    "start": 2414,
                    "end": 2420
                  },
                  "right": {
                    "type": "Literal",
                    "value": "noName",
                    "raw": "\"noName\"",
                    "start": 2423,
                    "end": 2431
                  },
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2414,
                  "end": 2431
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
                          "start": 2447,
                          "end": 2460
                        },
                        "right": {
                          "type": "Literal",
                          "value": "primary",
                          "raw": "\"primary\"",
                          "start": 2463,
                          "end": 2472
                        },
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2447,
                        "end": 2472
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
                          "start": 2482,
                          "end": 2497
                        },
                        "right": {
                          "type": "Literal",
                          "value": "secondary",
                          "raw": "\"secondary\"",
                          "start": 2500,
                          "end": 2511
                        },
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2482,
                        "end": 2511
                      }
                    ],
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2437,
                    "end": 2517
                  },
                  "right": {
                    "type": "ArrayExpression",
                    "elements": [
                      {
                        "type": "Literal",
                        "value": "none",
                        "raw": "\"none\"",
                        "start": 2521,
                        "end": 2527
                      },
                      {
                        "type": "Literal",
                        "value": "none",
                        "raw": "\"none\"",
                        "start": 2529,
                        "end": 2535
                      }
                    ],
                    "start": 2520,
                    "end": 2536
                  },
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2437,
                  "end": 2536
                }
              ],
              "optional": false,
              "typeAnnotation": null,
              "start": 2413,
              "end": 2538
            },
            "init": {
              "type": "CallExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "getMultiRobot",
                "optional": false,
                "typeAnnotation": null,
                "start": 2542,
                "end": 2555
              },
              "typeArguments": null,
              "arguments": [],
              "optional": false,
              "start": 2542,
              "end": 2557
            },
            "definite": false,
            "start": 2413,
            "end": 2557
          },
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "i",
              "optional": false,
              "typeAnnotation": null,
              "start": 2559,
              "end": 2560
            },
            "init": {
              "type": "Literal",
              "value": 0,
              "raw": "0",
              "start": 2563,
              "end": 2564
            },
            "definite": false,
            "start": 2559,
            "end": 2564
          }
        ],
        "declare": false,
        "start": 2409,
        "end": 2564
      },
      "test": {
        "type": "BinaryExpression",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "i",
          "optional": false,
          "typeAnnotation": null,
          "start": 2566,
          "end": 2567
        },
        "operator": "<",
        "right": {
          "type": "Literal",
          "value": 1,
          "raw": "1",
          "start": 2570,
          "end": 2571
        },
        "start": 2566,
        "end": 2571
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
          "start": 2573,
          "end": 2574
        },
        "start": 2573,
        "end": 2576
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
                  "start": 2584,
                  "end": 2591
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "log",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2592,
                  "end": 2595
                },
                "optional": false,
                "computed": false,
                "start": 2584,
                "end": 2595
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "nameMA",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2596,
                  "end": 2602
                }
              ],
              "optional": false,
              "start": 2584,
              "end": 2603
            },
            "directive": null,
            "start": 2584,
            "end": 2604
          }
        ],
        "start": 2578,
        "end": 2606
      },
      "start": 2404,
      "end": 2606
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
                    "start": 2617,
                    "end": 2623
                  },
                  "right": {
                    "type": "Literal",
                    "value": "noName",
                    "raw": "\"noName\"",
                    "start": 2626,
                    "end": 2634
                  },
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2617,
                  "end": 2634
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
                          "start": 2650,
                          "end": 2663
                        },
                        "right": {
                          "type": "Literal",
                          "value": "primary",
                          "raw": "\"primary\"",
                          "start": 2666,
                          "end": 2675
                        },
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2650,
                        "end": 2675
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
                          "start": 2685,
                          "end": 2700
                        },
                        "right": {
                          "type": "Literal",
                          "value": "secondary",
                          "raw": "\"secondary\"",
                          "start": 2703,
                          "end": 2714
                        },
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2685,
                        "end": 2714
                      }
                    ],
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2640,
                    "end": 2720
                  },
                  "right": {
                    "type": "ArrayExpression",
                    "elements": [
                      {
                        "type": "Literal",
                        "value": "none",
                        "raw": "\"none\"",
                        "start": 2724,
                        "end": 2730
                      },
                      {
                        "type": "Literal",
                        "value": "none",
                        "raw": "\"none\"",
                        "start": 2732,
                        "end": 2738
                      }
                    ],
                    "start": 2723,
                    "end": 2739
                  },
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2640,
                  "end": 2739
                }
              ],
              "optional": false,
              "typeAnnotation": null,
              "start": 2616,
              "end": 2741
            },
            "init": {
              "type": "ArrayExpression",
              "elements": [
                {
                  "type": "Literal",
                  "value": "trimmer",
                  "raw": "\"trimmer\"",
                  "start": 2746,
                  "end": 2755
                },
                {
                  "type": "ArrayExpression",
                  "elements": [
                    {
                      "type": "Literal",
                      "value": "trimming",
                      "raw": "\"trimming\"",
                      "start": 2758,
                      "end": 2768
                    },
                    {
                      "type": "Literal",
                      "value": "edging",
                      "raw": "\"edging\"",
                      "start": 2770,
                      "end": 2778
                    }
                  ],
                  "start": 2757,
                  "end": 2779
                }
              ],
              "start": 2745,
              "end": 2780
            },
            "definite": false,
            "start": 2616,
            "end": 2780
          },
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "i",
              "optional": false,
              "typeAnnotation": null,
              "start": 2782,
              "end": 2783
            },
            "init": {
              "type": "Literal",
              "value": 0,
              "raw": "0",
              "start": 2786,
              "end": 2787
            },
            "definite": false,
            "start": 2782,
            "end": 2787
          }
        ],
        "declare": false,
        "start": 2612,
        "end": 2787
      },
      "test": {
        "type": "BinaryExpression",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "i",
          "optional": false,
          "typeAnnotation": null,
          "start": 2789,
          "end": 2790
        },
        "operator": "<",
        "right": {
          "type": "Literal",
          "value": 1,
          "raw": "1",
          "start": 2793,
          "end": 2794
        },
        "start": 2789,
        "end": 2794
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
          "start": 2796,
          "end": 2797
        },
        "start": 2796,
        "end": 2799
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
                  "start": 2807,
                  "end": 2814
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "log",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2815,
                  "end": 2818
                },
                "optional": false,
                "computed": false,
                "start": 2807,
                "end": 2818
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "nameMA",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2819,
                  "end": 2825
                }
              ],
              "optional": false,
              "start": 2807,
              "end": 2826
            },
            "directive": null,
            "start": 2807,
            "end": 2827
          }
        ],
        "start": 2801,
        "end": 2829
      },
      "start": 2607,
      "end": 2829
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
                    "name": "numberA3",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2841,
                    "end": 2849
                  },
                  "right": {
                    "type": "UnaryExpression",
                    "operator": "-",
                    "argument": {
                      "type": "Literal",
                      "value": 1,
                      "raw": "1",
                      "start": 2853,
                      "end": 2854
                    },
                    "prefix": true,
                    "start": 2852,
                    "end": 2854
                  },
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2841,
                  "end": 2854
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
                    "start": 2859,
                    "end": 2869
                  },
                  "optional": false,
                  "typeAnnotation": null,
                  "value": null,
                  "start": 2856,
                  "end": 2869
                }
              ],
              "optional": false,
              "typeAnnotation": null,
              "start": 2840,
              "end": 2870
            },
            "init": {
              "type": "Identifier",
              "decorators": [],
              "name": "robotA",
              "optional": false,
              "typeAnnotation": null,
              "start": 2873,
              "end": 2879
            },
            "definite": false,
            "start": 2840,
            "end": 2879
          },
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "i",
              "optional": false,
              "typeAnnotation": null,
              "start": 2881,
              "end": 2882
            },
            "init": {
              "type": "Literal",
              "value": 0,
              "raw": "0",
              "start": 2885,
              "end": 2886
            },
            "definite": false,
            "start": 2881,
            "end": 2886
          }
        ],
        "declare": false,
        "start": 2836,
        "end": 2886
      },
      "test": {
        "type": "BinaryExpression",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "i",
          "optional": false,
          "typeAnnotation": null,
          "start": 2888,
          "end": 2889
        },
        "operator": "<",
        "right": {
          "type": "Literal",
          "value": 1,
          "raw": "1",
          "start": 2892,
          "end": 2893
        },
        "start": 2888,
        "end": 2893
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
          "start": 2895,
          "end": 2896
        },
        "start": 2895,
        "end": 2898
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
                  "start": 2906,
                  "end": 2913
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "log",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2914,
                  "end": 2917
                },
                "optional": false,
                "computed": false,
                "start": 2906,
                "end": 2917
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "numberA3",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2918,
                  "end": 2926
                }
              ],
              "optional": false,
              "start": 2906,
              "end": 2927
            },
            "directive": null,
            "start": 2906,
            "end": 2928
          }
        ],
        "start": 2900,
        "end": 2930
      },
      "start": 2831,
      "end": 2930
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
                    "name": "numberA3",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2941,
                    "end": 2949
                  },
                  "right": {
                    "type": "UnaryExpression",
                    "operator": "-",
                    "argument": {
                      "type": "Literal",
                      "value": 1,
                      "raw": "1",
                      "start": 2953,
                      "end": 2954
                    },
                    "prefix": true,
                    "start": 2952,
                    "end": 2954
                  },
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2941,
                  "end": 2954
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
                    "start": 2959,
                    "end": 2969
                  },
                  "optional": false,
                  "typeAnnotation": null,
                  "value": null,
                  "start": 2956,
                  "end": 2969
                }
              ],
              "optional": false,
              "typeAnnotation": null,
              "start": 2940,
              "end": 2970
            },
            "init": {
              "type": "CallExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "getRobot",
                "optional": false,
                "typeAnnotation": null,
                "start": 2973,
                "end": 2981
              },
              "typeArguments": null,
              "arguments": [],
              "optional": false,
              "start": 2973,
              "end": 2983
            },
            "definite": false,
            "start": 2940,
            "end": 2983
          },
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "i",
              "optional": false,
              "typeAnnotation": null,
              "start": 2985,
              "end": 2986
            },
            "init": {
              "type": "Literal",
              "value": 0,
              "raw": "0",
              "start": 2989,
              "end": 2990
            },
            "definite": false,
            "start": 2985,
            "end": 2990
          }
        ],
        "declare": false,
        "start": 2936,
        "end": 2990
      },
      "test": {
        "type": "BinaryExpression",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "i",
          "optional": false,
          "typeAnnotation": null,
          "start": 2992,
          "end": 2993
        },
        "operator": "<",
        "right": {
          "type": "Literal",
          "value": 1,
          "raw": "1",
          "start": 2996,
          "end": 2997
        },
        "start": 2992,
        "end": 2997
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
          "start": 2999,
          "end": 3000
        },
        "start": 2999,
        "end": 3002
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
                  "start": 3010,
                  "end": 3017
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "log",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 3018,
                  "end": 3021
                },
                "optional": false,
                "computed": false,
                "start": 3010,
                "end": 3021
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "numberA3",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 3022,
                  "end": 3030
                }
              ],
              "optional": false,
              "start": 3010,
              "end": 3031
            },
            "directive": null,
            "start": 3010,
            "end": 3032
          }
        ],
        "start": 3004,
        "end": 3034
      },
      "start": 2931,
      "end": 3034
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
                    "name": "numberA3",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 3045,
                    "end": 3053
                  },
                  "right": {
                    "type": "UnaryExpression",
                    "operator": "-",
                    "argument": {
                      "type": "Literal",
                      "value": 1,
                      "raw": "1",
                      "start": 3057,
                      "end": 3058
                    },
                    "prefix": true,
                    "start": 3056,
                    "end": 3058
                  },
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 3045,
                  "end": 3058
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
                    "start": 3063,
                    "end": 3073
                  },
                  "optional": false,
                  "typeAnnotation": null,
                  "value": null,
                  "start": 3060,
                  "end": 3073
                }
              ],
              "optional": false,
              "typeAnnotation": null,
              "start": 3044,
              "end": 3074
            },
            "init": {
              "type": "ArrayExpression",
              "elements": [
                {
                  "type": "Literal",
                  "value": 2,
                  "raw": "2",
                  "start": 3078,
                  "end": 3079
                },
                {
                  "type": "Literal",
                  "value": "trimmer",
                  "raw": "\"trimmer\"",
                  "start": 3081,
                  "end": 3090
                },
                {
                  "type": "Literal",
                  "value": "trimming",
                  "raw": "\"trimming\"",
                  "start": 3092,
                  "end": 3102
                }
              ],
              "start": 3077,
              "end": 3103
            },
            "definite": false,
            "start": 3044,
            "end": 3103
          },
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "i",
              "optional": false,
              "typeAnnotation": null,
              "start": 3105,
              "end": 3106
            },
            "init": {
              "type": "Literal",
              "value": 0,
              "raw": "0",
              "start": 3109,
              "end": 3110
            },
            "definite": false,
            "start": 3105,
            "end": 3110
          }
        ],
        "declare": false,
        "start": 3040,
        "end": 3110
      },
      "test": {
        "type": "BinaryExpression",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "i",
          "optional": false,
          "typeAnnotation": null,
          "start": 3112,
          "end": 3113
        },
        "operator": "<",
        "right": {
          "type": "Literal",
          "value": 1,
          "raw": "1",
          "start": 3116,
          "end": 3117
        },
        "start": 3112,
        "end": 3117
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
          "start": 3119,
          "end": 3120
        },
        "start": 3119,
        "end": 3122
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
                  "start": 3130,
                  "end": 3137
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "log",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 3138,
                  "end": 3141
                },
                "optional": false,
                "computed": false,
                "start": 3130,
                "end": 3141
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "numberA3",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 3142,
                  "end": 3150
                }
              ],
              "optional": false,
              "start": 3130,
              "end": 3151
            },
            "directive": null,
            "start": 3130,
            "end": 3152
          }
        ],
        "start": 3124,
        "end": 3154
      },
      "start": 3035,
      "end": 3154
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 3154
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
    "type": "Identifier",
    "value": "string",
    "start": 123,
    "end": 129
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 129,
    "end": 130
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 130,
    "end": 131
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 131,
    "end": 132
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 132,
    "end": 133
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 135,
    "end": 138
  },
  {
    "type": "Identifier",
    "value": "robotA",
    "start": 139,
    "end": 145
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 145,
    "end": 146
  },
  {
    "type": "Identifier",
    "value": "Robot",
    "start": 147,
    "end": 152
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 153,
    "end": 154
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 155,
    "end": 156
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 156,
    "end": 157
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 157,
    "end": 158
  },
  {
    "type": "String",
    "value": "\"mower\"",
    "start": 159,
    "end": 166
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 166,
    "end": 167
  },
  {
    "type": "String",
    "value": "\"mowing\"",
    "start": 168,
    "end": 176
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 176,
    "end": 177
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 177,
    "end": 178
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 179,
    "end": 187
  },
  {
    "type": "Identifier",
    "value": "getRobot",
    "start": 188,
    "end": 196
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 196,
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
    "value": "return",
    "start": 205,
    "end": 211
  },
  {
    "type": "Identifier",
    "value": "robotA",
    "start": 212,
    "end": 218
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 218,
    "end": 219
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 220,
    "end": 221
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 223,
    "end": 226
  },
  {
    "type": "Identifier",
    "value": "multiRobotA",
    "start": 227,
    "end": 238
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 238,
    "end": 239
  },
  {
    "type": "Identifier",
    "value": "MultiSkilledRobot",
    "start": 240,
    "end": 257
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 258,
    "end": 259
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 260,
    "end": 261
  },
  {
    "type": "String",
    "value": "\"mower\"",
    "start": 261,
    "end": 268
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 268,
    "end": 269
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 270,
    "end": 271
  },
  {
    "type": "String",
    "value": "\"mowing\"",
    "start": 271,
    "end": 279
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 279,
    "end": 280
  },
  {
    "type": "String",
    "value": "\"\"",
    "start": 281,
    "end": 283
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 283,
    "end": 284
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 284,
    "end": 285
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 285,
    "end": 286
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 287,
    "end": 290
  },
  {
    "type": "Identifier",
    "value": "multiRobotB",
    "start": 291,
    "end": 302
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 302,
    "end": 303
  },
  {
    "type": "Identifier",
    "value": "MultiSkilledRobot",
    "start": 304,
    "end": 321
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 322,
    "end": 323
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 324,
    "end": 325
  },
  {
    "type": "String",
    "value": "\"trimmer\"",
    "start": 325,
    "end": 334
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 334,
    "end": 335
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 336,
    "end": 337
  },
  {
    "type": "String",
    "value": "\"trimming\"",
    "start": 337,
    "end": 347
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 347,
    "end": 348
  },
  {
    "type": "String",
    "value": "\"edging\"",
    "start": 349,
    "end": 357
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 357,
    "end": 358
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 358,
    "end": 359
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 359,
    "end": 360
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 361,
    "end": 369
  },
  {
    "type": "Identifier",
    "value": "getMultiRobot",
    "start": 370,
    "end": 383
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 383,
    "end": 384
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 384,
    "end": 385
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 386,
    "end": 387
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 392,
    "end": 398
  },
  {
    "type": "Identifier",
    "value": "multiRobotA",
    "start": 399,
    "end": 410
  },
  {
    "type": "Punctuator",
    "value": ";",
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
    "value": "for",
    "start": 415,
    "end": 418
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 419,
    "end": 420
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 420,
    "end": 423
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 424,
    "end": 425
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 425,
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
    "value": "=",
    "start": 433,
    "end": 434
  },
  {
    "type": "String",
    "value": "\"name\"",
    "start": 434,
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
    "value": "=",
    "start": 517,
    "end": 518
  },
  {
    "type": "String",
    "value": "\"name\"",
    "start": 519,
    "end": 525
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 525,
    "end": 526
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 527,
    "end": 528
  },
  {
    "type": "Identifier",
    "value": "getRobot",
    "start": 529,
    "end": 537
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 537,
    "end": 538
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 538,
    "end": 539
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 539,
    "end": 540
  },
  {
    "type": "Identifier",
    "value": "i",
    "start": 541,
    "end": 542
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 543,
    "end": 544
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 545,
    "end": 546
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 546,
    "end": 547
  },
  {
    "type": "Identifier",
    "value": "i",
    "start": 548,
    "end": 549
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 550,
    "end": 551
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 552,
    "end": 553
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 553,
    "end": 554
  },
  {
    "type": "Identifier",
    "value": "i",
    "start": 555,
    "end": 556
  },
  {
    "type": "Punctuator",
    "value": "++",
    "start": 556,
    "end": 558
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 558,
    "end": 559
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 560,
    "end": 561
  },
  {
    "type": "Identifier",
    "value": "console",
    "start": 566,
    "end": 573
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 573,
    "end": 574
  },
  {
    "type": "Identifier",
    "value": "log",
    "start": 574,
    "end": 577
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 577,
    "end": 578
  },
  {
    "type": "Identifier",
    "value": "nameA",
    "start": 578,
    "end": 583
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 583,
    "end": 584
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 584,
    "end": 585
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 586,
    "end": 587
  },
  {
    "type": "Keyword",
    "value": "for",
    "start": 588,
    "end": 591
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 592,
    "end": 593
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 593,
    "end": 596
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 597,
    "end": 598
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 598,
    "end": 599
  },
  {
    "type": "Identifier",
    "value": "nameA",
    "start": 600,
    "end": 605
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 606,
    "end": 607
  },
  {
    "type": "String",
    "value": "\"name\"",
    "start": 608,
    "end": 614
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 614,
    "end": 615
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 616,
    "end": 617
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 618,
    "end": 619
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 619,
    "end": 620
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 620,
    "end": 621
  },
  {
    "type": "String",
    "value": "\"trimmer\"",
    "start": 622,
    "end": 631
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 631,
    "end": 632
  },
  {
    "type": "String",
    "value": "\"trimming\"",
    "start": 633,
    "end": 643
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 643,
    "end": 644
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 644,
    "end": 645
  },
  {
    "type": "Identifier",
    "value": "i",
    "start": 646,
    "end": 647
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 648,
    "end": 649
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 650,
    "end": 651
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 651,
    "end": 652
  },
  {
    "type": "Identifier",
    "value": "i",
    "start": 653,
    "end": 654
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 655,
    "end": 656
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 657,
    "end": 658
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 658,
    "end": 659
  },
  {
    "type": "Identifier",
    "value": "i",
    "start": 660,
    "end": 661
  },
  {
    "type": "Punctuator",
    "value": "++",
    "start": 661,
    "end": 663
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 663,
    "end": 664
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 665,
    "end": 666
  },
  {
    "type": "Identifier",
    "value": "console",
    "start": 671,
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
    "value": "log",
    "start": 679,
    "end": 682
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 682,
    "end": 683
  },
  {
    "type": "Identifier",
    "value": "nameA",
    "start": 683,
    "end": 688
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 688,
    "end": 689
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 689,
    "end": 690
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 691,
    "end": 692
  },
  {
    "type": "Keyword",
    "value": "for",
    "start": 693,
    "end": 696
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 697,
    "end": 698
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 698,
    "end": 701
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 702,
    "end": 703
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 703,
    "end": 704
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 705,
    "end": 706
  },
  {
    "type": "Identifier",
    "value": "primarySkillA",
    "start": 711,
    "end": 724
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 725,
    "end": 726
  },
  {
    "type": "String",
    "value": "\"primary\"",
    "start": 727,
    "end": 736
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 736,
    "end": 737
  },
  {
    "type": "Identifier",
    "value": "secondarySkillA",
    "start": 742,
    "end": 757
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 758,
    "end": 759
  },
  {
    "type": "String",
    "value": "\"secondary\"",
    "start": 760,
    "end": 771
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 772,
    "end": 773
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 774,
    "end": 775
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 776,
    "end": 777
  },
  {
    "type": "String",
    "value": "\"none\"",
    "start": 777,
    "end": 783
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 783,
    "end": 784
  },
  {
    "type": "String",
    "value": "\"none\"",
    "start": 785,
    "end": 791
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 791,
    "end": 792
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 792,
    "end": 793
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 794,
    "end": 795
  },
  {
    "type": "Identifier",
    "value": "multiRobotA",
    "start": 796,
    "end": 807
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 807,
    "end": 808
  },
  {
    "type": "Identifier",
    "value": "i",
    "start": 809,
    "end": 810
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 811,
    "end": 812
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 813,
    "end": 814
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 814,
    "end": 815
  },
  {
    "type": "Identifier",
    "value": "i",
    "start": 816,
    "end": 817
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 818,
    "end": 819
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 820,
    "end": 821
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 821,
    "end": 822
  },
  {
    "type": "Identifier",
    "value": "i",
    "start": 823,
    "end": 824
  },
  {
    "type": "Punctuator",
    "value": "++",
    "start": 824,
    "end": 826
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 826,
    "end": 827
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 828,
    "end": 829
  },
  {
    "type": "Identifier",
    "value": "console",
    "start": 834,
    "end": 841
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 841,
    "end": 842
  },
  {
    "type": "Identifier",
    "value": "log",
    "start": 842,
    "end": 845
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 845,
    "end": 846
  },
  {
    "type": "Identifier",
    "value": "primarySkillA",
    "start": 846,
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
    "type": "Keyword",
    "value": "let",
    "start": 869,
    "end": 872
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 873,
    "end": 874
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 874,
    "end": 875
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 876,
    "end": 877
  },
  {
    "type": "Identifier",
    "value": "primarySkillA",
    "start": 882,
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
    "value": "\"primary\"",
    "start": 898,
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
    "value": "secondarySkillA",
    "start": 913,
    "end": 928
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 929,
    "end": 930
  },
  {
    "type": "String",
    "value": "\"secondary\"",
    "start": 931,
    "end": 942
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 943,
    "end": 944
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 945,
    "end": 946
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 947,
    "end": 948
  },
  {
    "type": "String",
    "value": "\"none\"",
    "start": 948,
    "end": 954
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 954,
    "end": 955
  },
  {
    "type": "String",
    "value": "\"none\"",
    "start": 956,
    "end": 962
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 962,
    "end": 963
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 963,
    "end": 964
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 965,
    "end": 966
  },
  {
    "type": "Identifier",
    "value": "getMultiRobot",
    "start": 967,
    "end": 980
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 980,
    "end": 981
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 981,
    "end": 982
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 982,
    "end": 983
  },
  {
    "type": "Identifier",
    "value": "i",
    "start": 984,
    "end": 985
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 986,
    "end": 987
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 988,
    "end": 989
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 989,
    "end": 990
  },
  {
    "type": "Identifier",
    "value": "i",
    "start": 991,
    "end": 992
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 993,
    "end": 994
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 995,
    "end": 996
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 996,
    "end": 997
  },
  {
    "type": "Identifier",
    "value": "i",
    "start": 998,
    "end": 999
  },
  {
    "type": "Punctuator",
    "value": "++",
    "start": 999,
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
    "value": "{",
    "start": 1003,
    "end": 1004
  },
  {
    "type": "Identifier",
    "value": "console",
    "start": 1009,
    "end": 1016
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1016,
    "end": 1017
  },
  {
    "type": "Identifier",
    "value": "log",
    "start": 1017,
    "end": 1020
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1020,
    "end": 1021
  },
  {
    "type": "Identifier",
    "value": "primarySkillA",
    "start": 1021,
    "end": 1034
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1034,
    "end": 1035
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1035,
    "end": 1036
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1037,
    "end": 1038
  },
  {
    "type": "Keyword",
    "value": "for",
    "start": 1039,
    "end": 1042
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1043,
    "end": 1044
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 1044,
    "end": 1047
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1048,
    "end": 1049
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1049,
    "end": 1050
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1051,
    "end": 1052
  },
  {
    "type": "Identifier",
    "value": "primarySkillA",
    "start": 1057,
    "end": 1070
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1071,
    "end": 1072
  },
  {
    "type": "String",
    "value": "\"primary\"",
    "start": 1073,
    "end": 1082
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1082,
    "end": 1083
  },
  {
    "type": "Identifier",
    "value": "secondarySkillA",
    "start": 1088,
    "end": 1103
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1104,
    "end": 1105
  },
  {
    "type": "String",
    "value": "\"secondary\"",
    "start": 1106,
    "end": 1117
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1118,
    "end": 1119
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1120,
    "end": 1121
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1122,
    "end": 1123
  },
  {
    "type": "String",
    "value": "\"none\"",
    "start": 1123,
    "end": 1129
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1129,
    "end": 1130
  },
  {
    "type": "String",
    "value": "\"none\"",
    "start": 1131,
    "end": 1137
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1137,
    "end": 1138
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1138,
    "end": 1139
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1140,
    "end": 1141
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1142,
    "end": 1143
  },
  {
    "type": "String",
    "value": "\"trimmer\"",
    "start": 1143,
    "end": 1152
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1152,
    "end": 1153
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1154,
    "end": 1155
  },
  {
    "type": "String",
    "value": "\"trimming\"",
    "start": 1155,
    "end": 1165
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1165,
    "end": 1166
  },
  {
    "type": "String",
    "value": "\"edging\"",
    "start": 1167,
    "end": 1175
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1175,
    "end": 1176
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1176,
    "end": 1177
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1177,
    "end": 1178
  },
  {
    "type": "Identifier",
    "value": "i",
    "start": 1179,
    "end": 1180
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1181,
    "end": 1182
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 1183,
    "end": 1184
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1184,
    "end": 1185
  },
  {
    "type": "Identifier",
    "value": "i",
    "start": 1186,
    "end": 1187
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1188,
    "end": 1189
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 1190,
    "end": 1191
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1191,
    "end": 1192
  },
  {
    "type": "Identifier",
    "value": "i",
    "start": 1193,
    "end": 1194
  },
  {
    "type": "Punctuator",
    "value": "++",
    "start": 1194,
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
    "value": "{",
    "start": 1198,
    "end": 1199
  },
  {
    "type": "Identifier",
    "value": "console",
    "start": 1204,
    "end": 1211
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1211,
    "end": 1212
  },
  {
    "type": "Identifier",
    "value": "log",
    "start": 1212,
    "end": 1215
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1215,
    "end": 1216
  },
  {
    "type": "Identifier",
    "value": "primarySkillA",
    "start": 1216,
    "end": 1229
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1229,
    "end": 1230
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1230,
    "end": 1231
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1232,
    "end": 1233
  },
  {
    "type": "Keyword",
    "value": "for",
    "start": 1235,
    "end": 1238
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1239,
    "end": 1240
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 1240,
    "end": 1243
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1244,
    "end": 1245
  },
  {
    "type": "Identifier",
    "value": "numberB",
    "start": 1245,
    "end": 1252
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1253,
    "end": 1254
  },
  {
    "type": "Punctuator",
    "value": "-",
    "start": 1255,
    "end": 1256
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 1256,
    "end": 1257
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1257,
    "end": 1258
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1259,
    "end": 1260
  },
  {
    "type": "Identifier",
    "value": "robotA",
    "start": 1261,
    "end": 1267
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1267,
    "end": 1268
  },
  {
    "type": "Identifier",
    "value": "i",
    "start": 1269,
    "end": 1270
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1271,
    "end": 1272
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 1273,
    "end": 1274
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1274,
    "end": 1275
  },
  {
    "type": "Identifier",
    "value": "i",
    "start": 1276,
    "end": 1277
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1278,
    "end": 1279
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 1280,
    "end": 1281
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1281,
    "end": 1282
  },
  {
    "type": "Identifier",
    "value": "i",
    "start": 1283,
    "end": 1284
  },
  {
    "type": "Punctuator",
    "value": "++",
    "start": 1284,
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
    "value": "{",
    "start": 1288,
    "end": 1289
  },
  {
    "type": "Identifier",
    "value": "console",
    "start": 1294,
    "end": 1301
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1301,
    "end": 1302
  },
  {
    "type": "Identifier",
    "value": "log",
    "start": 1302,
    "end": 1305
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1305,
    "end": 1306
  },
  {
    "type": "Identifier",
    "value": "numberB",
    "start": 1306,
    "end": 1313
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1313,
    "end": 1314
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1314,
    "end": 1315
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1316,
    "end": 1317
  },
  {
    "type": "Keyword",
    "value": "for",
    "start": 1318,
    "end": 1321
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1322,
    "end": 1323
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 1323,
    "end": 1326
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1327,
    "end": 1328
  },
  {
    "type": "Identifier",
    "value": "numberB",
    "start": 1328,
    "end": 1335
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1336,
    "end": 1337
  },
  {
    "type": "Punctuator",
    "value": "-",
    "start": 1338,
    "end": 1339
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 1339,
    "end": 1340
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1340,
    "end": 1341
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1342,
    "end": 1343
  },
  {
    "type": "Identifier",
    "value": "getRobot",
    "start": 1344,
    "end": 1352
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1352,
    "end": 1353
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1353,
    "end": 1354
  },
  {
    "type": "Punctuator",
    "value": ",",
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
    "value": "=",
    "start": 1358,
    "end": 1359
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 1360,
    "end": 1361
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1361,
    "end": 1362
  },
  {
    "type": "Identifier",
    "value": "i",
    "start": 1363,
    "end": 1364
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1365,
    "end": 1366
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 1367,
    "end": 1368
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1368,
    "end": 1369
  },
  {
    "type": "Identifier",
    "value": "i",
    "start": 1370,
    "end": 1371
  },
  {
    "type": "Punctuator",
    "value": "++",
    "start": 1371,
    "end": 1373
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1373,
    "end": 1374
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1375,
    "end": 1376
  },
  {
    "type": "Identifier",
    "value": "console",
    "start": 1381,
    "end": 1388
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1388,
    "end": 1389
  },
  {
    "type": "Identifier",
    "value": "log",
    "start": 1389,
    "end": 1392
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1392,
    "end": 1393
  },
  {
    "type": "Identifier",
    "value": "numberB",
    "start": 1393,
    "end": 1400
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1400,
    "end": 1401
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1401,
    "end": 1402
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1403,
    "end": 1404
  },
  {
    "type": "Keyword",
    "value": "for",
    "start": 1405,
    "end": 1408
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1409,
    "end": 1410
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 1410,
    "end": 1413
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1414,
    "end": 1415
  },
  {
    "type": "Identifier",
    "value": "numberB",
    "start": 1415,
    "end": 1422
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1423,
    "end": 1424
  },
  {
    "type": "Punctuator",
    "value": "-",
    "start": 1425,
    "end": 1426
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 1426,
    "end": 1427
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1427,
    "end": 1428
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1429,
    "end": 1430
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1431,
    "end": 1432
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 1432,
    "end": 1433
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1433,
    "end": 1434
  },
  {
    "type": "String",
    "value": "\"trimmer\"",
    "start": 1435,
    "end": 1444
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1444,
    "end": 1445
  },
  {
    "type": "String",
    "value": "\"trimming\"",
    "start": 1446,
    "end": 1456
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1456,
    "end": 1457
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1457,
    "end": 1458
  },
  {
    "type": "Identifier",
    "value": "i",
    "start": 1459,
    "end": 1460
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1461,
    "end": 1462
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 1463,
    "end": 1464
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1464,
    "end": 1465
  },
  {
    "type": "Identifier",
    "value": "i",
    "start": 1466,
    "end": 1467
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1468,
    "end": 1469
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 1470,
    "end": 1471
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1471,
    "end": 1472
  },
  {
    "type": "Identifier",
    "value": "i",
    "start": 1473,
    "end": 1474
  },
  {
    "type": "Punctuator",
    "value": "++",
    "start": 1474,
    "end": 1476
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1476,
    "end": 1477
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1478,
    "end": 1479
  },
  {
    "type": "Identifier",
    "value": "console",
    "start": 1484,
    "end": 1491
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1491,
    "end": 1492
  },
  {
    "type": "Identifier",
    "value": "log",
    "start": 1492,
    "end": 1495
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1495,
    "end": 1496
  },
  {
    "type": "Identifier",
    "value": "numberB",
    "start": 1496,
    "end": 1503
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1503,
    "end": 1504
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1504,
    "end": 1505
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1506,
    "end": 1507
  },
  {
    "type": "Keyword",
    "value": "for",
    "start": 1508,
    "end": 1511
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1512,
    "end": 1513
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 1513,
    "end": 1516
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1517,
    "end": 1518
  },
  {
    "type": "Identifier",
    "value": "nameB",
    "start": 1518,
    "end": 1523
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1524,
    "end": 1525
  },
  {
    "type": "String",
    "value": "\"name\"",
    "start": 1526,
    "end": 1532
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1532,
    "end": 1533
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1534,
    "end": 1535
  },
  {
    "type": "Identifier",
    "value": "multiRobotA",
    "start": 1536,
    "end": 1547
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1547,
    "end": 1548
  },
  {
    "type": "Identifier",
    "value": "i",
    "start": 1549,
    "end": 1550
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1551,
    "end": 1552
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 1553,
    "end": 1554
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1554,
    "end": 1555
  },
  {
    "type": "Identifier",
    "value": "i",
    "start": 1556,
    "end": 1557
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1558,
    "end": 1559
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 1560,
    "end": 1561
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1561,
    "end": 1562
  },
  {
    "type": "Identifier",
    "value": "i",
    "start": 1563,
    "end": 1564
  },
  {
    "type": "Punctuator",
    "value": "++",
    "start": 1564,
    "end": 1566
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1566,
    "end": 1567
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1568,
    "end": 1569
  },
  {
    "type": "Identifier",
    "value": "console",
    "start": 1574,
    "end": 1581
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1581,
    "end": 1582
  },
  {
    "type": "Identifier",
    "value": "log",
    "start": 1582,
    "end": 1585
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1585,
    "end": 1586
  },
  {
    "type": "Identifier",
    "value": "nameB",
    "start": 1586,
    "end": 1591
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1591,
    "end": 1592
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1592,
    "end": 1593
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1594,
    "end": 1595
  },
  {
    "type": "Keyword",
    "value": "for",
    "start": 1596,
    "end": 1599
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1600,
    "end": 1601
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 1601,
    "end": 1604
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1605,
    "end": 1606
  },
  {
    "type": "Identifier",
    "value": "nameB",
    "start": 1606,
    "end": 1611
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1612,
    "end": 1613
  },
  {
    "type": "String",
    "value": "\"name\"",
    "start": 1614,
    "end": 1620
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1620,
    "end": 1621
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1622,
    "end": 1623
  },
  {
    "type": "Identifier",
    "value": "getMultiRobot",
    "start": 1624,
    "end": 1637
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1637,
    "end": 1638
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1638,
    "end": 1639
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1639,
    "end": 1640
  },
  {
    "type": "Identifier",
    "value": "i",
    "start": 1641,
    "end": 1642
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1643,
    "end": 1644
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 1645,
    "end": 1646
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1646,
    "end": 1647
  },
  {
    "type": "Identifier",
    "value": "i",
    "start": 1648,
    "end": 1649
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1650,
    "end": 1651
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 1652,
    "end": 1653
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1653,
    "end": 1654
  },
  {
    "type": "Identifier",
    "value": "i",
    "start": 1655,
    "end": 1656
  },
  {
    "type": "Punctuator",
    "value": "++",
    "start": 1656,
    "end": 1658
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1658,
    "end": 1659
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1660,
    "end": 1661
  },
  {
    "type": "Identifier",
    "value": "console",
    "start": 1666,
    "end": 1673
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1673,
    "end": 1674
  },
  {
    "type": "Identifier",
    "value": "log",
    "start": 1674,
    "end": 1677
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1677,
    "end": 1678
  },
  {
    "type": "Identifier",
    "value": "nameB",
    "start": 1678,
    "end": 1683
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1683,
    "end": 1684
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1684,
    "end": 1685
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1686,
    "end": 1687
  },
  {
    "type": "Keyword",
    "value": "for",
    "start": 1688,
    "end": 1691
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1692,
    "end": 1693
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 1693,
    "end": 1696
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1697,
    "end": 1698
  },
  {
    "type": "Identifier",
    "value": "nameB",
    "start": 1698,
    "end": 1703
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1704,
    "end": 1705
  },
  {
    "type": "String",
    "value": "\"name\"",
    "start": 1706,
    "end": 1712
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1712,
    "end": 1713
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1714,
    "end": 1715
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1716,
    "end": 1717
  },
  {
    "type": "String",
    "value": "\"trimmer\"",
    "start": 1717,
    "end": 1726
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1726,
    "end": 1727
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1728,
    "end": 1729
  },
  {
    "type": "String",
    "value": "\"trimming\"",
    "start": 1729,
    "end": 1739
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1739,
    "end": 1740
  },
  {
    "type": "String",
    "value": "\"edging\"",
    "start": 1741,
    "end": 1749
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1749,
    "end": 1750
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1750,
    "end": 1751
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1751,
    "end": 1752
  },
  {
    "type": "Identifier",
    "value": "i",
    "start": 1753,
    "end": 1754
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1755,
    "end": 1756
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 1757,
    "end": 1758
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1758,
    "end": 1759
  },
  {
    "type": "Identifier",
    "value": "i",
    "start": 1760,
    "end": 1761
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1762,
    "end": 1763
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 1764,
    "end": 1765
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1765,
    "end": 1766
  },
  {
    "type": "Identifier",
    "value": "i",
    "start": 1767,
    "end": 1768
  },
  {
    "type": "Punctuator",
    "value": "++",
    "start": 1768,
    "end": 1770
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1770,
    "end": 1771
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1772,
    "end": 1773
  },
  {
    "type": "Identifier",
    "value": "console",
    "start": 1778,
    "end": 1785
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1785,
    "end": 1786
  },
  {
    "type": "Identifier",
    "value": "log",
    "start": 1786,
    "end": 1789
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1789,
    "end": 1790
  },
  {
    "type": "Identifier",
    "value": "nameB",
    "start": 1790,
    "end": 1795
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1795,
    "end": 1796
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1796,
    "end": 1797
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1798,
    "end": 1799
  },
  {
    "type": "Keyword",
    "value": "for",
    "start": 1801,
    "end": 1804
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1805,
    "end": 1806
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 1806,
    "end": 1809
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1810,
    "end": 1811
  },
  {
    "type": "Identifier",
    "value": "numberA2",
    "start": 1811,
    "end": 1819
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1820,
    "end": 1821
  },
  {
    "type": "Punctuator",
    "value": "-",
    "start": 1822,
    "end": 1823
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 1823,
    "end": 1824
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1824,
    "end": 1825
  },
  {
    "type": "Identifier",
    "value": "nameA2",
    "start": 1826,
    "end": 1832
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1833,
    "end": 1834
  },
  {
    "type": "String",
    "value": "\"name\"",
    "start": 1835,
    "end": 1841
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1841,
    "end": 1842
  },
  {
    "type": "Identifier",
    "value": "skillA2",
    "start": 1843,
    "end": 1850
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1851,
    "end": 1852
  },
  {
    "type": "String",
    "value": "\"skill\"",
    "start": 1853,
    "end": 1860
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1860,
    "end": 1861
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1862,
    "end": 1863
  },
  {
    "type": "Identifier",
    "value": "robotA",
    "start": 1864,
    "end": 1870
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1870,
    "end": 1871
  },
  {
    "type": "Identifier",
    "value": "i",
    "start": 1872,
    "end": 1873
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1874,
    "end": 1875
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 1876,
    "end": 1877
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1877,
    "end": 1878
  },
  {
    "type": "Identifier",
    "value": "i",
    "start": 1879,
    "end": 1880
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1881,
    "end": 1882
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 1883,
    "end": 1884
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1884,
    "end": 1885
  },
  {
    "type": "Identifier",
    "value": "i",
    "start": 1886,
    "end": 1887
  },
  {
    "type": "Punctuator",
    "value": "++",
    "start": 1887,
    "end": 1889
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1889,
    "end": 1890
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1891,
    "end": 1892
  },
  {
    "type": "Identifier",
    "value": "console",
    "start": 1897,
    "end": 1904
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1904,
    "end": 1905
  },
  {
    "type": "Identifier",
    "value": "log",
    "start": 1905,
    "end": 1908
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1908,
    "end": 1909
  },
  {
    "type": "Identifier",
    "value": "nameA2",
    "start": 1909,
    "end": 1915
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1915,
    "end": 1916
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1916,
    "end": 1917
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1918,
    "end": 1919
  },
  {
    "type": "Keyword",
    "value": "for",
    "start": 1920,
    "end": 1923
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1924,
    "end": 1925
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 1925,
    "end": 1928
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1929,
    "end": 1930
  },
  {
    "type": "Identifier",
    "value": "numberA2",
    "start": 1930,
    "end": 1938
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1939,
    "end": 1940
  },
  {
    "type": "Punctuator",
    "value": "-",
    "start": 1941,
    "end": 1942
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 1942,
    "end": 1943
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1943,
    "end": 1944
  },
  {
    "type": "Identifier",
    "value": "nameA2",
    "start": 1945,
    "end": 1951
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1952,
    "end": 1953
  },
  {
    "type": "String",
    "value": "\"name\"",
    "start": 1954,
    "end": 1960
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1960,
    "end": 1961
  },
  {
    "type": "Identifier",
    "value": "skillA2",
    "start": 1962,
    "end": 1969
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1970,
    "end": 1971
  },
  {
    "type": "String",
    "value": "\"skill\"",
    "start": 1972,
    "end": 1979
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1979,
    "end": 1980
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1981,
    "end": 1982
  },
  {
    "type": "Identifier",
    "value": "getRobot",
    "start": 1983,
    "end": 1991
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1991,
    "end": 1992
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1992,
    "end": 1993
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1993,
    "end": 1994
  },
  {
    "type": "Identifier",
    "value": "i",
    "start": 1995,
    "end": 1996
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1997,
    "end": 1998
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 1999,
    "end": 2000
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2000,
    "end": 2001
  },
  {
    "type": "Identifier",
    "value": "i",
    "start": 2002,
    "end": 2003
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2004,
    "end": 2005
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 2006,
    "end": 2007
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2007,
    "end": 2008
  },
  {
    "type": "Identifier",
    "value": "i",
    "start": 2009,
    "end": 2010
  },
  {
    "type": "Punctuator",
    "value": "++",
    "start": 2010,
    "end": 2012
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2012,
    "end": 2013
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2014,
    "end": 2015
  },
  {
    "type": "Identifier",
    "value": "console",
    "start": 2020,
    "end": 2027
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2027,
    "end": 2028
  },
  {
    "type": "Identifier",
    "value": "log",
    "start": 2028,
    "end": 2031
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2031,
    "end": 2032
  },
  {
    "type": "Identifier",
    "value": "nameA2",
    "start": 2032,
    "end": 2038
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2038,
    "end": 2039
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2039,
    "end": 2040
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2041,
    "end": 2042
  },
  {
    "type": "Keyword",
    "value": "for",
    "start": 2043,
    "end": 2046
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2047,
    "end": 2048
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 2048,
    "end": 2051
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 2052,
    "end": 2053
  },
  {
    "type": "Identifier",
    "value": "numberA2",
    "start": 2053,
    "end": 2061
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2062,
    "end": 2063
  },
  {
    "type": "Punctuator",
    "value": "-",
    "start": 2064,
    "end": 2065
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 2065,
    "end": 2066
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2066,
    "end": 2067
  },
  {
    "type": "Identifier",
    "value": "nameA2",
    "start": 2068,
    "end": 2074
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2075,
    "end": 2076
  },
  {
    "type": "String",
    "value": "\"name\"",
    "start": 2077,
    "end": 2083
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2083,
    "end": 2084
  },
  {
    "type": "Identifier",
    "value": "skillA2",
    "start": 2085,
    "end": 2092
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2093,
    "end": 2094
  },
  {
    "type": "String",
    "value": "\"skill\"",
    "start": 2095,
    "end": 2102
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 2102,
    "end": 2103
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2104,
    "end": 2105
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 2106,
    "end": 2107
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 2107,
    "end": 2108
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2108,
    "end": 2109
  },
  {
    "type": "String",
    "value": "\"trimmer\"",
    "start": 2110,
    "end": 2119
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2119,
    "end": 2120
  },
  {
    "type": "String",
    "value": "\"trimming\"",
    "start": 2121,
    "end": 2131
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 2131,
    "end": 2132
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2132,
    "end": 2133
  },
  {
    "type": "Identifier",
    "value": "i",
    "start": 2134,
    "end": 2135
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2136,
    "end": 2137
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 2138,
    "end": 2139
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2139,
    "end": 2140
  },
  {
    "type": "Identifier",
    "value": "i",
    "start": 2141,
    "end": 2142
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2143,
    "end": 2144
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 2145,
    "end": 2146
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2146,
    "end": 2147
  },
  {
    "type": "Identifier",
    "value": "i",
    "start": 2148,
    "end": 2149
  },
  {
    "type": "Punctuator",
    "value": "++",
    "start": 2149,
    "end": 2151
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2151,
    "end": 2152
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2153,
    "end": 2154
  },
  {
    "type": "Identifier",
    "value": "console",
    "start": 2159,
    "end": 2166
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2166,
    "end": 2167
  },
  {
    "type": "Identifier",
    "value": "log",
    "start": 2167,
    "end": 2170
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2170,
    "end": 2171
  },
  {
    "type": "Identifier",
    "value": "nameA2",
    "start": 2171,
    "end": 2177
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2177,
    "end": 2178
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2178,
    "end": 2179
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2180,
    "end": 2181
  },
  {
    "type": "Keyword",
    "value": "for",
    "start": 2182,
    "end": 2185
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2186,
    "end": 2187
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 2187,
    "end": 2190
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 2195,
    "end": 2196
  },
  {
    "type": "Identifier",
    "value": "nameMA",
    "start": 2196,
    "end": 2202
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2203,
    "end": 2204
  },
  {
    "type": "String",
    "value": "\"noName\"",
    "start": 2205,
    "end": 2213
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2213,
    "end": 2214
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 2223,
    "end": 2224
  },
  {
    "type": "Identifier",
    "value": "primarySkillA",
    "start": 2237,
    "end": 2250
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2251,
    "end": 2252
  },
  {
    "type": "String",
    "value": "\"primary\"",
    "start": 2253,
    "end": 2262
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2262,
    "end": 2263
  },
  {
    "type": "Identifier",
    "value": "secondarySkillA",
    "start": 2276,
    "end": 2291
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2292,
    "end": 2293
  },
  {
    "type": "String",
    "value": "\"secondary\"",
    "start": 2294,
    "end": 2305
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 2314,
    "end": 2315
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2316,
    "end": 2317
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 2318,
    "end": 2319
  },
  {
    "type": "String",
    "value": "\"none\"",
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
    "type": "String",
    "value": "\"none\"",
    "start": 2327,
    "end": 2333
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 2333,
    "end": 2334
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 2339,
    "end": 2340
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2341,
    "end": 2342
  },
  {
    "type": "Identifier",
    "value": "multiRobotA",
    "start": 2343,
    "end": 2354
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2354,
    "end": 2355
  },
  {
    "type": "Identifier",
    "value": "i",
    "start": 2356,
    "end": 2357
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2358,
    "end": 2359
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 2360,
    "end": 2361
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2361,
    "end": 2362
  },
  {
    "type": "Identifier",
    "value": "i",
    "start": 2363,
    "end": 2364
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2365,
    "end": 2366
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 2367,
    "end": 2368
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2368,
    "end": 2369
  },
  {
    "type": "Identifier",
    "value": "i",
    "start": 2370,
    "end": 2371
  },
  {
    "type": "Punctuator",
    "value": "++",
    "start": 2371,
    "end": 2373
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2373,
    "end": 2374
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2375,
    "end": 2376
  },
  {
    "type": "Identifier",
    "value": "console",
    "start": 2381,
    "end": 2388
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2388,
    "end": 2389
  },
  {
    "type": "Identifier",
    "value": "log",
    "start": 2389,
    "end": 2392
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2392,
    "end": 2393
  },
  {
    "type": "Identifier",
    "value": "nameMA",
    "start": 2393,
    "end": 2399
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2399,
    "end": 2400
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2400,
    "end": 2401
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2402,
    "end": 2403
  },
  {
    "type": "Keyword",
    "value": "for",
    "start": 2404,
    "end": 2407
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2408,
    "end": 2409
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 2409,
    "end": 2412
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 2413,
    "end": 2414
  },
  {
    "type": "Identifier",
    "value": "nameMA",
    "start": 2414,
    "end": 2420
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2421,
    "end": 2422
  },
  {
    "type": "String",
    "value": "\"noName\"",
    "start": 2423,
    "end": 2431
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2431,
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
    "value": "primarySkillA",
    "start": 2447,
    "end": 2460
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2461,
    "end": 2462
  },
  {
    "type": "String",
    "value": "\"primary\"",
    "start": 2463,
    "end": 2472
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2472,
    "end": 2473
  },
  {
    "type": "Identifier",
    "value": "secondarySkillA",
    "start": 2482,
    "end": 2497
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2498,
    "end": 2499
  },
  {
    "type": "String",
    "value": "\"secondary\"",
    "start": 2500,
    "end": 2511
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 2516,
    "end": 2517
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2518,
    "end": 2519
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 2520,
    "end": 2521
  },
  {
    "type": "String",
    "value": "\"none\"",
    "start": 2521,
    "end": 2527
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2527,
    "end": 2528
  },
  {
    "type": "String",
    "value": "\"none\"",
    "start": 2529,
    "end": 2535
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 2535,
    "end": 2536
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 2537,
    "end": 2538
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2540,
    "end": 2541
  },
  {
    "type": "Identifier",
    "value": "getMultiRobot",
    "start": 2542,
    "end": 2555
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2555,
    "end": 2556
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2556,
    "end": 2557
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2557,
    "end": 2558
  },
  {
    "type": "Identifier",
    "value": "i",
    "start": 2559,
    "end": 2560
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2561,
    "end": 2562
  },
  {
    "type": "Numeric",
    "value": "0",
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
    "type": "Identifier",
    "value": "i",
    "start": 2566,
    "end": 2567
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2568,
    "end": 2569
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 2570,
    "end": 2571
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2571,
    "end": 2572
  },
  {
    "type": "Identifier",
    "value": "i",
    "start": 2573,
    "end": 2574
  },
  {
    "type": "Punctuator",
    "value": "++",
    "start": 2574,
    "end": 2576
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2576,
    "end": 2577
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2578,
    "end": 2579
  },
  {
    "type": "Identifier",
    "value": "console",
    "start": 2584,
    "end": 2591
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2591,
    "end": 2592
  },
  {
    "type": "Identifier",
    "value": "log",
    "start": 2592,
    "end": 2595
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2595,
    "end": 2596
  },
  {
    "type": "Identifier",
    "value": "nameMA",
    "start": 2596,
    "end": 2602
  },
  {
    "type": "Punctuator",
    "value": ")",
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
    "type": "Punctuator",
    "value": "}",
    "start": 2605,
    "end": 2606
  },
  {
    "type": "Keyword",
    "value": "for",
    "start": 2607,
    "end": 2610
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2611,
    "end": 2612
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 2612,
    "end": 2615
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 2616,
    "end": 2617
  },
  {
    "type": "Identifier",
    "value": "nameMA",
    "start": 2617,
    "end": 2623
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2624,
    "end": 2625
  },
  {
    "type": "String",
    "value": "\"noName\"",
    "start": 2626,
    "end": 2634
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2634,
    "end": 2635
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 2640,
    "end": 2641
  },
  {
    "type": "Identifier",
    "value": "primarySkillA",
    "start": 2650,
    "end": 2663
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2664,
    "end": 2665
  },
  {
    "type": "String",
    "value": "\"primary\"",
    "start": 2666,
    "end": 2675
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2675,
    "end": 2676
  },
  {
    "type": "Identifier",
    "value": "secondarySkillA",
    "start": 2685,
    "end": 2700
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2701,
    "end": 2702
  },
  {
    "type": "String",
    "value": "\"secondary\"",
    "start": 2703,
    "end": 2714
  },
  {
    "type": "Punctuator",
    "value": "]",
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
    "type": "Punctuator",
    "value": "[",
    "start": 2723,
    "end": 2724
  },
  {
    "type": "String",
    "value": "\"none\"",
    "start": 2724,
    "end": 2730
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2730,
    "end": 2731
  },
  {
    "type": "String",
    "value": "\"none\"",
    "start": 2732,
    "end": 2738
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 2738,
    "end": 2739
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 2740,
    "end": 2741
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2743,
    "end": 2744
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 2745,
    "end": 2746
  },
  {
    "type": "String",
    "value": "\"trimmer\"",
    "start": 2746,
    "end": 2755
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2755,
    "end": 2756
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 2757,
    "end": 2758
  },
  {
    "type": "String",
    "value": "\"trimming\"",
    "start": 2758,
    "end": 2768
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2768,
    "end": 2769
  },
  {
    "type": "String",
    "value": "\"edging\"",
    "start": 2770,
    "end": 2778
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 2778,
    "end": 2779
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 2779,
    "end": 2780
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2780,
    "end": 2781
  },
  {
    "type": "Identifier",
    "value": "i",
    "start": 2782,
    "end": 2783
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2784,
    "end": 2785
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 2786,
    "end": 2787
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2787,
    "end": 2788
  },
  {
    "type": "Identifier",
    "value": "i",
    "start": 2789,
    "end": 2790
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2791,
    "end": 2792
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 2793,
    "end": 2794
  },
  {
    "type": "Punctuator",
    "value": ";",
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
    "value": "++",
    "start": 2797,
    "end": 2799
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2799,
    "end": 2800
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2801,
    "end": 2802
  },
  {
    "type": "Identifier",
    "value": "console",
    "start": 2807,
    "end": 2814
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2814,
    "end": 2815
  },
  {
    "type": "Identifier",
    "value": "log",
    "start": 2815,
    "end": 2818
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2818,
    "end": 2819
  },
  {
    "type": "Identifier",
    "value": "nameMA",
    "start": 2819,
    "end": 2825
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2825,
    "end": 2826
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2826,
    "end": 2827
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2828,
    "end": 2829
  },
  {
    "type": "Keyword",
    "value": "for",
    "start": 2831,
    "end": 2834
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2835,
    "end": 2836
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 2836,
    "end": 2839
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 2840,
    "end": 2841
  },
  {
    "type": "Identifier",
    "value": "numberA3",
    "start": 2841,
    "end": 2849
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2850,
    "end": 2851
  },
  {
    "type": "Punctuator",
    "value": "-",
    "start": 2852,
    "end": 2853
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 2853,
    "end": 2854
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2854,
    "end": 2855
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 2856,
    "end": 2859
  },
  {
    "type": "Identifier",
    "value": "robotAInfo",
    "start": 2859,
    "end": 2869
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 2869,
    "end": 2870
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2871,
    "end": 2872
  },
  {
    "type": "Identifier",
    "value": "robotA",
    "start": 2873,
    "end": 2879
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2879,
    "end": 2880
  },
  {
    "type": "Identifier",
    "value": "i",
    "start": 2881,
    "end": 2882
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2883,
    "end": 2884
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 2885,
    "end": 2886
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2886,
    "end": 2887
  },
  {
    "type": "Identifier",
    "value": "i",
    "start": 2888,
    "end": 2889
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2890,
    "end": 2891
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 2892,
    "end": 2893
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2893,
    "end": 2894
  },
  {
    "type": "Identifier",
    "value": "i",
    "start": 2895,
    "end": 2896
  },
  {
    "type": "Punctuator",
    "value": "++",
    "start": 2896,
    "end": 2898
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2898,
    "end": 2899
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2900,
    "end": 2901
  },
  {
    "type": "Identifier",
    "value": "console",
    "start": 2906,
    "end": 2913
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2913,
    "end": 2914
  },
  {
    "type": "Identifier",
    "value": "log",
    "start": 2914,
    "end": 2917
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2917,
    "end": 2918
  },
  {
    "type": "Identifier",
    "value": "numberA3",
    "start": 2918,
    "end": 2926
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2926,
    "end": 2927
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2927,
    "end": 2928
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2929,
    "end": 2930
  },
  {
    "type": "Keyword",
    "value": "for",
    "start": 2931,
    "end": 2934
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2935,
    "end": 2936
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 2936,
    "end": 2939
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 2940,
    "end": 2941
  },
  {
    "type": "Identifier",
    "value": "numberA3",
    "start": 2941,
    "end": 2949
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2950,
    "end": 2951
  },
  {
    "type": "Punctuator",
    "value": "-",
    "start": 2952,
    "end": 2953
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 2953,
    "end": 2954
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2954,
    "end": 2955
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 2956,
    "end": 2959
  },
  {
    "type": "Identifier",
    "value": "robotAInfo",
    "start": 2959,
    "end": 2969
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 2969,
    "end": 2970
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2971,
    "end": 2972
  },
  {
    "type": "Identifier",
    "value": "getRobot",
    "start": 2973,
    "end": 2981
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2981,
    "end": 2982
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2982,
    "end": 2983
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2983,
    "end": 2984
  },
  {
    "type": "Identifier",
    "value": "i",
    "start": 2985,
    "end": 2986
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2987,
    "end": 2988
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 2989,
    "end": 2990
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2990,
    "end": 2991
  },
  {
    "type": "Identifier",
    "value": "i",
    "start": 2992,
    "end": 2993
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2994,
    "end": 2995
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 2996,
    "end": 2997
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2997,
    "end": 2998
  },
  {
    "type": "Identifier",
    "value": "i",
    "start": 2999,
    "end": 3000
  },
  {
    "type": "Punctuator",
    "value": "++",
    "start": 3000,
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
    "value": "{",
    "start": 3004,
    "end": 3005
  },
  {
    "type": "Identifier",
    "value": "console",
    "start": 3010,
    "end": 3017
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 3017,
    "end": 3018
  },
  {
    "type": "Identifier",
    "value": "log",
    "start": 3018,
    "end": 3021
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3021,
    "end": 3022
  },
  {
    "type": "Identifier",
    "value": "numberA3",
    "start": 3022,
    "end": 3030
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3030,
    "end": 3031
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3031,
    "end": 3032
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3033,
    "end": 3034
  },
  {
    "type": "Keyword",
    "value": "for",
    "start": 3035,
    "end": 3038
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3039,
    "end": 3040
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 3040,
    "end": 3043
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 3044,
    "end": 3045
  },
  {
    "type": "Identifier",
    "value": "numberA3",
    "start": 3045,
    "end": 3053
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3054,
    "end": 3055
  },
  {
    "type": "Punctuator",
    "value": "-",
    "start": 3056,
    "end": 3057
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 3057,
    "end": 3058
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3058,
    "end": 3059
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 3060,
    "end": 3063
  },
  {
    "type": "Identifier",
    "value": "robotAInfo",
    "start": 3063,
    "end": 3073
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 3073,
    "end": 3074
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3075,
    "end": 3076
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 3077,
    "end": 3078
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 3078,
    "end": 3079
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3079,
    "end": 3080
  },
  {
    "type": "String",
    "value": "\"trimmer\"",
    "start": 3081,
    "end": 3090
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3090,
    "end": 3091
  },
  {
    "type": "String",
    "value": "\"trimming\"",
    "start": 3092,
    "end": 3102
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 3102,
    "end": 3103
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3103,
    "end": 3104
  },
  {
    "type": "Identifier",
    "value": "i",
    "start": 3105,
    "end": 3106
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3107,
    "end": 3108
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 3109,
    "end": 3110
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3110,
    "end": 3111
  },
  {
    "type": "Identifier",
    "value": "i",
    "start": 3112,
    "end": 3113
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 3114,
    "end": 3115
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 3116,
    "end": 3117
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3117,
    "end": 3118
  },
  {
    "type": "Identifier",
    "value": "i",
    "start": 3119,
    "end": 3120
  },
  {
    "type": "Punctuator",
    "value": "++",
    "start": 3120,
    "end": 3122
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3122,
    "end": 3123
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3124,
    "end": 3125
  },
  {
    "type": "Identifier",
    "value": "console",
    "start": 3130,
    "end": 3137
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 3137,
    "end": 3138
  },
  {
    "type": "Identifier",
    "value": "log",
    "start": 3138,
    "end": 3141
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3141,
    "end": 3142
  },
  {
    "type": "Identifier",
    "value": "numberA3",
    "start": 3142,
    "end": 3150
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3150,
    "end": 3151
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3151,
    "end": 3152
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3153,
    "end": 3154
  }
]
```
