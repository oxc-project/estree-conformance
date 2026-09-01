__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "VariableDeclaration",
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "opt",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSUnionType",
                "types": [
                  {
                    "type": "TSNumberKeyword",
                    "start": 17,
                    "end": 23
                  },
                  {
                    "type": "TSUndefinedKeyword",
                    "start": 26,
                    "end": 35
                  }
                ],
                "start": 17,
                "end": 35
              },
              "start": 15,
              "end": 35
            },
            "start": 12,
            "end": 35
          },
          "init": null,
          "definite": false,
          "start": 12,
          "end": 35
        }
      ],
      "declare": true,
      "start": 0,
      "end": 36
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
            "name": "test1",
            "optional": false,
            "typeAnnotation": null,
            "start": 92,
            "end": 97
          },
          "init": {
            "type": "LogicalExpression",
            "left": {
              "type": "ConditionalExpression",
              "test": {
                "type": "Identifier",
                "decorators": [],
                "name": "opt",
                "optional": false,
                "typeAnnotation": null,
                "start": 101,
                "end": 104
              },
              "consequent": {
                "type": "Identifier",
                "decorators": [],
                "name": "undefined",
                "optional": false,
                "typeAnnotation": null,
                "start": 107,
                "end": 116
              },
              "alternate": {
                "type": "Literal",
                "value": 32,
                "raw": "32",
                "start": 119,
                "end": 121
              },
              "start": 101,
              "end": 121
            },
            "operator": "??",
            "right": {
              "type": "Literal",
              "value": "possibly reached",
              "raw": "\"possibly reached\"",
              "start": 126,
              "end": 144
            },
            "start": 100,
            "end": 144
          },
          "definite": false,
          "start": 92,
          "end": 144
        }
      ],
      "declare": false,
      "start": 86,
      "end": 145
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
            "name": "test2",
            "optional": false,
            "typeAnnotation": null,
            "start": 186,
            "end": 191
          },
          "init": {
            "type": "LogicalExpression",
            "left": {
              "type": "ConditionalExpression",
              "test": {
                "type": "Identifier",
                "decorators": [],
                "name": "opt",
                "optional": false,
                "typeAnnotation": null,
                "start": 195,
                "end": 198
              },
              "consequent": {
                "type": "Identifier",
                "decorators": [],
                "name": "undefined",
                "optional": false,
                "typeAnnotation": null,
                "start": 201,
                "end": 210
              },
              "alternate": {
                "type": "Literal",
                "value": null,
                "raw": "null",
                "start": 213,
                "end": 217
              },
              "start": 195,
              "end": 217
            },
            "operator": "??",
            "right": {
              "type": "Literal",
              "value": "always reached",
              "raw": "\"always reached\"",
              "start": 222,
              "end": 238
            },
            "start": 194,
            "end": 238
          },
          "definite": false,
          "start": 186,
          "end": 238
        }
      ],
      "declare": false,
      "start": 180,
      "end": 239
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
            "name": "test3",
            "optional": false,
            "typeAnnotation": null,
            "start": 284,
            "end": 289
          },
          "init": {
            "type": "LogicalExpression",
            "left": {
              "type": "ConditionalExpression",
              "test": {
                "type": "Identifier",
                "decorators": [],
                "name": "opt",
                "optional": false,
                "typeAnnotation": null,
                "start": 293,
                "end": 296
              },
              "consequent": {
                "type": "Literal",
                "value": 132,
                "raw": "132",
                "start": 299,
                "end": 302
              },
              "alternate": {
                "type": "Literal",
                "value": 17,
                "raw": "17",
                "start": 305,
                "end": 307
              },
              "start": 293,
              "end": 307
            },
            "operator": "??",
            "right": {
              "type": "Literal",
              "value": "unreachable",
              "raw": "\"unreachable\"",
              "start": 312,
              "end": 325
            },
            "start": 292,
            "end": 325
          },
          "definite": false,
          "start": 284,
          "end": 325
        }
      ],
      "declare": false,
      "start": 278,
      "end": 326
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
            "name": "test4",
            "optional": false,
            "typeAnnotation": null,
            "start": 344,
            "end": 349
          },
          "init": {
            "type": "LogicalExpression",
            "left": {
              "type": "ConditionalExpression",
              "test": {
                "type": "Identifier",
                "decorators": [],
                "name": "opt",
                "optional": false,
                "typeAnnotation": null,
                "start": 353,
                "end": 356
              },
              "consequent": {
                "type": "Identifier",
                "decorators": [],
                "name": "undefined",
                "optional": false,
                "typeAnnotation": null,
                "start": 360,
                "end": 369
              },
              "alternate": {
                "type": "Literal",
                "value": 17,
                "raw": "17",
                "start": 374,
                "end": 376
              },
              "start": 353,
              "end": 377
            },
            "operator": "??",
            "right": {
              "type": "Literal",
              "value": 42,
              "raw": "42",
              "start": 382,
              "end": 384
            },
            "start": 352,
            "end": 384
          },
          "definite": false,
          "start": 344,
          "end": 384
        }
      ],
      "declare": false,
      "start": 338,
      "end": 385
    },
    {
      "type": "IfStatement",
      "test": {
        "type": "UnaryExpression",
        "operator": "!",
        "argument": {
          "type": "UnaryExpression",
          "operator": "!",
          "argument": {
            "type": "Literal",
            "value": true,
            "raw": "true",
            "start": 424,
            "end": 428
          },
          "prefix": true,
          "start": 423,
          "end": 428
        },
        "prefix": true,
        "start": 422,
        "end": 428
      },
      "consequent": {
        "type": "BlockStatement",
        "body": [],
        "start": 430,
        "end": 434
      },
      "alternate": null,
      "start": 418,
      "end": 434
    },
    {
      "type": "WhileStatement",
      "test": {
        "type": "Literal",
        "value": 0,
        "raw": "0",
        "start": 475,
        "end": 476
      },
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 478,
        "end": 481
      },
      "start": 468,
      "end": 481
    },
    {
      "type": "WhileStatement",
      "test": {
        "type": "Literal",
        "value": 1,
        "raw": "1",
        "start": 489,
        "end": 490
      },
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 492,
        "end": 495
      },
      "start": 482,
      "end": 495
    },
    {
      "type": "WhileStatement",
      "test": {
        "type": "Literal",
        "value": true,
        "raw": "true",
        "start": 503,
        "end": 507
      },
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 509,
        "end": 512
      },
      "start": 496,
      "end": 512
    },
    {
      "type": "WhileStatement",
      "test": {
        "type": "Literal",
        "value": false,
        "raw": "false",
        "start": 520,
        "end": 525
      },
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 527,
        "end": 530
      },
      "start": 513,
      "end": 530
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
            "name": "p01",
            "optional": false,
            "typeAnnotation": null,
            "start": 538,
            "end": 541
          },
          "init": {
            "type": "LogicalExpression",
            "left": {
              "type": "ObjectExpression",
              "properties": [],
              "start": 544,
              "end": 546
            },
            "operator": "??",
            "right": {
              "type": "Literal",
              "value": null,
              "raw": "null",
              "start": 550,
              "end": 554
            },
            "start": 544,
            "end": 554
          },
          "definite": false,
          "start": 538,
          "end": 554
        }
      ],
      "declare": false,
      "start": 532,
      "end": 555
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
            "name": "p02",
            "optional": false,
            "typeAnnotation": null,
            "start": 562,
            "end": 565
          },
          "init": {
            "type": "LogicalExpression",
            "left": {
              "type": "BinaryExpression",
              "left": {
                "type": "Literal",
                "value": 0,
                "raw": "0",
                "start": 568,
                "end": 569
              },
              "operator": ">",
              "right": {
                "type": "Literal",
                "value": 1,
                "raw": "1",
                "start": 572,
                "end": 573
              },
              "start": 568,
              "end": 573
            },
            "operator": "??",
            "right": {
              "type": "Literal",
              "value": null,
              "raw": "null",
              "start": 577,
              "end": 581
            },
            "start": 568,
            "end": 581
          },
          "definite": false,
          "start": 562,
          "end": 581
        }
      ],
      "declare": false,
      "start": 556,
      "end": 582
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
            "name": "p03",
            "optional": false,
            "typeAnnotation": null,
            "start": 589,
            "end": 592
          },
          "init": {
            "type": "LogicalExpression",
            "left": {
              "type": "Literal",
              "value": null,
              "raw": "null",
              "start": 595,
              "end": 599
            },
            "operator": "??",
            "right": {
              "type": "Literal",
              "value": 1,
              "raw": "1",
              "start": 603,
              "end": 604
            },
            "start": 595,
            "end": 604
          },
          "definite": false,
          "start": 589,
          "end": 604
        }
      ],
      "declare": false,
      "start": 583,
      "end": 605
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
            "name": "p04",
            "optional": false,
            "typeAnnotation": null,
            "start": 612,
            "end": 615
          },
          "init": {
            "type": "LogicalExpression",
            "left": {
              "type": "Literal",
              "value": null,
              "raw": "null",
              "start": 618,
              "end": 622
            },
            "operator": "??",
            "right": {
              "type": "Literal",
              "value": null,
              "raw": "null",
              "start": 626,
              "end": 630
            },
            "start": 618,
            "end": 630
          },
          "definite": false,
          "start": 612,
          "end": 630
        }
      ],
      "declare": false,
      "start": 606,
      "end": 631
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
            "name": "p05",
            "optional": false,
            "typeAnnotation": null,
            "start": 638,
            "end": 641
          },
          "init": {
            "type": "LogicalExpression",
            "left": {
              "type": "ClassExpression",
              "decorators": [],
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "foo",
                "optional": false,
                "typeAnnotation": null,
                "start": 651,
                "end": 654
              },
              "typeParameters": null,
              "superClass": null,
              "superTypeArguments": null,
              "implements": [],
              "body": {
                "type": "ClassBody",
                "body": [],
                "start": 655,
                "end": 658
              },
              "abstract": false,
              "declare": false,
              "start": 645,
              "end": 658
            },
            "operator": "&&",
            "right": {
              "type": "Literal",
              "value": null,
              "raw": "null",
              "start": 663,
              "end": 667
            },
            "start": 644,
            "end": 667
          },
          "definite": false,
          "start": 638,
          "end": 667
        }
      ],
      "declare": false,
      "start": 632,
      "end": 668
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
            "name": "p06",
            "optional": false,
            "typeAnnotation": null,
            "start": 675,
            "end": 678
          },
          "init": {
            "type": "LogicalExpression",
            "left": {
              "type": "ClassExpression",
              "decorators": [],
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "foo",
                "optional": false,
                "typeAnnotation": null,
                "start": 688,
                "end": 691
              },
              "typeParameters": null,
              "superClass": null,
              "superTypeArguments": null,
              "implements": [],
              "body": {
                "type": "ClassBody",
                "body": [],
                "start": 692,
                "end": 695
              },
              "abstract": false,
              "declare": false,
              "start": 682,
              "end": 695
            },
            "operator": "||",
            "right": {
              "type": "Literal",
              "value": null,
              "raw": "null",
              "start": 700,
              "end": 704
            },
            "start": 681,
            "end": 704
          },
          "definite": false,
          "start": 675,
          "end": 704
        }
      ],
      "declare": false,
      "start": 669,
      "end": 705
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
            "name": "p07",
            "optional": false,
            "typeAnnotation": null,
            "start": 712,
            "end": 715
          },
          "init": {
            "type": "LogicalExpression",
            "left": {
              "type": "LogicalExpression",
              "left": {
                "type": "Literal",
                "value": null,
                "raw": "null",
                "start": 718,
                "end": 722
              },
              "operator": "??",
              "right": {
                "type": "Literal",
                "value": null,
                "raw": "null",
                "start": 726,
                "end": 730
              },
              "start": 718,
              "end": 730
            },
            "operator": "??",
            "right": {
              "type": "Literal",
              "value": null,
              "raw": "null",
              "start": 734,
              "end": 738
            },
            "start": 718,
            "end": 738
          },
          "definite": false,
          "start": 712,
          "end": 738
        }
      ],
      "declare": false,
      "start": 706,
      "end": 739
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
            "name": "p08",
            "optional": false,
            "typeAnnotation": null,
            "start": 746,
            "end": 749
          },
          "init": {
            "type": "LogicalExpression",
            "left": {
              "type": "LogicalExpression",
              "left": {
                "type": "Literal",
                "value": null,
                "raw": "null",
                "start": 752,
                "end": 756
              },
              "operator": "??",
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "opt",
                "optional": false,
                "typeAnnotation": null,
                "start": 760,
                "end": 763
              },
              "start": 752,
              "end": 763
            },
            "operator": "??",
            "right": {
              "type": "Literal",
              "value": null,
              "raw": "null",
              "start": 767,
              "end": 771
            },
            "start": 752,
            "end": 771
          },
          "definite": false,
          "start": 746,
          "end": 771
        }
      ],
      "declare": false,
      "start": 740,
      "end": 772
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
            "name": "p09",
            "optional": false,
            "typeAnnotation": null,
            "start": 779,
            "end": 782
          },
          "init": {
            "type": "LogicalExpression",
            "left": {
              "type": "LogicalExpression",
              "left": {
                "type": "Literal",
                "value": null,
                "raw": "null",
                "start": 785,
                "end": 789
              },
              "operator": "??",
              "right": {
                "type": "ConditionalExpression",
                "test": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "opt",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 794,
                  "end": 797
                },
                "consequent": {
                  "type": "Literal",
                  "value": null,
                  "raw": "null",
                  "start": 800,
                  "end": 804
                },
                "alternate": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "undefined",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 807,
                  "end": 816
                },
                "start": 794,
                "end": 816
              },
              "start": 785,
              "end": 817
            },
            "operator": "??",
            "right": {
              "type": "Literal",
              "value": null,
              "raw": "null",
              "start": 821,
              "end": 825
            },
            "start": 785,
            "end": 825
          },
          "definite": false,
          "start": 779,
          "end": 825
        }
      ],
      "declare": false,
      "start": 773,
      "end": 826
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
            "name": "p10",
            "optional": false,
            "typeAnnotation": null,
            "start": 834,
            "end": 837
          },
          "init": {
            "type": "LogicalExpression",
            "left": {
              "type": "LogicalExpression",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "opt",
                "optional": false,
                "typeAnnotation": null,
                "start": 840,
                "end": 843
              },
              "operator": "??",
              "right": {
                "type": "Literal",
                "value": null,
                "raw": "null",
                "start": 847,
                "end": 851
              },
              "start": 840,
              "end": 851
            },
            "operator": "??",
            "right": {
              "type": "Literal",
              "value": 1,
              "raw": "1",
              "start": 855,
              "end": 856
            },
            "start": 840,
            "end": 856
          },
          "definite": false,
          "start": 834,
          "end": 856
        }
      ],
      "declare": false,
      "start": 828,
      "end": 857
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
            "name": "p11",
            "optional": false,
            "typeAnnotation": null,
            "start": 864,
            "end": 867
          },
          "init": {
            "type": "LogicalExpression",
            "left": {
              "type": "LogicalExpression",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "opt",
                "optional": false,
                "typeAnnotation": null,
                "start": 870,
                "end": 873
              },
              "operator": "??",
              "right": {
                "type": "Literal",
                "value": null,
                "raw": "null",
                "start": 877,
                "end": 881
              },
              "start": 870,
              "end": 881
            },
            "operator": "??",
            "right": {
              "type": "Literal",
              "value": null,
              "raw": "null",
              "start": 885,
              "end": 889
            },
            "start": 870,
            "end": 889
          },
          "definite": false,
          "start": 864,
          "end": 889
        }
      ],
      "declare": false,
      "start": 858,
      "end": 890
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
            "name": "p12",
            "optional": false,
            "typeAnnotation": null,
            "start": 897,
            "end": 900
          },
          "init": {
            "type": "LogicalExpression",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "opt",
              "optional": false,
              "typeAnnotation": null,
              "start": 903,
              "end": 906
            },
            "operator": "??",
            "right": {
              "type": "LogicalExpression",
              "left": {
                "type": "Literal",
                "value": null,
                "raw": "null",
                "start": 911,
                "end": 915
              },
              "operator": "??",
              "right": {
                "type": "Literal",
                "value": 1,
                "raw": "1",
                "start": 919,
                "end": 920
              },
              "start": 911,
              "end": 920
            },
            "start": 903,
            "end": 921
          },
          "definite": false,
          "start": 897,
          "end": 921
        }
      ],
      "declare": false,
      "start": 891,
      "end": 922
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
            "name": "p13",
            "optional": false,
            "typeAnnotation": null,
            "start": 929,
            "end": 932
          },
          "init": {
            "type": "LogicalExpression",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "opt",
              "optional": false,
              "typeAnnotation": null,
              "start": 935,
              "end": 938
            },
            "operator": "??",
            "right": {
              "type": "LogicalExpression",
              "left": {
                "type": "Literal",
                "value": null,
                "raw": "null",
                "start": 943,
                "end": 947
              },
              "operator": "??",
              "right": {
                "type": "Literal",
                "value": null,
                "raw": "null",
                "start": 951,
                "end": 955
              },
              "start": 943,
              "end": 955
            },
            "start": 935,
            "end": 956
          },
          "definite": false,
          "start": 929,
          "end": 956
        }
      ],
      "declare": false,
      "start": 923,
      "end": 957
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
            "name": "p14",
            "optional": false,
            "typeAnnotation": null,
            "start": 964,
            "end": 967
          },
          "init": {
            "type": "LogicalExpression",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "opt",
              "optional": false,
              "typeAnnotation": null,
              "start": 970,
              "end": 973
            },
            "operator": "??",
            "right": {
              "type": "LogicalExpression",
              "left": {
                "type": "LogicalExpression",
                "left": {
                  "type": "Literal",
                  "value": null,
                  "raw": "null",
                  "start": 978,
                  "end": 982
                },
                "operator": "??",
                "right": {
                  "type": "Literal",
                  "value": null,
                  "raw": "null",
                  "start": 986,
                  "end": 990
                },
                "start": 978,
                "end": 990
              },
              "operator": "??",
              "right": {
                "type": "Literal",
                "value": null,
                "raw": "null",
                "start": 994,
                "end": 998
              },
              "start": 978,
              "end": 998
            },
            "start": 970,
            "end": 999
          },
          "definite": false,
          "start": 964,
          "end": 999
        }
      ],
      "declare": false,
      "start": 958,
      "end": 1000
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
            "name": "p15",
            "optional": false,
            "typeAnnotation": null,
            "start": 1007,
            "end": 1010
          },
          "init": {
            "type": "LogicalExpression",
            "left": {
              "type": "LogicalExpression",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "opt",
                "optional": false,
                "typeAnnotation": null,
                "start": 1013,
                "end": 1016
              },
              "operator": "??",
              "right": {
                "type": "ConditionalExpression",
                "test": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "opt",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1021,
                  "end": 1024
                },
                "consequent": {
                  "type": "Literal",
                  "value": null,
                  "raw": "null",
                  "start": 1027,
                  "end": 1031
                },
                "alternate": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "undefined",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1034,
                  "end": 1043
                },
                "start": 1021,
                "end": 1043
              },
              "start": 1013,
              "end": 1044
            },
            "operator": "??",
            "right": {
              "type": "Literal",
              "value": null,
              "raw": "null",
              "start": 1048,
              "end": 1052
            },
            "start": 1013,
            "end": 1052
          },
          "definite": false,
          "start": 1007,
          "end": 1052
        }
      ],
      "declare": false,
      "start": 1001,
      "end": 1053
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
            "name": "p16",
            "optional": false,
            "typeAnnotation": null,
            "start": 1060,
            "end": 1063
          },
          "init": {
            "type": "LogicalExpression",
            "left": {
              "type": "LogicalExpression",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "opt",
                "optional": false,
                "typeAnnotation": null,
                "start": 1066,
                "end": 1069
              },
              "operator": "??",
              "right": {
                "type": "Literal",
                "value": 1,
                "raw": "1",
                "start": 1073,
                "end": 1074
              },
              "start": 1066,
              "end": 1074
            },
            "operator": "??",
            "right": {
              "type": "Literal",
              "value": 2,
              "raw": "2",
              "start": 1078,
              "end": 1079
            },
            "start": 1066,
            "end": 1079
          },
          "definite": false,
          "start": 1060,
          "end": 1079
        }
      ],
      "declare": false,
      "start": 1054,
      "end": 1080
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
            "name": "p17",
            "optional": false,
            "typeAnnotation": null,
            "start": 1087,
            "end": 1090
          },
          "init": {
            "type": "LogicalExpression",
            "left": {
              "type": "LogicalExpression",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "opt",
                "optional": false,
                "typeAnnotation": null,
                "start": 1093,
                "end": 1096
              },
              "operator": "??",
              "right": {
                "type": "ConditionalExpression",
                "test": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "opt",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1101,
                  "end": 1104
                },
                "consequent": {
                  "type": "Literal",
                  "value": 1,
                  "raw": "1",
                  "start": 1107,
                  "end": 1108
                },
                "alternate": {
                  "type": "Literal",
                  "value": 2,
                  "raw": "2",
                  "start": 1111,
                  "end": 1112
                },
                "start": 1101,
                "end": 1112
              },
              "start": 1093,
              "end": 1113
            },
            "operator": "??",
            "right": {
              "type": "Literal",
              "value": 3,
              "raw": "3",
              "start": 1117,
              "end": 1118
            },
            "start": 1093,
            "end": 1118
          },
          "definite": false,
          "start": 1087,
          "end": 1118
        }
      ],
      "declare": false,
      "start": 1081,
      "end": 1119
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
            "name": "p21",
            "optional": false,
            "typeAnnotation": null,
            "start": 1127,
            "end": 1130
          },
          "init": {
            "type": "LogicalExpression",
            "left": {
              "type": "LogicalExpression",
              "left": {
                "type": "LogicalExpression",
                "left": {
                  "type": "Literal",
                  "value": null,
                  "raw": "null",
                  "start": 1133,
                  "end": 1137
                },
                "operator": "??",
                "right": {
                  "type": "Literal",
                  "value": null,
                  "raw": "null",
                  "start": 1141,
                  "end": 1145
                },
                "start": 1133,
                "end": 1145
              },
              "operator": "??",
              "right": {
                "type": "Literal",
                "value": null,
                "raw": "null",
                "start": 1149,
                "end": 1153
              },
              "start": 1133,
              "end": 1153
            },
            "operator": "??",
            "right": {
              "type": "Literal",
              "value": null,
              "raw": "null",
              "start": 1157,
              "end": 1161
            },
            "start": 1133,
            "end": 1161
          },
          "definite": false,
          "start": 1127,
          "end": 1161
        }
      ],
      "declare": false,
      "start": 1121,
      "end": 1162
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
            "name": "p22",
            "optional": false,
            "typeAnnotation": null,
            "start": 1169,
            "end": 1172
          },
          "init": {
            "type": "LogicalExpression",
            "left": {
              "type": "LogicalExpression",
              "left": {
                "type": "Literal",
                "value": null,
                "raw": "null",
                "start": 1175,
                "end": 1179
              },
              "operator": "??",
              "right": {
                "type": "Literal",
                "value": 1,
                "raw": "1",
                "start": 1183,
                "end": 1184
              },
              "start": 1175,
              "end": 1184
            },
            "operator": "??",
            "right": {
              "type": "Literal",
              "value": 1,
              "raw": "1",
              "start": 1188,
              "end": 1189
            },
            "start": 1175,
            "end": 1189
          },
          "definite": false,
          "start": 1169,
          "end": 1189
        }
      ],
      "declare": false,
      "start": 1163,
      "end": 1190
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
            "name": "p23",
            "optional": false,
            "typeAnnotation": null,
            "start": 1197,
            "end": 1200
          },
          "init": {
            "type": "LogicalExpression",
            "left": {
              "type": "LogicalExpression",
              "left": {
                "type": "Literal",
                "value": null,
                "raw": "null",
                "start": 1203,
                "end": 1207
              },
              "operator": "??",
              "right": {
                "type": "ConditionalExpression",
                "test": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "opt",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1212,
                  "end": 1215
                },
                "consequent": {
                  "type": "Literal",
                  "value": 1,
                  "raw": "1",
                  "start": 1218,
                  "end": 1219
                },
                "alternate": {
                  "type": "Literal",
                  "value": 2,
                  "raw": "2",
                  "start": 1222,
                  "end": 1223
                },
                "start": 1212,
                "end": 1223
              },
              "start": 1203,
              "end": 1224
            },
            "operator": "??",
            "right": {
              "type": "Literal",
              "value": 1,
              "raw": "1",
              "start": 1228,
              "end": 1229
            },
            "start": 1203,
            "end": 1229
          },
          "definite": false,
          "start": 1197,
          "end": 1229
        }
      ],
      "declare": false,
      "start": 1191,
      "end": 1230
    },
    {
      "type": "WhileStatement",
      "test": {
        "type": "TSAsExpression",
        "expression": {
          "type": "ObjectExpression",
          "properties": [],
          "start": 1265,
          "end": 1267
        },
        "typeAnnotation": {
          "type": "TSAnyKeyword",
          "start": 1271,
          "end": 1274
        },
        "start": 1265,
        "end": 1274
      },
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 1276,
        "end": 1279
      },
      "start": 1258,
      "end": 1279
    },
    {
      "type": "WhileStatement",
      "test": {
        "type": "TSSatisfiesExpression",
        "expression": {
          "type": "ObjectExpression",
          "properties": [],
          "start": 1287,
          "end": 1289
        },
        "typeAnnotation": {
          "type": "TSUnknownKeyword",
          "start": 1300,
          "end": 1307
        },
        "start": 1287,
        "end": 1307
      },
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 1309,
        "end": 1312
      },
      "start": 1280,
      "end": 1312
    },
    {
      "type": "WhileStatement",
      "test": {
        "type": "TSTypeAssertion",
        "typeAnnotation": {
          "type": "TSAnyKeyword",
          "start": 1322,
          "end": 1325
        },
        "expression": {
          "type": "ObjectExpression",
          "properties": [],
          "start": 1327,
          "end": 1329
        },
        "start": 1321,
        "end": 1330
      },
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 1333,
        "end": 1336
      },
      "start": 1313,
      "end": 1336
    },
    {
      "type": "WhileStatement",
      "test": {
        "type": "ObjectExpression",
        "properties": [],
        "start": 1346,
        "end": 1348
      },
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 1352,
        "end": 1355
      },
      "start": 1337,
      "end": 1355
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
            "name": "cond",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 1375,
                "end": 1378
              },
              "start": 1373,
              "end": 1378
            },
            "start": 1369,
            "end": 1378
          },
          "init": null,
          "definite": false,
          "start": 1369,
          "end": 1378
        }
      ],
      "declare": true,
      "start": 1357,
      "end": 1379
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "console",
            "optional": false,
            "typeAnnotation": null,
            "start": 1397,
            "end": 1404
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "log",
            "optional": false,
            "typeAnnotation": null,
            "start": 1405,
            "end": 1408
          },
          "optional": false,
          "computed": false,
          "start": 1397,
          "end": 1408
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "LogicalExpression",
            "left": {
              "type": "LogicalExpression",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "cond",
                "optional": false,
                "typeAnnotation": null,
                "start": 1410,
                "end": 1414
              },
              "operator": "||",
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "undefined",
                "optional": false,
                "typeAnnotation": null,
                "start": 1418,
                "end": 1427
              },
              "start": 1410,
              "end": 1427
            },
            "operator": "&&",
            "right": {
              "type": "BinaryExpression",
              "left": {
                "type": "Literal",
                "value": 1,
                "raw": "1",
                "start": 1432,
                "end": 1433
              },
              "operator": "/",
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "cond",
                "optional": false,
                "typeAnnotation": null,
                "start": 1436,
                "end": 1440
              },
              "start": 1432,
              "end": 1440
            },
            "start": 1409,
            "end": 1440
          }
        ],
        "optional": false,
        "start": 1397,
        "end": 1441
      },
      "directive": null,
      "start": 1397,
      "end": 1442
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo",
        "optional": false,
        "typeAnnotation": null,
        "start": 1453,
        "end": 1456
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "this",
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
                    "name": "Object",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1463,
                    "end": 1469
                  },
                  "typeArguments": null,
                  "start": 1463,
                  "end": 1469
                },
                {
                  "type": "TSUndefinedKeyword",
                  "start": 1472,
                  "end": 1481
                }
              ],
              "start": 1463,
              "end": 1481
            },
            "start": 1461,
            "end": 1481
          },
          "start": 1457,
          "end": 1481
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "LogicalExpression",
              "left": {
                "type": "ThisExpression",
                "start": 1516,
                "end": 1520
              },
              "operator": "??",
              "right": {
                "type": "Literal",
                "value": 0,
                "raw": "0",
                "start": 1524,
                "end": 1525
              },
              "start": 1516,
              "end": 1525
            },
            "start": 1509,
            "end": 1526
          }
        ],
        "start": 1483,
        "end": 1528
      },
      "expression": false,
      "start": 1444,
      "end": 1528
    },
    {
      "type": "BlockStatement",
      "body": [
        {
          "type": "VariableDeclaration",
          "kind": "const",
          "declarations": [
            {
              "type": "VariableDeclarator",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "maybe",
                "optional": false,
                "typeAnnotation": null,
                "start": 1596,
                "end": 1601
              },
              "init": {
                "type": "TSAsExpression",
                "expression": {
                  "type": "Literal",
                  "value": null,
                  "raw": "null",
                  "start": 1604,
                  "end": 1608
                },
                "typeAnnotation": {
                  "type": "TSUnionType",
                  "types": [
                    {
                      "type": "TSLiteralType",
                      "literal": {
                        "type": "Literal",
                        "value": true,
                        "raw": "true",
                        "start": 1612,
                        "end": 1616
                      },
                      "start": 1612,
                      "end": 1616
                    },
                    {
                      "type": "TSNullKeyword",
                      "start": 1619,
                      "end": 1623
                    }
                  ],
                  "start": 1612,
                  "end": 1623
                },
                "start": 1604,
                "end": 1623
              },
              "definite": false,
              "start": 1596,
              "end": 1623
            }
          ],
          "declare": false,
          "start": 1590,
          "end": 1624
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
                "name": "i",
                "optional": false,
                "typeAnnotation": null,
                "start": 1631,
                "end": 1632
              },
              "init": {
                "type": "Literal",
                "value": 0,
                "raw": "0",
                "start": 1635,
                "end": 1636
              },
              "definite": false,
              "start": 1631,
              "end": 1636
            }
          ],
          "declare": false,
          "start": 1627,
          "end": 1637
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
                "name": "d",
                "optional": false,
                "typeAnnotation": null,
                "start": 1646,
                "end": 1647
              },
              "init": {
                "type": "LogicalExpression",
                "left": {
                  "type": "SequenceExpression",
                  "expressions": [
                    {
                      "type": "UpdateExpression",
                      "operator": "++",
                      "prefix": false,
                      "argument": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "i",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1651,
                        "end": 1652
                      },
                      "start": 1651,
                      "end": 1654
                    },
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "maybe",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1656,
                      "end": 1661
                    }
                  ],
                  "start": 1651,
                  "end": 1661
                },
                "operator": "??",
                "right": {
                  "type": "Literal",
                  "value": true,
                  "raw": "true",
                  "start": 1666,
                  "end": 1670
                },
                "start": 1650,
                "end": 1670
              },
              "definite": false,
              "start": 1646,
              "end": 1670
            }
          ],
          "declare": false,
          "start": 1640,
          "end": 1671
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
                "name": "e",
                "optional": false,
                "typeAnnotation": null,
                "start": 1686,
                "end": 1687
              },
              "init": {
                "type": "LogicalExpression",
                "left": {
                  "type": "SequenceExpression",
                  "expressions": [
                    {
                      "type": "UpdateExpression",
                      "operator": "++",
                      "prefix": false,
                      "argument": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "i",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1691,
                        "end": 1692
                      },
                      "start": 1691,
                      "end": 1694
                    },
                    {
                      "type": "UpdateExpression",
                      "operator": "++",
                      "prefix": false,
                      "argument": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "i",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1696,
                        "end": 1697
                      },
                      "start": 1696,
                      "end": 1699
                    }
                  ],
                  "start": 1691,
                  "end": 1699
                },
                "operator": "??",
                "right": {
                  "type": "Literal",
                  "value": true,
                  "raw": "true",
                  "start": 1704,
                  "end": 1708
                },
                "start": 1690,
                "end": 1708
              },
              "definite": false,
              "start": 1686,
              "end": 1708
            }
          ],
          "declare": false,
          "start": 1680,
          "end": 1709
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
                "name": "f",
                "optional": false,
                "typeAnnotation": null,
                "start": 1727,
                "end": 1728
              },
              "init": {
                "type": "LogicalExpression",
                "left": {
                  "type": "SequenceExpression",
                  "expressions": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "maybe",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1732,
                      "end": 1737
                    },
                    {
                      "type": "UpdateExpression",
                      "operator": "++",
                      "prefix": false,
                      "argument": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "i",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1739,
                        "end": 1740
                      },
                      "start": 1739,
                      "end": 1742
                    }
                  ],
                  "start": 1732,
                  "end": 1742
                },
                "operator": "??",
                "right": {
                  "type": "Literal",
                  "value": true,
                  "raw": "true",
                  "start": 1747,
                  "end": 1751
                },
                "start": 1731,
                "end": 1751
              },
              "definite": false,
              "start": 1727,
              "end": 1751
            }
          ],
          "declare": false,
          "start": 1721,
          "end": 1752
        }
      ],
      "start": 1586,
      "end": 1763
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "X",
        "optional": false,
        "typeAnnotation": null,
        "start": 1827,
        "end": 1828
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "constructor",
              "optional": false,
              "typeAnnotation": null,
              "start": 1833,
              "end": 1844
            },
            "value": {
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
                "body": [
                  {
                    "type": "VariableDeclaration",
                    "kind": "const",
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "id": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "p",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1859,
                          "end": 1860
                        },
                        "init": {
                          "type": "LogicalExpression",
                          "left": {
                            "type": "MetaProperty",
                            "meta": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "new",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 1863,
                              "end": 1866
                            },
                            "property": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "target",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 1867,
                              "end": 1873
                            },
                            "start": 1863,
                            "end": 1873
                          },
                          "operator": "??",
                          "right": {
                            "type": "Literal",
                            "value": 32,
                            "raw": "32",
                            "start": 1877,
                            "end": 1879
                          },
                          "start": 1863,
                          "end": 1879
                        },
                        "definite": false,
                        "start": 1859,
                        "end": 1879
                      }
                    ],
                    "declare": false,
                    "start": 1853,
                    "end": 1880
                  }
                ],
                "start": 1847,
                "end": 1884
              },
              "expression": false,
              "start": 1844,
              "end": 1884
            },
            "kind": "constructor",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 1833,
            "end": 1884
          }
        ],
        "start": 1829,
        "end": 1886
      },
      "abstract": false,
      "declare": false,
      "start": 1821,
      "end": 1886
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "tag",
        "optional": false,
        "typeAnnotation": null,
        "start": 1961,
        "end": 1964
      },
      "generator": false,
      "async": false,
      "declare": true,
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
              "start": 1965,
              "end": 1966
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 1965,
            "end": 1966
          }
        ],
        "start": 1964,
        "end": 1967
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "strings",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "TemplateStringsArray",
                "optional": false,
                "typeAnnotation": null,
                "start": 1980,
                "end": 2000
              },
              "typeArguments": null,
              "start": 1980,
              "end": 2000
            },
            "start": 1978,
            "end": 2000
          },
          "start": 1971,
          "end": 2000
        },
        {
          "type": "RestElement",
          "decorators": [],
          "argument": {
            "type": "Identifier",
            "decorators": [],
            "name": "values",
            "optional": false,
            "typeAnnotation": null,
            "start": 2007,
            "end": 2013
          },
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSArrayType",
              "elementType": {
                "type": "TSNumberKeyword",
                "start": 2015,
                "end": 2021
              },
              "start": 2015,
              "end": 2023
            },
            "start": 2013,
            "end": 2023
          },
          "value": null,
          "start": 2004,
          "end": 2023
        }
      ],
      "returnType": {
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
                "start": 2027,
                "end": 2028
              },
              "typeArguments": null,
              "start": 2027,
              "end": 2028
            },
            {
              "type": "TSNullKeyword",
              "start": 2031,
              "end": 2035
            }
          ],
          "start": 2027,
          "end": 2035
        },
        "start": 2025,
        "end": 2035
      },
      "body": null,
      "expression": false,
      "start": 1944,
      "end": 2036
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "LogicalExpression",
        "left": {
          "type": "TaggedTemplateExpression",
          "tag": {
            "type": "Identifier",
            "decorators": [],
            "name": "tag",
            "optional": false,
            "typeAnnotation": null,
            "start": 2038,
            "end": 2041
          },
          "typeArguments": null,
          "quasi": {
            "type": "TemplateLiteral",
            "quasis": [
              {
                "type": "TemplateElement",
                "value": {
                  "raw": "foo",
                  "cooked": "foo"
                },
                "tail": false,
                "start": 2041,
                "end": 2047
              },
              {
                "type": "TemplateElement",
                "value": {
                  "raw": "",
                  "cooked": ""
                },
                "tail": true,
                "start": 2048,
                "end": 2050
              }
            ],
            "expressions": [
              {
                "type": "Literal",
                "value": 1,
                "raw": "1",
                "start": 2047,
                "end": 2048
              }
            ],
            "start": 2041,
            "end": 2050
          },
          "start": 2038,
          "end": 2050
        },
        "operator": "??",
        "right": {
          "type": "Literal",
          "value": 32,
          "raw": "32",
          "start": 2054,
          "end": 2056
        },
        "start": 2038,
        "end": 2056
      },
      "directive": null,
      "start": 2038,
      "end": 2057
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "LogicalExpression",
        "left": {
          "type": "TemplateLiteral",
          "quasis": [
            {
              "type": "TemplateElement",
              "value": {
                "raw": "foo",
                "cooked": "foo"
              },
              "tail": false,
              "start": 2065,
              "end": 2071
            },
            {
              "type": "TemplateElement",
              "value": {
                "raw": "",
                "cooked": ""
              },
              "tail": true,
              "start": 2072,
              "end": 2074
            }
          ],
          "expressions": [
            {
              "type": "Literal",
              "value": 1,
              "raw": "1",
              "start": 2071,
              "end": 2072
            }
          ],
          "start": 2065,
          "end": 2074
        },
        "operator": "??",
        "right": {
          "type": "Literal",
          "value": 32,
          "raw": "32",
          "start": 2078,
          "end": 2080
        },
        "start": 2065,
        "end": 2080
      },
      "directive": null,
      "start": 2065,
      "end": 2081
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "LogicalExpression",
        "left": {
          "type": "TemplateLiteral",
          "quasis": [
            {
              "type": "TemplateElement",
              "value": {
                "raw": "foo",
                "cooked": "foo"
              },
              "tail": true,
              "start": 2091,
              "end": 2096
            }
          ],
          "expressions": [],
          "start": 2091,
          "end": 2096
        },
        "operator": "??",
        "right": {
          "type": "Literal",
          "value": 32,
          "raw": "32",
          "start": 2100,
          "end": 2102
        },
        "start": 2091,
        "end": 2102
      },
      "directive": null,
      "start": 2091,
      "end": 2103
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 2112
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Identifier",
    "value": "declare",
    "start": 0,
    "end": 7
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 8,
    "end": 11
  },
  {
    "type": "Identifier",
    "value": "opt",
    "start": 12,
    "end": 15
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 15,
    "end": 16
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 17,
    "end": 23
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 24,
    "end": 25
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 26,
    "end": 35
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 35,
    "end": 36
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 86,
    "end": 91
  },
  {
    "type": "Identifier",
    "value": "test1",
    "start": 92,
    "end": 97
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 98,
    "end": 99
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 100,
    "end": 101
  },
  {
    "type": "Identifier",
    "value": "opt",
    "start": 101,
    "end": 104
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 105,
    "end": 106
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 107,
    "end": 116
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 117,
    "end": 118
  },
  {
    "type": "Numeric",
    "value": "32",
    "start": 119,
    "end": 121
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 121,
    "end": 122
  },
  {
    "type": "Punctuator",
    "value": "??",
    "start": 123,
    "end": 125
  },
  {
    "type": "String",
    "value": "\"possibly reached\"",
    "start": 126,
    "end": 144
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 144,
    "end": 145
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 180,
    "end": 185
  },
  {
    "type": "Identifier",
    "value": "test2",
    "start": 186,
    "end": 191
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 192,
    "end": 193
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 194,
    "end": 195
  },
  {
    "type": "Identifier",
    "value": "opt",
    "start": 195,
    "end": 198
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 199,
    "end": 200
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 201,
    "end": 210
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 211,
    "end": 212
  },
  {
    "type": "Null",
    "value": "null",
    "start": 213,
    "end": 217
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 217,
    "end": 218
  },
  {
    "type": "Punctuator",
    "value": "??",
    "start": 219,
    "end": 221
  },
  {
    "type": "String",
    "value": "\"always reached\"",
    "start": 222,
    "end": 238
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 238,
    "end": 239
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 278,
    "end": 283
  },
  {
    "type": "Identifier",
    "value": "test3",
    "start": 284,
    "end": 289
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 290,
    "end": 291
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 292,
    "end": 293
  },
  {
    "type": "Identifier",
    "value": "opt",
    "start": 293,
    "end": 296
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 297,
    "end": 298
  },
  {
    "type": "Numeric",
    "value": "132",
    "start": 299,
    "end": 302
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 303,
    "end": 304
  },
  {
    "type": "Numeric",
    "value": "17",
    "start": 305,
    "end": 307
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 307,
    "end": 308
  },
  {
    "type": "Punctuator",
    "value": "??",
    "start": 309,
    "end": 311
  },
  {
    "type": "String",
    "value": "\"unreachable\"",
    "start": 312,
    "end": 325
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 325,
    "end": 326
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 338,
    "end": 343
  },
  {
    "type": "Identifier",
    "value": "test4",
    "start": 344,
    "end": 349
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 350,
    "end": 351
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 352,
    "end": 353
  },
  {
    "type": "Identifier",
    "value": "opt",
    "start": 353,
    "end": 356
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 357,
    "end": 358
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 359,
    "end": 360
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 360,
    "end": 369
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 369,
    "end": 370
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 371,
    "end": 372
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 373,
    "end": 374
  },
  {
    "type": "Numeric",
    "value": "17",
    "start": 374,
    "end": 376
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 376,
    "end": 377
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 377,
    "end": 378
  },
  {
    "type": "Punctuator",
    "value": "??",
    "start": 379,
    "end": 381
  },
  {
    "type": "Numeric",
    "value": "42",
    "start": 382,
    "end": 384
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 384,
    "end": 385
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 418,
    "end": 420
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 421,
    "end": 422
  },
  {
    "type": "Punctuator",
    "value": "!",
    "start": 422,
    "end": 423
  },
  {
    "type": "Punctuator",
    "value": "!",
    "start": 423,
    "end": 424
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 424,
    "end": 428
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 428,
    "end": 429
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 430,
    "end": 431
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 433,
    "end": 434
  },
  {
    "type": "Keyword",
    "value": "while",
    "start": 468,
    "end": 473
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 474,
    "end": 475
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 475,
    "end": 476
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 476,
    "end": 477
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 478,
    "end": 479
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 480,
    "end": 481
  },
  {
    "type": "Keyword",
    "value": "while",
    "start": 482,
    "end": 487
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 488,
    "end": 489
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 489,
    "end": 490
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 490,
    "end": 491
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 492,
    "end": 493
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 494,
    "end": 495
  },
  {
    "type": "Keyword",
    "value": "while",
    "start": 496,
    "end": 501
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 502,
    "end": 503
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 503,
    "end": 507
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 507,
    "end": 508
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 509,
    "end": 510
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 511,
    "end": 512
  },
  {
    "type": "Keyword",
    "value": "while",
    "start": 513,
    "end": 518
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 519,
    "end": 520
  },
  {
    "type": "Boolean",
    "value": "false",
    "start": 520,
    "end": 525
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 525,
    "end": 526
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 527,
    "end": 528
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 529,
    "end": 530
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 532,
    "end": 537
  },
  {
    "type": "Identifier",
    "value": "p01",
    "start": 538,
    "end": 541
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 542,
    "end": 543
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 544,
    "end": 545
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 545,
    "end": 546
  },
  {
    "type": "Punctuator",
    "value": "??",
    "start": 547,
    "end": 549
  },
  {
    "type": "Null",
    "value": "null",
    "start": 550,
    "end": 554
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 554,
    "end": 555
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 556,
    "end": 561
  },
  {
    "type": "Identifier",
    "value": "p02",
    "start": 562,
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
    "value": "0",
    "start": 568,
    "end": 569
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 570,
    "end": 571
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 572,
    "end": 573
  },
  {
    "type": "Punctuator",
    "value": "??",
    "start": 574,
    "end": 576
  },
  {
    "type": "Null",
    "value": "null",
    "start": 577,
    "end": 581
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 581,
    "end": 582
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 583,
    "end": 588
  },
  {
    "type": "Identifier",
    "value": "p03",
    "start": 589,
    "end": 592
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 593,
    "end": 594
  },
  {
    "type": "Null",
    "value": "null",
    "start": 595,
    "end": 599
  },
  {
    "type": "Punctuator",
    "value": "??",
    "start": 600,
    "end": 602
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 603,
    "end": 604
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 604,
    "end": 605
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 606,
    "end": 611
  },
  {
    "type": "Identifier",
    "value": "p04",
    "start": 612,
    "end": 615
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 616,
    "end": 617
  },
  {
    "type": "Null",
    "value": "null",
    "start": 618,
    "end": 622
  },
  {
    "type": "Punctuator",
    "value": "??",
    "start": 623,
    "end": 625
  },
  {
    "type": "Null",
    "value": "null",
    "start": 626,
    "end": 630
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 630,
    "end": 631
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 632,
    "end": 637
  },
  {
    "type": "Identifier",
    "value": "p05",
    "start": 638,
    "end": 641
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 642,
    "end": 643
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 644,
    "end": 645
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 645,
    "end": 650
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 651,
    "end": 654
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 655,
    "end": 656
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 657,
    "end": 658
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 658,
    "end": 659
  },
  {
    "type": "Punctuator",
    "value": "&&",
    "start": 660,
    "end": 662
  },
  {
    "type": "Null",
    "value": "null",
    "start": 663,
    "end": 667
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 667,
    "end": 668
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 669,
    "end": 674
  },
  {
    "type": "Identifier",
    "value": "p06",
    "start": 675,
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
    "type": "Keyword",
    "value": "class",
    "start": 682,
    "end": 687
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 688,
    "end": 691
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 692,
    "end": 693
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 694,
    "end": 695
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 695,
    "end": 696
  },
  {
    "type": "Punctuator",
    "value": "||",
    "start": 697,
    "end": 699
  },
  {
    "type": "Null",
    "value": "null",
    "start": 700,
    "end": 704
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 704,
    "end": 705
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 706,
    "end": 711
  },
  {
    "type": "Identifier",
    "value": "p07",
    "start": 712,
    "end": 715
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 716,
    "end": 717
  },
  {
    "type": "Null",
    "value": "null",
    "start": 718,
    "end": 722
  },
  {
    "type": "Punctuator",
    "value": "??",
    "start": 723,
    "end": 725
  },
  {
    "type": "Null",
    "value": "null",
    "start": 726,
    "end": 730
  },
  {
    "type": "Punctuator",
    "value": "??",
    "start": 731,
    "end": 733
  },
  {
    "type": "Null",
    "value": "null",
    "start": 734,
    "end": 738
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 738,
    "end": 739
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 740,
    "end": 745
  },
  {
    "type": "Identifier",
    "value": "p08",
    "start": 746,
    "end": 749
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 750,
    "end": 751
  },
  {
    "type": "Null",
    "value": "null",
    "start": 752,
    "end": 756
  },
  {
    "type": "Punctuator",
    "value": "??",
    "start": 757,
    "end": 759
  },
  {
    "type": "Identifier",
    "value": "opt",
    "start": 760,
    "end": 763
  },
  {
    "type": "Punctuator",
    "value": "??",
    "start": 764,
    "end": 766
  },
  {
    "type": "Null",
    "value": "null",
    "start": 767,
    "end": 771
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 771,
    "end": 772
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 773,
    "end": 778
  },
  {
    "type": "Identifier",
    "value": "p09",
    "start": 779,
    "end": 782
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 783,
    "end": 784
  },
  {
    "type": "Null",
    "value": "null",
    "start": 785,
    "end": 789
  },
  {
    "type": "Punctuator",
    "value": "??",
    "start": 790,
    "end": 792
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 793,
    "end": 794
  },
  {
    "type": "Identifier",
    "value": "opt",
    "start": 794,
    "end": 797
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 798,
    "end": 799
  },
  {
    "type": "Null",
    "value": "null",
    "start": 800,
    "end": 804
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 805,
    "end": 806
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 807,
    "end": 816
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 816,
    "end": 817
  },
  {
    "type": "Punctuator",
    "value": "??",
    "start": 818,
    "end": 820
  },
  {
    "type": "Null",
    "value": "null",
    "start": 821,
    "end": 825
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 825,
    "end": 826
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 828,
    "end": 833
  },
  {
    "type": "Identifier",
    "value": "p10",
    "start": 834,
    "end": 837
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 838,
    "end": 839
  },
  {
    "type": "Identifier",
    "value": "opt",
    "start": 840,
    "end": 843
  },
  {
    "type": "Punctuator",
    "value": "??",
    "start": 844,
    "end": 846
  },
  {
    "type": "Null",
    "value": "null",
    "start": 847,
    "end": 851
  },
  {
    "type": "Punctuator",
    "value": "??",
    "start": 852,
    "end": 854
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 855,
    "end": 856
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 856,
    "end": 857
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 858,
    "end": 863
  },
  {
    "type": "Identifier",
    "value": "p11",
    "start": 864,
    "end": 867
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 868,
    "end": 869
  },
  {
    "type": "Identifier",
    "value": "opt",
    "start": 870,
    "end": 873
  },
  {
    "type": "Punctuator",
    "value": "??",
    "start": 874,
    "end": 876
  },
  {
    "type": "Null",
    "value": "null",
    "start": 877,
    "end": 881
  },
  {
    "type": "Punctuator",
    "value": "??",
    "start": 882,
    "end": 884
  },
  {
    "type": "Null",
    "value": "null",
    "start": 885,
    "end": 889
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 889,
    "end": 890
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 891,
    "end": 896
  },
  {
    "type": "Identifier",
    "value": "p12",
    "start": 897,
    "end": 900
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 901,
    "end": 902
  },
  {
    "type": "Identifier",
    "value": "opt",
    "start": 903,
    "end": 906
  },
  {
    "type": "Punctuator",
    "value": "??",
    "start": 907,
    "end": 909
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 910,
    "end": 911
  },
  {
    "type": "Null",
    "value": "null",
    "start": 911,
    "end": 915
  },
  {
    "type": "Punctuator",
    "value": "??",
    "start": 916,
    "end": 918
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 919,
    "end": 920
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 920,
    "end": 921
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 921,
    "end": 922
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 923,
    "end": 928
  },
  {
    "type": "Identifier",
    "value": "p13",
    "start": 929,
    "end": 932
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 933,
    "end": 934
  },
  {
    "type": "Identifier",
    "value": "opt",
    "start": 935,
    "end": 938
  },
  {
    "type": "Punctuator",
    "value": "??",
    "start": 939,
    "end": 941
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 942,
    "end": 943
  },
  {
    "type": "Null",
    "value": "null",
    "start": 943,
    "end": 947
  },
  {
    "type": "Punctuator",
    "value": "??",
    "start": 948,
    "end": 950
  },
  {
    "type": "Null",
    "value": "null",
    "start": 951,
    "end": 955
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 955,
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
    "value": "const",
    "start": 958,
    "end": 963
  },
  {
    "type": "Identifier",
    "value": "p14",
    "start": 964,
    "end": 967
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 968,
    "end": 969
  },
  {
    "type": "Identifier",
    "value": "opt",
    "start": 970,
    "end": 973
  },
  {
    "type": "Punctuator",
    "value": "??",
    "start": 974,
    "end": 976
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 977,
    "end": 978
  },
  {
    "type": "Null",
    "value": "null",
    "start": 978,
    "end": 982
  },
  {
    "type": "Punctuator",
    "value": "??",
    "start": 983,
    "end": 985
  },
  {
    "type": "Null",
    "value": "null",
    "start": 986,
    "end": 990
  },
  {
    "type": "Punctuator",
    "value": "??",
    "start": 991,
    "end": 993
  },
  {
    "type": "Null",
    "value": "null",
    "start": 994,
    "end": 998
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 998,
    "end": 999
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 999,
    "end": 1000
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 1001,
    "end": 1006
  },
  {
    "type": "Identifier",
    "value": "p15",
    "start": 1007,
    "end": 1010
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1011,
    "end": 1012
  },
  {
    "type": "Identifier",
    "value": "opt",
    "start": 1013,
    "end": 1016
  },
  {
    "type": "Punctuator",
    "value": "??",
    "start": 1017,
    "end": 1019
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1020,
    "end": 1021
  },
  {
    "type": "Identifier",
    "value": "opt",
    "start": 1021,
    "end": 1024
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 1025,
    "end": 1026
  },
  {
    "type": "Null",
    "value": "null",
    "start": 1027,
    "end": 1031
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1032,
    "end": 1033
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 1034,
    "end": 1043
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1043,
    "end": 1044
  },
  {
    "type": "Punctuator",
    "value": "??",
    "start": 1045,
    "end": 1047
  },
  {
    "type": "Null",
    "value": "null",
    "start": 1048,
    "end": 1052
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1052,
    "end": 1053
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 1054,
    "end": 1059
  },
  {
    "type": "Identifier",
    "value": "p16",
    "start": 1060,
    "end": 1063
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1064,
    "end": 1065
  },
  {
    "type": "Identifier",
    "value": "opt",
    "start": 1066,
    "end": 1069
  },
  {
    "type": "Punctuator",
    "value": "??",
    "start": 1070,
    "end": 1072
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 1073,
    "end": 1074
  },
  {
    "type": "Punctuator",
    "value": "??",
    "start": 1075,
    "end": 1077
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 1078,
    "end": 1079
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1079,
    "end": 1080
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 1081,
    "end": 1086
  },
  {
    "type": "Identifier",
    "value": "p17",
    "start": 1087,
    "end": 1090
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1091,
    "end": 1092
  },
  {
    "type": "Identifier",
    "value": "opt",
    "start": 1093,
    "end": 1096
  },
  {
    "type": "Punctuator",
    "value": "??",
    "start": 1097,
    "end": 1099
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1100,
    "end": 1101
  },
  {
    "type": "Identifier",
    "value": "opt",
    "start": 1101,
    "end": 1104
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 1105,
    "end": 1106
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 1107,
    "end": 1108
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1109,
    "end": 1110
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 1111,
    "end": 1112
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1112,
    "end": 1113
  },
  {
    "type": "Punctuator",
    "value": "??",
    "start": 1114,
    "end": 1116
  },
  {
    "type": "Numeric",
    "value": "3",
    "start": 1117,
    "end": 1118
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1118,
    "end": 1119
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 1121,
    "end": 1126
  },
  {
    "type": "Identifier",
    "value": "p21",
    "start": 1127,
    "end": 1130
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1131,
    "end": 1132
  },
  {
    "type": "Null",
    "value": "null",
    "start": 1133,
    "end": 1137
  },
  {
    "type": "Punctuator",
    "value": "??",
    "start": 1138,
    "end": 1140
  },
  {
    "type": "Null",
    "value": "null",
    "start": 1141,
    "end": 1145
  },
  {
    "type": "Punctuator",
    "value": "??",
    "start": 1146,
    "end": 1148
  },
  {
    "type": "Null",
    "value": "null",
    "start": 1149,
    "end": 1153
  },
  {
    "type": "Punctuator",
    "value": "??",
    "start": 1154,
    "end": 1156
  },
  {
    "type": "Null",
    "value": "null",
    "start": 1157,
    "end": 1161
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1161,
    "end": 1162
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 1163,
    "end": 1168
  },
  {
    "type": "Identifier",
    "value": "p22",
    "start": 1169,
    "end": 1172
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1173,
    "end": 1174
  },
  {
    "type": "Null",
    "value": "null",
    "start": 1175,
    "end": 1179
  },
  {
    "type": "Punctuator",
    "value": "??",
    "start": 1180,
    "end": 1182
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 1183,
    "end": 1184
  },
  {
    "type": "Punctuator",
    "value": "??",
    "start": 1185,
    "end": 1187
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 1188,
    "end": 1189
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1189,
    "end": 1190
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 1191,
    "end": 1196
  },
  {
    "type": "Identifier",
    "value": "p23",
    "start": 1197,
    "end": 1200
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1201,
    "end": 1202
  },
  {
    "type": "Null",
    "value": "null",
    "start": 1203,
    "end": 1207
  },
  {
    "type": "Punctuator",
    "value": "??",
    "start": 1208,
    "end": 1210
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1211,
    "end": 1212
  },
  {
    "type": "Identifier",
    "value": "opt",
    "start": 1212,
    "end": 1215
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 1216,
    "end": 1217
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 1218,
    "end": 1219
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1220,
    "end": 1221
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 1222,
    "end": 1223
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1223,
    "end": 1224
  },
  {
    "type": "Punctuator",
    "value": "??",
    "start": 1225,
    "end": 1227
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 1228,
    "end": 1229
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1229,
    "end": 1230
  },
  {
    "type": "Keyword",
    "value": "while",
    "start": 1258,
    "end": 1263
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1264,
    "end": 1265
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1265,
    "end": 1266
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1266,
    "end": 1267
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 1268,
    "end": 1270
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 1271,
    "end": 1274
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1274,
    "end": 1275
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1276,
    "end": 1277
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1278,
    "end": 1279
  },
  {
    "type": "Keyword",
    "value": "while",
    "start": 1280,
    "end": 1285
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1286,
    "end": 1287
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1287,
    "end": 1288
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1288,
    "end": 1289
  },
  {
    "type": "Identifier",
    "value": "satisfies",
    "start": 1290,
    "end": 1299
  },
  {
    "type": "Identifier",
    "value": "unknown",
    "start": 1300,
    "end": 1307
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1307,
    "end": 1308
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1309,
    "end": 1310
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1311,
    "end": 1312
  },
  {
    "type": "Keyword",
    "value": "while",
    "start": 1313,
    "end": 1318
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1319,
    "end": 1320
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1320,
    "end": 1321
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1321,
    "end": 1322
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 1322,
    "end": 1325
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1325,
    "end": 1326
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1326,
    "end": 1327
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1327,
    "end": 1328
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1328,
    "end": 1329
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1329,
    "end": 1330
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1330,
    "end": 1331
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1331,
    "end": 1332
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1333,
    "end": 1334
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1335,
    "end": 1336
  },
  {
    "type": "Keyword",
    "value": "while",
    "start": 1337,
    "end": 1342
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1343,
    "end": 1344
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1344,
    "end": 1345
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1345,
    "end": 1346
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1346,
    "end": 1347
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1347,
    "end": 1348
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1348,
    "end": 1349
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1349,
    "end": 1350
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1350,
    "end": 1351
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1352,
    "end": 1353
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1354,
    "end": 1355
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 1357,
    "end": 1364
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 1365,
    "end": 1368
  },
  {
    "type": "Identifier",
    "value": "cond",
    "start": 1369,
    "end": 1373
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1373,
    "end": 1374
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 1375,
    "end": 1378
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1378,
    "end": 1379
  },
  {
    "type": "Identifier",
    "value": "console",
    "start": 1397,
    "end": 1404
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1404,
    "end": 1405
  },
  {
    "type": "Identifier",
    "value": "log",
    "start": 1405,
    "end": 1408
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1408,
    "end": 1409
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1409,
    "end": 1410
  },
  {
    "type": "Identifier",
    "value": "cond",
    "start": 1410,
    "end": 1414
  },
  {
    "type": "Punctuator",
    "value": "||",
    "start": 1415,
    "end": 1417
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 1418,
    "end": 1427
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1427,
    "end": 1428
  },
  {
    "type": "Punctuator",
    "value": "&&",
    "start": 1429,
    "end": 1431
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 1432,
    "end": 1433
  },
  {
    "type": "Punctuator",
    "value": "/",
    "start": 1434,
    "end": 1435
  },
  {
    "type": "Identifier",
    "value": "cond",
    "start": 1436,
    "end": 1440
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1440,
    "end": 1441
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1441,
    "end": 1442
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1444,
    "end": 1452
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 1453,
    "end": 1456
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1456,
    "end": 1457
  },
  {
    "type": "Identifier",
    "value": "this",
    "start": 1457,
    "end": 1461
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1461,
    "end": 1462
  },
  {
    "type": "Identifier",
    "value": "Object",
    "start": 1463,
    "end": 1469
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 1470,
    "end": 1471
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 1472,
    "end": 1481
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1481,
    "end": 1482
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1483,
    "end": 1484
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 1509,
    "end": 1515
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 1516,
    "end": 1520
  },
  {
    "type": "Punctuator",
    "value": "??",
    "start": 1521,
    "end": 1523
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 1524,
    "end": 1525
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1525,
    "end": 1526
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1527,
    "end": 1528
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1586,
    "end": 1587
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 1590,
    "end": 1595
  },
  {
    "type": "Identifier",
    "value": "maybe",
    "start": 1596,
    "end": 1601
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1602,
    "end": 1603
  },
  {
    "type": "Null",
    "value": "null",
    "start": 1604,
    "end": 1608
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 1609,
    "end": 1611
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 1612,
    "end": 1616
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 1617,
    "end": 1618
  },
  {
    "type": "Null",
    "value": "null",
    "start": 1619,
    "end": 1623
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1623,
    "end": 1624
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 1627,
    "end": 1630
  },
  {
    "type": "Identifier",
    "value": "i",
    "start": 1631,
    "end": 1632
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1633,
    "end": 1634
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 1635,
    "end": 1636
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1636,
    "end": 1637
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 1640,
    "end": 1645
  },
  {
    "type": "Identifier",
    "value": "d",
    "start": 1646,
    "end": 1647
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1648,
    "end": 1649
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1650,
    "end": 1651
  },
  {
    "type": "Identifier",
    "value": "i",
    "start": 1651,
    "end": 1652
  },
  {
    "type": "Punctuator",
    "value": "++",
    "start": 1652,
    "end": 1654
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1654,
    "end": 1655
  },
  {
    "type": "Identifier",
    "value": "maybe",
    "start": 1656,
    "end": 1661
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1661,
    "end": 1662
  },
  {
    "type": "Punctuator",
    "value": "??",
    "start": 1663,
    "end": 1665
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 1666,
    "end": 1670
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1670,
    "end": 1671
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 1680,
    "end": 1685
  },
  {
    "type": "Identifier",
    "value": "e",
    "start": 1686,
    "end": 1687
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1688,
    "end": 1689
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1690,
    "end": 1691
  },
  {
    "type": "Identifier",
    "value": "i",
    "start": 1691,
    "end": 1692
  },
  {
    "type": "Punctuator",
    "value": "++",
    "start": 1692,
    "end": 1694
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1694,
    "end": 1695
  },
  {
    "type": "Identifier",
    "value": "i",
    "start": 1696,
    "end": 1697
  },
  {
    "type": "Punctuator",
    "value": "++",
    "start": 1697,
    "end": 1699
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1699,
    "end": 1700
  },
  {
    "type": "Punctuator",
    "value": "??",
    "start": 1701,
    "end": 1703
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 1704,
    "end": 1708
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1708,
    "end": 1709
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 1721,
    "end": 1726
  },
  {
    "type": "Identifier",
    "value": "f",
    "start": 1727,
    "end": 1728
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1729,
    "end": 1730
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1731,
    "end": 1732
  },
  {
    "type": "Identifier",
    "value": "maybe",
    "start": 1732,
    "end": 1737
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1737,
    "end": 1738
  },
  {
    "type": "Identifier",
    "value": "i",
    "start": 1739,
    "end": 1740
  },
  {
    "type": "Punctuator",
    "value": "++",
    "start": 1740,
    "end": 1742
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1742,
    "end": 1743
  },
  {
    "type": "Punctuator",
    "value": "??",
    "start": 1744,
    "end": 1746
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 1747,
    "end": 1751
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1751,
    "end": 1752
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1762,
    "end": 1763
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 1821,
    "end": 1826
  },
  {
    "type": "Identifier",
    "value": "X",
    "start": 1827,
    "end": 1828
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1829,
    "end": 1830
  },
  {
    "type": "Identifier",
    "value": "constructor",
    "start": 1833,
    "end": 1844
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1844,
    "end": 1845
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1845,
    "end": 1846
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1847,
    "end": 1848
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 1853,
    "end": 1858
  },
  {
    "type": "Identifier",
    "value": "p",
    "start": 1859,
    "end": 1860
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1861,
    "end": 1862
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 1863,
    "end": 1866
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1866,
    "end": 1867
  },
  {
    "type": "Identifier",
    "value": "target",
    "start": 1867,
    "end": 1873
  },
  {
    "type": "Punctuator",
    "value": "??",
    "start": 1874,
    "end": 1876
  },
  {
    "type": "Numeric",
    "value": "32",
    "start": 1877,
    "end": 1879
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1879,
    "end": 1880
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1883,
    "end": 1884
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1885,
    "end": 1886
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 1944,
    "end": 1951
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1952,
    "end": 1960
  },
  {
    "type": "Identifier",
    "value": "tag",
    "start": 1961,
    "end": 1964
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1964,
    "end": 1965
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1965,
    "end": 1966
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1966,
    "end": 1967
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1967,
    "end": 1968
  },
  {
    "type": "Identifier",
    "value": "strings",
    "start": 1971,
    "end": 1978
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1978,
    "end": 1979
  },
  {
    "type": "Identifier",
    "value": "TemplateStringsArray",
    "start": 1980,
    "end": 2000
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2000,
    "end": 2001
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 2004,
    "end": 2007
  },
  {
    "type": "Identifier",
    "value": "values",
    "start": 2007,
    "end": 2013
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2013,
    "end": 2014
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 2015,
    "end": 2021
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 2021,
    "end": 2022
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 2022,
    "end": 2023
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2024,
    "end": 2025
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2025,
    "end": 2026
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2027,
    "end": 2028
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 2029,
    "end": 2030
  },
  {
    "type": "Null",
    "value": "null",
    "start": 2031,
    "end": 2035
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2035,
    "end": 2036
  },
  {
    "type": "Identifier",
    "value": "tag",
    "start": 2038,
    "end": 2041
  },
  {
    "type": "Template",
    "value": "`foo${",
    "start": 2041,
    "end": 2047
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 2047,
    "end": 2048
  },
  {
    "type": "Template",
    "value": "}`",
    "start": 2048,
    "end": 2050
  },
  {
    "type": "Punctuator",
    "value": "??",
    "start": 2051,
    "end": 2053
  },
  {
    "type": "Numeric",
    "value": "32",
    "start": 2054,
    "end": 2056
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2056,
    "end": 2057
  },
  {
    "type": "Template",
    "value": "`foo${",
    "start": 2065,
    "end": 2071
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 2071,
    "end": 2072
  },
  {
    "type": "Template",
    "value": "}`",
    "start": 2072,
    "end": 2074
  },
  {
    "type": "Punctuator",
    "value": "??",
    "start": 2075,
    "end": 2077
  },
  {
    "type": "Numeric",
    "value": "32",
    "start": 2078,
    "end": 2080
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2080,
    "end": 2081
  },
  {
    "type": "Template",
    "value": "`foo`",
    "start": 2091,
    "end": 2096
  },
  {
    "type": "Punctuator",
    "value": "??",
    "start": 2097,
    "end": 2099
  },
  {
    "type": "Numeric",
    "value": "32",
    "start": 2100,
    "end": 2102
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2102,
    "end": 2103
  }
]
```
