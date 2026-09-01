__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Timer",
        "optional": false,
        "typeAnnotation": null,
        "start": 44,
        "end": 49
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "timeout",
          "optional": false,
          "typeAnnotation": null,
          "start": 50,
          "end": 57
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "MemberExpression",
                "object": {
                  "type": "ThisExpression",
                  "start": 65,
                  "end": 69
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "timeout",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 70,
                  "end": 77
                },
                "optional": false,
                "computed": false,
                "start": 65,
                "end": 77
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "timeout",
                "optional": false,
                "typeAnnotation": null,
                "start": 80,
                "end": 87
              },
              "start": 65,
              "end": 87
            },
            "directive": null,
            "start": 65,
            "end": 88
          }
        ],
        "start": 59,
        "end": 90
      },
      "expression": false,
      "start": 35,
      "end": 90
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "module",
            "optional": false,
            "typeAnnotation": null,
            "start": 91,
            "end": 97
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "exports",
            "optional": false,
            "typeAnnotation": null,
            "start": 98,
            "end": 105
          },
          "optional": false,
          "computed": false,
          "start": 91,
          "end": 105
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "Timer",
          "optional": false,
          "typeAnnotation": null,
          "start": 108,
          "end": 113
        },
        "start": 91,
        "end": 113
      },
      "directive": null,
      "start": 91,
      "end": 114
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 35,
  "end": 114
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "function",
    "start": 35,
    "end": 43
  },
  {
    "type": "Identifier",
    "value": "Timer",
    "start": 44,
    "end": 49
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 49,
    "end": 50
  },
  {
    "type": "Identifier",
    "value": "timeout",
    "start": 50,
    "end": 57
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 57,
    "end": 58
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 59,
    "end": 60
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 65,
    "end": 69
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 69,
    "end": 70
  },
  {
    "type": "Identifier",
    "value": "timeout",
    "start": 70,
    "end": 77
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 78,
    "end": 79
  },
  {
    "type": "Identifier",
    "value": "timeout",
    "start": 80,
    "end": 87
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 87,
    "end": 88
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 89,
    "end": 90
  },
  {
    "type": "Identifier",
    "value": "module",
    "start": 91,
    "end": 97
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 97,
    "end": 98
  },
  {
    "type": "Identifier",
    "value": "exports",
    "start": 98,
    "end": 105
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 106,
    "end": 107
  },
  {
    "type": "Identifier",
    "value": "Timer",
    "start": 108,
    "end": 113
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 113,
    "end": 114
  }
]
```
__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Hook",
        "optional": false,
        "typeAnnotation": null,
        "start": 117,
        "end": 121
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "handle",
          "optional": false,
          "typeAnnotation": null,
          "start": 122,
          "end": 128
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "MemberExpression",
                "object": {
                  "type": "ThisExpression",
                  "start": 136,
                  "end": 140
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "handle",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 141,
                  "end": 147
                },
                "optional": false,
                "computed": false,
                "start": 136,
                "end": 147
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "handle",
                "optional": false,
                "typeAnnotation": null,
                "start": 150,
                "end": 156
              },
              "start": 136,
              "end": 156
            },
            "directive": null,
            "start": 136,
            "end": 157
          }
        ],
        "start": 130,
        "end": 159
      },
      "expression": false,
      "start": 108,
      "end": 159
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "module",
            "optional": false,
            "typeAnnotation": null,
            "start": 160,
            "end": 166
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "exports",
            "optional": false,
            "typeAnnotation": null,
            "start": 167,
            "end": 174
          },
          "optional": false,
          "computed": false,
          "start": 160,
          "end": 174
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "Hook",
          "optional": false,
          "typeAnnotation": null,
          "start": 177,
          "end": 181
        },
        "start": 160,
        "end": 181
      },
      "directive": null,
      "start": 160,
      "end": 182
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 108,
  "end": 183
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "function",
    "start": 108,
    "end": 116
  },
  {
    "type": "Identifier",
    "value": "Hook",
    "start": 117,
    "end": 121
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 121,
    "end": 122
  },
  {
    "type": "Identifier",
    "value": "handle",
    "start": 122,
    "end": 128
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 128,
    "end": 129
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 130,
    "end": 131
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 136,
    "end": 140
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 140,
    "end": 141
  },
  {
    "type": "Identifier",
    "value": "handle",
    "start": 141,
    "end": 147
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 148,
    "end": 149
  },
  {
    "type": "Identifier",
    "value": "handle",
    "start": 150,
    "end": 156
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 156,
    "end": 157
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 158,
    "end": 159
  },
  {
    "type": "Identifier",
    "value": "module",
    "start": 160,
    "end": 166
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 166,
    "end": 167
  },
  {
    "type": "Identifier",
    "value": "exports",
    "start": 167,
    "end": 174
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 175,
    "end": 176
  },
  {
    "type": "Identifier",
    "value": "Hook",
    "start": 177,
    "end": 181
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 181,
    "end": 182
  }
]
```
__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Context",
        "optional": false,
        "typeAnnotation": null,
        "start": 441,
        "end": 448
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "input",
          "optional": false,
          "typeAnnotation": null,
          "start": 449,
          "end": 454
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "IfStatement",
            "test": {
              "type": "UnaryExpression",
              "operator": "!",
              "argument": {
                "type": "BinaryExpression",
                "left": {
                  "type": "ThisExpression",
                  "start": 468,
                  "end": 472
                },
                "operator": "instanceof",
                "right": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Context",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 484,
                  "end": 491
                },
                "start": 468,
                "end": 491
              },
              "prefix": true,
              "start": 466,
              "end": 492
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ReturnStatement",
                  "argument": {
                    "type": "NewExpression",
                    "callee": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Context",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 513,
                      "end": 520
                    },
                    "typeArguments": null,
                    "arguments": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "input",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 521,
                        "end": 526
                      }
                    ],
                    "start": 509,
                    "end": 527
                  },
                  "start": 502,
                  "end": 527
                }
              ],
              "start": 494,
              "end": 533
            },
            "alternate": null,
            "start": 462,
            "end": 533
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "MemberExpression",
                "object": {
                  "type": "ThisExpression",
                  "start": 538,
                  "end": 542
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "state",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 543,
                  "end": 548
                },
                "optional": false,
                "computed": false,
                "start": 538,
                "end": 548
              },
              "right": {
                "type": "CallExpression",
                "callee": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "ThisExpression",
                    "start": 551,
                    "end": 555
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "construct",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 556,
                    "end": 565
                  },
                  "optional": false,
                  "computed": false,
                  "start": 551,
                  "end": 565
                },
                "typeArguments": null,
                "arguments": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "input",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 566,
                    "end": 571
                  }
                ],
                "optional": false,
                "start": 551,
                "end": 572
              },
              "start": 538,
              "end": 572
            },
            "directive": null,
            "start": 538,
            "end": 573
          }
        ],
        "start": 456,
        "end": 575
      },
      "expression": false,
      "start": 432,
      "end": 575
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "Context",
            "optional": false,
            "typeAnnotation": null,
            "start": 576,
            "end": 583
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "prototype",
            "optional": false,
            "typeAnnotation": null,
            "start": 584,
            "end": 593
          },
          "optional": false,
          "computed": false,
          "start": 576,
          "end": 593
        },
        "right": {
          "type": "ObjectExpression",
          "properties": [
            {
              "type": "Property",
              "kind": "init",
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "construct",
                "optional": false,
                "typeAnnotation": null,
                "start": 706,
                "end": 715
              },
              "value": {
                "type": "FunctionExpression",
                "id": null,
                "generator": false,
                "async": false,
                "declare": false,
                "typeParameters": null,
                "params": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "input",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 716,
                    "end": 721
                  },
                  {
                    "type": "AssignmentPattern",
                    "decorators": [],
                    "left": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "handle",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 723,
                      "end": 729
                    },
                    "right": {
                      "type": "ArrowFunctionExpression",
                      "expression": true,
                      "async": false,
                      "typeParameters": null,
                      "params": [],
                      "returnType": null,
                      "body": {
                        "type": "UnaryExpression",
                        "operator": "void",
                        "argument": {
                          "type": "Literal",
                          "value": 0,
                          "raw": "0",
                          "start": 743,
                          "end": 744
                        },
                        "prefix": true,
                        "start": 738,
                        "end": 744
                      },
                      "id": null,
                      "generator": false,
                      "start": 732,
                      "end": 744
                    },
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 723,
                    "end": 744
                  }
                ],
                "returnType": null,
                "body": {
                  "type": "BlockStatement",
                  "body": [
                    {
                      "type": "ReturnStatement",
                      "argument": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "input",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 763,
                        "end": 768
                      },
                      "start": 756,
                      "end": 769
                    }
                  ],
                  "start": 746,
                  "end": 775
                },
                "expression": false,
                "start": 715,
                "end": 775
              },
              "method": true,
              "shorthand": false,
              "computed": false,
              "optional": false,
              "start": 706,
              "end": 775
            }
          ],
          "start": 596,
          "end": 777
        },
        "start": 576,
        "end": 777
      },
      "directive": null,
      "start": 576,
      "end": 777
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "module",
            "optional": false,
            "typeAnnotation": null,
            "start": 778,
            "end": 784
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "exports",
            "optional": false,
            "typeAnnotation": null,
            "start": 785,
            "end": 792
          },
          "optional": false,
          "computed": false,
          "start": 778,
          "end": 792
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "Context",
          "optional": false,
          "typeAnnotation": null,
          "start": 795,
          "end": 802
        },
        "start": 778,
        "end": 802
      },
      "directive": null,
      "start": 778,
      "end": 803
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 432,
  "end": 803
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "function",
    "start": 432,
    "end": 440
  },
  {
    "type": "Identifier",
    "value": "Context",
    "start": 441,
    "end": 448
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 448,
    "end": 449
  },
  {
    "type": "Identifier",
    "value": "input",
    "start": 449,
    "end": 454
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 454,
    "end": 455
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 456,
    "end": 457
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 462,
    "end": 464
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 465,
    "end": 466
  },
  {
    "type": "Punctuator",
    "value": "!",
    "start": 466,
    "end": 467
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 467,
    "end": 468
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 468,
    "end": 472
  },
  {
    "type": "Keyword",
    "value": "instanceof",
    "start": 473,
    "end": 483
  },
  {
    "type": "Identifier",
    "value": "Context",
    "start": 484,
    "end": 491
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 491,
    "end": 492
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 492,
    "end": 493
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 494,
    "end": 495
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 502,
    "end": 508
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 509,
    "end": 512
  },
  {
    "type": "Identifier",
    "value": "Context",
    "start": 513,
    "end": 520
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 520,
    "end": 521
  },
  {
    "type": "Identifier",
    "value": "input",
    "start": 521,
    "end": 526
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 526,
    "end": 527
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 532,
    "end": 533
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 538,
    "end": 542
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 542,
    "end": 543
  },
  {
    "type": "Identifier",
    "value": "state",
    "start": 543,
    "end": 548
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 549,
    "end": 550
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 551,
    "end": 555
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 555,
    "end": 556
  },
  {
    "type": "Identifier",
    "value": "construct",
    "start": 556,
    "end": 565
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 565,
    "end": 566
  },
  {
    "type": "Identifier",
    "value": "input",
    "start": 566,
    "end": 571
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 571,
    "end": 572
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 572,
    "end": 573
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 574,
    "end": 575
  },
  {
    "type": "Identifier",
    "value": "Context",
    "start": 576,
    "end": 583
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 583,
    "end": 584
  },
  {
    "type": "Identifier",
    "value": "prototype",
    "start": 584,
    "end": 593
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 594,
    "end": 595
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 596,
    "end": 597
  },
  {
    "type": "Identifier",
    "value": "construct",
    "start": 706,
    "end": 715
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 715,
    "end": 716
  },
  {
    "type": "Identifier",
    "value": "input",
    "start": 716,
    "end": 721
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 721,
    "end": 722
  },
  {
    "type": "Identifier",
    "value": "handle",
    "start": 723,
    "end": 729
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 730,
    "end": 731
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 732,
    "end": 733
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 733,
    "end": 734
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 735,
    "end": 737
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 738,
    "end": 742
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 743,
    "end": 744
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 744,
    "end": 745
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 746,
    "end": 747
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 756,
    "end": 762
  },
  {
    "type": "Identifier",
    "value": "input",
    "start": 763,
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
    "start": 774,
    "end": 775
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 776,
    "end": 777
  },
  {
    "type": "Identifier",
    "value": "module",
    "start": 778,
    "end": 784
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 784,
    "end": 785
  },
  {
    "type": "Identifier",
    "value": "exports",
    "start": 785,
    "end": 792
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 793,
    "end": 794
  },
  {
    "type": "Identifier",
    "value": "Context",
    "start": 795,
    "end": 802
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 802,
    "end": 803
  }
]
```
