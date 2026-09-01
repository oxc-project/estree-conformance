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
      "type": "VariableDeclaration",
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "robotB",
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
                  "start": 199,
                  "end": 204
                },
                "typeArguments": null,
                "start": 199,
                "end": 204
              },
              "start": 197,
              "end": 204
            },
            "start": 191,
            "end": 204
          },
          "init": {
            "type": "ArrayExpression",
            "elements": [
              {
                "type": "Literal",
                "value": 2,
                "raw": "2",
                "start": 208,
                "end": 209
              },
              {
                "type": "Literal",
                "value": "trimmer",
                "raw": "\"trimmer\"",
                "start": 211,
                "end": 220
              },
              {
                "type": "Literal",
                "value": "trimming",
                "raw": "\"trimming\"",
                "start": 222,
                "end": 232
              }
            ],
            "start": 207,
            "end": 233
          },
          "definite": false,
          "start": 191,
          "end": 233
        }
      ],
      "declare": false,
      "start": 187,
      "end": 234
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
            "name": "robots",
            "optional": false,
            "typeAnnotation": null,
            "start": 239,
            "end": 245
          },
          "init": {
            "type": "ArrayExpression",
            "elements": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "robotA",
                "optional": false,
                "typeAnnotation": null,
                "start": 249,
                "end": 255
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "robotB",
                "optional": false,
                "typeAnnotation": null,
                "start": 257,
                "end": 263
              }
            ],
            "start": 248,
            "end": 264
          },
          "definite": false,
          "start": 239,
          "end": 264
        }
      ],
      "declare": false,
      "start": 235,
      "end": 265
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "getRobots",
        "optional": false,
        "typeAnnotation": null,
        "start": 275,
        "end": 284
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
              "name": "robots",
              "optional": false,
              "typeAnnotation": null,
              "start": 300,
              "end": 306
            },
            "start": 293,
            "end": 307
          }
        ],
        "start": 287,
        "end": 309
      },
      "expression": false,
      "start": 266,
      "end": 309
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
                  "start": 328,
                  "end": 345
                },
                "typeArguments": null,
                "start": 328,
                "end": 345
              },
              "start": 326,
              "end": 345
            },
            "start": 315,
            "end": 345
          },
          "init": {
            "type": "ArrayExpression",
            "elements": [
              {
                "type": "Literal",
                "value": "mower",
                "raw": "\"mower\"",
                "start": 349,
                "end": 356
              },
              {
                "type": "ArrayExpression",
                "elements": [
                  {
                    "type": "Literal",
                    "value": "mowing",
                    "raw": "\"mowing\"",
                    "start": 359,
                    "end": 367
                  },
                  {
                    "type": "Literal",
                    "value": "",
                    "raw": "\"\"",
                    "start": 369,
                    "end": 371
                  }
                ],
                "start": 358,
                "end": 372
              }
            ],
            "start": 348,
            "end": 373
          },
          "definite": false,
          "start": 315,
          "end": 373
        }
      ],
      "declare": false,
      "start": 311,
      "end": 374
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
                  "start": 392,
                  "end": 409
                },
                "typeArguments": null,
                "start": 392,
                "end": 409
              },
              "start": 390,
              "end": 409
            },
            "start": 379,
            "end": 409
          },
          "init": {
            "type": "ArrayExpression",
            "elements": [
              {
                "type": "Literal",
                "value": "trimmer",
                "raw": "\"trimmer\"",
                "start": 413,
                "end": 422
              },
              {
                "type": "ArrayExpression",
                "elements": [
                  {
                    "type": "Literal",
                    "value": "trimming",
                    "raw": "\"trimming\"",
                    "start": 425,
                    "end": 435
                  },
                  {
                    "type": "Literal",
                    "value": "edging",
                    "raw": "\"edging\"",
                    "start": 437,
                    "end": 445
                  }
                ],
                "start": 424,
                "end": 446
              }
            ],
            "start": 412,
            "end": 447
          },
          "definite": false,
          "start": 379,
          "end": 447
        }
      ],
      "declare": false,
      "start": 375,
      "end": 448
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
            "name": "multiRobots",
            "optional": false,
            "typeAnnotation": null,
            "start": 453,
            "end": 464
          },
          "init": {
            "type": "ArrayExpression",
            "elements": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "multiRobotA",
                "optional": false,
                "typeAnnotation": null,
                "start": 468,
                "end": 479
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "multiRobotB",
                "optional": false,
                "typeAnnotation": null,
                "start": 481,
                "end": 492
              }
            ],
            "start": 467,
            "end": 493
          },
          "definite": false,
          "start": 453,
          "end": 493
        }
      ],
      "declare": false,
      "start": 449,
      "end": 494
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "getMultiRobots",
        "optional": false,
        "typeAnnotation": null,
        "start": 504,
        "end": 518
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
              "name": "multiRobots",
              "optional": false,
              "typeAnnotation": null,
              "start": 534,
              "end": 545
            },
            "start": 527,
            "end": 546
          }
        ],
        "start": 521,
        "end": 548
      },
      "expression": false,
      "start": 495,
      "end": 548
    },
    {
      "type": "ForOfStatement",
      "await": false,
      "left": {
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
                  "start": 562,
                  "end": 567
                }
              ],
              "optional": false,
              "typeAnnotation": null,
              "start": 559,
              "end": 568
            },
            "init": null,
            "definite": false,
            "start": 559,
            "end": 568
          }
        ],
        "declare": false,
        "start": 555,
        "end": 568
      },
      "right": {
        "type": "Identifier",
        "decorators": [],
        "name": "robots",
        "optional": false,
        "typeAnnotation": null,
        "start": 572,
        "end": 578
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
                  "start": 586,
                  "end": 593
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "log",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 594,
                  "end": 597
                },
                "optional": false,
                "computed": false,
                "start": 586,
                "end": 597
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "nameA",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 598,
                  "end": 603
                }
              ],
              "optional": false,
              "start": 586,
              "end": 604
            },
            "directive": null,
            "start": 586,
            "end": 605
          }
        ],
        "start": 580,
        "end": 607
      },
      "start": 550,
      "end": 607
    },
    {
      "type": "ForOfStatement",
      "await": false,
      "left": {
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
                  "start": 620,
                  "end": 625
                }
              ],
              "optional": false,
              "typeAnnotation": null,
              "start": 617,
              "end": 626
            },
            "init": null,
            "definite": false,
            "start": 617,
            "end": 626
          }
        ],
        "declare": false,
        "start": 613,
        "end": 626
      },
      "right": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "getRobots",
          "optional": false,
          "typeAnnotation": null,
          "start": 630,
          "end": 639
        },
        "typeArguments": null,
        "arguments": [],
        "optional": false,
        "start": 630,
        "end": 641
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
                  "start": 649,
                  "end": 656
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "log",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 657,
                  "end": 660
                },
                "optional": false,
                "computed": false,
                "start": 649,
                "end": 660
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "nameA",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 661,
                  "end": 666
                }
              ],
              "optional": false,
              "start": 649,
              "end": 667
            },
            "directive": null,
            "start": 649,
            "end": 668
          }
        ],
        "start": 643,
        "end": 670
      },
      "start": 608,
      "end": 670
    },
    {
      "type": "ForOfStatement",
      "await": false,
      "left": {
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
                  "start": 683,
                  "end": 688
                }
              ],
              "optional": false,
              "typeAnnotation": null,
              "start": 680,
              "end": 689
            },
            "init": null,
            "definite": false,
            "start": 680,
            "end": 689
          }
        ],
        "declare": false,
        "start": 676,
        "end": 689
      },
      "right": {
        "type": "ArrayExpression",
        "elements": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "robotA",
            "optional": false,
            "typeAnnotation": null,
            "start": 694,
            "end": 700
          },
          {
            "type": "Identifier",
            "decorators": [],
            "name": "robotB",
            "optional": false,
            "typeAnnotation": null,
            "start": 702,
            "end": 708
          }
        ],
        "start": 693,
        "end": 709
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
                  "start": 717,
                  "end": 724
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "log",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 725,
                  "end": 728
                },
                "optional": false,
                "computed": false,
                "start": 717,
                "end": 728
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "nameA",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 729,
                  "end": 734
                }
              ],
              "optional": false,
              "start": 717,
              "end": 735
            },
            "directive": null,
            "start": 717,
            "end": 736
          }
        ],
        "start": 711,
        "end": 738
      },
      "start": 671,
      "end": 738
    },
    {
      "type": "ForOfStatement",
      "await": false,
      "left": {
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
                      "start": 752,
                      "end": 765
                    },
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "secondarySkillA",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 767,
                      "end": 782
                    }
                  ],
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 751,
                  "end": 783
                }
              ],
              "optional": false,
              "typeAnnotation": null,
              "start": 748,
              "end": 784
            },
            "init": null,
            "definite": false,
            "start": 748,
            "end": 784
          }
        ],
        "declare": false,
        "start": 744,
        "end": 784
      },
      "right": {
        "type": "Identifier",
        "decorators": [],
        "name": "multiRobots",
        "optional": false,
        "typeAnnotation": null,
        "start": 788,
        "end": 799
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
                  "start": 807,
                  "end": 814
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "log",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 815,
                  "end": 818
                },
                "optional": false,
                "computed": false,
                "start": 807,
                "end": 818
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "primarySkillA",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 819,
                  "end": 832
                }
              ],
              "optional": false,
              "start": 807,
              "end": 833
            },
            "directive": null,
            "start": 807,
            "end": 834
          }
        ],
        "start": 801,
        "end": 836
      },
      "start": 739,
      "end": 836
    },
    {
      "type": "ForOfStatement",
      "await": false,
      "left": {
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
                      "start": 850,
                      "end": 863
                    },
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "secondarySkillA",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 865,
                      "end": 880
                    }
                  ],
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 849,
                  "end": 881
                }
              ],
              "optional": false,
              "typeAnnotation": null,
              "start": 846,
              "end": 882
            },
            "init": null,
            "definite": false,
            "start": 846,
            "end": 882
          }
        ],
        "declare": false,
        "start": 842,
        "end": 882
      },
      "right": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "getMultiRobots",
          "optional": false,
          "typeAnnotation": null,
          "start": 886,
          "end": 900
        },
        "typeArguments": null,
        "arguments": [],
        "optional": false,
        "start": 886,
        "end": 902
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
                  "start": 910,
                  "end": 917
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "log",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 918,
                  "end": 921
                },
                "optional": false,
                "computed": false,
                "start": 910,
                "end": 921
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "primarySkillA",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 922,
                  "end": 935
                }
              ],
              "optional": false,
              "start": 910,
              "end": 936
            },
            "directive": null,
            "start": 910,
            "end": 937
          }
        ],
        "start": 904,
        "end": 939
      },
      "start": 837,
      "end": 939
    },
    {
      "type": "ForOfStatement",
      "await": false,
      "left": {
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
                      "start": 953,
                      "end": 966
                    },
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "secondarySkillA",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 968,
                      "end": 983
                    }
                  ],
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 952,
                  "end": 984
                }
              ],
              "optional": false,
              "typeAnnotation": null,
              "start": 949,
              "end": 985
            },
            "init": null,
            "definite": false,
            "start": 949,
            "end": 985
          }
        ],
        "declare": false,
        "start": 945,
        "end": 985
      },
      "right": {
        "type": "ArrayExpression",
        "elements": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "multiRobotA",
            "optional": false,
            "typeAnnotation": null,
            "start": 990,
            "end": 1001
          },
          {
            "type": "Identifier",
            "decorators": [],
            "name": "multiRobotB",
            "optional": false,
            "typeAnnotation": null,
            "start": 1003,
            "end": 1014
          }
        ],
        "start": 989,
        "end": 1015
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
                  "start": 1023,
                  "end": 1030
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "log",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1031,
                  "end": 1034
                },
                "optional": false,
                "computed": false,
                "start": 1023,
                "end": 1034
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "primarySkillA",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1035,
                  "end": 1048
                }
              ],
              "optional": false,
              "start": 1023,
              "end": 1049
            },
            "directive": null,
            "start": 1023,
            "end": 1050
          }
        ],
        "start": 1017,
        "end": 1052
      },
      "start": 940,
      "end": 1052
    },
    {
      "type": "ForOfStatement",
      "await": false,
      "left": {
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
                  "start": 1064,
                  "end": 1071
                }
              ],
              "optional": false,
              "typeAnnotation": null,
              "start": 1063,
              "end": 1072
            },
            "init": null,
            "definite": false,
            "start": 1063,
            "end": 1072
          }
        ],
        "declare": false,
        "start": 1059,
        "end": 1072
      },
      "right": {
        "type": "Identifier",
        "decorators": [],
        "name": "robots",
        "optional": false,
        "typeAnnotation": null,
        "start": 1076,
        "end": 1082
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
                  "start": 1090,
                  "end": 1097
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "log",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1098,
                  "end": 1101
                },
                "optional": false,
                "computed": false,
                "start": 1090,
                "end": 1101
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "numberB",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1102,
                  "end": 1109
                }
              ],
              "optional": false,
              "start": 1090,
              "end": 1110
            },
            "directive": null,
            "start": 1090,
            "end": 1111
          }
        ],
        "start": 1084,
        "end": 1113
      },
      "start": 1054,
      "end": 1113
    },
    {
      "type": "ForOfStatement",
      "await": false,
      "left": {
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
                  "start": 1124,
                  "end": 1131
                }
              ],
              "optional": false,
              "typeAnnotation": null,
              "start": 1123,
              "end": 1132
            },
            "init": null,
            "definite": false,
            "start": 1123,
            "end": 1132
          }
        ],
        "declare": false,
        "start": 1119,
        "end": 1132
      },
      "right": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "getRobots",
          "optional": false,
          "typeAnnotation": null,
          "start": 1136,
          "end": 1145
        },
        "typeArguments": null,
        "arguments": [],
        "optional": false,
        "start": 1136,
        "end": 1147
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
                  "start": 1155,
                  "end": 1162
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "log",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1163,
                  "end": 1166
                },
                "optional": false,
                "computed": false,
                "start": 1155,
                "end": 1166
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "numberB",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1167,
                  "end": 1174
                }
              ],
              "optional": false,
              "start": 1155,
              "end": 1175
            },
            "directive": null,
            "start": 1155,
            "end": 1176
          }
        ],
        "start": 1149,
        "end": 1178
      },
      "start": 1114,
      "end": 1178
    },
    {
      "type": "ForOfStatement",
      "await": false,
      "left": {
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
                  "start": 1189,
                  "end": 1196
                }
              ],
              "optional": false,
              "typeAnnotation": null,
              "start": 1188,
              "end": 1197
            },
            "init": null,
            "definite": false,
            "start": 1188,
            "end": 1197
          }
        ],
        "declare": false,
        "start": 1184,
        "end": 1197
      },
      "right": {
        "type": "ArrayExpression",
        "elements": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "robotA",
            "optional": false,
            "typeAnnotation": null,
            "start": 1202,
            "end": 1208
          },
          {
            "type": "Identifier",
            "decorators": [],
            "name": "robotB",
            "optional": false,
            "typeAnnotation": null,
            "start": 1210,
            "end": 1216
          }
        ],
        "start": 1201,
        "end": 1217
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
                  "start": 1225,
                  "end": 1232
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "log",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1233,
                  "end": 1236
                },
                "optional": false,
                "computed": false,
                "start": 1225,
                "end": 1236
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "numberB",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1237,
                  "end": 1244
                }
              ],
              "optional": false,
              "start": 1225,
              "end": 1245
            },
            "directive": null,
            "start": 1225,
            "end": 1246
          }
        ],
        "start": 1219,
        "end": 1248
      },
      "start": 1179,
      "end": 1248
    },
    {
      "type": "ForOfStatement",
      "await": false,
      "left": {
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
                  "start": 1259,
                  "end": 1264
                }
              ],
              "optional": false,
              "typeAnnotation": null,
              "start": 1258,
              "end": 1265
            },
            "init": null,
            "definite": false,
            "start": 1258,
            "end": 1265
          }
        ],
        "declare": false,
        "start": 1254,
        "end": 1265
      },
      "right": {
        "type": "Identifier",
        "decorators": [],
        "name": "multiRobots",
        "optional": false,
        "typeAnnotation": null,
        "start": 1269,
        "end": 1280
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
                  "start": 1288,
                  "end": 1295
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "log",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1296,
                  "end": 1299
                },
                "optional": false,
                "computed": false,
                "start": 1288,
                "end": 1299
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "nameB",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1300,
                  "end": 1305
                }
              ],
              "optional": false,
              "start": 1288,
              "end": 1306
            },
            "directive": null,
            "start": 1288,
            "end": 1307
          }
        ],
        "start": 1282,
        "end": 1309
      },
      "start": 1249,
      "end": 1309
    },
    {
      "type": "ForOfStatement",
      "await": false,
      "left": {
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
            "init": null,
            "definite": false,
            "start": 1319,
            "end": 1326
          }
        ],
        "declare": false,
        "start": 1315,
        "end": 1326
      },
      "right": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "getMultiRobots",
          "optional": false,
          "typeAnnotation": null,
          "start": 1330,
          "end": 1344
        },
        "typeArguments": null,
        "arguments": [],
        "optional": false,
        "start": 1330,
        "end": 1346
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
                  "start": 1354,
                  "end": 1361
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "log",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1362,
                  "end": 1365
                },
                "optional": false,
                "computed": false,
                "start": 1354,
                "end": 1365
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "nameB",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1366,
                  "end": 1371
                }
              ],
              "optional": false,
              "start": 1354,
              "end": 1372
            },
            "directive": null,
            "start": 1354,
            "end": 1373
          }
        ],
        "start": 1348,
        "end": 1375
      },
      "start": 1310,
      "end": 1375
    },
    {
      "type": "ForOfStatement",
      "await": false,
      "left": {
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
                  "start": 1386,
                  "end": 1391
                }
              ],
              "optional": false,
              "typeAnnotation": null,
              "start": 1385,
              "end": 1392
            },
            "init": null,
            "definite": false,
            "start": 1385,
            "end": 1392
          }
        ],
        "declare": false,
        "start": 1381,
        "end": 1392
      },
      "right": {
        "type": "ArrayExpression",
        "elements": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "multiRobotA",
            "optional": false,
            "typeAnnotation": null,
            "start": 1397,
            "end": 1408
          },
          {
            "type": "Identifier",
            "decorators": [],
            "name": "multiRobotB",
            "optional": false,
            "typeAnnotation": null,
            "start": 1410,
            "end": 1421
          }
        ],
        "start": 1396,
        "end": 1422
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
                  "start": 1430,
                  "end": 1437
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "log",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1438,
                  "end": 1441
                },
                "optional": false,
                "computed": false,
                "start": 1430,
                "end": 1441
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "nameB",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1442,
                  "end": 1447
                }
              ],
              "optional": false,
              "start": 1430,
              "end": 1448
            },
            "directive": null,
            "start": 1430,
            "end": 1449
          }
        ],
        "start": 1424,
        "end": 1451
      },
      "start": 1376,
      "end": 1451
    },
    {
      "type": "ForOfStatement",
      "await": false,
      "left": {
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
                  "start": 1463,
                  "end": 1471
                },
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "nameA2",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1473,
                  "end": 1479
                },
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "skillA2",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1481,
                  "end": 1488
                }
              ],
              "optional": false,
              "typeAnnotation": null,
              "start": 1462,
              "end": 1489
            },
            "init": null,
            "definite": false,
            "start": 1462,
            "end": 1489
          }
        ],
        "declare": false,
        "start": 1458,
        "end": 1489
      },
      "right": {
        "type": "Identifier",
        "decorators": [],
        "name": "robots",
        "optional": false,
        "typeAnnotation": null,
        "start": 1493,
        "end": 1499
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
                  "start": 1507,
                  "end": 1514
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "log",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1515,
                  "end": 1518
                },
                "optional": false,
                "computed": false,
                "start": 1507,
                "end": 1518
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "nameA2",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1519,
                  "end": 1525
                }
              ],
              "optional": false,
              "start": 1507,
              "end": 1526
            },
            "directive": null,
            "start": 1507,
            "end": 1527
          }
        ],
        "start": 1501,
        "end": 1529
      },
      "start": 1453,
      "end": 1529
    },
    {
      "type": "ForOfStatement",
      "await": false,
      "left": {
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
                  "start": 1540,
                  "end": 1548
                },
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "nameA2",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1550,
                  "end": 1556
                },
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "skillA2",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1558,
                  "end": 1565
                }
              ],
              "optional": false,
              "typeAnnotation": null,
              "start": 1539,
              "end": 1566
            },
            "init": null,
            "definite": false,
            "start": 1539,
            "end": 1566
          }
        ],
        "declare": false,
        "start": 1535,
        "end": 1566
      },
      "right": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "getRobots",
          "optional": false,
          "typeAnnotation": null,
          "start": 1570,
          "end": 1579
        },
        "typeArguments": null,
        "arguments": [],
        "optional": false,
        "start": 1570,
        "end": 1581
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
                  "start": 1589,
                  "end": 1596
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "log",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1597,
                  "end": 1600
                },
                "optional": false,
                "computed": false,
                "start": 1589,
                "end": 1600
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "nameA2",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1601,
                  "end": 1607
                }
              ],
              "optional": false,
              "start": 1589,
              "end": 1608
            },
            "directive": null,
            "start": 1589,
            "end": 1609
          }
        ],
        "start": 1583,
        "end": 1611
      },
      "start": 1530,
      "end": 1611
    },
    {
      "type": "ForOfStatement",
      "await": false,
      "left": {
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
                  "start": 1622,
                  "end": 1630
                },
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "nameA2",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1632,
                  "end": 1638
                },
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "skillA2",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1640,
                  "end": 1647
                }
              ],
              "optional": false,
              "typeAnnotation": null,
              "start": 1621,
              "end": 1648
            },
            "init": null,
            "definite": false,
            "start": 1621,
            "end": 1648
          }
        ],
        "declare": false,
        "start": 1617,
        "end": 1648
      },
      "right": {
        "type": "ArrayExpression",
        "elements": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "robotA",
            "optional": false,
            "typeAnnotation": null,
            "start": 1653,
            "end": 1659
          },
          {
            "type": "Identifier",
            "decorators": [],
            "name": "robotB",
            "optional": false,
            "typeAnnotation": null,
            "start": 1661,
            "end": 1667
          }
        ],
        "start": 1652,
        "end": 1668
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
                  "start": 1676,
                  "end": 1683
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "log",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1684,
                  "end": 1687
                },
                "optional": false,
                "computed": false,
                "start": 1676,
                "end": 1687
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "nameA2",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1688,
                  "end": 1694
                }
              ],
              "optional": false,
              "start": 1676,
              "end": 1695
            },
            "directive": null,
            "start": 1676,
            "end": 1696
          }
        ],
        "start": 1670,
        "end": 1698
      },
      "start": 1612,
      "end": 1698
    },
    {
      "type": "ForOfStatement",
      "await": false,
      "left": {
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
                  "start": 1709,
                  "end": 1715
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
                      "start": 1718,
                      "end": 1731
                    },
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "secondarySkillA",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1733,
                      "end": 1748
                    }
                  ],
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1717,
                  "end": 1749
                }
              ],
              "optional": false,
              "typeAnnotation": null,
              "start": 1708,
              "end": 1750
            },
            "init": null,
            "definite": false,
            "start": 1708,
            "end": 1750
          }
        ],
        "declare": false,
        "start": 1704,
        "end": 1750
      },
      "right": {
        "type": "Identifier",
        "decorators": [],
        "name": "multiRobots",
        "optional": false,
        "typeAnnotation": null,
        "start": 1754,
        "end": 1765
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
                  "start": 1773,
                  "end": 1780
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "log",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1781,
                  "end": 1784
                },
                "optional": false,
                "computed": false,
                "start": 1773,
                "end": 1784
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "nameMA",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1785,
                  "end": 1791
                }
              ],
              "optional": false,
              "start": 1773,
              "end": 1792
            },
            "directive": null,
            "start": 1773,
            "end": 1793
          }
        ],
        "start": 1767,
        "end": 1795
      },
      "start": 1699,
      "end": 1795
    },
    {
      "type": "ForOfStatement",
      "await": false,
      "left": {
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
                  "start": 1806,
                  "end": 1812
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
                      "start": 1815,
                      "end": 1828
                    },
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "secondarySkillA",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1830,
                      "end": 1845
                    }
                  ],
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1814,
                  "end": 1846
                }
              ],
              "optional": false,
              "typeAnnotation": null,
              "start": 1805,
              "end": 1847
            },
            "init": null,
            "definite": false,
            "start": 1805,
            "end": 1847
          }
        ],
        "declare": false,
        "start": 1801,
        "end": 1847
      },
      "right": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "getMultiRobots",
          "optional": false,
          "typeAnnotation": null,
          "start": 1851,
          "end": 1865
        },
        "typeArguments": null,
        "arguments": [],
        "optional": false,
        "start": 1851,
        "end": 1867
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
                  "start": 1875,
                  "end": 1882
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "log",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1883,
                  "end": 1886
                },
                "optional": false,
                "computed": false,
                "start": 1875,
                "end": 1886
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "nameMA",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1887,
                  "end": 1893
                }
              ],
              "optional": false,
              "start": 1875,
              "end": 1894
            },
            "directive": null,
            "start": 1875,
            "end": 1895
          }
        ],
        "start": 1869,
        "end": 1897
      },
      "start": 1796,
      "end": 1897
    },
    {
      "type": "ForOfStatement",
      "await": false,
      "left": {
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
                  "start": 1908,
                  "end": 1914
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
                      "start": 1917,
                      "end": 1930
                    },
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "secondarySkillA",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1932,
                      "end": 1947
                    }
                  ],
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1916,
                  "end": 1948
                }
              ],
              "optional": false,
              "typeAnnotation": null,
              "start": 1907,
              "end": 1949
            },
            "init": null,
            "definite": false,
            "start": 1907,
            "end": 1949
          }
        ],
        "declare": false,
        "start": 1903,
        "end": 1949
      },
      "right": {
        "type": "ArrayExpression",
        "elements": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "multiRobotA",
            "optional": false,
            "typeAnnotation": null,
            "start": 1954,
            "end": 1965
          },
          {
            "type": "Identifier",
            "decorators": [],
            "name": "multiRobotB",
            "optional": false,
            "typeAnnotation": null,
            "start": 1967,
            "end": 1978
          }
        ],
        "start": 1953,
        "end": 1979
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
                  "start": 1987,
                  "end": 1994
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "log",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1995,
                  "end": 1998
                },
                "optional": false,
                "computed": false,
                "start": 1987,
                "end": 1998
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "nameMA",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1999,
                  "end": 2005
                }
              ],
              "optional": false,
              "start": 1987,
              "end": 2006
            },
            "directive": null,
            "start": 1987,
            "end": 2007
          }
        ],
        "start": 1981,
        "end": 2009
      },
      "start": 1898,
      "end": 2009
    },
    {
      "type": "ForOfStatement",
      "await": false,
      "left": {
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
                  "start": 2021,
                  "end": 2029
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
                    "start": 2034,
                    "end": 2044
                  },
                  "optional": false,
                  "typeAnnotation": null,
                  "value": null,
                  "start": 2031,
                  "end": 2044
                }
              ],
              "optional": false,
              "typeAnnotation": null,
              "start": 2020,
              "end": 2045
            },
            "init": null,
            "definite": false,
            "start": 2020,
            "end": 2045
          }
        ],
        "declare": false,
        "start": 2016,
        "end": 2045
      },
      "right": {
        "type": "Identifier",
        "decorators": [],
        "name": "robots",
        "optional": false,
        "typeAnnotation": null,
        "start": 2049,
        "end": 2055
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
                  "start": 2063,
                  "end": 2070
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "log",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2071,
                  "end": 2074
                },
                "optional": false,
                "computed": false,
                "start": 2063,
                "end": 2074
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "numberA3",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2075,
                  "end": 2083
                }
              ],
              "optional": false,
              "start": 2063,
              "end": 2084
            },
            "directive": null,
            "start": 2063,
            "end": 2085
          }
        ],
        "start": 2057,
        "end": 2087
      },
      "start": 2011,
      "end": 2087
    },
    {
      "type": "ForOfStatement",
      "await": false,
      "left": {
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
                  "start": 2098,
                  "end": 2106
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
                    "start": 2111,
                    "end": 2121
                  },
                  "optional": false,
                  "typeAnnotation": null,
                  "value": null,
                  "start": 2108,
                  "end": 2121
                }
              ],
              "optional": false,
              "typeAnnotation": null,
              "start": 2097,
              "end": 2122
            },
            "init": null,
            "definite": false,
            "start": 2097,
            "end": 2122
          }
        ],
        "declare": false,
        "start": 2093,
        "end": 2122
      },
      "right": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "getRobots",
          "optional": false,
          "typeAnnotation": null,
          "start": 2126,
          "end": 2135
        },
        "typeArguments": null,
        "arguments": [],
        "optional": false,
        "start": 2126,
        "end": 2137
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
                  "start": 2145,
                  "end": 2152
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "log",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2153,
                  "end": 2156
                },
                "optional": false,
                "computed": false,
                "start": 2145,
                "end": 2156
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "numberA3",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2157,
                  "end": 2165
                }
              ],
              "optional": false,
              "start": 2145,
              "end": 2166
            },
            "directive": null,
            "start": 2145,
            "end": 2167
          }
        ],
        "start": 2139,
        "end": 2169
      },
      "start": 2088,
      "end": 2169
    },
    {
      "type": "ForOfStatement",
      "await": false,
      "left": {
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
                  "start": 2180,
                  "end": 2188
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
                    "start": 2193,
                    "end": 2203
                  },
                  "optional": false,
                  "typeAnnotation": null,
                  "value": null,
                  "start": 2190,
                  "end": 2203
                }
              ],
              "optional": false,
              "typeAnnotation": null,
              "start": 2179,
              "end": 2204
            },
            "init": null,
            "definite": false,
            "start": 2179,
            "end": 2204
          }
        ],
        "declare": false,
        "start": 2175,
        "end": 2204
      },
      "right": {
        "type": "ArrayExpression",
        "elements": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "robotA",
            "optional": false,
            "typeAnnotation": null,
            "start": 2209,
            "end": 2215
          },
          {
            "type": "Identifier",
            "decorators": [],
            "name": "robotB",
            "optional": false,
            "typeAnnotation": null,
            "start": 2217,
            "end": 2223
          }
        ],
        "start": 2208,
        "end": 2224
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
                  "start": 2232,
                  "end": 2239
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "log",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2240,
                  "end": 2243
                },
                "optional": false,
                "computed": false,
                "start": 2232,
                "end": 2243
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "numberA3",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2244,
                  "end": 2252
                }
              ],
              "optional": false,
              "start": 2232,
              "end": 2253
            },
            "directive": null,
            "start": 2232,
            "end": 2254
          }
        ],
        "start": 2226,
        "end": 2256
      },
      "start": 2170,
      "end": 2256
    },
    {
      "type": "ForOfStatement",
      "await": false,
      "left": {
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
                    "start": 2270,
                    "end": 2285
                  },
                  "optional": false,
                  "typeAnnotation": null,
                  "value": null,
                  "start": 2267,
                  "end": 2285
                }
              ],
              "optional": false,
              "typeAnnotation": null,
              "start": 2266,
              "end": 2286
            },
            "init": null,
            "definite": false,
            "start": 2266,
            "end": 2286
          }
        ],
        "declare": false,
        "start": 2262,
        "end": 2286
      },
      "right": {
        "type": "Identifier",
        "decorators": [],
        "name": "multiRobots",
        "optional": false,
        "typeAnnotation": null,
        "start": 2290,
        "end": 2301
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
                  "start": 2309,
                  "end": 2316
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "log",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2317,
                  "end": 2320
                },
                "optional": false,
                "computed": false,
                "start": 2309,
                "end": 2320
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "multiRobotAInfo",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2321,
                  "end": 2336
                }
              ],
              "optional": false,
              "start": 2309,
              "end": 2337
            },
            "directive": null,
            "start": 2309,
            "end": 2338
          }
        ],
        "start": 2303,
        "end": 2340
      },
      "start": 2257,
      "end": 2340
    },
    {
      "type": "ForOfStatement",
      "await": false,
      "left": {
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
                    "start": 2354,
                    "end": 2369
                  },
                  "optional": false,
                  "typeAnnotation": null,
                  "value": null,
                  "start": 2351,
                  "end": 2369
                }
              ],
              "optional": false,
              "typeAnnotation": null,
              "start": 2350,
              "end": 2370
            },
            "init": null,
            "definite": false,
            "start": 2350,
            "end": 2370
          }
        ],
        "declare": false,
        "start": 2346,
        "end": 2370
      },
      "right": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "getMultiRobots",
          "optional": false,
          "typeAnnotation": null,
          "start": 2374,
          "end": 2388
        },
        "typeArguments": null,
        "arguments": [],
        "optional": false,
        "start": 2374,
        "end": 2390
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
                  "start": 2398,
                  "end": 2405
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "log",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2406,
                  "end": 2409
                },
                "optional": false,
                "computed": false,
                "start": 2398,
                "end": 2409
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "multiRobotAInfo",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2410,
                  "end": 2425
                }
              ],
              "optional": false,
              "start": 2398,
              "end": 2426
            },
            "directive": null,
            "start": 2398,
            "end": 2427
          }
        ],
        "start": 2392,
        "end": 2429
      },
      "start": 2341,
      "end": 2429
    },
    {
      "type": "ForOfStatement",
      "await": false,
      "left": {
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
                    "start": 2443,
                    "end": 2458
                  },
                  "optional": false,
                  "typeAnnotation": null,
                  "value": null,
                  "start": 2440,
                  "end": 2458
                }
              ],
              "optional": false,
              "typeAnnotation": null,
              "start": 2439,
              "end": 2459
            },
            "init": null,
            "definite": false,
            "start": 2439,
            "end": 2459
          }
        ],
        "declare": false,
        "start": 2435,
        "end": 2459
      },
      "right": {
        "type": "ArrayExpression",
        "elements": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "multiRobotA",
            "optional": false,
            "typeAnnotation": null,
            "start": 2464,
            "end": 2475
          },
          {
            "type": "Identifier",
            "decorators": [],
            "name": "multiRobotB",
            "optional": false,
            "typeAnnotation": null,
            "start": 2477,
            "end": 2488
          }
        ],
        "start": 2463,
        "end": 2489
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
                  "start": 2497,
                  "end": 2504
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "log",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2505,
                  "end": 2508
                },
                "optional": false,
                "computed": false,
                "start": 2497,
                "end": 2508
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "multiRobotAInfo",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2509,
                  "end": 2524
                }
              ],
              "optional": false,
              "start": 2497,
              "end": 2525
            },
            "directive": null,
            "start": 2497,
            "end": 2526
          }
        ],
        "start": 2491,
        "end": 2528
      },
      "start": 2430,
      "end": 2528
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 2528
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
    "value": "let",
    "start": 187,
    "end": 190
  },
  {
    "type": "Identifier",
    "value": "robotB",
    "start": 191,
    "end": 197
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 197,
    "end": 198
  },
  {
    "type": "Identifier",
    "value": "Robot",
    "start": 199,
    "end": 204
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 205,
    "end": 206
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 207,
    "end": 208
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 208,
    "end": 209
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 209,
    "end": 210
  },
  {
    "type": "String",
    "value": "\"trimmer\"",
    "start": 211,
    "end": 220
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 220,
    "end": 221
  },
  {
    "type": "String",
    "value": "\"trimming\"",
    "start": 222,
    "end": 232
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 232,
    "end": 233
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 233,
    "end": 234
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 235,
    "end": 238
  },
  {
    "type": "Identifier",
    "value": "robots",
    "start": 239,
    "end": 245
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 246,
    "end": 247
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 248,
    "end": 249
  },
  {
    "type": "Identifier",
    "value": "robotA",
    "start": 249,
    "end": 255
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 255,
    "end": 256
  },
  {
    "type": "Identifier",
    "value": "robotB",
    "start": 257,
    "end": 263
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 263,
    "end": 264
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 264,
    "end": 265
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 266,
    "end": 274
  },
  {
    "type": "Identifier",
    "value": "getRobots",
    "start": 275,
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
    "value": "{",
    "start": 287,
    "end": 288
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 293,
    "end": 299
  },
  {
    "type": "Identifier",
    "value": "robots",
    "start": 300,
    "end": 306
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 306,
    "end": 307
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 308,
    "end": 309
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 311,
    "end": 314
  },
  {
    "type": "Identifier",
    "value": "multiRobotA",
    "start": 315,
    "end": 326
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 326,
    "end": 327
  },
  {
    "type": "Identifier",
    "value": "MultiSkilledRobot",
    "start": 328,
    "end": 345
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 346,
    "end": 347
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 348,
    "end": 349
  },
  {
    "type": "String",
    "value": "\"mower\"",
    "start": 349,
    "end": 356
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 356,
    "end": 357
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 358,
    "end": 359
  },
  {
    "type": "String",
    "value": "\"mowing\"",
    "start": 359,
    "end": 367
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 367,
    "end": 368
  },
  {
    "type": "String",
    "value": "\"\"",
    "start": 369,
    "end": 371
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 371,
    "end": 372
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 372,
    "end": 373
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 373,
    "end": 374
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 375,
    "end": 378
  },
  {
    "type": "Identifier",
    "value": "multiRobotB",
    "start": 379,
    "end": 390
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 390,
    "end": 391
  },
  {
    "type": "Identifier",
    "value": "MultiSkilledRobot",
    "start": 392,
    "end": 409
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 410,
    "end": 411
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 412,
    "end": 413
  },
  {
    "type": "String",
    "value": "\"trimmer\"",
    "start": 413,
    "end": 422
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 422,
    "end": 423
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 424,
    "end": 425
  },
  {
    "type": "String",
    "value": "\"trimming\"",
    "start": 425,
    "end": 435
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 435,
    "end": 436
  },
  {
    "type": "String",
    "value": "\"edging\"",
    "start": 437,
    "end": 445
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 445,
    "end": 446
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 446,
    "end": 447
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 447,
    "end": 448
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 449,
    "end": 452
  },
  {
    "type": "Identifier",
    "value": "multiRobots",
    "start": 453,
    "end": 464
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 465,
    "end": 466
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 467,
    "end": 468
  },
  {
    "type": "Identifier",
    "value": "multiRobotA",
    "start": 468,
    "end": 479
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 479,
    "end": 480
  },
  {
    "type": "Identifier",
    "value": "multiRobotB",
    "start": 481,
    "end": 492
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 492,
    "end": 493
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 493,
    "end": 494
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 495,
    "end": 503
  },
  {
    "type": "Identifier",
    "value": "getMultiRobots",
    "start": 504,
    "end": 518
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 518,
    "end": 519
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 519,
    "end": 520
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 521,
    "end": 522
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 527,
    "end": 533
  },
  {
    "type": "Identifier",
    "value": "multiRobots",
    "start": 534,
    "end": 545
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 545,
    "end": 546
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 547,
    "end": 548
  },
  {
    "type": "Keyword",
    "value": "for",
    "start": 550,
    "end": 553
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 554,
    "end": 555
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 555,
    "end": 558
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 559,
    "end": 560
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 560,
    "end": 561
  },
  {
    "type": "Identifier",
    "value": "nameA",
    "start": 562,
    "end": 567
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 567,
    "end": 568
  },
  {
    "type": "Identifier",
    "value": "of",
    "start": 569,
    "end": 571
  },
  {
    "type": "Identifier",
    "value": "robots",
    "start": 572,
    "end": 578
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 578,
    "end": 579
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 580,
    "end": 581
  },
  {
    "type": "Identifier",
    "value": "console",
    "start": 586,
    "end": 593
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 593,
    "end": 594
  },
  {
    "type": "Identifier",
    "value": "log",
    "start": 594,
    "end": 597
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 597,
    "end": 598
  },
  {
    "type": "Identifier",
    "value": "nameA",
    "start": 598,
    "end": 603
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 603,
    "end": 604
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 604,
    "end": 605
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 606,
    "end": 607
  },
  {
    "type": "Keyword",
    "value": "for",
    "start": 608,
    "end": 611
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 612,
    "end": 613
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 613,
    "end": 616
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 617,
    "end": 618
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 618,
    "end": 619
  },
  {
    "type": "Identifier",
    "value": "nameA",
    "start": 620,
    "end": 625
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 625,
    "end": 626
  },
  {
    "type": "Identifier",
    "value": "of",
    "start": 627,
    "end": 629
  },
  {
    "type": "Identifier",
    "value": "getRobots",
    "start": 630,
    "end": 639
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 639,
    "end": 640
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 640,
    "end": 641
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 641,
    "end": 642
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 643,
    "end": 644
  },
  {
    "type": "Identifier",
    "value": "console",
    "start": 649,
    "end": 656
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 656,
    "end": 657
  },
  {
    "type": "Identifier",
    "value": "log",
    "start": 657,
    "end": 660
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 660,
    "end": 661
  },
  {
    "type": "Identifier",
    "value": "nameA",
    "start": 661,
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
    "type": "Punctuator",
    "value": "}",
    "start": 669,
    "end": 670
  },
  {
    "type": "Keyword",
    "value": "for",
    "start": 671,
    "end": 674
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 675,
    "end": 676
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 676,
    "end": 679
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 680,
    "end": 681
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 681,
    "end": 682
  },
  {
    "type": "Identifier",
    "value": "nameA",
    "start": 683,
    "end": 688
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 688,
    "end": 689
  },
  {
    "type": "Identifier",
    "value": "of",
    "start": 690,
    "end": 692
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 693,
    "end": 694
  },
  {
    "type": "Identifier",
    "value": "robotA",
    "start": 694,
    "end": 700
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 700,
    "end": 701
  },
  {
    "type": "Identifier",
    "value": "robotB",
    "start": 702,
    "end": 708
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 708,
    "end": 709
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 709,
    "end": 710
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 711,
    "end": 712
  },
  {
    "type": "Identifier",
    "value": "console",
    "start": 717,
    "end": 724
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 724,
    "end": 725
  },
  {
    "type": "Identifier",
    "value": "log",
    "start": 725,
    "end": 728
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 728,
    "end": 729
  },
  {
    "type": "Identifier",
    "value": "nameA",
    "start": 729,
    "end": 734
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 734,
    "end": 735
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 735,
    "end": 736
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 737,
    "end": 738
  },
  {
    "type": "Keyword",
    "value": "for",
    "start": 739,
    "end": 742
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 743,
    "end": 744
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 744,
    "end": 747
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 748,
    "end": 749
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 749,
    "end": 750
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 751,
    "end": 752
  },
  {
    "type": "Identifier",
    "value": "primarySkillA",
    "start": 752,
    "end": 765
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 765,
    "end": 766
  },
  {
    "type": "Identifier",
    "value": "secondarySkillA",
    "start": 767,
    "end": 782
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 782,
    "end": 783
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 783,
    "end": 784
  },
  {
    "type": "Identifier",
    "value": "of",
    "start": 785,
    "end": 787
  },
  {
    "type": "Identifier",
    "value": "multiRobots",
    "start": 788,
    "end": 799
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 799,
    "end": 800
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 801,
    "end": 802
  },
  {
    "type": "Identifier",
    "value": "console",
    "start": 807,
    "end": 814
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 814,
    "end": 815
  },
  {
    "type": "Identifier",
    "value": "log",
    "start": 815,
    "end": 818
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 818,
    "end": 819
  },
  {
    "type": "Identifier",
    "value": "primarySkillA",
    "start": 819,
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
    "value": ";",
    "start": 833,
    "end": 834
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 835,
    "end": 836
  },
  {
    "type": "Keyword",
    "value": "for",
    "start": 837,
    "end": 840
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 841,
    "end": 842
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 842,
    "end": 845
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 846,
    "end": 847
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 847,
    "end": 848
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 849,
    "end": 850
  },
  {
    "type": "Identifier",
    "value": "primarySkillA",
    "start": 850,
    "end": 863
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 863,
    "end": 864
  },
  {
    "type": "Identifier",
    "value": "secondarySkillA",
    "start": 865,
    "end": 880
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 880,
    "end": 881
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 881,
    "end": 882
  },
  {
    "type": "Identifier",
    "value": "of",
    "start": 883,
    "end": 885
  },
  {
    "type": "Identifier",
    "value": "getMultiRobots",
    "start": 886,
    "end": 900
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 900,
    "end": 901
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 901,
    "end": 902
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 902,
    "end": 903
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 904,
    "end": 905
  },
  {
    "type": "Identifier",
    "value": "console",
    "start": 910,
    "end": 917
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 917,
    "end": 918
  },
  {
    "type": "Identifier",
    "value": "log",
    "start": 918,
    "end": 921
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 921,
    "end": 922
  },
  {
    "type": "Identifier",
    "value": "primarySkillA",
    "start": 922,
    "end": 935
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 935,
    "end": 936
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 936,
    "end": 937
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 938,
    "end": 939
  },
  {
    "type": "Keyword",
    "value": "for",
    "start": 940,
    "end": 943
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 944,
    "end": 945
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 945,
    "end": 948
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 949,
    "end": 950
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 950,
    "end": 951
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 952,
    "end": 953
  },
  {
    "type": "Identifier",
    "value": "primarySkillA",
    "start": 953,
    "end": 966
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 966,
    "end": 967
  },
  {
    "type": "Identifier",
    "value": "secondarySkillA",
    "start": 968,
    "end": 983
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 983,
    "end": 984
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 984,
    "end": 985
  },
  {
    "type": "Identifier",
    "value": "of",
    "start": 986,
    "end": 988
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 989,
    "end": 990
  },
  {
    "type": "Identifier",
    "value": "multiRobotA",
    "start": 990,
    "end": 1001
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1001,
    "end": 1002
  },
  {
    "type": "Identifier",
    "value": "multiRobotB",
    "start": 1003,
    "end": 1014
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1014,
    "end": 1015
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1015,
    "end": 1016
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1017,
    "end": 1018
  },
  {
    "type": "Identifier",
    "value": "console",
    "start": 1023,
    "end": 1030
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1030,
    "end": 1031
  },
  {
    "type": "Identifier",
    "value": "log",
    "start": 1031,
    "end": 1034
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1034,
    "end": 1035
  },
  {
    "type": "Identifier",
    "value": "primarySkillA",
    "start": 1035,
    "end": 1048
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1048,
    "end": 1049
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1049,
    "end": 1050
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1051,
    "end": 1052
  },
  {
    "type": "Keyword",
    "value": "for",
    "start": 1054,
    "end": 1057
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1058,
    "end": 1059
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 1059,
    "end": 1062
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1063,
    "end": 1064
  },
  {
    "type": "Identifier",
    "value": "numberB",
    "start": 1064,
    "end": 1071
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1071,
    "end": 1072
  },
  {
    "type": "Identifier",
    "value": "of",
    "start": 1073,
    "end": 1075
  },
  {
    "type": "Identifier",
    "value": "robots",
    "start": 1076,
    "end": 1082
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1082,
    "end": 1083
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1084,
    "end": 1085
  },
  {
    "type": "Identifier",
    "value": "console",
    "start": 1090,
    "end": 1097
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1097,
    "end": 1098
  },
  {
    "type": "Identifier",
    "value": "log",
    "start": 1098,
    "end": 1101
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1101,
    "end": 1102
  },
  {
    "type": "Identifier",
    "value": "numberB",
    "start": 1102,
    "end": 1109
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1109,
    "end": 1110
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1110,
    "end": 1111
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1112,
    "end": 1113
  },
  {
    "type": "Keyword",
    "value": "for",
    "start": 1114,
    "end": 1117
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1118,
    "end": 1119
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 1119,
    "end": 1122
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1123,
    "end": 1124
  },
  {
    "type": "Identifier",
    "value": "numberB",
    "start": 1124,
    "end": 1131
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1131,
    "end": 1132
  },
  {
    "type": "Identifier",
    "value": "of",
    "start": 1133,
    "end": 1135
  },
  {
    "type": "Identifier",
    "value": "getRobots",
    "start": 1136,
    "end": 1145
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1145,
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
    "value": ")",
    "start": 1147,
    "end": 1148
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1149,
    "end": 1150
  },
  {
    "type": "Identifier",
    "value": "console",
    "start": 1155,
    "end": 1162
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1162,
    "end": 1163
  },
  {
    "type": "Identifier",
    "value": "log",
    "start": 1163,
    "end": 1166
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1166,
    "end": 1167
  },
  {
    "type": "Identifier",
    "value": "numberB",
    "start": 1167,
    "end": 1174
  },
  {
    "type": "Punctuator",
    "value": ")",
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
    "type": "Punctuator",
    "value": "}",
    "start": 1177,
    "end": 1178
  },
  {
    "type": "Keyword",
    "value": "for",
    "start": 1179,
    "end": 1182
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1183,
    "end": 1184
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 1184,
    "end": 1187
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1188,
    "end": 1189
  },
  {
    "type": "Identifier",
    "value": "numberB",
    "start": 1189,
    "end": 1196
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1196,
    "end": 1197
  },
  {
    "type": "Identifier",
    "value": "of",
    "start": 1198,
    "end": 1200
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1201,
    "end": 1202
  },
  {
    "type": "Identifier",
    "value": "robotA",
    "start": 1202,
    "end": 1208
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1208,
    "end": 1209
  },
  {
    "type": "Identifier",
    "value": "robotB",
    "start": 1210,
    "end": 1216
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1216,
    "end": 1217
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1217,
    "end": 1218
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1219,
    "end": 1220
  },
  {
    "type": "Identifier",
    "value": "console",
    "start": 1225,
    "end": 1232
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1232,
    "end": 1233
  },
  {
    "type": "Identifier",
    "value": "log",
    "start": 1233,
    "end": 1236
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1236,
    "end": 1237
  },
  {
    "type": "Identifier",
    "value": "numberB",
    "start": 1237,
    "end": 1244
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1244,
    "end": 1245
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1245,
    "end": 1246
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1247,
    "end": 1248
  },
  {
    "type": "Keyword",
    "value": "for",
    "start": 1249,
    "end": 1252
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1253,
    "end": 1254
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 1254,
    "end": 1257
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1258,
    "end": 1259
  },
  {
    "type": "Identifier",
    "value": "nameB",
    "start": 1259,
    "end": 1264
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1264,
    "end": 1265
  },
  {
    "type": "Identifier",
    "value": "of",
    "start": 1266,
    "end": 1268
  },
  {
    "type": "Identifier",
    "value": "multiRobots",
    "start": 1269,
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
    "value": "{",
    "start": 1282,
    "end": 1283
  },
  {
    "type": "Identifier",
    "value": "console",
    "start": 1288,
    "end": 1295
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1295,
    "end": 1296
  },
  {
    "type": "Identifier",
    "value": "log",
    "start": 1296,
    "end": 1299
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1299,
    "end": 1300
  },
  {
    "type": "Identifier",
    "value": "nameB",
    "start": 1300,
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
    "type": "Identifier",
    "value": "of",
    "start": 1327,
    "end": 1329
  },
  {
    "type": "Identifier",
    "value": "getMultiRobots",
    "start": 1330,
    "end": 1344
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1344,
    "end": 1345
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1345,
    "end": 1346
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1346,
    "end": 1347
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1348,
    "end": 1349
  },
  {
    "type": "Identifier",
    "value": "console",
    "start": 1354,
    "end": 1361
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1361,
    "end": 1362
  },
  {
    "type": "Identifier",
    "value": "log",
    "start": 1362,
    "end": 1365
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1365,
    "end": 1366
  },
  {
    "type": "Identifier",
    "value": "nameB",
    "start": 1366,
    "end": 1371
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1371,
    "end": 1372
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1372,
    "end": 1373
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1374,
    "end": 1375
  },
  {
    "type": "Keyword",
    "value": "for",
    "start": 1376,
    "end": 1379
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1380,
    "end": 1381
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 1381,
    "end": 1384
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1385,
    "end": 1386
  },
  {
    "type": "Identifier",
    "value": "nameB",
    "start": 1386,
    "end": 1391
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1391,
    "end": 1392
  },
  {
    "type": "Identifier",
    "value": "of",
    "start": 1393,
    "end": 1395
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1396,
    "end": 1397
  },
  {
    "type": "Identifier",
    "value": "multiRobotA",
    "start": 1397,
    "end": 1408
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1408,
    "end": 1409
  },
  {
    "type": "Identifier",
    "value": "multiRobotB",
    "start": 1410,
    "end": 1421
  },
  {
    "type": "Punctuator",
    "value": "]",
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
    "value": "{",
    "start": 1424,
    "end": 1425
  },
  {
    "type": "Identifier",
    "value": "console",
    "start": 1430,
    "end": 1437
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1437,
    "end": 1438
  },
  {
    "type": "Identifier",
    "value": "log",
    "start": 1438,
    "end": 1441
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1441,
    "end": 1442
  },
  {
    "type": "Identifier",
    "value": "nameB",
    "start": 1442,
    "end": 1447
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1447,
    "end": 1448
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1448,
    "end": 1449
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1450,
    "end": 1451
  },
  {
    "type": "Keyword",
    "value": "for",
    "start": 1453,
    "end": 1456
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1457,
    "end": 1458
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 1458,
    "end": 1461
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1462,
    "end": 1463
  },
  {
    "type": "Identifier",
    "value": "numberA2",
    "start": 1463,
    "end": 1471
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1471,
    "end": 1472
  },
  {
    "type": "Identifier",
    "value": "nameA2",
    "start": 1473,
    "end": 1479
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1479,
    "end": 1480
  },
  {
    "type": "Identifier",
    "value": "skillA2",
    "start": 1481,
    "end": 1488
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1488,
    "end": 1489
  },
  {
    "type": "Identifier",
    "value": "of",
    "start": 1490,
    "end": 1492
  },
  {
    "type": "Identifier",
    "value": "robots",
    "start": 1493,
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
    "value": "{",
    "start": 1501,
    "end": 1502
  },
  {
    "type": "Identifier",
    "value": "console",
    "start": 1507,
    "end": 1514
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1514,
    "end": 1515
  },
  {
    "type": "Identifier",
    "value": "log",
    "start": 1515,
    "end": 1518
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1518,
    "end": 1519
  },
  {
    "type": "Identifier",
    "value": "nameA2",
    "start": 1519,
    "end": 1525
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1525,
    "end": 1526
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1526,
    "end": 1527
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1528,
    "end": 1529
  },
  {
    "type": "Keyword",
    "value": "for",
    "start": 1530,
    "end": 1533
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1534,
    "end": 1535
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 1535,
    "end": 1538
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1539,
    "end": 1540
  },
  {
    "type": "Identifier",
    "value": "numberA2",
    "start": 1540,
    "end": 1548
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1548,
    "end": 1549
  },
  {
    "type": "Identifier",
    "value": "nameA2",
    "start": 1550,
    "end": 1556
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1556,
    "end": 1557
  },
  {
    "type": "Identifier",
    "value": "skillA2",
    "start": 1558,
    "end": 1565
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1565,
    "end": 1566
  },
  {
    "type": "Identifier",
    "value": "of",
    "start": 1567,
    "end": 1569
  },
  {
    "type": "Identifier",
    "value": "getRobots",
    "start": 1570,
    "end": 1579
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1579,
    "end": 1580
  },
  {
    "type": "Punctuator",
    "value": ")",
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
    "type": "Punctuator",
    "value": "{",
    "start": 1583,
    "end": 1584
  },
  {
    "type": "Identifier",
    "value": "console",
    "start": 1589,
    "end": 1596
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1596,
    "end": 1597
  },
  {
    "type": "Identifier",
    "value": "log",
    "start": 1597,
    "end": 1600
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1600,
    "end": 1601
  },
  {
    "type": "Identifier",
    "value": "nameA2",
    "start": 1601,
    "end": 1607
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1607,
    "end": 1608
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1608,
    "end": 1609
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1610,
    "end": 1611
  },
  {
    "type": "Keyword",
    "value": "for",
    "start": 1612,
    "end": 1615
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1616,
    "end": 1617
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 1617,
    "end": 1620
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1621,
    "end": 1622
  },
  {
    "type": "Identifier",
    "value": "numberA2",
    "start": 1622,
    "end": 1630
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1630,
    "end": 1631
  },
  {
    "type": "Identifier",
    "value": "nameA2",
    "start": 1632,
    "end": 1638
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1638,
    "end": 1639
  },
  {
    "type": "Identifier",
    "value": "skillA2",
    "start": 1640,
    "end": 1647
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1647,
    "end": 1648
  },
  {
    "type": "Identifier",
    "value": "of",
    "start": 1649,
    "end": 1651
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1652,
    "end": 1653
  },
  {
    "type": "Identifier",
    "value": "robotA",
    "start": 1653,
    "end": 1659
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1659,
    "end": 1660
  },
  {
    "type": "Identifier",
    "value": "robotB",
    "start": 1661,
    "end": 1667
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1667,
    "end": 1668
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1668,
    "end": 1669
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1670,
    "end": 1671
  },
  {
    "type": "Identifier",
    "value": "console",
    "start": 1676,
    "end": 1683
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1683,
    "end": 1684
  },
  {
    "type": "Identifier",
    "value": "log",
    "start": 1684,
    "end": 1687
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1687,
    "end": 1688
  },
  {
    "type": "Identifier",
    "value": "nameA2",
    "start": 1688,
    "end": 1694
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1694,
    "end": 1695
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1695,
    "end": 1696
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1697,
    "end": 1698
  },
  {
    "type": "Keyword",
    "value": "for",
    "start": 1699,
    "end": 1702
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1703,
    "end": 1704
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 1704,
    "end": 1707
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1708,
    "end": 1709
  },
  {
    "type": "Identifier",
    "value": "nameMA",
    "start": 1709,
    "end": 1715
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1715,
    "end": 1716
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1717,
    "end": 1718
  },
  {
    "type": "Identifier",
    "value": "primarySkillA",
    "start": 1718,
    "end": 1731
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1731,
    "end": 1732
  },
  {
    "type": "Identifier",
    "value": "secondarySkillA",
    "start": 1733,
    "end": 1748
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1748,
    "end": 1749
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1749,
    "end": 1750
  },
  {
    "type": "Identifier",
    "value": "of",
    "start": 1751,
    "end": 1753
  },
  {
    "type": "Identifier",
    "value": "multiRobots",
    "start": 1754,
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
    "value": "{",
    "start": 1767,
    "end": 1768
  },
  {
    "type": "Identifier",
    "value": "console",
    "start": 1773,
    "end": 1780
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1780,
    "end": 1781
  },
  {
    "type": "Identifier",
    "value": "log",
    "start": 1781,
    "end": 1784
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1784,
    "end": 1785
  },
  {
    "type": "Identifier",
    "value": "nameMA",
    "start": 1785,
    "end": 1791
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1791,
    "end": 1792
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1792,
    "end": 1793
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1794,
    "end": 1795
  },
  {
    "type": "Keyword",
    "value": "for",
    "start": 1796,
    "end": 1799
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1800,
    "end": 1801
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 1801,
    "end": 1804
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1805,
    "end": 1806
  },
  {
    "type": "Identifier",
    "value": "nameMA",
    "start": 1806,
    "end": 1812
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1812,
    "end": 1813
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1814,
    "end": 1815
  },
  {
    "type": "Identifier",
    "value": "primarySkillA",
    "start": 1815,
    "end": 1828
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1828,
    "end": 1829
  },
  {
    "type": "Identifier",
    "value": "secondarySkillA",
    "start": 1830,
    "end": 1845
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1845,
    "end": 1846
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1846,
    "end": 1847
  },
  {
    "type": "Identifier",
    "value": "of",
    "start": 1848,
    "end": 1850
  },
  {
    "type": "Identifier",
    "value": "getMultiRobots",
    "start": 1851,
    "end": 1865
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1865,
    "end": 1866
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1866,
    "end": 1867
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1867,
    "end": 1868
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1869,
    "end": 1870
  },
  {
    "type": "Identifier",
    "value": "console",
    "start": 1875,
    "end": 1882
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1882,
    "end": 1883
  },
  {
    "type": "Identifier",
    "value": "log",
    "start": 1883,
    "end": 1886
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1886,
    "end": 1887
  },
  {
    "type": "Identifier",
    "value": "nameMA",
    "start": 1887,
    "end": 1893
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1893,
    "end": 1894
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1894,
    "end": 1895
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1896,
    "end": 1897
  },
  {
    "type": "Keyword",
    "value": "for",
    "start": 1898,
    "end": 1901
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1902,
    "end": 1903
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 1903,
    "end": 1906
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1907,
    "end": 1908
  },
  {
    "type": "Identifier",
    "value": "nameMA",
    "start": 1908,
    "end": 1914
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1914,
    "end": 1915
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1916,
    "end": 1917
  },
  {
    "type": "Identifier",
    "value": "primarySkillA",
    "start": 1917,
    "end": 1930
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1930,
    "end": 1931
  },
  {
    "type": "Identifier",
    "value": "secondarySkillA",
    "start": 1932,
    "end": 1947
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1947,
    "end": 1948
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1948,
    "end": 1949
  },
  {
    "type": "Identifier",
    "value": "of",
    "start": 1950,
    "end": 1952
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1953,
    "end": 1954
  },
  {
    "type": "Identifier",
    "value": "multiRobotA",
    "start": 1954,
    "end": 1965
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1965,
    "end": 1966
  },
  {
    "type": "Identifier",
    "value": "multiRobotB",
    "start": 1967,
    "end": 1978
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1978,
    "end": 1979
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1979,
    "end": 1980
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1981,
    "end": 1982
  },
  {
    "type": "Identifier",
    "value": "console",
    "start": 1987,
    "end": 1994
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1994,
    "end": 1995
  },
  {
    "type": "Identifier",
    "value": "log",
    "start": 1995,
    "end": 1998
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1998,
    "end": 1999
  },
  {
    "type": "Identifier",
    "value": "nameMA",
    "start": 1999,
    "end": 2005
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2005,
    "end": 2006
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2006,
    "end": 2007
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2008,
    "end": 2009
  },
  {
    "type": "Keyword",
    "value": "for",
    "start": 2011,
    "end": 2014
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2015,
    "end": 2016
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 2016,
    "end": 2019
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 2020,
    "end": 2021
  },
  {
    "type": "Identifier",
    "value": "numberA3",
    "start": 2021,
    "end": 2029
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2029,
    "end": 2030
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 2031,
    "end": 2034
  },
  {
    "type": "Identifier",
    "value": "robotAInfo",
    "start": 2034,
    "end": 2044
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 2044,
    "end": 2045
  },
  {
    "type": "Identifier",
    "value": "of",
    "start": 2046,
    "end": 2048
  },
  {
    "type": "Identifier",
    "value": "robots",
    "start": 2049,
    "end": 2055
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2055,
    "end": 2056
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2057,
    "end": 2058
  },
  {
    "type": "Identifier",
    "value": "console",
    "start": 2063,
    "end": 2070
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2070,
    "end": 2071
  },
  {
    "type": "Identifier",
    "value": "log",
    "start": 2071,
    "end": 2074
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2074,
    "end": 2075
  },
  {
    "type": "Identifier",
    "value": "numberA3",
    "start": 2075,
    "end": 2083
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2083,
    "end": 2084
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2084,
    "end": 2085
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2086,
    "end": 2087
  },
  {
    "type": "Keyword",
    "value": "for",
    "start": 2088,
    "end": 2091
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2092,
    "end": 2093
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 2093,
    "end": 2096
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 2097,
    "end": 2098
  },
  {
    "type": "Identifier",
    "value": "numberA3",
    "start": 2098,
    "end": 2106
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2106,
    "end": 2107
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 2108,
    "end": 2111
  },
  {
    "type": "Identifier",
    "value": "robotAInfo",
    "start": 2111,
    "end": 2121
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 2121,
    "end": 2122
  },
  {
    "type": "Identifier",
    "value": "of",
    "start": 2123,
    "end": 2125
  },
  {
    "type": "Identifier",
    "value": "getRobots",
    "start": 2126,
    "end": 2135
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2135,
    "end": 2136
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2136,
    "end": 2137
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2137,
    "end": 2138
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2139,
    "end": 2140
  },
  {
    "type": "Identifier",
    "value": "console",
    "start": 2145,
    "end": 2152
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2152,
    "end": 2153
  },
  {
    "type": "Identifier",
    "value": "log",
    "start": 2153,
    "end": 2156
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2156,
    "end": 2157
  },
  {
    "type": "Identifier",
    "value": "numberA3",
    "start": 2157,
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
    "type": "Keyword",
    "value": "let",
    "start": 2175,
    "end": 2178
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 2179,
    "end": 2180
  },
  {
    "type": "Identifier",
    "value": "numberA3",
    "start": 2180,
    "end": 2188
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2188,
    "end": 2189
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 2190,
    "end": 2193
  },
  {
    "type": "Identifier",
    "value": "robotAInfo",
    "start": 2193,
    "end": 2203
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 2203,
    "end": 2204
  },
  {
    "type": "Identifier",
    "value": "of",
    "start": 2205,
    "end": 2207
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 2208,
    "end": 2209
  },
  {
    "type": "Identifier",
    "value": "robotA",
    "start": 2209,
    "end": 2215
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2215,
    "end": 2216
  },
  {
    "type": "Identifier",
    "value": "robotB",
    "start": 2217,
    "end": 2223
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 2223,
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
    "value": "{",
    "start": 2226,
    "end": 2227
  },
  {
    "type": "Identifier",
    "value": "console",
    "start": 2232,
    "end": 2239
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2239,
    "end": 2240
  },
  {
    "type": "Identifier",
    "value": "log",
    "start": 2240,
    "end": 2243
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2243,
    "end": 2244
  },
  {
    "type": "Identifier",
    "value": "numberA3",
    "start": 2244,
    "end": 2252
  },
  {
    "type": "Punctuator",
    "value": ")",
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
    "type": "Punctuator",
    "value": "}",
    "start": 2255,
    "end": 2256
  },
  {
    "type": "Keyword",
    "value": "for",
    "start": 2257,
    "end": 2260
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2261,
    "end": 2262
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 2262,
    "end": 2265
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 2266,
    "end": 2267
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 2267,
    "end": 2270
  },
  {
    "type": "Identifier",
    "value": "multiRobotAInfo",
    "start": 2270,
    "end": 2285
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 2285,
    "end": 2286
  },
  {
    "type": "Identifier",
    "value": "of",
    "start": 2287,
    "end": 2289
  },
  {
    "type": "Identifier",
    "value": "multiRobots",
    "start": 2290,
    "end": 2301
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2301,
    "end": 2302
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2303,
    "end": 2304
  },
  {
    "type": "Identifier",
    "value": "console",
    "start": 2309,
    "end": 2316
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2316,
    "end": 2317
  },
  {
    "type": "Identifier",
    "value": "log",
    "start": 2317,
    "end": 2320
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2320,
    "end": 2321
  },
  {
    "type": "Identifier",
    "value": "multiRobotAInfo",
    "start": 2321,
    "end": 2336
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2336,
    "end": 2337
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2337,
    "end": 2338
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2339,
    "end": 2340
  },
  {
    "type": "Keyword",
    "value": "for",
    "start": 2341,
    "end": 2344
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2345,
    "end": 2346
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 2346,
    "end": 2349
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 2350,
    "end": 2351
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 2351,
    "end": 2354
  },
  {
    "type": "Identifier",
    "value": "multiRobotAInfo",
    "start": 2354,
    "end": 2369
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 2369,
    "end": 2370
  },
  {
    "type": "Identifier",
    "value": "of",
    "start": 2371,
    "end": 2373
  },
  {
    "type": "Identifier",
    "value": "getMultiRobots",
    "start": 2374,
    "end": 2388
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2388,
    "end": 2389
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2389,
    "end": 2390
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2390,
    "end": 2391
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2392,
    "end": 2393
  },
  {
    "type": "Identifier",
    "value": "console",
    "start": 2398,
    "end": 2405
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2405,
    "end": 2406
  },
  {
    "type": "Identifier",
    "value": "log",
    "start": 2406,
    "end": 2409
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2409,
    "end": 2410
  },
  {
    "type": "Identifier",
    "value": "multiRobotAInfo",
    "start": 2410,
    "end": 2425
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2425,
    "end": 2426
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2426,
    "end": 2427
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2428,
    "end": 2429
  },
  {
    "type": "Keyword",
    "value": "for",
    "start": 2430,
    "end": 2433
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2434,
    "end": 2435
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 2435,
    "end": 2438
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 2439,
    "end": 2440
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 2440,
    "end": 2443
  },
  {
    "type": "Identifier",
    "value": "multiRobotAInfo",
    "start": 2443,
    "end": 2458
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 2458,
    "end": 2459
  },
  {
    "type": "Identifier",
    "value": "of",
    "start": 2460,
    "end": 2462
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 2463,
    "end": 2464
  },
  {
    "type": "Identifier",
    "value": "multiRobotA",
    "start": 2464,
    "end": 2475
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2475,
    "end": 2476
  },
  {
    "type": "Identifier",
    "value": "multiRobotB",
    "start": 2477,
    "end": 2488
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 2488,
    "end": 2489
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2489,
    "end": 2490
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2491,
    "end": 2492
  },
  {
    "type": "Identifier",
    "value": "console",
    "start": 2497,
    "end": 2504
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2504,
    "end": 2505
  },
  {
    "type": "Identifier",
    "value": "log",
    "start": 2505,
    "end": 2508
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2508,
    "end": 2509
  },
  {
    "type": "Identifier",
    "value": "multiRobotAInfo",
    "start": 2509,
    "end": 2524
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2524,
    "end": 2525
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2525,
    "end": 2526
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2527,
    "end": 2528
  }
]
```
