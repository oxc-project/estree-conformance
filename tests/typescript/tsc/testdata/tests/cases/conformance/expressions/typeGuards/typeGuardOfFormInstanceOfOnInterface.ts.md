__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "C1",
        "optional": false,
        "typeAnnotation": null,
        "start": 339,
        "end": 341
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSCallSignatureDeclaration",
            "typeParameters": null,
            "params": [],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "C1",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 352,
                  "end": 354
                },
                "typeArguments": null,
                "start": 352,
                "end": 354
              },
              "start": 350,
              "end": 354
            },
            "start": 348,
            "end": 355
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "prototype",
              "optional": false,
              "typeAnnotation": null,
              "start": 360,
              "end": 369
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "C1",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 371,
                  "end": 373
                },
                "typeArguments": null,
                "start": 371,
                "end": 373
              },
              "start": 369,
              "end": 373
            },
            "accessibility": null,
            "static": false,
            "start": 360,
            "end": 374
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "p1",
              "optional": false,
              "typeAnnotation": null,
              "start": 379,
              "end": 381
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 383,
                "end": 389
              },
              "start": 381,
              "end": 389
            },
            "accessibility": null,
            "static": false,
            "start": 379,
            "end": 390
          }
        ],
        "start": 342,
        "end": 392
      },
      "declare": false,
      "start": 329,
      "end": 392
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "C2",
        "optional": false,
        "typeAnnotation": null,
        "start": 403,
        "end": 405
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSCallSignatureDeclaration",
            "typeParameters": null,
            "params": [],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "C2",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 416,
                  "end": 418
                },
                "typeArguments": null,
                "start": 416,
                "end": 418
              },
              "start": 414,
              "end": 418
            },
            "start": 412,
            "end": 419
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "prototype",
              "optional": false,
              "typeAnnotation": null,
              "start": 424,
              "end": 433
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "C2",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 435,
                  "end": 437
                },
                "typeArguments": null,
                "start": 435,
                "end": 437
              },
              "start": 433,
              "end": 437
            },
            "accessibility": null,
            "static": false,
            "start": 424,
            "end": 438
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "p2",
              "optional": false,
              "typeAnnotation": null,
              "start": 443,
              "end": 445
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 447,
                "end": 453
              },
              "start": 445,
              "end": 453
            },
            "accessibility": null,
            "static": false,
            "start": 443,
            "end": 454
          }
        ],
        "start": 406,
        "end": 456
      },
      "declare": false,
      "start": 393,
      "end": 456
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "D1",
        "optional": false,
        "typeAnnotation": null,
        "start": 467,
        "end": 469
      },
      "typeParameters": null,
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "expression": {
            "type": "Identifier",
            "decorators": [],
            "name": "C1",
            "optional": false,
            "typeAnnotation": null,
            "start": 478,
            "end": 480
          },
          "typeArguments": null,
          "start": 478,
          "end": 480
        }
      ],
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
              "name": "prototype",
              "optional": false,
              "typeAnnotation": null,
              "start": 487,
              "end": 496
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "D1",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 498,
                  "end": 500
                },
                "typeArguments": null,
                "start": 498,
                "end": 500
              },
              "start": 496,
              "end": 500
            },
            "accessibility": null,
            "static": false,
            "start": 487,
            "end": 501
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "p3",
              "optional": false,
              "typeAnnotation": null,
              "start": 506,
              "end": 508
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 510,
                "end": 516
              },
              "start": 508,
              "end": 516
            },
            "accessibility": null,
            "static": false,
            "start": 506,
            "end": 517
          }
        ],
        "start": 481,
        "end": 519
      },
      "declare": false,
      "start": 457,
      "end": 519
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
                "start": 529,
                "end": 535
              },
              "start": 527,
              "end": 535
            },
            "start": 524,
            "end": 535
          },
          "init": null,
          "definite": false,
          "start": 524,
          "end": 535
        }
      ],
      "declare": false,
      "start": 520,
      "end": 536
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
                "start": 546,
                "end": 552
              },
              "start": 544,
              "end": 552
            },
            "start": 541,
            "end": 552
          },
          "init": null,
          "definite": false,
          "start": 541,
          "end": 552
        }
      ],
      "declare": false,
      "start": 537,
      "end": 553
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
                    "start": 568,
                    "end": 574
                  },
                  {
                    "type": "TSNumberKeyword",
                    "start": 577,
                    "end": 583
                  }
                ],
                "start": 568,
                "end": 583
              },
              "start": 566,
              "end": 583
            },
            "start": 558,
            "end": 583
          },
          "init": null,
          "definite": false,
          "start": 558,
          "end": 583
        }
      ],
      "declare": false,
      "start": 554,
      "end": 584
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
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "C1",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 594,
                  "end": 596
                },
                "typeArguments": null,
                "start": 594,
                "end": 596
              },
              "start": 592,
              "end": 596
            },
            "start": 590,
            "end": 596
          },
          "init": null,
          "definite": false,
          "start": 590,
          "end": 596
        }
      ],
      "declare": false,
      "start": 586,
      "end": 597
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
                  "name": "C2",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 606,
                  "end": 608
                },
                "typeArguments": null,
                "start": 606,
                "end": 608
              },
              "start": 604,
              "end": 608
            },
            "start": 602,
            "end": 608
          },
          "init": null,
          "definite": false,
          "start": 602,
          "end": 608
        }
      ],
      "declare": false,
      "start": 598,
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
            "name": "d1",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "D1",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 618,
                  "end": 620
                },
                "typeArguments": null,
                "start": 618,
                "end": 620
              },
              "start": 616,
              "end": 620
            },
            "start": 614,
            "end": 620
          },
          "init": null,
          "definite": false,
          "start": 614,
          "end": 620
        }
      ],
      "declare": false,
      "start": 610,
      "end": 621
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
            "name": "c1Orc2",
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
                      "start": 634,
                      "end": 636
                    },
                    "typeArguments": null,
                    "start": 634,
                    "end": 636
                  },
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "C2",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 639,
                      "end": 641
                    },
                    "typeArguments": null,
                    "start": 639,
                    "end": 641
                  }
                ],
                "start": 634,
                "end": 641
              },
              "start": 632,
              "end": 641
            },
            "start": 626,
            "end": 641
          },
          "init": null,
          "definite": false,
          "start": 626,
          "end": 641
        }
      ],
      "declare": false,
      "start": 622,
      "end": 642
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
          "start": 643,
          "end": 646
        },
        "right": {
          "type": "LogicalExpression",
          "left": {
            "type": "BinaryExpression",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "c1Orc2",
              "optional": false,
              "typeAnnotation": null,
              "start": 649,
              "end": 655
            },
            "operator": "instanceof",
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "c1",
              "optional": false,
              "typeAnnotation": null,
              "start": 667,
              "end": 669
            },
            "start": 649,
            "end": 669
          },
          "operator": "&&",
          "right": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "c1Orc2",
              "optional": false,
              "typeAnnotation": null,
              "start": 673,
              "end": 679
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "p1",
              "optional": false,
              "typeAnnotation": null,
              "start": 680,
              "end": 682
            },
            "optional": false,
            "computed": false,
            "start": 673,
            "end": 682
          },
          "start": 649,
          "end": 682
        },
        "start": 643,
        "end": 682
      },
      "directive": null,
      "start": 643,
      "end": 683
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
          "start": 690,
          "end": 693
        },
        "right": {
          "type": "LogicalExpression",
          "left": {
            "type": "BinaryExpression",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "c1Orc2",
              "optional": false,
              "typeAnnotation": null,
              "start": 696,
              "end": 702
            },
            "operator": "instanceof",
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "c2",
              "optional": false,
              "typeAnnotation": null,
              "start": 714,
              "end": 716
            },
            "start": 696,
            "end": 716
          },
          "operator": "&&",
          "right": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "c1Orc2",
              "optional": false,
              "typeAnnotation": null,
              "start": 720,
              "end": 726
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "p2",
              "optional": false,
              "typeAnnotation": null,
              "start": 727,
              "end": 729
            },
            "optional": false,
            "computed": false,
            "start": 720,
            "end": 729
          },
          "start": 696,
          "end": 729
        },
        "start": 690,
        "end": 729
      },
      "directive": null,
      "start": 690,
      "end": 730
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
          "start": 737,
          "end": 740
        },
        "right": {
          "type": "LogicalExpression",
          "left": {
            "type": "BinaryExpression",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "c1Orc2",
              "optional": false,
              "typeAnnotation": null,
              "start": 743,
              "end": 749
            },
            "operator": "instanceof",
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "d1",
              "optional": false,
              "typeAnnotation": null,
              "start": 761,
              "end": 763
            },
            "start": 743,
            "end": 763
          },
          "operator": "&&",
          "right": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "c1Orc2",
              "optional": false,
              "typeAnnotation": null,
              "start": 767,
              "end": 773
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "p1",
              "optional": false,
              "typeAnnotation": null,
              "start": 774,
              "end": 776
            },
            "optional": false,
            "computed": false,
            "start": 767,
            "end": 776
          },
          "start": 743,
          "end": 776
        },
        "start": 737,
        "end": 776
      },
      "directive": null,
      "start": 737,
      "end": 777
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
          "start": 784,
          "end": 787
        },
        "right": {
          "type": "LogicalExpression",
          "left": {
            "type": "BinaryExpression",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "c1Orc2",
              "optional": false,
              "typeAnnotation": null,
              "start": 790,
              "end": 796
            },
            "operator": "instanceof",
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "d1",
              "optional": false,
              "typeAnnotation": null,
              "start": 808,
              "end": 810
            },
            "start": 790,
            "end": 810
          },
          "operator": "&&",
          "right": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "c1Orc2",
              "optional": false,
              "typeAnnotation": null,
              "start": 814,
              "end": 820
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "p3",
              "optional": false,
              "typeAnnotation": null,
              "start": 821,
              "end": 823
            },
            "optional": false,
            "computed": false,
            "start": 814,
            "end": 823
          },
          "start": 790,
          "end": 823
        },
        "start": 784,
        "end": 823
      },
      "directive": null,
      "start": 784,
      "end": 824
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
            "name": "c2Ord1",
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
                      "start": 844,
                      "end": 846
                    },
                    "typeArguments": null,
                    "start": 844,
                    "end": 846
                  },
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "D1",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 849,
                      "end": 851
                    },
                    "typeArguments": null,
                    "start": 849,
                    "end": 851
                  }
                ],
                "start": 844,
                "end": 851
              },
              "start": 842,
              "end": 851
            },
            "start": 836,
            "end": 851
          },
          "init": null,
          "definite": false,
          "start": 836,
          "end": 851
        }
      ],
      "declare": false,
      "start": 832,
      "end": 852
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
          "start": 853,
          "end": 856
        },
        "right": {
          "type": "LogicalExpression",
          "left": {
            "type": "BinaryExpression",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "c2Ord1",
              "optional": false,
              "typeAnnotation": null,
              "start": 859,
              "end": 865
            },
            "operator": "instanceof",
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "c2",
              "optional": false,
              "typeAnnotation": null,
              "start": 877,
              "end": 879
            },
            "start": 859,
            "end": 879
          },
          "operator": "&&",
          "right": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "c2Ord1",
              "optional": false,
              "typeAnnotation": null,
              "start": 883,
              "end": 889
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "p2",
              "optional": false,
              "typeAnnotation": null,
              "start": 890,
              "end": 892
            },
            "optional": false,
            "computed": false,
            "start": 883,
            "end": 892
          },
          "start": 859,
          "end": 892
        },
        "start": 853,
        "end": 892
      },
      "directive": null,
      "start": 853,
      "end": 893
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
          "start": 900,
          "end": 903
        },
        "right": {
          "type": "LogicalExpression",
          "left": {
            "type": "BinaryExpression",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "c2Ord1",
              "optional": false,
              "typeAnnotation": null,
              "start": 906,
              "end": 912
            },
            "operator": "instanceof",
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "d1",
              "optional": false,
              "typeAnnotation": null,
              "start": 924,
              "end": 926
            },
            "start": 906,
            "end": 926
          },
          "operator": "&&",
          "right": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "c2Ord1",
              "optional": false,
              "typeAnnotation": null,
              "start": 930,
              "end": 936
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "p3",
              "optional": false,
              "typeAnnotation": null,
              "start": 937,
              "end": 939
            },
            "optional": false,
            "computed": false,
            "start": 930,
            "end": 939
          },
          "start": 906,
          "end": 939
        },
        "start": 900,
        "end": 939
      },
      "directive": null,
      "start": 900,
      "end": 940
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
          "start": 947,
          "end": 950
        },
        "right": {
          "type": "LogicalExpression",
          "left": {
            "type": "BinaryExpression",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "c2Ord1",
              "optional": false,
              "typeAnnotation": null,
              "start": 953,
              "end": 959
            },
            "operator": "instanceof",
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "d1",
              "optional": false,
              "typeAnnotation": null,
              "start": 971,
              "end": 973
            },
            "start": 953,
            "end": 973
          },
          "operator": "&&",
          "right": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "c2Ord1",
              "optional": false,
              "typeAnnotation": null,
              "start": 977,
              "end": 983
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "p1",
              "optional": false,
              "typeAnnotation": null,
              "start": 984,
              "end": 986
            },
            "optional": false,
            "computed": false,
            "start": 977,
            "end": 986
          },
          "start": 953,
          "end": 986
        },
        "start": 947,
        "end": 986
      },
      "directive": null,
      "start": 947,
      "end": 987
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
                      "start": 1002,
                      "end": 1004
                    },
                    "typeArguments": null,
                    "start": 1002,
                    "end": 1004
                  },
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "C2",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1007,
                      "end": 1009
                    },
                    "typeArguments": null,
                    "start": 1007,
                    "end": 1009
                  }
                ],
                "start": 1002,
                "end": 1009
              },
              "start": 1000,
              "end": 1009
            },
            "start": 998,
            "end": 1009
          },
          "init": {
            "type": "LogicalExpression",
            "left": {
              "type": "BinaryExpression",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "c2Ord1",
                "optional": false,
                "typeAnnotation": null,
                "start": 1012,
                "end": 1018
              },
              "operator": "instanceof",
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "c1",
                "optional": false,
                "typeAnnotation": null,
                "start": 1030,
                "end": 1032
              },
              "start": 1012,
              "end": 1032
            },
            "operator": "&&",
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "c2Ord1",
              "optional": false,
              "typeAnnotation": null,
              "start": 1036,
              "end": 1042
            },
            "start": 1012,
            "end": 1042
          },
          "definite": false,
          "start": 998,
          "end": 1042
        }
      ],
      "declare": false,
      "start": 994,
      "end": 1043
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 329,
  "end": 1054
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "interface",
    "start": 329,
    "end": 338
  },
  {
    "type": "Identifier",
    "value": "C1",
    "start": 339,
    "end": 341
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 342,
    "end": 343
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 348,
    "end": 349
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 349,
    "end": 350
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 350,
    "end": 351
  },
  {
    "type": "Identifier",
    "value": "C1",
    "start": 352,
    "end": 354
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 354,
    "end": 355
  },
  {
    "type": "Identifier",
    "value": "prototype",
    "start": 360,
    "end": 369
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 369,
    "end": 370
  },
  {
    "type": "Identifier",
    "value": "C1",
    "start": 371,
    "end": 373
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 373,
    "end": 374
  },
  {
    "type": "Identifier",
    "value": "p1",
    "start": 379,
    "end": 381
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 381,
    "end": 382
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 383,
    "end": 389
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 389,
    "end": 390
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 391,
    "end": 392
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 393,
    "end": 402
  },
  {
    "type": "Identifier",
    "value": "C2",
    "start": 403,
    "end": 405
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 406,
    "end": 407
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 412,
    "end": 413
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 413,
    "end": 414
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 414,
    "end": 415
  },
  {
    "type": "Identifier",
    "value": "C2",
    "start": 416,
    "end": 418
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 418,
    "end": 419
  },
  {
    "type": "Identifier",
    "value": "prototype",
    "start": 424,
    "end": 433
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 433,
    "end": 434
  },
  {
    "type": "Identifier",
    "value": "C2",
    "start": 435,
    "end": 437
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 437,
    "end": 438
  },
  {
    "type": "Identifier",
    "value": "p2",
    "start": 443,
    "end": 445
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 445,
    "end": 446
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 447,
    "end": 453
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 453,
    "end": 454
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 455,
    "end": 456
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 457,
    "end": 466
  },
  {
    "type": "Identifier",
    "value": "D1",
    "start": 467,
    "end": 469
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 470,
    "end": 477
  },
  {
    "type": "Identifier",
    "value": "C1",
    "start": 478,
    "end": 480
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 481,
    "end": 482
  },
  {
    "type": "Identifier",
    "value": "prototype",
    "start": 487,
    "end": 496
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 496,
    "end": 497
  },
  {
    "type": "Identifier",
    "value": "D1",
    "start": 498,
    "end": 500
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 500,
    "end": 501
  },
  {
    "type": "Identifier",
    "value": "p3",
    "start": 506,
    "end": 508
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 508,
    "end": 509
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 510,
    "end": 516
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 516,
    "end": 517
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 518,
    "end": 519
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 520,
    "end": 523
  },
  {
    "type": "Identifier",
    "value": "str",
    "start": 524,
    "end": 527
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 527,
    "end": 528
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 529,
    "end": 535
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 535,
    "end": 536
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 537,
    "end": 540
  },
  {
    "type": "Identifier",
    "value": "num",
    "start": 541,
    "end": 544
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 544,
    "end": 545
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 546,
    "end": 552
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 552,
    "end": 553
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 554,
    "end": 557
  },
  {
    "type": "Identifier",
    "value": "strOrNum",
    "start": 558,
    "end": 566
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 566,
    "end": 567
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 568,
    "end": 574
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 575,
    "end": 576
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 577,
    "end": 583
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 583,
    "end": 584
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 586,
    "end": 589
  },
  {
    "type": "Identifier",
    "value": "c1",
    "start": 590,
    "end": 592
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 592,
    "end": 593
  },
  {
    "type": "Identifier",
    "value": "C1",
    "start": 594,
    "end": 596
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 596,
    "end": 597
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 598,
    "end": 601
  },
  {
    "type": "Identifier",
    "value": "c2",
    "start": 602,
    "end": 604
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 604,
    "end": 605
  },
  {
    "type": "Identifier",
    "value": "C2",
    "start": 606,
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
    "value": "d1",
    "start": 614,
    "end": 616
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 616,
    "end": 617
  },
  {
    "type": "Identifier",
    "value": "D1",
    "start": 618,
    "end": 620
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 620,
    "end": 621
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 622,
    "end": 625
  },
  {
    "type": "Identifier",
    "value": "c1Orc2",
    "start": 626,
    "end": 632
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 632,
    "end": 633
  },
  {
    "type": "Identifier",
    "value": "C1",
    "start": 634,
    "end": 636
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 637,
    "end": 638
  },
  {
    "type": "Identifier",
    "value": "C2",
    "start": 639,
    "end": 641
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 641,
    "end": 642
  },
  {
    "type": "Identifier",
    "value": "str",
    "start": 643,
    "end": 646
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 647,
    "end": 648
  },
  {
    "type": "Identifier",
    "value": "c1Orc2",
    "start": 649,
    "end": 655
  },
  {
    "type": "Keyword",
    "value": "instanceof",
    "start": 656,
    "end": 666
  },
  {
    "type": "Identifier",
    "value": "c1",
    "start": 667,
    "end": 669
  },
  {
    "type": "Punctuator",
    "value": "&&",
    "start": 670,
    "end": 672
  },
  {
    "type": "Identifier",
    "value": "c1Orc2",
    "start": 673,
    "end": 679
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 679,
    "end": 680
  },
  {
    "type": "Identifier",
    "value": "p1",
    "start": 680,
    "end": 682
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 682,
    "end": 683
  },
  {
    "type": "Identifier",
    "value": "num",
    "start": 690,
    "end": 693
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 694,
    "end": 695
  },
  {
    "type": "Identifier",
    "value": "c1Orc2",
    "start": 696,
    "end": 702
  },
  {
    "type": "Keyword",
    "value": "instanceof",
    "start": 703,
    "end": 713
  },
  {
    "type": "Identifier",
    "value": "c2",
    "start": 714,
    "end": 716
  },
  {
    "type": "Punctuator",
    "value": "&&",
    "start": 717,
    "end": 719
  },
  {
    "type": "Identifier",
    "value": "c1Orc2",
    "start": 720,
    "end": 726
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 726,
    "end": 727
  },
  {
    "type": "Identifier",
    "value": "p2",
    "start": 727,
    "end": 729
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 729,
    "end": 730
  },
  {
    "type": "Identifier",
    "value": "str",
    "start": 737,
    "end": 740
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 741,
    "end": 742
  },
  {
    "type": "Identifier",
    "value": "c1Orc2",
    "start": 743,
    "end": 749
  },
  {
    "type": "Keyword",
    "value": "instanceof",
    "start": 750,
    "end": 760
  },
  {
    "type": "Identifier",
    "value": "d1",
    "start": 761,
    "end": 763
  },
  {
    "type": "Punctuator",
    "value": "&&",
    "start": 764,
    "end": 766
  },
  {
    "type": "Identifier",
    "value": "c1Orc2",
    "start": 767,
    "end": 773
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 773,
    "end": 774
  },
  {
    "type": "Identifier",
    "value": "p1",
    "start": 774,
    "end": 776
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 776,
    "end": 777
  },
  {
    "type": "Identifier",
    "value": "num",
    "start": 784,
    "end": 787
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 788,
    "end": 789
  },
  {
    "type": "Identifier",
    "value": "c1Orc2",
    "start": 790,
    "end": 796
  },
  {
    "type": "Keyword",
    "value": "instanceof",
    "start": 797,
    "end": 807
  },
  {
    "type": "Identifier",
    "value": "d1",
    "start": 808,
    "end": 810
  },
  {
    "type": "Punctuator",
    "value": "&&",
    "start": 811,
    "end": 813
  },
  {
    "type": "Identifier",
    "value": "c1Orc2",
    "start": 814,
    "end": 820
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 820,
    "end": 821
  },
  {
    "type": "Identifier",
    "value": "p3",
    "start": 821,
    "end": 823
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 823,
    "end": 824
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 832,
    "end": 835
  },
  {
    "type": "Identifier",
    "value": "c2Ord1",
    "start": 836,
    "end": 842
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 842,
    "end": 843
  },
  {
    "type": "Identifier",
    "value": "C2",
    "start": 844,
    "end": 846
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 847,
    "end": 848
  },
  {
    "type": "Identifier",
    "value": "D1",
    "start": 849,
    "end": 851
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 851,
    "end": 852
  },
  {
    "type": "Identifier",
    "value": "num",
    "start": 853,
    "end": 856
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 857,
    "end": 858
  },
  {
    "type": "Identifier",
    "value": "c2Ord1",
    "start": 859,
    "end": 865
  },
  {
    "type": "Keyword",
    "value": "instanceof",
    "start": 866,
    "end": 876
  },
  {
    "type": "Identifier",
    "value": "c2",
    "start": 877,
    "end": 879
  },
  {
    "type": "Punctuator",
    "value": "&&",
    "start": 880,
    "end": 882
  },
  {
    "type": "Identifier",
    "value": "c2Ord1",
    "start": 883,
    "end": 889
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 889,
    "end": 890
  },
  {
    "type": "Identifier",
    "value": "p2",
    "start": 890,
    "end": 892
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 892,
    "end": 893
  },
  {
    "type": "Identifier",
    "value": "num",
    "start": 900,
    "end": 903
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 904,
    "end": 905
  },
  {
    "type": "Identifier",
    "value": "c2Ord1",
    "start": 906,
    "end": 912
  },
  {
    "type": "Keyword",
    "value": "instanceof",
    "start": 913,
    "end": 923
  },
  {
    "type": "Identifier",
    "value": "d1",
    "start": 924,
    "end": 926
  },
  {
    "type": "Punctuator",
    "value": "&&",
    "start": 927,
    "end": 929
  },
  {
    "type": "Identifier",
    "value": "c2Ord1",
    "start": 930,
    "end": 936
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 936,
    "end": 937
  },
  {
    "type": "Identifier",
    "value": "p3",
    "start": 937,
    "end": 939
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 939,
    "end": 940
  },
  {
    "type": "Identifier",
    "value": "str",
    "start": 947,
    "end": 950
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 951,
    "end": 952
  },
  {
    "type": "Identifier",
    "value": "c2Ord1",
    "start": 953,
    "end": 959
  },
  {
    "type": "Keyword",
    "value": "instanceof",
    "start": 960,
    "end": 970
  },
  {
    "type": "Identifier",
    "value": "d1",
    "start": 971,
    "end": 973
  },
  {
    "type": "Punctuator",
    "value": "&&",
    "start": 974,
    "end": 976
  },
  {
    "type": "Identifier",
    "value": "c2Ord1",
    "start": 977,
    "end": 983
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 983,
    "end": 984
  },
  {
    "type": "Identifier",
    "value": "p1",
    "start": 984,
    "end": 986
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 986,
    "end": 987
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 994,
    "end": 997
  },
  {
    "type": "Identifier",
    "value": "r2",
    "start": 998,
    "end": 1000
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1000,
    "end": 1001
  },
  {
    "type": "Identifier",
    "value": "D1",
    "start": 1002,
    "end": 1004
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 1005,
    "end": 1006
  },
  {
    "type": "Identifier",
    "value": "C2",
    "start": 1007,
    "end": 1009
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1010,
    "end": 1011
  },
  {
    "type": "Identifier",
    "value": "c2Ord1",
    "start": 1012,
    "end": 1018
  },
  {
    "type": "Keyword",
    "value": "instanceof",
    "start": 1019,
    "end": 1029
  },
  {
    "type": "Identifier",
    "value": "c1",
    "start": 1030,
    "end": 1032
  },
  {
    "type": "Punctuator",
    "value": "&&",
    "start": 1033,
    "end": 1035
  },
  {
    "type": "Identifier",
    "value": "c2Ord1",
    "start": 1036,
    "end": 1042
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1042,
    "end": 1043
  }
]
```
