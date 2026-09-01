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
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "resultIsString",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 117,
                "end": 123
              },
              "start": 115,
              "end": 123
            },
            "start": 101,
            "end": 123
          },
          "init": null,
          "definite": false,
          "start": 101,
          "end": 123
        }
      ],
      "declare": false,
      "start": 97,
      "end": 124
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
            "start": 157,
            "end": 160
          },
          {
            "type": "Identifier",
            "decorators": [],
            "name": "STRING",
            "optional": false,
            "typeAnnotation": null,
            "start": 162,
            "end": 168
          }
        ],
        "start": 157,
        "end": 168
      },
      "directive": null,
      "start": 157,
      "end": 169
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
            "start": 170,
            "end": 177
          },
          {
            "type": "Identifier",
            "decorators": [],
            "name": "STRING",
            "optional": false,
            "typeAnnotation": null,
            "start": 179,
            "end": 185
          }
        ],
        "start": 170,
        "end": 185
      },
      "directive": null,
      "start": 170,
      "end": 186
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
            "start": 187,
            "end": 193
          },
          {
            "type": "Identifier",
            "decorators": [],
            "name": "STRING",
            "optional": false,
            "typeAnnotation": null,
            "start": 195,
            "end": 201
          }
        ],
        "start": 187,
        "end": 201
      },
      "directive": null,
      "start": 187,
      "end": 202
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
            "start": 203,
            "end": 209
          },
          {
            "type": "Identifier",
            "decorators": [],
            "name": "STRING",
            "optional": false,
            "typeAnnotation": null,
            "start": 211,
            "end": 217
          }
        ],
        "start": 203,
        "end": 217
      },
      "directive": null,
      "start": 203,
      "end": 218
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
            "start": 219,
            "end": 225
          },
          {
            "type": "Identifier",
            "decorators": [],
            "name": "STRING",
            "optional": false,
            "typeAnnotation": null,
            "start": 227,
            "end": 233
          }
        ],
        "start": 219,
        "end": 233
      },
      "directive": null,
      "start": 219,
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
            "name": "resultIsString1",
            "optional": false,
            "typeAnnotation": null,
            "start": 264,
            "end": 279
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
                "start": 283,
                "end": 286
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "STRING",
                "optional": false,
                "typeAnnotation": null,
                "start": 288,
                "end": 294
              }
            ],
            "start": 283,
            "end": 294
          },
          "definite": false,
          "start": 264,
          "end": 295
        }
      ],
      "declare": false,
      "start": 260,
      "end": 296
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
            "name": "resultIsString2",
            "optional": false,
            "typeAnnotation": null,
            "start": 301,
            "end": 316
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
                "start": 320,
                "end": 327
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "STRING",
                "optional": false,
                "typeAnnotation": null,
                "start": 329,
                "end": 335
              }
            ],
            "start": 320,
            "end": 335
          },
          "definite": false,
          "start": 301,
          "end": 336
        }
      ],
      "declare": false,
      "start": 297,
      "end": 337
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
            "name": "resultIsString3",
            "optional": false,
            "typeAnnotation": null,
            "start": 342,
            "end": 357
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
                "start": 361,
                "end": 367
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "STRING",
                "optional": false,
                "typeAnnotation": null,
                "start": 369,
                "end": 375
              }
            ],
            "start": 361,
            "end": 375
          },
          "definite": false,
          "start": 342,
          "end": 376
        }
      ],
      "declare": false,
      "start": 338,
      "end": 377
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
            "name": "resultIsString4",
            "optional": false,
            "typeAnnotation": null,
            "start": 382,
            "end": 397
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
                "start": 401,
                "end": 407
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "STRING",
                "optional": false,
                "typeAnnotation": null,
                "start": 409,
                "end": 415
              }
            ],
            "start": 401,
            "end": 415
          },
          "definite": false,
          "start": 382,
          "end": 416
        }
      ],
      "declare": false,
      "start": 378,
      "end": 417
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
            "name": "resultIsString5",
            "optional": false,
            "typeAnnotation": null,
            "start": 422,
            "end": 437
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
                "start": 441,
                "end": 447
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "STRING",
                "optional": false,
                "typeAnnotation": null,
                "start": 449,
                "end": 455
              }
            ],
            "start": 441,
            "end": 455
          },
          "definite": false,
          "start": 422,
          "end": 456
        }
      ],
      "declare": false,
      "start": 418,
      "end": 457
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
            "start": 484,
            "end": 488
          },
          {
            "type": "Identifier",
            "decorators": [],
            "name": "STRING",
            "optional": false,
            "typeAnnotation": null,
            "start": 490,
            "end": 496
          }
        ],
        "start": 484,
        "end": 496
      },
      "directive": null,
      "start": 484,
      "end": 497
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
              "start": 498,
              "end": 501
            },
            "right": {
              "type": "NewExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "Date",
                "optional": false,
                "typeAnnotation": null,
                "start": 508,
                "end": 512
              },
              "typeArguments": null,
              "arguments": [],
              "start": 504,
              "end": 514
            },
            "start": 498,
            "end": 514
          },
          {
            "type": "Identifier",
            "decorators": [],
            "name": "STRING",
            "optional": false,
            "typeAnnotation": null,
            "start": 516,
            "end": 522
          }
        ],
        "start": 498,
        "end": 522
      },
      "directive": null,
      "start": 498,
      "end": 523
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
            "start": 524,
            "end": 528
          },
          {
            "type": "Literal",
            "value": "",
            "raw": "\"\"",
            "start": 530,
            "end": 532
          }
        ],
        "start": 524,
        "end": 532
      },
      "directive": null,
      "start": 524,
      "end": 533
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "SequenceExpression",
        "expressions": [
          {
            "type": "BinaryExpression",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "BOOLEAN",
              "optional": false,
              "typeAnnotation": null,
              "start": 534,
              "end": 541
            },
            "operator": "==",
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "undefined",
              "optional": false,
              "typeAnnotation": null,
              "start": 545,
              "end": 554
            },
            "start": 534,
            "end": 554
          },
          {
            "type": "Literal",
            "value": "",
            "raw": "\"\"",
            "start": 556,
            "end": 558
          }
        ],
        "start": 534,
        "end": 558
      },
      "directive": null,
      "start": 534,
      "end": 559
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
                "value": "a",
                "raw": "\"a\"",
                "start": 561,
                "end": 564
              },
              {
                "type": "Literal",
                "value": "b",
                "raw": "\"b\"",
                "start": 566,
                "end": 569
              }
            ],
            "start": 560,
            "end": 570
          },
          {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "NUMBER",
                "optional": false,
                "typeAnnotation": null,
                "start": 572,
                "end": 578
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "toString",
                "optional": false,
                "typeAnnotation": null,
                "start": 579,
                "end": 587
              },
              "optional": false,
              "computed": false,
              "start": 572,
              "end": 587
            },
            "typeArguments": null,
            "arguments": [],
            "optional": false,
            "start": 572,
            "end": 589
          }
        ],
        "start": 560,
        "end": 589
      },
      "directive": null,
      "start": 560,
      "end": 590
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
              "start": 591,
              "end": 597
            },
            "right": {
              "type": "NewExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "Object",
                "optional": false,
                "typeAnnotation": null,
                "start": 604,
                "end": 610
              },
              "typeArguments": null,
              "arguments": [],
              "start": 600,
              "end": 610
            },
            "start": 591,
            "end": 610
          },
          {
            "type": "BinaryExpression",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "STRING",
              "optional": false,
              "typeAnnotation": null,
              "start": 612,
              "end": 618
            },
            "operator": "+",
            "right": {
              "type": "Literal",
              "value": "string",
              "raw": "\"string\"",
              "start": 621,
              "end": 629
            },
            "start": 612,
            "end": 629
          }
        ],
        "start": 591,
        "end": 629
      },
      "directive": null,
      "start": 591,
      "end": 630
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
            "name": "resultIsString6",
            "optional": false,
            "typeAnnotation": null,
            "start": 636,
            "end": 651
          },
          "init": {
            "type": "SequenceExpression",
            "expressions": [
              {
                "type": "Literal",
                "value": null,
                "raw": "null",
                "start": 655,
                "end": 659
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "STRING",
                "optional": false,
                "typeAnnotation": null,
                "start": 661,
                "end": 667
              }
            ],
            "start": 655,
            "end": 667
          },
          "definite": false,
          "start": 636,
          "end": 668
        }
      ],
      "declare": false,
      "start": 632,
      "end": 669
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
            "name": "resultIsString7",
            "optional": false,
            "typeAnnotation": null,
            "start": 674,
            "end": 689
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
                  "start": 693,
                  "end": 696
                },
                "right": {
                  "type": "NewExpression",
                  "callee": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Date",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 703,
                    "end": 707
                  },
                  "typeArguments": null,
                  "arguments": [],
                  "start": 699,
                  "end": 709
                },
                "start": 693,
                "end": 709
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "STRING",
                "optional": false,
                "typeAnnotation": null,
                "start": 711,
                "end": 717
              }
            ],
            "start": 693,
            "end": 717
          },
          "definite": false,
          "start": 674,
          "end": 718
        }
      ],
      "declare": false,
      "start": 670,
      "end": 719
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
            "name": "resultIsString8",
            "optional": false,
            "typeAnnotation": null,
            "start": 724,
            "end": 739
          },
          "init": {
            "type": "SequenceExpression",
            "expressions": [
              {
                "type": "Literal",
                "value": true,
                "raw": "true",
                "start": 743,
                "end": 747
              },
              {
                "type": "Literal",
                "value": "",
                "raw": "\"\"",
                "start": 749,
                "end": 751
              }
            ],
            "start": 743,
            "end": 751
          },
          "definite": false,
          "start": 724,
          "end": 752
        }
      ],
      "declare": false,
      "start": 720,
      "end": 753
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
            "name": "resultIsString9",
            "optional": false,
            "typeAnnotation": null,
            "start": 758,
            "end": 773
          },
          "init": {
            "type": "SequenceExpression",
            "expressions": [
              {
                "type": "BinaryExpression",
                "left": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "BOOLEAN",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 777,
                  "end": 784
                },
                "operator": "==",
                "right": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "undefined",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 788,
                  "end": 797
                },
                "start": 777,
                "end": 797
              },
              {
                "type": "Literal",
                "value": "",
                "raw": "\"\"",
                "start": 799,
                "end": 801
              }
            ],
            "start": 777,
            "end": 801
          },
          "definite": false,
          "start": 758,
          "end": 802
        }
      ],
      "declare": false,
      "start": 754,
      "end": 803
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
            "name": "resultIsString10",
            "optional": false,
            "typeAnnotation": null,
            "start": 808,
            "end": 824
          },
          "init": {
            "type": "SequenceExpression",
            "expressions": [
              {
                "type": "ArrayExpression",
                "elements": [
                  {
                    "type": "Literal",
                    "value": "a",
                    "raw": "\"a\"",
                    "start": 829,
                    "end": 832
                  },
                  {
                    "type": "Literal",
                    "value": "b",
                    "raw": "\"b\"",
                    "start": 834,
                    "end": 837
                  }
                ],
                "start": 828,
                "end": 838
              },
              {
                "type": "CallExpression",
                "callee": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "NUMBER",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 840,
                    "end": 846
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "toString",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 847,
                    "end": 855
                  },
                  "optional": false,
                  "computed": false,
                  "start": 840,
                  "end": 855
                },
                "typeArguments": null,
                "arguments": [],
                "optional": false,
                "start": 840,
                "end": 857
              }
            ],
            "start": 828,
            "end": 857
          },
          "definite": false,
          "start": 808,
          "end": 858
        }
      ],
      "declare": false,
      "start": 804,
      "end": 859
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
            "name": "resultIsString11",
            "optional": false,
            "typeAnnotation": null,
            "start": 864,
            "end": 880
          },
          "init": {
            "type": "SequenceExpression",
            "expressions": [
              {
                "type": "NewExpression",
                "callee": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Object",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 888,
                  "end": 894
                },
                "typeArguments": null,
                "arguments": [],
                "start": 884,
                "end": 894
              },
              {
                "type": "BinaryExpression",
                "left": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "STRING",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 896,
                  "end": 902
                },
                "operator": "+",
                "right": {
                  "type": "Literal",
                  "value": "string",
                  "raw": "\"string\"",
                  "start": 905,
                  "end": 913
                },
                "start": 896,
                "end": 913
              }
            ],
            "start": 884,
            "end": 913
          },
          "definite": false,
          "start": 864,
          "end": 914
        }
      ],
      "declare": false,
      "start": 860,
      "end": 915
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 915
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
    "type": "Keyword",
    "value": "var",
    "start": 97,
    "end": 100
  },
  {
    "type": "Identifier",
    "value": "resultIsString",
    "start": 101,
    "end": 115
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 115,
    "end": 116
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 117,
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
    "value": "ANY",
    "start": 157,
    "end": 160
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 160,
    "end": 161
  },
  {
    "type": "Identifier",
    "value": "STRING",
    "start": 162,
    "end": 168
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 168,
    "end": 169
  },
  {
    "type": "Identifier",
    "value": "BOOLEAN",
    "start": 170,
    "end": 177
  },
  {
    "type": "Punctuator",
    "value": ",",
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
    "value": ";",
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
    "value": ",",
    "start": 193,
    "end": 194
  },
  {
    "type": "Identifier",
    "value": "STRING",
    "start": 195,
    "end": 201
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 201,
    "end": 202
  },
  {
    "type": "Identifier",
    "value": "STRING",
    "start": 203,
    "end": 209
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 209,
    "end": 210
  },
  {
    "type": "Identifier",
    "value": "STRING",
    "start": 211,
    "end": 217
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 217,
    "end": 218
  },
  {
    "type": "Identifier",
    "value": "OBJECT",
    "start": 219,
    "end": 225
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 225,
    "end": 226
  },
  {
    "type": "Identifier",
    "value": "STRING",
    "start": 227,
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
    "start": 260,
    "end": 263
  },
  {
    "type": "Identifier",
    "value": "resultIsString1",
    "start": 264,
    "end": 279
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 280,
    "end": 281
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 282,
    "end": 283
  },
  {
    "type": "Identifier",
    "value": "ANY",
    "start": 283,
    "end": 286
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 286,
    "end": 287
  },
  {
    "type": "Identifier",
    "value": "STRING",
    "start": 288,
    "end": 294
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 294,
    "end": 295
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 295,
    "end": 296
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 297,
    "end": 300
  },
  {
    "type": "Identifier",
    "value": "resultIsString2",
    "start": 301,
    "end": 316
  },
  {
    "type": "Punctuator",
    "value": "=",
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
    "type": "Identifier",
    "value": "BOOLEAN",
    "start": 320,
    "end": 327
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 327,
    "end": 328
  },
  {
    "type": "Identifier",
    "value": "STRING",
    "start": 329,
    "end": 335
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 335,
    "end": 336
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 336,
    "end": 337
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 338,
    "end": 341
  },
  {
    "type": "Identifier",
    "value": "resultIsString3",
    "start": 342,
    "end": 357
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 358,
    "end": 359
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 360,
    "end": 361
  },
  {
    "type": "Identifier",
    "value": "NUMBER",
    "start": 361,
    "end": 367
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 367,
    "end": 368
  },
  {
    "type": "Identifier",
    "value": "STRING",
    "start": 369,
    "end": 375
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 375,
    "end": 376
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 376,
    "end": 377
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 378,
    "end": 381
  },
  {
    "type": "Identifier",
    "value": "resultIsString4",
    "start": 382,
    "end": 397
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 398,
    "end": 399
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 400,
    "end": 401
  },
  {
    "type": "Identifier",
    "value": "STRING",
    "start": 401,
    "end": 407
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 407,
    "end": 408
  },
  {
    "type": "Identifier",
    "value": "STRING",
    "start": 409,
    "end": 415
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 415,
    "end": 416
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 416,
    "end": 417
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 418,
    "end": 421
  },
  {
    "type": "Identifier",
    "value": "resultIsString5",
    "start": 422,
    "end": 437
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 438,
    "end": 439
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 440,
    "end": 441
  },
  {
    "type": "Identifier",
    "value": "OBJECT",
    "start": 441,
    "end": 447
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 447,
    "end": 448
  },
  {
    "type": "Identifier",
    "value": "STRING",
    "start": 449,
    "end": 455
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 455,
    "end": 456
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 456,
    "end": 457
  },
  {
    "type": "Null",
    "value": "null",
    "start": 484,
    "end": 488
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 488,
    "end": 489
  },
  {
    "type": "Identifier",
    "value": "STRING",
    "start": 490,
    "end": 496
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 496,
    "end": 497
  },
  {
    "type": "Identifier",
    "value": "ANY",
    "start": 498,
    "end": 501
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 502,
    "end": 503
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 504,
    "end": 507
  },
  {
    "type": "Identifier",
    "value": "Date",
    "start": 508,
    "end": 512
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 512,
    "end": 513
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 513,
    "end": 514
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 514,
    "end": 515
  },
  {
    "type": "Identifier",
    "value": "STRING",
    "start": 516,
    "end": 522
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 522,
    "end": 523
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 524,
    "end": 528
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 528,
    "end": 529
  },
  {
    "type": "String",
    "value": "\"\"",
    "start": 530,
    "end": 532
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 532,
    "end": 533
  },
  {
    "type": "Identifier",
    "value": "BOOLEAN",
    "start": 534,
    "end": 541
  },
  {
    "type": "Punctuator",
    "value": "==",
    "start": 542,
    "end": 544
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 545,
    "end": 554
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 554,
    "end": 555
  },
  {
    "type": "String",
    "value": "\"\"",
    "start": 556,
    "end": 558
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 558,
    "end": 559
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 560,
    "end": 561
  },
  {
    "type": "String",
    "value": "\"a\"",
    "start": 561,
    "end": 564
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 564,
    "end": 565
  },
  {
    "type": "String",
    "value": "\"b\"",
    "start": 566,
    "end": 569
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 569,
    "end": 570
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 570,
    "end": 571
  },
  {
    "type": "Identifier",
    "value": "NUMBER",
    "start": 572,
    "end": 578
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 578,
    "end": 579
  },
  {
    "type": "Identifier",
    "value": "toString",
    "start": 579,
    "end": 587
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 587,
    "end": 588
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 588,
    "end": 589
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 589,
    "end": 590
  },
  {
    "type": "Identifier",
    "value": "OBJECT",
    "start": 591,
    "end": 597
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 598,
    "end": 599
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 600,
    "end": 603
  },
  {
    "type": "Identifier",
    "value": "Object",
    "start": 604,
    "end": 610
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 610,
    "end": 611
  },
  {
    "type": "Identifier",
    "value": "STRING",
    "start": 612,
    "end": 618
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 619,
    "end": 620
  },
  {
    "type": "String",
    "value": "\"string\"",
    "start": 621,
    "end": 629
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 629,
    "end": 630
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 632,
    "end": 635
  },
  {
    "type": "Identifier",
    "value": "resultIsString6",
    "start": 636,
    "end": 651
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 652,
    "end": 653
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 654,
    "end": 655
  },
  {
    "type": "Null",
    "value": "null",
    "start": 655,
    "end": 659
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 659,
    "end": 660
  },
  {
    "type": "Identifier",
    "value": "STRING",
    "start": 661,
    "end": 667
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 667,
    "end": 668
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 668,
    "end": 669
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 670,
    "end": 673
  },
  {
    "type": "Identifier",
    "value": "resultIsString7",
    "start": 674,
    "end": 689
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 690,
    "end": 691
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 692,
    "end": 693
  },
  {
    "type": "Identifier",
    "value": "ANY",
    "start": 693,
    "end": 696
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 697,
    "end": 698
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 699,
    "end": 702
  },
  {
    "type": "Identifier",
    "value": "Date",
    "start": 703,
    "end": 707
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 707,
    "end": 708
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 708,
    "end": 709
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 709,
    "end": 710
  },
  {
    "type": "Identifier",
    "value": "STRING",
    "start": 711,
    "end": 717
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 717,
    "end": 718
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 718,
    "end": 719
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 720,
    "end": 723
  },
  {
    "type": "Identifier",
    "value": "resultIsString8",
    "start": 724,
    "end": 739
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 740,
    "end": 741
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 742,
    "end": 743
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 743,
    "end": 747
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 747,
    "end": 748
  },
  {
    "type": "String",
    "value": "\"\"",
    "start": 749,
    "end": 751
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 751,
    "end": 752
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 752,
    "end": 753
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 754,
    "end": 757
  },
  {
    "type": "Identifier",
    "value": "resultIsString9",
    "start": 758,
    "end": 773
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 774,
    "end": 775
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 776,
    "end": 777
  },
  {
    "type": "Identifier",
    "value": "BOOLEAN",
    "start": 777,
    "end": 784
  },
  {
    "type": "Punctuator",
    "value": "==",
    "start": 785,
    "end": 787
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 788,
    "end": 797
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 797,
    "end": 798
  },
  {
    "type": "String",
    "value": "\"\"",
    "start": 799,
    "end": 801
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 801,
    "end": 802
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 802,
    "end": 803
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 804,
    "end": 807
  },
  {
    "type": "Identifier",
    "value": "resultIsString10",
    "start": 808,
    "end": 824
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 825,
    "end": 826
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 827,
    "end": 828
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 828,
    "end": 829
  },
  {
    "type": "String",
    "value": "\"a\"",
    "start": 829,
    "end": 832
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 832,
    "end": 833
  },
  {
    "type": "String",
    "value": "\"b\"",
    "start": 834,
    "end": 837
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 837,
    "end": 838
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 838,
    "end": 839
  },
  {
    "type": "Identifier",
    "value": "NUMBER",
    "start": 840,
    "end": 846
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 846,
    "end": 847
  },
  {
    "type": "Identifier",
    "value": "toString",
    "start": 847,
    "end": 855
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 855,
    "end": 856
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 856,
    "end": 857
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 857,
    "end": 858
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 858,
    "end": 859
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 860,
    "end": 863
  },
  {
    "type": "Identifier",
    "value": "resultIsString11",
    "start": 864,
    "end": 880
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 881,
    "end": 882
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 883,
    "end": 884
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 884,
    "end": 887
  },
  {
    "type": "Identifier",
    "value": "Object",
    "start": 888,
    "end": 894
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 894,
    "end": 895
  },
  {
    "type": "Identifier",
    "value": "STRING",
    "start": 896,
    "end": 902
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 903,
    "end": 904
  },
  {
    "type": "String",
    "value": "\"string\"",
    "start": 905,
    "end": 913
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 913,
    "end": 914
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 914,
    "end": 915
  }
]
```
