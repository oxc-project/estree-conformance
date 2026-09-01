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
            "name": "x",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 7,
                "end": 10
              },
              "start": 5,
              "end": 10
            },
            "start": 4,
            "end": 10
          },
          "init": null,
          "definite": false,
          "start": 4,
          "end": 10
        }
      ],
      "declare": false,
      "start": 0,
      "end": 11
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
            "name": "a1",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 159,
                "end": 165
              },
              "start": 157,
              "end": 165
            },
            "start": 155,
            "end": 165
          },
          "init": null,
          "definite": false,
          "start": 155,
          "end": 165
        }
      ],
      "declare": true,
      "start": 143,
      "end": 166
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
            "name": "a2",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 183,
                "end": 189
              },
              "start": 181,
              "end": 189
            },
            "start": 179,
            "end": 189
          },
          "init": null,
          "definite": false,
          "start": 179,
          "end": 189
        }
      ],
      "declare": true,
      "start": 167,
      "end": 190
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
            "name": "a3",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSUnionType",
                "types": [
                  {
                    "type": "TSStringKeyword",
                    "start": 207,
                    "end": 213
                  },
                  {
                    "type": "TSNumberKeyword",
                    "start": 216,
                    "end": 222
                  },
                  {
                    "type": "TSSymbolKeyword",
                    "start": 225,
                    "end": 231
                  }
                ],
                "start": 207,
                "end": 231
              },
              "start": 205,
              "end": 231
            },
            "start": 203,
            "end": 231
          },
          "init": null,
          "definite": false,
          "start": 203,
          "end": 231
        }
      ],
      "declare": true,
      "start": 191,
      "end": 232
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
            "name": "a4",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 249,
                "end": 252
              },
              "start": 247,
              "end": 252
            },
            "start": 245,
            "end": 252
          },
          "init": null,
          "definite": false,
          "start": 245,
          "end": 252
        }
      ],
      "declare": true,
      "start": 233,
      "end": 253
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
            "name": "ra1",
            "optional": false,
            "typeAnnotation": null,
            "start": 259,
            "end": 262
          },
          "init": {
            "type": "BinaryExpression",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 265,
              "end": 266
            },
            "operator": "in",
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 270,
              "end": 271
            },
            "start": 265,
            "end": 271
          },
          "definite": false,
          "start": 259,
          "end": 271
        }
      ],
      "declare": false,
      "start": 255,
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
            "name": "ra2",
            "optional": false,
            "typeAnnotation": null,
            "start": 277,
            "end": 280
          },
          "init": {
            "type": "BinaryExpression",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "a1",
              "optional": false,
              "typeAnnotation": null,
              "start": 283,
              "end": 285
            },
            "operator": "in",
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 289,
              "end": 290
            },
            "start": 283,
            "end": 290
          },
          "definite": false,
          "start": 277,
          "end": 290
        }
      ],
      "declare": false,
      "start": 273,
      "end": 291
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
            "name": "ra3",
            "optional": false,
            "typeAnnotation": null,
            "start": 296,
            "end": 299
          },
          "init": {
            "type": "BinaryExpression",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "a2",
              "optional": false,
              "typeAnnotation": null,
              "start": 302,
              "end": 304
            },
            "operator": "in",
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 308,
              "end": 309
            },
            "start": 302,
            "end": 309
          },
          "definite": false,
          "start": 296,
          "end": 309
        }
      ],
      "declare": false,
      "start": 292,
      "end": 310
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
            "name": "ra4",
            "optional": false,
            "typeAnnotation": null,
            "start": 315,
            "end": 318
          },
          "init": {
            "type": "BinaryExpression",
            "left": {
              "type": "Literal",
              "value": "",
              "raw": "''",
              "start": 321,
              "end": 323
            },
            "operator": "in",
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 327,
              "end": 328
            },
            "start": 321,
            "end": 328
          },
          "definite": false,
          "start": 315,
          "end": 328
        }
      ],
      "declare": false,
      "start": 311,
      "end": 329
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
            "name": "ra5",
            "optional": false,
            "typeAnnotation": null,
            "start": 334,
            "end": 337
          },
          "init": {
            "type": "BinaryExpression",
            "left": {
              "type": "Literal",
              "value": 0,
              "raw": "0",
              "start": 340,
              "end": 341
            },
            "operator": "in",
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 345,
              "end": 346
            },
            "start": 340,
            "end": 346
          },
          "definite": false,
          "start": 334,
          "end": 346
        }
      ],
      "declare": false,
      "start": 330,
      "end": 347
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
            "name": "ra6",
            "optional": false,
            "typeAnnotation": null,
            "start": 352,
            "end": 355
          },
          "init": {
            "type": "BinaryExpression",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "a3",
              "optional": false,
              "typeAnnotation": null,
              "start": 358,
              "end": 360
            },
            "operator": "in",
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 364,
              "end": 365
            },
            "start": 358,
            "end": 365
          },
          "definite": false,
          "start": 352,
          "end": 365
        }
      ],
      "declare": false,
      "start": 348,
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
            "name": "ra7",
            "optional": false,
            "typeAnnotation": null,
            "start": 371,
            "end": 374
          },
          "init": {
            "type": "BinaryExpression",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "a4",
              "optional": false,
              "typeAnnotation": null,
              "start": 377,
              "end": 379
            },
            "operator": "in",
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 383,
              "end": 384
            },
            "start": 377,
            "end": 384
          },
          "definite": false,
          "start": 371,
          "end": 384
        }
      ],
      "declare": false,
      "start": 367,
      "end": 385
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
            "name": "b1",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "members": [],
                "start": 520,
                "end": 522
              },
              "start": 518,
              "end": 522
            },
            "start": 516,
            "end": 522
          },
          "init": null,
          "definite": false,
          "start": 516,
          "end": 522
        }
      ],
      "declare": true,
      "start": 504,
      "end": 523
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
            "name": "rb1",
            "optional": false,
            "typeAnnotation": null,
            "start": 529,
            "end": 532
          },
          "init": {
            "type": "BinaryExpression",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 535,
              "end": 536
            },
            "operator": "in",
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "b1",
              "optional": false,
              "typeAnnotation": null,
              "start": 540,
              "end": 542
            },
            "start": 535,
            "end": 542
          },
          "definite": false,
          "start": 529,
          "end": 542
        }
      ],
      "declare": false,
      "start": 525,
      "end": 543
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
            "name": "rb2",
            "optional": false,
            "typeAnnotation": null,
            "start": 548,
            "end": 551
          },
          "init": {
            "type": "BinaryExpression",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 554,
              "end": 555
            },
            "operator": "in",
            "right": {
              "type": "ObjectExpression",
              "properties": [],
              "start": 559,
              "end": 561
            },
            "start": 554,
            "end": 561
          },
          "definite": false,
          "start": 548,
          "end": 561
        }
      ],
      "declare": false,
      "start": 544,
      "end": 562
    },
    {
      "type": "FunctionDeclaration",
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
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null,
              "start": 577,
              "end": 578
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 577,
            "end": 578
          }
        ],
        "start": 576,
        "end": 579
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "t",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null,
                "start": 583,
                "end": 584
              },
              "typeArguments": null,
              "start": 583,
              "end": 584
            },
            "start": 581,
            "end": 584
          },
          "start": 580,
          "end": 584
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
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
                  "name": "rb3",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 596,
                  "end": 599
                },
                "init": {
                  "type": "BinaryExpression",
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 602,
                    "end": 603
                  },
                  "operator": "in",
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "t",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 607,
                    "end": 608
                  },
                  "start": 602,
                  "end": 608
                },
                "definite": false,
                "start": 596,
                "end": 608
              }
            ],
            "declare": false,
            "start": 592,
            "end": 609
          }
        ],
        "start": 586,
        "end": 611
      },
      "expression": false,
      "start": 564,
      "end": 611
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "unionCase",
        "optional": false,
        "typeAnnotation": null,
        "start": 622,
        "end": 631
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null,
              "start": 632,
              "end": 633
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 632,
            "end": 633
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "U",
              "optional": false,
              "typeAnnotation": null,
              "start": 635,
              "end": 636
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 635,
            "end": 636
          }
        ],
        "start": 631,
        "end": 637
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "t",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSUnionType",
              "types": [
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "T",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 641,
                    "end": 642
                  },
                  "typeArguments": null,
                  "start": 641,
                  "end": 642
                },
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "U",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 645,
                    "end": 646
                  },
                  "typeArguments": null,
                  "start": 645,
                  "end": 646
                }
              ],
              "start": 641,
              "end": 646
            },
            "start": 639,
            "end": 646
          },
          "start": 638,
          "end": 646
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
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
                  "name": "rb4",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 658,
                  "end": 661
                },
                "init": {
                  "type": "BinaryExpression",
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 664,
                    "end": 665
                  },
                  "operator": "in",
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "t",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 669,
                    "end": 670
                  },
                  "start": 664,
                  "end": 670
                },
                "definite": false,
                "start": 658,
                "end": 670
              }
            ],
            "declare": false,
            "start": 654,
            "end": 671
          }
        ],
        "start": 648,
        "end": 673
      },
      "expression": false,
      "start": 613,
      "end": 673
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "unionCase2",
        "optional": false,
        "typeAnnotation": null,
        "start": 684,
        "end": 694
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null,
              "start": 695,
              "end": 696
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 695,
            "end": 696
          }
        ],
        "start": 694,
        "end": 697
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "t",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSUnionType",
              "types": [
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "T",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 701,
                    "end": 702
                  },
                  "typeArguments": null,
                  "start": 701,
                  "end": 702
                },
                {
                  "type": "TSObjectKeyword",
                  "start": 705,
                  "end": 711
                }
              ],
              "start": 701,
              "end": 711
            },
            "start": 699,
            "end": 711
          },
          "start": 698,
          "end": 711
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
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
                  "name": "rb5",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 723,
                  "end": 726
                },
                "init": {
                  "type": "BinaryExpression",
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 729,
                    "end": 730
                  },
                  "operator": "in",
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "t",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 734,
                    "end": 735
                  },
                  "start": 729,
                  "end": 735
                },
                "definite": false,
                "start": 723,
                "end": 735
              }
            ],
            "declare": false,
            "start": 719,
            "end": 736
          }
        ],
        "start": 713,
        "end": 738
      },
      "expression": false,
      "start": 675,
      "end": 738
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "X",
        "optional": false,
        "typeAnnotation": null,
        "start": 750,
        "end": 751
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 754,
              "end": 755
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 757,
                "end": 763
              },
              "start": 755,
              "end": 763
            },
            "accessibility": null,
            "static": false,
            "start": 754,
            "end": 763
          }
        ],
        "start": 752,
        "end": 765
      },
      "declare": false,
      "start": 740,
      "end": 765
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Y",
        "optional": false,
        "typeAnnotation": null,
        "start": 776,
        "end": 777
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "y",
              "optional": false,
              "typeAnnotation": null,
              "start": 780,
              "end": 781
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 783,
                "end": 789
              },
              "start": 781,
              "end": 789
            },
            "accessibility": null,
            "static": false,
            "start": 780,
            "end": 789
          }
        ],
        "start": 778,
        "end": 791
      },
      "declare": false,
      "start": 766,
      "end": 791
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
            "name": "c1",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSUnionType",
                "types": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "X",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 809,
                      "end": 810
                    },
                    "typeArguments": null,
                    "start": 809,
                    "end": 810
                  },
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Y",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 813,
                      "end": 814
                    },
                    "typeArguments": null,
                    "start": 813,
                    "end": 814
                  }
                ],
                "start": 809,
                "end": 814
              },
              "start": 807,
              "end": 814
            },
            "start": 805,
            "end": 814
          },
          "init": null,
          "definite": false,
          "start": 805,
          "end": 814
        }
      ],
      "declare": true,
      "start": 793,
      "end": 815
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
            "name": "c2",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "X",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 832,
                  "end": 833
                },
                "typeArguments": null,
                "start": 832,
                "end": 833
              },
              "start": 830,
              "end": 833
            },
            "start": 828,
            "end": 833
          },
          "init": null,
          "definite": false,
          "start": 828,
          "end": 833
        }
      ],
      "declare": true,
      "start": 816,
      "end": 834
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
            "name": "c3",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Y",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 851,
                  "end": 852
                },
                "typeArguments": null,
                "start": 851,
                "end": 852
              },
              "start": 849,
              "end": 852
            },
            "start": 847,
            "end": 852
          },
          "init": null,
          "definite": false,
          "start": 847,
          "end": 852
        }
      ],
      "declare": true,
      "start": 835,
      "end": 853
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
            "name": "rc1",
            "optional": false,
            "typeAnnotation": null,
            "start": 859,
            "end": 862
          },
          "init": {
            "type": "BinaryExpression",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 865,
              "end": 866
            },
            "operator": "in",
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "c1",
              "optional": false,
              "typeAnnotation": null,
              "start": 870,
              "end": 872
            },
            "start": 865,
            "end": 872
          },
          "definite": false,
          "start": 859,
          "end": 872
        }
      ],
      "declare": false,
      "start": 855,
      "end": 873
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
            "name": "rc2",
            "optional": false,
            "typeAnnotation": null,
            "start": 878,
            "end": 881
          },
          "init": {
            "type": "BinaryExpression",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 884,
              "end": 885
            },
            "operator": "in",
            "right": {
              "type": "LogicalExpression",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "c2",
                "optional": false,
                "typeAnnotation": null,
                "start": 890,
                "end": 892
              },
              "operator": "||",
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "c3",
                "optional": false,
                "typeAnnotation": null,
                "start": 896,
                "end": 898
              },
              "start": 890,
              "end": 898
            },
            "start": 884,
            "end": 899
          },
          "definite": false,
          "start": 878,
          "end": 899
        }
      ],
      "declare": false,
      "start": 874,
      "end": 900
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 900
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
    "value": "x",
    "start": 4,
    "end": 5
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 5,
    "end": 6
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 7,
    "end": 10
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 10,
    "end": 11
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 143,
    "end": 150
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 151,
    "end": 154
  },
  {
    "type": "Identifier",
    "value": "a1",
    "start": 155,
    "end": 157
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 157,
    "end": 158
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 159,
    "end": 165
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 165,
    "end": 166
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 167,
    "end": 174
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 175,
    "end": 178
  },
  {
    "type": "Identifier",
    "value": "a2",
    "start": 179,
    "end": 181
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 181,
    "end": 182
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 183,
    "end": 189
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 189,
    "end": 190
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 191,
    "end": 198
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 199,
    "end": 202
  },
  {
    "type": "Identifier",
    "value": "a3",
    "start": 203,
    "end": 205
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 205,
    "end": 206
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 207,
    "end": 213
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 214,
    "end": 215
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 216,
    "end": 222
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 223,
    "end": 224
  },
  {
    "type": "Identifier",
    "value": "symbol",
    "start": 225,
    "end": 231
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 231,
    "end": 232
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 233,
    "end": 240
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 241,
    "end": 244
  },
  {
    "type": "Identifier",
    "value": "a4",
    "start": 245,
    "end": 247
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 247,
    "end": 248
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 249,
    "end": 252
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 252,
    "end": 253
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 255,
    "end": 258
  },
  {
    "type": "Identifier",
    "value": "ra1",
    "start": 259,
    "end": 262
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 263,
    "end": 264
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 265,
    "end": 266
  },
  {
    "type": "Keyword",
    "value": "in",
    "start": 267,
    "end": 269
  },
  {
    "type": "Identifier",
    "value": "x",
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
    "value": "ra2",
    "start": 277,
    "end": 280
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 281,
    "end": 282
  },
  {
    "type": "Identifier",
    "value": "a1",
    "start": 283,
    "end": 285
  },
  {
    "type": "Keyword",
    "value": "in",
    "start": 286,
    "end": 288
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 289,
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
    "value": "var",
    "start": 292,
    "end": 295
  },
  {
    "type": "Identifier",
    "value": "ra3",
    "start": 296,
    "end": 299
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 300,
    "end": 301
  },
  {
    "type": "Identifier",
    "value": "a2",
    "start": 302,
    "end": 304
  },
  {
    "type": "Keyword",
    "value": "in",
    "start": 305,
    "end": 307
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 308,
    "end": 309
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 309,
    "end": 310
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 311,
    "end": 314
  },
  {
    "type": "Identifier",
    "value": "ra4",
    "start": 315,
    "end": 318
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 319,
    "end": 320
  },
  {
    "type": "String",
    "value": "''",
    "start": 321,
    "end": 323
  },
  {
    "type": "Keyword",
    "value": "in",
    "start": 324,
    "end": 326
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 327,
    "end": 328
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 328,
    "end": 329
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 330,
    "end": 333
  },
  {
    "type": "Identifier",
    "value": "ra5",
    "start": 334,
    "end": 337
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 338,
    "end": 339
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 340,
    "end": 341
  },
  {
    "type": "Keyword",
    "value": "in",
    "start": 342,
    "end": 344
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 345,
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
    "value": "var",
    "start": 348,
    "end": 351
  },
  {
    "type": "Identifier",
    "value": "ra6",
    "start": 352,
    "end": 355
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 356,
    "end": 357
  },
  {
    "type": "Identifier",
    "value": "a3",
    "start": 358,
    "end": 360
  },
  {
    "type": "Keyword",
    "value": "in",
    "start": 361,
    "end": 363
  },
  {
    "type": "Identifier",
    "value": "x",
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
    "value": "ra7",
    "start": 371,
    "end": 374
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 375,
    "end": 376
  },
  {
    "type": "Identifier",
    "value": "a4",
    "start": 377,
    "end": 379
  },
  {
    "type": "Keyword",
    "value": "in",
    "start": 380,
    "end": 382
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 383,
    "end": 384
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 384,
    "end": 385
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 504,
    "end": 511
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 512,
    "end": 515
  },
  {
    "type": "Identifier",
    "value": "b1",
    "start": 516,
    "end": 518
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 518,
    "end": 519
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 520,
    "end": 521
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 521,
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
    "value": "var",
    "start": 525,
    "end": 528
  },
  {
    "type": "Identifier",
    "value": "rb1",
    "start": 529,
    "end": 532
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 533,
    "end": 534
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 535,
    "end": 536
  },
  {
    "type": "Keyword",
    "value": "in",
    "start": 537,
    "end": 539
  },
  {
    "type": "Identifier",
    "value": "b1",
    "start": 540,
    "end": 542
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 542,
    "end": 543
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 544,
    "end": 547
  },
  {
    "type": "Identifier",
    "value": "rb2",
    "start": 548,
    "end": 551
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 552,
    "end": 553
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 554,
    "end": 555
  },
  {
    "type": "Keyword",
    "value": "in",
    "start": 556,
    "end": 558
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 559,
    "end": 560
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 560,
    "end": 561
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 561,
    "end": 562
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
    "value": "<",
    "start": 576,
    "end": 577
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 577,
    "end": 578
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 578,
    "end": 579
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 579,
    "end": 580
  },
  {
    "type": "Identifier",
    "value": "t",
    "start": 580,
    "end": 581
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 581,
    "end": 582
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 583,
    "end": 584
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 584,
    "end": 585
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 586,
    "end": 587
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 592,
    "end": 595
  },
  {
    "type": "Identifier",
    "value": "rb3",
    "start": 596,
    "end": 599
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 600,
    "end": 601
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 602,
    "end": 603
  },
  {
    "type": "Keyword",
    "value": "in",
    "start": 604,
    "end": 606
  },
  {
    "type": "Identifier",
    "value": "t",
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
    "type": "Punctuator",
    "value": "}",
    "start": 610,
    "end": 611
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 613,
    "end": 621
  },
  {
    "type": "Identifier",
    "value": "unionCase",
    "start": 622,
    "end": 631
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 631,
    "end": 632
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 632,
    "end": 633
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 633,
    "end": 634
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 635,
    "end": 636
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 636,
    "end": 637
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 637,
    "end": 638
  },
  {
    "type": "Identifier",
    "value": "t",
    "start": 638,
    "end": 639
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 639,
    "end": 640
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 641,
    "end": 642
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 643,
    "end": 644
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 645,
    "end": 646
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 646,
    "end": 647
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 648,
    "end": 649
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 654,
    "end": 657
  },
  {
    "type": "Identifier",
    "value": "rb4",
    "start": 658,
    "end": 661
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 662,
    "end": 663
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 664,
    "end": 665
  },
  {
    "type": "Keyword",
    "value": "in",
    "start": 666,
    "end": 668
  },
  {
    "type": "Identifier",
    "value": "t",
    "start": 669,
    "end": 670
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 670,
    "end": 671
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 672,
    "end": 673
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 675,
    "end": 683
  },
  {
    "type": "Identifier",
    "value": "unionCase2",
    "start": 684,
    "end": 694
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 694,
    "end": 695
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 695,
    "end": 696
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 696,
    "end": 697
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 697,
    "end": 698
  },
  {
    "type": "Identifier",
    "value": "t",
    "start": 698,
    "end": 699
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 699,
    "end": 700
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 701,
    "end": 702
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 703,
    "end": 704
  },
  {
    "type": "Identifier",
    "value": "object",
    "start": 705,
    "end": 711
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 711,
    "end": 712
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 713,
    "end": 714
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 719,
    "end": 722
  },
  {
    "type": "Identifier",
    "value": "rb5",
    "start": 723,
    "end": 726
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 727,
    "end": 728
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 729,
    "end": 730
  },
  {
    "type": "Keyword",
    "value": "in",
    "start": 731,
    "end": 733
  },
  {
    "type": "Identifier",
    "value": "t",
    "start": 734,
    "end": 735
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 735,
    "end": 736
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 737,
    "end": 738
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 740,
    "end": 749
  },
  {
    "type": "Identifier",
    "value": "X",
    "start": 750,
    "end": 751
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 752,
    "end": 753
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 754,
    "end": 755
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 755,
    "end": 756
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 757,
    "end": 763
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 764,
    "end": 765
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 766,
    "end": 775
  },
  {
    "type": "Identifier",
    "value": "Y",
    "start": 776,
    "end": 777
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 778,
    "end": 779
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 780,
    "end": 781
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 781,
    "end": 782
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 783,
    "end": 789
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 790,
    "end": 791
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 793,
    "end": 800
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 801,
    "end": 804
  },
  {
    "type": "Identifier",
    "value": "c1",
    "start": 805,
    "end": 807
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 807,
    "end": 808
  },
  {
    "type": "Identifier",
    "value": "X",
    "start": 809,
    "end": 810
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 811,
    "end": 812
  },
  {
    "type": "Identifier",
    "value": "Y",
    "start": 813,
    "end": 814
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 814,
    "end": 815
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 816,
    "end": 823
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 824,
    "end": 827
  },
  {
    "type": "Identifier",
    "value": "c2",
    "start": 828,
    "end": 830
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 830,
    "end": 831
  },
  {
    "type": "Identifier",
    "value": "X",
    "start": 832,
    "end": 833
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 833,
    "end": 834
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 835,
    "end": 842
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 843,
    "end": 846
  },
  {
    "type": "Identifier",
    "value": "c3",
    "start": 847,
    "end": 849
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 849,
    "end": 850
  },
  {
    "type": "Identifier",
    "value": "Y",
    "start": 851,
    "end": 852
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 852,
    "end": 853
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 855,
    "end": 858
  },
  {
    "type": "Identifier",
    "value": "rc1",
    "start": 859,
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
    "value": "x",
    "start": 865,
    "end": 866
  },
  {
    "type": "Keyword",
    "value": "in",
    "start": 867,
    "end": 869
  },
  {
    "type": "Identifier",
    "value": "c1",
    "start": 870,
    "end": 872
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 872,
    "end": 873
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 874,
    "end": 877
  },
  {
    "type": "Identifier",
    "value": "rc2",
    "start": 878,
    "end": 881
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 882,
    "end": 883
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 884,
    "end": 885
  },
  {
    "type": "Keyword",
    "value": "in",
    "start": 886,
    "end": 888
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 889,
    "end": 890
  },
  {
    "type": "Identifier",
    "value": "c2",
    "start": 890,
    "end": 892
  },
  {
    "type": "Punctuator",
    "value": "||",
    "start": 893,
    "end": 895
  },
  {
    "type": "Identifier",
    "value": "c3",
    "start": 896,
    "end": 898
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 898,
    "end": 899
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 899,
    "end": 900
  }
]
```
