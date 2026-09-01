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
            "start": 133,
            "end": 136
          },
          {
            "type": "Identifier",
            "decorators": [],
            "name": "NUMBER",
            "optional": false,
            "typeAnnotation": null,
            "start": 138,
            "end": 144
          }
        ],
        "start": 133,
        "end": 144
      },
      "directive": null,
      "start": 133,
      "end": 145
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
            "start": 146,
            "end": 153
          },
          {
            "type": "Identifier",
            "decorators": [],
            "name": "NUMBER",
            "optional": false,
            "typeAnnotation": null,
            "start": 155,
            "end": 161
          }
        ],
        "start": 146,
        "end": 161
      },
      "directive": null,
      "start": 146,
      "end": 162
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
            "start": 163,
            "end": 169
          },
          {
            "type": "Identifier",
            "decorators": [],
            "name": "NUMBER",
            "optional": false,
            "typeAnnotation": null,
            "start": 171,
            "end": 177
          }
        ],
        "start": 163,
        "end": 177
      },
      "directive": null,
      "start": 163,
      "end": 178
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
            "start": 179,
            "end": 185
          },
          {
            "type": "Identifier",
            "decorators": [],
            "name": "NUMBER",
            "optional": false,
            "typeAnnotation": null,
            "start": 187,
            "end": 193
          }
        ],
        "start": 179,
        "end": 193
      },
      "directive": null,
      "start": 179,
      "end": 194
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
            "start": 195,
            "end": 201
          },
          {
            "type": "Identifier",
            "decorators": [],
            "name": "NUMBER",
            "optional": false,
            "typeAnnotation": null,
            "start": 203,
            "end": 209
          }
        ],
        "start": 195,
        "end": 209
      },
      "directive": null,
      "start": 195,
      "end": 210
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
            "name": "resultIsNumber1",
            "optional": false,
            "typeAnnotation": null,
            "start": 240,
            "end": 255
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
                "start": 259,
                "end": 262
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "NUMBER",
                "optional": false,
                "typeAnnotation": null,
                "start": 264,
                "end": 270
              }
            ],
            "start": 259,
            "end": 270
          },
          "definite": false,
          "start": 240,
          "end": 271
        }
      ],
      "declare": false,
      "start": 236,
      "end": 272
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
            "name": "resultIsNumber2",
            "optional": false,
            "typeAnnotation": null,
            "start": 277,
            "end": 292
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
                "start": 296,
                "end": 303
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "NUMBER",
                "optional": false,
                "typeAnnotation": null,
                "start": 305,
                "end": 311
              }
            ],
            "start": 296,
            "end": 311
          },
          "definite": false,
          "start": 277,
          "end": 312
        }
      ],
      "declare": false,
      "start": 273,
      "end": 313
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
            "name": "resultIsNumber3",
            "optional": false,
            "typeAnnotation": null,
            "start": 318,
            "end": 333
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
                "start": 337,
                "end": 343
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "NUMBER",
                "optional": false,
                "typeAnnotation": null,
                "start": 345,
                "end": 351
              }
            ],
            "start": 337,
            "end": 351
          },
          "definite": false,
          "start": 318,
          "end": 352
        }
      ],
      "declare": false,
      "start": 314,
      "end": 353
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
            "name": "resultIsNumber4",
            "optional": false,
            "typeAnnotation": null,
            "start": 358,
            "end": 373
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
                "start": 377,
                "end": 383
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "NUMBER",
                "optional": false,
                "typeAnnotation": null,
                "start": 385,
                "end": 391
              }
            ],
            "start": 377,
            "end": 391
          },
          "definite": false,
          "start": 358,
          "end": 392
        }
      ],
      "declare": false,
      "start": 354,
      "end": 393
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
            "name": "resultIsNumber5",
            "optional": false,
            "typeAnnotation": null,
            "start": 398,
            "end": 413
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
                "start": 417,
                "end": 423
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "NUMBER",
                "optional": false,
                "typeAnnotation": null,
                "start": 425,
                "end": 431
              }
            ],
            "start": 417,
            "end": 431
          },
          "definite": false,
          "start": 398,
          "end": 432
        }
      ],
      "declare": false,
      "start": 394,
      "end": 433
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
            "start": 460,
            "end": 464
          },
          {
            "type": "Identifier",
            "decorators": [],
            "name": "NUMBER",
            "optional": false,
            "typeAnnotation": null,
            "start": 466,
            "end": 472
          }
        ],
        "start": 460,
        "end": 472
      },
      "directive": null,
      "start": 460,
      "end": 473
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
              "start": 474,
              "end": 477
            },
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "undefined",
              "optional": false,
              "typeAnnotation": null,
              "start": 480,
              "end": 489
            },
            "start": 474,
            "end": 489
          },
          {
            "type": "Identifier",
            "decorators": [],
            "name": "NUMBER",
            "optional": false,
            "typeAnnotation": null,
            "start": 491,
            "end": 497
          }
        ],
        "start": 474,
        "end": 497
      },
      "directive": null,
      "start": 474,
      "end": 498
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "SequenceExpression",
        "expressions": [
          {
            "type": "Literal",
            "value": true,
            "raw": "true",
            "start": 499,
            "end": 503
          },
          {
            "type": "Literal",
            "value": 1,
            "raw": "1",
            "start": 505,
            "end": 506
          }
        ],
        "start": 499,
        "end": 506
      },
      "directive": null,
      "start": 499,
      "end": 507
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
              "name": "BOOLEAN",
              "optional": false,
              "typeAnnotation": null,
              "start": 508,
              "end": 515
            },
            "right": {
              "type": "Literal",
              "value": false,
              "raw": "false",
              "start": 518,
              "end": 523
            },
            "start": 508,
            "end": 523
          },
          {
            "type": "Literal",
            "value": 1,
            "raw": "1",
            "start": 525,
            "end": 526
          }
        ],
        "start": 508,
        "end": 526
      },
      "directive": null,
      "start": 508,
      "end": 527
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "SequenceExpression",
        "expressions": [
          {
            "type": "Literal",
            "value": "",
            "raw": "\"\"",
            "start": 528,
            "end": 530
          },
          {
            "type": "AssignmentExpression",
            "operator": "=",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "NUMBER",
              "optional": false,
              "typeAnnotation": null,
              "start": 532,
              "end": 538
            },
            "right": {
              "type": "Literal",
              "value": 1,
              "raw": "1",
              "start": 541,
              "end": 542
            },
            "start": 532,
            "end": 542
          }
        ],
        "start": 528,
        "end": 542
      },
      "directive": null,
      "start": 528,
      "end": 543
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "SequenceExpression",
        "expressions": [
          {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "STRING",
                "optional": false,
                "typeAnnotation": null,
                "start": 544,
                "end": 550
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "trim",
                "optional": false,
                "typeAnnotation": null,
                "start": 551,
                "end": 555
              },
              "optional": false,
              "computed": false,
              "start": 544,
              "end": 555
            },
            "typeArguments": null,
            "arguments": [],
            "optional": false,
            "start": 544,
            "end": 557
          },
          {
            "type": "AssignmentExpression",
            "operator": "=",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "NUMBER",
              "optional": false,
              "typeAnnotation": null,
              "start": 559,
              "end": 565
            },
            "right": {
              "type": "Literal",
              "value": 1,
              "raw": "1",
              "start": 568,
              "end": 569
            },
            "start": 559,
            "end": 569
          }
        ],
        "start": 544,
        "end": 569
      },
      "directive": null,
      "start": 544,
      "end": 570
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
            "name": "resultIsNumber6",
            "optional": false,
            "typeAnnotation": null,
            "start": 576,
            "end": 591
          },
          "init": {
            "type": "SequenceExpression",
            "expressions": [
              {
                "type": "Literal",
                "value": null,
                "raw": "null",
                "start": 595,
                "end": 599
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "NUMBER",
                "optional": false,
                "typeAnnotation": null,
                "start": 601,
                "end": 607
              }
            ],
            "start": 595,
            "end": 607
          },
          "definite": false,
          "start": 576,
          "end": 608
        }
      ],
      "declare": false,
      "start": 572,
      "end": 609
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
            "name": "resultIsNumber7",
            "optional": false,
            "typeAnnotation": null,
            "start": 614,
            "end": 629
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
                  "start": 633,
                  "end": 636
                },
                "right": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "undefined",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 639,
                  "end": 648
                },
                "start": 633,
                "end": 648
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "NUMBER",
                "optional": false,
                "typeAnnotation": null,
                "start": 650,
                "end": 656
              }
            ],
            "start": 633,
            "end": 656
          },
          "definite": false,
          "start": 614,
          "end": 657
        }
      ],
      "declare": false,
      "start": 610,
      "end": 658
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
            "name": "resultIsNumber8",
            "optional": false,
            "typeAnnotation": null,
            "start": 663,
            "end": 678
          },
          "init": {
            "type": "SequenceExpression",
            "expressions": [
              {
                "type": "Literal",
                "value": true,
                "raw": "true",
                "start": 682,
                "end": 686
              },
              {
                "type": "Literal",
                "value": 1,
                "raw": "1",
                "start": 688,
                "end": 689
              }
            ],
            "start": 682,
            "end": 689
          },
          "definite": false,
          "start": 663,
          "end": 690
        }
      ],
      "declare": false,
      "start": 659,
      "end": 691
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
            "name": "resultIsNumber9",
            "optional": false,
            "typeAnnotation": null,
            "start": 696,
            "end": 711
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
                  "name": "BOOLEAN",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 715,
                  "end": 722
                },
                "right": {
                  "type": "Literal",
                  "value": false,
                  "raw": "false",
                  "start": 725,
                  "end": 730
                },
                "start": 715,
                "end": 730
              },
              {
                "type": "Literal",
                "value": 1,
                "raw": "1",
                "start": 732,
                "end": 733
              }
            ],
            "start": 715,
            "end": 733
          },
          "definite": false,
          "start": 696,
          "end": 734
        }
      ],
      "declare": false,
      "start": 692,
      "end": 735
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
            "name": "resultIsNumber10",
            "optional": false,
            "typeAnnotation": null,
            "start": 740,
            "end": 756
          },
          "init": {
            "type": "SequenceExpression",
            "expressions": [
              {
                "type": "Literal",
                "value": "",
                "raw": "\"\"",
                "start": 760,
                "end": 762
              },
              {
                "type": "AssignmentExpression",
                "operator": "=",
                "left": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "NUMBER",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 764,
                  "end": 770
                },
                "right": {
                  "type": "Literal",
                  "value": 1,
                  "raw": "1",
                  "start": 773,
                  "end": 774
                },
                "start": 764,
                "end": 774
              }
            ],
            "start": 760,
            "end": 774
          },
          "definite": false,
          "start": 740,
          "end": 775
        }
      ],
      "declare": false,
      "start": 736,
      "end": 776
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
            "name": "resultIsNumber11",
            "optional": false,
            "typeAnnotation": null,
            "start": 781,
            "end": 797
          },
          "init": {
            "type": "SequenceExpression",
            "expressions": [
              {
                "type": "CallExpression",
                "callee": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "STRING",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 801,
                    "end": 807
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "trim",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 808,
                    "end": 812
                  },
                  "optional": false,
                  "computed": false,
                  "start": 801,
                  "end": 812
                },
                "typeArguments": null,
                "arguments": [],
                "optional": false,
                "start": 801,
                "end": 814
              },
              {
                "type": "AssignmentExpression",
                "operator": "=",
                "left": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "NUMBER",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 816,
                  "end": 822
                },
                "right": {
                  "type": "Literal",
                  "value": 1,
                  "raw": "1",
                  "start": 825,
                  "end": 826
                },
                "start": 816,
                "end": 826
              }
            ],
            "start": 801,
            "end": 826
          },
          "definite": false,
          "start": 781,
          "end": 827
        }
      ],
      "declare": false,
      "start": 777,
      "end": 828
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 828
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
    "start": 133,
    "end": 136
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 136,
    "end": 137
  },
  {
    "type": "Identifier",
    "value": "NUMBER",
    "start": 138,
    "end": 144
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 144,
    "end": 145
  },
  {
    "type": "Identifier",
    "value": "BOOLEAN",
    "start": 146,
    "end": 153
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 153,
    "end": 154
  },
  {
    "type": "Identifier",
    "value": "NUMBER",
    "start": 155,
    "end": 161
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 161,
    "end": 162
  },
  {
    "type": "Identifier",
    "value": "NUMBER",
    "start": 163,
    "end": 169
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 169,
    "end": 170
  },
  {
    "type": "Identifier",
    "value": "NUMBER",
    "start": 171,
    "end": 177
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 177,
    "end": 178
  },
  {
    "type": "Identifier",
    "value": "STRING",
    "start": 179,
    "end": 185
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 185,
    "end": 186
  },
  {
    "type": "Identifier",
    "value": "NUMBER",
    "start": 187,
    "end": 193
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 193,
    "end": 194
  },
  {
    "type": "Identifier",
    "value": "OBJECT",
    "start": 195,
    "end": 201
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 201,
    "end": 202
  },
  {
    "type": "Identifier",
    "value": "NUMBER",
    "start": 203,
    "end": 209
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 209,
    "end": 210
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 236,
    "end": 239
  },
  {
    "type": "Identifier",
    "value": "resultIsNumber1",
    "start": 240,
    "end": 255
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 256,
    "end": 257
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 258,
    "end": 259
  },
  {
    "type": "Identifier",
    "value": "ANY",
    "start": 259,
    "end": 262
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 262,
    "end": 263
  },
  {
    "type": "Identifier",
    "value": "NUMBER",
    "start": 264,
    "end": 270
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 270,
    "end": 271
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 271,
    "end": 272
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 273,
    "end": 276
  },
  {
    "type": "Identifier",
    "value": "resultIsNumber2",
    "start": 277,
    "end": 292
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 293,
    "end": 294
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 295,
    "end": 296
  },
  {
    "type": "Identifier",
    "value": "BOOLEAN",
    "start": 296,
    "end": 303
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 303,
    "end": 304
  },
  {
    "type": "Identifier",
    "value": "NUMBER",
    "start": 305,
    "end": 311
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 311,
    "end": 312
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 312,
    "end": 313
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 314,
    "end": 317
  },
  {
    "type": "Identifier",
    "value": "resultIsNumber3",
    "start": 318,
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
    "value": "(",
    "start": 336,
    "end": 337
  },
  {
    "type": "Identifier",
    "value": "NUMBER",
    "start": 337,
    "end": 343
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 343,
    "end": 344
  },
  {
    "type": "Identifier",
    "value": "NUMBER",
    "start": 345,
    "end": 351
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 351,
    "end": 352
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 352,
    "end": 353
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 354,
    "end": 357
  },
  {
    "type": "Identifier",
    "value": "resultIsNumber4",
    "start": 358,
    "end": 373
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 374,
    "end": 375
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 376,
    "end": 377
  },
  {
    "type": "Identifier",
    "value": "STRING",
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
    "value": "NUMBER",
    "start": 385,
    "end": 391
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 391,
    "end": 392
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 392,
    "end": 393
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 394,
    "end": 397
  },
  {
    "type": "Identifier",
    "value": "resultIsNumber5",
    "start": 398,
    "end": 413
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 414,
    "end": 415
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 416,
    "end": 417
  },
  {
    "type": "Identifier",
    "value": "OBJECT",
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
    "value": "NUMBER",
    "start": 425,
    "end": 431
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 431,
    "end": 432
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 432,
    "end": 433
  },
  {
    "type": "Null",
    "value": "null",
    "start": 460,
    "end": 464
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 464,
    "end": 465
  },
  {
    "type": "Identifier",
    "value": "NUMBER",
    "start": 466,
    "end": 472
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 472,
    "end": 473
  },
  {
    "type": "Identifier",
    "value": "ANY",
    "start": 474,
    "end": 477
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 478,
    "end": 479
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 480,
    "end": 489
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 489,
    "end": 490
  },
  {
    "type": "Identifier",
    "value": "NUMBER",
    "start": 491,
    "end": 497
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 497,
    "end": 498
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 499,
    "end": 503
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 503,
    "end": 504
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 505,
    "end": 506
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 506,
    "end": 507
  },
  {
    "type": "Identifier",
    "value": "BOOLEAN",
    "start": 508,
    "end": 515
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 516,
    "end": 517
  },
  {
    "type": "Boolean",
    "value": "false",
    "start": 518,
    "end": 523
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 523,
    "end": 524
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 525,
    "end": 526
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 526,
    "end": 527
  },
  {
    "type": "String",
    "value": "\"\"",
    "start": 528,
    "end": 530
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 530,
    "end": 531
  },
  {
    "type": "Identifier",
    "value": "NUMBER",
    "start": 532,
    "end": 538
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 539,
    "end": 540
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 541,
    "end": 542
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 542,
    "end": 543
  },
  {
    "type": "Identifier",
    "value": "STRING",
    "start": 544,
    "end": 550
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 550,
    "end": 551
  },
  {
    "type": "Identifier",
    "value": "trim",
    "start": 551,
    "end": 555
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 555,
    "end": 556
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 556,
    "end": 557
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 557,
    "end": 558
  },
  {
    "type": "Identifier",
    "value": "NUMBER",
    "start": 559,
    "end": 565
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 566,
    "end": 567
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 568,
    "end": 569
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 569,
    "end": 570
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 572,
    "end": 575
  },
  {
    "type": "Identifier",
    "value": "resultIsNumber6",
    "start": 576,
    "end": 591
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 592,
    "end": 593
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 594,
    "end": 595
  },
  {
    "type": "Null",
    "value": "null",
    "start": 595,
    "end": 599
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 599,
    "end": 600
  },
  {
    "type": "Identifier",
    "value": "NUMBER",
    "start": 601,
    "end": 607
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 607,
    "end": 608
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 608,
    "end": 609
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 610,
    "end": 613
  },
  {
    "type": "Identifier",
    "value": "resultIsNumber7",
    "start": 614,
    "end": 629
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 630,
    "end": 631
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 632,
    "end": 633
  },
  {
    "type": "Identifier",
    "value": "ANY",
    "start": 633,
    "end": 636
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 637,
    "end": 638
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 639,
    "end": 648
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 648,
    "end": 649
  },
  {
    "type": "Identifier",
    "value": "NUMBER",
    "start": 650,
    "end": 656
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 656,
    "end": 657
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 657,
    "end": 658
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 659,
    "end": 662
  },
  {
    "type": "Identifier",
    "value": "resultIsNumber8",
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
    "type": "Punctuator",
    "value": "(",
    "start": 681,
    "end": 682
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 682,
    "end": 686
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 686,
    "end": 687
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 688,
    "end": 689
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 689,
    "end": 690
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 690,
    "end": 691
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 692,
    "end": 695
  },
  {
    "type": "Identifier",
    "value": "resultIsNumber9",
    "start": 696,
    "end": 711
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 712,
    "end": 713
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 714,
    "end": 715
  },
  {
    "type": "Identifier",
    "value": "BOOLEAN",
    "start": 715,
    "end": 722
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 723,
    "end": 724
  },
  {
    "type": "Boolean",
    "value": "false",
    "start": 725,
    "end": 730
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 730,
    "end": 731
  },
  {
    "type": "Numeric",
    "value": "1",
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
    "value": ";",
    "start": 734,
    "end": 735
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 736,
    "end": 739
  },
  {
    "type": "Identifier",
    "value": "resultIsNumber10",
    "start": 740,
    "end": 756
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 757,
    "end": 758
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 759,
    "end": 760
  },
  {
    "type": "String",
    "value": "\"\"",
    "start": 760,
    "end": 762
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 762,
    "end": 763
  },
  {
    "type": "Identifier",
    "value": "NUMBER",
    "start": 764,
    "end": 770
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 771,
    "end": 772
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 773,
    "end": 774
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 774,
    "end": 775
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 775,
    "end": 776
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 777,
    "end": 780
  },
  {
    "type": "Identifier",
    "value": "resultIsNumber11",
    "start": 781,
    "end": 797
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 798,
    "end": 799
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 800,
    "end": 801
  },
  {
    "type": "Identifier",
    "value": "STRING",
    "start": 801,
    "end": 807
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 807,
    "end": 808
  },
  {
    "type": "Identifier",
    "value": "trim",
    "start": 808,
    "end": 812
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 812,
    "end": 813
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 813,
    "end": 814
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 814,
    "end": 815
  },
  {
    "type": "Identifier",
    "value": "NUMBER",
    "start": 816,
    "end": 822
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 823,
    "end": 824
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 825,
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
    "value": ";",
    "start": 827,
    "end": 828
  }
]
```
