__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo",
        "optional": false,
        "typeAnnotation": null,
        "start": 512,
        "end": 515
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
              "start": 516,
              "end": 517
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 516,
            "end": 517
          }
        ],
        "start": 515,
        "end": 518
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "cb",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSFunctionType",
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 527,
                      "end": 533
                    },
                    "start": 525,
                    "end": 533
                  },
                  "start": 524,
                  "end": 533
                },
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "y",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 538,
                      "end": 544
                    },
                    "start": 536,
                    "end": 544
                  },
                  "start": 535,
                  "end": 544
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "T",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 549,
                    "end": 550
                  },
                  "typeArguments": null,
                  "start": 549,
                  "end": 550
                },
                "start": 546,
                "end": 550
              },
              "start": 523,
              "end": 550
            },
            "start": 521,
            "end": 550
          },
          "start": 519,
          "end": 550
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "T",
            "optional": false,
            "typeAnnotation": null,
            "start": 553,
            "end": 554
          },
          "typeArguments": null,
          "start": 553,
          "end": 554
        },
        "start": 551,
        "end": 554
      },
      "body": null,
      "expression": false,
      "start": 495,
      "end": 555
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "bar",
        "optional": false,
        "typeAnnotation": null,
        "start": 573,
        "end": 576
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
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "U",
              "optional": false,
              "typeAnnotation": null,
              "start": 580,
              "end": 581
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 580,
            "end": 581
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "V",
              "optional": false,
              "typeAnnotation": null,
              "start": 583,
              "end": 584
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 583,
            "end": 584
          }
        ],
        "start": 576,
        "end": 585
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
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
                "start": 589,
                "end": 590
              },
              "typeArguments": null,
              "start": 589,
              "end": 590
            },
            "start": 587,
            "end": 590
          },
          "start": 586,
          "end": 590
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "y",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "U",
                "optional": false,
                "typeAnnotation": null,
                "start": 595,
                "end": 596
              },
              "typeArguments": null,
              "start": 595,
              "end": 596
            },
            "start": 593,
            "end": 596
          },
          "start": 592,
          "end": 596
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "cb",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSFunctionType",
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
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
                        "start": 606,
                        "end": 607
                      },
                      "typeArguments": null,
                      "start": 606,
                      "end": 607
                    },
                    "start": 604,
                    "end": 607
                  },
                  "start": 603,
                  "end": 607
                },
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "y",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "U",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 612,
                        "end": 613
                      },
                      "typeArguments": null,
                      "start": 612,
                      "end": 613
                    },
                    "start": 610,
                    "end": 613
                  },
                  "start": 609,
                  "end": 613
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "V",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 618,
                    "end": 619
                  },
                  "typeArguments": null,
                  "start": 618,
                  "end": 619
                },
                "start": 615,
                "end": 619
              },
              "start": 602,
              "end": 619
            },
            "start": 600,
            "end": 619
          },
          "start": 598,
          "end": 619
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "V",
            "optional": false,
            "typeAnnotation": null,
            "start": 622,
            "end": 623
          },
          "typeArguments": null,
          "start": 622,
          "end": 623
        },
        "start": 620,
        "end": 623
      },
      "body": null,
      "expression": false,
      "start": 556,
      "end": 624
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "baz",
        "optional": false,
        "typeAnnotation": null,
        "start": 642,
        "end": 645
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
              "start": 646,
              "end": 647
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 646,
            "end": 647
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "U",
              "optional": false,
              "typeAnnotation": null,
              "start": 649,
              "end": 650
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 649,
            "end": 650
          }
        ],
        "start": 645,
        "end": 651
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
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
                "start": 655,
                "end": 656
              },
              "typeArguments": null,
              "start": 655,
              "end": 656
            },
            "start": 653,
            "end": 656
          },
          "start": 652,
          "end": 656
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "y",
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
                "start": 661,
                "end": 662
              },
              "typeArguments": null,
              "start": 661,
              "end": 662
            },
            "start": 659,
            "end": 662
          },
          "start": 658,
          "end": 662
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "cb",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSFunctionType",
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
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
                        "start": 672,
                        "end": 673
                      },
                      "typeArguments": null,
                      "start": 672,
                      "end": 673
                    },
                    "start": 670,
                    "end": 673
                  },
                  "start": 669,
                  "end": 673
                },
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "y",
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
                        "start": 678,
                        "end": 679
                      },
                      "typeArguments": null,
                      "start": 678,
                      "end": 679
                    },
                    "start": 676,
                    "end": 679
                  },
                  "start": 675,
                  "end": 679
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "U",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 684,
                    "end": 685
                  },
                  "typeArguments": null,
                  "start": 684,
                  "end": 685
                },
                "start": 681,
                "end": 685
              },
              "start": 668,
              "end": 685
            },
            "start": 666,
            "end": 685
          },
          "start": 664,
          "end": 685
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "U",
            "optional": false,
            "typeAnnotation": null,
            "start": 688,
            "end": 689
          },
          "typeArguments": null,
          "start": 688,
          "end": 689
        },
        "start": 686,
        "end": 689
      },
      "body": null,
      "expression": false,
      "start": 625,
      "end": 690
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "g",
        "optional": false,
        "typeAnnotation": null,
        "start": 709,
        "end": 710
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
              "start": 711,
              "end": 712
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 711,
            "end": 712
          }
        ],
        "start": 710,
        "end": 713
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
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
                "start": 717,
                "end": 718
              },
              "typeArguments": null,
              "start": 717,
              "end": 718
            },
            "start": 715,
            "end": 718
          },
          "start": 714,
          "end": 718
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "y",
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
                "start": 723,
                "end": 724
              },
              "typeArguments": null,
              "start": 723,
              "end": 724
            },
            "start": 721,
            "end": 724
          },
          "start": 720,
          "end": 724
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "T",
            "optional": false,
            "typeAnnotation": null,
            "start": 727,
            "end": 728
          },
          "typeArguments": null,
          "start": 727,
          "end": 728
        },
        "start": 725,
        "end": 728
      },
      "body": null,
      "expression": false,
      "start": 692,
      "end": 729
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "h",
        "optional": false,
        "typeAnnotation": null,
        "start": 747,
        "end": 748
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
              "start": 749,
              "end": 750
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 749,
            "end": 750
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "U",
              "optional": false,
              "typeAnnotation": null,
              "start": 752,
              "end": 753
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 752,
            "end": 753
          }
        ],
        "start": 748,
        "end": 754
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
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
                "start": 758,
                "end": 759
              },
              "typeArguments": null,
              "start": 758,
              "end": 759
            },
            "start": 756,
            "end": 759
          },
          "start": 755,
          "end": 759
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "y",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "U",
                "optional": false,
                "typeAnnotation": null,
                "start": 764,
                "end": 765
              },
              "typeArguments": null,
              "start": 764,
              "end": 765
            },
            "start": 762,
            "end": 765
          },
          "start": 761,
          "end": 765
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSUnionType",
          "types": [
            {
              "type": "TSArrayType",
              "elementType": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "T",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 768,
                  "end": 769
                },
                "typeArguments": null,
                "start": 768,
                "end": 769
              },
              "start": 768,
              "end": 771
            },
            {
              "type": "TSArrayType",
              "elementType": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "U",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 774,
                  "end": 775
                },
                "typeArguments": null,
                "start": 774,
                "end": 775
              },
              "start": 774,
              "end": 777
            }
          ],
          "start": 768,
          "end": 777
        },
        "start": 766,
        "end": 777
      },
      "body": null,
      "expression": false,
      "start": 730,
      "end": 778
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
            "name": "a",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 787,
                "end": 793
              },
              "start": 785,
              "end": 793
            },
            "start": 784,
            "end": 793
          },
          "init": null,
          "definite": false,
          "start": 784,
          "end": 793
        }
      ],
      "declare": false,
      "start": 780,
      "end": 794
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
            "name": "a",
            "optional": false,
            "typeAnnotation": null,
            "start": 799,
            "end": 800
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "bar",
              "optional": false,
              "typeAnnotation": null,
              "start": 803,
              "end": 806
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Literal",
                "value": 1,
                "raw": "1",
                "start": 807,
                "end": 808
              },
              {
                "type": "Literal",
                "value": 1,
                "raw": "1",
                "start": 810,
                "end": 811
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "g",
                "optional": false,
                "typeAnnotation": null,
                "start": 813,
                "end": 814
              }
            ],
            "optional": false,
            "start": 803,
            "end": 815
          },
          "definite": false,
          "start": 799,
          "end": 815
        }
      ],
      "declare": false,
      "start": 795,
      "end": 816
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
            "name": "a",
            "optional": false,
            "typeAnnotation": null,
            "start": 846,
            "end": 847
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "baz",
              "optional": false,
              "typeAnnotation": null,
              "start": 850,
              "end": 853
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Literal",
                "value": 1,
                "raw": "1",
                "start": 854,
                "end": 855
              },
              {
                "type": "Literal",
                "value": 1,
                "raw": "1",
                "start": 857,
                "end": 858
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "g",
                "optional": false,
                "typeAnnotation": null,
                "start": 860,
                "end": 861
              }
            ],
            "optional": false,
            "start": 850,
            "end": 862
          },
          "definite": false,
          "start": 846,
          "end": 862
        }
      ],
      "declare": false,
      "start": 842,
      "end": 863
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
            "name": "b",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSUnionType",
                "types": [
                  {
                    "type": "TSNumberKeyword",
                    "start": 897,
                    "end": 903
                  },
                  {
                    "type": "TSStringKeyword",
                    "start": 906,
                    "end": 912
                  }
                ],
                "start": 897,
                "end": 912
              },
              "start": 895,
              "end": 912
            },
            "start": 894,
            "end": 912
          },
          "init": null,
          "definite": false,
          "start": 894,
          "end": 912
        }
      ],
      "declare": false,
      "start": 890,
      "end": 913
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
            "name": "b",
            "optional": false,
            "typeAnnotation": null,
            "start": 918,
            "end": 919
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null,
              "start": 922,
              "end": 925
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "g",
                "optional": false,
                "typeAnnotation": null,
                "start": 926,
                "end": 927
              }
            ],
            "optional": false,
            "start": 922,
            "end": 928
          },
          "definite": false,
          "start": 918,
          "end": 928
        }
      ],
      "declare": false,
      "start": 914,
      "end": 929
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
            "name": "b",
            "optional": false,
            "typeAnnotation": null,
            "start": 992,
            "end": 993
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "bar",
              "optional": false,
              "typeAnnotation": null,
              "start": 996,
              "end": 999
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Literal",
                "value": 1,
                "raw": "1",
                "start": 1000,
                "end": 1001
              },
              {
                "type": "Literal",
                "value": "one",
                "raw": "\"one\"",
                "start": 1003,
                "end": 1008
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "g",
                "optional": false,
                "typeAnnotation": null,
                "start": 1010,
                "end": 1011
              }
            ],
            "optional": false,
            "start": 996,
            "end": 1012
          },
          "definite": false,
          "start": 992,
          "end": 1012
        }
      ],
      "declare": false,
      "start": 988,
      "end": 1013
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
            "name": "b",
            "optional": false,
            "typeAnnotation": null,
            "start": 1066,
            "end": 1067
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "bar",
              "optional": false,
              "typeAnnotation": null,
              "start": 1070,
              "end": 1073
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Literal",
                "value": "one",
                "raw": "\"one\"",
                "start": 1074,
                "end": 1079
              },
              {
                "type": "Literal",
                "value": 1,
                "raw": "1",
                "start": 1081,
                "end": 1082
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "g",
                "optional": false,
                "typeAnnotation": null,
                "start": 1084,
                "end": 1085
              }
            ],
            "optional": false,
            "start": 1070,
            "end": 1086
          },
          "definite": false,
          "start": 1066,
          "end": 1086
        }
      ],
      "declare": false,
      "start": 1062,
      "end": 1087
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
            "name": "b",
            "optional": false,
            "typeAnnotation": null,
            "start": 1140,
            "end": 1141
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "baz",
              "optional": false,
              "typeAnnotation": null,
              "start": 1144,
              "end": 1147
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "b",
                "optional": false,
                "typeAnnotation": null,
                "start": 1148,
                "end": 1149
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "b",
                "optional": false,
                "typeAnnotation": null,
                "start": 1151,
                "end": 1152
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "g",
                "optional": false,
                "typeAnnotation": null,
                "start": 1154,
                "end": 1155
              }
            ],
            "optional": false,
            "start": 1144,
            "end": 1156
          },
          "definite": false,
          "start": 1140,
          "end": 1156
        }
      ],
      "declare": false,
      "start": 1136,
      "end": 1157
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
            "name": "d",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSUnionType",
                "types": [
                  {
                    "type": "TSArrayType",
                    "elementType": {
                      "type": "TSNumberKeyword",
                      "start": 1200,
                      "end": 1206
                    },
                    "start": 1200,
                    "end": 1208
                  },
                  {
                    "type": "TSArrayType",
                    "elementType": {
                      "type": "TSStringKeyword",
                      "start": 1211,
                      "end": 1217
                    },
                    "start": 1211,
                    "end": 1219
                  }
                ],
                "start": 1200,
                "end": 1219
              },
              "start": 1198,
              "end": 1219
            },
            "start": 1197,
            "end": 1219
          },
          "init": null,
          "definite": false,
          "start": 1197,
          "end": 1219
        }
      ],
      "declare": false,
      "start": 1193,
      "end": 1220
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
            "name": "d",
            "optional": false,
            "typeAnnotation": null,
            "start": 1225,
            "end": 1226
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null,
              "start": 1229,
              "end": 1232
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "h",
                "optional": false,
                "typeAnnotation": null,
                "start": 1233,
                "end": 1234
              }
            ],
            "optional": false,
            "start": 1229,
            "end": 1235
          },
          "definite": false,
          "start": 1225,
          "end": 1235
        }
      ],
      "declare": false,
      "start": 1221,
      "end": 1236
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
            "name": "d",
            "optional": false,
            "typeAnnotation": null,
            "start": 1285,
            "end": 1286
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "bar",
              "optional": false,
              "typeAnnotation": null,
              "start": 1289,
              "end": 1292
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Literal",
                "value": 1,
                "raw": "1",
                "start": 1293,
                "end": 1294
              },
              {
                "type": "Literal",
                "value": "one",
                "raw": "\"one\"",
                "start": 1296,
                "end": 1301
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "h",
                "optional": false,
                "typeAnnotation": null,
                "start": 1303,
                "end": 1304
              }
            ],
            "optional": false,
            "start": 1289,
            "end": 1305
          },
          "definite": false,
          "start": 1285,
          "end": 1305
        }
      ],
      "declare": false,
      "start": 1281,
      "end": 1306
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
            "name": "d",
            "optional": false,
            "typeAnnotation": null,
            "start": 1345,
            "end": 1346
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "bar",
              "optional": false,
              "typeAnnotation": null,
              "start": 1349,
              "end": 1352
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Literal",
                "value": "one",
                "raw": "\"one\"",
                "start": 1353,
                "end": 1358
              },
              {
                "type": "Literal",
                "value": 1,
                "raw": "1",
                "start": 1360,
                "end": 1361
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "h",
                "optional": false,
                "typeAnnotation": null,
                "start": 1363,
                "end": 1364
              }
            ],
            "optional": false,
            "start": 1349,
            "end": 1365
          },
          "definite": false,
          "start": 1345,
          "end": 1365
        }
      ],
      "declare": false,
      "start": 1341,
      "end": 1366
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
            "name": "d",
            "optional": false,
            "typeAnnotation": null,
            "start": 1405,
            "end": 1406
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "baz",
              "optional": false,
              "typeAnnotation": null,
              "start": 1409,
              "end": 1412
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "d",
                "optional": false,
                "typeAnnotation": null,
                "start": 1413,
                "end": 1414
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "d",
                "optional": false,
                "typeAnnotation": null,
                "start": 1416,
                "end": 1417
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "g",
                "optional": false,
                "typeAnnotation": null,
                "start": 1419,
                "end": 1420
              }
            ],
            "optional": false,
            "start": 1409,
            "end": 1421
          },
          "definite": false,
          "start": 1405,
          "end": 1421
        }
      ],
      "declare": false,
      "start": 1401,
      "end": 1422
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 495,
  "end": 1460
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Identifier",
    "value": "declare",
    "start": 495,
    "end": 502
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 503,
    "end": 511
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 512,
    "end": 515
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 515,
    "end": 516
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 516,
    "end": 517
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 517,
    "end": 518
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 518,
    "end": 519
  },
  {
    "type": "Identifier",
    "value": "cb",
    "start": 519,
    "end": 521
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 521,
    "end": 522
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 523,
    "end": 524
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 524,
    "end": 525
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 525,
    "end": 526
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 527,
    "end": 533
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 533,
    "end": 534
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 535,
    "end": 536
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 536,
    "end": 537
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 538,
    "end": 544
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 544,
    "end": 545
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 546,
    "end": 548
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 549,
    "end": 550
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 550,
    "end": 551
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 551,
    "end": 552
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 553,
    "end": 554
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 554,
    "end": 555
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 556,
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
    "value": "bar",
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
    "value": ",",
    "start": 578,
    "end": 579
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 580,
    "end": 581
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 581,
    "end": 582
  },
  {
    "type": "Identifier",
    "value": "V",
    "start": 583,
    "end": 584
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 584,
    "end": 585
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 585,
    "end": 586
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 586,
    "end": 587
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 587,
    "end": 588
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 589,
    "end": 590
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 590,
    "end": 591
  },
  {
    "type": "Identifier",
    "value": "y",
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
    "value": "U",
    "start": 595,
    "end": 596
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 596,
    "end": 597
  },
  {
    "type": "Identifier",
    "value": "cb",
    "start": 598,
    "end": 600
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 600,
    "end": 601
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 602,
    "end": 603
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 603,
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
    "value": "T",
    "start": 606,
    "end": 607
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 607,
    "end": 608
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 609,
    "end": 610
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 610,
    "end": 611
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 612,
    "end": 613
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 613,
    "end": 614
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 615,
    "end": 617
  },
  {
    "type": "Identifier",
    "value": "V",
    "start": 618,
    "end": 619
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 619,
    "end": 620
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 620,
    "end": 621
  },
  {
    "type": "Identifier",
    "value": "V",
    "start": 622,
    "end": 623
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 623,
    "end": 624
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 625,
    "end": 632
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 633,
    "end": 641
  },
  {
    "type": "Identifier",
    "value": "baz",
    "start": 642,
    "end": 645
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 645,
    "end": 646
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 646,
    "end": 647
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 647,
    "end": 648
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 649,
    "end": 650
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 650,
    "end": 651
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 651,
    "end": 652
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 652,
    "end": 653
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 653,
    "end": 654
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 655,
    "end": 656
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 656,
    "end": 657
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 658,
    "end": 659
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 659,
    "end": 660
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 661,
    "end": 662
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 662,
    "end": 663
  },
  {
    "type": "Identifier",
    "value": "cb",
    "start": 664,
    "end": 666
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 666,
    "end": 667
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 668,
    "end": 669
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 669,
    "end": 670
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 670,
    "end": 671
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 672,
    "end": 673
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 673,
    "end": 674
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 675,
    "end": 676
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 676,
    "end": 677
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 678,
    "end": 679
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 679,
    "end": 680
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 681,
    "end": 683
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 684,
    "end": 685
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 685,
    "end": 686
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 686,
    "end": 687
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 688,
    "end": 689
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 689,
    "end": 690
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 692,
    "end": 699
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 700,
    "end": 708
  },
  {
    "type": "Identifier",
    "value": "g",
    "start": 709,
    "end": 710
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 710,
    "end": 711
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 711,
    "end": 712
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 712,
    "end": 713
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 713,
    "end": 714
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 714,
    "end": 715
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 715,
    "end": 716
  },
  {
    "type": "Identifier",
    "value": "T",
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
    "type": "Identifier",
    "value": "y",
    "start": 720,
    "end": 721
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 721,
    "end": 722
  },
  {
    "type": "Identifier",
    "value": "T",
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
    "value": "T",
    "start": 727,
    "end": 728
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 728,
    "end": 729
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 730,
    "end": 737
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 738,
    "end": 746
  },
  {
    "type": "Identifier",
    "value": "h",
    "start": 747,
    "end": 748
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 748,
    "end": 749
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 749,
    "end": 750
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 750,
    "end": 751
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 752,
    "end": 753
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 753,
    "end": 754
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 754,
    "end": 755
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 755,
    "end": 756
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 756,
    "end": 757
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 758,
    "end": 759
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 759,
    "end": 760
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 761,
    "end": 762
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 762,
    "end": 763
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 764,
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
    "value": ":",
    "start": 766,
    "end": 767
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 768,
    "end": 769
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 769,
    "end": 770
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 770,
    "end": 771
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 772,
    "end": 773
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 774,
    "end": 775
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 775,
    "end": 776
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 776,
    "end": 777
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 777,
    "end": 778
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 780,
    "end": 783
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 784,
    "end": 785
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 785,
    "end": 786
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 787,
    "end": 793
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 793,
    "end": 794
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 795,
    "end": 798
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 799,
    "end": 800
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 801,
    "end": 802
  },
  {
    "type": "Identifier",
    "value": "bar",
    "start": 803,
    "end": 806
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 806,
    "end": 807
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 807,
    "end": 808
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 808,
    "end": 809
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 810,
    "end": 811
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 811,
    "end": 812
  },
  {
    "type": "Identifier",
    "value": "g",
    "start": 813,
    "end": 814
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 814,
    "end": 815
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 815,
    "end": 816
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 842,
    "end": 845
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 846,
    "end": 847
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 848,
    "end": 849
  },
  {
    "type": "Identifier",
    "value": "baz",
    "start": 850,
    "end": 853
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 853,
    "end": 854
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 854,
    "end": 855
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 855,
    "end": 856
  },
  {
    "type": "Numeric",
    "value": "1",
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
    "value": "g",
    "start": 860,
    "end": 861
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 861,
    "end": 862
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 862,
    "end": 863
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 890,
    "end": 893
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 894,
    "end": 895
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 895,
    "end": 896
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 897,
    "end": 903
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 904,
    "end": 905
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 906,
    "end": 912
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 912,
    "end": 913
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 914,
    "end": 917
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 918,
    "end": 919
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 920,
    "end": 921
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 922,
    "end": 925
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 925,
    "end": 926
  },
  {
    "type": "Identifier",
    "value": "g",
    "start": 926,
    "end": 927
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 927,
    "end": 928
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 928,
    "end": 929
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 988,
    "end": 991
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 992,
    "end": 993
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 994,
    "end": 995
  },
  {
    "type": "Identifier",
    "value": "bar",
    "start": 996,
    "end": 999
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 999,
    "end": 1000
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 1000,
    "end": 1001
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1001,
    "end": 1002
  },
  {
    "type": "String",
    "value": "\"one\"",
    "start": 1003,
    "end": 1008
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1008,
    "end": 1009
  },
  {
    "type": "Identifier",
    "value": "g",
    "start": 1010,
    "end": 1011
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1011,
    "end": 1012
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1012,
    "end": 1013
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1062,
    "end": 1065
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 1066,
    "end": 1067
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1068,
    "end": 1069
  },
  {
    "type": "Identifier",
    "value": "bar",
    "start": 1070,
    "end": 1073
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1073,
    "end": 1074
  },
  {
    "type": "String",
    "value": "\"one\"",
    "start": 1074,
    "end": 1079
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1079,
    "end": 1080
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 1081,
    "end": 1082
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1082,
    "end": 1083
  },
  {
    "type": "Identifier",
    "value": "g",
    "start": 1084,
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
    "value": ";",
    "start": 1086,
    "end": 1087
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1136,
    "end": 1139
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 1140,
    "end": 1141
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1142,
    "end": 1143
  },
  {
    "type": "Identifier",
    "value": "baz",
    "start": 1144,
    "end": 1147
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1147,
    "end": 1148
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 1148,
    "end": 1149
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1149,
    "end": 1150
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 1151,
    "end": 1152
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1152,
    "end": 1153
  },
  {
    "type": "Identifier",
    "value": "g",
    "start": 1154,
    "end": 1155
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1155,
    "end": 1156
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1156,
    "end": 1157
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1193,
    "end": 1196
  },
  {
    "type": "Identifier",
    "value": "d",
    "start": 1197,
    "end": 1198
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1198,
    "end": 1199
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1200,
    "end": 1206
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1206,
    "end": 1207
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1207,
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
    "value": "string",
    "start": 1211,
    "end": 1217
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1217,
    "end": 1218
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1218,
    "end": 1219
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1219,
    "end": 1220
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1221,
    "end": 1224
  },
  {
    "type": "Identifier",
    "value": "d",
    "start": 1225,
    "end": 1226
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1227,
    "end": 1228
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 1229,
    "end": 1232
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1232,
    "end": 1233
  },
  {
    "type": "Identifier",
    "value": "h",
    "start": 1233,
    "end": 1234
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1234,
    "end": 1235
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1235,
    "end": 1236
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1281,
    "end": 1284
  },
  {
    "type": "Identifier",
    "value": "d",
    "start": 1285,
    "end": 1286
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1287,
    "end": 1288
  },
  {
    "type": "Identifier",
    "value": "bar",
    "start": 1289,
    "end": 1292
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1292,
    "end": 1293
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 1293,
    "end": 1294
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1294,
    "end": 1295
  },
  {
    "type": "String",
    "value": "\"one\"",
    "start": 1296,
    "end": 1301
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1301,
    "end": 1302
  },
  {
    "type": "Identifier",
    "value": "h",
    "start": 1303,
    "end": 1304
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1304,
    "end": 1305
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1305,
    "end": 1306
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1341,
    "end": 1344
  },
  {
    "type": "Identifier",
    "value": "d",
    "start": 1345,
    "end": 1346
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1347,
    "end": 1348
  },
  {
    "type": "Identifier",
    "value": "bar",
    "start": 1349,
    "end": 1352
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1352,
    "end": 1353
  },
  {
    "type": "String",
    "value": "\"one\"",
    "start": 1353,
    "end": 1358
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1358,
    "end": 1359
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 1360,
    "end": 1361
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1361,
    "end": 1362
  },
  {
    "type": "Identifier",
    "value": "h",
    "start": 1363,
    "end": 1364
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1364,
    "end": 1365
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1365,
    "end": 1366
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1401,
    "end": 1404
  },
  {
    "type": "Identifier",
    "value": "d",
    "start": 1405,
    "end": 1406
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1407,
    "end": 1408
  },
  {
    "type": "Identifier",
    "value": "baz",
    "start": 1409,
    "end": 1412
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1412,
    "end": 1413
  },
  {
    "type": "Identifier",
    "value": "d",
    "start": 1413,
    "end": 1414
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1414,
    "end": 1415
  },
  {
    "type": "Identifier",
    "value": "d",
    "start": 1416,
    "end": 1417
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1417,
    "end": 1418
  },
  {
    "type": "Identifier",
    "value": "g",
    "start": 1419,
    "end": 1420
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1420,
    "end": 1421
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1421,
    "end": 1422
  }
]
```
