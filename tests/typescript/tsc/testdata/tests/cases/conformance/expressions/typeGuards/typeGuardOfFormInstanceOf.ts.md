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
        "start": 335,
        "end": 337
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
              "name": "p1",
              "optional": false,
              "typeAnnotation": null,
              "start": 344,
              "end": 346
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 348,
                "end": 354
              },
              "start": 346,
              "end": 354
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
            "start": 344,
            "end": 355
          }
        ],
        "start": 338,
        "end": 357
      },
      "abstract": false,
      "declare": false,
      "start": 329,
      "end": 357
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
        "start": 364,
        "end": 366
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
              "name": "p2",
              "optional": false,
              "typeAnnotation": null,
              "start": 373,
              "end": 375
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 377,
                "end": 383
              },
              "start": 375,
              "end": 383
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
            "start": 373,
            "end": 384
          }
        ],
        "start": 367,
        "end": 386
      },
      "abstract": false,
      "declare": false,
      "start": 358,
      "end": 386
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "D1",
        "optional": false,
        "typeAnnotation": null,
        "start": 393,
        "end": 395
      },
      "typeParameters": null,
      "superClass": {
        "type": "Identifier",
        "decorators": [],
        "name": "C1",
        "optional": false,
        "typeAnnotation": null,
        "start": 404,
        "end": 406
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
              "name": "p3",
              "optional": false,
              "typeAnnotation": null,
              "start": 413,
              "end": 415
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 417,
                "end": 423
              },
              "start": 415,
              "end": 423
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
            "start": 413,
            "end": 424
          }
        ],
        "start": 407,
        "end": 426
      },
      "abstract": false,
      "declare": false,
      "start": 387,
      "end": 426
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
        "start": 433,
        "end": 435
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
              "name": "p4",
              "optional": false,
              "typeAnnotation": null,
              "start": 442,
              "end": 444
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 446,
                "end": 452
              },
              "start": 444,
              "end": 452
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
            "start": 442,
            "end": 453
          }
        ],
        "start": 436,
        "end": 455
      },
      "abstract": false,
      "declare": false,
      "start": 427,
      "end": 455
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
            "name": "str",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 465,
                "end": 471
              },
              "start": 463,
              "end": 471
            },
            "start": 460,
            "end": 471
          },
          "init": null,
          "definite": false,
          "start": 460,
          "end": 471
        }
      ],
      "declare": false,
      "start": 456,
      "end": 472
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
            "name": "num",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 482,
                "end": 488
              },
              "start": 480,
              "end": 488
            },
            "start": 477,
            "end": 488
          },
          "init": null,
          "definite": false,
          "start": 477,
          "end": 488
        }
      ],
      "declare": false,
      "start": 473,
      "end": 489
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
            "name": "strOrNum",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSUnionType",
                "types": [
                  {
                    "type": "TSStringKeyword",
                    "start": 504,
                    "end": 510
                  },
                  {
                    "type": "TSNumberKeyword",
                    "start": 513,
                    "end": 519
                  }
                ],
                "start": 504,
                "end": 519
              },
              "start": 502,
              "end": 519
            },
            "start": 494,
            "end": 519
          },
          "init": null,
          "definite": false,
          "start": 494,
          "end": 519
        }
      ],
      "declare": false,
      "start": 490,
      "end": 520
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
            "name": "ctor1",
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
                      "name": "C1",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 533,
                      "end": 535
                    },
                    "typeArguments": null,
                    "start": 533,
                    "end": 535
                  },
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "C2",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 538,
                      "end": 540
                    },
                    "typeArguments": null,
                    "start": 538,
                    "end": 540
                  }
                ],
                "start": 533,
                "end": 540
              },
              "start": 531,
              "end": 540
            },
            "start": 526,
            "end": 540
          },
          "init": null,
          "definite": false,
          "start": 526,
          "end": 540
        }
      ],
      "declare": false,
      "start": 522,
      "end": 541
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "str",
          "optional": false,
          "typeAnnotation": null,
          "start": 542,
          "end": 545
        },
        "right": {
          "type": "LogicalExpression",
          "left": {
            "type": "BinaryExpression",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "ctor1",
              "optional": false,
              "typeAnnotation": null,
              "start": 548,
              "end": 553
            },
            "operator": "instanceof",
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "C1",
              "optional": false,
              "typeAnnotation": null,
              "start": 565,
              "end": 567
            },
            "start": 548,
            "end": 567
          },
          "operator": "&&",
          "right": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "ctor1",
              "optional": false,
              "typeAnnotation": null,
              "start": 571,
              "end": 576
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "p1",
              "optional": false,
              "typeAnnotation": null,
              "start": 577,
              "end": 579
            },
            "optional": false,
            "computed": false,
            "start": 571,
            "end": 579
          },
          "start": 548,
          "end": 579
        },
        "start": 542,
        "end": 579
      },
      "directive": null,
      "start": 542,
      "end": 580
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "num",
          "optional": false,
          "typeAnnotation": null,
          "start": 587,
          "end": 590
        },
        "right": {
          "type": "LogicalExpression",
          "left": {
            "type": "BinaryExpression",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "ctor1",
              "optional": false,
              "typeAnnotation": null,
              "start": 593,
              "end": 598
            },
            "operator": "instanceof",
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "C2",
              "optional": false,
              "typeAnnotation": null,
              "start": 610,
              "end": 612
            },
            "start": 593,
            "end": 612
          },
          "operator": "&&",
          "right": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "ctor1",
              "optional": false,
              "typeAnnotation": null,
              "start": 616,
              "end": 621
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "p2",
              "optional": false,
              "typeAnnotation": null,
              "start": 622,
              "end": 624
            },
            "optional": false,
            "computed": false,
            "start": 616,
            "end": 624
          },
          "start": 593,
          "end": 624
        },
        "start": 587,
        "end": 624
      },
      "directive": null,
      "start": 587,
      "end": 625
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "str",
          "optional": false,
          "typeAnnotation": null,
          "start": 632,
          "end": 635
        },
        "right": {
          "type": "LogicalExpression",
          "left": {
            "type": "BinaryExpression",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "ctor1",
              "optional": false,
              "typeAnnotation": null,
              "start": 638,
              "end": 643
            },
            "operator": "instanceof",
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "D1",
              "optional": false,
              "typeAnnotation": null,
              "start": 655,
              "end": 657
            },
            "start": 638,
            "end": 657
          },
          "operator": "&&",
          "right": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "ctor1",
              "optional": false,
              "typeAnnotation": null,
              "start": 661,
              "end": 666
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "p1",
              "optional": false,
              "typeAnnotation": null,
              "start": 667,
              "end": 669
            },
            "optional": false,
            "computed": false,
            "start": 661,
            "end": 669
          },
          "start": 638,
          "end": 669
        },
        "start": 632,
        "end": 669
      },
      "directive": null,
      "start": 632,
      "end": 670
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "num",
          "optional": false,
          "typeAnnotation": null,
          "start": 677,
          "end": 680
        },
        "right": {
          "type": "LogicalExpression",
          "left": {
            "type": "BinaryExpression",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "ctor1",
              "optional": false,
              "typeAnnotation": null,
              "start": 683,
              "end": 688
            },
            "operator": "instanceof",
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "D1",
              "optional": false,
              "typeAnnotation": null,
              "start": 700,
              "end": 702
            },
            "start": 683,
            "end": 702
          },
          "operator": "&&",
          "right": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "ctor1",
              "optional": false,
              "typeAnnotation": null,
              "start": 706,
              "end": 711
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "p3",
              "optional": false,
              "typeAnnotation": null,
              "start": 712,
              "end": 714
            },
            "optional": false,
            "computed": false,
            "start": 706,
            "end": 714
          },
          "start": 683,
          "end": 714
        },
        "start": 677,
        "end": 714
      },
      "directive": null,
      "start": 677,
      "end": 715
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
            "name": "ctor2",
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
                      "start": 734,
                      "end": 736
                    },
                    "typeArguments": null,
                    "start": 734,
                    "end": 736
                  },
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "D1",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 739,
                      "end": 741
                    },
                    "typeArguments": null,
                    "start": 739,
                    "end": 741
                  }
                ],
                "start": 734,
                "end": 741
              },
              "start": 732,
              "end": 741
            },
            "start": 727,
            "end": 741
          },
          "init": null,
          "definite": false,
          "start": 727,
          "end": 741
        }
      ],
      "declare": false,
      "start": 723,
      "end": 742
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "num",
          "optional": false,
          "typeAnnotation": null,
          "start": 743,
          "end": 746
        },
        "right": {
          "type": "LogicalExpression",
          "left": {
            "type": "BinaryExpression",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "ctor2",
              "optional": false,
              "typeAnnotation": null,
              "start": 749,
              "end": 754
            },
            "operator": "instanceof",
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "C2",
              "optional": false,
              "typeAnnotation": null,
              "start": 766,
              "end": 768
            },
            "start": 749,
            "end": 768
          },
          "operator": "&&",
          "right": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "ctor2",
              "optional": false,
              "typeAnnotation": null,
              "start": 772,
              "end": 777
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "p2",
              "optional": false,
              "typeAnnotation": null,
              "start": 778,
              "end": 780
            },
            "optional": false,
            "computed": false,
            "start": 772,
            "end": 780
          },
          "start": 749,
          "end": 780
        },
        "start": 743,
        "end": 780
      },
      "directive": null,
      "start": 743,
      "end": 781
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "num",
          "optional": false,
          "typeAnnotation": null,
          "start": 788,
          "end": 791
        },
        "right": {
          "type": "LogicalExpression",
          "left": {
            "type": "BinaryExpression",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "ctor2",
              "optional": false,
              "typeAnnotation": null,
              "start": 794,
              "end": 799
            },
            "operator": "instanceof",
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "D1",
              "optional": false,
              "typeAnnotation": null,
              "start": 811,
              "end": 813
            },
            "start": 794,
            "end": 813
          },
          "operator": "&&",
          "right": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "ctor2",
              "optional": false,
              "typeAnnotation": null,
              "start": 817,
              "end": 822
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "p3",
              "optional": false,
              "typeAnnotation": null,
              "start": 823,
              "end": 825
            },
            "optional": false,
            "computed": false,
            "start": 817,
            "end": 825
          },
          "start": 794,
          "end": 825
        },
        "start": 788,
        "end": 825
      },
      "directive": null,
      "start": 788,
      "end": 826
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "str",
          "optional": false,
          "typeAnnotation": null,
          "start": 833,
          "end": 836
        },
        "right": {
          "type": "LogicalExpression",
          "left": {
            "type": "BinaryExpression",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "ctor2",
              "optional": false,
              "typeAnnotation": null,
              "start": 839,
              "end": 844
            },
            "operator": "instanceof",
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "D1",
              "optional": false,
              "typeAnnotation": null,
              "start": 856,
              "end": 858
            },
            "start": 839,
            "end": 858
          },
          "operator": "&&",
          "right": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "ctor2",
              "optional": false,
              "typeAnnotation": null,
              "start": 862,
              "end": 867
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "p1",
              "optional": false,
              "typeAnnotation": null,
              "start": 868,
              "end": 870
            },
            "optional": false,
            "computed": false,
            "start": 862,
            "end": 870
          },
          "start": 839,
          "end": 870
        },
        "start": 833,
        "end": 870
      },
      "directive": null,
      "start": 833,
      "end": 871
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
            "name": "r2",
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
                      "name": "D1",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 886,
                      "end": 888
                    },
                    "typeArguments": null,
                    "start": 886,
                    "end": 888
                  },
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "C2",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 891,
                      "end": 893
                    },
                    "typeArguments": null,
                    "start": 891,
                    "end": 893
                  }
                ],
                "start": 886,
                "end": 893
              },
              "start": 884,
              "end": 893
            },
            "start": 882,
            "end": 893
          },
          "init": {
            "type": "LogicalExpression",
            "left": {
              "type": "BinaryExpression",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "ctor2",
                "optional": false,
                "typeAnnotation": null,
                "start": 896,
                "end": 901
              },
              "operator": "instanceof",
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "C1",
                "optional": false,
                "typeAnnotation": null,
                "start": 913,
                "end": 915
              },
              "start": 896,
              "end": 915
            },
            "operator": "&&",
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "ctor2",
              "optional": false,
              "typeAnnotation": null,
              "start": 919,
              "end": 924
            },
            "start": 896,
            "end": 924
          },
          "definite": false,
          "start": 882,
          "end": 924
        }
      ],
      "declare": false,
      "start": 878,
      "end": 925
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
            "name": "ctor3",
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
                      "name": "C1",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 949,
                      "end": 951
                    },
                    "typeArguments": null,
                    "start": 949,
                    "end": 951
                  },
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "C2",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 954,
                      "end": 956
                    },
                    "typeArguments": null,
                    "start": 954,
                    "end": 956
                  }
                ],
                "start": 949,
                "end": 956
              },
              "start": 947,
              "end": 956
            },
            "start": 942,
            "end": 956
          },
          "init": null,
          "definite": false,
          "start": 942,
          "end": 956
        }
      ],
      "declare": false,
      "start": 938,
      "end": 957
    },
    {
      "type": "IfStatement",
      "test": {
        "type": "BinaryExpression",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "ctor3",
          "optional": false,
          "typeAnnotation": null,
          "start": 962,
          "end": 967
        },
        "operator": "instanceof",
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "C1",
          "optional": false,
          "typeAnnotation": null,
          "start": 979,
          "end": 981
        },
        "start": 962,
        "end": 981
      },
      "consequent": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "ctor3",
                "optional": false,
                "typeAnnotation": null,
                "start": 989,
                "end": 994
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "p1",
                "optional": false,
                "typeAnnotation": null,
                "start": 995,
                "end": 997
              },
              "optional": false,
              "computed": false,
              "start": 989,
              "end": 997
            },
            "directive": null,
            "start": 989,
            "end": 998
          }
        ],
        "start": 983,
        "end": 1006
      },
      "alternate": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "ctor3",
                "optional": false,
                "typeAnnotation": null,
                "start": 1018,
                "end": 1023
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "p2",
                "optional": false,
                "typeAnnotation": null,
                "start": 1024,
                "end": 1026
              },
              "optional": false,
              "computed": false,
              "start": 1018,
              "end": 1026
            },
            "directive": null,
            "start": 1018,
            "end": 1027
          }
        ],
        "start": 1012,
        "end": 1035
      },
      "start": 958,
      "end": 1035
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
            "name": "ctor4",
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
                      "name": "C1",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1048,
                      "end": 1050
                    },
                    "typeArguments": null,
                    "start": 1048,
                    "end": 1050
                  },
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "C2",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1053,
                      "end": 1055
                    },
                    "typeArguments": null,
                    "start": 1053,
                    "end": 1055
                  },
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "C3",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1058,
                      "end": 1060
                    },
                    "typeArguments": null,
                    "start": 1058,
                    "end": 1060
                  }
                ],
                "start": 1048,
                "end": 1060
              },
              "start": 1046,
              "end": 1060
            },
            "start": 1041,
            "end": 1060
          },
          "init": null,
          "definite": false,
          "start": 1041,
          "end": 1060
        }
      ],
      "declare": false,
      "start": 1037,
      "end": 1061
    },
    {
      "type": "IfStatement",
      "test": {
        "type": "BinaryExpression",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "ctor4",
          "optional": false,
          "typeAnnotation": null,
          "start": 1066,
          "end": 1071
        },
        "operator": "instanceof",
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "C1",
          "optional": false,
          "typeAnnotation": null,
          "start": 1083,
          "end": 1085
        },
        "start": 1066,
        "end": 1085
      },
      "consequent": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "ctor4",
                "optional": false,
                "typeAnnotation": null,
                "start": 1093,
                "end": 1098
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "p1",
                "optional": false,
                "typeAnnotation": null,
                "start": 1099,
                "end": 1101
              },
              "optional": false,
              "computed": false,
              "start": 1093,
              "end": 1101
            },
            "directive": null,
            "start": 1093,
            "end": 1102
          }
        ],
        "start": 1087,
        "end": 1110
      },
      "alternate": {
        "type": "IfStatement",
        "test": {
          "type": "BinaryExpression",
          "left": {
            "type": "Identifier",
            "decorators": [],
            "name": "ctor4",
            "optional": false,
            "typeAnnotation": null,
            "start": 1120,
            "end": 1125
          },
          "operator": "instanceof",
          "right": {
            "type": "Identifier",
            "decorators": [],
            "name": "C2",
            "optional": false,
            "typeAnnotation": null,
            "start": 1137,
            "end": 1139
          },
          "start": 1120,
          "end": 1139
        },
        "consequent": {
          "type": "BlockStatement",
          "body": [
            {
              "type": "ExpressionStatement",
              "expression": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "ctor4",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1147,
                  "end": 1152
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "p2",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1153,
                  "end": 1155
                },
                "optional": false,
                "computed": false,
                "start": 1147,
                "end": 1155
              },
              "directive": null,
              "start": 1147,
              "end": 1156
            }
          ],
          "start": 1141,
          "end": 1164
        },
        "alternate": {
          "type": "BlockStatement",
          "body": [
            {
              "type": "ExpressionStatement",
              "expression": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "ctor4",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1176,
                  "end": 1181
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "p4",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1182,
                  "end": 1184
                },
                "optional": false,
                "computed": false,
                "start": 1176,
                "end": 1184
              },
              "directive": null,
              "start": 1176,
              "end": 1185
            }
          ],
          "start": 1170,
          "end": 1193
        },
        "start": 1116,
        "end": 1193
      },
      "start": 1062,
      "end": 1193
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
            "name": "ctor5",
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
                      "name": "C1",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1206,
                      "end": 1208
                    },
                    "typeArguments": null,
                    "start": 1206,
                    "end": 1208
                  },
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "D1",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1211,
                      "end": 1213
                    },
                    "typeArguments": null,
                    "start": 1211,
                    "end": 1213
                  },
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "C2",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1216,
                      "end": 1218
                    },
                    "typeArguments": null,
                    "start": 1216,
                    "end": 1218
                  }
                ],
                "start": 1206,
                "end": 1218
              },
              "start": 1204,
              "end": 1218
            },
            "start": 1199,
            "end": 1218
          },
          "init": null,
          "definite": false,
          "start": 1199,
          "end": 1218
        }
      ],
      "declare": false,
      "start": 1195,
      "end": 1219
    },
    {
      "type": "IfStatement",
      "test": {
        "type": "BinaryExpression",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "ctor5",
          "optional": false,
          "typeAnnotation": null,
          "start": 1224,
          "end": 1229
        },
        "operator": "instanceof",
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "C1",
          "optional": false,
          "typeAnnotation": null,
          "start": 1241,
          "end": 1243
        },
        "start": 1224,
        "end": 1243
      },
      "consequent": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "ctor5",
                "optional": false,
                "typeAnnotation": null,
                "start": 1251,
                "end": 1256
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "p1",
                "optional": false,
                "typeAnnotation": null,
                "start": 1257,
                "end": 1259
              },
              "optional": false,
              "computed": false,
              "start": 1251,
              "end": 1259
            },
            "directive": null,
            "start": 1251,
            "end": 1260
          }
        ],
        "start": 1245,
        "end": 1268
      },
      "alternate": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "ctor5",
                "optional": false,
                "typeAnnotation": null,
                "start": 1280,
                "end": 1285
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "p2",
                "optional": false,
                "typeAnnotation": null,
                "start": 1286,
                "end": 1288
              },
              "optional": false,
              "computed": false,
              "start": 1280,
              "end": 1288
            },
            "directive": null,
            "start": 1280,
            "end": 1289
          }
        ],
        "start": 1274,
        "end": 1297
      },
      "start": 1220,
      "end": 1297
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
            "name": "ctor6",
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
                      "name": "C1",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1310,
                      "end": 1312
                    },
                    "typeArguments": null,
                    "start": 1310,
                    "end": 1312
                  },
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "C2",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1315,
                      "end": 1317
                    },
                    "typeArguments": null,
                    "start": 1315,
                    "end": 1317
                  },
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "C3",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1320,
                      "end": 1322
                    },
                    "typeArguments": null,
                    "start": 1320,
                    "end": 1322
                  }
                ],
                "start": 1310,
                "end": 1322
              },
              "start": 1308,
              "end": 1322
            },
            "start": 1303,
            "end": 1322
          },
          "init": null,
          "definite": false,
          "start": 1303,
          "end": 1322
        }
      ],
      "declare": false,
      "start": 1299,
      "end": 1323
    },
    {
      "type": "IfStatement",
      "test": {
        "type": "LogicalExpression",
        "left": {
          "type": "BinaryExpression",
          "left": {
            "type": "Identifier",
            "decorators": [],
            "name": "ctor6",
            "optional": false,
            "typeAnnotation": null,
            "start": 1328,
            "end": 1333
          },
          "operator": "instanceof",
          "right": {
            "type": "Identifier",
            "decorators": [],
            "name": "C1",
            "optional": false,
            "typeAnnotation": null,
            "start": 1345,
            "end": 1347
          },
          "start": 1328,
          "end": 1347
        },
        "operator": "||",
        "right": {
          "type": "BinaryExpression",
          "left": {
            "type": "Identifier",
            "decorators": [],
            "name": "ctor6",
            "optional": false,
            "typeAnnotation": null,
            "start": 1351,
            "end": 1356
          },
          "operator": "instanceof",
          "right": {
            "type": "Identifier",
            "decorators": [],
            "name": "C2",
            "optional": false,
            "typeAnnotation": null,
            "start": 1368,
            "end": 1370
          },
          "start": 1351,
          "end": 1370
        },
        "start": 1328,
        "end": 1370
      },
      "consequent": {
        "type": "BlockStatement",
        "body": [],
        "start": 1372,
        "end": 1375
      },
      "alternate": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "ctor6",
                "optional": false,
                "typeAnnotation": null,
                "start": 1387,
                "end": 1392
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "p4",
                "optional": false,
                "typeAnnotation": null,
                "start": 1393,
                "end": 1395
              },
              "optional": false,
              "computed": false,
              "start": 1387,
              "end": 1395
            },
            "directive": null,
            "start": 1387,
            "end": 1396
          }
        ],
        "start": 1381,
        "end": 1404
      },
      "start": 1324,
      "end": 1404
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 329,
  "end": 1404
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "class",
    "start": 329,
    "end": 334
  },
  {
    "type": "Identifier",
    "value": "C1",
    "start": 335,
    "end": 337
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 338,
    "end": 339
  },
  {
    "type": "Identifier",
    "value": "p1",
    "start": 344,
    "end": 346
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 346,
    "end": 347
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 348,
    "end": 354
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 354,
    "end": 355
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 356,
    "end": 357
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 358,
    "end": 363
  },
  {
    "type": "Identifier",
    "value": "C2",
    "start": 364,
    "end": 366
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 367,
    "end": 368
  },
  {
    "type": "Identifier",
    "value": "p2",
    "start": 373,
    "end": 375
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 375,
    "end": 376
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 377,
    "end": 383
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 383,
    "end": 384
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 385,
    "end": 386
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 387,
    "end": 392
  },
  {
    "type": "Identifier",
    "value": "D1",
    "start": 393,
    "end": 395
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 396,
    "end": 403
  },
  {
    "type": "Identifier",
    "value": "C1",
    "start": 404,
    "end": 406
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 407,
    "end": 408
  },
  {
    "type": "Identifier",
    "value": "p3",
    "start": 413,
    "end": 415
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 415,
    "end": 416
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 417,
    "end": 423
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 423,
    "end": 424
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 425,
    "end": 426
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 427,
    "end": 432
  },
  {
    "type": "Identifier",
    "value": "C3",
    "start": 433,
    "end": 435
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 436,
    "end": 437
  },
  {
    "type": "Identifier",
    "value": "p4",
    "start": 442,
    "end": 444
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 444,
    "end": 445
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 446,
    "end": 452
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 452,
    "end": 453
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 454,
    "end": 455
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 456,
    "end": 459
  },
  {
    "type": "Identifier",
    "value": "str",
    "start": 460,
    "end": 463
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 463,
    "end": 464
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 465,
    "end": 471
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 471,
    "end": 472
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 473,
    "end": 476
  },
  {
    "type": "Identifier",
    "value": "num",
    "start": 477,
    "end": 480
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 480,
    "end": 481
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 482,
    "end": 488
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 488,
    "end": 489
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 490,
    "end": 493
  },
  {
    "type": "Identifier",
    "value": "strOrNum",
    "start": 494,
    "end": 502
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 502,
    "end": 503
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 504,
    "end": 510
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 511,
    "end": 512
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 513,
    "end": 519
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 519,
    "end": 520
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 522,
    "end": 525
  },
  {
    "type": "Identifier",
    "value": "ctor1",
    "start": 526,
    "end": 531
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 531,
    "end": 532
  },
  {
    "type": "Identifier",
    "value": "C1",
    "start": 533,
    "end": 535
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 536,
    "end": 537
  },
  {
    "type": "Identifier",
    "value": "C2",
    "start": 538,
    "end": 540
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 540,
    "end": 541
  },
  {
    "type": "Identifier",
    "value": "str",
    "start": 542,
    "end": 545
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 546,
    "end": 547
  },
  {
    "type": "Identifier",
    "value": "ctor1",
    "start": 548,
    "end": 553
  },
  {
    "type": "Keyword",
    "value": "instanceof",
    "start": 554,
    "end": 564
  },
  {
    "type": "Identifier",
    "value": "C1",
    "start": 565,
    "end": 567
  },
  {
    "type": "Punctuator",
    "value": "&&",
    "start": 568,
    "end": 570
  },
  {
    "type": "Identifier",
    "value": "ctor1",
    "start": 571,
    "end": 576
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 576,
    "end": 577
  },
  {
    "type": "Identifier",
    "value": "p1",
    "start": 577,
    "end": 579
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 579,
    "end": 580
  },
  {
    "type": "Identifier",
    "value": "num",
    "start": 587,
    "end": 590
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 591,
    "end": 592
  },
  {
    "type": "Identifier",
    "value": "ctor1",
    "start": 593,
    "end": 598
  },
  {
    "type": "Keyword",
    "value": "instanceof",
    "start": 599,
    "end": 609
  },
  {
    "type": "Identifier",
    "value": "C2",
    "start": 610,
    "end": 612
  },
  {
    "type": "Punctuator",
    "value": "&&",
    "start": 613,
    "end": 615
  },
  {
    "type": "Identifier",
    "value": "ctor1",
    "start": 616,
    "end": 621
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 621,
    "end": 622
  },
  {
    "type": "Identifier",
    "value": "p2",
    "start": 622,
    "end": 624
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 624,
    "end": 625
  },
  {
    "type": "Identifier",
    "value": "str",
    "start": 632,
    "end": 635
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 636,
    "end": 637
  },
  {
    "type": "Identifier",
    "value": "ctor1",
    "start": 638,
    "end": 643
  },
  {
    "type": "Keyword",
    "value": "instanceof",
    "start": 644,
    "end": 654
  },
  {
    "type": "Identifier",
    "value": "D1",
    "start": 655,
    "end": 657
  },
  {
    "type": "Punctuator",
    "value": "&&",
    "start": 658,
    "end": 660
  },
  {
    "type": "Identifier",
    "value": "ctor1",
    "start": 661,
    "end": 666
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 666,
    "end": 667
  },
  {
    "type": "Identifier",
    "value": "p1",
    "start": 667,
    "end": 669
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 669,
    "end": 670
  },
  {
    "type": "Identifier",
    "value": "num",
    "start": 677,
    "end": 680
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 681,
    "end": 682
  },
  {
    "type": "Identifier",
    "value": "ctor1",
    "start": 683,
    "end": 688
  },
  {
    "type": "Keyword",
    "value": "instanceof",
    "start": 689,
    "end": 699
  },
  {
    "type": "Identifier",
    "value": "D1",
    "start": 700,
    "end": 702
  },
  {
    "type": "Punctuator",
    "value": "&&",
    "start": 703,
    "end": 705
  },
  {
    "type": "Identifier",
    "value": "ctor1",
    "start": 706,
    "end": 711
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 711,
    "end": 712
  },
  {
    "type": "Identifier",
    "value": "p3",
    "start": 712,
    "end": 714
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 714,
    "end": 715
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 723,
    "end": 726
  },
  {
    "type": "Identifier",
    "value": "ctor2",
    "start": 727,
    "end": 732
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 732,
    "end": 733
  },
  {
    "type": "Identifier",
    "value": "C2",
    "start": 734,
    "end": 736
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 737,
    "end": 738
  },
  {
    "type": "Identifier",
    "value": "D1",
    "start": 739,
    "end": 741
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 741,
    "end": 742
  },
  {
    "type": "Identifier",
    "value": "num",
    "start": 743,
    "end": 746
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 747,
    "end": 748
  },
  {
    "type": "Identifier",
    "value": "ctor2",
    "start": 749,
    "end": 754
  },
  {
    "type": "Keyword",
    "value": "instanceof",
    "start": 755,
    "end": 765
  },
  {
    "type": "Identifier",
    "value": "C2",
    "start": 766,
    "end": 768
  },
  {
    "type": "Punctuator",
    "value": "&&",
    "start": 769,
    "end": 771
  },
  {
    "type": "Identifier",
    "value": "ctor2",
    "start": 772,
    "end": 777
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 777,
    "end": 778
  },
  {
    "type": "Identifier",
    "value": "p2",
    "start": 778,
    "end": 780
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 780,
    "end": 781
  },
  {
    "type": "Identifier",
    "value": "num",
    "start": 788,
    "end": 791
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 792,
    "end": 793
  },
  {
    "type": "Identifier",
    "value": "ctor2",
    "start": 794,
    "end": 799
  },
  {
    "type": "Keyword",
    "value": "instanceof",
    "start": 800,
    "end": 810
  },
  {
    "type": "Identifier",
    "value": "D1",
    "start": 811,
    "end": 813
  },
  {
    "type": "Punctuator",
    "value": "&&",
    "start": 814,
    "end": 816
  },
  {
    "type": "Identifier",
    "value": "ctor2",
    "start": 817,
    "end": 822
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 822,
    "end": 823
  },
  {
    "type": "Identifier",
    "value": "p3",
    "start": 823,
    "end": 825
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 825,
    "end": 826
  },
  {
    "type": "Identifier",
    "value": "str",
    "start": 833,
    "end": 836
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 837,
    "end": 838
  },
  {
    "type": "Identifier",
    "value": "ctor2",
    "start": 839,
    "end": 844
  },
  {
    "type": "Keyword",
    "value": "instanceof",
    "start": 845,
    "end": 855
  },
  {
    "type": "Identifier",
    "value": "D1",
    "start": 856,
    "end": 858
  },
  {
    "type": "Punctuator",
    "value": "&&",
    "start": 859,
    "end": 861
  },
  {
    "type": "Identifier",
    "value": "ctor2",
    "start": 862,
    "end": 867
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 867,
    "end": 868
  },
  {
    "type": "Identifier",
    "value": "p1",
    "start": 868,
    "end": 870
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 870,
    "end": 871
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 878,
    "end": 881
  },
  {
    "type": "Identifier",
    "value": "r2",
    "start": 882,
    "end": 884
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 884,
    "end": 885
  },
  {
    "type": "Identifier",
    "value": "D1",
    "start": 886,
    "end": 888
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 889,
    "end": 890
  },
  {
    "type": "Identifier",
    "value": "C2",
    "start": 891,
    "end": 893
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 894,
    "end": 895
  },
  {
    "type": "Identifier",
    "value": "ctor2",
    "start": 896,
    "end": 901
  },
  {
    "type": "Keyword",
    "value": "instanceof",
    "start": 902,
    "end": 912
  },
  {
    "type": "Identifier",
    "value": "C1",
    "start": 913,
    "end": 915
  },
  {
    "type": "Punctuator",
    "value": "&&",
    "start": 916,
    "end": 918
  },
  {
    "type": "Identifier",
    "value": "ctor2",
    "start": 919,
    "end": 924
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 924,
    "end": 925
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 938,
    "end": 941
  },
  {
    "type": "Identifier",
    "value": "ctor3",
    "start": 942,
    "end": 947
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 947,
    "end": 948
  },
  {
    "type": "Identifier",
    "value": "C1",
    "start": 949,
    "end": 951
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 952,
    "end": 953
  },
  {
    "type": "Identifier",
    "value": "C2",
    "start": 954,
    "end": 956
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 956,
    "end": 957
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 958,
    "end": 960
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 961,
    "end": 962
  },
  {
    "type": "Identifier",
    "value": "ctor3",
    "start": 962,
    "end": 967
  },
  {
    "type": "Keyword",
    "value": "instanceof",
    "start": 968,
    "end": 978
  },
  {
    "type": "Identifier",
    "value": "C1",
    "start": 979,
    "end": 981
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 981,
    "end": 982
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 983,
    "end": 984
  },
  {
    "type": "Identifier",
    "value": "ctor3",
    "start": 989,
    "end": 994
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 994,
    "end": 995
  },
  {
    "type": "Identifier",
    "value": "p1",
    "start": 995,
    "end": 997
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 997,
    "end": 998
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1005,
    "end": 1006
  },
  {
    "type": "Keyword",
    "value": "else",
    "start": 1007,
    "end": 1011
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1012,
    "end": 1013
  },
  {
    "type": "Identifier",
    "value": "ctor3",
    "start": 1018,
    "end": 1023
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1023,
    "end": 1024
  },
  {
    "type": "Identifier",
    "value": "p2",
    "start": 1024,
    "end": 1026
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1026,
    "end": 1027
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1034,
    "end": 1035
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1037,
    "end": 1040
  },
  {
    "type": "Identifier",
    "value": "ctor4",
    "start": 1041,
    "end": 1046
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1046,
    "end": 1047
  },
  {
    "type": "Identifier",
    "value": "C1",
    "start": 1048,
    "end": 1050
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 1051,
    "end": 1052
  },
  {
    "type": "Identifier",
    "value": "C2",
    "start": 1053,
    "end": 1055
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 1056,
    "end": 1057
  },
  {
    "type": "Identifier",
    "value": "C3",
    "start": 1058,
    "end": 1060
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1060,
    "end": 1061
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 1062,
    "end": 1064
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1065,
    "end": 1066
  },
  {
    "type": "Identifier",
    "value": "ctor4",
    "start": 1066,
    "end": 1071
  },
  {
    "type": "Keyword",
    "value": "instanceof",
    "start": 1072,
    "end": 1082
  },
  {
    "type": "Identifier",
    "value": "C1",
    "start": 1083,
    "end": 1085
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1085,
    "end": 1086
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1087,
    "end": 1088
  },
  {
    "type": "Identifier",
    "value": "ctor4",
    "start": 1093,
    "end": 1098
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1098,
    "end": 1099
  },
  {
    "type": "Identifier",
    "value": "p1",
    "start": 1099,
    "end": 1101
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1101,
    "end": 1102
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1109,
    "end": 1110
  },
  {
    "type": "Keyword",
    "value": "else",
    "start": 1111,
    "end": 1115
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 1116,
    "end": 1118
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1119,
    "end": 1120
  },
  {
    "type": "Identifier",
    "value": "ctor4",
    "start": 1120,
    "end": 1125
  },
  {
    "type": "Keyword",
    "value": "instanceof",
    "start": 1126,
    "end": 1136
  },
  {
    "type": "Identifier",
    "value": "C2",
    "start": 1137,
    "end": 1139
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1139,
    "end": 1140
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1141,
    "end": 1142
  },
  {
    "type": "Identifier",
    "value": "ctor4",
    "start": 1147,
    "end": 1152
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1152,
    "end": 1153
  },
  {
    "type": "Identifier",
    "value": "p2",
    "start": 1153,
    "end": 1155
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1155,
    "end": 1156
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1163,
    "end": 1164
  },
  {
    "type": "Keyword",
    "value": "else",
    "start": 1165,
    "end": 1169
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1170,
    "end": 1171
  },
  {
    "type": "Identifier",
    "value": "ctor4",
    "start": 1176,
    "end": 1181
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1181,
    "end": 1182
  },
  {
    "type": "Identifier",
    "value": "p4",
    "start": 1182,
    "end": 1184
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1184,
    "end": 1185
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1192,
    "end": 1193
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1195,
    "end": 1198
  },
  {
    "type": "Identifier",
    "value": "ctor5",
    "start": 1199,
    "end": 1204
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1204,
    "end": 1205
  },
  {
    "type": "Identifier",
    "value": "C1",
    "start": 1206,
    "end": 1208
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 1209,
    "end": 1210
  },
  {
    "type": "Identifier",
    "value": "D1",
    "start": 1211,
    "end": 1213
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 1214,
    "end": 1215
  },
  {
    "type": "Identifier",
    "value": "C2",
    "start": 1216,
    "end": 1218
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1218,
    "end": 1219
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 1220,
    "end": 1222
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1223,
    "end": 1224
  },
  {
    "type": "Identifier",
    "value": "ctor5",
    "start": 1224,
    "end": 1229
  },
  {
    "type": "Keyword",
    "value": "instanceof",
    "start": 1230,
    "end": 1240
  },
  {
    "type": "Identifier",
    "value": "C1",
    "start": 1241,
    "end": 1243
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1243,
    "end": 1244
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1245,
    "end": 1246
  },
  {
    "type": "Identifier",
    "value": "ctor5",
    "start": 1251,
    "end": 1256
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1256,
    "end": 1257
  },
  {
    "type": "Identifier",
    "value": "p1",
    "start": 1257,
    "end": 1259
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1259,
    "end": 1260
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1267,
    "end": 1268
  },
  {
    "type": "Keyword",
    "value": "else",
    "start": 1269,
    "end": 1273
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1274,
    "end": 1275
  },
  {
    "type": "Identifier",
    "value": "ctor5",
    "start": 1280,
    "end": 1285
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1285,
    "end": 1286
  },
  {
    "type": "Identifier",
    "value": "p2",
    "start": 1286,
    "end": 1288
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1288,
    "end": 1289
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1296,
    "end": 1297
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1299,
    "end": 1302
  },
  {
    "type": "Identifier",
    "value": "ctor6",
    "start": 1303,
    "end": 1308
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1308,
    "end": 1309
  },
  {
    "type": "Identifier",
    "value": "C1",
    "start": 1310,
    "end": 1312
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 1313,
    "end": 1314
  },
  {
    "type": "Identifier",
    "value": "C2",
    "start": 1315,
    "end": 1317
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 1318,
    "end": 1319
  },
  {
    "type": "Identifier",
    "value": "C3",
    "start": 1320,
    "end": 1322
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1322,
    "end": 1323
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 1324,
    "end": 1326
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1327,
    "end": 1328
  },
  {
    "type": "Identifier",
    "value": "ctor6",
    "start": 1328,
    "end": 1333
  },
  {
    "type": "Keyword",
    "value": "instanceof",
    "start": 1334,
    "end": 1344
  },
  {
    "type": "Identifier",
    "value": "C1",
    "start": 1345,
    "end": 1347
  },
  {
    "type": "Punctuator",
    "value": "||",
    "start": 1348,
    "end": 1350
  },
  {
    "type": "Identifier",
    "value": "ctor6",
    "start": 1351,
    "end": 1356
  },
  {
    "type": "Keyword",
    "value": "instanceof",
    "start": 1357,
    "end": 1367
  },
  {
    "type": "Identifier",
    "value": "C2",
    "start": 1368,
    "end": 1370
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1370,
    "end": 1371
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1372,
    "end": 1373
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1374,
    "end": 1375
  },
  {
    "type": "Keyword",
    "value": "else",
    "start": 1376,
    "end": 1380
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1381,
    "end": 1382
  },
  {
    "type": "Identifier",
    "value": "ctor6",
    "start": 1387,
    "end": 1392
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1392,
    "end": 1393
  },
  {
    "type": "Identifier",
    "value": "p4",
    "start": 1393,
    "end": 1395
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1395,
    "end": 1396
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1403,
    "end": 1404
  }
]
```
