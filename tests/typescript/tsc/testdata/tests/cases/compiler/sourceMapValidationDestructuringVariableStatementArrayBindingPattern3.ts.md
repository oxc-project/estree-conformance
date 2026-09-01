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
      "kind": "var",
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
      "kind": "var",
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
      "kind": "var",
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
                  "start": 252,
                  "end": 269
                },
                "typeArguments": null,
                "start": 252,
                "end": 269
              },
              "start": 250,
              "end": 269
            },
            "start": 239,
            "end": 269
          },
          "init": {
            "type": "ArrayExpression",
            "elements": [
              {
                "type": "Literal",
                "value": "mower",
                "raw": "\"mower\"",
                "start": 273,
                "end": 280
              },
              {
                "type": "ArrayExpression",
                "elements": [
                  {
                    "type": "Literal",
                    "value": "mowing",
                    "raw": "\"mowing\"",
                    "start": 283,
                    "end": 291
                  },
                  {
                    "type": "Literal",
                    "value": "",
                    "raw": "\"\"",
                    "start": 293,
                    "end": 295
                  }
                ],
                "start": 282,
                "end": 296
              }
            ],
            "start": 272,
            "end": 297
          },
          "definite": false,
          "start": 239,
          "end": 297
        }
      ],
      "declare": false,
      "start": 235,
      "end": 298
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
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
                  "start": 316,
                  "end": 333
                },
                "typeArguments": null,
                "start": 316,
                "end": 333
              },
              "start": 314,
              "end": 333
            },
            "start": 303,
            "end": 333
          },
          "init": {
            "type": "ArrayExpression",
            "elements": [
              {
                "type": "Literal",
                "value": "trimmer",
                "raw": "\"trimmer\"",
                "start": 337,
                "end": 346
              },
              {
                "type": "ArrayExpression",
                "elements": [
                  {
                    "type": "Literal",
                    "value": "trimming",
                    "raw": "\"trimming\"",
                    "start": 349,
                    "end": 359
                  },
                  {
                    "type": "Literal",
                    "value": "edging",
                    "raw": "\"edging\"",
                    "start": 361,
                    "end": 369
                  }
                ],
                "start": 348,
                "end": 370
              }
            ],
            "start": 336,
            "end": 371
          },
          "definite": false,
          "start": 303,
          "end": 371
        }
      ],
      "declare": false,
      "start": 299,
      "end": 372
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
                "start": 385,
                "end": 391
              },
              "start": 383,
              "end": 391
            },
            "start": 378,
            "end": 391
          },
          "init": null,
          "definite": false,
          "start": 378,
          "end": 391
        },
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
                "start": 402,
                "end": 408
              },
              "start": 400,
              "end": 408
            },
            "start": 393,
            "end": 408
          },
          "init": null,
          "definite": false,
          "start": 393,
          "end": 408
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
                "start": 417,
                "end": 423
              },
              "start": 415,
              "end": 423
            },
            "start": 410,
            "end": 423
          },
          "init": null,
          "definite": false,
          "start": 410,
          "end": 423
        },
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "skillB",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 433,
                "end": 439
              },
              "start": 431,
              "end": 439
            },
            "start": 425,
            "end": 439
          },
          "init": null,
          "definite": false,
          "start": 425,
          "end": 439
        }
      ],
      "declare": false,
      "start": 374,
      "end": 440
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
                      "start": 458,
                      "end": 464
                    },
                    {
                      "type": "TSStringKeyword",
                      "start": 467,
                      "end": 473
                    }
                  ],
                  "start": 458,
                  "end": 473
                },
                "start": 457,
                "end": 476
              },
              "start": 455,
              "end": 476
            },
            "start": 445,
            "end": 476
          },
          "init": null,
          "definite": false,
          "start": 445,
          "end": 476
        }
      ],
      "declare": false,
      "start": 441,
      "end": 477
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
            "name": "multiSkillB",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTupleType",
                "elementTypes": [
                  {
                    "type": "TSStringKeyword",
                    "start": 497,
                    "end": 503
                  },
                  {
                    "type": "TSStringKeyword",
                    "start": 505,
                    "end": 511
                  }
                ],
                "start": 496,
                "end": 512
              },
              "start": 494,
              "end": 512
            },
            "start": 483,
            "end": 512
          },
          "init": null,
          "definite": false,
          "start": 483,
          "end": 512
        },
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "nameMB",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 522,
                "end": 528
              },
              "start": 520,
              "end": 528
            },
            "start": 514,
            "end": 528
          },
          "init": null,
          "definite": false,
          "start": 514,
          "end": 528
        },
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "primarySkillB",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 545,
                "end": 551
              },
              "start": 543,
              "end": 551
            },
            "start": 530,
            "end": 551
          },
          "init": null,
          "definite": false,
          "start": 530,
          "end": 551
        },
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "secondarySkillB",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 570,
                "end": 576
              },
              "start": 568,
              "end": 576
            },
            "start": 553,
            "end": 576
          },
          "init": null,
          "definite": false,
          "start": 553,
          "end": 576
        }
      ],
      "declare": false,
      "start": 479,
      "end": 577
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
                      "start": 600,
                      "end": 606
                    },
                    {
                      "type": "TSTupleType",
                      "elementTypes": [
                        {
                          "type": "TSStringKeyword",
                          "start": 610,
                          "end": 616
                        },
                        {
                          "type": "TSStringKeyword",
                          "start": 618,
                          "end": 624
                        }
                      ],
                      "start": 609,
                      "end": 625
                    }
                  ],
                  "start": 600,
                  "end": 625
                },
                "start": 599,
                "end": 628
              },
              "start": 597,
              "end": 628
            },
            "start": 582,
            "end": 628
          },
          "init": null,
          "definite": false,
          "start": 582,
          "end": 628
        }
      ],
      "declare": false,
      "start": 578,
      "end": 629
    },
    {
      "type": "ExpressionStatement",
      "expression": {
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
              "start": 634,
              "end": 639
            }
          ],
          "optional": false,
          "typeAnnotation": null,
          "start": 631,
          "end": 640
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "robotA",
          "optional": false,
          "typeAnnotation": null,
          "start": 643,
          "end": 649
        },
        "start": 631,
        "end": 649
      },
      "directive": null,
      "start": 631,
      "end": 650
    },
    {
      "type": "ExpressionStatement",
      "expression": {
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
              "name": "nameB",
              "optional": false,
              "typeAnnotation": null,
              "start": 654,
              "end": 659
            }
          ],
          "optional": false,
          "typeAnnotation": null,
          "start": 651,
          "end": 660
        },
        "right": {
          "type": "CallExpression",
          "callee": {
            "type": "Identifier",
            "decorators": [],
            "name": "getRobotB",
            "optional": false,
            "typeAnnotation": null,
            "start": 663,
            "end": 672
          },
          "typeArguments": null,
          "arguments": [],
          "optional": false,
          "start": 663,
          "end": 674
        },
        "start": 651,
        "end": 674
      },
      "directive": null,
      "start": 651,
      "end": 675
    },
    {
      "type": "ExpressionStatement",
      "expression": {
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
              "name": "nameB",
              "optional": false,
              "typeAnnotation": null,
              "start": 679,
              "end": 684
            }
          ],
          "optional": false,
          "typeAnnotation": null,
          "start": 676,
          "end": 685
        },
        "right": {
          "type": "ArrayExpression",
          "elements": [
            {
              "type": "Literal",
              "value": 2,
              "raw": "2",
              "start": 689,
              "end": 690
            },
            {
              "type": "Literal",
              "value": "trimmer",
              "raw": "\"trimmer\"",
              "start": 692,
              "end": 701
            },
            {
              "type": "Literal",
              "value": "trimming",
              "raw": "\"trimming\"",
              "start": 703,
              "end": 713
            }
          ],
          "start": 688,
          "end": 714
        },
        "start": 676,
        "end": 714
      },
      "directive": null,
      "start": 676,
      "end": 715
    },
    {
      "type": "ExpressionStatement",
      "expression": {
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
              "name": "multiSkillB",
              "optional": false,
              "typeAnnotation": null,
              "start": 719,
              "end": 730
            }
          ],
          "optional": false,
          "typeAnnotation": null,
          "start": 716,
          "end": 731
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "multiRobotB",
          "optional": false,
          "typeAnnotation": null,
          "start": 734,
          "end": 745
        },
        "start": 716,
        "end": 745
      },
      "directive": null,
      "start": 716,
      "end": 746
    },
    {
      "type": "ExpressionStatement",
      "expression": {
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
              "name": "multiSkillB",
              "optional": false,
              "typeAnnotation": null,
              "start": 750,
              "end": 761
            }
          ],
          "optional": false,
          "typeAnnotation": null,
          "start": 747,
          "end": 762
        },
        "right": {
          "type": "CallExpression",
          "callee": {
            "type": "Identifier",
            "decorators": [],
            "name": "getMultiRobotB",
            "optional": false,
            "typeAnnotation": null,
            "start": 765,
            "end": 779
          },
          "typeArguments": null,
          "arguments": [],
          "optional": false,
          "start": 765,
          "end": 781
        },
        "start": 747,
        "end": 781
      },
      "directive": null,
      "start": 747,
      "end": 782
    },
    {
      "type": "ExpressionStatement",
      "expression": {
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
              "name": "multiSkillB",
              "optional": false,
              "typeAnnotation": null,
              "start": 786,
              "end": 797
            }
          ],
          "optional": false,
          "typeAnnotation": null,
          "start": 783,
          "end": 798
        },
        "right": {
          "type": "ArrayExpression",
          "elements": [
            {
              "type": "Literal",
              "value": "roomba",
              "raw": "\"roomba\"",
              "start": 802,
              "end": 810
            },
            {
              "type": "ArrayExpression",
              "elements": [
                {
                  "type": "Literal",
                  "value": "vacuum",
                  "raw": "\"vacuum\"",
                  "start": 813,
                  "end": 821
                },
                {
                  "type": "Literal",
                  "value": "mopping",
                  "raw": "\"mopping\"",
                  "start": 823,
                  "end": 832
                }
              ],
              "start": 812,
              "end": 833
            }
          ],
          "start": 801,
          "end": 834
        },
        "start": 783,
        "end": 834
      },
      "directive": null,
      "start": 783,
      "end": 835
    },
    {
      "type": "ExpressionStatement",
      "expression": {
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
              "start": 838,
              "end": 845
            }
          ],
          "optional": false,
          "typeAnnotation": null,
          "start": 837,
          "end": 846
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "robotB",
          "optional": false,
          "typeAnnotation": null,
          "start": 849,
          "end": 855
        },
        "start": 837,
        "end": 855
      },
      "directive": null,
      "start": 837,
      "end": 856
    },
    {
      "type": "ExpressionStatement",
      "expression": {
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
              "start": 858,
              "end": 865
            }
          ],
          "optional": false,
          "typeAnnotation": null,
          "start": 857,
          "end": 866
        },
        "right": {
          "type": "CallExpression",
          "callee": {
            "type": "Identifier",
            "decorators": [],
            "name": "getRobotB",
            "optional": false,
            "typeAnnotation": null,
            "start": 869,
            "end": 878
          },
          "typeArguments": null,
          "arguments": [],
          "optional": false,
          "start": 869,
          "end": 880
        },
        "start": 857,
        "end": 880
      },
      "directive": null,
      "start": 857,
      "end": 881
    },
    {
      "type": "ExpressionStatement",
      "expression": {
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
              "start": 883,
              "end": 890
            }
          ],
          "optional": false,
          "typeAnnotation": null,
          "start": 882,
          "end": 891
        },
        "right": {
          "type": "ArrayExpression",
          "elements": [
            {
              "type": "Literal",
              "value": 2,
              "raw": "2",
              "start": 895,
              "end": 896
            },
            {
              "type": "Literal",
              "value": "trimmer",
              "raw": "\"trimmer\"",
              "start": 898,
              "end": 907
            },
            {
              "type": "Literal",
              "value": "trimming",
              "raw": "\"trimming\"",
              "start": 909,
              "end": 919
            }
          ],
          "start": 894,
          "end": 920
        },
        "start": 882,
        "end": 920
      },
      "directive": null,
      "start": 882,
      "end": 921
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "ArrayPattern",
          "decorators": [],
          "elements": [
            {
              "type": "Identifier",
              "decorators": [],
              "name": "nameMB",
              "optional": false,
              "typeAnnotation": null,
              "start": 923,
              "end": 929
            }
          ],
          "optional": false,
          "typeAnnotation": null,
          "start": 922,
          "end": 930
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "multiRobotB",
          "optional": false,
          "typeAnnotation": null,
          "start": 933,
          "end": 944
        },
        "start": 922,
        "end": 944
      },
      "directive": null,
      "start": 922,
      "end": 945
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "ArrayPattern",
          "decorators": [],
          "elements": [
            {
              "type": "Identifier",
              "decorators": [],
              "name": "nameMB",
              "optional": false,
              "typeAnnotation": null,
              "start": 947,
              "end": 953
            }
          ],
          "optional": false,
          "typeAnnotation": null,
          "start": 946,
          "end": 954
        },
        "right": {
          "type": "CallExpression",
          "callee": {
            "type": "Identifier",
            "decorators": [],
            "name": "getMultiRobotB",
            "optional": false,
            "typeAnnotation": null,
            "start": 957,
            "end": 971
          },
          "typeArguments": null,
          "arguments": [],
          "optional": false,
          "start": 957,
          "end": 973
        },
        "start": 946,
        "end": 973
      },
      "directive": null,
      "start": 946,
      "end": 974
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "ArrayPattern",
          "decorators": [],
          "elements": [
            {
              "type": "Identifier",
              "decorators": [],
              "name": "nameMB",
              "optional": false,
              "typeAnnotation": null,
              "start": 976,
              "end": 982
            }
          ],
          "optional": false,
          "typeAnnotation": null,
          "start": 975,
          "end": 983
        },
        "right": {
          "type": "ArrayExpression",
          "elements": [
            {
              "type": "Literal",
              "value": "trimmer",
              "raw": "\"trimmer\"",
              "start": 987,
              "end": 996
            },
            {
              "type": "ArrayExpression",
              "elements": [
                {
                  "type": "Literal",
                  "value": "trimming",
                  "raw": "\"trimming\"",
                  "start": 999,
                  "end": 1009
                },
                {
                  "type": "Literal",
                  "value": "edging",
                  "raw": "\"edging\"",
                  "start": 1011,
                  "end": 1019
                }
              ],
              "start": 998,
              "end": 1020
            }
          ],
          "start": 986,
          "end": 1021
        },
        "start": 975,
        "end": 1021
      },
      "directive": null,
      "start": 975,
      "end": 1022
    },
    {
      "type": "ExpressionStatement",
      "expression": {
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
              "start": 1025,
              "end": 1032
            },
            {
              "type": "Identifier",
              "decorators": [],
              "name": "nameB",
              "optional": false,
              "typeAnnotation": null,
              "start": 1034,
              "end": 1039
            },
            {
              "type": "Identifier",
              "decorators": [],
              "name": "skillB",
              "optional": false,
              "typeAnnotation": null,
              "start": 1041,
              "end": 1047
            }
          ],
          "optional": false,
          "typeAnnotation": null,
          "start": 1024,
          "end": 1048
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "robotB",
          "optional": false,
          "typeAnnotation": null,
          "start": 1051,
          "end": 1057
        },
        "start": 1024,
        "end": 1057
      },
      "directive": null,
      "start": 1024,
      "end": 1058
    },
    {
      "type": "ExpressionStatement",
      "expression": {
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
              "start": 1060,
              "end": 1067
            },
            {
              "type": "Identifier",
              "decorators": [],
              "name": "nameB",
              "optional": false,
              "typeAnnotation": null,
              "start": 1069,
              "end": 1074
            },
            {
              "type": "Identifier",
              "decorators": [],
              "name": "skillB",
              "optional": false,
              "typeAnnotation": null,
              "start": 1076,
              "end": 1082
            }
          ],
          "optional": false,
          "typeAnnotation": null,
          "start": 1059,
          "end": 1083
        },
        "right": {
          "type": "CallExpression",
          "callee": {
            "type": "Identifier",
            "decorators": [],
            "name": "getRobotB",
            "optional": false,
            "typeAnnotation": null,
            "start": 1086,
            "end": 1095
          },
          "typeArguments": null,
          "arguments": [],
          "optional": false,
          "start": 1086,
          "end": 1097
        },
        "start": 1059,
        "end": 1097
      },
      "directive": null,
      "start": 1059,
      "end": 1098
    },
    {
      "type": "ExpressionStatement",
      "expression": {
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
              "start": 1100,
              "end": 1107
            },
            {
              "type": "Identifier",
              "decorators": [],
              "name": "nameB",
              "optional": false,
              "typeAnnotation": null,
              "start": 1109,
              "end": 1114
            },
            {
              "type": "Identifier",
              "decorators": [],
              "name": "skillB",
              "optional": false,
              "typeAnnotation": null,
              "start": 1116,
              "end": 1122
            }
          ],
          "optional": false,
          "typeAnnotation": null,
          "start": 1099,
          "end": 1123
        },
        "right": {
          "type": "ArrayExpression",
          "elements": [
            {
              "type": "Literal",
              "value": 2,
              "raw": "2",
              "start": 1127,
              "end": 1128
            },
            {
              "type": "Literal",
              "value": "trimmer",
              "raw": "\"trimmer\"",
              "start": 1130,
              "end": 1139
            },
            {
              "type": "Literal",
              "value": "trimming",
              "raw": "\"trimming\"",
              "start": 1141,
              "end": 1151
            }
          ],
          "start": 1126,
          "end": 1152
        },
        "start": 1099,
        "end": 1152
      },
      "directive": null,
      "start": 1099,
      "end": 1153
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "ArrayPattern",
          "decorators": [],
          "elements": [
            {
              "type": "Identifier",
              "decorators": [],
              "name": "nameMB",
              "optional": false,
              "typeAnnotation": null,
              "start": 1155,
              "end": 1161
            },
            {
              "type": "ArrayPattern",
              "decorators": [],
              "elements": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "primarySkillB",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1164,
                  "end": 1177
                },
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "secondarySkillB",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1179,
                  "end": 1194
                }
              ],
              "optional": false,
              "typeAnnotation": null,
              "start": 1163,
              "end": 1195
            }
          ],
          "optional": false,
          "typeAnnotation": null,
          "start": 1154,
          "end": 1196
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "multiRobotB",
          "optional": false,
          "typeAnnotation": null,
          "start": 1199,
          "end": 1210
        },
        "start": 1154,
        "end": 1210
      },
      "directive": null,
      "start": 1154,
      "end": 1211
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "ArrayPattern",
          "decorators": [],
          "elements": [
            {
              "type": "Identifier",
              "decorators": [],
              "name": "nameMB",
              "optional": false,
              "typeAnnotation": null,
              "start": 1213,
              "end": 1219
            },
            {
              "type": "ArrayPattern",
              "decorators": [],
              "elements": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "primarySkillB",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1222,
                  "end": 1235
                },
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "secondarySkillB",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1237,
                  "end": 1252
                }
              ],
              "optional": false,
              "typeAnnotation": null,
              "start": 1221,
              "end": 1253
            }
          ],
          "optional": false,
          "typeAnnotation": null,
          "start": 1212,
          "end": 1254
        },
        "right": {
          "type": "CallExpression",
          "callee": {
            "type": "Identifier",
            "decorators": [],
            "name": "getMultiRobotB",
            "optional": false,
            "typeAnnotation": null,
            "start": 1257,
            "end": 1271
          },
          "typeArguments": null,
          "arguments": [],
          "optional": false,
          "start": 1257,
          "end": 1273
        },
        "start": 1212,
        "end": 1273
      },
      "directive": null,
      "start": 1212,
      "end": 1274
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "ArrayPattern",
          "decorators": [],
          "elements": [
            {
              "type": "Identifier",
              "decorators": [],
              "name": "nameMB",
              "optional": false,
              "typeAnnotation": null,
              "start": 1276,
              "end": 1282
            },
            {
              "type": "ArrayPattern",
              "decorators": [],
              "elements": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "primarySkillB",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1285,
                  "end": 1298
                },
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "secondarySkillB",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1300,
                  "end": 1315
                }
              ],
              "optional": false,
              "typeAnnotation": null,
              "start": 1284,
              "end": 1316
            }
          ],
          "optional": false,
          "typeAnnotation": null,
          "start": 1275,
          "end": 1317
        },
        "right": {
          "type": "ArrayExpression",
          "elements": [
            {
              "type": "Literal",
              "value": "trimmer",
              "raw": "\"trimmer\"",
              "start": 1321,
              "end": 1330
            },
            {
              "type": "ArrayExpression",
              "elements": [
                {
                  "type": "Literal",
                  "value": "trimming",
                  "raw": "\"trimming\"",
                  "start": 1333,
                  "end": 1343
                },
                {
                  "type": "Literal",
                  "value": "edging",
                  "raw": "\"edging\"",
                  "start": 1345,
                  "end": 1353
                }
              ],
              "start": 1332,
              "end": 1354
            }
          ],
          "start": 1320,
          "end": 1355
        },
        "start": 1275,
        "end": 1355
      },
      "directive": null,
      "start": 1275,
      "end": 1356
    },
    {
      "type": "ExpressionStatement",
      "expression": {
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
              "start": 1359,
              "end": 1366
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
                "start": 1371,
                "end": 1381
              },
              "optional": false,
              "typeAnnotation": null,
              "value": null,
              "start": 1368,
              "end": 1381
            }
          ],
          "optional": false,
          "typeAnnotation": null,
          "start": 1358,
          "end": 1382
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "robotB",
          "optional": false,
          "typeAnnotation": null,
          "start": 1385,
          "end": 1391
        },
        "start": 1358,
        "end": 1391
      },
      "directive": null,
      "start": 1358,
      "end": 1392
    },
    {
      "type": "ExpressionStatement",
      "expression": {
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
              "start": 1394,
              "end": 1401
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
                "start": 1406,
                "end": 1416
              },
              "optional": false,
              "typeAnnotation": null,
              "value": null,
              "start": 1403,
              "end": 1416
            }
          ],
          "optional": false,
          "typeAnnotation": null,
          "start": 1393,
          "end": 1417
        },
        "right": {
          "type": "CallExpression",
          "callee": {
            "type": "Identifier",
            "decorators": [],
            "name": "getRobotB",
            "optional": false,
            "typeAnnotation": null,
            "start": 1420,
            "end": 1429
          },
          "typeArguments": null,
          "arguments": [],
          "optional": false,
          "start": 1420,
          "end": 1431
        },
        "start": 1393,
        "end": 1431
      },
      "directive": null,
      "start": 1393,
      "end": 1432
    },
    {
      "type": "ExpressionStatement",
      "expression": {
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
              "start": 1434,
              "end": 1441
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
                "start": 1446,
                "end": 1456
              },
              "optional": false,
              "typeAnnotation": null,
              "value": null,
              "start": 1443,
              "end": 1456
            }
          ],
          "optional": false,
          "typeAnnotation": null,
          "start": 1433,
          "end": 1457
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
              "start": 1461,
              "end": 1466
            },
            "typeArguments": null,
            "start": 1461,
            "end": 1466
          },
          "expression": {
            "type": "ArrayExpression",
            "elements": [
              {
                "type": "Literal",
                "value": 2,
                "raw": "2",
                "start": 1468,
                "end": 1469
              },
              {
                "type": "Literal",
                "value": "trimmer",
                "raw": "\"trimmer\"",
                "start": 1471,
                "end": 1480
              },
              {
                "type": "Literal",
                "value": "trimming",
                "raw": "\"trimming\"",
                "start": 1482,
                "end": 1492
              }
            ],
            "start": 1467,
            "end": 1493
          },
          "start": 1460,
          "end": 1493
        },
        "start": 1433,
        "end": 1493
      },
      "directive": null,
      "start": 1433,
      "end": 1494
    },
    {
      "type": "ExpressionStatement",
      "expression": {
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
                "start": 1499,
                "end": 1514
              },
              "optional": false,
              "typeAnnotation": null,
              "value": null,
              "start": 1496,
              "end": 1514
            }
          ],
          "optional": false,
          "typeAnnotation": null,
          "start": 1495,
          "end": 1515
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "multiRobotA",
          "optional": false,
          "typeAnnotation": null,
          "start": 1518,
          "end": 1529
        },
        "start": 1495,
        "end": 1529
      },
      "directive": null,
      "start": 1495,
      "end": 1530
    },
    {
      "type": "ExpressionStatement",
      "expression": {
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
                "start": 1535,
                "end": 1550
              },
              "optional": false,
              "typeAnnotation": null,
              "value": null,
              "start": 1532,
              "end": 1550
            }
          ],
          "optional": false,
          "typeAnnotation": null,
          "start": 1531,
          "end": 1551
        },
        "right": {
          "type": "CallExpression",
          "callee": {
            "type": "Identifier",
            "decorators": [],
            "name": "getMultiRobotB",
            "optional": false,
            "typeAnnotation": null,
            "start": 1554,
            "end": 1568
          },
          "typeArguments": null,
          "arguments": [],
          "optional": false,
          "start": 1554,
          "end": 1570
        },
        "start": 1531,
        "end": 1570
      },
      "directive": null,
      "start": 1531,
      "end": 1571
    },
    {
      "type": "ExpressionStatement",
      "expression": {
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
                "start": 1576,
                "end": 1591
              },
              "optional": false,
              "typeAnnotation": null,
              "value": null,
              "start": 1573,
              "end": 1591
            }
          ],
          "optional": false,
          "typeAnnotation": null,
          "start": 1572,
          "end": 1592
        },
        "right": {
          "type": "ArrayExpression",
          "elements": [
            {
              "type": "Literal",
              "value": "trimmer",
              "raw": "\"trimmer\"",
              "start": 1596,
              "end": 1605
            },
            {
              "type": "ArrayExpression",
              "elements": [
                {
                  "type": "Literal",
                  "value": "trimming",
                  "raw": "\"trimming\"",
                  "start": 1608,
                  "end": 1618
                },
                {
                  "type": "Literal",
                  "value": "edging",
                  "raw": "\"edging\"",
                  "start": 1620,
                  "end": 1628
                }
              ],
              "start": 1607,
              "end": 1629
            }
          ],
          "start": 1595,
          "end": 1630
        },
        "start": 1572,
        "end": 1630
      },
      "directive": null,
      "start": 1572,
      "end": 1631
    },
    {
      "type": "IfStatement",
      "test": {
        "type": "BinaryExpression",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "nameA",
          "optional": false,
          "typeAnnotation": null,
          "start": 1637,
          "end": 1642
        },
        "operator": "==",
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "nameB",
          "optional": false,
          "typeAnnotation": null,
          "start": 1646,
          "end": 1651
        },
        "start": 1637,
        "end": 1651
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
                  "name": "console",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1659,
                  "end": 1666
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "log",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1667,
                  "end": 1670
                },
                "optional": false,
                "computed": false,
                "start": 1659,
                "end": 1670
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "skillB",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1671,
                  "end": 1677
                }
              ],
              "optional": false,
              "start": 1659,
              "end": 1678
            },
            "directive": null,
            "start": 1659,
            "end": 1679
          }
        ],
        "start": 1653,
        "end": 1681
      },
      "alternate": null,
      "start": 1633,
      "end": 1681
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "getRobotB",
        "optional": false,
        "typeAnnotation": null,
        "start": 1692,
        "end": 1701
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
              "name": "robotB",
              "optional": false,
              "typeAnnotation": null,
              "start": 1717,
              "end": 1723
            },
            "start": 1710,
            "end": 1724
          }
        ],
        "start": 1704,
        "end": 1726
      },
      "expression": false,
      "start": 1683,
      "end": 1726
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "getMultiRobotB",
        "optional": false,
        "typeAnnotation": null,
        "start": 1737,
        "end": 1751
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
              "name": "multiRobotB",
              "optional": false,
              "typeAnnotation": null,
              "start": 1767,
              "end": 1778
            },
            "start": 1760,
            "end": 1779
          }
        ],
        "start": 1754,
        "end": 1781
      },
      "expression": false,
      "start": 1728,
      "end": 1781
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 1781
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
    "value": "var",
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
    "value": "var",
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
    "value": "var",
    "start": 235,
    "end": 238
  },
  {
    "type": "Identifier",
    "value": "multiRobotA",
    "start": 239,
    "end": 250
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 250,
    "end": 251
  },
  {
    "type": "Identifier",
    "value": "MultiSkilledRobot",
    "start": 252,
    "end": 269
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 270,
    "end": 271
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 272,
    "end": 273
  },
  {
    "type": "String",
    "value": "\"mower\"",
    "start": 273,
    "end": 280
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 280,
    "end": 281
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 282,
    "end": 283
  },
  {
    "type": "String",
    "value": "\"mowing\"",
    "start": 283,
    "end": 291
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 291,
    "end": 292
  },
  {
    "type": "String",
    "value": "\"\"",
    "start": 293,
    "end": 295
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 295,
    "end": 296
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 296,
    "end": 297
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 297,
    "end": 298
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 299,
    "end": 302
  },
  {
    "type": "Identifier",
    "value": "multiRobotB",
    "start": 303,
    "end": 314
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 314,
    "end": 315
  },
  {
    "type": "Identifier",
    "value": "MultiSkilledRobot",
    "start": 316,
    "end": 333
  },
  {
    "type": "Punctuator",
    "value": "=",
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
    "value": "\"trimmer\"",
    "start": 337,
    "end": 346
  },
  {
    "type": "Punctuator",
    "value": ",",
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
    "value": "\"trimming\"",
    "start": 349,
    "end": 359
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 359,
    "end": 360
  },
  {
    "type": "String",
    "value": "\"edging\"",
    "start": 361,
    "end": 369
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 369,
    "end": 370
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 370,
    "end": 371
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 371,
    "end": 372
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 374,
    "end": 377
  },
  {
    "type": "Identifier",
    "value": "nameA",
    "start": 378,
    "end": 383
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 383,
    "end": 384
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 385,
    "end": 391
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 391,
    "end": 392
  },
  {
    "type": "Identifier",
    "value": "numberB",
    "start": 393,
    "end": 400
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 400,
    "end": 401
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 402,
    "end": 408
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 408,
    "end": 409
  },
  {
    "type": "Identifier",
    "value": "nameB",
    "start": 410,
    "end": 415
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 415,
    "end": 416
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 417,
    "end": 423
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 423,
    "end": 424
  },
  {
    "type": "Identifier",
    "value": "skillB",
    "start": 425,
    "end": 431
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 431,
    "end": 432
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 433,
    "end": 439
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 439,
    "end": 440
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 441,
    "end": 444
  },
  {
    "type": "Identifier",
    "value": "robotAInfo",
    "start": 445,
    "end": 455
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 455,
    "end": 456
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 457,
    "end": 458
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 458,
    "end": 464
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 465,
    "end": 466
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 467,
    "end": 473
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 473,
    "end": 474
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 474,
    "end": 475
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 475,
    "end": 476
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 476,
    "end": 477
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 479,
    "end": 482
  },
  {
    "type": "Identifier",
    "value": "multiSkillB",
    "start": 483,
    "end": 494
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 494,
    "end": 495
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 496,
    "end": 497
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 497,
    "end": 503
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 503,
    "end": 504
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 505,
    "end": 511
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 511,
    "end": 512
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 512,
    "end": 513
  },
  {
    "type": "Identifier",
    "value": "nameMB",
    "start": 514,
    "end": 520
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 520,
    "end": 521
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 522,
    "end": 528
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 528,
    "end": 529
  },
  {
    "type": "Identifier",
    "value": "primarySkillB",
    "start": 530,
    "end": 543
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 543,
    "end": 544
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 545,
    "end": 551
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 551,
    "end": 552
  },
  {
    "type": "Identifier",
    "value": "secondarySkillB",
    "start": 553,
    "end": 568
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 568,
    "end": 569
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 570,
    "end": 576
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 576,
    "end": 577
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 578,
    "end": 581
  },
  {
    "type": "Identifier",
    "value": "multiRobotAInfo",
    "start": 582,
    "end": 597
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 597,
    "end": 598
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 599,
    "end": 600
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 600,
    "end": 606
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 607,
    "end": 608
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 609,
    "end": 610
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 610,
    "end": 616
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 616,
    "end": 617
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 618,
    "end": 624
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 624,
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
    "value": "[",
    "start": 626,
    "end": 627
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 627,
    "end": 628
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 628,
    "end": 629
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 631,
    "end": 632
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 632,
    "end": 633
  },
  {
    "type": "Identifier",
    "value": "nameA",
    "start": 634,
    "end": 639
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 639,
    "end": 640
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 641,
    "end": 642
  },
  {
    "type": "Identifier",
    "value": "robotA",
    "start": 643,
    "end": 649
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 649,
    "end": 650
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 651,
    "end": 652
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 652,
    "end": 653
  },
  {
    "type": "Identifier",
    "value": "nameB",
    "start": 654,
    "end": 659
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 659,
    "end": 660
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 661,
    "end": 662
  },
  {
    "type": "Identifier",
    "value": "getRobotB",
    "start": 663,
    "end": 672
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 672,
    "end": 673
  },
  {
    "type": "Punctuator",
    "value": ")",
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
    "value": "[",
    "start": 676,
    "end": 677
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 677,
    "end": 678
  },
  {
    "type": "Identifier",
    "value": "nameB",
    "start": 679,
    "end": 684
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 684,
    "end": 685
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 686,
    "end": 687
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 688,
    "end": 689
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 689,
    "end": 690
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 690,
    "end": 691
  },
  {
    "type": "String",
    "value": "\"trimmer\"",
    "start": 692,
    "end": 701
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 701,
    "end": 702
  },
  {
    "type": "String",
    "value": "\"trimming\"",
    "start": 703,
    "end": 713
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 713,
    "end": 714
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 714,
    "end": 715
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 716,
    "end": 717
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 717,
    "end": 718
  },
  {
    "type": "Identifier",
    "value": "multiSkillB",
    "start": 719,
    "end": 730
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 730,
    "end": 731
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 732,
    "end": 733
  },
  {
    "type": "Identifier",
    "value": "multiRobotB",
    "start": 734,
    "end": 745
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 745,
    "end": 746
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 747,
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
    "value": "multiSkillB",
    "start": 750,
    "end": 761
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 761,
    "end": 762
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 763,
    "end": 764
  },
  {
    "type": "Identifier",
    "value": "getMultiRobotB",
    "start": 765,
    "end": 779
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 779,
    "end": 780
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 780,
    "end": 781
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 781,
    "end": 782
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 783,
    "end": 784
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 784,
    "end": 785
  },
  {
    "type": "Identifier",
    "value": "multiSkillB",
    "start": 786,
    "end": 797
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 797,
    "end": 798
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 799,
    "end": 800
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 801,
    "end": 802
  },
  {
    "type": "String",
    "value": "\"roomba\"",
    "start": 802,
    "end": 810
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 810,
    "end": 811
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 812,
    "end": 813
  },
  {
    "type": "String",
    "value": "\"vacuum\"",
    "start": 813,
    "end": 821
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 821,
    "end": 822
  },
  {
    "type": "String",
    "value": "\"mopping\"",
    "start": 823,
    "end": 832
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 832,
    "end": 833
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 833,
    "end": 834
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 834,
    "end": 835
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 837,
    "end": 838
  },
  {
    "type": "Identifier",
    "value": "numberB",
    "start": 838,
    "end": 845
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 845,
    "end": 846
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 847,
    "end": 848
  },
  {
    "type": "Identifier",
    "value": "robotB",
    "start": 849,
    "end": 855
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 855,
    "end": 856
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 857,
    "end": 858
  },
  {
    "type": "Identifier",
    "value": "numberB",
    "start": 858,
    "end": 865
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 865,
    "end": 866
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 867,
    "end": 868
  },
  {
    "type": "Identifier",
    "value": "getRobotB",
    "start": 869,
    "end": 878
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 878,
    "end": 879
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 879,
    "end": 880
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 880,
    "end": 881
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 882,
    "end": 883
  },
  {
    "type": "Identifier",
    "value": "numberB",
    "start": 883,
    "end": 890
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 890,
    "end": 891
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 892,
    "end": 893
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 894,
    "end": 895
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 895,
    "end": 896
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 896,
    "end": 897
  },
  {
    "type": "String",
    "value": "\"trimmer\"",
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
    "type": "String",
    "value": "\"trimming\"",
    "start": 909,
    "end": 919
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 919,
    "end": 920
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 920,
    "end": 921
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 922,
    "end": 923
  },
  {
    "type": "Identifier",
    "value": "nameMB",
    "start": 923,
    "end": 929
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 929,
    "end": 930
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 931,
    "end": 932
  },
  {
    "type": "Identifier",
    "value": "multiRobotB",
    "start": 933,
    "end": 944
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 944,
    "end": 945
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 946,
    "end": 947
  },
  {
    "type": "Identifier",
    "value": "nameMB",
    "start": 947,
    "end": 953
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 953,
    "end": 954
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 955,
    "end": 956
  },
  {
    "type": "Identifier",
    "value": "getMultiRobotB",
    "start": 957,
    "end": 971
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 971,
    "end": 972
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 972,
    "end": 973
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 973,
    "end": 974
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 975,
    "end": 976
  },
  {
    "type": "Identifier",
    "value": "nameMB",
    "start": 976,
    "end": 982
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 982,
    "end": 983
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 984,
    "end": 985
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 986,
    "end": 987
  },
  {
    "type": "String",
    "value": "\"trimmer\"",
    "start": 987,
    "end": 996
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 996,
    "end": 997
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 998,
    "end": 999
  },
  {
    "type": "String",
    "value": "\"trimming\"",
    "start": 999,
    "end": 1009
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1009,
    "end": 1010
  },
  {
    "type": "String",
    "value": "\"edging\"",
    "start": 1011,
    "end": 1019
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1019,
    "end": 1020
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1020,
    "end": 1021
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1021,
    "end": 1022
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1024,
    "end": 1025
  },
  {
    "type": "Identifier",
    "value": "numberB",
    "start": 1025,
    "end": 1032
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1032,
    "end": 1033
  },
  {
    "type": "Identifier",
    "value": "nameB",
    "start": 1034,
    "end": 1039
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1039,
    "end": 1040
  },
  {
    "type": "Identifier",
    "value": "skillB",
    "start": 1041,
    "end": 1047
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1047,
    "end": 1048
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1049,
    "end": 1050
  },
  {
    "type": "Identifier",
    "value": "robotB",
    "start": 1051,
    "end": 1057
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1057,
    "end": 1058
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1059,
    "end": 1060
  },
  {
    "type": "Identifier",
    "value": "numberB",
    "start": 1060,
    "end": 1067
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1067,
    "end": 1068
  },
  {
    "type": "Identifier",
    "value": "nameB",
    "start": 1069,
    "end": 1074
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1074,
    "end": 1075
  },
  {
    "type": "Identifier",
    "value": "skillB",
    "start": 1076,
    "end": 1082
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1082,
    "end": 1083
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1084,
    "end": 1085
  },
  {
    "type": "Identifier",
    "value": "getRobotB",
    "start": 1086,
    "end": 1095
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1095,
    "end": 1096
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1096,
    "end": 1097
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1097,
    "end": 1098
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1099,
    "end": 1100
  },
  {
    "type": "Identifier",
    "value": "numberB",
    "start": 1100,
    "end": 1107
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1107,
    "end": 1108
  },
  {
    "type": "Identifier",
    "value": "nameB",
    "start": 1109,
    "end": 1114
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1114,
    "end": 1115
  },
  {
    "type": "Identifier",
    "value": "skillB",
    "start": 1116,
    "end": 1122
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1122,
    "end": 1123
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1124,
    "end": 1125
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1126,
    "end": 1127
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 1127,
    "end": 1128
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1128,
    "end": 1129
  },
  {
    "type": "String",
    "value": "\"trimmer\"",
    "start": 1130,
    "end": 1139
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1139,
    "end": 1140
  },
  {
    "type": "String",
    "value": "\"trimming\"",
    "start": 1141,
    "end": 1151
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1151,
    "end": 1152
  },
  {
    "type": "Punctuator",
    "value": ";",
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
    "type": "Identifier",
    "value": "nameMB",
    "start": 1155,
    "end": 1161
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1161,
    "end": 1162
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1163,
    "end": 1164
  },
  {
    "type": "Identifier",
    "value": "primarySkillB",
    "start": 1164,
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
    "value": "secondarySkillB",
    "start": 1179,
    "end": 1194
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1194,
    "end": 1195
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1195,
    "end": 1196
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1197,
    "end": 1198
  },
  {
    "type": "Identifier",
    "value": "multiRobotB",
    "start": 1199,
    "end": 1210
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1210,
    "end": 1211
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1212,
    "end": 1213
  },
  {
    "type": "Identifier",
    "value": "nameMB",
    "start": 1213,
    "end": 1219
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1219,
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
    "value": "primarySkillB",
    "start": 1222,
    "end": 1235
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1235,
    "end": 1236
  },
  {
    "type": "Identifier",
    "value": "secondarySkillB",
    "start": 1237,
    "end": 1252
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1252,
    "end": 1253
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1253,
    "end": 1254
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1255,
    "end": 1256
  },
  {
    "type": "Identifier",
    "value": "getMultiRobotB",
    "start": 1257,
    "end": 1271
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1271,
    "end": 1272
  },
  {
    "type": "Punctuator",
    "value": ")",
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
    "type": "Punctuator",
    "value": "[",
    "start": 1275,
    "end": 1276
  },
  {
    "type": "Identifier",
    "value": "nameMB",
    "start": 1276,
    "end": 1282
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1282,
    "end": 1283
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1284,
    "end": 1285
  },
  {
    "type": "Identifier",
    "value": "primarySkillB",
    "start": 1285,
    "end": 1298
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1298,
    "end": 1299
  },
  {
    "type": "Identifier",
    "value": "secondarySkillB",
    "start": 1300,
    "end": 1315
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1315,
    "end": 1316
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1316,
    "end": 1317
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1318,
    "end": 1319
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1320,
    "end": 1321
  },
  {
    "type": "String",
    "value": "\"trimmer\"",
    "start": 1321,
    "end": 1330
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1330,
    "end": 1331
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1332,
    "end": 1333
  },
  {
    "type": "String",
    "value": "\"trimming\"",
    "start": 1333,
    "end": 1343
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1343,
    "end": 1344
  },
  {
    "type": "String",
    "value": "\"edging\"",
    "start": 1345,
    "end": 1353
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1353,
    "end": 1354
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1354,
    "end": 1355
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1355,
    "end": 1356
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1358,
    "end": 1359
  },
  {
    "type": "Identifier",
    "value": "numberB",
    "start": 1359,
    "end": 1366
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1366,
    "end": 1367
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 1368,
    "end": 1371
  },
  {
    "type": "Identifier",
    "value": "robotAInfo",
    "start": 1371,
    "end": 1381
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1381,
    "end": 1382
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1383,
    "end": 1384
  },
  {
    "type": "Identifier",
    "value": "robotB",
    "start": 1385,
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
    "value": "[",
    "start": 1393,
    "end": 1394
  },
  {
    "type": "Identifier",
    "value": "numberB",
    "start": 1394,
    "end": 1401
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1401,
    "end": 1402
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 1403,
    "end": 1406
  },
  {
    "type": "Identifier",
    "value": "robotAInfo",
    "start": 1406,
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
    "type": "Identifier",
    "value": "getRobotB",
    "start": 1420,
    "end": 1429
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
    "value": ";",
    "start": 1431,
    "end": 1432
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1433,
    "end": 1434
  },
  {
    "type": "Identifier",
    "value": "numberB",
    "start": 1434,
    "end": 1441
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1441,
    "end": 1442
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 1443,
    "end": 1446
  },
  {
    "type": "Identifier",
    "value": "robotAInfo",
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
    "value": "=",
    "start": 1458,
    "end": 1459
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1460,
    "end": 1461
  },
  {
    "type": "Identifier",
    "value": "Robot",
    "start": 1461,
    "end": 1466
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1466,
    "end": 1467
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1467,
    "end": 1468
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 1468,
    "end": 1469
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1469,
    "end": 1470
  },
  {
    "type": "String",
    "value": "\"trimmer\"",
    "start": 1471,
    "end": 1480
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1480,
    "end": 1481
  },
  {
    "type": "String",
    "value": "\"trimming\"",
    "start": 1482,
    "end": 1492
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1492,
    "end": 1493
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1493,
    "end": 1494
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1495,
    "end": 1496
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 1496,
    "end": 1499
  },
  {
    "type": "Identifier",
    "value": "multiRobotAInfo",
    "start": 1499,
    "end": 1514
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1514,
    "end": 1515
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1516,
    "end": 1517
  },
  {
    "type": "Identifier",
    "value": "multiRobotA",
    "start": 1518,
    "end": 1529
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1529,
    "end": 1530
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1531,
    "end": 1532
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 1532,
    "end": 1535
  },
  {
    "type": "Identifier",
    "value": "multiRobotAInfo",
    "start": 1535,
    "end": 1550
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1550,
    "end": 1551
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1552,
    "end": 1553
  },
  {
    "type": "Identifier",
    "value": "getMultiRobotB",
    "start": 1554,
    "end": 1568
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1568,
    "end": 1569
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1569,
    "end": 1570
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1570,
    "end": 1571
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1572,
    "end": 1573
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 1573,
    "end": 1576
  },
  {
    "type": "Identifier",
    "value": "multiRobotAInfo",
    "start": 1576,
    "end": 1591
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1591,
    "end": 1592
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1593,
    "end": 1594
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1595,
    "end": 1596
  },
  {
    "type": "String",
    "value": "\"trimmer\"",
    "start": 1596,
    "end": 1605
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1605,
    "end": 1606
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1607,
    "end": 1608
  },
  {
    "type": "String",
    "value": "\"trimming\"",
    "start": 1608,
    "end": 1618
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1618,
    "end": 1619
  },
  {
    "type": "String",
    "value": "\"edging\"",
    "start": 1620,
    "end": 1628
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1628,
    "end": 1629
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1629,
    "end": 1630
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1630,
    "end": 1631
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 1633,
    "end": 1635
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1636,
    "end": 1637
  },
  {
    "type": "Identifier",
    "value": "nameA",
    "start": 1637,
    "end": 1642
  },
  {
    "type": "Punctuator",
    "value": "==",
    "start": 1643,
    "end": 1645
  },
  {
    "type": "Identifier",
    "value": "nameB",
    "start": 1646,
    "end": 1651
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1651,
    "end": 1652
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1653,
    "end": 1654
  },
  {
    "type": "Identifier",
    "value": "console",
    "start": 1659,
    "end": 1666
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1666,
    "end": 1667
  },
  {
    "type": "Identifier",
    "value": "log",
    "start": 1667,
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
    "value": "skillB",
    "start": 1671,
    "end": 1677
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1677,
    "end": 1678
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1678,
    "end": 1679
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1680,
    "end": 1681
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1683,
    "end": 1691
  },
  {
    "type": "Identifier",
    "value": "getRobotB",
    "start": 1692,
    "end": 1701
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1701,
    "end": 1702
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1702,
    "end": 1703
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1704,
    "end": 1705
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 1710,
    "end": 1716
  },
  {
    "type": "Identifier",
    "value": "robotB",
    "start": 1717,
    "end": 1723
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1723,
    "end": 1724
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1725,
    "end": 1726
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1728,
    "end": 1736
  },
  {
    "type": "Identifier",
    "value": "getMultiRobotB",
    "start": 1737,
    "end": 1751
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1751,
    "end": 1752
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1752,
    "end": 1753
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1754,
    "end": 1755
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 1760,
    "end": 1766
  },
  {
    "type": "Identifier",
    "value": "multiRobotB",
    "start": 1767,
    "end": 1778
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1778,
    "end": 1779
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1780,
    "end": 1781
  }
]
```
