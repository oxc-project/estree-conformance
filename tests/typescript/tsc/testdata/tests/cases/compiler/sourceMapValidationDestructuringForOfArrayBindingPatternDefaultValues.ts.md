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
                  "type": "AssignmentPattern",
                  "decorators": [],
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "nameA",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 562,
                    "end": 567
                  },
                  "right": {
                    "type": "Literal",
                    "value": "noName",
                    "raw": "\"noName\"",
                    "start": 570,
                    "end": 578
                  },
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 562,
                  "end": 578
                }
              ],
              "optional": false,
              "typeAnnotation": null,
              "start": 559,
              "end": 579
            },
            "init": null,
            "definite": false,
            "start": 559,
            "end": 579
          }
        ],
        "declare": false,
        "start": 555,
        "end": 579
      },
      "right": {
        "type": "Identifier",
        "decorators": [],
        "name": "robots",
        "optional": false,
        "typeAnnotation": null,
        "start": 583,
        "end": 589
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
                  "start": 597,
                  "end": 604
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "log",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 605,
                  "end": 608
                },
                "optional": false,
                "computed": false,
                "start": 597,
                "end": 608
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "nameA",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 609,
                  "end": 614
                }
              ],
              "optional": false,
              "start": 597,
              "end": 615
            },
            "directive": null,
            "start": 597,
            "end": 616
          }
        ],
        "start": 591,
        "end": 618
      },
      "start": 550,
      "end": 618
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
                  "type": "AssignmentPattern",
                  "decorators": [],
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "nameA",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 631,
                    "end": 636
                  },
                  "right": {
                    "type": "Literal",
                    "value": "noName",
                    "raw": "\"noName\"",
                    "start": 639,
                    "end": 647
                  },
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 631,
                  "end": 647
                }
              ],
              "optional": false,
              "typeAnnotation": null,
              "start": 628,
              "end": 648
            },
            "init": null,
            "definite": false,
            "start": 628,
            "end": 648
          }
        ],
        "declare": false,
        "start": 624,
        "end": 648
      },
      "right": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "getRobots",
          "optional": false,
          "typeAnnotation": null,
          "start": 652,
          "end": 661
        },
        "typeArguments": null,
        "arguments": [],
        "optional": false,
        "start": 652,
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
      "start": 619,
      "end": 692
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
                  "type": "AssignmentPattern",
                  "decorators": [],
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "nameA",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 705,
                    "end": 710
                  },
                  "right": {
                    "type": "Literal",
                    "value": "noName",
                    "raw": "\"noName\"",
                    "start": 713,
                    "end": 721
                  },
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 705,
                  "end": 721
                }
              ],
              "optional": false,
              "typeAnnotation": null,
              "start": 702,
              "end": 722
            },
            "init": null,
            "definite": false,
            "start": 702,
            "end": 722
          }
        ],
        "declare": false,
        "start": 698,
        "end": 722
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
            "start": 727,
            "end": 733
          },
          {
            "type": "Identifier",
            "decorators": [],
            "name": "robotB",
            "optional": false,
            "typeAnnotation": null,
            "start": 735,
            "end": 741
          }
        ],
        "start": 726,
        "end": 742
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
                  "start": 750,
                  "end": 757
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "log",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 758,
                  "end": 761
                },
                "optional": false,
                "computed": false,
                "start": 750,
                "end": 761
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "nameA",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 762,
                  "end": 767
                }
              ],
              "optional": false,
              "start": 750,
              "end": 768
            },
            "directive": null,
            "start": 750,
            "end": 769
          }
        ],
        "start": 744,
        "end": 771
      },
      "start": 693,
      "end": 771
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
                          "start": 790,
                          "end": 803
                        },
                        "right": {
                          "type": "Literal",
                          "value": "primary",
                          "raw": "\"primary\"",
                          "start": 806,
                          "end": 815
                        },
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 790,
                        "end": 815
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
                          "start": 821,
                          "end": 836
                        },
                        "right": {
                          "type": "Literal",
                          "value": "secondary",
                          "raw": "\"secondary\"",
                          "start": 839,
                          "end": 850
                        },
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 821,
                        "end": 850
                      }
                    ],
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 784,
                    "end": 852
                  },
                  "right": {
                    "type": "ArrayExpression",
                    "elements": [
                      {
                        "type": "Literal",
                        "value": "skill1",
                        "raw": "\"skill1\"",
                        "start": 856,
                        "end": 864
                      },
                      {
                        "type": "Literal",
                        "value": "skill2",
                        "raw": "\"skill2\"",
                        "start": 866,
                        "end": 874
                      }
                    ],
                    "start": 855,
                    "end": 875
                  },
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 784,
                  "end": 875
                }
              ],
              "optional": false,
              "typeAnnotation": null,
              "start": 781,
              "end": 876
            },
            "init": null,
            "definite": false,
            "start": 781,
            "end": 876
          }
        ],
        "declare": false,
        "start": 777,
        "end": 876
      },
      "right": {
        "type": "Identifier",
        "decorators": [],
        "name": "multiRobots",
        "optional": false,
        "typeAnnotation": null,
        "start": 880,
        "end": 891
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
                  "start": 899,
                  "end": 906
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "log",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 907,
                  "end": 910
                },
                "optional": false,
                "computed": false,
                "start": 899,
                "end": 910
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "primarySkillA",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 911,
                  "end": 924
                }
              ],
              "optional": false,
              "start": 899,
              "end": 925
            },
            "directive": null,
            "start": 899,
            "end": 926
          }
        ],
        "start": 893,
        "end": 928
      },
      "start": 772,
      "end": 928
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
                          "start": 947,
                          "end": 960
                        },
                        "right": {
                          "type": "Literal",
                          "value": "primary",
                          "raw": "\"primary\"",
                          "start": 963,
                          "end": 972
                        },
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 947,
                        "end": 972
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
                          "start": 978,
                          "end": 993
                        },
                        "right": {
                          "type": "Literal",
                          "value": "secondary",
                          "raw": "\"secondary\"",
                          "start": 996,
                          "end": 1007
                        },
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 978,
                        "end": 1007
                      }
                    ],
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 941,
                    "end": 1009
                  },
                  "right": {
                    "type": "ArrayExpression",
                    "elements": [
                      {
                        "type": "Literal",
                        "value": "skill1",
                        "raw": "\"skill1\"",
                        "start": 1013,
                        "end": 1021
                      },
                      {
                        "type": "Literal",
                        "value": "skill2",
                        "raw": "\"skill2\"",
                        "start": 1023,
                        "end": 1031
                      }
                    ],
                    "start": 1012,
                    "end": 1032
                  },
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 941,
                  "end": 1032
                }
              ],
              "optional": false,
              "typeAnnotation": null,
              "start": 938,
              "end": 1033
            },
            "init": null,
            "definite": false,
            "start": 938,
            "end": 1033
          }
        ],
        "declare": false,
        "start": 934,
        "end": 1033
      },
      "right": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "getMultiRobots",
          "optional": false,
          "typeAnnotation": null,
          "start": 1037,
          "end": 1051
        },
        "typeArguments": null,
        "arguments": [],
        "optional": false,
        "start": 1037,
        "end": 1053
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
                  "start": 1061,
                  "end": 1068
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "log",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1069,
                  "end": 1072
                },
                "optional": false,
                "computed": false,
                "start": 1061,
                "end": 1072
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "primarySkillA",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1073,
                  "end": 1086
                }
              ],
              "optional": false,
              "start": 1061,
              "end": 1087
            },
            "directive": null,
            "start": 1061,
            "end": 1088
          }
        ],
        "start": 1055,
        "end": 1090
      },
      "start": 929,
      "end": 1090
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
                          "start": 1109,
                          "end": 1122
                        },
                        "right": {
                          "type": "Literal",
                          "value": "primary",
                          "raw": "\"primary\"",
                          "start": 1125,
                          "end": 1134
                        },
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1109,
                        "end": 1134
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
                          "start": 1140,
                          "end": 1155
                        },
                        "right": {
                          "type": "Literal",
                          "value": "secondary",
                          "raw": "\"secondary\"",
                          "start": 1158,
                          "end": 1169
                        },
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1140,
                        "end": 1169
                      }
                    ],
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1103,
                    "end": 1171
                  },
                  "right": {
                    "type": "ArrayExpression",
                    "elements": [
                      {
                        "type": "Literal",
                        "value": "skill1",
                        "raw": "\"skill1\"",
                        "start": 1175,
                        "end": 1183
                      },
                      {
                        "type": "Literal",
                        "value": "skill2",
                        "raw": "\"skill2\"",
                        "start": 1185,
                        "end": 1193
                      }
                    ],
                    "start": 1174,
                    "end": 1194
                  },
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1103,
                  "end": 1194
                }
              ],
              "optional": false,
              "typeAnnotation": null,
              "start": 1100,
              "end": 1195
            },
            "init": null,
            "definite": false,
            "start": 1100,
            "end": 1195
          }
        ],
        "declare": false,
        "start": 1096,
        "end": 1195
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
            "start": 1200,
            "end": 1211
          },
          {
            "type": "Identifier",
            "decorators": [],
            "name": "multiRobotB",
            "optional": false,
            "typeAnnotation": null,
            "start": 1213,
            "end": 1224
          }
        ],
        "start": 1199,
        "end": 1225
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
                  "start": 1233,
                  "end": 1240
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "log",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1241,
                  "end": 1244
                },
                "optional": false,
                "computed": false,
                "start": 1233,
                "end": 1244
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "primarySkillA",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1245,
                  "end": 1258
                }
              ],
              "optional": false,
              "start": 1233,
              "end": 1259
            },
            "directive": null,
            "start": 1233,
            "end": 1260
          }
        ],
        "start": 1227,
        "end": 1262
      },
      "start": 1091,
      "end": 1262
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
                  "type": "AssignmentPattern",
                  "decorators": [],
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "numberB",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1274,
                    "end": 1281
                  },
                  "right": {
                    "type": "UnaryExpression",
                    "operator": "-",
                    "argument": {
                      "type": "Literal",
                      "value": 1,
                      "raw": "1",
                      "start": 1285,
                      "end": 1286
                    },
                    "prefix": true,
                    "start": 1284,
                    "end": 1286
                  },
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1274,
                  "end": 1286
                }
              ],
              "optional": false,
              "typeAnnotation": null,
              "start": 1273,
              "end": 1287
            },
            "init": null,
            "definite": false,
            "start": 1273,
            "end": 1287
          }
        ],
        "declare": false,
        "start": 1269,
        "end": 1287
      },
      "right": {
        "type": "Identifier",
        "decorators": [],
        "name": "robots",
        "optional": false,
        "typeAnnotation": null,
        "start": 1291,
        "end": 1297
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
                  "start": 1305,
                  "end": 1312
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "log",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1313,
                  "end": 1316
                },
                "optional": false,
                "computed": false,
                "start": 1305,
                "end": 1316
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "numberB",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1317,
                  "end": 1324
                }
              ],
              "optional": false,
              "start": 1305,
              "end": 1325
            },
            "directive": null,
            "start": 1305,
            "end": 1326
          }
        ],
        "start": 1299,
        "end": 1328
      },
      "start": 1264,
      "end": 1328
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
                  "type": "AssignmentPattern",
                  "decorators": [],
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "numberB",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1339,
                    "end": 1346
                  },
                  "right": {
                    "type": "UnaryExpression",
                    "operator": "-",
                    "argument": {
                      "type": "Literal",
                      "value": 1,
                      "raw": "1",
                      "start": 1350,
                      "end": 1351
                    },
                    "prefix": true,
                    "start": 1349,
                    "end": 1351
                  },
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1339,
                  "end": 1351
                }
              ],
              "optional": false,
              "typeAnnotation": null,
              "start": 1338,
              "end": 1352
            },
            "init": null,
            "definite": false,
            "start": 1338,
            "end": 1352
          }
        ],
        "declare": false,
        "start": 1334,
        "end": 1352
      },
      "right": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "getRobots",
          "optional": false,
          "typeAnnotation": null,
          "start": 1356,
          "end": 1365
        },
        "typeArguments": null,
        "arguments": [],
        "optional": false,
        "start": 1356,
        "end": 1367
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
                  "start": 1375,
                  "end": 1382
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "log",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1383,
                  "end": 1386
                },
                "optional": false,
                "computed": false,
                "start": 1375,
                "end": 1386
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "numberB",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1387,
                  "end": 1394
                }
              ],
              "optional": false,
              "start": 1375,
              "end": 1395
            },
            "directive": null,
            "start": 1375,
            "end": 1396
          }
        ],
        "start": 1369,
        "end": 1398
      },
      "start": 1329,
      "end": 1398
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
                  "type": "AssignmentPattern",
                  "decorators": [],
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "numberB",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1409,
                    "end": 1416
                  },
                  "right": {
                    "type": "UnaryExpression",
                    "operator": "-",
                    "argument": {
                      "type": "Literal",
                      "value": 1,
                      "raw": "1",
                      "start": 1420,
                      "end": 1421
                    },
                    "prefix": true,
                    "start": 1419,
                    "end": 1421
                  },
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1409,
                  "end": 1421
                }
              ],
              "optional": false,
              "typeAnnotation": null,
              "start": 1408,
              "end": 1422
            },
            "init": null,
            "definite": false,
            "start": 1408,
            "end": 1422
          }
        ],
        "declare": false,
        "start": 1404,
        "end": 1422
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
            "start": 1427,
            "end": 1433
          },
          {
            "type": "Identifier",
            "decorators": [],
            "name": "robotB",
            "optional": false,
            "typeAnnotation": null,
            "start": 1435,
            "end": 1441
          }
        ],
        "start": 1426,
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
                  "name": "numberB",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1462,
                  "end": 1469
                }
              ],
              "optional": false,
              "start": 1450,
              "end": 1470
            },
            "directive": null,
            "start": 1450,
            "end": 1471
          }
        ],
        "start": 1444,
        "end": 1473
      },
      "start": 1399,
      "end": 1473
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
                  "type": "AssignmentPattern",
                  "decorators": [],
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "nameB",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1484,
                    "end": 1489
                  },
                  "right": {
                    "type": "Literal",
                    "value": "noName",
                    "raw": "\"noName\"",
                    "start": 1492,
                    "end": 1500
                  },
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1484,
                  "end": 1500
                }
              ],
              "optional": false,
              "typeAnnotation": null,
              "start": 1483,
              "end": 1501
            },
            "init": null,
            "definite": false,
            "start": 1483,
            "end": 1501
          }
        ],
        "declare": false,
        "start": 1479,
        "end": 1501
      },
      "right": {
        "type": "Identifier",
        "decorators": [],
        "name": "multiRobots",
        "optional": false,
        "typeAnnotation": null,
        "start": 1505,
        "end": 1516
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
                  "start": 1524,
                  "end": 1531
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "log",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1532,
                  "end": 1535
                },
                "optional": false,
                "computed": false,
                "start": 1524,
                "end": 1535
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "nameB",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1536,
                  "end": 1541
                }
              ],
              "optional": false,
              "start": 1524,
              "end": 1542
            },
            "directive": null,
            "start": 1524,
            "end": 1543
          }
        ],
        "start": 1518,
        "end": 1545
      },
      "start": 1474,
      "end": 1545
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
                  "type": "AssignmentPattern",
                  "decorators": [],
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "nameB",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1556,
                    "end": 1561
                  },
                  "right": {
                    "type": "Literal",
                    "value": "noName",
                    "raw": "\"noName\"",
                    "start": 1564,
                    "end": 1572
                  },
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1556,
                  "end": 1572
                }
              ],
              "optional": false,
              "typeAnnotation": null,
              "start": 1555,
              "end": 1573
            },
            "init": null,
            "definite": false,
            "start": 1555,
            "end": 1573
          }
        ],
        "declare": false,
        "start": 1551,
        "end": 1573
      },
      "right": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "getMultiRobots",
          "optional": false,
          "typeAnnotation": null,
          "start": 1577,
          "end": 1591
        },
        "typeArguments": null,
        "arguments": [],
        "optional": false,
        "start": 1577,
        "end": 1593
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
                  "start": 1601,
                  "end": 1608
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "log",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1609,
                  "end": 1612
                },
                "optional": false,
                "computed": false,
                "start": 1601,
                "end": 1612
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "nameB",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1613,
                  "end": 1618
                }
              ],
              "optional": false,
              "start": 1601,
              "end": 1619
            },
            "directive": null,
            "start": 1601,
            "end": 1620
          }
        ],
        "start": 1595,
        "end": 1622
      },
      "start": 1546,
      "end": 1622
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
                  "type": "AssignmentPattern",
                  "decorators": [],
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "nameB",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1633,
                    "end": 1638
                  },
                  "right": {
                    "type": "Literal",
                    "value": "noName",
                    "raw": "\"noName\"",
                    "start": 1641,
                    "end": 1649
                  },
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1633,
                  "end": 1649
                }
              ],
              "optional": false,
              "typeAnnotation": null,
              "start": 1632,
              "end": 1650
            },
            "init": null,
            "definite": false,
            "start": 1632,
            "end": 1650
          }
        ],
        "declare": false,
        "start": 1628,
        "end": 1650
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
            "start": 1655,
            "end": 1666
          },
          {
            "type": "Identifier",
            "decorators": [],
            "name": "multiRobotB",
            "optional": false,
            "typeAnnotation": null,
            "start": 1668,
            "end": 1679
          }
        ],
        "start": 1654,
        "end": 1680
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
                  "start": 1688,
                  "end": 1695
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "log",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1696,
                  "end": 1699
                },
                "optional": false,
                "computed": false,
                "start": 1688,
                "end": 1699
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "nameB",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1700,
                  "end": 1705
                }
              ],
              "optional": false,
              "start": 1688,
              "end": 1706
            },
            "directive": null,
            "start": 1688,
            "end": 1707
          }
        ],
        "start": 1682,
        "end": 1709
      },
      "start": 1623,
      "end": 1709
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
                  "type": "AssignmentPattern",
                  "decorators": [],
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "numberA2",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1721,
                    "end": 1729
                  },
                  "right": {
                    "type": "UnaryExpression",
                    "operator": "-",
                    "argument": {
                      "type": "Literal",
                      "value": 1,
                      "raw": "1",
                      "start": 1733,
                      "end": 1734
                    },
                    "prefix": true,
                    "start": 1732,
                    "end": 1734
                  },
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1721,
                  "end": 1734
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
                    "start": 1736,
                    "end": 1742
                  },
                  "right": {
                    "type": "Literal",
                    "value": "noName",
                    "raw": "\"noName\"",
                    "start": 1745,
                    "end": 1753
                  },
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1736,
                  "end": 1753
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
                    "start": 1755,
                    "end": 1762
                  },
                  "right": {
                    "type": "Literal",
                    "value": "skill",
                    "raw": "\"skill\"",
                    "start": 1765,
                    "end": 1772
                  },
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1755,
                  "end": 1772
                }
              ],
              "optional": false,
              "typeAnnotation": null,
              "start": 1720,
              "end": 1773
            },
            "init": null,
            "definite": false,
            "start": 1720,
            "end": 1773
          }
        ],
        "declare": false,
        "start": 1716,
        "end": 1773
      },
      "right": {
        "type": "Identifier",
        "decorators": [],
        "name": "robots",
        "optional": false,
        "typeAnnotation": null,
        "start": 1777,
        "end": 1783
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
                  "start": 1791,
                  "end": 1798
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "log",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1799,
                  "end": 1802
                },
                "optional": false,
                "computed": false,
                "start": 1791,
                "end": 1802
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "nameA2",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1803,
                  "end": 1809
                }
              ],
              "optional": false,
              "start": 1791,
              "end": 1810
            },
            "directive": null,
            "start": 1791,
            "end": 1811
          }
        ],
        "start": 1785,
        "end": 1813
      },
      "start": 1711,
      "end": 1813
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
                  "type": "AssignmentPattern",
                  "decorators": [],
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "numberA2",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1824,
                    "end": 1832
                  },
                  "right": {
                    "type": "UnaryExpression",
                    "operator": "-",
                    "argument": {
                      "type": "Literal",
                      "value": 1,
                      "raw": "1",
                      "start": 1836,
                      "end": 1837
                    },
                    "prefix": true,
                    "start": 1835,
                    "end": 1837
                  },
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1824,
                  "end": 1837
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
                    "start": 1839,
                    "end": 1845
                  },
                  "right": {
                    "type": "Literal",
                    "value": "noName",
                    "raw": "\"noName\"",
                    "start": 1848,
                    "end": 1856
                  },
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1839,
                  "end": 1856
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
                    "start": 1858,
                    "end": 1865
                  },
                  "right": {
                    "type": "Literal",
                    "value": "skill",
                    "raw": "\"skill\"",
                    "start": 1868,
                    "end": 1875
                  },
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1858,
                  "end": 1875
                }
              ],
              "optional": false,
              "typeAnnotation": null,
              "start": 1823,
              "end": 1876
            },
            "init": null,
            "definite": false,
            "start": 1823,
            "end": 1876
          }
        ],
        "declare": false,
        "start": 1819,
        "end": 1876
      },
      "right": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "getRobots",
          "optional": false,
          "typeAnnotation": null,
          "start": 1880,
          "end": 1889
        },
        "typeArguments": null,
        "arguments": [],
        "optional": false,
        "start": 1880,
        "end": 1891
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
                  "start": 1899,
                  "end": 1906
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "log",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1907,
                  "end": 1910
                },
                "optional": false,
                "computed": false,
                "start": 1899,
                "end": 1910
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "nameA2",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1911,
                  "end": 1917
                }
              ],
              "optional": false,
              "start": 1899,
              "end": 1918
            },
            "directive": null,
            "start": 1899,
            "end": 1919
          }
        ],
        "start": 1893,
        "end": 1921
      },
      "start": 1814,
      "end": 1921
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
                  "type": "AssignmentPattern",
                  "decorators": [],
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "numberA2",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1932,
                    "end": 1940
                  },
                  "right": {
                    "type": "UnaryExpression",
                    "operator": "-",
                    "argument": {
                      "type": "Literal",
                      "value": 1,
                      "raw": "1",
                      "start": 1944,
                      "end": 1945
                    },
                    "prefix": true,
                    "start": 1943,
                    "end": 1945
                  },
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1932,
                  "end": 1945
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
                    "start": 1947,
                    "end": 1953
                  },
                  "right": {
                    "type": "Literal",
                    "value": "noName",
                    "raw": "\"noName\"",
                    "start": 1956,
                    "end": 1964
                  },
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1947,
                  "end": 1964
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
                    "start": 1966,
                    "end": 1973
                  },
                  "right": {
                    "type": "Literal",
                    "value": "skill",
                    "raw": "\"skill\"",
                    "start": 1976,
                    "end": 1983
                  },
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1966,
                  "end": 1983
                }
              ],
              "optional": false,
              "typeAnnotation": null,
              "start": 1931,
              "end": 1984
            },
            "init": null,
            "definite": false,
            "start": 1931,
            "end": 1984
          }
        ],
        "declare": false,
        "start": 1927,
        "end": 1984
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
            "start": 1989,
            "end": 1995
          },
          {
            "type": "Identifier",
            "decorators": [],
            "name": "robotB",
            "optional": false,
            "typeAnnotation": null,
            "start": 1997,
            "end": 2003
          }
        ],
        "start": 1988,
        "end": 2004
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
                  "start": 2012,
                  "end": 2019
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "log",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2020,
                  "end": 2023
                },
                "optional": false,
                "computed": false,
                "start": 2012,
                "end": 2023
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "nameA2",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2024,
                  "end": 2030
                }
              ],
              "optional": false,
              "start": 2012,
              "end": 2031
            },
            "directive": null,
            "start": 2012,
            "end": 2032
          }
        ],
        "start": 2006,
        "end": 2034
      },
      "start": 1922,
      "end": 2034
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
                  "type": "AssignmentPattern",
                  "decorators": [],
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "nameMA",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2045,
                    "end": 2051
                  },
                  "right": {
                    "type": "Literal",
                    "value": "noName",
                    "raw": "\"noName\"",
                    "start": 2054,
                    "end": 2062
                  },
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2045,
                  "end": 2062
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
                          "start": 2070,
                          "end": 2083
                        },
                        "right": {
                          "type": "Literal",
                          "value": "primary",
                          "raw": "\"primary\"",
                          "start": 2086,
                          "end": 2095
                        },
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2070,
                        "end": 2095
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
                          "start": 2101,
                          "end": 2116
                        },
                        "right": {
                          "type": "Literal",
                          "value": "secondary",
                          "raw": "\"secondary\"",
                          "start": 2119,
                          "end": 2130
                        },
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2101,
                        "end": 2130
                      }
                    ],
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2064,
                    "end": 2132
                  },
                  "right": {
                    "type": "ArrayExpression",
                    "elements": [
                      {
                        "type": "Literal",
                        "value": "skill1",
                        "raw": "\"skill1\"",
                        "start": 2136,
                        "end": 2144
                      },
                      {
                        "type": "Literal",
                        "value": "skill2",
                        "raw": "\"skill2\"",
                        "start": 2146,
                        "end": 2154
                      }
                    ],
                    "start": 2135,
                    "end": 2155
                  },
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2064,
                  "end": 2155
                }
              ],
              "optional": false,
              "typeAnnotation": null,
              "start": 2044,
              "end": 2156
            },
            "init": null,
            "definite": false,
            "start": 2044,
            "end": 2156
          }
        ],
        "declare": false,
        "start": 2040,
        "end": 2156
      },
      "right": {
        "type": "Identifier",
        "decorators": [],
        "name": "multiRobots",
        "optional": false,
        "typeAnnotation": null,
        "start": 2160,
        "end": 2171
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
                  "start": 2179,
                  "end": 2186
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "log",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2187,
                  "end": 2190
                },
                "optional": false,
                "computed": false,
                "start": 2179,
                "end": 2190
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "nameMA",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2191,
                  "end": 2197
                }
              ],
              "optional": false,
              "start": 2179,
              "end": 2198
            },
            "directive": null,
            "start": 2179,
            "end": 2199
          }
        ],
        "start": 2173,
        "end": 2201
      },
      "start": 2035,
      "end": 2201
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
                  "type": "AssignmentPattern",
                  "decorators": [],
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "nameMA",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2212,
                    "end": 2218
                  },
                  "right": {
                    "type": "Literal",
                    "value": "noName",
                    "raw": "\"noName\"",
                    "start": 2221,
                    "end": 2229
                  },
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2212,
                  "end": 2229
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
                          "start": 2268,
                          "end": 2283
                        },
                        "right": {
                          "type": "Literal",
                          "value": "secondary",
                          "raw": "\"secondary\"",
                          "start": 2286,
                          "end": 2297
                        },
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2268,
                        "end": 2297
                      }
                    ],
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2231,
                    "end": 2299
                  },
                  "right": {
                    "type": "ArrayExpression",
                    "elements": [
                      {
                        "type": "Literal",
                        "value": "skill1",
                        "raw": "\"skill1\"",
                        "start": 2303,
                        "end": 2311
                      },
                      {
                        "type": "Literal",
                        "value": "skill2",
                        "raw": "\"skill2\"",
                        "start": 2313,
                        "end": 2321
                      }
                    ],
                    "start": 2302,
                    "end": 2322
                  },
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2231,
                  "end": 2322
                }
              ],
              "optional": false,
              "typeAnnotation": null,
              "start": 2211,
              "end": 2323
            },
            "init": null,
            "definite": false,
            "start": 2211,
            "end": 2323
          }
        ],
        "declare": false,
        "start": 2207,
        "end": 2323
      },
      "right": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "getMultiRobots",
          "optional": false,
          "typeAnnotation": null,
          "start": 2327,
          "end": 2341
        },
        "typeArguments": null,
        "arguments": [],
        "optional": false,
        "start": 2327,
        "end": 2343
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
                  "start": 2351,
                  "end": 2358
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "log",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2359,
                  "end": 2362
                },
                "optional": false,
                "computed": false,
                "start": 2351,
                "end": 2362
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "nameMA",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2363,
                  "end": 2369
                }
              ],
              "optional": false,
              "start": 2351,
              "end": 2370
            },
            "directive": null,
            "start": 2351,
            "end": 2371
          }
        ],
        "start": 2345,
        "end": 2373
      },
      "start": 2202,
      "end": 2373
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
                  "type": "AssignmentPattern",
                  "decorators": [],
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "nameMA",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2384,
                    "end": 2390
                  },
                  "right": {
                    "type": "Literal",
                    "value": "noName",
                    "raw": "\"noName\"",
                    "start": 2393,
                    "end": 2401
                  },
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2384,
                  "end": 2401
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
                          "start": 2409,
                          "end": 2422
                        },
                        "right": {
                          "type": "Literal",
                          "value": "primary",
                          "raw": "\"primary\"",
                          "start": 2425,
                          "end": 2434
                        },
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2409,
                        "end": 2434
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
                          "start": 2440,
                          "end": 2455
                        },
                        "right": {
                          "type": "Literal",
                          "value": "secondary",
                          "raw": "\"secondary\"",
                          "start": 2458,
                          "end": 2469
                        },
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2440,
                        "end": 2469
                      }
                    ],
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2403,
                    "end": 2471
                  },
                  "right": {
                    "type": "ArrayExpression",
                    "elements": [
                      {
                        "type": "Literal",
                        "value": "skill1",
                        "raw": "\"skill1\"",
                        "start": 2475,
                        "end": 2483
                      },
                      {
                        "type": "Literal",
                        "value": "skill2",
                        "raw": "\"skill2\"",
                        "start": 2485,
                        "end": 2493
                      }
                    ],
                    "start": 2474,
                    "end": 2494
                  },
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2403,
                  "end": 2494
                }
              ],
              "optional": false,
              "typeAnnotation": null,
              "start": 2383,
              "end": 2495
            },
            "init": null,
            "definite": false,
            "start": 2383,
            "end": 2495
          }
        ],
        "declare": false,
        "start": 2379,
        "end": 2495
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
            "start": 2500,
            "end": 2511
          },
          {
            "type": "Identifier",
            "decorators": [],
            "name": "multiRobotB",
            "optional": false,
            "typeAnnotation": null,
            "start": 2513,
            "end": 2524
          }
        ],
        "start": 2499,
        "end": 2525
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
                  "start": 2533,
                  "end": 2540
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "log",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2541,
                  "end": 2544
                },
                "optional": false,
                "computed": false,
                "start": 2533,
                "end": 2544
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "nameMA",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2545,
                  "end": 2551
                }
              ],
              "optional": false,
              "start": 2533,
              "end": 2552
            },
            "directive": null,
            "start": 2533,
            "end": 2553
          }
        ],
        "start": 2527,
        "end": 2555
      },
      "start": 2374,
      "end": 2555
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
                  "type": "AssignmentPattern",
                  "decorators": [],
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "numberA3",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2567,
                    "end": 2575
                  },
                  "right": {
                    "type": "UnaryExpression",
                    "operator": "-",
                    "argument": {
                      "type": "Literal",
                      "value": 1,
                      "raw": "1",
                      "start": 2579,
                      "end": 2580
                    },
                    "prefix": true,
                    "start": 2578,
                    "end": 2580
                  },
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2567,
                  "end": 2580
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
                    "start": 2585,
                    "end": 2595
                  },
                  "optional": false,
                  "typeAnnotation": null,
                  "value": null,
                  "start": 2582,
                  "end": 2595
                }
              ],
              "optional": false,
              "typeAnnotation": null,
              "start": 2566,
              "end": 2596
            },
            "init": null,
            "definite": false,
            "start": 2566,
            "end": 2596
          }
        ],
        "declare": false,
        "start": 2562,
        "end": 2596
      },
      "right": {
        "type": "Identifier",
        "decorators": [],
        "name": "robots",
        "optional": false,
        "typeAnnotation": null,
        "start": 2600,
        "end": 2606
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
                  "start": 2614,
                  "end": 2621
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "log",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2622,
                  "end": 2625
                },
                "optional": false,
                "computed": false,
                "start": 2614,
                "end": 2625
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "numberA3",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2626,
                  "end": 2634
                }
              ],
              "optional": false,
              "start": 2614,
              "end": 2635
            },
            "directive": null,
            "start": 2614,
            "end": 2636
          }
        ],
        "start": 2608,
        "end": 2638
      },
      "start": 2557,
      "end": 2638
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
                  "type": "AssignmentPattern",
                  "decorators": [],
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "numberA3",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2649,
                    "end": 2657
                  },
                  "right": {
                    "type": "UnaryExpression",
                    "operator": "-",
                    "argument": {
                      "type": "Literal",
                      "value": 1,
                      "raw": "1",
                      "start": 2661,
                      "end": 2662
                    },
                    "prefix": true,
                    "start": 2660,
                    "end": 2662
                  },
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2649,
                  "end": 2662
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
                    "start": 2667,
                    "end": 2677
                  },
                  "optional": false,
                  "typeAnnotation": null,
                  "value": null,
                  "start": 2664,
                  "end": 2677
                }
              ],
              "optional": false,
              "typeAnnotation": null,
              "start": 2648,
              "end": 2678
            },
            "init": null,
            "definite": false,
            "start": 2648,
            "end": 2678
          }
        ],
        "declare": false,
        "start": 2644,
        "end": 2678
      },
      "right": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "getRobots",
          "optional": false,
          "typeAnnotation": null,
          "start": 2682,
          "end": 2691
        },
        "typeArguments": null,
        "arguments": [],
        "optional": false,
        "start": 2682,
        "end": 2693
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
                  "start": 2701,
                  "end": 2708
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "log",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2709,
                  "end": 2712
                },
                "optional": false,
                "computed": false,
                "start": 2701,
                "end": 2712
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "numberA3",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2713,
                  "end": 2721
                }
              ],
              "optional": false,
              "start": 2701,
              "end": 2722
            },
            "directive": null,
            "start": 2701,
            "end": 2723
          }
        ],
        "start": 2695,
        "end": 2725
      },
      "start": 2639,
      "end": 2725
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
                  "type": "AssignmentPattern",
                  "decorators": [],
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "numberA3",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2736,
                    "end": 2744
                  },
                  "right": {
                    "type": "UnaryExpression",
                    "operator": "-",
                    "argument": {
                      "type": "Literal",
                      "value": 1,
                      "raw": "1",
                      "start": 2748,
                      "end": 2749
                    },
                    "prefix": true,
                    "start": 2747,
                    "end": 2749
                  },
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2736,
                  "end": 2749
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
                    "start": 2754,
                    "end": 2764
                  },
                  "optional": false,
                  "typeAnnotation": null,
                  "value": null,
                  "start": 2751,
                  "end": 2764
                }
              ],
              "optional": false,
              "typeAnnotation": null,
              "start": 2735,
              "end": 2765
            },
            "init": null,
            "definite": false,
            "start": 2735,
            "end": 2765
          }
        ],
        "declare": false,
        "start": 2731,
        "end": 2765
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
            "start": 2770,
            "end": 2776
          },
          {
            "type": "Identifier",
            "decorators": [],
            "name": "robotB",
            "optional": false,
            "typeAnnotation": null,
            "start": 2778,
            "end": 2784
          }
        ],
        "start": 2769,
        "end": 2785
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
                  "start": 2793,
                  "end": 2800
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "log",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2801,
                  "end": 2804
                },
                "optional": false,
                "computed": false,
                "start": 2793,
                "end": 2804
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "numberA3",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2805,
                  "end": 2813
                }
              ],
              "optional": false,
              "start": 2793,
              "end": 2814
            },
            "directive": null,
            "start": 2793,
            "end": 2815
          }
        ],
        "start": 2787,
        "end": 2817
      },
      "start": 2726,
      "end": 2817
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 2817
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
    "value": "=",
    "start": 568,
    "end": 569
  },
  {
    "type": "String",
    "value": "\"noName\"",
    "start": 570,
    "end": 578
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 578,
    "end": 579
  },
  {
    "type": "Identifier",
    "value": "of",
    "start": 580,
    "end": 582
  },
  {
    "type": "Identifier",
    "value": "robots",
    "start": 583,
    "end": 589
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 589,
    "end": 590
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 591,
    "end": 592
  },
  {
    "type": "Identifier",
    "value": "console",
    "start": 597,
    "end": 604
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 604,
    "end": 605
  },
  {
    "type": "Identifier",
    "value": "log",
    "start": 605,
    "end": 608
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 608,
    "end": 609
  },
  {
    "type": "Identifier",
    "value": "nameA",
    "start": 609,
    "end": 614
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 614,
    "end": 615
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 615,
    "end": 616
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 617,
    "end": 618
  },
  {
    "type": "Keyword",
    "value": "for",
    "start": 619,
    "end": 622
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 623,
    "end": 624
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 624,
    "end": 627
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 628,
    "end": 629
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 629,
    "end": 630
  },
  {
    "type": "Identifier",
    "value": "nameA",
    "start": 631,
    "end": 636
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 637,
    "end": 638
  },
  {
    "type": "String",
    "value": "\"noName\"",
    "start": 639,
    "end": 647
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 647,
    "end": 648
  },
  {
    "type": "Identifier",
    "value": "of",
    "start": 649,
    "end": 651
  },
  {
    "type": "Identifier",
    "value": "getRobots",
    "start": 652,
    "end": 661
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 661,
    "end": 662
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 662,
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
    "type": "Identifier",
    "value": "nameA",
    "start": 705,
    "end": 710
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 711,
    "end": 712
  },
  {
    "type": "String",
    "value": "\"noName\"",
    "start": 713,
    "end": 721
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 721,
    "end": 722
  },
  {
    "type": "Identifier",
    "value": "of",
    "start": 723,
    "end": 725
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 726,
    "end": 727
  },
  {
    "type": "Identifier",
    "value": "robotA",
    "start": 727,
    "end": 733
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 733,
    "end": 734
  },
  {
    "type": "Identifier",
    "value": "robotB",
    "start": 735,
    "end": 741
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 741,
    "end": 742
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 742,
    "end": 743
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 744,
    "end": 745
  },
  {
    "type": "Identifier",
    "value": "console",
    "start": 750,
    "end": 757
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 757,
    "end": 758
  },
  {
    "type": "Identifier",
    "value": "log",
    "start": 758,
    "end": 761
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 761,
    "end": 762
  },
  {
    "type": "Identifier",
    "value": "nameA",
    "start": 762,
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
    "value": ";",
    "start": 768,
    "end": 769
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 770,
    "end": 771
  },
  {
    "type": "Keyword",
    "value": "for",
    "start": 772,
    "end": 775
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 776,
    "end": 777
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 777,
    "end": 780
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 781,
    "end": 782
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 782,
    "end": 783
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 784,
    "end": 785
  },
  {
    "type": "Identifier",
    "value": "primarySkillA",
    "start": 790,
    "end": 803
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 804,
    "end": 805
  },
  {
    "type": "String",
    "value": "\"primary\"",
    "start": 806,
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
    "value": "secondarySkillA",
    "start": 821,
    "end": 836
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 837,
    "end": 838
  },
  {
    "type": "String",
    "value": "\"secondary\"",
    "start": 839,
    "end": 850
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 851,
    "end": 852
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 853,
    "end": 854
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 855,
    "end": 856
  },
  {
    "type": "String",
    "value": "\"skill1\"",
    "start": 856,
    "end": 864
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 864,
    "end": 865
  },
  {
    "type": "String",
    "value": "\"skill2\"",
    "start": 866,
    "end": 874
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 874,
    "end": 875
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 875,
    "end": 876
  },
  {
    "type": "Identifier",
    "value": "of",
    "start": 877,
    "end": 879
  },
  {
    "type": "Identifier",
    "value": "multiRobots",
    "start": 880,
    "end": 891
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 891,
    "end": 892
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 893,
    "end": 894
  },
  {
    "type": "Identifier",
    "value": "console",
    "start": 899,
    "end": 906
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 906,
    "end": 907
  },
  {
    "type": "Identifier",
    "value": "log",
    "start": 907,
    "end": 910
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 910,
    "end": 911
  },
  {
    "type": "Identifier",
    "value": "primarySkillA",
    "start": 911,
    "end": 924
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 924,
    "end": 925
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 925,
    "end": 926
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 927,
    "end": 928
  },
  {
    "type": "Keyword",
    "value": "for",
    "start": 929,
    "end": 932
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 933,
    "end": 934
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 934,
    "end": 937
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 938,
    "end": 939
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 939,
    "end": 940
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 941,
    "end": 942
  },
  {
    "type": "Identifier",
    "value": "primarySkillA",
    "start": 947,
    "end": 960
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 961,
    "end": 962
  },
  {
    "type": "String",
    "value": "\"primary\"",
    "start": 963,
    "end": 972
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 972,
    "end": 973
  },
  {
    "type": "Identifier",
    "value": "secondarySkillA",
    "start": 978,
    "end": 993
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 994,
    "end": 995
  },
  {
    "type": "String",
    "value": "\"secondary\"",
    "start": 996,
    "end": 1007
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1008,
    "end": 1009
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1010,
    "end": 1011
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1012,
    "end": 1013
  },
  {
    "type": "String",
    "value": "\"skill1\"",
    "start": 1013,
    "end": 1021
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1021,
    "end": 1022
  },
  {
    "type": "String",
    "value": "\"skill2\"",
    "start": 1023,
    "end": 1031
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1031,
    "end": 1032
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1032,
    "end": 1033
  },
  {
    "type": "Identifier",
    "value": "of",
    "start": 1034,
    "end": 1036
  },
  {
    "type": "Identifier",
    "value": "getMultiRobots",
    "start": 1037,
    "end": 1051
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1051,
    "end": 1052
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1052,
    "end": 1053
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1053,
    "end": 1054
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1055,
    "end": 1056
  },
  {
    "type": "Identifier",
    "value": "console",
    "start": 1061,
    "end": 1068
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1068,
    "end": 1069
  },
  {
    "type": "Identifier",
    "value": "log",
    "start": 1069,
    "end": 1072
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1072,
    "end": 1073
  },
  {
    "type": "Identifier",
    "value": "primarySkillA",
    "start": 1073,
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
    "value": ";",
    "start": 1087,
    "end": 1088
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1089,
    "end": 1090
  },
  {
    "type": "Keyword",
    "value": "for",
    "start": 1091,
    "end": 1094
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1095,
    "end": 1096
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 1096,
    "end": 1099
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1100,
    "end": 1101
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1101,
    "end": 1102
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1103,
    "end": 1104
  },
  {
    "type": "Identifier",
    "value": "primarySkillA",
    "start": 1109,
    "end": 1122
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1123,
    "end": 1124
  },
  {
    "type": "String",
    "value": "\"primary\"",
    "start": 1125,
    "end": 1134
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1134,
    "end": 1135
  },
  {
    "type": "Identifier",
    "value": "secondarySkillA",
    "start": 1140,
    "end": 1155
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1156,
    "end": 1157
  },
  {
    "type": "String",
    "value": "\"secondary\"",
    "start": 1158,
    "end": 1169
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1170,
    "end": 1171
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1172,
    "end": 1173
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1174,
    "end": 1175
  },
  {
    "type": "String",
    "value": "\"skill1\"",
    "start": 1175,
    "end": 1183
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1183,
    "end": 1184
  },
  {
    "type": "String",
    "value": "\"skill2\"",
    "start": 1185,
    "end": 1193
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1193,
    "end": 1194
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1194,
    "end": 1195
  },
  {
    "type": "Identifier",
    "value": "of",
    "start": 1196,
    "end": 1198
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1199,
    "end": 1200
  },
  {
    "type": "Identifier",
    "value": "multiRobotA",
    "start": 1200,
    "end": 1211
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1211,
    "end": 1212
  },
  {
    "type": "Identifier",
    "value": "multiRobotB",
    "start": 1213,
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
    "value": ")",
    "start": 1225,
    "end": 1226
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1227,
    "end": 1228
  },
  {
    "type": "Identifier",
    "value": "console",
    "start": 1233,
    "end": 1240
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1240,
    "end": 1241
  },
  {
    "type": "Identifier",
    "value": "log",
    "start": 1241,
    "end": 1244
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1244,
    "end": 1245
  },
  {
    "type": "Identifier",
    "value": "primarySkillA",
    "start": 1245,
    "end": 1258
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1258,
    "end": 1259
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1259,
    "end": 1260
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1261,
    "end": 1262
  },
  {
    "type": "Keyword",
    "value": "for",
    "start": 1264,
    "end": 1267
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1268,
    "end": 1269
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 1269,
    "end": 1272
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1273,
    "end": 1274
  },
  {
    "type": "Identifier",
    "value": "numberB",
    "start": 1274,
    "end": 1281
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1282,
    "end": 1283
  },
  {
    "type": "Punctuator",
    "value": "-",
    "start": 1284,
    "end": 1285
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 1285,
    "end": 1286
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1286,
    "end": 1287
  },
  {
    "type": "Identifier",
    "value": "of",
    "start": 1288,
    "end": 1290
  },
  {
    "type": "Identifier",
    "value": "robots",
    "start": 1291,
    "end": 1297
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1297,
    "end": 1298
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1299,
    "end": 1300
  },
  {
    "type": "Identifier",
    "value": "console",
    "start": 1305,
    "end": 1312
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1312,
    "end": 1313
  },
  {
    "type": "Identifier",
    "value": "log",
    "start": 1313,
    "end": 1316
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1316,
    "end": 1317
  },
  {
    "type": "Identifier",
    "value": "numberB",
    "start": 1317,
    "end": 1324
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1324,
    "end": 1325
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1325,
    "end": 1326
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1327,
    "end": 1328
  },
  {
    "type": "Keyword",
    "value": "for",
    "start": 1329,
    "end": 1332
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1333,
    "end": 1334
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 1334,
    "end": 1337
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1338,
    "end": 1339
  },
  {
    "type": "Identifier",
    "value": "numberB",
    "start": 1339,
    "end": 1346
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1347,
    "end": 1348
  },
  {
    "type": "Punctuator",
    "value": "-",
    "start": 1349,
    "end": 1350
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 1350,
    "end": 1351
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1351,
    "end": 1352
  },
  {
    "type": "Identifier",
    "value": "of",
    "start": 1353,
    "end": 1355
  },
  {
    "type": "Identifier",
    "value": "getRobots",
    "start": 1356,
    "end": 1365
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1365,
    "end": 1366
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1366,
    "end": 1367
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1367,
    "end": 1368
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1369,
    "end": 1370
  },
  {
    "type": "Identifier",
    "value": "console",
    "start": 1375,
    "end": 1382
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1382,
    "end": 1383
  },
  {
    "type": "Identifier",
    "value": "log",
    "start": 1383,
    "end": 1386
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1386,
    "end": 1387
  },
  {
    "type": "Identifier",
    "value": "numberB",
    "start": 1387,
    "end": 1394
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1394,
    "end": 1395
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1395,
    "end": 1396
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1397,
    "end": 1398
  },
  {
    "type": "Keyword",
    "value": "for",
    "start": 1399,
    "end": 1402
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1403,
    "end": 1404
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 1404,
    "end": 1407
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1408,
    "end": 1409
  },
  {
    "type": "Identifier",
    "value": "numberB",
    "start": 1409,
    "end": 1416
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1417,
    "end": 1418
  },
  {
    "type": "Punctuator",
    "value": "-",
    "start": 1419,
    "end": 1420
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 1420,
    "end": 1421
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1421,
    "end": 1422
  },
  {
    "type": "Identifier",
    "value": "of",
    "start": 1423,
    "end": 1425
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1426,
    "end": 1427
  },
  {
    "type": "Identifier",
    "value": "robotA",
    "start": 1427,
    "end": 1433
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1433,
    "end": 1434
  },
  {
    "type": "Identifier",
    "value": "robotB",
    "start": 1435,
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
    "value": "numberB",
    "start": 1462,
    "end": 1469
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1469,
    "end": 1470
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1470,
    "end": 1471
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1472,
    "end": 1473
  },
  {
    "type": "Keyword",
    "value": "for",
    "start": 1474,
    "end": 1477
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1478,
    "end": 1479
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 1479,
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
    "value": "nameB",
    "start": 1484,
    "end": 1489
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1490,
    "end": 1491
  },
  {
    "type": "String",
    "value": "\"noName\"",
    "start": 1492,
    "end": 1500
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1500,
    "end": 1501
  },
  {
    "type": "Identifier",
    "value": "of",
    "start": 1502,
    "end": 1504
  },
  {
    "type": "Identifier",
    "value": "multiRobots",
    "start": 1505,
    "end": 1516
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1516,
    "end": 1517
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1518,
    "end": 1519
  },
  {
    "type": "Identifier",
    "value": "console",
    "start": 1524,
    "end": 1531
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1531,
    "end": 1532
  },
  {
    "type": "Identifier",
    "value": "log",
    "start": 1532,
    "end": 1535
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1535,
    "end": 1536
  },
  {
    "type": "Identifier",
    "value": "nameB",
    "start": 1536,
    "end": 1541
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1541,
    "end": 1542
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1542,
    "end": 1543
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1544,
    "end": 1545
  },
  {
    "type": "Keyword",
    "value": "for",
    "start": 1546,
    "end": 1549
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1550,
    "end": 1551
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 1551,
    "end": 1554
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1555,
    "end": 1556
  },
  {
    "type": "Identifier",
    "value": "nameB",
    "start": 1556,
    "end": 1561
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1562,
    "end": 1563
  },
  {
    "type": "String",
    "value": "\"noName\"",
    "start": 1564,
    "end": 1572
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1572,
    "end": 1573
  },
  {
    "type": "Identifier",
    "value": "of",
    "start": 1574,
    "end": 1576
  },
  {
    "type": "Identifier",
    "value": "getMultiRobots",
    "start": 1577,
    "end": 1591
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1591,
    "end": 1592
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1592,
    "end": 1593
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1593,
    "end": 1594
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1595,
    "end": 1596
  },
  {
    "type": "Identifier",
    "value": "console",
    "start": 1601,
    "end": 1608
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1608,
    "end": 1609
  },
  {
    "type": "Identifier",
    "value": "log",
    "start": 1609,
    "end": 1612
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1612,
    "end": 1613
  },
  {
    "type": "Identifier",
    "value": "nameB",
    "start": 1613,
    "end": 1618
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1618,
    "end": 1619
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1619,
    "end": 1620
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1621,
    "end": 1622
  },
  {
    "type": "Keyword",
    "value": "for",
    "start": 1623,
    "end": 1626
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1627,
    "end": 1628
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 1628,
    "end": 1631
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1632,
    "end": 1633
  },
  {
    "type": "Identifier",
    "value": "nameB",
    "start": 1633,
    "end": 1638
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1639,
    "end": 1640
  },
  {
    "type": "String",
    "value": "\"noName\"",
    "start": 1641,
    "end": 1649
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1649,
    "end": 1650
  },
  {
    "type": "Identifier",
    "value": "of",
    "start": 1651,
    "end": 1653
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1654,
    "end": 1655
  },
  {
    "type": "Identifier",
    "value": "multiRobotA",
    "start": 1655,
    "end": 1666
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1666,
    "end": 1667
  },
  {
    "type": "Identifier",
    "value": "multiRobotB",
    "start": 1668,
    "end": 1679
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1679,
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
    "value": "console",
    "start": 1688,
    "end": 1695
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1695,
    "end": 1696
  },
  {
    "type": "Identifier",
    "value": "log",
    "start": 1696,
    "end": 1699
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1699,
    "end": 1700
  },
  {
    "type": "Identifier",
    "value": "nameB",
    "start": 1700,
    "end": 1705
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1705,
    "end": 1706
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1706,
    "end": 1707
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1708,
    "end": 1709
  },
  {
    "type": "Keyword",
    "value": "for",
    "start": 1711,
    "end": 1714
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1715,
    "end": 1716
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 1716,
    "end": 1719
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1720,
    "end": 1721
  },
  {
    "type": "Identifier",
    "value": "numberA2",
    "start": 1721,
    "end": 1729
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1730,
    "end": 1731
  },
  {
    "type": "Punctuator",
    "value": "-",
    "start": 1732,
    "end": 1733
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 1733,
    "end": 1734
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1734,
    "end": 1735
  },
  {
    "type": "Identifier",
    "value": "nameA2",
    "start": 1736,
    "end": 1742
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1743,
    "end": 1744
  },
  {
    "type": "String",
    "value": "\"noName\"",
    "start": 1745,
    "end": 1753
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1753,
    "end": 1754
  },
  {
    "type": "Identifier",
    "value": "skillA2",
    "start": 1755,
    "end": 1762
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1763,
    "end": 1764
  },
  {
    "type": "String",
    "value": "\"skill\"",
    "start": 1765,
    "end": 1772
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1772,
    "end": 1773
  },
  {
    "type": "Identifier",
    "value": "of",
    "start": 1774,
    "end": 1776
  },
  {
    "type": "Identifier",
    "value": "robots",
    "start": 1777,
    "end": 1783
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1783,
    "end": 1784
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1785,
    "end": 1786
  },
  {
    "type": "Identifier",
    "value": "console",
    "start": 1791,
    "end": 1798
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1798,
    "end": 1799
  },
  {
    "type": "Identifier",
    "value": "log",
    "start": 1799,
    "end": 1802
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1802,
    "end": 1803
  },
  {
    "type": "Identifier",
    "value": "nameA2",
    "start": 1803,
    "end": 1809
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1809,
    "end": 1810
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1810,
    "end": 1811
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1812,
    "end": 1813
  },
  {
    "type": "Keyword",
    "value": "for",
    "start": 1814,
    "end": 1817
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1818,
    "end": 1819
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 1819,
    "end": 1822
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1823,
    "end": 1824
  },
  {
    "type": "Identifier",
    "value": "numberA2",
    "start": 1824,
    "end": 1832
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1833,
    "end": 1834
  },
  {
    "type": "Punctuator",
    "value": "-",
    "start": 1835,
    "end": 1836
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 1836,
    "end": 1837
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1837,
    "end": 1838
  },
  {
    "type": "Identifier",
    "value": "nameA2",
    "start": 1839,
    "end": 1845
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1846,
    "end": 1847
  },
  {
    "type": "String",
    "value": "\"noName\"",
    "start": 1848,
    "end": 1856
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1856,
    "end": 1857
  },
  {
    "type": "Identifier",
    "value": "skillA2",
    "start": 1858,
    "end": 1865
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1866,
    "end": 1867
  },
  {
    "type": "String",
    "value": "\"skill\"",
    "start": 1868,
    "end": 1875
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1875,
    "end": 1876
  },
  {
    "type": "Identifier",
    "value": "of",
    "start": 1877,
    "end": 1879
  },
  {
    "type": "Identifier",
    "value": "getRobots",
    "start": 1880,
    "end": 1889
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1889,
    "end": 1890
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1890,
    "end": 1891
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1891,
    "end": 1892
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1893,
    "end": 1894
  },
  {
    "type": "Identifier",
    "value": "console",
    "start": 1899,
    "end": 1906
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1906,
    "end": 1907
  },
  {
    "type": "Identifier",
    "value": "log",
    "start": 1907,
    "end": 1910
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1910,
    "end": 1911
  },
  {
    "type": "Identifier",
    "value": "nameA2",
    "start": 1911,
    "end": 1917
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1917,
    "end": 1918
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1918,
    "end": 1919
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1920,
    "end": 1921
  },
  {
    "type": "Keyword",
    "value": "for",
    "start": 1922,
    "end": 1925
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1926,
    "end": 1927
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 1927,
    "end": 1930
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1931,
    "end": 1932
  },
  {
    "type": "Identifier",
    "value": "numberA2",
    "start": 1932,
    "end": 1940
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1941,
    "end": 1942
  },
  {
    "type": "Punctuator",
    "value": "-",
    "start": 1943,
    "end": 1944
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 1944,
    "end": 1945
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1945,
    "end": 1946
  },
  {
    "type": "Identifier",
    "value": "nameA2",
    "start": 1947,
    "end": 1953
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1954,
    "end": 1955
  },
  {
    "type": "String",
    "value": "\"noName\"",
    "start": 1956,
    "end": 1964
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1964,
    "end": 1965
  },
  {
    "type": "Identifier",
    "value": "skillA2",
    "start": 1966,
    "end": 1973
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1974,
    "end": 1975
  },
  {
    "type": "String",
    "value": "\"skill\"",
    "start": 1976,
    "end": 1983
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1983,
    "end": 1984
  },
  {
    "type": "Identifier",
    "value": "of",
    "start": 1985,
    "end": 1987
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1988,
    "end": 1989
  },
  {
    "type": "Identifier",
    "value": "robotA",
    "start": 1989,
    "end": 1995
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1995,
    "end": 1996
  },
  {
    "type": "Identifier",
    "value": "robotB",
    "start": 1997,
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
    "value": ")",
    "start": 2004,
    "end": 2005
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2006,
    "end": 2007
  },
  {
    "type": "Identifier",
    "value": "console",
    "start": 2012,
    "end": 2019
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2019,
    "end": 2020
  },
  {
    "type": "Identifier",
    "value": "log",
    "start": 2020,
    "end": 2023
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2023,
    "end": 2024
  },
  {
    "type": "Identifier",
    "value": "nameA2",
    "start": 2024,
    "end": 2030
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2030,
    "end": 2031
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2031,
    "end": 2032
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2033,
    "end": 2034
  },
  {
    "type": "Keyword",
    "value": "for",
    "start": 2035,
    "end": 2038
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2039,
    "end": 2040
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 2040,
    "end": 2043
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 2044,
    "end": 2045
  },
  {
    "type": "Identifier",
    "value": "nameMA",
    "start": 2045,
    "end": 2051
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2052,
    "end": 2053
  },
  {
    "type": "String",
    "value": "\"noName\"",
    "start": 2054,
    "end": 2062
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2062,
    "end": 2063
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 2064,
    "end": 2065
  },
  {
    "type": "Identifier",
    "value": "primarySkillA",
    "start": 2070,
    "end": 2083
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2084,
    "end": 2085
  },
  {
    "type": "String",
    "value": "\"primary\"",
    "start": 2086,
    "end": 2095
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2095,
    "end": 2096
  },
  {
    "type": "Identifier",
    "value": "secondarySkillA",
    "start": 2101,
    "end": 2116
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2117,
    "end": 2118
  },
  {
    "type": "String",
    "value": "\"secondary\"",
    "start": 2119,
    "end": 2130
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 2131,
    "end": 2132
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2133,
    "end": 2134
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 2135,
    "end": 2136
  },
  {
    "type": "String",
    "value": "\"skill1\"",
    "start": 2136,
    "end": 2144
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2144,
    "end": 2145
  },
  {
    "type": "String",
    "value": "\"skill2\"",
    "start": 2146,
    "end": 2154
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 2154,
    "end": 2155
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 2155,
    "end": 2156
  },
  {
    "type": "Identifier",
    "value": "of",
    "start": 2157,
    "end": 2159
  },
  {
    "type": "Identifier",
    "value": "multiRobots",
    "start": 2160,
    "end": 2171
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2171,
    "end": 2172
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2173,
    "end": 2174
  },
  {
    "type": "Identifier",
    "value": "console",
    "start": 2179,
    "end": 2186
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2186,
    "end": 2187
  },
  {
    "type": "Identifier",
    "value": "log",
    "start": 2187,
    "end": 2190
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2190,
    "end": 2191
  },
  {
    "type": "Identifier",
    "value": "nameMA",
    "start": 2191,
    "end": 2197
  },
  {
    "type": "Punctuator",
    "value": ")",
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
    "start": 2200,
    "end": 2201
  },
  {
    "type": "Keyword",
    "value": "for",
    "start": 2202,
    "end": 2205
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2206,
    "end": 2207
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 2207,
    "end": 2210
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 2211,
    "end": 2212
  },
  {
    "type": "Identifier",
    "value": "nameMA",
    "start": 2212,
    "end": 2218
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2219,
    "end": 2220
  },
  {
    "type": "String",
    "value": "\"noName\"",
    "start": 2221,
    "end": 2229
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2229,
    "end": 2230
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 2231,
    "end": 2232
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
    "start": 2268,
    "end": 2283
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2284,
    "end": 2285
  },
  {
    "type": "String",
    "value": "\"secondary\"",
    "start": 2286,
    "end": 2297
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 2298,
    "end": 2299
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2300,
    "end": 2301
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 2302,
    "end": 2303
  },
  {
    "type": "String",
    "value": "\"skill1\"",
    "start": 2303,
    "end": 2311
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2311,
    "end": 2312
  },
  {
    "type": "String",
    "value": "\"skill2\"",
    "start": 2313,
    "end": 2321
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 2321,
    "end": 2322
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 2322,
    "end": 2323
  },
  {
    "type": "Identifier",
    "value": "of",
    "start": 2324,
    "end": 2326
  },
  {
    "type": "Identifier",
    "value": "getMultiRobots",
    "start": 2327,
    "end": 2341
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2341,
    "end": 2342
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2342,
    "end": 2343
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2343,
    "end": 2344
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2345,
    "end": 2346
  },
  {
    "type": "Identifier",
    "value": "console",
    "start": 2351,
    "end": 2358
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2358,
    "end": 2359
  },
  {
    "type": "Identifier",
    "value": "log",
    "start": 2359,
    "end": 2362
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2362,
    "end": 2363
  },
  {
    "type": "Identifier",
    "value": "nameMA",
    "start": 2363,
    "end": 2369
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2369,
    "end": 2370
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2370,
    "end": 2371
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2372,
    "end": 2373
  },
  {
    "type": "Keyword",
    "value": "for",
    "start": 2374,
    "end": 2377
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2378,
    "end": 2379
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 2379,
    "end": 2382
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 2383,
    "end": 2384
  },
  {
    "type": "Identifier",
    "value": "nameMA",
    "start": 2384,
    "end": 2390
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2391,
    "end": 2392
  },
  {
    "type": "String",
    "value": "\"noName\"",
    "start": 2393,
    "end": 2401
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2401,
    "end": 2402
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 2403,
    "end": 2404
  },
  {
    "type": "Identifier",
    "value": "primarySkillA",
    "start": 2409,
    "end": 2422
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2423,
    "end": 2424
  },
  {
    "type": "String",
    "value": "\"primary\"",
    "start": 2425,
    "end": 2434
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2434,
    "end": 2435
  },
  {
    "type": "Identifier",
    "value": "secondarySkillA",
    "start": 2440,
    "end": 2455
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2456,
    "end": 2457
  },
  {
    "type": "String",
    "value": "\"secondary\"",
    "start": 2458,
    "end": 2469
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 2470,
    "end": 2471
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2472,
    "end": 2473
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 2474,
    "end": 2475
  },
  {
    "type": "String",
    "value": "\"skill1\"",
    "start": 2475,
    "end": 2483
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2483,
    "end": 2484
  },
  {
    "type": "String",
    "value": "\"skill2\"",
    "start": 2485,
    "end": 2493
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 2493,
    "end": 2494
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 2494,
    "end": 2495
  },
  {
    "type": "Identifier",
    "value": "of",
    "start": 2496,
    "end": 2498
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 2499,
    "end": 2500
  },
  {
    "type": "Identifier",
    "value": "multiRobotA",
    "start": 2500,
    "end": 2511
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2511,
    "end": 2512
  },
  {
    "type": "Identifier",
    "value": "multiRobotB",
    "start": 2513,
    "end": 2524
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 2524,
    "end": 2525
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2525,
    "end": 2526
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2527,
    "end": 2528
  },
  {
    "type": "Identifier",
    "value": "console",
    "start": 2533,
    "end": 2540
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2540,
    "end": 2541
  },
  {
    "type": "Identifier",
    "value": "log",
    "start": 2541,
    "end": 2544
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2544,
    "end": 2545
  },
  {
    "type": "Identifier",
    "value": "nameMA",
    "start": 2545,
    "end": 2551
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2551,
    "end": 2552
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2552,
    "end": 2553
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2554,
    "end": 2555
  },
  {
    "type": "Keyword",
    "value": "for",
    "start": 2557,
    "end": 2560
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2561,
    "end": 2562
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 2562,
    "end": 2565
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 2566,
    "end": 2567
  },
  {
    "type": "Identifier",
    "value": "numberA3",
    "start": 2567,
    "end": 2575
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2576,
    "end": 2577
  },
  {
    "type": "Punctuator",
    "value": "-",
    "start": 2578,
    "end": 2579
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 2579,
    "end": 2580
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2580,
    "end": 2581
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 2582,
    "end": 2585
  },
  {
    "type": "Identifier",
    "value": "robotAInfo",
    "start": 2585,
    "end": 2595
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 2595,
    "end": 2596
  },
  {
    "type": "Identifier",
    "value": "of",
    "start": 2597,
    "end": 2599
  },
  {
    "type": "Identifier",
    "value": "robots",
    "start": 2600,
    "end": 2606
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2606,
    "end": 2607
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2608,
    "end": 2609
  },
  {
    "type": "Identifier",
    "value": "console",
    "start": 2614,
    "end": 2621
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2621,
    "end": 2622
  },
  {
    "type": "Identifier",
    "value": "log",
    "start": 2622,
    "end": 2625
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2625,
    "end": 2626
  },
  {
    "type": "Identifier",
    "value": "numberA3",
    "start": 2626,
    "end": 2634
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2634,
    "end": 2635
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2635,
    "end": 2636
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2637,
    "end": 2638
  },
  {
    "type": "Keyword",
    "value": "for",
    "start": 2639,
    "end": 2642
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2643,
    "end": 2644
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 2644,
    "end": 2647
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 2648,
    "end": 2649
  },
  {
    "type": "Identifier",
    "value": "numberA3",
    "start": 2649,
    "end": 2657
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2658,
    "end": 2659
  },
  {
    "type": "Punctuator",
    "value": "-",
    "start": 2660,
    "end": 2661
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 2661,
    "end": 2662
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2662,
    "end": 2663
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 2664,
    "end": 2667
  },
  {
    "type": "Identifier",
    "value": "robotAInfo",
    "start": 2667,
    "end": 2677
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 2677,
    "end": 2678
  },
  {
    "type": "Identifier",
    "value": "of",
    "start": 2679,
    "end": 2681
  },
  {
    "type": "Identifier",
    "value": "getRobots",
    "start": 2682,
    "end": 2691
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2691,
    "end": 2692
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2692,
    "end": 2693
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2693,
    "end": 2694
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2695,
    "end": 2696
  },
  {
    "type": "Identifier",
    "value": "console",
    "start": 2701,
    "end": 2708
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2708,
    "end": 2709
  },
  {
    "type": "Identifier",
    "value": "log",
    "start": 2709,
    "end": 2712
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2712,
    "end": 2713
  },
  {
    "type": "Identifier",
    "value": "numberA3",
    "start": 2713,
    "end": 2721
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2721,
    "end": 2722
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2722,
    "end": 2723
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2724,
    "end": 2725
  },
  {
    "type": "Keyword",
    "value": "for",
    "start": 2726,
    "end": 2729
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2730,
    "end": 2731
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 2731,
    "end": 2734
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 2735,
    "end": 2736
  },
  {
    "type": "Identifier",
    "value": "numberA3",
    "start": 2736,
    "end": 2744
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2745,
    "end": 2746
  },
  {
    "type": "Punctuator",
    "value": "-",
    "start": 2747,
    "end": 2748
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 2748,
    "end": 2749
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2749,
    "end": 2750
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 2751,
    "end": 2754
  },
  {
    "type": "Identifier",
    "value": "robotAInfo",
    "start": 2754,
    "end": 2764
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 2764,
    "end": 2765
  },
  {
    "type": "Identifier",
    "value": "of",
    "start": 2766,
    "end": 2768
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 2769,
    "end": 2770
  },
  {
    "type": "Identifier",
    "value": "robotA",
    "start": 2770,
    "end": 2776
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2776,
    "end": 2777
  },
  {
    "type": "Identifier",
    "value": "robotB",
    "start": 2778,
    "end": 2784
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 2784,
    "end": 2785
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2785,
    "end": 2786
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2787,
    "end": 2788
  },
  {
    "type": "Identifier",
    "value": "console",
    "start": 2793,
    "end": 2800
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2800,
    "end": 2801
  },
  {
    "type": "Identifier",
    "value": "log",
    "start": 2801,
    "end": 2804
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2804,
    "end": 2805
  },
  {
    "type": "Identifier",
    "value": "numberA3",
    "start": 2805,
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
    "value": ";",
    "start": 2814,
    "end": 2815
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2816,
    "end": 2817
  }
]
```
