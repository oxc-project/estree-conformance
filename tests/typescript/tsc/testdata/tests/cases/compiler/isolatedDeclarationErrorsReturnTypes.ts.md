__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "VariableDeclaration",
        "kind": "const",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "fnExpressionConstVariable",
              "optional": false,
              "typeAnnotation": null,
              "start": 35,
              "end": 60
            },
            "init": {
              "type": "FunctionExpression",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "foo",
                "optional": false,
                "typeAnnotation": null,
                "start": 72,
                "end": 75
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
                      "type": "Literal",
                      "value": 0,
                      "raw": "0",
                      "start": 87,
                      "end": 88
                    },
                    "start": 80,
                    "end": 89
                  }
                ],
                "start": 78,
                "end": 90
              },
              "expression": false,
              "start": 63,
              "end": 90
            },
            "definite": false,
            "start": 35,
            "end": 90
          }
        ],
        "declare": false,
        "start": 29,
        "end": 90
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 22,
      "end": 90
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "VariableDeclaration",
        "kind": "const",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "fnArrowConstVariable",
              "optional": false,
              "typeAnnotation": null,
              "start": 104,
              "end": 124
            },
            "init": {
              "type": "ArrowFunctionExpression",
              "expression": true,
              "async": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "Literal",
                "value": "S",
                "raw": "\"S\"",
                "start": 133,
                "end": 136
              },
              "id": null,
              "generator": false,
              "start": 127,
              "end": 136
            },
            "definite": false,
            "start": 104,
            "end": 136
          }
        ],
        "declare": false,
        "start": 98,
        "end": 137
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 91,
      "end": 137
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "VariableDeclaration",
        "kind": "let",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "fnExpressionLetVariable",
              "optional": false,
              "typeAnnotation": null,
              "start": 150,
              "end": 173
            },
            "init": {
              "type": "FunctionExpression",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "foo",
                "optional": false,
                "typeAnnotation": null,
                "start": 185,
                "end": 188
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
                      "type": "Literal",
                      "value": 0,
                      "raw": "0",
                      "start": 200,
                      "end": 201
                    },
                    "start": 193,
                    "end": 202
                  }
                ],
                "start": 191,
                "end": 203
              },
              "expression": false,
              "start": 176,
              "end": 203
            },
            "definite": false,
            "start": 150,
            "end": 203
          }
        ],
        "declare": false,
        "start": 146,
        "end": 203
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 139,
      "end": 203
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "VariableDeclaration",
        "kind": "let",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "fnArrowLetVariable",
              "optional": false,
              "typeAnnotation": null,
              "start": 215,
              "end": 233
            },
            "init": {
              "type": "ArrowFunctionExpression",
              "expression": true,
              "async": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "Literal",
                "value": "S",
                "raw": "\"S\"",
                "start": 242,
                "end": 245
              },
              "id": null,
              "generator": false,
              "start": 236,
              "end": 245
            },
            "definite": false,
            "start": 215,
            "end": 245
          }
        ],
        "declare": false,
        "start": 211,
        "end": 246
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 204,
      "end": 246
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "VariableDeclaration",
        "kind": "var",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "fnExpressionVarVariable",
              "optional": false,
              "typeAnnotation": null,
              "start": 259,
              "end": 282
            },
            "init": {
              "type": "FunctionExpression",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "foo",
                "optional": false,
                "typeAnnotation": null,
                "start": 294,
                "end": 297
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
                      "type": "Literal",
                      "value": 0,
                      "raw": "0",
                      "start": 309,
                      "end": 310
                    },
                    "start": 302,
                    "end": 311
                  }
                ],
                "start": 300,
                "end": 312
              },
              "expression": false,
              "start": 285,
              "end": 312
            },
            "definite": false,
            "start": 259,
            "end": 312
          }
        ],
        "declare": false,
        "start": 255,
        "end": 312
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 248,
      "end": 312
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "VariableDeclaration",
        "kind": "var",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "fnArrowVarVariable",
              "optional": false,
              "typeAnnotation": null,
              "start": 324,
              "end": 342
            },
            "init": {
              "type": "ArrowFunctionExpression",
              "expression": true,
              "async": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "Literal",
                "value": "S",
                "raw": "\"S\"",
                "start": 351,
                "end": 354
              },
              "id": null,
              "generator": false,
              "start": 345,
              "end": 354
            },
            "definite": false,
            "start": 324,
            "end": 354
          }
        ],
        "declare": false,
        "start": 320,
        "end": 355
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 313,
      "end": 355
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "VariableDeclaration",
        "kind": "const",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "fnExpressionConstVariableOk",
              "optional": false,
              "typeAnnotation": null,
              "start": 383,
              "end": 410
            },
            "init": {
              "type": "FunctionExpression",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "foo",
                "optional": false,
                "typeAnnotation": null,
                "start": 422,
                "end": 425
              },
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSNumberKeyword",
                  "start": 429,
                  "end": 435
                },
                "start": 427,
                "end": 435
              },
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "Literal",
                      "value": 0,
                      "raw": "0",
                      "start": 445,
                      "end": 446
                    },
                    "start": 438,
                    "end": 447
                  }
                ],
                "start": 436,
                "end": 448
              },
              "expression": false,
              "start": 413,
              "end": 448
            },
            "definite": false,
            "start": 383,
            "end": 448
          }
        ],
        "declare": false,
        "start": 377,
        "end": 448
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 370,
      "end": 448
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "VariableDeclaration",
        "kind": "const",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "fnArrowConstVariableOk",
              "optional": false,
              "typeAnnotation": null,
              "start": 462,
              "end": 484
            },
            "init": {
              "type": "ArrowFunctionExpression",
              "expression": true,
              "async": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "AssignmentPattern",
                  "decorators": [],
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "cb",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 488,
                    "end": 490
                  },
                  "right": {
                    "type": "FunctionExpression",
                    "id": null,
                    "generator": false,
                    "async": false,
                    "declare": false,
                    "typeParameters": null,
                    "params": [],
                    "returnType": null,
                    "body": {
                      "type": "BlockStatement",
                      "body": [],
                      "start": 503,
                      "end": 506
                    },
                    "expression": false,
                    "start": 493,
                    "end": 506
                  },
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 488,
                  "end": 506
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSStringKeyword",
                  "start": 509,
                  "end": 515
                },
                "start": 507,
                "end": 515
              },
              "body": {
                "type": "Literal",
                "value": "S",
                "raw": "\"S\"",
                "start": 519,
                "end": 522
              },
              "id": null,
              "generator": false,
              "start": 487,
              "end": 522
            },
            "definite": false,
            "start": 462,
            "end": 522
          }
        ],
        "declare": false,
        "start": 456,
        "end": 523
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 449,
      "end": 523
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "VariableDeclaration",
        "kind": "let",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "fnExpressionLetVariableOk",
              "optional": false,
              "typeAnnotation": null,
              "start": 536,
              "end": 561
            },
            "init": {
              "type": "FunctionExpression",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "foo",
                "optional": false,
                "typeAnnotation": null,
                "start": 573,
                "end": 576
              },
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSNumberKeyword",
                  "start": 580,
                  "end": 586
                },
                "start": 578,
                "end": 586
              },
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "Literal",
                      "value": 0,
                      "raw": "0",
                      "start": 596,
                      "end": 597
                    },
                    "start": 589,
                    "end": 598
                  }
                ],
                "start": 587,
                "end": 599
              },
              "expression": false,
              "start": 564,
              "end": 599
            },
            "definite": false,
            "start": 536,
            "end": 599
          }
        ],
        "declare": false,
        "start": 532,
        "end": 599
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 525,
      "end": 599
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "VariableDeclaration",
        "kind": "let",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "fnArrowLetVariableOk",
              "optional": false,
              "typeAnnotation": null,
              "start": 611,
              "end": 631
            },
            "init": {
              "type": "ArrowFunctionExpression",
              "expression": true,
              "async": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "AssignmentPattern",
                  "decorators": [],
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "cb",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 635,
                    "end": 637
                  },
                  "right": {
                    "type": "FunctionExpression",
                    "id": null,
                    "generator": false,
                    "async": false,
                    "declare": false,
                    "typeParameters": null,
                    "params": [],
                    "returnType": null,
                    "body": {
                      "type": "BlockStatement",
                      "body": [],
                      "start": 650,
                      "end": 653
                    },
                    "expression": false,
                    "start": 640,
                    "end": 653
                  },
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 635,
                  "end": 653
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSStringKeyword",
                  "start": 656,
                  "end": 662
                },
                "start": 654,
                "end": 662
              },
              "body": {
                "type": "Literal",
                "value": "S",
                "raw": "\"S\"",
                "start": 666,
                "end": 669
              },
              "id": null,
              "generator": false,
              "start": 634,
              "end": 669
            },
            "definite": false,
            "start": 611,
            "end": 669
          }
        ],
        "declare": false,
        "start": 607,
        "end": 670
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 600,
      "end": 670
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "VariableDeclaration",
        "kind": "var",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "fnExpressionVarVariableOk",
              "optional": false,
              "typeAnnotation": null,
              "start": 683,
              "end": 708
            },
            "init": {
              "type": "FunctionExpression",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "foo",
                "optional": false,
                "typeAnnotation": null,
                "start": 720,
                "end": 723
              },
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSNumberKeyword",
                  "start": 727,
                  "end": 733
                },
                "start": 725,
                "end": 733
              },
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "Literal",
                      "value": 0,
                      "raw": "0",
                      "start": 743,
                      "end": 744
                    },
                    "start": 736,
                    "end": 745
                  }
                ],
                "start": 734,
                "end": 746
              },
              "expression": false,
              "start": 711,
              "end": 746
            },
            "definite": false,
            "start": 683,
            "end": 746
          }
        ],
        "declare": false,
        "start": 679,
        "end": 746
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 672,
      "end": 746
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "VariableDeclaration",
        "kind": "var",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "fnArrowVarVariableOk",
              "optional": false,
              "typeAnnotation": null,
              "start": 758,
              "end": 778
            },
            "init": {
              "type": "ArrowFunctionExpression",
              "expression": true,
              "async": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "AssignmentPattern",
                  "decorators": [],
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "cb",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 782,
                    "end": 784
                  },
                  "right": {
                    "type": "FunctionExpression",
                    "id": null,
                    "generator": false,
                    "async": false,
                    "declare": false,
                    "typeParameters": null,
                    "params": [],
                    "returnType": null,
                    "body": {
                      "type": "BlockStatement",
                      "body": [],
                      "start": 797,
                      "end": 800
                    },
                    "expression": false,
                    "start": 787,
                    "end": 800
                  },
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 782,
                  "end": 800
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSStringKeyword",
                  "start": 803,
                  "end": 809
                },
                "start": 801,
                "end": 809
              },
              "body": {
                "type": "Literal",
                "value": "S",
                "raw": "\"S\"",
                "start": 813,
                "end": 816
              },
              "id": null,
              "generator": false,
              "start": 781,
              "end": 816
            },
            "definite": false,
            "start": 758,
            "end": 816
          }
        ],
        "declare": false,
        "start": 754,
        "end": 817
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 747,
      "end": 817
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
            "name": "fnExpressionConstVariableInternal",
            "optional": false,
            "typeAnnotation": null,
            "start": 841,
            "end": 874
          },
          "init": {
            "type": "FunctionExpression",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null,
              "start": 886,
              "end": 889
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
                    "type": "Literal",
                    "value": 0,
                    "raw": "0",
                    "start": 901,
                    "end": 902
                  },
                  "start": 894,
                  "end": 903
                }
              ],
              "start": 892,
              "end": 904
            },
            "expression": false,
            "start": 877,
            "end": 904
          },
          "definite": false,
          "start": 841,
          "end": 904
        }
      ],
      "declare": false,
      "start": 835,
      "end": 904
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
            "name": "fnArrowConstVariableInternal",
            "optional": false,
            "typeAnnotation": null,
            "start": 911,
            "end": 939
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "expression": true,
            "async": false,
            "typeParameters": null,
            "params": [],
            "returnType": null,
            "body": {
              "type": "Literal",
              "value": "S",
              "raw": "\"S\"",
              "start": 948,
              "end": 951
            },
            "id": null,
            "generator": false,
            "start": 942,
            "end": 951
          },
          "definite": false,
          "start": 911,
          "end": 951
        }
      ],
      "declare": false,
      "start": 905,
      "end": 952
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
            "name": "fnExpressionLetVariableInternal",
            "optional": false,
            "typeAnnotation": null,
            "start": 958,
            "end": 989
          },
          "init": {
            "type": "FunctionExpression",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null,
              "start": 1001,
              "end": 1004
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
                    "type": "Literal",
                    "value": 0,
                    "raw": "0",
                    "start": 1016,
                    "end": 1017
                  },
                  "start": 1009,
                  "end": 1018
                }
              ],
              "start": 1007,
              "end": 1019
            },
            "expression": false,
            "start": 992,
            "end": 1019
          },
          "definite": false,
          "start": 958,
          "end": 1019
        }
      ],
      "declare": false,
      "start": 954,
      "end": 1019
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
            "name": "fnArrowLetVariableInternal",
            "optional": false,
            "typeAnnotation": null,
            "start": 1024,
            "end": 1050
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "expression": true,
            "async": false,
            "typeParameters": null,
            "params": [],
            "returnType": null,
            "body": {
              "type": "Literal",
              "value": "S",
              "raw": "\"S\"",
              "start": 1059,
              "end": 1062
            },
            "id": null,
            "generator": false,
            "start": 1053,
            "end": 1062
          },
          "definite": false,
          "start": 1024,
          "end": 1062
        }
      ],
      "declare": false,
      "start": 1020,
      "end": 1063
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
            "name": "fnExpressionVarVariableInternal",
            "optional": false,
            "typeAnnotation": null,
            "start": 1069,
            "end": 1100
          },
          "init": {
            "type": "FunctionExpression",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null,
              "start": 1112,
              "end": 1115
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
                    "type": "Literal",
                    "value": 0,
                    "raw": "0",
                    "start": 1127,
                    "end": 1128
                  },
                  "start": 1120,
                  "end": 1129
                }
              ],
              "start": 1118,
              "end": 1130
            },
            "expression": false,
            "start": 1103,
            "end": 1130
          },
          "definite": false,
          "start": 1069,
          "end": 1130
        }
      ],
      "declare": false,
      "start": 1065,
      "end": 1130
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
            "name": "fnArrowVarVariableInternal",
            "optional": false,
            "typeAnnotation": null,
            "start": 1135,
            "end": 1161
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "expression": true,
            "async": false,
            "typeParameters": null,
            "params": [],
            "returnType": null,
            "body": {
              "type": "Literal",
              "value": "S",
              "raw": "\"S\"",
              "start": 1170,
              "end": 1173
            },
            "id": null,
            "generator": false,
            "start": 1164,
            "end": 1173
          },
          "definite": false,
          "start": 1135,
          "end": 1173
        }
      ],
      "declare": false,
      "start": 1131,
      "end": 1174
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "ClassDeclaration",
        "decorators": [],
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "ExportedClass",
          "optional": false,
          "typeAnnotation": null,
          "start": 1208,
          "end": 1221
        },
        "typeParameters": null,
        "superClass": null,
        "superTypeArguments": null,
        "implements": [],
        "body": {
          "type": "ClassBody",
          "body": [
            {
              "type": "PropertyDefinition",
              "decorators": [],
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "fnExpression",
                "optional": false,
                "typeAnnotation": null,
                "start": 1249,
                "end": 1261
              },
              "typeAnnotation": null,
              "value": {
                "type": "FunctionExpression",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "foo",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1273,
                  "end": 1276
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
                        "type": "Literal",
                        "value": 0,
                        "raw": "0",
                        "start": 1288,
                        "end": 1289
                      },
                      "start": 1281,
                      "end": 1290
                    }
                  ],
                  "start": 1279,
                  "end": 1292
                },
                "expression": false,
                "start": 1264,
                "end": 1292
              },
              "computed": false,
              "static": false,
              "declare": false,
              "override": false,
              "optional": false,
              "definite": false,
              "readonly": false,
              "accessibility": null,
              "start": 1249,
              "end": 1292
            },
            {
              "type": "PropertyDefinition",
              "decorators": [],
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "fnArrow",
                "optional": false,
                "typeAnnotation": null,
                "start": 1297,
                "end": 1304
              },
              "typeAnnotation": null,
              "value": {
                "type": "ArrowFunctionExpression",
                "expression": true,
                "async": false,
                "typeParameters": null,
                "params": [],
                "returnType": null,
                "body": {
                  "type": "Literal",
                  "value": "S",
                  "raw": "\"S\"",
                  "start": 1313,
                  "end": 1316
                },
                "id": null,
                "generator": false,
                "start": 1307,
                "end": 1316
              },
              "computed": false,
              "static": false,
              "declare": false,
              "override": false,
              "optional": false,
              "definite": false,
              "readonly": false,
              "accessibility": null,
              "start": 1297,
              "end": 1317
            },
            {
              "type": "PropertyDefinition",
              "decorators": [],
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "fnExpressionProtected",
                "optional": false,
                "typeAnnotation": null,
                "start": 1336,
                "end": 1357
              },
              "typeAnnotation": null,
              "value": {
                "type": "FunctionExpression",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "foo",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1369,
                  "end": 1372
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
                        "type": "Literal",
                        "value": 0,
                        "raw": "0",
                        "start": 1384,
                        "end": 1385
                      },
                      "start": 1377,
                      "end": 1386
                    }
                  ],
                  "start": 1375,
                  "end": 1388
                },
                "expression": false,
                "start": 1360,
                "end": 1388
              },
              "computed": false,
              "static": false,
              "declare": false,
              "override": false,
              "optional": false,
              "definite": false,
              "readonly": false,
              "accessibility": "protected",
              "start": 1326,
              "end": 1388
            },
            {
              "type": "PropertyDefinition",
              "decorators": [],
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "fnArrowProtected",
                "optional": false,
                "typeAnnotation": null,
                "start": 1403,
                "end": 1419
              },
              "typeAnnotation": null,
              "value": {
                "type": "ArrowFunctionExpression",
                "expression": true,
                "async": false,
                "typeParameters": null,
                "params": [],
                "returnType": null,
                "body": {
                  "type": "Literal",
                  "value": "S",
                  "raw": "\"S\"",
                  "start": 1428,
                  "end": 1431
                },
                "id": null,
                "generator": false,
                "start": 1422,
                "end": 1431
              },
              "computed": false,
              "static": false,
              "declare": false,
              "override": false,
              "optional": false,
              "definite": false,
              "readonly": false,
              "accessibility": "protected",
              "start": 1393,
              "end": 1432
            },
            {
              "type": "PropertyDefinition",
              "decorators": [],
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "fnStaticExpression",
                "optional": false,
                "typeAnnotation": null,
                "start": 1445,
                "end": 1463
              },
              "typeAnnotation": null,
              "value": {
                "type": "FunctionExpression",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "foo",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1475,
                  "end": 1478
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
                        "type": "Literal",
                        "value": 0,
                        "raw": "0",
                        "start": 1490,
                        "end": 1491
                      },
                      "start": 1483,
                      "end": 1492
                    }
                  ],
                  "start": 1481,
                  "end": 1494
                },
                "expression": false,
                "start": 1466,
                "end": 1494
              },
              "computed": false,
              "static": true,
              "declare": false,
              "override": false,
              "optional": false,
              "definite": false,
              "readonly": false,
              "accessibility": null,
              "start": 1438,
              "end": 1494
            },
            {
              "type": "PropertyDefinition",
              "decorators": [],
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "fnStaticArrow",
                "optional": false,
                "typeAnnotation": null,
                "start": 1506,
                "end": 1519
              },
              "typeAnnotation": null,
              "value": {
                "type": "ArrowFunctionExpression",
                "expression": true,
                "async": false,
                "typeParameters": null,
                "params": [],
                "returnType": null,
                "body": {
                  "type": "Literal",
                  "value": "S",
                  "raw": "\"S\"",
                  "start": 1528,
                  "end": 1531
                },
                "id": null,
                "generator": false,
                "start": 1522,
                "end": 1531
              },
              "computed": false,
              "static": true,
              "declare": false,
              "override": false,
              "optional": false,
              "definite": false,
              "readonly": false,
              "accessibility": null,
              "start": 1499,
              "end": 1532
            },
            {
              "type": "PropertyDefinition",
              "decorators": [],
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "fnStaticExpressionProtected",
                "optional": false,
                "typeAnnotation": null,
                "start": 1554,
                "end": 1581
              },
              "typeAnnotation": null,
              "value": {
                "type": "FunctionExpression",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "foo",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1593,
                  "end": 1596
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
                        "type": "Literal",
                        "value": 0,
                        "raw": "0",
                        "start": 1608,
                        "end": 1609
                      },
                      "start": 1601,
                      "end": 1610
                    }
                  ],
                  "start": 1599,
                  "end": 1612
                },
                "expression": false,
                "start": 1584,
                "end": 1612
              },
              "computed": false,
              "static": true,
              "declare": false,
              "override": false,
              "optional": false,
              "definite": false,
              "readonly": false,
              "accessibility": "protected",
              "start": 1537,
              "end": 1612
            },
            {
              "type": "PropertyDefinition",
              "decorators": [],
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "fnStaticArrowProtected",
                "optional": false,
                "typeAnnotation": null,
                "start": 1638,
                "end": 1660
              },
              "typeAnnotation": null,
              "value": {
                "type": "ArrowFunctionExpression",
                "expression": true,
                "async": false,
                "typeParameters": null,
                "params": [],
                "returnType": null,
                "body": {
                  "type": "Literal",
                  "value": "S",
                  "raw": "\"S\"",
                  "start": 1669,
                  "end": 1672
                },
                "id": null,
                "generator": false,
                "start": 1663,
                "end": 1672
              },
              "computed": false,
              "static": true,
              "declare": false,
              "override": false,
              "optional": false,
              "definite": false,
              "readonly": false,
              "accessibility": "protected",
              "start": 1621,
              "end": 1673
            },
            {
              "type": "PropertyDefinition",
              "decorators": [],
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "fnExpressionOk",
                "optional": false,
                "typeAnnotation": null,
                "start": 1710,
                "end": 1724
              },
              "typeAnnotation": null,
              "value": {
                "type": "FunctionExpression",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "foo",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1736,
                  "end": 1739
                },
                "generator": false,
                "async": false,
                "declare": false,
                "typeParameters": null,
                "params": [],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 1743,
                    "end": 1749
                  },
                  "start": 1741,
                  "end": 1749
                },
                "body": {
                  "type": "BlockStatement",
                  "body": [
                    {
                      "type": "ReturnStatement",
                      "argument": {
                        "type": "Literal",
                        "value": 0,
                        "raw": "0",
                        "start": 1759,
                        "end": 1760
                      },
                      "start": 1752,
                      "end": 1761
                    }
                  ],
                  "start": 1750,
                  "end": 1763
                },
                "expression": false,
                "start": 1727,
                "end": 1763
              },
              "computed": false,
              "static": false,
              "declare": false,
              "override": false,
              "optional": false,
              "definite": false,
              "readonly": false,
              "accessibility": null,
              "start": 1710,
              "end": 1763
            },
            {
              "type": "PropertyDefinition",
              "decorators": [],
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "fnArrowOK",
                "optional": false,
                "typeAnnotation": null,
                "start": 1768,
                "end": 1777
              },
              "typeAnnotation": null,
              "value": {
                "type": "ArrowFunctionExpression",
                "expression": true,
                "async": false,
                "typeParameters": null,
                "params": [],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 1784,
                    "end": 1790
                  },
                  "start": 1782,
                  "end": 1790
                },
                "body": {
                  "type": "Literal",
                  "value": "S",
                  "raw": "\"S\"",
                  "start": 1794,
                  "end": 1797
                },
                "id": null,
                "generator": false,
                "start": 1780,
                "end": 1797
              },
              "computed": false,
              "static": false,
              "declare": false,
              "override": false,
              "optional": false,
              "definite": false,
              "readonly": false,
              "accessibility": null,
              "start": 1768,
              "end": 1798
            },
            {
              "type": "PropertyDefinition",
              "decorators": [],
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "fnExpressionProtectedOk",
                "optional": false,
                "typeAnnotation": null,
                "start": 1813,
                "end": 1836
              },
              "typeAnnotation": null,
              "value": {
                "type": "FunctionExpression",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "foo",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1848,
                  "end": 1851
                },
                "generator": false,
                "async": false,
                "declare": false,
                "typeParameters": null,
                "params": [],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 1855,
                    "end": 1861
                  },
                  "start": 1853,
                  "end": 1861
                },
                "body": {
                  "type": "BlockStatement",
                  "body": [
                    {
                      "type": "ReturnStatement",
                      "argument": {
                        "type": "Literal",
                        "value": 0,
                        "raw": "0",
                        "start": 1871,
                        "end": 1872
                      },
                      "start": 1864,
                      "end": 1873
                    }
                  ],
                  "start": 1862,
                  "end": 1875
                },
                "expression": false,
                "start": 1839,
                "end": 1875
              },
              "computed": false,
              "static": false,
              "declare": false,
              "override": false,
              "optional": false,
              "definite": false,
              "readonly": false,
              "accessibility": "protected",
              "start": 1803,
              "end": 1875
            },
            {
              "type": "PropertyDefinition",
              "decorators": [],
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "fnArrowProtectedOK",
                "optional": false,
                "typeAnnotation": null,
                "start": 1890,
                "end": 1908
              },
              "typeAnnotation": null,
              "value": {
                "type": "ArrowFunctionExpression",
                "expression": true,
                "async": false,
                "typeParameters": null,
                "params": [],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 1915,
                    "end": 1921
                  },
                  "start": 1913,
                  "end": 1921
                },
                "body": {
                  "type": "Literal",
                  "value": "S",
                  "raw": "\"S\"",
                  "start": 1925,
                  "end": 1928
                },
                "id": null,
                "generator": false,
                "start": 1911,
                "end": 1928
              },
              "computed": false,
              "static": false,
              "declare": false,
              "override": false,
              "optional": false,
              "definite": false,
              "readonly": false,
              "accessibility": "protected",
              "start": 1880,
              "end": 1929
            },
            {
              "type": "PropertyDefinition",
              "decorators": [],
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "fnStaticExpressionOk",
                "optional": false,
                "typeAnnotation": null,
                "start": 1942,
                "end": 1962
              },
              "typeAnnotation": null,
              "value": {
                "type": "FunctionExpression",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "foo",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1974,
                  "end": 1977
                },
                "generator": false,
                "async": false,
                "declare": false,
                "typeParameters": null,
                "params": [],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 1981,
                    "end": 1987
                  },
                  "start": 1979,
                  "end": 1987
                },
                "body": {
                  "type": "BlockStatement",
                  "body": [
                    {
                      "type": "ReturnStatement",
                      "argument": {
                        "type": "Literal",
                        "value": 0,
                        "raw": "0",
                        "start": 1997,
                        "end": 1998
                      },
                      "start": 1990,
                      "end": 1999
                    }
                  ],
                  "start": 1988,
                  "end": 2001
                },
                "expression": false,
                "start": 1965,
                "end": 2001
              },
              "computed": false,
              "static": true,
              "declare": false,
              "override": false,
              "optional": false,
              "definite": false,
              "readonly": false,
              "accessibility": null,
              "start": 1935,
              "end": 2001
            },
            {
              "type": "PropertyDefinition",
              "decorators": [],
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "fnStaticArrowOk",
                "optional": false,
                "typeAnnotation": null,
                "start": 2013,
                "end": 2028
              },
              "typeAnnotation": null,
              "value": {
                "type": "ArrowFunctionExpression",
                "expression": true,
                "async": false,
                "typeParameters": null,
                "params": [],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 2035,
                    "end": 2041
                  },
                  "start": 2033,
                  "end": 2041
                },
                "body": {
                  "type": "Literal",
                  "value": "S",
                  "raw": "\"S\"",
                  "start": 2045,
                  "end": 2048
                },
                "id": null,
                "generator": false,
                "start": 2031,
                "end": 2048
              },
              "computed": false,
              "static": true,
              "declare": false,
              "override": false,
              "optional": false,
              "definite": false,
              "readonly": false,
              "accessibility": null,
              "start": 2006,
              "end": 2049
            },
            {
              "type": "PropertyDefinition",
              "decorators": [],
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "fnStaticExpressionProtectedOk",
                "optional": false,
                "typeAnnotation": null,
                "start": 2071,
                "end": 2100
              },
              "typeAnnotation": null,
              "value": {
                "type": "FunctionExpression",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "foo",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2112,
                  "end": 2115
                },
                "generator": false,
                "async": false,
                "declare": false,
                "typeParameters": null,
                "params": [],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 2119,
                    "end": 2125
                  },
                  "start": 2117,
                  "end": 2125
                },
                "body": {
                  "type": "BlockStatement",
                  "body": [
                    {
                      "type": "ReturnStatement",
                      "argument": {
                        "type": "Literal",
                        "value": 0,
                        "raw": "0",
                        "start": 2135,
                        "end": 2136
                      },
                      "start": 2128,
                      "end": 2137
                    }
                  ],
                  "start": 2126,
                  "end": 2139
                },
                "expression": false,
                "start": 2103,
                "end": 2139
              },
              "computed": false,
              "static": true,
              "declare": false,
              "override": false,
              "optional": false,
              "definite": false,
              "readonly": false,
              "accessibility": "protected",
              "start": 2054,
              "end": 2139
            },
            {
              "type": "PropertyDefinition",
              "decorators": [],
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "fnStaticArrowProtectedOk",
                "optional": false,
                "typeAnnotation": null,
                "start": 2165,
                "end": 2189
              },
              "typeAnnotation": null,
              "value": {
                "type": "ArrowFunctionExpression",
                "expression": true,
                "async": false,
                "typeParameters": null,
                "params": [],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 2196,
                    "end": 2202
                  },
                  "start": 2194,
                  "end": 2202
                },
                "body": {
                  "type": "Literal",
                  "value": "S",
                  "raw": "\"S\"",
                  "start": 2206,
                  "end": 2209
                },
                "id": null,
                "generator": false,
                "start": 2192,
                "end": 2209
              },
              "computed": false,
              "static": true,
              "declare": false,
              "override": false,
              "optional": false,
              "definite": false,
              "readonly": false,
              "accessibility": "protected",
              "start": 2148,
              "end": 2210
            },
            {
              "type": "PropertyDefinition",
              "decorators": [],
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "fnExpressionPrivate",
                "optional": false,
                "typeAnnotation": null,
                "start": 2265,
                "end": 2284
              },
              "typeAnnotation": null,
              "value": {
                "type": "FunctionExpression",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "foo",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2296,
                  "end": 2299
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
                        "type": "Literal",
                        "value": 0,
                        "raw": "0",
                        "start": 2311,
                        "end": 2312
                      },
                      "start": 2304,
                      "end": 2313
                    }
                  ],
                  "start": 2302,
                  "end": 2315
                },
                "expression": false,
                "start": 2287,
                "end": 2315
              },
              "computed": false,
              "static": false,
              "declare": false,
              "override": false,
              "optional": false,
              "definite": false,
              "readonly": false,
              "accessibility": "private",
              "start": 2257,
              "end": 2315
            },
            {
              "type": "PropertyDefinition",
              "decorators": [],
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "fnArrowPrivate",
                "optional": false,
                "typeAnnotation": null,
                "start": 2328,
                "end": 2342
              },
              "typeAnnotation": null,
              "value": {
                "type": "ArrowFunctionExpression",
                "expression": true,
                "async": false,
                "typeParameters": null,
                "params": [],
                "returnType": null,
                "body": {
                  "type": "Literal",
                  "value": "S",
                  "raw": "\"S\"",
                  "start": 2351,
                  "end": 2354
                },
                "id": null,
                "generator": false,
                "start": 2345,
                "end": 2354
              },
              "computed": false,
              "static": false,
              "declare": false,
              "override": false,
              "optional": false,
              "definite": false,
              "readonly": false,
              "accessibility": "private",
              "start": 2320,
              "end": 2355
            },
            {
              "type": "PropertyDefinition",
              "decorators": [],
              "key": {
                "type": "PrivateIdentifier",
                "name": "fnArrow",
                "start": 2360,
                "end": 2368
              },
              "typeAnnotation": null,
              "value": {
                "type": "ArrowFunctionExpression",
                "expression": true,
                "async": false,
                "typeParameters": null,
                "params": [],
                "returnType": null,
                "body": {
                  "type": "Literal",
                  "value": "S",
                  "raw": "\"S\"",
                  "start": 2377,
                  "end": 2380
                },
                "id": null,
                "generator": false,
                "start": 2371,
                "end": 2380
              },
              "computed": false,
              "static": false,
              "declare": false,
              "override": false,
              "optional": false,
              "definite": false,
              "readonly": false,
              "accessibility": null,
              "start": 2360,
              "end": 2381
            },
            {
              "type": "PropertyDefinition",
              "decorators": [],
              "key": {
                "type": "PrivateIdentifier",
                "name": "fnExpression",
                "start": 2386,
                "end": 2399
              },
              "typeAnnotation": null,
              "value": {
                "type": "FunctionExpression",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "foo",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2411,
                  "end": 2414
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
                        "type": "Literal",
                        "value": 0,
                        "raw": "0",
                        "start": 2426,
                        "end": 2427
                      },
                      "start": 2419,
                      "end": 2428
                    }
                  ],
                  "start": 2417,
                  "end": 2429
                },
                "expression": false,
                "start": 2402,
                "end": 2429
              },
              "computed": false,
              "static": false,
              "declare": false,
              "override": false,
              "optional": false,
              "definite": false,
              "readonly": false,
              "accessibility": null,
              "start": 2386,
              "end": 2429
            },
            {
              "type": "PropertyDefinition",
              "decorators": [],
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "fnStaticExpressionPrivate",
                "optional": false,
                "typeAnnotation": null,
                "start": 2449,
                "end": 2474
              },
              "typeAnnotation": null,
              "value": {
                "type": "FunctionExpression",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "foo",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2486,
                  "end": 2489
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
                        "type": "Literal",
                        "value": 0,
                        "raw": "0",
                        "start": 2501,
                        "end": 2502
                      },
                      "start": 2494,
                      "end": 2503
                    }
                  ],
                  "start": 2492,
                  "end": 2505
                },
                "expression": false,
                "start": 2477,
                "end": 2505
              },
              "computed": false,
              "static": true,
              "declare": false,
              "override": false,
              "optional": false,
              "definite": false,
              "readonly": false,
              "accessibility": "private",
              "start": 2434,
              "end": 2505
            },
            {
              "type": "PropertyDefinition",
              "decorators": [],
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "fnStaticArrowPrivate",
                "optional": false,
                "typeAnnotation": null,
                "start": 2525,
                "end": 2545
              },
              "typeAnnotation": null,
              "value": {
                "type": "ArrowFunctionExpression",
                "expression": true,
                "async": false,
                "typeParameters": null,
                "params": [],
                "returnType": null,
                "body": {
                  "type": "Literal",
                  "value": "S",
                  "raw": "\"S\"",
                  "start": 2554,
                  "end": 2557
                },
                "id": null,
                "generator": false,
                "start": 2548,
                "end": 2557
              },
              "computed": false,
              "static": true,
              "declare": false,
              "override": false,
              "optional": false,
              "definite": false,
              "readonly": false,
              "accessibility": "private",
              "start": 2510,
              "end": 2558
            }
          ],
          "start": 1222,
          "end": 2560
        },
        "abstract": false,
        "declare": false,
        "start": 1202,
        "end": 2560
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 1195,
      "end": 2560
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "IndirectlyExportedClass",
        "optional": false,
        "typeAnnotation": null,
        "start": 2584,
        "end": 2607
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "fnExpression",
              "optional": false,
              "typeAnnotation": null,
              "start": 2615,
              "end": 2627
            },
            "typeAnnotation": null,
            "value": {
              "type": "FunctionExpression",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "foo",
                "optional": false,
                "typeAnnotation": null,
                "start": 2639,
                "end": 2642
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
                      "type": "Literal",
                      "value": 0,
                      "raw": "0",
                      "start": 2654,
                      "end": 2655
                    },
                    "start": 2647,
                    "end": 2656
                  }
                ],
                "start": 2645,
                "end": 2658
              },
              "expression": false,
              "start": 2630,
              "end": 2658
            },
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 2615,
            "end": 2658
          },
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "fnArrow",
              "optional": false,
              "typeAnnotation": null,
              "start": 2663,
              "end": 2670
            },
            "typeAnnotation": null,
            "value": {
              "type": "ArrowFunctionExpression",
              "expression": true,
              "async": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "Literal",
                "value": "S",
                "raw": "\"S\"",
                "start": 2679,
                "end": 2682
              },
              "id": null,
              "generator": false,
              "start": 2673,
              "end": 2682
            },
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 2663,
            "end": 2683
          },
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "fnStaticExpression",
              "optional": false,
              "typeAnnotation": null,
              "start": 2696,
              "end": 2714
            },
            "typeAnnotation": null,
            "value": {
              "type": "FunctionExpression",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "foo",
                "optional": false,
                "typeAnnotation": null,
                "start": 2726,
                "end": 2729
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
                      "type": "Literal",
                      "value": 0,
                      "raw": "0",
                      "start": 2741,
                      "end": 2742
                    },
                    "start": 2734,
                    "end": 2743
                  }
                ],
                "start": 2732,
                "end": 2745
              },
              "expression": false,
              "start": 2717,
              "end": 2745
            },
            "computed": false,
            "static": true,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 2689,
            "end": 2745
          },
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "fnStaticArrow",
              "optional": false,
              "typeAnnotation": null,
              "start": 2757,
              "end": 2770
            },
            "typeAnnotation": null,
            "value": {
              "type": "ArrowFunctionExpression",
              "expression": true,
              "async": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "Literal",
                "value": "S",
                "raw": "\"S\"",
                "start": 2779,
                "end": 2782
              },
              "id": null,
              "generator": false,
              "start": 2773,
              "end": 2782
            },
            "computed": false,
            "static": true,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 2750,
            "end": 2783
          },
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "fnStaticExpressionProtected",
              "optional": false,
              "typeAnnotation": null,
              "start": 2810,
              "end": 2837
            },
            "typeAnnotation": null,
            "value": {
              "type": "FunctionExpression",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "foo",
                "optional": false,
                "typeAnnotation": null,
                "start": 2849,
                "end": 2852
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
                      "type": "Literal",
                      "value": 0,
                      "raw": "0",
                      "start": 2864,
                      "end": 2865
                    },
                    "start": 2857,
                    "end": 2866
                  }
                ],
                "start": 2855,
                "end": 2868
              },
              "expression": false,
              "start": 2840,
              "end": 2868
            },
            "computed": false,
            "static": true,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": "protected",
            "start": 2793,
            "end": 2868
          },
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "fnStaticArrowProtected",
              "optional": false,
              "typeAnnotation": null,
              "start": 2894,
              "end": 2916
            },
            "typeAnnotation": null,
            "value": {
              "type": "ArrowFunctionExpression",
              "expression": true,
              "async": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "Literal",
                "value": "S",
                "raw": "\"S\"",
                "start": 2925,
                "end": 2928
              },
              "id": null,
              "generator": false,
              "start": 2919,
              "end": 2928
            },
            "computed": false,
            "static": true,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": "protected",
            "start": 2877,
            "end": 2929
          },
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "fnExpressionPrivate",
              "optional": false,
              "typeAnnotation": null,
              "start": 2943,
              "end": 2962
            },
            "typeAnnotation": null,
            "value": {
              "type": "FunctionExpression",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "foo",
                "optional": false,
                "typeAnnotation": null,
                "start": 2974,
                "end": 2977
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
                      "type": "Literal",
                      "value": 0,
                      "raw": "0",
                      "start": 2989,
                      "end": 2990
                    },
                    "start": 2982,
                    "end": 2991
                  }
                ],
                "start": 2980,
                "end": 2993
              },
              "expression": false,
              "start": 2965,
              "end": 2993
            },
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": "private",
            "start": 2935,
            "end": 2993
          },
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "fnArrowPrivate",
              "optional": false,
              "typeAnnotation": null,
              "start": 3006,
              "end": 3020
            },
            "typeAnnotation": null,
            "value": {
              "type": "ArrowFunctionExpression",
              "expression": true,
              "async": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "Literal",
                "value": "S",
                "raw": "\"S\"",
                "start": 3029,
                "end": 3032
              },
              "id": null,
              "generator": false,
              "start": 3023,
              "end": 3032
            },
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": "private",
            "start": 2998,
            "end": 3033
          },
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "PrivateIdentifier",
              "name": "fnArrow",
              "start": 3038,
              "end": 3046
            },
            "typeAnnotation": null,
            "value": {
              "type": "ArrowFunctionExpression",
              "expression": true,
              "async": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "Literal",
                "value": "S",
                "raw": "\"S\"",
                "start": 3055,
                "end": 3058
              },
              "id": null,
              "generator": false,
              "start": 3049,
              "end": 3058
            },
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 3038,
            "end": 3059
          },
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "PrivateIdentifier",
              "name": "fnExpression",
              "start": 3064,
              "end": 3077
            },
            "typeAnnotation": null,
            "value": {
              "type": "FunctionExpression",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "foo",
                "optional": false,
                "typeAnnotation": null,
                "start": 3089,
                "end": 3092
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
                      "type": "Literal",
                      "value": 0,
                      "raw": "0",
                      "start": 3104,
                      "end": 3105
                    },
                    "start": 3097,
                    "end": 3106
                  }
                ],
                "start": 3095,
                "end": 3107
              },
              "expression": false,
              "start": 3080,
              "end": 3107
            },
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 3064,
            "end": 3107
          },
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "fnStaticExpressionPrivate",
              "optional": false,
              "typeAnnotation": null,
              "start": 3127,
              "end": 3152
            },
            "typeAnnotation": null,
            "value": {
              "type": "FunctionExpression",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "foo",
                "optional": false,
                "typeAnnotation": null,
                "start": 3164,
                "end": 3167
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
                      "type": "Literal",
                      "value": 0,
                      "raw": "0",
                      "start": 3179,
                      "end": 3180
                    },
                    "start": 3172,
                    "end": 3181
                  }
                ],
                "start": 3170,
                "end": 3183
              },
              "expression": false,
              "start": 3155,
              "end": 3183
            },
            "computed": false,
            "static": true,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": "private",
            "start": 3112,
            "end": 3183
          },
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "fnStaticArrowPrivate",
              "optional": false,
              "typeAnnotation": null,
              "start": 3203,
              "end": 3223
            },
            "typeAnnotation": null,
            "value": {
              "type": "ArrowFunctionExpression",
              "expression": true,
              "async": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "Literal",
                "value": "S",
                "raw": "\"S\"",
                "start": 3232,
                "end": 3235
              },
              "id": null,
              "generator": false,
              "start": 3226,
              "end": 3235
            },
            "computed": false,
            "static": true,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": "private",
            "start": 3188,
            "end": 3236
          }
        ],
        "start": 2608,
        "end": 3238
      },
      "abstract": false,
      "declare": false,
      "start": 2578,
      "end": 3238
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "VariableDeclaration",
        "kind": "const",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "instance",
              "optional": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "IndirectlyExportedClass",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 3262,
                    "end": 3285
                  },
                  "typeArguments": null,
                  "start": 3262,
                  "end": 3285
                },
                "start": 3260,
                "end": 3285
              },
              "start": 3252,
              "end": 3285
            },
            "init": {
              "type": "NewExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "IndirectlyExportedClass",
                "optional": false,
                "typeAnnotation": null,
                "start": 3292,
                "end": 3315
              },
              "typeArguments": null,
              "arguments": [],
              "start": 3288,
              "end": 3317
            },
            "definite": false,
            "start": 3252,
            "end": 3317
          }
        ],
        "declare": false,
        "start": 3246,
        "end": 3318
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 3239,
      "end": 3318
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "InternalClass",
        "optional": false,
        "typeAnnotation": null,
        "start": 3339,
        "end": 3352
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "fnExpression",
              "optional": false,
              "typeAnnotation": null,
              "start": 3360,
              "end": 3372
            },
            "typeAnnotation": null,
            "value": {
              "type": "FunctionExpression",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "foo",
                "optional": false,
                "typeAnnotation": null,
                "start": 3384,
                "end": 3387
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
                      "type": "Literal",
                      "value": 0,
                      "raw": "0",
                      "start": 3399,
                      "end": 3400
                    },
                    "start": 3392,
                    "end": 3401
                  }
                ],
                "start": 3390,
                "end": 3403
              },
              "expression": false,
              "start": 3375,
              "end": 3403
            },
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 3360,
            "end": 3403
          },
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "fnArrow",
              "optional": false,
              "typeAnnotation": null,
              "start": 3408,
              "end": 3415
            },
            "typeAnnotation": null,
            "value": {
              "type": "ArrowFunctionExpression",
              "expression": true,
              "async": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "Literal",
                "value": "S",
                "raw": "\"S\"",
                "start": 3424,
                "end": 3427
              },
              "id": null,
              "generator": false,
              "start": 3418,
              "end": 3427
            },
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 3408,
            "end": 3428
          },
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "fnStaticExpression",
              "optional": false,
              "typeAnnotation": null,
              "start": 3441,
              "end": 3459
            },
            "typeAnnotation": null,
            "value": {
              "type": "FunctionExpression",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "foo",
                "optional": false,
                "typeAnnotation": null,
                "start": 3471,
                "end": 3474
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
                      "type": "Literal",
                      "value": 0,
                      "raw": "0",
                      "start": 3486,
                      "end": 3487
                    },
                    "start": 3479,
                    "end": 3488
                  }
                ],
                "start": 3477,
                "end": 3490
              },
              "expression": false,
              "start": 3462,
              "end": 3490
            },
            "computed": false,
            "static": true,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 3434,
            "end": 3490
          },
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "fnStaticArrow",
              "optional": false,
              "typeAnnotation": null,
              "start": 3502,
              "end": 3515
            },
            "typeAnnotation": null,
            "value": {
              "type": "ArrowFunctionExpression",
              "expression": true,
              "async": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "Literal",
                "value": "S",
                "raw": "\"S\"",
                "start": 3524,
                "end": 3527
              },
              "id": null,
              "generator": false,
              "start": 3518,
              "end": 3527
            },
            "computed": false,
            "static": true,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 3495,
            "end": 3528
          },
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "fnStaticExpressionProtected",
              "optional": false,
              "typeAnnotation": null,
              "start": 3555,
              "end": 3582
            },
            "typeAnnotation": null,
            "value": {
              "type": "FunctionExpression",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "foo",
                "optional": false,
                "typeAnnotation": null,
                "start": 3594,
                "end": 3597
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
                      "type": "Literal",
                      "value": 0,
                      "raw": "0",
                      "start": 3609,
                      "end": 3610
                    },
                    "start": 3602,
                    "end": 3611
                  }
                ],
                "start": 3600,
                "end": 3613
              },
              "expression": false,
              "start": 3585,
              "end": 3613
            },
            "computed": false,
            "static": true,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": "protected",
            "start": 3538,
            "end": 3613
          },
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "fnStaticArrowProtected",
              "optional": false,
              "typeAnnotation": null,
              "start": 3639,
              "end": 3661
            },
            "typeAnnotation": null,
            "value": {
              "type": "ArrowFunctionExpression",
              "expression": true,
              "async": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "Literal",
                "value": "S",
                "raw": "\"S\"",
                "start": 3670,
                "end": 3673
              },
              "id": null,
              "generator": false,
              "start": 3664,
              "end": 3673
            },
            "computed": false,
            "static": true,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": "protected",
            "start": 3622,
            "end": 3674
          },
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "fnExpressionPrivate",
              "optional": false,
              "typeAnnotation": null,
              "start": 3688,
              "end": 3707
            },
            "typeAnnotation": null,
            "value": {
              "type": "FunctionExpression",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "foo",
                "optional": false,
                "typeAnnotation": null,
                "start": 3719,
                "end": 3722
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
                      "type": "Literal",
                      "value": 0,
                      "raw": "0",
                      "start": 3734,
                      "end": 3735
                    },
                    "start": 3727,
                    "end": 3736
                  }
                ],
                "start": 3725,
                "end": 3738
              },
              "expression": false,
              "start": 3710,
              "end": 3738
            },
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": "private",
            "start": 3680,
            "end": 3738
          },
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "fnArrowPrivate",
              "optional": false,
              "typeAnnotation": null,
              "start": 3751,
              "end": 3765
            },
            "typeAnnotation": null,
            "value": {
              "type": "ArrowFunctionExpression",
              "expression": true,
              "async": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "Literal",
                "value": "S",
                "raw": "\"S\"",
                "start": 3774,
                "end": 3777
              },
              "id": null,
              "generator": false,
              "start": 3768,
              "end": 3777
            },
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": "private",
            "start": 3743,
            "end": 3778
          },
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "PrivateIdentifier",
              "name": "fnArrow",
              "start": 3783,
              "end": 3791
            },
            "typeAnnotation": null,
            "value": {
              "type": "ArrowFunctionExpression",
              "expression": true,
              "async": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "Literal",
                "value": "S",
                "raw": "\"S\"",
                "start": 3800,
                "end": 3803
              },
              "id": null,
              "generator": false,
              "start": 3794,
              "end": 3803
            },
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 3783,
            "end": 3804
          },
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "PrivateIdentifier",
              "name": "fnExpression",
              "start": 3809,
              "end": 3822
            },
            "typeAnnotation": null,
            "value": {
              "type": "FunctionExpression",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "foo",
                "optional": false,
                "typeAnnotation": null,
                "start": 3834,
                "end": 3837
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
                      "type": "Literal",
                      "value": 0,
                      "raw": "0",
                      "start": 3849,
                      "end": 3850
                    },
                    "start": 3842,
                    "end": 3851
                  }
                ],
                "start": 3840,
                "end": 3852
              },
              "expression": false,
              "start": 3825,
              "end": 3852
            },
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 3809,
            "end": 3852
          },
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "fnStaticExpressionPrivate",
              "optional": false,
              "typeAnnotation": null,
              "start": 3872,
              "end": 3897
            },
            "typeAnnotation": null,
            "value": {
              "type": "FunctionExpression",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "foo",
                "optional": false,
                "typeAnnotation": null,
                "start": 3909,
                "end": 3912
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
                      "type": "Literal",
                      "value": 0,
                      "raw": "0",
                      "start": 3924,
                      "end": 3925
                    },
                    "start": 3917,
                    "end": 3926
                  }
                ],
                "start": 3915,
                "end": 3928
              },
              "expression": false,
              "start": 3900,
              "end": 3928
            },
            "computed": false,
            "static": true,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": "private",
            "start": 3857,
            "end": 3928
          },
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "fnStaticArrowPrivate",
              "optional": false,
              "typeAnnotation": null,
              "start": 3948,
              "end": 3968
            },
            "typeAnnotation": null,
            "value": {
              "type": "ArrowFunctionExpression",
              "expression": true,
              "async": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "Literal",
                "value": "S",
                "raw": "\"S\"",
                "start": 3977,
                "end": 3980
              },
              "id": null,
              "generator": false,
              "start": 3971,
              "end": 3980
            },
            "computed": false,
            "static": true,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": "private",
            "start": 3933,
            "end": 3981
          }
        ],
        "start": 3353,
        "end": 3983
      },
      "abstract": false,
      "declare": false,
      "start": 3333,
      "end": 3983
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
            "name": "internalInstance",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "InternalClass",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 4008,
                  "end": 4021
                },
                "typeArguments": null,
                "start": 4008,
                "end": 4021
              },
              "start": 4006,
              "end": 4021
            },
            "start": 3990,
            "end": 4021
          },
          "init": {
            "type": "NewExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "InternalClass",
              "optional": false,
              "typeAnnotation": null,
              "start": 4028,
              "end": 4041
            },
            "typeArguments": null,
            "arguments": [],
            "start": 4024,
            "end": 4043
          },
          "definite": false,
          "start": 3990,
          "end": 4043
        }
      ],
      "declare": false,
      "start": 3984,
      "end": 4044
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "VariableDeclaration",
        "kind": "const",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "fnParamExpressionConstVariable",
              "optional": false,
              "typeAnnotation": null,
              "start": 4126,
              "end": 4156
            },
            "init": {
              "type": "FunctionExpression",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "foo",
                "optional": false,
                "typeAnnotation": null,
                "start": 4168,
                "end": 4171
              },
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "AssignmentPattern",
                  "decorators": [],
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "cb",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 4172,
                    "end": 4174
                  },
                  "right": {
                    "type": "FunctionExpression",
                    "id": null,
                    "generator": false,
                    "async": false,
                    "declare": false,
                    "typeParameters": null,
                    "params": [],
                    "returnType": null,
                    "body": {
                      "type": "BlockStatement",
                      "body": [],
                      "start": 4187,
                      "end": 4190
                    },
                    "expression": false,
                    "start": 4177,
                    "end": 4190
                  },
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 4172,
                  "end": 4190
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "Literal",
                      "value": 0,
                      "raw": "0",
                      "start": 4201,
                      "end": 4202
                    },
                    "start": 4194,
                    "end": 4203
                  }
                ],
                "start": 4192,
                "end": 4204
              },
              "expression": false,
              "start": 4159,
              "end": 4204
            },
            "definite": false,
            "start": 4126,
            "end": 4204
          }
        ],
        "declare": false,
        "start": 4120,
        "end": 4204
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 4113,
      "end": 4204
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "VariableDeclaration",
        "kind": "const",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "fnParamArrowConstVariable",
              "optional": false,
              "typeAnnotation": null,
              "start": 4218,
              "end": 4243
            },
            "init": {
              "type": "ArrowFunctionExpression",
              "expression": true,
              "async": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "AssignmentPattern",
                  "decorators": [],
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "cb",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 4247,
                    "end": 4249
                  },
                  "right": {
                    "type": "ArrowFunctionExpression",
                    "expression": true,
                    "async": false,
                    "typeParameters": null,
                    "params": [],
                    "returnType": null,
                    "body": {
                      "type": "Literal",
                      "value": 1,
                      "raw": "1",
                      "start": 4258,
                      "end": 4259
                    },
                    "id": null,
                    "generator": false,
                    "start": 4252,
                    "end": 4259
                  },
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 4247,
                  "end": 4259
                }
              ],
              "returnType": null,
              "body": {
                "type": "Literal",
                "value": "S",
                "raw": "\"S\"",
                "start": 4264,
                "end": 4267
              },
              "id": null,
              "generator": false,
              "start": 4246,
              "end": 4267
            },
            "definite": false,
            "start": 4218,
            "end": 4267
          }
        ],
        "declare": false,
        "start": 4212,
        "end": 4268
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 4205,
      "end": 4268
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "VariableDeclaration",
        "kind": "let",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "fnParamExpressionLetVariable",
              "optional": false,
              "typeAnnotation": null,
              "start": 4281,
              "end": 4309
            },
            "init": {
              "type": "FunctionExpression",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "foo",
                "optional": false,
                "typeAnnotation": null,
                "start": 4321,
                "end": 4324
              },
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "AssignmentPattern",
                  "decorators": [],
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "cb",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 4325,
                    "end": 4327
                  },
                  "right": {
                    "type": "FunctionExpression",
                    "id": null,
                    "generator": false,
                    "async": false,
                    "declare": false,
                    "typeParameters": null,
                    "params": [],
                    "returnType": null,
                    "body": {
                      "type": "BlockStatement",
                      "body": [],
                      "start": 4340,
                      "end": 4343
                    },
                    "expression": false,
                    "start": 4330,
                    "end": 4343
                  },
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 4325,
                  "end": 4343
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "Literal",
                      "value": 0,
                      "raw": "0",
                      "start": 4354,
                      "end": 4355
                    },
                    "start": 4347,
                    "end": 4356
                  }
                ],
                "start": 4345,
                "end": 4357
              },
              "expression": false,
              "start": 4312,
              "end": 4357
            },
            "definite": false,
            "start": 4281,
            "end": 4357
          }
        ],
        "declare": false,
        "start": 4277,
        "end": 4357
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 4270,
      "end": 4357
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "VariableDeclaration",
        "kind": "let",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "fnParamArrowLetVariable",
              "optional": false,
              "typeAnnotation": null,
              "start": 4369,
              "end": 4392
            },
            "init": {
              "type": "ArrowFunctionExpression",
              "expression": true,
              "async": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "AssignmentPattern",
                  "decorators": [],
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "cb",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 4396,
                    "end": 4398
                  },
                  "right": {
                    "type": "ArrowFunctionExpression",
                    "expression": true,
                    "async": false,
                    "typeParameters": null,
                    "params": [],
                    "returnType": null,
                    "body": {
                      "type": "Literal",
                      "value": 1,
                      "raw": "1",
                      "start": 4407,
                      "end": 4408
                    },
                    "id": null,
                    "generator": false,
                    "start": 4401,
                    "end": 4408
                  },
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 4396,
                  "end": 4408
                }
              ],
              "returnType": null,
              "body": {
                "type": "Literal",
                "value": "S",
                "raw": "\"S\"",
                "start": 4413,
                "end": 4416
              },
              "id": null,
              "generator": false,
              "start": 4395,
              "end": 4416
            },
            "definite": false,
            "start": 4369,
            "end": 4416
          }
        ],
        "declare": false,
        "start": 4365,
        "end": 4417
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 4358,
      "end": 4417
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "VariableDeclaration",
        "kind": "var",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "fnParamExpressionVarVariable",
              "optional": false,
              "typeAnnotation": null,
              "start": 4430,
              "end": 4458
            },
            "init": {
              "type": "FunctionExpression",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "foo",
                "optional": false,
                "typeAnnotation": null,
                "start": 4470,
                "end": 4473
              },
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "AssignmentPattern",
                  "decorators": [],
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "cb",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 4474,
                    "end": 4476
                  },
                  "right": {
                    "type": "FunctionExpression",
                    "id": null,
                    "generator": false,
                    "async": false,
                    "declare": false,
                    "typeParameters": null,
                    "params": [],
                    "returnType": null,
                    "body": {
                      "type": "BlockStatement",
                      "body": [],
                      "start": 4489,
                      "end": 4492
                    },
                    "expression": false,
                    "start": 4479,
                    "end": 4492
                  },
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 4474,
                  "end": 4492
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "Literal",
                      "value": 0,
                      "raw": "0",
                      "start": 4503,
                      "end": 4504
                    },
                    "start": 4496,
                    "end": 4505
                  }
                ],
                "start": 4494,
                "end": 4506
              },
              "expression": false,
              "start": 4461,
              "end": 4506
            },
            "definite": false,
            "start": 4430,
            "end": 4506
          }
        ],
        "declare": false,
        "start": 4426,
        "end": 4506
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 4419,
      "end": 4506
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "VariableDeclaration",
        "kind": "var",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "fnParamArrowVarVariable",
              "optional": false,
              "typeAnnotation": null,
              "start": 4518,
              "end": 4541
            },
            "init": {
              "type": "ArrowFunctionExpression",
              "expression": true,
              "async": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "AssignmentPattern",
                  "decorators": [],
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "cb",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 4545,
                    "end": 4547
                  },
                  "right": {
                    "type": "ArrowFunctionExpression",
                    "expression": true,
                    "async": false,
                    "typeParameters": null,
                    "params": [],
                    "returnType": null,
                    "body": {
                      "type": "Literal",
                      "value": 1,
                      "raw": "1",
                      "start": 4556,
                      "end": 4557
                    },
                    "id": null,
                    "generator": false,
                    "start": 4550,
                    "end": 4557
                  },
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 4545,
                  "end": 4557
                }
              ],
              "returnType": null,
              "body": {
                "type": "Literal",
                "value": "S",
                "raw": "\"S\"",
                "start": 4562,
                "end": 4565
              },
              "id": null,
              "generator": false,
              "start": 4544,
              "end": 4565
            },
            "definite": false,
            "start": 4518,
            "end": 4565
          }
        ],
        "declare": false,
        "start": 4514,
        "end": 4566
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 4507,
      "end": 4566
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "VariableDeclaration",
        "kind": "const",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "fnParamExpressionConstVariableOwnerHasReturnType",
              "optional": false,
              "typeAnnotation": null,
              "start": 4636,
              "end": 4684
            },
            "init": {
              "type": "FunctionExpression",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "foo",
                "optional": false,
                "typeAnnotation": null,
                "start": 4696,
                "end": 4699
              },
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "AssignmentPattern",
                  "decorators": [],
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "cb",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 4700,
                    "end": 4702
                  },
                  "right": {
                    "type": "FunctionExpression",
                    "id": null,
                    "generator": false,
                    "async": false,
                    "declare": false,
                    "typeParameters": null,
                    "params": [],
                    "returnType": null,
                    "body": {
                      "type": "BlockStatement",
                      "body": [],
                      "start": 4715,
                      "end": 4718
                    },
                    "expression": false,
                    "start": 4705,
                    "end": 4718
                  },
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 4700,
                  "end": 4718
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSNumberKeyword",
                  "start": 4721,
                  "end": 4727
                },
                "start": 4719,
                "end": 4727
              },
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "Literal",
                      "value": 0,
                      "raw": "0",
                      "start": 4737,
                      "end": 4738
                    },
                    "start": 4730,
                    "end": 4739
                  }
                ],
                "start": 4728,
                "end": 4740
              },
              "expression": false,
              "start": 4687,
              "end": 4740
            },
            "definite": false,
            "start": 4636,
            "end": 4740
          }
        ],
        "declare": false,
        "start": 4630,
        "end": 4740
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 4623,
      "end": 4740
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "VariableDeclaration",
        "kind": "const",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "fnParamArrowConstVariableOwnerHasReturnType",
              "optional": false,
              "typeAnnotation": null,
              "start": 4754,
              "end": 4797
            },
            "init": {
              "type": "ArrowFunctionExpression",
              "expression": true,
              "async": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "AssignmentPattern",
                  "decorators": [],
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "cb",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 4801,
                    "end": 4803
                  },
                  "right": {
                    "type": "FunctionExpression",
                    "id": null,
                    "generator": false,
                    "async": false,
                    "declare": false,
                    "typeParameters": null,
                    "params": [],
                    "returnType": null,
                    "body": {
                      "type": "BlockStatement",
                      "body": [],
                      "start": 4816,
                      "end": 4819
                    },
                    "expression": false,
                    "start": 4806,
                    "end": 4819
                  },
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 4801,
                  "end": 4819
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSStringKeyword",
                  "start": 4822,
                  "end": 4828
                },
                "start": 4820,
                "end": 4828
              },
              "body": {
                "type": "Literal",
                "value": "S",
                "raw": "\"S\"",
                "start": 4832,
                "end": 4835
              },
              "id": null,
              "generator": false,
              "start": 4800,
              "end": 4835
            },
            "definite": false,
            "start": 4754,
            "end": 4835
          }
        ],
        "declare": false,
        "start": 4748,
        "end": 4836
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 4741,
      "end": 4836
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "VariableDeclaration",
        "kind": "let",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "fnParamExpressionLetVariableOwnerHasReturnType",
              "optional": false,
              "typeAnnotation": null,
              "start": 4849,
              "end": 4895
            },
            "init": {
              "type": "FunctionExpression",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "foo",
                "optional": false,
                "typeAnnotation": null,
                "start": 4907,
                "end": 4910
              },
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "AssignmentPattern",
                  "decorators": [],
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "cb",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 4911,
                    "end": 4913
                  },
                  "right": {
                    "type": "FunctionExpression",
                    "id": null,
                    "generator": false,
                    "async": false,
                    "declare": false,
                    "typeParameters": null,
                    "params": [],
                    "returnType": null,
                    "body": {
                      "type": "BlockStatement",
                      "body": [],
                      "start": 4926,
                      "end": 4929
                    },
                    "expression": false,
                    "start": 4916,
                    "end": 4929
                  },
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 4911,
                  "end": 4929
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSNumberKeyword",
                  "start": 4932,
                  "end": 4938
                },
                "start": 4930,
                "end": 4938
              },
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "Literal",
                      "value": 0,
                      "raw": "0",
                      "start": 4948,
                      "end": 4949
                    },
                    "start": 4941,
                    "end": 4950
                  }
                ],
                "start": 4939,
                "end": 4951
              },
              "expression": false,
              "start": 4898,
              "end": 4951
            },
            "definite": false,
            "start": 4849,
            "end": 4951
          }
        ],
        "declare": false,
        "start": 4845,
        "end": 4951
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 4838,
      "end": 4951
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "VariableDeclaration",
        "kind": "let",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "fnParamArrowLetVariableOwnerHasReturnType",
              "optional": false,
              "typeAnnotation": null,
              "start": 4963,
              "end": 5004
            },
            "init": {
              "type": "ArrowFunctionExpression",
              "expression": true,
              "async": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "AssignmentPattern",
                  "decorators": [],
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "cb",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 5008,
                    "end": 5010
                  },
                  "right": {
                    "type": "FunctionExpression",
                    "id": null,
                    "generator": false,
                    "async": false,
                    "declare": false,
                    "typeParameters": null,
                    "params": [],
                    "returnType": null,
                    "body": {
                      "type": "BlockStatement",
                      "body": [],
                      "start": 5023,
                      "end": 5026
                    },
                    "expression": false,
                    "start": 5013,
                    "end": 5026
                  },
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 5008,
                  "end": 5026
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSStringKeyword",
                  "start": 5029,
                  "end": 5035
                },
                "start": 5027,
                "end": 5035
              },
              "body": {
                "type": "Literal",
                "value": "S",
                "raw": "\"S\"",
                "start": 5039,
                "end": 5042
              },
              "id": null,
              "generator": false,
              "start": 5007,
              "end": 5042
            },
            "definite": false,
            "start": 4963,
            "end": 5042
          }
        ],
        "declare": false,
        "start": 4959,
        "end": 5043
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 4952,
      "end": 5043
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "VariableDeclaration",
        "kind": "var",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "fnParamExpressionVarVariableOwnerHasReturnType",
              "optional": false,
              "typeAnnotation": null,
              "start": 5056,
              "end": 5102
            },
            "init": {
              "type": "FunctionExpression",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "foo",
                "optional": false,
                "typeAnnotation": null,
                "start": 5114,
                "end": 5117
              },
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "AssignmentPattern",
                  "decorators": [],
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "cb",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 5118,
                    "end": 5120
                  },
                  "right": {
                    "type": "FunctionExpression",
                    "id": null,
                    "generator": false,
                    "async": false,
                    "declare": false,
                    "typeParameters": null,
                    "params": [],
                    "returnType": null,
                    "body": {
                      "type": "BlockStatement",
                      "body": [],
                      "start": 5133,
                      "end": 5136
                    },
                    "expression": false,
                    "start": 5123,
                    "end": 5136
                  },
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 5118,
                  "end": 5136
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSNumberKeyword",
                  "start": 5139,
                  "end": 5145
                },
                "start": 5137,
                "end": 5145
              },
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "Literal",
                      "value": 0,
                      "raw": "0",
                      "start": 5155,
                      "end": 5156
                    },
                    "start": 5148,
                    "end": 5157
                  }
                ],
                "start": 5146,
                "end": 5158
              },
              "expression": false,
              "start": 5105,
              "end": 5158
            },
            "definite": false,
            "start": 5056,
            "end": 5158
          }
        ],
        "declare": false,
        "start": 5052,
        "end": 5158
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 5045,
      "end": 5158
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "VariableDeclaration",
        "kind": "var",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "fnParamArrowVarVariableOwnerHasReturnType",
              "optional": false,
              "typeAnnotation": null,
              "start": 5170,
              "end": 5211
            },
            "init": {
              "type": "ArrowFunctionExpression",
              "expression": true,
              "async": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "AssignmentPattern",
                  "decorators": [],
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "cb",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 5215,
                    "end": 5217
                  },
                  "right": {
                    "type": "FunctionExpression",
                    "id": null,
                    "generator": false,
                    "async": false,
                    "declare": false,
                    "typeParameters": null,
                    "params": [],
                    "returnType": null,
                    "body": {
                      "type": "BlockStatement",
                      "body": [],
                      "start": 5230,
                      "end": 5233
                    },
                    "expression": false,
                    "start": 5220,
                    "end": 5233
                  },
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 5215,
                  "end": 5233
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSStringKeyword",
                  "start": 5236,
                  "end": 5242
                },
                "start": 5234,
                "end": 5242
              },
              "body": {
                "type": "Literal",
                "value": "S",
                "raw": "\"S\"",
                "start": 5246,
                "end": 5249
              },
              "id": null,
              "generator": false,
              "start": 5214,
              "end": 5249
            },
            "definite": false,
            "start": 5170,
            "end": 5249
          }
        ],
        "declare": false,
        "start": 5166,
        "end": 5250
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 5159,
      "end": 5250
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "VariableDeclaration",
        "kind": "const",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "fnParamExpressionConstVariableOk",
              "optional": false,
              "typeAnnotation": null,
              "start": 5278,
              "end": 5310
            },
            "init": {
              "type": "FunctionExpression",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "foo",
                "optional": false,
                "typeAnnotation": null,
                "start": 5322,
                "end": 5325
              },
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "AssignmentPattern",
                  "decorators": [],
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "cb",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 5326,
                    "end": 5328
                  },
                  "right": {
                    "type": "FunctionExpression",
                    "id": null,
                    "generator": false,
                    "async": false,
                    "declare": false,
                    "typeParameters": null,
                    "params": [],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSVoidKeyword",
                        "start": 5343,
                        "end": 5347
                      },
                      "start": 5341,
                      "end": 5347
                    },
                    "body": {
                      "type": "BlockStatement",
                      "body": [],
                      "start": 5347,
                      "end": 5350
                    },
                    "expression": false,
                    "start": 5331,
                    "end": 5350
                  },
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 5326,
                  "end": 5350
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSNumberKeyword",
                  "start": 5353,
                  "end": 5359
                },
                "start": 5351,
                "end": 5359
              },
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "Literal",
                      "value": 0,
                      "raw": "0",
                      "start": 5369,
                      "end": 5370
                    },
                    "start": 5362,
                    "end": 5371
                  }
                ],
                "start": 5360,
                "end": 5372
              },
              "expression": false,
              "start": 5313,
              "end": 5372
            },
            "definite": false,
            "start": 5278,
            "end": 5372
          }
        ],
        "declare": false,
        "start": 5272,
        "end": 5372
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 5265,
      "end": 5372
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "VariableDeclaration",
        "kind": "const",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "fnParamArrowConstVariableOk",
              "optional": false,
              "typeAnnotation": null,
              "start": 5386,
              "end": 5413
            },
            "init": {
              "type": "ArrowFunctionExpression",
              "expression": true,
              "async": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "AssignmentPattern",
                  "decorators": [],
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "cb",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 5417,
                    "end": 5419
                  },
                  "right": {
                    "type": "FunctionExpression",
                    "id": null,
                    "generator": false,
                    "async": false,
                    "declare": false,
                    "typeParameters": null,
                    "params": [],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSVoidKeyword",
                        "start": 5434,
                        "end": 5438
                      },
                      "start": 5432,
                      "end": 5438
                    },
                    "body": {
                      "type": "BlockStatement",
                      "body": [],
                      "start": 5438,
                      "end": 5441
                    },
                    "expression": false,
                    "start": 5422,
                    "end": 5441
                  },
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 5417,
                  "end": 5441
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSStringKeyword",
                  "start": 5444,
                  "end": 5450
                },
                "start": 5442,
                "end": 5450
              },
              "body": {
                "type": "Literal",
                "value": "S",
                "raw": "\"S\"",
                "start": 5454,
                "end": 5457
              },
              "id": null,
              "generator": false,
              "start": 5416,
              "end": 5457
            },
            "definite": false,
            "start": 5386,
            "end": 5457
          }
        ],
        "declare": false,
        "start": 5380,
        "end": 5458
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 5373,
      "end": 5458
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "VariableDeclaration",
        "kind": "let",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "fnParamExpressionLetVariableOk",
              "optional": false,
              "typeAnnotation": null,
              "start": 5471,
              "end": 5501
            },
            "init": {
              "type": "FunctionExpression",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "foo",
                "optional": false,
                "typeAnnotation": null,
                "start": 5513,
                "end": 5516
              },
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "AssignmentPattern",
                  "decorators": [],
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "cb",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 5517,
                    "end": 5519
                  },
                  "right": {
                    "type": "FunctionExpression",
                    "id": null,
                    "generator": false,
                    "async": false,
                    "declare": false,
                    "typeParameters": null,
                    "params": [],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSVoidKeyword",
                        "start": 5534,
                        "end": 5538
                      },
                      "start": 5532,
                      "end": 5538
                    },
                    "body": {
                      "type": "BlockStatement",
                      "body": [],
                      "start": 5538,
                      "end": 5541
                    },
                    "expression": false,
                    "start": 5522,
                    "end": 5541
                  },
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 5517,
                  "end": 5541
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSNumberKeyword",
                  "start": 5544,
                  "end": 5550
                },
                "start": 5542,
                "end": 5550
              },
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "Literal",
                      "value": 0,
                      "raw": "0",
                      "start": 5560,
                      "end": 5561
                    },
                    "start": 5553,
                    "end": 5562
                  }
                ],
                "start": 5551,
                "end": 5563
              },
              "expression": false,
              "start": 5504,
              "end": 5563
            },
            "definite": false,
            "start": 5471,
            "end": 5563
          }
        ],
        "declare": false,
        "start": 5467,
        "end": 5563
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 5460,
      "end": 5563
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "VariableDeclaration",
        "kind": "let",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "fnParamArrowLetVariableOk",
              "optional": false,
              "typeAnnotation": null,
              "start": 5575,
              "end": 5600
            },
            "init": {
              "type": "ArrowFunctionExpression",
              "expression": true,
              "async": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "AssignmentPattern",
                  "decorators": [],
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "cb",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 5604,
                    "end": 5606
                  },
                  "right": {
                    "type": "FunctionExpression",
                    "id": null,
                    "generator": false,
                    "async": false,
                    "declare": false,
                    "typeParameters": null,
                    "params": [],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSVoidKeyword",
                        "start": 5621,
                        "end": 5625
                      },
                      "start": 5619,
                      "end": 5625
                    },
                    "body": {
                      "type": "BlockStatement",
                      "body": [],
                      "start": 5625,
                      "end": 5628
                    },
                    "expression": false,
                    "start": 5609,
                    "end": 5628
                  },
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 5604,
                  "end": 5628
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSStringKeyword",
                  "start": 5631,
                  "end": 5637
                },
                "start": 5629,
                "end": 5637
              },
              "body": {
                "type": "Literal",
                "value": "S",
                "raw": "\"S\"",
                "start": 5641,
                "end": 5644
              },
              "id": null,
              "generator": false,
              "start": 5603,
              "end": 5644
            },
            "definite": false,
            "start": 5575,
            "end": 5644
          }
        ],
        "declare": false,
        "start": 5571,
        "end": 5645
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 5564,
      "end": 5645
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "VariableDeclaration",
        "kind": "var",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "fnParamExpressionVarVariableOk",
              "optional": false,
              "typeAnnotation": null,
              "start": 5658,
              "end": 5688
            },
            "init": {
              "type": "FunctionExpression",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "foo",
                "optional": false,
                "typeAnnotation": null,
                "start": 5700,
                "end": 5703
              },
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "AssignmentPattern",
                  "decorators": [],
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "cb",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 5704,
                    "end": 5706
                  },
                  "right": {
                    "type": "FunctionExpression",
                    "id": null,
                    "generator": false,
                    "async": false,
                    "declare": false,
                    "typeParameters": null,
                    "params": [],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSVoidKeyword",
                        "start": 5721,
                        "end": 5725
                      },
                      "start": 5719,
                      "end": 5725
                    },
                    "body": {
                      "type": "BlockStatement",
                      "body": [],
                      "start": 5725,
                      "end": 5728
                    },
                    "expression": false,
                    "start": 5709,
                    "end": 5728
                  },
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 5704,
                  "end": 5728
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSNumberKeyword",
                  "start": 5731,
                  "end": 5737
                },
                "start": 5729,
                "end": 5737
              },
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "Literal",
                      "value": 0,
                      "raw": "0",
                      "start": 5747,
                      "end": 5748
                    },
                    "start": 5740,
                    "end": 5749
                  }
                ],
                "start": 5738,
                "end": 5750
              },
              "expression": false,
              "start": 5691,
              "end": 5750
            },
            "definite": false,
            "start": 5658,
            "end": 5750
          }
        ],
        "declare": false,
        "start": 5654,
        "end": 5750
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 5647,
      "end": 5750
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "VariableDeclaration",
        "kind": "var",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "fnParamArrowVarVariableOk",
              "optional": false,
              "typeAnnotation": null,
              "start": 5762,
              "end": 5787
            },
            "init": {
              "type": "ArrowFunctionExpression",
              "expression": true,
              "async": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "AssignmentPattern",
                  "decorators": [],
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "cb",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 5791,
                    "end": 5793
                  },
                  "right": {
                    "type": "FunctionExpression",
                    "id": null,
                    "generator": false,
                    "async": false,
                    "declare": false,
                    "typeParameters": null,
                    "params": [],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSVoidKeyword",
                        "start": 5808,
                        "end": 5812
                      },
                      "start": 5806,
                      "end": 5812
                    },
                    "body": {
                      "type": "BlockStatement",
                      "body": [],
                      "start": 5812,
                      "end": 5815
                    },
                    "expression": false,
                    "start": 5796,
                    "end": 5815
                  },
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 5791,
                  "end": 5815
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSStringKeyword",
                  "start": 5818,
                  "end": 5824
                },
                "start": 5816,
                "end": 5824
              },
              "body": {
                "type": "Literal",
                "value": "S",
                "raw": "\"S\"",
                "start": 5828,
                "end": 5831
              },
              "id": null,
              "generator": false,
              "start": 5790,
              "end": 5831
            },
            "definite": false,
            "start": 5762,
            "end": 5831
          }
        ],
        "declare": false,
        "start": 5758,
        "end": 5832
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 5751,
      "end": 5832
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "VariableDeclaration",
        "kind": "const",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "fnParamExpressionConstVariableInternal",
              "optional": false,
              "typeAnnotation": null,
              "start": 5847,
              "end": 5885
            },
            "init": {
              "type": "FunctionExpression",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "foo",
                "optional": false,
                "typeAnnotation": null,
                "start": 5897,
                "end": 5900
              },
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "AssignmentPattern",
                  "decorators": [],
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "cb",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 5901,
                    "end": 5903
                  },
                  "right": {
                    "type": "FunctionExpression",
                    "id": null,
                    "generator": false,
                    "async": false,
                    "declare": false,
                    "typeParameters": null,
                    "params": [],
                    "returnType": null,
                    "body": {
                      "type": "BlockStatement",
                      "body": [],
                      "start": 5916,
                      "end": 5919
                    },
                    "expression": false,
                    "start": 5906,
                    "end": 5919
                  },
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 5901,
                  "end": 5919
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "Literal",
                      "value": 0,
                      "raw": "0",
                      "start": 5930,
                      "end": 5931
                    },
                    "start": 5923,
                    "end": 5932
                  }
                ],
                "start": 5921,
                "end": 5933
              },
              "expression": false,
              "start": 5888,
              "end": 5933
            },
            "definite": false,
            "start": 5847,
            "end": 5933
          }
        ],
        "declare": false,
        "start": 5841,
        "end": 5933
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 5834,
      "end": 5933
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "VariableDeclaration",
        "kind": "const",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "fnParamArrowConstVariableInternal",
              "optional": false,
              "typeAnnotation": null,
              "start": 5947,
              "end": 5980
            },
            "init": {
              "type": "ArrowFunctionExpression",
              "expression": true,
              "async": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "AssignmentPattern",
                  "decorators": [],
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "cb",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 5984,
                    "end": 5986
                  },
                  "right": {
                    "type": "ArrowFunctionExpression",
                    "expression": true,
                    "async": false,
                    "typeParameters": null,
                    "params": [],
                    "returnType": null,
                    "body": {
                      "type": "Literal",
                      "value": 1,
                      "raw": "1",
                      "start": 5995,
                      "end": 5996
                    },
                    "id": null,
                    "generator": false,
                    "start": 5989,
                    "end": 5996
                  },
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 5984,
                  "end": 5996
                }
              ],
              "returnType": null,
              "body": {
                "type": "Literal",
                "value": "S",
                "raw": "\"S\"",
                "start": 6001,
                "end": 6004
              },
              "id": null,
              "generator": false,
              "start": 5983,
              "end": 6004
            },
            "definite": false,
            "start": 5947,
            "end": 6004
          }
        ],
        "declare": false,
        "start": 5941,
        "end": 6005
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 5934,
      "end": 6005
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "VariableDeclaration",
        "kind": "let",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "fnParamExpressionLetVariableInternal",
              "optional": false,
              "typeAnnotation": null,
              "start": 6018,
              "end": 6054
            },
            "init": {
              "type": "FunctionExpression",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "foo",
                "optional": false,
                "typeAnnotation": null,
                "start": 6066,
                "end": 6069
              },
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "AssignmentPattern",
                  "decorators": [],
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "cb",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 6070,
                    "end": 6072
                  },
                  "right": {
                    "type": "FunctionExpression",
                    "id": null,
                    "generator": false,
                    "async": false,
                    "declare": false,
                    "typeParameters": null,
                    "params": [],
                    "returnType": null,
                    "body": {
                      "type": "BlockStatement",
                      "body": [],
                      "start": 6085,
                      "end": 6088
                    },
                    "expression": false,
                    "start": 6075,
                    "end": 6088
                  },
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 6070,
                  "end": 6088
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "Literal",
                      "value": 0,
                      "raw": "0",
                      "start": 6099,
                      "end": 6100
                    },
                    "start": 6092,
                    "end": 6101
                  }
                ],
                "start": 6090,
                "end": 6102
              },
              "expression": false,
              "start": 6057,
              "end": 6102
            },
            "definite": false,
            "start": 6018,
            "end": 6102
          }
        ],
        "declare": false,
        "start": 6014,
        "end": 6102
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 6007,
      "end": 6102
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "VariableDeclaration",
        "kind": "let",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "fnParamArrowLetVariableInternal",
              "optional": false,
              "typeAnnotation": null,
              "start": 6114,
              "end": 6145
            },
            "init": {
              "type": "ArrowFunctionExpression",
              "expression": true,
              "async": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "AssignmentPattern",
                  "decorators": [],
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "cb",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 6149,
                    "end": 6151
                  },
                  "right": {
                    "type": "ArrowFunctionExpression",
                    "expression": true,
                    "async": false,
                    "typeParameters": null,
                    "params": [],
                    "returnType": null,
                    "body": {
                      "type": "Literal",
                      "value": 1,
                      "raw": "1",
                      "start": 6160,
                      "end": 6161
                    },
                    "id": null,
                    "generator": false,
                    "start": 6154,
                    "end": 6161
                  },
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 6149,
                  "end": 6161
                }
              ],
              "returnType": null,
              "body": {
                "type": "Literal",
                "value": "S",
                "raw": "\"S\"",
                "start": 6166,
                "end": 6169
              },
              "id": null,
              "generator": false,
              "start": 6148,
              "end": 6169
            },
            "definite": false,
            "start": 6114,
            "end": 6169
          }
        ],
        "declare": false,
        "start": 6110,
        "end": 6170
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 6103,
      "end": 6170
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "VariableDeclaration",
        "kind": "var",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "fnParamExpressionVarVariableInternal",
              "optional": false,
              "typeAnnotation": null,
              "start": 6183,
              "end": 6219
            },
            "init": {
              "type": "FunctionExpression",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "foo",
                "optional": false,
                "typeAnnotation": null,
                "start": 6231,
                "end": 6234
              },
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "AssignmentPattern",
                  "decorators": [],
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "cb",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 6235,
                    "end": 6237
                  },
                  "right": {
                    "type": "FunctionExpression",
                    "id": null,
                    "generator": false,
                    "async": false,
                    "declare": false,
                    "typeParameters": null,
                    "params": [],
                    "returnType": null,
                    "body": {
                      "type": "BlockStatement",
                      "body": [],
                      "start": 6250,
                      "end": 6253
                    },
                    "expression": false,
                    "start": 6240,
                    "end": 6253
                  },
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 6235,
                  "end": 6253
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "Literal",
                      "value": 0,
                      "raw": "0",
                      "start": 6264,
                      "end": 6265
                    },
                    "start": 6257,
                    "end": 6266
                  }
                ],
                "start": 6255,
                "end": 6267
              },
              "expression": false,
              "start": 6222,
              "end": 6267
            },
            "definite": false,
            "start": 6183,
            "end": 6267
          }
        ],
        "declare": false,
        "start": 6179,
        "end": 6267
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 6172,
      "end": 6267
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "VariableDeclaration",
        "kind": "var",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "fnParamArrowVarVariableInternal",
              "optional": false,
              "typeAnnotation": null,
              "start": 6279,
              "end": 6310
            },
            "init": {
              "type": "ArrowFunctionExpression",
              "expression": true,
              "async": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "AssignmentPattern",
                  "decorators": [],
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "cb",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 6314,
                    "end": 6316
                  },
                  "right": {
                    "type": "ArrowFunctionExpression",
                    "expression": true,
                    "async": false,
                    "typeParameters": null,
                    "params": [],
                    "returnType": null,
                    "body": {
                      "type": "Literal",
                      "value": 1,
                      "raw": "1",
                      "start": 6325,
                      "end": 6326
                    },
                    "id": null,
                    "generator": false,
                    "start": 6319,
                    "end": 6326
                  },
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 6314,
                  "end": 6326
                }
              ],
              "returnType": null,
              "body": {
                "type": "Literal",
                "value": "S",
                "raw": "\"S\"",
                "start": 6331,
                "end": 6334
              },
              "id": null,
              "generator": false,
              "start": 6313,
              "end": 6334
            },
            "definite": false,
            "start": 6279,
            "end": 6334
          }
        ],
        "declare": false,
        "start": 6275,
        "end": 6335
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 6268,
      "end": 6335
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "ClassDeclaration",
        "decorators": [],
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "FnParamsExportedClass",
          "optional": false,
          "typeAnnotation": null,
          "start": 6373,
          "end": 6394
        },
        "typeParameters": null,
        "superClass": null,
        "superTypeArguments": null,
        "implements": [],
        "body": {
          "type": "ClassBody",
          "body": [
            {
              "type": "PropertyDefinition",
              "decorators": [],
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "fnExpression",
                "optional": false,
                "typeAnnotation": null,
                "start": 6422,
                "end": 6434
              },
              "typeAnnotation": null,
              "value": {
                "type": "FunctionExpression",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "foo",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 6446,
                  "end": 6449
                },
                "generator": false,
                "async": false,
                "declare": false,
                "typeParameters": null,
                "params": [
                  {
                    "type": "AssignmentPattern",
                    "decorators": [],
                    "left": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "cb",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 6450,
                      "end": 6452
                    },
                    "right": {
                      "type": "FunctionExpression",
                      "id": null,
                      "generator": false,
                      "async": false,
                      "declare": false,
                      "typeParameters": null,
                      "params": [],
                      "returnType": null,
                      "body": {
                        "type": "BlockStatement",
                        "body": [],
                        "start": 6465,
                        "end": 6468
                      },
                      "expression": false,
                      "start": 6455,
                      "end": 6468
                    },
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 6450,
                    "end": 6468
                  }
                ],
                "returnType": null,
                "body": {
                  "type": "BlockStatement",
                  "body": [
                    {
                      "type": "ReturnStatement",
                      "argument": {
                        "type": "Literal",
                        "value": 0,
                        "raw": "0",
                        "start": 6479,
                        "end": 6480
                      },
                      "start": 6472,
                      "end": 6481
                    }
                  ],
                  "start": 6470,
                  "end": 6483
                },
                "expression": false,
                "start": 6437,
                "end": 6483
              },
              "computed": false,
              "static": false,
              "declare": false,
              "override": false,
              "optional": false,
              "definite": false,
              "readonly": false,
              "accessibility": null,
              "start": 6422,
              "end": 6483
            },
            {
              "type": "PropertyDefinition",
              "decorators": [],
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "fnArrow",
                "optional": false,
                "typeAnnotation": null,
                "start": 6488,
                "end": 6495
              },
              "typeAnnotation": null,
              "value": {
                "type": "ArrowFunctionExpression",
                "expression": true,
                "async": false,
                "typeParameters": null,
                "params": [
                  {
                    "type": "AssignmentPattern",
                    "decorators": [],
                    "left": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "cb",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 6499,
                      "end": 6501
                    },
                    "right": {
                      "type": "FunctionExpression",
                      "id": null,
                      "generator": false,
                      "async": false,
                      "declare": false,
                      "typeParameters": null,
                      "params": [],
                      "returnType": null,
                      "body": {
                        "type": "BlockStatement",
                        "body": [],
                        "start": 6514,
                        "end": 6517
                      },
                      "expression": false,
                      "start": 6504,
                      "end": 6517
                    },
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 6499,
                    "end": 6517
                  }
                ],
                "returnType": null,
                "body": {
                  "type": "Literal",
                  "value": "S",
                  "raw": "\"S\"",
                  "start": 6522,
                  "end": 6525
                },
                "id": null,
                "generator": false,
                "start": 6498,
                "end": 6525
              },
              "computed": false,
              "static": false,
              "declare": false,
              "override": false,
              "optional": false,
              "definite": false,
              "readonly": false,
              "accessibility": null,
              "start": 6488,
              "end": 6526
            },
            {
              "type": "PropertyDefinition",
              "decorators": [],
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "fnExpressionProtected",
                "optional": false,
                "typeAnnotation": null,
                "start": 6541,
                "end": 6562
              },
              "typeAnnotation": null,
              "value": {
                "type": "FunctionExpression",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "foo",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 6574,
                  "end": 6577
                },
                "generator": false,
                "async": false,
                "declare": false,
                "typeParameters": null,
                "params": [
                  {
                    "type": "AssignmentPattern",
                    "decorators": [],
                    "left": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "cb",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 6578,
                      "end": 6580
                    },
                    "right": {
                      "type": "FunctionExpression",
                      "id": null,
                      "generator": false,
                      "async": false,
                      "declare": false,
                      "typeParameters": null,
                      "params": [],
                      "returnType": null,
                      "body": {
                        "type": "BlockStatement",
                        "body": [],
                        "start": 6593,
                        "end": 6596
                      },
                      "expression": false,
                      "start": 6583,
                      "end": 6596
                    },
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 6578,
                    "end": 6596
                  }
                ],
                "returnType": null,
                "body": {
                  "type": "BlockStatement",
                  "body": [
                    {
                      "type": "ReturnStatement",
                      "argument": {
                        "type": "Literal",
                        "value": 0,
                        "raw": "0",
                        "start": 6607,
                        "end": 6608
                      },
                      "start": 6600,
                      "end": 6609
                    }
                  ],
                  "start": 6598,
                  "end": 6611
                },
                "expression": false,
                "start": 6565,
                "end": 6611
              },
              "computed": false,
              "static": false,
              "declare": false,
              "override": false,
              "optional": false,
              "definite": false,
              "readonly": false,
              "accessibility": "protected",
              "start": 6531,
              "end": 6611
            },
            {
              "type": "PropertyDefinition",
              "decorators": [],
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "fnArrowProtected",
                "optional": false,
                "typeAnnotation": null,
                "start": 6626,
                "end": 6642
              },
              "typeAnnotation": null,
              "value": {
                "type": "ArrowFunctionExpression",
                "expression": true,
                "async": false,
                "typeParameters": null,
                "params": [
                  {
                    "type": "AssignmentPattern",
                    "decorators": [],
                    "left": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "cb",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 6646,
                      "end": 6648
                    },
                    "right": {
                      "type": "FunctionExpression",
                      "id": null,
                      "generator": false,
                      "async": false,
                      "declare": false,
                      "typeParameters": null,
                      "params": [],
                      "returnType": null,
                      "body": {
                        "type": "BlockStatement",
                        "body": [],
                        "start": 6661,
                        "end": 6664
                      },
                      "expression": false,
                      "start": 6651,
                      "end": 6664
                    },
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 6646,
                    "end": 6664
                  }
                ],
                "returnType": null,
                "body": {
                  "type": "Literal",
                  "value": "S",
                  "raw": "\"S\"",
                  "start": 6669,
                  "end": 6672
                },
                "id": null,
                "generator": false,
                "start": 6645,
                "end": 6672
              },
              "computed": false,
              "static": false,
              "declare": false,
              "override": false,
              "optional": false,
              "definite": false,
              "readonly": false,
              "accessibility": "protected",
              "start": 6616,
              "end": 6673
            },
            {
              "type": "PropertyDefinition",
              "decorators": [],
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "fnStaticExpression",
                "optional": false,
                "typeAnnotation": null,
                "start": 6686,
                "end": 6704
              },
              "typeAnnotation": null,
              "value": {
                "type": "FunctionExpression",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "foo",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 6716,
                  "end": 6719
                },
                "generator": false,
                "async": false,
                "declare": false,
                "typeParameters": null,
                "params": [
                  {
                    "type": "AssignmentPattern",
                    "decorators": [],
                    "left": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "cb",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 6720,
                      "end": 6722
                    },
                    "right": {
                      "type": "FunctionExpression",
                      "id": null,
                      "generator": false,
                      "async": false,
                      "declare": false,
                      "typeParameters": null,
                      "params": [],
                      "returnType": null,
                      "body": {
                        "type": "BlockStatement",
                        "body": [],
                        "start": 6735,
                        "end": 6738
                      },
                      "expression": false,
                      "start": 6725,
                      "end": 6738
                    },
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 6720,
                    "end": 6738
                  }
                ],
                "returnType": null,
                "body": {
                  "type": "BlockStatement",
                  "body": [
                    {
                      "type": "ReturnStatement",
                      "argument": {
                        "type": "Literal",
                        "value": 0,
                        "raw": "0",
                        "start": 6749,
                        "end": 6750
                      },
                      "start": 6742,
                      "end": 6751
                    }
                  ],
                  "start": 6740,
                  "end": 6753
                },
                "expression": false,
                "start": 6707,
                "end": 6753
              },
              "computed": false,
              "static": true,
              "declare": false,
              "override": false,
              "optional": false,
              "definite": false,
              "readonly": false,
              "accessibility": null,
              "start": 6679,
              "end": 6753
            },
            {
              "type": "PropertyDefinition",
              "decorators": [],
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "fnStaticArrow",
                "optional": false,
                "typeAnnotation": null,
                "start": 6765,
                "end": 6778
              },
              "typeAnnotation": null,
              "value": {
                "type": "ArrowFunctionExpression",
                "expression": true,
                "async": false,
                "typeParameters": null,
                "params": [
                  {
                    "type": "AssignmentPattern",
                    "decorators": [],
                    "left": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "cb",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 6782,
                      "end": 6784
                    },
                    "right": {
                      "type": "FunctionExpression",
                      "id": null,
                      "generator": false,
                      "async": false,
                      "declare": false,
                      "typeParameters": null,
                      "params": [],
                      "returnType": null,
                      "body": {
                        "type": "BlockStatement",
                        "body": [],
                        "start": 6797,
                        "end": 6800
                      },
                      "expression": false,
                      "start": 6787,
                      "end": 6800
                    },
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 6782,
                    "end": 6800
                  }
                ],
                "returnType": null,
                "body": {
                  "type": "Literal",
                  "value": "S",
                  "raw": "\"S\"",
                  "start": 6805,
                  "end": 6808
                },
                "id": null,
                "generator": false,
                "start": 6781,
                "end": 6808
              },
              "computed": false,
              "static": true,
              "declare": false,
              "override": false,
              "optional": false,
              "definite": false,
              "readonly": false,
              "accessibility": null,
              "start": 6758,
              "end": 6809
            },
            {
              "type": "PropertyDefinition",
              "decorators": [],
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "fnStaticExpressionProtected",
                "optional": false,
                "typeAnnotation": null,
                "start": 6831,
                "end": 6858
              },
              "typeAnnotation": null,
              "value": {
                "type": "FunctionExpression",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "foo",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 6870,
                  "end": 6873
                },
                "generator": false,
                "async": false,
                "declare": false,
                "typeParameters": null,
                "params": [
                  {
                    "type": "AssignmentPattern",
                    "decorators": [],
                    "left": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "cb",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 6874,
                      "end": 6876
                    },
                    "right": {
                      "type": "FunctionExpression",
                      "id": null,
                      "generator": false,
                      "async": false,
                      "declare": false,
                      "typeParameters": null,
                      "params": [],
                      "returnType": null,
                      "body": {
                        "type": "BlockStatement",
                        "body": [],
                        "start": 6889,
                        "end": 6892
                      },
                      "expression": false,
                      "start": 6879,
                      "end": 6892
                    },
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 6874,
                    "end": 6892
                  }
                ],
                "returnType": null,
                "body": {
                  "type": "BlockStatement",
                  "body": [
                    {
                      "type": "ReturnStatement",
                      "argument": {
                        "type": "Literal",
                        "value": 0,
                        "raw": "0",
                        "start": 6903,
                        "end": 6904
                      },
                      "start": 6896,
                      "end": 6905
                    }
                  ],
                  "start": 6894,
                  "end": 6907
                },
                "expression": false,
                "start": 6861,
                "end": 6907
              },
              "computed": false,
              "static": true,
              "declare": false,
              "override": false,
              "optional": false,
              "definite": false,
              "readonly": false,
              "accessibility": "protected",
              "start": 6814,
              "end": 6907
            },
            {
              "type": "PropertyDefinition",
              "decorators": [],
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "fnStaticArrowProtected",
                "optional": false,
                "typeAnnotation": null,
                "start": 6933,
                "end": 6955
              },
              "typeAnnotation": null,
              "value": {
                "type": "ArrowFunctionExpression",
                "expression": true,
                "async": false,
                "typeParameters": null,
                "params": [
                  {
                    "type": "AssignmentPattern",
                    "decorators": [],
                    "left": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "cb",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 6959,
                      "end": 6961
                    },
                    "right": {
                      "type": "FunctionExpression",
                      "id": null,
                      "generator": false,
                      "async": false,
                      "declare": false,
                      "typeParameters": null,
                      "params": [],
                      "returnType": null,
                      "body": {
                        "type": "BlockStatement",
                        "body": [],
                        "start": 6974,
                        "end": 6977
                      },
                      "expression": false,
                      "start": 6964,
                      "end": 6977
                    },
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 6959,
                    "end": 6977
                  }
                ],
                "returnType": null,
                "body": {
                  "type": "Literal",
                  "value": "S",
                  "raw": "\"S\"",
                  "start": 6982,
                  "end": 6985
                },
                "id": null,
                "generator": false,
                "start": 6958,
                "end": 6985
              },
              "computed": false,
              "static": true,
              "declare": false,
              "override": false,
              "optional": false,
              "definite": false,
              "readonly": false,
              "accessibility": "protected",
              "start": 6916,
              "end": 6986
            },
            {
              "type": "PropertyDefinition",
              "decorators": [],
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "fnExpressionMethodHasReturn",
                "optional": false,
                "typeAnnotation": null,
                "start": 7024,
                "end": 7051
              },
              "typeAnnotation": null,
              "value": {
                "type": "FunctionExpression",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "foo",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 7063,
                  "end": 7066
                },
                "generator": false,
                "async": false,
                "declare": false,
                "typeParameters": null,
                "params": [
                  {
                    "type": "AssignmentPattern",
                    "decorators": [],
                    "left": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "cb",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 7067,
                      "end": 7069
                    },
                    "right": {
                      "type": "FunctionExpression",
                      "id": null,
                      "generator": false,
                      "async": false,
                      "declare": false,
                      "typeParameters": null,
                      "params": [],
                      "returnType": null,
                      "body": {
                        "type": "BlockStatement",
                        "body": [],
                        "start": 7082,
                        "end": 7085
                      },
                      "expression": false,
                      "start": 7072,
                      "end": 7085
                    },
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 7067,
                    "end": 7085
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 7088,
                    "end": 7094
                  },
                  "start": 7086,
                  "end": 7094
                },
                "body": {
                  "type": "BlockStatement",
                  "body": [
                    {
                      "type": "ReturnStatement",
                      "argument": {
                        "type": "Literal",
                        "value": 0,
                        "raw": "0",
                        "start": 7104,
                        "end": 7105
                      },
                      "start": 7097,
                      "end": 7106
                    }
                  ],
                  "start": 7095,
                  "end": 7108
                },
                "expression": false,
                "start": 7054,
                "end": 7108
              },
              "computed": false,
              "static": false,
              "declare": false,
              "override": false,
              "optional": false,
              "definite": false,
              "readonly": false,
              "accessibility": null,
              "start": 7024,
              "end": 7108
            },
            {
              "type": "PropertyDefinition",
              "decorators": [],
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "fnArrowMethodHasReturn",
                "optional": false,
                "typeAnnotation": null,
                "start": 7113,
                "end": 7135
              },
              "typeAnnotation": null,
              "value": {
                "type": "ArrowFunctionExpression",
                "expression": true,
                "async": false,
                "typeParameters": null,
                "params": [
                  {
                    "type": "AssignmentPattern",
                    "decorators": [],
                    "left": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "cb",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 7139,
                      "end": 7141
                    },
                    "right": {
                      "type": "FunctionExpression",
                      "id": null,
                      "generator": false,
                      "async": false,
                      "declare": false,
                      "typeParameters": null,
                      "params": [],
                      "returnType": null,
                      "body": {
                        "type": "BlockStatement",
                        "body": [],
                        "start": 7154,
                        "end": 7157
                      },
                      "expression": false,
                      "start": 7144,
                      "end": 7157
                    },
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 7139,
                    "end": 7157
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 7160,
                    "end": 7166
                  },
                  "start": 7158,
                  "end": 7166
                },
                "body": {
                  "type": "Literal",
                  "value": "S",
                  "raw": "\"S\"",
                  "start": 7170,
                  "end": 7173
                },
                "id": null,
                "generator": false,
                "start": 7138,
                "end": 7173
              },
              "computed": false,
              "static": false,
              "declare": false,
              "override": false,
              "optional": false,
              "definite": false,
              "readonly": false,
              "accessibility": null,
              "start": 7113,
              "end": 7174
            },
            {
              "type": "PropertyDefinition",
              "decorators": [],
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "fnExpressionProtectedMethodHasReturn",
                "optional": false,
                "typeAnnotation": null,
                "start": 7189,
                "end": 7225
              },
              "typeAnnotation": null,
              "value": {
                "type": "FunctionExpression",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "foo",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 7237,
                  "end": 7240
                },
                "generator": false,
                "async": false,
                "declare": false,
                "typeParameters": null,
                "params": [
                  {
                    "type": "AssignmentPattern",
                    "decorators": [],
                    "left": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "cb",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 7241,
                      "end": 7243
                    },
                    "right": {
                      "type": "FunctionExpression",
                      "id": null,
                      "generator": false,
                      "async": false,
                      "declare": false,
                      "typeParameters": null,
                      "params": [],
                      "returnType": null,
                      "body": {
                        "type": "BlockStatement",
                        "body": [],
                        "start": 7256,
                        "end": 7259
                      },
                      "expression": false,
                      "start": 7246,
                      "end": 7259
                    },
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 7241,
                    "end": 7259
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 7262,
                    "end": 7268
                  },
                  "start": 7260,
                  "end": 7268
                },
                "body": {
                  "type": "BlockStatement",
                  "body": [
                    {
                      "type": "ReturnStatement",
                      "argument": {
                        "type": "Literal",
                        "value": 0,
                        "raw": "0",
                        "start": 7278,
                        "end": 7279
                      },
                      "start": 7271,
                      "end": 7280
                    }
                  ],
                  "start": 7269,
                  "end": 7282
                },
                "expression": false,
                "start": 7228,
                "end": 7282
              },
              "computed": false,
              "static": false,
              "declare": false,
              "override": false,
              "optional": false,
              "definite": false,
              "readonly": false,
              "accessibility": "protected",
              "start": 7179,
              "end": 7282
            },
            {
              "type": "PropertyDefinition",
              "decorators": [],
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "fnArrowProtectedMethodHasReturn",
                "optional": false,
                "typeAnnotation": null,
                "start": 7297,
                "end": 7328
              },
              "typeAnnotation": null,
              "value": {
                "type": "ArrowFunctionExpression",
                "expression": true,
                "async": false,
                "typeParameters": null,
                "params": [
                  {
                    "type": "AssignmentPattern",
                    "decorators": [],
                    "left": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "cb",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 7332,
                      "end": 7334
                    },
                    "right": {
                      "type": "FunctionExpression",
                      "id": null,
                      "generator": false,
                      "async": false,
                      "declare": false,
                      "typeParameters": null,
                      "params": [],
                      "returnType": null,
                      "body": {
                        "type": "BlockStatement",
                        "body": [],
                        "start": 7347,
                        "end": 7350
                      },
                      "expression": false,
                      "start": 7337,
                      "end": 7350
                    },
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 7332,
                    "end": 7350
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 7353,
                    "end": 7359
                  },
                  "start": 7351,
                  "end": 7359
                },
                "body": {
                  "type": "Literal",
                  "value": "S",
                  "raw": "\"S\"",
                  "start": 7363,
                  "end": 7366
                },
                "id": null,
                "generator": false,
                "start": 7331,
                "end": 7366
              },
              "computed": false,
              "static": false,
              "declare": false,
              "override": false,
              "optional": false,
              "definite": false,
              "readonly": false,
              "accessibility": "protected",
              "start": 7287,
              "end": 7367
            },
            {
              "type": "PropertyDefinition",
              "decorators": [],
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "fnStaticExpressionMethodHasReturn",
                "optional": false,
                "typeAnnotation": null,
                "start": 7380,
                "end": 7413
              },
              "typeAnnotation": null,
              "value": {
                "type": "FunctionExpression",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "foo",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 7425,
                  "end": 7428
                },
                "generator": false,
                "async": false,
                "declare": false,
                "typeParameters": null,
                "params": [
                  {
                    "type": "AssignmentPattern",
                    "decorators": [],
                    "left": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "cb",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 7429,
                      "end": 7431
                    },
                    "right": {
                      "type": "FunctionExpression",
                      "id": null,
                      "generator": false,
                      "async": false,
                      "declare": false,
                      "typeParameters": null,
                      "params": [],
                      "returnType": null,
                      "body": {
                        "type": "BlockStatement",
                        "body": [],
                        "start": 7444,
                        "end": 7447
                      },
                      "expression": false,
                      "start": 7434,
                      "end": 7447
                    },
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 7429,
                    "end": 7447
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 7450,
                    "end": 7456
                  },
                  "start": 7448,
                  "end": 7456
                },
                "body": {
                  "type": "BlockStatement",
                  "body": [
                    {
                      "type": "ReturnStatement",
                      "argument": {
                        "type": "Literal",
                        "value": 0,
                        "raw": "0",
                        "start": 7466,
                        "end": 7467
                      },
                      "start": 7459,
                      "end": 7468
                    }
                  ],
                  "start": 7457,
                  "end": 7470
                },
                "expression": false,
                "start": 7416,
                "end": 7470
              },
              "computed": false,
              "static": true,
              "declare": false,
              "override": false,
              "optional": false,
              "definite": false,
              "readonly": false,
              "accessibility": null,
              "start": 7373,
              "end": 7470
            },
            {
              "type": "PropertyDefinition",
              "decorators": [],
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "fnStaticArrowMethodHasReturn",
                "optional": false,
                "typeAnnotation": null,
                "start": 7482,
                "end": 7510
              },
              "typeAnnotation": null,
              "value": {
                "type": "ArrowFunctionExpression",
                "expression": true,
                "async": false,
                "typeParameters": null,
                "params": [
                  {
                    "type": "AssignmentPattern",
                    "decorators": [],
                    "left": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "cb",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 7514,
                      "end": 7516
                    },
                    "right": {
                      "type": "FunctionExpression",
                      "id": null,
                      "generator": false,
                      "async": false,
                      "declare": false,
                      "typeParameters": null,
                      "params": [],
                      "returnType": null,
                      "body": {
                        "type": "BlockStatement",
                        "body": [],
                        "start": 7529,
                        "end": 7532
                      },
                      "expression": false,
                      "start": 7519,
                      "end": 7532
                    },
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 7514,
                    "end": 7532
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 7535,
                    "end": 7541
                  },
                  "start": 7533,
                  "end": 7541
                },
                "body": {
                  "type": "Literal",
                  "value": "S",
                  "raw": "\"S\"",
                  "start": 7545,
                  "end": 7548
                },
                "id": null,
                "generator": false,
                "start": 7513,
                "end": 7548
              },
              "computed": false,
              "static": true,
              "declare": false,
              "override": false,
              "optional": false,
              "definite": false,
              "readonly": false,
              "accessibility": null,
              "start": 7475,
              "end": 7549
            },
            {
              "type": "PropertyDefinition",
              "decorators": [],
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "fnStaticExpressionProtectedMethodHasReturn",
                "optional": false,
                "typeAnnotation": null,
                "start": 7571,
                "end": 7613
              },
              "typeAnnotation": null,
              "value": {
                "type": "FunctionExpression",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "foo",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 7625,
                  "end": 7628
                },
                "generator": false,
                "async": false,
                "declare": false,
                "typeParameters": null,
                "params": [
                  {
                    "type": "AssignmentPattern",
                    "decorators": [],
                    "left": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "cb",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 7629,
                      "end": 7631
                    },
                    "right": {
                      "type": "FunctionExpression",
                      "id": null,
                      "generator": false,
                      "async": false,
                      "declare": false,
                      "typeParameters": null,
                      "params": [],
                      "returnType": null,
                      "body": {
                        "type": "BlockStatement",
                        "body": [],
                        "start": 7644,
                        "end": 7647
                      },
                      "expression": false,
                      "start": 7634,
                      "end": 7647
                    },
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 7629,
                    "end": 7647
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 7650,
                    "end": 7656
                  },
                  "start": 7648,
                  "end": 7656
                },
                "body": {
                  "type": "BlockStatement",
                  "body": [
                    {
                      "type": "ReturnStatement",
                      "argument": {
                        "type": "Literal",
                        "value": 0,
                        "raw": "0",
                        "start": 7666,
                        "end": 7667
                      },
                      "start": 7659,
                      "end": 7668
                    }
                  ],
                  "start": 7657,
                  "end": 7670
                },
                "expression": false,
                "start": 7616,
                "end": 7670
              },
              "computed": false,
              "static": true,
              "declare": false,
              "override": false,
              "optional": false,
              "definite": false,
              "readonly": false,
              "accessibility": "protected",
              "start": 7554,
              "end": 7670
            },
            {
              "type": "PropertyDefinition",
              "decorators": [],
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "fnStaticArrowProtectedMethodHasReturn",
                "optional": false,
                "typeAnnotation": null,
                "start": 7696,
                "end": 7733
              },
              "typeAnnotation": null,
              "value": {
                "type": "ArrowFunctionExpression",
                "expression": true,
                "async": false,
                "typeParameters": null,
                "params": [
                  {
                    "type": "AssignmentPattern",
                    "decorators": [],
                    "left": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "cb",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 7737,
                      "end": 7739
                    },
                    "right": {
                      "type": "FunctionExpression",
                      "id": null,
                      "generator": false,
                      "async": false,
                      "declare": false,
                      "typeParameters": null,
                      "params": [],
                      "returnType": null,
                      "body": {
                        "type": "BlockStatement",
                        "body": [],
                        "start": 7752,
                        "end": 7755
                      },
                      "expression": false,
                      "start": 7742,
                      "end": 7755
                    },
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 7737,
                    "end": 7755
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 7758,
                    "end": 7764
                  },
                  "start": 7756,
                  "end": 7764
                },
                "body": {
                  "type": "Literal",
                  "value": "S",
                  "raw": "\"S\"",
                  "start": 7768,
                  "end": 7771
                },
                "id": null,
                "generator": false,
                "start": 7736,
                "end": 7771
              },
              "computed": false,
              "static": true,
              "declare": false,
              "override": false,
              "optional": false,
              "definite": false,
              "readonly": false,
              "accessibility": "protected",
              "start": 7679,
              "end": 7772
            },
            {
              "type": "PropertyDefinition",
              "decorators": [],
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "fnExpressionOnlyOnParam",
                "optional": false,
                "typeAnnotation": null,
                "start": 7819,
                "end": 7842
              },
              "typeAnnotation": null,
              "value": {
                "type": "FunctionExpression",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "foo",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 7854,
                  "end": 7857
                },
                "generator": false,
                "async": false,
                "declare": false,
                "typeParameters": null,
                "params": [
                  {
                    "type": "AssignmentPattern",
                    "decorators": [],
                    "left": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "cb",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 7858,
                      "end": 7860
                    },
                    "right": {
                      "type": "FunctionExpression",
                      "id": null,
                      "generator": false,
                      "async": false,
                      "declare": false,
                      "typeParameters": null,
                      "params": [],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSVoidKeyword",
                          "start": 7875,
                          "end": 7879
                        },
                        "start": 7873,
                        "end": 7879
                      },
                      "body": {
                        "type": "BlockStatement",
                        "body": [],
                        "start": 7880,
                        "end": 7883
                      },
                      "expression": false,
                      "start": 7863,
                      "end": 7883
                    },
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 7858,
                    "end": 7883
                  }
                ],
                "returnType": null,
                "body": {
                  "type": "BlockStatement",
                  "body": [
                    {
                      "type": "ReturnStatement",
                      "argument": {
                        "type": "Literal",
                        "value": 0,
                        "raw": "0",
                        "start": 7894,
                        "end": 7895
                      },
                      "start": 7887,
                      "end": 7896
                    }
                  ],
                  "start": 7885,
                  "end": 7898
                },
                "expression": false,
                "start": 7845,
                "end": 7898
              },
              "computed": false,
              "static": false,
              "declare": false,
              "override": false,
              "optional": false,
              "definite": false,
              "readonly": false,
              "accessibility": null,
              "start": 7819,
              "end": 7898
            },
            {
              "type": "PropertyDefinition",
              "decorators": [],
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "fnArrowOnlyOnParam",
                "optional": false,
                "typeAnnotation": null,
                "start": 7903,
                "end": 7921
              },
              "typeAnnotation": null,
              "value": {
                "type": "ArrowFunctionExpression",
                "expression": true,
                "async": false,
                "typeParameters": null,
                "params": [
                  {
                    "type": "AssignmentPattern",
                    "decorators": [],
                    "left": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "cb",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 7925,
                      "end": 7927
                    },
                    "right": {
                      "type": "FunctionExpression",
                      "id": null,
                      "generator": false,
                      "async": false,
                      "declare": false,
                      "typeParameters": null,
                      "params": [],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSVoidKeyword",
                          "start": 7942,
                          "end": 7946
                        },
                        "start": 7940,
                        "end": 7946
                      },
                      "body": {
                        "type": "BlockStatement",
                        "body": [],
                        "start": 7947,
                        "end": 7950
                      },
                      "expression": false,
                      "start": 7930,
                      "end": 7950
                    },
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 7925,
                    "end": 7950
                  }
                ],
                "returnType": null,
                "body": {
                  "type": "Literal",
                  "value": "S",
                  "raw": "\"S\"",
                  "start": 7955,
                  "end": 7958
                },
                "id": null,
                "generator": false,
                "start": 7924,
                "end": 7958
              },
              "computed": false,
              "static": false,
              "declare": false,
              "override": false,
              "optional": false,
              "definite": false,
              "readonly": false,
              "accessibility": null,
              "start": 7903,
              "end": 7959
            },
            {
              "type": "PropertyDefinition",
              "decorators": [],
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "fnExpressionProtectedOnlyOnParam",
                "optional": false,
                "typeAnnotation": null,
                "start": 7974,
                "end": 8006
              },
              "typeAnnotation": null,
              "value": {
                "type": "FunctionExpression",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "foo",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 8018,
                  "end": 8021
                },
                "generator": false,
                "async": false,
                "declare": false,
                "typeParameters": null,
                "params": [
                  {
                    "type": "AssignmentPattern",
                    "decorators": [],
                    "left": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "cb",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 8022,
                      "end": 8024
                    },
                    "right": {
                      "type": "FunctionExpression",
                      "id": null,
                      "generator": false,
                      "async": false,
                      "declare": false,
                      "typeParameters": null,
                      "params": [],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSVoidKeyword",
                          "start": 8039,
                          "end": 8043
                        },
                        "start": 8037,
                        "end": 8043
                      },
                      "body": {
                        "type": "BlockStatement",
                        "body": [],
                        "start": 8044,
                        "end": 8047
                      },
                      "expression": false,
                      "start": 8027,
                      "end": 8047
                    },
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 8022,
                    "end": 8047
                  }
                ],
                "returnType": null,
                "body": {
                  "type": "BlockStatement",
                  "body": [
                    {
                      "type": "ReturnStatement",
                      "argument": {
                        "type": "Literal",
                        "value": 0,
                        "raw": "0",
                        "start": 8058,
                        "end": 8059
                      },
                      "start": 8051,
                      "end": 8060
                    }
                  ],
                  "start": 8049,
                  "end": 8062
                },
                "expression": false,
                "start": 8009,
                "end": 8062
              },
              "computed": false,
              "static": false,
              "declare": false,
              "override": false,
              "optional": false,
              "definite": false,
              "readonly": false,
              "accessibility": "protected",
              "start": 7964,
              "end": 8062
            },
            {
              "type": "PropertyDefinition",
              "decorators": [],
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "fnArrowProtectedOnlyOnParam",
                "optional": false,
                "typeAnnotation": null,
                "start": 8077,
                "end": 8104
              },
              "typeAnnotation": null,
              "value": {
                "type": "ArrowFunctionExpression",
                "expression": true,
                "async": false,
                "typeParameters": null,
                "params": [
                  {
                    "type": "AssignmentPattern",
                    "decorators": [],
                    "left": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "cb",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 8108,
                      "end": 8110
                    },
                    "right": {
                      "type": "FunctionExpression",
                      "id": null,
                      "generator": false,
                      "async": false,
                      "declare": false,
                      "typeParameters": null,
                      "params": [],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSVoidKeyword",
                          "start": 8125,
                          "end": 8129
                        },
                        "start": 8123,
                        "end": 8129
                      },
                      "body": {
                        "type": "BlockStatement",
                        "body": [],
                        "start": 8130,
                        "end": 8133
                      },
                      "expression": false,
                      "start": 8113,
                      "end": 8133
                    },
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 8108,
                    "end": 8133
                  }
                ],
                "returnType": null,
                "body": {
                  "type": "Literal",
                  "value": "S",
                  "raw": "\"S\"",
                  "start": 8138,
                  "end": 8141
                },
                "id": null,
                "generator": false,
                "start": 8107,
                "end": 8141
              },
              "computed": false,
              "static": false,
              "declare": false,
              "override": false,
              "optional": false,
              "definite": false,
              "readonly": false,
              "accessibility": "protected",
              "start": 8067,
              "end": 8142
            },
            {
              "type": "PropertyDefinition",
              "decorators": [],
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "fnStaticExpressionOnlyOnParam",
                "optional": false,
                "typeAnnotation": null,
                "start": 8155,
                "end": 8184
              },
              "typeAnnotation": null,
              "value": {
                "type": "FunctionExpression",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "foo",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 8196,
                  "end": 8199
                },
                "generator": false,
                "async": false,
                "declare": false,
                "typeParameters": null,
                "params": [
                  {
                    "type": "AssignmentPattern",
                    "decorators": [],
                    "left": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "cb",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 8200,
                      "end": 8202
                    },
                    "right": {
                      "type": "FunctionExpression",
                      "id": null,
                      "generator": false,
                      "async": false,
                      "declare": false,
                      "typeParameters": null,
                      "params": [],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSVoidKeyword",
                          "start": 8217,
                          "end": 8221
                        },
                        "start": 8215,
                        "end": 8221
                      },
                      "body": {
                        "type": "BlockStatement",
                        "body": [],
                        "start": 8221,
                        "end": 8224
                      },
                      "expression": false,
                      "start": 8205,
                      "end": 8224
                    },
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 8200,
                    "end": 8224
                  }
                ],
                "returnType": null,
                "body": {
                  "type": "BlockStatement",
                  "body": [
                    {
                      "type": "ReturnStatement",
                      "argument": {
                        "type": "Literal",
                        "value": 0,
                        "raw": "0",
                        "start": 8235,
                        "end": 8236
                      },
                      "start": 8228,
                      "end": 8237
                    }
                  ],
                  "start": 8226,
                  "end": 8239
                },
                "expression": false,
                "start": 8187,
                "end": 8239
              },
              "computed": false,
              "static": true,
              "declare": false,
              "override": false,
              "optional": false,
              "definite": false,
              "readonly": false,
              "accessibility": null,
              "start": 8148,
              "end": 8239
            },
            {
              "type": "PropertyDefinition",
              "decorators": [],
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "fnStaticArrowOnlyOnParam",
                "optional": false,
                "typeAnnotation": null,
                "start": 8251,
                "end": 8275
              },
              "typeAnnotation": null,
              "value": {
                "type": "ArrowFunctionExpression",
                "expression": true,
                "async": false,
                "typeParameters": null,
                "params": [
                  {
                    "type": "AssignmentPattern",
                    "decorators": [],
                    "left": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "cb",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 8279,
                      "end": 8281
                    },
                    "right": {
                      "type": "FunctionExpression",
                      "id": null,
                      "generator": false,
                      "async": false,
                      "declare": false,
                      "typeParameters": null,
                      "params": [],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSVoidKeyword",
                          "start": 8296,
                          "end": 8300
                        },
                        "start": 8294,
                        "end": 8300
                      },
                      "body": {
                        "type": "BlockStatement",
                        "body": [],
                        "start": 8300,
                        "end": 8303
                      },
                      "expression": false,
                      "start": 8284,
                      "end": 8303
                    },
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 8279,
                    "end": 8303
                  }
                ],
                "returnType": null,
                "body": {
                  "type": "Literal",
                  "value": "S",
                  "raw": "\"S\"",
                  "start": 8308,
                  "end": 8311
                },
                "id": null,
                "generator": false,
                "start": 8278,
                "end": 8311
              },
              "computed": false,
              "static": true,
              "declare": false,
              "override": false,
              "optional": false,
              "definite": false,
              "readonly": false,
              "accessibility": null,
              "start": 8244,
              "end": 8312
            },
            {
              "type": "PropertyDefinition",
              "decorators": [],
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "fnStaticExpressionProtectedOnlyOnParam",
                "optional": false,
                "typeAnnotation": null,
                "start": 8334,
                "end": 8372
              },
              "typeAnnotation": null,
              "value": {
                "type": "FunctionExpression",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "foo",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 8384,
                  "end": 8387
                },
                "generator": false,
                "async": false,
                "declare": false,
                "typeParameters": null,
                "params": [
                  {
                    "type": "AssignmentPattern",
                    "decorators": [],
                    "left": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "cb",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 8388,
                      "end": 8390
                    },
                    "right": {
                      "type": "FunctionExpression",
                      "id": null,
                      "generator": false,
                      "async": false,
                      "declare": false,
                      "typeParameters": null,
                      "params": [],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSVoidKeyword",
                          "start": 8405,
                          "end": 8409
                        },
                        "start": 8403,
                        "end": 8409
                      },
                      "body": {
                        "type": "BlockStatement",
                        "body": [],
                        "start": 8409,
                        "end": 8412
                      },
                      "expression": false,
                      "start": 8393,
                      "end": 8412
                    },
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 8388,
                    "end": 8412
                  }
                ],
                "returnType": null,
                "body": {
                  "type": "BlockStatement",
                  "body": [
                    {
                      "type": "ReturnStatement",
                      "argument": {
                        "type": "Literal",
                        "value": 0,
                        "raw": "0",
                        "start": 8423,
                        "end": 8424
                      },
                      "start": 8416,
                      "end": 8425
                    }
                  ],
                  "start": 8414,
                  "end": 8427
                },
                "expression": false,
                "start": 8375,
                "end": 8427
              },
              "computed": false,
              "static": true,
              "declare": false,
              "override": false,
              "optional": false,
              "definite": false,
              "readonly": false,
              "accessibility": "protected",
              "start": 8317,
              "end": 8427
            },
            {
              "type": "PropertyDefinition",
              "decorators": [],
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "fnStaticArrowProtectedOnlyOnParam",
                "optional": false,
                "typeAnnotation": null,
                "start": 8453,
                "end": 8486
              },
              "typeAnnotation": null,
              "value": {
                "type": "ArrowFunctionExpression",
                "expression": true,
                "async": false,
                "typeParameters": null,
                "params": [
                  {
                    "type": "AssignmentPattern",
                    "decorators": [],
                    "left": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "cb",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 8490,
                      "end": 8492
                    },
                    "right": {
                      "type": "FunctionExpression",
                      "id": null,
                      "generator": false,
                      "async": false,
                      "declare": false,
                      "typeParameters": null,
                      "params": [],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSVoidKeyword",
                          "start": 8507,
                          "end": 8511
                        },
                        "start": 8505,
                        "end": 8511
                      },
                      "body": {
                        "type": "BlockStatement",
                        "body": [],
                        "start": 8511,
                        "end": 8514
                      },
                      "expression": false,
                      "start": 8495,
                      "end": 8514
                    },
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 8490,
                    "end": 8514
                  }
                ],
                "returnType": null,
                "body": {
                  "type": "Literal",
                  "value": "S",
                  "raw": "\"S\"",
                  "start": 8519,
                  "end": 8522
                },
                "id": null,
                "generator": false,
                "start": 8489,
                "end": 8522
              },
              "computed": false,
              "static": true,
              "declare": false,
              "override": false,
              "optional": false,
              "definite": false,
              "readonly": false,
              "accessibility": "protected",
              "start": 8436,
              "end": 8523
            },
            {
              "type": "PropertyDefinition",
              "decorators": [],
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "fnExpressionOk",
                "optional": false,
                "typeAnnotation": null,
                "start": 8560,
                "end": 8574
              },
              "typeAnnotation": null,
              "value": {
                "type": "FunctionExpression",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "foo",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 8586,
                  "end": 8589
                },
                "generator": false,
                "async": false,
                "declare": false,
                "typeParameters": null,
                "params": [
                  {
                    "type": "AssignmentPattern",
                    "decorators": [],
                    "left": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "cb",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 8590,
                      "end": 8592
                    },
                    "right": {
                      "type": "FunctionExpression",
                      "id": null,
                      "generator": false,
                      "async": false,
                      "declare": false,
                      "typeParameters": null,
                      "params": [],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSVoidKeyword",
                          "start": 8607,
                          "end": 8611
                        },
                        "start": 8605,
                        "end": 8611
                      },
                      "body": {
                        "type": "BlockStatement",
                        "body": [],
                        "start": 8612,
                        "end": 8615
                      },
                      "expression": false,
                      "start": 8595,
                      "end": 8615
                    },
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 8590,
                    "end": 8615
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 8618,
                    "end": 8624
                  },
                  "start": 8616,
                  "end": 8624
                },
                "body": {
                  "type": "BlockStatement",
                  "body": [
                    {
                      "type": "ReturnStatement",
                      "argument": {
                        "type": "Literal",
                        "value": 0,
                        "raw": "0",
                        "start": 8634,
                        "end": 8635
                      },
                      "start": 8627,
                      "end": 8636
                    }
                  ],
                  "start": 8625,
                  "end": 8638
                },
                "expression": false,
                "start": 8577,
                "end": 8638
              },
              "computed": false,
              "static": false,
              "declare": false,
              "override": false,
              "optional": false,
              "definite": false,
              "readonly": false,
              "accessibility": null,
              "start": 8560,
              "end": 8638
            },
            {
              "type": "PropertyDefinition",
              "decorators": [],
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "fnArrowOK",
                "optional": false,
                "typeAnnotation": null,
                "start": 8643,
                "end": 8652
              },
              "typeAnnotation": null,
              "value": {
                "type": "ArrowFunctionExpression",
                "expression": true,
                "async": false,
                "typeParameters": null,
                "params": [
                  {
                    "type": "AssignmentPattern",
                    "decorators": [],
                    "left": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "cb",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 8656,
                      "end": 8658
                    },
                    "right": {
                      "type": "FunctionExpression",
                      "id": null,
                      "generator": false,
                      "async": false,
                      "declare": false,
                      "typeParameters": null,
                      "params": [],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSVoidKeyword",
                          "start": 8673,
                          "end": 8677
                        },
                        "start": 8671,
                        "end": 8677
                      },
                      "body": {
                        "type": "BlockStatement",
                        "body": [],
                        "start": 8678,
                        "end": 8681
                      },
                      "expression": false,
                      "start": 8661,
                      "end": 8681
                    },
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 8656,
                    "end": 8681
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 8684,
                    "end": 8690
                  },
                  "start": 8682,
                  "end": 8690
                },
                "body": {
                  "type": "Literal",
                  "value": "S",
                  "raw": "\"S\"",
                  "start": 8694,
                  "end": 8697
                },
                "id": null,
                "generator": false,
                "start": 8655,
                "end": 8697
              },
              "computed": false,
              "static": false,
              "declare": false,
              "override": false,
              "optional": false,
              "definite": false,
              "readonly": false,
              "accessibility": null,
              "start": 8643,
              "end": 8698
            },
            {
              "type": "PropertyDefinition",
              "decorators": [],
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "fnExpressionProtectedOk",
                "optional": false,
                "typeAnnotation": null,
                "start": 8713,
                "end": 8736
              },
              "typeAnnotation": null,
              "value": {
                "type": "FunctionExpression",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "foo",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 8748,
                  "end": 8751
                },
                "generator": false,
                "async": false,
                "declare": false,
                "typeParameters": null,
                "params": [
                  {
                    "type": "AssignmentPattern",
                    "decorators": [],
                    "left": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "cb",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 8752,
                      "end": 8754
                    },
                    "right": {
                      "type": "FunctionExpression",
                      "id": null,
                      "generator": false,
                      "async": false,
                      "declare": false,
                      "typeParameters": null,
                      "params": [],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSVoidKeyword",
                          "start": 8769,
                          "end": 8773
                        },
                        "start": 8767,
                        "end": 8773
                      },
                      "body": {
                        "type": "BlockStatement",
                        "body": [],
                        "start": 8774,
                        "end": 8777
                      },
                      "expression": false,
                      "start": 8757,
                      "end": 8777
                    },
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 8752,
                    "end": 8777
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 8780,
                    "end": 8786
                  },
                  "start": 8778,
                  "end": 8786
                },
                "body": {
                  "type": "BlockStatement",
                  "body": [
                    {
                      "type": "ReturnStatement",
                      "argument": {
                        "type": "Literal",
                        "value": 0,
                        "raw": "0",
                        "start": 8796,
                        "end": 8797
                      },
                      "start": 8789,
                      "end": 8798
                    }
                  ],
                  "start": 8787,
                  "end": 8800
                },
                "expression": false,
                "start": 8739,
                "end": 8800
              },
              "computed": false,
              "static": false,
              "declare": false,
              "override": false,
              "optional": false,
              "definite": false,
              "readonly": false,
              "accessibility": "protected",
              "start": 8703,
              "end": 8800
            },
            {
              "type": "PropertyDefinition",
              "decorators": [],
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "fnArrowProtectedOK",
                "optional": false,
                "typeAnnotation": null,
                "start": 8815,
                "end": 8833
              },
              "typeAnnotation": null,
              "value": {
                "type": "ArrowFunctionExpression",
                "expression": true,
                "async": false,
                "typeParameters": null,
                "params": [
                  {
                    "type": "AssignmentPattern",
                    "decorators": [],
                    "left": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "cb",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 8837,
                      "end": 8839
                    },
                    "right": {
                      "type": "FunctionExpression",
                      "id": null,
                      "generator": false,
                      "async": false,
                      "declare": false,
                      "typeParameters": null,
                      "params": [],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSVoidKeyword",
                          "start": 8854,
                          "end": 8858
                        },
                        "start": 8852,
                        "end": 8858
                      },
                      "body": {
                        "type": "BlockStatement",
                        "body": [],
                        "start": 8859,
                        "end": 8862
                      },
                      "expression": false,
                      "start": 8842,
                      "end": 8862
                    },
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 8837,
                    "end": 8862
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 8865,
                    "end": 8871
                  },
                  "start": 8863,
                  "end": 8871
                },
                "body": {
                  "type": "Literal",
                  "value": "S",
                  "raw": "\"S\"",
                  "start": 8875,
                  "end": 8878
                },
                "id": null,
                "generator": false,
                "start": 8836,
                "end": 8878
              },
              "computed": false,
              "static": false,
              "declare": false,
              "override": false,
              "optional": false,
              "definite": false,
              "readonly": false,
              "accessibility": "protected",
              "start": 8805,
              "end": 8879
            },
            {
              "type": "PropertyDefinition",
              "decorators": [],
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "fnStaticExpressionOk",
                "optional": false,
                "typeAnnotation": null,
                "start": 8892,
                "end": 8912
              },
              "typeAnnotation": null,
              "value": {
                "type": "FunctionExpression",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "foo",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 8924,
                  "end": 8927
                },
                "generator": false,
                "async": false,
                "declare": false,
                "typeParameters": null,
                "params": [
                  {
                    "type": "AssignmentPattern",
                    "decorators": [],
                    "left": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "cb",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 8928,
                      "end": 8930
                    },
                    "right": {
                      "type": "FunctionExpression",
                      "id": null,
                      "generator": false,
                      "async": false,
                      "declare": false,
                      "typeParameters": null,
                      "params": [],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSVoidKeyword",
                          "start": 8945,
                          "end": 8949
                        },
                        "start": 8943,
                        "end": 8949
                      },
                      "body": {
                        "type": "BlockStatement",
                        "body": [],
                        "start": 8949,
                        "end": 8952
                      },
                      "expression": false,
                      "start": 8933,
                      "end": 8952
                    },
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 8928,
                    "end": 8952
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 8955,
                    "end": 8961
                  },
                  "start": 8953,
                  "end": 8961
                },
                "body": {
                  "type": "BlockStatement",
                  "body": [
                    {
                      "type": "ReturnStatement",
                      "argument": {
                        "type": "Literal",
                        "value": 0,
                        "raw": "0",
                        "start": 8971,
                        "end": 8972
                      },
                      "start": 8964,
                      "end": 8973
                    }
                  ],
                  "start": 8962,
                  "end": 8975
                },
                "expression": false,
                "start": 8915,
                "end": 8975
              },
              "computed": false,
              "static": true,
              "declare": false,
              "override": false,
              "optional": false,
              "definite": false,
              "readonly": false,
              "accessibility": null,
              "start": 8885,
              "end": 8975
            },
            {
              "type": "PropertyDefinition",
              "decorators": [],
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "fnStaticArrowOk",
                "optional": false,
                "typeAnnotation": null,
                "start": 8987,
                "end": 9002
              },
              "typeAnnotation": null,
              "value": {
                "type": "ArrowFunctionExpression",
                "expression": true,
                "async": false,
                "typeParameters": null,
                "params": [
                  {
                    "type": "AssignmentPattern",
                    "decorators": [],
                    "left": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "cb",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 9006,
                      "end": 9008
                    },
                    "right": {
                      "type": "FunctionExpression",
                      "id": null,
                      "generator": false,
                      "async": false,
                      "declare": false,
                      "typeParameters": null,
                      "params": [],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSVoidKeyword",
                          "start": 9023,
                          "end": 9027
                        },
                        "start": 9021,
                        "end": 9027
                      },
                      "body": {
                        "type": "BlockStatement",
                        "body": [],
                        "start": 9027,
                        "end": 9030
                      },
                      "expression": false,
                      "start": 9011,
                      "end": 9030
                    },
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 9006,
                    "end": 9030
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 9033,
                    "end": 9039
                  },
                  "start": 9031,
                  "end": 9039
                },
                "body": {
                  "type": "Literal",
                  "value": "S",
                  "raw": "\"S\"",
                  "start": 9043,
                  "end": 9046
                },
                "id": null,
                "generator": false,
                "start": 9005,
                "end": 9046
              },
              "computed": false,
              "static": true,
              "declare": false,
              "override": false,
              "optional": false,
              "definite": false,
              "readonly": false,
              "accessibility": null,
              "start": 8980,
              "end": 9047
            },
            {
              "type": "PropertyDefinition",
              "decorators": [],
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "fnStaticExpressionProtectedOk",
                "optional": false,
                "typeAnnotation": null,
                "start": 9069,
                "end": 9098
              },
              "typeAnnotation": null,
              "value": {
                "type": "FunctionExpression",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "foo",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 9110,
                  "end": 9113
                },
                "generator": false,
                "async": false,
                "declare": false,
                "typeParameters": null,
                "params": [
                  {
                    "type": "AssignmentPattern",
                    "decorators": [],
                    "left": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "cb",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 9114,
                      "end": 9116
                    },
                    "right": {
                      "type": "FunctionExpression",
                      "id": null,
                      "generator": false,
                      "async": false,
                      "declare": false,
                      "typeParameters": null,
                      "params": [],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSVoidKeyword",
                          "start": 9131,
                          "end": 9135
                        },
                        "start": 9129,
                        "end": 9135
                      },
                      "body": {
                        "type": "BlockStatement",
                        "body": [],
                        "start": 9135,
                        "end": 9138
                      },
                      "expression": false,
                      "start": 9119,
                      "end": 9138
                    },
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 9114,
                    "end": 9138
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 9141,
                    "end": 9147
                  },
                  "start": 9139,
                  "end": 9147
                },
                "body": {
                  "type": "BlockStatement",
                  "body": [
                    {
                      "type": "ReturnStatement",
                      "argument": {
                        "type": "Literal",
                        "value": 0,
                        "raw": "0",
                        "start": 9157,
                        "end": 9158
                      },
                      "start": 9150,
                      "end": 9159
                    }
                  ],
                  "start": 9148,
                  "end": 9161
                },
                "expression": false,
                "start": 9101,
                "end": 9161
              },
              "computed": false,
              "static": true,
              "declare": false,
              "override": false,
              "optional": false,
              "definite": false,
              "readonly": false,
              "accessibility": "protected",
              "start": 9052,
              "end": 9161
            },
            {
              "type": "PropertyDefinition",
              "decorators": [],
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "fnStaticArrowProtectedOk",
                "optional": false,
                "typeAnnotation": null,
                "start": 9187,
                "end": 9211
              },
              "typeAnnotation": null,
              "value": {
                "type": "ArrowFunctionExpression",
                "expression": true,
                "async": false,
                "typeParameters": null,
                "params": [
                  {
                    "type": "AssignmentPattern",
                    "decorators": [],
                    "left": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "cb",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 9215,
                      "end": 9217
                    },
                    "right": {
                      "type": "FunctionExpression",
                      "id": null,
                      "generator": false,
                      "async": false,
                      "declare": false,
                      "typeParameters": null,
                      "params": [],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSVoidKeyword",
                          "start": 9232,
                          "end": 9236
                        },
                        "start": 9230,
                        "end": 9236
                      },
                      "body": {
                        "type": "BlockStatement",
                        "body": [],
                        "start": 9236,
                        "end": 9239
                      },
                      "expression": false,
                      "start": 9220,
                      "end": 9239
                    },
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 9215,
                    "end": 9239
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 9242,
                    "end": 9248
                  },
                  "start": 9240,
                  "end": 9248
                },
                "body": {
                  "type": "Literal",
                  "value": "S",
                  "raw": "\"S\"",
                  "start": 9252,
                  "end": 9255
                },
                "id": null,
                "generator": false,
                "start": 9214,
                "end": 9255
              },
              "computed": false,
              "static": true,
              "declare": false,
              "override": false,
              "optional": false,
              "definite": false,
              "readonly": false,
              "accessibility": "protected",
              "start": 9170,
              "end": 9256
            },
            {
              "type": "PropertyDefinition",
              "decorators": [],
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "fnExpressionPrivate",
                "optional": false,
                "typeAnnotation": null,
                "start": 9312,
                "end": 9331
              },
              "typeAnnotation": null,
              "value": {
                "type": "FunctionExpression",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "foo",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 9343,
                  "end": 9346
                },
                "generator": false,
                "async": false,
                "declare": false,
                "typeParameters": null,
                "params": [
                  {
                    "type": "AssignmentPattern",
                    "decorators": [],
                    "left": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "cb",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 9347,
                      "end": 9349
                    },
                    "right": {
                      "type": "FunctionExpression",
                      "id": null,
                      "generator": false,
                      "async": false,
                      "declare": false,
                      "typeParameters": null,
                      "params": [],
                      "returnType": null,
                      "body": {
                        "type": "BlockStatement",
                        "body": [],
                        "start": 9362,
                        "end": 9365
                      },
                      "expression": false,
                      "start": 9352,
                      "end": 9365
                    },
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 9347,
                    "end": 9365
                  }
                ],
                "returnType": null,
                "body": {
                  "type": "BlockStatement",
                  "body": [
                    {
                      "type": "ReturnStatement",
                      "argument": {
                        "type": "Literal",
                        "value": 0,
                        "raw": "0",
                        "start": 9376,
                        "end": 9377
                      },
                      "start": 9369,
                      "end": 9378
                    }
                  ],
                  "start": 9367,
                  "end": 9380
                },
                "expression": false,
                "start": 9334,
                "end": 9380
              },
              "computed": false,
              "static": false,
              "declare": false,
              "override": false,
              "optional": false,
              "definite": false,
              "readonly": false,
              "accessibility": "private",
              "start": 9304,
              "end": 9380
            },
            {
              "type": "PropertyDefinition",
              "decorators": [],
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "fnArrowPrivate",
                "optional": false,
                "typeAnnotation": null,
                "start": 9393,
                "end": 9407
              },
              "typeAnnotation": null,
              "value": {
                "type": "ArrowFunctionExpression",
                "expression": true,
                "async": false,
                "typeParameters": null,
                "params": [
                  {
                    "type": "AssignmentPattern",
                    "decorators": [],
                    "left": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "cb",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 9411,
                      "end": 9413
                    },
                    "right": {
                      "type": "FunctionExpression",
                      "id": null,
                      "generator": false,
                      "async": false,
                      "declare": false,
                      "typeParameters": null,
                      "params": [],
                      "returnType": null,
                      "body": {
                        "type": "BlockStatement",
                        "body": [],
                        "start": 9426,
                        "end": 9429
                      },
                      "expression": false,
                      "start": 9416,
                      "end": 9429
                    },
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 9411,
                    "end": 9429
                  }
                ],
                "returnType": null,
                "body": {
                  "type": "Literal",
                  "value": "S",
                  "raw": "\"S\"",
                  "start": 9434,
                  "end": 9437
                },
                "id": null,
                "generator": false,
                "start": 9410,
                "end": 9437
              },
              "computed": false,
              "static": false,
              "declare": false,
              "override": false,
              "optional": false,
              "definite": false,
              "readonly": false,
              "accessibility": "private",
              "start": 9385,
              "end": 9438
            },
            {
              "type": "PropertyDefinition",
              "decorators": [],
              "key": {
                "type": "PrivateIdentifier",
                "name": "fnArrow",
                "start": 9443,
                "end": 9451
              },
              "typeAnnotation": null,
              "value": {
                "type": "ArrowFunctionExpression",
                "expression": true,
                "async": false,
                "typeParameters": null,
                "params": [
                  {
                    "type": "AssignmentPattern",
                    "decorators": [],
                    "left": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "cb",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 9455,
                      "end": 9457
                    },
                    "right": {
                      "type": "FunctionExpression",
                      "id": null,
                      "generator": false,
                      "async": false,
                      "declare": false,
                      "typeParameters": null,
                      "params": [],
                      "returnType": null,
                      "body": {
                        "type": "BlockStatement",
                        "body": [],
                        "start": 9470,
                        "end": 9473
                      },
                      "expression": false,
                      "start": 9460,
                      "end": 9473
                    },
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 9455,
                    "end": 9473
                  }
                ],
                "returnType": null,
                "body": {
                  "type": "Literal",
                  "value": "S",
                  "raw": "\"S\"",
                  "start": 9478,
                  "end": 9481
                },
                "id": null,
                "generator": false,
                "start": 9454,
                "end": 9481
              },
              "computed": false,
              "static": false,
              "declare": false,
              "override": false,
              "optional": false,
              "definite": false,
              "readonly": false,
              "accessibility": null,
              "start": 9443,
              "end": 9482
            },
            {
              "type": "PropertyDefinition",
              "decorators": [],
              "key": {
                "type": "PrivateIdentifier",
                "name": "fnExpression",
                "start": 9487,
                "end": 9500
              },
              "typeAnnotation": null,
              "value": {
                "type": "FunctionExpression",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "foo",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 9512,
                  "end": 9515
                },
                "generator": false,
                "async": false,
                "declare": false,
                "typeParameters": null,
                "params": [
                  {
                    "type": "AssignmentPattern",
                    "decorators": [],
                    "left": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "cb",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 9516,
                      "end": 9518
                    },
                    "right": {
                      "type": "FunctionExpression",
                      "id": null,
                      "generator": false,
                      "async": false,
                      "declare": false,
                      "typeParameters": null,
                      "params": [],
                      "returnType": null,
                      "body": {
                        "type": "BlockStatement",
                        "body": [],
                        "start": 9531,
                        "end": 9534
                      },
                      "expression": false,
                      "start": 9521,
                      "end": 9534
                    },
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 9516,
                    "end": 9534
                  }
                ],
                "returnType": null,
                "body": {
                  "type": "BlockStatement",
                  "body": [
                    {
                      "type": "ReturnStatement",
                      "argument": {
                        "type": "Literal",
                        "value": 0,
                        "raw": "0",
                        "start": 9545,
                        "end": 9546
                      },
                      "start": 9538,
                      "end": 9547
                    }
                  ],
                  "start": 9536,
                  "end": 9548
                },
                "expression": false,
                "start": 9503,
                "end": 9548
              },
              "computed": false,
              "static": false,
              "declare": false,
              "override": false,
              "optional": false,
              "definite": false,
              "readonly": false,
              "accessibility": null,
              "start": 9487,
              "end": 9548
            },
            {
              "type": "PropertyDefinition",
              "decorators": [],
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "fnStaticExpressionPrivate",
                "optional": false,
                "typeAnnotation": null,
                "start": 9568,
                "end": 9593
              },
              "typeAnnotation": null,
              "value": {
                "type": "FunctionExpression",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "foo",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 9605,
                  "end": 9608
                },
                "generator": false,
                "async": false,
                "declare": false,
                "typeParameters": null,
                "params": [
                  {
                    "type": "AssignmentPattern",
                    "decorators": [],
                    "left": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "cb",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 9609,
                      "end": 9611
                    },
                    "right": {
                      "type": "FunctionExpression",
                      "id": null,
                      "generator": false,
                      "async": false,
                      "declare": false,
                      "typeParameters": null,
                      "params": [],
                      "returnType": null,
                      "body": {
                        "type": "BlockStatement",
                        "body": [],
                        "start": 9624,
                        "end": 9627
                      },
                      "expression": false,
                      "start": 9614,
                      "end": 9627
                    },
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 9609,
                    "end": 9627
                  }
                ],
                "returnType": null,
                "body": {
                  "type": "BlockStatement",
                  "body": [
                    {
                      "type": "ReturnStatement",
                      "argument": {
                        "type": "Literal",
                        "value": 0,
                        "raw": "0",
                        "start": 9638,
                        "end": 9639
                      },
                      "start": 9631,
                      "end": 9640
                    }
                  ],
                  "start": 9629,
                  "end": 9642
                },
                "expression": false,
                "start": 9596,
                "end": 9642
              },
              "computed": false,
              "static": true,
              "declare": false,
              "override": false,
              "optional": false,
              "definite": false,
              "readonly": false,
              "accessibility": "private",
              "start": 9553,
              "end": 9642
            },
            {
              "type": "PropertyDefinition",
              "decorators": [],
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "fnStaticArrowPrivate",
                "optional": false,
                "typeAnnotation": null,
                "start": 9662,
                "end": 9682
              },
              "typeAnnotation": null,
              "value": {
                "type": "ArrowFunctionExpression",
                "expression": true,
                "async": false,
                "typeParameters": null,
                "params": [
                  {
                    "type": "AssignmentPattern",
                    "decorators": [],
                    "left": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "cb",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 9686,
                      "end": 9688
                    },
                    "right": {
                      "type": "FunctionExpression",
                      "id": null,
                      "generator": false,
                      "async": false,
                      "declare": false,
                      "typeParameters": null,
                      "params": [],
                      "returnType": null,
                      "body": {
                        "type": "BlockStatement",
                        "body": [],
                        "start": 9701,
                        "end": 9704
                      },
                      "expression": false,
                      "start": 9691,
                      "end": 9704
                    },
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 9686,
                    "end": 9704
                  }
                ],
                "returnType": null,
                "body": {
                  "type": "Literal",
                  "value": "S",
                  "raw": "\"S\"",
                  "start": 9709,
                  "end": 9712
                },
                "id": null,
                "generator": false,
                "start": 9685,
                "end": 9712
              },
              "computed": false,
              "static": true,
              "declare": false,
              "override": false,
              "optional": false,
              "definite": false,
              "readonly": false,
              "accessibility": "private",
              "start": 9647,
              "end": 9713
            }
          ],
          "start": 6395,
          "end": 9715
        },
        "abstract": false,
        "declare": false,
        "start": 6367,
        "end": 9715
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 6360,
      "end": 9715
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 22,
  "end": 9715
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "export",
    "start": 22,
    "end": 28
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 29,
    "end": 34
  },
  {
    "type": "Identifier",
    "value": "fnExpressionConstVariable",
    "start": 35,
    "end": 60
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 61,
    "end": 62
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 63,
    "end": 71
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 72,
    "end": 75
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 75,
    "end": 76
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 76,
    "end": 77
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 78,
    "end": 79
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 80,
    "end": 86
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 87,
    "end": 88
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 88,
    "end": 89
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 89,
    "end": 90
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 91,
    "end": 97
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 98,
    "end": 103
  },
  {
    "type": "Identifier",
    "value": "fnArrowConstVariable",
    "start": 104,
    "end": 124
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 125,
    "end": 126
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 127,
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
    "value": "=>",
    "start": 130,
    "end": 132
  },
  {
    "type": "String",
    "value": "\"S\"",
    "start": 133,
    "end": 136
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 136,
    "end": 137
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 139,
    "end": 145
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 146,
    "end": 149
  },
  {
    "type": "Identifier",
    "value": "fnExpressionLetVariable",
    "start": 150,
    "end": 173
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 174,
    "end": 175
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 176,
    "end": 184
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 185,
    "end": 188
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 188,
    "end": 189
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 189,
    "end": 190
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 191,
    "end": 192
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 193,
    "end": 199
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 200,
    "end": 201
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 201,
    "end": 202
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 202,
    "end": 203
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 204,
    "end": 210
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 211,
    "end": 214
  },
  {
    "type": "Identifier",
    "value": "fnArrowLetVariable",
    "start": 215,
    "end": 233
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 234,
    "end": 235
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 236,
    "end": 237
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 237,
    "end": 238
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 239,
    "end": 241
  },
  {
    "type": "String",
    "value": "\"S\"",
    "start": 242,
    "end": 245
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 245,
    "end": 246
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 248,
    "end": 254
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 255,
    "end": 258
  },
  {
    "type": "Identifier",
    "value": "fnExpressionVarVariable",
    "start": 259,
    "end": 282
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 283,
    "end": 284
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 285,
    "end": 293
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 294,
    "end": 297
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 297,
    "end": 298
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 298,
    "end": 299
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 300,
    "end": 301
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 302,
    "end": 308
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 309,
    "end": 310
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 310,
    "end": 311
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 311,
    "end": 312
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 313,
    "end": 319
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 320,
    "end": 323
  },
  {
    "type": "Identifier",
    "value": "fnArrowVarVariable",
    "start": 324,
    "end": 342
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 343,
    "end": 344
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 345,
    "end": 346
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 346,
    "end": 347
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 348,
    "end": 350
  },
  {
    "type": "String",
    "value": "\"S\"",
    "start": 351,
    "end": 354
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 354,
    "end": 355
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 370,
    "end": 376
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 377,
    "end": 382
  },
  {
    "type": "Identifier",
    "value": "fnExpressionConstVariableOk",
    "start": 383,
    "end": 410
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 411,
    "end": 412
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 413,
    "end": 421
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 422,
    "end": 425
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 425,
    "end": 426
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 426,
    "end": 427
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 427,
    "end": 428
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 429,
    "end": 435
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 436,
    "end": 437
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 438,
    "end": 444
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 445,
    "end": 446
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 446,
    "end": 447
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 447,
    "end": 448
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 449,
    "end": 455
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 456,
    "end": 461
  },
  {
    "type": "Identifier",
    "value": "fnArrowConstVariableOk",
    "start": 462,
    "end": 484
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 485,
    "end": 486
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 487,
    "end": 488
  },
  {
    "type": "Identifier",
    "value": "cb",
    "start": 488,
    "end": 490
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 491,
    "end": 492
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 493,
    "end": 501
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 501,
    "end": 502
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 502,
    "end": 503
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 503,
    "end": 504
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 505,
    "end": 506
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 506,
    "end": 507
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 507,
    "end": 508
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 509,
    "end": 515
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 516,
    "end": 518
  },
  {
    "type": "String",
    "value": "\"S\"",
    "start": 519,
    "end": 522
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 522,
    "end": 523
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 525,
    "end": 531
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 532,
    "end": 535
  },
  {
    "type": "Identifier",
    "value": "fnExpressionLetVariableOk",
    "start": 536,
    "end": 561
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 562,
    "end": 563
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 564,
    "end": 572
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 573,
    "end": 576
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 576,
    "end": 577
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 577,
    "end": 578
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 578,
    "end": 579
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 580,
    "end": 586
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 587,
    "end": 588
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 589,
    "end": 595
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 596,
    "end": 597
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 597,
    "end": 598
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 598,
    "end": 599
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 600,
    "end": 606
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 607,
    "end": 610
  },
  {
    "type": "Identifier",
    "value": "fnArrowLetVariableOk",
    "start": 611,
    "end": 631
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 632,
    "end": 633
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 634,
    "end": 635
  },
  {
    "type": "Identifier",
    "value": "cb",
    "start": 635,
    "end": 637
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 638,
    "end": 639
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 640,
    "end": 648
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 648,
    "end": 649
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 649,
    "end": 650
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 650,
    "end": 651
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 652,
    "end": 653
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 653,
    "end": 654
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 654,
    "end": 655
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 656,
    "end": 662
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 663,
    "end": 665
  },
  {
    "type": "String",
    "value": "\"S\"",
    "start": 666,
    "end": 669
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 669,
    "end": 670
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 672,
    "end": 678
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 679,
    "end": 682
  },
  {
    "type": "Identifier",
    "value": "fnExpressionVarVariableOk",
    "start": 683,
    "end": 708
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 709,
    "end": 710
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 711,
    "end": 719
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 720,
    "end": 723
  },
  {
    "type": "Punctuator",
    "value": "(",
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
    "value": ":",
    "start": 725,
    "end": 726
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 727,
    "end": 733
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 734,
    "end": 735
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 736,
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
    "value": ";",
    "start": 744,
    "end": 745
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 745,
    "end": 746
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 747,
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
    "value": "fnArrowVarVariableOk",
    "start": 758,
    "end": 778
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 779,
    "end": 780
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 781,
    "end": 782
  },
  {
    "type": "Identifier",
    "value": "cb",
    "start": 782,
    "end": 784
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 785,
    "end": 786
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 787,
    "end": 795
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 795,
    "end": 796
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 796,
    "end": 797
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 797,
    "end": 798
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 799,
    "end": 800
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 800,
    "end": 801
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 801,
    "end": 802
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 803,
    "end": 809
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 810,
    "end": 812
  },
  {
    "type": "String",
    "value": "\"S\"",
    "start": 813,
    "end": 816
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 816,
    "end": 817
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 835,
    "end": 840
  },
  {
    "type": "Identifier",
    "value": "fnExpressionConstVariableInternal",
    "start": 841,
    "end": 874
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 875,
    "end": 876
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 877,
    "end": 885
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 886,
    "end": 889
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 889,
    "end": 890
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 890,
    "end": 891
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 892,
    "end": 893
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 894,
    "end": 900
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 901,
    "end": 902
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 902,
    "end": 903
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 903,
    "end": 904
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 905,
    "end": 910
  },
  {
    "type": "Identifier",
    "value": "fnArrowConstVariableInternal",
    "start": 911,
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
    "value": "(",
    "start": 942,
    "end": 943
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 943,
    "end": 944
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 945,
    "end": 947
  },
  {
    "type": "String",
    "value": "\"S\"",
    "start": 948,
    "end": 951
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 951,
    "end": 952
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 954,
    "end": 957
  },
  {
    "type": "Identifier",
    "value": "fnExpressionLetVariableInternal",
    "start": 958,
    "end": 989
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 990,
    "end": 991
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 992,
    "end": 1000
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 1001,
    "end": 1004
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1004,
    "end": 1005
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1005,
    "end": 1006
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1007,
    "end": 1008
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 1009,
    "end": 1015
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 1016,
    "end": 1017
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1017,
    "end": 1018
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1018,
    "end": 1019
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 1020,
    "end": 1023
  },
  {
    "type": "Identifier",
    "value": "fnArrowLetVariableInternal",
    "start": 1024,
    "end": 1050
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1051,
    "end": 1052
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1053,
    "end": 1054
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1054,
    "end": 1055
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1056,
    "end": 1058
  },
  {
    "type": "String",
    "value": "\"S\"",
    "start": 1059,
    "end": 1062
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1062,
    "end": 1063
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1065,
    "end": 1068
  },
  {
    "type": "Identifier",
    "value": "fnExpressionVarVariableInternal",
    "start": 1069,
    "end": 1100
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1101,
    "end": 1102
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1103,
    "end": 1111
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 1112,
    "end": 1115
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1115,
    "end": 1116
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1116,
    "end": 1117
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1118,
    "end": 1119
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 1120,
    "end": 1126
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 1127,
    "end": 1128
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1128,
    "end": 1129
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1129,
    "end": 1130
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1131,
    "end": 1134
  },
  {
    "type": "Identifier",
    "value": "fnArrowVarVariableInternal",
    "start": 1135,
    "end": 1161
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1162,
    "end": 1163
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1164,
    "end": 1165
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1165,
    "end": 1166
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1167,
    "end": 1169
  },
  {
    "type": "String",
    "value": "\"S\"",
    "start": 1170,
    "end": 1173
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1173,
    "end": 1174
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 1195,
    "end": 1201
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 1202,
    "end": 1207
  },
  {
    "type": "Identifier",
    "value": "ExportedClass",
    "start": 1208,
    "end": 1221
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1222,
    "end": 1223
  },
  {
    "type": "Identifier",
    "value": "fnExpression",
    "start": 1249,
    "end": 1261
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1262,
    "end": 1263
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1264,
    "end": 1272
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 1273,
    "end": 1276
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1276,
    "end": 1277
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1277,
    "end": 1278
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1279,
    "end": 1280
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 1281,
    "end": 1287
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 1288,
    "end": 1289
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1289,
    "end": 1290
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1291,
    "end": 1292
  },
  {
    "type": "Identifier",
    "value": "fnArrow",
    "start": 1297,
    "end": 1304
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1305,
    "end": 1306
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1307,
    "end": 1308
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1308,
    "end": 1309
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1310,
    "end": 1312
  },
  {
    "type": "String",
    "value": "\"S\"",
    "start": 1313,
    "end": 1316
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1316,
    "end": 1317
  },
  {
    "type": "Keyword",
    "value": "protected",
    "start": 1326,
    "end": 1335
  },
  {
    "type": "Identifier",
    "value": "fnExpressionProtected",
    "start": 1336,
    "end": 1357
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1358,
    "end": 1359
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1360,
    "end": 1368
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 1369,
    "end": 1372
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1372,
    "end": 1373
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1373,
    "end": 1374
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1375,
    "end": 1376
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 1377,
    "end": 1383
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 1384,
    "end": 1385
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1385,
    "end": 1386
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1387,
    "end": 1388
  },
  {
    "type": "Keyword",
    "value": "protected",
    "start": 1393,
    "end": 1402
  },
  {
    "type": "Identifier",
    "value": "fnArrowProtected",
    "start": 1403,
    "end": 1419
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1420,
    "end": 1421
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1422,
    "end": 1423
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1423,
    "end": 1424
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1425,
    "end": 1427
  },
  {
    "type": "String",
    "value": "\"S\"",
    "start": 1428,
    "end": 1431
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1431,
    "end": 1432
  },
  {
    "type": "Keyword",
    "value": "static",
    "start": 1438,
    "end": 1444
  },
  {
    "type": "Identifier",
    "value": "fnStaticExpression",
    "start": 1445,
    "end": 1463
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1464,
    "end": 1465
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1466,
    "end": 1474
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 1475,
    "end": 1478
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1478,
    "end": 1479
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1479,
    "end": 1480
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1481,
    "end": 1482
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 1483,
    "end": 1489
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 1490,
    "end": 1491
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1491,
    "end": 1492
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1493,
    "end": 1494
  },
  {
    "type": "Keyword",
    "value": "static",
    "start": 1499,
    "end": 1505
  },
  {
    "type": "Identifier",
    "value": "fnStaticArrow",
    "start": 1506,
    "end": 1519
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1520,
    "end": 1521
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1522,
    "end": 1523
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1523,
    "end": 1524
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1525,
    "end": 1527
  },
  {
    "type": "String",
    "value": "\"S\"",
    "start": 1528,
    "end": 1531
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1531,
    "end": 1532
  },
  {
    "type": "Keyword",
    "value": "protected",
    "start": 1537,
    "end": 1546
  },
  {
    "type": "Keyword",
    "value": "static",
    "start": 1547,
    "end": 1553
  },
  {
    "type": "Identifier",
    "value": "fnStaticExpressionProtected",
    "start": 1554,
    "end": 1581
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1582,
    "end": 1583
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1584,
    "end": 1592
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 1593,
    "end": 1596
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1596,
    "end": 1597
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1597,
    "end": 1598
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1599,
    "end": 1600
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 1601,
    "end": 1607
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 1608,
    "end": 1609
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1609,
    "end": 1610
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1611,
    "end": 1612
  },
  {
    "type": "Keyword",
    "value": "protected",
    "start": 1621,
    "end": 1630
  },
  {
    "type": "Keyword",
    "value": "static",
    "start": 1631,
    "end": 1637
  },
  {
    "type": "Identifier",
    "value": "fnStaticArrowProtected",
    "start": 1638,
    "end": 1660
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1661,
    "end": 1662
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1663,
    "end": 1664
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1664,
    "end": 1665
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1666,
    "end": 1668
  },
  {
    "type": "String",
    "value": "\"S\"",
    "start": 1669,
    "end": 1672
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1672,
    "end": 1673
  },
  {
    "type": "Identifier",
    "value": "fnExpressionOk",
    "start": 1710,
    "end": 1724
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1725,
    "end": 1726
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1727,
    "end": 1735
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 1736,
    "end": 1739
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1739,
    "end": 1740
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1740,
    "end": 1741
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1741,
    "end": 1742
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1743,
    "end": 1749
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1750,
    "end": 1751
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 1752,
    "end": 1758
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 1759,
    "end": 1760
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1760,
    "end": 1761
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1762,
    "end": 1763
  },
  {
    "type": "Identifier",
    "value": "fnArrowOK",
    "start": 1768,
    "end": 1777
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1778,
    "end": 1779
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1780,
    "end": 1781
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1781,
    "end": 1782
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1782,
    "end": 1783
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1784,
    "end": 1790
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1791,
    "end": 1793
  },
  {
    "type": "String",
    "value": "\"S\"",
    "start": 1794,
    "end": 1797
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1797,
    "end": 1798
  },
  {
    "type": "Keyword",
    "value": "protected",
    "start": 1803,
    "end": 1812
  },
  {
    "type": "Identifier",
    "value": "fnExpressionProtectedOk",
    "start": 1813,
    "end": 1836
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1837,
    "end": 1838
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1839,
    "end": 1847
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 1848,
    "end": 1851
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1851,
    "end": 1852
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1852,
    "end": 1853
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1853,
    "end": 1854
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1855,
    "end": 1861
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1862,
    "end": 1863
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 1864,
    "end": 1870
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 1871,
    "end": 1872
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1872,
    "end": 1873
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1874,
    "end": 1875
  },
  {
    "type": "Keyword",
    "value": "protected",
    "start": 1880,
    "end": 1889
  },
  {
    "type": "Identifier",
    "value": "fnArrowProtectedOK",
    "start": 1890,
    "end": 1908
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1909,
    "end": 1910
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1911,
    "end": 1912
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1912,
    "end": 1913
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1913,
    "end": 1914
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1915,
    "end": 1921
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1922,
    "end": 1924
  },
  {
    "type": "String",
    "value": "\"S\"",
    "start": 1925,
    "end": 1928
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1928,
    "end": 1929
  },
  {
    "type": "Keyword",
    "value": "static",
    "start": 1935,
    "end": 1941
  },
  {
    "type": "Identifier",
    "value": "fnStaticExpressionOk",
    "start": 1942,
    "end": 1962
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1963,
    "end": 1964
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1965,
    "end": 1973
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 1974,
    "end": 1977
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1977,
    "end": 1978
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1978,
    "end": 1979
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1979,
    "end": 1980
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1981,
    "end": 1987
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1988,
    "end": 1989
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 1990,
    "end": 1996
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 1997,
    "end": 1998
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1998,
    "end": 1999
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2000,
    "end": 2001
  },
  {
    "type": "Keyword",
    "value": "static",
    "start": 2006,
    "end": 2012
  },
  {
    "type": "Identifier",
    "value": "fnStaticArrowOk",
    "start": 2013,
    "end": 2028
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2029,
    "end": 2030
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2031,
    "end": 2032
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2032,
    "end": 2033
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2033,
    "end": 2034
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 2035,
    "end": 2041
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 2042,
    "end": 2044
  },
  {
    "type": "String",
    "value": "\"S\"",
    "start": 2045,
    "end": 2048
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2048,
    "end": 2049
  },
  {
    "type": "Keyword",
    "value": "protected",
    "start": 2054,
    "end": 2063
  },
  {
    "type": "Keyword",
    "value": "static",
    "start": 2064,
    "end": 2070
  },
  {
    "type": "Identifier",
    "value": "fnStaticExpressionProtectedOk",
    "start": 2071,
    "end": 2100
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2101,
    "end": 2102
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 2103,
    "end": 2111
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 2112,
    "end": 2115
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2115,
    "end": 2116
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2116,
    "end": 2117
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2117,
    "end": 2118
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 2119,
    "end": 2125
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2126,
    "end": 2127
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 2128,
    "end": 2134
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 2135,
    "end": 2136
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2136,
    "end": 2137
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2138,
    "end": 2139
  },
  {
    "type": "Keyword",
    "value": "protected",
    "start": 2148,
    "end": 2157
  },
  {
    "type": "Keyword",
    "value": "static",
    "start": 2158,
    "end": 2164
  },
  {
    "type": "Identifier",
    "value": "fnStaticArrowProtectedOk",
    "start": 2165,
    "end": 2189
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2190,
    "end": 2191
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2192,
    "end": 2193
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2193,
    "end": 2194
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2194,
    "end": 2195
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 2196,
    "end": 2202
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 2203,
    "end": 2205
  },
  {
    "type": "String",
    "value": "\"S\"",
    "start": 2206,
    "end": 2209
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2209,
    "end": 2210
  },
  {
    "type": "Keyword",
    "value": "private",
    "start": 2257,
    "end": 2264
  },
  {
    "type": "Identifier",
    "value": "fnExpressionPrivate",
    "start": 2265,
    "end": 2284
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2285,
    "end": 2286
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 2287,
    "end": 2295
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 2296,
    "end": 2299
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2299,
    "end": 2300
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2300,
    "end": 2301
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2302,
    "end": 2303
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 2304,
    "end": 2310
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 2311,
    "end": 2312
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2312,
    "end": 2313
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2314,
    "end": 2315
  },
  {
    "type": "Keyword",
    "value": "private",
    "start": 2320,
    "end": 2327
  },
  {
    "type": "Identifier",
    "value": "fnArrowPrivate",
    "start": 2328,
    "end": 2342
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2343,
    "end": 2344
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2345,
    "end": 2346
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2346,
    "end": 2347
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 2348,
    "end": 2350
  },
  {
    "type": "String",
    "value": "\"S\"",
    "start": 2351,
    "end": 2354
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2354,
    "end": 2355
  },
  {
    "type": "PrivateIdentifier",
    "value": "fnArrow",
    "start": 2360,
    "end": 2368
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2369,
    "end": 2370
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2371,
    "end": 2372
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2372,
    "end": 2373
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 2374,
    "end": 2376
  },
  {
    "type": "String",
    "value": "\"S\"",
    "start": 2377,
    "end": 2380
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2380,
    "end": 2381
  },
  {
    "type": "PrivateIdentifier",
    "value": "fnExpression",
    "start": 2386,
    "end": 2399
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2400,
    "end": 2401
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 2402,
    "end": 2410
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 2411,
    "end": 2414
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2414,
    "end": 2415
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2415,
    "end": 2416
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2417,
    "end": 2418
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 2419,
    "end": 2425
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 2426,
    "end": 2427
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2427,
    "end": 2428
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2428,
    "end": 2429
  },
  {
    "type": "Keyword",
    "value": "private",
    "start": 2434,
    "end": 2441
  },
  {
    "type": "Keyword",
    "value": "static",
    "start": 2442,
    "end": 2448
  },
  {
    "type": "Identifier",
    "value": "fnStaticExpressionPrivate",
    "start": 2449,
    "end": 2474
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2475,
    "end": 2476
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 2477,
    "end": 2485
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 2486,
    "end": 2489
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2489,
    "end": 2490
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2490,
    "end": 2491
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2492,
    "end": 2493
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 2494,
    "end": 2500
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 2501,
    "end": 2502
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2502,
    "end": 2503
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2504,
    "end": 2505
  },
  {
    "type": "Keyword",
    "value": "private",
    "start": 2510,
    "end": 2517
  },
  {
    "type": "Keyword",
    "value": "static",
    "start": 2518,
    "end": 2524
  },
  {
    "type": "Identifier",
    "value": "fnStaticArrowPrivate",
    "start": 2525,
    "end": 2545
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2546,
    "end": 2547
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2548,
    "end": 2549
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2549,
    "end": 2550
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 2551,
    "end": 2553
  },
  {
    "type": "String",
    "value": "\"S\"",
    "start": 2554,
    "end": 2557
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2557,
    "end": 2558
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2559,
    "end": 2560
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 2578,
    "end": 2583
  },
  {
    "type": "Identifier",
    "value": "IndirectlyExportedClass",
    "start": 2584,
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
    "value": "fnExpression",
    "start": 2615,
    "end": 2627
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2628,
    "end": 2629
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 2630,
    "end": 2638
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 2639,
    "end": 2642
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2642,
    "end": 2643
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2643,
    "end": 2644
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2645,
    "end": 2646
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 2647,
    "end": 2653
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 2654,
    "end": 2655
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2655,
    "end": 2656
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2657,
    "end": 2658
  },
  {
    "type": "Identifier",
    "value": "fnArrow",
    "start": 2663,
    "end": 2670
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2671,
    "end": 2672
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2673,
    "end": 2674
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2674,
    "end": 2675
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 2676,
    "end": 2678
  },
  {
    "type": "String",
    "value": "\"S\"",
    "start": 2679,
    "end": 2682
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2682,
    "end": 2683
  },
  {
    "type": "Keyword",
    "value": "static",
    "start": 2689,
    "end": 2695
  },
  {
    "type": "Identifier",
    "value": "fnStaticExpression",
    "start": 2696,
    "end": 2714
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2715,
    "end": 2716
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 2717,
    "end": 2725
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 2726,
    "end": 2729
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2729,
    "end": 2730
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2730,
    "end": 2731
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2732,
    "end": 2733
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 2734,
    "end": 2740
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 2741,
    "end": 2742
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2742,
    "end": 2743
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2744,
    "end": 2745
  },
  {
    "type": "Keyword",
    "value": "static",
    "start": 2750,
    "end": 2756
  },
  {
    "type": "Identifier",
    "value": "fnStaticArrow",
    "start": 2757,
    "end": 2770
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2771,
    "end": 2772
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2773,
    "end": 2774
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2774,
    "end": 2775
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 2776,
    "end": 2778
  },
  {
    "type": "String",
    "value": "\"S\"",
    "start": 2779,
    "end": 2782
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2782,
    "end": 2783
  },
  {
    "type": "Keyword",
    "value": "protected",
    "start": 2793,
    "end": 2802
  },
  {
    "type": "Keyword",
    "value": "static",
    "start": 2803,
    "end": 2809
  },
  {
    "type": "Identifier",
    "value": "fnStaticExpressionProtected",
    "start": 2810,
    "end": 2837
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2838,
    "end": 2839
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 2840,
    "end": 2848
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 2849,
    "end": 2852
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2852,
    "end": 2853
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2853,
    "end": 2854
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2855,
    "end": 2856
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 2857,
    "end": 2863
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 2864,
    "end": 2865
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2865,
    "end": 2866
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2867,
    "end": 2868
  },
  {
    "type": "Keyword",
    "value": "protected",
    "start": 2877,
    "end": 2886
  },
  {
    "type": "Keyword",
    "value": "static",
    "start": 2887,
    "end": 2893
  },
  {
    "type": "Identifier",
    "value": "fnStaticArrowProtected",
    "start": 2894,
    "end": 2916
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2917,
    "end": 2918
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2919,
    "end": 2920
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2920,
    "end": 2921
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 2922,
    "end": 2924
  },
  {
    "type": "String",
    "value": "\"S\"",
    "start": 2925,
    "end": 2928
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2928,
    "end": 2929
  },
  {
    "type": "Keyword",
    "value": "private",
    "start": 2935,
    "end": 2942
  },
  {
    "type": "Identifier",
    "value": "fnExpressionPrivate",
    "start": 2943,
    "end": 2962
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2963,
    "end": 2964
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 2965,
    "end": 2973
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 2974,
    "end": 2977
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2977,
    "end": 2978
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2978,
    "end": 2979
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2980,
    "end": 2981
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 2982,
    "end": 2988
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 2989,
    "end": 2990
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2990,
    "end": 2991
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2992,
    "end": 2993
  },
  {
    "type": "Keyword",
    "value": "private",
    "start": 2998,
    "end": 3005
  },
  {
    "type": "Identifier",
    "value": "fnArrowPrivate",
    "start": 3006,
    "end": 3020
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3021,
    "end": 3022
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3023,
    "end": 3024
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3024,
    "end": 3025
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 3026,
    "end": 3028
  },
  {
    "type": "String",
    "value": "\"S\"",
    "start": 3029,
    "end": 3032
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3032,
    "end": 3033
  },
  {
    "type": "PrivateIdentifier",
    "value": "fnArrow",
    "start": 3038,
    "end": 3046
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3047,
    "end": 3048
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3049,
    "end": 3050
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3050,
    "end": 3051
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 3052,
    "end": 3054
  },
  {
    "type": "String",
    "value": "\"S\"",
    "start": 3055,
    "end": 3058
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3058,
    "end": 3059
  },
  {
    "type": "PrivateIdentifier",
    "value": "fnExpression",
    "start": 3064,
    "end": 3077
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3078,
    "end": 3079
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 3080,
    "end": 3088
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 3089,
    "end": 3092
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3092,
    "end": 3093
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3093,
    "end": 3094
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3095,
    "end": 3096
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 3097,
    "end": 3103
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 3104,
    "end": 3105
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3105,
    "end": 3106
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3106,
    "end": 3107
  },
  {
    "type": "Keyword",
    "value": "private",
    "start": 3112,
    "end": 3119
  },
  {
    "type": "Keyword",
    "value": "static",
    "start": 3120,
    "end": 3126
  },
  {
    "type": "Identifier",
    "value": "fnStaticExpressionPrivate",
    "start": 3127,
    "end": 3152
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3153,
    "end": 3154
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 3155,
    "end": 3163
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 3164,
    "end": 3167
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3167,
    "end": 3168
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3168,
    "end": 3169
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3170,
    "end": 3171
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 3172,
    "end": 3178
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 3179,
    "end": 3180
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3180,
    "end": 3181
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3182,
    "end": 3183
  },
  {
    "type": "Keyword",
    "value": "private",
    "start": 3188,
    "end": 3195
  },
  {
    "type": "Keyword",
    "value": "static",
    "start": 3196,
    "end": 3202
  },
  {
    "type": "Identifier",
    "value": "fnStaticArrowPrivate",
    "start": 3203,
    "end": 3223
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3224,
    "end": 3225
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3226,
    "end": 3227
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3227,
    "end": 3228
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 3229,
    "end": 3231
  },
  {
    "type": "String",
    "value": "\"S\"",
    "start": 3232,
    "end": 3235
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3235,
    "end": 3236
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3237,
    "end": 3238
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 3239,
    "end": 3245
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 3246,
    "end": 3251
  },
  {
    "type": "Identifier",
    "value": "instance",
    "start": 3252,
    "end": 3260
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3260,
    "end": 3261
  },
  {
    "type": "Identifier",
    "value": "IndirectlyExportedClass",
    "start": 3262,
    "end": 3285
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3286,
    "end": 3287
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 3288,
    "end": 3291
  },
  {
    "type": "Identifier",
    "value": "IndirectlyExportedClass",
    "start": 3292,
    "end": 3315
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3315,
    "end": 3316
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3316,
    "end": 3317
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3317,
    "end": 3318
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 3333,
    "end": 3338
  },
  {
    "type": "Identifier",
    "value": "InternalClass",
    "start": 3339,
    "end": 3352
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3353,
    "end": 3354
  },
  {
    "type": "Identifier",
    "value": "fnExpression",
    "start": 3360,
    "end": 3372
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3373,
    "end": 3374
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 3375,
    "end": 3383
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 3384,
    "end": 3387
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3387,
    "end": 3388
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3388,
    "end": 3389
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3390,
    "end": 3391
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 3392,
    "end": 3398
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 3399,
    "end": 3400
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3400,
    "end": 3401
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3402,
    "end": 3403
  },
  {
    "type": "Identifier",
    "value": "fnArrow",
    "start": 3408,
    "end": 3415
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3416,
    "end": 3417
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3418,
    "end": 3419
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3419,
    "end": 3420
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 3421,
    "end": 3423
  },
  {
    "type": "String",
    "value": "\"S\"",
    "start": 3424,
    "end": 3427
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3427,
    "end": 3428
  },
  {
    "type": "Keyword",
    "value": "static",
    "start": 3434,
    "end": 3440
  },
  {
    "type": "Identifier",
    "value": "fnStaticExpression",
    "start": 3441,
    "end": 3459
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3460,
    "end": 3461
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 3462,
    "end": 3470
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 3471,
    "end": 3474
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3474,
    "end": 3475
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3475,
    "end": 3476
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3477,
    "end": 3478
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 3479,
    "end": 3485
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 3486,
    "end": 3487
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3487,
    "end": 3488
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3489,
    "end": 3490
  },
  {
    "type": "Keyword",
    "value": "static",
    "start": 3495,
    "end": 3501
  },
  {
    "type": "Identifier",
    "value": "fnStaticArrow",
    "start": 3502,
    "end": 3515
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3516,
    "end": 3517
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3518,
    "end": 3519
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3519,
    "end": 3520
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 3521,
    "end": 3523
  },
  {
    "type": "String",
    "value": "\"S\"",
    "start": 3524,
    "end": 3527
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3527,
    "end": 3528
  },
  {
    "type": "Keyword",
    "value": "protected",
    "start": 3538,
    "end": 3547
  },
  {
    "type": "Keyword",
    "value": "static",
    "start": 3548,
    "end": 3554
  },
  {
    "type": "Identifier",
    "value": "fnStaticExpressionProtected",
    "start": 3555,
    "end": 3582
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3583,
    "end": 3584
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 3585,
    "end": 3593
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 3594,
    "end": 3597
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3597,
    "end": 3598
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3598,
    "end": 3599
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3600,
    "end": 3601
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 3602,
    "end": 3608
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 3609,
    "end": 3610
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3610,
    "end": 3611
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3612,
    "end": 3613
  },
  {
    "type": "Keyword",
    "value": "protected",
    "start": 3622,
    "end": 3631
  },
  {
    "type": "Keyword",
    "value": "static",
    "start": 3632,
    "end": 3638
  },
  {
    "type": "Identifier",
    "value": "fnStaticArrowProtected",
    "start": 3639,
    "end": 3661
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3662,
    "end": 3663
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3664,
    "end": 3665
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3665,
    "end": 3666
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 3667,
    "end": 3669
  },
  {
    "type": "String",
    "value": "\"S\"",
    "start": 3670,
    "end": 3673
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3673,
    "end": 3674
  },
  {
    "type": "Keyword",
    "value": "private",
    "start": 3680,
    "end": 3687
  },
  {
    "type": "Identifier",
    "value": "fnExpressionPrivate",
    "start": 3688,
    "end": 3707
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3708,
    "end": 3709
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 3710,
    "end": 3718
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 3719,
    "end": 3722
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3722,
    "end": 3723
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3723,
    "end": 3724
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3725,
    "end": 3726
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 3727,
    "end": 3733
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 3734,
    "end": 3735
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3735,
    "end": 3736
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3737,
    "end": 3738
  },
  {
    "type": "Keyword",
    "value": "private",
    "start": 3743,
    "end": 3750
  },
  {
    "type": "Identifier",
    "value": "fnArrowPrivate",
    "start": 3751,
    "end": 3765
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3766,
    "end": 3767
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3768,
    "end": 3769
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3769,
    "end": 3770
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 3771,
    "end": 3773
  },
  {
    "type": "String",
    "value": "\"S\"",
    "start": 3774,
    "end": 3777
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3777,
    "end": 3778
  },
  {
    "type": "PrivateIdentifier",
    "value": "fnArrow",
    "start": 3783,
    "end": 3791
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3792,
    "end": 3793
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3794,
    "end": 3795
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3795,
    "end": 3796
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 3797,
    "end": 3799
  },
  {
    "type": "String",
    "value": "\"S\"",
    "start": 3800,
    "end": 3803
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3803,
    "end": 3804
  },
  {
    "type": "PrivateIdentifier",
    "value": "fnExpression",
    "start": 3809,
    "end": 3822
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3823,
    "end": 3824
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 3825,
    "end": 3833
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 3834,
    "end": 3837
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3837,
    "end": 3838
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3838,
    "end": 3839
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3840,
    "end": 3841
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 3842,
    "end": 3848
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 3849,
    "end": 3850
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3850,
    "end": 3851
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3851,
    "end": 3852
  },
  {
    "type": "Keyword",
    "value": "private",
    "start": 3857,
    "end": 3864
  },
  {
    "type": "Keyword",
    "value": "static",
    "start": 3865,
    "end": 3871
  },
  {
    "type": "Identifier",
    "value": "fnStaticExpressionPrivate",
    "start": 3872,
    "end": 3897
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3898,
    "end": 3899
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 3900,
    "end": 3908
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 3909,
    "end": 3912
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3912,
    "end": 3913
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3913,
    "end": 3914
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3915,
    "end": 3916
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 3917,
    "end": 3923
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 3924,
    "end": 3925
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3925,
    "end": 3926
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3927,
    "end": 3928
  },
  {
    "type": "Keyword",
    "value": "private",
    "start": 3933,
    "end": 3940
  },
  {
    "type": "Keyword",
    "value": "static",
    "start": 3941,
    "end": 3947
  },
  {
    "type": "Identifier",
    "value": "fnStaticArrowPrivate",
    "start": 3948,
    "end": 3968
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3969,
    "end": 3970
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3971,
    "end": 3972
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3972,
    "end": 3973
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 3974,
    "end": 3976
  },
  {
    "type": "String",
    "value": "\"S\"",
    "start": 3977,
    "end": 3980
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3980,
    "end": 3981
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3982,
    "end": 3983
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 3984,
    "end": 3989
  },
  {
    "type": "Identifier",
    "value": "internalInstance",
    "start": 3990,
    "end": 4006
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4006,
    "end": 4007
  },
  {
    "type": "Identifier",
    "value": "InternalClass",
    "start": 4008,
    "end": 4021
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 4022,
    "end": 4023
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 4024,
    "end": 4027
  },
  {
    "type": "Identifier",
    "value": "InternalClass",
    "start": 4028,
    "end": 4041
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4041,
    "end": 4042
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4042,
    "end": 4043
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4043,
    "end": 4044
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 4113,
    "end": 4119
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 4120,
    "end": 4125
  },
  {
    "type": "Identifier",
    "value": "fnParamExpressionConstVariable",
    "start": 4126,
    "end": 4156
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 4157,
    "end": 4158
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 4159,
    "end": 4167
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 4168,
    "end": 4171
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4171,
    "end": 4172
  },
  {
    "type": "Identifier",
    "value": "cb",
    "start": 4172,
    "end": 4174
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 4175,
    "end": 4176
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 4177,
    "end": 4185
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4185,
    "end": 4186
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4186,
    "end": 4187
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 4187,
    "end": 4188
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 4189,
    "end": 4190
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4190,
    "end": 4191
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 4192,
    "end": 4193
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 4194,
    "end": 4200
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 4201,
    "end": 4202
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4202,
    "end": 4203
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 4203,
    "end": 4204
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 4205,
    "end": 4211
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 4212,
    "end": 4217
  },
  {
    "type": "Identifier",
    "value": "fnParamArrowConstVariable",
    "start": 4218,
    "end": 4243
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 4244,
    "end": 4245
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4246,
    "end": 4247
  },
  {
    "type": "Identifier",
    "value": "cb",
    "start": 4247,
    "end": 4249
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 4250,
    "end": 4251
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4252,
    "end": 4253
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4253,
    "end": 4254
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 4255,
    "end": 4257
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 4258,
    "end": 4259
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4259,
    "end": 4260
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 4261,
    "end": 4263
  },
  {
    "type": "String",
    "value": "\"S\"",
    "start": 4264,
    "end": 4267
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4267,
    "end": 4268
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 4270,
    "end": 4276
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 4277,
    "end": 4280
  },
  {
    "type": "Identifier",
    "value": "fnParamExpressionLetVariable",
    "start": 4281,
    "end": 4309
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 4310,
    "end": 4311
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 4312,
    "end": 4320
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 4321,
    "end": 4324
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4324,
    "end": 4325
  },
  {
    "type": "Identifier",
    "value": "cb",
    "start": 4325,
    "end": 4327
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 4328,
    "end": 4329
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 4330,
    "end": 4338
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4338,
    "end": 4339
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4339,
    "end": 4340
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 4340,
    "end": 4341
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 4342,
    "end": 4343
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4343,
    "end": 4344
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 4345,
    "end": 4346
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 4347,
    "end": 4353
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 4354,
    "end": 4355
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4355,
    "end": 4356
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 4356,
    "end": 4357
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 4358,
    "end": 4364
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 4365,
    "end": 4368
  },
  {
    "type": "Identifier",
    "value": "fnParamArrowLetVariable",
    "start": 4369,
    "end": 4392
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 4393,
    "end": 4394
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4395,
    "end": 4396
  },
  {
    "type": "Identifier",
    "value": "cb",
    "start": 4396,
    "end": 4398
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 4399,
    "end": 4400
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4401,
    "end": 4402
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4402,
    "end": 4403
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 4404,
    "end": 4406
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 4407,
    "end": 4408
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4408,
    "end": 4409
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 4410,
    "end": 4412
  },
  {
    "type": "String",
    "value": "\"S\"",
    "start": 4413,
    "end": 4416
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4416,
    "end": 4417
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 4419,
    "end": 4425
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 4426,
    "end": 4429
  },
  {
    "type": "Identifier",
    "value": "fnParamExpressionVarVariable",
    "start": 4430,
    "end": 4458
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 4459,
    "end": 4460
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 4461,
    "end": 4469
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 4470,
    "end": 4473
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4473,
    "end": 4474
  },
  {
    "type": "Identifier",
    "value": "cb",
    "start": 4474,
    "end": 4476
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 4477,
    "end": 4478
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 4479,
    "end": 4487
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4487,
    "end": 4488
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4488,
    "end": 4489
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 4489,
    "end": 4490
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 4491,
    "end": 4492
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4492,
    "end": 4493
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 4494,
    "end": 4495
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 4496,
    "end": 4502
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 4503,
    "end": 4504
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4504,
    "end": 4505
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 4505,
    "end": 4506
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 4507,
    "end": 4513
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 4514,
    "end": 4517
  },
  {
    "type": "Identifier",
    "value": "fnParamArrowVarVariable",
    "start": 4518,
    "end": 4541
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 4542,
    "end": 4543
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4544,
    "end": 4545
  },
  {
    "type": "Identifier",
    "value": "cb",
    "start": 4545,
    "end": 4547
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 4548,
    "end": 4549
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4550,
    "end": 4551
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4551,
    "end": 4552
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 4553,
    "end": 4555
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 4556,
    "end": 4557
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4557,
    "end": 4558
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 4559,
    "end": 4561
  },
  {
    "type": "String",
    "value": "\"S\"",
    "start": 4562,
    "end": 4565
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4565,
    "end": 4566
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 4623,
    "end": 4629
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 4630,
    "end": 4635
  },
  {
    "type": "Identifier",
    "value": "fnParamExpressionConstVariableOwnerHasReturnType",
    "start": 4636,
    "end": 4684
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 4685,
    "end": 4686
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 4687,
    "end": 4695
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 4696,
    "end": 4699
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4699,
    "end": 4700
  },
  {
    "type": "Identifier",
    "value": "cb",
    "start": 4700,
    "end": 4702
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 4703,
    "end": 4704
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 4705,
    "end": 4713
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4713,
    "end": 4714
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4714,
    "end": 4715
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 4715,
    "end": 4716
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 4717,
    "end": 4718
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4718,
    "end": 4719
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4719,
    "end": 4720
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 4721,
    "end": 4727
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 4728,
    "end": 4729
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 4730,
    "end": 4736
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 4737,
    "end": 4738
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4738,
    "end": 4739
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 4739,
    "end": 4740
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 4741,
    "end": 4747
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 4748,
    "end": 4753
  },
  {
    "type": "Identifier",
    "value": "fnParamArrowConstVariableOwnerHasReturnType",
    "start": 4754,
    "end": 4797
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 4798,
    "end": 4799
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4800,
    "end": 4801
  },
  {
    "type": "Identifier",
    "value": "cb",
    "start": 4801,
    "end": 4803
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 4804,
    "end": 4805
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 4806,
    "end": 4814
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4814,
    "end": 4815
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4815,
    "end": 4816
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 4816,
    "end": 4817
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 4818,
    "end": 4819
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4819,
    "end": 4820
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4820,
    "end": 4821
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 4822,
    "end": 4828
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 4829,
    "end": 4831
  },
  {
    "type": "String",
    "value": "\"S\"",
    "start": 4832,
    "end": 4835
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4835,
    "end": 4836
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 4838,
    "end": 4844
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 4845,
    "end": 4848
  },
  {
    "type": "Identifier",
    "value": "fnParamExpressionLetVariableOwnerHasReturnType",
    "start": 4849,
    "end": 4895
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 4896,
    "end": 4897
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 4898,
    "end": 4906
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 4907,
    "end": 4910
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4910,
    "end": 4911
  },
  {
    "type": "Identifier",
    "value": "cb",
    "start": 4911,
    "end": 4913
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 4914,
    "end": 4915
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 4916,
    "end": 4924
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4924,
    "end": 4925
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4925,
    "end": 4926
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 4926,
    "end": 4927
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 4928,
    "end": 4929
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4929,
    "end": 4930
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4930,
    "end": 4931
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 4932,
    "end": 4938
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 4939,
    "end": 4940
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 4941,
    "end": 4947
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 4948,
    "end": 4949
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4949,
    "end": 4950
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 4950,
    "end": 4951
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 4952,
    "end": 4958
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 4959,
    "end": 4962
  },
  {
    "type": "Identifier",
    "value": "fnParamArrowLetVariableOwnerHasReturnType",
    "start": 4963,
    "end": 5004
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 5005,
    "end": 5006
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 5007,
    "end": 5008
  },
  {
    "type": "Identifier",
    "value": "cb",
    "start": 5008,
    "end": 5010
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 5011,
    "end": 5012
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 5013,
    "end": 5021
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 5021,
    "end": 5022
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 5022,
    "end": 5023
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 5023,
    "end": 5024
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 5025,
    "end": 5026
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 5026,
    "end": 5027
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 5027,
    "end": 5028
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 5029,
    "end": 5035
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 5036,
    "end": 5038
  },
  {
    "type": "String",
    "value": "\"S\"",
    "start": 5039,
    "end": 5042
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 5042,
    "end": 5043
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 5045,
    "end": 5051
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 5052,
    "end": 5055
  },
  {
    "type": "Identifier",
    "value": "fnParamExpressionVarVariableOwnerHasReturnType",
    "start": 5056,
    "end": 5102
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 5103,
    "end": 5104
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 5105,
    "end": 5113
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 5114,
    "end": 5117
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 5117,
    "end": 5118
  },
  {
    "type": "Identifier",
    "value": "cb",
    "start": 5118,
    "end": 5120
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 5121,
    "end": 5122
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 5123,
    "end": 5131
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 5131,
    "end": 5132
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 5132,
    "end": 5133
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 5133,
    "end": 5134
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 5135,
    "end": 5136
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 5136,
    "end": 5137
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 5137,
    "end": 5138
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 5139,
    "end": 5145
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 5146,
    "end": 5147
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 5148,
    "end": 5154
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 5155,
    "end": 5156
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 5156,
    "end": 5157
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 5157,
    "end": 5158
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 5159,
    "end": 5165
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 5166,
    "end": 5169
  },
  {
    "type": "Identifier",
    "value": "fnParamArrowVarVariableOwnerHasReturnType",
    "start": 5170,
    "end": 5211
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 5212,
    "end": 5213
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 5214,
    "end": 5215
  },
  {
    "type": "Identifier",
    "value": "cb",
    "start": 5215,
    "end": 5217
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 5218,
    "end": 5219
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 5220,
    "end": 5228
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 5228,
    "end": 5229
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 5229,
    "end": 5230
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 5230,
    "end": 5231
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 5232,
    "end": 5233
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 5233,
    "end": 5234
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 5234,
    "end": 5235
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 5236,
    "end": 5242
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 5243,
    "end": 5245
  },
  {
    "type": "String",
    "value": "\"S\"",
    "start": 5246,
    "end": 5249
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 5249,
    "end": 5250
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 5265,
    "end": 5271
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 5272,
    "end": 5277
  },
  {
    "type": "Identifier",
    "value": "fnParamExpressionConstVariableOk",
    "start": 5278,
    "end": 5310
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 5311,
    "end": 5312
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 5313,
    "end": 5321
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 5322,
    "end": 5325
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 5325,
    "end": 5326
  },
  {
    "type": "Identifier",
    "value": "cb",
    "start": 5326,
    "end": 5328
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 5329,
    "end": 5330
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 5331,
    "end": 5339
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 5339,
    "end": 5340
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 5340,
    "end": 5341
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 5341,
    "end": 5342
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 5343,
    "end": 5347
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 5347,
    "end": 5348
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 5349,
    "end": 5350
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 5350,
    "end": 5351
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 5351,
    "end": 5352
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 5353,
    "end": 5359
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 5360,
    "end": 5361
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 5362,
    "end": 5368
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 5369,
    "end": 5370
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 5370,
    "end": 5371
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 5371,
    "end": 5372
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 5373,
    "end": 5379
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 5380,
    "end": 5385
  },
  {
    "type": "Identifier",
    "value": "fnParamArrowConstVariableOk",
    "start": 5386,
    "end": 5413
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 5414,
    "end": 5415
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 5416,
    "end": 5417
  },
  {
    "type": "Identifier",
    "value": "cb",
    "start": 5417,
    "end": 5419
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 5420,
    "end": 5421
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 5422,
    "end": 5430
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 5430,
    "end": 5431
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 5431,
    "end": 5432
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 5432,
    "end": 5433
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 5434,
    "end": 5438
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 5438,
    "end": 5439
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 5440,
    "end": 5441
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 5441,
    "end": 5442
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 5442,
    "end": 5443
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 5444,
    "end": 5450
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 5451,
    "end": 5453
  },
  {
    "type": "String",
    "value": "\"S\"",
    "start": 5454,
    "end": 5457
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 5457,
    "end": 5458
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 5460,
    "end": 5466
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 5467,
    "end": 5470
  },
  {
    "type": "Identifier",
    "value": "fnParamExpressionLetVariableOk",
    "start": 5471,
    "end": 5501
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 5502,
    "end": 5503
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 5504,
    "end": 5512
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 5513,
    "end": 5516
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 5516,
    "end": 5517
  },
  {
    "type": "Identifier",
    "value": "cb",
    "start": 5517,
    "end": 5519
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 5520,
    "end": 5521
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 5522,
    "end": 5530
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 5530,
    "end": 5531
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 5531,
    "end": 5532
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 5532,
    "end": 5533
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 5534,
    "end": 5538
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 5538,
    "end": 5539
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 5540,
    "end": 5541
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 5541,
    "end": 5542
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 5542,
    "end": 5543
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 5544,
    "end": 5550
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 5551,
    "end": 5552
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 5553,
    "end": 5559
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 5560,
    "end": 5561
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 5561,
    "end": 5562
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 5562,
    "end": 5563
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 5564,
    "end": 5570
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 5571,
    "end": 5574
  },
  {
    "type": "Identifier",
    "value": "fnParamArrowLetVariableOk",
    "start": 5575,
    "end": 5600
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 5601,
    "end": 5602
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 5603,
    "end": 5604
  },
  {
    "type": "Identifier",
    "value": "cb",
    "start": 5604,
    "end": 5606
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 5607,
    "end": 5608
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 5609,
    "end": 5617
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 5617,
    "end": 5618
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 5618,
    "end": 5619
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 5619,
    "end": 5620
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 5621,
    "end": 5625
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 5625,
    "end": 5626
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 5627,
    "end": 5628
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 5628,
    "end": 5629
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 5629,
    "end": 5630
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 5631,
    "end": 5637
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 5638,
    "end": 5640
  },
  {
    "type": "String",
    "value": "\"S\"",
    "start": 5641,
    "end": 5644
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 5644,
    "end": 5645
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 5647,
    "end": 5653
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 5654,
    "end": 5657
  },
  {
    "type": "Identifier",
    "value": "fnParamExpressionVarVariableOk",
    "start": 5658,
    "end": 5688
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 5689,
    "end": 5690
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 5691,
    "end": 5699
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 5700,
    "end": 5703
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 5703,
    "end": 5704
  },
  {
    "type": "Identifier",
    "value": "cb",
    "start": 5704,
    "end": 5706
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 5707,
    "end": 5708
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 5709,
    "end": 5717
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 5717,
    "end": 5718
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 5718,
    "end": 5719
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 5719,
    "end": 5720
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 5721,
    "end": 5725
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 5725,
    "end": 5726
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 5727,
    "end": 5728
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 5728,
    "end": 5729
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 5729,
    "end": 5730
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 5731,
    "end": 5737
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 5738,
    "end": 5739
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 5740,
    "end": 5746
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 5747,
    "end": 5748
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 5748,
    "end": 5749
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 5749,
    "end": 5750
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 5751,
    "end": 5757
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 5758,
    "end": 5761
  },
  {
    "type": "Identifier",
    "value": "fnParamArrowVarVariableOk",
    "start": 5762,
    "end": 5787
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 5788,
    "end": 5789
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 5790,
    "end": 5791
  },
  {
    "type": "Identifier",
    "value": "cb",
    "start": 5791,
    "end": 5793
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 5794,
    "end": 5795
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 5796,
    "end": 5804
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 5804,
    "end": 5805
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 5805,
    "end": 5806
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 5806,
    "end": 5807
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 5808,
    "end": 5812
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 5812,
    "end": 5813
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 5814,
    "end": 5815
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 5815,
    "end": 5816
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 5816,
    "end": 5817
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 5818,
    "end": 5824
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 5825,
    "end": 5827
  },
  {
    "type": "String",
    "value": "\"S\"",
    "start": 5828,
    "end": 5831
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 5831,
    "end": 5832
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 5834,
    "end": 5840
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 5841,
    "end": 5846
  },
  {
    "type": "Identifier",
    "value": "fnParamExpressionConstVariableInternal",
    "start": 5847,
    "end": 5885
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 5886,
    "end": 5887
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 5888,
    "end": 5896
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 5897,
    "end": 5900
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 5900,
    "end": 5901
  },
  {
    "type": "Identifier",
    "value": "cb",
    "start": 5901,
    "end": 5903
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 5904,
    "end": 5905
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 5906,
    "end": 5914
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 5914,
    "end": 5915
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 5915,
    "end": 5916
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 5916,
    "end": 5917
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 5918,
    "end": 5919
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 5919,
    "end": 5920
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 5921,
    "end": 5922
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 5923,
    "end": 5929
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 5930,
    "end": 5931
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 5931,
    "end": 5932
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 5932,
    "end": 5933
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 5934,
    "end": 5940
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 5941,
    "end": 5946
  },
  {
    "type": "Identifier",
    "value": "fnParamArrowConstVariableInternal",
    "start": 5947,
    "end": 5980
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 5981,
    "end": 5982
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 5983,
    "end": 5984
  },
  {
    "type": "Identifier",
    "value": "cb",
    "start": 5984,
    "end": 5986
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 5987,
    "end": 5988
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 5989,
    "end": 5990
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 5990,
    "end": 5991
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 5992,
    "end": 5994
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 5995,
    "end": 5996
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 5996,
    "end": 5997
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 5998,
    "end": 6000
  },
  {
    "type": "String",
    "value": "\"S\"",
    "start": 6001,
    "end": 6004
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 6004,
    "end": 6005
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 6007,
    "end": 6013
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 6014,
    "end": 6017
  },
  {
    "type": "Identifier",
    "value": "fnParamExpressionLetVariableInternal",
    "start": 6018,
    "end": 6054
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 6055,
    "end": 6056
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 6057,
    "end": 6065
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 6066,
    "end": 6069
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 6069,
    "end": 6070
  },
  {
    "type": "Identifier",
    "value": "cb",
    "start": 6070,
    "end": 6072
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 6073,
    "end": 6074
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 6075,
    "end": 6083
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 6083,
    "end": 6084
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 6084,
    "end": 6085
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 6085,
    "end": 6086
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 6087,
    "end": 6088
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 6088,
    "end": 6089
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 6090,
    "end": 6091
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 6092,
    "end": 6098
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 6099,
    "end": 6100
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 6100,
    "end": 6101
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 6101,
    "end": 6102
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 6103,
    "end": 6109
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 6110,
    "end": 6113
  },
  {
    "type": "Identifier",
    "value": "fnParamArrowLetVariableInternal",
    "start": 6114,
    "end": 6145
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 6146,
    "end": 6147
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 6148,
    "end": 6149
  },
  {
    "type": "Identifier",
    "value": "cb",
    "start": 6149,
    "end": 6151
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 6152,
    "end": 6153
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 6154,
    "end": 6155
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 6155,
    "end": 6156
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 6157,
    "end": 6159
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 6160,
    "end": 6161
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 6161,
    "end": 6162
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 6163,
    "end": 6165
  },
  {
    "type": "String",
    "value": "\"S\"",
    "start": 6166,
    "end": 6169
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 6169,
    "end": 6170
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 6172,
    "end": 6178
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 6179,
    "end": 6182
  },
  {
    "type": "Identifier",
    "value": "fnParamExpressionVarVariableInternal",
    "start": 6183,
    "end": 6219
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 6220,
    "end": 6221
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 6222,
    "end": 6230
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 6231,
    "end": 6234
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 6234,
    "end": 6235
  },
  {
    "type": "Identifier",
    "value": "cb",
    "start": 6235,
    "end": 6237
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 6238,
    "end": 6239
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 6240,
    "end": 6248
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 6248,
    "end": 6249
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 6249,
    "end": 6250
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 6250,
    "end": 6251
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 6252,
    "end": 6253
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 6253,
    "end": 6254
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 6255,
    "end": 6256
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 6257,
    "end": 6263
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 6264,
    "end": 6265
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 6265,
    "end": 6266
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 6266,
    "end": 6267
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 6268,
    "end": 6274
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 6275,
    "end": 6278
  },
  {
    "type": "Identifier",
    "value": "fnParamArrowVarVariableInternal",
    "start": 6279,
    "end": 6310
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 6311,
    "end": 6312
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 6313,
    "end": 6314
  },
  {
    "type": "Identifier",
    "value": "cb",
    "start": 6314,
    "end": 6316
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 6317,
    "end": 6318
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 6319,
    "end": 6320
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 6320,
    "end": 6321
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 6322,
    "end": 6324
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 6325,
    "end": 6326
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 6326,
    "end": 6327
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 6328,
    "end": 6330
  },
  {
    "type": "String",
    "value": "\"S\"",
    "start": 6331,
    "end": 6334
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 6334,
    "end": 6335
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 6360,
    "end": 6366
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 6367,
    "end": 6372
  },
  {
    "type": "Identifier",
    "value": "FnParamsExportedClass",
    "start": 6373,
    "end": 6394
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 6395,
    "end": 6396
  },
  {
    "type": "Identifier",
    "value": "fnExpression",
    "start": 6422,
    "end": 6434
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 6435,
    "end": 6436
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 6437,
    "end": 6445
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 6446,
    "end": 6449
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 6449,
    "end": 6450
  },
  {
    "type": "Identifier",
    "value": "cb",
    "start": 6450,
    "end": 6452
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 6453,
    "end": 6454
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 6455,
    "end": 6463
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 6463,
    "end": 6464
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 6464,
    "end": 6465
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 6465,
    "end": 6466
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 6467,
    "end": 6468
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 6468,
    "end": 6469
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 6470,
    "end": 6471
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 6472,
    "end": 6478
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 6479,
    "end": 6480
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 6480,
    "end": 6481
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 6482,
    "end": 6483
  },
  {
    "type": "Identifier",
    "value": "fnArrow",
    "start": 6488,
    "end": 6495
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 6496,
    "end": 6497
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 6498,
    "end": 6499
  },
  {
    "type": "Identifier",
    "value": "cb",
    "start": 6499,
    "end": 6501
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 6502,
    "end": 6503
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 6504,
    "end": 6512
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 6512,
    "end": 6513
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 6513,
    "end": 6514
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 6514,
    "end": 6515
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 6516,
    "end": 6517
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 6517,
    "end": 6518
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 6519,
    "end": 6521
  },
  {
    "type": "String",
    "value": "\"S\"",
    "start": 6522,
    "end": 6525
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 6525,
    "end": 6526
  },
  {
    "type": "Keyword",
    "value": "protected",
    "start": 6531,
    "end": 6540
  },
  {
    "type": "Identifier",
    "value": "fnExpressionProtected",
    "start": 6541,
    "end": 6562
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 6563,
    "end": 6564
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 6565,
    "end": 6573
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 6574,
    "end": 6577
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 6577,
    "end": 6578
  },
  {
    "type": "Identifier",
    "value": "cb",
    "start": 6578,
    "end": 6580
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 6581,
    "end": 6582
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 6583,
    "end": 6591
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 6591,
    "end": 6592
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 6592,
    "end": 6593
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 6593,
    "end": 6594
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 6595,
    "end": 6596
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 6596,
    "end": 6597
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 6598,
    "end": 6599
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 6600,
    "end": 6606
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 6607,
    "end": 6608
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 6608,
    "end": 6609
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 6610,
    "end": 6611
  },
  {
    "type": "Keyword",
    "value": "protected",
    "start": 6616,
    "end": 6625
  },
  {
    "type": "Identifier",
    "value": "fnArrowProtected",
    "start": 6626,
    "end": 6642
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 6643,
    "end": 6644
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 6645,
    "end": 6646
  },
  {
    "type": "Identifier",
    "value": "cb",
    "start": 6646,
    "end": 6648
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 6649,
    "end": 6650
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 6651,
    "end": 6659
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 6659,
    "end": 6660
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 6660,
    "end": 6661
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 6661,
    "end": 6662
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 6663,
    "end": 6664
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 6664,
    "end": 6665
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 6666,
    "end": 6668
  },
  {
    "type": "String",
    "value": "\"S\"",
    "start": 6669,
    "end": 6672
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 6672,
    "end": 6673
  },
  {
    "type": "Keyword",
    "value": "static",
    "start": 6679,
    "end": 6685
  },
  {
    "type": "Identifier",
    "value": "fnStaticExpression",
    "start": 6686,
    "end": 6704
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 6705,
    "end": 6706
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 6707,
    "end": 6715
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 6716,
    "end": 6719
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 6719,
    "end": 6720
  },
  {
    "type": "Identifier",
    "value": "cb",
    "start": 6720,
    "end": 6722
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 6723,
    "end": 6724
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 6725,
    "end": 6733
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 6733,
    "end": 6734
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 6734,
    "end": 6735
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 6735,
    "end": 6736
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 6737,
    "end": 6738
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 6738,
    "end": 6739
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 6740,
    "end": 6741
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 6742,
    "end": 6748
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 6749,
    "end": 6750
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 6750,
    "end": 6751
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 6752,
    "end": 6753
  },
  {
    "type": "Keyword",
    "value": "static",
    "start": 6758,
    "end": 6764
  },
  {
    "type": "Identifier",
    "value": "fnStaticArrow",
    "start": 6765,
    "end": 6778
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 6779,
    "end": 6780
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 6781,
    "end": 6782
  },
  {
    "type": "Identifier",
    "value": "cb",
    "start": 6782,
    "end": 6784
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 6785,
    "end": 6786
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 6787,
    "end": 6795
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 6795,
    "end": 6796
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 6796,
    "end": 6797
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 6797,
    "end": 6798
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 6799,
    "end": 6800
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 6800,
    "end": 6801
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 6802,
    "end": 6804
  },
  {
    "type": "String",
    "value": "\"S\"",
    "start": 6805,
    "end": 6808
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 6808,
    "end": 6809
  },
  {
    "type": "Keyword",
    "value": "protected",
    "start": 6814,
    "end": 6823
  },
  {
    "type": "Keyword",
    "value": "static",
    "start": 6824,
    "end": 6830
  },
  {
    "type": "Identifier",
    "value": "fnStaticExpressionProtected",
    "start": 6831,
    "end": 6858
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 6859,
    "end": 6860
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 6861,
    "end": 6869
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 6870,
    "end": 6873
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 6873,
    "end": 6874
  },
  {
    "type": "Identifier",
    "value": "cb",
    "start": 6874,
    "end": 6876
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 6877,
    "end": 6878
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 6879,
    "end": 6887
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 6887,
    "end": 6888
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 6888,
    "end": 6889
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 6889,
    "end": 6890
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 6891,
    "end": 6892
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 6892,
    "end": 6893
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 6894,
    "end": 6895
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 6896,
    "end": 6902
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 6903,
    "end": 6904
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 6904,
    "end": 6905
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 6906,
    "end": 6907
  },
  {
    "type": "Keyword",
    "value": "protected",
    "start": 6916,
    "end": 6925
  },
  {
    "type": "Keyword",
    "value": "static",
    "start": 6926,
    "end": 6932
  },
  {
    "type": "Identifier",
    "value": "fnStaticArrowProtected",
    "start": 6933,
    "end": 6955
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 6956,
    "end": 6957
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 6958,
    "end": 6959
  },
  {
    "type": "Identifier",
    "value": "cb",
    "start": 6959,
    "end": 6961
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 6962,
    "end": 6963
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 6964,
    "end": 6972
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 6972,
    "end": 6973
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 6973,
    "end": 6974
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 6974,
    "end": 6975
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 6976,
    "end": 6977
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 6977,
    "end": 6978
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 6979,
    "end": 6981
  },
  {
    "type": "String",
    "value": "\"S\"",
    "start": 6982,
    "end": 6985
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 6985,
    "end": 6986
  },
  {
    "type": "Identifier",
    "value": "fnExpressionMethodHasReturn",
    "start": 7024,
    "end": 7051
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 7052,
    "end": 7053
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 7054,
    "end": 7062
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 7063,
    "end": 7066
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 7066,
    "end": 7067
  },
  {
    "type": "Identifier",
    "value": "cb",
    "start": 7067,
    "end": 7069
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 7070,
    "end": 7071
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 7072,
    "end": 7080
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 7080,
    "end": 7081
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 7081,
    "end": 7082
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 7082,
    "end": 7083
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 7084,
    "end": 7085
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 7085,
    "end": 7086
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 7086,
    "end": 7087
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 7088,
    "end": 7094
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 7095,
    "end": 7096
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 7097,
    "end": 7103
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 7104,
    "end": 7105
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 7105,
    "end": 7106
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 7107,
    "end": 7108
  },
  {
    "type": "Identifier",
    "value": "fnArrowMethodHasReturn",
    "start": 7113,
    "end": 7135
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 7136,
    "end": 7137
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 7138,
    "end": 7139
  },
  {
    "type": "Identifier",
    "value": "cb",
    "start": 7139,
    "end": 7141
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 7142,
    "end": 7143
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 7144,
    "end": 7152
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 7152,
    "end": 7153
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 7153,
    "end": 7154
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 7154,
    "end": 7155
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 7156,
    "end": 7157
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 7157,
    "end": 7158
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 7158,
    "end": 7159
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 7160,
    "end": 7166
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 7167,
    "end": 7169
  },
  {
    "type": "String",
    "value": "\"S\"",
    "start": 7170,
    "end": 7173
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 7173,
    "end": 7174
  },
  {
    "type": "Keyword",
    "value": "protected",
    "start": 7179,
    "end": 7188
  },
  {
    "type": "Identifier",
    "value": "fnExpressionProtectedMethodHasReturn",
    "start": 7189,
    "end": 7225
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 7226,
    "end": 7227
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 7228,
    "end": 7236
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 7237,
    "end": 7240
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 7240,
    "end": 7241
  },
  {
    "type": "Identifier",
    "value": "cb",
    "start": 7241,
    "end": 7243
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 7244,
    "end": 7245
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 7246,
    "end": 7254
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 7254,
    "end": 7255
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 7255,
    "end": 7256
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 7256,
    "end": 7257
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 7258,
    "end": 7259
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 7259,
    "end": 7260
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 7260,
    "end": 7261
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 7262,
    "end": 7268
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 7269,
    "end": 7270
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 7271,
    "end": 7277
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 7278,
    "end": 7279
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 7279,
    "end": 7280
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 7281,
    "end": 7282
  },
  {
    "type": "Keyword",
    "value": "protected",
    "start": 7287,
    "end": 7296
  },
  {
    "type": "Identifier",
    "value": "fnArrowProtectedMethodHasReturn",
    "start": 7297,
    "end": 7328
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 7329,
    "end": 7330
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 7331,
    "end": 7332
  },
  {
    "type": "Identifier",
    "value": "cb",
    "start": 7332,
    "end": 7334
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 7335,
    "end": 7336
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 7337,
    "end": 7345
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 7345,
    "end": 7346
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 7346,
    "end": 7347
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 7347,
    "end": 7348
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 7349,
    "end": 7350
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 7350,
    "end": 7351
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 7351,
    "end": 7352
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 7353,
    "end": 7359
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 7360,
    "end": 7362
  },
  {
    "type": "String",
    "value": "\"S\"",
    "start": 7363,
    "end": 7366
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 7366,
    "end": 7367
  },
  {
    "type": "Keyword",
    "value": "static",
    "start": 7373,
    "end": 7379
  },
  {
    "type": "Identifier",
    "value": "fnStaticExpressionMethodHasReturn",
    "start": 7380,
    "end": 7413
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 7414,
    "end": 7415
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 7416,
    "end": 7424
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 7425,
    "end": 7428
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 7428,
    "end": 7429
  },
  {
    "type": "Identifier",
    "value": "cb",
    "start": 7429,
    "end": 7431
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 7432,
    "end": 7433
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 7434,
    "end": 7442
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 7442,
    "end": 7443
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 7443,
    "end": 7444
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 7444,
    "end": 7445
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 7446,
    "end": 7447
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 7447,
    "end": 7448
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 7448,
    "end": 7449
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 7450,
    "end": 7456
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 7457,
    "end": 7458
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 7459,
    "end": 7465
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 7466,
    "end": 7467
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 7467,
    "end": 7468
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 7469,
    "end": 7470
  },
  {
    "type": "Keyword",
    "value": "static",
    "start": 7475,
    "end": 7481
  },
  {
    "type": "Identifier",
    "value": "fnStaticArrowMethodHasReturn",
    "start": 7482,
    "end": 7510
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 7511,
    "end": 7512
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 7513,
    "end": 7514
  },
  {
    "type": "Identifier",
    "value": "cb",
    "start": 7514,
    "end": 7516
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 7517,
    "end": 7518
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 7519,
    "end": 7527
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 7527,
    "end": 7528
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 7528,
    "end": 7529
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 7529,
    "end": 7530
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 7531,
    "end": 7532
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 7532,
    "end": 7533
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 7533,
    "end": 7534
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 7535,
    "end": 7541
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 7542,
    "end": 7544
  },
  {
    "type": "String",
    "value": "\"S\"",
    "start": 7545,
    "end": 7548
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 7548,
    "end": 7549
  },
  {
    "type": "Keyword",
    "value": "protected",
    "start": 7554,
    "end": 7563
  },
  {
    "type": "Keyword",
    "value": "static",
    "start": 7564,
    "end": 7570
  },
  {
    "type": "Identifier",
    "value": "fnStaticExpressionProtectedMethodHasReturn",
    "start": 7571,
    "end": 7613
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 7614,
    "end": 7615
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 7616,
    "end": 7624
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 7625,
    "end": 7628
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 7628,
    "end": 7629
  },
  {
    "type": "Identifier",
    "value": "cb",
    "start": 7629,
    "end": 7631
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 7632,
    "end": 7633
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 7634,
    "end": 7642
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 7642,
    "end": 7643
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 7643,
    "end": 7644
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 7644,
    "end": 7645
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 7646,
    "end": 7647
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 7647,
    "end": 7648
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 7648,
    "end": 7649
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 7650,
    "end": 7656
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 7657,
    "end": 7658
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 7659,
    "end": 7665
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 7666,
    "end": 7667
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 7667,
    "end": 7668
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 7669,
    "end": 7670
  },
  {
    "type": "Keyword",
    "value": "protected",
    "start": 7679,
    "end": 7688
  },
  {
    "type": "Keyword",
    "value": "static",
    "start": 7689,
    "end": 7695
  },
  {
    "type": "Identifier",
    "value": "fnStaticArrowProtectedMethodHasReturn",
    "start": 7696,
    "end": 7733
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 7734,
    "end": 7735
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 7736,
    "end": 7737
  },
  {
    "type": "Identifier",
    "value": "cb",
    "start": 7737,
    "end": 7739
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 7740,
    "end": 7741
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 7742,
    "end": 7750
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 7750,
    "end": 7751
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 7751,
    "end": 7752
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 7752,
    "end": 7753
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 7754,
    "end": 7755
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 7755,
    "end": 7756
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 7756,
    "end": 7757
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 7758,
    "end": 7764
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 7765,
    "end": 7767
  },
  {
    "type": "String",
    "value": "\"S\"",
    "start": 7768,
    "end": 7771
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 7771,
    "end": 7772
  },
  {
    "type": "Identifier",
    "value": "fnExpressionOnlyOnParam",
    "start": 7819,
    "end": 7842
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 7843,
    "end": 7844
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 7845,
    "end": 7853
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 7854,
    "end": 7857
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 7857,
    "end": 7858
  },
  {
    "type": "Identifier",
    "value": "cb",
    "start": 7858,
    "end": 7860
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 7861,
    "end": 7862
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 7863,
    "end": 7871
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 7871,
    "end": 7872
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 7872,
    "end": 7873
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 7873,
    "end": 7874
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 7875,
    "end": 7879
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 7880,
    "end": 7881
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 7882,
    "end": 7883
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 7883,
    "end": 7884
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 7885,
    "end": 7886
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 7887,
    "end": 7893
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 7894,
    "end": 7895
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 7895,
    "end": 7896
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 7897,
    "end": 7898
  },
  {
    "type": "Identifier",
    "value": "fnArrowOnlyOnParam",
    "start": 7903,
    "end": 7921
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 7922,
    "end": 7923
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 7924,
    "end": 7925
  },
  {
    "type": "Identifier",
    "value": "cb",
    "start": 7925,
    "end": 7927
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 7928,
    "end": 7929
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 7930,
    "end": 7938
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 7938,
    "end": 7939
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 7939,
    "end": 7940
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 7940,
    "end": 7941
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 7942,
    "end": 7946
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 7947,
    "end": 7948
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 7949,
    "end": 7950
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 7950,
    "end": 7951
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 7952,
    "end": 7954
  },
  {
    "type": "String",
    "value": "\"S\"",
    "start": 7955,
    "end": 7958
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 7958,
    "end": 7959
  },
  {
    "type": "Keyword",
    "value": "protected",
    "start": 7964,
    "end": 7973
  },
  {
    "type": "Identifier",
    "value": "fnExpressionProtectedOnlyOnParam",
    "start": 7974,
    "end": 8006
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 8007,
    "end": 8008
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 8009,
    "end": 8017
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 8018,
    "end": 8021
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 8021,
    "end": 8022
  },
  {
    "type": "Identifier",
    "value": "cb",
    "start": 8022,
    "end": 8024
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 8025,
    "end": 8026
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 8027,
    "end": 8035
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 8035,
    "end": 8036
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 8036,
    "end": 8037
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 8037,
    "end": 8038
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 8039,
    "end": 8043
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 8044,
    "end": 8045
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 8046,
    "end": 8047
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 8047,
    "end": 8048
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 8049,
    "end": 8050
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 8051,
    "end": 8057
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 8058,
    "end": 8059
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 8059,
    "end": 8060
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 8061,
    "end": 8062
  },
  {
    "type": "Keyword",
    "value": "protected",
    "start": 8067,
    "end": 8076
  },
  {
    "type": "Identifier",
    "value": "fnArrowProtectedOnlyOnParam",
    "start": 8077,
    "end": 8104
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 8105,
    "end": 8106
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 8107,
    "end": 8108
  },
  {
    "type": "Identifier",
    "value": "cb",
    "start": 8108,
    "end": 8110
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 8111,
    "end": 8112
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 8113,
    "end": 8121
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 8121,
    "end": 8122
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 8122,
    "end": 8123
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 8123,
    "end": 8124
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 8125,
    "end": 8129
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 8130,
    "end": 8131
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 8132,
    "end": 8133
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 8133,
    "end": 8134
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 8135,
    "end": 8137
  },
  {
    "type": "String",
    "value": "\"S\"",
    "start": 8138,
    "end": 8141
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 8141,
    "end": 8142
  },
  {
    "type": "Keyword",
    "value": "static",
    "start": 8148,
    "end": 8154
  },
  {
    "type": "Identifier",
    "value": "fnStaticExpressionOnlyOnParam",
    "start": 8155,
    "end": 8184
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 8185,
    "end": 8186
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 8187,
    "end": 8195
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 8196,
    "end": 8199
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 8199,
    "end": 8200
  },
  {
    "type": "Identifier",
    "value": "cb",
    "start": 8200,
    "end": 8202
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 8203,
    "end": 8204
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 8205,
    "end": 8213
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 8213,
    "end": 8214
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 8214,
    "end": 8215
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 8215,
    "end": 8216
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 8217,
    "end": 8221
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 8221,
    "end": 8222
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 8223,
    "end": 8224
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 8224,
    "end": 8225
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 8226,
    "end": 8227
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 8228,
    "end": 8234
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 8235,
    "end": 8236
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 8236,
    "end": 8237
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 8238,
    "end": 8239
  },
  {
    "type": "Keyword",
    "value": "static",
    "start": 8244,
    "end": 8250
  },
  {
    "type": "Identifier",
    "value": "fnStaticArrowOnlyOnParam",
    "start": 8251,
    "end": 8275
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 8276,
    "end": 8277
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 8278,
    "end": 8279
  },
  {
    "type": "Identifier",
    "value": "cb",
    "start": 8279,
    "end": 8281
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 8282,
    "end": 8283
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 8284,
    "end": 8292
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 8292,
    "end": 8293
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 8293,
    "end": 8294
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 8294,
    "end": 8295
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 8296,
    "end": 8300
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 8300,
    "end": 8301
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 8302,
    "end": 8303
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 8303,
    "end": 8304
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 8305,
    "end": 8307
  },
  {
    "type": "String",
    "value": "\"S\"",
    "start": 8308,
    "end": 8311
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 8311,
    "end": 8312
  },
  {
    "type": "Keyword",
    "value": "protected",
    "start": 8317,
    "end": 8326
  },
  {
    "type": "Keyword",
    "value": "static",
    "start": 8327,
    "end": 8333
  },
  {
    "type": "Identifier",
    "value": "fnStaticExpressionProtectedOnlyOnParam",
    "start": 8334,
    "end": 8372
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 8373,
    "end": 8374
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 8375,
    "end": 8383
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 8384,
    "end": 8387
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 8387,
    "end": 8388
  },
  {
    "type": "Identifier",
    "value": "cb",
    "start": 8388,
    "end": 8390
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 8391,
    "end": 8392
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 8393,
    "end": 8401
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 8401,
    "end": 8402
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 8402,
    "end": 8403
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 8403,
    "end": 8404
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 8405,
    "end": 8409
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 8409,
    "end": 8410
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 8411,
    "end": 8412
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 8412,
    "end": 8413
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 8414,
    "end": 8415
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 8416,
    "end": 8422
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 8423,
    "end": 8424
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 8424,
    "end": 8425
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 8426,
    "end": 8427
  },
  {
    "type": "Keyword",
    "value": "protected",
    "start": 8436,
    "end": 8445
  },
  {
    "type": "Keyword",
    "value": "static",
    "start": 8446,
    "end": 8452
  },
  {
    "type": "Identifier",
    "value": "fnStaticArrowProtectedOnlyOnParam",
    "start": 8453,
    "end": 8486
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 8487,
    "end": 8488
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 8489,
    "end": 8490
  },
  {
    "type": "Identifier",
    "value": "cb",
    "start": 8490,
    "end": 8492
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 8493,
    "end": 8494
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 8495,
    "end": 8503
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 8503,
    "end": 8504
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 8504,
    "end": 8505
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 8505,
    "end": 8506
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 8507,
    "end": 8511
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 8511,
    "end": 8512
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 8513,
    "end": 8514
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 8514,
    "end": 8515
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 8516,
    "end": 8518
  },
  {
    "type": "String",
    "value": "\"S\"",
    "start": 8519,
    "end": 8522
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 8522,
    "end": 8523
  },
  {
    "type": "Identifier",
    "value": "fnExpressionOk",
    "start": 8560,
    "end": 8574
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 8575,
    "end": 8576
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 8577,
    "end": 8585
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 8586,
    "end": 8589
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 8589,
    "end": 8590
  },
  {
    "type": "Identifier",
    "value": "cb",
    "start": 8590,
    "end": 8592
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 8593,
    "end": 8594
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 8595,
    "end": 8603
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 8603,
    "end": 8604
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 8604,
    "end": 8605
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 8605,
    "end": 8606
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 8607,
    "end": 8611
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 8612,
    "end": 8613
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 8614,
    "end": 8615
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 8615,
    "end": 8616
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 8616,
    "end": 8617
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 8618,
    "end": 8624
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 8625,
    "end": 8626
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 8627,
    "end": 8633
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 8634,
    "end": 8635
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 8635,
    "end": 8636
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 8637,
    "end": 8638
  },
  {
    "type": "Identifier",
    "value": "fnArrowOK",
    "start": 8643,
    "end": 8652
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 8653,
    "end": 8654
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 8655,
    "end": 8656
  },
  {
    "type": "Identifier",
    "value": "cb",
    "start": 8656,
    "end": 8658
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 8659,
    "end": 8660
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 8661,
    "end": 8669
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 8669,
    "end": 8670
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 8670,
    "end": 8671
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 8671,
    "end": 8672
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 8673,
    "end": 8677
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 8678,
    "end": 8679
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 8680,
    "end": 8681
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 8681,
    "end": 8682
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 8682,
    "end": 8683
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 8684,
    "end": 8690
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 8691,
    "end": 8693
  },
  {
    "type": "String",
    "value": "\"S\"",
    "start": 8694,
    "end": 8697
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 8697,
    "end": 8698
  },
  {
    "type": "Keyword",
    "value": "protected",
    "start": 8703,
    "end": 8712
  },
  {
    "type": "Identifier",
    "value": "fnExpressionProtectedOk",
    "start": 8713,
    "end": 8736
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 8737,
    "end": 8738
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 8739,
    "end": 8747
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 8748,
    "end": 8751
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 8751,
    "end": 8752
  },
  {
    "type": "Identifier",
    "value": "cb",
    "start": 8752,
    "end": 8754
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 8755,
    "end": 8756
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 8757,
    "end": 8765
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 8765,
    "end": 8766
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 8766,
    "end": 8767
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 8767,
    "end": 8768
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 8769,
    "end": 8773
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 8774,
    "end": 8775
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 8776,
    "end": 8777
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 8777,
    "end": 8778
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 8778,
    "end": 8779
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 8780,
    "end": 8786
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 8787,
    "end": 8788
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 8789,
    "end": 8795
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 8796,
    "end": 8797
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 8797,
    "end": 8798
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 8799,
    "end": 8800
  },
  {
    "type": "Keyword",
    "value": "protected",
    "start": 8805,
    "end": 8814
  },
  {
    "type": "Identifier",
    "value": "fnArrowProtectedOK",
    "start": 8815,
    "end": 8833
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 8834,
    "end": 8835
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 8836,
    "end": 8837
  },
  {
    "type": "Identifier",
    "value": "cb",
    "start": 8837,
    "end": 8839
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 8840,
    "end": 8841
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 8842,
    "end": 8850
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 8850,
    "end": 8851
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 8851,
    "end": 8852
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 8852,
    "end": 8853
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 8854,
    "end": 8858
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 8859,
    "end": 8860
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 8861,
    "end": 8862
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 8862,
    "end": 8863
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 8863,
    "end": 8864
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 8865,
    "end": 8871
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 8872,
    "end": 8874
  },
  {
    "type": "String",
    "value": "\"S\"",
    "start": 8875,
    "end": 8878
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 8878,
    "end": 8879
  },
  {
    "type": "Keyword",
    "value": "static",
    "start": 8885,
    "end": 8891
  },
  {
    "type": "Identifier",
    "value": "fnStaticExpressionOk",
    "start": 8892,
    "end": 8912
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 8913,
    "end": 8914
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 8915,
    "end": 8923
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 8924,
    "end": 8927
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 8927,
    "end": 8928
  },
  {
    "type": "Identifier",
    "value": "cb",
    "start": 8928,
    "end": 8930
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 8931,
    "end": 8932
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 8933,
    "end": 8941
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 8941,
    "end": 8942
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 8942,
    "end": 8943
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 8943,
    "end": 8944
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 8945,
    "end": 8949
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 8949,
    "end": 8950
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 8951,
    "end": 8952
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 8952,
    "end": 8953
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 8953,
    "end": 8954
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 8955,
    "end": 8961
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 8962,
    "end": 8963
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 8964,
    "end": 8970
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 8971,
    "end": 8972
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 8972,
    "end": 8973
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 8974,
    "end": 8975
  },
  {
    "type": "Keyword",
    "value": "static",
    "start": 8980,
    "end": 8986
  },
  {
    "type": "Identifier",
    "value": "fnStaticArrowOk",
    "start": 8987,
    "end": 9002
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 9003,
    "end": 9004
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 9005,
    "end": 9006
  },
  {
    "type": "Identifier",
    "value": "cb",
    "start": 9006,
    "end": 9008
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 9009,
    "end": 9010
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 9011,
    "end": 9019
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 9019,
    "end": 9020
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 9020,
    "end": 9021
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 9021,
    "end": 9022
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 9023,
    "end": 9027
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 9027,
    "end": 9028
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 9029,
    "end": 9030
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 9030,
    "end": 9031
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 9031,
    "end": 9032
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 9033,
    "end": 9039
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 9040,
    "end": 9042
  },
  {
    "type": "String",
    "value": "\"S\"",
    "start": 9043,
    "end": 9046
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 9046,
    "end": 9047
  },
  {
    "type": "Keyword",
    "value": "protected",
    "start": 9052,
    "end": 9061
  },
  {
    "type": "Keyword",
    "value": "static",
    "start": 9062,
    "end": 9068
  },
  {
    "type": "Identifier",
    "value": "fnStaticExpressionProtectedOk",
    "start": 9069,
    "end": 9098
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 9099,
    "end": 9100
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 9101,
    "end": 9109
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 9110,
    "end": 9113
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 9113,
    "end": 9114
  },
  {
    "type": "Identifier",
    "value": "cb",
    "start": 9114,
    "end": 9116
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 9117,
    "end": 9118
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 9119,
    "end": 9127
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 9127,
    "end": 9128
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 9128,
    "end": 9129
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 9129,
    "end": 9130
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 9131,
    "end": 9135
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 9135,
    "end": 9136
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 9137,
    "end": 9138
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 9138,
    "end": 9139
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 9139,
    "end": 9140
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 9141,
    "end": 9147
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 9148,
    "end": 9149
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 9150,
    "end": 9156
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 9157,
    "end": 9158
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 9158,
    "end": 9159
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 9160,
    "end": 9161
  },
  {
    "type": "Keyword",
    "value": "protected",
    "start": 9170,
    "end": 9179
  },
  {
    "type": "Keyword",
    "value": "static",
    "start": 9180,
    "end": 9186
  },
  {
    "type": "Identifier",
    "value": "fnStaticArrowProtectedOk",
    "start": 9187,
    "end": 9211
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 9212,
    "end": 9213
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 9214,
    "end": 9215
  },
  {
    "type": "Identifier",
    "value": "cb",
    "start": 9215,
    "end": 9217
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 9218,
    "end": 9219
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 9220,
    "end": 9228
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 9228,
    "end": 9229
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 9229,
    "end": 9230
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 9230,
    "end": 9231
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 9232,
    "end": 9236
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 9236,
    "end": 9237
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 9238,
    "end": 9239
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 9239,
    "end": 9240
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 9240,
    "end": 9241
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 9242,
    "end": 9248
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 9249,
    "end": 9251
  },
  {
    "type": "String",
    "value": "\"S\"",
    "start": 9252,
    "end": 9255
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 9255,
    "end": 9256
  },
  {
    "type": "Keyword",
    "value": "private",
    "start": 9304,
    "end": 9311
  },
  {
    "type": "Identifier",
    "value": "fnExpressionPrivate",
    "start": 9312,
    "end": 9331
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 9332,
    "end": 9333
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 9334,
    "end": 9342
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 9343,
    "end": 9346
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 9346,
    "end": 9347
  },
  {
    "type": "Identifier",
    "value": "cb",
    "start": 9347,
    "end": 9349
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 9350,
    "end": 9351
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 9352,
    "end": 9360
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 9360,
    "end": 9361
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 9361,
    "end": 9362
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 9362,
    "end": 9363
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 9364,
    "end": 9365
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 9365,
    "end": 9366
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 9367,
    "end": 9368
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 9369,
    "end": 9375
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 9376,
    "end": 9377
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 9377,
    "end": 9378
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 9379,
    "end": 9380
  },
  {
    "type": "Keyword",
    "value": "private",
    "start": 9385,
    "end": 9392
  },
  {
    "type": "Identifier",
    "value": "fnArrowPrivate",
    "start": 9393,
    "end": 9407
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 9408,
    "end": 9409
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 9410,
    "end": 9411
  },
  {
    "type": "Identifier",
    "value": "cb",
    "start": 9411,
    "end": 9413
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 9414,
    "end": 9415
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 9416,
    "end": 9424
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 9424,
    "end": 9425
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 9425,
    "end": 9426
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 9426,
    "end": 9427
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 9428,
    "end": 9429
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 9429,
    "end": 9430
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 9431,
    "end": 9433
  },
  {
    "type": "String",
    "value": "\"S\"",
    "start": 9434,
    "end": 9437
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 9437,
    "end": 9438
  },
  {
    "type": "PrivateIdentifier",
    "value": "fnArrow",
    "start": 9443,
    "end": 9451
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 9452,
    "end": 9453
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 9454,
    "end": 9455
  },
  {
    "type": "Identifier",
    "value": "cb",
    "start": 9455,
    "end": 9457
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 9458,
    "end": 9459
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 9460,
    "end": 9468
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 9468,
    "end": 9469
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 9469,
    "end": 9470
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 9470,
    "end": 9471
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 9472,
    "end": 9473
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 9473,
    "end": 9474
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 9475,
    "end": 9477
  },
  {
    "type": "String",
    "value": "\"S\"",
    "start": 9478,
    "end": 9481
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 9481,
    "end": 9482
  },
  {
    "type": "PrivateIdentifier",
    "value": "fnExpression",
    "start": 9487,
    "end": 9500
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 9501,
    "end": 9502
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 9503,
    "end": 9511
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 9512,
    "end": 9515
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 9515,
    "end": 9516
  },
  {
    "type": "Identifier",
    "value": "cb",
    "start": 9516,
    "end": 9518
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 9519,
    "end": 9520
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 9521,
    "end": 9529
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 9529,
    "end": 9530
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 9530,
    "end": 9531
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 9531,
    "end": 9532
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 9533,
    "end": 9534
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 9534,
    "end": 9535
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 9536,
    "end": 9537
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 9538,
    "end": 9544
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 9545,
    "end": 9546
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 9546,
    "end": 9547
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 9547,
    "end": 9548
  },
  {
    "type": "Keyword",
    "value": "private",
    "start": 9553,
    "end": 9560
  },
  {
    "type": "Keyword",
    "value": "static",
    "start": 9561,
    "end": 9567
  },
  {
    "type": "Identifier",
    "value": "fnStaticExpressionPrivate",
    "start": 9568,
    "end": 9593
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 9594,
    "end": 9595
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 9596,
    "end": 9604
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 9605,
    "end": 9608
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 9608,
    "end": 9609
  },
  {
    "type": "Identifier",
    "value": "cb",
    "start": 9609,
    "end": 9611
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 9612,
    "end": 9613
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 9614,
    "end": 9622
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 9622,
    "end": 9623
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 9623,
    "end": 9624
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 9624,
    "end": 9625
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 9626,
    "end": 9627
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 9627,
    "end": 9628
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 9629,
    "end": 9630
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 9631,
    "end": 9637
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 9638,
    "end": 9639
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 9639,
    "end": 9640
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 9641,
    "end": 9642
  },
  {
    "type": "Keyword",
    "value": "private",
    "start": 9647,
    "end": 9654
  },
  {
    "type": "Keyword",
    "value": "static",
    "start": 9655,
    "end": 9661
  },
  {
    "type": "Identifier",
    "value": "fnStaticArrowPrivate",
    "start": 9662,
    "end": 9682
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 9683,
    "end": 9684
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 9685,
    "end": 9686
  },
  {
    "type": "Identifier",
    "value": "cb",
    "start": 9686,
    "end": 9688
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 9689,
    "end": 9690
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 9691,
    "end": 9699
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 9699,
    "end": 9700
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 9700,
    "end": 9701
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 9701,
    "end": 9702
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 9703,
    "end": 9704
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 9704,
    "end": 9705
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 9706,
    "end": 9708
  },
  {
    "type": "String",
    "value": "\"S\"",
    "start": 9709,
    "end": 9712
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 9712,
    "end": 9713
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 9714,
    "end": 9715
  }
]
```
