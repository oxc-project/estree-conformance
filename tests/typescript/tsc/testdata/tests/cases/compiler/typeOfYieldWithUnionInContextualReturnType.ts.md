__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "SyncSequenceFactory",
        "optional": false,
        "typeAnnotation": null,
        "start": 62,
        "end": 81
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSFunctionType",
        "typeParameters": null,
        "params": [],
        "returnType": {
          "type": "TSTypeAnnotation",
          "typeAnnotation": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "Generator",
              "optional": false,
              "typeAnnotation": null,
              "start": 90,
              "end": 99
            },
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "params": [
                {
                  "type": "TSStringKeyword",
                  "start": 100,
                  "end": 106
                },
                {
                  "type": "TSStringKeyword",
                  "start": 108,
                  "end": 114
                },
                {
                  "type": "TSStringKeyword",
                  "start": 116,
                  "end": 122
                }
              ],
              "start": 99,
              "end": 123
            },
            "start": 90,
            "end": 123
          },
          "start": 87,
          "end": 123
        },
        "start": 84,
        "end": 123
      },
      "declare": false,
      "start": 57,
      "end": 124
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "AsyncSequenceFactory",
        "optional": false,
        "typeAnnotation": null,
        "start": 131,
        "end": 151
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSFunctionType",
        "typeParameters": null,
        "params": [],
        "returnType": {
          "type": "TSTypeAnnotation",
          "typeAnnotation": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "AsyncGenerator",
              "optional": false,
              "typeAnnotation": null,
              "start": 160,
              "end": 174
            },
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "params": [
                {
                  "type": "TSStringKeyword",
                  "start": 175,
                  "end": 181
                },
                {
                  "type": "TSStringKeyword",
                  "start": 183,
                  "end": 189
                },
                {
                  "type": "TSStringKeyword",
                  "start": 191,
                  "end": 197
                }
              ],
              "start": 174,
              "end": 198
            },
            "start": 160,
            "end": 198
          },
          "start": 157,
          "end": 198
        },
        "start": 154,
        "end": 198
      },
      "declare": false,
      "start": 126,
      "end": 199
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "SequenceFactory",
        "optional": false,
        "typeAnnotation": null,
        "start": 206,
        "end": 221
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSUnionType",
        "types": [
          {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "SyncSequenceFactory",
              "optional": false,
              "typeAnnotation": null,
              "start": 224,
              "end": 243
            },
            "typeArguments": null,
            "start": 224,
            "end": 243
          },
          {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "AsyncSequenceFactory",
              "optional": false,
              "typeAnnotation": null,
              "start": 246,
              "end": 266
            },
            "typeArguments": null,
            "start": 246,
            "end": 266
          }
        ],
        "start": 224,
        "end": 266
      },
      "declare": false,
      "start": 201,
      "end": 266
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "syncFactory",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "SyncSequenceFactory",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 287,
                  "end": 306
                },
                "typeArguments": null,
                "start": 287,
                "end": 306
              },
              "start": 285,
              "end": 306
            },
            "start": 274,
            "end": 306
          },
          "init": {
            "type": "FunctionExpression",
            "id": null,
            "generator": true,
            "async": false,
            "declare": false,
            "typeParameters": null,
            "params": [],
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
                        "name": "name",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 329,
                        "end": 333
                      },
                      "init": {
                        "type": "Literal",
                        "value": "",
                        "raw": "\"\"",
                        "start": 336,
                        "end": 338
                      },
                      "definite": false,
                      "start": 329,
                      "end": 338
                    }
                  ],
                  "declare": false,
                  "start": 325,
                  "end": 339
                },
                {
                  "type": "WhileStatement",
                  "test": {
                    "type": "UnaryExpression",
                    "operator": "!",
                    "argument": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "name",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 349,
                      "end": 353
                    },
                    "prefix": true,
                    "start": 348,
                    "end": 353
                  },
                  "body": {
                    "type": "BlockStatement",
                    "body": [
                      {
                        "type": "ExpressionStatement",
                        "expression": {
                          "type": "AssignmentExpression",
                          "operator": "=",
                          "left": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "name",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 360,
                            "end": 364
                          },
                          "right": {
                            "type": "YieldExpression",
                            "delegate": false,
                            "argument": {
                              "type": "Literal",
                              "value": "What is your name?",
                              "raw": "\"What is your name?\"",
                              "start": 373,
                              "end": 393
                            },
                            "start": 367,
                            "end": 393
                          },
                          "start": 360,
                          "end": 393
                        },
                        "directive": null,
                        "start": 360,
                        "end": 393
                      }
                    ],
                    "start": 354,
                    "end": 397
                  },
                  "start": 342,
                  "end": 397
                },
                {
                  "type": "ReturnStatement",
                  "argument": {
                    "type": "TemplateLiteral",
                    "quasis": [
                      {
                        "type": "TemplateElement",
                        "value": {
                          "raw": "That's the end of the game, ",
                          "cooked": "That's the end of the game, "
                        },
                        "tail": false,
                        "start": 407,
                        "end": 438
                      },
                      {
                        "type": "TemplateElement",
                        "value": {
                          "raw": "",
                          "cooked": ""
                        },
                        "tail": true,
                        "start": 442,
                        "end": 444
                      }
                    ],
                    "expressions": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "name",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 438,
                        "end": 442
                      }
                    ],
                    "start": 407,
                    "end": 444
                  },
                  "start": 400,
                  "end": 444
                }
              ],
              "start": 321,
              "end": 446
            },
            "expression": false,
            "start": 309,
            "end": 446
          },
          "definite": false,
          "start": 274,
          "end": 446
        }
      ],
      "declare": false,
      "start": 268,
      "end": 446
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "asyncFactory",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "AsyncSequenceFactory",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 469,
                  "end": 489
                },
                "typeArguments": null,
                "start": 469,
                "end": 489
              },
              "start": 467,
              "end": 489
            },
            "start": 455,
            "end": 489
          },
          "init": {
            "type": "FunctionExpression",
            "id": null,
            "generator": true,
            "async": true,
            "declare": false,
            "typeParameters": null,
            "params": [],
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
                        "name": "name",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 518,
                        "end": 522
                      },
                      "init": {
                        "type": "Literal",
                        "value": "",
                        "raw": "\"\"",
                        "start": 525,
                        "end": 527
                      },
                      "definite": false,
                      "start": 518,
                      "end": 527
                    }
                  ],
                  "declare": false,
                  "start": 514,
                  "end": 528
                },
                {
                  "type": "WhileStatement",
                  "test": {
                    "type": "UnaryExpression",
                    "operator": "!",
                    "argument": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "name",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 538,
                      "end": 542
                    },
                    "prefix": true,
                    "start": 537,
                    "end": 542
                  },
                  "body": {
                    "type": "BlockStatement",
                    "body": [
                      {
                        "type": "ExpressionStatement",
                        "expression": {
                          "type": "AssignmentExpression",
                          "operator": "=",
                          "left": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "name",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 549,
                            "end": 553
                          },
                          "right": {
                            "type": "YieldExpression",
                            "delegate": false,
                            "argument": {
                              "type": "Literal",
                              "value": "What is your name?",
                              "raw": "\"What is your name?\"",
                              "start": 562,
                              "end": 582
                            },
                            "start": 556,
                            "end": 582
                          },
                          "start": 549,
                          "end": 582
                        },
                        "directive": null,
                        "start": 549,
                        "end": 582
                      }
                    ],
                    "start": 543,
                    "end": 586
                  },
                  "start": 531,
                  "end": 586
                },
                {
                  "type": "ReturnStatement",
                  "argument": {
                    "type": "TemplateLiteral",
                    "quasis": [
                      {
                        "type": "TemplateElement",
                        "value": {
                          "raw": "That's the end of the game, ",
                          "cooked": "That's the end of the game, "
                        },
                        "tail": false,
                        "start": 596,
                        "end": 627
                      },
                      {
                        "type": "TemplateElement",
                        "value": {
                          "raw": "",
                          "cooked": ""
                        },
                        "tail": true,
                        "start": 631,
                        "end": 633
                      }
                    ],
                    "expressions": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "name",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 627,
                        "end": 631
                      }
                    ],
                    "start": 596,
                    "end": 633
                  },
                  "start": 589,
                  "end": 633
                }
              ],
              "start": 510,
              "end": 635
            },
            "expression": false,
            "start": 492,
            "end": 635
          },
          "definite": false,
          "start": 455,
          "end": 635
        }
      ],
      "declare": false,
      "start": 449,
      "end": 635
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "looserSyncFactory",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "SequenceFactory",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 663,
                  "end": 678
                },
                "typeArguments": null,
                "start": 663,
                "end": 678
              },
              "start": 661,
              "end": 678
            },
            "start": 644,
            "end": 678
          },
          "init": {
            "type": "FunctionExpression",
            "id": null,
            "generator": true,
            "async": false,
            "declare": false,
            "typeParameters": null,
            "params": [],
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
                        "name": "name",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 701,
                        "end": 705
                      },
                      "init": {
                        "type": "Literal",
                        "value": "",
                        "raw": "\"\"",
                        "start": 708,
                        "end": 710
                      },
                      "definite": false,
                      "start": 701,
                      "end": 710
                    }
                  ],
                  "declare": false,
                  "start": 697,
                  "end": 711
                },
                {
                  "type": "WhileStatement",
                  "test": {
                    "type": "UnaryExpression",
                    "operator": "!",
                    "argument": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "name",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 721,
                      "end": 725
                    },
                    "prefix": true,
                    "start": 720,
                    "end": 725
                  },
                  "body": {
                    "type": "BlockStatement",
                    "body": [
                      {
                        "type": "ExpressionStatement",
                        "expression": {
                          "type": "AssignmentExpression",
                          "operator": "=",
                          "left": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "name",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 732,
                            "end": 736
                          },
                          "right": {
                            "type": "YieldExpression",
                            "delegate": false,
                            "argument": {
                              "type": "Literal",
                              "value": "What is your name?",
                              "raw": "\"What is your name?\"",
                              "start": 745,
                              "end": 765
                            },
                            "start": 739,
                            "end": 765
                          },
                          "start": 732,
                          "end": 765
                        },
                        "directive": null,
                        "start": 732,
                        "end": 765
                      }
                    ],
                    "start": 726,
                    "end": 769
                  },
                  "start": 714,
                  "end": 769
                },
                {
                  "type": "ReturnStatement",
                  "argument": {
                    "type": "TemplateLiteral",
                    "quasis": [
                      {
                        "type": "TemplateElement",
                        "value": {
                          "raw": "That's the end of the game, ",
                          "cooked": "That's the end of the game, "
                        },
                        "tail": false,
                        "start": 779,
                        "end": 810
                      },
                      {
                        "type": "TemplateElement",
                        "value": {
                          "raw": "",
                          "cooked": ""
                        },
                        "tail": true,
                        "start": 814,
                        "end": 816
                      }
                    ],
                    "expressions": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "name",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 810,
                        "end": 814
                      }
                    ],
                    "start": 779,
                    "end": 816
                  },
                  "start": 772,
                  "end": 816
                }
              ],
              "start": 693,
              "end": 818
            },
            "expression": false,
            "start": 681,
            "end": 818
          },
          "definite": false,
          "start": 644,
          "end": 818
        }
      ],
      "declare": false,
      "start": 638,
      "end": 818
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "looserAsyncFactory",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "SequenceFactory",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 847,
                  "end": 862
                },
                "typeArguments": null,
                "start": 847,
                "end": 862
              },
              "start": 845,
              "end": 862
            },
            "start": 827,
            "end": 862
          },
          "init": {
            "type": "FunctionExpression",
            "id": null,
            "generator": true,
            "async": true,
            "declare": false,
            "typeParameters": null,
            "params": [],
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
                        "name": "name",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 891,
                        "end": 895
                      },
                      "init": {
                        "type": "Literal",
                        "value": "",
                        "raw": "\"\"",
                        "start": 898,
                        "end": 900
                      },
                      "definite": false,
                      "start": 891,
                      "end": 900
                    }
                  ],
                  "declare": false,
                  "start": 887,
                  "end": 901
                },
                {
                  "type": "WhileStatement",
                  "test": {
                    "type": "UnaryExpression",
                    "operator": "!",
                    "argument": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "name",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 911,
                      "end": 915
                    },
                    "prefix": true,
                    "start": 910,
                    "end": 915
                  },
                  "body": {
                    "type": "BlockStatement",
                    "body": [
                      {
                        "type": "ExpressionStatement",
                        "expression": {
                          "type": "AssignmentExpression",
                          "operator": "=",
                          "left": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "name",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 922,
                            "end": 926
                          },
                          "right": {
                            "type": "YieldExpression",
                            "delegate": false,
                            "argument": {
                              "type": "Literal",
                              "value": "What is your name?",
                              "raw": "\"What is your name?\"",
                              "start": 935,
                              "end": 955
                            },
                            "start": 929,
                            "end": 955
                          },
                          "start": 922,
                          "end": 955
                        },
                        "directive": null,
                        "start": 922,
                        "end": 955
                      }
                    ],
                    "start": 916,
                    "end": 959
                  },
                  "start": 904,
                  "end": 959
                },
                {
                  "type": "ReturnStatement",
                  "argument": {
                    "type": "TemplateLiteral",
                    "quasis": [
                      {
                        "type": "TemplateElement",
                        "value": {
                          "raw": "That's the end of the game, ",
                          "cooked": "That's the end of the game, "
                        },
                        "tail": false,
                        "start": 969,
                        "end": 1000
                      },
                      {
                        "type": "TemplateElement",
                        "value": {
                          "raw": "",
                          "cooked": ""
                        },
                        "tail": true,
                        "start": 1004,
                        "end": 1006
                      }
                    ],
                    "expressions": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "name",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1000,
                        "end": 1004
                      }
                    ],
                    "start": 969,
                    "end": 1006
                  },
                  "start": 962,
                  "end": 1006
                }
              ],
              "start": 883,
              "end": 1008
            },
            "expression": false,
            "start": 865,
            "end": 1008
          },
          "definite": false,
          "start": 827,
          "end": 1008
        }
      ],
      "declare": false,
      "start": 821,
      "end": 1008
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 57,
  "end": 1009
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Identifier",
    "value": "type",
    "start": 57,
    "end": 61
  },
  {
    "type": "Identifier",
    "value": "SyncSequenceFactory",
    "start": 62,
    "end": 81
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 82,
    "end": 83
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 84,
    "end": 85
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 85,
    "end": 86
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 87,
    "end": 89
  },
  {
    "type": "Identifier",
    "value": "Generator",
    "start": 90,
    "end": 99
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 99,
    "end": 100
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 100,
    "end": 106
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 106,
    "end": 107
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 108,
    "end": 114
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 114,
    "end": 115
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 116,
    "end": 122
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 122,
    "end": 123
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 123,
    "end": 124
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 126,
    "end": 130
  },
  {
    "type": "Identifier",
    "value": "AsyncSequenceFactory",
    "start": 131,
    "end": 151
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 152,
    "end": 153
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 154,
    "end": 155
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 155,
    "end": 156
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 157,
    "end": 159
  },
  {
    "type": "Identifier",
    "value": "AsyncGenerator",
    "start": 160,
    "end": 174
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 174,
    "end": 175
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 175,
    "end": 181
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 181,
    "end": 182
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 183,
    "end": 189
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 189,
    "end": 190
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 191,
    "end": 197
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 197,
    "end": 198
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 198,
    "end": 199
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 201,
    "end": 205
  },
  {
    "type": "Identifier",
    "value": "SequenceFactory",
    "start": 206,
    "end": 221
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 222,
    "end": 223
  },
  {
    "type": "Identifier",
    "value": "SyncSequenceFactory",
    "start": 224,
    "end": 243
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 244,
    "end": 245
  },
  {
    "type": "Identifier",
    "value": "AsyncSequenceFactory",
    "start": 246,
    "end": 266
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 268,
    "end": 273
  },
  {
    "type": "Identifier",
    "value": "syncFactory",
    "start": 274,
    "end": 285
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 285,
    "end": 286
  },
  {
    "type": "Identifier",
    "value": "SyncSequenceFactory",
    "start": 287,
    "end": 306
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 307,
    "end": 308
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 309,
    "end": 317
  },
  {
    "type": "Punctuator",
    "value": "*",
    "start": 317,
    "end": 318
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 319,
    "end": 320
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 320,
    "end": 321
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 321,
    "end": 322
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 325,
    "end": 328
  },
  {
    "type": "Identifier",
    "value": "name",
    "start": 329,
    "end": 333
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 334,
    "end": 335
  },
  {
    "type": "String",
    "value": "\"\"",
    "start": 336,
    "end": 338
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 338,
    "end": 339
  },
  {
    "type": "Keyword",
    "value": "while",
    "start": 342,
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
    "value": "!",
    "start": 348,
    "end": 349
  },
  {
    "type": "Identifier",
    "value": "name",
    "start": 349,
    "end": 353
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 353,
    "end": 354
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 354,
    "end": 355
  },
  {
    "type": "Identifier",
    "value": "name",
    "start": 360,
    "end": 364
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 365,
    "end": 366
  },
  {
    "type": "Keyword",
    "value": "yield",
    "start": 367,
    "end": 372
  },
  {
    "type": "String",
    "value": "\"What is your name?\"",
    "start": 373,
    "end": 393
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 396,
    "end": 397
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 400,
    "end": 406
  },
  {
    "type": "Template",
    "value": "`That's the end of the game, ${",
    "start": 407,
    "end": 438
  },
  {
    "type": "Identifier",
    "value": "name",
    "start": 438,
    "end": 442
  },
  {
    "type": "Template",
    "value": "}`",
    "start": 442,
    "end": 444
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 445,
    "end": 446
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 449,
    "end": 454
  },
  {
    "type": "Identifier",
    "value": "asyncFactory",
    "start": 455,
    "end": 467
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 467,
    "end": 468
  },
  {
    "type": "Identifier",
    "value": "AsyncSequenceFactory",
    "start": 469,
    "end": 489
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 490,
    "end": 491
  },
  {
    "type": "Identifier",
    "value": "async",
    "start": 492,
    "end": 497
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 498,
    "end": 506
  },
  {
    "type": "Punctuator",
    "value": "*",
    "start": 506,
    "end": 507
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 508,
    "end": 509
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 509,
    "end": 510
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 510,
    "end": 511
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 514,
    "end": 517
  },
  {
    "type": "Identifier",
    "value": "name",
    "start": 518,
    "end": 522
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 523,
    "end": 524
  },
  {
    "type": "String",
    "value": "\"\"",
    "start": 525,
    "end": 527
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 527,
    "end": 528
  },
  {
    "type": "Keyword",
    "value": "while",
    "start": 531,
    "end": 536
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 536,
    "end": 537
  },
  {
    "type": "Punctuator",
    "value": "!",
    "start": 537,
    "end": 538
  },
  {
    "type": "Identifier",
    "value": "name",
    "start": 538,
    "end": 542
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 542,
    "end": 543
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 543,
    "end": 544
  },
  {
    "type": "Identifier",
    "value": "name",
    "start": 549,
    "end": 553
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 554,
    "end": 555
  },
  {
    "type": "Keyword",
    "value": "yield",
    "start": 556,
    "end": 561
  },
  {
    "type": "String",
    "value": "\"What is your name?\"",
    "start": 562,
    "end": 582
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 585,
    "end": 586
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 589,
    "end": 595
  },
  {
    "type": "Template",
    "value": "`That's the end of the game, ${",
    "start": 596,
    "end": 627
  },
  {
    "type": "Identifier",
    "value": "name",
    "start": 627,
    "end": 631
  },
  {
    "type": "Template",
    "value": "}`",
    "start": 631,
    "end": 633
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 634,
    "end": 635
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 638,
    "end": 643
  },
  {
    "type": "Identifier",
    "value": "looserSyncFactory",
    "start": 644,
    "end": 661
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 661,
    "end": 662
  },
  {
    "type": "Identifier",
    "value": "SequenceFactory",
    "start": 663,
    "end": 678
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 679,
    "end": 680
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 681,
    "end": 689
  },
  {
    "type": "Punctuator",
    "value": "*",
    "start": 689,
    "end": 690
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 691,
    "end": 692
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 692,
    "end": 693
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 693,
    "end": 694
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 697,
    "end": 700
  },
  {
    "type": "Identifier",
    "value": "name",
    "start": 701,
    "end": 705
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 706,
    "end": 707
  },
  {
    "type": "String",
    "value": "\"\"",
    "start": 708,
    "end": 710
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 710,
    "end": 711
  },
  {
    "type": "Keyword",
    "value": "while",
    "start": 714,
    "end": 719
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 719,
    "end": 720
  },
  {
    "type": "Punctuator",
    "value": "!",
    "start": 720,
    "end": 721
  },
  {
    "type": "Identifier",
    "value": "name",
    "start": 721,
    "end": 725
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 725,
    "end": 726
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 726,
    "end": 727
  },
  {
    "type": "Identifier",
    "value": "name",
    "start": 732,
    "end": 736
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 737,
    "end": 738
  },
  {
    "type": "Keyword",
    "value": "yield",
    "start": 739,
    "end": 744
  },
  {
    "type": "String",
    "value": "\"What is your name?\"",
    "start": 745,
    "end": 765
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 768,
    "end": 769
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 772,
    "end": 778
  },
  {
    "type": "Template",
    "value": "`That's the end of the game, ${",
    "start": 779,
    "end": 810
  },
  {
    "type": "Identifier",
    "value": "name",
    "start": 810,
    "end": 814
  },
  {
    "type": "Template",
    "value": "}`",
    "start": 814,
    "end": 816
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 817,
    "end": 818
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 821,
    "end": 826
  },
  {
    "type": "Identifier",
    "value": "looserAsyncFactory",
    "start": 827,
    "end": 845
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 845,
    "end": 846
  },
  {
    "type": "Identifier",
    "value": "SequenceFactory",
    "start": 847,
    "end": 862
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 863,
    "end": 864
  },
  {
    "type": "Identifier",
    "value": "async",
    "start": 865,
    "end": 870
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 871,
    "end": 879
  },
  {
    "type": "Punctuator",
    "value": "*",
    "start": 879,
    "end": 880
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 881,
    "end": 882
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 882,
    "end": 883
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 883,
    "end": 884
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 887,
    "end": 890
  },
  {
    "type": "Identifier",
    "value": "name",
    "start": 891,
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
    "value": "\"\"",
    "start": 898,
    "end": 900
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 900,
    "end": 901
  },
  {
    "type": "Keyword",
    "value": "while",
    "start": 904,
    "end": 909
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 909,
    "end": 910
  },
  {
    "type": "Punctuator",
    "value": "!",
    "start": 910,
    "end": 911
  },
  {
    "type": "Identifier",
    "value": "name",
    "start": 911,
    "end": 915
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 915,
    "end": 916
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 916,
    "end": 917
  },
  {
    "type": "Identifier",
    "value": "name",
    "start": 922,
    "end": 926
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 927,
    "end": 928
  },
  {
    "type": "Keyword",
    "value": "yield",
    "start": 929,
    "end": 934
  },
  {
    "type": "String",
    "value": "\"What is your name?\"",
    "start": 935,
    "end": 955
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 958,
    "end": 959
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 962,
    "end": 968
  },
  {
    "type": "Template",
    "value": "`That's the end of the game, ${",
    "start": 969,
    "end": 1000
  },
  {
    "type": "Identifier",
    "value": "name",
    "start": 1000,
    "end": 1004
  },
  {
    "type": "Template",
    "value": "}`",
    "start": 1004,
    "end": 1006
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1007,
    "end": 1008
  }
]
```
