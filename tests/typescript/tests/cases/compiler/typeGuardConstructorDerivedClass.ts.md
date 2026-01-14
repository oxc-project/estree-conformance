__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "C1",
        "optional": false,
        "typeAnnotation": null,
        "start": 49,
        "end": 51
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
              "name": "property1",
              "optional": false,
              "typeAnnotation": null,
              "start": 58,
              "end": 67
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 70,
                "end": 76
              },
              "start": 68,
              "end": 76
            },
            "value": null,
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": true,
            "readonly": false,
            "accessibility": null,
            "start": 58,
            "end": 77
          }
        ],
        "start": 52,
        "end": 79
      },
      "abstract": false,
      "declare": false,
      "start": 43,
      "end": 79
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "C2",
        "optional": false,
        "typeAnnotation": null,
        "start": 87,
        "end": 89
      },
      "typeParameters": null,
      "superClass": {
        "type": "Identifier",
        "decorators": [],
        "name": "C1",
        "optional": false,
        "typeAnnotation": null,
        "start": 98,
        "end": 100
      },
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
              "name": "property2",
              "optional": false,
              "typeAnnotation": null,
              "start": 107,
              "end": 116
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 119,
                "end": 125
              },
              "start": 117,
              "end": 125
            },
            "value": null,
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": true,
            "readonly": false,
            "accessibility": null,
            "start": 107,
            "end": 126
          }
        ],
        "start": 101,
        "end": 128
      },
      "abstract": false,
      "declare": false,
      "start": 81,
      "end": 128
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
            "name": "var1",
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
                      "name": "C2",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 148,
                      "end": 150
                    },
                    "typeArguments": null,
                    "start": 148,
                    "end": 150
                  },
                  {
                    "type": "TSStringKeyword",
                    "start": 153,
                    "end": 159
                  }
                ],
                "start": 148,
                "end": 159
              },
              "start": 146,
              "end": 159
            },
            "start": 142,
            "end": 159
          },
          "init": null,
          "definite": false,
          "start": 142,
          "end": 159
        }
      ],
      "declare": true,
      "start": 130,
      "end": 160
    },
    {
      "type": "IfStatement",
      "test": {
        "type": "BinaryExpression",
        "left": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "var1",
            "optional": false,
            "typeAnnotation": null,
            "start": 165,
            "end": 169
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "constructor",
            "optional": false,
            "typeAnnotation": null,
            "start": 170,
            "end": 181
          },
          "optional": false,
          "computed": false,
          "start": 165,
          "end": 181
        },
        "operator": "===",
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "C1",
          "optional": false,
          "typeAnnotation": null,
          "start": 186,
          "end": 188
        },
        "start": 165,
        "end": 188
      },
      "consequent": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "Identifier",
              "decorators": [],
              "name": "var1",
              "optional": false,
              "typeAnnotation": null,
              "start": 196,
              "end": 200
            },
            "directive": null,
            "start": 196,
            "end": 201
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "var1",
                "optional": false,
                "typeAnnotation": null,
                "start": 215,
                "end": 219
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "property1",
                "optional": false,
                "typeAnnotation": null,
                "start": 220,
                "end": 229
              },
              "optional": false,
              "computed": false,
              "start": 215,
              "end": 229
            },
            "directive": null,
            "start": 215,
            "end": 230
          }
        ],
        "start": 190,
        "end": 241
      },
      "alternate": null,
      "start": 161,
      "end": 241
    },
    {
      "type": "IfStatement",
      "test": {
        "type": "BinaryExpression",
        "left": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "var1",
            "optional": false,
            "typeAnnotation": null,
            "start": 246,
            "end": 250
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "constructor",
            "optional": false,
            "typeAnnotation": null,
            "start": 251,
            "end": 262
          },
          "optional": false,
          "computed": false,
          "start": 246,
          "end": 262
        },
        "operator": "===",
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "C2",
          "optional": false,
          "typeAnnotation": null,
          "start": 267,
          "end": 269
        },
        "start": 246,
        "end": 269
      },
      "consequent": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "Identifier",
              "decorators": [],
              "name": "var1",
              "optional": false,
              "typeAnnotation": null,
              "start": 277,
              "end": 281
            },
            "directive": null,
            "start": 277,
            "end": 282
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "var1",
                "optional": false,
                "typeAnnotation": null,
                "start": 293,
                "end": 297
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "property1",
                "optional": false,
                "typeAnnotation": null,
                "start": 298,
                "end": 307
              },
              "optional": false,
              "computed": false,
              "start": 293,
              "end": 307
            },
            "directive": null,
            "start": 293,
            "end": 308
          }
        ],
        "start": 271,
        "end": 320
      },
      "alternate": null,
      "start": 242,
      "end": 320
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "C3",
        "optional": false,
        "typeAnnotation": null,
        "start": 371,
        "end": 373
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [],
        "start": 374,
        "end": 376
      },
      "abstract": false,
      "declare": false,
      "start": 365,
      "end": 376
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "C4",
        "optional": false,
        "typeAnnotation": null,
        "start": 384,
        "end": 386
      },
      "typeParameters": null,
      "superClass": {
        "type": "Identifier",
        "decorators": [],
        "name": "C3",
        "optional": false,
        "typeAnnotation": null,
        "start": 395,
        "end": 397
      },
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [],
        "start": 398,
        "end": 400
      },
      "abstract": false,
      "declare": false,
      "start": 378,
      "end": 400
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
            "name": "var2",
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
                      "name": "C4",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 420,
                      "end": 422
                    },
                    "typeArguments": null,
                    "start": 420,
                    "end": 422
                  },
                  {
                    "type": "TSStringKeyword",
                    "start": 425,
                    "end": 431
                  }
                ],
                "start": 420,
                "end": 431
              },
              "start": 418,
              "end": 431
            },
            "start": 414,
            "end": 431
          },
          "init": null,
          "definite": false,
          "start": 414,
          "end": 431
        }
      ],
      "declare": true,
      "start": 402,
      "end": 432
    },
    {
      "type": "IfStatement",
      "test": {
        "type": "BinaryExpression",
        "left": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "var2",
            "optional": false,
            "typeAnnotation": null,
            "start": 437,
            "end": 441
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "constructor",
            "optional": false,
            "typeAnnotation": null,
            "start": 442,
            "end": 453
          },
          "optional": false,
          "computed": false,
          "start": 437,
          "end": 453
        },
        "operator": "===",
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "C3",
          "optional": false,
          "typeAnnotation": null,
          "start": 458,
          "end": 460
        },
        "start": 437,
        "end": 460
      },
      "consequent": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "Identifier",
              "decorators": [],
              "name": "var2",
              "optional": false,
              "typeAnnotation": null,
              "start": 468,
              "end": 472
            },
            "directive": null,
            "start": 468,
            "end": 473
          }
        ],
        "start": 462,
        "end": 484
      },
      "alternate": null,
      "start": 433,
      "end": 484
    },
    {
      "type": "IfStatement",
      "test": {
        "type": "BinaryExpression",
        "left": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "var2",
            "optional": false,
            "typeAnnotation": null,
            "start": 489,
            "end": 493
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "constructor",
            "optional": false,
            "typeAnnotation": null,
            "start": 494,
            "end": 505
          },
          "optional": false,
          "computed": false,
          "start": 489,
          "end": 505
        },
        "operator": "===",
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "C4",
          "optional": false,
          "typeAnnotation": null,
          "start": 510,
          "end": 512
        },
        "start": 489,
        "end": 512
      },
      "consequent": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "Identifier",
              "decorators": [],
              "name": "var2",
              "optional": false,
              "typeAnnotation": null,
              "start": 520,
              "end": 524
            },
            "directive": null,
            "start": 520,
            "end": 525
          }
        ],
        "start": 514,
        "end": 533
      },
      "alternate": null,
      "start": 485,
      "end": 533
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "C5",
        "optional": false,
        "typeAnnotation": null,
        "start": 574,
        "end": 576
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
              "name": "property1",
              "optional": false,
              "typeAnnotation": null,
              "start": 583,
              "end": 592
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 595,
                "end": 601
              },
              "start": 593,
              "end": 601
            },
            "value": null,
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": true,
            "readonly": false,
            "accessibility": null,
            "start": 583,
            "end": 602
          }
        ],
        "start": 577,
        "end": 604
      },
      "abstract": false,
      "declare": false,
      "start": 568,
      "end": 604
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "C6",
        "optional": false,
        "typeAnnotation": null,
        "start": 612,
        "end": 614
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
              "name": "property2",
              "optional": false,
              "typeAnnotation": null,
              "start": 621,
              "end": 630
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 633,
                "end": 639
              },
              "start": 631,
              "end": 639
            },
            "value": null,
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": true,
            "readonly": false,
            "accessibility": null,
            "start": 621,
            "end": 640
          }
        ],
        "start": 615,
        "end": 642
      },
      "abstract": false,
      "declare": false,
      "start": 606,
      "end": 642
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
            "name": "let3",
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
                      "name": "C6",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 662,
                      "end": 664
                    },
                    "typeArguments": null,
                    "start": 662,
                    "end": 664
                  },
                  {
                    "type": "TSStringKeyword",
                    "start": 667,
                    "end": 673
                  }
                ],
                "start": 662,
                "end": 673
              },
              "start": 660,
              "end": 673
            },
            "start": 656,
            "end": 673
          },
          "init": null,
          "definite": false,
          "start": 656,
          "end": 673
        }
      ],
      "declare": true,
      "start": 644,
      "end": 674
    },
    {
      "type": "IfStatement",
      "test": {
        "type": "BinaryExpression",
        "left": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "let3",
            "optional": false,
            "typeAnnotation": null,
            "start": 679,
            "end": 683
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "constructor",
            "optional": false,
            "typeAnnotation": null,
            "start": 684,
            "end": 695
          },
          "optional": false,
          "computed": false,
          "start": 679,
          "end": 695
        },
        "operator": "===",
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "C5",
          "optional": false,
          "typeAnnotation": null,
          "start": 700,
          "end": 702
        },
        "start": 679,
        "end": 702
      },
      "consequent": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "Identifier",
              "decorators": [],
              "name": "let3",
              "optional": false,
              "typeAnnotation": null,
              "start": 710,
              "end": 714
            },
            "directive": null,
            "start": 710,
            "end": 715
          }
        ],
        "start": 704,
        "end": 726
      },
      "alternate": null,
      "start": 675,
      "end": 726
    },
    {
      "type": "IfStatement",
      "test": {
        "type": "BinaryExpression",
        "left": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "let3",
            "optional": false,
            "typeAnnotation": null,
            "start": 731,
            "end": 735
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "constructor",
            "optional": false,
            "typeAnnotation": null,
            "start": 736,
            "end": 747
          },
          "optional": false,
          "computed": false,
          "start": 731,
          "end": 747
        },
        "operator": "===",
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "C6",
          "optional": false,
          "typeAnnotation": null,
          "start": 752,
          "end": 754
        },
        "start": 731,
        "end": 754
      },
      "consequent": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "Identifier",
              "decorators": [],
              "name": "let3",
              "optional": false,
              "typeAnnotation": null,
              "start": 762,
              "end": 766
            },
            "directive": null,
            "start": 762,
            "end": 767
          }
        ],
        "start": 756,
        "end": 775
      },
      "alternate": null,
      "start": 727,
      "end": 775
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "C7",
        "optional": false,
        "typeAnnotation": null,
        "start": 818,
        "end": 820
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
              "name": "property1",
              "optional": false,
              "typeAnnotation": null,
              "start": 827,
              "end": 836
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 838,
                "end": 844
              },
              "start": 836,
              "end": 844
            },
            "value": null,
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 827,
            "end": 844
          }
        ],
        "start": 821,
        "end": 846
      },
      "abstract": false,
      "declare": false,
      "start": 812,
      "end": 846
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "C8",
        "optional": false,
        "typeAnnotation": null,
        "start": 854,
        "end": 856
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
              "name": "property1",
              "optional": false,
              "typeAnnotation": null,
              "start": 863,
              "end": 872
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 874,
                "end": 880
              },
              "start": 872,
              "end": 880
            },
            "value": null,
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 863,
            "end": 881
          }
        ],
        "start": 857,
        "end": 883
      },
      "abstract": false,
      "declare": false,
      "start": 848,
      "end": 883
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
            "name": "let4",
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
                      "name": "C8",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 903,
                      "end": 905
                    },
                    "typeArguments": null,
                    "start": 903,
                    "end": 905
                  },
                  {
                    "type": "TSStringKeyword",
                    "start": 908,
                    "end": 914
                  }
                ],
                "start": 903,
                "end": 914
              },
              "start": 901,
              "end": 914
            },
            "start": 897,
            "end": 914
          },
          "init": null,
          "definite": false,
          "start": 897,
          "end": 914
        }
      ],
      "declare": true,
      "start": 885,
      "end": 915
    },
    {
      "type": "IfStatement",
      "test": {
        "type": "BinaryExpression",
        "left": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "let4",
            "optional": false,
            "typeAnnotation": null,
            "start": 920,
            "end": 924
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "constructor",
            "optional": false,
            "typeAnnotation": null,
            "start": 925,
            "end": 936
          },
          "optional": false,
          "computed": false,
          "start": 920,
          "end": 936
        },
        "operator": "===",
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "C7",
          "optional": false,
          "typeAnnotation": null,
          "start": 941,
          "end": 943
        },
        "start": 920,
        "end": 943
      },
      "consequent": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "Identifier",
              "decorators": [],
              "name": "let4",
              "optional": false,
              "typeAnnotation": null,
              "start": 951,
              "end": 955
            },
            "directive": null,
            "start": 951,
            "end": 956
          }
        ],
        "start": 945,
        "end": 967
      },
      "alternate": null,
      "start": 916,
      "end": 967
    },
    {
      "type": "IfStatement",
      "test": {
        "type": "BinaryExpression",
        "left": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "let4",
            "optional": false,
            "typeAnnotation": null,
            "start": 972,
            "end": 976
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "constructor",
            "optional": false,
            "typeAnnotation": null,
            "start": 977,
            "end": 988
          },
          "optional": false,
          "computed": false,
          "start": 972,
          "end": 988
        },
        "operator": "===",
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "C8",
          "optional": false,
          "typeAnnotation": null,
          "start": 993,
          "end": 995
        },
        "start": 972,
        "end": 995
      },
      "consequent": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "Identifier",
              "decorators": [],
              "name": "let4",
              "optional": false,
              "typeAnnotation": null,
              "start": 1003,
              "end": 1007
            },
            "directive": null,
            "start": 1003,
            "end": 1008
          }
        ],
        "start": 997,
        "end": 1016
      },
      "alternate": null,
      "start": 968,
      "end": 1016
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 43,
  "end": 1016
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "class",
    "start": 43,
    "end": 48
  },
  {
    "type": "Identifier",
    "value": "C1",
    "start": 49,
    "end": 51
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 52,
    "end": 53
  },
  {
    "type": "Identifier",
    "value": "property1",
    "start": 58,
    "end": 67
  },
  {
    "type": "Punctuator",
    "value": "!",
    "start": 67,
    "end": 68
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 68,
    "end": 69
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 70,
    "end": 76
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 76,
    "end": 77
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 78,
    "end": 79
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 81,
    "end": 86
  },
  {
    "type": "Identifier",
    "value": "C2",
    "start": 87,
    "end": 89
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 90,
    "end": 97
  },
  {
    "type": "Identifier",
    "value": "C1",
    "start": 98,
    "end": 100
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 101,
    "end": 102
  },
  {
    "type": "Identifier",
    "value": "property2",
    "start": 107,
    "end": 116
  },
  {
    "type": "Punctuator",
    "value": "!",
    "start": 116,
    "end": 117
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 117,
    "end": 118
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 119,
    "end": 125
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 125,
    "end": 126
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 127,
    "end": 128
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 130,
    "end": 137
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 138,
    "end": 141
  },
  {
    "type": "Identifier",
    "value": "var1",
    "start": 142,
    "end": 146
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 146,
    "end": 147
  },
  {
    "type": "Identifier",
    "value": "C2",
    "start": 148,
    "end": 150
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 151,
    "end": 152
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 153,
    "end": 159
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 159,
    "end": 160
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 161,
    "end": 163
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 164,
    "end": 165
  },
  {
    "type": "Identifier",
    "value": "var1",
    "start": 165,
    "end": 169
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 169,
    "end": 170
  },
  {
    "type": "Identifier",
    "value": "constructor",
    "start": 170,
    "end": 181
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 182,
    "end": 185
  },
  {
    "type": "Identifier",
    "value": "C1",
    "start": 186,
    "end": 188
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 188,
    "end": 189
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 190,
    "end": 191
  },
  {
    "type": "Identifier",
    "value": "var1",
    "start": 196,
    "end": 200
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 200,
    "end": 201
  },
  {
    "type": "Identifier",
    "value": "var1",
    "start": 215,
    "end": 219
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 219,
    "end": 220
  },
  {
    "type": "Identifier",
    "value": "property1",
    "start": 220,
    "end": 229
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 229,
    "end": 230
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 240,
    "end": 241
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 242,
    "end": 244
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 245,
    "end": 246
  },
  {
    "type": "Identifier",
    "value": "var1",
    "start": 246,
    "end": 250
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 250,
    "end": 251
  },
  {
    "type": "Identifier",
    "value": "constructor",
    "start": 251,
    "end": 262
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 263,
    "end": 266
  },
  {
    "type": "Identifier",
    "value": "C2",
    "start": 267,
    "end": 269
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 269,
    "end": 270
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 271,
    "end": 272
  },
  {
    "type": "Identifier",
    "value": "var1",
    "start": 277,
    "end": 281
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 281,
    "end": 282
  },
  {
    "type": "Identifier",
    "value": "var1",
    "start": 293,
    "end": 297
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 297,
    "end": 298
  },
  {
    "type": "Identifier",
    "value": "property1",
    "start": 298,
    "end": 307
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 307,
    "end": 308
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 319,
    "end": 320
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 365,
    "end": 370
  },
  {
    "type": "Identifier",
    "value": "C3",
    "start": 371,
    "end": 373
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 374,
    "end": 375
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 375,
    "end": 376
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 378,
    "end": 383
  },
  {
    "type": "Identifier",
    "value": "C4",
    "start": 384,
    "end": 386
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 387,
    "end": 394
  },
  {
    "type": "Identifier",
    "value": "C3",
    "start": 395,
    "end": 397
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 398,
    "end": 399
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 399,
    "end": 400
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 402,
    "end": 409
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 410,
    "end": 413
  },
  {
    "type": "Identifier",
    "value": "var2",
    "start": 414,
    "end": 418
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 418,
    "end": 419
  },
  {
    "type": "Identifier",
    "value": "C4",
    "start": 420,
    "end": 422
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 423,
    "end": 424
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 425,
    "end": 431
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 431,
    "end": 432
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 433,
    "end": 435
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 436,
    "end": 437
  },
  {
    "type": "Identifier",
    "value": "var2",
    "start": 437,
    "end": 441
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 441,
    "end": 442
  },
  {
    "type": "Identifier",
    "value": "constructor",
    "start": 442,
    "end": 453
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 454,
    "end": 457
  },
  {
    "type": "Identifier",
    "value": "C3",
    "start": 458,
    "end": 460
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 460,
    "end": 461
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 462,
    "end": 463
  },
  {
    "type": "Identifier",
    "value": "var2",
    "start": 468,
    "end": 472
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 472,
    "end": 473
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 483,
    "end": 484
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 485,
    "end": 487
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 488,
    "end": 489
  },
  {
    "type": "Identifier",
    "value": "var2",
    "start": 489,
    "end": 493
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 493,
    "end": 494
  },
  {
    "type": "Identifier",
    "value": "constructor",
    "start": 494,
    "end": 505
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 506,
    "end": 509
  },
  {
    "type": "Identifier",
    "value": "C4",
    "start": 510,
    "end": 512
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 512,
    "end": 513
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 514,
    "end": 515
  },
  {
    "type": "Identifier",
    "value": "var2",
    "start": 520,
    "end": 524
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 524,
    "end": 525
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 532,
    "end": 533
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 568,
    "end": 573
  },
  {
    "type": "Identifier",
    "value": "C5",
    "start": 574,
    "end": 576
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 577,
    "end": 578
  },
  {
    "type": "Identifier",
    "value": "property1",
    "start": 583,
    "end": 592
  },
  {
    "type": "Punctuator",
    "value": "!",
    "start": 592,
    "end": 593
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 593,
    "end": 594
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 595,
    "end": 601
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 601,
    "end": 602
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 603,
    "end": 604
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 606,
    "end": 611
  },
  {
    "type": "Identifier",
    "value": "C6",
    "start": 612,
    "end": 614
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 615,
    "end": 616
  },
  {
    "type": "Identifier",
    "value": "property2",
    "start": 621,
    "end": 630
  },
  {
    "type": "Punctuator",
    "value": "!",
    "start": 630,
    "end": 631
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 631,
    "end": 632
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 633,
    "end": 639
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 639,
    "end": 640
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 641,
    "end": 642
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 644,
    "end": 651
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 652,
    "end": 655
  },
  {
    "type": "Identifier",
    "value": "let3",
    "start": 656,
    "end": 660
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 660,
    "end": 661
  },
  {
    "type": "Identifier",
    "value": "C6",
    "start": 662,
    "end": 664
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 665,
    "end": 666
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 667,
    "end": 673
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 673,
    "end": 674
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 675,
    "end": 677
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 678,
    "end": 679
  },
  {
    "type": "Identifier",
    "value": "let3",
    "start": 679,
    "end": 683
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 683,
    "end": 684
  },
  {
    "type": "Identifier",
    "value": "constructor",
    "start": 684,
    "end": 695
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 696,
    "end": 699
  },
  {
    "type": "Identifier",
    "value": "C5",
    "start": 700,
    "end": 702
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 702,
    "end": 703
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 704,
    "end": 705
  },
  {
    "type": "Identifier",
    "value": "let3",
    "start": 710,
    "end": 714
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 714,
    "end": 715
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 725,
    "end": 726
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 727,
    "end": 729
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 730,
    "end": 731
  },
  {
    "type": "Identifier",
    "value": "let3",
    "start": 731,
    "end": 735
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 735,
    "end": 736
  },
  {
    "type": "Identifier",
    "value": "constructor",
    "start": 736,
    "end": 747
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 748,
    "end": 751
  },
  {
    "type": "Identifier",
    "value": "C6",
    "start": 752,
    "end": 754
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 754,
    "end": 755
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 756,
    "end": 757
  },
  {
    "type": "Identifier",
    "value": "let3",
    "start": 762,
    "end": 766
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 766,
    "end": 767
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 774,
    "end": 775
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 812,
    "end": 817
  },
  {
    "type": "Identifier",
    "value": "C7",
    "start": 818,
    "end": 820
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 821,
    "end": 822
  },
  {
    "type": "Identifier",
    "value": "property1",
    "start": 827,
    "end": 836
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 836,
    "end": 837
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 838,
    "end": 844
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 845,
    "end": 846
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 848,
    "end": 853
  },
  {
    "type": "Identifier",
    "value": "C8",
    "start": 854,
    "end": 856
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 857,
    "end": 858
  },
  {
    "type": "Identifier",
    "value": "property1",
    "start": 863,
    "end": 872
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 872,
    "end": 873
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 874,
    "end": 880
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 880,
    "end": 881
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 882,
    "end": 883
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 885,
    "end": 892
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 893,
    "end": 896
  },
  {
    "type": "Identifier",
    "value": "let4",
    "start": 897,
    "end": 901
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 901,
    "end": 902
  },
  {
    "type": "Identifier",
    "value": "C8",
    "start": 903,
    "end": 905
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 906,
    "end": 907
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 908,
    "end": 914
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 914,
    "end": 915
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 916,
    "end": 918
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 919,
    "end": 920
  },
  {
    "type": "Identifier",
    "value": "let4",
    "start": 920,
    "end": 924
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 924,
    "end": 925
  },
  {
    "type": "Identifier",
    "value": "constructor",
    "start": 925,
    "end": 936
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 937,
    "end": 940
  },
  {
    "type": "Identifier",
    "value": "C7",
    "start": 941,
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
    "value": "{",
    "start": 945,
    "end": 946
  },
  {
    "type": "Identifier",
    "value": "let4",
    "start": 951,
    "end": 955
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 955,
    "end": 956
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 966,
    "end": 967
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 968,
    "end": 970
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 971,
    "end": 972
  },
  {
    "type": "Identifier",
    "value": "let4",
    "start": 972,
    "end": 976
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 976,
    "end": 977
  },
  {
    "type": "Identifier",
    "value": "constructor",
    "start": 977,
    "end": 988
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 989,
    "end": 992
  },
  {
    "type": "Identifier",
    "value": "C8",
    "start": 993,
    "end": 995
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 995,
    "end": 996
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 997,
    "end": 998
  },
  {
    "type": "Identifier",
    "value": "let4",
    "start": 1003,
    "end": 1007
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1007,
    "end": 1008
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1015,
    "end": 1016
  }
]
```
