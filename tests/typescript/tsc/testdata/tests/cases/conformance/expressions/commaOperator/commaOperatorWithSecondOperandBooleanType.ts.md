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
            "name": "ANY",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 9,
                "end": 12
              },
              "start": 7,
              "end": 12
            },
            "start": 4,
            "end": 12
          },
          "init": null,
          "definite": false,
          "start": 4,
          "end": 12
        }
      ],
      "declare": false,
      "start": 0,
      "end": 13
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
            "name": "BOOLEAN",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSBooleanKeyword",
                "start": 27,
                "end": 34
              },
              "start": 25,
              "end": 34
            },
            "start": 18,
            "end": 34
          },
          "init": null,
          "definite": false,
          "start": 18,
          "end": 34
        }
      ],
      "declare": false,
      "start": 14,
      "end": 35
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
            "name": "NUMBER",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 48,
                "end": 54
              },
              "start": 46,
              "end": 54
            },
            "start": 40,
            "end": 54
          },
          "init": null,
          "definite": false,
          "start": 40,
          "end": 54
        }
      ],
      "declare": false,
      "start": 36,
      "end": 55
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
            "name": "STRING",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 68,
                "end": 74
              },
              "start": 66,
              "end": 74
            },
            "start": 60,
            "end": 74
          },
          "init": null,
          "definite": false,
          "start": 60,
          "end": 74
        }
      ],
      "declare": false,
      "start": 56,
      "end": 75
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
            "name": "OBJECT",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Object",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 88,
                  "end": 94
                },
                "typeArguments": null,
                "start": 88,
                "end": 94
              },
              "start": 86,
              "end": 94
            },
            "start": 80,
            "end": 94
          },
          "init": null,
          "definite": false,
          "start": 80,
          "end": 94
        }
      ],
      "declare": false,
      "start": 76,
      "end": 95
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "SequenceExpression",
        "expressions": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "ANY",
            "optional": false,
            "typeAnnotation": null,
            "start": 134,
            "end": 137
          },
          {
            "type": "Identifier",
            "decorators": [],
            "name": "BOOLEAN",
            "optional": false,
            "typeAnnotation": null,
            "start": 139,
            "end": 146
          }
        ],
        "start": 134,
        "end": 146
      },
      "directive": null,
      "start": 134,
      "end": 147
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "SequenceExpression",
        "expressions": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "BOOLEAN",
            "optional": false,
            "typeAnnotation": null,
            "start": 148,
            "end": 155
          },
          {
            "type": "Identifier",
            "decorators": [],
            "name": "BOOLEAN",
            "optional": false,
            "typeAnnotation": null,
            "start": 157,
            "end": 164
          }
        ],
        "start": 148,
        "end": 164
      },
      "directive": null,
      "start": 148,
      "end": 165
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "SequenceExpression",
        "expressions": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "NUMBER",
            "optional": false,
            "typeAnnotation": null,
            "start": 166,
            "end": 172
          },
          {
            "type": "Identifier",
            "decorators": [],
            "name": "BOOLEAN",
            "optional": false,
            "typeAnnotation": null,
            "start": 174,
            "end": 181
          }
        ],
        "start": 166,
        "end": 181
      },
      "directive": null,
      "start": 166,
      "end": 182
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "SequenceExpression",
        "expressions": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "STRING",
            "optional": false,
            "typeAnnotation": null,
            "start": 183,
            "end": 189
          },
          {
            "type": "Identifier",
            "decorators": [],
            "name": "BOOLEAN",
            "optional": false,
            "typeAnnotation": null,
            "start": 191,
            "end": 198
          }
        ],
        "start": 183,
        "end": 198
      },
      "directive": null,
      "start": 183,
      "end": 199
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "SequenceExpression",
        "expressions": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "OBJECT",
            "optional": false,
            "typeAnnotation": null,
            "start": 200,
            "end": 206
          },
          {
            "type": "Identifier",
            "decorators": [],
            "name": "BOOLEAN",
            "optional": false,
            "typeAnnotation": null,
            "start": 208,
            "end": 215
          }
        ],
        "start": 200,
        "end": 215
      },
      "directive": null,
      "start": 200,
      "end": 216
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
            "name": "resultIsBoolean1",
            "optional": false,
            "typeAnnotation": null,
            "start": 247,
            "end": 263
          },
          "init": {
            "type": "SequenceExpression",
            "expressions": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "ANY",
                "optional": false,
                "typeAnnotation": null,
                "start": 267,
                "end": 270
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "BOOLEAN",
                "optional": false,
                "typeAnnotation": null,
                "start": 272,
                "end": 279
              }
            ],
            "start": 267,
            "end": 279
          },
          "definite": false,
          "start": 247,
          "end": 280
        }
      ],
      "declare": false,
      "start": 243,
      "end": 281
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
            "name": "resultIsBoolean2",
            "optional": false,
            "typeAnnotation": null,
            "start": 286,
            "end": 302
          },
          "init": {
            "type": "SequenceExpression",
            "expressions": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "BOOLEAN",
                "optional": false,
                "typeAnnotation": null,
                "start": 306,
                "end": 313
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "BOOLEAN",
                "optional": false,
                "typeAnnotation": null,
                "start": 315,
                "end": 322
              }
            ],
            "start": 306,
            "end": 322
          },
          "definite": false,
          "start": 286,
          "end": 323
        }
      ],
      "declare": false,
      "start": 282,
      "end": 324
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
            "name": "resultIsBoolean3",
            "optional": false,
            "typeAnnotation": null,
            "start": 329,
            "end": 345
          },
          "init": {
            "type": "SequenceExpression",
            "expressions": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "NUMBER",
                "optional": false,
                "typeAnnotation": null,
                "start": 349,
                "end": 355
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "BOOLEAN",
                "optional": false,
                "typeAnnotation": null,
                "start": 357,
                "end": 364
              }
            ],
            "start": 349,
            "end": 364
          },
          "definite": false,
          "start": 329,
          "end": 365
        }
      ],
      "declare": false,
      "start": 325,
      "end": 366
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
            "name": "resultIsBoolean4",
            "optional": false,
            "typeAnnotation": null,
            "start": 371,
            "end": 387
          },
          "init": {
            "type": "SequenceExpression",
            "expressions": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "STRING",
                "optional": false,
                "typeAnnotation": null,
                "start": 391,
                "end": 397
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "BOOLEAN",
                "optional": false,
                "typeAnnotation": null,
                "start": 399,
                "end": 406
              }
            ],
            "start": 391,
            "end": 406
          },
          "definite": false,
          "start": 371,
          "end": 407
        }
      ],
      "declare": false,
      "start": 367,
      "end": 408
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
            "name": "resultIsBoolean5",
            "optional": false,
            "typeAnnotation": null,
            "start": 413,
            "end": 429
          },
          "init": {
            "type": "SequenceExpression",
            "expressions": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "OBJECT",
                "optional": false,
                "typeAnnotation": null,
                "start": 433,
                "end": 439
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "BOOLEAN",
                "optional": false,
                "typeAnnotation": null,
                "start": 441,
                "end": 448
              }
            ],
            "start": 433,
            "end": 448
          },
          "definite": false,
          "start": 413,
          "end": 449
        }
      ],
      "declare": false,
      "start": 409,
      "end": 450
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "SequenceExpression",
        "expressions": [
          {
            "type": "Literal",
            "value": null,
            "raw": "null",
            "start": 477,
            "end": 481
          },
          {
            "type": "Identifier",
            "decorators": [],
            "name": "BOOLEAN",
            "optional": false,
            "typeAnnotation": null,
            "start": 483,
            "end": 490
          }
        ],
        "start": 477,
        "end": 490
      },
      "directive": null,
      "start": 477,
      "end": 491
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "SequenceExpression",
        "expressions": [
          {
            "type": "AssignmentExpression",
            "operator": "=",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "ANY",
              "optional": false,
              "typeAnnotation": null,
              "start": 492,
              "end": 495
            },
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "undefined",
              "optional": false,
              "typeAnnotation": null,
              "start": 498,
              "end": 507
            },
            "start": 492,
            "end": 507
          },
          {
            "type": "Identifier",
            "decorators": [],
            "name": "BOOLEAN",
            "optional": false,
            "typeAnnotation": null,
            "start": 509,
            "end": 516
          }
        ],
        "start": 492,
        "end": 516
      },
      "directive": null,
      "start": 492,
      "end": 517
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "SequenceExpression",
        "expressions": [
          {
            "type": "Literal",
            "value": 1,
            "raw": "1",
            "start": 518,
            "end": 519
          },
          {
            "type": "Literal",
            "value": true,
            "raw": "true",
            "start": 521,
            "end": 525
          }
        ],
        "start": 518,
        "end": 525
      },
      "directive": null,
      "start": 518,
      "end": 526
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "SequenceExpression",
        "expressions": [
          {
            "type": "UpdateExpression",
            "operator": "++",
            "prefix": true,
            "argument": {
              "type": "Identifier",
              "decorators": [],
              "name": "NUMBER",
              "optional": false,
              "typeAnnotation": null,
              "start": 529,
              "end": 535
            },
            "start": 527,
            "end": 535
          },
          {
            "type": "Literal",
            "value": true,
            "raw": "true",
            "start": 537,
            "end": 541
          }
        ],
        "start": 527,
        "end": 541
      },
      "directive": null,
      "start": 527,
      "end": 542
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "SequenceExpression",
        "expressions": [
          {
            "type": "ArrayExpression",
            "elements": [
              {
                "type": "Literal",
                "value": 1,
                "raw": "1",
                "start": 544,
                "end": 545
              },
              {
                "type": "Literal",
                "value": 2,
                "raw": "2",
                "start": 547,
                "end": 548
              },
              {
                "type": "Literal",
                "value": 3,
                "raw": "3",
                "start": 550,
                "end": 551
              }
            ],
            "start": 543,
            "end": 552
          },
          {
            "type": "UnaryExpression",
            "operator": "!",
            "argument": {
              "type": "Identifier",
              "decorators": [],
              "name": "BOOLEAN",
              "optional": false,
              "typeAnnotation": null,
              "start": 555,
              "end": 562
            },
            "prefix": true,
            "start": 554,
            "end": 562
          }
        ],
        "start": 543,
        "end": 562
      },
      "directive": null,
      "start": 543,
      "end": 563
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "SequenceExpression",
        "expressions": [
          {
            "type": "AssignmentExpression",
            "operator": "=",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "OBJECT",
              "optional": false,
              "typeAnnotation": null,
              "start": 564,
              "end": 570
            },
            "right": {
              "type": "ArrayExpression",
              "elements": [
                {
                  "type": "Literal",
                  "value": 1,
                  "raw": "1",
                  "start": 574,
                  "end": 575
                },
                {
                  "type": "Literal",
                  "value": 2,
                  "raw": "2",
                  "start": 577,
                  "end": 578
                },
                {
                  "type": "Literal",
                  "value": 3,
                  "raw": "3",
                  "start": 580,
                  "end": 581
                }
              ],
              "start": 573,
              "end": 582
            },
            "start": 564,
            "end": 582
          },
          {
            "type": "AssignmentExpression",
            "operator": "=",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "BOOLEAN",
              "optional": false,
              "typeAnnotation": null,
              "start": 584,
              "end": 591
            },
            "right": {
              "type": "Literal",
              "value": false,
              "raw": "false",
              "start": 594,
              "end": 599
            },
            "start": 584,
            "end": 599
          }
        ],
        "start": 564,
        "end": 599
      },
      "directive": null,
      "start": 564,
      "end": 600
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
            "name": "resultIsBoolean6",
            "optional": false,
            "typeAnnotation": null,
            "start": 606,
            "end": 622
          },
          "init": {
            "type": "SequenceExpression",
            "expressions": [
              {
                "type": "Literal",
                "value": null,
                "raw": "null",
                "start": 626,
                "end": 630
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "BOOLEAN",
                "optional": false,
                "typeAnnotation": null,
                "start": 632,
                "end": 639
              }
            ],
            "start": 626,
            "end": 639
          },
          "definite": false,
          "start": 606,
          "end": 640
        }
      ],
      "declare": false,
      "start": 602,
      "end": 641
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
            "name": "resultIsBoolean7",
            "optional": false,
            "typeAnnotation": null,
            "start": 646,
            "end": 662
          },
          "init": {
            "type": "SequenceExpression",
            "expressions": [
              {
                "type": "AssignmentExpression",
                "operator": "=",
                "left": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "ANY",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 666,
                  "end": 669
                },
                "right": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "undefined",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 672,
                  "end": 681
                },
                "start": 666,
                "end": 681
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "BOOLEAN",
                "optional": false,
                "typeAnnotation": null,
                "start": 683,
                "end": 690
              }
            ],
            "start": 666,
            "end": 690
          },
          "definite": false,
          "start": 646,
          "end": 691
        }
      ],
      "declare": false,
      "start": 642,
      "end": 692
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
            "name": "resultIsBoolean8",
            "optional": false,
            "typeAnnotation": null,
            "start": 697,
            "end": 713
          },
          "init": {
            "type": "SequenceExpression",
            "expressions": [
              {
                "type": "Literal",
                "value": 1,
                "raw": "1",
                "start": 717,
                "end": 718
              },
              {
                "type": "Literal",
                "value": true,
                "raw": "true",
                "start": 720,
                "end": 724
              }
            ],
            "start": 717,
            "end": 724
          },
          "definite": false,
          "start": 697,
          "end": 725
        }
      ],
      "declare": false,
      "start": 693,
      "end": 726
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
            "name": "resultIsBoolean9",
            "optional": false,
            "typeAnnotation": null,
            "start": 731,
            "end": 747
          },
          "init": {
            "type": "SequenceExpression",
            "expressions": [
              {
                "type": "UpdateExpression",
                "operator": "++",
                "prefix": true,
                "argument": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "NUMBER",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 753,
                  "end": 759
                },
                "start": 751,
                "end": 759
              },
              {
                "type": "Literal",
                "value": true,
                "raw": "true",
                "start": 761,
                "end": 765
              }
            ],
            "start": 751,
            "end": 765
          },
          "definite": false,
          "start": 731,
          "end": 766
        }
      ],
      "declare": false,
      "start": 727,
      "end": 767
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
            "name": "resultIsBoolean10",
            "optional": false,
            "typeAnnotation": null,
            "start": 772,
            "end": 789
          },
          "init": {
            "type": "SequenceExpression",
            "expressions": [
              {
                "type": "ArrayExpression",
                "elements": [
                  {
                    "type": "Literal",
                    "value": 1,
                    "raw": "1",
                    "start": 794,
                    "end": 795
                  },
                  {
                    "type": "Literal",
                    "value": 2,
                    "raw": "2",
                    "start": 797,
                    "end": 798
                  },
                  {
                    "type": "Literal",
                    "value": 3,
                    "raw": "3",
                    "start": 800,
                    "end": 801
                  }
                ],
                "start": 793,
                "end": 802
              },
              {
                "type": "UnaryExpression",
                "operator": "!",
                "argument": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "BOOLEAN",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 805,
                  "end": 812
                },
                "prefix": true,
                "start": 804,
                "end": 812
              }
            ],
            "start": 793,
            "end": 812
          },
          "definite": false,
          "start": 772,
          "end": 813
        }
      ],
      "declare": false,
      "start": 768,
      "end": 814
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
            "name": "resultIsBoolean11",
            "optional": false,
            "typeAnnotation": null,
            "start": 819,
            "end": 836
          },
          "init": {
            "type": "SequenceExpression",
            "expressions": [
              {
                "type": "AssignmentExpression",
                "operator": "=",
                "left": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "OBJECT",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 840,
                  "end": 846
                },
                "right": {
                  "type": "ArrayExpression",
                  "elements": [
                    {
                      "type": "Literal",
                      "value": 1,
                      "raw": "1",
                      "start": 850,
                      "end": 851
                    },
                    {
                      "type": "Literal",
                      "value": 2,
                      "raw": "2",
                      "start": 853,
                      "end": 854
                    },
                    {
                      "type": "Literal",
                      "value": 3,
                      "raw": "3",
                      "start": 856,
                      "end": 857
                    }
                  ],
                  "start": 849,
                  "end": 858
                },
                "start": 840,
                "end": 858
              },
              {
                "type": "AssignmentExpression",
                "operator": "=",
                "left": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "BOOLEAN",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 860,
                  "end": 867
                },
                "right": {
                  "type": "Literal",
                  "value": false,
                  "raw": "false",
                  "start": 870,
                  "end": 875
                },
                "start": 860,
                "end": 875
              }
            ],
            "start": 840,
            "end": 875
          },
          "definite": false,
          "start": 819,
          "end": 876
        }
      ],
      "declare": false,
      "start": 815,
      "end": 877
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 877
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "var",
    "start": 0,
    "end": 3
  },
  {
    "type": "Identifier",
    "value": "ANY",
    "start": 4,
    "end": 7
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 7,
    "end": 8
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 9,
    "end": 12
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 12,
    "end": 13
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 14,
    "end": 17
  },
  {
    "type": "Identifier",
    "value": "BOOLEAN",
    "start": 18,
    "end": 25
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 25,
    "end": 26
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 27,
    "end": 34
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 34,
    "end": 35
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 36,
    "end": 39
  },
  {
    "type": "Identifier",
    "value": "NUMBER",
    "start": 40,
    "end": 46
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 46,
    "end": 47
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 48,
    "end": 54
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 54,
    "end": 55
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 56,
    "end": 59
  },
  {
    "type": "Identifier",
    "value": "STRING",
    "start": 60,
    "end": 66
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 66,
    "end": 67
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 68,
    "end": 74
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 74,
    "end": 75
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 76,
    "end": 79
  },
  {
    "type": "Identifier",
    "value": "OBJECT",
    "start": 80,
    "end": 86
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 86,
    "end": 87
  },
  {
    "type": "Identifier",
    "value": "Object",
    "start": 88,
    "end": 94
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 94,
    "end": 95
  },
  {
    "type": "Identifier",
    "value": "ANY",
    "start": 134,
    "end": 137
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 137,
    "end": 138
  },
  {
    "type": "Identifier",
    "value": "BOOLEAN",
    "start": 139,
    "end": 146
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 146,
    "end": 147
  },
  {
    "type": "Identifier",
    "value": "BOOLEAN",
    "start": 148,
    "end": 155
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 155,
    "end": 156
  },
  {
    "type": "Identifier",
    "value": "BOOLEAN",
    "start": 157,
    "end": 164
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 164,
    "end": 165
  },
  {
    "type": "Identifier",
    "value": "NUMBER",
    "start": 166,
    "end": 172
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 172,
    "end": 173
  },
  {
    "type": "Identifier",
    "value": "BOOLEAN",
    "start": 174,
    "end": 181
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 181,
    "end": 182
  },
  {
    "type": "Identifier",
    "value": "STRING",
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
    "value": "BOOLEAN",
    "start": 191,
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
    "value": "OBJECT",
    "start": 200,
    "end": 206
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 206,
    "end": 207
  },
  {
    "type": "Identifier",
    "value": "BOOLEAN",
    "start": 208,
    "end": 215
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 215,
    "end": 216
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 243,
    "end": 246
  },
  {
    "type": "Identifier",
    "value": "resultIsBoolean1",
    "start": 247,
    "end": 263
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 264,
    "end": 265
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 266,
    "end": 267
  },
  {
    "type": "Identifier",
    "value": "ANY",
    "start": 267,
    "end": 270
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 270,
    "end": 271
  },
  {
    "type": "Identifier",
    "value": "BOOLEAN",
    "start": 272,
    "end": 279
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 279,
    "end": 280
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 280,
    "end": 281
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 282,
    "end": 285
  },
  {
    "type": "Identifier",
    "value": "resultIsBoolean2",
    "start": 286,
    "end": 302
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 303,
    "end": 304
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 305,
    "end": 306
  },
  {
    "type": "Identifier",
    "value": "BOOLEAN",
    "start": 306,
    "end": 313
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 313,
    "end": 314
  },
  {
    "type": "Identifier",
    "value": "BOOLEAN",
    "start": 315,
    "end": 322
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 322,
    "end": 323
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 323,
    "end": 324
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 325,
    "end": 328
  },
  {
    "type": "Identifier",
    "value": "resultIsBoolean3",
    "start": 329,
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
    "value": "(",
    "start": 348,
    "end": 349
  },
  {
    "type": "Identifier",
    "value": "NUMBER",
    "start": 349,
    "end": 355
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 355,
    "end": 356
  },
  {
    "type": "Identifier",
    "value": "BOOLEAN",
    "start": 357,
    "end": 364
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 364,
    "end": 365
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 365,
    "end": 366
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 367,
    "end": 370
  },
  {
    "type": "Identifier",
    "value": "resultIsBoolean4",
    "start": 371,
    "end": 387
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 388,
    "end": 389
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 390,
    "end": 391
  },
  {
    "type": "Identifier",
    "value": "STRING",
    "start": 391,
    "end": 397
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 397,
    "end": 398
  },
  {
    "type": "Identifier",
    "value": "BOOLEAN",
    "start": 399,
    "end": 406
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 406,
    "end": 407
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 407,
    "end": 408
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 409,
    "end": 412
  },
  {
    "type": "Identifier",
    "value": "resultIsBoolean5",
    "start": 413,
    "end": 429
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 430,
    "end": 431
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 432,
    "end": 433
  },
  {
    "type": "Identifier",
    "value": "OBJECT",
    "start": 433,
    "end": 439
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 439,
    "end": 440
  },
  {
    "type": "Identifier",
    "value": "BOOLEAN",
    "start": 441,
    "end": 448
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 448,
    "end": 449
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 449,
    "end": 450
  },
  {
    "type": "Null",
    "value": "null",
    "start": 477,
    "end": 481
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 481,
    "end": 482
  },
  {
    "type": "Identifier",
    "value": "BOOLEAN",
    "start": 483,
    "end": 490
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 490,
    "end": 491
  },
  {
    "type": "Identifier",
    "value": "ANY",
    "start": 492,
    "end": 495
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 496,
    "end": 497
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 498,
    "end": 507
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 507,
    "end": 508
  },
  {
    "type": "Identifier",
    "value": "BOOLEAN",
    "start": 509,
    "end": 516
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 516,
    "end": 517
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 518,
    "end": 519
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 519,
    "end": 520
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 521,
    "end": 525
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 525,
    "end": 526
  },
  {
    "type": "Punctuator",
    "value": "++",
    "start": 527,
    "end": 529
  },
  {
    "type": "Identifier",
    "value": "NUMBER",
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
    "type": "Boolean",
    "value": "true",
    "start": 537,
    "end": 541
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 541,
    "end": 542
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 543,
    "end": 544
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 544,
    "end": 545
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 545,
    "end": 546
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 547,
    "end": 548
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 548,
    "end": 549
  },
  {
    "type": "Numeric",
    "value": "3",
    "start": 550,
    "end": 551
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 551,
    "end": 552
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 552,
    "end": 553
  },
  {
    "type": "Punctuator",
    "value": "!",
    "start": 554,
    "end": 555
  },
  {
    "type": "Identifier",
    "value": "BOOLEAN",
    "start": 555,
    "end": 562
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 562,
    "end": 563
  },
  {
    "type": "Identifier",
    "value": "OBJECT",
    "start": 564,
    "end": 570
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 571,
    "end": 572
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 573,
    "end": 574
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 574,
    "end": 575
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 575,
    "end": 576
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 577,
    "end": 578
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 578,
    "end": 579
  },
  {
    "type": "Numeric",
    "value": "3",
    "start": 580,
    "end": 581
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 581,
    "end": 582
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 582,
    "end": 583
  },
  {
    "type": "Identifier",
    "value": "BOOLEAN",
    "start": 584,
    "end": 591
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 592,
    "end": 593
  },
  {
    "type": "Boolean",
    "value": "false",
    "start": 594,
    "end": 599
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 599,
    "end": 600
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 602,
    "end": 605
  },
  {
    "type": "Identifier",
    "value": "resultIsBoolean6",
    "start": 606,
    "end": 622
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 623,
    "end": 624
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 625,
    "end": 626
  },
  {
    "type": "Null",
    "value": "null",
    "start": 626,
    "end": 630
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 630,
    "end": 631
  },
  {
    "type": "Identifier",
    "value": "BOOLEAN",
    "start": 632,
    "end": 639
  },
  {
    "type": "Punctuator",
    "value": ")",
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
    "type": "Keyword",
    "value": "var",
    "start": 642,
    "end": 645
  },
  {
    "type": "Identifier",
    "value": "resultIsBoolean7",
    "start": 646,
    "end": 662
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 663,
    "end": 664
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 665,
    "end": 666
  },
  {
    "type": "Identifier",
    "value": "ANY",
    "start": 666,
    "end": 669
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 670,
    "end": 671
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 672,
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
    "value": "BOOLEAN",
    "start": 683,
    "end": 690
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 690,
    "end": 691
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 691,
    "end": 692
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 693,
    "end": 696
  },
  {
    "type": "Identifier",
    "value": "resultIsBoolean8",
    "start": 697,
    "end": 713
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 714,
    "end": 715
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 716,
    "end": 717
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 717,
    "end": 718
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 718,
    "end": 719
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 720,
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
    "type": "Keyword",
    "value": "var",
    "start": 727,
    "end": 730
  },
  {
    "type": "Identifier",
    "value": "resultIsBoolean9",
    "start": 731,
    "end": 747
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 748,
    "end": 749
  },
  {
    "type": "Punctuator",
    "value": "(",
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
    "type": "Identifier",
    "value": "NUMBER",
    "start": 753,
    "end": 759
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 759,
    "end": 760
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 761,
    "end": 765
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 765,
    "end": 766
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 766,
    "end": 767
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 768,
    "end": 771
  },
  {
    "type": "Identifier",
    "value": "resultIsBoolean10",
    "start": 772,
    "end": 789
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 790,
    "end": 791
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 792,
    "end": 793
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 793,
    "end": 794
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 794,
    "end": 795
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 795,
    "end": 796
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 797,
    "end": 798
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 798,
    "end": 799
  },
  {
    "type": "Numeric",
    "value": "3",
    "start": 800,
    "end": 801
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 801,
    "end": 802
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 802,
    "end": 803
  },
  {
    "type": "Punctuator",
    "value": "!",
    "start": 804,
    "end": 805
  },
  {
    "type": "Identifier",
    "value": "BOOLEAN",
    "start": 805,
    "end": 812
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 812,
    "end": 813
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 813,
    "end": 814
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 815,
    "end": 818
  },
  {
    "type": "Identifier",
    "value": "resultIsBoolean11",
    "start": 819,
    "end": 836
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 837,
    "end": 838
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 839,
    "end": 840
  },
  {
    "type": "Identifier",
    "value": "OBJECT",
    "start": 840,
    "end": 846
  },
  {
    "type": "Punctuator",
    "value": "=",
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
    "type": "Numeric",
    "value": "1",
    "start": 850,
    "end": 851
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 851,
    "end": 852
  },
  {
    "type": "Numeric",
    "value": "2",
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
    "type": "Numeric",
    "value": "3",
    "start": 856,
    "end": 857
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 857,
    "end": 858
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 858,
    "end": 859
  },
  {
    "type": "Identifier",
    "value": "BOOLEAN",
    "start": 860,
    "end": 867
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 868,
    "end": 869
  },
  {
    "type": "Boolean",
    "value": "false",
    "start": 870,
    "end": 875
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 875,
    "end": 876
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 876,
    "end": 877
  }
]
```
