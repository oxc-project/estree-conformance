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
                  "start": 191,
                  "end": 196
                },
                "typeArguments": null,
                "start": 191,
                "end": 196
              },
              "start": 189,
              "end": 196
            },
            "start": 183,
            "end": 196
          },
          "init": {
            "type": "ArrayExpression",
            "elements": [
              {
                "type": "Literal",
                "value": 2,
                "raw": "2",
                "start": 200,
                "end": 201
              },
              {
                "type": "Literal",
                "value": "trimmer",
                "raw": "\"trimmer\"",
                "start": 203,
                "end": 212
              },
              {
                "type": "Literal",
                "value": "trimming",
                "raw": "\"trimming\"",
                "start": 214,
                "end": 224
              }
            ],
            "start": 199,
            "end": 225
          },
          "definite": false,
          "start": 183,
          "end": 225
        }
      ],
      "declare": false,
      "start": 179,
      "end": 226
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
                  "start": 244,
                  "end": 261
                },
                "typeArguments": null,
                "start": 244,
                "end": 261
              },
              "start": 242,
              "end": 261
            },
            "start": 231,
            "end": 261
          },
          "init": {
            "type": "ArrayExpression",
            "elements": [
              {
                "type": "Literal",
                "value": "mower",
                "raw": "\"mower\"",
                "start": 265,
                "end": 272
              },
              {
                "type": "ArrayExpression",
                "elements": [
                  {
                    "type": "Literal",
                    "value": "mowing",
                    "raw": "\"mowing\"",
                    "start": 275,
                    "end": 283
                  },
                  {
                    "type": "Literal",
                    "value": "",
                    "raw": "\"\"",
                    "start": 285,
                    "end": 287
                  }
                ],
                "start": 274,
                "end": 288
              }
            ],
            "start": 264,
            "end": 289
          },
          "definite": false,
          "start": 231,
          "end": 289
        }
      ],
      "declare": false,
      "start": 227,
      "end": 290
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
                  "start": 308,
                  "end": 325
                },
                "typeArguments": null,
                "start": 308,
                "end": 325
              },
              "start": 306,
              "end": 325
            },
            "start": 295,
            "end": 325
          },
          "init": {
            "type": "ArrayExpression",
            "elements": [
              {
                "type": "Literal",
                "value": "trimmer",
                "raw": "\"trimmer\"",
                "start": 329,
                "end": 338
              },
              {
                "type": "ArrayExpression",
                "elements": [
                  {
                    "type": "Literal",
                    "value": "trimming",
                    "raw": "\"trimming\"",
                    "start": 341,
                    "end": 351
                  },
                  {
                    "type": "Literal",
                    "value": "edging",
                    "raw": "\"edging\"",
                    "start": 353,
                    "end": 361
                  }
                ],
                "start": 340,
                "end": 362
              }
            ],
            "start": 328,
            "end": 363
          },
          "definite": false,
          "start": 295,
          "end": 363
        }
      ],
      "declare": false,
      "start": 291,
      "end": 364
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
                "start": 377,
                "end": 383
              },
              "start": 375,
              "end": 383
            },
            "start": 370,
            "end": 383
          },
          "init": null,
          "definite": false,
          "start": 370,
          "end": 383
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
                "start": 394,
                "end": 400
              },
              "start": 392,
              "end": 400
            },
            "start": 385,
            "end": 400
          },
          "init": null,
          "definite": false,
          "start": 385,
          "end": 400
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
                "start": 409,
                "end": 415
              },
              "start": 407,
              "end": 415
            },
            "start": 402,
            "end": 415
          },
          "init": null,
          "definite": false,
          "start": 402,
          "end": 415
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
                "start": 425,
                "end": 431
              },
              "start": 423,
              "end": 431
            },
            "start": 417,
            "end": 431
          },
          "init": null,
          "definite": false,
          "start": 417,
          "end": 431
        }
      ],
      "declare": false,
      "start": 366,
      "end": 432
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
                      "start": 450,
                      "end": 456
                    },
                    {
                      "type": "TSStringKeyword",
                      "start": 459,
                      "end": 465
                    }
                  ],
                  "start": 450,
                  "end": 465
                },
                "start": 449,
                "end": 468
              },
              "start": 447,
              "end": 468
            },
            "start": 437,
            "end": 468
          },
          "init": null,
          "definite": false,
          "start": 437,
          "end": 468
        }
      ],
      "declare": false,
      "start": 433,
      "end": 469
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
                "type": "TSArrayType",
                "elementType": {
                  "type": "TSStringKeyword",
                  "start": 488,
                  "end": 494
                },
                "start": 488,
                "end": 496
              },
              "start": 486,
              "end": 496
            },
            "start": 475,
            "end": 496
          },
          "init": null,
          "definite": false,
          "start": 475,
          "end": 496
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
                "start": 506,
                "end": 512
              },
              "start": 504,
              "end": 512
            },
            "start": 498,
            "end": 512
          },
          "init": null,
          "definite": false,
          "start": 498,
          "end": 512
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
                "start": 529,
                "end": 535
              },
              "start": 527,
              "end": 535
            },
            "start": 514,
            "end": 535
          },
          "init": null,
          "definite": false,
          "start": 514,
          "end": 535
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
                "start": 554,
                "end": 560
              },
              "start": 552,
              "end": 560
            },
            "start": 537,
            "end": 560
          },
          "init": null,
          "definite": false,
          "start": 537,
          "end": 560
        }
      ],
      "declare": false,
      "start": 471,
      "end": 561
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
                      "start": 584,
                      "end": 590
                    },
                    {
                      "type": "TSArrayType",
                      "elementType": {
                        "type": "TSStringKeyword",
                        "start": 593,
                        "end": 599
                      },
                      "start": 593,
                      "end": 601
                    }
                  ],
                  "start": 584,
                  "end": 601
                },
                "start": 583,
                "end": 604
              },
              "start": 581,
              "end": 604
            },
            "start": 566,
            "end": 604
          },
          "init": null,
          "definite": false,
          "start": 566,
          "end": 604
        }
      ],
      "declare": false,
      "start": 562,
      "end": 605
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
              "type": "AssignmentPattern",
              "decorators": [],
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "nameA",
                "optional": false,
                "typeAnnotation": null,
                "start": 610,
                "end": 615
              },
              "right": {
                "type": "Literal",
                "value": "helloNoName",
                "raw": "\"helloNoName\"",
                "start": 618,
                "end": 631
              },
              "optional": false,
              "typeAnnotation": null,
              "start": 610,
              "end": 631
            }
          ],
          "optional": false,
          "typeAnnotation": null,
          "start": 607,
          "end": 632
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "robotA",
          "optional": false,
          "typeAnnotation": null,
          "start": 635,
          "end": 641
        },
        "start": 607,
        "end": 641
      },
      "directive": null,
      "start": 607,
      "end": 642
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
              "type": "AssignmentPattern",
              "decorators": [],
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "nameB",
                "optional": false,
                "typeAnnotation": null,
                "start": 646,
                "end": 651
              },
              "right": {
                "type": "Literal",
                "value": "helloNoName",
                "raw": "\"helloNoName\"",
                "start": 654,
                "end": 667
              },
              "optional": false,
              "typeAnnotation": null,
              "start": 646,
              "end": 667
            }
          ],
          "optional": false,
          "typeAnnotation": null,
          "start": 643,
          "end": 668
        },
        "right": {
          "type": "CallExpression",
          "callee": {
            "type": "Identifier",
            "decorators": [],
            "name": "getRobotB",
            "optional": false,
            "typeAnnotation": null,
            "start": 671,
            "end": 680
          },
          "typeArguments": null,
          "arguments": [],
          "optional": false,
          "start": 671,
          "end": 682
        },
        "start": 643,
        "end": 682
      },
      "directive": null,
      "start": 643,
      "end": 683
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
              "type": "AssignmentPattern",
              "decorators": [],
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "nameB",
                "optional": false,
                "typeAnnotation": null,
                "start": 687,
                "end": 692
              },
              "right": {
                "type": "Literal",
                "value": "helloNoName",
                "raw": "\"helloNoName\"",
                "start": 695,
                "end": 708
              },
              "optional": false,
              "typeAnnotation": null,
              "start": 687,
              "end": 708
            }
          ],
          "optional": false,
          "typeAnnotation": null,
          "start": 684,
          "end": 709
        },
        "right": {
          "type": "ArrayExpression",
          "elements": [
            {
              "type": "Literal",
              "value": 2,
              "raw": "2",
              "start": 713,
              "end": 714
            },
            {
              "type": "Literal",
              "value": "trimmer",
              "raw": "\"trimmer\"",
              "start": 716,
              "end": 725
            },
            {
              "type": "Literal",
              "value": "trimming",
              "raw": "\"trimming\"",
              "start": 727,
              "end": 737
            }
          ],
          "start": 712,
          "end": 738
        },
        "start": 684,
        "end": 738
      },
      "directive": null,
      "start": 684,
      "end": 739
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
              "type": "AssignmentPattern",
              "decorators": [],
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "multiSkillB",
                "optional": false,
                "typeAnnotation": null,
                "start": 743,
                "end": 754
              },
              "right": {
                "type": "ArrayExpression",
                "elements": [],
                "start": 757,
                "end": 759
              },
              "optional": false,
              "typeAnnotation": null,
              "start": 743,
              "end": 759
            }
          ],
          "optional": false,
          "typeAnnotation": null,
          "start": 740,
          "end": 760
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "multiRobotB",
          "optional": false,
          "typeAnnotation": null,
          "start": 763,
          "end": 774
        },
        "start": 740,
        "end": 774
      },
      "directive": null,
      "start": 740,
      "end": 775
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
              "type": "AssignmentPattern",
              "decorators": [],
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "multiSkillB",
                "optional": false,
                "typeAnnotation": null,
                "start": 779,
                "end": 790
              },
              "right": {
                "type": "ArrayExpression",
                "elements": [],
                "start": 793,
                "end": 795
              },
              "optional": false,
              "typeAnnotation": null,
              "start": 779,
              "end": 795
            }
          ],
          "optional": false,
          "typeAnnotation": null,
          "start": 776,
          "end": 796
        },
        "right": {
          "type": "CallExpression",
          "callee": {
            "type": "Identifier",
            "decorators": [],
            "name": "getMultiRobotB",
            "optional": false,
            "typeAnnotation": null,
            "start": 799,
            "end": 813
          },
          "typeArguments": null,
          "arguments": [],
          "optional": false,
          "start": 799,
          "end": 815
        },
        "start": 776,
        "end": 815
      },
      "directive": null,
      "start": 776,
      "end": 816
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
              "type": "AssignmentPattern",
              "decorators": [],
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "multiSkillB",
                "optional": false,
                "typeAnnotation": null,
                "start": 820,
                "end": 831
              },
              "right": {
                "type": "ArrayExpression",
                "elements": [],
                "start": 834,
                "end": 836
              },
              "optional": false,
              "typeAnnotation": null,
              "start": 820,
              "end": 836
            }
          ],
          "optional": false,
          "typeAnnotation": null,
          "start": 817,
          "end": 837
        },
        "right": {
          "type": "ArrayExpression",
          "elements": [
            {
              "type": "Literal",
              "value": "roomba",
              "raw": "\"roomba\"",
              "start": 841,
              "end": 849
            },
            {
              "type": "ArrayExpression",
              "elements": [
                {
                  "type": "Literal",
                  "value": "vacuum",
                  "raw": "\"vacuum\"",
                  "start": 852,
                  "end": 860
                },
                {
                  "type": "Literal",
                  "value": "mopping",
                  "raw": "\"mopping\"",
                  "start": 862,
                  "end": 871
                }
              ],
              "start": 851,
              "end": 872
            }
          ],
          "start": 840,
          "end": 873
        },
        "start": 817,
        "end": 873
      },
      "directive": null,
      "start": 817,
      "end": 874
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
              "type": "AssignmentPattern",
              "decorators": [],
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "numberB",
                "optional": false,
                "typeAnnotation": null,
                "start": 877,
                "end": 884
              },
              "right": {
                "type": "UnaryExpression",
                "operator": "-",
                "argument": {
                  "type": "Literal",
                  "value": 1,
                  "raw": "1",
                  "start": 888,
                  "end": 889
                },
                "prefix": true,
                "start": 887,
                "end": 889
              },
              "optional": false,
              "typeAnnotation": null,
              "start": 877,
              "end": 889
            }
          ],
          "optional": false,
          "typeAnnotation": null,
          "start": 876,
          "end": 890
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "robotB",
          "optional": false,
          "typeAnnotation": null,
          "start": 893,
          "end": 899
        },
        "start": 876,
        "end": 899
      },
      "directive": null,
      "start": 876,
      "end": 900
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
              "type": "AssignmentPattern",
              "decorators": [],
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "numberB",
                "optional": false,
                "typeAnnotation": null,
                "start": 902,
                "end": 909
              },
              "right": {
                "type": "UnaryExpression",
                "operator": "-",
                "argument": {
                  "type": "Literal",
                  "value": 1,
                  "raw": "1",
                  "start": 913,
                  "end": 914
                },
                "prefix": true,
                "start": 912,
                "end": 914
              },
              "optional": false,
              "typeAnnotation": null,
              "start": 902,
              "end": 914
            }
          ],
          "optional": false,
          "typeAnnotation": null,
          "start": 901,
          "end": 915
        },
        "right": {
          "type": "CallExpression",
          "callee": {
            "type": "Identifier",
            "decorators": [],
            "name": "getRobotB",
            "optional": false,
            "typeAnnotation": null,
            "start": 918,
            "end": 927
          },
          "typeArguments": null,
          "arguments": [],
          "optional": false,
          "start": 918,
          "end": 929
        },
        "start": 901,
        "end": 929
      },
      "directive": null,
      "start": 901,
      "end": 930
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
              "type": "AssignmentPattern",
              "decorators": [],
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "numberB",
                "optional": false,
                "typeAnnotation": null,
                "start": 932,
                "end": 939
              },
              "right": {
                "type": "UnaryExpression",
                "operator": "-",
                "argument": {
                  "type": "Literal",
                  "value": 1,
                  "raw": "1",
                  "start": 943,
                  "end": 944
                },
                "prefix": true,
                "start": 942,
                "end": 944
              },
              "optional": false,
              "typeAnnotation": null,
              "start": 932,
              "end": 944
            }
          ],
          "optional": false,
          "typeAnnotation": null,
          "start": 931,
          "end": 945
        },
        "right": {
          "type": "ArrayExpression",
          "elements": [
            {
              "type": "Literal",
              "value": 2,
              "raw": "2",
              "start": 949,
              "end": 950
            },
            {
              "type": "Literal",
              "value": "trimmer",
              "raw": "\"trimmer\"",
              "start": 952,
              "end": 961
            },
            {
              "type": "Literal",
              "value": "trimming",
              "raw": "\"trimming\"",
              "start": 963,
              "end": 973
            }
          ],
          "start": 948,
          "end": 974
        },
        "start": 931,
        "end": 974
      },
      "directive": null,
      "start": 931,
      "end": 975
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
              "type": "AssignmentPattern",
              "decorators": [],
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "nameMB",
                "optional": false,
                "typeAnnotation": null,
                "start": 977,
                "end": 983
              },
              "right": {
                "type": "Literal",
                "value": "helloNoName",
                "raw": "\"helloNoName\"",
                "start": 986,
                "end": 999
              },
              "optional": false,
              "typeAnnotation": null,
              "start": 977,
              "end": 999
            }
          ],
          "optional": false,
          "typeAnnotation": null,
          "start": 976,
          "end": 1000
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "multiRobotB",
          "optional": false,
          "typeAnnotation": null,
          "start": 1003,
          "end": 1014
        },
        "start": 976,
        "end": 1014
      },
      "directive": null,
      "start": 976,
      "end": 1015
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
              "type": "AssignmentPattern",
              "decorators": [],
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "nameMB",
                "optional": false,
                "typeAnnotation": null,
                "start": 1017,
                "end": 1023
              },
              "right": {
                "type": "Literal",
                "value": "helloNoName",
                "raw": "\"helloNoName\"",
                "start": 1026,
                "end": 1039
              },
              "optional": false,
              "typeAnnotation": null,
              "start": 1017,
              "end": 1039
            }
          ],
          "optional": false,
          "typeAnnotation": null,
          "start": 1016,
          "end": 1040
        },
        "right": {
          "type": "CallExpression",
          "callee": {
            "type": "Identifier",
            "decorators": [],
            "name": "getMultiRobotB",
            "optional": false,
            "typeAnnotation": null,
            "start": 1043,
            "end": 1057
          },
          "typeArguments": null,
          "arguments": [],
          "optional": false,
          "start": 1043,
          "end": 1059
        },
        "start": 1016,
        "end": 1059
      },
      "directive": null,
      "start": 1016,
      "end": 1060
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
              "type": "AssignmentPattern",
              "decorators": [],
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "nameMB",
                "optional": false,
                "typeAnnotation": null,
                "start": 1062,
                "end": 1068
              },
              "right": {
                "type": "Literal",
                "value": "helloNoName",
                "raw": "\"helloNoName\"",
                "start": 1071,
                "end": 1084
              },
              "optional": false,
              "typeAnnotation": null,
              "start": 1062,
              "end": 1084
            }
          ],
          "optional": false,
          "typeAnnotation": null,
          "start": 1061,
          "end": 1085
        },
        "right": {
          "type": "ArrayExpression",
          "elements": [
            {
              "type": "Literal",
              "value": "trimmer",
              "raw": "\"trimmer\"",
              "start": 1089,
              "end": 1098
            },
            {
              "type": "ArrayExpression",
              "elements": [
                {
                  "type": "Literal",
                  "value": "trimming",
                  "raw": "\"trimming\"",
                  "start": 1101,
                  "end": 1111
                },
                {
                  "type": "Literal",
                  "value": "edging",
                  "raw": "\"edging\"",
                  "start": 1113,
                  "end": 1121
                }
              ],
              "start": 1100,
              "end": 1122
            }
          ],
          "start": 1088,
          "end": 1123
        },
        "start": 1061,
        "end": 1123
      },
      "directive": null,
      "start": 1061,
      "end": 1124
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
              "type": "AssignmentPattern",
              "decorators": [],
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "numberB",
                "optional": false,
                "typeAnnotation": null,
                "start": 1127,
                "end": 1134
              },
              "right": {
                "type": "UnaryExpression",
                "operator": "-",
                "argument": {
                  "type": "Literal",
                  "value": 1,
                  "raw": "1",
                  "start": 1138,
                  "end": 1139
                },
                "prefix": true,
                "start": 1137,
                "end": 1139
              },
              "optional": false,
              "typeAnnotation": null,
              "start": 1127,
              "end": 1139
            },
            {
              "type": "AssignmentPattern",
              "decorators": [],
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "nameB",
                "optional": false,
                "typeAnnotation": null,
                "start": 1141,
                "end": 1146
              },
              "right": {
                "type": "Literal",
                "value": "helloNoName",
                "raw": "\"helloNoName\"",
                "start": 1149,
                "end": 1162
              },
              "optional": false,
              "typeAnnotation": null,
              "start": 1141,
              "end": 1162
            },
            {
              "type": "AssignmentPattern",
              "decorators": [],
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "skillB",
                "optional": false,
                "typeAnnotation": null,
                "start": 1164,
                "end": 1170
              },
              "right": {
                "type": "Literal",
                "value": "noSkill",
                "raw": "\"noSkill\"",
                "start": 1173,
                "end": 1182
              },
              "optional": false,
              "typeAnnotation": null,
              "start": 1164,
              "end": 1182
            }
          ],
          "optional": false,
          "typeAnnotation": null,
          "start": 1126,
          "end": 1183
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "robotB",
          "optional": false,
          "typeAnnotation": null,
          "start": 1186,
          "end": 1192
        },
        "start": 1126,
        "end": 1192
      },
      "directive": null,
      "start": 1126,
      "end": 1193
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
              "type": "AssignmentPattern",
              "decorators": [],
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "numberB",
                "optional": false,
                "typeAnnotation": null,
                "start": 1195,
                "end": 1202
              },
              "right": {
                "type": "UnaryExpression",
                "operator": "-",
                "argument": {
                  "type": "Literal",
                  "value": 1,
                  "raw": "1",
                  "start": 1206,
                  "end": 1207
                },
                "prefix": true,
                "start": 1205,
                "end": 1207
              },
              "optional": false,
              "typeAnnotation": null,
              "start": 1195,
              "end": 1207
            },
            {
              "type": "AssignmentPattern",
              "decorators": [],
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "nameB",
                "optional": false,
                "typeAnnotation": null,
                "start": 1209,
                "end": 1214
              },
              "right": {
                "type": "Literal",
                "value": "helloNoName",
                "raw": "\"helloNoName\"",
                "start": 1217,
                "end": 1230
              },
              "optional": false,
              "typeAnnotation": null,
              "start": 1209,
              "end": 1230
            },
            {
              "type": "AssignmentPattern",
              "decorators": [],
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "skillB",
                "optional": false,
                "typeAnnotation": null,
                "start": 1232,
                "end": 1238
              },
              "right": {
                "type": "Literal",
                "value": "noSkill",
                "raw": "\"noSkill\"",
                "start": 1241,
                "end": 1250
              },
              "optional": false,
              "typeAnnotation": null,
              "start": 1232,
              "end": 1250
            }
          ],
          "optional": false,
          "typeAnnotation": null,
          "start": 1194,
          "end": 1251
        },
        "right": {
          "type": "CallExpression",
          "callee": {
            "type": "Identifier",
            "decorators": [],
            "name": "getRobotB",
            "optional": false,
            "typeAnnotation": null,
            "start": 1254,
            "end": 1263
          },
          "typeArguments": null,
          "arguments": [],
          "optional": false,
          "start": 1254,
          "end": 1265
        },
        "start": 1194,
        "end": 1265
      },
      "directive": null,
      "start": 1194,
      "end": 1266
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
              "type": "AssignmentPattern",
              "decorators": [],
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "numberB",
                "optional": false,
                "typeAnnotation": null,
                "start": 1268,
                "end": 1275
              },
              "right": {
                "type": "UnaryExpression",
                "operator": "-",
                "argument": {
                  "type": "Literal",
                  "value": 1,
                  "raw": "1",
                  "start": 1279,
                  "end": 1280
                },
                "prefix": true,
                "start": 1278,
                "end": 1280
              },
              "optional": false,
              "typeAnnotation": null,
              "start": 1268,
              "end": 1280
            },
            {
              "type": "AssignmentPattern",
              "decorators": [],
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "nameB",
                "optional": false,
                "typeAnnotation": null,
                "start": 1282,
                "end": 1287
              },
              "right": {
                "type": "Literal",
                "value": "helloNoName",
                "raw": "\"helloNoName\"",
                "start": 1290,
                "end": 1303
              },
              "optional": false,
              "typeAnnotation": null,
              "start": 1282,
              "end": 1303
            },
            {
              "type": "AssignmentPattern",
              "decorators": [],
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "skillB",
                "optional": false,
                "typeAnnotation": null,
                "start": 1305,
                "end": 1311
              },
              "right": {
                "type": "Literal",
                "value": "noSkill",
                "raw": "\"noSkill\"",
                "start": 1314,
                "end": 1323
              },
              "optional": false,
              "typeAnnotation": null,
              "start": 1305,
              "end": 1323
            }
          ],
          "optional": false,
          "typeAnnotation": null,
          "start": 1267,
          "end": 1324
        },
        "right": {
          "type": "ArrayExpression",
          "elements": [
            {
              "type": "Literal",
              "value": 2,
              "raw": "2",
              "start": 1328,
              "end": 1329
            },
            {
              "type": "Literal",
              "value": "trimmer",
              "raw": "\"trimmer\"",
              "start": 1331,
              "end": 1340
            },
            {
              "type": "Literal",
              "value": "trimming",
              "raw": "\"trimming\"",
              "start": 1342,
              "end": 1352
            }
          ],
          "start": 1327,
          "end": 1353
        },
        "start": 1267,
        "end": 1353
      },
      "directive": null,
      "start": 1267,
      "end": 1354
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
              "type": "AssignmentPattern",
              "decorators": [],
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "nameMB",
                "optional": false,
                "typeAnnotation": null,
                "start": 1356,
                "end": 1362
              },
              "right": {
                "type": "Literal",
                "value": "helloNoName",
                "raw": "\"helloNoName\"",
                "start": 1365,
                "end": 1378
              },
              "optional": false,
              "typeAnnotation": null,
              "start": 1356,
              "end": 1378
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
                      "name": "primarySkillB",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1381,
                      "end": 1394
                    },
                    "right": {
                      "type": "Literal",
                      "value": "noSkill",
                      "raw": "\"noSkill\"",
                      "start": 1397,
                      "end": 1406
                    },
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1381,
                    "end": 1406
                  },
                  {
                    "type": "AssignmentPattern",
                    "decorators": [],
                    "left": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "secondarySkillB",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1408,
                      "end": 1423
                    },
                    "right": {
                      "type": "Literal",
                      "value": "noSkill",
                      "raw": "\"noSkill\"",
                      "start": 1426,
                      "end": 1435
                    },
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1408,
                    "end": 1435
                  }
                ],
                "optional": false,
                "typeAnnotation": null,
                "start": 1380,
                "end": 1436
              },
              "right": {
                "type": "ArrayExpression",
                "elements": [],
                "start": 1439,
                "end": 1441
              },
              "optional": false,
              "typeAnnotation": null,
              "start": 1380,
              "end": 1441
            }
          ],
          "optional": false,
          "typeAnnotation": null,
          "start": 1355,
          "end": 1442
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "multiRobotB",
          "optional": false,
          "typeAnnotation": null,
          "start": 1445,
          "end": 1456
        },
        "start": 1355,
        "end": 1456
      },
      "directive": null,
      "start": 1355,
      "end": 1457
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
              "type": "AssignmentPattern",
              "decorators": [],
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "nameMB",
                "optional": false,
                "typeAnnotation": null,
                "start": 1459,
                "end": 1465
              },
              "right": {
                "type": "Literal",
                "value": "helloNoName",
                "raw": "\"helloNoName\"",
                "start": 1468,
                "end": 1481
              },
              "optional": false,
              "typeAnnotation": null,
              "start": 1459,
              "end": 1481
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
                      "name": "primarySkillB",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1484,
                      "end": 1497
                    },
                    "right": {
                      "type": "Literal",
                      "value": "noSkill",
                      "raw": "\"noSkill\"",
                      "start": 1500,
                      "end": 1509
                    },
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1484,
                    "end": 1509
                  },
                  {
                    "type": "AssignmentPattern",
                    "decorators": [],
                    "left": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "secondarySkillB",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1511,
                      "end": 1526
                    },
                    "right": {
                      "type": "Literal",
                      "value": "noSkill",
                      "raw": "\"noSkill\"",
                      "start": 1529,
                      "end": 1538
                    },
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1511,
                    "end": 1538
                  }
                ],
                "optional": false,
                "typeAnnotation": null,
                "start": 1483,
                "end": 1539
              },
              "right": {
                "type": "ArrayExpression",
                "elements": [],
                "start": 1542,
                "end": 1544
              },
              "optional": false,
              "typeAnnotation": null,
              "start": 1483,
              "end": 1544
            }
          ],
          "optional": false,
          "typeAnnotation": null,
          "start": 1458,
          "end": 1545
        },
        "right": {
          "type": "CallExpression",
          "callee": {
            "type": "Identifier",
            "decorators": [],
            "name": "getMultiRobotB",
            "optional": false,
            "typeAnnotation": null,
            "start": 1548,
            "end": 1562
          },
          "typeArguments": null,
          "arguments": [],
          "optional": false,
          "start": 1548,
          "end": 1564
        },
        "start": 1458,
        "end": 1564
      },
      "directive": null,
      "start": 1458,
      "end": 1565
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
              "type": "AssignmentPattern",
              "decorators": [],
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "nameMB",
                "optional": false,
                "typeAnnotation": null,
                "start": 1567,
                "end": 1573
              },
              "right": {
                "type": "Literal",
                "value": "helloNoName",
                "raw": "\"helloNoName\"",
                "start": 1576,
                "end": 1589
              },
              "optional": false,
              "typeAnnotation": null,
              "start": 1567,
              "end": 1589
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
                      "name": "primarySkillB",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1592,
                      "end": 1605
                    },
                    "right": {
                      "type": "Literal",
                      "value": "noSkill",
                      "raw": "\"noSkill\"",
                      "start": 1608,
                      "end": 1617
                    },
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1592,
                    "end": 1617
                  },
                  {
                    "type": "AssignmentPattern",
                    "decorators": [],
                    "left": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "secondarySkillB",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1619,
                      "end": 1634
                    },
                    "right": {
                      "type": "Literal",
                      "value": "noSkill",
                      "raw": "\"noSkill\"",
                      "start": 1637,
                      "end": 1646
                    },
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1619,
                    "end": 1646
                  }
                ],
                "optional": false,
                "typeAnnotation": null,
                "start": 1591,
                "end": 1647
              },
              "right": {
                "type": "ArrayExpression",
                "elements": [],
                "start": 1650,
                "end": 1652
              },
              "optional": false,
              "typeAnnotation": null,
              "start": 1591,
              "end": 1652
            }
          ],
          "optional": false,
          "typeAnnotation": null,
          "start": 1566,
          "end": 1653
        },
        "right": {
          "type": "ArrayExpression",
          "elements": [
            {
              "type": "Literal",
              "value": "trimmer",
              "raw": "\"trimmer\"",
              "start": 1661,
              "end": 1670
            },
            {
              "type": "ArrayExpression",
              "elements": [
                {
                  "type": "Literal",
                  "value": "trimming",
                  "raw": "\"trimming\"",
                  "start": 1673,
                  "end": 1683
                },
                {
                  "type": "Literal",
                  "value": "edging",
                  "raw": "\"edging\"",
                  "start": 1685,
                  "end": 1693
                }
              ],
              "start": 1672,
              "end": 1694
            }
          ],
          "start": 1660,
          "end": 1695
        },
        "start": 1566,
        "end": 1695
      },
      "directive": null,
      "start": 1566,
      "end": 1696
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
              "type": "AssignmentPattern",
              "decorators": [],
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "numberB",
                "optional": false,
                "typeAnnotation": null,
                "start": 1699,
                "end": 1706
              },
              "right": {
                "type": "UnaryExpression",
                "operator": "-",
                "argument": {
                  "type": "Literal",
                  "value": 1,
                  "raw": "1",
                  "start": 1710,
                  "end": 1711
                },
                "prefix": true,
                "start": 1709,
                "end": 1711
              },
              "optional": false,
              "typeAnnotation": null,
              "start": 1699,
              "end": 1711
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
                "start": 1716,
                "end": 1726
              },
              "optional": false,
              "typeAnnotation": null,
              "value": null,
              "start": 1713,
              "end": 1726
            }
          ],
          "optional": false,
          "typeAnnotation": null,
          "start": 1698,
          "end": 1727
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "robotB",
          "optional": false,
          "typeAnnotation": null,
          "start": 1730,
          "end": 1736
        },
        "start": 1698,
        "end": 1736
      },
      "directive": null,
      "start": 1698,
      "end": 1737
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
              "type": "AssignmentPattern",
              "decorators": [],
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "numberB",
                "optional": false,
                "typeAnnotation": null,
                "start": 1739,
                "end": 1746
              },
              "right": {
                "type": "UnaryExpression",
                "operator": "-",
                "argument": {
                  "type": "Literal",
                  "value": 1,
                  "raw": "1",
                  "start": 1750,
                  "end": 1751
                },
                "prefix": true,
                "start": 1749,
                "end": 1751
              },
              "optional": false,
              "typeAnnotation": null,
              "start": 1739,
              "end": 1751
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
                "start": 1756,
                "end": 1766
              },
              "optional": false,
              "typeAnnotation": null,
              "value": null,
              "start": 1753,
              "end": 1766
            }
          ],
          "optional": false,
          "typeAnnotation": null,
          "start": 1738,
          "end": 1767
        },
        "right": {
          "type": "CallExpression",
          "callee": {
            "type": "Identifier",
            "decorators": [],
            "name": "getRobotB",
            "optional": false,
            "typeAnnotation": null,
            "start": 1770,
            "end": 1779
          },
          "typeArguments": null,
          "arguments": [],
          "optional": false,
          "start": 1770,
          "end": 1781
        },
        "start": 1738,
        "end": 1781
      },
      "directive": null,
      "start": 1738,
      "end": 1782
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
              "type": "AssignmentPattern",
              "decorators": [],
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "numberB",
                "optional": false,
                "typeAnnotation": null,
                "start": 1784,
                "end": 1791
              },
              "right": {
                "type": "UnaryExpression",
                "operator": "-",
                "argument": {
                  "type": "Literal",
                  "value": 1,
                  "raw": "1",
                  "start": 1795,
                  "end": 1796
                },
                "prefix": true,
                "start": 1794,
                "end": 1796
              },
              "optional": false,
              "typeAnnotation": null,
              "start": 1784,
              "end": 1796
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
                "start": 1801,
                "end": 1811
              },
              "optional": false,
              "typeAnnotation": null,
              "value": null,
              "start": 1798,
              "end": 1811
            }
          ],
          "optional": false,
          "typeAnnotation": null,
          "start": 1783,
          "end": 1812
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
              "start": 1816,
              "end": 1821
            },
            "typeArguments": null,
            "start": 1816,
            "end": 1821
          },
          "expression": {
            "type": "ArrayExpression",
            "elements": [
              {
                "type": "Literal",
                "value": 2,
                "raw": "2",
                "start": 1823,
                "end": 1824
              },
              {
                "type": "Literal",
                "value": "trimmer",
                "raw": "\"trimmer\"",
                "start": 1826,
                "end": 1835
              },
              {
                "type": "Literal",
                "value": "trimming",
                "raw": "\"trimming\"",
                "start": 1837,
                "end": 1847
              }
            ],
            "start": 1822,
            "end": 1848
          },
          "start": 1815,
          "end": 1848
        },
        "start": 1783,
        "end": 1848
      },
      "directive": null,
      "start": 1783,
      "end": 1849
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
          "start": 1855,
          "end": 1860
        },
        "operator": "==",
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "nameB",
          "optional": false,
          "typeAnnotation": null,
          "start": 1864,
          "end": 1869
        },
        "start": 1855,
        "end": 1869
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
                  "start": 1877,
                  "end": 1884
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "log",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1885,
                  "end": 1888
                },
                "optional": false,
                "computed": false,
                "start": 1877,
                "end": 1888
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "skillB",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1889,
                  "end": 1895
                }
              ],
              "optional": false,
              "start": 1877,
              "end": 1896
            },
            "directive": null,
            "start": 1877,
            "end": 1897
          }
        ],
        "start": 1871,
        "end": 1899
      },
      "alternate": null,
      "start": 1851,
      "end": 1899
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "getRobotB",
        "optional": false,
        "typeAnnotation": null,
        "start": 1910,
        "end": 1919
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
              "start": 1935,
              "end": 1941
            },
            "start": 1928,
            "end": 1942
          }
        ],
        "start": 1922,
        "end": 1944
      },
      "expression": false,
      "start": 1901,
      "end": 1944
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "getMultiRobotB",
        "optional": false,
        "typeAnnotation": null,
        "start": 1955,
        "end": 1969
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
              "start": 1985,
              "end": 1996
            },
            "start": 1978,
            "end": 1997
          }
        ],
        "start": 1972,
        "end": 1999
      },
      "expression": false,
      "start": 1946,
      "end": 1999
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 1999
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
    "value": "var",
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
    "value": "var",
    "start": 179,
    "end": 182
  },
  {
    "type": "Identifier",
    "value": "robotB",
    "start": 183,
    "end": 189
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 189,
    "end": 190
  },
  {
    "type": "Identifier",
    "value": "Robot",
    "start": 191,
    "end": 196
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 197,
    "end": 198
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 199,
    "end": 200
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 200,
    "end": 201
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 201,
    "end": 202
  },
  {
    "type": "String",
    "value": "\"trimmer\"",
    "start": 203,
    "end": 212
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 212,
    "end": 213
  },
  {
    "type": "String",
    "value": "\"trimming\"",
    "start": 214,
    "end": 224
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 224,
    "end": 225
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 225,
    "end": 226
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 227,
    "end": 230
  },
  {
    "type": "Identifier",
    "value": "multiRobotA",
    "start": 231,
    "end": 242
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 242,
    "end": 243
  },
  {
    "type": "Identifier",
    "value": "MultiSkilledRobot",
    "start": 244,
    "end": 261
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 262,
    "end": 263
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 264,
    "end": 265
  },
  {
    "type": "String",
    "value": "\"mower\"",
    "start": 265,
    "end": 272
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 272,
    "end": 273
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 274,
    "end": 275
  },
  {
    "type": "String",
    "value": "\"mowing\"",
    "start": 275,
    "end": 283
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 283,
    "end": 284
  },
  {
    "type": "String",
    "value": "\"\"",
    "start": 285,
    "end": 287
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 287,
    "end": 288
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 288,
    "end": 289
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 289,
    "end": 290
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 291,
    "end": 294
  },
  {
    "type": "Identifier",
    "value": "multiRobotB",
    "start": 295,
    "end": 306
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 306,
    "end": 307
  },
  {
    "type": "Identifier",
    "value": "MultiSkilledRobot",
    "start": 308,
    "end": 325
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 326,
    "end": 327
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 328,
    "end": 329
  },
  {
    "type": "String",
    "value": "\"trimmer\"",
    "start": 329,
    "end": 338
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 338,
    "end": 339
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 340,
    "end": 341
  },
  {
    "type": "String",
    "value": "\"trimming\"",
    "start": 341,
    "end": 351
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 351,
    "end": 352
  },
  {
    "type": "String",
    "value": "\"edging\"",
    "start": 353,
    "end": 361
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 361,
    "end": 362
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 362,
    "end": 363
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 363,
    "end": 364
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 366,
    "end": 369
  },
  {
    "type": "Identifier",
    "value": "nameA",
    "start": 370,
    "end": 375
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 375,
    "end": 376
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 377,
    "end": 383
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 383,
    "end": 384
  },
  {
    "type": "Identifier",
    "value": "numberB",
    "start": 385,
    "end": 392
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 392,
    "end": 393
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 394,
    "end": 400
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 400,
    "end": 401
  },
  {
    "type": "Identifier",
    "value": "nameB",
    "start": 402,
    "end": 407
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 407,
    "end": 408
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 409,
    "end": 415
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 415,
    "end": 416
  },
  {
    "type": "Identifier",
    "value": "skillB",
    "start": 417,
    "end": 423
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 423,
    "end": 424
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 425,
    "end": 431
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 431,
    "end": 432
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 433,
    "end": 436
  },
  {
    "type": "Identifier",
    "value": "robotAInfo",
    "start": 437,
    "end": 447
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 447,
    "end": 448
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 449,
    "end": 450
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 450,
    "end": 456
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 457,
    "end": 458
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 459,
    "end": 465
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 465,
    "end": 466
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 466,
    "end": 467
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 467,
    "end": 468
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 468,
    "end": 469
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 471,
    "end": 474
  },
  {
    "type": "Identifier",
    "value": "multiSkillB",
    "start": 475,
    "end": 486
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 486,
    "end": 487
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 488,
    "end": 494
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 494,
    "end": 495
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 495,
    "end": 496
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 496,
    "end": 497
  },
  {
    "type": "Identifier",
    "value": "nameMB",
    "start": 498,
    "end": 504
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 504,
    "end": 505
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 506,
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
    "value": "primarySkillB",
    "start": 514,
    "end": 527
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 527,
    "end": 528
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 529,
    "end": 535
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 535,
    "end": 536
  },
  {
    "type": "Identifier",
    "value": "secondarySkillB",
    "start": 537,
    "end": 552
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 552,
    "end": 553
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 554,
    "end": 560
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 560,
    "end": 561
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 562,
    "end": 565
  },
  {
    "type": "Identifier",
    "value": "multiRobotAInfo",
    "start": 566,
    "end": 581
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 581,
    "end": 582
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 583,
    "end": 584
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 584,
    "end": 590
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 591,
    "end": 592
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 593,
    "end": 599
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 599,
    "end": 600
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 600,
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
    "value": "[",
    "start": 602,
    "end": 603
  },
  {
    "type": "Punctuator",
    "value": "]",
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
    "value": "[",
    "start": 607,
    "end": 608
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 608,
    "end": 609
  },
  {
    "type": "Identifier",
    "value": "nameA",
    "start": 610,
    "end": 615
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 616,
    "end": 617
  },
  {
    "type": "String",
    "value": "\"helloNoName\"",
    "start": 618,
    "end": 631
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 631,
    "end": 632
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 633,
    "end": 634
  },
  {
    "type": "Identifier",
    "value": "robotA",
    "start": 635,
    "end": 641
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 641,
    "end": 642
  },
  {
    "type": "Punctuator",
    "value": "[",
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
    "value": "nameB",
    "start": 646,
    "end": 651
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 652,
    "end": 653
  },
  {
    "type": "String",
    "value": "\"helloNoName\"",
    "start": 654,
    "end": 667
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 667,
    "end": 668
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 669,
    "end": 670
  },
  {
    "type": "Identifier",
    "value": "getRobotB",
    "start": 671,
    "end": 680
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 680,
    "end": 681
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 681,
    "end": 682
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 682,
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
    "type": "Identifier",
    "value": "nameB",
    "start": 687,
    "end": 692
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 693,
    "end": 694
  },
  {
    "type": "String",
    "value": "\"helloNoName\"",
    "start": 695,
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
    "value": "=",
    "start": 710,
    "end": 711
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 712,
    "end": 713
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 713,
    "end": 714
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 714,
    "end": 715
  },
  {
    "type": "String",
    "value": "\"trimmer\"",
    "start": 716,
    "end": 725
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 725,
    "end": 726
  },
  {
    "type": "String",
    "value": "\"trimming\"",
    "start": 727,
    "end": 737
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 737,
    "end": 738
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 738,
    "end": 739
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 740,
    "end": 741
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 741,
    "end": 742
  },
  {
    "type": "Identifier",
    "value": "multiSkillB",
    "start": 743,
    "end": 754
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 755,
    "end": 756
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 757,
    "end": 758
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 758,
    "end": 759
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 759,
    "end": 760
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 761,
    "end": 762
  },
  {
    "type": "Identifier",
    "value": "multiRobotB",
    "start": 763,
    "end": 774
  },
  {
    "type": "Punctuator",
    "value": ";",
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
    "type": "Punctuator",
    "value": ",",
    "start": 777,
    "end": 778
  },
  {
    "type": "Identifier",
    "value": "multiSkillB",
    "start": 779,
    "end": 790
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 791,
    "end": 792
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 793,
    "end": 794
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 794,
    "end": 795
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 795,
    "end": 796
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 797,
    "end": 798
  },
  {
    "type": "Identifier",
    "value": "getMultiRobotB",
    "start": 799,
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
    "value": ";",
    "start": 815,
    "end": 816
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 817,
    "end": 818
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 818,
    "end": 819
  },
  {
    "type": "Identifier",
    "value": "multiSkillB",
    "start": 820,
    "end": 831
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 832,
    "end": 833
  },
  {
    "type": "Punctuator",
    "value": "[",
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
    "value": "]",
    "start": 836,
    "end": 837
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 838,
    "end": 839
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 840,
    "end": 841
  },
  {
    "type": "String",
    "value": "\"roomba\"",
    "start": 841,
    "end": 849
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 849,
    "end": 850
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 851,
    "end": 852
  },
  {
    "type": "String",
    "value": "\"vacuum\"",
    "start": 852,
    "end": 860
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 860,
    "end": 861
  },
  {
    "type": "String",
    "value": "\"mopping\"",
    "start": 862,
    "end": 871
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 871,
    "end": 872
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 872,
    "end": 873
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 873,
    "end": 874
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 876,
    "end": 877
  },
  {
    "type": "Identifier",
    "value": "numberB",
    "start": 877,
    "end": 884
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 885,
    "end": 886
  },
  {
    "type": "Punctuator",
    "value": "-",
    "start": 887,
    "end": 888
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 888,
    "end": 889
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 889,
    "end": 890
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 891,
    "end": 892
  },
  {
    "type": "Identifier",
    "value": "robotB",
    "start": 893,
    "end": 899
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 899,
    "end": 900
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 901,
    "end": 902
  },
  {
    "type": "Identifier",
    "value": "numberB",
    "start": 902,
    "end": 909
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 910,
    "end": 911
  },
  {
    "type": "Punctuator",
    "value": "-",
    "start": 912,
    "end": 913
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 913,
    "end": 914
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 914,
    "end": 915
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 916,
    "end": 917
  },
  {
    "type": "Identifier",
    "value": "getRobotB",
    "start": 918,
    "end": 927
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 927,
    "end": 928
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 928,
    "end": 929
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 929,
    "end": 930
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 931,
    "end": 932
  },
  {
    "type": "Identifier",
    "value": "numberB",
    "start": 932,
    "end": 939
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 940,
    "end": 941
  },
  {
    "type": "Punctuator",
    "value": "-",
    "start": 942,
    "end": 943
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 943,
    "end": 944
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 944,
    "end": 945
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 946,
    "end": 947
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 948,
    "end": 949
  },
  {
    "type": "Numeric",
    "value": "2",
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
    "type": "String",
    "value": "\"trimmer\"",
    "start": 952,
    "end": 961
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 961,
    "end": 962
  },
  {
    "type": "String",
    "value": "\"trimming\"",
    "start": 963,
    "end": 973
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 973,
    "end": 974
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 974,
    "end": 975
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 976,
    "end": 977
  },
  {
    "type": "Identifier",
    "value": "nameMB",
    "start": 977,
    "end": 983
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 984,
    "end": 985
  },
  {
    "type": "String",
    "value": "\"helloNoName\"",
    "start": 986,
    "end": 999
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 999,
    "end": 1000
  },
  {
    "type": "Punctuator",
    "value": "=",
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
    "value": ";",
    "start": 1014,
    "end": 1015
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1016,
    "end": 1017
  },
  {
    "type": "Identifier",
    "value": "nameMB",
    "start": 1017,
    "end": 1023
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1024,
    "end": 1025
  },
  {
    "type": "String",
    "value": "\"helloNoName\"",
    "start": 1026,
    "end": 1039
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1039,
    "end": 1040
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1041,
    "end": 1042
  },
  {
    "type": "Identifier",
    "value": "getMultiRobotB",
    "start": 1043,
    "end": 1057
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1057,
    "end": 1058
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1058,
    "end": 1059
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1059,
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
    "value": "nameMB",
    "start": 1062,
    "end": 1068
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1069,
    "end": 1070
  },
  {
    "type": "String",
    "value": "\"helloNoName\"",
    "start": 1071,
    "end": 1084
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1084,
    "end": 1085
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1086,
    "end": 1087
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1088,
    "end": 1089
  },
  {
    "type": "String",
    "value": "\"trimmer\"",
    "start": 1089,
    "end": 1098
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1098,
    "end": 1099
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1100,
    "end": 1101
  },
  {
    "type": "String",
    "value": "\"trimming\"",
    "start": 1101,
    "end": 1111
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1111,
    "end": 1112
  },
  {
    "type": "String",
    "value": "\"edging\"",
    "start": 1113,
    "end": 1121
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1121,
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
    "value": ";",
    "start": 1123,
    "end": 1124
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1126,
    "end": 1127
  },
  {
    "type": "Identifier",
    "value": "numberB",
    "start": 1127,
    "end": 1134
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1135,
    "end": 1136
  },
  {
    "type": "Punctuator",
    "value": "-",
    "start": 1137,
    "end": 1138
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 1138,
    "end": 1139
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1139,
    "end": 1140
  },
  {
    "type": "Identifier",
    "value": "nameB",
    "start": 1141,
    "end": 1146
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1147,
    "end": 1148
  },
  {
    "type": "String",
    "value": "\"helloNoName\"",
    "start": 1149,
    "end": 1162
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1162,
    "end": 1163
  },
  {
    "type": "Identifier",
    "value": "skillB",
    "start": 1164,
    "end": 1170
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1171,
    "end": 1172
  },
  {
    "type": "String",
    "value": "\"noSkill\"",
    "start": 1173,
    "end": 1182
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1182,
    "end": 1183
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1184,
    "end": 1185
  },
  {
    "type": "Identifier",
    "value": "robotB",
    "start": 1186,
    "end": 1192
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1192,
    "end": 1193
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1194,
    "end": 1195
  },
  {
    "type": "Identifier",
    "value": "numberB",
    "start": 1195,
    "end": 1202
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1203,
    "end": 1204
  },
  {
    "type": "Punctuator",
    "value": "-",
    "start": 1205,
    "end": 1206
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 1206,
    "end": 1207
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1207,
    "end": 1208
  },
  {
    "type": "Identifier",
    "value": "nameB",
    "start": 1209,
    "end": 1214
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1215,
    "end": 1216
  },
  {
    "type": "String",
    "value": "\"helloNoName\"",
    "start": 1217,
    "end": 1230
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1230,
    "end": 1231
  },
  {
    "type": "Identifier",
    "value": "skillB",
    "start": 1232,
    "end": 1238
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1239,
    "end": 1240
  },
  {
    "type": "String",
    "value": "\"noSkill\"",
    "start": 1241,
    "end": 1250
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1250,
    "end": 1251
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1252,
    "end": 1253
  },
  {
    "type": "Identifier",
    "value": "getRobotB",
    "start": 1254,
    "end": 1263
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1263,
    "end": 1264
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1264,
    "end": 1265
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1265,
    "end": 1266
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1267,
    "end": 1268
  },
  {
    "type": "Identifier",
    "value": "numberB",
    "start": 1268,
    "end": 1275
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1276,
    "end": 1277
  },
  {
    "type": "Punctuator",
    "value": "-",
    "start": 1278,
    "end": 1279
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 1279,
    "end": 1280
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1280,
    "end": 1281
  },
  {
    "type": "Identifier",
    "value": "nameB",
    "start": 1282,
    "end": 1287
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1288,
    "end": 1289
  },
  {
    "type": "String",
    "value": "\"helloNoName\"",
    "start": 1290,
    "end": 1303
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1303,
    "end": 1304
  },
  {
    "type": "Identifier",
    "value": "skillB",
    "start": 1305,
    "end": 1311
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1312,
    "end": 1313
  },
  {
    "type": "String",
    "value": "\"noSkill\"",
    "start": 1314,
    "end": 1323
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1323,
    "end": 1324
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1325,
    "end": 1326
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1327,
    "end": 1328
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 1328,
    "end": 1329
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1329,
    "end": 1330
  },
  {
    "type": "String",
    "value": "\"trimmer\"",
    "start": 1331,
    "end": 1340
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1340,
    "end": 1341
  },
  {
    "type": "String",
    "value": "\"trimming\"",
    "start": 1342,
    "end": 1352
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1352,
    "end": 1353
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1353,
    "end": 1354
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1355,
    "end": 1356
  },
  {
    "type": "Identifier",
    "value": "nameMB",
    "start": 1356,
    "end": 1362
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1363,
    "end": 1364
  },
  {
    "type": "String",
    "value": "\"helloNoName\"",
    "start": 1365,
    "end": 1378
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1378,
    "end": 1379
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1380,
    "end": 1381
  },
  {
    "type": "Identifier",
    "value": "primarySkillB",
    "start": 1381,
    "end": 1394
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1395,
    "end": 1396
  },
  {
    "type": "String",
    "value": "\"noSkill\"",
    "start": 1397,
    "end": 1406
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1406,
    "end": 1407
  },
  {
    "type": "Identifier",
    "value": "secondarySkillB",
    "start": 1408,
    "end": 1423
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1424,
    "end": 1425
  },
  {
    "type": "String",
    "value": "\"noSkill\"",
    "start": 1426,
    "end": 1435
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1435,
    "end": 1436
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1437,
    "end": 1438
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1439,
    "end": 1440
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1440,
    "end": 1441
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1441,
    "end": 1442
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1443,
    "end": 1444
  },
  {
    "type": "Identifier",
    "value": "multiRobotB",
    "start": 1445,
    "end": 1456
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1456,
    "end": 1457
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1458,
    "end": 1459
  },
  {
    "type": "Identifier",
    "value": "nameMB",
    "start": 1459,
    "end": 1465
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1466,
    "end": 1467
  },
  {
    "type": "String",
    "value": "\"helloNoName\"",
    "start": 1468,
    "end": 1481
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1481,
    "end": 1482
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1483,
    "end": 1484
  },
  {
    "type": "Identifier",
    "value": "primarySkillB",
    "start": 1484,
    "end": 1497
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1498,
    "end": 1499
  },
  {
    "type": "String",
    "value": "\"noSkill\"",
    "start": 1500,
    "end": 1509
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1509,
    "end": 1510
  },
  {
    "type": "Identifier",
    "value": "secondarySkillB",
    "start": 1511,
    "end": 1526
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1527,
    "end": 1528
  },
  {
    "type": "String",
    "value": "\"noSkill\"",
    "start": 1529,
    "end": 1538
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1538,
    "end": 1539
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1540,
    "end": 1541
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1542,
    "end": 1543
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1543,
    "end": 1544
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1544,
    "end": 1545
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1546,
    "end": 1547
  },
  {
    "type": "Identifier",
    "value": "getMultiRobotB",
    "start": 1548,
    "end": 1562
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1562,
    "end": 1563
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1563,
    "end": 1564
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1564,
    "end": 1565
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1566,
    "end": 1567
  },
  {
    "type": "Identifier",
    "value": "nameMB",
    "start": 1567,
    "end": 1573
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1574,
    "end": 1575
  },
  {
    "type": "String",
    "value": "\"helloNoName\"",
    "start": 1576,
    "end": 1589
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1589,
    "end": 1590
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1591,
    "end": 1592
  },
  {
    "type": "Identifier",
    "value": "primarySkillB",
    "start": 1592,
    "end": 1605
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1606,
    "end": 1607
  },
  {
    "type": "String",
    "value": "\"noSkill\"",
    "start": 1608,
    "end": 1617
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1617,
    "end": 1618
  },
  {
    "type": "Identifier",
    "value": "secondarySkillB",
    "start": 1619,
    "end": 1634
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1635,
    "end": 1636
  },
  {
    "type": "String",
    "value": "\"noSkill\"",
    "start": 1637,
    "end": 1646
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1646,
    "end": 1647
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1648,
    "end": 1649
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1650,
    "end": 1651
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1651,
    "end": 1652
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1652,
    "end": 1653
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1654,
    "end": 1655
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1660,
    "end": 1661
  },
  {
    "type": "String",
    "value": "\"trimmer\"",
    "start": 1661,
    "end": 1670
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1670,
    "end": 1671
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1672,
    "end": 1673
  },
  {
    "type": "String",
    "value": "\"trimming\"",
    "start": 1673,
    "end": 1683
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1683,
    "end": 1684
  },
  {
    "type": "String",
    "value": "\"edging\"",
    "start": 1685,
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
    "value": "]",
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
    "value": "[",
    "start": 1698,
    "end": 1699
  },
  {
    "type": "Identifier",
    "value": "numberB",
    "start": 1699,
    "end": 1706
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1707,
    "end": 1708
  },
  {
    "type": "Punctuator",
    "value": "-",
    "start": 1709,
    "end": 1710
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 1710,
    "end": 1711
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1711,
    "end": 1712
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 1713,
    "end": 1716
  },
  {
    "type": "Identifier",
    "value": "robotAInfo",
    "start": 1716,
    "end": 1726
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1726,
    "end": 1727
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1728,
    "end": 1729
  },
  {
    "type": "Identifier",
    "value": "robotB",
    "start": 1730,
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
    "value": "[",
    "start": 1738,
    "end": 1739
  },
  {
    "type": "Identifier",
    "value": "numberB",
    "start": 1739,
    "end": 1746
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1747,
    "end": 1748
  },
  {
    "type": "Punctuator",
    "value": "-",
    "start": 1749,
    "end": 1750
  },
  {
    "type": "Numeric",
    "value": "1",
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
    "type": "Punctuator",
    "value": "...",
    "start": 1753,
    "end": 1756
  },
  {
    "type": "Identifier",
    "value": "robotAInfo",
    "start": 1756,
    "end": 1766
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1766,
    "end": 1767
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1768,
    "end": 1769
  },
  {
    "type": "Identifier",
    "value": "getRobotB",
    "start": 1770,
    "end": 1779
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1779,
    "end": 1780
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1780,
    "end": 1781
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1781,
    "end": 1782
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1783,
    "end": 1784
  },
  {
    "type": "Identifier",
    "value": "numberB",
    "start": 1784,
    "end": 1791
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1792,
    "end": 1793
  },
  {
    "type": "Punctuator",
    "value": "-",
    "start": 1794,
    "end": 1795
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 1795,
    "end": 1796
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1796,
    "end": 1797
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 1798,
    "end": 1801
  },
  {
    "type": "Identifier",
    "value": "robotAInfo",
    "start": 1801,
    "end": 1811
  },
  {
    "type": "Punctuator",
    "value": "]",
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
    "type": "Punctuator",
    "value": "<",
    "start": 1815,
    "end": 1816
  },
  {
    "type": "Identifier",
    "value": "Robot",
    "start": 1816,
    "end": 1821
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1821,
    "end": 1822
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1822,
    "end": 1823
  },
  {
    "type": "Numeric",
    "value": "2",
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
    "type": "String",
    "value": "\"trimmer\"",
    "start": 1826,
    "end": 1835
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1835,
    "end": 1836
  },
  {
    "type": "String",
    "value": "\"trimming\"",
    "start": 1837,
    "end": 1847
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1847,
    "end": 1848
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1848,
    "end": 1849
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 1851,
    "end": 1853
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1854,
    "end": 1855
  },
  {
    "type": "Identifier",
    "value": "nameA",
    "start": 1855,
    "end": 1860
  },
  {
    "type": "Punctuator",
    "value": "==",
    "start": 1861,
    "end": 1863
  },
  {
    "type": "Identifier",
    "value": "nameB",
    "start": 1864,
    "end": 1869
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1869,
    "end": 1870
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1871,
    "end": 1872
  },
  {
    "type": "Identifier",
    "value": "console",
    "start": 1877,
    "end": 1884
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1884,
    "end": 1885
  },
  {
    "type": "Identifier",
    "value": "log",
    "start": 1885,
    "end": 1888
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1888,
    "end": 1889
  },
  {
    "type": "Identifier",
    "value": "skillB",
    "start": 1889,
    "end": 1895
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1895,
    "end": 1896
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1896,
    "end": 1897
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1898,
    "end": 1899
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1901,
    "end": 1909
  },
  {
    "type": "Identifier",
    "value": "getRobotB",
    "start": 1910,
    "end": 1919
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1919,
    "end": 1920
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1920,
    "end": 1921
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1922,
    "end": 1923
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 1928,
    "end": 1934
  },
  {
    "type": "Identifier",
    "value": "robotB",
    "start": 1935,
    "end": 1941
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1941,
    "end": 1942
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1943,
    "end": 1944
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1946,
    "end": 1954
  },
  {
    "type": "Identifier",
    "value": "getMultiRobotB",
    "start": 1955,
    "end": 1969
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1969,
    "end": 1970
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1970,
    "end": 1971
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1972,
    "end": 1973
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 1978,
    "end": 1984
  },
  {
    "type": "Identifier",
    "value": "multiRobotB",
    "start": 1985,
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
  }
]
```
