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
                            "type": "TSStringKeyword",
                            "start": 36,
                            "end": 42
                          },
                          "start": 34,
                          "end": 42
                        },
                        "start": 31,
                        "end": 42
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSVoidKeyword",
                        "start": 45,
                        "end": 49
                      },
                      "start": 43,
                      "end": 49
                    },
                    "accessibility": null,
                    "readonly": false,
                    "static": false,
                    "start": 27,
                    "end": 50
                  }
                ],
                "start": 21,
                "end": 52
              },
              "start": 19,
              "end": 52
            },
            "start": 12,
            "end": 52
          },
          "init": null,
          "definite": false,
          "start": 12,
          "end": 52
        }
      ],
      "declare": true,
      "start": 0,
      "end": 52
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "MultiSkilledRobot",
        "optional": false,
        "typeAnnotation": null,
        "start": 58,
        "end": 75
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTupleType",
        "elementTypes": [
          {
            "type": "TSStringKeyword",
            "start": 79,
            "end": 85
          },
          {
            "type": "TSArrayType",
            "elementType": {
              "type": "TSStringKeyword",
              "start": 87,
              "end": 93
            },
            "start": 87,
            "end": 95
          }
        ],
        "start": 78,
        "end": 96
      },
      "declare": false,
      "start": 53,
      "end": 97
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
                  "start": 115,
                  "end": 132
                },
                "typeArguments": null,
                "start": 115,
                "end": 132
              },
              "start": 113,
              "end": 132
            },
            "start": 102,
            "end": 132
          },
          "init": {
            "type": "ArrayExpression",
            "elements": [
              {
                "type": "Literal",
                "value": "mower",
                "raw": "\"mower\"",
                "start": 136,
                "end": 143
              },
              {
                "type": "ArrayExpression",
                "elements": [
                  {
                    "type": "Literal",
                    "value": "mowing",
                    "raw": "\"mowing\"",
                    "start": 146,
                    "end": 154
                  },
                  {
                    "type": "Literal",
                    "value": "",
                    "raw": "\"\"",
                    "start": 156,
                    "end": 158
                  }
                ],
                "start": 145,
                "end": 159
              }
            ],
            "start": 135,
            "end": 160
          },
          "definite": false,
          "start": 102,
          "end": 160
        }
      ],
      "declare": false,
      "start": 98,
      "end": 161
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
                  "start": 179,
                  "end": 196
                },
                "typeArguments": null,
                "start": 179,
                "end": 196
              },
              "start": 177,
              "end": 196
            },
            "start": 166,
            "end": 196
          },
          "init": {
            "type": "ArrayExpression",
            "elements": [
              {
                "type": "Literal",
                "value": "trimmer",
                "raw": "\"trimmer\"",
                "start": 200,
                "end": 209
              },
              {
                "type": "ArrayExpression",
                "elements": [
                  {
                    "type": "Literal",
                    "value": "trimming",
                    "raw": "\"trimming\"",
                    "start": 212,
                    "end": 222
                  },
                  {
                    "type": "Literal",
                    "value": "edging",
                    "raw": "\"edging\"",
                    "start": 224,
                    "end": 232
                  }
                ],
                "start": 211,
                "end": 233
              }
            ],
            "start": 199,
            "end": 234
          },
          "definite": false,
          "start": 166,
          "end": 234
        }
      ],
      "declare": false,
      "start": 162,
      "end": 235
    },
    {
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
                  "name": "skillA",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 244,
                  "end": 250
                },
                "right": {
                  "type": "ArrayExpression",
                  "elements": [
                    {
                      "type": "Literal",
                      "value": "noSkill",
                      "raw": "\"noSkill\"",
                      "start": 254,
                      "end": 263
                    },
                    {
                      "type": "Literal",
                      "value": "noSkill",
                      "raw": "\"noSkill\"",
                      "start": 265,
                      "end": 274
                    }
                  ],
                  "start": 253,
                  "end": 275
                },
                "optional": false,
                "typeAnnotation": null,
                "start": 244,
                "end": 275
              }
            ],
            "optional": false,
            "typeAnnotation": null,
            "start": 241,
            "end": 276
          },
          "init": {
            "type": "Identifier",
            "decorators": [],
            "name": "multiRobotA",
            "optional": false,
            "typeAnnotation": null,
            "start": 279,
            "end": 290
          },
          "definite": false,
          "start": 241,
          "end": 290
        }
      ],
      "declare": false,
      "start": 237,
      "end": 291
    },
    {
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
                  "name": "nameMB",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 297,
                  "end": 303
                },
                "right": {
                  "type": "Literal",
                  "value": "noName",
                  "raw": "\"noName\"",
                  "start": 306,
                  "end": 314
                },
                "optional": false,
                "typeAnnotation": null,
                "start": 297,
                "end": 314
              }
            ],
            "optional": false,
            "typeAnnotation": null,
            "start": 296,
            "end": 316
          },
          "init": {
            "type": "Identifier",
            "decorators": [],
            "name": "multiRobotB",
            "optional": false,
            "typeAnnotation": null,
            "start": 319,
            "end": 330
          },
          "definite": false,
          "start": 296,
          "end": 330
        }
      ],
      "declare": false,
      "start": 292,
      "end": 331
    },
    {
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
                  "start": 337,
                  "end": 343
                },
                "right": {
                  "type": "Literal",
                  "value": "noName",
                  "raw": "\"noName\"",
                  "start": 346,
                  "end": 354
                },
                "optional": false,
                "typeAnnotation": null,
                "start": 337,
                "end": 354
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
                        "start": 357,
                        "end": 370
                      },
                      "right": {
                        "type": "Literal",
                        "value": "noSkill",
                        "raw": "\"noSkill\"",
                        "start": 373,
                        "end": 382
                      },
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 357,
                      "end": 382
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
                        "start": 384,
                        "end": 399
                      },
                      "right": {
                        "type": "Literal",
                        "value": "noSkill",
                        "raw": "\"noSkill\"",
                        "start": 402,
                        "end": 411
                      },
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 384,
                      "end": 411
                    }
                  ],
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 356,
                  "end": 412
                },
                "right": {
                  "type": "ArrayExpression",
                  "elements": [
                    {
                      "type": "Literal",
                      "value": "noSkill",
                      "raw": "\"noSkill\"",
                      "start": 416,
                      "end": 425
                    },
                    {
                      "type": "Literal",
                      "value": "noSkill",
                      "raw": "\"noSkill\"",
                      "start": 427,
                      "end": 436
                    }
                  ],
                  "start": 415,
                  "end": 437
                },
                "optional": false,
                "typeAnnotation": null,
                "start": 356,
                "end": 437
              }
            ],
            "optional": false,
            "typeAnnotation": null,
            "start": 336,
            "end": 438
          },
          "init": {
            "type": "Identifier",
            "decorators": [],
            "name": "multiRobotA",
            "optional": false,
            "typeAnnotation": null,
            "start": 441,
            "end": 452
          },
          "definite": false,
          "start": 336,
          "end": 452
        }
      ],
      "declare": false,
      "start": 332,
      "end": 453
    },
    {
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
                  "name": "nameMC",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 460,
                  "end": 466
                },
                "right": {
                  "type": "Literal",
                  "value": "noName",
                  "raw": "\"noName\"",
                  "start": 469,
                  "end": 477
                },
                "optional": false,
                "typeAnnotation": null,
                "start": 460,
                "end": 477
              }
            ],
            "optional": false,
            "typeAnnotation": null,
            "start": 459,
            "end": 479
          },
          "init": {
            "type": "ArrayExpression",
            "elements": [
              {
                "type": "Literal",
                "value": "roomba",
                "raw": "\"roomba\"",
                "start": 483,
                "end": 491
              },
              {
                "type": "ArrayExpression",
                "elements": [
                  {
                    "type": "Literal",
                    "value": "vacuum",
                    "raw": "\"vacuum\"",
                    "start": 494,
                    "end": 502
                  },
                  {
                    "type": "Literal",
                    "value": "mopping",
                    "raw": "\"mopping\"",
                    "start": 504,
                    "end": 513
                  }
                ],
                "start": 493,
                "end": 514
              }
            ],
            "start": 482,
            "end": 515
          },
          "definite": false,
          "start": 459,
          "end": 515
        }
      ],
      "declare": false,
      "start": 455,
      "end": 516
    },
    {
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
                  "name": "nameMC2",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 522,
                  "end": 529
                },
                "right": {
                  "type": "Literal",
                  "value": "noName",
                  "raw": "\"noName\"",
                  "start": 532,
                  "end": 540
                },
                "optional": false,
                "typeAnnotation": null,
                "start": 522,
                "end": 540
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
                        "name": "primarySkillC",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 543,
                        "end": 556
                      },
                      "right": {
                        "type": "Literal",
                        "value": "noSkill",
                        "raw": "\"noSkill\"",
                        "start": 559,
                        "end": 568
                      },
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 543,
                      "end": 568
                    },
                    {
                      "type": "AssignmentPattern",
                      "decorators": [],
                      "left": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "secondarySkillC",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 570,
                        "end": 585
                      },
                      "right": {
                        "type": "Literal",
                        "value": "noSkill",
                        "raw": "\"noSkill\"",
                        "start": 588,
                        "end": 597
                      },
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 570,
                      "end": 597
                    }
                  ],
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 542,
                  "end": 598
                },
                "right": {
                  "type": "ArrayExpression",
                  "elements": [
                    {
                      "type": "Literal",
                      "value": "noSkill",
                      "raw": "\"noSkill\"",
                      "start": 602,
                      "end": 611
                    },
                    {
                      "type": "Literal",
                      "value": "noSkill",
                      "raw": "\"noSkill\"",
                      "start": 613,
                      "end": 622
                    }
                  ],
                  "start": 601,
                  "end": 623
                },
                "optional": false,
                "typeAnnotation": null,
                "start": 542,
                "end": 623
              }
            ],
            "optional": false,
            "typeAnnotation": null,
            "start": 521,
            "end": 624
          },
          "init": {
            "type": "ArrayExpression",
            "elements": [
              {
                "type": "Literal",
                "value": "roomba",
                "raw": "\"roomba\"",
                "start": 628,
                "end": 636
              },
              {
                "type": "ArrayExpression",
                "elements": [
                  {
                    "type": "Literal",
                    "value": "vacuum",
                    "raw": "\"vacuum\"",
                    "start": 639,
                    "end": 647
                  },
                  {
                    "type": "Literal",
                    "value": "mopping",
                    "raw": "\"mopping\"",
                    "start": 649,
                    "end": 658
                  }
                ],
                "start": 638,
                "end": 659
              }
            ],
            "start": 627,
            "end": 660
          },
          "definite": false,
          "start": 521,
          "end": 660
        }
      ],
      "declare": false,
      "start": 517,
      "end": 661
    },
    {
      "type": "IfStatement",
      "test": {
        "type": "BinaryExpression",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "nameMB",
          "optional": false,
          "typeAnnotation": null,
          "start": 667,
          "end": 673
        },
        "operator": "==",
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "nameMA",
          "optional": false,
          "typeAnnotation": null,
          "start": 677,
          "end": 683
        },
        "start": 667,
        "end": 683
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
                  "start": 691,
                  "end": 698
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "log",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 699,
                  "end": 702
                },
                "optional": false,
                "computed": false,
                "start": 691,
                "end": 702
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "BinaryExpression",
                  "left": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "skillA",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 703,
                      "end": 709
                    },
                    "property": {
                      "type": "Literal",
                      "value": 0,
                      "raw": "0",
                      "start": 710,
                      "end": 711
                    },
                    "optional": false,
                    "computed": true,
                    "start": 703,
                    "end": 712
                  },
                  "operator": "+",
                  "right": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "skillA",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 715,
                      "end": 721
                    },
                    "property": {
                      "type": "Literal",
                      "value": 1,
                      "raw": "1",
                      "start": 722,
                      "end": 723
                    },
                    "optional": false,
                    "computed": true,
                    "start": 715,
                    "end": 724
                  },
                  "start": 703,
                  "end": 724
                }
              ],
              "optional": false,
              "start": 691,
              "end": 725
            },
            "directive": null,
            "start": 691,
            "end": 726
          }
        ],
        "start": 685,
        "end": 728
      },
      "alternate": null,
      "start": 663,
      "end": 728
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 728
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
    "value": "string",
    "start": 36,
    "end": 42
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 42,
    "end": 43
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 43,
    "end": 44
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 45,
    "end": 49
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 49,
    "end": 50
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 51,
    "end": 52
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 53,
    "end": 57
  },
  {
    "type": "Identifier",
    "value": "MultiSkilledRobot",
    "start": 58,
    "end": 75
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 76,
    "end": 77
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 78,
    "end": 79
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 79,
    "end": 85
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 85,
    "end": 86
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 87,
    "end": 93
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 93,
    "end": 94
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 94,
    "end": 95
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 95,
    "end": 96
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 96,
    "end": 97
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 98,
    "end": 101
  },
  {
    "type": "Identifier",
    "value": "multiRobotA",
    "start": 102,
    "end": 113
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 113,
    "end": 114
  },
  {
    "type": "Identifier",
    "value": "MultiSkilledRobot",
    "start": 115,
    "end": 132
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 133,
    "end": 134
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 135,
    "end": 136
  },
  {
    "type": "String",
    "value": "\"mower\"",
    "start": 136,
    "end": 143
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 143,
    "end": 144
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 145,
    "end": 146
  },
  {
    "type": "String",
    "value": "\"mowing\"",
    "start": 146,
    "end": 154
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 154,
    "end": 155
  },
  {
    "type": "String",
    "value": "\"\"",
    "start": 156,
    "end": 158
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 158,
    "end": 159
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 159,
    "end": 160
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 160,
    "end": 161
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 162,
    "end": 165
  },
  {
    "type": "Identifier",
    "value": "multiRobotB",
    "start": 166,
    "end": 177
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 177,
    "end": 178
  },
  {
    "type": "Identifier",
    "value": "MultiSkilledRobot",
    "start": 179,
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
    "type": "String",
    "value": "\"trimmer\"",
    "start": 200,
    "end": 209
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 209,
    "end": 210
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 211,
    "end": 212
  },
  {
    "type": "String",
    "value": "\"trimming\"",
    "start": 212,
    "end": 222
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 222,
    "end": 223
  },
  {
    "type": "String",
    "value": "\"edging\"",
    "start": 224,
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
    "value": "]",
    "start": 233,
    "end": 234
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 234,
    "end": 235
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 237,
    "end": 240
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 241,
    "end": 242
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 242,
    "end": 243
  },
  {
    "type": "Identifier",
    "value": "skillA",
    "start": 244,
    "end": 250
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 251,
    "end": 252
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 253,
    "end": 254
  },
  {
    "type": "String",
    "value": "\"noSkill\"",
    "start": 254,
    "end": 263
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 263,
    "end": 264
  },
  {
    "type": "String",
    "value": "\"noSkill\"",
    "start": 265,
    "end": 274
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 274,
    "end": 275
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 275,
    "end": 276
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 277,
    "end": 278
  },
  {
    "type": "Identifier",
    "value": "multiRobotA",
    "start": 279,
    "end": 290
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 290,
    "end": 291
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 292,
    "end": 295
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 296,
    "end": 297
  },
  {
    "type": "Identifier",
    "value": "nameMB",
    "start": 297,
    "end": 303
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 304,
    "end": 305
  },
  {
    "type": "String",
    "value": "\"noName\"",
    "start": 306,
    "end": 314
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 315,
    "end": 316
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 317,
    "end": 318
  },
  {
    "type": "Identifier",
    "value": "multiRobotB",
    "start": 319,
    "end": 330
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 330,
    "end": 331
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 332,
    "end": 335
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 336,
    "end": 337
  },
  {
    "type": "Identifier",
    "value": "nameMA",
    "start": 337,
    "end": 343
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 344,
    "end": 345
  },
  {
    "type": "String",
    "value": "\"noName\"",
    "start": 346,
    "end": 354
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 354,
    "end": 355
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 356,
    "end": 357
  },
  {
    "type": "Identifier",
    "value": "primarySkillA",
    "start": 357,
    "end": 370
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 371,
    "end": 372
  },
  {
    "type": "String",
    "value": "\"noSkill\"",
    "start": 373,
    "end": 382
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 382,
    "end": 383
  },
  {
    "type": "Identifier",
    "value": "secondarySkillA",
    "start": 384,
    "end": 399
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 400,
    "end": 401
  },
  {
    "type": "String",
    "value": "\"noSkill\"",
    "start": 402,
    "end": 411
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 411,
    "end": 412
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 413,
    "end": 414
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 415,
    "end": 416
  },
  {
    "type": "String",
    "value": "\"noSkill\"",
    "start": 416,
    "end": 425
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 425,
    "end": 426
  },
  {
    "type": "String",
    "value": "\"noSkill\"",
    "start": 427,
    "end": 436
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 436,
    "end": 437
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 437,
    "end": 438
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 439,
    "end": 440
  },
  {
    "type": "Identifier",
    "value": "multiRobotA",
    "start": 441,
    "end": 452
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 452,
    "end": 453
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 455,
    "end": 458
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 459,
    "end": 460
  },
  {
    "type": "Identifier",
    "value": "nameMC",
    "start": 460,
    "end": 466
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 467,
    "end": 468
  },
  {
    "type": "String",
    "value": "\"noName\"",
    "start": 469,
    "end": 477
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 478,
    "end": 479
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 480,
    "end": 481
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 482,
    "end": 483
  },
  {
    "type": "String",
    "value": "\"roomba\"",
    "start": 483,
    "end": 491
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 491,
    "end": 492
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 493,
    "end": 494
  },
  {
    "type": "String",
    "value": "\"vacuum\"",
    "start": 494,
    "end": 502
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 502,
    "end": 503
  },
  {
    "type": "String",
    "value": "\"mopping\"",
    "start": 504,
    "end": 513
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 513,
    "end": 514
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 514,
    "end": 515
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 515,
    "end": 516
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 517,
    "end": 520
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 521,
    "end": 522
  },
  {
    "type": "Identifier",
    "value": "nameMC2",
    "start": 522,
    "end": 529
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 530,
    "end": 531
  },
  {
    "type": "String",
    "value": "\"noName\"",
    "start": 532,
    "end": 540
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 540,
    "end": 541
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 542,
    "end": 543
  },
  {
    "type": "Identifier",
    "value": "primarySkillC",
    "start": 543,
    "end": 556
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 557,
    "end": 558
  },
  {
    "type": "String",
    "value": "\"noSkill\"",
    "start": 559,
    "end": 568
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 568,
    "end": 569
  },
  {
    "type": "Identifier",
    "value": "secondarySkillC",
    "start": 570,
    "end": 585
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 586,
    "end": 587
  },
  {
    "type": "String",
    "value": "\"noSkill\"",
    "start": 588,
    "end": 597
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 597,
    "end": 598
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 599,
    "end": 600
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 601,
    "end": 602
  },
  {
    "type": "String",
    "value": "\"noSkill\"",
    "start": 602,
    "end": 611
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 611,
    "end": 612
  },
  {
    "type": "String",
    "value": "\"noSkill\"",
    "start": 613,
    "end": 622
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 622,
    "end": 623
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 623,
    "end": 624
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 625,
    "end": 626
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 627,
    "end": 628
  },
  {
    "type": "String",
    "value": "\"roomba\"",
    "start": 628,
    "end": 636
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 636,
    "end": 637
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 638,
    "end": 639
  },
  {
    "type": "String",
    "value": "\"vacuum\"",
    "start": 639,
    "end": 647
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 647,
    "end": 648
  },
  {
    "type": "String",
    "value": "\"mopping\"",
    "start": 649,
    "end": 658
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 658,
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
    "value": ";",
    "start": 660,
    "end": 661
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 663,
    "end": 665
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 666,
    "end": 667
  },
  {
    "type": "Identifier",
    "value": "nameMB",
    "start": 667,
    "end": 673
  },
  {
    "type": "Punctuator",
    "value": "==",
    "start": 674,
    "end": 676
  },
  {
    "type": "Identifier",
    "value": "nameMA",
    "start": 677,
    "end": 683
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 683,
    "end": 684
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 685,
    "end": 686
  },
  {
    "type": "Identifier",
    "value": "console",
    "start": 691,
    "end": 698
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 698,
    "end": 699
  },
  {
    "type": "Identifier",
    "value": "log",
    "start": 699,
    "end": 702
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 702,
    "end": 703
  },
  {
    "type": "Identifier",
    "value": "skillA",
    "start": 703,
    "end": 709
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 709,
    "end": 710
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 710,
    "end": 711
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 711,
    "end": 712
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 713,
    "end": 714
  },
  {
    "type": "Identifier",
    "value": "skillA",
    "start": 715,
    "end": 721
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 721,
    "end": 722
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 722,
    "end": 723
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 723,
    "end": 724
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 724,
    "end": 725
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 725,
    "end": 726
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 727,
    "end": 728
  }
]
```
