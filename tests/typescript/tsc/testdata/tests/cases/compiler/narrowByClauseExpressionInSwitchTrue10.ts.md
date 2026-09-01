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
        "name": "foo",
        "optional": false,
        "typeAnnotation": null,
        "start": 9,
        "end": 12
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "cond1",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSBooleanKeyword",
              "start": 20,
              "end": 27
            },
            "start": 18,
            "end": 27
          },
          "start": 13,
          "end": 27
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "cond2",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSBooleanKeyword",
              "start": 36,
              "end": 43
            },
            "start": 34,
            "end": 43
          },
          "start": 29,
          "end": 43
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "SwitchStatement",
            "discriminant": {
              "type": "Literal",
              "value": true,
              "raw": "true",
              "start": 59,
              "end": 63
            },
            "cases": [
              {
                "type": "SwitchCase",
                "test": {
                  "type": "LogicalExpression",
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "cond1",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 80,
                    "end": 85
                  },
                  "operator": "||",
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "cond2",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 89,
                    "end": 94
                  },
                  "start": 80,
                  "end": 94
                },
                "consequent": [
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "cond1",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 108,
                      "end": 113
                    },
                    "directive": null,
                    "start": 108,
                    "end": 114
                  },
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "cond2",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 157,
                      "end": 162
                    },
                    "directive": null,
                    "start": 157,
                    "end": 163
                  },
                  {
                    "type": "BreakStatement",
                    "label": null,
                    "start": 206,
                    "end": 212
                  }
                ],
                "start": 75,
                "end": 212
              },
              {
                "type": "SwitchCase",
                "test": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "cond2",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 227,
                  "end": 232
                },
                "consequent": [
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "cond1",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 246,
                      "end": 251
                    },
                    "directive": null,
                    "start": 246,
                    "end": 252
                  },
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "cond2",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 293,
                      "end": 298
                    },
                    "directive": null,
                    "start": 293,
                    "end": 299
                  },
                  {
                    "type": "EmptyStatement",
                    "start": 299,
                    "end": 300
                  },
                  {
                    "type": "BreakStatement",
                    "label": null,
                    "start": 341,
                    "end": 347
                  }
                ],
                "start": 222,
                "end": 347
              },
              {
                "type": "SwitchCase",
                "test": null,
                "consequent": [
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "cond1",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 378,
                      "end": 383
                    },
                    "directive": null,
                    "start": 378,
                    "end": 384
                  },
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "cond2",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 425,
                      "end": 430
                    },
                    "directive": null,
                    "start": 425,
                    "end": 431
                  },
                  {
                    "type": "BreakStatement",
                    "label": null,
                    "start": 472,
                    "end": 478
                  }
                ],
                "start": 357,
                "end": 478
              }
            ],
            "start": 51,
            "end": 484
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "Identifier",
              "decorators": [],
              "name": "cond1",
              "optional": false,
              "typeAnnotation": null,
              "start": 490,
              "end": 495
            },
            "directive": null,
            "start": 490,
            "end": 496
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "Identifier",
              "decorators": [],
              "name": "cond2",
              "optional": false,
              "typeAnnotation": null,
              "start": 523,
              "end": 528
            },
            "directive": null,
            "start": 523,
            "end": 529
          }
        ],
        "start": 45,
        "end": 553
      },
      "expression": false,
      "start": 0,
      "end": 553
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "blah",
        "optional": false,
        "typeAnnotation": null,
        "start": 564,
        "end": 568
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "cond1",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSBooleanKeyword",
              "start": 576,
              "end": 583
            },
            "start": 574,
            "end": 583
          },
          "start": 569,
          "end": 583
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "cond2",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSBooleanKeyword",
              "start": 592,
              "end": 599
            },
            "start": 590,
            "end": 599
          },
          "start": 585,
          "end": 599
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "IfStatement",
            "test": {
              "type": "LogicalExpression",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "cond1",
                "optional": false,
                "typeAnnotation": null,
                "start": 611,
                "end": 616
              },
              "operator": "||",
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "cond2",
                "optional": false,
                "typeAnnotation": null,
                "start": 620,
                "end": 625
              },
              "start": 611,
              "end": 625
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "cond1",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 637,
                    "end": 642
                  },
                  "directive": null,
                  "start": 637,
                  "end": 643
                },
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "cond2",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 678,
                    "end": 683
                  },
                  "directive": null,
                  "start": 678,
                  "end": 684
                }
              ],
              "start": 627,
              "end": 716
            },
            "alternate": {
              "type": "IfStatement",
              "test": {
                "type": "Identifier",
                "decorators": [],
                "name": "cond2",
                "optional": false,
                "typeAnnotation": null,
                "start": 726,
                "end": 731
              },
              "consequent": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "cond1",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 743,
                      "end": 748
                    },
                    "directive": null,
                    "start": 743,
                    "end": 749
                  },
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "cond2",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 782,
                      "end": 787
                    },
                    "directive": null,
                    "start": 782,
                    "end": 788
                  }
                ],
                "start": 733,
                "end": 818
              },
              "alternate": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "cond1",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 834,
                      "end": 839
                    },
                    "directive": null,
                    "start": 834,
                    "end": 840
                  },
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "cond2",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 873,
                      "end": 878
                    },
                    "directive": null,
                    "start": 873,
                    "end": 879
                  }
                ],
                "start": 824,
                "end": 909
              },
              "start": 722,
              "end": 909
            },
            "start": 607,
            "end": 909
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "Identifier",
              "decorators": [],
              "name": "cond1",
              "optional": false,
              "typeAnnotation": null,
              "start": 915,
              "end": 920
            },
            "directive": null,
            "start": 915,
            "end": 921
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "Identifier",
              "decorators": [],
              "name": "cond2",
              "optional": false,
              "typeAnnotation": null,
              "start": 948,
              "end": 953
            },
            "directive": null,
            "start": 948,
            "end": 954
          }
        ],
        "start": 601,
        "end": 978
      },
      "expression": false,
      "start": 555,
      "end": 978
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 978
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "function",
    "start": 0,
    "end": 8
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 9,
    "end": 12
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 12,
    "end": 13
  },
  {
    "type": "Identifier",
    "value": "cond1",
    "start": 13,
    "end": 18
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 18,
    "end": 19
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 20,
    "end": 27
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 27,
    "end": 28
  },
  {
    "type": "Identifier",
    "value": "cond2",
    "start": 29,
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
    "value": "boolean",
    "start": 36,
    "end": 43
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 43,
    "end": 44
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 45,
    "end": 46
  },
  {
    "type": "Keyword",
    "value": "switch",
    "start": 51,
    "end": 57
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 58,
    "end": 59
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 59,
    "end": 63
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 63,
    "end": 64
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 65,
    "end": 66
  },
  {
    "type": "Keyword",
    "value": "case",
    "start": 75,
    "end": 79
  },
  {
    "type": "Identifier",
    "value": "cond1",
    "start": 80,
    "end": 85
  },
  {
    "type": "Punctuator",
    "value": "||",
    "start": 86,
    "end": 88
  },
  {
    "type": "Identifier",
    "value": "cond2",
    "start": 89,
    "end": 94
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 94,
    "end": 95
  },
  {
    "type": "Identifier",
    "value": "cond1",
    "start": 108,
    "end": 113
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 113,
    "end": 114
  },
  {
    "type": "Identifier",
    "value": "cond2",
    "start": 157,
    "end": 162
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 162,
    "end": 163
  },
  {
    "type": "Keyword",
    "value": "break",
    "start": 206,
    "end": 211
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 211,
    "end": 212
  },
  {
    "type": "Keyword",
    "value": "case",
    "start": 222,
    "end": 226
  },
  {
    "type": "Identifier",
    "value": "cond2",
    "start": 227,
    "end": 232
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 232,
    "end": 233
  },
  {
    "type": "Identifier",
    "value": "cond1",
    "start": 246,
    "end": 251
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 251,
    "end": 252
  },
  {
    "type": "Identifier",
    "value": "cond2",
    "start": 293,
    "end": 298
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 298,
    "end": 299
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 299,
    "end": 300
  },
  {
    "type": "Keyword",
    "value": "break",
    "start": 341,
    "end": 346
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 346,
    "end": 347
  },
  {
    "type": "Keyword",
    "value": "default",
    "start": 357,
    "end": 364
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 364,
    "end": 365
  },
  {
    "type": "Identifier",
    "value": "cond1",
    "start": 378,
    "end": 383
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 383,
    "end": 384
  },
  {
    "type": "Identifier",
    "value": "cond2",
    "start": 425,
    "end": 430
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 430,
    "end": 431
  },
  {
    "type": "Keyword",
    "value": "break",
    "start": 472,
    "end": 477
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 477,
    "end": 478
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 483,
    "end": 484
  },
  {
    "type": "Identifier",
    "value": "cond1",
    "start": 490,
    "end": 495
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 495,
    "end": 496
  },
  {
    "type": "Identifier",
    "value": "cond2",
    "start": 523,
    "end": 528
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 528,
    "end": 529
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 552,
    "end": 553
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 555,
    "end": 563
  },
  {
    "type": "Identifier",
    "value": "blah",
    "start": 564,
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
    "value": "cond1",
    "start": 569,
    "end": 574
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 574,
    "end": 575
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 576,
    "end": 583
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 583,
    "end": 584
  },
  {
    "type": "Identifier",
    "value": "cond2",
    "start": 585,
    "end": 590
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 590,
    "end": 591
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 592,
    "end": 599
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 599,
    "end": 600
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 601,
    "end": 602
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 607,
    "end": 609
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 610,
    "end": 611
  },
  {
    "type": "Identifier",
    "value": "cond1",
    "start": 611,
    "end": 616
  },
  {
    "type": "Punctuator",
    "value": "||",
    "start": 617,
    "end": 619
  },
  {
    "type": "Identifier",
    "value": "cond2",
    "start": 620,
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
    "value": "{",
    "start": 627,
    "end": 628
  },
  {
    "type": "Identifier",
    "value": "cond1",
    "start": 637,
    "end": 642
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 642,
    "end": 643
  },
  {
    "type": "Identifier",
    "value": "cond2",
    "start": 678,
    "end": 683
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 683,
    "end": 684
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 715,
    "end": 716
  },
  {
    "type": "Keyword",
    "value": "else",
    "start": 717,
    "end": 721
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 722,
    "end": 724
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 725,
    "end": 726
  },
  {
    "type": "Identifier",
    "value": "cond2",
    "start": 726,
    "end": 731
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 731,
    "end": 732
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 733,
    "end": 734
  },
  {
    "type": "Identifier",
    "value": "cond1",
    "start": 743,
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
    "value": "cond2",
    "start": 782,
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
    "start": 817,
    "end": 818
  },
  {
    "type": "Keyword",
    "value": "else",
    "start": 819,
    "end": 823
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 824,
    "end": 825
  },
  {
    "type": "Identifier",
    "value": "cond1",
    "start": 834,
    "end": 839
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 839,
    "end": 840
  },
  {
    "type": "Identifier",
    "value": "cond2",
    "start": 873,
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
    "start": 908,
    "end": 909
  },
  {
    "type": "Identifier",
    "value": "cond1",
    "start": 915,
    "end": 920
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 920,
    "end": 921
  },
  {
    "type": "Identifier",
    "value": "cond2",
    "start": 948,
    "end": 953
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 953,
    "end": 954
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 977,
    "end": 978
  }
]
```
